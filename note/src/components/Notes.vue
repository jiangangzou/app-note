<template lang="html">
    <div class="ui container notes">
        <h4 class="ui horizontal divider header">
            <i class="paw icon"></i>
            App-Note
        </h4>
        <a class="ui right floated basic violet button" v-on:click="create">
            添加笔记
        </a>
        <div class="ui divided items">
            <note
                v-for="entity in entities"
                v-bind:entity="entity"
                v-bind:key="entity.$loki"> 
            </note>
            <span   
            class="ui samll disabled header"
            v-if="!$store.state.entities.length">
            还没有笔记，请按下"添加笔记"
            </span>
        </div>
    </div>
</template>  

<script>
import Note from './Note'
import { mapActions,mapGetters} from 'vuex'

export default {
    created() {
        this.initial()
    },
    methods: {
        ...mapActions([
            'initial',
            'create'
        ])
    },
    computed: {
        ...mapGetters([
            'entities'
        ])
    },
    components: {
        Note
    }
}
</script>