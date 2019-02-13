<template>
    <div>
        <TodoListItem v-for="(listItem, index) in listItems" :key="index" :valueItem="listItem" @editTodo="showDataItem(index, listItem.label)" @removeTodo="removeDataItem(index)" @toggleCheckbox="toggle($event, index)"/>
        <TodoListForm :existingContent="existingContent"  @submit="pushDataItem($event)"/>
    </div>
</template>

<script>
    import TodoListItem from './TodoListItem.vue';
    import TodoListForm from './TodoListForm.vue';
    import {todoListItems} from "../lib/todoListData";

    export default {
        name: "TodoList",
        components:{
            TodoListItem,
            TodoListForm
        },
        data(){
            return {
                listItems: todoListItems.listItems,
                existingContent: null,
                currentListIndex: null,
            }
        },
        methods:{
            pushDataItem(listItem){
                if (this.currentListIndex !==  null ){
                    todoListItems.update(this.currentListIndex, listItem);
                    this.existingContent = null;
                    this.currentListIndex = null;
                }else {
                    todoListItems.create(listItem)
                }
            },
            showDataItem(index, label){
                this.existingContent = label;
                this.currentListIndex = index;
            },
            removeDataItem(index){
                todoListItems.delete(index);
            },
            toggle(checked, index){
                todoListItems.update(index, {checked})
            }
        }
    }
</script>

<style scoped>

</style>
