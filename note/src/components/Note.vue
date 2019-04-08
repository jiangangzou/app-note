<template>
    <div class="item">
        <div class="meta">
            {{ updated(entity) }}
        </div>
        <div class="container">
            <div class="header" v-on:click="open=!open">
                {{ header(entity) || "新建笔记"}}
            </div>
            <div class="extra">
                <editor v-bind:entity="entity" v-if="open"></editor>
                {{ words(entity) }}字
                <i class="right floated trash outline icon"
                v-on:click="destory(entity)"
                v-if="open">
                </i>
            </div>
        </div>
    </div>
</template>

<script>
    import Editor from "./Editor";
    import {mapActions,mapGetters } from 'vuex'

    export default {
        data() {
            return {
                open: false
            }
        },
        computed: {
            ...mapGetters([
                'updated',
                'words',
                'header'
            ])
        },
        props: [
            'entity'
        ],
        methods: {
            ...mapActions([
                'destory'
            ])
        },
        components: {
            Editor
        }
    }
</script>