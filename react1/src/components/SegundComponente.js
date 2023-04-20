import React from 'react'
import { PrimerComponente } from './PrimerComponente'

export const SegundoComponente = () => {
  return (
    <div>
        <h2>Segundo componente.</h2>
        <ul>
            <li>Dato1</li>
            <li>Dato2</li>
            <li>Dato3</li>
        </ul>
        <PrimerComponente />
    </div>
  )
}
