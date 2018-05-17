import { createStore } from 'redux'
import modules from './modules'

const configure = () => (createStore(modules))

export default configure
