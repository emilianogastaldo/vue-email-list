console.log('ok')
console.log(Vue)
console.log(axios)

const { createApp } = Vue;

const app = createApp({
    name: 'Email List',
    data: () => ({
        prova: 'Prova vue'
    }),
});

app.mount('#root');