import { type LocalEventEmitter } from './LocalEventEmitter'
import { type LocalEventTypes } from './types'
import { type Logger } from 'winston'

export class SubscriptionService {
  constructor (private readonly logger: Logger, private readonly localEventEmitter: LocalEventEmitter<LocalEventTypes>) {}

  public startPatientCreatedSubscription (): void {
    this.localEventEmitter.on('NewPatient', (data) => {
      this.logger.info('New Patient Message', { data })
    })
  }
}
