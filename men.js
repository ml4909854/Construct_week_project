window.onload = function () {
  setTimeout(function () {
    let section_4 = document.getElementById("section_4_div");
    let spans = document.getElementsByClassName("span");
    section_4.style.backgroundColor = "#ff385c";
    section_4.style.color = "black";
    section_4.style.fontSize = "14PX";
    for (let i = 0; i < spans.length; i++) {
      spans[i].style.border = "2px solid black";
    }
  }, 1000);
};

// js for section 6
var video = document.getElementById("myVideo");
video.addEventListener("loadedmetadata", function () {
  video.disablePictureInPicture = true;
});
video.oncontextmenu = function (e) {
  // Prevent context menu (right-click menu)
  e.preventDefault();
};

// js for section_7
setTimeout(() => {
  function section7() {
    let section_7 = document.getElementById("section_7");
    section_7.innerHTML = "";
    let SectionArr = [
      {
        image:
          "https://content.asos-media.com/-/media/homepages/mw/2024/march/18-gbl/mw_global_most_wanted_moment_870x1110.jpg",
        category: "OFF-DUTY STAPLES",
        Description: "Your weekened wardrobe",
      },
      {
        image:
          "https://content.asos-media.com/-/media/homepages/mw/2024/march/18-gbl/2024_homepage_moment_mw_tailoring_870x1110_1.jpg",
        category: "TAILORED 'FITS",
        Description: "Every ocassion, covered",
      },
      {
        image:
          "https://content.asos-media.com/-/media/homepages/mw/2024/march/18-gbl/mw_global_jorts_moment_870x1110.jpg",
        category: "JORTS",
        Description: "The trending item",
      },
      {
        image:
          "https://content.asos-media.com/-/media/homepages/mw/2024/march/18-gbl/mw_global_tommy_jeans_moment_870x1110.jpg",
        category: "TOMMY JEANS",
        Description: "Just-dropped heat",
      },
    ];

    SectionArr.forEach((Element) => {
      let div = document.createElement("div");
      let image = document.createElement("img");
      image.style.width = "299.5px";
      image.style.height = "382.11px";
      image.src = Element.image;
      let category = document.createElement("p");
      category.textContent = Element.category;
      category.id = "bold";
      category.href = "";

      let Description = document.createElement("p");
      Description.textContent = Element.Description;

      div.append(image, category, Description);
      section_7.append(div);
    });
  }
  section7();
}, 1000);

// js for section 10
// this is the Tendindg Brands section
setTimeout(() => {
  function TrendingBrands() {
    let section_10 = document.getElementById("section_10");
    let brandsArr = [
      {
        image:
          "https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/tommy-hilfiger-hp-logos-256x256.jpg",
      },
      {
        image:
          "https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/north-face.png",
      },
      {
        image:
          "https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/adidas-hp-logos-256x256---v2.png",
      },
      {
        image:
          "https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/carhartt-hp-logos-256x256.jpg",
      },
      {
        image:
          "https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/ellesse-hp-logos-256x256.jpg",
      },
      {
        image:
          "https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/dr-martens-hp-logos-256x256.jpg",
      },
    ];

    let h1 = document.createElement("h1");
    h1.innerHTML = "TRENDING BRANDS";
    let div = document.createElement("div");
    brandsArr.forEach((ele) => {
      console.log(ele);
      let image = document.createElement("img");
      image.src = ele.image;
      div.append(image);
    });
    section_10.append(h1, div);
  }
  TrendingBrands();
}, 1000);
// ends section_10 js code

// section_11 code starts here
// section_11 code starts here

setTimeout(() => {
  function section11() {
    let section_11 = document.getElementById("section_11"); // Corrected typo in getElementById

    let visaArr = [
      { image: "https://cdn-icons-png.flaticon.com/128/145/145802.png" },
      { image: "https://cdn-icons-png.flaticon.com/128/3955/3955024.png" },
      { image: "https://cdn-icons-png.flaticon.com/128/3669/3669965.png" },
      { image: "https://cdn-icons-png.flaticon.com/128/14062/14062969.png" },
      { image: "https://cdn-icons-png.flaticon.com/128/14062/14062982.png" },
      { image: "https://cdn-icons-png.flaticon.com/128/196/196565.png" },
      { image: "https://cdn-icons-png.flaticon.com/128/349/349228.png" },
      { image: "https://cdn-icons-png.flaticon.com/128/179/179457.png" },
    ];

    let div = document.createElement("div");
    visaArr.forEach((ele) => {
      let images = document.createElement("img");
      images.src = ele.image;
      div.appendChild(images); // Append each image inside the loop
    });
    section_11.appendChild(div); // Append the div containing images to section_11
  }
  section11();
}, 1000);

let women = document.getElementById("women");
women.addEventListener("click", function () {
  setTimeout(function () {
    window.location.href = "index.html";
  }, 1000);
});

let asos = document.getElementById("asos");
asos.addEventListener("click", function () {
  setTimeout(function () {
    window.location.href = "men.html";
  }, 1000);
});

let store_icon = document.getElementById("store_icon");
store_icon.addEventListener("click", function () {
  setTimeout(function () {
    window.location.href = "store.html";
  }, 1000);
});

let saved_icon = document.getElementById("saved_icon");
saved_icon.addEventListener("click", function () {
  setTimeout(function () {
    window.location.href = "saved.html";
  }, 1000);
});

