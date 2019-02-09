TypeScript Browser Soap Client Demo
===================================

这里主要是为了实验如何给`browser-soap`添加typing文件，以及确保它能与webpack结合使用。

经过测试，发现原来使用的`johniak/browser-soap`里面实际上包含了一个node模块`node-xml`，无法使用，所以我fork并去掉了该依赖。

由于在这个Demo中，没有添加合适的server端，所以无法正常连接，属于正常现象。

`browser-soap`的功能在另一个Demo里有完整演示。

```
npm install
npm run demo
```

