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

var result = [];
var c = 0;
searchBar.addEventListener("keyup", (a)=>{
    
        //setTimeout(function(){},);

        sv = a.target.value;

        stayUp = (sv.length >= 2);
        if(stayUp){  
            console.log("Searching '"+ sv + "' ..");
            popUp.innerHTML = CpopUp;
            sidebar.innerHTML = Cside;
            productbox.innerHTML= products;
            
            var searchField = "title";
            var searchVal = sv.toUpperCase();

           result.length=0;
           c = 0;
            for (i = 0; i < list.length; i++) {
                titles = list[i]["title"].toUpperCase();
                markas = list[i]["marka"].toUpperCase();
                kategoris = list[i]["kategori"].toUpperCase();

                var inclT = titles.includes(searchVal);
                var inclM = markas.includes(searchVal);
                var inclK = kategoris.includes(searchVal);

                if(inclT || inclM|| inclK) {
                  result[c] = list[i];
                  console.log(result[c]);
                  c++;
                }
              }
            

    }

});


 if(result&&c){
var products = '<div class="waw-search-products"></div>'+
'<h3 class="waw-category-title">Ürünler</h3>'+
'<span class="w-cls">X</span>'+
'<hr>'+
'<div class="waw-products">'+
'<div class="waw-product">'+
'<a target="_self" href="'+ result[c].url +'">'+
    '<div class="waw-product-item">'+
        '<div class="product-img">'+
        '<img src="'+
       ' https://www.sefamerve.com/img/cache/data/201910/24/sefamerve_esarp_karaca90617_12_4759291571909234711_5-1200x627.jpg">'+
        '</div>'+
        '<div class="product-detail">'+
        '<span title="Kadın Giyim">Kadın Giyim</span>'+
        '<h3 title="Karamel Lacivert Eşarp">Karamel Lacivert Eşarp</h3>'+
       '<span class="price">69.00 TL</span>'+
        '</div>'+
    '</div>'+
'</a>'+
'</div> ';
}






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