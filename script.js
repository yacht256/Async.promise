const  avatarimg  = document.getElementById('avatarimg')
const  fullname  = document.getElementById('fullname')
const  email  = document.getElementById('email')


const promiseCallApi = () =>{
    axios.get(`https://reqres.in/api/users/5`).then((res) => {
        console.log(res)
        const user = res.data.data
        avatarimg.src = user.avatar
        fullname.innerText = user.first_name +" " + user.last_name
        email.innerHTML =  user.email
    })
}