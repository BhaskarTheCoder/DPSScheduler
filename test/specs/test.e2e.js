import { browser, expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()
        await LoginPage.login(
            // 'Hamidan', 
            // 'shamsuddin',
            // '02/28/1957',
            // '1234')

            // 'Humera', 
            // 'jumani',
            // '08/17/1981',
            // '1234')

            // 'Sabir', 
            // 'Jumani',
            // '03/14/1981',
            // '1234')

            // 'Shamsuddin',
            // 'Khowaja',
            // '04/01/1952',
            // '1234')

            'Uday Bhaskar',
            'Valapadasu',
            '08/21/2001',
            '1234')

            // 'Uday B',
            // 'Valapadasu',
            // '08/21/2001',
            // '1234')

            // 'Uday Bhaskar',
            // 'V',
            // '08/21/2001',
            // '1234')

            await browser.pause(300000000000);
    })
})

