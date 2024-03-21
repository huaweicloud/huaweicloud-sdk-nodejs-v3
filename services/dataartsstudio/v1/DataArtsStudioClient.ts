import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";
import FormData from 'form-data';

import { AddTagToAssetRequest } from './model/AddTagToAssetRequest';
import { AddTagToAssetResponse } from './model/AddTagToAssetResponse';
import { AddWorkSpaceUsersRequest } from './model/AddWorkSpaceUsersRequest';
import { AddWorkSpaceUsersResponse } from './model/AddWorkSpaceUsersResponse';
import { AlarmInfoResponseAlarmInfo } from './model/AlarmInfoResponseAlarmInfo';
import { Api } from './model/Api';
import { ApiActionDTO } from './model/ApiActionDTO';
import { ApiCatalogCreateParaDTO } from './model/ApiCatalogCreateParaDTO';
import { ApiCatalogDeleteParaDTO } from './model/ApiCatalogDeleteParaDTO';
import { ApiCatalogUpdateParaDTO } from './model/ApiCatalogUpdateParaDTO';
import { ApiMoveParaDTO } from './model/ApiMoveParaDTO';
import { ApiOverview } from './model/ApiOverview';
import { ApiParaForAuthToInstance } from './model/ApiParaForAuthToInstance';
import { ApiParaForAuthorizeToInstance } from './model/ApiParaForAuthorizeToInstance';
import { ApiPublishDTO } from './model/ApiPublishDTO';
import { ApiRequestPara } from './model/ApiRequestPara';
import { ApiResponsePara } from './model/ApiResponsePara';
import { ApiTestDTO } from './model/ApiTestDTO';
import { ApiTestParas } from './model/ApiTestParas';
import { ApiTestRequestHeader } from './model/ApiTestRequestHeader';
import { ApiTestResponseHeader } from './model/ApiTestResponseHeader';
import { ApigChangeResourceReq } from './model/ApigChangeResourceReq';
import { ApigCommodityOrder } from './model/ApigCommodityOrder';
import { ApigDataSourceView } from './model/ApigDataSourceView';
import { ApigDataSourceVo } from './model/ApigDataSourceVo';
import { ApigDataSourcesVo } from './model/ApigDataSourcesVo';
import { ApigDelUserParams } from './model/ApigDelUserParams';
import { ApigGroupDTO } from './model/ApigGroupDTO';
import { ApigIamUserDto } from './model/ApigIamUserDto';
import { ApigInstanceDTO } from './model/ApigInstanceDTO';
import { ApigRole } from './model/ApigRole';
import { ApigRoleVo } from './model/ApigRoleVo';
import { ApigWorkspaceUserDto } from './model/ApigWorkspaceUserDto';
import { ApigWorkspaceUserbody } from './model/ApigWorkspaceUserbody';
import { AppBindApiInfo } from './model/AppBindApiInfo';
import { AppRequestDTO } from './model/AppRequestDTO';
import { AppReturnDTO } from './model/AppReturnDTO';
import { AppUpdateDTO } from './model/AppUpdateDTO';
import { ApprovalBatchParam } from './model/ApprovalBatchParam';
import { ApprovalInfoParam } from './model/ApprovalInfoParam';
import { ApprovalStatusEnum } from './model/ApprovalStatusEnum';
import { ApprovalTypeEnum } from './model/ApprovalTypeEnum';
import { ApprovalVO } from './model/ApprovalVO';
import { Approver } from './model/Approver';
import { ApproverParam } from './model/ApproverParam';
import { ArchitectureStatistic } from './model/ArchitectureStatistic';
import { AssociateClassificationToEntityRequest } from './model/AssociateClassificationToEntityRequest';
import { AssociateClassificationToEntityResponse } from './model/AssociateClassificationToEntityResponse';
import { AssociateSecurityLevelToEntitieRequest } from './model/AssociateSecurityLevelToEntitieRequest';
import { AssociateSecurityLevelToEntitieResponse } from './model/AssociateSecurityLevelToEntitieResponse';
import { AtlasAssetEntity } from './model/AtlasAssetEntity';
import { AtlasClassificationInfo } from './model/AtlasClassificationInfo';
import { AtlasEntityHeader } from './model/AtlasEntityHeader';
import { AtlasFullTextResult } from './model/AtlasFullTextResult';
import { AtomicIndexVO } from './model/AtomicIndexVO';
import { AtomicIndexVODetailData } from './model/AtomicIndexVODetailData';
import { AtomicIndexVOSearchResultData } from './model/AtomicIndexVOSearchResultData';
import { AtomicIndexVOSearchResultDataValue } from './model/AtomicIndexVOSearchResultDataValue';
import { AttributeSearchResult } from './model/AttributeSearchResult';
import { AuthorizeActionApiToInstanceRequest } from './model/AuthorizeActionApiToInstanceRequest';
import { AuthorizeActionApiToInstanceResponse } from './model/AuthorizeActionApiToInstanceResponse';
import { AuthorizeApiToInstanceRequest } from './model/AuthorizeApiToInstanceRequest';
import { AuthorizeApiToInstanceResponse } from './model/AuthorizeApiToInstanceResponse';
import { BackendConfig } from './model/BackendConfig';
import { BackendConstant } from './model/BackendConstant';
import { BackendRequestPara } from './model/BackendRequestPara';
import { BasicInfo } from './model/BasicInfo';
import { BatchApproveApplyRequest } from './model/BatchApproveApplyRequest';
import { BatchApproveApplyResponse } from './model/BatchApproveApplyResponse';
import { BatchAssociateClassificationToEntitiesRequest } from './model/BatchAssociateClassificationToEntitiesRequest';
import { BatchAssociateClassificationToEntitiesResponse } from './model/BatchAssociateClassificationToEntitiesResponse';
import { BatchAssociateSecurityLevelToEntitiesRequest } from './model/BatchAssociateSecurityLevelToEntitiesRequest';
import { BatchAssociateSecurityLevelToEntitiesResponse } from './model/BatchAssociateSecurityLevelToEntitiesResponse';
import { BatchDeleteBaseDTO } from './model/BatchDeleteBaseDTO';
import { BatchDeleteRulesBaseDTO } from './model/BatchDeleteRulesBaseDTO';
import { BatchDeleteSecrecyLevelDTO } from './model/BatchDeleteSecrecyLevelDTO';
import { BatchDeleteSecurityDataClassificationRuleRequest } from './model/BatchDeleteSecurityDataClassificationRuleRequest';
import { BatchDeleteSecurityDataClassificationRuleResponse } from './model/BatchDeleteSecurityDataClassificationRuleResponse';
import { BatchDeleteSecurityPermissionSetMembersRequest } from './model/BatchDeleteSecurityPermissionSetMembersRequest';
import { BatchDeleteSecurityPermissionSetMembersResponse } from './model/BatchDeleteSecurityPermissionSetMembersResponse';
import { BatchDeleteSecurityPermissionSetPermissionsRequest } from './model/BatchDeleteSecurityPermissionSetPermissionsRequest';
import { BatchDeleteSecurityPermissionSetPermissionsResponse } from './model/BatchDeleteSecurityPermissionSetPermissionsResponse';
import { BatchDeleteSecuritySecrecyLevelsRequest } from './model/BatchDeleteSecuritySecrecyLevelsRequest';
import { BatchDeleteSecuritySecrecyLevelsResponse } from './model/BatchDeleteSecuritySecrecyLevelsResponse';
import { BatchDeleteTemplatesRequest } from './model/BatchDeleteTemplatesRequest';
import { BatchDeleteTemplatesResponse } from './model/BatchDeleteTemplatesResponse';
import { BatchOfflineRequest } from './model/BatchOfflineRequest';
import { BatchOfflineResponse } from './model/BatchOfflineResponse';
import { BatchPublishRequest } from './model/BatchPublishRequest';
import { BatchPublishResponse } from './model/BatchPublishResponse';
import { BatchSyncMetadataRequest } from './model/BatchSyncMetadataRequest';
import { BatchSyncMetadataResponse } from './model/BatchSyncMetadataResponse';
import { BehaviorRestBody } from './model/BehaviorRestBody';
import { BizCatalogVO } from './model/BizCatalogVO';
import { BizInfoVO } from './model/BizInfoVO';
import { BizMetricVO } from './model/BizMetricVO';
import { BizStatusEnum } from './model/BizStatusEnum';
import { BizTypeEnum } from './model/BizTypeEnum';
import { BizVersionManageVO } from './model/BizVersionManageVO';
import { BulkSecurityLevel } from './model/BulkSecurityLevel';
import { BusinessAssetRequest } from './model/BusinessAssetRequest';
import { BusinessCatalogTreeNode } from './model/BusinessCatalogTreeNode';
import { CancelFactoryPackagesRequest } from './model/CancelFactoryPackagesRequest';
import { CancelFactoryPackagesRequestBody } from './model/CancelFactoryPackagesRequestBody';
import { CancelFactoryPackagesResponse } from './model/CancelFactoryPackagesResponse';
import { CatalogAttributeVO } from './model/CatalogAttributeVO';
import { CatalogAttributeVOParent } from './model/CatalogAttributeVOParent';
import { CatalogEntityVO } from './model/CatalogEntityVO';
import { CatalogInfo } from './model/CatalogInfo';
import { CatalogLevelVO } from './model/CatalogLevelVO';
import { CatalogLevelVOList } from './model/CatalogLevelVOList';
import { CatalogMetaDataEventInfo } from './model/CatalogMetaDataEventInfo';
import { CatalogMetaDataEventRequest } from './model/CatalogMetaDataEventRequest';
import { CatalogMoveParaDTO } from './model/CatalogMoveParaDTO';
import { CatalogParamsVO } from './model/CatalogParamsVO';
import { CategoryDetailVO } from './model/CategoryDetailVO';
import { ChangeCatalogRequest } from './model/ChangeCatalogRequest';
import { ChangeCatalogResponse } from './model/ChangeCatalogResponse';
import { ChangeResourceRequest } from './model/ChangeResourceRequest';
import { ChangeResourceResponse } from './model/ChangeResourceResponse';
import { ChangeSubjectsRequest } from './model/ChangeSubjectsRequest';
import { ChangeSubjectsResponse } from './model/ChangeSubjectsResponse';
import { CheckDimensionStatusRequest } from './model/CheckDimensionStatusRequest';
import { CheckDimensionStatusResponse } from './model/CheckDimensionStatusResponse';
import { CheckFactLogicTableStatusRequest } from './model/CheckFactLogicTableStatusRequest';
import { CheckFactLogicTableStatusResponse } from './model/CheckFactLogicTableStatusResponse';
import { CodeTableFieldVO } from './model/CodeTableFieldVO';
import { CodeTableFieldValueUpdateVO } from './model/CodeTableFieldValueUpdateVO';
import { CodeTableFieldValueVO } from './model/CodeTableFieldValueVO';
import { CodeTableVO } from './model/CodeTableVO';
import { ColumnDetails } from './model/ColumnDetails';
import { ColumnInfo } from './model/ColumnInfo';
import { ColumnLineage } from './model/ColumnLineage';
import { ColumnsList } from './model/ColumnsList';
import { CommonConditionVO } from './model/CommonConditionVO';
import { CompoundMetricVO } from './model/CompoundMetricVO';
import { CompoundMetricVODetailData } from './model/CompoundMetricVODetailData';
import { CompoundMetricVOSearchResultData } from './model/CompoundMetricVOSearchResultData';
import { CompoundMetricVOSearchResultDataValue } from './model/CompoundMetricVOSearchResultDataValue';
import { Condition } from './model/Condition';
import { ConfirmApprovalsRequest } from './model/ConfirmApprovalsRequest';
import { ConfirmApprovalsResponse } from './model/ConfirmApprovalsResponse';
import { ConfirmMessageRequest } from './model/ConfirmMessageRequest';
import { ConfirmMessageResponse } from './model/ConfirmMessageResponse';
import { Connection } from './model/Connection';
import { ConsistencyRuleDetailForOpenApi } from './model/ConsistencyRuleDetailForOpenApi';
import { CountAllModelsRequest } from './model/CountAllModelsRequest';
import { CountAllModelsResponse } from './model/CountAllModelsResponse';
import { CountOverviewsRequest } from './model/CountOverviewsRequest';
import { CountOverviewsResponse } from './model/CountOverviewsResponse';
import { CountStandardsRequest } from './model/CountStandardsRequest';
import { CountStandardsResponse } from './model/CountStandardsResponse';
import { CountTableModelsRequest } from './model/CountTableModelsRequest';
import { CountTableModelsResponse } from './model/CountTableModelsResponse';
import { CreateApiRequest } from './model/CreateApiRequest';
import { CreateApiResponse } from './model/CreateApiResponse';
import { CreateAppRequest } from './model/CreateAppRequest';
import { CreateAppResponse } from './model/CreateAppResponse';
import { CreateApproverRequest } from './model/CreateApproverRequest';
import { CreateApproverResponse } from './model/CreateApproverResponse';
import { CreateBizMetricRequest } from './model/CreateBizMetricRequest';
import { CreateBizMetricResponse } from './model/CreateBizMetricResponse';
import { CreateCatalogRequest } from './model/CreateCatalogRequest';
import { CreateCatalogResponse } from './model/CreateCatalogResponse';
import { CreateCodeTableRequest } from './model/CreateCodeTableRequest';
import { CreateCodeTableResponse } from './model/CreateCodeTableResponse';
import { CreateConnectionsRequest } from './model/CreateConnectionsRequest';
import { CreateConnectionsResponse } from './model/CreateConnectionsResponse';
import { CreateDirectoryRequest } from './model/CreateDirectoryRequest';
import { CreateDirectoryResponse } from './model/CreateDirectoryResponse';
import { CreateFactoryEnvRequest } from './model/CreateFactoryEnvRequest';
import { CreateFactoryEnvResponse } from './model/CreateFactoryEnvResponse';
import { CreateFactoryJobRequest } from './model/CreateFactoryJobRequest';
import { CreateFactoryJobResponse } from './model/CreateFactoryJobResponse';
import { CreateFactorySupplementDataInstanceRequest } from './model/CreateFactorySupplementDataInstanceRequest';
import { CreateFactorySupplementDataInstanceRequestBody } from './model/CreateFactorySupplementDataInstanceRequestBody';
import { CreateFactorySupplementDataInstanceRequestBodyDependJobs } from './model/CreateFactorySupplementDataInstanceRequestBodyDependJobs';
import { CreateFactorySupplementDataInstanceRequestBodySupplementDataInstanceTime } from './model/CreateFactorySupplementDataInstanceRequestBodySupplementDataInstanceTime';
import { CreateFactorySupplementDataInstanceRequestBodySupplementDataRunTime } from './model/CreateFactorySupplementDataInstanceRequestBodySupplementDataRunTime';
import { CreateFactorySupplementDataInstanceResponse } from './model/CreateFactorySupplementDataInstanceResponse';
import { CreateManagerWorkSpaceRequest } from './model/CreateManagerWorkSpaceRequest';
import { CreateManagerWorkSpaceResponse } from './model/CreateManagerWorkSpaceResponse';
import { CreateOrUpdateAssetRequest } from './model/CreateOrUpdateAssetRequest';
import { CreateOrUpdateAssetResponse } from './model/CreateOrUpdateAssetResponse';
import { CreateOrUpdateEntitiesRequest } from './model/CreateOrUpdateEntitiesRequest';
import { CreateOrUpdateEntitiesResponse } from './model/CreateOrUpdateEntitiesResponse';
import { CreateSecrecyLevelDTO } from './model/CreateSecrecyLevelDTO';
import { CreateSecurityDataClassificationRuleRequest } from './model/CreateSecurityDataClassificationRuleRequest';
import { CreateSecurityDataClassificationRuleResponse } from './model/CreateSecurityDataClassificationRuleResponse';
import { CreateSecurityPermissionSetMemberRequest } from './model/CreateSecurityPermissionSetMemberRequest';
import { CreateSecurityPermissionSetMemberResponse } from './model/CreateSecurityPermissionSetMemberResponse';
import { CreateSecurityPermissionSetPermissionRequest } from './model/CreateSecurityPermissionSetPermissionRequest';
import { CreateSecurityPermissionSetPermissionResponse } from './model/CreateSecurityPermissionSetPermissionResponse';
import { CreateSecurityPermissionSetRequest } from './model/CreateSecurityPermissionSetRequest';
import { CreateSecurityPermissionSetResponse } from './model/CreateSecurityPermissionSetResponse';
import { CreateSecuritySecrecyLevelRequest } from './model/CreateSecuritySecrecyLevelRequest';
import { CreateSecuritySecrecyLevelResponse } from './model/CreateSecuritySecrecyLevelResponse';
import { CreateServiceCatalogRequest } from './model/CreateServiceCatalogRequest';
import { CreateServiceCatalogResponse } from './model/CreateServiceCatalogResponse';
import { CreateStandardRequest } from './model/CreateStandardRequest';
import { CreateStandardResponse } from './model/CreateStandardResponse';
import { CreateStandardTemplateRequest } from './model/CreateStandardTemplateRequest';
import { CreateStandardTemplateResponse } from './model/CreateStandardTemplateResponse';
import { CreateSubjectNewRequest } from './model/CreateSubjectNewRequest';
import { CreateSubjectNewResponse } from './model/CreateSubjectNewResponse';
import { CreateSubjectRequest } from './model/CreateSubjectRequest';
import { CreateSubjectResponse } from './model/CreateSubjectResponse';
import { CreateTableModelRequest } from './model/CreateTableModelRequest';
import { CreateTableModelResponse } from './model/CreateTableModelResponse';
import { CreateTaskRequest } from './model/CreateTaskRequest';
import { CreateTaskResponse } from './model/CreateTaskResponse';
import { CreateTemplateRequest } from './model/CreateTemplateRequest';
import { CreateTemplateResponse } from './model/CreateTemplateResponse';
import { CreateWorkspaceParams } from './model/CreateWorkspaceParams';
import { CreateWorkspaceRequest } from './model/CreateWorkspaceRequest';
import { CreateWorkspaceResponse } from './model/CreateWorkspaceResponse';
import { Cron } from './model/Cron';
import { CssIndex } from './model/CssIndex';
import { CustomMetadata } from './model/CustomMetadata';
import { CustomizedFieldsVO } from './model/CustomizedFieldsVO';
import { CustomizedFieldsVOList } from './model/CustomizedFieldsVOList';
import { DataClassificationGroupQueryDTO } from './model/DataClassificationGroupQueryDTO';
import { DataClassificationRuleEnableDTO } from './model/DataClassificationRuleEnableDTO';
import { DataClassificationRuleOperateDTO } from './model/DataClassificationRuleOperateDTO';
import { DataClassificationRuleQueryDTO } from './model/DataClassificationRuleQueryDTO';
import { DataEntityWithExtInfo } from './model/DataEntityWithExtInfo';
import { DataMapFilterCriteria } from './model/DataMapFilterCriteria';
import { DataProfileRO } from './model/DataProfileRO';
import { DataSource } from './model/DataSource';
import { DataType } from './model/DataType';
import { DataTypeDomainEnum } from './model/DataTypeDomainEnum';
import { Database } from './model/Database';
import { DatabasesList } from './model/DatabasesList';
import { DatasourceConfig } from './model/DatasourceConfig';
import { DatasourceOrderPara } from './model/DatasourceOrderPara';
import { DebugApiRequest } from './model/DebugApiRequest';
import { DebugApiResponse } from './model/DebugApiResponse';
import { DebugDataconnectionRequest } from './model/DebugDataconnectionRequest';
import { DebugDataconnectionResponse } from './model/DebugDataconnectionResponse';
import { DeleteApiRequest } from './model/DeleteApiRequest';
import { DeleteApiResponse } from './model/DeleteApiResponse';
import { DeleteAppRequest } from './model/DeleteAppRequest';
import { DeleteAppResponse } from './model/DeleteAppResponse';
import { DeleteApproverRequest } from './model/DeleteApproverRequest';
import { DeleteApproverResponse } from './model/DeleteApproverResponse';
import { DeleteAssetRequest } from './model/DeleteAssetRequest';
import { DeleteAssetResponse } from './model/DeleteAssetResponse';
import { DeleteBizMetricRequest } from './model/DeleteBizMetricRequest';
import { DeleteBizMetricResponse } from './model/DeleteBizMetricResponse';
import { DeleteCatalogRequest } from './model/DeleteCatalogRequest';
import { DeleteCatalogResponse } from './model/DeleteCatalogResponse';
import { DeleteClassificationFromEntitiesRequest } from './model/DeleteClassificationFromEntitiesRequest';
import { DeleteClassificationFromEntitiesResponse } from './model/DeleteClassificationFromEntitiesResponse';
import { DeleteCodeTableRequest } from './model/DeleteCodeTableRequest';
import { DeleteCodeTableResponse } from './model/DeleteCodeTableResponse';
import { DeleteDataconnectionRequest } from './model/DeleteDataconnectionRequest';
import { DeleteDataconnectionResponse } from './model/DeleteDataconnectionResponse';
import { DeleteDirectoryRequest } from './model/DeleteDirectoryRequest';
import { DeleteDirectoryResponse } from './model/DeleteDirectoryResponse';
import { DeleteSecurityDataClassificationRuleRequest } from './model/DeleteSecurityDataClassificationRuleRequest';
import { DeleteSecurityDataClassificationRuleResponse } from './model/DeleteSecurityDataClassificationRuleResponse';
import { DeleteSecurityLevelFromEntityRequest } from './model/DeleteSecurityLevelFromEntityRequest';
import { DeleteSecurityLevelFromEntityResponse } from './model/DeleteSecurityLevelFromEntityResponse';
import { DeleteSecurityPermissionSetRequest } from './model/DeleteSecurityPermissionSetRequest';
import { DeleteSecurityPermissionSetResponse } from './model/DeleteSecurityPermissionSetResponse';
import { DeleteSecuritySecrecyLevelRequest } from './model/DeleteSecuritySecrecyLevelRequest';
import { DeleteSecuritySecrecyLevelResponse } from './model/DeleteSecuritySecrecyLevelResponse';
import { DeleteServiceCatalogRequest } from './model/DeleteServiceCatalogRequest';
import { DeleteServiceCatalogResponse } from './model/DeleteServiceCatalogResponse';
import { DeleteStandardRequest } from './model/DeleteStandardRequest';
import { DeleteStandardResponse } from './model/DeleteStandardResponse';
import { DeleteStandardTemplateRequest } from './model/DeleteStandardTemplateRequest';
import { DeleteStandardTemplateResponse } from './model/DeleteStandardTemplateResponse';
import { DeleteSubjectNewRequest } from './model/DeleteSubjectNewRequest';
import { DeleteSubjectNewResponse } from './model/DeleteSubjectNewResponse';
import { DeleteSubjectRequest } from './model/DeleteSubjectRequest';
import { DeleteSubjectResponse } from './model/DeleteSubjectResponse';
import { DeleteTableModelRequest } from './model/DeleteTableModelRequest';
import { DeleteTableModelResponse } from './model/DeleteTableModelResponse';
import { DeleteTaskInfoRequest } from './model/DeleteTaskInfoRequest';
import { DeleteTaskInfoResponse } from './model/DeleteTaskInfoResponse';
import { DeleteWorkspacesRequest } from './model/DeleteWorkspacesRequest';
import { DeleteWorkspacesResponse } from './model/DeleteWorkspacesResponse';
import { DeleteWorkspaceusersRequest } from './model/DeleteWorkspaceusersRequest';
import { DeleteWorkspaceusersResponse } from './model/DeleteWorkspaceusersResponse';
import { DependJob } from './model/DependJob';
import { DeployFactoryPackagesRequest } from './model/DeployFactoryPackagesRequest';
import { DeployFactoryPackagesRequestBody } from './model/DeployFactoryPackagesRequestBody';
import { DeployFactoryPackagesResponse } from './model/DeployFactoryPackagesResponse';
import { DeployPackagesResponseDeployPackageDetails } from './model/DeployPackagesResponseDeployPackageDetails';
import { DerivativeIndexDimensionVO } from './model/DerivativeIndexDimensionVO';
import { DerivativeIndexVO } from './model/DerivativeIndexVO';
import { DerivativeIndexVODetailData } from './model/DerivativeIndexVODetailData';
import { DerivativeIndexVOSearchResultData } from './model/DerivativeIndexVOSearchResultData';
import { DerivativeIndexVOSearchResultDataValue } from './model/DerivativeIndexVOSearchResultDataValue';
import { DimensionAttributeVO } from './model/DimensionAttributeVO';
import { DimensionHierarchiesVO } from './model/DimensionHierarchiesVO';
import { DirectoryVO } from './model/DirectoryVO';
import { DisStream } from './model/DisStream';
import { DwName } from './model/DwName';
import { DwType } from './model/DwType';
import { Entity } from './model/Entity';
import { EntityPrivilegeInfo } from './model/EntityPrivilegeInfo';
import { EntityWithExtInfo } from './model/EntityWithExtInfo';
import { EnvRequestBody } from './model/EnvRequestBody';
import { EnvRequestBodyParams } from './model/EnvRequestBodyParams';
import { EnvRespParams } from './model/EnvRespParams';
import { Event } from './model/Event';
import { EventParam } from './model/EventParam';
import { ExecuteApiToInstanceRequest } from './model/ExecuteApiToInstanceRequest';
import { ExecuteApiToInstanceResponse } from './model/ExecuteApiToInstanceResponse';
import { ExecuteTaskActionRequest } from './model/ExecuteTaskActionRequest';
import { ExecuteTaskActionResponse } from './model/ExecuteTaskActionResponse';
import { FilterCriteria } from './model/FilterCriteria';
import { GatewayDTO } from './model/GatewayDTO';
import { GlossaryInfo } from './model/GlossaryInfo';
import { Group } from './model/Group';
import { HierarchiesAttrVO } from './model/HierarchiesAttrVO';
import { IdsParam } from './model/IdsParam';
import { ImportCatalogsRequest } from './model/ImportCatalogsRequest';
import { ImportCatalogsRequestBody } from './model/ImportCatalogsRequestBody';
import { ImportCatalogsResponse } from './model/ImportCatalogsResponse';
import { ImportLineageRequest } from './model/ImportLineageRequest';
import { ImportLineageResponse } from './model/ImportLineageResponse';
import { ImportModelsRequest } from './model/ImportModelsRequest';
import { ImportModelsRequestBody } from './model/ImportModelsRequestBody';
import { ImportModelsResponse } from './model/ImportModelsResponse';
import { ImportResultRequest } from './model/ImportResultRequest';
import { ImportResultResponse } from './model/ImportResultResponse';
import { InitializeStandardTemplateRequest } from './model/InitializeStandardTemplateRequest';
import { InitializeStandardTemplateResponse } from './model/InitializeStandardTemplateResponse';
import { InstanceForApiActionDTO } from './model/InstanceForApiActionDTO';
import { InstanceHostDTO } from './model/InstanceHostDTO';
import { InstanceOverviewVo } from './model/InstanceOverviewVo';
import { JobAndNodeInfo } from './model/JobAndNodeInfo';
import { JobInfoRequest } from './model/JobInfoRequest';
import { JobInstance } from './model/JobInstance';
import { JobLogRequest } from './model/JobLogRequest';
import { JobParam } from './model/JobParam';
import { JobResp } from './model/JobResp';
import { L1 } from './model/L1';
import { L1Statistic } from './model/L1Statistic';
import { L2 } from './model/L2';
import { L2Id } from './model/L2Id';
import { L2Statistic } from './model/L2Statistic';
import { L3 } from './model/L3';
import { LayerPath } from './model/LayerPath';
import { Lineage } from './model/Lineage';
import { LineageRelation } from './model/LineageRelation';
import { LinkAttributeAndElementVO } from './model/LinkAttributeAndElementVO';
import { ListAggregationLogicTablesRequest } from './model/ListAggregationLogicTablesRequest';
import { ListAggregationLogicTablesResponse } from './model/ListAggregationLogicTablesResponse';
import { ListAllCatalogListRequest } from './model/ListAllCatalogListRequest';
import { ListAllCatalogListResponse } from './model/ListAllCatalogListResponse';
import { ListAllStandardsRequest } from './model/ListAllStandardsRequest';
import { ListAllStandardsResponse } from './model/ListAllStandardsResponse';
import { ListAllTablesRequest } from './model/ListAllTablesRequest';
import { ListAllTablesResponse } from './model/ListAllTablesResponse';
import { ListApiCatalogListRequest } from './model/ListApiCatalogListRequest';
import { ListApiCatalogListResponse } from './model/ListApiCatalogListResponse';
import { ListApiTopNRequest } from './model/ListApiTopNRequest';
import { ListApiTopNResponse } from './model/ListApiTopNResponse';
import { ListApicGroupsRequest } from './model/ListApicGroupsRequest';
import { ListApicGroupsResponse } from './model/ListApicGroupsResponse';
import { ListApicInstancesRequest } from './model/ListApicInstancesRequest';
import { ListApicInstancesResponse } from './model/ListApicInstancesResponse';
import { ListApisRequest } from './model/ListApisRequest';
import { ListApisResponse } from './model/ListApisResponse';
import { ListApisTopRequest } from './model/ListApisTopRequest';
import { ListApisTopResponse } from './model/ListApisTopResponse';
import { ListApplyRequest } from './model/ListApplyRequest';
import { ListApplyResponse } from './model/ListApplyResponse';
import { ListApproversRequest } from './model/ListApproversRequest';
import { ListApproversResponse } from './model/ListApproversResponse';
import { ListAppsRequest } from './model/ListAppsRequest';
import { ListAppsResponse } from './model/ListAppsResponse';
import { ListAppsTopRequest } from './model/ListAppsTopRequest';
import { ListAppsTopResponse } from './model/ListAppsTopResponse';
import { ListBizMetricDimensionsRequest } from './model/ListBizMetricDimensionsRequest';
import { ListBizMetricDimensionsResponse } from './model/ListBizMetricDimensionsResponse';
import { ListBizMetricOwnersRequest } from './model/ListBizMetricOwnersRequest';
import { ListBizMetricOwnersResponse } from './model/ListBizMetricOwnersResponse';
import { ListBizMetricsRequest } from './model/ListBizMetricsRequest';
import { ListBizMetricsResponse } from './model/ListBizMetricsResponse';
import { ListBusinessRequest } from './model/ListBusinessRequest';
import { ListBusinessResponse } from './model/ListBusinessResponse';
import { ListCatalogListRequest } from './model/ListCatalogListRequest';
import { ListCatalogListResponse } from './model/ListCatalogListResponse';
import { ListCatalogTreeRequest } from './model/ListCatalogTreeRequest';
import { ListCatalogTreeResponse } from './model/ListCatalogTreeResponse';
import { ListCategoryRequest } from './model/ListCategoryRequest';
import { ListCategoryResponse } from './model/ListCategoryResponse';
import { ListColumnsRequest } from './model/ListColumnsRequest';
import { ListColumnsResponse } from './model/ListColumnsResponse';
import { ListCompoundMetricsRequest } from './model/ListCompoundMetricsRequest';
import { ListCompoundMetricsResponse } from './model/ListCompoundMetricsResponse';
import { ListConditionRequest } from './model/ListConditionRequest';
import { ListConditionResponse } from './model/ListConditionResponse';
import { ListConsistencyTaskRequest } from './model/ListConsistencyTaskRequest';
import { ListConsistencyTaskResponse } from './model/ListConsistencyTaskResponse';
import { ListDataArtsStudioInstancesRequest } from './model/ListDataArtsStudioInstancesRequest';
import { ListDataArtsStudioInstancesResponse } from './model/ListDataArtsStudioInstancesResponse';
import { ListDataTablesRequest } from './model/ListDataTablesRequest';
import { ListDataTablesResponse } from './model/ListDataTablesResponse';
import { ListDatabasesRequest } from './model/ListDatabasesRequest';
import { ListDatabasesResponse } from './model/ListDatabasesResponse';
import { ListDataconnectionsRequest } from './model/ListDataconnectionsRequest';
import { ListDataconnectionsResponse } from './model/ListDataconnectionsResponse';
import { ListDerivativeIndexesRequest } from './model/ListDerivativeIndexesRequest';
import { ListDerivativeIndexesResponse } from './model/ListDerivativeIndexesResponse';
import { ListDimensionGroupsRequest } from './model/ListDimensionGroupsRequest';
import { ListDimensionGroupsResponse } from './model/ListDimensionGroupsResponse';
import { ListDimensionLogicTablesRequest } from './model/ListDimensionLogicTablesRequest';
import { ListDimensionLogicTablesResponse } from './model/ListDimensionLogicTablesResponse';
import { ListDimensionsRequest } from './model/ListDimensionsRequest';
import { ListDimensionsResponse } from './model/ListDimensionsResponse';
import { ListDirectoriesRequest } from './model/ListDirectoriesRequest';
import { ListDirectoriesResponse } from './model/ListDirectoriesResponse';
import { ListFactLogicTablesRequest } from './model/ListFactLogicTablesRequest';
import { ListFactLogicTablesResponse } from './model/ListFactLogicTablesResponse';
import { ListFactoryAlarmInfoRequest } from './model/ListFactoryAlarmInfoRequest';
import { ListFactoryAlarmInfoResponse } from './model/ListFactoryAlarmInfoResponse';
import { ListFactoryJobInstancesByNameRequest } from './model/ListFactoryJobInstancesByNameRequest';
import { ListFactoryJobInstancesByNameResponse } from './model/ListFactoryJobInstancesByNameResponse';
import { ListFactoryJobsRequest } from './model/ListFactoryJobsRequest';
import { ListFactoryJobsResponse } from './model/ListFactoryJobsResponse';
import { ListFactoryReleasePackagesRequest } from './model/ListFactoryReleasePackagesRequest';
import { ListFactoryReleasePackagesResponse } from './model/ListFactoryReleasePackagesResponse';
import { ListFactoryTaskCompletionRequest } from './model/ListFactoryTaskCompletionRequest';
import { ListFactoryTaskCompletionResAverage } from './model/ListFactoryTaskCompletionResAverage';
import { ListFactoryTaskCompletionResToday } from './model/ListFactoryTaskCompletionResToday';
import { ListFactoryTaskCompletionResYesterday } from './model/ListFactoryTaskCompletionResYesterday';
import { ListFactoryTaskCompletionResponse } from './model/ListFactoryTaskCompletionResponse';
import { ListFactoryTaskOverviewRequest } from './model/ListFactoryTaskOverviewRequest';
import { ListFactoryTaskOverviewResponse } from './model/ListFactoryTaskOverviewResponse';
import { ListInstanceListRequest } from './model/ListInstanceListRequest';
import { ListInstanceListResponse } from './model/ListInstanceListResponse';
import { ListInstancesRequest } from './model/ListInstancesRequest';
import { ListInstancesResponse } from './model/ListInstancesResponse';
import { ListManagerWorkSpacesRequest } from './model/ListManagerWorkSpacesRequest';
import { ListManagerWorkSpacesResponse } from './model/ListManagerWorkSpacesResponse';
import { ListMessageRequest } from './model/ListMessageRequest';
import { ListMessageResponse } from './model/ListMessageResponse';
import { ListMetricRelationsRequest } from './model/ListMetricRelationsRequest';
import { ListMetricRelationsResponse } from './model/ListMetricRelationsResponse';
import { ListQualityTaskListsRequest } from './model/ListQualityTaskListsRequest';
import { ListQualityTaskListsResponse } from './model/ListQualityTaskListsResponse';
import { ListQualityTaskRequest } from './model/ListQualityTaskRequest';
import { ListQualityTaskResponse } from './model/ListQualityTaskResponse';
import { ListQualityTemplatesRequest } from './model/ListQualityTemplatesRequest';
import { ListQualityTemplatesResponse } from './model/ListQualityTemplatesResponse';
import { ListRelationsRequest } from './model/ListRelationsRequest';
import { ListRelationsResponse } from './model/ListRelationsResponse';
import { ListReleasePackagesRequestBody } from './model/ListReleasePackagesRequestBody';
import { ListReleasePackagesRespData } from './model/ListReleasePackagesRespData';
import { ListReleasePackagesRespPackageApprovers } from './model/ListReleasePackagesRespPackageApprovers';
import { ListSchemasRequest } from './model/ListSchemasRequest';
import { ListSchemasResponse } from './model/ListSchemasResponse';
import { ListSecurityDataClassificationRuleGroupsRequest } from './model/ListSecurityDataClassificationRuleGroupsRequest';
import { ListSecurityDataClassificationRuleGroupsResponse } from './model/ListSecurityDataClassificationRuleGroupsResponse';
import { ListSecurityDataClassificationRulesRequest } from './model/ListSecurityDataClassificationRulesRequest';
import { ListSecurityDataClassificationRulesResponse } from './model/ListSecurityDataClassificationRulesResponse';
import { ListSecurityDatasourceActionsRequest } from './model/ListSecurityDatasourceActionsRequest';
import { ListSecurityDatasourceActionsResponse } from './model/ListSecurityDatasourceActionsResponse';
import { ListSecurityDatasourceConfigurationsRequest } from './model/ListSecurityDatasourceConfigurationsRequest';
import { ListSecurityDatasourceConfigurationsResponse } from './model/ListSecurityDatasourceConfigurationsResponse';
import { ListSecurityDatasourceUrlsRequest } from './model/ListSecurityDatasourceUrlsRequest';
import { ListSecurityDatasourceUrlsResponse } from './model/ListSecurityDatasourceUrlsResponse';
import { ListSecurityPermissionSetMembersRequest } from './model/ListSecurityPermissionSetMembersRequest';
import { ListSecurityPermissionSetMembersResponse } from './model/ListSecurityPermissionSetMembersResponse';
import { ListSecurityPermissionSetPermissionsRequest } from './model/ListSecurityPermissionSetPermissionsRequest';
import { ListSecurityPermissionSetPermissionsResponse } from './model/ListSecurityPermissionSetPermissionsResponse';
import { ListSecurityPermissionSetsRequest } from './model/ListSecurityPermissionSetsRequest';
import { ListSecurityPermissionSetsResponse } from './model/ListSecurityPermissionSetsResponse';
import { ListSecurityRoleActionsRequest } from './model/ListSecurityRoleActionsRequest';
import { ListSecurityRoleActionsResponse } from './model/ListSecurityRoleActionsResponse';
import { ListSecuritySecrecyLevelsRequest } from './model/ListSecuritySecrecyLevelsRequest';
import { ListSecuritySecrecyLevelsResponse } from './model/ListSecuritySecrecyLevelsResponse';
import { ListSubjectLevelsRequest } from './model/ListSubjectLevelsRequest';
import { ListSubjectLevelsResponse } from './model/ListSubjectLevelsResponse';
import { ListTableModelRelationsRequest } from './model/ListTableModelRelationsRequest';
import { ListTableModelRelationsResponse } from './model/ListTableModelRelationsResponse';
import { ListTableModelsRequest } from './model/ListTableModelsRequest';
import { ListTableModelsResponse } from './model/ListTableModelsResponse';
import { ListWorkspaceRolesRequest } from './model/ListWorkspaceRolesRequest';
import { ListWorkspaceRolesResponse } from './model/ListWorkspaceRolesResponse';
import { ListWorkspacesRequest } from './model/ListWorkspacesRequest';
import { ListWorkspacesResponse } from './model/ListWorkspacesResponse';
import { ListWorkspaceusersRequest } from './model/ListWorkspaceusersRequest';
import { ListWorkspaceusersResponse } from './model/ListWorkspaceusersResponse';
import { Location } from './model/Location';
import { LogicEntityNodes } from './model/LogicEntityNodes';
import { MappingJoinFieldVO } from './model/MappingJoinFieldVO';
import { MappingSourceFieldVO } from './model/MappingSourceFieldVO';
import { MappingSourceTableVO } from './model/MappingSourceTableVO';
import { MetadataCollectionTask } from './model/MetadataCollectionTask';
import { MetricMonitorVO } from './model/MetricMonitorVO';
import { MetricOpenSearchParams } from './model/MetricOpenSearchParams';
import { MigrateApiRequest } from './model/MigrateApiRequest';
import { MigrateApiResponse } from './model/MigrateApiResponse';
import { MigrateCatalogRequest } from './model/MigrateCatalogRequest';
import { MigrateCatalogResponse } from './model/MigrateCatalogResponse';
import { ModelLevel } from './model/ModelLevel';
import { ModifyCustomizedFieldsRequest } from './model/ModifyCustomizedFieldsRequest';
import { ModifyCustomizedFieldsResponse } from './model/ModifyCustomizedFieldsResponse';
import { Namespace } from './model/Namespace';
import { Node } from './model/Node';
import { ObjectIdInfo } from './model/ObjectIdInfo';
import { ObsFolder } from './model/ObsFolder';
import { OpenApiParaForCheckMessage } from './model/OpenApiParaForCheckMessage';
import { OpenApiParaForPublish } from './model/OpenApiParaForPublish';
import { OpenApplyIdsForApproveApply } from './model/OpenApplyIdsForApproveApply';
import { OpenBulkClassifications } from './model/OpenBulkClassifications';
import { OpenClassification } from './model/OpenClassification';
import { OpenEntity } from './model/OpenEntity';
import { OpenEntityHeader } from './model/OpenEntityHeader';
import { OpenEntitySearchRequest } from './model/OpenEntitySearchRequest';
import { OpenEntityWithExtInfoEntity } from './model/OpenEntityWithExtInfoEntity';
import { OpenTag } from './model/OpenTag';
import { OrderReq } from './model/OrderReq';
import { ParseUserBehaviorRequest } from './model/ParseUserBehaviorRequest';
import { ParseUserBehaviorResponse } from './model/ParseUserBehaviorResponse';
import { PayForDgcOneKeyRequest } from './model/PayForDgcOneKeyRequest';
import { PayForDgcOneKeyResponse } from './model/PayForDgcOneKeyResponse';
import { PermissionActions } from './model/PermissionActions';
import { PermissionConfiguration } from './model/PermissionConfiguration';
import { PermissionSet } from './model/PermissionSet';
import { PermissionSetCreateDTO } from './model/PermissionSetCreateDTO';
import { PermissionSetMember } from './model/PermissionSetMember';
import { PermissionSetMemberCreateDTO } from './model/PermissionSetMemberCreateDTO';
import { PermissionSetPermission } from './model/PermissionSetPermission';
import { PermissionSetPermissionCreateDTO } from './model/PermissionSetPermissionCreateDTO';
import { PermissionSetPermissionUpdateDTO } from './model/PermissionSetPermissionUpdateDTO';
import { ProfileInfo } from './model/ProfileInfo';
import { Property } from './model/Property';
import { PublishApiRequest } from './model/PublishApiRequest';
import { PublishApiResponse } from './model/PublishApiResponse';
import { PublishApiToInstanceRequest } from './model/PublishApiToInstanceRequest';
import { PublishApiToInstanceResponse } from './model/PublishApiToInstanceResponse';
import { QualityInfoVO } from './model/QualityInfoVO';
import { QualityTaskOverviewVO } from './model/QualityTaskOverviewVO';
import { QualityTaskOverviewVO2 } from './model/QualityTaskOverviewVO2';
import { QualityTaskRuleDetailForOpenApi } from './model/QualityTaskRuleDetailForOpenApi';
import { QueryTaskRequest } from './model/QueryTaskRequest';
import { RecordForApplyDetail } from './model/RecordForApplyDetail';
import { RecordForGetAllCatalog } from './model/RecordForGetAllCatalog';
import { RecordForGetAuthApp } from './model/RecordForGetAuthApp';
import { RelationMappingVO } from './model/RelationMappingVO';
import { RelationType } from './model/RelationType';
import { RelationVO } from './model/RelationVO';
import { RenewDataProfileRequest } from './model/RenewDataProfileRequest';
import { RenewDataProfileResponse } from './model/RenewDataProfileResponse';
import { RequestPara } from './model/RequestPara';
import { ResetLinkAttributeAndStandardRequest } from './model/ResetLinkAttributeAndStandardRequest';
import { ResetLinkAttributeAndStandardResponse } from './model/ResetLinkAttributeAndStandardResponse';
import { RoleActionQueryDTO } from './model/RoleActionQueryDTO';
import { RollbackApprovalRequest } from './model/RollbackApprovalRequest';
import { RollbackApprovalResponse } from './model/RollbackApprovalResponse';
import { RuleTemplateDetailVO } from './model/RuleTemplateDetailVO';
import { Schedule } from './model/Schedule';
import { SchedulerInfo } from './model/SchedulerInfo';
import { SchemasList } from './model/SchemasList';
import { SearchApprovalsRequest } from './model/SearchApprovalsRequest';
import { SearchApprovalsResponse } from './model/SearchApprovalsResponse';
import { SearchAtomicIndexesRequest } from './model/SearchAtomicIndexesRequest';
import { SearchAtomicIndexesResponse } from './model/SearchAtomicIndexesResponse';
import { SearchAuthorizeAppRequest } from './model/SearchAuthorizeAppRequest';
import { SearchAuthorizeAppResponse } from './model/SearchAuthorizeAppResponse';
import { SearchBindApiRequest } from './model/SearchBindApiRequest';
import { SearchBindApiResponse } from './model/SearchBindApiResponse';
import { SearchCatalogsRequest } from './model/SearchCatalogsRequest';
import { SearchCatalogsResponse } from './model/SearchCatalogsResponse';
import { SearchCodeTableValuesRequest } from './model/SearchCodeTableValuesRequest';
import { SearchCodeTableValuesResponse } from './model/SearchCodeTableValuesResponse';
import { SearchCodeTablesRequest } from './model/SearchCodeTablesRequest';
import { SearchCodeTablesResponse } from './model/SearchCodeTablesResponse';
import { SearchCustomizedFieldsRequest } from './model/SearchCustomizedFieldsRequest';
import { SearchCustomizedFieldsResponse } from './model/SearchCustomizedFieldsResponse';
import { SearchDebugInfoRequest } from './model/SearchDebugInfoRequest';
import { SearchDebugInfoResponse } from './model/SearchDebugInfoResponse';
import { SearchDwByTypeRequest } from './model/SearchDwByTypeRequest';
import { SearchDwByTypeResponse } from './model/SearchDwByTypeResponse';
import { SearchIdByPathRequest } from './model/SearchIdByPathRequest';
import { SearchIdByPathResponse } from './model/SearchIdByPathResponse';
import { SearchParameter } from './model/SearchParameter';
import { SearchParametersExt } from './model/SearchParametersExt';
import { SearchPublishInfoRequest } from './model/SearchPublishInfoRequest';
import { SearchPublishInfoResponse } from './model/SearchPublishInfoResponse';
import { SearchSubjectNewRequest } from './model/SearchSubjectNewRequest';
import { SearchSubjectNewResponse } from './model/SearchSubjectNewResponse';
import { SearchSubjectRequest } from './model/SearchSubjectRequest';
import { SearchSubjectResponse } from './model/SearchSubjectResponse';
import { SearchVersionsRequest } from './model/SearchVersionsRequest';
import { SearchVersionsResponse } from './model/SearchVersionsResponse';
import { SecrecyLevel } from './model/SecrecyLevel';
import { SelfDefinedFieldVO } from './model/SelfDefinedFieldVO';
import { SetFactoryJobTagsRequest } from './model/SetFactoryJobTagsRequest';
import { SetFactoryJobTagsResponse } from './model/SetFactoryJobTagsResponse';
import { SetJobTagsRequestBody } from './model/SetJobTagsRequestBody';
import { ShowAggregationLogicTableByIdRequest } from './model/ShowAggregationLogicTableByIdRequest';
import { ShowAggregationLogicTableByIdResponse } from './model/ShowAggregationLogicTableByIdResponse';
import { ShowApiDashboardRequest } from './model/ShowApiDashboardRequest';
import { ShowApiDashboardResponse } from './model/ShowApiDashboardResponse';
import { ShowApiRequest } from './model/ShowApiRequest';
import { ShowApiResponse } from './model/ShowApiResponse';
import { ShowApisDashboardRequest } from './model/ShowApisDashboardRequest';
import { ShowApisDashboardResponse } from './model/ShowApisDashboardResponse';
import { ShowApisDetailRequest } from './model/ShowApisDetailRequest';
import { ShowApisDetailResponse } from './model/ShowApisDetailResponse';
import { ShowApisOverviewRequest } from './model/ShowApisOverviewRequest';
import { ShowApisOverviewResponse } from './model/ShowApisOverviewResponse';
import { ShowAppInfoRequest } from './model/ShowAppInfoRequest';
import { ShowAppInfoResponse } from './model/ShowAppInfoResponse';
import { ShowApplyDetailRequest } from './model/ShowApplyDetailRequest';
import { ShowApplyDetailResponse } from './model/ShowApplyDetailResponse';
import { ShowAppsDashboardRequest } from './model/ShowAppsDashboardRequest';
import { ShowAppsDashboardResponse } from './model/ShowAppsDashboardResponse';
import { ShowAppsDetailRequest } from './model/ShowAppsDetailRequest';
import { ShowAppsDetailResponse } from './model/ShowAppsDetailResponse';
import { ShowAppsOverviewRequest } from './model/ShowAppsOverviewRequest';
import { ShowAppsOverviewResponse } from './model/ShowAppsOverviewResponse';
import { ShowAtomicIndexByIdRequest } from './model/ShowAtomicIndexByIdRequest';
import { ShowAtomicIndexByIdResponse } from './model/ShowAtomicIndexByIdResponse';
import { ShowBizCatalogDetailRequest } from './model/ShowBizCatalogDetailRequest';
import { ShowBizCatalogDetailResponse } from './model/ShowBizCatalogDetailResponse';
import { ShowBizMetricByIdRequest } from './model/ShowBizMetricByIdRequest';
import { ShowBizMetricByIdResponse } from './model/ShowBizMetricByIdResponse';
import { ShowBusinessAssetsRequest } from './model/ShowBusinessAssetsRequest';
import { ShowBusinessAssetsResponse } from './model/ShowBusinessAssetsResponse';
import { ShowBusinessAssetsStatisticRequest } from './model/ShowBusinessAssetsStatisticRequest';
import { ShowBusinessAssetsStatisticResponse } from './model/ShowBusinessAssetsStatisticResponse';
import { ShowBusinessAssetsTreeRequest } from './model/ShowBusinessAssetsTreeRequest';
import { ShowBusinessAssetsTreeResponse } from './model/ShowBusinessAssetsTreeResponse';
import { ShowCatalogDetailRequest } from './model/ShowCatalogDetailRequest';
import { ShowCatalogDetailResponse } from './model/ShowCatalogDetailResponse';
import { ShowCodeTableByIdRequest } from './model/ShowCodeTableByIdRequest';
import { ShowCodeTableByIdResponse } from './model/ShowCodeTableByIdResponse';
import { ShowCompoundMetricByIdRequest } from './model/ShowCompoundMetricByIdRequest';
import { ShowCompoundMetricByIdResponse } from './model/ShowCompoundMetricByIdResponse';
import { ShowConditionByIdRequest } from './model/ShowConditionByIdRequest';
import { ShowConditionByIdResponse } from './model/ShowConditionByIdResponse';
import { ShowConsistencyTaskDetailRequest } from './model/ShowConsistencyTaskDetailRequest';
import { ShowConsistencyTaskDetailResponse } from './model/ShowConsistencyTaskDetailResponse';
import { ShowDataDetailRequest } from './model/ShowDataDetailRequest';
import { ShowDataDetailResponse } from './model/ShowDataDetailResponse';
import { ShowDataProfileRequest } from './model/ShowDataProfileRequest';
import { ShowDataProfileResponse } from './model/ShowDataProfileResponse';
import { ShowDataSetsRequest } from './model/ShowDataSetsRequest';
import { ShowDataSetsResponse } from './model/ShowDataSetsResponse';
import { ShowDataconnectionRequest } from './model/ShowDataconnectionRequest';
import { ShowDataconnectionResponse } from './model/ShowDataconnectionResponse';
import { ShowDatamapLineageRequest } from './model/ShowDatamapLineageRequest';
import { ShowDatamapLineageResponse } from './model/ShowDatamapLineageResponse';
import { ShowDerivativeIndexByIdRequest } from './model/ShowDerivativeIndexByIdRequest';
import { ShowDerivativeIndexByIdResponse } from './model/ShowDerivativeIndexByIdResponse';
import { ShowDimensionByIdRequest } from './model/ShowDimensionByIdRequest';
import { ShowDimensionByIdResponse } from './model/ShowDimensionByIdResponse';
import { ShowDimensionLogicTableByIdRequest } from './model/ShowDimensionLogicTableByIdRequest';
import { ShowDimensionLogicTableByIdResponse } from './model/ShowDimensionLogicTableByIdResponse';
import { ShowEntitiesRequest } from './model/ShowEntitiesRequest';
import { ShowEntitiesResponse } from './model/ShowEntitiesResponse';
import { ShowEntityInfoByGuidRequest } from './model/ShowEntityInfoByGuidRequest';
import { ShowEntityInfoByGuidResponse } from './model/ShowEntityInfoByGuidResponse';
import { ShowFactLogicTableByIdRequest } from './model/ShowFactLogicTableByIdRequest';
import { ShowFactLogicTableByIdResponse } from './model/ShowFactLogicTableByIdResponse';
import { ShowFactoryEnvRequest } from './model/ShowFactoryEnvRequest';
import { ShowFactoryEnvResponse } from './model/ShowFactoryEnvResponse';
import { ShowFactoryPackageDetailRequest } from './model/ShowFactoryPackageDetailRequest';
import { ShowFactoryPackageDetailResponse } from './model/ShowFactoryPackageDetailResponse';
import { ShowFactorySupplementDataRequest } from './model/ShowFactorySupplementDataRequest';
import { ShowFactorySupplementDataResponse } from './model/ShowFactorySupplementDataResponse';
import { ShowGlossaryListRequest } from './model/ShowGlossaryListRequest';
import { ShowGlossaryListResponse } from './model/ShowGlossaryListResponse';
import { ShowInstanceInfosRequest } from './model/ShowInstanceInfosRequest';
import { ShowInstanceInfosResponse } from './model/ShowInstanceInfosResponse';
import { ShowInstanceLogRequest } from './model/ShowInstanceLogRequest';
import { ShowInstanceLogResponse } from './model/ShowInstanceLogResponse';
import { ShowInstanceResultRequest } from './model/ShowInstanceResultRequest';
import { ShowInstanceResultResponse } from './model/ShowInstanceResultResponse';
import { ShowLineageBulkRequest } from './model/ShowLineageBulkRequest';
import { ShowLineageBulkResponse } from './model/ShowLineageBulkResponse';
import { ShowLineageRequest } from './model/ShowLineageRequest';
import { ShowLineageResponse } from './model/ShowLineageResponse';
import { ShowMessageDetailRequest } from './model/ShowMessageDetailRequest';
import { ShowMessageDetailResponse } from './model/ShowMessageDetailResponse';
import { ShowMetricAssetsRequest } from './model/ShowMetricAssetsRequest';
import { ShowMetricAssetsResponse } from './model/ShowMetricAssetsResponse';
import { ShowMetricTreeRequest } from './model/ShowMetricTreeRequest';
import { ShowMetricTreeResponse } from './model/ShowMetricTreeResponse';
import { ShowNodesRequest } from './model/ShowNodesRequest';
import { ShowNodesResponse } from './model/ShowNodesResponse';
import { ShowPackageDetailRespReleasePackage } from './model/ShowPackageDetailRespReleasePackage';
import { ShowPackageDetailRespReleasePackagePackageApprovers } from './model/ShowPackageDetailRespReleasePackagePackageApprovers';
import { ShowPackageDetailRespTaskDetails } from './model/ShowPackageDetailRespTaskDetails';
import { ShowPathByIdRequest } from './model/ShowPathByIdRequest';
import { ShowPathByIdResponse } from './model/ShowPathByIdResponse';
import { ShowPathObjectByIdRequest } from './model/ShowPathObjectByIdRequest';
import { ShowPathObjectByIdResponse } from './model/ShowPathObjectByIdResponse';
import { ShowQualityTaskDetailRequest } from './model/ShowQualityTaskDetailRequest';
import { ShowQualityTaskDetailResponse } from './model/ShowQualityTaskDetailResponse';
import { ShowRelationByIdRequest } from './model/ShowRelationByIdRequest';
import { ShowRelationByIdResponse } from './model/ShowRelationByIdResponse';
import { ShowSecurityDataClassificationRuleGroupRequest } from './model/ShowSecurityDataClassificationRuleGroupRequest';
import { ShowSecurityDataClassificationRuleGroupResponse } from './model/ShowSecurityDataClassificationRuleGroupResponse';
import { ShowSecurityDataClassificationRuleRequest } from './model/ShowSecurityDataClassificationRuleRequest';
import { ShowSecurityDataClassificationRuleResponse } from './model/ShowSecurityDataClassificationRuleResponse';
import { ShowSecurityPermissionSetRequest } from './model/ShowSecurityPermissionSetRequest';
import { ShowSecurityPermissionSetResponse } from './model/ShowSecurityPermissionSetResponse';
import { ShowSecuritySecrecyLevelRequest } from './model/ShowSecuritySecrecyLevelRequest';
import { ShowSecuritySecrecyLevelResponse } from './model/ShowSecuritySecrecyLevelResponse';
import { ShowStandardByIdRequest } from './model/ShowStandardByIdRequest';
import { ShowStandardByIdResponse } from './model/ShowStandardByIdResponse';
import { ShowStandardTemplateRequest } from './model/ShowStandardTemplateRequest';
import { ShowStandardTemplateResponse } from './model/ShowStandardTemplateResponse';
import { ShowTableModelByIdRequest } from './model/ShowTableModelByIdRequest';
import { ShowTableModelByIdResponse } from './model/ShowTableModelByIdResponse';
import { ShowTagsRequest } from './model/ShowTagsRequest';
import { ShowTagsResponse } from './model/ShowTagsResponse';
import { ShowTaskInfoRequest } from './model/ShowTaskInfoRequest';
import { ShowTaskInfoResponse } from './model/ShowTaskInfoResponse';
import { ShowTaskListRequest } from './model/ShowTaskListRequest';
import { ShowTaskListResponse } from './model/ShowTaskListResponse';
import { ShowTechnicalAssetsStatisticRequest } from './model/ShowTechnicalAssetsStatisticRequest';
import { ShowTechnicalAssetsStatisticResponse } from './model/ShowTechnicalAssetsStatisticResponse';
import { ShowTemplatesDetailRequest } from './model/ShowTemplatesDetailRequest';
import { ShowTemplatesDetailResponse } from './model/ShowTemplatesDetailResponse';
import { ShowUnrelatedTableRequest } from './model/ShowUnrelatedTableRequest';
import { ShowUnrelatedTableResponse } from './model/ShowUnrelatedTableResponse';
import { ShowWorkSpaceRequest } from './model/ShowWorkSpaceRequest';
import { ShowWorkSpaceResponse } from './model/ShowWorkSpaceResponse';
import { ShowWorkspaceDetailByIdRequest } from './model/ShowWorkspaceDetailByIdRequest';
import { ShowWorkspaceDetailByIdResponse } from './model/ShowWorkspaceDetailByIdResponse';
import { Sort } from './model/Sort';
import { StandElementFieldVO } from './model/StandElementFieldVO';
import { StandElementFieldVOList } from './model/StandElementFieldVOList';
import { StandElementValueVO } from './model/StandElementValueVO';
import { StandElementValueVOList } from './model/StandElementValueVOList';
import { StaticParam } from './model/StaticParam';
import { StatisticForCallDetail } from './model/StatisticForCallDetail';
import { StatisticForDashboard } from './model/StatisticForDashboard';
import { StatisticForDetail } from './model/StatisticForDetail';
import { StopFactorySupplementDataInstanceRequest } from './model/StopFactorySupplementDataInstanceRequest';
import { StopFactorySupplementDataInstanceResponse } from './model/StopFactorySupplementDataInstanceResponse';
import { SubCategoryDetailVO } from './model/SubCategoryDetailVO';
import { SubInstanceResult } from './model/SubInstanceResult';
import { SubjectParamsVO } from './model/SubjectParamsVO';
import { SupplementDataRespRows } from './model/SupplementDataRespRows';
import { SupplementDataRespSupplementDataInstanceTime } from './model/SupplementDataRespSupplementDataInstanceTime';
import { SupplementDataRespSupplementDataRunTime } from './model/SupplementDataRespSupplementDataRunTime';
import { SyncStatusEnum } from './model/SyncStatusEnum';
import { TableColumnDTO } from './model/TableColumnDTO';
import { TableInfo } from './model/TableInfo';
import { TableLineage } from './model/TableLineage';
import { TableLineageInfo } from './model/TableLineageInfo';
import { TableMappingDetailVO } from './model/TableMappingDetailVO';
import { TableMappingVO } from './model/TableMappingVO';
import { TableModelAttributeVO } from './model/TableModelAttributeVO';
import { TableModelUpdateVO } from './model/TableModelUpdateVO';
import { TableModelVO } from './model/TableModelVO';
import { TablesList } from './model/TablesList';
import { TagHeader } from './model/TagHeader';
import { TagRequest } from './model/TagRequest';
import { TagVO } from './model/TagVO';
import { TemplateListRO } from './model/TemplateListRO';
import { TemplateRO } from './model/TemplateRO';
import { TermAssignmentHeader } from './model/TermAssignmentHeader';
import { TimeBoundary } from './model/TimeBoundary';
import { TimeRange } from './model/TimeRange';
import { TmsTagDTO } from './model/TmsTagDTO';
import { UpdateApiRequest } from './model/UpdateApiRequest';
import { UpdateApiResponse } from './model/UpdateApiResponse';
import { UpdateAppRequest } from './model/UpdateAppRequest';
import { UpdateAppResponse } from './model/UpdateAppResponse';
import { UpdateBizMetricRequest } from './model/UpdateBizMetricRequest';
import { UpdateBizMetricResponse } from './model/UpdateBizMetricResponse';
import { UpdateCatalogRequest } from './model/UpdateCatalogRequest';
import { UpdateCatalogResponse } from './model/UpdateCatalogResponse';
import { UpdateCodeTableRequest } from './model/UpdateCodeTableRequest';
import { UpdateCodeTableResponse } from './model/UpdateCodeTableResponse';
import { UpdateCodeTableValuesRequest } from './model/UpdateCodeTableValuesRequest';
import { UpdateCodeTableValuesResponse } from './model/UpdateCodeTableValuesResponse';
import { UpdateDataconnectionRequest } from './model/UpdateDataconnectionRequest';
import { UpdateDataconnectionResponse } from './model/UpdateDataconnectionResponse';
import { UpdateDirectoryRequest } from './model/UpdateDirectoryRequest';
import { UpdateDirectoryResponse } from './model/UpdateDirectoryResponse';
import { UpdateFactoryJobNameRequest } from './model/UpdateFactoryJobNameRequest';
import { UpdateFactoryJobNameRequestBody } from './model/UpdateFactoryJobNameRequestBody';
import { UpdateFactoryJobNameResponse } from './model/UpdateFactoryJobNameResponse';
import { UpdateSecrecyLevelDTO } from './model/UpdateSecrecyLevelDTO';
import { UpdateSecurityDataClassificationRuleRequest } from './model/UpdateSecurityDataClassificationRuleRequest';
import { UpdateSecurityDataClassificationRuleResponse } from './model/UpdateSecurityDataClassificationRuleResponse';
import { UpdateSecurityPermissionSetPermissionRequest } from './model/UpdateSecurityPermissionSetPermissionRequest';
import { UpdateSecurityPermissionSetPermissionResponse } from './model/UpdateSecurityPermissionSetPermissionResponse';
import { UpdateSecurityPermissionSetRequest } from './model/UpdateSecurityPermissionSetRequest';
import { UpdateSecurityPermissionSetResponse } from './model/UpdateSecurityPermissionSetResponse';
import { UpdateSecurityRuleEnableStatusRequest } from './model/UpdateSecurityRuleEnableStatusRequest';
import { UpdateSecurityRuleEnableStatusResponse } from './model/UpdateSecurityRuleEnableStatusResponse';
import { UpdateSecuritySecrecyLevelRequest } from './model/UpdateSecuritySecrecyLevelRequest';
import { UpdateSecuritySecrecyLevelResponse } from './model/UpdateSecuritySecrecyLevelResponse';
import { UpdateStandardRequest } from './model/UpdateStandardRequest';
import { UpdateStandardResponse } from './model/UpdateStandardResponse';
import { UpdateStandardTemplateRequest } from './model/UpdateStandardTemplateRequest';
import { UpdateStandardTemplateResponse } from './model/UpdateStandardTemplateResponse';
import { UpdateSubjectNewRequest } from './model/UpdateSubjectNewRequest';
import { UpdateSubjectNewResponse } from './model/UpdateSubjectNewResponse';
import { UpdateSubjectRequest } from './model/UpdateSubjectRequest';
import { UpdateSubjectResponse } from './model/UpdateSubjectResponse';
import { UpdateTableModelRequest } from './model/UpdateTableModelRequest';
import { UpdateTableModelResponse } from './model/UpdateTableModelResponse';
import { UpdateTaskInfoRequest } from './model/UpdateTaskInfoRequest';
import { UpdateTaskInfoResponse } from './model/UpdateTaskInfoResponse';
import { UpdateTemplateRequest } from './model/UpdateTemplateRequest';
import { UpdateTemplateResponse } from './model/UpdateTemplateResponse';
import { UpdateWorkSpaceUserOrGroupRequest } from './model/UpdateWorkSpaceUserOrGroupRequest';
import { UpdateWorkSpaceUserOrGroupResponse } from './model/UpdateWorkSpaceUserOrGroupResponse';
import { UpdateWorkspaceRequest } from './model/UpdateWorkspaceRequest';
import { UpdateWorkspaceResponse } from './model/UpdateWorkspaceResponse';
import { UrlDTO } from './model/UrlDTO';
import { WorkspaceVO } from './model/WorkspaceVO';
import { Workspacebody } from './model/Workspacebody';

export class DataArtsStudioClient {
    public static newBuilder(): ClientBuilder<DataArtsStudioClient> {
            return new ClientBuilder<DataArtsStudioClient>(newClient);
    }

    private hcClient: HcClient;
    public constructor(client: HcClient) {
        this.hcClient = client;
    }

    public getPath() {
        return __dirname;
    }


    /**
     * 标签关联到资产
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 标签关联到资产
     * @param {string} workspace DataArts Studio工作空间ID
     * @param {string} termGuid guid
     * @param {CatalogInfo} addTagToAssetRequest 标签列表
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public addTagToAsset(addTagToAssetRequest?: AddTagToAssetRequest): Promise<AddTagToAssetResponse> {
        const options = ParamCreater().addTagToAsset(addTagToAssetRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 添加工作空间用户
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 添加工作空间用户
     * @param {string} workspaceId 工作空间id
     * @param {ApigWorkspaceUserDto} addUserParams 添加用户信息body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public addWorkSpaceUsers(addWorkSpaceUsersRequest?: AddWorkSpaceUsersRequest): Promise<AddWorkSpaceUsersResponse> {
        const options = ParamCreater().addWorkSpaceUsers(addWorkSpaceUsersRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 将一个分类关联到一个或多个指定guid的资产上
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 资产关联分类
     * @param {string} workspace DataArts Studio工作空间ID
     * @param {string} guid 资产标识guid
     * @param {OpenClassification} [classification] 资产分类
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public associateClassificationToEntity(associateClassificationToEntityRequest?: AssociateClassificationToEntityRequest): Promise<AssociateClassificationToEntityResponse> {
        const options = ParamCreater().associateClassificationToEntity(associateClassificationToEntityRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 关联资产到密级，资产关联指定密级
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 资产关联密级
     * @param {string} workspace DataArts Studio工作空间ID
     * @param {string} guid 资产id
     * @param {string} securityLevel 资产密级
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public associateSecurityLevelToEntitie(associateSecurityLevelToEntitieRequest?: AssociateSecurityLevelToEntitieRequest): Promise<AssociateSecurityLevelToEntitieResponse> {
        const options = ParamCreater().associateSecurityLevelToEntitie(associateSecurityLevelToEntitieRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 审核申请
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 审核申请
     * @param {string} workspace 工作空间id
     * @param {string} contentType 资源类型
     * @param {OpenApplyIdsForApproveApply} openApplyIdsForApproveApply apply编号列表
     * @param {'SHARED' | 'EXCLUSIVE'} [dlmType] dlm版本类型
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchApproveApply(batchApproveApplyRequest?: BatchApproveApplyRequest): Promise<BatchApproveApplyResponse> {
        const options = ParamCreater().batchApproveApply(batchApproveApplyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量资产关联分类：只支持对数据表的列和OBS对象添加分类
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量资产关联分类
     * @param {string} workspace DataArts Studio工作空间ID
     * @param {OpenBulkClassifications} openBulkClassifications 待关联的分类
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchAssociateClassificationToEntities(batchAssociateClassificationToEntitiesRequest?: BatchAssociateClassificationToEntitiesRequest): Promise<BatchAssociateClassificationToEntitiesResponse> {
        const options = ParamCreater().batchAssociateClassificationToEntities(batchAssociateClassificationToEntitiesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量资产关联密级：单个密级关联到多个资产上
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量资产关联密级
     * @param {string} workspace DataArts Studio工作空间ID
     * @param {BulkSecurityLevel} [bulkSecurityLevel] 待关联的密级
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchAssociateSecurityLevelToEntities(batchAssociateSecurityLevelToEntitiesRequest?: BatchAssociateSecurityLevelToEntitiesRequest): Promise<BatchAssociateSecurityLevelToEntitiesResponse> {
        const options = ParamCreater().batchAssociateSecurityLevelToEntities(batchAssociateSecurityLevelToEntitiesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量删除识别规则接口
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量删除识别规则接口
     * @param {string} workspace DataArts Studio工作空间ID
     * @param {BatchDeleteRulesBaseDTO} batchDeleteSecurityDataClassificationRuleRequestBody 识别规则id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchDeleteSecurityDataClassificationRule(batchDeleteSecurityDataClassificationRuleRequest?: BatchDeleteSecurityDataClassificationRuleRequest): Promise<BatchDeleteSecurityDataClassificationRuleResponse> {
        const options = ParamCreater().batchDeleteSecurityDataClassificationRule(batchDeleteSecurityDataClassificationRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量删除权限集成员
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量删除权限集成员
     * @param {string} permissionSetId 权限集id
     * @param {string} workspace DataArts Studio工作空间ID
     * @param {BatchDeleteBaseDTO} batchDeleteSecurityPermissionSetMembersRequestBody 权限集成员批量删除参数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchDeleteSecurityPermissionSetMembers(batchDeleteSecurityPermissionSetMembersRequest?: BatchDeleteSecurityPermissionSetMembersRequest): Promise<BatchDeleteSecurityPermissionSetMembersResponse> {
        const options = ParamCreater().batchDeleteSecurityPermissionSetMembers(batchDeleteSecurityPermissionSetMembersRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除权限集的权限
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除权限集的权限
     * @param {string} permissionSetId 权限集id
     * @param {string} workspace DataArts Studio工作空间ID
     * @param {BatchDeleteBaseDTO} batchDeleteSecurityPermissionSetPermissionsRequestBody 权限删除参数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchDeleteSecurityPermissionSetPermissions(batchDeleteSecurityPermissionSetPermissionsRequest?: BatchDeleteSecurityPermissionSetPermissionsRequest): Promise<BatchDeleteSecurityPermissionSetPermissionsResponse> {
        const options = ParamCreater().batchDeleteSecurityPermissionSetPermissions(batchDeleteSecurityPermissionSetPermissionsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量删除密级
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量删除密级
     * @param {string} workspace DataArts Studio工作空间ID
     * @param {BatchDeleteSecrecyLevelDTO} batchDeleteSecuritySecrecyLevelsRequestBody 需要删除的密级列表，密级id可以通过查询接口获取。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchDeleteSecuritySecrecyLevels(batchDeleteSecuritySecrecyLevelsRequest?: BatchDeleteSecuritySecrecyLevelsRequest): Promise<BatchDeleteSecuritySecrecyLevelsResponse> {
        const options = ParamCreater().batchDeleteSecuritySecrecyLevels(batchDeleteSecuritySecrecyLevelsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量删除规则模板
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量删除规则模板
     * @param {string} workspace DataArts Studio工作空间ID
     * @param {TemplateListRO} templateIds 模板id列表
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchDeleteTemplates(batchDeleteTemplatesRequest?: BatchDeleteTemplatesRequest): Promise<BatchDeleteTemplatesResponse> {
        const options = ParamCreater().batchDeleteTemplates(batchDeleteTemplatesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量下线
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量下线
     * @param {string} workspace DataArts Studio工作空间ID
     * @param {ApprovalBatchParam} approvalParam approvalParam
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchOffline(batchOfflineRequest?: BatchOfflineRequest): Promise<BatchOfflineResponse> {
        const options = ParamCreater().batchOffline(batchOfflineRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量发布
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量发布
     * @param {string} workspace DataArts Studio工作空间ID
     * @param {ApprovalBatchParam} approvalParam approvalParam
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchPublish(batchPublishRequest?: BatchPublishRequest): Promise<BatchPublishResponse> {
        const options = ParamCreater().batchPublish(batchPublishRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 元数据实时同步接口，支持批量。该接口功能处于邀测阶段，后续将随功能公测将逐步开放。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 元数据实时同步接口(邀测)
     * @param {CatalogMetaDataEventRequest} metaDataEventRequest 请求参数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchSyncMetadata(batchSyncMetadataRequest?: BatchSyncMetadataRequest): Promise<BatchSyncMetadataResponse> {
        const options = ParamCreater().batchSyncMetadata(batchSyncMetadataRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 撤销任务包
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 撤销任务包
     * @param {string} [workspace] 工作空间ID
     * @param {string} [contentType] 有Body体的情况下必须，无Body体的情况下则无需填写和校验，默认值：application/json
     * @param {CancelFactoryPackagesRequestBody} [cancelFactoryPackagesRequestBody] 发布包id列表信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public cancelFactoryPackages(cancelFactoryPackagesRequest?: CancelFactoryPackagesRequest): Promise<CancelFactoryPackagesResponse> {
        const options = ParamCreater().cancelFactoryPackages(cancelFactoryPackagesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改流程架构
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改流程架构
     * @param {string} workspace DataArts Studio工作空间ID
     * @param {BizCatalogVO} catalog 目录信息，修改必须带有id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public changeCatalog(changeCatalogRequest?: ChangeCatalogRequest): Promise<ChangeCatalogResponse> {
        const options = ParamCreater().changeCatalog(changeCatalogRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 规格变更接口
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 规格变更接口
     * @param {ApigChangeResourceReq} apigChangeResourceReq 规格变更信息请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public changeResource(changeResourceRequest?: ChangeResourceRequest): Promise<ChangeResourceResponse> {
        const options = ParamCreater().changeResource(changeResourceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改或删除主题层级
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改或删除主题层级
     * @param {string} workspace DataArts Studio工作空间ID
     * @param {CatalogLevelVOList} directory 主题层级信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public changeSubjects(changeSubjectsRequest?: ChangeSubjectsRequest): Promise<ChangeSubjectsResponse> {
        const options = ParamCreater().changeSubjects(changeSubjectsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查看逆向维度表任务
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查看逆向维度表任务
     * @param {string} workspace DataArts Studio工作空间ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public checkDimensionStatus(checkDimensionStatusRequest?: CheckDimensionStatusRequest): Promise<CheckDimensionStatusResponse> {
        const options = ParamCreater().checkDimensionStatus(checkDimensionStatusRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查看逆向事实表任务
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查看逆向事实表任务
     * @param {string} workspace DataArts Studio工作空间ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public checkFactLogicTableStatus(checkFactLogicTableStatusRequest?: CheckFactLogicTableStatusRequest): Promise<CheckFactLogicTableStatusResponse> {
        const options = ParamCreater().checkFactLogicTableStatus(checkFactLogicTableStatusRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 审批驳回/通过，单个或多个 action-id&#x3D;reject/resolve
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 审批单处理
     * @param {string} workspace DataArts Studio工作空间ID
     * @param {'reject' | 'resolve'} actionId 处理审批单结果类型
     * @param {ApprovalInfoParam} approvalInfo approval info
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public confirmApprovals(confirmApprovalsRequest?: ConfirmApprovalsRequest): Promise<ConfirmApprovalsResponse> {
        const options = ParamCreater().confirmApprovals(confirmApprovalsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 处理消息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 处理消息
     * @param {string} workspace 工作空间id
     * @param {string} contentType 资源类型
     * @param {OpenApiParaForCheckMessage} openApiParaForDealWithMessage 处理消息相关参数
     * @param {'SHARED' | 'EXCLUSIVE'} [dlmType] dlm版本类型
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public confirmMessage(confirmMessageRequest?: ConfirmMessageRequest): Promise<ConfirmMessageResponse> {
        const options = ParamCreater().confirmMessage(confirmMessageRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 关系建模统计信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 关系建模统计信息
     * @param {string} workspace DataArts Studio工作空间ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public countAllModels(countAllModelsRequest?: CountAllModelsRequest): Promise<CountAllModelsResponse> {
        const options = ParamCreater().countAllModels(countAllModelsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 总览统计信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 总览统计信息
     * @param {string} workspace DataArts Studio工作空间ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public countOverviews(countOverviewsRequest?: CountOverviewsRequest): Promise<CountOverviewsResponse> {
        const options = ParamCreater().countOverviews(countOverviewsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 标准覆盖率统计信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 标准覆盖率统计信息
     * @param {string} workspace DataArts Studio工作空间ID
     * @param {string} id 实体id
     * @param {string} [bizType] 按业务类型查询
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public countStandards(countStandardsRequest?: CountStandardsRequest): Promise<CountStandardsResponse> {
        const options = ParamCreater().countStandards(countStandardsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 模型统计信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 模型统计信息
     * @param {string} workspace DataArts Studio工作空间ID
     * @param {number} [modelId] 依据model_id查工作区
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public countTableModels(countTableModelsRequest?: CountTableModelsRequest): Promise<CountTableModelsResponse> {
        const options = ParamCreater().countTableModels(countTableModelsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建应用
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建应用
     * @param {string} workspace 工作空间id
     * @param {string} contentType 资源类型
     * @param {'SHARED' | 'EXCLUSIVE'} [dlmType] dlm版本类型
     * @param {AppRequestDTO} [appRequestDto] 创建应用相关参数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createApp(createAppRequest?: CreateAppRequest): Promise<CreateAppResponse> {
        const options = ParamCreater().createApp(createAppRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建审批人
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建审批人
     * @param {string} workspace DataArts Studio工作空间ID
     * @param {ApproverParam} body approver
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createApprover(createApproverRequest?: CreateApproverRequest): Promise<CreateApproverResponse> {
        const options = ParamCreater().createApprover(createApproverRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建业务指标
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建业务指标
     * @param {string} workspace DataArts Studio工作空间ID
     * @param {BizMetricVO} bizMetric 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createBizMetric(createBizMetricRequest?: CreateBizMetricRequest): Promise<CreateBizMetricResponse> {
        const options = ParamCreater().createBizMetric(createBizMetricRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建流程架构
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建流程架构
     * @param {string} workspace DataArts Studio工作空间ID
     * @param {BizCatalogVO} catalog 目录信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createCatalog(createCatalogRequest?: CreateCatalogRequest): Promise<CreateCatalogResponse> {
        const options = ParamCreater().createCatalog(createCatalogRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建码表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建码表
     * @param {string} workspace DataArts Studio工作空间ID
     * @param {CodeTableVO} codeTable 码表信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createCodeTable(createCodeTableRequest?: CreateCodeTableRequest): Promise<CreateCodeTableResponse> {
        const options = ParamCreater().createCodeTable(createCodeTableRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建数据连接
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建数据连接
     * @param {string} workspace 工作空间id
     * @param {ApigDataSourcesVo} dataSourceVO 数据源信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createConnections(createConnectionsRequest?: CreateConnectionsRequest): Promise<CreateConnectionsResponse> {
        const options = ParamCreater().createConnections(createConnectionsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建目录
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建目录
     * @param {string} workspace DataArts Studio工作空间ID
     * @param {DirectoryVO} directory 目录信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createDirectory(createDirectoryRequest?: CreateDirectoryRequest): Promise<CreateDirectoryResponse> {
        const options = ParamCreater().createDirectory(createDirectoryRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建环境变量
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建环境变量
     * @param {string} contentType 消息体类型的请求头
     * @param {EnvRequestBody} createFactoryEnvRequestBody 环境变量实体参数
     * @param {string} [workspace] 工作空间ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createFactoryEnv(createFactoryEnvRequest?: CreateFactoryEnvRequest): Promise<CreateFactoryEnvResponse> {
        const options = ParamCreater().createFactoryEnv(createFactoryEnvRequest);

         // @ts-ignore
        options['responseHeaders'] = ['status_code', 'is_success'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建作业
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建作业
     * @param {string} workspace DataArts Studio工作空间ID
     * @param {JobInfoRequest} createFactoryJobRequestBody 请求body体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createFactoryJob(createFactoryJobRequest?: CreateFactoryJobRequest): Promise<CreateFactoryJobResponse> {
        const options = ParamCreater().createFactoryJob(createFactoryJobRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建补数据实例
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建补数据实例
     * @param {string} contentType 定义消息体类型的请求头
     * @param {CreateFactorySupplementDataInstanceRequestBody} createFactorySupplementDataInstanceRequestBody 补数据实例请求参数体
     * @param {string} [workspace] 当前作业的空间ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createFactorySupplementDataInstance(createFactorySupplementDataInstanceRequest?: CreateFactorySupplementDataInstanceRequest): Promise<CreateFactorySupplementDataInstanceResponse> {
        const options = ParamCreater().createFactorySupplementDataInstance(createFactorySupplementDataInstanceRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-request-id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建工作空间
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建工作空间
     * @param {string} instanceId DataArtsStudio实例id
     * @param {CreateWorkspaceParams} createWorkspaceParams 创建工作空间信息body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createManagerWorkSpace(createManagerWorkSpaceRequest?: CreateManagerWorkSpaceRequest): Promise<CreateManagerWorkSpaceResponse> {
        const options = ParamCreater().createManagerWorkSpace(createManagerWorkSpaceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 添加或修改资产
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 添加或修改资产
     * @param {string} workspace DataArts Studio工作空间ID
     * @param {EntityWithExtInfo} entityWithExtInfo 技术资产信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createOrUpdateAsset(createOrUpdateAssetRequest?: CreateOrUpdateAssetRequest): Promise<CreateOrUpdateAssetResponse> {
        const options = ParamCreater().createOrUpdateAsset(createOrUpdateAssetRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建或修改资产，该接口功能处于邀测阶段，后续将随功能公测将逐步开放。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建或修改资产(邀测)
     * @param {string} instance 实例ID，获取方法请参见[实例ID和工作空间ID](dataartsstudio_02_0350.xml)
     * @param {DataEntityWithExtInfo} createOrUpdateEntitiesRequestBody 待创建或修改资产信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createOrUpdateEntities(createOrUpdateEntitiesRequest?: CreateOrUpdateEntitiesRequest): Promise<CreateOrUpdateEntitiesResponse> {
        const options = ParamCreater().createOrUpdateEntities(createOrUpdateEntitiesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建识别规则
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建识别规则
     * @param {string} workspace DataArts Studio工作空间ID
     * @param {DataClassificationRuleOperateDTO} createSecurityDataClassificationRuleRequestBody 敏感数据识别规则传输层DTO对象
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createSecurityDataClassificationRule(createSecurityDataClassificationRuleRequest?: CreateSecurityDataClassificationRuleRequest): Promise<CreateSecurityDataClassificationRuleResponse> {
        const options = ParamCreater().createSecurityDataClassificationRule(createSecurityDataClassificationRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建权限集
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建权限集
     * @param {string} workspace DataArts Studio工作空间ID
     * @param {PermissionSetCreateDTO} createSecurityPermissionSetRequestBody 权限集创建参数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createSecurityPermissionSet(createSecurityPermissionSetRequest?: CreateSecurityPermissionSetRequest): Promise<CreateSecurityPermissionSetResponse> {
        const options = ParamCreater().createSecurityPermissionSet(createSecurityPermissionSetRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 添加权限集成员
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 添加权限集成员
     * @param {string} permissionSetId 权限集id
     * @param {string} workspace DataArts Studio工作空间ID
     * @param {PermissionSetMemberCreateDTO} createSecurityPermissionSetMemberRequestBody 权限集成员创建参数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createSecurityPermissionSetMember(createSecurityPermissionSetMemberRequest?: CreateSecurityPermissionSetMemberRequest): Promise<CreateSecurityPermissionSetMemberResponse> {
        const options = ParamCreater().createSecurityPermissionSetMember(createSecurityPermissionSetMemberRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 添加权限集的权限
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 添加权限集的权限
     * @param {string} permissionSetId 权限集id
     * @param {string} workspace DataArts Studio工作空间ID
     * @param {PermissionSetPermissionCreateDTO} createSecurityPermissionSetPermissionRequestBody 权限创建参数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createSecurityPermissionSetPermission(createSecurityPermissionSetPermissionRequest?: CreateSecurityPermissionSetPermissionRequest): Promise<CreateSecurityPermissionSetPermissionResponse> {
        const options = ParamCreater().createSecurityPermissionSetPermission(createSecurityPermissionSetPermissionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建密级
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建密级
     * @param {string} workspace DataArts Studio工作空间ID
     * @param {CreateSecrecyLevelDTO} createSecuritySecrecyLevelRequestBody 密级创建参数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createSecuritySecrecyLevel(createSecuritySecrecyLevelRequest?: CreateSecuritySecrecyLevelRequest): Promise<CreateSecuritySecrecyLevelResponse> {
        const options = ParamCreater().createSecuritySecrecyLevel(createSecuritySecrecyLevelRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建服务目录
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建服务目录
     * @param {string} workspace 工作空间id
     * @param {string} contentType 资源类型
     * @param {ApiCatalogCreateParaDTO} apiCatalogCreateParaDTO 目录创建参数
     * @param {'SHARED' | 'EXCLUSIVE'} [dlmType] dlm版本类型
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createServiceCatalog(createServiceCatalogRequest?: CreateServiceCatalogRequest): Promise<CreateServiceCatalogResponse> {
        const options = ParamCreater().createServiceCatalog(createServiceCatalogRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建数据标准
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建数据标准
     * @param {string} workspace DataArts Studio工作空间ID
     * @param {StandElementValueVOList} values field value info
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createStandard(createStandardRequest?: CreateStandardRequest): Promise<CreateStandardResponse> {
        const options = ParamCreater().createStandard(createStandardRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建数据标准模板
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建数据标准模板
     * @param {string} workspace DataArts Studio工作空间ID
     * @param {StandElementFieldVO} field field info
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createStandardTemplate(createStandardTemplateRequest?: CreateStandardTemplateRequest): Promise<CreateStandardTemplateResponse> {
        const options = ParamCreater().createStandardTemplate(createStandardTemplateRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建主题
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建主题
     * @param {string} workspace DataArts Studio工作空间ID
     * @param {CatalogParamsVO} catalogParam catalog参数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createSubject(createSubjectRequest?: CreateSubjectRequest): Promise<CreateSubjectResponse> {
        const options = ParamCreater().createSubject(createSubjectRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建主题(新)
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建主题(新)
     * @param {string} workspace DataArts Studio工作空间ID
     * @param {SubjectParamsVO} subjectParam subject参数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createSubjectNew(createSubjectNewRequest?: CreateSubjectNewRequest): Promise<CreateSubjectNewResponse> {
        const options = ParamCreater().createSubjectNew(createSubjectNewRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建一个模型实体，包括逻辑实体或物理数据表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建模型实体
     * @param {string} workspace DataArts Studio工作空间ID
     * @param {TableModelVO} tableModel TableModelVO info
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createTableModel(createTableModelRequest?: CreateTableModelRequest): Promise<CreateTableModelResponse> {
        const options = ParamCreater().createTableModel(createTableModelRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建采集任务
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建采集任务
     * @param {string} workspace DataArts Studio工作空间ID
     * @param {MetadataCollectionTask} requestBody 标签信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createTask(createTaskRequest?: CreateTaskRequest): Promise<CreateTaskResponse> {
        const options = ParamCreater().createTask(createTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建规则模板
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建规则模板
     * @param {string} workspace DataArts Studio工作空间ID
     * @param {TemplateRO} templateRO 模板参数
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
     * 新建模型工作区
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 新建模型工作区
     * @param {string} workspace DataArts Studio工作空间ID
     * @param {WorkspaceVO} workSpace 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createWorkspace(createWorkspaceRequest?: CreateWorkspaceRequest): Promise<CreateWorkspaceResponse> {
        const options = ParamCreater().createWorkspace(createWorkspaceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 测试创建数据连接
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 测试创建数据连接
     * @param {string} workspace 工作空间id
     * @param {ApigDataSourceVo} dataSourceVO 数据源连接信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public debugDataconnection(debugDataconnectionRequest?: DebugDataconnectionRequest): Promise<DebugDataconnectionResponse> {
        const options = ParamCreater().debugDataconnection(debugDataconnectionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除应用
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除应用
     * @param {string} workspace 工作空间id
     * @param {string} contentType 资源类型
     * @param {string} appId 应用编号
     * @param {'SHARED' | 'EXCLUSIVE'} [dlmType] dlm版本类型
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteApp(deleteAppRequest?: DeleteAppRequest): Promise<DeleteAppResponse> {
        const options = ParamCreater().deleteApp(deleteAppRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除审批人
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除审批人
     * @param {string} workspace DataArts Studio工作空间ID
     * @param {string} approverIds 审批人id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteApprover(deleteApproverRequest?: DeleteApproverRequest): Promise<DeleteApproverResponse> {
        const options = ParamCreater().deleteApprover(deleteApproverRequest);

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
     * @param {string} workspace DataArts Studio工作空间ID
     * @param {string} guid 资产的guid
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
     * 删除业务指标
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除业务指标
     * @param {string} workspace DataArts Studio工作空间ID
     * @param {IdsParam} deleteParam 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteBizMetric(deleteBizMetricRequest?: DeleteBizMetricRequest): Promise<DeleteBizMetricResponse> {
        const options = ParamCreater().deleteBizMetric(deleteBizMetricRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除流程架构
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除流程架构
     * @param {string} workspace DataArts Studio工作空间ID
     * @param {IdsParam} deleteParam 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteCatalog(deleteCatalogRequest?: DeleteCatalogRequest): Promise<DeleteCatalogResponse> {
        const options = ParamCreater().deleteCatalog(deleteCatalogRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 移除资产关联分类：
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 移除资产关联的分类
     * @param {string} workspace DataArts Studio工作空间ID
     * @param {string} guid 资产标识guid
     * @param {OpenClassification} classification 分类名
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteClassificationFromEntities(deleteClassificationFromEntitiesRequest?: DeleteClassificationFromEntitiesRequest): Promise<DeleteClassificationFromEntitiesResponse> {
        const options = ParamCreater().deleteClassificationFromEntities(deleteClassificationFromEntitiesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除码表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除码表
     * @param {string} workspace DataArts Studio工作空间ID
     * @param {IdsParam} deleteParam 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteCodeTable(deleteCodeTableRequest?: DeleteCodeTableRequest): Promise<DeleteCodeTableResponse> {
        const options = ParamCreater().deleteCodeTable(deleteCodeTableRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除数据连接
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除数据连接
     * @param {string} workspace 工作空间id
     * @param {string} dataConnectionId 数据连接ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteDataconnection(deleteDataconnectionRequest?: DeleteDataconnectionRequest): Promise<DeleteDataconnectionResponse> {
        const options = ParamCreater().deleteDataconnection(deleteDataconnectionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除目录
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除目录
     * @param {string} workspace DataArts Studio工作空间ID
     * @param {Array<number>} ids 实体id数组
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteDirectory(deleteDirectoryRequest?: DeleteDirectoryRequest): Promise<DeleteDirectoryResponse> {
        const options = ParamCreater().deleteDirectory(deleteDirectoryRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除识别规则
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除识别规则
     * @param {string} workspace DataArts Studio工作空间ID
     * @param {string} id 需要删除的规则id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteSecurityDataClassificationRule(deleteSecurityDataClassificationRuleRequest?: DeleteSecurityDataClassificationRuleRequest): Promise<DeleteSecurityDataClassificationRuleResponse> {
        const options = ParamCreater().deleteSecurityDataClassificationRule(deleteSecurityDataClassificationRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 移除资产关联密级
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 移除资产关联密级
     * @param {string} workspace DataArts Studio工作空间ID
     * @param {string} guid 资产id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteSecurityLevelFromEntity(deleteSecurityLevelFromEntityRequest?: DeleteSecurityLevelFromEntityRequest): Promise<DeleteSecurityLevelFromEntityResponse> {
        const options = ParamCreater().deleteSecurityLevelFromEntity(deleteSecurityLevelFromEntityRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除权限集
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除权限集
     * @param {string} permissionSetId 权限集id
     * @param {string} workspace DataArts Studio工作空间ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteSecurityPermissionSet(deleteSecurityPermissionSetRequest?: DeleteSecurityPermissionSetRequest): Promise<DeleteSecurityPermissionSetResponse> {
        const options = ParamCreater().deleteSecurityPermissionSet(deleteSecurityPermissionSetRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除指定的id的密级
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除指定的id的密级
     * @param {string} workspace DataArts Studio工作空间ID
     * @param {string} id 密级id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteSecuritySecrecyLevel(deleteSecuritySecrecyLevelRequest?: DeleteSecuritySecrecyLevelRequest): Promise<DeleteSecuritySecrecyLevelResponse> {
        const options = ParamCreater().deleteSecuritySecrecyLevel(deleteSecuritySecrecyLevelRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量删除目录
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量删除目录
     * @param {string} workspace 工作空间id
     * @param {string} contentType 资源类型
     * @param {ApiCatalogDeleteParaDTO} apiCatalogDeleteParaDTO 目录id列表
     * @param {'SHARED' | 'EXCLUSIVE'} [dlmType] dlm版本类型
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteServiceCatalog(deleteServiceCatalogRequest?: DeleteServiceCatalogRequest): Promise<DeleteServiceCatalogResponse> {
        const options = ParamCreater().deleteServiceCatalog(deleteServiceCatalogRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除数据标准
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除数据标准
     * @param {string} workspace DataArts Studio工作空间ID
     * @param {IdsParam} deleteParam 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteStandard(deleteStandardRequest?: DeleteStandardRequest): Promise<DeleteStandardResponse> {
        const options = ParamCreater().deleteStandard(deleteStandardRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除数据标准模板
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除数据标准模板
     * @param {string} workspace DataArts Studio工作空间ID
     * @param {string} ids 实体id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteStandardTemplate(deleteStandardTemplateRequest?: DeleteStandardTemplateRequest): Promise<DeleteStandardTemplateResponse> {
        const options = ParamCreater().deleteStandardTemplate(deleteStandardTemplateRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除主题
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除主题
     * @param {string} workspace DataArts Studio工作空间ID
     * @param {IdsParam} deleteParam 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteSubject(deleteSubjectRequest?: DeleteSubjectRequest): Promise<DeleteSubjectResponse> {
        const options = ParamCreater().deleteSubject(deleteSubjectRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除主题(新)
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除主题(新)
     * @param {string} workspace DataArts Studio工作空间ID
     * @param {IdsParam} deleteParam 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteSubjectNew(deleteSubjectNewRequest?: DeleteSubjectNewRequest): Promise<DeleteSubjectNewResponse> {
        const options = ParamCreater().deleteSubjectNew(deleteSubjectNewRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除一个模型实体，包括逻辑实体或物理数据表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除模型实体
     * @param {string} workspace DataArts Studio工作空间ID
     * @param {IdsParam} deleteParam 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteTableModel(deleteTableModelRequest?: DeleteTableModelRequest): Promise<DeleteTableModelResponse> {
        const options = ParamCreater().deleteTableModel(deleteTableModelRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除单个采集任务
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除单个采集任务
     * @param {string} workspace DataArts Studio工作空间ID
     * @param {string} taskId 任务id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteTaskInfo(deleteTaskInfoRequest?: DeleteTaskInfoRequest): Promise<DeleteTaskInfoResponse> {
        const options = ParamCreater().deleteTaskInfo(deleteTaskInfoRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除模型工作区
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除模型工作区
     * @param {string} workspace DataArts Studio工作空间ID
     * @param {Array<number>} ids 实体id数组
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteWorkspaces(deleteWorkspacesRequest?: DeleteWorkspacesRequest): Promise<DeleteWorkspacesResponse> {
        const options = ParamCreater().deleteWorkspaces(deleteWorkspacesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除工作空间用户
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除工作空间用户
     * @param {string} workspaceId 工作空间id
     * @param {ApigDelUserParams} delUserParams 待删除的工作空间用户信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteWorkspaceusers(deleteWorkspaceusersRequest?: DeleteWorkspaceusersRequest): Promise<DeleteWorkspaceusersResponse> {
        const options = ParamCreater().deleteWorkspaceusers(deleteWorkspaceusersRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 发布任务包
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 发布任务包
     * @param {string} [workspace] 工作空间ID
     * @param {string} [contentType] 有Body体的情况下必须，无Body体的情况下则无需填写和校验，默认值：application/json
     * @param {DeployFactoryPackagesRequestBody} [deployFactoryPackagesRequestBody] 发布任务时请求参数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deployFactoryPackages(deployFactoryPackagesRequest?: DeployFactoryPackagesRequest): Promise<DeployFactoryPackagesResponse> {
        const options = ParamCreater().deployFactoryPackages(deployFactoryPackagesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 启动、调度、停止采集任务
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 启动、调度、停止采集任务
     * @param {string} workspace DataArts Studio工作空间ID
     * @param {string} taskId 任务id
     * @param {string} action 启动、调度、停止操作标识
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public executeTaskAction(executeTaskActionRequest?: ExecuteTaskActionRequest): Promise<ExecuteTaskActionResponse> {
        const options = ParamCreater().executeTaskAction(executeTaskActionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 用于导入主题
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 导入主题
     * @param {string} workspace DataArts Studio工作空间ID
     * @param {string} actionId 需要执行的动作
     * @param {any} file 导入主题用的excel文件，大小必须小于4MB，且行数小于3000行
     * @param {boolean} [skipExist] 是否需要覆盖更新已有的主题
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public importCatalogs(importCatalogsRequest?: ImportCatalogsRequest): Promise<ImportCatalogsResponse> {
        const options = ParamCreater().importCatalogs(importCatalogsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 血缘查询
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 血缘导入
     * @param {string} workspace DataArts Studio工作空间ID
     * @param {Array<TableLineage>} importLineageRequestBody 请求参数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public importLineage(importLineageRequest?: ImportLineageRequest): Promise<ImportLineageResponse> {
        const options = ParamCreater().importLineage(importLineageRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 导入模型，关系建模，维度建模，码表，业务指标以及流程架构
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 导入模型，关系建模，维度建模，码表，业务指标以及流程架构
     * @param {string} workspace DataArts Studio工作空间ID
     * @param {'import_relation' | 'import_dimension' | 'import_codetable' | 'import_datastandard' | 'import_bizmetric' | 'import_bizcatalog' | 'import_atomic' | 'import_derivative' | 'import_compound' | 'import_aggregation'} actionId 需要执行的动作，根据导入的对象不同而选择不同的导入动作
     * @param {any} file 导入用的excel文件，大小必须小于4MB，且行数小于3000行
     * @param {string} [modelId] 模型id，在导入模型（import_relation）时必填
     * @param {string} [directoryId] 导入的目录id，在导入码表（import_datastandard）和数据标准（import_datastandard）时生效，选填
     * @param {boolean} [skipExist] 是否需要覆盖更新已有的实体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public importModels(importModelsRequest?: ImportModelsRequest): Promise<ImportModelsResponse> {
        const options = ParamCreater().importModels(importModelsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询导入excel的处理结果
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询导入结果
     * @param {string} workspace DataArts Studio工作空间ID
     * @param {string} uuid 需要查询的某次导入的处理结果
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public importResult(importResultRequest?: ImportResultRequest): Promise<ImportResultResponse> {
        const options = ParamCreater().importResult(importResultRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 初始化模板
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 初始化数据标准模板
     * @param {string} workspace DataArts Studio工作空间ID
     * @param {string} actionId action-id&#x3D;init
     * @param {StandElementFieldVOList} field field info
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public initializeStandardTemplate(initializeStandardTemplateRequest?: InitializeStandardTemplateRequest): Promise<InitializeStandardTemplateResponse> {
        const options = ParamCreater().initializeStandardTemplate(initializeStandardTemplateRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 通过中英文名称、创建者、审核人、状态、修改时间分页查找汇总表信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查找汇总表
     * @param {string} workspace DataArts Studio工作空间ID
     * @param {string} [name] 按名称或编码模糊查询
     * @param {string} [createBy] 按创建者查询
     * @param {string} [approver] 按审核人查询
     * @param {string} [owner] 按负责人查询
     * @param {'DRAFT' | 'PUBLISH_DEVELOPING' | 'PUBLISHED' | 'OFFLINE_DEVELOPING' | 'OFFLINE' | 'REJECT'} [status] 业务状态
     * @param {'RUNNING' | 'NO_NEED' | 'SUMMARY_SUCCESS' | 'SUMMARY_FAILED'} [syncStatus] 
     * @param {Array<'BUSINESS_ASSET' | 'DATA_QUALITY' | 'TECHNICAL_ASSET' | 'META_DATA_LINK' | 'PHYSICAL_TABLE' | 'DLF_TASK' | 'MATERIALIZATION'>} [syncKey] 
     * @param {number} [l3Id] 业务对象l3 id
     * @param {string} [beginTime] 时间过滤左边界,与end_time一起使用,只支持时间范围过滤,单边过滤无效
     * @param {string} [endTime] 时间过滤右边界,与begin_time一起使用只支持时间范围过滤,单边过滤无效
     * @param {number} [limit] 查询条数，即查询Y条数据。默认值50，取值范围[1,100]
     * @param {number} [offset] 查询起始坐标，即跳过X条数据，仅支持0或limit的整数倍，不满足则向下取整。默认值0
     * @param {string} [bizCatalogId] 所属的业务分层的id
     * @param {boolean} [autoGenerate] 是否自动生成
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAggregationLogicTables(listAggregationLogicTablesRequest?: ListAggregationLogicTablesRequest): Promise<ListAggregationLogicTablesResponse> {
        const options = ParamCreater().listAggregationLogicTables(listAggregationLogicTablesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取当前目录下的所有类型列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取当前目录下的所有类型列表
     * @param {string} workspace 工作空间id
     * @param {string} contentType 资源类型
     * @param {string} catalogId 目录编号
     * @param {'SHARED' | 'EXCLUSIVE'} [dlmType] dlm版本类型
     * @param {number} [offset] 查询起始坐标, 即跳过前X条数据
     * @param {number} [limit] 查询条数, 即查询Y条数据
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAllCatalogList(listAllCatalogListRequest?: ListAllCatalogListRequest): Promise<ListAllCatalogListResponse> {
        const options = ParamCreater().listAllCatalogList(listAllCatalogListRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取数据标准
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取数据标准
     * @param {string} workspace DataArts Studio工作空间ID
     * @param {string} [directoryId] 目录ID。获取该目录下的数据，如果有子目录，获取所有子目录的数据
     * @param {string} [beginTime] 时间过滤左边界,与end_time一起使用,只支持时间范围过滤,单边过滤无效
     * @param {string} [endTime] 时间过滤右边界,与begin_time一起使用只支持时间范围过滤,单边过滤无效
     * @param {number} [limit] 查询条数，即查询Y条数据。默认值50，取值范围[1,100]
     * @param {number} [offset] 查询起始坐标，即跳过X条数据，仅支持0或limit的整数倍，不满足则向下取整。默认值0
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAllStandards(listAllStandardsRequest?: ListAllStandardsRequest): Promise<ListAllStandardsResponse> {
        const options = ParamCreater().listAllStandards(listAllStandardsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 从信息架构中查询多种类型的表信息，包括逻辑实体、物理表、维度表、事实表、汇总表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询多种类型的表信息
     * @param {string} workspace DataArts Studio工作空间ID
     * @param {Array<'TABLE_MODEL_LOGIC' | 'TABLE_MODEL' | 'DIMENSION_LOGIC_TABLE' | 'FACT_LOGIC_TABLE' | 'AGGREGATION_LOGIC_TABLE'>} bizTypeList 查询的表类型，必填
     * @param {string} [name] 按名称或编码模糊查询
     * @param {string} [createBy] 按创建者查询
     * @param {'DRAFT' | 'PUBLISH_DEVELOPING' | 'PUBLISHED' | 'OFFLINE_DEVELOPING' | 'OFFLINE' | 'REJECT'} [status] 业务状态
     * @param {'RUNNING' | 'NO_NEED' | 'SUMMARY_SUCCESS' | 'SUMMARY_FAILED'} [syncStatus] 
     * @param {Array<'BUSINESS_ASSET' | 'DATA_QUALITY' | 'TECHNICAL_ASSET' | 'META_DATA_LINK' | 'PHYSICAL_TABLE' | 'DLF_TASK' | 'MATERIALIZATION'>} [syncKey] 
     * @param {string} [bizCatalogId] 所属的业务分层的id
     * @param {string} [beginTime] 时间过滤左边界,与end_time一起使用,只支持时间范围过滤,单边过滤无效
     * @param {string} [endTime] 时间过滤右边界,与begin_time一起使用只支持时间范围过滤,单边过滤无效
     * @param {number} [limit] 查询条数，即查询Y条数据。默认值50，取值范围[1,100]
     * @param {number} [offset] 查询起始坐标，即跳过X条数据，仅支持0或limit的整数倍，不满足则向下取整。默认值0
     * @param {Array<number>} [bizCatalogIdList] 所属主题的id列表
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAllTables(listAllTablesRequest?: ListAllTablesRequest): Promise<ListAllTablesResponse> {
        const options = ParamCreater().listAllTables(listAllTablesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取当前目录下的api列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取当前目录下的api列表
     * @param {string} workspace 工作空间id
     * @param {string} contentType 资源类型
     * @param {string} catalogId 目录编号
     * @param {'SHARED' | 'EXCLUSIVE'} [dlmType] dlm版本类型
     * @param {number} [offset] 查询起始坐标, 即跳过前X条数据
     * @param {number} [limit] 查询条数, 即查询Y条数据
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listApiCatalogList(listApiCatalogListRequest?: ListApiCatalogListRequest): Promise<ListApiCatalogListResponse> {
        const options = ParamCreater().listApiCatalogList(listApiCatalogListRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定api 应用调用topN
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询指定api 应用调用topN
     * @param {string} workspace 工作空间id
     * @param {string} contentType 资源类型
     * @param {string} apiId api编号
     * @param {number} startTime 开始时间（13位时间戳）
     * @param {number} endTime 结束时间（13位时间戳）
     * @param {'HOUR' | 'DAY'} timeUnit 时间单位
     * @param {number} topNum 前几名
     * @param {'CALL_NUM' | 'SUCCESS_NUM' | 'FAIL_NUM' | 'LEGAL_NUM' | 'ILLEGAL_NUM' | 'COST_TIME_AVG' | 'SUCCESS_COST_TIME_AVG' | 'FAIL_COST_TIME_AVG' | 'SUCCESS_RATE' | 'FAIL_RATE' | 'LEGAL_RATE' | 'ILLEGAL_RATE'} orderBy 排序条件
     * @param {'SHARED' | 'EXCLUSIVE'} [dlmType] dlm版本类型
     * @param {string} [instanceId] 集群编号
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listApiTopN(listApiTopNRequest?: ListApiTopNRequest): Promise<ListApiTopNResponse> {
        const options = ParamCreater().listApiTopN(listApiTopNRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取网关分组
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取网关分组
     * @param {string} workspace 工作空间id
     * @param {string} contentType 资源类型
     * @param {string} apigInstanceId 网关实例编号
     * @param {'APIGW' | 'ROMA_APIC'} apigType 网关类型
     * @param {'SHARED' | 'EXCLUSIVE'} [dlmType] dlm版本类型
     * @param {number} [limit] limit
     * @param {number} [offset] offset
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listApicGroups(listApicGroupsRequest?: ListApicGroupsRequest): Promise<ListApicGroupsResponse> {
        const options = ParamCreater().listApicGroups(listApicGroupsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取网关实例
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取网关实例
     * @param {string} workspace 工作空间id
     * @param {string} contentType 资源类型
     * @param {'APIGW' | 'ROMA_APIC'} apigType 网关类型
     * @param {'SHARED' | 'EXCLUSIVE'} [dlmType] dlm版本类型
     * @param {number} [limit] limit
     * @param {number} [offset] offset
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listApicInstances(listApicInstancesRequest?: ListApicInstancesRequest): Promise<ListApicInstancesResponse> {
        const options = ParamCreater().listApicInstances(listApicInstancesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询api 服务调用topN
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询api 服务调用topN
     * @param {string} workspace 工作空间id
     * @param {string} contentType 资源类型
     * @param {number} startTime 开始时间（13位时间戳）
     * @param {number} endTime 结束时间（13位时间戳）
     * @param {'HOUR' | 'DAY'} timeUnit 时间单位
     * @param {number} topNum 前几名
     * @param {'CALL_NUM' | 'SUCCESS_NUM' | 'FAIL_NUM' | 'LEGAL_NUM' | 'ILLEGAL_NUM' | 'COST_TIME_AVG' | 'SUCCESS_COST_TIME_AVG' | 'FAIL_COST_TIME_AVG' | 'SUCCESS_RATE' | 'FAIL_RATE' | 'LEGAL_RATE' | 'ILLEGAL_RATE'} orderBy 排序条件
     * @param {'SHARED' | 'EXCLUSIVE'} [dlmType] dlm版本类型
     * @param {string} [instanceId] 集群编号
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listApisTop(listApisTopRequest?: ListApisTopRequest): Promise<ListApisTopResponse> {
        const options = ParamCreater().listApisTop(listApisTopRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询申请列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询申请列表
     * @param {string} workspace 工作空间id
     * @param {string} contentType 资源类型
     * @param {'SHARED' | 'EXCLUSIVE'} [dlmType] dlm版本类型
     * @param {number} [offset] 查询起始坐标, 即跳过前X条数据。仅支持0或limit的整数倍，不满足则向下取整。
     * @param {number} [limit] 查询条数, 即查询Y条数据
     * @param {string} [apiName] api名称
     * @param {number} [queryType] 查询类型, 0:收到的申请(待审核), 1:收到的申请(已审核), 2:发出的申请(开发), 3:发出的申请(调用)
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listApply(listApplyRequest?: ListApplyRequest): Promise<ListApplyResponse> {
        const options = ParamCreater().listApply(listApplyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询审批人列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询审批人列表
     * @param {string} workspace DataArts Studio工作空间ID
     * @param {string} [approverName] 审核人名字
     * @param {number} [limit] 查询条数，即查询Y条数据。默认值50，取值范围[1,100]
     * @param {number} [offset] 查询起始坐标，即跳过X条数据，仅支持0或limit的整数倍，不满足则向下取整。默认值0
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listApprovers(listApproversRequest?: ListApproversRequest): Promise<ListApproversResponse> {
        const options = ParamCreater().listApprovers(listApproversRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询应用列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询应用列表
     * @param {string} workspace 工作空间id
     * @param {string} contentType 资源类型
     * @param {'SHARED' | 'EXCLUSIVE'} [dlmType] dlm版本类型
     * @param {number} [limit] limit
     * @param {number} [offset] offset
     * @param {string} [name] 应用名称
     * @param {'APIG' | 'IAM' | 'APIGW' | 'DLM' | 'ROMA_APIC'} [appType] 应用类型
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listApps(listAppsRequest?: ListAppsRequest): Promise<ListAppsResponse> {
        const options = ParamCreater().listApps(listAppsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询app 服务使用topN
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询app 服务使用topN
     * @param {string} workspace 工作空间id
     * @param {string} contentType 资源类型
     * @param {number} startTime 开始时间（13位时间戳）
     * @param {number} endTime 结束时间（13位时间戳）
     * @param {'HOUR' | 'DAY'} timeUnit 时间单位
     * @param {number} topNum 前几名
     * @param {'CALL_NUM' | 'SUCCESS_NUM' | 'FAIL_NUM' | 'LEGAL_NUM' | 'ILLEGAL_NUM' | 'COST_TIME_AVG' | 'SUCCESS_COST_TIME_AVG' | 'FAIL_COST_TIME_AVG' | 'SUCCESS_RATE' | 'FAIL_RATE' | 'LEGAL_RATE' | 'ILLEGAL_RATE'} orderBy 排序条件
     * @param {'SHARED' | 'EXCLUSIVE'} [dlmType] dlm版本类型
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAppsTop(listAppsTopRequest?: ListAppsTopRequest): Promise<ListAppsTopResponse> {
        const options = ParamCreater().listAppsTop(listAppsTopRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查看指标维度信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查看指标维度信息
     * @param {string} workspace DataArts Studio工作空间ID
     * @param {number} [limit] 查询条数，即查询Y条数据。默认值50，取值范围[1,100]
     * @param {number} [offset] 查询起始坐标，即跳过X条数据，仅支持0或limit的整数倍，不满足则向下取整。默认值0
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listBizMetricDimensions(listBizMetricDimensionsRequest?: ListBizMetricDimensionsRequest): Promise<ListBizMetricDimensionsResponse> {
        const options = ParamCreater().listBizMetricDimensions(listBizMetricDimensionsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查看指标指标责任人信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查看指标指标责任人信息
     * @param {string} workspace DataArts Studio工作空间ID
     * @param {number} [limit] 查询条数，即查询Y条数据。默认值50，取值范围[1,100]
     * @param {number} [offset] 查询起始坐标，即跳过X条数据，仅支持0或limit的整数倍，不满足则向下取整。默认值0
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listBizMetricOwners(listBizMetricOwnersRequest?: ListBizMetricOwnersRequest): Promise<ListBizMetricOwnersResponse> {
        const options = ParamCreater().listBizMetricOwners(listBizMetricOwnersRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 通过名称、创建者、修改时间分页查找业务指标信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询业务指标信息
     * @param {string} workspace DataArts Studio工作空间ID
     * @param {string} [name] 按名称或编码模糊查询
     * @param {string} [createBy] 按创建者查询
     * @param {string} [owner] 按负责人查询
     * @param {'DRAFT' | 'PUBLISH_DEVELOPING' | 'PUBLISHED' | 'OFFLINE_DEVELOPING' | 'OFFLINE' | 'REJECT'} [status] 业务状态
     * @param {'RUNNING' | 'NO_NEED' | 'SUMMARY_SUCCESS' | 'SUMMARY_FAILED'} [syncStatus] 
     * @param {Array<'BUSINESS_ASSET' | 'DATA_QUALITY' | 'TECHNICAL_ASSET' | 'META_DATA_LINK' | 'PHYSICAL_TABLE' | 'DLF_TASK' | 'MATERIALIZATION'>} [syncKey] 
     * @param {string} [bizCatalogId] 所属的业务分层的id
     * @param {string} [beginTime] 时间过滤左边界,与end_time一起使用,只支持时间范围过滤,单边过滤无效
     * @param {string} [endTime] 时间过滤右边界,与begin_time一起使用只支持时间范围过滤,单边过滤无效
     * @param {number} [limit] 查询条数，即查询Y条数据。默认值50，取值范围[1,100]
     * @param {number} [offset] 查询起始坐标，即跳过X条数据，仅支持0或limit的整数倍，不满足则向下取整。默认值0
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listBizMetrics(listBizMetricsRequest?: ListBizMetricsRequest): Promise<ListBizMetricsResponse> {
        const options = ParamCreater().listBizMetrics(listBizMetricsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取数据资产主题树信息l1，l2，l3
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取主题树信息
     * @param {string} workspace DataArts Studio工作空间ID
     * @param {number} [limit] 查询条数，即查询Y条数据。默认值50，取值范围[1,100]
     * @param {number} [offset] 查询起始坐标，即跳过X条数据，仅支持0或limit的整数倍，不满足则向下取整。默认值0
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listBusiness(listBusinessRequest?: ListBusinessRequest): Promise<ListBusinessResponse> {
        const options = ParamCreater().listBusiness(listBusinessRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取当前目录下的目录列表（全量）
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取当前目录下的目录列表（全量）
     * @param {string} workspace 工作空间id
     * @param {string} contentType 资源类型
     * @param {string} catalogId 目录编号
     * @param {'SHARED' | 'EXCLUSIVE'} [dlmType] dlm版本类型
     * @param {number} [limit] limit
     * @param {number} [offset] offset
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listCatalogList(listCatalogListRequest?: ListCatalogListRequest): Promise<ListCatalogListResponse> {
        const options = ParamCreater().listCatalogList(listCatalogListRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取所有目录树
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取所有流程架构目录树
     * @param {string} workspace DataArts Studio工作空间ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listCatalogTree(listCatalogTreeRequest?: ListCatalogTreeRequest): Promise<ListCatalogTreeResponse> {
        const options = ParamCreater().listCatalogTree(listCatalogTreeRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取作业目录
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取作业目录
     * @param {string} workspace DataArts Studio工作空间ID
     * @param {string} accept application/json
     * @param {number} [limit] 分页时每页的条数,最大值为100
     * @param {number} [offset] 分页偏移量
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listCategory(listCategoryRequest?: ListCategoryRequest): Promise<ListCategoryResponse> {
        const options = ParamCreater().listCategory(listCategoryRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取数据源中表的字段
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取数据源中表的字段
     * @param {string} workspace 数据所在空间的id值
     * @param {string} connectionId 数据连接id
     * @param {string} tableId 表id
     * @param {string} [limit] 数据条数限制
     * @param {string} [offset] 偏移量
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listColumns(listColumnsRequest?: ListColumnsRequest): Promise<ListColumnsResponse> {
        const options = ParamCreater().listColumns(listColumnsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 通过中英文名称、创建者、审核人、状态、修改时间、l3Id分页查找复合指标信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查找复合指标
     * @param {string} workspace DataArts Studio工作空间ID
     * @param {string} [name] 按名称或编码模糊查询
     * @param {string} [createBy] 按创建者查询
     * @param {string} [approver] 按审核人查询
     * @param {'DRAFT' | 'PUBLISH_DEVELOPING' | 'PUBLISHED' | 'OFFLINE_DEVELOPING' | 'OFFLINE' | 'REJECT'} [status] 业务状态
     * @param {string} [dimensionGroup] 依据维度颗粒度查维度属性
     * @param {number} [atomicIndexId] 依据原子指标id查维度属性
     * @param {number} [l3Id] 业务对象l3 id
     * @param {string} [beginTime] 时间过滤左边界,与end_time一起使用,只支持时间范围过滤,单边过滤无效
     * @param {string} [endTime] 时间过滤右边界,与begin_time一起使用只支持时间范围过滤,单边过滤无效
     * @param {number} [limit] 查询条数，即查询Y条数据。默认值50，取值范围[1,100]
     * @param {number} [offset] 查询起始坐标，即跳过X条数据，仅支持0或limit的整数倍，不满足则向下取整。默认值0
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listCompoundMetrics(listCompoundMetricsRequest?: ListCompoundMetricsRequest): Promise<ListCompoundMetricsResponse> {
        const options = ParamCreater().listCompoundMetrics(listCompoundMetricsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 通过中英文名称、描述、创建者、审核人、限定分组id、修改时间状态分页查找限定信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查找业务限定
     * @param {string} workspace DataArts Studio工作空间ID
     * @param {string} [name] 按名称或编码模糊查询
     * @param {string} [createBy] 按创建者查询
     * @param {string} [approver] 按审核人查询
     * @param {'DRAFT' | 'PUBLISH_DEVELOPING' | 'PUBLISHED' | 'OFFLINE_DEVELOPING' | 'OFFLINE' | 'REJECT'} [status] 业务状态
     * @param {string} [beginTime] 时间过滤左边界,与end_time一起使用,只支持时间范围过滤,单边过滤无效
     * @param {string} [endTime] 时间过滤右边界,与begin_time一起使用只支持时间范围过滤,单边过滤无效
     * @param {number} [limit] 查询条数，即查询Y条数据。默认值50，取值范围[1,100]
     * @param {number} [offset] 查询起始坐标，即跳过X条数据，仅支持0或limit的整数倍，不满足则向下取整。默认值0
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listCondition(listConditionRequest?: ListConditionRequest): Promise<ListConditionResponse> {
        const options = ParamCreater().listCondition(listConditionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取对账作业列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取对账作业列表
     * @param {string} workspace DataArts Studio工作空间ID
     * @param {number} [categoryId] 目录ID
     * @param {string} [name] name
     * @param {'UNKNOWN' | 'NOT_START' | 'SCHEDULING' | 'FINISH_SUCCESS' | 'KILL' | 'RUNNING_EXCEPTION'} [scheduleStatus] 调度状态 UNKNOWN:未知,NOT_START:未启动,SCHEDULING:调度中,FINISH_SUCCESS:正常结束,KILL:手动停止,RUNNING_EXCEPTION:运行失败
     * @param {number} [startTime] 最近运行时间查询区间的开始时间,13位时间戳(精确到毫秒)
     * @param {number} [endTime] 最近运行时间查询区间的结束时间,13位时间戳(精确到毫秒)
     * @param {string} [creator] 创建人
     * @param {number} [limit] 分页条数,最大值为100
     * @param {number} [offset] 分页偏移量,最小值0
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listConsistencyTask(listConsistencyTaskRequest?: ListConsistencyTaskRequest): Promise<ListConsistencyTaskResponse> {
        const options = ParamCreater().listConsistencyTask(listConsistencyTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取实例列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取实例列表
     * @param {number} [limit] 分页记录数。默认20
     * @param {number} [offset] 分页偏移量。默认0
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listDataArtsStudioInstances(listDataArtsStudioInstancesRequest?: ListDataArtsStudioInstancesRequest): Promise<ListDataArtsStudioInstancesResponse> {
        const options = ParamCreater().listDataArtsStudioInstances(listDataArtsStudioInstancesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取数据源中的表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取数据源中的表
     * @param {string} workspace 数据所在空间的id值
     * @param {string} connectionId 数据连接id
     * @param {string} databaseName 数据库名称
     * @param {string} [tableName] 指定查询表的名称
     * @param {string} [limit] 数据条数限制
     * @param {string} [offset] 偏移量
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listDataTables(listDataTablesRequest?: ListDataTablesRequest): Promise<ListDataTablesResponse> {
        const options = ParamCreater().listDataTables(listDataTablesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取数据库列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取数据库列表
     * @param {string} workspace 数据所在空间的id值
     * @param {string} connectionId 数据连接id
     * @param {string} [limit] 数据条数限制
     * @param {string} [offset] 偏移量
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listDatabases(listDatabasesRequest?: ListDatabasesRequest): Promise<ListDatabasesResponse> {
        const options = ParamCreater().listDatabases(listDatabasesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询数据连接列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询数据连接列表
     * @param {string} workspace 工作空间id
     * @param {string} [name] 数据连接名称
     * @param {string} [type] 数据连接类型,有HIVE,MYSQL,ORALCLE,DWS,HBASE等。
     * @param {string} [limit] 数据条数限制
     * @param {string} [offset] 偏移量
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listDataconnections(listDataconnectionsRequest?: ListDataconnectionsRequest): Promise<ListDataconnectionsResponse> {
        const options = ParamCreater().listDataconnections(listDataconnectionsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 通过中英文名称、创建者、审核人、状态、修改时间、l3Id分页查找衍生指标信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查找衍生指标
     * @param {string} workspace DataArts Studio工作空间ID
     * @param {string} [name] 按名称或编码模糊查询
     * @param {string} [createBy] 按创建者查询
     * @param {string} [approver] 按审核人查询
     * @param {'DRAFT' | 'PUBLISH_DEVELOPING' | 'PUBLISHED' | 'OFFLINE_DEVELOPING' | 'OFFLINE' | 'REJECT'} [status] 业务状态
     * @param {number} [dimensionId] 依据维度id查维度属性
     * @param {string} [dimensionGroup] 依据维度颗粒度查维度属性
     * @param {number} [atomicIndexId] 依据原子指标id查维度属性
     * @param {boolean} [allMetrics] 是否查询复合指标
     * @param {string} [dwType] 数据连接类型
     * @param {number} [l3Id] 业务对象l3 id
     * @param {string} [beginTime] 时间过滤左边界,与end_time一起使用,只支持时间范围过滤,单边过滤无效
     * @param {string} [endTime] 时间过滤右边界,与begin_time一起使用只支持时间范围过滤,单边过滤无效
     * @param {number} [limit] 查询条数，即查询Y条数据。默认值50，取值范围[1,100]
     * @param {number} [offset] 查询起始坐标，即跳过X条数据，仅支持0或limit的整数倍，不满足则向下取整。默认值0
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listDerivativeIndexes(listDerivativeIndexesRequest?: ListDerivativeIndexesRequest): Promise<ListDerivativeIndexesResponse> {
        const options = ParamCreater().listDerivativeIndexes(listDerivativeIndexesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询维度颗粒度, 依据tableId查询涉及所有维度，不传tableId查询所有维度组颗粒度
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查看维度颗粒度
     * @param {string} workspace DataArts Studio工作空间ID
     * @param {number} [tableId] 关联表id
     * @param {string} [bizType] 按业务类型查询
     * @param {number} [limit] 查询条数，即查询Y条数据。默认值50，取值范围[1,100]
     * @param {number} [offset] 查询起始坐标，即跳过X条数据，仅支持0或limit的整数倍，不满足则向下取整。默认值0
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listDimensionGroups(listDimensionGroupsRequest?: ListDimensionGroupsRequest): Promise<ListDimensionGroupsResponse> {
        const options = ParamCreater().listDimensionGroups(listDimensionGroupsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 通过中英文名称、创建者、审核人、状态、修改时间分页查找维度表信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查找维度表
     * @param {string} workspace DataArts Studio工作空间ID
     * @param {string} [name] 按名称或编码模糊查询
     * @param {string} [createBy] 按创建者查询
     * @param {string} [approver] 按审核人查询
     * @param {string} [owner] 按负责人查询
     * @param {'DRAFT' | 'PUBLISH_DEVELOPING' | 'PUBLISHED' | 'OFFLINE_DEVELOPING' | 'OFFLINE' | 'REJECT'} [status] 业务状态
     * @param {'RUNNING' | 'NO_NEED' | 'SUMMARY_SUCCESS' | 'SUMMARY_FAILED'} [syncStatus] 
     * @param {Array<'BUSINESS_ASSET' | 'DATA_QUALITY' | 'TECHNICAL_ASSET' | 'META_DATA_LINK' | 'PHYSICAL_TABLE' | 'DLF_TASK' | 'MATERIALIZATION'>} [syncKey] 
     * @param {number} [l2Id] 主题域l2 id
     * @param {number} [dimensionId] 依据维度id查维度属性
     * @param {string} [beginTime] 时间过滤左边界,与end_time一起使用,只支持时间范围过滤,单边过滤无效
     * @param {string} [endTime] 时间过滤右边界,与begin_time一起使用只支持时间范围过滤,单边过滤无效
     * @param {number} [limit] 查询条数，即查询Y条数据。默认值50，取值范围[1,100]
     * @param {number} [offset] 查询起始坐标，即跳过X条数据，仅支持0或limit的整数倍，不满足则向下取整。默认值0
     * @param {string} [bizCatalogId] 所属的业务分层的id
     * @param {'COMMON' | 'LOOKUP' | 'HIERARCHIES'} [dimensionType] 维度类型
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listDimensionLogicTables(listDimensionLogicTablesRequest?: ListDimensionLogicTablesRequest): Promise<ListDimensionLogicTablesResponse> {
        const options = ParamCreater().listDimensionLogicTables(listDimensionLogicTablesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 通过中英文名称、描述、创建者、审核人、状态、l3Id、派生指标idList、修改时间分页查找维度信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查找维度
     * @param {string} workspace DataArts Studio工作空间ID
     * @param {string} [name] 按名称或编码模糊查询
     * @param {string} [createBy] 按创建者查询
     * @param {string} [approver] 按审核人查询
     * @param {'DRAFT' | 'PUBLISH_DEVELOPING' | 'PUBLISHED' | 'OFFLINE_DEVELOPING' | 'OFFLINE' | 'REJECT'} [status] 业务状态
     * @param {number} [l2Id] 主题域l2 id
     * @param {Array<number>} [derivativeIds] 依据复合指标id列表查维度
     * @param {string} [beginTime] 时间过滤左边界,与end_time一起使用,只支持时间范围过滤,单边过滤无效
     * @param {string} [endTime] 时间过滤右边界,与begin_time一起使用只支持时间范围过滤,单边过滤无效
     * @param {number} [factLogicId] 事实表id
     * @param {'COMMON' | 'LOOKUP' | 'HIERARCHIES'} [dimensionType] 维度类型
     * @param {number} [limit] 查询条数，即查询Y条数据。默认值50，取值范围[1,100]
     * @param {number} [offset] 查询起始坐标，即跳过X条数据，仅支持0或limit的整数倍，不满足则向下取整。默认值0
     * @param {string} [bizCatalogId] 所属的业务分层的id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listDimensions(listDimensionsRequest?: ListDimensionsRequest): Promise<ListDimensionsResponse> {
        const options = ParamCreater().listDimensions(listDimensionsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取所有目录
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取所有目录
     * @param {string} workspace DataArts Studio工作空间ID
     * @param {'CODE' | 'STANDARD_ELEMENT'} type 获取该目录下的数据，如果有子目录，获取所有子目录的数据
     * @param {number} [limit] 查询条数，即查询Y条数据。默认值50，取值范围[1,100]
     * @param {number} [offset] 查询起始坐标，即跳过X条数据，仅支持0或limit的整数倍，不满足则向下取整。默认值0
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listDirectories(listDirectoriesRequest?: ListDirectoriesRequest): Promise<ListDirectoriesResponse> {
        const options = ParamCreater().listDirectories(listDirectoriesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 通过中英文名称、创建者、审核人、状态、修改时间分页查找事实表信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查找事实表
     * @param {string} workspace DataArts Studio工作空间ID
     * @param {string} [name] 按名称或编码模糊查询
     * @param {string} [createBy] 按创建者查询
     * @param {string} [approver] 按审核人查询
     * @param {string} [owner] 按负责人查询
     * @param {'DRAFT' | 'PUBLISH_DEVELOPING' | 'PUBLISHED' | 'OFFLINE_DEVELOPING' | 'OFFLINE' | 'REJECT'} [status] 业务状态
     * @param {'RUNNING' | 'NO_NEED' | 'SUMMARY_SUCCESS' | 'SUMMARY_FAILED'} [syncStatus] 
     * @param {Array<'BUSINESS_ASSET' | 'DATA_QUALITY' | 'TECHNICAL_ASSET' | 'META_DATA_LINK' | 'PHYSICAL_TABLE' | 'DLF_TASK' | 'MATERIALIZATION'>} [syncKey] 
     * @param {number} [l3Id] 业务对象l3 id
     * @param {string} [beginTime] 时间过滤左边界,与end_time一起使用,只支持时间范围过滤,单边过滤无效
     * @param {string} [endTime] 时间过滤右边界,与begin_time一起使用只支持时间范围过滤,单边过滤无效
     * @param {number} [limit] 查询条数，即查询Y条数据。默认值50，取值范围[1,100]
     * @param {number} [offset] 查询起始坐标，即跳过X条数据，仅支持0或limit的整数倍，不满足则向下取整。默认值0
     * @param {string} [bizCatalogId] 所属的业务分层的id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listFactLogicTables(listFactLogicTablesRequest?: ListFactLogicTablesRequest): Promise<ListFactLogicTablesResponse> {
        const options = ParamCreater().listFactLogicTables(listFactLogicTablesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询告警通知记录
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询告警通知记录
     * @param {string} [workspace] 工作空间ID
     * @param {number} [startTime] 告警的开始时间，默认当前时间的前一个小时，13位时间戳
     * @param {number} [endTime] 告警的最后时间，默认为当前时间，13位时间戳
     * @param {number} [offset] 分页的起始页，默认值为0。取值范围大于等于0。
     * @param {number} [limit] 分页返回结果，指定每页最大记录数。默认值10
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listFactoryAlarmInfo(listFactoryAlarmInfoRequest?: ListFactoryAlarmInfoRequest): Promise<ListFactoryAlarmInfoResponse> {
        const options = ParamCreater().listFactoryAlarmInfo(listFactoryAlarmInfoRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定作业的实例列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询指定作业的实例列表
     * @param {string} jobName 作业名称
     * @param {string} [workspace] 工作空间ID
     * @param {string} [contentType] 有Body体的情况下必须，无Body体的情况下则无需填写和校验，默认值：application/json
     * @param {number} [limit] 分页返回结果，指定每页最大记录数。 范围[1,1000] 默认值：10
     * @param {number} [offset] 分页的起始页，默认值为0。取值范围大于等于0。
     * @param {number} [minPlanTime] 返回作业实例开始时间大于min_plain_time的作业实例，单位为毫秒ms，默认设置为查询当天0点，最大可支持查询一个月。
     * @param {number} [maxPlanTime] 返回作业实例开始时间小于max_plain_time的作业实例，单位为毫秒ms，默认设置为当前时间。
     * @param {'waiting' | 'running' | 'success' | 'fail' | 'running-exception' | 'pause' | 'manual-stop' | 'skip-by-depend' | 'freeze'} [status] 实例运行状态: - waiting：等待运行 - running：运行中 - success：运行成功 - fail： 运行失败 - running-exception：运行异常 - pause： 暂停 - manual-stop：取消 - skip-by-depend：跳过 - freeze：冻结 默认查全部
     * @param {boolean} [forceSuccess] status为success的时候使用，true则筛选出强制成功的作业实例默认值：false
     * @param {boolean} [ignoreSuccess] status为success的时候使用，true则筛选出忽略失败的作业实例默认值：false
     * @param {string} [instanceType] 作业调度方式: -0:正常调度 -2:手工调度 -5:补数据 -6:子作业调度 -7:单次调度
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listFactoryJobInstancesByName(listFactoryJobInstancesByNameRequest?: ListFactoryJobInstancesByNameRequest): Promise<ListFactoryJobInstancesByNameResponse> {
        const options = ParamCreater().listFactoryJobInstancesByName(listFactoryJobInstancesByNameRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询作业列表清单
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询作业列表
     * @param {string} workspace DataArts Studio工作空间ID
     * @param {number} [limit] 分页参数：每页限定数量
     * @param {number} [offset] 分页参数：页数
     * @param {'REAL_TIME' | 'BATCH'} [jobType] 作业类型:  - REAL_TIME: 实时处理  - BATCH: 批处理
     * @param {string} [jobName] 作业名称
     * @param {string} [tags] 作业标签
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listFactoryJobs(listFactoryJobsRequest?: ListFactoryJobsRequest): Promise<ListFactoryJobsResponse> {
        const options = ParamCreater().listFactoryJobs(listFactoryJobsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询发布包列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询发布包列表
     * @param {ListReleasePackagesRequestBody} listFactoryReleasePackagesRequestBody 发布包管理-列表查询请求Body体参数
     * @param {string} [workspace] 工作空间ID，默认查询default空间
     * @param {string} [contentType] 有Body体的情况下必须，无Body体的情况下则无需填写和校验，默认值：application/json
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listFactoryReleasePackages(listFactoryReleasePackagesRequest?: ListFactoryReleasePackagesRequest): Promise<ListFactoryReleasePackagesResponse> {
        const options = ParamCreater().listFactoryReleasePackages(listFactoryReleasePackagesRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-request-id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询任务完成情况
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询任务完成情况
     * @param {string} [workspace] 工作空间ID
     * @param {string} [type] 查询任务的类型，默认为all，查询所有任务。 类型有：Dummy、CDM Job、MRS Hive SQL、MRS Spark SQL、MRS Impala SQL、DLI SQL、DLI Spark、Python、DWS SQL、Shell、MRS ClickHouse、MRS HetuEngine
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listFactoryTaskCompletion(listFactoryTaskCompletionRequest?: ListFactoryTaskCompletionRequest): Promise<ListFactoryTaskCompletionResponse> {
        const options = ParamCreater().listFactoryTaskCompletion(listFactoryTaskCompletionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询实例运行状态
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询实例运行状态
     * @param {string} [workspace] 工作空间ID
     * @param {string} [isOwn] 是否查询当前用户的实例，默认为false，表示查询全部用户实例，为true时，表示查询当前用户的实例。
     * @param {string} [queryDays] 查询的天数，取值范围为：today、yesterday、before_yesterday、all，默认为today，表示查询今天的数据，支持查询近7天的数据。 today：查询当天的实例状态数量， yesterday：查询昨天的实例状态数量， before_yesterday：查询前天的实例状态数量， all：查询7天前到当天的实例状态总量。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listFactoryTaskOverview(listFactoryTaskOverviewRequest?: ListFactoryTaskOverviewRequest): Promise<ListFactoryTaskOverviewResponse> {
        const options = ParamCreater().listFactoryTaskOverview(listFactoryTaskOverviewRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取任务执行结果列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取任务执行结果列表
     * @param {string} workspace DataArts Studio工作空间ID
     * @param {string} [name] 规则名称
     * @param {'QUALITY_TASK' | 'CONSISTENCY_TASK'} [taskType] 任务实例类型 QUALITY_TASK:质量作业 CONSISTENCY_TASK:对账作业
     * @param {'SUCCESS' | 'FAILED' | 'RUNNING' | 'ALARMING'} [runStatus] 状态, RUNNING:运行中,FAILED:失败,ALARMING:报警,SUCCESS:正常,SUSPENDING:暂停中,UNKNOWN:未定义
     * @param {'SUCCESS' | 'FAILED' | 'NOT_TRIGGERED'} [notifyStatus] 通知状态 NOT_TRIGGERED:未触发,SUCCESS:成功,FAILED:失败
     * @param {number} [startTime] 最近运行时间查询区间的开始时间,13位时间戳(精确到毫秒)
     * @param {number} [endTime] 最近运行时间查询区间的结束时间,13位时间戳(精确到毫秒)
     * @param {number} [limit] 每页显示的条目数量,最大值为100
     * @param {number} [offset] 分页偏移量
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listInstances(listInstancesRequest?: ListInstancesRequest): Promise<ListInstancesResponse> {
        const options = ParamCreater().listInstances(listInstancesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取工作空间列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取工作空间列表
     * @param {string} instanceId DataArtsStudio实例id
     * @param {number} [limit] 分页记录数，默认20
     * @param {number} [offset] 数据偏移量。默认0
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listManagerWorkSpaces(listManagerWorkSpacesRequest?: ListManagerWorkSpacesRequest): Promise<ListManagerWorkSpacesResponse> {
        const options = ParamCreater().listManagerWorkSpaces(listManagerWorkSpacesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询消息列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询消息列表
     * @param {string} workspace 工作空间id
     * @param {string} contentType 资源类型
     * @param {'SHARED' | 'EXCLUSIVE'} [dlmType] dlm版本类型
     * @param {number} [offset] 查询起始坐标, 即跳过前X条数据。仅支持0或limit的整数倍，不满足则向下取整。
     * @param {number} [limit] 查询条数, 即查询Y条数据
     * @param {string} [apiName] api名称
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listMessage(listMessageRequest?: ListMessageRequest): Promise<ListMessageResponse> {
        const options = ParamCreater().listMessage(listMessageRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取当前指标图谱
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取指标关联信息
     * @param {string} workspace DataArts Studio工作空间ID
     * @param {string} id 实体id
     * @param {string} bizType 指标类型
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listMetricRelations(listMetricRelationsRequest?: ListMetricRelationsRequest): Promise<ListMetricRelationsResponse> {
        const options = ParamCreater().listMetricRelations(listMetricRelationsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取质量作业列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取质量作业列表
     * @param {string} workspace DataArts Studio工作空间ID
     * @param {number} [categoryId] 目录ID
     * @param {string} [name] name
     * @param {'UNKNOWN' | 'NOT_START' | 'SCHEDULING' | 'FINISH_SUCCESS' | 'KILL' | 'RUNNING_EXCEPTION'} [scheduleStatus] 调度状态 UNKNOWN:未知,NOT_START:未启动,SCHEDULING:调度中,FINISH_SUCCESS:正常结束,KILL:手动停止,RUNNING_EXCEPTION:运行失败
     * @param {number} [startTime] 最近运行时间查询区间的开始时间,13位时间戳(精确到毫秒)
     * @param {number} [endTime] 最近运行时间查询区间的结束时间,13位时间戳(精确到毫秒)
     * @param {string} [creator] 创建人
     * @param {number} [limit] 分页条数,最大值为100
     * @param {number} [offset] 分页偏移量,最小值0
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listQualityTask(listQualityTaskRequest?: ListQualityTaskRequest): Promise<ListQualityTaskResponse> {
        const options = ParamCreater().listQualityTask(listQualityTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取质量作业列表V1
     * @param {number} [start] start number
     * @param {number} [pageSize] page size
     * @param {number} [offset] 分页查询偏移量
     * @param {number} [limit] 每页显示的条目数量
     * @param {number} [categoryId] category id
     * @param {string} [ruleName] rule name
     * @param {number} [scheduleStatus] schedule status
     * @param {number} [schedulePeriod] schedule period
     * @param {string} [startTime] 开始时间(搜索)
     * @param {string} [endTime] 结束时间(搜索)
     * @param {number} [resultStatus] 最近运行结果 0：运行中 1：异常 2：告警 3：正常
     * @param {string} [sort] 排序字段
     * @param {string} [order] 排序方式
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listQualityTaskLists(listQualityTaskListsRequest?: ListQualityTaskListsRequest): Promise<ListQualityTaskListsResponse> {
        const options = ParamCreater().listQualityTaskLists(listQualityTaskListsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 分页获取规则模板列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取规则模板列表
     * @param {string} workspace DataArts Studio工作空间ID
     * @param {number} [categoryId] category id
     * @param {string} [name] name
     * @param {boolean} [systemTemplate] 是否只查询系统模板
     * @param {string} [creator] 创建者
     * @param {number} [limit] 分页时每页的条数,最大值为100
     * @param {number} [offset] 分页偏移量
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listQualityTemplates(listQualityTemplatesRequest?: ListQualityTemplatesRequest): Promise<ListQualityTemplatesResponse> {
        const options = ParamCreater().listQualityTemplates(listQualityTemplatesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 通过名称、等分页查找关系信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 关系
     * @param {string} workspace DataArts Studio工作空间ID
     * @param {string} [name] 按名称或编码模糊查询
     * @param {string} [createBy] 按创建者查询
     * @param {string} [beginTime] 时间过滤左边界,与end_time一起使用,只支持时间范围过滤,单边过滤无效
     * @param {string} [endTime] 时间过滤右边界,与begin_time一起使用只支持时间范围过滤,单边过滤无效
     * @param {number} [limit] 查询条数，即查询Y条数据。默认值50，取值范围[1,100]
     * @param {number} [offset] 查询起始坐标，即跳过X条数据，仅支持0或limit的整数倍，不满足则向下取整。默认值0
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listRelations(listRelationsRequest?: ListRelationsRequest): Promise<ListRelationsResponse> {
        const options = ParamCreater().listRelations(listRelationsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取schemas,目前只有DWS和采用postgresql驱动的RDS数据源支持schema,请在调用前确认该数据源是否支持schema字段
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取schemas
     * @param {string} workspace 数据所在空间的id值
     * @param {string} connectionId 数据连接id
     * @param {string} databaseName 数据库名称
     * @param {string} [limit] 数据条数限制
     * @param {string} [offset] 偏移量
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listSchemas(listSchemasRequest?: ListSchemasRequest): Promise<ListSchemasResponse> {
        const options = ParamCreater().listSchemas(listSchemasRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询规则组列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询规则组列表
     * @param {string} workspace DataArts Studio工作空间ID
     * @param {number} [limit] limit
     * @param {number} [offset] offset
     * @param {string} [name] 规则组名称
     * @param {string} [creator] 规则组创建者
     * @param {'createdAt' | 'createdBy' | 'updatedAt' | 'updatedBy' | 'name' | 'description'} [orderBy] 排序字段, createdAt, createdBy, updatedAt, updatedBy, name, description
     * @param {boolean} [desc] 是否降序
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listSecurityDataClassificationRuleGroups(listSecurityDataClassificationRuleGroupsRequest?: ListSecurityDataClassificationRuleGroupsRequest): Promise<ListSecurityDataClassificationRuleGroupsResponse> {
        const options = ParamCreater().listSecurityDataClassificationRuleGroups(listSecurityDataClassificationRuleGroupsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询识别规则列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询识别规则列表
     * @param {string} workspace DataArts Studio工作空间ID
     * @param {number} [offset] 查询偏移
     * @param {number} [limit] 查询一页限制
     * @param {string} [secrecyLevel] 密级
     * @param {string} [name] 规则名称
     * @param {string} [creator] 规则创建者
     * @param {boolean} [enable] 规则是否开启
     * @param {number} [startTime] 开始日期
     * @param {number} [endTime] 结束日期
     * @param {'createdAt' | 'createdBy' | 'updatedAt' | 'updatedBy' | 'name' | 'description'} [orderBy] 排序字段, createdAt, createdBy, updatedAt, updatedBy, name, description
     * @param {boolean} [desc] 排序规则
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listSecurityDataClassificationRules(listSecurityDataClassificationRulesRequest?: ListSecurityDataClassificationRulesRequest): Promise<ListSecurityDataClassificationRulesResponse> {
        const options = ParamCreater().listSecurityDataClassificationRules(listSecurityDataClassificationRulesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询数据操作信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询数据操作信息
     * @param {string} workspace DataArts Studio工作空间ID
     * @param {string} parentPermissionSetId 父权限集ID。获取方法请参见[查询权限集列表](ListSecurityPermissionSets.xml) 注意： * 当该值为0时，则所有库表均支持查询 * 当该值为父权限集ID时，则基于父权限集中的权限查询
     * @param {string} clusterId 集群ID，获取方法请参见[查询单个数据连接信息](ShowDataconnection.xml) * 查询Hive和DWS数据源操作信息时该数值为必填项，当数据源为DLI时无需填写
     * @param {'HIVE' | 'DWS' | 'DLI'} datasourceType 数据源类型 * HIVE数据源 * DWS数据源 * DLI数据源
     * @param {string} [databaseName] 数据库名 &#x60;注意：该值作为查询关键字时，不能与url同时存在，需要指定其一进行查询&#x60;
     * @param {string} [schemaName] schema名称
     * @param {string} [tableName] 数据表名称
     * @param {string} [columnName] 数据字段名称
     * @param {string} [url] url路径名称 &#x60;注意：该值作为查询关键字时，不能与database_name同时存在，需要指定其一进行查询&#x60;
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listSecurityDatasourceActions(listSecurityDatasourceActionsRequest?: ListSecurityDatasourceActionsRequest): Promise<ListSecurityDatasourceActionsResponse> {
        const options = ParamCreater().listSecurityDatasourceActions(listSecurityDatasourceActionsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询数据源可配置权限
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询数据源可配置权限
     * @param {string} workspace DataArts Studio工作空间ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listSecurityDatasourceConfigurations(listSecurityDatasourceConfigurationsRequest?: ListSecurityDatasourceConfigurationsRequest): Promise<ListSecurityDatasourceConfigurationsResponse> {
        const options = ParamCreater().listSecurityDatasourceConfigurations(listSecurityDatasourceConfigurationsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询url信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询url信息
     * @param {string} workspace DataArts Studio工作空间ID
     * @param {string} [clusterId] 集群id
     * @param {'HIVE'} [datasourceType] 数据源类型,HIVE
     * @param {string} [parentPermissionSetId] 父权限集ID。获取方法请参见[查询权限集列表](ListSecurityPermissionSets.xml) 注意： * 当该值为父权限集ID时，则基于父权限集中的权限查询
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listSecurityDatasourceUrls(listSecurityDatasourceUrlsRequest?: ListSecurityDatasourceUrlsRequest): Promise<ListSecurityDatasourceUrlsResponse> {
        const options = ParamCreater().listSecurityDatasourceUrls(listSecurityDatasourceUrlsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询权限集成员列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询权限集成员列表
     * @param {string} permissionSetId 权限集id
     * @param {string} workspace DataArts Studio工作空间ID
     * @param {number} [limit] limit
     * @param {number} [offset] offset
     * @param {string} [memberName] 成员名称
     * @param {'USER' | 'USER_GROUP' | 'WORKSPACE_ROLE'} [memberType] 成员类型,USER,USER_GROUP,WORKSPACE_ROLE
     * @param {boolean} [orderByAsc] 是否升序（仅指定排序参数时有效）
     * @param {'CREATE_TIME' | 'MEMBER_NAME'} [orderBy] 排序参数, CREATE_TIME, MEMBER_NAME
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listSecurityPermissionSetMembers(listSecurityPermissionSetMembersRequest?: ListSecurityPermissionSetMembersRequest): Promise<ListSecurityPermissionSetMembersResponse> {
        const options = ParamCreater().listSecurityPermissionSetMembers(listSecurityPermissionSetMembersRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询权限集的权限列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询权限集的权限列表
     * @param {string} permissionSetId 权限集id
     * @param {string} workspace DataArts Studio工作空间ID
     * @param {number} [limit] limit
     * @param {number} [offset] offset
     * @param {'DENY' | 'ALLOW'} [permissionType] 权限类型,DENY,ALLOW
     * @param {'ALL' | 'SELECT' | 'UPDATE' | 'CREATE' | 'DROP' | 'ALTER' | 'INDEX' | 'LOCK' | 'READ' | 'WRITE'} [permissionAction] 权限操作,ALL,SELECT,UPDATE,CREATE,DROP,ALTER,INDEX,LOCK,READ,WRITE
     * @param {string} [clusterId] 集群id
     * @param {string} [clusterName] 集群名称
     * @param {'HIVE'} [datasourceType] 数据源类型,HIVE
     * @param {string} [databaseName] 数据库名称
     * @param {string} [tableName] 表名称
     * @param {string} [columnName] 列名称
     * @param {'UNKNOWN' | 'NOT_SYNC' | 'SYNCING' | 'SYNC_SUCCESS' | 'SYNC_FAIL'} [syncStatus] 同步状态,UNKNOWN,NOT_SYNC,SYNCING,SYNC_SUCCESS,SYNC_FAIL
     * @param {'CLUSTER_NAME' | 'DATABASE_NAME'} [orderBy] 排序参数, CLUSTER_NAME, DATABASE_NAME
     * @param {boolean} [orderByAsc] 是否升序（仅指定排序参数时有效）
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listSecurityPermissionSetPermissions(listSecurityPermissionSetPermissionsRequest?: ListSecurityPermissionSetPermissionsRequest): Promise<ListSecurityPermissionSetPermissionsResponse> {
        const options = ParamCreater().listSecurityPermissionSetPermissions(listSecurityPermissionSetPermissionsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询权限集列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询权限集列表
     * @param {string} workspace DataArts Studio工作空间ID
     * @param {number} [limit] limit
     * @param {number} [offset] offset
     * @param {string} [name] 名称
     * @param {string} [parentId] 父权限集id
     * @param {'TOP_PERMISSION_SET' | 'SUB_PERMISSION_SET' | 'ALL_PERMISSION_SET'} [typeFilter] 权限集类型过滤,TOP_PERMISSION_SET,SUB_PERMISSION_SET,ALL_PERMISSION_SET
     * @param {string} [managerId] 管理员id
     * @param {string} [managerName] 管理员名称
     * @param {'USER' | 'USER_GROUP'} [managerType] 管理员类型,USER,USER_GROUP
     * @param {'HIVE'} [datasourceType] 数据源类型,HIVE
     * @param {'UNKNOWN' | 'NOT_SYNC' | 'SYNCING' | 'SYNC_SUCCESS' | 'SYNC_FAIL'} [syncStatus] 同步状态,UNKNOWN,NOT_SYNC,SYNCING,SYNC_SUCCESS,SYNC_FAIL
     * @param {'NAME' | 'CREATE_TIME' | 'UPDATE_TIME'} [orderBy] 排序参数, NAME,CREATE_TIME,UPDATE_TIME
     * @param {boolean} [orderByAsc] 是否升序（仅指定排序参数时有效）
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listSecurityPermissionSets(listSecurityPermissionSetsRequest?: ListSecurityPermissionSetsRequest): Promise<ListSecurityPermissionSetsResponse> {
        const options = ParamCreater().listSecurityPermissionSets(listSecurityPermissionSetsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询角色对一组库、表的权限交集
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询角色对一组库、表的权限交集
     * @param {string} workspace DataArts Studio工作空间ID
     * @param {RoleActionQueryDTO} listSecurityRoleActionsRequestBody 权限查询参数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listSecurityRoleActions(listSecurityRoleActionsRequest?: ListSecurityRoleActionsRequest): Promise<ListSecurityRoleActionsResponse> {
        const options = ParamCreater().listSecurityRoleActions(listSecurityRoleActionsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取密级
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取密级
     * @param {string} workspace DataArts Studio工作空间ID
     * @param {number} [offset] offset
     * @param {number} [limit] limit
     * @param {'createdAt' | 'createdBy' | 'updatedAt' | 'updatedBy' | 'name' | 'description'} [orderBy] 排序字段, createdAt, createdBy, updatedAt, updatedBy, name, description
     * @param {boolean} [desc] 排序规则
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listSecuritySecrecyLevels(listSecuritySecrecyLevelsRequest?: ListSecuritySecrecyLevelsRequest): Promise<ListSecuritySecrecyLevelsResponse> {
        const options = ParamCreater().listSecuritySecrecyLevels(listSecuritySecrecyLevelsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取主题层级
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取主题层级
     * @param {string} workspace DataArts Studio工作空间ID
     * @param {number} [limit] 查询条数，即查询Y条数据。默认值50，取值范围[1,100]
     * @param {number} [offset] 查询起始坐标，即跳过X条数据，仅支持0或limit的整数倍，不满足则向下取整。默认值0
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listSubjectLevels(listSubjectLevelsRequest?: ListSubjectLevelsRequest): Promise<ListSubjectLevelsResponse> {
        const options = ParamCreater().listSubjectLevels(listSubjectLevelsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询模型下所有关系
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询模型下所有关系
     * @param {string} workspace DataArts Studio工作空间ID
     * @param {string} modelId 依据workspace id查工作区
     * @param {string} [tableIds] 表模型ids
     * @param {'TABLE_MODEL' | 'FACT_LOGIC_TABLE'} [bizType] 表类型
     * @param {number} [limit] 查询条数，即查询Y条数据。默认值50，取值范围[1,100]
     * @param {number} [offset] 查询起始坐标，即跳过X条数据，仅支持0或limit的整数倍，不满足则向下取整。默认值0
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listTableModelRelations(listTableModelRelationsRequest?: ListTableModelRelationsRequest): Promise<ListTableModelRelationsResponse> {
        const options = ParamCreater().listTableModelRelations(listTableModelRelationsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 通过中英文名称、创建者、审核人、状态、修改时间分页查找模型实体信息，包含逻辑实体、表或属性。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查找模型实体列表
     * @param {string} workspace DataArts Studio工作空间ID
     * @param {string} modelId 所属的模型的id
     * @param {string} [name] 按名称或编码模糊查询
     * @param {string} [createBy] 按创建者查询
     * @param {string} [approver] 按审核人查询
     * @param {'DRAFT' | 'PUBLISH_DEVELOPING' | 'PUBLISHED' | 'OFFLINE_DEVELOPING' | 'OFFLINE' | 'REJECT'} [status] 业务状态
     * @param {'RUNNING' | 'NO_NEED' | 'SUMMARY_SUCCESS' | 'SUMMARY_FAILED'} [syncStatus] 
     * @param {Array<'BUSINESS_ASSET' | 'DATA_QUALITY' | 'TECHNICAL_ASSET' | 'META_DATA_LINK' | 'PHYSICAL_TABLE' | 'DLF_TASK' | 'MATERIALIZATION'>} [syncKey] 
     * @param {string} [beginTime] 时间过滤左边界,与end_time一起使用,只支持时间范围过滤,单边过滤无效
     * @param {string} [endTime] 时间过滤右边界,与begin_time一起使用只支持时间范围过滤,单边过滤无效
     * @param {number} [limit] 查询条数，即查询Y条数据。默认值50，取值范围[1,100]
     * @param {number} [offset] 查询起始坐标，即跳过X条数据，仅支持0或limit的整数倍，不满足则向下取整。默认值0
     * @param {string} [bizCatalogId] 所属的业务分层的id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listTableModels(listTableModelsRequest?: ListTableModelsRequest): Promise<ListTableModelsResponse> {
        const options = ParamCreater().listTableModels(listTableModelsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取工作空间用户角色
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取工作空间用户角色
     * @param {string} [instanceId] 实例id
     * @param {string} [workspaceId] 工作空间id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listWorkspaceRoles(listWorkspaceRolesRequest?: ListWorkspaceRolesRequest): Promise<ListWorkspaceRolesResponse> {
        const options = ParamCreater().listWorkspaceRoles(listWorkspaceRolesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取模型
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取模型
     * @param {string} workspace DataArts Studio工作空间ID
     * @param {'THIRD_NF' | 'DIMENSION'} [workspaceType] 
     * @param {number} [limit] 查询条数，即查询Y条数据。默认值50，取值范围[1,100]
     * @param {number} [offset] 查询起始坐标，即跳过X条数据，仅支持0或limit的整数倍，不满足则向下取整。默认值0
     * @param {string} [dwType] 数据连接类型
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listWorkspaces(listWorkspacesRequest?: ListWorkspacesRequest): Promise<ListWorkspacesResponse> {
        const options = ParamCreater().listWorkspaces(listWorkspacesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取工作空间用户信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取工作空间用户信息
     * @param {string} workspaceId 工作空间id
     * @param {string} [limit] 数据条数限制
     * @param {string} [offset] 偏移量
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listWorkspaceusers(listWorkspaceusersRequest?: ListWorkspaceusersRequest): Promise<ListWorkspaceusersResponse> {
        const options = ParamCreater().listWorkspaceusers(listWorkspaceusersRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量移动api至新目录
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量移动api至新目录
     * @param {string} workspace 工作空间id
     * @param {string} contentType 资源类型
     * @param {ApiMoveParaDTO} apiMoveParaDTO 移动目录相关参数
     * @param {'SHARED' | 'EXCLUSIVE'} [dlmType] dlm版本类型
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public migrateApi(migrateApiRequest?: MigrateApiRequest): Promise<MigrateApiResponse> {
        const options = ParamCreater().migrateApi(migrateApiRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 移动当前目录至新目录
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 移动当前目录至新目录
     * @param {string} workspace 工作空间id
     * @param {string} contentType 资源类型
     * @param {string} catalogId 目录编号
     * @param {CatalogMoveParaDTO} catalogMoveParaDTO 移动目录相关参数
     * @param {'SHARED' | 'EXCLUSIVE'} [dlmType] dlm版本类型
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public migrateCatalog(migrateCatalogRequest?: MigrateCatalogRequest): Promise<MigrateCatalogResponse> {
        const options = ParamCreater().migrateCatalog(migrateCatalogRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改自定义项
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改自定义项
     * @param {string} workspace DataArts Studio工作空间ID
     * @param {CustomizedFieldsVOList} fields 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public modifyCustomizedFields(modifyCustomizedFieldsRequest?: ModifyCustomizedFieldsRequest): Promise<ModifyCustomizedFieldsResponse> {
        const options = ParamCreater().modifyCustomizedFields(modifyCustomizedFieldsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 用户行为分析
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 用户行为分析
     * @param {string} instance 实例id
     * @param {BehaviorRestBody} behaviors 行为体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public parseUserBehavior(parseUserBehaviorRequest?: ParseUserBehaviorRequest): Promise<ParseUserBehaviorResponse> {
        const options = ParamCreater().parseUserBehavior(parseUserBehaviorRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * DataArtsStudio实例一键购买接口
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary DataArtsStudio实例一键购买接口
     * @param {OrderReq} oneKeyOrderRequest 请求参数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public payForDgcOneKey(payForDgcOneKeyRequest?: PayForDgcOneKeyRequest): Promise<PayForDgcOneKeyResponse> {
        const options = ParamCreater().payForDgcOneKey(payForDgcOneKeyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 指定字段采集概要信息接口
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 指定字段采集概要
     * @param {string} workspace 工作空间ID，获取方法请参见[实例ID和工作空间ID](dataartsstudio_02_0350.xml)
     * @param {DataProfileRO} renewDataProfileRequestBody 更新概要信息请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public renewDataProfile(renewDataProfileRequest?: RenewDataProfileRequest): Promise<RenewDataProfileResponse> {
        const options = ParamCreater().renewDataProfile(renewDataProfileRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 关联属性与数据标准
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 关联属性与数据标准
     * @param {string} workspace DataArts Studio工作空间ID
     * @param {LinkAttributeAndElementVO} ids 属性ID列表{\&#39;id1\&#39;,\&#39;id2\&#39;}
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public resetLinkAttributeAndStandard(resetLinkAttributeAndStandardRequest?: ResetLinkAttributeAndStandardRequest): Promise<ResetLinkAttributeAndStandardResponse> {
        const options = ParamCreater().resetLinkAttributeAndStandard(resetLinkAttributeAndStandardRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 撤回审批单
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 撤回审批单
     * @param {string} workspace DataArts Studio工作空间ID
     * @param {string} ids 审批单id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public rollbackApproval(rollbackApprovalRequest?: RollbackApprovalRequest): Promise<RollbackApprovalResponse> {
        const options = ParamCreater().rollbackApproval(rollbackApprovalRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取审批单
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取审批单
     * @param {string} workspace DataArts Studio工作空间ID
     * @param {number} [bizId] 业务定义id
     * @param {string} [name] 按名称或编码模糊查询
     * @param {string} [createBy] 按创建者查询
     * @param {string} [approver] 按审核人查询
     * @param {'DEVELOPING' | 'FINISHED'} [approvalStatus] 查询待审批，已审批
     * @param {'DEVELOPING' | 'APPROVED' | 'REJECT'} [approvalStatusDetail] 查询待审批，已审批
     * @param {'PUBLISH' | 'OFFLINE'} [approvalType] 业务审核类型
     * @param {string} [bizType] 按业务类型查询
     * @param {string} [beginTime] 时间过滤左边界,与end_time一起使用,只支持时间范围过滤,单边过滤无效
     * @param {string} [endTime] 时间过滤右边界,与begin_time一起使用只支持时间范围过滤,单边过滤无效
     * @param {number} [limit] 查询条数，即查询Y条数据。默认值50，取值范围[1,100]
     * @param {number} [offset] 查询起始坐标，即跳过X条数据，仅支持0或limit的整数倍，不满足则向下取整。默认值0
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public searchApprovals(searchApprovalsRequest?: SearchApprovalsRequest): Promise<SearchApprovalsResponse> {
        const options = ParamCreater().searchApprovals(searchApprovalsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 通过中英文名称、创建者、审核人、状态、修改时间分页查找原子指标信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查找原子指标
     * @param {string} workspace DataArts Studio工作空间ID
     * @param {string} [name] 按名称或编码模糊查询
     * @param {string} [createBy] 按创建者查询
     * @param {string} [approver] 按审核人查询
     * @param {'DRAFT' | 'PUBLISH_DEVELOPING' | 'PUBLISHED' | 'OFFLINE_DEVELOPING' | 'OFFLINE' | 'REJECT'} [status] 业务状态
     * @param {string} [beginTime] 时间过滤左边界,与end_time一起使用,只支持时间范围过滤,单边过滤无效
     * @param {string} [endTime] 时间过滤右边界,与begin_time一起使用只支持时间范围过滤,单边过滤无效
     * @param {number} [l3Id] 业务对象l3 id
     * @param {number} [tableId] 关联表id
     * @param {number} [limit] 查询条数，即查询Y条数据。默认值50，取值范围[1,100]
     * @param {number} [offset] 查询起始坐标，即跳过X条数据，仅支持0或limit的整数倍，不满足则向下取整。默认值0
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public searchAtomicIndexes(searchAtomicIndexesRequest?: SearchAtomicIndexesRequest): Promise<SearchAtomicIndexesResponse> {
        const options = ParamCreater().searchAtomicIndexes(searchAtomicIndexesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询API已授权的APP
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询API已授权的APP
     * @param {string} workspace 工作空间id
     * @param {string} contentType 资源类型
     * @param {string} apiId api编号
     * @param {'SHARED' | 'EXCLUSIVE'} [dlmType] dlm版本类型
     * @param {number} [offset] 查询起始坐标, 即跳过前X条数据。仅支持0或limit的整数倍，不满足则向下取整。
     * @param {number} [limit] 查询条数, 即查询Y条数据
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public searchAuthorizeApp(searchAuthorizeAppRequest?: SearchAuthorizeAppRequest): Promise<SearchAuthorizeAppResponse> {
        const options = ParamCreater().searchAuthorizeApp(searchAuthorizeAppRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询APP已拥有授权的API
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询APP已拥有授权的API
     * @param {string} workspace 工作空间id
     * @param {string} contentType 资源类型
     * @param {string} appId app编号
     * @param {'SHARED' | 'EXCLUSIVE'} [dlmType] dlm版本类型
     * @param {number} [offset] 查询起始坐标, 即跳过前X条数据。仅支持0或limit的整数倍，不满足则向下取整
     * @param {number} [limit] 查询条数, 即查询Y条数据
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public searchBindApi(searchBindApiRequest?: SearchBindApiRequest): Promise<SearchBindApiResponse> {
        const options = ParamCreater().searchBindApi(searchBindApiRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询流程架构列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询流程架构列表
     * @param {string} workspace DataArts Studio工作空间ID
     * @param {string} [name] 按名称或编码模糊查询
     * @param {string} [createBy] 按创建者查询
     * @param {string} [owner] 按负责人查询
     * @param {string} [beginTime] 时间过滤左边界,与end_time一起使用,只支持时间范围过滤,单边过滤无效
     * @param {string} [endTime] 时间过滤右边界,与begin_time一起使用只支持时间范围过滤,单边过滤无效
     * @param {number} [limit] 查询条数，即查询Y条数据。默认值50，取值范围[1,100]
     * @param {number} [offset] 查询起始坐标，即跳过X条数据，仅支持0或limit的整数倍，不满足则向下取整。默认值0
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public searchCatalogs(searchCatalogsRequest?: SearchCatalogsRequest): Promise<SearchCatalogsResponse> {
        const options = ParamCreater().searchCatalogs(searchCatalogsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查看码表字段值
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查看码表字段值
     * @param {string} workspace DataArts Studio工作空间ID
     * @param {string} id 实体id
     * @param {number} [limit] 查询条数，即查询Y条数据。默认值50，取值范围[1,100]
     * @param {number} [offset] 查询起始坐标，即跳过X条数据，仅支持0或limit的整数倍，不满足则向下取整。默认值0
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public searchCodeTableValues(searchCodeTableValuesRequest?: SearchCodeTableValuesRequest): Promise<SearchCodeTableValuesResponse> {
        const options = ParamCreater().searchCodeTableValues(searchCodeTableValuesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询码表列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询码表列表
     * @param {string} workspace DataArts Studio工作空间ID
     * @param {string} [name] 按名称或编码模糊查询
     * @param {string} [createBy] 按创建者查询
     * @param {string} [approver] 按审核人查询
     * @param {number} [directoryId] 目录ID
     * @param {'DRAFT' | 'PUBLISH_DEVELOPING' | 'PUBLISHED' | 'OFFLINE_DEVELOPING' | 'OFFLINE' | 'REJECT'} [status] 业务状态
     * @param {string} [beginTime] 时间过滤左边界,与end_time一起使用,只支持时间范围过滤,单边过滤无效
     * @param {string} [endTime] 时间过滤右边界,与begin_time一起使用只支持时间范围过滤,单边过滤无效
     * @param {number} [limit] 查询条数，即查询Y条数据。默认值50，取值范围[1,100]
     * @param {number} [offset] 查询起始坐标，即跳过X条数据，仅支持0或limit的整数倍，不满足则向下取整。默认值0
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public searchCodeTables(searchCodeTablesRequest?: SearchCodeTablesRequest): Promise<SearchCodeTablesResponse> {
        const options = ParamCreater().searchCodeTables(searchCodeTablesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询自定义项
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询自定义项
     * @param {string} workspace DataArts Studio工作空间ID
     * @param {'TABLE' | 'ATTRIBUTE' | 'SUBJECT'} type 
     * @param {number} [limit] 查询条数，即查询Y条数据。默认值50，取值范围[1,100]
     * @param {number} [offset] 查询起始坐标，即跳过X条数据，仅支持0或limit的整数倍，不满足则向下取整。默认值0
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public searchCustomizedFields(searchCustomizedFieldsRequest?: SearchCustomizedFieldsRequest): Promise<SearchCustomizedFieldsResponse> {
        const options = ParamCreater().searchCustomizedFields(searchCustomizedFieldsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取指定类型下的数据连接信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取数据连接信息
     * @param {string} workspace DataArts Studio工作空间ID
     * @param {string} dwType 数据连接类型
     * @param {boolean} [forceRefresh] 是否查询最新的
     * @param {number} [limit] limit
     * @param {number} [offset] limit
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public searchDwByType(searchDwByTypeRequest?: SearchDwByTypeRequest): Promise<SearchDwByTypeResponse> {
        const options = ParamCreater().searchDwByType(searchDwByTypeRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 通过路径获取id
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 通过路径获取id
     * @param {string} workspace 工作空间id
     * @param {string} contentType 资源类型
     * @param {string} path 路径
     * @param {'SHARED' | 'EXCLUSIVE'} [dlmType] dlm版本类型
     * @param {number} [limit] limit
     * @param {number} [offset] offset
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public searchIdByPath(searchIdByPathRequest?: SearchIdByPathRequest): Promise<SearchIdByPathResponse> {
        const options = ParamCreater().searchIdByPath(searchIdByPathRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 通过名称、创建者、责任人、状态、修改时间分页查找主题
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查找主题列表
     * @param {string} workspace DataArts Studio工作空间ID
     * @param {string} [name] 按名称或编码模糊查询
     * @param {string} [createBy] 按创建者查询
     * @param {string} [owner] 按负责人查询
     * @param {'DRAFT' | 'PUBLISH_DEVELOPING' | 'PUBLISHED' | 'OFFLINE_DEVELOPING' | 'OFFLINE' | 'REJECT'} [status] 业务状态
     * @param {string} [beginTime] 时间过滤左边界,与end_time一起使用,只支持时间范围过滤,单边过滤无效
     * @param {string} [endTime] 时间过滤右边界,与begin_time一起使用只支持时间范围过滤,单边过滤无效
     * @param {number} [limit] 查询条数，即查询Y条数据。默认值50，取值范围[1,100]
     * @param {number} [offset] 查询起始坐标，即跳过X条数据，仅支持0或limit的整数倍，不满足则向下取整。默认值0
     * @param {number} [parentId] 父目录ID，根节点没有此ID，空值为所有，-1为根节点下节点
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public searchSubject(searchSubjectRequest?: SearchSubjectRequest): Promise<SearchSubjectResponse> {
        const options = ParamCreater().searchSubject(searchSubjectRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查找主题(新)
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查找主题列表(新)
     * @param {string} workspace DataArts Studio工作空间ID
     * @param {string} [name] 按名称或编码模糊查询
     * @param {string} [createBy] 按创建者查询
     * @param {string} [owner] 按负责人查询
     * @param {'DRAFT' | 'PUBLISH_DEVELOPING' | 'PUBLISHED' | 'OFFLINE_DEVELOPING' | 'OFFLINE' | 'REJECT'} [status] 业务状态
     * @param {string} [beginTime] 时间过滤左边界,与end_time一起使用,只支持时间范围过滤,单边过滤无效
     * @param {string} [endTime] 时间过滤右边界,与begin_time一起使用只支持时间范围过滤,单边过滤无效
     * @param {number} [limit] 查询条数，即查询Y条数据。默认值50，取值范围[1,100]
     * @param {number} [offset] 查询起始坐标，即跳过X条数据，仅支持0或limit的整数倍，不满足则向下取整。默认值0
     * @param {number} [parentId] 父目录ID，根节点没有此ID，空值为所有，-1为根节点下节点
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public searchSubjectNew(searchSubjectNewRequest?: SearchSubjectNewRequest): Promise<SearchSubjectNewResponse> {
        const options = ParamCreater().searchSubjectNew(searchSubjectNewRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 通过名称、创建者、修改时间查找版本信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查找版本信息
     * @param {string} workspace DataArts Studio工作空间ID
     * @param {string} [name] 按名称或编码模糊查询
     * @param {string} [createBy] 按创建者查询
     * @param {number} [bizId] 业务定义id
     * @param {string} [bizType] 按业务类型查询
     * @param {string} [beginTime] 时间过滤左边界,与end_time一起使用,只支持时间范围过滤,单边过滤无效
     * @param {string} [endTime] 时间过滤右边界,与begin_time一起使用只支持时间范围过滤,单边过滤无效
     * @param {number} [limit] 查询条数，即查询Y条数据。默认值50，取值范围[1,100]
     * @param {number} [offset] 查询起始坐标，即跳过X条数据，仅支持0或limit的整数倍，不满足则向下取整。默认值0
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public searchVersions(searchVersionsRequest?: SearchVersionsRequest): Promise<SearchVersionsResponse> {
        const options = ParamCreater().searchVersions(searchVersionsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 设置作业标签
     * @param {string} jobName 作业名称.
     * @param {SetJobTagsRequestBody} body 请求body体
     * @param {string} [workspace] 工作空间id
     * @param {string} [contentType] 有Body体的情况下必选，无Body体的情况下则无需填写和校验
     * @param {string} [authorization] 使用AK/SK进行认证时该字段必选
     * @param {string} [host] 使用AK/SK进行认证时该字段必选
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public setFactoryJobTags(setFactoryJobTagsRequest?: SetFactoryJobTagsRequest): Promise<SetFactoryJobTagsResponse> {
        const options = ParamCreater().setFactoryJobTags(setFactoryJobTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 通过id查看汇总表的详情信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查看汇总表详情
     * @param {string} workspace DataArts Studio工作空间ID
     * @param {string} id 实体id
     * @param {boolean} [latest] 是否查询最新的
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showAggregationLogicTableById(showAggregationLogicTableByIdRequest?: ShowAggregationLogicTableByIdRequest): Promise<ShowAggregationLogicTableByIdResponse> {
        const options = ParamCreater().showAggregationLogicTableById(showAggregationLogicTableByIdRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定api 仪表板数据详情
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询指定api 仪表板数据详情
     * @param {string} workspace 工作空间id
     * @param {string} contentType 资源类型
     * @param {string} apiId api编号
     * @param {number} startTime 开始时间（13位时间戳）
     * @param {number} endTime 结束时间（13位时间戳）
     * @param {'HOUR' | 'DAY'} timeUnit 时间单位
     * @param {'SHARED' | 'EXCLUSIVE'} [dlmType] dlm版本类型
     * @param {string} [instanceId] 集群编号
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showApiDashboard(showApiDashboardRequest?: ShowApiDashboardRequest): Promise<ShowApiDashboardResponse> {
        const options = ParamCreater().showApiDashboard(showApiDashboardRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询api 仪表板数据详情
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询api 仪表板数据详情
     * @param {string} workspace 工作空间id
     * @param {string} contentType 资源类型
     * @param {number} startTime 开始时间（13位时间戳）
     * @param {number} endTime 结束时间（13位时间戳）
     * @param {'HOUR' | 'DAY'} timeUnit 时间单位
     * @param {'SHARED' | 'EXCLUSIVE'} [dlmType] dlm版本类型
     * @param {string} [instanceId] 集群编号
     * @param {number} [limit] limit
     * @param {number} [offset] offset
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showApisDashboard(showApisDashboardRequest?: ShowApisDashboardRequest): Promise<ShowApisDashboardResponse> {
        const options = ParamCreater().showApisDashboard(showApisDashboardRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询api 统计数据详情
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询api 统计数据详情
     * @param {string} workspace 工作空间id
     * @param {string} contentType 资源类型
     * @param {string} apiId api编号
     * @param {number} startTime 开始时间（13位时间戳）
     * @param {number} endTime 结束时间（13位时间戳）
     * @param {'HOUR' | 'DAY'} timeUnit 时间单位
     * @param {'SHARED' | 'EXCLUSIVE'} [dlmType] dlm版本类型
     * @param {string} [instanceId] 集群编号
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showApisDetail(showApisDetailRequest?: ShowApisDetailRequest): Promise<ShowApisDetailResponse> {
        const options = ParamCreater().showApisDetail(showApisDetailRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询统计用户相关的总览开发指标
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询统计用户相关的总览开发指标
     * @param {string} workspace 工作空间id
     * @param {string} contentType 资源类型
     * @param {number} startTime 开始时间（13位时间戳）
     * @param {number} endTime 结束时间（13位时间戳）
     * @param {'HOUR' | 'DAY'} timeUnit 时间单位
     * @param {'SHARED' | 'EXCLUSIVE'} [dlmType] dlm版本类型
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showApisOverview(showApisOverviewRequest?: ShowApisOverviewRequest): Promise<ShowApisOverviewResponse> {
        const options = ParamCreater().showApisOverview(showApisOverviewRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询应用详情
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询应用详情
     * @param {string} workspace 工作空间id
     * @param {string} contentType 资源类型
     * @param {string} appId 应用编号
     * @param {'SHARED' | 'EXCLUSIVE'} [dlmType] dlm版本类型
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showAppInfo(showAppInfoRequest?: ShowAppInfoRequest): Promise<ShowAppInfoResponse> {
        const options = ParamCreater().showAppInfo(showAppInfoRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取申请详情
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取申请详情
     * @param {string} workspace 工作空间id
     * @param {string} contentType 资源类型
     * @param {string} applyId 审核信息id
     * @param {'SHARED' | 'EXCLUSIVE'} [dlmType] dlm版本类型
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showApplyDetail(showApplyDetailRequest?: ShowApplyDetailRequest): Promise<ShowApplyDetailResponse> {
        const options = ParamCreater().showApplyDetail(showApplyDetailRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询app 仪表板数据详情
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询app 仪表板数据详情
     * @param {string} workspace 工作空间id
     * @param {string} contentType 资源类型
     * @param {number} startTime 开始时间（13位时间戳）
     * @param {number} endTime 结束时间（13位时间戳）
     * @param {'HOUR' | 'DAY'} timeUnit 时间单位
     * @param {'SHARED' | 'EXCLUSIVE'} [dlmType] dlm版本类型
     * @param {number} [limit] limit
     * @param {number} [offset] offset
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showAppsDashboard(showAppsDashboardRequest?: ShowAppsDashboardRequest): Promise<ShowAppsDashboardResponse> {
        const options = ParamCreater().showAppsDashboard(showAppsDashboardRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询app 统计数据详情
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询app 统计数据详情
     * @param {string} workspace 工作空间id
     * @param {string} contentType 资源类型
     * @param {string} appId app编号
     * @param {number} startTime 开始时间（13位时间戳）
     * @param {number} endTime 结束时间（13位时间戳）
     * @param {'HOUR' | 'DAY'} timeUnit 时间单位
     * @param {'SHARED' | 'EXCLUSIVE'} [dlmType] dlm版本类型
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showAppsDetail(showAppsDetailRequest?: ShowAppsDetailRequest): Promise<ShowAppsDetailResponse> {
        const options = ParamCreater().showAppsDetail(showAppsDetailRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询统计用户相关的总览调用指标
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询统计用户相关的总览调用指标
     * @param {string} workspace 工作空间id
     * @param {string} contentType 资源类型
     * @param {number} startTime 开始时间（13位时间戳）
     * @param {number} endTime 结束时间（13位时间戳）
     * @param {'HOUR' | 'DAY'} timeUnit 时间单位
     * @param {'SHARED' | 'EXCLUSIVE'} [dlmType] dlm版本类型
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showAppsOverview(showAppsOverviewRequest?: ShowAppsOverviewRequest): Promise<ShowAppsOverviewResponse> {
        const options = ParamCreater().showAppsOverview(showAppsOverviewRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 通过id获取指标详情信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查看原子指标详情
     * @param {string} workspace DataArts Studio工作空间ID
     * @param {string} id 实体id
     * @param {boolean} [latest] 是否查询最新的
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showAtomicIndexById(showAtomicIndexByIdRequest?: ShowAtomicIndexByIdRequest): Promise<ShowAtomicIndexByIdResponse> {
        const options = ParamCreater().showAtomicIndexById(showAtomicIndexByIdRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查找流程架构详情
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查找流程架构详情
     * @param {string} workspace DataArts Studio工作空间ID
     * @param {string} id 实体id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showBizCatalogDetail(showBizCatalogDetailRequest?: ShowBizCatalogDetailRequest): Promise<ShowBizCatalogDetailResponse> {
        const options = ParamCreater().showBizCatalogDetail(showBizCatalogDetailRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 通过id查看指标的详情信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查看指标详情
     * @param {string} workspace DataArts Studio工作空间ID
     * @param {string} id 实体id
     * @param {boolean} [latest] 是否查询最新的
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showBizMetricById(showBizMetricByIdRequest?: ShowBizMetricByIdRequest): Promise<ShowBizMetricByIdResponse> {
        const options = ParamCreater().showBizMetricById(showBizMetricByIdRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 业务资产查询接口
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询业务资产
     * @param {string} workspace DataArts Studio工作空间ID
     * @param {BusinessAssetRequest} businessAssetsRequest 业务资产请求
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showBusinessAssets(showBusinessAssetsRequest?: ShowBusinessAssetsRequest): Promise<ShowBusinessAssetsResponse> {
        const options = ParamCreater().showBusinessAssets(showBusinessAssetsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取业务资产统计信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取业务资产统计信息
     * @param {string} workspace DataArts Studio工作空间ID
     * @param {number} [offset] 分页参数，查询偏移量，默认查询所有
     * @param {number} [limit] 分页参数，每页数量，默认查询所有
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showBusinessAssetsStatistic(showBusinessAssetsStatisticRequest?: ShowBusinessAssetsStatisticRequest): Promise<ShowBusinessAssetsStatisticResponse> {
        const options = ParamCreater().showBusinessAssetsStatistic(showBusinessAssetsStatisticRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 逐级查询业务资产目录树,包含数据规范同步过来的业务对象和逻辑实体。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询业务资产目录树
     * @param {string} workspace 工作空间ID，获取方法请参见[实例ID和工作空间ID](dataartsstudio_02_0350.xml)
     * @param {string} [guid] 资产guid，未填充时查询LV1级别业务资产,获取方法请参见[数据开发作业ID](dataartsstudio_02_0351.xml)
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showBusinessAssetsTree(showBusinessAssetsTreeRequest?: ShowBusinessAssetsTreeRequest): Promise<ShowBusinessAssetsTreeResponse> {
        const options = ParamCreater().showBusinessAssetsTree(showBusinessAssetsTreeRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询服务目录
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询服务目录
     * @param {string} workspace 工作空间id
     * @param {string} contentType 资源类型
     * @param {string} catalogId 目录编号
     * @param {'SHARED' | 'EXCLUSIVE'} [dlmType] dlm版本类型
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showCatalogDetail(showCatalogDetailRequest?: ShowCatalogDetailRequest): Promise<ShowCatalogDetailResponse> {
        const options = ParamCreater().showCatalogDetail(showCatalogDetailRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 通过id查看码表的详情信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查看码表详情
     * @param {string} workspace DataArts Studio工作空间ID
     * @param {string} id 实体id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showCodeTableById(showCodeTableByIdRequest?: ShowCodeTableByIdRequest): Promise<ShowCodeTableByIdResponse> {
        const options = ParamCreater().showCodeTableById(showCodeTableByIdRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 通过id获取复合指标详情信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查看复合指标详情
     * @param {string} workspace DataArts Studio工作空间ID
     * @param {string} id 实体id
     * @param {boolean} [latest] 是否查询最新的
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showCompoundMetricById(showCompoundMetricByIdRequest?: ShowCompoundMetricByIdRequest): Promise<ShowCompoundMetricByIdResponse> {
        const options = ParamCreater().showCompoundMetricById(showCompoundMetricByIdRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 通过id查看限定详情信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查看限定详情
     * @param {string} workspace DataArts Studio工作空间ID
     * @param {string} id 实体id
     * @param {boolean} [latest] 是否查询最新的
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showConditionById(showConditionByIdRequest?: ShowConditionByIdRequest): Promise<ShowConditionByIdResponse> {
        const options = ParamCreater().showConditionById(showConditionByIdRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取对账作业详情
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取对账作业详情
     * @param {string} id 对账作业ID
     * @param {string} workspace DataArts Studio工作空间ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showConsistencyTaskDetail(showConsistencyTaskDetailRequest?: ShowConsistencyTaskDetailRequest): Promise<ShowConsistencyTaskDetailResponse> {
        const options = ParamCreater().showConsistencyTaskDetail(showConsistencyTaskDetailRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 资产详情接口，该接口功能处于邀测阶段，后续将随功能公测将逐步开放。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 资产详情(邀测)
     * @param {string} instance 实例id
     * @param {string} guid 资产guid
     * @param {boolean} [ignoreRelationships] 是否忽略关联资产 缺省值：false
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showDataDetail(showDataDetailRequest?: ShowDataDetailRequest): Promise<ShowDataDetailResponse> {
        const options = ParamCreater().showDataDetail(showDataDetailRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询概要
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 资产信息
     * @param {string} workspace DataArts Studio工作空间ID
     * @param {string} dwId 数据连接ID
     * @param {string} dbType 数据库类型
     * @param {string} databaseName 数据库名称
     * @param {string} tableName 表名
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showDataProfile(showDataProfileRequest?: ShowDataProfileRequest): Promise<ShowDataProfileResponse> {
        const options = ParamCreater().showDataProfile(showDataProfileRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 资产搜索
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 资产搜索
     * @param {string} instance 实例id
     * @param {SearchParameter} searchParameter 资产搜索条件
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showDataSets(showDataSetsRequest?: ShowDataSetsRequest): Promise<ShowDataSetsResponse> {
        const options = ParamCreater().showDataSets(showDataSetsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询单个数据连接信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询单个数据连接信息
     * @param {string} workspace 工作空间id
     * @param {string} dataConnectionId 数据连接ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showDataconnection(showDataconnectionRequest?: ShowDataconnectionRequest): Promise<ShowDataconnectionResponse> {
        const options = ParamCreater().showDataconnection(showDataconnectionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 资产血缘接口，该接口功能处于邀测阶段，后续将随功能公测将逐步开放。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 资产血缘(邀测)
     * @param {string} instance 实例id
     * @param {string} guid 资产guid
     * @param {string} [direction] 血缘查询方向，默认值:BOTH。枚举值[IN OUT BOTH]
     * @param {Array<string>} [relationshipTypes] 关联关系类型列表，默认空
     * @param {Array<string>} [relationshipTypeCategories] 关联关系类型类别，默认空。血缘查询使用DATA_FLOW
     * @param {Array<string>} [relatedEntityTypes] 关联实体类型，默认空
     * @param {boolean} [extendProcessDataFlow] 是否扩展数据，默认false
     * @param {boolean} [includeParentEntity] 是否包含父类实体，默认false
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showDatamapLineage(showDatamapLineageRequest?: ShowDatamapLineageRequest): Promise<ShowDatamapLineageResponse> {
        const options = ParamCreater().showDatamapLineage(showDatamapLineageRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 通过id获取衍生详情信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查看衍生指标详情
     * @param {string} workspace DataArts Studio工作空间ID
     * @param {string} id 实体id
     * @param {boolean} [latest] 是否查询最新的
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showDerivativeIndexById(showDerivativeIndexByIdRequest?: ShowDerivativeIndexByIdRequest): Promise<ShowDerivativeIndexByIdResponse> {
        const options = ParamCreater().showDerivativeIndexById(showDerivativeIndexByIdRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 通过id查看维度详情信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查看维度详情
     * @param {string} workspace DataArts Studio工作空间ID
     * @param {string} id 实体id
     * @param {boolean} [latest] 是否查询最新的
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showDimensionById(showDimensionByIdRequest?: ShowDimensionByIdRequest): Promise<ShowDimensionByIdResponse> {
        const options = ParamCreater().showDimensionById(showDimensionByIdRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 通过id查看维度表的详情信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查看维度表详情
     * @param {string} workspace DataArts Studio工作空间ID
     * @param {string} id 实体id
     * @param {boolean} [latest] 是否查询最新的
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showDimensionLogicTableById(showDimensionLogicTableByIdRequest?: ShowDimensionLogicTableByIdRequest): Promise<ShowDimensionLogicTableByIdResponse> {
        const options = ParamCreater().showDimensionLogicTableById(showDimensionLogicTableByIdRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询技术资产
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询技术资产
     * @param {string} workspace DataArts Studio工作空间ID
     * @param {OpenEntitySearchRequest} openEntitySearchRequest 技术资产搜索请求
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showEntities(showEntitiesRequest?: ShowEntitiesRequest): Promise<ShowEntitiesResponse> {
        const options = ParamCreater().showEntities(showEntitiesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据表guid可以获取表的详情信息，表的详情信息包含column的信息，也可以根据column的guid直接获取column的信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 根据guid获取资产详情
     * @param {string} workspace DataArts Studio工作空间ID
     * @param {string} guid 资产的guid
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showEntityInfoByGuid(showEntityInfoByGuidRequest?: ShowEntityInfoByGuidRequest): Promise<ShowEntityInfoByGuidResponse> {
        const options = ParamCreater().showEntityInfoByGuid(showEntityInfoByGuidRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 通过id查看事实表的详情信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查看事实表详情
     * @param {string} workspace DataArts Studio工作空间ID
     * @param {string} id 实体id
     * @param {boolean} [latest] 是否查询最新的
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showFactLogicTableById(showFactLogicTableByIdRequest?: ShowFactLogicTableByIdRequest): Promise<ShowFactLogicTableByIdResponse> {
        const options = ParamCreater().showFactLogicTableById(showFactLogicTableByIdRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询环境变量信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询环境变量信息
     * @param {string} [workspace] 工作空间ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showFactoryEnv(showFactoryEnvRequest?: ShowFactoryEnvRequest): Promise<ShowFactoryEnvResponse> {
        const options = ParamCreater().showFactoryEnv(showFactoryEnvRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定发布包详情
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询指定发布包详情
     * @param {string} packageId 发布包ID
     * @param {string} [workspace] 工作空间ID，默认查询default
     * @param {string} [contentType] 有Body体的情况下必须，无Body体的情况下则无需填写和校验，默认值：application/json
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showFactoryPackageDetail(showFactoryPackageDetailRequest?: ShowFactoryPackageDetailRequest): Promise<ShowFactoryPackageDetailResponse> {
        const options = ParamCreater().showFactoryPackageDetail(showFactoryPackageDetailRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-request-id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询补数据实例
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询补数据实例
     * @param {string} [workspace] 工作空间ID
     * @param {string} [sort] 排序字段:desc：创建时间按照降序展示asc ：创建时间按照升序展示默认值：desc
     * @param {string} [page] 分页列表的起始页，默认值为0。取值范围大于等于0。
     * @param {string} [size] 分页返回结果，指定每页最大记录数。默认值：10
     * @param {string} [name] 补数据名称
     * @param {string} [userName] 用户名
     * @param {string} [status] 实例状态：SUCCESS：成功RUNNING ：运行中CANCLE：取消
     * @param {string} [startDate] 查询作业的开始日期 13位时间戳
     * @param {string} [endDate] 查询作业的结束日期 13位时间戳
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showFactorySupplementData(showFactorySupplementDataRequest?: ShowFactorySupplementDataRequest): Promise<ShowFactorySupplementDataResponse> {
        const options = ParamCreater().showFactorySupplementData(showFactorySupplementDataRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-request-id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询标签列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询标签列表
     * @param {string} workspace DataArts Studio工作空间ID
     * @param {string} [type] 标签类型 缺省值：all
     * @param {string} [name] 标签名
     * @param {string} [createUser] 标签创建用户
     * @param {string} [start] 开始时间
     * @param {string} [end] 结束时间
     * @param {string} [limit] 分页参数:每页限定数量 缺省值：10
     * @param {string} [offset] 分页参数：页数 缺省值：0
     * @param {string} [sortBy] 排序字段 默认为createTime 缺省值：createTime
     * @param {string} [sortOrder] 排序方式 默认排序字段为降序 缺省值：desc
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showGlossaryList(showGlossaryListRequest?: ShowGlossaryListRequest): Promise<ShowGlossaryListResponse> {
        const options = ParamCreater().showGlossaryList(showGlossaryListRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询表相关的作业算子运行实例信息，该接口功能处于邀测阶段，后续将随功能公测将逐步开放。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 产出信息(邀测)
     * @param {string} instance 实例id
     * @param {string} taskId 作业算子id
     * @param {string} jobName 作业算子名称
     * @param {number} startTime 搜索参数时间范围的开始时间，例：1705248000000
     * @param {number} endTime 搜索参数时间范围的结束时间,例：1705311669796
     * @param {number} offset 分页参数偏移量
     * @param {number} limit 分页参每页数量
     * @param {string} [workspaceId] 空间id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showInstanceInfos(showInstanceInfosRequest?: ShowInstanceInfosRequest): Promise<ShowInstanceInfosResponse> {
        const options = ParamCreater().showInstanceInfos(showInstanceInfosRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取任务日志
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取任务日志
     * @param {string} workspace DataArts Studio工作空间ID
     * @param {string} taskId 例ID
     * @param {string} instanceId 事例ID
     * @param {JobLogRequest} jobLogRequest 请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showInstanceLog(showInstanceLogRequest?: ShowInstanceLogRequest): Promise<ShowInstanceLogResponse> {
        const options = ParamCreater().showInstanceLog(showInstanceLogRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取实例结果
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取实例结果
     * @param {string} instanceId projectId
     * @param {string} workspace DataArts Studio工作空间ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showInstanceResult(showInstanceResultRequest?: ShowInstanceResultRequest): Promise<ShowInstanceResultResponse> {
        const options = ParamCreater().showInstanceResult(showInstanceResultRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 血缘查询
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 血缘查询
     * @param {string} workspace DataArts Studio工作空间ID
     * @param {string} guid 资产guid
     * @param {string} [direction] 查询方向，取值范围：BOTH、IN、OUT。默认BOTH
     * @param {number} [depth] 血缘链路长度，默认值5
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showLineage(showLineageRequest?: ShowLineageRequest): Promise<ShowLineageResponse> {
        const options = ParamCreater().showLineage(showLineageRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量血缘接口，根据作业算子分页批量查询血缘。该接口功能处于邀测阶段，后续将随功能公测将逐步开放。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量血缘(邀测)
     * @param {string} instance 实例id
     * @param {number} [offset] 分页参数偏移量，默认值0
     * @param {number} [limit] 分页参每页数量，默认值100
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showLineageBulk(showLineageBulkRequest?: ShowLineageBulkRequest): Promise<ShowLineageBulkResponse> {
        const options = ParamCreater().showLineageBulk(showLineageBulkRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取消息详情
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取消息详情
     * @param {string} workspace 工作空间id
     * @param {string} contentType 资源类型
     * @param {string} messageId 消息信息id
     * @param {'SHARED' | 'EXCLUSIVE'} [dlmType] dlm版本类型
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showMessageDetail(showMessageDetailRequest?: ShowMessageDetailRequest): Promise<ShowMessageDetailResponse> {
        const options = ParamCreater().showMessageDetail(showMessageDetailRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 指标资产查询接口
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询指标资产
     * @param {string} workspace DataArts Studio工作空间ID
     * @param {MetricOpenSearchParams} metricSearchParams 查询接口请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showMetricAssets(showMetricAssetsRequest?: ShowMetricAssetsRequest): Promise<ShowMetricAssetsResponse> {
        const options = ParamCreater().showMetricAssets(showMetricAssetsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指标资产目录树
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询指标资产目录树
     * @param {string} workspace DataArts Studio工作空间ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showMetricTree(showMetricTreeRequest?: ShowMetricTreeRequest): Promise<ShowMetricTreeResponse> {
        const options = ParamCreater().showMetricTree(showMetricTreeRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询表相关的作业算子列表，该接口功能处于邀测阶段，后续将随功能公测将逐步开放。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 表关联作业算子列表(邀测)
     * @param {string} instance 实例id
     * @param {string} guid 资产guid
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showNodes(showNodesRequest?: ShowNodesRequest): Promise<ShowNodesResponse> {
        const options = ParamCreater().showNodes(showNodesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 通过id获取路径
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 通过id获取路径
     * @param {string} workspace 工作空间id
     * @param {string} contentType 资源类型
     * @param {string} catalogId 目录编号
     * @param {'SHARED' | 'EXCLUSIVE'} [dlmType] dlm版本类型
     * @param {number} [limit] limit
     * @param {number} [offset] offset
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showPathById(showPathByIdRequest?: ShowPathByIdRequest): Promise<ShowPathByIdResponse> {
        const options = ParamCreater().showPathById(showPathByIdRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 通过id获取路径对象
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 通过id获取路径对象
     * @param {string} workspace 工作空间id
     * @param {string} contentType 资源类型
     * @param {string} catalogId 目录编号
     * @param {'SHARED' | 'EXCLUSIVE'} [dlmType] dlm版本类型
     * @param {number} [limit] limit
     * @param {number} [offset] offset
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showPathObjectById(showPathObjectByIdRequest?: ShowPathObjectByIdRequest): Promise<ShowPathObjectByIdResponse> {
        const options = ParamCreater().showPathObjectById(showPathObjectByIdRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取质量作业详情
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取质量作业详情
     * @param {string} id 质量作业ID
     * @param {string} workspace DataArts Studio工作空间ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showQualityTaskDetail(showQualityTaskDetailRequest?: ShowQualityTaskDetailRequest): Promise<ShowQualityTaskDetailResponse> {
        const options = ParamCreater().showQualityTaskDetail(showQualityTaskDetailRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 通过id获取关系详情信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查看关系详情
     * @param {string} workspace DataArts Studio工作空间ID
     * @param {string} id 实体id
     * @param {boolean} [latest] 是否查询最新的
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showRelationById(showRelationByIdRequest?: ShowRelationByIdRequest): Promise<ShowRelationByIdResponse> {
        const options = ParamCreater().showRelationById(showRelationByIdRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询特定识别规则
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询特定识别规则
     * @param {string} workspace DataArts Studio工作空间ID
     * @param {string} id 需要查询的规则ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showSecurityDataClassificationRule(showSecurityDataClassificationRuleRequest?: ShowSecurityDataClassificationRuleRequest): Promise<ShowSecurityDataClassificationRuleResponse> {
        const options = ParamCreater().showSecurityDataClassificationRule(showSecurityDataClassificationRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询规则组
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询规则组
     * @param {string} workspace DataArts Studio工作空间ID
     * @param {string} id 需要查询的规则组ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showSecurityDataClassificationRuleGroup(showSecurityDataClassificationRuleGroupRequest?: ShowSecurityDataClassificationRuleGroupRequest): Promise<ShowSecurityDataClassificationRuleGroupResponse> {
        const options = ParamCreater().showSecurityDataClassificationRuleGroup(showSecurityDataClassificationRuleGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询权限集
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询权限集
     * @param {string} permissionSetId 权限集id
     * @param {string} workspace DataArts Studio工作空间ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showSecurityPermissionSet(showSecurityPermissionSetRequest?: ShowSecurityPermissionSetRequest): Promise<ShowSecurityPermissionSetResponse> {
        const options = ParamCreater().showSecurityPermissionSet(showSecurityPermissionSetRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据指定的id查询密级
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 根据指定的id查询密级
     * @param {string} workspace DataArts Studio工作空间ID
     * @param {string} id 密级id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showSecuritySecrecyLevel(showSecuritySecrecyLevelRequest?: ShowSecuritySecrecyLevelRequest): Promise<ShowSecuritySecrecyLevelResponse> {
        const options = ParamCreater().showSecuritySecrecyLevel(showSecuritySecrecyLevelRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 通过id获取数据标准详情信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查看数据标准详情
     * @param {string} workspace DataArts Studio工作空间ID
     * @param {string} id 实体id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showStandardById(showStandardByIdRequest?: ShowStandardByIdRequest): Promise<ShowStandardByIdResponse> {
        const options = ParamCreater().showStandardById(showStandardByIdRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询数据标准模板
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询数据标准模板
     * @param {string} workspace DataArts Studio工作空间ID
     * @param {number} [limit] 查询条数，即查询Y条数据。默认值50，取值范围[1,100]
     * @param {number} [offset] 查询起始坐标，即跳过X条数据，仅支持0或limit的整数倍，不满足则向下取整。默认值0
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showStandardTemplate(showStandardTemplateRequest?: ShowStandardTemplateRequest): Promise<ShowStandardTemplateResponse> {
        const options = ParamCreater().showStandardTemplate(showStandardTemplateRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 通过id获取模型表详情信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查看表模型详情
     * @param {string} workspace DataArts Studio工作空间ID
     * @param {string} id 实体id
     * @param {boolean} [latest] 是否查询最新的
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showTableModelById(showTableModelByIdRequest?: ShowTableModelByIdRequest): Promise<ShowTableModelByIdResponse> {
        const options = ParamCreater().showTableModelById(showTableModelByIdRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 搜索查询标签分页展示
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 搜索查询标签分页展示
     * @param {string} instance 实例id
     * @param {TagRequest} tagRequest 请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showTags(showTagsRequest?: ShowTagsRequest): Promise<ShowTagsResponse> {
        const options = ParamCreater().showTags(showTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询采集任务详情
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询采集任务详情
     * @param {string} workspace DataArts Studio工作空间ID
     * @param {string} taskId 任务id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showTaskInfo(showTaskInfoRequest?: ShowTaskInfoRequest): Promise<ShowTaskInfoResponse> {
        const options = ParamCreater().showTaskInfo(showTaskInfoRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询采集任务列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询采集任务列表
     * @param {string} workspace DataArts Studio工作空间ID
     * @param {QueryTaskRequest} queryTaskRequest 请求信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showTaskList(showTaskListRequest?: ShowTaskListRequest): Promise<ShowTaskListResponse> {
        const options = ParamCreater().showTaskList(showTaskListRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取技术资产统计信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取技术资产统计信息
     * @param {string} workspace DataArts Studio工作空间ID
     * @param {string} [tag] 标签名，指定标签名称可以获取此标签对应技术资产的统计信息。
     * @param {number} [offset] 分页参数，查询偏移量，默认查询所有
     * @param {number} [limit] 分页参数，每页数量，默认查询所有
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showTechnicalAssetsStatistic(showTechnicalAssetsStatisticRequest?: ShowTechnicalAssetsStatisticRequest): Promise<ShowTechnicalAssetsStatisticResponse> {
        const options = ParamCreater().showTechnicalAssetsStatistic(showTechnicalAssetsStatisticRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取规则模板详情
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取规则模板详情
     * @param {number} id id
     * @param {string} workspace DataArts Studio工作空间ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showTemplatesDetail(showTemplatesDetailRequest?: ShowTemplatesDetailRequest): Promise<ShowTemplatesDetailResponse> {
        const options = ParamCreater().showTemplatesDetail(showTemplatesDetailRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 无血缘关系表查询
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 无血缘关系表查询
     * @param {string} workspace DataArts Studio工作空间ID
     * @param {SearchParametersExt} searchParametersExt 请求参数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showUnrelatedTable(showUnrelatedTableRequest?: ShowUnrelatedTableRequest): Promise<ShowUnrelatedTableResponse> {
        const options = ParamCreater().showUnrelatedTable(showUnrelatedTableRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取单个工作空间信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取单个工作空间信息
     * @param {string} instanceId DataArtsStudio实例id
     * @param {string} workspaceId 工作空间id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showWorkSpace(showWorkSpaceRequest?: ShowWorkSpaceRequest): Promise<ShowWorkSpaceResponse> {
        const options = ParamCreater().showWorkSpace(showWorkSpaceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询物理模型或逻辑模型的工作区空间详情
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询模型详情
     * @param {string} workspace DataArts Studio工作空间ID
     * @param {string} modelId 依据workspace id查工作区
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showWorkspaceDetailById(showWorkspaceDetailByIdRequest?: ShowWorkspaceDetailByIdRequest): Promise<ShowWorkspaceDetailByIdResponse> {
        const options = ParamCreater().showWorkspaceDetailById(showWorkspaceDetailByIdRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 停止补数据实例
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 停止补数据实例
     * @param {string} instanceName 补数据名称
     * @param {string} [workspace] 工作空间ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public stopFactorySupplementDataInstance(stopFactorySupplementDataInstanceRequest?: StopFactorySupplementDataInstanceRequest): Promise<StopFactorySupplementDataInstanceResponse> {
        const options = ParamCreater().stopFactorySupplementDataInstance(stopFactorySupplementDataInstanceRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-request-id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新应用
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新应用
     * @param {string} workspace 工作空间id
     * @param {string} contentType 资源类型
     * @param {string} appId 应用编号
     * @param {'SHARED' | 'EXCLUSIVE'} [dlmType] dlm版本类型
     * @param {AppUpdateDTO} [appUpdateDTO] 更新应用相关参数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateApp(updateAppRequest?: UpdateAppRequest): Promise<UpdateAppResponse> {
        const options = ParamCreater().updateApp(updateAppRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新业务指标
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新业务指标
     * @param {string} workspace DataArts Studio工作空间ID
     * @param {BizMetricVO} bizMetric bizMetric info
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateBizMetric(updateBizMetricRequest?: UpdateBizMetricRequest): Promise<UpdateBizMetricResponse> {
        const options = ParamCreater().updateBizMetric(updateBizMetricRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新服务目录
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新服务目录
     * @param {string} workspace 工作空间id
     * @param {string} contentType 资源类型
     * @param {string} catalogId 目录编号
     * @param {ApiCatalogUpdateParaDTO} apiCatalogUpdateParaDTO 目录创建参数
     * @param {'SHARED' | 'EXCLUSIVE'} [dlmType] dlm版本类型
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateCatalog(updateCatalogRequest?: UpdateCatalogRequest): Promise<UpdateCatalogResponse> {
        const options = ParamCreater().updateCatalog(updateCatalogRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改码表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改码表
     * @param {string} workspace DataArts Studio工作空间ID
     * @param {string} id 实体id
     * @param {CodeTableVO} codeTable 码表信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateCodeTable(updateCodeTableRequest?: UpdateCodeTableRequest): Promise<UpdateCodeTableResponse> {
        const options = ParamCreater().updateCodeTable(updateCodeTableRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 编辑码表字段值
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 编辑码表字段值
     * @param {string} workspace DataArts Studio工作空间ID
     * @param {string} id 实体id
     * @param {CodeTableFieldValueUpdateVO} fieldValues code table field values
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateCodeTableValues(updateCodeTableValuesRequest?: UpdateCodeTableValuesRequest): Promise<UpdateCodeTableValuesResponse> {
        const options = ParamCreater().updateCodeTableValues(updateCodeTableValuesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新数据连接信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新数据连接信息
     * @param {string} workspace 工作空间id
     * @param {string} dataConnectionId 数据连接ID
     * @param {ApigDataSourcesVo} dataSourceVO 数据源连接信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateDataconnection(updateDataconnectionRequest?: UpdateDataconnectionRequest): Promise<UpdateDataconnectionResponse> {
        const options = ParamCreater().updateDataconnection(updateDataconnectionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改目录
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改目录
     * @param {string} workspace DataArts Studio工作空间ID
     * @param {DirectoryVO} directory 目录信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateDirectory(updateDirectoryRequest?: UpdateDirectoryRequest): Promise<UpdateDirectoryResponse> {
        const options = ParamCreater().updateDirectory(updateDirectoryRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改作业名称
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改作业名称
     * @param {string} jobName 作业名
     * @param {string} workspace 工作空间ID
     * @param {UpdateFactoryJobNameRequestBody} updateFactoryJobNameRequestBody DemoInfo object that needs to be modified
     * @param {string} [contentType] 有Body体的情况下必选，无Body体的情况下则无需填写和校验
     * @param {string} [authorization] 使用AK/SK进行认证时该字段必选
     * @param {string} [host] 使用AK/SK进行认证时该字段必选
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateFactoryJobName(updateFactoryJobNameRequest?: UpdateFactoryJobNameRequest): Promise<UpdateFactoryJobNameResponse> {
        const options = ParamCreater().updateFactoryJobName(updateFactoryJobNameRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改识别规则接口
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改识别规则接口
     * @param {string} workspace DataArts Studio工作空间ID
     * @param {string} id 识别规则id
     * @param {DataClassificationRuleOperateDTO} updateSecurityDataClassificationRuleRequestBody 需要修改的识别规则DTO
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateSecurityDataClassificationRule(updateSecurityDataClassificationRuleRequest?: UpdateSecurityDataClassificationRuleRequest): Promise<UpdateSecurityDataClassificationRuleResponse> {
        const options = ParamCreater().updateSecurityDataClassificationRule(updateSecurityDataClassificationRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新权限集
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新权限集
     * @param {string} permissionSetId 权限集id
     * @param {string} workspace DataArts Studio工作空间ID
     * @param {PermissionSetCreateDTO} updateSecurityPermissionSetRequestBody 权限集创建参数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateSecurityPermissionSet(updateSecurityPermissionSetRequest?: UpdateSecurityPermissionSetRequest): Promise<UpdateSecurityPermissionSetResponse> {
        const options = ParamCreater().updateSecurityPermissionSet(updateSecurityPermissionSetRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新权限集的权限
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新权限集的权限
     * @param {string} permissionSetId 权限集id
     * @param {string} permissionId 权限id
     * @param {string} workspace DataArts Studio工作空间ID
     * @param {PermissionSetPermissionUpdateDTO} updateSecurityPermissionSetPermissionRequestBody 权限更新参数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateSecurityPermissionSetPermission(updateSecurityPermissionSetPermissionRequest?: UpdateSecurityPermissionSetPermissionRequest): Promise<UpdateSecurityPermissionSetPermissionResponse> {
        const options = ParamCreater().updateSecurityPermissionSetPermission(updateSecurityPermissionSetPermissionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改识别规则状态接口
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改识别规则状态接口
     * @param {string} workspace DataArts Studio工作空间ID
     * @param {string} id 识别规则id
     * @param {DataClassificationRuleEnableDTO} updateSecurityRuleEnableStatusRequestBody 需要修改的识别规则DTO
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateSecurityRuleEnableStatus(updateSecurityRuleEnableStatusRequest?: UpdateSecurityRuleEnableStatusRequest): Promise<UpdateSecurityRuleEnableStatusResponse> {
        const options = ParamCreater().updateSecurityRuleEnableStatus(updateSecurityRuleEnableStatusRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据指定的id修改密级
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 根据指定的id修改密级
     * @param {string} workspace DataArts Studio工作空间ID
     * @param {string} id 密级id
     * @param {UpdateSecrecyLevelDTO} updateSecuritySecrecyLevelRequestBody 修改密级参数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateSecuritySecrecyLevel(updateSecuritySecrecyLevelRequest?: UpdateSecuritySecrecyLevelRequest): Promise<UpdateSecuritySecrecyLevelResponse> {
        const options = ParamCreater().updateSecuritySecrecyLevel(updateSecuritySecrecyLevelRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改数据标准
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改数据标准
     * @param {string} workspace DataArts Studio工作空间ID
     * @param {string} id 实体id
     * @param {StandElementValueVOList} values field value info
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateStandard(updateStandardRequest?: UpdateStandardRequest): Promise<UpdateStandardResponse> {
        const options = ParamCreater().updateStandard(updateStandardRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改数据标准模板
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改数据标准模板
     * @param {string} workspace DataArts Studio工作空间ID
     * @param {StandElementFieldVO} field field info
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateStandardTemplate(updateStandardTemplateRequest?: UpdateStandardTemplateRequest): Promise<UpdateStandardTemplateResponse> {
        const options = ParamCreater().updateStandardTemplate(updateStandardTemplateRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改主题
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改主题
     * @param {string} workspace DataArts Studio工作空间ID
     * @param {CatalogParamsVO} catalogParam catalog参数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateSubject(updateSubjectRequest?: UpdateSubjectRequest): Promise<UpdateSubjectResponse> {
        const options = ParamCreater().updateSubject(updateSubjectRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改主题(新)
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改主题(新)
     * @param {string} workspace DataArts Studio工作空间ID
     * @param {SubjectParamsVO} subjectParam subject参数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateSubjectNew(updateSubjectNewRequest?: UpdateSubjectNewRequest): Promise<UpdateSubjectNewResponse> {
        const options = ParamCreater().updateSubjectNew(updateSubjectNewRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新一个模型实体，包括逻辑实体或物理数据表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新模型实体
     * @param {string} workspace DataArts Studio工作空间ID
     * @param {TableModelUpdateVO} tableModel table model info
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateTableModel(updateTableModelRequest?: UpdateTableModelRequest): Promise<UpdateTableModelResponse> {
        const options = ParamCreater().updateTableModel(updateTableModelRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 编辑采集任务
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 编辑采集任务
     * @param {string} workspace DataArts Studio工作空间ID
     * @param {string} taskId 任务id
     * @param {MetadataCollectionTask} requestBody 标签信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateTaskInfo(updateTaskInfoRequest?: UpdateTaskInfoRequest): Promise<UpdateTaskInfoResponse> {
        const options = ParamCreater().updateTaskInfo(updateTaskInfoRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新规则模板
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新规则模板
     * @param {string} id id
     * @param {string} workspace DataArts Studio工作空间ID
     * @param {TemplateRO} templateRO 模板参数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateTemplate(updateTemplateRequest?: UpdateTemplateRequest): Promise<UpdateTemplateResponse> {
        const options = ParamCreater().updateTemplate(updateTemplateRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 编辑工作空间用户或用户组
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 编辑工作空间用户或用户组
     * @param {string} workspaceId 工作空间id
     * @param {string} userId 用户id
     * @param {ApigWorkspaceUserDto} updateUserParams 编辑用户信息body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateWorkSpaceUserOrGroup(updateWorkSpaceUserOrGroupRequest?: UpdateWorkSpaceUserOrGroupRequest): Promise<UpdateWorkSpaceUserOrGroupResponse> {
        const options = ParamCreater().updateWorkSpaceUserOrGroup(updateWorkSpaceUserOrGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新模型工作区
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新模型工作区
     * @param {string} workspace DataArts Studio工作空间ID
     * @param {WorkspaceVO} workSpace 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateWorkspace(updateWorkspaceRequest?: UpdateWorkspaceRequest): Promise<UpdateWorkspaceResponse> {
        const options = ParamCreater().updateWorkspace(updateWorkspaceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * API授权操作(授权/取消授权/申请/续约)
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary API授权操作(授权/取消授权/申请/续约)
     * @param {string} workspace 工作空间id
     * @param {string} contentType 资源类型
     * @param {ApiParaForAuthToInstance} apiParaForAuthToInstance 授权相关参数
     * @param {'SHARED' | 'EXCLUSIVE'} [dlmType] dlm版本类型
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public authorizeActionApiToInstance(authorizeActionApiToInstanceRequest?: AuthorizeActionApiToInstanceRequest): Promise<AuthorizeActionApiToInstanceResponse> {
        const options = ParamCreater().authorizeActionApiToInstance(authorizeActionApiToInstanceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量授权API
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量授权API
     * @param {string} workspace 工作空间id
     * @param {string} contentType 资源类型
     * @param {string} apiId api编号
     * @param {string} instanceId 集群编号
     * @param {ApiParaForAuthorizeToInstance} apiParaForAuthorizeToInstance 授权相关参数
     * @param {'SHARED' | 'EXCLUSIVE'} [dlmType] dlm版本类型
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public authorizeApiToInstance(authorizeApiToInstanceRequest?: AuthorizeApiToInstanceRequest): Promise<AuthorizeApiToInstanceResponse> {
        const options = ParamCreater().authorizeApiToInstance(authorizeApiToInstanceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建API
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建API
     * @param {string} workspace 工作空间id
     * @param {string} contentType 资源类型
     * @param {Api} api API 信息
     * @param {'SHARED' | 'EXCLUSIVE'} [dlmType] dlm版本类型
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createApi(createApiRequest?: CreateApiRequest): Promise<CreateApiResponse> {
        const options = ParamCreater().createApi(createApiRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 调试API
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 调试API
     * @param {string} workspace 工作空间id
     * @param {string} contentType 资源类型
     * @param {string} apiId api编号
     * @param {string} instanceId 集群编号
     * @param {ApiTestDTO} apiTestDTO 调试参数
     * @param {'SHARED' | 'EXCLUSIVE'} [dlmType] dlm版本类型
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public debugApi(debugApiRequest?: DebugApiRequest): Promise<DebugApiResponse> {
        const options = ParamCreater().debugApi(debugApiRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量删除API
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量删除API
     * @param {string} contentType 资源类型
     * @param {Array<string>} ids 删除API的ID列表
     * @param {string} [workspace] 工作空间id
     * @param {'SHARED' | 'EXCLUSIVE'} [dlmType] dlm版本类型
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteApi(deleteApiRequest?: DeleteApiRequest): Promise<DeleteApiResponse> {
        const options = ParamCreater().deleteApi(deleteApiRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * API操作(下线/停用/恢复)
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary API操作(下线/停用/恢复)
     * @param {string} workspace 工作空间id
     * @param {string} contentType 资源类型
     * @param {string} apiId api编号
     * @param {string} instanceId 集群编号
     * @param {ApiActionDTO} apiActionDTO api操作参数
     * @param {'SHARED' | 'EXCLUSIVE'} [dlmType] dlm版本类型
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public executeApiToInstance(executeApiToInstanceRequest?: ExecuteApiToInstanceRequest): Promise<ExecuteApiToInstanceResponse> {
        const options = ParamCreater().executeApiToInstance(executeApiToInstanceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询API列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询API列表
     * @param {string} workspace 工作空间id
     * @param {string} contentType 资源类型
     * @param {'SHARED' | 'EXCLUSIVE'} [dlmType] dlm版本类型
     * @param {string} [xReturnPublishMessages] 是否返回专享版API的发布信息
     * @param {number} [offset] 查询起始坐标, 即跳过前X条数据。仅支持0或limit的整数倍，不满足则向下取整
     * @param {number} [limit] 查询条数, 即查询Y条数据
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listApis(listApisRequest?: ListApisRequest): Promise<ListApisResponse> {
        const options = ParamCreater().listApis(listApisRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查看API不同操作对应的实例信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查看API不同操作对应的实例信息
     * @param {string} workspace 工作空间id
     * @param {string} contentType 资源类型
     * @param {string} apiId api编号
     * @param {'PUBLISH' | 'UNPUBLISH' | 'STOP' | 'RECOVER' | 'WHITELIST' | 'AUTHORIZE'} action api操作
     * @param {'SHARED' | 'EXCLUSIVE'} [dlmType] dlm版本类型
     * @param {boolean} [showAll] 全部展示(包括不可执行当前操作的实例)
     * @param {boolean} [checkStatus] 校验api状态
     * @param {boolean} [checkDebug] 校验api调试状态
     * @param {string} [appId] app编号(用于判断授权操作app可选的实例)
     * @param {number} [limit] limit
     * @param {number} [offset] offset
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listInstanceList(listInstanceListRequest?: ListInstanceListRequest): Promise<ListInstanceListResponse> {
        const options = ParamCreater().listInstanceList(listInstanceListRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 发布/下线/停用/恢复API
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 发布/下线/停用/恢复API
     * @param {string} workspace 工作空间id
     * @param {string} contentType 资源类型
     * @param {OpenApiParaForPublish} openApiParaForPublish api操作相关参数
     * @param {'SHARED' | 'EXCLUSIVE'} [dlmType] dlm版本类型
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public publishApi(publishApiRequest?: PublishApiRequest): Promise<PublishApiResponse> {
        const options = ParamCreater().publishApi(publishApiRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 发布API
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 发布API
     * @param {string} workspace 工作空间id
     * @param {string} contentType 资源类型
     * @param {string} apiId api编号
     * @param {string} instanceId 集群编号
     * @param {GatewayDTO} gatewayDTO 网关参数
     * @param {'SHARED' | 'EXCLUSIVE'} [dlmType] dlm版本类型
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public publishApiToInstance(publishApiToInstanceRequest?: PublishApiToInstanceRequest): Promise<PublishApiToInstanceResponse> {
        const options = ParamCreater().publishApiToInstance(publishApiToInstanceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查看API调试信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查看API调试信息
     * @param {string} workspace 工作空间id
     * @param {string} contentType 资源类型
     * @param {string} apiId api编号
     * @param {'SHARED' | 'EXCLUSIVE'} [dlmType] dlm版本类型
     * @param {number} [limit] limit
     * @param {number} [offset] offset
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public searchDebugInfo(searchDebugInfoRequest?: SearchDebugInfoRequest): Promise<SearchDebugInfoResponse> {
        const options = ParamCreater().searchDebugInfo(searchDebugInfoRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查看API发布信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查看API发布信息
     * @param {string} workspace 工作空间id
     * @param {string} contentType 资源类型
     * @param {string} apiId api编号
     * @param {'SHARED' | 'EXCLUSIVE'} [dlmType] dlm版本类型
     * @param {number} [limit] limit
     * @param {number} [offset] offset
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public searchPublishInfo(searchPublishInfoRequest?: SearchPublishInfoRequest): Promise<SearchPublishInfoResponse> {
        const options = ParamCreater().searchPublishInfo(searchPublishInfoRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询API信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询API信息
     * @param {string} workspace 工作空间id
     * @param {string} contentType 资源类型
     * @param {string} apiId API ID
     * @param {'SHARED' | 'EXCLUSIVE'} [dlmType] dlm版本类型
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showApi(showApiRequest?: ShowApiRequest): Promise<ShowApiResponse> {
        const options = ParamCreater().showApi(showApiRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新API
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新API
     * @param {string} workspace 工作空间id
     * @param {string} contentType 资源类型
     * @param {string} apiId API ID
     * @param {Api} api API实体信息
     * @param {'SHARED' | 'EXCLUSIVE'} [dlmType] dlm版本类型
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateApi(updateApiRequest?: UpdateApiRequest): Promise<UpdateApiResponse> {
        const options = ParamCreater().updateApi(updateApiRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * 标签关联到资产
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        addTagToAsset(addTagToAssetRequest?: AddTagToAssetRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/tags/{term_guid}/assignedentities",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let workspace;
            
            let termGuid;

            if (addTagToAssetRequest !== null && addTagToAssetRequest !== undefined) {
                if (addTagToAssetRequest instanceof AddTagToAssetRequest) {
                    workspace = addTagToAssetRequest.workspace;
                    termGuid = addTagToAssetRequest.termGuid;
                    body = addTagToAssetRequest.body
                } else {
                    workspace = addTagToAssetRequest['workspace'];
                    termGuid = addTagToAssetRequest['term_guid'];
                    body = addTagToAssetRequest['body'];
                }
            }

        
            if (termGuid === null || termGuid === undefined) {
            throw new RequiredError('termGuid','Required parameter termGuid was null or undefined when calling addTagToAsset.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'term_guid': termGuid, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 添加工作空间用户
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        addWorkSpaceUsers(addWorkSpaceUsersRequest?: AddWorkSpaceUsersRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/{workspace_id}/users",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let workspaceId;

            if (addWorkSpaceUsersRequest !== null && addWorkSpaceUsersRequest !== undefined) {
                if (addWorkSpaceUsersRequest instanceof AddWorkSpaceUsersRequest) {
                    workspaceId = addWorkSpaceUsersRequest.workspaceId;
                    body = addWorkSpaceUsersRequest.body
                } else {
                    workspaceId = addWorkSpaceUsersRequest['workspace_id'];
                    body = addWorkSpaceUsersRequest['body'];
                }
            }

        
            if (workspaceId === null || workspaceId === undefined) {
            throw new RequiredError('workspaceId','Required parameter workspaceId was null or undefined when calling addWorkSpaceUsers.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'workspace_id': workspaceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 将一个分类关联到一个或多个指定guid的资产上
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        associateClassificationToEntity(associateClassificationToEntityRequest?: AssociateClassificationToEntityRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/asset/entities/guid/{guid}/classification",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let workspace;
            
            let guid;

            if (associateClassificationToEntityRequest !== null && associateClassificationToEntityRequest !== undefined) {
                if (associateClassificationToEntityRequest instanceof AssociateClassificationToEntityRequest) {
                    workspace = associateClassificationToEntityRequest.workspace;
                    guid = associateClassificationToEntityRequest.guid;
                    body = associateClassificationToEntityRequest.body
                } else {
                    workspace = associateClassificationToEntityRequest['workspace'];
                    guid = associateClassificationToEntityRequest['guid'];
                    body = associateClassificationToEntityRequest['body'];
                }
            }

        
            if (guid === null || guid === undefined) {
            throw new RequiredError('guid','Required parameter guid was null or undefined when calling associateClassificationToEntity.');
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'guid': guid, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 关联资产到密级，资产关联指定密级
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        associateSecurityLevelToEntitie(associateSecurityLevelToEntitieRequest?: AssociateSecurityLevelToEntitieRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/asset/entities/guid/{guid}/security-level",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let workspace;
            
            let guid;
            
            let securityLevel;

            if (associateSecurityLevelToEntitieRequest !== null && associateSecurityLevelToEntitieRequest !== undefined) {
                if (associateSecurityLevelToEntitieRequest instanceof AssociateSecurityLevelToEntitieRequest) {
                    workspace = associateSecurityLevelToEntitieRequest.workspace;
                    guid = associateSecurityLevelToEntitieRequest.guid;
                    securityLevel = associateSecurityLevelToEntitieRequest.securityLevel;
                } else {
                    workspace = associateSecurityLevelToEntitieRequest['workspace'];
                    guid = associateSecurityLevelToEntitieRequest['guid'];
                    securityLevel = associateSecurityLevelToEntitieRequest['security-level'];
                }
            }

        
            if (guid === null || guid === undefined) {
            throw new RequiredError('guid','Required parameter guid was null or undefined when calling associateSecurityLevelToEntitie.');
            }
            if (securityLevel === null || securityLevel === undefined) {
                throw new RequiredError('securityLevel','Required parameter securityLevel was null or undefined when calling associateSecurityLevelToEntitie.');
            }
            if (securityLevel !== null && securityLevel !== undefined) {
                localVarQueryParameter['security-level'] = securityLevel;
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'guid': guid, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 审核申请
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchApproveApply(batchApproveApplyRequest?: BatchApproveApplyRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/service/applys",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let workspace;
            
            let contentType;
            
            let dlmType;

            if (batchApproveApplyRequest !== null && batchApproveApplyRequest !== undefined) {
                if (batchApproveApplyRequest instanceof BatchApproveApplyRequest) {
                    workspace = batchApproveApplyRequest.workspace;
                    contentType = batchApproveApplyRequest.contentType;
                    body = batchApproveApplyRequest.body
                    dlmType = batchApproveApplyRequest.dlmType;
                } else {
                    workspace = batchApproveApplyRequest['workspace'];
                    contentType = batchApproveApplyRequest['Content-Type'];
                    body = batchApproveApplyRequest['body'];
                    dlmType = batchApproveApplyRequest['Dlm-Type'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }
            if (dlmType !== undefined && dlmType !== null) {
                localVarHeaderParameter['Dlm-Type'] = String(dlmType);
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 批量资产关联分类：只支持对数据表的列和OBS对象添加分类
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchAssociateClassificationToEntities(batchAssociateClassificationToEntitiesRequest?: BatchAssociateClassificationToEntitiesRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/asset/entities/classification",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let workspace;

            if (batchAssociateClassificationToEntitiesRequest !== null && batchAssociateClassificationToEntitiesRequest !== undefined) {
                if (batchAssociateClassificationToEntitiesRequest instanceof BatchAssociateClassificationToEntitiesRequest) {
                    workspace = batchAssociateClassificationToEntitiesRequest.workspace;
                    body = batchAssociateClassificationToEntitiesRequest.body
                } else {
                    workspace = batchAssociateClassificationToEntitiesRequest['workspace'];
                    body = batchAssociateClassificationToEntitiesRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 批量资产关联密级：单个密级关联到多个资产上
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchAssociateSecurityLevelToEntities(batchAssociateSecurityLevelToEntitiesRequest?: BatchAssociateSecurityLevelToEntitiesRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/asset/entities/security-level",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let workspace;

            if (batchAssociateSecurityLevelToEntitiesRequest !== null && batchAssociateSecurityLevelToEntitiesRequest !== undefined) {
                if (batchAssociateSecurityLevelToEntitiesRequest instanceof BatchAssociateSecurityLevelToEntitiesRequest) {
                    workspace = batchAssociateSecurityLevelToEntitiesRequest.workspace;
                    body = batchAssociateSecurityLevelToEntitiesRequest.body
                } else {
                    workspace = batchAssociateSecurityLevelToEntitiesRequest['workspace'];
                    body = batchAssociateSecurityLevelToEntitiesRequest['body'];
                }
            }

        
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 批量删除识别规则接口
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchDeleteSecurityDataClassificationRule(batchDeleteSecurityDataClassificationRuleRequest?: BatchDeleteSecurityDataClassificationRuleRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/security/data-classification/rule/batch-delete",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let workspace;

            if (batchDeleteSecurityDataClassificationRuleRequest !== null && batchDeleteSecurityDataClassificationRuleRequest !== undefined) {
                if (batchDeleteSecurityDataClassificationRuleRequest instanceof BatchDeleteSecurityDataClassificationRuleRequest) {
                    workspace = batchDeleteSecurityDataClassificationRuleRequest.workspace;
                    body = batchDeleteSecurityDataClassificationRuleRequest.body
                } else {
                    workspace = batchDeleteSecurityDataClassificationRuleRequest['workspace'];
                    body = batchDeleteSecurityDataClassificationRuleRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 批量删除权限集成员
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchDeleteSecurityPermissionSetMembers(batchDeleteSecurityPermissionSetMembersRequest?: BatchDeleteSecurityPermissionSetMembersRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/security/permission-sets/{permission_set_id}/members/batch-delete",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let permissionSetId;
            
            let workspace;

            if (batchDeleteSecurityPermissionSetMembersRequest !== null && batchDeleteSecurityPermissionSetMembersRequest !== undefined) {
                if (batchDeleteSecurityPermissionSetMembersRequest instanceof BatchDeleteSecurityPermissionSetMembersRequest) {
                    permissionSetId = batchDeleteSecurityPermissionSetMembersRequest.permissionSetId;
                    workspace = batchDeleteSecurityPermissionSetMembersRequest.workspace;
                    body = batchDeleteSecurityPermissionSetMembersRequest.body
                } else {
                    permissionSetId = batchDeleteSecurityPermissionSetMembersRequest['permission_set_id'];
                    workspace = batchDeleteSecurityPermissionSetMembersRequest['workspace'];
                    body = batchDeleteSecurityPermissionSetMembersRequest['body'];
                }
            }

        
            if (permissionSetId === null || permissionSetId === undefined) {
            throw new RequiredError('permissionSetId','Required parameter permissionSetId was null or undefined when calling batchDeleteSecurityPermissionSetMembers.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'permission_set_id': permissionSetId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除权限集的权限
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchDeleteSecurityPermissionSetPermissions(batchDeleteSecurityPermissionSetPermissionsRequest?: BatchDeleteSecurityPermissionSetPermissionsRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/security/permission-sets/{permission_set_id}/permissions/batch-delete",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let permissionSetId;
            
            let workspace;

            if (batchDeleteSecurityPermissionSetPermissionsRequest !== null && batchDeleteSecurityPermissionSetPermissionsRequest !== undefined) {
                if (batchDeleteSecurityPermissionSetPermissionsRequest instanceof BatchDeleteSecurityPermissionSetPermissionsRequest) {
                    permissionSetId = batchDeleteSecurityPermissionSetPermissionsRequest.permissionSetId;
                    workspace = batchDeleteSecurityPermissionSetPermissionsRequest.workspace;
                    body = batchDeleteSecurityPermissionSetPermissionsRequest.body
                } else {
                    permissionSetId = batchDeleteSecurityPermissionSetPermissionsRequest['permission_set_id'];
                    workspace = batchDeleteSecurityPermissionSetPermissionsRequest['workspace'];
                    body = batchDeleteSecurityPermissionSetPermissionsRequest['body'];
                }
            }

        
            if (permissionSetId === null || permissionSetId === undefined) {
            throw new RequiredError('permissionSetId','Required parameter permissionSetId was null or undefined when calling batchDeleteSecurityPermissionSetPermissions.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'permission_set_id': permissionSetId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 批量删除密级
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchDeleteSecuritySecrecyLevels(batchDeleteSecuritySecrecyLevelsRequest?: BatchDeleteSecuritySecrecyLevelsRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/dls/data-classification/secrecy-level/batch-delete",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let workspace;

            if (batchDeleteSecuritySecrecyLevelsRequest !== null && batchDeleteSecuritySecrecyLevelsRequest !== undefined) {
                if (batchDeleteSecuritySecrecyLevelsRequest instanceof BatchDeleteSecuritySecrecyLevelsRequest) {
                    workspace = batchDeleteSecuritySecrecyLevelsRequest.workspace;
                    body = batchDeleteSecuritySecrecyLevelsRequest.body
                } else {
                    workspace = batchDeleteSecuritySecrecyLevelsRequest['workspace'];
                    body = batchDeleteSecuritySecrecyLevelsRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 批量删除规则模板
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchDeleteTemplates(batchDeleteTemplatesRequest?: BatchDeleteTemplatesRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/quality/rule-templates/batch-delete",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let workspace;

            if (batchDeleteTemplatesRequest !== null && batchDeleteTemplatesRequest !== undefined) {
                if (batchDeleteTemplatesRequest instanceof BatchDeleteTemplatesRequest) {
                    workspace = batchDeleteTemplatesRequest.workspace;
                    body = batchDeleteTemplatesRequest.body
                } else {
                    workspace = batchDeleteTemplatesRequest['workspace'];
                    body = batchDeleteTemplatesRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 批量下线
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchOffline(batchOfflineRequest?: BatchOfflineRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/design/approvals/batch-offline",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let workspace;

            if (batchOfflineRequest !== null && batchOfflineRequest !== undefined) {
                if (batchOfflineRequest instanceof BatchOfflineRequest) {
                    workspace = batchOfflineRequest.workspace;
                    body = batchOfflineRequest.body
                } else {
                    workspace = batchOfflineRequest['workspace'];
                    body = batchOfflineRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 批量发布
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchPublish(batchPublishRequest?: BatchPublishRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/design/approvals/batch-publish",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let workspace;

            if (batchPublishRequest !== null && batchPublishRequest !== undefined) {
                if (batchPublishRequest instanceof BatchPublishRequest) {
                    workspace = batchPublishRequest.workspace;
                    body = batchPublishRequest.body
                } else {
                    workspace = batchPublishRequest['workspace'];
                    body = batchPublishRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 元数据实时同步接口，支持批量。该接口功能处于邀测阶段，后续将随功能公测将逐步开放。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchSyncMetadata(batchSyncMetadataRequest?: BatchSyncMetadataRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/metadata/async-bulk",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (batchSyncMetadataRequest !== null && batchSyncMetadataRequest !== undefined) {
                if (batchSyncMetadataRequest instanceof BatchSyncMetadataRequest) {
                    body = batchSyncMetadataRequest.body
                } else {
                    body = batchSyncMetadataRequest['body'];
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
         * 撤销任务包
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        cancelFactoryPackages(cancelFactoryPackagesRequest?: CancelFactoryPackagesRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/factory/release-packages/unpack",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let workspace;
            
            let contentType;

            if (cancelFactoryPackagesRequest !== null && cancelFactoryPackagesRequest !== undefined) {
                if (cancelFactoryPackagesRequest instanceof CancelFactoryPackagesRequest) {
                    workspace = cancelFactoryPackagesRequest.workspace;
                    contentType = cancelFactoryPackagesRequest.contentType;
                    body = cancelFactoryPackagesRequest.body
                } else {
                    workspace = cancelFactoryPackagesRequest['workspace'];
                    contentType = cancelFactoryPackagesRequest['Content-Type'];
                    body = cancelFactoryPackagesRequest['body'];
                }
            }

        
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改流程架构
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        changeCatalog(changeCatalogRequest?: ChangeCatalogRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/design/biz/catalogs",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let workspace;

            if (changeCatalogRequest !== null && changeCatalogRequest !== undefined) {
                if (changeCatalogRequest instanceof ChangeCatalogRequest) {
                    workspace = changeCatalogRequest.workspace;
                    body = changeCatalogRequest.body
                } else {
                    workspace = changeCatalogRequest['workspace'];
                    body = changeCatalogRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 规格变更接口
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        changeResource(changeResourceRequest?: ChangeResourceRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/change-resource",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (changeResourceRequest !== null && changeResourceRequest !== undefined) {
                if (changeResourceRequest instanceof ChangeResourceRequest) {
                    body = changeResourceRequest.body
                } else {
                    body = changeResourceRequest['body'];
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
         * 修改或删除主题层级
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        changeSubjects(changeSubjectsRequest?: ChangeSubjectsRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/design/subject-levels",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let workspace;

            if (changeSubjectsRequest !== null && changeSubjectsRequest !== undefined) {
                if (changeSubjectsRequest instanceof ChangeSubjectsRequest) {
                    workspace = changeSubjectsRequest.workspace;
                    body = changeSubjectsRequest.body
                } else {
                    workspace = changeSubjectsRequest['workspace'];
                    body = changeSubjectsRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查看逆向维度表任务
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        checkDimensionStatus(checkDimensionStatusRequest?: CheckDimensionStatusRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/design/dimension/database",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let workspace;

            if (checkDimensionStatusRequest !== null && checkDimensionStatusRequest !== undefined) {
                if (checkDimensionStatusRequest instanceof CheckDimensionStatusRequest) {
                    workspace = checkDimensionStatusRequest.workspace;
                } else {
                    workspace = checkDimensionStatusRequest['workspace'];
                }
            }

        
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }

            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查看逆向事实表任务
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        checkFactLogicTableStatus(checkFactLogicTableStatusRequest?: CheckFactLogicTableStatusRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/design/fact-logic-tables/database",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let workspace;

            if (checkFactLogicTableStatusRequest !== null && checkFactLogicTableStatusRequest !== undefined) {
                if (checkFactLogicTableStatusRequest instanceof CheckFactLogicTableStatusRequest) {
                    workspace = checkFactLogicTableStatusRequest.workspace;
                } else {
                    workspace = checkFactLogicTableStatusRequest['workspace'];
                }
            }

        
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }

            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 审批驳回/通过，单个或多个 action-id&#x3D;reject/resolve
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        confirmApprovals(confirmApprovalsRequest?: ConfirmApprovalsRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/design/approvals/action",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let workspace;
            
            let actionId;

            if (confirmApprovalsRequest !== null && confirmApprovalsRequest !== undefined) {
                if (confirmApprovalsRequest instanceof ConfirmApprovalsRequest) {
                    workspace = confirmApprovalsRequest.workspace;
                    actionId = confirmApprovalsRequest.actionId;
                    body = confirmApprovalsRequest.body
                } else {
                    workspace = confirmApprovalsRequest['workspace'];
                    actionId = confirmApprovalsRequest['action-id'];
                    body = confirmApprovalsRequest['body'];
                }
            }

        
            if (actionId === null || actionId === undefined) {
                throw new RequiredError('actionId','Required parameter actionId was null or undefined when calling confirmApprovals.');
            }
            if (actionId !== null && actionId !== undefined) {
                localVarQueryParameter['action-id'] = actionId;
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 处理消息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        confirmMessage(confirmMessageRequest?: ConfirmMessageRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/service/messages",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let workspace;
            
            let contentType;
            
            let dlmType;

            if (confirmMessageRequest !== null && confirmMessageRequest !== undefined) {
                if (confirmMessageRequest instanceof ConfirmMessageRequest) {
                    workspace = confirmMessageRequest.workspace;
                    contentType = confirmMessageRequest.contentType;
                    body = confirmMessageRequest.body
                    dlmType = confirmMessageRequest.dlmType;
                } else {
                    workspace = confirmMessageRequest['workspace'];
                    contentType = confirmMessageRequest['Content-Type'];
                    body = confirmMessageRequest['body'];
                    dlmType = confirmMessageRequest['Dlm-Type'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }
            if (dlmType !== undefined && dlmType !== null) {
                localVarHeaderParameter['Dlm-Type'] = String(dlmType);
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 关系建模统计信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        countAllModels(countAllModelsRequest?: CountAllModelsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/design/models/statistic",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let workspace;

            if (countAllModelsRequest !== null && countAllModelsRequest !== undefined) {
                if (countAllModelsRequest instanceof CountAllModelsRequest) {
                    workspace = countAllModelsRequest.workspace;
                } else {
                    workspace = countAllModelsRequest['workspace'];
                }
            }

        
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }

            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 总览统计信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        countOverviews(countOverviewsRequest?: CountOverviewsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/design/definitions/statistic",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let workspace;

            if (countOverviewsRequest !== null && countOverviewsRequest !== undefined) {
                if (countOverviewsRequest instanceof CountOverviewsRequest) {
                    workspace = countOverviewsRequest.workspace;
                } else {
                    workspace = countOverviewsRequest['workspace'];
                }
            }

        
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }

            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 标准覆盖率统计信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        countStandards(countStandardsRequest?: CountStandardsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/design/definitions/statistic/{id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let workspace;
            
            let id;
            
            let bizType;

            if (countStandardsRequest !== null && countStandardsRequest !== undefined) {
                if (countStandardsRequest instanceof CountStandardsRequest) {
                    workspace = countStandardsRequest.workspace;
                    id = countStandardsRequest.id;
                    bizType = countStandardsRequest.bizType;
                } else {
                    workspace = countStandardsRequest['workspace'];
                    id = countStandardsRequest['id'];
                    bizType = countStandardsRequest['biz_type'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling countStandards.');
            }
            if (bizType !== null && bizType !== undefined) {
                localVarQueryParameter['biz_type'] = bizType;
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 模型统计信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        countTableModels(countTableModelsRequest?: CountTableModelsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/design/table-models/statistic",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let workspace;
            
            let modelId;

            if (countTableModelsRequest !== null && countTableModelsRequest !== undefined) {
                if (countTableModelsRequest instanceof CountTableModelsRequest) {
                    workspace = countTableModelsRequest.workspace;
                    modelId = countTableModelsRequest.modelId;
                } else {
                    workspace = countTableModelsRequest['workspace'];
                    modelId = countTableModelsRequest['model_id'];
                }
            }

        
            if (modelId !== null && modelId !== undefined) {
                localVarQueryParameter['model_id'] = modelId;
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建应用
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createApp(createAppRequest?: CreateAppRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/service/apps",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let workspace;
            
            let contentType;
            
            let dlmType;

            if (createAppRequest !== null && createAppRequest !== undefined) {
                if (createAppRequest instanceof CreateAppRequest) {
                    workspace = createAppRequest.workspace;
                    contentType = createAppRequest.contentType;
                    dlmType = createAppRequest.dlmType;
                    body = createAppRequest.body
                } else {
                    workspace = createAppRequest['workspace'];
                    contentType = createAppRequest['Content-Type'];
                    dlmType = createAppRequest['Dlm-Type'];
                    body = createAppRequest['body'];
                }
            }

        
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }
            if (dlmType !== undefined && dlmType !== null) {
                localVarHeaderParameter['Dlm-Type'] = String(dlmType);
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建审批人
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createApprover(createApproverRequest?: CreateApproverRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/design/approvals/users",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let workspace;

            if (createApproverRequest !== null && createApproverRequest !== undefined) {
                if (createApproverRequest instanceof CreateApproverRequest) {
                    workspace = createApproverRequest.workspace;
                    body = createApproverRequest.body
                } else {
                    workspace = createApproverRequest['workspace'];
                    body = createApproverRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建业务指标
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createBizMetric(createBizMetricRequest?: CreateBizMetricRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/design/biz-metrics",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let workspace;

            if (createBizMetricRequest !== null && createBizMetricRequest !== undefined) {
                if (createBizMetricRequest instanceof CreateBizMetricRequest) {
                    workspace = createBizMetricRequest.workspace;
                    body = createBizMetricRequest.body
                } else {
                    workspace = createBizMetricRequest['workspace'];
                    body = createBizMetricRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建流程架构
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createCatalog(createCatalogRequest?: CreateCatalogRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/design/biz/catalogs",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let workspace;

            if (createCatalogRequest !== null && createCatalogRequest !== undefined) {
                if (createCatalogRequest instanceof CreateCatalogRequest) {
                    workspace = createCatalogRequest.workspace;
                    body = createCatalogRequest.body
                } else {
                    workspace = createCatalogRequest['workspace'];
                    body = createCatalogRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建码表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createCodeTable(createCodeTableRequest?: CreateCodeTableRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/design/code-tables",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let workspace;

            if (createCodeTableRequest !== null && createCodeTableRequest !== undefined) {
                if (createCodeTableRequest instanceof CreateCodeTableRequest) {
                    workspace = createCodeTableRequest.workspace;
                    body = createCodeTableRequest.body
                } else {
                    workspace = createCodeTableRequest['workspace'];
                    body = createCodeTableRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建数据连接
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createConnections(createConnectionsRequest?: CreateConnectionsRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/data-connections",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let workspace;

            if (createConnectionsRequest !== null && createConnectionsRequest !== undefined) {
                if (createConnectionsRequest instanceof CreateConnectionsRequest) {
                    workspace = createConnectionsRequest.workspace;
                    body = createConnectionsRequest.body
                } else {
                    workspace = createConnectionsRequest['workspace'];
                    body = createConnectionsRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建目录
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createDirectory(createDirectoryRequest?: CreateDirectoryRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/design/directorys",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let workspace;

            if (createDirectoryRequest !== null && createDirectoryRequest !== undefined) {
                if (createDirectoryRequest instanceof CreateDirectoryRequest) {
                    workspace = createDirectoryRequest.workspace;
                    body = createDirectoryRequest.body
                } else {
                    workspace = createDirectoryRequest['workspace'];
                    body = createDirectoryRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建环境变量
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createFactoryEnv(createFactoryEnvRequest?: CreateFactoryEnvRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/factory/env",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let contentType;
            
            let workspace;

            if (createFactoryEnvRequest !== null && createFactoryEnvRequest !== undefined) {
                if (createFactoryEnvRequest instanceof CreateFactoryEnvRequest) {
                    contentType = createFactoryEnvRequest.contentType;
                    body = createFactoryEnvRequest.body
                    workspace = createFactoryEnvRequest.workspace;
                } else {
                    contentType = createFactoryEnvRequest['Content-Type'];
                    body = createFactoryEnvRequest['body'];
                    workspace = createFactoryEnvRequest['workspace'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建作业
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createFactoryJob(createFactoryJobRequest?: CreateFactoryJobRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/factory/jobs",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let workspace;

            if (createFactoryJobRequest !== null && createFactoryJobRequest !== undefined) {
                if (createFactoryJobRequest instanceof CreateFactoryJobRequest) {
                    workspace = createFactoryJobRequest.workspace;
                    body = createFactoryJobRequest.body
                } else {
                    workspace = createFactoryJobRequest['workspace'];
                    body = createFactoryJobRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建补数据实例
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createFactorySupplementDataInstance(createFactorySupplementDataInstanceRequest?: CreateFactorySupplementDataInstanceRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/factory/supplement-data",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let contentType;
            
            let workspace;

            if (createFactorySupplementDataInstanceRequest !== null && createFactorySupplementDataInstanceRequest !== undefined) {
                if (createFactorySupplementDataInstanceRequest instanceof CreateFactorySupplementDataInstanceRequest) {
                    contentType = createFactorySupplementDataInstanceRequest.contentType;
                    body = createFactorySupplementDataInstanceRequest.body
                    workspace = createFactorySupplementDataInstanceRequest.workspace;
                } else {
                    contentType = createFactorySupplementDataInstanceRequest['Content-Type'];
                    body = createFactorySupplementDataInstanceRequest['body'];
                    workspace = createFactorySupplementDataInstanceRequest['workspace'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建工作空间
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createManagerWorkSpace(createManagerWorkSpaceRequest?: CreateManagerWorkSpaceRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/workspaces/{instance_id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (createManagerWorkSpaceRequest !== null && createManagerWorkSpaceRequest !== undefined) {
                if (createManagerWorkSpaceRequest instanceof CreateManagerWorkSpaceRequest) {
                    instanceId = createManagerWorkSpaceRequest.instanceId;
                    body = createManagerWorkSpaceRequest.body
                } else {
                    instanceId = createManagerWorkSpaceRequest['instance_id'];
                    body = createManagerWorkSpaceRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling createManagerWorkSpace.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 添加或修改资产
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createOrUpdateAsset(createOrUpdateAssetRequest?: CreateOrUpdateAssetRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/asset",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let workspace;

            if (createOrUpdateAssetRequest !== null && createOrUpdateAssetRequest !== undefined) {
                if (createOrUpdateAssetRequest instanceof CreateOrUpdateAssetRequest) {
                    workspace = createOrUpdateAssetRequest.workspace;
                    body = createOrUpdateAssetRequest.body
                } else {
                    workspace = createOrUpdateAssetRequest['workspace'];
                    body = createOrUpdateAssetRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建或修改资产，该接口功能处于邀测阶段，后续将随功能公测将逐步开放。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createOrUpdateEntities(createOrUpdateEntitiesRequest?: CreateOrUpdateEntitiesRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/datamap/entities",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instance;

            if (createOrUpdateEntitiesRequest !== null && createOrUpdateEntitiesRequest !== undefined) {
                if (createOrUpdateEntitiesRequest instanceof CreateOrUpdateEntitiesRequest) {
                    instance = createOrUpdateEntitiesRequest.instance;
                    body = createOrUpdateEntitiesRequest.body
                } else {
                    instance = createOrUpdateEntitiesRequest['instance'];
                    body = createOrUpdateEntitiesRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (instance !== undefined && instance !== null) {
                localVarHeaderParameter['instance'] = String(instance);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建识别规则
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createSecurityDataClassificationRule(createSecurityDataClassificationRuleRequest?: CreateSecurityDataClassificationRuleRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/security/data-classification/rule",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let workspace;

            if (createSecurityDataClassificationRuleRequest !== null && createSecurityDataClassificationRuleRequest !== undefined) {
                if (createSecurityDataClassificationRuleRequest instanceof CreateSecurityDataClassificationRuleRequest) {
                    workspace = createSecurityDataClassificationRuleRequest.workspace;
                    body = createSecurityDataClassificationRuleRequest.body
                } else {
                    workspace = createSecurityDataClassificationRuleRequest['workspace'];
                    body = createSecurityDataClassificationRuleRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建权限集
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createSecurityPermissionSet(createSecurityPermissionSetRequest?: CreateSecurityPermissionSetRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/security/permission-sets",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let workspace;

            if (createSecurityPermissionSetRequest !== null && createSecurityPermissionSetRequest !== undefined) {
                if (createSecurityPermissionSetRequest instanceof CreateSecurityPermissionSetRequest) {
                    workspace = createSecurityPermissionSetRequest.workspace;
                    body = createSecurityPermissionSetRequest.body
                } else {
                    workspace = createSecurityPermissionSetRequest['workspace'];
                    body = createSecurityPermissionSetRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 添加权限集成员
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createSecurityPermissionSetMember(createSecurityPermissionSetMemberRequest?: CreateSecurityPermissionSetMemberRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/security/permission-sets/{permission_set_id}/members",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let permissionSetId;
            
            let workspace;

            if (createSecurityPermissionSetMemberRequest !== null && createSecurityPermissionSetMemberRequest !== undefined) {
                if (createSecurityPermissionSetMemberRequest instanceof CreateSecurityPermissionSetMemberRequest) {
                    permissionSetId = createSecurityPermissionSetMemberRequest.permissionSetId;
                    workspace = createSecurityPermissionSetMemberRequest.workspace;
                    body = createSecurityPermissionSetMemberRequest.body
                } else {
                    permissionSetId = createSecurityPermissionSetMemberRequest['permission_set_id'];
                    workspace = createSecurityPermissionSetMemberRequest['workspace'];
                    body = createSecurityPermissionSetMemberRequest['body'];
                }
            }

        
            if (permissionSetId === null || permissionSetId === undefined) {
            throw new RequiredError('permissionSetId','Required parameter permissionSetId was null or undefined when calling createSecurityPermissionSetMember.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'permission_set_id': permissionSetId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 添加权限集的权限
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createSecurityPermissionSetPermission(createSecurityPermissionSetPermissionRequest?: CreateSecurityPermissionSetPermissionRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/security/permission-sets/{permission_set_id}/permissions",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let permissionSetId;
            
            let workspace;

            if (createSecurityPermissionSetPermissionRequest !== null && createSecurityPermissionSetPermissionRequest !== undefined) {
                if (createSecurityPermissionSetPermissionRequest instanceof CreateSecurityPermissionSetPermissionRequest) {
                    permissionSetId = createSecurityPermissionSetPermissionRequest.permissionSetId;
                    workspace = createSecurityPermissionSetPermissionRequest.workspace;
                    body = createSecurityPermissionSetPermissionRequest.body
                } else {
                    permissionSetId = createSecurityPermissionSetPermissionRequest['permission_set_id'];
                    workspace = createSecurityPermissionSetPermissionRequest['workspace'];
                    body = createSecurityPermissionSetPermissionRequest['body'];
                }
            }

        
            if (permissionSetId === null || permissionSetId === undefined) {
            throw new RequiredError('permissionSetId','Required parameter permissionSetId was null or undefined when calling createSecurityPermissionSetPermission.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'permission_set_id': permissionSetId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建密级
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createSecuritySecrecyLevel(createSecuritySecrecyLevelRequest?: CreateSecuritySecrecyLevelRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/security/data-classification/secrecy-level",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let workspace;

            if (createSecuritySecrecyLevelRequest !== null && createSecuritySecrecyLevelRequest !== undefined) {
                if (createSecuritySecrecyLevelRequest instanceof CreateSecuritySecrecyLevelRequest) {
                    workspace = createSecuritySecrecyLevelRequest.workspace;
                    body = createSecuritySecrecyLevelRequest.body
                } else {
                    workspace = createSecuritySecrecyLevelRequest['workspace'];
                    body = createSecuritySecrecyLevelRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建服务目录
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createServiceCatalog(createServiceCatalogRequest?: CreateServiceCatalogRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/service/servicecatalogs",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let workspace;
            
            let contentType;
            
            let dlmType;

            if (createServiceCatalogRequest !== null && createServiceCatalogRequest !== undefined) {
                if (createServiceCatalogRequest instanceof CreateServiceCatalogRequest) {
                    workspace = createServiceCatalogRequest.workspace;
                    contentType = createServiceCatalogRequest.contentType;
                    body = createServiceCatalogRequest.body
                    dlmType = createServiceCatalogRequest.dlmType;
                } else {
                    workspace = createServiceCatalogRequest['workspace'];
                    contentType = createServiceCatalogRequest['Content-Type'];
                    body = createServiceCatalogRequest['body'];
                    dlmType = createServiceCatalogRequest['Dlm-Type'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }
            if (dlmType !== undefined && dlmType !== null) {
                localVarHeaderParameter['Dlm-Type'] = String(dlmType);
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建数据标准
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createStandard(createStandardRequest?: CreateStandardRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/design/standards",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let workspace;

            if (createStandardRequest !== null && createStandardRequest !== undefined) {
                if (createStandardRequest instanceof CreateStandardRequest) {
                    workspace = createStandardRequest.workspace;
                    body = createStandardRequest.body
                } else {
                    workspace = createStandardRequest['workspace'];
                    body = createStandardRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建数据标准模板
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createStandardTemplate(createStandardTemplateRequest?: CreateStandardTemplateRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/design/standards/templates",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let workspace;

            if (createStandardTemplateRequest !== null && createStandardTemplateRequest !== undefined) {
                if (createStandardTemplateRequest instanceof CreateStandardTemplateRequest) {
                    workspace = createStandardTemplateRequest.workspace;
                    body = createStandardTemplateRequest.body
                } else {
                    workspace = createStandardTemplateRequest['workspace'];
                    body = createStandardTemplateRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建主题
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createSubject(createSubjectRequest?: CreateSubjectRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/design/subjects",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let workspace;

            if (createSubjectRequest !== null && createSubjectRequest !== undefined) {
                if (createSubjectRequest instanceof CreateSubjectRequest) {
                    workspace = createSubjectRequest.workspace;
                    body = createSubjectRequest.body
                } else {
                    workspace = createSubjectRequest['workspace'];
                    body = createSubjectRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建主题(新)
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createSubjectNew(createSubjectNewRequest?: CreateSubjectNewRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/design/subjects",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let workspace;

            if (createSubjectNewRequest !== null && createSubjectNewRequest !== undefined) {
                if (createSubjectNewRequest instanceof CreateSubjectNewRequest) {
                    workspace = createSubjectNewRequest.workspace;
                    body = createSubjectNewRequest.body
                } else {
                    workspace = createSubjectNewRequest['workspace'];
                    body = createSubjectNewRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建一个模型实体，包括逻辑实体或物理数据表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createTableModel(createTableModelRequest?: CreateTableModelRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/design/table-model",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let workspace;

            if (createTableModelRequest !== null && createTableModelRequest !== undefined) {
                if (createTableModelRequest instanceof CreateTableModelRequest) {
                    workspace = createTableModelRequest.workspace;
                    body = createTableModelRequest.body
                } else {
                    workspace = createTableModelRequest['workspace'];
                    body = createTableModelRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建采集任务
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createTask(createTaskRequest?: CreateTaskRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/metadata/tasks/create",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let workspace;

            if (createTaskRequest !== null && createTaskRequest !== undefined) {
                if (createTaskRequest instanceof CreateTaskRequest) {
                    workspace = createTaskRequest.workspace;
                    body = createTaskRequest.body
                } else {
                    workspace = createTaskRequest['workspace'];
                    body = createTaskRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建规则模板
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createTemplate(createTemplateRequest?: CreateTemplateRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/quality/rule-templates",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let workspace;

            if (createTemplateRequest !== null && createTemplateRequest !== undefined) {
                if (createTemplateRequest instanceof CreateTemplateRequest) {
                    workspace = createTemplateRequest.workspace;
                    body = createTemplateRequest.body
                } else {
                    workspace = createTemplateRequest['workspace'];
                    body = createTemplateRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 新建模型工作区
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createWorkspace(createWorkspaceRequest?: CreateWorkspaceRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/design/workspaces",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let workspace;

            if (createWorkspaceRequest !== null && createWorkspaceRequest !== undefined) {
                if (createWorkspaceRequest instanceof CreateWorkspaceRequest) {
                    workspace = createWorkspaceRequest.workspace;
                    body = createWorkspaceRequest.body
                } else {
                    workspace = createWorkspaceRequest['workspace'];
                    body = createWorkspaceRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 测试创建数据连接
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        debugDataconnection(debugDataconnectionRequest?: DebugDataconnectionRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/data-connections/validation",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let workspace;

            if (debugDataconnectionRequest !== null && debugDataconnectionRequest !== undefined) {
                if (debugDataconnectionRequest instanceof DebugDataconnectionRequest) {
                    workspace = debugDataconnectionRequest.workspace;
                    body = debugDataconnectionRequest.body
                } else {
                    workspace = debugDataconnectionRequest['workspace'];
                    body = debugDataconnectionRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除应用
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteApp(deleteAppRequest?: DeleteAppRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/service/apps/{app_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let workspace;
            
            let contentType;
            
            let appId;
            
            let dlmType;

            if (deleteAppRequest !== null && deleteAppRequest !== undefined) {
                if (deleteAppRequest instanceof DeleteAppRequest) {
                    workspace = deleteAppRequest.workspace;
                    contentType = deleteAppRequest.contentType;
                    appId = deleteAppRequest.appId;
                    dlmType = deleteAppRequest.dlmType;
                } else {
                    workspace = deleteAppRequest['workspace'];
                    contentType = deleteAppRequest['Content-Type'];
                    appId = deleteAppRequest['app_id'];
                    dlmType = deleteAppRequest['Dlm-Type'];
                }
            }

        
            if (appId === null || appId === undefined) {
            throw new RequiredError('appId','Required parameter appId was null or undefined when calling deleteApp.');
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }
            if (dlmType !== undefined && dlmType !== null) {
                localVarHeaderParameter['Dlm-Type'] = String(dlmType);
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.pathParams = { 'app_id': appId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除审批人
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteApprover(deleteApproverRequest?: DeleteApproverRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/design/approvals/users",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let workspace;
            
            let approverIds;

            if (deleteApproverRequest !== null && deleteApproverRequest !== undefined) {
                if (deleteApproverRequest instanceof DeleteApproverRequest) {
                    workspace = deleteApproverRequest.workspace;
                    approverIds = deleteApproverRequest.approverIds;
                } else {
                    workspace = deleteApproverRequest['workspace'];
                    approverIds = deleteApproverRequest['approver_ids'];
                }
            }

        
            if (approverIds === null || approverIds === undefined) {
                throw new RequiredError('approverIds','Required parameter approverIds was null or undefined when calling deleteApprover.');
            }
            if (approverIds !== null && approverIds !== undefined) {
                localVarQueryParameter['approver_ids'] = approverIds;
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }

            options.queryParams = localVarQueryParameter;
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
                url: "/v3/{project_id}/asset/{guid}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let workspace;
            
            let guid;

            if (deleteAssetRequest !== null && deleteAssetRequest !== undefined) {
                if (deleteAssetRequest instanceof DeleteAssetRequest) {
                    workspace = deleteAssetRequest.workspace;
                    guid = deleteAssetRequest.guid;
                } else {
                    workspace = deleteAssetRequest['workspace'];
                    guid = deleteAssetRequest['guid'];
                }
            }

        
            if (guid === null || guid === undefined) {
            throw new RequiredError('guid','Required parameter guid was null or undefined when calling deleteAsset.');
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }

            options.pathParams = { 'guid': guid, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除业务指标
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteBizMetric(deleteBizMetricRequest?: DeleteBizMetricRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/design/biz-metrics",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let workspace;

            if (deleteBizMetricRequest !== null && deleteBizMetricRequest !== undefined) {
                if (deleteBizMetricRequest instanceof DeleteBizMetricRequest) {
                    workspace = deleteBizMetricRequest.workspace;
                    body = deleteBizMetricRequest.body
                } else {
                    workspace = deleteBizMetricRequest['workspace'];
                    body = deleteBizMetricRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除流程架构
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteCatalog(deleteCatalogRequest?: DeleteCatalogRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/design/biz/catalogs",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let workspace;

            if (deleteCatalogRequest !== null && deleteCatalogRequest !== undefined) {
                if (deleteCatalogRequest instanceof DeleteCatalogRequest) {
                    workspace = deleteCatalogRequest.workspace;
                    body = deleteCatalogRequest.body
                } else {
                    workspace = deleteCatalogRequest['workspace'];
                    body = deleteCatalogRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 移除资产关联分类：
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteClassificationFromEntities(deleteClassificationFromEntitiesRequest?: DeleteClassificationFromEntitiesRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/asset/entities/guid/{guid}/classification",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let workspace;
            
            let guid;

            if (deleteClassificationFromEntitiesRequest !== null && deleteClassificationFromEntitiesRequest !== undefined) {
                if (deleteClassificationFromEntitiesRequest instanceof DeleteClassificationFromEntitiesRequest) {
                    workspace = deleteClassificationFromEntitiesRequest.workspace;
                    guid = deleteClassificationFromEntitiesRequest.guid;
                    body = deleteClassificationFromEntitiesRequest.body
                } else {
                    workspace = deleteClassificationFromEntitiesRequest['workspace'];
                    guid = deleteClassificationFromEntitiesRequest['guid'];
                    body = deleteClassificationFromEntitiesRequest['body'];
                }
            }

        
            if (guid === null || guid === undefined) {
            throw new RequiredError('guid','Required parameter guid was null or undefined when calling deleteClassificationFromEntities.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'guid': guid, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除码表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteCodeTable(deleteCodeTableRequest?: DeleteCodeTableRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/design/code-tables",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let workspace;

            if (deleteCodeTableRequest !== null && deleteCodeTableRequest !== undefined) {
                if (deleteCodeTableRequest instanceof DeleteCodeTableRequest) {
                    workspace = deleteCodeTableRequest.workspace;
                    body = deleteCodeTableRequest.body
                } else {
                    workspace = deleteCodeTableRequest['workspace'];
                    body = deleteCodeTableRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除数据连接
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteDataconnection(deleteDataconnectionRequest?: DeleteDataconnectionRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/data-connections/{data_connection_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let workspace;
            
            let dataConnectionId;

            if (deleteDataconnectionRequest !== null && deleteDataconnectionRequest !== undefined) {
                if (deleteDataconnectionRequest instanceof DeleteDataconnectionRequest) {
                    workspace = deleteDataconnectionRequest.workspace;
                    dataConnectionId = deleteDataconnectionRequest.dataConnectionId;
                } else {
                    workspace = deleteDataconnectionRequest['workspace'];
                    dataConnectionId = deleteDataconnectionRequest['data_connection_id'];
                }
            }

        
            if (dataConnectionId === null || dataConnectionId === undefined) {
            throw new RequiredError('dataConnectionId','Required parameter dataConnectionId was null or undefined when calling deleteDataconnection.');
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }

            options.pathParams = { 'data_connection_id': dataConnectionId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除目录
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteDirectory(deleteDirectoryRequest?: DeleteDirectoryRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/design/directorys",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let workspace;
            
            let ids;

            if (deleteDirectoryRequest !== null && deleteDirectoryRequest !== undefined) {
                if (deleteDirectoryRequest instanceof DeleteDirectoryRequest) {
                    workspace = deleteDirectoryRequest.workspace;
                    ids = deleteDirectoryRequest.ids;
                } else {
                    workspace = deleteDirectoryRequest['workspace'];
                    ids = deleteDirectoryRequest['ids'];
                }
            }

        
            if (ids === null || ids === undefined) {
                throw new RequiredError('ids','Required parameter ids was null or undefined when calling deleteDirectory.');
            }
            if (ids !== null && ids !== undefined) {
                localVarQueryParameter['ids'] = ids;
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除识别规则
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteSecurityDataClassificationRule(deleteSecurityDataClassificationRuleRequest?: DeleteSecurityDataClassificationRuleRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/security/data-classification/rule/{id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let workspace;
            
            let id;

            if (deleteSecurityDataClassificationRuleRequest !== null && deleteSecurityDataClassificationRuleRequest !== undefined) {
                if (deleteSecurityDataClassificationRuleRequest instanceof DeleteSecurityDataClassificationRuleRequest) {
                    workspace = deleteSecurityDataClassificationRuleRequest.workspace;
                    id = deleteSecurityDataClassificationRuleRequest.id;
                } else {
                    workspace = deleteSecurityDataClassificationRuleRequest['workspace'];
                    id = deleteSecurityDataClassificationRuleRequest['id'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling deleteSecurityDataClassificationRule.');
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }

            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 移除资产关联密级
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteSecurityLevelFromEntity(deleteSecurityLevelFromEntityRequest?: DeleteSecurityLevelFromEntityRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{project_id}/asset/entities/guid/{guid}/security-level",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let workspace;
            
            let guid;

            if (deleteSecurityLevelFromEntityRequest !== null && deleteSecurityLevelFromEntityRequest !== undefined) {
                if (deleteSecurityLevelFromEntityRequest instanceof DeleteSecurityLevelFromEntityRequest) {
                    workspace = deleteSecurityLevelFromEntityRequest.workspace;
                    guid = deleteSecurityLevelFromEntityRequest.guid;
                } else {
                    workspace = deleteSecurityLevelFromEntityRequest['workspace'];
                    guid = deleteSecurityLevelFromEntityRequest['guid'];
                }
            }

        
            if (guid === null || guid === undefined) {
            throw new RequiredError('guid','Required parameter guid was null or undefined when calling deleteSecurityLevelFromEntity.');
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }

            options.pathParams = { 'guid': guid, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除权限集
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteSecurityPermissionSet(deleteSecurityPermissionSetRequest?: DeleteSecurityPermissionSetRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/security/permission-sets/{permission_set_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let permissionSetId;
            
            let workspace;

            if (deleteSecurityPermissionSetRequest !== null && deleteSecurityPermissionSetRequest !== undefined) {
                if (deleteSecurityPermissionSetRequest instanceof DeleteSecurityPermissionSetRequest) {
                    permissionSetId = deleteSecurityPermissionSetRequest.permissionSetId;
                    workspace = deleteSecurityPermissionSetRequest.workspace;
                } else {
                    permissionSetId = deleteSecurityPermissionSetRequest['permission_set_id'];
                    workspace = deleteSecurityPermissionSetRequest['workspace'];
                }
            }

        
            if (permissionSetId === null || permissionSetId === undefined) {
            throw new RequiredError('permissionSetId','Required parameter permissionSetId was null or undefined when calling deleteSecurityPermissionSet.');
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }

            options.pathParams = { 'permission_set_id': permissionSetId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除指定的id的密级
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteSecuritySecrecyLevel(deleteSecuritySecrecyLevelRequest?: DeleteSecuritySecrecyLevelRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/security/data-classification/secrecy-level/{id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let workspace;
            
            let id;

            if (deleteSecuritySecrecyLevelRequest !== null && deleteSecuritySecrecyLevelRequest !== undefined) {
                if (deleteSecuritySecrecyLevelRequest instanceof DeleteSecuritySecrecyLevelRequest) {
                    workspace = deleteSecuritySecrecyLevelRequest.workspace;
                    id = deleteSecuritySecrecyLevelRequest.id;
                } else {
                    workspace = deleteSecuritySecrecyLevelRequest['workspace'];
                    id = deleteSecuritySecrecyLevelRequest['id'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling deleteSecuritySecrecyLevel.');
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }

            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 批量删除目录
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteServiceCatalog(deleteServiceCatalogRequest?: DeleteServiceCatalogRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/service/servicecatalogs/batch-delete",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let workspace;
            
            let contentType;
            
            let dlmType;

            if (deleteServiceCatalogRequest !== null && deleteServiceCatalogRequest !== undefined) {
                if (deleteServiceCatalogRequest instanceof DeleteServiceCatalogRequest) {
                    workspace = deleteServiceCatalogRequest.workspace;
                    contentType = deleteServiceCatalogRequest.contentType;
                    body = deleteServiceCatalogRequest.body
                    dlmType = deleteServiceCatalogRequest.dlmType;
                } else {
                    workspace = deleteServiceCatalogRequest['workspace'];
                    contentType = deleteServiceCatalogRequest['Content-Type'];
                    body = deleteServiceCatalogRequest['body'];
                    dlmType = deleteServiceCatalogRequest['Dlm-Type'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }
            if (dlmType !== undefined && dlmType !== null) {
                localVarHeaderParameter['Dlm-Type'] = String(dlmType);
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除数据标准
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteStandard(deleteStandardRequest?: DeleteStandardRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/design/standards",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let workspace;

            if (deleteStandardRequest !== null && deleteStandardRequest !== undefined) {
                if (deleteStandardRequest instanceof DeleteStandardRequest) {
                    workspace = deleteStandardRequest.workspace;
                    body = deleteStandardRequest.body
                } else {
                    workspace = deleteStandardRequest['workspace'];
                    body = deleteStandardRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除数据标准模板
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteStandardTemplate(deleteStandardTemplateRequest?: DeleteStandardTemplateRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/design/standards/templates",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let workspace;
            
            let ids;

            if (deleteStandardTemplateRequest !== null && deleteStandardTemplateRequest !== undefined) {
                if (deleteStandardTemplateRequest instanceof DeleteStandardTemplateRequest) {
                    workspace = deleteStandardTemplateRequest.workspace;
                    ids = deleteStandardTemplateRequest.ids;
                } else {
                    workspace = deleteStandardTemplateRequest['workspace'];
                    ids = deleteStandardTemplateRequest['ids'];
                }
            }

        
            if (ids === null || ids === undefined) {
                throw new RequiredError('ids','Required parameter ids was null or undefined when calling deleteStandardTemplate.');
            }
            if (ids !== null && ids !== undefined) {
                localVarQueryParameter['ids'] = ids;
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除主题
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteSubject(deleteSubjectRequest?: DeleteSubjectRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/design/subjects",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let workspace;

            if (deleteSubjectRequest !== null && deleteSubjectRequest !== undefined) {
                if (deleteSubjectRequest instanceof DeleteSubjectRequest) {
                    workspace = deleteSubjectRequest.workspace;
                    body = deleteSubjectRequest.body
                } else {
                    workspace = deleteSubjectRequest['workspace'];
                    body = deleteSubjectRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除主题(新)
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteSubjectNew(deleteSubjectNewRequest?: DeleteSubjectNewRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{project_id}/design/subjects",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let workspace;

            if (deleteSubjectNewRequest !== null && deleteSubjectNewRequest !== undefined) {
                if (deleteSubjectNewRequest instanceof DeleteSubjectNewRequest) {
                    workspace = deleteSubjectNewRequest.workspace;
                    body = deleteSubjectNewRequest.body
                } else {
                    workspace = deleteSubjectNewRequest['workspace'];
                    body = deleteSubjectNewRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除一个模型实体，包括逻辑实体或物理数据表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteTableModel(deleteTableModelRequest?: DeleteTableModelRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/design/table-model",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let workspace;

            if (deleteTableModelRequest !== null && deleteTableModelRequest !== undefined) {
                if (deleteTableModelRequest instanceof DeleteTableModelRequest) {
                    workspace = deleteTableModelRequest.workspace;
                    body = deleteTableModelRequest.body
                } else {
                    workspace = deleteTableModelRequest['workspace'];
                    body = deleteTableModelRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除单个采集任务
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteTaskInfo(deleteTaskInfoRequest?: DeleteTaskInfoRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{project_id}/metadata/tasks/{task_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let workspace;
            
            let taskId;

            if (deleteTaskInfoRequest !== null && deleteTaskInfoRequest !== undefined) {
                if (deleteTaskInfoRequest instanceof DeleteTaskInfoRequest) {
                    workspace = deleteTaskInfoRequest.workspace;
                    taskId = deleteTaskInfoRequest.taskId;
                } else {
                    workspace = deleteTaskInfoRequest['workspace'];
                    taskId = deleteTaskInfoRequest['task_id'];
                }
            }

        
            if (taskId === null || taskId === undefined) {
            throw new RequiredError('taskId','Required parameter taskId was null or undefined when calling deleteTaskInfo.');
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }

            options.pathParams = { 'task_id': taskId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除模型工作区
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteWorkspaces(deleteWorkspacesRequest?: DeleteWorkspacesRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/design/workspaces",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let workspace;
            
            let ids;

            if (deleteWorkspacesRequest !== null && deleteWorkspacesRequest !== undefined) {
                if (deleteWorkspacesRequest instanceof DeleteWorkspacesRequest) {
                    workspace = deleteWorkspacesRequest.workspace;
                    ids = deleteWorkspacesRequest.ids;
                } else {
                    workspace = deleteWorkspacesRequest['workspace'];
                    ids = deleteWorkspacesRequest['ids'];
                }
            }

        
            if (ids === null || ids === undefined) {
                throw new RequiredError('ids','Required parameter ids was null or undefined when calling deleteWorkspaces.');
            }
            if (ids !== null && ids !== undefined) {
                localVarQueryParameter['ids'] = ids;
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除工作空间用户
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteWorkspaceusers(deleteWorkspaceusersRequest?: DeleteWorkspaceusersRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/{workspace_id}/delete-users",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let workspaceId;

            if (deleteWorkspaceusersRequest !== null && deleteWorkspaceusersRequest !== undefined) {
                if (deleteWorkspaceusersRequest instanceof DeleteWorkspaceusersRequest) {
                    workspaceId = deleteWorkspaceusersRequest.workspaceId;
                    body = deleteWorkspaceusersRequest.body
                } else {
                    workspaceId = deleteWorkspaceusersRequest['workspace_id'];
                    body = deleteWorkspaceusersRequest['body'];
                }
            }

        
            if (workspaceId === null || workspaceId === undefined) {
            throw new RequiredError('workspaceId','Required parameter workspaceId was null or undefined when calling deleteWorkspaceusers.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'workspace_id': workspaceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 发布任务包
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deployFactoryPackages(deployFactoryPackagesRequest?: DeployFactoryPackagesRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/factory/release-packages/deploy",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let workspace;
            
            let contentType;

            if (deployFactoryPackagesRequest !== null && deployFactoryPackagesRequest !== undefined) {
                if (deployFactoryPackagesRequest instanceof DeployFactoryPackagesRequest) {
                    workspace = deployFactoryPackagesRequest.workspace;
                    contentType = deployFactoryPackagesRequest.contentType;
                    body = deployFactoryPackagesRequest.body
                } else {
                    workspace = deployFactoryPackagesRequest['workspace'];
                    contentType = deployFactoryPackagesRequest['Content-Type'];
                    body = deployFactoryPackagesRequest['body'];
                }
            }

        
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 启动、调度、停止采集任务
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        executeTaskAction(executeTaskActionRequest?: ExecuteTaskActionRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/metadata/tasks/{task_id}/action",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let workspace;
            
            let taskId;
            
            let action;

            if (executeTaskActionRequest !== null && executeTaskActionRequest !== undefined) {
                if (executeTaskActionRequest instanceof ExecuteTaskActionRequest) {
                    workspace = executeTaskActionRequest.workspace;
                    taskId = executeTaskActionRequest.taskId;
                    action = executeTaskActionRequest.action;
                } else {
                    workspace = executeTaskActionRequest['workspace'];
                    taskId = executeTaskActionRequest['task_id'];
                    action = executeTaskActionRequest['action'];
                }
            }

        
            if (taskId === null || taskId === undefined) {
            throw new RequiredError('taskId','Required parameter taskId was null or undefined when calling executeTaskAction.');
            }
            if (action === null || action === undefined) {
                throw new RequiredError('action','Required parameter action was null or undefined when calling executeTaskAction.');
            }
            if (action !== null && action !== undefined) {
                localVarQueryParameter['action'] = action;
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'task_id': taskId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 用于导入主题
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        importCatalogs(importCatalogsRequest?: ImportCatalogsRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/design/catalogs/action",
                contentType: "multipart/form-data",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            const localVarFormParams = new FormData();
            
            let workspace;
            
            let actionId;
            let file;
            
            
            let skipExist;

            if (importCatalogsRequest !== null && importCatalogsRequest !== undefined) {
                if (importCatalogsRequest instanceof ImportCatalogsRequest) {
                    workspace = importCatalogsRequest.workspace;
                    actionId = importCatalogsRequest.actionId;
                    file = importCatalogsRequest.body?.file;
                    skipExist = importCatalogsRequest.skipExist;
                } else {
                    workspace = importCatalogsRequest['workspace'];
                    actionId = importCatalogsRequest['action-id'];
                    file = importCatalogsRequest['body']['file'];
                    skipExist = importCatalogsRequest['skip-exist'];
                }
            }

        
            if (actionId === null || actionId === undefined) {
                throw new RequiredError('actionId','Required parameter actionId was null or undefined when calling importCatalogs.');
            }
            if (actionId !== null && actionId !== undefined) {
                localVarQueryParameter['action-id'] = actionId;
            }
            if (file === null || file === undefined) {
            throw new RequiredError('file','Required parameter file was null or undefined when calling importCatalogs.');
            }
            if (skipExist !== null && skipExist !== undefined) {
                localVarQueryParameter['skip-exist'] = skipExist;
            }
            if (file !== undefined) { 
                localVarFormParams.append('file', file as any);
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }
            localVarHeaderParameter['Content-Type'] = 'application/x-www-form-urlencoded';
            localVarHeaderParameter['Content-Type'] = 'multipart/form-data';
            options.data = localVarFormParams;
            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 血缘查询
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        importLineage(importLineageRequest?: ImportLineageRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/lineage/import",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let workspace;

            if (importLineageRequest !== null && importLineageRequest !== undefined) {
                if (importLineageRequest instanceof ImportLineageRequest) {
                    workspace = importLineageRequest.workspace;
                    body = importLineageRequest.body
                } else {
                    workspace = importLineageRequest['workspace'];
                    body = importLineageRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 导入模型，关系建模，维度建模，码表，业务指标以及流程架构
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        importModels(importModelsRequest?: ImportModelsRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/design/models/action",
                contentType: "multipart/form-data",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            const localVarFormParams = new FormData();
            
            let workspace;
            
            let actionId;
            let file;
            
            
            let modelId;
            
            let directoryId;
            
            let skipExist;

            if (importModelsRequest !== null && importModelsRequest !== undefined) {
                if (importModelsRequest instanceof ImportModelsRequest) {
                    workspace = importModelsRequest.workspace;
                    actionId = importModelsRequest.actionId;
                    file = importModelsRequest.body?.file;
                    modelId = importModelsRequest.modelId;
                    directoryId = importModelsRequest.directoryId;
                    skipExist = importModelsRequest.skipExist;
                } else {
                    workspace = importModelsRequest['workspace'];
                    actionId = importModelsRequest['action-id'];
                    file = importModelsRequest['body']['file'];
                    modelId = importModelsRequest['model_id'];
                    directoryId = importModelsRequest['directory_id'];
                    skipExist = importModelsRequest['skip-exist'];
                }
            }

        
            if (actionId === null || actionId === undefined) {
                throw new RequiredError('actionId','Required parameter actionId was null or undefined when calling importModels.');
            }
            if (actionId !== null && actionId !== undefined) {
                localVarQueryParameter['action-id'] = actionId;
            }
            if (file === null || file === undefined) {
            throw new RequiredError('file','Required parameter file was null or undefined when calling importModels.');
            }
            if (modelId !== null && modelId !== undefined) {
                localVarQueryParameter['model_id'] = modelId;
            }
            if (directoryId !== null && directoryId !== undefined) {
                localVarQueryParameter['directory_id'] = directoryId;
            }
            if (skipExist !== null && skipExist !== undefined) {
                localVarQueryParameter['skip-exist'] = skipExist;
            }
            if (file !== undefined) { 
                localVarFormParams.append('file', file as any);
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }
            localVarHeaderParameter['Content-Type'] = 'application/x-www-form-urlencoded';
            localVarHeaderParameter['Content-Type'] = 'multipart/form-data';
            options.data = localVarFormParams;
            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询导入excel的处理结果
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        importResult(importResultRequest?: ImportResultRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/design/catelogs/process-import",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let workspace;
            
            let uuid;

            if (importResultRequest !== null && importResultRequest !== undefined) {
                if (importResultRequest instanceof ImportResultRequest) {
                    workspace = importResultRequest.workspace;
                    uuid = importResultRequest.uuid;
                } else {
                    workspace = importResultRequest['workspace'];
                    uuid = importResultRequest['uuid'];
                }
            }

        
            if (uuid === null || uuid === undefined) {
                throw new RequiredError('uuid','Required parameter uuid was null or undefined when calling importResult.');
            }
            if (uuid !== null && uuid !== undefined) {
                localVarQueryParameter['uuid'] = uuid;
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 初始化模板
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        initializeStandardTemplate(initializeStandardTemplateRequest?: InitializeStandardTemplateRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/design/standards/templates/action",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let workspace;
            
            let actionId;

            if (initializeStandardTemplateRequest !== null && initializeStandardTemplateRequest !== undefined) {
                if (initializeStandardTemplateRequest instanceof InitializeStandardTemplateRequest) {
                    workspace = initializeStandardTemplateRequest.workspace;
                    actionId = initializeStandardTemplateRequest.actionId;
                    body = initializeStandardTemplateRequest.body
                } else {
                    workspace = initializeStandardTemplateRequest['workspace'];
                    actionId = initializeStandardTemplateRequest['action-id'];
                    body = initializeStandardTemplateRequest['body'];
                }
            }

        
            if (actionId === null || actionId === undefined) {
                throw new RequiredError('actionId','Required parameter actionId was null or undefined when calling initializeStandardTemplate.');
            }
            if (actionId !== null && actionId !== undefined) {
                localVarQueryParameter['action-id'] = actionId;
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 通过中英文名称、创建者、审核人、状态、修改时间分页查找汇总表信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAggregationLogicTables(listAggregationLogicTablesRequest?: ListAggregationLogicTablesRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/design/aggregation-logic-tables",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let workspace;
            
            let name;
            
            let createBy;
            
            let approver;
            
            let owner;
            
            let status;
            
            let syncStatus;
            
            let syncKey;
            
            let l3Id;
            
            let beginTime;
            
            let endTime;
            
            let limit;
            
            let offset;
            
            let bizCatalogId;
            
            let autoGenerate;

            if (listAggregationLogicTablesRequest !== null && listAggregationLogicTablesRequest !== undefined) {
                if (listAggregationLogicTablesRequest instanceof ListAggregationLogicTablesRequest) {
                    workspace = listAggregationLogicTablesRequest.workspace;
                    name = listAggregationLogicTablesRequest.name;
                    createBy = listAggregationLogicTablesRequest.createBy;
                    approver = listAggregationLogicTablesRequest.approver;
                    owner = listAggregationLogicTablesRequest.owner;
                    status = listAggregationLogicTablesRequest.status;
                    syncStatus = listAggregationLogicTablesRequest.syncStatus;
                    syncKey = listAggregationLogicTablesRequest.syncKey;
                    l3Id = listAggregationLogicTablesRequest.l3Id;
                    beginTime = listAggregationLogicTablesRequest.beginTime;
                    endTime = listAggregationLogicTablesRequest.endTime;
                    limit = listAggregationLogicTablesRequest.limit;
                    offset = listAggregationLogicTablesRequest.offset;
                    bizCatalogId = listAggregationLogicTablesRequest.bizCatalogId;
                    autoGenerate = listAggregationLogicTablesRequest.autoGenerate;
                } else {
                    workspace = listAggregationLogicTablesRequest['workspace'];
                    name = listAggregationLogicTablesRequest['name'];
                    createBy = listAggregationLogicTablesRequest['create_by'];
                    approver = listAggregationLogicTablesRequest['approver'];
                    owner = listAggregationLogicTablesRequest['owner'];
                    status = listAggregationLogicTablesRequest['status'];
                    syncStatus = listAggregationLogicTablesRequest['sync_status'];
                    syncKey = listAggregationLogicTablesRequest['sync_key'];
                    l3Id = listAggregationLogicTablesRequest['l3_id'];
                    beginTime = listAggregationLogicTablesRequest['begin_time'];
                    endTime = listAggregationLogicTablesRequest['end_time'];
                    limit = listAggregationLogicTablesRequest['limit'];
                    offset = listAggregationLogicTablesRequest['offset'];
                    bizCatalogId = listAggregationLogicTablesRequest['biz_catalog_id'];
                    autoGenerate = listAggregationLogicTablesRequest['auto_generate'];
                }
            }

        
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (createBy !== null && createBy !== undefined) {
                localVarQueryParameter['create_by'] = createBy;
            }
            if (approver !== null && approver !== undefined) {
                localVarQueryParameter['approver'] = approver;
            }
            if (owner !== null && owner !== undefined) {
                localVarQueryParameter['owner'] = owner;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (syncStatus !== null && syncStatus !== undefined) {
                localVarQueryParameter['sync_status'] = syncStatus;
            }
            if (syncKey !== null && syncKey !== undefined) {
                localVarQueryParameter['sync_key'] = syncKey;
            }
            if (l3Id !== null && l3Id !== undefined) {
                localVarQueryParameter['l3_id'] = l3Id;
            }
            if (beginTime !== null && beginTime !== undefined) {
                localVarQueryParameter['begin_time'] = beginTime;
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (bizCatalogId !== null && bizCatalogId !== undefined) {
                localVarQueryParameter['biz_catalog_id'] = bizCatalogId;
            }
            if (autoGenerate !== null && autoGenerate !== undefined) {
                localVarQueryParameter['auto_generate'] = autoGenerate;
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取当前目录下的所有类型列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAllCatalogList(listAllCatalogListRequest?: ListAllCatalogListRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/service/servicecatalogs/{catalog_id}/detail",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let workspace;
            
            let contentType;
            
            let catalogId;
            
            let dlmType;
            
            let offset;
            
            let limit;

            if (listAllCatalogListRequest !== null && listAllCatalogListRequest !== undefined) {
                if (listAllCatalogListRequest instanceof ListAllCatalogListRequest) {
                    workspace = listAllCatalogListRequest.workspace;
                    contentType = listAllCatalogListRequest.contentType;
                    catalogId = listAllCatalogListRequest.catalogId;
                    dlmType = listAllCatalogListRequest.dlmType;
                    offset = listAllCatalogListRequest.offset;
                    limit = listAllCatalogListRequest.limit;
                } else {
                    workspace = listAllCatalogListRequest['workspace'];
                    contentType = listAllCatalogListRequest['Content-Type'];
                    catalogId = listAllCatalogListRequest['catalog_id'];
                    dlmType = listAllCatalogListRequest['Dlm-Type'];
                    offset = listAllCatalogListRequest['offset'];
                    limit = listAllCatalogListRequest['limit'];
                }
            }

        
            if (catalogId === null || catalogId === undefined) {
            throw new RequiredError('catalogId','Required parameter catalogId was null or undefined when calling listAllCatalogList.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }
            if (dlmType !== undefined && dlmType !== null) {
                localVarHeaderParameter['Dlm-Type'] = String(dlmType);
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'catalog_id': catalogId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取数据标准
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAllStandards(listAllStandardsRequest?: ListAllStandardsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/design/standards",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let workspace;
            
            let directoryId;
            
            let beginTime;
            
            let endTime;
            
            let limit;
            
            let offset;

            if (listAllStandardsRequest !== null && listAllStandardsRequest !== undefined) {
                if (listAllStandardsRequest instanceof ListAllStandardsRequest) {
                    workspace = listAllStandardsRequest.workspace;
                    directoryId = listAllStandardsRequest.directoryId;
                    beginTime = listAllStandardsRequest.beginTime;
                    endTime = listAllStandardsRequest.endTime;
                    limit = listAllStandardsRequest.limit;
                    offset = listAllStandardsRequest.offset;
                } else {
                    workspace = listAllStandardsRequest['workspace'];
                    directoryId = listAllStandardsRequest['directory_id'];
                    beginTime = listAllStandardsRequest['begin_time'];
                    endTime = listAllStandardsRequest['end_time'];
                    limit = listAllStandardsRequest['limit'];
                    offset = listAllStandardsRequest['offset'];
                }
            }

        
            if (directoryId !== null && directoryId !== undefined) {
                localVarQueryParameter['directory_id'] = directoryId;
            }
            if (beginTime !== null && beginTime !== undefined) {
                localVarQueryParameter['begin_time'] = beginTime;
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 从信息架构中查询多种类型的表信息，包括逻辑实体、物理表、维度表、事实表、汇总表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAllTables(listAllTablesRequest?: ListAllTablesRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/design/all-tables",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let workspace;
            
            let bizTypeList;
            
            let name;
            
            let createBy;
            
            let status;
            
            let syncStatus;
            
            let syncKey;
            
            let bizCatalogId;
            
            let beginTime;
            
            let endTime;
            
            let limit;
            
            let offset;
            
            let bizCatalogIdList;

            if (listAllTablesRequest !== null && listAllTablesRequest !== undefined) {
                if (listAllTablesRequest instanceof ListAllTablesRequest) {
                    workspace = listAllTablesRequest.workspace;
                    bizTypeList = listAllTablesRequest.bizTypeList;
                    name = listAllTablesRequest.name;
                    createBy = listAllTablesRequest.createBy;
                    status = listAllTablesRequest.status;
                    syncStatus = listAllTablesRequest.syncStatus;
                    syncKey = listAllTablesRequest.syncKey;
                    bizCatalogId = listAllTablesRequest.bizCatalogId;
                    beginTime = listAllTablesRequest.beginTime;
                    endTime = listAllTablesRequest.endTime;
                    limit = listAllTablesRequest.limit;
                    offset = listAllTablesRequest.offset;
                    bizCatalogIdList = listAllTablesRequest.bizCatalogIdList;
                } else {
                    workspace = listAllTablesRequest['workspace'];
                    bizTypeList = listAllTablesRequest['biz_type_list'];
                    name = listAllTablesRequest['name'];
                    createBy = listAllTablesRequest['create_by'];
                    status = listAllTablesRequest['status'];
                    syncStatus = listAllTablesRequest['sync_status'];
                    syncKey = listAllTablesRequest['sync_key'];
                    bizCatalogId = listAllTablesRequest['biz_catalog_id'];
                    beginTime = listAllTablesRequest['begin_time'];
                    endTime = listAllTablesRequest['end_time'];
                    limit = listAllTablesRequest['limit'];
                    offset = listAllTablesRequest['offset'];
                    bizCatalogIdList = listAllTablesRequest['biz_catalog_id_list'];
                }
            }

        
            if (bizTypeList === null || bizTypeList === undefined) {
                throw new RequiredError('bizTypeList','Required parameter bizTypeList was null or undefined when calling listAllTables.');
            }
            if (bizTypeList !== null && bizTypeList !== undefined) {
                localVarQueryParameter['biz_type_list'] = bizTypeList;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (createBy !== null && createBy !== undefined) {
                localVarQueryParameter['create_by'] = createBy;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (syncStatus !== null && syncStatus !== undefined) {
                localVarQueryParameter['sync_status'] = syncStatus;
            }
            if (syncKey !== null && syncKey !== undefined) {
                localVarQueryParameter['sync_key'] = syncKey;
            }
            if (bizCatalogId !== null && bizCatalogId !== undefined) {
                localVarQueryParameter['biz_catalog_id'] = bizCatalogId;
            }
            if (beginTime !== null && beginTime !== undefined) {
                localVarQueryParameter['begin_time'] = beginTime;
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (bizCatalogIdList !== null && bizCatalogIdList !== undefined) {
                localVarQueryParameter['biz_catalog_id_list'] = bizCatalogIdList;
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取当前目录下的api列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listApiCatalogList(listApiCatalogListRequest?: ListApiCatalogListRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/service/servicecatalogs/{catalog_id}/apis",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let workspace;
            
            let contentType;
            
            let catalogId;
            
            let dlmType;
            
            let offset;
            
            let limit;

            if (listApiCatalogListRequest !== null && listApiCatalogListRequest !== undefined) {
                if (listApiCatalogListRequest instanceof ListApiCatalogListRequest) {
                    workspace = listApiCatalogListRequest.workspace;
                    contentType = listApiCatalogListRequest.contentType;
                    catalogId = listApiCatalogListRequest.catalogId;
                    dlmType = listApiCatalogListRequest.dlmType;
                    offset = listApiCatalogListRequest.offset;
                    limit = listApiCatalogListRequest.limit;
                } else {
                    workspace = listApiCatalogListRequest['workspace'];
                    contentType = listApiCatalogListRequest['Content-Type'];
                    catalogId = listApiCatalogListRequest['catalog_id'];
                    dlmType = listApiCatalogListRequest['Dlm-Type'];
                    offset = listApiCatalogListRequest['offset'];
                    limit = listApiCatalogListRequest['limit'];
                }
            }

        
            if (catalogId === null || catalogId === undefined) {
            throw new RequiredError('catalogId','Required parameter catalogId was null or undefined when calling listApiCatalogList.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }
            if (dlmType !== undefined && dlmType !== null) {
                localVarHeaderParameter['Dlm-Type'] = String(dlmType);
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'catalog_id': catalogId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询指定api 应用调用topN
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listApiTopN(listApiTopNRequest?: ListApiTopNRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/service/statistic/apis-top-n/{api_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let workspace;
            
            let contentType;
            
            let apiId;
            
            let startTime;
            
            let endTime;
            
            let timeUnit;
            
            let topNum;
            
            let orderBy;
            
            let dlmType;
            
            let instanceId;

            if (listApiTopNRequest !== null && listApiTopNRequest !== undefined) {
                if (listApiTopNRequest instanceof ListApiTopNRequest) {
                    workspace = listApiTopNRequest.workspace;
                    contentType = listApiTopNRequest.contentType;
                    apiId = listApiTopNRequest.apiId;
                    startTime = listApiTopNRequest.startTime;
                    endTime = listApiTopNRequest.endTime;
                    timeUnit = listApiTopNRequest.timeUnit;
                    topNum = listApiTopNRequest.topNum;
                    orderBy = listApiTopNRequest.orderBy;
                    dlmType = listApiTopNRequest.dlmType;
                    instanceId = listApiTopNRequest.instanceId;
                } else {
                    workspace = listApiTopNRequest['workspace'];
                    contentType = listApiTopNRequest['Content-Type'];
                    apiId = listApiTopNRequest['api_id'];
                    startTime = listApiTopNRequest['start_time'];
                    endTime = listApiTopNRequest['end_time'];
                    timeUnit = listApiTopNRequest['time_unit'];
                    topNum = listApiTopNRequest['top_num'];
                    orderBy = listApiTopNRequest['order_by'];
                    dlmType = listApiTopNRequest['Dlm-Type'];
                    instanceId = listApiTopNRequest['instance_id'];
                }
            }

        
            if (apiId === null || apiId === undefined) {
            throw new RequiredError('apiId','Required parameter apiId was null or undefined when calling listApiTopN.');
            }
            if (startTime === null || startTime === undefined) {
                throw new RequiredError('startTime','Required parameter startTime was null or undefined when calling listApiTopN.');
            }
            if (startTime !== null && startTime !== undefined) {
                localVarQueryParameter['start_time'] = startTime;
            }
            if (endTime === null || endTime === undefined) {
                throw new RequiredError('endTime','Required parameter endTime was null or undefined when calling listApiTopN.');
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }
            if (timeUnit === null || timeUnit === undefined) {
                throw new RequiredError('timeUnit','Required parameter timeUnit was null or undefined when calling listApiTopN.');
            }
            if (timeUnit !== null && timeUnit !== undefined) {
                localVarQueryParameter['time_unit'] = timeUnit;
            }
            if (topNum === null || topNum === undefined) {
                throw new RequiredError('topNum','Required parameter topNum was null or undefined when calling listApiTopN.');
            }
            if (topNum !== null && topNum !== undefined) {
                localVarQueryParameter['top_num'] = topNum;
            }
            if (orderBy === null || orderBy === undefined) {
                throw new RequiredError('orderBy','Required parameter orderBy was null or undefined when calling listApiTopN.');
            }
            if (orderBy !== null && orderBy !== undefined) {
                localVarQueryParameter['order_by'] = orderBy;
            }
            if (instanceId !== null && instanceId !== undefined) {
                localVarQueryParameter['instance_id'] = instanceId;
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }
            if (dlmType !== undefined && dlmType !== null) {
                localVarHeaderParameter['Dlm-Type'] = String(dlmType);
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'api_id': apiId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取网关分组
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listApicGroups(listApicGroupsRequest?: ListApicGroupsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/service/apigw/instances/{apig_instance_id}/groups",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let workspace;
            
            let contentType;
            
            let apigInstanceId;
            
            let apigType;
            
            let dlmType;
            
            let limit;
            
            let offset;

            if (listApicGroupsRequest !== null && listApicGroupsRequest !== undefined) {
                if (listApicGroupsRequest instanceof ListApicGroupsRequest) {
                    workspace = listApicGroupsRequest.workspace;
                    contentType = listApicGroupsRequest.contentType;
                    apigInstanceId = listApicGroupsRequest.apigInstanceId;
                    apigType = listApicGroupsRequest.apigType;
                    dlmType = listApicGroupsRequest.dlmType;
                    limit = listApicGroupsRequest.limit;
                    offset = listApicGroupsRequest.offset;
                } else {
                    workspace = listApicGroupsRequest['workspace'];
                    contentType = listApicGroupsRequest['Content-Type'];
                    apigInstanceId = listApicGroupsRequest['apig_instance_id'];
                    apigType = listApicGroupsRequest['apig_type'];
                    dlmType = listApicGroupsRequest['Dlm-Type'];
                    limit = listApicGroupsRequest['limit'];
                    offset = listApicGroupsRequest['offset'];
                }
            }

        
            if (apigInstanceId === null || apigInstanceId === undefined) {
            throw new RequiredError('apigInstanceId','Required parameter apigInstanceId was null or undefined when calling listApicGroups.');
            }
            if (apigType === null || apigType === undefined) {
                throw new RequiredError('apigType','Required parameter apigType was null or undefined when calling listApicGroups.');
            }
            if (apigType !== null && apigType !== undefined) {
                localVarQueryParameter['apig_type'] = apigType;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }
            if (dlmType !== undefined && dlmType !== null) {
                localVarHeaderParameter['Dlm-Type'] = String(dlmType);
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'apig_instance_id': apigInstanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取网关实例
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listApicInstances(listApicInstancesRequest?: ListApicInstancesRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/service/apigw/instances",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let workspace;
            
            let contentType;
            
            let apigType;
            
            let dlmType;
            
            let limit;
            
            let offset;

            if (listApicInstancesRequest !== null && listApicInstancesRequest !== undefined) {
                if (listApicInstancesRequest instanceof ListApicInstancesRequest) {
                    workspace = listApicInstancesRequest.workspace;
                    contentType = listApicInstancesRequest.contentType;
                    apigType = listApicInstancesRequest.apigType;
                    dlmType = listApicInstancesRequest.dlmType;
                    limit = listApicInstancesRequest.limit;
                    offset = listApicInstancesRequest.offset;
                } else {
                    workspace = listApicInstancesRequest['workspace'];
                    contentType = listApicInstancesRequest['Content-Type'];
                    apigType = listApicInstancesRequest['apig_type'];
                    dlmType = listApicInstancesRequest['Dlm-Type'];
                    limit = listApicInstancesRequest['limit'];
                    offset = listApicInstancesRequest['offset'];
                }
            }

        
            if (apigType === null || apigType === undefined) {
                throw new RequiredError('apigType','Required parameter apigType was null or undefined when calling listApicInstances.');
            }
            if (apigType !== null && apigType !== undefined) {
                localVarQueryParameter['apig_type'] = apigType;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }
            if (dlmType !== undefined && dlmType !== null) {
                localVarHeaderParameter['Dlm-Type'] = String(dlmType);
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询api 服务调用topN
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listApisTop(listApisTopRequest?: ListApisTopRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/service/statistic/apis-top-n",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let workspace;
            
            let contentType;
            
            let startTime;
            
            let endTime;
            
            let timeUnit;
            
            let topNum;
            
            let orderBy;
            
            let dlmType;
            
            let instanceId;

            if (listApisTopRequest !== null && listApisTopRequest !== undefined) {
                if (listApisTopRequest instanceof ListApisTopRequest) {
                    workspace = listApisTopRequest.workspace;
                    contentType = listApisTopRequest.contentType;
                    startTime = listApisTopRequest.startTime;
                    endTime = listApisTopRequest.endTime;
                    timeUnit = listApisTopRequest.timeUnit;
                    topNum = listApisTopRequest.topNum;
                    orderBy = listApisTopRequest.orderBy;
                    dlmType = listApisTopRequest.dlmType;
                    instanceId = listApisTopRequest.instanceId;
                } else {
                    workspace = listApisTopRequest['workspace'];
                    contentType = listApisTopRequest['Content-Type'];
                    startTime = listApisTopRequest['start_time'];
                    endTime = listApisTopRequest['end_time'];
                    timeUnit = listApisTopRequest['time_unit'];
                    topNum = listApisTopRequest['top_num'];
                    orderBy = listApisTopRequest['order_by'];
                    dlmType = listApisTopRequest['Dlm-Type'];
                    instanceId = listApisTopRequest['instance_id'];
                }
            }

        
            if (startTime === null || startTime === undefined) {
                throw new RequiredError('startTime','Required parameter startTime was null or undefined when calling listApisTop.');
            }
            if (startTime !== null && startTime !== undefined) {
                localVarQueryParameter['start_time'] = startTime;
            }
            if (endTime === null || endTime === undefined) {
                throw new RequiredError('endTime','Required parameter endTime was null or undefined when calling listApisTop.');
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }
            if (timeUnit === null || timeUnit === undefined) {
                throw new RequiredError('timeUnit','Required parameter timeUnit was null or undefined when calling listApisTop.');
            }
            if (timeUnit !== null && timeUnit !== undefined) {
                localVarQueryParameter['time_unit'] = timeUnit;
            }
            if (topNum === null || topNum === undefined) {
                throw new RequiredError('topNum','Required parameter topNum was null or undefined when calling listApisTop.');
            }
            if (topNum !== null && topNum !== undefined) {
                localVarQueryParameter['top_num'] = topNum;
            }
            if (orderBy === null || orderBy === undefined) {
                throw new RequiredError('orderBy','Required parameter orderBy was null or undefined when calling listApisTop.');
            }
            if (orderBy !== null && orderBy !== undefined) {
                localVarQueryParameter['order_by'] = orderBy;
            }
            if (instanceId !== null && instanceId !== undefined) {
                localVarQueryParameter['instance_id'] = instanceId;
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }
            if (dlmType !== undefined && dlmType !== null) {
                localVarHeaderParameter['Dlm-Type'] = String(dlmType);
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询申请列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listApply(listApplyRequest?: ListApplyRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/service/applys",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let workspace;
            
            let contentType;
            
            let dlmType;
            
            let offset;
            
            let limit;
            
            let apiName;
            
            let queryType;

            if (listApplyRequest !== null && listApplyRequest !== undefined) {
                if (listApplyRequest instanceof ListApplyRequest) {
                    workspace = listApplyRequest.workspace;
                    contentType = listApplyRequest.contentType;
                    dlmType = listApplyRequest.dlmType;
                    offset = listApplyRequest.offset;
                    limit = listApplyRequest.limit;
                    apiName = listApplyRequest.apiName;
                    queryType = listApplyRequest.queryType;
                } else {
                    workspace = listApplyRequest['workspace'];
                    contentType = listApplyRequest['Content-Type'];
                    dlmType = listApplyRequest['Dlm-Type'];
                    offset = listApplyRequest['offset'];
                    limit = listApplyRequest['limit'];
                    apiName = listApplyRequest['api_name'];
                    queryType = listApplyRequest['query_type'];
                }
            }

        
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (apiName !== null && apiName !== undefined) {
                localVarQueryParameter['api_name'] = apiName;
            }
            if (queryType !== null && queryType !== undefined) {
                localVarQueryParameter['query_type'] = queryType;
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }
            if (dlmType !== undefined && dlmType !== null) {
                localVarHeaderParameter['Dlm-Type'] = String(dlmType);
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询审批人列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listApprovers(listApproversRequest?: ListApproversRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/design/approvals/users",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let workspace;
            
            let approverName;
            
            let limit;
            
            let offset;

            if (listApproversRequest !== null && listApproversRequest !== undefined) {
                if (listApproversRequest instanceof ListApproversRequest) {
                    workspace = listApproversRequest.workspace;
                    approverName = listApproversRequest.approverName;
                    limit = listApproversRequest.limit;
                    offset = listApproversRequest.offset;
                } else {
                    workspace = listApproversRequest['workspace'];
                    approverName = listApproversRequest['approver_name'];
                    limit = listApproversRequest['limit'];
                    offset = listApproversRequest['offset'];
                }
            }

        
            if (approverName !== null && approverName !== undefined) {
                localVarQueryParameter['approver_name'] = approverName;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询应用列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listApps(listAppsRequest?: ListAppsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/service/apps",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let workspace;
            
            let contentType;
            
            let dlmType;
            
            let limit;
            
            let offset;
            
            let name;
            
            let appType;

            if (listAppsRequest !== null && listAppsRequest !== undefined) {
                if (listAppsRequest instanceof ListAppsRequest) {
                    workspace = listAppsRequest.workspace;
                    contentType = listAppsRequest.contentType;
                    dlmType = listAppsRequest.dlmType;
                    limit = listAppsRequest.limit;
                    offset = listAppsRequest.offset;
                    name = listAppsRequest.name;
                    appType = listAppsRequest.appType;
                } else {
                    workspace = listAppsRequest['workspace'];
                    contentType = listAppsRequest['Content-Type'];
                    dlmType = listAppsRequest['Dlm-Type'];
                    limit = listAppsRequest['limit'];
                    offset = listAppsRequest['offset'];
                    name = listAppsRequest['name'];
                    appType = listAppsRequest['app_type'];
                }
            }

        
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (appType !== null && appType !== undefined) {
                localVarQueryParameter['app_type'] = appType;
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }
            if (dlmType !== undefined && dlmType !== null) {
                localVarHeaderParameter['Dlm-Type'] = String(dlmType);
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询app 服务使用topN
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAppsTop(listAppsTopRequest?: ListAppsTopRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/service/statistic/apps-top-n",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let workspace;
            
            let contentType;
            
            let startTime;
            
            let endTime;
            
            let timeUnit;
            
            let topNum;
            
            let orderBy;
            
            let dlmType;

            if (listAppsTopRequest !== null && listAppsTopRequest !== undefined) {
                if (listAppsTopRequest instanceof ListAppsTopRequest) {
                    workspace = listAppsTopRequest.workspace;
                    contentType = listAppsTopRequest.contentType;
                    startTime = listAppsTopRequest.startTime;
                    endTime = listAppsTopRequest.endTime;
                    timeUnit = listAppsTopRequest.timeUnit;
                    topNum = listAppsTopRequest.topNum;
                    orderBy = listAppsTopRequest.orderBy;
                    dlmType = listAppsTopRequest.dlmType;
                } else {
                    workspace = listAppsTopRequest['workspace'];
                    contentType = listAppsTopRequest['Content-Type'];
                    startTime = listAppsTopRequest['start_time'];
                    endTime = listAppsTopRequest['end_time'];
                    timeUnit = listAppsTopRequest['time_unit'];
                    topNum = listAppsTopRequest['top_num'];
                    orderBy = listAppsTopRequest['order_by'];
                    dlmType = listAppsTopRequest['Dlm-Type'];
                }
            }

        
            if (startTime === null || startTime === undefined) {
                throw new RequiredError('startTime','Required parameter startTime was null or undefined when calling listAppsTop.');
            }
            if (startTime !== null && startTime !== undefined) {
                localVarQueryParameter['start_time'] = startTime;
            }
            if (endTime === null || endTime === undefined) {
                throw new RequiredError('endTime','Required parameter endTime was null or undefined when calling listAppsTop.');
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }
            if (timeUnit === null || timeUnit === undefined) {
                throw new RequiredError('timeUnit','Required parameter timeUnit was null or undefined when calling listAppsTop.');
            }
            if (timeUnit !== null && timeUnit !== undefined) {
                localVarQueryParameter['time_unit'] = timeUnit;
            }
            if (topNum === null || topNum === undefined) {
                throw new RequiredError('topNum','Required parameter topNum was null or undefined when calling listAppsTop.');
            }
            if (topNum !== null && topNum !== undefined) {
                localVarQueryParameter['top_num'] = topNum;
            }
            if (orderBy === null || orderBy === undefined) {
                throw new RequiredError('orderBy','Required parameter orderBy was null or undefined when calling listAppsTop.');
            }
            if (orderBy !== null && orderBy !== undefined) {
                localVarQueryParameter['order_by'] = orderBy;
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }
            if (dlmType !== undefined && dlmType !== null) {
                localVarHeaderParameter['Dlm-Type'] = String(dlmType);
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查看指标维度信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listBizMetricDimensions(listBizMetricDimensionsRequest?: ListBizMetricDimensionsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/design/biz-metrics/dimensions",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let workspace;
            
            let limit;
            
            let offset;

            if (listBizMetricDimensionsRequest !== null && listBizMetricDimensionsRequest !== undefined) {
                if (listBizMetricDimensionsRequest instanceof ListBizMetricDimensionsRequest) {
                    workspace = listBizMetricDimensionsRequest.workspace;
                    limit = listBizMetricDimensionsRequest.limit;
                    offset = listBizMetricDimensionsRequest.offset;
                } else {
                    workspace = listBizMetricDimensionsRequest['workspace'];
                    limit = listBizMetricDimensionsRequest['limit'];
                    offset = listBizMetricDimensionsRequest['offset'];
                }
            }

        
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查看指标指标责任人信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listBizMetricOwners(listBizMetricOwnersRequest?: ListBizMetricOwnersRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/design/biz-metrics/owners",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let workspace;
            
            let limit;
            
            let offset;

            if (listBizMetricOwnersRequest !== null && listBizMetricOwnersRequest !== undefined) {
                if (listBizMetricOwnersRequest instanceof ListBizMetricOwnersRequest) {
                    workspace = listBizMetricOwnersRequest.workspace;
                    limit = listBizMetricOwnersRequest.limit;
                    offset = listBizMetricOwnersRequest.offset;
                } else {
                    workspace = listBizMetricOwnersRequest['workspace'];
                    limit = listBizMetricOwnersRequest['limit'];
                    offset = listBizMetricOwnersRequest['offset'];
                }
            }

        
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 通过名称、创建者、修改时间分页查找业务指标信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listBizMetrics(listBizMetricsRequest?: ListBizMetricsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/design/biz-metrics",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let workspace;
            
            let name;
            
            let createBy;
            
            let owner;
            
            let status;
            
            let syncStatus;
            
            let syncKey;
            
            let bizCatalogId;
            
            let beginTime;
            
            let endTime;
            
            let limit;
            
            let offset;

            if (listBizMetricsRequest !== null && listBizMetricsRequest !== undefined) {
                if (listBizMetricsRequest instanceof ListBizMetricsRequest) {
                    workspace = listBizMetricsRequest.workspace;
                    name = listBizMetricsRequest.name;
                    createBy = listBizMetricsRequest.createBy;
                    owner = listBizMetricsRequest.owner;
                    status = listBizMetricsRequest.status;
                    syncStatus = listBizMetricsRequest.syncStatus;
                    syncKey = listBizMetricsRequest.syncKey;
                    bizCatalogId = listBizMetricsRequest.bizCatalogId;
                    beginTime = listBizMetricsRequest.beginTime;
                    endTime = listBizMetricsRequest.endTime;
                    limit = listBizMetricsRequest.limit;
                    offset = listBizMetricsRequest.offset;
                } else {
                    workspace = listBizMetricsRequest['workspace'];
                    name = listBizMetricsRequest['name'];
                    createBy = listBizMetricsRequest['create_by'];
                    owner = listBizMetricsRequest['owner'];
                    status = listBizMetricsRequest['status'];
                    syncStatus = listBizMetricsRequest['sync_status'];
                    syncKey = listBizMetricsRequest['sync_key'];
                    bizCatalogId = listBizMetricsRequest['biz_catalog_id'];
                    beginTime = listBizMetricsRequest['begin_time'];
                    endTime = listBizMetricsRequest['end_time'];
                    limit = listBizMetricsRequest['limit'];
                    offset = listBizMetricsRequest['offset'];
                }
            }

        
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (createBy !== null && createBy !== undefined) {
                localVarQueryParameter['create_by'] = createBy;
            }
            if (owner !== null && owner !== undefined) {
                localVarQueryParameter['owner'] = owner;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (syncStatus !== null && syncStatus !== undefined) {
                localVarQueryParameter['sync_status'] = syncStatus;
            }
            if (syncKey !== null && syncKey !== undefined) {
                localVarQueryParameter['sync_key'] = syncKey;
            }
            if (bizCatalogId !== null && bizCatalogId !== undefined) {
                localVarQueryParameter['biz_catalog_id'] = bizCatalogId;
            }
            if (beginTime !== null && beginTime !== undefined) {
                localVarQueryParameter['begin_time'] = beginTime;
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取数据资产主题树信息l1，l2，l3
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listBusiness(listBusinessRequest?: ListBusinessRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/design/subjects/business",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let workspace;
            
            let limit;
            
            let offset;

            if (listBusinessRequest !== null && listBusinessRequest !== undefined) {
                if (listBusinessRequest instanceof ListBusinessRequest) {
                    workspace = listBusinessRequest.workspace;
                    limit = listBusinessRequest.limit;
                    offset = listBusinessRequest.offset;
                } else {
                    workspace = listBusinessRequest['workspace'];
                    limit = listBusinessRequest['limit'];
                    offset = listBusinessRequest['offset'];
                }
            }

        
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取当前目录下的目录列表（全量）
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listCatalogList(listCatalogListRequest?: ListCatalogListRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/service/servicecatalogs/{catalog_id}/catalogs",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let workspace;
            
            let contentType;
            
            let catalogId;
            
            let dlmType;
            
            let limit;
            
            let offset;

            if (listCatalogListRequest !== null && listCatalogListRequest !== undefined) {
                if (listCatalogListRequest instanceof ListCatalogListRequest) {
                    workspace = listCatalogListRequest.workspace;
                    contentType = listCatalogListRequest.contentType;
                    catalogId = listCatalogListRequest.catalogId;
                    dlmType = listCatalogListRequest.dlmType;
                    limit = listCatalogListRequest.limit;
                    offset = listCatalogListRequest.offset;
                } else {
                    workspace = listCatalogListRequest['workspace'];
                    contentType = listCatalogListRequest['Content-Type'];
                    catalogId = listCatalogListRequest['catalog_id'];
                    dlmType = listCatalogListRequest['Dlm-Type'];
                    limit = listCatalogListRequest['limit'];
                    offset = listCatalogListRequest['offset'];
                }
            }

        
            if (catalogId === null || catalogId === undefined) {
            throw new RequiredError('catalogId','Required parameter catalogId was null or undefined when calling listCatalogList.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }
            if (dlmType !== undefined && dlmType !== null) {
                localVarHeaderParameter['Dlm-Type'] = String(dlmType);
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'catalog_id': catalogId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取所有目录树
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listCatalogTree(listCatalogTreeRequest?: ListCatalogTreeRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/design/biz/catalogs/tree",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let workspace;

            if (listCatalogTreeRequest !== null && listCatalogTreeRequest !== undefined) {
                if (listCatalogTreeRequest instanceof ListCatalogTreeRequest) {
                    workspace = listCatalogTreeRequest.workspace;
                } else {
                    workspace = listCatalogTreeRequest['workspace'];
                }
            }

        
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }

            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取作业目录
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listCategory(listCategoryRequest?: ListCategoryRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/quality/categories",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let workspace;
            
            let accept;
            
            let limit;
            
            let offset;

            if (listCategoryRequest !== null && listCategoryRequest !== undefined) {
                if (listCategoryRequest instanceof ListCategoryRequest) {
                    workspace = listCategoryRequest.workspace;
                    accept = listCategoryRequest.accept;
                    limit = listCategoryRequest.limit;
                    offset = listCategoryRequest.offset;
                } else {
                    workspace = listCategoryRequest['workspace'];
                    accept = listCategoryRequest['accept'];
                    limit = listCategoryRequest['limit'];
                    offset = listCategoryRequest['offset'];
                }
            }

        
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }
            if (accept !== undefined && accept !== null) {
                localVarHeaderParameter['accept'] = String(accept);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取数据源中表的字段
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listColumns(listColumnsRequest?: ListColumnsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/{connection_id}/datatables/{table_id}/columns",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let workspace;
            
            let connectionId;
            
            let tableId;
            
            let limit;
            
            let offset;

            if (listColumnsRequest !== null && listColumnsRequest !== undefined) {
                if (listColumnsRequest instanceof ListColumnsRequest) {
                    workspace = listColumnsRequest.workspace;
                    connectionId = listColumnsRequest.connectionId;
                    tableId = listColumnsRequest.tableId;
                    limit = listColumnsRequest.limit;
                    offset = listColumnsRequest.offset;
                } else {
                    workspace = listColumnsRequest['workspace'];
                    connectionId = listColumnsRequest['connection_id'];
                    tableId = listColumnsRequest['table_id'];
                    limit = listColumnsRequest['limit'];
                    offset = listColumnsRequest['offset'];
                }
            }

        
            if (connectionId === null || connectionId === undefined) {
            throw new RequiredError('connectionId','Required parameter connectionId was null or undefined when calling listColumns.');
            }
            if (tableId === null || tableId === undefined) {
            throw new RequiredError('tableId','Required parameter tableId was null or undefined when calling listColumns.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'connection_id': connectionId,'table_id': tableId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 通过中英文名称、创建者、审核人、状态、修改时间、l3Id分页查找复合指标信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listCompoundMetrics(listCompoundMetricsRequest?: ListCompoundMetricsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/design/compound-metrics",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let workspace;
            
            let name;
            
            let createBy;
            
            let approver;
            
            let status;
            
            let dimensionGroup;
            
            let atomicIndexId;
            
            let l3Id;
            
            let beginTime;
            
            let endTime;
            
            let limit;
            
            let offset;

            if (listCompoundMetricsRequest !== null && listCompoundMetricsRequest !== undefined) {
                if (listCompoundMetricsRequest instanceof ListCompoundMetricsRequest) {
                    workspace = listCompoundMetricsRequest.workspace;
                    name = listCompoundMetricsRequest.name;
                    createBy = listCompoundMetricsRequest.createBy;
                    approver = listCompoundMetricsRequest.approver;
                    status = listCompoundMetricsRequest.status;
                    dimensionGroup = listCompoundMetricsRequest.dimensionGroup;
                    atomicIndexId = listCompoundMetricsRequest.atomicIndexId;
                    l3Id = listCompoundMetricsRequest.l3Id;
                    beginTime = listCompoundMetricsRequest.beginTime;
                    endTime = listCompoundMetricsRequest.endTime;
                    limit = listCompoundMetricsRequest.limit;
                    offset = listCompoundMetricsRequest.offset;
                } else {
                    workspace = listCompoundMetricsRequest['workspace'];
                    name = listCompoundMetricsRequest['name'];
                    createBy = listCompoundMetricsRequest['create_by'];
                    approver = listCompoundMetricsRequest['approver'];
                    status = listCompoundMetricsRequest['status'];
                    dimensionGroup = listCompoundMetricsRequest['dimension_group'];
                    atomicIndexId = listCompoundMetricsRequest['atomic_index_id'];
                    l3Id = listCompoundMetricsRequest['l3_id'];
                    beginTime = listCompoundMetricsRequest['begin_time'];
                    endTime = listCompoundMetricsRequest['end_time'];
                    limit = listCompoundMetricsRequest['limit'];
                    offset = listCompoundMetricsRequest['offset'];
                }
            }

        
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (createBy !== null && createBy !== undefined) {
                localVarQueryParameter['create_by'] = createBy;
            }
            if (approver !== null && approver !== undefined) {
                localVarQueryParameter['approver'] = approver;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (dimensionGroup !== null && dimensionGroup !== undefined) {
                localVarQueryParameter['dimension_group'] = dimensionGroup;
            }
            if (atomicIndexId !== null && atomicIndexId !== undefined) {
                localVarQueryParameter['atomic_index_id'] = atomicIndexId;
            }
            if (l3Id !== null && l3Id !== undefined) {
                localVarQueryParameter['l3_id'] = l3Id;
            }
            if (beginTime !== null && beginTime !== undefined) {
                localVarQueryParameter['begin_time'] = beginTime;
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 通过中英文名称、描述、创建者、审核人、限定分组id、修改时间状态分页查找限定信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listCondition(listConditionRequest?: ListConditionRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/design/conditions",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let workspace;
            
            let name;
            
            let createBy;
            
            let approver;
            
            let status;
            
            let beginTime;
            
            let endTime;
            
            let limit;
            
            let offset;

            if (listConditionRequest !== null && listConditionRequest !== undefined) {
                if (listConditionRequest instanceof ListConditionRequest) {
                    workspace = listConditionRequest.workspace;
                    name = listConditionRequest.name;
                    createBy = listConditionRequest.createBy;
                    approver = listConditionRequest.approver;
                    status = listConditionRequest.status;
                    beginTime = listConditionRequest.beginTime;
                    endTime = listConditionRequest.endTime;
                    limit = listConditionRequest.limit;
                    offset = listConditionRequest.offset;
                } else {
                    workspace = listConditionRequest['workspace'];
                    name = listConditionRequest['name'];
                    createBy = listConditionRequest['create_by'];
                    approver = listConditionRequest['approver'];
                    status = listConditionRequest['status'];
                    beginTime = listConditionRequest['begin_time'];
                    endTime = listConditionRequest['end_time'];
                    limit = listConditionRequest['limit'];
                    offset = listConditionRequest['offset'];
                }
            }

        
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (createBy !== null && createBy !== undefined) {
                localVarQueryParameter['create_by'] = createBy;
            }
            if (approver !== null && approver !== undefined) {
                localVarQueryParameter['approver'] = approver;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (beginTime !== null && beginTime !== undefined) {
                localVarQueryParameter['begin_time'] = beginTime;
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取对账作业列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listConsistencyTask(listConsistencyTaskRequest?: ListConsistencyTaskRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/quality/consistency-tasks",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let workspace;
            
            let categoryId;
            
            let name;
            
            let scheduleStatus;
            
            let startTime;
            
            let endTime;
            
            let creator;
            
            let limit;
            
            let offset;

            if (listConsistencyTaskRequest !== null && listConsistencyTaskRequest !== undefined) {
                if (listConsistencyTaskRequest instanceof ListConsistencyTaskRequest) {
                    workspace = listConsistencyTaskRequest.workspace;
                    categoryId = listConsistencyTaskRequest.categoryId;
                    name = listConsistencyTaskRequest.name;
                    scheduleStatus = listConsistencyTaskRequest.scheduleStatus;
                    startTime = listConsistencyTaskRequest.startTime;
                    endTime = listConsistencyTaskRequest.endTime;
                    creator = listConsistencyTaskRequest.creator;
                    limit = listConsistencyTaskRequest.limit;
                    offset = listConsistencyTaskRequest.offset;
                } else {
                    workspace = listConsistencyTaskRequest['workspace'];
                    categoryId = listConsistencyTaskRequest['category_id'];
                    name = listConsistencyTaskRequest['name'];
                    scheduleStatus = listConsistencyTaskRequest['schedule_status'];
                    startTime = listConsistencyTaskRequest['start_time'];
                    endTime = listConsistencyTaskRequest['end_time'];
                    creator = listConsistencyTaskRequest['creator'];
                    limit = listConsistencyTaskRequest['limit'];
                    offset = listConsistencyTaskRequest['offset'];
                }
            }

        
            if (categoryId !== null && categoryId !== undefined) {
                localVarQueryParameter['category_id'] = categoryId;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (scheduleStatus !== null && scheduleStatus !== undefined) {
                localVarQueryParameter['schedule_status'] = scheduleStatus;
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
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取实例列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listDataArtsStudioInstances(listDataArtsStudioInstancesRequest?: ListDataArtsStudioInstancesRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/instances",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let limit;
            
            let offset;

            if (listDataArtsStudioInstancesRequest !== null && listDataArtsStudioInstancesRequest !== undefined) {
                if (listDataArtsStudioInstancesRequest instanceof ListDataArtsStudioInstancesRequest) {
                    limit = listDataArtsStudioInstancesRequest.limit;
                    offset = listDataArtsStudioInstancesRequest.offset;
                } else {
                    limit = listDataArtsStudioInstancesRequest['limit'];
                    offset = listDataArtsStudioInstancesRequest['offset'];
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
         * 获取数据源中的表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listDataTables(listDataTablesRequest?: ListDataTablesRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/{connection_id}/datatables",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let workspace;
            
            let connectionId;
            
            let databaseName;
            
            let tableName;
            
            let limit;
            
            let offset;

            if (listDataTablesRequest !== null && listDataTablesRequest !== undefined) {
                if (listDataTablesRequest instanceof ListDataTablesRequest) {
                    workspace = listDataTablesRequest.workspace;
                    connectionId = listDataTablesRequest.connectionId;
                    databaseName = listDataTablesRequest.databaseName;
                    tableName = listDataTablesRequest.tableName;
                    limit = listDataTablesRequest.limit;
                    offset = listDataTablesRequest.offset;
                } else {
                    workspace = listDataTablesRequest['workspace'];
                    connectionId = listDataTablesRequest['connection_id'];
                    databaseName = listDataTablesRequest['database_name'];
                    tableName = listDataTablesRequest['table_name'];
                    limit = listDataTablesRequest['limit'];
                    offset = listDataTablesRequest['offset'];
                }
            }

        
            if (connectionId === null || connectionId === undefined) {
            throw new RequiredError('connectionId','Required parameter connectionId was null or undefined when calling listDataTables.');
            }
            if (databaseName === null || databaseName === undefined) {
                throw new RequiredError('databaseName','Required parameter databaseName was null or undefined when calling listDataTables.');
            }
            if (databaseName !== null && databaseName !== undefined) {
                localVarQueryParameter['database_name'] = databaseName;
            }
            if (tableName !== null && tableName !== undefined) {
                localVarQueryParameter['table_name'] = tableName;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'connection_id': connectionId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取数据库列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listDatabases(listDatabasesRequest?: ListDatabasesRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/{connection_id}/databases",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let workspace;
            
            let connectionId;
            
            let limit;
            
            let offset;

            if (listDatabasesRequest !== null && listDatabasesRequest !== undefined) {
                if (listDatabasesRequest instanceof ListDatabasesRequest) {
                    workspace = listDatabasesRequest.workspace;
                    connectionId = listDatabasesRequest.connectionId;
                    limit = listDatabasesRequest.limit;
                    offset = listDatabasesRequest.offset;
                } else {
                    workspace = listDatabasesRequest['workspace'];
                    connectionId = listDatabasesRequest['connection_id'];
                    limit = listDatabasesRequest['limit'];
                    offset = listDatabasesRequest['offset'];
                }
            }

        
            if (connectionId === null || connectionId === undefined) {
            throw new RequiredError('connectionId','Required parameter connectionId was null or undefined when calling listDatabases.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'connection_id': connectionId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询数据连接列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listDataconnections(listDataconnectionsRequest?: ListDataconnectionsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/data-connections",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let workspace;
            
            let name;
            
            let type;
            
            let limit;
            
            let offset;

            if (listDataconnectionsRequest !== null && listDataconnectionsRequest !== undefined) {
                if (listDataconnectionsRequest instanceof ListDataconnectionsRequest) {
                    workspace = listDataconnectionsRequest.workspace;
                    name = listDataconnectionsRequest.name;
                    type = listDataconnectionsRequest.type;
                    limit = listDataconnectionsRequest.limit;
                    offset = listDataconnectionsRequest.offset;
                } else {
                    workspace = listDataconnectionsRequest['workspace'];
                    name = listDataconnectionsRequest['name'];
                    type = listDataconnectionsRequest['type'];
                    limit = listDataconnectionsRequest['limit'];
                    offset = listDataconnectionsRequest['offset'];
                }
            }

        
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
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
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 通过中英文名称、创建者、审核人、状态、修改时间、l3Id分页查找衍生指标信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listDerivativeIndexes(listDerivativeIndexesRequest?: ListDerivativeIndexesRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/design/derivative-indexs",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let workspace;
            
            let name;
            
            let createBy;
            
            let approver;
            
            let status;
            
            let dimensionId;
            
            let dimensionGroup;
            
            let atomicIndexId;
            
            let allMetrics;
            
            let dwType;
            
            let l3Id;
            
            let beginTime;
            
            let endTime;
            
            let limit;
            
            let offset;

            if (listDerivativeIndexesRequest !== null && listDerivativeIndexesRequest !== undefined) {
                if (listDerivativeIndexesRequest instanceof ListDerivativeIndexesRequest) {
                    workspace = listDerivativeIndexesRequest.workspace;
                    name = listDerivativeIndexesRequest.name;
                    createBy = listDerivativeIndexesRequest.createBy;
                    approver = listDerivativeIndexesRequest.approver;
                    status = listDerivativeIndexesRequest.status;
                    dimensionId = listDerivativeIndexesRequest.dimensionId;
                    dimensionGroup = listDerivativeIndexesRequest.dimensionGroup;
                    atomicIndexId = listDerivativeIndexesRequest.atomicIndexId;
                    allMetrics = listDerivativeIndexesRequest.allMetrics;
                    dwType = listDerivativeIndexesRequest.dwType;
                    l3Id = listDerivativeIndexesRequest.l3Id;
                    beginTime = listDerivativeIndexesRequest.beginTime;
                    endTime = listDerivativeIndexesRequest.endTime;
                    limit = listDerivativeIndexesRequest.limit;
                    offset = listDerivativeIndexesRequest.offset;
                } else {
                    workspace = listDerivativeIndexesRequest['workspace'];
                    name = listDerivativeIndexesRequest['name'];
                    createBy = listDerivativeIndexesRequest['create_by'];
                    approver = listDerivativeIndexesRequest['approver'];
                    status = listDerivativeIndexesRequest['status'];
                    dimensionId = listDerivativeIndexesRequest['dimension_id'];
                    dimensionGroup = listDerivativeIndexesRequest['dimension_group'];
                    atomicIndexId = listDerivativeIndexesRequest['atomic_index_id'];
                    allMetrics = listDerivativeIndexesRequest['all_metrics'];
                    dwType = listDerivativeIndexesRequest['dw_type'];
                    l3Id = listDerivativeIndexesRequest['l3_id'];
                    beginTime = listDerivativeIndexesRequest['begin_time'];
                    endTime = listDerivativeIndexesRequest['end_time'];
                    limit = listDerivativeIndexesRequest['limit'];
                    offset = listDerivativeIndexesRequest['offset'];
                }
            }

        
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (createBy !== null && createBy !== undefined) {
                localVarQueryParameter['create_by'] = createBy;
            }
            if (approver !== null && approver !== undefined) {
                localVarQueryParameter['approver'] = approver;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (dimensionId !== null && dimensionId !== undefined) {
                localVarQueryParameter['dimension_id'] = dimensionId;
            }
            if (dimensionGroup !== null && dimensionGroup !== undefined) {
                localVarQueryParameter['dimension_group'] = dimensionGroup;
            }
            if (atomicIndexId !== null && atomicIndexId !== undefined) {
                localVarQueryParameter['atomic_index_id'] = atomicIndexId;
            }
            if (allMetrics !== null && allMetrics !== undefined) {
                localVarQueryParameter['all_metrics'] = allMetrics;
            }
            if (dwType !== null && dwType !== undefined) {
                localVarQueryParameter['dw_type'] = dwType;
            }
            if (l3Id !== null && l3Id !== undefined) {
                localVarQueryParameter['l3_id'] = l3Id;
            }
            if (beginTime !== null && beginTime !== undefined) {
                localVarQueryParameter['begin_time'] = beginTime;
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询维度颗粒度, 依据tableId查询涉及所有维度，不传tableId查询所有维度组颗粒度
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listDimensionGroups(listDimensionGroupsRequest?: ListDimensionGroupsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/design/dimension/groups",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let workspace;
            
            let tableId;
            
            let bizType;
            
            let limit;
            
            let offset;

            if (listDimensionGroupsRequest !== null && listDimensionGroupsRequest !== undefined) {
                if (listDimensionGroupsRequest instanceof ListDimensionGroupsRequest) {
                    workspace = listDimensionGroupsRequest.workspace;
                    tableId = listDimensionGroupsRequest.tableId;
                    bizType = listDimensionGroupsRequest.bizType;
                    limit = listDimensionGroupsRequest.limit;
                    offset = listDimensionGroupsRequest.offset;
                } else {
                    workspace = listDimensionGroupsRequest['workspace'];
                    tableId = listDimensionGroupsRequest['table_id'];
                    bizType = listDimensionGroupsRequest['biz_type'];
                    limit = listDimensionGroupsRequest['limit'];
                    offset = listDimensionGroupsRequest['offset'];
                }
            }

        
            if (tableId !== null && tableId !== undefined) {
                localVarQueryParameter['table_id'] = tableId;
            }
            if (bizType !== null && bizType !== undefined) {
                localVarQueryParameter['biz_type'] = bizType;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 通过中英文名称、创建者、审核人、状态、修改时间分页查找维度表信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listDimensionLogicTables(listDimensionLogicTablesRequest?: ListDimensionLogicTablesRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/design/dimension-logic-tables",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let workspace;
            
            let name;
            
            let createBy;
            
            let approver;
            
            let owner;
            
            let status;
            
            let syncStatus;
            
            let syncKey;
            
            let l2Id;
            
            let dimensionId;
            
            let beginTime;
            
            let endTime;
            
            let limit;
            
            let offset;
            
            let bizCatalogId;
            
            let dimensionType;

            if (listDimensionLogicTablesRequest !== null && listDimensionLogicTablesRequest !== undefined) {
                if (listDimensionLogicTablesRequest instanceof ListDimensionLogicTablesRequest) {
                    workspace = listDimensionLogicTablesRequest.workspace;
                    name = listDimensionLogicTablesRequest.name;
                    createBy = listDimensionLogicTablesRequest.createBy;
                    approver = listDimensionLogicTablesRequest.approver;
                    owner = listDimensionLogicTablesRequest.owner;
                    status = listDimensionLogicTablesRequest.status;
                    syncStatus = listDimensionLogicTablesRequest.syncStatus;
                    syncKey = listDimensionLogicTablesRequest.syncKey;
                    l2Id = listDimensionLogicTablesRequest.l2Id;
                    dimensionId = listDimensionLogicTablesRequest.dimensionId;
                    beginTime = listDimensionLogicTablesRequest.beginTime;
                    endTime = listDimensionLogicTablesRequest.endTime;
                    limit = listDimensionLogicTablesRequest.limit;
                    offset = listDimensionLogicTablesRequest.offset;
                    bizCatalogId = listDimensionLogicTablesRequest.bizCatalogId;
                    dimensionType = listDimensionLogicTablesRequest.dimensionType;
                } else {
                    workspace = listDimensionLogicTablesRequest['workspace'];
                    name = listDimensionLogicTablesRequest['name'];
                    createBy = listDimensionLogicTablesRequest['create_by'];
                    approver = listDimensionLogicTablesRequest['approver'];
                    owner = listDimensionLogicTablesRequest['owner'];
                    status = listDimensionLogicTablesRequest['status'];
                    syncStatus = listDimensionLogicTablesRequest['sync_status'];
                    syncKey = listDimensionLogicTablesRequest['sync_key'];
                    l2Id = listDimensionLogicTablesRequest['l2_id'];
                    dimensionId = listDimensionLogicTablesRequest['dimension_id'];
                    beginTime = listDimensionLogicTablesRequest['begin_time'];
                    endTime = listDimensionLogicTablesRequest['end_time'];
                    limit = listDimensionLogicTablesRequest['limit'];
                    offset = listDimensionLogicTablesRequest['offset'];
                    bizCatalogId = listDimensionLogicTablesRequest['biz_catalog_id'];
                    dimensionType = listDimensionLogicTablesRequest['dimension_type'];
                }
            }

        
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (createBy !== null && createBy !== undefined) {
                localVarQueryParameter['create_by'] = createBy;
            }
            if (approver !== null && approver !== undefined) {
                localVarQueryParameter['approver'] = approver;
            }
            if (owner !== null && owner !== undefined) {
                localVarQueryParameter['owner'] = owner;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (syncStatus !== null && syncStatus !== undefined) {
                localVarQueryParameter['sync_status'] = syncStatus;
            }
            if (syncKey !== null && syncKey !== undefined) {
                localVarQueryParameter['sync_key'] = syncKey;
            }
            if (l2Id !== null && l2Id !== undefined) {
                localVarQueryParameter['l2_id'] = l2Id;
            }
            if (dimensionId !== null && dimensionId !== undefined) {
                localVarQueryParameter['dimension_id'] = dimensionId;
            }
            if (beginTime !== null && beginTime !== undefined) {
                localVarQueryParameter['begin_time'] = beginTime;
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (bizCatalogId !== null && bizCatalogId !== undefined) {
                localVarQueryParameter['biz_catalog_id'] = bizCatalogId;
            }
            if (dimensionType !== null && dimensionType !== undefined) {
                localVarQueryParameter['dimension_type'] = dimensionType;
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 通过中英文名称、描述、创建者、审核人、状态、l3Id、派生指标idList、修改时间分页查找维度信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listDimensions(listDimensionsRequest?: ListDimensionsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/design/dimensions",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let workspace;
            
            let name;
            
            let createBy;
            
            let approver;
            
            let status;
            
            let l2Id;
            
            let derivativeIds;
            
            let beginTime;
            
            let endTime;
            
            let factLogicId;
            
            let dimensionType;
            
            let limit;
            
            let offset;
            
            let bizCatalogId;

            if (listDimensionsRequest !== null && listDimensionsRequest !== undefined) {
                if (listDimensionsRequest instanceof ListDimensionsRequest) {
                    workspace = listDimensionsRequest.workspace;
                    name = listDimensionsRequest.name;
                    createBy = listDimensionsRequest.createBy;
                    approver = listDimensionsRequest.approver;
                    status = listDimensionsRequest.status;
                    l2Id = listDimensionsRequest.l2Id;
                    derivativeIds = listDimensionsRequest.derivativeIds;
                    beginTime = listDimensionsRequest.beginTime;
                    endTime = listDimensionsRequest.endTime;
                    factLogicId = listDimensionsRequest.factLogicId;
                    dimensionType = listDimensionsRequest.dimensionType;
                    limit = listDimensionsRequest.limit;
                    offset = listDimensionsRequest.offset;
                    bizCatalogId = listDimensionsRequest.bizCatalogId;
                } else {
                    workspace = listDimensionsRequest['workspace'];
                    name = listDimensionsRequest['name'];
                    createBy = listDimensionsRequest['create_by'];
                    approver = listDimensionsRequest['approver'];
                    status = listDimensionsRequest['status'];
                    l2Id = listDimensionsRequest['l2_id'];
                    derivativeIds = listDimensionsRequest['derivative_ids'];
                    beginTime = listDimensionsRequest['begin_time'];
                    endTime = listDimensionsRequest['end_time'];
                    factLogicId = listDimensionsRequest['fact_logic_id'];
                    dimensionType = listDimensionsRequest['dimension_type'];
                    limit = listDimensionsRequest['limit'];
                    offset = listDimensionsRequest['offset'];
                    bizCatalogId = listDimensionsRequest['biz_catalog_id'];
                }
            }

        
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (createBy !== null && createBy !== undefined) {
                localVarQueryParameter['create_by'] = createBy;
            }
            if (approver !== null && approver !== undefined) {
                localVarQueryParameter['approver'] = approver;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (l2Id !== null && l2Id !== undefined) {
                localVarQueryParameter['l2_id'] = l2Id;
            }
            if (derivativeIds !== null && derivativeIds !== undefined) {
                localVarQueryParameter['derivative_ids'] = derivativeIds;
            }
            if (beginTime !== null && beginTime !== undefined) {
                localVarQueryParameter['begin_time'] = beginTime;
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }
            if (factLogicId !== null && factLogicId !== undefined) {
                localVarQueryParameter['fact_logic_id'] = factLogicId;
            }
            if (dimensionType !== null && dimensionType !== undefined) {
                localVarQueryParameter['dimension_type'] = dimensionType;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (bizCatalogId !== null && bizCatalogId !== undefined) {
                localVarQueryParameter['biz_catalog_id'] = bizCatalogId;
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取所有目录
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listDirectories(listDirectoriesRequest?: ListDirectoriesRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/design/directorys",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let workspace;
            
            let type;
            
            let limit;
            
            let offset;

            if (listDirectoriesRequest !== null && listDirectoriesRequest !== undefined) {
                if (listDirectoriesRequest instanceof ListDirectoriesRequest) {
                    workspace = listDirectoriesRequest.workspace;
                    type = listDirectoriesRequest.type;
                    limit = listDirectoriesRequest.limit;
                    offset = listDirectoriesRequest.offset;
                } else {
                    workspace = listDirectoriesRequest['workspace'];
                    type = listDirectoriesRequest['type'];
                    limit = listDirectoriesRequest['limit'];
                    offset = listDirectoriesRequest['offset'];
                }
            }

        
            if (type === null || type === undefined) {
                throw new RequiredError('type','Required parameter type was null or undefined when calling listDirectories.');
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
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 通过中英文名称、创建者、审核人、状态、修改时间分页查找事实表信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listFactLogicTables(listFactLogicTablesRequest?: ListFactLogicTablesRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/design/fact-logic-tables",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let workspace;
            
            let name;
            
            let createBy;
            
            let approver;
            
            let owner;
            
            let status;
            
            let syncStatus;
            
            let syncKey;
            
            let l3Id;
            
            let beginTime;
            
            let endTime;
            
            let limit;
            
            let offset;
            
            let bizCatalogId;

            if (listFactLogicTablesRequest !== null && listFactLogicTablesRequest !== undefined) {
                if (listFactLogicTablesRequest instanceof ListFactLogicTablesRequest) {
                    workspace = listFactLogicTablesRequest.workspace;
                    name = listFactLogicTablesRequest.name;
                    createBy = listFactLogicTablesRequest.createBy;
                    approver = listFactLogicTablesRequest.approver;
                    owner = listFactLogicTablesRequest.owner;
                    status = listFactLogicTablesRequest.status;
                    syncStatus = listFactLogicTablesRequest.syncStatus;
                    syncKey = listFactLogicTablesRequest.syncKey;
                    l3Id = listFactLogicTablesRequest.l3Id;
                    beginTime = listFactLogicTablesRequest.beginTime;
                    endTime = listFactLogicTablesRequest.endTime;
                    limit = listFactLogicTablesRequest.limit;
                    offset = listFactLogicTablesRequest.offset;
                    bizCatalogId = listFactLogicTablesRequest.bizCatalogId;
                } else {
                    workspace = listFactLogicTablesRequest['workspace'];
                    name = listFactLogicTablesRequest['name'];
                    createBy = listFactLogicTablesRequest['create_by'];
                    approver = listFactLogicTablesRequest['approver'];
                    owner = listFactLogicTablesRequest['owner'];
                    status = listFactLogicTablesRequest['status'];
                    syncStatus = listFactLogicTablesRequest['sync_status'];
                    syncKey = listFactLogicTablesRequest['sync_key'];
                    l3Id = listFactLogicTablesRequest['l3_id'];
                    beginTime = listFactLogicTablesRequest['begin_time'];
                    endTime = listFactLogicTablesRequest['end_time'];
                    limit = listFactLogicTablesRequest['limit'];
                    offset = listFactLogicTablesRequest['offset'];
                    bizCatalogId = listFactLogicTablesRequest['biz_catalog_id'];
                }
            }

        
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (createBy !== null && createBy !== undefined) {
                localVarQueryParameter['create_by'] = createBy;
            }
            if (approver !== null && approver !== undefined) {
                localVarQueryParameter['approver'] = approver;
            }
            if (owner !== null && owner !== undefined) {
                localVarQueryParameter['owner'] = owner;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (syncStatus !== null && syncStatus !== undefined) {
                localVarQueryParameter['sync_status'] = syncStatus;
            }
            if (syncKey !== null && syncKey !== undefined) {
                localVarQueryParameter['sync_key'] = syncKey;
            }
            if (l3Id !== null && l3Id !== undefined) {
                localVarQueryParameter['l3_id'] = l3Id;
            }
            if (beginTime !== null && beginTime !== undefined) {
                localVarQueryParameter['begin_time'] = beginTime;
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (bizCatalogId !== null && bizCatalogId !== undefined) {
                localVarQueryParameter['biz_catalog_id'] = bizCatalogId;
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询告警通知记录
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listFactoryAlarmInfo(listFactoryAlarmInfoRequest?: ListFactoryAlarmInfoRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/factory/alarm-info",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let workspace;
            
            let startTime;
            
            let endTime;
            
            let offset;
            
            let limit;

            if (listFactoryAlarmInfoRequest !== null && listFactoryAlarmInfoRequest !== undefined) {
                if (listFactoryAlarmInfoRequest instanceof ListFactoryAlarmInfoRequest) {
                    workspace = listFactoryAlarmInfoRequest.workspace;
                    startTime = listFactoryAlarmInfoRequest.startTime;
                    endTime = listFactoryAlarmInfoRequest.endTime;
                    offset = listFactoryAlarmInfoRequest.offset;
                    limit = listFactoryAlarmInfoRequest.limit;
                } else {
                    workspace = listFactoryAlarmInfoRequest['workspace'];
                    startTime = listFactoryAlarmInfoRequest['start_time'];
                    endTime = listFactoryAlarmInfoRequest['end_time'];
                    offset = listFactoryAlarmInfoRequest['offset'];
                    limit = listFactoryAlarmInfoRequest['limit'];
                }
            }

        
            if (startTime !== null && startTime !== undefined) {
                localVarQueryParameter['start_time'] = startTime;
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询指定作业的实例列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listFactoryJobInstancesByName(listFactoryJobInstancesByNameRequest?: ListFactoryJobInstancesByNameRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/factory/jobs/{job_name}/instances/detail",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let jobName;
            
            let workspace;
            
            let contentType;
            
            let limit;
            
            let offset;
            
            let minPlanTime;
            
            let maxPlanTime;
            
            let status;
            
            let forceSuccess;
            
            let ignoreSuccess;
            
            let instanceType;

            if (listFactoryJobInstancesByNameRequest !== null && listFactoryJobInstancesByNameRequest !== undefined) {
                if (listFactoryJobInstancesByNameRequest instanceof ListFactoryJobInstancesByNameRequest) {
                    jobName = listFactoryJobInstancesByNameRequest.jobName;
                    workspace = listFactoryJobInstancesByNameRequest.workspace;
                    contentType = listFactoryJobInstancesByNameRequest.contentType;
                    limit = listFactoryJobInstancesByNameRequest.limit;
                    offset = listFactoryJobInstancesByNameRequest.offset;
                    minPlanTime = listFactoryJobInstancesByNameRequest.minPlanTime;
                    maxPlanTime = listFactoryJobInstancesByNameRequest.maxPlanTime;
                    status = listFactoryJobInstancesByNameRequest.status;
                    forceSuccess = listFactoryJobInstancesByNameRequest.forceSuccess;
                    ignoreSuccess = listFactoryJobInstancesByNameRequest.ignoreSuccess;
                    instanceType = listFactoryJobInstancesByNameRequest.instanceType;
                } else {
                    jobName = listFactoryJobInstancesByNameRequest['job_name'];
                    workspace = listFactoryJobInstancesByNameRequest['workspace'];
                    contentType = listFactoryJobInstancesByNameRequest['Content-Type'];
                    limit = listFactoryJobInstancesByNameRequest['limit'];
                    offset = listFactoryJobInstancesByNameRequest['offset'];
                    minPlanTime = listFactoryJobInstancesByNameRequest['min_plan_time'];
                    maxPlanTime = listFactoryJobInstancesByNameRequest['max_plan_time'];
                    status = listFactoryJobInstancesByNameRequest['status'];
                    forceSuccess = listFactoryJobInstancesByNameRequest['force_success'];
                    ignoreSuccess = listFactoryJobInstancesByNameRequest['ignore_success'];
                    instanceType = listFactoryJobInstancesByNameRequest['instance_type'];
                }
            }

        
            if (jobName === null || jobName === undefined) {
            throw new RequiredError('jobName','Required parameter jobName was null or undefined when calling listFactoryJobInstancesByName.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (minPlanTime !== null && minPlanTime !== undefined) {
                localVarQueryParameter['min_plan_time'] = minPlanTime;
            }
            if (maxPlanTime !== null && maxPlanTime !== undefined) {
                localVarQueryParameter['max_plan_time'] = maxPlanTime;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (forceSuccess !== null && forceSuccess !== undefined) {
                localVarQueryParameter['force_success'] = forceSuccess;
            }
            if (ignoreSuccess !== null && ignoreSuccess !== undefined) {
                localVarQueryParameter['ignore_success'] = ignoreSuccess;
            }
            if (instanceType !== null && instanceType !== undefined) {
                localVarQueryParameter['instance_type'] = instanceType;
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'job_name': jobName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询作业列表清单
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listFactoryJobs(listFactoryJobsRequest?: ListFactoryJobsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/factory/jobs",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let workspace;
            
            let limit;
            
            let offset;
            
            let jobType;
            
            let jobName;
            
            let tags;

            if (listFactoryJobsRequest !== null && listFactoryJobsRequest !== undefined) {
                if (listFactoryJobsRequest instanceof ListFactoryJobsRequest) {
                    workspace = listFactoryJobsRequest.workspace;
                    limit = listFactoryJobsRequest.limit;
                    offset = listFactoryJobsRequest.offset;
                    jobType = listFactoryJobsRequest.jobType;
                    jobName = listFactoryJobsRequest.jobName;
                    tags = listFactoryJobsRequest.tags;
                } else {
                    workspace = listFactoryJobsRequest['workspace'];
                    limit = listFactoryJobsRequest['limit'];
                    offset = listFactoryJobsRequest['offset'];
                    jobType = listFactoryJobsRequest['job_type'];
                    jobName = listFactoryJobsRequest['job_name'];
                    tags = listFactoryJobsRequest['tags'];
                }
            }

        
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (jobType !== null && jobType !== undefined) {
                localVarQueryParameter['job_type'] = jobType;
            }
            if (jobName !== null && jobName !== undefined) {
                localVarQueryParameter['job_name'] = jobName;
            }
            if (tags !== null && tags !== undefined) {
                localVarQueryParameter['tags'] = tags;
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询发布包列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listFactoryReleasePackages(listFactoryReleasePackagesRequest?: ListFactoryReleasePackagesRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/factory/release-packages",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let workspace;
            
            let contentType;

            if (listFactoryReleasePackagesRequest !== null && listFactoryReleasePackagesRequest !== undefined) {
                if (listFactoryReleasePackagesRequest instanceof ListFactoryReleasePackagesRequest) {
                    body = listFactoryReleasePackagesRequest.body
                    workspace = listFactoryReleasePackagesRequest.workspace;
                    contentType = listFactoryReleasePackagesRequest.contentType;
                } else {
                    body = listFactoryReleasePackagesRequest['body'];
                    workspace = listFactoryReleasePackagesRequest['workspace'];
                    contentType = listFactoryReleasePackagesRequest['Content-Type'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询任务完成情况
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listFactoryTaskCompletion(listFactoryTaskCompletionRequest?: ListFactoryTaskCompletionRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/factory/monitor/task-completion-data",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let workspace;
            
            let type;

            if (listFactoryTaskCompletionRequest !== null && listFactoryTaskCompletionRequest !== undefined) {
                if (listFactoryTaskCompletionRequest instanceof ListFactoryTaskCompletionRequest) {
                    workspace = listFactoryTaskCompletionRequest.workspace;
                    type = listFactoryTaskCompletionRequest.type;
                } else {
                    workspace = listFactoryTaskCompletionRequest['workspace'];
                    type = listFactoryTaskCompletionRequest['type'];
                }
            }

        
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询实例运行状态
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listFactoryTaskOverview(listFactoryTaskOverviewRequest?: ListFactoryTaskOverviewRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/factory/monitor/task-statistics-overview",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let workspace;
            
            let isOwn;
            
            let queryDays;

            if (listFactoryTaskOverviewRequest !== null && listFactoryTaskOverviewRequest !== undefined) {
                if (listFactoryTaskOverviewRequest instanceof ListFactoryTaskOverviewRequest) {
                    workspace = listFactoryTaskOverviewRequest.workspace;
                    isOwn = listFactoryTaskOverviewRequest.isOwn;
                    queryDays = listFactoryTaskOverviewRequest.queryDays;
                } else {
                    workspace = listFactoryTaskOverviewRequest['workspace'];
                    isOwn = listFactoryTaskOverviewRequest['is_own'];
                    queryDays = listFactoryTaskOverviewRequest['query_days'];
                }
            }

        
            if (isOwn !== null && isOwn !== undefined) {
                localVarQueryParameter['is_own'] = isOwn;
            }
            if (queryDays !== null && queryDays !== undefined) {
                localVarQueryParameter['query_days'] = queryDays;
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取任务执行结果列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listInstances(listInstancesRequest?: ListInstancesRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/quality/instances",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let workspace;
            
            let name;
            
            let taskType;
            
            let runStatus;
            
            let notifyStatus;
            
            let startTime;
            
            let endTime;
            
            let limit;
            
            let offset;

            if (listInstancesRequest !== null && listInstancesRequest !== undefined) {
                if (listInstancesRequest instanceof ListInstancesRequest) {
                    workspace = listInstancesRequest.workspace;
                    name = listInstancesRequest.name;
                    taskType = listInstancesRequest.taskType;
                    runStatus = listInstancesRequest.runStatus;
                    notifyStatus = listInstancesRequest.notifyStatus;
                    startTime = listInstancesRequest.startTime;
                    endTime = listInstancesRequest.endTime;
                    limit = listInstancesRequest.limit;
                    offset = listInstancesRequest.offset;
                } else {
                    workspace = listInstancesRequest['workspace'];
                    name = listInstancesRequest['name'];
                    taskType = listInstancesRequest['task_type'];
                    runStatus = listInstancesRequest['run_status'];
                    notifyStatus = listInstancesRequest['notify_status'];
                    startTime = listInstancesRequest['start_time'];
                    endTime = listInstancesRequest['end_time'];
                    limit = listInstancesRequest['limit'];
                    offset = listInstancesRequest['offset'];
                }
            }

        
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (taskType !== null && taskType !== undefined) {
                localVarQueryParameter['task_type'] = taskType;
            }
            if (runStatus !== null && runStatus !== undefined) {
                localVarQueryParameter['run_status'] = runStatus;
            }
            if (notifyStatus !== null && notifyStatus !== undefined) {
                localVarQueryParameter['notify_status'] = notifyStatus;
            }
            if (startTime !== null && startTime !== undefined) {
                localVarQueryParameter['start_time'] = startTime;
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取工作空间列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listManagerWorkSpaces(listManagerWorkSpacesRequest?: ListManagerWorkSpacesRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/workspaces/{instance_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let limit;
            
            let offset;

            if (listManagerWorkSpacesRequest !== null && listManagerWorkSpacesRequest !== undefined) {
                if (listManagerWorkSpacesRequest instanceof ListManagerWorkSpacesRequest) {
                    instanceId = listManagerWorkSpacesRequest.instanceId;
                    limit = listManagerWorkSpacesRequest.limit;
                    offset = listManagerWorkSpacesRequest.offset;
                } else {
                    instanceId = listManagerWorkSpacesRequest['instance_id'];
                    limit = listManagerWorkSpacesRequest['limit'];
                    offset = listManagerWorkSpacesRequest['offset'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listManagerWorkSpaces.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询消息列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listMessage(listMessageRequest?: ListMessageRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/service/messages",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let workspace;
            
            let contentType;
            
            let dlmType;
            
            let offset;
            
            let limit;
            
            let apiName;

            if (listMessageRequest !== null && listMessageRequest !== undefined) {
                if (listMessageRequest instanceof ListMessageRequest) {
                    workspace = listMessageRequest.workspace;
                    contentType = listMessageRequest.contentType;
                    dlmType = listMessageRequest.dlmType;
                    offset = listMessageRequest.offset;
                    limit = listMessageRequest.limit;
                    apiName = listMessageRequest.apiName;
                } else {
                    workspace = listMessageRequest['workspace'];
                    contentType = listMessageRequest['Content-Type'];
                    dlmType = listMessageRequest['Dlm-Type'];
                    offset = listMessageRequest['offset'];
                    limit = listMessageRequest['limit'];
                    apiName = listMessageRequest['api_name'];
                }
            }

        
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (apiName !== null && apiName !== undefined) {
                localVarQueryParameter['api_name'] = apiName;
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }
            if (dlmType !== undefined && dlmType !== null) {
                localVarHeaderParameter['Dlm-Type'] = String(dlmType);
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取当前指标图谱
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listMetricRelations(listMetricRelationsRequest?: ListMetricRelationsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/design/metric-relations/{id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let workspace;
            
            let id;
            
            let bizType;

            if (listMetricRelationsRequest !== null && listMetricRelationsRequest !== undefined) {
                if (listMetricRelationsRequest instanceof ListMetricRelationsRequest) {
                    workspace = listMetricRelationsRequest.workspace;
                    id = listMetricRelationsRequest.id;
                    bizType = listMetricRelationsRequest.bizType;
                } else {
                    workspace = listMetricRelationsRequest['workspace'];
                    id = listMetricRelationsRequest['id'];
                    bizType = listMetricRelationsRequest['biz_type'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling listMetricRelations.');
            }
            if (bizType === null || bizType === undefined) {
                throw new RequiredError('bizType','Required parameter bizType was null or undefined when calling listMetricRelations.');
            }
            if (bizType !== null && bizType !== undefined) {
                localVarQueryParameter['biz_type'] = bizType;
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取质量作业列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listQualityTask(listQualityTaskRequest?: ListQualityTaskRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/quality/quality-tasks",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let workspace;
            
            let categoryId;
            
            let name;
            
            let scheduleStatus;
            
            let startTime;
            
            let endTime;
            
            let creator;
            
            let limit;
            
            let offset;

            if (listQualityTaskRequest !== null && listQualityTaskRequest !== undefined) {
                if (listQualityTaskRequest instanceof ListQualityTaskRequest) {
                    workspace = listQualityTaskRequest.workspace;
                    categoryId = listQualityTaskRequest.categoryId;
                    name = listQualityTaskRequest.name;
                    scheduleStatus = listQualityTaskRequest.scheduleStatus;
                    startTime = listQualityTaskRequest.startTime;
                    endTime = listQualityTaskRequest.endTime;
                    creator = listQualityTaskRequest.creator;
                    limit = listQualityTaskRequest.limit;
                    offset = listQualityTaskRequest.offset;
                } else {
                    workspace = listQualityTaskRequest['workspace'];
                    categoryId = listQualityTaskRequest['category_id'];
                    name = listQualityTaskRequest['name'];
                    scheduleStatus = listQualityTaskRequest['schedule_status'];
                    startTime = listQualityTaskRequest['start_time'];
                    endTime = listQualityTaskRequest['end_time'];
                    creator = listQualityTaskRequest['creator'];
                    limit = listQualityTaskRequest['limit'];
                    offset = listQualityTaskRequest['offset'];
                }
            }

        
            if (categoryId !== null && categoryId !== undefined) {
                localVarQueryParameter['category_id'] = categoryId;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (scheduleStatus !== null && scheduleStatus !== undefined) {
                localVarQueryParameter['schedule_status'] = scheduleStatus;
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
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listQualityTaskLists(listQualityTaskListsRequest?: ListQualityTaskListsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/quality/rules",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let start;
            
            let pageSize;
            
            let offset;
            
            let limit;
            
            let categoryId;
            
            let ruleName;
            
            let scheduleStatus;
            
            let schedulePeriod;
            
            let startTime;
            
            let endTime;
            
            let resultStatus;
            
            let sort;
            
            let order;

            if (listQualityTaskListsRequest !== null && listQualityTaskListsRequest !== undefined) {
                if (listQualityTaskListsRequest instanceof ListQualityTaskListsRequest) {
                    start = listQualityTaskListsRequest.start;
                    pageSize = listQualityTaskListsRequest.pageSize;
                    offset = listQualityTaskListsRequest.offset;
                    limit = listQualityTaskListsRequest.limit;
                    categoryId = listQualityTaskListsRequest.categoryId;
                    ruleName = listQualityTaskListsRequest.ruleName;
                    scheduleStatus = listQualityTaskListsRequest.scheduleStatus;
                    schedulePeriod = listQualityTaskListsRequest.schedulePeriod;
                    startTime = listQualityTaskListsRequest.startTime;
                    endTime = listQualityTaskListsRequest.endTime;
                    resultStatus = listQualityTaskListsRequest.resultStatus;
                    sort = listQualityTaskListsRequest.sort;
                    order = listQualityTaskListsRequest.order;
                } else {
                    start = listQualityTaskListsRequest['start'];
                    pageSize = listQualityTaskListsRequest['page_size'];
                    offset = listQualityTaskListsRequest['offset'];
                    limit = listQualityTaskListsRequest['limit'];
                    categoryId = listQualityTaskListsRequest['category_id'];
                    ruleName = listQualityTaskListsRequest['rule_name'];
                    scheduleStatus = listQualityTaskListsRequest['schedule_status'];
                    schedulePeriod = listQualityTaskListsRequest['schedule_period'];
                    startTime = listQualityTaskListsRequest['start_time'];
                    endTime = listQualityTaskListsRequest['end_time'];
                    resultStatus = listQualityTaskListsRequest['result_status'];
                    sort = listQualityTaskListsRequest['sort'];
                    order = listQualityTaskListsRequest['order'];
                }
            }

        
            if (start !== null && start !== undefined) {
                localVarQueryParameter['start'] = start;
            }
            if (pageSize !== null && pageSize !== undefined) {
                localVarQueryParameter['page_size'] = pageSize;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (categoryId !== null && categoryId !== undefined) {
                localVarQueryParameter['category_id'] = categoryId;
            }
            if (ruleName !== null && ruleName !== undefined) {
                localVarQueryParameter['rule_name'] = ruleName;
            }
            if (scheduleStatus !== null && scheduleStatus !== undefined) {
                localVarQueryParameter['schedule_status'] = scheduleStatus;
            }
            if (schedulePeriod !== null && schedulePeriod !== undefined) {
                localVarQueryParameter['schedule_period'] = schedulePeriod;
            }
            if (startTime !== null && startTime !== undefined) {
                localVarQueryParameter['start_time'] = startTime;
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }
            if (resultStatus !== null && resultStatus !== undefined) {
                localVarQueryParameter['result_status'] = resultStatus;
            }
            if (sort !== null && sort !== undefined) {
                localVarQueryParameter['sort'] = sort;
            }
            if (order !== null && order !== undefined) {
                localVarQueryParameter['order'] = order;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 分页获取规则模板列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listQualityTemplates(listQualityTemplatesRequest?: ListQualityTemplatesRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/quality/rule-templates",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let workspace;
            
            let categoryId;
            
            let name;
            
            let systemTemplate;
            
            let creator;
            
            let limit;
            
            let offset;

            if (listQualityTemplatesRequest !== null && listQualityTemplatesRequest !== undefined) {
                if (listQualityTemplatesRequest instanceof ListQualityTemplatesRequest) {
                    workspace = listQualityTemplatesRequest.workspace;
                    categoryId = listQualityTemplatesRequest.categoryId;
                    name = listQualityTemplatesRequest.name;
                    systemTemplate = listQualityTemplatesRequest.systemTemplate;
                    creator = listQualityTemplatesRequest.creator;
                    limit = listQualityTemplatesRequest.limit;
                    offset = listQualityTemplatesRequest.offset;
                } else {
                    workspace = listQualityTemplatesRequest['workspace'];
                    categoryId = listQualityTemplatesRequest['category_id'];
                    name = listQualityTemplatesRequest['name'];
                    systemTemplate = listQualityTemplatesRequest['system_template'];
                    creator = listQualityTemplatesRequest['creator'];
                    limit = listQualityTemplatesRequest['limit'];
                    offset = listQualityTemplatesRequest['offset'];
                }
            }

        
            if (categoryId !== null && categoryId !== undefined) {
                localVarQueryParameter['category_id'] = categoryId;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (systemTemplate !== null && systemTemplate !== undefined) {
                localVarQueryParameter['system_template'] = systemTemplate;
            }
            if (creator !== null && creator !== undefined) {
                localVarQueryParameter['creator'] = creator;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 通过名称、等分页查找关系信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listRelations(listRelationsRequest?: ListRelationsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/design/relation",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let workspace;
            
            let name;
            
            let createBy;
            
            let beginTime;
            
            let endTime;
            
            let limit;
            
            let offset;

            if (listRelationsRequest !== null && listRelationsRequest !== undefined) {
                if (listRelationsRequest instanceof ListRelationsRequest) {
                    workspace = listRelationsRequest.workspace;
                    name = listRelationsRequest.name;
                    createBy = listRelationsRequest.createBy;
                    beginTime = listRelationsRequest.beginTime;
                    endTime = listRelationsRequest.endTime;
                    limit = listRelationsRequest.limit;
                    offset = listRelationsRequest.offset;
                } else {
                    workspace = listRelationsRequest['workspace'];
                    name = listRelationsRequest['name'];
                    createBy = listRelationsRequest['create_by'];
                    beginTime = listRelationsRequest['begin_time'];
                    endTime = listRelationsRequest['end_time'];
                    limit = listRelationsRequest['limit'];
                    offset = listRelationsRequest['offset'];
                }
            }

        
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (createBy !== null && createBy !== undefined) {
                localVarQueryParameter['create_by'] = createBy;
            }
            if (beginTime !== null && beginTime !== undefined) {
                localVarQueryParameter['begin_time'] = beginTime;
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取schemas,目前只有DWS和采用postgresql驱动的RDS数据源支持schema,请在调用前确认该数据源是否支持schema字段
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listSchemas(listSchemasRequest?: ListSchemasRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/{connection_id}/schemas",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let workspace;
            
            let connectionId;
            
            let databaseName;
            
            let limit;
            
            let offset;

            if (listSchemasRequest !== null && listSchemasRequest !== undefined) {
                if (listSchemasRequest instanceof ListSchemasRequest) {
                    workspace = listSchemasRequest.workspace;
                    connectionId = listSchemasRequest.connectionId;
                    databaseName = listSchemasRequest.databaseName;
                    limit = listSchemasRequest.limit;
                    offset = listSchemasRequest.offset;
                } else {
                    workspace = listSchemasRequest['workspace'];
                    connectionId = listSchemasRequest['connection_id'];
                    databaseName = listSchemasRequest['database_name'];
                    limit = listSchemasRequest['limit'];
                    offset = listSchemasRequest['offset'];
                }
            }

        
            if (connectionId === null || connectionId === undefined) {
            throw new RequiredError('connectionId','Required parameter connectionId was null or undefined when calling listSchemas.');
            }
            if (databaseName === null || databaseName === undefined) {
                throw new RequiredError('databaseName','Required parameter databaseName was null or undefined when calling listSchemas.');
            }
            if (databaseName !== null && databaseName !== undefined) {
                localVarQueryParameter['database_name'] = databaseName;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'connection_id': connectionId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询规则组列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listSecurityDataClassificationRuleGroups(listSecurityDataClassificationRuleGroupsRequest?: ListSecurityDataClassificationRuleGroupsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/security/data-classification/rule/group",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let workspace;
            
            let limit;
            
            let offset;
            
            let name;
            
            let creator;
            
            let orderBy;
            
            let desc;

            if (listSecurityDataClassificationRuleGroupsRequest !== null && listSecurityDataClassificationRuleGroupsRequest !== undefined) {
                if (listSecurityDataClassificationRuleGroupsRequest instanceof ListSecurityDataClassificationRuleGroupsRequest) {
                    workspace = listSecurityDataClassificationRuleGroupsRequest.workspace;
                    limit = listSecurityDataClassificationRuleGroupsRequest.limit;
                    offset = listSecurityDataClassificationRuleGroupsRequest.offset;
                    name = listSecurityDataClassificationRuleGroupsRequest.name;
                    creator = listSecurityDataClassificationRuleGroupsRequest.creator;
                    orderBy = listSecurityDataClassificationRuleGroupsRequest.orderBy;
                    desc = listSecurityDataClassificationRuleGroupsRequest.desc;
                } else {
                    workspace = listSecurityDataClassificationRuleGroupsRequest['workspace'];
                    limit = listSecurityDataClassificationRuleGroupsRequest['limit'];
                    offset = listSecurityDataClassificationRuleGroupsRequest['offset'];
                    name = listSecurityDataClassificationRuleGroupsRequest['name'];
                    creator = listSecurityDataClassificationRuleGroupsRequest['creator'];
                    orderBy = listSecurityDataClassificationRuleGroupsRequest['order_by'];
                    desc = listSecurityDataClassificationRuleGroupsRequest['desc'];
                }
            }

        
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (creator !== null && creator !== undefined) {
                localVarQueryParameter['creator'] = creator;
            }
            if (orderBy !== null && orderBy !== undefined) {
                localVarQueryParameter['order_by'] = orderBy;
            }
            if (desc !== null && desc !== undefined) {
                localVarQueryParameter['desc'] = desc;
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询识别规则列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listSecurityDataClassificationRules(listSecurityDataClassificationRulesRequest?: ListSecurityDataClassificationRulesRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/security/data-classification/rule",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let workspace;
            
            let offset;
            
            let limit;
            
            let secrecyLevel;
            
            let name;
            
            let creator;
            
            let enable;
            
            let startTime;
            
            let endTime;
            
            let orderBy;
            
            let desc;

            if (listSecurityDataClassificationRulesRequest !== null && listSecurityDataClassificationRulesRequest !== undefined) {
                if (listSecurityDataClassificationRulesRequest instanceof ListSecurityDataClassificationRulesRequest) {
                    workspace = listSecurityDataClassificationRulesRequest.workspace;
                    offset = listSecurityDataClassificationRulesRequest.offset;
                    limit = listSecurityDataClassificationRulesRequest.limit;
                    secrecyLevel = listSecurityDataClassificationRulesRequest.secrecyLevel;
                    name = listSecurityDataClassificationRulesRequest.name;
                    creator = listSecurityDataClassificationRulesRequest.creator;
                    enable = listSecurityDataClassificationRulesRequest.enable;
                    startTime = listSecurityDataClassificationRulesRequest.startTime;
                    endTime = listSecurityDataClassificationRulesRequest.endTime;
                    orderBy = listSecurityDataClassificationRulesRequest.orderBy;
                    desc = listSecurityDataClassificationRulesRequest.desc;
                } else {
                    workspace = listSecurityDataClassificationRulesRequest['workspace'];
                    offset = listSecurityDataClassificationRulesRequest['offset'];
                    limit = listSecurityDataClassificationRulesRequest['limit'];
                    secrecyLevel = listSecurityDataClassificationRulesRequest['secrecy_level'];
                    name = listSecurityDataClassificationRulesRequest['name'];
                    creator = listSecurityDataClassificationRulesRequest['creator'];
                    enable = listSecurityDataClassificationRulesRequest['enable'];
                    startTime = listSecurityDataClassificationRulesRequest['start_time'];
                    endTime = listSecurityDataClassificationRulesRequest['end_time'];
                    orderBy = listSecurityDataClassificationRulesRequest['order_by'];
                    desc = listSecurityDataClassificationRulesRequest['desc'];
                }
            }

        
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (secrecyLevel !== null && secrecyLevel !== undefined) {
                localVarQueryParameter['secrecy_level'] = secrecyLevel;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (creator !== null && creator !== undefined) {
                localVarQueryParameter['creator'] = creator;
            }
            if (enable !== null && enable !== undefined) {
                localVarQueryParameter['enable'] = enable;
            }
            if (startTime !== null && startTime !== undefined) {
                localVarQueryParameter['start_time'] = startTime;
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }
            if (orderBy !== null && orderBy !== undefined) {
                localVarQueryParameter['order_by'] = orderBy;
            }
            if (desc !== null && desc !== undefined) {
                localVarQueryParameter['desc'] = desc;
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询数据操作信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listSecurityDatasourceActions(listSecurityDatasourceActionsRequest?: ListSecurityDatasourceActionsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/security/permission-sets/datasource/actions",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let workspace;
            
            let parentPermissionSetId;
            
            let clusterId;
            
            let datasourceType;
            
            let databaseName;
            
            let schemaName;
            
            let tableName;
            
            let columnName;
            
            let url;

            if (listSecurityDatasourceActionsRequest !== null && listSecurityDatasourceActionsRequest !== undefined) {
                if (listSecurityDatasourceActionsRequest instanceof ListSecurityDatasourceActionsRequest) {
                    workspace = listSecurityDatasourceActionsRequest.workspace;
                    parentPermissionSetId = listSecurityDatasourceActionsRequest.parentPermissionSetId;
                    clusterId = listSecurityDatasourceActionsRequest.clusterId;
                    datasourceType = listSecurityDatasourceActionsRequest.datasourceType;
                    databaseName = listSecurityDatasourceActionsRequest.databaseName;
                    schemaName = listSecurityDatasourceActionsRequest.schemaName;
                    tableName = listSecurityDatasourceActionsRequest.tableName;
                    columnName = listSecurityDatasourceActionsRequest.columnName;
                    url = listSecurityDatasourceActionsRequest.url;
                } else {
                    workspace = listSecurityDatasourceActionsRequest['workspace'];
                    parentPermissionSetId = listSecurityDatasourceActionsRequest['parent_permission_set_id'];
                    clusterId = listSecurityDatasourceActionsRequest['cluster_id'];
                    datasourceType = listSecurityDatasourceActionsRequest['datasource_type'];
                    databaseName = listSecurityDatasourceActionsRequest['database_name'];
                    schemaName = listSecurityDatasourceActionsRequest['schema_name'];
                    tableName = listSecurityDatasourceActionsRequest['table_name'];
                    columnName = listSecurityDatasourceActionsRequest['column_name'];
                    url = listSecurityDatasourceActionsRequest['url'];
                }
            }

        
            if (parentPermissionSetId === null || parentPermissionSetId === undefined) {
                throw new RequiredError('parentPermissionSetId','Required parameter parentPermissionSetId was null or undefined when calling listSecurityDatasourceActions.');
            }
            if (parentPermissionSetId !== null && parentPermissionSetId !== undefined) {
                localVarQueryParameter['parent_permission_set_id'] = parentPermissionSetId;
            }
            if (clusterId === null || clusterId === undefined) {
                throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling listSecurityDatasourceActions.');
            }
            if (clusterId !== null && clusterId !== undefined) {
                localVarQueryParameter['cluster_id'] = clusterId;
            }
            if (datasourceType === null || datasourceType === undefined) {
                throw new RequiredError('datasourceType','Required parameter datasourceType was null or undefined when calling listSecurityDatasourceActions.');
            }
            if (datasourceType !== null && datasourceType !== undefined) {
                localVarQueryParameter['datasource_type'] = datasourceType;
            }
            if (databaseName !== null && databaseName !== undefined) {
                localVarQueryParameter['database_name'] = databaseName;
            }
            if (schemaName !== null && schemaName !== undefined) {
                localVarQueryParameter['schema_name'] = schemaName;
            }
            if (tableName !== null && tableName !== undefined) {
                localVarQueryParameter['table_name'] = tableName;
            }
            if (columnName !== null && columnName !== undefined) {
                localVarQueryParameter['column_name'] = columnName;
            }
            if (url !== null && url !== undefined) {
                localVarQueryParameter['url'] = url;
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询数据源可配置权限
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listSecurityDatasourceConfigurations(listSecurityDatasourceConfigurationsRequest?: ListSecurityDatasourceConfigurationsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/security/permission-sets/datasource/configurations",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let workspace;

            if (listSecurityDatasourceConfigurationsRequest !== null && listSecurityDatasourceConfigurationsRequest !== undefined) {
                if (listSecurityDatasourceConfigurationsRequest instanceof ListSecurityDatasourceConfigurationsRequest) {
                    workspace = listSecurityDatasourceConfigurationsRequest.workspace;
                } else {
                    workspace = listSecurityDatasourceConfigurationsRequest['workspace'];
                }
            }

        
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }

            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询url信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listSecurityDatasourceUrls(listSecurityDatasourceUrlsRequest?: ListSecurityDatasourceUrlsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/security/permission-sets/datasource/urls",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let workspace;
            
            let clusterId;
            
            let datasourceType;
            
            let parentPermissionSetId;

            if (listSecurityDatasourceUrlsRequest !== null && listSecurityDatasourceUrlsRequest !== undefined) {
                if (listSecurityDatasourceUrlsRequest instanceof ListSecurityDatasourceUrlsRequest) {
                    workspace = listSecurityDatasourceUrlsRequest.workspace;
                    clusterId = listSecurityDatasourceUrlsRequest.clusterId;
                    datasourceType = listSecurityDatasourceUrlsRequest.datasourceType;
                    parentPermissionSetId = listSecurityDatasourceUrlsRequest.parentPermissionSetId;
                } else {
                    workspace = listSecurityDatasourceUrlsRequest['workspace'];
                    clusterId = listSecurityDatasourceUrlsRequest['cluster_id'];
                    datasourceType = listSecurityDatasourceUrlsRequest['datasource_type'];
                    parentPermissionSetId = listSecurityDatasourceUrlsRequest['parent_permission_set_id'];
                }
            }

        
            if (clusterId !== null && clusterId !== undefined) {
                localVarQueryParameter['cluster_id'] = clusterId;
            }
            if (datasourceType !== null && datasourceType !== undefined) {
                localVarQueryParameter['datasource_type'] = datasourceType;
            }
            if (parentPermissionSetId !== null && parentPermissionSetId !== undefined) {
                localVarQueryParameter['parent_permission_set_id'] = parentPermissionSetId;
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询权限集成员列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listSecurityPermissionSetMembers(listSecurityPermissionSetMembersRequest?: ListSecurityPermissionSetMembersRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/security/permission-sets/{permission_set_id}/members",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let permissionSetId;
            
            let workspace;
            
            let limit;
            
            let offset;
            
            let memberName;
            
            let memberType;
            
            let orderByAsc;
            
            let orderBy;

            if (listSecurityPermissionSetMembersRequest !== null && listSecurityPermissionSetMembersRequest !== undefined) {
                if (listSecurityPermissionSetMembersRequest instanceof ListSecurityPermissionSetMembersRequest) {
                    permissionSetId = listSecurityPermissionSetMembersRequest.permissionSetId;
                    workspace = listSecurityPermissionSetMembersRequest.workspace;
                    limit = listSecurityPermissionSetMembersRequest.limit;
                    offset = listSecurityPermissionSetMembersRequest.offset;
                    memberName = listSecurityPermissionSetMembersRequest.memberName;
                    memberType = listSecurityPermissionSetMembersRequest.memberType;
                    orderByAsc = listSecurityPermissionSetMembersRequest.orderByAsc;
                    orderBy = listSecurityPermissionSetMembersRequest.orderBy;
                } else {
                    permissionSetId = listSecurityPermissionSetMembersRequest['permission_set_id'];
                    workspace = listSecurityPermissionSetMembersRequest['workspace'];
                    limit = listSecurityPermissionSetMembersRequest['limit'];
                    offset = listSecurityPermissionSetMembersRequest['offset'];
                    memberName = listSecurityPermissionSetMembersRequest['member_name'];
                    memberType = listSecurityPermissionSetMembersRequest['member_type'];
                    orderByAsc = listSecurityPermissionSetMembersRequest['order_by_asc'];
                    orderBy = listSecurityPermissionSetMembersRequest['order_by'];
                }
            }

        
            if (permissionSetId === null || permissionSetId === undefined) {
            throw new RequiredError('permissionSetId','Required parameter permissionSetId was null or undefined when calling listSecurityPermissionSetMembers.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (memberName !== null && memberName !== undefined) {
                localVarQueryParameter['member_name'] = memberName;
            }
            if (memberType !== null && memberType !== undefined) {
                localVarQueryParameter['member_type'] = memberType;
            }
            if (orderByAsc !== null && orderByAsc !== undefined) {
                localVarQueryParameter['order_by_asc'] = orderByAsc;
            }
            if (orderBy !== null && orderBy !== undefined) {
                localVarQueryParameter['order_by'] = orderBy;
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'permission_set_id': permissionSetId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询权限集的权限列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listSecurityPermissionSetPermissions(listSecurityPermissionSetPermissionsRequest?: ListSecurityPermissionSetPermissionsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/security/permission-sets/{permission_set_id}/permissions",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let permissionSetId;
            
            let workspace;
            
            let limit;
            
            let offset;
            
            let permissionType;
            
            let permissionAction;
            
            let clusterId;
            
            let clusterName;
            
            let datasourceType;
            
            let databaseName;
            
            let tableName;
            
            let columnName;
            
            let syncStatus;
            
            let orderBy;
            
            let orderByAsc;

            if (listSecurityPermissionSetPermissionsRequest !== null && listSecurityPermissionSetPermissionsRequest !== undefined) {
                if (listSecurityPermissionSetPermissionsRequest instanceof ListSecurityPermissionSetPermissionsRequest) {
                    permissionSetId = listSecurityPermissionSetPermissionsRequest.permissionSetId;
                    workspace = listSecurityPermissionSetPermissionsRequest.workspace;
                    limit = listSecurityPermissionSetPermissionsRequest.limit;
                    offset = listSecurityPermissionSetPermissionsRequest.offset;
                    permissionType = listSecurityPermissionSetPermissionsRequest.permissionType;
                    permissionAction = listSecurityPermissionSetPermissionsRequest.permissionAction;
                    clusterId = listSecurityPermissionSetPermissionsRequest.clusterId;
                    clusterName = listSecurityPermissionSetPermissionsRequest.clusterName;
                    datasourceType = listSecurityPermissionSetPermissionsRequest.datasourceType;
                    databaseName = listSecurityPermissionSetPermissionsRequest.databaseName;
                    tableName = listSecurityPermissionSetPermissionsRequest.tableName;
                    columnName = listSecurityPermissionSetPermissionsRequest.columnName;
                    syncStatus = listSecurityPermissionSetPermissionsRequest.syncStatus;
                    orderBy = listSecurityPermissionSetPermissionsRequest.orderBy;
                    orderByAsc = listSecurityPermissionSetPermissionsRequest.orderByAsc;
                } else {
                    permissionSetId = listSecurityPermissionSetPermissionsRequest['permission_set_id'];
                    workspace = listSecurityPermissionSetPermissionsRequest['workspace'];
                    limit = listSecurityPermissionSetPermissionsRequest['limit'];
                    offset = listSecurityPermissionSetPermissionsRequest['offset'];
                    permissionType = listSecurityPermissionSetPermissionsRequest['permission_type'];
                    permissionAction = listSecurityPermissionSetPermissionsRequest['permission_action'];
                    clusterId = listSecurityPermissionSetPermissionsRequest['cluster_id'];
                    clusterName = listSecurityPermissionSetPermissionsRequest['cluster_name'];
                    datasourceType = listSecurityPermissionSetPermissionsRequest['datasource_type'];
                    databaseName = listSecurityPermissionSetPermissionsRequest['database_name'];
                    tableName = listSecurityPermissionSetPermissionsRequest['table_name'];
                    columnName = listSecurityPermissionSetPermissionsRequest['column_name'];
                    syncStatus = listSecurityPermissionSetPermissionsRequest['sync_status'];
                    orderBy = listSecurityPermissionSetPermissionsRequest['order_by'];
                    orderByAsc = listSecurityPermissionSetPermissionsRequest['order_by_asc'];
                }
            }

        
            if (permissionSetId === null || permissionSetId === undefined) {
            throw new RequiredError('permissionSetId','Required parameter permissionSetId was null or undefined when calling listSecurityPermissionSetPermissions.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (permissionType !== null && permissionType !== undefined) {
                localVarQueryParameter['permission_type'] = permissionType;
            }
            if (permissionAction !== null && permissionAction !== undefined) {
                localVarQueryParameter['permission_action'] = permissionAction;
            }
            if (clusterId !== null && clusterId !== undefined) {
                localVarQueryParameter['cluster_id'] = clusterId;
            }
            if (clusterName !== null && clusterName !== undefined) {
                localVarQueryParameter['cluster_name'] = clusterName;
            }
            if (datasourceType !== null && datasourceType !== undefined) {
                localVarQueryParameter['datasource_type'] = datasourceType;
            }
            if (databaseName !== null && databaseName !== undefined) {
                localVarQueryParameter['database_name'] = databaseName;
            }
            if (tableName !== null && tableName !== undefined) {
                localVarQueryParameter['table_name'] = tableName;
            }
            if (columnName !== null && columnName !== undefined) {
                localVarQueryParameter['column_name'] = columnName;
            }
            if (syncStatus !== null && syncStatus !== undefined) {
                localVarQueryParameter['sync_status'] = syncStatus;
            }
            if (orderBy !== null && orderBy !== undefined) {
                localVarQueryParameter['order_by'] = orderBy;
            }
            if (orderByAsc !== null && orderByAsc !== undefined) {
                localVarQueryParameter['order_by_asc'] = orderByAsc;
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'permission_set_id': permissionSetId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询权限集列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listSecurityPermissionSets(listSecurityPermissionSetsRequest?: ListSecurityPermissionSetsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/security/permission-sets",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let workspace;
            
            let limit;
            
            let offset;
            
            let name;
            
            let parentId;
            
            let typeFilter;
            
            let managerId;
            
            let managerName;
            
            let managerType;
            
            let datasourceType;
            
            let syncStatus;
            
            let orderBy;
            
            let orderByAsc;

            if (listSecurityPermissionSetsRequest !== null && listSecurityPermissionSetsRequest !== undefined) {
                if (listSecurityPermissionSetsRequest instanceof ListSecurityPermissionSetsRequest) {
                    workspace = listSecurityPermissionSetsRequest.workspace;
                    limit = listSecurityPermissionSetsRequest.limit;
                    offset = listSecurityPermissionSetsRequest.offset;
                    name = listSecurityPermissionSetsRequest.name;
                    parentId = listSecurityPermissionSetsRequest.parentId;
                    typeFilter = listSecurityPermissionSetsRequest.typeFilter;
                    managerId = listSecurityPermissionSetsRequest.managerId;
                    managerName = listSecurityPermissionSetsRequest.managerName;
                    managerType = listSecurityPermissionSetsRequest.managerType;
                    datasourceType = listSecurityPermissionSetsRequest.datasourceType;
                    syncStatus = listSecurityPermissionSetsRequest.syncStatus;
                    orderBy = listSecurityPermissionSetsRequest.orderBy;
                    orderByAsc = listSecurityPermissionSetsRequest.orderByAsc;
                } else {
                    workspace = listSecurityPermissionSetsRequest['workspace'];
                    limit = listSecurityPermissionSetsRequest['limit'];
                    offset = listSecurityPermissionSetsRequest['offset'];
                    name = listSecurityPermissionSetsRequest['name'];
                    parentId = listSecurityPermissionSetsRequest['parent_id'];
                    typeFilter = listSecurityPermissionSetsRequest['type_filter'];
                    managerId = listSecurityPermissionSetsRequest['manager_id'];
                    managerName = listSecurityPermissionSetsRequest['manager_name'];
                    managerType = listSecurityPermissionSetsRequest['manager_type'];
                    datasourceType = listSecurityPermissionSetsRequest['datasource_type'];
                    syncStatus = listSecurityPermissionSetsRequest['sync_status'];
                    orderBy = listSecurityPermissionSetsRequest['order_by'];
                    orderByAsc = listSecurityPermissionSetsRequest['order_by_asc'];
                }
            }

        
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (parentId !== null && parentId !== undefined) {
                localVarQueryParameter['parent_id'] = parentId;
            }
            if (typeFilter !== null && typeFilter !== undefined) {
                localVarQueryParameter['type_filter'] = typeFilter;
            }
            if (managerId !== null && managerId !== undefined) {
                localVarQueryParameter['manager_id'] = managerId;
            }
            if (managerName !== null && managerName !== undefined) {
                localVarQueryParameter['manager_name'] = managerName;
            }
            if (managerType !== null && managerType !== undefined) {
                localVarQueryParameter['manager_type'] = managerType;
            }
            if (datasourceType !== null && datasourceType !== undefined) {
                localVarQueryParameter['datasource_type'] = datasourceType;
            }
            if (syncStatus !== null && syncStatus !== undefined) {
                localVarQueryParameter['sync_status'] = syncStatus;
            }
            if (orderBy !== null && orderBy !== undefined) {
                localVarQueryParameter['order_by'] = orderBy;
            }
            if (orderByAsc !== null && orderByAsc !== undefined) {
                localVarQueryParameter['order_by_asc'] = orderByAsc;
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询角色对一组库、表的权限交集
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listSecurityRoleActions(listSecurityRoleActionsRequest?: ListSecurityRoleActionsRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/security/permission-sets/datasource/role/batch-actions",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let workspace;

            if (listSecurityRoleActionsRequest !== null && listSecurityRoleActionsRequest !== undefined) {
                if (listSecurityRoleActionsRequest instanceof ListSecurityRoleActionsRequest) {
                    workspace = listSecurityRoleActionsRequest.workspace;
                    body = listSecurityRoleActionsRequest.body
                } else {
                    workspace = listSecurityRoleActionsRequest['workspace'];
                    body = listSecurityRoleActionsRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取密级
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listSecuritySecrecyLevels(listSecuritySecrecyLevelsRequest?: ListSecuritySecrecyLevelsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/security/data-classification/secrecy-level",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let workspace;
            
            let offset;
            
            let limit;
            
            let orderBy;
            
            let desc;

            if (listSecuritySecrecyLevelsRequest !== null && listSecuritySecrecyLevelsRequest !== undefined) {
                if (listSecuritySecrecyLevelsRequest instanceof ListSecuritySecrecyLevelsRequest) {
                    workspace = listSecuritySecrecyLevelsRequest.workspace;
                    offset = listSecuritySecrecyLevelsRequest.offset;
                    limit = listSecuritySecrecyLevelsRequest.limit;
                    orderBy = listSecuritySecrecyLevelsRequest.orderBy;
                    desc = listSecuritySecrecyLevelsRequest.desc;
                } else {
                    workspace = listSecuritySecrecyLevelsRequest['workspace'];
                    offset = listSecuritySecrecyLevelsRequest['offset'];
                    limit = listSecuritySecrecyLevelsRequest['limit'];
                    orderBy = listSecuritySecrecyLevelsRequest['order_by'];
                    desc = listSecuritySecrecyLevelsRequest['desc'];
                }
            }

        
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (orderBy !== null && orderBy !== undefined) {
                localVarQueryParameter['order_by'] = orderBy;
            }
            if (desc !== null && desc !== undefined) {
                localVarQueryParameter['desc'] = desc;
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取主题层级
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listSubjectLevels(listSubjectLevelsRequest?: ListSubjectLevelsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/design/subject-levels",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let workspace;
            
            let limit;
            
            let offset;

            if (listSubjectLevelsRequest !== null && listSubjectLevelsRequest !== undefined) {
                if (listSubjectLevelsRequest instanceof ListSubjectLevelsRequest) {
                    workspace = listSubjectLevelsRequest.workspace;
                    limit = listSubjectLevelsRequest.limit;
                    offset = listSubjectLevelsRequest.offset;
                } else {
                    workspace = listSubjectLevelsRequest['workspace'];
                    limit = listSubjectLevelsRequest['limit'];
                    offset = listSubjectLevelsRequest['offset'];
                }
            }

        
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询模型下所有关系
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listTableModelRelations(listTableModelRelationsRequest?: ListTableModelRelationsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/design/{model_id}/table-model/relation",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let workspace;
            
            let modelId;
            
            let tableIds;
            
            let bizType;
            
            let limit;
            
            let offset;

            if (listTableModelRelationsRequest !== null && listTableModelRelationsRequest !== undefined) {
                if (listTableModelRelationsRequest instanceof ListTableModelRelationsRequest) {
                    workspace = listTableModelRelationsRequest.workspace;
                    modelId = listTableModelRelationsRequest.modelId;
                    tableIds = listTableModelRelationsRequest.tableIds;
                    bizType = listTableModelRelationsRequest.bizType;
                    limit = listTableModelRelationsRequest.limit;
                    offset = listTableModelRelationsRequest.offset;
                } else {
                    workspace = listTableModelRelationsRequest['workspace'];
                    modelId = listTableModelRelationsRequest['model_id'];
                    tableIds = listTableModelRelationsRequest['table_ids'];
                    bizType = listTableModelRelationsRequest['biz_type'];
                    limit = listTableModelRelationsRequest['limit'];
                    offset = listTableModelRelationsRequest['offset'];
                }
            }

        
            if (modelId === null || modelId === undefined) {
            throw new RequiredError('modelId','Required parameter modelId was null or undefined when calling listTableModelRelations.');
            }
            if (tableIds !== null && tableIds !== undefined) {
                localVarQueryParameter['table_ids'] = tableIds;
            }
            if (bizType !== null && bizType !== undefined) {
                localVarQueryParameter['biz_type'] = bizType;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'model_id': modelId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 通过中英文名称、创建者、审核人、状态、修改时间分页查找模型实体信息，包含逻辑实体、表或属性。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listTableModels(listTableModelsRequest?: ListTableModelsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/design/table-model",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let workspace;
            
            let modelId;
            
            let name;
            
            let createBy;
            
            let approver;
            
            let status;
            
            let syncStatus;
            
            let syncKey;
            
            let beginTime;
            
            let endTime;
            
            let limit;
            
            let offset;
            
            let bizCatalogId;

            if (listTableModelsRequest !== null && listTableModelsRequest !== undefined) {
                if (listTableModelsRequest instanceof ListTableModelsRequest) {
                    workspace = listTableModelsRequest.workspace;
                    modelId = listTableModelsRequest.modelId;
                    name = listTableModelsRequest.name;
                    createBy = listTableModelsRequest.createBy;
                    approver = listTableModelsRequest.approver;
                    status = listTableModelsRequest.status;
                    syncStatus = listTableModelsRequest.syncStatus;
                    syncKey = listTableModelsRequest.syncKey;
                    beginTime = listTableModelsRequest.beginTime;
                    endTime = listTableModelsRequest.endTime;
                    limit = listTableModelsRequest.limit;
                    offset = listTableModelsRequest.offset;
                    bizCatalogId = listTableModelsRequest.bizCatalogId;
                } else {
                    workspace = listTableModelsRequest['workspace'];
                    modelId = listTableModelsRequest['model_id'];
                    name = listTableModelsRequest['name'];
                    createBy = listTableModelsRequest['create_by'];
                    approver = listTableModelsRequest['approver'];
                    status = listTableModelsRequest['status'];
                    syncStatus = listTableModelsRequest['sync_status'];
                    syncKey = listTableModelsRequest['sync_key'];
                    beginTime = listTableModelsRequest['begin_time'];
                    endTime = listTableModelsRequest['end_time'];
                    limit = listTableModelsRequest['limit'];
                    offset = listTableModelsRequest['offset'];
                    bizCatalogId = listTableModelsRequest['biz_catalog_id'];
                }
            }

        
            if (modelId === null || modelId === undefined) {
                throw new RequiredError('modelId','Required parameter modelId was null or undefined when calling listTableModels.');
            }
            if (modelId !== null && modelId !== undefined) {
                localVarQueryParameter['model_id'] = modelId;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (createBy !== null && createBy !== undefined) {
                localVarQueryParameter['create_by'] = createBy;
            }
            if (approver !== null && approver !== undefined) {
                localVarQueryParameter['approver'] = approver;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (syncStatus !== null && syncStatus !== undefined) {
                localVarQueryParameter['sync_status'] = syncStatus;
            }
            if (syncKey !== null && syncKey !== undefined) {
                localVarQueryParameter['sync_key'] = syncKey;
            }
            if (beginTime !== null && beginTime !== undefined) {
                localVarQueryParameter['begin_time'] = beginTime;
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (bizCatalogId !== null && bizCatalogId !== undefined) {
                localVarQueryParameter['biz_catalog_id'] = bizCatalogId;
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取工作空间用户角色
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listWorkspaceRoles(listWorkspaceRolesRequest?: ListWorkspaceRolesRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/users/role",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let workspaceId;

            if (listWorkspaceRolesRequest !== null && listWorkspaceRolesRequest !== undefined) {
                if (listWorkspaceRolesRequest instanceof ListWorkspaceRolesRequest) {
                    instanceId = listWorkspaceRolesRequest.instanceId;
                    workspaceId = listWorkspaceRolesRequest.workspaceId;
                } else {
                    instanceId = listWorkspaceRolesRequest['instance_id'];
                    workspaceId = listWorkspaceRolesRequest['workspace_id'];
                }
            }

        
            if (instanceId !== null && instanceId !== undefined) {
                localVarQueryParameter['instance_id'] = instanceId;
            }
            if (workspaceId !== null && workspaceId !== undefined) {
                localVarQueryParameter['workspace_id'] = workspaceId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取模型
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listWorkspaces(listWorkspacesRequest?: ListWorkspacesRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/design/workspaces",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let workspace;
            
            let workspaceType;
            
            let limit;
            
            let offset;
            
            let dwType;

            if (listWorkspacesRequest !== null && listWorkspacesRequest !== undefined) {
                if (listWorkspacesRequest instanceof ListWorkspacesRequest) {
                    workspace = listWorkspacesRequest.workspace;
                    workspaceType = listWorkspacesRequest.workspaceType;
                    limit = listWorkspacesRequest.limit;
                    offset = listWorkspacesRequest.offset;
                    dwType = listWorkspacesRequest.dwType;
                } else {
                    workspace = listWorkspacesRequest['workspace'];
                    workspaceType = listWorkspacesRequest['workspace_type'];
                    limit = listWorkspacesRequest['limit'];
                    offset = listWorkspacesRequest['offset'];
                    dwType = listWorkspacesRequest['dw_type'];
                }
            }

        
            if (workspaceType !== null && workspaceType !== undefined) {
                localVarQueryParameter['workspace_type'] = workspaceType;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (dwType !== null && dwType !== undefined) {
                localVarQueryParameter['dw_type'] = dwType;
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取工作空间用户信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listWorkspaceusers(listWorkspaceusersRequest?: ListWorkspaceusersRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/{workspace_id}/users",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let workspaceId;
            
            let limit;
            
            let offset;

            if (listWorkspaceusersRequest !== null && listWorkspaceusersRequest !== undefined) {
                if (listWorkspaceusersRequest instanceof ListWorkspaceusersRequest) {
                    workspaceId = listWorkspaceusersRequest.workspaceId;
                    limit = listWorkspaceusersRequest.limit;
                    offset = listWorkspaceusersRequest.offset;
                } else {
                    workspaceId = listWorkspaceusersRequest['workspace_id'];
                    limit = listWorkspaceusersRequest['limit'];
                    offset = listWorkspaceusersRequest['offset'];
                }
            }

        
            if (workspaceId === null || workspaceId === undefined) {
            throw new RequiredError('workspaceId','Required parameter workspaceId was null or undefined when calling listWorkspaceusers.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'workspace_id': workspaceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 批量移动api至新目录
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        migrateApi(migrateApiRequest?: MigrateApiRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/service/servicecatalogs/apis/batch-move",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let workspace;
            
            let contentType;
            
            let dlmType;

            if (migrateApiRequest !== null && migrateApiRequest !== undefined) {
                if (migrateApiRequest instanceof MigrateApiRequest) {
                    workspace = migrateApiRequest.workspace;
                    contentType = migrateApiRequest.contentType;
                    body = migrateApiRequest.body
                    dlmType = migrateApiRequest.dlmType;
                } else {
                    workspace = migrateApiRequest['workspace'];
                    contentType = migrateApiRequest['Content-Type'];
                    body = migrateApiRequest['body'];
                    dlmType = migrateApiRequest['Dlm-Type'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }
            if (dlmType !== undefined && dlmType !== null) {
                localVarHeaderParameter['Dlm-Type'] = String(dlmType);
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 移动当前目录至新目录
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        migrateCatalog(migrateCatalogRequest?: MigrateCatalogRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/service/servicecatalogs/{catalog_id}/move",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let workspace;
            
            let contentType;
            
            let catalogId;
            
            let dlmType;

            if (migrateCatalogRequest !== null && migrateCatalogRequest !== undefined) {
                if (migrateCatalogRequest instanceof MigrateCatalogRequest) {
                    workspace = migrateCatalogRequest.workspace;
                    contentType = migrateCatalogRequest.contentType;
                    catalogId = migrateCatalogRequest.catalogId;
                    body = migrateCatalogRequest.body
                    dlmType = migrateCatalogRequest.dlmType;
                } else {
                    workspace = migrateCatalogRequest['workspace'];
                    contentType = migrateCatalogRequest['Content-Type'];
                    catalogId = migrateCatalogRequest['catalog_id'];
                    body = migrateCatalogRequest['body'];
                    dlmType = migrateCatalogRequest['Dlm-Type'];
                }
            }

        
            if (catalogId === null || catalogId === undefined) {
            throw new RequiredError('catalogId','Required parameter catalogId was null or undefined when calling migrateCatalog.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }
            if (dlmType !== undefined && dlmType !== null) {
                localVarHeaderParameter['Dlm-Type'] = String(dlmType);
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'catalog_id': catalogId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改自定义项
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        modifyCustomizedFields(modifyCustomizedFieldsRequest?: ModifyCustomizedFieldsRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/design/customized-fields",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let workspace;

            if (modifyCustomizedFieldsRequest !== null && modifyCustomizedFieldsRequest !== undefined) {
                if (modifyCustomizedFieldsRequest instanceof ModifyCustomizedFieldsRequest) {
                    workspace = modifyCustomizedFieldsRequest.workspace;
                    body = modifyCustomizedFieldsRequest.body
                } else {
                    workspace = modifyCustomizedFieldsRequest['workspace'];
                    body = modifyCustomizedFieldsRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 用户行为分析
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        parseUserBehavior(parseUserBehaviorRequest?: ParseUserBehaviorRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/datamap/uba",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instance;

            if (parseUserBehaviorRequest !== null && parseUserBehaviorRequest !== undefined) {
                if (parseUserBehaviorRequest instanceof ParseUserBehaviorRequest) {
                    instance = parseUserBehaviorRequest.instance;
                    body = parseUserBehaviorRequest.body
                } else {
                    instance = parseUserBehaviorRequest['instance'];
                    body = parseUserBehaviorRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (instance !== undefined && instance !== null) {
                localVarHeaderParameter['instance'] = String(instance);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * DataArtsStudio实例一键购买接口
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        payForDgcOneKey(payForDgcOneKeyRequest?: PayForDgcOneKeyRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/instances/onekey-purchase",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (payForDgcOneKeyRequest !== null && payForDgcOneKeyRequest !== undefined) {
                if (payForDgcOneKeyRequest instanceof PayForDgcOneKeyRequest) {
                    body = payForDgcOneKeyRequest.body
                } else {
                    body = payForDgcOneKeyRequest['body'];
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
         * 指定字段采集概要信息接口
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        renewDataProfile(renewDataProfileRequest?: RenewDataProfileRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/asset/profile/columns",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let workspace;

            if (renewDataProfileRequest !== null && renewDataProfileRequest !== undefined) {
                if (renewDataProfileRequest instanceof RenewDataProfileRequest) {
                    workspace = renewDataProfileRequest.workspace;
                    body = renewDataProfileRequest.body
                } else {
                    workspace = renewDataProfileRequest['workspace'];
                    body = renewDataProfileRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 关联属性与数据标准
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        resetLinkAttributeAndStandard(resetLinkAttributeAndStandardRequest?: ResetLinkAttributeAndStandardRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/design/standards/attribute",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let workspace;

            if (resetLinkAttributeAndStandardRequest !== null && resetLinkAttributeAndStandardRequest !== undefined) {
                if (resetLinkAttributeAndStandardRequest instanceof ResetLinkAttributeAndStandardRequest) {
                    workspace = resetLinkAttributeAndStandardRequest.workspace;
                    body = resetLinkAttributeAndStandardRequest.body
                } else {
                    workspace = resetLinkAttributeAndStandardRequest['workspace'];
                    body = resetLinkAttributeAndStandardRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 撤回审批单
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        rollbackApproval(rollbackApprovalRequest?: RollbackApprovalRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/design/approvals",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let workspace;
            
            let ids;

            if (rollbackApprovalRequest !== null && rollbackApprovalRequest !== undefined) {
                if (rollbackApprovalRequest instanceof RollbackApprovalRequest) {
                    workspace = rollbackApprovalRequest.workspace;
                    ids = rollbackApprovalRequest.ids;
                } else {
                    workspace = rollbackApprovalRequest['workspace'];
                    ids = rollbackApprovalRequest['ids'];
                }
            }

        
            if (ids === null || ids === undefined) {
                throw new RequiredError('ids','Required parameter ids was null or undefined when calling rollbackApproval.');
            }
            if (ids !== null && ids !== undefined) {
                localVarQueryParameter['ids'] = ids;
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取审批单
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        searchApprovals(searchApprovalsRequest?: SearchApprovalsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/design/approvals",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let workspace;
            
            let bizId;
            
            let name;
            
            let createBy;
            
            let approver;
            
            let approvalStatus;
            
            let approvalStatusDetail;
            
            let approvalType;
            
            let bizType;
            
            let beginTime;
            
            let endTime;
            
            let limit;
            
            let offset;

            if (searchApprovalsRequest !== null && searchApprovalsRequest !== undefined) {
                if (searchApprovalsRequest instanceof SearchApprovalsRequest) {
                    workspace = searchApprovalsRequest.workspace;
                    bizId = searchApprovalsRequest.bizId;
                    name = searchApprovalsRequest.name;
                    createBy = searchApprovalsRequest.createBy;
                    approver = searchApprovalsRequest.approver;
                    approvalStatus = searchApprovalsRequest.approvalStatus;
                    approvalStatusDetail = searchApprovalsRequest.approvalStatusDetail;
                    approvalType = searchApprovalsRequest.approvalType;
                    bizType = searchApprovalsRequest.bizType;
                    beginTime = searchApprovalsRequest.beginTime;
                    endTime = searchApprovalsRequest.endTime;
                    limit = searchApprovalsRequest.limit;
                    offset = searchApprovalsRequest.offset;
                } else {
                    workspace = searchApprovalsRequest['workspace'];
                    bizId = searchApprovalsRequest['biz_id'];
                    name = searchApprovalsRequest['name'];
                    createBy = searchApprovalsRequest['create_by'];
                    approver = searchApprovalsRequest['approver'];
                    approvalStatus = searchApprovalsRequest['approval_status'];
                    approvalStatusDetail = searchApprovalsRequest['approval_status_detail'];
                    approvalType = searchApprovalsRequest['approval_type'];
                    bizType = searchApprovalsRequest['biz_type'];
                    beginTime = searchApprovalsRequest['begin_time'];
                    endTime = searchApprovalsRequest['end_time'];
                    limit = searchApprovalsRequest['limit'];
                    offset = searchApprovalsRequest['offset'];
                }
            }

        
            if (bizId !== null && bizId !== undefined) {
                localVarQueryParameter['biz_id'] = bizId;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (createBy !== null && createBy !== undefined) {
                localVarQueryParameter['create_by'] = createBy;
            }
            if (approver !== null && approver !== undefined) {
                localVarQueryParameter['approver'] = approver;
            }
            if (approvalStatus !== null && approvalStatus !== undefined) {
                localVarQueryParameter['approval_status'] = approvalStatus;
            }
            if (approvalStatusDetail !== null && approvalStatusDetail !== undefined) {
                localVarQueryParameter['approval_status_detail'] = approvalStatusDetail;
            }
            if (approvalType !== null && approvalType !== undefined) {
                localVarQueryParameter['approval_type'] = approvalType;
            }
            if (bizType !== null && bizType !== undefined) {
                localVarQueryParameter['biz_type'] = bizType;
            }
            if (beginTime !== null && beginTime !== undefined) {
                localVarQueryParameter['begin_time'] = beginTime;
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 通过中英文名称、创建者、审核人、状态、修改时间分页查找原子指标信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        searchAtomicIndexes(searchAtomicIndexesRequest?: SearchAtomicIndexesRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/design/atomic-indexs",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let workspace;
            
            let name;
            
            let createBy;
            
            let approver;
            
            let status;
            
            let beginTime;
            
            let endTime;
            
            let l3Id;
            
            let tableId;
            
            let limit;
            
            let offset;

            if (searchAtomicIndexesRequest !== null && searchAtomicIndexesRequest !== undefined) {
                if (searchAtomicIndexesRequest instanceof SearchAtomicIndexesRequest) {
                    workspace = searchAtomicIndexesRequest.workspace;
                    name = searchAtomicIndexesRequest.name;
                    createBy = searchAtomicIndexesRequest.createBy;
                    approver = searchAtomicIndexesRequest.approver;
                    status = searchAtomicIndexesRequest.status;
                    beginTime = searchAtomicIndexesRequest.beginTime;
                    endTime = searchAtomicIndexesRequest.endTime;
                    l3Id = searchAtomicIndexesRequest.l3Id;
                    tableId = searchAtomicIndexesRequest.tableId;
                    limit = searchAtomicIndexesRequest.limit;
                    offset = searchAtomicIndexesRequest.offset;
                } else {
                    workspace = searchAtomicIndexesRequest['workspace'];
                    name = searchAtomicIndexesRequest['name'];
                    createBy = searchAtomicIndexesRequest['create_by'];
                    approver = searchAtomicIndexesRequest['approver'];
                    status = searchAtomicIndexesRequest['status'];
                    beginTime = searchAtomicIndexesRequest['begin_time'];
                    endTime = searchAtomicIndexesRequest['end_time'];
                    l3Id = searchAtomicIndexesRequest['l3_id'];
                    tableId = searchAtomicIndexesRequest['table_id'];
                    limit = searchAtomicIndexesRequest['limit'];
                    offset = searchAtomicIndexesRequest['offset'];
                }
            }

        
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (createBy !== null && createBy !== undefined) {
                localVarQueryParameter['create_by'] = createBy;
            }
            if (approver !== null && approver !== undefined) {
                localVarQueryParameter['approver'] = approver;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (beginTime !== null && beginTime !== undefined) {
                localVarQueryParameter['begin_time'] = beginTime;
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }
            if (l3Id !== null && l3Id !== undefined) {
                localVarQueryParameter['l3_id'] = l3Id;
            }
            if (tableId !== null && tableId !== undefined) {
                localVarQueryParameter['table_id'] = tableId;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询API已授权的APP
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        searchAuthorizeApp(searchAuthorizeAppRequest?: SearchAuthorizeAppRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/service/authorize/apis/{api_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let workspace;
            
            let contentType;
            
            let apiId;
            
            let dlmType;
            
            let offset;
            
            let limit;

            if (searchAuthorizeAppRequest !== null && searchAuthorizeAppRequest !== undefined) {
                if (searchAuthorizeAppRequest instanceof SearchAuthorizeAppRequest) {
                    workspace = searchAuthorizeAppRequest.workspace;
                    contentType = searchAuthorizeAppRequest.contentType;
                    apiId = searchAuthorizeAppRequest.apiId;
                    dlmType = searchAuthorizeAppRequest.dlmType;
                    offset = searchAuthorizeAppRequest.offset;
                    limit = searchAuthorizeAppRequest.limit;
                } else {
                    workspace = searchAuthorizeAppRequest['workspace'];
                    contentType = searchAuthorizeAppRequest['Content-Type'];
                    apiId = searchAuthorizeAppRequest['api_id'];
                    dlmType = searchAuthorizeAppRequest['Dlm-Type'];
                    offset = searchAuthorizeAppRequest['offset'];
                    limit = searchAuthorizeAppRequest['limit'];
                }
            }

        
            if (apiId === null || apiId === undefined) {
            throw new RequiredError('apiId','Required parameter apiId was null or undefined when calling searchAuthorizeApp.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }
            if (dlmType !== undefined && dlmType !== null) {
                localVarHeaderParameter['Dlm-Type'] = String(dlmType);
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'api_id': apiId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询APP已拥有授权的API
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        searchBindApi(searchBindApiRequest?: SearchBindApiRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/service/authorize/apps/{app_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let workspace;
            
            let contentType;
            
            let appId;
            
            let dlmType;
            
            let offset;
            
            let limit;

            if (searchBindApiRequest !== null && searchBindApiRequest !== undefined) {
                if (searchBindApiRequest instanceof SearchBindApiRequest) {
                    workspace = searchBindApiRequest.workspace;
                    contentType = searchBindApiRequest.contentType;
                    appId = searchBindApiRequest.appId;
                    dlmType = searchBindApiRequest.dlmType;
                    offset = searchBindApiRequest.offset;
                    limit = searchBindApiRequest.limit;
                } else {
                    workspace = searchBindApiRequest['workspace'];
                    contentType = searchBindApiRequest['Content-Type'];
                    appId = searchBindApiRequest['app_id'];
                    dlmType = searchBindApiRequest['Dlm-Type'];
                    offset = searchBindApiRequest['offset'];
                    limit = searchBindApiRequest['limit'];
                }
            }

        
            if (appId === null || appId === undefined) {
            throw new RequiredError('appId','Required parameter appId was null or undefined when calling searchBindApi.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }
            if (dlmType !== undefined && dlmType !== null) {
                localVarHeaderParameter['Dlm-Type'] = String(dlmType);
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'app_id': appId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询流程架构列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        searchCatalogs(searchCatalogsRequest?: SearchCatalogsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/design/biz/catalogs",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let workspace;
            
            let name;
            
            let createBy;
            
            let owner;
            
            let beginTime;
            
            let endTime;
            
            let limit;
            
            let offset;

            if (searchCatalogsRequest !== null && searchCatalogsRequest !== undefined) {
                if (searchCatalogsRequest instanceof SearchCatalogsRequest) {
                    workspace = searchCatalogsRequest.workspace;
                    name = searchCatalogsRequest.name;
                    createBy = searchCatalogsRequest.createBy;
                    owner = searchCatalogsRequest.owner;
                    beginTime = searchCatalogsRequest.beginTime;
                    endTime = searchCatalogsRequest.endTime;
                    limit = searchCatalogsRequest.limit;
                    offset = searchCatalogsRequest.offset;
                } else {
                    workspace = searchCatalogsRequest['workspace'];
                    name = searchCatalogsRequest['name'];
                    createBy = searchCatalogsRequest['create_by'];
                    owner = searchCatalogsRequest['owner'];
                    beginTime = searchCatalogsRequest['begin_time'];
                    endTime = searchCatalogsRequest['end_time'];
                    limit = searchCatalogsRequest['limit'];
                    offset = searchCatalogsRequest['offset'];
                }
            }

        
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (createBy !== null && createBy !== undefined) {
                localVarQueryParameter['create_by'] = createBy;
            }
            if (owner !== null && owner !== undefined) {
                localVarQueryParameter['owner'] = owner;
            }
            if (beginTime !== null && beginTime !== undefined) {
                localVarQueryParameter['begin_time'] = beginTime;
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查看码表字段值
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        searchCodeTableValues(searchCodeTableValuesRequest?: SearchCodeTableValuesRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/design/code-tables/{id}/values",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let workspace;
            
            let id;
            
            let limit;
            
            let offset;

            if (searchCodeTableValuesRequest !== null && searchCodeTableValuesRequest !== undefined) {
                if (searchCodeTableValuesRequest instanceof SearchCodeTableValuesRequest) {
                    workspace = searchCodeTableValuesRequest.workspace;
                    id = searchCodeTableValuesRequest.id;
                    limit = searchCodeTableValuesRequest.limit;
                    offset = searchCodeTableValuesRequest.offset;
                } else {
                    workspace = searchCodeTableValuesRequest['workspace'];
                    id = searchCodeTableValuesRequest['id'];
                    limit = searchCodeTableValuesRequest['limit'];
                    offset = searchCodeTableValuesRequest['offset'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling searchCodeTableValues.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询码表列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        searchCodeTables(searchCodeTablesRequest?: SearchCodeTablesRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/design/code-tables",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let workspace;
            
            let name;
            
            let createBy;
            
            let approver;
            
            let directoryId;
            
            let status;
            
            let beginTime;
            
            let endTime;
            
            let limit;
            
            let offset;

            if (searchCodeTablesRequest !== null && searchCodeTablesRequest !== undefined) {
                if (searchCodeTablesRequest instanceof SearchCodeTablesRequest) {
                    workspace = searchCodeTablesRequest.workspace;
                    name = searchCodeTablesRequest.name;
                    createBy = searchCodeTablesRequest.createBy;
                    approver = searchCodeTablesRequest.approver;
                    directoryId = searchCodeTablesRequest.directoryId;
                    status = searchCodeTablesRequest.status;
                    beginTime = searchCodeTablesRequest.beginTime;
                    endTime = searchCodeTablesRequest.endTime;
                    limit = searchCodeTablesRequest.limit;
                    offset = searchCodeTablesRequest.offset;
                } else {
                    workspace = searchCodeTablesRequest['workspace'];
                    name = searchCodeTablesRequest['name'];
                    createBy = searchCodeTablesRequest['create_by'];
                    approver = searchCodeTablesRequest['approver'];
                    directoryId = searchCodeTablesRequest['directory_id'];
                    status = searchCodeTablesRequest['status'];
                    beginTime = searchCodeTablesRequest['begin_time'];
                    endTime = searchCodeTablesRequest['end_time'];
                    limit = searchCodeTablesRequest['limit'];
                    offset = searchCodeTablesRequest['offset'];
                }
            }

        
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (createBy !== null && createBy !== undefined) {
                localVarQueryParameter['create_by'] = createBy;
            }
            if (approver !== null && approver !== undefined) {
                localVarQueryParameter['approver'] = approver;
            }
            if (directoryId !== null && directoryId !== undefined) {
                localVarQueryParameter['directory_id'] = directoryId;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (beginTime !== null && beginTime !== undefined) {
                localVarQueryParameter['begin_time'] = beginTime;
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询自定义项
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        searchCustomizedFields(searchCustomizedFieldsRequest?: SearchCustomizedFieldsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/design/customized-fields",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let workspace;
            
            let type;
            
            let limit;
            
            let offset;

            if (searchCustomizedFieldsRequest !== null && searchCustomizedFieldsRequest !== undefined) {
                if (searchCustomizedFieldsRequest instanceof SearchCustomizedFieldsRequest) {
                    workspace = searchCustomizedFieldsRequest.workspace;
                    type = searchCustomizedFieldsRequest.type;
                    limit = searchCustomizedFieldsRequest.limit;
                    offset = searchCustomizedFieldsRequest.offset;
                } else {
                    workspace = searchCustomizedFieldsRequest['workspace'];
                    type = searchCustomizedFieldsRequest['type'];
                    limit = searchCustomizedFieldsRequest['limit'];
                    offset = searchCustomizedFieldsRequest['offset'];
                }
            }

        
            if (type === null || type === undefined) {
                throw new RequiredError('type','Required parameter type was null or undefined when calling searchCustomizedFields.');
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
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取指定类型下的数据连接信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        searchDwByType(searchDwByTypeRequest?: SearchDwByTypeRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/design/atlas/data-warehouses",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let workspace;
            
            let dwType;
            
            let forceRefresh;
            
            let limit;
            
            let offset;

            if (searchDwByTypeRequest !== null && searchDwByTypeRequest !== undefined) {
                if (searchDwByTypeRequest instanceof SearchDwByTypeRequest) {
                    workspace = searchDwByTypeRequest.workspace;
                    dwType = searchDwByTypeRequest.dwType;
                    forceRefresh = searchDwByTypeRequest.forceRefresh;
                    limit = searchDwByTypeRequest.limit;
                    offset = searchDwByTypeRequest.offset;
                } else {
                    workspace = searchDwByTypeRequest['workspace'];
                    dwType = searchDwByTypeRequest['dw_type'];
                    forceRefresh = searchDwByTypeRequest['force_refresh'];
                    limit = searchDwByTypeRequest['limit'];
                    offset = searchDwByTypeRequest['offset'];
                }
            }

        
            if (dwType === null || dwType === undefined) {
                throw new RequiredError('dwType','Required parameter dwType was null or undefined when calling searchDwByType.');
            }
            if (dwType !== null && dwType !== undefined) {
                localVarQueryParameter['dw_type'] = dwType;
            }
            if (forceRefresh !== null && forceRefresh !== undefined) {
                localVarQueryParameter['force_refresh'] = forceRefresh;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 通过路径获取id
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        searchIdByPath(searchIdByPathRequest?: SearchIdByPathRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/service/servicecatalogs/ids",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let workspace;
            
            let contentType;
            
            let path;
            
            let dlmType;
            
            let limit;
            
            let offset;

            if (searchIdByPathRequest !== null && searchIdByPathRequest !== undefined) {
                if (searchIdByPathRequest instanceof SearchIdByPathRequest) {
                    workspace = searchIdByPathRequest.workspace;
                    contentType = searchIdByPathRequest.contentType;
                    path = searchIdByPathRequest.path;
                    dlmType = searchIdByPathRequest.dlmType;
                    limit = searchIdByPathRequest.limit;
                    offset = searchIdByPathRequest.offset;
                } else {
                    workspace = searchIdByPathRequest['workspace'];
                    contentType = searchIdByPathRequest['Content-Type'];
                    path = searchIdByPathRequest['path'];
                    dlmType = searchIdByPathRequest['Dlm-Type'];
                    limit = searchIdByPathRequest['limit'];
                    offset = searchIdByPathRequest['offset'];
                }
            }

        
            if (path === null || path === undefined) {
                throw new RequiredError('path','Required parameter path was null or undefined when calling searchIdByPath.');
            }
            if (path !== null && path !== undefined) {
                localVarQueryParameter['path'] = path;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }
            if (dlmType !== undefined && dlmType !== null) {
                localVarHeaderParameter['Dlm-Type'] = String(dlmType);
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 通过名称、创建者、责任人、状态、修改时间分页查找主题
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        searchSubject(searchSubjectRequest?: SearchSubjectRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/design/subjects",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let workspace;
            
            let name;
            
            let createBy;
            
            let owner;
            
            let status;
            
            let beginTime;
            
            let endTime;
            
            let limit;
            
            let offset;
            
            let parentId;

            if (searchSubjectRequest !== null && searchSubjectRequest !== undefined) {
                if (searchSubjectRequest instanceof SearchSubjectRequest) {
                    workspace = searchSubjectRequest.workspace;
                    name = searchSubjectRequest.name;
                    createBy = searchSubjectRequest.createBy;
                    owner = searchSubjectRequest.owner;
                    status = searchSubjectRequest.status;
                    beginTime = searchSubjectRequest.beginTime;
                    endTime = searchSubjectRequest.endTime;
                    limit = searchSubjectRequest.limit;
                    offset = searchSubjectRequest.offset;
                    parentId = searchSubjectRequest.parentId;
                } else {
                    workspace = searchSubjectRequest['workspace'];
                    name = searchSubjectRequest['name'];
                    createBy = searchSubjectRequest['create_by'];
                    owner = searchSubjectRequest['owner'];
                    status = searchSubjectRequest['status'];
                    beginTime = searchSubjectRequest['begin_time'];
                    endTime = searchSubjectRequest['end_time'];
                    limit = searchSubjectRequest['limit'];
                    offset = searchSubjectRequest['offset'];
                    parentId = searchSubjectRequest['parent_id'];
                }
            }

        
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (createBy !== null && createBy !== undefined) {
                localVarQueryParameter['create_by'] = createBy;
            }
            if (owner !== null && owner !== undefined) {
                localVarQueryParameter['owner'] = owner;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (beginTime !== null && beginTime !== undefined) {
                localVarQueryParameter['begin_time'] = beginTime;
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (parentId !== null && parentId !== undefined) {
                localVarQueryParameter['parent_id'] = parentId;
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查找主题(新)
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        searchSubjectNew(searchSubjectNewRequest?: SearchSubjectNewRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/design/subjects",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let workspace;
            
            let name;
            
            let createBy;
            
            let owner;
            
            let status;
            
            let beginTime;
            
            let endTime;
            
            let limit;
            
            let offset;
            
            let parentId;

            if (searchSubjectNewRequest !== null && searchSubjectNewRequest !== undefined) {
                if (searchSubjectNewRequest instanceof SearchSubjectNewRequest) {
                    workspace = searchSubjectNewRequest.workspace;
                    name = searchSubjectNewRequest.name;
                    createBy = searchSubjectNewRequest.createBy;
                    owner = searchSubjectNewRequest.owner;
                    status = searchSubjectNewRequest.status;
                    beginTime = searchSubjectNewRequest.beginTime;
                    endTime = searchSubjectNewRequest.endTime;
                    limit = searchSubjectNewRequest.limit;
                    offset = searchSubjectNewRequest.offset;
                    parentId = searchSubjectNewRequest.parentId;
                } else {
                    workspace = searchSubjectNewRequest['workspace'];
                    name = searchSubjectNewRequest['name'];
                    createBy = searchSubjectNewRequest['create_by'];
                    owner = searchSubjectNewRequest['owner'];
                    status = searchSubjectNewRequest['status'];
                    beginTime = searchSubjectNewRequest['begin_time'];
                    endTime = searchSubjectNewRequest['end_time'];
                    limit = searchSubjectNewRequest['limit'];
                    offset = searchSubjectNewRequest['offset'];
                    parentId = searchSubjectNewRequest['parent_id'];
                }
            }

        
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (createBy !== null && createBy !== undefined) {
                localVarQueryParameter['create_by'] = createBy;
            }
            if (owner !== null && owner !== undefined) {
                localVarQueryParameter['owner'] = owner;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (beginTime !== null && beginTime !== undefined) {
                localVarQueryParameter['begin_time'] = beginTime;
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (parentId !== null && parentId !== undefined) {
                localVarQueryParameter['parent_id'] = parentId;
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 通过名称、创建者、修改时间查找版本信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        searchVersions(searchVersionsRequest?: SearchVersionsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/design/versions",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let workspace;
            
            let name;
            
            let createBy;
            
            let bizId;
            
            let bizType;
            
            let beginTime;
            
            let endTime;
            
            let limit;
            
            let offset;

            if (searchVersionsRequest !== null && searchVersionsRequest !== undefined) {
                if (searchVersionsRequest instanceof SearchVersionsRequest) {
                    workspace = searchVersionsRequest.workspace;
                    name = searchVersionsRequest.name;
                    createBy = searchVersionsRequest.createBy;
                    bizId = searchVersionsRequest.bizId;
                    bizType = searchVersionsRequest.bizType;
                    beginTime = searchVersionsRequest.beginTime;
                    endTime = searchVersionsRequest.endTime;
                    limit = searchVersionsRequest.limit;
                    offset = searchVersionsRequest.offset;
                } else {
                    workspace = searchVersionsRequest['workspace'];
                    name = searchVersionsRequest['name'];
                    createBy = searchVersionsRequest['create_by'];
                    bizId = searchVersionsRequest['biz_id'];
                    bizType = searchVersionsRequest['biz_type'];
                    beginTime = searchVersionsRequest['begin_time'];
                    endTime = searchVersionsRequest['end_time'];
                    limit = searchVersionsRequest['limit'];
                    offset = searchVersionsRequest['offset'];
                }
            }

        
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (createBy !== null && createBy !== undefined) {
                localVarQueryParameter['create_by'] = createBy;
            }
            if (bizId !== null && bizId !== undefined) {
                localVarQueryParameter['biz_id'] = bizId;
            }
            if (bizType !== null && bizType !== undefined) {
                localVarQueryParameter['biz_type'] = bizType;
            }
            if (beginTime !== null && beginTime !== undefined) {
                localVarQueryParameter['begin_time'] = beginTime;
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        setFactoryJobTags(setFactoryJobTagsRequest?: SetFactoryJobTagsRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/factory/jobs/{job_name}/tags",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let jobName;
            
            let workspace;
            
            let contentType;
            
            let authorization;
            
            let host;

            if (setFactoryJobTagsRequest !== null && setFactoryJobTagsRequest !== undefined) {
                if (setFactoryJobTagsRequest instanceof SetFactoryJobTagsRequest) {
                    jobName = setFactoryJobTagsRequest.jobName;
                    body = setFactoryJobTagsRequest.body
                    workspace = setFactoryJobTagsRequest.workspace;
                    contentType = setFactoryJobTagsRequest.contentType;
                    authorization = setFactoryJobTagsRequest.authorization;
                    host = setFactoryJobTagsRequest.host;
                } else {
                    jobName = setFactoryJobTagsRequest['job_name'];
                    body = setFactoryJobTagsRequest['body'];
                    workspace = setFactoryJobTagsRequest['workspace'];
                    contentType = setFactoryJobTagsRequest['Content-Type'];
                    authorization = setFactoryJobTagsRequest['Authorization'];
                    host = setFactoryJobTagsRequest['Host'];
                }
            }

        
            if (jobName === null || jobName === undefined) {
            throw new RequiredError('jobName','Required parameter jobName was null or undefined when calling setFactoryJobTags.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            if (authorization !== undefined && authorization !== null) {
                localVarHeaderParameter['Authorization'] = String(authorization);
            }
            if (host !== undefined && host !== null) {
                localVarHeaderParameter['Host'] = String(host);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'job_name': jobName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 通过id查看汇总表的详情信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showAggregationLogicTableById(showAggregationLogicTableByIdRequest?: ShowAggregationLogicTableByIdRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/design/aggregation-logic-tables/{id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let workspace;
            
            let id;
            
            let latest;

            if (showAggregationLogicTableByIdRequest !== null && showAggregationLogicTableByIdRequest !== undefined) {
                if (showAggregationLogicTableByIdRequest instanceof ShowAggregationLogicTableByIdRequest) {
                    workspace = showAggregationLogicTableByIdRequest.workspace;
                    id = showAggregationLogicTableByIdRequest.id;
                    latest = showAggregationLogicTableByIdRequest.latest;
                } else {
                    workspace = showAggregationLogicTableByIdRequest['workspace'];
                    id = showAggregationLogicTableByIdRequest['id'];
                    latest = showAggregationLogicTableByIdRequest['latest'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling showAggregationLogicTableById.');
            }
            if (latest !== null && latest !== undefined) {
                localVarQueryParameter['latest'] = latest;
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询指定api 仪表板数据详情
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showApiDashboard(showApiDashboardRequest?: ShowApiDashboardRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/service/statistic/apis-dashboards/{api_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let workspace;
            
            let contentType;
            
            let apiId;
            
            let startTime;
            
            let endTime;
            
            let timeUnit;
            
            let dlmType;
            
            let instanceId;

            if (showApiDashboardRequest !== null && showApiDashboardRequest !== undefined) {
                if (showApiDashboardRequest instanceof ShowApiDashboardRequest) {
                    workspace = showApiDashboardRequest.workspace;
                    contentType = showApiDashboardRequest.contentType;
                    apiId = showApiDashboardRequest.apiId;
                    startTime = showApiDashboardRequest.startTime;
                    endTime = showApiDashboardRequest.endTime;
                    timeUnit = showApiDashboardRequest.timeUnit;
                    dlmType = showApiDashboardRequest.dlmType;
                    instanceId = showApiDashboardRequest.instanceId;
                } else {
                    workspace = showApiDashboardRequest['workspace'];
                    contentType = showApiDashboardRequest['Content-Type'];
                    apiId = showApiDashboardRequest['api_id'];
                    startTime = showApiDashboardRequest['start_time'];
                    endTime = showApiDashboardRequest['end_time'];
                    timeUnit = showApiDashboardRequest['time_unit'];
                    dlmType = showApiDashboardRequest['Dlm-Type'];
                    instanceId = showApiDashboardRequest['instance_id'];
                }
            }

        
            if (apiId === null || apiId === undefined) {
            throw new RequiredError('apiId','Required parameter apiId was null or undefined when calling showApiDashboard.');
            }
            if (startTime === null || startTime === undefined) {
                throw new RequiredError('startTime','Required parameter startTime was null or undefined when calling showApiDashboard.');
            }
            if (startTime !== null && startTime !== undefined) {
                localVarQueryParameter['start_time'] = startTime;
            }
            if (endTime === null || endTime === undefined) {
                throw new RequiredError('endTime','Required parameter endTime was null or undefined when calling showApiDashboard.');
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }
            if (timeUnit === null || timeUnit === undefined) {
                throw new RequiredError('timeUnit','Required parameter timeUnit was null or undefined when calling showApiDashboard.');
            }
            if (timeUnit !== null && timeUnit !== undefined) {
                localVarQueryParameter['time_unit'] = timeUnit;
            }
            if (instanceId !== null && instanceId !== undefined) {
                localVarQueryParameter['instance_id'] = instanceId;
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }
            if (dlmType !== undefined && dlmType !== null) {
                localVarHeaderParameter['Dlm-Type'] = String(dlmType);
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'api_id': apiId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询api 仪表板数据详情
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showApisDashboard(showApisDashboardRequest?: ShowApisDashboardRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/service/statistic/apis-dashboards",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let workspace;
            
            let contentType;
            
            let startTime;
            
            let endTime;
            
            let timeUnit;
            
            let dlmType;
            
            let instanceId;
            
            let limit;
            
            let offset;

            if (showApisDashboardRequest !== null && showApisDashboardRequest !== undefined) {
                if (showApisDashboardRequest instanceof ShowApisDashboardRequest) {
                    workspace = showApisDashboardRequest.workspace;
                    contentType = showApisDashboardRequest.contentType;
                    startTime = showApisDashboardRequest.startTime;
                    endTime = showApisDashboardRequest.endTime;
                    timeUnit = showApisDashboardRequest.timeUnit;
                    dlmType = showApisDashboardRequest.dlmType;
                    instanceId = showApisDashboardRequest.instanceId;
                    limit = showApisDashboardRequest.limit;
                    offset = showApisDashboardRequest.offset;
                } else {
                    workspace = showApisDashboardRequest['workspace'];
                    contentType = showApisDashboardRequest['Content-Type'];
                    startTime = showApisDashboardRequest['start_time'];
                    endTime = showApisDashboardRequest['end_time'];
                    timeUnit = showApisDashboardRequest['time_unit'];
                    dlmType = showApisDashboardRequest['Dlm-Type'];
                    instanceId = showApisDashboardRequest['instance_id'];
                    limit = showApisDashboardRequest['limit'];
                    offset = showApisDashboardRequest['offset'];
                }
            }

        
            if (startTime === null || startTime === undefined) {
                throw new RequiredError('startTime','Required parameter startTime was null or undefined when calling showApisDashboard.');
            }
            if (startTime !== null && startTime !== undefined) {
                localVarQueryParameter['start_time'] = startTime;
            }
            if (endTime === null || endTime === undefined) {
                throw new RequiredError('endTime','Required parameter endTime was null or undefined when calling showApisDashboard.');
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }
            if (timeUnit === null || timeUnit === undefined) {
                throw new RequiredError('timeUnit','Required parameter timeUnit was null or undefined when calling showApisDashboard.');
            }
            if (timeUnit !== null && timeUnit !== undefined) {
                localVarQueryParameter['time_unit'] = timeUnit;
            }
            if (instanceId !== null && instanceId !== undefined) {
                localVarQueryParameter['instance_id'] = instanceId;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }
            if (dlmType !== undefined && dlmType !== null) {
                localVarHeaderParameter['Dlm-Type'] = String(dlmType);
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询api 统计数据详情
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showApisDetail(showApisDetailRequest?: ShowApisDetailRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/service/statistic/apis-detail/{api_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let workspace;
            
            let contentType;
            
            let apiId;
            
            let startTime;
            
            let endTime;
            
            let timeUnit;
            
            let dlmType;
            
            let instanceId;

            if (showApisDetailRequest !== null && showApisDetailRequest !== undefined) {
                if (showApisDetailRequest instanceof ShowApisDetailRequest) {
                    workspace = showApisDetailRequest.workspace;
                    contentType = showApisDetailRequest.contentType;
                    apiId = showApisDetailRequest.apiId;
                    startTime = showApisDetailRequest.startTime;
                    endTime = showApisDetailRequest.endTime;
                    timeUnit = showApisDetailRequest.timeUnit;
                    dlmType = showApisDetailRequest.dlmType;
                    instanceId = showApisDetailRequest.instanceId;
                } else {
                    workspace = showApisDetailRequest['workspace'];
                    contentType = showApisDetailRequest['Content-Type'];
                    apiId = showApisDetailRequest['api_id'];
                    startTime = showApisDetailRequest['start_time'];
                    endTime = showApisDetailRequest['end_time'];
                    timeUnit = showApisDetailRequest['time_unit'];
                    dlmType = showApisDetailRequest['Dlm-Type'];
                    instanceId = showApisDetailRequest['instance_id'];
                }
            }

        
            if (apiId === null || apiId === undefined) {
            throw new RequiredError('apiId','Required parameter apiId was null or undefined when calling showApisDetail.');
            }
            if (startTime === null || startTime === undefined) {
                throw new RequiredError('startTime','Required parameter startTime was null or undefined when calling showApisDetail.');
            }
            if (startTime !== null && startTime !== undefined) {
                localVarQueryParameter['start_time'] = startTime;
            }
            if (endTime === null || endTime === undefined) {
                throw new RequiredError('endTime','Required parameter endTime was null or undefined when calling showApisDetail.');
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }
            if (timeUnit === null || timeUnit === undefined) {
                throw new RequiredError('timeUnit','Required parameter timeUnit was null or undefined when calling showApisDetail.');
            }
            if (timeUnit !== null && timeUnit !== undefined) {
                localVarQueryParameter['time_unit'] = timeUnit;
            }
            if (instanceId !== null && instanceId !== undefined) {
                localVarQueryParameter['instance_id'] = instanceId;
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }
            if (dlmType !== undefined && dlmType !== null) {
                localVarHeaderParameter['Dlm-Type'] = String(dlmType);
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'api_id': apiId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询统计用户相关的总览开发指标
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showApisOverview(showApisOverviewRequest?: ShowApisOverviewRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/service/statistic/apis-overview",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let workspace;
            
            let contentType;
            
            let startTime;
            
            let endTime;
            
            let timeUnit;
            
            let dlmType;

            if (showApisOverviewRequest !== null && showApisOverviewRequest !== undefined) {
                if (showApisOverviewRequest instanceof ShowApisOverviewRequest) {
                    workspace = showApisOverviewRequest.workspace;
                    contentType = showApisOverviewRequest.contentType;
                    startTime = showApisOverviewRequest.startTime;
                    endTime = showApisOverviewRequest.endTime;
                    timeUnit = showApisOverviewRequest.timeUnit;
                    dlmType = showApisOverviewRequest.dlmType;
                } else {
                    workspace = showApisOverviewRequest['workspace'];
                    contentType = showApisOverviewRequest['Content-Type'];
                    startTime = showApisOverviewRequest['start_time'];
                    endTime = showApisOverviewRequest['end_time'];
                    timeUnit = showApisOverviewRequest['time_unit'];
                    dlmType = showApisOverviewRequest['Dlm-Type'];
                }
            }

        
            if (startTime === null || startTime === undefined) {
                throw new RequiredError('startTime','Required parameter startTime was null or undefined when calling showApisOverview.');
            }
            if (startTime !== null && startTime !== undefined) {
                localVarQueryParameter['start_time'] = startTime;
            }
            if (endTime === null || endTime === undefined) {
                throw new RequiredError('endTime','Required parameter endTime was null or undefined when calling showApisOverview.');
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }
            if (timeUnit === null || timeUnit === undefined) {
                throw new RequiredError('timeUnit','Required parameter timeUnit was null or undefined when calling showApisOverview.');
            }
            if (timeUnit !== null && timeUnit !== undefined) {
                localVarQueryParameter['time_unit'] = timeUnit;
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }
            if (dlmType !== undefined && dlmType !== null) {
                localVarHeaderParameter['Dlm-Type'] = String(dlmType);
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询应用详情
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showAppInfo(showAppInfoRequest?: ShowAppInfoRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/service/apps/{app_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let workspace;
            
            let contentType;
            
            let appId;
            
            let dlmType;

            if (showAppInfoRequest !== null && showAppInfoRequest !== undefined) {
                if (showAppInfoRequest instanceof ShowAppInfoRequest) {
                    workspace = showAppInfoRequest.workspace;
                    contentType = showAppInfoRequest.contentType;
                    appId = showAppInfoRequest.appId;
                    dlmType = showAppInfoRequest.dlmType;
                } else {
                    workspace = showAppInfoRequest['workspace'];
                    contentType = showAppInfoRequest['Content-Type'];
                    appId = showAppInfoRequest['app_id'];
                    dlmType = showAppInfoRequest['Dlm-Type'];
                }
            }

        
            if (appId === null || appId === undefined) {
            throw new RequiredError('appId','Required parameter appId was null or undefined when calling showAppInfo.');
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }
            if (dlmType !== undefined && dlmType !== null) {
                localVarHeaderParameter['Dlm-Type'] = String(dlmType);
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.pathParams = { 'app_id': appId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取申请详情
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showApplyDetail(showApplyDetailRequest?: ShowApplyDetailRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/service/applys/{apply_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let workspace;
            
            let contentType;
            
            let applyId;
            
            let dlmType;

            if (showApplyDetailRequest !== null && showApplyDetailRequest !== undefined) {
                if (showApplyDetailRequest instanceof ShowApplyDetailRequest) {
                    workspace = showApplyDetailRequest.workspace;
                    contentType = showApplyDetailRequest.contentType;
                    applyId = showApplyDetailRequest.applyId;
                    dlmType = showApplyDetailRequest.dlmType;
                } else {
                    workspace = showApplyDetailRequest['workspace'];
                    contentType = showApplyDetailRequest['Content-Type'];
                    applyId = showApplyDetailRequest['apply_id'];
                    dlmType = showApplyDetailRequest['Dlm-Type'];
                }
            }

        
            if (applyId === null || applyId === undefined) {
            throw new RequiredError('applyId','Required parameter applyId was null or undefined when calling showApplyDetail.');
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }
            if (dlmType !== undefined && dlmType !== null) {
                localVarHeaderParameter['Dlm-Type'] = String(dlmType);
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.pathParams = { 'apply_id': applyId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询app 仪表板数据详情
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showAppsDashboard(showAppsDashboardRequest?: ShowAppsDashboardRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/service/statistic/apps-dashboards",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let workspace;
            
            let contentType;
            
            let startTime;
            
            let endTime;
            
            let timeUnit;
            
            let dlmType;
            
            let limit;
            
            let offset;

            if (showAppsDashboardRequest !== null && showAppsDashboardRequest !== undefined) {
                if (showAppsDashboardRequest instanceof ShowAppsDashboardRequest) {
                    workspace = showAppsDashboardRequest.workspace;
                    contentType = showAppsDashboardRequest.contentType;
                    startTime = showAppsDashboardRequest.startTime;
                    endTime = showAppsDashboardRequest.endTime;
                    timeUnit = showAppsDashboardRequest.timeUnit;
                    dlmType = showAppsDashboardRequest.dlmType;
                    limit = showAppsDashboardRequest.limit;
                    offset = showAppsDashboardRequest.offset;
                } else {
                    workspace = showAppsDashboardRequest['workspace'];
                    contentType = showAppsDashboardRequest['Content-Type'];
                    startTime = showAppsDashboardRequest['start_time'];
                    endTime = showAppsDashboardRequest['end_time'];
                    timeUnit = showAppsDashboardRequest['time_unit'];
                    dlmType = showAppsDashboardRequest['Dlm-Type'];
                    limit = showAppsDashboardRequest['limit'];
                    offset = showAppsDashboardRequest['offset'];
                }
            }

        
            if (startTime === null || startTime === undefined) {
                throw new RequiredError('startTime','Required parameter startTime was null or undefined when calling showAppsDashboard.');
            }
            if (startTime !== null && startTime !== undefined) {
                localVarQueryParameter['start_time'] = startTime;
            }
            if (endTime === null || endTime === undefined) {
                throw new RequiredError('endTime','Required parameter endTime was null or undefined when calling showAppsDashboard.');
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }
            if (timeUnit === null || timeUnit === undefined) {
                throw new RequiredError('timeUnit','Required parameter timeUnit was null or undefined when calling showAppsDashboard.');
            }
            if (timeUnit !== null && timeUnit !== undefined) {
                localVarQueryParameter['time_unit'] = timeUnit;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }
            if (dlmType !== undefined && dlmType !== null) {
                localVarHeaderParameter['Dlm-Type'] = String(dlmType);
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询app 统计数据详情
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showAppsDetail(showAppsDetailRequest?: ShowAppsDetailRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/service/statistic/apps-detail/{app_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let workspace;
            
            let contentType;
            
            let appId;
            
            let startTime;
            
            let endTime;
            
            let timeUnit;
            
            let dlmType;

            if (showAppsDetailRequest !== null && showAppsDetailRequest !== undefined) {
                if (showAppsDetailRequest instanceof ShowAppsDetailRequest) {
                    workspace = showAppsDetailRequest.workspace;
                    contentType = showAppsDetailRequest.contentType;
                    appId = showAppsDetailRequest.appId;
                    startTime = showAppsDetailRequest.startTime;
                    endTime = showAppsDetailRequest.endTime;
                    timeUnit = showAppsDetailRequest.timeUnit;
                    dlmType = showAppsDetailRequest.dlmType;
                } else {
                    workspace = showAppsDetailRequest['workspace'];
                    contentType = showAppsDetailRequest['Content-Type'];
                    appId = showAppsDetailRequest['app_id'];
                    startTime = showAppsDetailRequest['start_time'];
                    endTime = showAppsDetailRequest['end_time'];
                    timeUnit = showAppsDetailRequest['time_unit'];
                    dlmType = showAppsDetailRequest['Dlm-Type'];
                }
            }

        
            if (appId === null || appId === undefined) {
            throw new RequiredError('appId','Required parameter appId was null or undefined when calling showAppsDetail.');
            }
            if (startTime === null || startTime === undefined) {
                throw new RequiredError('startTime','Required parameter startTime was null or undefined when calling showAppsDetail.');
            }
            if (startTime !== null && startTime !== undefined) {
                localVarQueryParameter['start_time'] = startTime;
            }
            if (endTime === null || endTime === undefined) {
                throw new RequiredError('endTime','Required parameter endTime was null or undefined when calling showAppsDetail.');
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }
            if (timeUnit === null || timeUnit === undefined) {
                throw new RequiredError('timeUnit','Required parameter timeUnit was null or undefined when calling showAppsDetail.');
            }
            if (timeUnit !== null && timeUnit !== undefined) {
                localVarQueryParameter['time_unit'] = timeUnit;
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }
            if (dlmType !== undefined && dlmType !== null) {
                localVarHeaderParameter['Dlm-Type'] = String(dlmType);
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'app_id': appId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询统计用户相关的总览调用指标
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showAppsOverview(showAppsOverviewRequest?: ShowAppsOverviewRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/service/statistic/apps-overview",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let workspace;
            
            let contentType;
            
            let startTime;
            
            let endTime;
            
            let timeUnit;
            
            let dlmType;

            if (showAppsOverviewRequest !== null && showAppsOverviewRequest !== undefined) {
                if (showAppsOverviewRequest instanceof ShowAppsOverviewRequest) {
                    workspace = showAppsOverviewRequest.workspace;
                    contentType = showAppsOverviewRequest.contentType;
                    startTime = showAppsOverviewRequest.startTime;
                    endTime = showAppsOverviewRequest.endTime;
                    timeUnit = showAppsOverviewRequest.timeUnit;
                    dlmType = showAppsOverviewRequest.dlmType;
                } else {
                    workspace = showAppsOverviewRequest['workspace'];
                    contentType = showAppsOverviewRequest['Content-Type'];
                    startTime = showAppsOverviewRequest['start_time'];
                    endTime = showAppsOverviewRequest['end_time'];
                    timeUnit = showAppsOverviewRequest['time_unit'];
                    dlmType = showAppsOverviewRequest['Dlm-Type'];
                }
            }

        
            if (startTime === null || startTime === undefined) {
                throw new RequiredError('startTime','Required parameter startTime was null or undefined when calling showAppsOverview.');
            }
            if (startTime !== null && startTime !== undefined) {
                localVarQueryParameter['start_time'] = startTime;
            }
            if (endTime === null || endTime === undefined) {
                throw new RequiredError('endTime','Required parameter endTime was null or undefined when calling showAppsOverview.');
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }
            if (timeUnit === null || timeUnit === undefined) {
                throw new RequiredError('timeUnit','Required parameter timeUnit was null or undefined when calling showAppsOverview.');
            }
            if (timeUnit !== null && timeUnit !== undefined) {
                localVarQueryParameter['time_unit'] = timeUnit;
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }
            if (dlmType !== undefined && dlmType !== null) {
                localVarHeaderParameter['Dlm-Type'] = String(dlmType);
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 通过id获取指标详情信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showAtomicIndexById(showAtomicIndexByIdRequest?: ShowAtomicIndexByIdRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/design/atomic-indexs/{id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let workspace;
            
            let id;
            
            let latest;

            if (showAtomicIndexByIdRequest !== null && showAtomicIndexByIdRequest !== undefined) {
                if (showAtomicIndexByIdRequest instanceof ShowAtomicIndexByIdRequest) {
                    workspace = showAtomicIndexByIdRequest.workspace;
                    id = showAtomicIndexByIdRequest.id;
                    latest = showAtomicIndexByIdRequest.latest;
                } else {
                    workspace = showAtomicIndexByIdRequest['workspace'];
                    id = showAtomicIndexByIdRequest['id'];
                    latest = showAtomicIndexByIdRequest['latest'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling showAtomicIndexById.');
            }
            if (latest !== null && latest !== undefined) {
                localVarQueryParameter['latest'] = latest;
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查找流程架构详情
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showBizCatalogDetail(showBizCatalogDetailRequest?: ShowBizCatalogDetailRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/design/biz/catalogs/{id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let workspace;
            
            let id;

            if (showBizCatalogDetailRequest !== null && showBizCatalogDetailRequest !== undefined) {
                if (showBizCatalogDetailRequest instanceof ShowBizCatalogDetailRequest) {
                    workspace = showBizCatalogDetailRequest.workspace;
                    id = showBizCatalogDetailRequest.id;
                } else {
                    workspace = showBizCatalogDetailRequest['workspace'];
                    id = showBizCatalogDetailRequest['id'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling showBizCatalogDetail.');
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }

            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 通过id查看指标的详情信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showBizMetricById(showBizMetricByIdRequest?: ShowBizMetricByIdRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/design/biz-metrics/{id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let workspace;
            
            let id;
            
            let latest;

            if (showBizMetricByIdRequest !== null && showBizMetricByIdRequest !== undefined) {
                if (showBizMetricByIdRequest instanceof ShowBizMetricByIdRequest) {
                    workspace = showBizMetricByIdRequest.workspace;
                    id = showBizMetricByIdRequest.id;
                    latest = showBizMetricByIdRequest.latest;
                } else {
                    workspace = showBizMetricByIdRequest['workspace'];
                    id = showBizMetricByIdRequest['id'];
                    latest = showBizMetricByIdRequest['latest'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling showBizMetricById.');
            }
            if (latest !== null && latest !== undefined) {
                localVarQueryParameter['latest'] = latest;
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 业务资产查询接口
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showBusinessAssets(showBusinessAssetsRequest?: ShowBusinessAssetsRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/asset/business-assets/search",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let workspace;

            if (showBusinessAssetsRequest !== null && showBusinessAssetsRequest !== undefined) {
                if (showBusinessAssetsRequest instanceof ShowBusinessAssetsRequest) {
                    workspace = showBusinessAssetsRequest.workspace;
                    body = showBusinessAssetsRequest.body
                } else {
                    workspace = showBusinessAssetsRequest['workspace'];
                    body = showBusinessAssetsRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取业务资产统计信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showBusinessAssetsStatistic(showBusinessAssetsStatisticRequest?: ShowBusinessAssetsStatisticRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/asset/statistic/assets/business-assets",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let workspace;
            
            let offset;
            
            let limit;

            if (showBusinessAssetsStatisticRequest !== null && showBusinessAssetsStatisticRequest !== undefined) {
                if (showBusinessAssetsStatisticRequest instanceof ShowBusinessAssetsStatisticRequest) {
                    workspace = showBusinessAssetsStatisticRequest.workspace;
                    offset = showBusinessAssetsStatisticRequest.offset;
                    limit = showBusinessAssetsStatisticRequest.limit;
                } else {
                    workspace = showBusinessAssetsStatisticRequest['workspace'];
                    offset = showBusinessAssetsStatisticRequest['offset'];
                    limit = showBusinessAssetsStatisticRequest['limit'];
                }
            }

        
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 逐级查询业务资产目录树,包含数据规范同步过来的业务对象和逻辑实体。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showBusinessAssetsTree(showBusinessAssetsTreeRequest?: ShowBusinessAssetsTreeRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/business-assets/tree/subnode",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let workspace;
            
            let guid;

            if (showBusinessAssetsTreeRequest !== null && showBusinessAssetsTreeRequest !== undefined) {
                if (showBusinessAssetsTreeRequest instanceof ShowBusinessAssetsTreeRequest) {
                    workspace = showBusinessAssetsTreeRequest.workspace;
                    guid = showBusinessAssetsTreeRequest.guid;
                } else {
                    workspace = showBusinessAssetsTreeRequest['workspace'];
                    guid = showBusinessAssetsTreeRequest['guid'];
                }
            }

        
            if (guid !== null && guid !== undefined) {
                localVarQueryParameter['guid'] = guid;
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询服务目录
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showCatalogDetail(showCatalogDetailRequest?: ShowCatalogDetailRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/service/servicecatalogs/{catalog_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let workspace;
            
            let contentType;
            
            let catalogId;
            
            let dlmType;

            if (showCatalogDetailRequest !== null && showCatalogDetailRequest !== undefined) {
                if (showCatalogDetailRequest instanceof ShowCatalogDetailRequest) {
                    workspace = showCatalogDetailRequest.workspace;
                    contentType = showCatalogDetailRequest.contentType;
                    catalogId = showCatalogDetailRequest.catalogId;
                    dlmType = showCatalogDetailRequest.dlmType;
                } else {
                    workspace = showCatalogDetailRequest['workspace'];
                    contentType = showCatalogDetailRequest['Content-Type'];
                    catalogId = showCatalogDetailRequest['catalog_id'];
                    dlmType = showCatalogDetailRequest['Dlm-Type'];
                }
            }

        
            if (catalogId === null || catalogId === undefined) {
            throw new RequiredError('catalogId','Required parameter catalogId was null or undefined when calling showCatalogDetail.');
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }
            if (dlmType !== undefined && dlmType !== null) {
                localVarHeaderParameter['Dlm-Type'] = String(dlmType);
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.pathParams = { 'catalog_id': catalogId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 通过id查看码表的详情信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showCodeTableById(showCodeTableByIdRequest?: ShowCodeTableByIdRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/design/code-tables/{id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let workspace;
            
            let id;

            if (showCodeTableByIdRequest !== null && showCodeTableByIdRequest !== undefined) {
                if (showCodeTableByIdRequest instanceof ShowCodeTableByIdRequest) {
                    workspace = showCodeTableByIdRequest.workspace;
                    id = showCodeTableByIdRequest.id;
                } else {
                    workspace = showCodeTableByIdRequest['workspace'];
                    id = showCodeTableByIdRequest['id'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling showCodeTableById.');
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }

            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 通过id获取复合指标详情信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showCompoundMetricById(showCompoundMetricByIdRequest?: ShowCompoundMetricByIdRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/design/compound-metrics/{id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let workspace;
            
            let id;
            
            let latest;

            if (showCompoundMetricByIdRequest !== null && showCompoundMetricByIdRequest !== undefined) {
                if (showCompoundMetricByIdRequest instanceof ShowCompoundMetricByIdRequest) {
                    workspace = showCompoundMetricByIdRequest.workspace;
                    id = showCompoundMetricByIdRequest.id;
                    latest = showCompoundMetricByIdRequest.latest;
                } else {
                    workspace = showCompoundMetricByIdRequest['workspace'];
                    id = showCompoundMetricByIdRequest['id'];
                    latest = showCompoundMetricByIdRequest['latest'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling showCompoundMetricById.');
            }
            if (latest !== null && latest !== undefined) {
                localVarQueryParameter['latest'] = latest;
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 通过id查看限定详情信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showConditionById(showConditionByIdRequest?: ShowConditionByIdRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/design/conditions/{id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let workspace;
            
            let id;
            
            let latest;

            if (showConditionByIdRequest !== null && showConditionByIdRequest !== undefined) {
                if (showConditionByIdRequest instanceof ShowConditionByIdRequest) {
                    workspace = showConditionByIdRequest.workspace;
                    id = showConditionByIdRequest.id;
                    latest = showConditionByIdRequest.latest;
                } else {
                    workspace = showConditionByIdRequest['workspace'];
                    id = showConditionByIdRequest['id'];
                    latest = showConditionByIdRequest['latest'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling showConditionById.');
            }
            if (latest !== null && latest !== undefined) {
                localVarQueryParameter['latest'] = latest;
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取对账作业详情
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showConsistencyTaskDetail(showConsistencyTaskDetailRequest?: ShowConsistencyTaskDetailRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/quality/consistency-tasks/{id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let id;
            
            let workspace;

            if (showConsistencyTaskDetailRequest !== null && showConsistencyTaskDetailRequest !== undefined) {
                if (showConsistencyTaskDetailRequest instanceof ShowConsistencyTaskDetailRequest) {
                    id = showConsistencyTaskDetailRequest.id;
                    workspace = showConsistencyTaskDetailRequest.workspace;
                } else {
                    id = showConsistencyTaskDetailRequest['id'];
                    workspace = showConsistencyTaskDetailRequest['workspace'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling showConsistencyTaskDetail.');
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }

            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 资产详情接口，该接口功能处于邀测阶段，后续将随功能公测将逐步开放。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showDataDetail(showDataDetailRequest?: ShowDataDetailRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/datamap/entities/guid/{guid}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instance;
            
            let guid;
            
            let ignoreRelationships;

            if (showDataDetailRequest !== null && showDataDetailRequest !== undefined) {
                if (showDataDetailRequest instanceof ShowDataDetailRequest) {
                    instance = showDataDetailRequest.instance;
                    guid = showDataDetailRequest.guid;
                    ignoreRelationships = showDataDetailRequest.ignoreRelationships;
                } else {
                    instance = showDataDetailRequest['instance'];
                    guid = showDataDetailRequest['guid'];
                    ignoreRelationships = showDataDetailRequest['ignore_relationships'];
                }
            }

        
            if (guid === null || guid === undefined) {
            throw new RequiredError('guid','Required parameter guid was null or undefined when calling showDataDetail.');
            }
            if (ignoreRelationships !== null && ignoreRelationships !== undefined) {
                localVarQueryParameter['ignore_relationships'] = ignoreRelationships;
            }
            if (instance !== undefined && instance !== null) {
                localVarHeaderParameter['instance'] = String(instance);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'guid': guid, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询概要
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showDataProfile(showDataProfileRequest?: ShowDataProfileRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/asset/profile",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let workspace;
            
            let dwId;
            
            let dbType;
            
            let databaseName;
            
            let tableName;

            if (showDataProfileRequest !== null && showDataProfileRequest !== undefined) {
                if (showDataProfileRequest instanceof ShowDataProfileRequest) {
                    workspace = showDataProfileRequest.workspace;
                    dwId = showDataProfileRequest.dwId;
                    dbType = showDataProfileRequest.dbType;
                    databaseName = showDataProfileRequest.databaseName;
                    tableName = showDataProfileRequest.tableName;
                } else {
                    workspace = showDataProfileRequest['workspace'];
                    dwId = showDataProfileRequest['dw_id'];
                    dbType = showDataProfileRequest['db_type'];
                    databaseName = showDataProfileRequest['database_name'];
                    tableName = showDataProfileRequest['table_name'];
                }
            }

        
            if (dwId === null || dwId === undefined) {
                throw new RequiredError('dwId','Required parameter dwId was null or undefined when calling showDataProfile.');
            }
            if (dwId !== null && dwId !== undefined) {
                localVarQueryParameter['dw_id'] = dwId;
            }
            if (dbType === null || dbType === undefined) {
                throw new RequiredError('dbType','Required parameter dbType was null or undefined when calling showDataProfile.');
            }
            if (dbType !== null && dbType !== undefined) {
                localVarQueryParameter['db_type'] = dbType;
            }
            if (databaseName === null || databaseName === undefined) {
                throw new RequiredError('databaseName','Required parameter databaseName was null or undefined when calling showDataProfile.');
            }
            if (databaseName !== null && databaseName !== undefined) {
                localVarQueryParameter['database_name'] = databaseName;
            }
            if (tableName === null || tableName === undefined) {
                throw new RequiredError('tableName','Required parameter tableName was null or undefined when calling showDataProfile.');
            }
            if (tableName !== null && tableName !== undefined) {
                localVarQueryParameter['table_name'] = tableName;
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 资产搜索
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showDataSets(showDataSetsRequest?: ShowDataSetsRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/datamap/entities/search",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instance;

            if (showDataSetsRequest !== null && showDataSetsRequest !== undefined) {
                if (showDataSetsRequest instanceof ShowDataSetsRequest) {
                    instance = showDataSetsRequest.instance;
                    body = showDataSetsRequest.body
                } else {
                    instance = showDataSetsRequest['instance'];
                    body = showDataSetsRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (instance !== undefined && instance !== null) {
                localVarHeaderParameter['instance'] = String(instance);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询单个数据连接信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showDataconnection(showDataconnectionRequest?: ShowDataconnectionRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/data-connections/{data_connection_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let workspace;
            
            let dataConnectionId;

            if (showDataconnectionRequest !== null && showDataconnectionRequest !== undefined) {
                if (showDataconnectionRequest instanceof ShowDataconnectionRequest) {
                    workspace = showDataconnectionRequest.workspace;
                    dataConnectionId = showDataconnectionRequest.dataConnectionId;
                } else {
                    workspace = showDataconnectionRequest['workspace'];
                    dataConnectionId = showDataconnectionRequest['data_connection_id'];
                }
            }

        
            if (dataConnectionId === null || dataConnectionId === undefined) {
            throw new RequiredError('dataConnectionId','Required parameter dataConnectionId was null or undefined when calling showDataconnection.');
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }

            options.pathParams = { 'data_connection_id': dataConnectionId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 资产血缘接口，该接口功能处于邀测阶段，后续将随功能公测将逐步开放。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showDatamapLineage(showDatamapLineageRequest?: ShowDatamapLineageRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/datamap/lineage/guid/{guid}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instance;
            
            let guid;
            
            let direction;
            
            let relationshipTypes;
            
            let relationshipTypeCategories;
            
            let relatedEntityTypes;
            
            let extendProcessDataFlow;
            
            let includeParentEntity;

            if (showDatamapLineageRequest !== null && showDatamapLineageRequest !== undefined) {
                if (showDatamapLineageRequest instanceof ShowDatamapLineageRequest) {
                    instance = showDatamapLineageRequest.instance;
                    guid = showDatamapLineageRequest.guid;
                    direction = showDatamapLineageRequest.direction;
                    relationshipTypes = showDatamapLineageRequest.relationshipTypes;
                    relationshipTypeCategories = showDatamapLineageRequest.relationshipTypeCategories;
                    relatedEntityTypes = showDatamapLineageRequest.relatedEntityTypes;
                    extendProcessDataFlow = showDatamapLineageRequest.extendProcessDataFlow;
                    includeParentEntity = showDatamapLineageRequest.includeParentEntity;
                } else {
                    instance = showDatamapLineageRequest['instance'];
                    guid = showDatamapLineageRequest['guid'];
                    direction = showDatamapLineageRequest['direction'];
                    relationshipTypes = showDatamapLineageRequest['relationship_types'];
                    relationshipTypeCategories = showDatamapLineageRequest['relationship_type_categories'];
                    relatedEntityTypes = showDatamapLineageRequest['related_entity_types'];
                    extendProcessDataFlow = showDatamapLineageRequest['extend_process_data_flow'];
                    includeParentEntity = showDatamapLineageRequest['include_parent_entity'];
                }
            }

        
            if (guid === null || guid === undefined) {
            throw new RequiredError('guid','Required parameter guid was null or undefined when calling showDatamapLineage.');
            }
            if (direction !== null && direction !== undefined) {
                localVarQueryParameter['direction'] = direction;
            }
            if (relationshipTypes !== null && relationshipTypes !== undefined) {
                localVarQueryParameter['relationship_types'] = relationshipTypes;
            }
            if (relationshipTypeCategories !== null && relationshipTypeCategories !== undefined) {
                localVarQueryParameter['relationship_type_categories'] = relationshipTypeCategories;
            }
            if (relatedEntityTypes !== null && relatedEntityTypes !== undefined) {
                localVarQueryParameter['related_entity_types'] = relatedEntityTypes;
            }
            if (extendProcessDataFlow !== null && extendProcessDataFlow !== undefined) {
                localVarQueryParameter['extend_process_data_flow'] = extendProcessDataFlow;
            }
            if (includeParentEntity !== null && includeParentEntity !== undefined) {
                localVarQueryParameter['include_parent_entity'] = includeParentEntity;
            }
            if (instance !== undefined && instance !== null) {
                localVarHeaderParameter['instance'] = String(instance);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'guid': guid, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 通过id获取衍生详情信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showDerivativeIndexById(showDerivativeIndexByIdRequest?: ShowDerivativeIndexByIdRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/design/derivative-indexs/{id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let workspace;
            
            let id;
            
            let latest;

            if (showDerivativeIndexByIdRequest !== null && showDerivativeIndexByIdRequest !== undefined) {
                if (showDerivativeIndexByIdRequest instanceof ShowDerivativeIndexByIdRequest) {
                    workspace = showDerivativeIndexByIdRequest.workspace;
                    id = showDerivativeIndexByIdRequest.id;
                    latest = showDerivativeIndexByIdRequest.latest;
                } else {
                    workspace = showDerivativeIndexByIdRequest['workspace'];
                    id = showDerivativeIndexByIdRequest['id'];
                    latest = showDerivativeIndexByIdRequest['latest'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling showDerivativeIndexById.');
            }
            if (latest !== null && latest !== undefined) {
                localVarQueryParameter['latest'] = latest;
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 通过id查看维度详情信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showDimensionById(showDimensionByIdRequest?: ShowDimensionByIdRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/design/dimensions/{id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let workspace;
            
            let id;
            
            let latest;

            if (showDimensionByIdRequest !== null && showDimensionByIdRequest !== undefined) {
                if (showDimensionByIdRequest instanceof ShowDimensionByIdRequest) {
                    workspace = showDimensionByIdRequest.workspace;
                    id = showDimensionByIdRequest.id;
                    latest = showDimensionByIdRequest.latest;
                } else {
                    workspace = showDimensionByIdRequest['workspace'];
                    id = showDimensionByIdRequest['id'];
                    latest = showDimensionByIdRequest['latest'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling showDimensionById.');
            }
            if (latest !== null && latest !== undefined) {
                localVarQueryParameter['latest'] = latest;
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 通过id查看维度表的详情信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showDimensionLogicTableById(showDimensionLogicTableByIdRequest?: ShowDimensionLogicTableByIdRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/design/dimension-logic-tables/{id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let workspace;
            
            let id;
            
            let latest;

            if (showDimensionLogicTableByIdRequest !== null && showDimensionLogicTableByIdRequest !== undefined) {
                if (showDimensionLogicTableByIdRequest instanceof ShowDimensionLogicTableByIdRequest) {
                    workspace = showDimensionLogicTableByIdRequest.workspace;
                    id = showDimensionLogicTableByIdRequest.id;
                    latest = showDimensionLogicTableByIdRequest.latest;
                } else {
                    workspace = showDimensionLogicTableByIdRequest['workspace'];
                    id = showDimensionLogicTableByIdRequest['id'];
                    latest = showDimensionLogicTableByIdRequest['latest'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling showDimensionLogicTableById.');
            }
            if (latest !== null && latest !== undefined) {
                localVarQueryParameter['latest'] = latest;
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询技术资产
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showEntities(showEntitiesRequest?: ShowEntitiesRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/asset/entities/search",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let workspace;

            if (showEntitiesRequest !== null && showEntitiesRequest !== undefined) {
                if (showEntitiesRequest instanceof ShowEntitiesRequest) {
                    workspace = showEntitiesRequest.workspace;
                    body = showEntitiesRequest.body
                } else {
                    workspace = showEntitiesRequest['workspace'];
                    body = showEntitiesRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据表guid可以获取表的详情信息，表的详情信息包含column的信息，也可以根据column的guid直接获取column的信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showEntityInfoByGuid(showEntityInfoByGuidRequest?: ShowEntityInfoByGuidRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/asset/entities/{guid}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let workspace;
            
            let guid;

            if (showEntityInfoByGuidRequest !== null && showEntityInfoByGuidRequest !== undefined) {
                if (showEntityInfoByGuidRequest instanceof ShowEntityInfoByGuidRequest) {
                    workspace = showEntityInfoByGuidRequest.workspace;
                    guid = showEntityInfoByGuidRequest.guid;
                } else {
                    workspace = showEntityInfoByGuidRequest['workspace'];
                    guid = showEntityInfoByGuidRequest['guid'];
                }
            }

        
            if (guid === null || guid === undefined) {
            throw new RequiredError('guid','Required parameter guid was null or undefined when calling showEntityInfoByGuid.');
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }

            options.pathParams = { 'guid': guid, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 通过id查看事实表的详情信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showFactLogicTableById(showFactLogicTableByIdRequest?: ShowFactLogicTableByIdRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/design/fact-logic-tables/{id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let workspace;
            
            let id;
            
            let latest;

            if (showFactLogicTableByIdRequest !== null && showFactLogicTableByIdRequest !== undefined) {
                if (showFactLogicTableByIdRequest instanceof ShowFactLogicTableByIdRequest) {
                    workspace = showFactLogicTableByIdRequest.workspace;
                    id = showFactLogicTableByIdRequest.id;
                    latest = showFactLogicTableByIdRequest.latest;
                } else {
                    workspace = showFactLogicTableByIdRequest['workspace'];
                    id = showFactLogicTableByIdRequest['id'];
                    latest = showFactLogicTableByIdRequest['latest'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling showFactLogicTableById.');
            }
            if (latest !== null && latest !== undefined) {
                localVarQueryParameter['latest'] = latest;
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询环境变量信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showFactoryEnv(showFactoryEnvRequest?: ShowFactoryEnvRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/factory/env",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let workspace;

            if (showFactoryEnvRequest !== null && showFactoryEnvRequest !== undefined) {
                if (showFactoryEnvRequest instanceof ShowFactoryEnvRequest) {
                    workspace = showFactoryEnvRequest.workspace;
                } else {
                    workspace = showFactoryEnvRequest['workspace'];
                }
            }

        
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }

            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询指定发布包详情
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showFactoryPackageDetail(showFactoryPackageDetailRequest?: ShowFactoryPackageDetailRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/factory/release-packages/{package_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let packageId;
            
            let workspace;
            
            let contentType;

            if (showFactoryPackageDetailRequest !== null && showFactoryPackageDetailRequest !== undefined) {
                if (showFactoryPackageDetailRequest instanceof ShowFactoryPackageDetailRequest) {
                    packageId = showFactoryPackageDetailRequest.packageId;
                    workspace = showFactoryPackageDetailRequest.workspace;
                    contentType = showFactoryPackageDetailRequest.contentType;
                } else {
                    packageId = showFactoryPackageDetailRequest['package_id'];
                    workspace = showFactoryPackageDetailRequest['workspace'];
                    contentType = showFactoryPackageDetailRequest['Content-Type'];
                }
            }

        
            if (packageId === null || packageId === undefined) {
            throw new RequiredError('packageId','Required parameter packageId was null or undefined when calling showFactoryPackageDetail.');
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.pathParams = { 'package_id': packageId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询补数据实例
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showFactorySupplementData(showFactorySupplementDataRequest?: ShowFactorySupplementDataRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/factory/supplement-data",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let workspace;
            
            let sort;
            
            let page;
            
            let size;
            
            let name;
            
            let userName;
            
            let status;
            
            let startDate;
            
            let endDate;

            if (showFactorySupplementDataRequest !== null && showFactorySupplementDataRequest !== undefined) {
                if (showFactorySupplementDataRequest instanceof ShowFactorySupplementDataRequest) {
                    workspace = showFactorySupplementDataRequest.workspace;
                    sort = showFactorySupplementDataRequest.sort;
                    page = showFactorySupplementDataRequest.page;
                    size = showFactorySupplementDataRequest.size;
                    name = showFactorySupplementDataRequest.name;
                    userName = showFactorySupplementDataRequest.userName;
                    status = showFactorySupplementDataRequest.status;
                    startDate = showFactorySupplementDataRequest.startDate;
                    endDate = showFactorySupplementDataRequest.endDate;
                } else {
                    workspace = showFactorySupplementDataRequest['workspace'];
                    sort = showFactorySupplementDataRequest['sort'];
                    page = showFactorySupplementDataRequest['page'];
                    size = showFactorySupplementDataRequest['size'];
                    name = showFactorySupplementDataRequest['name'];
                    userName = showFactorySupplementDataRequest['user_name'];
                    status = showFactorySupplementDataRequest['status'];
                    startDate = showFactorySupplementDataRequest['start_date'];
                    endDate = showFactorySupplementDataRequest['end_date'];
                }
            }

        
            if (sort !== null && sort !== undefined) {
                localVarQueryParameter['sort'] = sort;
            }
            if (page !== null && page !== undefined) {
                localVarQueryParameter['page'] = page;
            }
            if (size !== null && size !== undefined) {
                localVarQueryParameter['size'] = size;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (userName !== null && userName !== undefined) {
                localVarQueryParameter['user_name'] = userName;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (startDate !== null && startDate !== undefined) {
                localVarQueryParameter['start_date'] = startDate;
            }
            if (endDate !== null && endDate !== undefined) {
                localVarQueryParameter['end_date'] = endDate;
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询标签列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showGlossaryList(showGlossaryListRequest?: ShowGlossaryListRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/tags",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let workspace;
            
            let type;
            
            let name;
            
            let createUser;
            
            let start;
            
            let end;
            
            let limit;
            
            let offset;
            
            let sortBy;
            
            let sortOrder;

            if (showGlossaryListRequest !== null && showGlossaryListRequest !== undefined) {
                if (showGlossaryListRequest instanceof ShowGlossaryListRequest) {
                    workspace = showGlossaryListRequest.workspace;
                    type = showGlossaryListRequest.type;
                    name = showGlossaryListRequest.name;
                    createUser = showGlossaryListRequest.createUser;
                    start = showGlossaryListRequest.start;
                    end = showGlossaryListRequest.end;
                    limit = showGlossaryListRequest.limit;
                    offset = showGlossaryListRequest.offset;
                    sortBy = showGlossaryListRequest.sortBy;
                    sortOrder = showGlossaryListRequest.sortOrder;
                } else {
                    workspace = showGlossaryListRequest['workspace'];
                    type = showGlossaryListRequest['type'];
                    name = showGlossaryListRequest['name'];
                    createUser = showGlossaryListRequest['create_user'];
                    start = showGlossaryListRequest['start'];
                    end = showGlossaryListRequest['end'];
                    limit = showGlossaryListRequest['limit'];
                    offset = showGlossaryListRequest['offset'];
                    sortBy = showGlossaryListRequest['sort_by'];
                    sortOrder = showGlossaryListRequest['sort_order'];
                }
            }

        
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (createUser !== null && createUser !== undefined) {
                localVarQueryParameter['create_user'] = createUser;
            }
            if (start !== null && start !== undefined) {
                localVarQueryParameter['start'] = start;
            }
            if (end !== null && end !== undefined) {
                localVarQueryParameter['end'] = end;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (sortBy !== null && sortBy !== undefined) {
                localVarQueryParameter['sort_by'] = sortBy;
            }
            if (sortOrder !== null && sortOrder !== undefined) {
                localVarQueryParameter['sort_order'] = sortOrder;
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询表相关的作业算子运行实例信息，该接口功能处于邀测阶段，后续将随功能公测将逐步开放。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showInstanceInfos(showInstanceInfosRequest?: ShowInstanceInfosRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/datamap/node/{task_id}/instances",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instance;
            
            let taskId;
            
            let jobName;
            
            let startTime;
            
            let endTime;
            
            let offset;
            
            let limit;
            
            let workspaceId;

            if (showInstanceInfosRequest !== null && showInstanceInfosRequest !== undefined) {
                if (showInstanceInfosRequest instanceof ShowInstanceInfosRequest) {
                    instance = showInstanceInfosRequest.instance;
                    taskId = showInstanceInfosRequest.taskId;
                    jobName = showInstanceInfosRequest.jobName;
                    startTime = showInstanceInfosRequest.startTime;
                    endTime = showInstanceInfosRequest.endTime;
                    offset = showInstanceInfosRequest.offset;
                    limit = showInstanceInfosRequest.limit;
                    workspaceId = showInstanceInfosRequest.workspaceId;
                } else {
                    instance = showInstanceInfosRequest['instance'];
                    taskId = showInstanceInfosRequest['task_id'];
                    jobName = showInstanceInfosRequest['job_name'];
                    startTime = showInstanceInfosRequest['start_time'];
                    endTime = showInstanceInfosRequest['end_time'];
                    offset = showInstanceInfosRequest['offset'];
                    limit = showInstanceInfosRequest['limit'];
                    workspaceId = showInstanceInfosRequest['workspace_id'];
                }
            }

        
            if (taskId === null || taskId === undefined) {
            throw new RequiredError('taskId','Required parameter taskId was null or undefined when calling showInstanceInfos.');
            }
            if (jobName === null || jobName === undefined) {
                throw new RequiredError('jobName','Required parameter jobName was null or undefined when calling showInstanceInfos.');
            }
            if (jobName !== null && jobName !== undefined) {
                localVarQueryParameter['job_name'] = jobName;
            }
            if (startTime === null || startTime === undefined) {
                throw new RequiredError('startTime','Required parameter startTime was null or undefined when calling showInstanceInfos.');
            }
            if (startTime !== null && startTime !== undefined) {
                localVarQueryParameter['start_time'] = startTime;
            }
            if (endTime === null || endTime === undefined) {
                throw new RequiredError('endTime','Required parameter endTime was null or undefined when calling showInstanceInfos.');
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }
            if (offset === null || offset === undefined) {
                throw new RequiredError('offset','Required parameter offset was null or undefined when calling showInstanceInfos.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit === null || limit === undefined) {
                throw new RequiredError('limit','Required parameter limit was null or undefined when calling showInstanceInfos.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (workspaceId !== null && workspaceId !== undefined) {
                localVarQueryParameter['workspace_id'] = workspaceId;
            }
            if (instance !== undefined && instance !== null) {
                localVarHeaderParameter['instance'] = String(instance);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'task_id': taskId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取任务日志
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showInstanceLog(showInstanceLogRequest?: ShowInstanceLogRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/metadata/tasks/{task_id}/{instance_id}/log",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let workspace;
            
            let taskId;
            
            let instanceId;

            if (showInstanceLogRequest !== null && showInstanceLogRequest !== undefined) {
                if (showInstanceLogRequest instanceof ShowInstanceLogRequest) {
                    workspace = showInstanceLogRequest.workspace;
                    taskId = showInstanceLogRequest.taskId;
                    instanceId = showInstanceLogRequest.instanceId;
                    body = showInstanceLogRequest.body
                } else {
                    workspace = showInstanceLogRequest['workspace'];
                    taskId = showInstanceLogRequest['task_id'];
                    instanceId = showInstanceLogRequest['instance_id'];
                    body = showInstanceLogRequest['body'];
                }
            }

        
            if (taskId === null || taskId === undefined) {
            throw new RequiredError('taskId','Required parameter taskId was null or undefined when calling showInstanceLog.');
            }
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showInstanceLog.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'task_id': taskId,'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取实例结果
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showInstanceResult(showInstanceResultRequest?: ShowInstanceResultRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/quality/instances/{instance_id}/result",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let workspace;

            if (showInstanceResultRequest !== null && showInstanceResultRequest !== undefined) {
                if (showInstanceResultRequest instanceof ShowInstanceResultRequest) {
                    instanceId = showInstanceResultRequest.instanceId;
                    workspace = showInstanceResultRequest.workspace;
                } else {
                    instanceId = showInstanceResultRequest['instance_id'];
                    workspace = showInstanceResultRequest['workspace'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showInstanceResult.');
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 血缘查询
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showLineage(showLineageRequest?: ShowLineageRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/entities/{guid}/lineage",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let workspace;
            
            let guid;
            
            let direction;
            
            let depth;

            if (showLineageRequest !== null && showLineageRequest !== undefined) {
                if (showLineageRequest instanceof ShowLineageRequest) {
                    workspace = showLineageRequest.workspace;
                    guid = showLineageRequest.guid;
                    direction = showLineageRequest.direction;
                    depth = showLineageRequest.depth;
                } else {
                    workspace = showLineageRequest['workspace'];
                    guid = showLineageRequest['guid'];
                    direction = showLineageRequest['direction'];
                    depth = showLineageRequest['depth'];
                }
            }

        
            if (guid === null || guid === undefined) {
            throw new RequiredError('guid','Required parameter guid was null or undefined when calling showLineage.');
            }
            if (direction !== null && direction !== undefined) {
                localVarQueryParameter['direction'] = direction;
            }
            if (depth !== null && depth !== undefined) {
                localVarQueryParameter['depth'] = depth;
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'guid': guid, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 批量血缘接口，根据作业算子分页批量查询血缘。该接口功能处于邀测阶段，后续将随功能公测将逐步开放。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showLineageBulk(showLineageBulkRequest?: ShowLineageBulkRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/datamap/lineage/bulk",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instance;
            
            let offset;
            
            let limit;

            if (showLineageBulkRequest !== null && showLineageBulkRequest !== undefined) {
                if (showLineageBulkRequest instanceof ShowLineageBulkRequest) {
                    instance = showLineageBulkRequest.instance;
                    offset = showLineageBulkRequest.offset;
                    limit = showLineageBulkRequest.limit;
                } else {
                    instance = showLineageBulkRequest['instance'];
                    offset = showLineageBulkRequest['offset'];
                    limit = showLineageBulkRequest['limit'];
                }
            }

        
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (instance !== undefined && instance !== null) {
                localVarHeaderParameter['instance'] = String(instance);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取消息详情
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showMessageDetail(showMessageDetailRequest?: ShowMessageDetailRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/service/messages/{message_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let workspace;
            
            let contentType;
            
            let messageId;
            
            let dlmType;

            if (showMessageDetailRequest !== null && showMessageDetailRequest !== undefined) {
                if (showMessageDetailRequest instanceof ShowMessageDetailRequest) {
                    workspace = showMessageDetailRequest.workspace;
                    contentType = showMessageDetailRequest.contentType;
                    messageId = showMessageDetailRequest.messageId;
                    dlmType = showMessageDetailRequest.dlmType;
                } else {
                    workspace = showMessageDetailRequest['workspace'];
                    contentType = showMessageDetailRequest['Content-Type'];
                    messageId = showMessageDetailRequest['message_id'];
                    dlmType = showMessageDetailRequest['Dlm-Type'];
                }
            }

        
            if (messageId === null || messageId === undefined) {
            throw new RequiredError('messageId','Required parameter messageId was null or undefined when calling showMessageDetail.');
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }
            if (dlmType !== undefined && dlmType !== null) {
                localVarHeaderParameter['Dlm-Type'] = String(dlmType);
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.pathParams = { 'message_id': messageId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 指标资产查询接口
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showMetricAssets(showMetricAssetsRequest?: ShowMetricAssetsRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/asset/metric-assets/search",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let workspace;

            if (showMetricAssetsRequest !== null && showMetricAssetsRequest !== undefined) {
                if (showMetricAssetsRequest instanceof ShowMetricAssetsRequest) {
                    workspace = showMetricAssetsRequest.workspace;
                    body = showMetricAssetsRequest.body
                } else {
                    workspace = showMetricAssetsRequest['workspace'];
                    body = showMetricAssetsRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询指标资产目录树
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showMetricTree(showMetricTreeRequest?: ShowMetricTreeRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/asset/metric-tree",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let workspace;

            if (showMetricTreeRequest !== null && showMetricTreeRequest !== undefined) {
                if (showMetricTreeRequest instanceof ShowMetricTreeRequest) {
                    workspace = showMetricTreeRequest.workspace;
                } else {
                    workspace = showMetricTreeRequest['workspace'];
                }
            }

        
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }

            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询表相关的作业算子列表，该接口功能处于邀测阶段，后续将随功能公测将逐步开放。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showNodes(showNodesRequest?: ShowNodesRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/datamap/table/{guid}/node",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instance;
            
            let guid;

            if (showNodesRequest !== null && showNodesRequest !== undefined) {
                if (showNodesRequest instanceof ShowNodesRequest) {
                    instance = showNodesRequest.instance;
                    guid = showNodesRequest.guid;
                } else {
                    instance = showNodesRequest['instance'];
                    guid = showNodesRequest['guid'];
                }
            }

        
            if (guid === null || guid === undefined) {
            throw new RequiredError('guid','Required parameter guid was null or undefined when calling showNodes.');
            }
            if (instance !== undefined && instance !== null) {
                localVarHeaderParameter['instance'] = String(instance);
            }

            options.pathParams = { 'guid': guid, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 通过id获取路径
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showPathById(showPathByIdRequest?: ShowPathByIdRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/service/servicecatalogs/{catalog_id}/paths",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let workspace;
            
            let contentType;
            
            let catalogId;
            
            let dlmType;
            
            let limit;
            
            let offset;

            if (showPathByIdRequest !== null && showPathByIdRequest !== undefined) {
                if (showPathByIdRequest instanceof ShowPathByIdRequest) {
                    workspace = showPathByIdRequest.workspace;
                    contentType = showPathByIdRequest.contentType;
                    catalogId = showPathByIdRequest.catalogId;
                    dlmType = showPathByIdRequest.dlmType;
                    limit = showPathByIdRequest.limit;
                    offset = showPathByIdRequest.offset;
                } else {
                    workspace = showPathByIdRequest['workspace'];
                    contentType = showPathByIdRequest['Content-Type'];
                    catalogId = showPathByIdRequest['catalog_id'];
                    dlmType = showPathByIdRequest['Dlm-Type'];
                    limit = showPathByIdRequest['limit'];
                    offset = showPathByIdRequest['offset'];
                }
            }

        
            if (catalogId === null || catalogId === undefined) {
            throw new RequiredError('catalogId','Required parameter catalogId was null or undefined when calling showPathById.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }
            if (dlmType !== undefined && dlmType !== null) {
                localVarHeaderParameter['Dlm-Type'] = String(dlmType);
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'catalog_id': catalogId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 通过id获取路径对象
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showPathObjectById(showPathObjectByIdRequest?: ShowPathObjectByIdRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/service/servicecatalogs/{catalog_id}/layerpaths",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let workspace;
            
            let contentType;
            
            let catalogId;
            
            let dlmType;
            
            let limit;
            
            let offset;

            if (showPathObjectByIdRequest !== null && showPathObjectByIdRequest !== undefined) {
                if (showPathObjectByIdRequest instanceof ShowPathObjectByIdRequest) {
                    workspace = showPathObjectByIdRequest.workspace;
                    contentType = showPathObjectByIdRequest.contentType;
                    catalogId = showPathObjectByIdRequest.catalogId;
                    dlmType = showPathObjectByIdRequest.dlmType;
                    limit = showPathObjectByIdRequest.limit;
                    offset = showPathObjectByIdRequest.offset;
                } else {
                    workspace = showPathObjectByIdRequest['workspace'];
                    contentType = showPathObjectByIdRequest['Content-Type'];
                    catalogId = showPathObjectByIdRequest['catalog_id'];
                    dlmType = showPathObjectByIdRequest['Dlm-Type'];
                    limit = showPathObjectByIdRequest['limit'];
                    offset = showPathObjectByIdRequest['offset'];
                }
            }

        
            if (catalogId === null || catalogId === undefined) {
            throw new RequiredError('catalogId','Required parameter catalogId was null or undefined when calling showPathObjectById.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }
            if (dlmType !== undefined && dlmType !== null) {
                localVarHeaderParameter['Dlm-Type'] = String(dlmType);
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'catalog_id': catalogId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取质量作业详情
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showQualityTaskDetail(showQualityTaskDetailRequest?: ShowQualityTaskDetailRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/quality/quality-tasks/{id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let id;
            
            let workspace;

            if (showQualityTaskDetailRequest !== null && showQualityTaskDetailRequest !== undefined) {
                if (showQualityTaskDetailRequest instanceof ShowQualityTaskDetailRequest) {
                    id = showQualityTaskDetailRequest.id;
                    workspace = showQualityTaskDetailRequest.workspace;
                } else {
                    id = showQualityTaskDetailRequest['id'];
                    workspace = showQualityTaskDetailRequest['workspace'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling showQualityTaskDetail.');
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }

            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 通过id获取关系详情信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showRelationById(showRelationByIdRequest?: ShowRelationByIdRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/design/relation/{id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let workspace;
            
            let id;
            
            let latest;

            if (showRelationByIdRequest !== null && showRelationByIdRequest !== undefined) {
                if (showRelationByIdRequest instanceof ShowRelationByIdRequest) {
                    workspace = showRelationByIdRequest.workspace;
                    id = showRelationByIdRequest.id;
                    latest = showRelationByIdRequest.latest;
                } else {
                    workspace = showRelationByIdRequest['workspace'];
                    id = showRelationByIdRequest['id'];
                    latest = showRelationByIdRequest['latest'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling showRelationById.');
            }
            if (latest !== null && latest !== undefined) {
                localVarQueryParameter['latest'] = latest;
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询特定识别规则
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showSecurityDataClassificationRule(showSecurityDataClassificationRuleRequest?: ShowSecurityDataClassificationRuleRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/security/data-classification/rule/{id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let workspace;
            
            let id;

            if (showSecurityDataClassificationRuleRequest !== null && showSecurityDataClassificationRuleRequest !== undefined) {
                if (showSecurityDataClassificationRuleRequest instanceof ShowSecurityDataClassificationRuleRequest) {
                    workspace = showSecurityDataClassificationRuleRequest.workspace;
                    id = showSecurityDataClassificationRuleRequest.id;
                } else {
                    workspace = showSecurityDataClassificationRuleRequest['workspace'];
                    id = showSecurityDataClassificationRuleRequest['id'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling showSecurityDataClassificationRule.');
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }

            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询规则组
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showSecurityDataClassificationRuleGroup(showSecurityDataClassificationRuleGroupRequest?: ShowSecurityDataClassificationRuleGroupRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/security/data-classification/rule/group/{id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let workspace;
            
            let id;

            if (showSecurityDataClassificationRuleGroupRequest !== null && showSecurityDataClassificationRuleGroupRequest !== undefined) {
                if (showSecurityDataClassificationRuleGroupRequest instanceof ShowSecurityDataClassificationRuleGroupRequest) {
                    workspace = showSecurityDataClassificationRuleGroupRequest.workspace;
                    id = showSecurityDataClassificationRuleGroupRequest.id;
                } else {
                    workspace = showSecurityDataClassificationRuleGroupRequest['workspace'];
                    id = showSecurityDataClassificationRuleGroupRequest['id'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling showSecurityDataClassificationRuleGroup.');
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }

            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询权限集
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showSecurityPermissionSet(showSecurityPermissionSetRequest?: ShowSecurityPermissionSetRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/security/permission-sets/{permission_set_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let permissionSetId;
            
            let workspace;

            if (showSecurityPermissionSetRequest !== null && showSecurityPermissionSetRequest !== undefined) {
                if (showSecurityPermissionSetRequest instanceof ShowSecurityPermissionSetRequest) {
                    permissionSetId = showSecurityPermissionSetRequest.permissionSetId;
                    workspace = showSecurityPermissionSetRequest.workspace;
                } else {
                    permissionSetId = showSecurityPermissionSetRequest['permission_set_id'];
                    workspace = showSecurityPermissionSetRequest['workspace'];
                }
            }

        
            if (permissionSetId === null || permissionSetId === undefined) {
            throw new RequiredError('permissionSetId','Required parameter permissionSetId was null or undefined when calling showSecurityPermissionSet.');
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }

            options.pathParams = { 'permission_set_id': permissionSetId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据指定的id查询密级
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showSecuritySecrecyLevel(showSecuritySecrecyLevelRequest?: ShowSecuritySecrecyLevelRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/security/data-classification/secrecy-level/{id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let workspace;
            
            let id;

            if (showSecuritySecrecyLevelRequest !== null && showSecuritySecrecyLevelRequest !== undefined) {
                if (showSecuritySecrecyLevelRequest instanceof ShowSecuritySecrecyLevelRequest) {
                    workspace = showSecuritySecrecyLevelRequest.workspace;
                    id = showSecuritySecrecyLevelRequest.id;
                } else {
                    workspace = showSecuritySecrecyLevelRequest['workspace'];
                    id = showSecuritySecrecyLevelRequest['id'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling showSecuritySecrecyLevel.');
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }

            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 通过id获取数据标准详情信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showStandardById(showStandardByIdRequest?: ShowStandardByIdRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/design/standards/{id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let workspace;
            
            let id;

            if (showStandardByIdRequest !== null && showStandardByIdRequest !== undefined) {
                if (showStandardByIdRequest instanceof ShowStandardByIdRequest) {
                    workspace = showStandardByIdRequest.workspace;
                    id = showStandardByIdRequest.id;
                } else {
                    workspace = showStandardByIdRequest['workspace'];
                    id = showStandardByIdRequest['id'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling showStandardById.');
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }

            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询数据标准模板
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showStandardTemplate(showStandardTemplateRequest?: ShowStandardTemplateRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/design/standards/templates",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let workspace;
            
            let limit;
            
            let offset;

            if (showStandardTemplateRequest !== null && showStandardTemplateRequest !== undefined) {
                if (showStandardTemplateRequest instanceof ShowStandardTemplateRequest) {
                    workspace = showStandardTemplateRequest.workspace;
                    limit = showStandardTemplateRequest.limit;
                    offset = showStandardTemplateRequest.offset;
                } else {
                    workspace = showStandardTemplateRequest['workspace'];
                    limit = showStandardTemplateRequest['limit'];
                    offset = showStandardTemplateRequest['offset'];
                }
            }

        
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 通过id获取模型表详情信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showTableModelById(showTableModelByIdRequest?: ShowTableModelByIdRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/design/table-model/{id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let workspace;
            
            let id;
            
            let latest;

            if (showTableModelByIdRequest !== null && showTableModelByIdRequest !== undefined) {
                if (showTableModelByIdRequest instanceof ShowTableModelByIdRequest) {
                    workspace = showTableModelByIdRequest.workspace;
                    id = showTableModelByIdRequest.id;
                    latest = showTableModelByIdRequest.latest;
                } else {
                    workspace = showTableModelByIdRequest['workspace'];
                    id = showTableModelByIdRequest['id'];
                    latest = showTableModelByIdRequest['latest'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling showTableModelById.');
            }
            if (latest !== null && latest !== undefined) {
                localVarQueryParameter['latest'] = latest;
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 搜索查询标签分页展示
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showTags(showTagsRequest?: ShowTagsRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/datamap/tags/search",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instance;

            if (showTagsRequest !== null && showTagsRequest !== undefined) {
                if (showTagsRequest instanceof ShowTagsRequest) {
                    instance = showTagsRequest.instance;
                    body = showTagsRequest.body
                } else {
                    instance = showTagsRequest['instance'];
                    body = showTagsRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (instance !== undefined && instance !== null) {
                localVarHeaderParameter['instance'] = String(instance);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询采集任务详情
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showTaskInfo(showTaskInfoRequest?: ShowTaskInfoRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/metadata/tasks/{task_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let workspace;
            
            let taskId;

            if (showTaskInfoRequest !== null && showTaskInfoRequest !== undefined) {
                if (showTaskInfoRequest instanceof ShowTaskInfoRequest) {
                    workspace = showTaskInfoRequest.workspace;
                    taskId = showTaskInfoRequest.taskId;
                } else {
                    workspace = showTaskInfoRequest['workspace'];
                    taskId = showTaskInfoRequest['task_id'];
                }
            }

        
            if (taskId === null || taskId === undefined) {
            throw new RequiredError('taskId','Required parameter taskId was null or undefined when calling showTaskInfo.');
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }

            options.pathParams = { 'task_id': taskId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询采集任务列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showTaskList(showTaskListRequest?: ShowTaskListRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/metadata/tasks/search",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let workspace;

            if (showTaskListRequest !== null && showTaskListRequest !== undefined) {
                if (showTaskListRequest instanceof ShowTaskListRequest) {
                    workspace = showTaskListRequest.workspace;
                    body = showTaskListRequest.body
                } else {
                    workspace = showTaskListRequest['workspace'];
                    body = showTaskListRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取技术资产统计信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showTechnicalAssetsStatistic(showTechnicalAssetsStatisticRequest?: ShowTechnicalAssetsStatisticRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/asset/statistic/assets/technical-assets",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let workspace;
            
            let tag;
            
            let offset;
            
            let limit;

            if (showTechnicalAssetsStatisticRequest !== null && showTechnicalAssetsStatisticRequest !== undefined) {
                if (showTechnicalAssetsStatisticRequest instanceof ShowTechnicalAssetsStatisticRequest) {
                    workspace = showTechnicalAssetsStatisticRequest.workspace;
                    tag = showTechnicalAssetsStatisticRequest.tag;
                    offset = showTechnicalAssetsStatisticRequest.offset;
                    limit = showTechnicalAssetsStatisticRequest.limit;
                } else {
                    workspace = showTechnicalAssetsStatisticRequest['workspace'];
                    tag = showTechnicalAssetsStatisticRequest['tag'];
                    offset = showTechnicalAssetsStatisticRequest['offset'];
                    limit = showTechnicalAssetsStatisticRequest['limit'];
                }
            }

        
            if (tag !== null && tag !== undefined) {
                localVarQueryParameter['tag'] = tag;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取规则模板详情
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showTemplatesDetail(showTemplatesDetailRequest?: ShowTemplatesDetailRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/quality/rule-templates/{id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let id;
            
            let workspace;

            if (showTemplatesDetailRequest !== null && showTemplatesDetailRequest !== undefined) {
                if (showTemplatesDetailRequest instanceof ShowTemplatesDetailRequest) {
                    id = showTemplatesDetailRequest.id;
                    workspace = showTemplatesDetailRequest.workspace;
                } else {
                    id = showTemplatesDetailRequest['id'];
                    workspace = showTemplatesDetailRequest['workspace'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling showTemplatesDetail.');
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }

            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 无血缘关系表查询
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showUnrelatedTable(showUnrelatedTableRequest?: ShowUnrelatedTableRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/lineage/search/unrelated/table",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let workspace;

            if (showUnrelatedTableRequest !== null && showUnrelatedTableRequest !== undefined) {
                if (showUnrelatedTableRequest instanceof ShowUnrelatedTableRequest) {
                    workspace = showUnrelatedTableRequest.workspace;
                    body = showUnrelatedTableRequest.body
                } else {
                    workspace = showUnrelatedTableRequest['workspace'];
                    body = showUnrelatedTableRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取单个工作空间信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showWorkSpace(showWorkSpaceRequest?: ShowWorkSpaceRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/workspaces/{instance_id}/{workspace_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let workspaceId;

            if (showWorkSpaceRequest !== null && showWorkSpaceRequest !== undefined) {
                if (showWorkSpaceRequest instanceof ShowWorkSpaceRequest) {
                    instanceId = showWorkSpaceRequest.instanceId;
                    workspaceId = showWorkSpaceRequest.workspaceId;
                } else {
                    instanceId = showWorkSpaceRequest['instance_id'];
                    workspaceId = showWorkSpaceRequest['workspace_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showWorkSpace.');
            }
            if (workspaceId === null || workspaceId === undefined) {
            throw new RequiredError('workspaceId','Required parameter workspaceId was null or undefined when calling showWorkSpace.');
            }

            options.pathParams = { 'instance_id': instanceId,'workspace_id': workspaceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询物理模型或逻辑模型的工作区空间详情
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showWorkspaceDetailById(showWorkspaceDetailByIdRequest?: ShowWorkspaceDetailByIdRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/design/workspaces/{model_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let workspace;
            
            let modelId;

            if (showWorkspaceDetailByIdRequest !== null && showWorkspaceDetailByIdRequest !== undefined) {
                if (showWorkspaceDetailByIdRequest instanceof ShowWorkspaceDetailByIdRequest) {
                    workspace = showWorkspaceDetailByIdRequest.workspace;
                    modelId = showWorkspaceDetailByIdRequest.modelId;
                } else {
                    workspace = showWorkspaceDetailByIdRequest['workspace'];
                    modelId = showWorkspaceDetailByIdRequest['model_id'];
                }
            }

        
            if (modelId === null || modelId === undefined) {
            throw new RequiredError('modelId','Required parameter modelId was null or undefined when calling showWorkspaceDetailById.');
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }

            options.pathParams = { 'model_id': modelId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 停止补数据实例
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        stopFactorySupplementDataInstance(stopFactorySupplementDataInstanceRequest?: StopFactorySupplementDataInstanceRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/factory/supplement-data/{instance_name}/stop",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceName;
            
            let workspace;

            if (stopFactorySupplementDataInstanceRequest !== null && stopFactorySupplementDataInstanceRequest !== undefined) {
                if (stopFactorySupplementDataInstanceRequest instanceof StopFactorySupplementDataInstanceRequest) {
                    instanceName = stopFactorySupplementDataInstanceRequest.instanceName;
                    workspace = stopFactorySupplementDataInstanceRequest.workspace;
                } else {
                    instanceName = stopFactorySupplementDataInstanceRequest['instance_name'];
                    workspace = stopFactorySupplementDataInstanceRequest['workspace'];
                }
            }

        
            if (instanceName === null || instanceName === undefined) {
            throw new RequiredError('instanceName','Required parameter instanceName was null or undefined when calling stopFactorySupplementDataInstance.');
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }

            options.pathParams = { 'instance_name': instanceName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新应用
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateApp(updateAppRequest?: UpdateAppRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/service/apps/{app_id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let workspace;
            
            let contentType;
            
            let appId;
            
            let dlmType;

            if (updateAppRequest !== null && updateAppRequest !== undefined) {
                if (updateAppRequest instanceof UpdateAppRequest) {
                    workspace = updateAppRequest.workspace;
                    contentType = updateAppRequest.contentType;
                    appId = updateAppRequest.appId;
                    dlmType = updateAppRequest.dlmType;
                    body = updateAppRequest.body
                } else {
                    workspace = updateAppRequest['workspace'];
                    contentType = updateAppRequest['Content-Type'];
                    appId = updateAppRequest['app_id'];
                    dlmType = updateAppRequest['Dlm-Type'];
                    body = updateAppRequest['body'];
                }
            }

        
            if (appId === null || appId === undefined) {
            throw new RequiredError('appId','Required parameter appId was null or undefined when calling updateApp.');
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }
            if (dlmType !== undefined && dlmType !== null) {
                localVarHeaderParameter['Dlm-Type'] = String(dlmType);
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'app_id': appId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新业务指标
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateBizMetric(updateBizMetricRequest?: UpdateBizMetricRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/design/biz-metrics",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let workspace;

            if (updateBizMetricRequest !== null && updateBizMetricRequest !== undefined) {
                if (updateBizMetricRequest instanceof UpdateBizMetricRequest) {
                    workspace = updateBizMetricRequest.workspace;
                    body = updateBizMetricRequest.body
                } else {
                    workspace = updateBizMetricRequest['workspace'];
                    body = updateBizMetricRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新服务目录
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateCatalog(updateCatalogRequest?: UpdateCatalogRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/service/servicecatalogs/{catalog_id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let workspace;
            
            let contentType;
            
            let catalogId;
            
            let dlmType;

            if (updateCatalogRequest !== null && updateCatalogRequest !== undefined) {
                if (updateCatalogRequest instanceof UpdateCatalogRequest) {
                    workspace = updateCatalogRequest.workspace;
                    contentType = updateCatalogRequest.contentType;
                    catalogId = updateCatalogRequest.catalogId;
                    body = updateCatalogRequest.body
                    dlmType = updateCatalogRequest.dlmType;
                } else {
                    workspace = updateCatalogRequest['workspace'];
                    contentType = updateCatalogRequest['Content-Type'];
                    catalogId = updateCatalogRequest['catalog_id'];
                    body = updateCatalogRequest['body'];
                    dlmType = updateCatalogRequest['Dlm-Type'];
                }
            }

        
            if (catalogId === null || catalogId === undefined) {
            throw new RequiredError('catalogId','Required parameter catalogId was null or undefined when calling updateCatalog.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }
            if (dlmType !== undefined && dlmType !== null) {
                localVarHeaderParameter['Dlm-Type'] = String(dlmType);
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'catalog_id': catalogId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改码表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateCodeTable(updateCodeTableRequest?: UpdateCodeTableRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/design/code-tables/{id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let workspace;
            
            let id;

            if (updateCodeTableRequest !== null && updateCodeTableRequest !== undefined) {
                if (updateCodeTableRequest instanceof UpdateCodeTableRequest) {
                    workspace = updateCodeTableRequest.workspace;
                    id = updateCodeTableRequest.id;
                    body = updateCodeTableRequest.body
                } else {
                    workspace = updateCodeTableRequest['workspace'];
                    id = updateCodeTableRequest['id'];
                    body = updateCodeTableRequest['body'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling updateCodeTable.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 编辑码表字段值
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateCodeTableValues(updateCodeTableValuesRequest?: UpdateCodeTableValuesRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/design/code-tables/{id}/values",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let workspace;
            
            let id;

            if (updateCodeTableValuesRequest !== null && updateCodeTableValuesRequest !== undefined) {
                if (updateCodeTableValuesRequest instanceof UpdateCodeTableValuesRequest) {
                    workspace = updateCodeTableValuesRequest.workspace;
                    id = updateCodeTableValuesRequest.id;
                    body = updateCodeTableValuesRequest.body
                } else {
                    workspace = updateCodeTableValuesRequest['workspace'];
                    id = updateCodeTableValuesRequest['id'];
                    body = updateCodeTableValuesRequest['body'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling updateCodeTableValues.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新数据连接信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateDataconnection(updateDataconnectionRequest?: UpdateDataconnectionRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/data-connections/{data_connection_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let workspace;
            
            let dataConnectionId;

            if (updateDataconnectionRequest !== null && updateDataconnectionRequest !== undefined) {
                if (updateDataconnectionRequest instanceof UpdateDataconnectionRequest) {
                    workspace = updateDataconnectionRequest.workspace;
                    dataConnectionId = updateDataconnectionRequest.dataConnectionId;
                    body = updateDataconnectionRequest.body
                } else {
                    workspace = updateDataconnectionRequest['workspace'];
                    dataConnectionId = updateDataconnectionRequest['data_connection_id'];
                    body = updateDataconnectionRequest['body'];
                }
            }

        
            if (dataConnectionId === null || dataConnectionId === undefined) {
            throw new RequiredError('dataConnectionId','Required parameter dataConnectionId was null or undefined when calling updateDataconnection.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'data_connection_id': dataConnectionId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改目录
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateDirectory(updateDirectoryRequest?: UpdateDirectoryRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/design/directorys",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let workspace;

            if (updateDirectoryRequest !== null && updateDirectoryRequest !== undefined) {
                if (updateDirectoryRequest instanceof UpdateDirectoryRequest) {
                    workspace = updateDirectoryRequest.workspace;
                    body = updateDirectoryRequest.body
                } else {
                    workspace = updateDirectoryRequest['workspace'];
                    body = updateDirectoryRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改作业名称
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateFactoryJobName(updateFactoryJobNameRequest?: UpdateFactoryJobNameRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/factory/jobs/{job_name}/rename",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let jobName;
            
            let workspace;
            
            let contentType;
            
            let authorization;
            
            let host;

            if (updateFactoryJobNameRequest !== null && updateFactoryJobNameRequest !== undefined) {
                if (updateFactoryJobNameRequest instanceof UpdateFactoryJobNameRequest) {
                    jobName = updateFactoryJobNameRequest.jobName;
                    workspace = updateFactoryJobNameRequest.workspace;
                    body = updateFactoryJobNameRequest.body
                    contentType = updateFactoryJobNameRequest.contentType;
                    authorization = updateFactoryJobNameRequest.authorization;
                    host = updateFactoryJobNameRequest.host;
                } else {
                    jobName = updateFactoryJobNameRequest['job_name'];
                    workspace = updateFactoryJobNameRequest['workspace'];
                    body = updateFactoryJobNameRequest['body'];
                    contentType = updateFactoryJobNameRequest['Content-Type'];
                    authorization = updateFactoryJobNameRequest['Authorization'];
                    host = updateFactoryJobNameRequest['Host'];
                }
            }

        
            if (jobName === null || jobName === undefined) {
            throw new RequiredError('jobName','Required parameter jobName was null or undefined when calling updateFactoryJobName.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            if (authorization !== undefined && authorization !== null) {
                localVarHeaderParameter['Authorization'] = String(authorization);
            }
            if (host !== undefined && host !== null) {
                localVarHeaderParameter['Host'] = String(host);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'job_name': jobName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改识别规则接口
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateSecurityDataClassificationRule(updateSecurityDataClassificationRuleRequest?: UpdateSecurityDataClassificationRuleRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/security/data-classification/rule/{id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let workspace;
            
            let id;

            if (updateSecurityDataClassificationRuleRequest !== null && updateSecurityDataClassificationRuleRequest !== undefined) {
                if (updateSecurityDataClassificationRuleRequest instanceof UpdateSecurityDataClassificationRuleRequest) {
                    workspace = updateSecurityDataClassificationRuleRequest.workspace;
                    id = updateSecurityDataClassificationRuleRequest.id;
                    body = updateSecurityDataClassificationRuleRequest.body
                } else {
                    workspace = updateSecurityDataClassificationRuleRequest['workspace'];
                    id = updateSecurityDataClassificationRuleRequest['id'];
                    body = updateSecurityDataClassificationRuleRequest['body'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling updateSecurityDataClassificationRule.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新权限集
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateSecurityPermissionSet(updateSecurityPermissionSetRequest?: UpdateSecurityPermissionSetRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/security/permission-sets/{permission_set_id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let permissionSetId;
            
            let workspace;

            if (updateSecurityPermissionSetRequest !== null && updateSecurityPermissionSetRequest !== undefined) {
                if (updateSecurityPermissionSetRequest instanceof UpdateSecurityPermissionSetRequest) {
                    permissionSetId = updateSecurityPermissionSetRequest.permissionSetId;
                    workspace = updateSecurityPermissionSetRequest.workspace;
                    body = updateSecurityPermissionSetRequest.body
                } else {
                    permissionSetId = updateSecurityPermissionSetRequest['permission_set_id'];
                    workspace = updateSecurityPermissionSetRequest['workspace'];
                    body = updateSecurityPermissionSetRequest['body'];
                }
            }

        
            if (permissionSetId === null || permissionSetId === undefined) {
            throw new RequiredError('permissionSetId','Required parameter permissionSetId was null or undefined when calling updateSecurityPermissionSet.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'permission_set_id': permissionSetId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新权限集的权限
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateSecurityPermissionSetPermission(updateSecurityPermissionSetPermissionRequest?: UpdateSecurityPermissionSetPermissionRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/security/permission-sets/{permission_set_id}/permissions/{permission_id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let permissionSetId;
            
            let permissionId;
            
            let workspace;

            if (updateSecurityPermissionSetPermissionRequest !== null && updateSecurityPermissionSetPermissionRequest !== undefined) {
                if (updateSecurityPermissionSetPermissionRequest instanceof UpdateSecurityPermissionSetPermissionRequest) {
                    permissionSetId = updateSecurityPermissionSetPermissionRequest.permissionSetId;
                    permissionId = updateSecurityPermissionSetPermissionRequest.permissionId;
                    workspace = updateSecurityPermissionSetPermissionRequest.workspace;
                    body = updateSecurityPermissionSetPermissionRequest.body
                } else {
                    permissionSetId = updateSecurityPermissionSetPermissionRequest['permission_set_id'];
                    permissionId = updateSecurityPermissionSetPermissionRequest['permission_id'];
                    workspace = updateSecurityPermissionSetPermissionRequest['workspace'];
                    body = updateSecurityPermissionSetPermissionRequest['body'];
                }
            }

        
            if (permissionSetId === null || permissionSetId === undefined) {
            throw new RequiredError('permissionSetId','Required parameter permissionSetId was null or undefined when calling updateSecurityPermissionSetPermission.');
            }
            if (permissionId === null || permissionId === undefined) {
            throw new RequiredError('permissionId','Required parameter permissionId was null or undefined when calling updateSecurityPermissionSetPermission.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'permission_set_id': permissionSetId,'permission_id': permissionId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改识别规则状态接口
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateSecurityRuleEnableStatus(updateSecurityRuleEnableStatusRequest?: UpdateSecurityRuleEnableStatusRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/security/data-classification/rule/switch-status/{id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let workspace;
            
            let id;

            if (updateSecurityRuleEnableStatusRequest !== null && updateSecurityRuleEnableStatusRequest !== undefined) {
                if (updateSecurityRuleEnableStatusRequest instanceof UpdateSecurityRuleEnableStatusRequest) {
                    workspace = updateSecurityRuleEnableStatusRequest.workspace;
                    id = updateSecurityRuleEnableStatusRequest.id;
                    body = updateSecurityRuleEnableStatusRequest.body
                } else {
                    workspace = updateSecurityRuleEnableStatusRequest['workspace'];
                    id = updateSecurityRuleEnableStatusRequest['id'];
                    body = updateSecurityRuleEnableStatusRequest['body'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling updateSecurityRuleEnableStatus.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据指定的id修改密级
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateSecuritySecrecyLevel(updateSecuritySecrecyLevelRequest?: UpdateSecuritySecrecyLevelRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/security/data-classification/secrecy-level/{id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let workspace;
            
            let id;

            if (updateSecuritySecrecyLevelRequest !== null && updateSecuritySecrecyLevelRequest !== undefined) {
                if (updateSecuritySecrecyLevelRequest instanceof UpdateSecuritySecrecyLevelRequest) {
                    workspace = updateSecuritySecrecyLevelRequest.workspace;
                    id = updateSecuritySecrecyLevelRequest.id;
                    body = updateSecuritySecrecyLevelRequest.body
                } else {
                    workspace = updateSecuritySecrecyLevelRequest['workspace'];
                    id = updateSecuritySecrecyLevelRequest['id'];
                    body = updateSecuritySecrecyLevelRequest['body'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling updateSecuritySecrecyLevel.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改数据标准
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateStandard(updateStandardRequest?: UpdateStandardRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/design/standards/{id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let workspace;
            
            let id;

            if (updateStandardRequest !== null && updateStandardRequest !== undefined) {
                if (updateStandardRequest instanceof UpdateStandardRequest) {
                    workspace = updateStandardRequest.workspace;
                    id = updateStandardRequest.id;
                    body = updateStandardRequest.body
                } else {
                    workspace = updateStandardRequest['workspace'];
                    id = updateStandardRequest['id'];
                    body = updateStandardRequest['body'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling updateStandard.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改数据标准模板
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateStandardTemplate(updateStandardTemplateRequest?: UpdateStandardTemplateRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/design/standards/templates",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let workspace;

            if (updateStandardTemplateRequest !== null && updateStandardTemplateRequest !== undefined) {
                if (updateStandardTemplateRequest instanceof UpdateStandardTemplateRequest) {
                    workspace = updateStandardTemplateRequest.workspace;
                    body = updateStandardTemplateRequest.body
                } else {
                    workspace = updateStandardTemplateRequest['workspace'];
                    body = updateStandardTemplateRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改主题
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateSubject(updateSubjectRequest?: UpdateSubjectRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/design/subjects",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let workspace;

            if (updateSubjectRequest !== null && updateSubjectRequest !== undefined) {
                if (updateSubjectRequest instanceof UpdateSubjectRequest) {
                    workspace = updateSubjectRequest.workspace;
                    body = updateSubjectRequest.body
                } else {
                    workspace = updateSubjectRequest['workspace'];
                    body = updateSubjectRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改主题(新)
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateSubjectNew(updateSubjectNewRequest?: UpdateSubjectNewRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/design/subjects",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let workspace;

            if (updateSubjectNewRequest !== null && updateSubjectNewRequest !== undefined) {
                if (updateSubjectNewRequest instanceof UpdateSubjectNewRequest) {
                    workspace = updateSubjectNewRequest.workspace;
                    body = updateSubjectNewRequest.body
                } else {
                    workspace = updateSubjectNewRequest['workspace'];
                    body = updateSubjectNewRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新一个模型实体，包括逻辑实体或物理数据表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateTableModel(updateTableModelRequest?: UpdateTableModelRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/design/table-model",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let workspace;

            if (updateTableModelRequest !== null && updateTableModelRequest !== undefined) {
                if (updateTableModelRequest instanceof UpdateTableModelRequest) {
                    workspace = updateTableModelRequest.workspace;
                    body = updateTableModelRequest.body
                } else {
                    workspace = updateTableModelRequest['workspace'];
                    body = updateTableModelRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 编辑采集任务
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateTaskInfo(updateTaskInfoRequest?: UpdateTaskInfoRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/metadata/tasks/{task_id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let workspace;
            
            let taskId;

            if (updateTaskInfoRequest !== null && updateTaskInfoRequest !== undefined) {
                if (updateTaskInfoRequest instanceof UpdateTaskInfoRequest) {
                    workspace = updateTaskInfoRequest.workspace;
                    taskId = updateTaskInfoRequest.taskId;
                    body = updateTaskInfoRequest.body
                } else {
                    workspace = updateTaskInfoRequest['workspace'];
                    taskId = updateTaskInfoRequest['task_id'];
                    body = updateTaskInfoRequest['body'];
                }
            }

        
            if (taskId === null || taskId === undefined) {
            throw new RequiredError('taskId','Required parameter taskId was null or undefined when calling updateTaskInfo.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'task_id': taskId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新规则模板
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateTemplate(updateTemplateRequest?: UpdateTemplateRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/quality/rule-templates/{id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let id;
            
            let workspace;

            if (updateTemplateRequest !== null && updateTemplateRequest !== undefined) {
                if (updateTemplateRequest instanceof UpdateTemplateRequest) {
                    id = updateTemplateRequest.id;
                    workspace = updateTemplateRequest.workspace;
                    body = updateTemplateRequest.body
                } else {
                    id = updateTemplateRequest['id'];
                    workspace = updateTemplateRequest['workspace'];
                    body = updateTemplateRequest['body'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling updateTemplate.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 编辑工作空间用户或用户组
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateWorkSpaceUserOrGroup(updateWorkSpaceUserOrGroupRequest?: UpdateWorkSpaceUserOrGroupRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/{workspace_id}/users/{user_id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let workspaceId;
            
            let userId;

            if (updateWorkSpaceUserOrGroupRequest !== null && updateWorkSpaceUserOrGroupRequest !== undefined) {
                if (updateWorkSpaceUserOrGroupRequest instanceof UpdateWorkSpaceUserOrGroupRequest) {
                    workspaceId = updateWorkSpaceUserOrGroupRequest.workspaceId;
                    userId = updateWorkSpaceUserOrGroupRequest.userId;
                    body = updateWorkSpaceUserOrGroupRequest.body
                } else {
                    workspaceId = updateWorkSpaceUserOrGroupRequest['workspace_id'];
                    userId = updateWorkSpaceUserOrGroupRequest['user_id'];
                    body = updateWorkSpaceUserOrGroupRequest['body'];
                }
            }

        
            if (workspaceId === null || workspaceId === undefined) {
            throw new RequiredError('workspaceId','Required parameter workspaceId was null or undefined when calling updateWorkSpaceUserOrGroup.');
            }
            if (userId === null || userId === undefined) {
            throw new RequiredError('userId','Required parameter userId was null or undefined when calling updateWorkSpaceUserOrGroup.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'workspace_id': workspaceId,'user_id': userId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新模型工作区
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateWorkspace(updateWorkspaceRequest?: UpdateWorkspaceRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/design/workspaces",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let workspace;

            if (updateWorkspaceRequest !== null && updateWorkspaceRequest !== undefined) {
                if (updateWorkspaceRequest instanceof UpdateWorkspaceRequest) {
                    workspace = updateWorkspaceRequest.workspace;
                    body = updateWorkspaceRequest.body
                } else {
                    workspace = updateWorkspaceRequest['workspace'];
                    body = updateWorkspaceRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * API授权操作(授权/取消授权/申请/续约)
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        authorizeActionApiToInstance(authorizeActionApiToInstanceRequest?: AuthorizeActionApiToInstanceRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/service/apis/authorize/action",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let workspace;
            
            let contentType;
            
            let dlmType;

            if (authorizeActionApiToInstanceRequest !== null && authorizeActionApiToInstanceRequest !== undefined) {
                if (authorizeActionApiToInstanceRequest instanceof AuthorizeActionApiToInstanceRequest) {
                    workspace = authorizeActionApiToInstanceRequest.workspace;
                    contentType = authorizeActionApiToInstanceRequest.contentType;
                    body = authorizeActionApiToInstanceRequest.body
                    dlmType = authorizeActionApiToInstanceRequest.dlmType;
                } else {
                    workspace = authorizeActionApiToInstanceRequest['workspace'];
                    contentType = authorizeActionApiToInstanceRequest['Content-Type'];
                    body = authorizeActionApiToInstanceRequest['body'];
                    dlmType = authorizeActionApiToInstanceRequest['Dlm-Type'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }
            if (dlmType !== undefined && dlmType !== null) {
                localVarHeaderParameter['Dlm-Type'] = String(dlmType);
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 批量授权API
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        authorizeApiToInstance(authorizeApiToInstanceRequest?: AuthorizeApiToInstanceRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/service/apis/{api_id}/instances/{instance_id}/authorize",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let workspace;
            
            let contentType;
            
            let apiId;
            
            let instanceId;
            
            let dlmType;

            if (authorizeApiToInstanceRequest !== null && authorizeApiToInstanceRequest !== undefined) {
                if (authorizeApiToInstanceRequest instanceof AuthorizeApiToInstanceRequest) {
                    workspace = authorizeApiToInstanceRequest.workspace;
                    contentType = authorizeApiToInstanceRequest.contentType;
                    apiId = authorizeApiToInstanceRequest.apiId;
                    instanceId = authorizeApiToInstanceRequest.instanceId;
                    body = authorizeApiToInstanceRequest.body
                    dlmType = authorizeApiToInstanceRequest.dlmType;
                } else {
                    workspace = authorizeApiToInstanceRequest['workspace'];
                    contentType = authorizeApiToInstanceRequest['Content-Type'];
                    apiId = authorizeApiToInstanceRequest['api_id'];
                    instanceId = authorizeApiToInstanceRequest['instance_id'];
                    body = authorizeApiToInstanceRequest['body'];
                    dlmType = authorizeApiToInstanceRequest['Dlm-Type'];
                }
            }

        
            if (apiId === null || apiId === undefined) {
            throw new RequiredError('apiId','Required parameter apiId was null or undefined when calling authorizeApiToInstance.');
            }
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling authorizeApiToInstance.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }
            if (dlmType !== undefined && dlmType !== null) {
                localVarHeaderParameter['Dlm-Type'] = String(dlmType);
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'api_id': apiId,'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建API
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createApi(createApiRequest?: CreateApiRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/service/apis",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let workspace;
            
            let contentType;
            
            let dlmType;

            if (createApiRequest !== null && createApiRequest !== undefined) {
                if (createApiRequest instanceof CreateApiRequest) {
                    workspace = createApiRequest.workspace;
                    contentType = createApiRequest.contentType;
                    body = createApiRequest.body
                    dlmType = createApiRequest.dlmType;
                } else {
                    workspace = createApiRequest['workspace'];
                    contentType = createApiRequest['Content-Type'];
                    body = createApiRequest['body'];
                    dlmType = createApiRequest['Dlm-Type'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }
            if (dlmType !== undefined && dlmType !== null) {
                localVarHeaderParameter['Dlm-Type'] = String(dlmType);
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 调试API
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        debugApi(debugApiRequest?: DebugApiRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/service/apis/{api_id}/instances/{instance_id}/test",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let workspace;
            
            let contentType;
            
            let apiId;
            
            let instanceId;
            
            let dlmType;

            if (debugApiRequest !== null && debugApiRequest !== undefined) {
                if (debugApiRequest instanceof DebugApiRequest) {
                    workspace = debugApiRequest.workspace;
                    contentType = debugApiRequest.contentType;
                    apiId = debugApiRequest.apiId;
                    instanceId = debugApiRequest.instanceId;
                    body = debugApiRequest.body
                    dlmType = debugApiRequest.dlmType;
                } else {
                    workspace = debugApiRequest['workspace'];
                    contentType = debugApiRequest['Content-Type'];
                    apiId = debugApiRequest['api_id'];
                    instanceId = debugApiRequest['instance_id'];
                    body = debugApiRequest['body'];
                    dlmType = debugApiRequest['Dlm-Type'];
                }
            }

        
            if (apiId === null || apiId === undefined) {
            throw new RequiredError('apiId','Required parameter apiId was null or undefined when calling debugApi.');
            }
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling debugApi.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }
            if (dlmType !== undefined && dlmType !== null) {
                localVarHeaderParameter['Dlm-Type'] = String(dlmType);
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'api_id': apiId,'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 批量删除API
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteApi(deleteApiRequest?: DeleteApiRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/service/apis/batch-delete",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let contentType;
            
            let workspace;
            
            let dlmType;

            if (deleteApiRequest !== null && deleteApiRequest !== undefined) {
                if (deleteApiRequest instanceof DeleteApiRequest) {
                    contentType = deleteApiRequest.contentType;
                    body = deleteApiRequest.body
                    workspace = deleteApiRequest.workspace;
                    dlmType = deleteApiRequest.dlmType;
                } else {
                    contentType = deleteApiRequest['Content-Type'];
                    body = deleteApiRequest['body'];
                    workspace = deleteApiRequest['workspace'];
                    dlmType = deleteApiRequest['Dlm-Type'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }
            if (dlmType !== undefined && dlmType !== null) {
                localVarHeaderParameter['Dlm-Type'] = String(dlmType);
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * API操作(下线/停用/恢复)
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        executeApiToInstance(executeApiToInstanceRequest?: ExecuteApiToInstanceRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/service/apis/{api_id}/instances/{instance_id}/action",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let workspace;
            
            let contentType;
            
            let apiId;
            
            let instanceId;
            
            let dlmType;

            if (executeApiToInstanceRequest !== null && executeApiToInstanceRequest !== undefined) {
                if (executeApiToInstanceRequest instanceof ExecuteApiToInstanceRequest) {
                    workspace = executeApiToInstanceRequest.workspace;
                    contentType = executeApiToInstanceRequest.contentType;
                    apiId = executeApiToInstanceRequest.apiId;
                    instanceId = executeApiToInstanceRequest.instanceId;
                    body = executeApiToInstanceRequest.body
                    dlmType = executeApiToInstanceRequest.dlmType;
                } else {
                    workspace = executeApiToInstanceRequest['workspace'];
                    contentType = executeApiToInstanceRequest['Content-Type'];
                    apiId = executeApiToInstanceRequest['api_id'];
                    instanceId = executeApiToInstanceRequest['instance_id'];
                    body = executeApiToInstanceRequest['body'];
                    dlmType = executeApiToInstanceRequest['Dlm-Type'];
                }
            }

        
            if (apiId === null || apiId === undefined) {
            throw new RequiredError('apiId','Required parameter apiId was null or undefined when calling executeApiToInstance.');
            }
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling executeApiToInstance.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }
            if (dlmType !== undefined && dlmType !== null) {
                localVarHeaderParameter['Dlm-Type'] = String(dlmType);
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'api_id': apiId,'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询API列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listApis(listApisRequest?: ListApisRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/service/apis",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let workspace;
            
            let contentType;
            
            let dlmType;
            
            let xReturnPublishMessages;
            
            let offset;
            
            let limit;

            if (listApisRequest !== null && listApisRequest !== undefined) {
                if (listApisRequest instanceof ListApisRequest) {
                    workspace = listApisRequest.workspace;
                    contentType = listApisRequest.contentType;
                    dlmType = listApisRequest.dlmType;
                    xReturnPublishMessages = listApisRequest.xReturnPublishMessages;
                    offset = listApisRequest.offset;
                    limit = listApisRequest.limit;
                } else {
                    workspace = listApisRequest['workspace'];
                    contentType = listApisRequest['Content-Type'];
                    dlmType = listApisRequest['Dlm-Type'];
                    xReturnPublishMessages = listApisRequest['x-return-publish-messages'];
                    offset = listApisRequest['offset'];
                    limit = listApisRequest['limit'];
                }
            }

        
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }
            if (dlmType !== undefined && dlmType !== null) {
                localVarHeaderParameter['Dlm-Type'] = String(dlmType);
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            if (xReturnPublishMessages !== undefined && xReturnPublishMessages !== null) {
                localVarHeaderParameter['x-return-publish-messages'] = String(xReturnPublishMessages);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查看API不同操作对应的实例信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listInstanceList(listInstanceListRequest?: ListInstanceListRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/service/apis/{api_id}/instances",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let workspace;
            
            let contentType;
            
            let apiId;
            
            let action;
            
            let dlmType;
            
            let showAll;
            
            let checkStatus;
            
            let checkDebug;
            
            let appId;
            
            let limit;
            
            let offset;

            if (listInstanceListRequest !== null && listInstanceListRequest !== undefined) {
                if (listInstanceListRequest instanceof ListInstanceListRequest) {
                    workspace = listInstanceListRequest.workspace;
                    contentType = listInstanceListRequest.contentType;
                    apiId = listInstanceListRequest.apiId;
                    action = listInstanceListRequest.action;
                    dlmType = listInstanceListRequest.dlmType;
                    showAll = listInstanceListRequest.showAll;
                    checkStatus = listInstanceListRequest.checkStatus;
                    checkDebug = listInstanceListRequest.checkDebug;
                    appId = listInstanceListRequest.appId;
                    limit = listInstanceListRequest.limit;
                    offset = listInstanceListRequest.offset;
                } else {
                    workspace = listInstanceListRequest['workspace'];
                    contentType = listInstanceListRequest['Content-Type'];
                    apiId = listInstanceListRequest['api_id'];
                    action = listInstanceListRequest['action'];
                    dlmType = listInstanceListRequest['Dlm-Type'];
                    showAll = listInstanceListRequest['show_all'];
                    checkStatus = listInstanceListRequest['check_status'];
                    checkDebug = listInstanceListRequest['check_debug'];
                    appId = listInstanceListRequest['app_id'];
                    limit = listInstanceListRequest['limit'];
                    offset = listInstanceListRequest['offset'];
                }
            }

        
            if (apiId === null || apiId === undefined) {
            throw new RequiredError('apiId','Required parameter apiId was null or undefined when calling listInstanceList.');
            }
            if (action === null || action === undefined) {
                throw new RequiredError('action','Required parameter action was null or undefined when calling listInstanceList.');
            }
            if (action !== null && action !== undefined) {
                localVarQueryParameter['action'] = action;
            }
            if (showAll !== null && showAll !== undefined) {
                localVarQueryParameter['show_all'] = showAll;
            }
            if (checkStatus !== null && checkStatus !== undefined) {
                localVarQueryParameter['check_status'] = checkStatus;
            }
            if (checkDebug !== null && checkDebug !== undefined) {
                localVarQueryParameter['check_debug'] = checkDebug;
            }
            if (appId !== null && appId !== undefined) {
                localVarQueryParameter['app_id'] = appId;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }
            if (dlmType !== undefined && dlmType !== null) {
                localVarHeaderParameter['Dlm-Type'] = String(dlmType);
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'api_id': apiId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 发布/下线/停用/恢复API
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        publishApi(publishApiRequest?: PublishApiRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/service/apis/publish",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let workspace;
            
            let contentType;
            
            let dlmType;

            if (publishApiRequest !== null && publishApiRequest !== undefined) {
                if (publishApiRequest instanceof PublishApiRequest) {
                    workspace = publishApiRequest.workspace;
                    contentType = publishApiRequest.contentType;
                    body = publishApiRequest.body
                    dlmType = publishApiRequest.dlmType;
                } else {
                    workspace = publishApiRequest['workspace'];
                    contentType = publishApiRequest['Content-Type'];
                    body = publishApiRequest['body'];
                    dlmType = publishApiRequest['Dlm-Type'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }
            if (dlmType !== undefined && dlmType !== null) {
                localVarHeaderParameter['Dlm-Type'] = String(dlmType);
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 发布API
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        publishApiToInstance(publishApiToInstanceRequest?: PublishApiToInstanceRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/service/apis/{api_id}/instances/{instance_id}/publish",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let workspace;
            
            let contentType;
            
            let apiId;
            
            let instanceId;
            
            let dlmType;

            if (publishApiToInstanceRequest !== null && publishApiToInstanceRequest !== undefined) {
                if (publishApiToInstanceRequest instanceof PublishApiToInstanceRequest) {
                    workspace = publishApiToInstanceRequest.workspace;
                    contentType = publishApiToInstanceRequest.contentType;
                    apiId = publishApiToInstanceRequest.apiId;
                    instanceId = publishApiToInstanceRequest.instanceId;
                    body = publishApiToInstanceRequest.body
                    dlmType = publishApiToInstanceRequest.dlmType;
                } else {
                    workspace = publishApiToInstanceRequest['workspace'];
                    contentType = publishApiToInstanceRequest['Content-Type'];
                    apiId = publishApiToInstanceRequest['api_id'];
                    instanceId = publishApiToInstanceRequest['instance_id'];
                    body = publishApiToInstanceRequest['body'];
                    dlmType = publishApiToInstanceRequest['Dlm-Type'];
                }
            }

        
            if (apiId === null || apiId === undefined) {
            throw new RequiredError('apiId','Required parameter apiId was null or undefined when calling publishApiToInstance.');
            }
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling publishApiToInstance.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }
            if (dlmType !== undefined && dlmType !== null) {
                localVarHeaderParameter['Dlm-Type'] = String(dlmType);
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'api_id': apiId,'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查看API调试信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        searchDebugInfo(searchDebugInfoRequest?: SearchDebugInfoRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/service/apis/{api_id}/debug-info",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let workspace;
            
            let contentType;
            
            let apiId;
            
            let dlmType;
            
            let limit;
            
            let offset;

            if (searchDebugInfoRequest !== null && searchDebugInfoRequest !== undefined) {
                if (searchDebugInfoRequest instanceof SearchDebugInfoRequest) {
                    workspace = searchDebugInfoRequest.workspace;
                    contentType = searchDebugInfoRequest.contentType;
                    apiId = searchDebugInfoRequest.apiId;
                    dlmType = searchDebugInfoRequest.dlmType;
                    limit = searchDebugInfoRequest.limit;
                    offset = searchDebugInfoRequest.offset;
                } else {
                    workspace = searchDebugInfoRequest['workspace'];
                    contentType = searchDebugInfoRequest['Content-Type'];
                    apiId = searchDebugInfoRequest['api_id'];
                    dlmType = searchDebugInfoRequest['Dlm-Type'];
                    limit = searchDebugInfoRequest['limit'];
                    offset = searchDebugInfoRequest['offset'];
                }
            }

        
            if (apiId === null || apiId === undefined) {
            throw new RequiredError('apiId','Required parameter apiId was null or undefined when calling searchDebugInfo.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }
            if (dlmType !== undefined && dlmType !== null) {
                localVarHeaderParameter['Dlm-Type'] = String(dlmType);
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'api_id': apiId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查看API发布信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        searchPublishInfo(searchPublishInfoRequest?: SearchPublishInfoRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/service/apis/{api_id}/publish-info",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let workspace;
            
            let contentType;
            
            let apiId;
            
            let dlmType;
            
            let limit;
            
            let offset;

            if (searchPublishInfoRequest !== null && searchPublishInfoRequest !== undefined) {
                if (searchPublishInfoRequest instanceof SearchPublishInfoRequest) {
                    workspace = searchPublishInfoRequest.workspace;
                    contentType = searchPublishInfoRequest.contentType;
                    apiId = searchPublishInfoRequest.apiId;
                    dlmType = searchPublishInfoRequest.dlmType;
                    limit = searchPublishInfoRequest.limit;
                    offset = searchPublishInfoRequest.offset;
                } else {
                    workspace = searchPublishInfoRequest['workspace'];
                    contentType = searchPublishInfoRequest['Content-Type'];
                    apiId = searchPublishInfoRequest['api_id'];
                    dlmType = searchPublishInfoRequest['Dlm-Type'];
                    limit = searchPublishInfoRequest['limit'];
                    offset = searchPublishInfoRequest['offset'];
                }
            }

        
            if (apiId === null || apiId === undefined) {
            throw new RequiredError('apiId','Required parameter apiId was null or undefined when calling searchPublishInfo.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }
            if (dlmType !== undefined && dlmType !== null) {
                localVarHeaderParameter['Dlm-Type'] = String(dlmType);
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'api_id': apiId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询API信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showApi(showApiRequest?: ShowApiRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/service/apis/{api_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let workspace;
            
            let contentType;
            
            let apiId;
            
            let dlmType;

            if (showApiRequest !== null && showApiRequest !== undefined) {
                if (showApiRequest instanceof ShowApiRequest) {
                    workspace = showApiRequest.workspace;
                    contentType = showApiRequest.contentType;
                    apiId = showApiRequest.apiId;
                    dlmType = showApiRequest.dlmType;
                } else {
                    workspace = showApiRequest['workspace'];
                    contentType = showApiRequest['Content-Type'];
                    apiId = showApiRequest['api_id'];
                    dlmType = showApiRequest['Dlm-Type'];
                }
            }

        
            if (apiId === null || apiId === undefined) {
            throw new RequiredError('apiId','Required parameter apiId was null or undefined when calling showApi.');
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }
            if (dlmType !== undefined && dlmType !== null) {
                localVarHeaderParameter['Dlm-Type'] = String(dlmType);
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.pathParams = { 'api_id': apiId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新API
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateApi(updateApiRequest?: UpdateApiRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/service/apis/{api_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let workspace;
            
            let contentType;
            
            let apiId;
            
            let dlmType;

            if (updateApiRequest !== null && updateApiRequest !== undefined) {
                if (updateApiRequest instanceof UpdateApiRequest) {
                    workspace = updateApiRequest.workspace;
                    contentType = updateApiRequest.contentType;
                    apiId = updateApiRequest.apiId;
                    body = updateApiRequest.body
                    dlmType = updateApiRequest.dlmType;
                } else {
                    workspace = updateApiRequest['workspace'];
                    contentType = updateApiRequest['Content-Type'];
                    apiId = updateApiRequest['api_id'];
                    body = updateApiRequest['body'];
                    dlmType = updateApiRequest['Dlm-Type'];
                }
            }

        
            if (apiId === null || apiId === undefined) {
            throw new RequiredError('apiId','Required parameter apiId was null or undefined when calling updateApi.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (workspace !== undefined && workspace !== null) {
                localVarHeaderParameter['workspace'] = String(workspace);
            }
            if (dlmType !== undefined && dlmType !== null) {
                localVarHeaderParameter['Dlm-Type'] = String(dlmType);
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'api_id': apiId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
    }
};

function newClient(client: HcClient): DataArtsStudioClient {
    return new DataArtsStudioClient(client);
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