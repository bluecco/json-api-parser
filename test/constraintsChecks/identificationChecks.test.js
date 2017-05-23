/* eslint-env mocha */
import { expect } from 'chai'
import { checkIdAndType } from '../../src/constraintsChecks'
import testData from '../test-data.json'

describe('Identification:', () => {
  it('A resource object MUST contain at least the following top-level members: id and type', () => {
    // Setup
    const document = {
      'data': testData.invalidResourceObject
    }
    // Expectations
    expect(() => { checkIdAndType(document.data) }).to.throw(Error)
  })

  describe('The values of the id and type members MUST be strings.', () => {
    it('should raise error when both "id" and "type" are NOT string', () => {
      // Setup
      const document = {
        'data': testData.invalidIdTypeResourceObject
      }
      // Expectations
      expect(() => { checkIdAndType(document.data) }).to.throw(/The values of the id and type members MUST be strings./)
    })

    it('should raise error when "id" is NOT string', () => {
      // Setup
      const document = {
        'data': testData.invalidIdResourceObject
      }
      // Expectations
      expect(() => { checkIdAndType(document.data) }).to.throw(/The values of the id and type members MUST be strings./)
    })

    it('should raise error when "type" member is NOT string', () => {
      // Setup
      const document = {
        'data': testData.invalidTypeResourceObject
      }
      // Expectations
      expect(() => { checkIdAndType(document.data) }).to.throw(/The values of the id and type members MUST be strings./)
    })
  })
})