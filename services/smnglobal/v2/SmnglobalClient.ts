import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { CreateSubscriptionUserRequest } from './model/CreateSubscriptionUserRequest';
import { CreateSubscriptionUserRequestBody } from './model/CreateSubscriptionUserRequestBody';
import { CreateSubscriptionUserRequestEmailEndpointInfo } from './model/CreateSubscriptionUserRequestEmailEndpointInfo';
import { CreateSubscriptionUserRequestHttpEndpointInfo } from './model/CreateSubscriptionUserRequestHttpEndpointInfo';
import { CreateSubscriptionUserRequestHttpsEndpointInfo } from './model/CreateSubscriptionUserRequestHttpsEndpointInfo';
import { CreateSubscriptionUserRequestSmsEndpointInfo } from './model/CreateSubscriptionUserRequestSmsEndpointInfo';
import { CreateSubscriptionUserResponse } from './model/CreateSubscriptionUserResponse';
import { DeleteSubscriptionUserRequest } from './model/DeleteSubscriptionUserRequest';
import { DeleteSubscriptionUserResponse } from './model/DeleteSubscriptionUserResponse';
import { ListSubscriptionUserRequest } from './model/ListSubscriptionUserRequest';
import { ListSubscriptionUserResponse } from './model/ListSubscriptionUserResponse';
import { ListSubscriptionUserResponseEmailEndpointInfo } from './model/ListSubscriptionUserResponseEmailEndpointInfo';
import { ListSubscriptionUserResponseHttpEndpointInfo } from './model/ListSubscriptionUserResponseHttpEndpointInfo';
import { ListSubscriptionUserResponseHttpsEndpointInfo } from './model/ListSubscriptionUserResponseHttpsEndpointInfo';
import { ListSubscriptionUserResponseItemInfo } from './model/ListSubscriptionUserResponseItemInfo';
import { ListSubscriptionUserResponseSmsEndpointInfo } from './model/ListSubscriptionUserResponseSmsEndpointInfo';
import { UpdateSubscriptionUserRequest } from './model/UpdateSubscriptionUserRequest';
import { UpdateSubscriptionUserRequestBody } from './model/UpdateSubscriptionUserRequestBody';
import { UpdateSubscriptionUserResponse } from './model/UpdateSubscriptionUserResponse';