function newin() {
  let newinsss = document.getElementById("New_in_container");

  function newProducts() {
    let arr = [
      "view all",
      "clothing",
      "shoes",
      "Shoes",
      "tshirts&vests",
      "jeans",
      "shorts",
      "Shorts",
      "Accesories",
      "Face+body",
      "Sportswear",
      "Underwear",
    ];
    let div = document.createElement("div");
    let heading = document.createElement("h4");
    heading.style.fontSize = "16px";
    heading.innerHTML = "NEW PRODUCTS";
    div.append(heading);
    arr.forEach((ele) => {
      let anch = document.createElement("li");
      anch.innerHTML = ele;
      anch.style.textDecoration = "none";
      anch.style.listStyle = "none";
      anch.style.fontSize = "14px";
      anch.style.marginTop = "12px";

      div.append(anch);
    });
    newinsss.append(div);
  }
  newProducts();

  function shopSpring() {
    let shopSpringArr = [
      {
        image:
          "https://images.asos-media.com/products/levis-sunset-camp-shirt-in-white-print/205267171-2?$n_320w$&wid=317&fit=constrain",
        name: "Spring Outfits",
      },
      {
        image:
          "https://images.asos-media.com/products/selected-homme-cotton-overshirt-in-beige/203226133-2?$n_320w$&wid=317&fit=constrain",
        name: "Holiday Fits",
      },
      {
        image:
          "https://images.asos-media.com/products/selected-homme-flannel-shirt-in-green/204764542-2?$n_320w$&wid=317&fit=constrain",
        name: "Tailoring",
      },
      {
        image:
          "https://images.asos-media.com/products/levis-jackson-worker-shirt-in-cream/205267196-2?$n_320w$&wid=317&fit=constrain",
        name: "Linen",
      },
      {
        image:
          "https://images.asos-media.com/products/levis-oversized-t-shirt-with-stripe-aztec-print-in-navy/205461554-2?$n_320w$&wid=317&fit=constrain",
        name: "Amencesoories",
      },
      {
        image:
          "https://images.asos-media.com/products/selected-homme-boxy-oversized-revere-collar-seersucker-shirt-in-white/206177340-2?$n_320w$&wid=317&fit=constrain",
        name: " Swimwear",
      },
    ];
    let maindiv = document.createElement("div");
    let heading = document.createElement("h4");
    heading.style.fontSize = "16px";
    heading.innerHTML = "SHOP SPRING";
    maindiv.append(heading);
    shopSpringArr.forEach((ele) => {
      let div = document.createElement("div");
      div.style.display = "flex";
      div.style.alignItems = "center";
      div.style.gap = "20px";
      div.style.width = "270px";
      div.style.height = "53px";

      let image = document.createElement("img");
      image.src = ele.image;
      image.style.width = "55px";
      image.style.height = "40px";
      image.style.borderRadius = "100px";
      image.style.border = "0.1px solid rgb(210, 214, 214)";
      div.addEventListener("mouseover", function () {
        image.style.border = "1px solid blue";
        name.style.color = "blue";
      });
      div.addEventListener("mouseout", function () {
        image.style.border = "0.1px solid rgb(210, 214, 214)";
        name.style.color = "";
      });

      let name = document.createElement("p");
      let paradiv = document.createElement("div");
      name.textContent = ele.name; // Fix here
      paradiv.append(name);
      div.append(image, paradiv);
      maindiv.append(div);
    });
    newinsss.append(maindiv);
  }
  shopSpring();

  function BrandDrops() {
    let BrandDropsArr = [
      {
        image:
          "https://images.asos-media.com/products/levis-exclusive-to-asos-t-shirt-in-black-with-car-chest-print-and-back-print/204420158-2?$n_320w$&wid=317&fit=constrain",
        name: "ASOS DESIGN",
      },
      {
        image:
          "https://images.asos-media.com/products/levis-small-chest-boxtab-logo-t-shirt-in-white/202127083-2?$n_320w$&wid=317&fit=constrain",
        name: "Adidas",
      },
      {
        image:
          "https://images.asos-media.com/products/levis-2-pack-t-shirts-in-black-white-with-baby-boxtab-logo/202291207-2?$n_320w$&wid=317&fit=constrain",
        name: "British Brands",
      },
      {
        image:
          "https://images.asos-media.com/products/hurleys-back-print-t-shirt-in-blue/204368728-2?$n_320w$&wid=317&fit=constrain",
        name: "New Balance",
      },
      {
        image:
          "https://images.asos-media.com/products/levis-workwear-capsule-oversized-t-shirt-with-logo-in-black/204602563-2?$n_320w$&wid=317&fit=constrain",
        name: "New look",
      },
      {
        image:
          "https://images.asos-media.com/products/levis-2-pack-crewneck-batwing-logo-t-shirt-in-white-grey-marl/204848157-2?$n_320w$&wid=317&fit=constrain",
        name: " The North face",
      },
    ];
    let maindiv = document.createElement("div");
    let heading = document.createElement("h4");
    heading.style.fontSize = "16px";
    heading.innerHTML = "BRANDS DROPS";
    maindiv.append(heading);
    BrandDropsArr.forEach((ele) => {
      let div = document.createElement("div");
      div.style.display = "flex";
      div.style.alignItems = "center";
      div.style.gap = "20px";
      div.style.width = "274px";
      div.style.height = "53px";

      let image = document.createElement("img");
      image.src = ele.image;
      image.style.width = "55px";
      image.style.height = "40px";
      image.style.borderRadius = "100px";
      image.style.border = "0.1px solid rgb(210, 214, 214)";
      div.addEventListener("mouseover", function () {
        image.style.border = "1px solid blue";
        name.style.color = "blue";
      });
      div.addEventListener("mouseout", function () {
        image.style.border = "0.1px solid rgb(210, 214, 214)";
        name.style.color = "";
      });

      let name = document.createElement("p");
      let paradiv = document.createElement("div");
      name.textContent = ele.name; // Fix here
      paradiv.append(name);
      div.append(image, paradiv);
      maindiv.append(div);
    });
    newinsss.append(maindiv);
  }
  BrandDrops();

  function Newedits() {
    let NeweditsArr = [
      {
        image:
          "https://images.asos-media.com/navigation/mw_global_the_gentlemen_1680x876?&$n_320w$",
        name: "SHOP THE GENTLEMAN EDIT",
      },
      {
        image:
          "https://images.asos-media.com/navigation/mw_global_quiet_luxury_1680x876?&$n_320w$",
        name: "QUIET LUXURY",
      },
    ];
    let maindiv = document.createElement("div");
    let heading = document.createElement("h4");
    heading.style.fontSize = "16px";
    heading.innerHTML = "NEW EDITS";
    maindiv.append(heading);
    NeweditsArr.forEach((ele) => {
      let div = document.createElement("div");

      div.style.width = "auto";
      div.style.height = "auto";
      div.style.position = "relative";
      div.style.marginRight = "15px";
      div.style.textAlign = "center";

      let image = document.createElement("img");
      image.src = ele.image;
      image.style.border = "0.1px solid rgb(210, 214, 214)";
      image.style.marginTop = "10px";
      image.style.width = "268px";
      image.style.height = "140px";
      image.addEventListener("mouseover", function () {
        image.style.border = "1px solid blue";
      });
      image.addEventListener("mouseout", function () {
        image.style.border = "0.1px solid rgb(210, 214, 214)";
      });
      let name = document.createElement("h4");
      name.style.position = "absolute";
      name.style.top = "50%";
      name.style.left = "50%";
      name.style.transform = "translate(-50% ,-50%)";

      name.textContent = ele.name;

      div.append(image, name);
      maindiv.append(div);
    });
    newinsss.append(maindiv);
  }
  Newedits();
}
newin();

//// javascript for a women clothing section

function clothes() {
  let cloth = document.getElementById("clothes_container");

  function shopbyProduct() {
    let arr = [
      "Top rated Clothing",
      "New in",
      "Tops",
      "Dresses",
      "Jumper & Cardigons",
      "jeans",
      "Coats & Jackets",
      "Trousers & Leggins",
      "Skirts",
      "Cp-ords",
      "Blazers",
      "Blouses",
      "Designer",
    ];
    let div = document.createElement("div");
    let heading = document.createElement("h4");
    heading.style.fontSize = "16px";
    heading.innerHTML = "SHOP BY PRODUCTS";
    div.append(heading);
    arr.forEach((ele) => {
      let anch = document.createElement("li");
      anch.innerHTML = ele;
      anch.style.textDecoration = "none";
      anch.style.listStyle = "none";
      anch.style.fontSize = "14px";
      anch.style.color = "black";
      anch.style.marginTop = "12px";
      let br = document.createElement("br");
      div.append(anch);
    });
    cloth.append(div);
  }
  shopbyProduct();

  function shopSpring() {
    let arr = [
      "Exclusive of ASOS",
      "Hoodies & Sweatshirts",
      "Jumpsuits & Playsuits",
      "Bras",
      "Lingerie & Nightwear",
      "MultiPacks",
      "shirts",
      "Shorts",
      "Socks & Tights",
      "Sportswear",
      "Suits & Tailoring",
      "Swimwear & Beachwear",
      "Tracksuits & Joggers",
    ];
    let div = document.createElement("div");
    div.style.border = "none";
    let heading = document.createElement("h4");
    heading.style.marginTop = "40px";
    heading.style.fontSize = "16px";
    heading.innerHTML = "";
    div.append(heading);
    arr.forEach((ele) => {
      let anch = document.createElement("li");
      anch.innerHTML = ele;
      anch.style.textDecoration = "none";
      anch.style.listStyle = "none";
      anch.style.fontSize = "14px";
      anch.style.marginTop = "12px";
      anch.style.color = "black";
      let br = document.createElement("br");
      div.append(anch);
    });
    cloth.append(div);
  }
  shopSpring();

  let shobbyBodyfit = [
    {
      image:
        "https://images.asos-media.com/products/hurleys-back-print-t-shirt-in-blue/204368728-2?$n_320w$&wid=317&fit=constrain",
      name: "Plus Size",
    },
    {
      image:
        "https://images.asos-media.com/products/levis-x-gundam-collab-chest-print-boxy-fit-ringer-t-shirt-in-white/205997647-2?$n_320w$&wid=317&fit=constrain",
      name: "Tall",
    },
  ];

  function bodyfit() {
    let maindiv = document.createElement("div");
    let heading = document.createElement("h4");
    heading.style.fontSize = "16px";
    heading.innerHTML = "SHOP BY BODY FIT";
    maindiv.append(heading);

    let gridContainer = document.createElement("div");
    gridContainer.classList.add("grid-cloth-container");

    shobbyBodyfit.forEach((ele) => {
      let div = document.createElement("div");
      div.style.width = "60px";
      div.style.height = "90px";
      div.classList.add("grid-cloth-item");
      let image = document.createElement("img");
      image.src = ele.image;
      image.style.width = "80px";
      image.style.height = "80px";
      image.style.borderRadius = "50%";
      image.style.marginBottom = "5px"; // Space between image and text

      let name = document.createElement("p");
      name.textContent = ele.name;
      name.style.textAlign = "center";

      div.append(image, name);
      gridContainer.append(div);
    });

    maindiv.append(gridContainer);
    cloth.append(maindiv);
  }

  bodyfit();

  function shopbyedit() {
    let shopSpringArr = [
      {
        image:
          "https://images.asos-media.com/products/levis-t-shirt-with-central-palm-print-logo-and-backprint-in-white/205488012-2?$n_320w$&wid=317&fit=constrain",
        name: "Spring Styles",
      },
      {
        image:
          "https://images.asos-media.com/products/levis-exclusive-to-asos-t-shirt-with-central-retro-logo-in-black/205488004-2?$n_320w$&wid=317&fit=constrain",
        name: "Basics",
      },
      {
        image:
          "https://images.asos-media.com/products/levis-t-shirt-with-multi-central-logo-in-navy/204689632-2?$n_320w$&wid=317&fit=constrain",
        name: "Occasiowear",
      },
      {
        image:
          "https://images.asos-media.com/products/levis-long-sleeve-t-shirt-in-yellow-with-chest-and-arm-print/202985135-2?$n_320w$&wid=317&fit=constrain",
        name: "Denim",
      },
      {
        image:
          "https://images.asos-media.com/products/levis-t-shirt-with-central-boxtab-logo-in-light-green/205267826-2?$n_320w$&wid=317&fit=constrain",
        name: "Festival",
      },
      {
        image:
          "https://images.asos-media.com/products/levis-t-shirt-with-central-palm-print-logo-and-backprint-in-white/205488012-2?$n_320w$&wid=317&fit=constrain",
        name: "Holiday",
      },
    ];
    let maindiv = document.createElement("div");
    let heading = document.createElement("h4");
    heading.style.fontSize = "16px";
    heading.innerHTML = "SHOP BY EDIT";
    maindiv.append(heading);
    shopSpringArr.forEach((ele) => {
      let div = document.createElement("div");
      div.style.display = "flex";
      div.style.alignItems = "center";
      div.style.gap = "20px";
      div.style.width = "270px";
      div.style.height = "53px";

      let image = document.createElement("img");
      image.src = ele.image;
      image.style.width = "40px";
      image.style.height = "40px";
      image.style.marginLeft = "10px";
      image.style.borderRadius = "100px";
      image.style.border = "0.1px solid rgb(210, 214, 214)";
      div.addEventListener("mouseover", function () {
        image.style.border = "1px solid blue";
        name.style.color = "blue";
      });
      div.addEventListener("mouseout", function () {
        image.style.border = "0.1px solid rgb(210, 214, 214)";
        name.style.color = "";
      });

      let name = document.createElement("p");
      let paradiv = document.createElement("div");
      paradiv.style.marginLeft = "20px";
      paradiv.style.borderBottom = "1px solid lightgray";
      paradiv.style.width = "60%";
      paradiv.style.height = "100%";
      paradiv.style.display = "flex";
      paradiv.style.alignItems = "center";
      name.textContent = ele.name; // Fix here
      paradiv.append(name);
      div.append(image, paradiv);
      maindiv.append(div);
    });
    cloth.append(maindiv);
  }
  shopbyedit();
}
clothes();

