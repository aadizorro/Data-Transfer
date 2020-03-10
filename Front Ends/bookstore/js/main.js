function index(){
    let xhttp = new XMLHttpRequest();

    xhttp.open("GET","http://localhost:8081/book/books",true);
    xhttp.setRequestHeader("content-type","application/JSON");
    xhttp.onreadystatechange = function(){
        if(this.status == 200 && this.readyState == 4){
            let books = JSON.parse(this.response);
            for(let i=0;i<books.length;i++){
                books.forEach(function(book){
                    let card = document.createElement("div");
                card.id = book.id;
                card.className = "card";
                card.textContent = book.title;
                document.getElementById("books").appendChild(card);
                });
            }
         
        }
    }
    
    xhttp.send();
}