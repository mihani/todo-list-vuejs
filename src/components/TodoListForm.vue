<template>
    <div>
        <input type="text" name="editItem" v-model="dataItem"/>
        <input type="submit" name="validItem" @click="validItem()">
    </div>
</template>

<script>
    export default {
        name: "TodoListForm",
        props:{
          existingContent: null
        },
        methods: {
            // envoi d'event
            validItem(){
                this.$emit('submit',{label:this.dataItem, checked:false});
                this.dataItem = '';
            }
        },
        data(){
            return {
                dataItem: ''
            }
        },
        //Detecte la modification de la donnée
        watch:{
            existingContent(){
                this.dataItem = this.existingContent;
            }
        }
    }
</script>

<style scoped>

</style>
