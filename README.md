### Explain

- 解决移动端的滚动穿透的问题；
- 原生JS编写，支持Vue、jQuery；React、Angular未尝试；

### Usage

 ```javascript
  <script src="./node_modules/modal-helper/dist/modalHelper.js"></script>
 ```

- 监听弹框的显示和隐藏事件；以Vue为例：

  ```javascript
  watch: {
    	//watch为vue提供的api；详看：https://cn.vuejs.org/v2/api/#watch
      isShow:function(newVal, oldVal) {
          if(newVal == true){
              //显示弹框
              ModalHelper.afterOpen()
          }else{
            	//隐藏弹框
              ModalHelper.beforeClose()
          }
      }
  }
  ```

