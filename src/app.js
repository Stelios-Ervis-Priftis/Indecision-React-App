import { log, doc } from './helper'

import React from 'react'
import ReactDOM from 'react-dom'

const template = (
    <div><h1>Hello React</h1></div>
)

ReactDOM.render(template, doc.getElementById('app-root'))