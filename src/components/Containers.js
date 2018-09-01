import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import List from './List';
import { librariesSliderToggle, chooseLibrary, resetLibrary } from '../store/Actions';

export const ListWrap = connect(
	store => 
		({
			list: store.list,
		}),
	dispatch => 
		({
			onClickItem(id){
				dispatch(chooseLibrary(id))
				alert("Chosen Library: "+ id);
			}
		})
)(List);
