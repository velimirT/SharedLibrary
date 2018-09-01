import { createStore, applyMiddleware } from 'redux'
import { MainReducer } from './Reducer.js';

const initialState = {
    list:[
      {
        'name':'Library1',
        'img':'default',
        'address':'546 E 180st, Washington Heights, New York, NY, 10015',
        'description':'Nullam vehicula dui sodales, lobortis quam fringilla, molestie risus. Nunc eget erat non purus porttitor interdum. Donec vel commodo nunc. Proin faucibus dictum luctus. Nam sollicitudin dictum tempor. Vivamus eget vulputate felis. Nam porta urna eget mi dignissim, placerat aliquet orci varius. Suspendisse potenti. Sed rutrum cursus est, eu imperdiet nisi rutrum ac. Sed sagittis malesuada felis. In hendrerit rutrum ante, at porttitor purus efficitur in. ',
        'books':[]
      },
      {
        'name':'Library2',
        'img':'default',
        'address':'546 E 180st, Washington Heights, New York, NY, 10015',
        'description':'Nullam vehicula dui sodales, lobortis quam fringilla, molestie risus. Nunc eget erat non purus porttitor interdum. Donec vel commodo nunc. Proin faucibus dictum luctus. Nam sollicitudin dictum tempor. Vivamus eget vulputate felis. Nam porta urna eget mi dignissim, placerat aliquet orci varius. Suspendisse potenti. Sed rutrum cursus est, eu imperdiet nisi rutrum ac. Sed sagittis malesuada felis. In hendrerit rutrum ante, at porttitor purus efficitur in. ',
        'books':[]
      },
      {
        'name':'Library3',
        'img':'default',
        'address':'546 E 180st, Washington Heights, New York, NY, 10015',
        'description':'Nullam vehicula dui sodales, lobortis quam fringilla, molestie risus. Nunc eget erat non purus porttitor interdum. Donec vel commodo nunc. Proin faucibus dictum luctus. Nam sollicitudin dictum tempor. Vivamus eget vulputate felis. Nam porta urna eget mi dignissim, placerat aliquet orci varius. Suspendisse potenti. Sed rutrum cursus est, eu imperdiet nisi rutrum ac. Sed sagittis malesuada felis. In hendrerit rutrum ante, at porttitor purus efficitur in. ',
        'books':[]
      }
    ],
    libraries_slider_shown: false,
    chosen_library: null,
  }

const logger = store => next => action => {
    let result
    console.groupCollapsed("dispatching", action.type)
    console.log('prev state', store.getState())
    console.log('action', action)
    result = next(action)
    console.log('next state', store.getState())
    console.groupEnd()
    return result
}

const saver = store => next => action => {
    let result = next(action)
    localStorage['redux-shared-libary-store'] = JSON.stringify(store.getState())
    return result
}

const storeFactory = (state=initialState) =>
    // createStore(MainReducer, state);
    applyMiddleware(logger, saver)(createStore)(
        MainReducer,
        (localStorage['redux-shared-libary-store']) ?
            JSON.parse(localStorage['redux-shared-libary-store']) :
            state
    )

export default storeFactory