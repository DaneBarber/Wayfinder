import { ProxyState } from "../AppState.js";
import { reservationsService } from "../Services/ReservationsService.js";
import { Pop } from "../Utils/Pop.js";

//private
// function _draw() {
//   let reservations = ProxyState.reservations;
//   let template = ''
//   reservations.forEach(t => template += t.Template)
//   document.getElementById("app").innerHTML = /*html*/`
//   <div class="my-3">
//     <button class="btn btn-secondary text-white elevation-2" onclick="app.reservationsController.addReservation()">Add Reservation</button>  
//     <div class="reservations d-flex flex-wrap my-3">
//       ${template}
//     </div>
//   </div>
//   `
// }

// public
export class ReservationsController {

  addReservation(tripId) {
    reservationsService.addReservation(tripId)
  }

  async removeReservation(reservationId) {
    const yes = await Pop.confirm('Remove Reservation?')
    if (yes) {
      reservationsService.removeReservation(reservationId)
    }
  }

}