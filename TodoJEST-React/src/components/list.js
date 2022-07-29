import React from 'react'

export const List = ({title, list}) => {
  return (
    <section>
        <h1>{title}</h1>
        {
            list.map(item => (
                <ul key={item.id}>
                    <li>{item.name}</li>
                </ul>
            ))
        }
    </section>
  )
}
