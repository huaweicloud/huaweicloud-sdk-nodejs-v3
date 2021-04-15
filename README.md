English | [简体中文](README_CN.md)

<p align="center">
<a href="https://www.huaweicloud.com/"><img width="450px" height="102px" src="https://console-static.huaweicloud.com/static/authui/20210202115135/public/custom/images/logo-en.svg"></a>
</p>

<h1 align="center">Huawei Cloud Node.js Software Development Kit (Node.js SDK)</h1>

The Huawei Cloud Node.js SDK allows you to easily work with Huawei Cloud services such as Elastic Compute Service (ECS)
and Virtual Private Cloud (VPC) without the need to handle API related tasks.

This document introduces how to obtain and use Huawei Cloud Node.js SDK.

## Requirements

- To use Huawei Cloud Node.js SDK, you must have Huawei Cloud account as well as the Access Key and Secret key of the
  Huawei Cloud account. You can create an Access Key in the Huawei Cloud console. For more information,
  see [My Credentials](https://support.huaweicloud.com/en-us/usermanual-ca/en-us_topic_0046606340.html).

- To use Huawei Cloud Node.js SDK to access the APIs of specific service, please make sure you do have activated the
  service in [Huawei Cloud console](https://console.huaweicloud.com/?locale=en-us) if needed.

- Huawei Cloud Node.js SDK requires **Node 10.16.1** or later.

## Install Node.js SDK

The recommended way to install SDK is with npm.

You must depended on `@huaweicloud/huaweicloud-sdk-core` library no matter which product/service development kit you
need to use. Take using Devstar SDK for example, you need to install `@huaweicloud/huaweicloud-sdk-devstar` library:

``` bash
npm install @huaweicloud/huaweicloud-sdk-core
npm install @huaweicloud/huaweicloud-sdk-devstar
```

## Code Example

- The following example shows how to query job detail, you need to substitute your real `{Service}Client`
  for `DevStarClient` in actual use.
- Substitute the values for `{your ak string}`, `{your sk string}`, `{your endpoint}`, `{your domain id}`
  and `{your job id}`.

``` javascript
import express = require('express');
import { DevStarClient } from "@huaweicloud/huaweicloud-sdk-devstar/v1/DevStarClient";
import { GlobalCredentials } from "@huaweicloud/huaweicloud-sdk-core/auth/GlobalCredentials";
import { ShowJobDetailRequest } from '@huaweicloud/huaweicloud-sdk-devstar/v1/model/ShowJobDetailRequest';

// Create a new express application instance
const app: express.Application = express();
app.get('/', function (req: any, res: { send: (arg0: string) => void; }) {
    const client = DevStarClient.newBuilder()
        .withCredential(new GlobalCredentials()
            .withAk("{your ak string}")
            .withSk("{your sk string}")
            .withProjectId("{your project id}"))
        .withEndpoint("{your endpoint}")
        .withProxyAgent("")
        .build();

    const result = client.showJobDetail(new ShowJobDetailRequest("{your job id}"));
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

- Debug the example above

``` bash
# Run command：
npm install ts-node-dev
npm install express
npm install typescript
# Add scripts：
"dev": "ts-node-dev ./index.ts"
# Run command：
npm run dev
# After commands above completed, you could enter `http://localhost:3000/` in your broswer to check the response
```

## Changelog

Detailed changes for each released version are documented in
the [CHANGELOG.md](https://github.com/huaweicloud/huaweicloud-sdk-nodejs-v3/blob/master/CHANGELOG.md).

## User Manual [:top:](#huawei-cloud-nodejs-software-development-kit-nodejs-sdk)

* [1. Client Configuration](#1-client-configuration-top)
    * [1.1  Default Configuration](#11-default-configuration-top)
    * [1.2  Network Proxy](#12-network-proxy-top)
    * [1.3  SSL Certification](#13-ssl-certification-top)
* [2. Credentials Configuration](#2-credentials-configuration-top)
    * [2.1  Use Permanent AK&SK](#21-use-permanent-aksk-top)
    * [2.2  Use Temporary AK&SK](#22-use-temporary-aksk-top)
* [3. Client Initialization](#3-client-initialization-top)
    * [3.1  Initialize client with specified Endpoint](#31-initialize-the-serviceclient-with-specified-endpoint-top)
* [4. Send Request and Handle response](#4-send-requests-and-handle-responses-top)
* [5. Troubleshooting](#5-troubleshooting-top)
    * [5.1  Original HTTP Listener](#51-original-http-listener-top)

### 1. Client Configuration [:top:](#user-manual-top)

#### 1.1 Default Configuration [:top:](#user-manual-top)

``` javascript
// Use default configuration
const client = DevStarClient.newBuilder()
```

#### 1.2 Network Proxy [:top:](#user-manual-top)

``` javascript
// Use proxy if needed
client.withProxyAgent("http://username:password@proxy.huaweicloud.com:8080")
```

#### 1.3 SSL Certification [:top:](#user-manual-top)

``` javascript
// Skip ssl certification checking while using https protocol if needed
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"
```

### 2. Credentials Configuration [:top:](#user-manual-top)

There are two types of Huawei Cloud services, `regional` services and `global` services.

Global services contain DevStar, IAM.

For `Regional` services' authentication, projectId is required. For `global` services' authentication, domainId is
required.

`Parameter description`:

- `ak` is the access key ID for your account.
- `sk` is the secret access key for your account.
- `projectId` is the ID of your project depending on your region which you want to operate.
- `domainId` is the account ID of HUAWEI CLOUD.
- `securityToken` is the security token when using temporary AK/SK.

You could use permanent AK plus SK **or** use temporary AK plus SK plus SecurityToken to complete credentials'
configuration.

#### 2.1 Use Permanent AK&SK [:top:](#user-manual-top)

``` javascript
// Regional Services
const basicCredentials = new BasicCredentials()
    .withAk(ak)
    .withSk(sk)
    .withProjectId(projectId)

// Global Services
const globalCredentials = new GlobalCredentials()
    .withAk(ak)
    .withSk(sk)
    .withDomainId(domainId)
```

#### 2.2 Use Temporary AK&SK [:top:](#user-manual-top)

It's required to obtain temporary access key, security key and security token first, which could be obtained through
permanent access key and security key or through an agency.

Obtaining a temporary access key token through permanent access key and security key, you could refer to
document: https://support.huaweicloud.com/en-us/api-iam/iam_04_0002.html . The API mentioned in the document above
corresponds to the method of `CreateTemporaryAccessKeyByToken` in IAM SDK.

Obtaining a temporary access key and security token through an agency, you could refer to
document: https://support.huaweicloud.com/en-us/api-iam/iam_04_0101.html . The API mentioned in the document above
corresponds to the method of `CreateTemporaryAccessKeyByAgency` in IAM SDK.

``` javascript
// Regional Services
const basicCredentials = new BasicCredentials()
    .withAk(ak)
    .withSk(sk)
    .withSecurityToken(securityToken)
    .withProjectId(projectId)

// Global Services
const globalCredentials = new GlobalCredentials()
    .withAk(ak)
    .withSk(sk)
    .withSecurityToken(securityToken)
    .withDomainId(domainId)
```

### 3. Client Initialization [:top:](#user-manual-top)

#### 3.1 Initialize the {Service}Client with specified Endpoint [:top:](#user-manual-top)

``` javascript
const client = DevStarClient.newBuilder()
    .withCredential(globalCredentials)
    .withEndpoint(endpoint)
    .withProxyAgent(proxy)
    .build()
```

**where:**

- `endpoint` varies with services and regions,
  see [Regions and Endpoints](https://developer.huaweicloud.com/intl/en-us/endpoint) to obtain correct endpoint.

### 4. Send Requests and Handle Responses [:top:](#user-manual-top)

``` javascript
const result = client.showJobDetail(new ShowJobDetailRequest("id"));
result.then(result => {
    res.send("JSON.stringify(result)::" + JSON.stringify(result))
}).catch(ex => {
    res.send("exception:" + JSON.stringify(ex))
});
```

### 5. Troubleshooting [:top:](#user-manual-top)

#### 5.1 Original HTTP Listener [:top:](#user-manual-top)

In some situation, you may need to debug your http requests, original http request and response information will be
needed. The SDK provides a listener function to obtain the original encrypted http request and response information.

> :warning:  Warning: The original http log information is used in debugging stage only, please do not print the original http header or body in the production environment. This log information is not encrypted and contains sensitive data such as the password of your ECS virtual machine, or the password of your IAM user account, etc. When the response body is binary content, the body will be printed as "***" without detailed information.

Set the environment variable __process.env.DEBUG__ to enable debug log printing.
