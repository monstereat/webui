# webui
该项目为pc端UI组件库。使用webpack进行打开

## 使用 main.js
全局使用 main.js文件
```javascript
ipmort bui from 'ubwebui'
Vue.use(bui)
```
某页面使用

```JavaScript
<script>
   import {demo} from 'bwebui/lib/demo'
	export default{
    	name: 'child',
    	components: { demo }
	}
</script>
```
