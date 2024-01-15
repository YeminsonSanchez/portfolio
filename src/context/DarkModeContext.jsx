import { createContext, useEffect, useState } from 'react'

export const DarkModeContext = createContext()

export const DarkModeProvider = ({ children }) => {
	const [isDarkMode, setDarkMode] = useState(false)

	const getLocalStorage = () => {
		const json = localStorage.getItem('site-dark-mode')
		const currentMode = JSON.parse(json)
		return currentMode
	}

	useEffect(() => {
		const currentMode = getLocalStorage()
		setDarkMode(currentMode)

		const handleStorageChange = () => {
			const updatedMode = getLocalStorage()
			setDarkMode(updatedMode)
		}

		window.addEventListener('storage', handleStorageChange)

		return () => {
			window.removeEventListener('storage', handleStorageChange)
		}
	}, [])

	return (
		<DarkModeContext.Provider value={{ isDarkMode, setDarkMode }}>
			<div className={`${isDarkMode ? 'dark' : 'white'}`}>{children}</div>
		</DarkModeContext.Provider>
	)
}
