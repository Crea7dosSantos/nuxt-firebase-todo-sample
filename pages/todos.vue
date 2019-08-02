<template>
    <div>
        <ul>
            <li v-for="todo in todos" :key="todo.id">
                <input
                type="checkbox"
                v-bind:checked="todo.done"
                @change="toggle(todo)">
                <span v-bind:class="{ done: todo.done }">
                {{ todo.name }} : {{ todo.created }}   <!-- この記述でdoneだったらdoneクラスが設定され、doneではなかったら何も設定されない事になる。  -->
                </span>
                <button v-on:click="remove(todo.id)">削除</button>
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
        },
        remove(id) {
            this.$store.dispatch('todos/remove', id)
        },
        toggle(todo) {
            this.$store.dispatch('todos/toggle', todo)   // idではなく、todoを渡す理由は、idだとdoneの値にアクセスできないから。
        }
    },
    computed: {
        todos() {
            return this.$store.state.todos.todos
        }
    }
}
</script>

<style>
li > span.done {
    text-decoration: line-through;
}
</style>
