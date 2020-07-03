new Vue({
    el: '#app',
    data:{
        title: 'Vue conditional output',
        showName: true,
        showAge: true
    },
    methods: {
        toggleName(){
            // exclamation mark operation可以reverse boolean var or boolean value
            this.showName = !this.showName
        },
        toggleAge(){
            this.showAge = !this.showAge
        }
    }
})

