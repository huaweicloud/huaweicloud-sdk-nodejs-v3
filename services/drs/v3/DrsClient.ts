import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { AddDataTransformationReq } from './model/AddDataTransformationReq';
import { AlarmNotifyInfo } from './model/AlarmNotifyInfo';
import { ApiHttpNullResp } from './model/ApiHttpNullResp';
import { AzInfoResp } from './model/AzInfoResp';
import { BatchChangeDataRequest } from './model/BatchChangeDataRequest';
import { BatchChangeDataResponse } from './model/BatchChangeDataResponse';
import { BatchCheckJobsRequest } from './model/BatchCheckJobsRequest';
import { BatchCheckJobsResponse } from './model/BatchCheckJobsResponse';
import { BatchCheckResultsRequest } from './model/BatchCheckResultsRequest';
import { BatchCheckResultsResponse } from './model/BatchCheckResultsResponse';
import { BatchCreateJobReq } from './model/BatchCreateJobReq';
import { BatchCreateJobsRequest } from './model/BatchCreateJobsRequest';
import { BatchCreateJobsResponse } from './model/BatchCreateJobsResponse';
import { BatchDataTransformationReq } from './model/BatchDataTransformationReq';
import { BatchDeleteJobReq } from './model/BatchDeleteJobReq';
import { BatchDeleteJobsRequest } from './model/BatchDeleteJobsRequest';
import { BatchDeleteJobsResponse } from './model/BatchDeleteJobsResponse';
import { BatchImportSmnInfoReq } from './model/BatchImportSmnInfoReq';
import { BatchJobActionReq } from './model/BatchJobActionReq';
import { BatchLimitSpeedReq } from './model/BatchLimitSpeedReq';
import { BatchListJobDetailsRequest } from './model/BatchListJobDetailsRequest';
import { BatchListJobDetailsResponse } from './model/BatchListJobDetailsResponse';
import { BatchListJobStatusRequest } from './model/BatchListJobStatusRequest';
import { BatchListJobStatusResponse } from './model/BatchListJobStatusResponse';
import { BatchListProgressesRequest } from './model/BatchListProgressesRequest';
import { BatchListProgressesResponse } from './model/BatchListProgressesResponse';
import { BatchListRposAndRtosRequest } from './model/BatchListRposAndRtosRequest';
import { BatchListRposAndRtosResponse } from './model/BatchListRposAndRtosResponse';
import { BatchListStructDetailRequest } from './model/BatchListStructDetailRequest';
import { BatchListStructDetailResponse } from './model/BatchListStructDetailResponse';
import { BatchListStructProcessRequest } from './model/BatchListStructProcessRequest';
import { BatchListStructProcessResponse } from './model/BatchListStructProcessResponse';
import { BatchModifyJobReq } from './model/BatchModifyJobReq';
import { BatchModifyPwdReq } from './model/BatchModifyPwdReq';
import { BatchPauseJobReq } from './model/BatchPauseJobReq';
import { BatchPrecheckReq } from './model/BatchPrecheckReq';
import { BatchQueryJobReq } from './model/BatchQueryJobReq';
import { BatchQueryJobReqPage } from './model/BatchQueryJobReqPage';
import { BatchQueryParamReq } from './model/BatchQueryParamReq';
import { BatchQueryPrecheckResultReq } from './model/BatchQueryPrecheckResultReq';
import { BatchQueryProgressReq } from './model/BatchQueryProgressReq';
import { BatchQueryRpoAndRtoReq } from './model/BatchQueryRpoAndRtoReq';
import { BatchReplaceDefinerReq } from './model/BatchReplaceDefinerReq';
import { BatchResetPasswordRequest } from './model/BatchResetPasswordRequest';
import { BatchResetPasswordResponse } from './model/BatchResetPasswordResponse';
import { BatchRestoreTaskRequest } from './model/BatchRestoreTaskRequest';
import { BatchRestoreTaskResponse } from './model/BatchRestoreTaskResponse';
import { BatchRetryReq } from './model/BatchRetryReq';
import { BatchSetAlarmNotifyInfo } from './model/BatchSetAlarmNotifyInfo';
import { BatchSetDefinerRequest } from './model/BatchSetDefinerRequest';
import { BatchSetDefinerResponse } from './model/BatchSetDefinerResponse';
import { BatchSetObjectsRequest } from './model/BatchSetObjectsRequest';
import { BatchSetObjectsResponse } from './model/BatchSetObjectsResponse';
import { BatchSetPolicyRequest } from './model/BatchSetPolicyRequest';
import { BatchSetPolicyResponse } from './model/BatchSetPolicyResponse';
import { BatchSetSmnRequest } from './model/BatchSetSmnRequest';
import { BatchSetSmnResponse } from './model/BatchSetSmnResponse';
import { BatchSetSpeedRequest } from './model/BatchSetSpeedRequest';
import { BatchSetSpeedResponse } from './model/BatchSetSpeedResponse';
import { BatchSetupSyncPolicyReq } from './model/BatchSetupSyncPolicyReq';
import { BatchShowParamsRequest } from './model/BatchShowParamsRequest';
import { BatchShowParamsResponse } from './model/BatchShowParamsResponse';
import { BatchSpecialTestConnectionReq } from './model/BatchSpecialTestConnectionReq';
import { BatchStartJobReq } from './model/BatchStartJobReq';
import { BatchStartJobsRequest } from './model/BatchStartJobsRequest';
import { BatchStartJobsResponse } from './model/BatchStartJobsResponse';
import { BatchStopJobsRequest } from './model/BatchStopJobsRequest';
import { BatchStopJobsResponse } from './model/BatchStopJobsResponse';
import { BatchSwitchoverReq } from './model/BatchSwitchoverReq';
import { BatchSwitchoverRequest } from './model/BatchSwitchoverRequest';
import { BatchSwitchoverResponse } from './model/BatchSwitchoverResponse';
import { BatchTestConnectionReq } from './model/BatchTestConnectionReq';
import { BatchUpdateDatabaseObjectReq } from './model/BatchUpdateDatabaseObjectReq';
import { BatchUpdateJobRequest } from './model/BatchUpdateJobRequest';
import { BatchUpdateJobResponse } from './model/BatchUpdateJobResponse';
import { BatchUpdateSrcUserReq } from './model/BatchUpdateSrcUserReq';
import { BatchUpdateUserRequest } from './model/BatchUpdateUserRequest';
import { BatchUpdateUserResponse } from './model/BatchUpdateUserResponse';
import { BatchValidateClustersConnectionsRequest } from './model/BatchValidateClustersConnectionsRequest';
import { BatchValidateClustersConnectionsResponse } from './model/BatchValidateClustersConnectionsResponse';
import { BatchValidateConnectionsRequest } from './model/BatchValidateConnectionsRequest';
import { BatchValidateConnectionsResponse } from './model/BatchValidateConnectionsResponse';
import { CheckDataTransformationReq } from './model/CheckDataTransformationReq';
import { CheckJobResp } from './model/CheckJobResp';
import { ChildrenJobInfo } from './model/ChildrenJobInfo';
import { CompareJobContentDetailInfo } from './model/CompareJobContentDetailInfo';
import { CompareJobInfo } from './model/CompareJobInfo';
import { CompareObjectInfo } from './model/CompareObjectInfo';
import { CompareObjectInfoWithToken } from './model/CompareObjectInfoWithToken';
import { CompareTableInfoWithToken } from './model/CompareTableInfoWithToken';
import { CompareTaskList } from './model/CompareTaskList';
import { CompareTaskListResult } from './model/CompareTaskListResult';
import { ConfigTransformationVo } from './model/ConfigTransformationVo';
import { ContentCompareDetail } from './model/ContentCompareDetail';
import { ContentCompareDiff } from './model/ContentCompareDiff';
import { ContentCompareResult } from './model/ContentCompareResult';
import { ContentCompareResultDetails } from './model/ContentCompareResultDetails';
import { ContentCompareResultDiffs } from './model/ContentCompareResultDiffs';
import { ContentCompareResultOverview } from './model/ContentCompareResultOverview';
import { CreateCompareResultFileRequest } from './model/CreateCompareResultFileRequest';
import { CreateCompareResultFileResponse } from './model/CreateCompareResultFileResponse';
import { CreateCompareTaskReq } from './model/CreateCompareTaskReq';
import { CreateCompareTaskRequest } from './model/CreateCompareTaskRequest';
import { CreateCompareTaskResponse } from './model/CreateCompareTaskResponse';
import { CreateCompareTaskResult } from './model/CreateCompareTaskResult';
import { CreateDataCompareDatabaseObject } from './model/CreateDataCompareDatabaseObject';
import { CreateDataCompareTransformationInfo } from './model/CreateDataCompareTransformationInfo';
import { CreateDataLevelCompareReq } from './model/CreateDataLevelCompareReq';
import { CreateDataLevelTableCompareJobReq } from './model/CreateDataLevelTableCompareJobReq';
import { CreateDataLevelTableCompareJobRequest } from './model/CreateDataLevelTableCompareJobRequest';
import { CreateDataLevelTableCompareJobResponse } from './model/CreateDataLevelTableCompareJobResponse';
import { CreateJobReq } from './model/CreateJobReq';
import { CreateJobResp } from './model/CreateJobResp';
import { CreateObjectCompareJobReq } from './model/CreateObjectCompareJobReq';
import { CreateObjectLevelCompareJobRequest } from './model/CreateObjectLevelCompareJobRequest';
import { CreateObjectLevelCompareJobResponse } from './model/CreateObjectLevelCompareJobResponse';
import { CustomizedDns } from './model/CustomizedDns';
import { DataCompareOverviewInfo } from './model/DataCompareOverviewInfo';
import { DataTransformationInfo } from './model/DataTransformationInfo';
import { DataTransformationObjectVO } from './model/DataTransformationObjectVO';
import { DataTransformationResp } from './model/DataTransformationResp';
import { DatabaseInfo } from './model/DatabaseInfo';
import { DatabaseObjectInfo } from './model/DatabaseObjectInfo';
import { DatabaseObjectResp } from './model/DatabaseObjectResp';
import { DatabaseObjectVO } from './model/DatabaseObjectVO';
import { DefaultRootDb } from './model/DefaultRootDb';
import { DeleteCompareJobRequest } from './model/DeleteCompareJobRequest';
import { DeleteCompareJobResponse } from './model/DeleteCompareJobResponse';
import { DeleteJobReq } from './model/DeleteJobReq';
import { DeleteJobResp } from './model/DeleteJobResp';
import { DownloadCompareResultFileRequest } from './model/DownloadCompareResultFileRequest';
import { DownloadCompareResultFileResponse } from './model/DownloadCompareResultFileResponse';
import { Endpoint } from './model/Endpoint';
import { EndpointVO } from './model/EndpointVO';
import { ExportCompareResultReq } from './model/ExportCompareResultReq';
import { FailedToBindEipChildInfo } from './model/FailedToBindEipChildInfo';
import { GetDataTransformationResp } from './model/GetDataTransformationResp';
import { ImportSmnResp } from './model/ImportSmnResp';
import { InstInfo } from './model/InstInfo';
import { JobActionResp } from './model/JobActionResp';
import { JobInfo } from './model/JobInfo';
import { KafkaSecurity } from './model/KafkaSecurity';
import { KerberosVO } from './model/KerberosVO';
import { LimitSpeedReq } from './model/LimitSpeedReq';
import { LineCompareDetail } from './model/LineCompareDetail';
import { LineCompareResult } from './model/LineCompareResult';
import { LineCompareResultDetails } from './model/LineCompareResultDetails';
import { LineCompareResultOverview } from './model/LineCompareResultOverview';
import { ListAvailableNodeTypesRequest } from './model/ListAvailableNodeTypesRequest';
import { ListAvailableNodeTypesResponse } from './model/ListAvailableNodeTypesResponse';
import { ListAvailableZoneRequest } from './model/ListAvailableZoneRequest';
import { ListAvailableZoneResponse } from './model/ListAvailableZoneResponse';
import { ListCompareResultRequest } from './model/ListCompareResultRequest';
import { ListCompareResultResponse } from './model/ListCompareResultResponse';
import { ListContentCompareDetailRequest } from './model/ListContentCompareDetailRequest';
import { ListContentCompareDetailResponse } from './model/ListContentCompareDetailResponse';
import { ListContentCompareDifferenceRequest } from './model/ListContentCompareDifferenceRequest';
import { ListContentCompareDifferenceResponse } from './model/ListContentCompareDifferenceResponse';
import { ListContentCompareOverviewRequest } from './model/ListContentCompareOverviewRequest';
import { ListContentCompareOverviewResponse } from './model/ListContentCompareOverviewResponse';
import { ListDataCompareDetailRequest } from './model/ListDataCompareDetailRequest';
import { ListDataCompareDetailResponse } from './model/ListDataCompareDetailResponse';
import { ListDataCompareOverviewRequest } from './model/ListDataCompareOverviewRequest';
import { ListDataCompareOverviewResponse } from './model/ListDataCompareOverviewResponse';
import { ListDataLevelTableCompareJobsRequest } from './model/ListDataLevelTableCompareJobsRequest';
import { ListDataLevelTableCompareJobsResponse } from './model/ListDataLevelTableCompareJobsResponse';
import { ListObejectLevelCompareDetailRequest } from './model/ListObejectLevelCompareDetailRequest';
import { ListObejectLevelCompareDetailResponse } from './model/ListObejectLevelCompareDetailResponse';
import { ListObejectLevelCompareOverviewRequest } from './model/ListObejectLevelCompareOverviewRequest';
import { ListObejectLevelCompareOverviewResponse } from './model/ListObejectLevelCompareOverviewResponse';
import { ListUsersRequest } from './model/ListUsersRequest';
import { ListUsersResponse } from './model/ListUsersResponse';
import { LtsInfo } from './model/LtsInfo';
import { LtsInfoJob } from './model/LtsInfoJob';
import { ModifyDbPwdResp } from './model/ModifyDbPwdResp';
import { ModifyGroupAndStreamRequest } from './model/ModifyGroupAndStreamRequest';
import { ModifyGroupAndStreamResponse } from './model/ModifyGroupAndStreamResponse';
import { ModifyJobReq } from './model/ModifyJobReq';
import { ModifyJobResp } from './model/ModifyJobResp';
import { ModifyPwdEndPoint } from './model/ModifyPwdEndPoint';
import { ModifyTargetParamsReq } from './model/ModifyTargetParamsReq';
import { ModifyTuningParamsReq } from './model/ModifyTuningParamsReq';
import { NodeContentCompareDetailResult } from './model/NodeContentCompareDetailResult';
import { NodeContentCompareOverviewResult } from './model/NodeContentCompareOverviewResult';
import { ObjectCompareResult } from './model/ObjectCompareResult';
import { ObjectCompareResultDetails } from './model/ObjectCompareResultDetails';
import { ObjectCompareResultOverview } from './model/ObjectCompareResultOverview';
import { ObjectsCompareDetailInfo } from './model/ObjectsCompareDetailInfo';
import { ObjectsCompareOverviewInfo } from './model/ObjectsCompareOverviewInfo';
import { PageReq } from './model/PageReq';
import { Params } from './model/Params';
import { ParamsReqBean } from './model/ParamsReqBean';
import { PauseInfo } from './model/PauseInfo';
import { PauseJobResp } from './model/PauseJobResp';
import { PeriodOrderInfo } from './model/PeriodOrderInfo';
import { PeriodOrderResp } from './model/PeriodOrderResp';
import { PostPreCheckResp } from './model/PostPreCheckResp';
import { PreCheckInfo } from './model/PreCheckInfo';
import { PrecheckFailSubJobVO } from './model/PrecheckFailSubJobVO';
import { PrecheckResult } from './model/PrecheckResult';
import { ProgressInfo } from './model/ProgressInfo';
import { PublicIpConfig } from './model/PublicIpConfig';
import { QueryAvailableNodeTypeReq } from './model/QueryAvailableNodeTypeReq';
import { QueryCompareResultReq } from './model/QueryCompareResultReq';
import { QueryDataGuardMonitorAndChartResp } from './model/QueryDataGuardMonitorAndChartResp';
import { QueryDataGuardMonitorResponse } from './model/QueryDataGuardMonitorResponse';
import { QueryDbParamsResp } from './model/QueryDbParamsResp';
import { QueryFlowCompareDataResp } from './model/QueryFlowCompareDataResp';
import { QueryJobResp } from './model/QueryJobResp';
import { QueryJobStatusResp } from './model/QueryJobStatusResp';
import { QueryJobsReq } from './model/QueryJobsReq';
import { QueryPreCheckResp } from './model/QueryPreCheckResp';
import { QueryProgressResp } from './model/QueryProgressResp';
import { QueryQuotaInfo } from './model/QueryQuotaInfo';
import { QueryRoleDetailResp } from './model/QueryRoleDetailResp';
import { QueryRpoAndRtoResp } from './model/QueryRpoAndRtoResp';
import { QuerySmnInfoResp } from './model/QuerySmnInfoResp';
import { QueryStructDetailResp } from './model/QueryStructDetailResp';
import { QueryStructProcessResp } from './model/QueryStructProcessResp';
import { QuerySupportNodeTypeBean } from './model/QuerySupportNodeTypeBean';
import { QueryTuningParamsRequest } from './model/QueryTuningParamsRequest';
import { QueryTuningParamsResponse } from './model/QueryTuningParamsResponse';
import { QueryUserDetailResp } from './model/QueryUserDetailResp';
import { QueryUserResp } from './model/QueryUserResp';
import { QuotaResource } from './model/QuotaResource';
import { ReplaceDefinerInfo } from './model/ReplaceDefinerInfo';
import { ResourceTag } from './model/ResourceTag';
import { RetryInfo } from './model/RetryInfo';
import { RetryTaskResp } from './model/RetryTaskResp';
import { RpoAndRtoInfo } from './model/RpoAndRtoInfo';
import { SelectGroupAndStreamRequest } from './model/SelectGroupAndStreamRequest';
import { SelectGroupAndStreamResponse } from './model/SelectGroupAndStreamResponse';
import { SelectedSetAlarmTaskReq } from './model/SelectedSetAlarmTaskReq';
import { ShowJobListRequest } from './model/ShowJobListRequest';
import { ShowJobListResponse } from './model/ShowJobListResponse';
import { ShowMonitoringDataRequest } from './model/ShowMonitoringDataRequest';
import { ShowMonitoringDataResponse } from './model/ShowMonitoringDataResponse';
import { ShowQuotasRequest } from './model/ShowQuotasRequest';
import { ShowQuotasResponse } from './model/ShowQuotasResponse';
import { SpeedLimitInfo } from './model/SpeedLimitInfo';
import { StartInfo } from './model/StartInfo';
import { StartJobResp } from './model/StartJobResp';
import { StartPromptlyDataLevelTableCompareJobRequest } from './model/StartPromptlyDataLevelTableCompareJobRequest';
import { StartPromptlyDataLevelTableCompareJobResponse } from './model/StartPromptlyDataLevelTableCompareJobResponse';
import { StructDetailVO } from './model/StructDetailVO';
import { StructProcessResp } from './model/StructProcessResp';
import { StructProcessVO } from './model/StructProcessVO';
import { SubscriptionInfo } from './model/SubscriptionInfo';
import { SwitchoverResp } from './model/SwitchoverResp';
import { SyncPolicyReq } from './model/SyncPolicyReq';
import { SyncPolicyResp } from './model/SyncPolicyResp';
import { TableLineCompareResultInfo } from './model/TableLineCompareResultInfo';
import { Tag } from './model/Tag';
import { TestEndPoint } from './model/TestEndPoint';
import { TransformationInfo } from './model/TransformationInfo';
import { TuningParameter } from './model/TuningParameter';
import { UpdateDatabaseObjectReq } from './model/UpdateDatabaseObjectReq';
import { UpdateParamsRequest } from './model/UpdateParamsRequest';
import { UpdateParamsResponse } from './model/UpdateParamsResponse';
import { UpdateTuningParamsRequest } from './model/UpdateTuningParamsRequest';
import { UpdateTuningParamsResponse } from './model/UpdateTuningParamsResponse';
import { UpdateUserReq } from './model/UpdateUserReq';
import { UserAccountVO } from './model/UserAccountVO';
import { UserRoleVO } from './model/UserRoleVO';

