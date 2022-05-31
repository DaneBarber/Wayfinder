import { Reservation } from "./Models/Reservation.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { Trip } from "./Models/Trip.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Trip').Trip[]} */
  trips = [
    new Trip({ name: 'Disneyland', id: '62957cc4fe8598247ac57726' }),
    new Trip({ name: 'Yum', id: '62957cc42d73efcb3c1f5ac6' }),
  ]
  /** @type {import('./Models/Reservation').Reservation[]} */
  reservations = [
    new Reservation({
      type: '✈️',
      name: 'UA 1234',
      confirm: 'JKEVDA',
      address: '3201 W Airport Way, Boise, ID',
      date: '5/22/22',
      cost: '587',
      tripId: "62957cc4fe8598247ac57726"
    }),
    new Reservation({
      type: '✈️',
      name: 'UA 1234',
      confirm: 'JKEVDA',
      address: '3201 W Airport Way, Boise, ID',
      date: '5/23/22',
      cost: '587',
      tripId: "62957cc4fe8598247ac57726"
    }),
    new Reservation({
      type: '✈️',
      name: 'UA 1238',
      confirm: 'JKE123VDA',
      address: '3201 W Airport Way, Boise, ID',
      date: '5/24/22',
      cost: '587',
      tripId: "62957cc42d73efcb3c1f5ac6"
    }),
    new Reservation({
      type: '✈️',
      name: 'UA 1238',
      confirm: 'JKE123VDA',
      address: '3201 W Airport Way, Boise, ID',
      date: '5/25/22',
      cost: '587',
      tripId: "62957cc42d73efcb3c1f5ac6"
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