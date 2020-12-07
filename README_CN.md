[English](./README.md) | 简体中文

# 华为云  Node.js 软件开发工具包（Node.js SDK）

欢迎使用华为云 Node.js SDK。

华为云 Node.js SDK 让您无需关心请求细节即可快速使用云服务器、虚拟私有云等多个华为云服务。

这里将向您介绍如何获取并使用华为云 Node.js SDK。

## 在线示例

[API Explorer](https://apiexplorer.developer.huaweicloud.com/apiexplorer/overview) 提供API检索及平台调试，支持全量快速检索、可视化调试、帮助文档查看、在线咨询。

## 现在开始

- 要使用华为云 Node.js SDK，您需要拥有华为云账号以及该账号对应的 Access Key（AK）和 Secret Access Key（SK）。请在华为云控制台“我的凭证-访问密钥”页面上创建和查看您的 AKSK。更多信息请查看[访问密钥]( https://support.huaweicloud.com/usermanual-ca/zh-cn_topic_0046606340.html )。
- 华为云 Node.js SDK 支持 **Node 10.16.1** 及其以上版本。

## SDK 获取和安装

您可以通过如下方式获取和安装 SDK：

- 通过 npm 安装依赖（推荐）

    通过 npm 安装项目依赖是使用 Node.js SDK 的推荐方法
    
    无论您要使用哪个产品/服务的开发工具包，都必须依赖@huaweicloud/huaweicloud-sdk-core。以使用虚拟私有云Devstar SDK为例，您需要安装@huaweicloud/huaweicloud-sdk-devstar：
    ``` xml
    npm install @huaweicloud/huaweicloud-sdk-devstar
    ```

### 开始使用

1. 导入依赖模块：

    ``` nodejs
    // 用户身份认证
    import { BasicCredentials } from "@huaweicloud/huaweicloud-sdk-core/auth/BasicCredentials";
    import { GlobalCredentials } from "@huaweicloud/huaweicloud-sdk-core/auth/GlobalCredentials";
    // 导入指定云服务的 {Service}Client，此处以 DevStarClient 为例
    import { DevStarClient } from "@huaweicloud/huaweicloud-sdk-devstar/v1/DevStarClient";
    // 导入相应产品的 model
    import { ShowJobDetailRequest } from '@huaweicloud/huaweicloud-sdk-devstar/v1/model/ShowJobDetailRequest';
    ```

2. 配置客户端属性

    2.1 默认配置

    ``` nodejs
    // 使用默认配置
    const client = DevStarClient.newBuilder()
    ```

    2.2 代理配置（可选）

    ``` nodejs
    // 使用代理服务器（可选）
    client.withProxyAgent("http://username:password@proxy.huaweicloud.com")
    ```
   
    2.3 SSL配置（可选）

    ``` nodejs
    // 配置跳过服务端证书验证（可选）
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"
    ```

3. 初始化认证信息

    3.1 使用永久AK/SK
    
    ``` nodejs
    // Region级服务   
    const basicCredentials = new BasicCredentials()
        .withAk('ak')
        .withSk('sk')
        .withProjectId('projectId')
   
    // Global级服务   
    const globalCredentials = new GlobalCredentials()
        .withAk('ak')
        .withSk('sk')
        .withDomainId('domainId')
    ```

    **说明**：

    非全局服务仅需要提供 projectId ， domainId 无需提供。全局服务 projectId 必须为 null ， domainId 请按照实际情况填写。全局服务当前仅支持 IAM 。

    - `ak` 华为云账号 Access Key 。
    - `sk` 华为云账号 Secret Access Key 。
    - `projectId` 云服务所在项目 ID ，根据你想操作的项目所属区域选择对应的项目 ID 。
    - `domainId` 华为云账号ID 。
    
    3.2 使用临时AK/SK
    
    首选需要获得临时AK、SK和SecurityToken，获取可以从永久AK/SK获得，或者通过委托授权首选获得
    
    通过永久AK/SK获得可以参考文档：https://support.huaweicloud.com/api-iam/iam_04_0002.html, 对应IAM SDK 中的createTemporaryAccessKeyByToken方法。
    
    通过委托授权获得可以参考文档：https://support.huaweicloud.com/api-iam/iam_04_0101.html, 对应IAM SDK 中的createTemporaryAccessKeyByAgency方法。
    
    ``` nodejs
        // Region级服务
        const basicCredentials = new BasicCredentials()
            .withAk('ak')
            .withSk('sk')
            .withSecurityToken('securityToken')
            .withProjectId('projectId')
       
        // Global级服务
        const globalCredentials = new GlobalCredentials()
            .withAk('ak')
            .withSk('sk')
            .withSecurityToken('securityToken')
            .withDomainId('domainId');
        ```

4. 初始化客户端

    ``` nodejs
    // 初始化指定云服务的客户端 {Service}Client ，以初始化 DevStarClient 为例
    const client = DevStarClient.newBuilder()
        .withCredential(basicCredentials)
        .withEndpoint(endpoint)
        .withProxyAgent(proxy)
        .build()
    ```

    **说明：**
    - `endpoint` 华为云各服务应用区域和各服务的终端节点，详情请查看[地区和终端节点](https://developer.huaweicloud.com/endpoint)。

5. 发送请求并查看响应

    ``` nodejs
    const result = client.showJobDetail(new ShowJobDetailRequest("id"));
    result.then(result => {
        res.send("JSON.stringify(result)::" + JSON.stringify(result))
    }).catch(ex => {
        res.send("exception:" + JSON.stringify(ex))
    });
    ```

6. 异常处理

    | 一级分类 | 一级分类说明 | 二级分类 | 二级分类说明 |
    | :---- | :---- | :---- | :---- |
    | ConnectionException | 连接类异常 | HostUnreachableException | 网络不可达、被拒绝 |
    | | | SslHandShakeException | SSL认证异常 |
    | RequestTimeoutException | 响应超时异常 | CallTimeoutException | 单次请求，服务器处理超时未返回 |
    | | | RetryOutageException | 在重试策略消耗完成已后，仍无有效的响应 |
    | ServiceResponseException | 服务器响应异常 | ServerResponseException | 服务端内部错误，Http响应码：[500,] |
    | | | ClientRequestException | 请求参数不合法，Http响应码：[400， 500) |

    ``` nodejs
    // 异常处理
    if (httpStatusCode >= 400 && httpStatusCode < 500) {
        return new ClientRequestException(httpStatusCode, errorData);
    } else if (httpStatusCode >= 500 && httpStatusCode < 600) {
        return new ServerResponseException(httpStatusCode, errorData);
    } else {
        return new ServiceResponseException(httpStatusCode, errorData);
    }
    ```

7. 访问日志
   SDK默认会打印访问日志，每次请求都会有一条记录：

   ``` shell
   16:53:04.905 [main] INFO HuaweiCloud-SDK-Access - "GET https://ecs.cn-southwest-2.myhuaweicloud.com/v1/077d6a6c19000fdd2f3bc00150080291/cloudservers/detail?offset=1&limit=25" 200 2251 deabe20c14f997a0291fc451a4da16a4
   16:53:06.212 [main] INFO HuaweiCloud-SDK-Access - "PUT https://ecs.cn-southwest-2.myhuaweicloud.com/v1/077d6a6c19000fdd2f3bc00150080291/cloudservers/1aeac6fb-a2f2-48dc-9052-36637d119dd3" 200 880 f16f70e3fe245c11ab741760f8689a01
   17:02:37.734 [main] INFO HuaweiCloud-SDK-Access - "GET https://ecs.cn-southwest-2.myhuaweicloud.com/v1/077d6a6c19000fdd2f3bc00150080291/cloudservers/detail?offset=1&limit=-1" 400 165 8c3c8b6fed4482d28e1929a78dc93f04
   ```

   日志名称为"HuaweiCloud-SDK-Access", 日志格式为:

   ``` text
   "{httpMethod} {uri}" {httpStatusCode} {responseContentLength} {requestId}
   ```

   其中requestId是华为云APIG返回的请求ID，可以用户保障或者问题跟踪。

   可以根据项目情况在对应的日志配置文件中对访问日志进行屏蔽，或者单独打印到独立文件中。

8. 原始Http侦听器

    在某些场景下可能对业务发出的Http请求进行Debug，需要看到原始的Http请求和返回信息，SDK提供侦听器功能来获取原始的为加密的Http请求和返回信息。

    > :warning:  Warning: 原始信息打印仅在debug阶段使用，请不要在生产系统中将原始的Http头和Body信息打印到日志，这些信息并未加密且其中包含敏感数据，例如所创建虚拟机的密码，IAM用户的密码等;
    当Body体为二进制内容,即Content-Type标识为二进制时 body为"***",详细内容不输出。

    设置环境变量 process.env.NODE_DEBUG 或 process.env.DEBUG，开启Debug日志打印
    ``` nodejs
    if (process.env.NODE_DEBUG === 'axios' || process.env.DEBUG) {
        this.axiosInstance.interceptors.request.use((config: any) => {
            logger.debug('Request:');
            try {
                logger.debug(JSON.stringify(config, null, 2));
            } catch {
                logger.error(config)
            }

            return config;
        }, (error: any) => {
            logger.error('Error: ');
            try {
                logger.error(JSON.stringify(error, null, 2));
            } catch {
                logger.error(error);
            }
            // @ts-ignore
            return Promise.reject(error);
        });

        this.axiosInstance.interceptors.response.use((response: any) => {
            logger.debug('Response:');
            try {
                logger.debug(JSON.stringify(response, null, 2));
            } catch {
                logger.error(response);
            }

            return response;
        }, (error: any) => {
            logger.error('Error: ');
            try {
                logger.error(JSON.stringify(error, null, 2));
            } catch {
                logger.error(error);
            }
            // @ts-ignore
            return Promise.reject(error);
        });
    }
    ```

## 代码实例

- 使用如下代码同步查询任务详情，调用前请根据实际情况替换如下变量： `{your ak string}`、`{your sk string}`、`{your endpoint string}`、`{your project id}`以及`{job id}`

    ``` nodejs
    import express = require('express');
    import { DevStarClient } from "@huaweicloud/huaweicloud-sdk-devstar/v1/DevStarClient";
    import { BasicCredentials } from "@huaweicloud/huaweicloud-sdk-core/auth/BasicCredentials";
    import { ShowJobDetailRequest } from '@huaweicloud/huaweicloud-sdk-devstar/v1/model/ShowJobDetailRequest';
    
    // Create a new express application instance
    const app: express.Application = express();
    app.get('/', function (req: any, res: { send: (arg0: string) => void; }) {
      const client = DevStarClient.newBuilder()
          .withCredential(new BasicCredentials()
              .withAk("{your ak string}")
              .withSk("{your sk string}")
              .withProjectId("{your project id}"))
          .withEndpoint("{your endpoint string}")
          .withProxyAgent("")
          .build();
       
          
      const result = client.showJobDetail(new ShowJobDetailRequest("{job id}"));
      result.then(result => {
        res.send("JSON.stringify(result)::" + JSON.stringify(result))
      }).catch(ex => {
        res.send("exception:" + JSON.stringify(ex))
      });
    });
    app.listen(3000, function () {
      console.log('Example app listening on port 3000!');
    });
    ```
 - 调试步骤
 
   ``` nodejs
   执行命令：
    npm install ts-node-dev
    npm install express
    npm install typescript
   添加scripts：
    "dev": "ts-node-dev ./index.ts"
   执行命令：
    npm run dev
   本地浏览器访问：http://localhost:3000/
   ```