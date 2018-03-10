import { combineReducers } from 'redux';

import BooksReducer from './BooksReducer';
import VideoUrlReducer from './VideoUrlReducer';

const rootReducer = combineReducers({
  books: BooksReducer,
  videos: VideoUrlReducer
});

export default rootReducer;
