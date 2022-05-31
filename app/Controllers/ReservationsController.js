import { reservationsService } from "../Services/ReservationsService.js"
import { ProxyState } from "../AppState.js"
import { Pop } from "../Utils/Pop.js"

function _drawReservations() {
  // debugger
  let reservations = ProxyState.reservations
  let reservationsTemplate = ''
  reservations.forEach(r => reservationsTemplate += r.Template)
  document.getElementById("reservation").innerHTML = `<div>
  ${reservationsTemplate}
  </div>`
}

export class ReservationsController {

  constructor() {
    ProxyState.on("reservations", _drawReservations);
    _drawReservations()
  }
  // Adds a new reservation, but does not change the data, logs the new data
  addReservation(tripID) {
    // debugger
    window.event.preventDefault()

    /**@type {HTMLFormElement} */
    //ts-ignore
    const form = window.event.target
    const reservationData = {

      type: form.type.value,
      name: form.name,
      confirm: form.confirm.value,
      address: form.address.value,
      date: form.date.value,
      cost: form.cost.value,
      tripId: form.tripID.value
    }
    reservationsService.addReservation(reservationData)
    console.log(reservationData)
  }
}

function removeReservation(id) {
  Pop.toast('Deleted', "success")
}
