<template>
    <editor v-model="content" @init="editorInit" lang="javascript" theme="chrome" width="100vw" height="100vh"></editor>
</template>

<script>
export default {
    name: 'AceEdit',
    components: {
        editor: require('vue2-ace-editor')
    },
    data () {
        return {
            content: 'console.log(111)'
        }
    },
    methods: {
        editorInit () {
            require('brace/ext/language_tools') // language extension prerequsite...
            require('brace/mode/html')
            require('brace/mode/javascript') // language
            require('brace/mode/less')
            require('brace/theme/chrome')
            require('brace/snippets/javascript') // snippet
        }
    }
}
</script>

<style scoped>

</style>
