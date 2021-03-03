import React from 'react'

export default function Types({types}) {
    return (
        <div>
            {types.map(p =>(
                <div key={p.name}>
                    {p}
                </div>
            ))}
        </div>
    )
}