// trending section script

function Trending() {
  let trend = document.getElementById("trending");
  let arr = [
    {
      image:
        "https://images.asos-media.com/navigation/mw_basics_trending_150324?&$n_320w$",
      text: "BASICS",
    },
    {
      image:
        "https://images.asos-media.com/navigation/newin_Streetwear_220224?&$n_320w$",
      text: "STREETWEAR",
    },
    {
      image:
        "https://images.asos-media.com/navigation/utility_220224?&$n_320w$",
      text: "UTILITY",
    },
    {
      image:
        "https://images.asos-media.com/navigation/denim_MW_220224?&$n_320w$",
      text: "DENIM",
    },
  ];

  arr.forEach(function (ele) {
    let maindiv = document.createElement("div");

    let childDiv = document.createElement("div");

    let image = document.createElement("img");
    image.src = ele.image;

    let text = document.createElement("h2");
    text.innerHTML = ele.text;

    childDiv.append(image, text);
    maindiv.append(childDiv);
    trend.append(maindiv);
  });
}
Trending();

/// shoes setion

function shoes() {
  let shoe = document.getElementById("shoes_container");

  function Shopbyprodduct() {
    let arr = [
      "Top Rated Soes",
      "Besesellers",
      "View all",
      "New in ",
      "Trainers",
      "sandals ",
      " Heels",
      "Boots",
      "Helled Sandals",
      "Flat shoes",
      "Chelsa shoes",
      "Flat sandals",
      "Loafers",
    ];
    let div = document.createElement("div");
    let heading = document.createElement("h4");
    heading.style.fontSize = "16px";
    heading.innerHTML = "SHOP BY PRODUCT ";
    div.append(heading);
    arr.forEach((ele) => {
      let anch = document.createElement("li");
      anch.innerHTML = ele;
      anch.style.textDecoration = "none";
      anch.style.listStyle = "none";
      anch.style.fontSize = "14px";
      anch.style.color = "black";
      anch.style.marginTop = "12px";
      anch.classList.add = "listhover";
      let br = document.createElement("br");
      div.append(anch);
    });
    shoe.append(div);
  }
  Shopbyprodduct();

  function ShopbyBrand() {
    let shopSpringArr = [
      {
        image:
          "https://images.asos-media.com/products/asos-design-boat-shoes-in-tan-faux-leather/205798461-2?$n_320w$&wid=317&fit=constrain",
        name: "ASOS Design",
      },
      {
        image:
          "https://images.asos-media.com/products/daisy-street-platform-flared-heeled-shoes-in-rainbow-glitter/204198243-2?$n_320w$&wid=317&fit=constrain",
        name: "New Balance",
      },
      {
        image:
          "https://images.asos-media.com/products/asos-design-wide-fit-lotus-embellished-slingback-ballet-flats-in-green-satin/203672420-2?$n_320w$&wid=317&fit=constrain",
        name: "On Running",
      },
      {
        image:
          "https://images.asos-media.com/products/pullbear-smart-lace-up-shoes-in-dark-burgundy/205531682-2?$n_320w$&wid=317&fit=constrain",
        name: "addidas Orignals",
      },
      {
        image:
          "https://images.asos-media.com/products/asos-design-chunky-lace-up-shoes-in-white/205845396-2?$n_320w$&wid=317&fit=constrain",
        name: "Asics",
      },
      {
        image:
          "https://images.asos-media.com/products/koi-oversized-derby-shoes-in-black/205772397-2?$n_320w$&wid=317&fit=constrain",
        name: "Dr Martens",
      },
    ];
    let maindiv = document.createElement("div");
    let heading = document.createElement("h4");
    heading.style.fontSize = "16px";
    heading.innerHTML = "SHOP BY BRAND";
    maindiv.append(heading);
    shopSpringArr.forEach((ele) => {
      let div = document.createElement("div");
      div.style.display = "flex";
      div.style.alignItems = "center";
      div.style.gap = "20px";
      div.style.width = "270px";
      div.style.height = "53px";

      let image = document.createElement("img");
      image.src = ele.image;
      image.style.width = "40px";
      image.style.height = "40px";
      image.style.marginLeft = "10px";
      image.style.borderRadius = "100px";
      image.style.border = "0.1px solid rgb(210, 214, 214)";
      div.addEventListener("mouseover", function () {
        image.style.border = "1px solid blue";
        name.style.color = "blue";
      });
      div.addEventListener("mouseout", function () {
        image.style.border = "0.1px solid rgb(210, 214, 214)";
        name.style.color = "";
      });

      let name = document.createElement("p");
      let paradiv = document.createElement("div");
      paradiv.style.marginLeft = "20px";
      paradiv.style.borderBottom = "1px solid lightgray";
      paradiv.style.width = "60%";
      paradiv.style.height = "100%";
      paradiv.style.display = "flex";
      paradiv.style.alignItems = "center";
      name.textContent = ele.name; // Fix here
      paradiv.append(name);
      div.append(image, paradiv);
      maindiv.append(div);
    });
    shoe.append(maindiv);
  }
  ShopbyBrand();

  function ShopbyTrainerstyle() {
    let arr = [
      "adidas Origanals Samba",
      "adidas Orignals Gazelle",
      "adidas Orignals Campus",
      "New Balance 530",
      "New Balance 550",
      "New Balance 327",
      "On Cloudmonster",
      "Vans Old Skool",
      "Puma Cali",
    ];
    let div = document.createElement("div");
    let heading = document.createElement("h4");
    heading.style.fontSize = "16px";
    heading.innerHTML = "SHOP BY PRODUCT ";
    div.append(heading);
    arr.forEach((ele) => {
      let anch = document.createElement("li");
      anch.innerHTML = ele;
      anch.style.textDecoration = "none";
      anch.style.listStyle = "none";
      anch.style.fontSize = "14px";
      anch.style.color = "black";
      anch.style.marginTop = "12px";
      let br = document.createElement("br");
      div.append(anch);
    });
    shoe.append(div);
  }
  ShopbyTrainerstyle();

  function Newedits() {
    let NeweditsArr = [
      {
        image:
          "https://images.asos-media.com/navigation/mw_au_shoes_summershoes_4WL_125403686?&$n_320w$",
        name: "SANDALS",
      },
      {
        image:
          "https://images.asos-media.com/navigation/mw_GBL_Shoes_Black_Trainers_4WL_127380178?&$n_320w$",
        name: "BLACK TRAINERS",
      },
      {
        image:
          "https://images.asos-media.com/navigation/mw_gbl_shoes_smartshoes_4WL_125058443?&$n_320w$",
        name: "OCCASION",
      },
    ];
    let maindiv = document.createElement("div");
    let heading = document.createElement("h4");
    heading.style.fontSize = "16px";
    heading.innerHTML = "";
    maindiv.append(heading);
    NeweditsArr.forEach((ele) => {
      let div = document.createElement("div");

      div.style.width = "auto";
      div.style.height = "auto";
      div.style.position = "relative";
      div.style.marginRight = "15px";
      div.style.textAlign = "center";

      let image = document.createElement("img");
      image.src = ele.image;
      image.style.border = "0.1px solid rgb(210, 214, 214)";
      image.style.marginTop = "10px";
      image.style.width = "268px";
      image.style.height = "120px";
      image.addEventListener("mouseover", function () {
        image.style.border = "1px solid blue";
      });
      image.addEventListener("mouseout", function () {
        image.style.border = "0.1px solid rgb(210, 214, 214)";
      });
      let name = document.createElement("h4");
      name.style.position = "absolute";
      name.style.top = "50%";
      name.style.left = "50%";
      name.style.transform = "translate(-50% ,-50%)";

      name.textContent = ele.name;

      div.append(image, name);
      maindiv.append(div);
    });
    shoe.append(maindiv);
  }
  Newedits();
}
shoes();

