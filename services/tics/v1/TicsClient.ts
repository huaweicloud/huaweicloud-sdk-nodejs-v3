import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { AgentListVo } from './model/AgentListVo';
import { DeployVo } from './model/DeployVo';
import { FlJobListVo } from './model/FlJobListVo';
import { JobReportBaseInfoVo } from './model/JobReportBaseInfoVo';
import { JobReportEnvVo } from './model/JobReportEnvVo';
import { JobReportOutputVo } from './model/JobReportOutputVo';
import { JobReportPartnerVo } from './model/JobReportPartnerVo';
import { LeagueDatasetStatisticsVo } from './model/LeagueDatasetStatisticsVo';
import { LeaguePartnerStatisticsVo } from './model/LeaguePartnerStatisticsVo';
import { LeagueUpdateVo } from './model/LeagueUpdateVo';
import { ListAgentsRequest } from './model/ListAgentsRequest';
import { ListAgentsResponse } from './model/ListAgentsResponse';
import { ListAuditInfoRequest } from './model/ListAuditInfoRequest';
import { ListAuditInfoResponse } from './model/ListAuditInfoResponse';
import { ListFlJobRequest } from './model/ListFlJobRequest';
import { ListFlJobResponse } from './model/ListFlJobResponse';
import { ListInstanceHistoryRequest } from './model/ListInstanceHistoryRequest';
import { ListInstanceHistoryResponse } from './model/ListInstanceHistoryResponse';
import { ListLeagueDatasetsRequest } from './model/ListLeagueDatasetsRequest';
import { ListLeagueDatasetsResponse } from './model/ListLeagueDatasetsResponse';
import { ListLeaguesRequest } from './model/ListLeaguesRequest';
import { ListLeaguesResponse } from './model/ListLeaguesResponse';
import { ListNodesRequest } from './model/ListNodesRequest';
import { ListNodesResponse } from './model/ListNodesResponse';
import { ListNoticesRequest } from './model/ListNoticesRequest';
import { ListNoticesResponse } from './model/ListNoticesResponse';
import { ListPartnersRequest } from './model/ListPartnersRequest';
import { ListPartnersResponse } from './model/ListPartnersResponse';
import { ListSqlJobRequest } from './model/ListSqlJobRequest';
import { ListSqlJobResponse } from './model/ListSqlJobResponse';
import { PartnerDataVo } from './model/PartnerDataVo';
import { ProcessorVo } from './model/ProcessorVo';
import { RoundDeployVo } from './model/RoundDeployVo';
import { ShowAgentDetailRequest } from './model/ShowAgentDetailRequest';
import { ShowAgentDetailResponse } from './model/ShowAgentDetailResponse';
import { ShowDatasetStatisticsRequest } from './model/ShowDatasetStatisticsRequest';
import { ShowDatasetStatisticsResponse } from './model/ShowDatasetStatisticsResponse';
import { ShowInstanceReportRequest } from './model/ShowInstanceReportRequest';
import { ShowInstanceReportResponse } from './model/ShowInstanceReportResponse';
import { ShowJobInstanceDagRequest } from './model/ShowJobInstanceDagRequest';
import { ShowJobInstanceDagResponse } from './model/ShowJobInstanceDagResponse';
import { ShowJobStatisticsRequest } from './model/ShowJobStatisticsRequest';
import { ShowJobStatisticsResponse } from './model/ShowJobStatisticsResponse';
import { ShowLeagueRequest } from './model/ShowLeagueRequest';
import { ShowLeagueResponse } from './model/ShowLeagueResponse';
import { ShowOverviewRequest } from './model/ShowOverviewRequest';
import { ShowOverviewResponse } from './model/ShowOverviewResponse';
import { ShowPartnerStatisticsRequest } from './model/ShowPartnerStatisticsRequest';
import { ShowPartnerStatisticsResponse } from './model/ShowPartnerStatisticsResponse';
import { StageVo } from './model/StageVo';
import { TicsAgentDeploy } from './model/TicsAgentDeploy';
import { TicsAgentDeployBcs } from './model/TicsAgentDeployBcs';
import { TicsAgentDeployDetail } from './model/TicsAgentDeployDetail';
import { TicsAgentNatCommonInfo } from './model/TicsAgentNatCommonInfo';
import { TicsAgentNodeInfo } from './model/TicsAgentNodeInfo';
import { TicsApproveLogVo } from './model/TicsApproveLogVo';
import { TicsDatasetColumn } from './model/TicsDatasetColumn';
import { TicsJobInstanceVo } from './model/TicsJobInstanceVo';
import { TicsLeagueAuditLog } from './model/TicsLeagueAuditLog';
import { TicsLeagueListVo } from './model/TicsLeagueListVo';
import { TicsLeagueNoticeVo } from './model/TicsLeagueNoticeVo';
import { TicsLeaguePartnerVo } from './model/TicsLeaguePartnerVo';
import { TicsSqlJobVo } from './model/TicsSqlJobVo';
import { TicsTrustInfoVo } from './model/TicsTrustInfoVo';
import { UpdateLeagueRequest } from './model/UpdateLeagueRequest';
import { UpdateLeagueResponse } from './model/UpdateLeagueResponse';

