<template>
    <div class="item4444">
        <div class="meta5555">
            {{ updated(entity) }}
        </div>
        <div class="container123">
            <div class="header000" v-on:click="open=!open">
                {{ header(entity) || "新建笔记"}}
            </div>
            <div class="extra6666">
                <editor v-bind:entity="entity" v-if="open"></editor>
                {{ words(entity) }}字
                <i class="right777 floated888 trash999 outline icon"
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