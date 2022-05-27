import { ProxyState } from "../AppState.js";
import { tripsService } from "../Services/TripsService.js";
import { Pop } from "../Utils/Pop.js";

//private
function _draw() {
  let trips = ProxyState.trips;
  let template = ''
  trips.forEach(t => template += t.Template)
  document.getElementById("app").innerHTML = /*html*/`
  <div class="my-3">
    <button class="btn btn-secondary text-white elevation-2" onclick="app.reservationsController.addReservation()">Add Reservation</button>  
    <div class="trips d-flex flex-wrap my-3">
      ${template}
    </div>
  </div>
  `
}

// public
export class TripsController {
  constructor() {
    ProxyState.on("trips", _draw);
    _draw()
  }

  addTrip() {
    tripsService.addTrip()
  }

  async removeTrip(tripId) {
    const yes = await Pop.confirm('Remove Trip')
    if (yes) {
      tripsService.removeTrip(tripId)
    }
  }

}