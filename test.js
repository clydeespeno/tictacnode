import chai, {expect} from 'chai'
import sinon, {spy, mock} from 'sinon'
import sinonChai from 'sinon-chai'
import dirtyChai from 'dirty-chai'
import {before, afterEach, after, done} from 'mocha'

chai.use(dirtyChai)
chai.use(sinonChai)

global.expect = expect
global.sinon = sinon
global.spy = spy
global.mock = mock
global.done = done
global.stub = sinon.stub

global.before = before
global.afterEach = afterEach
global.after = after
