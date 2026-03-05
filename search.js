const searchBar = document.getElementById("searchBar");

searchBar.addEventListener("keyup", function(){

let filter = searchBar.value.toLowerCase();

let shows = document.querySelectorAll(".show-card");

shows.forEach(show => {

let title = show.querySelector("h3").textContent.toLowerCase();

if(title.includes(filter)){
show.style.display = "block";
}
else{
show.style.display = "none";
}

});

});