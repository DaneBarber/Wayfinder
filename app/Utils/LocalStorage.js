import { ProxyState } from "../AppState.js"
import { Trip } from "../Models/Trip.js"
import { Reservation } from "../Models/Reservation.js"

export function saveState() {
  let data = {
    trips: ProxyState.trips,
    reservations: ProxyState.reservations,
  }
  window.localStorage.setItem('wayfinder', JSON.stringify(data))
}


export function loadState() {
  let data = window.localStorage.getItem('wayfinder')
  if (data) {
    let obj = JSON.parse(data)
    ProxyState.trips = obj.trips.map(t => new Trip(t))
    ProxyState.reservations = obj.reservations.map(r => new Reservation(r))
  }
}