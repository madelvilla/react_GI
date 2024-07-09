import React from 'react'

export default function BasicInfo(props) {
    console.log(props)
    return (
    <div>
        Hello, my name is {props.person.name}. My phone number is {props.person.number}. I was born {props.person.dateOfBirth}.
    </div>
  )
}