// JS FOR A ACCSORIES SECTION

function Accesories() {
  let accesory = document.getElementById("accesories_container");

  function Shopbyprodduct() {
    let arr = [
      "View all",
      "New in ",
      "Gifts",
      "Hair accesories",
      " Sunglass",
      "Huts",
      "Hats",
      "Socks & Tights",
      "Belts",
      "Caps",
      "Bestsellers",
    ];
    let div = document.createElement("div");
    let heading = document.createElement("h4");
    heading.style.fontSize = "16px";
    heading.innerHTML = "SHOP BY PRODUCT ";
    div.append(heading);
    arr.forEach((ele) => {
      let anch = document.createElement("li");
      anch.innerHTML = ele;
      anch.style.textDecoration = "none";
      anch.style.listStyle = "none";
      anch.style.fontSize = "14px";
      anch.style.color = "black";
      anch.style.marginTop = "12px";
      let br = document.createElement("br");
      div.append(anch);
    });
    accesory.append(div);
  }
  Shopbyprodduct();

  function ShopbyBags() {
    let shopSpringArr = [
      {
        image:
          "https://images.asos-media.com/products/valentino-emily-cross-body-bag-with-studs-in-black/204281394-2?$n_320w$&wid=317&fit=constrain",
        name: "View all",
      },
      {
        image:
          "https://images.asos-media.com/products/valentino-liuto-shoulder-bag-in-lilac-monogram-print/204281417-2?$n_320w$&wid=317&fit=constrain",
        name: "Cross Body Bags",
      },
      {
        image:
          "https://images.asos-media.com/products/valentino-bags-marnier-large-crossbody-bag-in-black/204685540-2?$n_320w$&wid=317&fit=constrain",
        name: "Tate Bags",
      },
      {
        image:
          "https://images.asos-media.com/products/tommy-jeans-essential-tape-logo-phone-bag-in-black/204310424-2?$n_320w$&wid=317&fit=constrain",
        name: "Shoulder Bags",
      },
      {
        image:
          "https://images.asos-media.com/products/valentino-zermatt-flap-bag-with-webbed-strap-in-dark-green/204788808-2?$n_320w$&wid=317&fit=constrain",
        name: "Cluthes",
      },
      {
        image:
          "https://images.asos-media.com/products/armani-exchange-logo-faux-pebble-leather-crossbody-bag-in-black/206290716-2?$n_320w$&wid=317&fit=constrain",
        name: "New Season Bags",
      },
    ];
    let maindiv = document.createElement("div");
    let heading = document.createElement("h4");
    heading.style.fontSize = "16px";
    heading.innerHTML = "SHOP BY BAGS";
    maindiv.append(heading);
    shopSpringArr.forEach((ele) => {
      let div = document.createElement("div");
      div.style.display = "flex";
      div.style.alignItems = "center";
      div.style.gap = "20px";
      div.style.width = "270px";
      div.style.height = "53px";

      let image = document.createElement("img");
      image.src = ele.image;
      image.style.width = "40px";
      image.style.height = "40px";
      image.style.marginLeft = "10px";
      image.style.borderRadius = "100px";
      image.style.border = "0.1px solid rgb(210, 214, 214)";
      div.addEventListener("mouseover", function () {
        image.style.border = "1px solid blue";
        name.style.color = "blue";
      });
      div.addEventListener("mouseout", function () {
        image.style.border = "0.1px solid rgb(210, 214, 214)";
        name.style.color = "";
      });

      let name = document.createElement("p");
      let paradiv = document.createElement("div");
      paradiv.style.marginLeft = "20px";
      paradiv.style.borderBottom = "1px solid lightgray";
      paradiv.style.width = "60%";
      paradiv.style.height = "100%";
      paradiv.style.display = "flex";
      paradiv.style.alignItems = "center";
      name.textContent = ele.name; // Fix here
      paradiv.append(name);
      div.append(image, paradiv);
      maindiv.append(div);
    });
    accesory.append(maindiv);
  }
  ShopbyBags();

  function Shopbyjwellery() {
    let shopSpringArr = [
      {
        image:
          "https://images.asos-media.com/products/other-stories-multi-pack-earrings-in-gold/206146275-2?$n_320w$&wid=317&fit=constrain",
        name: "View all",
      },
      {
        image:
          "https://images.asos-media.com/products/asos-design-pack-of-2-hoop-earrings-with-triangle-hinge-hoop-design-in-gold-tone/204428531-2?$n_320w$&wid=317&fit=constrain",
        name: "Earrings",
      },
      {
        image:
          "https://images.asos-media.com/products/petit-moments-turin-stainless-steel-long-cross-necklace-with-emerald-stone-in-gold/205695604-2?$n_320w$&wid=317&fit=constrain",
        name: "Necklaces",
      },
      {
        image:
          "https://images.asos-media.com/products/petit-moments-swirl-cord-beaded-necklace-with-oversized-pendant/205695615-2?$n_320w$&wid=317&fit=constrain",
        name: "Rings",
      },
      {
        image:
          "https://images.asos-media.com/products/petit-moments-serena-stainless-steel-long-necklace-with-circular-pendant-in-gold/205695766-2?$n_320w$&wid=317&fit=constrain",
        name: "Gold Plated Jewellery",
      },
      {
        image:
          "https://images.asos-media.com/products/petit-moments-serena-stainless-steel-long-necklace-with-circular-pendant-in-silver/205695804-2?$n_320w$&wid=317&fit=constrain",
        name: "Sterling Silver Jewellery",
      },
    ];
    let maindiv = document.createElement("div");
    let heading = document.createElement("h4");
    heading.style.fontSize = "16px";
    heading.innerHTML = "SHOP BY JEWELLERY";
    maindiv.append(heading);
    shopSpringArr.forEach((ele) => {
      let div = document.createElement("div");
      div.style.display = "flex";
      div.style.alignItems = "center";
      div.style.gap = "20px";
      div.style.width = "270px";
      div.style.height = "53px";

      let image = document.createElement("img");
      image.src = ele.image;
      image.style.width = "40px";
      image.style.height = "40px";
      image.style.marginLeft = "10px";
      image.style.borderRadius = "100px";
      image.style.border = "0.1px solid rgb(210, 214, 214)";
      div.addEventListener("mouseover", function () {
        image.style.border = "1px solid blue";
        name.style.color = "blue";
      });
      div.addEventListener("mouseout", function () {
        image.style.border = "0.1px solid rgb(210, 214, 214)";
        name.style.color = "";
      });

      let name = document.createElement("p");
      let paradiv = document.createElement("div");
      paradiv.style.marginLeft = "20px";
      paradiv.style.borderBottom = "1px solid lightgray";
      paradiv.style.width = "60%";
      paradiv.style.height = "100%";
      paradiv.style.display = "flex";
      paradiv.style.alignItems = "center";
      name.textContent = ele.name; // Fix here
      paradiv.append(name);
      div.append(image, paradiv);
      maindiv.append(div);
    });
    accesory.append(maindiv);
  }
  Shopbyjwellery();

  function Newedits() {
    let NeweditsArr = [
      {
        image:
          "https://images.asos-media.com/navigation/festivalaccessories_accessories_gbl_2wl_125934335?&$n_320w$",
        name: "FESTIVAL ACCESSORIES",
      },
    ];
    let maindiv = document.createElement("div");
    let heading = document.createElement("h4");
    heading.style.fontSize = "16px";
    heading.innerHTML = "";
    maindiv.append(heading);
    NeweditsArr.forEach((ele) => {
      let div = document.createElement("div");

      div.style.width = "auto";
      div.style.height = "auto";
      div.style.position = "relative";
      div.style.marginRight = "15px";
      div.style.textAlign = "center";

      let image = document.createElement("img");
      image.src = ele.image;
      image.style.border = "0.1px solid rgb(210, 214, 214)";
      image.style.marginTop = "10px";
      image.style.width = "268px";
      image.style.height = "310px";
      image.addEventListener("mouseover", function () {
        image.style.border = "1px solid blue";
      });
      image.addEventListener("mouseout", function () {
        image.style.border = "0.1px solid rgb(210, 214, 214)";
      });
      let name = document.createElement("h4");
      name.style.position = "absolute";
      name.style.top = "85%";
      name.style.left = "50%";
      name.style.transform = "translate(-50% ,-50%)";

      name.textContent = ele.name;

      div.append(image, name);
      maindiv.append(div);
    });
    accesory.append(maindiv);
  }
  Newedits();
}
Accesories();
//  code for brand section

