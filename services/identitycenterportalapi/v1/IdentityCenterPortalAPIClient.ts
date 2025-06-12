import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { AccountInfo } from './model/AccountInfo';
import { AgencyCredentials } from './model/AgencyCredentials';
import { AgencyInfo } from './model/AgencyInfo';
import { GetAgencyCredentialsRequest } from './model/GetAgencyCredentialsRequest';
import { GetAgencyCredentialsResponse } from './model/GetAgencyCredentialsResponse';
import { ListAccountAgenciesRequest } from './model/ListAccountAgenciesRequest';
import { ListAccountAgenciesResponse } from './model/ListAccountAgenciesResponse';
import { ListAccountsRequest } from './model/ListAccountsRequest';
import { ListAccountsResponse } from './model/ListAccountsResponse';
import { LogoutRequest } from './model/LogoutRequest';
import { LogoutResponse } from './model/LogoutResponse';
import { PageInfoDto } from './model/PageInfoDto';

export class IdentityCenterPortalAPIClient {
    public static newBuilder(): ClientBuilder<IdentityCenterPortalAPIClient> {
            let client = new ClientBuilder<IdentityCenterPortalAPIClient>(newClient, 'IdentityCenterPortalAPICredentials');
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
     * 列出分配给用户的所有账号
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 列出账号
     * @param {string} accessToken 创建令牌接口调用签发的访问令牌
     * @param {number} [limit] 页面中最大结果数量。
     * @param {string} [marker] 分页标记。非分页的接口，不使用该值。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAccounts(listAccountsRequest?: ListAccountsRequest): Promise<ListAccountsResponse> {
        const options = ParamCreater().listAccounts(listAccountsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 列出账号分配给用户的所有委托或信任委托
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 列出账号委托
     * @param {string} accessToken 创建令牌接口调用签发的访问令牌
     * @param {string} accountId 帐户的全局唯一标识符（ID）
     * @param {number} [limit] 页面中最大结果数量。
     * @param {string} [marker] 分页标记。非分页的接口，不使用该值。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAccountAgencies(listAccountAgenciesRequest?: ListAccountAgenciesRequest): Promise<ListAccountAgenciesResponse> {
        const options = ParamCreater().listAccountAgencies(listAccountAgenciesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取分配给用户的指定委托或信任委托的STS短期凭证
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取委托凭证
     * @param {string} accessToken 创建令牌接口调用签发的访问令牌
     * @param {string} targetAccountId 目标账户的全局唯一标识符（ID）
     * @param {string} agencyUrn 委托或信任委托的统一资源名称（URN）
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public getAgencyCredentials(getAgencyCredentialsRequest?: GetAgencyCredentialsRequest): Promise<GetAgencyCredentialsResponse> {
        const options = ParamCreater().getAgencyCredentials(getAgencyCredentialsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 向IAM身份中心服务发送API调用，使相应的服务端IAM身份中心登录会话失效。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 登出用户
     * @param {string} accessToken 创建令牌接口调用签发的访问令牌
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public logout(logoutRequest?: LogoutRequest): Promise<LogoutResponse> {
        const options = ParamCreater().logout(logoutRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * 列出分配给用户的所有账号
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAccounts(listAccountsRequest?: ListAccountsRequest) {
            const options = {
                method: "GET",
                url: "/v1/assigned-accounts",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let accessToken;
            
            let limit;
            
            let marker;

            if (listAccountsRequest !== null && listAccountsRequest !== undefined) {
                if (listAccountsRequest instanceof ListAccountsRequest) {
                    accessToken = listAccountsRequest.accessToken;
                    limit = listAccountsRequest.limit;
                    marker = listAccountsRequest.marker;
                } else {
                    accessToken = listAccountsRequest['access-token'];
                    limit = listAccountsRequest['limit'];
                    marker = listAccountsRequest['marker'];
                }
            }

        
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (accessToken !== undefined && accessToken !== null) {
                localVarHeaderParameter['access-token'] = String(accessToken);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 列出账号分配给用户的所有委托或信任委托
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAccountAgencies(listAccountAgenciesRequest?: ListAccountAgenciesRequest) {
            const options = {
                method: "GET",
                url: "/v1/assigned-agencies",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let accessToken;
            
            let accountId;
            
            let limit;
            
            let marker;

            if (listAccountAgenciesRequest !== null && listAccountAgenciesRequest !== undefined) {
                if (listAccountAgenciesRequest instanceof ListAccountAgenciesRequest) {
                    accessToken = listAccountAgenciesRequest.accessToken;
                    accountId = listAccountAgenciesRequest.accountId;
                    limit = listAccountAgenciesRequest.limit;
                    marker = listAccountAgenciesRequest.marker;
                } else {
                    accessToken = listAccountAgenciesRequest['access-token'];
                    accountId = listAccountAgenciesRequest['account_id'];
                    limit = listAccountAgenciesRequest['limit'];
                    marker = listAccountAgenciesRequest['marker'];
                }
            }

        
            if (accountId === null || accountId === undefined) {
                throw new RequiredError('accountId','Required parameter accountId was null or undefined when calling listAccountAgencies.');
            }
            if (accountId !== null && accountId !== undefined) {
                localVarQueryParameter['account_id'] = accountId;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (accessToken !== undefined && accessToken !== null) {
                localVarHeaderParameter['access-token'] = String(accessToken);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取分配给用户的指定委托或信任委托的STS短期凭证
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        getAgencyCredentials(getAgencyCredentialsRequest?: GetAgencyCredentialsRequest) {
            const options = {
                method: "GET",
                url: "/v1/credentials",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let accessToken;
            
            let targetAccountId;
            
            let agencyUrn;

            if (getAgencyCredentialsRequest !== null && getAgencyCredentialsRequest !== undefined) {
                if (getAgencyCredentialsRequest instanceof GetAgencyCredentialsRequest) {
                    accessToken = getAgencyCredentialsRequest.accessToken;
                    targetAccountId = getAgencyCredentialsRequest.targetAccountId;
                    agencyUrn = getAgencyCredentialsRequest.agencyUrn;
                } else {
                    accessToken = getAgencyCredentialsRequest['access-token'];
                    targetAccountId = getAgencyCredentialsRequest['target_account_id'];
                    agencyUrn = getAgencyCredentialsRequest['agency_urn'];
                }
            }

        
            if (targetAccountId === null || targetAccountId === undefined) {
                throw new RequiredError('targetAccountId','Required parameter targetAccountId was null or undefined when calling getAgencyCredentials.');
            }
            if (targetAccountId !== null && targetAccountId !== undefined) {
                localVarQueryParameter['target_account_id'] = targetAccountId;
            }
            if (agencyUrn === null || agencyUrn === undefined) {
                throw new RequiredError('agencyUrn','Required parameter agencyUrn was null or undefined when calling getAgencyCredentials.');
            }
            if (agencyUrn !== null && agencyUrn !== undefined) {
                localVarQueryParameter['agency_urn'] = agencyUrn;
            }
            if (accessToken !== undefined && accessToken !== null) {
                localVarHeaderParameter['access-token'] = String(accessToken);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 向IAM身份中心服务发送API调用，使相应的服务端IAM身份中心登录会话失效。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        logout(logoutRequest?: LogoutRequest) {
            const options = {
                method: "POST",
                url: "/v1/logout",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let accessToken;

            if (logoutRequest !== null && logoutRequest !== undefined) {
                if (logoutRequest instanceof LogoutRequest) {
                    accessToken = logoutRequest.accessToken;
                } else {
                    accessToken = logoutRequest['access-token'];
                }
            }

        
            if (accessToken !== undefined && accessToken !== null) {
                localVarHeaderParameter['access-token'] = String(accessToken);
            }

            options.headers = localVarHeaderParameter;
            return options;
        },
    
    }
};

function newClient(client: HcClient): IdentityCenterPortalAPIClient {
    return new IdentityCenterPortalAPIClient(client);
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