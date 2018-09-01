import C from './Constants'

export const librariesSliderToggle = (show) => 
	({
		type: C.LIBRARIES_SLIDER_TOGGLE,
		show
	})

export const chooseLibrary = (id) => 
	({
		type: C.CHOOSE_LIBRARY,
		id
	})

export const resetLibrary = () => 
	({
		type: C.RESET_LIBRARY,
	})