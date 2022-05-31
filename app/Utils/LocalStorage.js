import { ProxyState } from "../AppState.js"
import { Trip } from "../Models/Trip.js"
import { Reservation } from "../Models/Reservation.js"

export function saveState() {
  let data = {
    trips: ProxyState.trips,
    reservations: ProxyState.reservations,
  }
  window.localStorage.setItem('wayFinderTrips', JSON.stringify(data))
}


export function loadState() {
  let data = window.localStorage.getItem('wayFinderTrips')
  if (data) {
    let obj = JSON.parse(data)
    ProxyState.trips = obj.trips.map(t => new Trip(t))
    ProxyState.reservations = obj.reservations.map(r => new Reservation(r))
  }
}