import React, { FC } from 'react';

type StatusProps = {
  message: string
}

const NotFound: FC<StatusProps> = ({ message }) => {
  return (
    <div>
      <h2>Oop!!!</h2>
      <p>{message}</p>
    </div>
  )
}

export default NotFound;