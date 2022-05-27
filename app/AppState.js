import { Reservation } from "./Models/Reservation.js"
import { Trip } from "./Models/Trip.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {


  /** @type {import('./Models/Trip').Trip[]} */
  trips = [
    new Trip({
      tripId: "abc123",
      tripName: "Disney"
    })
  ]

  /** @type {import('./Models/Reservation').Reservation[]} */
  reservations = [
    new Reservation({
      reservationId: "123abc",
      tripId: "abc123",
      type: "flight",
      reservationName: "UA1234",
      confirmationNumber: "8675309",
      address: "3201 W Airport Way, Boise, ID",
      date: "4/22/22",
      cost: 492
    }),
    new Reservation({
      reservationId: "123def",
      tripId: "abc123",
      type: "hotel",
      reservationName: "ht1234",
      confirmationNumber: "8675309-2",
      address: "3201 W Airport Way, Boise, ID",
      date: "4/23/22",
      cost: 2500
    })
  ]
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
