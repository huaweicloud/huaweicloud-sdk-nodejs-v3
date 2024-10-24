import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { AgentBatchImportParamNew } from './model/AgentBatchImportParamNew';
import { AgentImportParamNew } from './model/AgentImportParamNew';
import { AgentInfoParam } from './model/AgentInfoParam';
import { AgentInfoResult } from './model/AgentInfoResult';
import { AgentUpgradeParam } from './model/AgentUpgradeParam';
import { BatchImportAgentRequest } from './model/BatchImportAgentRequest';
import { BatchImportAgentResponse } from './model/BatchImportAgentResponse';
import { BatchUpdateAgentRequest } from './model/BatchUpdateAgentRequest';
import { BatchUpdateAgentResponse } from './model/BatchUpdateAgentResponse';
import { PluginInstallBasicParam } from './model/PluginInstallBasicParam';
import { ShowAgentInfosRequest } from './model/ShowAgentInfosRequest';
import { ShowAgentInfosResponse } from './model/ShowAgentInfosResponse';
import { SingleAgentParam } from './model/SingleAgentParam';

export class AomClient {
    public static newBuilder(): ClientBuilder<AomClient> {
            return new ClientBuilder<AomClient>(newClient);
    }

    private hcClient: HcClient;
    public constructor(client: HcClient) {
        this.hcClient = client;
    }

    public getPath() {
        return __dirname;
    }


    /**
     * 该接口用于下发批量安装UniAgent任务。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 下发批量安装UniAgent任务
     * @param {string} region region id，例如：cn-north-7
     * @param {AgentBatchImportParamNew} batchImportAgentRequestBody 导入安装UniAgent的机器信息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchImportAgent(batchImportAgentRequest?: BatchImportAgentRequest): Promise<BatchImportAgentResponse> {
        const options = ParamCreater().batchImportAgent(batchImportAgentRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于下发批量升级UniAgent任务。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 下发批量升级UniAgent任务
     * @param {AgentUpgradeParam} batchUpdateAgentRequestBody 升级UniAgent信息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchUpdateAgent(batchUpdateAgentRequest?: BatchUpdateAgentRequest): Promise<BatchUpdateAgentResponse> {
        const options = ParamCreater().batchUpdateAgent(batchUpdateAgentRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于查询执行过安装UniAgent任务的主机列表信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询UniAgent主机列表信息
     * @param {AgentInfoParam} showAgentInfosRequestBody 查询列表筛选字段
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showAgentInfos(showAgentInfosRequest?: ShowAgentInfosRequest): Promise<ShowAgentInfosResponse> {
        const options = ParamCreater().showAgentInfos(showAgentInfosRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * 该接口用于下发批量安装UniAgent任务。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchImportAgent(batchImportAgentRequest?: BatchImportAgentRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/uniagent-console/mainview/batch-import",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let region;

            if (batchImportAgentRequest !== null && batchImportAgentRequest !== undefined) {
                if (batchImportAgentRequest instanceof BatchImportAgentRequest) {
                    region = batchImportAgentRequest.region;
                    body = batchImportAgentRequest.body
                } else {
                    region = batchImportAgentRequest['region'];
                    body = batchImportAgentRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (region !== undefined && region !== null) {
                localVarHeaderParameter['region'] = String(region);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于下发批量升级UniAgent任务。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchUpdateAgent(batchUpdateAgentRequest?: BatchUpdateAgentRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/uniagent-console/upgrade/batch-upgrade",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (batchUpdateAgentRequest !== null && batchUpdateAgentRequest !== undefined) {
                if (batchUpdateAgentRequest instanceof BatchUpdateAgentRequest) {
                    body = batchUpdateAgentRequest.body
                } else {
                    body = batchUpdateAgentRequest['body'];
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
         * 该接口用于查询执行过安装UniAgent任务的主机列表信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showAgentInfos(showAgentInfosRequest?: ShowAgentInfosRequest) {
            const options = {
                method: "POST",
                url: "/v1/uniagent-console/agent-list/all",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (showAgentInfosRequest !== null && showAgentInfosRequest !== undefined) {
                if (showAgentInfosRequest instanceof ShowAgentInfosRequest) {
                    body = showAgentInfosRequest.body
                } else {
                    body = showAgentInfosRequest['body'];
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

function newClient(client: HcClient): AomClient {
    return new AomClient(client);
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