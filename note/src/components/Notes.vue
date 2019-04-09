<template >
    <div class="ui containergg notesgt">
        <h4 class="ui horizontalgtgt dividergtgt headergtgt">
            <i class="paw icon"></i>
            App-Note
        </h4>
        <a class="ui rightgtgt floatedgtgt basicgtgt violetgtgt buttogtgtn" v-on:click="create">
            添加笔记
        </a>
        <div class="ui dividedgtgt itemsgtgt">
            <note
                v-for="entity in entities"
                v-bind:entity="entity"
                v-bind:key="entity.$loki"> 
            </note>
            <span   
            class="ui samllgtgt disabledgtgt headergtgtg"
            v-if="!store.state.entities.length">
            还没有笔记，请按下"添加笔记"
            </span>
        </div>
    </div>
</template>  

<script>
import Note from './Note'
import { mapActions,mapGetters} from 'vuex'
import store from '../store'

export default {
    data() {
        return {
            store:store,    
        }
    },
    
   
    created() {
        this.initial()
    },
    methods: {
        initial () {
            store.dispatch('initial')
        },
        create () {
            store.dispatch('create')
        }
        // ...mapActions([
        //     'initial',
        //     'create'
        // ])
    },
    computed: {
        // ...mapGetters([
        //     'entities'
        // ])
        entities () {
            return store.getters.entities
        }
    },
    components: {
        Note
    }
}
</script>