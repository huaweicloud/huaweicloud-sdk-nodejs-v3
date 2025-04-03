import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { ClientInfoDto } from './model/ClientInfoDto';
import { CreateTokenReqBody } from './model/CreateTokenReqBody';
import { CreateTokenRequest } from './model/CreateTokenRequest';
import { CreateTokenResponse } from './model/CreateTokenResponse';
import { RegisterClientReqBody } from './model/RegisterClientReqBody';
import { RegisterClientRequest } from './model/RegisterClientRequest';
import { RegisterClientResponse } from './model/RegisterClientResponse';
import { StartDeviceAuthorizationReqBody } from './model/StartDeviceAuthorizationReqBody';
import { StartDeviceAuthorizationRequest } from './model/StartDeviceAuthorizationRequest';
import { StartDeviceAuthorizationResponse } from './model/StartDeviceAuthorizationResponse';
import { TokenInfoDto } from './model/TokenInfoDto';

export class IdentityCenterOIDCClient {
    public static newBuilder(): ClientBuilder<IdentityCenterOIDCClient> {
            let client = new ClientBuilder<IdentityCenterOIDCClient>(newClient, 'IdentityCenterOIDCCredentials');
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
     * 向IAM身份中心注册客户端，这允许客户端启动设备授权，输出应该持久化以便于身份验证请求重用
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 注册客户端
     * @param {RegisterClientReqBody} registerClientReqBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public registerClient(registerClientRequest?: RegisterClientRequest): Promise<RegisterClientResponse> {
        const options = ParamCreater().registerClient(registerClientRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 发起设备授权请求
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 请求设备授权
     * @param {StartDeviceAuthorizationReqBody} startDeviceAuthorizationReqBody 请求设备授权请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public startDeviceAuthorization(startDeviceAuthorizationRequest?: StartDeviceAuthorizationRequest): Promise<StartDeviceAuthorizationResponse> {
        const options = ParamCreater().startDeviceAuthorization(startDeviceAuthorizationRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取访问令牌
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建令牌
     * @param {CreateTokenReqBody} createTokenReqBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createToken(createTokenRequest?: CreateTokenRequest): Promise<CreateTokenResponse> {
        const options = ParamCreater().createToken(createTokenRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * 向IAM身份中心注册客户端，这允许客户端启动设备授权，输出应该持久化以便于身份验证请求重用
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        registerClient(registerClientRequest?: RegisterClientRequest) {
            const options = {
                method: "POST",
                url: "/v1/clients",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (registerClientRequest !== null && registerClientRequest !== undefined) {
                if (registerClientRequest instanceof RegisterClientRequest) {
                    body = registerClientRequest.body
                } else {
                    body = registerClientRequest['body'];
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
         * 发起设备授权请求
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        startDeviceAuthorization(startDeviceAuthorizationRequest?: StartDeviceAuthorizationRequest) {
            const options = {
                method: "POST",
                url: "/v1/device/authorize",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (startDeviceAuthorizationRequest !== null && startDeviceAuthorizationRequest !== undefined) {
                if (startDeviceAuthorizationRequest instanceof StartDeviceAuthorizationRequest) {
                    body = startDeviceAuthorizationRequest.body
                } else {
                    body = startDeviceAuthorizationRequest['body'];
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
         * 获取访问令牌
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createToken(createTokenRequest?: CreateTokenRequest) {
            const options = {
                method: "POST",
                url: "/v1/tokens",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createTokenRequest !== null && createTokenRequest !== undefined) {
                if (createTokenRequest instanceof CreateTokenRequest) {
                    body = createTokenRequest.body
                } else {
                    body = createTokenRequest['body'];
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
    
    }
};

function newClient(client: HcClient): IdentityCenterOIDCClient {
    return new IdentityCenterOIDCClient(client);
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