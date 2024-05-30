import { logger } from './logging'

import { Api } from './Api'

const port = process.env.PORT || '3001'

logger.info('Starting API')

new Api().instance.listen(port, () => {
    logger.info(`API listening on ${ port }`)
    return true
})
