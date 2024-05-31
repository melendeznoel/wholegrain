import { type Logger } from 'winston'

export class VisionService {
  constructor (private readonly logger: Logger, config: any) {
  }

  public run (): boolean {
    this.logger.info('Running Vision Service')
    return true
  }
}
