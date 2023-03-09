English | [简体中文](README_CN.md)

<p align="center">
<a href="https://www.huaweicloud.com/"><img width="450px" height="102px" src="https://console-static.huaweicloud.com/static/authui/20210202115135/public/custom/images/logo-en.svg"></a>
</p>

<h1 align="center">Huawei Cloud Node.js Software Development Kit (Node.js SDK)</h1>

The Huawei Cloud Node.js SDK allows you to easily work with Huawei Cloud services such as Elastic Compute Service (ECS)
and Virtual Private Cloud (VPC) without the need to handle API related tasks.

This document introduces how to obtain and use Huawei Cloud Node.js SDK.

## Requirements

- To use Huawei Cloud Node.js SDK, you must have Huawei Cloud account as well as the Access Key (AK) and Secret key (SK) of the
  Huawei Cloud account. You can create an Access Key in the Huawei Cloud console. For more information,
  see [My Credentials](https://support.huaweicloud.com/en-us/usermanual-ca/en-us_topic_0046606340.html).

- To use Huawei Cloud Node.js SDK to access the APIs of specific service, please make sure you do have activated the
  service in [Huawei Cloud console](https://console.huaweicloud.com/?locale=en-us) if needed.

- Huawei Cloud Node.js SDK requires **Node 10.16.1** or later.

## Install Node.js SDK

The recommended way to install SDK is with npm.

You must depended on `@huaweicloud/huaweicloud-sdk-core` library no matter which product/service development kit you
need to use. Take using VPC SDK for example, you need to install `@huaweicloud/huaweicloud-sdk-vpc` library:

``` bash
npm install @huaweicloud/huaweicloud-sdk-core
npm install @huaweicloud/huaweicloud-sdk-vpc
```

## Code Example

- The following example shows how to query vpcs, you need to substitute your real `{Service}Client`
  for `VpcClient` in actual use.
- Substitute the values for `{your ak string}`, `{your sk string}`, `{your endpoint}`, `{your project id}`.

``` javascript
// index.ts
import { ListVpcsRequest, VpcClient } from "@huaweicloud/huaweicloud-sdk-vpc";
import { BasicCredentials } from "@huaweicloud/huaweicloud-sdk-core/auth/BasicCredentials";

const ak = '{your ak string}';
const sk = '{your sk string}';
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

- Debug the example above

``` bash
# Add npm dependencies
npm install -g ts-node typescript

# Run the command
ts-node ./index.ts

```

## Online Debugging

[API Explorer](https://apiexplorer.developer.intl.huaweicloud.com/apiexplorer/overview) provides api retrieval and online debugging, supports full fast retrieval, visual debugging, help document viewing, and online consultation.

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
const client = VpcClient.newBuilder()
```

#### 1.2 Network Proxy [:top:](#user-manual-top)

``` javascript
// Use proxy if needed
client.withProxyAgent("http://username:password@proxy.huaweicloud.com:8080")
```

#### 1.3 SSL Certification [:top:](#user-manual-top)

``` javascript
// Skip SSL certification checking while using https protocol if needed
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"
```

### 2. Credentials Configuration [:top:](#user-manual-top)

There are two types of Huawei Cloud services, `regional` services and `global` services.

Global-level services include IAM, etc.

For `Regional` services' authentication, projectId is required. 

For `global` services' authentication, domainId is required.

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

It's required to obtain temporary AK&SK and security token first, which could be obtained through
permanent AK&SK or through an agency.

- Obtaining a temporary access key and security token through token, you could refer to
document: https://support.huaweicloud.com/en-us/api-iam/iam_04_0002.html . The API mentioned in the document above
corresponds to the method of `CreateTemporaryAccessKeyByToken` in IAM SDK.

- Obtaining a temporary access key and security token through an agency, you could refer to
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
const client = VpcClient.newBuilder()
    .withCredential(basicCredentials)
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
