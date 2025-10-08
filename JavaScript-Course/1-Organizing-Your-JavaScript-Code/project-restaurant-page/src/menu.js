import "./menu.css";

export function loadMenu() {
  const content = document.querySelector("#content");
  content.textContent = "";

  const containerDiv = document.createElement("div");
  containerDiv.id = "menu-container-div";
  
  const heading = document.createElement("h1");
  heading.id = "menu-heading";
  heading.textContent = "Menu";

  content.append(heading);
  content.append(containerDiv);

  let myMenu = [];

  class Food {
    constructor(name, imgUrl, description, price) {
      this.name = name;
      this.imgUrl = imgUrl;
      this.description = description;
      this.price = price;
    }
  }

  function addToMenu(name, description, imgUrl, price) {
    const food = new Food(name, description, imgUrl, price);
    myMenu.push(food);
  }

  addToMenu(
    "Momos",
    "https://www.thespruceeats.com/thmb/UnVh_-znw7ikMUciZIx5sNqBtTU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/steamed-momos-wontons-1957616-hero-01-1c59e22bad0347daa8f0dfe12894bc3c.jpg",
    "Momos are delicious steamed or fried dumplings, usually filled with vegetables, chicken, or meat, and served with spicy chili sauce.",
    "$1"
  );
  addToMenu(
    "Spring Rolls",
    "https://thaicaliente.com/wp-content/uploads/2020/09/Spring-Roll-Feature.jpg",
    "Spring rolls are crispy, cylindrical snacks filled with vegetables, meat, or noodles, often served with sweet or spicy dipping sauces.",
    "$1"
  );
  addToMenu(
    "Pizza",
    "https://assets.surlatable.com/m/15a89c2d9c6c1345/72_dpi_webp-REC-283110_Pizza.jpg",
    "pizza is a savory dish made of a flat, baked dough topped with tomato sauce, cheese, and various ingredients like vegetables, meats, or herbs.",
    "$4"
  );
  addToMenu(
    "Shahi Paneer",
    "https://indianshealthyrecipes.com/wp-content/uploads/2024/07/ShahiPaneer-3.jpg",
    "Shahi Paneer is a rich and creamy North Indian dish made with paneer (Indian cottage cheese) cooked in a spiced tomato and cashew-based gravy, often flavored with cream, saffron, and aromatic spices.",
    "$1"
  );
  addToMenu(
    "French Fries",
    "https://images.themodernproper.com/production/posts/2022/Homemade-French-Fries_8.jpg?w=1200&h=1200&q=60&fm=jpg&fit=crop&dm=1662474181&s=15046582e76b761a200998df2dcad0fd",
    "French fries are thinly sliced potatoes that are deep-fried until golden and crispy, often served hot with ketchup or other dipping sauces.",
    "$3"
  );
  addToMenu(
    "Pav Bhaji",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1b_FOBgouyPPDPOKpZ1KihH8in0hDNmUZvA&s",
    "Pav Bhaji is a popular Indian street food consisting of a spicy, mashed vegetable curry (bhaji) served with soft buttered bread rolls (pav).",
    "$2"
  );

  displayMenu();

  function displayMenu() {
    myMenu.forEach((food) => {
      const menuCard = document.createElement("div");
      menuCard.classList.add("menu-card");
      const menuCardHeading = document.createElement("h3");
      menuCardHeading.classList.add("menu-card-heading");
      const menuCardDescription = document.createElement("p");
      menuCardDescription.classList.add("menu-card-description");
      const menuCardPrice = document.createElement("h3");
      menuCardPrice.classList.add("menu-card-price");
      const menuCardImg = document.createElement("img");
      menuCardImg.classList.add("menu-card-img");
      menuCardHeading.textContent = food.name;
      menuCardImg.src = food.imgUrl;
      menuCardImg.alt = `${food.name} image`;
      menuCardDescription.textContent = food.description;
      menuCardPrice.textContent = food.price;
      menuCard.append(
        menuCardImg,
        menuCardHeading,
        menuCardDescription,
        menuCardPrice
      );
      containerDiv.append(menuCard);
    });
  }
  console.log(myMenu);
}
