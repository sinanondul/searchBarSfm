var list = [
    {
        "title":        "New York",
        "url":          "www.sefamerve.com" 
    },{
        "title":        "Gallardo",
        "url":          "https://www.lamborghini.com/",
        "IMAGE":        "https://upload.wikimedia.org/wikipedia/commons/6/67/Lamborghini_Gallardo_3.jpg",
        "Marka":        "LAMBORGHINI",
        "Kategori":     "ARABA"
    },{
        "title":        "Netherlands",
        "url":          "www.sefamerve.com"
    },{
        "title":        "Lanzarote",
        "url":          "www.sefamerve.com"
    },{
        "title":        "Italy",
        "url":          "www.sefamerve.com"
    }
];

//var obj = JSON.parse(JSON.stringifytest1);

//////////

const searchBar = document.getElementById("searchBar");

window.onload=function(){

console.log(searchBar);
var clicked = false;
var QSearch = false;

searchBar.addEventListener('click', showFrame());

function showFrame(){
    clicked=true;
};

var results = [];
searchBar.addEventListener("keyup", (a)=>{
    setTimeout(function() {
        console.log("checking");
        if( a.target.value.length >= 3){  
            console.log("Search");

            
            var searchField = "title";
            var searchVal = a.target.value;
            for (var i=0 ; i < list.length ; i++){
                if (list[i][searchField].toLowerCase() == searchVal.toLowerCase()) {
                    results.push(list[i]);
                    console.log(list[i]);

                    //populate
                    newEl = document.getElementById("pr");
                    //newEl = 




            }
        }

            return QSearch = true;
        }
        else{
            console.log("nosearch");
            return QSearch = false;
        }
    }, 1500);
});

function populate(){



}





/*
function checklength(){
    if(a.target.value.length >= 3){  
        console.log(">=3 true");
        return true;
    }
    else{
        console.log("nosearch");
        return false;
    }
};

searchBar.addEventListener('keyup', (e)=>{
    const enteredString = e.target.value;
    console.log(e.target.value);
    /*list.filter(list => {
        return list.includes(enteredString);
        }
}); */

};