import C from './Constants';

export const MainReducer = (state = {}, action) => {
	switch (action.type){
		case C.LIBRARIES_SLIDER_TOGGLE:
			return (
				{
					...state, 
					libraries_slider_shown: action.show
				}
			)
		case C.CHOOSE_LIBRARY:
			return (
				{
					...state, 
					chosen_library: action.id,
					libraries_slider_shown: false
				}
			)
		case C.RESET_LIBRARY:
			return (
				{
					...state, 
					chosen_library: 0,
					libraries_slider_shown: true
				}
			)
		default: 
			return state;
	}
}