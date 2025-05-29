import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { AcceptScriptRequest } from './model/AcceptScriptRequest';
import { AcceptScriptResponse } from './model/AcceptScriptResponse';
import { AddScriptModel } from './model/AddScriptModel';
import { ApplicationInfo } from './model/ApplicationInfo';
import { ApplicationModelQueryResponseData } from './model/ApplicationModelQueryResponseData';
import { ApplicationQueryResponseData } from './model/ApplicationQueryResponseData';
import { ApprovalJobScriptModel } from './model/ApprovalJobScriptModel';
import { AtomicInputModel } from './model/AtomicInputModel';
import { AtomicModel } from './model/AtomicModel';
import { AtomicOutputModel } from './model/AtomicOutputModel';
import { AuthorizableTicketBody } from './model/AuthorizableTicketBody';
import { AuthorizeTicketCommonInfo } from './model/AuthorizeTicketCommonInfo';
import { AuthorizeTicketInfo } from './model/AuthorizeTicketInfo';
import { BaseResponse } from './model/BaseResponse';
import { BatchCreateApplicationViewRequest } from './model/BatchCreateApplicationViewRequest';
import { BatchCreateApplicationViewRequestBody } from './model/BatchCreateApplicationViewRequestBody';
import { BatchCreateApplicationViewRequestBodyApplicationList } from './model/BatchCreateApplicationViewRequestBodyApplicationList';
import { BatchCreateApplicationViewRequestBodyComponentList } from './model/BatchCreateApplicationViewRequestBodyComponentList';
import { BatchCreateApplicationViewRequestBodyGroupList } from './model/BatchCreateApplicationViewRequestBodyGroupList';
import { BatchCreateApplicationViewRequestBodySyncRules } from './model/BatchCreateApplicationViewRequestBodySyncRules';
import { BatchCreateApplicationViewResponse } from './model/BatchCreateApplicationViewResponse';
import { BatchCreateApplicationViewResponseBody } from './model/BatchCreateApplicationViewResponseBody';
import { BatchListMultiCloudResourceResponseData } from './model/BatchListMultiCloudResourceResponseData';
import { BatchListResourceResponseData } from './model/BatchListResourceResponseData';
import { CheckScriptRiskRequest } from './model/CheckScriptRiskRequest';
import { CheckScriptRiskResData } from './model/CheckScriptRiskResData';
import { CheckScriptRiskResDataBlacklistCommands } from './model/CheckScriptRiskResDataBlacklistCommands';
import { CheckScriptRiskResponse } from './model/CheckScriptRiskResponse';
import { CocIssuesTicketDetailInfoResponseData } from './model/CocIssuesTicketDetailInfoResponseData';
import { ComplianceItem } from './model/ComplianceItem';
import { CompliantSummary } from './model/CompliantSummary';
import { ComponentInfo } from './model/ComponentInfo';
import { CountMultiResourcesRequest } from './model/CountMultiResourcesRequest';
import { CountMultiResourcesResponse } from './model/CountMultiResourcesResponse';
import { CreateCocIncidentRequest } from './model/CreateCocIncidentRequest';
import { CreateCocIncidentResponse } from './model/CreateCocIncidentResponse';
import { CreateCocIssuesRequest } from './model/CreateCocIssuesRequest';
import { CreateCocIssuesResponse } from './model/CreateCocIssuesResponse';
import { CreateDocumentRequest } from './model/CreateDocumentRequest';
import { CreateDocumentRequestBody } from './model/CreateDocumentRequestBody';
import { CreateDocumentRequestBodyTags } from './model/CreateDocumentRequestBodyTags';
import { CreateDocumentResponse } from './model/CreateDocumentResponse';
import { CreateExternalIncidentRequest } from './model/CreateExternalIncidentRequest';
import { CreateExternalIncidentResponseData } from './model/CreateExternalIncidentResponseData';
import { CreateExternalIssuesRequest } from './model/CreateExternalIssuesRequest';
import { CreateExternalIssuesResponseData } from './model/CreateExternalIssuesResponseData';
import { CreateReportCustomEventRequest } from './model/CreateReportCustomEventRequest';
import { CreateReportCustomEventResponse } from './model/CreateReportCustomEventResponse';
import { CreateReportPrometheusEventRequest } from './model/CreateReportPrometheusEventRequest';
import { CreateReportPrometheusEventResponse } from './model/CreateReportPrometheusEventResponse';
import { CreateScheduledTaskRequest } from './model/CreateScheduledTaskRequest';
import { CreateScheduledTaskResponse } from './model/CreateScheduledTaskResponse';
import { CreateScriptRequest } from './model/CreateScriptRequest';
import { CreateScriptResponse } from './model/CreateScriptResponse';
import { CreateWarRoomRequest } from './model/CreateWarRoomRequest';
import { CreateWarRoomRequestBody } from './model/CreateWarRoomRequestBody';
import { CreateWarRoomResponse } from './model/CreateWarRoomResponse';
import { Customttribute } from './model/Customttribute';
import { DeleteDocumentRequest } from './model/DeleteDocumentRequest';
import { DeleteDocumentResponse } from './model/DeleteDocumentResponse';
import { DeleteScheduledTaskRequest } from './model/DeleteScheduledTaskRequest';
import { DeleteScheduledTaskResponse } from './model/DeleteScheduledTaskResponse';
import { DeleteScriptRequest } from './model/DeleteScriptRequest';
import { DeleteScriptResponse } from './model/DeleteScriptResponse';
import { DisableScheduledTaskRequest } from './model/DisableScheduledTaskRequest';
import { DisableScheduledTaskResponse } from './model/DisableScheduledTaskResponse';
import { DocumentVersionVo } from './model/DocumentVersionVo';
import { EditScriptModel } from './model/EditScriptModel';
import { EnableScheduledTaskRequest } from './model/EnableScheduledTaskRequest';
import { EnableScheduledTaskRequestBody } from './model/EnableScheduledTaskRequestBody';
import { EnableScheduledTaskResponse } from './model/EnableScheduledTaskResponse';
import { EnumDataInfo } from './model/EnumDataInfo';
import { ExcutionStep } from './model/ExcutionStep';
import { ExcutionStepInputs } from './model/ExcutionStepInputs';
import { ExectionInstanceModel } from './model/ExectionInstanceModel';
import { ExectuionStatistic } from './model/ExectuionStatistic';
import { ExecuteDocumentRequest } from './model/ExecuteDocumentRequest';
import { ExecuteDocumentRequsetBody } from './model/ExecuteDocumentRequsetBody';
import { ExecuteDocumentRequsetBodyParameters } from './model/ExecuteDocumentRequsetBodyParameters';
import { ExecuteDocumentRequsetBodySysTags } from './model/ExecuteDocumentRequsetBodySysTags';
import { ExecuteDocumentRequsetBodyTargets } from './model/ExecuteDocumentRequsetBodyTargets';
import { ExecuteDocumentResponse } from './model/ExecuteDocumentResponse';
import { ExecuteInstancesBatchInfo } from './model/ExecuteInstancesBatchInfo';
import { ExecutePublicScriptRequest } from './model/ExecutePublicScriptRequest';
import { ExecutePublicScriptResponse } from './model/ExecutePublicScriptResponse';
import { ExecuteResourceInstance } from './model/ExecuteResourceInstance';
import { ExecuteScriptRequest } from './model/ExecuteScriptRequest';
import { ExecuteScriptResponse } from './model/ExecuteScriptResponse';
import { ExecutionSummary } from './model/ExecutionSummary';
import { ExtraFieldInfo } from './model/ExtraFieldInfo';
import { GetDocumentAtomicInfoRequest } from './model/GetDocumentAtomicInfoRequest';
import { GetDocumentAtomicInfoResponse } from './model/GetDocumentAtomicInfoResponse';
import { GetDocumentRequest } from './model/GetDocumentRequest';
import { GetDocumentResponse } from './model/GetDocumentResponse';
import { GetExecutionRequest } from './model/GetExecutionRequest';
import { GetExecutionResponse } from './model/GetExecutionResponse';
import { GetPublicScriptRequest } from './model/GetPublicScriptRequest';
import { GetPublicScriptResponse } from './model/GetPublicScriptResponse';
import { GetScriptJobBatchRequest } from './model/GetScriptJobBatchRequest';
import { GetScriptJobBatchResponse } from './model/GetScriptJobBatchResponse';
import { GetScriptJobInfoRequest } from './model/GetScriptJobInfoRequest';
import { GetScriptJobInfoResponse } from './model/GetScriptJobInfoResponse';
import { GetScriptJobStatisticsRequest } from './model/GetScriptJobStatisticsRequest';
import { GetScriptJobStatisticsResponse } from './model/GetScriptJobStatisticsResponse';
import { GetScriptRequest } from './model/GetScriptRequest';
import { GetScriptResponse } from './model/GetScriptResponse';
import { GroupInfo } from './model/GroupInfo';
import { HandleCocIncidentRequest } from './model/HandleCocIncidentRequest';
import { HandleCocIncidentResponse } from './model/HandleCocIncidentResponse';
import { HandleExternalIncidentRequest } from './model/HandleExternalIncidentRequest';
import { HandleExternalIncidentResponseData } from './model/HandleExternalIncidentResponseData';
import { IncidentTicketInfoResponseData } from './model/IncidentTicketInfoResponseData';
import { InstanceCompliant } from './model/InstanceCompliant';
import { InstancesBatchResultMode } from './model/InstancesBatchResultMode';
import { InstancesBatchesMode } from './model/InstancesBatchesMode';
import { JobScriptAnalyzeRequest } from './model/JobScriptAnalyzeRequest';
import { JobScriptBatchDetailModel } from './model/JobScriptBatchDetailModel';
import { JobScriptBatchListModel } from './model/JobScriptBatchListModel';
import { JobScriptOrderInfoModel } from './model/JobScriptOrderInfoModel';
import { JobScriptOrderInfoProp } from './model/JobScriptOrderInfoProp';
import { JobScriptOrderListModel } from './model/JobScriptOrderListModel';
import { JobScriptOrderListPage } from './model/JobScriptOrderListPage';
import { JobScriptOrderListProp } from './model/JobScriptOrderListProp';
import { JobScriptOrderOperationBody } from './model/JobScriptOrderOperationBody';
import { JobScriptOrderStatisticsModel } from './model/JobScriptOrderStatisticsModel';
import { ListApplicationModelRequest } from './model/ListApplicationModelRequest';
import { ListApplicationModelResponse } from './model/ListApplicationModelResponse';
import { ListApplicationsRequest } from './model/ListApplicationsRequest';
import { ListApplicationsResponse } from './model/ListApplicationsResponse';
import { ListAuthorizableTicketsExternalRequest } from './model/ListAuthorizableTicketsExternalRequest';
import { ListAuthorizableTicketsExternalResponse } from './model/ListAuthorizableTicketsExternalResponse';
import { ListAuthorizableTicketsReq } from './model/ListAuthorizableTicketsReq';
import { ListBaseRequest } from './model/ListBaseRequest';
import { ListBaseResponse } from './model/ListBaseResponse';
import { ListCocTicketOperationHistoriesRequest } from './model/ListCocTicketOperationHistoriesRequest';
import { ListCocTicketOperationHistoriesResponse } from './model/ListCocTicketOperationHistoriesResponse';
import { ListDocumentAtomicsRequest } from './model/ListDocumentAtomicsRequest';
import { ListDocumentAtomicsResponse } from './model/ListDocumentAtomicsResponse';
import { ListDocumentsRequest } from './model/ListDocumentsRequest';
import { ListDocumentsResponse } from './model/ListDocumentsResponse';
import { ListExecutionInstancesRequest } from './model/ListExecutionInstancesRequest';
import { ListExecutionInstancesResponse } from './model/ListExecutionInstancesResponse';
import { ListExecutionResponseData } from './model/ListExecutionResponseData';
import { ListExecutionResponseParameters } from './model/ListExecutionResponseParameters';
import { ListExecutionStepsRequest } from './model/ListExecutionStepsRequest';
import { ListExecutionStepsResponse } from './model/ListExecutionStepsResponse';
import { ListExecutionsRequest } from './model/ListExecutionsRequest';
import { ListExecutionsResponse } from './model/ListExecutionsResponse';
import { ListInstanceCompliantRequest } from './model/ListInstanceCompliantRequest';
import { ListInstanceCompliantResponse } from './model/ListInstanceCompliantResponse';
import { ListInstancesBatchRequest } from './model/ListInstancesBatchRequest';
import { ListInstancesBatchResponse } from './model/ListInstancesBatchResponse';
import { ListMultiCloudResourcesRequest } from './model/ListMultiCloudResourcesRequest';
import { ListMultiCloudResourcesResponse } from './model/ListMultiCloudResourcesResponse';
import { ListPublicScriptsRequest } from './model/ListPublicScriptsRequest';
import { ListPublicScriptsResponse } from './model/ListPublicScriptsResponse';
import { ListResourceRequest } from './model/ListResourceRequest';
import { ListResourceResponse } from './model/ListResourceResponse';
import { ListScheduledTaskHistoryRequest } from './model/ListScheduledTaskHistoryRequest';
import { ListScheduledTaskHistoryResponse } from './model/ListScheduledTaskHistoryResponse';
import { ListScheduledTaskRequest } from './model/ListScheduledTaskRequest';
import { ListScheduledTaskResponse } from './model/ListScheduledTaskResponse';
import { ListScriptJobBatchesRequest } from './model/ListScriptJobBatchesRequest';
import { ListScriptJobBatchesResponse } from './model/ListScriptJobBatchesResponse';
import { ListScriptJobsRequest } from './model/ListScriptJobsRequest';
import { ListScriptJobsResponse } from './model/ListScriptJobsResponse';
import { ListScriptResourceTagsRequest } from './model/ListScriptResourceTagsRequest';
import { ListScriptResourceTagsResponse } from './model/ListScriptResourceTagsResponse';
import { ListScriptsRequest } from './model/ListScriptsRequest';
import { ListScriptsResponse } from './model/ListScriptsResponse';
import { ListTenantWarRoomRequestBody } from './model/ListTenantWarRoomRequestBody';
import { ListTicketParams } from './model/ListTicketParams';
import { ListWarRoomsRequest } from './model/ListWarRoomsRequest';
import { ListWarRoomsResponse } from './model/ListWarRoomsResponse';
import { MessageNotification } from './model/MessageNotification';
import { NonCompliantSummary } from './model/NonCompliantSummary';
import { ObjectFilter } from './model/ObjectFilter';
import { OperateExecutionRequest } from './model/OperateExecutionRequest';
import { OperateExecutionRequestBody } from './model/OperateExecutionRequestBody';
import { OperateExecutionResponse } from './model/OperateExecutionResponse';
import { OperateScriptJobRequest } from './model/OperateScriptJobRequest';
import { OperateScriptJobResponse } from './model/OperateScriptJobResponse';
import { OpsflowBaseResponse } from './model/OpsflowBaseResponse';
import { PatchDetail } from './model/PatchDetail';
import { PublicScriptDetailModel } from './model/PublicScriptDetailModel';
import { PublicScriptListModel } from './model/PublicScriptListModel';
import { PublicScriptListPage } from './model/PublicScriptListPage';
import { PublicScriptPropertiesModel } from './model/PublicScriptPropertiesModel';
import { ReportCustomEventRequestBody } from './model/ReportCustomEventRequestBody';
import { ResourceInstance } from './model/ResourceInstance';
import { ResourceInstanceProp } from './model/ResourceInstanceProp';
import { ResourceMultiCountResponseData } from './model/ResourceMultiCountResponseData';
import { ResourceQuery } from './model/ResourceQuery';
import { ResourceTag } from './model/ResourceTag';
import { ReviewerInfo } from './model/ReviewerInfo';
import { ScheduleGroupInfo } from './model/ScheduleGroupInfo';
import { ScheduleInstance } from './model/ScheduleInstance';
import { ScheduledTaskBasicInfo } from './model/ScheduledTaskBasicInfo';
import { ScheduledTaskHistory } from './model/ScheduledTaskHistory';
import { ScheduledTaskRequestBody } from './model/ScheduledTaskRequestBody';
import { ScriptDetailModel } from './model/ScriptDetailModel';
import { ScriptExecuteInputParam } from './model/ScriptExecuteInputParam';
import { ScriptExecuteModel } from './model/ScriptExecuteModel';
import { ScriptExecuteParam } from './model/ScriptExecuteParam';
import { ScriptExecuteParamReference } from './model/ScriptExecuteParamReference';
import { ScriptListModel } from './model/ScriptListModel';
import { ScriptListPage } from './model/ScriptListPage';
import { ScriptParamDefine } from './model/ScriptParamDefine';
import { ScriptPropertiesModel } from './model/ScriptPropertiesModel';
import { ScriptTag } from './model/ScriptTag';
import { SeveritySummary } from './model/SeveritySummary';
import { ShowCocIncidentDetailRequest } from './model/ShowCocIncidentDetailRequest';
import { ShowCocIncidentDetailResponse } from './model/ShowCocIncidentDetailResponse';
import { ShowCocIssuesDetailRequest } from './model/ShowCocIssuesDetailRequest';
import { ShowCocIssuesDetailResponse } from './model/ShowCocIssuesDetailResponse';
import { ShowInstancePatchItemsRequest } from './model/ShowInstancePatchItemsRequest';
import { ShowInstancePatchItemsResponse } from './model/ShowInstancePatchItemsResponse';
import { ShowScheduledTaskRequest } from './model/ShowScheduledTaskRequest';
import { ShowScheduledTaskResponse } from './model/ShowScheduledTaskResponse';
import { SyncResourceReq } from './model/SyncResourceReq';
import { SyncResourceRequest } from './model/SyncResourceRequest';
import { SyncResourceResponse } from './model/SyncResourceResponse';
import { Tag } from './model/Tag';
import { Target } from './model/Target';
import { TargetResource } from './model/TargetResource';
import { TicketHistoryInfo } from './model/TicketHistoryInfo';
import { TicketInfo } from './model/TicketInfo';
import { TicketInfoEnumData } from './model/TicketInfoEnumData';
import { TicketInformation } from './model/TicketInformation';
import { TriggerTime } from './model/TriggerTime';
import { UpdateDocumentRequest } from './model/UpdateDocumentRequest';
import { UpdateDocumentResponse } from './model/UpdateDocumentResponse';
import { UpdateResourceTagsRequest } from './model/UpdateResourceTagsRequest';
import { UpdateResourceTagsRequestBody } from './model/UpdateResourceTagsRequestBody';
import { UpdateResourceTagsResponse } from './model/UpdateResourceTagsResponse';
import { UpdateRunbookRequestBody } from './model/UpdateRunbookRequestBody';
import { UpdateScheduledTaskRequest } from './model/UpdateScheduledTaskRequest';
import { UpdateScheduledTaskResponse } from './model/UpdateScheduledTaskResponse';
import { UpdateScriptRequest } from './model/UpdateScriptRequest';
import { UpdateScriptResponse } from './model/UpdateScriptResponse';
import { UpdateTicketHistoryInfo } from './model/UpdateTicketHistoryInfo';
import { WarRoomEnumeration } from './model/WarRoomEnumeration';
import { WarRoomIncident } from './model/WarRoomIncident';
import { WarRoomTenantInfo } from './model/WarRoomTenantInfo';
import { WarRoomTenantInfoImpactedApplication } from './model/WarRoomTenantInfoImpactedApplication';
import { WarRoomTenantInfoRegions } from './model/WarRoomTenantInfoRegions';

