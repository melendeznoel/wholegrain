import { logger } from './logging'

import { Api } from './Api'

const port = 443

logger.info('Starting API')

new Api().instance.listen(port, () => {
  logger.info(`Started API listening on ${port}`)
  return true
})
