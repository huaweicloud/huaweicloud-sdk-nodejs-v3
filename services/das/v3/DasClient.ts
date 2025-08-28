import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { AddFullSqlTaskBody } from './model/AddFullSqlTaskBody';
import { AddFullSqlTaskRequest } from './model/AddFullSqlTaskRequest';
import { AddFullSqlTaskResponse } from './model/AddFullSqlTaskResponse';
import { AdviceResult } from './model/AdviceResult';
import { ApiListConnectionsInfoRespDasConnInfoList } from './model/ApiListConnectionsInfoRespDasConnInfoList';
import { ApiSetMetricCodeThresholdReq } from './model/ApiSetMetricCodeThresholdReq';
import { ApiVersion } from './model/ApiVersion';
import { CancelShareConnectionsRequest } from './model/CancelShareConnectionsRequest';
import { CancelShareConnectionsRequestBody } from './model/CancelShareConnectionsRequestBody';
import { CancelShareConnectionsResponse } from './model/CancelShareConnectionsResponse';
import { ChangeChargeModeBody } from './model/ChangeChargeModeBody';
import { ChangeChargeModeRequest } from './model/ChangeChargeModeRequest';
import { ChangeChargeModeResponse } from './model/ChangeChargeModeResponse';
import { ChangeSqlLimitSwitchStatusBody } from './model/ChangeSqlLimitSwitchStatusBody';
import { ChangeSqlLimitSwitchStatusRequest } from './model/ChangeSqlLimitSwitchStatusRequest';
import { ChangeSqlLimitSwitchStatusResponse } from './model/ChangeSqlLimitSwitchStatusResponse';
import { ChangeSqlSwitchBody } from './model/ChangeSqlSwitchBody';
import { ChangeSqlSwitchRequest } from './model/ChangeSqlSwitchRequest';
import { ChangeSqlSwitchResponse } from './model/ChangeSqlSwitchResponse';
import { ChangeTransactionSwitchStatusRequest } from './model/ChangeTransactionSwitchStatusRequest';
import { ChangeTransactionSwitchStatusResponse } from './model/ChangeTransactionSwitchStatusResponse';
import { CreateHealthReportReq } from './model/CreateHealthReportReq';
import { CreateHealthReportTaskRequest } from './model/CreateHealthReportTaskRequest';
import { CreateHealthReportTaskResponse } from './model/CreateHealthReportTaskResponse';
import { CreateInstanceConnectionReq } from './model/CreateInstanceConnectionReq';
import { CreateInstanceConnectionRequest } from './model/CreateInstanceConnectionRequest';
import { CreateInstanceConnectionResponse } from './model/CreateInstanceConnectionResponse';
import { CreateShareConnectionsRequest } from './model/CreateShareConnectionsRequest';
import { CreateShareConnectionsRequestBody } from './model/CreateShareConnectionsRequestBody';
import { CreateShareConnectionsResponse } from './model/CreateShareConnectionsResponse';
import { CreateSpaceAnalysisTaskBody } from './model/CreateSpaceAnalysisTaskBody';
import { CreateSpaceAnalysisTaskRequest } from './model/CreateSpaceAnalysisTaskRequest';
import { CreateSpaceAnalysisTaskResponse } from './model/CreateSpaceAnalysisTaskResponse';
import { CreateSqlLimitRuleOption } from './model/CreateSqlLimitRuleOption';
import { CreateSqlLimitRulesBody } from './model/CreateSqlLimitRulesBody';
import { CreateSqlLimitRulesRequest } from './model/CreateSqlLimitRulesRequest';
import { CreateSqlLimitRulesResponse } from './model/CreateSqlLimitRulesResponse';
import { CreateTuningReq } from './model/CreateTuningReq';
import { CreateTuningRequest } from './model/CreateTuningRequest';
import { CreateTuningResponse } from './model/CreateTuningResponse';
import { DASInstanceInfo } from './model/DASInstanceInfo';
import { DbObjectSpaceInfo } from './model/DbObjectSpaceInfo';
import { DbUser } from './model/DbUser';
import { DeleteDbUserRequest } from './model/DeleteDbUserRequest';
import { DeleteDbUserResponse } from './model/DeleteDbUserResponse';
import { DeleteProcessReqBody } from './model/DeleteProcessReqBody';
import { DeleteProcessRequest } from './model/DeleteProcessRequest';
import { DeleteProcessResponse } from './model/DeleteProcessResponse';
import { DeleteSqlLimitRulesBody } from './model/DeleteSqlLimitRulesBody';
import { DeleteSqlLimitRulesRequest } from './model/DeleteSqlLimitRulesRequest';
import { DeleteSqlLimitRulesResponse } from './model/DeleteSqlLimitRulesResponse';
import { ExecutionPlan } from './model/ExecutionPlan';
import { Explain } from './model/Explain';
import { ExportFullSqlDetailsRequest } from './model/ExportFullSqlDetailsRequest';
import { ExportFullSqlDetailsResponse } from './model/ExportFullSqlDetailsResponse';
import { ExportSlowQueryLogsRequest } from './model/ExportSlowQueryLogsRequest';
import { ExportSlowQueryLogsResponse } from './model/ExportSlowQueryLogsResponse';
import { ExportSlowSqlStatisticsRequest } from './model/ExportSlowSqlStatisticsRequest';
import { ExportSlowSqlStatisticsRequestBody } from './model/ExportSlowSqlStatisticsRequestBody';
import { ExportSlowSqlStatisticsResponse } from './model/ExportSlowSqlStatisticsResponse';
import { ExportSlowSqlTemplatesDetailsRequest } from './model/ExportSlowSqlTemplatesDetailsRequest';
import { ExportSlowSqlTemplatesDetailsResponse } from './model/ExportSlowSqlTemplatesDetailsResponse';
import { ExportSlowSqlTrendDetailsRequest } from './model/ExportSlowSqlTrendDetailsRequest';
import { ExportSlowSqlTrendDetailsResponse } from './model/ExportSlowSqlTrendDetailsResponse';
import { ExportSqlStatementsRequest } from './model/ExportSqlStatementsRequest';
import { ExportSqlStatementsResponse } from './model/ExportSqlStatementsResponse';
import { ExportTopRiskInstancesRequest } from './model/ExportTopRiskInstancesRequest';
import { ExportTopRiskInstancesResponse } from './model/ExportTopRiskInstancesResponse';
import { ExportTopSqlTemplatesDetailsRequest } from './model/ExportTopSqlTemplatesDetailsRequest';
import { ExportTopSqlTemplatesDetailsResponse } from './model/ExportTopSqlTemplatesDetailsResponse';
import { ExportTopSqlTrendDetailsRequest } from './model/ExportTopSqlTrendDetailsRequest';
import { ExportTopSqlTrendDetailsResponse } from './model/ExportTopSqlTrendDetailsResponse';
import { FeedbackInfo } from './model/FeedbackInfo';
import { FullSql } from './model/FullSql';
import { FullSqlDetail } from './model/FullSqlDetail';
import { FullSqlTask } from './model/FullSqlTask';
import { GetTransactionListRespTransactionInfoList } from './model/GetTransactionListRespTransactionInfoList';
import { HealthReportAnalysisResult } from './model/HealthReportAnalysisResult';
import { HealthReportDiskStat } from './model/HealthReportDiskStat';
import { HealthReportFullSqlStat } from './model/HealthReportFullSqlStat';
import { HealthReportInspectionScore } from './model/HealthReportInspectionScore';
import { HealthReportInspectionStat } from './model/HealthReportInspectionStat';
import { HealthReportInstanceInfo } from './model/HealthReportInstanceInfo';
import { HealthReportLostPointsDetail } from './model/HealthReportLostPointsDetail';
import { HealthReportPerformanceStat } from './model/HealthReportPerformanceStat';
import { HealthReportRatioStat } from './model/HealthReportRatioStat';
import { HealthReportRiskReason } from './model/HealthReportRiskReason';
import { HealthReportRiskSuggestion } from './model/HealthReportRiskSuggestion';
import { HealthReportSingleValueStat } from './model/HealthReportSingleValueStat';
import { HealthReportSlowLogStat } from './model/HealthReportSlowLogStat';
import { HealthReportSqlTemplate } from './model/HealthReportSqlTemplate';
import { HealthReportSummaryInfo } from './model/HealthReportSummaryInfo';
import { HealthReportTableSpaceIncrInfo } from './model/HealthReportTableSpaceIncrInfo';
import { HealthReportTableSpaceInfo } from './model/HealthReportTableSpaceInfo';
import { HealthReportTableSpaceStat } from './model/HealthReportTableSpaceStat';
import { HealthReportTask } from './model/HealthReportTask';
import { IndexAdviceInfo } from './model/IndexAdviceInfo';
import { InnodbLock } from './model/InnodbLock';
import { InnodbLockWaits } from './model/InnodbLockWaits';
import { InnodbTrx } from './model/InnodbTrx';
import { InstanceEngineDistributionListEngineDistribution } from './model/InstanceEngineDistributionListEngineDistribution';
import { InstanceEngineDistributionListInstanceInfos } from './model/InstanceEngineDistributionListInstanceInfos';
import { InstanceNodesInfoInstanceNodes } from './model/InstanceNodesInfoInstanceNodes';
import { InstanceSpaceInfo } from './model/InstanceSpaceInfo';
import { ListApiVersionsRequest } from './model/ListApiVersionsRequest';
import { ListApiVersionsResponse } from './model/ListApiVersionsResponse';
import { ListCloudDbaInstancesRequest } from './model/ListCloudDbaInstancesRequest';
import { ListCloudDbaInstancesResponse } from './model/ListCloudDbaInstancesResponse';
import { ListConnectionsRequest } from './model/ListConnectionsRequest';
import { ListConnectionsResponse } from './model/ListConnectionsResponse';
import { ListDbUsersRequest } from './model/ListDbUsersRequest';
import { ListDbUsersResponse } from './model/ListDbUsersResponse';
import { ListFullSqlTasksRequest } from './model/ListFullSqlTasksRequest';
import { ListFullSqlTasksResponse } from './model/ListFullSqlTasksResponse';
import { ListHealthReportTaskRequest } from './model/ListHealthReportTaskRequest';
import { ListHealthReportTaskResponse } from './model/ListHealthReportTaskResponse';
import { ListInnodbLocksRequest } from './model/ListInnodbLocksRequest';
import { ListInnodbLocksResponse } from './model/ListInnodbLocksResponse';
import { ListInstanceDistributionRequest } from './model/ListInstanceDistributionRequest';
import { ListInstanceDistributionResponse } from './model/ListInstanceDistributionResponse';
import { ListInstanceMultiNodesSingleMetric } from './model/ListInstanceMultiNodesSingleMetric';
import { ListInstanceMultiNodesSingleMetricInstanceInfos } from './model/ListInstanceMultiNodesSingleMetricInstanceInfos';
import { ListInstanceMultiNodesSingleMetricNodeInfos } from './model/ListInstanceMultiNodesSingleMetricNodeInfos';
import { ListInstanceMultiNodesSingleMetricRequest } from './model/ListInstanceMultiNodesSingleMetricRequest';
import { ListInstanceMultiNodesSingleMetricResponse } from './model/ListInstanceMultiNodesSingleMetricResponse';
import { ListInstanceNodesInfoRequest } from './model/ListInstanceNodesInfoRequest';
import { ListInstanceNodesInfoResponse } from './model/ListInstanceNodesInfoResponse';
import { ListInstanceTopSlowLogRequest } from './model/ListInstanceTopSlowLogRequest';
import { ListInstanceTopSlowLogResponse } from './model/ListInstanceTopSlowLogResponse';
import { ListMetadataLocksRequest } from './model/ListMetadataLocksRequest';
import { ListMetadataLocksResponse } from './model/ListMetadataLocksResponse';
import { ListProcessesRequest } from './model/ListProcessesRequest';
import { ListProcessesResponse } from './model/ListProcessesResponse';
import { ListRiskItemsRequest } from './model/ListRiskItemsRequest';
import { ListRiskItemsResponse } from './model/ListRiskItemsResponse';
import { ListRiskTrendRequest } from './model/ListRiskTrendRequest';
import { ListRiskTrendResponse } from './model/ListRiskTrendResponse';
import { ListSpaceAnalysisRequest } from './model/ListSpaceAnalysisRequest';
import { ListSpaceAnalysisResponse } from './model/ListSpaceAnalysisResponse';
import { ListSqlLimitRulesRequest } from './model/ListSqlLimitRulesRequest';
import { ListSqlLimitRulesResponse } from './model/ListSqlLimitRulesResponse';
import { ListTopSlowLogRequest } from './model/ListTopSlowLogRequest';
import { ListTopSlowLogResponse } from './model/ListTopSlowLogResponse';
import { ListTransactionsRequest } from './model/ListTransactionsRequest';
import { ListTransactionsResponse } from './model/ListTransactionsResponse';
import { MetadataLock } from './model/MetadataLock';
import { MultiNodesSingleMetricMetrics } from './model/MultiNodesSingleMetricMetrics';
import { ParseSqlLimitRulesReq } from './model/ParseSqlLimitRulesReq';
import { ParseSqlLimitRulesRequest } from './model/ParseSqlLimitRulesRequest';
import { ParseSqlLimitRulesResponse } from './model/ParseSqlLimitRulesResponse';
import { Process } from './model/Process';
import { QueryRiskItemsItems } from './model/QueryRiskItemsItems';
import { QueryRiskTrendMetric } from './model/QueryRiskTrendMetric';
import { QuerySqlPlanBody } from './model/QuerySqlPlanBody';
import { RegisterDbUserRequest } from './model/RegisterDbUserRequest';
import { RegisterDbUserRequestBody } from './model/RegisterDbUserRequestBody';
import { RegisterDbUserResponse } from './model/RegisterDbUserResponse';
import { SetThresholdForMetricRequest } from './model/SetThresholdForMetricRequest';
import { SetThresholdForMetricResponse } from './model/SetThresholdForMetricResponse';
import { ShareConnUserInfo } from './model/ShareConnUserInfo';
import { ShowApiVersionRequest } from './model/ShowApiVersionRequest';
import { ShowApiVersionResponse } from './model/ShowApiVersionResponse';
import { ShowDbUserRequest } from './model/ShowDbUserRequest';
import { ShowDbUserResponse } from './model/ShowDbUserResponse';
import { ShowInstanceHealthReportRequest } from './model/ShowInstanceHealthReportRequest';
import { ShowInstanceHealthReportResponse } from './model/ShowInstanceHealthReportResponse';
import { ShowMetricNamesSupportRequest } from './model/ShowMetricNamesSupportRequest';
import { ShowMetricNamesSupportResponse } from './model/ShowMetricNamesSupportResponse';
import { ShowQuotasRequest } from './model/ShowQuotasRequest';
import { ShowQuotasResponse } from './model/ShowQuotasResponse';
import { ShowSqlExecutionPlanRequest } from './model/ShowSqlExecutionPlanRequest';
import { ShowSqlExecutionPlanResponse } from './model/ShowSqlExecutionPlanResponse';
import { ShowSqlExplainRequest } from './model/ShowSqlExplainRequest';
import { ShowSqlExplainResponse } from './model/ShowSqlExplainResponse';
import { ShowSqlLimitJobInfoRequest } from './model/ShowSqlLimitJobInfoRequest';
import { ShowSqlLimitJobInfoResponse } from './model/ShowSqlLimitJobInfoResponse';
import { ShowSqlLimitSwitchStatusRequest } from './model/ShowSqlLimitSwitchStatusRequest';
import { ShowSqlLimitSwitchStatusResponse } from './model/ShowSqlLimitSwitchStatusResponse';
import { ShowSqlSwitchStatusRequest } from './model/ShowSqlSwitchStatusRequest';
import { ShowSqlSwitchStatusResponse } from './model/ShowSqlSwitchStatusResponse';
import { ShowTransactionSwitchStatusRequest } from './model/ShowTransactionSwitchStatusRequest';
import { ShowTransactionSwitchStatusResponse } from './model/ShowTransactionSwitchStatusResponse';
import { ShowTuningRequest } from './model/ShowTuningRequest';
import { ShowTuningResponse } from './model/ShowTuningResponse';
import { SlowLog } from './model/SlowLog';
import { SlowSqlStatistics } from './model/SlowSqlStatistics';
import { SlowSqlTemplate } from './model/SlowSqlTemplate';
import { SlowSqlTrendItem } from './model/SlowSqlTrendItem';
import { SqlLimitRule } from './model/SqlLimitRule';
import { SupportMetricNameListSupportMetricNames } from './model/SupportMetricNameListSupportMetricNames';
import { SynchronizeInstancesReq } from './model/SynchronizeInstancesReq';
import { SynchronizeInstancesRequest } from './model/SynchronizeInstancesRequest';
import { SynchronizeInstancesResponse } from './model/SynchronizeInstancesResponse';
import { TbPosInfo } from './model/TbPosInfo';
import { TopInstanceSlowLogRowsExaminedExceeding } from './model/TopInstanceSlowLogRowsExaminedExceeding';
import { TopInstanceSlowLogTopExecuteSlowLogs } from './model/TopInstanceSlowLogTopExecuteSlowLogs';
import { TopRiskInfo } from './model/TopRiskInfo';
import { TopSlowLogTopSlowLogList } from './model/TopSlowLogTopSlowLogList';
import { TopSqlTemplate } from './model/TopSqlTemplate';
import { TopSqlTrendItem } from './model/TopSqlTrendItem';
import { TransactionSwitchReq } from './model/TransactionSwitchReq';
import { UpdateDbUserRequest } from './model/UpdateDbUserRequest';
import { UpdateDbUserRequestBody } from './model/UpdateDbUserRequestBody';
import { UpdateDbUserResponse } from './model/UpdateDbUserResponse';
import { UpdateSqlLimitRuleOption } from './model/UpdateSqlLimitRuleOption';
import { UpdateSqlLimitRulesBody } from './model/UpdateSqlLimitRulesBody';
import { UpdateSqlLimitRulesRequest } from './model/UpdateSqlLimitRulesRequest';
import { UpdateSqlLimitRulesResponse } from './model/UpdateSqlLimitRulesResponse';