export class CocClient {
    public static newBuilder(): ClientBuilder<CocClient> {
            let client = new ClientBuilder<CocClient>(newClient, 'GlobalCredentials,BasicCredentials');
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
     * 查询应用
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询应用
     * @param {number} limit 最大的返回数量
     * @param {Array<string>} [idList] id列表
     * @param {string} [parentId] parent id
     * @param {string} [nameLike] 应用名称模糊匹配
     * @param {string} [code] 应用code
     * @param {string} [marker] 分页参数，上一页请求最后一个id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listApplications(listApplicationsRequest?: ListApplicationsRequest): Promise<ListApplicationsResponse> {
        const options = ParamCreater().listApplications(listApplicationsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询下一级的子应用、组件、分组
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询下一级的子应用、组件、分组
     * @param {string} [applicationId] 应用id
     * @param {string} [componentId] 组件id
     * @param {number} [limit] 最大的返回数量
     * @param {string} [marker] 分页参数，上一页请求最后一个id
     * @param {number} [pageNo] 分页页码
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listApplicationModel(listApplicationModelRequest?: ListApplicationModelRequest): Promise<ListApplicationModelResponse> {
        const options = ParamCreater().listApplicationModel(listApplicationModelRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量创建应用视图
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量创建应用视图
     * @param {BatchCreateApplicationViewRequestBody} [batchCreateApplicationViewRequestBody] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchCreateApplicationView(batchCreateApplicationViewRequest?: BatchCreateApplicationViewRequest): Promise<BatchCreateApplicationViewResponse> {
        const options = ParamCreater().batchCreateApplicationView(batchCreateApplicationViewRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 分页获取节点合规性报告
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取节点合规性报告
     * @param {string} [enterpriseProjectId] 企业项目id
     * @param {string} [name] 名称
     * @param {string} [instanceId] ECS实例id
     * @param {string} [ip] 内网ip
     * @param {string} [eip] 弹性公网ip
     * @param {string} [operatingSystem] 操作系统 - HuaweiCloudEulerOS - CentOS - EulerOS
     * @param {string} [region] 区域
     * @param {string} [group] 分组
     * @param {string} [compliantStatus] 合规性状态 - non_compliant：不合规 - compliant：合规
     * @param {string} [orderId] 工单id
     * @param {number} [offset] 偏移量
     * @param {number} [limit] 每页数量
     * @param {string} [sortDir] 排序 - asc：升序 - desc：降序
     * @param {string} [sortKey] 排序字段 - report_time：报告时间
     * @param {string} [reportScene] 报告场景 - CCE  - ECS
     * @param {string} [cceInfoId] cce 集群信息id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listInstanceCompliant(listInstanceCompliantRequest?: ListInstanceCompliantRequest): Promise<ListInstanceCompliantResponse> {
        const options = ParamCreater().listInstanceCompliant(listInstanceCompliantRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 分页获取节点补丁详情
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 分页获取节点补丁详情
     * @param {string} instanceCompliantId 合规性报告id
     * @param {number} [offset] 偏移量
     * @param {number} [limit] 每页数量
     * @param {string} [title] 补丁名称
     * @param {string} [sortDir] 排序 - asc：升序 - desc：降序
     * @param {string} [sortKey] 排序字段 -installed_time：补丁安装时间
     * @param {string} [patchStatus] 补丁状态 INSTALLED：已安装 INSTALLED_OTHER：已安装其他 MISSING：缺失 REJECT：拒绝 FAILED：失败 PENDING_REBOOT：已安装待重启
     * @param {string} [classification] 分类
     * @param {string} [severityLevel] 严重性级别
     * @param {string} [complianceLevel] 合规性级别
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showInstancePatchItems(showInstancePatchItemsRequest?: ShowInstancePatchItemsRequest): Promise<ShowInstancePatchItemsResponse> {
        const options = ParamCreater().showInstancePatchItems(showInstancePatchItemsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 支持租户将自开发的监控系统按照标准化集成至COC，集成后告警会按照标准格式上报至COC告警中心
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 支持用户自主接入告警数据
     * @param {string} integrationKey 集成ID
     * @param {ReportCustomEventRequestBody} reportCustomEventRequestBody 应用运维管理事件接入请求内容
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createReportCustomEvent(createReportCustomEventRequest?: CreateReportCustomEventRequest): Promise<CreateReportCustomEventResponse> {
        const options = ParamCreater().createReportCustomEvent(createReportCustomEventRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建自定义作业
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建自定义作业
     * @param {CreateDocumentRequestBody} createDocumentRequestBody 创建作业请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createDocument(createDocumentRequest?: CreateDocumentRequest): Promise<CreateDocumentResponse> {
        const options = ParamCreater().createDocument(createDocumentRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-request-id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除自定义作业
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除自定义作业
     * @param {string} documentId 作业uuid
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteDocument(deleteDocumentRequest?: DeleteDocumentRequest): Promise<DeleteDocumentResponse> {
        const options = ParamCreater().deleteDocument(deleteDocumentRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-request-id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 执行自定义作业
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 执行自定义作业
     * @param {string} documentId 
     * @param {ExecuteDocumentRequsetBody} executeDocumentRequsetBody 执行自定义作业请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public executeDocument(executeDocumentRequest?: ExecuteDocumentRequest): Promise<ExecuteDocumentResponse> {
        const options = ParamCreater().executeDocument(executeDocumentRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-request-id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询自定义作业详情
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询自定义作业详情
     * @param {string} documentId 作业uuid
     * @param {string} [version] 作业版本号，示例值v1、v2，不传默认查询最新版本
     * @param {string} [documentType] 执行的作业类型 枚举：PUBLIC/PRIVATE 默认PRIVATE
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public getDocument(getDocumentRequest?: GetDocumentRequest): Promise<GetDocumentResponse> {
        const options = ParamCreater().getDocument(getDocumentRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-request-id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取原子能力详细
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取原子能力详细
     * @param {string} atomicUniqueKey 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public getDocumentAtomicInfo(getDocumentAtomicInfoRequest?: GetDocumentAtomicInfoRequest): Promise<GetDocumentAtomicInfoResponse> {
        const options = ParamCreater().getDocumentAtomicInfo(getDocumentAtomicInfoRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取原子能力列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取原子能力列表
     * @param {string} [limit] 
     * @param {string} [offset] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listDocumentAtomics(listDocumentAtomicsRequest?: ListDocumentAtomicsRequest): Promise<ListDocumentAtomicsResponse> {
        const options = ParamCreater().listDocumentAtomics(listDocumentAtomicsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询自定义作业列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询自定义作业列表
     * @param {number} [limit] 分页参数：每页返回记录个数限制
     * @param {string} [offset] 偏移量
     * @param {string} [nameLike] 作业名（模糊）
     * @param {string} [creator] 创建人
     * @param {string} [enterpriseProjectId] 企业项目ID
     * @param {string} [documentType] 执行的作业类型 枚举：PUBLIC/NORMAL 默认NORMAL
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listDocuments(listDocumentsRequest?: ListDocumentsRequest): Promise<ListDocumentsResponse> {
        const options = ParamCreater().listDocuments(listDocumentsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改自定义作业
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改自定义作业
     * @param {string} documentId 
     * @param {UpdateRunbookRequestBody} updateDemoInfoRequestBody DemoInfo object that needs to be modified
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateDocument(updateDocumentRequest?: UpdateDocumentRequest): Promise<UpdateDocumentResponse> {
        const options = ParamCreater().updateDocument(updateDocumentRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-request-id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * Prometheus事件接入
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary Prometheus事件接入
     * @param {string} integrationKey 集成ID
     * @param {{ [key: string]: object; }} [prometheusMessageRequestBody] Prometheus事件接入请求内容
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createReportPrometheusEvent(createReportPrometheusEventRequest?: CreateReportPrometheusEventRequest): Promise<CreateReportPrometheusEventResponse> {
        const options = ParamCreater().createReportPrometheusEvent(createReportPrometheusEventRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询作业工单详情
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询作业工单详情
     * @param {string} executionId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public getExecution(getExecutionRequest?: GetExecutionRequest): Promise<GetExecutionResponse> {
        const options = ParamCreater().getExecution(getExecutionRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-request-id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询工单步骤批次实例，如脚本分批操作里的ECS实例
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询工单步骤批次实例
     * @param {number} [limit] 每页显示的条目数量
     * @param {number} [offset] 从offset指定的下一条数据开始查询
     * @param {string} [executionStepId] 工单步骤id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listExecutionInstances(listExecutionInstancesRequest?: ListExecutionInstancesRequest): Promise<ListExecutionInstancesResponse> {
        const options = ParamCreater().listExecutionInstances(listExecutionInstancesRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-request-id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询工单步骤详情
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询工单步骤详情
     * @param {string} executionId 
     * @param {number} [limit] 每页显示的条目数量
     * @param {number} [offset] 从offset指定的下一条数据开始查询
     * @param {Array<string>} [executionStepIdList] 步骤id数组
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listExecutionSteps(listExecutionStepsRequest?: ListExecutionStepsRequest): Promise<ListExecutionStepsResponse> {
        const options = ParamCreater().listExecutionSteps(listExecutionStepsRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-request-id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询作业工单列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询作业工单列表
     * @param {number} [limit] 分页参数：每页返回记录个数限制 不传默认第一页查10个
     * @param {number} [offset] 分页参数：从offset指定的下一条数据开始查询，不传默认0
     * @param {string} [creator] 创建人，模糊查询
     * @param {number} [startTime] 开始时间，大于
     * @param {number} [endTime] 结束时间，小于
     * @param {string} [documentName] 作业名称，模糊查询
     * @param {string} [documentId] 作业id
     * @param {string} [tags] 标签过滤条件，例：?tags&#x3D;key1&#x3D;value1,key2&#x3D;value2
     * @param {boolean} [excludeChildExecutions] 列表查询不返回子工单
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listExecutions(listExecutionsRequest?: ListExecutionsRequest): Promise<ListExecutionsResponse> {
        const options = ParamCreater().listExecutions(listExecutionsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 操作工单
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 操作工单
     * @param {OperateExecutionRequestBody} [operateExecutionRequestBody] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public operateExecution(operateExecutionRequest?: OperateExecutionRequest): Promise<OperateExecutionResponse> {
        const options = ParamCreater().operateExecution(operateExecutionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * CreateExternalIncident 创建事件单
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary CreateExternalIncident 创建事件单
     * @param {CreateExternalIncidentRequest} createCocIncidentRequestBody 创单参数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createCocIncident(createCocIncidentRequest?: CreateCocIncidentRequest): Promise<CreateCocIncidentResponse> {
        const options = ParamCreater().createCocIncident(createCocIncidentRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * HandleCocIncident 处理事件单
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary HandleCocIncident处理事件单
     * @param {HandleExternalIncidentRequest} handleCocIncidentRequestBody request
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public handleCocIncident(handleCocIncidentRequest?: HandleCocIncidentRequest): Promise<HandleCocIncidentResponse> {
        const options = ParamCreater().handleCocIncident(handleCocIncidentRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * ListCocTicketOperationHistories  获取事件单历史
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary GetCocTicketOperationHistories 获取事件单历史
     * @param {'incident' | 'issues_mgmt'} ticketType 工单类型:incident,issues_mgmt
     * @param {ListTicketParams} listCocTicketOperationHistoriesRequestBody 查询参数。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listCocTicketOperationHistories(listCocTicketOperationHistoriesRequest?: ListCocTicketOperationHistoriesRequest): Promise<ListCocTicketOperationHistoriesResponse> {
        const options = ParamCreater().listCocTicketOperationHistories(listCocTicketOperationHistoriesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * ShowCocIncidentDetail  获取事件单详细
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary GetCocIncidentDetail 获取事件单详细
     * @param {string} incidentNum 事件单号
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showCocIncidentDetail(showCocIncidentDetailRequest?: ShowCocIncidentDetailRequest): Promise<ShowCocIncidentDetailResponse> {
        const options = ParamCreater().showCocIncidentDetail(showCocIncidentDetailRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * CreateExternalIssues 创建问题单
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary CreateExternalIssues 创建问题单
     * @param {CreateExternalIssuesRequest} createCocIssuesRequestBody 创单参数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createCocIssues(createCocIssuesRequest?: CreateCocIssuesRequest): Promise<CreateCocIssuesResponse> {
        const options = ParamCreater().createCocIssues(createCocIssuesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * ShowCocIssuesDetail  获取事件单详细
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary GetCocIssuesDetail 获取事件单详细
     * @param {string} ticketId 问题单号
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showCocIssuesDetail(showCocIssuesDetailRequest?: ShowCocIssuesDetailRequest): Promise<ShowCocIssuesDetailResponse> {
        const options = ParamCreater().showCocIssuesDetail(showCocIssuesDetailRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询COC可授权单列表（变更单号、事件单号、warroom和告警）
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询COC可授权单列表
     * @param {ListAuthorizableTicketsReq} listAuthorizableTicketsExternalRequestBody 查询参数。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAuthorizableTicketsExternal(listAuthorizableTicketsExternalRequest?: ListAuthorizableTicketsExternalRequest): Promise<ListAuthorizableTicketsExternalResponse> {
        const options = ParamCreater().listAuthorizableTicketsExternal(listAuthorizableTicketsExternalRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询用户在云厂商中的资源
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询用户在云厂商中的资源
     * @param {string} vendor 云厂商
     * @param {number} limit 最大的返回数量
     * @param {string} [type] 资源类型
     * @param {string} [marker] 分页参数，通过上一个请求中返回的marker信息作为输入，获取当前页
     * @param {Array<string>} [resourceIdList] 资源id列表
     * @param {Array<string>} [nameList] 资源名称
     * @param {Array<string>} [regionIdList] region id列表
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listMultiCloudResources(listMultiCloudResourcesRequest?: ListMultiCloudResourcesRequest): Promise<ListMultiCloudResourcesResponse> {
        const options = ParamCreater().listMultiCloudResources(listMultiCloudResourcesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询用户各种资源总数
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询用户各种资源总数
     * @param {string} vendor 厂商来源（默认RMS，可填RMS/ALI/AWS）
     * @param {string} [viewId] 视图 id，视图模式下必填
     * @param {boolean} [isResource] 是否为资源模块
     * @param {string} [regionId] 区域 id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public countMultiResources(countMultiResourcesRequest?: CountMultiResourcesRequest): Promise<CountMultiResourcesResponse> {
        const options = ParamCreater().countMultiResources(countMultiResourcesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询用户所有资源
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询用户所有资源
     * @param {string} provider 云服务名称
     * @param {string} type 资源类型名称
     * @param {number} limit 最大的返回数量
     * @param {string} [marker] 分页参数，通过上一个请求中返回的marker信息作为输入，获取当前页
     * @param {Array<string>} [resourceIdList] 资源id列表
     * @param {string} [name] 名称
     * @param {string} [regionId] region id
     * @param {string} [azId] az id
     * @param {string} [ipType] ip类型，fixed：内网IP，floating：弹性公网IP
     * @param {string} [ip] ip
     * @param {string} [status] 资源状态
     * @param {string} [agentState] agent状态
     * @param {string} [imageName] 镜像名称，模糊匹配
     * @param {string} [osType] 系统类型
     * @param {string} [tag] 标签的值
     * @param {string} [tagKey] 标签的key
     * @param {string} [groupId] 分组id
     * @param {string} [componentId] 组件id
     * @param {string} [applicationId] 应用id
     * @param {string} [cceClusterId] cce集群id
     * @param {string} [vpcId] vpc id
     * @param {string} [epId] 企业项目id
     * @param {boolean} [isDelegated] 资源是否已托管
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listResource(listResourceRequest?: ListResourceRequest): Promise<ListResourceResponse> {
        const options = ParamCreater().listResource(listResourceRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-request-id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 从RMS同步用户所有资源
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 从RMS同步用户所有资源
     * @param {SyncResourceReq} syncResourceRequestBody 同步资源请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public syncResource(syncResourceRequest?: SyncResourceRequest): Promise<SyncResourceResponse> {
        const options = ParamCreater().syncResource(syncResourceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询资源标签列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询资源标签列表
     * @param {'coc:script'} resourceType 资源类型： - coc:script
     * @param {string} [limit] 查询的限制数量。
     * @param {string} [offset] 查询的起始位置。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listScriptResourceTags(listScriptResourceTagsRequest?: ListScriptResourceTagsRequest): Promise<ListScriptResourceTagsResponse> {
        const options = ParamCreater().listScriptResourceTags(listScriptResourceTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新资源标签
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新资源标签
     * @param {string} resourceId 资源id。
     * @param {'coc:script'} resourceType 资源类型： - coc:script
     * @param {UpdateResourceTagsRequestBody} [updateResourceTagsRequestBody] 更新标签请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateResourceTags(updateResourceTagsRequest?: UpdateResourceTagsRequest): Promise<UpdateResourceTagsResponse> {
        const options = ParamCreater().updateResourceTags(updateResourceTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * Create Scheduled Task
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 新建定时运维
     * @param {ScheduledTaskRequestBody} createScheduledTaskRequestBody ScheduledTask object that needs to be created
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createScheduledTask(createScheduledTaskRequest?: CreateScheduledTaskRequest): Promise<CreateScheduledTaskResponse> {
        const options = ParamCreater().createScheduledTask(createScheduledTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * Delete scheduled task by id
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除ScheduledTask
     * @param {string} taskId ID of ScheduledTask
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteScheduledTask(deleteScheduledTaskRequest?: DeleteScheduledTaskRequest): Promise<DeleteScheduledTaskResponse> {
        const options = ParamCreater().deleteScheduledTask(deleteScheduledTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * Disable scheduled task by id
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 禁用ScheduledTask
     * @param {string} taskId ID of ScheduledTask
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public disableScheduledTask(disableScheduledTaskRequest?: DisableScheduledTaskRequest): Promise<DisableScheduledTaskResponse> {
        const options = ParamCreater().disableScheduledTask(disableScheduledTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * Enable scheduled task by id
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 启用ScheduledTask
     * @param {string} taskId ID of ScheduledTask
     * @param {EnableScheduledTaskRequestBody} [enableScheduledTaskRequestBody] 请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public enableScheduledTask(enableScheduledTaskRequest?: EnableScheduledTaskRequest): Promise<EnableScheduledTaskResponse> {
        const options = ParamCreater().enableScheduledTask(enableScheduledTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * Get ScheduledTask infos
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询ScheduledTask列表
     * @param {string} [enterpriseProjectId] 企业项目id
     * @param {string} [taskId] 任务ID
     * @param {string} [taskName] 任务名称
     * @param {'ONCE' | 'PERIODIC' | 'CRON'} [scheduledType] 定时类型(ONCE,PERIODIC,CRON)
     * @param {'SCRIPT' | 'RUNBOOK'} [taskType] 引用任务类型(SCRIPT,RUNBOOK)
     * @param {'CUSTOMIZATION' | 'COMMUNAL'} [associatedTaskType] 任务类型(CUSTOMIZATION,COMMUNAL)
     * @param {string} [riskLevel] 风险等级
     * @param {string} [createdBy] 创建人
     * @param {string} [reviewer] 审批人ID
     * @param {string} [reviewerUserName] 审批人昵称
     * @param {'PENDING' | 'REJECTED' | 'PASSED'} [approveStatus] 审批状态(PENDING,REJECTED,PASSED)
     * @param {'READY' | 'PROCESSING' | 'ABNORMAL' | 'FINISHED' | 'PAUSED' | 'CANCELED'} [lastExecutionStatus] 最近执行状态(READY,PROCESSING,ABNORMAL,FINISHED,PAUSED,CANCELED)
     * @param {number} [lastExecutionStartTime] 最近执行时间的查询开始时间
     * @param {number} [lastExecutionEndTime] 最近执行时间的查询结束时间
     * @param {string} [marker] 上一页数据的最后一条记录的id
     * @param {string} [regionId] 区域
     * @param {string} [resourceId] 资源ID
     * @param {number} [offset] 分页指针
     * @param {number} [limit] 每页数量
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listScheduledTask(listScheduledTaskRequest?: ListScheduledTaskRequest): Promise<ListScheduledTaskResponse> {
        const options = ParamCreater().listScheduledTask(listScheduledTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * get scheduled task history list
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询定时运维历史记录
     * @param {string} taskId ID of ScheduledTask
     * @param {number} limit 每页数量
     * @param {string} [id] 工单ID
     * @param {string} [region] 区域
     * @param {string} [status] 状态
     * @param {number} [startedStartTime] 开始时间参数的查询开始区间时间戳
     * @param {number} [startedEndTime] 开始时间参数的查询结束区间时间戳
     * @param {number} [finishedStartTime] 结束时间参数的查询开始区间时间戳
     * @param {number} [finishedEndTime] 结束时间参数的查询结束区间时间戳
     * @param {string} [marker] 上一页数据的最后一条记录的id
     * @param {number} [offset] 分页指针
     * @param {'started_time' | 'finished_time'} [sortKey] 排序字段名：支持 started_time,finished_time
     * @param {'asc' | 'desc'} [sortDir] 排序方式，asc升序，desc降序
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listScheduledTaskHistory(listScheduledTaskHistoryRequest?: ListScheduledTaskHistoryRequest): Promise<ListScheduledTaskHistoryResponse> {
        const options = ParamCreater().listScheduledTaskHistory(listScheduledTaskHistoryRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * Get ScheduledTask info by id
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询ScheduledTask
     * @param {string} taskId ID of ScheduledTask
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showScheduledTask(showScheduledTaskRequest?: ShowScheduledTaskRequest): Promise<ShowScheduledTaskResponse> {
        const options = ParamCreater().showScheduledTask(showScheduledTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * Update ScheduledTask
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改ScheduledTask
     * @param {string} taskId ID of ScheduledTask
     * @param {ScheduledTaskRequestBody} updateScheduledTaskRequestBody ScheduledTask object that needs to be modified
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateScheduledTask(updateScheduledTaskRequest?: UpdateScheduledTaskRequest): Promise<UpdateScheduledTaskResponse> {
        const options = ParamCreater().updateScheduledTask(updateScheduledTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询：批次详情，分页获取批次中的实例列表。
     * 过滤条件：分页参数
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 展示批次详情
     * @param {number} batchIndex 批次index
     * @param {string} executeUuid 脚本工单的执行Id，取自executeJobScript和ListJobScriptOrders返回体中
     * @param {number} limit 分页参数：每页返回记录个数限制
     * @param {'READY' | 'PROCESSING' | 'ABNORMAL' | 'CANCELED' | 'FINISHED'} [status] 实例执行状态 READY：待执行 PROCESSING：执行中 ABNORMAL：异常 CANCELED：已取消 FINISHED：成功
     * @param {number} [marker] 分页参数：上一页最后一个记录id
     * @param {string} [xLanguage] 国际化标记，zh-cn表示中文，en-us或不传表示英文
     * @param {string} [xProjectId] 项目ID，一个项目对应一个region
     * @param {string} [xUserProfile] IAM5.0用户信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public getScriptJobBatch(getScriptJobBatchRequest?: GetScriptJobBatchRequest): Promise<GetScriptJobBatchResponse> {
        const options = ParamCreater().getScriptJobBatch(getScriptJobBatchRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询执行：基本信息
     * 执行类型、执行名称、创建人、创建时间、结束时间、执行状态、标签（脚本id，脚本名，执行脚本参数，执行用户，超时时长、成功率阈值）
     * 
     * 不同的任务类型消费标签中的不同key
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 展示脚本工单基本信息
     * @param {string} executeUuid 脚本工单的执行Id，取自executeJobScript和ListJobScriptOrders返回体中
     * @param {string} [xLanguage] 国际化标记，zh-cn表示中文，en-us或不传表示英文
     * @param {string} [xProjectId] 项目ID，一个项目对应一个region
     * @param {string} [xUserProfile] IAM5.0用户信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public getScriptJobInfo(getScriptJobInfoRequest?: GetScriptJobInfoRequest): Promise<GetScriptJobInfoResponse> {
        const options = ParamCreater().getScriptJobInfo(getScriptJobInfoRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询：实例状态统计信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 展示实例状态统计信息
     * @param {string} executeUuid 脚本工单的执行Id，取自executeJobScript和ListJobScriptOrders返回体中
     * @param {string} [xLanguage] 国际化标记，zh-cn表示中文，en-us或不传表示英文
     * @param {string} [xProjectId] 项目ID，一个项目对应一个region
     * @param {string} [xUserProfile] IAM5.0用户信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public getScriptJobStatistics(getScriptJobStatisticsRequest?: GetScriptJobStatisticsRequest): Promise<GetScriptJobStatisticsResponse> {
        const options = ParamCreater().getScriptJobStatistics(getScriptJobStatisticsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询：批次列表
     * 返回：批次index、批次标签
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 展示批次列表
     * @param {string} executeUuid 脚本工单的执行Id，取自executeJobScript和ListJobScriptOrders返回体中
     * @param {string} [xLanguage] 国际化标记，zh-cn表示中文，en-us或不传表示英文
     * @param {string} [xProjectId] 项目ID，一个项目对应一个region
     * @param {string} [xUserProfile] IAM5.0用户信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listScriptJobBatches(listScriptJobBatchesRequest?: ListScriptJobBatchesRequest): Promise<ListScriptJobBatchesResponse> {
        const options = ParamCreater().listScriptJobBatches(listScriptJobBatchesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询作业工单列表，分页查询
     * 过滤：创建时间开始，创建时间结束、创建人
     * 返回：id、脚本名称、区域、创建人、创建时间、结束时间、总耗时、状态
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 展示工单列表
     * @param {number} [limit] 分页参数
     * @param {number} [marker] 分页参数
     * @param {number} [startTime] 创建时间开始
     * @param {number} [endTime] 创建时间结束
     * @param {string} [creator] 创建人
     * @param {'PROCESSING' | 'ABNORMAL' | 'PAUSED' | 'CANCELED' | 'FINISHED'} [status] 工单状态 PROCESSING：执行中 ABNORMAL：异常 PAUSED：暂停 CANCELED：已取消 FINISHED：成功
     * @param {string} [xLanguage] 国际化标记，zh-cn表示中文，en-us或不传表示英文
     * @param {string} [xProjectId] 项目ID，一个项目对应一个region
     * @param {string} [xUserProfile] IAM5.0用户信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listScriptJobs(listScriptJobsRequest?: ListScriptJobsRequest): Promise<ListScriptJobsResponse> {
        const options = ParamCreater().listScriptJobs(listScriptJobsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 操作类型：取消实例、跳过批次、取消整个工单、暂停整个工单、继续整个工单
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 操作脚本工单
     * @param {string} executeUuid 脚本工单的执行Id，取自executeJobScript和ListJobScriptOrders返回体中
     * @param {string} [xLanguage] 国际化标记，zh-cn表示中文，en-us或不传表示英文
     * @param {string} [xProjectId] 项目ID，一个项目对应一个region
     * @param {string} [xUserProfile] IAM5.0用户信息
     * @param {JobScriptOrderOperationBody} [updateScriptOrderRequestBody] 工单操作请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public operateScriptJob(operateScriptJobRequest?: OperateScriptJobRequest): Promise<OperateScriptJobResponse> {
        const options = ParamCreater().operateScriptJob(operateScriptJobRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 功能：审批脚本。
     * 约束条件：只有创建脚本填写了审批人，脚本为待审批状态才能审批。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 审批待审批的脚本
     * @param {string} scriptUuid 脚本Uuid
     * @param {ApprovalJobScriptModel} acceptScriptRequestBody 脚本审批
     * @param {string} [xProjectId] 项目ID。
     * @param {string} [xUserProfile] IAM5.0用户信息。
     * @param {string} [xLanguage] 国际化标记，zh-cn表示中文，en-us或不传表示英文。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public acceptScript(acceptScriptRequest?: AcceptScriptRequest): Promise<AcceptScriptResponse> {
        const options = ParamCreater().acceptScript(acceptScriptRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据作业内容，对作业评估风险，返回相关分析的结果和信息，结果仅供参考。
     * 高危命令指影响系统或服务的正常运行，或造成系统特殊文件被恶意删除或修改命令。 高危命令检测通过校验规则正则匹配脚本内容中是否包含高危命令。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 评估脚本风险等级
     * @param {JobScriptAnalyzeRequest} checkScriptRiskRequestBody 脚本内容。
     * @param {string} [xLanguage] 国际化标记，zh-cn表示中文，en-us或不传表示英文。
     * @param {string} [xProjectId] 项目ID。
     * @param {string} [xUserProfile] IAM5.0用户信息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public checkScriptRisk(checkScriptRiskRequest?: CheckScriptRiskRequest): Promise<CheckScriptRiskResponse> {
        const options = ParamCreater().checkScriptRisk(checkScriptRiskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建作业脚本：自定义脚本
     * - 脚本有标签属性，表示是高危脚本。创建时候不需要对脚本进行是否是高危的二次校验。
     * - 进行租户隔离；北向接口创建的脚本，审批人字段不填写，默认不需要审批
     * - 约束条件：
     * - 脚本名称：同一租户下，脚本名称不能重复，最大字符64个字符，支持中文+字母+数字+下划线。
     * - 脚本内容最大100kb。
     * - 脚本参数个数最多20个。
     * - 脚本描述：最大256个字符。
     * - 单个参数的参数名称 64个字符，只支持字母+数字+下划线。
     * - 单个参数的值最大1024个字符，正则表达式如下：^((?!\\.{2,})[a-zA-Z0-9_\\-/\\.\\*\\x20\\?:\&quot;,&#x3D;+@\\\\\\[\\{\\]\\}])*$。
     * - 审批人最多支持5人。
     * - 脚本输出的日志总量只支持1MB。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建脚本
     * @param {AddScriptModel} createScriptsRequestBody 添加脚本的请求体
     * @param {string} [xProjectId] 项目ID，一个项目对应一个region
     * @param {string} [xUserProfile] IAM5.0用户信息
     * @param {string} [xLanguage] 国际化标记，zh-cn表示中文，en-us或不传表示英文
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createScript(createScriptRequest?: CreateScriptRequest): Promise<CreateScriptResponse> {
        const options = ParamCreater().createScript(createScriptRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除作业脚本：自定义脚本。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除自定义脚本
     * @param {string} scriptUuid 脚本uuid
     * @param {string} [xLanguage] 国际化标记，zh-cn表示中文，en-us或不传表示英文
     * @param {string} [xProjectId] 项目ID，一个项目对应一个region
     * @param {string} [xUserProfile] IAM5.0用户信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteScript(deleteScriptRequest?: DeleteScriptRequest): Promise<DeleteScriptResponse> {
        const options = ParamCreater().deleteScript(deleteScriptRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 执行脚本
     * 
     * 脚本入参、超时时间、执行用户、资源受限
     * 脚本入参支持20个。
     * 单次下发的机器支持200个。
     * 单次批次内机器数量最大10个。
     * 最大批次数量为20批。
     * 脚本输出的日志总量只支持1MB。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 执行自定义脚本
     * @param {string} scriptUuid 脚本UUID
     * @param {ScriptExecuteModel} executeScriptRequestBody 启动执行请求体
     * @param {string} [xLanguage] 国际化标记，zh-cn表示中文，en-us或不传表示英文
     * @param {string} [xProjectId] 项目ID，一个项目对应一个region
     * @param {string} [xUserProfile] IAM5.0用户信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public executeScript(executeScriptRequest?: ExecuteScriptRequest): Promise<ExecuteScriptResponse> {
        const options = ParamCreater().executeScript(executeScriptRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取脚本详情
     * 约束条件：
     * 只能查询自定义脚本详情
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取自定义脚本详情
     * @param {string} scriptUuid 脚本UUID
     * @param {string} [xLanguage] 国际化标记，zh-cn表示中文，en-us或不传表示英文
     * @param {string} [xProjectId] 项目ID，一个项目对应一个region
     * @param {string} [xUserProfile] IAM5.0用户信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public getScript(getScriptRequest?: GetScriptRequest): Promise<GetScriptResponse> {
        const options = ParamCreater().getScript(getScriptRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据分批策略获取分批结果，只支持自动分批：
     * 规则如下：
     * 1.单个批次的所有实例必须属于同一个区域；
     *      * 2.单个批次的所有实例必须属于同一个可用区；
     *      * 3.单个批次的所有实例必须属于同一个应用；
     *      * 4.单个批次内同一分组下的实例不超过50%（除分组下仅以一个实例的情况外）；
     *      * 5.前三批每批节点数量不超过10。
     *      * 6.每批次实例数量不超过10。
     * 
     *    总机器数量为200。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取自动分批结果
     * @param {InstancesBatchesMode} listInstancesBatchRequestBody 分批请求体。
     * @param {string} [xLanguage] 国际化标记，zh-cn表示中文，en-us或不传表示英文。
     * @param {string} [xProjectId] 项目ID。
     * @param {string} [xUserProfile] IAM5.0用户信息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listInstancesBatch(listInstancesBatchRequest?: ListInstancesBatchRequest): Promise<ListInstancesBatchResponse> {
        const options = ParamCreater().listInstancesBatch(listInstancesBatchRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 作业脚本列表：自定义脚本
     * 
     * limit最大为100
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询脚本列表
     * @param {number} limit 分页参数：每页返回记录个数限制
     * @param {number} [marker] 分页参数：上一页最后一个记录id
     * @param {string} [nameLike] 脚本名（模糊）
     * @param {string} [creator] 创建人
     * @param {'LOW' | 'MEDIUM' | 'HIGH'} [riskLevel] 风险等级 LOW:低风险 MEDIUM：中风险 HIGH：高风险
     * @param {'SHELL' | 'PYTHON' | 'BAT'} [type] 脚本类型 SHELL:shell脚本 PYTHON：python脚本 BAT：Bat脚本
     * @param {string} [enterpriseProjectId] 企业项目id
     * @param {string} [xLanguage] 国际化标记，zh-cn表示中文，en-us或不传表示英文
     * @param {string} [xProjectId] 项目ID，一个项目对应一个region
     * @param {string} [xUserProfile] IAM5.0用户信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listScripts(listScriptsRequest?: ListScriptsRequest): Promise<ListScriptsResponse> {
        const options = ParamCreater().listScripts(listScriptsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改作业脚本：自定义脚本
     * 约束条件：
     * 脚本名称：同一租户下，脚本名称不能重复，最大字符64个字符，支持中文+字母+数字+下划线。
     * 脚本内容最大4096个字符。
     * 脚本参数个数最多20个。
     * 脚本描述：最大256个字符。
     * 单个参数的参数名称 64个字符，只支持字母+数字+下划线。
     * 单个参数的值最大1024个字符，正则表达式如下：^((?!.{2,})[a-zA-Z0-9_-/.*\\x20?:\&quot;,&#x3D;+@\\[{]}])*$。
     * 修改的脚本如果有审批人，在修改之后，需要再次选择审批人，查询审批
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改脚本
     * @param {string} scriptUuid 脚本uuid
     * @param {EditScriptModel} updateScriptRequestBody 待更新的脚本内容
     * @param {string} [xLanguage] 国际化标记，zh-cn表示中文，en-us或不传表示英文
     * @param {string} [xProjectId] 项目ID，一个项目对应一个region
     * @param {string} [xUserProfile] IAM5.0用户信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateScript(updateScriptRequest?: UpdateScriptRequest): Promise<UpdateScriptResponse> {
        const options = ParamCreater().updateScript(updateScriptRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 执行公共脚本
     * 脚本入参、超时时间、执行用户、资源受限
     * 脚本入参支持20个。
     * 单次下发的机器支持200个。
     * 单次批次内机器数量最大10个。
     * 最大批次数量为20批。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 执行公共脚本
     * @param {string} scriptUuid 公共脚本Uuid
     * @param {ScriptExecuteModel} executeJobPublicScriptRequestBody 执行公共脚本请求体
     * @param {string} [xLanguage] 国际化标记，zh-cn表示中文，en-us或不传表示英文
     * @param {string} [xProjectId] 项目ID，一个项目对应一个region
     * @param {string} [xUserProfile] IAM5.0用户信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public executePublicScript(executePublicScriptRequest?: ExecutePublicScriptRequest): Promise<ExecutePublicScriptResponse> {
        const options = ParamCreater().executePublicScript(executePublicScriptRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 展示公共脚本详情
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 展示公共脚本详情
     * @param {string} scriptUuid 公共脚本Uuid
     * @param {string} [xLanguage] 国际化标记，zh-cn表示中文，en-us或不传表示英文
     * @param {string} [xProjectId] 项目ID，一个项目对应一个region
     * @param {string} [xUserProfile] IAM5.0用户信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public getPublicScript(getPublicScriptRequest?: GetPublicScriptRequest): Promise<GetPublicScriptResponse> {
        const options = ParamCreater().getPublicScript(getPublicScriptRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取公共脚本列表，分页逻辑：采用limit+marker方式，提高分页效率。用自增id作为marker参数
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取公共脚本列表
     * @param {number} limit 分页参数：每页返回记录个数限制
     * @param {number} [marker] 分页参数：上一页最后一个记录id
     * @param {string} [nameLike] 脚本名（只支持右模糊搜索）
     * @param {string} [name] 脚本名（精确搜索）
     * @param {'LOW' | 'MEDIUM' | 'HIGH'} [riskLevel] 风险等级 LOW：低风险 MEDIUM：中风险 HIGH：高风险
     * @param {'SHELL' | 'PYTHON' | 'BAT'} [type] 脚本类型 SHELL：shell脚本 PYTHON：python脚本 BAT：bat脚本
     * @param {string} [xLanguage] 国际化标记，zh-cn表示中文，en-us或不传表示英文
     * @param {string} [xProjectId] 项目ID，一个项目对应一个region
     * @param {string} [xUserProfile] IAM5.0用户信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listPublicScripts(listPublicScriptsRequest?: ListPublicScriptsRequest): Promise<ListPublicScriptsResponse> {
        const options = ParamCreater().listPublicScripts(listPublicScriptsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建租户区WarRoom
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建租户区WarRoom
     * @param {CreateWarRoomRequestBody} createWarRoomRequestBody 创建租户区WarRoom的请求
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createWarRoom(createWarRoomRequest?: CreateWarRoomRequest): Promise<CreateWarRoomResponse> {
        const options = ParamCreater().createWarRoom(createWarRoomRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询租户区WarRoom信息列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询租户区WarRoom信息列表
     * @param {ListTenantWarRoomRequestBody} listWarRoomRequestBody 查询租户区WarRoom列表的请求
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listWarRooms(listWarRoomsRequest?: ListWarRoomsRequest): Promise<ListWarRoomsResponse> {
        const options = ParamCreater().listWarRooms(listWarRoomsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * 查询应用
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listApplications(listApplicationsRequest?: ListApplicationsRequest) {
            const options = {
                method: "GET",
                url: "/v1/applications",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let limit;
            
            let idList;
            
            let parentId;
            
            let nameLike;
            
            let code;
            
            let marker;

            if (listApplicationsRequest !== null && listApplicationsRequest !== undefined) {
                if (listApplicationsRequest instanceof ListApplicationsRequest) {
                    limit = listApplicationsRequest.limit;
                    idList = listApplicationsRequest.idList;
                    parentId = listApplicationsRequest.parentId;
                    nameLike = listApplicationsRequest.nameLike;
                    code = listApplicationsRequest.code;
                    marker = listApplicationsRequest.marker;
                } else {
                    limit = listApplicationsRequest['limit'];
                    idList = listApplicationsRequest['id_list'];
                    parentId = listApplicationsRequest['parent_id'];
                    nameLike = listApplicationsRequest['name_like'];
                    code = listApplicationsRequest['code'];
                    marker = listApplicationsRequest['marker'];
                }
            }

        
            if (limit === null || limit === undefined) {
                throw new RequiredError('limit','Required parameter limit was null or undefined when calling listApplications.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (idList !== null && idList !== undefined) {
                localVarQueryParameter['id_list'] = idList;
            }
            if (parentId !== null && parentId !== undefined) {
                localVarQueryParameter['parent_id'] = parentId;
            }
            if (nameLike !== null && nameLike !== undefined) {
                localVarQueryParameter['name_like'] = nameLike;
            }
            if (code !== null && code !== undefined) {
                localVarQueryParameter['code'] = code;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询下一级的子应用、组件、分组
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listApplicationModel(listApplicationModelRequest?: ListApplicationModelRequest) {
            const options = {
                method: "GET",
                url: "/v1/application-model/next",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let applicationId;
            
            let componentId;
            
            let limit;
            
            let marker;
            
            let pageNo;

            if (listApplicationModelRequest !== null && listApplicationModelRequest !== undefined) {
                if (listApplicationModelRequest instanceof ListApplicationModelRequest) {
                    applicationId = listApplicationModelRequest.applicationId;
                    componentId = listApplicationModelRequest.componentId;
                    limit = listApplicationModelRequest.limit;
                    marker = listApplicationModelRequest.marker;
                    pageNo = listApplicationModelRequest.pageNo;
                } else {
                    applicationId = listApplicationModelRequest['application_id'];
                    componentId = listApplicationModelRequest['component_id'];
                    limit = listApplicationModelRequest['limit'];
                    marker = listApplicationModelRequest['marker'];
                    pageNo = listApplicationModelRequest['page_no'];
                }
            }

        
            if (applicationId !== null && applicationId !== undefined) {
                localVarQueryParameter['application_id'] = applicationId;
            }
            if (componentId !== null && componentId !== undefined) {
                localVarQueryParameter['component_id'] = componentId;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (pageNo !== null && pageNo !== undefined) {
                localVarQueryParameter['page_no'] = pageNo;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 批量创建应用视图
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchCreateApplicationView(batchCreateApplicationViewRequest?: BatchCreateApplicationViewRequest) {
            const options = {
                method: "POST",
                url: "/v1/application-view/batch-create",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (batchCreateApplicationViewRequest !== null && batchCreateApplicationViewRequest !== undefined) {
                if (batchCreateApplicationViewRequest instanceof BatchCreateApplicationViewRequest) {
                    body = batchCreateApplicationViewRequest.body
                } else {
                    body = batchCreateApplicationViewRequest['body'];
                }
            }

        
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 分页获取节点合规性报告
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listInstanceCompliant(listInstanceCompliantRequest?: ListInstanceCompliantRequest) {
            const options = {
                method: "GET",
                url: "/v1/patch/instance/compliant",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let enterpriseProjectId;
            
            let name;
            
            let instanceId;
            
            let ip;
            
            let eip;
            
            let operatingSystem;
            
            let region;
            
            let group;
            
            let compliantStatus;
            
            let orderId;
            
            let offset;
            
            let limit;
            
            let sortDir;
            
            let sortKey;
            
            let reportScene;
            
            let cceInfoId;

            if (listInstanceCompliantRequest !== null && listInstanceCompliantRequest !== undefined) {
                if (listInstanceCompliantRequest instanceof ListInstanceCompliantRequest) {
                    enterpriseProjectId = listInstanceCompliantRequest.enterpriseProjectId;
                    name = listInstanceCompliantRequest.name;
                    instanceId = listInstanceCompliantRequest.instanceId;
                    ip = listInstanceCompliantRequest.ip;
                    eip = listInstanceCompliantRequest.eip;
                    operatingSystem = listInstanceCompliantRequest.operatingSystem;
                    region = listInstanceCompliantRequest.region;
                    group = listInstanceCompliantRequest.group;
                    compliantStatus = listInstanceCompliantRequest.compliantStatus;
                    orderId = listInstanceCompliantRequest.orderId;
                    offset = listInstanceCompliantRequest.offset;
                    limit = listInstanceCompliantRequest.limit;
                    sortDir = listInstanceCompliantRequest.sortDir;
                    sortKey = listInstanceCompliantRequest.sortKey;
                    reportScene = listInstanceCompliantRequest.reportScene;
                    cceInfoId = listInstanceCompliantRequest.cceInfoId;
                } else {
                    enterpriseProjectId = listInstanceCompliantRequest['enterprise_project_id'];
                    name = listInstanceCompliantRequest['name'];
                    instanceId = listInstanceCompliantRequest['instance_id'];
                    ip = listInstanceCompliantRequest['ip'];
                    eip = listInstanceCompliantRequest['eip'];
                    operatingSystem = listInstanceCompliantRequest['operating_system'];
                    region = listInstanceCompliantRequest['region'];
                    group = listInstanceCompliantRequest['group'];
                    compliantStatus = listInstanceCompliantRequest['compliant_status'];
                    orderId = listInstanceCompliantRequest['order_id'];
                    offset = listInstanceCompliantRequest['offset'];
                    limit = listInstanceCompliantRequest['limit'];
                    sortDir = listInstanceCompliantRequest['sort_dir'];
                    sortKey = listInstanceCompliantRequest['sort_key'];
                    reportScene = listInstanceCompliantRequest['report_scene'];
                    cceInfoId = listInstanceCompliantRequest['cce_info_id'];
                }
            }

        
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (instanceId !== null && instanceId !== undefined) {
                localVarQueryParameter['instance_id'] = instanceId;
            }
            if (ip !== null && ip !== undefined) {
                localVarQueryParameter['ip'] = ip;
            }
            if (eip !== null && eip !== undefined) {
                localVarQueryParameter['eip'] = eip;
            }
            if (operatingSystem !== null && operatingSystem !== undefined) {
                localVarQueryParameter['operating_system'] = operatingSystem;
            }
            if (region !== null && region !== undefined) {
                localVarQueryParameter['region'] = region;
            }
            if (group !== null && group !== undefined) {
                localVarQueryParameter['group'] = group;
            }
            if (compliantStatus !== null && compliantStatus !== undefined) {
                localVarQueryParameter['compliant_status'] = compliantStatus;
            }
            if (orderId !== null && orderId !== undefined) {
                localVarQueryParameter['order_id'] = orderId;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (sortDir !== null && sortDir !== undefined) {
                localVarQueryParameter['sort_dir'] = sortDir;
            }
            if (sortKey !== null && sortKey !== undefined) {
                localVarQueryParameter['sort_key'] = sortKey;
            }
            if (reportScene !== null && reportScene !== undefined) {
                localVarQueryParameter['report_scene'] = reportScene;
            }
            if (cceInfoId !== null && cceInfoId !== undefined) {
                localVarQueryParameter['cce_info_id'] = cceInfoId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 分页获取节点补丁详情
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showInstancePatchItems(showInstancePatchItemsRequest?: ShowInstancePatchItemsRequest) {
            const options = {
                method: "GET",
                url: "/v1/patch/instance/compliant/{instance_compliant_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceCompliantId;
            
            let offset;
            
            let limit;
            
            let title;
            
            let sortDir;
            
            let sortKey;
            
            let patchStatus;
            
            let classification;
            
            let severityLevel;
            
            let complianceLevel;

            if (showInstancePatchItemsRequest !== null && showInstancePatchItemsRequest !== undefined) {
                if (showInstancePatchItemsRequest instanceof ShowInstancePatchItemsRequest) {
                    instanceCompliantId = showInstancePatchItemsRequest.instanceCompliantId;
                    offset = showInstancePatchItemsRequest.offset;
                    limit = showInstancePatchItemsRequest.limit;
                    title = showInstancePatchItemsRequest.title;
                    sortDir = showInstancePatchItemsRequest.sortDir;
                    sortKey = showInstancePatchItemsRequest.sortKey;
                    patchStatus = showInstancePatchItemsRequest.patchStatus;
                    classification = showInstancePatchItemsRequest.classification;
                    severityLevel = showInstancePatchItemsRequest.severityLevel;
                    complianceLevel = showInstancePatchItemsRequest.complianceLevel;
                } else {
                    instanceCompliantId = showInstancePatchItemsRequest['instance_compliant_id'];
                    offset = showInstancePatchItemsRequest['offset'];
                    limit = showInstancePatchItemsRequest['limit'];
                    title = showInstancePatchItemsRequest['title'];
                    sortDir = showInstancePatchItemsRequest['sort_dir'];
                    sortKey = showInstancePatchItemsRequest['sort_key'];
                    patchStatus = showInstancePatchItemsRequest['patch_status'];
                    classification = showInstancePatchItemsRequest['classification'];
                    severityLevel = showInstancePatchItemsRequest['severity_level'];
                    complianceLevel = showInstancePatchItemsRequest['compliance_level'];
                }
            }

        
            if (instanceCompliantId === null || instanceCompliantId === undefined) {
            throw new RequiredError('instanceCompliantId','Required parameter instanceCompliantId was null or undefined when calling showInstancePatchItems.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (title !== null && title !== undefined) {
                localVarQueryParameter['title'] = title;
            }
            if (sortDir !== null && sortDir !== undefined) {
                localVarQueryParameter['sort_dir'] = sortDir;
            }
            if (sortKey !== null && sortKey !== undefined) {
                localVarQueryParameter['sort_key'] = sortKey;
            }
            if (patchStatus !== null && patchStatus !== undefined) {
                localVarQueryParameter['patch_status'] = patchStatus;
            }
            if (classification !== null && classification !== undefined) {
                localVarQueryParameter['classification'] = classification;
            }
            if (severityLevel !== null && severityLevel !== undefined) {
                localVarQueryParameter['severity_level'] = severityLevel;
            }
            if (complianceLevel !== null && complianceLevel !== undefined) {
                localVarQueryParameter['compliance_level'] = complianceLevel;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_compliant_id': instanceCompliantId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 支持租户将自开发的监控系统按照标准化集成至COC，集成后告警会按照标准格式上报至COC告警中心
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createReportCustomEvent(createReportCustomEventRequest?: CreateReportCustomEventRequest) {
            const options = {
                method: "POST",
                url: "/v1/event/huawei/custom/{integration_key}",
                contentType: "application/json; charset=utf-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let integrationKey;

            if (createReportCustomEventRequest !== null && createReportCustomEventRequest !== undefined) {
                if (createReportCustomEventRequest instanceof CreateReportCustomEventRequest) {
                    integrationKey = createReportCustomEventRequest.integrationKey;
                    body = createReportCustomEventRequest.body
                } else {
                    integrationKey = createReportCustomEventRequest['integration_key'];
                    body = createReportCustomEventRequest['body'];
                }
            }

        
            if (integrationKey === null || integrationKey === undefined) {
            throw new RequiredError('integrationKey','Required parameter integrationKey was null or undefined when calling createReportCustomEvent.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json; charset=utf-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'integration_key': integrationKey, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建自定义作业
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createDocument(createDocumentRequest?: CreateDocumentRequest) {
            const options = {
                method: "POST",
                url: "/v1/documents",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createDocumentRequest !== null && createDocumentRequest !== undefined) {
                if (createDocumentRequest instanceof CreateDocumentRequest) {
                    body = createDocumentRequest.body
                } else {
                    body = createDocumentRequest['body'];
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
         * 删除自定义作业
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteDocument(deleteDocumentRequest?: DeleteDocumentRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/documents/{document_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let documentId;

            if (deleteDocumentRequest !== null && deleteDocumentRequest !== undefined) {
                if (deleteDocumentRequest instanceof DeleteDocumentRequest) {
                    documentId = deleteDocumentRequest.documentId;
                } else {
                    documentId = deleteDocumentRequest['document_id'];
                }
            }

        
            if (documentId === null || documentId === undefined) {
            throw new RequiredError('documentId','Required parameter documentId was null or undefined when calling deleteDocument.');
            }

            options.pathParams = { 'document_id': documentId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 执行自定义作业
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        executeDocument(executeDocumentRequest?: ExecuteDocumentRequest) {
            const options = {
                method: "POST",
                url: "/v1/documents/{document_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let documentId;

            if (executeDocumentRequest !== null && executeDocumentRequest !== undefined) {
                if (executeDocumentRequest instanceof ExecuteDocumentRequest) {
                    documentId = executeDocumentRequest.documentId;
                    body = executeDocumentRequest.body
                } else {
                    documentId = executeDocumentRequest['document_id'];
                    body = executeDocumentRequest['body'];
                }
            }

        
            if (documentId === null || documentId === undefined) {
            throw new RequiredError('documentId','Required parameter documentId was null or undefined when calling executeDocument.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'document_id': documentId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询自定义作业详情
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        getDocument(getDocumentRequest?: GetDocumentRequest) {
            const options = {
                method: "GET",
                url: "/v1/documents/{document_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let documentId;
            
            let version;
            
            let documentType;

            if (getDocumentRequest !== null && getDocumentRequest !== undefined) {
                if (getDocumentRequest instanceof GetDocumentRequest) {
                    documentId = getDocumentRequest.documentId;
                    version = getDocumentRequest.version;
                    documentType = getDocumentRequest.documentType;
                } else {
                    documentId = getDocumentRequest['document_id'];
                    version = getDocumentRequest['version'];
                    documentType = getDocumentRequest['document_type'];
                }
            }

        
            if (documentId === null || documentId === undefined) {
            throw new RequiredError('documentId','Required parameter documentId was null or undefined when calling getDocument.');
            }
            if (version !== null && version !== undefined) {
                localVarQueryParameter['version'] = version;
            }
            if (documentType !== null && documentType !== undefined) {
                localVarQueryParameter['document_type'] = documentType;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'document_id': documentId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取原子能力详细
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        getDocumentAtomicInfo(getDocumentAtomicInfoRequest?: GetDocumentAtomicInfoRequest) {
            const options = {
                method: "GET",
                url: "/v1/atomics/{atomic_unique_key}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let atomicUniqueKey;

            if (getDocumentAtomicInfoRequest !== null && getDocumentAtomicInfoRequest !== undefined) {
                if (getDocumentAtomicInfoRequest instanceof GetDocumentAtomicInfoRequest) {
                    atomicUniqueKey = getDocumentAtomicInfoRequest.atomicUniqueKey;
                } else {
                    atomicUniqueKey = getDocumentAtomicInfoRequest['atomic_unique_key'];
                }
            }

        
            if (atomicUniqueKey === null || atomicUniqueKey === undefined) {
            throw new RequiredError('atomicUniqueKey','Required parameter atomicUniqueKey was null or undefined when calling getDocumentAtomicInfo.');
            }

            options.pathParams = { 'atomic_unique_key': atomicUniqueKey, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取原子能力列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listDocumentAtomics(listDocumentAtomicsRequest?: ListDocumentAtomicsRequest) {
            const options = {
                method: "GET",
                url: "/v1/atomics",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let limit;
            
            let offset;

            if (listDocumentAtomicsRequest !== null && listDocumentAtomicsRequest !== undefined) {
                if (listDocumentAtomicsRequest instanceof ListDocumentAtomicsRequest) {
                    limit = listDocumentAtomicsRequest.limit;
                    offset = listDocumentAtomicsRequest.offset;
                } else {
                    limit = listDocumentAtomicsRequest['limit'];
                    offset = listDocumentAtomicsRequest['offset'];
                }
            }

        
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询自定义作业列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listDocuments(listDocumentsRequest?: ListDocumentsRequest) {
            const options = {
                method: "GET",
                url: "/v1/documents",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let limit;
            
            let offset;
            
            let nameLike;
            
            let creator;
            
            let enterpriseProjectId;
            
            let documentType;

            if (listDocumentsRequest !== null && listDocumentsRequest !== undefined) {
                if (listDocumentsRequest instanceof ListDocumentsRequest) {
                    limit = listDocumentsRequest.limit;
                    offset = listDocumentsRequest.offset;
                    nameLike = listDocumentsRequest.nameLike;
                    creator = listDocumentsRequest.creator;
                    enterpriseProjectId = listDocumentsRequest.enterpriseProjectId;
                    documentType = listDocumentsRequest.documentType;
                } else {
                    limit = listDocumentsRequest['limit'];
                    offset = listDocumentsRequest['offset'];
                    nameLike = listDocumentsRequest['name_like'];
                    creator = listDocumentsRequest['creator'];
                    enterpriseProjectId = listDocumentsRequest['enterprise_project_id'];
                    documentType = listDocumentsRequest['document_type'];
                }
            }

        
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (nameLike !== null && nameLike !== undefined) {
                localVarQueryParameter['name_like'] = nameLike;
            }
            if (creator !== null && creator !== undefined) {
                localVarQueryParameter['creator'] = creator;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (documentType !== null && documentType !== undefined) {
                localVarQueryParameter['document_type'] = documentType;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改自定义作业
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateDocument(updateDocumentRequest?: UpdateDocumentRequest) {
            const options = {
                method: "PUT",
                url: "/v1/documents/{document_id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let documentId;

            if (updateDocumentRequest !== null && updateDocumentRequest !== undefined) {
                if (updateDocumentRequest instanceof UpdateDocumentRequest) {
                    documentId = updateDocumentRequest.documentId;
                    body = updateDocumentRequest.body
                } else {
                    documentId = updateDocumentRequest['document_id'];
                    body = updateDocumentRequest['body'];
                }
            }

        
            if (documentId === null || documentId === undefined) {
            throw new RequiredError('documentId','Required parameter documentId was null or undefined when calling updateDocument.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'document_id': documentId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * Prometheus事件接入
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createReportPrometheusEvent(createReportPrometheusEventRequest?: CreateReportPrometheusEventRequest) {
            const options = {
                method: "POST",
                url: "/v1/event/prometheus/{integration_key}",
                contentType: "application/json; charset=utf-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let integrationKey;

            if (createReportPrometheusEventRequest !== null && createReportPrometheusEventRequest !== undefined) {
                if (createReportPrometheusEventRequest instanceof CreateReportPrometheusEventRequest) {
                    integrationKey = createReportPrometheusEventRequest.integrationKey;
                    body = createReportPrometheusEventRequest.body
                } else {
                    integrationKey = createReportPrometheusEventRequest['integration_key'];
                    body = createReportPrometheusEventRequest['body'];
                }
            }

        
            if (integrationKey === null || integrationKey === undefined) {
            throw new RequiredError('integrationKey','Required parameter integrationKey was null or undefined when calling createReportPrometheusEvent.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json; charset=utf-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'integration_key': integrationKey, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询作业工单详情
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        getExecution(getExecutionRequest?: GetExecutionRequest) {
            const options = {
                method: "GET",
                url: "/v1/executions/{execution_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let executionId;

            if (getExecutionRequest !== null && getExecutionRequest !== undefined) {
                if (getExecutionRequest instanceof GetExecutionRequest) {
                    executionId = getExecutionRequest.executionId;
                } else {
                    executionId = getExecutionRequest['execution_id'];
                }
            }

        
            if (executionId === null || executionId === undefined) {
            throw new RequiredError('executionId','Required parameter executionId was null or undefined when calling getExecution.');
            }

            options.pathParams = { 'execution_id': executionId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询工单步骤批次实例，如脚本分批操作里的ECS实例
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listExecutionInstances(listExecutionInstancesRequest?: ListExecutionInstancesRequest) {
            const options = {
                method: "GET",
                url: "/v1/executions/instances",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let limit;
            
            let offset;
            
            let executionStepId;

            if (listExecutionInstancesRequest !== null && listExecutionInstancesRequest !== undefined) {
                if (listExecutionInstancesRequest instanceof ListExecutionInstancesRequest) {
                    limit = listExecutionInstancesRequest.limit;
                    offset = listExecutionInstancesRequest.offset;
                    executionStepId = listExecutionInstancesRequest.executionStepId;
                } else {
                    limit = listExecutionInstancesRequest['limit'];
                    offset = listExecutionInstancesRequest['offset'];
                    executionStepId = listExecutionInstancesRequest['execution_step_id'];
                }
            }

        
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (executionStepId !== null && executionStepId !== undefined) {
                localVarQueryParameter['execution_step_id'] = executionStepId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询工单步骤详情
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listExecutionSteps(listExecutionStepsRequest?: ListExecutionStepsRequest) {
            const options = {
                method: "GET",
                url: "/v1/executions/{execution_id}/steps",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let executionId;
            
            let limit;
            
            let offset;
            
            let executionStepIdList;

            if (listExecutionStepsRequest !== null && listExecutionStepsRequest !== undefined) {
                if (listExecutionStepsRequest instanceof ListExecutionStepsRequest) {
                    executionId = listExecutionStepsRequest.executionId;
                    limit = listExecutionStepsRequest.limit;
                    offset = listExecutionStepsRequest.offset;
                    executionStepIdList = listExecutionStepsRequest.executionStepIdList;
                } else {
                    executionId = listExecutionStepsRequest['execution_id'];
                    limit = listExecutionStepsRequest['limit'];
                    offset = listExecutionStepsRequest['offset'];
                    executionStepIdList = listExecutionStepsRequest['execution_step_id_list'];
                }
            }

        
            if (executionId === null || executionId === undefined) {
            throw new RequiredError('executionId','Required parameter executionId was null or undefined when calling listExecutionSteps.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (executionStepIdList !== null && executionStepIdList !== undefined) {
                localVarQueryParameter['execution_step_id_list'] = executionStepIdList;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'execution_id': executionId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询作业工单列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listExecutions(listExecutionsRequest?: ListExecutionsRequest) {
            const options = {
                method: "GET",
                url: "/v1/executions",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let limit;
            
            let offset;
            
            let creator;
            
            let startTime;
            
            let endTime;
            
            let documentName;
            
            let documentId;
            
            let tags;
            
            let excludeChildExecutions;

            if (listExecutionsRequest !== null && listExecutionsRequest !== undefined) {
                if (listExecutionsRequest instanceof ListExecutionsRequest) {
                    limit = listExecutionsRequest.limit;
                    offset = listExecutionsRequest.offset;
                    creator = listExecutionsRequest.creator;
                    startTime = listExecutionsRequest.startTime;
                    endTime = listExecutionsRequest.endTime;
                    documentName = listExecutionsRequest.documentName;
                    documentId = listExecutionsRequest.documentId;
                    tags = listExecutionsRequest.tags;
                    excludeChildExecutions = listExecutionsRequest.excludeChildExecutions;
                } else {
                    limit = listExecutionsRequest['limit'];
                    offset = listExecutionsRequest['offset'];
                    creator = listExecutionsRequest['creator'];
                    startTime = listExecutionsRequest['start_time'];
                    endTime = listExecutionsRequest['end_time'];
                    documentName = listExecutionsRequest['document_name'];
                    documentId = listExecutionsRequest['document_id'];
                    tags = listExecutionsRequest['tags'];
                    excludeChildExecutions = listExecutionsRequest['exclude_child_executions'];
                }
            }

        
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (creator !== null && creator !== undefined) {
                localVarQueryParameter['creator'] = creator;
            }
            if (startTime !== null && startTime !== undefined) {
                localVarQueryParameter['start_time'] = startTime;
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }
            if (documentName !== null && documentName !== undefined) {
                localVarQueryParameter['document_name'] = documentName;
            }
            if (documentId !== null && documentId !== undefined) {
                localVarQueryParameter['document_id'] = documentId;
            }
            if (tags !== null && tags !== undefined) {
                localVarQueryParameter['tags'] = tags;
            }
            if (excludeChildExecutions !== null && excludeChildExecutions !== undefined) {
                localVarQueryParameter['exclude_child_executions'] = excludeChildExecutions;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 操作工单
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        operateExecution(operateExecutionRequest?: OperateExecutionRequest) {
            const options = {
                method: "POST",
                url: "/v1/executions",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (operateExecutionRequest !== null && operateExecutionRequest !== undefined) {
                if (operateExecutionRequest instanceof OperateExecutionRequest) {
                    body = operateExecutionRequest.body
                } else {
                    body = operateExecutionRequest['body'];
                }
            }

        
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * CreateExternalIncident 创建事件单
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createCocIncident(createCocIncidentRequest?: CreateCocIncidentRequest) {
            const options = {
                method: "POST",
                url: "/v1/external/incident/create",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createCocIncidentRequest !== null && createCocIncidentRequest !== undefined) {
                if (createCocIncidentRequest instanceof CreateCocIncidentRequest) {
                    body = createCocIncidentRequest.body
                } else {
                    body = createCocIncidentRequest['body'];
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
         * HandleCocIncident 处理事件单
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        handleCocIncident(handleCocIncidentRequest?: HandleCocIncidentRequest) {
            const options = {
                method: "POST",
                url: "/v1/external/incident/handle",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (handleCocIncidentRequest !== null && handleCocIncidentRequest !== undefined) {
                if (handleCocIncidentRequest instanceof HandleCocIncidentRequest) {
                    body = handleCocIncidentRequest.body
                } else {
                    body = handleCocIncidentRequest['body'];
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
         * ListCocTicketOperationHistories  获取事件单历史
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listCocTicketOperationHistories(listCocTicketOperationHistoriesRequest?: ListCocTicketOperationHistoriesRequest) {
            const options = {
                method: "POST",
                url: "/v1/external/{ticket_type}/list-histories",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let ticketType;

            if (listCocTicketOperationHistoriesRequest !== null && listCocTicketOperationHistoriesRequest !== undefined) {
                if (listCocTicketOperationHistoriesRequest instanceof ListCocTicketOperationHistoriesRequest) {
                    ticketType = listCocTicketOperationHistoriesRequest.ticketType;
                    body = listCocTicketOperationHistoriesRequest.body
                } else {
                    ticketType = listCocTicketOperationHistoriesRequest['ticket_type'];
                    body = listCocTicketOperationHistoriesRequest['body'];
                }
            }

        
            if (ticketType === null || ticketType === undefined) {
            throw new RequiredError('ticketType','Required parameter ticketType was null or undefined when calling listCocTicketOperationHistories.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'ticket_type': ticketType, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * ShowCocIncidentDetail  获取事件单详细
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showCocIncidentDetail(showCocIncidentDetailRequest?: ShowCocIncidentDetailRequest) {
            const options = {
                method: "GET",
                url: "/v1/external/incident/{incident_num}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let incidentNum;

            if (showCocIncidentDetailRequest !== null && showCocIncidentDetailRequest !== undefined) {
                if (showCocIncidentDetailRequest instanceof ShowCocIncidentDetailRequest) {
                    incidentNum = showCocIncidentDetailRequest.incidentNum;
                } else {
                    incidentNum = showCocIncidentDetailRequest['incident_num'];
                }
            }

        
            if (incidentNum === null || incidentNum === undefined) {
            throw new RequiredError('incidentNum','Required parameter incidentNum was null or undefined when calling showCocIncidentDetail.');
            }

            options.pathParams = { 'incident_num': incidentNum, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * CreateExternalIssues 创建问题单
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createCocIssues(createCocIssuesRequest?: CreateCocIssuesRequest) {
            const options = {
                method: "POST",
                url: "/v1/external/issues/create",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createCocIssuesRequest !== null && createCocIssuesRequest !== undefined) {
                if (createCocIssuesRequest instanceof CreateCocIssuesRequest) {
                    body = createCocIssuesRequest.body
                } else {
                    body = createCocIssuesRequest['body'];
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
         * ShowCocIssuesDetail  获取事件单详细
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showCocIssuesDetail(showCocIssuesDetailRequest?: ShowCocIssuesDetailRequest) {
            const options = {
                method: "GET",
                url: "/v1/external/issues/{ticket_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let ticketId;

            if (showCocIssuesDetailRequest !== null && showCocIssuesDetailRequest !== undefined) {
                if (showCocIssuesDetailRequest instanceof ShowCocIssuesDetailRequest) {
                    ticketId = showCocIssuesDetailRequest.ticketId;
                } else {
                    ticketId = showCocIssuesDetailRequest['ticket_id'];
                }
            }

        
            if (ticketId === null || ticketId === undefined) {
            throw new RequiredError('ticketId','Required parameter ticketId was null or undefined when calling showCocIssuesDetail.');
            }

            options.pathParams = { 'ticket_id': ticketId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询COC可授权单列表（变更单号、事件单号、warroom和告警）
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAuthorizableTicketsExternal(listAuthorizableTicketsExternalRequest?: ListAuthorizableTicketsExternalRequest) {
            const options = {
                method: "POST",
                url: "/v1/external/list/authorizable-tickets",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (listAuthorizableTicketsExternalRequest !== null && listAuthorizableTicketsExternalRequest !== undefined) {
                if (listAuthorizableTicketsExternalRequest instanceof ListAuthorizableTicketsExternalRequest) {
                    body = listAuthorizableTicketsExternalRequest.body
                } else {
                    body = listAuthorizableTicketsExternalRequest['body'];
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
         * 查询用户在云厂商中的资源
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listMultiCloudResources(listMultiCloudResourcesRequest?: ListMultiCloudResourcesRequest) {
            const options = {
                method: "GET",
                url: "/v1/multicloud-resources",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let vendor;
            
            let limit;
            
            let type;
            
            let marker;
            
            let resourceIdList;
            
            let nameList;
            
            let regionIdList;

            if (listMultiCloudResourcesRequest !== null && listMultiCloudResourcesRequest !== undefined) {
                if (listMultiCloudResourcesRequest instanceof ListMultiCloudResourcesRequest) {
                    vendor = listMultiCloudResourcesRequest.vendor;
                    limit = listMultiCloudResourcesRequest.limit;
                    type = listMultiCloudResourcesRequest.type;
                    marker = listMultiCloudResourcesRequest.marker;
                    resourceIdList = listMultiCloudResourcesRequest.resourceIdList;
                    nameList = listMultiCloudResourcesRequest.nameList;
                    regionIdList = listMultiCloudResourcesRequest.regionIdList;
                } else {
                    vendor = listMultiCloudResourcesRequest['vendor'];
                    limit = listMultiCloudResourcesRequest['limit'];
                    type = listMultiCloudResourcesRequest['type'];
                    marker = listMultiCloudResourcesRequest['marker'];
                    resourceIdList = listMultiCloudResourcesRequest['resource_id_list'];
                    nameList = listMultiCloudResourcesRequest['name_list'];
                    regionIdList = listMultiCloudResourcesRequest['region_id_list'];
                }
            }

        
            if (vendor === null || vendor === undefined) {
                throw new RequiredError('vendor','Required parameter vendor was null or undefined when calling listMultiCloudResources.');
            }
            if (vendor !== null && vendor !== undefined) {
                localVarQueryParameter['vendor'] = vendor;
            }
            if (limit === null || limit === undefined) {
                throw new RequiredError('limit','Required parameter limit was null or undefined when calling listMultiCloudResources.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (resourceIdList !== null && resourceIdList !== undefined) {
                localVarQueryParameter['resource_id_list'] = resourceIdList;
            }
            if (nameList !== null && nameList !== undefined) {
                localVarQueryParameter['name_list'] = nameList;
            }
            if (regionIdList !== null && regionIdList !== undefined) {
                localVarQueryParameter['region_id_list'] = regionIdList;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询用户各种资源总数
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        countMultiResources(countMultiResourcesRequest?: CountMultiResourcesRequest) {
            const options = {
                method: "GET",
                url: "/v1/resources/multi-count",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let vendor;
            
            let viewId;
            
            let isResource;
            
            let regionId;

            if (countMultiResourcesRequest !== null && countMultiResourcesRequest !== undefined) {
                if (countMultiResourcesRequest instanceof CountMultiResourcesRequest) {
                    vendor = countMultiResourcesRequest.vendor;
                    viewId = countMultiResourcesRequest.viewId;
                    isResource = countMultiResourcesRequest.isResource;
                    regionId = countMultiResourcesRequest.regionId;
                } else {
                    vendor = countMultiResourcesRequest['vendor'];
                    viewId = countMultiResourcesRequest['view_id'];
                    isResource = countMultiResourcesRequest['is_resource'];
                    regionId = countMultiResourcesRequest['region_id'];
                }
            }

        
            if (vendor === null || vendor === undefined) {
                throw new RequiredError('vendor','Required parameter vendor was null or undefined when calling countMultiResources.');
            }
            if (vendor !== null && vendor !== undefined) {
                localVarQueryParameter['vendor'] = vendor;
            }
            if (viewId !== null && viewId !== undefined) {
                localVarQueryParameter['view_id'] = viewId;
            }
            if (isResource !== null && isResource !== undefined) {
                localVarQueryParameter['is_resource'] = isResource;
            }
            if (regionId !== null && regionId !== undefined) {
                localVarQueryParameter['region_id'] = regionId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询用户所有资源
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listResource(listResourceRequest?: ListResourceRequest) {
            const options = {
                method: "GET",
                url: "/v1/resources",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let provider;
            
            let type;
            
            let limit;
            
            let marker;
            
            let resourceIdList;
            
            let name;
            
            let regionId;
            
            let azId;
            
            let ipType;
            
            let ip;
            
            let status;
            
            let agentState;
            
            let imageName;
            
            let osType;
            
            let tag;
            
            let tagKey;
            
            let groupId;
            
            let componentId;
            
            let applicationId;
            
            let cceClusterId;
            
            let vpcId;
            
            let epId;
            
            let isDelegated;

            if (listResourceRequest !== null && listResourceRequest !== undefined) {
                if (listResourceRequest instanceof ListResourceRequest) {
                    provider = listResourceRequest.provider;
                    type = listResourceRequest.type;
                    limit = listResourceRequest.limit;
                    marker = listResourceRequest.marker;
                    resourceIdList = listResourceRequest.resourceIdList;
                    name = listResourceRequest.name;
                    regionId = listResourceRequest.regionId;
                    azId = listResourceRequest.azId;
                    ipType = listResourceRequest.ipType;
                    ip = listResourceRequest.ip;
                    status = listResourceRequest.status;
                    agentState = listResourceRequest.agentState;
                    imageName = listResourceRequest.imageName;
                    osType = listResourceRequest.osType;
                    tag = listResourceRequest.tag;
                    tagKey = listResourceRequest.tagKey;
                    groupId = listResourceRequest.groupId;
                    componentId = listResourceRequest.componentId;
                    applicationId = listResourceRequest.applicationId;
                    cceClusterId = listResourceRequest.cceClusterId;
                    vpcId = listResourceRequest.vpcId;
                    epId = listResourceRequest.epId;
                    isDelegated = listResourceRequest.isDelegated;
                } else {
                    provider = listResourceRequest['provider'];
                    type = listResourceRequest['type'];
                    limit = listResourceRequest['limit'];
                    marker = listResourceRequest['marker'];
                    resourceIdList = listResourceRequest['resource_id_list'];
                    name = listResourceRequest['name'];
                    regionId = listResourceRequest['region_id'];
                    azId = listResourceRequest['az_id'];
                    ipType = listResourceRequest['ip_type'];
                    ip = listResourceRequest['ip'];
                    status = listResourceRequest['status'];
                    agentState = listResourceRequest['agent_state'];
                    imageName = listResourceRequest['image_name'];
                    osType = listResourceRequest['os_type'];
                    tag = listResourceRequest['tag'];
                    tagKey = listResourceRequest['tag_key'];
                    groupId = listResourceRequest['group_id'];
                    componentId = listResourceRequest['component_id'];
                    applicationId = listResourceRequest['application_id'];
                    cceClusterId = listResourceRequest['cce_cluster_id'];
                    vpcId = listResourceRequest['vpc_id'];
                    epId = listResourceRequest['ep_id'];
                    isDelegated = listResourceRequest['is_delegated'];
                }
            }

        
            if (provider === null || provider === undefined) {
                throw new RequiredError('provider','Required parameter provider was null or undefined when calling listResource.');
            }
            if (provider !== null && provider !== undefined) {
                localVarQueryParameter['provider'] = provider;
            }
            if (type === null || type === undefined) {
                throw new RequiredError('type','Required parameter type was null or undefined when calling listResource.');
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }
            if (limit === null || limit === undefined) {
                throw new RequiredError('limit','Required parameter limit was null or undefined when calling listResource.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (resourceIdList !== null && resourceIdList !== undefined) {
                localVarQueryParameter['resource_id_list'] = resourceIdList;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (regionId !== null && regionId !== undefined) {
                localVarQueryParameter['region_id'] = regionId;
            }
            if (azId !== null && azId !== undefined) {
                localVarQueryParameter['az_id'] = azId;
            }
            if (ipType !== null && ipType !== undefined) {
                localVarQueryParameter['ip_type'] = ipType;
            }
            if (ip !== null && ip !== undefined) {
                localVarQueryParameter['ip'] = ip;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (agentState !== null && agentState !== undefined) {
                localVarQueryParameter['agent_state'] = agentState;
            }
            if (imageName !== null && imageName !== undefined) {
                localVarQueryParameter['image_name'] = imageName;
            }
            if (osType !== null && osType !== undefined) {
                localVarQueryParameter['os_type'] = osType;
            }
            if (tag !== null && tag !== undefined) {
                localVarQueryParameter['tag'] = tag;
            }
            if (tagKey !== null && tagKey !== undefined) {
                localVarQueryParameter['tag_key'] = tagKey;
            }
            if (groupId !== null && groupId !== undefined) {
                localVarQueryParameter['group_id'] = groupId;
            }
            if (componentId !== null && componentId !== undefined) {
                localVarQueryParameter['component_id'] = componentId;
            }
            if (applicationId !== null && applicationId !== undefined) {
                localVarQueryParameter['application_id'] = applicationId;
            }
            if (cceClusterId !== null && cceClusterId !== undefined) {
                localVarQueryParameter['cce_cluster_id'] = cceClusterId;
            }
            if (vpcId !== null && vpcId !== undefined) {
                localVarQueryParameter['vpc_id'] = vpcId;
            }
            if (epId !== null && epId !== undefined) {
                localVarQueryParameter['ep_id'] = epId;
            }
            if (isDelegated !== null && isDelegated !== undefined) {
                localVarQueryParameter['is_delegated'] = isDelegated;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 从RMS同步用户所有资源
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        syncResource(syncResourceRequest?: SyncResourceRequest) {
            const options = {
                method: "POST",
                url: "/v1/resources/sync",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (syncResourceRequest !== null && syncResourceRequest !== undefined) {
                if (syncResourceRequest instanceof SyncResourceRequest) {
                    body = syncResourceRequest.body
                } else {
                    body = syncResourceRequest['body'];
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
         * 查询资源标签列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listScriptResourceTags(listScriptResourceTagsRequest?: ListScriptResourceTagsRequest) {
            const options = {
                method: "GET",
                url: "/v1/script/{resource_type}/tags",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let resourceType;
            
            let limit;
            
            let offset;

            if (listScriptResourceTagsRequest !== null && listScriptResourceTagsRequest !== undefined) {
                if (listScriptResourceTagsRequest instanceof ListScriptResourceTagsRequest) {
                    resourceType = listScriptResourceTagsRequest.resourceType;
                    limit = listScriptResourceTagsRequest.limit;
                    offset = listScriptResourceTagsRequest.offset;
                } else {
                    resourceType = listScriptResourceTagsRequest['resource_type'];
                    limit = listScriptResourceTagsRequest['limit'];
                    offset = listScriptResourceTagsRequest['offset'];
                }
            }

        
            if (resourceType === null || resourceType === undefined) {
            throw new RequiredError('resourceType','Required parameter resourceType was null or undefined when calling listScriptResourceTags.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'resource_type': resourceType, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新资源标签
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateResourceTags(updateResourceTagsRequest?: UpdateResourceTagsRequest) {
            const options = {
                method: "POST",
                url: "/v1/script/{resource_type}/{resource_id}/tags/update",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let resourceId;
            
            let resourceType;

            if (updateResourceTagsRequest !== null && updateResourceTagsRequest !== undefined) {
                if (updateResourceTagsRequest instanceof UpdateResourceTagsRequest) {
                    resourceId = updateResourceTagsRequest.resourceId;
                    resourceType = updateResourceTagsRequest.resourceType;
                    body = updateResourceTagsRequest.body
                } else {
                    resourceId = updateResourceTagsRequest['resource_id'];
                    resourceType = updateResourceTagsRequest['resource_type'];
                    body = updateResourceTagsRequest['body'];
                }
            }

        
            if (resourceId === null || resourceId === undefined) {
            throw new RequiredError('resourceId','Required parameter resourceId was null or undefined when calling updateResourceTags.');
            }
            if (resourceType === null || resourceType === undefined) {
            throw new RequiredError('resourceType','Required parameter resourceType was null or undefined when calling updateResourceTags.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'resource_id': resourceId,'resource_type': resourceType, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * Create Scheduled Task
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createScheduledTask(createScheduledTaskRequest?: CreateScheduledTaskRequest) {
            const options = {
                method: "POST",
                url: "/v1/schedule/task",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createScheduledTaskRequest !== null && createScheduledTaskRequest !== undefined) {
                if (createScheduledTaskRequest instanceof CreateScheduledTaskRequest) {
                    body = createScheduledTaskRequest.body
                } else {
                    body = createScheduledTaskRequest['body'];
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
         * Delete scheduled task by id
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteScheduledTask(deleteScheduledTaskRequest?: DeleteScheduledTaskRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/schedule/task/{task_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let taskId;

            if (deleteScheduledTaskRequest !== null && deleteScheduledTaskRequest !== undefined) {
                if (deleteScheduledTaskRequest instanceof DeleteScheduledTaskRequest) {
                    taskId = deleteScheduledTaskRequest.taskId;
                } else {
                    taskId = deleteScheduledTaskRequest['task_id'];
                }
            }

        
            if (taskId === null || taskId === undefined) {
            throw new RequiredError('taskId','Required parameter taskId was null or undefined when calling deleteScheduledTask.');
            }

            options.pathParams = { 'task_id': taskId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * Disable scheduled task by id
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        disableScheduledTask(disableScheduledTaskRequest?: DisableScheduledTaskRequest) {
            const options = {
                method: "POST",
                url: "/v1/schedule/task/{task_id}/disable",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let taskId;

            if (disableScheduledTaskRequest !== null && disableScheduledTaskRequest !== undefined) {
                if (disableScheduledTaskRequest instanceof DisableScheduledTaskRequest) {
                    taskId = disableScheduledTaskRequest.taskId;
                } else {
                    taskId = disableScheduledTaskRequest['task_id'];
                }
            }

        
            if (taskId === null || taskId === undefined) {
            throw new RequiredError('taskId','Required parameter taskId was null or undefined when calling disableScheduledTask.');
            }

            options.pathParams = { 'task_id': taskId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * Enable scheduled task by id
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        enableScheduledTask(enableScheduledTaskRequest?: EnableScheduledTaskRequest) {
            const options = {
                method: "POST",
                url: "/v1/schedule/task/{task_id}/enable",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let taskId;

            if (enableScheduledTaskRequest !== null && enableScheduledTaskRequest !== undefined) {
                if (enableScheduledTaskRequest instanceof EnableScheduledTaskRequest) {
                    taskId = enableScheduledTaskRequest.taskId;
                    body = enableScheduledTaskRequest.body
                } else {
                    taskId = enableScheduledTaskRequest['task_id'];
                    body = enableScheduledTaskRequest['body'];
                }
            }

        
            if (taskId === null || taskId === undefined) {
            throw new RequiredError('taskId','Required parameter taskId was null or undefined when calling enableScheduledTask.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'task_id': taskId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * Get ScheduledTask infos
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listScheduledTask(listScheduledTaskRequest?: ListScheduledTaskRequest) {
            const options = {
                method: "GET",
                url: "/v1/schedule/task",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let enterpriseProjectId;
            
            let taskId;
            
            let taskName;
            
            let scheduledType;
            
            let taskType;
            
            let associatedTaskType;
            
            let riskLevel;
            
            let createdBy;
            
            let reviewer;
            
            let reviewerUserName;
            
            let approveStatus;
            
            let lastExecutionStatus;
            
            let lastExecutionStartTime;
            
            let lastExecutionEndTime;
            
            let marker;
            
            let regionId;
            
            let resourceId;
            
            let offset;
            
            let limit;

            if (listScheduledTaskRequest !== null && listScheduledTaskRequest !== undefined) {
                if (listScheduledTaskRequest instanceof ListScheduledTaskRequest) {
                    enterpriseProjectId = listScheduledTaskRequest.enterpriseProjectId;
                    taskId = listScheduledTaskRequest.taskId;
                    taskName = listScheduledTaskRequest.taskName;
                    scheduledType = listScheduledTaskRequest.scheduledType;
                    taskType = listScheduledTaskRequest.taskType;
                    associatedTaskType = listScheduledTaskRequest.associatedTaskType;
                    riskLevel = listScheduledTaskRequest.riskLevel;
                    createdBy = listScheduledTaskRequest.createdBy;
                    reviewer = listScheduledTaskRequest.reviewer;
                    reviewerUserName = listScheduledTaskRequest.reviewerUserName;
                    approveStatus = listScheduledTaskRequest.approveStatus;
                    lastExecutionStatus = listScheduledTaskRequest.lastExecutionStatus;
                    lastExecutionStartTime = listScheduledTaskRequest.lastExecutionStartTime;
                    lastExecutionEndTime = listScheduledTaskRequest.lastExecutionEndTime;
                    marker = listScheduledTaskRequest.marker;
                    regionId = listScheduledTaskRequest.regionId;
                    resourceId = listScheduledTaskRequest.resourceId;
                    offset = listScheduledTaskRequest.offset;
                    limit = listScheduledTaskRequest.limit;
                } else {
                    enterpriseProjectId = listScheduledTaskRequest['enterprise_project_id'];
                    taskId = listScheduledTaskRequest['task_id'];
                    taskName = listScheduledTaskRequest['task_name'];
                    scheduledType = listScheduledTaskRequest['scheduled_type'];
                    taskType = listScheduledTaskRequest['task_type'];
                    associatedTaskType = listScheduledTaskRequest['associated_task_type'];
                    riskLevel = listScheduledTaskRequest['risk_level'];
                    createdBy = listScheduledTaskRequest['created_by'];
                    reviewer = listScheduledTaskRequest['reviewer'];
                    reviewerUserName = listScheduledTaskRequest['reviewer_user_name'];
                    approveStatus = listScheduledTaskRequest['approve_status'];
                    lastExecutionStatus = listScheduledTaskRequest['last_execution_status'];
                    lastExecutionStartTime = listScheduledTaskRequest['last_execution_start_time'];
                    lastExecutionEndTime = listScheduledTaskRequest['last_execution_end_time'];
                    marker = listScheduledTaskRequest['marker'];
                    regionId = listScheduledTaskRequest['region_id'];
                    resourceId = listScheduledTaskRequest['resource_id'];
                    offset = listScheduledTaskRequest['offset'];
                    limit = listScheduledTaskRequest['limit'];
                }
            }

        
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (taskId !== null && taskId !== undefined) {
                localVarQueryParameter['task_id'] = taskId;
            }
            if (taskName !== null && taskName !== undefined) {
                localVarQueryParameter['task_name'] = taskName;
            }
            if (scheduledType !== null && scheduledType !== undefined) {
                localVarQueryParameter['scheduled_type'] = scheduledType;
            }
            if (taskType !== null && taskType !== undefined) {
                localVarQueryParameter['task_type'] = taskType;
            }
            if (associatedTaskType !== null && associatedTaskType !== undefined) {
                localVarQueryParameter['associated_task_type'] = associatedTaskType;
            }
            if (riskLevel !== null && riskLevel !== undefined) {
                localVarQueryParameter['risk_level'] = riskLevel;
            }
            if (createdBy !== null && createdBy !== undefined) {
                localVarQueryParameter['created_by'] = createdBy;
            }
            if (reviewer !== null && reviewer !== undefined) {
                localVarQueryParameter['reviewer'] = reviewer;
            }
            if (reviewerUserName !== null && reviewerUserName !== undefined) {
                localVarQueryParameter['reviewer_user_name'] = reviewerUserName;
            }
            if (approveStatus !== null && approveStatus !== undefined) {
                localVarQueryParameter['approve_status'] = approveStatus;
            }
            if (lastExecutionStatus !== null && lastExecutionStatus !== undefined) {
                localVarQueryParameter['last_execution_status'] = lastExecutionStatus;
            }
            if (lastExecutionStartTime !== null && lastExecutionStartTime !== undefined) {
                localVarQueryParameter['last_execution_start_time'] = lastExecutionStartTime;
            }
            if (lastExecutionEndTime !== null && lastExecutionEndTime !== undefined) {
                localVarQueryParameter['last_execution_end_time'] = lastExecutionEndTime;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (regionId !== null && regionId !== undefined) {
                localVarQueryParameter['region_id'] = regionId;
            }
            if (resourceId !== null && resourceId !== undefined) {
                localVarQueryParameter['resource_id'] = resourceId;
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
         * get scheduled task history list
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listScheduledTaskHistory(listScheduledTaskHistoryRequest?: ListScheduledTaskHistoryRequest) {
            const options = {
                method: "GET",
                url: "/v1/schedule/task/history",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let taskId;
            
            let limit;
            
            let id;
            
            let region;
            
            let status;
            
            let startedStartTime;
            
            let startedEndTime;
            
            let finishedStartTime;
            
            let finishedEndTime;
            
            let marker;
            
            let offset;
            
            let sortKey;
            
            let sortDir;

            if (listScheduledTaskHistoryRequest !== null && listScheduledTaskHistoryRequest !== undefined) {
                if (listScheduledTaskHistoryRequest instanceof ListScheduledTaskHistoryRequest) {
                    taskId = listScheduledTaskHistoryRequest.taskId;
                    limit = listScheduledTaskHistoryRequest.limit;
                    id = listScheduledTaskHistoryRequest.id;
                    region = listScheduledTaskHistoryRequest.region;
                    status = listScheduledTaskHistoryRequest.status;
                    startedStartTime = listScheduledTaskHistoryRequest.startedStartTime;
                    startedEndTime = listScheduledTaskHistoryRequest.startedEndTime;
                    finishedStartTime = listScheduledTaskHistoryRequest.finishedStartTime;
                    finishedEndTime = listScheduledTaskHistoryRequest.finishedEndTime;
                    marker = listScheduledTaskHistoryRequest.marker;
                    offset = listScheduledTaskHistoryRequest.offset;
                    sortKey = listScheduledTaskHistoryRequest.sortKey;
                    sortDir = listScheduledTaskHistoryRequest.sortDir;
                } else {
                    taskId = listScheduledTaskHistoryRequest['task_id'];
                    limit = listScheduledTaskHistoryRequest['limit'];
                    id = listScheduledTaskHistoryRequest['id'];
                    region = listScheduledTaskHistoryRequest['region'];
                    status = listScheduledTaskHistoryRequest['status'];
                    startedStartTime = listScheduledTaskHistoryRequest['started_start_time'];
                    startedEndTime = listScheduledTaskHistoryRequest['started_end_time'];
                    finishedStartTime = listScheduledTaskHistoryRequest['finished_start_time'];
                    finishedEndTime = listScheduledTaskHistoryRequest['finished_end_time'];
                    marker = listScheduledTaskHistoryRequest['marker'];
                    offset = listScheduledTaskHistoryRequest['offset'];
                    sortKey = listScheduledTaskHistoryRequest['sort_key'];
                    sortDir = listScheduledTaskHistoryRequest['sort_dir'];
                }
            }

        
            if (taskId === null || taskId === undefined) {
                throw new RequiredError('taskId','Required parameter taskId was null or undefined when calling listScheduledTaskHistory.');
            }
            if (taskId !== null && taskId !== undefined) {
                localVarQueryParameter['task_id'] = taskId;
            }
            if (limit === null || limit === undefined) {
                throw new RequiredError('limit','Required parameter limit was null or undefined when calling listScheduledTaskHistory.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (id !== null && id !== undefined) {
                localVarQueryParameter['id'] = id;
            }
            if (region !== null && region !== undefined) {
                localVarQueryParameter['region'] = region;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (startedStartTime !== null && startedStartTime !== undefined) {
                localVarQueryParameter['started_start_time'] = startedStartTime;
            }
            if (startedEndTime !== null && startedEndTime !== undefined) {
                localVarQueryParameter['started_end_time'] = startedEndTime;
            }
            if (finishedStartTime !== null && finishedStartTime !== undefined) {
                localVarQueryParameter['finished_start_time'] = finishedStartTime;
            }
            if (finishedEndTime !== null && finishedEndTime !== undefined) {
                localVarQueryParameter['finished_end_time'] = finishedEndTime;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (sortKey !== null && sortKey !== undefined) {
                localVarQueryParameter['sort_key'] = sortKey;
            }
            if (sortDir !== null && sortDir !== undefined) {
                localVarQueryParameter['sort_dir'] = sortDir;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * Get ScheduledTask info by id
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showScheduledTask(showScheduledTaskRequest?: ShowScheduledTaskRequest) {
            const options = {
                method: "GET",
                url: "/v1/schedule/task/{task_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let taskId;

            if (showScheduledTaskRequest !== null && showScheduledTaskRequest !== undefined) {
                if (showScheduledTaskRequest instanceof ShowScheduledTaskRequest) {
                    taskId = showScheduledTaskRequest.taskId;
                } else {
                    taskId = showScheduledTaskRequest['task_id'];
                }
            }

        
            if (taskId === null || taskId === undefined) {
            throw new RequiredError('taskId','Required parameter taskId was null or undefined when calling showScheduledTask.');
            }

            options.pathParams = { 'task_id': taskId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * Update ScheduledTask
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateScheduledTask(updateScheduledTaskRequest?: UpdateScheduledTaskRequest) {
            const options = {
                method: "PUT",
                url: "/v1/schedule/task/{task_id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let taskId;

            if (updateScheduledTaskRequest !== null && updateScheduledTaskRequest !== undefined) {
                if (updateScheduledTaskRequest instanceof UpdateScheduledTaskRequest) {
                    taskId = updateScheduledTaskRequest.taskId;
                    body = updateScheduledTaskRequest.body
                } else {
                    taskId = updateScheduledTaskRequest['task_id'];
                    body = updateScheduledTaskRequest['body'];
                }
            }

        
            if (taskId === null || taskId === undefined) {
            throw new RequiredError('taskId','Required parameter taskId was null or undefined when calling updateScheduledTask.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'task_id': taskId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询：批次详情，分页获取批次中的实例列表。
         * 过滤条件：分页参数
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        getScriptJobBatch(getScriptJobBatchRequest?: GetScriptJobBatchRequest) {
            const options = {
                method: "GET",
                url: "/v1/job/script/orders/{execute_uuid}/batches/{batch_index}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let batchIndex;
            
            let executeUuid;
            
            let limit;
            
            let status;
            
            let marker;
            
            let xLanguage;
            
            let xProjectId;
            
            let xUserProfile;

            if (getScriptJobBatchRequest !== null && getScriptJobBatchRequest !== undefined) {
                if (getScriptJobBatchRequest instanceof GetScriptJobBatchRequest) {
                    batchIndex = getScriptJobBatchRequest.batchIndex;
                    executeUuid = getScriptJobBatchRequest.executeUuid;
                    limit = getScriptJobBatchRequest.limit;
                    status = getScriptJobBatchRequest.status;
                    marker = getScriptJobBatchRequest.marker;
                    xLanguage = getScriptJobBatchRequest.xLanguage;
                    xProjectId = getScriptJobBatchRequest.xProjectId;
                    xUserProfile = getScriptJobBatchRequest.xUserProfile;
                } else {
                    batchIndex = getScriptJobBatchRequest['batch_index'];
                    executeUuid = getScriptJobBatchRequest['execute_uuid'];
                    limit = getScriptJobBatchRequest['limit'];
                    status = getScriptJobBatchRequest['status'];
                    marker = getScriptJobBatchRequest['marker'];
                    xLanguage = getScriptJobBatchRequest['X-Language'];
                    xProjectId = getScriptJobBatchRequest['x-project-id'];
                    xUserProfile = getScriptJobBatchRequest['x-user-profile'];
                }
            }

        
            if (batchIndex === null || batchIndex === undefined) {
            throw new RequiredError('batchIndex','Required parameter batchIndex was null or undefined when calling getScriptJobBatch.');
            }
            if (executeUuid === null || executeUuid === undefined) {
            throw new RequiredError('executeUuid','Required parameter executeUuid was null or undefined when calling getScriptJobBatch.');
            }
            if (limit === null || limit === undefined) {
                throw new RequiredError('limit','Required parameter limit was null or undefined when calling getScriptJobBatch.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }
            if (xProjectId !== undefined && xProjectId !== null) {
                localVarHeaderParameter['x-project-id'] = String(xProjectId);
            }
            if (xUserProfile !== undefined && xUserProfile !== null) {
                localVarHeaderParameter['x-user-profile'] = String(xUserProfile);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'batch_index': batchIndex,'execute_uuid': executeUuid, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询执行：基本信息
         * 执行类型、执行名称、创建人、创建时间、结束时间、执行状态、标签（脚本id，脚本名，执行脚本参数，执行用户，超时时长、成功率阈值）
         * 
         * 不同的任务类型消费标签中的不同key
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        getScriptJobInfo(getScriptJobInfoRequest?: GetScriptJobInfoRequest) {
            const options = {
                method: "GET",
                url: "/v1/job/script/orders/{execute_uuid}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let executeUuid;
            
            let xLanguage;
            
            let xProjectId;
            
            let xUserProfile;

            if (getScriptJobInfoRequest !== null && getScriptJobInfoRequest !== undefined) {
                if (getScriptJobInfoRequest instanceof GetScriptJobInfoRequest) {
                    executeUuid = getScriptJobInfoRequest.executeUuid;
                    xLanguage = getScriptJobInfoRequest.xLanguage;
                    xProjectId = getScriptJobInfoRequest.xProjectId;
                    xUserProfile = getScriptJobInfoRequest.xUserProfile;
                } else {
                    executeUuid = getScriptJobInfoRequest['execute_uuid'];
                    xLanguage = getScriptJobInfoRequest['X-Language'];
                    xProjectId = getScriptJobInfoRequest['x-project-id'];
                    xUserProfile = getScriptJobInfoRequest['x-user-profile'];
                }
            }

        
            if (executeUuid === null || executeUuid === undefined) {
            throw new RequiredError('executeUuid','Required parameter executeUuid was null or undefined when calling getScriptJobInfo.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }
            if (xProjectId !== undefined && xProjectId !== null) {
                localVarHeaderParameter['x-project-id'] = String(xProjectId);
            }
            if (xUserProfile !== undefined && xUserProfile !== null) {
                localVarHeaderParameter['x-user-profile'] = String(xUserProfile);
            }

            options.pathParams = { 'execute_uuid': executeUuid, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询：实例状态统计信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        getScriptJobStatistics(getScriptJobStatisticsRequest?: GetScriptJobStatisticsRequest) {
            const options = {
                method: "GET",
                url: "/v1/job/script/orders/{execute_uuid}/statistics",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let executeUuid;
            
            let xLanguage;
            
            let xProjectId;
            
            let xUserProfile;

            if (getScriptJobStatisticsRequest !== null && getScriptJobStatisticsRequest !== undefined) {
                if (getScriptJobStatisticsRequest instanceof GetScriptJobStatisticsRequest) {
                    executeUuid = getScriptJobStatisticsRequest.executeUuid;
                    xLanguage = getScriptJobStatisticsRequest.xLanguage;
                    xProjectId = getScriptJobStatisticsRequest.xProjectId;
                    xUserProfile = getScriptJobStatisticsRequest.xUserProfile;
                } else {
                    executeUuid = getScriptJobStatisticsRequest['execute_uuid'];
                    xLanguage = getScriptJobStatisticsRequest['X-Language'];
                    xProjectId = getScriptJobStatisticsRequest['x-project-id'];
                    xUserProfile = getScriptJobStatisticsRequest['x-user-profile'];
                }
            }

        
            if (executeUuid === null || executeUuid === undefined) {
            throw new RequiredError('executeUuid','Required parameter executeUuid was null or undefined when calling getScriptJobStatistics.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }
            if (xProjectId !== undefined && xProjectId !== null) {
                localVarHeaderParameter['x-project-id'] = String(xProjectId);
            }
            if (xUserProfile !== undefined && xUserProfile !== null) {
                localVarHeaderParameter['x-user-profile'] = String(xUserProfile);
            }

            options.pathParams = { 'execute_uuid': executeUuid, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询：批次列表
         * 返回：批次index、批次标签
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listScriptJobBatches(listScriptJobBatchesRequest?: ListScriptJobBatchesRequest) {
            const options = {
                method: "GET",
                url: "/v1/job/script/orders/{execute_uuid}/batches",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let executeUuid;
            
            let xLanguage;
            
            let xProjectId;
            
            let xUserProfile;

            if (listScriptJobBatchesRequest !== null && listScriptJobBatchesRequest !== undefined) {
                if (listScriptJobBatchesRequest instanceof ListScriptJobBatchesRequest) {
                    executeUuid = listScriptJobBatchesRequest.executeUuid;
                    xLanguage = listScriptJobBatchesRequest.xLanguage;
                    xProjectId = listScriptJobBatchesRequest.xProjectId;
                    xUserProfile = listScriptJobBatchesRequest.xUserProfile;
                } else {
                    executeUuid = listScriptJobBatchesRequest['execute_uuid'];
                    xLanguage = listScriptJobBatchesRequest['X-Language'];
                    xProjectId = listScriptJobBatchesRequest['x-project-id'];
                    xUserProfile = listScriptJobBatchesRequest['x-user-profile'];
                }
            }

        
            if (executeUuid === null || executeUuid === undefined) {
            throw new RequiredError('executeUuid','Required parameter executeUuid was null or undefined when calling listScriptJobBatches.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }
            if (xProjectId !== undefined && xProjectId !== null) {
                localVarHeaderParameter['x-project-id'] = String(xProjectId);
            }
            if (xUserProfile !== undefined && xUserProfile !== null) {
                localVarHeaderParameter['x-user-profile'] = String(xUserProfile);
            }

            options.pathParams = { 'execute_uuid': executeUuid, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询作业工单列表，分页查询
         * 过滤：创建时间开始，创建时间结束、创建人
         * 返回：id、脚本名称、区域、创建人、创建时间、结束时间、总耗时、状态
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listScriptJobs(listScriptJobsRequest?: ListScriptJobsRequest) {
            const options = {
                method: "GET",
                url: "/v1/job/script/orders",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let limit;
            
            let marker;
            
            let startTime;
            
            let endTime;
            
            let creator;
            
            let status;
            
            let xLanguage;
            
            let xProjectId;
            
            let xUserProfile;

            if (listScriptJobsRequest !== null && listScriptJobsRequest !== undefined) {
                if (listScriptJobsRequest instanceof ListScriptJobsRequest) {
                    limit = listScriptJobsRequest.limit;
                    marker = listScriptJobsRequest.marker;
                    startTime = listScriptJobsRequest.startTime;
                    endTime = listScriptJobsRequest.endTime;
                    creator = listScriptJobsRequest.creator;
                    status = listScriptJobsRequest.status;
                    xLanguage = listScriptJobsRequest.xLanguage;
                    xProjectId = listScriptJobsRequest.xProjectId;
                    xUserProfile = listScriptJobsRequest.xUserProfile;
                } else {
                    limit = listScriptJobsRequest['limit'];
                    marker = listScriptJobsRequest['marker'];
                    startTime = listScriptJobsRequest['start_time'];
                    endTime = listScriptJobsRequest['end_time'];
                    creator = listScriptJobsRequest['creator'];
                    status = listScriptJobsRequest['status'];
                    xLanguage = listScriptJobsRequest['X-Language'];
                    xProjectId = listScriptJobsRequest['x-project-id'];
                    xUserProfile = listScriptJobsRequest['x-user-profile'];
                }
            }

        
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (startTime !== null && startTime !== undefined) {
                localVarQueryParameter['start_time'] = startTime;
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }
            if (creator !== null && creator !== undefined) {
                localVarQueryParameter['creator'] = creator;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }
            if (xProjectId !== undefined && xProjectId !== null) {
                localVarHeaderParameter['x-project-id'] = String(xProjectId);
            }
            if (xUserProfile !== undefined && xUserProfile !== null) {
                localVarHeaderParameter['x-user-profile'] = String(xUserProfile);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 操作类型：取消实例、跳过批次、取消整个工单、暂停整个工单、继续整个工单
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        operateScriptJob(operateScriptJobRequest?: OperateScriptJobRequest) {
            const options = {
                method: "PUT",
                url: "/v1/job/script/orders/{execute_uuid}/operation",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let executeUuid;
            
            let xLanguage;
            
            let xProjectId;
            
            let xUserProfile;

            if (operateScriptJobRequest !== null && operateScriptJobRequest !== undefined) {
                if (operateScriptJobRequest instanceof OperateScriptJobRequest) {
                    executeUuid = operateScriptJobRequest.executeUuid;
                    xLanguage = operateScriptJobRequest.xLanguage;
                    xProjectId = operateScriptJobRequest.xProjectId;
                    xUserProfile = operateScriptJobRequest.xUserProfile;
                    body = operateScriptJobRequest.body
                } else {
                    executeUuid = operateScriptJobRequest['execute_uuid'];
                    xLanguage = operateScriptJobRequest['X-Language'];
                    xProjectId = operateScriptJobRequest['x-project-id'];
                    xUserProfile = operateScriptJobRequest['x-user-profile'];
                    body = operateScriptJobRequest['body'];
                }
            }

        
            if (executeUuid === null || executeUuid === undefined) {
            throw new RequiredError('executeUuid','Required parameter executeUuid was null or undefined when calling operateScriptJob.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }
            if (xProjectId !== undefined && xProjectId !== null) {
                localVarHeaderParameter['x-project-id'] = String(xProjectId);
            }
            if (xUserProfile !== undefined && xUserProfile !== null) {
                localVarHeaderParameter['x-user-profile'] = String(xUserProfile);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'execute_uuid': executeUuid, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 功能：审批脚本。
         * 约束条件：只有创建脚本填写了审批人，脚本为待审批状态才能审批。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        acceptScript(acceptScriptRequest?: AcceptScriptRequest) {
            const options = {
                method: "POST",
                url: "/v1/job/scripts/{script_uuid}/action",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let scriptUuid;
            
            let xProjectId;
            
            let xUserProfile;
            
            let xLanguage;

            if (acceptScriptRequest !== null && acceptScriptRequest !== undefined) {
                if (acceptScriptRequest instanceof AcceptScriptRequest) {
                    scriptUuid = acceptScriptRequest.scriptUuid;
                    body = acceptScriptRequest.body
                    xProjectId = acceptScriptRequest.xProjectId;
                    xUserProfile = acceptScriptRequest.xUserProfile;
                    xLanguage = acceptScriptRequest.xLanguage;
                } else {
                    scriptUuid = acceptScriptRequest['script_uuid'];
                    body = acceptScriptRequest['body'];
                    xProjectId = acceptScriptRequest['x-project-id'];
                    xUserProfile = acceptScriptRequest['x-user-profile'];
                    xLanguage = acceptScriptRequest['X-Language'];
                }
            }

        
            if (scriptUuid === null || scriptUuid === undefined) {
            throw new RequiredError('scriptUuid','Required parameter scriptUuid was null or undefined when calling acceptScript.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xProjectId !== undefined && xProjectId !== null) {
                localVarHeaderParameter['x-project-id'] = String(xProjectId);
            }
            if (xUserProfile !== undefined && xUserProfile !== null) {
                localVarHeaderParameter['x-user-profile'] = String(xUserProfile);
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'script_uuid': scriptUuid, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据作业内容，对作业评估风险，返回相关分析的结果和信息，结果仅供参考。
         * 高危命令指影响系统或服务的正常运行，或造成系统特殊文件被恶意删除或修改命令。 高危命令检测通过校验规则正则匹配脚本内容中是否包含高危命令。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        checkScriptRisk(checkScriptRiskRequest?: CheckScriptRiskRequest) {
            const options = {
                method: "POST",
                url: "/v1/job/analyze-job",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xLanguage;
            
            let xProjectId;
            
            let xUserProfile;

            if (checkScriptRiskRequest !== null && checkScriptRiskRequest !== undefined) {
                if (checkScriptRiskRequest instanceof CheckScriptRiskRequest) {
                    body = checkScriptRiskRequest.body
                    xLanguage = checkScriptRiskRequest.xLanguage;
                    xProjectId = checkScriptRiskRequest.xProjectId;
                    xUserProfile = checkScriptRiskRequest.xUserProfile;
                } else {
                    body = checkScriptRiskRequest['body'];
                    xLanguage = checkScriptRiskRequest['X-Language'];
                    xProjectId = checkScriptRiskRequest['x-project-id'];
                    xUserProfile = checkScriptRiskRequest['x-user-profile'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }
            if (xProjectId !== undefined && xProjectId !== null) {
                localVarHeaderParameter['x-project-id'] = String(xProjectId);
            }
            if (xUserProfile !== undefined && xUserProfile !== null) {
                localVarHeaderParameter['x-user-profile'] = String(xUserProfile);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建作业脚本：自定义脚本
         * - 脚本有标签属性，表示是高危脚本。创建时候不需要对脚本进行是否是高危的二次校验。
         * - 进行租户隔离；北向接口创建的脚本，审批人字段不填写，默认不需要审批
         * - 约束条件：
         * - 脚本名称：同一租户下，脚本名称不能重复，最大字符64个字符，支持中文+字母+数字+下划线。
         * - 脚本内容最大100kb。
         * - 脚本参数个数最多20个。
         * - 脚本描述：最大256个字符。
         * - 单个参数的参数名称 64个字符，只支持字母+数字+下划线。
         * - 单个参数的值最大1024个字符，正则表达式如下：^((?!\\.{2,})[a-zA-Z0-9_\\-/\\.\\*\\x20\\?:\&quot;,&#x3D;+@\\\\\\[\\{\\]\\}])*$。
         * - 审批人最多支持5人。
         * - 脚本输出的日志总量只支持1MB。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createScript(createScriptRequest?: CreateScriptRequest) {
            const options = {
                method: "POST",
                url: "/v1/job/scripts",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xProjectId;
            
            let xUserProfile;
            
            let xLanguage;

            if (createScriptRequest !== null && createScriptRequest !== undefined) {
                if (createScriptRequest instanceof CreateScriptRequest) {
                    body = createScriptRequest.body
                    xProjectId = createScriptRequest.xProjectId;
                    xUserProfile = createScriptRequest.xUserProfile;
                    xLanguage = createScriptRequest.xLanguage;
                } else {
                    body = createScriptRequest['body'];
                    xProjectId = createScriptRequest['x-project-id'];
                    xUserProfile = createScriptRequest['x-user-profile'];
                    xLanguage = createScriptRequest['X-Language'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xProjectId !== undefined && xProjectId !== null) {
                localVarHeaderParameter['x-project-id'] = String(xProjectId);
            }
            if (xUserProfile !== undefined && xUserProfile !== null) {
                localVarHeaderParameter['x-user-profile'] = String(xUserProfile);
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除作业脚本：自定义脚本。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteScript(deleteScriptRequest?: DeleteScriptRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/job/scripts/{script_uuid}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let scriptUuid;
            
            let xLanguage;
            
            let xProjectId;
            
            let xUserProfile;

            if (deleteScriptRequest !== null && deleteScriptRequest !== undefined) {
                if (deleteScriptRequest instanceof DeleteScriptRequest) {
                    scriptUuid = deleteScriptRequest.scriptUuid;
                    xLanguage = deleteScriptRequest.xLanguage;
                    xProjectId = deleteScriptRequest.xProjectId;
                    xUserProfile = deleteScriptRequest.xUserProfile;
                } else {
                    scriptUuid = deleteScriptRequest['script_uuid'];
                    xLanguage = deleteScriptRequest['X-Language'];
                    xProjectId = deleteScriptRequest['x-project-id'];
                    xUserProfile = deleteScriptRequest['x-user-profile'];
                }
            }

        
            if (scriptUuid === null || scriptUuid === undefined) {
            throw new RequiredError('scriptUuid','Required parameter scriptUuid was null or undefined when calling deleteScript.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }
            if (xProjectId !== undefined && xProjectId !== null) {
                localVarHeaderParameter['x-project-id'] = String(xProjectId);
            }
            if (xUserProfile !== undefined && xUserProfile !== null) {
                localVarHeaderParameter['x-user-profile'] = String(xUserProfile);
            }

            options.pathParams = { 'script_uuid': scriptUuid, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 执行脚本
         * 
         * 脚本入参、超时时间、执行用户、资源受限
         * 脚本入参支持20个。
         * 单次下发的机器支持200个。
         * 单次批次内机器数量最大10个。
         * 最大批次数量为20批。
         * 脚本输出的日志总量只支持1MB。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        executeScript(executeScriptRequest?: ExecuteScriptRequest) {
            const options = {
                method: "POST",
                url: "/v1/job/scripts/{script_uuid}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let scriptUuid;
            
            let xLanguage;
            
            let xProjectId;
            
            let xUserProfile;

            if (executeScriptRequest !== null && executeScriptRequest !== undefined) {
                if (executeScriptRequest instanceof ExecuteScriptRequest) {
                    scriptUuid = executeScriptRequest.scriptUuid;
                    body = executeScriptRequest.body
                    xLanguage = executeScriptRequest.xLanguage;
                    xProjectId = executeScriptRequest.xProjectId;
                    xUserProfile = executeScriptRequest.xUserProfile;
                } else {
                    scriptUuid = executeScriptRequest['script_uuid'];
                    body = executeScriptRequest['body'];
                    xLanguage = executeScriptRequest['X-Language'];
                    xProjectId = executeScriptRequest['x-project-id'];
                    xUserProfile = executeScriptRequest['x-user-profile'];
                }
            }

        
            if (scriptUuid === null || scriptUuid === undefined) {
            throw new RequiredError('scriptUuid','Required parameter scriptUuid was null or undefined when calling executeScript.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }
            if (xProjectId !== undefined && xProjectId !== null) {
                localVarHeaderParameter['x-project-id'] = String(xProjectId);
            }
            if (xUserProfile !== undefined && xUserProfile !== null) {
                localVarHeaderParameter['x-user-profile'] = String(xUserProfile);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'script_uuid': scriptUuid, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取脚本详情
         * 约束条件：
         * 只能查询自定义脚本详情
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        getScript(getScriptRequest?: GetScriptRequest) {
            const options = {
                method: "GET",
                url: "/v1/job/scripts/{script_uuid}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let scriptUuid;
            
            let xLanguage;
            
            let xProjectId;
            
            let xUserProfile;

            if (getScriptRequest !== null && getScriptRequest !== undefined) {
                if (getScriptRequest instanceof GetScriptRequest) {
                    scriptUuid = getScriptRequest.scriptUuid;
                    xLanguage = getScriptRequest.xLanguage;
                    xProjectId = getScriptRequest.xProjectId;
                    xUserProfile = getScriptRequest.xUserProfile;
                } else {
                    scriptUuid = getScriptRequest['script_uuid'];
                    xLanguage = getScriptRequest['X-Language'];
                    xProjectId = getScriptRequest['x-project-id'];
                    xUserProfile = getScriptRequest['x-user-profile'];
                }
            }

        
            if (scriptUuid === null || scriptUuid === undefined) {
            throw new RequiredError('scriptUuid','Required parameter scriptUuid was null or undefined when calling getScript.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }
            if (xProjectId !== undefined && xProjectId !== null) {
                localVarHeaderParameter['x-project-id'] = String(xProjectId);
            }
            if (xUserProfile !== undefined && xUserProfile !== null) {
                localVarHeaderParameter['x-user-profile'] = String(xUserProfile);
            }

            options.pathParams = { 'script_uuid': scriptUuid, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据分批策略获取分批结果，只支持自动分批：
         * 规则如下：
         * 1.单个批次的所有实例必须属于同一个区域；
         *      * 2.单个批次的所有实例必须属于同一个可用区；
         *      * 3.单个批次的所有实例必须属于同一个应用；
         *      * 4.单个批次内同一分组下的实例不超过50%（除分组下仅以一个实例的情况外）；
         *      * 5.前三批每批节点数量不超过10。
         *      * 6.每批次实例数量不超过10。
         * 
         *    总机器数量为200。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listInstancesBatch(listInstancesBatchRequest?: ListInstancesBatchRequest) {
            const options = {
                method: "POST",
                url: "/v1/instances/batches",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xLanguage;
            
            let xProjectId;
            
            let xUserProfile;

            if (listInstancesBatchRequest !== null && listInstancesBatchRequest !== undefined) {
                if (listInstancesBatchRequest instanceof ListInstancesBatchRequest) {
                    body = listInstancesBatchRequest.body
                    xLanguage = listInstancesBatchRequest.xLanguage;
                    xProjectId = listInstancesBatchRequest.xProjectId;
                    xUserProfile = listInstancesBatchRequest.xUserProfile;
                } else {
                    body = listInstancesBatchRequest['body'];
                    xLanguage = listInstancesBatchRequest['X-Language'];
                    xProjectId = listInstancesBatchRequest['x-project-id'];
                    xUserProfile = listInstancesBatchRequest['x-user-profile'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }
            if (xProjectId !== undefined && xProjectId !== null) {
                localVarHeaderParameter['x-project-id'] = String(xProjectId);
            }
            if (xUserProfile !== undefined && xUserProfile !== null) {
                localVarHeaderParameter['x-user-profile'] = String(xUserProfile);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 作业脚本列表：自定义脚本
         * 
         * limit最大为100
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listScripts(listScriptsRequest?: ListScriptsRequest) {
            const options = {
                method: "GET",
                url: "/v1/job/scripts",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let limit;
            
            let marker;
            
            let nameLike;
            
            let creator;
            
            let riskLevel;
            
            let type;
            
            let enterpriseProjectId;
            
            let xLanguage;
            
            let xProjectId;
            
            let xUserProfile;

            if (listScriptsRequest !== null && listScriptsRequest !== undefined) {
                if (listScriptsRequest instanceof ListScriptsRequest) {
                    limit = listScriptsRequest.limit;
                    marker = listScriptsRequest.marker;
                    nameLike = listScriptsRequest.nameLike;
                    creator = listScriptsRequest.creator;
                    riskLevel = listScriptsRequest.riskLevel;
                    type = listScriptsRequest.type;
                    enterpriseProjectId = listScriptsRequest.enterpriseProjectId;
                    xLanguage = listScriptsRequest.xLanguage;
                    xProjectId = listScriptsRequest.xProjectId;
                    xUserProfile = listScriptsRequest.xUserProfile;
                } else {
                    limit = listScriptsRequest['limit'];
                    marker = listScriptsRequest['marker'];
                    nameLike = listScriptsRequest['name_like'];
                    creator = listScriptsRequest['creator'];
                    riskLevel = listScriptsRequest['risk_level'];
                    type = listScriptsRequest['type'];
                    enterpriseProjectId = listScriptsRequest['enterprise_project_id'];
                    xLanguage = listScriptsRequest['X-Language'];
                    xProjectId = listScriptsRequest['x-project-id'];
                    xUserProfile = listScriptsRequest['x-user-profile'];
                }
            }

        
            if (limit === null || limit === undefined) {
                throw new RequiredError('limit','Required parameter limit was null or undefined when calling listScripts.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (nameLike !== null && nameLike !== undefined) {
                localVarQueryParameter['name_like'] = nameLike;
            }
            if (creator !== null && creator !== undefined) {
                localVarQueryParameter['creator'] = creator;
            }
            if (riskLevel !== null && riskLevel !== undefined) {
                localVarQueryParameter['risk_level'] = riskLevel;
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }
            if (xProjectId !== undefined && xProjectId !== null) {
                localVarHeaderParameter['x-project-id'] = String(xProjectId);
            }
            if (xUserProfile !== undefined && xUserProfile !== null) {
                localVarHeaderParameter['x-user-profile'] = String(xUserProfile);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改作业脚本：自定义脚本
         * 约束条件：
         * 脚本名称：同一租户下，脚本名称不能重复，最大字符64个字符，支持中文+字母+数字+下划线。
         * 脚本内容最大4096个字符。
         * 脚本参数个数最多20个。
         * 脚本描述：最大256个字符。
         * 单个参数的参数名称 64个字符，只支持字母+数字+下划线。
         * 单个参数的值最大1024个字符，正则表达式如下：^((?!.{2,})[a-zA-Z0-9_-/.*\\x20?:\&quot;,&#x3D;+@\\[{]}])*$。
         * 修改的脚本如果有审批人，在修改之后，需要再次选择审批人，查询审批
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateScript(updateScriptRequest?: UpdateScriptRequest) {
            const options = {
                method: "PUT",
                url: "/v1/job/scripts/{script_uuid}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let scriptUuid;
            
            let xLanguage;
            
            let xProjectId;
            
            let xUserProfile;

            if (updateScriptRequest !== null && updateScriptRequest !== undefined) {
                if (updateScriptRequest instanceof UpdateScriptRequest) {
                    scriptUuid = updateScriptRequest.scriptUuid;
                    body = updateScriptRequest.body
                    xLanguage = updateScriptRequest.xLanguage;
                    xProjectId = updateScriptRequest.xProjectId;
                    xUserProfile = updateScriptRequest.xUserProfile;
                } else {
                    scriptUuid = updateScriptRequest['script_uuid'];
                    body = updateScriptRequest['body'];
                    xLanguage = updateScriptRequest['X-Language'];
                    xProjectId = updateScriptRequest['x-project-id'];
                    xUserProfile = updateScriptRequest['x-user-profile'];
                }
            }

        
            if (scriptUuid === null || scriptUuid === undefined) {
            throw new RequiredError('scriptUuid','Required parameter scriptUuid was null or undefined when calling updateScript.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }
            if (xProjectId !== undefined && xProjectId !== null) {
                localVarHeaderParameter['x-project-id'] = String(xProjectId);
            }
            if (xUserProfile !== undefined && xUserProfile !== null) {
                localVarHeaderParameter['x-user-profile'] = String(xUserProfile);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'script_uuid': scriptUuid, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 执行公共脚本
         * 脚本入参、超时时间、执行用户、资源受限
         * 脚本入参支持20个。
         * 单次下发的机器支持200个。
         * 单次批次内机器数量最大10个。
         * 最大批次数量为20批。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        executePublicScript(executePublicScriptRequest?: ExecutePublicScriptRequest) {
            const options = {
                method: "POST",
                url: "/v1/job/public-scripts/{script_uuid}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let scriptUuid;
            
            let xLanguage;
            
            let xProjectId;
            
            let xUserProfile;

            if (executePublicScriptRequest !== null && executePublicScriptRequest !== undefined) {
                if (executePublicScriptRequest instanceof ExecutePublicScriptRequest) {
                    scriptUuid = executePublicScriptRequest.scriptUuid;
                    body = executePublicScriptRequest.body
                    xLanguage = executePublicScriptRequest.xLanguage;
                    xProjectId = executePublicScriptRequest.xProjectId;
                    xUserProfile = executePublicScriptRequest.xUserProfile;
                } else {
                    scriptUuid = executePublicScriptRequest['script_uuid'];
                    body = executePublicScriptRequest['body'];
                    xLanguage = executePublicScriptRequest['X-Language'];
                    xProjectId = executePublicScriptRequest['x-project-id'];
                    xUserProfile = executePublicScriptRequest['x-user-profile'];
                }
            }

        
            if (scriptUuid === null || scriptUuid === undefined) {
            throw new RequiredError('scriptUuid','Required parameter scriptUuid was null or undefined when calling executePublicScript.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }
            if (xProjectId !== undefined && xProjectId !== null) {
                localVarHeaderParameter['x-project-id'] = String(xProjectId);
            }
            if (xUserProfile !== undefined && xUserProfile !== null) {
                localVarHeaderParameter['x-user-profile'] = String(xUserProfile);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'script_uuid': scriptUuid, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 展示公共脚本详情
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        getPublicScript(getPublicScriptRequest?: GetPublicScriptRequest) {
            const options = {
                method: "GET",
                url: "/v1/job/public-scripts/{script_uuid}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let scriptUuid;
            
            let xLanguage;
            
            let xProjectId;
            
            let xUserProfile;

            if (getPublicScriptRequest !== null && getPublicScriptRequest !== undefined) {
                if (getPublicScriptRequest instanceof GetPublicScriptRequest) {
                    scriptUuid = getPublicScriptRequest.scriptUuid;
                    xLanguage = getPublicScriptRequest.xLanguage;
                    xProjectId = getPublicScriptRequest.xProjectId;
                    xUserProfile = getPublicScriptRequest.xUserProfile;
                } else {
                    scriptUuid = getPublicScriptRequest['script_uuid'];
                    xLanguage = getPublicScriptRequest['X-Language'];
                    xProjectId = getPublicScriptRequest['x-project-id'];
                    xUserProfile = getPublicScriptRequest['x-user-profile'];
                }
            }

        
            if (scriptUuid === null || scriptUuid === undefined) {
            throw new RequiredError('scriptUuid','Required parameter scriptUuid was null or undefined when calling getPublicScript.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }
            if (xProjectId !== undefined && xProjectId !== null) {
                localVarHeaderParameter['x-project-id'] = String(xProjectId);
            }
            if (xUserProfile !== undefined && xUserProfile !== null) {
                localVarHeaderParameter['x-user-profile'] = String(xUserProfile);
            }

            options.pathParams = { 'script_uuid': scriptUuid, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取公共脚本列表，分页逻辑：采用limit+marker方式，提高分页效率。用自增id作为marker参数
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listPublicScripts(listPublicScriptsRequest?: ListPublicScriptsRequest) {
            const options = {
                method: "GET",
                url: "/v1/job/public-scripts",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let limit;
            
            let marker;
            
            let nameLike;
            
            let name;
            
            let riskLevel;
            
            let type;
            
            let xLanguage;
            
            let xProjectId;
            
            let xUserProfile;

            if (listPublicScriptsRequest !== null && listPublicScriptsRequest !== undefined) {
                if (listPublicScriptsRequest instanceof ListPublicScriptsRequest) {
                    limit = listPublicScriptsRequest.limit;
                    marker = listPublicScriptsRequest.marker;
                    nameLike = listPublicScriptsRequest.nameLike;
                    name = listPublicScriptsRequest.name;
                    riskLevel = listPublicScriptsRequest.riskLevel;
                    type = listPublicScriptsRequest.type;
                    xLanguage = listPublicScriptsRequest.xLanguage;
                    xProjectId = listPublicScriptsRequest.xProjectId;
                    xUserProfile = listPublicScriptsRequest.xUserProfile;
                } else {
                    limit = listPublicScriptsRequest['limit'];
                    marker = listPublicScriptsRequest['marker'];
                    nameLike = listPublicScriptsRequest['name_like'];
                    name = listPublicScriptsRequest['name'];
                    riskLevel = listPublicScriptsRequest['risk_level'];
                    type = listPublicScriptsRequest['type'];
                    xLanguage = listPublicScriptsRequest['X-Language'];
                    xProjectId = listPublicScriptsRequest['x-project-id'];
                    xUserProfile = listPublicScriptsRequest['x-user-profile'];
                }
            }

        
            if (limit === null || limit === undefined) {
                throw new RequiredError('limit','Required parameter limit was null or undefined when calling listPublicScripts.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (nameLike !== null && nameLike !== undefined) {
                localVarQueryParameter['name_like'] = nameLike;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (riskLevel !== null && riskLevel !== undefined) {
                localVarQueryParameter['risk_level'] = riskLevel;
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }
            if (xProjectId !== undefined && xProjectId !== null) {
                localVarHeaderParameter['x-project-id'] = String(xProjectId);
            }
            if (xUserProfile !== undefined && xUserProfile !== null) {
                localVarHeaderParameter['x-user-profile'] = String(xUserProfile);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建租户区WarRoom
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createWarRoom(createWarRoomRequest?: CreateWarRoomRequest) {
            const options = {
                method: "POST",
                url: "/v1/external/warrooms",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createWarRoomRequest !== null && createWarRoomRequest !== undefined) {
                if (createWarRoomRequest instanceof CreateWarRoomRequest) {
                    body = createWarRoomRequest.body
                } else {
                    body = createWarRoomRequest['body'];
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
         * 查询租户区WarRoom信息列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listWarRooms(listWarRoomsRequest?: ListWarRoomsRequest) {
            const options = {
                method: "POST",
                url: "/v1/external/warrooms/list",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (listWarRoomsRequest !== null && listWarRoomsRequest !== undefined) {
                if (listWarRoomsRequest instanceof ListWarRoomsRequest) {
                    body = listWarRoomsRequest.body
                } else {
                    body = listWarRoomsRequest['body'];
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
    
    }
};

function newClient(client: HcClient): CocClient {
    return new CocClient(client);
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