import React from 'react';
import {render,screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import emojiList from '../emojiList.json'
import App from '../App'

describe('Emoji listesini render testi.',()=>{
    let emojiList;
    beforeEach(() => {
        render(<App/>);
        // json içerisinden ilk 10 item kopyalanır.
        emojiList = [...document.querySelectorAll('.emoji-item')].slice(0, 10);
    })

    test('Başarılı şekilde render edildiği test edilir.',()=> {
        // list içerisinde her item kontol edilir.
        emojiList.map((item)=>{
            expect(screen.getByText(item.title)).toBeInTheDocument();
        })
    })
})