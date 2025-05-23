import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { CreateDefaultConfigRequest } from './model/CreateDefaultConfigRequest';
import { CreateDefaultConfigResponse } from './model/CreateDefaultConfigResponse';
import { DDosStatus } from './model/DDosStatus';
import { DailyData } from './model/DailyData';
import { DailyLog } from './model/DailyLog';
import { DdosConfig } from './model/DdosConfig';
import { DeleteDefaultConfigRequest } from './model/DeleteDefaultConfigRequest';
import { DeleteDefaultConfigResponse } from './model/DeleteDefaultConfigResponse';
import { EnableDefensePolicyRequest } from './model/EnableDefensePolicyRequest';
import { EnableDefensePolicyResponse } from './model/EnableDefensePolicyResponse';
import { ListDDosStatusRequest } from './model/ListDDosStatusRequest';
import { ListDDosStatusResponse } from './model/ListDDosStatusResponse';
import { ListDailyLogRequest } from './model/ListDailyLogRequest';
import { ListDailyLogResponse } from './model/ListDailyLogResponse';
import { ListDailyReportRequest } from './model/ListDailyReportRequest';
import { ListDailyReportResponse } from './model/ListDailyReportResponse';
import { ListQuotaRequest } from './model/ListQuotaRequest';
import { ListQuotaResponse } from './model/ListQuotaResponse';
import { ListWeeklyReportsRequest } from './model/ListWeeklyReportsRequest';
import { ListWeeklyReportsResponse } from './model/ListWeeklyReportsResponse';
import { LtsConfigRequestAndResponse } from './model/LtsConfigRequestAndResponse';
import { LtsConfigRequestAndResponseLtsIdInfo } from './model/LtsConfigRequestAndResponseLtsIdInfo';
import { OpenAntiDDosServiceRequestBody } from './model/OpenAntiDDosServiceRequestBody';
import { QuotaResponseDdosQuota } from './model/QuotaResponseDdosQuota';
import { ShowDDosRequest } from './model/ShowDDosRequest';
import { ShowDDosResponse } from './model/ShowDDosResponse';
import { ShowDDosStatusRequest } from './model/ShowDDosStatusRequest';
import { ShowDDosStatusResponse } from './model/ShowDDosStatusResponse';
import { ShowDefaultConfigRequest } from './model/ShowDefaultConfigRequest';
import { ShowDefaultConfigResponse } from './model/ShowDefaultConfigResponse';
import { ShowLogConfigRequest } from './model/ShowLogConfigRequest';
import { ShowLogConfigResponse } from './model/ShowLogConfigResponse';
import { UpdateAntiDDosServiceRequestBody } from './model/UpdateAntiDDosServiceRequestBody';
import { UpdateDDosRequest } from './model/UpdateDDosRequest';
import { UpdateDDosResponse } from './model/UpdateDDosResponse';
import { UpdateLogConfigRequest } from './model/UpdateLogConfigRequest';
import { UpdateLogConfigResponse } from './model/UpdateLogConfigResponse';
import { WeeklyCount } from './model/WeeklyCount';
import { WeeklyTop10 } from './model/WeeklyTop10';

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
     * 配置用户的默认防护策略。配置防护策略后，新购买的资源在自动开启防护时，会按照该默认防护策略进行配置。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 配置Anti-DDoS默认防护策略
     * @param {DdosConfig} createDefaultConfigRequestBody 请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createDefaultConfig(createDefaultConfigRequest?: CreateDefaultConfigRequest): Promise<CreateDefaultConfigResponse> {
        const options = ParamCreater().createDefaultConfig(createDefaultConfigRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除用户配置的默认防护策略。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除Ani-DDoS默认防护策略
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteDefaultConfig(deleteDefaultConfigRequest?: DeleteDefaultConfigRequest): Promise<DeleteDefaultConfigResponse> {
        const options = ParamCreater().deleteDefaultConfig();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询用户配置的默认防护策略。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询Ani-DDoS默认防护策略
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showDefaultConfig(showDefaultConfigRequest?: ShowDefaultConfigRequest): Promise<ShowDefaultConfigResponse> {
        const options = ParamCreater().showDefaultConfig();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 开通DDoS服务
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 开通DDoS服务
     * @param {string} floatingIpId 用户EIP对应的ID
     * @param {OpenAntiDDosServiceRequestBody} openAntiDDosServiceRequestBody body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public enableDefensePolicy(enableDefensePolicyRequest?: EnableDefensePolicyRequest): Promise<EnableDefensePolicyResponse> {
        const options = ParamCreater().enableDefensePolicy(enableDefensePolicyRequest);

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
     * @param {string} [ip] IP地址，支持IPv4格式和IPv6格式输入，支持部分查询。例如“？ip&#x3D;192.168”，会返回192.168.111.1和10.192.168.8所对应的EIP防护状态。
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
     * 查询指定EIP在过去24小时之内的异常事件信息，异常事件包括清洗事件和黑洞事件，查询延迟在5分钟之内。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询指定EIP异常事件
     * @param {string} floatingIpId 用户EIP对应的ID
     * @param {'desc' | 'asc'} [sortDir] 可选范围： - desc：表示时间降序 - asc：表示时间升序 默认值为“desc”。
     * @param {string} [limit] 返回结果个数限制，此次查询返回数量最大值，取值范围：1～100，与offset配合使用。 若“limit”与“offset”均不携带则返回所有主机列表。
     * @param {string} [offset] 偏移量，“limit”携带时此字段有效。
     * @param {string} [ip] 用户EIP
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listDailyLog(listDailyLogRequest?: ListDailyLogRequest): Promise<ListDailyLogResponse> {
        const options = ParamCreater().listDailyLog(listDailyLogRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定EIP在过去24小时之内的防护流量信息，流量的间隔时间单位为5分钟。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询指定EIP防护流量
     * @param {string} floatingIpId 用户EIP对应的ID
     * @param {string} [ip] 用户EIP
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listDailyReport(listDailyReportRequest?: ListDailyReportRequest): Promise<ListDailyReportResponse> {
        const options = ParamCreater().listDailyReport(listDailyReportRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询配额
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询配额
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listQuota(listQuotaRequest?: ListQuotaRequest): Promise<ListQuotaResponse> {
        const options = ParamCreater().listQuota();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询用户所有Anti-DDoS防护周统计情况，包括一周内DDoS拦截次数和攻击次数、以及按照被攻击次数进行的排名信息等统计数据。系统支持当前时间之前四周的周统计数据查询，超过这个时间的请求是查询不到统计数据的。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询周防护统计情况
     * @param {string} [periodStartDate] 每周的起始时间
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listWeeklyReports(listWeeklyReportsRequest?: ListWeeklyReportsRequest): Promise<ListWeeklyReportsResponse> {
        const options = ParamCreater().listWeeklyReports(listWeeklyReportsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询配置的Anti-DDoS防护策略，用户可以查询指定EIP的Anti-DDoS防护策略。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询Anti-DDoS服务
     * @param {string} floatingIpId 用户EIP对应的ID
     * @param {string} [ip] 用户EIP
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showDDos(showDDosRequest?: ShowDDosRequest): Promise<ShowDDosResponse> {
        const options = ParamCreater().showDDos(showDDosRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定EIP的Anti-DDoS防护状态。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询指定EIP防护状态
     * @param {string} floatingIpId 用户EIP对应的ID
     * @param {string} [ip] 用户EIP
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showDDosStatus(showDDosStatusRequest?: ShowDDosStatusRequest): Promise<ShowDDosStatusResponse> {
        const options = ParamCreater().showDDosStatus(showDDosStatusRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询全量日志设置
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询全量日志设置
     * @param {string} enterpriseProjectId 企业项目id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showLogConfig(showLogConfigRequest?: ShowLogConfigRequest): Promise<ShowLogConfigResponse> {
        const options = ParamCreater().showLogConfig(showLogConfigRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新指定EIP的Anti-DDoS防护策略配置。调用成功，只是说明服务节点收到了关闭更新配置请求，操作是否成功需要通过任务查询接口查询该任务的执行状态，具体请参考查询Anti-DDoS任务。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新Anti-DDoS服务
     * @param {string} floatingIpId 用户EIP对应的ID
     * @param {UpdateAntiDDosServiceRequestBody} updateDDosRequestBody body
     * @param {string} [ip] ip
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateDDos(updateDDosRequest?: UpdateDDosRequest): Promise<UpdateDDosResponse> {
        const options = ParamCreater().updateDDos(updateDDosRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新用户全量日志设置
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新用户全量日志设置
     * @param {string} enterpriseProjectId 企业项目id
     * @param {LtsConfigRequestAndResponse} body body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateLogConfig(updateLogConfigRequest?: UpdateLogConfigRequest): Promise<UpdateLogConfigResponse> {
        const options = ParamCreater().updateLogConfig(updateLogConfigRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * 配置用户的默认防护策略。配置防护策略后，新购买的资源在自动开启防护时，会按照该默认防护策略进行配置。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createDefaultConfig(createDefaultConfigRequest?: CreateDefaultConfigRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/antiddos/default-config",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createDefaultConfigRequest !== null && createDefaultConfigRequest !== undefined) {
                if (createDefaultConfigRequest instanceof CreateDefaultConfigRequest) {
                    body = createDefaultConfigRequest.body
                } else {
                    body = createDefaultConfigRequest['body'];
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
         * 删除用户配置的默认防护策略。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteDefaultConfig() {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/antiddos/default-config",
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
         * 查询用户配置的默认防护策略。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showDefaultConfig() {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/antiddos/default-config",
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
         * 开通DDoS服务
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        enableDefensePolicy(enableDefensePolicyRequest?: EnableDefensePolicyRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/antiddos/{floating_ip_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let floatingIpId;

            if (enableDefensePolicyRequest !== null && enableDefensePolicyRequest !== undefined) {
                if (enableDefensePolicyRequest instanceof EnableDefensePolicyRequest) {
                    floatingIpId = enableDefensePolicyRequest.floatingIpId;
                    body = enableDefensePolicyRequest.body
                } else {
                    floatingIpId = enableDefensePolicyRequest['floating_ip_id'];
                    body = enableDefensePolicyRequest['body'];
                }
            }

        
            if (floatingIpId === null || floatingIpId === undefined) {
            throw new RequiredError('floatingIpId','Required parameter floatingIpId was null or undefined when calling enableDefensePolicy.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'floating_ip_id': floatingIpId, };
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
                url: "/v1/{project_id}/antiddos",
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
            
            let ip;

            if (listDDosStatusRequest !== null && listDDosStatusRequest !== undefined) {
                if (listDDosStatusRequest instanceof ListDDosStatusRequest) {
                    status = listDDosStatusRequest.status;
                    limit = listDDosStatusRequest.limit;
                    offset = listDDosStatusRequest.offset;
                    ip = listDDosStatusRequest.ip;
                } else {
                    status = listDDosStatusRequest['status'];
                    limit = listDDosStatusRequest['limit'];
                    offset = listDDosStatusRequest['offset'];
                    ip = listDDosStatusRequest['ip'];
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
            if (ip !== null && ip !== undefined) {
                localVarQueryParameter['ip'] = ip;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询指定EIP在过去24小时之内的异常事件信息，异常事件包括清洗事件和黑洞事件，查询延迟在5分钟之内。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listDailyLog(listDailyLogRequest?: ListDailyLogRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/antiddos/{floating_ip_id}/logs",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let floatingIpId;
            
            let sortDir;
            
            let limit;
            
            let offset;
            
            let ip;

            if (listDailyLogRequest !== null && listDailyLogRequest !== undefined) {
                if (listDailyLogRequest instanceof ListDailyLogRequest) {
                    floatingIpId = listDailyLogRequest.floatingIpId;
                    sortDir = listDailyLogRequest.sortDir;
                    limit = listDailyLogRequest.limit;
                    offset = listDailyLogRequest.offset;
                    ip = listDailyLogRequest.ip;
                } else {
                    floatingIpId = listDailyLogRequest['floating_ip_id'];
                    sortDir = listDailyLogRequest['sort_dir'];
                    limit = listDailyLogRequest['limit'];
                    offset = listDailyLogRequest['offset'];
                    ip = listDailyLogRequest['ip'];
                }
            }

        
            if (floatingIpId === null || floatingIpId === undefined) {
            throw new RequiredError('floatingIpId','Required parameter floatingIpId was null or undefined when calling listDailyLog.');
            }
            if (sortDir !== null && sortDir !== undefined) {
                localVarQueryParameter['sort_dir'] = sortDir;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (ip !== null && ip !== undefined) {
                localVarQueryParameter['ip'] = ip;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'floating_ip_id': floatingIpId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询指定EIP在过去24小时之内的防护流量信息，流量的间隔时间单位为5分钟。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listDailyReport(listDailyReportRequest?: ListDailyReportRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/antiddos/{floating_ip_id}/daily",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let floatingIpId;
            
            let ip;

            if (listDailyReportRequest !== null && listDailyReportRequest !== undefined) {
                if (listDailyReportRequest instanceof ListDailyReportRequest) {
                    floatingIpId = listDailyReportRequest.floatingIpId;
                    ip = listDailyReportRequest.ip;
                } else {
                    floatingIpId = listDailyReportRequest['floating_ip_id'];
                    ip = listDailyReportRequest['ip'];
                }
            }

        
            if (floatingIpId === null || floatingIpId === undefined) {
            throw new RequiredError('floatingIpId','Required parameter floatingIpId was null or undefined when calling listDailyReport.');
            }
            if (ip !== null && ip !== undefined) {
                localVarQueryParameter['ip'] = ip;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'floating_ip_id': floatingIpId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询配额
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listQuota() {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/antiddos/quotas",
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
         * 查询用户所有Anti-DDoS防护周统计情况，包括一周内DDoS拦截次数和攻击次数、以及按照被攻击次数进行的排名信息等统计数据。系统支持当前时间之前四周的周统计数据查询，超过这个时间的请求是查询不到统计数据的。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listWeeklyReports(listWeeklyReportsRequest?: ListWeeklyReportsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/antiddos/weekly",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let periodStartDate;

            if (listWeeklyReportsRequest !== null && listWeeklyReportsRequest !== undefined) {
                if (listWeeklyReportsRequest instanceof ListWeeklyReportsRequest) {
                    periodStartDate = listWeeklyReportsRequest.periodStartDate;
                } else {
                    periodStartDate = listWeeklyReportsRequest['period_start_date'];
                }
            }

        
            if (periodStartDate !== null && periodStartDate !== undefined) {
                localVarQueryParameter['period_start_date'] = periodStartDate;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询配置的Anti-DDoS防护策略，用户可以查询指定EIP的Anti-DDoS防护策略。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showDDos(showDDosRequest?: ShowDDosRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/antiddos/{floating_ip_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let floatingIpId;
            
            let ip;

            if (showDDosRequest !== null && showDDosRequest !== undefined) {
                if (showDDosRequest instanceof ShowDDosRequest) {
                    floatingIpId = showDDosRequest.floatingIpId;
                    ip = showDDosRequest.ip;
                } else {
                    floatingIpId = showDDosRequest['floating_ip_id'];
                    ip = showDDosRequest['ip'];
                }
            }

        
            if (floatingIpId === null || floatingIpId === undefined) {
            throw new RequiredError('floatingIpId','Required parameter floatingIpId was null or undefined when calling showDDos.');
            }
            if (ip !== null && ip !== undefined) {
                localVarQueryParameter['ip'] = ip;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'floating_ip_id': floatingIpId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询指定EIP的Anti-DDoS防护状态。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showDDosStatus(showDDosStatusRequest?: ShowDDosStatusRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/antiddos/{floating_ip_id}/status",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let floatingIpId;
            
            let ip;

            if (showDDosStatusRequest !== null && showDDosStatusRequest !== undefined) {
                if (showDDosStatusRequest instanceof ShowDDosStatusRequest) {
                    floatingIpId = showDDosStatusRequest.floatingIpId;
                    ip = showDDosStatusRequest.ip;
                } else {
                    floatingIpId = showDDosStatusRequest['floating_ip_id'];
                    ip = showDDosStatusRequest['ip'];
                }
            }

        
            if (floatingIpId === null || floatingIpId === undefined) {
            throw new RequiredError('floatingIpId','Required parameter floatingIpId was null or undefined when calling showDDosStatus.');
            }
            if (ip !== null && ip !== undefined) {
                localVarQueryParameter['ip'] = ip;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'floating_ip_id': floatingIpId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询全量日志设置
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showLogConfig(showLogConfigRequest?: ShowLogConfigRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/antiddos/lts-config",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let enterpriseProjectId;

            if (showLogConfigRequest !== null && showLogConfigRequest !== undefined) {
                if (showLogConfigRequest instanceof ShowLogConfigRequest) {
                    enterpriseProjectId = showLogConfigRequest.enterpriseProjectId;
                } else {
                    enterpriseProjectId = showLogConfigRequest['enterprise_project_id'];
                }
            }

        
            if (enterpriseProjectId === null || enterpriseProjectId === undefined) {
                throw new RequiredError('enterpriseProjectId','Required parameter enterpriseProjectId was null or undefined when calling showLogConfig.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新指定EIP的Anti-DDoS防护策略配置。调用成功，只是说明服务节点收到了关闭更新配置请求，操作是否成功需要通过任务查询接口查询该任务的执行状态，具体请参考查询Anti-DDoS任务。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateDDos(updateDDosRequest?: UpdateDDosRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/antiddos/{floating_ip_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let floatingIpId;
            
            let ip;

            if (updateDDosRequest !== null && updateDDosRequest !== undefined) {
                if (updateDDosRequest instanceof UpdateDDosRequest) {
                    floatingIpId = updateDDosRequest.floatingIpId;
                    body = updateDDosRequest.body
                    ip = updateDDosRequest.ip;
                } else {
                    floatingIpId = updateDDosRequest['floating_ip_id'];
                    body = updateDDosRequest['body'];
                    ip = updateDDosRequest['ip'];
                }
            }

        
            if (floatingIpId === null || floatingIpId === undefined) {
            throw new RequiredError('floatingIpId','Required parameter floatingIpId was null or undefined when calling updateDDos.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (ip !== null && ip !== undefined) {
                localVarQueryParameter['ip'] = ip;
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'floating_ip_id': floatingIpId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新用户全量日志设置
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateLogConfig(updateLogConfigRequest?: UpdateLogConfigRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/antiddos/lts-config",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let enterpriseProjectId;

            if (updateLogConfigRequest !== null && updateLogConfigRequest !== undefined) {
                if (updateLogConfigRequest instanceof UpdateLogConfigRequest) {
                    enterpriseProjectId = updateLogConfigRequest.enterpriseProjectId;
                    body = updateLogConfigRequest.body
                } else {
                    enterpriseProjectId = updateLogConfigRequest['enterprise_project_id'];
                    body = updateLogConfigRequest['body'];
                }
            }

        
            if (enterpriseProjectId === null || enterpriseProjectId === undefined) {
                throw new RequiredError('enterpriseProjectId','Required parameter enterpriseProjectId was null or undefined when calling updateLogConfig.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
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