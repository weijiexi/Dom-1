// 👉 1- Finding an element on the page and saving a reference to it
// getElementById()可以到达 DOM 树中的特定标签。它将返回包含该标签的对象。
// getElementsByTagName()方法返回一个对象集合，这个集合是一个动态的 HTMLCollection 对象。
// getElementsByClassName()方法返回一个对象集合，这个集合是一个动态的 HTMLCollection 对象。
    //  Older: getElementById, getElementsByTagName, getElementsByClassName
    //  Newer: querySelector, querySelectorAll
    //  Select the following single elements from the div.card
    const allLinks = document.getElementsByTagName("a");
    const allCards = document.getElementsByClassName("card");
    const logoTitleOld = document.getElementById("logoTitle");
    
    // A- finding across the entire DOM
    // querySelector() 方法返回文档中匹配指定 CSS 选择器的一个元素。
    // querySelector() 方法仅仅返回匹配指定选择器的第一个元素。
    // 如果你需要返回所有的元素，请使用 querySelectorAll() 方法替代。
    
    const header = document.querySelector("header");    //针对整个document，找到第一个header
    const logoTitle = document.querySelector("#logoTitle");
    const firstCard = document.querySelector(".card:nth-of-type(1)")
    
    // B- finding within one particular element
    const imageFirstCard = firstCard.querySelector("img"); //在firstCard中找到第一个img
    const titleFirstCard = firstCard.querySelector("h2");
    const subtitleFirstCard = firstCard.querySelector("h3");
    const textFirstCard = firstCard.querySelector("p");
    
    // C- traversing with dot notation
    // The nextElementSibling property in JavaScript is used to get the next sibling element of a specified element in the DOM (Document Object Model). 
    // It returns the next sibling element that is an element node, or null if there is no such sibling.
    const link1FirstCard = textFirstCard.nextElementSibling; //找到textFirstCard的下一个兄弟节点
    const link2FirstCard = link1FirstCard.nextElementSibling;
    
    
    // 👉 2- Finding collections of elements in the DOM
    // A- Find all the anchor tags inside the nav element
    const links = document.querySelectorAll("nav a"); //找到nav下的所有a标签
    // B- Loop over the links and console.log their text content
    links.forEach(link => console.log(link.textContent)); //遍历links，将每个link的textContent打印出来
    // C- Turn the collection of links into a real array
    const linkRealArray = Array.from(links); //将links转换为真正的数组
    // D- Use .filter to find the anchor tag with the textContent of "Home"
    const homeLink =linkRealArray.find(link => link.textContent === "Home"); //找到linkRealArray中textContent为"Home"的元素
    
    
    // 👉 3- Changing an element's text content
    //  A- Change the cat-related content into dog-related content
    // really fun to see how the page changes
    titleFirstCard.textContent = "Dog Photo";
    logoTitle.textContent = "Dog Photo Website";
    subtitleFirstCard.textContent = "Cute dogs";
    textFirstCard.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.";
    link1FirstCard.textContent = "Adopt a dog";
    link2FirstCard.textContent = "Adopt a dog";
    //  B- Have the students research online the difference between textContent and innerText
    
    
    
    
    // 👉 4- Changing any property
    //  A- Using dot notation to change a few attributes
    logoTitle.className = "logo";
    imageFirstCard.src = "https://picsum.photos/200/300"; //更改imageFirstCard的src
    //  B- Using .setAttribute to change a few attributes
    link1FirstCard.setAttribute("href", "https://www.google.com"); //更改link1FirstCard的href
    link2FirstCard.setAttribute("href", "https://www.google.com"); //更改link2FirstCard的href
    
    
    // 👉 5- Changing the styling of an element
    //  A- By changing the class names on the element with the classList API
    header.classList.add("new-class"); //在header中添加new-class
    header.classList.remove("new-class"); //在header中删除new-class
    //  B- By manipulating inline styles on the element
    header.style.backgroundColor = "yellow"; //更改header的背景颜色
    
    
    // 👉 6- Creating new elements from scratch and appending them
    // Create a new link inside the nav for "Blog"
    const blogLink = document.createElement("a"); //创建一个新的a标签
    blogLink.textContent = "Blog"; //设置新a标签的textContent
    blogLink.href = "#"; //设置新a标签的href
    document.querySelector("nav").appendChild(blogLink); //将新a标签添加到nav中
    
    
    // 👉 7- Making a copy of the card and appending it to the card group
    // DOM nodes can only exist in one spot in the DOM
    // We cannot append the same copy multiple times
    const secondCard = firstCard.cloneNode(true); //复制firstCard
    document.querySelector(".card-group").appendChild(secondCard); //将secondCard添加到card-group中
    
    // 👉 8- Removing an existing element and putting it back [STRETCH if time allows]
    
    
    // 👉 9- Show to students the insertAdjacentHTML method [STRETCH if time allows]
    const data = {
        "contact":{
            "phone": "555-555-5555",
            "email": "eeedddrrr@gmail.com"
        }
    }
    
    const contactHeading = document.querySelector(".contact-heading");
    contactHeading.insertAdjacentHTML("beforeend", `<p>${data.contact.phone}</p>`);
    