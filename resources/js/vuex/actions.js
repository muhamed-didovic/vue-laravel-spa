import axios from 'axios'

export const incrementNumberAction = ({commit}, number) => {
    commit('incrementNumberMutation', number)
}

/*export const exampleWithService = ({commit}, {min, max}) => {
    axios.get('some-url?min=${min}&max=${max}').then((response) => {
        commit('addNumber', response.data.number)
    })
}*/
