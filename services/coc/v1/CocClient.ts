import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { AccountRsp } from './model/AccountRsp';
import { AddScriptModel } from './model/AddScriptModel';
import { AlarmHandleHistory } from './model/AlarmHandleHistory';
import { AlarmInfoDTO } from './model/AlarmInfoDTO';
import { ApplicationInfo } from './model/ApplicationInfo';
import { ApplicationModelQueryResponseData } from './model/ApplicationModelQueryResponseData';
import { ApplicationQueryResponseData } from './model/ApplicationQueryResponseData';
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
import { CceInfo } from './model/CceInfo';
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
import { CustomBaselineRule } from './model/CustomBaselineRule';
import { CustomBaselineRulePatchItem } from './model/CustomBaselineRulePatchItem';
import { Customttribute } from './model/Customttribute';
import { DeleteScheduledTaskRequest } from './model/DeleteScheduledTaskRequest';
import { DeleteScheduledTaskResponse } from './model/DeleteScheduledTaskResponse';
import { DeleteScriptRequest } from './model/DeleteScriptRequest';
import { DeleteScriptResponse } from './model/DeleteScriptResponse';
import { DisableScheduledTaskRequest } from './model/DisableScheduledTaskRequest';
import { DisableScheduledTaskResponse } from './model/DisableScheduledTaskResponse';
import { EditScriptModel } from './model/EditScriptModel';
import { EnableScheduledTaskRequest } from './model/EnableScheduledTaskRequest';
import { EnableScheduledTaskRequestBody } from './model/EnableScheduledTaskRequestBody';
import { EnableScheduledTaskResponse } from './model/EnableScheduledTaskResponse';
import { EnumDataInfo } from './model/EnumDataInfo';
import { ExectionInstanceModel } from './model/ExectionInstanceModel';
import { ExectuionStatistic } from './model/ExectuionStatistic';
import { ExecuteInstancesBatchInfo } from './model/ExecuteInstancesBatchInfo';
import { ExecutePublicScriptRequest } from './model/ExecutePublicScriptRequest';
import { ExecutePublicScriptResponse } from './model/ExecutePublicScriptResponse';
import { ExecuteResourceInstance } from './model/ExecuteResourceInstance';
import { ExecuteScriptRequest } from './model/ExecuteScriptRequest';
import { ExecuteScriptResponse } from './model/ExecuteScriptResponse';
import { ExecutionSummary } from './model/ExecutionSummary';
import { ExtraFieldInfo } from './model/ExtraFieldInfo';
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
import { InterruptRecord } from './model/InterruptRecord';
import { JobScriptBatchDetailModel } from './model/JobScriptBatchDetailModel';
import { JobScriptBatchListModel } from './model/JobScriptBatchListModel';
import { JobScriptOrderInfoModel } from './model/JobScriptOrderInfoModel';
import { JobScriptOrderInfoProp } from './model/JobScriptOrderInfoProp';
import { JobScriptOrderListModel } from './model/JobScriptOrderListModel';
import { JobScriptOrderListPage } from './model/JobScriptOrderListPage';
import { JobScriptOrderListProp } from './model/JobScriptOrderListProp';
import { JobScriptOrderOperationBody } from './model/JobScriptOrderOperationBody';
import { JobScriptOrderStatisticsModel } from './model/JobScriptOrderStatisticsModel';
import { ListAlarmHandleHistoriesRequest } from './model/ListAlarmHandleHistoriesRequest';
import { ListAlarmHandleHistoriesResponse } from './model/ListAlarmHandleHistoriesResponse';
import { ListApplicationModelRequest } from './model/ListApplicationModelRequest';
import { ListApplicationModelResponse } from './model/ListApplicationModelResponse';
import { ListApplicationsRequest } from './model/ListApplicationsRequest';
import { ListApplicationsResponse } from './model/ListApplicationsResponse';
import { ListAuthorizableTicketsExternalRequest } from './model/ListAuthorizableTicketsExternalRequest';
import { ListAuthorizableTicketsExternalResponse } from './model/ListAuthorizableTicketsExternalResponse';
import { ListAuthorizableTicketsReq } from './model/ListAuthorizableTicketsReq';
import { ListBaseRequest } from './model/ListBaseRequest';
import { ListBaseResponse } from './model/ListBaseResponse';
import { ListCceCompliantRequest } from './model/ListCceCompliantRequest';
import { ListCceCompliantResponse } from './model/ListCceCompliantResponse';
import { ListCocTicketOperationHistoriesRequest } from './model/ListCocTicketOperationHistoriesRequest';
import { ListCocTicketOperationHistoriesResponse } from './model/ListCocTicketOperationHistoriesResponse';
import { ListInstanceCompliantRequest } from './model/ListInstanceCompliantRequest';
import { ListInstanceCompliantResponse } from './model/ListInstanceCompliantResponse';
import { ListInterruptRecordsRequest } from './model/ListInterruptRecordsRequest';
import { ListInterruptRecordsResponse } from './model/ListInterruptRecordsResponse';
import { ListMultiCloudResourcesRequest } from './model/ListMultiCloudResourcesRequest';
import { ListMultiCloudResourcesResponse } from './model/ListMultiCloudResourcesResponse';
import { ListPersonnelRequest } from './model/ListPersonnelRequest';
import { ListPersonnelResponse } from './model/ListPersonnelResponse';
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
import { ListScriptsRequest } from './model/ListScriptsRequest';
import { ListScriptsResponse } from './model/ListScriptsResponse';
import { ListTenantWarRoomRequestBody } from './model/ListTenantWarRoomRequestBody';
import { ListTicketParams } from './model/ListTicketParams';
import { ListWarRoomsRequest } from './model/ListWarRoomsRequest';
import { ListWarRoomsResponse } from './model/ListWarRoomsResponse';
import { MessageNotification } from './model/MessageNotification';
import { NonCompliantSummary } from './model/NonCompliantSummary';
import { NotificationObjConfiguration } from './model/NotificationObjConfiguration';
import { ObjectFilter } from './model/ObjectFilter';
import { OperateScriptJobRequest } from './model/OperateScriptJobRequest';
import { OperateScriptJobResponse } from './model/OperateScriptJobResponse';
import { PatchDetail } from './model/PatchDetail';
import { PatchFilter } from './model/PatchFilter';
import { PatchRule } from './model/PatchRule';
import { PersonnelResponse } from './model/PersonnelResponse';
import { PublicScriptDetailModel } from './model/PublicScriptDetailModel';
import { PublicScriptListModel } from './model/PublicScriptListModel';
import { PublicScriptListPage } from './model/PublicScriptListPage';
import { PublicScriptPropertiesModel } from './model/PublicScriptPropertiesModel';
import { ReportCustomEventRequestBody } from './model/ReportCustomEventRequestBody';
import { ResourceInstance } from './model/ResourceInstance';
import { ResourceInstanceProp } from './model/ResourceInstanceProp';
import { ResourceMultiCountResponseData } from './model/ResourceMultiCountResponseData';
import { ResourceQuery } from './model/ResourceQuery';
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
import { SeveritySummary } from './model/SeveritySummary';
import { ShowAccountRequest } from './model/ShowAccountRequest';
import { ShowAccountResponse } from './model/ShowAccountResponse';
import { ShowAlarmRequest } from './model/ShowAlarmRequest';
import { ShowAlarmResponse } from './model/ShowAlarmResponse';
import { ShowCocIncidentDetailRequest } from './model/ShowCocIncidentDetailRequest';
import { ShowCocIncidentDetailResponse } from './model/ShowCocIncidentDetailResponse';
import { ShowCocIssuesDetailRequest } from './model/ShowCocIssuesDetailRequest';
import { ShowCocIssuesDetailResponse } from './model/ShowCocIssuesDetailResponse';
import { ShowInstancePatchItemsRequest } from './model/ShowInstancePatchItemsRequest';
import { ShowInstancePatchItemsResponse } from './model/ShowInstancePatchItemsResponse';
import { ShowPatchBaselineRequest } from './model/ShowPatchBaselineRequest';
import { ShowPatchBaselineResponse } from './model/ShowPatchBaselineResponse';
import { ShowScheduledTaskRequest } from './model/ShowScheduledTaskRequest';
import { ShowScheduledTaskResponse } from './model/ShowScheduledTaskResponse';
import { ShowSlaCustomizedTemplateRequest } from './model/ShowSlaCustomizedTemplateRequest';
import { ShowSlaCustomizedTemplateResponse } from './model/ShowSlaCustomizedTemplateResponse';
import { ShowSlaOrderRequest } from './model/ShowSlaOrderRequest';
import { ShowSlaOrderResponse } from './model/ShowSlaOrderResponse';
import { ShowSloDetailRequest } from './model/ShowSloDetailRequest';
import { ShowSloDetailResponse } from './model/ShowSloDetailResponse';
import { SlaEscalationRuleInfo } from './model/SlaEscalationRuleInfo';
import { SlaPreWarningRuleInfo } from './model/SlaPreWarningRuleInfo';
import { SlaRecord } from './model/SlaRecord';
import { SlaRuleInfo } from './model/SlaRuleInfo';
import { SlaTriggeringRuleInfo } from './model/SlaTriggeringRuleInfo';
import { SliDetail } from './model/SliDetail';
import { SyncAddPersonnelRequest } from './model/SyncAddPersonnelRequest';
import { SyncAddPersonnelResponse } from './model/SyncAddPersonnelResponse';
import { SyncResourceReq } from './model/SyncResourceReq';
import { SyncResourceRequest } from './model/SyncResourceRequest';
import { SyncResourceResponse } from './model/SyncResourceResponse';
import { Tag } from './model/Tag';
import { TargetResource } from './model/TargetResource';
import { TicketHistoryInfo } from './model/TicketHistoryInfo';
import { TicketInfo } from './model/TicketInfo';
import { TicketInfoEnumData } from './model/TicketInfoEnumData';
import { TicketInformation } from './model/TicketInformation';
import { TriggerTime } from './model/TriggerTime';
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
     * show account ，使用场景：托管功能 sre 账号使用，查询自己管理的客户账号
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询客户账号
     * @param {string} [name] 账号名称
     * @param {string} [delegator] 账号id
     * @param {string} [status] 账号状态
     * @param {number} [offset] 分页参数
     * @param {number} [limit] 分页参数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showAccount(showAccountRequest?: ShowAccountRequest): Promise<ShowAccountResponse> {
        const options = ParamCreater().showAccount(showAccountRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询告警工单历史
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询告警工单历史
     * @param {string} alarmId 告警id
     * @param {number} offset 偏移量
     * @param {number} limit 每页限制数量
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAlarmHandleHistories(listAlarmHandleHistoriesRequest?: ListAlarmHandleHistoriesRequest): Promise<ListAlarmHandleHistoriesResponse> {
        const options = ParamCreater().listAlarmHandleHistories(listAlarmHandleHistoriesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * Get alarm info by id
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询Alarm
     * @param {string} alarmId 告警id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showAlarm(showAlarmRequest?: ShowAlarmRequest): Promise<ShowAlarmResponse> {
        const options = ParamCreater().showAlarm(showAlarmRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
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
     * Get baseline info by id
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询Baseline
     * @param {string} baselineId 基线id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showPatchBaseline(showPatchBaselineRequest?: ShowPatchBaselineRequest): Promise<ShowPatchBaselineResponse> {
        const options = ParamCreater().showPatchBaseline(showPatchBaselineRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 分页获取合规性报告cce信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取合规性报告cce信息
     * @param {number} [offset] 偏移量
     * @param {number} [limit] 每页限制
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listCceCompliant(listCceCompliantRequest?: ListCceCompliantRequest): Promise<ListCceCompliantResponse> {
        const options = ParamCreater().listCceCompliant(listCceCompliantRequest);

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
     * 获取人员列表（公网调用）
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询人员列表
     * @param {number} offset 偏移量
     * @param {number} limit 分页
     * @param {boolean} [hasMobile] 是否有手机号
     * @param {string} [name] IAM账号
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listPersonnel(listPersonnelRequest?: ListPersonnelRequest): Promise<ListPersonnelResponse> {
        const options = ParamCreater().listPersonnel(listPersonnelRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 同步人员
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 同步人员
     * @param {string} domainId 租户Id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public syncAddPersonnel(syncAddPersonnelRequest?: SyncAddPersonnelRequest): Promise<SyncAddPersonnelResponse> {
        const options = ParamCreater().syncAddPersonnel(syncAddPersonnelRequest);

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
     * @param {number} marker 分页参数：上一页最后一个记录id
     * @param {'READY' | 'PROCESSING' | 'ABNORMAL' | 'CANCELED' | 'FINISHED'} [status] 实例执行状态 READY：待执行 PROCESSING：执行中 ABNORMAL：异常 CANCELED：已取消 FINISHED：成功
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
     * Get Sla Template info by id
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询Sla模板详情
     * @param {string} templateId 模板ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showSlaCustomizedTemplate(showSlaCustomizedTemplateRequest?: ShowSlaCustomizedTemplateRequest): Promise<ShowSlaCustomizedTemplateResponse> {
        const options = ParamCreater().showSlaCustomizedTemplate(showSlaCustomizedTemplateRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * SLA 工单信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询SLA工单信息
     * @param {string} orderId 工单ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showSlaOrder(showSlaOrderRequest?: ShowSlaOrderRequest): Promise<ShowSlaOrderResponse> {
        const options = ParamCreater().showSlaOrder(showSlaOrderRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询中断记录
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询中断记录
     * @param {string} sloId SLO的ID
     * @param {number} [offset] 分页指针
     * @param {number} [limit] 每页数量
     * @param {string} [sourceId] 资源ID
     * @param {string} [regionId] regionId
     * @param {number} [startTime] 时间范围 - 开始时间
     * @param {number} [endTime] 时间范围 - 结束时间
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listInterruptRecords(listInterruptRecordsRequest?: ListInterruptRecordsRequest): Promise<ListInterruptRecordsResponse> {
        const options = ParamCreater().listInterruptRecords(listInterruptRecordsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询SLO详情
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询SLO详情
     * @param {string} sloId SLO的ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showSloDetail(showSloDetailRequest?: ShowSloDetailRequest): Promise<ShowSloDetailResponse> {
        const options = ParamCreater().showSloDetail(showSloDetailRequest);

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
         * show account ，使用场景：托管功能 sre 账号使用，查询自己管理的客户账号
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showAccount(showAccountRequest?: ShowAccountRequest) {
            const options = {
                method: "GET",
                url: "/v1/host/accounts",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let name;
            
            let delegator;
            
            let status;
            
            let offset;
            
            let limit;

            if (showAccountRequest !== null && showAccountRequest !== undefined) {
                if (showAccountRequest instanceof ShowAccountRequest) {
                    name = showAccountRequest.name;
                    delegator = showAccountRequest.delegator;
                    status = showAccountRequest.status;
                    offset = showAccountRequest.offset;
                    limit = showAccountRequest.limit;
                } else {
                    name = showAccountRequest['name'];
                    delegator = showAccountRequest['delegator'];
                    status = showAccountRequest['status'];
                    offset = showAccountRequest['offset'];
                    limit = showAccountRequest['limit'];
                }
            }

        
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (delegator !== null && delegator !== undefined) {
                localVarQueryParameter['delegator'] = delegator;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
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
         * 查询告警工单历史
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAlarmHandleHistories(listAlarmHandleHistoriesRequest?: ListAlarmHandleHistoriesRequest) {
            const options = {
                method: "GET",
                url: "/v1/alarm-mgmt/alarm/{alarm_id}/handle-histories",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let alarmId;
            
            let offset;
            
            let limit;

            if (listAlarmHandleHistoriesRequest !== null && listAlarmHandleHistoriesRequest !== undefined) {
                if (listAlarmHandleHistoriesRequest instanceof ListAlarmHandleHistoriesRequest) {
                    alarmId = listAlarmHandleHistoriesRequest.alarmId;
                    offset = listAlarmHandleHistoriesRequest.offset;
                    limit = listAlarmHandleHistoriesRequest.limit;
                } else {
                    alarmId = listAlarmHandleHistoriesRequest['alarm_id'];
                    offset = listAlarmHandleHistoriesRequest['offset'];
                    limit = listAlarmHandleHistoriesRequest['limit'];
                }
            }

        
            if (alarmId === null || alarmId === undefined) {
            throw new RequiredError('alarmId','Required parameter alarmId was null or undefined when calling listAlarmHandleHistories.');
            }
            if (offset === null || offset === undefined) {
                throw new RequiredError('offset','Required parameter offset was null or undefined when calling listAlarmHandleHistories.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit === null || limit === undefined) {
                throw new RequiredError('limit','Required parameter limit was null or undefined when calling listAlarmHandleHistories.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'alarm_id': alarmId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * Get alarm info by id
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showAlarm(showAlarmRequest?: ShowAlarmRequest) {
            const options = {
                method: "GET",
                url: "/v1/alarm-mgmt/alarm/{alarm_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let alarmId;

            if (showAlarmRequest !== null && showAlarmRequest !== undefined) {
                if (showAlarmRequest instanceof ShowAlarmRequest) {
                    alarmId = showAlarmRequest.alarmId;
                } else {
                    alarmId = showAlarmRequest['alarm_id'];
                }
            }

        
            if (alarmId === null || alarmId === undefined) {
            throw new RequiredError('alarmId','Required parameter alarmId was null or undefined when calling showAlarm.');
            }

            options.pathParams = { 'alarm_id': alarmId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
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
         * Get baseline info by id
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showPatchBaseline(showPatchBaselineRequest?: ShowPatchBaselineRequest) {
            const options = {
                method: "GET",
                url: "/v1/patch/baseline/{baseline_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let baselineId;

            if (showPatchBaselineRequest !== null && showPatchBaselineRequest !== undefined) {
                if (showPatchBaselineRequest instanceof ShowPatchBaselineRequest) {
                    baselineId = showPatchBaselineRequest.baselineId;
                } else {
                    baselineId = showPatchBaselineRequest['baseline_id'];
                }
            }

        
            if (baselineId === null || baselineId === undefined) {
            throw new RequiredError('baselineId','Required parameter baselineId was null or undefined when calling showPatchBaseline.');
            }

            options.pathParams = { 'baseline_id': baselineId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 分页获取合规性报告cce信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listCceCompliant(listCceCompliantRequest?: ListCceCompliantRequest) {
            const options = {
                method: "GET",
                url: "/v1/patch/cce/compliant",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let offset;
            
            let limit;

            if (listCceCompliantRequest !== null && listCceCompliantRequest !== undefined) {
                if (listCceCompliantRequest instanceof ListCceCompliantRequest) {
                    offset = listCceCompliantRequest.offset;
                    limit = listCceCompliantRequest.limit;
                } else {
                    offset = listCceCompliantRequest['offset'];
                    limit = listCceCompliantRequest['limit'];
                }
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
                url: "/event/huawei/custom/{integration_key}",
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
         * 获取人员列表（公网调用）
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listPersonnel(listPersonnelRequest?: ListPersonnelRequest) {
            const options = {
                method: "GET",
                url: "/v1/personnel",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let offset;
            
            let limit;
            
            let hasMobile;
            
            let name;

            if (listPersonnelRequest !== null && listPersonnelRequest !== undefined) {
                if (listPersonnelRequest instanceof ListPersonnelRequest) {
                    offset = listPersonnelRequest.offset;
                    limit = listPersonnelRequest.limit;
                    hasMobile = listPersonnelRequest.hasMobile;
                    name = listPersonnelRequest.name;
                } else {
                    offset = listPersonnelRequest['offset'];
                    limit = listPersonnelRequest['limit'];
                    hasMobile = listPersonnelRequest['has_mobile'];
                    name = listPersonnelRequest['name'];
                }
            }

        
            if (offset === null || offset === undefined) {
                throw new RequiredError('offset','Required parameter offset was null or undefined when calling listPersonnel.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit === null || limit === undefined) {
                throw new RequiredError('limit','Required parameter limit was null or undefined when calling listPersonnel.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (hasMobile !== null && hasMobile !== undefined) {
                localVarQueryParameter['has_mobile'] = hasMobile;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 同步人员
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        syncAddPersonnel(syncAddPersonnelRequest?: SyncAddPersonnelRequest) {
            const options = {
                method: "POST",
                url: "/v1/sync/{domain_id}/personnels",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let domainId;

            if (syncAddPersonnelRequest !== null && syncAddPersonnelRequest !== undefined) {
                if (syncAddPersonnelRequest instanceof SyncAddPersonnelRequest) {
                    domainId = syncAddPersonnelRequest.domainId;
                } else {
                    domainId = syncAddPersonnelRequest['domain_id'];
                }
            }

        
            if (domainId === null || domainId === undefined) {
            throw new RequiredError('domainId','Required parameter domainId was null or undefined when calling syncAddPersonnel.');
            }

            options.pathParams = { 'domain_id': domainId, };
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
            
            let marker;
            
            let status;
            
            let xLanguage;
            
            let xProjectId;
            
            let xUserProfile;

            if (getScriptJobBatchRequest !== null && getScriptJobBatchRequest !== undefined) {
                if (getScriptJobBatchRequest instanceof GetScriptJobBatchRequest) {
                    batchIndex = getScriptJobBatchRequest.batchIndex;
                    executeUuid = getScriptJobBatchRequest.executeUuid;
                    limit = getScriptJobBatchRequest.limit;
                    marker = getScriptJobBatchRequest.marker;
                    status = getScriptJobBatchRequest.status;
                    xLanguage = getScriptJobBatchRequest.xLanguage;
                    xProjectId = getScriptJobBatchRequest.xProjectId;
                    xUserProfile = getScriptJobBatchRequest.xUserProfile;
                } else {
                    batchIndex = getScriptJobBatchRequest['batch_index'];
                    executeUuid = getScriptJobBatchRequest['execute_uuid'];
                    limit = getScriptJobBatchRequest['limit'];
                    marker = getScriptJobBatchRequest['marker'];
                    status = getScriptJobBatchRequest['status'];
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
            if (marker === null || marker === undefined) {
                throw new RequiredError('marker','Required parameter marker was null or undefined when calling getScriptJobBatch.');
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
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
         * Get Sla Template info by id
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showSlaCustomizedTemplate(showSlaCustomizedTemplateRequest?: ShowSlaCustomizedTemplateRequest) {
            const options = {
                method: "GET",
                url: "/v1/sla-mgmt/customized-template/{template_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let templateId;

            if (showSlaCustomizedTemplateRequest !== null && showSlaCustomizedTemplateRequest !== undefined) {
                if (showSlaCustomizedTemplateRequest instanceof ShowSlaCustomizedTemplateRequest) {
                    templateId = showSlaCustomizedTemplateRequest.templateId;
                } else {
                    templateId = showSlaCustomizedTemplateRequest['template_id'];
                }
            }

        
            if (templateId === null || templateId === undefined) {
            throw new RequiredError('templateId','Required parameter templateId was null or undefined when calling showSlaCustomizedTemplate.');
            }

            options.pathParams = { 'template_id': templateId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * SLA 工单信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showSlaOrder(showSlaOrderRequest?: ShowSlaOrderRequest) {
            const options = {
                method: "GET",
                url: "/v1/sla-mgmt/orders/{order_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let orderId;

            if (showSlaOrderRequest !== null && showSlaOrderRequest !== undefined) {
                if (showSlaOrderRequest instanceof ShowSlaOrderRequest) {
                    orderId = showSlaOrderRequest.orderId;
                } else {
                    orderId = showSlaOrderRequest['order_id'];
                }
            }

        
            if (orderId === null || orderId === undefined) {
            throw new RequiredError('orderId','Required parameter orderId was null or undefined when calling showSlaOrder.');
            }

            options.pathParams = { 'order_id': orderId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询中断记录
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listInterruptRecords(listInterruptRecordsRequest?: ListInterruptRecordsRequest) {
            const options = {
                method: "GET",
                url: "/v1/slo-mgmt/slos/{slo_id}/interrupt-records",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let sloId;
            
            let offset;
            
            let limit;
            
            let sourceId;
            
            let regionId;
            
            let startTime;
            
            let endTime;

            if (listInterruptRecordsRequest !== null && listInterruptRecordsRequest !== undefined) {
                if (listInterruptRecordsRequest instanceof ListInterruptRecordsRequest) {
                    sloId = listInterruptRecordsRequest.sloId;
                    offset = listInterruptRecordsRequest.offset;
                    limit = listInterruptRecordsRequest.limit;
                    sourceId = listInterruptRecordsRequest.sourceId;
                    regionId = listInterruptRecordsRequest.regionId;
                    startTime = listInterruptRecordsRequest.startTime;
                    endTime = listInterruptRecordsRequest.endTime;
                } else {
                    sloId = listInterruptRecordsRequest['slo_id'];
                    offset = listInterruptRecordsRequest['offset'];
                    limit = listInterruptRecordsRequest['limit'];
                    sourceId = listInterruptRecordsRequest['source_id'];
                    regionId = listInterruptRecordsRequest['region_id'];
                    startTime = listInterruptRecordsRequest['start_time'];
                    endTime = listInterruptRecordsRequest['end_time'];
                }
            }

        
            if (sloId === null || sloId === undefined) {
            throw new RequiredError('sloId','Required parameter sloId was null or undefined when calling listInterruptRecords.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (sourceId !== null && sourceId !== undefined) {
                localVarQueryParameter['source_id'] = sourceId;
            }
            if (regionId !== null && regionId !== undefined) {
                localVarQueryParameter['region_id'] = regionId;
            }
            if (startTime !== null && startTime !== undefined) {
                localVarQueryParameter['start_time'] = startTime;
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'slo_id': sloId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询SLO详情
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showSloDetail(showSloDetailRequest?: ShowSloDetailRequest) {
            const options = {
                method: "GET",
                url: "/v1/slo-mgmt/slos/{slo_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let sloId;

            if (showSloDetailRequest !== null && showSloDetailRequest !== undefined) {
                if (showSloDetailRequest instanceof ShowSloDetailRequest) {
                    sloId = showSloDetailRequest.sloId;
                } else {
                    sloId = showSloDetailRequest['slo_id'];
                }
            }

        
            if (sloId === null || sloId === undefined) {
            throw new RequiredError('sloId','Required parameter sloId was null or undefined when calling showSloDetail.');
            }

            options.pathParams = { 'slo_id': sloId, };
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