import React from 'react'

export default function BasicInfo(props) {
    console.log(props.contacts)
    return (
    <div>
        {props.contacts.map((contact) => (
        <p>Hello, my name is {contact.name}. My phone number is {contact.number}. I was born {contact.dateOfBirth}. </p>
        ))}
    </div>
  )
}