function Brands() {
  let Brand = document.getElementById("brands_container");

  function TopBrands() {
    let arr = [
      "A-Z of brands",
      "Manki",
      "New Balance",
      "New Look",
      "In Running",
      "&Ohter stories",
      "Pull & Bear",
      "Puma",
      "River Island",
      "The North Face",
      "Weekday",
    ];
    let div = document.createElement("div");
    let heading = document.createElement("h4");
    heading.style.fontSize = "16px";
    heading.innerHTML = "TOP BRANDS";
    div.append(heading);
    arr.forEach((ele) => {
      let anch = document.createElement("li");
      anch.innerHTML = ele;
      anch.style.textDecoration = "none";
      anch.style.listStyle = "none";
      anch.style.fontSize = "14px";
      anch.style.marginTop = "12px";
      let br = document.createElement("br");
      div.append(anch);
    });
    Brand.append(div);
  }
  TopBrands();

  function AsosBrands() {
    let shopSpringArr = [
      {
        image:
          "https://images.asos-media.com/products/levis-down-laurel-mid-puffer-jacket-in-black-with-hood/204690642-2?$n_320w$&wid=317&fit=constrain",
        name: "View all",
      },
      {
        image:
          "https://images.asos-media.com/products/levis-cargo-trousers-with-pockets-in-black/205262249-2?$n_320w$&wid=317&fit=constrain",
        name: "ASOS DESIGN",
      },
      {
        image:
          "https://images.asos-media.com/products/levis-union-engineer-denim-cardigan/205266237-2?$n_320w$&wid=317&fit=constrain",
        name: "TOPSHOP",
      },
      {
        image:
          "https://images.asos-media.com/products/obey-unisex-denim-varsity-jacket-with-back-logo-in-off-white/206139949-2?$n_320w$&wid=317&fit=constrain",
        name: "COLLUSION",
      },
      {
        image:
          "https://images.asos-media.com/products/topman-leather-puffer-jacket-in-black/202162385-2?$n_320w$&wid=317&fit=constrain",
        name: "Miss Selfridge",
      },
      {
        image:
          "https://images.asos-media.com/products/levis-utility-zip-off-cargos-in-grey/205262392-2?$n_320w$&wid=317&fit=constrain",
        name: "ASOS 4505",
      },
    ];
    let maindiv = document.createElement("div");
    let heading = document.createElement("h4");
    heading.style.fontSize = "16px";
    heading.innerHTML = "ASOS BRANDS";
    maindiv.append(heading);
    shopSpringArr.forEach((ele) => {
      let div = document.createElement("div");
      div.style.display = "flex";
      div.style.alignItems = "center";
      div.style.gap = "20px";
      div.style.width = "270px";
      div.style.height = "53px";

      let image = document.createElement("img");
      image.src = ele.image;
      image.style.width = "55px";
      image.style.height = "40px";
      image.style.borderRadius = "100px";
      image.style.border = "0.1px solid rgb(210, 214, 214)";
      div.addEventListener("mouseover", function () {
        image.style.border = "1px solid blue";
        name.style.color = "blue";
      });
      div.addEventListener("mouseout", function () {
        image.style.border = "0.1px solid rgb(210, 214, 214)";
        name.style.color = "";
      });

      let name = document.createElement("p");
      let paradiv = document.createElement("div");
      name.textContent = ele.name; // Fix here
      paradiv.append(name);
      div.append(image, paradiv);
      maindiv.append(div);
    });
    Brand.append(maindiv);
  }
  AsosBrands();

  function DiscoverBrands() {
    let BrandDropsArr = [
      {
        image:
          "https://images.asos-media.com/products/new-balance-327-trainers-in-white-pink/204588298-2?$n_320w$&wid=317&fit=constrain",
        name: "New In",
      },
      {
        image:
          "https://images.asos-media.com/products/sister-jane-ansel-patchwork-denim-trousers-in-blue-co-ord/205749432-2?$n_320w$&wid=317&fit=constrain",
        name: "Outdoor",
      },
      {
        image:
          "https://images.asos-media.com/products/new-balance-327-trainers-in-beige-exclusive-to-asos/205401888-2?$n_320w$&wid=317&fit=constrain",
        name: "Trainers",
      },
      {
        image:
          "https://images.asos-media.com/products/levis-denim-trucker-jacket-in-grey-wash/205266222-2?$n_320w$&wid=317&fit=constrain ",
        name: "Face + Body",
      },
      {
        image:
          "https://images.asos-media.com/products/levis-skate-coaches-cord-jacket-in-red/205267177-2?$n_320w$&wid=317&fit=constrain",
        name: "Emerging Brands",
      },
      {
        image:
          "https://images.asos-media.com/products/levis-lightweight-jacket-in-blue-with-pockets/205461481-2?$n_320w$&wid=317&fit=constrain",
        name: "Designer Brands",
      },
    ];
    let maindiv = document.createElement("div");
    let heading = document.createElement("h4");
    heading.style.fontSize = "16px";
    heading.innerHTML = "DISCOVER BRANDS";
    maindiv.append(heading);
    BrandDropsArr.forEach((ele) => {
      let div = document.createElement("div");
      div.style.display = "flex";
      div.style.alignItems = "center";
      div.style.gap = "20px";
      div.style.width = "274px";
      div.style.height = "53px";

      let image = document.createElement("img");
      image.src = ele.image;
      image.style.width = "55px";
      image.style.height = "40px";
      image.style.borderRadius = "100px";
      image.style.border = "0.1px solid rgb(210, 214, 214)";
      div.addEventListener("mouseover", function () {
        image.style.border = "1px solid blue";
        name.style.color = "blue";
      });
      div.addEventListener("mouseout", function () {
        image.style.border = "0.1px solid rgb(210, 214, 214)";
        name.style.color = "";
      });

      let name = document.createElement("p");
      let paradiv = document.createElement("div");
      name.textContent = ele.name; // Fix here
      paradiv.append(name);
      div.append(image, paradiv);
      maindiv.append(div);
    });
    Brand.append(maindiv);
  }
  DiscoverBrands();

  function featured() {
    let NeweditsArr = [
      {
        image:
          "https://images.asos-media.com/navigation/mw_brands_plussizebrands_3WL_123694799?&$n_320w$",
        name: "PLUS SIZE BRANDS",
      },
      {
        image:
          "https://images.asos-media.com/navigation/mw_uk_brands_asoscollection_3wl_125828735?&$n_320w$",
        name: "ASOS BRANDS",
      },
    ];
    let maindiv = document.createElement("div");
    let heading = document.createElement("h4");
    heading.style.fontSize = "16px";
    heading.innerHTML = "FEATURED";
    maindiv.append(heading);
    NeweditsArr.forEach((ele) => {
      let div = document.createElement("div");

      div.style.width = "auto";
      div.style.height = "auto";
      div.style.position = "relative";
      div.style.marginRight = "15px";
      div.style.textAlign = "center";

      let image = document.createElement("img");
      image.src = ele.image;
      image.style.border = "0.1px solid rgb(210, 214, 214)";
      image.style.marginTop = "10px";
      image.style.width = "268px";
      image.style.height = "140px";
      image.addEventListener("mouseover", function () {
        image.style.border = "1px solid blue";
      });
      image.addEventListener("mouseout", function () {
        image.style.border = "0.1px solid rgb(210, 214, 214)";
      });
      let name = document.createElement("h4");
      name.style.position = "absolute";
      name.style.top = "50%";
      name.style.left = "50%";
      name.style.transform = "translate(-50% ,-50%)";

      name.textContent = ele.name;

      div.append(image, name);
      maindiv.append(div);
    });
    Brand.append(maindiv);
  }
  featured();
}
Brands();

