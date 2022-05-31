import { Reservation } from "./Models/Reservation.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { Trip } from "./Models/Trip.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Trip').Trip[]} */
  trips = [
    new Trip({ tripName: 'Disneyland', tripId: '62960d4a00adcbe0a50286b7', tripNotes: "Hi" }),
    // new Trip({ tripName: 'Yum', id: '62957cc42d73efcb3c1f5ac6', tripNotes: "Greetings" }),
  ]
  /** @type {import('./Models/Reservation').Reservation[]} */
  reservations = [
    new Reservation({
      type: '✈️',
      reservationName: 'UA 1234',
      reservationId: "abc123",
      confirmationNumber: 'JKEVDA',
      address: '3201 W Airport Way, Boise, ID',
      date: '2022-05-22',
      cost: '587',
      tripId: "62960d4a00adcbe0a50286b7"
    }),
    new Reservation({
      type: '✈️',
      reservationName: 'UA 1234',
      reservationId: "abc1234",
      confirmationNumber: 'JKEVDA',
      address: '3201 W Airport Way, Boise, ID',
      date: '2022-05-23',
      cost: '587',
      tripId: "62960d4a00adcbe0a50286b7"
    }),
    new Reservation({
      type: '✈️',
      reservationName: 'UA 1238',
      reservationId: "abc12345",
      confirmationNumber: 'JKE123VDA',
      address: '3201 W Airport Way, Boise, ID',
      date: '2022-05-24',
      cost: '588',
      tripId: "62960d4a00adcbe0a50286b7"
    }),
    new Reservation({
      type: '✈️',
      reservationName: 'UA 1238',
      reservationId: "abc123456",
      confirmationNumber: 'JKE123VDA',
      address: '3201 W Airport Way, Boise, ID',
      date: '2022-05-25',
      cost: '588',
      tripId: "62960d4a00adcbe0a50286b7"
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