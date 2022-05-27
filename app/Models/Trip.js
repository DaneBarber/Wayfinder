import { ProxyState } from "../AppState.js";
import { generateId } from "../Utils/generateId.js"

export class Trip {
  constructor(data) {
    this.tripId = data.tripId || generateId()
    this.tripName = data.tripName
    // this.tripColor = data.tripColor

    // if (!this.tripName || !this.tripColor)
    //   throw new Error("Each trip needs a name and a color before it can be created");
  }

  get Reservations() {
    let reservations = ProxyState.reservations.filter(r => r.tripId == this.tripId)
    let template = ''
    reservations.forEach(r => template += r.Template)
    return template
  }

  get Template() {

    // let chosenColor = 'bg-'
    // switch (this.tripColor.toLowerCase()) {
    //   case 'red':
    //     chosenColor += 'danger'
    //     break
    //   case 'grey':
    //     chosenColor += 'secondary'
    //     break
    //   case 'yellow':
    //     chosenColor += 'warning'
    //     break
    //   case 'pink':
    //     chosenColor += 'info'
    //     break
    //   case 'green':
    //     chosenColor += 'success'
    //     break
    // }


    return /*html*/`
                <div class="col-12 p-0" id="${this.tripId}">
                  <div class="">
                    <div><span class="mdi mdi-close d-flex justify-content-end p-2" onclick="app.tripsController.remove('${this.tripId}')"></span></div>
                    <div>
                      <h3 class="card-title text-center m-0 p-0">${this.tripName}</h3>
                    </div>
                  </div>
                  <div class="">
                    <div class="container bg-white">
                      <div id="reservations-trip p-3">
                        <ul class="no-bullets">
                          ${this.Reservations}
                        </ul>
                      </div>
                      <div class="addings align-items-end">
                        <form class="d-flex align-items-center" onsubmit="app.reservationsController.add('${this.tripId}')">
                          <input class="form-control bg-light p-0" type="text" placeholder="reservation name..." id="reservationName" minlength="3" maxlength="50" required>
                          <button  type="submit" name=""  class="text-end p-0" >Add</button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
    `
  }

}

