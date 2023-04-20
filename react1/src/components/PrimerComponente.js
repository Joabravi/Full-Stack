import React from 'react'

export const PrimerComponente = () => {

    let nombre = "Joab"
    let web = "github.com"
    let cursos = [
      "Master en JavaScript",
      "Master en PHP",
      "Master en HTML",
      "Master en CSS",
    ];

  return (
    <div>
        <h1>Mi primer componente.</h1>
        <p>Este es un texto en mi componente.</p>
        <p>Mi nobre es: {nombre}</p>
        <p>Mi sitio web es: {web}</p>

        <h2>Cursos</h2>
        <ul>
          {cursos.map(curso => (
            <li key={curso}>{curso}</li>
          ))}
        </ul>


    </div>
    
  )
}
