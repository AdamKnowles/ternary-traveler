console.log(
  "Your Webpack application is set up and ready to go. Please start writing code."
);
// const Form = {
//   addInterestForm() {
//     return `
//     <div id="add-form-component">
//     <label for="formManager">Form</label>
//     <input id="form-name" type="text" placeholder="Add Interests">
//     <input id="add-cost" type="text">
//     <textarea name="interest-description" id="interest-description" rows="4" columns="40"></textarea>
//     <button id ="interest-btn">Add Interest</button>
//     </div>
//  `;
//   }
// };

let interestContainer = document.querySelector("#container");
// interestContainer.innerHTML = Form.addInterestForm()

function addInterests() {
  fetch("http://localhost:8088/interests")
    .then(data => data.json())
    .then(newData => {
      document.querySelector("#container").innerHTML = "";

      console.log(newData);
      newData.forEach(interest => {
        let interestComponent = `
           <fieldset><p>Location: ${interest.name}</p>
           <p>Cost: ${interest.cost}</p>
           <p>Description: ${interest.description}</p>
           <p>Review: ${interest.review}</p></fieldset>`;
        document.querySelector("#container").innerHTML += interestComponent;

        console.log("post and fetch has worked");
      });
    });
}
addInterests();
