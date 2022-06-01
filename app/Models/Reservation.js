import { generateId } from "../Utils/generateId.js"

export class Reservation {
  constructor(data) {
    this.reservationId = data.reservationId || generateId()
    this.type = data.type
    this.reservationName = data.reservationName
    this.confirmationNumber = data.confirmationNumber
    this.address = data.address
    this.date = new Date(data.date)
    this.cost = data.cost
    this.tripId = data.tripId
  }
  get Template() {
    return /*html*/ `
        <div class= "row d-flex flex-row">
            <div id="type" class="col-1">${this.type}</div>
            <div id="name" class="col-2">${this.reservationName}</div>
            <div id="confirm" class="col-2">${this.confirmationNumber}</div>
            <div id="address" class="col-3">${this.address}</div>
            <div id="date" class="col-2">${this.date.toDateString()}</div>
            <div id="cost" class="col-1">${this.cost}</div>
            <div class="text-dark col-1" onclick="app.reservationsController.removeReservation('${this.reservationId}')">🗑</div>
        </div>
        `
  }
}