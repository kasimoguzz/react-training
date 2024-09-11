import React from 'react';
import {fireEvent, render,screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import App from '../App'

describe('Copy emoji test',()=>{
    let copyEmoji;

    beforeEach(()=>{
        render(<App/>)
        copyEmoji = screen.getByText('Grinning');
    })

    test('Emoji kopyalanabiliyor mu',()=>{
        // Emojiye tıklandı
        fireEvent.click(copyEmoji);
        // data-clipboard-text 😀 bu değere sahip myi diye kontrol eder
        expect(copyEmoji.parentElement.getAttribute('data-clipboard-text')).toMatch('😀')
    })
})