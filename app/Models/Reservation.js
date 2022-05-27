import { ProxyState } from "../AppState.js"
import { generateId } from "../Utils/generateId.js"

export class Reservation {
  constructor(ReservationData) {
    this.reservationId = ReservationData.reservationId || generateId()
    this.tripId = ReservationData.tripId
    this.type = ReservationData.type
    this.reservationName = ReservationData.reservationName
    this.confirmationNumber = ReservationData.confirmationNumber
    this.address = ReservationData.address
    this.date = ReservationData.date
    this.cost = ReservationData.cost
  }
  get Reservations() {
    let reservations = ProxyState.reservations.filter(r => r.tripId == this.tripId)
    let template = ''
    reservations.forEach(r => template += r.Template)
    return template
  }
  get Template() {

    return /*html*/`
          <div class="d-flex justify-content-evenly bg-primary rounded shadow my-3 p-2">
            <div class="col-2"> ${this.type}</div>
            <div class="col-2"> ${this.reservationName}</div>
            <div class="col-2"> ${this.confirmationNumber}</div>
            <div class="col-3"> ${this.address}</div>
            <div class="col-2"> ${this.cost}</div>
            <div class="text-dark" onclick="app.reservationsController.removeReservation('${this.reservationId}')"> <i class="">🗑</div>
          </div>
    `

  }


}