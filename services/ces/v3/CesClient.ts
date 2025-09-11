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
import { RemoteInstallHostInfo } from './model/RemoteInstallHostInfo';

export class CesClient {
    public static newBuilder(): ClientBuilder<CesClient> {
            let client = new ClientBuilder<CesClient>(newClient);
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
     * @param {string} [instanceId] **参数解释**: 主机id **约束限制**: 不涉及 **取值范围**: 1到64个字符的字符串，且只包含字母、数字和连字符 **默认取值**: 不涉及 
     * @param {'ECS' | 'BMS'} [instanceType] **参数解释**: 主机类型，仅支持ECS弹性云服务器和BMS裸金属服务器 **约束限制**: 不涉及 **取值范围**: - ECS: 弹性云服务器 - BMS：裸金属服务器 **默认取值**: 不涉及 
     * @param {string} [invocationId] **参数解释**: 任务id **约束限制**: 不涉及 **取值范围**: 以字母或数字开头，后续可包含字母、数字、下划线或连字符的字符串，长度至少为 1 **默认取值**: 不涉及 
     * @param {'INSTALL' | 'UPDATE' | 'ROLLBACK' | 'RETRY' | 'SET_REMOTE_INSTALLER' | 'REMOTE_INSTALL'} [invocationType] **参数解释**: 任务类型, 仅包含：INSTALL安装, UPDATE升级, ROLLBACK回退，RETRY重试，SET_REMOTE_INSTALLER设置远程安装主机，REMOTE_INSTALL执行远程安装。 **约束限制**: 不涉及。 **取值范围**: - INSTALL：安装 - UPDATE：升级 - ROLLBACK：回退 - RETRY：重试 - SET_REMOTE_INSTALLER：设置远程安装主机 - REMOTE_INSTALL：执行远程安装 **默认取值**: 不涉及 
     * @param {'telescope'} [invocationTarget] **参数解释**: 任务对象, 支持telescope监控 **约束限制**: 不涉及。 **取值范围**: - telescope: 主机监控插件telescope **默认取值**: telescope。 
     * @param {number} [offset] **参数解释**: 分页偏移量 **约束限制**: 不涉及 **取值范围**: 数字范围为[0,9999999999999] **默认取值**: 0 
     * @param {number} [limit] **参数解释**: 分页大小。 **约束限制**: 不涉及。 **取值范围**: 数字范围为[1,100] **默认取值**: 100 
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
            
            let instanceType;
            
            let invocationId;
            
            let invocationType;
            
            let invocationTarget;
            
            let offset;
            
            let limit;

            if (listAgentInvocationsRequest !== null && listAgentInvocationsRequest !== undefined) {
                if (listAgentInvocationsRequest instanceof ListAgentInvocationsRequest) {
                    instanceId = listAgentInvocationsRequest.instanceId;
                    instanceType = listAgentInvocationsRequest.instanceType;
                    invocationId = listAgentInvocationsRequest.invocationId;
                    invocationType = listAgentInvocationsRequest.invocationType;
                    invocationTarget = listAgentInvocationsRequest.invocationTarget;
                    offset = listAgentInvocationsRequest.offset;
                    limit = listAgentInvocationsRequest.limit;
                } else {
                    instanceId = listAgentInvocationsRequest['instance_id'];
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