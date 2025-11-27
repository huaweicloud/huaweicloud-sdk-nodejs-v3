import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";
import FormData from 'form-data';

import { AddCaseResultFourRequest } from './model/AddCaseResultFourRequest';
import { AddCaseResultFourResponse } from './model/AddCaseResultFourResponse';
import { AddFeatureRequest } from './model/AddFeatureRequest';
import { AddFeatureResponse } from './model/AddFeatureResponse';
import { AddRelationsInfo } from './model/AddRelationsInfo';
import { AddResourceInfo } from './model/AddResourceInfo';
import { AddTestCaseCommentRequest } from './model/AddTestCaseCommentRequest';
import { AddTestCaseCommentResponse } from './model/AddTestCaseCommentResponse';
import { AddTestCaseResultInfo } from './model/AddTestCaseResultInfo';
import { AddTestCaseResultLogInfo } from './model/AddTestCaseResultLogInfo';
import { AddTestCaseResultLogRequest } from './model/AddTestCaseResultLogRequest';
import { AddTestCaseResultLogResponse } from './model/AddTestCaseResultLogResponse';
import { AddTestItemInfo } from './model/AddTestItemInfo';
import { AlarmStatisticsQuery } from './model/AlarmStatisticsQuery';
import { AlarmTemplateInfo } from './model/AlarmTemplateInfo';
import { AlertGroup } from './model/AlertGroup';
import { AlertLevel } from './model/AlertLevel';
import { AlertStatisticsDto } from './model/AlertStatisticsDto';
import { AlertTemplateVo } from './model/AlertTemplateVo';
import { ApiError } from './model/ApiError';
import { ArrayNode } from './model/ArrayNode';
import { Asset } from './model/Asset';
import { AssetExportParam } from './model/AssetExportParam';
import { AssetTree } from './model/AssetTree';
import { AssignedUserInfo } from './model/AssignedUserInfo';
import { AssociateDefectInfoVo } from './model/AssociateDefectInfoVo';
import { AssociateIssueInfoVo } from './model/AssociateIssueInfoVo';
import { AttachmentFileVo } from './model/AttachmentFileVo';
import { AttachmentInfo } from './model/AttachmentInfo';
import { AttachmentVo } from './model/AttachmentVo';
import { AttributeChange } from './model/AttributeChange';
import { AuthInfo } from './model/AuthInfo';
import { AvailableConfig } from './model/AvailableConfig';
import { AwInstance } from './model/AwInstance';
import { AwInstanceRes } from './model/AwInstanceRes';
import { AwParam } from './model/AwParam';
import { AwParamBasicValue } from './model/AwParamBasicValue';
import { AwVariable } from './model/AwVariable';
import { BackUpMindmapParam } from './model/BackUpMindmapParam';
import { BackgroundInfoVo } from './model/BackgroundInfoVo';
import { BasePageInfoMindmapBackup } from './model/BasePageInfoMindmapBackup';
import { BasePageInfoMindmapRecycle } from './model/BasePageInfoMindmapRecycle';
import { BasePageInfoReview } from './model/BasePageInfoReview';
import { BasePageInfoScene } from './model/BasePageInfoScene';
import { BasePageInfoTemplate } from './model/BasePageInfoTemplate';
import { BasePageInfoTemplateV2 } from './model/BasePageInfoTemplateV2';
import { BasePageInfoTestCase } from './model/BasePageInfoTestCase';
import { BasePageInfoTestPoint } from './model/BasePageInfoTestPoint';
import { BasicAWInfo } from './model/BasicAWInfo';
import { BasicAw } from './model/BasicAw';
import { BasicAwCata } from './model/BasicAwCata';
import { BasicAwRes } from './model/BasicAwRes';
import { BatchAddRelationsByOneCaseRequest } from './model/BatchAddRelationsByOneCaseRequest';
import { BatchAddRelationsByOneCaseResponse } from './model/BatchAddRelationsByOneCaseResponse';
import { BatchAddResourcesForIteratorRequest } from './model/BatchAddResourcesForIteratorRequest';
import { BatchAddResourcesForIteratorResponse } from './model/BatchAddResourcesForIteratorResponse';
import { BatchCreateUpdateApiTestCaseVo } from './model/BatchCreateUpdateApiTestCaseVo';
import { BatchDeleteFacotrByIdsRequest } from './model/BatchDeleteFacotrByIdsRequest';
import { BatchDeleteFacotrByIdsResponse } from './model/BatchDeleteFacotrByIdsResponse';
import { BatchDeleteTestCaseRequest } from './model/BatchDeleteTestCaseRequest';
import { BatchDeleteTestCaseRequestBody } from './model/BatchDeleteTestCaseRequestBody';
import { BatchDeleteTestCaseResponse } from './model/BatchDeleteTestCaseResponse';
import { BatchDeleteTestCasesRequest } from './model/BatchDeleteTestCasesRequest';
import { BatchDeleteTestCasesResponse } from './model/BatchDeleteTestCasesResponse';
import { BatchDeleteTestReportRequest } from './model/BatchDeleteTestReportRequest';
import { BatchDeleteTestReportResponse } from './model/BatchDeleteTestReportResponse';
import { BatchRemoveTestCasesFromIteratorRequest } from './model/BatchRemoveTestCasesFromIteratorRequest';
import { BatchRemoveTestCasesFromIteratorResponse } from './model/BatchRemoveTestCasesFromIteratorResponse';
import { BatchShowTestCaseRequest } from './model/BatchShowTestCaseRequest';
import { BatchShowTestCaseResponse } from './model/BatchShowTestCaseResponse';
import { BatchUpdateTestCasesInDiffVersionRequest } from './model/BatchUpdateTestCasesInDiffVersionRequest';
import { BatchUpdateTestCasesInDiffVersionResponse } from './model/BatchUpdateTestCasesInDiffVersionResponse';
import { BatchUpdateVersionTestCasesRequest } from './model/BatchUpdateVersionTestCasesRequest';
import { BatchUpdateVersionTestCasesResponse } from './model/BatchUpdateVersionTestCasesResponse';
import { BranchVersionInfo } from './model/BranchVersionInfo';
import { CaseAutomationDetailsVo } from './model/CaseAutomationDetailsVo';
import { CaseAwInstance } from './model/CaseAwInstance';
import { CaseCompletionRateVo } from './model/CaseCompletionRateVo';
import { CaseExecuteVo } from './model/CaseExecuteVo';
import { CaseIdAndTypeInfo } from './model/CaseIdAndTypeInfo';
import { CaseInfo } from './model/CaseInfo';
import { CaseOperationVo } from './model/CaseOperationVo';
import { CasePassRateVo } from './model/CasePassRateVo';
import { CasePassVo } from './model/CasePassVo';
import { CaseRemoveInfo } from './model/CaseRemoveInfo';
import { CheckPermissionRequest } from './model/CheckPermissionRequest';
import { CheckPermissionResponse } from './model/CheckPermissionResponse';
import { CheckPoint } from './model/CheckPoint';
import { CommRequestAssetExportParam } from './model/CommRequestAssetExportParam';
import { CommRequestAssetTree } from './model/CommRequestAssetTree';
import { CommRequestBackUpMindmapParam } from './model/CommRequestBackUpMindmapParam';
import { CommRequestGetDefaultTemplateParam } from './model/CommRequestGetDefaultTemplateParam';
import { CommRequestListFactorParam } from './model/CommRequestListFactorParam';
import { CommRequestListString } from './model/CommRequestListString';
import { CommRequestMindmapBackupPageParam } from './model/CommRequestMindmapBackupPageParam';
import { CommRequestMindmapPageParamV3 } from './model/CommRequestMindmapPageParamV3';
import { CommRequestMindmapRecyclePageParam } from './model/CommRequestMindmapRecyclePageParam';
import { CommRequestReviewPageParam } from './model/CommRequestReviewPageParam';
import { CommRequestSaveTemplateParam } from './model/CommRequestSaveTemplateParam';
import { CommRequestScenePageParam } from './model/CommRequestScenePageParam';
import { CommRequestSystemConfig } from './model/CommRequestSystemConfig';
import { CommRequestTemplatePageParam } from './model/CommRequestTemplatePageParam';
import { CommRequestTestCasePageParam } from './model/CommRequestTestCasePageParam';
import { CommRequestTestPointPageParam } from './model/CommRequestTestPointPageParam';
import { CommRequestUpdateAssetTreeParam } from './model/CommRequestUpdateAssetTreeParam';
import { CommonResponseErrorAvailableConfig } from './model/CommonResponseErrorAvailableConfig';
import { CommonResponseErrorObject } from './model/CommonResponseErrorObject';
import { CommonResponseErrorOfAPITest } from './model/CommonResponseErrorOfAPITest';
import { CommonResponseErrorOfobject } from './model/CommonResponseErrorOfobject';
import { CommonResponseErrorPageResultBasicAWInfo } from './model/CommonResponseErrorPageResultBasicAWInfo';
import { CommonResponseErrorString } from './model/CommonResponseErrorString';
import { ConditionInstance } from './model/ConditionInstance';
import { CoverRateVo } from './model/CoverRateVo';
import { CreateApiTestSuiteByRepoFileRequest } from './model/CreateApiTestSuiteByRepoFileRequest';
import { CreateApiTestSuiteByRepoFileResponse } from './model/CreateApiTestSuiteByRepoFileResponse';
import { CreateAssetTreeRequest } from './model/CreateAssetTreeRequest';
import { CreateAssetTreeResponse } from './model/CreateAssetTreeResponse';
import { CreateBackupMindmapRequest } from './model/CreateBackupMindmapRequest';
import { CreateBackupMindmapResponse } from './model/CreateBackupMindmapResponse';
import { CreateBasicAwReq } from './model/CreateBasicAwReq';
import { CreateInfoVo } from './model/CreateInfoVo';
import { CreateIteratorRequest } from './model/CreateIteratorRequest';
import { CreateIteratorResponse } from './model/CreateIteratorResponse';
import { CreatePlanRequest } from './model/CreatePlanRequest';
import { CreatePlanRequestBody } from './model/CreatePlanRequestBody';
import { CreatePlanResponse } from './model/CreatePlanResponse';
import { CreateProjectBranchRequest } from './model/CreateProjectBranchRequest';
import { CreateProjectBranchResponse } from './model/CreateProjectBranchResponse';
import { CreateRelationsByOneCaseRequest } from './model/CreateRelationsByOneCaseRequest';
import { CreateRelationsByOneCaseResponse } from './model/CreateRelationsByOneCaseResponse';
import { CreateReportRequest } from './model/CreateReportRequest';
import { CreateReportResponse } from './model/CreateReportResponse';
import { CreateResourceUriRequest } from './model/CreateResourceUriRequest';
import { CreateResourceUriResponse } from './model/CreateResourceUriResponse';
import { CreateServiceRequest } from './model/CreateServiceRequest';
import { CreateServiceResponse } from './model/CreateServiceResponse';
import { CreateTaskDefaultResultRequest } from './model/CreateTaskDefaultResultRequest';
import { CreateTaskDefaultResultResponse } from './model/CreateTaskDefaultResultResponse';
import { CreateTemplateRequest } from './model/CreateTemplateRequest';
import { CreateTemplateResponse } from './model/CreateTemplateResponse';
import { CreateTestCaseInPlanRequest } from './model/CreateTestCaseInPlanRequest';
import { CreateTestCaseInPlanRequestBody } from './model/CreateTestCaseInPlanRequestBody';
import { CreateTestCaseInPlanResponse } from './model/CreateTestCaseInPlanResponse';
import { CreateTestCaseReq } from './model/CreateTestCaseReq';
import { CreateTestCaseRequest } from './model/CreateTestCaseRequest';
import { CreateTestCaseRequestBody } from './model/CreateTestCaseRequestBody';
import { CreateTestCaseResponse } from './model/CreateTestCaseResponse';
import { CreateTestSuitByRepoFileInfo } from './model/CreateTestSuitByRepoFileInfo';
import { CreateUserDefinedUrlKeyWordRequest } from './model/CreateUserDefinedUrlKeyWordRequest';
import { CreateUserDefinedUrlKeyWordResponse } from './model/CreateUserDefinedUrlKeyWordResponse';
import { CreateVersionTestCaseRequest } from './model/CreateVersionTestCaseRequest';
import { CreateVersionTestCaseResponse } from './model/CreateVersionTestCaseResponse';
import { CustomFieldVo } from './model/CustomFieldVo';
import { CustomReportListVo } from './model/CustomReportListVo';
import { DashboardDataQuery } from './model/DashboardDataQuery';
import { DashboardDto } from './model/DashboardDto';
import { DefectVo } from './model/DefectVo';
import { DeleteAssetRequest } from './model/DeleteAssetRequest';
import { DeleteAssetResponse } from './model/DeleteAssetResponse';
import { DeleteAssetTreeRequest } from './model/DeleteAssetTreeRequest';
import { DeleteAssetTreeResponse } from './model/DeleteAssetTreeResponse';
import { DeleteBasicAwByIdRequest } from './model/DeleteBasicAwByIdRequest';
import { DeleteBasicAwByIdResponse } from './model/DeleteBasicAwByIdResponse';
import { DeleteCacheFileRequest } from './model/DeleteCacheFileRequest';
import { DeleteCacheFileResponse } from './model/DeleteCacheFileResponse';
import { DeleteFacotrByIdRequest } from './model/DeleteFacotrByIdRequest';
import { DeleteFacotrByIdResponse } from './model/DeleteFacotrByIdResponse';
import { DeleteMindmapBackupByIdRequest } from './model/DeleteMindmapBackupByIdRequest';
import { DeleteMindmapBackupByIdResponse } from './model/DeleteMindmapBackupByIdResponse';
import { DeleteMindmapRecycleByIdRequest } from './model/DeleteMindmapRecycleByIdRequest';
import { DeleteMindmapRecycleByIdResponse } from './model/DeleteMindmapRecycleByIdResponse';
import { DeleteRelationsByOneCaseInfo } from './model/DeleteRelationsByOneCaseInfo';
import { DeleteRelationsByOneCaseRequest } from './model/DeleteRelationsByOneCaseRequest';
import { DeleteRelationsByOneCaseResponse } from './model/DeleteRelationsByOneCaseResponse';
import { DeleteServiceRequest } from './model/DeleteServiceRequest';
import { DeleteServiceResponse } from './model/DeleteServiceResponse';
import { DeleteTemplateByIdRequest } from './model/DeleteTemplateByIdRequest';
import { DeleteTemplateByIdResponse } from './model/DeleteTemplateByIdResponse';
import { DeleteTestCaseCommentRequest } from './model/DeleteTestCaseCommentRequest';
import { DeleteTestCaseCommentResponse } from './model/DeleteTestCaseCommentResponse';
import { DeleteTestCaseInfo } from './model/DeleteTestCaseInfo';
import { DeleteTestReportCustomDetailByUriRequest } from './model/DeleteTestReportCustomDetailByUriRequest';
import { DeleteTestReportCustomDetailByUriResponse } from './model/DeleteTestReportCustomDetailByUriResponse';
import { DepParamInstance } from './model/DepParamInstance';
import { DesignSummaryVo } from './model/DesignSummaryVo';
import { DetailTestTypeCasePassRateVo } from './model/DetailTestTypeCasePassRateVo';
import { DnsMapping } from './model/DnsMapping';
import { DnsMappingNode } from './model/DnsMappingNode';
import { DomainVisibleServiceVo } from './model/DomainVisibleServiceVo';
import { DownloadAssetTemplateRequest } from './model/DownloadAssetTemplateRequest';
import { DownloadAssetTemplateResponse } from './model/DownloadAssetTemplateResponse';
import { ElementResourceChangeExternalVo } from './model/ElementResourceChangeExternalVo';
import { Environment } from './model/Environment';
import { ErrorCaseInfoBean } from './model/ErrorCaseInfoBean';
import { ErrorDetailInfo } from './model/ErrorDetailInfo';
import { ErrorInfo } from './model/ErrorInfo';
import { EtlRequestBody } from './model/EtlRequestBody';
import { ExecuteInfoVo } from './model/ExecuteInfoVo';
import { ExecuteSummaryVo } from './model/ExecuteSummaryVo';
import { ExecuteTaskInfo } from './model/ExecuteTaskInfo';
import { ExecuteTaskVo } from './model/ExecuteTaskVo';
import { ExportFactorRequest } from './model/ExportFactorRequest';
import { ExportFactorResponse } from './model/ExportFactorResponse';
import { ExtendAuthorInfo } from './model/ExtendAuthorInfo';
import { ExtendInfo } from './model/ExtendInfo';
import { ExternalBranchInfoVo } from './model/ExternalBranchInfoVo';
import { ExternalServiceBizCase } from './model/ExternalServiceBizCase';
import { ExternalServiceCaseInfo } from './model/ExternalServiceCaseInfo';
import { ExternalServiceCaseStep } from './model/ExternalServiceCaseStep';
import { ExternalTestCaseHistoryVo } from './model/ExternalTestCaseHistoryVo';
import { ExternalTestCaseVo } from './model/ExternalTestCaseVo';
import { ExternalUserCaseAndDefect } from './model/ExternalUserCaseAndDefect';
import { ExternalUserExecuteInfo } from './model/ExternalUserExecuteInfo';
import { ExtraInfo } from './model/ExtraInfo';
import { GenerateReportInfo } from './model/GenerateReportInfo';
import { GetDefaultTemplateParam } from './model/GetDefaultTemplateParam';
import { GetPublicLibAndAwsResp } from './model/GetPublicLibAndAwsResp';
import { IdAndNameAndValueVo } from './model/IdAndNameAndValueVo';
import { ImportAssetRequest } from './model/ImportAssetRequest';
import { ImportAssetRequestBody } from './model/ImportAssetRequestBody';
import { ImportAssetResponse } from './model/ImportAssetResponse';
import { ImportFactorRequest } from './model/ImportFactorRequest';
import { ImportFactorRequestBody } from './model/ImportFactorRequestBody';
import { ImportFactorResponse } from './model/ImportFactorResponse';
import { InitExecuteTaskInfo } from './model/InitExecuteTaskInfo';
import { IntegerIdAndNameVo } from './model/IntegerIdAndNameVo';
import { IssueCoverRateVo } from './model/IssueCoverRateVo';
import { IssueListFilterInfo } from './model/IssueListFilterInfo';
import { IssueListPiFilterInfo } from './model/IssueListPiFilterInfo';
import { IssuePassDetailsVo } from './model/IssuePassDetailsVo';
import { IssueTreeInfo } from './model/IssueTreeInfo';
import { IssuesRelationTestCaseVo } from './model/IssuesRelationTestCaseVo';
import { ItemParam } from './model/ItemParam';
import { IteratorDeleteCaseVo } from './model/IteratorDeleteCaseVo';
import { IteratorListFilterInfo } from './model/IteratorListFilterInfo';
import { IteratorVersionInfo } from './model/IteratorVersionInfo';
import { IteratorVersionSummaryVo } from './model/IteratorVersionSummaryVo';
import { IteratorVersionsQueryInfo } from './model/IteratorVersionsQueryInfo';
import { JsonNode } from './model/JsonNode';
import { LabelVo } from './model/LabelVo';
import { ListAlarmStatisticsUsingRequest } from './model/ListAlarmStatisticsUsingRequest';
import { ListAlarmStatisticsUsingResponse } from './model/ListAlarmStatisticsUsingResponse';
import { ListAlertGroupsByConditionRequest } from './model/ListAlertGroupsByConditionRequest';
import { ListAlertGroupsByConditionRequestBody } from './model/ListAlertGroupsByConditionRequestBody';
import { ListAlertGroupsByConditionResponse } from './model/ListAlertGroupsByConditionResponse';
import { ListAlertTemplatesRequest } from './model/ListAlertTemplatesRequest';
import { ListAlertTemplatesResponse } from './model/ListAlertTemplatesResponse';
import { ListAllBranchesRequest } from './model/ListAllBranchesRequest';
import { ListAllBranchesResponse } from './model/ListAllBranchesResponse';
import { ListAllConfigItemByTypeRequest } from './model/ListAllConfigItemByTypeRequest';
import { ListAllConfigItemByTypeRequestBody } from './model/ListAllConfigItemByTypeRequestBody';
import { ListAllConfigItemByTypeResponse } from './model/ListAllConfigItemByTypeResponse';
import { ListAllIteratorsRequest } from './model/ListAllIteratorsRequest';
import { ListAllIteratorsResponse } from './model/ListAllIteratorsResponse';
import { ListAllTestCasesRequest } from './model/ListAllTestCasesRequest';
import { ListAllTestCasesResponse } from './model/ListAllTestCasesResponse';
import { ListAttachmentsRequest } from './model/ListAttachmentsRequest';
import { ListAttachmentsResponse } from './model/ListAttachmentsResponse';
import { ListAvailableConfigRequest } from './model/ListAvailableConfigRequest';
import { ListAvailableConfigResponse } from './model/ListAvailableConfigResponse';
import { ListBasicAwInfoListSupportsSearchRequest } from './model/ListBasicAwInfoListSupportsSearchRequest';
import { ListBasicAwInfoListSupportsSearchResponse } from './model/ListBasicAwInfoListSupportsSearchResponse';
import { ListBasicAwRequest } from './model/ListBasicAwRequest';
import { ListBasicAwResponse } from './model/ListBasicAwResponse';
import { ListBranchesRequest } from './model/ListBranchesRequest';
import { ListBranchesResponse } from './model/ListBranchesResponse';
import { ListCasesStatusRequest } from './model/ListCasesStatusRequest';
import { ListCasesStatusResponse } from './model/ListCasesStatusResponse';
import { ListDomainVisibleServicesRequest } from './model/ListDomainVisibleServicesRequest';
import { ListDomainVisibleServicesResponse } from './model/ListDomainVisibleServicesResponse';
import { ListEnvironmentsRequest } from './model/ListEnvironmentsRequest';
import { ListEnvironmentsResponse } from './model/ListEnvironmentsResponse';
import { ListFactorParam } from './model/ListFactorParam';
import { ListIssueTreeRequest } from './model/ListIssueTreeRequest';
import { ListIssueTreeResponse } from './model/ListIssueTreeResponse';
import { ListIteratorIssueTreeRequest } from './model/ListIteratorIssueTreeRequest';
import { ListIteratorIssueTreeResponse } from './model/ListIteratorIssueTreeResponse';
import { ListIteratorsInfoRequest } from './model/ListIteratorsInfoRequest';
import { ListIteratorsInfoResponse } from './model/ListIteratorsInfoResponse';
import { ListIteratorsRequest } from './model/ListIteratorsRequest';
import { ListIteratorsResponse } from './model/ListIteratorsResponse';
import { ListLinesUsingRequest } from './model/ListLinesUsingRequest';
import { ListLinesUsingResponse } from './model/ListLinesUsingResponse';
import { ListMsgInfosUsingRequest } from './model/ListMsgInfosUsingRequest';
import { ListMsgInfosUsingResponse } from './model/ListMsgInfosUsingResponse';
import { ListOwnTestCasesRequest } from './model/ListOwnTestCasesRequest';
import { ListOwnTestCasesResponse } from './model/ListOwnTestCasesResponse';
import { ListProjectFieldConfigsRequest } from './model/ListProjectFieldConfigsRequest';
import { ListProjectFieldConfigsResponse } from './model/ListProjectFieldConfigsResponse';
import { ListProjectTestCaseFieldsRequest } from './model/ListProjectTestCaseFieldsRequest';
import { ListProjectTestCaseFieldsResponse } from './model/ListProjectTestCaseFieldsResponse';
import { ListPublicLibAndAwsRequest } from './model/ListPublicLibAndAwsRequest';
import { ListPublicLibAndAwsResponse } from './model/ListPublicLibAndAwsResponse';
import { ListReportsRequest } from './model/ListReportsRequest';
import { ListReportsResponse } from './model/ListReportsResponse';
import { ListResourcePoolsRequest } from './model/ListResourcePoolsRequest';
import { ListResourcePoolsResponse } from './model/ListResourcePoolsResponse';
import { ListScattersUsingRequest } from './model/ListScattersUsingRequest';
import { ListScattersUsingResponse } from './model/ListScattersUsingResponse';
import { ListSubTaskCaseOverstockUsingRequest } from './model/ListSubTaskCaseOverstockUsingRequest';
import { ListSubTaskCaseOverstockUsingResponse } from './model/ListSubTaskCaseOverstockUsingResponse';
import { ListTaskAssignCasesRequest } from './model/ListTaskAssignCasesRequest';
import { ListTaskAssignCasesResponse } from './model/ListTaskAssignCasesResponse';
import { ListTaskResultsDetailRequest } from './model/ListTaskResultsDetailRequest';
import { ListTaskResultsDetailResponse } from './model/ListTaskResultsDetailResponse';
import { ListTaskResultsRequest } from './model/ListTaskResultsRequest';
import { ListTaskResultsResponse } from './model/ListTaskResultsResponse';
import { ListTaskTestCasesRequest } from './model/ListTaskTestCasesRequest';
import { ListTaskTestCasesResponse } from './model/ListTaskTestCasesResponse';
import { ListTasksRequest } from './model/ListTasksRequest';
import { ListTasksResponse } from './model/ListTasksResponse';
import { ListTestCaseCommentsRequest } from './model/ListTestCaseCommentsRequest';
import { ListTestCaseCommentsResponse } from './model/ListTestCaseCommentsResponse';
import { ListTestCaseHistoriesRequest } from './model/ListTestCaseHistoriesRequest';
import { ListTestCaseHistoriesRequestBody } from './model/ListTestCaseHistoriesRequestBody';
import { ListTestCaseHistoriesResponse } from './model/ListTestCaseHistoriesResponse';
import { ListTestCaseScriptDetailRequest } from './model/ListTestCaseScriptDetailRequest';
import { ListTestCaseScriptDetailResponse } from './model/ListTestCaseScriptDetailResponse';
import { ListTestCasesByIssueRequest } from './model/ListTestCasesByIssueRequest';
import { ListTestCasesByIssueResponse } from './model/ListTestCasesByIssueResponse';
import { ListTestCasesRequest } from './model/ListTestCasesRequest';
import { ListTestCasesRequestBody } from './model/ListTestCasesRequestBody';
import { ListTestCasesResponse } from './model/ListTestCasesResponse';
import { ListTestReportsByConditionRequest } from './model/ListTestReportsByConditionRequest';
import { ListTestReportsByConditionResponse } from './model/ListTestReportsByConditionResponse';
import { ListTestTypesRequest } from './model/ListTestTypesRequest';
import { ListTestTypesResponse } from './model/ListTestTypesResponse';
import { ListTestcasePlansRequest } from './model/ListTestcasePlansRequest';
import { ListTestcasePlansResponse } from './model/ListTestcasePlansResponse';
import { ListTestcasesByProjectIssuesRelationRequest } from './model/ListTestcasesByProjectIssuesRelationRequest';
import { ListTestcasesByProjectIssuesRelationResponse } from './model/ListTestcasesByProjectIssuesRelationResponse';
import { ListUsageInfosRequest } from './model/ListUsageInfosRequest';
import { ListUsageInfosResponse } from './model/ListUsageInfosResponse';
import { ListUserDnsMappingRequest } from './model/ListUserDnsMappingRequest';
import { ListUserDnsMappingResponse } from './model/ListUserDnsMappingResponse';
import { ListUserPackageUsageRequest } from './model/ListUserPackageUsageRequest';
import { ListUserPackageUsageResponse } from './model/ListUserPackageUsageResponse';
import { ListUserPopupInfoRequest } from './model/ListUserPopupInfoRequest';
import { ListUserPopupInfoResponse } from './model/ListUserPopupInfoResponse';
import { ListUsingGetRequest } from './model/ListUsingGetRequest';
import { ListUsingGetResponse } from './model/ListUsingGetResponse';
import { ListVariablesRequest } from './model/ListVariablesRequest';
import { ListVariablesResponse } from './model/ListVariablesResponse';
import { MindmapBackup } from './model/MindmapBackup';
import { MindmapBackupPageParam } from './model/MindmapBackupPageParam';
import { MindmapObject } from './model/MindmapObject';
import { MindmapPageParamV3 } from './model/MindmapPageParamV3';
import { MindmapRecycle } from './model/MindmapRecycle';
import { MindmapRecyclePageParam } from './model/MindmapRecyclePageParam';
import { MockInfo } from './model/MockInfo';
import { MsgInfoQuery } from './model/MsgInfoQuery';
import { MsgInfoVo } from './model/MsgInfoVo';
import { NameAndId } from './model/NameAndId';
import { NameAndIdVo } from './model/NameAndIdVo';
import { NameAndValueAndCodeVo } from './model/NameAndValueAndCodeVo';
import { NameAndValueVo } from './model/NameAndValueVo';
import { Number } from './model/Number';
import { OprReportInfo } from './model/OprReportInfo';
import { PackageUsage } from './model/PackageUsage';
import { PageResultBasicAWInfo } from './model/PageResultBasicAWInfo';
import { PageResults } from './model/PageResults';
import { PiFilterInfo } from './model/PiFilterInfo';
import { PiInfo } from './model/PiInfo';
import { PlanCycle } from './model/PlanCycle';
import { PopUpInfo } from './model/PopUpInfo';
import { ProgressVo } from './model/ProgressVo';
import { ProjectFieldConfigOptionVo } from './model/ProjectFieldConfigOptionVo';
import { ProjectFieldConfigVo } from './model/ProjectFieldConfigVo';
import { ProjectTestCaseFieldVo } from './model/ProjectTestCaseFieldVo';
import { PublicAwLib } from './model/PublicAwLib';
import { PublicAwLibRes } from './model/PublicAwLibRes';
import { QueryCaseResultInfo } from './model/QueryCaseResultInfo';
import { QueryCasesStatusResponseV2 } from './model/QueryCasesStatusResponseV2';
import { QueryCustomFieldsInfo } from './model/QueryCustomFieldsInfo';
import { QueryIssueTreeInfo } from './model/QueryIssueTreeInfo';
import { QueryProjectIssuesRelationTestCasesInfo } from './model/QueryProjectIssuesRelationTestCasesInfo';
import { QueryRequirementsOverviewInfo } from './model/QueryRequirementsOverviewInfo';
import { QueryTaskAssignCasesInfo } from './model/QueryTaskAssignCasesInfo';
import { QueryTaskTestCasesInfo } from './model/QueryTaskTestCasesInfo';
import { QueryTaskTestCasesVo } from './model/QueryTaskTestCasesVo';
import { QueryTestCasesByIssueInfo } from './model/QueryTestCasesByIssueInfo';
import { QueryTestCasesByIssueVo } from './model/QueryTestCasesByIssueVo';
import { QueryTestItemTreeInfo } from './model/QueryTestItemTreeInfo';
import { RelateTaskTestCasesVo } from './model/RelateTaskTestCasesVo';
import { RelationInfo } from './model/RelationInfo';
import { RemoveIssuesFromIteratorRequest } from './model/RemoveIssuesFromIteratorRequest';
import { RemoveIssuesFromIteratorResponse } from './model/RemoveIssuesFromIteratorResponse';
import { RemoveIssuesInfo } from './model/RemoveIssuesInfo';
import { ReportChartDataVo } from './model/ReportChartDataVo';
import { ReportDimVo } from './model/ReportDimVo';
import { ReportFilter } from './model/ReportFilter';
import { ReportSummaryVo } from './model/ReportSummaryVo';
import { RequirementOverviewVo } from './model/RequirementOverviewVo';
import { RequirementsOverviewVo } from './model/RequirementsOverviewVo';
import { ResourceChangeExternalVo } from './model/ResourceChangeExternalVo';
import { ResourcePoolVo } from './model/ResourcePoolVo';
import { ResultStepVo } from './model/ResultStepVo';
import { ResultValueAttachmentFileVo } from './model/ResultValueAttachmentFileVo';
import { ResultValueBackgroundInfoVo } from './model/ResultValueBackgroundInfoVo';
import { ResultValueBatchCreateUpdateApiTestCaseVo } from './model/ResultValueBatchCreateUpdateApiTestCaseVo';
import { ResultValueBoolean } from './model/ResultValueBoolean';
import { ResultValueCustomReportListVo } from './model/ResultValueCustomReportListVo';
import { ResultValueExecuteTaskVo } from './model/ResultValueExecuteTaskVo';
import { ResultValueIteratorDeleteCaseVo } from './model/ResultValueIteratorDeleteCaseVo';
import { ResultValueIteratorVersionSummaryVo } from './model/ResultValueIteratorVersionSummaryVo';
import { ResultValueListAttachmentVo } from './model/ResultValueListAttachmentVo';
import { ResultValueListCustomReportListVo } from './model/ResultValueListCustomReportListVo';
import { ResultValueListDomainVisibleServiceVo } from './model/ResultValueListDomainVisibleServiceVo';
import { ResultValueListIntegerIdAndNameVo } from './model/ResultValueListIntegerIdAndNameVo';
import { ResultValueListIteratorVersionSummaryVo } from './model/ResultValueListIteratorVersionSummaryVo';
import { ResultValueListProjectFieldConfigVo } from './model/ResultValueListProjectFieldConfigVo';
import { ResultValueListProjectTestCaseFieldVo } from './model/ResultValueListProjectTestCaseFieldVo';
import { ResultValueListResourcePoolVo } from './model/ResultValueListResourcePoolVo';
import { ResultValueListTaskAssignCaseDetailVo } from './model/ResultValueListTaskAssignCaseDetailVo';
import { ResultValueListTaskResulDetailtVo } from './model/ResultValueListTaskResulDetailtVo';
import { ResultValueListTaskResultVo } from './model/ResultValueListTaskResultVo';
import { ResultValueListTestCaseCommentVo } from './model/ResultValueListTestCaseCommentVo';
import { ResultValueListTestCaseListVo } from './model/ResultValueListTestCaseListVo';
import { ResultValueListTestCaseReviewVo } from './model/ResultValueListTestCaseReviewVo';
import { ResultValueListTestCaseVo } from './model/ResultValueListTestCaseVo';
import { ResultValueListTestItemVo } from './model/ResultValueListTestItemVo';
import { ResultValueListTestReportCustomDetailVo } from './model/ResultValueListTestReportCustomDetailVo';
import { ResultValueListTestReportVo } from './model/ResultValueListTestReportVo';
import { ResultValueListTestResultVo } from './model/ResultValueListTestResultVo';
import { ResultValueListTestVersionVo } from './model/ResultValueListTestVersionVo';
import { ResultValueListTestcasePlanVo } from './model/ResultValueListTestcasePlanVo';
import { ResultValueListWorkItemVo } from './model/ResultValueListWorkItemVo';
import { ResultValueProgressVo } from './model/ResultValueProgressVo';
import { ResultValueQueryTaskTestCasesVo } from './model/ResultValueQueryTaskTestCasesVo';
import { ResultValueQueryTestCasesByIssueVo } from './model/ResultValueQueryTestCasesByIssueVo';
import { ResultValueRequirementsOverviewVo } from './model/ResultValueRequirementsOverviewVo';
import { ResultValueStepImageVo } from './model/ResultValueStepImageVo';
import { ResultValueString } from './model/ResultValueString';
import { ResultValueStringForOk } from './model/ResultValueStringForOk';
import { ResultValueTaskListVo } from './model/ResultValueTaskListVo';
import { ResultValueTaskResultVo } from './model/ResultValueTaskResultVo';
import { ResultValueTestCaseCommentVo } from './model/ResultValueTestCaseCommentVo';
import { ResultValueTestCaseDetailVo } from './model/ResultValueTestCaseDetailVo';
import { ResultValueTestCaseVo } from './model/ResultValueTestCaseVo';
import { ResultValueTestItemVo } from './model/ResultValueTestItemVo';
import { ResultValueTestResultVo } from './model/ResultValueTestResultVo';
import { ResultValueTestVersionVo } from './model/ResultValueTestVersionVo';
import { ResultValueUpdateTestCaseListVo } from './model/ResultValueUpdateTestCaseListVo';
import { ResultValueVersionTestCasesChangeStatisticsVo } from './model/ResultValueVersionTestCasesChangeStatisticsVo';
import { Review } from './model/Review';
import { ReviewPageParam } from './model/ReviewPageParam';
import { RunTestCaseRequest } from './model/RunTestCaseRequest';
import { RunTestCaseRequestBody } from './model/RunTestCaseRequestBody';
import { RunTestCaseResponse } from './model/RunTestCaseResponse';
import { SaveTaskSettingRequest } from './model/SaveTaskSettingRequest';
import { SaveTaskSettingRequestBody } from './model/SaveTaskSettingRequestBody';
import { SaveTaskSettingResponse } from './model/SaveTaskSettingResponse';
import { SaveTemplateParam } from './model/SaveTemplateParam';
import { SaveTestReportCustomDetailRequest } from './model/SaveTestReportCustomDetailRequest';
import { SaveTestReportCustomDetailResponse } from './model/SaveTestReportCustomDetailResponse';
import { Scene } from './model/Scene';
import { ScenePageParam } from './model/ScenePageParam';
import { SearchRequest } from './model/SearchRequest';
import { ServiceRequestBody } from './model/ServiceRequestBody';
import { ServicesInfo } from './model/ServicesInfo';
import { SetTaskResultRequest } from './model/SetTaskResultRequest';
import { SetTaskResultResponse } from './model/SetTaskResultResponse';
import { ShowAllConfigValueByTypeAndKeyRequest } from './model/ShowAllConfigValueByTypeAndKeyRequest';
import { ShowAllConfigValueByTypeAndKeyResponse } from './model/ShowAllConfigValueByTypeAndKeyResponse';
import { ShowAllFeatureChildrenRequest } from './model/ShowAllFeatureChildrenRequest';
import { ShowAllFeatureChildrenResponse } from './model/ShowAllFeatureChildrenResponse';
import { ShowApiTestcaseHistoriesRequest } from './model/ShowApiTestcaseHistoriesRequest';
import { ShowApiTestcaseHistoriesResponse } from './model/ShowApiTestcaseHistoriesResponse';
import { ShowAssetRequest } from './model/ShowAssetRequest';
import { ShowAssetResponse } from './model/ShowAssetResponse';
import { ShowAssetTreeRequest } from './model/ShowAssetTreeRequest';
import { ShowAssetTreeResponse } from './model/ShowAssetTreeResponse';
import { ShowBackgroundInfoRequest } from './model/ShowBackgroundInfoRequest';
import { ShowBackgroundInfoResponse } from './model/ShowBackgroundInfoResponse';
import { ShowBranchRequest } from './model/ShowBranchRequest';
import { ShowBranchResponse } from './model/ShowBranchResponse';
import { ShowCaseResultRequest } from './model/ShowCaseResultRequest';
import { ShowCaseResultResponse } from './model/ShowCaseResultResponse';
import { ShowConcurrencyPackageUsingRequest } from './model/ShowConcurrencyPackageUsingRequest';
import { ShowConcurrencyPackageUsingResponse } from './model/ShowConcurrencyPackageUsingResponse';
import { ShowDefaultTemplateByPageRequest } from './model/ShowDefaultTemplateByPageRequest';
import { ShowDefaultTemplateByPageResponse } from './model/ShowDefaultTemplateByPageResponse';
import { ShowDisclaimerRecordRequest } from './model/ShowDisclaimerRecordRequest';
import { ShowDisclaimerRecordResponse } from './model/ShowDisclaimerRecordResponse';
import { ShowDomainInfoRequest } from './model/ShowDomainInfoRequest';
import { ShowDomainInfoResponse } from './model/ShowDomainInfoResponse';
import { ShowEchoTestPackageUsingRequest } from './model/ShowEchoTestPackageUsingRequest';
import { ShowEchoTestPackageUsingResponse } from './model/ShowEchoTestPackageUsingResponse';
import { ShowEtlDataRequest } from './model/ShowEtlDataRequest';
import { ShowEtlDataResponse } from './model/ShowEtlDataResponse';
import { ShowFactorByAssetIdRequest } from './model/ShowFactorByAssetIdRequest';
import { ShowFactorByAssetIdResponse } from './model/ShowFactorByAssetIdResponse';
import { ShowFactorByIdRequest } from './model/ShowFactorByIdRequest';
import { ShowFactorByIdResponse } from './model/ShowFactorByIdResponse';
import { ShowFeatureChildrenRequest } from './model/ShowFeatureChildrenRequest';
import { ShowFeatureChildrenResponse } from './model/ShowFeatureChildrenResponse';
import { ShowFreeDeclarationRequest } from './model/ShowFreeDeclarationRequest';
import { ShowFreeDeclarationResponse } from './model/ShowFreeDeclarationResponse';
import { ShowIfTaskNameRepeatRequest } from './model/ShowIfTaskNameRepeatRequest';
import { ShowIfTaskNameRepeatResponse } from './model/ShowIfTaskNameRepeatResponse';
import { ShowIfUserNameRepeatRequest } from './model/ShowIfUserNameRepeatRequest';
import { ShowIfUserNameRepeatResponse } from './model/ShowIfUserNameRepeatResponse';
import { ShowIssuesByPlanIdRequest } from './model/ShowIssuesByPlanIdRequest';
import { ShowIssuesByPlanIdResponse } from './model/ShowIssuesByPlanIdResponse';
import { ShowIteratorByDefectRequest } from './model/ShowIteratorByDefectRequest';
import { ShowIteratorByDefectResponse } from './model/ShowIteratorByDefectResponse';
import { ShowIteratorDetailRequest } from './model/ShowIteratorDetailRequest';
import { ShowIteratorDetailResponse } from './model/ShowIteratorDetailResponse';
import { ShowMindMapByIdRequest } from './model/ShowMindMapByIdRequest';
import { ShowMindMapByIdResponse } from './model/ShowMindMapByIdResponse';
import { ShowMindmapBackupByIdRequest } from './model/ShowMindmapBackupByIdRequest';
import { ShowMindmapBackupByIdResponse } from './model/ShowMindmapBackupByIdResponse';
import { ShowMindmapBackupByPageRequest } from './model/ShowMindmapBackupByPageRequest';
import { ShowMindmapBackupByPageResponse } from './model/ShowMindmapBackupByPageResponse';
import { ShowMindmapByPageRequest } from './model/ShowMindmapByPageRequest';
import { ShowMindmapByPageResponse } from './model/ShowMindmapByPageResponse';
import { ShowMindmapCreatorNameRequest } from './model/ShowMindmapCreatorNameRequest';
import { ShowMindmapCreatorNameResponse } from './model/ShowMindmapCreatorNameResponse';
import { ShowMindmapRecycleByIdRequest } from './model/ShowMindmapRecycleByIdRequest';
import { ShowMindmapRecycleByIdResponse } from './model/ShowMindmapRecycleByIdResponse';
import { ShowMindmapRecycleByPageRequest } from './model/ShowMindmapRecycleByPageRequest';
import { ShowMindmapRecycleByPageResponse } from './model/ShowMindmapRecycleByPageResponse';
import { ShowOperationalDataCurrentMonthUsingRequest } from './model/ShowOperationalDataCurrentMonthUsingRequest';
import { ShowOperationalDataCurrentMonthUsingResponse } from './model/ShowOperationalDataCurrentMonthUsingResponse';
import { ShowPlanJournalsRequest } from './model/ShowPlanJournalsRequest';
import { ShowPlanJournalsResponse } from './model/ShowPlanJournalsResponse';
import { ShowPlanListRequest } from './model/ShowPlanListRequest';
import { ShowPlanListResponse } from './model/ShowPlanListResponse';
import { ShowPlansRequest } from './model/ShowPlansRequest';
import { ShowPlansResponse } from './model/ShowPlansResponse';
import { ShowProgressRequest } from './model/ShowProgressRequest';
import { ShowProgressResponse } from './model/ShowProgressResponse';
import { ShowProjectDataDashboardRequest } from './model/ShowProjectDataDashboardRequest';
import { ShowProjectDataDashboardResponse } from './model/ShowProjectDataDashboardResponse';
import { ShowRegisterServiceRequest } from './model/ShowRegisterServiceRequest';
import { ShowRegisterServiceResponse } from './model/ShowRegisterServiceResponse';
import { ShowReportRequest } from './model/ShowReportRequest';
import { ShowReportResponse } from './model/ShowReportResponse';
import { ShowRequirementsOverviewRequest } from './model/ShowRequirementsOverviewRequest';
import { ShowRequirementsOverviewResponse } from './model/ShowRequirementsOverviewResponse';
import { ShowReviewByPageRequest } from './model/ShowReviewByPageRequest';
import { ShowReviewByPageResponse } from './model/ShowReviewByPageResponse';
import { ShowSceneByPageRequest } from './model/ShowSceneByPageRequest';
import { ShowSceneByPageResponse } from './model/ShowSceneByPageResponse';
import { ShowStatisticByIdRequest } from './model/ShowStatisticByIdRequest';
import { ShowStatisticByIdResponse } from './model/ShowStatisticByIdResponse';
import { ShowSystemConfigsRequest } from './model/ShowSystemConfigsRequest';
import { ShowSystemConfigsResponse } from './model/ShowSystemConfigsResponse';
import { ShowTemplateByIdRequest } from './model/ShowTemplateByIdRequest';
import { ShowTemplateByIdResponse } from './model/ShowTemplateByIdResponse';
import { ShowTemplateByPageRequest } from './model/ShowTemplateByPageRequest';
import { ShowTemplateByPageResponse } from './model/ShowTemplateByPageResponse';
import { ShowTestCaseAndDefectInfoRequest } from './model/ShowTestCaseAndDefectInfoRequest';
import { ShowTestCaseAndDefectInfoRequestBody } from './model/ShowTestCaseAndDefectInfoRequestBody';
import { ShowTestCaseAndDefectInfoResponse } from './model/ShowTestCaseAndDefectInfoResponse';
import { ShowTestCaseDetailRequest } from './model/ShowTestCaseDetailRequest';
import { ShowTestCaseDetailResponse } from './model/ShowTestCaseDetailResponse';
import { ShowTestCaseDetailV2Request } from './model/ShowTestCaseDetailV2Request';
import { ShowTestCaseDetailV2Response } from './model/ShowTestCaseDetailV2Response';
import { ShowTestCaseRequest } from './model/ShowTestCaseRequest';
import { ShowTestCaseResponse } from './model/ShowTestCaseResponse';
import { ShowTestCaseReviewsRequest } from './model/ShowTestCaseReviewsRequest';
import { ShowTestCaseReviewsResponse } from './model/ShowTestCaseReviewsResponse';
import { ShowTestCasesChangeStatisticsRequest } from './model/ShowTestCasesChangeStatisticsRequest';
import { ShowTestCasesChangeStatisticsResponse } from './model/ShowTestCasesChangeStatisticsResponse';
import { ShowTestcaseByIdRequest } from './model/ShowTestcaseByIdRequest';
import { ShowTestcaseByIdResponse } from './model/ShowTestcaseByIdResponse';
import { ShowTestcaseByPageRequest } from './model/ShowTestcaseByPageRequest';
import { ShowTestcaseByPageResponse } from './model/ShowTestcaseByPageResponse';
import { ShowTestpointByPageRequest } from './model/ShowTestpointByPageRequest';
import { ShowTestpointByPageResponse } from './model/ShowTestpointByPageResponse';
import { ShowUserAccessInfoRequest } from './model/ShowUserAccessInfoRequest';
import { ShowUserAccessInfoResponse } from './model/ShowUserAccessInfoResponse';
import { ShowUserExecuteTestCaseInfoRequest } from './model/ShowUserExecuteTestCaseInfoRequest';
import { ShowUserExecuteTestCaseInfoRequestBody } from './model/ShowUserExecuteTestCaseInfoRequestBody';
import { ShowUserExecuteTestCaseInfoResponse } from './model/ShowUserExecuteTestCaseInfoResponse';
import { SimpleIssueVo } from './model/SimpleIssueVo';
import { SimpleResourceInfo } from './model/SimpleResourceInfo';
import { StepImageVo } from './model/StepImageVo';
import { SubTaskCaseSuccessLineDetailVo } from './model/SubTaskCaseSuccessLineDetailVo';
import { SubTaskCaseSuccessLineVo } from './model/SubTaskCaseSuccessLineVo';
import { SubtaskcaseOverstockDto } from './model/SubtaskcaseOverstockDto';
import { SystemConfig } from './model/SystemConfig';
import { TaskAssignCaseDetailVo } from './model/TaskAssignCaseDetailVo';
import { TaskAssignCaseVo } from './model/TaskAssignCaseVo';
import { TaskCaseResponseTimeDetailVo } from './model/TaskCaseResponseTimeDetailVo';
import { TaskListVo } from './model/TaskListVo';
import { TaskResultDetailVo } from './model/TaskResultDetailVo';
import { TaskResultVo } from './model/TaskResultVo';
import { TaskVo } from './model/TaskVo';
import { TasksQueryInfo } from './model/TasksQueryInfo';
import { Template } from './model/Template';
import { TemplatePageParam } from './model/TemplatePageParam';
import { TemplateV2 } from './model/TemplateV2';
import { TestCase } from './model/TestCase';
import { TestCaseAttachmentInfo } from './model/TestCaseAttachmentInfo';
import { TestCaseCommentInfo } from './model/TestCaseCommentInfo';
import { TestCaseCommentVo } from './model/TestCaseCommentVo';
import { TestCaseDetailVo } from './model/TestCaseDetailVo';
import { TestCaseExecuteBean } from './model/TestCaseExecuteBean';
import { TestCaseInfo } from './model/TestCaseInfo';
import { TestCaseListVo } from './model/TestCaseListVo';
import { TestCasePageParam } from './model/TestCasePageParam';
import { TestCaseReviewVo } from './model/TestCaseReviewVo';
import { TestCaseStepInfo } from './model/TestCaseStepInfo';
import { TestCaseStepResultInfo } from './model/TestCaseStepResultInfo';
import { TestCaseStepVo } from './model/TestCaseStepVo';
import { TestCaseVo } from './model/TestCaseVo';
import { TestCasesQueryInfo } from './model/TestCasesQueryInfo';
import { TestItemVo } from './model/TestItemVo';
import { TestPlanDetail } from './model/TestPlanDetail';
import { TestPlanDetailCreator } from './model/TestPlanDetailCreator';
import { TestPlanDetailDesignStage } from './model/TestPlanDetailDesignStage';
import { TestPlanDetailExecuteStage } from './model/TestPlanDetailExecuteStage';
import { TestPlanDetailOwner } from './model/TestPlanDetailOwner';
import { TestPlanDetailReportStage } from './model/TestPlanDetailReportStage';
import { TestPlanIssueDetail } from './model/TestPlanIssueDetail';
import { TestPlanJournalDetail } from './model/TestPlanJournalDetail';
import { TestPlanJournalList } from './model/TestPlanJournalList';
import { TestPlanVo } from './model/TestPlanVo';
import { TestPoint } from './model/TestPoint';
import { TestPointPageParam } from './model/TestPointPageParam';
import { TestReportCustomDetailInfo } from './model/TestReportCustomDetailInfo';
import { TestReportCustomDetailVo } from './model/TestReportCustomDetailVo';
import { TestReportInfoRequestBody } from './model/TestReportInfoRequestBody';
import { TestReportVo } from './model/TestReportVo';
import { TestResultVo } from './model/TestResultVo';
import { TestVersionVo } from './model/TestVersionVo';
import { TestcasePlanQueryParam } from './model/TestcasePlanQueryParam';
import { TestcasePlanVo } from './model/TestcasePlanVo';
import { TestcaseResult } from './model/TestcaseResult';
import { TmssStep } from './model/TmssStep';
import { TmssTestcase } from './model/TmssTestcase';
import { UpdateAssetTreeParam } from './model/UpdateAssetTreeParam';
import { UpdateAssetTreeRequest } from './model/UpdateAssetTreeRequest';
import { UpdateAssetTreeResponse } from './model/UpdateAssetTreeResponse';
import { UpdateBasicAwByIdRequest } from './model/UpdateBasicAwByIdRequest';
import { UpdateBasicAwByIdResponse } from './model/UpdateBasicAwByIdResponse';
import { UpdateBasicAwReq } from './model/UpdateBasicAwReq';
import { UpdateIteratorRequest } from './model/UpdateIteratorRequest';
import { UpdateIteratorResponse } from './model/UpdateIteratorResponse';
import { UpdateMindmapNameRequest } from './model/UpdateMindmapNameRequest';
import { UpdateMindmapNameResponse } from './model/UpdateMindmapNameResponse';
import { UpdateServiceRequest } from './model/UpdateServiceRequest';
import { UpdateServiceResponse } from './model/UpdateServiceResponse';
import { UpdateTestCaseAndScriptRequest } from './model/UpdateTestCaseAndScriptRequest';
import { UpdateTestCaseAndScriptResponse } from './model/UpdateTestCaseAndScriptResponse';
import { UpdateTestCaseCommentRequest } from './model/UpdateTestCaseCommentRequest';
import { UpdateTestCaseCommentResponse } from './model/UpdateTestCaseCommentResponse';
import { UpdateTestCaseListInfo } from './model/UpdateTestCaseListInfo';
import { UpdateTestCaseListVo } from './model/UpdateTestCaseListVo';
import { UpdateTestCaseRequest } from './model/UpdateTestCaseRequest';
import { UpdateTestCaseRequestBody } from './model/UpdateTestCaseRequestBody';
import { UpdateTestCaseResponse } from './model/UpdateTestCaseResponse';
import { UpdateTestCaseResultBean } from './model/UpdateTestCaseResultBean';
import { UpdateTestCaseResultRequest } from './model/UpdateTestCaseResultRequest';
import { UpdateTestCaseResultRequestBody } from './model/UpdateTestCaseResultRequestBody';
import { UpdateTestCaseResultResponse } from './model/UpdateTestCaseResultResponse';
import { UpdateTestReportCustomDetailByUriRequest } from './model/UpdateTestReportCustomDetailByUriRequest';
import { UpdateTestReportCustomDetailByUriResponse } from './model/UpdateTestReportCustomDetailByUriResponse';
import { UpdateUserDnsMappingRequest } from './model/UpdateUserDnsMappingRequest';
import { UpdateUserDnsMappingResponse } from './model/UpdateUserDnsMappingResponse';
import { UpdateVersionTestCaseRequest } from './model/UpdateVersionTestCaseRequest';
import { UpdateVersionTestCaseResponse } from './model/UpdateVersionTestCaseResponse';
import { UploadCacheFileRequest } from './model/UploadCacheFileRequest';
import { UploadCacheFileRequestBody } from './model/UploadCacheFileRequestBody';
import { UploadCacheFileResponse } from './model/UploadCacheFileResponse';
import { UploadFile } from './model/UploadFile';
import { UploadFileRes } from './model/UploadFileRes';
import { UploadStepImgRequest } from './model/UploadStepImgRequest';
import { UploadStepImgRequestBody } from './model/UploadStepImgRequestBody';
import { UploadStepImgResponse } from './model/UploadStepImgResponse';
import { UsageInfos } from './model/UsageInfos';
import { ValidateRule } from './model/ValidateRule';
import { VariableRes } from './model/VariableRes';
import { VersionTestCasesChangeStatisticsVo } from './model/VersionTestCasesChangeStatisticsVo';
import { WorkItemInfo } from './model/WorkItemInfo';
import { WorkItemVo } from './model/WorkItemVo';