// js for the sportswear container

function Sports() {
  let Sport = document.getElementById("sports_container");

  function shopbyProduct() {
    let arr = [
      "Viiew all",
      "New in",
      "Trainers",
      "Tops",
      "Leggins",
      "Sports bras",
      "Jackets",
      "Accesories",
      "Hoodies",
      "Shorts",
      "Sweatshirts",
    ];
    let div = document.createElement("div");
    let heading = document.createElement("h4");
    heading.style.fontSize = "16px";
    heading.innerHTML = "SHOP BY PRODUCT";
    div.append(heading);
    arr.forEach((ele) => {
      let anch = document.createElement("li");
      anch.innerHTML = ele;
      anch.style.textDecoration = "none";
      anch.style.listStyle = "none";
      anch.style.fontSize = "14px";
      anch.style.color = "black";
      anch.style.marginTop = "12px";
      let br = document.createElement("br");
      div.append(anch);
    });
    Sport.append(div);
  }
  shopbyProduct();

  function Activity() {
    let shopSpringArr = [
      {
        image:
          "https://images.asos-media.com/products/levis-lightweight-jacket-in-blue-with-pockets/205461481-2?$n_320w$&wid=317&fit=constrain",
        name: "Gym",
      },
      {
        image:
          "https://images.asos-media.com/products/the-couture-club-puffer-jacket-in-textured-metallic-grey/203436562-2?$n_320w$&wid=317&fit=constrain",
        name: "Running",
      },
      {
        image:
          "https://images.asos-media.com/products/nobodys-child-oversized-knitted-mini-dress-in-green/205426944-2?$n_320w$&wid=317&fit=constrain",
        name: "Outdoors",
      },
      {
        image:
          "https://images.asos-media.com/products/levis-reversible-abbots-padded-jacket-in-green-cream-with-shearling-lining/205266187-2?$n_320w$&wid=317&fit=constrain ",
        name: "Yoga & Studio",
      },
      {
        image:
          "https://images.asos-media.com/products/levis-mason-sherpa-jacket-in-cream-with-small-logo/204748695-2?$n_320w$&wid=317&fit=constrain",
        name: "Ski & Snowboard",
      },
      {
        image:
          "https://images.asos-media.com/products/levis-down-puffer-jacket-in-black-with-hood/204690754-2?$n_320w$&wid=317&fit=constrain",
        name: "Football",
      },
    ];
    let maindiv = document.createElement("div");
    let heading = document.createElement("h4");
    heading.style.fontSize = "16px";
    heading.innerHTML = "SHOP BY ACTIVITY";
    maindiv.append(heading);
    shopSpringArr.forEach((ele) => {
      let div = document.createElement("div");
      div.style.display = "flex";
      div.style.alignItems = "center";
      div.style.gap = "20px";
      div.style.width = "270px";
      div.style.height = "53px";

      let image = document.createElement("img");
      image.src = ele.image;
      image.style.width = "40px";
      image.style.height = "40px";
      image.style.marginLeft = "10px";
      image.style.borderRadius = "100px";
      image.style.border = "0.1px solid rgb(210, 214, 214)";
      div.addEventListener("mouseover", function () {
        image.style.border = "1px solid blue";
        name.style.color = "blue";
      });
      div.addEventListener("mouseout", function () {
        image.style.border = "0.1px solid rgb(210, 214, 214)";
        name.style.color = "";
      });

      let name = document.createElement("p");
      let paradiv = document.createElement("div");
      paradiv.style.marginLeft = "20px";
      paradiv.style.borderBottom = "1px solid lightgray";
      paradiv.style.width = "60%";
      paradiv.style.height = "100%";
      paradiv.style.display = "flex";
      paradiv.style.alignItems = "center";
      name.textContent = ele.name; // Fix here
      paradiv.append(name);
      div.append(image, paradiv);
      maindiv.append(div);
    });
    Sport.append(maindiv);
  }
  Activity();

  let shobbyBodyfit = [
    {
      image:
        "https://images.asos-media.com/products/levis-relaxed-padded-trucker-jacket-in-navy-with-logo/205266293-2?$n_320w$&wid=317&fit=constrain",
      name: "We Run",
    },
    {
      image:
        "https://images.asos-media.com/products/levis-sutro-letterman-jacket-in-navy-with-logo/205266243-2?$n_320w$&wid=317&fit=constrain",
      name: "We Breathe",
    },
    {
      image:
        "https://images.asos-media.com/products/levis-denim-trucker-jacket-in-grey-wash/205266222-2?$n_320w$&wid=317&fit=constrain",
      name: "We Dance",
    },
    {
      image:
        "https://images.asos-media.com/products/levis-skate-coaches-cord-jacket-in-red/205267177-2?$n_320w$&wid=317&fit=constrain",
      name: "We Push",
    },
  ];

  function shopAsos() {
    let maindiv = document.createElement("div");
    let heading = document.createElement("h4");
    heading.style.fontSize = "16px";
    heading.innerHTML = "SHOP ASOS WE MOVE";
    maindiv.append(heading);

    let gridContainer = document.createElement("div");
    gridContainer.classList.add("grid-sport-container");

    shobbyBodyfit.forEach((ele) => {
      let div = document.createElement("div");
      div.style.width = "60px";
      div.style.height = "100px";
      div.style.marginTop = "20px";
      div.classList.add("grid-sport-item");
      let image = document.createElement("img");
      image.src = ele.image;
      image.style.width = "80px";
      image.style.height = "80px";
      image.style.borderRadius = "50%";
      image.style.marginBottom = "5px"; // Space between image and text

      let name = document.createElement("p");
      name.textContent = ele.name;
      name.style.textAlign = "center";

      div.append(image, name);
      gridContainer.append(div);
    });

    maindiv.append(gridContainer);
    Sport.append(maindiv);
  }

  shopAsos();

  function Newedits() {
    let NeweditsArr = [
      {
        image:
          "https://images.asos-media.com/navigation/sportswear_gbl_mw_awm_adidas__v2?&$n_320w$",
        name: "ADDIDAS",
      },
      {
        image:
          "https://images.asos-media.com/navigation/sportswear_gbl_mw_awm_puma_v2?&$n_320w$",
        name: "PUMA",
      },
    ];
    let maindiv = document.createElement("div");
    let heading = document.createElement("h4");
    heading.style.fontSize = "16px";
    heading.innerHTML = "";
    maindiv.append(heading);
    NeweditsArr.forEach((ele) => {
      let div = document.createElement("div");

      div.style.width = "auto";
      div.style.height = "auto";
      div.style.position = "relative";
      div.style.marginRight = "15px";
      div.style.textAlign = "center";

      let image = document.createElement("img");
      image.src = ele.image;
      image.style.border = "0.1px solid rgb(210, 214, 214)";
      image.style.marginTop = "10px";
      image.style.width = "268px";
      image.style.height = "120px";
      image.addEventListener("mouseover", function () {
        image.style.border = "1px solid blue";
      });
      image.addEventListener("mouseout", function () {
        image.style.border = "0.1px solid rgb(210, 214, 214)";
      });
      let name = document.createElement("h4");
      name.style.position = "absolute";
      name.style.top = "50%";
      name.style.left = "50%";
      name.style.transform = "translate(-50% ,-50%)";

      name.textContent = ele.name;

      div.append(image, name);
      maindiv.append(div);
    });
    Sport.append(maindiv);
  }
  Newedits();
}
Sports();

