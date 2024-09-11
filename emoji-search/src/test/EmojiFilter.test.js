import React from 'react';
import {fireEvent, render,screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import App from '../App'

describe('Emoji Filter',()=>{
    let emojiFilter;
    beforeEach(() => {
        render(<App/>);
        // ekranda input'umuzu buluyoruz.
        emojiFilter = screen.getByLabelText('emojiInput');
    })

    test('emoji filter işlemi test ediliyor',()=>{
        //Test için filtrelenecek emoji belirliyoruz.
        const emoji = 'Smiley';
        // fireEvent ile inputa text'i yazdırıyoruz.
        fireEvent.click(emojiFilter,emoji);
        expect(screen.getByText(emoji)).toBeInTheDocument();
    })
})