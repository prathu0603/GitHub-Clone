
function username(){

    document.getElementById("buttonhide").style.display = "none";

    let x = localStorage["username"];

    function requestUserRepos(username){
    const req = new XMLHttpRequest();
    const url = `https://api.github.com/users/${username}/repos`;
    req.open('GET', url, true);
    req.onload = function() {
        const data = JSON.parse(this.response);
        for(i in data){
            console.log(data[i].html_url)

            let ol = document.getElementById('userRepos');
    
            let li = document.createElement('li');
            
            
            //li.innerHTML = (`<p>${data[i].name}</p>`);
            li.innerHTML = (`<a href="${data[i].html_url}"><p>${data[i].name}</p></a>`);

            li.setAttribute("class", "textcolor");
            
            
            ol.appendChild(li);
        }
        
    }
    req.send();
   } 

   requestUserRepos(x);  
}

function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("searchbar");
    filter = input.value.toUpperCase();
    ul = document.getElementById("userRepos");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        console.log(a)
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
