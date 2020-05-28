<template>
  <section>
      <transition-group name="list" tag="ul">
          <li v-for="(todoItem, index) in propsdata" :key="todoItem" class="shadow"> 
              <b-icon class="checkBtn" icon=check> </b-icon>
              {{ todoItem }} 
              <span class="removeBtn" type="button" @click="removeTodo(todoItem, index)">
                <b-icon icon=trash> </b-icon>
              </span>
          </li>
      </transition-group>
  </section>  
</template>

<script>
export default {
    props: ['propsdata'],
    methods: {
        removeTodo(todoItem, index) {
            // console.log( todoItem, index, 'remove clicked ... ')
            // localStorage.removeItem( todoItem);
            // this.todoItems.splice(index, 1);
            this.$emit('removeTodo', todoItem, index);
        }
    }
}
</script>

<style scoped>
.list-enter-active, .list-leave-active {
    transition: all 1s;
}

.list-enter, .list-leave-to {
    opacity: 0;
    transform: translateY(30px);
}

ul {
    list-style-type: none;
    padding-left: 0px;
    margin-top: 0;
    text-align: left;
}

li {
    display: flex;
    min-height: 50px;
    height: 50px;
    line-height: 50px;
    margin: 0.5rem 0;
    padding: 0 0.9rem;
    background: white;
    border-radius: 5px;
}

.checkBtn {
    min-height: 50px;
    height: 50px;
    line-height: 50px;
    color: #62ACDE;
    margin-right: 5px;
}

.removeBtn {
    margin-left: auto;
    color: #DE4343;
}
</style>