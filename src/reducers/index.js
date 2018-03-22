import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import GetStudents from './GetStudents';

const rootreducer = combineReducers({
form:formReducer,
students:GetStudents
});

export default rootreducer;