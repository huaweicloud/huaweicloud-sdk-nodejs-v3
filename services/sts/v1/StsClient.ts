import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { AssumeAgencyReqBody } from './model/AssumeAgencyReqBody';
import { AssumeAgencyRequest } from './model/AssumeAgencyRequest';
import { AssumeAgencyResponse } from './model/AssumeAgencyResponse';
import { AssumeAgencyWithOIDCReqBody } from './model/AssumeAgencyWithOIDCReqBody';
import { AssumeAgencyWithOIDCRequest } from './model/AssumeAgencyWithOIDCRequest';
import { AssumeAgencyWithOIDCResponse } from './model/AssumeAgencyWithOIDCResponse';
import { AssumeAgencyWithSAMLReqBody } from './model/AssumeAgencyWithSAMLReqBody';
import { AssumeAgencyWithSAMLRequest } from './model/AssumeAgencyWithSAMLRequest';
import { AssumeAgencyWithSAMLResponse } from './model/AssumeAgencyWithSAMLResponse';
import { AssumedAgencyDto } from './model/AssumedAgencyDto';
import { AssumedAgencyWithFederationDto } from './model/AssumedAgencyWithFederationDto';
import { CredentialsDto } from './model/CredentialsDto';
import { DecodeAuthorizationMessageReq } from './model/DecodeAuthorizationMessageReq';
import { DecodeAuthorizationMessageRequest } from './model/DecodeAuthorizationMessageRequest';
import { DecodeAuthorizationMessageResponse } from './model/DecodeAuthorizationMessageResponse';
import { GetCallerIdentityRequest } from './model/GetCallerIdentityRequest';
import { GetCallerIdentityResponse } from './model/GetCallerIdentityResponse';
import { TagDto } from './model/TagDto';
import { TagKeyDto } from './model/TagKeyDto';

export class StsClient {
    public static newBuilder(): ClientBuilder<StsClient> {
            let client = new ClientBuilder<StsClient>(newClient);
            return client;
    }

    private hcClient: HcClient;
    public constructor(client: HcClient) {
        this.hcClient = client;
    }

    public getPath() {
        return __dirname;
    }


