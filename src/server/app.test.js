'use strict';

const request = require('supertest');
const app = require('./app');

describe('Test service', () => {
    test('GET /login', () => {
        return request(app)
	    .get('/login')
	    .expect(200);
    });
    test('GET /blog4/summary  returns JSON', () => {
        return request(app)
	    .get('/blog4/summary')
	    .expect('Content-type', /json/);
    });

    test('POST /updated', () => {
        const params = { cuisine = "European" , title: 'Roast', date: '2022-01-26', desc : "Good food", ingr : "Egg", pic = "N/a"};
        return request(app)
        .post('/updated')
        .send(params)
	    .expect(200);
    });
});