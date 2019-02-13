<template>
    <div id="app">
        <img alt="Vue logo" src="./assets/logo.png">
        <TodoListTitle titleApp="Todo List App"/>
        <TodoList />
    </div>
</template>

<script>
    import TodoListTitle from './components/TodoListTitle.vue';
    import TodoList from "./components/TodoList";

    export default {
        name: 'app',
        components: {
            TodoList,
            TodoListTitle
        },
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
