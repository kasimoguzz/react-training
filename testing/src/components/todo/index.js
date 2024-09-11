import {useState} from 'react'

const defaultItems = [
    {
        name: "items A"
    },
    {
        name: "items B"
    },
    {
        name: "items C"
    }
]

function Todo() {
    const [text,setText] = useState("")
    const [items, setItems] = useState(defaultItems)
    const addItem = () => {
        setItems((prev)=> [...prev, { name: text }])
        setText("")
    }
  return (
    <div>
        <label>
        Text
        <input value={text} onChange={(e) => setText(e.target.value)} />
        </label>
        <button onClick={addItem}>add</button>
        <div>
        {
            items.map((item , key)=> (<div key={key}>{item.name}</div>
            ))
        }
        </div>
    </div>
  )
}

export default Todo