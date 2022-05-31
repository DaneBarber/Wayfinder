import { ProxyState } from "../AppState.js";
import { Trip } from "../Models/Trip.js";

class TripsService {
  addTrip(tripData) {
    const trip = new Trip(tripData)
    console.log(trip, "tripsService")
    console.log(tripData, "tripsService")
    ProxyState.trips = [...ProxyState.trips, trip]
  }
  removeTrip(tripId) {
    const trips = ProxyState.trips.filter(t => t.tripId !== tripId)
    ProxyState.trips = trips
  }

  updateTrip(newText, id) {
    let trip = ProxyState.trips.find(p => p.tripId == id)
    console.log('updating trip service', newText, trip);
    trip.tripNotes = newText
    debugger
    ProxyState.trips = ProxyState.trips
  }
}

export const tripsService = new TripsService();