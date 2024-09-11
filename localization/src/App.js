import {IntlProvider, FormattedMessage} from 'react-intl'
import {useState ,useEffect} from 'react'
import  './App.css'

const messages = {
  "tr-TR": {
    title:"merhaba dünya",
    description: "{count} yeni mesajınız var"
  },
  "en-US":{
    title:"hello world",
    description: "you have {count} new messages"
  }
}

function App() {
  const isLocal = localStorage.getItem("local")
  const defaultLocal = isLocal ? isLocal : navigator.language
  const [local, setLocal] = useState(defaultLocal)

  useEffect(()=>{
    localStorage.setItem("local", local)
  },[local])
  return (
    <div className="App">
     <IntlProvider locale={local} messages={messages[local]}>
        <FormattedMessage id='title' />
        <p>
        <FormattedMessage id='description'  values={{ count : 31}} />
        </p>
        <br /><br />
        <button onClick={() => setLocal("tr-TR")}>TR</button>
        <button onClick={() => setLocal("en-US")}>EN</button>
     </IntlProvider>
    </div>
  );
}

export default App;
