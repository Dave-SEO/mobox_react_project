import React, { FC } from 'react'
import { useAlert } from './withAlert'

export const HookHeader:FC = () => {
    const addAlert = useAlert()
    return (
        <button onClick={ () => addAlert('zidingyi') }>点我</button>
    )
}