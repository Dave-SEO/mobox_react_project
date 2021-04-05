import i18n from 'i18next'
import { action, observable } from 'mobx'
interface languageListType {
    name: string;
    code: string;
}
export default class HeaderStore {
   @observable languageList: languageListType[]
   @observable language: string
    constructor(){
        this.language = 'zh'
        this.languageList = [
            {name: '中文', code: 'zh'},
            {name: 'English', code: 'en'}
        ]
    }
    @action
    changelanguage = (language: string) => {
        this.language = language
        i18n.changeLanguage(language)
    }
}