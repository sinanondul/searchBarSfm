var list = [
    {
        "title":        "PASSAT",
        "url":          "https://www.dogusoto.com.tr/passat-cb2",
        "img":        "https://iasbh.tmgrup.com.tr/fc96d1/0/0/0/0/0/0?u=http://i.tmgrup.com.tr/otohaber/album/2019/02/08/1549611491484.jpg&mw=1024",
        "marka":        "VOLKSWAGEN",
        "kategori":     "ARABA"
    },{
        "title":        "iPhone X",
        "url":          "https://www.apple.com/shop/refurbished/iphone/iphone-x",
        "img":        "https://store.storeimgs.cdn-apple.com/4982/as-imgs.apple.com/is/refurb-iphoneX-spacegray?wid=572&hei=572&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1548459953882",
        "marka":        "Apple",
        "kategori":     "TELEFON"
    },{
        "title":        "Samsung A5",
        "url":          "https://www.apple.com/shop/refurbished/iphone/iphone-x",
        "img":        "https://store.storeimgs.cdn-apple.com/4982/as-imgs.apple.com/is/refurb-iphoneX-spacegray?wid=572&hei=572&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1548459953882",
        "marka":        "Samsung",
        "kategori":     "TELEFON"
    },{
        "title":        "Gallardo",
        "url":          "https://www.lamborghini.com/",
        "img":        "https://upload.wikimedia.org/wikipedia/commons/6/67/Lamborghini_Gallardo_3.jpg",
        "marka":        "LAMBORGHINI",
        "kategori":     "ARABA"
    },{
        "title":        "Air Force 1",
        "url":          "www.nike.com/tr/",
        "img":        "https://static.nike.com/a/imgs/t_PDP_1280_v1/f_auto,q_auto:eco/i1-512bfa8a-01a0-4971-bd34-9cef18a159e0/air-force-1-07-womens-shoe-KyTwDPGG.jpg",
        "marka":        "Nike",
        "kategori":     "Ayakkabı"
    },{
        "title":        "Play Station 4",
        "url":          "https://www.playstation.com/",
        "img":        "https://i.pcmag.com/imgry/reviews/0163ixlT8p0fqiqInTBkpc6-4.1569477029.fit_scale.size_1028x578.jpg",
        "marka":        "Sony",
        "kategori":     "Oyun Konsolu"
    },{
        "title":        "Xbox",
        "url":          "https://www.playstation.com/",
        "img":        "https://i.pcmag.com/imgry/reviews/0163ixlT8p0fqiqInTBkpc6-4.1569477029.fit_scale.size_1028x578.jpg",
        "marka":        "Sony",
        "kategori":     "Oyun Konsolu"
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
        if(stayUp){  
            console.log("Search");
            popUp.innerHTML = Cpop;
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

var sidebar = document.getElementById("popup")

var Cpop =  '<div class="waw-search-container waw-open" id="waw-search-results">' +
            '<div class="waw-search-sidebar">'+
                    '<p id="sidebar"></p>'+
                    '<h3 class="waw-category-title">Kategoriler</h3>'+
                        '<ul data-group="categories" class="waw-cat-list"><li data-link= ></li></ul>'+
                    '<hr>'+
                    '<h3 class="waw-category-title">Markalar</h3>'+
                        '<ul data-group="categories" class="waw-cat-list"><li data-link= ></li></ul>'+
                    '<hr>'+
                '</div></div>';





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