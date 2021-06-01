var products = [{
        name: "brocoli $1.99",
        nutFree: true,
        lactoseFree: true,
        organicProducts: true,
        nonOrganicProduct: false,
        budget: "small",
        price: 1.99,
    },
    {
        name: "bread $2.35",
        nutFree: true,
        lactoseFree: true,
        organicProducts: true,
        nonOrganicProduct: false,
        budget: "small",
        price: 2.35,
    },
    {
        name: "oreo cookies $4.99",
        nutFree: true,
        lactoseFree: false,
        organicProducts: false,
        nonOrganicProduct: true,
        budget: "small",
        price: 4.99,
    },
    {
        name: "ramen $0.99",
        nutFree: true,
        lactoseFree: true,
        organicProducts: false,
        nonOrganicProduct: true,
        budget: "small",
        price: 0.99,
    },
    {
        name: "salted peanuts $5.00",
        nutFree: false,
        lactoseFree: true,
        organicProducts: false,
        nonOrganicProduct: true,
        budget: "medium",
        price: 5.0,
    },
    {
        name: "cheese sticks $7.00",
        nutFree: false,
        lactoseFree: false,
        organicProducts: false,
        nonOrganicProduct: true,
        budget: "medium",
        price: 7.0,
    },
    {
        name: "almond granola $12.00",

        nutFree: false,
        lactoseFree: true,
        organicProducts: true,
        nonOrganicProduct: false,
        budget: "high",
        price: 12.00,
    },
    {
        name: "yogurt $6.00",
        nutFree: true,
        lactoseFree: false,
        organicProducts: false,
        nonOrganicProduct: true,
        budget: "medium",
        price: 6.0,
    },
    {
        name: "salmon $10.00",
        nutFree: true,
        lactoseFree: true,
        organicProducts: true,
        nonOrganicProduct: false,
        budget: "high",
        price: 10.0,
    },
    {
        name: "steak $18.99",
        nutFree: true,
        lactoseFree: true,
        organicProducts: true,
        nonOrganicProduct: false,
        budget: "high",
        price: 18.99,
    },
];


var nextBtn = document.getElementById("next-btn");
var checkedItems = document.getElementById("categorie");
var budgetStatus = [];
budgetStatus.push(document.getElementById("budgetList"));


/*Credited: https://www.w3schools.com*/
function openTab(groceryTab, animName) {
    var i;
    var x = document.getElementsByClassName("tab");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    document.getElementById(groceryTab).style.display = "block";
}

function sortByPrice(newList) {
    newList.sort(function(a, b) {
        return a.price - b.price;
    });
}



function assesUserInformation() {
    let listItems = [];
    var userInfo = [];

    var nutFree = document.getElementById("inlineCheckbox1");
    var lactoseFree = document.getElementById("inlineCheckbox2");
    var isOrganic = document.getElementById("organicProducts");
    var nonOrganic = document.getElementById("nonOrganicProduct");
    var neither = document.getElementById("neither");
    var budget = document.getElementById("budgetList");



    //Check the budgetary status of the client


    // for (var j = 0; j < budgetStatus.length; j++) {
    //     if (budgetStatus[j].value == ) {
    //         userInfo.push(budgetStatus[j].id);
    //     }
    // }

    if (nutFree.checked && !lactoseFree.checked) {
        listItems = products.filter((products) => { return (products.nutFree); });
    } else if (!nutFree.checked && lactoseFree.checked) {
        listItems = products.filter((products) => { return (products.lactoseFree); });
    } else if (nutFree.checked && lactoseFree.checked) {
        listItems = products.filter((products) => { return (products.lactoseFree && products.nutFree); });
    } else if (!nutFree.checked && !lactoseFree.checked) {
        listItems = products;
    }

    let newList;

    if (!(isOrganic.checked || nonOrganic.checked) && budget.value == "small") {
        newList = listItems.filter((listItems) => { return listItems.budget === "small"; });
        sortByPrice(newList);
        return newList;
    } else if (!(isOrganic.checked || nonOrganic.checked) && budget.value == "medium") {
        newList = listItems.filter((listItems) => { return listItems.budget === "medium"; });
        sortByPrice(newList);
        return newList;
    } else if (!(isOrganic.checked || nonOrganic.checked) && budget.value == "high") {
        newList = listItems.filter((listItems) => { return listItems.budget === "high"; });
        sortByPrice(newList);
        return newList;
    } else if (isOrganic.checked && budget.value == "small") {
        newList = listItems.filter((listItems) => { return listItems.organicProducts && listItems.budget === "small"; });
        sortByPrice(newList);
        return newList;
    } else if (isOrganic.checked && budget.value == "medium") {
        newList = listItems.filter((listItems) => { return listItems.organicProducts && listItems.budget === "medium"; });
        sortByPrice(newList);
        return newList;
    } else if (isOrganic.checked && budget.value == "high") {
        newList = listItems.filter((listItems) => { return listItems.organicProducts && listItems.budget === "high"; });
        sortByPrice(newList);
        return newList;
    } else if (isOrganic.checked) {
        newList = listItems.filter((listItems) => { return listItems.organicProducts; });
        sortByPrice(newList);
        return newList;
    } else if (nonOrganic.checked && budget.value == "small") {
        newList = listItems.filter((listItems) => { return listItems.nonOrganicProduct && listItems.budget === "small"; });
        sortByPrice(newList);
        return newList;
    } else if (nonOrganic.checked && budget.value == "medium") {
        newList = listItems.filter((listItems) => { return listItems.nonOrganicProduct && listItems.budget === "medium"; });
        sortByPrice(newList);
        return newList;
    } else if (nonOrganic.checked && budget.value == "high") {
        newList = listItems.filter((listItems) => { return listItems.nonOrganicProduct && listItems.budget === "high"; });
        sortByPrice(newList);
        return newList;
    } else if (nonOrganic.checked) {
        newList = listItems.filter((listItems) => { return listItems.nonOrganicProduct; });
        sortByPrice(newList);
        return newList;
    } else if (neither.checked && budget.value == "none") {
        newList = listItems;
        sortByPrice(newList);
        return newList;
    } else if (neither.checked && budget.value == "Medium") {
        newList = listItems.filter((listItems) => { return listItems.budget === "medium"; });
        sortByPrice(newList);
        return newList;
    } else if (neither.checked && budget.value == "High") {
        newList = listItems.filter((listItems) => { return listItems.budget === "high"; });
        sortByPrice(newList);
        return newList;
    }

    listItems.sort(function(a, b) {
        return a.price - b.price;
    });

    return listItems;
}

