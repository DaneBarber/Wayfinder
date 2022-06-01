import { reservationsService } from "../Services/ReservationsService.js"
import { ProxyState } from "../AppState.js"
import { Pop } from "../Utils/Pop.js"

function _drawReservations() {
  // debugger
  let reservations = ProxyState.reservations.sort((a, b) => a.date - b.date)
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
  addReservation(tripId) {
    // debugger
    window.event.preventDefault()
    console.log("adding reservation")
    /**@type {HTMLFormElement} */
    // @ts-ignore
    let form = window.event.target
    let reservationData = {

      type: form.type.value,
      reservationName: form.reservationName.value,
      confirmationNumber: form.confirmationNumber.value,
      address: form.address.value,
      date: form.date.value,
      cost: form.cost.value,
      tripId: tripId
    }
    reservationsService.addReservation(reservationData)
    console.log(reservationData)
  }

  async removeReservation(reservationId) {
    if (await Pop.confirm()) {
      Pop.toast('Deleted', 'success')
      reservationsService.removeReservation(reservationId)
    }
  }
}


