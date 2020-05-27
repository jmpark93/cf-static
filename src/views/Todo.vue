<template>
  <div> 
    <TodoHeader> </TodoHeader>
    <TodoInput v-on:addTodo="addTodo"> </TodoInput>
    <TodoList v-bind:propsdata="todoItems" @removeTodo="removeTodo"> </TodoList>
    <TodoFooter v-on:removeAll="clearAll"> </TodoFooter>
  </div>
</template>

<script>
import TodoHeader from "@/components/todo/TodoHeader.vue"
import TodoInput from "@/components/todo/TodoInput.vue"
import TodoList from "@/components/todo/TodoList.vue"
import TodoFooter from "@/components/todo/TodoFooter.vue"

export default {
    data() {
        return {
            todoItems: []
        }
    },
    created() {
        if(localStorage.length > 0) {
            for(var i = 0; i < localStorage.length; i++) {
                this.todoItems.push(localStorage.key(i));
                // console.log(localStorage.key(i));
            }
        }
    },     
    methods: {
        addTodo(todoItem) {
            localStorage.setItem(todoItem, todoItem);
            this.todoItems.push(todoItem);
        },
        removeTodo(todoItem, index) {
            localStorage.removeItem(todoItem);
            this.todoItems.splice(index, 1);
        },   
        clearAll() {
            localStorage.clear();
            this.todoItems = [];
        }
    },
    components: {
        'TodoHeader' : TodoHeader,
        'TodoInput' : TodoInput,
        'TodoList' : TodoList,
        'TodoFooter' : TodoFooter
    }
}
</script>
