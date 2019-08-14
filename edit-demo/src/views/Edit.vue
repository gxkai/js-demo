<template>
    <div class="about" style="height: 100vh;">
        <Row>
            <Col span="6">
                <Tree :data="baseData" ref="tree" @on-select-change="change"/>
            </Col>
            <Col span="18">
                <!--<MonacoEditor  v-model="code" :language="language" style="height: 600px"/>-->
                <Input v-model="file.code" type="textarea" :autosize="true"/>
                <Button type="primary" @click="save">保存</Button>
            </Col>
        </Row>
    </div>
</template>
<script>
import MonacoEditor from 'vue-monaco'
import axios from 'axios'
export default {
    name: 'level_2_3',
    components: {
        MonacoEditor
    },
    data () {
        return {
            file: {
                code: '',
                path: '',
                size: '',
                extension: '',
                type: ''
            },
            language: '',
            baseData: []
        }
    },
    created () {
        axios
            .request({
                method: 'get',
                url: 'http://localhost:3000/'
            })
            .then(res => {
                this.baseData = [res.data]
            })
    },
    methods: {
        change (data) {
            if (data[0].type !== 'file') {
                return
            }
            axios.request({
                url: `http://localhost:3000/file?path=${data[0].path}`,
                method: 'get'
            }).then(res => {
                let r = res.data
                if (typeof res.data === 'object') {
                    r = JSON.stringify(res.data)
                }
                Object.assign(this.file, data[0])
                this.$set(this.file, 'code', r)
                console.log(this.file)
            })
        },
        save () {
            axios.request({
                method: 'put',
                url: `http://localhost:3000/file?path=${this.file.path}`,
                data: this.file
            }).then(res => {
                console.log('ok')
            })
        }
    }
}
</script>
<style></style>
