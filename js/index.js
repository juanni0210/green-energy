// Load your images on page-load
function preloader() {
    const imagesList = [
       "./img/solar-power.jpg",
       "./img/wind-power.jpg",
       "./img/geothermal-power.jpg"
    ];
    const images = [];
    for (let i = 0; i < imagesList.length; i++) {
        images[i] = new Image();
        images[i].src = imagesList[i];
    }

    // Images ready to be used:
    console.log(`Preloaded images:\n\t${images[0].src}\n\t${images[1].src}\n\t${images[2].src}`);
};    
window.addEventListener("load", preloader);
    




const btns = document.querySelectorAll(".buttons button");
const resources = {
    solarPower: {
        headingContent: "Solar Power",
        bodyTxt: "The solar power is the best!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim doloremque dolores delectus fugiat quae maxime libero repellat similique. Nostrum quia architecto delectus ducimus magni aliquid blanditiis animi ut sed harum totam perferendis quibusdam itaque necessitatibus inventore voluptatum corporis consequuntur, nam pariatur expedita cupiditate qui vero possimus. Excepturi explicabo dolorem alias, recusandae deleniti veritatis, id consequatur ut doloremque maiores! Libero autem architecto, esse pariatur repellendus maxime unde delectus incidunt, laborum animi dolores dicta nam aut id ut aspernatur magni quia. Nulla ipsa, molestiae. Magni, maiores eum tempora eaque, dolorem similique fuga nemo. Possimus eum maiores perspiciatis! Veritatis tempore eligendi repellendus quod.",
        imgUrl: "./img/solar-power.jpg",
        imgAlt: "solar energy panel"  
    },
    windPower: {
        headingContent: "Wind Power",
        bodyTxt: "The wind power is the best!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim doloremque dolores delectus fugiat quae maxime libero repellat similique. Nostrum quia architecto delectus ducimus magni aliquid blanditiis animi ut sed harum totam perferendis quibusdam itaque necessitatibus inventore voluptatum corporis consequuntur, nam pariatur expedita cupiditate qui vero possimus. Excepturi explicabo dolorem alias, recusandae deleniti veritatis, id consequatur ut doloremque maiores! Libero autem architecto, esse pariatur repellendus maxime unde delectus incidunt, laborum animi dolores dicta nam aut id ut aspernatur magni quia. Nulla ipsa, molestiae. Magni, maiores eum tempora eaque, dolorem similique fuga nemo. Possimus eum maiores perspiciatis! Veritatis tempore eligendi repellendus quod.",
        imgUrl: "./img/wind-power.jpg",
        imgAlt: "something" 
    },
    geothermalPower: {
        headingContent: "Geothermal Power",
        bodyTxt: "The geothermal power is the best!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim doloremque dolores delectus fugiat quae maxime libero repellat similique. Nostrum quia architecto delectus ducimus magni aliquid blanditiis animi ut sed harum totam perferendis quibusdam itaque necessitatibus inventore voluptatum corporis consequuntur, nam pariatur expedita cupiditate qui vero possimus. Excepturi explicabo dolorem alias, recusandae deleniti veritatis, id consequatur ut doloremque maiores! Libero autem architecto, esse pariatur repellendus maxime unde delectus incidunt, laborum animi dolores dicta nam aut id ut aspernatur magni quia. Nulla ipsa, molestiae. Magni, maiores eum tempora eaque, dolorem similique fuga nemo. Possimus eum maiores perspiciatis! Veritatis tempore eligendi repellendus quod.",
        imgUrl: "./img/geothermal-power.jpg",
        imgAlt: "something" 
    }
}
    
const contents = document.querySelector(".main-content");

function pageload() {
    contents.innerHTML = `<h2>${resources.solarPower.headingContent}</h2>
                          <div class="row">
                              <div class="col-md-3">
                                  <img src="${resources.solarPower.imgUrl}" alt="${resources.solarPower.imgAlt}">
                              </div>
                              <div class="col-md-9">
                                  <p>${resources.solarPower.bodyTxt}</p>
                              </div>
                          </div>`;
}

function handleSelection (e) {

    let eventTargetObject = e.target;

    eventTargetObject.setAttribute("id", "active-button");

    for (let i = 0; i < btns.length; i++) {
        if (btns[i] !== eventTargetObject) {
            btns[i].removeAttribute("id", "active-button");
        }
    }

    let btnLabel = eventTargetObject.textContent;

    if (btnLabel === "Solar Power") {
        contents.innerHTML = `<h2>${resources.solarPower.headingContent}</h2>
                             <div class="row">
                                  <div class="col-md-3">
                                      <img src="${resources.solarPower.imgUrl}" alt="${resources.solarPower.imgAlt}">
                                  </div>
                                  <div class="col-md-9">
                                      <p>${resources.solarPower.bodyTxt}</p>
                                  </div>
                              </div>`;
    } else if (btnLabel === "Wind Power") {
          contents.innerHTML = `<h2>${resources.windPower.headingContent}</h2>
                             <div class="row">
                                  <div class="col-md-3">
                                      <img src="${resources.windPower.imgUrl}" alt="${resources.windPower.imgAlt}">
                                  </div>
                                  <div class="col-md-9">
                                      <p>${resources.windPower.bodyTxt}</p>
                                  </div>
                              </div>`; 
    } else {
        contents.innerHTML = `<h2>${resources.geothermalPower.headingContent}</h2>
                             <div class="row">
                                  <div class="col-md-3">
                                      <img src="${resources.geothermalPower.imgUrl}" alt="${resources.geothermalPower.imgAlt}">
                                  </div>
                                  <div class="col-md-9">
                                      <p>${resources.geothermalPower.bodyTxt}</p>
                                  </div>
                              </div>`; 
    }
} 
    
for (let btn of btns) {
    btn.addEventListener("click", handleSelection);
}






