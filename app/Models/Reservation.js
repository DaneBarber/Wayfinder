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
          <li>
            <span><input  type="checkbox" class="p-1"} onChange="app.reservationController.reservationChecked(${this.reservationId})"> ${this.reservationName}</span>
            <span class="mdi mdi-trash-can-outline text-danger" onclick="app.reservationsController.remove('${this.reservationId}')"></span>
          </li>
    `

  }


}