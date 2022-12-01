    const ramenMenuDiv = document.querySelector("#ramen-menu")
    const detailImage = document.querySelector("#ramen-detail > .detail-image")
    const detailName = document.querySelector("#ramen-detail > .name")
    const detailRestaurant = document.querySelector("#ramen-detail > .restaurant")
    // callbacks
    const handleClick = (ramen) => {
        debugger
    }

    const displayRamen = (ramenObj) => {
    // create img tag
    const ramenImage = document.createElement("img")
    // set img src
    ramenImage.src = ramenObj.image
    // set an alt attributre
    ramenImage.alt = ramenObj.name
    // set a class -optional
    ramenImage.classList.add("ramen-image")
    ramenImage.addEventListener("click", () => handleClick(ramenObj))
    // append img to div
    ramenMenuDiv.appendChild(ramenImage)
    }

    
    
    // fetch functions


    const fetchdata = () => {
        fetch("http://localhost:3000/ramens")
        .then(response => response.json())
        .then(ramens => ramens.forEach(displayRamen))  
        // foreach automatically passes the current ramen we iterate iover to the callbaack
        .catch(error => alert(error))
    }
    // start the logic
    fetchdata()

    

















    //     // const renderRamen(ramens) => {
//     // ramens.foreach(renderRamen)
//     // }
//     // function renderRamen(ramen) {
//     //     const ramenMenuDiv = document.getElementById("ramen-menu");
//     //     const ramenImage = document.createElement("img")
//     //     ramenImage.src = ramen.Image
//     //     ramenMenuDiv.append(ramenImage)

//     //     ramenImage.addEventListener("click", () => renderTheRamen(ramen))
//     // }
//     // function renderTheRamen(ramen) {
//     //     console.log(ramen.Image)
//     //     const detailImage = ("detail-image")
//     //     const ramenname = ("ramen-name")
//     //     const restaurantname = ("restaurant-name")

//     //     detailImage.src = ramen.Image
//     // }
        
        
//         function getRamensObj () {
//             fetch("http://localhost:3000/ramens")
//                .then(res => res.json())
//                .then(ramenData => ramenData.foreach(renderRamen))
//         }
//         getRamensObj()


// function getSingleRamen() {
//     fetch("http://localhost:3000/ramens")
//     .then(res => res.json())
//     .then(ramenData => console.log(ramenData))
   
// }
// const displayRamenMain = ramenData => {
//     const insertDetailImage = document.querySelector('#ramen-detail-image')
//     replace(insertDetailImage.src, ramenData.Image)
// }
// getSingleRamen()




