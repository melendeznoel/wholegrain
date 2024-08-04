import {VisionService} from '../../src/grain'
import test, {beforeEach, describe} from 'node:test'
import {strictEqual} from 'node:assert'
import {logger} from '../../src/logging'

describe('run function', () => {
    let visionService: VisionService

    beforeEach(() => {
        visionService = new VisionService(logger, {})
    })

    test('returns true when the user is logged in', () => {
        const result = visionService.run()
        strictEqual(result, true, 'returns true when the user is logged in')
    })
})
