<template>
    <div id="app">
        <img alt="Vue logo" src="./assets/logo.png">
        <TodoListTitle titleApp="Todo List App"/>
        <TodoList />
        <Chart class="test"/>
    </div>
</template>

<script>
    import TodoListTitle from './components/TodoListTitle.vue';
    import TodoList from "./components/TodoList";
    import Chart from "./components/Chart"

    export default {
        name: 'app',
        components: {
            TodoList,
            TodoListTitle,
            Chart
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
    .test{
        display: block;
        width: 600px;
        height: 600px;
    }
</style>
