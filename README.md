### 自定义的滚动条
![效果图][1]

### 使用方法

**1. 假如不需要滚动条,只需要内容可以滚动**

```
<div class="list">
    <p>我是要被滚动的内容</p>   
    <p>我是要被滚动的内容</p>   
    <p>我是要被滚动的内容</p>   
</div>
      
createScrollBar({
    target: document.querySelector('.list')
})
```

**注意**
1. 请给`list`设置有效的`width`和`height`,以及`overflow:hidden`

**2. 假如需要界面上显示出滚动条**

```
<div class="list-wrapper">
    <div class="list">
        <p>我是要被滚动的内容</p>   
        <p>我是要被滚动的内容</p>   
        <p>我是要被滚动的内容</p>   
    </div>
    <!--这是生成的滚动条出现的位置-->
</div>
      
createScrollBar({
    wrapper: document.querySelector('.list-wrapper'),
    target: document.querySelector('.list')
})
```

**注意**
1. 一定要给`list-wrapper`设置固定的`height`和`width`,并且`position`为`relative`
2. `list`的`width`和`height`都要设置为100%,并且`overflow:hidden`

### 参数
需要给`createScrollBar`传递一个选项对象

`wrapper`: 包裹着需要被滚动的div的父级div

`target`: 有滚动内容的div

`backgroundColor`: 滚动条的背景色,默认为`#E3E3E3`

`color`: 滚动条的颜色,默认为`#EF6851`

`opacity`: 滚动条在静止状态下的透明度,默认为`0.6`的透明度

`showScrollBar`:  是否显示滚动条,值为`true`或则是`false`,默认显示滚动条

`touch`: 是否支持触屏,值为`true`或则是`false`,默认不添加触屏事件


  [1]: http://7xleea.com1.z0.glb.clouddn.com/scrollbar/745b9ff8-e989-4f21-b570-60b402680ab7.gif

