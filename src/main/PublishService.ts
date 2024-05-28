import { LocalEventEmitter } from './LocalEventEmitter'
import { LocalEventTypes } from './types'

export class PublishService {
  constructor (private localEventEmitter: LocalEventEmitter<LocalEventTypes>) {}

 public newPatient(patient: any): void {
    this.localEventEmitter.emit('NewPatient', patient)
 }
}
