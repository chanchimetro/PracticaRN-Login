import axios from 'axios';

export default class authServices {
    static login = async (user, pass, context, navigation) => {
        let r;
        await axios.post('http://localhost:3001/login', {
          user: user,
          pass: pass
        })
          .then(function (response) {
            console.log(response);
            context.setUser(response.data.data);
            r = response.data.message;
            setTimeout(() => navigation.navigate('Home'), 3000);
          })
          .catch(function (error) {
            r = error.response.data.message;
            console.log(error);
          });
        return r;
      }
      
      static register = async (user, pass, navigation) => {
        let r;
        await axios.post('http://localhost:3001/register', {
          user: user,
          pass: pass
        })
          .then(function (response) {
            console.log(response);
            r = response.data.message;
            setTimeout(() => navigation.navigate('Menu'), 3000);
          })
          .catch(function (error) {
            r = error.response.data.message;
            console.log(error);
          });
        return r;
      }
      
      static editProfile = async (name, surname, email, context, navigation) => {
        let r;
        await axios.put('http://localhost:3001/changeProfile', {
          username: context.user.username,
          name: name,
          surname: surname,
          email: email
        })
          .then(function (response) {
            console.log(response.data);
            context.setUser(response.data.data);
            r = response.data.message;
            setTimeout(() => navigation.navigate('Home'), 2000);
          })
          .catch(function (error) {
            r = error.response.data.message;
            console.log(error);
          });
        return r;
      }
}