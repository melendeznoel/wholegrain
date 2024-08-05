import { VisionService } from '../../src/grain'
import test, { beforeEach, describe } from 'node:test'
import { strictEqual, ok } from 'node:assert'
import { logger } from '../../src/logging'
import { spy } from 'sinon'

describe('VisionService', () => {
  let visionService: VisionService
  let logInfoSpy: any

  beforeEach(() => {
    visionService = new VisionService(logger, {})

    logInfoSpy = spy(logger, 'info')
  })

  describe('run function', () => {
    test('should return true when the user is logged in', () => {
      const result = visionService.run()

      ok(logInfoSpy.calledOnceWith('Running Vision Service'))

      strictEqual(result, true, 'returns true when the user is logged in')
    })
  })
})