function displayListItems(options) {

    var s2 = document.getElementById(options);
    var userItems = assesUserInformation();


    s2.className = "list-group";

    s2.innerHTML = "";

    if (userItems.length == 0) {
        s2.innerHTML = "NO ITEM FOUND!";
    }

    document.getElementById("submit-btn").style.display = "none";


    if (document.getElementById("firstNameInput").value !== '') {

        document.getElementById("welcomeMsg").innerHTML =
            "<h3>Hello" + " " + document.getElementById("firstNameInput").value + "! Here are your targeted prodcuts!" + "</h3>";

        document.getElementById("submit-btn").style.display = "block";
        for (var i = 0; i < userItems.length; i++) {

            var productName = userItems[i].name;
            // create the checkbox and add in HTML DOM
            var checkbox = document.createElement("input");
            checkbox.className = "form-check-input me-1";
            checkbox.type = "checkbox";
            checkbox.name = "product";
            checkbox.id = productName;
            checkbox.value = productName;


            // create a label for the checkbox, and also add in HTML DOM
            var label = document.createElement('label');
            label.className = "list-group-item";

            label.htmlFor = productName;
            label.appendChild(checkbox);
            label.appendChild(document.createTextNode(productName));
            s2.appendChild(label);
        }

        document.getElementById("submit-btn").addEventListener("click", function() {

            successCheck();
        });

    } else {
        document.getElementById("welcomeMsg").innerHTML = "";
    }
}
document.getElementById("product-btn").addEventListener("click", function() {
    errCheck();
});

nextBtn.addEventListener("click", function() {
    errCheck();
});

function successCheck() {
    document.getElementById("successList").innerHTML = "";

    var banner = document.createElement("div");
    banner.className = "alert alert-success";
    banner.style.backgroundColor = "#28a745";
    banner.style.color = "white";
    banner.role = "alert";
    banner.innerHTML = "Items successfully added to your cart!"
    banner.style.display = "flex";
    document.getElementById("successList").appendChild(banner);

}

function errCheck() {
    document.getElementById("errorList").innerHTML = "";
    if (document.getElementById("firstNameInput").value == "") {
        var err = document.createElement("div");
        err.id = "errorMsg";
        err.className = "alert alert-danger";
        err.role = "alert";
        err.innerHTML = "You must submit all required fields in the client tab!";
        document.getElementById("errorList").appendChild(err);
    }


}

function selectedItems() {

    var ele = document.getElementsByClassName("form-check-input me-1");
    var chosenProducts = [];

    var c = document.getElementById("itemsOnList");
    var d = document.getElementById("TotalLine");
    c.innerHTML = "";

    // build list of selected item
    var para = document.createElement("P");
    var listPrice = document.createElement("P");
    var total = document.createElement("P");
    total.style = "display:inline";

    para.innerHTML = "<h3 style='display: block;'>You selected : </h3>";
    para.appendChild(document.createElement("br"));
    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked) {
            para.appendChild(document.createTextNode(ele[i].value));
            para.appendChild(document.createElement("br"));
            chosenProducts.push(ele[i].value);
        }
    }

    // add paragraph and total price
    c.appendChild(para);
    total.innerHTML = "Total: ";
    total.appendChild(document.createTextNode(getTotalPrice(chosenProducts)));
    d.appendChild(total);
}

function getTotalPrice(chosenProducts) {
    totalPrice = 0;
    for (let i = 0; i < products.length; i += 1) {
        if (chosenProducts.indexOf(products[i].name) > -1) {
            totalPrice += products[i].price;
        }
    }
    return totalPrice;
}

document.getElementById("pickup-btn").addEventListener("click", function() {
    alert("Thank you for shopping at RobShop see you shortly!");
});


document.getElementById("delivery-btn").addEventListener("click", function() {
    alert("Thank you for shopping at RobShop we will contact you shortly for additional information!");
});