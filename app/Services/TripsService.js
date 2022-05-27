import { ProxyState } from "../AppState.js";
import { Trip } from "../Models/Trip.js";

class TripsService {
  addTrip(tripData) {
    const trip = new Trip(tripData.tripName)
    ProxyState.trips = [...ProxyState.trips, trip]
  }
  removeTrip(tripId) {
    const trips = ProxyState.trips.filter(t => t.tripId !== tripId)
    ProxyState.trips = trips
  }
}

export const tripsService = new TripsService();