export class TicsClient {
    public static newBuilder(): ClientBuilder<TicsClient> {
            return new ClientBuilder<TicsClient>(newClient);
    }

    private hcClient: HcClient;
    public constructor(client: HcClient) {
        this.hcClient = client;
    }

    public getPath() {
        return __dirname;
    }


    /**
     * 功能描述：用户可以使用该接口获取可信节点信息列表。支持节点名称与联盟名称的模糊查询。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取计算节点列表
     * @param {number} limit 每页记录数，取值0-100
     * @param {number} offset 记录数偏移量 
     * @param {string} [agentName] 可信节点名称 
     * @param {string} [leagueName] 联盟名称 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAgents(listAgentsRequest?: ListAgentsRequest): Promise<ListAgentsResponse> {
        const options = ParamCreater().listAgents(listAgentsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询审计日志信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询审计日志
     * @param {string} leagueId 联盟id，最大32位，字母和数字组成
     * @param {number} limit 每页记录数，取值0-100
     * @param {number} offset 记录数偏移量 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAuditInfo(listAuditInfoRequest?: ListAuditInfoRequest): Promise<ListAuditInfoResponse> {
        const options = ParamCreater().listAuditInfo(listAuditInfoRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询联邦学习作业列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询联邦学习作业列表
     * @param {string} leagueId 联盟id，最大32位，字母和数字组成
     * @param {number} limit 每页记录数，取值0-100
     * @param {number} offset 记录数偏移量 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listFlJob(listFlJobRequest?: ListFlJobRequest): Promise<ListFlJobResponse> {
        const options = ParamCreater().listFlJob(listFlJobRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询作业的历史实例列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询作业的历史实例列表
     * @param {string} leagueId 联盟id，最大32位，字母和数字组成
     * @param {number} limit 每页记录数，取值0-100
     * @param {number} offset 记录数偏移量 
     * @param {string} [jobId] 任务id，最大32位，字母和数字组成
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listInstanceHistory(listInstanceHistoryRequest?: ListInstanceHistoryRequest): Promise<ListInstanceHistoryResponse> {
        const options = ParamCreater().listInstanceHistory(listInstanceHistoryRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 功能描述：用户可以使用该接口查询联盟已注册数据集列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询联盟已注册数据集列表
     * @param {string} leagueId 联盟id，最大32位，字母和数字组成
     * @param {number} offset 记录数偏移量 
     * @param {number} limit 每页记录数，取值0-100
     * @param {string} [datasetName] 数据集名称
     * @param {string} [partnerName] partner_name
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listLeagueDatasets(listLeagueDatasetsRequest?: ListLeagueDatasetsRequest): Promise<ListLeagueDatasetsResponse> {
        const options = ParamCreater().listLeagueDatasets(listLeagueDatasetsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 功能描述：用户可以使用该接口获取联盟列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取联盟列表
     * @param {number} limit 每页记录数，取值0-100
     * @param {number} offset 记录数偏移量 
     * @param {'owned' | 'participativenormal'} type 查询的联盟类型，owned:创建者，participativenormal:参与者
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listLeagues(listLeaguesRequest?: ListLeaguesRequest): Promise<ListLeaguesResponse> {
        const options = ParamCreater().listLeagues(listLeaguesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 功能描述：用户可以使用该接口查询联盟可信节点（包含聚合节点和计算节点）列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询联盟节点列表
     * @param {string} leagueId 联盟id，最大32位，字母和数字组成
     * @param {number} offset 记录数偏移量 
     * @param {number} limit 每页记录数，取值0-100
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listNodes(listNodesRequest?: ListNodesRequest): Promise<ListNodesResponse> {
        const options = ParamCreater().listNodes(listNodesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 功能描述：用户可以使用该接口查询通知管理列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询通知管理列表
     * @param {number} limit 每页记录数，取值0-100
     * @param {number} offset 记录数偏移量 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listNotices(listNoticesRequest?: ListNoticesRequest): Promise<ListNoticesResponse> {
        const options = ParamCreater().listNotices(listNoticesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 功能描述：用户可以使用该接口获取联盟组员信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取联盟组员信息
     * @param {number} limit 每页记录数，取值0-100
     * @param {number} offset 记录数偏移量 
     * @param {string} leagueId 联盟id，最大32位，字母和数字组成
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listPartners(listPartnersRequest?: ListPartnersRequest): Promise<ListPartnersResponse> {
        const options = ParamCreater().listPartners(listPartnersRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询联邦分析作业列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询联邦分析作业列表
     * @param {string} leagueId 联盟id，最大32位，字母和数字组成
     * @param {number} limit 每页记录数，取值0-100
     * @param {number} offset 记录数偏移量 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listSqlJob(listSqlJobRequest?: ListSqlJobRequest): Promise<ListSqlJobResponse> {
        const options = ParamCreater().listSqlJob(listSqlJobRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 功能描述：用户可以使用该接口获取单个可信计算节点详情信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取计算节点详情信息
     * @param {string} agentId 可信节点ID 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showAgentDetail(showAgentDetailRequest?: ShowAgentDetailRequest): Promise<ShowAgentDetailResponse> {
        const options = ParamCreater().showAgentDetail(showAgentDetailRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 用户可以使用该接口进行联盟数据集统计。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 数据集统计
     * @param {string} leagueId 联盟id，最大32位，字母和数字组成
     * @param {string} [startDate] 开始日期
     * @param {string} [endDate] 结束日期
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showDatasetStatistics(showDatasetStatisticsRequest?: ShowDatasetStatisticsRequest): Promise<ShowDatasetStatisticsResponse> {
        const options = ParamCreater().showDatasetStatistics(showDatasetStatisticsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询实例执行报告
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询实例执行报告
     * @param {string} instanceId 实例id，最大32位，字母和数字组成
     * @param {string} leagueId 联盟id，最大32位，字母和数字组成
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showInstanceReport(showInstanceReportRequest?: ShowInstanceReportRequest): Promise<ShowInstanceReportResponse> {
        const options = ParamCreater().showInstanceReport(showInstanceReportRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取实例执行图
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取实例执行图
     * @param {string} instanceId 实例id，最大32位，字母和数字组成
     * @param {string} leagueId 联盟id，最大32位，字母和数字组成
     * @param {number} roundId 轮数，最小值0最大值0x7fffffff
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showJobInstanceDag(showJobInstanceDagRequest?: ShowJobInstanceDagRequest): Promise<ShowJobInstanceDagResponse> {
        const options = ParamCreater().showJobInstanceDag(showJobInstanceDagRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 功能描述：用户可以使用该接口进行联盟作业统计。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 作业统计
     * @param {string} leagueId 联盟id，最大32位，字母和数字组成
     * @param {string} [startDate] 开始日期
     * @param {string} [endDate] 结束日期
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showJobStatistics(showJobStatisticsRequest?: ShowJobStatisticsRequest): Promise<ShowJobStatisticsResponse> {
        const options = ParamCreater().showJobStatistics(showJobStatisticsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 功能描述：用户可以使用该接口获取联盟详细信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取联盟详细信息
     * @param {string} leagueId 联盟id，最大32位，字母和数字组成
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showLeague(showLeagueRequest?: ShowLeagueRequest): Promise<ShowLeagueResponse> {
        const options = ParamCreater().showLeague(showLeagueRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询当前租户的联盟及代理统计数量
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询租户下统计信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showOverview(showOverviewRequest?: ShowOverviewRequest): Promise<ShowOverviewResponse> {
        const options = ParamCreater().showOverview();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 功能描述：用户可以使用该接口进行联盟合作方统计。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 合作方统计
     * @param {string} leagueId 联盟id，最大32位，字母和数字组成
     * @param {string} [startDate] 开始日期
     * @param {string} [endDate] 结束日期
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showPartnerStatistics(showPartnerStatisticsRequest?: ShowPartnerStatisticsRequest): Promise<ShowPartnerStatisticsResponse> {
        const options = ParamCreater().showPartnerStatistics(showPartnerStatisticsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 功能描述：用户可以使用接口更新联盟信息（包含联盟描述，联盟版本，隐私保护等级，查分隐私开关）。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新联盟信息
     * @param {string} leagueId 联盟id，最大32位，字母和数字组成
     * @param {LeagueUpdateVo} [leagueUpdateVo] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateLeague(updateLeagueRequest?: UpdateLeagueRequest): Promise<UpdateLeagueResponse> {
        const options = ParamCreater().updateLeague(updateLeagueRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * 功能描述：用户可以使用该接口获取可信节点信息列表。支持节点名称与联盟名称的模糊查询。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAgents(listAgentsRequest?: ListAgentsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/agents",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let limit;
            
            let offset;
            
            let agentName;
            
            let leagueName;

            if (listAgentsRequest !== null && listAgentsRequest !== undefined) {
                if (listAgentsRequest instanceof ListAgentsRequest) {
                    limit = listAgentsRequest.limit;
                    offset = listAgentsRequest.offset;
                    agentName = listAgentsRequest.agentName;
                    leagueName = listAgentsRequest.leagueName;
                } else {
                    limit = listAgentsRequest['limit'];
                    offset = listAgentsRequest['offset'];
                    agentName = listAgentsRequest['agent_name'];
                    leagueName = listAgentsRequest['league_name'];
                }
            }

        
            if (limit === null || limit === undefined) {
                throw new RequiredError('limit','Required parameter limit was null or undefined when calling listAgents.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset === null || offset === undefined) {
                throw new RequiredError('offset','Required parameter offset was null or undefined when calling listAgents.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (agentName !== null && agentName !== undefined) {
                localVarQueryParameter['agent_name'] = agentName;
            }
            if (leagueName !== null && leagueName !== undefined) {
                localVarQueryParameter['league_name'] = leagueName;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询审计日志信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAuditInfo(listAuditInfoRequest?: ListAuditInfoRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/leagues/{league_id}/audit-info",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let leagueId;
            
            let limit;
            
            let offset;

            if (listAuditInfoRequest !== null && listAuditInfoRequest !== undefined) {
                if (listAuditInfoRequest instanceof ListAuditInfoRequest) {
                    leagueId = listAuditInfoRequest.leagueId;
                    limit = listAuditInfoRequest.limit;
                    offset = listAuditInfoRequest.offset;
                } else {
                    leagueId = listAuditInfoRequest['league_id'];
                    limit = listAuditInfoRequest['limit'];
                    offset = listAuditInfoRequest['offset'];
                }
            }

        
            if (leagueId === null || leagueId === undefined) {
            throw new RequiredError('leagueId','Required parameter leagueId was null or undefined when calling listAuditInfo.');
            }
            if (limit === null || limit === undefined) {
                throw new RequiredError('limit','Required parameter limit was null or undefined when calling listAuditInfo.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset === null || offset === undefined) {
                throw new RequiredError('offset','Required parameter offset was null or undefined when calling listAuditInfo.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'league_id': leagueId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询联邦学习作业列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listFlJob(listFlJobRequest?: ListFlJobRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/leagues/{league_id}/fl-jobs",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let leagueId;
            
            let limit;
            
            let offset;

            if (listFlJobRequest !== null && listFlJobRequest !== undefined) {
                if (listFlJobRequest instanceof ListFlJobRequest) {
                    leagueId = listFlJobRequest.leagueId;
                    limit = listFlJobRequest.limit;
                    offset = listFlJobRequest.offset;
                } else {
                    leagueId = listFlJobRequest['league_id'];
                    limit = listFlJobRequest['limit'];
                    offset = listFlJobRequest['offset'];
                }
            }

        
            if (leagueId === null || leagueId === undefined) {
            throw new RequiredError('leagueId','Required parameter leagueId was null or undefined when calling listFlJob.');
            }
            if (limit === null || limit === undefined) {
                throw new RequiredError('limit','Required parameter limit was null or undefined when calling listFlJob.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset === null || offset === undefined) {
                throw new RequiredError('offset','Required parameter offset was null or undefined when calling listFlJob.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'league_id': leagueId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询作业的历史实例列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listInstanceHistory(listInstanceHistoryRequest?: ListInstanceHistoryRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/leagues/{league_id}/job-instances",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let leagueId;
            
            let limit;
            
            let offset;
            
            let jobId;

            if (listInstanceHistoryRequest !== null && listInstanceHistoryRequest !== undefined) {
                if (listInstanceHistoryRequest instanceof ListInstanceHistoryRequest) {
                    leagueId = listInstanceHistoryRequest.leagueId;
                    limit = listInstanceHistoryRequest.limit;
                    offset = listInstanceHistoryRequest.offset;
                    jobId = listInstanceHistoryRequest.jobId;
                } else {
                    leagueId = listInstanceHistoryRequest['league_id'];
                    limit = listInstanceHistoryRequest['limit'];
                    offset = listInstanceHistoryRequest['offset'];
                    jobId = listInstanceHistoryRequest['job_id'];
                }
            }

        
            if (leagueId === null || leagueId === undefined) {
            throw new RequiredError('leagueId','Required parameter leagueId was null or undefined when calling listInstanceHistory.');
            }
            if (limit === null || limit === undefined) {
                throw new RequiredError('limit','Required parameter limit was null or undefined when calling listInstanceHistory.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset === null || offset === undefined) {
                throw new RequiredError('offset','Required parameter offset was null or undefined when calling listInstanceHistory.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (jobId !== null && jobId !== undefined) {
                localVarQueryParameter['job_id'] = jobId;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'league_id': leagueId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 功能描述：用户可以使用该接口查询联盟已注册数据集列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listLeagueDatasets(listLeagueDatasetsRequest?: ListLeagueDatasetsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/leagues/{league_id}/datasets",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let leagueId;
            
            let offset;
            
            let limit;
            
            let datasetName;
            
            let partnerName;

            if (listLeagueDatasetsRequest !== null && listLeagueDatasetsRequest !== undefined) {
                if (listLeagueDatasetsRequest instanceof ListLeagueDatasetsRequest) {
                    leagueId = listLeagueDatasetsRequest.leagueId;
                    offset = listLeagueDatasetsRequest.offset;
                    limit = listLeagueDatasetsRequest.limit;
                    datasetName = listLeagueDatasetsRequest.datasetName;
                    partnerName = listLeagueDatasetsRequest.partnerName;
                } else {
                    leagueId = listLeagueDatasetsRequest['league_id'];
                    offset = listLeagueDatasetsRequest['offset'];
                    limit = listLeagueDatasetsRequest['limit'];
                    datasetName = listLeagueDatasetsRequest['dataset_name'];
                    partnerName = listLeagueDatasetsRequest['partner_name'];
                }
            }

        
            if (leagueId === null || leagueId === undefined) {
            throw new RequiredError('leagueId','Required parameter leagueId was null or undefined when calling listLeagueDatasets.');
            }
            if (offset === null || offset === undefined) {
                throw new RequiredError('offset','Required parameter offset was null or undefined when calling listLeagueDatasets.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit === null || limit === undefined) {
                throw new RequiredError('limit','Required parameter limit was null or undefined when calling listLeagueDatasets.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (datasetName !== null && datasetName !== undefined) {
                localVarQueryParameter['dataset_name'] = datasetName;
            }
            if (partnerName !== null && partnerName !== undefined) {
                localVarQueryParameter['partner_name'] = partnerName;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'league_id': leagueId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 功能描述：用户可以使用该接口获取联盟列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listLeagues(listLeaguesRequest?: ListLeaguesRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/league-info",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let limit;
            
            let offset;
            
            let type;

            if (listLeaguesRequest !== null && listLeaguesRequest !== undefined) {
                if (listLeaguesRequest instanceof ListLeaguesRequest) {
                    limit = listLeaguesRequest.limit;
                    offset = listLeaguesRequest.offset;
                    type = listLeaguesRequest.type;
                } else {
                    limit = listLeaguesRequest['limit'];
                    offset = listLeaguesRequest['offset'];
                    type = listLeaguesRequest['type'];
                }
            }

        
            if (limit === null || limit === undefined) {
                throw new RequiredError('limit','Required parameter limit was null or undefined when calling listLeagues.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset === null || offset === undefined) {
                throw new RequiredError('offset','Required parameter offset was null or undefined when calling listLeagues.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (type === null || type === undefined) {
                throw new RequiredError('type','Required parameter type was null or undefined when calling listLeagues.');
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 功能描述：用户可以使用该接口查询联盟可信节点（包含聚合节点和计算节点）列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listNodes(listNodesRequest?: ListNodesRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/leagues/{league_id}/nodes",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let leagueId;
            
            let offset;
            
            let limit;

            if (listNodesRequest !== null && listNodesRequest !== undefined) {
                if (listNodesRequest instanceof ListNodesRequest) {
                    leagueId = listNodesRequest.leagueId;
                    offset = listNodesRequest.offset;
                    limit = listNodesRequest.limit;
                } else {
                    leagueId = listNodesRequest['league_id'];
                    offset = listNodesRequest['offset'];
                    limit = listNodesRequest['limit'];
                }
            }

        
            if (leagueId === null || leagueId === undefined) {
            throw new RequiredError('leagueId','Required parameter leagueId was null or undefined when calling listNodes.');
            }
            if (offset === null || offset === undefined) {
                throw new RequiredError('offset','Required parameter offset was null or undefined when calling listNodes.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit === null || limit === undefined) {
                throw new RequiredError('limit','Required parameter limit was null or undefined when calling listNodes.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'league_id': leagueId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 功能描述：用户可以使用该接口查询通知管理列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listNotices(listNoticesRequest?: ListNoticesRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/notices",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let limit;
            
            let offset;

            if (listNoticesRequest !== null && listNoticesRequest !== undefined) {
                if (listNoticesRequest instanceof ListNoticesRequest) {
                    limit = listNoticesRequest.limit;
                    offset = listNoticesRequest.offset;
                } else {
                    limit = listNoticesRequest['limit'];
                    offset = listNoticesRequest['offset'];
                }
            }

        
            if (limit === null || limit === undefined) {
                throw new RequiredError('limit','Required parameter limit was null or undefined when calling listNotices.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset === null || offset === undefined) {
                throw new RequiredError('offset','Required parameter offset was null or undefined when calling listNotices.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 功能描述：用户可以使用该接口获取联盟组员信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listPartners(listPartnersRequest?: ListPartnersRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/leagues/{league_id}/partners",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let limit;
            
            let offset;
            
            let leagueId;

            if (listPartnersRequest !== null && listPartnersRequest !== undefined) {
                if (listPartnersRequest instanceof ListPartnersRequest) {
                    limit = listPartnersRequest.limit;
                    offset = listPartnersRequest.offset;
                    leagueId = listPartnersRequest.leagueId;
                } else {
                    limit = listPartnersRequest['limit'];
                    offset = listPartnersRequest['offset'];
                    leagueId = listPartnersRequest['league_id'];
                }
            }

        
            if (limit === null || limit === undefined) {
                throw new RequiredError('limit','Required parameter limit was null or undefined when calling listPartners.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset === null || offset === undefined) {
                throw new RequiredError('offset','Required parameter offset was null or undefined when calling listPartners.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (leagueId === null || leagueId === undefined) {
            throw new RequiredError('leagueId','Required parameter leagueId was null or undefined when calling listPartners.');
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'league_id': leagueId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询联邦分析作业列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listSqlJob(listSqlJobRequest?: ListSqlJobRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/leagues/{league_id}/sql-jobs",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let leagueId;
            
            let limit;
            
            let offset;

            if (listSqlJobRequest !== null && listSqlJobRequest !== undefined) {
                if (listSqlJobRequest instanceof ListSqlJobRequest) {
                    leagueId = listSqlJobRequest.leagueId;
                    limit = listSqlJobRequest.limit;
                    offset = listSqlJobRequest.offset;
                } else {
                    leagueId = listSqlJobRequest['league_id'];
                    limit = listSqlJobRequest['limit'];
                    offset = listSqlJobRequest['offset'];
                }
            }

        
            if (leagueId === null || leagueId === undefined) {
            throw new RequiredError('leagueId','Required parameter leagueId was null or undefined when calling listSqlJob.');
            }
            if (limit === null || limit === undefined) {
                throw new RequiredError('limit','Required parameter limit was null or undefined when calling listSqlJob.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset === null || offset === undefined) {
                throw new RequiredError('offset','Required parameter offset was null or undefined when calling listSqlJob.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'league_id': leagueId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 功能描述：用户可以使用该接口获取单个可信计算节点详情信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showAgentDetail(showAgentDetailRequest?: ShowAgentDetailRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/agents/{agent_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let agentId;

            if (showAgentDetailRequest !== null && showAgentDetailRequest !== undefined) {
                if (showAgentDetailRequest instanceof ShowAgentDetailRequest) {
                    agentId = showAgentDetailRequest.agentId;
                } else {
                    agentId = showAgentDetailRequest['agent_id'];
                }
            }

        
            if (agentId === null || agentId === undefined) {
            throw new RequiredError('agentId','Required parameter agentId was null or undefined when calling showAgentDetail.');
            }

            options.pathParams = { 'agent_id': agentId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 用户可以使用该接口进行联盟数据集统计。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showDatasetStatistics(showDatasetStatisticsRequest?: ShowDatasetStatisticsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/leagues/{league_id}/datasets-statistics",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let leagueId;
            
            let startDate;
            
            let endDate;

            if (showDatasetStatisticsRequest !== null && showDatasetStatisticsRequest !== undefined) {
                if (showDatasetStatisticsRequest instanceof ShowDatasetStatisticsRequest) {
                    leagueId = showDatasetStatisticsRequest.leagueId;
                    startDate = showDatasetStatisticsRequest.startDate;
                    endDate = showDatasetStatisticsRequest.endDate;
                } else {
                    leagueId = showDatasetStatisticsRequest['league_id'];
                    startDate = showDatasetStatisticsRequest['start_date'];
                    endDate = showDatasetStatisticsRequest['end_date'];
                }
            }

        
            if (leagueId === null || leagueId === undefined) {
            throw new RequiredError('leagueId','Required parameter leagueId was null or undefined when calling showDatasetStatistics.');
            }
            if (startDate !== null && startDate !== undefined) {
                localVarQueryParameter['start_date'] = startDate;
            }
            if (endDate !== null && endDate !== undefined) {
                localVarQueryParameter['end_date'] = endDate;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'league_id': leagueId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询实例执行报告
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showInstanceReport(showInstanceReportRequest?: ShowInstanceReportRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/leagues/{league_id}/job-instances/{instance_id}/report",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let leagueId;

            if (showInstanceReportRequest !== null && showInstanceReportRequest !== undefined) {
                if (showInstanceReportRequest instanceof ShowInstanceReportRequest) {
                    instanceId = showInstanceReportRequest.instanceId;
                    leagueId = showInstanceReportRequest.leagueId;
                } else {
                    instanceId = showInstanceReportRequest['instance_id'];
                    leagueId = showInstanceReportRequest['league_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showInstanceReport.');
            }
            if (leagueId === null || leagueId === undefined) {
            throw new RequiredError('leagueId','Required parameter leagueId was null or undefined when calling showInstanceReport.');
            }

            options.pathParams = { 'instance_id': instanceId,'league_id': leagueId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取实例执行图
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showJobInstanceDag(showJobInstanceDagRequest?: ShowJobInstanceDagRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/leagues/{league_id}/job-instances/{instance_id}/dag",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let leagueId;
            
            let roundId;

            if (showJobInstanceDagRequest !== null && showJobInstanceDagRequest !== undefined) {
                if (showJobInstanceDagRequest instanceof ShowJobInstanceDagRequest) {
                    instanceId = showJobInstanceDagRequest.instanceId;
                    leagueId = showJobInstanceDagRequest.leagueId;
                    roundId = showJobInstanceDagRequest.roundId;
                } else {
                    instanceId = showJobInstanceDagRequest['instance_id'];
                    leagueId = showJobInstanceDagRequest['league_id'];
                    roundId = showJobInstanceDagRequest['round_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showJobInstanceDag.');
            }
            if (leagueId === null || leagueId === undefined) {
            throw new RequiredError('leagueId','Required parameter leagueId was null or undefined when calling showJobInstanceDag.');
            }
            if (roundId === null || roundId === undefined) {
                throw new RequiredError('roundId','Required parameter roundId was null or undefined when calling showJobInstanceDag.');
            }
            if (roundId !== null && roundId !== undefined) {
                localVarQueryParameter['round_id'] = roundId;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId,'league_id': leagueId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 功能描述：用户可以使用该接口进行联盟作业统计。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showJobStatistics(showJobStatisticsRequest?: ShowJobStatisticsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/leagues/{league_id}/jobs-statistics",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let leagueId;
            
            let startDate;
            
            let endDate;

            if (showJobStatisticsRequest !== null && showJobStatisticsRequest !== undefined) {
                if (showJobStatisticsRequest instanceof ShowJobStatisticsRequest) {
                    leagueId = showJobStatisticsRequest.leagueId;
                    startDate = showJobStatisticsRequest.startDate;
                    endDate = showJobStatisticsRequest.endDate;
                } else {
                    leagueId = showJobStatisticsRequest['league_id'];
                    startDate = showJobStatisticsRequest['start_date'];
                    endDate = showJobStatisticsRequest['end_date'];
                }
            }

        
            if (leagueId === null || leagueId === undefined) {
            throw new RequiredError('leagueId','Required parameter leagueId was null or undefined when calling showJobStatistics.');
            }
            if (startDate !== null && startDate !== undefined) {
                localVarQueryParameter['start_date'] = startDate;
            }
            if (endDate !== null && endDate !== undefined) {
                localVarQueryParameter['end_date'] = endDate;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'league_id': leagueId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 功能描述：用户可以使用该接口获取联盟详细信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showLeague(showLeagueRequest?: ShowLeagueRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/leagues/{league_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let leagueId;

            if (showLeagueRequest !== null && showLeagueRequest !== undefined) {
                if (showLeagueRequest instanceof ShowLeagueRequest) {
                    leagueId = showLeagueRequest.leagueId;
                } else {
                    leagueId = showLeagueRequest['league_id'];
                }
            }

        
            if (leagueId === null || leagueId === undefined) {
            throw new RequiredError('leagueId','Required parameter leagueId was null or undefined when calling showLeague.');
            }

            options.pathParams = { 'league_id': leagueId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询当前租户的联盟及代理统计数量
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showOverview() {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/overview/statistics",
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
         * 功能描述：用户可以使用该接口进行联盟合作方统计。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showPartnerStatistics(showPartnerStatisticsRequest?: ShowPartnerStatisticsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/leagues/{league_id}/partners-statistics",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let leagueId;
            
            let startDate;
            
            let endDate;

            if (showPartnerStatisticsRequest !== null && showPartnerStatisticsRequest !== undefined) {
                if (showPartnerStatisticsRequest instanceof ShowPartnerStatisticsRequest) {
                    leagueId = showPartnerStatisticsRequest.leagueId;
                    startDate = showPartnerStatisticsRequest.startDate;
                    endDate = showPartnerStatisticsRequest.endDate;
                } else {
                    leagueId = showPartnerStatisticsRequest['league_id'];
                    startDate = showPartnerStatisticsRequest['start_date'];
                    endDate = showPartnerStatisticsRequest['end_date'];
                }
            }

        
            if (leagueId === null || leagueId === undefined) {
            throw new RequiredError('leagueId','Required parameter leagueId was null or undefined when calling showPartnerStatistics.');
            }
            if (startDate !== null && startDate !== undefined) {
                localVarQueryParameter['start_date'] = startDate;
            }
            if (endDate !== null && endDate !== undefined) {
                localVarQueryParameter['end_date'] = endDate;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'league_id': leagueId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 功能描述：用户可以使用接口更新联盟信息（包含联盟描述，联盟版本，隐私保护等级，查分隐私开关）。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateLeague(updateLeagueRequest?: UpdateLeagueRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/leagues/{league_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let leagueId;

            if (updateLeagueRequest !== null && updateLeagueRequest !== undefined) {
                if (updateLeagueRequest instanceof UpdateLeagueRequest) {
                    leagueId = updateLeagueRequest.leagueId;
                    body = updateLeagueRequest.body
                } else {
                    leagueId = updateLeagueRequest['league_id'];
                    body = updateLeagueRequest['body'];
                }
            }

        
            if (leagueId === null || leagueId === undefined) {
            throw new RequiredError('leagueId','Required parameter leagueId was null or undefined when calling updateLeague.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'league_id': leagueId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
    }
};

function newClient(client: HcClient): TicsClient {
    return new TicsClient(client);
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