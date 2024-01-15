import { useContext } from 'react'
import { DarkModeSwitch } from 'react-toggle-dark-mode'
import { DarkModeContext } from '../../context'
import './theme.css'
export const Theme = () => {
	const { isDarkMode, setDarkMode } = useContext(DarkModeContext)

	const toggleDarkMode = (checked) => {
		setDarkMode(checked)
	}
	return (
		<DarkModeSwitch
			checked={isDarkMode}
			onChange={toggleDarkMode}
			className='logo_dark_mode'
			sunColor={'#06B6D4'}
			moonColor={'#3BF69C'}
		/>
	)
}
