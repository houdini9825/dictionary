import styles from './Modal.module.scss'
import classname from 'classname'
import { useContext } from 'react'
import ThemeContext from '../../../contexts/theme-context'


function Modal({className, onClick, data}) {
  const {activeTheme} = useContext(ThemeContext)

  const containerClasses = classname((styles.container), {
    [styles.light]: activeTheme === 'light',
    [styles.dark]: activeTheme === 'dark'
  }, className)

  const renderedItems = data.map(d => {
    const fontClass = classname({
      'sans': d === 'sans serif',
      'serif': d === 'serif',
      'mono': d === 'mono'
    })

    return <button className={fontClass} onClick={onClick} key={d}>{d}</button>
  })

  return <div className={containerClasses}>{renderedItems}</div>
}

export default Modal