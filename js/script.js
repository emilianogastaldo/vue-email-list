
const { createApp } = Vue;

const endpoint = "https://flynn.boolean.careers/exercises/api/random/mail";

const app = createApp({
    name: 'Email List',
    data: () => ({
        prova: 'Prova vue',
        emailList: [],
        inputNumber: ''
    }),
    computed: {
        maxNumber() {
            return parseInt(this.inputNumber);
        }
    },
    methods: {
        // Metodo per creare una email e metterla nella lista
        getEmail() {
            axios.get(endpoint).then((res) => {
                const email = res.data;
                this.emailList.push(email);
            })
        },
        fetchEmails() {
            for (let i = 0; i < this.maxNumber; i++) {
                this.getEmail()
            }
        },
        generateList() {
            this.emailList = [];
            this.fetchEmails();
        }
    }
});

app.mount('#root');