import { type LocalEventEmitter } from './LocalEventEmitter'
import { type LocalEventTypes } from './types'

export class PublishService {
  constructor (private readonly localEventEmitter: LocalEventEmitter<LocalEventTypes>) {
  }

  public newPatient (patient: any): void {
    this.localEventEmitter.emit('NewPatient', patient)
  }
}
