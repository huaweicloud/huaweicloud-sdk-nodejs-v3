import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";
import FormData from 'form-data';

import { AcceptScriptRequest } from './model/AcceptScriptRequest';
import { AcceptScriptResponse } from './model/AcceptScriptResponse';
import { AccountBaseResponse } from './model/AccountBaseResponse';
import { AccountChangePwdPlan } from './model/AccountChangePwdPlan';
import { AddScriptModel } from './model/AddScriptModel';
import { AlarmHandleHistory } from './model/AlarmHandleHistory';
import { AlarmInfoDTO } from './model/AlarmInfoDTO';
import { AlarmScheduleInstance } from './model/AlarmScheduleInstance';
import { AlarmToIncidentRequestBody } from './model/AlarmToIncidentRequestBody';
import { ApprovalJobScriptModel } from './model/ApprovalJobScriptModel';
import { AtomicInputModel } from './model/AtomicInputModel';
import { AtomicModel } from './model/AtomicModel';
import { AtomicOutputModel } from './model/AtomicOutputModel';
import { AuthorizableTicketBody } from './model/AuthorizableTicketBody';
import { AuthorizeTicketCommonInfo } from './model/AuthorizeTicketCommonInfo';
import { AuthorizeTicketInfo } from './model/AuthorizeTicketInfo';
import { AutoHandlerAlarmRequestBody } from './model/AutoHandlerAlarmRequestBody';
import { BaseIdResponseData } from './model/BaseIdResponseData';
import { BaseQueryAssessTaskListResponseData } from './model/BaseQueryAssessTaskListResponseData';
import { BaseResponse } from './model/BaseResponse';
import { BasicDTO } from './model/BasicDTO';
import { BasicResponse } from './model/BasicResponse';
import { BatchCreateApplicationViewRequest } from './model/BatchCreateApplicationViewRequest';
import { BatchCreateApplicationViewRequestBody } from './model/BatchCreateApplicationViewRequestBody';
import { BatchCreateApplicationViewRequestBodyApplicationList } from './model/BatchCreateApplicationViewRequestBodyApplicationList';
import { BatchCreateApplicationViewRequestBodyComponentList } from './model/BatchCreateApplicationViewRequestBodyComponentList';
import { BatchCreateApplicationViewRequestBodyGroupList } from './model/BatchCreateApplicationViewRequestBodyGroupList';
import { BatchCreateApplicationViewRequestBodySyncRules } from './model/BatchCreateApplicationViewRequestBodySyncRules';
import { BatchCreateApplicationViewResponse } from './model/BatchCreateApplicationViewResponse';
import { BatchListResourceResponseData } from './model/BatchListResourceResponseData';
import { CancelDiagnosisTaskRequest } from './model/CancelDiagnosisTaskRequest';
import { CancelDiagnosisTaskResponse } from './model/CancelDiagnosisTaskResponse';
import { CheckScriptRiskRequest } from './model/CheckScriptRiskRequest';
import { CheckScriptRiskResData } from './model/CheckScriptRiskResData';
import { CheckScriptRiskResDataBlacklistCommands } from './model/CheckScriptRiskResDataBlacklistCommands';
import { CheckScriptRiskResponse } from './model/CheckScriptRiskResponse';
import { ClearAlarmRequest } from './model/ClearAlarmRequest';
import { ClearAlarmRequestBody } from './model/ClearAlarmRequestBody';
import { ClearAlarmResponse } from './model/ClearAlarmResponse';
import { CocIncidentDataV2 } from './model/CocIncidentDataV2';
import { CocIssuesTicketDetailInfoResponseData } from './model/CocIssuesTicketDetailInfoResponseData';
import { CocListHistoryResponseDataV2 } from './model/CocListHistoryResponseDataV2';
import { CocTaskDetailV2 } from './model/CocTaskDetailV2';
import { CocTaskOperationDetailV2 } from './model/CocTaskOperationDetailV2';
import { CocTicketDetailInfoResponseData } from './model/CocTicketDetailInfoResponseData';
import { CocTicketDetailInfoResponseDataSubTickets } from './model/CocTicketDetailInfoResponseDataSubTickets';
import { CocTicketEnumDataV2 } from './model/CocTicketEnumDataV2';
import { CocTicketHistoryBaseInfoV2 } from './model/CocTicketHistoryBaseInfoV2';
import { CocTicketInfoEnumDataV2 } from './model/CocTicketInfoEnumDataV2';
import { CocUpdateChangeRequestBody } from './model/CocUpdateChangeRequestBody';
import { CocUpdateChangeRequestBodyHistoryInfo } from './model/CocUpdateChangeRequestBodyHistoryInfo';
import { CocUpdateChangeRequestBodySubTickets } from './model/CocUpdateChangeRequestBodySubTickets';
import { CocUpdateChangeRequestBodyTicketInfo } from './model/CocUpdateChangeRequestBodyTicketInfo';
import { CocUpdateChangeRequestBodyV2 } from './model/CocUpdateChangeRequestBodyV2';
import { CocUpdateChangeRequestBodyV2HistoryInfo } from './model/CocUpdateChangeRequestBodyV2HistoryInfo';
import { CocUpdateChangeRequestBodyV2SubTickets } from './model/CocUpdateChangeRequestBodyV2SubTickets';
import { CocUpdateChangeRequestBodyV2TicketInfo } from './model/CocUpdateChangeRequestBodyV2TicketInfo';
import { ComplianceItem } from './model/ComplianceItem';
import { CompliantSummary } from './model/CompliantSummary';
import { CountMultiCloudResourcesRequest } from './model/CountMultiCloudResourcesRequest';
import { CountMultiCloudResourcesResponse } from './model/CountMultiCloudResourcesResponse';
import { CountMultiResourcesRequest } from './model/CountMultiResourcesRequest';
import { CountMultiResourcesResponse } from './model/CountMultiResourcesResponse';
import { CreateAssessTaskRequest } from './model/CreateAssessTaskRequest';
import { CreateAssessTaskRequestBody } from './model/CreateAssessTaskRequestBody';
import { CreateAssessTaskResponse } from './model/CreateAssessTaskResponse';
import { CreateAttachmentRequest } from './model/CreateAttachmentRequest';
import { CreateAttachmentRequestBody } from './model/CreateAttachmentRequestBody';
import { CreateAttachmentResponse } from './model/CreateAttachmentResponse';
import { CreateCocIncidentRequest } from './model/CreateCocIncidentRequest';
import { CreateCocIncidentResponse } from './model/CreateCocIncidentResponse';
import { CreateCocIssuesRequest } from './model/CreateCocIssuesRequest';
import { CreateCocIssuesResponse } from './model/CreateCocIssuesResponse';
import { CreateCocTicketRequestBody } from './model/CreateCocTicketRequestBody';
import { CreateDiagnosisTaskRequest } from './model/CreateDiagnosisTaskRequest';
import { CreateDiagnosisTaskResponse } from './model/CreateDiagnosisTaskResponse';
import { CreateDocumentRequest } from './model/CreateDocumentRequest';
import { CreateDocumentRequestBody } from './model/CreateDocumentRequestBody';
import { CreateDocumentRequestBodyTags } from './model/CreateDocumentRequestBodyTags';
import { CreateDocumentResponse } from './model/CreateDocumentResponse';
import { CreateExternalCocAttachmentRequest } from './model/CreateExternalCocAttachmentRequest';
import { CreateExternalCocAttachmentRequestBody } from './model/CreateExternalCocAttachmentRequestBody';
import { CreateExternalCocAttachmentResponse } from './model/CreateExternalCocAttachmentResponse';
import { CreateExternalIncidentRequest } from './model/CreateExternalIncidentRequest';
import { CreateExternalIncidentResponseData } from './model/CreateExternalIncidentResponseData';
import { CreateExternalIssuesRequest } from './model/CreateExternalIssuesRequest';
import { CreateExternalIssuesResponseData } from './model/CreateExternalIssuesResponseData';
import { CreatePasswordChangePlanRequest } from './model/CreatePasswordChangePlanRequest';
import { CreatePasswordChangePlanRequestBody } from './model/CreatePasswordChangePlanRequestBody';
import { CreatePasswordChangePlanResponse } from './model/CreatePasswordChangePlanResponse';
import { CreatePasswordChangePlanResponseBodyData } from './model/CreatePasswordChangePlanResponseBodyData';
import { CreateReportCustomEventRequest } from './model/CreateReportCustomEventRequest';
import { CreateReportCustomEventResponse } from './model/CreateReportCustomEventResponse';
import { CreateReportPrometheusEventRequest } from './model/CreateReportPrometheusEventRequest';
import { CreateReportPrometheusEventResponse } from './model/CreateReportPrometheusEventResponse';
import { CreateScheduledTaskRequest } from './model/CreateScheduledTaskRequest';
import { CreateScheduledTaskResponse } from './model/CreateScheduledTaskResponse';
import { CreateScriptRequest } from './model/CreateScriptRequest';
import { CreateScriptResponse } from './model/CreateScriptResponse';
import { CreateTicketRequest } from './model/CreateTicketRequest';
import { CreateTicketResponse } from './model/CreateTicketResponse';
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
import { DeleteTicketInfoRequest } from './model/DeleteTicketInfoRequest';
import { DeleteTicketInfoResponse } from './model/DeleteTicketInfoResponse';
import { DiagnosisSummaryItem } from './model/DiagnosisSummaryItem';
import { DiagnosisTask } from './model/DiagnosisTask';
import { DiagnosisTaskDetail } from './model/DiagnosisTaskDetail';
import { DiagnosisTaskNode } from './model/DiagnosisTaskNode';
import { DiagnosisTaskNodeDetail } from './model/DiagnosisTaskNodeDetail';
import { DiagnosisTaskPage } from './model/DiagnosisTaskPage';
import { DiagnosisTaskSubmitBody } from './model/DiagnosisTaskSubmitBody';
import { DisableScheduledTaskRequest } from './model/DisableScheduledTaskRequest';
import { DisableScheduledTaskResponse } from './model/DisableScheduledTaskResponse';
import { DocumentVersionVo } from './model/DocumentVersionVo';
import { DownloadAttachmentRequest } from './model/DownloadAttachmentRequest';
import { DownloadAttachmentResponse } from './model/DownloadAttachmentResponse';
import { EditScriptModel } from './model/EditScriptModel';
import { EnableScheduledTaskRequest } from './model/EnableScheduledTaskRequest';
import { EnableScheduledTaskRequestBody } from './model/EnableScheduledTaskRequestBody';
import { EnableScheduledTaskResponse } from './model/EnableScheduledTaskResponse';
import { EnumDataInfo } from './model/EnumDataInfo';
import { ExectionInstanceModel } from './model/ExectionInstanceModel';
import { ExectuionStatistic } from './model/ExectuionStatistic';
import { ExecuteActionParams } from './model/ExecuteActionParams';
import { ExecuteActionParamsV2 } from './model/ExecuteActionParamsV2';
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
import { ExecuteTicketActionRequest } from './model/ExecuteTicketActionRequest';
import { ExecuteTicketActionResponse } from './model/ExecuteTicketActionResponse';
import { ExecutionStep } from './model/ExecutionStep';
import { ExecutionStepInputs } from './model/ExecutionStepInputs';
import { ExecutionSummary } from './model/ExecutionSummary';
import { ExternalAttachment } from './model/ExternalAttachment';
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
import { GroupRelationConfiguration } from './model/GroupRelationConfiguration';
import { HandleAlarmRequest } from './model/HandleAlarmRequest';
import { HandleAlarmResponse } from './model/HandleAlarmResponse';
import { HandleCocIncidentRequest } from './model/HandleCocIncidentRequest';
import { HandleCocIncidentResponse } from './model/HandleCocIncidentResponse';
import { HandleExternalIncidentRequest } from './model/HandleExternalIncidentRequest';
import { HandleExternalIncidentResponseData } from './model/HandleExternalIncidentResponseData';
import { HandleIncidentRequest } from './model/HandleIncidentRequest';
import { HandleIncidentResponse } from './model/HandleIncidentResponse';
import { IncidentSimpleTicketInfo } from './model/IncidentSimpleTicketInfo';
import { IncidentTicketInfoResponseData } from './model/IncidentTicketInfoResponseData';
import { InstanceCompliant } from './model/InstanceCompliant';
import { InstancesBatchResultMode } from './model/InstancesBatchResultMode';
import { InstancesBatchesMode } from './model/InstancesBatchesMode';
import { IssuesTicketInfoEnumData } from './model/IssuesTicketInfoEnumData';
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
import { ListAlarmHandleHistoriesRequest } from './model/ListAlarmHandleHistoriesRequest';
import { ListAlarmHandleHistoriesResponse } from './model/ListAlarmHandleHistoriesResponse';
import { ListAssessTaskRequest } from './model/ListAssessTaskRequest';
import { ListAssessTaskResponse } from './model/ListAssessTaskResponse';
import { ListAuthorizableTicketsExternalRequest } from './model/ListAuthorizableTicketsExternalRequest';
import { ListAuthorizableTicketsExternalResponse } from './model/ListAuthorizableTicketsExternalResponse';
import { ListAuthorizableTicketsReq } from './model/ListAuthorizableTicketsReq';
import { ListBaseRequest } from './model/ListBaseRequest';
import { ListBaseResponse } from './model/ListBaseResponse';
import { ListCocTicketOperationHistoriesRequest } from './model/ListCocTicketOperationHistoriesRequest';
import { ListCocTicketOperationHistoriesResponse } from './model/ListCocTicketOperationHistoriesResponse';
import { ListDiagnosisTasksRequest } from './model/ListDiagnosisTasksRequest';
import { ListDiagnosisTasksResponse } from './model/ListDiagnosisTasksResponse';
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
import { ListIncidentSimpleTicketsRequest } from './model/ListIncidentSimpleTicketsRequest';
import { ListIncidentSimpleTicketsResponse } from './model/ListIncidentSimpleTicketsResponse';
import { ListIncidentsHistoriesRequest } from './model/ListIncidentsHistoriesRequest';
import { ListIncidentsHistoriesResponse } from './model/ListIncidentsHistoriesResponse';
import { ListIncidentsRequest } from './model/ListIncidentsRequest';
import { ListIncidentsResponse } from './model/ListIncidentsResponse';
import { ListInstanceCompliantRequest } from './model/ListInstanceCompliantRequest';
import { ListInstanceCompliantResponse } from './model/ListInstanceCompliantResponse';
import { ListInstancesBatchRequest } from './model/ListInstancesBatchRequest';
import { ListInstancesBatchResponse } from './model/ListInstancesBatchResponse';
import { ListPublicScriptsRequest } from './model/ListPublicScriptsRequest';
import { ListPublicScriptsResponse } from './model/ListPublicScriptsResponse';
import { ListResourcesRequest } from './model/ListResourcesRequest';
import { ListResourcesResponse } from './model/ListResourcesResponse';
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
import { ListSubTicketsRequest } from './model/ListSubTicketsRequest';
import { ListSubTicketsResponse } from './model/ListSubTicketsResponse';
import { ListTenantWarRoomRequestBody } from './model/ListTenantWarRoomRequestBody';
import { ListTicketOperationHistoriesRequest } from './model/ListTicketOperationHistoriesRequest';
import { ListTicketOperationHistoriesResponse } from './model/ListTicketOperationHistoriesResponse';
import { ListTicketParams } from './model/ListTicketParams';
import { ListTicketParamsV2 } from './model/ListTicketParamsV2';
import { ListTicketParamsV2CountFilters } from './model/ListTicketParamsV2CountFilters';
import { ListTicketParamsWithPage } from './model/ListTicketParamsWithPage';
import { ListTicketParamsWithPageV2 } from './model/ListTicketParamsWithPageV2';
import { ListTicketsRequest } from './model/ListTicketsRequest';
import { ListTicketsResponse } from './model/ListTicketsResponse';
import { ListWarRoomsRequest } from './model/ListWarRoomsRequest';
import { ListWarRoomsResponse } from './model/ListWarRoomsResponse';
import { MessageNotification } from './model/MessageNotification';
import { NonCompliantSummary } from './model/NonCompliantSummary';
import { ObjectFilter } from './model/ObjectFilter';
import { ObjectFilterV2 } from './model/ObjectFilterV2';
import { OperateExecutionRequest } from './model/OperateExecutionRequest';
import { OperateExecutionRequestBody } from './model/OperateExecutionRequestBody';
import { OperateExecutionResponse } from './model/OperateExecutionResponse';
import { OperateScriptJobRequest } from './model/OperateScriptJobRequest';
import { OperateScriptJobResponse } from './model/OperateScriptJobResponse';
import { OpsflowBaseResponse } from './model/OpsflowBaseResponse';
import { Page } from './model/Page';
import { PatchDetail } from './model/PatchDetail';
import { PublicScriptDetailModel } from './model/PublicScriptDetailModel';
import { PublicScriptListModel } from './model/PublicScriptListModel';
import { PublicScriptListPage } from './model/PublicScriptListPage';
import { PublicScriptPropertiesModel } from './model/PublicScriptPropertiesModel';
import { QueryAssessTaskResponse } from './model/QueryAssessTaskResponse';
import { ReportCustomEventRequestBody } from './model/ReportCustomEventRequestBody';
import { ResetAccountPasswordRequest } from './model/ResetAccountPasswordRequest';
import { ResetAccountPasswordRequestBody } from './model/ResetAccountPasswordRequestBody';
import { ResetAccountPasswordResponse } from './model/ResetAccountPasswordResponse';
import { ResolvedRecordDTO } from './model/ResolvedRecordDTO';
import { ResourceInstance } from './model/ResourceInstance';
import { ResourceInstanceProp } from './model/ResourceInstanceProp';
import { ResourceMultiCountResponseData } from './model/ResourceMultiCountResponseData';
import { ResourceQuery } from './model/ResourceQuery';
import { ResourceTag } from './model/ResourceTag';
import { ResponseBodyTemplate } from './model/ResponseBodyTemplate';
import { RetryDiagnosisTaskRequest } from './model/RetryDiagnosisTaskRequest';
import { RetryDiagnosisTaskRequestBody } from './model/RetryDiagnosisTaskRequestBody';
import { RetryDiagnosisTaskResponse } from './model/RetryDiagnosisTaskResponse';
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
import { ShowAlarmRequest } from './model/ShowAlarmRequest';
import { ShowAlarmResponse } from './model/ShowAlarmResponse';
import { ShowCocIncidentDetailRequest } from './model/ShowCocIncidentDetailRequest';
import { ShowCocIncidentDetailResponse } from './model/ShowCocIncidentDetailResponse';
import { ShowCocIssuesDetailRequest } from './model/ShowCocIssuesDetailRequest';
import { ShowCocIssuesDetailResponse } from './model/ShowCocIssuesDetailResponse';
import { ShowDiagnosisNodeRequest } from './model/ShowDiagnosisNodeRequest';
import { ShowDiagnosisNodeResponse } from './model/ShowDiagnosisNodeResponse';
import { ShowDiagnosisSummaryRequest } from './model/ShowDiagnosisSummaryRequest';
import { ShowDiagnosisSummaryResponse } from './model/ShowDiagnosisSummaryResponse';
import { ShowDiagnosisTaskRequest } from './model/ShowDiagnosisTaskRequest';
import { ShowDiagnosisTaskResponse } from './model/ShowDiagnosisTaskResponse';
import { ShowIncidentTaskRequest } from './model/ShowIncidentTaskRequest';
import { ShowIncidentTaskResponse } from './model/ShowIncidentTaskResponse';
import { ShowInstancePatchItemsRequest } from './model/ShowInstancePatchItemsRequest';
import { ShowInstancePatchItemsResponse } from './model/ShowInstancePatchItemsResponse';
import { ShowScheduledTaskRequest } from './model/ShowScheduledTaskRequest';
import { ShowScheduledTaskResponse } from './model/ShowScheduledTaskResponse';
import { ShowTicketInfoRequest } from './model/ShowTicketInfoRequest';
import { ShowTicketInfoResponse } from './model/ShowTicketInfoResponse';
import { SubTaskInfoDTO } from './model/SubTaskInfoDTO';
import { SubTicketListInfo } from './model/SubTicketListInfo';
import { SyncMultiCloudResourceRequest } from './model/SyncMultiCloudResourceRequest';
import { SyncMultiCloudResourceRequestBody } from './model/SyncMultiCloudResourceRequestBody';
import { SyncMultiCloudResourceResponse } from './model/SyncMultiCloudResourceResponse';
import { SyncResourceReq } from './model/SyncResourceReq';
import { SyncResourceRequest } from './model/SyncResourceRequest';
import { SyncResourceResponse } from './model/SyncResourceResponse';
import { Target } from './model/Target';
import { TargetResource } from './model/TargetResource';
import { TicketCreateSubTicketInfo } from './model/TicketCreateSubTicketInfo';
import { TicketHistoryInfo } from './model/TicketHistoryInfo';
import { TicketInfo } from './model/TicketInfo';
import { TicketInfoEnumData } from './model/TicketInfoEnumData';
import { TicketInformation } from './model/TicketInformation';
import { TransferAlarmToIncidentRequest } from './model/TransferAlarmToIncidentRequest';
import { TransferAlarmToIncidentResponse } from './model/TransferAlarmToIncidentResponse';
import { TriggerTime } from './model/TriggerTime';
import { UpdateAccountPassword } from './model/UpdateAccountPassword';
import { UpdateAccountPasswordRequest } from './model/UpdateAccountPasswordRequest';
import { UpdateAccountPasswordRequestBody } from './model/UpdateAccountPasswordRequestBody';
import { UpdateAccountPasswordResponse } from './model/UpdateAccountPasswordResponse';
import { UpdateChangeRequest } from './model/UpdateChangeRequest';
import { UpdateChangeResponse } from './model/UpdateChangeResponse';
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
import { UpdateTicketRequest } from './model/UpdateTicketRequest';
import { UpdateTicketResponse } from './model/UpdateTicketResponse';
import { UploadFileResponse } from './model/UploadFileResponse';
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
     * 创建改密计划
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建改密计划
     * @param {CreatePasswordChangePlanRequestBody} createPasswordChangePlanRequestBody 获取创建改密计划请求body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createPasswordChangePlan(createPasswordChangePlanRequest?: CreatePasswordChangePlanRequest): Promise<CreatePasswordChangePlanResponse> {
        const options = ParamCreater().createPasswordChangePlan(createPasswordChangePlanRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 主机密码重置
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 主机密码重置
     * @param {ResetAccountPasswordRequestBody} resetAccountPasswordRequestBody 重置密码请求body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public resetAccountPassword(resetAccountPasswordRequest?: ResetAccountPasswordRequest): Promise<ResetAccountPasswordResponse> {
        const options = ParamCreater().resetAccountPassword(resetAccountPasswordRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 回写改密结果
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 回写改密结果
     * @param {UpdateAccountPasswordRequestBody} updateAccountPasswordRequestBody 回写改密结果请求body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateAccountPassword(updateAccountPasswordRequest?: UpdateAccountPasswordRequest): Promise<UpdateAccountPasswordResponse> {
        const options = ParamCreater().updateAccountPassword(updateAccountPasswordRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 清除告警
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量清除告警
     * @param {ClearAlarmRequestBody} [clearAlarmRequestBody] 清除告警请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public clearAlarm(clearAlarmRequest?: ClearAlarmRequest): Promise<ClearAlarmResponse> {
        const options = ParamCreater().clearAlarm(clearAlarmRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 自动处理告警
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 自动处理告警
     * @param {string} alarmId 告警ID
     * @param {AutoHandlerAlarmRequestBody} handlerAlarmRequestBody 自动处理告警请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public handleAlarm(handleAlarmRequest?: HandleAlarmRequest): Promise<HandleAlarmResponse> {
        const options = ParamCreater().handleAlarm(handleAlarmRequest);

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
     * 批量告警转事件
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量告警转事件
     * @param {AlarmToIncidentRequestBody} [transferAlarmToIncidentRequestBody] 转事件请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public transferAlarmToIncident(transferAlarmToIncidentRequest?: TransferAlarmToIncidentRequest): Promise<TransferAlarmToIncidentResponse> {
        const options = ParamCreater().transferAlarmToIncident(transferAlarmToIncidentRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量创建应用，分组，组件。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量创建应用，分组，组件
     * @param {BatchCreateApplicationViewRequestBody} [batchCreateApplicationViewRequestBody] 批量创建应用，分组，组件请求体。
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
     * 创建应用评估任务
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建应用评估任务
     * @param {CreateAssessTaskRequestBody} createAssessTaskRequestBody 创建应用评估任务请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createAssessTask(createAssessTaskRequest?: CreateAssessTaskRequest): Promise<CreateAssessTaskResponse> {
        const options = ParamCreater().createAssessTask(createAssessTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 分页查询评估任务列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 分页查询评估任务列表
     * @param {number} offset 分页参数
     * @param {number} limit 每页显示的条目数量
     * @param {string} [applicationId] 应用id
     * @param {Array<string>} [assessStatusList] 评估任务状态
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAssessTask(listAssessTaskRequest?: ListAssessTaskRequest): Promise<ListAssessTaskResponse> {
        const options = ParamCreater().listAssessTask(listAssessTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * UpdateChange 更新变更单
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary UpdateChange 更新变更单
     * @param {string} changeId 变更单id
     * @param {CocUpdateChangeRequestBodyV2} updateChangeRequestBody 创单参数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateChange(updateChangeRequest?: UpdateChangeRequest): Promise<UpdateChangeResponse> {
        const options = ParamCreater().updateChange(updateChangeRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * HandleIncident 处理事件单
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary HandleIncident 处理事件单
     * @param {string} incidentId 事件单ID
     * @param {ExecuteActionParamsV2} handleIncidentRequestBody request
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public handleIncident(handleIncidentRequest?: HandleIncidentRequest): Promise<HandleIncidentResponse> {
        const options = ParamCreater().handleIncident(handleIncidentRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * ListIncidents 查询事件单列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary ListIncidents 查询事件单列表
     * @param {ListTicketParamsWithPageV2} [listIncidentsRequestBody] 请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listIncidents(listIncidentsRequest?: ListIncidentsRequest): Promise<ListIncidentsResponse> {
        const options = ParamCreater().listIncidents(listIncidentsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * ListIncidentsHistories  获取事件单历史
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary ListIncidentsHistories 获取事件单历史
     * @param {string} incidentId 事件单ID
     * @param {ListTicketParamsV2} [listIncidentsHistoriesRequestBody] request
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listIncidentsHistories(listIncidentsHistoriesRequest?: ListIncidentsHistoriesRequest): Promise<ListIncidentsHistoriesResponse> {
        const options = ParamCreater().listIncidentsHistories(listIncidentsHistoriesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * ShowIncidentTask 获取事件任务
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary ShowIncidentTask 获取事件任务
     * @param {string} incidentId 事件单ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showIncidentTask(showIncidentTaskRequest?: ShowIncidentTaskRequest): Promise<ShowIncidentTaskResponse> {
        const options = ParamCreater().showIncidentTask(showIncidentTaskRequest);

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
     * 取消诊断任务
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 取消诊断任务
     * @param {string} taskId 诊断任务ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public cancelDiagnosisTask(cancelDiagnosisTaskRequest?: CancelDiagnosisTaskRequest): Promise<CancelDiagnosisTaskResponse> {
        const options = ParamCreater().cancelDiagnosisTask(cancelDiagnosisTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 提交诊断任务
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 提交诊断任务
     * @param {DiagnosisTaskSubmitBody} [createDiagnosisTaskRequestBody] 诊断任务提交对象
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createDiagnosisTask(createDiagnosisTaskRequest?: CreateDiagnosisTaskRequest): Promise<CreateDiagnosisTaskResponse> {
        const options = ParamCreater().createDiagnosisTask(createDiagnosisTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询诊断记录
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询诊断记录
     * @param {number} pageIndex 分页查询页索引
     * @param {number} pageSize 分页查询页大小
     * @param {string} [taskId] 诊断任务工单ID
     * @param {'ECS' | 'RDS' | 'DCS' | 'DMS' | 'ELB'} [type] 诊断任务实例类别
     * @param {'cancel' | 'executing' | 'waiting' | 'failed' | 'finish'} [status] 诊断任务执行状态
     * @param {string} [region] 被诊断实例所在区域
     * @param {string} [creator] 诊断工单创建者
     * @param {number} [startTime] 诊断工单的开始执行时间
     * @param {number} [endTime] 诊断工单的执行结束时间
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listDiagnosisTasks(listDiagnosisTasksRequest?: ListDiagnosisTasksRequest): Promise<ListDiagnosisTasksResponse> {
        const options = ParamCreater().listDiagnosisTasks(listDiagnosisTasksRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 重试诊断任务
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 重试诊断任务
     * @param {string} taskId 诊断任务ID
     * @param {RetryDiagnosisTaskRequestBody} retryDiagnosisTaskRequestBody 重试诊断任务请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public retryDiagnosisTask(retryDiagnosisTaskRequest?: RetryDiagnosisTaskRequest): Promise<RetryDiagnosisTaskResponse> {
        const options = ParamCreater().retryDiagnosisTask(retryDiagnosisTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定诊断记录下的指定诊断步骤的详情
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询指定诊断记录下的指定诊断步骤的详情
     * @param {string} taskId 诊断工单ID
     * @param {'holmesInstall' | 'dataCollection' | 'diagnosisFault' | 'holmesUnInstall' | 'rdsDiagnosis' | 'dcsDiagnosis' | 'dmsDiagnosis' | 'elbDiagnosis'} code 诊断步骤编码
     * @param {string} instanceId 被诊断实例ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showDiagnosisNode(showDiagnosisNodeRequest?: ShowDiagnosisNodeRequest): Promise<ShowDiagnosisNodeResponse> {
        const options = ParamCreater().showDiagnosisNode(showDiagnosisNodeRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询诊断任务的结果概要
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询批量诊断任务的结果概要
     * @param {string} taskId 诊断任务ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showDiagnosisSummary(showDiagnosisSummaryRequest?: ShowDiagnosisSummaryRequest): Promise<ShowDiagnosisSummaryResponse> {
        const options = ParamCreater().showDiagnosisSummary(showDiagnosisSummaryRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询单个诊断任务详情
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询单个诊断任务详情
     * @param {string} taskId 诊断工单ID
     * @param {string} instanceId 非必填，被诊断实例的ID，传入后查询该实例诊断报告
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showDiagnosisTask(showDiagnosisTaskRequest?: ShowDiagnosisTaskRequest): Promise<ShowDiagnosisTaskResponse> {
        const options = ParamCreater().showDiagnosisTask(showDiagnosisTaskRequest);

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
     * 搜索变更工单子单。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 搜索变更工单子单
     * @param {string} ticketType 工单类型，此处传固定值change。
     * @param {string} ticketId 变更单工单id
     * @param {string} type 资源类型
     * @param {number} [limit] 每页显示的条数
     * @param {string} [marker] 上一页数据的最后一条记录的id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listSubTickets(listSubTicketsRequest?: ListSubTicketsRequest): Promise<ListSubTicketsResponse> {
        const options = ParamCreater().listSubTickets(listSubTicketsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 变更单审批、撤销以及问题单的所有操作均通过此接口完成。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 工单操作
     * @param {string} ticketType 工单类型，变更单传值change，问题单传值issues_mgmt。
     * @param {ExecuteActionParams} executeTicketActionRequestBody 执行动作参数。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public executeTicketAction(executeTicketActionRequest?: ExecuteTicketActionRequest): Promise<ExecuteTicketActionResponse> {
        const options = ParamCreater().executeTicketAction(executeTicketActionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * List Histories
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 搜索工单历史
     * @param {string} ticketType 工单类型
     * @param {ListTicketParams} listTicketOperationHistoriesRequestBody 查询参数。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listTicketOperationHistories(listTicketOperationHistoriesRequest?: ListTicketOperationHistoriesRequest): Promise<ListTicketOperationHistoriesResponse> {
        const options = ParamCreater().listTicketOperationHistories(listTicketOperationHistoriesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * List ticket
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 搜索工单
     * @param {string} ticketType 工单类型
     * @param {ListTicketParamsWithPage} listTicketsRequestBody 查询参数。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listTickets(listTicketsRequest?: ListTicketsRequest): Promise<ListTicketsResponse> {
        const options = ParamCreater().listTickets(listTicketsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * Get Ticket info by id
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询Ticket
     * @param {string} ticketType 工单类型
     * @param {string} ticketId ID of Ticket
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showTicketInfo(showTicketInfoRequest?: ShowTicketInfoRequest): Promise<ShowTicketInfoResponse> {
        const options = ParamCreater().showTicketInfo(showTicketInfoRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除变更单，当变更单为撤销状态下，变更单可进行删除操作。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除变更单
     * @param {string} ticketType 需要操作的工单类型，需要传值change表示需要删除的工单为变更单。
     * @param {string} ticketId 需要删除的工单单号。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteTicketInfo(deleteTicketInfoRequest?: DeleteTicketInfoRequest): Promise<DeleteTicketInfoResponse> {
        const options = ParamCreater().deleteTicketInfo(deleteTicketInfoRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 变更单状态修改，请求路径中的ticket_type为固定值change，且ticket_id传递变更单单号。此接口可操作变更开始、变更结束、变更取消和添加变更结果操作。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 变更单状态修改
     * @param {string} ticketType 需要修改的工单类型，此处需传递固定值change，表示更新变更单状态。
     * @param {string} ticketId 变更单工单单号。
     * @param {CocUpdateChangeRequestBody} updateTicketRequestBody TicketInfo object that needs to be modified
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateTicket(updateTicketRequest?: UpdateTicketRequest): Promise<UpdateTicketResponse> {
        const options = ParamCreater().updateTicket(updateTicketRequest);

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
     * 上传附件，创建事件单的场景下，如需上传附件，需要先调用该接口将文件上传到obs。上传成功时，该接口将返回文档唯一id。支持文件类型：.jpg,.png,.docx,.txt,.pdf，且文本大小不超10M
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 上传附件
     * @param {any} file 需要上传的文件，以表单的形式上传，内容为二进制binary文本。支持文件类型：.jpg,.png,.docx,.txt,.pdf，且文本大小不超10M。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createExternalCocAttachment(createExternalCocAttachmentRequest?: CreateExternalCocAttachmentRequest): Promise<CreateExternalCocAttachmentResponse> {
        const options = ParamCreater().createExternalCocAttachment(createExternalCocAttachmentRequest);

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
     * @param {'incident' | 'issues_mgmt'} ticketType 需要查询的工单类型，事件单传值为incident，问题单传值为issues_mgmt。
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
     * 该接口可分页查询到事件单列表信息，分页参数为limit与offset。该接口不支持对事件单进行除分页参数外的条件过滤，且返回的列表字段相对简单，只有事件单标题、事件单单号、描述信息、工单状态、事件级别、企业项目ID、事件单来源、创建人及责任人。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询简易版事件单列表
     * @param {number} [offset] 列表查询接口分页参数，表示当前查询第几页，1表示查询第一页。
     * @param {number} [limit] 列表查询接口分页参数，表示一页查询多少条数据，该值需大于等于1且为整数，表示分页查询时每一页最多查到的数量。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listIncidentSimpleTickets(listIncidentSimpleTicketsRequest?: ListIncidentSimpleTicketsRequest): Promise<ListIncidentSimpleTicketsResponse> {
        const options = ParamCreater().listIncidentSimpleTickets(listIncidentSimpleTicketsRequest);

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
     * 上传附件，创建工单（事件单、变更单、问题单）的场景下，如需上传附件，需要先调用该接口将文件上传到obs。上传成功时，该接口将返回文档唯一id。支持文件类型：.jpg,.png,.docx,.txt,.pdf，且文本大小不超10M。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 上传附件
     * @param {string} ticketType **参数解释：** 需要创建的工单类型，此处为固定值incident。此处的ticket_type传递的值为固定值incident，但是创建变更单或者问题单时，如需上传附件使用的依然是此接口。 **约束限制：** 不涉及 **取值范围：** 固定值incident **默认取值：** 不涉及
     * @param {any} file **参数解释：** 需要上传的文件，以表单的形式上传。 **约束限制：** 内容为二进制binary文本。支持文件类型：.jpg,.png,.docx,.txt,.pdf，且文本大小不超10M。 **取值范围：** 不涉及 **默认取值：** 不涉及
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createAttachment(createAttachmentRequest?: CreateAttachmentRequest): Promise<CreateAttachmentResponse> {
        const options = ParamCreater().createAttachment(createAttachmentRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建变更单或问题单的接口，通过路径参数ticket_type区分需要创建的工单类型。ticket_type为change表示要创建变更单，ticket_type为issues_mgmt为创建问题单。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 新建工单
     * @param {'change' | 'issues_mgmt'} ticketType **参数解释：** 需要创建的工单类型，如需创建变更单传值change，如需创建问题单传值issues_mgmt。 **约束限制：** 不涉及 **取值范围：** 枚举值：change/issues_mgmt 当前支持的工单类型：变更单传值change，问题单传值issues_mgmt **默认取值：** incident
     * @param {CreateCocTicketRequestBody} createTicketRequestBody TicketInfo object that needs to be created
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createTicket(createTicketRequest?: CreateTicketRequest): Promise<CreateTicketResponse> {
        const options = ParamCreater().createTicket(createTicketRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 附件下载操作需基于已上传的附件资源。上传附件时，需调用/v1/{ticket_type}/attachments接口完成上传；成功上传后，可从接口响应中获取doc_id参数。下载附件时，凭借此doc_id再次调用/v1/{ticket_type}/attachments接口，即可获取已上传的对应附件资源，实现附件全生命周期管理。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 下载附件
     * @param {string} ticketType **参数解释：** 工单类型，此处传递固定值incident。 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** 不涉及
     * @param {string} docId **参数解释：** 需要下载的文件唯一ID。 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** 不涉及
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public downloadAttachment(downloadAttachmentRequest?: DownloadAttachmentRequest): Promise<DownloadAttachmentResponse> {
        const options = ParamCreater().downloadAttachment(downloadAttachmentRequest);

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
     * 查询用户在云厂商（阿里云、AWS、Azure和HCS）的资源总数。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询用户在云厂商的资源总数
     * @param {string} vendor **参数解释：** 云厂商类型。 **约束限制：** 不涉及。 **取值范围：** - AWS：亚马逊。 - AZURE：微软。 - ALI：阿里云。 - HCS：Huawei Cloud Stack。 **默认取值：** 不涉及。
     * @param {string} [type] **参数解释：** 资源类型。 **约束限制：** 不涉及。 **取值范围：** 资源类型较多，根据实际业务选择资源类型、常用资源类型如下： - cloudservers：弹性云服务器。 - servers：裸金属服务器。 - clusters：云容器引擎。 - instances：云数据库。 **默认取值：** 不涉及。
     * @param {Array<string>} [resourceIdList] **参数解释：** 用户选择的资源id组成的列表。 **约束限制：** 不涉及。 **取值范围：** 不涉及。 **默认取值：** 不涉及。
     * @param {Array<string>} [nameList] **参数解释：** 资源名称。 **约束限制：** 不涉及。 **取值范围：** 列表，可参考：裸金属服务器BMS。 **默认取值：** 不涉及。
     * @param {Array<string>} [regionIdList] **参数解释：** 关联的区域region的id组成的列表。 **约束限制：** 不涉及。 **取值范围：** 不涉及。 **默认取值：** 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public countMultiCloudResources(countMultiCloudResourcesRequest?: CountMultiCloudResourcesRequest): Promise<CountMultiCloudResourcesResponse> {
        const options = ParamCreater().countMultiCloudResources(countMultiCloudResourcesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 手动从云厂商同步用户资源。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 手动从云厂商同步用户资源
     * @param {SyncMultiCloudResourceRequestBody} [syncMultiCloudResourceRequestBody] 手动从云厂商同步用户资源请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public syncMultiCloudResource(syncMultiCloudResourceRequest?: SyncMultiCloudResourceRequest): Promise<SyncMultiCloudResourceResponse> {
        const options = ParamCreater().syncMultiCloudResource(syncMultiCloudResourceRequest);

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
     * 查询租户所有资源：
     *  - 查询租户所有资源等相关信息，便于租户详细了解资源总体情况。
     *  - 请求参数provider（云服务名称），type（云资源类型），limit（查询条数）必填，单次最大查询条数：500。
     *  - 返回信息包括：资源ID，资源名称，云服务名称，资源类型，项目ID，租户ID，区域ID，企业项目ID，资源标签，资源详细属性，资源ingest属性，uniagentID，uniagent状态，是否托管，是否可运维。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询用户所有资源
     * @param {string} provider **参数解释：** 云服务名称。 **约束限制：** - 创建的云资源数量（count字段对应的值）大于1时，可以使用“自动排序”和“正则排序”设置有序的云资源名称。 - 创建的云资源数量（count字段对应的值）大于1时，为区分不同云资源，创建过程中系统会自动在名称后加“-0000”的类似标记。若用户在名称后已指定“-0000”的类似标记，系统将从该标记后继续顺序递增编号。故此时名称的长度为[1-59]个字符。 **取值范围：** - 只能由中文字符、英文字母、数字及“_”、“-”、“.”组成，且长度为[1-128]个英文字符或[1-64]个中文字符。 **默认取值：** 不涉及。
     * @param {string} type **参数解释：** 资源类型。 **约束限制：** 不涉及。 **取值范围：** 资源类型较多，根据实际业务选择资源类型、常用资源类型如下： - cloudservers：弹性云服务器。 - servers：裸金属服务器。 - clusters：云容器引擎。 - instances：云数据库。 **默认取值：** 不涉及。
     * @param {number} limit **参数解释：** 分页查询每页显示的条目数量。 **约束限制：** 不涉及。 **取值范围：** 自定义，在1-500范围。 **默认取值：** 不涉及。
     * @param {string} [marker] **参数解释：** 用于分页查询。 **约束限制：** 不涉及。 **取值范围：** 分页参数，通过上一个请求中返回的marker信息作为输入，获取当前页。 **默认取值：** 不涉及。
     * @param {Array<string>} [resourceIdList] **参数解释：** 资源id列表。 **约束限制：** 不涉及。 **取值范围：** 资源id列表，最大值100。 **默认取值：** 不涉及。
     * @param {Array<string>} [ipList] **参数解释：** ip列表。 **约束限制：** 不涉及。 **取值范围：** 列表，最大值100。 **默认取值：** 不涉及。
     * @param {string} [name] **参数解释：** 云资源名称。 **约束限制：** 不涉及。 **取值范围：** 字符串，可参考：裸金属服务器BMS。 **默认取值：** 不涉及。
     * @param {string} [regionId] **参数解释：** 区域id。 **约束限制：** 不涉及。 **取值范围：** 关联的区域region的id。 **默认取值：** 不涉及。
     * @param {string} [azId] **参数解释：** 可用区id。 **约束限制：** 不涉及。 **取值范围：** 不涉及。 **默认取值：** 不涉及。
     * @param {string} [ipType] **参数解释：** ip类型。 **约束限制：** 不涉及。 **取值范围：** - fixed：内网IP。 - floating：弹性公网IP。 **默认取值：** 不涉及。
     * @param {string} [ip] **参数解释：** 云资源IP。 **约束限制：** 不涉及。 **取值范围：** IPv4地址过滤结果，匹配规则为模糊匹配。 **默认取值：** 不涉及。
     * @param {string} [status] **参数解释：** 云资源状态。 **约束限制：** 不涉及。 **取值范围：** 请选择[[弹性云服务器 ECS](https://support.huaweicloud.com/api-ecs/ecs_08_0002.html)](tag:hws)[[弹性云服务器 ECS](https://support.huaweicloud.com/api-ecs/ecs_08_0002.html)](tag:hws_hk)中存在的云服务器状态。 **默认取值：** 不涉及。
     * @param {string} [agentState] **参数解释：** agent状态。 **约束限制：** 不涉及。 **取值范围：** - ONLINE：运行中。 - OFFLINE：异常。 - INSTALLING：安装中。 - FAILED：安装失败。 - UNINSTALLED：已卸载。 - null：未安装。 **默认取值：** 不涉及。
     * @param {string} [imageName] **参数解释：** 镜像名称，模糊匹配。 **约束限制：** 不涉及。 **取值范围：** 不涉及。 **默认取值：** 不涉及。
     * @param {string} [osType] **参数解释：** 系统类型。 **约束限制：** 不涉及。 **取值范围：** - windows：windows操作系统类型。 - linux：linux操作系统类型。 **默认取值：** 不涉及。
     * @param {string} [tag] **参数解释：** 云资源的标签。 **约束限制：** 标签的格式为“key.value”。其中，key的长度不超过36个字符，value的长度不超过43个字符。 **取值范围：** 标签命名时，需满足如下要求：标签的key值只能包含大写字母（A~Z）、小写字母（a~z）、数字（0-9）、下划线（）、中划线（-）以及中文字符。 标签的value值只能包含大写字母（A~Z）、小写字母（a~z）、数字（0-9）、下划线（）、中划线（-）、小数点（.）以及中文字符。 **默认取值：** 不涉及。
     * @param {string} [tagKey] **参数解释：** 云资源的标签key。 **约束限制：** 不涉及。 **取值范围：** 不涉及。 **默认取值：** 不涉及。
     * @param {string} [groupId] **参数解释：** 云资源下的分组ID。 **约束限制：** 传分组id，就查询分组下的资源数量。 **取值范围：** 不涉及。 **默认取值：** 不涉及。
     * @param {string} [componentId] **参数解释：** 云资源下组件ID。 **约束限制：** 传组件id，就查询组件下的资源数量。 **取值范围：** 不涉及。 **默认取值：** 不涉及。
     * @param {string} [applicationId] **参数解释：** 云资源下应用ID。 **约束限制：** 传应用id，就查询应用下的资源数量。 **取值范围：** 不涉及。 **默认取值：** 不涉及。
     * @param {string} [cceClusterId] **参数解释：** cce集群ID。 **约束限制：** 不涉及。 **取值范围：** 资源属于的cce的ID。 **默认取值：** 不涉及。
     * @param {string} [vpcId] **参数解释：** 待创建云资源所属虚拟私有云（简称VPC），需要指定已创建VPC的ID，UUID格式。。 **约束限制：** 不涉及。 **取值范围：** 不涉及。 **默认取值：** 不涉及。
     * @param {string} [epId] **参数解释：** 企业项目id。 **约束限制：** 不涉及。 **取值范围：** 请选择[[企业管理](https://support.huaweicloud.com/usermanual-em/em_eps_qs_0400.html)](tag:hws)[[企业管理](https://support.huaweicloud.com/intl/zh-cn/usermanual-em/em_eps_qs_0400.html)](tag:hws_hk)中存在的项目ID。 **默认取值：** 不涉及。
     * @param {boolean} [isDelegated] **参数解释：** 是否已托管。 **约束限制：** 不涉及。 **取值范围：** - true：已经托管。 - false：未托管。 **默认取值：** 不涉及。
     * @param {boolean} [isCollected] **参数解释：** 是否已收藏。 **约束限制：** 不涉及。 **取值范围：** - true：已收藏的企业项目。 - false：未收藏的企业项目。 **默认取值：** 不涉及。
     * @param {string} [flavorName] **参数解释：** 云资源规格名称。 **约束限制：** 不涉及。 **取值范围：** 不涉及。 **默认取值：** 不涉及。
     * @param {string} [chargingMode] **参数解释：** 云服务器的计费类型。 **约束限制：** 不涉及。 **取值范围：** 计费模式： - 0：按需计费。 - 1：包年包月。 - 2：竞价计费。 **默认取值：** 不涉及。
     * @param {string} [offset] **参数解释：** 分页查询偏移量，表示从此偏移量开始查询。 **约束限制：** 不涉及。 **取值范围：** 0-2147483647。 **默认取值：** 0。
     * @param {string} [enterpriseProjectId] **参数解释：** 企业项目id。 **约束限制：** 不涉及。 **取值范围：** 不涉及。 **默认取值：** 不涉及。
     * @param {string} [orderField] **参数解释：** 根据排序字段对资源进行排序显示。 **约束限制：** 不涉及。 **取值范围：** 不涉及。 **默认取值：** 不涉及。
     * @param {string} [direction] **参数解释：** 排序。 **约束限制：** 不涉及。 **取值范围：** - DESC:倒序。 - ASC:正序。 **默认取值：** 不涉及。
     * @param {string} [showAssociatedGroups] **参数解释：** 显示关联应用。 **约束限制：** 不涉及。 **取值范围：** - true：显示关联应用信息。 - false：不显示关联应用信息。 **默认取值：** 不涉及。
     * @param {string} [operable] **参数解释：** 用户定义资源是否可运维实例。 **约束限制：** 不涉及。 **取值范围：** - ENABLE：可运维实例。 - DISABLE：不可运维实例operable字段不存在。 **默认取值：** 不涉及。
     * @param {string} [createSince] **参数解释：** 创建时间中的开始日期，参考ISO8601标准格式。 **约束限制：** 开始日期和结束日期，至少有一个日期存在。 **取值范围：** 不涉及。 **默认取值：** 不涉及。
     * @param {string} [createUntil] **参数解释：** 创建时间中的结束日期，参考ISO8601标准格式。 **约束限制：** 开始日期和结束日期，至少有一个日期存在。 **取值范围：** 不涉及。 **默认取值：** 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listResources(listResourcesRequest?: ListResourcesRequest): Promise<ListResourcesResponse> {
        const options = ParamCreater().listResources(listResourcesRequest);

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
         * 创建改密计划
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createPasswordChangePlan(createPasswordChangePlanRequest?: CreatePasswordChangePlanRequest) {
            const options = {
                method: "POST",
                url: "/v1/account-mgmt/accounts/password-change-plan",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createPasswordChangePlanRequest !== null && createPasswordChangePlanRequest !== undefined) {
                if (createPasswordChangePlanRequest instanceof CreatePasswordChangePlanRequest) {
                    body = createPasswordChangePlanRequest.body
                } else {
                    body = createPasswordChangePlanRequest['body'];
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
         * 主机密码重置
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        resetAccountPassword(resetAccountPasswordRequest?: ResetAccountPasswordRequest) {
            const options = {
                method: "POST",
                url: "/v1/account-mgmt/accounts/password/reset",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (resetAccountPasswordRequest !== null && resetAccountPasswordRequest !== undefined) {
                if (resetAccountPasswordRequest instanceof ResetAccountPasswordRequest) {
                    body = resetAccountPasswordRequest.body
                } else {
                    body = resetAccountPasswordRequest['body'];
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
         * 回写改密结果
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateAccountPassword(updateAccountPasswordRequest?: UpdateAccountPasswordRequest) {
            const options = {
                method: "POST",
                url: "/v1/account-mgmt/accounts/password/update",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (updateAccountPasswordRequest !== null && updateAccountPasswordRequest !== undefined) {
                if (updateAccountPasswordRequest instanceof UpdateAccountPasswordRequest) {
                    body = updateAccountPasswordRequest.body
                } else {
                    body = updateAccountPasswordRequest['body'];
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
         * 清除告警
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        clearAlarm(clearAlarmRequest?: ClearAlarmRequest) {
            const options = {
                method: "POST",
                url: "/v1/alarm-mgmt/alarms/cancel",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (clearAlarmRequest !== null && clearAlarmRequest !== undefined) {
                if (clearAlarmRequest instanceof ClearAlarmRequest) {
                    body = clearAlarmRequest.body
                } else {
                    body = clearAlarmRequest['body'];
                }
            }

        
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 自动处理告警
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        handleAlarm(handleAlarmRequest?: HandleAlarmRequest) {
            const options = {
                method: "POST",
                url: "/v1/alarm-mgmt/alarm/{alarm_id}/auto-process",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let alarmId;

            if (handleAlarmRequest !== null && handleAlarmRequest !== undefined) {
                if (handleAlarmRequest instanceof HandleAlarmRequest) {
                    alarmId = handleAlarmRequest.alarmId;
                    body = handleAlarmRequest.body
                } else {
                    alarmId = handleAlarmRequest['alarm_id'];
                    body = handleAlarmRequest['body'];
                }
            }

        
            if (alarmId === null || alarmId === undefined) {
            throw new RequiredError('alarmId','Required parameter alarmId was null or undefined when calling handleAlarm.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'alarm_id': alarmId, };
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
         * 批量告警转事件
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        transferAlarmToIncident(transferAlarmToIncidentRequest?: TransferAlarmToIncidentRequest) {
            const options = {
                method: "POST",
                url: "/v1/alarm-mgmt/alarms-linked-incident",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (transferAlarmToIncidentRequest !== null && transferAlarmToIncidentRequest !== undefined) {
                if (transferAlarmToIncidentRequest instanceof TransferAlarmToIncidentRequest) {
                    body = transferAlarmToIncidentRequest.body
                } else {
                    body = transferAlarmToIncidentRequest['body'];
                }
            }

        
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 批量创建应用，分组，组件。
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
         * 创建应用评估任务
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createAssessTask(createAssessTaskRequest?: CreateAssessTaskRequest) {
            const options = {
                method: "POST",
                url: "/v1/assess-tasks",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createAssessTaskRequest !== null && createAssessTaskRequest !== undefined) {
                if (createAssessTaskRequest instanceof CreateAssessTaskRequest) {
                    body = createAssessTaskRequest.body
                } else {
                    body = createAssessTaskRequest['body'];
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
         * 分页查询评估任务列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAssessTask(listAssessTaskRequest?: ListAssessTaskRequest) {
            const options = {
                method: "GET",
                url: "/v1/assess-tasks",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let offset;
            
            let limit;
            
            let applicationId;
            
            let assessStatusList;

            if (listAssessTaskRequest !== null && listAssessTaskRequest !== undefined) {
                if (listAssessTaskRequest instanceof ListAssessTaskRequest) {
                    offset = listAssessTaskRequest.offset;
                    limit = listAssessTaskRequest.limit;
                    applicationId = listAssessTaskRequest.applicationId;
                    assessStatusList = listAssessTaskRequest.assessStatusList;
                } else {
                    offset = listAssessTaskRequest['offset'];
                    limit = listAssessTaskRequest['limit'];
                    applicationId = listAssessTaskRequest['application_id'];
                    assessStatusList = listAssessTaskRequest['assess_status_list'];
                }
            }

        
            if (offset === null || offset === undefined) {
                throw new RequiredError('offset','Required parameter offset was null or undefined when calling listAssessTask.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit === null || limit === undefined) {
                throw new RequiredError('limit','Required parameter limit was null or undefined when calling listAssessTask.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (applicationId !== null && applicationId !== undefined) {
                localVarQueryParameter['application_id'] = applicationId;
            }
            if (assessStatusList !== null && assessStatusList !== undefined) {
                localVarQueryParameter['assess_status_list'] = assessStatusList;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * UpdateChange 更新变更单
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateChange(updateChangeRequest?: UpdateChangeRequest) {
            const options = {
                method: "PUT",
                url: "/v2/changes/{change_id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let changeId;

            if (updateChangeRequest !== null && updateChangeRequest !== undefined) {
                if (updateChangeRequest instanceof UpdateChangeRequest) {
                    changeId = updateChangeRequest.changeId;
                    body = updateChangeRequest.body
                } else {
                    changeId = updateChangeRequest['change_id'];
                    body = updateChangeRequest['body'];
                }
            }

        
            if (changeId === null || changeId === undefined) {
            throw new RequiredError('changeId','Required parameter changeId was null or undefined when calling updateChange.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'change_id': changeId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * HandleIncident 处理事件单
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        handleIncident(handleIncidentRequest?: HandleIncidentRequest) {
            const options = {
                method: "POST",
                url: "/v2/incidents/{incident_id}/actions",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let incidentId;

            if (handleIncidentRequest !== null && handleIncidentRequest !== undefined) {
                if (handleIncidentRequest instanceof HandleIncidentRequest) {
                    incidentId = handleIncidentRequest.incidentId;
                    body = handleIncidentRequest.body
                } else {
                    incidentId = handleIncidentRequest['incident_id'];
                    body = handleIncidentRequest['body'];
                }
            }

        
            if (incidentId === null || incidentId === undefined) {
            throw new RequiredError('incidentId','Required parameter incidentId was null or undefined when calling handleIncident.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'incident_id': incidentId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * ListIncidents 查询事件单列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listIncidents(listIncidentsRequest?: ListIncidentsRequest) {
            const options = {
                method: "POST",
                url: "/v2/incidents/list",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (listIncidentsRequest !== null && listIncidentsRequest !== undefined) {
                if (listIncidentsRequest instanceof ListIncidentsRequest) {
                    body = listIncidentsRequest.body
                } else {
                    body = listIncidentsRequest['body'];
                }
            }

        
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * ListIncidentsHistories  获取事件单历史
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listIncidentsHistories(listIncidentsHistoriesRequest?: ListIncidentsHistoriesRequest) {
            const options = {
                method: "POST",
                url: "/v2/incidents/{incident_id}/histories",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let incidentId;

            if (listIncidentsHistoriesRequest !== null && listIncidentsHistoriesRequest !== undefined) {
                if (listIncidentsHistoriesRequest instanceof ListIncidentsHistoriesRequest) {
                    incidentId = listIncidentsHistoriesRequest.incidentId;
                    body = listIncidentsHistoriesRequest.body
                } else {
                    incidentId = listIncidentsHistoriesRequest['incident_id'];
                    body = listIncidentsHistoriesRequest['body'];
                }
            }

        
            if (incidentId === null || incidentId === undefined) {
            throw new RequiredError('incidentId','Required parameter incidentId was null or undefined when calling listIncidentsHistories.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'incident_id': incidentId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * ShowIncidentTask 获取事件任务
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showIncidentTask(showIncidentTaskRequest?: ShowIncidentTaskRequest) {
            const options = {
                method: "GET",
                url: "/v2/incidents/{incident_id}/tasks",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let incidentId;

            if (showIncidentTaskRequest !== null && showIncidentTaskRequest !== undefined) {
                if (showIncidentTaskRequest instanceof ShowIncidentTaskRequest) {
                    incidentId = showIncidentTaskRequest.incidentId;
                } else {
                    incidentId = showIncidentTaskRequest['incident_id'];
                }
            }

        
            if (incidentId === null || incidentId === undefined) {
            throw new RequiredError('incidentId','Required parameter incidentId was null or undefined when calling showIncidentTask.');
            }

            options.pathParams = { 'incident_id': incidentId, };
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
         * 取消诊断任务
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        cancelDiagnosisTask(cancelDiagnosisTaskRequest?: CancelDiagnosisTaskRequest) {
            const options = {
                method: "POST",
                url: "/v1/diagnosis/tasks/{task_id}/cancel",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let taskId;

            if (cancelDiagnosisTaskRequest !== null && cancelDiagnosisTaskRequest !== undefined) {
                if (cancelDiagnosisTaskRequest instanceof CancelDiagnosisTaskRequest) {
                    taskId = cancelDiagnosisTaskRequest.taskId;
                } else {
                    taskId = cancelDiagnosisTaskRequest['task_id'];
                }
            }

        
            if (taskId === null || taskId === undefined) {
            throw new RequiredError('taskId','Required parameter taskId was null or undefined when calling cancelDiagnosisTask.');
            }

            options.pathParams = { 'task_id': taskId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 提交诊断任务
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createDiagnosisTask(createDiagnosisTaskRequest?: CreateDiagnosisTaskRequest) {
            const options = {
                method: "POST",
                url: "/v1/diagnosis/tasks",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createDiagnosisTaskRequest !== null && createDiagnosisTaskRequest !== undefined) {
                if (createDiagnosisTaskRequest instanceof CreateDiagnosisTaskRequest) {
                    body = createDiagnosisTaskRequest.body
                } else {
                    body = createDiagnosisTaskRequest['body'];
                }
            }

        
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询诊断记录
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listDiagnosisTasks(listDiagnosisTasksRequest?: ListDiagnosisTasksRequest) {
            const options = {
                method: "GET",
                url: "/v1/diagnosis/tasks",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let pageIndex;
            
            let pageSize;
            
            let taskId;
            
            let type;
            
            let status;
            
            let region;
            
            let creator;
            
            let startTime;
            
            let endTime;

            if (listDiagnosisTasksRequest !== null && listDiagnosisTasksRequest !== undefined) {
                if (listDiagnosisTasksRequest instanceof ListDiagnosisTasksRequest) {
                    pageIndex = listDiagnosisTasksRequest.pageIndex;
                    pageSize = listDiagnosisTasksRequest.pageSize;
                    taskId = listDiagnosisTasksRequest.taskId;
                    type = listDiagnosisTasksRequest.type;
                    status = listDiagnosisTasksRequest.status;
                    region = listDiagnosisTasksRequest.region;
                    creator = listDiagnosisTasksRequest.creator;
                    startTime = listDiagnosisTasksRequest.startTime;
                    endTime = listDiagnosisTasksRequest.endTime;
                } else {
                    pageIndex = listDiagnosisTasksRequest['page_index'];
                    pageSize = listDiagnosisTasksRequest['page_size'];
                    taskId = listDiagnosisTasksRequest['task_id'];
                    type = listDiagnosisTasksRequest['type'];
                    status = listDiagnosisTasksRequest['status'];
                    region = listDiagnosisTasksRequest['region'];
                    creator = listDiagnosisTasksRequest['creator'];
                    startTime = listDiagnosisTasksRequest['start_time'];
                    endTime = listDiagnosisTasksRequest['end_time'];
                }
            }

        
            if (pageIndex === null || pageIndex === undefined) {
                throw new RequiredError('pageIndex','Required parameter pageIndex was null or undefined when calling listDiagnosisTasks.');
            }
            if (pageIndex !== null && pageIndex !== undefined) {
                localVarQueryParameter['page_index'] = pageIndex;
            }
            if (pageSize === null || pageSize === undefined) {
                throw new RequiredError('pageSize','Required parameter pageSize was null or undefined when calling listDiagnosisTasks.');
            }
            if (pageSize !== null && pageSize !== undefined) {
                localVarQueryParameter['page_size'] = pageSize;
            }
            if (taskId !== null && taskId !== undefined) {
                localVarQueryParameter['task_id'] = taskId;
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (region !== null && region !== undefined) {
                localVarQueryParameter['region'] = region;
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

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 重试诊断任务
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        retryDiagnosisTask(retryDiagnosisTaskRequest?: RetryDiagnosisTaskRequest) {
            const options = {
                method: "POST",
                url: "/v1/diagnosis/tasks/{task_id}/retry",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let taskId;

            if (retryDiagnosisTaskRequest !== null && retryDiagnosisTaskRequest !== undefined) {
                if (retryDiagnosisTaskRequest instanceof RetryDiagnosisTaskRequest) {
                    taskId = retryDiagnosisTaskRequest.taskId;
                    body = retryDiagnosisTaskRequest.body
                } else {
                    taskId = retryDiagnosisTaskRequest['task_id'];
                    body = retryDiagnosisTaskRequest['body'];
                }
            }

        
            if (taskId === null || taskId === undefined) {
            throw new RequiredError('taskId','Required parameter taskId was null or undefined when calling retryDiagnosisTask.');
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
         * 查询指定诊断记录下的指定诊断步骤的详情
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showDiagnosisNode(showDiagnosisNodeRequest?: ShowDiagnosisNodeRequest) {
            const options = {
                method: "GET",
                url: "/v1/diagnosis/tasks/{task_id}/node/{code}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let taskId;
            
            let code;
            
            let instanceId;

            if (showDiagnosisNodeRequest !== null && showDiagnosisNodeRequest !== undefined) {
                if (showDiagnosisNodeRequest instanceof ShowDiagnosisNodeRequest) {
                    taskId = showDiagnosisNodeRequest.taskId;
                    code = showDiagnosisNodeRequest.code;
                    instanceId = showDiagnosisNodeRequest.instanceId;
                } else {
                    taskId = showDiagnosisNodeRequest['task_id'];
                    code = showDiagnosisNodeRequest['code'];
                    instanceId = showDiagnosisNodeRequest['instance_id'];
                }
            }

        
            if (taskId === null || taskId === undefined) {
            throw new RequiredError('taskId','Required parameter taskId was null or undefined when calling showDiagnosisNode.');
            }
            if (code === null || code === undefined) {
            throw new RequiredError('code','Required parameter code was null or undefined when calling showDiagnosisNode.');
            }
            if (instanceId === null || instanceId === undefined) {
                throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showDiagnosisNode.');
            }
            if (instanceId !== null && instanceId !== undefined) {
                localVarQueryParameter['instance_id'] = instanceId;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'task_id': taskId,'code': code, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询诊断任务的结果概要
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showDiagnosisSummary(showDiagnosisSummaryRequest?: ShowDiagnosisSummaryRequest) {
            const options = {
                method: "GET",
                url: "/v1/diagnosis/tasks/{task_id}/summary",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let taskId;

            if (showDiagnosisSummaryRequest !== null && showDiagnosisSummaryRequest !== undefined) {
                if (showDiagnosisSummaryRequest instanceof ShowDiagnosisSummaryRequest) {
                    taskId = showDiagnosisSummaryRequest.taskId;
                } else {
                    taskId = showDiagnosisSummaryRequest['task_id'];
                }
            }

        
            if (taskId === null || taskId === undefined) {
            throw new RequiredError('taskId','Required parameter taskId was null or undefined when calling showDiagnosisSummary.');
            }

            options.pathParams = { 'task_id': taskId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询单个诊断任务详情
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showDiagnosisTask(showDiagnosisTaskRequest?: ShowDiagnosisTaskRequest) {
            const options = {
                method: "GET",
                url: "/v1/diagnosis/tasks/{task_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let taskId;
            
            let instanceId;

            if (showDiagnosisTaskRequest !== null && showDiagnosisTaskRequest !== undefined) {
                if (showDiagnosisTaskRequest instanceof ShowDiagnosisTaskRequest) {
                    taskId = showDiagnosisTaskRequest.taskId;
                    instanceId = showDiagnosisTaskRequest.instanceId;
                } else {
                    taskId = showDiagnosisTaskRequest['task_id'];
                    instanceId = showDiagnosisTaskRequest['instance_id'];
                }
            }

        
            if (taskId === null || taskId === undefined) {
            throw new RequiredError('taskId','Required parameter taskId was null or undefined when calling showDiagnosisTask.');
            }
            if (instanceId === null || instanceId === undefined) {
                throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showDiagnosisTask.');
            }
            if (instanceId !== null && instanceId !== undefined) {
                localVarQueryParameter['instance_id'] = instanceId;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'task_id': taskId, };
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
         * 搜索变更工单子单。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listSubTickets(listSubTicketsRequest?: ListSubTicketsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{ticket_type}/tickets/{ticket_id}/list-sub-tickets",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let ticketType;
            
            let ticketId;
            
            let type;
            
            let limit;
            
            let marker;

            if (listSubTicketsRequest !== null && listSubTicketsRequest !== undefined) {
                if (listSubTicketsRequest instanceof ListSubTicketsRequest) {
                    ticketType = listSubTicketsRequest.ticketType;
                    ticketId = listSubTicketsRequest.ticketId;
                    type = listSubTicketsRequest.type;
                    limit = listSubTicketsRequest.limit;
                    marker = listSubTicketsRequest.marker;
                } else {
                    ticketType = listSubTicketsRequest['ticket_type'];
                    ticketId = listSubTicketsRequest['ticket_id'];
                    type = listSubTicketsRequest['type'];
                    limit = listSubTicketsRequest['limit'];
                    marker = listSubTicketsRequest['marker'];
                }
            }

        
            if (ticketType === null || ticketType === undefined) {
            throw new RequiredError('ticketType','Required parameter ticketType was null or undefined when calling listSubTickets.');
            }
            if (ticketId === null || ticketId === undefined) {
            throw new RequiredError('ticketId','Required parameter ticketId was null or undefined when calling listSubTickets.');
            }
            if (type === null || type === undefined) {
                throw new RequiredError('type','Required parameter type was null or undefined when calling listSubTickets.');
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'ticket_type': ticketType,'ticket_id': ticketId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 变更单审批、撤销以及问题单的所有操作均通过此接口完成。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        executeTicketAction(executeTicketActionRequest?: ExecuteTicketActionRequest) {
            const options = {
                method: "POST",
                url: "/v1/{ticket_type}/actions",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let ticketType;

            if (executeTicketActionRequest !== null && executeTicketActionRequest !== undefined) {
                if (executeTicketActionRequest instanceof ExecuteTicketActionRequest) {
                    ticketType = executeTicketActionRequest.ticketType;
                    body = executeTicketActionRequest.body
                } else {
                    ticketType = executeTicketActionRequest['ticket_type'];
                    body = executeTicketActionRequest['body'];
                }
            }

        
            if (ticketType === null || ticketType === undefined) {
            throw new RequiredError('ticketType','Required parameter ticketType was null or undefined when calling executeTicketAction.');
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
         * List Histories
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listTicketOperationHistories(listTicketOperationHistoriesRequest?: ListTicketOperationHistoriesRequest) {
            const options = {
                method: "POST",
                url: "/v1/{ticket_type}/list-histories",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let ticketType;

            if (listTicketOperationHistoriesRequest !== null && listTicketOperationHistoriesRequest !== undefined) {
                if (listTicketOperationHistoriesRequest instanceof ListTicketOperationHistoriesRequest) {
                    ticketType = listTicketOperationHistoriesRequest.ticketType;
                    body = listTicketOperationHistoriesRequest.body
                } else {
                    ticketType = listTicketOperationHistoriesRequest['ticket_type'];
                    body = listTicketOperationHistoriesRequest['body'];
                }
            }

        
            if (ticketType === null || ticketType === undefined) {
            throw new RequiredError('ticketType','Required parameter ticketType was null or undefined when calling listTicketOperationHistories.');
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
         * List ticket
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listTickets(listTicketsRequest?: ListTicketsRequest) {
            const options = {
                method: "POST",
                url: "/v1/{ticket_type}/list-tickets",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let ticketType;

            if (listTicketsRequest !== null && listTicketsRequest !== undefined) {
                if (listTicketsRequest instanceof ListTicketsRequest) {
                    ticketType = listTicketsRequest.ticketType;
                    body = listTicketsRequest.body
                } else {
                    ticketType = listTicketsRequest['ticket_type'];
                    body = listTicketsRequest['body'];
                }
            }

        
            if (ticketType === null || ticketType === undefined) {
            throw new RequiredError('ticketType','Required parameter ticketType was null or undefined when calling listTickets.');
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
         * Get Ticket info by id
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showTicketInfo(showTicketInfoRequest?: ShowTicketInfoRequest) {
            const options = {
                method: "GET",
                url: "/v1/{ticket_type}/tickets/{ticket_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let ticketType;
            
            let ticketId;

            if (showTicketInfoRequest !== null && showTicketInfoRequest !== undefined) {
                if (showTicketInfoRequest instanceof ShowTicketInfoRequest) {
                    ticketType = showTicketInfoRequest.ticketType;
                    ticketId = showTicketInfoRequest.ticketId;
                } else {
                    ticketType = showTicketInfoRequest['ticket_type'];
                    ticketId = showTicketInfoRequest['ticket_id'];
                }
            }

        
            if (ticketType === null || ticketType === undefined) {
            throw new RequiredError('ticketType','Required parameter ticketType was null or undefined when calling showTicketInfo.');
            }
            if (ticketId === null || ticketId === undefined) {
            throw new RequiredError('ticketId','Required parameter ticketId was null or undefined when calling showTicketInfo.');
            }

            options.pathParams = { 'ticket_type': ticketType,'ticket_id': ticketId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除变更单，当变更单为撤销状态下，变更单可进行删除操作。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteTicketInfo(deleteTicketInfoRequest?: DeleteTicketInfoRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{ticket_type}/tickets/{ticket_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let ticketType;
            
            let ticketId;

            if (deleteTicketInfoRequest !== null && deleteTicketInfoRequest !== undefined) {
                if (deleteTicketInfoRequest instanceof DeleteTicketInfoRequest) {
                    ticketType = deleteTicketInfoRequest.ticketType;
                    ticketId = deleteTicketInfoRequest.ticketId;
                } else {
                    ticketType = deleteTicketInfoRequest['ticket_type'];
                    ticketId = deleteTicketInfoRequest['ticket_id'];
                }
            }

        
            if (ticketType === null || ticketType === undefined) {
            throw new RequiredError('ticketType','Required parameter ticketType was null or undefined when calling deleteTicketInfo.');
            }
            if (ticketId === null || ticketId === undefined) {
            throw new RequiredError('ticketId','Required parameter ticketId was null or undefined when calling deleteTicketInfo.');
            }

            options.pathParams = { 'ticket_type': ticketType,'ticket_id': ticketId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 变更单状态修改，请求路径中的ticket_type为固定值change，且ticket_id传递变更单单号。此接口可操作变更开始、变更结束、变更取消和添加变更结果操作。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateTicket(updateTicketRequest?: UpdateTicketRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{ticket_type}/tickets/{ticket_id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let ticketType;
            
            let ticketId;

            if (updateTicketRequest !== null && updateTicketRequest !== undefined) {
                if (updateTicketRequest instanceof UpdateTicketRequest) {
                    ticketType = updateTicketRequest.ticketType;
                    ticketId = updateTicketRequest.ticketId;
                    body = updateTicketRequest.body
                } else {
                    ticketType = updateTicketRequest['ticket_type'];
                    ticketId = updateTicketRequest['ticket_id'];
                    body = updateTicketRequest['body'];
                }
            }

        
            if (ticketType === null || ticketType === undefined) {
            throw new RequiredError('ticketType','Required parameter ticketType was null or undefined when calling updateTicket.');
            }
            if (ticketId === null || ticketId === undefined) {
            throw new RequiredError('ticketId','Required parameter ticketId was null or undefined when calling updateTicket.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'ticket_type': ticketType,'ticket_id': ticketId, };
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
         * 上传附件，创建事件单的场景下，如需上传附件，需要先调用该接口将文件上传到obs。上传成功时，该接口将返回文档唯一id。支持文件类型：.jpg,.png,.docx,.txt,.pdf，且文本大小不超10M
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createExternalCocAttachment(createExternalCocAttachmentRequest?: CreateExternalCocAttachmentRequest) {
            const options = {
                method: "POST",
                url: "/v1/external/incident/attachments",
                contentType: "multipart/form-data",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            const localVarFormParams = new FormData();
            let file;
            

            if (createExternalCocAttachmentRequest !== null && createExternalCocAttachmentRequest !== undefined) {
                if (createExternalCocAttachmentRequest instanceof CreateExternalCocAttachmentRequest) {
                    file = createExternalCocAttachmentRequest.body?.file;
                } else {
                    file = createExternalCocAttachmentRequest['body']['file'];
                }
            }

        
            if (file === null || file === undefined) {
            throw new RequiredError('file','Required parameter file was null or undefined when calling createExternalCocAttachment.');
            }
            if (file !== undefined) { 
                localVarFormParams.append('file', file as any);
            }
            localVarHeaderParameter['Content-Type'] = 'application/x-www-form-urlencoded';
            localVarHeaderParameter['Content-Type'] = 'multipart/form-data';
            options.data = localVarFormParams;
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
         * 该接口可分页查询到事件单列表信息，分页参数为limit与offset。该接口不支持对事件单进行除分页参数外的条件过滤，且返回的列表字段相对简单，只有事件单标题、事件单单号、描述信息、工单状态、事件级别、企业项目ID、事件单来源、创建人及责任人。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listIncidentSimpleTickets(listIncidentSimpleTicketsRequest?: ListIncidentSimpleTicketsRequest) {
            const options = {
                method: "GET",
                url: "/v1/incident-tickets",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let offset;
            
            let limit;

            if (listIncidentSimpleTicketsRequest !== null && listIncidentSimpleTicketsRequest !== undefined) {
                if (listIncidentSimpleTicketsRequest instanceof ListIncidentSimpleTicketsRequest) {
                    offset = listIncidentSimpleTicketsRequest.offset;
                    limit = listIncidentSimpleTicketsRequest.limit;
                } else {
                    offset = listIncidentSimpleTicketsRequest['offset'];
                    limit = listIncidentSimpleTicketsRequest['limit'];
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
         * 上传附件，创建工单（事件单、变更单、问题单）的场景下，如需上传附件，需要先调用该接口将文件上传到obs。上传成功时，该接口将返回文档唯一id。支持文件类型：.jpg,.png,.docx,.txt,.pdf，且文本大小不超10M。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createAttachment(createAttachmentRequest?: CreateAttachmentRequest) {
            const options = {
                method: "POST",
                url: "/v1/{ticket_type}/attachments",
                contentType: "multipart/form-data",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            const localVarFormParams = new FormData();
            
            let ticketType;
            let file;
            

            if (createAttachmentRequest !== null && createAttachmentRequest !== undefined) {
                if (createAttachmentRequest instanceof CreateAttachmentRequest) {
                    ticketType = createAttachmentRequest.ticketType;
                    file = createAttachmentRequest.body?.file;
                } else {
                    ticketType = createAttachmentRequest['ticket_type'];
                    file = createAttachmentRequest['body']['file'];
                }
            }

        
            if (ticketType === null || ticketType === undefined) {
            throw new RequiredError('ticketType','Required parameter ticketType was null or undefined when calling createAttachment.');
            }
            if (file === null || file === undefined) {
            throw new RequiredError('file','Required parameter file was null or undefined when calling createAttachment.');
            }
            if (file !== undefined) { 
                localVarFormParams.append('file', file as any);
            }
            localVarHeaderParameter['Content-Type'] = 'application/x-www-form-urlencoded';
            localVarHeaderParameter['Content-Type'] = 'multipart/form-data';
            options.data = localVarFormParams;
            options.pathParams = { 'ticket_type': ticketType, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建变更单或问题单的接口，通过路径参数ticket_type区分需要创建的工单类型。ticket_type为change表示要创建变更单，ticket_type为issues_mgmt为创建问题单。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createTicket(createTicketRequest?: CreateTicketRequest) {
            const options = {
                method: "POST",
                url: "/v1/{ticket_type}/tickets",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let ticketType;

            if (createTicketRequest !== null && createTicketRequest !== undefined) {
                if (createTicketRequest instanceof CreateTicketRequest) {
                    ticketType = createTicketRequest.ticketType;
                    body = createTicketRequest.body
                } else {
                    ticketType = createTicketRequest['ticket_type'];
                    body = createTicketRequest['body'];
                }
            }

        
            if (ticketType === null || ticketType === undefined) {
            throw new RequiredError('ticketType','Required parameter ticketType was null or undefined when calling createTicket.');
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
         * 附件下载操作需基于已上传的附件资源。上传附件时，需调用/v1/{ticket_type}/attachments接口完成上传；成功上传后，可从接口响应中获取doc_id参数。下载附件时，凭借此doc_id再次调用/v1/{ticket_type}/attachments接口，即可获取已上传的对应附件资源，实现附件全生命周期管理。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        downloadAttachment(downloadAttachmentRequest?: DownloadAttachmentRequest) {
            const options = {
                method: "GET",
                url: "/v1/{ticket_type}/attachments/{doc_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let ticketType;
            
            let docId;

            if (downloadAttachmentRequest !== null && downloadAttachmentRequest !== undefined) {
                if (downloadAttachmentRequest instanceof DownloadAttachmentRequest) {
                    ticketType = downloadAttachmentRequest.ticketType;
                    docId = downloadAttachmentRequest.docId;
                } else {
                    ticketType = downloadAttachmentRequest['ticket_type'];
                    docId = downloadAttachmentRequest['doc_id'];
                }
            }

        
            if (ticketType === null || ticketType === undefined) {
            throw new RequiredError('ticketType','Required parameter ticketType was null or undefined when calling downloadAttachment.');
            }
            if (docId === null || docId === undefined) {
            throw new RequiredError('docId','Required parameter docId was null or undefined when calling downloadAttachment.');
            }

            options.pathParams = { 'ticket_type': ticketType,'doc_id': docId, };
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
         * 查询用户在云厂商（阿里云、AWS、Azure和HCS）的资源总数。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        countMultiCloudResources(countMultiCloudResourcesRequest?: CountMultiCloudResourcesRequest) {
            const options = {
                method: "GET",
                url: "/v1/multicloud-resources/count",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let vendor;
            
            let type;
            
            let resourceIdList;
            
            let nameList;
            
            let regionIdList;

            if (countMultiCloudResourcesRequest !== null && countMultiCloudResourcesRequest !== undefined) {
                if (countMultiCloudResourcesRequest instanceof CountMultiCloudResourcesRequest) {
                    vendor = countMultiCloudResourcesRequest.vendor;
                    type = countMultiCloudResourcesRequest.type;
                    resourceIdList = countMultiCloudResourcesRequest.resourceIdList;
                    nameList = countMultiCloudResourcesRequest.nameList;
                    regionIdList = countMultiCloudResourcesRequest.regionIdList;
                } else {
                    vendor = countMultiCloudResourcesRequest['vendor'];
                    type = countMultiCloudResourcesRequest['type'];
                    resourceIdList = countMultiCloudResourcesRequest['resource_id_list'];
                    nameList = countMultiCloudResourcesRequest['name_list'];
                    regionIdList = countMultiCloudResourcesRequest['region_id_list'];
                }
            }

        
            if (vendor === null || vendor === undefined) {
                throw new RequiredError('vendor','Required parameter vendor was null or undefined when calling countMultiCloudResources.');
            }
            if (vendor !== null && vendor !== undefined) {
                localVarQueryParameter['vendor'] = vendor;
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
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
         * 手动从云厂商同步用户资源。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        syncMultiCloudResource(syncMultiCloudResourceRequest?: SyncMultiCloudResourceRequest) {
            const options = {
                method: "POST",
                url: "/v1/multicloud-resources/sync",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (syncMultiCloudResourceRequest !== null && syncMultiCloudResourceRequest !== undefined) {
                if (syncMultiCloudResourceRequest instanceof SyncMultiCloudResourceRequest) {
                    body = syncMultiCloudResourceRequest.body
                } else {
                    body = syncMultiCloudResourceRequest['body'];
                }
            }

        
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
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
         * 查询租户所有资源：
         *  - 查询租户所有资源等相关信息，便于租户详细了解资源总体情况。
         *  - 请求参数provider（云服务名称），type（云资源类型），limit（查询条数）必填，单次最大查询条数：500。
         *  - 返回信息包括：资源ID，资源名称，云服务名称，资源类型，项目ID，租户ID，区域ID，企业项目ID，资源标签，资源详细属性，资源ingest属性，uniagentID，uniagent状态，是否托管，是否可运维。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listResources(listResourcesRequest?: ListResourcesRequest) {
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
            
            let ipList;
            
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
            
            let isCollected;
            
            let flavorName;
            
            let chargingMode;
            
            let offset;
            
            let enterpriseProjectId;
            
            let orderField;
            
            let direction;
            
            let showAssociatedGroups;
            
            let operable;
            
            let createSince;
            
            let createUntil;

            if (listResourcesRequest !== null && listResourcesRequest !== undefined) {
                if (listResourcesRequest instanceof ListResourcesRequest) {
                    provider = listResourcesRequest.provider;
                    type = listResourcesRequest.type;
                    limit = listResourcesRequest.limit;
                    marker = listResourcesRequest.marker;
                    resourceIdList = listResourcesRequest.resourceIdList;
                    ipList = listResourcesRequest.ipList;
                    name = listResourcesRequest.name;
                    regionId = listResourcesRequest.regionId;
                    azId = listResourcesRequest.azId;
                    ipType = listResourcesRequest.ipType;
                    ip = listResourcesRequest.ip;
                    status = listResourcesRequest.status;
                    agentState = listResourcesRequest.agentState;
                    imageName = listResourcesRequest.imageName;
                    osType = listResourcesRequest.osType;
                    tag = listResourcesRequest.tag;
                    tagKey = listResourcesRequest.tagKey;
                    groupId = listResourcesRequest.groupId;
                    componentId = listResourcesRequest.componentId;
                    applicationId = listResourcesRequest.applicationId;
                    cceClusterId = listResourcesRequest.cceClusterId;
                    vpcId = listResourcesRequest.vpcId;
                    epId = listResourcesRequest.epId;
                    isDelegated = listResourcesRequest.isDelegated;
                    isCollected = listResourcesRequest.isCollected;
                    flavorName = listResourcesRequest.flavorName;
                    chargingMode = listResourcesRequest.chargingMode;
                    offset = listResourcesRequest.offset;
                    enterpriseProjectId = listResourcesRequest.enterpriseProjectId;
                    orderField = listResourcesRequest.orderField;
                    direction = listResourcesRequest.direction;
                    showAssociatedGroups = listResourcesRequest.showAssociatedGroups;
                    operable = listResourcesRequest.operable;
                    createSince = listResourcesRequest.createSince;
                    createUntil = listResourcesRequest.createUntil;
                } else {
                    provider = listResourcesRequest['provider'];
                    type = listResourcesRequest['type'];
                    limit = listResourcesRequest['limit'];
                    marker = listResourcesRequest['marker'];
                    resourceIdList = listResourcesRequest['resource_id_list'];
                    ipList = listResourcesRequest['ip_list'];
                    name = listResourcesRequest['name'];
                    regionId = listResourcesRequest['region_id'];
                    azId = listResourcesRequest['az_id'];
                    ipType = listResourcesRequest['ip_type'];
                    ip = listResourcesRequest['ip'];
                    status = listResourcesRequest['status'];
                    agentState = listResourcesRequest['agent_state'];
                    imageName = listResourcesRequest['image_name'];
                    osType = listResourcesRequest['os_type'];
                    tag = listResourcesRequest['tag'];
                    tagKey = listResourcesRequest['tag_key'];
                    groupId = listResourcesRequest['group_id'];
                    componentId = listResourcesRequest['component_id'];
                    applicationId = listResourcesRequest['application_id'];
                    cceClusterId = listResourcesRequest['cce_cluster_id'];
                    vpcId = listResourcesRequest['vpc_id'];
                    epId = listResourcesRequest['ep_id'];
                    isDelegated = listResourcesRequest['is_delegated'];
                    isCollected = listResourcesRequest['is_collected'];
                    flavorName = listResourcesRequest['flavor_name'];
                    chargingMode = listResourcesRequest['charging_mode'];
                    offset = listResourcesRequest['offset'];
                    enterpriseProjectId = listResourcesRequest['enterprise_project_id'];
                    orderField = listResourcesRequest['order_field'];
                    direction = listResourcesRequest['direction'];
                    showAssociatedGroups = listResourcesRequest['show_associated_groups'];
                    operable = listResourcesRequest['operable'];
                    createSince = listResourcesRequest['create_since'];
                    createUntil = listResourcesRequest['create_until'];
                }
            }

        
            if (provider === null || provider === undefined) {
                throw new RequiredError('provider','Required parameter provider was null or undefined when calling listResources.');
            }
            if (provider !== null && provider !== undefined) {
                localVarQueryParameter['provider'] = provider;
            }
            if (type === null || type === undefined) {
                throw new RequiredError('type','Required parameter type was null or undefined when calling listResources.');
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }
            if (limit === null || limit === undefined) {
                throw new RequiredError('limit','Required parameter limit was null or undefined when calling listResources.');
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
            if (ipList !== null && ipList !== undefined) {
                localVarQueryParameter['ip_list'] = ipList;
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
            if (isCollected !== null && isCollected !== undefined) {
                localVarQueryParameter['is_collected'] = isCollected;
            }
            if (flavorName !== null && flavorName !== undefined) {
                localVarQueryParameter['flavor_name'] = flavorName;
            }
            if (chargingMode !== null && chargingMode !== undefined) {
                localVarQueryParameter['charging_mode'] = chargingMode;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (orderField !== null && orderField !== undefined) {
                localVarQueryParameter['order_field'] = orderField;
            }
            if (direction !== null && direction !== undefined) {
                localVarQueryParameter['direction'] = direction;
            }
            if (showAssociatedGroups !== null && showAssociatedGroups !== undefined) {
                localVarQueryParameter['show_associated_groups'] = showAssociatedGroups;
            }
            if (operable !== null && operable !== undefined) {
                localVarQueryParameter['operable'] = operable;
            }
            if (createSince !== null && createSince !== undefined) {
                localVarQueryParameter['create_since'] = createSince;
            }
            if (createUntil !== null && createUntil !== undefined) {
                localVarQueryParameter['create_until'] = createUntil;
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