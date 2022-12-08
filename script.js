let products = {
    data : [
        {
            title: "title : NCERT",
            author: "author : P JAGADEESH",
            subject: "Basic",
            date: "2022-01-31",
            image: "img/NCER.jpg" ,
        },
        {
            title: "title : Cryptography",
            author: "author : P.J.BOSE",
            subject: "IT",
            date: "2022-11-11",
            image: "img/crypto.jpg" ,
        },
        {
            title: "title : DBMS",
            author: "author : KAVERI S",
            subject: "IT",
            date:  "2022-12-22",
            image: "img/Database.jpg" ,
        },
        {
            title: "title : Computer networks and security",
            author: "author : PRIYANKA",
            subject: "CSE",
            date:  "2022-03-20",
            image: "img/cns.jpg" ,
        },
        {
            title: "title : Mental Peace",
            author: "author : Putin",
            subject: "Novel",
            date:  "2022-11-10",
            image: "img/Network.jpg" ,
        },
        {
            title: "title : Artificial Intelligence",
            author: "author : Harish P",
            subject: "ISE",
            date:  "2022-12-20",
            image: "img/Os.jpg" ,
        },
        {
            title: "title : System design",
            author: "author : AmaRNADH.W",
            subject: "CSE",
            date:  "2022-12-20",
            image: "img/Sdesign.jpg" ,
        },
        {
            title: "title : Mathematics",
            author: "author : HARIKRISHNA",
            subject: "Basic",
            date: "2022-01-21",
            image: "img/Maths.jpg" ,
        },
        {
            title: "title : Harry Potter",
            author: "author : J.K. Rowling",
            subject: "Fantasy",
            date:  "1999-12-20",
            image: "img/hp.jpg" ,
        },
        {
            title: "title : Operating System",
            author: "author : RAMA KRISHNA K",
            subject: "CSE",
            date:  "2022-04-20",
            image: "img/Nt.jpg" ,
        },
        {
            title: "title : Atomic Habbits",
            author: "author : JEEVAN E",
            subject: "Novel",
            date:  "1995-12-22",
            image: "img/ah.jpg" ,
        },
        {
            title: "title : How to win friends and influence people",
            author: "author : LEHAN FAYAZ",
            subject: "Novel",
            date:  "2002-02-02",
            image: "img/htw.jpeg" ,
        },
        {
            title: "title : Image Processing",
            author: "author : BHANU CHANDAR",
            subject: "ISE",
            date:  "2021-12-20",
            image: "img/wta.jpg" ,
        },
        {
            title: "title : Physics",
            author: "author : Nischitha E",
            subject: "Basic",
            date:  "2022-12-20",
            image: "img/Ncert.jpg" ,
        },
        {
            title: "title : UNIX",
            author: "author : Aakash chopra",
            subject: "IT",
            date: "2022-08-08",
            image: "img/Nt.jpg" ,
        },
    ],
};

for(let i of products.data){
    let card = document.createElement("div");
    card.classList.add("card",i.subject,"hide");

    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");

    let image = document.createElement("img");
    image.setAttribute("src",i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);

    let container = document.createElement("div");
    container.classList.add("container");

    let title = document.createElement("h5");
    title.classList.add("title");
    title.innerText = i.title.toUpperCase();
    container.appendChild(title);

    let author = document.createElement("h6");
    author.classList.add("author");
    author.innerText = i.author.toUpperCase();
    container.appendChild(author);

    let sub = document.createElement("h6");
    sub.classList.add("sub");
    sub.innerText = i.subject.toUpperCase();
    container.appendChild(sub);

    let date = document.createElement("h6");
    date.classList.add("date");
    date.innerText = i.date.toUpperCase();
    container.appendChild(date);

    card.appendChild(container);
    document.getElementById("Books").appendChild(card);
}

function filterProduct(value) {
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
      if (value.toUpperCase() == button.innerText.toUpperCase()) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });

    let elements = document.querySelectorAll(".card");
    elements.forEach((element) =>{
        if(value == "all"){
            element.classList.remove("hide");
        }else{
            if(element.classList.contains(value)){
                element.classList.remove("hide");
            }
            else{
                element.classList.add("hide");
            }
        }
    });
}

document.getElementById("search").addEventListener("click", () => {
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".title");
    let cards = document.querySelectorAll(".card");
    elements.forEach((element, index) => {
      if (element.innerText.includes(searchInput.toUpperCase())) {
        cards[index].classList.remove("hide");
      } else {
        cards[index].classList.add("hide");
      }
    });
  });


  

  window.onload = () => {
    filterProduct("all");
  };



