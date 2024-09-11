import Button from './Button';
import Header from './Header';

import {useTheme} from '../context/ThemeContext';
import User from './User';

function Container() {
 
const {theme} = useTheme()

  return (
    <div className={`app ${theme}`}>
      <Button />
      <hr />
      <Header />
      <br />
      <User />
    </div>
  )
}

export default Container