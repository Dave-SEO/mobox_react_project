import { GlobalOutlined } from '@ant-design/icons';
import { Button as Btn, Dropdown, Image, Input, Layout, Menu, Typography } from 'antd';
import { toJS } from 'mobx';
import { inject, observer } from 'mobx-react';
import { Component } from 'react';
import { withTranslation, WithTranslation } from 'react-i18next';
import logo from "../../assets/logo.svg";
import headerStore from '../../store/header';
import Product from '../../store/product';
import styles from './Header.module.css';
import { HookHeader } from './hooksCom';
import withAlert from './withAlert';
const {Header} = Layout;
const {Text, Title} = Typography;
const {Button} = Dropdown;
const { Search } = Input;
interface fnAlert {
    comAlert: (a: any) => any
}
export type Props = {
    headerStore?: headerStore,
    product?: Product
} & WithTranslation & fnAlert
interface State {

}
@inject('headerStore', 'product')
@observer
class HeaderClass extends Component<Props, State>{
    constructor(props:Props){
        super(props)
        this.state = {}
    }
    handleButtonClick = (a:any) => {
        this.props.comAlert('san')
    }
    handleMenuClick = (e:any) => {
        this.props.headerStore?.changelanguage(e.key)
    }
    onSearch = (e:any) => {
       
    }
    componentDidMount(){
        this.props.product?.setProductData().then(res => {
            console.log('ressss', res, toJS(this.props.product?.productData))
            console.log(toJS(this.props.product?.name))
            
        })
    }
    render () {
        const {t}  = this.props
        const menu = (
            <Menu onClick={this.handleMenuClick}>
              {
                  this.props.headerStore?.languageList.map(language => (
                    <Menu.Item key={language.code} >
                         {language.name}
                    </Menu.Item>
                  ))
              }
            </Menu>
          );
        return (
            <>
                <HookHeader />
                <Header className={styles['App-header']}>
                    <div>
                        <Text className={styles.title}>{t('header.slogan')}</Text>
                        <Button onClick={() => this.handleButtonClick(1)} 
                            style={{ marginLeft: 15 }}
                            icon={<GlobalOutlined />}
                            overlay={menu}>
                            {this.props.headerStore?.language === 'en' ? 'English' : '中文'}
                        </Button>
                    </div>
                    <div>
                        <Btn>{t('header.register')}</Btn>
                        <Btn>{t('header.signin')}</Btn>
                    </div>
                </Header>
                <Header className={styles['main-header']}>
                   <Image preview={false} width={60} src={logo}/>
                   <Title level={4} className={styles.mantitle}> React 旅游网 </Title>
                   <Search placeholder="请输入旅游目的地、主题、或关键字" 
                        onSearch={this.onSearch} 
                        style={{ width: 400, marginLeft: 20 }} />
                </Header>
            </>
        )
    }
}
export const  MyHeader = withTranslation()(withAlert(HeaderClass))
  