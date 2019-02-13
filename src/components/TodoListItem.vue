<template>
    <div>
        <input type="checkbox" @change="$emit('toggleCheckbox', $event.target.checked)" :value="valueItem.checked"/>
        <label>{{valueItem.label}}</label>
        <button name="edit" @click="$emit('editTodo')">Edit</button>
        <button name="remove" @click="$emit('removeTodo')">Remove</button>
    </div>
</template>

<script>
    /* Permet d'exporter tout d'un coup */
    export default {
        name: "TodoListItem",
        props:{
            valueItem: { type: Object }
        },
        data(){
            return {
                checked: false
            }
        },
    }
</script>

<style scoped>

</style>
