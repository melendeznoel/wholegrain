import { logger } from './logging'

import { Api } from './Api'

logger.info('Starting API')

new Api().instance.listen(3001, () => {
  logger.info('Started API')
  return true
})
