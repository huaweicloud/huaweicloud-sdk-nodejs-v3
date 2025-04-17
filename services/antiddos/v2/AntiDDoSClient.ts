import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { AlertConfigRespWarnConfig } from './model/AlertConfigRespWarnConfig';
import { CleanLimitDict } from './model/CleanLimitDict';
import { DDosStatus } from './model/DDosStatus';
import { ExtendDDoSSet } from './model/ExtendDDoSSet';
import { ListDDosStatusRequest } from './model/ListDDosStatusRequest';
import { ListDDosStatusResponse } from './model/ListDDosStatusResponse';
import { ListNewConfigsRequest } from './model/ListNewConfigsRequest';
import { ListNewConfigsResponse } from './model/ListNewConfigsResponse';
import { ShowAlertConfigRequest } from './model/ShowAlertConfigRequest';
import { ShowAlertConfigResponse } from './model/ShowAlertConfigResponse';
import { ShowNewTaskStatusRequest } from './model/ShowNewTaskStatusRequest';
import { ShowNewTaskStatusResponse } from './model/ShowNewTaskStatusResponse';
import { TriggerBpsDict } from './model/TriggerBpsDict';
import { TriggerQpsDict } from './model/TriggerQpsDict';
import { UpdateAlertConfigRequest } from './model/UpdateAlertConfigRequest';
import { UpdateAlertConfigRequestBody } from './model/UpdateAlertConfigRequestBody';
import { UpdateAlertConfigResponse } from './model/UpdateAlertConfigResponse';
import { WarnConfig } from './model/WarnConfig';

export class AntiDDoSClient {
    public static newBuilder(): ClientBuilder<AntiDDoSClient> {
            let client = new ClientBuilder<AntiDDoSClient>(newClient);
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
     * 查询用户配置信息，用户可以通过此接口查询是否接收某类告警，同时可以配置是手机短信还是电子邮件接收告警信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询告警配置信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showAlertConfig(showAlertConfigRequest?: ShowAlertConfigRequest): Promise<ShowAlertConfigResponse> {
        const options = ParamCreater().showAlertConfig();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新用户配置信息，用户可以通过此接口更新是否接收某类告警，同时可以配置是手机短信还是电子邮件接收告警信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新告警配置信息
     * @param {UpdateAlertConfigRequestBody} updateAlertConfigRequestBody 请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateAlertConfig(updateAlertConfigRequest?: UpdateAlertConfigRequest): Promise<UpdateAlertConfigResponse> {
        const options = ParamCreater().updateAlertConfig(updateAlertConfigRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询用户所有EIP的Anti-DDoS防护状态信息，用户的EIP无论是否绑定到云服务器，都可以进行查询。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询EIP防护状态列表
     * @param {string} [status] 可选范围： - normal：表示正常 - configging：表示设置中 - notConfig：表示未设置 - packetcleaning：表示清洗 - packetdropping：表示黑洞  不带此参数默认所有列表，以neutron查询到的顺序为准。
     * @param {string} [limit] 返回结果个数限制，取值范围：1~100
     * @param {string} [offset] 偏移量，取值范围：0~2147483647
     * @param {string} [ips] IP地址，支持IPv4格式和IPv6格式输入，支持部分查询。例如“？ip&#x3D;192.168”，会返回192.168.111.1和10.192.168.8所对应的EIP防护状态。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listDDosStatus(listDDosStatusRequest?: ListDDosStatusRequest): Promise<ListDDosStatusResponse> {
        const options = ParamCreater().listDDosStatus(listDDosStatusRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询系统支持的Anti-DDoS防护策略配置的可选范围，用户根据范围列表选择适合自已业务的防护策略进行Anti-DDoS流量清洗。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询Anti-DDoS配置可选范围
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listNewConfigs(listNewConfigsRequest?: ListNewConfigsRequest): Promise<ListNewConfigsResponse> {
        const options = ParamCreater().listNewConfigs();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 用户查询指定的Anti-DDoS防护配置任务，得到任务当前执行的状态。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询Anti-DDoS任务
     * @param {string} taskId 任务ID（非负整数）的字符串
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showNewTaskStatus(showNewTaskStatusRequest?: ShowNewTaskStatusRequest): Promise<ShowNewTaskStatusResponse> {
        const options = ParamCreater().showNewTaskStatus(showNewTaskStatusRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * 查询用户配置信息，用户可以通过此接口查询是否接收某类告警，同时可以配置是手机短信还是电子邮件接收告警信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showAlertConfig() {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/warnalert/alertconfig/query",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;


            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新用户配置信息，用户可以通过此接口更新是否接收某类告警，同时可以配置是手机短信还是电子邮件接收告警信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateAlertConfig(updateAlertConfigRequest?: UpdateAlertConfigRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/warnalert/alertconfig/update",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (updateAlertConfigRequest !== null && updateAlertConfigRequest !== undefined) {
                if (updateAlertConfigRequest instanceof UpdateAlertConfigRequest) {
                    body = updateAlertConfigRequest.body
                } else {
                    body = updateAlertConfigRequest['body'];
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
         * 查询用户所有EIP的Anti-DDoS防护状态信息，用户的EIP无论是否绑定到云服务器，都可以进行查询。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listDDosStatus(listDDosStatusRequest?: ListDDosStatusRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/antiddos",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let status;
            
            let limit;
            
            let offset;
            
            let ips;

            if (listDDosStatusRequest !== null && listDDosStatusRequest !== undefined) {
                if (listDDosStatusRequest instanceof ListDDosStatusRequest) {
                    status = listDDosStatusRequest.status;
                    limit = listDDosStatusRequest.limit;
                    offset = listDDosStatusRequest.offset;
                    ips = listDDosStatusRequest.ips;
                } else {
                    status = listDDosStatusRequest['status'];
                    limit = listDDosStatusRequest['limit'];
                    offset = listDDosStatusRequest['offset'];
                    ips = listDDosStatusRequest['ips'];
                }
            }

        
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (ips !== null && ips !== undefined) {
                localVarQueryParameter['ips'] = ips;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询系统支持的Anti-DDoS防护策略配置的可选范围，用户根据范围列表选择适合自已业务的防护策略进行Anti-DDoS流量清洗。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listNewConfigs() {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/antiddos/query-config-list",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;


            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 用户查询指定的Anti-DDoS防护配置任务，得到任务当前执行的状态。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showNewTaskStatus(showNewTaskStatusRequest?: ShowNewTaskStatusRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/query-task-status",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let taskId;

            if (showNewTaskStatusRequest !== null && showNewTaskStatusRequest !== undefined) {
                if (showNewTaskStatusRequest instanceof ShowNewTaskStatusRequest) {
                    taskId = showNewTaskStatusRequest.taskId;
                } else {
                    taskId = showNewTaskStatusRequest['task_id'];
                }
            }

        
            if (taskId === null || taskId === undefined) {
                throw new RequiredError('taskId','Required parameter taskId was null or undefined when calling showNewTaskStatus.');
            }
            if (taskId !== null && taskId !== undefined) {
                localVarQueryParameter['task_id'] = taskId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
    }
};

function newClient(client: HcClient): AntiDDoSClient {
    return new AntiDDoSClient(client);
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