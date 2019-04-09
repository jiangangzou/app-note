<template>
    <div class="ui222 form4567">
        <div class="field123">
            <textarea rows="5" placeholder="写点东西" v-model="entity.body" v-on:input="updated(entity)"></textarea>
        </div>
    </div>
</template>

<script>
    import { mapGetters} from 'vuex';

    export default {
        methods: {
            ...mapGetters([
                'updated'
            ])
        },
        props: [
            'entity'
        ]
    }
</script>