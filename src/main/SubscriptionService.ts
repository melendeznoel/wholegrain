import { LocalEventEmitter } from './LocalEventEmitter'
import { LocalEventTypes } from './types'
import { Logger } from 'winston'

export class SubscriptionService {
  constructor (private logger: Logger,  private localEventEmitter: LocalEventEmitter<LocalEventTypes>) {}

  public startPatientCreatedSubscription (): void {
    this.localEventEmitter.on('NewPatient', (data) => {
      this.logger.info('New Patient Message', { data })
    })
  }
}
