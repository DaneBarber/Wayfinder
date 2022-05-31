import { generateId } from "../Utils/generateId.js"

export class Trip {
  constructor(data) {
    this.name = data.name
    this.tripId = data.tripId || generateId()
  }

  // create style for trips, background
  get tripTemplate() {
    return /* html */`
    <div class="bg-light text-dark col text-center">
      <div class=" row" >
        <h4 class="col-1">Type</h4>
        <h4 class="col-2">Name</h4>
        <h4 class="col-3">Confirmation Number</h4>
        <h4 class="col-3">Address</h4>
        <h4 class="col-1">Date</h4>
        <h4 class="col-1">Cost</h4>
      </div>

      <div class="reservation m-3" id="reservation">
      </div>
    <div>
      <form onsubmit="app.reservationsController.addReservation()" id="new-reservation">
        <div class="form m-3 row">
            <div class="col-sm-1">
              <label class=" visually-hidden" for="inlineFormCustomSelect">Type</label>
              <select class="custom-select " id="type">
                <option selected>Type</option>
                <option value="1">✈️</option>
                <option value="2">🏨</option>
                <option value="3">🎡</option>
                <option value="4">🚗</option>
              </select>
            </div>
            <div class="col-sm-2">
              <label class="visually-hidden" for="inlineFormInputName">Name</label>
              <input type="text" class="form-control" id="name" placeholder="Name">
            </div>
            <div class="col-sm-3">
              <label class="visually-hidden" for="inlineFormInputConfirmationNumber">Confirmation Number</label>
              <input type="text" class="form-control" id="confirm" placeholder="Confirmation Number">
            </div>
            <div class="col-sm-3">
              <label class="visually-hidden" for="inlineFormInputAddress">Address</label>
              <input type="text" class="form-control" id="address" placeholder="Address">
            </div>
            <div class="col-sm-1">
              <label class="visually-hidden" for="inlineFormInputDate">Date</label>
              <input type="date" class="form-control" id="date">
            </div>
            <div class="col-sm-1">
              <label class="visually-hidden" for="inlineFormInputCost">Cost</label>
              <input type="number" class="form-control" id="cost" placeholder="Cost">
            </div>

          </div>
          <div class="col-12 d-flex ">
            <button class="btn btn-primary ms-auto m-1" type="submit">Add</button>
          </div>
      </form>
  </div>
    `
  }
}