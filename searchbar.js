let list = ["elma","armut","kavun","karpuz", "kayısı", 
"şeftali", "portakal","mandalina", "kiraz","ayva"];

const searchBar = document.getElementById("searchBar");

window.onload=function(){
console.log(searchBar);
searchBar.addEventListener('keyup', (e)=>{
    const enteredString = e.target.value;
    console.log(e.target.value);
    list.filter(list => {
        return list.includes(enteredString);
        }
    );
});
}
/*const displayList = (list)=>{
    const htmlString = list
        .map((list)=>{
            return `
            <li class =  "list">
                <h2> ${list} </h2>

            </li>
            `;
    })
    .join('');

    list.innerHTML = htmlString;
}; */



//displayList(list);
