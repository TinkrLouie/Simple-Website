// scroll to top button
let scrollToTopBtn = document.getElementById("scrollToTopBtn");
let rootElement = document.documentElement;
scrollToTopBtn.addEventListener("click", function scrollToTop() {
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

const sf = document.getElementById("searchTitleForm");

sf.addEventListener("submit", async function(event) {
  event.preventDefault();
  const data = new FormData(sf);
  const params = new URLSearchParams(data);
  const response =  await fetch("http://127.0.0.1:8090/recipe/search?" + params);
  const recipes = await response.json();
  const scf = document.getElementById("searchContentFull");
  let lis ="";
  for (const recipe of recipes) {
    lis += `<li> ${recipe.title} </li>`;
  }
  scf.innerHTML = lis;
});

try { 
fetch('http://127.0.0.1:8090/about')
 .then(response => response.text())
 .then(body =>
    document.getElementById("about").innerHTML=body);

fetch('http://127.0.0.1:8090/latest/title')
 .then(response => response.text())
 .then(body =>
    document.getElementById("get_latest_title").innerHTML=body);

fetch('http://127.0.0.1:8090/latest/summary')
.then(response => response.text())
.then(body =>
   document.getElementById("latest_desc").innerHTML=body);
  
fetch('http://127.0.0.1:8090/latest/pic')
.then(response => response.text())
.then(body =>
   document.getElementById("latest_pic").innerHTML=`<a href="${body}" class="image-link text-danger font-weight-bold">Click here to see picture...</a>`);

fetch('http://127.0.0.1:8090/featured_O/title')
.then(response => response.text())
.then(body =>
   document.getElementById("featured_O/title").innerHTML=`
   <a class="text-dark">${body}</a>
 `);

 fetch('http://127.0.0.1:8090/featured_O/date')
 .then(response => response.text())
 .then(body =>
    document.getElementById("featured_O/date").innerHTML=body); 

 fetch('http://127.0.0.1:8090/featured_O/summary')
 .then(response => response.text())
 .then(body =>
    document.getElementById("featured_O/summary").innerHTML=body); 

 fetch('http://127.0.0.1:8090/featured_O/ingr')
 .then(response => response.text())
 .then(body =>
    document.getElementById("featured_O/ingr").innerHTML="Ingredients : " + body); 
  
 fetch('http://127.0.0.1:8090/featured_O/pic')
 .then(response => response.text())
 .then(body =>
    document.getElementById("featured_O/pic").innerHTML +=`<img class="card-img-right flex-auto d-none d-md-block" src="${body}" alt="Picture not found">`); 

fetch('http://127.0.0.1:8090/featured_EU/title')
.then(response => response.text())
.then(body =>
   document.getElementById("featured_EU/title").innerHTML=`
   <a class="text-dark">${body}</a>
 `);
fetch('http://127.0.0.1:8090/featured_EU/date')
.then(response => response.text())
.then(body =>
   document.getElementById("featured_EU/date").innerHTML=body); 
fetch('http://127.0.0.1:8090/featured_EU/summary')
.then(response => response.text())
.then(body =>
   document.getElementById("featured_EU/summary").innerHTML=body); 
fetch('http://127.0.0.1:8090/featured_EU/ingr')
.then(response => response.text())
.then(body =>
   document.getElementById("featured_EU/ingr").innerHTML="Ingredients : " + body); 
 
fetch('http://127.0.0.1:8090/featured_EU/pic')
.then(response => response.text())
.then(body =>
   document.getElementById("featured_EU/pic").innerHTML +=`<img class="card-img-right flex-auto d-none d-md-block" src="${body}" alt="Picture not found">`); 

fetch('http://127.0.0.1:8090/blog3/title')
.then(response => response.text())
.then(body =>
   document.getElementById("blog3/title").innerHTML=`
   <a class="text-dark">${body}</a>
 `);
fetch('http://127.0.0.1:8090/blog3/date')
.then(response => response.text())
.then(body =>
   document.getElementById("blog3/date").innerHTML=body); 
fetch('http://127.0.0.1:8090/blog3/summary')
.then(response => response.text())
.then(body =>
   document.getElementById("blog3/summary").innerHTML=body); 
fetch('http://127.0.0.1:8090/blog3/ingr')
.then(response => response.text())
.then(body =>
   document.getElementById("blog3/ingr").innerHTML="Ingredients : " + body); 
 
fetch('http://127.0.0.1:8090/blog3/pic')
.then(response => response.text())
.then(body =>
   document.getElementById("blog3/pic").innerHTML +=`<img class="card-img-right flex-auto d-none d-md-block" src="${body}" alt="Picture not found">`); 

fetch('http://127.0.0.1:8090/blog4/title')
.then(response => response.text())
.then(body =>
   document.getElementById("blog4/title").innerHTML=`
   <a class="text-dark">${body}</a>
 `);

fetch('http://127.0.0.1:8090/blog4/date')
.then(response => response.text())
.then(body =>
   document.getElementById("blog4/date").innerHTML=body); 
fetch('http://127.0.0.1:8090/blog4/summary')
.then(response => response.text())
.then(body =>
   document.getElementById("blog4/summary").innerHTML=body); 
fetch('http://127.0.0.1:8090/blog4/ingr')
.then(response => response.text())
.then(body =>
   document.getElementById("blog4/ingr").innerHTML="Ingredients : " + body); 
 
fetch('http://127.0.0.1:8090/blog4/pic')
.then(response => response.text())
.then(body =>
   document.getElementById("blog4/pic").innerHTML +=`<img class="card-img-right flex-auto d-none d-md-block" src="${body}" alt="Picture not found">`); 
}
catch(error) {alert("Server disconnected, try again later")}

  function search(source, name) {
    var results;

    name = name.toUpperCase();
    results = source.filter(function(entry) {
        return entry.name.toUpperCase().indexOf(name) !== -1;
    });
    return results;
}