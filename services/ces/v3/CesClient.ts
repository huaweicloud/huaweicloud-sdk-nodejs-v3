import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { AgentStatusInfo } from './model/AgentStatusInfo';
import { BatchCreateAgentInvocationsRequest } from './model/BatchCreateAgentInvocationsRequest';
import { BatchCreateAgentInvocationsResponse } from './model/BatchCreateAgentInvocationsResponse';
import { BatchCreateInvocationInfo } from './model/BatchCreateInvocationInfo';
import { BatchCreateInvocationRequestBody } from './model/BatchCreateInvocationRequestBody';
import { ExtensionInfo } from './model/ExtensionInfo';
import { InvocationInfo } from './model/InvocationInfo';
import { ListAgentInvocationsRequest } from './model/ListAgentInvocationsRequest';
import { ListAgentInvocationsResponse } from './model/ListAgentInvocationsResponse';
import { ListAgentStatusRequest } from './model/ListAgentStatusRequest';
import { ListAgentStatusRequestBody } from './model/ListAgentStatusRequestBody';
import { ListAgentStatusResponse } from './model/ListAgentStatusResponse';

export class CesClient {
    public static newBuilder(): ClientBuilder<CesClient> {
            return new ClientBuilder<CesClient>(newClient);
    }

    private hcClient: HcClient;
    public constructor(client: HcClient) {
        this.hcClient = client;
    }

    public getPath() {
        return __dirname;
    }


    /**
     * 插件状态查询，包括uniagent状态以及插件状态
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 插件状态查询
     * @param {ListAgentStatusRequestBody} [listAgentStatusRequestBody] 批量查询插件状态请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAgentStatus(listAgentStatusRequest?: ListAgentStatusRequest): Promise<ListAgentStatusResponse> {
        const options = ParamCreater().listAgentStatus(listAgentStatusRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量创建Agent任务
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量创建Agent任务
     * @param {BatchCreateInvocationRequestBody} batchCreateAgentInvocationsRequestBody 批量创建Agent任务请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchCreateAgentInvocations(batchCreateAgentInvocationsRequest?: BatchCreateAgentInvocationsRequest): Promise<BatchCreateAgentInvocationsResponse> {
        const options = ParamCreater().batchCreateAgentInvocations(batchCreateAgentInvocationsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询Agent任务列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询Agent任务列表
     * @param {string} [instanceId] 主机id
     * @param {string} [instanceName] 主机名称
     * @param {'ECS' | 'BMS'} [instanceType] 主机类型，ECS弹性云服务器，BMS裸金属服务器
     * @param {string} [invocationId] 任务id
     * @param {'INSTALL' | 'UPDATE' | 'ROLLBACK'} [invocationType] 任务类型，INSTALL 安装，UPDATE 升级，ROLLBACK 回退
     * @param {'telescope'} [invocationTarget] 任务对象，目前仅支持telescope
     * @param {number} [offset] 分页偏移量
     * @param {number} [limit] 分页大小
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAgentInvocations(listAgentInvocationsRequest?: ListAgentInvocationsRequest): Promise<ListAgentInvocationsResponse> {
        const options = ParamCreater().listAgentInvocations(listAgentInvocationsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * 插件状态查询，包括uniagent状态以及插件状态
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAgentStatus(listAgentStatusRequest?: ListAgentStatusRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/agent-status/batch-query",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (listAgentStatusRequest !== null && listAgentStatusRequest !== undefined) {
                if (listAgentStatusRequest instanceof ListAgentStatusRequest) {
                    body = listAgentStatusRequest.body
                } else {
                    body = listAgentStatusRequest['body'];
                }
            }

        
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 批量创建Agent任务
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchCreateAgentInvocations(batchCreateAgentInvocationsRequest?: BatchCreateAgentInvocationsRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/agent-invocations/batch-create",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (batchCreateAgentInvocationsRequest !== null && batchCreateAgentInvocationsRequest !== undefined) {
                if (batchCreateAgentInvocationsRequest instanceof BatchCreateAgentInvocationsRequest) {
                    body = batchCreateAgentInvocationsRequest.body
                } else {
                    body = batchCreateAgentInvocationsRequest['body'];
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
         * 查询Agent任务列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAgentInvocations(listAgentInvocationsRequest?: ListAgentInvocationsRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/agent-invocations",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let instanceName;
            
            let instanceType;
            
            let invocationId;
            
            let invocationType;
            
            let invocationTarget;
            
            let offset;
            
            let limit;

            if (listAgentInvocationsRequest !== null && listAgentInvocationsRequest !== undefined) {
                if (listAgentInvocationsRequest instanceof ListAgentInvocationsRequest) {
                    instanceId = listAgentInvocationsRequest.instanceId;
                    instanceName = listAgentInvocationsRequest.instanceName;
                    instanceType = listAgentInvocationsRequest.instanceType;
                    invocationId = listAgentInvocationsRequest.invocationId;
                    invocationType = listAgentInvocationsRequest.invocationType;
                    invocationTarget = listAgentInvocationsRequest.invocationTarget;
                    offset = listAgentInvocationsRequest.offset;
                    limit = listAgentInvocationsRequest.limit;
                } else {
                    instanceId = listAgentInvocationsRequest['instance_id'];
                    instanceName = listAgentInvocationsRequest['instance_name'];
                    instanceType = listAgentInvocationsRequest['instance_type'];
                    invocationId = listAgentInvocationsRequest['invocation_id'];
                    invocationType = listAgentInvocationsRequest['invocation_type'];
                    invocationTarget = listAgentInvocationsRequest['invocation_target'];
                    offset = listAgentInvocationsRequest['offset'];
                    limit = listAgentInvocationsRequest['limit'];
                }
            }

        
            if (instanceId !== null && instanceId !== undefined) {
                localVarQueryParameter['instance_id'] = instanceId;
            }
            if (instanceName !== null && instanceName !== undefined) {
                localVarQueryParameter['instance_name'] = instanceName;
            }
            if (instanceType !== null && instanceType !== undefined) {
                localVarQueryParameter['instance_type'] = instanceType;
            }
            if (invocationId !== null && invocationId !== undefined) {
                localVarQueryParameter['invocation_id'] = invocationId;
            }
            if (invocationType !== null && invocationType !== undefined) {
                localVarQueryParameter['invocation_type'] = invocationType;
            }
            if (invocationTarget !== null && invocationTarget !== undefined) {
                localVarQueryParameter['invocation_target'] = invocationTarget;
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
    
    }
};

function newClient(client: HcClient): CesClient {
    return new CesClient(client);
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