import { Menu } from 'antd'
import React, { Component } from 'react'
import { sideMenuList } from './mockup'
import styles from './SideMenu.module.css'
interface Props {

}

interface State {
}
class SideMenuClass extends Component<Props, State>{
    constructor(props: Props){
        super(props)
        this.state = {
        }
    }
    render() {
        return (
            <Menu mode='vertical' className={styles.menu}>
                {
                    sideMenuList.map((menu, index) => (
                        <Menu.SubMenu key={'sideMenu' + index} title={menu.title}>
                            {
                                menu.subMenu.map((sub, index) => (
                                    <Menu.SubMenu key={'sub' + index} title={sub.title}>
                                        {
                                            sub.subMenu.map((item, index) => (
                                                <Menu.Item key={`item-${index}`} >{item}</Menu.Item>
                                            ))
                                        }
                                    </Menu.SubMenu>
                                ))
                            }
                        </Menu.SubMenu>
                    ))
                }
                
            </Menu>
        )
    }
}
export const SideMenu = SideMenuClass