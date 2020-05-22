// Third party libraries
import React from 'react'
import ReactDOM from 'react-dom'

// Components
import IndecisionApp from './components/IndecisionApp'

// Style
import './css/styles.scss'
import 'normalize.css'

// Fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faRobot, faTrashAlt, faPlusCircle, faPlusSquare } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faRobot, faTrashAlt, faPlusCircle, faPlusSquare )

// Render to are root div (app-root)
ReactDOM.render(<IndecisionApp />, document.getElementById('app-root'))