//

// js for topshop

function Topshops() {
  let Topshop = document.getElementById("topshops_container");

  function shopbyProduct_1() {
    let arr = [
      "New in",
      "Bestsellers",
      "Dresses",
      "Jeans",
      "Tailoring",
      "coats & Jackets",
      "Knitwear",
      "Tops ",
    ];
    let div = document.createElement("div");
    let heading = document.createElement("h4");
    heading.style.fontSize = "16px";
    heading.innerHTML = "SHOP BY PRODUCT";
    div.append(heading);
    arr.forEach((ele) => {
      let anch = document.createElement("li");
      anch.innerHTML = ele;
      anch.style.textDecoration = "none";
      anch.style.listStyle = "none";
      anch.style.fontSize = "14px";
      anch.style.color = "black";
      anch.style.marginTop = "14px";
      let br = document.createElement("br");
      div.append(anch);
    });
    Topshop.append(div);
  }
  shopbyProduct_1();

  function shopbyProduct_2() {
    let arr = [
      "Trousers",
      "Skirts",
      "Acessories",
      "Lingerie",
      "Pants",
      "Tall",
      "Petite",
      "Curve",
    ];
    let div = document.createElement("div");
    let heading = document.createElement("h4");
    heading.style.fontSize = "16px";
    heading.innerHTML = "SHOP BY PRODUCT";
    div.append(heading);
    arr.forEach((ele) => {
      let anch = document.createElement("li");
      anch.innerHTML = ele;
      anch.style.textDecoration = "none";
      anch.style.listStyle = "none";
      anch.style.fontSize = "14px";
      anch.style.color = "black";
      anch.style.marginTop = "14px";
      let br = document.createElement("br");
      div.append(anch);
    });
    Topshop.append(div);
  }
  shopbyProduct_2();

  function Newedits_1() {
    let NeweditsArr = [
      {
        image:
          "https://images.asos-media.com/navigation/discover_topman_160124?&$n_320w$",
        name: "DISCOVER TOPMAN",
      },
      {
        image:
          "https://images.asos-media.com/navigation/discover_topman_160124?&$n_320w$",
        name: "KNITWEAR",
      },
    ];
    let maindiv = document.createElement("div");
    let heading = document.createElement("h4");
    heading.style.fontSize = "16px";
    heading.innerHTML = "";
    maindiv.append(heading);
    NeweditsArr.forEach((ele) => {
      let div = document.createElement("div");

      div.style.width = "auto";
      div.style.height = "auto";
      div.style.position = "relative";
      div.style.marginRight = "15px";
      div.style.textAlign = "center";

      let image = document.createElement("img");
      image.src = ele.image;
      image.style.border = "0.1px solid rgb(210, 214, 214)";
      image.style.marginTop = "10px";
      image.style.width = "278px";
      image.style.height = "145px";
      image.addEventListener("mouseover", function () {
        image.style.border = "1px solid blue";
      });
      image.addEventListener("mouseout", function () {
        image.style.border = "0.1px solid rgb(210, 214, 214)";
      });
      let name = document.createElement("h4");
      name.style.position = "absolute";
      name.style.top = "80%";
      name.style.left = "50%";
      name.style.color = "white";
      name.style.transform = "translate(-50% ,-50%)";

      name.textContent = ele.name;

      div.append(image, name);
      maindiv.append(div);
    });
    Topshop.append(maindiv);
  }
  Newedits_1();

  function Newedits_2() {
    let NeweditsArr = [
      {
        image:
          "https://images.asos-media.com/navigation/topman_coats_160124?&$n_320w$",
        name: "JACKETS & COATS",
      },
      {
        image:
          "https://images.asos-media.com/navigation/topman_hoodies_160124?&$n_320w$",
        name: "HOODIES & SWEATSHIRTS",
      },
    ];
    let maindiv = document.createElement("div");
    let heading = document.createElement("h4");
    heading.style.fontSize = "16px";
    heading.innerHTML = "";
    maindiv.append(heading);
    NeweditsArr.forEach((ele) => {
      let div = document.createElement("div");

      div.style.width = "auto";
      div.style.height = "auto";
      div.style.position = "relative";
      div.style.marginRight = "15px";
      div.style.textAlign = "center";

      let image = document.createElement("img");
      image.src = ele.image;
      image.style.border = "0.1px solid rgb(210, 214, 214)";
      image.style.marginTop = "10px";
      image.style.width = "278px";
      image.style.height = "145px";
      image.addEventListener("mouseover", function () {
        image.style.border = "1px solid blue";
      });
      image.addEventListener("mouseout", function () {
        image.style.border = "0.1px solid rgb(210, 214, 214)";
      });
      let name = document.createElement("h4");
      name.style.position = "absolute";
      name.style.top = "80%";
      name.style.left = "50%";
      name.style.color = "white";
      name.style.transform = "translate(-50% ,-50%)";

      name.textContent = ele.name;

      div.append(image, name);
      maindiv.append(div);
    });
    Topshop.append(maindiv);
  }
  Newedits_2();
}
Topshops();

// js for the market place section

function Market() {
  let MarketPlace = document.getElementById("market_container");
  let arr = [
    {
      image:
        "https://images.asos-media.com/navigation/nonuk_mw_marketplace_explore_4m_1311?$n_320w$",
      text: "EXPLORE ASOS",
      passage: "Vintage boutiques and independent brands.",
    },
    {
      image:
        "https://images.asos-media.com/navigation/nonuk_mw_marketplace_tshirts_4m_1311?$n_320w$",
      text: "T-SHIRTS",
      passage: "Vintage branded & one-of-a-kind",
    },
    {
      image:
        "https://images.asos-media.com/navigation/nonuk_mw_marketplace_trousers_4m_1311?$n_320w$",
      text: "TROUSERS & SHIRTS",
      passage: "Layers-up your lower half in these styles",
    },
    {
      image:
        "https://images.asos-media.com/navigation/nonuk_mw_marketplace_coatsjackets_4m_1311?$n_320w$",
      text: "JACKETS",
      passage: "Vintage & new layers, incoming",
    },
  ];

  arr.forEach(function (ele) {
    let maindiv = document.createElement("div");
    let childDiv = document.createElement("div");
    let image = document.createElement("img");
    image.src = ele.image;

    let text = document.createElement("h2");
    text.style.position = "relative";
    text.style.top = "50%";
    text.style.left = "50%";
    text.innerHTML = ele.text;

    let passagediv = document.createElement("div");
    let paragraph = document.createElement("p");
    paragraph.innerHTML = ele.passage;
    passagediv.append(paragraph);

    childDiv.append(image, text, passagediv);
    maindiv.append(childDiv);
    MarketPlace.append(maindiv);
  });
}

Market();

