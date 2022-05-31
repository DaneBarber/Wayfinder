import { ProxyState } from "../AppState.js";
import { Reservation } from "../Models/Reservation.js";

class ReservationsService {
  addReservation(reservationData) {
    console.log("reservationService AddRes", reservationData)
    const reservation = new Reservation(reservationData)
    ProxyState.reservations = [...ProxyState.reservations, reservation]
  }
  removeReservation(reservationId) {
    const reservations = ProxyState.reservations.filter(r => r.reservationId !== reservationId)
    ProxyState.reservations = reservations
  }
}

export const reservationsService = new ReservationsService();