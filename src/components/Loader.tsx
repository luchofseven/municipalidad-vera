import { ReactElement } from 'react'

export default function Loader (): ReactElement {
  return (
    <div className='loader'>
      <div className='lds-ring'>
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  )
}