//  js for the sale funtion//

function Sales() {
  let Sale = document.getElementById("sales_container");

  let shopbyBodyfit = [
    {
      image:
        "https://images.asos-media.com/products/levis-type-1-sherpa-denim-trucker-jacket-in-yellow-check/204690539-2?$n_320w$&wid=317&fit=constrain",
      name: "We Run",
    },
    {
      image:
        "https://images.asos-media.com/products/levis-knitted-v-neck-jumper-in-diamond-print-with-logo/204253997-2?$n_320w$&wid=317&fit=constrain",
      name: "We Breathe",
    },
    {
      image:
        "https://images.asos-media.com/products/only-petite-roll-neck-puff-sleeve-knitted-midi-jumper-dress-in-charcoal/205148781-2?$n_320w$&wid=317&fit=constrain",
      name: "We Dance",
    },
    {
      image:
        "https://images.asos-media.com/products/levis-workwear-parkside-padded-overshirt-in-cream-check/204602589-2?$n_320w$&wid=317&fit=constrain",
      name: "We Push",
    },
  ];

  function shopbyprice() {
    let maindiv = document.createElement("div");
    let heading = document.createElement("h4");
    heading.style.fontSize = "16px";
    heading.innerHTML = "SHOP BY PRICE";
    maindiv.append(heading);

    let gridContainer = document.createElement("div");
    gridContainer.classList.add("grid-sale-container");

    shopbyBodyfit.forEach((ele) => {
      let div = document.createElement("div");
      div.classList.add("grid-sale-item");

      let image = document.createElement("img");
      image.src = ele.image;
      image.style.width = "80px";
      image.style.height = "80px";
      image.style.borderRadius = "50%";

      let name = document.createElement("p");
      name.textContent = ele.name;
      name.style.textAlign = "center";

      div.append(image, name);
      gridContainer.append(div);
    });

    maindiv.append(gridContainer);
    Sale.append(maindiv);
  }

  shopbyprice();

  function shopbysize() {
    let shopSpringArr = [
      {
        image:
          "https://images.asos-media.com/products/levis-bomber-jacket-in-block-contrasting-blue-denim/204810031-2?$n_320w$&wid=317&fit=constrain",
        name: "Size XS",
      },
      {
        image:
          "https://images.asos-media.com/products/levis-buchanan-borg-overshirt-in-black/204690779-2?$n_320w$&wid=317&fit=constrain",
        name: "Size S",
      },
      {
        image:
          "https://images.asos-media.com/products/coney-island-picnic-believe-varsity-bomber-jacket-in-off-white-and-purple-with-embroidered-patches/203903542-2?$n_320w$&wid=317&fit=constrain",
        name: "Size M",
      },
      {
        image:
          "https://images.asos-media.com/products/asos-design-unisex-oversized-cargo-shorts-in-washed-ecru/205929064-2?$n_320w$&wid=317&fit=constrain",
        name: "Size L",
      },
      {
        image:
          "https://images.asos-media.com/products/jack-jones-boxy-fit-denim-jacket-with-front-pocket-in-ecru/206091677-2?$n_320w$&wid=317&fit=constrain",
        name: "Size XL",
      },
      {
        image:
          "https://images.asos-media.com/products/rains-tomar-stretch-ripstop-utility-trousers-in-black/205682183-2?$n_320w$&wid=317&fit=constrain",
        name: "Size XXL",
      },
    ];

    let maindiv = document.createElement("div");
    maindiv.style.width = "590px";

    let heading = document.createElement("h4");
    heading.style.fontSize = "16px";
    heading.innerHTML = "SHOP BY SIZE";
    maindiv.append(heading);

    shopSpringArr.forEach((ele) => {
      let div = document.createElement("div");
      div.style.display = "flex";
      div.style.alignItems = "center";
      div.style.gap = "20px";
      div.style.width = "590px";
      div.style.height = "53px";

      let image = document.createElement("img");
      image.src = ele.image;
      image.style.width = "40px";
      image.style.height = "40px";
      image.style.marginLeft = "10px";
      image.style.borderRadius = "100px";
      image.style.border = "0.1px solid rgb(210, 214, 214)";

      let name = document.createElement("p");
      name.textContent = ele.name;

      div.addEventListener("mouseover", function () {
        image.style.border = "1px solid blue";
        name.style.color = "blue";
      });

      div.addEventListener("mouseout", function () {
        image.style.border = "0.1px solid rgb(210, 214, 214)";
        name.style.color = "";
      });

      let paradiv = document.createElement("div");
      paradiv.style.marginLeft = "20px";
      paradiv.style.borderBottom = "1px solid lightgray";
      paradiv.style.width = "590px";
      paradiv.style.height = "100%";
      paradiv.style.display = "flex";
      paradiv.style.alignItems = "center";

      paradiv.append(name);
      div.append(image, paradiv);
      maindiv.append(div);
    });

    Sale.append(maindiv);
  }

  shopbysize();
}

Sales();

const searchInput = document.getElementById("Search");
const loadingSpinner = document.getElementById("loading-spinner"); // Reference to the loading spinner

// Function to display search results in the search container
function showSearchResults() {
  let searchcontainer = document.getElementById("search-container");
  searchcontainer.innerHTML = "";
  loadingSpinner.style.display = "block"; // Show loading spinner while fetching data

  async function getdata() {
    let res = await fetch(`https://fakestoreapi.com/products`);
    let data = res.json();
    return data;
  }

  async function showdata() {
    let data = await getdata();
    data.forEach((element) => {
      let div = document.createElement("div");

      let image = document.createElement("img");
      image.src = element.image;

      let p1 = document.createElement("p");
      p1.innerHTML = element.title;

      let h3 = document.createElement("h3");
      h3.innerHTML = `$ ${element.price} (Deal)`;
      let randomColor = Math.random() < 0.5 ? "red" : "black";
      h3.style.color = randomColor;

      div.append(image, p1, h3);
      searchcontainer.append(div);
    });

    let section5 = document.getElementById("section_5");
    section5.style.display = "none";

    let section6 = document.getElementById("section_6");
    section6.style.display = "none";
    let section7 = document.getElementById("section_7");
    section7.style.display = "none";
    let section8 = document.getElementById("section_8");
    section8.style.display = "none";
    let section9 = document.getElementById("section_9");
    section9.style.display = "none";
    let section10 = document.getElementById("section_10");
    section10.style.display = "none";
    let section11 = document.getElementById("section_11");
    section11.style.marginTop = "50px";

    loadingSpinner.style.display = "none"; // Hide loading spinner after data is loaded
  }

  setTimeout(() => {
    showdata();
  }, 1000);
}

// Add event listener for input events
searchInput.addEventListener("keydown", function (event) {
  // Check if the Enter key is pressed
  if (event.key === "Enter") {
    setTimeout(() => {
      showSearchResults();
      showInputInfo();
      showResultInfo();
    }, 1000);
    event.preventDefault(); // Prevent the default action of the Enter key (form submission)
  }
});

// Function to display search input information
function showInputInfo() {
  let inputcontainer = document.getElementById("input-container");
  inputcontainer.innerHTML = "";
  loadingSpinner.style.display = "block"; // Show loading spinner while fetching data

  // Simulate loading time
  setTimeout(() => {
    let p1 = document.createElement("p");
    p1.innerHTML = "Your Search results for :";
    let p2 = document.createElement("h1");
    p2.innerHTML = `"${searchInput.value}"`;

    let div = document.createElement("div");
    div.append(p1, p2);

    inputcontainer.append(div);

    loadingSpinner.style.display = "none"; // Hide loading spinner after data is loaded
  }, 1000); // Adjust timeout value as needed
}

// Function to display search result information
function showResultInfo() {
  let resultcontainer = document.getElementById("result-container");
  resultcontainer.innerHTML = "";
  loadingSpinner.style.display = "block"; // Show loading spinner while fetching data

  // Simulate loading time
  setTimeout(() => {
    let div = document.createElement("div");
    let p1 = document.createElement("p");
    p1.innerHTML = `<span> Home  >  </span> Search results for men clothes`;
    div.append(p1);

    resultcontainer.append(div);

    loadingSpinner.style.display = "none"; // Hide loading spinner after data is loaded
  }, 1100); // Adjust timeout value as needed
}
