import React from 'react'
import { Props } from './Header'
const withAlert = (ChildComponent: React.ComponentType<Props>) => {
    return (props:any) => {
        const comAlert = (a:any) => {
            alert(a)
            alert('高阶组件')
        }
        return <ChildComponent {...props} comAlert={comAlert}/>
    }
}
export default withAlert

// 自定义hooks 实现弹窗

export const useAlert = () => {
    const comAlert = (a:any) => {
        alert(a)
        alert('自定义hooks')
    }
    return comAlert
}