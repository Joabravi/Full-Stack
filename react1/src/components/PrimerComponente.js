import React from 'react'

export const PrimerComponente = () => {

    let nombre = "Joab"
    let web = "github.com"
  return (
    <div>
        <h1>Mi primer componente.</h1>
        <p>Este es un texto en mi componente.</p>
        <p>Mi nobre es: {nombre}</p>
        <p>Mi sitio web es: {web}</p>
    </div>
    
  )
}
