const axios = require('axios');

export function register (data){
    return (
        axios({
            method:'post',
            url:'http://localhost:8080/register',
            data:data
        }))
    
}