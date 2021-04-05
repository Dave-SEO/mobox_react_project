import { action, observable } from 'mobx'
export default class Product {
    @observable productData: any[]
    @observable name: number
    constructor(){
        this.productData = []
        this.name = 1
    }
    @action setProductData = async () => {
        await fetch('http://123.56.149.216:8080/api/productCollections', {
            headers: {
                'x-icode': 'qKhDxI15yz'
            }
        }).then(res => res.json()).then(data => {
            console.log(data)
            this.productData = data
        })
    }
}