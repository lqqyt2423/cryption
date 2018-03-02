# cryption 流数据加解密

## 安装

```
npm install cryption
```

## 用处

提供流的数据加解密接口：

```javascript
const cryption = require('cryption');
const fs = require('fs');

(async () => {
  // 加密
  const input = fs.createReadStream('/input.txt');
  const output = fs.createWriteStream('/encoded.txt');
  await cryption.encode({ readable: input, writable: output, algorithm: 'aes192', password: 'password' });

  // 解密
  const input = fs.createReadStream('/encoded.txt');
  const output = fs.createWriteStream('/output.txt');
  await cryption.decode({ readable: input, writable: output, algorithm: 'aes192', password: 'password' });
})();
```

## 命令行

### 先全局安装

```
npm install cryption -g
```

### 用处

```
  Usage: cryp [options] [command]


  Options:

    -v --version  output the version number
    -h, --help    output usage information


  Commands:

    encode [options] [file]  加密文件
    decode [options] [file]  解密文件
    *                        show help
```

```
      encode decode options:
      -a --algorithm <algo> 选择算法
      -p --password <pass> 自定义加密或解密密码
      -r --retain 是否保留源文件
```

### 举例

#### 加密

加密本文件夹下的文件`input.txt`：

```
cryp encode ./input.txt
```

自定义加密密码加密：

```
cryp encode -p secret ./input.txt
```

#### 解密

解密本文件夹下的文件`input.txt`：

```
cryp encode ./input.txt.cryp
```

自定义解密密码加密：

```
cryp encode -p secret ./input.txt.cryp
```
