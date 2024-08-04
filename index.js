// js for section_4
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
setInterval(() => {
  function section7() {
    let section_7 = document.getElementById("section_7");
    section_7.innerHTML = "";
    let SectionArr = [
      {
        image:
          "https://content.asos-media.com/-/media/homepages/ww/2024/march/18-gbl/ww_global_sports_core_moment_870x1110.jpg",
        category: "SPORTSCORE",
        Description: "Ace your look",
      },
      {
        image:
          "https://content.asos-media.com/-/media/homepages/ww/2024/march/18-gbl/2024_homepage_moment_ww_guest_870x1110_1.jpg",
        category: "BEST DRESSED",
        Description: "Whatever the location",
      },
      {
        image:
          "https://content.asos-media.com/-/media/homepages/ww/2024/march/18-gbl/ww_global_trainers_moment_870x1110---v2.jpg",
        category: "TRENDING TRAINERS",
        Description: "Your go-to kicks",
      },
      {
        image:
          "https://content.asos-media.com/-/media/homepages/ww/2024/march/18-gbl/ww_global_huda_gloss_moment_870x1110.jpg",
        category: "HUDA BEAUTY",
        Description: "Ft. the new Faux Filler glass",
      },
    ];

    SectionArr.forEach((Element) => {
      let div = document.createElement("div");
      let image = document.createElement("img");
      image.classList.add("custom-class");
      image.style.width = "285.5px";
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
          "https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/monkl-hp-logos-256x256.jpg",
      },
      {
        image:
          "https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/never-fully-dressed-hp-logos-256x256.png",
      },
      {
        image:
          "https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/1x12x---test.png",
      },
      {
        image:
          "https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/reclaimed-vintage-hp-logos-256x256.jpg",
      },
      {
        image:
          "https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/collusion-hp-logos-256x256.jpg",
      },
      {
        image:
          "https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/weekday-hp-logos-256x256.jpg",
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
}, 1500);
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

let women = document.getElementById("men");
women.addEventListener("click", function () {
  setTimeout(() => {
    window.location.href = "men.html";
  }, 1000);
});

let asos = document.getElementById("asos");
asos.addEventListener("click", function () {
  setTimeout(() => {
    window.location.href = "index.html";
  }, 1000);
});

let store_icon = document.getElementById("store-icon");
store_icon.addEventListener("click", function () {
  setTimeout(function () {
    window.location.href = "store.html";
  }, 1000);
});

let save_icon = document.getElementById("saved-icon");
save_icon.addEventListener("click", function () {
  setTimeout(function () {
    window.location.href = "saved.html";
  }, 1000);
});

//// this code for a newin hover funtionality

function newin() {
  let newinsss = document.getElementById("New_in_container");

  function newProducts() {
    let arr = [
      "view all",
      "clothing",
      "shoes",
      "newin",
      "tshirts&vests",
      "jeans",
      "shorts",
      "swimwear",
      "accesories",
      "face+body",
      "sportswear",
      "underwear",
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
      let br = document.createElement("br");
      div.append(anch);
    });
    newinsss.append(div);
  }
  newProducts();

  function shopSpring() {
    let shopSpringArr = [
      {
        image:
          "https://images.asos-media.com/products/asos-design-linen-blend-overshirt-in-grey/205454694-2?$n_320w$&wid=317&fit=constrain",
        name: "Spring Outfits",
      },
      {
        image:
          "https://images.asos-media.com/products/asos-4505-training-long-sleeve-muscle-fit-base-layer-with-thermal-performance-fabric-in-black/205039933-2?$n_320w$&wid=317&fit=constrain",
        name: "Holiday Fits",
      },
      {
        image:
          "https://images.asos-media.com/products/asos-design-relaxed-fluffy-jumper-with-all-over-print-in-blue/205858122-2?$n_320w$&wid=317&fit=constrain",
        name: "Light Layers",
      },
      {
        image:
          "https://images.asos-media.com/products/asos-design-boxy-oversized-linen-mix-shirt-in-floral-blanket-print/204562382-2?$n_320w$&wid=317&fit=constrain",
        name: "Linen",
      },
      {
        image:
          "https://images.asos-media.com/products/my-accessories-five-panel-cap-in-stripe/205773556-2?$n_320w$&wid=317&fit=constrain",
        name: "acesoories",
      },
      {
        image:
          "https://images.asos-media.com/products/we-are-we-wear-bobbie-standard-length-swim-short-with-logo-waist-band-in-green/204368382-2?$n_320w$&wid=317&fit=constrain",
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
          "https://images.asos-media.com/products/asos-4505-icon-oversized-training-t-shirt-in-white/202317651-2?$n_240w$&wid=238&fit=constrain",
        name: "ASOS DESIGN",
      },
      {
        image:
          "https://images.asos-media.com/products/selected-homme-cotton-overshirt-in-beige/203226133-2?$n_320w$&wid=317&fit=constrain",
        name: "Adidas",
      },
      {
        image:
          "https://images.asos-media.com/products/south-beach-1-4-zip-sweat-in-navy/203420160-2?$n_240w$&wid=238&fit=constrain",
        name: "British Brands",
      },
      {
        image:
          "https://images.asos-media.com/products/the-north-face-nse-shell-track-jacket-in-black/205418218-2?$n_240w$&wid=238&fit=constrain",
        name: "New Balance",
      },
      {
        image:
          "https://images.asos-media.com/products/under-armour-cold-gear-armour-leggings-in-dark-grey/205282327-2?$n_240w$&wid=238&fit=constrain",
        name: "New look",
      },
      {
        image:
          "https://images.asos-media.com/products/asos-4505-ski-faux-fur-trapper-hat-in-white/205009239-2?$n_240w$&wid=238&fit=constrain",
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
        "https://images.asos-media.com/products/asos-4505-icon-oversized-training-t-shirt-in-white/202317651-2?$n_240w$&wid=238&fit=constrain",
      name: "Curve & plus size",
    },
    {
      image:
        "https://images.asos-media.com/products/selected-homme-cotton-overshirt-in-beige/203226133-2?$n_320w$&wid=317&fit=constrain",
      name: "mMternity",
    },
    {
      image:
        "https://images.asos-media.com/products/south-beach-1-4-zip-sweat-in-navy/203420160-2?$n_240w$&wid=238&fit=constrain",
      name: "Pelite",
    },
    {
      image:
        "https://images.asos-media.com/products/the-north-face-nse-shell-track-jacket-in-black/205418218-2?$n_240w$&wid=238&fit=constrain",
      name: "Tall",
    },
    {
      image:
        "https://images.asos-media.com/products/under-armour-cold-gear-armour-leggings-in-dark-grey/205282327-2?$n_240w$&wid=238&fit=constrain",
      name: "Hourglass",
    },
    {
      image:
        "https://images.asos-media.com/products/asos-4505-ski-faux-fur-trapper-hat-in-white/205009239-2?$n_240w$&wid=238&fit=constrain",
      name: "Fuller Bust",
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
          "https://images.asos-media.com/products/asos-design-linen-blend-overshirt-in-grey/205454694-2?$n_320w$&wid=317&fit=constrain",
        name: "Spring Styles",
      },
      {
        image:
          "https://images.asos-media.com/products/asos-4505-training-long-sleeve-muscle-fit-base-layer-with-thermal-performance-fabric-in-black/205039933-2?$n_320w$&wid=317&fit=constrain",
        name: "Ocassinwear",
      },
      {
        image:
          "https://images.asos-media.com/products/asos-design-relaxed-fluffy-jumper-with-all-over-print-in-blue/205858122-2?$n_320w$&wid=317&fit=constrain",
        name: "Holiday",
      },
      {
        image:
          "https://images.asos-media.com/products/asos-design-boxy-oversized-linen-mix-shirt-in-floral-blanket-print/204562382-2?$n_320w$&wid=317&fit=constrain",
        name: "Basics",
      },
      {
        image:
          "https://images.asos-media.com/products/my-accessories-five-panel-cap-in-stripe/205773556-2?$n_320w$&wid=317&fit=constrain",
        name: "Modest Fashion",
      },
      {
        image:
          "https://images.asos-media.com/products/we-are-we-wear-bobbie-standard-length-swim-short-with-logo-waist-band-in-green/204368382-2?$n_320w$&wid=317&fit=constrain",
        name: "Wedding",
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
        "https://images.asos-media.com/products/topshop-linen-blend-tie-front-midi-dress-in-ecru/204219616-2?$n_320w$&wid=317&fit=constrain",
      text: "BASICS",
    },
    {
      image:
        "https://images.asos-media.com/products/asos-luxe-curve-off-shoulder-frill-mini-dress-with-wired-hem-corsetted-waist-in-black/205400744-2?$n_320w$&wid=317&fit=constrain",
      text: "WILDERNESS",
    },
    {
      image:
        "https://images.asos-media.com/products/topshop-curve-maxi-sequin-dress-in-cobalt/203373449-2?$n_320w$&wid=317&fit=constrain",
      text: "LEADERPOINT",
    },
    {
      image:
        "https://images.asos-media.com/products/asos-design-bridesmaid-curve-satin-square-neck-maxi-dress-in-orchid/204050399-2?$n_320w$&wid=317&fit=constrain",
      text: "NEW ENGLAND",
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

// js for dress section dropdown hover

function dresess() {
  let dress = document.getElementById("Dress_container");

  function shopbytype() {
    let arr = [
      "Selling fase",
      "Viiew all",
      "New in",
      "Wedding guest dresses",
      "Bridesmaid dresses",
      "Evening dresses",
      "day Dresses",
      "Day dresses",
      "Party dresses",
      "Mini dresses",
      "Midi dresses",
      "Maxi dresses",
    ];
    let div = document.createElement("div");
    let heading = document.createElement("h4");
    heading.style.fontSize = "16px";
    heading.innerHTML = "SHOP BY TYPE";
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
    dress.append(div);
  }
  shopbytype();

  function trendingNow() {
    let shopSpringArr = [
      {
        image:
          "https://images.asos-media.com/products/wednesdays-girl-button-through-floral-print-romper-suit-in-orange/204539836-2?$n_240w$&wid=238&fit=constrain",
        name: "Spring dresses",
      },
      {
        image:
          "https://images.asos-media.com/products/vero-moda-tailored-wide-leg-dad-trouser-co-ord-in-grey/204859057-2?$n_240w$&wid=238&fit=constrain",
        name: "Holiday dresses",
      },
      {
        image:
          "https://images.asos-media.com/products/vero-moda-pinstripe-wide-leg-trouser-co-ord-in-grey/204447008-2?$n_240w$&wid=238&fit=constrain",
        name: "Wrap dresses",
      },
      {
        image:
          "https://images.asos-media.com/products/asos-design-jersey-tapered-suit-trousers-in-green/203095078-2?$n_240w$&wid=238&fit=constrain",
        name: "Black dresses",
      },
      {
        image:
          "https://images.asos-media.com/products/asos-design-curve-tailored-suit-trousers-in-electric-blue/203238380-2?$n_240w$&wid=238&fit=constrain",
        name: "Slip dresses",
      },
      {
        image:
          "https://images.asos-media.com/products/french-connection-tailored-jacquard-trouser-in-animal-co-ord/205248760-2?$n_240w$&wid=238&fit=constrain",
        name: "Blazer dresses",
      },
    ];
    let maindiv = document.createElement("div");
    let heading = document.createElement("h4");
    heading.style.fontSize = "16px";
    heading.innerHTML = "TRENDING NCW";
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
    dress.append(maindiv);
  }
  trendingNow();

  let shobbyBodyfit = [
    {
      image:
        "https://images.asos-media.com/products/asos-edition-jacquard-trouser-with-faux-feather-trim-in-ivory/203609479-2?$n_320w$&wid=317&fit=constrain",
      name: "Curve & plus size",
    },
    {
      image:
        "https://images.asos-media.com/products/asos-design-jersey-tapered-suit-trousers-in-green/203095078-2?$n_240w$&wid=238&fit=constrain",
      name: "Maternity",
    },
    {
      image:
        "https://images.asos-media.com/products/sister-jane-unisex-clover-studded-blazer-in-blue-co-ord/205749439-2?$n_320w$&wid=317&fit=constrain",
      name: "Pelite",
    },
    {
      image:
        "https://images.asos-media.com/products/asos-edition-jacquard-trouser-with-faux-feather-trim-in-ivory/203609489-2?$n_320w$&wid=317&fit=constrain",
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
    gridContainer.classList.add("grid-dress-container");

    shobbyBodyfit.forEach((ele) => {
      let div = document.createElement("div");
      div.style.width = "60px";
      div.style.height = "100px";
      div.style.marginTop = "20px";
      div.classList.add("grid-dress-item");
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
    dress.append(maindiv);
  }

  bodyfit();

  function Newedits() {
    let NeweditsArr = [
      {
        image:
          "https://images.asos-media.com/navigation/_ww_dresses_asos+edition_4wl_124498734?&$n_320w$",
        name: "ASOS EDITION",
      },
      {
        image:
          "https://images.asos-media.com/navigation/ww_dresses_asosdesign_4WL_122199624?&$n_320w$",
        name: "ASOS FASHION",
      },
      {
        image:
          "https://images.asos-media.com/navigation/weddinghub_right_050124_1650x636?&$n_320w$",
        name: "WEDDING SHOP",
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
    dress.append(maindiv);
  }
  Newedits();
}
dresess();

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
          "https://images.asos-media.com/products/asos-design-wide-fit-verity-loafer-flat-shoes-with-trim-in-black/202461114-2?$n_320w$&wid=317&fit=constrain",
        name: "ASOS Design",
      },
      {
        image:
          "https://images.asos-media.com/products/asos-design-wide-fit-prize-tie-leg-high-heeled-shoes-in-black/201084314-2?$n_320w$&wid=317&fit=constrain",
        name: "New Balance",
      },
      {
        image:
          "https://images.asos-media.com/products/asos-design-priority-platform-high-heeled-shoes-in-black/22945348-2?$n_320w$&wid=317&fit=constrain",
        name: "Dr Martens",
      },
      {
        image:
          "https://images.asos-media.com/products/asos-design-mussy-loafer-flat-shoes-in-blush/23653700-2?$n_320w$&wid=317&fit=constrain",
        name: "Cracs",
      },
      {
        image:
          "https://images.asos-media.com/products/raid-neima-block-heeled-shoes-in-black/24305106-2?$n_320w$&wid=317&fit=constrain",
        name: "Asics",
      },
      {
        image:
          "https://images.asos-media.com/products/steve-madden-kind-heart-heeled-shoes-with-diamante-heart-in-pink-patent/204156635-2?$n_320w$&wid=317&fit=constrain",
        name: "On Runnig",
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
          "https://images.asos-media.com/navigation/mw_shoes_summer+shoes_gbl_4wl_123110389?&amp;$n_320w$",
        name: "WHITE TRAINERS",
      },
      {
        image:
          "https://images.asos-media.com/navigation/ww_whitetrainers_shoes_4WL_118795258_21?&amp;$n_320w$",
        name: "PARTY SHOES",
      },
      {
        image:
          "https://images.asos-media.com/navigation/mw_shoes_summer+shoes_gbl_4wl_123110389?&$n_320w$",
        name: "NEW SZN SHOES",
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
          "https://images.asos-media.com/navigation/festivalaccessories_accessories_gbl_2wl_130399504?&$n_320w$",
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

// tthis is js code for the facebody container

function FacesBody() {
  let face = document.getElementById("facebody_container");

  function shopbyproduct() {
    let arr = [
      "Up to 30% off face + body brands",
      "View all",
      "BestSellers",
      "New in",
      "Gifts",
      "Makeup",
      "day Dresses",
      "Skin core",
      "Hair care",
      "Body care",
      "Suncare & Tanning",
      "Wellness",
      "Tools $ Accesories",
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
    face.append(div);
  }
  shopbyproduct();

  function shopbybrand() {
    let arr = [
      "Caudolle",
      "Charlotte Tilbury",
      "Doll Beauty",
      "Easillocks",
      "Kitsch",
      "NYX Professional Makeup",
      "Olaplex",
      "Pixi",
      "Revolution",
      "Shea Moisture",
      "The Inkey List",
      "The Ordinary",
      "A tp Z of Brands",
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
    face.append(div);
  }
  shopbybrand();

  let shobbyBodyfit = [
    {
      image:
        "https://images.asos-media.com/products/benefit-cosmetics-fluff-up-flexible-hold-texturizing-wax/204281426-2?$n_320w$&wid=317&fit=constrain",
      name: "Just Dropped ",
    },
    {
      image:
        "https://images.asos-media.com/products/too-faced-cloud-crush-blurring-blush-velvet-crush/204666041-2?$n_320w$&wid=317&fit=constrain",
      name: "Skinvestments",
    },
    {
      image:
        "https://images.asos-media.com/products/ex1-delete-fluid-liquid-concealer/9454753-2?$n_320w$&wid=317&fit=constrain",
      name: "A seen on socials",
    },
    {
      image:
        "https://images.asos-media.com/products/too-faced-kissing-jelly-lip-oil-gloss-sweet-cotton-candy/205851610-2?$n_320w$&wid=317&fit=constrain",
      name: "Buyers best bits",
    },
  ];

  function bodyfit() {
    let maindiv = document.createElement("div");
    let heading = document.createElement("h4");
    heading.style.fontSize = "16px";
    heading.innerHTML = "SHOP BY BODY FIT";
    maindiv.append(heading);

    let gridContainer = document.createElement("div");
    gridContainer.classList.add("grid-body-container");

    shobbyBodyfit.forEach((ele) => {
      let div = document.createElement("div");
      div.style.width = "60px";
      div.style.height = "100px";
      div.style.marginTop = "20px";
      div.classList.add("grid-body-item");
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
    face.append(maindiv);
  }

  bodyfit();

  function Newedits() {
    let NeweditsArr = [
      {
        image: "	https://images.asos-media.com/navigation/nyx_240124?&$n_320w$",
        name: "NYX PROFESSIONAL MAKEUP",
      },
      {
        image:
          "https://images.asos-media.com/navigation/1650x636+_THE+ORDINARY_GLYCOLIC+ACID_ASOS_DDN?&$n_320w$",
        name: "THE ORDINARY",
      },
      {
        image: "https://images.asos-media.com/navigation/elf_240124?&$n_320w$",
        name: "E.L.F",
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
    face.append(maindiv);
  }
  Newedits();
}
FacesBody();

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
          "https://images.asos-media.com/products/asos-design-linen-blend-overshirt-in-grey/205454694-2?$n_320w$&wid=317&fit=constrain",
        name: "View all",
      },
      {
        image:
          "https://images.asos-media.com/products/asos-4505-training-long-sleeve-muscle-fit-base-layer-with-thermal-performance-fabric-in-black/205039933-2?$n_320w$&wid=317&fit=constrain",
        name: "ASOS DESIGN",
      },
      {
        image:
          "https://images.asos-media.com/products/asos-design-relaxed-fluffy-jumper-with-all-over-print-in-blue/205858122-2?$n_320w$&wid=317&fit=constrain",
        name: "TOPSHOP",
      },
      {
        image:
          "https://images.asos-media.com/products/asos-design-boxy-oversized-linen-mix-shirt-in-floral-blanket-print/204562382-2?$n_320w$&wid=317&fit=constrain",
        name: "COLLUSION",
      },
      {
        image:
          "https://images.asos-media.com/products/my-accessories-five-panel-cap-in-stripe/205773556-2?$n_320w$&wid=317&fit=constrain",
        name: "Miss Selfridge",
      },
      {
        image:
          "https://images.asos-media.com/products/we-are-we-wear-bobbie-standard-length-swim-short-with-logo-waist-band-in-green/204368382-2?$n_320w$&wid=317&fit=constrain",
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
          "https://images.asos-media.com/products/asos-4505-icon-oversized-training-t-shirt-in-white/202317651-2?$n_240w$&wid=238&fit=constrain",
        name: "New In",
      },
      {
        image:
          "https://images.asos-media.com/products/selected-homme-cotton-overshirt-in-beige/203226133-2?$n_320w$&wid=317&fit=constrain",
        name: "Outdoor",
      },
      {
        image:
          "https://images.asos-media.com/products/south-beach-1-4-zip-sweat-in-navy/203420160-2?$n_240w$&wid=238&fit=constrain",
        name: "Trainers",
      },
      {
        image:
          "https://images.asos-media.com/products/the-north-face-nse-shell-track-jacket-in-black/205418218-2?$n_240w$&wid=238&fit=constrain",
        name: "Face + Body",
      },
      {
        image:
          "https://images.asos-media.com/products/under-armour-cold-gear-armour-leggings-in-dark-grey/205282327-2?$n_240w$&wid=238&fit=constrain",
        name: "Emerging Brands",
      },
      {
        image:
          "https://images.asos-media.com/products/asos-4505-ski-faux-fur-trapper-hat-in-white/205009239-2?$n_240w$&wid=238&fit=constrain",
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
          "https://images.asos-media.com/navigation/ww_brands_plussizebrands_3WL_122699295?&$n_320w$",
        name: "CURVE & PLUS SIZE",
      },
      {
        image:
          "https://images.asos-media.com/navigation/ww_brands_asosbrands_3WL_126624134?&$n_320w$",
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
          "https://images.asos-media.com/products/wednesdays-girl-short-sleeve-smudge-spot-mini-dress-in-sea-blue/206055638-2?$n_320w$&wid=317&fit=constrain",
        name: "Gym",
      },
      {
        image:
          "https://images.asos-media.com/products/levis-perfect-t-shirt-with-small-serif-logo-in-black/204839442-2?$n_320w$&wid=317&fit=constrain",
        name: "Running",
      },
      {
        image:
          "https://images.asos-media.com/products/levis-90s-fringe-denim-trucker-jacket-in-blue/205358340-2?$n_320w$&wid=317&fit=constrain",
        name: "Outdoors",
      },
      {
        image:
          "https://images.asos-media.com/products/wednesdays-girl-ditsy-floral-corsage-detail-mini-dress-in-sage-green/205644171-2?$n_320w$&wid=317&fit=constrain",
        name: "Yoga & Studio",
      },
      {
        image:
          "https://images.asos-media.com/products/wednesdays-girl-long-sleeve-smudge-spot-midaxi-dress-in-teal-green/205382556-2?$n_320w$&wid=317&fit=constrain",
        name: "Ski & Snowboard",
      },
      {
        image:
          "https://images.asos-media.com/products/wednesdays-girl-ditsy-floral-puff-sleeve-smocked-mini-dress-in-green/204539698-2?$n_320w$&wid=317&fit=constrain",
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
        "https://images.asos-media.com/products/under-armour-infinity-mid-support-high-neck-sports-bra-in-grey-shine/202952951-2?$n_320w$&wid=317&fit=constrain",
      name: "We Run",
    },
    {
      image:
        "https://images.asos-media.com/products/the-north-face-training-mountain-athletic-mid-support-sports-bra-in-purple/205445175-2?$n_320w$&wid=317&fit=constrain",
      name: "We Breathe",
    },
    {
      image:
        "https://images.asos-media.com/products/shock-absorber-active-shaped-high-support-sports-bra-in-black/201707443-2?$n_320w$&wid=317&fit=constrain",
      name: "We Dance",
    },
    {
      image:
        "https://images.asos-media.com/products/pink-soda-sport-maternity-polyester-blend-cross-back-bra-in-black/203928364-2?$n_320w$&wid=317&fit=constrain",
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
          "https://images.asos-media.com/navigation/sportswear_gbl_ww_awm_new_balance_v2?&$n_320w$",
        name: "ASOS EDITION",
      },
      {
        image:
          "https://images.asos-media.com/navigation/sportswear_gbl_ww_awm_adidas_v2?&$n_320w$",
        name: "WEDDING SHOP",
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
          "https://images.asos-media.com/navigation/discover_topshop_160124?&$n_320w$",
        name: "NEW IN",
      },
      {
        image:
          "https://images.asos-media.com/navigation/topshop_knitwear_160124?&$n_320w$",
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
          "https://images.asos-media.com/navigation/topshop_coats_160124?&$n_320w$",
        name: "COATS & JACKETS",
      },
      {
        image:
          "	https://images.asos-media.com/navigation/topshop_denim_160124?&$n_320w$",
        name: "DENIM",
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
        "https://images.asos-media.com/navigation/nonuk_WW_marketplace_dresses_4M_220224?&amp;$n_320w$&quot",
      text: "EXPLORE ASOs",
      passage: "VIntage boutiques and br independent brands.",
    },
    {
      image:
        "https://images.asos-media.com/navigation/nonuk_ww_marketplace_explore_4m_1311?&amp;$n_320w$&",
      text: "DRESSES",
      passage: "Styles you won't find anywhere wlse",
    },
    {
      image:
        "https://images.asos-media.com/navigation/nonuk_WW_marketplace_knitwear_4M_220224?&;$n_320w$",
      text: "KNITWEAR",
      passage: "Need to layer up ? we have fot you!",
    },
    {
      image:
        "https://images.asos-media.com/navigation/nonuk_ww_marketplace_coatsjackets_4m_1311?&;$n_320w$&quot",
      text: "JACKETS",
      passage: "Layers that hit different",
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

  let shobbyBodyfit = [
    {
      image:
        "https://images.asos-media.com/products/under-armour-infinity-mid-support-high-neck-sports-bra-in-grey-shine/202952951-2?$n_320w$&wid=317&fit=constrain",
      name: "We Run",
    },
    {
      image:
        "https://images.asos-media.com/products/the-north-face-training-mountain-athletic-mid-support-sports-bra-in-purple/205445175-2?$n_320w$&wid=317&fit=constrain",
      name: "We Breathe",
    },
    {
      image:
        "https://images.asos-media.com/products/shock-absorber-active-shaped-high-support-sports-bra-in-black/201707443-2?$n_320w$&wid=317&fit=constrain",
      name: "We Dance",
    },
    {
      image:
        "https://images.asos-media.com/products/pink-soda-sport-maternity-polyester-blend-cross-back-bra-in-black/203928364-2?$n_320w$&wid=317&fit=constrain",
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

    shobbyBodyfit.forEach((ele) => {
      let div = document.createElement("div");
      div.style.width = "60px";
      div.style.height = "100px";
      div.style.marginTop = "20px";
      div.classList.add("grid-sale-item");
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
    Sale.append(maindiv);
  }

  shopbyprice();

  function shopbysize() {
    let shopSpringArr = [
      {
        image:
          "https://images.asos-media.com/products/wednesdays-girl-short-sleeve-smudge-spot-mini-dress-in-sea-blue/206055638-2?$n_320w$&wid=317&fit=constrain",
        name: "Size 6",
      },
      {
        image:
          "https://images.asos-media.com/products/levis-perfect-t-shirt-with-small-serif-logo-in-black/204839442-2?$n_320w$&wid=317&fit=constrain",
        name: "Size 8",
      },
      {
        image:
          "https://images.asos-media.com/products/levis-90s-fringe-denim-trucker-jacket-in-blue/205358340-2?$n_320w$&wid=317&fit=constrain",
        name: "Size 10",
      },
      {
        image:
          "https://images.asos-media.com/products/wednesdays-girl-ditsy-floral-corsage-detail-mini-dress-in-sage-green/205644171-2?$n_320w$&wid=317&fit=constrain",
        name: "Size 12",
      },
      {
        image:
          "https://images.asos-media.com/products/wednesdays-girl-long-sleeve-smudge-spot-midaxi-dress-in-teal-green/205382556-2?$n_320w$&wid=317&fit=constrain",
        name: "Size 14",
      },
      {
        image:
          "https://images.asos-media.com/products/wednesdays-girl-ditsy-floral-puff-sleeve-smocked-mini-dress-in-green/204539698-2?$n_320w$&wid=317&fit=constrain",
        name: "Size 616+",
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
      paradiv.style.width = "590px";
      paradiv.style.height = "100%";
      paradiv.style.display = "flex";
      paradiv.style.alignItems = "center";
      name.textContent = ele.name; // Fix here
      paradiv.append(name);
      div.append(image, paradiv);
      maindiv.append(div);
    });
    Sale.append(maindiv);
  }
  shopbysize();
}
Sales();

// js for search

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
