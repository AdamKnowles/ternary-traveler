let interestContainer = document.querySelector("#container");
interestContainer.innerHTML = createDashboardContainer();
const Form = {
  addInterestForm() {
    return `<fieldset>
    <div id="add-form-component">
    <label for="formManager">Form</label>
    <input id="form-name" type="text" placeholder="Add Interests">
    <input id="form-cost" type="text" placeholder="Add Cost">
    <textarea name="form-description" id="form-description" rows="1" placeholder="Add Description" ></textarea>
    <button id ="interest-btn">Add Interest</button>
    </div></fieldset>

 `;
  }
};

let interestListContainer = document.querySelector("#formContainer");
interestListContainer.innerHTML = Form.addInterestForm();

function addInterests() {
  fetchInterests().then(newData => {
    document.querySelector("#listContainer").innerHTML = "";
    console.log(newData);
    newData.forEach(interest => {
      document.querySelector("#listContainer").innerHTML += interestComponent(
        interest
      );
      console.log("fetch has worked");
    });
  });
}

function postInterests() {
  document.querySelector("#interest-btn").addEventListener("click", () => {
    console.log("clicked");
    let interestName = document.querySelector("#form-name").value;
    let interestCost = document.querySelector("#form-cost").value;
    let interestDescription = document.querySelector("#form-description").value;

    let interestObject = {
      name: interestName,
      cost: interestCost,
      description: interestDescription
    };
    return fetch("http://localhost:8088/interests", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(interestObject)
    }).then(() => addInterests());
  });
}

function fetchInterests() {
  return fetch("http://localhost:8088/interests").then(data => data.json());
}

function interestComponent(interest) {
  return `<fieldset>
    <p>Location: ${interest.name}</p>
    <p>Cost: ${interest.cost}</p>
    <p>Description: ${interest.description}</p>
    <p>Review: ${interest.review}</p>
    </fieldset>`;
}
function createDashboardContainer() {
  return `
    
    <div id="formContainer"></div>
    <div id="listContainer"></div>
    `;
}

function addToDom(container, component) {
  document.querySelector(container).innerHTML = component;
}
addInterests();
postInterests();
