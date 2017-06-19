# checkout-counter

> vue-cli构建的小商店收银及商品管理系统，觉得不错可以star一下，谢谢。

## 写在前面

我目前还不会后端部分，所以整个项目的所有都是写在前端里边的，所以现在它是一个不完整也不能真正能够使用的项目。等我以后会后端之后，再补充完整，努力让它能够真正使用。好处是目前这里边没有后端部分，如果有同样和我一样学习前端的朋友，我希望这个能够有一点参考价值。
	- 登录界面用户名和密码可以随意输入（因为没有后端）
	- 入库新商品的时候，要将商品图片名称改为`商品编码.jpg`的名称，然后放到项目文件夹的`src/assets/shopping-images`文件里边，就可以正确显示商品图片。
	- 上面就是一个我不会的问题，我发现我用<input type="file" />不能获取本地文件的路径，网上说是浏览器的安全设置导致不能获取文件路径，这个是不是得后端，先将图片文件上传到服务器，然后用服务器路径获取图片。希望有大佬能帮我解惑。
	
## 项目组成
- 头部登录及导航部分
- 商品展示部分
- 购物车部分
- 商品入库及操作部分
- 收银记录
- 商品重要消息通知

## 项目启动

``` 

	// 将源码clone或下载压缩包到本地

	// git bash到项目文件夹

	// 安装依赖包
  	npm install

  	// 启动项目
  	npm run dev
	
```

## 项目图片

![](https://github.com/huanghaibin91/Checkout-counter/blob/master/src/assets/image/1.png?raw=true)
![](https://github.com/huanghaibin91/Checkout-counter/blob/master/src/assets/image/2.png?raw=true)
![](https://github.com/huanghaibin91/Checkout-counter/blob/master/src/assets/image/3.png?raw=true)
![](https://github.com/huanghaibin91/Checkout-counter/blob/master/src/assets/image/4.png?raw=true)
![](https://github.com/huanghaibin91/Checkout-counter/blob/master/src/assets/image/5.png?raw=true)
![](https://github.com/huanghaibin91/Checkout-counter/blob/master/src/assets/image/6.png?raw=true)