export class CloudtestClient {
    public static newBuilder(): ClientBuilder<CloudtestClient> {
            let client = new ClientBuilder<CloudtestClient>(newClient);
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
     * 设置用例结果
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 设置用例结果
     * @param {string} projectId 项目ID，固定长度32位字符（字母和数字）。
     * @param {string} versionUri 版本ID
     * @param {string} caseUri 用例uri
     * @param {AddTestCaseResultInfo} param 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public addCaseResultFour(addCaseResultFourRequest?: AddCaseResultFourRequest): Promise<AddCaseResultFourResponse> {
        const options = ParamCreater().addCaseResultFour(addCaseResultFourRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 新增用例评论
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 新增用例评论
     * @param {string} projectId 项目ID，固定长度32位字符（字母和数字）。
     * @param {string} testcaseId 用例uri
     * @param {TestCaseCommentInfo} testCaseCommentInfo 新增用例评论请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public addTestCaseComment(addTestCaseCommentRequest?: AddTestCaseCommentRequest): Promise<AddTestCaseCommentResponse> {
        const options = ParamCreater().addTestCaseComment(addTestCaseCommentRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 初始化用例执行记录
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 初始化用例执行记录
     * @param {string} projectId 项目ID，固定长度32位字符（字母和数字）。
     * @param {string} versionUri 版本ID
     * @param {string} caseUri 用例uri
     * @param {AddTestCaseResultLogInfo} param 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public addTestCaseResultLog(addTestCaseResultLogRequest?: AddTestCaseResultLogRequest): Promise<AddTestCaseResultLogResponse> {
        const options = ParamCreater().addTestCaseResultLog(addTestCaseResultLogRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 添加需求/缺陷和多个用例关联关系
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 添加需求/缺陷和多个用例关联关系
     * @param {string} workitemId 需求/缺陷id
     * @param {AddRelationsInfo} queryTaskTestCasesInfo 添加需求/缺陷和多个用例关联关系请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchAddRelationsByOneCase(batchAddRelationsByOneCaseRequest?: BatchAddRelationsByOneCaseRequest): Promise<BatchAddRelationsByOneCaseResponse> {
        const options = ParamCreater().batchAddRelationsByOneCase(batchAddRelationsByOneCaseRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 向迭代中添加资源
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 向迭代中添加资源
     * @param {string} iteratorId 迭代uri
     * @param {AddResourceInfo} addResourceInfo 向迭代中添加资源请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchAddResourcesForIterator(batchAddResourcesForIteratorRequest?: BatchAddResourcesForIteratorRequest): Promise<BatchAddResourcesForIteratorResponse> {
        const options = ParamCreater().batchAddResourcesForIterator(batchAddResourcesForIteratorRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量删除自定义测试服务类型用例
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量删除自定义测试服务类型用例
     * @param {string} projectId 项目唯一标识，固定长度32位字符
     * @param {BatchDeleteTestCaseRequestBody} batchDeleteTestCaseRequestBody 该接口的入参bean名称
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchDeleteTestCase(batchDeleteTestCaseRequest?: BatchDeleteTestCaseRequest): Promise<BatchDeleteTestCaseResponse> {
        const options = ParamCreater().batchDeleteTestCase(batchDeleteTestCaseRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量删除用例
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量删除用例
     * @param {DeleteTestCaseInfo} deleteTestCaseInfo 批量删除用例请求体
     * @param {boolean} [isAsync] 是否异步
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchDeleteTestCases(batchDeleteTestCasesRequest?: BatchDeleteTestCasesRequest): Promise<BatchDeleteTestCasesResponse> {
        const options = ParamCreater().batchDeleteTestCases(batchDeleteTestCasesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据测试报告uri列表，删除测试报告
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 根据测试报告uri列表，删除测试报告
     * @param {string} projectId 项目ID，固定长度32位字符（字母和数字）。
     * @param {Array<string>} deleteTestReportBatchUris 质量报告看板统计请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchDeleteTestReport(batchDeleteTestReportRequest?: BatchDeleteTestReportRequest): Promise<BatchDeleteTestReportResponse> {
        const options = ParamCreater().batchDeleteTestReport(batchDeleteTestReportRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 从迭代中批量移除用例
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 从迭代中批量移除用例
     * @param {string} iteratorId 迭代uri
     * @param {CaseRemoveInfo} caseRemoveInfo 从迭代中批量移除用例请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchRemoveTestCasesFromIterator(batchRemoveTestCasesFromIteratorRequest?: BatchRemoveTestCasesFromIteratorRequest): Promise<BatchRemoveTestCasesFromIteratorResponse> {
        const options = ParamCreater().batchRemoveTestCasesFromIterator(batchRemoveTestCasesFromIteratorRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 在不同分支或者迭代下批量修改用例
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 在不同分支或者迭代下批量修改用例
     * @param {Array<TestCaseInfo>} testCaseInfo 批量更新用例请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchUpdateTestCasesInDiffVersion(batchUpdateTestCasesInDiffVersionRequest?: BatchUpdateTestCasesInDiffVersionRequest): Promise<BatchUpdateTestCasesInDiffVersionResponse> {
        const options = ParamCreater().batchUpdateTestCasesInDiffVersion(batchUpdateTestCasesInDiffVersionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量更新用例属性
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量更新用例属性
     * @param {string} projectId 项目ID，固定长度32位字符（字母和数字）。
     * @param {UpdateTestCaseListInfo} updateTestCaseListInfo 批量更新用例属性请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchUpdateVersionTestCases(batchUpdateVersionTestCasesRequest?: BatchUpdateVersionTestCasesRequest): Promise<BatchUpdateVersionTestCasesResponse> {
        const options = ParamCreater().batchUpdateVersionTestCases(batchUpdateVersionTestCasesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 检查项目权限
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 检查项目权限
     * @param {string} projectId 项目ID，固定长度32位字符（字母和数字）。
     * @param {string} id 脑图ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public checkPermission(checkPermissionRequest?: CheckPermissionRequest): Promise<CheckPermissionResponse> {
        const options = ParamCreater().checkPermission(checkPermissionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 新增迭代
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 新增迭代
     * @param {string} branchUri 分支URI
     * @param {IteratorVersionInfo} iteratorVersionInfo 新增迭代请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createIterator(createIteratorRequest?: CreateIteratorRequest): Promise<CreateIteratorResponse> {
        const options = ParamCreater().createIterator(createIteratorRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 项目下创建计划
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 项目下创建计划
     * @param {string} projectId 项目唯一标识，固定长度32位字符
     * @param {CreatePlanRequestBody} createPlanRequestBody 该接口的入参bean名称
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createPlan(createPlanRequest?: CreatePlanRequest): Promise<CreatePlanResponse> {
        const options = ParamCreater().createPlan(createPlanRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 新增分支
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 新增分支
     * @param {BranchVersionInfo} branchVersionInfo 新增分支请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createProjectBranch(createProjectBranchRequest?: CreateProjectBranchRequest): Promise<CreateProjectBranchResponse> {
        const options = ParamCreater().createProjectBranch(createProjectBranchRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 添加一个用例和多个需求/缺陷关联关系
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 添加一个用例和多个需求/缺陷关联关系
     * @param {string} caseId 用例uri
     * @param {AddRelationsInfo} queryTaskTestCasesInfo 添加一个用例和多个需求/缺陷关联关系请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createRelationsByOneCase(createRelationsByOneCaseRequest?: CreateRelationsByOneCaseRequest): Promise<CreateRelationsByOneCaseResponse> {
        const options = ParamCreater().createRelationsByOneCase(createRelationsByOneCaseRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 保存单个自定义报表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 保存单个自定义报表
     * @param {string} projectId 项目ID，固定长度32位字符（字母和数字）。
     * @param {string} versionId 版本uri
     * @param {OprReportInfo} oprReportInfo 保存单个自定义报表请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createReport(createReportRequest?: CreateReportRequest): Promise<CreateReportResponse> {
        const options = ParamCreater().createReport(createReportRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 生成资源URI
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 生成资源URI
     * @param {string} projectId 项目ID，固定长度32位字符（字母和数字）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createResourceUri(createResourceUriRequest?: CreateResourceUriRequest): Promise<CreateResourceUriResponse> {
        const options = ParamCreater().createResourceUri(createResourceUriRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 通过接口CreateService注册成为自定义服务。 注册完成后界面将会出现此自定义测试类型。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 新测试类型服务注册
     * @param {ServiceRequestBody} createServiceRequestBody 该接口的入参bean名称
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createService(createServiceRequest?: CreateServiceRequest): Promise<CreateServiceResponse> {
        const options = ParamCreater().createService(createServiceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 初始化测试任务执行记录
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 初始化测试任务执行记录
     * @param {string} projectId 项目ID，固定长度32位字符（字母和数字）。
     * @param {string} taskUri 任务uri
     * @param {InitExecuteTaskInfo} param 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createTaskDefaultResult(createTaskDefaultResultRequest?: CreateTaskDefaultResultRequest): Promise<CreateTaskDefaultResultResponse> {
        const options = ParamCreater().createTaskDefaultResult(createTaskDefaultResultRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建自定义测试服务类型用例
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建自定义测试服务类型用例
     * @param {string} projectId 项目唯一标识，固定长度32位字符
     * @param {CreateTestCaseRequestBody} createTestCaseRequestBody 该接口的入参bean名称
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createTestCase(createTestCaseRequest?: CreateTestCaseRequest): Promise<CreateTestCaseResponse> {
        const options = ParamCreater().createTestCase(createTestCaseRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 计划中批量添加测试用例
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 计划中批量添加测试用例
     * @param {string} projectId 项目唯一标识，固定长度32位字符
     * @param {string} planId 计划唯一标识，长度11-34位字符
     * @param {CreateTestCaseInPlanRequestBody} createTestCaseInPlanRequestBody 该接口的入参bean名称
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createTestCaseInPlan(createTestCaseInPlanRequest?: CreateTestCaseInPlanRequest): Promise<CreateTestCaseInPlanResponse> {
        const options = ParamCreater().createTestCaseInPlan(createTestCaseInPlanRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 新增用户自定义URL关键字
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 新增用户自定义URL关键字
     * @param {string} projectId 项目ID，固定长度32位字符（字母和数字）。
     * @param {CreateBasicAwReq} request 用户自定义URL关键字信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createUserDefinedUrlKeyWord(createUserDefinedUrlKeyWordRequest?: CreateUserDefinedUrlKeyWordRequest): Promise<CreateUserDefinedUrlKeyWordResponse> {
        const options = ParamCreater().createUserDefinedUrlKeyWord(createUserDefinedUrlKeyWordRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 在分支或者测试计划下创建用例
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 在分支或者测试计划下创建用例
     * @param {string} versionId 分支或者迭代uri
     * @param {TestCaseInfo} testCaseInfo 在分支或者测试计划下创建用例请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createVersionTestCase(createVersionTestCaseRequest?: CreateVersionTestCaseRequest): Promise<CreateVersionTestCaseResponse> {
        const options = ParamCreater().createVersionTestCase(createVersionTestCaseRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 融合版本删除单个basicAw
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 融合版本删除单个basicAw
     * @param {string} projectId 项目ID，固定长度32位字符（字母和数字）。
     * @param {string} awId AW ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteBasicAwById(deleteBasicAwByIdRequest?: DeleteBasicAwByIdRequest): Promise<DeleteBasicAwByIdResponse> {
        const options = ParamCreater().deleteBasicAwById(deleteBasicAwByIdRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除附件
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除附件
     * @param {string} projectId 项目ID，固定长度32位字符（字母和数字）。
     * @param {string} [filePath] 删除附件路径
     * @param {string} [uri] 附件Uri
     * @param {string} [parentUri] 附件挂载资源Uri
     * @param {boolean} [bakUp] 是否备份
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteCacheFile(deleteCacheFileRequest?: DeleteCacheFileRequest): Promise<DeleteCacheFileResponse> {
        const options = ParamCreater().deleteCacheFile(deleteCacheFileRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除因子
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除因子
     * @param {string} projectId 项目ID，固定长度32位字符（字母和数字）。
     * @param {string} id 因子ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteFacotrById(deleteFacotrByIdRequest?: DeleteFacotrByIdRequest): Promise<DeleteFacotrByIdResponse> {
        const options = ParamCreater().deleteFacotrById(deleteFacotrByIdRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除一个用例和多个需求/缺陷关联关系
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除一个用例和多个需求/缺陷关联关系
     * @param {string} caseId 用例id
     * @param {DeleteRelationsByOneCaseInfo} queryTaskTestCasesInfo 删除一个用例和多个需求/缺陷关联关请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteRelationsByOneCase(deleteRelationsByOneCaseRequest?: DeleteRelationsByOneCaseRequest): Promise<DeleteRelationsByOneCaseResponse> {
        const options = ParamCreater().deleteRelationsByOneCase(deleteRelationsByOneCaseRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除已注册服务
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除已注册服务
     * @param {number} serviceId 注册服务唯一标识，该值由注册接口返回
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteService(deleteServiceRequest?: DeleteServiceRequest): Promise<DeleteServiceResponse> {
        const options = ParamCreater().deleteService(deleteServiceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除用例评论
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除用例评论
     * @param {string} projectId 项目ID，固定长度32位字符（字母和数字）。
     * @param {string} testcaseId 用例uri
     * @param {string} commentId 评论uri
     * @param {string} [versionUri] 分支或者测试计划uri
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteTestCaseComment(deleteTestCaseCommentRequest?: DeleteTestCaseCommentRequest): Promise<DeleteTestCaseCommentResponse> {
        const options = ParamCreater().deleteTestCaseComment(deleteTestCaseCommentRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除测试报告自定义模块
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除测试报告自定义模块
     * @param {string} projectId 项目ID，固定长度32位字符（字母和数字）。
     * @param {string} versionUri 计划uri
     * @param {string} reportUri 测试报告Uri
     * @param {string} customInfoUri 测试报告自定义模块Uri
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteTestReportCustomDetailByUri(deleteTestReportCustomDetailByUriRequest?: DeleteTestReportCustomDetailByUriRequest): Promise<DeleteTestReportCustomDetailByUriResponse> {
        const options = ParamCreater().deleteTestReportCustomDetailByUri(deleteTestReportCustomDetailByUriRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询告警统计数据
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询告警统计数据
     * @param {string} serviceId 服务id
     * @param {AlarmStatisticsQuery} listAlarmStatisticsUsingRequestBody 查询告警统计数据的请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAlarmStatisticsUsing(listAlarmStatisticsUsingRequest?: ListAlarmStatisticsUsingRequest): Promise<ListAlarmStatisticsUsingResponse> {
        const options = ParamCreater().listAlarmStatisticsUsing(listAlarmStatisticsUsingRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询告警组列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询告警组列表
     * @param {string} serviceId 服务id
     * @param {ListAlertGroupsByConditionRequestBody} listAlertGroupsByConditionRequestBody 查询告警组列表的请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAlertGroupsByCondition(listAlertGroupsByConditionRequest?: ListAlertGroupsByConditionRequest): Promise<ListAlertGroupsByConditionResponse> {
        const options = ParamCreater().listAlertGroupsByCondition(listAlertGroupsByConditionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询告警模板
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询告警模板
     * @param {string} serviceId 服务id
     * @param {string} [name] 模板名称
     * @param {number} [pageNum] 当前页数
     * @param {number} [pageSize] 每页数量
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAlertTemplates(listAlertTemplatesRequest?: ListAlertTemplatesRequest): Promise<ListAlertTemplatesResponse> {
        const options = ParamCreater().listAlertTemplates(listAlertTemplatesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取分支列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取分支列表
     * @param {string} projectUuid 项目ID（云龙场景，传入微服务ID）
     * @param {string} [sortField] 排序字段
     * @param {string} [sortType] 排序方式
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAllBranches(listAllBranchesRequest?: ListAllBranchesRequest): Promise<ListAllBranchesResponse> {
        const options = ParamCreater().listAllBranches(listAllBranchesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询任务告警信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询任务告警信息
     * @param {string} serviceId 服务id
     * @param {ListAllConfigItemByTypeRequestBody} listAllConfigItemByTypeRequestBody 查询任务告警信息的请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAllConfigItemByType(listAllConfigItemByTypeRequest?: ListAllConfigItemByTypeRequest): Promise<ListAllConfigItemByTypeResponse> {
        const options = ParamCreater().listAllConfigItemByType(listAllConfigItemByTypeRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询项目下所有迭代计划
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询项目下所有迭代计划
     * @param {string} projectId 项目ID，固定长度32位字符（字母和数字）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAllIterators(listAllIteratorsRequest?: ListAllIteratorsRequest): Promise<ListAllIteratorsResponse> {
        const options = ParamCreater().listAllIterators(listAllIteratorsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询用例列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询用例列表
     * @param {string} projectId 项目ID，固定长度32位字符（字母和数字）。
     * @param {TestCasesQueryInfo} testCasesQueryInfo 查询用例列表请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAllTestCases(listAllTestCasesRequest?: ListAllTestCasesRequest): Promise<ListAllTestCasesResponse> {
        const options = ParamCreater().listAllTestCases(listAllTestCasesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询附件列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询附件列表
     * @param {string} projectId 项目ID，固定长度32位字符（字母和数字）。
     * @param {string} resourceUri 资源Uri
     * @param {string} resourceType 资源类型
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAttachments(listAttachmentsRequest?: ListAttachmentsRequest): Promise<ListAttachmentsResponse> {
        const options = ParamCreater().listAttachments(listAttachmentsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取当前局点功能是否开启
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取当前局点功能是否开启
     * @param {string} projectId 项目ID，固定长度32位字符（字母和数字）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAvailableConfig(listAvailableConfigRequest?: ListAvailableConfigRequest): Promise<ListAvailableConfigResponse> {
        const options = ParamCreater().listAvailableConfig(listAvailableConfigRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据id获取单个basicAW信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 根据id获取单个basicAW信息
     * @param {string} projectId 项目ID，固定长度32位字符（字母和数字）。
     * @param {string} awId AW ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listBasicAw(listBasicAwRequest?: ListBasicAwRequest): Promise<ListBasicAwResponse> {
        const options = ParamCreater().listBasicAw(listBasicAwRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 分页获取工程BasicAW列表（含目录）
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 分页获取工程BasicAW详细信息列表（含目录）
     * @param {string} projectId 项目ID，固定长度32位字符（字母和数字）。
     * @param {string} pageNo 当前页数
     * @param {string} pageSize 每页多少记录
     * @param {SearchRequest} searchRequest searchRequest
     * @param {string} [parentId] 父目录ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listBasicAwInfoListSupportsSearch(listBasicAwInfoListSupportsSearchRequest?: ListBasicAwInfoListSupportsSearchRequest): Promise<ListBasicAwInfoListSupportsSearchResponse> {
        const options = ParamCreater().listBasicAwInfoListSupportsSearch(listBasicAwInfoListSupportsSearchRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取分支列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取分支列表
     * @param {string} projectId 项目ID，固定长度32位字符（字母和数字）。
     * @param {number} offset 起始偏移量，表示从此偏移量开始查询， offset大于等于0，小于等于20000
     * @param {number} limit 每页显示的条目数量，最大支持200条
     * @param {'name' | 'creationDate'} [sortField] 排序字段
     * @param {'ASC' | 'DESC'} [sortType] 排序方式
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listBranches(listBranchesRequest?: ListBranchesRequest): Promise<ListBranchesResponse> {
        const options = ParamCreater().listBranches(listBranchesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量获取用例状态
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量获取用例状态
     * @param {string} testServiceId projectUUId
     * @param {string} param 创建任务请求参数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listCasesStatus(listCasesStatusRequest?: ListCasesStatusRequest): Promise<ListCasesStatusResponse> {
        const options = ParamCreater().listCasesStatus(listCasesStatusRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询当前租户可见的第三方服务列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询当前租户可见的第三方服务列表
     * @param {string} projectId 项目ID，固定长度32位字符（字母和数字）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listDomainVisibleServices(listDomainVisibleServicesRequest?: ListDomainVisibleServicesRequest): Promise<ListDomainVisibleServicesResponse> {
        const options = ParamCreater().listDomainVisibleServices(listDomainVisibleServicesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询需求树
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询需求树
     * @param {string} projectId 项目ID，固定长度32位字符（字母和数字）。
     * @param {string} versionId 版本id
     * @param {QueryIssueTreeInfo} queryIssueTreeInfo 查询需求树请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listIssueTree(listIssueTreeRequest?: ListIssueTreeRequest): Promise<ListIssueTreeResponse> {
        const options = ParamCreater().listIssueTree(listIssueTreeRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询迭代关联的需求列表或树
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询迭代关联的需求列表或树
     * @param {string} projectId 项目ID，固定长度32位字符（字母和数字）。
     * @param {string} iteratorId 迭代uri
     * @param {IssueTreeInfo} issueTreeInfo 查询迭代关联的需求列表或树请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listIteratorIssueTree(listIteratorIssueTreeRequest?: ListIteratorIssueTreeRequest): Promise<ListIteratorIssueTreeResponse> {
        const options = ParamCreater().listIteratorIssueTree(listIteratorIssueTreeRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询迭代计划列表，包含统计信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询迭代计划列表，包含统计信息
     * @param {IteratorVersionsQueryInfo} iteratorVersionsQueryInfo 查询迭代计划列表，包含统计信息请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listIterators(listIteratorsRequest?: ListIteratorsRequest): Promise<ListIteratorsResponse> {
        const options = ParamCreater().listIterators(listIteratorsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询迭代计划列表，包含统计信息，对版本强校验
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询迭代计划列表，包含统计信息，对版本强校验
     * @param {IteratorVersionsQueryInfo} iteratorVersionsQueryInfo 查询迭代计划列表，包含统计信息请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listIteratorsInfo(listIteratorsInfoRequest?: ListIteratorsInfoRequest): Promise<ListIteratorsInfoResponse> {
        const options = ParamCreater().listIteratorsInfo(listIteratorsInfoRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询仪表盘折线图数据
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询仪表盘折线图数据
     * @param {string} serviceId 服务id
     * @param {DashboardDataQuery} listLinesUsingRequestBody 查询仪表盘折线图数据的请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listLinesUsing(listLinesUsingRequest?: ListLinesUsingRequest): Promise<ListLinesUsingResponse> {
        const options = ParamCreater().listLinesUsing(listLinesUsingRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 成功返回MsgInfo的详细信息列表，返回值为Model的List
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 仪表盘根据测试服务ID获取MsgInfo详细信息
     * @param {string} serviceId 服务id
     * @param {MsgInfoQuery} listMsgInfosUsingPOSTRequestBody 仪表盘获取MsgInfo信息的请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listMsgInfosUsing(listMsgInfosUsingRequest?: ListMsgInfosUsingRequest): Promise<ListMsgInfosUsingResponse> {
        const options = ParamCreater().listMsgInfosUsing(listMsgInfosUsingRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取责任人是自己的测试用例
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取责任人是自己的测试用例
     * @param {number} pageNo 当前页数
     * @param {number} pageSize 每页条数
     * @param {string} [sortField] 排序字段
     * @param {string} [sortType] 排序方式
     * @param {string} [keyword] 关键字查询，用例名或编号
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listOwnTestCases(listOwnTestCasesRequest?: ListOwnTestCasesRequest): Promise<ListOwnTestCasesResponse> {
        const options = ParamCreater().listOwnTestCases(listOwnTestCasesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询项目字段配置
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询项目字段配置
     * @param {string} projectId 项目ID，固定长度32位字符（字母和数字）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listProjectFieldConfigs(listProjectFieldConfigsRequest?: ListProjectFieldConfigsRequest): Promise<ListProjectFieldConfigsResponse> {
        const options = ParamCreater().listProjectFieldConfigs(listProjectFieldConfigsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取项目测试用例自定义字段列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取项目测试用例自定义字段列表
     * @param {string} projectId 项目ID，固定长度32位字符（字母和数字）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listProjectTestCaseFields(listProjectTestCaseFieldsRequest?: ListProjectTestCaseFieldsRequest): Promise<ListProjectTestCaseFieldsResponse> {
        const options = ParamCreater().listProjectTestCaseFields(listProjectTestCaseFieldsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取工程关联的公共aw信息和公共aw所属公共aw库信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取工程关联的公共aw信息和公共aw所属公共aw库信息
     * @param {string} projectId 项目ID，固定长度32位字符（字母和数字）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listPublicLibAndAws(listPublicLibAndAwsRequest?: ListPublicLibAndAwsRequest): Promise<ListPublicLibAndAwsResponse> {
        const options = ParamCreater().listPublicLibAndAws(listPublicLibAndAwsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 页面报表展示
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 页面报表展示
     * @param {string} projectId 项目ID，固定长度32位字符（字母和数字）。
     * @param {number} pageSize 每页显示的条目数量,最大支持200条
     * @param {number} offset 页数，page_no大于等于1
     * @param {string} versionId 版本id
     * @param {number} type 报表类型 1：首页用例库， 2：质量报告
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listReports(listReportsRequest?: ListReportsRequest): Promise<ListReportsResponse> {
        const options = ParamCreater().listReports(listReportsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取资源池列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取资源池列表
     * @param {string} projectId 项目ID，固定长度32位字符（字母和数字）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listResourcePools(listResourcePoolsRequest?: ListResourcePoolsRequest): Promise<ListResourcePoolsResponse> {
        const options = ParamCreater().listResourcePools(listResourcePoolsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询仪表盘散点图数据
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询仪表盘散点图数据
     * @param {string} serviceId 服务id
     * @param {DashboardDataQuery} listScattersUsingRequestBody 查询仪表盘散点图数据的请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listScattersUsing(listScattersUsingRequest?: ListScattersUsingRequest): Promise<ListScattersUsingResponse> {
        const options = ParamCreater().listScattersUsing(listScattersUsingRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 成功返回子任务用例数据积压信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询subTestCase阻塞任务数据
     * @param {string} serviceId 服务id
     * @param {number} startTime 数据开始时间
     * @param {number} endTime 数据结束时间
     * @param {string} label 执行机标签
     * @param {string} [executorType] 执行机类型
     * @param {string} [locationId] 执行机所属区域id
     * @param {number} [pageNum] 分页当前页码
     * @param {number} [pageSize] 分页大小(分页参数只要有一个为空即不做分页)
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listSubTaskCaseOverstockUsing(listSubTaskCaseOverstockUsingRequest?: ListSubTaskCaseOverstockUsingRequest): Promise<ListSubTaskCaseOverstockUsingResponse> {
        const options = ParamCreater().listSubTaskCaseOverstockUsing(listSubTaskCaseOverstockUsingRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取测试套关联用例详情
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取测试套关联用例详情
     * @param {string} projectId 项目ID，固定长度32位字符（字母和数字）。
     * @param {string} taskId 任务uri
     * @param {QueryTaskAssignCasesInfo} queryTaskAssignCasesInfo 获取测试套关联用例详情请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listTaskAssignCases(listTaskAssignCasesRequest?: ListTaskAssignCasesRequest): Promise<ListTaskAssignCasesResponse> {
        const options = ParamCreater().listTaskAssignCases(listTaskAssignCasesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询单次测试套执行的详细结果
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询单次测试套执行的详细结果
     * @param {string} projectUuid 项目id
     * @param {string} taskUri 任务URI
     * @param {string} resultUri 测试任务结果uri
     * @param {string} pageNo 当前页数
     * @param {string} pageSize 每页多少记录
     * @param {string} [result] 结果过滤条件
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listTaskResultsDetail(listTaskResultsDetailRequest?: ListTaskResultsDetailRequest): Promise<ListTaskResultsDetailResponse> {
        const options = ParamCreater().listTaskResultsDetail(listTaskResultsDetailRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询用例关联的测试任务列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询用例关联的测试任务列表
     * @param {string} projectId 项目ID，固定长度32位字符（字母和数字）。
     * @param {QueryTaskTestCasesInfo} queryTaskTestCasesInfo 查询用例关联的测试任务列表请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listTaskTestCases(listTaskTestCasesRequest?: ListTaskTestCasesRequest): Promise<ListTaskTestCasesResponse> {
        const options = ParamCreater().listTaskTestCases(listTaskTestCasesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询测试任务列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询测试任务列表
     * @param {string} projectId 项目ID，固定长度32位字符（字母和数字）。
     * @param {string} versionId 版本URI
     * @param {TasksQueryInfo} tasksQueryInfo 查询测试任务列表请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listTasks(listTasksRequest?: ListTasksRequest): Promise<ListTasksResponse> {
        const options = ParamCreater().listTasks(listTasksRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询用例评论
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询用例评论
     * @param {string} projectId 项目ID，固定长度32位字符（字母和数字）。
     * @param {string} testcaseId 用例uri
     * @param {number} pageNo 页数
     * @param {number} pageSize 页数大小
     * @param {string} [versionUri] 分支或者测试计划uri
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listTestCaseComments(listTestCaseCommentsRequest?: ListTestCaseCommentsRequest): Promise<ListTestCaseCommentsResponse> {
        const options = ParamCreater().listTestCaseComments(listTestCaseCommentsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询用例修改历史记录
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询用例修改历史记录
     * @param {string} projectId 项目ID，固定长度32位字符（字母和数字）。
     * @param {string} testcaseId 用例ID，长度11-34位字符（字母和数字）。
     * @param {ListTestCaseHistoriesRequestBody} listTestCaseHistoriesRequestBody 查询用例修改历史记录请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listTestCaseHistories(listTestCaseHistoriesRequest?: ListTestCaseHistoriesRequest): Promise<ListTestCaseHistoriesResponse> {
        const options = ParamCreater().listTestCaseHistories(listTestCaseHistoriesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取用例脚本详细信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取用例脚本详细信息
     * @param {string} projectId 项目ID，固定长度32位字符（字母和数字）。
     * @param {string} tmssCaseUri TMSS用例uri
     * @param {string} [taskId] 执行任务id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listTestCaseScriptDetail(listTestCaseScriptDetailRequest?: ListTestCaseScriptDetailRequest): Promise<ListTestCaseScriptDetailResponse> {
        const options = ParamCreater().listTestCaseScriptDetail(listTestCaseScriptDetailRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询用例列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询用例列表
     * @param {string} projectId 项目ID，固定长度32位字符（字母和数字）。
     * @param {ListTestCasesRequestBody} listTestCasesRequestBody 查询用例列表请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listTestCases(listTestCasesRequest?: ListTestCasesRequest): Promise<ListTestCasesResponse> {
        const options = ParamCreater().listTestCases(listTestCasesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询需求下的用例列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询需求下的用例列表
     * @param {string} projectId 项目ID，固定长度32位字符（字母和数字）。
     * @param {string} issueId 需求id
     * @param {QueryTestCasesByIssueInfo} queryTestCasesByIssueInfo 查询需求下的用例列表请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listTestCasesByIssue(listTestCasesByIssueRequest?: ListTestCasesByIssueRequest): Promise<ListTestCasesByIssueResponse> {
        const options = ParamCreater().listTestCasesByIssue(listTestCasesByIssueRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据查询条件获取测试报告列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 根据查询条件获取测试报告列表
     * @param {string} projectId 项目ID，固定长度32位字符（字母和数字）。
     * @param {number} pageSize 每页显示的条目数量,最大支持200条
     * @param {string} [pageNo] 当前页数
     * @param {string} [keyWord] 名称关键词
     * @param {boolean} [own] 是否是我的测试报告
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listTestReportsByCondition(listTestReportsByConditionRequest?: ListTestReportsByConditionRequest): Promise<ListTestReportsByConditionResponse> {
        const options = ParamCreater().listTestReportsByCondition(listTestReportsByConditionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取测试类型列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取测试类型列表
     * @param {string} projectId 项目ID，固定长度32位字符（字母和数字）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listTestTypes(listTestTypesRequest?: ListTestTypesRequest): Promise<ListTestTypesResponse> {
        const options = ParamCreater().listTestTypes(listTestTypesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询项目下关联了需求的用例列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询项目下关联了需求的用例列表
     * @param {string} projectId 项目唯一标识，固定长度32位字符
     * @param {QueryProjectIssuesRelationTestCasesInfo} queryProjectIssuesRelationTestCasesInfo 查询项目下关联了需求的用例列表请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listTestcasesByProjectIssuesRelation(listTestcasesByProjectIssuesRelationRequest?: ListTestcasesByProjectIssuesRelationRequest): Promise<ListTestcasesByProjectIssuesRelationResponse> {
        const options = ParamCreater().listTestcasesByProjectIssuesRelation(listTestcasesByProjectIssuesRelationRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取租户订单已用资源信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取租户订单已用资源信息
     * @param {string} projectUuid 项目ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listUsageInfos(listUsageInfosRequest?: ListUsageInfosRequest): Promise<ListUsageInfosResponse> {
        const options = ParamCreater().listUsageInfos(listUsageInfosRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询用户DNS映射
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询用户DNS映射
     * @param {string} projectId 工程ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listUserDnsMapping(listUserDnsMappingRequest?: ListUserDnsMappingRequest): Promise<ListUserDnsMappingResponse> {
        const options = ParamCreater().listUserDnsMapping(listUserDnsMappingRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary ListUserPackageUsage
     * @param {string} projectId 项目ID，固定长度32位字符（字母和数字）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listUserPackageUsage(listUserPackageUsageRequest?: ListUserPackageUsageRequest): Promise<ListUserPackageUsageResponse> {
        const options = ParamCreater().listUserPackageUsage(listUserPackageUsageRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary ListUserPopupInfo
     * @param {string} projectId 项目ID，固定长度32位字符（字母和数字）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listUserPopupInfo(listUserPopupInfoRequest?: ListUserPopupInfoRequest): Promise<ListUserPopupInfoResponse> {
        const options = ParamCreater().listUserPopupInfo(listUserPopupInfoRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询仪表盘用户的看板
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询仪表盘用户的看板
     * @param {string} serviceId 服务id
     * @param {string} [name] 看板名称，精确匹配
     * @param {number} [pageNumber] 页码
     * @param {number} [pageSize] 每页数量
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listUsingGet(listUsingGetRequest?: ListUsingGetRequest): Promise<ListUsingGetResponse> {
        const options = ParamCreater().listUsingGet(listUsingGetRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询全局变量参数列表V4
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询全局变量参数列表V4
     * @param {string} projectId 工程id
     * @param {string} [groupId] group_id
     * @param {string} [pageNo] 当前页数
     * @param {string} [pageSize] 每页多少记录
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listVariables(listVariablesRequest?: ListVariablesRequest): Promise<ListVariablesResponse> {
        const options = ParamCreater().listVariables(listVariablesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 从迭代中移除需求
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 从迭代中移除需求
     * @param {string} projectId 项目ID，固定长度32位字符（字母和数字）。
     * @param {string} iteratorId 迭代uri
     * @param {RemoveIssuesInfo} removeIssuesInfo 从迭代中移除需求请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public removeIssuesFromIterator(removeIssuesFromIteratorRequest?: RemoveIssuesFromIteratorRequest): Promise<RemoveIssuesFromIteratorResponse> {
        const options = ParamCreater().removeIssuesFromIterator(removeIssuesFromIteratorRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量执行测试用例
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量执行测试用例
     * @param {string} projectId 项目唯一标识，固定长度32位字符
     * @param {RunTestCaseRequestBody} runTestCaseRequestBody 该接口的入参bean名称
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public runTestCase(runTestCaseRequest?: RunTestCaseRequest): Promise<RunTestCaseResponse> {
        const options = ParamCreater().runTestCase(runTestCaseRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 保存任务配置
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 保存任务配置
     * @param {string} serviceId 服务id
     * @param {SaveTaskSettingRequestBody} saveTaskSettingRequestBody 保存任务配置的请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public saveTaskSetting(saveTaskSettingRequest?: SaveTaskSettingRequest): Promise<SaveTaskSettingResponse> {
        const options = ParamCreater().saveTaskSetting(saveTaskSettingRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建测试报告自定义模块
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建测试报告自定义模块
     * @param {string} projectId 项目ID，固定长度32位字符（字母和数字）。
     * @param {string} versionUri 计划uri
     * @param {string} reportUri 测试报告Uri
     * @param {TestReportCustomDetailInfo} testReportCustomDetailInfo 测试报告自定义模块信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public saveTestReportCustomDetail(saveTestReportCustomDetailRequest?: SaveTestReportCustomDetailRequest): Promise<SaveTestReportCustomDetailResponse> {
        const options = ParamCreater().saveTestReportCustomDetail(saveTestReportCustomDetailRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 设置测试套结果
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 设置测试套结果
     * @param {string} projectUuid 项目id
     * @param {string} taskUri 任务uri
     * @param {ExecuteTaskInfo} executeTaskInfo 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public setTaskResult(setTaskResultRequest?: SetTaskResultRequest): Promise<SetTaskResultResponse> {
        const options = ParamCreater().setTaskResult(setTaskResultRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询任务配置
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询任务配置
     * @param {string} serviceId 服务id
     * @param {string} key 配置项key
     * @param {string} type 配置项类型
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showAllConfigValueByTypeAndKey(showAllConfigValueByTypeAndKeyRequest?: ShowAllConfigValueByTypeAndKeyRequest): Promise<ShowAllConfigValueByTypeAndKeyResponse> {
        const options = ParamCreater().showAllConfigValueByTypeAndKey(showAllConfigValueByTypeAndKeyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取目录\\特性树
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取特性树V5
     * @param {string} featureId 
     * @param {QueryTestItemTreeInfo} queryTestItemTreeInfoRequestBody 获取目录\\特性树请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showAllFeatureChildren(showAllFeatureChildrenRequest?: ShowAllFeatureChildrenRequest): Promise<ShowAllFeatureChildrenResponse> {
        const options = ParamCreater().showAllFeatureChildren(showAllFeatureChildrenRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取用例历史执行数据
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取用例历史执行数据
     * @param {string} testcaseId 测试用例id
     * @param {string} projectId 项目ID，固定长度32位字符（字母和数字）。
     * @param {number} [offset] 起始偏移量，表示从此偏移量开始查询， offset大于等于1
     * @param {number} [limit] 每页显示的条目数量,最大支持200条
     * @param {string} [planId] 测试计划id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showApiTestcaseHistories(showApiTestcaseHistoriesRequest?: ShowApiTestcaseHistoriesRequest): Promise<ShowApiTestcaseHistoriesResponse> {
        const options = ParamCreater().showApiTestcaseHistories(showApiTestcaseHistoriesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取资产列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取资产列表
     * @param {string} projectId 项目ID，固定长度32位字符（字母和数字）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showAsset(showAssetRequest?: ShowAssetRequest): Promise<ShowAssetResponse> {
        const options = ParamCreater().showAsset(showAssetRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取资产树列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取资产树列表
     * @param {string} projectId 项目ID，固定长度32位字符（字母和数字）。
     * @param {string} assetId 资产库ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showAssetTree(showAssetTreeRequest?: ShowAssetTreeRequest): Promise<ShowAssetTreeResponse> {
        const options = ParamCreater().showAssetTree(showAssetTreeRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取测试报告的模板设置
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取测试报告的模板设置
     * @param {string} projectId 项目ID，固定长度32位字符（字母和数字）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showBackgroundInfo(showBackgroundInfoRequest?: ShowBackgroundInfoRequest): Promise<ShowBackgroundInfoResponse> {
        const options = ParamCreater().showBackgroundInfo(showBackgroundInfoRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取分支详情
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取分支详情
     * @param {string} branchId 分支URI
     * @param {string} [projectUuid] 项目ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showBranch(showBranchRequest?: ShowBranchRequest): Promise<ShowBranchResponse> {
        const options = ParamCreater().showBranch(showBranchRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询用例结果
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询用例结果
     * @param {string} projectId 项目ID，固定长度32位字符（字母和数字）。
     * @param {string} versionUri 版本ID
     * @param {string} caseUri 用例uri
     * @param {QueryCaseResultInfo} param 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showCaseResult(showCaseResultRequest?: ShowCaseResultRequest): Promise<ShowCaseResultResponse> {
        const options = ParamCreater().showCaseResult(showCaseResultRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询租户测试并发套餐状态
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询租户测试并发套餐状态
     * @param {string} serviceId 服务id
     * @param {string} [testType] test_type
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showConcurrencyPackageUsing(showConcurrencyPackageUsingRequest?: ShowConcurrencyPackageUsingRequest): Promise<ShowConcurrencyPackageUsingResponse> {
        const options = ParamCreater().showConcurrencyPackageUsing(showConcurrencyPackageUsingRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询用户免责声明
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询用户免责声明
     * @param {string} type 类型
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showDisclaimerRecord(showDisclaimerRecordRequest?: ShowDisclaimerRecordRequest): Promise<ShowDisclaimerRecordResponse> {
        const options = ParamCreater().showDisclaimerRecord(showDisclaimerRecordRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据domainId获取加密的testbirdkey
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 根据domainId获取加密的testbirdkey
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showDomainInfo(showDomainInfoRequest?: ShowDomainInfoRequest): Promise<ShowDomainInfoResponse> {
        const options = ParamCreater().showDomainInfo();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询租户在线拨测套餐状态
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询租户在线拨测套餐状态
     * @param {string} serviceId 服务id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showEchoTestPackageUsing(showEchoTestPackageUsingRequest?: ShowEchoTestPackageUsingRequest): Promise<ShowEchoTestPackageUsingResponse> {
        const options = ParamCreater().showEchoTestPackageUsing(showEchoTestPackageUsingRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定表的内容
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询指定表的内容
     * @param {EtlRequestBody} etlRequestBody 该接口的入参bean名称
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showEtlData(showEtlDataRequest?: ShowEtlDataRequest): Promise<ShowEtlDataResponse> {
        const options = ParamCreater().showEtlData(showEtlDataRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据目录查询因子
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 根据目录查询因子
     * @param {string} projectId 项目ID，固定长度32位字符（字母和数字）。
     * @param {string} id 资产库ID
     * @param {CommRequestListFactorParam} [showFactorByAssetIdRequestBody] 根据目录查询因子请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showFactorByAssetId(showFactorByAssetIdRequest?: ShowFactorByAssetIdRequest): Promise<ShowFactorByAssetIdResponse> {
        const options = ParamCreater().showFactorByAssetId(showFactorByAssetIdRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据id获取因子
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 根据id获取因子
     * @param {string} projectId 项目ID，固定长度32位字符（字母和数字）。
     * @param {string} id 因子ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showFactorById(showFactorByIdRequest?: ShowFactorByIdRequest): Promise<ShowFactorByIdResponse> {
        const options = ParamCreater().showFactorById(showFactorByIdRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取目录\\特性树
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取目录\\特性树
     * @param {string} featureId 
     * @param {QueryTestItemTreeInfo} queryTestItemTreeInfoRequestBody 获取目录\\特性树请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showFeatureChildren(showFeatureChildrenRequest?: ShowFeatureChildrenRequest): Promise<ShowFeatureChildrenResponse> {
        const options = ParamCreater().showFeatureChildren(showFeatureChildrenRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询限时免费用户免责声明记录
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询限时免费用户免责声明记录
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showFreeDeclaration(showFreeDeclarationRequest?: ShowFreeDeclarationRequest): Promise<ShowFreeDeclarationResponse> {
        const options = ParamCreater().showFreeDeclaration();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询告警模板名称是否重复
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询告警模板名称是否重复
     * @param {string} serviceId 服务id
     * @param {string} name 查询的模板名称
     * @param {string} [id] UUID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showIfTaskNameRepeat(showIfTaskNameRepeatRequest?: ShowIfTaskNameRepeatRequest): Promise<ShowIfTaskNameRepeatResponse> {
        const options = ParamCreater().showIfTaskNameRepeat(showIfTaskNameRepeatRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询告警组用户名是否重复
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询告警组用户名是否重复
     * @param {string} serviceId 服务id
     * @param {string} [userId] 用户ID
     * @param {string} [userName] 用户名
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showIfUserNameRepeat(showIfUserNameRepeatRequest?: ShowIfUserNameRepeatRequest): Promise<ShowIfUserNameRepeatResponse> {
        const options = ParamCreater().showIfUserNameRepeat(showIfUserNameRepeatRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询某个测试计划下的需求列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询某个测试计划下的需求树
     * @param {string} projectId 项目id，项目唯一标识，固定长度32位字符
     * @param {string} planId 测试计划id，测试计划的唯一标识，长度11-34位字符
     * @param {number} offset 起始偏移量，表示从此偏移量开始查询， offset大于等于0
     * @param {number} limit 每页显示的条目数量,最大支持200条
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showIssuesByPlanId(showIssuesByPlanIdRequest?: ShowIssuesByPlanIdRequest): Promise<ShowIssuesByPlanIdResponse> {
        const options = ParamCreater().showIssuesByPlanId(showIssuesByPlanIdRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询缺陷相关联测试计划
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询缺陷相关联测试计划
     * @param {string} projectId 项目ID，固定长度32位字符（字母和数字）。
     * @param {string} defectId 缺陷id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showIteratorByDefect(showIteratorByDefectRequest?: ShowIteratorByDefectRequest): Promise<ShowIteratorByDefectResponse> {
        const options = ParamCreater().showIteratorByDefect(showIteratorByDefectRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询迭代计划详情，包含统计信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询迭代计划详情，包含统计信息
     * @param {string} iteratorId 迭代uri
     * @param {string} [projectUuid] 项目id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showIteratorDetail(showIteratorDetailRequest?: ShowIteratorDetailRequest): Promise<ShowIteratorDetailResponse> {
        const options = ParamCreater().showIteratorDetail(showIteratorDetailRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据id获取脑图对象
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 根据id获取脑图对象
     * @param {string} projectId 项目ID，固定长度32位字符（字母和数字）。
     * @param {string} id 脑图ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showMindMapById(showMindMapByIdRequest?: ShowMindMapByIdRequest): Promise<ShowMindMapByIdResponse> {
        const options = ParamCreater().showMindMapById(showMindMapByIdRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据条件分页获取脑图对象V3
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 根据条件分页获取脑图对象V3
     * @param {string} projectId 项目ID，固定长度32位字符（字母和数字）。
     * @param {CommRequestMindmapPageParamV3} [showMindmapByPageRequestBody] 根据条件分页获取脑图对象请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showMindmapByPage(showMindmapByPageRequest?: ShowMindmapByPageRequest): Promise<ShowMindmapByPageResponse> {
        const options = ParamCreater().showMindmapByPage(showMindmapByPageRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取脑图创建人V2
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取脑图创建人V2
     * @param {string} projectId 项目ID，固定长度32位字符（字母和数字）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showMindmapCreatorName(showMindmapCreatorNameRequest?: ShowMindmapCreatorNameRequest): Promise<ShowMindmapCreatorNameResponse> {
        const options = ParamCreater().showMindmapCreatorName(showMindmapCreatorNameRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 成功返回运行面板信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询运行面板信息
     * @param {string} serviceId 服务id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showOperationalDataCurrentMonthUsing(showOperationalDataCurrentMonthUsingRequest?: ShowOperationalDataCurrentMonthUsingRequest): Promise<ShowOperationalDataCurrentMonthUsingResponse> {
        const options = ParamCreater().showOperationalDataCurrentMonthUsing(showOperationalDataCurrentMonthUsingRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询某测试计划下的操作历史
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询某测试计划下的操作历史
     * @param {string} projectId 项目id，项目唯一标识，固定长度32位字符
     * @param {string} planId 测试计划id，测试计划的唯一标识，长度11-34位字符
     * @param {number} offset 起始偏移量，表示从此偏移量开始查询， offset大于等于0
     * @param {number} limit 每页显示的条目数量,最大支持200条
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showPlanJournals(showPlanJournalsRequest?: ShowPlanJournalsRequest): Promise<ShowPlanJournalsResponse> {
        const options = ParamCreater().showPlanJournals(showPlanJournalsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 项目下查询测试计划列表v2
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 项目下查询测试计划列表v2
     * @param {string} projectId 项目id，项目唯一标识，固定长度32位字符
     * @param {number} offset 起始偏移量，表示从此偏移量开始查询， offset大于等于0
     * @param {number} limit 每页显示的条目数量,最大支持200条
     * @param {string} [name] 模糊查询使用(针对测试计划名称)
     * @param {string} [currentStage] 测试计划所处阶段（create,design,execute,report）
     * @param {string} [branchUri] 分支Uri，默认master
     * @param {boolean} [queryAllVersion] 是否查询所有版本下测试计划，默认为false。若值为true, 查询所有版本下测试计划; 若为false, 查询branch_uri指定分支下的测试计划, branch_uri为空时默认为master
     * @param {string} [fixVersionIds] 测试计划关联的迭代。迭代id以逗号间隔
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showPlanList(showPlanListRequest?: ShowPlanListRequest): Promise<ShowPlanListResponse> {
        const options = ParamCreater().showPlanList(showPlanListRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 项目下查询测试计划列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 项目下查询测试计划列表
     * @param {string} projectId 项目id，项目唯一标识，固定长度32位字符
     * @param {number} offset 页号，取值范围为1-20000
     * @param {number} limit 每页显示的条目数量，取值范围为1-200
     * @param {string} [name] 模糊查询使用(针对测试计划名称)
     * @param {string} [currentStage] 测试计划所处阶段（create,design,execute,report）
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showPlans(showPlansRequest?: ShowPlansRequest): Promise<ShowPlansResponse> {
        const options = ParamCreater().showPlans(showPlansRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取异步进度
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取异步进度
     * @param {string} operationUri 异步操作uri
     * @param {string} [projectUuid] 项目ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showProgress(showProgressRequest?: ShowProgressRequest): Promise<ShowProgressResponse> {
        const options = ParamCreater().showProgress(showProgressRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询质量报告看板统计信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询质量报告看板统计信息
     * @param {string} projectId 项目ID，固定长度32位字符（字母和数字）。
     * @param {TestReportInfoRequestBody} showProjectDataDashboardRequestBody 质量报告看板统计请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showProjectDataDashboard(showProjectDataDashboardRequest?: ShowProjectDataDashboardRequest): Promise<ShowProjectDataDashboardResponse> {
        const options = ParamCreater().showProjectDataDashboard(showProjectDataDashboardRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 用户获取自己当前已经注册的服务
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 用户获取自己当前已经注册的服务
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showRegisterService(showRegisterServiceRequest?: ShowRegisterServiceRequest): Promise<ShowRegisterServiceResponse> {
        const options = ParamCreater().showRegisterService();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 实时计算单个自定义报表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 实时计算单个自定义报表
     * @param {string} projectId 项目id
     * @param {string} planId 分支/计划id
     * @param {GenerateReportInfo} showReportRequestBody 实时计算单个自定义报表请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showReport(showReportRequest?: ShowReportRequest): Promise<ShowReportResponse> {
        const options = ParamCreater().showReport(showReportRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 质量报告需求测试情况统计
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 质量报告需求测试情况统计
     * @param {string} projectId 项目ID，固定长度32位字符（字母和数字）。
     * @param {string} versionId 版本id
     * @param {QueryRequirementsOverviewInfo} queryRequirementsOverviewInfo 质量报告看板统计请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showRequirementsOverview(showRequirementsOverviewRequest?: ShowRequirementsOverviewRequest): Promise<ShowRequirementsOverviewResponse> {
        const options = ParamCreater().showRequirementsOverview(showRequirementsOverviewRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据条件分页获取评审对象V2
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 根据条件分页获取评审对象V2
     * @param {string} projectId 项目ID，固定长度32位字符（字母和数字）。
     * @param {CommRequestReviewPageParam} [showReviewByPageRequestBody] 根据条件分页获取评审对象V2请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showReviewByPage(showReviewByPageRequest?: ShowReviewByPageRequest): Promise<ShowReviewByPageResponse> {
        const options = ParamCreater().showReviewByPage(showReviewByPageRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据条件分页获取场景对象V2
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 根据条件分页获取场景对象V2
     * @param {string} projectId 项目ID，固定长度32位字符（字母和数字）。
     * @param {CommRequestScenePageParam} [showSceneByPageRequestBody] 根据条件分页获取场景对象V2请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showSceneByPage(showSceneByPageRequest?: ShowSceneByPageRequest): Promise<ShowSceneByPageResponse> {
        const options = ParamCreater().showSceneByPage(showSceneByPageRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据脑图id查询统计数目
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 根据脑图id查询统计数目
     * @param {string} projectId 项目ID，固定长度32位字符（字母和数字）。
     * @param {string} mindmapId 脑图ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showStatisticById(showStatisticByIdRequest?: ShowStatisticByIdRequest): Promise<ShowStatisticByIdResponse> {
        const options = ParamCreater().showStatisticById(showStatisticByIdRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据入参动态查询系统配置中的信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 根据入参动态查询系统配置中的信息
     * @param {string} projectId 项目ID，固定长度32位字符（字母和数字）。
     * @param {CommRequestSystemConfig} showSystemConfigsRequestBody 系统配置查询请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showSystemConfigs(showSystemConfigsRequest?: ShowSystemConfigsRequest): Promise<ShowSystemConfigsResponse> {
        const options = ParamCreater().showSystemConfigs(showSystemConfigsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取模板V2
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取模板V2
     * @param {string} projectId 项目ID，固定长度32位字符（字母和数字）。
     * @param {string} id 模板ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showTemplateById(showTemplateByIdRequest?: ShowTemplateByIdRequest): Promise<ShowTemplateByIdResponse> {
        const options = ParamCreater().showTemplateById(showTemplateByIdRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据条件分页获取模板V3
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 根据条件分页获取模板V3
     * @param {string} projectId 项目ID，固定长度32位字符（字母和数字）。
     * @param {CommRequestTemplatePageParam} [showTemplateByPageRequestBody] 根据条件分页获取模板V3请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showTemplateByPage(showTemplateByPageRequest?: ShowTemplateByPageRequest): Promise<ShowTemplateByPageResponse> {
        const options = ParamCreater().showTemplateByPage(showTemplateByPageRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询用例详情
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询用例详情
     * @param {string} testcaseId 用例id
     * @param {string} [versionUri] 分支uri
     * @param {string} [projectUuid] 项目id
     * @param {string} [taskUri] 任务
     * @param {boolean} [refresh] 是否刷新缓存
     * @param {boolean} [isRecycle] 是否回收站资源
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showTestCase(showTestCaseRequest?: ShowTestCaseRequest): Promise<ShowTestCaseResponse> {
        const options = ParamCreater().showTestCase(showTestCaseRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询用户用例关联缺陷的统计信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询用户用例关联缺陷的统计信息
     * @param {string} projectId 项目ID，固定长度32位字符（字母和数字）。
     * @param {ShowTestCaseAndDefectInfoRequestBody} showTestCaseAndDefectInfoRequestBody 查询用户用例关联缺陷的统计信息请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showTestCaseAndDefectInfo(showTestCaseAndDefectInfoRequest?: ShowTestCaseAndDefectInfoRequest): Promise<ShowTestCaseAndDefectInfoResponse> {
        const options = ParamCreater().showTestCaseAndDefectInfo(showTestCaseAndDefectInfoRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取测试用例详情
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取测试用例详情
     * @param {string} projectId 项目唯一标识，固定长度32位字符
     * @param {string} testcaseId 测试用例唯一标识，固定长度32位字符
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showTestCaseDetail(showTestCaseDetailRequest?: ShowTestCaseDetailRequest): Promise<ShowTestCaseDetailResponse> {
        const options = ParamCreater().showTestCaseDetail(showTestCaseDetailRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 通过用例编号获取测试用例详情
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 通过用例编号获取测试用例详情
     * @param {string} projectId 项目唯一标识，固定长度32位字符
     * @param {string} testcaseNumber 用例编号，长度为[3-128]位字符
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showTestCaseDetailV2(showTestCaseDetailV2Request?: ShowTestCaseDetailV2Request): Promise<ShowTestCaseDetailV2Response> {
        const options = ParamCreater().showTestCaseDetailV2(showTestCaseDetailV2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据用例查询评审记录
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 根据用例查询评审记录
     * @param {string} projectUuid 项目id
     * @param {string} versionUri 版本URI
     * @param {number} pageNo 当前页数
     * @param {number} pageSize 每页条数
     * @param {string} testcaseUri 分支用例URI
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showTestCaseReviews(showTestCaseReviewsRequest?: ShowTestCaseReviewsRequest): Promise<ShowTestCaseReviewsResponse> {
        const options = ParamCreater().showTestCaseReviews(showTestCaseReviewsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 版本测试用例变更统计（只统计分支，不统计基线）
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 版本测试用例变更统计（只统计分支，不统计基线）
     * @param {string} projectId 项目ID，固定长度32位字符（字母和数字）。
     * @param {string} versionId 版本uri
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showTestCasesChangeStatistics(showTestCasesChangeStatisticsRequest?: ShowTestCasesChangeStatisticsRequest): Promise<ShowTestCasesChangeStatisticsResponse> {
        const options = ParamCreater().showTestCasesChangeStatistics(showTestCasesChangeStatisticsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据条件分页获取测试用例对象V2
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 根据条件分页获取测试用例对象V2
     * @param {string} projectId 项目ID，固定长度32位字符（字母和数字）。
     * @param {CommRequestTestCasePageParam} [showTestcaseByPageRequestBody] 根据条件分页获取测试用例对象V2请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showTestcaseByPage(showTestcaseByPageRequest?: ShowTestcaseByPageRequest): Promise<ShowTestcaseByPageResponse> {
        const options = ParamCreater().showTestcaseByPage(showTestcaseByPageRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据条件分页获取测试点对象V2
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 根据条件分页获取测试点对象V2
     * @param {string} projectId 项目ID，固定长度32位字符（字母和数字）。
     * @param {CommRequestTestPointPageParam} [showTestpointByPageRequestBody] 根据条件分页获取测试点对象V2请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showTestpointByPage(showTestpointByPageRequest?: ShowTestpointByPageRequest): Promise<ShowTestpointByPageResponse> {
        const options = ParamCreater().showTestpointByPage(showTestpointByPageRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取租户订单信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取租户订单信息
     * @param {string} [projectUuid] 项目ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showUserAccessInfo(showUserAccessInfoRequest?: ShowUserAccessInfoRequest): Promise<ShowUserAccessInfoResponse> {
        const options = ParamCreater().showUserAccessInfo(showUserAccessInfoRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询时段内用例的执行情况
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询时段内用例的执行情况
     * @param {string} projectId 项目ID，固定长度32位字符（字母和数字）。
     * @param {ShowUserExecuteTestCaseInfoRequestBody} showUserExecuteTestCaseInfoRequestBody 查询时段内用例的执行情况请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showUserExecuteTestCaseInfo(showUserExecuteTestCaseInfoRequest?: ShowUserExecuteTestCaseInfoRequest): Promise<ShowUserExecuteTestCaseInfoResponse> {
        const options = ParamCreater().showUserExecuteTestCaseInfo(showUserExecuteTestCaseInfoRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改关键字信息接口
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改关键字信息接口
     * @param {string} projectId 项目ID，固定长度32位字符（字母和数字）。
     * @param {string} awId AW的ID
     * @param {UpdateBasicAwReq} request aw更新信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateBasicAwById(updateBasicAwByIdRequest?: UpdateBasicAwByIdRequest): Promise<UpdateBasicAwByIdResponse> {
        const options = ParamCreater().updateBasicAwById(updateBasicAwByIdRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改测试计划
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改测试计划
     * @param {string} iteratorId 迭代uri
     * @param {IteratorVersionInfo} iteratorVersionInfo 修改测试计划请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateIterator(updateIteratorRequest?: UpdateIteratorRequest): Promise<UpdateIteratorResponse> {
        const options = ParamCreater().updateIterator(updateIteratorRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新已注册服务
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新已注册服务
     * @param {number} serviceId 注册服务唯一标识，该值由注册接口返回
     * @param {ServiceRequestBody} updateServiceRequestBody 该接口的入参bean名称
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateService(updateServiceRequest?: UpdateServiceRequest): Promise<UpdateServiceResponse> {
        const options = ParamCreater().updateService(updateServiceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新自定义测试服务类型用例
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新自定义测试服务类型用例
     * @param {string} projectId 项目唯一标识，固定长度32位字符
     * @param {string} testcaseId 测试用例唯一标识，固定长度32位字符
     * @param {UpdateTestCaseRequestBody} updateTestCaseRequestBody 该接口的入参bean名称
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateTestCase(updateTestCaseRequest?: UpdateTestCaseRequest): Promise<UpdateTestCaseResponse> {
        const options = ParamCreater().updateTestCase(updateTestCaseRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新tmss用例和用例脚本
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新tmss用例和用例脚本
     * @param {string} projectId 项目ID，固定长度32位字符（字母和数字）。
     * @param {string} tmssCaseUri TMSS用例uri
     * @param {CreateTestCaseReq} request 用例脚本信息
     * @param {boolean} [turnOnAwmapping] 新组合AW开关
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateTestCaseAndScript(updateTestCaseAndScriptRequest?: UpdateTestCaseAndScriptRequest): Promise<UpdateTestCaseAndScriptResponse> {
        const options = ParamCreater().updateTestCaseAndScript(updateTestCaseAndScriptRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改用例评论
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改用例评论
     * @param {string} projectId 项目ID，固定长度32位字符（字母和数字）。
     * @param {string} testcaseId 用例uri
     * @param {string} commentId 评论uri
     * @param {TestCaseCommentInfo} testCaseCommentInfo 修改用例评论请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateTestCaseComment(updateTestCaseCommentRequest?: UpdateTestCaseCommentRequest): Promise<UpdateTestCaseCommentResponse> {
        const options = ParamCreater().updateTestCaseComment(updateTestCaseCommentRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量更新测试用例结果
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量更新测试用例结果
     * @param {string} projectId 项目唯一标识，固定长度32位字符
     * @param {UpdateTestCaseResultRequestBody} updateTestCaseResultRequestBody 该接口的入参bean名称
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateTestCaseResult(updateTestCaseResultRequest?: UpdateTestCaseResultRequest): Promise<UpdateTestCaseResultResponse> {
        const options = ParamCreater().updateTestCaseResult(updateTestCaseResultRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改测试报告自定义模块
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改测试报告自定义模块
     * @param {string} projectId 项目ID，固定长度32位字符（字母和数字）。
     * @param {string} versionUri 计划uri
     * @param {string} reportUri 测试报告Uri
     * @param {string} customInfoUri 测试报告自定义模块Uri
     * @param {TestReportCustomDetailInfo} testReportCustomDetailInfo 测试报告自定义模块信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateTestReportCustomDetailByUri(updateTestReportCustomDetailByUriRequest?: UpdateTestReportCustomDetailByUriRequest): Promise<UpdateTestReportCustomDetailByUriResponse> {
        const options = ParamCreater().updateTestReportCustomDetailByUri(updateTestReportCustomDetailByUriRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新用户DNS映射，执行器自定义映射
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新用户DNS映射
     * @param {string} projectId 项目ID，固定长度32位字符（字母和数字）。
     * @param {string} param 域名映射信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateUserDnsMapping(updateUserDnsMappingRequest?: UpdateUserDnsMappingRequest): Promise<UpdateUserDnsMappingResponse> {
        const options = ParamCreater().updateUserDnsMapping(updateUserDnsMappingRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 在分支或者测试计划下修改用例
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 在分支或者测试计划下修改用例
     * @param {string} caseId 用例uri
     * @param {TestCaseInfo} testCaseInfo 在分支或者测试计划下修改用例请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateVersionTestCase(updateVersionTestCaseRequest?: UpdateVersionTestCaseRequest): Promise<UpdateVersionTestCaseResponse> {
        const options = ParamCreater().updateVersionTestCase(updateVersionTestCaseRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 上传附件
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 上传附件
     * @param {string} projectId 项目uuid
     * @param {any} file 上传的对象的内容。 
     * @param {boolean} [override] 是否覆盖同名文件
     * @param {string} [parentType] 附件挂载资源类型
     * @param {string} [parentUri] 附件挂载资源Uri
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public uploadCacheFile(uploadCacheFileRequest?: UploadCacheFileRequest): Promise<UploadCacheFileResponse> {
        const options = ParamCreater().uploadCacheFile(uploadCacheFileRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 通过导入仓库中的文件生成接口测试套
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 通过导入仓库中的文件生成接口测试套
     * @param {string} projectId 项目ID，固定长度32位字符（字母和数字）。
     * @param {CreateTestSuitByRepoFileInfo} createApiTestSuiteByRepoFileRequestBody 生成接口测试套的请求信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createApiTestSuiteByRepoFile(createApiTestSuiteByRepoFileRequest?: CreateApiTestSuiteByRepoFileRequest): Promise<CreateApiTestSuiteByRepoFileResponse> {
        const options = ParamCreater().createApiTestSuiteByRepoFile(createApiTestSuiteByRepoFileRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取环境参数分组列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取环境参数分组列表
     * @param {string} projectId 项目ID，固定长度32位字符（字母和数字）。
     * @param {number} offset 起始偏移量，表示从此偏移量开始查询， offset大于等于0
     * @param {number} limit 每页显示的条目数量,最大支持200条
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listEnvironments(listEnvironmentsRequest?: ListEnvironmentsRequest): Promise<ListEnvironmentsResponse> {
        const options = ParamCreater().listEnvironments(listEnvironmentsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 对外API
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 上传测试步骤图片
     * @param {string} projectId 项目id
     * @param {any} file 上传的对象的内容。 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public uploadStepImg(uploadStepImgRequest?: UploadStepImgRequest): Promise<UploadStepImgResponse> {
        const options = ParamCreater().uploadStepImg(uploadStepImgRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量删除因子
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量删除因子
     * @param {string} projectId 项目ID，固定长度32位字符（字母和数字）。
     * @param {CommRequestListString} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchDeleteFacotrByIds(batchDeleteFacotrByIdsRequest?: BatchDeleteFacotrByIdsRequest): Promise<BatchDeleteFacotrByIdsResponse> {
        const options = ParamCreater().batchDeleteFacotrByIds(batchDeleteFacotrByIdsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量查询用例V3
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量查询用例V3
     * @param {string} projectId 项目ID，固定长度32位字符（字母和数字）。
     * @param {CommRequestTestCasePageParam} [batchQueryTestCaseRequestBody] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchShowTestCase(batchShowTestCaseRequest?: BatchShowTestCaseRequest): Promise<BatchShowTestCaseResponse> {
        const options = ParamCreater().batchShowTestCase(batchShowTestCaseRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 新增资产树节点
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 新增资产树节点
     * @param {string} projectId 项目ID，固定长度32位字符（字母和数字）。
     * @param {string} assetId 资产ID
     * @param {string} parentId 父目录ID
     * @param {CommRequestAssetTree} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createAssetTree(createAssetTreeRequest?: CreateAssetTreeRequest): Promise<CreateAssetTreeResponse> {
        const options = ParamCreater().createAssetTree(createAssetTreeRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 备份脑图V2
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 备份脑图V2
     * @param {string} projectId 项目ID，固定长度32位字符（字母和数字）。
     * @param {CommRequestBackUpMindmapParam} [backupMindmapRequestBody] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createBackupMindmap(createBackupMindmapRequest?: CreateBackupMindmapRequest): Promise<CreateBackupMindmapResponse> {
        const options = ParamCreater().createBackupMindmap(createBackupMindmapRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 保存模板V2
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 保存模板V2
     * @param {string} projectId 项目ID，固定长度32位字符（字母和数字）。
     * @param {CommRequestSaveTemplateParam} createTemplateRequestBody 保存模板V2请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createTemplate(createTemplateRequest?: CreateTemplateRequest): Promise<CreateTemplateResponse> {
        const options = ParamCreater().createTemplate(createTemplateRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除资产
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除资产
     * @param {string} projectId 项目ID，固定长度32位字符（字母和数字）。
     * @param {string} id 资产库ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteAsset(deleteAssetRequest?: DeleteAssetRequest): Promise<DeleteAssetResponse> {
        const options = ParamCreater().deleteAsset(deleteAssetRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除资产树节点
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除资产树节点
     * @param {string} projectId 项目ID，固定长度32位字符（字母和数字）。
     * @param {string} assetId 资产ID
     * @param {string} parentId 因子目录ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteAssetTree(deleteAssetTreeRequest?: DeleteAssetTreeRequest): Promise<DeleteAssetTreeResponse> {
        const options = ParamCreater().deleteAssetTree(deleteAssetTreeRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据id删除脑图备份V2
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 根据id删除脑图备份V2
     * @param {string} projectId 项目ID，固定长度32位字符（字母和数字）。
     * @param {string} id 备份ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteMindmapBackupById(deleteMindmapBackupByIdRequest?: DeleteMindmapBackupByIdRequest): Promise<DeleteMindmapBackupByIdResponse> {
        const options = ParamCreater().deleteMindmapBackupById(deleteMindmapBackupByIdRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除脑图回收站V2
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除脑图回收站V2
     * @param {string} projectId 项目ID，固定长度32位字符（字母和数字）。
     * @param {string} id 回收站ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteMindmapRecycleById(deleteMindmapRecycleByIdRequest?: DeleteMindmapRecycleByIdRequest): Promise<DeleteMindmapRecycleByIdResponse> {
        const options = ParamCreater().deleteMindmapRecycleById(deleteMindmapRecycleByIdRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除模板V2
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除模板V2
     * @param {string} projectId 项目ID，固定长度32位字符（字母和数字）。
     * @param {string} id 模板ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteTemplateById(deleteTemplateByIdRequest?: DeleteTemplateByIdRequest): Promise<DeleteTemplateByIdResponse> {
        const options = ParamCreater().deleteTemplateById(deleteTemplateByIdRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 下载资产模板
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 下载资产模板
     * @param {string} projectId 项目ID，固定长度32位字符（字母和数字）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public downloadAssetTemplate(downloadAssetTemplateRequest?: DownloadAssetTemplateRequest): Promise<DownloadAssetTemplateResponse> {
        const options = ParamCreater().downloadAssetTemplate(downloadAssetTemplateRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 因子库导出
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 因子库导出
     * @param {string} projectId 项目ID，固定长度32位字符（字母和数字）。
     * @param {string} assetId 资产库ID
     * @param {CommRequestAssetExportParam} [exportFactorRequestBody] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public exportFactor(exportFactorRequest?: ExportFactorRequest): Promise<ExportFactorResponse> {
        const options = ParamCreater().exportFactor(exportFactorRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 资产导入
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 资产导入
     * @param {string} projectId 项目ID，固定长度32位字符（字母和数字）。
     * @param {any} excelFile 导入文件
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public importAsset(importAssetRequest?: ImportAssetRequest): Promise<ImportAssetResponse> {
        const options = ParamCreater().importAsset(importAssetRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 因子导入
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 因子导入
     * @param {string} projectId 项目ID，固定长度32位字符（字母和数字）。
     * @param {string} assetId 资产库ID
     * @param {any} excelFile 待导入文件
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public importFactor(importFactorRequest?: ImportFactorRequest): Promise<ImportFactorResponse> {
        const options = ParamCreater().importFactor(importFactorRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取默认模板V2
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取默认模板V2
     * @param {string} projectId 项目ID，固定长度32位字符（字母和数字）。
     * @param {CommRequestGetDefaultTemplateParam} [showDefaultTemplateByPageRequestBody] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showDefaultTemplateByPage(showDefaultTemplateByPageRequest?: ShowDefaultTemplateByPageRequest): Promise<ShowDefaultTemplateByPageResponse> {
        const options = ParamCreater().showDefaultTemplateByPage(showDefaultTemplateByPageRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据id获取脑图备份V2
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 根据id获取脑图备份V2
     * @param {string} projectId 项目ID，固定长度32位字符（字母和数字）。
     * @param {string} id 备份ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showMindmapBackupById(showMindmapBackupByIdRequest?: ShowMindmapBackupByIdRequest): Promise<ShowMindmapBackupByIdResponse> {
        const options = ParamCreater().showMindmapBackupById(showMindmapBackupByIdRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据条件分页获取脑图备份对象V3
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 根据条件分页获取脑图备份对象V3
     * @param {string} projectId 项目ID，固定长度32位字符（字母和数字）。
     * @param {CommRequestMindmapBackupPageParam} [showMindmapBackupByPageRequestBody] 根根据条件分页获取脑图备份对象V3请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showMindmapBackupByPage(showMindmapBackupByPageRequest?: ShowMindmapBackupByPageRequest): Promise<ShowMindmapBackupByPageResponse> {
        const options = ParamCreater().showMindmapBackupByPage(showMindmapBackupByPageRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据id获取回收站脑图对象V2
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 根据id获取回收站脑图对象V2
     * @param {string} projectId 项目ID，固定长度32位字符（字母和数字）。
     * @param {string} id 回收站ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showMindmapRecycleById(showMindmapRecycleByIdRequest?: ShowMindmapRecycleByIdRequest): Promise<ShowMindmapRecycleByIdResponse> {
        const options = ParamCreater().showMindmapRecycleById(showMindmapRecycleByIdRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据条件分页获取回收站脑图对象V3
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 根据条件分页获取回收站脑图对象V3
     * @param {string} projectId 项目ID，固定长度32位字符（字母和数字）。
     * @param {CommRequestMindmapRecyclePageParam} [showMindmapRecycleByPageRequestBody] 根据条件分页获取回收站脑图对象V3请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showMindmapRecycleByPage(showMindmapRecycleByPageRequest?: ShowMindmapRecycleByPageRequest): Promise<ShowMindmapRecycleByPageResponse> {
        const options = ParamCreater().showMindmapRecycleByPage(showMindmapRecycleByPageRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据id获取测试用例对象V2
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 根据id获取测试用例对象V2
     * @param {string} projectId 项目ID，固定长度32位字符（字母和数字）。
     * @param {string} id 用例ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showTestcaseById(showTestcaseByIdRequest?: ShowTestcaseByIdRequest): Promise<ShowTestcaseByIdResponse> {
        const options = ParamCreater().showTestcaseById(showTestcaseByIdRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改资产树节点
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改资产树节点
     * @param {string} projectId 项目ID，固定长度32位字符（字母和数字）。
     * @param {CommRequestUpdateAssetTreeParam} [updateAssetTreeRequestBody] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateAssetTree(updateAssetTreeRequest?: UpdateAssetTreeRequest): Promise<UpdateAssetTreeResponse> {
        const options = ParamCreater().updateAssetTree(updateAssetTreeRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 脑图名称编辑
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 脑图名称编辑
     * @param {string} projectId 项目ID，固定长度32位字符（字母和数字）。
     * @param {string} id 脑图ID
     * @param {string} name 脑图名称
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateMindmapName(updateMindmapNameRequest?: UpdateMindmapNameRequest): Promise<UpdateMindmapNameResponse> {
        const options = ParamCreater().updateMindmapName(updateMindmapNameRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 添加目录信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 添加目录信息
     * @param {AddTestItemInfo} param 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public addFeature(addFeatureRequest?: AddFeatureRequest): Promise<AddFeatureResponse> {
        const options = ParamCreater().addFeature(addFeatureRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据测试用例URI或用例编号查询测试用例对应的测试计划
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 根据测试用例URI或用例编号查询测试用例对应的测试计划
     * @param {string} projectUuid 项目id
     * @param {string} branchUri 版本URI
     * @param {TestcasePlanQueryParam} testcasePlanQueryParam 待查询的测试用例（URI或用例编号提供一个即可）
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listTestcasePlans(listTestcasePlansRequest?: ListTestcasePlansRequest): Promise<ListTestcasePlansResponse> {
        const options = ParamCreater().listTestcasePlans(listTestcasePlansRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据任务uri查询测试任务执行历史
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 根据任务uri查询测试任务执行历史
     * @param {string} projectUuid 项目id
     * @param {string} taskUri 任务URI
     * @param {string} pageNo 当前页数
     * @param {string} pageSize 每页多少记录
     * @param {string} [iteratorUri] 测试计划id
     * @param {string} [releaseDev] 发布版本
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listTaskResults(listTaskResultsRequest?: ListTaskResultsRequest): Promise<ListTaskResultsResponse> {
        const options = ParamCreater().listTaskResults(listTaskResultsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * 设置用例结果
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        addCaseResultFour(addCaseResultFourRequest?: AddCaseResultFourRequest) {
            const options = {
                method: "POST",
                url: "/v4/{project_id}/versions/{version_uri}/testcases/{case_uri}/results",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let projectId;
            
            let versionUri;
            
            let caseUri;

            if (addCaseResultFourRequest !== null && addCaseResultFourRequest !== undefined) {
                if (addCaseResultFourRequest instanceof AddCaseResultFourRequest) {
                    projectId = addCaseResultFourRequest.projectId;
                    versionUri = addCaseResultFourRequest.versionUri;
                    caseUri = addCaseResultFourRequest.caseUri;
                    body = addCaseResultFourRequest.body
                } else {
                    projectId = addCaseResultFourRequest['project_id'];
                    versionUri = addCaseResultFourRequest['version_uri'];
                    caseUri = addCaseResultFourRequest['case_uri'];
                    body = addCaseResultFourRequest['body'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling addCaseResultFour.');
            }
            if (versionUri === null || versionUri === undefined) {
            throw new RequiredError('versionUri','Required parameter versionUri was null or undefined when calling addCaseResultFour.');
            }
            if (caseUri === null || caseUri === undefined) {
            throw new RequiredError('caseUri','Required parameter caseUri was null or undefined when calling addCaseResultFour.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'project_id': projectId,'version_uri': versionUri,'case_uri': caseUri, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 新增用例评论
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        addTestCaseComment(addTestCaseCommentRequest?: AddTestCaseCommentRequest) {
            const options = {
                method: "POST",
                url: "/GT3KServer/v4/{project_id}/testcases/{testcase_id}/comments",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let projectId;
            
            let testcaseId;

            if (addTestCaseCommentRequest !== null && addTestCaseCommentRequest !== undefined) {
                if (addTestCaseCommentRequest instanceof AddTestCaseCommentRequest) {
                    projectId = addTestCaseCommentRequest.projectId;
                    testcaseId = addTestCaseCommentRequest.testcaseId;
                    body = addTestCaseCommentRequest.body
                } else {
                    projectId = addTestCaseCommentRequest['project_id'];
                    testcaseId = addTestCaseCommentRequest['testcase_id'];
                    body = addTestCaseCommentRequest['body'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling addTestCaseComment.');
            }
            if (testcaseId === null || testcaseId === undefined) {
            throw new RequiredError('testcaseId','Required parameter testcaseId was null or undefined when calling addTestCaseComment.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'project_id': projectId,'testcase_id': testcaseId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 初始化用例执行记录
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        addTestCaseResultLog(addTestCaseResultLogRequest?: AddTestCaseResultLogRequest) {
            const options = {
                method: "POST",
                url: "/v4/{project_id}/versions/{version_uri}/testcases/{case_uri}/results/init",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let projectId;
            
            let versionUri;
            
            let caseUri;

            if (addTestCaseResultLogRequest !== null && addTestCaseResultLogRequest !== undefined) {
                if (addTestCaseResultLogRequest instanceof AddTestCaseResultLogRequest) {
                    projectId = addTestCaseResultLogRequest.projectId;
                    versionUri = addTestCaseResultLogRequest.versionUri;
                    caseUri = addTestCaseResultLogRequest.caseUri;
                    body = addTestCaseResultLogRequest.body
                } else {
                    projectId = addTestCaseResultLogRequest['project_id'];
                    versionUri = addTestCaseResultLogRequest['version_uri'];
                    caseUri = addTestCaseResultLogRequest['case_uri'];
                    body = addTestCaseResultLogRequest['body'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling addTestCaseResultLog.');
            }
            if (versionUri === null || versionUri === undefined) {
            throw new RequiredError('versionUri','Required parameter versionUri was null or undefined when calling addTestCaseResultLog.');
            }
            if (caseUri === null || caseUri === undefined) {
            throw new RequiredError('caseUri','Required parameter caseUri was null or undefined when calling addTestCaseResultLog.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'project_id': projectId,'version_uri': versionUri,'case_uri': caseUri, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 添加需求/缺陷和多个用例关联关系
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchAddRelationsByOneCase(batchAddRelationsByOneCaseRequest?: BatchAddRelationsByOneCaseRequest) {
            const options = {
                method: "POST",
                url: "/testrelation/v4/workitems/{workitem_id}/relations",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let workitemId;

            if (batchAddRelationsByOneCaseRequest !== null && batchAddRelationsByOneCaseRequest !== undefined) {
                if (batchAddRelationsByOneCaseRequest instanceof BatchAddRelationsByOneCaseRequest) {
                    workitemId = batchAddRelationsByOneCaseRequest.workitemId;
                    body = batchAddRelationsByOneCaseRequest.body
                } else {
                    workitemId = batchAddRelationsByOneCaseRequest['workitem_id'];
                    body = batchAddRelationsByOneCaseRequest['body'];
                }
            }

        
            if (workitemId === null || workitemId === undefined) {
            throw new RequiredError('workitemId','Required parameter workitemId was null or undefined when calling batchAddRelationsByOneCase.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'workitem_id': workitemId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 向迭代中添加资源
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchAddResourcesForIterator(batchAddResourcesForIteratorRequest?: BatchAddResourcesForIteratorRequest) {
            const options = {
                method: "POST",
                url: "/GT3KServer/v4/iterators/{iterator_id}/testcases/batch-add",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let iteratorId;

            if (batchAddResourcesForIteratorRequest !== null && batchAddResourcesForIteratorRequest !== undefined) {
                if (batchAddResourcesForIteratorRequest instanceof BatchAddResourcesForIteratorRequest) {
                    iteratorId = batchAddResourcesForIteratorRequest.iteratorId;
                    body = batchAddResourcesForIteratorRequest.body
                } else {
                    iteratorId = batchAddResourcesForIteratorRequest['iterator_id'];
                    body = batchAddResourcesForIteratorRequest['body'];
                }
            }

        
            if (iteratorId === null || iteratorId === undefined) {
            throw new RequiredError('iteratorId','Required parameter iteratorId was null or undefined when calling batchAddResourcesForIterator.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'iterator_id': iteratorId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 批量删除自定义测试服务类型用例
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchDeleteTestCase(batchDeleteTestCaseRequest?: BatchDeleteTestCaseRequest) {
            const options = {
                method: "POST",
                url: "/v1/projects/{project_id}/testcases/batch-delete",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let projectId;

            if (batchDeleteTestCaseRequest !== null && batchDeleteTestCaseRequest !== undefined) {
                if (batchDeleteTestCaseRequest instanceof BatchDeleteTestCaseRequest) {
                    projectId = batchDeleteTestCaseRequest.projectId;
                    body = batchDeleteTestCaseRequest.body
                } else {
                    projectId = batchDeleteTestCaseRequest['project_id'];
                    body = batchDeleteTestCaseRequest['body'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling batchDeleteTestCase.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 批量删除用例
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchDeleteTestCases(batchDeleteTestCasesRequest?: BatchDeleteTestCasesRequest) {
            const options = {
                method: "DELETE",
                url: "/GT3KServer/v4/testcases/batch-delete",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let isAsync;

            if (batchDeleteTestCasesRequest !== null && batchDeleteTestCasesRequest !== undefined) {
                if (batchDeleteTestCasesRequest instanceof BatchDeleteTestCasesRequest) {
                    body = batchDeleteTestCasesRequest.body
                    isAsync = batchDeleteTestCasesRequest.isAsync;
                } else {
                    body = batchDeleteTestCasesRequest['body'];
                    isAsync = batchDeleteTestCasesRequest['is_async'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (isAsync !== null && isAsync !== undefined) {
                localVarQueryParameter['is_async'] = isAsync;
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据测试报告uri列表，删除测试报告
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchDeleteTestReport(batchDeleteTestReportRequest?: BatchDeleteTestReportRequest) {
            const options = {
                method: "DELETE",
                url: "/testreport/v4/{project_id}/test-reports/batch-delete",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let projectId;

            if (batchDeleteTestReportRequest !== null && batchDeleteTestReportRequest !== undefined) {
                if (batchDeleteTestReportRequest instanceof BatchDeleteTestReportRequest) {
                    projectId = batchDeleteTestReportRequest.projectId;
                    body = batchDeleteTestReportRequest.body
                } else {
                    projectId = batchDeleteTestReportRequest['project_id'];
                    body = batchDeleteTestReportRequest['body'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling batchDeleteTestReport.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 从迭代中批量移除用例
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchRemoveTestCasesFromIterator(batchRemoveTestCasesFromIteratorRequest?: BatchRemoveTestCasesFromIteratorRequest) {
            const options = {
                method: "DELETE",
                url: "/GT3KServer/v4/iterators/{iterator_id}/testcases/batch-delete",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let iteratorId;

            if (batchRemoveTestCasesFromIteratorRequest !== null && batchRemoveTestCasesFromIteratorRequest !== undefined) {
                if (batchRemoveTestCasesFromIteratorRequest instanceof BatchRemoveTestCasesFromIteratorRequest) {
                    iteratorId = batchRemoveTestCasesFromIteratorRequest.iteratorId;
                    body = batchRemoveTestCasesFromIteratorRequest.body
                } else {
                    iteratorId = batchRemoveTestCasesFromIteratorRequest['iterator_id'];
                    body = batchRemoveTestCasesFromIteratorRequest['body'];
                }
            }

        
            if (iteratorId === null || iteratorId === undefined) {
            throw new RequiredError('iteratorId','Required parameter iteratorId was null or undefined when calling batchRemoveTestCasesFromIterator.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'iterator_id': iteratorId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 在不同分支或者迭代下批量修改用例
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchUpdateTestCasesInDiffVersion(batchUpdateTestCasesInDiffVersionRequest?: BatchUpdateTestCasesInDiffVersionRequest) {
            const options = {
                method: "PUT",
                url: "/v4/batch/update/testcases",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (batchUpdateTestCasesInDiffVersionRequest !== null && batchUpdateTestCasesInDiffVersionRequest !== undefined) {
                if (batchUpdateTestCasesInDiffVersionRequest instanceof BatchUpdateTestCasesInDiffVersionRequest) {
                    body = batchUpdateTestCasesInDiffVersionRequest.body
                } else {
                    body = batchUpdateTestCasesInDiffVersionRequest['body'];
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
         * 批量更新用例属性
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchUpdateVersionTestCases(batchUpdateVersionTestCasesRequest?: BatchUpdateVersionTestCasesRequest) {
            const options = {
                method: "PUT",
                url: "/GT3KServer/v4/{project_id}/testcases/batch-update",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let projectId;

            if (batchUpdateVersionTestCasesRequest !== null && batchUpdateVersionTestCasesRequest !== undefined) {
                if (batchUpdateVersionTestCasesRequest instanceof BatchUpdateVersionTestCasesRequest) {
                    projectId = batchUpdateVersionTestCasesRequest.projectId;
                    body = batchUpdateVersionTestCasesRequest.body
                } else {
                    projectId = batchUpdateVersionTestCasesRequest['project_id'];
                    body = batchUpdateVersionTestCasesRequest['body'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling batchUpdateVersionTestCases.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 检查项目权限
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        checkPermission(checkPermissionRequest?: CheckPermissionRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/permission/{id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let projectId;
            
            let id;

            if (checkPermissionRequest !== null && checkPermissionRequest !== undefined) {
                if (checkPermissionRequest instanceof CheckPermissionRequest) {
                    projectId = checkPermissionRequest.projectId;
                    id = checkPermissionRequest.id;
                } else {
                    projectId = checkPermissionRequest['project_id'];
                    id = checkPermissionRequest['id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling checkPermission.');
            }
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling checkPermission.');
            }

            options.pathParams = { 'project_id': projectId,'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 新增迭代
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createIterator(createIteratorRequest?: CreateIteratorRequest) {
            const options = {
                method: "POST",
                url: "/GT3KServer/v4/iterators",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let branchUri;

            if (createIteratorRequest !== null && createIteratorRequest !== undefined) {
                if (createIteratorRequest instanceof CreateIteratorRequest) {
                    branchUri = createIteratorRequest.branchUri;
                    body = createIteratorRequest.body
                } else {
                    branchUri = createIteratorRequest['branch_uri'];
                    body = createIteratorRequest['body'];
                }
            }

        
            if (branchUri === null || branchUri === undefined) {
                throw new RequiredError('branchUri','Required parameter branchUri was null or undefined when calling createIterator.');
            }
            if (branchUri !== null && branchUri !== undefined) {
                localVarQueryParameter['branch_uri'] = branchUri;
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
    
        /**
         * 项目下创建计划
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createPlan(createPlanRequest?: CreatePlanRequest) {
            const options = {
                method: "POST",
                url: "/v1/projects/{project_id}/plans",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let projectId;

            if (createPlanRequest !== null && createPlanRequest !== undefined) {
                if (createPlanRequest instanceof CreatePlanRequest) {
                    projectId = createPlanRequest.projectId;
                    body = createPlanRequest.body
                } else {
                    projectId = createPlanRequest['project_id'];
                    body = createPlanRequest['body'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling createPlan.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 新增分支
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createProjectBranch(createProjectBranchRequest?: CreateProjectBranchRequest) {
            const options = {
                method: "POST",
                url: "/GT3KServer/v4/branches",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createProjectBranchRequest !== null && createProjectBranchRequest !== undefined) {
                if (createProjectBranchRequest instanceof CreateProjectBranchRequest) {
                    body = createProjectBranchRequest.body
                } else {
                    body = createProjectBranchRequest['body'];
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
         * 添加一个用例和多个需求/缺陷关联关系
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createRelationsByOneCase(createRelationsByOneCaseRequest?: CreateRelationsByOneCaseRequest) {
            const options = {
                method: "POST",
                url: "/testrelation/v4/testcases/{case_id}/relations",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let caseId;

            if (createRelationsByOneCaseRequest !== null && createRelationsByOneCaseRequest !== undefined) {
                if (createRelationsByOneCaseRequest instanceof CreateRelationsByOneCaseRequest) {
                    caseId = createRelationsByOneCaseRequest.caseId;
                    body = createRelationsByOneCaseRequest.body
                } else {
                    caseId = createRelationsByOneCaseRequest['case_id'];
                    body = createRelationsByOneCaseRequest['body'];
                }
            }

        
            if (caseId === null || caseId === undefined) {
            throw new RequiredError('caseId','Required parameter caseId was null or undefined when calling createRelationsByOneCase.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'case_id': caseId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 保存单个自定义报表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createReport(createReportRequest?: CreateReportRequest) {
            const options = {
                method: "POST",
                url: "/GT3KServer/v4/{project_id}/versions/{version_id}/custom-reports",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let projectId;
            
            let versionId;

            if (createReportRequest !== null && createReportRequest !== undefined) {
                if (createReportRequest instanceof CreateReportRequest) {
                    projectId = createReportRequest.projectId;
                    versionId = createReportRequest.versionId;
                    body = createReportRequest.body
                } else {
                    projectId = createReportRequest['project_id'];
                    versionId = createReportRequest['version_id'];
                    body = createReportRequest['body'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling createReport.');
            }
            if (versionId === null || versionId === undefined) {
            throw new RequiredError('versionId','Required parameter versionId was null or undefined when calling createReport.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'project_id': projectId,'version_id': versionId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 生成资源URI
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createResourceUri(createResourceUriRequest?: CreateResourceUriRequest) {
            const options = {
                method: "POST",
                url: "/GT3KServer/v4/{project_id}/resource-uri",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let projectId;

            if (createResourceUriRequest !== null && createResourceUriRequest !== undefined) {
                if (createResourceUriRequest instanceof CreateResourceUriRequest) {
                    projectId = createResourceUriRequest.projectId;
                } else {
                    projectId = createResourceUriRequest['project_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling createResourceUri.');
            }

            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 通过接口CreateService注册成为自定义服务。 注册完成后界面将会出现此自定义测试类型。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createService(createServiceRequest?: CreateServiceRequest) {
            const options = {
                method: "POST",
                url: "/v1/services",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createServiceRequest !== null && createServiceRequest !== undefined) {
                if (createServiceRequest instanceof CreateServiceRequest) {
                    body = createServiceRequest.body
                } else {
                    body = createServiceRequest['body'];
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
         * 初始化测试任务执行记录
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createTaskDefaultResult(createTaskDefaultResultRequest?: CreateTaskDefaultResultRequest) {
            const options = {
                method: "POST",
                url: "/v4/{project_id}/tasks/{task_uri}/results/init",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let projectId;
            
            let taskUri;

            if (createTaskDefaultResultRequest !== null && createTaskDefaultResultRequest !== undefined) {
                if (createTaskDefaultResultRequest instanceof CreateTaskDefaultResultRequest) {
                    projectId = createTaskDefaultResultRequest.projectId;
                    taskUri = createTaskDefaultResultRequest.taskUri;
                    body = createTaskDefaultResultRequest.body
                } else {
                    projectId = createTaskDefaultResultRequest['project_id'];
                    taskUri = createTaskDefaultResultRequest['task_uri'];
                    body = createTaskDefaultResultRequest['body'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling createTaskDefaultResult.');
            }
            if (taskUri === null || taskUri === undefined) {
            throw new RequiredError('taskUri','Required parameter taskUri was null or undefined when calling createTaskDefaultResult.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'project_id': projectId,'task_uri': taskUri, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建自定义测试服务类型用例
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createTestCase(createTestCaseRequest?: CreateTestCaseRequest) {
            const options = {
                method: "POST",
                url: "/v1/projects/{project_id}/testcases",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let projectId;

            if (createTestCaseRequest !== null && createTestCaseRequest !== undefined) {
                if (createTestCaseRequest instanceof CreateTestCaseRequest) {
                    projectId = createTestCaseRequest.projectId;
                    body = createTestCaseRequest.body
                } else {
                    projectId = createTestCaseRequest['project_id'];
                    body = createTestCaseRequest['body'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling createTestCase.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 计划中批量添加测试用例
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createTestCaseInPlan(createTestCaseInPlanRequest?: CreateTestCaseInPlanRequest) {
            const options = {
                method: "POST",
                url: "/v1/projects/{project_id}/plans/{plan_id}/testcases/batch-add",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let projectId;
            
            let planId;

            if (createTestCaseInPlanRequest !== null && createTestCaseInPlanRequest !== undefined) {
                if (createTestCaseInPlanRequest instanceof CreateTestCaseInPlanRequest) {
                    projectId = createTestCaseInPlanRequest.projectId;
                    planId = createTestCaseInPlanRequest.planId;
                    body = createTestCaseInPlanRequest.body
                } else {
                    projectId = createTestCaseInPlanRequest['project_id'];
                    planId = createTestCaseInPlanRequest['plan_id'];
                    body = createTestCaseInPlanRequest['body'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling createTestCaseInPlan.');
            }
            if (planId === null || planId === undefined) {
            throw new RequiredError('planId','Required parameter planId was null or undefined when calling createTestCaseInPlan.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'project_id': projectId,'plan_id': planId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 新增用户自定义URL关键字
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createUserDefinedUrlKeyWord(createUserDefinedUrlKeyWordRequest?: CreateUserDefinedUrlKeyWordRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/basic-aw",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let projectId;

            if (createUserDefinedUrlKeyWordRequest !== null && createUserDefinedUrlKeyWordRequest !== undefined) {
                if (createUserDefinedUrlKeyWordRequest instanceof CreateUserDefinedUrlKeyWordRequest) {
                    projectId = createUserDefinedUrlKeyWordRequest.projectId;
                    body = createUserDefinedUrlKeyWordRequest.body
                } else {
                    projectId = createUserDefinedUrlKeyWordRequest['project_id'];
                    body = createUserDefinedUrlKeyWordRequest['body'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling createUserDefinedUrlKeyWord.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 在分支或者测试计划下创建用例
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createVersionTestCase(createVersionTestCaseRequest?: CreateVersionTestCaseRequest) {
            const options = {
                method: "POST",
                url: "/GT3KServer/v4/versions/{version_id}/testcases",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let versionId;

            if (createVersionTestCaseRequest !== null && createVersionTestCaseRequest !== undefined) {
                if (createVersionTestCaseRequest instanceof CreateVersionTestCaseRequest) {
                    versionId = createVersionTestCaseRequest.versionId;
                    body = createVersionTestCaseRequest.body
                } else {
                    versionId = createVersionTestCaseRequest['version_id'];
                    body = createVersionTestCaseRequest['body'];
                }
            }

        
            if (versionId === null || versionId === undefined) {
            throw new RequiredError('versionId','Required parameter versionId was null or undefined when calling createVersionTestCase.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'version_id': versionId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 融合版本删除单个basicAw
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteBasicAwById(deleteBasicAwByIdRequest?: DeleteBasicAwByIdRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{project_id}/basic-aw/{aw_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let projectId;
            
            let awId;

            if (deleteBasicAwByIdRequest !== null && deleteBasicAwByIdRequest !== undefined) {
                if (deleteBasicAwByIdRequest instanceof DeleteBasicAwByIdRequest) {
                    projectId = deleteBasicAwByIdRequest.projectId;
                    awId = deleteBasicAwByIdRequest.awId;
                } else {
                    projectId = deleteBasicAwByIdRequest['project_id'];
                    awId = deleteBasicAwByIdRequest['aw_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling deleteBasicAwById.');
            }
            if (awId === null || awId === undefined) {
            throw new RequiredError('awId','Required parameter awId was null or undefined when calling deleteBasicAwById.');
            }

            options.pathParams = { 'project_id': projectId,'aw_id': awId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除附件
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteCacheFile(deleteCacheFileRequest?: DeleteCacheFileRequest) {
            const options = {
                method: "DELETE",
                url: "/v4/{project_id}/resources/temp-attachments",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let projectId;
            
            let filePath;
            
            let uri;
            
            let parentUri;
            
            let bakUp;

            if (deleteCacheFileRequest !== null && deleteCacheFileRequest !== undefined) {
                if (deleteCacheFileRequest instanceof DeleteCacheFileRequest) {
                    projectId = deleteCacheFileRequest.projectId;
                    filePath = deleteCacheFileRequest.filePath;
                    uri = deleteCacheFileRequest.uri;
                    parentUri = deleteCacheFileRequest.parentUri;
                    bakUp = deleteCacheFileRequest.bakUp;
                } else {
                    projectId = deleteCacheFileRequest['project_id'];
                    filePath = deleteCacheFileRequest['file_path'];
                    uri = deleteCacheFileRequest['uri'];
                    parentUri = deleteCacheFileRequest['parent_uri'];
                    bakUp = deleteCacheFileRequest['bak_up'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling deleteCacheFile.');
            }
            if (filePath !== null && filePath !== undefined) {
                localVarQueryParameter['file_path'] = filePath;
            }
            if (uri !== null && uri !== undefined) {
                localVarQueryParameter['uri'] = uri;
            }
            if (parentUri !== null && parentUri !== undefined) {
                localVarQueryParameter['parent_uri'] = parentUri;
            }
            if (bakUp !== null && bakUp !== undefined) {
                localVarQueryParameter['bak_up'] = bakUp;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除因子
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteFacotrById(deleteFacotrByIdRequest?: DeleteFacotrByIdRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/factor/{id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let projectId;
            
            let id;

            if (deleteFacotrByIdRequest !== null && deleteFacotrByIdRequest !== undefined) {
                if (deleteFacotrByIdRequest instanceof DeleteFacotrByIdRequest) {
                    projectId = deleteFacotrByIdRequest.projectId;
                    id = deleteFacotrByIdRequest.id;
                } else {
                    projectId = deleteFacotrByIdRequest['project_id'];
                    id = deleteFacotrByIdRequest['id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling deleteFacotrById.');
            }
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling deleteFacotrById.');
            }

            options.pathParams = { 'project_id': projectId,'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除一个用例和多个需求/缺陷关联关系
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteRelationsByOneCase(deleteRelationsByOneCaseRequest?: DeleteRelationsByOneCaseRequest) {
            const options = {
                method: "DELETE",
                url: "/testrelation/v4/testcases/{case_id}/relations",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let caseId;

            if (deleteRelationsByOneCaseRequest !== null && deleteRelationsByOneCaseRequest !== undefined) {
                if (deleteRelationsByOneCaseRequest instanceof DeleteRelationsByOneCaseRequest) {
                    caseId = deleteRelationsByOneCaseRequest.caseId;
                    body = deleteRelationsByOneCaseRequest.body
                } else {
                    caseId = deleteRelationsByOneCaseRequest['case_id'];
                    body = deleteRelationsByOneCaseRequest['body'];
                }
            }

        
            if (caseId === null || caseId === undefined) {
            throw new RequiredError('caseId','Required parameter caseId was null or undefined when calling deleteRelationsByOneCase.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'case_id': caseId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除已注册服务
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteService(deleteServiceRequest?: DeleteServiceRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/services/{service_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let serviceId;

            if (deleteServiceRequest !== null && deleteServiceRequest !== undefined) {
                if (deleteServiceRequest instanceof DeleteServiceRequest) {
                    serviceId = deleteServiceRequest.serviceId;
                } else {
                    serviceId = deleteServiceRequest['service_id'];
                }
            }

        
            if (serviceId === null || serviceId === undefined) {
            throw new RequiredError('serviceId','Required parameter serviceId was null or undefined when calling deleteService.');
            }

            options.pathParams = { 'service_id': serviceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除用例评论
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteTestCaseComment(deleteTestCaseCommentRequest?: DeleteTestCaseCommentRequest) {
            const options = {
                method: "DELETE",
                url: "/GT3KServer/v4/{project_id}/testcases/{testcase_id}/comments/{comment_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let projectId;
            
            let testcaseId;
            
            let commentId;
            
            let versionUri;

            if (deleteTestCaseCommentRequest !== null && deleteTestCaseCommentRequest !== undefined) {
                if (deleteTestCaseCommentRequest instanceof DeleteTestCaseCommentRequest) {
                    projectId = deleteTestCaseCommentRequest.projectId;
                    testcaseId = deleteTestCaseCommentRequest.testcaseId;
                    commentId = deleteTestCaseCommentRequest.commentId;
                    versionUri = deleteTestCaseCommentRequest.versionUri;
                } else {
                    projectId = deleteTestCaseCommentRequest['project_id'];
                    testcaseId = deleteTestCaseCommentRequest['testcase_id'];
                    commentId = deleteTestCaseCommentRequest['comment_id'];
                    versionUri = deleteTestCaseCommentRequest['version_uri'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling deleteTestCaseComment.');
            }
            if (testcaseId === null || testcaseId === undefined) {
            throw new RequiredError('testcaseId','Required parameter testcaseId was null or undefined when calling deleteTestCaseComment.');
            }
            if (commentId === null || commentId === undefined) {
            throw new RequiredError('commentId','Required parameter commentId was null or undefined when calling deleteTestCaseComment.');
            }
            if (versionUri !== null && versionUri !== undefined) {
                localVarQueryParameter['version_uri'] = versionUri;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId,'testcase_id': testcaseId,'comment_id': commentId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除测试报告自定义模块
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteTestReportCustomDetailByUri(deleteTestReportCustomDetailByUriRequest?: DeleteTestReportCustomDetailByUriRequest) {
            const options = {
                method: "DELETE",
                url: "/v4/{project_id}/versions/{version_uri}/test-reports/{report_uri}/custom-infos/{custom_info_uri}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let projectId;
            
            let versionUri;
            
            let reportUri;
            
            let customInfoUri;

            if (deleteTestReportCustomDetailByUriRequest !== null && deleteTestReportCustomDetailByUriRequest !== undefined) {
                if (deleteTestReportCustomDetailByUriRequest instanceof DeleteTestReportCustomDetailByUriRequest) {
                    projectId = deleteTestReportCustomDetailByUriRequest.projectId;
                    versionUri = deleteTestReportCustomDetailByUriRequest.versionUri;
                    reportUri = deleteTestReportCustomDetailByUriRequest.reportUri;
                    customInfoUri = deleteTestReportCustomDetailByUriRequest.customInfoUri;
                } else {
                    projectId = deleteTestReportCustomDetailByUriRequest['project_id'];
                    versionUri = deleteTestReportCustomDetailByUriRequest['version_uri'];
                    reportUri = deleteTestReportCustomDetailByUriRequest['report_uri'];
                    customInfoUri = deleteTestReportCustomDetailByUriRequest['custom_info_uri'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling deleteTestReportCustomDetailByUri.');
            }
            if (versionUri === null || versionUri === undefined) {
            throw new RequiredError('versionUri','Required parameter versionUri was null or undefined when calling deleteTestReportCustomDetailByUri.');
            }
            if (reportUri === null || reportUri === undefined) {
            throw new RequiredError('reportUri','Required parameter reportUri was null or undefined when calling deleteTestReportCustomDetailByUri.');
            }
            if (customInfoUri === null || customInfoUri === undefined) {
            throw new RequiredError('customInfoUri','Required parameter customInfoUri was null or undefined when calling deleteTestReportCustomDetailByUri.');
            }

            options.pathParams = { 'project_id': projectId,'version_uri': versionUri,'report_uri': reportUri,'custom_info_uri': customInfoUri, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询告警统计数据
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAlarmStatisticsUsing(listAlarmStatisticsUsingRequest?: ListAlarmStatisticsUsingRequest) {
            const options = {
                method: "POST",
                url: "/v1/projects/{service_id}/dashboards/alarm/statistics",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let serviceId;

            if (listAlarmStatisticsUsingRequest !== null && listAlarmStatisticsUsingRequest !== undefined) {
                if (listAlarmStatisticsUsingRequest instanceof ListAlarmStatisticsUsingRequest) {
                    serviceId = listAlarmStatisticsUsingRequest.serviceId;
                    body = listAlarmStatisticsUsingRequest.body
                } else {
                    serviceId = listAlarmStatisticsUsingRequest['service_id'];
                    body = listAlarmStatisticsUsingRequest['body'];
                }
            }

        
            if (serviceId === null || serviceId === undefined) {
            throw new RequiredError('serviceId','Required parameter serviceId was null or undefined when calling listAlarmStatisticsUsing.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'service_id': serviceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询告警组列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAlertGroupsByCondition(listAlertGroupsByConditionRequest?: ListAlertGroupsByConditionRequest) {
            const options = {
                method: "POST",
                url: "/v1/projects/{service_id}/alert/group/users",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let serviceId;

            if (listAlertGroupsByConditionRequest !== null && listAlertGroupsByConditionRequest !== undefined) {
                if (listAlertGroupsByConditionRequest instanceof ListAlertGroupsByConditionRequest) {
                    serviceId = listAlertGroupsByConditionRequest.serviceId;
                    body = listAlertGroupsByConditionRequest.body
                } else {
                    serviceId = listAlertGroupsByConditionRequest['service_id'];
                    body = listAlertGroupsByConditionRequest['body'];
                }
            }

        
            if (serviceId === null || serviceId === undefined) {
            throw new RequiredError('serviceId','Required parameter serviceId was null or undefined when calling listAlertGroupsByCondition.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'service_id': serviceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询告警模板
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAlertTemplates(listAlertTemplatesRequest?: ListAlertTemplatesRequest) {
            const options = {
                method: "GET",
                url: "/v1/projects/{service_id}/alert-templates",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let serviceId;
            
            let name;
            
            let pageNum;
            
            let pageSize;

            if (listAlertTemplatesRequest !== null && listAlertTemplatesRequest !== undefined) {
                if (listAlertTemplatesRequest instanceof ListAlertTemplatesRequest) {
                    serviceId = listAlertTemplatesRequest.serviceId;
                    name = listAlertTemplatesRequest.name;
                    pageNum = listAlertTemplatesRequest.pageNum;
                    pageSize = listAlertTemplatesRequest.pageSize;
                } else {
                    serviceId = listAlertTemplatesRequest['service_id'];
                    name = listAlertTemplatesRequest['name'];
                    pageNum = listAlertTemplatesRequest['pageNum'];
                    pageSize = listAlertTemplatesRequest['pageSize'];
                }
            }

        
            if (serviceId === null || serviceId === undefined) {
            throw new RequiredError('serviceId','Required parameter serviceId was null or undefined when calling listAlertTemplates.');
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (pageNum !== null && pageNum !== undefined) {
                localVarQueryParameter['pageNum'] = pageNum;
            }
            if (pageSize !== null && pageSize !== undefined) {
                localVarQueryParameter['pageSize'] = pageSize;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'service_id': serviceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取分支列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAllBranches(listAllBranchesRequest?: ListAllBranchesRequest) {
            const options = {
                method: "GET",
                url: "/GT3KServer/v4/branches",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let projectUuid;
            
            let sortField;
            
            let sortType;

            if (listAllBranchesRequest !== null && listAllBranchesRequest !== undefined) {
                if (listAllBranchesRequest instanceof ListAllBranchesRequest) {
                    projectUuid = listAllBranchesRequest.projectUuid;
                    sortField = listAllBranchesRequest.sortField;
                    sortType = listAllBranchesRequest.sortType;
                } else {
                    projectUuid = listAllBranchesRequest['project_uuid'];
                    sortField = listAllBranchesRequest['sort_field'];
                    sortType = listAllBranchesRequest['sort_type'];
                }
            }

        
            if (projectUuid === null || projectUuid === undefined) {
                throw new RequiredError('projectUuid','Required parameter projectUuid was null or undefined when calling listAllBranches.');
            }
            if (projectUuid !== null && projectUuid !== undefined) {
                localVarQueryParameter['project_uuid'] = projectUuid;
            }
            if (sortField !== null && sortField !== undefined) {
                localVarQueryParameter['sort_field'] = sortField;
            }
            if (sortType !== null && sortType !== undefined) {
                localVarQueryParameter['sort_type'] = sortType;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询任务告警信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAllConfigItemByType(listAllConfigItemByTypeRequest?: ListAllConfigItemByTypeRequest) {
            const options = {
                method: "POST",
                url: "/v1/projects/{service_id}/service/configs",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let serviceId;

            if (listAllConfigItemByTypeRequest !== null && listAllConfigItemByTypeRequest !== undefined) {
                if (listAllConfigItemByTypeRequest instanceof ListAllConfigItemByTypeRequest) {
                    serviceId = listAllConfigItemByTypeRequest.serviceId;
                    body = listAllConfigItemByTypeRequest.body
                } else {
                    serviceId = listAllConfigItemByTypeRequest['service_id'];
                    body = listAllConfigItemByTypeRequest['body'];
                }
            }

        
            if (serviceId === null || serviceId === undefined) {
            throw new RequiredError('serviceId','Required parameter serviceId was null or undefined when calling listAllConfigItemByType.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'service_id': serviceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询项目下所有迭代计划
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAllIterators(listAllIteratorsRequest?: ListAllIteratorsRequest) {
            const options = {
                method: "GET",
                url: "/GT3KServer/v4/projects/{project_id}/iterator-infos",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let projectId;

            if (listAllIteratorsRequest !== null && listAllIteratorsRequest !== undefined) {
                if (listAllIteratorsRequest instanceof ListAllIteratorsRequest) {
                    projectId = listAllIteratorsRequest.projectId;
                } else {
                    projectId = listAllIteratorsRequest['project_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling listAllIterators.');
            }

            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询用例列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAllTestCases(listAllTestCasesRequest?: ListAllTestCasesRequest) {
            const options = {
                method: "POST",
                url: "/GT3KServer/v4/{project_id}/testcases/batch-query",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let projectId;

            if (listAllTestCasesRequest !== null && listAllTestCasesRequest !== undefined) {
                if (listAllTestCasesRequest instanceof ListAllTestCasesRequest) {
                    projectId = listAllTestCasesRequest.projectId;
                    body = listAllTestCasesRequest.body
                } else {
                    projectId = listAllTestCasesRequest['project_id'];
                    body = listAllTestCasesRequest['body'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling listAllTestCases.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询附件列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAttachments(listAttachmentsRequest?: ListAttachmentsRequest) {
            const options = {
                method: "GET",
                url: "/GT3KServer/v4/{project_id}/resources/{resource_uri}/attachments",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let projectId;
            
            let resourceUri;
            
            let resourceType;

            if (listAttachmentsRequest !== null && listAttachmentsRequest !== undefined) {
                if (listAttachmentsRequest instanceof ListAttachmentsRequest) {
                    projectId = listAttachmentsRequest.projectId;
                    resourceUri = listAttachmentsRequest.resourceUri;
                    resourceType = listAttachmentsRequest.resourceType;
                } else {
                    projectId = listAttachmentsRequest['project_id'];
                    resourceUri = listAttachmentsRequest['resource_uri'];
                    resourceType = listAttachmentsRequest['resource_type'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling listAttachments.');
            }
            if (resourceUri === null || resourceUri === undefined) {
            throw new RequiredError('resourceUri','Required parameter resourceUri was null or undefined when calling listAttachments.');
            }
            if (resourceType === null || resourceType === undefined) {
                throw new RequiredError('resourceType','Required parameter resourceType was null or undefined when calling listAttachments.');
            }
            if (resourceType !== null && resourceType !== undefined) {
                localVarQueryParameter['resource_type'] = resourceType;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId,'resource_uri': resourceUri, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取当前局点功能是否开启
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAvailableConfig(listAvailableConfigRequest?: ListAvailableConfigRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/available/config",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let projectId;

            if (listAvailableConfigRequest !== null && listAvailableConfigRequest !== undefined) {
                if (listAvailableConfigRequest instanceof ListAvailableConfigRequest) {
                    projectId = listAvailableConfigRequest.projectId;
                } else {
                    projectId = listAvailableConfigRequest['project_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling listAvailableConfig.');
            }

            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据id获取单个basicAW信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listBasicAw(listBasicAwRequest?: ListBasicAwRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/basic-aw/{aw_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let projectId;
            
            let awId;

            if (listBasicAwRequest !== null && listBasicAwRequest !== undefined) {
                if (listBasicAwRequest instanceof ListBasicAwRequest) {
                    projectId = listBasicAwRequest.projectId;
                    awId = listBasicAwRequest.awId;
                } else {
                    projectId = listBasicAwRequest['project_id'];
                    awId = listBasicAwRequest['aw_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling listBasicAw.');
            }
            if (awId === null || awId === undefined) {
            throw new RequiredError('awId','Required parameter awId was null or undefined when calling listBasicAw.');
            }

            options.pathParams = { 'project_id': projectId,'aw_id': awId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 分页获取工程BasicAW列表（含目录）
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listBasicAwInfoListSupportsSearch(listBasicAwInfoListSupportsSearchRequest?: ListBasicAwInfoListSupportsSearchRequest) {
            const options = {
                method: "POST",
                url: "/v4/{project_id}/aw-cata/aw-info-list",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let projectId;
            
            let pageNo;
            
            let pageSize;
            
            let parentId;

            if (listBasicAwInfoListSupportsSearchRequest !== null && listBasicAwInfoListSupportsSearchRequest !== undefined) {
                if (listBasicAwInfoListSupportsSearchRequest instanceof ListBasicAwInfoListSupportsSearchRequest) {
                    projectId = listBasicAwInfoListSupportsSearchRequest.projectId;
                    pageNo = listBasicAwInfoListSupportsSearchRequest.pageNo;
                    pageSize = listBasicAwInfoListSupportsSearchRequest.pageSize;
                    body = listBasicAwInfoListSupportsSearchRequest.body
                    parentId = listBasicAwInfoListSupportsSearchRequest.parentId;
                } else {
                    projectId = listBasicAwInfoListSupportsSearchRequest['project_id'];
                    pageNo = listBasicAwInfoListSupportsSearchRequest['page_no'];
                    pageSize = listBasicAwInfoListSupportsSearchRequest['page_size'];
                    body = listBasicAwInfoListSupportsSearchRequest['body'];
                    parentId = listBasicAwInfoListSupportsSearchRequest['parent_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling listBasicAwInfoListSupportsSearch.');
            }
            if (pageNo === null || pageNo === undefined) {
                throw new RequiredError('pageNo','Required parameter pageNo was null or undefined when calling listBasicAwInfoListSupportsSearch.');
            }
            if (pageNo !== null && pageNo !== undefined) {
                localVarQueryParameter['page_no'] = pageNo;
            }
            if (pageSize === null || pageSize === undefined) {
                throw new RequiredError('pageSize','Required parameter pageSize was null or undefined when calling listBasicAwInfoListSupportsSearch.');
            }
            if (pageSize !== null && pageSize !== undefined) {
                localVarQueryParameter['page_size'] = pageSize;
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (parentId !== null && parentId !== undefined) {
                localVarQueryParameter['parent_id'] = parentId;
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取分支列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listBranches(listBranchesRequest?: ListBranchesRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/branches",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let projectId;
            
            let offset;
            
            let limit;
            
            let sortField;
            
            let sortType;

            if (listBranchesRequest !== null && listBranchesRequest !== undefined) {
                if (listBranchesRequest instanceof ListBranchesRequest) {
                    projectId = listBranchesRequest.projectId;
                    offset = listBranchesRequest.offset;
                    limit = listBranchesRequest.limit;
                    sortField = listBranchesRequest.sortField;
                    sortType = listBranchesRequest.sortType;
                } else {
                    projectId = listBranchesRequest['project_id'];
                    offset = listBranchesRequest['offset'];
                    limit = listBranchesRequest['limit'];
                    sortField = listBranchesRequest['sort_field'];
                    sortType = listBranchesRequest['sort_type'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling listBranches.');
            }
            if (offset === null || offset === undefined) {
                throw new RequiredError('offset','Required parameter offset was null or undefined when calling listBranches.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit === null || limit === undefined) {
                throw new RequiredError('limit','Required parameter limit was null or undefined when calling listBranches.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (sortField !== null && sortField !== undefined) {
                localVarQueryParameter['sort_field'] = sortField;
            }
            if (sortType !== null && sortType !== undefined) {
                localVarQueryParameter['sort_type'] = sortType;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 批量获取用例状态
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listCasesStatus(listCasesStatusRequest?: ListCasesStatusRequest) {
            const options = {
                method: "POST",
                url: "/v2/querycasestatus",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let testServiceId;

            if (listCasesStatusRequest !== null && listCasesStatusRequest !== undefined) {
                if (listCasesStatusRequest instanceof ListCasesStatusRequest) {
                    testServiceId = listCasesStatusRequest.testServiceId;
                    body = listCasesStatusRequest.body
                } else {
                    testServiceId = listCasesStatusRequest['testServiceId'];
                    body = listCasesStatusRequest['body'];
                }
            }

        
            if (testServiceId === null || testServiceId === undefined) {
                throw new RequiredError('testServiceId','Required parameter testServiceId was null or undefined when calling listCasesStatus.');
            }
            if (testServiceId !== null && testServiceId !== undefined) {
                localVarQueryParameter['testServiceId'] = testServiceId;
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
    
        /**
         * 查询当前租户可见的第三方服务列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listDomainVisibleServices(listDomainVisibleServicesRequest?: ListDomainVisibleServicesRequest) {
            const options = {
                method: "GET",
                url: "/GT3KServer/v4/{project_id}/visible-services",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let projectId;

            if (listDomainVisibleServicesRequest !== null && listDomainVisibleServicesRequest !== undefined) {
                if (listDomainVisibleServicesRequest instanceof ListDomainVisibleServicesRequest) {
                    projectId = listDomainVisibleServicesRequest.projectId;
                } else {
                    projectId = listDomainVisibleServicesRequest['project_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling listDomainVisibleServices.');
            }

            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询需求树
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listIssueTree(listIssueTreeRequest?: ListIssueTreeRequest) {
            const options = {
                method: "POST",
                url: "/GT3KServer/v4/{project_id}/versions/{version_id}/issue-tree",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let projectId;
            
            let versionId;

            if (listIssueTreeRequest !== null && listIssueTreeRequest !== undefined) {
                if (listIssueTreeRequest instanceof ListIssueTreeRequest) {
                    projectId = listIssueTreeRequest.projectId;
                    versionId = listIssueTreeRequest.versionId;
                    body = listIssueTreeRequest.body
                } else {
                    projectId = listIssueTreeRequest['project_id'];
                    versionId = listIssueTreeRequest['version_id'];
                    body = listIssueTreeRequest['body'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling listIssueTree.');
            }
            if (versionId === null || versionId === undefined) {
            throw new RequiredError('versionId','Required parameter versionId was null or undefined when calling listIssueTree.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'project_id': projectId,'version_id': versionId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询迭代关联的需求列表或树
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listIteratorIssueTree(listIteratorIssueTreeRequest?: ListIteratorIssueTreeRequest) {
            const options = {
                method: "POST",
                url: "/GT3KServer/v4/{project_id}/iterators/{iterator_id}/issues/batch-query",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let projectId;
            
            let iteratorId;

            if (listIteratorIssueTreeRequest !== null && listIteratorIssueTreeRequest !== undefined) {
                if (listIteratorIssueTreeRequest instanceof ListIteratorIssueTreeRequest) {
                    projectId = listIteratorIssueTreeRequest.projectId;
                    iteratorId = listIteratorIssueTreeRequest.iteratorId;
                    body = listIteratorIssueTreeRequest.body
                } else {
                    projectId = listIteratorIssueTreeRequest['project_id'];
                    iteratorId = listIteratorIssueTreeRequest['iterator_id'];
                    body = listIteratorIssueTreeRequest['body'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling listIteratorIssueTree.');
            }
            if (iteratorId === null || iteratorId === undefined) {
            throw new RequiredError('iteratorId','Required parameter iteratorId was null or undefined when calling listIteratorIssueTree.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'project_id': projectId,'iterator_id': iteratorId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询迭代计划列表，包含统计信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listIterators(listIteratorsRequest?: ListIteratorsRequest) {
            const options = {
                method: "POST",
                url: "/GT3KServer/v4/iterators/batch-query",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (listIteratorsRequest !== null && listIteratorsRequest !== undefined) {
                if (listIteratorsRequest instanceof ListIteratorsRequest) {
                    body = listIteratorsRequest.body
                } else {
                    body = listIteratorsRequest['body'];
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
         * 查询迭代计划列表，包含统计信息，对版本强校验
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listIteratorsInfo(listIteratorsInfoRequest?: ListIteratorsInfoRequest) {
            const options = {
                method: "POST",
                url: "/v4/iterators/info/batch-query",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (listIteratorsInfoRequest !== null && listIteratorsInfoRequest !== undefined) {
                if (listIteratorsInfoRequest instanceof ListIteratorsInfoRequest) {
                    body = listIteratorsInfoRequest.body
                } else {
                    body = listIteratorsInfoRequest['body'];
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
         * 查询仪表盘折线图数据
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listLinesUsing(listLinesUsingRequest?: ListLinesUsingRequest) {
            const options = {
                method: "POST",
                url: "/v2/projects/{service_id}/dashboards/lines",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let serviceId;

            if (listLinesUsingRequest !== null && listLinesUsingRequest !== undefined) {
                if (listLinesUsingRequest instanceof ListLinesUsingRequest) {
                    serviceId = listLinesUsingRequest.serviceId;
                    body = listLinesUsingRequest.body
                } else {
                    serviceId = listLinesUsingRequest['service_id'];
                    body = listLinesUsingRequest['body'];
                }
            }

        
            if (serviceId === null || serviceId === undefined) {
            throw new RequiredError('serviceId','Required parameter serviceId was null or undefined when calling listLinesUsing.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'service_id': serviceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 成功返回MsgInfo的详细信息列表，返回值为Model的List
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listMsgInfosUsing(listMsgInfosUsingRequest?: ListMsgInfosUsingRequest) {
            const options = {
                method: "POST",
                url: "/v2/projects/{service_id}/dashboards/alarm/msgs",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let serviceId;

            if (listMsgInfosUsingRequest !== null && listMsgInfosUsingRequest !== undefined) {
                if (listMsgInfosUsingRequest instanceof ListMsgInfosUsingRequest) {
                    serviceId = listMsgInfosUsingRequest.serviceId;
                    body = listMsgInfosUsingRequest.body
                } else {
                    serviceId = listMsgInfosUsingRequest['service_id'];
                    body = listMsgInfosUsingRequest['body'];
                }
            }

        
            if (serviceId === null || serviceId === undefined) {
            throw new RequiredError('serviceId','Required parameter serviceId was null or undefined when calling listMsgInfosUsing.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'service_id': serviceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取责任人是自己的测试用例
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listOwnTestCases(listOwnTestCasesRequest?: ListOwnTestCasesRequest) {
            const options = {
                method: "GET",
                url: "/GT3KServer/v4/current-user/testcases",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let pageNo;
            
            let pageSize;
            
            let sortField;
            
            let sortType;
            
            let keyword;

            if (listOwnTestCasesRequest !== null && listOwnTestCasesRequest !== undefined) {
                if (listOwnTestCasesRequest instanceof ListOwnTestCasesRequest) {
                    pageNo = listOwnTestCasesRequest.pageNo;
                    pageSize = listOwnTestCasesRequest.pageSize;
                    sortField = listOwnTestCasesRequest.sortField;
                    sortType = listOwnTestCasesRequest.sortType;
                    keyword = listOwnTestCasesRequest.keyword;
                } else {
                    pageNo = listOwnTestCasesRequest['page_no'];
                    pageSize = listOwnTestCasesRequest['page_size'];
                    sortField = listOwnTestCasesRequest['sort_field'];
                    sortType = listOwnTestCasesRequest['sort_type'];
                    keyword = listOwnTestCasesRequest['keyword'];
                }
            }

        
            if (pageNo === null || pageNo === undefined) {
                throw new RequiredError('pageNo','Required parameter pageNo was null or undefined when calling listOwnTestCases.');
            }
            if (pageNo !== null && pageNo !== undefined) {
                localVarQueryParameter['page_no'] = pageNo;
            }
            if (pageSize === null || pageSize === undefined) {
                throw new RequiredError('pageSize','Required parameter pageSize was null or undefined when calling listOwnTestCases.');
            }
            if (pageSize !== null && pageSize !== undefined) {
                localVarQueryParameter['page_size'] = pageSize;
            }
            if (sortField !== null && sortField !== undefined) {
                localVarQueryParameter['sort_field'] = sortField;
            }
            if (sortType !== null && sortType !== undefined) {
                localVarQueryParameter['sort_type'] = sortType;
            }
            if (keyword !== null && keyword !== undefined) {
                localVarQueryParameter['keyword'] = keyword;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询项目字段配置
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listProjectFieldConfigs(listProjectFieldConfigsRequest?: ListProjectFieldConfigsRequest) {
            const options = {
                method: "GET",
                url: "/GT3KServer/v4/projects/{project_id}/field-configs",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let projectId;

            if (listProjectFieldConfigsRequest !== null && listProjectFieldConfigsRequest !== undefined) {
                if (listProjectFieldConfigsRequest instanceof ListProjectFieldConfigsRequest) {
                    projectId = listProjectFieldConfigsRequest.projectId;
                } else {
                    projectId = listProjectFieldConfigsRequest['project_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling listProjectFieldConfigs.');
            }

            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取项目测试用例自定义字段列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listProjectTestCaseFields(listProjectTestCaseFieldsRequest?: ListProjectTestCaseFieldsRequest) {
            const options = {
                method: "GET",
                url: "/GT3KServer/v4/{project_id}/testcase/field/batch-query",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let projectId;

            if (listProjectTestCaseFieldsRequest !== null && listProjectTestCaseFieldsRequest !== undefined) {
                if (listProjectTestCaseFieldsRequest instanceof ListProjectTestCaseFieldsRequest) {
                    projectId = listProjectTestCaseFieldsRequest.projectId;
                } else {
                    projectId = listProjectTestCaseFieldsRequest['project_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling listProjectTestCaseFields.');
            }

            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取工程关联的公共aw信息和公共aw所属公共aw库信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listPublicLibAndAws(listPublicLibAndAwsRequest?: ListPublicLibAndAwsRequest) {
            const options = {
                method: "GET",
                url: "/v1/project/{project_id}/public_aw_lib_and_aws",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let projectId;

            if (listPublicLibAndAwsRequest !== null && listPublicLibAndAwsRequest !== undefined) {
                if (listPublicLibAndAwsRequest instanceof ListPublicLibAndAwsRequest) {
                    projectId = listPublicLibAndAwsRequest.projectId;
                } else {
                    projectId = listPublicLibAndAwsRequest['project_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling listPublicLibAndAws.');
            }

            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 页面报表展示
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listReports(listReportsRequest?: ListReportsRequest) {
            const options = {
                method: "GET",
                url: "/testreport/v4/{project_id}/versions/{version_id}/custom-reports",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let projectId;
            
            let pageSize;
            
            let offset;
            
            let versionId;
            
            let type;

            if (listReportsRequest !== null && listReportsRequest !== undefined) {
                if (listReportsRequest instanceof ListReportsRequest) {
                    projectId = listReportsRequest.projectId;
                    pageSize = listReportsRequest.pageSize;
                    offset = listReportsRequest.offset;
                    versionId = listReportsRequest.versionId;
                    type = listReportsRequest.type;
                } else {
                    projectId = listReportsRequest['project_id'];
                    pageSize = listReportsRequest['page_size'];
                    offset = listReportsRequest['offset'];
                    versionId = listReportsRequest['version_id'];
                    type = listReportsRequest['type'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling listReports.');
            }
            if (pageSize === null || pageSize === undefined) {
                throw new RequiredError('pageSize','Required parameter pageSize was null or undefined when calling listReports.');
            }
            if (pageSize !== null && pageSize !== undefined) {
                localVarQueryParameter['page_size'] = pageSize;
            }
            if (offset === null || offset === undefined) {
                throw new RequiredError('offset','Required parameter offset was null or undefined when calling listReports.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (versionId === null || versionId === undefined) {
            throw new RequiredError('versionId','Required parameter versionId was null or undefined when calling listReports.');
            }
            if (type === null || type === undefined) {
                throw new RequiredError('type','Required parameter type was null or undefined when calling listReports.');
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId,'version_id': versionId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取资源池列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listResourcePools(listResourcePoolsRequest?: ListResourcePoolsRequest) {
            const options = {
                method: "GET",
                url: "/testexecutor/v4/{project_id}/resource-pools",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let projectId;

            if (listResourcePoolsRequest !== null && listResourcePoolsRequest !== undefined) {
                if (listResourcePoolsRequest instanceof ListResourcePoolsRequest) {
                    projectId = listResourcePoolsRequest.projectId;
                } else {
                    projectId = listResourcePoolsRequest['project_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling listResourcePools.');
            }

            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询仪表盘散点图数据
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listScattersUsing(listScattersUsingRequest?: ListScattersUsingRequest) {
            const options = {
                method: "POST",
                url: "/v2/projects/{service_id}/dashboards/scatters",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let serviceId;

            if (listScattersUsingRequest !== null && listScattersUsingRequest !== undefined) {
                if (listScattersUsingRequest instanceof ListScattersUsingRequest) {
                    serviceId = listScattersUsingRequest.serviceId;
                    body = listScattersUsingRequest.body
                } else {
                    serviceId = listScattersUsingRequest['service_id'];
                    body = listScattersUsingRequest['body'];
                }
            }

        
            if (serviceId === null || serviceId === undefined) {
            throw new RequiredError('serviceId','Required parameter serviceId was null or undefined when calling listScattersUsing.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'service_id': serviceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 成功返回子任务用例数据积压信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listSubTaskCaseOverstockUsing(listSubTaskCaseOverstockUsingRequest?: ListSubTaskCaseOverstockUsingRequest) {
            const options = {
                method: "GET",
                url: "/v1/projects/{service_id}/dashboard/statistic/block",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let serviceId;
            
            let startTime;
            
            let endTime;
            
            let label;
            
            let executorType;
            
            let locationId;
            
            let pageNum;
            
            let pageSize;

            if (listSubTaskCaseOverstockUsingRequest !== null && listSubTaskCaseOverstockUsingRequest !== undefined) {
                if (listSubTaskCaseOverstockUsingRequest instanceof ListSubTaskCaseOverstockUsingRequest) {
                    serviceId = listSubTaskCaseOverstockUsingRequest.serviceId;
                    startTime = listSubTaskCaseOverstockUsingRequest.startTime;
                    endTime = listSubTaskCaseOverstockUsingRequest.endTime;
                    label = listSubTaskCaseOverstockUsingRequest.label;
                    executorType = listSubTaskCaseOverstockUsingRequest.executorType;
                    locationId = listSubTaskCaseOverstockUsingRequest.locationId;
                    pageNum = listSubTaskCaseOverstockUsingRequest.pageNum;
                    pageSize = listSubTaskCaseOverstockUsingRequest.pageSize;
                } else {
                    serviceId = listSubTaskCaseOverstockUsingRequest['service_id'];
                    startTime = listSubTaskCaseOverstockUsingRequest['startTime'];
                    endTime = listSubTaskCaseOverstockUsingRequest['endTime'];
                    label = listSubTaskCaseOverstockUsingRequest['label'];
                    executorType = listSubTaskCaseOverstockUsingRequest['executorType'];
                    locationId = listSubTaskCaseOverstockUsingRequest['locationId'];
                    pageNum = listSubTaskCaseOverstockUsingRequest['pageNum'];
                    pageSize = listSubTaskCaseOverstockUsingRequest['pageSize'];
                }
            }

        
            if (serviceId === null || serviceId === undefined) {
            throw new RequiredError('serviceId','Required parameter serviceId was null or undefined when calling listSubTaskCaseOverstockUsing.');
            }
            if (startTime === null || startTime === undefined) {
                throw new RequiredError('startTime','Required parameter startTime was null or undefined when calling listSubTaskCaseOverstockUsing.');
            }
            if (startTime !== null && startTime !== undefined) {
                localVarQueryParameter['startTime'] = startTime;
            }
            if (endTime === null || endTime === undefined) {
                throw new RequiredError('endTime','Required parameter endTime was null or undefined when calling listSubTaskCaseOverstockUsing.');
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['endTime'] = endTime;
            }
            if (label === null || label === undefined) {
                throw new RequiredError('label','Required parameter label was null or undefined when calling listSubTaskCaseOverstockUsing.');
            }
            if (label !== null && label !== undefined) {
                localVarQueryParameter['label'] = label;
            }
            if (executorType !== null && executorType !== undefined) {
                localVarQueryParameter['executorType'] = executorType;
            }
            if (locationId !== null && locationId !== undefined) {
                localVarQueryParameter['locationId'] = locationId;
            }
            if (pageNum !== null && pageNum !== undefined) {
                localVarQueryParameter['pageNum'] = pageNum;
            }
            if (pageSize !== null && pageSize !== undefined) {
                localVarQueryParameter['pageSize'] = pageSize;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'service_id': serviceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取测试套关联用例详情
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listTaskAssignCases(listTaskAssignCasesRequest?: ListTaskAssignCasesRequest) {
            const options = {
                method: "POST",
                url: "/GT3KServer/v4/{project_id}/tasks/{task_id}/testcases/batch-query",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let projectId;
            
            let taskId;

            if (listTaskAssignCasesRequest !== null && listTaskAssignCasesRequest !== undefined) {
                if (listTaskAssignCasesRequest instanceof ListTaskAssignCasesRequest) {
                    projectId = listTaskAssignCasesRequest.projectId;
                    taskId = listTaskAssignCasesRequest.taskId;
                    body = listTaskAssignCasesRequest.body
                } else {
                    projectId = listTaskAssignCasesRequest['project_id'];
                    taskId = listTaskAssignCasesRequest['task_id'];
                    body = listTaskAssignCasesRequest['body'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling listTaskAssignCases.');
            }
            if (taskId === null || taskId === undefined) {
            throw new RequiredError('taskId','Required parameter taskId was null or undefined when calling listTaskAssignCases.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'project_id': projectId,'task_id': taskId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询单次测试套执行的详细结果
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listTaskResultsDetail(listTaskResultsDetailRequest?: ListTaskResultsDetailRequest) {
            const options = {
                method: "GET",
                url: "/v4/{project_uuid}/tasks/{task_uri}/results/{result_uri}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let projectUuid;
            
            let taskUri;
            
            let resultUri;
            
            let pageNo;
            
            let pageSize;
            
            let result;

            if (listTaskResultsDetailRequest !== null && listTaskResultsDetailRequest !== undefined) {
                if (listTaskResultsDetailRequest instanceof ListTaskResultsDetailRequest) {
                    projectUuid = listTaskResultsDetailRequest.projectUuid;
                    taskUri = listTaskResultsDetailRequest.taskUri;
                    resultUri = listTaskResultsDetailRequest.resultUri;
                    pageNo = listTaskResultsDetailRequest.pageNo;
                    pageSize = listTaskResultsDetailRequest.pageSize;
                    result = listTaskResultsDetailRequest.result;
                } else {
                    projectUuid = listTaskResultsDetailRequest['project_uuid'];
                    taskUri = listTaskResultsDetailRequest['task_uri'];
                    resultUri = listTaskResultsDetailRequest['result_uri'];
                    pageNo = listTaskResultsDetailRequest['page_no'];
                    pageSize = listTaskResultsDetailRequest['page_size'];
                    result = listTaskResultsDetailRequest['result'];
                }
            }

        
            if (projectUuid === null || projectUuid === undefined) {
            throw new RequiredError('projectUuid','Required parameter projectUuid was null or undefined when calling listTaskResultsDetail.');
            }
            if (taskUri === null || taskUri === undefined) {
            throw new RequiredError('taskUri','Required parameter taskUri was null or undefined when calling listTaskResultsDetail.');
            }
            if (resultUri === null || resultUri === undefined) {
            throw new RequiredError('resultUri','Required parameter resultUri was null or undefined when calling listTaskResultsDetail.');
            }
            if (pageNo === null || pageNo === undefined) {
                throw new RequiredError('pageNo','Required parameter pageNo was null or undefined when calling listTaskResultsDetail.');
            }
            if (pageNo !== null && pageNo !== undefined) {
                localVarQueryParameter['page_no'] = pageNo;
            }
            if (pageSize === null || pageSize === undefined) {
                throw new RequiredError('pageSize','Required parameter pageSize was null or undefined when calling listTaskResultsDetail.');
            }
            if (pageSize !== null && pageSize !== undefined) {
                localVarQueryParameter['page_size'] = pageSize;
            }
            if (result !== null && result !== undefined) {
                localVarQueryParameter['result'] = result;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_uuid': projectUuid,'task_uri': taskUri,'result_uri': resultUri, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询用例关联的测试任务列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listTaskTestCases(listTaskTestCasesRequest?: ListTaskTestCasesRequest) {
            const options = {
                method: "POST",
                url: "/GT3KServer/v4/{project_id}/testcases/tasks/batch-query",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let projectId;

            if (listTaskTestCasesRequest !== null && listTaskTestCasesRequest !== undefined) {
                if (listTaskTestCasesRequest instanceof ListTaskTestCasesRequest) {
                    projectId = listTaskTestCasesRequest.projectId;
                    body = listTaskTestCasesRequest.body
                } else {
                    projectId = listTaskTestCasesRequest['project_id'];
                    body = listTaskTestCasesRequest['body'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling listTaskTestCases.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询测试任务列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listTasks(listTasksRequest?: ListTasksRequest) {
            const options = {
                method: "POST",
                url: "/GT3KServer/v4/{project_id}/versions/{version_id}/tasks/batch-query",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let projectId;
            
            let versionId;

            if (listTasksRequest !== null && listTasksRequest !== undefined) {
                if (listTasksRequest instanceof ListTasksRequest) {
                    projectId = listTasksRequest.projectId;
                    versionId = listTasksRequest.versionId;
                    body = listTasksRequest.body
                } else {
                    projectId = listTasksRequest['project_id'];
                    versionId = listTasksRequest['version_id'];
                    body = listTasksRequest['body'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling listTasks.');
            }
            if (versionId === null || versionId === undefined) {
            throw new RequiredError('versionId','Required parameter versionId was null or undefined when calling listTasks.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'project_id': projectId,'version_id': versionId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询用例评论
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listTestCaseComments(listTestCaseCommentsRequest?: ListTestCaseCommentsRequest) {
            const options = {
                method: "GET",
                url: "/GT3KServer/v4/{project_id}/testcases/{testcase_id}/comments",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let projectId;
            
            let testcaseId;
            
            let pageNo;
            
            let pageSize;
            
            let versionUri;

            if (listTestCaseCommentsRequest !== null && listTestCaseCommentsRequest !== undefined) {
                if (listTestCaseCommentsRequest instanceof ListTestCaseCommentsRequest) {
                    projectId = listTestCaseCommentsRequest.projectId;
                    testcaseId = listTestCaseCommentsRequest.testcaseId;
                    pageNo = listTestCaseCommentsRequest.pageNo;
                    pageSize = listTestCaseCommentsRequest.pageSize;
                    versionUri = listTestCaseCommentsRequest.versionUri;
                } else {
                    projectId = listTestCaseCommentsRequest['project_id'];
                    testcaseId = listTestCaseCommentsRequest['testcase_id'];
                    pageNo = listTestCaseCommentsRequest['page_no'];
                    pageSize = listTestCaseCommentsRequest['page_size'];
                    versionUri = listTestCaseCommentsRequest['version_uri'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling listTestCaseComments.');
            }
            if (testcaseId === null || testcaseId === undefined) {
            throw new RequiredError('testcaseId','Required parameter testcaseId was null or undefined when calling listTestCaseComments.');
            }
            if (pageNo === null || pageNo === undefined) {
                throw new RequiredError('pageNo','Required parameter pageNo was null or undefined when calling listTestCaseComments.');
            }
            if (pageNo !== null && pageNo !== undefined) {
                localVarQueryParameter['page_no'] = pageNo;
            }
            if (pageSize === null || pageSize === undefined) {
                throw new RequiredError('pageSize','Required parameter pageSize was null or undefined when calling listTestCaseComments.');
            }
            if (pageSize !== null && pageSize !== undefined) {
                localVarQueryParameter['page_size'] = pageSize;
            }
            if (versionUri !== null && versionUri !== undefined) {
                localVarQueryParameter['version_uri'] = versionUri;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId,'testcase_id': testcaseId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询用例修改历史记录
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listTestCaseHistories(listTestCaseHistoriesRequest?: ListTestCaseHistoriesRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/testcases/{testcase_id}/histories/batch-query",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let projectId;
            
            let testcaseId;

            if (listTestCaseHistoriesRequest !== null && listTestCaseHistoriesRequest !== undefined) {
                if (listTestCaseHistoriesRequest instanceof ListTestCaseHistoriesRequest) {
                    projectId = listTestCaseHistoriesRequest.projectId;
                    testcaseId = listTestCaseHistoriesRequest.testcaseId;
                    body = listTestCaseHistoriesRequest.body
                } else {
                    projectId = listTestCaseHistoriesRequest['project_id'];
                    testcaseId = listTestCaseHistoriesRequest['testcase_id'];
                    body = listTestCaseHistoriesRequest['body'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling listTestCaseHistories.');
            }
            if (testcaseId === null || testcaseId === undefined) {
            throw new RequiredError('testcaseId','Required parameter testcaseId was null or undefined when calling listTestCaseHistories.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'project_id': projectId,'testcase_id': testcaseId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取用例脚本详细信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listTestCaseScriptDetail(listTestCaseScriptDetailRequest?: ListTestCaseScriptDetailRequest) {
            const options = {
                method: "GET",
                url: "/v4/{project_id}/testcase/{tmss_case_uri}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let projectId;
            
            let tmssCaseUri;
            
            let taskId;

            if (listTestCaseScriptDetailRequest !== null && listTestCaseScriptDetailRequest !== undefined) {
                if (listTestCaseScriptDetailRequest instanceof ListTestCaseScriptDetailRequest) {
                    projectId = listTestCaseScriptDetailRequest.projectId;
                    tmssCaseUri = listTestCaseScriptDetailRequest.tmssCaseUri;
                    taskId = listTestCaseScriptDetailRequest.taskId;
                } else {
                    projectId = listTestCaseScriptDetailRequest['project_id'];
                    tmssCaseUri = listTestCaseScriptDetailRequest['tmss_case_uri'];
                    taskId = listTestCaseScriptDetailRequest['task_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling listTestCaseScriptDetail.');
            }
            if (tmssCaseUri === null || tmssCaseUri === undefined) {
            throw new RequiredError('tmssCaseUri','Required parameter tmssCaseUri was null or undefined when calling listTestCaseScriptDetail.');
            }
            if (taskId !== null && taskId !== undefined) {
                localVarQueryParameter['task_id'] = taskId;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId,'tmss_case_uri': tmssCaseUri, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询用例列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listTestCases(listTestCasesRequest?: ListTestCasesRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/testcases/batch-query",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let projectId;

            if (listTestCasesRequest !== null && listTestCasesRequest !== undefined) {
                if (listTestCasesRequest instanceof ListTestCasesRequest) {
                    projectId = listTestCasesRequest.projectId;
                    body = listTestCasesRequest.body
                } else {
                    projectId = listTestCasesRequest['project_id'];
                    body = listTestCasesRequest['body'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling listTestCases.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询需求下的用例列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listTestCasesByIssue(listTestCasesByIssueRequest?: ListTestCasesByIssueRequest) {
            const options = {
                method: "POST",
                url: "/testrelation/v4/{project_id}/issues/{issue_id}/testcases/batch-query",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let projectId;
            
            let issueId;

            if (listTestCasesByIssueRequest !== null && listTestCasesByIssueRequest !== undefined) {
                if (listTestCasesByIssueRequest instanceof ListTestCasesByIssueRequest) {
                    projectId = listTestCasesByIssueRequest.projectId;
                    issueId = listTestCasesByIssueRequest.issueId;
                    body = listTestCasesByIssueRequest.body
                } else {
                    projectId = listTestCasesByIssueRequest['project_id'];
                    issueId = listTestCasesByIssueRequest['issue_id'];
                    body = listTestCasesByIssueRequest['body'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling listTestCasesByIssue.');
            }
            if (issueId === null || issueId === undefined) {
            throw new RequiredError('issueId','Required parameter issueId was null or undefined when calling listTestCasesByIssue.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'project_id': projectId,'issue_id': issueId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据查询条件获取测试报告列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listTestReportsByCondition(listTestReportsByConditionRequest?: ListTestReportsByConditionRequest) {
            const options = {
                method: "GET",
                url: "/testreport/v4/{project_id}/test-reports",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let projectId;
            
            let pageSize;
            
            let pageNo;
            
            let keyWord;
            
            let own;

            if (listTestReportsByConditionRequest !== null && listTestReportsByConditionRequest !== undefined) {
                if (listTestReportsByConditionRequest instanceof ListTestReportsByConditionRequest) {
                    projectId = listTestReportsByConditionRequest.projectId;
                    pageSize = listTestReportsByConditionRequest.pageSize;
                    pageNo = listTestReportsByConditionRequest.pageNo;
                    keyWord = listTestReportsByConditionRequest.keyWord;
                    own = listTestReportsByConditionRequest.own;
                } else {
                    projectId = listTestReportsByConditionRequest['project_id'];
                    pageSize = listTestReportsByConditionRequest['page_size'];
                    pageNo = listTestReportsByConditionRequest['page_no'];
                    keyWord = listTestReportsByConditionRequest['key_word'];
                    own = listTestReportsByConditionRequest['own'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling listTestReportsByCondition.');
            }
            if (pageSize === null || pageSize === undefined) {
                throw new RequiredError('pageSize','Required parameter pageSize was null or undefined when calling listTestReportsByCondition.');
            }
            if (pageSize !== null && pageSize !== undefined) {
                localVarQueryParameter['page_size'] = pageSize;
            }
            if (pageNo !== null && pageNo !== undefined) {
                localVarQueryParameter['page_no'] = pageNo;
            }
            if (keyWord !== null && keyWord !== undefined) {
                localVarQueryParameter['key_word'] = keyWord;
            }
            if (own !== null && own !== undefined) {
                localVarQueryParameter['own'] = own;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取测试类型列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listTestTypes(listTestTypesRequest?: ListTestTypesRequest) {
            const options = {
                method: "GET",
                url: "/GT3KServer/v4/{project_id}/test-types",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let projectId;

            if (listTestTypesRequest !== null && listTestTypesRequest !== undefined) {
                if (listTestTypesRequest instanceof ListTestTypesRequest) {
                    projectId = listTestTypesRequest.projectId;
                } else {
                    projectId = listTestTypesRequest['project_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling listTestTypes.');
            }

            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询项目下关联了需求的用例列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listTestcasesByProjectIssuesRelation(listTestcasesByProjectIssuesRelationRequest?: ListTestcasesByProjectIssuesRelationRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/issues/testcases/batch-query",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let projectId;

            if (listTestcasesByProjectIssuesRelationRequest !== null && listTestcasesByProjectIssuesRelationRequest !== undefined) {
                if (listTestcasesByProjectIssuesRelationRequest instanceof ListTestcasesByProjectIssuesRelationRequest) {
                    projectId = listTestcasesByProjectIssuesRelationRequest.projectId;
                    body = listTestcasesByProjectIssuesRelationRequest.body
                } else {
                    projectId = listTestcasesByProjectIssuesRelationRequest['project_id'];
                    body = listTestcasesByProjectIssuesRelationRequest['body'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling listTestcasesByProjectIssuesRelation.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取租户订单已用资源信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listUsageInfos(listUsageInfosRequest?: ListUsageInfosRequest) {
            const options = {
                method: "GET",
                url: "/GT3KServer/v4/domain/usage",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let projectUuid;

            if (listUsageInfosRequest !== null && listUsageInfosRequest !== undefined) {
                if (listUsageInfosRequest instanceof ListUsageInfosRequest) {
                    projectUuid = listUsageInfosRequest.projectUuid;
                } else {
                    projectUuid = listUsageInfosRequest['project_uuid'];
                }
            }

        
            if (projectUuid === null || projectUuid === undefined) {
                throw new RequiredError('projectUuid','Required parameter projectUuid was null or undefined when calling listUsageInfos.');
            }
            if (projectUuid !== null && projectUuid !== undefined) {
                localVarQueryParameter['project_uuid'] = projectUuid;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询用户DNS映射
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listUserDnsMapping(listUserDnsMappingRequest?: ListUserDnsMappingRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/dns-mapping",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let projectId;

            if (listUserDnsMappingRequest !== null && listUserDnsMappingRequest !== undefined) {
                if (listUserDnsMappingRequest instanceof ListUserDnsMappingRequest) {
                    projectId = listUserDnsMappingRequest.projectId;
                } else {
                    projectId = listUserDnsMappingRequest['project_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling listUserDnsMapping.');
            }

            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listUserPackageUsage(listUserPackageUsageRequest?: ListUserPackageUsageRequest) {
            const options = {
                method: "GET",
                url: "/v1/projects/{project_id}/package-usage",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let projectId;

            if (listUserPackageUsageRequest !== null && listUserPackageUsageRequest !== undefined) {
                if (listUserPackageUsageRequest instanceof ListUserPackageUsageRequest) {
                    projectId = listUserPackageUsageRequest.projectId;
                } else {
                    projectId = listUserPackageUsageRequest['project_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling listUserPackageUsage.');
            }

            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listUserPopupInfo(listUserPopupInfoRequest?: ListUserPopupInfoRequest) {
            const options = {
                method: "GET",
                url: "/v1/projects/{project_id}/package-charge/popup",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let projectId;

            if (listUserPopupInfoRequest !== null && listUserPopupInfoRequest !== undefined) {
                if (listUserPopupInfoRequest instanceof ListUserPopupInfoRequest) {
                    projectId = listUserPopupInfoRequest.projectId;
                } else {
                    projectId = listUserPopupInfoRequest['project_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling listUserPopupInfo.');
            }

            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询仪表盘用户的看板
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listUsingGet(listUsingGetRequest?: ListUsingGetRequest) {
            const options = {
                method: "GET",
                url: "/v2/projects/{service_id}/dashboards",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let serviceId;
            
            let name;
            
            let pageNumber;
            
            let pageSize;

            if (listUsingGetRequest !== null && listUsingGetRequest !== undefined) {
                if (listUsingGetRequest instanceof ListUsingGetRequest) {
                    serviceId = listUsingGetRequest.serviceId;
                    name = listUsingGetRequest.name;
                    pageNumber = listUsingGetRequest.pageNumber;
                    pageSize = listUsingGetRequest.pageSize;
                } else {
                    serviceId = listUsingGetRequest['service_id'];
                    name = listUsingGetRequest['name'];
                    pageNumber = listUsingGetRequest['page_number'];
                    pageSize = listUsingGetRequest['page_size'];
                }
            }

        
            if (serviceId === null || serviceId === undefined) {
            throw new RequiredError('serviceId','Required parameter serviceId was null or undefined when calling listUsingGet.');
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (pageNumber !== null && pageNumber !== undefined) {
                localVarQueryParameter['page_number'] = pageNumber;
            }
            if (pageSize !== null && pageSize !== undefined) {
                localVarQueryParameter['page_size'] = pageSize;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'service_id': serviceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询全局变量参数列表V4
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listVariables(listVariablesRequest?: ListVariablesRequest) {
            const options = {
                method: "GET",
                url: "/v4/{project_id}/variables",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let projectId;
            
            let groupId;
            
            let pageNo;
            
            let pageSize;

            if (listVariablesRequest !== null && listVariablesRequest !== undefined) {
                if (listVariablesRequest instanceof ListVariablesRequest) {
                    projectId = listVariablesRequest.projectId;
                    groupId = listVariablesRequest.groupId;
                    pageNo = listVariablesRequest.pageNo;
                    pageSize = listVariablesRequest.pageSize;
                } else {
                    projectId = listVariablesRequest['project_id'];
                    groupId = listVariablesRequest['group_id'];
                    pageNo = listVariablesRequest['page_no'];
                    pageSize = listVariablesRequest['page_size'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling listVariables.');
            }
            if (groupId !== null && groupId !== undefined) {
                localVarQueryParameter['group_id'] = groupId;
            }
            if (pageNo !== null && pageNo !== undefined) {
                localVarQueryParameter['page_no'] = pageNo;
            }
            if (pageSize !== null && pageSize !== undefined) {
                localVarQueryParameter['page_size'] = pageSize;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 从迭代中移除需求
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        removeIssuesFromIterator(removeIssuesFromIteratorRequest?: RemoveIssuesFromIteratorRequest) {
            const options = {
                method: "DELETE",
                url: "/GT3KServer/v4/{project_id}/iterators/{iterator_id}/issues",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let projectId;
            
            let iteratorId;

            if (removeIssuesFromIteratorRequest !== null && removeIssuesFromIteratorRequest !== undefined) {
                if (removeIssuesFromIteratorRequest instanceof RemoveIssuesFromIteratorRequest) {
                    projectId = removeIssuesFromIteratorRequest.projectId;
                    iteratorId = removeIssuesFromIteratorRequest.iteratorId;
                    body = removeIssuesFromIteratorRequest.body
                } else {
                    projectId = removeIssuesFromIteratorRequest['project_id'];
                    iteratorId = removeIssuesFromIteratorRequest['iterator_id'];
                    body = removeIssuesFromIteratorRequest['body'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling removeIssuesFromIterator.');
            }
            if (iteratorId === null || iteratorId === undefined) {
            throw new RequiredError('iteratorId','Required parameter iteratorId was null or undefined when calling removeIssuesFromIterator.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'project_id': projectId,'iterator_id': iteratorId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 批量执行测试用例
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        runTestCase(runTestCaseRequest?: RunTestCaseRequest) {
            const options = {
                method: "POST",
                url: "/v1/projects/{project_id}/testcases/execution",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let projectId;

            if (runTestCaseRequest !== null && runTestCaseRequest !== undefined) {
                if (runTestCaseRequest instanceof RunTestCaseRequest) {
                    projectId = runTestCaseRequest.projectId;
                    body = runTestCaseRequest.body
                } else {
                    projectId = runTestCaseRequest['project_id'];
                    body = runTestCaseRequest['body'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling runTestCase.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 保存任务配置
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        saveTaskSetting(saveTaskSettingRequest?: SaveTaskSettingRequest) {
            const options = {
                method: "POST",
                url: "/v1/projects/{service_id}/task/settings",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let serviceId;

            if (saveTaskSettingRequest !== null && saveTaskSettingRequest !== undefined) {
                if (saveTaskSettingRequest instanceof SaveTaskSettingRequest) {
                    serviceId = saveTaskSettingRequest.serviceId;
                    body = saveTaskSettingRequest.body
                } else {
                    serviceId = saveTaskSettingRequest['service_id'];
                    body = saveTaskSettingRequest['body'];
                }
            }

        
            if (serviceId === null || serviceId === undefined) {
            throw new RequiredError('serviceId','Required parameter serviceId was null or undefined when calling saveTaskSetting.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'service_id': serviceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建测试报告自定义模块
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        saveTestReportCustomDetail(saveTestReportCustomDetailRequest?: SaveTestReportCustomDetailRequest) {
            const options = {
                method: "POST",
                url: "/v4/{project_id}/versions/{version_uri}/test-reports/{report_uri}/custom-infos",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let projectId;
            
            let versionUri;
            
            let reportUri;

            if (saveTestReportCustomDetailRequest !== null && saveTestReportCustomDetailRequest !== undefined) {
                if (saveTestReportCustomDetailRequest instanceof SaveTestReportCustomDetailRequest) {
                    projectId = saveTestReportCustomDetailRequest.projectId;
                    versionUri = saveTestReportCustomDetailRequest.versionUri;
                    reportUri = saveTestReportCustomDetailRequest.reportUri;
                    body = saveTestReportCustomDetailRequest.body
                } else {
                    projectId = saveTestReportCustomDetailRequest['project_id'];
                    versionUri = saveTestReportCustomDetailRequest['version_uri'];
                    reportUri = saveTestReportCustomDetailRequest['report_uri'];
                    body = saveTestReportCustomDetailRequest['body'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling saveTestReportCustomDetail.');
            }
            if (versionUri === null || versionUri === undefined) {
            throw new RequiredError('versionUri','Required parameter versionUri was null or undefined when calling saveTestReportCustomDetail.');
            }
            if (reportUri === null || reportUri === undefined) {
            throw new RequiredError('reportUri','Required parameter reportUri was null or undefined when calling saveTestReportCustomDetail.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'project_id': projectId,'version_uri': versionUri,'report_uri': reportUri, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 设置测试套结果
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        setTaskResult(setTaskResultRequest?: SetTaskResultRequest) {
            const options = {
                method: "POST",
                url: "/v4/{project_uuid}/tasks/{task_uri}/results",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let projectUuid;
            
            let taskUri;

            if (setTaskResultRequest !== null && setTaskResultRequest !== undefined) {
                if (setTaskResultRequest instanceof SetTaskResultRequest) {
                    projectUuid = setTaskResultRequest.projectUuid;
                    taskUri = setTaskResultRequest.taskUri;
                    body = setTaskResultRequest.body
                } else {
                    projectUuid = setTaskResultRequest['project_uuid'];
                    taskUri = setTaskResultRequest['task_uri'];
                    body = setTaskResultRequest['body'];
                }
            }

        
            if (projectUuid === null || projectUuid === undefined) {
            throw new RequiredError('projectUuid','Required parameter projectUuid was null or undefined when calling setTaskResult.');
            }
            if (taskUri === null || taskUri === undefined) {
            throw new RequiredError('taskUri','Required parameter taskUri was null or undefined when calling setTaskResult.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'project_uuid': projectUuid,'task_uri': taskUri, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询任务配置
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showAllConfigValueByTypeAndKey(showAllConfigValueByTypeAndKeyRequest?: ShowAllConfigValueByTypeAndKeyRequest) {
            const options = {
                method: "GET",
                url: "/v1/projects/{service_id}/service/config",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let serviceId;
            
            let key;
            
            let type;

            if (showAllConfigValueByTypeAndKeyRequest !== null && showAllConfigValueByTypeAndKeyRequest !== undefined) {
                if (showAllConfigValueByTypeAndKeyRequest instanceof ShowAllConfigValueByTypeAndKeyRequest) {
                    serviceId = showAllConfigValueByTypeAndKeyRequest.serviceId;
                    key = showAllConfigValueByTypeAndKeyRequest.key;
                    type = showAllConfigValueByTypeAndKeyRequest.type;
                } else {
                    serviceId = showAllConfigValueByTypeAndKeyRequest['service_id'];
                    key = showAllConfigValueByTypeAndKeyRequest['key'];
                    type = showAllConfigValueByTypeAndKeyRequest['type'];
                }
            }

        
            if (serviceId === null || serviceId === undefined) {
            throw new RequiredError('serviceId','Required parameter serviceId was null or undefined when calling showAllConfigValueByTypeAndKey.');
            }
            if (key === null || key === undefined) {
                throw new RequiredError('key','Required parameter key was null or undefined when calling showAllConfigValueByTypeAndKey.');
            }
            if (key !== null && key !== undefined) {
                localVarQueryParameter['key'] = key;
            }
            if (type === null || type === undefined) {
                throw new RequiredError('type','Required parameter type was null or undefined when calling showAllConfigValueByTypeAndKey.');
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'service_id': serviceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取目录\\特性树
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showAllFeatureChildren(showAllFeatureChildrenRequest?: ShowAllFeatureChildrenRequest) {
            const options = {
                method: "POST",
                url: "/GT3KServer/v5/features/{feature_id}/children",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let featureId;

            if (showAllFeatureChildrenRequest !== null && showAllFeatureChildrenRequest !== undefined) {
                if (showAllFeatureChildrenRequest instanceof ShowAllFeatureChildrenRequest) {
                    featureId = showAllFeatureChildrenRequest.featureId;
                    body = showAllFeatureChildrenRequest.body
                } else {
                    featureId = showAllFeatureChildrenRequest['feature_id'];
                    body = showAllFeatureChildrenRequest['body'];
                }
            }

        
            if (featureId === null || featureId === undefined) {
            throw new RequiredError('featureId','Required parameter featureId was null or undefined when calling showAllFeatureChildren.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'feature_id': featureId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取用例历史执行数据
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showApiTestcaseHistories(showApiTestcaseHistoriesRequest?: ShowApiTestcaseHistoriesRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/api-testcases/{testcase_id}/execute-histories",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let testcaseId;
            
            let projectId;
            
            let offset;
            
            let limit;
            
            let planId;

            if (showApiTestcaseHistoriesRequest !== null && showApiTestcaseHistoriesRequest !== undefined) {
                if (showApiTestcaseHistoriesRequest instanceof ShowApiTestcaseHistoriesRequest) {
                    testcaseId = showApiTestcaseHistoriesRequest.testcaseId;
                    projectId = showApiTestcaseHistoriesRequest.projectId;
                    offset = showApiTestcaseHistoriesRequest.offset;
                    limit = showApiTestcaseHistoriesRequest.limit;
                    planId = showApiTestcaseHistoriesRequest.planId;
                } else {
                    testcaseId = showApiTestcaseHistoriesRequest['testcase_id'];
                    projectId = showApiTestcaseHistoriesRequest['project_id'];
                    offset = showApiTestcaseHistoriesRequest['offset'];
                    limit = showApiTestcaseHistoriesRequest['limit'];
                    planId = showApiTestcaseHistoriesRequest['plan_id'];
                }
            }

        
            if (testcaseId === null || testcaseId === undefined) {
            throw new RequiredError('testcaseId','Required parameter testcaseId was null or undefined when calling showApiTestcaseHistories.');
            }
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling showApiTestcaseHistories.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (planId !== null && planId !== undefined) {
                localVarQueryParameter['plan_id'] = planId;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'testcase_id': testcaseId,'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取资产列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showAsset(showAssetRequest?: ShowAssetRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/asset",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let projectId;

            if (showAssetRequest !== null && showAssetRequest !== undefined) {
                if (showAssetRequest instanceof ShowAssetRequest) {
                    projectId = showAssetRequest.projectId;
                } else {
                    projectId = showAssetRequest['project_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling showAsset.');
            }

            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取资产树列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showAssetTree(showAssetTreeRequest?: ShowAssetTreeRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/asset-tree/{asset_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let projectId;
            
            let assetId;

            if (showAssetTreeRequest !== null && showAssetTreeRequest !== undefined) {
                if (showAssetTreeRequest instanceof ShowAssetTreeRequest) {
                    projectId = showAssetTreeRequest.projectId;
                    assetId = showAssetTreeRequest.assetId;
                } else {
                    projectId = showAssetTreeRequest['project_id'];
                    assetId = showAssetTreeRequest['asset_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling showAssetTree.');
            }
            if (assetId === null || assetId === undefined) {
            throw new RequiredError('assetId','Required parameter assetId was null or undefined when calling showAssetTree.');
            }

            options.pathParams = { 'project_id': projectId,'asset_id': assetId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取测试报告的模板设置
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showBackgroundInfo(showBackgroundInfoRequest?: ShowBackgroundInfoRequest) {
            const options = {
                method: "GET",
                url: "/GT3KServer/v4/{project_id}/background",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let projectId;

            if (showBackgroundInfoRequest !== null && showBackgroundInfoRequest !== undefined) {
                if (showBackgroundInfoRequest instanceof ShowBackgroundInfoRequest) {
                    projectId = showBackgroundInfoRequest.projectId;
                } else {
                    projectId = showBackgroundInfoRequest['project_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling showBackgroundInfo.');
            }

            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取分支详情
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showBranch(showBranchRequest?: ShowBranchRequest) {
            const options = {
                method: "GET",
                url: "/GT3KServer/v4/branches/{branch_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let branchId;
            
            let projectUuid;

            if (showBranchRequest !== null && showBranchRequest !== undefined) {
                if (showBranchRequest instanceof ShowBranchRequest) {
                    branchId = showBranchRequest.branchId;
                    projectUuid = showBranchRequest.projectUuid;
                } else {
                    branchId = showBranchRequest['branch_id'];
                    projectUuid = showBranchRequest['project_uuid'];
                }
            }

        
            if (branchId === null || branchId === undefined) {
            throw new RequiredError('branchId','Required parameter branchId was null or undefined when calling showBranch.');
            }
            if (projectUuid !== null && projectUuid !== undefined) {
                localVarQueryParameter['project_uuid'] = projectUuid;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'branch_id': branchId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询用例结果
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showCaseResult(showCaseResultRequest?: ShowCaseResultRequest) {
            const options = {
                method: "POST",
                url: "/v4/{project_id}/versions/{version_uri}/testcases/{case_uri}/results/batch-query",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let projectId;
            
            let versionUri;
            
            let caseUri;

            if (showCaseResultRequest !== null && showCaseResultRequest !== undefined) {
                if (showCaseResultRequest instanceof ShowCaseResultRequest) {
                    projectId = showCaseResultRequest.projectId;
                    versionUri = showCaseResultRequest.versionUri;
                    caseUri = showCaseResultRequest.caseUri;
                    body = showCaseResultRequest.body
                } else {
                    projectId = showCaseResultRequest['project_id'];
                    versionUri = showCaseResultRequest['version_uri'];
                    caseUri = showCaseResultRequest['case_uri'];
                    body = showCaseResultRequest['body'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling showCaseResult.');
            }
            if (versionUri === null || versionUri === undefined) {
            throw new RequiredError('versionUri','Required parameter versionUri was null or undefined when calling showCaseResult.');
            }
            if (caseUri === null || caseUri === undefined) {
            throw new RequiredError('caseUri','Required parameter caseUri was null or undefined when calling showCaseResult.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'project_id': projectId,'version_uri': versionUri,'case_uri': caseUri, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询租户测试并发套餐状态
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showConcurrencyPackageUsing(showConcurrencyPackageUsingRequest?: ShowConcurrencyPackageUsingRequest) {
            const options = {
                method: "GET",
                url: "/v1/echotest/concurrency/status",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let serviceId;
            
            let testType;

            if (showConcurrencyPackageUsingRequest !== null && showConcurrencyPackageUsingRequest !== undefined) {
                if (showConcurrencyPackageUsingRequest instanceof ShowConcurrencyPackageUsingRequest) {
                    serviceId = showConcurrencyPackageUsingRequest.serviceId;
                    testType = showConcurrencyPackageUsingRequest.testType;
                } else {
                    serviceId = showConcurrencyPackageUsingRequest['service_id'];
                    testType = showConcurrencyPackageUsingRequest['test_type'];
                }
            }

        
            if (serviceId === null || serviceId === undefined) {
                throw new RequiredError('serviceId','Required parameter serviceId was null or undefined when calling showConcurrencyPackageUsing.');
            }
            if (serviceId !== null && serviceId !== undefined) {
                localVarQueryParameter['service_id'] = serviceId;
            }
            if (testType !== null && testType !== undefined) {
                localVarQueryParameter['test_type'] = testType;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询用户免责声明
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showDisclaimerRecord(showDisclaimerRecordRequest?: ShowDisclaimerRecordRequest) {
            const options = {
                method: "GET",
                url: "/GT3KServer/v4/disclaimer",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let type;

            if (showDisclaimerRecordRequest !== null && showDisclaimerRecordRequest !== undefined) {
                if (showDisclaimerRecordRequest instanceof ShowDisclaimerRecordRequest) {
                    type = showDisclaimerRecordRequest.type;
                } else {
                    type = showDisclaimerRecordRequest['type'];
                }
            }

        
            if (type === null || type === undefined) {
                throw new RequiredError('type','Required parameter type was null or undefined when calling showDisclaimerRecord.');
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据domainId获取加密的testbirdkey
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showDomainInfo() {
            const options = {
                method: "GET",
                url: "/GT3KServer/v4/user-info/domain",
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
         * 查询租户在线拨测套餐状态
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showEchoTestPackageUsing(showEchoTestPackageUsingRequest?: ShowEchoTestPackageUsingRequest) {
            const options = {
                method: "GET",
                url: "/v1/projects/{service_id}/package/status",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let serviceId;

            if (showEchoTestPackageUsingRequest !== null && showEchoTestPackageUsingRequest !== undefined) {
                if (showEchoTestPackageUsingRequest instanceof ShowEchoTestPackageUsingRequest) {
                    serviceId = showEchoTestPackageUsingRequest.serviceId;
                } else {
                    serviceId = showEchoTestPackageUsingRequest['service_id'];
                }
            }

        
            if (serviceId === null || serviceId === undefined) {
            throw new RequiredError('serviceId','Required parameter serviceId was null or undefined when calling showEchoTestPackageUsing.');
            }

            options.pathParams = { 'service_id': serviceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询指定表的内容
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showEtlData(showEtlDataRequest?: ShowEtlDataRequest) {
            const options = {
                method: "POST",
                url: "/v4/testhub/etl/query-data",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (showEtlDataRequest !== null && showEtlDataRequest !== undefined) {
                if (showEtlDataRequest instanceof ShowEtlDataRequest) {
                    body = showEtlDataRequest.body
                } else {
                    body = showEtlDataRequest['body'];
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
         * 根据目录查询因子
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showFactorByAssetId(showFactorByAssetIdRequest?: ShowFactorByAssetIdRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/factor/{id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let projectId;
            
            let id;

            if (showFactorByAssetIdRequest !== null && showFactorByAssetIdRequest !== undefined) {
                if (showFactorByAssetIdRequest instanceof ShowFactorByAssetIdRequest) {
                    projectId = showFactorByAssetIdRequest.projectId;
                    id = showFactorByAssetIdRequest.id;
                    body = showFactorByAssetIdRequest.body
                } else {
                    projectId = showFactorByAssetIdRequest['project_id'];
                    id = showFactorByAssetIdRequest['id'];
                    body = showFactorByAssetIdRequest['body'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling showFactorByAssetId.');
            }
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling showFactorByAssetId.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'project_id': projectId,'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据id获取因子
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showFactorById(showFactorByIdRequest?: ShowFactorByIdRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/factor/{id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let projectId;
            
            let id;

            if (showFactorByIdRequest !== null && showFactorByIdRequest !== undefined) {
                if (showFactorByIdRequest instanceof ShowFactorByIdRequest) {
                    projectId = showFactorByIdRequest.projectId;
                    id = showFactorByIdRequest.id;
                } else {
                    projectId = showFactorByIdRequest['project_id'];
                    id = showFactorByIdRequest['id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling showFactorById.');
            }
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling showFactorById.');
            }

            options.pathParams = { 'project_id': projectId,'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取目录\\特性树
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showFeatureChildren(showFeatureChildrenRequest?: ShowFeatureChildrenRequest) {
            const options = {
                method: "POST",
                url: "/GT3KServer/v4/features/{feature_id}/children",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let featureId;

            if (showFeatureChildrenRequest !== null && showFeatureChildrenRequest !== undefined) {
                if (showFeatureChildrenRequest instanceof ShowFeatureChildrenRequest) {
                    featureId = showFeatureChildrenRequest.featureId;
                    body = showFeatureChildrenRequest.body
                } else {
                    featureId = showFeatureChildrenRequest['feature_id'];
                    body = showFeatureChildrenRequest['body'];
                }
            }

        
            if (featureId === null || featureId === undefined) {
            throw new RequiredError('featureId','Required parameter featureId was null or undefined when calling showFeatureChildren.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'feature_id': featureId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询限时免费用户免责声明记录
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showFreeDeclaration() {
            const options = {
                method: "GET",
                url: "/GT3KServer/v4/free-declaration",
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
         * 查询告警模板名称是否重复
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showIfTaskNameRepeat(showIfTaskNameRepeatRequest?: ShowIfTaskNameRepeatRequest) {
            const options = {
                method: "GET",
                url: "/v1/projects/{service_id}/alert-templates/name",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let serviceId;
            
            let name;
            
            let id;

            if (showIfTaskNameRepeatRequest !== null && showIfTaskNameRepeatRequest !== undefined) {
                if (showIfTaskNameRepeatRequest instanceof ShowIfTaskNameRepeatRequest) {
                    serviceId = showIfTaskNameRepeatRequest.serviceId;
                    name = showIfTaskNameRepeatRequest.name;
                    id = showIfTaskNameRepeatRequest.id;
                } else {
                    serviceId = showIfTaskNameRepeatRequest['service_id'];
                    name = showIfTaskNameRepeatRequest['name'];
                    id = showIfTaskNameRepeatRequest['id'];
                }
            }

        
            if (serviceId === null || serviceId === undefined) {
            throw new RequiredError('serviceId','Required parameter serviceId was null or undefined when calling showIfTaskNameRepeat.');
            }
            if (name === null || name === undefined) {
                throw new RequiredError('name','Required parameter name was null or undefined when calling showIfTaskNameRepeat.');
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (id !== null && id !== undefined) {
                localVarQueryParameter['id'] = id;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'service_id': serviceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询告警组用户名是否重复
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showIfUserNameRepeat(showIfUserNameRepeatRequest?: ShowIfUserNameRepeatRequest) {
            const options = {
                method: "GET",
                url: "/v1/projects/{service_id}/alert/user/name",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let serviceId;
            
            let userId;
            
            let userName;

            if (showIfUserNameRepeatRequest !== null && showIfUserNameRepeatRequest !== undefined) {
                if (showIfUserNameRepeatRequest instanceof ShowIfUserNameRepeatRequest) {
                    serviceId = showIfUserNameRepeatRequest.serviceId;
                    userId = showIfUserNameRepeatRequest.userId;
                    userName = showIfUserNameRepeatRequest.userName;
                } else {
                    serviceId = showIfUserNameRepeatRequest['service_id'];
                    userId = showIfUserNameRepeatRequest['userId'];
                    userName = showIfUserNameRepeatRequest['userName'];
                }
            }

        
            if (serviceId === null || serviceId === undefined) {
            throw new RequiredError('serviceId','Required parameter serviceId was null or undefined when calling showIfUserNameRepeat.');
            }
            if (userId !== null && userId !== undefined) {
                localVarQueryParameter['userId'] = userId;
            }
            if (userName !== null && userName !== undefined) {
                localVarQueryParameter['userName'] = userName;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'service_id': serviceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询某个测试计划下的需求列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showIssuesByPlanId(showIssuesByPlanIdRequest?: ShowIssuesByPlanIdRequest) {
            const options = {
                method: "GET",
                url: "/v1/projects/{project_id}/plans/{plan_id}/issues",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let projectId;
            
            let planId;
            
            let offset;
            
            let limit;

            if (showIssuesByPlanIdRequest !== null && showIssuesByPlanIdRequest !== undefined) {
                if (showIssuesByPlanIdRequest instanceof ShowIssuesByPlanIdRequest) {
                    projectId = showIssuesByPlanIdRequest.projectId;
                    planId = showIssuesByPlanIdRequest.planId;
                    offset = showIssuesByPlanIdRequest.offset;
                    limit = showIssuesByPlanIdRequest.limit;
                } else {
                    projectId = showIssuesByPlanIdRequest['project_id'];
                    planId = showIssuesByPlanIdRequest['plan_id'];
                    offset = showIssuesByPlanIdRequest['offset'];
                    limit = showIssuesByPlanIdRequest['limit'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling showIssuesByPlanId.');
            }
            if (planId === null || planId === undefined) {
            throw new RequiredError('planId','Required parameter planId was null or undefined when calling showIssuesByPlanId.');
            }
            if (offset === null || offset === undefined) {
                throw new RequiredError('offset','Required parameter offset was null or undefined when calling showIssuesByPlanId.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit === null || limit === undefined) {
                throw new RequiredError('limit','Required parameter limit was null or undefined when calling showIssuesByPlanId.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId,'plan_id': planId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询缺陷相关联测试计划
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showIteratorByDefect(showIteratorByDefectRequest?: ShowIteratorByDefectRequest) {
            const options = {
                method: "GET",
                url: "/GT3KServer/v4/{project_id}/defects/{defect_id}/iterators",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let projectId;
            
            let defectId;

            if (showIteratorByDefectRequest !== null && showIteratorByDefectRequest !== undefined) {
                if (showIteratorByDefectRequest instanceof ShowIteratorByDefectRequest) {
                    projectId = showIteratorByDefectRequest.projectId;
                    defectId = showIteratorByDefectRequest.defectId;
                } else {
                    projectId = showIteratorByDefectRequest['project_id'];
                    defectId = showIteratorByDefectRequest['defect_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling showIteratorByDefect.');
            }
            if (defectId === null || defectId === undefined) {
            throw new RequiredError('defectId','Required parameter defectId was null or undefined when calling showIteratorByDefect.');
            }

            options.pathParams = { 'project_id': projectId,'defect_id': defectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询迭代计划详情，包含统计信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showIteratorDetail(showIteratorDetailRequest?: ShowIteratorDetailRequest) {
            const options = {
                method: "GET",
                url: "/GT3KServer/v4/iterators/{iterator_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let iteratorId;
            
            let projectUuid;

            if (showIteratorDetailRequest !== null && showIteratorDetailRequest !== undefined) {
                if (showIteratorDetailRequest instanceof ShowIteratorDetailRequest) {
                    iteratorId = showIteratorDetailRequest.iteratorId;
                    projectUuid = showIteratorDetailRequest.projectUuid;
                } else {
                    iteratorId = showIteratorDetailRequest['iterator_id'];
                    projectUuid = showIteratorDetailRequest['project_uuid'];
                }
            }

        
            if (iteratorId === null || iteratorId === undefined) {
            throw new RequiredError('iteratorId','Required parameter iteratorId was null or undefined when calling showIteratorDetail.');
            }
            if (projectUuid !== null && projectUuid !== undefined) {
                localVarQueryParameter['project_uuid'] = projectUuid;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'iterator_id': iteratorId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据id获取脑图对象
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showMindMapById(showMindMapByIdRequest?: ShowMindMapByIdRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/mindmaps/{id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let projectId;
            
            let id;

            if (showMindMapByIdRequest !== null && showMindMapByIdRequest !== undefined) {
                if (showMindMapByIdRequest instanceof ShowMindMapByIdRequest) {
                    projectId = showMindMapByIdRequest.projectId;
                    id = showMindMapByIdRequest.id;
                } else {
                    projectId = showMindMapByIdRequest['project_id'];
                    id = showMindMapByIdRequest['id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling showMindMapById.');
            }
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling showMindMapById.');
            }

            options.pathParams = { 'project_id': projectId,'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据条件分页获取脑图对象V3
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showMindmapByPage(showMindmapByPageRequest?: ShowMindmapByPageRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/mindmaps/page",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let projectId;

            if (showMindmapByPageRequest !== null && showMindmapByPageRequest !== undefined) {
                if (showMindmapByPageRequest instanceof ShowMindmapByPageRequest) {
                    projectId = showMindmapByPageRequest.projectId;
                    body = showMindmapByPageRequest.body
                } else {
                    projectId = showMindmapByPageRequest['project_id'];
                    body = showMindmapByPageRequest['body'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling showMindmapByPage.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取脑图创建人V2
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showMindmapCreatorName(showMindmapCreatorNameRequest?: ShowMindmapCreatorNameRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/mindmap-creator-name",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let projectId;

            if (showMindmapCreatorNameRequest !== null && showMindmapCreatorNameRequest !== undefined) {
                if (showMindmapCreatorNameRequest instanceof ShowMindmapCreatorNameRequest) {
                    projectId = showMindmapCreatorNameRequest.projectId;
                } else {
                    projectId = showMindmapCreatorNameRequest['project_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling showMindmapCreatorName.');
            }

            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 成功返回运行面板信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showOperationalDataCurrentMonthUsing(showOperationalDataCurrentMonthUsingRequest?: ShowOperationalDataCurrentMonthUsingRequest) {
            const options = {
                method: "GET",
                url: "/v2/projects/{service_id}/dashboard/run-panel",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let serviceId;

            if (showOperationalDataCurrentMonthUsingRequest !== null && showOperationalDataCurrentMonthUsingRequest !== undefined) {
                if (showOperationalDataCurrentMonthUsingRequest instanceof ShowOperationalDataCurrentMonthUsingRequest) {
                    serviceId = showOperationalDataCurrentMonthUsingRequest.serviceId;
                } else {
                    serviceId = showOperationalDataCurrentMonthUsingRequest['service_id'];
                }
            }

        
            if (serviceId === null || serviceId === undefined) {
            throw new RequiredError('serviceId','Required parameter serviceId was null or undefined when calling showOperationalDataCurrentMonthUsing.');
            }

            options.pathParams = { 'service_id': serviceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询某测试计划下的操作历史
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showPlanJournals(showPlanJournalsRequest?: ShowPlanJournalsRequest) {
            const options = {
                method: "GET",
                url: "/v1/projects/{project_id}/plans/{plan_id}/journals",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let projectId;
            
            let planId;
            
            let offset;
            
            let limit;

            if (showPlanJournalsRequest !== null && showPlanJournalsRequest !== undefined) {
                if (showPlanJournalsRequest instanceof ShowPlanJournalsRequest) {
                    projectId = showPlanJournalsRequest.projectId;
                    planId = showPlanJournalsRequest.planId;
                    offset = showPlanJournalsRequest.offset;
                    limit = showPlanJournalsRequest.limit;
                } else {
                    projectId = showPlanJournalsRequest['project_id'];
                    planId = showPlanJournalsRequest['plan_id'];
                    offset = showPlanJournalsRequest['offset'];
                    limit = showPlanJournalsRequest['limit'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling showPlanJournals.');
            }
            if (planId === null || planId === undefined) {
            throw new RequiredError('planId','Required parameter planId was null or undefined when calling showPlanJournals.');
            }
            if (offset === null || offset === undefined) {
                throw new RequiredError('offset','Required parameter offset was null or undefined when calling showPlanJournals.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit === null || limit === undefined) {
                throw new RequiredError('limit','Required parameter limit was null or undefined when calling showPlanJournals.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId,'plan_id': planId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 项目下查询测试计划列表v2
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showPlanList(showPlanListRequest?: ShowPlanListRequest) {
            const options = {
                method: "GET",
                url: "/v2/projects/{project_id}/plans",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let projectId;
            
            let offset;
            
            let limit;
            
            let name;
            
            let currentStage;
            
            let branchUri;
            
            let queryAllVersion;
            
            let fixVersionIds;

            if (showPlanListRequest !== null && showPlanListRequest !== undefined) {
                if (showPlanListRequest instanceof ShowPlanListRequest) {
                    projectId = showPlanListRequest.projectId;
                    offset = showPlanListRequest.offset;
                    limit = showPlanListRequest.limit;
                    name = showPlanListRequest.name;
                    currentStage = showPlanListRequest.currentStage;
                    branchUri = showPlanListRequest.branchUri;
                    queryAllVersion = showPlanListRequest.queryAllVersion;
                    fixVersionIds = showPlanListRequest.fixVersionIds;
                } else {
                    projectId = showPlanListRequest['project_id'];
                    offset = showPlanListRequest['offset'];
                    limit = showPlanListRequest['limit'];
                    name = showPlanListRequest['name'];
                    currentStage = showPlanListRequest['current_stage'];
                    branchUri = showPlanListRequest['branch_uri'];
                    queryAllVersion = showPlanListRequest['query_all_version'];
                    fixVersionIds = showPlanListRequest['fix_version_ids'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling showPlanList.');
            }
            if (offset === null || offset === undefined) {
                throw new RequiredError('offset','Required parameter offset was null or undefined when calling showPlanList.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit === null || limit === undefined) {
                throw new RequiredError('limit','Required parameter limit was null or undefined when calling showPlanList.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (currentStage !== null && currentStage !== undefined) {
                localVarQueryParameter['current_stage'] = currentStage;
            }
            if (branchUri !== null && branchUri !== undefined) {
                localVarQueryParameter['branch_uri'] = branchUri;
            }
            if (queryAllVersion !== null && queryAllVersion !== undefined) {
                localVarQueryParameter['query_all_version'] = queryAllVersion;
            }
            if (fixVersionIds !== null && fixVersionIds !== undefined) {
                localVarQueryParameter['fix_version_ids'] = fixVersionIds;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 项目下查询测试计划列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showPlans(showPlansRequest?: ShowPlansRequest) {
            const options = {
                method: "GET",
                url: "/v1/projects/{project_id}/plans",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let projectId;
            
            let offset;
            
            let limit;
            
            let name;
            
            let currentStage;

            if (showPlansRequest !== null && showPlansRequest !== undefined) {
                if (showPlansRequest instanceof ShowPlansRequest) {
                    projectId = showPlansRequest.projectId;
                    offset = showPlansRequest.offset;
                    limit = showPlansRequest.limit;
                    name = showPlansRequest.name;
                    currentStage = showPlansRequest.currentStage;
                } else {
                    projectId = showPlansRequest['project_id'];
                    offset = showPlansRequest['offset'];
                    limit = showPlansRequest['limit'];
                    name = showPlansRequest['name'];
                    currentStage = showPlansRequest['current_stage'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling showPlans.');
            }
            if (offset === null || offset === undefined) {
                throw new RequiredError('offset','Required parameter offset was null or undefined when calling showPlans.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit === null || limit === undefined) {
                throw new RequiredError('limit','Required parameter limit was null or undefined when calling showPlans.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (currentStage !== null && currentStage !== undefined) {
                localVarQueryParameter['current_stage'] = currentStage;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取异步进度
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showProgress(showProgressRequest?: ShowProgressRequest) {
            const options = {
                method: "GET",
                url: "/GT3KServer/v4/progress/{operation_uri}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let operationUri;
            
            let projectUuid;

            if (showProgressRequest !== null && showProgressRequest !== undefined) {
                if (showProgressRequest instanceof ShowProgressRequest) {
                    operationUri = showProgressRequest.operationUri;
                    projectUuid = showProgressRequest.projectUuid;
                } else {
                    operationUri = showProgressRequest['operation_uri'];
                    projectUuid = showProgressRequest['project_uuid'];
                }
            }

        
            if (operationUri === null || operationUri === undefined) {
            throw new RequiredError('operationUri','Required parameter operationUri was null or undefined when calling showProgress.');
            }
            if (projectUuid !== null && projectUuid !== undefined) {
                localVarQueryParameter['project_uuid'] = projectUuid;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'operation_uri': operationUri, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询质量报告看板统计信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showProjectDataDashboard(showProjectDataDashboardRequest?: ShowProjectDataDashboardRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/data-dashboard/overview",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let projectId;

            if (showProjectDataDashboardRequest !== null && showProjectDataDashboardRequest !== undefined) {
                if (showProjectDataDashboardRequest instanceof ShowProjectDataDashboardRequest) {
                    projectId = showProjectDataDashboardRequest.projectId;
                    body = showProjectDataDashboardRequest.body
                } else {
                    projectId = showProjectDataDashboardRequest['project_id'];
                    body = showProjectDataDashboardRequest['body'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling showProjectDataDashboard.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 用户获取自己当前已经注册的服务
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showRegisterService() {
            const options = {
                method: "GET",
                url: "/v1/services",
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
         * 实时计算单个自定义报表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showReport(showReportRequest?: ShowReportRequest) {
            const options = {
                method: "POST",
                url: "/v4/{project_id}/versions/{plan_id}/custom-reports/generate",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let projectId;
            
            let planId;

            if (showReportRequest !== null && showReportRequest !== undefined) {
                if (showReportRequest instanceof ShowReportRequest) {
                    projectId = showReportRequest.projectId;
                    planId = showReportRequest.planId;
                    body = showReportRequest.body
                } else {
                    projectId = showReportRequest['project_id'];
                    planId = showReportRequest['plan_id'];
                    body = showReportRequest['body'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling showReport.');
            }
            if (planId === null || planId === undefined) {
            throw new RequiredError('planId','Required parameter planId was null or undefined when calling showReport.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'project_id': projectId,'plan_id': planId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 质量报告需求测试情况统计
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showRequirementsOverview(showRequirementsOverviewRequest?: ShowRequirementsOverviewRequest) {
            const options = {
                method: "POST",
                url: "/testreport/v4/{project_id}/versions/{version_id}/requirements/overview",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let projectId;
            
            let versionId;

            if (showRequirementsOverviewRequest !== null && showRequirementsOverviewRequest !== undefined) {
                if (showRequirementsOverviewRequest instanceof ShowRequirementsOverviewRequest) {
                    projectId = showRequirementsOverviewRequest.projectId;
                    versionId = showRequirementsOverviewRequest.versionId;
                    body = showRequirementsOverviewRequest.body
                } else {
                    projectId = showRequirementsOverviewRequest['project_id'];
                    versionId = showRequirementsOverviewRequest['version_id'];
                    body = showRequirementsOverviewRequest['body'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling showRequirementsOverview.');
            }
            if (versionId === null || versionId === undefined) {
            throw new RequiredError('versionId','Required parameter versionId was null or undefined when calling showRequirementsOverview.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'project_id': projectId,'version_id': versionId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据条件分页获取评审对象V2
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showReviewByPage(showReviewByPageRequest?: ShowReviewByPageRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/reviews/page",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let projectId;

            if (showReviewByPageRequest !== null && showReviewByPageRequest !== undefined) {
                if (showReviewByPageRequest instanceof ShowReviewByPageRequest) {
                    projectId = showReviewByPageRequest.projectId;
                    body = showReviewByPageRequest.body
                } else {
                    projectId = showReviewByPageRequest['project_id'];
                    body = showReviewByPageRequest['body'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling showReviewByPage.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据条件分页获取场景对象V2
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showSceneByPage(showSceneByPageRequest?: ShowSceneByPageRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/scenes/page",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let projectId;

            if (showSceneByPageRequest !== null && showSceneByPageRequest !== undefined) {
                if (showSceneByPageRequest instanceof ShowSceneByPageRequest) {
                    projectId = showSceneByPageRequest.projectId;
                    body = showSceneByPageRequest.body
                } else {
                    projectId = showSceneByPageRequest['project_id'];
                    body = showSceneByPageRequest['body'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling showSceneByPage.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据脑图id查询统计数目
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showStatisticById(showStatisticByIdRequest?: ShowStatisticByIdRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/statistics/{mindmap_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let projectId;
            
            let mindmapId;

            if (showStatisticByIdRequest !== null && showStatisticByIdRequest !== undefined) {
                if (showStatisticByIdRequest instanceof ShowStatisticByIdRequest) {
                    projectId = showStatisticByIdRequest.projectId;
                    mindmapId = showStatisticByIdRequest.mindmapId;
                } else {
                    projectId = showStatisticByIdRequest['project_id'];
                    mindmapId = showStatisticByIdRequest['mindmap_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling showStatisticById.');
            }
            if (mindmapId === null || mindmapId === undefined) {
            throw new RequiredError('mindmapId','Required parameter mindmapId was null or undefined when calling showStatisticById.');
            }

            options.pathParams = { 'project_id': projectId,'mindmap_id': mindmapId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据入参动态查询系统配置中的信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showSystemConfigs(showSystemConfigsRequest?: ShowSystemConfigsRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/system-config/find-all",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let projectId;

            if (showSystemConfigsRequest !== null && showSystemConfigsRequest !== undefined) {
                if (showSystemConfigsRequest instanceof ShowSystemConfigsRequest) {
                    projectId = showSystemConfigsRequest.projectId;
                    body = showSystemConfigsRequest.body
                } else {
                    projectId = showSystemConfigsRequest['project_id'];
                    body = showSystemConfigsRequest['body'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling showSystemConfigs.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取模板V2
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showTemplateById(showTemplateByIdRequest?: ShowTemplateByIdRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/templates/{id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let projectId;
            
            let id;

            if (showTemplateByIdRequest !== null && showTemplateByIdRequest !== undefined) {
                if (showTemplateByIdRequest instanceof ShowTemplateByIdRequest) {
                    projectId = showTemplateByIdRequest.projectId;
                    id = showTemplateByIdRequest.id;
                } else {
                    projectId = showTemplateByIdRequest['project_id'];
                    id = showTemplateByIdRequest['id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling showTemplateById.');
            }
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling showTemplateById.');
            }

            options.pathParams = { 'project_id': projectId,'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据条件分页获取模板V3
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showTemplateByPage(showTemplateByPageRequest?: ShowTemplateByPageRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/templates/page",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let projectId;

            if (showTemplateByPageRequest !== null && showTemplateByPageRequest !== undefined) {
                if (showTemplateByPageRequest instanceof ShowTemplateByPageRequest) {
                    projectId = showTemplateByPageRequest.projectId;
                    body = showTemplateByPageRequest.body
                } else {
                    projectId = showTemplateByPageRequest['project_id'];
                    body = showTemplateByPageRequest['body'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling showTemplateByPage.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询用例详情
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showTestCase(showTestCaseRequest?: ShowTestCaseRequest) {
            const options = {
                method: "GET",
                url: "/GT3KServer/v4/testcases/{testcase_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let testcaseId;
            
            let versionUri;
            
            let projectUuid;
            
            let taskUri;
            
            let refresh;
            
            let isRecycle;

            if (showTestCaseRequest !== null && showTestCaseRequest !== undefined) {
                if (showTestCaseRequest instanceof ShowTestCaseRequest) {
                    testcaseId = showTestCaseRequest.testcaseId;
                    versionUri = showTestCaseRequest.versionUri;
                    projectUuid = showTestCaseRequest.projectUuid;
                    taskUri = showTestCaseRequest.taskUri;
                    refresh = showTestCaseRequest.refresh;
                    isRecycle = showTestCaseRequest.isRecycle;
                } else {
                    testcaseId = showTestCaseRequest['testcase_id'];
                    versionUri = showTestCaseRequest['version_uri'];
                    projectUuid = showTestCaseRequest['project_uuid'];
                    taskUri = showTestCaseRequest['task_uri'];
                    refresh = showTestCaseRequest['refresh'];
                    isRecycle = showTestCaseRequest['is_recycle'];
                }
            }

        
            if (testcaseId === null || testcaseId === undefined) {
            throw new RequiredError('testcaseId','Required parameter testcaseId was null or undefined when calling showTestCase.');
            }
            if (versionUri !== null && versionUri !== undefined) {
                localVarQueryParameter['version_uri'] = versionUri;
            }
            if (projectUuid !== null && projectUuid !== undefined) {
                localVarQueryParameter['project_uuid'] = projectUuid;
            }
            if (taskUri !== null && taskUri !== undefined) {
                localVarQueryParameter['task_uri'] = taskUri;
            }
            if (refresh !== null && refresh !== undefined) {
                localVarQueryParameter['refresh'] = refresh;
            }
            if (isRecycle !== null && isRecycle !== undefined) {
                localVarQueryParameter['is_recycle'] = isRecycle;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'testcase_id': testcaseId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询用户用例关联缺陷的统计信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showTestCaseAndDefectInfo(showTestCaseAndDefectInfoRequest?: ShowTestCaseAndDefectInfoRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/testcases/defect-info/list-by-creation-time",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let projectId;

            if (showTestCaseAndDefectInfoRequest !== null && showTestCaseAndDefectInfoRequest !== undefined) {
                if (showTestCaseAndDefectInfoRequest instanceof ShowTestCaseAndDefectInfoRequest) {
                    projectId = showTestCaseAndDefectInfoRequest.projectId;
                    body = showTestCaseAndDefectInfoRequest.body
                } else {
                    projectId = showTestCaseAndDefectInfoRequest['project_id'];
                    body = showTestCaseAndDefectInfoRequest['body'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling showTestCaseAndDefectInfo.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取测试用例详情
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showTestCaseDetail(showTestCaseDetailRequest?: ShowTestCaseDetailRequest) {
            const options = {
                method: "GET",
                url: "/v1/projects/{project_id}/testcases/{testcase_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let projectId;
            
            let testcaseId;

            if (showTestCaseDetailRequest !== null && showTestCaseDetailRequest !== undefined) {
                if (showTestCaseDetailRequest instanceof ShowTestCaseDetailRequest) {
                    projectId = showTestCaseDetailRequest.projectId;
                    testcaseId = showTestCaseDetailRequest.testcaseId;
                } else {
                    projectId = showTestCaseDetailRequest['project_id'];
                    testcaseId = showTestCaseDetailRequest['testcase_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling showTestCaseDetail.');
            }
            if (testcaseId === null || testcaseId === undefined) {
            throw new RequiredError('testcaseId','Required parameter testcaseId was null or undefined when calling showTestCaseDetail.');
            }

            options.pathParams = { 'project_id': projectId,'testcase_id': testcaseId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 通过用例编号获取测试用例详情
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showTestCaseDetailV2(showTestCaseDetailV2Request?: ShowTestCaseDetailV2Request) {
            const options = {
                method: "GET",
                url: "/v1/projects/{project_id}/testcase",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let projectId;
            
            let testcaseNumber;

            if (showTestCaseDetailV2Request !== null && showTestCaseDetailV2Request !== undefined) {
                if (showTestCaseDetailV2Request instanceof ShowTestCaseDetailV2Request) {
                    projectId = showTestCaseDetailV2Request.projectId;
                    testcaseNumber = showTestCaseDetailV2Request.testcaseNumber;
                } else {
                    projectId = showTestCaseDetailV2Request['project_id'];
                    testcaseNumber = showTestCaseDetailV2Request['testcase_number'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling showTestCaseDetailV2.');
            }
            if (testcaseNumber === null || testcaseNumber === undefined) {
                throw new RequiredError('testcaseNumber','Required parameter testcaseNumber was null or undefined when calling showTestCaseDetailV2.');
            }
            if (testcaseNumber !== null && testcaseNumber !== undefined) {
                localVarQueryParameter['testcase_number'] = testcaseNumber;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据用例查询评审记录
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showTestCaseReviews(showTestCaseReviewsRequest?: ShowTestCaseReviewsRequest) {
            const options = {
                method: "GET",
                url: "/GT3KServer/v4/testcases/{testcase_uri}/review",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let projectUuid;
            
            let versionUri;
            
            let pageNo;
            
            let pageSize;
            
            let testcaseUri;

            if (showTestCaseReviewsRequest !== null && showTestCaseReviewsRequest !== undefined) {
                if (showTestCaseReviewsRequest instanceof ShowTestCaseReviewsRequest) {
                    projectUuid = showTestCaseReviewsRequest.projectUuid;
                    versionUri = showTestCaseReviewsRequest.versionUri;
                    pageNo = showTestCaseReviewsRequest.pageNo;
                    pageSize = showTestCaseReviewsRequest.pageSize;
                    testcaseUri = showTestCaseReviewsRequest.testcaseUri;
                } else {
                    projectUuid = showTestCaseReviewsRequest['project_uuid'];
                    versionUri = showTestCaseReviewsRequest['version_uri'];
                    pageNo = showTestCaseReviewsRequest['page_no'];
                    pageSize = showTestCaseReviewsRequest['page_size'];
                    testcaseUri = showTestCaseReviewsRequest['testcase_uri'];
                }
            }

        
            if (projectUuid === null || projectUuid === undefined) {
                throw new RequiredError('projectUuid','Required parameter projectUuid was null or undefined when calling showTestCaseReviews.');
            }
            if (projectUuid !== null && projectUuid !== undefined) {
                localVarQueryParameter['project_uuid'] = projectUuid;
            }
            if (versionUri === null || versionUri === undefined) {
                throw new RequiredError('versionUri','Required parameter versionUri was null or undefined when calling showTestCaseReviews.');
            }
            if (versionUri !== null && versionUri !== undefined) {
                localVarQueryParameter['version_uri'] = versionUri;
            }
            if (pageNo === null || pageNo === undefined) {
                throw new RequiredError('pageNo','Required parameter pageNo was null or undefined when calling showTestCaseReviews.');
            }
            if (pageNo !== null && pageNo !== undefined) {
                localVarQueryParameter['page_no'] = pageNo;
            }
            if (pageSize === null || pageSize === undefined) {
                throw new RequiredError('pageSize','Required parameter pageSize was null or undefined when calling showTestCaseReviews.');
            }
            if (pageSize !== null && pageSize !== undefined) {
                localVarQueryParameter['page_size'] = pageSize;
            }
            if (testcaseUri === null || testcaseUri === undefined) {
            throw new RequiredError('testcaseUri','Required parameter testcaseUri was null or undefined when calling showTestCaseReviews.');
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'testcase_uri': testcaseUri, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 版本测试用例变更统计（只统计分支，不统计基线）
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showTestCasesChangeStatistics(showTestCasesChangeStatisticsRequest?: ShowTestCasesChangeStatisticsRequest) {
            const options = {
                method: "GET",
                url: "/GT3KServer/v4/{project_id}/versions/{version_id}/testcases/change-statistics",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let projectId;
            
            let versionId;

            if (showTestCasesChangeStatisticsRequest !== null && showTestCasesChangeStatisticsRequest !== undefined) {
                if (showTestCasesChangeStatisticsRequest instanceof ShowTestCasesChangeStatisticsRequest) {
                    projectId = showTestCasesChangeStatisticsRequest.projectId;
                    versionId = showTestCasesChangeStatisticsRequest.versionId;
                } else {
                    projectId = showTestCasesChangeStatisticsRequest['project_id'];
                    versionId = showTestCasesChangeStatisticsRequest['version_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling showTestCasesChangeStatistics.');
            }
            if (versionId === null || versionId === undefined) {
            throw new RequiredError('versionId','Required parameter versionId was null or undefined when calling showTestCasesChangeStatistics.');
            }

            options.pathParams = { 'project_id': projectId,'version_id': versionId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据条件分页获取测试用例对象V2
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showTestcaseByPage(showTestcaseByPageRequest?: ShowTestcaseByPageRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/testcases/page",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let projectId;

            if (showTestcaseByPageRequest !== null && showTestcaseByPageRequest !== undefined) {
                if (showTestcaseByPageRequest instanceof ShowTestcaseByPageRequest) {
                    projectId = showTestcaseByPageRequest.projectId;
                    body = showTestcaseByPageRequest.body
                } else {
                    projectId = showTestcaseByPageRequest['project_id'];
                    body = showTestcaseByPageRequest['body'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling showTestcaseByPage.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据条件分页获取测试点对象V2
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showTestpointByPage(showTestpointByPageRequest?: ShowTestpointByPageRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/testpoints/page",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let projectId;

            if (showTestpointByPageRequest !== null && showTestpointByPageRequest !== undefined) {
                if (showTestpointByPageRequest instanceof ShowTestpointByPageRequest) {
                    projectId = showTestpointByPageRequest.projectId;
                    body = showTestpointByPageRequest.body
                } else {
                    projectId = showTestpointByPageRequest['project_id'];
                    body = showTestpointByPageRequest['body'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling showTestpointByPage.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取租户订单信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showUserAccessInfo(showUserAccessInfoRequest?: ShowUserAccessInfoRequest) {
            const options = {
                method: "GET",
                url: "/GT3KServer/v4/domain/info",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let projectUuid;

            if (showUserAccessInfoRequest !== null && showUserAccessInfoRequest !== undefined) {
                if (showUserAccessInfoRequest instanceof ShowUserAccessInfoRequest) {
                    projectUuid = showUserAccessInfoRequest.projectUuid;
                } else {
                    projectUuid = showUserAccessInfoRequest['project_uuid'];
                }
            }

        
            if (projectUuid !== null && projectUuid !== undefined) {
                localVarQueryParameter['project_uuid'] = projectUuid;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询时段内用例的执行情况
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showUserExecuteTestCaseInfo(showUserExecuteTestCaseInfoRequest?: ShowUserExecuteTestCaseInfoRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/testcases/execute-info/statistic-by-user",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let projectId;

            if (showUserExecuteTestCaseInfoRequest !== null && showUserExecuteTestCaseInfoRequest !== undefined) {
                if (showUserExecuteTestCaseInfoRequest instanceof ShowUserExecuteTestCaseInfoRequest) {
                    projectId = showUserExecuteTestCaseInfoRequest.projectId;
                    body = showUserExecuteTestCaseInfoRequest.body
                } else {
                    projectId = showUserExecuteTestCaseInfoRequest['project_id'];
                    body = showUserExecuteTestCaseInfoRequest['body'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling showUserExecuteTestCaseInfo.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改关键字信息接口
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateBasicAwById(updateBasicAwByIdRequest?: UpdateBasicAwByIdRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/basic-aw/{aw_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let projectId;
            
            let awId;

            if (updateBasicAwByIdRequest !== null && updateBasicAwByIdRequest !== undefined) {
                if (updateBasicAwByIdRequest instanceof UpdateBasicAwByIdRequest) {
                    projectId = updateBasicAwByIdRequest.projectId;
                    awId = updateBasicAwByIdRequest.awId;
                    body = updateBasicAwByIdRequest.body
                } else {
                    projectId = updateBasicAwByIdRequest['project_id'];
                    awId = updateBasicAwByIdRequest['aw_id'];
                    body = updateBasicAwByIdRequest['body'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling updateBasicAwById.');
            }
            if (awId === null || awId === undefined) {
            throw new RequiredError('awId','Required parameter awId was null or undefined when calling updateBasicAwById.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'project_id': projectId,'aw_id': awId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改测试计划
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateIterator(updateIteratorRequest?: UpdateIteratorRequest) {
            const options = {
                method: "PUT",
                url: "/GT3KServer/v4/iterators/{iterator_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let iteratorId;

            if (updateIteratorRequest !== null && updateIteratorRequest !== undefined) {
                if (updateIteratorRequest instanceof UpdateIteratorRequest) {
                    iteratorId = updateIteratorRequest.iteratorId;
                    body = updateIteratorRequest.body
                } else {
                    iteratorId = updateIteratorRequest['iterator_id'];
                    body = updateIteratorRequest['body'];
                }
            }

        
            if (iteratorId === null || iteratorId === undefined) {
            throw new RequiredError('iteratorId','Required parameter iteratorId was null or undefined when calling updateIterator.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'iterator_id': iteratorId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新已注册服务
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateService(updateServiceRequest?: UpdateServiceRequest) {
            const options = {
                method: "PUT",
                url: "/v1/services/{service_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let serviceId;

            if (updateServiceRequest !== null && updateServiceRequest !== undefined) {
                if (updateServiceRequest instanceof UpdateServiceRequest) {
                    serviceId = updateServiceRequest.serviceId;
                    body = updateServiceRequest.body
                } else {
                    serviceId = updateServiceRequest['service_id'];
                    body = updateServiceRequest['body'];
                }
            }

        
            if (serviceId === null || serviceId === undefined) {
            throw new RequiredError('serviceId','Required parameter serviceId was null or undefined when calling updateService.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'service_id': serviceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新自定义测试服务类型用例
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateTestCase(updateTestCaseRequest?: UpdateTestCaseRequest) {
            const options = {
                method: "PUT",
                url: "/v1/projects/{project_id}/testcases/{testcase_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let projectId;
            
            let testcaseId;

            if (updateTestCaseRequest !== null && updateTestCaseRequest !== undefined) {
                if (updateTestCaseRequest instanceof UpdateTestCaseRequest) {
                    projectId = updateTestCaseRequest.projectId;
                    testcaseId = updateTestCaseRequest.testcaseId;
                    body = updateTestCaseRequest.body
                } else {
                    projectId = updateTestCaseRequest['project_id'];
                    testcaseId = updateTestCaseRequest['testcase_id'];
                    body = updateTestCaseRequest['body'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling updateTestCase.');
            }
            if (testcaseId === null || testcaseId === undefined) {
            throw new RequiredError('testcaseId','Required parameter testcaseId was null or undefined when calling updateTestCase.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'project_id': projectId,'testcase_id': testcaseId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新tmss用例和用例脚本
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateTestCaseAndScript(updateTestCaseAndScriptRequest?: UpdateTestCaseAndScriptRequest) {
            const options = {
                method: "PUT",
                url: "/v4/{project_id}/testcase/{tmss_case_uri}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let projectId;
            
            let tmssCaseUri;
            
            let turnOnAwmapping;

            if (updateTestCaseAndScriptRequest !== null && updateTestCaseAndScriptRequest !== undefined) {
                if (updateTestCaseAndScriptRequest instanceof UpdateTestCaseAndScriptRequest) {
                    projectId = updateTestCaseAndScriptRequest.projectId;
                    tmssCaseUri = updateTestCaseAndScriptRequest.tmssCaseUri;
                    body = updateTestCaseAndScriptRequest.body
                    turnOnAwmapping = updateTestCaseAndScriptRequest.turnOnAwmapping;
                } else {
                    projectId = updateTestCaseAndScriptRequest['project_id'];
                    tmssCaseUri = updateTestCaseAndScriptRequest['tmss_case_uri'];
                    body = updateTestCaseAndScriptRequest['body'];
                    turnOnAwmapping = updateTestCaseAndScriptRequest['turn_on_awmapping'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling updateTestCaseAndScript.');
            }
            if (tmssCaseUri === null || tmssCaseUri === undefined) {
            throw new RequiredError('tmssCaseUri','Required parameter tmssCaseUri was null or undefined when calling updateTestCaseAndScript.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (turnOnAwmapping !== null && turnOnAwmapping !== undefined) {
                localVarQueryParameter['turn_on_awmapping'] = turnOnAwmapping;
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId,'tmss_case_uri': tmssCaseUri, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改用例评论
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateTestCaseComment(updateTestCaseCommentRequest?: UpdateTestCaseCommentRequest) {
            const options = {
                method: "PUT",
                url: "/GT3KServer/v4/{project_id}/testcases/{testcase_id}/comments/{comment_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let projectId;
            
            let testcaseId;
            
            let commentId;

            if (updateTestCaseCommentRequest !== null && updateTestCaseCommentRequest !== undefined) {
                if (updateTestCaseCommentRequest instanceof UpdateTestCaseCommentRequest) {
                    projectId = updateTestCaseCommentRequest.projectId;
                    testcaseId = updateTestCaseCommentRequest.testcaseId;
                    commentId = updateTestCaseCommentRequest.commentId;
                    body = updateTestCaseCommentRequest.body
                } else {
                    projectId = updateTestCaseCommentRequest['project_id'];
                    testcaseId = updateTestCaseCommentRequest['testcase_id'];
                    commentId = updateTestCaseCommentRequest['comment_id'];
                    body = updateTestCaseCommentRequest['body'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling updateTestCaseComment.');
            }
            if (testcaseId === null || testcaseId === undefined) {
            throw new RequiredError('testcaseId','Required parameter testcaseId was null or undefined when calling updateTestCaseComment.');
            }
            if (commentId === null || commentId === undefined) {
            throw new RequiredError('commentId','Required parameter commentId was null or undefined when calling updateTestCaseComment.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'project_id': projectId,'testcase_id': testcaseId,'comment_id': commentId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 批量更新测试用例结果
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateTestCaseResult(updateTestCaseResultRequest?: UpdateTestCaseResultRequest) {
            const options = {
                method: "POST",
                url: "/v1/projects/{project_id}/testcases/result",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let projectId;

            if (updateTestCaseResultRequest !== null && updateTestCaseResultRequest !== undefined) {
                if (updateTestCaseResultRequest instanceof UpdateTestCaseResultRequest) {
                    projectId = updateTestCaseResultRequest.projectId;
                    body = updateTestCaseResultRequest.body
                } else {
                    projectId = updateTestCaseResultRequest['project_id'];
                    body = updateTestCaseResultRequest['body'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling updateTestCaseResult.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改测试报告自定义模块
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateTestReportCustomDetailByUri(updateTestReportCustomDetailByUriRequest?: UpdateTestReportCustomDetailByUriRequest) {
            const options = {
                method: "PUT",
                url: "/v4/{project_id}/versions/{version_uri}/test-reports/{report_uri}/custom-infos/{custom_info_uri}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let projectId;
            
            let versionUri;
            
            let reportUri;
            
            let customInfoUri;

            if (updateTestReportCustomDetailByUriRequest !== null && updateTestReportCustomDetailByUriRequest !== undefined) {
                if (updateTestReportCustomDetailByUriRequest instanceof UpdateTestReportCustomDetailByUriRequest) {
                    projectId = updateTestReportCustomDetailByUriRequest.projectId;
                    versionUri = updateTestReportCustomDetailByUriRequest.versionUri;
                    reportUri = updateTestReportCustomDetailByUriRequest.reportUri;
                    customInfoUri = updateTestReportCustomDetailByUriRequest.customInfoUri;
                    body = updateTestReportCustomDetailByUriRequest.body
                } else {
                    projectId = updateTestReportCustomDetailByUriRequest['project_id'];
                    versionUri = updateTestReportCustomDetailByUriRequest['version_uri'];
                    reportUri = updateTestReportCustomDetailByUriRequest['report_uri'];
                    customInfoUri = updateTestReportCustomDetailByUriRequest['custom_info_uri'];
                    body = updateTestReportCustomDetailByUriRequest['body'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling updateTestReportCustomDetailByUri.');
            }
            if (versionUri === null || versionUri === undefined) {
            throw new RequiredError('versionUri','Required parameter versionUri was null or undefined when calling updateTestReportCustomDetailByUri.');
            }
            if (reportUri === null || reportUri === undefined) {
            throw new RequiredError('reportUri','Required parameter reportUri was null or undefined when calling updateTestReportCustomDetailByUri.');
            }
            if (customInfoUri === null || customInfoUri === undefined) {
            throw new RequiredError('customInfoUri','Required parameter customInfoUri was null or undefined when calling updateTestReportCustomDetailByUri.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'project_id': projectId,'version_uri': versionUri,'report_uri': reportUri,'custom_info_uri': customInfoUri, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新用户DNS映射，执行器自定义映射
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateUserDnsMapping(updateUserDnsMappingRequest?: UpdateUserDnsMappingRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/dns-mapping",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let projectId;

            if (updateUserDnsMappingRequest !== null && updateUserDnsMappingRequest !== undefined) {
                if (updateUserDnsMappingRequest instanceof UpdateUserDnsMappingRequest) {
                    projectId = updateUserDnsMappingRequest.projectId;
                    body = updateUserDnsMappingRequest.body
                } else {
                    projectId = updateUserDnsMappingRequest['project_id'];
                    body = updateUserDnsMappingRequest['body'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling updateUserDnsMapping.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 在分支或者测试计划下修改用例
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateVersionTestCase(updateVersionTestCaseRequest?: UpdateVersionTestCaseRequest) {
            const options = {
                method: "PUT",
                url: "/GT3KServer/v4/testcases/{case_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let caseId;

            if (updateVersionTestCaseRequest !== null && updateVersionTestCaseRequest !== undefined) {
                if (updateVersionTestCaseRequest instanceof UpdateVersionTestCaseRequest) {
                    caseId = updateVersionTestCaseRequest.caseId;
                    body = updateVersionTestCaseRequest.body
                } else {
                    caseId = updateVersionTestCaseRequest['case_id'];
                    body = updateVersionTestCaseRequest['body'];
                }
            }

        
            if (caseId === null || caseId === undefined) {
            throw new RequiredError('caseId','Required parameter caseId was null or undefined when calling updateVersionTestCase.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'case_id': caseId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 上传附件
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        uploadCacheFile(uploadCacheFileRequest?: UploadCacheFileRequest) {
            const options = {
                method: "POST",
                url: "/v4/{project_id}/resources/temp-attachments",
                contentType: "multipart/form-data",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            const localVarFormParams = new FormData();
            
            let projectId;
            let file;
            
            
            let override;
            
            let parentType;
            
            let parentUri;

            if (uploadCacheFileRequest !== null && uploadCacheFileRequest !== undefined) {
                if (uploadCacheFileRequest instanceof UploadCacheFileRequest) {
                    projectId = uploadCacheFileRequest.projectId;
                    file = uploadCacheFileRequest.body?.file;
                    override = uploadCacheFileRequest.override;
                    parentType = uploadCacheFileRequest.parentType;
                    parentUri = uploadCacheFileRequest.parentUri;
                } else {
                    projectId = uploadCacheFileRequest['project_id'];
                    file = uploadCacheFileRequest['body']['file'];
                    override = uploadCacheFileRequest['override'];
                    parentType = uploadCacheFileRequest['parent_type'];
                    parentUri = uploadCacheFileRequest['parent_uri'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling uploadCacheFile.');
            }
            if (file === null || file === undefined) {
            throw new RequiredError('file','Required parameter file was null or undefined when calling uploadCacheFile.');
            }
            if (override !== null && override !== undefined) {
                localVarQueryParameter['override'] = override;
            }
            if (parentType !== null && parentType !== undefined) {
                localVarQueryParameter['parent_type'] = parentType;
            }
            if (parentUri !== null && parentUri !== undefined) {
                localVarQueryParameter['parent_uri'] = parentUri;
            }
            if (file !== undefined) { 
                localVarFormParams.append('file', file as any);
            }
            localVarHeaderParameter['Content-Type'] = 'application/x-www-form-urlencoded';
            localVarHeaderParameter['Content-Type'] = 'multipart/form-data';
            options.data = localVarFormParams;
            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 通过导入仓库中的文件生成接口测试套
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createApiTestSuiteByRepoFile(createApiTestSuiteByRepoFileRequest?: CreateApiTestSuiteByRepoFileRequest) {
            const options = {
                method: "POST",
                url: "/v1/projects/{project_id}/repository/testsuites",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let projectId;

            if (createApiTestSuiteByRepoFileRequest !== null && createApiTestSuiteByRepoFileRequest !== undefined) {
                if (createApiTestSuiteByRepoFileRequest instanceof CreateApiTestSuiteByRepoFileRequest) {
                    projectId = createApiTestSuiteByRepoFileRequest.projectId;
                    body = createApiTestSuiteByRepoFileRequest.body
                } else {
                    projectId = createApiTestSuiteByRepoFileRequest['project_id'];
                    body = createApiTestSuiteByRepoFileRequest['body'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling createApiTestSuiteByRepoFile.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取环境参数分组列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listEnvironments(listEnvironmentsRequest?: ListEnvironmentsRequest) {
            const options = {
                method: "GET",
                url: "/v1/projects/{project_id}/environments",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let projectId;
            
            let offset;
            
            let limit;

            if (listEnvironmentsRequest !== null && listEnvironmentsRequest !== undefined) {
                if (listEnvironmentsRequest instanceof ListEnvironmentsRequest) {
                    projectId = listEnvironmentsRequest.projectId;
                    offset = listEnvironmentsRequest.offset;
                    limit = listEnvironmentsRequest.limit;
                } else {
                    projectId = listEnvironmentsRequest['project_id'];
                    offset = listEnvironmentsRequest['offset'];
                    limit = listEnvironmentsRequest['limit'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling listEnvironments.');
            }
            if (offset === null || offset === undefined) {
                throw new RequiredError('offset','Required parameter offset was null or undefined when calling listEnvironments.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit === null || limit === undefined) {
                throw new RequiredError('limit','Required parameter limit was null or undefined when calling listEnvironments.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 对外API
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        uploadStepImg(uploadStepImgRequest?: UploadStepImgRequest) {
            const options = {
                method: "POST",
                url: "/v4/{project_id}/images/upload",
                contentType: "multipart/form-data",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            const localVarFormParams = new FormData();
            
            let projectId;
            let file;
            

            if (uploadStepImgRequest !== null && uploadStepImgRequest !== undefined) {
                if (uploadStepImgRequest instanceof UploadStepImgRequest) {
                    projectId = uploadStepImgRequest.projectId;
                    file = uploadStepImgRequest.body?.file;
                } else {
                    projectId = uploadStepImgRequest['project_id'];
                    file = uploadStepImgRequest['body']['file'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling uploadStepImg.');
            }
            if (file === null || file === undefined) {
            throw new RequiredError('file','Required parameter file was null or undefined when calling uploadStepImg.');
            }
            if (file !== undefined) { 
                localVarFormParams.append('file', file as any);
            }
            localVarHeaderParameter['Content-Type'] = 'application/x-www-form-urlencoded';
            localVarHeaderParameter['Content-Type'] = 'multipart/form-data';
            options.data = localVarFormParams;
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 批量删除因子
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchDeleteFacotrByIds(batchDeleteFacotrByIdsRequest?: BatchDeleteFacotrByIdsRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/factor",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let projectId;

            if (batchDeleteFacotrByIdsRequest !== null && batchDeleteFacotrByIdsRequest !== undefined) {
                if (batchDeleteFacotrByIdsRequest instanceof BatchDeleteFacotrByIdsRequest) {
                    projectId = batchDeleteFacotrByIdsRequest.projectId;
                    body = batchDeleteFacotrByIdsRequest.body
                } else {
                    projectId = batchDeleteFacotrByIdsRequest['project_id'];
                    body = batchDeleteFacotrByIdsRequest['body'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling batchDeleteFacotrByIds.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 批量查询用例V3
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchShowTestCase(batchShowTestCaseRequest?: BatchShowTestCaseRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/testcases",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let projectId;

            if (batchShowTestCaseRequest !== null && batchShowTestCaseRequest !== undefined) {
                if (batchShowTestCaseRequest instanceof BatchShowTestCaseRequest) {
                    projectId = batchShowTestCaseRequest.projectId;
                    body = batchShowTestCaseRequest.body
                } else {
                    projectId = batchShowTestCaseRequest['project_id'];
                    body = batchShowTestCaseRequest['body'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling batchShowTestCase.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 新增资产树节点
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createAssetTree(createAssetTreeRequest?: CreateAssetTreeRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/asset-tree/{asset_id}/{parent_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let projectId;
            
            let assetId;
            
            let parentId;

            if (createAssetTreeRequest !== null && createAssetTreeRequest !== undefined) {
                if (createAssetTreeRequest instanceof CreateAssetTreeRequest) {
                    projectId = createAssetTreeRequest.projectId;
                    assetId = createAssetTreeRequest.assetId;
                    parentId = createAssetTreeRequest.parentId;
                    body = createAssetTreeRequest.body
                } else {
                    projectId = createAssetTreeRequest['project_id'];
                    assetId = createAssetTreeRequest['asset_id'];
                    parentId = createAssetTreeRequest['parent_id'];
                    body = createAssetTreeRequest['body'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling createAssetTree.');
            }
            if (assetId === null || assetId === undefined) {
            throw new RequiredError('assetId','Required parameter assetId was null or undefined when calling createAssetTree.');
            }
            if (parentId === null || parentId === undefined) {
            throw new RequiredError('parentId','Required parameter parentId was null or undefined when calling createAssetTree.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'project_id': projectId,'asset_id': assetId,'parent_id': parentId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 备份脑图V2
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createBackupMindmap(createBackupMindmapRequest?: CreateBackupMindmapRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/mindmap-backups/backup",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let projectId;

            if (createBackupMindmapRequest !== null && createBackupMindmapRequest !== undefined) {
                if (createBackupMindmapRequest instanceof CreateBackupMindmapRequest) {
                    projectId = createBackupMindmapRequest.projectId;
                    body = createBackupMindmapRequest.body
                } else {
                    projectId = createBackupMindmapRequest['project_id'];
                    body = createBackupMindmapRequest['body'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling createBackupMindmap.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 保存模板V2
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createTemplate(createTemplateRequest?: CreateTemplateRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/templates",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let projectId;

            if (createTemplateRequest !== null && createTemplateRequest !== undefined) {
                if (createTemplateRequest instanceof CreateTemplateRequest) {
                    projectId = createTemplateRequest.projectId;
                    body = createTemplateRequest.body
                } else {
                    projectId = createTemplateRequest['project_id'];
                    body = createTemplateRequest['body'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling createTemplate.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除资产
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteAsset(deleteAssetRequest?: DeleteAssetRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/asset/{id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let projectId;
            
            let id;

            if (deleteAssetRequest !== null && deleteAssetRequest !== undefined) {
                if (deleteAssetRequest instanceof DeleteAssetRequest) {
                    projectId = deleteAssetRequest.projectId;
                    id = deleteAssetRequest.id;
                } else {
                    projectId = deleteAssetRequest['project_id'];
                    id = deleteAssetRequest['id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling deleteAsset.');
            }
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling deleteAsset.');
            }

            options.pathParams = { 'project_id': projectId,'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除资产树节点
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteAssetTree(deleteAssetTreeRequest?: DeleteAssetTreeRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/asset-tree/{asset_id}/{parent_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let projectId;
            
            let assetId;
            
            let parentId;

            if (deleteAssetTreeRequest !== null && deleteAssetTreeRequest !== undefined) {
                if (deleteAssetTreeRequest instanceof DeleteAssetTreeRequest) {
                    projectId = deleteAssetTreeRequest.projectId;
                    assetId = deleteAssetTreeRequest.assetId;
                    parentId = deleteAssetTreeRequest.parentId;
                } else {
                    projectId = deleteAssetTreeRequest['project_id'];
                    assetId = deleteAssetTreeRequest['asset_id'];
                    parentId = deleteAssetTreeRequest['parent_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling deleteAssetTree.');
            }
            if (assetId === null || assetId === undefined) {
            throw new RequiredError('assetId','Required parameter assetId was null or undefined when calling deleteAssetTree.');
            }
            if (parentId === null || parentId === undefined) {
            throw new RequiredError('parentId','Required parameter parentId was null or undefined when calling deleteAssetTree.');
            }

            options.pathParams = { 'project_id': projectId,'asset_id': assetId,'parent_id': parentId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据id删除脑图备份V2
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteMindmapBackupById(deleteMindmapBackupByIdRequest?: DeleteMindmapBackupByIdRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/mindmap-backups/{id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let projectId;
            
            let id;

            if (deleteMindmapBackupByIdRequest !== null && deleteMindmapBackupByIdRequest !== undefined) {
                if (deleteMindmapBackupByIdRequest instanceof DeleteMindmapBackupByIdRequest) {
                    projectId = deleteMindmapBackupByIdRequest.projectId;
                    id = deleteMindmapBackupByIdRequest.id;
                } else {
                    projectId = deleteMindmapBackupByIdRequest['project_id'];
                    id = deleteMindmapBackupByIdRequest['id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling deleteMindmapBackupById.');
            }
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling deleteMindmapBackupById.');
            }

            options.pathParams = { 'project_id': projectId,'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除脑图回收站V2
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteMindmapRecycleById(deleteMindmapRecycleByIdRequest?: DeleteMindmapRecycleByIdRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/mindmap-recycles/{id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let projectId;
            
            let id;

            if (deleteMindmapRecycleByIdRequest !== null && deleteMindmapRecycleByIdRequest !== undefined) {
                if (deleteMindmapRecycleByIdRequest instanceof DeleteMindmapRecycleByIdRequest) {
                    projectId = deleteMindmapRecycleByIdRequest.projectId;
                    id = deleteMindmapRecycleByIdRequest.id;
                } else {
                    projectId = deleteMindmapRecycleByIdRequest['project_id'];
                    id = deleteMindmapRecycleByIdRequest['id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling deleteMindmapRecycleById.');
            }
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling deleteMindmapRecycleById.');
            }

            options.pathParams = { 'project_id': projectId,'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除模板V2
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteTemplateById(deleteTemplateByIdRequest?: DeleteTemplateByIdRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/templates/{id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let projectId;
            
            let id;

            if (deleteTemplateByIdRequest !== null && deleteTemplateByIdRequest !== undefined) {
                if (deleteTemplateByIdRequest instanceof DeleteTemplateByIdRequest) {
                    projectId = deleteTemplateByIdRequest.projectId;
                    id = deleteTemplateByIdRequest.id;
                } else {
                    projectId = deleteTemplateByIdRequest['project_id'];
                    id = deleteTemplateByIdRequest['id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling deleteTemplateById.');
            }
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling deleteTemplateById.');
            }

            options.pathParams = { 'project_id': projectId,'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 下载资产模板
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        downloadAssetTemplate(downloadAssetTemplateRequest?: DownloadAssetTemplateRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/asset/template",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let projectId;

            if (downloadAssetTemplateRequest !== null && downloadAssetTemplateRequest !== undefined) {
                if (downloadAssetTemplateRequest instanceof DownloadAssetTemplateRequest) {
                    projectId = downloadAssetTemplateRequest.projectId;
                } else {
                    projectId = downloadAssetTemplateRequest['project_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling downloadAssetTemplate.');
            }

            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 因子库导出
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        exportFactor(exportFactorRequest?: ExportFactorRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/asset/{asset_id}/export",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let projectId;
            
            let assetId;

            if (exportFactorRequest !== null && exportFactorRequest !== undefined) {
                if (exportFactorRequest instanceof ExportFactorRequest) {
                    projectId = exportFactorRequest.projectId;
                    assetId = exportFactorRequest.assetId;
                    body = exportFactorRequest.body
                } else {
                    projectId = exportFactorRequest['project_id'];
                    assetId = exportFactorRequest['asset_id'];
                    body = exportFactorRequest['body'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling exportFactor.');
            }
            if (assetId === null || assetId === undefined) {
            throw new RequiredError('assetId','Required parameter assetId was null or undefined when calling exportFactor.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'project_id': projectId,'asset_id': assetId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 资产导入
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        importAsset(importAssetRequest?: ImportAssetRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/asset/import",
                contentType: "multipart/form-data",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            const localVarFormParams = new FormData();
            
            let projectId;
            let excelFile;
            

            if (importAssetRequest !== null && importAssetRequest !== undefined) {
                if (importAssetRequest instanceof ImportAssetRequest) {
                    projectId = importAssetRequest.projectId;
                    excelFile = importAssetRequest.body?.excelFile;
                } else {
                    projectId = importAssetRequest['project_id'];
                    excelFile = importAssetRequest['body']['excelFile'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling importAsset.');
            }
            if (excelFile === null || excelFile === undefined) {
            throw new RequiredError('excelFile','Required parameter excelFile was null or undefined when calling importAsset.');
            }
            if (excelFile !== undefined) { 
                localVarFormParams.append('excel_file', excelFile as any);
            }
            localVarHeaderParameter['Content-Type'] = 'application/x-www-form-urlencoded';
            localVarHeaderParameter['Content-Type'] = 'multipart/form-data';
            options.data = localVarFormParams;
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 因子导入
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        importFactor(importFactorRequest?: ImportFactorRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/asset/{asset_id}/import",
                contentType: "multipart/form-data",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            const localVarFormParams = new FormData();
            
            let projectId;
            
            let assetId;
            let excelFile;
            

            if (importFactorRequest !== null && importFactorRequest !== undefined) {
                if (importFactorRequest instanceof ImportFactorRequest) {
                    projectId = importFactorRequest.projectId;
                    assetId = importFactorRequest.assetId;
                    excelFile = importFactorRequest.body?.excelFile;
                } else {
                    projectId = importFactorRequest['project_id'];
                    assetId = importFactorRequest['asset_id'];
                    excelFile = importFactorRequest['body']['excelFile'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling importFactor.');
            }
            if (assetId === null || assetId === undefined) {
            throw new RequiredError('assetId','Required parameter assetId was null or undefined when calling importFactor.');
            }
            if (excelFile === null || excelFile === undefined) {
            throw new RequiredError('excelFile','Required parameter excelFile was null or undefined when calling importFactor.');
            }
            if (excelFile !== undefined) { 
                localVarFormParams.append('excel_file', excelFile as any);
            }
            localVarHeaderParameter['Content-Type'] = 'application/x-www-form-urlencoded';
            localVarHeaderParameter['Content-Type'] = 'multipart/form-data';
            options.data = localVarFormParams;
            options.pathParams = { 'project_id': projectId,'asset_id': assetId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取默认模板V2
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showDefaultTemplateByPage(showDefaultTemplateByPageRequest?: ShowDefaultTemplateByPageRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/templates/templates-default",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let projectId;

            if (showDefaultTemplateByPageRequest !== null && showDefaultTemplateByPageRequest !== undefined) {
                if (showDefaultTemplateByPageRequest instanceof ShowDefaultTemplateByPageRequest) {
                    projectId = showDefaultTemplateByPageRequest.projectId;
                    body = showDefaultTemplateByPageRequest.body
                } else {
                    projectId = showDefaultTemplateByPageRequest['project_id'];
                    body = showDefaultTemplateByPageRequest['body'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling showDefaultTemplateByPage.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据id获取脑图备份V2
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showMindmapBackupById(showMindmapBackupByIdRequest?: ShowMindmapBackupByIdRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/mindmap-backups/{id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let projectId;
            
            let id;

            if (showMindmapBackupByIdRequest !== null && showMindmapBackupByIdRequest !== undefined) {
                if (showMindmapBackupByIdRequest instanceof ShowMindmapBackupByIdRequest) {
                    projectId = showMindmapBackupByIdRequest.projectId;
                    id = showMindmapBackupByIdRequest.id;
                } else {
                    projectId = showMindmapBackupByIdRequest['project_id'];
                    id = showMindmapBackupByIdRequest['id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling showMindmapBackupById.');
            }
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling showMindmapBackupById.');
            }

            options.pathParams = { 'project_id': projectId,'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据条件分页获取脑图备份对象V3
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showMindmapBackupByPage(showMindmapBackupByPageRequest?: ShowMindmapBackupByPageRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/mindmap-backups/page",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let projectId;

            if (showMindmapBackupByPageRequest !== null && showMindmapBackupByPageRequest !== undefined) {
                if (showMindmapBackupByPageRequest instanceof ShowMindmapBackupByPageRequest) {
                    projectId = showMindmapBackupByPageRequest.projectId;
                    body = showMindmapBackupByPageRequest.body
                } else {
                    projectId = showMindmapBackupByPageRequest['project_id'];
                    body = showMindmapBackupByPageRequest['body'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling showMindmapBackupByPage.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据id获取回收站脑图对象V2
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showMindmapRecycleById(showMindmapRecycleByIdRequest?: ShowMindmapRecycleByIdRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/mindmap-recycles/{id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let projectId;
            
            let id;

            if (showMindmapRecycleByIdRequest !== null && showMindmapRecycleByIdRequest !== undefined) {
                if (showMindmapRecycleByIdRequest instanceof ShowMindmapRecycleByIdRequest) {
                    projectId = showMindmapRecycleByIdRequest.projectId;
                    id = showMindmapRecycleByIdRequest.id;
                } else {
                    projectId = showMindmapRecycleByIdRequest['project_id'];
                    id = showMindmapRecycleByIdRequest['id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling showMindmapRecycleById.');
            }
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling showMindmapRecycleById.');
            }

            options.pathParams = { 'project_id': projectId,'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据条件分页获取回收站脑图对象V3
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showMindmapRecycleByPage(showMindmapRecycleByPageRequest?: ShowMindmapRecycleByPageRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/mindmap-recycles/page",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let projectId;

            if (showMindmapRecycleByPageRequest !== null && showMindmapRecycleByPageRequest !== undefined) {
                if (showMindmapRecycleByPageRequest instanceof ShowMindmapRecycleByPageRequest) {
                    projectId = showMindmapRecycleByPageRequest.projectId;
                    body = showMindmapRecycleByPageRequest.body
                } else {
                    projectId = showMindmapRecycleByPageRequest['project_id'];
                    body = showMindmapRecycleByPageRequest['body'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling showMindmapRecycleByPage.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据id获取测试用例对象V2
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showTestcaseById(showTestcaseByIdRequest?: ShowTestcaseByIdRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/testcases/{id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let projectId;
            
            let id;

            if (showTestcaseByIdRequest !== null && showTestcaseByIdRequest !== undefined) {
                if (showTestcaseByIdRequest instanceof ShowTestcaseByIdRequest) {
                    projectId = showTestcaseByIdRequest.projectId;
                    id = showTestcaseByIdRequest.id;
                } else {
                    projectId = showTestcaseByIdRequest['project_id'];
                    id = showTestcaseByIdRequest['id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling showTestcaseById.');
            }
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling showTestcaseById.');
            }

            options.pathParams = { 'project_id': projectId,'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改资产树节点
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateAssetTree(updateAssetTreeRequest?: UpdateAssetTreeRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/asset-tree",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let projectId;

            if (updateAssetTreeRequest !== null && updateAssetTreeRequest !== undefined) {
                if (updateAssetTreeRequest instanceof UpdateAssetTreeRequest) {
                    projectId = updateAssetTreeRequest.projectId;
                    body = updateAssetTreeRequest.body
                } else {
                    projectId = updateAssetTreeRequest['project_id'];
                    body = updateAssetTreeRequest['body'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling updateAssetTree.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 脑图名称编辑
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateMindmapName(updateMindmapNameRequest?: UpdateMindmapNameRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/mindmaps/{id}/name",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let projectId;
            
            let id;
            
            let name;

            if (updateMindmapNameRequest !== null && updateMindmapNameRequest !== undefined) {
                if (updateMindmapNameRequest instanceof UpdateMindmapNameRequest) {
                    projectId = updateMindmapNameRequest.projectId;
                    id = updateMindmapNameRequest.id;
                    name = updateMindmapNameRequest.name;
                } else {
                    projectId = updateMindmapNameRequest['project_id'];
                    id = updateMindmapNameRequest['id'];
                    name = updateMindmapNameRequest['name'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling updateMindmapName.');
            }
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling updateMindmapName.');
            }
            if (name === null || name === undefined) {
                throw new RequiredError('name','Required parameter name was null or undefined when calling updateMindmapName.');
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId,'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 添加目录信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        addFeature(addFeatureRequest?: AddFeatureRequest) {
            const options = {
                method: "POST",
                url: "/v4/features",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (addFeatureRequest !== null && addFeatureRequest !== undefined) {
                if (addFeatureRequest instanceof AddFeatureRequest) {
                    body = addFeatureRequest.body
                } else {
                    body = addFeatureRequest['body'];
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
         * 根据测试用例URI或用例编号查询测试用例对应的测试计划
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listTestcasePlans(listTestcasePlansRequest?: ListTestcasePlansRequest) {
            const options = {
                method: "POST",
                url: "/v4/{project_uuid}/branch/{branch_uri}/testcases/plans",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let projectUuid;
            
            let branchUri;

            if (listTestcasePlansRequest !== null && listTestcasePlansRequest !== undefined) {
                if (listTestcasePlansRequest instanceof ListTestcasePlansRequest) {
                    projectUuid = listTestcasePlansRequest.projectUuid;
                    branchUri = listTestcasePlansRequest.branchUri;
                    body = listTestcasePlansRequest.body
                } else {
                    projectUuid = listTestcasePlansRequest['project_uuid'];
                    branchUri = listTestcasePlansRequest['branch_uri'];
                    body = listTestcasePlansRequest['body'];
                }
            }

        
            if (projectUuid === null || projectUuid === undefined) {
            throw new RequiredError('projectUuid','Required parameter projectUuid was null or undefined when calling listTestcasePlans.');
            }
            if (branchUri === null || branchUri === undefined) {
            throw new RequiredError('branchUri','Required parameter branchUri was null or undefined when calling listTestcasePlans.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'project_uuid': projectUuid,'branch_uri': branchUri, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据任务uri查询测试任务执行历史
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listTaskResults(listTaskResultsRequest?: ListTaskResultsRequest) {
            const options = {
                method: "GET",
                url: "/v4/{project_uuid}/tasks/{task_uri}/results",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let projectUuid;
            
            let taskUri;
            
            let pageNo;
            
            let pageSize;
            
            let iteratorUri;
            
            let releaseDev;

            if (listTaskResultsRequest !== null && listTaskResultsRequest !== undefined) {
                if (listTaskResultsRequest instanceof ListTaskResultsRequest) {
                    projectUuid = listTaskResultsRequest.projectUuid;
                    taskUri = listTaskResultsRequest.taskUri;
                    pageNo = listTaskResultsRequest.pageNo;
                    pageSize = listTaskResultsRequest.pageSize;
                    iteratorUri = listTaskResultsRequest.iteratorUri;
                    releaseDev = listTaskResultsRequest.releaseDev;
                } else {
                    projectUuid = listTaskResultsRequest['project_uuid'];
                    taskUri = listTaskResultsRequest['task_uri'];
                    pageNo = listTaskResultsRequest['page_no'];
                    pageSize = listTaskResultsRequest['page_size'];
                    iteratorUri = listTaskResultsRequest['iterator_uri'];
                    releaseDev = listTaskResultsRequest['release_dev'];
                }
            }

        
            if (projectUuid === null || projectUuid === undefined) {
            throw new RequiredError('projectUuid','Required parameter projectUuid was null or undefined when calling listTaskResults.');
            }
            if (taskUri === null || taskUri === undefined) {
            throw new RequiredError('taskUri','Required parameter taskUri was null or undefined when calling listTaskResults.');
            }
            if (pageNo === null || pageNo === undefined) {
                throw new RequiredError('pageNo','Required parameter pageNo was null or undefined when calling listTaskResults.');
            }
            if (pageNo !== null && pageNo !== undefined) {
                localVarQueryParameter['page_no'] = pageNo;
            }
            if (pageSize === null || pageSize === undefined) {
                throw new RequiredError('pageSize','Required parameter pageSize was null or undefined when calling listTaskResults.');
            }
            if (pageSize !== null && pageSize !== undefined) {
                localVarQueryParameter['page_size'] = pageSize;
            }
            if (iteratorUri !== null && iteratorUri !== undefined) {
                localVarQueryParameter['iterator_uri'] = iteratorUri;
            }
            if (releaseDev !== null && releaseDev !== undefined) {
                localVarQueryParameter['release_dev'] = releaseDev;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_uuid': projectUuid,'task_uri': taskUri, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
    }
};

function newClient(client: HcClient): CloudtestClient {
    return new CloudtestClient(client);
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