export class DrsClient {
    public static newBuilder(): ClientBuilder<DrsClient> {
            let client = new ClientBuilder<DrsClient>(newClient);
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
     * 数据复制服务支持对同步的对象进行加工，即可以为选择的对象添加规则。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量数据加工
     * @param {BatchDataTransformationReq} requestBody 批量数据加工规则请求体
     * @param {'en-us' | 'zh-cn'} [xLanguage] 请求语言类型
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchChangeData(batchChangeDataRequest?: BatchChangeDataRequest): Promise<BatchChangeDataResponse> {
        const options = ParamCreater().batchChangeData(batchChangeDataRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量预检查，校验是否可进行迁移。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量预检查
     * @param {BatchPrecheckReq} requestBody 批量预检查请求体
     * @param {'en-us' | 'zh-cn'} [xLanguage] 请求语言类型
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchCheckJobs(batchCheckJobsRequest?: BatchCheckJobsRequest): Promise<BatchCheckJobsResponse> {
        const options = ParamCreater().batchCheckJobs(batchCheckJobsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量查询任务的预检查结果。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量查询预检查结果
     * @param {BatchQueryPrecheckResultReq} requestBody 批量查询预检查结果请求列表。 约束： - 不能包含空对象。 - 集合中的元素取值严格匹配UUID规则。 - 任务id不能重复。
     * @param {'en-us' | 'zh-cn'} [xLanguage] 请求语言类型
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchCheckResults(batchCheckResultsRequest?: BatchCheckResultsRequest): Promise<BatchCheckResultsResponse> {
        const options = ParamCreater().batchCheckResults(batchCheckResultsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据请求参数不同，可以批量创建实时迁移、实时同步、实时灾备任务。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量创建任务
     * @param {BatchCreateJobReq} requestBody 批量创建任务请求体
     * @param {'en-us' | 'zh-cn'} [xLanguage] 请求语言类型
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchCreateJobs(batchCreateJobsRequest?: BatchCreateJobsRequest): Promise<BatchCreateJobsResponse> {
        const options = ParamCreater().batchCreateJobs(batchCreateJobsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量结束任务或删除实时迁移、实时同步、实时灾备任务。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量结束任务或删除任务
     * @param {BatchDeleteJobReq} requestBody 批量结束与删除在线迁移任务请求体
     * @param {'en-us' | 'zh-cn'} [xLanguage] 请求语言类型
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchDeleteJobs(batchDeleteJobsRequest?: BatchDeleteJobsRequest): Promise<BatchDeleteJobsResponse> {
        const options = ParamCreater().batchDeleteJobs(batchDeleteJobsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据任务ID批量查询任务详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量查询任务详情
     * @param {BatchQueryJobReqPage} batchQueryJobReq 批量查询任务状态请求体 约束：当前页参数cur_page，有效值为0-整数上限，但不可超过jobs最大分页。默认cur_page &#x3D;1。如果为0，则获取全部任务信息。每页任务数per_page，有效值为0-100。默认值为per_page&#x3D;5. 如果为0，则获取全部任务信息。
     * @param {'en-us' | 'zh-cn'} [xLanguage] 请求语言类型
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchListJobDetails(batchListJobDetailsRequest?: BatchListJobDetailsRequest): Promise<BatchListJobDetailsResponse> {
        const options = ParamCreater().batchListJobDetails(batchListJobDetailsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据任务ID批量查询任务状态。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量查询任务状态
     * @param {BatchQueryJobReqPage} batchQueryJobReq 批量查询任务状态请求体. 当前页参数cur_page，有效值为0-整数上限，但不可超过jobs最大分页。默认cur_page &#x3D;1。如果为0，则获取全部任务信息。每页任务数per_page，有效值为0-100。默认值为per_page&#x3D;5. 如果为0，则获取全部任务信息。
     * @param {'en-us' | 'zh-cn'} [xLanguage] 请求语言类型
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchListJobStatus(batchListJobStatusRequest?: BatchListJobStatusRequest): Promise<BatchListJobStatusResponse> {
        const options = ParamCreater().batchListJobStatus(batchListJobStatusRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据任务ID批量查询全量进度、增量时延信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量查询任务进度
     * @param {BatchQueryProgressReq} requestBody 批量查询任务进度的请求体
     * @param {'en-us' | 'zh-cn'} [xLanguage] 请求语言类型
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchListProgresses(batchListProgressesRequest?: BatchListProgressesRequest): Promise<BatchListProgressesResponse> {
        const options = ParamCreater().batchListProgresses(batchListProgressesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量查询RPO和RTO。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量查询RPO和RTO
     * @param {BatchQueryRpoAndRtoReq} requestBody 批量查询RPO和RTO的请求体
     * @param {'en-us' | 'zh-cn'} [xLanguage] 请求语言类型
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchListRposAndRtos(batchListRposAndRtosRequest?: BatchListRposAndRtosRequest): Promise<BatchListRposAndRtosResponse> {
        const options = ParamCreater().batchListRposAndRtos(batchListRposAndRtosRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据任务ID批量查询灾备初始化对象详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量查询灾备初始化对象详情
     * @param {'database' | 'schema' | 'table' | 'view' | 'procedure' | 'trigger' | 'index' | 'table_indexs' | 'table_structure'} type 数据库支持迁移对象类型
     * @param {BatchQueryJobReqPage} batchQueryStructProcess 批量查询灾备初始化对象详情请求体
     * @param {'en-us' | 'zh-cn'} [xLanguage] 请求语言类型
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchListStructDetail(batchListStructDetailRequest?: BatchListStructDetailRequest): Promise<BatchListStructDetailResponse> {
        const options = ParamCreater().batchListStructDetail(batchListStructDetailRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据任务ID批量查询灾备初始化进度，虚拟id不支持查询。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量查询灾备初始化进度
     * @param {BatchQueryJobReq} batchQueryStructProcess 批量查询灾备初始化对象详情请求体
     * @param {'en-us' | 'zh-cn'} [xLanguage] 请求语言类型
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchListStructProcess(batchListStructProcessRequest?: BatchListStructProcessRequest): Promise<BatchListStructProcessResponse> {
        const options = ParamCreater().batchListStructProcess(batchListStructProcessRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 任务启动之后需要修改源库/目标库密码时调用此接口。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量修改源库/目标库密码
     * @param {BatchModifyPwdReq} requestBody 批量修改数据库密码请求体
     * @param {'en-us' | 'zh-cn'} [xLanguage] 请求语言类型
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchResetPassword(batchResetPasswordRequest?: BatchResetPasswordRequest): Promise<BatchResetPasswordResponse> {
        const options = ParamCreater().batchResetPassword(batchResetPasswordRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 在迁移过程中由于不确定因素导致迁移任务失败，可通过重试功能，重新提交迁移任务。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量续传/重试
     * @param {BatchRetryReq} jobs 批量续传任务请求列表
     * @param {'en-us' | 'zh-cn'} [xLanguage] 请求语言类型
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchRestoreTask(batchRestoreTaskRequest?: BatchRestoreTaskRequest): Promise<BatchRestoreTaskResponse> {
        const options = ParamCreater().batchRestoreTask(batchRestoreTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量设置Definer迁移是否迁移到到该用户下。
     * - 选择是：迁移后，所有源数据库对象的Definer都会迁移至该用户下，其他用户需要授权后才具有数据库对象权限。
     * - 选择否：迁移后，将保持源数据库对象Definer定义不变，选择此选项，需要配合下一步用户权限迁移功能，将源数据库的用户全部迁移，这样才能保持源数据库的权限体系完全不变。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量设置definer
     * @param {BatchReplaceDefinerReq} requestBody 批量设置replaceDefiner请求体
     * @param {'en-us' | 'zh-cn'} [xLanguage] 请求语言类型
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchSetDefiner(batchSetDefinerRequest?: BatchSetDefinerRequest): Promise<BatchSetDefinerResponse> {
        const options = ParamCreater().batchSetDefiner(batchSetDefinerRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 迁移之前，选择需要迁移的数据库或者表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量数据库对象选择
     * @param {BatchUpdateDatabaseObjectReq} requestBody 批量更新数据库对象选择消息体
     * @param {'en-us' | 'zh-cn'} [xLanguage] 请求语言类型
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchSetObjects(batchSetObjectsRequest?: BatchSetObjectsRequest): Promise<BatchSetObjectsResponse> {
        const options = ParamCreater().batchSetObjects(batchSetObjectsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * - 批量设置同步策略，包括冲突策略、过滤DROP Datase、对象同步范围。
     * - 设置kafka同步策略
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量设置同步策略
     * @param {BatchSetupSyncPolicyReq} requestBody 批量设置同步策略请求体。
     * @param {'en-us' | 'zh-cn'} [xLanguage] 请求语言类型。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchSetPolicy(batchSetPolicyRequest?: BatchSetPolicyRequest): Promise<BatchSetPolicyResponse> {
        const options = ParamCreater().batchSetPolicy(batchSetPolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量设置异常通知，已结束的任务不支持设置。
     * - 支持选择已有的SMN主题和手动输入手机号、邮箱两种方式，具体根据自己使用情况选择
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量配置异常通知
     * @param {BatchImportSmnInfoReq} batchImportSmnInfoReq 录入、修改收件方式与信息请求体
     * @param {'en-us' | 'zh-cn'} [xLanguage] 请求语言类型
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchSetSmn(batchSetSmnRequest?: BatchSetSmnRequest): Promise<BatchSetSmnResponse> {
        const options = ParamCreater().batchSetSmn(batchSetSmnRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量设置任务限速，任务创建成功后默认不限速。
     * - 限速：自定义的最大迁移速度，迁移过程中的迁移速度将不会超过该速度。
     * - 不限速：对迁移速度不进行限制，通常会最大化使用源数据库的出口带宽。该流速模式同时会对源数据库造成读消耗，消耗取决于源数据库的出口带宽。比如：源数据库的出口带宽为100MB/s，假设高速模式使用了80%带宽，则迁移对源数据库将造成80MB/s的读操作IO消耗。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量设置任务限速
     * @param {BatchLimitSpeedReq} requestBody 容灾限速请求体
     * @param {'en-us' | 'zh-cn'} [xLanguage] 请求语言类型
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchSetSpeed(batchSetSpeedRequest?: BatchSetSpeedRequest): Promise<BatchSetSpeedResponse> {
        const options = ParamCreater().batchSetSpeed(batchSetSpeedRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 在进行数据库迁移时，为了确保迁移成功后业务应用的使用不受影响，数据复制服务提供了参数对比功能帮助您进行源库和目标库参数一致性对比，此接口可以获取源库和目标库的数据库参数。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量获取数据库参数
     * @param {BatchQueryParamReq} requestBody 批量查询任务信息请求列表
     * @param {'en-us' | 'zh-cn'} [xLanguage] 请求语言类型
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchShowParams(batchShowParamsRequest?: BatchShowParamsRequest): Promise<BatchShowParamsResponse> {
        const options = ParamCreater().batchShowParams(batchShowParamsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量启动实时迁移、同步、灾备任务。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量启动任务
     * @param {BatchStartJobReq} requestBody 批量启动任务请求体。
     * @param {'en-us' | 'zh-cn'} [xLanguage] 请求语言类型
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchStartJobs(batchStartJobsRequest?: BatchStartJobsRequest): Promise<BatchStartJobsResponse> {
        const options = ParamCreater().batchStartJobs(batchStartJobsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量暂停任务。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量暂停任务
     * @param {BatchPauseJobReq} req 批量暂停任务请求体
     * @param {'en-us' | 'zh-cn'} [xLanguage] 请求语言类型
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchStopJobs(batchStopJobsRequest?: BatchStopJobsRequest): Promise<BatchStopJobsResponse> {
        const options = ParamCreater().batchStopJobs(batchStopJobsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量主备倒换。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量主备倒换
     * @param {BatchSwitchoverReq} requestBody 批量主备调换的请求体
     * @param {'en-us' | 'zh-cn'} [xLanguage] 请求语言类型
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchSwitchover(batchSwitchoverRequest?: BatchSwitchoverRequest): Promise<BatchSwitchoverResponse> {
        const options = ParamCreater().batchSwitchover(batchSwitchoverRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量修改任务名称或描述，设置异常通知信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量修改任务
     * @param {BatchModifyJobReq} requestBody 批量修改任务名称请求体
     * @param {'en-us' | 'zh-cn'} [xLanguage] 请求语言类型
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchUpdateJob(batchUpdateJobRequest?: BatchUpdateJobRequest): Promise<BatchUpdateJobResponse> {
        const options = ParamCreater().batchUpdateJob(batchUpdateJobRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 数据库的迁移过程中，迁移用户需要进行单独处理，该接口可以批量设置需要迁移的用户和角色。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量更新迁移用户信息
     * @param {BatchUpdateSrcUserReq} requestBody 批量更新迁移用户请求体
     * @param {'en-us' | 'zh-cn'} [xLanguage] 请求语言类型
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchUpdateUser(batchUpdateUserRequest?: BatchUpdateUserRequest): Promise<BatchUpdateUserResponse> {
        const options = ParamCreater().batchUpdateUser(batchUpdateUserRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * - 批量测试连接（集群模式）。
     * - 主备任务测试连接
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量测试连接-集群模式
     * @param {BatchSpecialTestConnectionReq} requestBody 集群批量测试连接任务请求体
     * @param {'en-us' | 'zh-cn'} [xLanguage] 请求语言类型
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchValidateClustersConnections(batchValidateClustersConnectionsRequest?: BatchValidateClustersConnectionsRequest): Promise<BatchValidateClustersConnectionsResponse> {
        const options = ParamCreater().batchValidateClustersConnections(batchValidateClustersConnectionsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量测试连接。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量测试连接
     * @param {BatchTestConnectionReq} requestBody 批量测试连接任务请求体。
     * @param {'en-us' | 'zh-cn'} [xLanguage] 请求语言类型
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchValidateConnections(batchValidateConnectionsRequest?: BatchValidateConnectionsRequest): Promise<BatchValidateConnectionsResponse> {
        const options = ParamCreater().batchValidateConnections(batchValidateConnectionsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 导出对比任务结果文件。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 导出对比任务结果文件
     * @param {string} region 区域ID，例如：cn-north-4。
     * @param {string} jobId 任务ID。
     * @param {'en-us' | 'zh-cn'} [xLanguage] 请求语言类型。
     * @param {ExportCompareResultReq} [createCompareResultFileRequestBody] 导出对比任务结果文件。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createCompareResultFile(createCompareResultFileRequest?: CreateCompareResultFileRequest): Promise<CreateCompareResultFileResponse> {
        const options = ParamCreater().createCompareResultFile(createCompareResultFileRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建对比任务。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建对比任务
     * @param {CreateCompareTaskReq} requestBody 创建对比任务的请求体。
     * @param {'en-us' | 'zh-cn'} [xLanguage] 请求语言类型
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createCompareTask(createCompareTaskRequest?: CreateCompareTaskRequest): Promise<CreateCompareTaskResponse> {
        const options = ParamCreater().createCompareTask(createCompareTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建数据级表对比任务。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建数据级表对比任务
     * @param {string} jobId 任务ID。
     * @param {CreateDataLevelTableCompareJobReq} createDataLevelTableCompareJobRequestBody 创建数据级表对比请求体。
     * @param {'en-us' | 'zh-cn'} [xLanguage] 请求语言类型。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createDataLevelTableCompareJob(createDataLevelTableCompareJobRequest?: CreateDataLevelTableCompareJobRequest): Promise<CreateDataLevelTableCompareJobResponse> {
        const options = ParamCreater().createDataLevelTableCompareJob(createDataLevelTableCompareJobRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建对象级对比任务。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建对象级对比任务
     * @param {string} jobId 任务ID。
     * @param {CreateObjectCompareJobReq} createObjectLevelCompareJobRequestBody 创建对象级对比请求体。
     * @param {'en-us' | 'zh-cn'} [xLanguage] 请求语言类型。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createObjectLevelCompareJob(createObjectLevelCompareJobRequest?: CreateObjectLevelCompareJobRequest): Promise<CreateObjectLevelCompareJobResponse> {
        const options = ParamCreater().createObjectLevelCompareJob(createObjectLevelCompareJobRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 取消对比任务。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 取消对比任务
     * @param {string} jobId 任务ID。
     * @param {string} compareJobId 对比任务ID。
     * @param {'en-us' | 'zh-cn'} [xLanguage] 请求语言类型。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteCompareJob(deleteCompareJobRequest?: DeleteCompareJobRequest): Promise<DeleteCompareJobResponse> {
        const options = ParamCreater().deleteCompareJob(deleteCompareJobRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 下载对比任务结果文件。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 下载对比任务结果文件
     * @param {string} jobId 任务ID。
     * @param {'en-us' | 'zh-cn'} [xLanguage] 请求语言类型。
     * @param {string} [compareType] 对比任务类型： - contents： 内容对比。 - lines：行数对比。 - random：抽样对比。 - objects_comparison：对象对比。 - repair_data：数据修复。
     * @param {string} [compareJobId] 对比任务的ID，内容对比、抽样对比、行数对比场景必填。
     * @param {string} [region] 区域ID，例如：cn-north-4。
     * @param {ExportCompareResultReq} [downloadCompareResultFileRequestBody] 生成对比任务结果文件。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public downloadCompareResultFile(downloadCompareResultFileRequest?: DownloadCompareResultFileRequest): Promise<DownloadCompareResultFileResponse> {
        const options = ParamCreater().downloadCompareResultFile(downloadCompareResultFileRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询可用的Node规格。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询可用的Node规格
     * @param {string} engineType 引擎类型
     * @param {'migration' | 'sync' | 'cloudDataGuard'} dbUseType 迁移场景。 - migration:实时迁移 - sync:实时同步 - cloudDataGuard:实时灾备
     * @param {'up' | 'down' | 'non-dbs'} jobDirection 迁移方向，up：入云 ，down：出云，non-dbs：自建。
     * @param {'en-us' | 'zh-cn'} [xLanguage] 请求语言类型。
     * @param {boolean} [isUseSelloutInfo] 是否查询资源售罄情况
     * @param {boolean} [isMultiWrite] 是否是双主灾备
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAvailableNodeTypes(listAvailableNodeTypesRequest?: ListAvailableNodeTypesRequest): Promise<ListAvailableNodeTypesResponse> {
        const options = ParamCreater().listAvailableNodeTypes(listAvailableNodeTypesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询规格未售罄的可用区
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询规格未售罄的可用区
     * @param {QueryAvailableNodeTypeReq} requestBody 查询可用区请求体。
     * @param {'en-us' | 'zh-cn'} [xLanguage] 请求语言类型。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAvailableZone(listAvailableZoneRequest?: ListAvailableZoneRequest): Promise<ListAvailableZoneResponse> {
        const options = ParamCreater().listAvailableZone(listAvailableZoneRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询对比结果。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询对比结果
     * @param {QueryCompareResultReq} requestBody 查询对比结果的请求体。
     * @param {'en-us' | 'zh-cn'} [xLanguage] 请求语言类型
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listCompareResult(listCompareResultRequest?: ListCompareResultRequest): Promise<ListCompareResultResponse> {
        const options = ParamCreater().listCompareResult(listCompareResultRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询内容对比详情
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询内容对比详情
     * @param {string} jobId 任务ID。
     * @param {string} compareJobId 对比任务ID。
     * @param {'en-us' | 'zh-cn'} [xLanguage] 请求语言类型。
     * @param {string} [targetDbName] 目标库名称。
     * @param {string} [dbName] 源库名称。
     * @param {string} [type] 类型。 compare：对比 unCompare：无法对比
     * @param {number} [limit] 每页显示的条目数量，最大值1000。
     * @param {number} [offset] 偏移量，表示从此偏移量开始查询， offset大于等于0。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listContentCompareDetail(listContentCompareDetailRequest?: ListContentCompareDetailRequest): Promise<ListContentCompareDetailResponse> {
        const options = ParamCreater().listContentCompareDetail(listContentCompareDetailRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询内容对比差异。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询内容对比差异
     * @param {string} jobId 任务ID。
     * @param {string} compareJobId 对比任务ID。
     * @param {'en-us' | 'zh-cn'} [xLanguage] 请求语言类型。
     * @param {string} [tableName] 表名。
     * @param {string} [dbName] 源库名称。
     * @param {number} [limit] 每页显示的条目数量，最大值1000。
     * @param {number} [offset] 偏移量，表示从此偏移量开始查询， offset大于等于0。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listContentCompareDifference(listContentCompareDifferenceRequest?: ListContentCompareDifferenceRequest): Promise<ListContentCompareDifferenceResponse> {
        const options = ParamCreater().listContentCompareDifference(listContentCompareDifferenceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询内容对比总览。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询内容对比总览
     * @param {string} jobId 任务ID。
     * @param {string} compareJobId 对比任务ID。
     * @param {'en-us' | 'zh-cn'} [xLanguage] 请求语言类型。
     * @param {number} [limit] 每页显示的条目数量，最大值1000。
     * @param {number} [offset] 偏移量，表示从此偏移量开始查询， offset大于等于0。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listContentCompareOverview(listContentCompareOverviewRequest?: ListContentCompareOverviewRequest): Promise<ListContentCompareOverviewResponse> {
        const options = ParamCreater().listContentCompareOverview(listContentCompareOverviewRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询行数对比详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询行数对比详情
     * @param {string} jobId 任务ID。
     * @param {string} compareJobId 对比任务ID。
     * @param {'en-us' | 'zh-cn'} [xLanguage] 请求语言类型。
     * @param {number} [status] 对比状态。 - 0：对比不一致 - 2：对比一致 - 3：目标库表不存在 - 4：对比失败 - 5：正在对比中 - 6：等待对比中 - 7：任务已取消 - 8：源库为空 - 9：目标库为空 - 10：源库和目标库都为空 - 11：源表不存在 - 12：目标表不存在 - 13：原表和目标表都不存在 - 14：源数据库连接失败 - 15：目标库数据库连接失败 - 16：源数据库执行SQL超时 - 17：目标数据库执行SQL超时 - 18：源数据库执行SQL错误 - 19：目标数据库执行SQL错误 - 20：源库和目标库都不存在 - 21：源库不存在 - 22：目标库不存在 - 23：行数为亿行，未进行对比 - 27：超时
     * @param {string} [type] 类型。 - compare：查询正常对比的项 - unCompare：查询无法对比的项
     * @param {string} [dbName] 源数据库名。
     * @param {string} [targetDbName] 目标数据库名。
     * @param {string} [queryTbName] 表名过滤关键字。
     * @param {number} [limit] 每页显示的条目数量，最大值1000。
     * @param {number} [offset] 偏移量，表示从此偏移量开始查询， offset大于等于0。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listDataCompareDetail(listDataCompareDetailRequest?: ListDataCompareDetailRequest): Promise<ListDataCompareDetailResponse> {
        const options = ParamCreater().listDataCompareDetail(listDataCompareDetailRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询行数对比总览。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询行数对比总览
     * @param {string} jobId 任务ID。
     * @param {string} compareJobId 对比任务ID。
     * @param {'en-us' | 'zh-cn'} [xLanguage] 请求语言类型。
     * @param {number} [status] 对比状态。 - 0：对比不一致 - 2：对比一致 - 3：目标库表不存在 - 4：对比失败 - 5：正在对比中 - 6：等待对比中 - 7：任务已取消 - 8：源库为空 - 9：目标库为空 - 10：源库和目标库都为空 - 11：源表不存在 - 12：目标表不存在 - 13：原表和目标表都不存在 - 14：源数据库连接失败 - 15：目标库数据库连接失败 - 16：源数据库执行SQL超时 - 17：目标数据库执行SQL超时 - 18：源数据库执行SQL错误 - 19：目标数据库执行SQL错误 - 20：源库和目标库都不存在 - 21：源库不存在 - 22：目标库不存在 - 23：行数为亿行，未进行对比 - 27：超时
     * @param {number} [limit] 每页显示的条目数量，最大值1000。
     * @param {number} [offset] 偏移量，表示从此偏移量开始查询， offset大于等于0。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listDataCompareOverview(listDataCompareOverviewRequest?: ListDataCompareOverviewRequest): Promise<ListDataCompareOverviewResponse> {
        const options = ParamCreater().listDataCompareOverview(listDataCompareOverviewRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询数据级表对比任务列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询数据级表对比任务列表
     * @param {string} jobId 任务ID。
     * @param {'en-us' | 'zh-cn'} [xLanguage] 请求语言类型。
     * @param {number} [limit] 每页显示的条目数量，最大值1000。
     * @param {number} [offset] 偏移量，表示从此偏移量开始查询， offset大于等于0。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listDataLevelTableCompareJobs(listDataLevelTableCompareJobsRequest?: ListDataLevelTableCompareJobsRequest): Promise<ListDataLevelTableCompareJobsResponse> {
        const options = ParamCreater().listDataLevelTableCompareJobs(listDataLevelTableCompareJobsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询对象对比任务详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询对象对比任务详情
     * @param {string} jobId 任务ID。
     * @param {string} compareType 对象类型： - DB：数据库。 - TABLE：表。 - VIEW：视图。 - EVENT：事件。 - ROUTINE：存储过程和函数。 - INDEX：索引。 - TRIGGER：触发器。 - SYNONYM：同义词。 - FUNCTION：函数。 - PROCEDURE：存储过程。 - TYPE：自定义类型。 - RULE：规则。 - DEFAULT_TYPE：缺省值。 - PLAN_GUIDE：执行计划。 - CONSTRAINT：约束。 - FILE_GROUP：文件组。 - PARTITION_FUNCTION：分区函数。 - PARTITION_SCHEME：分区方案。 - TABLE_COLLATION：表的排序规则。
     * @param {'en-us' | 'zh-cn'} [xLanguage] 请求语言类型。
     * @param {string} [compareJobId] 对比任务ID，不填写时默认返回最新的对比任务信息。
     * @param {number} [limit] 每页显示的条目数量，最大值1000。
     * @param {number} [offset] 偏移量，表示从此偏移量开始查询， offset大于等于0。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listObejectLevelCompareDetail(listObejectLevelCompareDetailRequest?: ListObejectLevelCompareDetailRequest): Promise<ListObejectLevelCompareDetailResponse> {
        const options = ParamCreater().listObejectLevelCompareDetail(listObejectLevelCompareDetailRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询对象对比任务概览。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询对象对比任务概览
     * @param {string} jobId 任务ID。
     * @param {'en-us' | 'zh-cn'} [xLanguage] 请求语言类型。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listObejectLevelCompareOverview(listObejectLevelCompareOverviewRequest?: ListObejectLevelCompareOverviewRequest): Promise<ListObejectLevelCompareOverviewResponse> {
        const options = ParamCreater().listObejectLevelCompareOverview(listObejectLevelCompareOverviewRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 数据库的迁移过程中，迁移用户需要进行单独处理，该接口可以查询源库的用户信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取源库迁移用户列表
     * @param {string} jobId 任务ID
     * @param {'en-us' | 'zh-cn'} [xLanguage] 请求语言类型
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listUsers(listUsersRequest?: ListUsersRequest): Promise<ListUsersResponse> {
        const options = ParamCreater().listUsers(listUsersRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新任务的LTS配置。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新LTS配置
     * @param {string} jobId 任务ID。
     * @param {LtsInfo} modifyGroupAndStreamRequestBody 更新LTS配置请求体。
     * @param {'en-us' | 'zh-cn'} [xLanguage] 请求语言类型。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public modifyGroupAndStream(modifyGroupAndStreamRequest?: ModifyGroupAndStreamRequest): Promise<ModifyGroupAndStreamResponse> {
        const options = ParamCreater().modifyGroupAndStream(modifyGroupAndStreamRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询高级设置参数。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询高级设置参数
     * @param {string} jobId 任务ID，如果是主备任务，使用父任务ID。
     * @param {'en-us' | 'zh-cn'} [xLanguage] 请求语言类型
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public queryTuningParams(queryTuningParamsRequest?: QueryTuningParamsRequest): Promise<QueryTuningParamsResponse> {
        const options = ParamCreater().queryTuningParams(queryTuningParamsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询任务的LTS配置。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询LTS配置
     * @param {string} jobId 任务ID。
     * @param {'en-us' | 'zh-cn'} [xLanguage] 请求语言类型。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public selectGroupAndStream(selectGroupAndStreamRequest?: SelectGroupAndStreamRequest): Promise<SelectGroupAndStreamResponse> {
        const options = ParamCreater().selectGroupAndStream(selectGroupAndStreamRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询租户任务列表，可以根据引擎类型，网络类型，任务状态，任务名称，任务ID进行查询。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询租户任务列表
     * @param {QueryJobsReq} queryJobsReqV3 查询任务列表请求体
     * @param {'en-us' | 'zh-cn'} [xLanguage] 请求语言类型
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showJobList(showJobListRequest?: ShowJobListRequest): Promise<ShowJobListResponse> {
        const options = ParamCreater().showJobList(showJobListRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据任务ID查询容灾监控数据。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询容灾监控数据
     * @param {BatchQueryJobReq} req 查询灾备任务监控数据请求列表,考虑接口性能问题，集合中只能传入一个id
     * @param {'en-us' | 'zh-cn'} [xLanguage] 请求语言类型
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showMonitoringData(showMonitoringDataRequest?: ShowMonitoringDataRequest): Promise<ShowMonitoringDataResponse> {
        const options = ParamCreater().showMonitoringData(showMonitoringDataRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询单租户在某一项目下DRS服务下的配额信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询配额
     * @param {'en-us' | 'zh-cn'} [xLanguage] 请求语言类型。
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
     * 立即启动数据级表对比任务。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 立即启动数据级表对比任务
     * @param {string} jobId 任务ID。
     * @param {string} compareJobId 对比任务ID。
     * @param {'en-us' | 'zh-cn'} [xLanguage] 请求语言类型。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public startPromptlyDataLevelTableCompareJob(startPromptlyDataLevelTableCompareJobRequest?: StartPromptlyDataLevelTableCompareJobRequest): Promise<StartPromptlyDataLevelTableCompareJobResponse> {
        const options = ParamCreater().startPromptlyDataLevelTableCompareJob(startPromptlyDataLevelTableCompareJobRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改数据库参数。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改数据库参数
     * @param {string} jobId 任务ID
     * @param {ModifyTargetParamsReq} requestBody 修改数据库参数请求体
     * @param {'en-us' | 'zh-cn'} [xLanguage] 请求语言类型
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateParams(updateParamsRequest?: UpdateParamsRequest): Promise<UpdateParamsResponse> {
        const options = ParamCreater().updateParams(updateParamsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改调优参数的值。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 高级设置
     * @param {string} jobId 租户在某一Region下的Job ID，如果是主备任务，使用父任务ID。
     * @param {ModifyTuningParamsReq} requestBody 修改调优参数请求体
     * @param {'en-us' | 'zh-cn'} [xLanguage] 请求语言类型
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateTuningParams(updateTuningParamsRequest?: UpdateTuningParamsRequest): Promise<UpdateTuningParamsResponse> {
        const options = ParamCreater().updateTuningParams(updateTuningParamsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * 数据复制服务支持对同步的对象进行加工，即可以为选择的对象添加规则。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchChangeData(batchChangeDataRequest?: BatchChangeDataRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/jobs/batch-transformation",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xLanguage;

            if (batchChangeDataRequest !== null && batchChangeDataRequest !== undefined) {
                if (batchChangeDataRequest instanceof BatchChangeDataRequest) {
                    body = batchChangeDataRequest.body
                    xLanguage = batchChangeDataRequest.xLanguage;
                } else {
                    body = batchChangeDataRequest['body'];
                    xLanguage = batchChangeDataRequest['X-Language'];
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
         * 批量预检查，校验是否可进行迁移。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchCheckJobs(batchCheckJobsRequest?: BatchCheckJobsRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/jobs/batch-precheck",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xLanguage;

            if (batchCheckJobsRequest !== null && batchCheckJobsRequest !== undefined) {
                if (batchCheckJobsRequest instanceof BatchCheckJobsRequest) {
                    body = batchCheckJobsRequest.body
                    xLanguage = batchCheckJobsRequest.xLanguage;
                } else {
                    body = batchCheckJobsRequest['body'];
                    xLanguage = batchCheckJobsRequest['X-Language'];
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
         * 批量查询任务的预检查结果。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchCheckResults(batchCheckResultsRequest?: BatchCheckResultsRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/jobs/batch-precheck-result",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xLanguage;

            if (batchCheckResultsRequest !== null && batchCheckResultsRequest !== undefined) {
                if (batchCheckResultsRequest instanceof BatchCheckResultsRequest) {
                    body = batchCheckResultsRequest.body
                    xLanguage = batchCheckResultsRequest.xLanguage;
                } else {
                    body = batchCheckResultsRequest['body'];
                    xLanguage = batchCheckResultsRequest['X-Language'];
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
         * 根据请求参数不同，可以批量创建实时迁移、实时同步、实时灾备任务。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchCreateJobs(batchCreateJobsRequest?: BatchCreateJobsRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/jobs/batch-creation",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xLanguage;

            if (batchCreateJobsRequest !== null && batchCreateJobsRequest !== undefined) {
                if (batchCreateJobsRequest instanceof BatchCreateJobsRequest) {
                    body = batchCreateJobsRequest.body
                    xLanguage = batchCreateJobsRequest.xLanguage;
                } else {
                    body = batchCreateJobsRequest['body'];
                    xLanguage = batchCreateJobsRequest['X-Language'];
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
         * 批量结束任务或删除实时迁移、实时同步、实时灾备任务。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchDeleteJobs(batchDeleteJobsRequest?: BatchDeleteJobsRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{project_id}/jobs/batch-jobs",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xLanguage;

            if (batchDeleteJobsRequest !== null && batchDeleteJobsRequest !== undefined) {
                if (batchDeleteJobsRequest instanceof BatchDeleteJobsRequest) {
                    body = batchDeleteJobsRequest.body
                    xLanguage = batchDeleteJobsRequest.xLanguage;
                } else {
                    body = batchDeleteJobsRequest['body'];
                    xLanguage = batchDeleteJobsRequest['X-Language'];
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
         * 根据任务ID批量查询任务详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchListJobDetails(batchListJobDetailsRequest?: BatchListJobDetailsRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/jobs/batch-detail",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xLanguage;

            if (batchListJobDetailsRequest !== null && batchListJobDetailsRequest !== undefined) {
                if (batchListJobDetailsRequest instanceof BatchListJobDetailsRequest) {
                    body = batchListJobDetailsRequest.body
                    xLanguage = batchListJobDetailsRequest.xLanguage;
                } else {
                    body = batchListJobDetailsRequest['body'];
                    xLanguage = batchListJobDetailsRequest['X-Language'];
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
         * 根据任务ID批量查询任务状态。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchListJobStatus(batchListJobStatusRequest?: BatchListJobStatusRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/jobs/batch-status",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xLanguage;

            if (batchListJobStatusRequest !== null && batchListJobStatusRequest !== undefined) {
                if (batchListJobStatusRequest instanceof BatchListJobStatusRequest) {
                    body = batchListJobStatusRequest.body
                    xLanguage = batchListJobStatusRequest.xLanguage;
                } else {
                    body = batchListJobStatusRequest['body'];
                    xLanguage = batchListJobStatusRequest['X-Language'];
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
         * 根据任务ID批量查询全量进度、增量时延信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchListProgresses(batchListProgressesRequest?: BatchListProgressesRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/jobs/batch-progress",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xLanguage;

            if (batchListProgressesRequest !== null && batchListProgressesRequest !== undefined) {
                if (batchListProgressesRequest instanceof BatchListProgressesRequest) {
                    body = batchListProgressesRequest.body
                    xLanguage = batchListProgressesRequest.xLanguage;
                } else {
                    body = batchListProgressesRequest['body'];
                    xLanguage = batchListProgressesRequest['X-Language'];
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
         * 批量查询RPO和RTO。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchListRposAndRtos(batchListRposAndRtosRequest?: BatchListRposAndRtosRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/jobs/batch-rpo-and-rto",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xLanguage;

            if (batchListRposAndRtosRequest !== null && batchListRposAndRtosRequest !== undefined) {
                if (batchListRposAndRtosRequest instanceof BatchListRposAndRtosRequest) {
                    body = batchListRposAndRtosRequest.body
                    xLanguage = batchListRposAndRtosRequest.xLanguage;
                } else {
                    body = batchListRposAndRtosRequest['body'];
                    xLanguage = batchListRposAndRtosRequest['X-Language'];
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
         * 根据任务ID批量查询灾备初始化对象详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchListStructDetail(batchListStructDetailRequest?: BatchListStructDetailRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/jobs/{type}/batch-struct-detail",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let type;
            
            let xLanguage;

            if (batchListStructDetailRequest !== null && batchListStructDetailRequest !== undefined) {
                if (batchListStructDetailRequest instanceof BatchListStructDetailRequest) {
                    type = batchListStructDetailRequest.type;
                    body = batchListStructDetailRequest.body
                    xLanguage = batchListStructDetailRequest.xLanguage;
                } else {
                    type = batchListStructDetailRequest['type'];
                    body = batchListStructDetailRequest['body'];
                    xLanguage = batchListStructDetailRequest['X-Language'];
                }
            }

        
            if (type === null || type === undefined) {
            throw new RequiredError('type','Required parameter type was null or undefined when calling batchListStructDetail.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'type': type, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据任务ID批量查询灾备初始化进度，虚拟id不支持查询。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchListStructProcess(batchListStructProcessRequest?: BatchListStructProcessRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/jobs/batch-struct-process",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xLanguage;

            if (batchListStructProcessRequest !== null && batchListStructProcessRequest !== undefined) {
                if (batchListStructProcessRequest instanceof BatchListStructProcessRequest) {
                    body = batchListStructProcessRequest.body
                    xLanguage = batchListStructProcessRequest.xLanguage;
                } else {
                    body = batchListStructProcessRequest['body'];
                    xLanguage = batchListStructProcessRequest['X-Language'];
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
         * 任务启动之后需要修改源库/目标库密码时调用此接口。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchResetPassword(batchResetPasswordRequest?: BatchResetPasswordRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/jobs/batch-modify-pwd",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xLanguage;

            if (batchResetPasswordRequest !== null && batchResetPasswordRequest !== undefined) {
                if (batchResetPasswordRequest instanceof BatchResetPasswordRequest) {
                    body = batchResetPasswordRequest.body
                    xLanguage = batchResetPasswordRequest.xLanguage;
                } else {
                    body = batchResetPasswordRequest['body'];
                    xLanguage = batchResetPasswordRequest['X-Language'];
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
         * 在迁移过程中由于不确定因素导致迁移任务失败，可通过重试功能，重新提交迁移任务。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchRestoreTask(batchRestoreTaskRequest?: BatchRestoreTaskRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/jobs/batch-retry-task",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xLanguage;

            if (batchRestoreTaskRequest !== null && batchRestoreTaskRequest !== undefined) {
                if (batchRestoreTaskRequest instanceof BatchRestoreTaskRequest) {
                    body = batchRestoreTaskRequest.body
                    xLanguage = batchRestoreTaskRequest.xLanguage;
                } else {
                    body = batchRestoreTaskRequest['body'];
                    xLanguage = batchRestoreTaskRequest['X-Language'];
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
         * 批量设置Definer迁移是否迁移到到该用户下。
         * - 选择是：迁移后，所有源数据库对象的Definer都会迁移至该用户下，其他用户需要授权后才具有数据库对象权限。
         * - 选择否：迁移后，将保持源数据库对象Definer定义不变，选择此选项，需要配合下一步用户权限迁移功能，将源数据库的用户全部迁移，这样才能保持源数据库的权限体系完全不变。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchSetDefiner(batchSetDefinerRequest?: BatchSetDefinerRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/jobs/batch-replace-definer",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xLanguage;

            if (batchSetDefinerRequest !== null && batchSetDefinerRequest !== undefined) {
                if (batchSetDefinerRequest instanceof BatchSetDefinerRequest) {
                    body = batchSetDefinerRequest.body
                    xLanguage = batchSetDefinerRequest.xLanguage;
                } else {
                    body = batchSetDefinerRequest['body'];
                    xLanguage = batchSetDefinerRequest['X-Language'];
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
         * 迁移之前，选择需要迁移的数据库或者表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchSetObjects(batchSetObjectsRequest?: BatchSetObjectsRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/jobs/batch-select-objects",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xLanguage;

            if (batchSetObjectsRequest !== null && batchSetObjectsRequest !== undefined) {
                if (batchSetObjectsRequest instanceof BatchSetObjectsRequest) {
                    body = batchSetObjectsRequest.body
                    xLanguage = batchSetObjectsRequest.xLanguage;
                } else {
                    body = batchSetObjectsRequest['body'];
                    xLanguage = batchSetObjectsRequest['X-Language'];
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
         * - 批量设置同步策略，包括冲突策略、过滤DROP Datase、对象同步范围。
         * - 设置kafka同步策略
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchSetPolicy(batchSetPolicyRequest?: BatchSetPolicyRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/jobs/batch-sync-policy",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xLanguage;

            if (batchSetPolicyRequest !== null && batchSetPolicyRequest !== undefined) {
                if (batchSetPolicyRequest instanceof BatchSetPolicyRequest) {
                    body = batchSetPolicyRequest.body
                    xLanguage = batchSetPolicyRequest.xLanguage;
                } else {
                    body = batchSetPolicyRequest['body'];
                    xLanguage = batchSetPolicyRequest['X-Language'];
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
         * 批量设置异常通知，已结束的任务不支持设置。
         * - 支持选择已有的SMN主题和手动输入手机号、邮箱两种方式，具体根据自己使用情况选择
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchSetSmn(batchSetSmnRequest?: BatchSetSmnRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/jobs/batch-set-smn",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xLanguage;

            if (batchSetSmnRequest !== null && batchSetSmnRequest !== undefined) {
                if (batchSetSmnRequest instanceof BatchSetSmnRequest) {
                    body = batchSetSmnRequest.body
                    xLanguage = batchSetSmnRequest.xLanguage;
                } else {
                    body = batchSetSmnRequest['body'];
                    xLanguage = batchSetSmnRequest['X-Language'];
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
         * 批量设置任务限速，任务创建成功后默认不限速。
         * - 限速：自定义的最大迁移速度，迁移过程中的迁移速度将不会超过该速度。
         * - 不限速：对迁移速度不进行限制，通常会最大化使用源数据库的出口带宽。该流速模式同时会对源数据库造成读消耗，消耗取决于源数据库的出口带宽。比如：源数据库的出口带宽为100MB/s，假设高速模式使用了80%带宽，则迁移对源数据库将造成80MB/s的读操作IO消耗。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchSetSpeed(batchSetSpeedRequest?: BatchSetSpeedRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/jobs/batch-limit-speed",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xLanguage;

            if (batchSetSpeedRequest !== null && batchSetSpeedRequest !== undefined) {
                if (batchSetSpeedRequest instanceof BatchSetSpeedRequest) {
                    body = batchSetSpeedRequest.body
                    xLanguage = batchSetSpeedRequest.xLanguage;
                } else {
                    body = batchSetSpeedRequest['body'];
                    xLanguage = batchSetSpeedRequest['X-Language'];
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
         * 在进行数据库迁移时，为了确保迁移成功后业务应用的使用不受影响，数据复制服务提供了参数对比功能帮助您进行源库和目标库参数一致性对比，此接口可以获取源库和目标库的数据库参数。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchShowParams(batchShowParamsRequest?: BatchShowParamsRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/jobs/batch-get-params",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xLanguage;

            if (batchShowParamsRequest !== null && batchShowParamsRequest !== undefined) {
                if (batchShowParamsRequest instanceof BatchShowParamsRequest) {
                    body = batchShowParamsRequest.body
                    xLanguage = batchShowParamsRequest.xLanguage;
                } else {
                    body = batchShowParamsRequest['body'];
                    xLanguage = batchShowParamsRequest['X-Language'];
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
         * 批量启动实时迁移、同步、灾备任务。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchStartJobs(batchStartJobsRequest?: BatchStartJobsRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/jobs/batch-starting",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xLanguage;

            if (batchStartJobsRequest !== null && batchStartJobsRequest !== undefined) {
                if (batchStartJobsRequest instanceof BatchStartJobsRequest) {
                    body = batchStartJobsRequest.body
                    xLanguage = batchStartJobsRequest.xLanguage;
                } else {
                    body = batchStartJobsRequest['body'];
                    xLanguage = batchStartJobsRequest['X-Language'];
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
         * 批量暂停任务。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchStopJobs(batchStopJobsRequest?: BatchStopJobsRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/jobs/batch-pause-task",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xLanguage;

            if (batchStopJobsRequest !== null && batchStopJobsRequest !== undefined) {
                if (batchStopJobsRequest instanceof BatchStopJobsRequest) {
                    body = batchStopJobsRequest.body
                    xLanguage = batchStopJobsRequest.xLanguage;
                } else {
                    body = batchStopJobsRequest['body'];
                    xLanguage = batchStopJobsRequest['X-Language'];
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
         * 批量主备倒换。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchSwitchover(batchSwitchoverRequest?: BatchSwitchoverRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/jobs/batch-switchover",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xLanguage;

            if (batchSwitchoverRequest !== null && batchSwitchoverRequest !== undefined) {
                if (batchSwitchoverRequest instanceof BatchSwitchoverRequest) {
                    body = batchSwitchoverRequest.body
                    xLanguage = batchSwitchoverRequest.xLanguage;
                } else {
                    body = batchSwitchoverRequest['body'];
                    xLanguage = batchSwitchoverRequest['X-Language'];
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
         * 批量修改任务名称或描述，设置异常通知信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchUpdateJob(batchUpdateJobRequest?: BatchUpdateJobRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/jobs/batch-modification",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xLanguage;

            if (batchUpdateJobRequest !== null && batchUpdateJobRequest !== undefined) {
                if (batchUpdateJobRequest instanceof BatchUpdateJobRequest) {
                    body = batchUpdateJobRequest.body
                    xLanguage = batchUpdateJobRequest.xLanguage;
                } else {
                    body = batchUpdateJobRequest['body'];
                    xLanguage = batchUpdateJobRequest['X-Language'];
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
         * 数据库的迁移过程中，迁移用户需要进行单独处理，该接口可以批量设置需要迁移的用户和角色。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchUpdateUser(batchUpdateUserRequest?: BatchUpdateUserRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/jobs/batch-update-user",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xLanguage;

            if (batchUpdateUserRequest !== null && batchUpdateUserRequest !== undefined) {
                if (batchUpdateUserRequest instanceof BatchUpdateUserRequest) {
                    body = batchUpdateUserRequest.body
                    xLanguage = batchUpdateUserRequest.xLanguage;
                } else {
                    body = batchUpdateUserRequest['body'];
                    xLanguage = batchUpdateUserRequest['X-Language'];
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
         * - 批量测试连接（集群模式）。
         * - 主备任务测试连接
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchValidateClustersConnections(batchValidateClustersConnectionsRequest?: BatchValidateClustersConnectionsRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/jobs/cluster/batch-connection",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xLanguage;

            if (batchValidateClustersConnectionsRequest !== null && batchValidateClustersConnectionsRequest !== undefined) {
                if (batchValidateClustersConnectionsRequest instanceof BatchValidateClustersConnectionsRequest) {
                    body = batchValidateClustersConnectionsRequest.body
                    xLanguage = batchValidateClustersConnectionsRequest.xLanguage;
                } else {
                    body = batchValidateClustersConnectionsRequest['body'];
                    xLanguage = batchValidateClustersConnectionsRequest['X-Language'];
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
         * 批量测试连接。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchValidateConnections(batchValidateConnectionsRequest?: BatchValidateConnectionsRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/jobs/batch-connection",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xLanguage;

            if (batchValidateConnectionsRequest !== null && batchValidateConnectionsRequest !== undefined) {
                if (batchValidateConnectionsRequest instanceof BatchValidateConnectionsRequest) {
                    body = batchValidateConnectionsRequest.body
                    xLanguage = batchValidateConnectionsRequest.xLanguage;
                } else {
                    body = batchValidateConnectionsRequest['body'];
                    xLanguage = batchValidateConnectionsRequest['X-Language'];
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
         * 导出对比任务结果文件。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createCompareResultFile(createCompareResultFileRequest?: CreateCompareResultFileRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/jobs/{job_id}/compare/result/file",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let region;
            
            let jobId;
            
            let xLanguage;

            if (createCompareResultFileRequest !== null && createCompareResultFileRequest !== undefined) {
                if (createCompareResultFileRequest instanceof CreateCompareResultFileRequest) {
                    region = createCompareResultFileRequest.region;
                    jobId = createCompareResultFileRequest.jobId;
                    xLanguage = createCompareResultFileRequest.xLanguage;
                    body = createCompareResultFileRequest.body
                } else {
                    region = createCompareResultFileRequest['Region'];
                    jobId = createCompareResultFileRequest['job_id'];
                    xLanguage = createCompareResultFileRequest['X-Language'];
                    body = createCompareResultFileRequest['body'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling createCompareResultFile.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }
            if (region !== undefined && region !== null) {
                localVarHeaderParameter['Region'] = String(region);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'job_id': jobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建对比任务。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createCompareTask(createCompareTaskRequest?: CreateCompareTaskRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/jobs/create-compare-task",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xLanguage;

            if (createCompareTaskRequest !== null && createCompareTaskRequest !== undefined) {
                if (createCompareTaskRequest instanceof CreateCompareTaskRequest) {
                    body = createCompareTaskRequest.body
                    xLanguage = createCompareTaskRequest.xLanguage;
                } else {
                    body = createCompareTaskRequest['body'];
                    xLanguage = createCompareTaskRequest['X-Language'];
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
         * 创建数据级表对比任务。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createDataLevelTableCompareJob(createDataLevelTableCompareJobRequest?: CreateDataLevelTableCompareJobRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/jobs/{job_id}/table/compare",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let jobId;
            
            let xLanguage;

            if (createDataLevelTableCompareJobRequest !== null && createDataLevelTableCompareJobRequest !== undefined) {
                if (createDataLevelTableCompareJobRequest instanceof CreateDataLevelTableCompareJobRequest) {
                    jobId = createDataLevelTableCompareJobRequest.jobId;
                    body = createDataLevelTableCompareJobRequest.body
                    xLanguage = createDataLevelTableCompareJobRequest.xLanguage;
                } else {
                    jobId = createDataLevelTableCompareJobRequest['job_id'];
                    body = createDataLevelTableCompareJobRequest['body'];
                    xLanguage = createDataLevelTableCompareJobRequest['X-Language'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling createDataLevelTableCompareJob.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'job_id': jobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建对象级对比任务。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createObjectLevelCompareJob(createObjectLevelCompareJobRequest?: CreateObjectLevelCompareJobRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/jobs/{job_id}/object/compare",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let jobId;
            
            let xLanguage;

            if (createObjectLevelCompareJobRequest !== null && createObjectLevelCompareJobRequest !== undefined) {
                if (createObjectLevelCompareJobRequest instanceof CreateObjectLevelCompareJobRequest) {
                    jobId = createObjectLevelCompareJobRequest.jobId;
                    body = createObjectLevelCompareJobRequest.body
                    xLanguage = createObjectLevelCompareJobRequest.xLanguage;
                } else {
                    jobId = createObjectLevelCompareJobRequest['job_id'];
                    body = createObjectLevelCompareJobRequest['body'];
                    xLanguage = createObjectLevelCompareJobRequest['X-Language'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling createObjectLevelCompareJob.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'job_id': jobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 取消对比任务。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteCompareJob(deleteCompareJobRequest?: DeleteCompareJobRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{project_id}/jobs/{job_id}/compare/{compare_job_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let jobId;
            
            let compareJobId;
            
            let xLanguage;

            if (deleteCompareJobRequest !== null && deleteCompareJobRequest !== undefined) {
                if (deleteCompareJobRequest instanceof DeleteCompareJobRequest) {
                    jobId = deleteCompareJobRequest.jobId;
                    compareJobId = deleteCompareJobRequest.compareJobId;
                    xLanguage = deleteCompareJobRequest.xLanguage;
                } else {
                    jobId = deleteCompareJobRequest['job_id'];
                    compareJobId = deleteCompareJobRequest['compare_job_id'];
                    xLanguage = deleteCompareJobRequest['X-Language'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling deleteCompareJob.');
            }
            if (compareJobId === null || compareJobId === undefined) {
            throw new RequiredError('compareJobId','Required parameter compareJobId was null or undefined when calling deleteCompareJob.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.pathParams = { 'job_id': jobId,'compare_job_id': compareJobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 下载对比任务结果文件。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        downloadCompareResultFile(downloadCompareResultFileRequest?: DownloadCompareResultFileRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/jobs/{job_id}/compare/result/file",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let jobId;
            
            let xLanguage;
            
            let compareType;
            
            let compareJobId;
            
            let region;

            if (downloadCompareResultFileRequest !== null && downloadCompareResultFileRequest !== undefined) {
                if (downloadCompareResultFileRequest instanceof DownloadCompareResultFileRequest) {
                    jobId = downloadCompareResultFileRequest.jobId;
                    xLanguage = downloadCompareResultFileRequest.xLanguage;
                    compareType = downloadCompareResultFileRequest.compareType;
                    compareJobId = downloadCompareResultFileRequest.compareJobId;
                    region = downloadCompareResultFileRequest.region;
                    body = downloadCompareResultFileRequest.body
                } else {
                    jobId = downloadCompareResultFileRequest['job_id'];
                    xLanguage = downloadCompareResultFileRequest['X-Language'];
                    compareType = downloadCompareResultFileRequest['compare_type'];
                    compareJobId = downloadCompareResultFileRequest['compare_job_id'];
                    region = downloadCompareResultFileRequest['Region'];
                    body = downloadCompareResultFileRequest['body'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling downloadCompareResultFile.');
            }
            if (compareType !== null && compareType !== undefined) {
                localVarQueryParameter['compare_type'] = compareType;
            }
            if (compareJobId !== null && compareJobId !== undefined) {
                localVarQueryParameter['compare_job_id'] = compareJobId;
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }
            if (region !== undefined && region !== null) {
                localVarHeaderParameter['Region'] = String(region);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'job_id': jobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询可用的Node规格。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAvailableNodeTypes(listAvailableNodeTypesRequest?: ListAvailableNodeTypesRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/node-type",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let engineType;
            
            let dbUseType;
            
            let jobDirection;
            
            let xLanguage;
            
            let isUseSelloutInfo;
            
            let isMultiWrite;

            if (listAvailableNodeTypesRequest !== null && listAvailableNodeTypesRequest !== undefined) {
                if (listAvailableNodeTypesRequest instanceof ListAvailableNodeTypesRequest) {
                    engineType = listAvailableNodeTypesRequest.engineType;
                    dbUseType = listAvailableNodeTypesRequest.dbUseType;
                    jobDirection = listAvailableNodeTypesRequest.jobDirection;
                    xLanguage = listAvailableNodeTypesRequest.xLanguage;
                    isUseSelloutInfo = listAvailableNodeTypesRequest.isUseSelloutInfo;
                    isMultiWrite = listAvailableNodeTypesRequest.isMultiWrite;
                } else {
                    engineType = listAvailableNodeTypesRequest['engine_type'];
                    dbUseType = listAvailableNodeTypesRequest['db_use_type'];
                    jobDirection = listAvailableNodeTypesRequest['job_direction'];
                    xLanguage = listAvailableNodeTypesRequest['X-Language'];
                    isUseSelloutInfo = listAvailableNodeTypesRequest['is_use_sellout_info'];
                    isMultiWrite = listAvailableNodeTypesRequest['is_multi_write'];
                }
            }

        
            if (engineType === null || engineType === undefined) {
                throw new RequiredError('engineType','Required parameter engineType was null or undefined when calling listAvailableNodeTypes.');
            }
            if (engineType !== null && engineType !== undefined) {
                localVarQueryParameter['engine_type'] = engineType;
            }
            if (dbUseType === null || dbUseType === undefined) {
                throw new RequiredError('dbUseType','Required parameter dbUseType was null or undefined when calling listAvailableNodeTypes.');
            }
            if (dbUseType !== null && dbUseType !== undefined) {
                localVarQueryParameter['db_use_type'] = dbUseType;
            }
            if (jobDirection === null || jobDirection === undefined) {
                throw new RequiredError('jobDirection','Required parameter jobDirection was null or undefined when calling listAvailableNodeTypes.');
            }
            if (jobDirection !== null && jobDirection !== undefined) {
                localVarQueryParameter['job_direction'] = jobDirection;
            }
            if (isUseSelloutInfo !== null && isUseSelloutInfo !== undefined) {
                localVarQueryParameter['is_use_sellout_info'] = isUseSelloutInfo;
            }
            if (isMultiWrite !== null && isMultiWrite !== undefined) {
                localVarQueryParameter['is_multi_write'] = isMultiWrite;
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询规格未售罄的可用区
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAvailableZone(listAvailableZoneRequest?: ListAvailableZoneRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/available-zone",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xLanguage;

            if (listAvailableZoneRequest !== null && listAvailableZoneRequest !== undefined) {
                if (listAvailableZoneRequest instanceof ListAvailableZoneRequest) {
                    body = listAvailableZoneRequest.body
                    xLanguage = listAvailableZoneRequest.xLanguage;
                } else {
                    body = listAvailableZoneRequest['body'];
                    xLanguage = listAvailableZoneRequest['X-Language'];
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
         * 查询对比结果。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listCompareResult(listCompareResultRequest?: ListCompareResultRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/jobs/query-compare-result",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xLanguage;

            if (listCompareResultRequest !== null && listCompareResultRequest !== undefined) {
                if (listCompareResultRequest instanceof ListCompareResultRequest) {
                    body = listCompareResultRequest.body
                    xLanguage = listCompareResultRequest.xLanguage;
                } else {
                    body = listCompareResultRequest['body'];
                    xLanguage = listCompareResultRequest['X-Language'];
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
         * 查询内容对比详情
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listContentCompareDetail(listContentCompareDetailRequest?: ListContentCompareDetailRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/jobs/{job_id}/compare/{compare_job_id}/content-detail",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let jobId;
            
            let compareJobId;
            
            let xLanguage;
            
            let targetDbName;
            
            let dbName;
            
            let type;
            
            let limit;
            
            let offset;

            if (listContentCompareDetailRequest !== null && listContentCompareDetailRequest !== undefined) {
                if (listContentCompareDetailRequest instanceof ListContentCompareDetailRequest) {
                    jobId = listContentCompareDetailRequest.jobId;
                    compareJobId = listContentCompareDetailRequest.compareJobId;
                    xLanguage = listContentCompareDetailRequest.xLanguage;
                    targetDbName = listContentCompareDetailRequest.targetDbName;
                    dbName = listContentCompareDetailRequest.dbName;
                    type = listContentCompareDetailRequest.type;
                    limit = listContentCompareDetailRequest.limit;
                    offset = listContentCompareDetailRequest.offset;
                } else {
                    jobId = listContentCompareDetailRequest['job_id'];
                    compareJobId = listContentCompareDetailRequest['compare_job_id'];
                    xLanguage = listContentCompareDetailRequest['X-Language'];
                    targetDbName = listContentCompareDetailRequest['target_db_name'];
                    dbName = listContentCompareDetailRequest['db_name'];
                    type = listContentCompareDetailRequest['type'];
                    limit = listContentCompareDetailRequest['limit'];
                    offset = listContentCompareDetailRequest['offset'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling listContentCompareDetail.');
            }
            if (compareJobId === null || compareJobId === undefined) {
            throw new RequiredError('compareJobId','Required parameter compareJobId was null or undefined when calling listContentCompareDetail.');
            }
            if (targetDbName !== null && targetDbName !== undefined) {
                localVarQueryParameter['target_db_name'] = targetDbName;
            }
            if (dbName !== null && dbName !== undefined) {
                localVarQueryParameter['db_name'] = dbName;
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'job_id': jobId,'compare_job_id': compareJobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询内容对比差异。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listContentCompareDifference(listContentCompareDifferenceRequest?: ListContentCompareDifferenceRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/jobs/{job_id}/compare/{compare_job_id}/content-difference",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let jobId;
            
            let compareJobId;
            
            let xLanguage;
            
            let tableName;
            
            let dbName;
            
            let limit;
            
            let offset;

            if (listContentCompareDifferenceRequest !== null && listContentCompareDifferenceRequest !== undefined) {
                if (listContentCompareDifferenceRequest instanceof ListContentCompareDifferenceRequest) {
                    jobId = listContentCompareDifferenceRequest.jobId;
                    compareJobId = listContentCompareDifferenceRequest.compareJobId;
                    xLanguage = listContentCompareDifferenceRequest.xLanguage;
                    tableName = listContentCompareDifferenceRequest.tableName;
                    dbName = listContentCompareDifferenceRequest.dbName;
                    limit = listContentCompareDifferenceRequest.limit;
                    offset = listContentCompareDifferenceRequest.offset;
                } else {
                    jobId = listContentCompareDifferenceRequest['job_id'];
                    compareJobId = listContentCompareDifferenceRequest['compare_job_id'];
                    xLanguage = listContentCompareDifferenceRequest['X-Language'];
                    tableName = listContentCompareDifferenceRequest['table_name'];
                    dbName = listContentCompareDifferenceRequest['db_name'];
                    limit = listContentCompareDifferenceRequest['limit'];
                    offset = listContentCompareDifferenceRequest['offset'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling listContentCompareDifference.');
            }
            if (compareJobId === null || compareJobId === undefined) {
            throw new RequiredError('compareJobId','Required parameter compareJobId was null or undefined when calling listContentCompareDifference.');
            }
            if (tableName !== null && tableName !== undefined) {
                localVarQueryParameter['table_name'] = tableName;
            }
            if (dbName !== null && dbName !== undefined) {
                localVarQueryParameter['db_name'] = dbName;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'job_id': jobId,'compare_job_id': compareJobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询内容对比总览。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listContentCompareOverview(listContentCompareOverviewRequest?: ListContentCompareOverviewRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/jobs/{job_id}/compare/{compare_job_id}/content-overview",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let jobId;
            
            let compareJobId;
            
            let xLanguage;
            
            let limit;
            
            let offset;

            if (listContentCompareOverviewRequest !== null && listContentCompareOverviewRequest !== undefined) {
                if (listContentCompareOverviewRequest instanceof ListContentCompareOverviewRequest) {
                    jobId = listContentCompareOverviewRequest.jobId;
                    compareJobId = listContentCompareOverviewRequest.compareJobId;
                    xLanguage = listContentCompareOverviewRequest.xLanguage;
                    limit = listContentCompareOverviewRequest.limit;
                    offset = listContentCompareOverviewRequest.offset;
                } else {
                    jobId = listContentCompareOverviewRequest['job_id'];
                    compareJobId = listContentCompareOverviewRequest['compare_job_id'];
                    xLanguage = listContentCompareOverviewRequest['X-Language'];
                    limit = listContentCompareOverviewRequest['limit'];
                    offset = listContentCompareOverviewRequest['offset'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling listContentCompareOverview.');
            }
            if (compareJobId === null || compareJobId === undefined) {
            throw new RequiredError('compareJobId','Required parameter compareJobId was null or undefined when calling listContentCompareOverview.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'job_id': jobId,'compare_job_id': compareJobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询行数对比详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listDataCompareDetail(listDataCompareDetailRequest?: ListDataCompareDetailRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/jobs/{job_id}/compare/{compare_job_id}/line-detail",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let jobId;
            
            let compareJobId;
            
            let xLanguage;
            
            let status;
            
            let type;
            
            let dbName;
            
            let targetDbName;
            
            let queryTbName;
            
            let limit;
            
            let offset;

            if (listDataCompareDetailRequest !== null && listDataCompareDetailRequest !== undefined) {
                if (listDataCompareDetailRequest instanceof ListDataCompareDetailRequest) {
                    jobId = listDataCompareDetailRequest.jobId;
                    compareJobId = listDataCompareDetailRequest.compareJobId;
                    xLanguage = listDataCompareDetailRequest.xLanguage;
                    status = listDataCompareDetailRequest.status;
                    type = listDataCompareDetailRequest.type;
                    dbName = listDataCompareDetailRequest.dbName;
                    targetDbName = listDataCompareDetailRequest.targetDbName;
                    queryTbName = listDataCompareDetailRequest.queryTbName;
                    limit = listDataCompareDetailRequest.limit;
                    offset = listDataCompareDetailRequest.offset;
                } else {
                    jobId = listDataCompareDetailRequest['job_id'];
                    compareJobId = listDataCompareDetailRequest['compare_job_id'];
                    xLanguage = listDataCompareDetailRequest['X-Language'];
                    status = listDataCompareDetailRequest['status'];
                    type = listDataCompareDetailRequest['type'];
                    dbName = listDataCompareDetailRequest['db_name'];
                    targetDbName = listDataCompareDetailRequest['target_db_name'];
                    queryTbName = listDataCompareDetailRequest['query_tb_name'];
                    limit = listDataCompareDetailRequest['limit'];
                    offset = listDataCompareDetailRequest['offset'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling listDataCompareDetail.');
            }
            if (compareJobId === null || compareJobId === undefined) {
            throw new RequiredError('compareJobId','Required parameter compareJobId was null or undefined when calling listDataCompareDetail.');
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }
            if (dbName !== null && dbName !== undefined) {
                localVarQueryParameter['db_name'] = dbName;
            }
            if (targetDbName !== null && targetDbName !== undefined) {
                localVarQueryParameter['target_db_name'] = targetDbName;
            }
            if (queryTbName !== null && queryTbName !== undefined) {
                localVarQueryParameter['query_tb_name'] = queryTbName;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'job_id': jobId,'compare_job_id': compareJobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询行数对比总览。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listDataCompareOverview(listDataCompareOverviewRequest?: ListDataCompareOverviewRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/jobs/{job_id}/compare/{compare_job_id}/line-overview",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let jobId;
            
            let compareJobId;
            
            let xLanguage;
            
            let status;
            
            let limit;
            
            let offset;

            if (listDataCompareOverviewRequest !== null && listDataCompareOverviewRequest !== undefined) {
                if (listDataCompareOverviewRequest instanceof ListDataCompareOverviewRequest) {
                    jobId = listDataCompareOverviewRequest.jobId;
                    compareJobId = listDataCompareOverviewRequest.compareJobId;
                    xLanguage = listDataCompareOverviewRequest.xLanguage;
                    status = listDataCompareOverviewRequest.status;
                    limit = listDataCompareOverviewRequest.limit;
                    offset = listDataCompareOverviewRequest.offset;
                } else {
                    jobId = listDataCompareOverviewRequest['job_id'];
                    compareJobId = listDataCompareOverviewRequest['compare_job_id'];
                    xLanguage = listDataCompareOverviewRequest['X-Language'];
                    status = listDataCompareOverviewRequest['status'];
                    limit = listDataCompareOverviewRequest['limit'];
                    offset = listDataCompareOverviewRequest['offset'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling listDataCompareOverview.');
            }
            if (compareJobId === null || compareJobId === undefined) {
            throw new RequiredError('compareJobId','Required parameter compareJobId was null or undefined when calling listDataCompareOverview.');
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
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'job_id': jobId,'compare_job_id': compareJobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询数据级表对比任务列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listDataLevelTableCompareJobs(listDataLevelTableCompareJobsRequest?: ListDataLevelTableCompareJobsRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/jobs/{job_id}/table/compare",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let jobId;
            
            let xLanguage;
            
            let limit;
            
            let offset;

            if (listDataLevelTableCompareJobsRequest !== null && listDataLevelTableCompareJobsRequest !== undefined) {
                if (listDataLevelTableCompareJobsRequest instanceof ListDataLevelTableCompareJobsRequest) {
                    jobId = listDataLevelTableCompareJobsRequest.jobId;
                    xLanguage = listDataLevelTableCompareJobsRequest.xLanguage;
                    limit = listDataLevelTableCompareJobsRequest.limit;
                    offset = listDataLevelTableCompareJobsRequest.offset;
                } else {
                    jobId = listDataLevelTableCompareJobsRequest['job_id'];
                    xLanguage = listDataLevelTableCompareJobsRequest['X-Language'];
                    limit = listDataLevelTableCompareJobsRequest['limit'];
                    offset = listDataLevelTableCompareJobsRequest['offset'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling listDataLevelTableCompareJobs.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'job_id': jobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询对象对比任务详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listObejectLevelCompareDetail(listObejectLevelCompareDetailRequest?: ListObejectLevelCompareDetailRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/jobs/{job_id}/object/compare/{compare_type}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let jobId;
            
            let compareType;
            
            let xLanguage;
            
            let compareJobId;
            
            let limit;
            
            let offset;

            if (listObejectLevelCompareDetailRequest !== null && listObejectLevelCompareDetailRequest !== undefined) {
                if (listObejectLevelCompareDetailRequest instanceof ListObejectLevelCompareDetailRequest) {
                    jobId = listObejectLevelCompareDetailRequest.jobId;
                    compareType = listObejectLevelCompareDetailRequest.compareType;
                    xLanguage = listObejectLevelCompareDetailRequest.xLanguage;
                    compareJobId = listObejectLevelCompareDetailRequest.compareJobId;
                    limit = listObejectLevelCompareDetailRequest.limit;
                    offset = listObejectLevelCompareDetailRequest.offset;
                } else {
                    jobId = listObejectLevelCompareDetailRequest['job_id'];
                    compareType = listObejectLevelCompareDetailRequest['compare_type'];
                    xLanguage = listObejectLevelCompareDetailRequest['X-Language'];
                    compareJobId = listObejectLevelCompareDetailRequest['compare_job_id'];
                    limit = listObejectLevelCompareDetailRequest['limit'];
                    offset = listObejectLevelCompareDetailRequest['offset'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling listObejectLevelCompareDetail.');
            }
            if (compareType === null || compareType === undefined) {
            throw new RequiredError('compareType','Required parameter compareType was null or undefined when calling listObejectLevelCompareDetail.');
            }
            if (compareJobId !== null && compareJobId !== undefined) {
                localVarQueryParameter['compare_job_id'] = compareJobId;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'job_id': jobId,'compare_type': compareType, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询对象对比任务概览。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listObejectLevelCompareOverview(listObejectLevelCompareOverviewRequest?: ListObejectLevelCompareOverviewRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/jobs/{job_id}/object/compare",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let jobId;
            
            let xLanguage;

            if (listObejectLevelCompareOverviewRequest !== null && listObejectLevelCompareOverviewRequest !== undefined) {
                if (listObejectLevelCompareOverviewRequest instanceof ListObejectLevelCompareOverviewRequest) {
                    jobId = listObejectLevelCompareOverviewRequest.jobId;
                    xLanguage = listObejectLevelCompareOverviewRequest.xLanguage;
                } else {
                    jobId = listObejectLevelCompareOverviewRequest['job_id'];
                    xLanguage = listObejectLevelCompareOverviewRequest['X-Language'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling listObejectLevelCompareOverview.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.pathParams = { 'job_id': jobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 数据库的迁移过程中，迁移用户需要进行单独处理，该接口可以查询源库的用户信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listUsers(listUsersRequest?: ListUsersRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/jobs/{job_id}/get-src-user",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let jobId;
            
            let xLanguage;

            if (listUsersRequest !== null && listUsersRequest !== undefined) {
                if (listUsersRequest instanceof ListUsersRequest) {
                    jobId = listUsersRequest.jobId;
                    xLanguage = listUsersRequest.xLanguage;
                } else {
                    jobId = listUsersRequest['job_id'];
                    xLanguage = listUsersRequest['X-Language'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling listUsers.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.pathParams = { 'job_id': jobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新任务的LTS配置。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        modifyGroupAndStream(modifyGroupAndStreamRequest?: ModifyGroupAndStreamRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/jobs/{job_id}/lts-log-switch",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let jobId;
            
            let xLanguage;

            if (modifyGroupAndStreamRequest !== null && modifyGroupAndStreamRequest !== undefined) {
                if (modifyGroupAndStreamRequest instanceof ModifyGroupAndStreamRequest) {
                    jobId = modifyGroupAndStreamRequest.jobId;
                    body = modifyGroupAndStreamRequest.body
                    xLanguage = modifyGroupAndStreamRequest.xLanguage;
                } else {
                    jobId = modifyGroupAndStreamRequest['job_id'];
                    body = modifyGroupAndStreamRequest['body'];
                    xLanguage = modifyGroupAndStreamRequest['X-Language'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling modifyGroupAndStream.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'job_id': jobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询高级设置参数。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        queryTuningParams(queryTuningParamsRequest?: QueryTuningParamsRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/job/{job_id}/tuning-params/query-params",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let jobId;
            
            let xLanguage;

            if (queryTuningParamsRequest !== null && queryTuningParamsRequest !== undefined) {
                if (queryTuningParamsRequest instanceof QueryTuningParamsRequest) {
                    jobId = queryTuningParamsRequest.jobId;
                    xLanguage = queryTuningParamsRequest.xLanguage;
                } else {
                    jobId = queryTuningParamsRequest['job_id'];
                    xLanguage = queryTuningParamsRequest['X-Language'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling queryTuningParams.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.pathParams = { 'job_id': jobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询任务的LTS配置。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        selectGroupAndStream(selectGroupAndStreamRequest?: SelectGroupAndStreamRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/jobs/{job_id}/lts-log-switch",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let jobId;
            
            let xLanguage;

            if (selectGroupAndStreamRequest !== null && selectGroupAndStreamRequest !== undefined) {
                if (selectGroupAndStreamRequest instanceof SelectGroupAndStreamRequest) {
                    jobId = selectGroupAndStreamRequest.jobId;
                    xLanguage = selectGroupAndStreamRequest.xLanguage;
                } else {
                    jobId = selectGroupAndStreamRequest['job_id'];
                    xLanguage = selectGroupAndStreamRequest['X-Language'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling selectGroupAndStream.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.pathParams = { 'job_id': jobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询租户任务列表，可以根据引擎类型，网络类型，任务状态，任务名称，任务ID进行查询。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showJobList(showJobListRequest?: ShowJobListRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/jobs",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xLanguage;

            if (showJobListRequest !== null && showJobListRequest !== undefined) {
                if (showJobListRequest instanceof ShowJobListRequest) {
                    body = showJobListRequest.body
                    xLanguage = showJobListRequest.xLanguage;
                } else {
                    body = showJobListRequest['body'];
                    xLanguage = showJobListRequest['X-Language'];
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
         * 根据任务ID查询容灾监控数据。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showMonitoringData(showMonitoringDataRequest?: ShowMonitoringDataRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/jobs/disaster-recovery-monitoring-data",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xLanguage;

            if (showMonitoringDataRequest !== null && showMonitoringDataRequest !== undefined) {
                if (showMonitoringDataRequest instanceof ShowMonitoringDataRequest) {
                    body = showMonitoringDataRequest.body
                    xLanguage = showMonitoringDataRequest.xLanguage;
                } else {
                    body = showMonitoringDataRequest['body'];
                    xLanguage = showMonitoringDataRequest['X-Language'];
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
         * 查询单租户在某一项目下DRS服务下的配额信息。
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
         * 立即启动数据级表对比任务。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        startPromptlyDataLevelTableCompareJob(startPromptlyDataLevelTableCompareJobRequest?: StartPromptlyDataLevelTableCompareJobRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/jobs/{job_id}/table/compare/{compare_job_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let jobId;
            
            let compareJobId;
            
            let xLanguage;

            if (startPromptlyDataLevelTableCompareJobRequest !== null && startPromptlyDataLevelTableCompareJobRequest !== undefined) {
                if (startPromptlyDataLevelTableCompareJobRequest instanceof StartPromptlyDataLevelTableCompareJobRequest) {
                    jobId = startPromptlyDataLevelTableCompareJobRequest.jobId;
                    compareJobId = startPromptlyDataLevelTableCompareJobRequest.compareJobId;
                    xLanguage = startPromptlyDataLevelTableCompareJobRequest.xLanguage;
                } else {
                    jobId = startPromptlyDataLevelTableCompareJobRequest['job_id'];
                    compareJobId = startPromptlyDataLevelTableCompareJobRequest['compare_job_id'];
                    xLanguage = startPromptlyDataLevelTableCompareJobRequest['X-Language'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling startPromptlyDataLevelTableCompareJob.');
            }
            if (compareJobId === null || compareJobId === undefined) {
            throw new RequiredError('compareJobId','Required parameter compareJobId was null or undefined when calling startPromptlyDataLevelTableCompareJob.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.pathParams = { 'job_id': jobId,'compare_job_id': compareJobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改数据库参数。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateParams(updateParamsRequest?: UpdateParamsRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/jobs/{job_id}/params",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let jobId;
            
            let xLanguage;

            if (updateParamsRequest !== null && updateParamsRequest !== undefined) {
                if (updateParamsRequest instanceof UpdateParamsRequest) {
                    jobId = updateParamsRequest.jobId;
                    body = updateParamsRequest.body
                    xLanguage = updateParamsRequest.xLanguage;
                } else {
                    jobId = updateParamsRequest['job_id'];
                    body = updateParamsRequest['body'];
                    xLanguage = updateParamsRequest['X-Language'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling updateParams.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'job_id': jobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改调优参数的值。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateTuningParams(updateTuningParamsRequest?: UpdateTuningParamsRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/job/{job_id}/tuning-params/modify-params",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let jobId;
            
            let xLanguage;

            if (updateTuningParamsRequest !== null && updateTuningParamsRequest !== undefined) {
                if (updateTuningParamsRequest instanceof UpdateTuningParamsRequest) {
                    jobId = updateTuningParamsRequest.jobId;
                    body = updateTuningParamsRequest.body
                    xLanguage = updateTuningParamsRequest.xLanguage;
                } else {
                    jobId = updateTuningParamsRequest['job_id'];
                    body = updateTuningParamsRequest['body'];
                    xLanguage = updateTuningParamsRequest['X-Language'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling updateTuningParams.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'job_id': jobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
    }
};

function newClient(client: HcClient): DrsClient {
    return new DrsClient(client);
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