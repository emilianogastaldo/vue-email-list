
const { createApp } = Vue;

const endpoint = "https://flynn.boolean.careers/exercises/api/random/mail";

const app = createApp({
    name: 'Email List',
    data: () => ({
        prova: 'Prova vue',
        emailList: []
    }),
    created() {
        axios.get(endpoint).then((res) => {
            const email = res.data;
            this.emailList.push(email);
        })
        console.log('lista di email', this.emailList);

    }
});

app.mount('#root');