var list = [
    {
        "title":        "PASSAT",
        "url":          "https://www.dogusoto.com.tr/passat-cb2",
        "IMAGE":        "https://iasbh.tmgrup.com.tr/fc96d1/0/0/0/0/0/0?u=http://i.tmgrup.com.tr/otohaber/album/2019/02/08/1549611491484.jpg&mw=1024",
        "Marka":        "VOLKSWAGEN",
        "Kategori":     "ARABA"
    },{
        "title":        "iPhone X",
        "url":          "https://www.apple.com/shop/refurbished/iphone/iphone-x",
        "IMAGE":        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphoneX-spacegray?wid=572&hei=572&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1548459953882",
        "Marka":        "LAMBORGHINI",
        "Kategori":     "TELEFON"
    },{
        "title":        "Gallardo",
        "url":          "https://www.lamborghini.com/",
        "IMAGE":        "https://upload.wikimedia.org/wikipedia/commons/6/67/Lamborghini_Gallardo_3.jpg",
        "Marka":        "LAMBORGHINI",
        "Kategori":     "ARABA"
    },{
        "title":        "Gallardo",
        "url":          "https://www.lamborghini.com/",
        "IMAGE":        "https://upload.wikimedia.org/wikipedia/commons/6/67/Lamborghini_Gallardo_3.jpg",
        "Marka":        "LAMBORGHINI",
        "Kategori":     "ARABA"
    },{
        "title":        "Gallardo",
        "url":          "https://www.lamborghini.com/",
        "IMAGE":        "https://upload.wikimedia.org/wikipedia/commons/6/67/Lamborghini_Gallardo_3.jpg",
        "Marka":        "LAMBORGHINI",
        "Kategori":     "ARABA"
    }
];


const searchBar = document.getElementById("searchBar");

window.onload=function(){

console.log(searchBar);
var clicked = false;
var QSearch = false;

searchBar.addEventListener('click', showFrame());

var CpopUp = '<div class="waw-search-container waw-open" id="waw-search-results"></div>';


function showFrame(){
    clicked=true;
};

popUp = document.getElementById("popUp");


var results = [];
searchBar.addEventListener("keyup", (a)=>{
    setTimeout(function() {
        stayUp = ( a.target.value.length >= 3);
        if( stayUp){  
            console.log("Search");
            popUp.innerHTML = CpopUp;
            sidebar.innerHTML = Cside;
            
            var searchField = "title";
            var searchVal = a.target.value;
            for (var i=0 ; i < list.length ; i++){
                if (list[i][searchField].toLowerCase() == searchVal.toLowerCase()) {
                    results.push(list[i]);
                    console.log(list[i]);
                    newEl = document.getElementById("pr");
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