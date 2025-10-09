import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { AssumeAgencyReqBody } from './model/AssumeAgencyReqBody';
import { AssumeAgencyRequest } from './model/AssumeAgencyRequest';
import { AssumeAgencyResponse } from './model/AssumeAgencyResponse';
import { AssumedAgencyDto } from './model/AssumedAgencyDto';
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
     * @param {string} [xSecurityToken] 通过临时安全凭证调用接口时，需要提供“X-Security-Token”Http头，取值为临时安全凭证的security_token字段。
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
     * 解密鉴权失败的原因。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 解密鉴权失败的原因
     * @param {DecodeAuthorizationMessageReq} decodeAuthorizationMessageReq 
     * @param {string} [xSecurityToken] 通过临时安全凭证调用接口时，需要提供“X-Security-Token”Http头，取值为临时安全凭证的security_token字段。
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
     * @param {string} [xSecurityToken] 通过临时安全凭证调用接口时，需要提供“X-Security-Token”Http头，取值为临时安全凭证的security_token字段。
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