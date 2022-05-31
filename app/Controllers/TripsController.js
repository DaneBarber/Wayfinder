import { ProxyState } from "../AppState.js"
import { tripsService } from "../Services/TripsService.js"
import { loadState, saveState } from "../Utils/LocalStorage.js"
import { Pop } from "../Utils/Pop.js"
function _drawTrips() {
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
  addTrip() {
    window.event.preventDefault()
    console.log("Trip");
    /** @type {HTMLFormElement} */
    // @ts-ignore
    const form = window.event.target
    console.log("tripName", form.tripName.value)
    // debugger
    const tripData = {
      name: form.tripName.value,
    }
    console.log(tripData)
    tripsService.addTrip(tripData)


  }
  async removeTrip(tripId) {
    if (await Pop.confirm('Do you really want to delete your trip?')) {
      Pop.toast('Deleted', 'success')
      tripsService.removeTrip(tripId)
    }
  }


  updateTrip(id) {
    let textarea = window.event.target
    console.log(textarea.value, id);
    tripsService.updateTrip(textarea.value, id)
    Pop.toast('party updated!')
  }

}