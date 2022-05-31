import { ProxyState } from "../AppState.js"
import { tripsService } from "../Services/TripsService.js"
import { loadState, saveState } from "../Utils/LocalStorage.js"
import { Pop } from "../Utils/Pop.js"
function _drawTrips(trip) {
  // debugger
  let trips = ProxyState.trips
  let tripsTemplate = ''
  trips.forEach(trip => tripsTemplate += trip.tripTemplate)
  document.getElementById("trips").innerHTML = `<div>
  ${tripsTemplate}
  </div>`
}

export class TripsController {

  constructor() {
    ProxyState.on("trips", _drawTrips);
    ProxyState.on("reservations", _drawTrips)
    ProxyState.on("trips", saveState)
    ProxyState.on("reservations", saveState)

    loadState()
    _drawTrips()
  }
  createTrip() {
    window.event.preventDefault()
    console.log("Trip");
    /** @type {HTMLFormElement} */
    // @ts-ignore
    const form = window.event.target
    console.log("tripName")
    debugger
    const tripData = {
      name: form.tripName.value,
    }

    tripsService.addTrip(tripData)

  }
  removeTrip(tripId) {
    if (Pop.confirm()) {
      Pop.toast('Deleted', 'success')
    }
  }

}