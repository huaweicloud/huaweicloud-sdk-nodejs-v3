English | [简体中文](README_CN.md)

# HuaweiCloud NodeJs Software Development Kit (NodeJs SDK)

The HuaweiCloud NodeJs SDK allows you to easily work with Huawei Cloud services such as Elastic Compute Service (ECS) and Virtual Private Cloud (VPC) without the need to handle API related tasks.

This document introduces how to obtain and use HuaweiCloud NodeJs SDK.

## Getting Started

- To use HuaweiCloud NodeJs SDK, you must have Huawei Cloud account as well as the Access Key and Secret key of the HuaweiCloud account.

    The accessKey is required when initializing `{Service}Client`. You can create an AccessKey in the Huawei Cloud console. For more information, see [My Credentials](https://support.huaweicloud.com/usermanual-ca/zh-cn_topic_0046606340.html).

- HuaweiCloud NodeJs SDK requires **Node 10.16.1** or later.

## Install NodeJs SDK

You could obtain and install NodeJs SDK through following methods:

- Installing Dependencies Using NPM (Recommended) 

    Using npm to install project dependencies is the recommended method to use NodeJs SDK:
    
    You must install `@huaweicloud/huaweicloud-sdk-core` library no matter which product/service development kit you need to use. Take using Devstar SDK for example, you need to install `@huaweicloud/huaweicloud-sdk-core` library and `@huaweicloud/huaweicloud-sdk-devstar` library: 
    ``` xml
    npm install @huaweicloud/huaweicloud-sdk-core @huaweicloud/huaweicloud-sdk-devstar
    ```

## Use NodeJs SDK

1. Import the required modules as follows

    ``` nodejs
    // User identity authentication 
    import { BasicCredentials } from "@huaweicloud/huaweicloud-sdk-core/auth/BasicCredentials";
    import { GlobalCredentials } from "@huaweicloud/huaweicloud-sdk-core/auth/GlobalCredentials";
    // {Service}Client, replace Devstar to your specified service, take DevstarClient for example
    import { DevstarClient } from "@huaweicloud/huaweicloud-sdk-devstar/v1/DevstarClient";
    // Import the corresponding product model
    import { ShowJobDetailRequest } from '@huaweicloud/huaweicloud-sdk-devstar/v1/model/ShowJobDetailRequest';
    ```

2. Config the `{Service}Client` configurations

    2.1 Use default configuration
    
    ``` nodejs
    // Use default configuration
    const client = DevstarClient.newBuilder()
    ```
   
    2.2  Proxy(Optional)

    ``` nodejs
    // Use proxy if needed
    client.withProxyAgent("http://proxy.huaweicloud.com")
    ```
    2.3 SSL Certification(Optional)

    ``` nodejs
    // Skip ssl certification checking while using https protocol if needed
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"
    ```
   
3. Initialize Credentials

    3.1 Use permanent AK/SK
    
    ``` nodejs
    // Regional Services   
    const basicCredentials = new BasicCredentials()
        .withAk('ak')
        .withSk('sk')
        .withProjectId('projectId')
   
    // Global Services   
   const globalCredentials = new GlobalCredentials()
       .withAk('ak')
       .withSk('sk')
       .withDomainId('domainId')
    ```

    **where:**

    For project services, you only need to provide projectId, domainId is optional. While using global services, projectId must be null, and domainId should be filled in according to the actual situation. Global services only contains IAM(Identity and Access Management) currently.

    - `ak` is the access key ID for your account.
    - `sk` is the secret access key for your account.
    - `projectId` is the ID of your project depending on your region which you want to operate.
    - `domainId` is the account ID of huawei cloud.
    
    3.2 Use temporary AK/SK
    
    It's preferred to obtain temporary access key, security key and security token first, which could be obtained through permanent access key and security key or through an agency.
    
    Obtaining a temporary access key token through permanent access key and security key, you could refer to document: https://support.huaweicloud.com/en-us/api-iam/iam_04_0002.html . The API mentioned in the document above corresponds to the method of createTemporaryAccessKeyByToken in IAM SDK.
    
    Obtaining a temporary access key and security token through an agency, you could refer to document: https://support.huaweicloud.com/en-us/api-iam/iam_04_0101.html . The API mentioned in the document above corresponds to the method of createTemporaryAccessKeyByAgency in IAM SDK.
    
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
            .withDomainId('domainId')

4. Initialize the {Service}Client instance

    ``` nodejs
    const client = DevstarClient.newBuilder()
        .withCredential(basicCredentials)
        .withEndpoint(endpoint)
        .withProxyAgent(proxy)
        .build()
    ```

    **where:**
    - `endpoint` is the service specific endpoints, see [Regions and Endpoints](https://developer.huaweicloud.com/intl/en-us/endpoint).

5. Send a request and print response

    ``` nodejs
    const result = client.showJobDetail(new ShowJobDetailRequest("id"));
    result.then(result => {
        res.send("JSON.stringify(result)::" + JSON.stringify(result))
    }).catch(ex => {
        res.send("exception:" + JSON.stringify(ex))
    });
    ```

6. Exceptions

    | Level 1 | Notice | Level 2 | Notice |
    | :---- | :---- | :---- | :---- |
    | ConnectionException | Connection error | HostUnreachableException | Host is not reachable |
    | | | SslHandShakeException | SSL certification error |
    | RequestTimeoutException | Request timeout | CallTimeoutException | timeout for single request |
    | | | RetryOutageException | no response after retrying |
    | ServiceResponseException | service response error | ServerResponseException | server inner error, http status code: [500,] |
    | | | ClientRequestException | invalid request, http status code: [400? 500) |

    ``` nodejs
    if (httpStatusCode >= 400 && httpStatusCode < 500) {
        return new ClientRequestException(httpStatusCode, errorData);
    } else if (httpStatusCode >= 500 && httpStatusCode < 600) {
        return new ServerResponseException(httpStatusCode, errorData);
    } else {
        return new ServiceResponseException(httpStatusCode, errorData);
    }
    ```
   
7. Access Log

    The SDK will print the access log by default, every request will be recorded in console like:

    ``` shell
    16:53:04.905 [main] INFO HuaweiCloud-SDK-Access - "GET https://ecs.cn-southwest-2.myhuaweicloud.com/v1/077d6a6c19000fdd2f3bc00150080291/cloudservers/detail?offset=1&limit=25" 200 2251 deabe20c14f997a0291fc451a4da16a4
    16:53:06.212 [main] INFO HuaweiCloud-SDK-Access - "PUT https://ecs.cn-southwest-2.myhuaweicloud.com/v1/077d6a6c19000fdd2f3bc00150080291/cloudservers/1aeac6fb-a2f2-48dc-9052-36637d119dd3" 200 880 f16f70e3fe245c11ab741760f8689a01
    17:02:37.734 [main] INFO HuaweiCloud-SDK-Access - "GET https://ecs.cn-southwest-2.myhuaweicloud.com/v1/077d6a6c19000fdd2f3bc00150080291/cloudservers/detail?offset=1&limit=-1" 400 165 8c3c8b6fed4482d28e1929a78dc93f04
    ```

    SDK access log name is "HuaweiCloud-SDK-Access", and out log format is:

    ``` text
    "{httpMethod} {uri}" {httpStatusCode} {responseContentLength} {requestId}
    ```

    **Where:**
    - `requestId` is the ID returned by HuaweiCloud API Gateway, which can be used for user guarantee or issue tracking.

    You can shield access log in the log configuration depending on your project, or print access log to an independent file.

8. Original HTTP Listener

    In some situation, you may need to debug your http requests, original http request and response information will be needed. The SDK provides a listener function to obtain the original encrypted http request and response information.

    > :warning:  Warning: The original http log information are used in debugging stage only, please do not print the original http header or body in the production environment. These log information are not encrypted and contain sensitive data such as the password of your ECS virtual machine or the password of your IAM user account, etc. When the response body is binary content, the body will be printed as "***" without detailed information.

    Set the environment variable process.env.NODE_DEBUG or process.env.DEBUG to enable debug log printing.
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


## Code Example

- The following example shows how to query job detail, you need to substitute your real `{Service}Client` for `DevstarClient` in actual use.
- Substitute the values for `{your ak string}`, `{your sk string}`, `{your endpoint string}`, `{your project id}`and `{job id}`.

    ``` nodejs
    import express = require('express');
    import { DevstarClient } from "@huaweicloud/huaweicloud-sdk-devstar/v1/DevstarClient";
    import { BasicCredentials } from "@huaweicloud/huaweicloud-sdk-core/auth/BasicCredentials";
    import { ShowJobDetailRequest } from '@huaweicloud/huaweicloud-sdk-devstar/v1/model/ShowJobDetailRequest';
    
    // Create a new express application instance
    const app: express.Application = express();
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
    app.get('/', function (req: any, res: { send: (arg0: string) => void; }) {
      const client = DevstarClient.newBuilder()
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
- Debugging Procedure 
 
   ``` nodejs
   Run command：
    npm install ts-node-dev
    npm install express
    npm install typescript
   Add scripts：
    "dev": "ts-node-dev ./index.ts"
   Run command：
    npm run dev
   Local browser access: http://localhost:3000/
   ```