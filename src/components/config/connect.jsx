
import api from "./api";
import config from './.config.jsx';

const connect = {



    login: async (props) => {

        const response = await api.post('/user/login', {

            email: props.email,
            password: props.password

        }, {
            headers: {
                //  'Authorization': `${sessionStorage.getItem('authToken')}`,
            },
        })
            .then(res => {

                return res

            }).catch(err => {

                return err.response
            })



        return response
    },

    getLogs: async (props) => {

        const response = await api.get('/logs', {
            headers: {
                'Authorization': `${localStorage.getItem('autorization')}`,
            },
        })
            .then(res => {

                return res

            }).catch(err => {

                return err.response
            })



        return response

    },

    deletLogs: async (props) => {

        const response = await api.get('/deleteLogs', {
            headers: {
                'Authorization': `${localStorage.getItem('autorization')}`,
            },
        })
            .then(res => {

                return res

            }).catch(err => {

                return err.response
            })



        return response

    },

    getFgtsStatus: async (cpf) => {

        const parans =  {
            cpf: cpf 
        }

        const response = await api.post('http://localhost:8080/fgts/saldo',parans,)
            .then(res => {

                return res.data

            }).catch(err => {

                return err.response
            })



        return response

    }, 

    getFtgsTable: async (params) => {

      const response = await  api.post('http://localhost:8080/fgts/getTable', {
            params
        } ) .then(res => {
            return res
        }) .catch(err => {
           return err
        })



        return  response.data;
       
    }


}


export default connect;