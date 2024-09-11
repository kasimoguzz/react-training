
import React from 'react';
import {render,screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import App from '../App'

describe('Başlık/Header Testi',()=>{
    let emojiSearch;
    beforeEach(() =>{
        //App componenti render edilir
        render(<App/>)
        // Sayfa içerisinde Emoji Search yazısı bulunur
        emojiSearch = screen.getByText('Emoji Search');
    })

    test('Başlık render edilmeli',()=>{
        // yazı var mı diye kontrol edilir.
        expect(emojiSearch).toBeInTheDocument();
    })
})