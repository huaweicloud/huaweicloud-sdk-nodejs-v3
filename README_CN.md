[English](./README.md) | 简体中文

<p align="center">
  <a href="https://www.huaweicloud.com/"><img width="270px" height="90px" src="https://console-static.huaweicloud.com/static/authui/20210202115135/public/custom/images/logo.svg"></a>
</p>

<h1 align="center">华为云开发者 Node.js 软件开发工具包（Node.js SDK）</h1>

[![GitHub Release](https://img.shields.io/github/v/release/huaweicloud/huaweicloud-sdk-nodejs-v3)](https://github.com/huaweicloud/huaweicloud-sdk-nodejs-v3/releases)
[![License](https://img.shields.io/badge/license-Apache--2.0-green)](https://www.apache.org/licenses/LICENSE-2.0)

欢迎使用华为云 Node.js SDK 。

华为云 Node.js SDK 让您无需关心请求细节即可快速使用弹性云服务器（ECS）、虚拟私有云（VPC）等多个华为云服务。

这里将向您介绍如何获取并使用华为云 Node.js SDK 。

## 使用前提

- 要使用华为云 Node.js SDK ，您需要拥有华为云账号以及该账号对应的 Access Key（AK）和 Secret Access Key（SK）。请在华为云控制台“我的凭证-访问密钥”页面上创建和查看您的 AK&SK
  。更多信息请查看 [访问密钥](https://support.huaweicloud.com/usermanual-ca/zh-cn_topic_0046606340.html) 。

- 要使用华为云 Node.js SDK 访问指定服务的 API
  ，您需要确认已在 [华为云控制台](https://console.huaweicloud.com/console/?locale=zh-cn&region=cn-north-4#/home) 开通当前服务。

- 华为云 Node.js SDK 支持 **Node 10.16.1** 及其以上版本。

## 隐私声明

- 收集信息：
  为完成华为云服务开放API调用的必要校验，SDK需要使用由华为云控制台下载的用户访问密钥（AK）进行签名，该过程不会上传您的私有密钥（SK）。

- 本工具默认会在请求头User-Agent中附加额外信息，附加信息包括客户端调用服务时所使用的SDK语言、客户端库版本、操作系统、时区语言信息和一个随机标识符，上述信息将用于保护您及您的用户的华为云账号安全。您可以通过自定义User-Agent的方式关闭上述行为 。

- 数据处理方式：当您使用本工具提供的服务开放API功能时，您的相关数据（如上传的文件、提交的文本内容）将通过加密传输通道（HTTPS） 直接发送至华为云服务端进行处理。

- 该过程由华为云服务端完成计算、存储或分析，数据不会在本应用客户端本地处理或持久化存储。

- 华为云将根据其服务协议和隐私政策作为数据处理方独立处理这些数据，我们仅作为控制方发起API请求。数据处理结果将返回至本工具供您使用。

- 华为云官方隐私声明：https://www.huaweicloud.com/declaration/sa_prp.html

## SDK 获取和安装

推荐您使用 npm 安装 SDK 。
 
无论您要使用哪个产品/服务的开发工具包，都必须依赖 `@huaweicloud/huaweicloud-sdk-core`。以使用 Vpc SDK为例，您需要安装 `@huaweicloud/huaweicloud-sdk-vpc`：
``` bash
npm install @huaweicloud/huaweicloud-sdk-core
npm install @huaweicloud/huaweicloud-sdk-vpc
```

您可以通过 [SDK中心](https://console.huaweicloud.com/apiexplorer/#/sdkcenter?language=NodeJs) 或 [NPM](https://www.npmjs.com/search?q=huaweicloud-sdk&page=0&perPage=20) 查询SDK版本信息。

## 代码示例

- 使用如下代码查询VPC列表，调用前请根据实际情况替换如下变量：`{your endpoint}`、`{your project id}`

``` javascript
// index.ts
import { ListVpcsRequest, VpcClient } from "@huaweicloud/huaweicloud-sdk-vpc";
import { BasicCredentials } from "@huaweicloud/huaweicloud-sdk-core/auth/BasicCredentials";

// 认证用的 ak 和 sk 硬编码到代码中或者明文存储都有很大的安全风险，建议在配置文件或者环境变量中密文存放，使用时解密，确保安全；
// 本示例以 ak 和 sk 保存在环境变量中来实现身份验证为例，运行本示例前请先在本地环境中设置环境变量 HUAWEICLOUD_SDK_AK 和 HUAWEICLOUD_SDK_SK。
const ak = process.env.HUAWEICLOUD_SDK_AK;
const sk = process.env.HUAWEICLOUD_SDK_SK;
const projectId = '{your project id}';
const endpoint = '{your endpoint}';

const credentials = new BasicCredentials()
  .withAk(ak)
  .withSk(sk)
  .withProjectId(projectId);

const client = VpcClient.newBuilder()
  .withCredential(credentials)
  .withEndpoint(endpoint)
  .build();


(async () => {
  try {
    const request = new ListVpcsRequest();
    const result = await client.listVpcs(request);
    console.log("Result:", JSON.stringify(result, null, 2));
  } catch (error:any) {
    console.error("Exception:", JSON.stringify(error, null, 2));
  }
})();

```

- 示例调试

``` bash
# 添加依赖
npm install -g ts-node typescript

# 运行
ts-node ./index.ts

```

## 在线调试

[API Explorer](https://apiexplorer.developer.huaweicloud.com/apiexplorer/overview)
提供API检索、SDK示例及平台调试，支持全量快速检索、可视化调试、帮助文档查看、在线咨询。

## 变更日志

每个版本的详细更改记录可在 [变更日志](https://github.com/huaweicloud/huaweicloud-sdk-nodejs-v3/blob/master/CHANGELOG_CN.md) 中查看。

## 用户手册 [:top:](#华为云开发者-nodejs-软件开发工具包nodejs-sdk)

* [1. 客户端连接参数](#1-客户端连接参数-top)
    * [1.1 默认配置](#11-默认配置-top)
    * [1.2 网络代理](#12-网络代理-top)
    * [1.3 SSL 配置](#13-ssl-配置-top)
* [2. 认证信息配置](#2-认证信息配置-top)
    * [2.1 使用永久 AK 和 SK](#21-使用永久-ak-和-sk-top)
    * [2.2 使用临时 AK 和 SK](#22-使用临时-ak-和-sk-top)
* [3. 客户端初始化](#3-客户端初始化-top)
    * [3.1 指定云服务 Endpoint 方式](#31-指定云服务-endpoint-方式-top)
    * [3.2 用户代理](#32-用户代理-top)
* [4. 发送请求并查看响应](#4-发送请求并查看响应-top)
* [5. 故障处理](#5-故障处理-top)
    * [5.1 HTTP 监听器](#51-http-监听器-top)

### 1. 客户端连接参数 [:top:](#用户手册-top)

#### 1.1 默认配置 [:top:](#用户手册-top)

``` javascript
// 使用默认配置
const client = VpcClient.newBuilder()
```

#### 1.2 网络代理 [:top:](#用户手册-top)

``` javascript
// 使用代理服务器（可选）
client.withProxyAgent("http://username:password@proxy.huaweicloud.com:8080")
```
   
#### 1.3 SSL 配置 [:top:](#用户手册-top)

``` javascript
// 配置跳过服务端证书验证（可选）
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"
```

### 2. 认证信息配置 [:top:](#用户手册-top)

华为云服务存在两种部署方式，Region 级服务和 Global 级服务。

Global 级服务有 IAM 等。

Region 级服务需要提供 projectId 。

Global 级服务需要提供 domainId 。

**认证参数说明**：

- `ak` - 华为云账号 Access Key
- `sk` - 华为云账号 Secret Access Key
- `projectId` - 云服务所在项目 ID ，根据你想操作的项目所属区域选择对应的项目 ID
- `domainId` - 华为云账号 ID
- `securityToken` - 采用临时 AK&SK 认证场景下的安全票据

客户端认证可以使用永久 AK&SK 认证，也可以使用临时 AK&SK&SecurityToken 认证。

#### 2.1 使用永久 AK 和 SK [:top:](#用户手册-top)
    
``` javascript
// Region级服务   
const basicCredentials = new BasicCredentials()
    .withAk(ak)
    .withSk(sk)
    .withProjectId(projectId)

// Global级服务   
const globalCredentials = new GlobalCredentials()
    .withAk(ak)
    .withSk(sk)
    .withDomainId(domainId)
```

#### 2.2 使用临时 AK 和 SK [:top:](#用户手册-top)
    
首先需要获得临时 AK、SK 和 SecurityToken ，可以从永久 AK&SK 获得，或者通过委托授权获得。

- 通过永久 AK&SK 获得可以参考文档：https://support.huaweicloud.com/api-iam/iam_04_0002.html ，对应 IAM SDK
  中的 `CreateTemporaryAccessKeyByToken` 方法。

- 通过委托授权获得可以参考文档：https://support.huaweicloud.com/api-iam/iam_04_0101.html ，对应 IAM SDK
  中的 `CreateTemporaryAccessKeyByAgency` 方法。

临时 AK&SK&SecurityToken 获取成功后，可使用如下方式初始化认证信息：
    
``` javascript
// Region级服务
const basicCredentials = new BasicCredentials()
    .withAk(ak)
    .withSk(sk)
    .withSecurityToken(securityToken)
    .withProjectId(projectId)

// Global级服务
const globalCredentials = new GlobalCredentials()
    .withAk(ak)
    .withSk(sk)
    .withSecurityToken(securityToken)
    .withDomainId(domainId);
```

### 3. 客户端初始化 [:top:](#用户手册-top)

#### 3.1 指定云服务 Endpoint 方式 [:top:](#用户手册-top)

``` javascript
// 初始化指定云服务的客户端 {Service}Client ，以初始化 VpcClient 为例
const client = VpcClient.newBuilder()
    .withCredential(basicCredentials)
    .withEndpoint(endpoint)
    .withProxyAgent(proxy)
    .build()
```

**说明：**

- `endpoint` 是华为云各服务应用区域和各服务的终端节点，详情请查看 [地区和终端节点](https://developer.huaweicloud.com/endpoint) 。

#### 3.2 用户代理 [:top:](#用户手册-top)

从**3.1.167**版本起，默认会在请求头User-Agent中附加额外信息，用于识别客户端调用服务时所使用的SDK语言、客户端库版本以及平台信息等。 User-Agent包含Java版本、操作系统和时区语言信息，同时会生成一个随机标识符追加到User-Agent信息中。随机标识符会存储在用户主目录下，linux为 `~/.huaweicloud/application_id`，windows为`C:\Users\USER_NAME\.huaweicloud\application_id`。
 
上述信息将用于保护您及您的用户的华为云账号安全。
 
您可以通过自定义User-Agent的方式关闭上述行为，自定义User-Agent信息建议长度不超过50个字符，仅可包含ASCII可打印字符：

``` javascript
// 初始化指定云服务的客户端 {Service}Client ，以初始化 VpcClient 为例
const client = VpcClient.newBuilder()
    .withCredential(basicCredentials)
    .withEndpoint(endpoint)
    .withProxyAgent(proxy)
    .withOptions({
      customUserAgent: "huaweicloud-usdk-java/3.0; test-user-agent",
    })
    .build()
```


### 4. 发送请求并查看响应 [:top:](#用户手册-top)

``` javascript
const result = client.showJobDetail(new ShowJobDetailRequest("id"));
result.then(result => {
    res.send("JSON.stringify(result)::" + JSON.stringify(result))
}).catch(ex => {
    res.send("exception:" + JSON.stringify(ex))
});
```

### 5. 故障处理 [:top:](#用户手册-top)

#### 5.1 HTTP 监听器 [:top:](#用户手册-top)

在某些场景下可能对业务发出的 HTTP 请求进行 Debug ，需要看到原始的 HTTP 请求和返回信息， SDK 提供监听器功能来获取原始的为加密的 HTTP 请求和返回信息。

> :warning:  Warning: 原始信息打印仅在 Debug 阶段使用，请不要在生产系统中将原始的 HTTP 头和 Body 信息打印到日志，这些信息并未加密且其中包含敏感数据，例如所创建虚拟机的密码，IAM 用户的密码等；当 Body 体为二进制内容，即 Content-Type 标识为二进制时，Body 为"***"，详细内容不输出。


设置环境变量 __process.env.DEBUG__，开启Debug日志打印
