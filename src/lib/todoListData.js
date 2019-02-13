import Vue from 'vue';
export const todoListItems = new Vue({
    data(){
        return {
            listItems: []
        }
    },
    methods:{
        create(item) { this.listItems.push(item) },
        update(index, item) {
            this.listItems[index] = Object.assign(this.listItems[index], item);
        },
        delete(index){
            this.listItems.splice(index, 1);
        }
    }
});
