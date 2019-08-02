<template>
    <div>
        <ul>
            <li v-for="todo in todos" :key="todo.id">
                {{ todo.created }} : {{ todo.done }} : {{ todo.name }}
            </li>
        </ul>
            <div class="form">
            <form v-on:submit.prevent="add">    <!-- preventでbuttonをタップした時にリロードしないようにする。 -->
                <input v-model="name">
                <button>Add</button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            name: '',
            done: false
        }
    },
    // todos.jsのactionsのinitを呼び出してfirebaseを初期化
    created: function() {
        this.$store.dispatch('todos/init')
    },
    methods: {
        add() {
            this.$store.dispatch('todos/add', this.name)
            this.name = ''
        }
    },
    computed: {
        todos() {
            return this.$store.state.todos.todos
        }
    }
}
</script>