export class SmnglobalClient {
    public static newBuilder(): ClientBuilder<SmnglobalClient> {
            let client = new ClientBuilder<SmnglobalClient>(newClient, 'GlobalCredentials');
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
     * 添加订阅用户。如果订阅用户的状态为未确认，则会向订阅用户发送一条确认订阅消息。订阅用户点击订阅链接确认订阅后，则订阅用户的状态变更为已确认，同时会向订阅用户发送一条取消订阅消息，便于订阅用户随时可以取消订阅。订阅用户点击取消订阅链接后，则订阅用户的状态变更为已取消，同时会向订阅用户发送一条重新订阅消息，便于订阅用户可以重新订阅。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 添加订阅用户
     * @param {CreateSubscriptionUserRequestBody} createSubscriptionUserRequestBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createSubscriptionUser(createSubscriptionUserRequest?: CreateSubscriptionUserRequest): Promise<CreateSubscriptionUserResponse> {
        const options = ParamCreater().createSubscriptionUser(createSubscriptionUserRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除订阅用户。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除订阅用户
     * @param {string} id 订阅用户ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteSubscriptionUser(deleteSubscriptionUserRequest?: DeleteSubscriptionUserRequest): Promise<DeleteSubscriptionUserResponse> {
        const options = ParamCreater().deleteSubscriptionUser(deleteSubscriptionUserRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询订阅用户列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询订阅用户列表
     * @param {string} [name] 订阅用户名称。
     * @param {'http' | 'https' | 'sms' | 'email'} [protocol] 协议。 http：HTTP终端 https：HTTPS终端 sms：短信 email：邮件
     * @param {'UNCONFIRMED' | 'CONFIRMED' | 'CANCELLED'} [status] 订阅用户状态。 UNCONFIRMED：未确认 CONFIRMED：已确认 CANCELLED：已取消
     * @param {string} [group] 订阅用户分组。
     * @param {number} [offset] 偏移量。偏移量为一个大于0小于资源总个数的整数，表示查询该偏移量后面的所有的资源，默认值为0。
     * @param {number} [limit] 查询数量限制。取值范围：1~100，取值一般为10，20，50。功能说明：每页返回的资源个数。默认值为100。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listSubscriptionUser(listSubscriptionUserRequest?: ListSubscriptionUserRequest): Promise<ListSubscriptionUserResponse> {
        const options = ParamCreater().listSubscriptionUser(listSubscriptionUserRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新订阅用户。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新订阅用户
     * @param {string} id 订阅用户ID。
     * @param {UpdateSubscriptionUserRequestBody} updateSubscriptionUserRequestBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateSubscriptionUser(updateSubscriptionUserRequest?: UpdateSubscriptionUserRequest): Promise<UpdateSubscriptionUserResponse> {
        const options = ParamCreater().updateSubscriptionUser(updateSubscriptionUserRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * 添加订阅用户。如果订阅用户的状态为未确认，则会向订阅用户发送一条确认订阅消息。订阅用户点击订阅链接确认订阅后，则订阅用户的状态变更为已确认，同时会向订阅用户发送一条取消订阅消息，便于订阅用户随时可以取消订阅。订阅用户点击取消订阅链接后，则订阅用户的状态变更为已取消，同时会向订阅用户发送一条重新订阅消息，便于订阅用户可以重新订阅。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createSubscriptionUser(createSubscriptionUserRequest?: CreateSubscriptionUserRequest) {
            const options = {
                method: "POST",
                url: "/v2/{domain_id}/subscription-users",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createSubscriptionUserRequest !== null && createSubscriptionUserRequest !== undefined) {
                if (createSubscriptionUserRequest instanceof CreateSubscriptionUserRequest) {
                    body = createSubscriptionUserRequest.body
                } else {
                    body = createSubscriptionUserRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除订阅用户。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteSubscriptionUser(deleteSubscriptionUserRequest?: DeleteSubscriptionUserRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{domain_id}/subscription-users/{id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let id;

            if (deleteSubscriptionUserRequest !== null && deleteSubscriptionUserRequest !== undefined) {
                if (deleteSubscriptionUserRequest instanceof DeleteSubscriptionUserRequest) {
                    id = deleteSubscriptionUserRequest.id;
                } else {
                    id = deleteSubscriptionUserRequest['id'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling deleteSubscriptionUser.');
            }

            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询订阅用户列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listSubscriptionUser(listSubscriptionUserRequest?: ListSubscriptionUserRequest) {
            const options = {
                method: "GET",
                url: "/v2/{domain_id}/subscription-users",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let name;
            
            let protocol;
            
            let status;
            
            let group;
            
            let offset;
            
            let limit;

            if (listSubscriptionUserRequest !== null && listSubscriptionUserRequest !== undefined) {
                if (listSubscriptionUserRequest instanceof ListSubscriptionUserRequest) {
                    name = listSubscriptionUserRequest.name;
                    protocol = listSubscriptionUserRequest.protocol;
                    status = listSubscriptionUserRequest.status;
                    group = listSubscriptionUserRequest.group;
                    offset = listSubscriptionUserRequest.offset;
                    limit = listSubscriptionUserRequest.limit;
                } else {
                    name = listSubscriptionUserRequest['name'];
                    protocol = listSubscriptionUserRequest['protocol'];
                    status = listSubscriptionUserRequest['status'];
                    group = listSubscriptionUserRequest['group'];
                    offset = listSubscriptionUserRequest['offset'];
                    limit = listSubscriptionUserRequest['limit'];
                }
            }

        
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (protocol !== null && protocol !== undefined) {
                localVarQueryParameter['protocol'] = protocol;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (group !== null && group !== undefined) {
                localVarQueryParameter['group'] = group;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新订阅用户。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateSubscriptionUser(updateSubscriptionUserRequest?: UpdateSubscriptionUserRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{domain_id}/subscription-users/{id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let id;

            if (updateSubscriptionUserRequest !== null && updateSubscriptionUserRequest !== undefined) {
                if (updateSubscriptionUserRequest instanceof UpdateSubscriptionUserRequest) {
                    id = updateSubscriptionUserRequest.id;
                    body = updateSubscriptionUserRequest.body
                } else {
                    id = updateSubscriptionUserRequest['id'];
                    body = updateSubscriptionUserRequest['body'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling updateSubscriptionUser.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
    }
};

function newClient(client: HcClient): SmnglobalClient {
    return new SmnglobalClient(client);
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