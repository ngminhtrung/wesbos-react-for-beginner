import { VisibilityFilters, SET_VISIBILITY_FILTER } from '../actions';

const initialState = {
  visibilityFilters: VisibilityFilters.SHOW_ALL,
  todo: []
}

function todoApp(state = initialState, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return Object.assign({}, state, {
        visibilityFilter: action.filter
      })
    default:
      return state
  }
}