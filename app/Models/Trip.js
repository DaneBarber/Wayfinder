import { ProxyState } from "../AppState.js"
import { generateId } from "../Utils/generateId.js"

export class Trip {
  constructor(tripData) {
    this.tripName = tripData.tripName
    this.tripId = tripData.tripId || generateId()
    this.tripNotes = tripData.tripNotes || ""
  }

  // create style for trips, background
  get tripTemplate() {
    return /* html */`
    <div class="bg-light text-dark col text-center">
      <h2>${this.tripName}</h2>
      <div class=" row" >
        <h4 class="col-1">Type</h4>
        <h4 class="col-2">Name</h4>
        <h4 class="col-2">Confirmation Number</h4>
        <h4 class="col-3">Address</h4>
        <h4 class="col-2">Date</h4>
        <h4 class="col-1">Cost</h4>
        <h4 class="col-1" onclick="app.tripsController.removeTrip('${this.tripId}')"><i class="mdi mdi-delete"></h4>
      </div>
      <div class="reservation m-3 text-dark" id="reservation">
        ${this.Reservations}
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
              <label class="visually-hidden" for="reservationName">Name</label>
              <input type="text" class="form-control" id="reservationName" placeholder="Name">
            </div>
            <div class="col-sm-3">
              <label class="visually-hidden" for="confirmationNumber">Confirmation Number</label>
              <input type="text" class="form-control" id="confirmationNumber" placeholder="Confirmation Number">
            </div>
            <div class="col-sm-3">
              <label class="visually-hidden" for="address">Address</label>
              <input type="text" class="form-control" id="address" placeholder="Address">
            </div>
            <div class="col-sm-1">
              <label class="visually-hidden" for="Date">Date</label>
              <input type="date" class="form-control" id="date">
            </div>
            <div class="col-sm-1">
              <label class="visually-hidden" for="cost">Cost</label>
              <input type="number" class="form-control" id="cost" placeholder="Cost">
               <input type="hidden" id="tripId" name="tripId" value="${this.tripId}">
            </div>
          </div>
          <div class="col-12 d-flex ">
            <button class="btn btn-primary ms-auto m-1" type="submit">Add</button>
          </div>
        </form>
      </div>
      <div class="mb-3 col-md-5">
        <label for="" class="form-label">Trip Notes</label>
        <textarea onblur="app.tripsController.updateTrip('${this.tripId}')" name="tripNotes" id="tripNotes" class="form-control" aria-describedby="helpId" value="${this.tripNotes}"
          placeholder=""></textarea>

      </div>
      <div class="mb-3 col-md-5 align-self-end"><span>"$${this.Total}"</span>
      </div>
    </div>
    `
  }

  get Reservations() {
    let reservations = ProxyState.reservations.filter(r => r.tripId == this.tripId)
    let template = ''
    reservations.forEach(r => template += r.Template)
    return template
  }

  get Total() {
    let reservations = ProxyState.reservations.filter(r => r.tripId == this.tripId)
    let subTotal = 0
    // NOTE parseInt turns it from a string number (thanks forms) into an integer we can add
    reservations.forEach(r => subTotal += parseInt(r.cost))
    return subTotal
  }
}