    /**
     * 通过委托或者信任委托获取临时安全凭证，临时安全凭证可用于对云资源发起访问。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 通过委托或者信任委托获取临时安全凭证
     * @param {AssumeAgencyReqBody} assumeAgencyReqBody 
     * @param {string} [xSecurityToken] **参数解释**： 临时安全凭证的security_token字段。  **约束限制**： 通过临时安全凭证调用接口时，需要提供“X-Security-Token”Http头。  **取值范围**： 不涉及。  **默认取值**： 不涉及。 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public assumeAgency(assumeAgencyRequest?: AssumeAgencyRequest): Promise<AssumeAgencyResponse> {
        const options = ParamCreater().assumeAgency(assumeAgencyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 为通过 OIDC 身份提供商令牌验证的用户返回一组临时安全凭证。此操作提供了一种机制，可以让外部的任何兼容 OIDC 身份提供商使用信任委托的临时安全凭证华为云访问，而无需使用 IAM 用户的凭证。
     * 
     * **会话持续时间：**
     * 默认情况下，通过 AssumeAgencyWithOIDC 创建的临时安全凭证有效期为一小时。您可以使用可选的 duration_seconds 参数来指定会话的持续时间，duration_seconds 取值范围是从 900 秒（15 分钟）到该信任委托设置的最大会话持续时长，最大会话持续时长的取值范围可以从 1 小时到 12 小时。注意：委托链会将您的会话持续时间限制为最多一小时，当您使用 AssumeAgency API 操作来进行委托链的切换时，如果您提供了大于一小时的 duration_seconds 参数值，该操作将会失败。
     * 
     * **权限：**
     * 调用 AssumeAgencyWithOIDC 不需要使用华为云凭证。调用者的身份是通过使用您 JWKS 端点中的公钥进行验证的。
     * 您可以使用 policy 和 policy_ids 参数传递自定义策略和已有的身份策略来限制本次会话获得的临时安全凭证的权限范围，最终获得临时安全凭证的权限是 policy 和 policy_ids 与信任委托身上附加的身份策略的交集。
     * 
     * **标签：**
     * 在信任委托的信任策略中添加了 sts::tagSession 授权项时，您可以配置您的身份提供商，将属性作为会话标签传递到您的 ID Token 中。每个会话标签由一个键（Key）和一个值（Value）组成。您最多可以传递 20 个会话标签。纯文本形式的会话标签键不得超过 128 个字符，值不得超过 255 个字符。您也可以传递与信任委托身上标签同名的会话标签，此时会话标签会覆盖具有相同键的信任委托标签。您可以将会话标签设置为可传递的 (Transitive)，可传递的会话标签在角色链期间会持续保留。
     * 
     * **身份：**
     * 在您的应用程序可以调用 AssumeAgencyWithOIDC 之前，您必须使用您的账号在 IAM 中创建 OIDC 提供商和信任委托，并在信任委托的信任策略中指定该 OIDC 提供商，然后还需要配置您的 OIDC 身份提供商以颁发 IAM 所需的 ID Token。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 通过使用OIDC协议SSO的信任委托获取临时安全凭证
     * @param {AssumeAgencyWithOIDCReqBody} assumeAgencyWithOIDCReqBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public assumeAgencyWithOIDC(assumeAgencyWithOIDCRequest?: AssumeAgencyWithOIDCRequest): Promise<AssumeAgencyWithOIDCResponse> {
        const options = ParamCreater().assumeAgencyWithOIDC(assumeAgencyWithOIDCRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 为通过 SAML 身份验证响应（SAML Authentication Response）验证的用户返回一组临时安全凭证。此操作提供了一种机制，可以让外部的 SAML 身份提供商使用信任委托的临时安全凭证华为云访问，而无需使用 IAM 用户的凭证。
     * 
     * **会话持续时间：**
     * 默认情况下，通过 AssumeAgencyWithSAML 创建的临时安全凭证有效期为一小时。您可以使用可选的 duration_seconds 参数或者 SAML 身份验证响应中 SessionNotOnOrAfter 值和 SessionDuration 值来指定会话的持续时间，最终的会话持续时间以三者中较短的一个为准，且会话的持续时间不能超过委托设置的最大会话时长限制。duration_seconds 取值范围是从 900 秒（15 分钟）到该信任委托设置的最大会话持续时长，最大会话持续时长的取值范围可以从 1 小时到 12 小时。注意：委托链会将您的会话持续时间限制为最多一小时，当您使用 AssumeAgency API 操作来进行委托链的切换时，如果您提供了大于一小时的 duration_seconds 参数值，该操作将会失败。
     * 
     * **权限：**
     * 调用 AssumeAgencyWithSAML 不需要使用华为云凭证。调用者的身份是通过使用您上传的 SAML 提供商元数据文档中的密钥进行验证的。
     * 您可以使用 policy 和 policy_ids 参数传递自定义策略和已有的身份策略来限制本次会话获得的临时安全凭证的权限范围，最终获得临时安全凭证的权限是 policy 和 policy_ids 与信任委托身上附加的身份策略的交集。
     * 
     * **标签：**
     * 在信任委托的信任策略中添加了 sts::tagSession 授权项时，您可以配置您的身份提供商，将属性作为会话标签 (Session Tags) 传递到 SAML 断言中。每个会话标签由一个键（Key）和一个值（Value）组成。您最多可以传递 20 个会话标签。纯文本形式的会话标签键不得超过 128 个字符，值不得超过 255 个字符。您也可以传递与信任委托身上标签同名的会话标签，此时会话标签会覆盖具有相同键的信任委托标签。您可以将会话标签设置为可传递的 (Transitive)，可传递的会话标签在角色链期间会持续保留。
     * 
     * **SAML 配置：**
     * 在您的应用程序调用 AssumeAgencyWithSAML 之前，您必须使用您的账号在 IAM 中创建 SAML 提供商和信任委托，并在信任委托的信任策略中指定该 SAML 提供商，然后还需要配置您的 SAML 身份提供商以发布 IAM 所需的声明 (Claims)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 通过使用SAML协议SSO的信任委托获取临时安全凭证
     * @param {AssumeAgencyWithSAMLReqBody} assumeAgencyWithSAMLReqBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public assumeAgencyWithSAML(assumeAgencyWithSAMLRequest?: AssumeAgencyWithSAMLRequest): Promise<AssumeAgencyWithSAMLResponse> {
        const options = ParamCreater().assumeAgencyWithSAML(assumeAgencyWithSAMLRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 解密鉴权失败的原因。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 解密鉴权失败的原因
     * @param {DecodeAuthorizationMessageReq} decodeAuthorizationMessageReq 
     * @param {string} [xSecurityToken] **参数解释**： 临时安全凭证的security_token字段。  **约束限制**： 通过临时安全凭证调用接口时，需要提供“X-Security-Token”Http头。  **取值范围**： 不涉及。  **默认取值**： 不涉及。 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public decodeAuthorizationMessage(decodeAuthorizationMessageRequest?: DecodeAuthorizationMessageRequest): Promise<DecodeAuthorizationMessageResponse> {
        const options = ParamCreater().decodeAuthorizationMessage(decodeAuthorizationMessageRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取调用者（用户，委托等）身份信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取调用者身份信息
     * @param {string} [xSecurityToken] **参数解释**： 临时安全凭证的security_token字段。  **约束限制**： 通过临时安全凭证调用接口时，需要提供“X-Security-Token”Http头。  **取值范围**： 不涉及。  **默认取值**： 不涉及。 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public getCallerIdentity(getCallerIdentityRequest?: GetCallerIdentityRequest): Promise<GetCallerIdentityResponse> {
        const options = ParamCreater().getCallerIdentity(getCallerIdentityRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * 通过委托或者信任委托获取临时安全凭证，临时安全凭证可用于对云资源发起访问。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        assumeAgency(assumeAgencyRequest?: AssumeAgencyRequest) {
            const options = {
                method: "POST",
                url: "/v5/agencies/assume",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xSecurityToken;

            if (assumeAgencyRequest !== null && assumeAgencyRequest !== undefined) {
                if (assumeAgencyRequest instanceof AssumeAgencyRequest) {
                    body = assumeAgencyRequest.body
                    xSecurityToken = assumeAgencyRequest.xSecurityToken;
                } else {
                    body = assumeAgencyRequest['body'];
                    xSecurityToken = assumeAgencyRequest['X-Security-Token'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 为通过 OIDC 身份提供商令牌验证的用户返回一组临时安全凭证。此操作提供了一种机制，可以让外部的任何兼容 OIDC 身份提供商使用信任委托的临时安全凭证华为云访问，而无需使用 IAM 用户的凭证。
         * 
         * **会话持续时间：**
         * 默认情况下，通过 AssumeAgencyWithOIDC 创建的临时安全凭证有效期为一小时。您可以使用可选的 duration_seconds 参数来指定会话的持续时间，duration_seconds 取值范围是从 900 秒（15 分钟）到该信任委托设置的最大会话持续时长，最大会话持续时长的取值范围可以从 1 小时到 12 小时。注意：委托链会将您的会话持续时间限制为最多一小时，当您使用 AssumeAgency API 操作来进行委托链的切换时，如果您提供了大于一小时的 duration_seconds 参数值，该操作将会失败。
         * 
         * **权限：**
         * 调用 AssumeAgencyWithOIDC 不需要使用华为云凭证。调用者的身份是通过使用您 JWKS 端点中的公钥进行验证的。
         * 您可以使用 policy 和 policy_ids 参数传递自定义策略和已有的身份策略来限制本次会话获得的临时安全凭证的权限范围，最终获得临时安全凭证的权限是 policy 和 policy_ids 与信任委托身上附加的身份策略的交集。
         * 
         * **标签：**
         * 在信任委托的信任策略中添加了 sts::tagSession 授权项时，您可以配置您的身份提供商，将属性作为会话标签传递到您的 ID Token 中。每个会话标签由一个键（Key）和一个值（Value）组成。您最多可以传递 20 个会话标签。纯文本形式的会话标签键不得超过 128 个字符，值不得超过 255 个字符。您也可以传递与信任委托身上标签同名的会话标签，此时会话标签会覆盖具有相同键的信任委托标签。您可以将会话标签设置为可传递的 (Transitive)，可传递的会话标签在角色链期间会持续保留。
         * 
         * **身份：**
         * 在您的应用程序可以调用 AssumeAgencyWithOIDC 之前，您必须使用您的账号在 IAM 中创建 OIDC 提供商和信任委托，并在信任委托的信任策略中指定该 OIDC 提供商，然后还需要配置您的 OIDC 身份提供商以颁发 IAM 所需的 ID Token。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        assumeAgencyWithOIDC(assumeAgencyWithOIDCRequest?: AssumeAgencyWithOIDCRequest) {
            const options = {
                method: "POST",
                url: "/v5/agencies/assume-with-oidc",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (assumeAgencyWithOIDCRequest !== null && assumeAgencyWithOIDCRequest !== undefined) {
                if (assumeAgencyWithOIDCRequest instanceof AssumeAgencyWithOIDCRequest) {
                    body = assumeAgencyWithOIDCRequest.body
                } else {
                    body = assumeAgencyWithOIDCRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 为通过 SAML 身份验证响应（SAML Authentication Response）验证的用户返回一组临时安全凭证。此操作提供了一种机制，可以让外部的 SAML 身份提供商使用信任委托的临时安全凭证华为云访问，而无需使用 IAM 用户的凭证。
         * 
         * **会话持续时间：**
         * 默认情况下，通过 AssumeAgencyWithSAML 创建的临时安全凭证有效期为一小时。您可以使用可选的 duration_seconds 参数或者 SAML 身份验证响应中 SessionNotOnOrAfter 值和 SessionDuration 值来指定会话的持续时间，最终的会话持续时间以三者中较短的一个为准，且会话的持续时间不能超过委托设置的最大会话时长限制。duration_seconds 取值范围是从 900 秒（15 分钟）到该信任委托设置的最大会话持续时长，最大会话持续时长的取值范围可以从 1 小时到 12 小时。注意：委托链会将您的会话持续时间限制为最多一小时，当您使用 AssumeAgency API 操作来进行委托链的切换时，如果您提供了大于一小时的 duration_seconds 参数值，该操作将会失败。
         * 
         * **权限：**
         * 调用 AssumeAgencyWithSAML 不需要使用华为云凭证。调用者的身份是通过使用您上传的 SAML 提供商元数据文档中的密钥进行验证的。
         * 您可以使用 policy 和 policy_ids 参数传递自定义策略和已有的身份策略来限制本次会话获得的临时安全凭证的权限范围，最终获得临时安全凭证的权限是 policy 和 policy_ids 与信任委托身上附加的身份策略的交集。
         * 
         * **标签：**
         * 在信任委托的信任策略中添加了 sts::tagSession 授权项时，您可以配置您的身份提供商，将属性作为会话标签 (Session Tags) 传递到 SAML 断言中。每个会话标签由一个键（Key）和一个值（Value）组成。您最多可以传递 20 个会话标签。纯文本形式的会话标签键不得超过 128 个字符，值不得超过 255 个字符。您也可以传递与信任委托身上标签同名的会话标签，此时会话标签会覆盖具有相同键的信任委托标签。您可以将会话标签设置为可传递的 (Transitive)，可传递的会话标签在角色链期间会持续保留。
         * 
         * **SAML 配置：**
         * 在您的应用程序调用 AssumeAgencyWithSAML 之前，您必须使用您的账号在 IAM 中创建 SAML 提供商和信任委托，并在信任委托的信任策略中指定该 SAML 提供商，然后还需要配置您的 SAML 身份提供商以发布 IAM 所需的声明 (Claims)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        assumeAgencyWithSAML(assumeAgencyWithSAMLRequest?: AssumeAgencyWithSAMLRequest) {
            const options = {
                method: "POST",
                url: "/v5/agencies/assume-with-saml",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (assumeAgencyWithSAMLRequest !== null && assumeAgencyWithSAMLRequest !== undefined) {
                if (assumeAgencyWithSAMLRequest instanceof AssumeAgencyWithSAMLRequest) {
                    body = assumeAgencyWithSAMLRequest.body
                } else {
                    body = assumeAgencyWithSAMLRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 解密鉴权失败的原因。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        decodeAuthorizationMessage(decodeAuthorizationMessageRequest?: DecodeAuthorizationMessageRequest) {
            const options = {
                method: "POST",
                url: "/v5/decode-authorization-message",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xSecurityToken;

            if (decodeAuthorizationMessageRequest !== null && decodeAuthorizationMessageRequest !== undefined) {
                if (decodeAuthorizationMessageRequest instanceof DecodeAuthorizationMessageRequest) {
                    body = decodeAuthorizationMessageRequest.body
                    xSecurityToken = decodeAuthorizationMessageRequest.xSecurityToken;
                } else {
                    body = decodeAuthorizationMessageRequest['body'];
                    xSecurityToken = decodeAuthorizationMessageRequest['X-Security-Token'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取调用者（用户，委托等）身份信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        getCallerIdentity(getCallerIdentityRequest?: GetCallerIdentityRequest) {
            const options = {
                method: "GET",
                url: "/v5/caller-identity",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let xSecurityToken;

            if (getCallerIdentityRequest !== null && getCallerIdentityRequest !== undefined) {
                if (getCallerIdentityRequest instanceof GetCallerIdentityRequest) {
                    xSecurityToken = getCallerIdentityRequest.xSecurityToken;
                } else {
                    xSecurityToken = getCallerIdentityRequest['X-Security-Token'];
                }
            }

        
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }

            options.headers = localVarHeaderParameter;
            return options;
        },
    
    }
};

function newClient(client: HcClient): StsClient {
    return new StsClient(client);
}

/**
 *
 * @export
 * @class RequiredError
 * @extends {Error}
 */
export class RequiredError extends Error {
    name: "RequiredError" = "RequiredError";
    constructor(public field: string, msg?: string) {
        super(msg);
    }
}