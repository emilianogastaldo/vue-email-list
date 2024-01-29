
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
            for (let i = 0; i < this.maxNumber; i++) {
                axios.get(endpoint).then((res) => {
                    const email = res.data;
                    this.emailList.push(email);
                })
            }
        },
        generateList() {
            this.emailList = [];
            this.getEmail();
        }
    }
});

app.mount('#root');