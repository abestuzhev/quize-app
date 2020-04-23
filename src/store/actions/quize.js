import axios from "../../axios/axios-quize";
import {FETCH_QUIZES_ERROR, FETCH_QUIZES_START, FETCH_QUIZES_SUCCESS} from "./actionType";

export function fetchQuizes() {
    return async dispatch => {
        dispatch(fetchQuizesStart());
        try{
            const quizes = [];
            const response = await axios.get('/quize.json');
            Object.keys(response.data).forEach((key, index)=>{
                quizes.push({
                    id: key,
                    name: `Тест ${index + 1}`
                });
            });
            dispatch(fetchQuizesSucces(quizes));

        }catch (e){
            dispatch(fetchQuizesError(e));
        }
    }
}

export function fetchQuizesStart() {
    return {
        type: FETCH_QUIZES_START
    }
}
export function fetchQuizesSucces(quizes) {
    return {
        type: FETCH_QUIZES_SUCCESS,
        quizes: quizes
    }
}
export function fetchQuizesError(e) {
    return {
        type: FETCH_QUIZES_ERROR,
        error: e
    }
}