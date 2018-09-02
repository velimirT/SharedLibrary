import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import List from './List';
import LibrariesSlider from './LibrariesSlider';
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

export const LibrariesSliderWrap = connect(
	store => 
		({
			hidden: !store.libraries_slider_shown,
			name: store.chosen_library !== null ? store.list[store.chosen_library].name :null,
			img: store.list[store.chosen_library] !== null ? store.list[store.chosen_library].img :null,
			address: store.list[store.chosen_library] !== null ? store.list[store.chosen_library].address :null,
			description: store.list[store.chosen_library]!==null ? store.list[store.chosen_library].description :null,
			books: store.list[store.chosen_library]!==null ? store.list[store.chosen_library].books:null,
		}),
	dispatch => 
		({
			onClickClose(){
				dispatch(resetLibrary())
				// alert("Chosen Library: "+ id);
			}
		})
)(LibrariesSlider);
