import axios from '@services/Api'

export default {
    register (credentials) {
        return Api().post('register', credentials)
    }
}

// AuthenticationService.register({
//     email: 'testing@gmail.com',
//     password: '1234567'
// })