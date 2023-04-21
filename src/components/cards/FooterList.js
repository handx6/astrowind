import React from 'react'

export default function FooterList({ title, list }) {
    const listItems = list.map((item ) =>
            <li key={item}className='font-light text-xs pb-1'>{ item }</li>
        )
    return (
    <div className='text-gray-500'>
        <h5 className='font-semibold text-sm pb-2'>{ title }</h5>
        <ul>
            {listItems}
        </ul>
    </div>
  )
}