export class DasClient {
    public static newBuilder(): ClientBuilder<DasClient> {
            let client = new ClientBuilder<DasClient>(newClient);
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
     * 删除共享链接，
     * 用于用户删除共享链接
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除共享链接
     * @param {CancelShareConnectionsRequestBody} cancelShareConnectionsRequestBody 请求体
     * @param {string} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public cancelShareConnections(cancelShareConnectionsRequest?: CancelShareConnectionsRequest): Promise<CancelShareConnectionsResponse> {
        const options = ParamCreater().cancelShareConnections(cancelShareConnectionsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建实例连接
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建实例连接
     * @param {string} instanceId 实例ID。
     * @param {CreateInstanceConnectionReq} createInstanceConnectionRequestBody 请求体参数。
     * @param {'en-us' | 'zh-cn'} [xLanguage] 请求语言类型。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createInstanceConnection(createInstanceConnectionRequest?: CreateInstanceConnectionRequest): Promise<CreateInstanceConnectionResponse> {
        const options = ParamCreater().createInstanceConnection(createInstanceConnectionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 设置共享链接，
     * 用于用户添加共享链接
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 设置共享链接
     * @param {CreateShareConnectionsRequestBody} createShareConnectionsRequestBody 请求体
     * @param {string} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createShareConnections(createShareConnectionsRequest?: CreateShareConnectionsRequest): Promise<CreateShareConnectionsResponse> {
        const options = ParamCreater().createShareConnections(createShareConnectionsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询实例连接列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询实例连接列表
     * @param {string} [condition] 数据库实例地址/实例名称/备注等关键字
     * @param {number} [offset] 偏移量。从第一条数据偏移offset条数据后开始查询，默认为0（偏移0条数据，表示从第一条数据开始查询），必须为数字，不能为负数。
     * @param {number} [limit] 查询记录数。默认为100，不能为负数，最小值为1，最大值为200。
     * @param {'gaussdb' | 'dds' | 'rds' | 'ecs' | 'gemini' | 'ddm'} [networkType] 数据库来源
     * @param {string} [datastoreType] 数据库引擎。
     * @param {'NORMAL' | 'SHARE'} [connectionType] 连接类型，NORMAL-创建的连接，SHARE-他人共享给我的连接。
     * @param {string} [instanceId] 实例ID。
     * @param {'en-us' | 'zh-cn'} [xLanguage] 请求语言类型。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listConnections(listConnectionsRequest?: ListConnectionsRequest): Promise<ListConnectionsResponse> {
        const options = ParamCreater().listConnections(listConnectionsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询API版本列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询API版本列表
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listApiVersions(listApiVersionsRequest?: ListApiVersionsRequest): Promise<ListApiVersionsResponse> {
        const options = ParamCreater().listApiVersions();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定的API版本信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询指定的API版本信息
     * @param {string} version API版本
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showApiVersion(showApiVersionRequest?: ShowApiVersionRequest): Promise<ShowApiVersionResponse> {
        const options = ParamCreater().showApiVersion(showApiVersionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建全量SQL明细解析任务
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建全量SQL明细解析任务
     * @param {string} instanceId 实例ID
     * @param {AddFullSqlTaskBody} addFullSqlTaskRequestBody 请求体
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public addFullSqlTask(addFullSqlTaskRequest?: AddFullSqlTaskRequest): Promise<AddFullSqlTaskResponse> {
        const options = ParamCreater().addFullSqlTask(addFullSqlTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 设置付费实例
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 设置付费模式
     * @param {ChangeChargeModeBody} changeChargeModeRequestBody 请求体
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public changeChargeMode(changeChargeModeRequest?: ChangeChargeModeRequest): Promise<ChangeChargeModeResponse> {
        const options = ParamCreater().changeChargeMode(changeChargeModeRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 设置SQL限流开关状态。目前仅支持MySQL数据库。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 设置SQL限流开关状态
     * @param {string} instanceId 实例ID
     * @param {ChangeSqlLimitSwitchStatusBody} changeSqlLimitSwitchStatusBody 设置SQL限流开关状态请求
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public changeSqlLimitSwitchStatus(changeSqlLimitSwitchStatusRequest?: ChangeSqlLimitSwitchStatusRequest): Promise<ChangeSqlLimitSwitchStatusResponse> {
        const options = ParamCreater().changeSqlLimitSwitchStatus(changeSqlLimitSwitchStatusRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 打开或者关闭DAS收集全量SQL开关，开启后，实例的性能损耗在5%以内。开启全量SQL后，本服务会对SQL的文本内容进行存储，以便进行分析。用户可自行设置全量SQL的保存时间范围，到期后会自动删除；如果未设置，数据默认保留7天。
     * 打开或者关闭DAS收集慢SQL开关。开启慢SQL后，本服务会对慢SQL的文本内容进行存储，以便进行分析。用户可自行设置慢SQL的保存时间范围，到期后会自动删除；如果未设置，数据默认保留7天。该功能仅支持付费实例。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 开启/关闭全量SQL、慢SQL开关
     * @param {string} instanceId 实例ID
     * @param {ChangeSqlSwitchBody} changeDasSwitchBody 请求体。
     * @param {'en-us' | 'zh-cn'} [xLanguage] 请求语言类型。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public changeSqlSwitch(changeSqlSwitchRequest?: ChangeSqlSwitchRequest): Promise<ChangeSqlSwitchResponse> {
        const options = ParamCreater().changeSqlSwitch(changeSqlSwitchRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 开启/关闭历史事务开关，仅支持MySQL引擎，并且依赖开启全量SQL或者慢SQL功能
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 开启/关闭历史事务开关
     * @param {string} instanceId 实例ID
     * @param {TransactionSwitchReq} changeTransactionSwitchStatusRequestBody 开关状态
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public changeTransactionSwitchStatus(changeTransactionSwitchStatusRequest?: ChangeTransactionSwitchStatusRequest): Promise<ChangeTransactionSwitchStatusResponse> {
        const options = ParamCreater().changeTransactionSwitchStatus(changeTransactionSwitchStatusRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建实例健康诊断任务。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建实例健康诊断任务
     * @param {string} instanceId 实例ID。
     * @param {CreateHealthReportReq} createHealthReportTaskRequestBody 请求体参数。
     * @param {'en-us' | 'zh-cn'} [xLanguage] 请求语言类型。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createHealthReportTask(createHealthReportTaskRequest?: CreateHealthReportTaskRequest): Promise<CreateHealthReportTaskResponse> {
        const options = ParamCreater().createHealthReportTask(createHealthReportTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建空间分析任务，如触发重新分析，支持MySQL和GaussDB(for MySQL)引擎
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建空间分析任务
     * @param {string} instanceId 实例ID
     * @param {CreateSpaceAnalysisTaskBody} createSpaceAnalysisTaskBody 创建空间分析任务请求
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createSpaceAnalysisTask(createSpaceAnalysisTaskRequest?: CreateSpaceAnalysisTaskRequest): Promise<CreateSpaceAnalysisTaskResponse> {
        const options = ParamCreater().createSpaceAnalysisTask(createSpaceAnalysisTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 添加SQL限流规则。目前仅支持MySQL和PostgreSQL数据库。
     * MySQL使用限制如下：
     * 1.规则举例详细说明：例如关键字是\&quot;select~a\&quot;, 含义为：select以及a为该并发控制所包含的两个关键字，~为关键字间隔符，即若执行SQL命令包含select与a两个关键字视为命中此条并发控制规则。
     * 2.当SQL语句匹配多条限流规则时，优先生效最新添加的规则，之前的规则不再生效。
     * 3.限流规则关键字有顺序要求，只会按顺序匹配。如：a~and~b 只会匹配 xxx a&gt;1 and b&gt;2，而不会匹配 xxx b&gt;2 and a&gt;1。
     * 4.关键字可能大小写敏感，请执行 \&quot;show variables like \&#39;rds_sqlfilter_case_sensitive\&#39;或者到实例参数设置页面进行确认。
     * 5.部分版本只读实例不允许设置限流规则，如果要设置限流规则，请到主实例上进行添加。
     * 6.系统表不限制、不涉及数据查询的不限制、root账号在特定版本下不限制。
     * PostgreSQL使用限制如下：
     * 1.无法添加相同QUERY_ID或SQL语句的规则。
     * 2.使用SQL语句添加规则时，需要确保存在数据库表，如：select * from test，需要确保数据库中有test表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建SQL限流规则
     * @param {string} instanceId 实例ID
     * @param {CreateSqlLimitRulesBody} createSqlLimitRulesBody SQL限流规则
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createSqlLimitRules(createSqlLimitRulesRequest?: CreateSqlLimitRulesRequest): Promise<CreateSqlLimitRulesResponse> {
        const options = ParamCreater().createSqlLimitRules(createSqlLimitRulesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 执行SQL诊断，
     * 用于用户执行SQL诊断。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 执行SQL诊断
     * @param {string} connectionId 连接ID
     * @param {CreateTuningReq} createTuningRequestBody 请求体
     * @param {string} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createTuning(createTuningRequest?: CreateTuningRequest): Promise<CreateTuningResponse> {
        const options = ParamCreater().createTuning(createTuningRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除注册在DAS里的数据库用户。此接口只是将注册的数据库用户在DAS系统里删除，不会真正删除数据库用户对象。
     * 目前仅支持MySQL实例。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除数据库用户
     * @param {string} instanceId 实例ID
     * @param {string} dbUserId 数据库用户ID。用户使用数据库账号与数据库建立的连接ID（数据库用户ID由注册数据库用户接口创建）。
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteDbUser(deleteDbUserRequest?: DeleteDbUserRequest): Promise<DeleteDbUserResponse> {
        const options = ParamCreater().deleteDbUser(deleteDbUserRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查杀会话。支持按照用户、数据库、会话列表查杀会话，三个条件至少指定一个。
     * 目前仅支持MySQL实例。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查杀会话
     * @param {string} instanceId 实例ID
     * @param {DeleteProcessReqBody} deleteProcessReq 
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteProcess(deleteProcessRequest?: DeleteProcessRequest): Promise<DeleteProcessResponse> {
        const options = ParamCreater().deleteProcess(deleteProcessRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除SQL限流规则。目前仅支持MySQL和PostgreSQL数据库
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除SQL限流规则
     * @param {string} instanceId 实例ID
     * @param {DeleteSqlLimitRulesBody} deleteSqlLimitRulesBody 删除SQL限流规则
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteSqlLimitRules(deleteSqlLimitRulesRequest?: DeleteSqlLimitRulesRequest): Promise<DeleteSqlLimitRulesResponse> {
        const options = ParamCreater().deleteSqlLimitRules(deleteSqlLimitRulesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 全量SQL开关打开后，创建SQL洞察任务，支持按节点、用户名、数据库、操作类型等导出全量SQL明细数据。该功能仅支持付费实例。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 导出全量SQL明细
     * @param {string} instanceId 实例ID。
     * @param {number} startAt 开始时间（Unix timestamp），单位：毫秒。
     * @param {number} endAt 结束时间（Unix timestamp），单位：毫秒。
     * @param {Array<number>} [taskIds] SQL洞察任务ID列表，时间范围大于1天的SQL洞察任务后台将拆分为多个任务解析，该场景支持多任务过滤导出。
     * @param {string} [nodeId] 节点ID。
     * @param {string} [keyword] 关键字（可组合，用逗号分隔）。
     * @param {string} [fuzzy] 是否模糊匹配。
     * @param {string} [userList] 用户名（可组合，用空格分隔）。
     * @param {string} [dbList] 数据库（可组合，用空格分隔）。
     * @param {string} [operationList] 操作类型（可组合，用空格分隔）。
     * @param {string} [clientIpList] 客户端IP（可组合，用空格分隔）。
     * @param {string} [threadIdList] 线程ID（可组合，用空格分隔）。
     * @param {string} [trxIdList] 事务ID（可组合，用空格分隔）。
     * @param {string} [sessionIdList] 会话ID（可组合，用空格分隔）。
     * @param {string} [statusList] 执行状态（0:成功，1:失败，可组合，用空格分隔）。
     * @param {string} [sqlTemplateIds] SQL模板ID（可组合，用空格分隔）。
     * @param {number} [costMin] 最小执行耗时（毫秒）。
     * @param {number} [costMax] 最大执行耗时（毫秒）。
     * @param {number} [scanMin] 最小扫描行数。
     * @param {number} [scanMax] 最大扫描行数。
     * @param {number} [affectMin] 最小影响行数。
     * @param {number} [affectMax] 最大影响行数。
     * @param {number} [returnMin] 最小返回行数。
     * @param {number} [returnMax] 最大返回行数。
     * @param {string} [sortField] 排序字段（execute_at:执行时间, execute_cost:执行耗时, lock_wait_time:锁等待时间, rows_examined:扫描行数, rows_returned:返回行数）。
     * @param {boolean} [asc] 排序顺序（true:正序, false:逆序）。
     * @param {number} [page] 页码。
     * @param {number} [limit] 每页记录数。最大为100。
     * @param {'en-us' | 'zh-cn'} [xLanguage] 请求语言类型。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public exportFullSqlDetails(exportFullSqlDetailsRequest?: ExportFullSqlDetailsRequest): Promise<ExportFullSqlDetailsResponse> {
        const options = ParamCreater().exportFullSqlDetails(exportFullSqlDetailsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * DAS收集慢SQL开关打开后，一次性导出指定时间范围内的慢SQL数据，支持分页滚动获取。免费实例仅支持查看最近一小时数据。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 导出慢SQL数据
     * @param {string} instanceId 实例ID。
     * @param {string} datastoreType 数据库类型。支持MySQL、GaussDB(for MySQL)、PostgreSQL。
     * @param {number} startAt 开始时间（Unix timestamp），单位：毫秒。
     * @param {number} endAt 结束时间（Unix timestamp），单位：毫秒。
     * @param {number} limit 每页记录数。最大为2000。
     * @param {string} [marker] 指定一个标识符。获取第一页时不用赋值，获取下一页时取上页查询结果的返回值。
     * @param {'en-us' | 'zh-cn'} [xLanguage] 请求语言类型。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public exportSlowQueryLogs(exportSlowQueryLogsRequest?: ExportSlowQueryLogsRequest): Promise<ExportSlowQueryLogsResponse> {
        const options = ParamCreater().exportSlowQueryLogs(exportSlowQueryLogsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 慢SQL开关打开后，导出慢SQL统计数据。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 导出慢SQL统计数据
     * @param {string} instanceId 实例ID。
     * @param {ExportSlowSqlStatisticsRequestBody} exportSlowSqlStatisticsRequestBody 请求体
     * @param {'en-us' | 'zh-cn'} [xLanguage] 请求语言类型。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public exportSlowSqlStatistics(exportSlowSqlStatisticsRequest?: ExportSlowSqlStatisticsRequest): Promise<ExportSlowSqlStatisticsResponse> {
        const options = ParamCreater().exportSlowSqlStatistics(exportSlowSqlStatisticsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 慢SQL开关打开后，导出慢SQL模板列表。免费实例仅支持查看最近一小时数据。查询时间间隔最长一天。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 导出慢SQL模板列表
     * @param {string} instanceId 实例ID。
     * @param {number} startAt 开始时间（Unix timestamp），单位：毫秒。
     * @param {number} endAt 结束时间（Unix timestamp），单位：毫秒。
     * @param {string} datastoreType 数据库类型。支持MySQL和GaussDB(for MySQL)。
     * @param {string} [dbName] 数据库名称。
     * @param {'en-us' | 'zh-cn'} [xLanguage] 请求语言类型。
     * @param {number} [offset] 偏移量。从第一条数据偏移offset条数据后开始查询，默认为0（偏移0条数据，表示从第一条数据开始查询），必须为数字，不能为负数。
     * @param {number} [limit] 每页记录数，默认为20，最大取值100。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public exportSlowSqlTemplatesDetails(exportSlowSqlTemplatesDetailsRequest?: ExportSlowSqlTemplatesDetailsRequest): Promise<ExportSlowSqlTemplatesDetailsResponse> {
        const options = ParamCreater().exportSlowSqlTemplatesDetails(exportSlowSqlTemplatesDetailsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 慢SQL开关打开后，导出慢SQL数量趋势。免费实例仅支持查看最近一小时数据。查询时间间隔最长一天。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 导出慢SQL数量趋势
     * @param {string} instanceId 实例ID。
     * @param {number} startAt 开始时间（Unix timestamp），单位：毫秒。
     * @param {number} endAt 结束时间（Unix timestamp），单位：毫秒。
     * @param {string} datastoreType 数据库类型。支持MySQL和GaussDB(for MySQL)。
     * @param {string} [nodeId] 节点ID。
     * @param {'en-us' | 'zh-cn'} [xLanguage] 请求语言类型。
     * @param {number} [offset] 偏移量。从第一条数据偏移offset条数据后开始查询，默认为0（偏移0条数据，表示从第一条数据开始查询），必须为数字，不能为负数。
     * @param {number} [limit] 每页记录数，默认为20，最大取值100。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public exportSlowSqlTrendDetails(exportSlowSqlTrendDetailsRequest?: ExportSlowSqlTrendDetailsRequest): Promise<ExportSlowSqlTrendDetailsResponse> {
        const options = ParamCreater().exportSlowSqlTrendDetails(exportSlowSqlTrendDetailsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 全量SQL开关打开后，一次性导出指定时间范围内的全量SQL数据，支持分页滚动获取。该功能仅支持付费实例。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 导出全量SQL
     * @param {string} instanceId 实例ID。
     * @param {number} startAt 开始时间（Unix timestamp），单位：毫秒。
     * @param {number} endAt 结束时间（Unix timestamp），单位：毫秒。
     * @param {number} limit 每页记录数。最大为2000。
     * @param {string} datastoreType 数据库类型。支持MySQL和GaussDB(for MySQL)。
     * @param {string} [marker] 指定一个标识符。获取第一页时不用赋值，获取下一页时取上页查询结果的返回值。
     * @param {'en-us' | 'zh-cn'} [xLanguage] 请求语言类型。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public exportSqlStatements(exportSqlStatementsRequest?: ExportSqlStatementsRequest): Promise<ExportSqlStatementsResponse> {
        const options = ParamCreater().exportSqlStatements(exportSqlStatementsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 导出TOP风险实例列表，支持查看最近24小时数据。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 导出TOP风险实例列表
     * @param {number} startAt 开始时间（Unix timestamp），单位：毫秒。
     * @param {number} endAt 结束时间（Unix timestamp），单位：毫秒。
     * @param {string} datastoreType 数据库类型。
     * @param {10 | 20 | 30} [num] 返回TOP风险实例数量。
     * @param {'en-us' | 'zh-cn'} [xLanguage] 请求语言类型。
     * @param {string} [metricCode] 指标码
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public exportTopRiskInstances(exportTopRiskInstancesRequest?: ExportTopRiskInstancesRequest): Promise<ExportTopRiskInstancesResponse> {
        const options = ParamCreater().exportTopRiskInstances(exportTopRiskInstancesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * TopSQL开关打开后，导出TopSQL模板列表。该功能仅支持付费实例。查询时间间隔最长一小时。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 导出TopSQL模板列表
     * @param {string} instanceId 实例ID。
     * @param {number} startAt 开始时间（Unix timestamp），单位：毫秒。
     * @param {number} endAt 结束时间（Unix timestamp），单位：毫秒。
     * @param {string} datastoreType 数据库类型。支持MySQL和GaussDB(for MySQL)。
     * @param {string} [nodeId] 节点ID。
     * @param {'executeNum' | 'totalCost' | 'avgCost' | 'totalScan' | 'avgScan'} [sort] 排序字段（executeNum:执行次数, totalCost:总耗时, avgCost:平均耗时, totalScan: 总扫描行数, avgScan:平均扫描行数）。
     * @param {boolean} [asc] 排序顺序（true:正序, false:逆序）。
     * @param {number} [offset] 偏移量。从第一条数据偏移offset条数据后开始查询，默认为0（偏移0条数据，表示从第一条数据开始查询），必须为数字，不能为负数。
     * @param {number} [limit] 每页记录数，默认为20，最大取值100。
     * @param {'en-us' | 'zh-cn'} [xLanguage] 请求语言类型。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public exportTopSqlTemplatesDetails(exportTopSqlTemplatesDetailsRequest?: ExportTopSqlTemplatesDetailsRequest): Promise<ExportTopSqlTemplatesDetailsResponse> {
        const options = ParamCreater().exportTopSqlTemplatesDetails(exportTopSqlTemplatesDetailsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * TopSQL开关打开后，导出SQL执行耗时区间数据。该功能仅支持付费实例。查询时间间隔最长六小时。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 导出SQL执行耗时区间数据
     * @param {string} instanceId 实例ID。
     * @param {number} startAt 开始时间（Unix timestamp），单位：毫秒。
     * @param {number} endAt 结束时间（Unix timestamp），单位：毫秒。
     * @param {string} datastoreType 数据库类型。支持MySQL和GaussDB(for MySQL)。
     * @param {string} [nodeId] 节点ID。
     * @param {'en-us' | 'zh-cn'} [xLanguage] 请求语言类型。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public exportTopSqlTrendDetails(exportTopSqlTrendDetailsRequest?: ExportTopSqlTrendDetailsRequest): Promise<ExportTopSqlTrendDetailsResponse> {
        const options = ParamCreater().exportTopSqlTrendDetails(exportTopSqlTrendDetailsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取DAS云DBA实例列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取DAS云DBA实例列表
     * @param {string} datastoreType 数据库类型。
     * @param {number} [offset] 偏移量。从第一条数据偏移offset条数据后开始查询，默认为0（偏移0条数据，表示从第一条数据开始查询），必须为数字，不能为负数。
     * @param {number} [limit] 每页记录数，默认为20，最大取值200。
     * @param {'en-us' | 'zh-cn'} [xLanguage] 请求语言类型。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listCloudDbaInstances(listCloudDbaInstancesRequest?: ListCloudDbaInstancesRequest): Promise<ListCloudDbaInstancesResponse> {
        const options = ParamCreater().listCloudDbaInstances(listCloudDbaInstancesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询注册在DAS里的数据库用户列表，后续调用其他接口时(如查询实例会话列表接口)需要用到此接口返回的db_user_id。此接口不会返回数据库实例上的数据库用户对象。
     * 目前仅支持MySQL实例。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询数据库用户列表
     * @param {string} instanceId 实例ID
     * @param {number} [offset] 偏移量。从第一条数据偏移offset条数据后开始查询，默认为0（偏移0条数据，表示从第一条数据开始查询），必须为数字，不能为负数。
     * @param {number} [limit] 查询记录数。默认为100，不能为负数，最小值为1，最大值为100。
     * @param {string} [dbUserId] 数据库用户ID。用户使用数据库账号与数据库建立的连接ID（数据库用户ID由注册数据库用户接口创建）。
     * @param {string} [dbUsername] 数据库用户名称
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listDbUsers(listDbUsersRequest?: ListDbUsersRequest): Promise<ListDbUsersResponse> {
        const options = ParamCreater().listDbUsers(listDbUsersRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 全量SQL开关打开后，查询SQL洞察任务列表。该功能仅支持付费实例。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询SQL洞察任务列表
     * @param {string} instanceId 实例ID。
     * @param {number} [rangeLeft] 最小任务起止时间（Unix timestamp），单位：毫秒。
     * @param {number} [rangeRight] 最大任务起止时间（Unix timestamp），单位：毫秒。
     * @param {number} [createAtLeft] 最小任务创建时间（Unix timestamp），单位：毫秒。
     * @param {number} [createAtRight] 最大任务创建时间（Unix timestamp），单位：毫秒。
     * @param {string} [user] 用户名。
     * @param {string} [keyword] 关键字。
     * @param {string} [dbName] 数据库名。
     * @param {string} [operation] 操作类型。
     * @param {string} [threadId] 线程ID。
     * @param {string} [trxId] 事务ID。
     * @param {string} [status] 执行状态（0:成功，1:失败）。
     * @param {string} [sqlTemplateId] SQL模板ID。
     * @param {string} [sortField] 排序字段（create_at:任务创建时间, range_start_at,range_end_at:任务起止时间）。
     * @param {boolean} [asc] 排序顺序（true:正序, false:逆序）。
     * @param {number} [page] 页码。
     * @param {number} [limit] 每页记录数。最大为100。
     * @param {'en-us' | 'zh-cn'} [xLanguage] 请求语言类型。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listFullSqlTasks(listFullSqlTasksRequest?: ListFullSqlTasksRequest): Promise<ListFullSqlTasksResponse> {
        const options = ParamCreater().listFullSqlTasks(listFullSqlTasksRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询实例健康诊断报告列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询实例健康诊断报告列表
     * @param {string} instanceId 实例ID。
     * @param {number} startAt 开始时间（Unix timestamp），单位：毫秒。
     * @param {number} endAt 结束时间（Unix timestamp），单位：毫秒。
     * @param {number} [offset] 偏移量。从第一条数据偏移offset条数据后开始查询，默认为0（偏移0条数据，表示从第一条数据开始查询），必须为数字，不能为负数。
     * @param {number} [limit] 每页记录数，默认为10，最大取值200。
     * @param {'en-us' | 'zh-cn'} [xLanguage] 请求语言类型。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listHealthReportTask(listHealthReportTaskRequest?: ListHealthReportTaskRequest): Promise<ListHealthReportTaskResponse> {
        const options = ParamCreater().listHealthReportTask(listHealthReportTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询InnoDB锁等待列表。
     * 目前仅支持MySQL实例。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询InnoDB锁等待列表
     * @param {string} instanceId 实例ID
     * @param {string} dbUserId 数据库用户ID。用户使用数据库账号与数据库建立的连接ID（数据库用户ID由注册数据库用户接口创建）。
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listInnodbLocks(listInnodbLocksRequest?: ListInnodbLocksRequest): Promise<ListInnodbLocksResponse> {
        const options = ParamCreater().listInnodbLocks(listInnodbLocksRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询实例分布情况
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询实例分布情况
     * @param {string} [datastoreType] 数据库类型
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listInstanceDistribution(listInstanceDistributionRequest?: ListInstanceDistributionRequest): Promise<ListInstanceDistributionResponse> {
        const options = ParamCreater().listInstanceDistribution(listInstanceDistributionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取多节点单指标数据
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取多节点单指标数据
     * @param {ListInstanceMultiNodesSingleMetric} listInstanceMultiNodesSingleMetricRequestBody 请求体
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listInstanceMultiNodesSingleMetric(listInstanceMultiNodesSingleMetricRequest?: ListInstanceMultiNodesSingleMetricRequest): Promise<ListInstanceMultiNodesSingleMetricResponse> {
        const options = ParamCreater().listInstanceMultiNodesSingleMetric(listInstanceMultiNodesSingleMetricRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取单个实例节点信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取单个实例节点信息
     * @param {string} instanceId 实例ID
     * @param {string} datastoreType 数据库类型
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listInstanceNodesInfo(listInstanceNodesInfoRequest?: ListInstanceNodesInfoRequest): Promise<ListInstanceNodesInfoResponse> {
        const options = ParamCreater().listInstanceNodesInfo(listInstanceNodesInfoRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询实例的TOP慢SQL列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询实例的TOP慢SQL列表
     * @param {number} num TOP数量
     * @param {number} startAt 开始时间
     * @param {number} endAt 结束时间
     * @param {string} instanceId 实例ID
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listInstanceTopSlowLog(listInstanceTopSlowLogRequest?: ListInstanceTopSlowLogRequest): Promise<ListInstanceTopSlowLogResponse> {
        const options = ParamCreater().listInstanceTopSlowLog(listInstanceTopSlowLogRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询元数据锁列表。
     * 目前仅支持MySQL实例。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询元数据锁列表
     * @param {string} instanceId 实例ID
     * @param {string} dbUserId 数据库用户ID。用户使用数据库账号与数据库建立的连接ID（数据库用户ID由注册数据库用户接口创建）。
     * @param {string} [threadId] 会话ID
     * @param {string} [database] 数据库名称
     * @param {string} [table] 表名
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listMetadataLocks(listMetadataLocksRequest?: ListMetadataLocksRequest): Promise<ListMetadataLocksResponse> {
        const options = ParamCreater().listMetadataLocks(listMetadataLocksRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 支持根据数据库、用户查询实例会话列表。
     * 目前仅支持MySQL实例。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询实例会话列表
     * @param {string} instanceId 实例ID
     * @param {string} dbUserId 数据库用户ID。用户使用数据库账号与数据库建立的连接ID（数据库用户ID由注册数据库用户接口创建）。
     * @param {string} [user] 用户
     * @param {string} [database] 数据库
     * @param {string} [nodeId] 节点ID
     * @param {number} [offset] 偏移量。从第一条数据偏移offset条数据后开始查询，默认为0（偏移0条数据，表示从第一条数据开始查询），必须为数字，不能为负数。
     * @param {number} [limit] 每页记录数，默认为20，最大取值100。
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listProcesses(listProcessesRequest?: ListProcessesRequest): Promise<ListProcessesResponse> {
        const options = ParamCreater().listProcesses(listProcessesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询资源风险实例风险项
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询资源风险实例风险项
     * @param {string} datastoreType 数据库类型
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listRiskItems(listRiskItemsRequest?: ListRiskItemsRequest): Promise<ListRiskItemsResponse> {
        const options = ParamCreater().listRiskItems(listRiskItemsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询资源风险实例风险趋势
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询资源风险实例风险趋势
     * @param {string} datastoreType 数据库类型
     * @param {number} startAt 开始时间
     * @param {number} endAt 结束时间
     * @param {string} metricCode 指标码
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listRiskTrend(listRiskTrendRequest?: ListRiskTrendRequest): Promise<ListRiskTrendResponse> {
        const options = ParamCreater().listRiskTrend(listRiskTrendRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取空间分析数据列表。实例级别数据来源于文件系统，库级别和表级别数据来源于information_schema.tables表。空间&amp;元数据分析最多分析10000张表，若缺少库表空间数据，可能是因为数据库实例表个数过多或者账号未保存密码。如果为保存密码，请使用用户管理接口或页面录入数据库账号。 支持MySQL、GaussDB(for MySQL)和SQLServer引擎。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取空间分析数据列表
     * @param {string} instanceId 实例ID
     * @param {'database' | 'table'} objectType 对象类型
     * @param {'MySQL' | 'GaussDB(for MySQL)' | 'SQLServer'} datastoreType 引擎类型
     * @param {string} [xLanguage] 语言
     * @param {string} [databaseId] 数据库ID
     * @param {string} [offset] 偏移量。从第一条数据偏移offset条数据后开始查询，默认为0（偏移0条数据，表示从第一条数据开始查询），必须为数字，不能为负数。offset必须是limit的整数倍。
     * @param {string} [limit] 查询记录数。默认为100，不能为负数，最小值为1，最大值为100。
     * @param {string} [showInstanceInfo] 是否返回实例级别数据，取值：true或者false
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listSpaceAnalysis(listSpaceAnalysisRequest?: ListSpaceAnalysisRequest): Promise<ListSpaceAnalysisResponse> {
        const options = ParamCreater().listSpaceAnalysis(listSpaceAnalysisRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询SQL限流规则。目前仅支持MySQL和PostgreSQL数据库。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询SQL限流规则列表
     * @param {string} instanceId 实例ID
     * @param {'MySQL' | 'PostgreSQL'} datastoreType 数据库类型
     * @param {number} [offset] 偏移量。从第一条数据偏移offset条数据后开始查询，默认为0（偏移0条数据，表示从第一条数据开始查询），必须为数字，不能为负数。
     * @param {number} [limit] 查询记录数。默认为100，不能为负数，最小值为1，最大值为100。
     * @param {string} [databaseName] 数据库名（PostgreSQL必填）
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listSqlLimitRules(listSqlLimitRulesRequest?: ListSqlLimitRulesRequest): Promise<ListSqlLimitRulesResponse> {
        const options = ParamCreater().listSqlLimitRules(listSqlLimitRulesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询TOP慢SQL列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询TOP慢SQL列表
     * @param {number} num TOP数量
     * @param {number} startAt 开始时间
     * @param {number} endAt 结束时间
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listTopSlowLog(listTopSlowLogRequest?: ListTopSlowLogRequest): Promise<ListTopSlowLogResponse> {
        const options = ParamCreater().listTopSlowLog(listTopSlowLogRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询历史事务列表。
     * 目前仅支持MySQL实例，仅支持查看最近7天的历史事务。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询历史事务列表
     * @param {string} instanceId 实例ID
     * @param {'MySQL'} datastoreType 数据库类型。仅支持MySQL
     * @param {number} startAt 采集开始时间（Unix timestamp），单位：毫秒。
     * @param {number} endAt 采集结束时间（Unix timestamp），单位：毫秒。
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言
     * @param {number} [pageNum] 页数
     * @param {number} [pageSize] 页大小
     * @param {'occurrenceTime' | 'lastSec' | 'waitLockStructCount' | 'holdLockStructCount' | 'collectTime'} [order] 排序字段
     * @param {'asc' | 'desc'} [orderBy] 升序|降序
     * @param {number} [lastSecMin] 持续时间下限
     * @param {number} [lastSecMax] 持续时间上限
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listTransactions(listTransactionsRequest?: ListTransactionsRequest): Promise<ListTransactionsResponse> {
        const options = ParamCreater().listTransactions(listTransactionsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据原始SQL生成SQL限流关键字，目前支持MySQL、MariaDB、GaussDB(for MySQL)三种引擎。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 根据原始SQL生成SQL限流关键字
     * @param {string} instanceId 实例ID
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言
     * @param {ParseSqlLimitRulesReq} [parseSqlLimitRulesRequestBody] 原始SQL生成SQL限流关键字
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public parseSqlLimitRules(parseSqlLimitRulesRequest?: ParseSqlLimitRulesRequest): Promise<ParseSqlLimitRulesResponse> {
        const options = ParamCreater().parseSqlLimitRules(parseSqlLimitRulesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 此接口是将数据库用户和密码注册进DAS系统，同时会返回一个数据库用户ID ，后续调用其他接口时（如查询实例会话列表接口）需要用到此数据库用户ID。密码为加密存储，且仅用于DAS API相关功能。此接口不会在数据库实例上创建数据库用户对象。请确保输入的用户名和密码是已经存在并且是正确的。
     * 目前仅支持MySQL实例。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 注册数据库用户
     * @param {string} instanceId 实例ID
     * @param {RegisterDbUserRequestBody} registerDBUserRequestBody 注册数据库用户请求
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public registerDbUser(registerDbUserRequest?: RegisterDbUserRequest): Promise<RegisterDbUserResponse> {
        const options = ParamCreater().registerDbUser(registerDbUserRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 设置指标阈值
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 设置指标阈值
     * @param {ApiSetMetricCodeThresholdReq} setThresholdForMetricRequestBody 请求体
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public setThresholdForMetric(setThresholdForMetricRequest?: SetThresholdForMetricRequest): Promise<SetThresholdForMetricResponse> {
        const options = ParamCreater().setThresholdForMetric(setThresholdForMetricRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询注册在DAS里的数据库用户信息。此接口不能查询数据库实例上的数据库用户对象。
     * 目前仅支持MySQL实例。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询数据库用户信息
     * @param {string} instanceId 实例ID
     * @param {string} dbUserId 数据库用户ID。用户使用数据库账号与数据库建立的连接ID（数据库用户ID由注册数据库用户接口创建）。
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showDbUser(showDbUserRequest?: ShowDbUserRequest): Promise<ShowDbUserResponse> {
        const options = ParamCreater().showDbUser(showDbUserRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取实例健康诊断报告内容。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取实例健康诊断报告内容
     * @param {string} instanceId 实例ID。
     * @param {string} taskId 任务ID。
     * @param {'en-us' | 'zh-cn'} [xLanguage] 请求语言类型。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showInstanceHealthReport(showInstanceHealthReportRequest?: ShowInstanceHealthReportRequest): Promise<ShowInstanceHealthReportResponse> {
        const options = ParamCreater().showInstanceHealthReport(showInstanceHealthReportRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 多节点单指标支持指标信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 多节点单指标支持指标信息
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showMetricNamesSupport(showMetricNamesSupportRequest?: ShowMetricNamesSupportRequest): Promise<ShowMetricNamesSupportResponse> {
        const options = ParamCreater().showMetricNamesSupport(showMetricNamesSupportRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询云DBA配额
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询云DBA配额
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showQuotas(showQuotasRequest?: ShowQuotasRequest): Promise<ShowQuotasResponse> {
        const options = ParamCreater().showQuotas(showQuotasRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询SQL执行计划。
     * 目前仅支持MySQL实例。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询SQL执行计划
     * @param {string} instanceId 实例ID
     * @param {string} dbUserId 数据库用户ID。用户使用数据库账号与数据库建立的连接ID（数据库用户ID由注册数据库用户接口创建）。
     * @param {string} database 数据库名称
     * @param {string} sql SQL语句
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showSqlExecutionPlan(showSqlExecutionPlanRequest?: ShowSqlExecutionPlanRequest): Promise<ShowSqlExecutionPlanResponse> {
        const options = ParamCreater().showSqlExecutionPlan(showSqlExecutionPlanRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询SQL执行计划。
     * 目前仅支持MySQL实例。
     * 补充GET请求，处理超长SQL
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询SQL执行计划
     * @param {string} instanceId 实例ID
     * @param {QuerySqlPlanBody} querySqlPlanBody 请求体
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showSqlExplain(showSqlExplainRequest?: ShowSqlExplainRequest): Promise<ShowSqlExplainResponse> {
        const options = ParamCreater().showSqlExplain(showSqlExplainRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定ID的SQL限流任务信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询SQL限流任务
     * @param {string} instanceId 
     * @param {string} jobId SQL限流任务ID
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showSqlLimitJobInfo(showSqlLimitJobInfoRequest?: ShowSqlLimitJobInfoRequest): Promise<ShowSqlLimitJobInfoResponse> {
        const options = ParamCreater().showSqlLimitJobInfo(showSqlLimitJobInfoRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询SQL限流的开关状态。目前仅支持MySQL实例
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查看SQL限流开关状态
     * @param {string} instanceId 实例ID
     * @param {'MySQL' | 'PostgreSQL'} datastoreType 数据库类型
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showSqlLimitSwitchStatus(showSqlLimitSwitchStatusRequest?: ShowSqlLimitSwitchStatusRequest): Promise<ShowSqlLimitSwitchStatusResponse> {
        const options = ParamCreater().showSqlLimitSwitchStatus(showSqlLimitSwitchStatusRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询DAS收集全量SQL和慢SQL的开关状态。该功能仅支持付费实例。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询全量SQL和慢SQL的开关状态
     * @param {string} instanceId 实例ID。
     * @param {string} type 开关类型。取值DAS SQL Explorer和DAS Slow Query Log，分别表示DAS收集全量SQL开关和DAS收集慢SQL开关。
     * @param {string} datastoreType 数据库类型。当前全量SQL支持的数据库类型包括MySQL和GaussDB(for MySQL)，慢SQL支持的类型：MySQL、GaussDB(for MySQL)、PostgreSQL。
     * @param {'en-us' | 'zh-cn'} [xLanguage] 请求语言类型。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showSqlSwitchStatus(showSqlSwitchStatusRequest?: ShowSqlSwitchStatusRequest): Promise<ShowSqlSwitchStatusResponse> {
        const options = ParamCreater().showSqlSwitchStatus(showSqlSwitchStatusRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询历史事务开关。
     * 目前仅支持MySQL实例。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询历史事务开关
     * @param {string} instanceId 实例ID
     * @param {'MySQL'} datastoreType 数据库类型。仅支持MySQL
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showTransactionSwitchStatus(showTransactionSwitchStatusRequest?: ShowTransactionSwitchStatusRequest): Promise<ShowTransactionSwitchStatusResponse> {
        const options = ParamCreater().showTransactionSwitchStatus(showTransactionSwitchStatusRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取诊断结果
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取诊断结果
     * @param {string} messageId 诊断messageId
     * @param {string} connectionId 连接Id
     * @param {string} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showTuning(showTuningRequest?: ShowTuningRequest): Promise<ShowTuningResponse> {
        const options = ParamCreater().showTuning(showTuningRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 同步实例列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 同步实例列表
     * @param {SynchronizeInstancesReq} synchronizeInstancesRequestBody 请求体参数。
     * @param {'en-us' | 'zh-cn'} [xLanguage] 请求语言类型。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public synchronizeInstances(synchronizeInstancesRequest?: SynchronizeInstancesRequest): Promise<SynchronizeInstancesResponse> {
        const options = ParamCreater().synchronizeInstances(synchronizeInstancesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改注册在DAS里的数据库用户名和密码。此接口不会修改数据库实例上的数据库用户对象的用户名和密码。请确保输入的用户名和密码是已经存在并且是正确的。
     * 目前仅支持MySQL实例。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改数据库用户
     * @param {string} instanceId 实例ID
     * @param {string} dbUserId 数据库用户ID。用户使用数据库账号与数据库建立的连接ID（数据库用户ID由注册数据库用户接口创建）。
     * @param {UpdateDbUserRequestBody} updateDBUserRequestBody 修改注册的数据库用户请求
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateDbUser(updateDbUserRequest?: UpdateDbUserRequest): Promise<UpdateDbUserResponse> {
        const options = ParamCreater().updateDbUser(updateDbUserRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改SQL限流规则。目前仅支持PostgreSQL数据库
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改SQL限流规则
     * @param {string} instanceId 实例ID
     * @param {UpdateSqlLimitRulesBody} updateSqlLimitRulesRequestBody 修改SQL限流规则
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateSqlLimitRules(updateSqlLimitRulesRequest?: UpdateSqlLimitRulesRequest): Promise<UpdateSqlLimitRulesResponse> {
        const options = ParamCreater().updateSqlLimitRules(updateSqlLimitRulesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * 删除共享链接，
         * 用于用户删除共享链接
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        cancelShareConnections(cancelShareConnectionsRequest?: CancelShareConnectionsRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{project_id}/connections/share",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xLanguage;

            if (cancelShareConnectionsRequest !== null && cancelShareConnectionsRequest !== undefined) {
                if (cancelShareConnectionsRequest instanceof CancelShareConnectionsRequest) {
                    body = cancelShareConnectionsRequest.body
                    xLanguage = cancelShareConnectionsRequest.xLanguage;
                } else {
                    body = cancelShareConnectionsRequest['body'];
                    xLanguage = cancelShareConnectionsRequest['X-Language'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建实例连接
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createInstanceConnection(createInstanceConnectionRequest?: CreateInstanceConnectionRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/{instance_id}/create-connection",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let xLanguage;

            if (createInstanceConnectionRequest !== null && createInstanceConnectionRequest !== undefined) {
                if (createInstanceConnectionRequest instanceof CreateInstanceConnectionRequest) {
                    instanceId = createInstanceConnectionRequest.instanceId;
                    body = createInstanceConnectionRequest.body
                    xLanguage = createInstanceConnectionRequest.xLanguage;
                } else {
                    instanceId = createInstanceConnectionRequest['instance_id'];
                    body = createInstanceConnectionRequest['body'];
                    xLanguage = createInstanceConnectionRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling createInstanceConnection.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 设置共享链接，
         * 用于用户添加共享链接
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createShareConnections(createShareConnectionsRequest?: CreateShareConnectionsRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/connections/share",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xLanguage;

            if (createShareConnectionsRequest !== null && createShareConnectionsRequest !== undefined) {
                if (createShareConnectionsRequest instanceof CreateShareConnectionsRequest) {
                    body = createShareConnectionsRequest.body
                    xLanguage = createShareConnectionsRequest.xLanguage;
                } else {
                    body = createShareConnectionsRequest['body'];
                    xLanguage = createShareConnectionsRequest['X-Language'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询实例连接列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listConnections(listConnectionsRequest?: ListConnectionsRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/list-connections",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let condition;
            
            let offset;
            
            let limit;
            
            let networkType;
            
            let datastoreType;
            
            let connectionType;
            
            let instanceId;
            
            let xLanguage;

            if (listConnectionsRequest !== null && listConnectionsRequest !== undefined) {
                if (listConnectionsRequest instanceof ListConnectionsRequest) {
                    condition = listConnectionsRequest.condition;
                    offset = listConnectionsRequest.offset;
                    limit = listConnectionsRequest.limit;
                    networkType = listConnectionsRequest.networkType;
                    datastoreType = listConnectionsRequest.datastoreType;
                    connectionType = listConnectionsRequest.connectionType;
                    instanceId = listConnectionsRequest.instanceId;
                    xLanguage = listConnectionsRequest.xLanguage;
                } else {
                    condition = listConnectionsRequest['condition'];
                    offset = listConnectionsRequest['offset'];
                    limit = listConnectionsRequest['limit'];
                    networkType = listConnectionsRequest['network_type'];
                    datastoreType = listConnectionsRequest['datastore_type'];
                    connectionType = listConnectionsRequest['connection_type'];
                    instanceId = listConnectionsRequest['instance_id'];
                    xLanguage = listConnectionsRequest['X-Language'];
                }
            }

        
            if (condition !== null && condition !== undefined) {
                localVarQueryParameter['condition'] = condition;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (networkType !== null && networkType !== undefined) {
                localVarQueryParameter['network_type'] = networkType;
            }
            if (datastoreType !== null && datastoreType !== undefined) {
                localVarQueryParameter['datastore_type'] = datastoreType;
            }
            if (connectionType !== null && connectionType !== undefined) {
                localVarQueryParameter['connection_type'] = connectionType;
            }
            if (instanceId !== null && instanceId !== undefined) {
                localVarQueryParameter['instance_id'] = instanceId;
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询API版本列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listApiVersions() {
            const options = {
                method: "GET",
                url: "/das",
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
         * 查询指定的API版本信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showApiVersion(showApiVersionRequest?: ShowApiVersionRequest) {
            const options = {
                method: "GET",
                url: "/das/{version}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let version;

            if (showApiVersionRequest !== null && showApiVersionRequest !== undefined) {
                if (showApiVersionRequest instanceof ShowApiVersionRequest) {
                    version = showApiVersionRequest.version;
                } else {
                    version = showApiVersionRequest['version'];
                }
            }

        
            if (version === null || version === undefined) {
            throw new RequiredError('version','Required parameter version was null or undefined when calling showApiVersion.');
            }

            options.pathParams = { 'version': version, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建全量SQL明细解析任务
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        addFullSqlTask(addFullSqlTaskRequest?: AddFullSqlTaskRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/{instance_id}/full-sql/add-task",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let xLanguage;

            if (addFullSqlTaskRequest !== null && addFullSqlTaskRequest !== undefined) {
                if (addFullSqlTaskRequest instanceof AddFullSqlTaskRequest) {
                    instanceId = addFullSqlTaskRequest.instanceId;
                    body = addFullSqlTaskRequest.body
                    xLanguage = addFullSqlTaskRequest.xLanguage;
                } else {
                    instanceId = addFullSqlTaskRequest['instance_id'];
                    body = addFullSqlTaskRequest['body'];
                    xLanguage = addFullSqlTaskRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling addFullSqlTask.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 设置付费实例
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        changeChargeMode(changeChargeModeRequest?: ChangeChargeModeRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/cloud-dba/change-payment-mode",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xLanguage;

            if (changeChargeModeRequest !== null && changeChargeModeRequest !== undefined) {
                if (changeChargeModeRequest instanceof ChangeChargeModeRequest) {
                    body = changeChargeModeRequest.body
                    xLanguage = changeChargeModeRequest.xLanguage;
                } else {
                    body = changeChargeModeRequest['body'];
                    xLanguage = changeChargeModeRequest['X-Language'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 设置SQL限流开关状态。目前仅支持MySQL数据库。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        changeSqlLimitSwitchStatus(changeSqlLimitSwitchStatusRequest?: ChangeSqlLimitSwitchStatusRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/{instance_id}/sql-limit/switch",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let xLanguage;

            if (changeSqlLimitSwitchStatusRequest !== null && changeSqlLimitSwitchStatusRequest !== undefined) {
                if (changeSqlLimitSwitchStatusRequest instanceof ChangeSqlLimitSwitchStatusRequest) {
                    instanceId = changeSqlLimitSwitchStatusRequest.instanceId;
                    body = changeSqlLimitSwitchStatusRequest.body
                    xLanguage = changeSqlLimitSwitchStatusRequest.xLanguage;
                } else {
                    instanceId = changeSqlLimitSwitchStatusRequest['instance_id'];
                    body = changeSqlLimitSwitchStatusRequest['body'];
                    xLanguage = changeSqlLimitSwitchStatusRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling changeSqlLimitSwitchStatus.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 打开或者关闭DAS收集全量SQL开关，开启后，实例的性能损耗在5%以内。开启全量SQL后，本服务会对SQL的文本内容进行存储，以便进行分析。用户可自行设置全量SQL的保存时间范围，到期后会自动删除；如果未设置，数据默认保留7天。
         * 打开或者关闭DAS收集慢SQL开关。开启慢SQL后，本服务会对慢SQL的文本内容进行存储，以便进行分析。用户可自行设置慢SQL的保存时间范围，到期后会自动删除；如果未设置，数据默认保留7天。该功能仅支持付费实例。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        changeSqlSwitch(changeSqlSwitchRequest?: ChangeSqlSwitchRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/{instance_id}/sql/switch",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let xLanguage;

            if (changeSqlSwitchRequest !== null && changeSqlSwitchRequest !== undefined) {
                if (changeSqlSwitchRequest instanceof ChangeSqlSwitchRequest) {
                    instanceId = changeSqlSwitchRequest.instanceId;
                    body = changeSqlSwitchRequest.body
                    xLanguage = changeSqlSwitchRequest.xLanguage;
                } else {
                    instanceId = changeSqlSwitchRequest['instance_id'];
                    body = changeSqlSwitchRequest['body'];
                    xLanguage = changeSqlSwitchRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling changeSqlSwitch.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 开启/关闭历史事务开关，仅支持MySQL引擎，并且依赖开启全量SQL或者慢SQL功能
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        changeTransactionSwitchStatus(changeTransactionSwitchStatusRequest?: ChangeTransactionSwitchStatusRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/{instance_id}/transaction/switch",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let xLanguage;

            if (changeTransactionSwitchStatusRequest !== null && changeTransactionSwitchStatusRequest !== undefined) {
                if (changeTransactionSwitchStatusRequest instanceof ChangeTransactionSwitchStatusRequest) {
                    instanceId = changeTransactionSwitchStatusRequest.instanceId;
                    body = changeTransactionSwitchStatusRequest.body
                    xLanguage = changeTransactionSwitchStatusRequest.xLanguage;
                } else {
                    instanceId = changeTransactionSwitchStatusRequest['instance_id'];
                    body = changeTransactionSwitchStatusRequest['body'];
                    xLanguage = changeTransactionSwitchStatusRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling changeTransactionSwitchStatus.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建实例健康诊断任务。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createHealthReportTask(createHealthReportTaskRequest?: CreateHealthReportTaskRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/{instance_id}/create-instance-health-report-task",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let xLanguage;

            if (createHealthReportTaskRequest !== null && createHealthReportTaskRequest !== undefined) {
                if (createHealthReportTaskRequest instanceof CreateHealthReportTaskRequest) {
                    instanceId = createHealthReportTaskRequest.instanceId;
                    body = createHealthReportTaskRequest.body
                    xLanguage = createHealthReportTaskRequest.xLanguage;
                } else {
                    instanceId = createHealthReportTaskRequest['instance_id'];
                    body = createHealthReportTaskRequest['body'];
                    xLanguage = createHealthReportTaskRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling createHealthReportTask.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建空间分析任务，如触发重新分析，支持MySQL和GaussDB(for MySQL)引擎
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createSpaceAnalysisTask(createSpaceAnalysisTaskRequest?: CreateSpaceAnalysisTaskRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/{instance_id}/space-analysis",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let xLanguage;

            if (createSpaceAnalysisTaskRequest !== null && createSpaceAnalysisTaskRequest !== undefined) {
                if (createSpaceAnalysisTaskRequest instanceof CreateSpaceAnalysisTaskRequest) {
                    instanceId = createSpaceAnalysisTaskRequest.instanceId;
                    body = createSpaceAnalysisTaskRequest.body
                    xLanguage = createSpaceAnalysisTaskRequest.xLanguage;
                } else {
                    instanceId = createSpaceAnalysisTaskRequest['instance_id'];
                    body = createSpaceAnalysisTaskRequest['body'];
                    xLanguage = createSpaceAnalysisTaskRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling createSpaceAnalysisTask.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 添加SQL限流规则。目前仅支持MySQL和PostgreSQL数据库。
         * MySQL使用限制如下：
         * 1.规则举例详细说明：例如关键字是\&quot;select~a\&quot;, 含义为：select以及a为该并发控制所包含的两个关键字，~为关键字间隔符，即若执行SQL命令包含select与a两个关键字视为命中此条并发控制规则。
         * 2.当SQL语句匹配多条限流规则时，优先生效最新添加的规则，之前的规则不再生效。
         * 3.限流规则关键字有顺序要求，只会按顺序匹配。如：a~and~b 只会匹配 xxx a&gt;1 and b&gt;2，而不会匹配 xxx b&gt;2 and a&gt;1。
         * 4.关键字可能大小写敏感，请执行 \&quot;show variables like \&#39;rds_sqlfilter_case_sensitive\&#39;或者到实例参数设置页面进行确认。
         * 5.部分版本只读实例不允许设置限流规则，如果要设置限流规则，请到主实例上进行添加。
         * 6.系统表不限制、不涉及数据查询的不限制、root账号在特定版本下不限制。
         * PostgreSQL使用限制如下：
         * 1.无法添加相同QUERY_ID或SQL语句的规则。
         * 2.使用SQL语句添加规则时，需要确保存在数据库表，如：select * from test，需要确保数据库中有test表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createSqlLimitRules(createSqlLimitRulesRequest?: CreateSqlLimitRulesRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/{instance_id}/sql-limit/rules",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let xLanguage;

            if (createSqlLimitRulesRequest !== null && createSqlLimitRulesRequest !== undefined) {
                if (createSqlLimitRulesRequest instanceof CreateSqlLimitRulesRequest) {
                    instanceId = createSqlLimitRulesRequest.instanceId;
                    body = createSqlLimitRulesRequest.body
                    xLanguage = createSqlLimitRulesRequest.xLanguage;
                } else {
                    instanceId = createSqlLimitRulesRequest['instance_id'];
                    body = createSqlLimitRulesRequest['body'];
                    xLanguage = createSqlLimitRulesRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling createSqlLimitRules.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 执行SQL诊断，
         * 用于用户执行SQL诊断。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createTuning(createTuningRequest?: CreateTuningRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/connections/{connection_id}/tuning/create-tuning",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let connectionId;
            
            let xLanguage;

            if (createTuningRequest !== null && createTuningRequest !== undefined) {
                if (createTuningRequest instanceof CreateTuningRequest) {
                    connectionId = createTuningRequest.connectionId;
                    body = createTuningRequest.body
                    xLanguage = createTuningRequest.xLanguage;
                } else {
                    connectionId = createTuningRequest['connection_id'];
                    body = createTuningRequest['body'];
                    xLanguage = createTuningRequest['X-Language'];
                }
            }

        
            if (connectionId === null || connectionId === undefined) {
            throw new RequiredError('connectionId','Required parameter connectionId was null or undefined when calling createTuning.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'connection_id': connectionId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除注册在DAS里的数据库用户。此接口只是将注册的数据库用户在DAS系统里删除，不会真正删除数据库用户对象。
         * 目前仅支持MySQL实例。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteDbUser(deleteDbUserRequest?: DeleteDbUserRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{project_id}/instances/{instance_id}/db-users/{db_user_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let dbUserId;
            
            let xLanguage;

            if (deleteDbUserRequest !== null && deleteDbUserRequest !== undefined) {
                if (deleteDbUserRequest instanceof DeleteDbUserRequest) {
                    instanceId = deleteDbUserRequest.instanceId;
                    dbUserId = deleteDbUserRequest.dbUserId;
                    xLanguage = deleteDbUserRequest.xLanguage;
                } else {
                    instanceId = deleteDbUserRequest['instance_id'];
                    dbUserId = deleteDbUserRequest['db_user_id'];
                    xLanguage = deleteDbUserRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling deleteDbUser.');
            }
            if (dbUserId === null || dbUserId === undefined) {
            throw new RequiredError('dbUserId','Required parameter dbUserId was null or undefined when calling deleteDbUser.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.pathParams = { 'instance_id': instanceId,'db_user_id': dbUserId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查杀会话。支持按照用户、数据库、会话列表查杀会话，三个条件至少指定一个。
         * 目前仅支持MySQL实例。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteProcess(deleteProcessRequest?: DeleteProcessRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{project_id}/instances/{instance_id}/process",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let xLanguage;

            if (deleteProcessRequest !== null && deleteProcessRequest !== undefined) {
                if (deleteProcessRequest instanceof DeleteProcessRequest) {
                    instanceId = deleteProcessRequest.instanceId;
                    body = deleteProcessRequest.body
                    xLanguage = deleteProcessRequest.xLanguage;
                } else {
                    instanceId = deleteProcessRequest['instance_id'];
                    body = deleteProcessRequest['body'];
                    xLanguage = deleteProcessRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling deleteProcess.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除SQL限流规则。目前仅支持MySQL和PostgreSQL数据库
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteSqlLimitRules(deleteSqlLimitRulesRequest?: DeleteSqlLimitRulesRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{project_id}/instances/{instance_id}/sql-limit/rules",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let xLanguage;

            if (deleteSqlLimitRulesRequest !== null && deleteSqlLimitRulesRequest !== undefined) {
                if (deleteSqlLimitRulesRequest instanceof DeleteSqlLimitRulesRequest) {
                    instanceId = deleteSqlLimitRulesRequest.instanceId;
                    body = deleteSqlLimitRulesRequest.body
                    xLanguage = deleteSqlLimitRulesRequest.xLanguage;
                } else {
                    instanceId = deleteSqlLimitRulesRequest['instance_id'];
                    body = deleteSqlLimitRulesRequest['body'];
                    xLanguage = deleteSqlLimitRulesRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling deleteSqlLimitRules.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 全量SQL开关打开后，创建SQL洞察任务，支持按节点、用户名、数据库、操作类型等导出全量SQL明细数据。该功能仅支持付费实例。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        exportFullSqlDetails(exportFullSqlDetailsRequest?: ExportFullSqlDetailsRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/{instance_id}/full-sql-search",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let startAt;
            
            let endAt;
            
            let taskIds;
            
            let nodeId;
            
            let keyword;
            
            let fuzzy;
            
            let userList;
            
            let dbList;
            
            let operationList;
            
            let clientIpList;
            
            let threadIdList;
            
            let trxIdList;
            
            let sessionIdList;
            
            let statusList;
            
            let sqlTemplateIds;
            
            let costMin;
            
            let costMax;
            
            let scanMin;
            
            let scanMax;
            
            let affectMin;
            
            let affectMax;
            
            let returnMin;
            
            let returnMax;
            
            let sortField;
            
            let asc;
            
            let page;
            
            let limit;
            
            let xLanguage;

            if (exportFullSqlDetailsRequest !== null && exportFullSqlDetailsRequest !== undefined) {
                if (exportFullSqlDetailsRequest instanceof ExportFullSqlDetailsRequest) {
                    instanceId = exportFullSqlDetailsRequest.instanceId;
                    startAt = exportFullSqlDetailsRequest.startAt;
                    endAt = exportFullSqlDetailsRequest.endAt;
                    taskIds = exportFullSqlDetailsRequest.taskIds;
                    nodeId = exportFullSqlDetailsRequest.nodeId;
                    keyword = exportFullSqlDetailsRequest.keyword;
                    fuzzy = exportFullSqlDetailsRequest.fuzzy;
                    userList = exportFullSqlDetailsRequest.userList;
                    dbList = exportFullSqlDetailsRequest.dbList;
                    operationList = exportFullSqlDetailsRequest.operationList;
                    clientIpList = exportFullSqlDetailsRequest.clientIpList;
                    threadIdList = exportFullSqlDetailsRequest.threadIdList;
                    trxIdList = exportFullSqlDetailsRequest.trxIdList;
                    sessionIdList = exportFullSqlDetailsRequest.sessionIdList;
                    statusList = exportFullSqlDetailsRequest.statusList;
                    sqlTemplateIds = exportFullSqlDetailsRequest.sqlTemplateIds;
                    costMin = exportFullSqlDetailsRequest.costMin;
                    costMax = exportFullSqlDetailsRequest.costMax;
                    scanMin = exportFullSqlDetailsRequest.scanMin;
                    scanMax = exportFullSqlDetailsRequest.scanMax;
                    affectMin = exportFullSqlDetailsRequest.affectMin;
                    affectMax = exportFullSqlDetailsRequest.affectMax;
                    returnMin = exportFullSqlDetailsRequest.returnMin;
                    returnMax = exportFullSqlDetailsRequest.returnMax;
                    sortField = exportFullSqlDetailsRequest.sortField;
                    asc = exportFullSqlDetailsRequest.asc;
                    page = exportFullSqlDetailsRequest.page;
                    limit = exportFullSqlDetailsRequest.limit;
                    xLanguage = exportFullSqlDetailsRequest.xLanguage;
                } else {
                    instanceId = exportFullSqlDetailsRequest['instance_id'];
                    startAt = exportFullSqlDetailsRequest['start_at'];
                    endAt = exportFullSqlDetailsRequest['end_at'];
                    taskIds = exportFullSqlDetailsRequest['task_ids'];
                    nodeId = exportFullSqlDetailsRequest['node_id'];
                    keyword = exportFullSqlDetailsRequest['keyword'];
                    fuzzy = exportFullSqlDetailsRequest['fuzzy'];
                    userList = exportFullSqlDetailsRequest['user_list'];
                    dbList = exportFullSqlDetailsRequest['db_list'];
                    operationList = exportFullSqlDetailsRequest['operation_list'];
                    clientIpList = exportFullSqlDetailsRequest['client_ip_list'];
                    threadIdList = exportFullSqlDetailsRequest['thread_id_list'];
                    trxIdList = exportFullSqlDetailsRequest['trx_id_list'];
                    sessionIdList = exportFullSqlDetailsRequest['session_id_list'];
                    statusList = exportFullSqlDetailsRequest['status_list'];
                    sqlTemplateIds = exportFullSqlDetailsRequest['sql_template_ids'];
                    costMin = exportFullSqlDetailsRequest['cost_min'];
                    costMax = exportFullSqlDetailsRequest['cost_max'];
                    scanMin = exportFullSqlDetailsRequest['scan_min'];
                    scanMax = exportFullSqlDetailsRequest['scan_max'];
                    affectMin = exportFullSqlDetailsRequest['affect_min'];
                    affectMax = exportFullSqlDetailsRequest['affect_max'];
                    returnMin = exportFullSqlDetailsRequest['return_min'];
                    returnMax = exportFullSqlDetailsRequest['return_max'];
                    sortField = exportFullSqlDetailsRequest['sort_field'];
                    asc = exportFullSqlDetailsRequest['asc'];
                    page = exportFullSqlDetailsRequest['page'];
                    limit = exportFullSqlDetailsRequest['limit'];
                    xLanguage = exportFullSqlDetailsRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling exportFullSqlDetails.');
            }
            if (startAt === null || startAt === undefined) {
                throw new RequiredError('startAt','Required parameter startAt was null or undefined when calling exportFullSqlDetails.');
            }
            if (startAt !== null && startAt !== undefined) {
                localVarQueryParameter['start_at'] = startAt;
            }
            if (endAt === null || endAt === undefined) {
                throw new RequiredError('endAt','Required parameter endAt was null or undefined when calling exportFullSqlDetails.');
            }
            if (endAt !== null && endAt !== undefined) {
                localVarQueryParameter['end_at'] = endAt;
            }
            if (taskIds !== null && taskIds !== undefined) {
                localVarQueryParameter['task_ids'] = taskIds;
            }
            if (nodeId !== null && nodeId !== undefined) {
                localVarQueryParameter['node_id'] = nodeId;
            }
            if (keyword !== null && keyword !== undefined) {
                localVarQueryParameter['keyword'] = keyword;
            }
            if (fuzzy !== null && fuzzy !== undefined) {
                localVarQueryParameter['fuzzy'] = fuzzy;
            }
            if (userList !== null && userList !== undefined) {
                localVarQueryParameter['user_list'] = userList;
            }
            if (dbList !== null && dbList !== undefined) {
                localVarQueryParameter['db_list'] = dbList;
            }
            if (operationList !== null && operationList !== undefined) {
                localVarQueryParameter['operation_list'] = operationList;
            }
            if (clientIpList !== null && clientIpList !== undefined) {
                localVarQueryParameter['client_ip_list'] = clientIpList;
            }
            if (threadIdList !== null && threadIdList !== undefined) {
                localVarQueryParameter['thread_id_list'] = threadIdList;
            }
            if (trxIdList !== null && trxIdList !== undefined) {
                localVarQueryParameter['trx_id_list'] = trxIdList;
            }
            if (sessionIdList !== null && sessionIdList !== undefined) {
                localVarQueryParameter['session_id_list'] = sessionIdList;
            }
            if (statusList !== null && statusList !== undefined) {
                localVarQueryParameter['status_list'] = statusList;
            }
            if (sqlTemplateIds !== null && sqlTemplateIds !== undefined) {
                localVarQueryParameter['sql_template_ids'] = sqlTemplateIds;
            }
            if (costMin !== null && costMin !== undefined) {
                localVarQueryParameter['cost_min'] = costMin;
            }
            if (costMax !== null && costMax !== undefined) {
                localVarQueryParameter['cost_max'] = costMax;
            }
            if (scanMin !== null && scanMin !== undefined) {
                localVarQueryParameter['scan_min'] = scanMin;
            }
            if (scanMax !== null && scanMax !== undefined) {
                localVarQueryParameter['scan_max'] = scanMax;
            }
            if (affectMin !== null && affectMin !== undefined) {
                localVarQueryParameter['affect_min'] = affectMin;
            }
            if (affectMax !== null && affectMax !== undefined) {
                localVarQueryParameter['affect_max'] = affectMax;
            }
            if (returnMin !== null && returnMin !== undefined) {
                localVarQueryParameter['return_min'] = returnMin;
            }
            if (returnMax !== null && returnMax !== undefined) {
                localVarQueryParameter['return_max'] = returnMax;
            }
            if (sortField !== null && sortField !== undefined) {
                localVarQueryParameter['sort_field'] = sortField;
            }
            if (asc !== null && asc !== undefined) {
                localVarQueryParameter['asc'] = asc;
            }
            if (page !== null && page !== undefined) {
                localVarQueryParameter['page'] = page;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * DAS收集慢SQL开关打开后，一次性导出指定时间范围内的慢SQL数据，支持分页滚动获取。免费实例仅支持查看最近一小时数据。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        exportSlowQueryLogs(exportSlowQueryLogsRequest?: ExportSlowQueryLogsRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/{instance_id}/slow-query-logs",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let datastoreType;
            
            let startAt;
            
            let endAt;
            
            let limit;
            
            let marker;
            
            let xLanguage;

            if (exportSlowQueryLogsRequest !== null && exportSlowQueryLogsRequest !== undefined) {
                if (exportSlowQueryLogsRequest instanceof ExportSlowQueryLogsRequest) {
                    instanceId = exportSlowQueryLogsRequest.instanceId;
                    datastoreType = exportSlowQueryLogsRequest.datastoreType;
                    startAt = exportSlowQueryLogsRequest.startAt;
                    endAt = exportSlowQueryLogsRequest.endAt;
                    limit = exportSlowQueryLogsRequest.limit;
                    marker = exportSlowQueryLogsRequest.marker;
                    xLanguage = exportSlowQueryLogsRequest.xLanguage;
                } else {
                    instanceId = exportSlowQueryLogsRequest['instance_id'];
                    datastoreType = exportSlowQueryLogsRequest['datastore_type'];
                    startAt = exportSlowQueryLogsRequest['start_at'];
                    endAt = exportSlowQueryLogsRequest['end_at'];
                    limit = exportSlowQueryLogsRequest['limit'];
                    marker = exportSlowQueryLogsRequest['marker'];
                    xLanguage = exportSlowQueryLogsRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling exportSlowQueryLogs.');
            }
            if (datastoreType === null || datastoreType === undefined) {
                throw new RequiredError('datastoreType','Required parameter datastoreType was null or undefined when calling exportSlowQueryLogs.');
            }
            if (datastoreType !== null && datastoreType !== undefined) {
                localVarQueryParameter['datastore_type'] = datastoreType;
            }
            if (startAt === null || startAt === undefined) {
                throw new RequiredError('startAt','Required parameter startAt was null or undefined when calling exportSlowQueryLogs.');
            }
            if (startAt !== null && startAt !== undefined) {
                localVarQueryParameter['start_at'] = startAt;
            }
            if (endAt === null || endAt === undefined) {
                throw new RequiredError('endAt','Required parameter endAt was null or undefined when calling exportSlowQueryLogs.');
            }
            if (endAt !== null && endAt !== undefined) {
                localVarQueryParameter['end_at'] = endAt;
            }
            if (limit === null || limit === undefined) {
                throw new RequiredError('limit','Required parameter limit was null or undefined when calling exportSlowQueryLogs.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 慢SQL开关打开后，导出慢SQL统计数据。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        exportSlowSqlStatistics(exportSlowSqlStatisticsRequest?: ExportSlowSqlStatisticsRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/{instance_id}/slow-sql-statistics",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let xLanguage;

            if (exportSlowSqlStatisticsRequest !== null && exportSlowSqlStatisticsRequest !== undefined) {
                if (exportSlowSqlStatisticsRequest instanceof ExportSlowSqlStatisticsRequest) {
                    instanceId = exportSlowSqlStatisticsRequest.instanceId;
                    body = exportSlowSqlStatisticsRequest.body
                    xLanguage = exportSlowSqlStatisticsRequest.xLanguage;
                } else {
                    instanceId = exportSlowSqlStatisticsRequest['instance_id'];
                    body = exportSlowSqlStatisticsRequest['body'];
                    xLanguage = exportSlowSqlStatisticsRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling exportSlowSqlStatistics.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 慢SQL开关打开后，导出慢SQL模板列表。免费实例仅支持查看最近一小时数据。查询时间间隔最长一天。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        exportSlowSqlTemplatesDetails(exportSlowSqlTemplatesDetailsRequest?: ExportSlowSqlTemplatesDetailsRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/{instance_id}/slow-sql-templates",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let startAt;
            
            let endAt;
            
            let datastoreType;
            
            let dbName;
            
            let xLanguage;
            
            let offset;
            
            let limit;

            if (exportSlowSqlTemplatesDetailsRequest !== null && exportSlowSqlTemplatesDetailsRequest !== undefined) {
                if (exportSlowSqlTemplatesDetailsRequest instanceof ExportSlowSqlTemplatesDetailsRequest) {
                    instanceId = exportSlowSqlTemplatesDetailsRequest.instanceId;
                    startAt = exportSlowSqlTemplatesDetailsRequest.startAt;
                    endAt = exportSlowSqlTemplatesDetailsRequest.endAt;
                    datastoreType = exportSlowSqlTemplatesDetailsRequest.datastoreType;
                    dbName = exportSlowSqlTemplatesDetailsRequest.dbName;
                    xLanguage = exportSlowSqlTemplatesDetailsRequest.xLanguage;
                    offset = exportSlowSqlTemplatesDetailsRequest.offset;
                    limit = exportSlowSqlTemplatesDetailsRequest.limit;
                } else {
                    instanceId = exportSlowSqlTemplatesDetailsRequest['instance_id'];
                    startAt = exportSlowSqlTemplatesDetailsRequest['start_at'];
                    endAt = exportSlowSqlTemplatesDetailsRequest['end_at'];
                    datastoreType = exportSlowSqlTemplatesDetailsRequest['datastore_type'];
                    dbName = exportSlowSqlTemplatesDetailsRequest['db_name'];
                    xLanguage = exportSlowSqlTemplatesDetailsRequest['X-Language'];
                    offset = exportSlowSqlTemplatesDetailsRequest['offset'];
                    limit = exportSlowSqlTemplatesDetailsRequest['limit'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling exportSlowSqlTemplatesDetails.');
            }
            if (startAt === null || startAt === undefined) {
                throw new RequiredError('startAt','Required parameter startAt was null or undefined when calling exportSlowSqlTemplatesDetails.');
            }
            if (startAt !== null && startAt !== undefined) {
                localVarQueryParameter['start_at'] = startAt;
            }
            if (endAt === null || endAt === undefined) {
                throw new RequiredError('endAt','Required parameter endAt was null or undefined when calling exportSlowSqlTemplatesDetails.');
            }
            if (endAt !== null && endAt !== undefined) {
                localVarQueryParameter['end_at'] = endAt;
            }
            if (datastoreType === null || datastoreType === undefined) {
                throw new RequiredError('datastoreType','Required parameter datastoreType was null or undefined when calling exportSlowSqlTemplatesDetails.');
            }
            if (datastoreType !== null && datastoreType !== undefined) {
                localVarQueryParameter['datastore_type'] = datastoreType;
            }
            if (dbName !== null && dbName !== undefined) {
                localVarQueryParameter['db_name'] = dbName;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 慢SQL开关打开后，导出慢SQL数量趋势。免费实例仅支持查看最近一小时数据。查询时间间隔最长一天。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        exportSlowSqlTrendDetails(exportSlowSqlTrendDetailsRequest?: ExportSlowSqlTrendDetailsRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/{instance_id}/slow-sql-trend",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let startAt;
            
            let endAt;
            
            let datastoreType;
            
            let nodeId;
            
            let xLanguage;
            
            let offset;
            
            let limit;

            if (exportSlowSqlTrendDetailsRequest !== null && exportSlowSqlTrendDetailsRequest !== undefined) {
                if (exportSlowSqlTrendDetailsRequest instanceof ExportSlowSqlTrendDetailsRequest) {
                    instanceId = exportSlowSqlTrendDetailsRequest.instanceId;
                    startAt = exportSlowSqlTrendDetailsRequest.startAt;
                    endAt = exportSlowSqlTrendDetailsRequest.endAt;
                    datastoreType = exportSlowSqlTrendDetailsRequest.datastoreType;
                    nodeId = exportSlowSqlTrendDetailsRequest.nodeId;
                    xLanguage = exportSlowSqlTrendDetailsRequest.xLanguage;
                    offset = exportSlowSqlTrendDetailsRequest.offset;
                    limit = exportSlowSqlTrendDetailsRequest.limit;
                } else {
                    instanceId = exportSlowSqlTrendDetailsRequest['instance_id'];
                    startAt = exportSlowSqlTrendDetailsRequest['start_at'];
                    endAt = exportSlowSqlTrendDetailsRequest['end_at'];
                    datastoreType = exportSlowSqlTrendDetailsRequest['datastore_type'];
                    nodeId = exportSlowSqlTrendDetailsRequest['node_id'];
                    xLanguage = exportSlowSqlTrendDetailsRequest['X-Language'];
                    offset = exportSlowSqlTrendDetailsRequest['offset'];
                    limit = exportSlowSqlTrendDetailsRequest['limit'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling exportSlowSqlTrendDetails.');
            }
            if (startAt === null || startAt === undefined) {
                throw new RequiredError('startAt','Required parameter startAt was null or undefined when calling exportSlowSqlTrendDetails.');
            }
            if (startAt !== null && startAt !== undefined) {
                localVarQueryParameter['start_at'] = startAt;
            }
            if (endAt === null || endAt === undefined) {
                throw new RequiredError('endAt','Required parameter endAt was null or undefined when calling exportSlowSqlTrendDetails.');
            }
            if (endAt !== null && endAt !== undefined) {
                localVarQueryParameter['end_at'] = endAt;
            }
            if (datastoreType === null || datastoreType === undefined) {
                throw new RequiredError('datastoreType','Required parameter datastoreType was null or undefined when calling exportSlowSqlTrendDetails.');
            }
            if (datastoreType !== null && datastoreType !== undefined) {
                localVarQueryParameter['datastore_type'] = datastoreType;
            }
            if (nodeId !== null && nodeId !== undefined) {
                localVarQueryParameter['node_id'] = nodeId;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 全量SQL开关打开后，一次性导出指定时间范围内的全量SQL数据，支持分页滚动获取。该功能仅支持付费实例。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        exportSqlStatements(exportSqlStatementsRequest?: ExportSqlStatementsRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/{instance_id}/sql-statements",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let startAt;
            
            let endAt;
            
            let limit;
            
            let datastoreType;
            
            let marker;
            
            let xLanguage;

            if (exportSqlStatementsRequest !== null && exportSqlStatementsRequest !== undefined) {
                if (exportSqlStatementsRequest instanceof ExportSqlStatementsRequest) {
                    instanceId = exportSqlStatementsRequest.instanceId;
                    startAt = exportSqlStatementsRequest.startAt;
                    endAt = exportSqlStatementsRequest.endAt;
                    limit = exportSqlStatementsRequest.limit;
                    datastoreType = exportSqlStatementsRequest.datastoreType;
                    marker = exportSqlStatementsRequest.marker;
                    xLanguage = exportSqlStatementsRequest.xLanguage;
                } else {
                    instanceId = exportSqlStatementsRequest['instance_id'];
                    startAt = exportSqlStatementsRequest['start_at'];
                    endAt = exportSqlStatementsRequest['end_at'];
                    limit = exportSqlStatementsRequest['limit'];
                    datastoreType = exportSqlStatementsRequest['datastore_type'];
                    marker = exportSqlStatementsRequest['marker'];
                    xLanguage = exportSqlStatementsRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling exportSqlStatements.');
            }
            if (startAt === null || startAt === undefined) {
                throw new RequiredError('startAt','Required parameter startAt was null or undefined when calling exportSqlStatements.');
            }
            if (startAt !== null && startAt !== undefined) {
                localVarQueryParameter['start_at'] = startAt;
            }
            if (endAt === null || endAt === undefined) {
                throw new RequiredError('endAt','Required parameter endAt was null or undefined when calling exportSqlStatements.');
            }
            if (endAt !== null && endAt !== undefined) {
                localVarQueryParameter['end_at'] = endAt;
            }
            if (limit === null || limit === undefined) {
                throw new RequiredError('limit','Required parameter limit was null or undefined when calling exportSqlStatements.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (datastoreType === null || datastoreType === undefined) {
                throw new RequiredError('datastoreType','Required parameter datastoreType was null or undefined when calling exportSqlStatements.');
            }
            if (datastoreType !== null && datastoreType !== undefined) {
                localVarQueryParameter['datastore_type'] = datastoreType;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 导出TOP风险实例列表，支持查看最近24小时数据。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        exportTopRiskInstances(exportTopRiskInstancesRequest?: ExportTopRiskInstancesRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/top-risk",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let startAt;
            
            let endAt;
            
            let datastoreType;
            
            let num;
            
            let xLanguage;
            
            let metricCode;

            if (exportTopRiskInstancesRequest !== null && exportTopRiskInstancesRequest !== undefined) {
                if (exportTopRiskInstancesRequest instanceof ExportTopRiskInstancesRequest) {
                    startAt = exportTopRiskInstancesRequest.startAt;
                    endAt = exportTopRiskInstancesRequest.endAt;
                    datastoreType = exportTopRiskInstancesRequest.datastoreType;
                    num = exportTopRiskInstancesRequest.num;
                    xLanguage = exportTopRiskInstancesRequest.xLanguage;
                    metricCode = exportTopRiskInstancesRequest.metricCode;
                } else {
                    startAt = exportTopRiskInstancesRequest['start_at'];
                    endAt = exportTopRiskInstancesRequest['end_at'];
                    datastoreType = exportTopRiskInstancesRequest['datastore_type'];
                    num = exportTopRiskInstancesRequest['num'];
                    xLanguage = exportTopRiskInstancesRequest['X-Language'];
                    metricCode = exportTopRiskInstancesRequest['metric_code'];
                }
            }

        
            if (startAt === null || startAt === undefined) {
                throw new RequiredError('startAt','Required parameter startAt was null or undefined when calling exportTopRiskInstances.');
            }
            if (startAt !== null && startAt !== undefined) {
                localVarQueryParameter['start_at'] = startAt;
            }
            if (endAt === null || endAt === undefined) {
                throw new RequiredError('endAt','Required parameter endAt was null or undefined when calling exportTopRiskInstances.');
            }
            if (endAt !== null && endAt !== undefined) {
                localVarQueryParameter['end_at'] = endAt;
            }
            if (datastoreType === null || datastoreType === undefined) {
                throw new RequiredError('datastoreType','Required parameter datastoreType was null or undefined when calling exportTopRiskInstances.');
            }
            if (datastoreType !== null && datastoreType !== undefined) {
                localVarQueryParameter['datastore_type'] = datastoreType;
            }
            if (num !== null && num !== undefined) {
                localVarQueryParameter['num'] = num;
            }
            if (metricCode !== null && metricCode !== undefined) {
                localVarQueryParameter['metric_code'] = metricCode;
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * TopSQL开关打开后，导出TopSQL模板列表。该功能仅支持付费实例。查询时间间隔最长一小时。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        exportTopSqlTemplatesDetails(exportTopSqlTemplatesDetailsRequest?: ExportTopSqlTemplatesDetailsRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/{instance_id}/top-sql-templates",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let startAt;
            
            let endAt;
            
            let datastoreType;
            
            let nodeId;
            
            let sort;
            
            let asc;
            
            let offset;
            
            let limit;
            
            let xLanguage;

            if (exportTopSqlTemplatesDetailsRequest !== null && exportTopSqlTemplatesDetailsRequest !== undefined) {
                if (exportTopSqlTemplatesDetailsRequest instanceof ExportTopSqlTemplatesDetailsRequest) {
                    instanceId = exportTopSqlTemplatesDetailsRequest.instanceId;
                    startAt = exportTopSqlTemplatesDetailsRequest.startAt;
                    endAt = exportTopSqlTemplatesDetailsRequest.endAt;
                    datastoreType = exportTopSqlTemplatesDetailsRequest.datastoreType;
                    nodeId = exportTopSqlTemplatesDetailsRequest.nodeId;
                    sort = exportTopSqlTemplatesDetailsRequest.sort;
                    asc = exportTopSqlTemplatesDetailsRequest.asc;
                    offset = exportTopSqlTemplatesDetailsRequest.offset;
                    limit = exportTopSqlTemplatesDetailsRequest.limit;
                    xLanguage = exportTopSqlTemplatesDetailsRequest.xLanguage;
                } else {
                    instanceId = exportTopSqlTemplatesDetailsRequest['instance_id'];
                    startAt = exportTopSqlTemplatesDetailsRequest['start_at'];
                    endAt = exportTopSqlTemplatesDetailsRequest['end_at'];
                    datastoreType = exportTopSqlTemplatesDetailsRequest['datastore_type'];
                    nodeId = exportTopSqlTemplatesDetailsRequest['node_id'];
                    sort = exportTopSqlTemplatesDetailsRequest['sort'];
                    asc = exportTopSqlTemplatesDetailsRequest['asc'];
                    offset = exportTopSqlTemplatesDetailsRequest['offset'];
                    limit = exportTopSqlTemplatesDetailsRequest['limit'];
                    xLanguage = exportTopSqlTemplatesDetailsRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling exportTopSqlTemplatesDetails.');
            }
            if (startAt === null || startAt === undefined) {
                throw new RequiredError('startAt','Required parameter startAt was null or undefined when calling exportTopSqlTemplatesDetails.');
            }
            if (startAt !== null && startAt !== undefined) {
                localVarQueryParameter['start_at'] = startAt;
            }
            if (endAt === null || endAt === undefined) {
                throw new RequiredError('endAt','Required parameter endAt was null or undefined when calling exportTopSqlTemplatesDetails.');
            }
            if (endAt !== null && endAt !== undefined) {
                localVarQueryParameter['end_at'] = endAt;
            }
            if (datastoreType === null || datastoreType === undefined) {
                throw new RequiredError('datastoreType','Required parameter datastoreType was null or undefined when calling exportTopSqlTemplatesDetails.');
            }
            if (datastoreType !== null && datastoreType !== undefined) {
                localVarQueryParameter['datastore_type'] = datastoreType;
            }
            if (nodeId !== null && nodeId !== undefined) {
                localVarQueryParameter['node_id'] = nodeId;
            }
            if (sort !== null && sort !== undefined) {
                localVarQueryParameter['sort'] = sort;
            }
            if (asc !== null && asc !== undefined) {
                localVarQueryParameter['asc'] = asc;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * TopSQL开关打开后，导出SQL执行耗时区间数据。该功能仅支持付费实例。查询时间间隔最长六小时。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        exportTopSqlTrendDetails(exportTopSqlTrendDetailsRequest?: ExportTopSqlTrendDetailsRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/{instance_id}/top-sql-trend",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let startAt;
            
            let endAt;
            
            let datastoreType;
            
            let nodeId;
            
            let xLanguage;

            if (exportTopSqlTrendDetailsRequest !== null && exportTopSqlTrendDetailsRequest !== undefined) {
                if (exportTopSqlTrendDetailsRequest instanceof ExportTopSqlTrendDetailsRequest) {
                    instanceId = exportTopSqlTrendDetailsRequest.instanceId;
                    startAt = exportTopSqlTrendDetailsRequest.startAt;
                    endAt = exportTopSqlTrendDetailsRequest.endAt;
                    datastoreType = exportTopSqlTrendDetailsRequest.datastoreType;
                    nodeId = exportTopSqlTrendDetailsRequest.nodeId;
                    xLanguage = exportTopSqlTrendDetailsRequest.xLanguage;
                } else {
                    instanceId = exportTopSqlTrendDetailsRequest['instance_id'];
                    startAt = exportTopSqlTrendDetailsRequest['start_at'];
                    endAt = exportTopSqlTrendDetailsRequest['end_at'];
                    datastoreType = exportTopSqlTrendDetailsRequest['datastore_type'];
                    nodeId = exportTopSqlTrendDetailsRequest['node_id'];
                    xLanguage = exportTopSqlTrendDetailsRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling exportTopSqlTrendDetails.');
            }
            if (startAt === null || startAt === undefined) {
                throw new RequiredError('startAt','Required parameter startAt was null or undefined when calling exportTopSqlTrendDetails.');
            }
            if (startAt !== null && startAt !== undefined) {
                localVarQueryParameter['start_at'] = startAt;
            }
            if (endAt === null || endAt === undefined) {
                throw new RequiredError('endAt','Required parameter endAt was null or undefined when calling exportTopSqlTrendDetails.');
            }
            if (endAt !== null && endAt !== undefined) {
                localVarQueryParameter['end_at'] = endAt;
            }
            if (datastoreType === null || datastoreType === undefined) {
                throw new RequiredError('datastoreType','Required parameter datastoreType was null or undefined when calling exportTopSqlTrendDetails.');
            }
            if (datastoreType !== null && datastoreType !== undefined) {
                localVarQueryParameter['datastore_type'] = datastoreType;
            }
            if (nodeId !== null && nodeId !== undefined) {
                localVarQueryParameter['node_id'] = nodeId;
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取DAS云DBA实例列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listCloudDbaInstances(listCloudDbaInstancesRequest?: ListCloudDbaInstancesRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let datastoreType;
            
            let offset;
            
            let limit;
            
            let xLanguage;

            if (listCloudDbaInstancesRequest !== null && listCloudDbaInstancesRequest !== undefined) {
                if (listCloudDbaInstancesRequest instanceof ListCloudDbaInstancesRequest) {
                    datastoreType = listCloudDbaInstancesRequest.datastoreType;
                    offset = listCloudDbaInstancesRequest.offset;
                    limit = listCloudDbaInstancesRequest.limit;
                    xLanguage = listCloudDbaInstancesRequest.xLanguage;
                } else {
                    datastoreType = listCloudDbaInstancesRequest['datastore_type'];
                    offset = listCloudDbaInstancesRequest['offset'];
                    limit = listCloudDbaInstancesRequest['limit'];
                    xLanguage = listCloudDbaInstancesRequest['X-Language'];
                }
            }

        
            if (datastoreType === null || datastoreType === undefined) {
                throw new RequiredError('datastoreType','Required parameter datastoreType was null or undefined when calling listCloudDbaInstances.');
            }
            if (datastoreType !== null && datastoreType !== undefined) {
                localVarQueryParameter['datastore_type'] = datastoreType;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询注册在DAS里的数据库用户列表，后续调用其他接口时(如查询实例会话列表接口)需要用到此接口返回的db_user_id。此接口不会返回数据库实例上的数据库用户对象。
         * 目前仅支持MySQL实例。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listDbUsers(listDbUsersRequest?: ListDbUsersRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/{instance_id}/db-users",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let offset;
            
            let limit;
            
            let dbUserId;
            
            let dbUsername;
            
            let xLanguage;

            if (listDbUsersRequest !== null && listDbUsersRequest !== undefined) {
                if (listDbUsersRequest instanceof ListDbUsersRequest) {
                    instanceId = listDbUsersRequest.instanceId;
                    offset = listDbUsersRequest.offset;
                    limit = listDbUsersRequest.limit;
                    dbUserId = listDbUsersRequest.dbUserId;
                    dbUsername = listDbUsersRequest.dbUsername;
                    xLanguage = listDbUsersRequest.xLanguage;
                } else {
                    instanceId = listDbUsersRequest['instance_id'];
                    offset = listDbUsersRequest['offset'];
                    limit = listDbUsersRequest['limit'];
                    dbUserId = listDbUsersRequest['db_user_id'];
                    dbUsername = listDbUsersRequest['db_username'];
                    xLanguage = listDbUsersRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listDbUsers.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (dbUserId !== null && dbUserId !== undefined) {
                localVarQueryParameter['db_user_id'] = dbUserId;
            }
            if (dbUsername !== null && dbUsername !== undefined) {
                localVarQueryParameter['db_username'] = dbUsername;
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 全量SQL开关打开后，查询SQL洞察任务列表。该功能仅支持付费实例。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listFullSqlTasks(listFullSqlTasksRequest?: ListFullSqlTasksRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/{instance_id}/full-sql-tasks",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let rangeLeft;
            
            let rangeRight;
            
            let createAtLeft;
            
            let createAtRight;
            
            let user;
            
            let keyword;
            
            let dbName;
            
            let operation;
            
            let threadId;
            
            let trxId;
            
            let status;
            
            let sqlTemplateId;
            
            let sortField;
            
            let asc;
            
            let page;
            
            let limit;
            
            let xLanguage;

            if (listFullSqlTasksRequest !== null && listFullSqlTasksRequest !== undefined) {
                if (listFullSqlTasksRequest instanceof ListFullSqlTasksRequest) {
                    instanceId = listFullSqlTasksRequest.instanceId;
                    rangeLeft = listFullSqlTasksRequest.rangeLeft;
                    rangeRight = listFullSqlTasksRequest.rangeRight;
                    createAtLeft = listFullSqlTasksRequest.createAtLeft;
                    createAtRight = listFullSqlTasksRequest.createAtRight;
                    user = listFullSqlTasksRequest.user;
                    keyword = listFullSqlTasksRequest.keyword;
                    dbName = listFullSqlTasksRequest.dbName;
                    operation = listFullSqlTasksRequest.operation;
                    threadId = listFullSqlTasksRequest.threadId;
                    trxId = listFullSqlTasksRequest.trxId;
                    status = listFullSqlTasksRequest.status;
                    sqlTemplateId = listFullSqlTasksRequest.sqlTemplateId;
                    sortField = listFullSqlTasksRequest.sortField;
                    asc = listFullSqlTasksRequest.asc;
                    page = listFullSqlTasksRequest.page;
                    limit = listFullSqlTasksRequest.limit;
                    xLanguage = listFullSqlTasksRequest.xLanguage;
                } else {
                    instanceId = listFullSqlTasksRequest['instance_id'];
                    rangeLeft = listFullSqlTasksRequest['range_left'];
                    rangeRight = listFullSqlTasksRequest['range_right'];
                    createAtLeft = listFullSqlTasksRequest['create_at_left'];
                    createAtRight = listFullSqlTasksRequest['create_at_right'];
                    user = listFullSqlTasksRequest['user'];
                    keyword = listFullSqlTasksRequest['keyword'];
                    dbName = listFullSqlTasksRequest['db_name'];
                    operation = listFullSqlTasksRequest['operation'];
                    threadId = listFullSqlTasksRequest['thread_id'];
                    trxId = listFullSqlTasksRequest['trx_id'];
                    status = listFullSqlTasksRequest['status'];
                    sqlTemplateId = listFullSqlTasksRequest['sql_template_id'];
                    sortField = listFullSqlTasksRequest['sort_field'];
                    asc = listFullSqlTasksRequest['asc'];
                    page = listFullSqlTasksRequest['page'];
                    limit = listFullSqlTasksRequest['limit'];
                    xLanguage = listFullSqlTasksRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listFullSqlTasks.');
            }
            if (rangeLeft !== null && rangeLeft !== undefined) {
                localVarQueryParameter['range_left'] = rangeLeft;
            }
            if (rangeRight !== null && rangeRight !== undefined) {
                localVarQueryParameter['range_right'] = rangeRight;
            }
            if (createAtLeft !== null && createAtLeft !== undefined) {
                localVarQueryParameter['create_at_left'] = createAtLeft;
            }
            if (createAtRight !== null && createAtRight !== undefined) {
                localVarQueryParameter['create_at_right'] = createAtRight;
            }
            if (user !== null && user !== undefined) {
                localVarQueryParameter['user'] = user;
            }
            if (keyword !== null && keyword !== undefined) {
                localVarQueryParameter['keyword'] = keyword;
            }
            if (dbName !== null && dbName !== undefined) {
                localVarQueryParameter['db_name'] = dbName;
            }
            if (operation !== null && operation !== undefined) {
                localVarQueryParameter['operation'] = operation;
            }
            if (threadId !== null && threadId !== undefined) {
                localVarQueryParameter['thread_id'] = threadId;
            }
            if (trxId !== null && trxId !== undefined) {
                localVarQueryParameter['trx_id'] = trxId;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (sqlTemplateId !== null && sqlTemplateId !== undefined) {
                localVarQueryParameter['sql_template_id'] = sqlTemplateId;
            }
            if (sortField !== null && sortField !== undefined) {
                localVarQueryParameter['sort_field'] = sortField;
            }
            if (asc !== null && asc !== undefined) {
                localVarQueryParameter['asc'] = asc;
            }
            if (page !== null && page !== undefined) {
                localVarQueryParameter['page'] = page;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询实例健康诊断报告列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listHealthReportTask(listHealthReportTaskRequest?: ListHealthReportTaskRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/{instance_id}/get-instance-health-report-task-list",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let startAt;
            
            let endAt;
            
            let offset;
            
            let limit;
            
            let xLanguage;

            if (listHealthReportTaskRequest !== null && listHealthReportTaskRequest !== undefined) {
                if (listHealthReportTaskRequest instanceof ListHealthReportTaskRequest) {
                    instanceId = listHealthReportTaskRequest.instanceId;
                    startAt = listHealthReportTaskRequest.startAt;
                    endAt = listHealthReportTaskRequest.endAt;
                    offset = listHealthReportTaskRequest.offset;
                    limit = listHealthReportTaskRequest.limit;
                    xLanguage = listHealthReportTaskRequest.xLanguage;
                } else {
                    instanceId = listHealthReportTaskRequest['instance_id'];
                    startAt = listHealthReportTaskRequest['start_at'];
                    endAt = listHealthReportTaskRequest['end_at'];
                    offset = listHealthReportTaskRequest['offset'];
                    limit = listHealthReportTaskRequest['limit'];
                    xLanguage = listHealthReportTaskRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listHealthReportTask.');
            }
            if (startAt === null || startAt === undefined) {
                throw new RequiredError('startAt','Required parameter startAt was null or undefined when calling listHealthReportTask.');
            }
            if (startAt !== null && startAt !== undefined) {
                localVarQueryParameter['start_at'] = startAt;
            }
            if (endAt === null || endAt === undefined) {
                throw new RequiredError('endAt','Required parameter endAt was null or undefined when calling listHealthReportTask.');
            }
            if (endAt !== null && endAt !== undefined) {
                localVarQueryParameter['end_at'] = endAt;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询InnoDB锁等待列表。
         * 目前仅支持MySQL实例。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listInnodbLocks(listInnodbLocksRequest?: ListInnodbLocksRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/{instance_id}/innodb-locks",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let dbUserId;
            
            let xLanguage;

            if (listInnodbLocksRequest !== null && listInnodbLocksRequest !== undefined) {
                if (listInnodbLocksRequest instanceof ListInnodbLocksRequest) {
                    instanceId = listInnodbLocksRequest.instanceId;
                    dbUserId = listInnodbLocksRequest.dbUserId;
                    xLanguage = listInnodbLocksRequest.xLanguage;
                } else {
                    instanceId = listInnodbLocksRequest['instance_id'];
                    dbUserId = listInnodbLocksRequest['db_user_id'];
                    xLanguage = listInnodbLocksRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listInnodbLocks.');
            }
            if (dbUserId === null || dbUserId === undefined) {
                throw new RequiredError('dbUserId','Required parameter dbUserId was null or undefined when calling listInnodbLocks.');
            }
            if (dbUserId !== null && dbUserId !== undefined) {
                localVarQueryParameter['db_user_id'] = dbUserId;
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询实例分布情况
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listInstanceDistribution(listInstanceDistributionRequest?: ListInstanceDistributionRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/distribution",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let datastoreType;
            
            let xLanguage;

            if (listInstanceDistributionRequest !== null && listInstanceDistributionRequest !== undefined) {
                if (listInstanceDistributionRequest instanceof ListInstanceDistributionRequest) {
                    datastoreType = listInstanceDistributionRequest.datastoreType;
                    xLanguage = listInstanceDistributionRequest.xLanguage;
                } else {
                    datastoreType = listInstanceDistributionRequest['datastore_type'];
                    xLanguage = listInstanceDistributionRequest['X-Language'];
                }
            }

        
            if (datastoreType !== null && datastoreType !== undefined) {
                localVarQueryParameter['datastore_type'] = datastoreType;
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取多节点单指标数据
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listInstanceMultiNodesSingleMetric(listInstanceMultiNodesSingleMetricRequest?: ListInstanceMultiNodesSingleMetricRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/multi-nodes/single-metric",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xLanguage;

            if (listInstanceMultiNodesSingleMetricRequest !== null && listInstanceMultiNodesSingleMetricRequest !== undefined) {
                if (listInstanceMultiNodesSingleMetricRequest instanceof ListInstanceMultiNodesSingleMetricRequest) {
                    body = listInstanceMultiNodesSingleMetricRequest.body
                    xLanguage = listInstanceMultiNodesSingleMetricRequest.xLanguage;
                } else {
                    body = listInstanceMultiNodesSingleMetricRequest['body'];
                    xLanguage = listInstanceMultiNodesSingleMetricRequest['X-Language'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取单个实例节点信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listInstanceNodesInfo(listInstanceNodesInfoRequest?: ListInstanceNodesInfoRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instance/nodes-info",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let datastoreType;
            
            let xLanguage;

            if (listInstanceNodesInfoRequest !== null && listInstanceNodesInfoRequest !== undefined) {
                if (listInstanceNodesInfoRequest instanceof ListInstanceNodesInfoRequest) {
                    instanceId = listInstanceNodesInfoRequest.instanceId;
                    datastoreType = listInstanceNodesInfoRequest.datastoreType;
                    xLanguage = listInstanceNodesInfoRequest.xLanguage;
                } else {
                    instanceId = listInstanceNodesInfoRequest['instance_id'];
                    datastoreType = listInstanceNodesInfoRequest['datastore_type'];
                    xLanguage = listInstanceNodesInfoRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
                throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listInstanceNodesInfo.');
            }
            if (instanceId !== null && instanceId !== undefined) {
                localVarQueryParameter['instance_id'] = instanceId;
            }
            if (datastoreType === null || datastoreType === undefined) {
                throw new RequiredError('datastoreType','Required parameter datastoreType was null or undefined when calling listInstanceNodesInfo.');
            }
            if (datastoreType !== null && datastoreType !== undefined) {
                localVarQueryParameter['datastore_type'] = datastoreType;
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询实例的TOP慢SQL列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listInstanceTopSlowLog(listInstanceTopSlowLogRequest?: ListInstanceTopSlowLogRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/{instance_id}/top-slow-log",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let num;
            
            let startAt;
            
            let endAt;
            
            let instanceId;
            
            let xLanguage;

            if (listInstanceTopSlowLogRequest !== null && listInstanceTopSlowLogRequest !== undefined) {
                if (listInstanceTopSlowLogRequest instanceof ListInstanceTopSlowLogRequest) {
                    num = listInstanceTopSlowLogRequest.num;
                    startAt = listInstanceTopSlowLogRequest.startAt;
                    endAt = listInstanceTopSlowLogRequest.endAt;
                    instanceId = listInstanceTopSlowLogRequest.instanceId;
                    xLanguage = listInstanceTopSlowLogRequest.xLanguage;
                } else {
                    num = listInstanceTopSlowLogRequest['num'];
                    startAt = listInstanceTopSlowLogRequest['start_at'];
                    endAt = listInstanceTopSlowLogRequest['end_at'];
                    instanceId = listInstanceTopSlowLogRequest['instance_id'];
                    xLanguage = listInstanceTopSlowLogRequest['X-Language'];
                }
            }

        
            if (num === null || num === undefined) {
                throw new RequiredError('num','Required parameter num was null or undefined when calling listInstanceTopSlowLog.');
            }
            if (num !== null && num !== undefined) {
                localVarQueryParameter['num'] = num;
            }
            if (startAt === null || startAt === undefined) {
                throw new RequiredError('startAt','Required parameter startAt was null or undefined when calling listInstanceTopSlowLog.');
            }
            if (startAt !== null && startAt !== undefined) {
                localVarQueryParameter['start_at'] = startAt;
            }
            if (endAt === null || endAt === undefined) {
                throw new RequiredError('endAt','Required parameter endAt was null or undefined when calling listInstanceTopSlowLog.');
            }
            if (endAt !== null && endAt !== undefined) {
                localVarQueryParameter['end_at'] = endAt;
            }
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listInstanceTopSlowLog.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询元数据锁列表。
         * 目前仅支持MySQL实例。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listMetadataLocks(listMetadataLocksRequest?: ListMetadataLocksRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/{instance_id}/metadata-locks",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let dbUserId;
            
            let threadId;
            
            let database;
            
            let table;
            
            let xLanguage;

            if (listMetadataLocksRequest !== null && listMetadataLocksRequest !== undefined) {
                if (listMetadataLocksRequest instanceof ListMetadataLocksRequest) {
                    instanceId = listMetadataLocksRequest.instanceId;
                    dbUserId = listMetadataLocksRequest.dbUserId;
                    threadId = listMetadataLocksRequest.threadId;
                    database = listMetadataLocksRequest.database;
                    table = listMetadataLocksRequest.table;
                    xLanguage = listMetadataLocksRequest.xLanguage;
                } else {
                    instanceId = listMetadataLocksRequest['instance_id'];
                    dbUserId = listMetadataLocksRequest['db_user_id'];
                    threadId = listMetadataLocksRequest['thread_id'];
                    database = listMetadataLocksRequest['database'];
                    table = listMetadataLocksRequest['table'];
                    xLanguage = listMetadataLocksRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listMetadataLocks.');
            }
            if (dbUserId === null || dbUserId === undefined) {
                throw new RequiredError('dbUserId','Required parameter dbUserId was null or undefined when calling listMetadataLocks.');
            }
            if (dbUserId !== null && dbUserId !== undefined) {
                localVarQueryParameter['db_user_id'] = dbUserId;
            }
            if (threadId !== null && threadId !== undefined) {
                localVarQueryParameter['thread_id'] = threadId;
            }
            if (database !== null && database !== undefined) {
                localVarQueryParameter['database'] = database;
            }
            if (table !== null && table !== undefined) {
                localVarQueryParameter['table'] = table;
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 支持根据数据库、用户查询实例会话列表。
         * 目前仅支持MySQL实例。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listProcesses(listProcessesRequest?: ListProcessesRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/{instance_id}/processes",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let dbUserId;
            
            let user;
            
            let database;
            
            let nodeId;
            
            let offset;
            
            let limit;
            
            let xLanguage;

            if (listProcessesRequest !== null && listProcessesRequest !== undefined) {
                if (listProcessesRequest instanceof ListProcessesRequest) {
                    instanceId = listProcessesRequest.instanceId;
                    dbUserId = listProcessesRequest.dbUserId;
                    user = listProcessesRequest.user;
                    database = listProcessesRequest.database;
                    nodeId = listProcessesRequest.nodeId;
                    offset = listProcessesRequest.offset;
                    limit = listProcessesRequest.limit;
                    xLanguage = listProcessesRequest.xLanguage;
                } else {
                    instanceId = listProcessesRequest['instance_id'];
                    dbUserId = listProcessesRequest['db_user_id'];
                    user = listProcessesRequest['user'];
                    database = listProcessesRequest['database'];
                    nodeId = listProcessesRequest['node_id'];
                    offset = listProcessesRequest['offset'];
                    limit = listProcessesRequest['limit'];
                    xLanguage = listProcessesRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listProcesses.');
            }
            if (dbUserId === null || dbUserId === undefined) {
                throw new RequiredError('dbUserId','Required parameter dbUserId was null or undefined when calling listProcesses.');
            }
            if (dbUserId !== null && dbUserId !== undefined) {
                localVarQueryParameter['db_user_id'] = dbUserId;
            }
            if (user !== null && user !== undefined) {
                localVarQueryParameter['user'] = user;
            }
            if (database !== null && database !== undefined) {
                localVarQueryParameter['database'] = database;
            }
            if (nodeId !== null && nodeId !== undefined) {
                localVarQueryParameter['node_id'] = nodeId;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询资源风险实例风险项
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listRiskItems(listRiskItemsRequest?: ListRiskItemsRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/get-risk-items",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let datastoreType;
            
            let xLanguage;

            if (listRiskItemsRequest !== null && listRiskItemsRequest !== undefined) {
                if (listRiskItemsRequest instanceof ListRiskItemsRequest) {
                    datastoreType = listRiskItemsRequest.datastoreType;
                    xLanguage = listRiskItemsRequest.xLanguage;
                } else {
                    datastoreType = listRiskItemsRequest['datastore_type'];
                    xLanguage = listRiskItemsRequest['X-Language'];
                }
            }

        
            if (datastoreType === null || datastoreType === undefined) {
                throw new RequiredError('datastoreType','Required parameter datastoreType was null or undefined when calling listRiskItems.');
            }
            if (datastoreType !== null && datastoreType !== undefined) {
                localVarQueryParameter['datastore_type'] = datastoreType;
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询资源风险实例风险趋势
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listRiskTrend(listRiskTrendRequest?: ListRiskTrendRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/risk-trend",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let datastoreType;
            
            let startAt;
            
            let endAt;
            
            let metricCode;
            
            let xLanguage;

            if (listRiskTrendRequest !== null && listRiskTrendRequest !== undefined) {
                if (listRiskTrendRequest instanceof ListRiskTrendRequest) {
                    datastoreType = listRiskTrendRequest.datastoreType;
                    startAt = listRiskTrendRequest.startAt;
                    endAt = listRiskTrendRequest.endAt;
                    metricCode = listRiskTrendRequest.metricCode;
                    xLanguage = listRiskTrendRequest.xLanguage;
                } else {
                    datastoreType = listRiskTrendRequest['datastore_type'];
                    startAt = listRiskTrendRequest['start_at'];
                    endAt = listRiskTrendRequest['end_at'];
                    metricCode = listRiskTrendRequest['metric_code'];
                    xLanguage = listRiskTrendRequest['X-Language'];
                }
            }

        
            if (datastoreType === null || datastoreType === undefined) {
                throw new RequiredError('datastoreType','Required parameter datastoreType was null or undefined when calling listRiskTrend.');
            }
            if (datastoreType !== null && datastoreType !== undefined) {
                localVarQueryParameter['datastore_type'] = datastoreType;
            }
            if (startAt === null || startAt === undefined) {
                throw new RequiredError('startAt','Required parameter startAt was null or undefined when calling listRiskTrend.');
            }
            if (startAt !== null && startAt !== undefined) {
                localVarQueryParameter['start_at'] = startAt;
            }
            if (endAt === null || endAt === undefined) {
                throw new RequiredError('endAt','Required parameter endAt was null or undefined when calling listRiskTrend.');
            }
            if (endAt !== null && endAt !== undefined) {
                localVarQueryParameter['end_at'] = endAt;
            }
            if (metricCode === null || metricCode === undefined) {
                throw new RequiredError('metricCode','Required parameter metricCode was null or undefined when calling listRiskTrend.');
            }
            if (metricCode !== null && metricCode !== undefined) {
                localVarQueryParameter['metric_code'] = metricCode;
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取空间分析数据列表。实例级别数据来源于文件系统，库级别和表级别数据来源于information_schema.tables表。空间&amp;元数据分析最多分析10000张表，若缺少库表空间数据，可能是因为数据库实例表个数过多或者账号未保存密码。如果为保存密码，请使用用户管理接口或页面录入数据库账号。 支持MySQL、GaussDB(for MySQL)和SQLServer引擎。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listSpaceAnalysis(listSpaceAnalysisRequest?: ListSpaceAnalysisRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/{instance_id}/space-analysis",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let objectType;
            
            let datastoreType;
            
            let xLanguage;
            
            let databaseId;
            
            let offset;
            
            let limit;
            
            let showInstanceInfo;

            if (listSpaceAnalysisRequest !== null && listSpaceAnalysisRequest !== undefined) {
                if (listSpaceAnalysisRequest instanceof ListSpaceAnalysisRequest) {
                    instanceId = listSpaceAnalysisRequest.instanceId;
                    objectType = listSpaceAnalysisRequest.objectType;
                    datastoreType = listSpaceAnalysisRequest.datastoreType;
                    xLanguage = listSpaceAnalysisRequest.xLanguage;
                    databaseId = listSpaceAnalysisRequest.databaseId;
                    offset = listSpaceAnalysisRequest.offset;
                    limit = listSpaceAnalysisRequest.limit;
                    showInstanceInfo = listSpaceAnalysisRequest.showInstanceInfo;
                } else {
                    instanceId = listSpaceAnalysisRequest['instance_id'];
                    objectType = listSpaceAnalysisRequest['object_type'];
                    datastoreType = listSpaceAnalysisRequest['datastore_type'];
                    xLanguage = listSpaceAnalysisRequest['X-Language'];
                    databaseId = listSpaceAnalysisRequest['database_id'];
                    offset = listSpaceAnalysisRequest['offset'];
                    limit = listSpaceAnalysisRequest['limit'];
                    showInstanceInfo = listSpaceAnalysisRequest['show_instance_info'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listSpaceAnalysis.');
            }
            if (objectType === null || objectType === undefined) {
                throw new RequiredError('objectType','Required parameter objectType was null or undefined when calling listSpaceAnalysis.');
            }
            if (objectType !== null && objectType !== undefined) {
                localVarQueryParameter['object_type'] = objectType;
            }
            if (datastoreType === null || datastoreType === undefined) {
                throw new RequiredError('datastoreType','Required parameter datastoreType was null or undefined when calling listSpaceAnalysis.');
            }
            if (datastoreType !== null && datastoreType !== undefined) {
                localVarQueryParameter['datastore_type'] = datastoreType;
            }
            if (databaseId !== null && databaseId !== undefined) {
                localVarQueryParameter['database_id'] = databaseId;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (showInstanceInfo !== null && showInstanceInfo !== undefined) {
                localVarQueryParameter['show_instance_info'] = showInstanceInfo;
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询SQL限流规则。目前仅支持MySQL和PostgreSQL数据库。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listSqlLimitRules(listSqlLimitRulesRequest?: ListSqlLimitRulesRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/{instance_id}/sql-limit/rules",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let datastoreType;
            
            let offset;
            
            let limit;
            
            let databaseName;
            
            let xLanguage;

            if (listSqlLimitRulesRequest !== null && listSqlLimitRulesRequest !== undefined) {
                if (listSqlLimitRulesRequest instanceof ListSqlLimitRulesRequest) {
                    instanceId = listSqlLimitRulesRequest.instanceId;
                    datastoreType = listSqlLimitRulesRequest.datastoreType;
                    offset = listSqlLimitRulesRequest.offset;
                    limit = listSqlLimitRulesRequest.limit;
                    databaseName = listSqlLimitRulesRequest.databaseName;
                    xLanguage = listSqlLimitRulesRequest.xLanguage;
                } else {
                    instanceId = listSqlLimitRulesRequest['instance_id'];
                    datastoreType = listSqlLimitRulesRequest['datastore_type'];
                    offset = listSqlLimitRulesRequest['offset'];
                    limit = listSqlLimitRulesRequest['limit'];
                    databaseName = listSqlLimitRulesRequest['database_name'];
                    xLanguage = listSqlLimitRulesRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listSqlLimitRules.');
            }
            if (datastoreType === null || datastoreType === undefined) {
                throw new RequiredError('datastoreType','Required parameter datastoreType was null or undefined when calling listSqlLimitRules.');
            }
            if (datastoreType !== null && datastoreType !== undefined) {
                localVarQueryParameter['datastore_type'] = datastoreType;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (databaseName !== null && databaseName !== undefined) {
                localVarQueryParameter['database_name'] = databaseName;
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询TOP慢SQL列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listTopSlowLog(listTopSlowLogRequest?: ListTopSlowLogRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/top-slow-log",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let num;
            
            let startAt;
            
            let endAt;
            
            let xLanguage;

            if (listTopSlowLogRequest !== null && listTopSlowLogRequest !== undefined) {
                if (listTopSlowLogRequest instanceof ListTopSlowLogRequest) {
                    num = listTopSlowLogRequest.num;
                    startAt = listTopSlowLogRequest.startAt;
                    endAt = listTopSlowLogRequest.endAt;
                    xLanguage = listTopSlowLogRequest.xLanguage;
                } else {
                    num = listTopSlowLogRequest['num'];
                    startAt = listTopSlowLogRequest['start_at'];
                    endAt = listTopSlowLogRequest['end_at'];
                    xLanguage = listTopSlowLogRequest['X-Language'];
                }
            }

        
            if (num === null || num === undefined) {
                throw new RequiredError('num','Required parameter num was null or undefined when calling listTopSlowLog.');
            }
            if (num !== null && num !== undefined) {
                localVarQueryParameter['num'] = num;
            }
            if (startAt === null || startAt === undefined) {
                throw new RequiredError('startAt','Required parameter startAt was null or undefined when calling listTopSlowLog.');
            }
            if (startAt !== null && startAt !== undefined) {
                localVarQueryParameter['start_at'] = startAt;
            }
            if (endAt === null || endAt === undefined) {
                throw new RequiredError('endAt','Required parameter endAt was null or undefined when calling listTopSlowLog.');
            }
            if (endAt !== null && endAt !== undefined) {
                localVarQueryParameter['end_at'] = endAt;
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询历史事务列表。
         * 目前仅支持MySQL实例，仅支持查看最近7天的历史事务。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listTransactions(listTransactionsRequest?: ListTransactionsRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/{instance_id}/transaction",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let datastoreType;
            
            let startAt;
            
            let endAt;
            
            let xLanguage;
            
            let pageNum;
            
            let pageSize;
            
            let order;
            
            let orderBy;
            
            let lastSecMin;
            
            let lastSecMax;

            if (listTransactionsRequest !== null && listTransactionsRequest !== undefined) {
                if (listTransactionsRequest instanceof ListTransactionsRequest) {
                    instanceId = listTransactionsRequest.instanceId;
                    datastoreType = listTransactionsRequest.datastoreType;
                    startAt = listTransactionsRequest.startAt;
                    endAt = listTransactionsRequest.endAt;
                    xLanguage = listTransactionsRequest.xLanguage;
                    pageNum = listTransactionsRequest.pageNum;
                    pageSize = listTransactionsRequest.pageSize;
                    order = listTransactionsRequest.order;
                    orderBy = listTransactionsRequest.orderBy;
                    lastSecMin = listTransactionsRequest.lastSecMin;
                    lastSecMax = listTransactionsRequest.lastSecMax;
                } else {
                    instanceId = listTransactionsRequest['instance_id'];
                    datastoreType = listTransactionsRequest['datastore_type'];
                    startAt = listTransactionsRequest['start_at'];
                    endAt = listTransactionsRequest['end_at'];
                    xLanguage = listTransactionsRequest['X-Language'];
                    pageNum = listTransactionsRequest['page_num'];
                    pageSize = listTransactionsRequest['page_size'];
                    order = listTransactionsRequest['order'];
                    orderBy = listTransactionsRequest['order_by'];
                    lastSecMin = listTransactionsRequest['last_sec_min'];
                    lastSecMax = listTransactionsRequest['last_sec_max'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listTransactions.');
            }
            if (datastoreType === null || datastoreType === undefined) {
                throw new RequiredError('datastoreType','Required parameter datastoreType was null or undefined when calling listTransactions.');
            }
            if (datastoreType !== null && datastoreType !== undefined) {
                localVarQueryParameter['datastore_type'] = datastoreType;
            }
            if (startAt === null || startAt === undefined) {
                throw new RequiredError('startAt','Required parameter startAt was null or undefined when calling listTransactions.');
            }
            if (startAt !== null && startAt !== undefined) {
                localVarQueryParameter['start_at'] = startAt;
            }
            if (endAt === null || endAt === undefined) {
                throw new RequiredError('endAt','Required parameter endAt was null or undefined when calling listTransactions.');
            }
            if (endAt !== null && endAt !== undefined) {
                localVarQueryParameter['end_at'] = endAt;
            }
            if (pageNum !== null && pageNum !== undefined) {
                localVarQueryParameter['page_num'] = pageNum;
            }
            if (pageSize !== null && pageSize !== undefined) {
                localVarQueryParameter['page_size'] = pageSize;
            }
            if (order !== null && order !== undefined) {
                localVarQueryParameter['order'] = order;
            }
            if (orderBy !== null && orderBy !== undefined) {
                localVarQueryParameter['order_by'] = orderBy;
            }
            if (lastSecMin !== null && lastSecMin !== undefined) {
                localVarQueryParameter['last_sec_min'] = lastSecMin;
            }
            if (lastSecMax !== null && lastSecMax !== undefined) {
                localVarQueryParameter['last_sec_max'] = lastSecMax;
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据原始SQL生成SQL限流关键字，目前支持MySQL、MariaDB、GaussDB(for MySQL)三种引擎。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        parseSqlLimitRules(parseSqlLimitRulesRequest?: ParseSqlLimitRulesRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/{instance_id}/sql-limit/parse",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let xLanguage;

            if (parseSqlLimitRulesRequest !== null && parseSqlLimitRulesRequest !== undefined) {
                if (parseSqlLimitRulesRequest instanceof ParseSqlLimitRulesRequest) {
                    instanceId = parseSqlLimitRulesRequest.instanceId;
                    xLanguage = parseSqlLimitRulesRequest.xLanguage;
                    body = parseSqlLimitRulesRequest.body
                } else {
                    instanceId = parseSqlLimitRulesRequest['instance_id'];
                    xLanguage = parseSqlLimitRulesRequest['X-Language'];
                    body = parseSqlLimitRulesRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling parseSqlLimitRules.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 此接口是将数据库用户和密码注册进DAS系统，同时会返回一个数据库用户ID ，后续调用其他接口时（如查询实例会话列表接口）需要用到此数据库用户ID。密码为加密存储，且仅用于DAS API相关功能。此接口不会在数据库实例上创建数据库用户对象。请确保输入的用户名和密码是已经存在并且是正确的。
         * 目前仅支持MySQL实例。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        registerDbUser(registerDbUserRequest?: RegisterDbUserRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/{instance_id}/db-users",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let xLanguage;

            if (registerDbUserRequest !== null && registerDbUserRequest !== undefined) {
                if (registerDbUserRequest instanceof RegisterDbUserRequest) {
                    instanceId = registerDbUserRequest.instanceId;
                    body = registerDbUserRequest.body
                    xLanguage = registerDbUserRequest.xLanguage;
                } else {
                    instanceId = registerDbUserRequest['instance_id'];
                    body = registerDbUserRequest['body'];
                    xLanguage = registerDbUserRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling registerDbUser.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 设置指标阈值
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        setThresholdForMetric(setThresholdForMetricRequest?: SetThresholdForMetricRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/set-metric-threshold",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xLanguage;

            if (setThresholdForMetricRequest !== null && setThresholdForMetricRequest !== undefined) {
                if (setThresholdForMetricRequest instanceof SetThresholdForMetricRequest) {
                    body = setThresholdForMetricRequest.body
                    xLanguage = setThresholdForMetricRequest.xLanguage;
                } else {
                    body = setThresholdForMetricRequest['body'];
                    xLanguage = setThresholdForMetricRequest['X-Language'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询注册在DAS里的数据库用户信息。此接口不能查询数据库实例上的数据库用户对象。
         * 目前仅支持MySQL实例。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showDbUser(showDbUserRequest?: ShowDbUserRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/{instance_id}/db-users/{db_user_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let dbUserId;
            
            let xLanguage;

            if (showDbUserRequest !== null && showDbUserRequest !== undefined) {
                if (showDbUserRequest instanceof ShowDbUserRequest) {
                    instanceId = showDbUserRequest.instanceId;
                    dbUserId = showDbUserRequest.dbUserId;
                    xLanguage = showDbUserRequest.xLanguage;
                } else {
                    instanceId = showDbUserRequest['instance_id'];
                    dbUserId = showDbUserRequest['db_user_id'];
                    xLanguage = showDbUserRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showDbUser.');
            }
            if (dbUserId === null || dbUserId === undefined) {
            throw new RequiredError('dbUserId','Required parameter dbUserId was null or undefined when calling showDbUser.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.pathParams = { 'instance_id': instanceId,'db_user_id': dbUserId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取实例健康诊断报告内容。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showInstanceHealthReport(showInstanceHealthReportRequest?: ShowInstanceHealthReportRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/{instance_id}/get-instance-health-report",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let taskId;
            
            let xLanguage;

            if (showInstanceHealthReportRequest !== null && showInstanceHealthReportRequest !== undefined) {
                if (showInstanceHealthReportRequest instanceof ShowInstanceHealthReportRequest) {
                    instanceId = showInstanceHealthReportRequest.instanceId;
                    taskId = showInstanceHealthReportRequest.taskId;
                    xLanguage = showInstanceHealthReportRequest.xLanguage;
                } else {
                    instanceId = showInstanceHealthReportRequest['instance_id'];
                    taskId = showInstanceHealthReportRequest['task_id'];
                    xLanguage = showInstanceHealthReportRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showInstanceHealthReport.');
            }
            if (taskId === null || taskId === undefined) {
                throw new RequiredError('taskId','Required parameter taskId was null or undefined when calling showInstanceHealthReport.');
            }
            if (taskId !== null && taskId !== undefined) {
                localVarQueryParameter['task_id'] = taskId;
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 多节点单指标支持指标信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showMetricNamesSupport(showMetricNamesSupportRequest?: ShowMetricNamesSupportRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/metric-names/support",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let xLanguage;

            if (showMetricNamesSupportRequest !== null && showMetricNamesSupportRequest !== undefined) {
                if (showMetricNamesSupportRequest instanceof ShowMetricNamesSupportRequest) {
                    xLanguage = showMetricNamesSupportRequest.xLanguage;
                } else {
                    xLanguage = showMetricNamesSupportRequest['X-Language'];
                }
            }

        
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询云DBA配额
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showQuotas(showQuotasRequest?: ShowQuotasRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/quotas",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let xLanguage;

            if (showQuotasRequest !== null && showQuotasRequest !== undefined) {
                if (showQuotasRequest instanceof ShowQuotasRequest) {
                    xLanguage = showQuotasRequest.xLanguage;
                } else {
                    xLanguage = showQuotasRequest['X-Language'];
                }
            }

        
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询SQL执行计划。
         * 目前仅支持MySQL实例。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showSqlExecutionPlan(showSqlExecutionPlanRequest?: ShowSqlExecutionPlanRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/{instance_id}/sql/explain",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let dbUserId;
            
            let database;
            
            let sql;
            
            let xLanguage;

            if (showSqlExecutionPlanRequest !== null && showSqlExecutionPlanRequest !== undefined) {
                if (showSqlExecutionPlanRequest instanceof ShowSqlExecutionPlanRequest) {
                    instanceId = showSqlExecutionPlanRequest.instanceId;
                    dbUserId = showSqlExecutionPlanRequest.dbUserId;
                    database = showSqlExecutionPlanRequest.database;
                    sql = showSqlExecutionPlanRequest.sql;
                    xLanguage = showSqlExecutionPlanRequest.xLanguage;
                } else {
                    instanceId = showSqlExecutionPlanRequest['instance_id'];
                    dbUserId = showSqlExecutionPlanRequest['db_user_id'];
                    database = showSqlExecutionPlanRequest['database'];
                    sql = showSqlExecutionPlanRequest['sql'];
                    xLanguage = showSqlExecutionPlanRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showSqlExecutionPlan.');
            }
            if (dbUserId === null || dbUserId === undefined) {
                throw new RequiredError('dbUserId','Required parameter dbUserId was null or undefined when calling showSqlExecutionPlan.');
            }
            if (dbUserId !== null && dbUserId !== undefined) {
                localVarQueryParameter['db_user_id'] = dbUserId;
            }
            if (database === null || database === undefined) {
                throw new RequiredError('database','Required parameter database was null or undefined when calling showSqlExecutionPlan.');
            }
            if (database !== null && database !== undefined) {
                localVarQueryParameter['database'] = database;
            }
            if (sql === null || sql === undefined) {
                throw new RequiredError('sql','Required parameter sql was null or undefined when calling showSqlExecutionPlan.');
            }
            if (sql !== null && sql !== undefined) {
                localVarQueryParameter['sql'] = sql;
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询SQL执行计划。
         * 目前仅支持MySQL实例。
         * 补充GET请求，处理超长SQL
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showSqlExplain(showSqlExplainRequest?: ShowSqlExplainRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/{instance_id}/sql/explain",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let xLanguage;

            if (showSqlExplainRequest !== null && showSqlExplainRequest !== undefined) {
                if (showSqlExplainRequest instanceof ShowSqlExplainRequest) {
                    instanceId = showSqlExplainRequest.instanceId;
                    body = showSqlExplainRequest.body
                    xLanguage = showSqlExplainRequest.xLanguage;
                } else {
                    instanceId = showSqlExplainRequest['instance_id'];
                    body = showSqlExplainRequest['body'];
                    xLanguage = showSqlExplainRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showSqlExplain.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询指定ID的SQL限流任务信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showSqlLimitJobInfo(showSqlLimitJobInfoRequest?: ShowSqlLimitJobInfoRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/{instance_id}/sql-limit/job",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let jobId;
            
            let xLanguage;

            if (showSqlLimitJobInfoRequest !== null && showSqlLimitJobInfoRequest !== undefined) {
                if (showSqlLimitJobInfoRequest instanceof ShowSqlLimitJobInfoRequest) {
                    instanceId = showSqlLimitJobInfoRequest.instanceId;
                    jobId = showSqlLimitJobInfoRequest.jobId;
                    xLanguage = showSqlLimitJobInfoRequest.xLanguage;
                } else {
                    instanceId = showSqlLimitJobInfoRequest['instance_id'];
                    jobId = showSqlLimitJobInfoRequest['job_id'];
                    xLanguage = showSqlLimitJobInfoRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showSqlLimitJobInfo.');
            }
            if (jobId === null || jobId === undefined) {
                throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling showSqlLimitJobInfo.');
            }
            if (jobId !== null && jobId !== undefined) {
                localVarQueryParameter['job_id'] = jobId;
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询SQL限流的开关状态。目前仅支持MySQL实例
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showSqlLimitSwitchStatus(showSqlLimitSwitchStatusRequest?: ShowSqlLimitSwitchStatusRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/{instance_id}/sql-limit/switch",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let datastoreType;
            
            let xLanguage;

            if (showSqlLimitSwitchStatusRequest !== null && showSqlLimitSwitchStatusRequest !== undefined) {
                if (showSqlLimitSwitchStatusRequest instanceof ShowSqlLimitSwitchStatusRequest) {
                    instanceId = showSqlLimitSwitchStatusRequest.instanceId;
                    datastoreType = showSqlLimitSwitchStatusRequest.datastoreType;
                    xLanguage = showSqlLimitSwitchStatusRequest.xLanguage;
                } else {
                    instanceId = showSqlLimitSwitchStatusRequest['instance_id'];
                    datastoreType = showSqlLimitSwitchStatusRequest['datastore_type'];
                    xLanguage = showSqlLimitSwitchStatusRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showSqlLimitSwitchStatus.');
            }
            if (datastoreType === null || datastoreType === undefined) {
                throw new RequiredError('datastoreType','Required parameter datastoreType was null or undefined when calling showSqlLimitSwitchStatus.');
            }
            if (datastoreType !== null && datastoreType !== undefined) {
                localVarQueryParameter['datastore_type'] = datastoreType;
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询DAS收集全量SQL和慢SQL的开关状态。该功能仅支持付费实例。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showSqlSwitchStatus(showSqlSwitchStatusRequest?: ShowSqlSwitchStatusRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/{instance_id}/sql/switch",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let type;
            
            let datastoreType;
            
            let xLanguage;

            if (showSqlSwitchStatusRequest !== null && showSqlSwitchStatusRequest !== undefined) {
                if (showSqlSwitchStatusRequest instanceof ShowSqlSwitchStatusRequest) {
                    instanceId = showSqlSwitchStatusRequest.instanceId;
                    type = showSqlSwitchStatusRequest.type;
                    datastoreType = showSqlSwitchStatusRequest.datastoreType;
                    xLanguage = showSqlSwitchStatusRequest.xLanguage;
                } else {
                    instanceId = showSqlSwitchStatusRequest['instance_id'];
                    type = showSqlSwitchStatusRequest['type'];
                    datastoreType = showSqlSwitchStatusRequest['datastore_type'];
                    xLanguage = showSqlSwitchStatusRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showSqlSwitchStatus.');
            }
            if (type === null || type === undefined) {
                throw new RequiredError('type','Required parameter type was null or undefined when calling showSqlSwitchStatus.');
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }
            if (datastoreType === null || datastoreType === undefined) {
                throw new RequiredError('datastoreType','Required parameter datastoreType was null or undefined when calling showSqlSwitchStatus.');
            }
            if (datastoreType !== null && datastoreType !== undefined) {
                localVarQueryParameter['datastore_type'] = datastoreType;
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询历史事务开关。
         * 目前仅支持MySQL实例。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showTransactionSwitchStatus(showTransactionSwitchStatusRequest?: ShowTransactionSwitchStatusRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/{instance_id}/transaction/switch",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let datastoreType;
            
            let xLanguage;

            if (showTransactionSwitchStatusRequest !== null && showTransactionSwitchStatusRequest !== undefined) {
                if (showTransactionSwitchStatusRequest instanceof ShowTransactionSwitchStatusRequest) {
                    instanceId = showTransactionSwitchStatusRequest.instanceId;
                    datastoreType = showTransactionSwitchStatusRequest.datastoreType;
                    xLanguage = showTransactionSwitchStatusRequest.xLanguage;
                } else {
                    instanceId = showTransactionSwitchStatusRequest['instance_id'];
                    datastoreType = showTransactionSwitchStatusRequest['datastore_type'];
                    xLanguage = showTransactionSwitchStatusRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showTransactionSwitchStatus.');
            }
            if (datastoreType === null || datastoreType === undefined) {
                throw new RequiredError('datastoreType','Required parameter datastoreType was null or undefined when calling showTransactionSwitchStatus.');
            }
            if (datastoreType !== null && datastoreType !== undefined) {
                localVarQueryParameter['datastore_type'] = datastoreType;
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取诊断结果
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showTuning(showTuningRequest?: ShowTuningRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/connections/{connection_id}/tuning/{message_id}/show-tuning-result",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let messageId;
            
            let connectionId;
            
            let xLanguage;

            if (showTuningRequest !== null && showTuningRequest !== undefined) {
                if (showTuningRequest instanceof ShowTuningRequest) {
                    messageId = showTuningRequest.messageId;
                    connectionId = showTuningRequest.connectionId;
                    xLanguage = showTuningRequest.xLanguage;
                } else {
                    messageId = showTuningRequest['message_id'];
                    connectionId = showTuningRequest['connection_id'];
                    xLanguage = showTuningRequest['X-Language'];
                }
            }

        
            if (messageId === null || messageId === undefined) {
            throw new RequiredError('messageId','Required parameter messageId was null or undefined when calling showTuning.');
            }
            if (connectionId === null || connectionId === undefined) {
            throw new RequiredError('connectionId','Required parameter connectionId was null or undefined when calling showTuning.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.pathParams = { 'message_id': messageId,'connection_id': connectionId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 同步实例列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        synchronizeInstances(synchronizeInstancesRequest?: SynchronizeInstancesRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/synchronize-instance-list",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xLanguage;

            if (synchronizeInstancesRequest !== null && synchronizeInstancesRequest !== undefined) {
                if (synchronizeInstancesRequest instanceof SynchronizeInstancesRequest) {
                    body = synchronizeInstancesRequest.body
                    xLanguage = synchronizeInstancesRequest.xLanguage;
                } else {
                    body = synchronizeInstancesRequest['body'];
                    xLanguage = synchronizeInstancesRequest['X-Language'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改注册在DAS里的数据库用户名和密码。此接口不会修改数据库实例上的数据库用户对象的用户名和密码。请确保输入的用户名和密码是已经存在并且是正确的。
         * 目前仅支持MySQL实例。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateDbUser(updateDbUserRequest?: UpdateDbUserRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/instances/{instance_id}/db-users/{db_user_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let dbUserId;
            
            let xLanguage;

            if (updateDbUserRequest !== null && updateDbUserRequest !== undefined) {
                if (updateDbUserRequest instanceof UpdateDbUserRequest) {
                    instanceId = updateDbUserRequest.instanceId;
                    dbUserId = updateDbUserRequest.dbUserId;
                    body = updateDbUserRequest.body
                    xLanguage = updateDbUserRequest.xLanguage;
                } else {
                    instanceId = updateDbUserRequest['instance_id'];
                    dbUserId = updateDbUserRequest['db_user_id'];
                    body = updateDbUserRequest['body'];
                    xLanguage = updateDbUserRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updateDbUser.');
            }
            if (dbUserId === null || dbUserId === undefined) {
            throw new RequiredError('dbUserId','Required parameter dbUserId was null or undefined when calling updateDbUser.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId,'db_user_id': dbUserId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改SQL限流规则。目前仅支持PostgreSQL数据库
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateSqlLimitRules(updateSqlLimitRulesRequest?: UpdateSqlLimitRulesRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/instances/{instance_id}/sql-limit/rules",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let xLanguage;

            if (updateSqlLimitRulesRequest !== null && updateSqlLimitRulesRequest !== undefined) {
                if (updateSqlLimitRulesRequest instanceof UpdateSqlLimitRulesRequest) {
                    instanceId = updateSqlLimitRulesRequest.instanceId;
                    body = updateSqlLimitRulesRequest.body
                    xLanguage = updateSqlLimitRulesRequest.xLanguage;
                } else {
                    instanceId = updateSqlLimitRulesRequest['instance_id'];
                    body = updateSqlLimitRulesRequest['body'];
                    xLanguage = updateSqlLimitRulesRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updateSqlLimitRules.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
    }
};

function newClient(client: HcClient): DasClient {
    return new DasClient(client);
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