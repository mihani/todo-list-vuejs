<template>
    <div class="title-todo">
        <h1>{{titleApp}}</h1>
    </div>
</template>

<script>
    export default {
        name:'TodoListTitle',
        props:{
            titleApp: String
        }
    }
</script>
