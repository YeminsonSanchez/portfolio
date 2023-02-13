import { useEffect, useState } from 'react'
import { DarkModeSwitch } from 'react-toggle-dark-mode'
import './darkMode.css'
export const DarkMode = () => {
	const [isDarkMode, setDarkMode] = useState(false)
	useEffect(() => {
		const json = localStorage.getItem('site-dark-mode')
		const currentMode = JSON.parse(json)
		//If found the property site-dark-mode True -> set Dark Mode in True
		if (currentMode) {
			setDarkMode(true)
		}
		//If found the property site-dark-mode False -> set Dark Mode in False
		else {
			setDarkMode(false)
		}
	}, [])
	useEffect(() => {
		if (isDarkMode) {
			document.body.classList.add('dark')
			document.body.classList.remove('white')
		} else {
			document.body.classList.add('white')
			document.body.classList.remove('dark')
		}
		const json = JSON.stringify(isDarkMode)
		localStorage.setItem('site-dark-mode', json)
	}, [isDarkMode])

	const toggleDarkMode = (checked) => {
		setDarkMode(checked)

		checked
			? (document.body.classList.add('dark'),
				document.body.classList.remove('white'))
			: (document.body.classList.remove('dark'),
				document.body.classList.add('white'))
	}
	return (
		<DarkModeSwitch
			checked={isDarkMode}
			onChange={toggleDarkMode}
			className="logo_dark_mode"
			sunColor={'#06B6D4'}
			moonColor={'#3BF69C'}
		/>
	)
}	
