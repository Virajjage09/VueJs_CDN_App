const app = Vue.createApp({
     data() {
        return {
            firstName: 'Viraj',
            lastName: 'Jage',
            email: 'viraj@ril.com',
            gender: 'male',
            picture: 'https://randomuser.me/api/portraits/men/10.jpg',
        }
     },
     methods: {
        async getUser(){
            const response = await fetch('https://randomuser.me/api')
            const data = await response.json()
            console.log(data)
            this.firstName = data.results[0].name.first,
            this.lastName = data.results[0].name.last,
            this.email = data.results[0].email,
            this.gender =  data.results[0].gender,
            this.picture =  data.results[0].picture.large
        },
     }

})

app.mount('#app')