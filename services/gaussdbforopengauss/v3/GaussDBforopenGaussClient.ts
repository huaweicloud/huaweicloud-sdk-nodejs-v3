import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { AddInstanceTagsRequest } from './model/AddInstanceTagsRequest';
import { AddInstanceTagsResponse } from './model/AddInstanceTagsResponse';
import { AddTagsRequestBody } from './model/AddTagsRequestBody';
import { AllowDbPrivilegesRequest } from './model/AllowDbPrivilegesRequest';
import { AllowDbPrivilegesResponse } from './model/AllowDbPrivilegesResponse';
import { AllowDbRolePrivilegesRequest } from './model/AllowDbRolePrivilegesRequest';
import { AllowDbRolePrivilegesRequestBody } from './model/AllowDbRolePrivilegesRequestBody';
import { AllowDbRolePrivilegesResponse } from './model/AllowDbRolePrivilegesResponse';
import { AppliedHistoriesResult } from './model/AppliedHistoriesResult';
import { ApplyConfigurationRequestBody } from './model/ApplyConfigurationRequestBody';
import { AttachEipRequest } from './model/AttachEipRequest';
import { AttachEipResponse } from './model/AttachEipResponse';
import { AvailableFlavorInfoResult } from './model/AvailableFlavorInfoResult';
import { BackupInfo } from './model/BackupInfo';
import { BackupPolicy } from './model/BackupPolicy';
import { BackupPolicyErrorResponse } from './model/BackupPolicyErrorResponse';
import { BackupPolicyInfo } from './model/BackupPolicyInfo';
import { Backups } from './model/Backups';
import { BackupsResult } from './model/BackupsResult';
import { BatchShowUpgradeCandidateVersionsRequest } from './model/BatchShowUpgradeCandidateVersionsRequest';
import { BatchShowUpgradeCandidateVersionsResponse } from './model/BatchShowUpgradeCandidateVersionsResponse';
import { BindEIPRequestBody } from './model/BindEIPRequestBody';
import { BindedEipResult } from './model/BindedEipResult';
import { CanBeRollbackedHotfixDetail } from './model/CanBeRollbackedHotfixDetail';
import { CanBeUpgradedHotfixDetail } from './model/CanBeUpgradedHotfixDetail';
import { CancelScheduleTaskRequest } from './model/CancelScheduleTaskRequest';
import { CancelScheduleTaskResponse } from './model/CancelScheduleTaskResponse';
import { CnInfoBeforeReduce } from './model/CnInfoBeforeReduce';
import { Components } from './model/Components';
import { ConfigurationParameter } from './model/ConfigurationParameter';
import { ConfigurationResult } from './model/ConfigurationResult';
import { ConfigurationSummary } from './model/ConfigurationSummary';
import { ConfigurationsResult } from './model/ConfigurationsResult';
import { ConfirmRestoredDataRequest } from './model/ConfirmRestoredDataRequest';
import { ConfirmRestoredDataResponse } from './model/ConfirmRestoredDataResponse';
import { ConstructReq } from './model/ConstructReq';
import { CopyConfigurationRequest } from './model/CopyConfigurationRequest';
import { CopyConfigurationResponse } from './model/CopyConfigurationResponse';
import { CreateConfigurationTemplateRequest } from './model/CreateConfigurationTemplateRequest';
import { CreateConfigurationTemplateRequestBody } from './model/CreateConfigurationTemplateRequestBody';
import { CreateConfigurationTemplateResponse } from './model/CreateConfigurationTemplateResponse';
import { CreateCrossCloudConstructDisasterRequest } from './model/CreateCrossCloudConstructDisasterRequest';
import { CreateCrossCloudConstructDisasterResponse } from './model/CreateCrossCloudConstructDisasterResponse';
import { CreateDatabaseInstanceRequest } from './model/CreateDatabaseInstanceRequest';
import { CreateDatabaseInstanceRequestBody } from './model/CreateDatabaseInstanceRequestBody';
import { CreateDatabaseInstanceResponse } from './model/CreateDatabaseInstanceResponse';
import { CreateDatabaseInstanceResult } from './model/CreateDatabaseInstanceResult';
import { CreateDatabaseRequest } from './model/CreateDatabaseRequest';
import { CreateDatabaseResponse } from './model/CreateDatabaseResponse';
import { CreateDatabaseSchemasRequest } from './model/CreateDatabaseSchemasRequest';
import { CreateDatabaseSchemasResponse } from './model/CreateDatabaseSchemasResponse';
import { CreateDbInstanceRequest } from './model/CreateDbInstanceRequest';
import { CreateDbInstanceResponse } from './model/CreateDbInstanceResponse';
import { CreateDbRoleRequest } from './model/CreateDbRoleRequest';
import { CreateDbRoleRequestBody } from './model/CreateDbRoleRequestBody';
import { CreateDbRoleResponse } from './model/CreateDbRoleResponse';
import { CreateDbUserRequest } from './model/CreateDbUserRequest';
import { CreateDbUserResponse } from './model/CreateDbUserResponse';
import { CreateGaussDbInstanceRequest } from './model/CreateGaussDbInstanceRequest';
import { CreateGaussDbInstanceResponse } from './model/CreateGaussDbInstanceResponse';
import { CreateInstanceDatastoreOption } from './model/CreateInstanceDatastoreOption';
import { CreateInstanceRequest } from './model/CreateInstanceRequest';
import { CreateInstanceRespItem } from './model/CreateInstanceRespItem';
import { CreateInstanceResponse } from './model/CreateInstanceResponse';
import { CreateLimitTaskNodeOption } from './model/CreateLimitTaskNodeOption';
import { CreateLimitTaskNodeResult } from './model/CreateLimitTaskNodeResult';
import { CreateLimitTaskRequest } from './model/CreateLimitTaskRequest';
import { CreateLimitTaskRequestBody } from './model/CreateLimitTaskRequestBody';
import { CreateLimitTaskResponse } from './model/CreateLimitTaskResponse';
import { CreateManualBackupRequest } from './model/CreateManualBackupRequest';
import { CreateManualBackupRequestBody } from './model/CreateManualBackupRequestBody';
import { CreateManualBackupResponse } from './model/CreateManualBackupResponse';
import { CreateRestoreInstanceRequest } from './model/CreateRestoreInstanceRequest';
import { CreateRestoreInstanceResponse } from './model/CreateRestoreInstanceResponse';
import { CreateScheduleTaskRequest } from './model/CreateScheduleTaskRequest';
import { CreateScheduleTaskRequestBody } from './model/CreateScheduleTaskRequestBody';
import { CreateScheduleTaskResponse } from './model/CreateScheduleTaskResponse';
import { CreateSlowLogDownloadRequest } from './model/CreateSlowLogDownloadRequest';
import { CreateSlowLogDownloadResponse } from './model/CreateSlowLogDownloadResponse';
import { DataStroeErrorResponse } from './model/DataStroeErrorResponse';
import { DatastoreOption } from './model/DatastoreOption';
import { DatastoreResult } from './model/DatastoreResult';
import { DatastoresResult } from './model/DatastoresResult';
import { DbUserPwdRequest } from './model/DbUserPwdRequest';
import { DeleteBackupErrorResponse } from './model/DeleteBackupErrorResponse';
import { DeleteConfigurationRequest } from './model/DeleteConfigurationRequest';
import { DeleteConfigurationResponse } from './model/DeleteConfigurationResponse';
import { DeleteDatabaseRequest } from './model/DeleteDatabaseRequest';
import { DeleteDatabaseResponse } from './model/DeleteDatabaseResponse';
import { DeleteDatabaseSchemaRequest } from './model/DeleteDatabaseSchemaRequest';
import { DeleteDatabaseSchemaRequestBody } from './model/DeleteDatabaseSchemaRequestBody';
import { DeleteDatabaseSchemaResponse } from './model/DeleteDatabaseSchemaResponse';
import { DeleteInstanceRequest } from './model/DeleteInstanceRequest';
import { DeleteInstanceResponse } from './model/DeleteInstanceResponse';
import { DeleteInstanceTagRequest } from './model/DeleteInstanceTagRequest';
import { DeleteInstanceTagResponse } from './model/DeleteInstanceTagResponse';
import { DeleteJobRequest } from './model/DeleteJobRequest';
import { DeleteJobResponse } from './model/DeleteJobResponse';
import { DeleteLimitTaskRequest } from './model/DeleteLimitTaskRequest';
import { DeleteLimitTaskResponse } from './model/DeleteLimitTaskResponse';
import { DeleteManualBackupRequest } from './model/DeleteManualBackupRequest';
import { DeleteManualBackupResponse } from './model/DeleteManualBackupResponse';
import { DeleteScheduleTaskRequest } from './model/DeleteScheduleTaskRequest';
import { DeleteScheduleTaskResponse } from './model/DeleteScheduleTaskResponse';
import { DisasterFailoverReqBody } from './model/DisasterFailoverReqBody';
import { DisasterRecoverStartSimulationRequestBody } from './model/DisasterRecoverStartSimulationRequestBody';
import { DisasterRecoverStartXlogKeepRequestBody } from './model/DisasterRecoverStartXlogKeepRequestBody';
import { DisasterRecoverStopSimulationRequestBody } from './model/DisasterRecoverStopSimulationRequestBody';
import { DisasterRecoverStopXlogKeepRequestBody } from './model/DisasterRecoverStopXlogKeepRequestBody';
import { DisasterRelations } from './model/DisasterRelations';
import { DownloadBackupErrorResponse } from './model/DownloadBackupErrorResponse';
import { DownloadBackupRequest } from './model/DownloadBackupRequest';
import { DownloadBackupResponse } from './model/DownloadBackupResponse';
import { DownloadObject } from './model/DownloadObject';
import { EpsQuotasOption } from './model/EpsQuotasOption';
import { ErrorResponse } from './model/ErrorResponse';
import { ExecuteCrossCloudDisasterDataCacheEndRequest } from './model/ExecuteCrossCloudDisasterDataCacheEndRequest';
import { ExecuteCrossCloudDisasterDataCacheEndResponse } from './model/ExecuteCrossCloudDisasterDataCacheEndResponse';
import { ExecuteCrossCloudDisasterDataCacheStartRequest } from './model/ExecuteCrossCloudDisasterDataCacheStartRequest';
import { ExecuteCrossCloudDisasterDataCacheStartResponse } from './model/ExecuteCrossCloudDisasterDataCacheStartResponse';
import { ExecuteCrossCloudDisasterEndSimulationRequest } from './model/ExecuteCrossCloudDisasterEndSimulationRequest';
import { ExecuteCrossCloudDisasterEndSimulationResponse } from './model/ExecuteCrossCloudDisasterEndSimulationResponse';
import { ExecuteCrossCloudDisasterRecoveryFailoverRequest } from './model/ExecuteCrossCloudDisasterRecoveryFailoverRequest';
import { ExecuteCrossCloudDisasterRecoveryFailoverResponse } from './model/ExecuteCrossCloudDisasterRecoveryFailoverResponse';
import { ExecuteCrossCloudDisasterRestoreRequest } from './model/ExecuteCrossCloudDisasterRestoreRequest';
import { ExecuteCrossCloudDisasterRestoreResponse } from './model/ExecuteCrossCloudDisasterRestoreResponse';
import { ExecuteCrossCloudDisasterStartSimulationRequest } from './model/ExecuteCrossCloudDisasterStartSimulationRequest';
import { ExecuteCrossCloudDisasterStartSimulationResponse } from './model/ExecuteCrossCloudDisasterStartSimulationResponse';
import { ExecuteCrossCloudDisasterSwitchoverRequest } from './model/ExecuteCrossCloudDisasterSwitchoverRequest';
import { ExecuteCrossCloudDisasterSwitchoverResponse } from './model/ExecuteCrossCloudDisasterSwitchoverResponse';
import { ExecuteCrossCloudReleaseDisasterRequest } from './model/ExecuteCrossCloudReleaseDisasterRequest';
import { ExecuteCrossCloudReleaseDisasterResponse } from './model/ExecuteCrossCloudReleaseDisasterResponse';
import { FeatureResult } from './model/FeatureResult';
import { Flavor } from './model/Flavor';
import { FlavorErrorResponse } from './model/FlavorErrorResponse';
import { FlavorResult } from './model/FlavorResult';
import { GaussDBErrorResponseBody } from './model/GaussDBErrorResponseBody';
import { GaussDBListDatabaseRoles } from './model/GaussDBListDatabaseRoles';
import { GaussDBListDatabaseRolesPriv } from './model/GaussDBListDatabaseRolesPriv';
import { GaussDBUpgradeInstancesVersionRequest } from './model/GaussDBUpgradeInstancesVersionRequest';
import { GaussDBforOpenDatabaseForCreation } from './model/GaussDBforOpenDatabaseForCreation';
import { GaussDBforOpenGaussCreateSchemaReq } from './model/GaussDBforOpenGaussCreateSchemaReq';
import { GaussDBforOpenGaussDatabaseForListSchema } from './model/GaussDBforOpenGaussDatabaseForListSchema';
import { GaussDBforOpenGaussDatabaseSchemaReq } from './model/GaussDBforOpenGaussDatabaseSchemaReq';
import { GaussDBforOpenGaussGrantRequest } from './model/GaussDBforOpenGaussGrantRequest';
import { GaussDBforOpenGaussListDatabase } from './model/GaussDBforOpenGaussListDatabase';
import { GaussDBforOpenGaussRoleAttributes } from './model/GaussDBforOpenGaussRoleAttributes';
import { GaussDBforOpenGaussUserForCreation } from './model/GaussDBforOpenGaussUserForCreation';
import { GaussDBforOpenGaussUserForList } from './model/GaussDBforOpenGaussUserForList';
import { GaussDBforOpenGaussUserForListAttribute } from './model/GaussDBforOpenGaussUserForListAttribute';
import { GaussDBforOpenGaussUserWithPrivilege } from './model/GaussDBforOpenGaussUserWithPrivilege';
import { GetRestoreTimeResponseRestoreTime } from './model/GetRestoreTimeResponseRestoreTime';
import { HotfixInfo } from './model/HotfixInfo';
import { HotfixInfoResult } from './model/HotfixInfoResult';
import { HotfixRollbackInfos } from './model/HotfixRollbackInfos';
import { HotfixUpgradeInfos } from './model/HotfixUpgradeInfos';
import { HotfixVersionInfo } from './model/HotfixVersionInfo';
import { InstallKernelPluginRequest } from './model/InstallKernelPluginRequest';
import { InstallKernelPluginRequestBody } from './model/InstallKernelPluginRequestBody';
import { InstallKernelPluginResponse } from './model/InstallKernelPluginResponse';
import { InstanceDetail } from './model/InstanceDetail';
import { InstanceEngineDetail } from './model/InstanceEngineDetail';
import { InstanceInfoResult } from './model/InstanceInfoResult';
import { InstanceLogFile } from './model/InstanceLogFile';
import { InstanceTaskDetail } from './model/InstanceTaskDetail';
import { InstancesListResult } from './model/InstancesListResult';
import { InstancesResult } from './model/InstancesResult';
import { JobDetail } from './model/JobDetail';
import { JobInstanceInfo } from './model/JobInstanceInfo';
import { LimitTaskRuleInfoOption } from './model/LimitTaskRuleInfoOption';
import { ListApplicableInstancesRequest } from './model/ListApplicableInstancesRequest';
import { ListApplicableInstancesResponse } from './model/ListApplicableInstancesResponse';
import { ListAppliedHistoriesRequest } from './model/ListAppliedHistoriesRequest';
import { ListAppliedHistoriesResponse } from './model/ListAppliedHistoriesResponse';
import { ListAvailableFlavorsRequest } from './model/ListAvailableFlavorsRequest';
import { ListAvailableFlavorsResponse } from './model/ListAvailableFlavorsResponse';
import { ListBackupsDetailsRequest } from './model/ListBackupsDetailsRequest';
import { ListBackupsDetailsResponse } from './model/ListBackupsDetailsResponse';
import { ListBackupsRequest } from './model/ListBackupsRequest';
import { ListBackupsResponse } from './model/ListBackupsResponse';
import { ListBackupsResult } from './model/ListBackupsResult';
import { ListBindedEipsRequest } from './model/ListBindedEipsRequest';
import { ListBindedEipsResponse } from './model/ListBindedEipsResponse';
import { ListCnInfosBeforeReduceRequest } from './model/ListCnInfosBeforeReduceRequest';
import { ListCnInfosBeforeReduceResponse } from './model/ListCnInfosBeforeReduceResponse';
import { ListComponentInfosRequest } from './model/ListComponentInfosRequest';
import { ListComponentInfosResponse } from './model/ListComponentInfosResponse';
import { ListConfigurationsDiffRequest } from './model/ListConfigurationsDiffRequest';
import { ListConfigurationsDiffResponse } from './model/ListConfigurationsDiffResponse';
import { ListConfigurationsRequest } from './model/ListConfigurationsRequest';
import { ListConfigurationsResponse } from './model/ListConfigurationsResponse';
import { ListDatabaseInstancesRequest } from './model/ListDatabaseInstancesRequest';
import { ListDatabaseInstancesResponse } from './model/ListDatabaseInstancesResponse';
import { ListDatabaseRolesRequest } from './model/ListDatabaseRolesRequest';
import { ListDatabaseRolesResponse } from './model/ListDatabaseRolesResponse';
import { ListDatabaseSchemasRequest } from './model/ListDatabaseSchemasRequest';
import { ListDatabaseSchemasResponse } from './model/ListDatabaseSchemasResponse';
import { ListDatabasesRequest } from './model/ListDatabasesRequest';
import { ListDatabasesResponse } from './model/ListDatabasesResponse';
import { ListDatastore } from './model/ListDatastore';
import { ListDatastoresDetailsRequest } from './model/ListDatastoresDetailsRequest';
import { ListDatastoresDetailsResponse } from './model/ListDatastoresDetailsResponse';
import { ListDatastoresRequest } from './model/ListDatastoresRequest';
import { ListDatastoresResponse } from './model/ListDatastoresResponse';
import { ListDbBackupsRequest } from './model/ListDbBackupsRequest';
import { ListDbBackupsResponse } from './model/ListDbBackupsResponse';
import { ListDbFlavorsRequest } from './model/ListDbFlavorsRequest';
import { ListDbFlavorsResponse } from './model/ListDbFlavorsResponse';
import { ListDbUsersRequest } from './model/ListDbUsersRequest';
import { ListDbUsersResponse } from './model/ListDbUsersResponse';
import { ListDiffDetailsResult } from './model/ListDiffDetailsResult';
import { ListDisasterRecoveryRecordRequest } from './model/ListDisasterRecoveryRecordRequest';
import { ListDisasterRecoveryRecordResponse } from './model/ListDisasterRecoveryRecordResponse';
import { ListEpsQuotasRequest } from './model/ListEpsQuotasRequest';
import { ListEpsQuotasResponse } from './model/ListEpsQuotasResponse';
import { ListFeaturesRequest } from './model/ListFeaturesRequest';
import { ListFeaturesResponse } from './model/ListFeaturesResponse';
import { ListFlavorInfo } from './model/ListFlavorInfo';
import { ListFlavorsDetailsRequest } from './model/ListFlavorsDetailsRequest';
import { ListFlavorsDetailsResponse } from './model/ListFlavorsDetailsResponse';
import { ListFlavorsRequest } from './model/ListFlavorsRequest';
import { ListFlavorsResponse } from './model/ListFlavorsResponse';
import { ListGaussDbDatastoresRequest } from './model/ListGaussDbDatastoresRequest';
import { ListGaussDbDatastoresResponse } from './model/ListGaussDbDatastoresResponse';
import { ListHa } from './model/ListHa';
import { ListHaResult } from './model/ListHaResult';
import { ListHistoryOperationsRequest } from './model/ListHistoryOperationsRequest';
import { ListHistoryOperationsResponse } from './model/ListHistoryOperationsResponse';
import { ListHistoryOperationsResult } from './model/ListHistoryOperationsResult';
import { ListInstanceDatastore } from './model/ListInstanceDatastore';
import { ListInstanceDetailsRequest } from './model/ListInstanceDetailsRequest';
import { ListInstanceDetailsResponse } from './model/ListInstanceDetailsResponse';
import { ListInstanceEngineDetailRequest } from './model/ListInstanceEngineDetailRequest';
import { ListInstanceEngineDetailResponse } from './model/ListInstanceEngineDetailResponse';
import { ListInstanceErrorLogsRequest } from './model/ListInstanceErrorLogsRequest';
import { ListInstanceErrorLogsResponse } from './model/ListInstanceErrorLogsResponse';
import { ListInstanceResponse } from './model/ListInstanceResponse';
import { ListInstanceResult } from './model/ListInstanceResult';
import { ListInstanceTagsRequest } from './model/ListInstanceTagsRequest';
import { ListInstanceTagsResponse } from './model/ListInstanceTagsResponse';
import { ListInstancesDetailsRequest } from './model/ListInstancesDetailsRequest';
import { ListInstancesDetailsResponse } from './model/ListInstancesDetailsResponse';
import { ListInstancesRequest } from './model/ListInstancesRequest';
import { ListInstancesResponse } from './model/ListInstancesResponse';
import { ListInstancesResult } from './model/ListInstancesResult';
import { ListKernelPluginsRequest } from './model/ListKernelPluginsRequest';
import { ListKernelPluginsResponse } from './model/ListKernelPluginsResponse';
import { ListLimitTaskRequest } from './model/ListLimitTaskRequest';
import { ListLimitTaskResponse } from './model/ListLimitTaskResponse';
import { ListLimitTaskResponseResult } from './model/ListLimitTaskResponseResult';
import { ListNodeLimitSqlModelRequest } from './model/ListNodeLimitSqlModelRequest';
import { ListNodeLimitSqlModelResponse } from './model/ListNodeLimitSqlModelResponse';
import { ListNodeLimitSqlModelResponseResult } from './model/ListNodeLimitSqlModelResponseResult';
import { ListParamGroupTemplatesRequest } from './model/ListParamGroupTemplatesRequest';
import { ListParamGroupTemplatesResponse } from './model/ListParamGroupTemplatesResponse';
import { ListParameterGroupTemplatesRequest } from './model/ListParameterGroupTemplatesRequest';
import { ListParameterGroupTemplatesResponse } from './model/ListParameterGroupTemplatesResponse';
import { ListPluginExtensionsRequest } from './model/ListPluginExtensionsRequest';
import { ListPluginExtensionsRequestBody } from './model/ListPluginExtensionsRequestBody';
import { ListPluginExtensionsResponse } from './model/ListPluginExtensionsResponse';
import { ListPredefinedTagsRequest } from './model/ListPredefinedTagsRequest';
import { ListPredefinedTagsResponse } from './model/ListPredefinedTagsResponse';
import { ListProjectTagsRequest } from './model/ListProjectTagsRequest';
import { ListProjectTagsResponse } from './model/ListProjectTagsResponse';
import { ListQuotaResult } from './model/ListQuotaResult';
import { ListRecycleInstancesDetailsRequest } from './model/ListRecycleInstancesDetailsRequest';
import { ListRecycleInstancesDetailsResponse } from './model/ListRecycleInstancesDetailsResponse';
import { ListRecycleInstancesRequest } from './model/ListRecycleInstancesRequest';
import { ListRecycleInstancesResponse } from './model/ListRecycleInstancesResponse';
import { ListRestorableInstancesDetailsRequest } from './model/ListRestorableInstancesDetailsRequest';
import { ListRestorableInstancesDetailsResponse } from './model/ListRestorableInstancesDetailsResponse';
import { ListRestorableInstancesRequest } from './model/ListRestorableInstancesRequest';
import { ListRestorableInstancesResponse } from './model/ListRestorableInstancesResponse';
import { ListRestoreTimesRequest } from './model/ListRestoreTimesRequest';
import { ListRestoreTimesResponse } from './model/ListRestoreTimesResponse';
import { ListScheduleTaskRequest } from './model/ListScheduleTaskRequest';
import { ListScheduleTaskResponse } from './model/ListScheduleTaskResponse';
import { ListStorageTypesRequest } from './model/ListStorageTypesRequest';
import { ListStorageTypesResponse } from './model/ListStorageTypesResponse';
import { ListSupportKernelPluginsRequest } from './model/ListSupportKernelPluginsRequest';
import { ListSupportKernelPluginsResponse } from './model/ListSupportKernelPluginsResponse';
import { ListTasksRequest } from './model/ListTasksRequest';
import { ListTasksResponse } from './model/ListTasksResponse';
import { ListVolume } from './model/ListVolume';
import { ModifyEpsQuotaRequest } from './model/ModifyEpsQuotaRequest';
import { ModifyEpsQuotaRequestBody } from './model/ModifyEpsQuotaRequestBody';
import { ModifyEpsQuotaResponse } from './model/ModifyEpsQuotaResponse';
import { MySQLCompatibilityResult } from './model/MySQLCompatibilityResult';
import { NodeResult } from './model/NodeResult';
import { Nodes } from './model/Nodes';
import { OpenGaussBackupStrategy } from './model/OpenGaussBackupStrategy';
import { OpenGaussBackupStrategyForListResponse } from './model/OpenGaussBackupStrategyForListResponse';
import { OpenGaussBackupStrategyForResponse } from './model/OpenGaussBackupStrategyForResponse';
import { OpenGaussChargeInfo } from './model/OpenGaussChargeInfo';
import { OpenGaussChargeInfoListResponse } from './model/OpenGaussChargeInfoListResponse';
import { OpenGaussChargeInfoResponse } from './model/OpenGaussChargeInfoResponse';
import { OpenGaussCoordinators } from './model/OpenGaussCoordinators';
import { OpenGaussDatastore } from './model/OpenGaussDatastore';
import { OpenGaussDatastoreOption } from './model/OpenGaussDatastoreOption';
import { OpenGaussDatastoreResponse } from './model/OpenGaussDatastoreResponse';
import { OpenGaussDatastoreResult } from './model/OpenGaussDatastoreResult';
import { OpenGaussEnlargeVolume } from './model/OpenGaussEnlargeVolume';
import { OpenGaussErrorResponse } from './model/OpenGaussErrorResponse';
import { OpenGaussExpandCluster } from './model/OpenGaussExpandCluster';
import { OpenGaussHa } from './model/OpenGaussHa';
import { OpenGaussHaOption } from './model/OpenGaussHaOption';
import { OpenGaussHaResponse } from './model/OpenGaussHaResponse';
import { OpenGaussHaResult } from './model/OpenGaussHaResult';
import { OpenGaussInstanceActionRequest } from './model/OpenGaussInstanceActionRequest';
import { OpenGaussInstanceRequest } from './model/OpenGaussInstanceRequest';
import { OpenGaussInstanceRequestBody } from './model/OpenGaussInstanceRequestBody';
import { OpenGaussInstanceResponse } from './model/OpenGaussInstanceResponse';
import { OpenGaussInstanceResult } from './model/OpenGaussInstanceResult';
import { OpenGaussModifyInstanceConfigurationRequest } from './model/OpenGaussModifyInstanceConfigurationRequest';
import { OpenGaussResizeRequest } from './model/OpenGaussResizeRequest';
import { OpenGaussShard } from './model/OpenGaussShard';
import { OpenGaussUpgradeRequest } from './model/OpenGaussUpgradeRequest';
import { OpenGaussVolume } from './model/OpenGaussVolume';
import { OpenGaussVolumeResponse } from './model/OpenGaussVolumeResponse';
import { OpenGaussVolumeResult } from './model/OpenGaussVolumeResult';
import { OpengaussRestoreInstanceRequest } from './model/OpengaussRestoreInstanceRequest';
import { ParaErrorResponse } from './model/ParaErrorResponse';
import { ParaErrorResponseBody } from './model/ParaErrorResponseBody';
import { ParaGroupParameterResult } from './model/ParaGroupParameterResult';
import { ParamGroupCopyRequestBody } from './model/ParamGroupCopyRequestBody';
import { ParamGroupDiffRequestBody } from './model/ParamGroupDiffRequestBody';
import { PluginExtensions } from './model/PluginExtensions';
import { ProjectQuotasResult } from './model/ProjectQuotasResult';
import { PwdResetRequest } from './model/PwdResetRequest';
import { RecordInfoResponse } from './model/RecordInfoResponse';
import { RecoveryBackupSource } from './model/RecoveryBackupSource';
import { RecoveryBackupTarget } from './model/RecoveryBackupTarget';
import { RecycleInstancesDetailResult } from './model/RecycleInstancesDetailResult';
import { RecycleInstancesDetailResultV1 } from './model/RecycleInstancesDetailResultV1';
import { RecyclePolicy } from './model/RecyclePolicy';
import { RecyclePolicyRequestBody } from './model/RecyclePolicyRequestBody';
import { RegionInstanceInfo } from './model/RegionInstanceInfo';
import { ReleaseDisasterReq } from './model/ReleaseDisasterReq';
import { ResetConfigurationRequest } from './model/ResetConfigurationRequest';
import { ResetConfigurationResponse } from './model/ResetConfigurationResponse';
import { ResetDrConfigRequest } from './model/ResetDrConfigRequest';
import { ResetDrConfigRequestBody } from './model/ResetDrConfigRequestBody';
import { ResetDrConfigResponse } from './model/ResetDrConfigResponse';
import { ResetPwdRequest } from './model/ResetPwdRequest';
import { ResetPwdResponse } from './model/ResetPwdResponse';
import { ResizeInstanceFlavorRequest } from './model/ResizeInstanceFlavorRequest';
import { ResizeInstanceFlavorResponse } from './model/ResizeInstanceFlavorResponse';
import { ResourceErrorResponse } from './model/ResourceErrorResponse';
import { ResourceResult } from './model/ResourceResult';
import { RestartInstanceRequest } from './model/RestartInstanceRequest';
import { RestartInstanceResponse } from './model/RestartInstanceResponse';
import { RestoreDisasterReq } from './model/RestoreDisasterReq';
import { RestoreInstanceRequest } from './model/RestoreInstanceRequest';
import { RestoreInstanceRequestBody } from './model/RestoreInstanceRequestBody';
import { RestoreInstanceResponse } from './model/RestoreInstanceResponse';
import { RestorePoint } from './model/RestorePoint';
import { ResumePluginExtensionsRequest } from './model/ResumePluginExtensionsRequest';
import { ResumePluginExtensionsRequestBody } from './model/ResumePluginExtensionsRequestBody';
import { ResumePluginExtensionsResponse } from './model/ResumePluginExtensionsResponse';
import { RollUpgradeProgress } from './model/RollUpgradeProgress';
import { RunInstanceActionRequest } from './model/RunInstanceActionRequest';
import { RunInstanceActionResponse } from './model/RunInstanceActionResponse';
import { ScheduleTaskDetail } from './model/ScheduleTaskDetail';
import { SearchAutoEnlargePolicyRequest } from './model/SearchAutoEnlargePolicyRequest';
import { SearchAutoEnlargePolicyResponse } from './model/SearchAutoEnlargePolicyResponse';
import { SetBackupPolicyRequest } from './model/SetBackupPolicyRequest';
import { SetBackupPolicyRequestBody } from './model/SetBackupPolicyRequestBody';
import { SetBackupPolicyResponse } from './model/SetBackupPolicyResponse';
import { SetDbUserPwdRequest } from './model/SetDbUserPwdRequest';
import { SetDbUserPwdResponse } from './model/SetDbUserPwdResponse';
import { SetKernelPluginLicenseRequest } from './model/SetKernelPluginLicenseRequest';
import { SetKernelPluginLicenseRequestBody } from './model/SetKernelPluginLicenseRequestBody';
import { SetKernelPluginLicenseResponse } from './model/SetKernelPluginLicenseResponse';
import { SetNewBackupPolicyRequest } from './model/SetNewBackupPolicyRequest';
import { SetNewBackupPolicyRequestBody } from './model/SetNewBackupPolicyRequestBody';
import { SetNewBackupPolicyResponse } from './model/SetNewBackupPolicyResponse';
import { SetRecyclePolicyRequest } from './model/SetRecyclePolicyRequest';
import { SetRecyclePolicyResponse } from './model/SetRecyclePolicyResponse';
import { Shards } from './model/Shards';
import { ShowBackupPolicy } from './model/ShowBackupPolicy';
import { ShowBackupPolicyRequest } from './model/ShowBackupPolicyRequest';
import { ShowBackupPolicyResponse } from './model/ShowBackupPolicyResponse';
import { ShowBalanceStatusRequest } from './model/ShowBalanceStatusRequest';
import { ShowBalanceStatusResponse } from './model/ShowBalanceStatusResponse';
import { ShowBatchUpgradeCandidateVersionsRequest } from './model/ShowBatchUpgradeCandidateVersionsRequest';
import { ShowBatchUpgradeCandidateVersionsResponse } from './model/ShowBatchUpgradeCandidateVersionsResponse';
import { ShowConfigurationDetailRequest } from './model/ShowConfigurationDetailRequest';
import { ShowConfigurationDetailResponse } from './model/ShowConfigurationDetailResponse';
import { ShowCrossCloudDisasterInstanceMonitorRequest } from './model/ShowCrossCloudDisasterInstanceMonitorRequest';
import { ShowCrossCloudDisasterInstanceMonitorResponse } from './model/ShowCrossCloudDisasterInstanceMonitorResponse';
import { ShowCrossCloudDisasterRelationsRequest } from './model/ShowCrossCloudDisasterRelationsRequest';
import { ShowCrossCloudDisasterRelationsResponse } from './model/ShowCrossCloudDisasterRelationsResponse';
import { ShowDeploymentFormRequest } from './model/ShowDeploymentFormRequest';
import { ShowDeploymentFormResponse } from './model/ShowDeploymentFormResponse';
import { ShowErrorLogSwitchStatusRequest } from './model/ShowErrorLogSwitchStatusRequest';
import { ShowErrorLogSwitchStatusResponse } from './model/ShowErrorLogSwitchStatusResponse';
import { ShowInstanceConfigurationRequest } from './model/ShowInstanceConfigurationRequest';
import { ShowInstanceConfigurationResponse } from './model/ShowInstanceConfigurationResponse';
import { ShowInstanceDiskRequest } from './model/ShowInstanceDiskRequest';
import { ShowInstanceDiskResponse } from './model/ShowInstanceDiskResponse';
import { ShowInstanceParamGroupDetailRequest } from './model/ShowInstanceParamGroupDetailRequest';
import { ShowInstanceParamGroupDetailResponse } from './model/ShowInstanceParamGroupDetailResponse';
import { ShowInstanceParamGroupRequest } from './model/ShowInstanceParamGroupRequest';
import { ShowInstanceParamGroupResponse } from './model/ShowInstanceParamGroupResponse';
import { ShowInstanceSnapshotRequest } from './model/ShowInstanceSnapshotRequest';
import { ShowInstanceSnapshotResponse } from './model/ShowInstanceSnapshotResponse';
import { ShowJobDetailRequest } from './model/ShowJobDetailRequest';
import { ShowJobDetailResponse } from './model/ShowJobDetailResponse';
import { ShowLimitTaskNodeOption } from './model/ShowLimitTaskNodeOption';
import { ShowLimitTaskRequest } from './model/ShowLimitTaskRequest';
import { ShowLimitTaskResponse } from './model/ShowLimitTaskResponse';
import { ShowParameterGroupDetailRequest } from './model/ShowParameterGroupDetailRequest';
import { ShowParameterGroupDetailResponse } from './model/ShowParameterGroupDetailResponse';
import { ShowProjectQuotasRequest } from './model/ShowProjectQuotasRequest';
import { ShowProjectQuotasResponse } from './model/ShowProjectQuotasResponse';
import { ShowRecyclePolicyRequest } from './model/ShowRecyclePolicyRequest';
import { ShowRecyclePolicyResponse } from './model/ShowRecyclePolicyResponse';
import { ShowSlowLogDownloadRequest } from './model/ShowSlowLogDownloadRequest';
import { ShowSlowLogDownloadResponse } from './model/ShowSlowLogDownloadResponse';
import { ShowSourceInstanceDetailRequest } from './model/ShowSourceInstanceDetailRequest';
import { ShowSourceInstanceDetailResponse } from './model/ShowSourceInstanceDetailResponse';
import { ShowSslCertDownloadLinkRequest } from './model/ShowSslCertDownloadLinkRequest';
import { ShowSslCertDownloadLinkResponse } from './model/ShowSslCertDownloadLinkResponse';
import { ShowUpgradeCandidateVersionsDetailsRequest } from './model/ShowUpgradeCandidateVersionsDetailsRequest';
import { ShowUpgradeCandidateVersionsDetailsResponse } from './model/ShowUpgradeCandidateVersionsDetailsResponse';
import { ShowUpgradeCandidateVersionsRequest } from './model/ShowUpgradeCandidateVersionsRequest';
import { ShowUpgradeCandidateVersionsResponse } from './model/ShowUpgradeCandidateVersionsResponse';
import { SlowLogDownloadInfo } from './model/SlowLogDownloadInfo';
import { StartInstanceRequest } from './model/StartInstanceRequest';
import { StartInstanceRequestBody } from './model/StartInstanceRequestBody';
import { StartInstanceResponse } from './model/StartInstanceResponse';
import { StartMySQLCompatibilityRequestBody } from './model/StartMySQLCompatibilityRequestBody';
import { StartMysqlCompatibilityRequest } from './model/StartMysqlCompatibilityRequest';
import { StartMysqlCompatibilityResponse } from './model/StartMysqlCompatibilityResponse';
import { StopBackupRequest } from './model/StopBackupRequest';
import { StopBackupResponse } from './model/StopBackupResponse';
import { StopInstanceRequest } from './model/StopInstanceRequest';
import { StopInstanceRequestBody } from './model/StopInstanceRequestBody';
import { StopInstanceResponse } from './model/StopInstanceResponse';
import { Storage } from './model/Storage';
import { SwitchConfigurationRequest } from './model/SwitchConfigurationRequest';
import { SwitchConfigurationResponse } from './model/SwitchConfigurationResponse';
import { SwitchShardRequest } from './model/SwitchShardRequest';
import { SwitchShardRequestBody } from './model/SwitchShardRequestBody';
import { SwitchShardResponse } from './model/SwitchShardResponse';
import { SwitchoverReq } from './model/SwitchoverReq';
import { SyncLimitDataRequest } from './model/SyncLimitDataRequest';
import { SyncLimitDataResponse } from './model/SyncLimitDataResponse';
import { TagResult } from './model/TagResult';
import { TagsOption } from './model/TagsOption';
import { TagsResult } from './model/TagsResult';
import { TaskDetailResult } from './model/TaskDetailResult';
import { UpdateFeaturesRequest } from './model/UpdateFeaturesRequest';
import { UpdateFeaturesRequestBody } from './model/UpdateFeaturesRequestBody';
import { UpdateFeaturesResponse } from './model/UpdateFeaturesResponse';
import { UpdateInstanceConfigurationRequest } from './model/UpdateInstanceConfigurationRequest';
import { UpdateInstanceConfigurationResponse } from './model/UpdateInstanceConfigurationResponse';
import { UpdateInstanceNameRequest } from './model/UpdateInstanceNameRequest';
import { UpdateInstanceNameResponse } from './model/UpdateInstanceNameResponse';
import { UpdateLimitTaskRequest } from './model/UpdateLimitTaskRequest';
import { UpdateLimitTaskRequestBody } from './model/UpdateLimitTaskRequestBody';
import { UpdateLimitTaskResponse } from './model/UpdateLimitTaskResponse';
import { UpdateMySQLCompatibilityRequestBody } from './model/UpdateMySQLCompatibilityRequestBody';
import { UpdateMysqlCompatibilityRequest } from './model/UpdateMysqlCompatibilityRequest';
import { UpdateMysqlCompatibilityResponse } from './model/UpdateMysqlCompatibilityResponse';
import { UpdateNameRequestBody } from './model/UpdateNameRequestBody';
import { UpgradeActionInfo } from './model/UpgradeActionInfo';
import { UpgradeErrorResponseBody } from './model/UpgradeErrorResponseBody';
import { UpgradeInstanceVersionRequest } from './model/UpgradeInstanceVersionRequest';
import { UpgradeInstanceVersionResponse } from './model/UpgradeInstanceVersionResponse';
import { UpgradeInstancesRequestBody } from './model/UpgradeInstancesRequestBody';
import { UpgradeInstancesVersionRequest } from './model/UpgradeInstancesVersionRequest';
import { UpgradeInstancesVersionResponse } from './model/UpgradeInstancesVersionResponse';
import { UpgradeTypeInfo } from './model/UpgradeTypeInfo';
import { ValidateParaGroupNameRequest } from './model/ValidateParaGroupNameRequest';
import { ValidateParaGroupNameResponse } from './model/ValidateParaGroupNameResponse';
import { ValidateWeakPasswordRequest } from './model/ValidateWeakPasswordRequest';
import { ValidateWeakPasswordResponse } from './model/ValidateWeakPasswordResponse';
import { WeakPasswordRequestBody } from './model/WeakPasswordRequestBody';

export class GaussDBforopenGaussClient {
    public static newBuilder(): ClientBuilder<GaussDBforopenGaussClient> {
            let client = new ClientBuilder<GaussDBforopenGaussClient>(newClient);
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
     * 对指定实例添加用户标签信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 添加实例标签。
     * @param {string} instanceId 实例ID。
     * @param {AddTagsRequestBody} addTagsRequestBody 请求体。
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public addInstanceTags(addInstanceTagsRequest?: AddInstanceTagsRequest): Promise<AddInstanceTagsResponse> {
        const options = ParamCreater().addInstanceTags(addInstanceTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 在指定实例的数据库中, 设置帐号的权限。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 授权数据库帐号
     * @param {string} instanceId 实例ID。
     * @param {GaussDBforOpenGaussGrantRequest} grantRequest 请求体。
     * @param {string} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public allowDbPrivileges(allowDbPrivilegesRequest?: AllowDbPrivilegesRequest): Promise<AllowDbPrivilegesResponse> {
        const options = ParamCreater().allowDbPrivileges(allowDbPrivilegesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 在数据库中设置角色的权限。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 授权数据库角色
     * @param {string} instanceId 实例ID。
     * @param {AllowDbRolePrivilegesRequestBody} allowDbRolePrivilegesRequestBody 请求体。
     * @param {string} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public allowDbRolePrivileges(allowDbRolePrivilegesRequest?: AllowDbRolePrivilegesRequest): Promise<AllowDbRolePrivilegesResponse> {
        const options = ParamCreater().allowDbRolePrivileges(allowDbRolePrivilegesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 实例下的节点绑定弹性公网IP/解绑弹性公网IP
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 绑定/解绑弹性公网IP
     * @param {string} instanceId 实例ID，严格匹配UUID规则。
     * @param {string} nodeId 节点ID
     * @param {BindEIPRequestBody} bindEIPRequestBody 请求体。
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public attachEip(attachEipRequest?: AttachEipRequest): Promise<AttachEipResponse> {
        const options = ParamCreater().attachEip(attachEipRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询批量实例可升级的版本和升级类型。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询批量实例可升级的版本和升级类型。
     * @param {UpgradeInstancesRequestBody} showBatchUpgradeCandidateVersionsRequestBody 请求体
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言[zh-cn, en-us]。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchShowUpgradeCandidateVersions(batchShowUpgradeCandidateVersionsRequest?: BatchShowUpgradeCandidateVersionsRequest): Promise<BatchShowUpgradeCandidateVersionsResponse> {
        const options = ParamCreater().batchShowUpgradeCandidateVersions(batchShowUpgradeCandidateVersionsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 取消定时任务
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 取消定时任务
     * @param {string} taskId 任务id。
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public cancelScheduleTask(cancelScheduleTaskRequest?: CancelScheduleTaskRequest): Promise<CancelScheduleTaskResponse> {
        const options = ParamCreater().cancelScheduleTask(cancelScheduleTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 确认备份恢复到目标实例的数据正常。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 备份恢复到目标实例数据后执行数据确认
     * @param {string} instanceId 实例ID。
     * @param {string} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public confirmRestoredData(confirmRestoredDataRequest?: ConfirmRestoredDataRequest): Promise<ConfirmRestoredDataResponse> {
        const options = ParamCreater().confirmRestoredData(confirmRestoredDataRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 复制参数模板。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 复制参数模板
     * @param {string} configId 被复制的参数模板ID。
     * @param {ParamGroupCopyRequestBody} paramGroupCopyRequestBody 复制参数模板请求。
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public copyConfiguration(copyConfigurationRequest?: CopyConfigurationRequest): Promise<CopyConfigurationResponse> {
        const options = ParamCreater().copyConfiguration(copyConfigurationRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建参数模板。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建参数模板
     * @param {CreateConfigurationTemplateRequestBody} createConfigurationTemplateRequestbody 请求体。
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言。默认值：en-us。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createConfigurationTemplate(createConfigurationTemplateRequest?: CreateConfigurationTemplateRequest): Promise<CreateConfigurationTemplateResponse> {
        const options = ParamCreater().createConfigurationTemplate(createConfigurationTemplateRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 搭建容灾关系（从主实例端下发）。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 搭建容灾关系
     * @param {string} instanceId 实例id。
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言。
     * @param {ConstructReq} [createCrossCloudConstructDisasterRequestBody] 容灾类型。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createCrossCloudConstructDisaster(createCrossCloudConstructDisasterRequest?: CreateCrossCloudConstructDisasterRequest): Promise<CreateCrossCloudConstructDisasterResponse> {
        const options = ParamCreater().createCrossCloudConstructDisaster(createCrossCloudConstructDisasterRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 在指定实例中创建数据库。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建数据库
     * @param {string} instanceId 实例ID。
     * @param {GaussDBforOpenDatabaseForCreation} createDatabaseRequest 请求体。
     * @param {string} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createDatabase(createDatabaseRequest?: CreateDatabaseRequest): Promise<CreateDatabaseResponse> {
        const options = ParamCreater().createDatabase(createDatabaseRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建数据库实例
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建数据库实例
     * @param {CreateDatabaseInstanceRequestBody} createDatabaseInstanceRequestBody 请求体
     * @param {string} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createDatabaseInstance(createDatabaseInstanceRequest?: CreateDatabaseInstanceRequest): Promise<CreateDatabaseInstanceResponse> {
        const options = ParamCreater().createDatabaseInstance(createDatabaseInstanceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 在指定实例的数据库中, 创建数据库schema。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建数据库SCHEMA
     * @param {string} instanceId 实例ID。
     * @param {GaussDBforOpenGaussDatabaseSchemaReq} dbSchemaReq 请求体。
     * @param {string} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createDatabaseSchemas(createDatabaseSchemasRequest?: CreateDatabaseSchemasRequest): Promise<CreateDatabaseSchemasResponse> {
        const options = ParamCreater().createDatabaseSchemas(createDatabaseSchemasRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建数据库实例
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建数据库实例
     * @param {OpenGaussInstanceRequestBody} createDbInstanceRequestBody 请求体
     * @param {string} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createDbInstance(createDbInstanceRequest?: CreateDbInstanceRequest): Promise<CreateDbInstanceResponse> {
        const options = ParamCreater().createDbInstance(createDbInstanceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建数据库角色。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建数据库角色
     * @param {string} instanceId 实例ID。
     * @param {CreateDbRoleRequestBody} createDbRoleRequestBody 请求体。
     * @param {string} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createDbRole(createDbRoleRequest?: CreateDbRoleRequest): Promise<CreateDbRoleResponse> {
        const options = ParamCreater().createDbRole(createDbRoleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 在指定实例中创建数据库用户。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建数据库用户
     * @param {string} instanceId 实例ID。
     * @param {GaussDBforOpenGaussUserForCreation} createDbUserRequest 请求体。
     * @param {string} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createDbUser(createDbUserRequest?: CreateDbUserRequest): Promise<CreateDbUserResponse> {
        const options = ParamCreater().createDbUser(createDbUserRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建数据库实例，仅支持IAM5的新平面认证方式（AK/SK认证方式）。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建数据库实例
     * @param {OpenGaussInstanceRequestBody} createInstanceV5RequestBody 请求体
     * @param {string} [xLanguage] 语言
     * @param {string} [subscriptionAgency] 委托urn。使用RAM共享的KMS秘钥创建包周期实例时必填,格式iam::{account_id}:agency:{agency_name}。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createGaussDbInstance(createGaussDbInstanceRequest?: CreateGaussDbInstanceRequest): Promise<CreateGaussDbInstanceResponse> {
        const options = ParamCreater().createGaussDbInstance(createGaussDbInstanceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建数据库企业版和集中式实例
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建数据库实例
     * @param {OpenGaussInstanceRequest} createInstanceRequest 请求体
     * @param {string} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createInstance(createInstanceRequest?: CreateInstanceRequest): Promise<CreateInstanceResponse> {
        const options = ParamCreater().createInstance(createInstanceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建手动备份。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建手动备份
     * @param {CreateManualBackupRequestBody} createManualBackupRequestBody 请求体。
     * @param {string} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createManualBackup(createManualBackupRequest?: CreateManualBackupRequest): Promise<CreateManualBackupResponse> {
        const options = ParamCreater().createManualBackup(createManualBackupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据备份恢复新实例。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 恢复到新实例
     * @param {OpengaussRestoreInstanceRequest} createInstanceRequestBody 请求体。
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createRestoreInstance(createRestoreInstanceRequest?: CreateRestoreInstanceRequest): Promise<CreateRestoreInstanceResponse> {
        const options = ParamCreater().createRestoreInstance(createRestoreInstanceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量实例内核版本定时升级
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量实例内核版本定时升级
     * @param {CreateScheduleTaskRequestBody} createScheduleTaskRequestBody 请求体
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createScheduleTask(createScheduleTaskRequest?: CreateScheduleTaskRequest): Promise<CreateScheduleTaskResponse> {
        const options = ParamCreater().createScheduleTask(createScheduleTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建慢日志下载信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建慢日志下载信息
     * @param {string} instanceId 实例ID，严格匹配UUID规则。
     * @param {string} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createSlowLogDownload(createSlowLogDownloadRequest?: CreateSlowLogDownloadRequest): Promise<CreateSlowLogDownloadResponse> {
        const options = ParamCreater().createSlowLogDownload(createSlowLogDownloadRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除参数模板。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除参数模板
     * @param {string} configId 参数配置模板ID。
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteConfiguration(deleteConfigurationRequest?: DeleteConfigurationRequest): Promise<DeleteConfigurationResponse> {
        const options = ParamCreater().deleteConfiguration(deleteConfigurationRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除指定实例的数据库。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除数据库
     * @param {string} instanceId 实例ID。
     * @param {string} databaseName 数据库库名称。
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言。默认值：en-us。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteDatabase(deleteDatabaseRequest?: DeleteDatabaseRequest): Promise<DeleteDatabaseResponse> {
        const options = ParamCreater().deleteDatabase(deleteDatabaseRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除数据库schema。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除数据库SCHEMA
     * @param {string} instanceId 实例ID。
     * @param {DeleteDatabaseSchemaRequestBody} deleteDatabaseSchemaRequestBody 请求体。
     * @param {string} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteDatabaseSchema(deleteDatabaseSchemaRequest?: DeleteDatabaseSchemaRequest): Promise<DeleteDatabaseSchemaResponse> {
        const options = ParamCreater().deleteDatabaseSchema(deleteDatabaseSchemaRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除数据库实例。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除实例
     * @param {string} instanceId 实例ID，严格匹配UUID规则。
     * @param {string} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteInstance(deleteInstanceRequest?: DeleteInstanceRequest): Promise<DeleteInstanceResponse> {
        const options = ParamCreater().deleteInstance(deleteInstanceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除实例标签
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除实例标签
     * @param {string} instanceId 实例ID，严格匹配UUID规则。
     * @param {string} key 标签键
     * @param {string} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteInstanceTag(deleteInstanceTagRequest?: DeleteInstanceTagRequest): Promise<DeleteInstanceTagResponse> {
        const options = ParamCreater().deleteInstanceTag(deleteInstanceTagRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除任务记录。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除任务记录
     * @param {string} jobId 任务id。
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteJob(deleteJobRequest?: DeleteJobRequest): Promise<DeleteJobResponse> {
        const options = ParamCreater().deleteJob(deleteJobRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除手动备份。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除手动备份
     * @param {string} backupId 手动备份ID。
     * @param {string} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteManualBackup(deleteManualBackupRequest?: DeleteManualBackupRequest): Promise<DeleteManualBackupResponse> {
        const options = ParamCreater().deleteManualBackup(deleteManualBackupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除定时任务信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除定时任务信息
     * @param {string} taskId 任务id。
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteScheduleTask(deleteScheduleTaskRequest?: DeleteScheduleTaskRequest): Promise<DeleteScheduleTaskResponse> {
        const options = ParamCreater().deleteScheduleTask(deleteScheduleTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取备份下载链接。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取备份下载链接
     * @param {string} backupId 备份ID。
     * @param {string} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public downloadBackup(downloadBackupRequest?: DownloadBackupRequest): Promise<DownloadBackupResponse> {
        const options = ParamCreater().downloadBackup(downloadBackupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 结束stream流式容灾的日志保持功能，目前只有stream流容灾支持。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 主实例结束容灾日志保持
     * @param {string} instanceId 实例id。
     * @param {DisasterRecoverStopXlogKeepRequestBody} executeCrossCloudDisasterDataCacheEndRequestBody 日志保持结束请求消息体。
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public executeCrossCloudDisasterDataCacheEnd(executeCrossCloudDisasterDataCacheEndRequest?: ExecuteCrossCloudDisasterDataCacheEndRequest): Promise<ExecuteCrossCloudDisasterDataCacheEndResponse> {
        const options = ParamCreater().executeCrossCloudDisasterDataCacheEnd(executeCrossCloudDisasterDataCacheEndRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 主实例开始容灾日志保持，目前只有stream流容灾支持。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 开始日志保持
     * @param {string} instanceId 实例id。
     * @param {DisasterRecoverStartXlogKeepRequestBody} executeCrossCloudDisasterDataCacheStartRequestBody 日志保持开始请求消息体。
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public executeCrossCloudDisasterDataCacheStart(executeCrossCloudDisasterDataCacheStartRequest?: ExecuteCrossCloudDisasterDataCacheStartRequest): Promise<ExecuteCrossCloudDisasterDataCacheStartResponse> {
        const options = ParamCreater().executeCrossCloudDisasterDataCacheStart(executeCrossCloudDisasterDataCacheStartRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 灾备实例结束容灾演练，目前只有stream流容灾支持。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 结束容灾演练
     * @param {string} instanceId 实例id。
     * @param {DisasterRecoverStopSimulationRequestBody} executeCrossCloudDisasterEndSimulationRequestBody 容灾演练结束请求消息体。
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public executeCrossCloudDisasterEndSimulation(executeCrossCloudDisasterEndSimulationRequest?: ExecuteCrossCloudDisasterEndSimulationRequest): Promise<ExecuteCrossCloudDisasterEndSimulationResponse> {
        const options = ParamCreater().executeCrossCloudDisasterEndSimulation(executeCrossCloudDisasterEndSimulationRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 容灾升主failover（灾备实例端下发）。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 备实例容灾升主
     * @param {string} instanceId 实例id。
     * @param {DisasterFailoverReqBody} executeCrossCloudDisasterRecoveryFailoverRequestBody 容灾灾备升主请求参数。
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public executeCrossCloudDisasterRecoveryFailover(executeCrossCloudDisasterRecoveryFailoverRequest?: ExecuteCrossCloudDisasterRecoveryFailoverRequest): Promise<ExecuteCrossCloudDisasterRecoveryFailoverResponse> {
        const options = ParamCreater().executeCrossCloudDisasterRecoveryFailover(executeCrossCloudDisasterRecoveryFailoverRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 流容灾备升主选择支持容灾回切，实现容灾关系的重建任务。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 重建容灾关系
     * @param {string} instanceId 实例id。
     * @param {RestoreDisasterReq} executeCrossCloudDisasterRestoreRequestBody 容灾回切请求参数。
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public executeCrossCloudDisasterRestore(executeCrossCloudDisasterRestoreRequest?: ExecuteCrossCloudDisasterRestoreRequest): Promise<ExecuteCrossCloudDisasterRestoreResponse> {
        const options = ParamCreater().executeCrossCloudDisasterRestore(executeCrossCloudDisasterRestoreRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 开始容灾演练，目前只有stream流容灾支持。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 开始容灾演练
     * @param {string} instanceId 实例id。
     * @param {DisasterRecoverStartSimulationRequestBody} executeCrossCloudDisasterStartSimulationRequestBody 容灾演练开始请求消息体。
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public executeCrossCloudDisasterStartSimulation(executeCrossCloudDisasterStartSimulationRequest?: ExecuteCrossCloudDisasterStartSimulationRequest): Promise<ExecuteCrossCloudDisasterStartSimulationResponse> {
        const options = ParamCreater().executeCrossCloudDisasterStartSimulation(executeCrossCloudDisasterStartSimulationRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 容灾switchover（可在主备任一一端下发）。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 灾备实例主从切换
     * @param {string} instanceId 实例id。
     * @param {SwitchoverReq} executeCrossCloudDisasterSwitchoverRequestBody switchover请求参数。
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public executeCrossCloudDisasterSwitchover(executeCrossCloudDisasterSwitchoverRequest?: ExecuteCrossCloudDisasterSwitchoverRequest): Promise<ExecuteCrossCloudDisasterSwitchoverResponse> {
        const options = ParamCreater().executeCrossCloudDisasterSwitchover(executeCrossCloudDisasterSwitchoverRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 解除容灾（从容灾主集群下发）。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 解除容灾关系
     * @param {string} instanceId 实例id。
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言。
     * @param {ReleaseDisasterReq} [executeCrossCloudReleaseDisasterRequestBody] 解除容灾请求参数。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public executeCrossCloudReleaseDisaster(executeCrossCloudReleaseDisasterRequest?: ExecuteCrossCloudReleaseDisasterRequest): Promise<ExecuteCrossCloudReleaseDisasterResponse> {
        const options = ParamCreater().executeCrossCloudReleaseDisaster(executeCrossCloudReleaseDisasterRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 安装插件
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 安装插件
     * @param {string} instanceId 需要安装插件的实例id
     * @param {InstallKernelPluginRequestBody} installKernelPluginRequestBody 安装插件的请求参数
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public installKernelPlugin(installKernelPluginRequest?: InstallKernelPluginRequest): Promise<InstallKernelPluginResponse> {
        const options = ParamCreater().installKernelPlugin(installKernelPluginRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询可应用当前参数组模板的实例列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询可应用实例列表
     * @param {string} configId 参数配置模板ID。
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言。
     * @param {number} [offset] 索引位置，偏移量。从第一条数据偏移offset条数据后开始查询，默认为0（偏移0条数据，表示从第一条数据开始查询），必须为数字，不能为负数。
     * @param {number} [limit] 查询记录数。默认为100，不能为负数，最小值为1，最大值为100。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listApplicableInstances(listApplicableInstancesRequest?: ListApplicableInstancesRequest): Promise<ListApplicableInstancesResponse> {
        const options = ParamCreater().listApplicableInstances(listApplicableInstancesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询参数模板的应用记录，以实例级别为维度。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询参数模板的应用记录
     * @param {string} configId 参数配置模板ID。
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言。默认值：en-us。
     * @param {number} [offset] 索引位置，偏移量。从第一条数据偏移offset条数据后开始查询，默认为0（偏移0条数据，表示从第一条数据开始查询），必须为数字，不能为负数。
     * @param {number} [limit] 查询记录数。默认为100，不能为负数，最小值为1，最大值为100。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAppliedHistories(listAppliedHistoriesRequest?: ListAppliedHistoriesRequest): Promise<ListAppliedHistoriesResponse> {
        const options = ParamCreater().listAppliedHistories(listAppliedHistoriesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询实例可变更规格列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询实例可变更规格
     * @param {string} instanceId 实例ID。
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言
     * @param {number} [offset] 索引位置，偏移量。从第一条数据偏移offset条数据后开始查询，默认为0（偏移0条数据，表示从第一条数据开始查询），必须为数字，不能为负数。
     * @param {number} [limit] 查询记录数。默认为100，不能为负数，最小值为1，最大值为100。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAvailableFlavors(listAvailableFlavorsRequest?: ListAvailableFlavorsRequest): Promise<ListAvailableFlavorsResponse> {
        const options = ParamCreater().listAvailableFlavors(listAvailableFlavorsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取备份列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询备份列表
     * @param {string} [xLanguage] 语言
     * @param {string} [instanceId] 实例ID。
     * @param {string} [backupId] 备份ID。
     * @param {'auto' | 'manual'} [backupType] 备份类型，取值：   \&quot;auto\&quot;：自动全量备份   \&quot;manual\&quot;：手动全量备份
     * @param {number} [offset] 索引位置，偏移量。从第一条数据偏移offset条数据后开始查询，默认为0（偏移0条数据，表示从第一条数据开始查询），必须为数字，不能为负数。
     * @param {number} [limit] 查询记录数。默认为100，不能为负数，最小值为1，最大值为100。
     * @param {string} [beginTime] 查询开始时间，格式为“yyyy-mm-ddThh:mm:ssZ”。其中，T指某个时间的开始；Z指时区偏移量，例如北京时间偏移显示为+0800。与end_time必须同时使用。
     * @param {string} [endTime] 查询结束时间，格式为“yyyy-mm-ddThh:mm:ssZ”，且大于查询开始时间。其中，T指某个时间的开始；Z指时区偏移量，例如北京时间偏移显示为+0800。与begin_time必须同时使用。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listBackups(listBackupsRequest?: ListBackupsRequest): Promise<ListBackupsResponse> {
        const options = ParamCreater().listBackups(listBackupsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取备份列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询备份列表
     * @param {string} [xLanguage] 语言
     * @param {string} [instanceId] 实例ID。
     * @param {string} [backupId] 备份ID。
     * @param {'auto' | 'manual'} [backupType] 备份类型，取值：   \&quot;auto\&quot;：自动全量备份   \&quot;manual\&quot;：手动全量备份
     * @param {number} [offset] 索引位置，偏移量。从第一条数据偏移offset条数据后开始查询，默认为0（偏移0条数据，表示从第一条数据开始查询），必须为数字，不能为负数。
     * @param {number} [limit] 查询记录数。默认为100，不能为负数，最小值为1，最大值为100。
     * @param {string} [beginTime] 查询开始时间，格式为“yyyy-mm-ddThh:mm:ssZ”。其中，T指某个时间的开始；Z指时区偏移量，例如北京时间偏移显示为+0800。与end_time必须同时使用。
     * @param {string} [endTime] 查询结束时间，格式为“yyyy-mm-ddThh:mm:ssZ”，且大于查询开始时间。其中，T指某个时间的开始；Z指时区偏移量，例如北京时间偏移显示为+0800。与begin_time必须同时使用。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listBackupsDetails(listBackupsDetailsRequest?: ListBackupsDetailsRequest): Promise<ListBackupsDetailsResponse> {
        const options = ParamCreater().listBackupsDetails(listBackupsDetailsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询实例已绑定EIP列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询实例已绑定EIP列表
     * @param {string} instanceId 实例ID。
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言
     * @param {number} [offset] 索引位置，偏移量。从第一条数据偏移offset条数据后开始查询，默认为0（偏移0条数据，表示从第一条数据开始查询），必须为数字，不能为负数。
     * @param {number} [limit] 查询记录数。默认为50，不能为负数，最小值为1，最大值为50。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listBindedEips(listBindedEipsRequest?: ListBindedEipsRequest): Promise<ListBindedEipsResponse> {
        const options = ParamCreater().listBindedEips(listBindedEipsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询协调节点列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询协调节点列表
     * @param {string} instanceId 实例ID。
     * @param {string} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listCnInfosBeforeReduce(listCnInfosBeforeReduceRequest?: ListCnInfosBeforeReduceRequest): Promise<ListCnInfosBeforeReduceResponse> {
        const options = ParamCreater().listCnInfosBeforeReduce(listCnInfosBeforeReduceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询实例的组件列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询实例的组件列表
     * @param {string} instanceId 实例ID。
     * @param {string} [xLanguage] 语言
     * @param {number} [offset] 索引位置，偏移量。从第一条数据偏移offset条数据后开始查询，默认为0（偏移0条数据，表示从第一条数据开始查询），必须为数字，不能为负数。
     * @param {number} [limit] 查询记录数。默认为100，不能为负数，最小值为1，最大值为100
     * @param {'ALL' | 'CN' | 'DN' | 'CM' | 'GTM' | 'ETCD'} [componentType] 组件类型，过滤拿到需要的组件类型的组件信息，默认为ALL，传参数会查询对应组件信息。 枚举值：   \&quot;ALL\&quot;: 查询所有组件类型。   \&quot;CN\&quot;: 查询CN组件类型。   \&quot;DN\&quot;: 查询DN组件类型。   \&quot;CM\&quot;: 查询CMS组件类型。   \&quot;GTM\&quot;: 查询GTM组件类型。   \&quot;ETCD\&quot;: 查询ETCD组件类型。
     * @param {string} [availabilityZoneId] 主组件所在可用区编号，筛选符合条件的组件，默认为ALL，查询实例所有可用区上的节点的组件信息。 当调用接口传入可用区编号时：   相对于DN组件，会查询出的DN分片中的主组件在该可用区上的这个分片的所有副本的组件信息。   相对于CN组件，CN组件没有主备关系，会查询出该可用区上的CN组件信息。   相对于其他组件，会查询该可用区上有没有某个组件类型的主组件，有则会返回该组件类型的所有组件信息，没有则不返回该组件类型的信息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listComponentInfos(listComponentInfosRequest?: ListComponentInfosRequest): Promise<ListComponentInfosResponse> {
        const options = ParamCreater().listComponentInfos(listComponentInfosRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取参数模板列表，包括所有数据库的默认参数模板和用户创建的参数模板。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取参数模板列表
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言
     * @param {number} [offset] 索引位置，偏移量。从第一条数据偏移offset条数据后开始查询，默认为0（偏移0条数据，表示从第一条数据开始查询），必须为数字，不能为负数。
     * @param {number} [limit] 查询记录数。默认为100，不能为负数，最小值为1，最大值为100。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listConfigurations(listConfigurationsRequest?: ListConfigurationsRequest): Promise<ListConfigurationsResponse> {
        const options = ParamCreater().listConfigurations(listConfigurationsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取两个参数配置模板的差异列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 比较两个参数组模板之间的差异
     * @param {ParamGroupDiffRequestBody} paramGroupDiffRequest 参数组模板比较请求。
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listConfigurationsDiff(listConfigurationsDiffRequest?: ListConfigurationsDiffRequest): Promise<ListConfigurationsDiffResponse> {
        const options = ParamCreater().listConfigurationsDiff(listConfigurationsDiffRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询数据库实例列表/查询实例详情
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询数据库实例列表/查询实例详情
     * @param {string} [xLanguage] 语言
     * @param {string} [id] 实例ID。  “\\*”为系统保留字符，如果id是以“\\*”起始，表示按照\\*后面的值模糊匹配，否则，按照id精确匹配查询。不能只传入“\\*”。
     * @param {string} [name] 实例名称。  “\\*”为系统保留字符，如果name是以“\\*”起始，表示按照\\*后面的值模糊匹配，否则，按照name精确匹配查询。不能只传入“\\*”。
     * @param {'Enterprise' | 'Ha'} [type] 按照实例类型查询。目前仅支持取值“Enterprise”（区分大小写），对应分布式实例（企业版）。当前支持取值\&quot;Ha\&quot;（区分大小写），对应主备式实例。
     * @param {'GaussDB'} [datastoreType] 数据库类型，区分大小写。  - GaussDB
     * @param {string} [vpcId] 虚拟私有云ID。  方法1：登录虚拟私有云服务的控制台界面，在虚拟私有云的详情页面查找VPC ID。 方法2：通过虚拟私有云服务的API接口查询，具体操作可参考[查询VPC列表](https://support.huaweicloud.com/api-vpc/vpc_api01_0003.html)。
     * @param {string} [subnetId] 子网的网络ID信息。  - 方法1：登录虚拟私有云服务的控制台界面，单击VPC下的子网，进入子网详情页面，查找网络ID。 - 方法2：通过虚拟私有云服务的API接口查询，具体操作可参考[查询子网列表](https://support.huaweicloud.com/api-vpc/vpc_subnet01_0003.html)。
     * @param {number} [offset] 索引位置，偏移量。从第一条数据偏移offset条数据后开始查询，默认为0（偏移0条数据，表示从第一条数据开始查询），必须为数字，不能为负数。
     * @param {number} [limit] 查询记录数。默认为100，不能为负数，最小值为1，最大值为100
     * @param {Array<string>} [tags] 根据实例标签键值对进行查询。  {key}表示标签键，不可以为空或重复。最大长度127个unicode字符。key不能为空或者空字符串，不能为空格，使用之前先trim前后半角空格。不能包含+/?#&amp;&#x3D;,%特殊字符。  {value}表示标签值，可以为空。最大长度255个unicode字符，使用之前先trim 前后半角空格。不能包含+/?#&amp;&#x3D;,%特殊字符。  如果value为空，则表示any_value（查询任意value）。  如果同时使用多个标签键值对进行查询，中间使用逗号分隔开，最多包含10组。
     * @param {'postPaid' | 'prePaid'} [chargeMode] 计费模式。  取值范围：  postPaid：后付费，即按需付费。  prePaid：预付费，即包年/包月。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listDatabaseInstances(listDatabaseInstancesRequest?: ListDatabaseInstancesRequest): Promise<ListDatabaseInstancesResponse> {
        const options = ParamCreater().listDatabaseInstances(listDatabaseInstancesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询数据库角色列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询数据库角色列表
     * @param {string} instanceId 实例ID。
     * @param {string} [xLanguage] 语言
     * @param {number} [offset] 偏移量表示从此偏移量开始查询, offset大于等于0，默认0。
     * @param {number} [limit] 每页显示的条目数量,取值范围[1, 100]，默认10。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listDatabaseRoles(listDatabaseRolesRequest?: ListDatabaseRolesRequest): Promise<ListDatabaseRolesResponse> {
        const options = ParamCreater().listDatabaseRoles(listDatabaseRolesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定实例的数据库SCHEMA列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询数据库SCHEMA列表
     * @param {string} instanceId 实例ID。
     * @param {string} dbName 数据库名称。
     * @param {string} [xLanguage] 语言
     * @param {number} [offset] 偏移量表示从此偏移量开始查询, offset大于等于0。
     * @param {number} [limit] 每页显示的条目数量,取值范围[1, 100]。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listDatabaseSchemas(listDatabaseSchemasRequest?: ListDatabaseSchemasRequest): Promise<ListDatabaseSchemasResponse> {
        const options = ParamCreater().listDatabaseSchemas(listDatabaseSchemasRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定实例中的数据库列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询数据库列表
     * @param {string} instanceId 实例ID。
     * @param {string} [xLanguage] 语言
     * @param {number} [offset] 偏移量表示从此偏移量开始查询, offset大于等于0，默认0。
     * @param {number} [limit] 每页显示的条目数量,取值范围[1, 100]，默认10。
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
     * 查询指定数据库引擎对应的版本信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询数据库引擎的版本
     * @param {string} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listDatastores(listDatastoresRequest?: ListDatastoresRequest): Promise<ListDatastoresResponse> {
        const options = ParamCreater().listDatastores(listDatastoresRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询引擎列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询引擎列表
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listDatastoresDetails(listDatastoresDetailsRequest?: ListDatastoresDetailsRequest): Promise<ListDatastoresDetailsResponse> {
        const options = ParamCreater().listDatastoresDetails(listDatastoresDetailsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取备份列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询备份列表
     * @param {string} [xLanguage] 语言
     * @param {string} [instanceId] 实例ID。
     * @param {string} [backupId] 备份ID。
     * @param {'auto' | 'manual'} [backupType] 备份类型，取值：   \&quot;auto\&quot;：自动全量备份   \&quot;manual\&quot;：手动全量备份
     * @param {number} [offset] 索引位置，偏移量。从第一条数据偏移offset条数据后开始查询，默认为0（偏移0条数据，表示从第一条数据开始查询），必须为数字，不能为负数。
     * @param {number} [limit] 查询记录数。默认为100，不能为负数，最小值为1，最大值为100。
     * @param {string} [beginTime] 查询开始时间，格式为“yyyy-mm-ddThh:mm:ssZ”。其中，T指某个时间的开始；Z指时区偏移量，例如北京时间偏移显示为+0800。与end_time必须同时使用。
     * @param {string} [endTime] 查询结束时间，格式为“yyyy-mm-ddThh:mm:ssZ”，且大于查询开始时间。其中，T指某个时间的开始；Z指时区偏移量，例如北京时间偏移显示为+0800。与begin_time必须同时使用。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listDbBackups(listDbBackupsRequest?: ListDbBackupsRequest): Promise<ListDbBackupsResponse> {
        const options = ParamCreater().listDbBackups(listDbBackupsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询数据库的规格信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询数据库规格
     * @param {string} [xLanguage] 语言
     * @param {string} [version] 数据库版本号。
     * @param {string} [specCode] 规格编码
     * @param {string} [haMode] 实例类型  集中式centralization_standard  分布式enterprise
     * @param {number} [limit] 查询记录数。默认为100，不能为负数，最小值为1，最大值为100。
     * @param {number} [offset] 索引位置，偏移量。从第一条数据偏移offset条数据后开始查询，默认为0（偏移0条数据，表示从第一条数据开始查询），必须为数字，不能为负数。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listDbFlavors(listDbFlavorsRequest?: ListDbFlavorsRequest): Promise<ListDbFlavorsResponse> {
        const options = ParamCreater().listDbFlavors(listDbFlavorsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 在指定实例中查询数据库用户列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询数据库用户列表
     * @param {string} instanceId 实例ID。
     * @param {string} [xLanguage] 语言
     * @param {number} [offset] 偏移量表示从此偏移量开始查询, offset大于等于0。
     * @param {number} [limit] 每页显示的条目数量,取值范围[1, 100]。
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
     * 查询容灾操作记录。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询操作记录
     * @param {string} instanceId 实例id。
     * @param {string} entityId 实体id（容灾id）
     * @param {'dr'} entityType 实体类型（容灾类型）
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言。
     * @param {number} [limit] 查询记录数。默认为100，不能为负数，最小值为1，最大值为100。
     * @param {number} [offset] 索引位置，偏移量。从第一条数据偏移offset条数据后开始查询，默认为0（偏移0条数据，表示从第一条数据开始查询），必须为数字，不能为负数。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listDisasterRecoveryRecord(listDisasterRecoveryRecordRequest?: ListDisasterRecoveryRecordRequest): Promise<ListDisasterRecoveryRecordResponse> {
        const options = ParamCreater().listDisasterRecoveryRecord(listDisasterRecoveryRecordRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询企业项目配额组信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询企业项目配额组
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言, 默认值为en-us。
     * @param {number} [offset] 索引位置，偏移量。从第一条数据偏移offset条数据后开始查询，默认为0（偏移0条数据，表示从第一条数据开始查询），必须为数字，不能为负数。
     * @param {number} [limit] 查询记录数。默认为100，不能为负数，最小值为1，最大值为100。
     * @param {string} [enterpriseProjectId] 企业项目ID。 - 对于未开通企业多项目服务的用户，不传该参数。 - 对于已开通企业多项目服务的用户，不传该参数时，表示为default企业项目。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listEpsQuotas(listEpsQuotasRequest?: ListEpsQuotasRequest): Promise<ListEpsQuotasResponse> {
        const options = ParamCreater().listEpsQuotas(listEpsQuotasRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询当前实例高级特性列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询实例特性列表
     * @param {string} instanceId 实例ID。
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listFeatures(listFeaturesRequest?: ListFeaturesRequest): Promise<ListFeaturesResponse> {
        const options = ParamCreater().listFeatures(listFeaturesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询数据库的规格信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询数据库规格
     * @param {string} [xLanguage] 语言
     * @param {string} [version] 数据库版本号。
     * @param {string} [specCode] 规格编码
     * @param {string} [haMode] 实例类型  集中式centralization_standard  分布式enterprise
     * @param {number} [limit] 查询记录数。默认为100，不能为负数，最小值为1，最大值为100。
     * @param {number} [offset] 索引位置，偏移量。从第一条数据偏移offset条数据后开始查询，默认为0（偏移0条数据，表示从第一条数据开始查询），必须为数字，不能为负数。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listFlavors(listFlavorsRequest?: ListFlavorsRequest): Promise<ListFlavorsResponse> {
        const options = ParamCreater().listFlavors(listFlavorsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询数据库的规格信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询数据库规格
     * @param {string} [xLanguage] 语言
     * @param {string} [version] 数据库版本号。
     * @param {string} [specCode] 规格编码
     * @param {string} [haMode] 实例类型  集中式centralization_standard  分布式enterprise
     * @param {number} [limit] 查询记录数。默认为100，不能为负数，最小值为1，最大值为100。
     * @param {number} [offset] 索引位置，偏移量。从第一条数据偏移offset条数据后开始查询，默认为0（偏移0条数据，表示从第一条数据开始查询），必须为数字，不能为负数。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listFlavorsDetails(listFlavorsDetailsRequest?: ListFlavorsDetailsRequest): Promise<ListFlavorsDetailsResponse> {
        const options = ParamCreater().listFlavorsDetails(listFlavorsDetailsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询引擎列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询引擎列表
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listGaussDbDatastores(listGaussDbDatastoresRequest?: ListGaussDbDatastoresRequest): Promise<ListGaussDbDatastoresResponse> {
        const options = ParamCreater().listGaussDbDatastores(listGaussDbDatastoresRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询参数模板的修改历史记录。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询参数模板的修改历史
     * @param {string} configId 参数模板ID。
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言, 默认值为en-us。
     * @param {number} [offset] 索引位置，偏移量。从第一条数据偏移offset条数据后开始查询，默认为0（偏移0条数据，表示从第一条数据开始查询），必须为数字，不能为负数。
     * @param {number} [limit] 查询记录数。默认为100，不能为负数，最小值为1，最大值为100。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listHistoryOperations(listHistoryOperationsRequest?: ListHistoryOperationsRequest): Promise<ListHistoryOperationsResponse> {
        const options = ParamCreater().listHistoryOperations(listHistoryOperationsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询数据库实例列表/查询实例详情
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询数据库实例列表/查询实例详情
     * @param {string} [xLanguage] 语言
     * @param {string} [id] 实例ID。  “\\*”为系统保留字符，如果id是以“\\*”起始，表示按照\\*后面的值模糊匹配，否则，按照id精确匹配查询。不能只传入“\\*”。
     * @param {string} [name] 实例名称。  “\\*”为系统保留字符，如果name是以“\\*”起始，表示按照\\*后面的值模糊匹配，否则，按照name精确匹配查询。不能只传入“\\*”。
     * @param {'Enterprise' | 'Ha'} [type] 按照实例类型查询。目前仅支持取值“Enterprise”（区分大小写），对应分布式实例（企业版）。当前支持取值\&quot;Ha\&quot;（区分大小写），对应主备式实例。
     * @param {'GaussDB'} [datastoreType] 数据库类型，区分大小写。  - GaussDB
     * @param {string} [vpcId] 虚拟私有云ID。  方法1：登录虚拟私有云服务的控制台界面，在虚拟私有云的详情页面查找VPC ID。 方法2：通过虚拟私有云服务的API接口查询，具体操作可参考[查询VPC列表](https://support.huaweicloud.com/api-vpc/vpc_api01_0003.html)。
     * @param {string} [subnetId] 子网的网络ID信息。  - 方法1：登录虚拟私有云服务的控制台界面，单击VPC下的子网，进入子网详情页面，查找网络ID。 - 方法2：通过虚拟私有云服务的API接口查询，具体操作可参考[查询子网列表](https://support.huaweicloud.com/api-vpc/vpc_subnet01_0003.html)。
     * @param {number} [offset] 索引位置，偏移量。从第一条数据偏移offset条数据后开始查询，默认为0（偏移0条数据，表示从第一条数据开始查询），必须为数字，不能为负数。
     * @param {number} [limit] 查询记录数。默认为100，不能为负数，最小值为1，最大值为100
     * @param {Array<string>} [tags] 根据实例标签键值对进行查询。  {key}表示标签键，不可以为空或重复。最大长度127个unicode字符。key不能为空或者空字符串，不能为空格，使用之前先trim前后半角空格。不能包含+/?#&amp;&#x3D;,%特殊字符。  {value}表示标签值，可以为空。最大长度255个unicode字符，使用之前先trim 前后半角空格。不能包含+/?#&amp;&#x3D;,%特殊字符。  如果value为空，则表示any_value（查询任意value）。  如果同时使用多个标签键值对进行查询，中间使用逗号分隔开，最多包含10组。
     * @param {'postPaid' | 'prePaid'} [chargeMode] 计费模式。  取值范围：  postPaid：后付费，即按需付费。  prePaid：预付费，即包年/包月。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listInstanceDetails(listInstanceDetailsRequest?: ListInstanceDetailsRequest): Promise<ListInstanceDetailsResponse> {
        const options = ParamCreater().listInstanceDetails(listInstanceDetailsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查看实例引擎版本分布
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查看实例引擎版本分布
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言。
     * @param {number} [offset] 索引位置，偏移量。从第一条数据偏移offset条数据后开始查询，默认为0（偏移0条数据，表示从第一条数据开始查询），必须为数字，不能为负数。
     * @param {number} [limit] 查询记录数。默认为100，不能为负数，最小值为1，最大值为100
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listInstanceEngineDetail(listInstanceEngineDetailRequest?: ListInstanceEngineDetailRequest): Promise<ListInstanceEngineDetailResponse> {
        const options = ParamCreater().listInstanceEngineDetail(listInstanceEngineDetailRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询数据库错误日志下载链接。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询错误日志下载链接
     * @param {string} instanceId 实例ID。
     * @param {string} startTime 开始时间，格式为“yyyy-mm-ddThh:mm:ssZ”。其中，T指某个时间的开始；Z指时区偏移量，例如北京时间偏移显示为+0800。
     * @param {string} endTime 结束时间，格式为“yyyy-mm-ddThh:mm:ssZ”。其中，T指某个时间的开始；Z指时区偏移量，例如北京时间偏移显示为+0800。只能查询当前时间前30天的错误日志。
     * @param {string} [xLanguage] 语言
     * @param {number} [offset] 索引位置，偏移量。从第一条数据偏移offset条数据后开始查询，默认为0（偏移0条数据，表示从第一条数据开始查询），必须为数字，不能为负数。例如：该参数指定为0，limit指定为10，则只展示第1-10条数据。
     * @param {number} [limit] 查询记录数。默认为10，不能为负数，最小值为1，最大值为100。例如该参数设定为10，则查询结果最多只显示10条记录。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listInstanceErrorLogs(listInstanceErrorLogsRequest?: ListInstanceErrorLogsRequest): Promise<ListInstanceErrorLogsResponse> {
        const options = ParamCreater().listInstanceErrorLogs(listInstanceErrorLogsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定实例的用户标签信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询实例标签
     * @param {string} instanceId 实例ID。
     * @param {string} [xLanguage] 语言。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listInstanceTags(listInstanceTagsRequest?: ListInstanceTagsRequest): Promise<ListInstanceTagsResponse> {
        const options = ParamCreater().listInstanceTags(listInstanceTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询数据库实例列表/查询实例详情
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询数据库实例列表/查询实例详情
     * @param {string} [xLanguage] 语言
     * @param {string} [id] 实例ID。  “\\*”为系统保留字符，如果id是以“\\*”起始，表示按照\\*后面的值模糊匹配，否则，按照id精确匹配查询。不能只传入“\\*”。
     * @param {string} [name] 实例名称。  “\\*”为系统保留字符，如果name是以“\\*”起始，表示按照\\*后面的值模糊匹配，否则，按照name精确匹配查询。不能只传入“\\*”。
     * @param {'Enterprise' | 'Ha'} [type] 按照实例类型查询。目前仅支持取值“Enterprise”（区分大小写），对应分布式实例（企业版）。当前支持取值\&quot;Ha\&quot;（区分大小写），对应主备式实例。
     * @param {'GaussDB(for openGauss)' | 'GaussDB'} [datastoreType] 数据库类型，区分大小写。  - GaussDB
     * @param {string} [vpcId] 虚拟私有云ID。  方法1：登录虚拟私有云服务的控制台界面，在虚拟私有云的详情页面查找VPC ID。 方法2：通过虚拟私有云服务的API接口查询，具体操作可参考[查询VPC列表](https://support.huaweicloud.com/api-vpc/vpc_api01_0003.html)。
     * @param {string} [subnetId] 子网的网络ID信息。  - 方法1：登录虚拟私有云服务的控制台界面，单击VPC下的子网，进入子网详情页面，查找网络ID。 - 方法2：通过虚拟私有云服务的API接口查询，具体操作可参考[查询子网列表](https://support.huaweicloud.com/api-vpc/vpc_subnet01_0003.html)。
     * @param {number} [offset] 索引位置，偏移量。从第一条数据偏移offset条数据后开始查询，默认为0（偏移0条数据，表示从第一条数据开始查询），必须为数字，不能为负数。
     * @param {number} [limit] 查询记录数。默认为100，不能为负数，最小值为1，最大值为100
     * @param {Array<string>} [tags] 根据实例标签键值对进行查询。  {key}表示标签键，不可以为空或重复。最大长度127个unicode字符。key不能为空或者空字符串，不能为空格，使用之前先trim前后半角空格。不能包含+/?#&amp;&#x3D;,%特殊字符。  {value}表示标签值，可以为空。最大长度255个unicode字符，使用之前先trim 前后半角空格。不能包含+/?#&amp;&#x3D;,%特殊字符。  如果value为空，则表示any_value（查询任意value）。  如果同时使用多个标签键值对进行查询，中间使用逗号分隔开，最多包含10组。
     * @param {'postPaid' | 'prePaid'} [chargeMode] 计费模式。  取值范围：   postPaid：后付费，即按需付费。  prePaid：预付费，即包年/包月。
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
     * 查询数据库实例列表/查询实例详情
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询数据库实例列表/查询实例详情
     * @param {string} [xLanguage] 语言
     * @param {string} [id] 实例ID。  “\\*”为系统保留字符，如果id是以“\\*”起始，表示按照\\*后面的值模糊匹配，否则，按照id精确匹配查询。不能只传入“\\*”。
     * @param {string} [name] 实例名称。  “\\*”为系统保留字符，如果name是以“\\*”起始，表示按照\\*后面的值模糊匹配，否则，按照name精确匹配查询。不能只传入“\\*”。
     * @param {'Enterprise' | 'Ha'} [type] 按照实例类型查询。目前仅支持取值“Enterprise”（区分大小写），对应分布式实例（企业版）。当前支持取值\&quot;Ha\&quot;（区分大小写），对应主备式实例。
     * @param {'GaussDB'} [datastoreType] 数据库类型，区分大小写。  - GaussDB
     * @param {string} [vpcId] 虚拟私有云ID。  方法1：登录虚拟私有云服务的控制台界面，在虚拟私有云的详情页面查找VPC ID。 方法2：通过虚拟私有云服务的API接口查询，具体操作可参考[查询VPC列表](https://support.huaweicloud.com/api-vpc/vpc_api01_0003.html)。
     * @param {string} [subnetId] 子网的网络ID信息。  - 方法1：登录虚拟私有云服务的控制台界面，单击VPC下的子网，进入子网详情页面，查找网络ID。 - 方法2：通过虚拟私有云服务的API接口查询，具体操作可参考[查询子网列表](https://support.huaweicloud.com/api-vpc/vpc_subnet01_0003.html)。
     * @param {number} [offset] 索引位置，偏移量。从第一条数据偏移offset条数据后开始查询，默认为0（偏移0条数据，表示从第一条数据开始查询），必须为数字，不能为负数。
     * @param {number} [limit] 查询记录数。默认为100，不能为负数，最小值为1，最大值为100
     * @param {Array<string>} [tags] 根据实例标签键值对进行查询。  {key}表示标签键，不可以为空或重复。最大长度127个unicode字符。key不能为空或者空字符串，不能为空格，使用之前先trim前后半角空格。不能包含+/?#&amp;&#x3D;,%特殊字符。  {value}表示标签值，可以为空。最大长度255个unicode字符，使用之前先trim 前后半角空格。不能包含+/?#&amp;&#x3D;,%特殊字符。  如果value为空，则表示any_value（查询任意value）。  如果同时使用多个标签键值对进行查询，中间使用逗号分隔开，最多包含10组。
     * @param {'postPaid' | 'prePaid'} [chargeMode] 计费模式。  取值范围：  postPaid：后付费，即按需付费。  prePaid：预付费，即包年/包月。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listInstancesDetails(listInstancesDetailsRequest?: ListInstancesDetailsRequest): Promise<ListInstancesDetailsResponse> {
        const options = ParamCreater().listInstancesDetails(listInstancesDetailsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询实例已安装的插件列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询实例已安装的插件列表
     * @param {string} instanceId 查询实例已安装的插件列表的实例ID
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listKernelPlugins(listKernelPluginsRequest?: ListKernelPluginsRequest): Promise<ListKernelPluginsResponse> {
        const options = ParamCreater().listKernelPlugins(listKernelPluginsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取参数模板列表，包括所有数据库的默认参数模板和用户创建的参数模板。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取参数模板列表
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言
     * @param {number} [offset] 索引位置，偏移量。从第一条数据偏移offset条数据后开始查询，默认为0（偏移0条数据，表示从第一条数据开始查询），必须为数字，不能为负数。
     * @param {number} [limit] 查询记录数。默认为100，不能为负数，最小值为1，最大值为100。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listParamGroupTemplates(listParamGroupTemplatesRequest?: ListParamGroupTemplatesRequest): Promise<ListParamGroupTemplatesResponse> {
        const options = ParamCreater().listParamGroupTemplates(listParamGroupTemplatesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取参数模板列表，包括所有数据库的默认参数模板和用户创建的参数模板。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取参数模板列表
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言
     * @param {number} [offset] 索引位置，偏移量。从第一条数据偏移offset条数据后开始查询，默认为0（偏移0条数据，表示从第一条数据开始查询），必须为数字，不能为负数。
     * @param {number} [limit] 查询记录数。默认为100，不能为负数，最小值为1，最大值为100。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listParameterGroupTemplates(listParameterGroupTemplatesRequest?: ListParameterGroupTemplatesRequest): Promise<ListParameterGroupTemplatesResponse> {
        const options = ParamCreater().listParameterGroupTemplates(listParameterGroupTemplatesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询实例插件拓展信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询实例插件拓展信息
     * @param {string} instanceId 查询实例插件拓展信息的实例ID
     * @param {ListPluginExtensionsRequestBody} listPluginExtensionsRequestBody 查询实例插件拓展信息请求参数
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listPluginExtensions(listPluginExtensionsRequest?: ListPluginExtensionsRequest): Promise<ListPluginExtensionsResponse> {
        const options = ParamCreater().listPluginExtensions(listPluginExtensionsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询预预定义标签。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询预定义标签
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listPredefinedTags(listPredefinedTagsRequest?: ListPredefinedTagsRequest): Promise<ListPredefinedTagsResponse> {
        const options = ParamCreater().listPredefinedTags(listPredefinedTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询项目下所有用户标签信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询项目标签
     * @param {string} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listProjectTags(listProjectTagsRequest?: ListProjectTagsRequest): Promise<ListProjectTagsResponse> {
        const options = ParamCreater().listProjectTags(listProjectTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询回收站所有引擎实例列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询回收站所有引擎实例列表。
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言。默认值：en-us。
     * @param {string} [instanceName] 实例名称。
     * @param {number} [offset] 索引位置，偏移量。从第一条数据偏移offset条数据后开始查询，默认为0（偏移0条数据，表示从第一条数据开始查询），必须为数字，不能为负数。
     * @param {number} [limit] 查询记录数。默认为50，不能为负数，最小值为1，最大值为50。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listRecycleInstances(listRecycleInstancesRequest?: ListRecycleInstancesRequest): Promise<ListRecycleInstancesResponse> {
        const options = ParamCreater().listRecycleInstances(listRecycleInstancesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询回收站所有引擎实例列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询回收站所有引擎实例列表。
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言。默认值：en-us。
     * @param {string} [instanceName] 实例名称。
     * @param {number} [offset] 索引位置，偏移量。从第一条数据偏移offset条数据后开始查询，默认为0（偏移0条数据，表示从第一条数据开始查询），必须为数字，不能为负数。
     * @param {number} [limit] 查询记录数。默认为50，不能为负数，最小值为1，最大值为50。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listRecycleInstancesDetails(listRecycleInstancesDetailsRequest?: ListRecycleInstancesDetailsRequest): Promise<ListRecycleInstancesDetailsResponse> {
        const options = ParamCreater().listRecycleInstancesDetails(listRecycleInstancesDetailsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询可用于备份恢复的实例列表，实例信息要符合备份条件。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询可用于备份恢复的实例列表
     * @param {string} sourceInstanceId 源实例id，需要恢复的实例ID。
     * @param {string} [xLanguage] 语言。
     * @param {string} [backupId] 实例备份信息ID，根据备份ID查询实例拓扑信息，过滤查询出来的实例，包含节点数，副本数等。参数为空时，根据restore_time查询。。
     * @param {string} [restoreTime] 恢复点，当备份ID为空时，通过此参数查询实例拓扑信息，过滤实例列表。
     * @param {number} [offset] 索引位置，偏移量。从第一条数据偏移offset条数据后开始查询，默认为0（偏移0条数据，表示从第一条数据开始查询），必须为数字，不能为负数。
     * @param {number} [limit] 查询记录数。默认为100，不能为负数，最小值为1，最大值为100。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listRestorableInstances(listRestorableInstancesRequest?: ListRestorableInstancesRequest): Promise<ListRestorableInstancesResponse> {
        const options = ParamCreater().listRestorableInstances(listRestorableInstancesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询可用于备份恢复的实例列表，实例信息要符合备份条件。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询可用于备份恢复的实例列表
     * @param {string} sourceInstanceId 源实例id，需要恢复的实例ID。
     * @param {string} [xLanguage] 语言。
     * @param {string} [backupId] 实例备份信息ID，根据备份ID查询实例拓扑信息，过滤查询出来的实例，包含节点数，副本数等。参数为空时，根据restore_time查询。。
     * @param {string} [restoreTime] 恢复点，当备份ID为空时，通过此参数查询实例拓扑信息，过滤实例列表。
     * @param {number} [offset] 索引位置，偏移量。从第一条数据偏移offset条数据后开始查询，默认为0（偏移0条数据，表示从第一条数据开始查询），必须为数字，不能为负数。
     * @param {number} [limit] 查询记录数。默认为100，不能为负数，最小值为1，最大值为100。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listRestorableInstancesDetails(listRestorableInstancesDetailsRequest?: ListRestorableInstancesDetailsRequest): Promise<ListRestorableInstancesDetailsResponse> {
        const options = ParamCreater().listRestorableInstancesDetails(listRestorableInstancesDetailsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询可恢复时间段。
     * 如果您备份策略中的保存天数设置较长，建议您传入查询日期“date”。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询可恢复时间段
     * @param {string} instanceId 实例ID。
     * @param {string} date 所需查询的日期，为yyyy-mm-dd字符串格式，时区为UTC。
     * @param {string} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listRestoreTimes(listRestoreTimesRequest?: ListRestoreTimesRequest): Promise<ListRestoreTimesResponse> {
        const options = ParamCreater().listRestoreTimes(listRestoreTimesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查看定时任务列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查看定时任务列表
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言。
     * @param {string} [instanceId] 实例id。
     * @param {'Running' | 'Completed' | 'Failed' | 'Canceled' | 'Pending'} [status] 任务状态。
     * @param {'HOTFIX_VERSION_UPGRADE'} [name] 任务名称。
     * @param {string} [startTime] 开始时间，格式为yyyy-mm-ddThh:mm:ssZ。
     * @param {string} [endTime] 结束时间，格式为yyyy-mm-ddThh:mm:ssZ。
     * @param {number} [offset] 索引位置，偏移量。从第一条数据偏移offset条数据后开始查询，默认为0（偏移0条数据，表示从第一条数据开始查询），必须为数字，不能为负数。
     * @param {number} [limit] 查询记录数。默认为100，不能为负数，最小值为1，最大值为100
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listScheduleTask(listScheduleTaskRequest?: ListScheduleTaskRequest): Promise<ListScheduleTaskResponse> {
        const options = ParamCreater().listScheduleTask(listScheduleTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定数据库引擎对应的磁盘类型。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询数据库磁盘类型
     * @param {string} version 数据库版本号。
     * @param {string} [xLanguage] 语言
     * @param {'enterprise' | 'centralization_standard'} [haMode] 实例类型： enterprise(企业版)， centralization_standard(主备版)，不区分大小写。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listStorageTypes(listStorageTypesRequest?: ListStorageTypesRequest): Promise<ListStorageTypesResponse> {
        const options = ParamCreater().listStorageTypes(listStorageTypesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询支持的插件列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询支持的插件列表
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listSupportKernelPlugins(listSupportKernelPluginsRequest?: ListSupportKernelPluginsRequest): Promise<ListSupportKernelPluginsResponse> {
        const options = ParamCreater().listSupportKernelPlugins(listSupportKernelPluginsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取任务中心的任务列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询任务列表
     * @param {string} [xLanguage] 语言。
     * @param {'Running' | 'Completed' | 'Failed'} [status] 任务状态。
     * @param {'CreateGaussDBV5Instance' | 'BackupSnapshotGaussDBV5InInstance' | 'CloneGaussDBV5NewInstance' | 'RestoreGaussDBV5InInstance' | 'RestoreGaussDBV5InInstanceToExistedInst' | 'DeleteGaussDBV5Instance' | 'EnlargeGaussDBV5Volume' | 'ResizeGaussDBV5Flavor' | 'GaussDBV5ExpandClusterCN' | 'GaussDBV5ExpandClusterDN'} [name] 任务名称。
     * @param {string} [startTime] 开始时间。
     * @param {string} [endTime] 结束时间。
     * @param {number} [offset] 索引位置，偏移量。从第一条数据偏移offset条数据后开始查询，默认为0（偏移0条数据，表示从第一条数据开始查询），必须为数字，不能为负数。
     * @param {number} [limit] 查询记录数。默认为100，不能为负数，最小值为1，最大值为100
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
     * 修改企业项目配额。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改企业项目配额
     * @param {ModifyEpsQuotaRequestBody} modifyEpsQuotaRequestbody 请求体。
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言。默认值：en-us。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public modifyEpsQuota(modifyEpsQuotaRequest?: ModifyEpsQuotaRequest): Promise<ModifyEpsQuotaResponse> {
        const options = ParamCreater().modifyEpsQuota(modifyEpsQuotaRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 重置参数模板。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 重置参数模板
     * @param {string} configId 需重置的参数模板ID。
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public resetConfiguration(resetConfigurationRequest?: ResetConfigurationRequest): Promise<ResetConfigurationResponse> {
        const options = ParamCreater().resetConfiguration(resetConfigurationRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 重置容灾网络等配置。1.将自动“创建委托”以授权DBS云服务访问VPC资源信息、查询IAAS接口。2.重置实例容灾网络等配置。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 重置容灾配置
     * @param {string} instanceId 实例id。
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言。
     * @param {ResetDrConfigRequestBody} [resetDrConfigRequestBody] 重置容灾配置请求参数。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public resetDrConfig(resetDrConfigRequest?: ResetDrConfigRequest): Promise<ResetDrConfigResponse> {
        const options = ParamCreater().resetDrConfig(resetDrConfigRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 重置数据库密码。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 重置数据库密码。
     * @param {string} instanceId 实例ID，严格匹配UUID规则。
     * @param {PwdResetRequest} pwdResetRequestBody 请求体。
     * @param {string} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public resetPwd(resetPwdRequest?: ResetPwdRequest): Promise<ResetPwdResponse> {
        const options = ParamCreater().resetPwd(resetPwdRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * GaussDB数据库实例规格变更
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary GaussDB数据库实例规格变更
     * @param {string} instanceId 实例ID。
     * @param {OpenGaussResizeRequest} createInstanceRequest 请求体
     * @param {string} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public resizeInstanceFlavor(resizeInstanceFlavorRequest?: ResizeInstanceFlavorRequest): Promise<ResizeInstanceFlavorResponse> {
        const options = ParamCreater().resizeInstanceFlavor(resizeInstanceFlavorRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 重启数据库实例。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 重启数据库实例
     * @param {string} instanceId 实例ID。
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public restartInstance(restartInstanceRequest?: RestartInstanceRequest): Promise<RestartInstanceResponse> {
        const options = ParamCreater().restartInstance(restartInstanceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 备份恢复到当前实例
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 备份恢复到当前实例
     * @param {RestoreInstanceRequestBody} restoreInstanceRequestBody 请求体。
     * @param {string} [xLanguage] 语言 Default:en-us;Enum:zh-cn,en-us;
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public restoreInstance(restoreInstanceRequest?: RestoreInstanceRequest): Promise<RestoreInstanceResponse> {
        const options = ParamCreater().restoreInstance(restoreInstanceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 配置插件拓展能力
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 配置插件拓展能力
     * @param {string} instanceId 配置插件拓展能力的实例ID
     * @param {ResumePluginExtensionsRequestBody} resumePluginExtensionsRequestBody 配置实例插件拓展能力请求参数
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public resumePluginExtensions(resumePluginExtensionsRequest?: ResumePluginExtensionsRequest): Promise<ResumePluginExtensionsResponse> {
        const options = ParamCreater().resumePluginExtensions(resumePluginExtensionsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * CN横向扩容/DN分片扩容/磁盘扩容
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary CN横向扩容/DN分片扩容/磁盘扩容
     * @param {string} instanceId 实例ID。
     * @param {OpenGaussInstanceActionRequest} instanceActionRequest 请求体
     * @param {string} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public runInstanceAction(runInstanceActionRequest?: RunInstanceActionRequest): Promise<RunInstanceActionResponse> {
        const options = ParamCreater().runInstanceAction(runInstanceActionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询磁盘自动扩容策略
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询磁盘自动扩容策略
     * @param {string} instanceId 实例ID。
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public searchAutoEnlargePolicy(searchAutoEnlargePolicyRequest?: SearchAutoEnlargePolicyRequest): Promise<SearchAutoEnlargePolicyResponse> {
        const options = ParamCreater().searchAutoEnlargePolicy(searchAutoEnlargePolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 设置自动备份策略。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 设置自动备份策略。
     * @param {string} instanceId 实例ID，严格匹配UUID规则。
     * @param {SetBackupPolicyRequestBody} setBackupPolicyRequestBody 请求体。
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言。默认值：en-us。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public setBackupPolicy(setBackupPolicyRequest?: SetBackupPolicyRequest): Promise<SetBackupPolicyResponse> {
        const options = ParamCreater().setBackupPolicy(setBackupPolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 重置指定数据库帐号的密码。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 重置数据库帐号密码
     * @param {string} instanceId 实例ID。
     * @param {DbUserPwdRequest} dbUserPwdRequestBody 请求体。
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public setDbUserPwd(setDbUserPwdRequest?: SetDbUserPwdRequest): Promise<SetDbUserPwdResponse> {
        const options = ParamCreater().setDbUserPwd(setDbUserPwdRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 配置插件license
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 配置插件license
     * @param {string} instanceId 需要配置license的实例
     * @param {SetKernelPluginLicenseRequestBody} setKernelPluginLicenseRequestBody 安装插件的请求参数
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public setKernelPluginLicense(setKernelPluginLicenseRequest?: SetKernelPluginLicenseRequest): Promise<SetKernelPluginLicenseResponse> {
        const options = ParamCreater().setKernelPluginLicense(setKernelPluginLicenseRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 设置自动备份策略
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 设置自动备份策略
     * @param {string} instanceId 实例ID，严格匹配UUID规则。
     * @param {SetNewBackupPolicyRequestBody} setNewBackupPolicyRequestBody 设置自动备份策略请求体
     * @param {string} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public setNewBackupPolicy(setNewBackupPolicyRequest?: SetNewBackupPolicyRequest): Promise<SetNewBackupPolicyResponse> {
        const options = ParamCreater().setNewBackupPolicy(setNewBackupPolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 设置回收站策略。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 设置回收站策略
     * @param {RecyclePolicyRequestBody} recyclePolicyRequestBody 请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public setRecyclePolicy(setRecyclePolicyRequest?: SetRecyclePolicyRequest): Promise<SetRecyclePolicyResponse> {
        const options = ParamCreater().setRecyclePolicy(setRecyclePolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询自动备份策略。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询自动备份策略
     * @param {string} instanceId 实例ID。
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言。默认值：en-us。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showBackupPolicy(showBackupPolicyRequest?: ShowBackupPolicyRequest): Promise<ShowBackupPolicyResponse> {
        const options = ParamCreater().showBackupPolicy(showBackupPolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询实例是否发生过主备切换而导致主机负载不均衡。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询实例主备平衡状态
     * @param {string} instanceId 实例ID。
     * @param {string} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showBalanceStatus(showBalanceStatusRequest?: ShowBalanceStatusRequest): Promise<ShowBalanceStatusResponse> {
        const options = ParamCreater().showBalanceStatus(showBalanceStatusRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询批量实例可升级的版本和升级类型。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询批量实例可升级的版本和升级类型。
     * @param {UpgradeInstancesRequestBody} showBatchUpgradeCandidateVersionsRequestBody 请求体
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言[zh-cn, en-us]。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showBatchUpgradeCandidateVersions(showBatchUpgradeCandidateVersionsRequest?: ShowBatchUpgradeCandidateVersionsRequest): Promise<ShowBatchUpgradeCandidateVersionsResponse> {
        const options = ParamCreater().showBatchUpgradeCandidateVersions(showBatchUpgradeCandidateVersionsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据参数模板ID获取指定参数模板详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询参数模板详情
     * @param {string} configId 参数模板ID
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言,默认：en-us。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showConfigurationDetail(showConfigurationDetailRequest?: ShowConfigurationDetailRequest): Promise<ShowConfigurationDetailResponse> {
        const options = ParamCreater().showConfigurationDetail(showConfigurationDetailRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询实例容灾监控实时状态。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询实例容灾监控实时状态
     * @param {string} instanceId 实例id。
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言。
     * @param {'stream' | 'dorado'} [disasterType] 容灾类型
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showCrossCloudDisasterInstanceMonitor(showCrossCloudDisasterInstanceMonitorRequest?: ShowCrossCloudDisasterInstanceMonitorRequest): Promise<ShowCrossCloudDisasterInstanceMonitorResponse> {
        const options = ParamCreater().showCrossCloudDisasterInstanceMonitor(showCrossCloudDisasterInstanceMonitorRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询容灾关系列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询容灾关系列表
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言。
     * @param {number} [limit] 查询记录数。默认为100，不能为负数，最小值为1，最大值为100。
     * @param {number} [offset] 索引位置，偏移量。从第一条数据偏移offset条数据后开始查询，默认为0（偏移0条数据，表示从第一条数据开始查询），必须为数字，不能为负数。
     * @param {string} [instanceName] 实例名称，可查询过滤本端实例名称。
     * @param {string} [instanceId] 实例id，可查询过滤本端实例id。
     * @param {'master' | 'disaster'} [drRole] 容灾角色 - master 主 - disaster 备
     * @param {'stream' | 'dorado'} [drType] 容灾类型 - stream - dorado
     * @param {'normal' | 'failover' | 'pending' | 'pre_check_failed' | 'pre_checking'} [drStatus] 状态 - normal - failover - pending - pre_check_failed - pre_checking
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showCrossCloudDisasterRelations(showCrossCloudDisasterRelationsRequest?: ShowCrossCloudDisasterRelationsRequest): Promise<ShowCrossCloudDisasterRelationsResponse> {
        const options = ParamCreater().showCrossCloudDisasterRelations(showCrossCloudDisasterRelationsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据解决方案模板名称或实例ID查询副本数、分片数、节点数
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询解决方案模板配置
     * @param {string} [xLanguage] 语言。
     * @param {'triset' | 'single'} [solution] 解决方案模板名称。
     * @param {string} [instanceId] 实例ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showDeploymentForm(showDeploymentFormRequest?: ShowDeploymentFormRequest): Promise<ShowDeploymentFormResponse> {
        const options = ParamCreater().showDeploymentForm(showDeploymentFormRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询数据库错误日志采集的开关状态。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询错误日志采集开关状态
     * @param {string} instanceId 实例ID。
     * @param {string} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showErrorLogSwitchStatus(showErrorLogSwitchStatusRequest?: ShowErrorLogSwitchStatusRequest): Promise<ShowErrorLogSwitchStatusResponse> {
        const options = ParamCreater().showErrorLogSwitchStatus(showErrorLogSwitchStatusRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取指定实例的参数模板。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取指定实例的参数模板
     * @param {string} instanceId 实例ID。
     * @param {string} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showInstanceConfiguration(showInstanceConfigurationRequest?: ShowInstanceConfigurationRequest): Promise<ShowInstanceConfigurationResponse> {
        const options = ParamCreater().showInstanceConfiguration(showInstanceConfigurationRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定实例的存储使用空间和最大空间。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询实例存储空间使用信息
     * @param {string} instanceId 实例ID。
     * @param {string} [xLanguage] 语言。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showInstanceDisk(showInstanceDiskRequest?: ShowInstanceDiskRequest): Promise<ShowInstanceDiskResponse> {
        const options = ParamCreater().showInstanceDisk(showInstanceDiskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取指定实例的参数模板。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取指定实例的参数模板
     * @param {string} instanceId 实例ID。
     * @param {string} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showInstanceParamGroup(showInstanceParamGroupRequest?: ShowInstanceParamGroupRequest): Promise<ShowInstanceParamGroupResponse> {
        const options = ParamCreater().showInstanceParamGroup(showInstanceParamGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取指定实例的参数模板。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取指定实例的参数模板
     * @param {string} instanceId 实例ID。
     * @param {string} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showInstanceParamGroupDetail(showInstanceParamGroupDetailRequest?: ShowInstanceParamGroupDetailRequest): Promise<ShowInstanceParamGroupDetailResponse> {
        const options = ParamCreater().showInstanceParamGroupDetail(showInstanceParamGroupDetailRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据时间点或者备份文件查询原实例信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 根据时间点或者备份文件查询原实例信息
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言。默认值：en-us。
     * @param {string} [instanceId] 原实例ID。  (instance_id 、restore_time为一组)
     * @param {string} [restoreTime] UNIX时间戳格式，单位是毫秒，时区是UTC，某时间点实例的信息。  (instance_id 、restore_time为一组)
     * @param {string} [backupId] 备份ID。  (backup_id为一组)  备份ID不为空时，可以不需要实例ID和时间戳。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showInstanceSnapshot(showInstanceSnapshotRequest?: ShowInstanceSnapshotRequest): Promise<ShowInstanceSnapshotResponse> {
        const options = ParamCreater().showInstanceSnapshot(showInstanceSnapshotRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取指定ID的任务信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取指定ID的任务信息。
     * @param {string} id 任务ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showJobDetail(showJobDetailRequest?: ShowJobDetailRequest): Promise<ShowJobDetailResponse> {
        const options = ParamCreater().showJobDetail(showJobDetailRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据参数模板ID获取指定参数模板详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询参数模板详情
     * @param {string} configId 参数模板ID
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言,默认：en-us。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showParameterGroupDetail(showParameterGroupDetailRequest?: ShowParameterGroupDetailRequest): Promise<ShowParameterGroupDetailResponse> {
        const options = ParamCreater().showParameterGroupDetail(showParameterGroupDetailRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询租户的实例配额
     * @param {string} [xLanguage] 语言
     * @param {'instance'} [type] \&#39;功能说明：根据type过滤查询指定类型的配额\&#39; 取值范围：instance
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showProjectQuotas(showProjectQuotasRequest?: ShowProjectQuotasRequest): Promise<ShowProjectQuotasResponse> {
        const options = ParamCreater().showProjectQuotas(showProjectQuotasRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查看回收站的回收策略。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查看回收站策略
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言。默认值：en-us。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showRecyclePolicy(showRecyclePolicyRequest?: ShowRecyclePolicyRequest): Promise<ShowRecyclePolicyResponse> {
        const options = ParamCreater().showRecyclePolicy(showRecyclePolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询慢日志下载信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询慢日志下载信息
     * @param {string} instanceId 实例ID，严格匹配UUID规则。
     * @param {string} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showSlowLogDownload(showSlowLogDownloadRequest?: ShowSlowLogDownloadRequest): Promise<ShowSlowLogDownloadResponse> {
        const options = ParamCreater().showSlowLogDownload(showSlowLogDownloadRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据时间点或者备份文件查询原实例信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 根据时间点或者备份文件查询原实例信息
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言。默认值：en-us。
     * @param {string} [instanceId] 原实例ID。  (instance_id 、restore_time为一组)
     * @param {string} [restoreTime] UNIX时间戳格式，单位是毫秒，时区是UTC，某时间点实例的信息。  (instance_id 、restore_time为一组)
     * @param {string} [backupId] 备份ID。  (backup_id为一组)  备份ID不为空时，可以不需要实例ID和时间戳。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showSourceInstanceDetail(showSourceInstanceDetailRequest?: ShowSourceInstanceDetailRequest): Promise<ShowSourceInstanceDetailResponse> {
        const options = ParamCreater().showSourceInstanceDetail(showSourceInstanceDetailRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询实例SSL证书下载地址。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询实例SSL证书下载地址
     * @param {string} instanceId 实例ID。
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showSslCertDownloadLink(showSslCertDownloadLinkRequest?: ShowSslCertDownloadLinkRequest): Promise<ShowSslCertDownloadLinkResponse> {
        const options = ParamCreater().showSslCertDownloadLink(showSslCertDownloadLinkRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询实例可升级版本。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询实例可升级版本
     * @param {string} instanceId 实例ID。
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言[zh-cn, en-us]。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showUpgradeCandidateVersions(showUpgradeCandidateVersionsRequest?: ShowUpgradeCandidateVersionsRequest): Promise<ShowUpgradeCandidateVersionsResponse> {
        const options = ParamCreater().showUpgradeCandidateVersions(showUpgradeCandidateVersionsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询实例可升级版本。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询实例可升级版本
     * @param {string} instanceId 实例ID。
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言[zh-cn, en-us]。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showUpgradeCandidateVersionsDetails(showUpgradeCandidateVersionsDetailsRequest?: ShowUpgradeCandidateVersionsDetailsRequest): Promise<ShowUpgradeCandidateVersionsDetailsResponse> {
        const options = ParamCreater().showUpgradeCandidateVersionsDetails(showUpgradeCandidateVersionsDetailsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 启动数据库，同时支持节点级别的启动操作
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 启动数据库
     * @param {string} instanceId 需要启动的实例的ID
     * @param {StartInstanceRequestBody} startInstanceRequestBody 启动实例请求参数
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public startInstance(startInstanceRequest?: StartInstanceRequest): Promise<StartInstanceResponse> {
        const options = ParamCreater().startInstance(startInstanceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 开启指定实例的M兼容端口。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 开启M兼容端口服务
     * @param {string} instanceId 实例ID。
     * @param {StartMySQLCompatibilityRequestBody} startMySQLCompatibilityRequestBody 开启M兼容端口服务请求体。
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言。默认值：en-us。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public startMysqlCompatibility(startMysqlCompatibilityRequest?: StartMysqlCompatibilityRequest): Promise<StartMysqlCompatibilityResponse> {
        const options = ParamCreater().startMysqlCompatibility(startMysqlCompatibilityRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 停止进行中的备份，包括全备和差备。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 停止备份
     * @param {string} instanceId 实例ID。
     * @param {string} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public stopBackup(stopBackupRequest?: StopBackupRequest): Promise<StopBackupResponse> {
        const options = ParamCreater().stopBackup(stopBackupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 停止数据库,同时支持节点级别的停止操作
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 停止数据库
     * @param {string} instanceId 需要停止的实例的ID
     * @param {StopInstanceRequestBody} stopInstanceRequestBody 启动实例请求参数
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public stopInstance(stopInstanceRequest?: StopInstanceRequest): Promise<StopInstanceResponse> {
        const options = ParamCreater().stopInstance(stopInstanceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 指定实例变更参数模板。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 应用参数模板
     * @param {string} configId 参数模板ID。
     * @param {ApplyConfigurationRequestBody} applyConfigurationRequestBody 请求体。
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public switchConfiguration(switchConfigurationRequest?: SwitchConfigurationRequest): Promise<SwitchConfigurationResponse> {
        const options = ParamCreater().switchConfiguration(switchConfigurationRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 支持用户对单个或多个DN分片做主备切换，同一分组内只能指定一个新的备节点进行升主操作。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 分片节点主备切换。
     * @param {string} instanceId 实例ID。
     * @param {SwitchShardRequestBody} switchShardRequestBody 请求体。
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public switchShard(switchShardRequest?: SwitchShardRequest): Promise<SwitchShardResponse> {
        const options = ParamCreater().switchShard(switchShardRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 打开高级特性开关。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 开启特性
     * @param {string} instanceId 实例ID。
     * @param {UpdateFeaturesRequestBody} updateFeaturesRequestBody 开启高级特性请求体。
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateFeatures(updateFeaturesRequest?: UpdateFeaturesRequest): Promise<UpdateFeaturesResponse> {
        const options = ParamCreater().updateFeatures(updateFeaturesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改指定实例的参数。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改指定实例的参数
     * @param {string} instanceId 实例ID。
     * @param {OpenGaussModifyInstanceConfigurationRequest} modifyInstanceConfigurationRequest 请求体
     * @param {string} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateInstanceConfiguration(updateInstanceConfigurationRequest?: UpdateInstanceConfigurationRequest): Promise<UpdateInstanceConfigurationResponse> {
        const options = ParamCreater().updateInstanceConfiguration(updateInstanceConfigurationRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改实例名称。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改实例名称
     * @param {string} instanceId 实例ID，严格匹配UUID规则。
     * @param {UpdateNameRequestBody} updateNameRequestBody 请求体。
     * @param {string} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateInstanceName(updateInstanceNameRequest?: UpdateInstanceNameRequest): Promise<UpdateInstanceNameResponse> {
        const options = ParamCreater().updateInstanceName(updateInstanceNameRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新指定实例的M兼容端口服务配置。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新/关闭M兼容端口服务
     * @param {string} instanceId 实例ID。
     * @param {UpdateMySQLCompatibilityRequestBody} updateMySQLCompatibilityRequestBody 更新启M兼容端口服务配置请求体。
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言。默认值：en-us。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateMysqlCompatibility(updateMysqlCompatibilityRequest?: UpdateMysqlCompatibilityRequest): Promise<UpdateMysqlCompatibilityResponse> {
        const options = ParamCreater().updateMysqlCompatibility(updateMysqlCompatibilityRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * GaussDB(for openGauss)实例版本升级。包括灰度升级，就地升级，热补丁升级等三种升级方式。 
     * 就地升级：
     * 就地升级需要停止业务进行，会一次性升级集群中所有节点。就地升级需要暂停业务30分钟来升级。 
     * 灰度升级： 
     * 升级自动提交：所有节点进程一起升级，在升级过程中有大概10秒的业务中断，不阻塞其他业务操作。 
     * 升级待观察：升级待观察，将数据库升级过程细分为升级，提交两个阶段。升级阶段可以根据部署方式细分为按分片或者按az的滚动升级，提交阶段可以对升级完成后的实例进行业务测试，根据需要可以选择提交升级，或者升级回退。每个主dn或者cn组件升级就有一次10秒业务中断。升级过程均是先管理面，再数据面，由备到主的升级方式。 分布式实例：根据分片数滚动升级，每次滚动升级可以根据选择的分片数进行指定分片数量的节点进行升级。 主备版实例：根据AZ数进行滚动升级，每次滚动升级可以根据选择的AZ进行1个分区或者多个分区进行升级。 
     * 提交升级：提交升级。在升级完成，进入提交阶段时。业务测试正常后提交升级，完成本次升级流程。
     * 升级回退：升级回退，在升级完成，进入提交阶段时。可以根据需要回退本次升级，回退到升级前的版本。
     * 热补丁升级： 
     * 升级自动提交：热补丁自动升级并提交，中间无业务中断，仅修复产品bug。 
     * 升级回退：热补丁回退，无业务中断时间
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 实例内核版本升级
     * @param {string} instanceId 实例ID。
     * @param {OpenGaussUpgradeRequest} upgradeInstanceVersionRequestBody 请求体
     * @param {string} [xLanguage] 语言。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public upgradeInstanceVersion(upgradeInstanceVersionRequest?: UpgradeInstanceVersionRequest): Promise<UpgradeInstanceVersionResponse> {
        const options = ParamCreater().upgradeInstanceVersion(upgradeInstanceVersionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * GaussDB批量实例版本升级。包括灰度升级，就地升级、热补丁升级三种升级方式。
     * 就地升级：
     * 就地升级需要停止业务进行，会一次性升级集群中所有节点。就地升级需要暂停业务30分钟来升级。
     * 灰度升级：
     * 升级自动提交：所有节点进程一起升级，在升级过程中有大概10秒的业务中断，不阻塞其他业务操作。
     * 升级待观察：升级待观察，将数据库升级过程细分为升级，提交两个阶段。升级阶段可以根据部署方式细分为按分片或者按az的滚动升级，提交阶段可以对升级完成后的实例进行业务测试，根据需要可以选择提交升级，或者升级回退。每个主dn或者cn组件升级就有一次10秒业务中断。升级过程均是先管理面，再数据面，由备到主的升级方式。 分布式实例：根据分片数滚动升级，每次滚动升级可以根据选择的分片数进行指定分片数量的节点进行升级。 主备版实例：根据AZ数进行滚动升级，每次滚动升级可以根据选择的AZ进行1个分区或者多个分区进行升级。
     * 热补丁升级：
     * 升级自动提交：热补丁自动升级并提交，中间无业务中断，仅修复产品bug。
     * 提交升级：提交升级。在升级完成，进入提交阶段时。业务测试正常后提交升级，完成本次升级流程。
     * 升级回退：升级回退，在升级完成，进入提交阶段时。可以根据需要回退本次升级，回退到升级前的版本。
     * 批量实例可升级版本大于当前所有实例的引擎版本，且选择的所有实例，其升级方式和操作方式要保持一致。
     * 若批量实例升级方式是灰度升级，默认升级所有az和分片。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量实例内核版本升级
     * @param {GaussDBUpgradeInstancesVersionRequest} upgradeInstancesVersionRequestBody 请求体
     * @param {string} [xLanguage] 语言。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public upgradeInstancesVersion(upgradeInstancesVersionRequest?: UpgradeInstancesVersionRequest): Promise<UpgradeInstancesVersionResponse> {
        const options = ParamCreater().upgradeInstancesVersion(upgradeInstancesVersionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 校验参数组名称是否存在。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 校验参数组名称是否存在
     * @param {string} name 参数组名称。
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public validateParaGroupName(validateParaGroupNameRequest?: ValidateParaGroupNameRequest): Promise<ValidateParaGroupNameResponse> {
        const options = ParamCreater().validateParaGroupName(validateParaGroupNameRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 校验数据库root用户密码的安全性。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 弱密码校验
     * @param {WeakPasswordRequestBody} weakPasswordRequestBody 弱密码请求参数。
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言。默认值：en-us。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public validateWeakPassword(validateWeakPasswordRequest?: ValidateWeakPasswordRequest): Promise<ValidateWeakPasswordResponse> {
        const options = ParamCreater().validateWeakPassword(validateWeakPasswordRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据具体范围和类型，进行限流任务的创建
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建限流任务
     * @param {string} instanceId 实例ID。
     * @param {CreateLimitTaskRequestBody} createLimitTaskRequestBody 请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createLimitTask(createLimitTaskRequest?: CreateLimitTaskRequest): Promise<CreateLimitTaskResponse> {
        const options = ParamCreater().createLimitTask(createLimitTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据task_id进行限流任务的删除
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除限流任务
     * @param {string} taskId 限流任务id。
     * @param {string} instanceId 实例ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteLimitTask(deleteLimitTaskRequest?: DeleteLimitTaskRequest): Promise<DeleteLimitTaskResponse> {
        const options = ParamCreater().deleteLimitTask(deleteLimitTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据指定条件查询限流任务列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 根据指定条件查询限流任务列表
     * @param {string} instanceId 实例ID。
     * @param {string} [taskScope] 限流任务范围，目前支持SQL,SESSION。
     * @param {string} [limitType] 限流类型，支持SQL_ID、SQL_TYPE、SESSION_ACTIVE_MAX_COUNT类型。
     * @param {string} [limitTypeValue] 限流类型值，支持模糊匹配。
     * @param {string} [taskName] 限流任务名，支持模糊匹配。
     * @param {string} [sqlModel] sql模板，支持模糊匹配。
     * @param {string} [ruleName] 规则名。
     * @param {string} [startTime] 限流任务开始时间，格式为yyyy-mm-ddThh:mm:ssZ,当前时间指UTC时间。
     * @param {string} [endTime] 限流任务结束时间，格式为yyyy-mm-ddThh:mm:ssZ,当前时间指UTC时间。
     * @param {number} [offset] 索引位置，偏移量。从第一条数据偏移offset条数据后开始查询，默认为0（偏移0条数据，表示从第一条数据开始查询），必须为数字，不能为负数。  取值范围：0 - 10000
     * @param {number} [limit] 查询记录数。默认为10，不能为负数，最小值为1，最大值为100。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listLimitTask(listLimitTaskRequest?: ListLimitTaskRequest): Promise<ListLimitTaskResponse> {
        const options = ParamCreater().listLimitTask(listLimitTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询节点的sql模板列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询节点的sql模板列表
     * @param {string} instanceId 实例ID。
     * @param {string} nodeId 节点id。
     * @param {string} [sqlModel] sql模板。
     * @param {number} [offset] 索引位置，偏移量。从第一条数据偏移offset条数据后开始查询，默认为0（偏移0条数据，表示从第一条数据开始查询），必须为数字，不能为负数。  取值范围：0 - 10000
     * @param {number} [limit] 查询记录数。默认为10，不能为负数，最小值为1，最大值为100。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listNodeLimitSqlModel(listNodeLimitSqlModelRequest?: ListNodeLimitSqlModelRequest): Promise<ListNodeLimitSqlModelResponse> {
        const options = ParamCreater().listNodeLimitSqlModel(listNodeLimitSqlModelRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询限流任务详情
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询限流任务详情
     * @param {string} taskId 限流任务id。
     * @param {string} instanceId 实例ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showLimitTask(showLimitTaskRequest?: ShowLimitTaskRequest): Promise<ShowLimitTaskResponse> {
        const options = ParamCreater().showLimitTask(showLimitTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 同步内核侧sql限流数据至管控侧
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 同步内核侧sql限流数据至管控侧
     * @param {string} instanceId 实例ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public syncLimitData(syncLimitDataRequest?: SyncLimitDataRequest): Promise<SyncLimitDataResponse> {
        const options = ParamCreater().syncLimitData(syncLimitDataRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据新的条件进行限流任务的更新
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改限流任务
     * @param {string} taskId 限流任务id。
     * @param {string} instanceId 实例ID。
     * @param {UpdateLimitTaskRequestBody} updateLimitTaskRequestBody 请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateLimitTask(updateLimitTaskRequest?: UpdateLimitTaskRequest): Promise<UpdateLimitTaskResponse> {
        const options = ParamCreater().updateLimitTask(updateLimitTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * 对指定实例添加用户标签信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        addInstanceTags(addInstanceTagsRequest?: AddInstanceTagsRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/{instance_id}/tags",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let xLanguage;

            if (addInstanceTagsRequest !== null && addInstanceTagsRequest !== undefined) {
                if (addInstanceTagsRequest instanceof AddInstanceTagsRequest) {
                    instanceId = addInstanceTagsRequest.instanceId;
                    body = addInstanceTagsRequest.body
                    xLanguage = addInstanceTagsRequest.xLanguage;
                } else {
                    instanceId = addInstanceTagsRequest['instance_id'];
                    body = addInstanceTagsRequest['body'];
                    xLanguage = addInstanceTagsRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling addInstanceTags.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 在指定实例的数据库中, 设置帐号的权限。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        allowDbPrivileges(allowDbPrivilegesRequest?: AllowDbPrivilegesRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/{instance_id}/db-privilege",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let xLanguage;

            if (allowDbPrivilegesRequest !== null && allowDbPrivilegesRequest !== undefined) {
                if (allowDbPrivilegesRequest instanceof AllowDbPrivilegesRequest) {
                    instanceId = allowDbPrivilegesRequest.instanceId;
                    body = allowDbPrivilegesRequest.body
                    xLanguage = allowDbPrivilegesRequest.xLanguage;
                } else {
                    instanceId = allowDbPrivilegesRequest['instance_id'];
                    body = allowDbPrivilegesRequest['body'];
                    xLanguage = allowDbPrivilegesRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling allowDbPrivileges.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 在数据库中设置角色的权限。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        allowDbRolePrivileges(allowDbRolePrivilegesRequest?: AllowDbRolePrivilegesRequest) {
            const options = {
                method: "POST",
                url: "/v3.1/{project_id}/instances/{instance_id}/db-privilege",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let xLanguage;

            if (allowDbRolePrivilegesRequest !== null && allowDbRolePrivilegesRequest !== undefined) {
                if (allowDbRolePrivilegesRequest instanceof AllowDbRolePrivilegesRequest) {
                    instanceId = allowDbRolePrivilegesRequest.instanceId;
                    body = allowDbRolePrivilegesRequest.body
                    xLanguage = allowDbRolePrivilegesRequest.xLanguage;
                } else {
                    instanceId = allowDbRolePrivilegesRequest['instance_id'];
                    body = allowDbRolePrivilegesRequest['body'];
                    xLanguage = allowDbRolePrivilegesRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling allowDbRolePrivileges.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 实例下的节点绑定弹性公网IP/解绑弹性公网IP
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        attachEip(attachEipRequest?: AttachEipRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/{instance_id}/nodes/{node_id}/public-ip",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let nodeId;
            
            let xLanguage;

            if (attachEipRequest !== null && attachEipRequest !== undefined) {
                if (attachEipRequest instanceof AttachEipRequest) {
                    instanceId = attachEipRequest.instanceId;
                    nodeId = attachEipRequest.nodeId;
                    body = attachEipRequest.body
                    xLanguage = attachEipRequest.xLanguage;
                } else {
                    instanceId = attachEipRequest['instance_id'];
                    nodeId = attachEipRequest['node_id'];
                    body = attachEipRequest['body'];
                    xLanguage = attachEipRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling attachEip.');
            }
            if (nodeId === null || nodeId === undefined) {
            throw new RequiredError('nodeId','Required parameter nodeId was null or undefined when calling attachEip.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId,'node_id': nodeId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询批量实例可升级的版本和升级类型。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchShowUpgradeCandidateVersions(batchShowUpgradeCandidateVersionsRequest?: BatchShowUpgradeCandidateVersionsRequest) {
            const options = {
                method: "POST",
                url: "/v3.1/{project_id}/instances/db-upgrade/candidate-versions",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xLanguage;

            if (batchShowUpgradeCandidateVersionsRequest !== null && batchShowUpgradeCandidateVersionsRequest !== undefined) {
                if (batchShowUpgradeCandidateVersionsRequest instanceof BatchShowUpgradeCandidateVersionsRequest) {
                    body = batchShowUpgradeCandidateVersionsRequest.body
                    xLanguage = batchShowUpgradeCandidateVersionsRequest.xLanguage;
                } else {
                    body = batchShowUpgradeCandidateVersionsRequest['body'];
                    xLanguage = batchShowUpgradeCandidateVersionsRequest['X-Language'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
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
         * 取消定时任务
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        cancelScheduleTask(cancelScheduleTaskRequest?: CancelScheduleTaskRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/instances/schedule-task/{task_id}/cancel",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let taskId;
            
            let xLanguage;

            if (cancelScheduleTaskRequest !== null && cancelScheduleTaskRequest !== undefined) {
                if (cancelScheduleTaskRequest instanceof CancelScheduleTaskRequest) {
                    taskId = cancelScheduleTaskRequest.taskId;
                    xLanguage = cancelScheduleTaskRequest.xLanguage;
                } else {
                    taskId = cancelScheduleTaskRequest['task_id'];
                    xLanguage = cancelScheduleTaskRequest['X-Language'];
                }
            }

        
            if (taskId === null || taskId === undefined) {
            throw new RequiredError('taskId','Required parameter taskId was null or undefined when calling cancelScheduleTask.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.pathParams = { 'task_id': taskId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 确认备份恢复到目标实例的数据正常。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        confirmRestoredData(confirmRestoredDataRequest?: ConfirmRestoredDataRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/{instance_id}/confirm-restore-data",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let xLanguage;

            if (confirmRestoredDataRequest !== null && confirmRestoredDataRequest !== undefined) {
                if (confirmRestoredDataRequest instanceof ConfirmRestoredDataRequest) {
                    instanceId = confirmRestoredDataRequest.instanceId;
                    xLanguage = confirmRestoredDataRequest.xLanguage;
                } else {
                    instanceId = confirmRestoredDataRequest['instance_id'];
                    xLanguage = confirmRestoredDataRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling confirmRestoredData.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 复制参数模板。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        copyConfiguration(copyConfigurationRequest?: CopyConfigurationRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/configurations/{config_id}/copy",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let configId;
            
            let xLanguage;

            if (copyConfigurationRequest !== null && copyConfigurationRequest !== undefined) {
                if (copyConfigurationRequest instanceof CopyConfigurationRequest) {
                    configId = copyConfigurationRequest.configId;
                    body = copyConfigurationRequest.body
                    xLanguage = copyConfigurationRequest.xLanguage;
                } else {
                    configId = copyConfigurationRequest['config_id'];
                    body = copyConfigurationRequest['body'];
                    xLanguage = copyConfigurationRequest['X-Language'];
                }
            }

        
            if (configId === null || configId === undefined) {
            throw new RequiredError('configId','Required parameter configId was null or undefined when calling copyConfiguration.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'config_id': configId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建参数模板。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createConfigurationTemplate(createConfigurationTemplateRequest?: CreateConfigurationTemplateRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/configurations",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xLanguage;

            if (createConfigurationTemplateRequest !== null && createConfigurationTemplateRequest !== undefined) {
                if (createConfigurationTemplateRequest instanceof CreateConfigurationTemplateRequest) {
                    body = createConfigurationTemplateRequest.body
                    xLanguage = createConfigurationTemplateRequest.xLanguage;
                } else {
                    body = createConfigurationTemplateRequest['body'];
                    xLanguage = createConfigurationTemplateRequest['X-Language'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
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
         * 搭建容灾关系（从主实例端下发）。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createCrossCloudConstructDisaster(createCrossCloudConstructDisasterRequest?: CreateCrossCloudConstructDisasterRequest) {
            const options = {
                method: "POST",
                url: "/v3.5/{project_id}/instances/{instance_id}/disaster-recovery/construct",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let xLanguage;

            if (createCrossCloudConstructDisasterRequest !== null && createCrossCloudConstructDisasterRequest !== undefined) {
                if (createCrossCloudConstructDisasterRequest instanceof CreateCrossCloudConstructDisasterRequest) {
                    instanceId = createCrossCloudConstructDisasterRequest.instanceId;
                    xLanguage = createCrossCloudConstructDisasterRequest.xLanguage;
                    body = createCrossCloudConstructDisasterRequest.body
                } else {
                    instanceId = createCrossCloudConstructDisasterRequest['instance_id'];
                    xLanguage = createCrossCloudConstructDisasterRequest['X-Language'];
                    body = createCrossCloudConstructDisasterRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling createCrossCloudConstructDisaster.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 在指定实例中创建数据库。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createDatabase(createDatabaseRequest?: CreateDatabaseRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/{instance_id}/database",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let xLanguage;

            if (createDatabaseRequest !== null && createDatabaseRequest !== undefined) {
                if (createDatabaseRequest instanceof CreateDatabaseRequest) {
                    instanceId = createDatabaseRequest.instanceId;
                    body = createDatabaseRequest.body
                    xLanguage = createDatabaseRequest.xLanguage;
                } else {
                    instanceId = createDatabaseRequest['instance_id'];
                    body = createDatabaseRequest['body'];
                    xLanguage = createDatabaseRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling createDatabase.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建数据库实例
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createDatabaseInstance(createDatabaseInstanceRequest?: CreateDatabaseInstanceRequest) {
            const options = {
                method: "POST",
                url: "/v3.2/{project_id}/instances",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xLanguage;

            if (createDatabaseInstanceRequest !== null && createDatabaseInstanceRequest !== undefined) {
                if (createDatabaseInstanceRequest instanceof CreateDatabaseInstanceRequest) {
                    body = createDatabaseInstanceRequest.body
                    xLanguage = createDatabaseInstanceRequest.xLanguage;
                } else {
                    body = createDatabaseInstanceRequest['body'];
                    xLanguage = createDatabaseInstanceRequest['X-Language'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
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
         * 在指定实例的数据库中, 创建数据库schema。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createDatabaseSchemas(createDatabaseSchemasRequest?: CreateDatabaseSchemasRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/{instance_id}/schema",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let xLanguage;

            if (createDatabaseSchemasRequest !== null && createDatabaseSchemasRequest !== undefined) {
                if (createDatabaseSchemasRequest instanceof CreateDatabaseSchemasRequest) {
                    instanceId = createDatabaseSchemasRequest.instanceId;
                    body = createDatabaseSchemasRequest.body
                    xLanguage = createDatabaseSchemasRequest.xLanguage;
                } else {
                    instanceId = createDatabaseSchemasRequest['instance_id'];
                    body = createDatabaseSchemasRequest['body'];
                    xLanguage = createDatabaseSchemasRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling createDatabaseSchemas.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建数据库实例
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createDbInstance(createDbInstanceRequest?: CreateDbInstanceRequest) {
            const options = {
                method: "POST",
                url: "/v3.1/{project_id}/instances",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xLanguage;

            if (createDbInstanceRequest !== null && createDbInstanceRequest !== undefined) {
                if (createDbInstanceRequest instanceof CreateDbInstanceRequest) {
                    body = createDbInstanceRequest.body
                    xLanguage = createDbInstanceRequest.xLanguage;
                } else {
                    body = createDbInstanceRequest['body'];
                    xLanguage = createDbInstanceRequest['X-Language'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
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
         * 创建数据库角色。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createDbRole(createDbRoleRequest?: CreateDbRoleRequest) {
            const options = {
                method: "POST",
                url: "/v3.1/{project_id}/instances/{instance_id}/db-role",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let xLanguage;

            if (createDbRoleRequest !== null && createDbRoleRequest !== undefined) {
                if (createDbRoleRequest instanceof CreateDbRoleRequest) {
                    instanceId = createDbRoleRequest.instanceId;
                    body = createDbRoleRequest.body
                    xLanguage = createDbRoleRequest.xLanguage;
                } else {
                    instanceId = createDbRoleRequest['instance_id'];
                    body = createDbRoleRequest['body'];
                    xLanguage = createDbRoleRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling createDbRole.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 在指定实例中创建数据库用户。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createDbUser(createDbUserRequest?: CreateDbUserRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/{instance_id}/db-user",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let xLanguage;

            if (createDbUserRequest !== null && createDbUserRequest !== undefined) {
                if (createDbUserRequest instanceof CreateDbUserRequest) {
                    instanceId = createDbUserRequest.instanceId;
                    body = createDbUserRequest.body
                    xLanguage = createDbUserRequest.xLanguage;
                } else {
                    instanceId = createDbUserRequest['instance_id'];
                    body = createDbUserRequest['body'];
                    xLanguage = createDbUserRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling createDbUser.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建数据库实例，仅支持IAM5的新平面认证方式（AK/SK认证方式）。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createGaussDbInstance(createGaussDbInstanceRequest?: CreateGaussDbInstanceRequest) {
            const options = {
                method: "POST",
                url: "/v5/{project_id}/instances",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xLanguage;
            
            let subscriptionAgency;

            if (createGaussDbInstanceRequest !== null && createGaussDbInstanceRequest !== undefined) {
                if (createGaussDbInstanceRequest instanceof CreateGaussDbInstanceRequest) {
                    body = createGaussDbInstanceRequest.body
                    xLanguage = createGaussDbInstanceRequest.xLanguage;
                    subscriptionAgency = createGaussDbInstanceRequest.subscriptionAgency;
                } else {
                    body = createGaussDbInstanceRequest['body'];
                    xLanguage = createGaussDbInstanceRequest['X-Language'];
                    subscriptionAgency = createGaussDbInstanceRequest['Subscription-Agency'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }
            if (subscriptionAgency !== undefined && subscriptionAgency !== null) {
                localVarHeaderParameter['Subscription-Agency'] = String(subscriptionAgency);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建数据库企业版和集中式实例
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createInstance(createInstanceRequest?: CreateInstanceRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xLanguage;

            if (createInstanceRequest !== null && createInstanceRequest !== undefined) {
                if (createInstanceRequest instanceof CreateInstanceRequest) {
                    body = createInstanceRequest.body
                    xLanguage = createInstanceRequest.xLanguage;
                } else {
                    body = createInstanceRequest['body'];
                    xLanguage = createInstanceRequest['X-Language'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
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
         * 创建手动备份。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createManualBackup(createManualBackupRequest?: CreateManualBackupRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/backups",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xLanguage;

            if (createManualBackupRequest !== null && createManualBackupRequest !== undefined) {
                if (createManualBackupRequest instanceof CreateManualBackupRequest) {
                    body = createManualBackupRequest.body
                    xLanguage = createManualBackupRequest.xLanguage;
                } else {
                    body = createManualBackupRequest['body'];
                    xLanguage = createManualBackupRequest['X-Language'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
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
         * 根据备份恢复新实例。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createRestoreInstance(createRestoreInstanceRequest?: CreateRestoreInstanceRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xLanguage;

            if (createRestoreInstanceRequest !== null && createRestoreInstanceRequest !== undefined) {
                if (createRestoreInstanceRequest instanceof CreateRestoreInstanceRequest) {
                    body = createRestoreInstanceRequest.body
                    xLanguage = createRestoreInstanceRequest.xLanguage;
                } else {
                    body = createRestoreInstanceRequest['body'];
                    xLanguage = createRestoreInstanceRequest['X-Language'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
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
         * 批量实例内核版本定时升级
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createScheduleTask(createScheduleTaskRequest?: CreateScheduleTaskRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/db-upgrade/schedule-task",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xLanguage;

            if (createScheduleTaskRequest !== null && createScheduleTaskRequest !== undefined) {
                if (createScheduleTaskRequest instanceof CreateScheduleTaskRequest) {
                    body = createScheduleTaskRequest.body
                    xLanguage = createScheduleTaskRequest.xLanguage;
                } else {
                    body = createScheduleTaskRequest['body'];
                    xLanguage = createScheduleTaskRequest['X-Language'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
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
         * 创建慢日志下载信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createSlowLogDownload(createSlowLogDownloadRequest?: CreateSlowLogDownloadRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/{instance_id}/slow-log/download",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let xLanguage;

            if (createSlowLogDownloadRequest !== null && createSlowLogDownloadRequest !== undefined) {
                if (createSlowLogDownloadRequest instanceof CreateSlowLogDownloadRequest) {
                    instanceId = createSlowLogDownloadRequest.instanceId;
                    xLanguage = createSlowLogDownloadRequest.xLanguage;
                } else {
                    instanceId = createSlowLogDownloadRequest['instance_id'];
                    xLanguage = createSlowLogDownloadRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling createSlowLogDownload.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除参数模板。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteConfiguration(deleteConfigurationRequest?: DeleteConfigurationRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{project_id}/configurations/{config_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let configId;
            
            let xLanguage;

            if (deleteConfigurationRequest !== null && deleteConfigurationRequest !== undefined) {
                if (deleteConfigurationRequest instanceof DeleteConfigurationRequest) {
                    configId = deleteConfigurationRequest.configId;
                    xLanguage = deleteConfigurationRequest.xLanguage;
                } else {
                    configId = deleteConfigurationRequest['config_id'];
                    xLanguage = deleteConfigurationRequest['X-Language'];
                }
            }

        
            if (configId === null || configId === undefined) {
            throw new RequiredError('configId','Required parameter configId was null or undefined when calling deleteConfiguration.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.pathParams = { 'config_id': configId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除指定实例的数据库。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteDatabase(deleteDatabaseRequest?: DeleteDatabaseRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{project_id}/instances/{instance_id}/database",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let databaseName;
            
            let xLanguage;

            if (deleteDatabaseRequest !== null && deleteDatabaseRequest !== undefined) {
                if (deleteDatabaseRequest instanceof DeleteDatabaseRequest) {
                    instanceId = deleteDatabaseRequest.instanceId;
                    databaseName = deleteDatabaseRequest.databaseName;
                    xLanguage = deleteDatabaseRequest.xLanguage;
                } else {
                    instanceId = deleteDatabaseRequest['instance_id'];
                    databaseName = deleteDatabaseRequest['database_name'];
                    xLanguage = deleteDatabaseRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling deleteDatabase.');
            }
            if (databaseName === null || databaseName === undefined) {
                throw new RequiredError('databaseName','Required parameter databaseName was null or undefined when calling deleteDatabase.');
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
         * 删除数据库schema。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteDatabaseSchema(deleteDatabaseSchemaRequest?: DeleteDatabaseSchemaRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{project_id}/instances/{instance_id}/schema",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let xLanguage;

            if (deleteDatabaseSchemaRequest !== null && deleteDatabaseSchemaRequest !== undefined) {
                if (deleteDatabaseSchemaRequest instanceof DeleteDatabaseSchemaRequest) {
                    instanceId = deleteDatabaseSchemaRequest.instanceId;
                    body = deleteDatabaseSchemaRequest.body
                    xLanguage = deleteDatabaseSchemaRequest.xLanguage;
                } else {
                    instanceId = deleteDatabaseSchemaRequest['instance_id'];
                    body = deleteDatabaseSchemaRequest['body'];
                    xLanguage = deleteDatabaseSchemaRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling deleteDatabaseSchema.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除数据库实例。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteInstance(deleteInstanceRequest?: DeleteInstanceRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{project_id}/instances/{instance_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let xLanguage;

            if (deleteInstanceRequest !== null && deleteInstanceRequest !== undefined) {
                if (deleteInstanceRequest instanceof DeleteInstanceRequest) {
                    instanceId = deleteInstanceRequest.instanceId;
                    xLanguage = deleteInstanceRequest.xLanguage;
                } else {
                    instanceId = deleteInstanceRequest['instance_id'];
                    xLanguage = deleteInstanceRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling deleteInstance.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除实例标签
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteInstanceTag(deleteInstanceTagRequest?: DeleteInstanceTagRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{project_id}/instances/{instance_id}/tag",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let key;
            
            let xLanguage;

            if (deleteInstanceTagRequest !== null && deleteInstanceTagRequest !== undefined) {
                if (deleteInstanceTagRequest instanceof DeleteInstanceTagRequest) {
                    instanceId = deleteInstanceTagRequest.instanceId;
                    key = deleteInstanceTagRequest.key;
                    xLanguage = deleteInstanceTagRequest.xLanguage;
                } else {
                    instanceId = deleteInstanceTagRequest['instance_id'];
                    key = deleteInstanceTagRequest['key'];
                    xLanguage = deleteInstanceTagRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling deleteInstanceTag.');
            }
            if (key === null || key === undefined) {
                throw new RequiredError('key','Required parameter key was null or undefined when calling deleteInstanceTag.');
            }
            if (key !== null && key !== undefined) {
                localVarQueryParameter['key'] = key;
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
         * 删除任务记录。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteJob(deleteJobRequest?: DeleteJobRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{project_id}/jobs/{job_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let jobId;
            
            let xLanguage;

            if (deleteJobRequest !== null && deleteJobRequest !== undefined) {
                if (deleteJobRequest instanceof DeleteJobRequest) {
                    jobId = deleteJobRequest.jobId;
                    xLanguage = deleteJobRequest.xLanguage;
                } else {
                    jobId = deleteJobRequest['job_id'];
                    xLanguage = deleteJobRequest['X-Language'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling deleteJob.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.pathParams = { 'job_id': jobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除手动备份。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteManualBackup(deleteManualBackupRequest?: DeleteManualBackupRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{project_id}/backups/{backup_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let backupId;
            
            let xLanguage;

            if (deleteManualBackupRequest !== null && deleteManualBackupRequest !== undefined) {
                if (deleteManualBackupRequest instanceof DeleteManualBackupRequest) {
                    backupId = deleteManualBackupRequest.backupId;
                    xLanguage = deleteManualBackupRequest.xLanguage;
                } else {
                    backupId = deleteManualBackupRequest['backup_id'];
                    xLanguage = deleteManualBackupRequest['X-Language'];
                }
            }

        
            if (backupId === null || backupId === undefined) {
            throw new RequiredError('backupId','Required parameter backupId was null or undefined when calling deleteManualBackup.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.pathParams = { 'backup_id': backupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除定时任务信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteScheduleTask(deleteScheduleTaskRequest?: DeleteScheduleTaskRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{project_id}/instances/schedule-task/{task_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let taskId;
            
            let xLanguage;

            if (deleteScheduleTaskRequest !== null && deleteScheduleTaskRequest !== undefined) {
                if (deleteScheduleTaskRequest instanceof DeleteScheduleTaskRequest) {
                    taskId = deleteScheduleTaskRequest.taskId;
                    xLanguage = deleteScheduleTaskRequest.xLanguage;
                } else {
                    taskId = deleteScheduleTaskRequest['task_id'];
                    xLanguage = deleteScheduleTaskRequest['X-Language'];
                }
            }

        
            if (taskId === null || taskId === undefined) {
            throw new RequiredError('taskId','Required parameter taskId was null or undefined when calling deleteScheduleTask.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.pathParams = { 'task_id': taskId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取备份下载链接。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        downloadBackup(downloadBackupRequest?: DownloadBackupRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/backup-files",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let backupId;
            
            let xLanguage;

            if (downloadBackupRequest !== null && downloadBackupRequest !== undefined) {
                if (downloadBackupRequest instanceof DownloadBackupRequest) {
                    backupId = downloadBackupRequest.backupId;
                    xLanguage = downloadBackupRequest.xLanguage;
                } else {
                    backupId = downloadBackupRequest['backup_id'];
                    xLanguage = downloadBackupRequest['X-Language'];
                }
            }

        
            if (backupId === null || backupId === undefined) {
                throw new RequiredError('backupId','Required parameter backupId was null or undefined when calling downloadBackup.');
            }
            if (backupId !== null && backupId !== undefined) {
                localVarQueryParameter['backup_id'] = backupId;
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 结束stream流式容灾的日志保持功能，目前只有stream流容灾支持。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        executeCrossCloudDisasterDataCacheEnd(executeCrossCloudDisasterDataCacheEndRequest?: ExecuteCrossCloudDisasterDataCacheEndRequest) {
            const options = {
                method: "POST",
                url: "/v3.5/{project_id}/instances/{instance_id}/disaster-recovery/keep-log-stop",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let xLanguage;

            if (executeCrossCloudDisasterDataCacheEndRequest !== null && executeCrossCloudDisasterDataCacheEndRequest !== undefined) {
                if (executeCrossCloudDisasterDataCacheEndRequest instanceof ExecuteCrossCloudDisasterDataCacheEndRequest) {
                    instanceId = executeCrossCloudDisasterDataCacheEndRequest.instanceId;
                    body = executeCrossCloudDisasterDataCacheEndRequest.body
                    xLanguage = executeCrossCloudDisasterDataCacheEndRequest.xLanguage;
                } else {
                    instanceId = executeCrossCloudDisasterDataCacheEndRequest['instance_id'];
                    body = executeCrossCloudDisasterDataCacheEndRequest['body'];
                    xLanguage = executeCrossCloudDisasterDataCacheEndRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling executeCrossCloudDisasterDataCacheEnd.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 主实例开始容灾日志保持，目前只有stream流容灾支持。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        executeCrossCloudDisasterDataCacheStart(executeCrossCloudDisasterDataCacheStartRequest?: ExecuteCrossCloudDisasterDataCacheStartRequest) {
            const options = {
                method: "POST",
                url: "/v3.5/{project_id}/instances/{instance_id}/disaster-recovery/keep-log-start",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let xLanguage;

            if (executeCrossCloudDisasterDataCacheStartRequest !== null && executeCrossCloudDisasterDataCacheStartRequest !== undefined) {
                if (executeCrossCloudDisasterDataCacheStartRequest instanceof ExecuteCrossCloudDisasterDataCacheStartRequest) {
                    instanceId = executeCrossCloudDisasterDataCacheStartRequest.instanceId;
                    body = executeCrossCloudDisasterDataCacheStartRequest.body
                    xLanguage = executeCrossCloudDisasterDataCacheStartRequest.xLanguage;
                } else {
                    instanceId = executeCrossCloudDisasterDataCacheStartRequest['instance_id'];
                    body = executeCrossCloudDisasterDataCacheStartRequest['body'];
                    xLanguage = executeCrossCloudDisasterDataCacheStartRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling executeCrossCloudDisasterDataCacheStart.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 灾备实例结束容灾演练，目前只有stream流容灾支持。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        executeCrossCloudDisasterEndSimulation(executeCrossCloudDisasterEndSimulationRequest?: ExecuteCrossCloudDisasterEndSimulationRequest) {
            const options = {
                method: "POST",
                url: "/v3.5/{project_id}/instances/{instance_id}/disaster-recovery/simulation-stop",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let xLanguage;

            if (executeCrossCloudDisasterEndSimulationRequest !== null && executeCrossCloudDisasterEndSimulationRequest !== undefined) {
                if (executeCrossCloudDisasterEndSimulationRequest instanceof ExecuteCrossCloudDisasterEndSimulationRequest) {
                    instanceId = executeCrossCloudDisasterEndSimulationRequest.instanceId;
                    body = executeCrossCloudDisasterEndSimulationRequest.body
                    xLanguage = executeCrossCloudDisasterEndSimulationRequest.xLanguage;
                } else {
                    instanceId = executeCrossCloudDisasterEndSimulationRequest['instance_id'];
                    body = executeCrossCloudDisasterEndSimulationRequest['body'];
                    xLanguage = executeCrossCloudDisasterEndSimulationRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling executeCrossCloudDisasterEndSimulation.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 容灾升主failover（灾备实例端下发）。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        executeCrossCloudDisasterRecoveryFailover(executeCrossCloudDisasterRecoveryFailoverRequest?: ExecuteCrossCloudDisasterRecoveryFailoverRequest) {
            const options = {
                method: "POST",
                url: "/v3.5/{project_id}/instances/{instance_id}/disaster-recovery/failover",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let xLanguage;

            if (executeCrossCloudDisasterRecoveryFailoverRequest !== null && executeCrossCloudDisasterRecoveryFailoverRequest !== undefined) {
                if (executeCrossCloudDisasterRecoveryFailoverRequest instanceof ExecuteCrossCloudDisasterRecoveryFailoverRequest) {
                    instanceId = executeCrossCloudDisasterRecoveryFailoverRequest.instanceId;
                    body = executeCrossCloudDisasterRecoveryFailoverRequest.body
                    xLanguage = executeCrossCloudDisasterRecoveryFailoverRequest.xLanguage;
                } else {
                    instanceId = executeCrossCloudDisasterRecoveryFailoverRequest['instance_id'];
                    body = executeCrossCloudDisasterRecoveryFailoverRequest['body'];
                    xLanguage = executeCrossCloudDisasterRecoveryFailoverRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling executeCrossCloudDisasterRecoveryFailover.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 流容灾备升主选择支持容灾回切，实现容灾关系的重建任务。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        executeCrossCloudDisasterRestore(executeCrossCloudDisasterRestoreRequest?: ExecuteCrossCloudDisasterRestoreRequest) {
            const options = {
                method: "POST",
                url: "/v3.5/{project_id}/instances/{instance_id}/disaster-recovery/restore",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let xLanguage;

            if (executeCrossCloudDisasterRestoreRequest !== null && executeCrossCloudDisasterRestoreRequest !== undefined) {
                if (executeCrossCloudDisasterRestoreRequest instanceof ExecuteCrossCloudDisasterRestoreRequest) {
                    instanceId = executeCrossCloudDisasterRestoreRequest.instanceId;
                    body = executeCrossCloudDisasterRestoreRequest.body
                    xLanguage = executeCrossCloudDisasterRestoreRequest.xLanguage;
                } else {
                    instanceId = executeCrossCloudDisasterRestoreRequest['instance_id'];
                    body = executeCrossCloudDisasterRestoreRequest['body'];
                    xLanguage = executeCrossCloudDisasterRestoreRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling executeCrossCloudDisasterRestore.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 开始容灾演练，目前只有stream流容灾支持。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        executeCrossCloudDisasterStartSimulation(executeCrossCloudDisasterStartSimulationRequest?: ExecuteCrossCloudDisasterStartSimulationRequest) {
            const options = {
                method: "POST",
                url: "/v3.5/{project_id}/instances/{instance_id}/disaster-recovery/simulation-start",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let xLanguage;

            if (executeCrossCloudDisasterStartSimulationRequest !== null && executeCrossCloudDisasterStartSimulationRequest !== undefined) {
                if (executeCrossCloudDisasterStartSimulationRequest instanceof ExecuteCrossCloudDisasterStartSimulationRequest) {
                    instanceId = executeCrossCloudDisasterStartSimulationRequest.instanceId;
                    body = executeCrossCloudDisasterStartSimulationRequest.body
                    xLanguage = executeCrossCloudDisasterStartSimulationRequest.xLanguage;
                } else {
                    instanceId = executeCrossCloudDisasterStartSimulationRequest['instance_id'];
                    body = executeCrossCloudDisasterStartSimulationRequest['body'];
                    xLanguage = executeCrossCloudDisasterStartSimulationRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling executeCrossCloudDisasterStartSimulation.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 容灾switchover（可在主备任一一端下发）。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        executeCrossCloudDisasterSwitchover(executeCrossCloudDisasterSwitchoverRequest?: ExecuteCrossCloudDisasterSwitchoverRequest) {
            const options = {
                method: "POST",
                url: "/v3.5/{project_id}/instances/{instance_id}/disaster-recovery/switchover",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let xLanguage;

            if (executeCrossCloudDisasterSwitchoverRequest !== null && executeCrossCloudDisasterSwitchoverRequest !== undefined) {
                if (executeCrossCloudDisasterSwitchoverRequest instanceof ExecuteCrossCloudDisasterSwitchoverRequest) {
                    instanceId = executeCrossCloudDisasterSwitchoverRequest.instanceId;
                    body = executeCrossCloudDisasterSwitchoverRequest.body
                    xLanguage = executeCrossCloudDisasterSwitchoverRequest.xLanguage;
                } else {
                    instanceId = executeCrossCloudDisasterSwitchoverRequest['instance_id'];
                    body = executeCrossCloudDisasterSwitchoverRequest['body'];
                    xLanguage = executeCrossCloudDisasterSwitchoverRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling executeCrossCloudDisasterSwitchover.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 解除容灾（从容灾主集群下发）。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        executeCrossCloudReleaseDisaster(executeCrossCloudReleaseDisasterRequest?: ExecuteCrossCloudReleaseDisasterRequest) {
            const options = {
                method: "POST",
                url: "/v3.5/{project_id}/instances/{instance_id}/disaster-recovery/release",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let xLanguage;

            if (executeCrossCloudReleaseDisasterRequest !== null && executeCrossCloudReleaseDisasterRequest !== undefined) {
                if (executeCrossCloudReleaseDisasterRequest instanceof ExecuteCrossCloudReleaseDisasterRequest) {
                    instanceId = executeCrossCloudReleaseDisasterRequest.instanceId;
                    xLanguage = executeCrossCloudReleaseDisasterRequest.xLanguage;
                    body = executeCrossCloudReleaseDisasterRequest.body
                } else {
                    instanceId = executeCrossCloudReleaseDisasterRequest['instance_id'];
                    xLanguage = executeCrossCloudReleaseDisasterRequest['X-Language'];
                    body = executeCrossCloudReleaseDisasterRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling executeCrossCloudReleaseDisaster.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 安装插件
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        installKernelPlugin(installKernelPluginRequest?: InstallKernelPluginRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/{instance_id}/kernel-plugin",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let xLanguage;

            if (installKernelPluginRequest !== null && installKernelPluginRequest !== undefined) {
                if (installKernelPluginRequest instanceof InstallKernelPluginRequest) {
                    instanceId = installKernelPluginRequest.instanceId;
                    body = installKernelPluginRequest.body
                    xLanguage = installKernelPluginRequest.xLanguage;
                } else {
                    instanceId = installKernelPluginRequest['instance_id'];
                    body = installKernelPluginRequest['body'];
                    xLanguage = installKernelPluginRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling installKernelPlugin.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询可应用当前参数组模板的实例列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listApplicableInstances(listApplicableInstancesRequest?: ListApplicableInstancesRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/configurations/{config_id}/applicable-instances",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let configId;
            
            let xLanguage;
            
            let offset;
            
            let limit;

            if (listApplicableInstancesRequest !== null && listApplicableInstancesRequest !== undefined) {
                if (listApplicableInstancesRequest instanceof ListApplicableInstancesRequest) {
                    configId = listApplicableInstancesRequest.configId;
                    xLanguage = listApplicableInstancesRequest.xLanguage;
                    offset = listApplicableInstancesRequest.offset;
                    limit = listApplicableInstancesRequest.limit;
                } else {
                    configId = listApplicableInstancesRequest['config_id'];
                    xLanguage = listApplicableInstancesRequest['X-Language'];
                    offset = listApplicableInstancesRequest['offset'];
                    limit = listApplicableInstancesRequest['limit'];
                }
            }

        
            if (configId === null || configId === undefined) {
            throw new RequiredError('configId','Required parameter configId was null or undefined when calling listApplicableInstances.');
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
            options.pathParams = { 'config_id': configId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询参数模板的应用记录，以实例级别为维度。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAppliedHistories(listAppliedHistoriesRequest?: ListAppliedHistoriesRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/configurations/{config_id}/applied-histories",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let configId;
            
            let xLanguage;
            
            let offset;
            
            let limit;

            if (listAppliedHistoriesRequest !== null && listAppliedHistoriesRequest !== undefined) {
                if (listAppliedHistoriesRequest instanceof ListAppliedHistoriesRequest) {
                    configId = listAppliedHistoriesRequest.configId;
                    xLanguage = listAppliedHistoriesRequest.xLanguage;
                    offset = listAppliedHistoriesRequest.offset;
                    limit = listAppliedHistoriesRequest.limit;
                } else {
                    configId = listAppliedHistoriesRequest['config_id'];
                    xLanguage = listAppliedHistoriesRequest['X-Language'];
                    offset = listAppliedHistoriesRequest['offset'];
                    limit = listAppliedHistoriesRequest['limit'];
                }
            }

        
            if (configId === null || configId === undefined) {
            throw new RequiredError('configId','Required parameter configId was null or undefined when calling listAppliedHistories.');
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
            options.pathParams = { 'config_id': configId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询实例可变更规格列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAvailableFlavors(listAvailableFlavorsRequest?: ListAvailableFlavorsRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/{instance_id}/available-flavors",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let xLanguage;
            
            let offset;
            
            let limit;

            if (listAvailableFlavorsRequest !== null && listAvailableFlavorsRequest !== undefined) {
                if (listAvailableFlavorsRequest instanceof ListAvailableFlavorsRequest) {
                    instanceId = listAvailableFlavorsRequest.instanceId;
                    xLanguage = listAvailableFlavorsRequest.xLanguage;
                    offset = listAvailableFlavorsRequest.offset;
                    limit = listAvailableFlavorsRequest.limit;
                } else {
                    instanceId = listAvailableFlavorsRequest['instance_id'];
                    xLanguage = listAvailableFlavorsRequest['X-Language'];
                    offset = listAvailableFlavorsRequest['offset'];
                    limit = listAvailableFlavorsRequest['limit'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listAvailableFlavors.');
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
         * 获取备份列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listBackups(listBackupsRequest?: ListBackupsRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/backups",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let xLanguage;
            
            let instanceId;
            
            let backupId;
            
            let backupType;
            
            let offset;
            
            let limit;
            
            let beginTime;
            
            let endTime;

            if (listBackupsRequest !== null && listBackupsRequest !== undefined) {
                if (listBackupsRequest instanceof ListBackupsRequest) {
                    xLanguage = listBackupsRequest.xLanguage;
                    instanceId = listBackupsRequest.instanceId;
                    backupId = listBackupsRequest.backupId;
                    backupType = listBackupsRequest.backupType;
                    offset = listBackupsRequest.offset;
                    limit = listBackupsRequest.limit;
                    beginTime = listBackupsRequest.beginTime;
                    endTime = listBackupsRequest.endTime;
                } else {
                    xLanguage = listBackupsRequest['X-Language'];
                    instanceId = listBackupsRequest['instance_id'];
                    backupId = listBackupsRequest['backup_id'];
                    backupType = listBackupsRequest['backup_type'];
                    offset = listBackupsRequest['offset'];
                    limit = listBackupsRequest['limit'];
                    beginTime = listBackupsRequest['begin_time'];
                    endTime = listBackupsRequest['end_time'];
                }
            }

        
            if (instanceId !== null && instanceId !== undefined) {
                localVarQueryParameter['instance_id'] = instanceId;
            }
            if (backupId !== null && backupId !== undefined) {
                localVarQueryParameter['backup_id'] = backupId;
            }
            if (backupType !== null && backupType !== undefined) {
                localVarQueryParameter['backup_type'] = backupType;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (beginTime !== null && beginTime !== undefined) {
                localVarQueryParameter['begin_time'] = beginTime;
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取备份列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listBackupsDetails(listBackupsDetailsRequest?: ListBackupsDetailsRequest) {
            const options = {
                method: "GET",
                url: "/v3.2/{project_id}/backups",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let xLanguage;
            
            let instanceId;
            
            let backupId;
            
            let backupType;
            
            let offset;
            
            let limit;
            
            let beginTime;
            
            let endTime;

            if (listBackupsDetailsRequest !== null && listBackupsDetailsRequest !== undefined) {
                if (listBackupsDetailsRequest instanceof ListBackupsDetailsRequest) {
                    xLanguage = listBackupsDetailsRequest.xLanguage;
                    instanceId = listBackupsDetailsRequest.instanceId;
                    backupId = listBackupsDetailsRequest.backupId;
                    backupType = listBackupsDetailsRequest.backupType;
                    offset = listBackupsDetailsRequest.offset;
                    limit = listBackupsDetailsRequest.limit;
                    beginTime = listBackupsDetailsRequest.beginTime;
                    endTime = listBackupsDetailsRequest.endTime;
                } else {
                    xLanguage = listBackupsDetailsRequest['X-Language'];
                    instanceId = listBackupsDetailsRequest['instance_id'];
                    backupId = listBackupsDetailsRequest['backup_id'];
                    backupType = listBackupsDetailsRequest['backup_type'];
                    offset = listBackupsDetailsRequest['offset'];
                    limit = listBackupsDetailsRequest['limit'];
                    beginTime = listBackupsDetailsRequest['begin_time'];
                    endTime = listBackupsDetailsRequest['end_time'];
                }
            }

        
            if (instanceId !== null && instanceId !== undefined) {
                localVarQueryParameter['instance_id'] = instanceId;
            }
            if (backupId !== null && backupId !== undefined) {
                localVarQueryParameter['backup_id'] = backupId;
            }
            if (backupType !== null && backupType !== undefined) {
                localVarQueryParameter['backup_type'] = backupType;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (beginTime !== null && beginTime !== undefined) {
                localVarQueryParameter['begin_time'] = beginTime;
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询实例已绑定EIP列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listBindedEips(listBindedEipsRequest?: ListBindedEipsRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/{instance_id}/public-ips",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let xLanguage;
            
            let offset;
            
            let limit;

            if (listBindedEipsRequest !== null && listBindedEipsRequest !== undefined) {
                if (listBindedEipsRequest instanceof ListBindedEipsRequest) {
                    instanceId = listBindedEipsRequest.instanceId;
                    xLanguage = listBindedEipsRequest.xLanguage;
                    offset = listBindedEipsRequest.offset;
                    limit = listBindedEipsRequest.limit;
                } else {
                    instanceId = listBindedEipsRequest['instance_id'];
                    xLanguage = listBindedEipsRequest['X-Language'];
                    offset = listBindedEipsRequest['offset'];
                    limit = listBindedEipsRequest['limit'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listBindedEips.');
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
         * 查询协调节点列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listCnInfosBeforeReduce(listCnInfosBeforeReduceRequest?: ListCnInfosBeforeReduceRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/{instance_id}/coordinators",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let xLanguage;

            if (listCnInfosBeforeReduceRequest !== null && listCnInfosBeforeReduceRequest !== undefined) {
                if (listCnInfosBeforeReduceRequest instanceof ListCnInfosBeforeReduceRequest) {
                    instanceId = listCnInfosBeforeReduceRequest.instanceId;
                    xLanguage = listCnInfosBeforeReduceRequest.xLanguage;
                } else {
                    instanceId = listCnInfosBeforeReduceRequest['instance_id'];
                    xLanguage = listCnInfosBeforeReduceRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listCnInfosBeforeReduce.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询实例的组件列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listComponentInfos(listComponentInfosRequest?: ListComponentInfosRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/{instance_id}/components",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let xLanguage;
            
            let offset;
            
            let limit;
            
            let componentType;
            
            let availabilityZoneId;

            if (listComponentInfosRequest !== null && listComponentInfosRequest !== undefined) {
                if (listComponentInfosRequest instanceof ListComponentInfosRequest) {
                    instanceId = listComponentInfosRequest.instanceId;
                    xLanguage = listComponentInfosRequest.xLanguage;
                    offset = listComponentInfosRequest.offset;
                    limit = listComponentInfosRequest.limit;
                    componentType = listComponentInfosRequest.componentType;
                    availabilityZoneId = listComponentInfosRequest.availabilityZoneId;
                } else {
                    instanceId = listComponentInfosRequest['instance_id'];
                    xLanguage = listComponentInfosRequest['X-Language'];
                    offset = listComponentInfosRequest['offset'];
                    limit = listComponentInfosRequest['limit'];
                    componentType = listComponentInfosRequest['component_type'];
                    availabilityZoneId = listComponentInfosRequest['availability_zone_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listComponentInfos.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (componentType !== null && componentType !== undefined) {
                localVarQueryParameter['component_type'] = componentType;
            }
            if (availabilityZoneId !== null && availabilityZoneId !== undefined) {
                localVarQueryParameter['availability_zone_id'] = availabilityZoneId;
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
         * 获取参数模板列表，包括所有数据库的默认参数模板和用户创建的参数模板。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listConfigurations(listConfigurationsRequest?: ListConfigurationsRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/configurations",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let xLanguage;
            
            let offset;
            
            let limit;

            if (listConfigurationsRequest !== null && listConfigurationsRequest !== undefined) {
                if (listConfigurationsRequest instanceof ListConfigurationsRequest) {
                    xLanguage = listConfigurationsRequest.xLanguage;
                    offset = listConfigurationsRequest.offset;
                    limit = listConfigurationsRequest.limit;
                } else {
                    xLanguage = listConfigurationsRequest['X-Language'];
                    offset = listConfigurationsRequest['offset'];
                    limit = listConfigurationsRequest['limit'];
                }
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
         * 获取两个参数配置模板的差异列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listConfigurationsDiff(listConfigurationsDiffRequest?: ListConfigurationsDiffRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/configurations/comparison",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xLanguage;

            if (listConfigurationsDiffRequest !== null && listConfigurationsDiffRequest !== undefined) {
                if (listConfigurationsDiffRequest instanceof ListConfigurationsDiffRequest) {
                    body = listConfigurationsDiffRequest.body
                    xLanguage = listConfigurationsDiffRequest.xLanguage;
                } else {
                    body = listConfigurationsDiffRequest['body'];
                    xLanguage = listConfigurationsDiffRequest['X-Language'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
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
         * 查询数据库实例列表/查询实例详情
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listDatabaseInstances(listDatabaseInstancesRequest?: ListDatabaseInstancesRequest) {
            const options = {
                method: "GET",
                url: "/v3.3/{project_id}/instances",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let xLanguage;
            
            let id;
            
            let name;
            
            let type;
            
            let datastoreType;
            
            let vpcId;
            
            let subnetId;
            
            let offset;
            
            let limit;
            
            let tags;
            
            let chargeMode;

            if (listDatabaseInstancesRequest !== null && listDatabaseInstancesRequest !== undefined) {
                if (listDatabaseInstancesRequest instanceof ListDatabaseInstancesRequest) {
                    xLanguage = listDatabaseInstancesRequest.xLanguage;
                    id = listDatabaseInstancesRequest.id;
                    name = listDatabaseInstancesRequest.name;
                    type = listDatabaseInstancesRequest.type;
                    datastoreType = listDatabaseInstancesRequest.datastoreType;
                    vpcId = listDatabaseInstancesRequest.vpcId;
                    subnetId = listDatabaseInstancesRequest.subnetId;
                    offset = listDatabaseInstancesRequest.offset;
                    limit = listDatabaseInstancesRequest.limit;
                    tags = listDatabaseInstancesRequest.tags;
                    chargeMode = listDatabaseInstancesRequest.chargeMode;
                } else {
                    xLanguage = listDatabaseInstancesRequest['X-Language'];
                    id = listDatabaseInstancesRequest['id'];
                    name = listDatabaseInstancesRequest['name'];
                    type = listDatabaseInstancesRequest['type'];
                    datastoreType = listDatabaseInstancesRequest['datastore_type'];
                    vpcId = listDatabaseInstancesRequest['vpc_id'];
                    subnetId = listDatabaseInstancesRequest['subnet_id'];
                    offset = listDatabaseInstancesRequest['offset'];
                    limit = listDatabaseInstancesRequest['limit'];
                    tags = listDatabaseInstancesRequest['tags'];
                    chargeMode = listDatabaseInstancesRequest['charge_mode'];
                }
            }

        
            if (id !== null && id !== undefined) {
                localVarQueryParameter['id'] = id;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }
            if (datastoreType !== null && datastoreType !== undefined) {
                localVarQueryParameter['datastore_type'] = datastoreType;
            }
            if (vpcId !== null && vpcId !== undefined) {
                localVarQueryParameter['vpc_id'] = vpcId;
            }
            if (subnetId !== null && subnetId !== undefined) {
                localVarQueryParameter['subnet_id'] = subnetId;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (tags !== null && tags !== undefined) {
                localVarQueryParameter['tags'] = tags;
            }
            if (chargeMode !== null && chargeMode !== undefined) {
                localVarQueryParameter['charge_mode'] = chargeMode;
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询数据库角色列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listDatabaseRoles(listDatabaseRolesRequest?: ListDatabaseRolesRequest) {
            const options = {
                method: "GET",
                url: "/v3.1/{project_id}/instances/{instance_id}/db-role",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let xLanguage;
            
            let offset;
            
            let limit;

            if (listDatabaseRolesRequest !== null && listDatabaseRolesRequest !== undefined) {
                if (listDatabaseRolesRequest instanceof ListDatabaseRolesRequest) {
                    instanceId = listDatabaseRolesRequest.instanceId;
                    xLanguage = listDatabaseRolesRequest.xLanguage;
                    offset = listDatabaseRolesRequest.offset;
                    limit = listDatabaseRolesRequest.limit;
                } else {
                    instanceId = listDatabaseRolesRequest['instance_id'];
                    xLanguage = listDatabaseRolesRequest['X-Language'];
                    offset = listDatabaseRolesRequest['offset'];
                    limit = listDatabaseRolesRequest['limit'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listDatabaseRoles.');
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
         * 查询指定实例的数据库SCHEMA列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listDatabaseSchemas(listDatabaseSchemasRequest?: ListDatabaseSchemasRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/{instance_id}/schemas",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let dbName;
            
            let xLanguage;
            
            let offset;
            
            let limit;

            if (listDatabaseSchemasRequest !== null && listDatabaseSchemasRequest !== undefined) {
                if (listDatabaseSchemasRequest instanceof ListDatabaseSchemasRequest) {
                    instanceId = listDatabaseSchemasRequest.instanceId;
                    dbName = listDatabaseSchemasRequest.dbName;
                    xLanguage = listDatabaseSchemasRequest.xLanguage;
                    offset = listDatabaseSchemasRequest.offset;
                    limit = listDatabaseSchemasRequest.limit;
                } else {
                    instanceId = listDatabaseSchemasRequest['instance_id'];
                    dbName = listDatabaseSchemasRequest['db_name'];
                    xLanguage = listDatabaseSchemasRequest['X-Language'];
                    offset = listDatabaseSchemasRequest['offset'];
                    limit = listDatabaseSchemasRequest['limit'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listDatabaseSchemas.');
            }
            if (dbName === null || dbName === undefined) {
                throw new RequiredError('dbName','Required parameter dbName was null or undefined when calling listDatabaseSchemas.');
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
         * 查询指定实例中的数据库列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listDatabases(listDatabasesRequest?: ListDatabasesRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/{instance_id}/databases",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let xLanguage;
            
            let offset;
            
            let limit;

            if (listDatabasesRequest !== null && listDatabasesRequest !== undefined) {
                if (listDatabasesRequest instanceof ListDatabasesRequest) {
                    instanceId = listDatabasesRequest.instanceId;
                    xLanguage = listDatabasesRequest.xLanguage;
                    offset = listDatabasesRequest.offset;
                    limit = listDatabasesRequest.limit;
                } else {
                    instanceId = listDatabasesRequest['instance_id'];
                    xLanguage = listDatabasesRequest['X-Language'];
                    offset = listDatabasesRequest['offset'];
                    limit = listDatabasesRequest['limit'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listDatabases.');
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
         * 查询指定数据库引擎对应的版本信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listDatastores(listDatastoresRequest?: ListDatastoresRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/datastore/versions",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let xLanguage;

            if (listDatastoresRequest !== null && listDatastoresRequest !== undefined) {
                if (listDatastoresRequest instanceof ListDatastoresRequest) {
                    xLanguage = listDatastoresRequest.xLanguage;
                } else {
                    xLanguage = listDatastoresRequest['X-Language'];
                }
            }

        
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询引擎列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listDatastoresDetails(listDatastoresDetailsRequest?: ListDatastoresDetailsRequest) {
            const options = {
                method: "GET",
                url: "/v3.1/{project_id}/datastores",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let xLanguage;

            if (listDatastoresDetailsRequest !== null && listDatastoresDetailsRequest !== undefined) {
                if (listDatastoresDetailsRequest instanceof ListDatastoresDetailsRequest) {
                    xLanguage = listDatastoresDetailsRequest.xLanguage;
                } else {
                    xLanguage = listDatastoresDetailsRequest['X-Language'];
                }
            }

        
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取备份列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listDbBackups(listDbBackupsRequest?: ListDbBackupsRequest) {
            const options = {
                method: "GET",
                url: "/v3.1/{project_id}/backups",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let xLanguage;
            
            let instanceId;
            
            let backupId;
            
            let backupType;
            
            let offset;
            
            let limit;
            
            let beginTime;
            
            let endTime;

            if (listDbBackupsRequest !== null && listDbBackupsRequest !== undefined) {
                if (listDbBackupsRequest instanceof ListDbBackupsRequest) {
                    xLanguage = listDbBackupsRequest.xLanguage;
                    instanceId = listDbBackupsRequest.instanceId;
                    backupId = listDbBackupsRequest.backupId;
                    backupType = listDbBackupsRequest.backupType;
                    offset = listDbBackupsRequest.offset;
                    limit = listDbBackupsRequest.limit;
                    beginTime = listDbBackupsRequest.beginTime;
                    endTime = listDbBackupsRequest.endTime;
                } else {
                    xLanguage = listDbBackupsRequest['X-Language'];
                    instanceId = listDbBackupsRequest['instance_id'];
                    backupId = listDbBackupsRequest['backup_id'];
                    backupType = listDbBackupsRequest['backup_type'];
                    offset = listDbBackupsRequest['offset'];
                    limit = listDbBackupsRequest['limit'];
                    beginTime = listDbBackupsRequest['begin_time'];
                    endTime = listDbBackupsRequest['end_time'];
                }
            }

        
            if (instanceId !== null && instanceId !== undefined) {
                localVarQueryParameter['instance_id'] = instanceId;
            }
            if (backupId !== null && backupId !== undefined) {
                localVarQueryParameter['backup_id'] = backupId;
            }
            if (backupType !== null && backupType !== undefined) {
                localVarQueryParameter['backup_type'] = backupType;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (beginTime !== null && beginTime !== undefined) {
                localVarQueryParameter['begin_time'] = beginTime;
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询数据库的规格信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listDbFlavors(listDbFlavorsRequest?: ListDbFlavorsRequest) {
            const options = {
                method: "GET",
                url: "/v3.1/{project_id}/flavors",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let xLanguage;
            
            let version;
            
            let specCode;
            
            let haMode;
            
            let limit;
            
            let offset;

            if (listDbFlavorsRequest !== null && listDbFlavorsRequest !== undefined) {
                if (listDbFlavorsRequest instanceof ListDbFlavorsRequest) {
                    xLanguage = listDbFlavorsRequest.xLanguage;
                    version = listDbFlavorsRequest.version;
                    specCode = listDbFlavorsRequest.specCode;
                    haMode = listDbFlavorsRequest.haMode;
                    limit = listDbFlavorsRequest.limit;
                    offset = listDbFlavorsRequest.offset;
                } else {
                    xLanguage = listDbFlavorsRequest['X-Language'];
                    version = listDbFlavorsRequest['version'];
                    specCode = listDbFlavorsRequest['spec_code'];
                    haMode = listDbFlavorsRequest['ha_mode'];
                    limit = listDbFlavorsRequest['limit'];
                    offset = listDbFlavorsRequest['offset'];
                }
            }

        
            if (version !== null && version !== undefined) {
                localVarQueryParameter['version'] = version;
            }
            if (specCode !== null && specCode !== undefined) {
                localVarQueryParameter['spec_code'] = specCode;
            }
            if (haMode !== null && haMode !== undefined) {
                localVarQueryParameter['ha_mode'] = haMode;
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
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 在指定实例中查询数据库用户列表。
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
            
            let xLanguage;
            
            let offset;
            
            let limit;

            if (listDbUsersRequest !== null && listDbUsersRequest !== undefined) {
                if (listDbUsersRequest instanceof ListDbUsersRequest) {
                    instanceId = listDbUsersRequest.instanceId;
                    xLanguage = listDbUsersRequest.xLanguage;
                    offset = listDbUsersRequest.offset;
                    limit = listDbUsersRequest.limit;
                } else {
                    instanceId = listDbUsersRequest['instance_id'];
                    xLanguage = listDbUsersRequest['X-Language'];
                    offset = listDbUsersRequest['offset'];
                    limit = listDbUsersRequest['limit'];
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
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询容灾操作记录。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listDisasterRecoveryRecord(listDisasterRecoveryRecordRequest?: ListDisasterRecoveryRecordRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/{instance_id}/disaster-recovery/records",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let entityId;
            
            let entityType;
            
            let xLanguage;
            
            let limit;
            
            let offset;

            if (listDisasterRecoveryRecordRequest !== null && listDisasterRecoveryRecordRequest !== undefined) {
                if (listDisasterRecoveryRecordRequest instanceof ListDisasterRecoveryRecordRequest) {
                    instanceId = listDisasterRecoveryRecordRequest.instanceId;
                    entityId = listDisasterRecoveryRecordRequest.entityId;
                    entityType = listDisasterRecoveryRecordRequest.entityType;
                    xLanguage = listDisasterRecoveryRecordRequest.xLanguage;
                    limit = listDisasterRecoveryRecordRequest.limit;
                    offset = listDisasterRecoveryRecordRequest.offset;
                } else {
                    instanceId = listDisasterRecoveryRecordRequest['instance_id'];
                    entityId = listDisasterRecoveryRecordRequest['entity_id'];
                    entityType = listDisasterRecoveryRecordRequest['entity_type'];
                    xLanguage = listDisasterRecoveryRecordRequest['X-Language'];
                    limit = listDisasterRecoveryRecordRequest['limit'];
                    offset = listDisasterRecoveryRecordRequest['offset'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listDisasterRecoveryRecord.');
            }
            if (entityId === null || entityId === undefined) {
                throw new RequiredError('entityId','Required parameter entityId was null or undefined when calling listDisasterRecoveryRecord.');
            }
            if (entityId !== null && entityId !== undefined) {
                localVarQueryParameter['entity_id'] = entityId;
            }
            if (entityType === null || entityType === undefined) {
                throw new RequiredError('entityType','Required parameter entityType was null or undefined when calling listDisasterRecoveryRecord.');
            }
            if (entityType !== null && entityType !== undefined) {
                localVarQueryParameter['entity_type'] = entityType;
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
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询企业项目配额组信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listEpsQuotas(listEpsQuotasRequest?: ListEpsQuotasRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/enterprise-projects/quotas",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let xLanguage;
            
            let offset;
            
            let limit;
            
            let enterpriseProjectId;

            if (listEpsQuotasRequest !== null && listEpsQuotasRequest !== undefined) {
                if (listEpsQuotasRequest instanceof ListEpsQuotasRequest) {
                    xLanguage = listEpsQuotasRequest.xLanguage;
                    offset = listEpsQuotasRequest.offset;
                    limit = listEpsQuotasRequest.limit;
                    enterpriseProjectId = listEpsQuotasRequest.enterpriseProjectId;
                } else {
                    xLanguage = listEpsQuotasRequest['X-Language'];
                    offset = listEpsQuotasRequest['offset'];
                    limit = listEpsQuotasRequest['limit'];
                    enterpriseProjectId = listEpsQuotasRequest['enterprise_project_id'];
                }
            }

        
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询当前实例高级特性列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listFeatures(listFeaturesRequest?: ListFeaturesRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/{instance_id}/advance-features",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let xLanguage;

            if (listFeaturesRequest !== null && listFeaturesRequest !== undefined) {
                if (listFeaturesRequest instanceof ListFeaturesRequest) {
                    instanceId = listFeaturesRequest.instanceId;
                    xLanguage = listFeaturesRequest.xLanguage;
                } else {
                    instanceId = listFeaturesRequest['instance_id'];
                    xLanguage = listFeaturesRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listFeatures.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询数据库的规格信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listFlavors(listFlavorsRequest?: ListFlavorsRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/flavors",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let xLanguage;
            
            let version;
            
            let specCode;
            
            let haMode;
            
            let limit;
            
            let offset;

            if (listFlavorsRequest !== null && listFlavorsRequest !== undefined) {
                if (listFlavorsRequest instanceof ListFlavorsRequest) {
                    xLanguage = listFlavorsRequest.xLanguage;
                    version = listFlavorsRequest.version;
                    specCode = listFlavorsRequest.specCode;
                    haMode = listFlavorsRequest.haMode;
                    limit = listFlavorsRequest.limit;
                    offset = listFlavorsRequest.offset;
                } else {
                    xLanguage = listFlavorsRequest['X-Language'];
                    version = listFlavorsRequest['version'];
                    specCode = listFlavorsRequest['spec_code'];
                    haMode = listFlavorsRequest['ha_mode'];
                    limit = listFlavorsRequest['limit'];
                    offset = listFlavorsRequest['offset'];
                }
            }

        
            if (version !== null && version !== undefined) {
                localVarQueryParameter['version'] = version;
            }
            if (specCode !== null && specCode !== undefined) {
                localVarQueryParameter['spec_code'] = specCode;
            }
            if (haMode !== null && haMode !== undefined) {
                localVarQueryParameter['ha_mode'] = haMode;
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
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询数据库的规格信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listFlavorsDetails(listFlavorsDetailsRequest?: ListFlavorsDetailsRequest) {
            const options = {
                method: "GET",
                url: "/v3.2/{project_id}/flavors",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let xLanguage;
            
            let version;
            
            let specCode;
            
            let haMode;
            
            let limit;
            
            let offset;

            if (listFlavorsDetailsRequest !== null && listFlavorsDetailsRequest !== undefined) {
                if (listFlavorsDetailsRequest instanceof ListFlavorsDetailsRequest) {
                    xLanguage = listFlavorsDetailsRequest.xLanguage;
                    version = listFlavorsDetailsRequest.version;
                    specCode = listFlavorsDetailsRequest.specCode;
                    haMode = listFlavorsDetailsRequest.haMode;
                    limit = listFlavorsDetailsRequest.limit;
                    offset = listFlavorsDetailsRequest.offset;
                } else {
                    xLanguage = listFlavorsDetailsRequest['X-Language'];
                    version = listFlavorsDetailsRequest['version'];
                    specCode = listFlavorsDetailsRequest['spec_code'];
                    haMode = listFlavorsDetailsRequest['ha_mode'];
                    limit = listFlavorsDetailsRequest['limit'];
                    offset = listFlavorsDetailsRequest['offset'];
                }
            }

        
            if (version !== null && version !== undefined) {
                localVarQueryParameter['version'] = version;
            }
            if (specCode !== null && specCode !== undefined) {
                localVarQueryParameter['spec_code'] = specCode;
            }
            if (haMode !== null && haMode !== undefined) {
                localVarQueryParameter['ha_mode'] = haMode;
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
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询引擎列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listGaussDbDatastores(listGaussDbDatastoresRequest?: ListGaussDbDatastoresRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/datastores",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let xLanguage;

            if (listGaussDbDatastoresRequest !== null && listGaussDbDatastoresRequest !== undefined) {
                if (listGaussDbDatastoresRequest instanceof ListGaussDbDatastoresRequest) {
                    xLanguage = listGaussDbDatastoresRequest.xLanguage;
                } else {
                    xLanguage = listGaussDbDatastoresRequest['X-Language'];
                }
            }

        
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询参数模板的修改历史记录。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listHistoryOperations(listHistoryOperationsRequest?: ListHistoryOperationsRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/configurations/{config_id}/histories",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let configId;
            
            let xLanguage;
            
            let offset;
            
            let limit;

            if (listHistoryOperationsRequest !== null && listHistoryOperationsRequest !== undefined) {
                if (listHistoryOperationsRequest instanceof ListHistoryOperationsRequest) {
                    configId = listHistoryOperationsRequest.configId;
                    xLanguage = listHistoryOperationsRequest.xLanguage;
                    offset = listHistoryOperationsRequest.offset;
                    limit = listHistoryOperationsRequest.limit;
                } else {
                    configId = listHistoryOperationsRequest['config_id'];
                    xLanguage = listHistoryOperationsRequest['X-Language'];
                    offset = listHistoryOperationsRequest['offset'];
                    limit = listHistoryOperationsRequest['limit'];
                }
            }

        
            if (configId === null || configId === undefined) {
            throw new RequiredError('configId','Required parameter configId was null or undefined when calling listHistoryOperations.');
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
            options.pathParams = { 'config_id': configId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询数据库实例列表/查询实例详情
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listInstanceDetails(listInstanceDetailsRequest?: ListInstanceDetailsRequest) {
            const options = {
                method: "GET",
                url: "/v3.2/{project_id}/instances",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let xLanguage;
            
            let id;
            
            let name;
            
            let type;
            
            let datastoreType;
            
            let vpcId;
            
            let subnetId;
            
            let offset;
            
            let limit;
            
            let tags;
            
            let chargeMode;

            if (listInstanceDetailsRequest !== null && listInstanceDetailsRequest !== undefined) {
                if (listInstanceDetailsRequest instanceof ListInstanceDetailsRequest) {
                    xLanguage = listInstanceDetailsRequest.xLanguage;
                    id = listInstanceDetailsRequest.id;
                    name = listInstanceDetailsRequest.name;
                    type = listInstanceDetailsRequest.type;
                    datastoreType = listInstanceDetailsRequest.datastoreType;
                    vpcId = listInstanceDetailsRequest.vpcId;
                    subnetId = listInstanceDetailsRequest.subnetId;
                    offset = listInstanceDetailsRequest.offset;
                    limit = listInstanceDetailsRequest.limit;
                    tags = listInstanceDetailsRequest.tags;
                    chargeMode = listInstanceDetailsRequest.chargeMode;
                } else {
                    xLanguage = listInstanceDetailsRequest['X-Language'];
                    id = listInstanceDetailsRequest['id'];
                    name = listInstanceDetailsRequest['name'];
                    type = listInstanceDetailsRequest['type'];
                    datastoreType = listInstanceDetailsRequest['datastore_type'];
                    vpcId = listInstanceDetailsRequest['vpc_id'];
                    subnetId = listInstanceDetailsRequest['subnet_id'];
                    offset = listInstanceDetailsRequest['offset'];
                    limit = listInstanceDetailsRequest['limit'];
                    tags = listInstanceDetailsRequest['tags'];
                    chargeMode = listInstanceDetailsRequest['charge_mode'];
                }
            }

        
            if (id !== null && id !== undefined) {
                localVarQueryParameter['id'] = id;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }
            if (datastoreType !== null && datastoreType !== undefined) {
                localVarQueryParameter['datastore_type'] = datastoreType;
            }
            if (vpcId !== null && vpcId !== undefined) {
                localVarQueryParameter['vpc_id'] = vpcId;
            }
            if (subnetId !== null && subnetId !== undefined) {
                localVarQueryParameter['subnet_id'] = subnetId;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (tags !== null && tags !== undefined) {
                localVarQueryParameter['tags'] = tags;
            }
            if (chargeMode !== null && chargeMode !== undefined) {
                localVarQueryParameter['charge_mode'] = chargeMode;
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查看实例引擎版本分布
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listInstanceEngineDetail(listInstanceEngineDetailRequest?: ListInstanceEngineDetailRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/datastore/instances",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let xLanguage;
            
            let offset;
            
            let limit;

            if (listInstanceEngineDetailRequest !== null && listInstanceEngineDetailRequest !== undefined) {
                if (listInstanceEngineDetailRequest instanceof ListInstanceEngineDetailRequest) {
                    xLanguage = listInstanceEngineDetailRequest.xLanguage;
                    offset = listInstanceEngineDetailRequest.offset;
                    limit = listInstanceEngineDetailRequest.limit;
                } else {
                    xLanguage = listInstanceEngineDetailRequest['X-Language'];
                    offset = listInstanceEngineDetailRequest['offset'];
                    limit = listInstanceEngineDetailRequest['limit'];
                }
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
         * 查询数据库错误日志下载链接。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listInstanceErrorLogs(listInstanceErrorLogsRequest?: ListInstanceErrorLogsRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/{instance_id}/error-log",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let startTime;
            
            let endTime;
            
            let xLanguage;
            
            let offset;
            
            let limit;

            if (listInstanceErrorLogsRequest !== null && listInstanceErrorLogsRequest !== undefined) {
                if (listInstanceErrorLogsRequest instanceof ListInstanceErrorLogsRequest) {
                    instanceId = listInstanceErrorLogsRequest.instanceId;
                    startTime = listInstanceErrorLogsRequest.startTime;
                    endTime = listInstanceErrorLogsRequest.endTime;
                    xLanguage = listInstanceErrorLogsRequest.xLanguage;
                    offset = listInstanceErrorLogsRequest.offset;
                    limit = listInstanceErrorLogsRequest.limit;
                } else {
                    instanceId = listInstanceErrorLogsRequest['instance_id'];
                    startTime = listInstanceErrorLogsRequest['start_time'];
                    endTime = listInstanceErrorLogsRequest['end_time'];
                    xLanguage = listInstanceErrorLogsRequest['X-Language'];
                    offset = listInstanceErrorLogsRequest['offset'];
                    limit = listInstanceErrorLogsRequest['limit'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listInstanceErrorLogs.');
            }
            if (startTime === null || startTime === undefined) {
                throw new RequiredError('startTime','Required parameter startTime was null or undefined when calling listInstanceErrorLogs.');
            }
            if (startTime !== null && startTime !== undefined) {
                localVarQueryParameter['start_time'] = startTime;
            }
            if (endTime === null || endTime === undefined) {
                throw new RequiredError('endTime','Required parameter endTime was null or undefined when calling listInstanceErrorLogs.');
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
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询指定实例的用户标签信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listInstanceTags(listInstanceTagsRequest?: ListInstanceTagsRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/{instance_id}/tags",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let xLanguage;

            if (listInstanceTagsRequest !== null && listInstanceTagsRequest !== undefined) {
                if (listInstanceTagsRequest instanceof ListInstanceTagsRequest) {
                    instanceId = listInstanceTagsRequest.instanceId;
                    xLanguage = listInstanceTagsRequest.xLanguage;
                } else {
                    instanceId = listInstanceTagsRequest['instance_id'];
                    xLanguage = listInstanceTagsRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listInstanceTags.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询数据库实例列表/查询实例详情
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listInstances(listInstancesRequest?: ListInstancesRequest) {
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
            
            let xLanguage;
            
            let id;
            
            let name;
            
            let type;
            
            let datastoreType;
            
            let vpcId;
            
            let subnetId;
            
            let offset;
            
            let limit;
            
            let tags;
            
            let chargeMode;

            if (listInstancesRequest !== null && listInstancesRequest !== undefined) {
                if (listInstancesRequest instanceof ListInstancesRequest) {
                    xLanguage = listInstancesRequest.xLanguage;
                    id = listInstancesRequest.id;
                    name = listInstancesRequest.name;
                    type = listInstancesRequest.type;
                    datastoreType = listInstancesRequest.datastoreType;
                    vpcId = listInstancesRequest.vpcId;
                    subnetId = listInstancesRequest.subnetId;
                    offset = listInstancesRequest.offset;
                    limit = listInstancesRequest.limit;
                    tags = listInstancesRequest.tags;
                    chargeMode = listInstancesRequest.chargeMode;
                } else {
                    xLanguage = listInstancesRequest['X-Language'];
                    id = listInstancesRequest['id'];
                    name = listInstancesRequest['name'];
                    type = listInstancesRequest['type'];
                    datastoreType = listInstancesRequest['datastore_type'];
                    vpcId = listInstancesRequest['vpc_id'];
                    subnetId = listInstancesRequest['subnet_id'];
                    offset = listInstancesRequest['offset'];
                    limit = listInstancesRequest['limit'];
                    tags = listInstancesRequest['tags'];
                    chargeMode = listInstancesRequest['charge_mode'];
                }
            }

        
            if (id !== null && id !== undefined) {
                localVarQueryParameter['id'] = id;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }
            if (datastoreType !== null && datastoreType !== undefined) {
                localVarQueryParameter['datastore_type'] = datastoreType;
            }
            if (vpcId !== null && vpcId !== undefined) {
                localVarQueryParameter['vpc_id'] = vpcId;
            }
            if (subnetId !== null && subnetId !== undefined) {
                localVarQueryParameter['subnet_id'] = subnetId;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (tags !== null && tags !== undefined) {
                localVarQueryParameter['tags'] = tags;
            }
            if (chargeMode !== null && chargeMode !== undefined) {
                localVarQueryParameter['charge_mode'] = chargeMode;
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询数据库实例列表/查询实例详情
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listInstancesDetails(listInstancesDetailsRequest?: ListInstancesDetailsRequest) {
            const options = {
                method: "GET",
                url: "/v3.1/{project_id}/instances",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let xLanguage;
            
            let id;
            
            let name;
            
            let type;
            
            let datastoreType;
            
            let vpcId;
            
            let subnetId;
            
            let offset;
            
            let limit;
            
            let tags;
            
            let chargeMode;

            if (listInstancesDetailsRequest !== null && listInstancesDetailsRequest !== undefined) {
                if (listInstancesDetailsRequest instanceof ListInstancesDetailsRequest) {
                    xLanguage = listInstancesDetailsRequest.xLanguage;
                    id = listInstancesDetailsRequest.id;
                    name = listInstancesDetailsRequest.name;
                    type = listInstancesDetailsRequest.type;
                    datastoreType = listInstancesDetailsRequest.datastoreType;
                    vpcId = listInstancesDetailsRequest.vpcId;
                    subnetId = listInstancesDetailsRequest.subnetId;
                    offset = listInstancesDetailsRequest.offset;
                    limit = listInstancesDetailsRequest.limit;
                    tags = listInstancesDetailsRequest.tags;
                    chargeMode = listInstancesDetailsRequest.chargeMode;
                } else {
                    xLanguage = listInstancesDetailsRequest['X-Language'];
                    id = listInstancesDetailsRequest['id'];
                    name = listInstancesDetailsRequest['name'];
                    type = listInstancesDetailsRequest['type'];
                    datastoreType = listInstancesDetailsRequest['datastore_type'];
                    vpcId = listInstancesDetailsRequest['vpc_id'];
                    subnetId = listInstancesDetailsRequest['subnet_id'];
                    offset = listInstancesDetailsRequest['offset'];
                    limit = listInstancesDetailsRequest['limit'];
                    tags = listInstancesDetailsRequest['tags'];
                    chargeMode = listInstancesDetailsRequest['charge_mode'];
                }
            }

        
            if (id !== null && id !== undefined) {
                localVarQueryParameter['id'] = id;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }
            if (datastoreType !== null && datastoreType !== undefined) {
                localVarQueryParameter['datastore_type'] = datastoreType;
            }
            if (vpcId !== null && vpcId !== undefined) {
                localVarQueryParameter['vpc_id'] = vpcId;
            }
            if (subnetId !== null && subnetId !== undefined) {
                localVarQueryParameter['subnet_id'] = subnetId;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (tags !== null && tags !== undefined) {
                localVarQueryParameter['tags'] = tags;
            }
            if (chargeMode !== null && chargeMode !== undefined) {
                localVarQueryParameter['charge_mode'] = chargeMode;
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询实例已安装的插件列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listKernelPlugins(listKernelPluginsRequest?: ListKernelPluginsRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/{instance_id}/kernel-plugins",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let xLanguage;

            if (listKernelPluginsRequest !== null && listKernelPluginsRequest !== undefined) {
                if (listKernelPluginsRequest instanceof ListKernelPluginsRequest) {
                    instanceId = listKernelPluginsRequest.instanceId;
                    xLanguage = listKernelPluginsRequest.xLanguage;
                } else {
                    instanceId = listKernelPluginsRequest['instance_id'];
                    xLanguage = listKernelPluginsRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listKernelPlugins.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取参数模板列表，包括所有数据库的默认参数模板和用户创建的参数模板。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listParamGroupTemplates(listParamGroupTemplatesRequest?: ListParamGroupTemplatesRequest) {
            const options = {
                method: "GET",
                url: "/v3.1/{project_id}/configurations",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let xLanguage;
            
            let offset;
            
            let limit;

            if (listParamGroupTemplatesRequest !== null && listParamGroupTemplatesRequest !== undefined) {
                if (listParamGroupTemplatesRequest instanceof ListParamGroupTemplatesRequest) {
                    xLanguage = listParamGroupTemplatesRequest.xLanguage;
                    offset = listParamGroupTemplatesRequest.offset;
                    limit = listParamGroupTemplatesRequest.limit;
                } else {
                    xLanguage = listParamGroupTemplatesRequest['X-Language'];
                    offset = listParamGroupTemplatesRequest['offset'];
                    limit = listParamGroupTemplatesRequest['limit'];
                }
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
         * 获取参数模板列表，包括所有数据库的默认参数模板和用户创建的参数模板。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listParameterGroupTemplates(listParameterGroupTemplatesRequest?: ListParameterGroupTemplatesRequest) {
            const options = {
                method: "GET",
                url: "/v3.2/{project_id}/configurations",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let xLanguage;
            
            let offset;
            
            let limit;

            if (listParameterGroupTemplatesRequest !== null && listParameterGroupTemplatesRequest !== undefined) {
                if (listParameterGroupTemplatesRequest instanceof ListParameterGroupTemplatesRequest) {
                    xLanguage = listParameterGroupTemplatesRequest.xLanguage;
                    offset = listParameterGroupTemplatesRequest.offset;
                    limit = listParameterGroupTemplatesRequest.limit;
                } else {
                    xLanguage = listParameterGroupTemplatesRequest['X-Language'];
                    offset = listParameterGroupTemplatesRequest['offset'];
                    limit = listParameterGroupTemplatesRequest['limit'];
                }
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
         * 查询实例插件拓展信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listPluginExtensions(listPluginExtensionsRequest?: ListPluginExtensionsRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/{instance_id}/plugin-extensions",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let xLanguage;

            if (listPluginExtensionsRequest !== null && listPluginExtensionsRequest !== undefined) {
                if (listPluginExtensionsRequest instanceof ListPluginExtensionsRequest) {
                    instanceId = listPluginExtensionsRequest.instanceId;
                    body = listPluginExtensionsRequest.body
                    xLanguage = listPluginExtensionsRequest.xLanguage;
                } else {
                    instanceId = listPluginExtensionsRequest['instance_id'];
                    body = listPluginExtensionsRequest['body'];
                    xLanguage = listPluginExtensionsRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listPluginExtensions.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询预预定义标签。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listPredefinedTags(listPredefinedTagsRequest?: ListPredefinedTagsRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/predefined-tags",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let xLanguage;

            if (listPredefinedTagsRequest !== null && listPredefinedTagsRequest !== undefined) {
                if (listPredefinedTagsRequest instanceof ListPredefinedTagsRequest) {
                    xLanguage = listPredefinedTagsRequest.xLanguage;
                } else {
                    xLanguage = listPredefinedTagsRequest['X-Language'];
                }
            }

        
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询项目下所有用户标签信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listProjectTags(listProjectTagsRequest?: ListProjectTagsRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/tags",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let xLanguage;

            if (listProjectTagsRequest !== null && listProjectTagsRequest !== undefined) {
                if (listProjectTagsRequest instanceof ListProjectTagsRequest) {
                    xLanguage = listProjectTagsRequest.xLanguage;
                } else {
                    xLanguage = listProjectTagsRequest['X-Language'];
                }
            }

        
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询回收站所有引擎实例列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listRecycleInstances(listRecycleInstancesRequest?: ListRecycleInstancesRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/recycle-instances",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let xLanguage;
            
            let instanceName;
            
            let offset;
            
            let limit;

            if (listRecycleInstancesRequest !== null && listRecycleInstancesRequest !== undefined) {
                if (listRecycleInstancesRequest instanceof ListRecycleInstancesRequest) {
                    xLanguage = listRecycleInstancesRequest.xLanguage;
                    instanceName = listRecycleInstancesRequest.instanceName;
                    offset = listRecycleInstancesRequest.offset;
                    limit = listRecycleInstancesRequest.limit;
                } else {
                    xLanguage = listRecycleInstancesRequest['X-Language'];
                    instanceName = listRecycleInstancesRequest['instance_name'];
                    offset = listRecycleInstancesRequest['offset'];
                    limit = listRecycleInstancesRequest['limit'];
                }
            }

        
            if (instanceName !== null && instanceName !== undefined) {
                localVarQueryParameter['instance_name'] = instanceName;
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
         * 查询回收站所有引擎实例列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listRecycleInstancesDetails(listRecycleInstancesDetailsRequest?: ListRecycleInstancesDetailsRequest) {
            const options = {
                method: "GET",
                url: "/v3.1/{project_id}/recycle-instances",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let xLanguage;
            
            let instanceName;
            
            let offset;
            
            let limit;

            if (listRecycleInstancesDetailsRequest !== null && listRecycleInstancesDetailsRequest !== undefined) {
                if (listRecycleInstancesDetailsRequest instanceof ListRecycleInstancesDetailsRequest) {
                    xLanguage = listRecycleInstancesDetailsRequest.xLanguage;
                    instanceName = listRecycleInstancesDetailsRequest.instanceName;
                    offset = listRecycleInstancesDetailsRequest.offset;
                    limit = listRecycleInstancesDetailsRequest.limit;
                } else {
                    xLanguage = listRecycleInstancesDetailsRequest['X-Language'];
                    instanceName = listRecycleInstancesDetailsRequest['instance_name'];
                    offset = listRecycleInstancesDetailsRequest['offset'];
                    limit = listRecycleInstancesDetailsRequest['limit'];
                }
            }

        
            if (instanceName !== null && instanceName !== undefined) {
                localVarQueryParameter['instance_name'] = instanceName;
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
         * 查询可用于备份恢复的实例列表，实例信息要符合备份条件。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listRestorableInstances(listRestorableInstancesRequest?: ListRestorableInstancesRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/restorable-instances",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let sourceInstanceId;
            
            let xLanguage;
            
            let backupId;
            
            let restoreTime;
            
            let offset;
            
            let limit;

            if (listRestorableInstancesRequest !== null && listRestorableInstancesRequest !== undefined) {
                if (listRestorableInstancesRequest instanceof ListRestorableInstancesRequest) {
                    sourceInstanceId = listRestorableInstancesRequest.sourceInstanceId;
                    xLanguage = listRestorableInstancesRequest.xLanguage;
                    backupId = listRestorableInstancesRequest.backupId;
                    restoreTime = listRestorableInstancesRequest.restoreTime;
                    offset = listRestorableInstancesRequest.offset;
                    limit = listRestorableInstancesRequest.limit;
                } else {
                    sourceInstanceId = listRestorableInstancesRequest['source_instance_id'];
                    xLanguage = listRestorableInstancesRequest['X-Language'];
                    backupId = listRestorableInstancesRequest['backup_id'];
                    restoreTime = listRestorableInstancesRequest['restore_time'];
                    offset = listRestorableInstancesRequest['offset'];
                    limit = listRestorableInstancesRequest['limit'];
                }
            }

        
            if (sourceInstanceId === null || sourceInstanceId === undefined) {
                throw new RequiredError('sourceInstanceId','Required parameter sourceInstanceId was null or undefined when calling listRestorableInstances.');
            }
            if (sourceInstanceId !== null && sourceInstanceId !== undefined) {
                localVarQueryParameter['source_instance_id'] = sourceInstanceId;
            }
            if (backupId !== null && backupId !== undefined) {
                localVarQueryParameter['backup_id'] = backupId;
            }
            if (restoreTime !== null && restoreTime !== undefined) {
                localVarQueryParameter['restore_time'] = restoreTime;
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
         * 查询可用于备份恢复的实例列表，实例信息要符合备份条件。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listRestorableInstancesDetails(listRestorableInstancesDetailsRequest?: ListRestorableInstancesDetailsRequest) {
            const options = {
                method: "GET",
                url: "/v3.1/{project_id}/restorable-instances",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let sourceInstanceId;
            
            let xLanguage;
            
            let backupId;
            
            let restoreTime;
            
            let offset;
            
            let limit;

            if (listRestorableInstancesDetailsRequest !== null && listRestorableInstancesDetailsRequest !== undefined) {
                if (listRestorableInstancesDetailsRequest instanceof ListRestorableInstancesDetailsRequest) {
                    sourceInstanceId = listRestorableInstancesDetailsRequest.sourceInstanceId;
                    xLanguage = listRestorableInstancesDetailsRequest.xLanguage;
                    backupId = listRestorableInstancesDetailsRequest.backupId;
                    restoreTime = listRestorableInstancesDetailsRequest.restoreTime;
                    offset = listRestorableInstancesDetailsRequest.offset;
                    limit = listRestorableInstancesDetailsRequest.limit;
                } else {
                    sourceInstanceId = listRestorableInstancesDetailsRequest['source_instance_id'];
                    xLanguage = listRestorableInstancesDetailsRequest['X-Language'];
                    backupId = listRestorableInstancesDetailsRequest['backup_id'];
                    restoreTime = listRestorableInstancesDetailsRequest['restore_time'];
                    offset = listRestorableInstancesDetailsRequest['offset'];
                    limit = listRestorableInstancesDetailsRequest['limit'];
                }
            }

        
            if (sourceInstanceId === null || sourceInstanceId === undefined) {
                throw new RequiredError('sourceInstanceId','Required parameter sourceInstanceId was null or undefined when calling listRestorableInstancesDetails.');
            }
            if (sourceInstanceId !== null && sourceInstanceId !== undefined) {
                localVarQueryParameter['source_instance_id'] = sourceInstanceId;
            }
            if (backupId !== null && backupId !== undefined) {
                localVarQueryParameter['backup_id'] = backupId;
            }
            if (restoreTime !== null && restoreTime !== undefined) {
                localVarQueryParameter['restore_time'] = restoreTime;
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
         * 查询可恢复时间段。
         * 如果您备份策略中的保存天数设置较长，建议您传入查询日期“date”。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listRestoreTimes(listRestoreTimesRequest?: ListRestoreTimesRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/{instance_id}/restore-time",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let date;
            
            let xLanguage;

            if (listRestoreTimesRequest !== null && listRestoreTimesRequest !== undefined) {
                if (listRestoreTimesRequest instanceof ListRestoreTimesRequest) {
                    instanceId = listRestoreTimesRequest.instanceId;
                    date = listRestoreTimesRequest.date;
                    xLanguage = listRestoreTimesRequest.xLanguage;
                } else {
                    instanceId = listRestoreTimesRequest['instance_id'];
                    date = listRestoreTimesRequest['date'];
                    xLanguage = listRestoreTimesRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listRestoreTimes.');
            }
            if (date === null || date === undefined) {
                throw new RequiredError('date','Required parameter date was null or undefined when calling listRestoreTimes.');
            }
            if (date !== null && date !== undefined) {
                localVarQueryParameter['date'] = date;
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
         * 查看定时任务列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listScheduleTask(listScheduleTaskRequest?: ListScheduleTaskRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/schedule-tasks",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let xLanguage;
            
            let instanceId;
            
            let status;
            
            let name;
            
            let startTime;
            
            let endTime;
            
            let offset;
            
            let limit;

            if (listScheduleTaskRequest !== null && listScheduleTaskRequest !== undefined) {
                if (listScheduleTaskRequest instanceof ListScheduleTaskRequest) {
                    xLanguage = listScheduleTaskRequest.xLanguage;
                    instanceId = listScheduleTaskRequest.instanceId;
                    status = listScheduleTaskRequest.status;
                    name = listScheduleTaskRequest.name;
                    startTime = listScheduleTaskRequest.startTime;
                    endTime = listScheduleTaskRequest.endTime;
                    offset = listScheduleTaskRequest.offset;
                    limit = listScheduleTaskRequest.limit;
                } else {
                    xLanguage = listScheduleTaskRequest['X-Language'];
                    instanceId = listScheduleTaskRequest['instance_id'];
                    status = listScheduleTaskRequest['status'];
                    name = listScheduleTaskRequest['name'];
                    startTime = listScheduleTaskRequest['start_time'];
                    endTime = listScheduleTaskRequest['end_time'];
                    offset = listScheduleTaskRequest['offset'];
                    limit = listScheduleTaskRequest['limit'];
                }
            }

        
            if (instanceId !== null && instanceId !== undefined) {
                localVarQueryParameter['instance_id'] = instanceId;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
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
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询指定数据库引擎对应的磁盘类型。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listStorageTypes(listStorageTypesRequest?: ListStorageTypesRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/storage-type",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let version;
            
            let xLanguage;
            
            let haMode;

            if (listStorageTypesRequest !== null && listStorageTypesRequest !== undefined) {
                if (listStorageTypesRequest instanceof ListStorageTypesRequest) {
                    version = listStorageTypesRequest.version;
                    xLanguage = listStorageTypesRequest.xLanguage;
                    haMode = listStorageTypesRequest.haMode;
                } else {
                    version = listStorageTypesRequest['version'];
                    xLanguage = listStorageTypesRequest['X-Language'];
                    haMode = listStorageTypesRequest['ha_mode'];
                }
            }

        
            if (version === null || version === undefined) {
                throw new RequiredError('version','Required parameter version was null or undefined when calling listStorageTypes.');
            }
            if (version !== null && version !== undefined) {
                localVarQueryParameter['version'] = version;
            }
            if (haMode !== null && haMode !== undefined) {
                localVarQueryParameter['ha_mode'] = haMode;
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询支持的插件列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listSupportKernelPlugins(listSupportKernelPluginsRequest?: ListSupportKernelPluginsRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/kernel-plugins",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let xLanguage;

            if (listSupportKernelPluginsRequest !== null && listSupportKernelPluginsRequest !== undefined) {
                if (listSupportKernelPluginsRequest instanceof ListSupportKernelPluginsRequest) {
                    xLanguage = listSupportKernelPluginsRequest.xLanguage;
                } else {
                    xLanguage = listSupportKernelPluginsRequest['X-Language'];
                }
            }

        
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取任务中心的任务列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listTasks(listTasksRequest?: ListTasksRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/tasks",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let xLanguage;
            
            let status;
            
            let name;
            
            let startTime;
            
            let endTime;
            
            let offset;
            
            let limit;

            if (listTasksRequest !== null && listTasksRequest !== undefined) {
                if (listTasksRequest instanceof ListTasksRequest) {
                    xLanguage = listTasksRequest.xLanguage;
                    status = listTasksRequest.status;
                    name = listTasksRequest.name;
                    startTime = listTasksRequest.startTime;
                    endTime = listTasksRequest.endTime;
                    offset = listTasksRequest.offset;
                    limit = listTasksRequest.limit;
                } else {
                    xLanguage = listTasksRequest['X-Language'];
                    status = listTasksRequest['status'];
                    name = listTasksRequest['name'];
                    startTime = listTasksRequest['start_time'];
                    endTime = listTasksRequest['end_time'];
                    offset = listTasksRequest['offset'];
                    limit = listTasksRequest['limit'];
                }
            }

        
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
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
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改企业项目配额。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        modifyEpsQuota(modifyEpsQuotaRequest?: ModifyEpsQuotaRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/enterprise-projects/quotas",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xLanguage;

            if (modifyEpsQuotaRequest !== null && modifyEpsQuotaRequest !== undefined) {
                if (modifyEpsQuotaRequest instanceof ModifyEpsQuotaRequest) {
                    body = modifyEpsQuotaRequest.body
                    xLanguage = modifyEpsQuotaRequest.xLanguage;
                } else {
                    body = modifyEpsQuotaRequest['body'];
                    xLanguage = modifyEpsQuotaRequest['X-Language'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
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
         * 重置参数模板。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        resetConfiguration(resetConfigurationRequest?: ResetConfigurationRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/configurations/{config_id}/reset",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let configId;
            
            let xLanguage;

            if (resetConfigurationRequest !== null && resetConfigurationRequest !== undefined) {
                if (resetConfigurationRequest instanceof ResetConfigurationRequest) {
                    configId = resetConfigurationRequest.configId;
                    xLanguage = resetConfigurationRequest.xLanguage;
                } else {
                    configId = resetConfigurationRequest['config_id'];
                    xLanguage = resetConfigurationRequest['X-Language'];
                }
            }

        
            if (configId === null || configId === undefined) {
            throw new RequiredError('configId','Required parameter configId was null or undefined when calling resetConfiguration.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.pathParams = { 'config_id': configId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 重置容灾网络等配置。1.将自动“创建委托”以授权DBS云服务访问VPC资源信息、查询IAAS接口。2.重置实例容灾网络等配置。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        resetDrConfig(resetDrConfigRequest?: ResetDrConfigRequest) {
            const options = {
                method: "POST",
                url: "/v3.5/{project_id}/instances/{instance_id}/reset-dr-config",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let xLanguage;

            if (resetDrConfigRequest !== null && resetDrConfigRequest !== undefined) {
                if (resetDrConfigRequest instanceof ResetDrConfigRequest) {
                    instanceId = resetDrConfigRequest.instanceId;
                    xLanguage = resetDrConfigRequest.xLanguage;
                    body = resetDrConfigRequest.body
                } else {
                    instanceId = resetDrConfigRequest['instance_id'];
                    xLanguage = resetDrConfigRequest['X-Language'];
                    body = resetDrConfigRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling resetDrConfig.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 重置数据库密码。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        resetPwd(resetPwdRequest?: ResetPwdRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/{instance_id}/password",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let xLanguage;

            if (resetPwdRequest !== null && resetPwdRequest !== undefined) {
                if (resetPwdRequest instanceof ResetPwdRequest) {
                    instanceId = resetPwdRequest.instanceId;
                    body = resetPwdRequest.body
                    xLanguage = resetPwdRequest.xLanguage;
                } else {
                    instanceId = resetPwdRequest['instance_id'];
                    body = resetPwdRequest['body'];
                    xLanguage = resetPwdRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling resetPwd.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * GaussDB数据库实例规格变更
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        resizeInstanceFlavor(resizeInstanceFlavorRequest?: ResizeInstanceFlavorRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/instance/{instance_id}/flavor",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let xLanguage;

            if (resizeInstanceFlavorRequest !== null && resizeInstanceFlavorRequest !== undefined) {
                if (resizeInstanceFlavorRequest instanceof ResizeInstanceFlavorRequest) {
                    instanceId = resizeInstanceFlavorRequest.instanceId;
                    body = resizeInstanceFlavorRequest.body
                    xLanguage = resizeInstanceFlavorRequest.xLanguage;
                } else {
                    instanceId = resizeInstanceFlavorRequest['instance_id'];
                    body = resizeInstanceFlavorRequest['body'];
                    xLanguage = resizeInstanceFlavorRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling resizeInstanceFlavor.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 重启数据库实例。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        restartInstance(restartInstanceRequest?: RestartInstanceRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/{instance_id}/restart",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let xLanguage;

            if (restartInstanceRequest !== null && restartInstanceRequest !== undefined) {
                if (restartInstanceRequest instanceof RestartInstanceRequest) {
                    instanceId = restartInstanceRequest.instanceId;
                    xLanguage = restartInstanceRequest.xLanguage;
                } else {
                    instanceId = restartInstanceRequest['instance_id'];
                    xLanguage = restartInstanceRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling restartInstance.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 备份恢复到当前实例
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        restoreInstance(restoreInstanceRequest?: RestoreInstanceRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/recovery",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xLanguage;

            if (restoreInstanceRequest !== null && restoreInstanceRequest !== undefined) {
                if (restoreInstanceRequest instanceof RestoreInstanceRequest) {
                    body = restoreInstanceRequest.body
                    xLanguage = restoreInstanceRequest.xLanguage;
                } else {
                    body = restoreInstanceRequest['body'];
                    xLanguage = restoreInstanceRequest['X-Language'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
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
         * 配置插件拓展能力
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        resumePluginExtensions(resumePluginExtensionsRequest?: ResumePluginExtensionsRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/{instance_id}/config-plugin-extensions",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let xLanguage;

            if (resumePluginExtensionsRequest !== null && resumePluginExtensionsRequest !== undefined) {
                if (resumePluginExtensionsRequest instanceof ResumePluginExtensionsRequest) {
                    instanceId = resumePluginExtensionsRequest.instanceId;
                    body = resumePluginExtensionsRequest.body
                    xLanguage = resumePluginExtensionsRequest.xLanguage;
                } else {
                    instanceId = resumePluginExtensionsRequest['instance_id'];
                    body = resumePluginExtensionsRequest['body'];
                    xLanguage = resumePluginExtensionsRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling resumePluginExtensions.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * CN横向扩容/DN分片扩容/磁盘扩容
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        runInstanceAction(runInstanceActionRequest?: RunInstanceActionRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/{instance_id}/action",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let xLanguage;

            if (runInstanceActionRequest !== null && runInstanceActionRequest !== undefined) {
                if (runInstanceActionRequest instanceof RunInstanceActionRequest) {
                    instanceId = runInstanceActionRequest.instanceId;
                    body = runInstanceActionRequest.body
                    xLanguage = runInstanceActionRequest.xLanguage;
                } else {
                    instanceId = runInstanceActionRequest['instance_id'];
                    body = runInstanceActionRequest['body'];
                    xLanguage = runInstanceActionRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling runInstanceAction.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询磁盘自动扩容策略
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        searchAutoEnlargePolicy(searchAutoEnlargePolicyRequest?: SearchAutoEnlargePolicyRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/{instance_id}/auto-enlarge-policy",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let xLanguage;

            if (searchAutoEnlargePolicyRequest !== null && searchAutoEnlargePolicyRequest !== undefined) {
                if (searchAutoEnlargePolicyRequest instanceof SearchAutoEnlargePolicyRequest) {
                    instanceId = searchAutoEnlargePolicyRequest.instanceId;
                    xLanguage = searchAutoEnlargePolicyRequest.xLanguage;
                } else {
                    instanceId = searchAutoEnlargePolicyRequest['instance_id'];
                    xLanguage = searchAutoEnlargePolicyRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling searchAutoEnlargePolicy.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 设置自动备份策略。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        setBackupPolicy(setBackupPolicyRequest?: SetBackupPolicyRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/instances/{instance_id}/backups/policy",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let xLanguage;

            if (setBackupPolicyRequest !== null && setBackupPolicyRequest !== undefined) {
                if (setBackupPolicyRequest instanceof SetBackupPolicyRequest) {
                    instanceId = setBackupPolicyRequest.instanceId;
                    body = setBackupPolicyRequest.body
                    xLanguage = setBackupPolicyRequest.xLanguage;
                } else {
                    instanceId = setBackupPolicyRequest['instance_id'];
                    body = setBackupPolicyRequest['body'];
                    xLanguage = setBackupPolicyRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling setBackupPolicy.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 重置指定数据库帐号的密码。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        setDbUserPwd(setDbUserPwdRequest?: SetDbUserPwdRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/instances/{instance_id}/db-user/password",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let xLanguage;

            if (setDbUserPwdRequest !== null && setDbUserPwdRequest !== undefined) {
                if (setDbUserPwdRequest instanceof SetDbUserPwdRequest) {
                    instanceId = setDbUserPwdRequest.instanceId;
                    body = setDbUserPwdRequest.body
                    xLanguage = setDbUserPwdRequest.xLanguage;
                } else {
                    instanceId = setDbUserPwdRequest['instance_id'];
                    body = setDbUserPwdRequest['body'];
                    xLanguage = setDbUserPwdRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling setDbUserPwd.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 配置插件license
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        setKernelPluginLicense(setKernelPluginLicenseRequest?: SetKernelPluginLicenseRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/instances/{instance_id}/kernel-plugin-license",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let xLanguage;

            if (setKernelPluginLicenseRequest !== null && setKernelPluginLicenseRequest !== undefined) {
                if (setKernelPluginLicenseRequest instanceof SetKernelPluginLicenseRequest) {
                    instanceId = setKernelPluginLicenseRequest.instanceId;
                    body = setKernelPluginLicenseRequest.body
                    xLanguage = setKernelPluginLicenseRequest.xLanguage;
                } else {
                    instanceId = setKernelPluginLicenseRequest['instance_id'];
                    body = setKernelPluginLicenseRequest['body'];
                    xLanguage = setKernelPluginLicenseRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling setKernelPluginLicense.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 设置自动备份策略
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        setNewBackupPolicy(setNewBackupPolicyRequest?: SetNewBackupPolicyRequest) {
            const options = {
                method: "PUT",
                url: "/v3.1/{project_id}/instances/{instance_id}/backups/policy",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let xLanguage;

            if (setNewBackupPolicyRequest !== null && setNewBackupPolicyRequest !== undefined) {
                if (setNewBackupPolicyRequest instanceof SetNewBackupPolicyRequest) {
                    instanceId = setNewBackupPolicyRequest.instanceId;
                    body = setNewBackupPolicyRequest.body
                    xLanguage = setNewBackupPolicyRequest.xLanguage;
                } else {
                    instanceId = setNewBackupPolicyRequest['instance_id'];
                    body = setNewBackupPolicyRequest['body'];
                    xLanguage = setNewBackupPolicyRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling setNewBackupPolicy.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 设置回收站策略。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        setRecyclePolicy(setRecyclePolicyRequest?: SetRecyclePolicyRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/recycle-policy",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (setRecyclePolicyRequest !== null && setRecyclePolicyRequest !== undefined) {
                if (setRecyclePolicyRequest instanceof SetRecyclePolicyRequest) {
                    body = setRecyclePolicyRequest.body
                } else {
                    body = setRecyclePolicyRequest['body'];
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
         * 查询自动备份策略。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showBackupPolicy(showBackupPolicyRequest?: ShowBackupPolicyRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/{instance_id}/backups/policy",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let xLanguage;

            if (showBackupPolicyRequest !== null && showBackupPolicyRequest !== undefined) {
                if (showBackupPolicyRequest instanceof ShowBackupPolicyRequest) {
                    instanceId = showBackupPolicyRequest.instanceId;
                    xLanguage = showBackupPolicyRequest.xLanguage;
                } else {
                    instanceId = showBackupPolicyRequest['instance_id'];
                    xLanguage = showBackupPolicyRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showBackupPolicy.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询实例是否发生过主备切换而导致主机负载不均衡。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showBalanceStatus(showBalanceStatusRequest?: ShowBalanceStatusRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/{instance_id}/balance",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let xLanguage;

            if (showBalanceStatusRequest !== null && showBalanceStatusRequest !== undefined) {
                if (showBalanceStatusRequest instanceof ShowBalanceStatusRequest) {
                    instanceId = showBalanceStatusRequest.instanceId;
                    xLanguage = showBalanceStatusRequest.xLanguage;
                } else {
                    instanceId = showBalanceStatusRequest['instance_id'];
                    xLanguage = showBalanceStatusRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showBalanceStatus.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询批量实例可升级的版本和升级类型。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showBatchUpgradeCandidateVersions(showBatchUpgradeCandidateVersionsRequest?: ShowBatchUpgradeCandidateVersionsRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/db-upgrade/candidate-versions",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xLanguage;

            if (showBatchUpgradeCandidateVersionsRequest !== null && showBatchUpgradeCandidateVersionsRequest !== undefined) {
                if (showBatchUpgradeCandidateVersionsRequest instanceof ShowBatchUpgradeCandidateVersionsRequest) {
                    body = showBatchUpgradeCandidateVersionsRequest.body
                    xLanguage = showBatchUpgradeCandidateVersionsRequest.xLanguage;
                } else {
                    body = showBatchUpgradeCandidateVersionsRequest['body'];
                    xLanguage = showBatchUpgradeCandidateVersionsRequest['X-Language'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
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
         * 根据参数模板ID获取指定参数模板详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showConfigurationDetail(showConfigurationDetailRequest?: ShowConfigurationDetailRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/configurations/{config_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let configId;
            
            let xLanguage;

            if (showConfigurationDetailRequest !== null && showConfigurationDetailRequest !== undefined) {
                if (showConfigurationDetailRequest instanceof ShowConfigurationDetailRequest) {
                    configId = showConfigurationDetailRequest.configId;
                    xLanguage = showConfigurationDetailRequest.xLanguage;
                } else {
                    configId = showConfigurationDetailRequest['config_id'];
                    xLanguage = showConfigurationDetailRequest['X-Language'];
                }
            }

        
            if (configId === null || configId === undefined) {
            throw new RequiredError('configId','Required parameter configId was null or undefined when calling showConfigurationDetail.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.pathParams = { 'config_id': configId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询实例容灾监控实时状态。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showCrossCloudDisasterInstanceMonitor(showCrossCloudDisasterInstanceMonitorRequest?: ShowCrossCloudDisasterInstanceMonitorRequest) {
            const options = {
                method: "GET",
                url: "/v3.5/{project_id}/instances/{instance_id}/disaster-recovery/monitor",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let xLanguage;
            
            let disasterType;

            if (showCrossCloudDisasterInstanceMonitorRequest !== null && showCrossCloudDisasterInstanceMonitorRequest !== undefined) {
                if (showCrossCloudDisasterInstanceMonitorRequest instanceof ShowCrossCloudDisasterInstanceMonitorRequest) {
                    instanceId = showCrossCloudDisasterInstanceMonitorRequest.instanceId;
                    xLanguage = showCrossCloudDisasterInstanceMonitorRequest.xLanguage;
                    disasterType = showCrossCloudDisasterInstanceMonitorRequest.disasterType;
                } else {
                    instanceId = showCrossCloudDisasterInstanceMonitorRequest['instance_id'];
                    xLanguage = showCrossCloudDisasterInstanceMonitorRequest['X-Language'];
                    disasterType = showCrossCloudDisasterInstanceMonitorRequest['disaster_type'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showCrossCloudDisasterInstanceMonitor.');
            }
            if (disasterType !== null && disasterType !== undefined) {
                localVarQueryParameter['disaster_type'] = disasterType;
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
         * 查询容灾关系列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showCrossCloudDisasterRelations(showCrossCloudDisasterRelationsRequest?: ShowCrossCloudDisasterRelationsRequest) {
            const options = {
                method: "GET",
                url: "/v3.5/{project_id}/disaster-recovery/relations",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let xLanguage;
            
            let limit;
            
            let offset;
            
            let instanceName;
            
            let instanceId;
            
            let drRole;
            
            let drType;
            
            let drStatus;

            if (showCrossCloudDisasterRelationsRequest !== null && showCrossCloudDisasterRelationsRequest !== undefined) {
                if (showCrossCloudDisasterRelationsRequest instanceof ShowCrossCloudDisasterRelationsRequest) {
                    xLanguage = showCrossCloudDisasterRelationsRequest.xLanguage;
                    limit = showCrossCloudDisasterRelationsRequest.limit;
                    offset = showCrossCloudDisasterRelationsRequest.offset;
                    instanceName = showCrossCloudDisasterRelationsRequest.instanceName;
                    instanceId = showCrossCloudDisasterRelationsRequest.instanceId;
                    drRole = showCrossCloudDisasterRelationsRequest.drRole;
                    drType = showCrossCloudDisasterRelationsRequest.drType;
                    drStatus = showCrossCloudDisasterRelationsRequest.drStatus;
                } else {
                    xLanguage = showCrossCloudDisasterRelationsRequest['X-Language'];
                    limit = showCrossCloudDisasterRelationsRequest['limit'];
                    offset = showCrossCloudDisasterRelationsRequest['offset'];
                    instanceName = showCrossCloudDisasterRelationsRequest['instance_name'];
                    instanceId = showCrossCloudDisasterRelationsRequest['instance_id'];
                    drRole = showCrossCloudDisasterRelationsRequest['dr_role'];
                    drType = showCrossCloudDisasterRelationsRequest['dr_type'];
                    drStatus = showCrossCloudDisasterRelationsRequest['dr_status'];
                }
            }

        
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (instanceName !== null && instanceName !== undefined) {
                localVarQueryParameter['instance_name'] = instanceName;
            }
            if (instanceId !== null && instanceId !== undefined) {
                localVarQueryParameter['instance_id'] = instanceId;
            }
            if (drRole !== null && drRole !== undefined) {
                localVarQueryParameter['dr_role'] = drRole;
            }
            if (drType !== null && drType !== undefined) {
                localVarQueryParameter['dr_type'] = drType;
            }
            if (drStatus !== null && drStatus !== undefined) {
                localVarQueryParameter['dr_status'] = drStatus;
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据解决方案模板名称或实例ID查询副本数、分片数、节点数
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showDeploymentForm(showDeploymentFormRequest?: ShowDeploymentFormRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/deployment-form",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let xLanguage;
            
            let solution;
            
            let instanceId;

            if (showDeploymentFormRequest !== null && showDeploymentFormRequest !== undefined) {
                if (showDeploymentFormRequest instanceof ShowDeploymentFormRequest) {
                    xLanguage = showDeploymentFormRequest.xLanguage;
                    solution = showDeploymentFormRequest.solution;
                    instanceId = showDeploymentFormRequest.instanceId;
                } else {
                    xLanguage = showDeploymentFormRequest['X-Language'];
                    solution = showDeploymentFormRequest['solution'];
                    instanceId = showDeploymentFormRequest['instance_id'];
                }
            }

        
            if (solution !== null && solution !== undefined) {
                localVarQueryParameter['solution'] = solution;
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
         * 查询数据库错误日志采集的开关状态。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showErrorLogSwitchStatus(showErrorLogSwitchStatusRequest?: ShowErrorLogSwitchStatusRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/{instance_id}/error-log/switch/status",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let xLanguage;

            if (showErrorLogSwitchStatusRequest !== null && showErrorLogSwitchStatusRequest !== undefined) {
                if (showErrorLogSwitchStatusRequest instanceof ShowErrorLogSwitchStatusRequest) {
                    instanceId = showErrorLogSwitchStatusRequest.instanceId;
                    xLanguage = showErrorLogSwitchStatusRequest.xLanguage;
                } else {
                    instanceId = showErrorLogSwitchStatusRequest['instance_id'];
                    xLanguage = showErrorLogSwitchStatusRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showErrorLogSwitchStatus.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取指定实例的参数模板。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showInstanceConfiguration(showInstanceConfigurationRequest?: ShowInstanceConfigurationRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/{instance_id}/configurations",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let xLanguage;

            if (showInstanceConfigurationRequest !== null && showInstanceConfigurationRequest !== undefined) {
                if (showInstanceConfigurationRequest instanceof ShowInstanceConfigurationRequest) {
                    instanceId = showInstanceConfigurationRequest.instanceId;
                    xLanguage = showInstanceConfigurationRequest.xLanguage;
                } else {
                    instanceId = showInstanceConfigurationRequest['instance_id'];
                    xLanguage = showInstanceConfigurationRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showInstanceConfiguration.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询指定实例的存储使用空间和最大空间。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showInstanceDisk(showInstanceDiskRequest?: ShowInstanceDiskRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/{instance_id}/volume-usage",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let xLanguage;

            if (showInstanceDiskRequest !== null && showInstanceDiskRequest !== undefined) {
                if (showInstanceDiskRequest instanceof ShowInstanceDiskRequest) {
                    instanceId = showInstanceDiskRequest.instanceId;
                    xLanguage = showInstanceDiskRequest.xLanguage;
                } else {
                    instanceId = showInstanceDiskRequest['instance_id'];
                    xLanguage = showInstanceDiskRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showInstanceDisk.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取指定实例的参数模板。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showInstanceParamGroup(showInstanceParamGroupRequest?: ShowInstanceParamGroupRequest) {
            const options = {
                method: "GET",
                url: "/v3.1/{project_id}/instances/{instance_id}/configurations",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let xLanguage;

            if (showInstanceParamGroupRequest !== null && showInstanceParamGroupRequest !== undefined) {
                if (showInstanceParamGroupRequest instanceof ShowInstanceParamGroupRequest) {
                    instanceId = showInstanceParamGroupRequest.instanceId;
                    xLanguage = showInstanceParamGroupRequest.xLanguage;
                } else {
                    instanceId = showInstanceParamGroupRequest['instance_id'];
                    xLanguage = showInstanceParamGroupRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showInstanceParamGroup.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取指定实例的参数模板。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showInstanceParamGroupDetail(showInstanceParamGroupDetailRequest?: ShowInstanceParamGroupDetailRequest) {
            const options = {
                method: "GET",
                url: "/v3.2/{project_id}/instances/{instance_id}/configurations",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let xLanguage;

            if (showInstanceParamGroupDetailRequest !== null && showInstanceParamGroupDetailRequest !== undefined) {
                if (showInstanceParamGroupDetailRequest instanceof ShowInstanceParamGroupDetailRequest) {
                    instanceId = showInstanceParamGroupDetailRequest.instanceId;
                    xLanguage = showInstanceParamGroupDetailRequest.xLanguage;
                } else {
                    instanceId = showInstanceParamGroupDetailRequest['instance_id'];
                    xLanguage = showInstanceParamGroupDetailRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showInstanceParamGroupDetail.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据时间点或者备份文件查询原实例信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showInstanceSnapshot(showInstanceSnapshotRequest?: ShowInstanceSnapshotRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instance-snapshot",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let xLanguage;
            
            let instanceId;
            
            let restoreTime;
            
            let backupId;

            if (showInstanceSnapshotRequest !== null && showInstanceSnapshotRequest !== undefined) {
                if (showInstanceSnapshotRequest instanceof ShowInstanceSnapshotRequest) {
                    xLanguage = showInstanceSnapshotRequest.xLanguage;
                    instanceId = showInstanceSnapshotRequest.instanceId;
                    restoreTime = showInstanceSnapshotRequest.restoreTime;
                    backupId = showInstanceSnapshotRequest.backupId;
                } else {
                    xLanguage = showInstanceSnapshotRequest['X-Language'];
                    instanceId = showInstanceSnapshotRequest['instance_id'];
                    restoreTime = showInstanceSnapshotRequest['restore_time'];
                    backupId = showInstanceSnapshotRequest['backup_id'];
                }
            }

        
            if (instanceId !== null && instanceId !== undefined) {
                localVarQueryParameter['instance_id'] = instanceId;
            }
            if (restoreTime !== null && restoreTime !== undefined) {
                localVarQueryParameter['restore_time'] = restoreTime;
            }
            if (backupId !== null && backupId !== undefined) {
                localVarQueryParameter['backup_id'] = backupId;
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取指定ID的任务信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showJobDetail(showJobDetailRequest?: ShowJobDetailRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/jobs",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let id;

            if (showJobDetailRequest !== null && showJobDetailRequest !== undefined) {
                if (showJobDetailRequest instanceof ShowJobDetailRequest) {
                    id = showJobDetailRequest.id;
                } else {
                    id = showJobDetailRequest['id'];
                }
            }

        
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling showJobDetail.');
            }
            if (id !== null && id !== undefined) {
                localVarQueryParameter['id'] = id;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据参数模板ID获取指定参数模板详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showParameterGroupDetail(showParameterGroupDetailRequest?: ShowParameterGroupDetailRequest) {
            const options = {
                method: "GET",
                url: "/v3.1/{project_id}/configurations/{config_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let configId;
            
            let xLanguage;

            if (showParameterGroupDetailRequest !== null && showParameterGroupDetailRequest !== undefined) {
                if (showParameterGroupDetailRequest instanceof ShowParameterGroupDetailRequest) {
                    configId = showParameterGroupDetailRequest.configId;
                    xLanguage = showParameterGroupDetailRequest.xLanguage;
                } else {
                    configId = showParameterGroupDetailRequest['config_id'];
                    xLanguage = showParameterGroupDetailRequest['X-Language'];
                }
            }

        
            if (configId === null || configId === undefined) {
            throw new RequiredError('configId','Required parameter configId was null or undefined when calling showParameterGroupDetail.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.pathParams = { 'config_id': configId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showProjectQuotas(showProjectQuotasRequest?: ShowProjectQuotasRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/project-quotas",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let xLanguage;
            
            let type;

            if (showProjectQuotasRequest !== null && showProjectQuotasRequest !== undefined) {
                if (showProjectQuotasRequest instanceof ShowProjectQuotasRequest) {
                    xLanguage = showProjectQuotasRequest.xLanguage;
                    type = showProjectQuotasRequest.type;
                } else {
                    xLanguage = showProjectQuotasRequest['X-Language'];
                    type = showProjectQuotasRequest['type'];
                }
            }

        
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查看回收站的回收策略。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showRecyclePolicy(showRecyclePolicyRequest?: ShowRecyclePolicyRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/recycle-policy",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let xLanguage;

            if (showRecyclePolicyRequest !== null && showRecyclePolicyRequest !== undefined) {
                if (showRecyclePolicyRequest instanceof ShowRecyclePolicyRequest) {
                    xLanguage = showRecyclePolicyRequest.xLanguage;
                } else {
                    xLanguage = showRecyclePolicyRequest['X-Language'];
                }
            }

        
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询慢日志下载信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showSlowLogDownload(showSlowLogDownloadRequest?: ShowSlowLogDownloadRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/{instance_id}/slow-log/download",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let xLanguage;

            if (showSlowLogDownloadRequest !== null && showSlowLogDownloadRequest !== undefined) {
                if (showSlowLogDownloadRequest instanceof ShowSlowLogDownloadRequest) {
                    instanceId = showSlowLogDownloadRequest.instanceId;
                    xLanguage = showSlowLogDownloadRequest.xLanguage;
                } else {
                    instanceId = showSlowLogDownloadRequest['instance_id'];
                    xLanguage = showSlowLogDownloadRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showSlowLogDownload.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据时间点或者备份文件查询原实例信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showSourceInstanceDetail(showSourceInstanceDetailRequest?: ShowSourceInstanceDetailRequest) {
            const options = {
                method: "GET",
                url: "/v3.1/{project_id}/instance-snapshot",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let xLanguage;
            
            let instanceId;
            
            let restoreTime;
            
            let backupId;

            if (showSourceInstanceDetailRequest !== null && showSourceInstanceDetailRequest !== undefined) {
                if (showSourceInstanceDetailRequest instanceof ShowSourceInstanceDetailRequest) {
                    xLanguage = showSourceInstanceDetailRequest.xLanguage;
                    instanceId = showSourceInstanceDetailRequest.instanceId;
                    restoreTime = showSourceInstanceDetailRequest.restoreTime;
                    backupId = showSourceInstanceDetailRequest.backupId;
                } else {
                    xLanguage = showSourceInstanceDetailRequest['X-Language'];
                    instanceId = showSourceInstanceDetailRequest['instance_id'];
                    restoreTime = showSourceInstanceDetailRequest['restore_time'];
                    backupId = showSourceInstanceDetailRequest['backup_id'];
                }
            }

        
            if (instanceId !== null && instanceId !== undefined) {
                localVarQueryParameter['instance_id'] = instanceId;
            }
            if (restoreTime !== null && restoreTime !== undefined) {
                localVarQueryParameter['restore_time'] = restoreTime;
            }
            if (backupId !== null && backupId !== undefined) {
                localVarQueryParameter['backup_id'] = backupId;
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询实例SSL证书下载地址。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showSslCertDownloadLink(showSslCertDownloadLinkRequest?: ShowSslCertDownloadLinkRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/{instance_id}/ssl-cert/download-link",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let xLanguage;

            if (showSslCertDownloadLinkRequest !== null && showSslCertDownloadLinkRequest !== undefined) {
                if (showSslCertDownloadLinkRequest instanceof ShowSslCertDownloadLinkRequest) {
                    instanceId = showSslCertDownloadLinkRequest.instanceId;
                    xLanguage = showSslCertDownloadLinkRequest.xLanguage;
                } else {
                    instanceId = showSslCertDownloadLinkRequest['instance_id'];
                    xLanguage = showSslCertDownloadLinkRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showSslCertDownloadLink.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询实例可升级版本。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showUpgradeCandidateVersions(showUpgradeCandidateVersionsRequest?: ShowUpgradeCandidateVersionsRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/{instance_id}/db-upgrade/candidate-versions",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let xLanguage;

            if (showUpgradeCandidateVersionsRequest !== null && showUpgradeCandidateVersionsRequest !== undefined) {
                if (showUpgradeCandidateVersionsRequest instanceof ShowUpgradeCandidateVersionsRequest) {
                    instanceId = showUpgradeCandidateVersionsRequest.instanceId;
                    xLanguage = showUpgradeCandidateVersionsRequest.xLanguage;
                } else {
                    instanceId = showUpgradeCandidateVersionsRequest['instance_id'];
                    xLanguage = showUpgradeCandidateVersionsRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showUpgradeCandidateVersions.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询实例可升级版本。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showUpgradeCandidateVersionsDetails(showUpgradeCandidateVersionsDetailsRequest?: ShowUpgradeCandidateVersionsDetailsRequest) {
            const options = {
                method: "GET",
                url: "/v3.1/{project_id}/instances/{instance_id}/db-upgrade/candidate-versions",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let xLanguage;

            if (showUpgradeCandidateVersionsDetailsRequest !== null && showUpgradeCandidateVersionsDetailsRequest !== undefined) {
                if (showUpgradeCandidateVersionsDetailsRequest instanceof ShowUpgradeCandidateVersionsDetailsRequest) {
                    instanceId = showUpgradeCandidateVersionsDetailsRequest.instanceId;
                    xLanguage = showUpgradeCandidateVersionsDetailsRequest.xLanguage;
                } else {
                    instanceId = showUpgradeCandidateVersionsDetailsRequest['instance_id'];
                    xLanguage = showUpgradeCandidateVersionsDetailsRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showUpgradeCandidateVersionsDetails.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 启动数据库，同时支持节点级别的启动操作
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        startInstance(startInstanceRequest?: StartInstanceRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/{instance_id}/db-startup",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let xLanguage;

            if (startInstanceRequest !== null && startInstanceRequest !== undefined) {
                if (startInstanceRequest instanceof StartInstanceRequest) {
                    instanceId = startInstanceRequest.instanceId;
                    body = startInstanceRequest.body
                    xLanguage = startInstanceRequest.xLanguage;
                } else {
                    instanceId = startInstanceRequest['instance_id'];
                    body = startInstanceRequest['body'];
                    xLanguage = startInstanceRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling startInstance.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 开启指定实例的M兼容端口。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        startMysqlCompatibility(startMysqlCompatibilityRequest?: StartMysqlCompatibilityRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/{instance_id}/mysql-compatibility",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let xLanguage;

            if (startMysqlCompatibilityRequest !== null && startMysqlCompatibilityRequest !== undefined) {
                if (startMysqlCompatibilityRequest instanceof StartMysqlCompatibilityRequest) {
                    instanceId = startMysqlCompatibilityRequest.instanceId;
                    body = startMysqlCompatibilityRequest.body
                    xLanguage = startMysqlCompatibilityRequest.xLanguage;
                } else {
                    instanceId = startMysqlCompatibilityRequest['instance_id'];
                    body = startMysqlCompatibilityRequest['body'];
                    xLanguage = startMysqlCompatibilityRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling startMysqlCompatibility.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 停止进行中的备份，包括全备和差备。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        stopBackup(stopBackupRequest?: StopBackupRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/{instance_id}/backups/stop",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let xLanguage;

            if (stopBackupRequest !== null && stopBackupRequest !== undefined) {
                if (stopBackupRequest instanceof StopBackupRequest) {
                    instanceId = stopBackupRequest.instanceId;
                    xLanguage = stopBackupRequest.xLanguage;
                } else {
                    instanceId = stopBackupRequest['instance_id'];
                    xLanguage = stopBackupRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling stopBackup.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 停止数据库,同时支持节点级别的停止操作
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        stopInstance(stopInstanceRequest?: StopInstanceRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/{instance_id}/db-stop",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let xLanguage;

            if (stopInstanceRequest !== null && stopInstanceRequest !== undefined) {
                if (stopInstanceRequest instanceof StopInstanceRequest) {
                    instanceId = stopInstanceRequest.instanceId;
                    body = stopInstanceRequest.body
                    xLanguage = stopInstanceRequest.xLanguage;
                } else {
                    instanceId = stopInstanceRequest['instance_id'];
                    body = stopInstanceRequest['body'];
                    xLanguage = stopInstanceRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling stopInstance.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 指定实例变更参数模板。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        switchConfiguration(switchConfigurationRequest?: SwitchConfigurationRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/configurations/{config_id}/apply",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let configId;
            
            let xLanguage;

            if (switchConfigurationRequest !== null && switchConfigurationRequest !== undefined) {
                if (switchConfigurationRequest instanceof SwitchConfigurationRequest) {
                    configId = switchConfigurationRequest.configId;
                    body = switchConfigurationRequest.body
                    xLanguage = switchConfigurationRequest.xLanguage;
                } else {
                    configId = switchConfigurationRequest['config_id'];
                    body = switchConfigurationRequest['body'];
                    xLanguage = switchConfigurationRequest['X-Language'];
                }
            }

        
            if (configId === null || configId === undefined) {
            throw new RequiredError('configId','Required parameter configId was null or undefined when calling switchConfiguration.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'config_id': configId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 支持用户对单个或多个DN分片做主备切换，同一分组内只能指定一个新的备节点进行升主操作。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        switchShard(switchShardRequest?: SwitchShardRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/{instance_id}/switch-shard",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let xLanguage;

            if (switchShardRequest !== null && switchShardRequest !== undefined) {
                if (switchShardRequest instanceof SwitchShardRequest) {
                    instanceId = switchShardRequest.instanceId;
                    body = switchShardRequest.body
                    xLanguage = switchShardRequest.xLanguage;
                } else {
                    instanceId = switchShardRequest['instance_id'];
                    body = switchShardRequest['body'];
                    xLanguage = switchShardRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling switchShard.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 打开高级特性开关。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateFeatures(updateFeaturesRequest?: UpdateFeaturesRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/{instance_id}/advance-features",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let xLanguage;

            if (updateFeaturesRequest !== null && updateFeaturesRequest !== undefined) {
                if (updateFeaturesRequest instanceof UpdateFeaturesRequest) {
                    instanceId = updateFeaturesRequest.instanceId;
                    body = updateFeaturesRequest.body
                    xLanguage = updateFeaturesRequest.xLanguage;
                } else {
                    instanceId = updateFeaturesRequest['instance_id'];
                    body = updateFeaturesRequest['body'];
                    xLanguage = updateFeaturesRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updateFeatures.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改指定实例的参数。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateInstanceConfiguration(updateInstanceConfigurationRequest?: UpdateInstanceConfigurationRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/instances/{instance_id}/configurations",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let xLanguage;

            if (updateInstanceConfigurationRequest !== null && updateInstanceConfigurationRequest !== undefined) {
                if (updateInstanceConfigurationRequest instanceof UpdateInstanceConfigurationRequest) {
                    instanceId = updateInstanceConfigurationRequest.instanceId;
                    body = updateInstanceConfigurationRequest.body
                    xLanguage = updateInstanceConfigurationRequest.xLanguage;
                } else {
                    instanceId = updateInstanceConfigurationRequest['instance_id'];
                    body = updateInstanceConfigurationRequest['body'];
                    xLanguage = updateInstanceConfigurationRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updateInstanceConfiguration.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改实例名称。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateInstanceName(updateInstanceNameRequest?: UpdateInstanceNameRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/instances/{instance_id}/name",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let xLanguage;

            if (updateInstanceNameRequest !== null && updateInstanceNameRequest !== undefined) {
                if (updateInstanceNameRequest instanceof UpdateInstanceNameRequest) {
                    instanceId = updateInstanceNameRequest.instanceId;
                    body = updateInstanceNameRequest.body
                    xLanguage = updateInstanceNameRequest.xLanguage;
                } else {
                    instanceId = updateInstanceNameRequest['instance_id'];
                    body = updateInstanceNameRequest['body'];
                    xLanguage = updateInstanceNameRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updateInstanceName.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新指定实例的M兼容端口服务配置。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateMysqlCompatibility(updateMysqlCompatibilityRequest?: UpdateMysqlCompatibilityRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/instances/{instance_id}/mysql-compatibility",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let xLanguage;

            if (updateMysqlCompatibilityRequest !== null && updateMysqlCompatibilityRequest !== undefined) {
                if (updateMysqlCompatibilityRequest instanceof UpdateMysqlCompatibilityRequest) {
                    instanceId = updateMysqlCompatibilityRequest.instanceId;
                    body = updateMysqlCompatibilityRequest.body
                    xLanguage = updateMysqlCompatibilityRequest.xLanguage;
                } else {
                    instanceId = updateMysqlCompatibilityRequest['instance_id'];
                    body = updateMysqlCompatibilityRequest['body'];
                    xLanguage = updateMysqlCompatibilityRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updateMysqlCompatibility.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * GaussDB(for openGauss)实例版本升级。包括灰度升级，就地升级，热补丁升级等三种升级方式。 
         * 就地升级：
         * 就地升级需要停止业务进行，会一次性升级集群中所有节点。就地升级需要暂停业务30分钟来升级。 
         * 灰度升级： 
         * 升级自动提交：所有节点进程一起升级，在升级过程中有大概10秒的业务中断，不阻塞其他业务操作。 
         * 升级待观察：升级待观察，将数据库升级过程细分为升级，提交两个阶段。升级阶段可以根据部署方式细分为按分片或者按az的滚动升级，提交阶段可以对升级完成后的实例进行业务测试，根据需要可以选择提交升级，或者升级回退。每个主dn或者cn组件升级就有一次10秒业务中断。升级过程均是先管理面，再数据面，由备到主的升级方式。 分布式实例：根据分片数滚动升级，每次滚动升级可以根据选择的分片数进行指定分片数量的节点进行升级。 主备版实例：根据AZ数进行滚动升级，每次滚动升级可以根据选择的AZ进行1个分区或者多个分区进行升级。 
         * 提交升级：提交升级。在升级完成，进入提交阶段时。业务测试正常后提交升级，完成本次升级流程。
         * 升级回退：升级回退，在升级完成，进入提交阶段时。可以根据需要回退本次升级，回退到升级前的版本。
         * 热补丁升级： 
         * 升级自动提交：热补丁自动升级并提交，中间无业务中断，仅修复产品bug。 
         * 升级回退：热补丁回退，无业务中断时间
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        upgradeInstanceVersion(upgradeInstanceVersionRequest?: UpgradeInstanceVersionRequest) {
            const options = {
                method: "PUT",
                url: "/v3.1/{project_id}/instances/{instance_id}/db-upgrade",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let xLanguage;

            if (upgradeInstanceVersionRequest !== null && upgradeInstanceVersionRequest !== undefined) {
                if (upgradeInstanceVersionRequest instanceof UpgradeInstanceVersionRequest) {
                    instanceId = upgradeInstanceVersionRequest.instanceId;
                    body = upgradeInstanceVersionRequest.body
                    xLanguage = upgradeInstanceVersionRequest.xLanguage;
                } else {
                    instanceId = upgradeInstanceVersionRequest['instance_id'];
                    body = upgradeInstanceVersionRequest['body'];
                    xLanguage = upgradeInstanceVersionRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling upgradeInstanceVersion.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * GaussDB批量实例版本升级。包括灰度升级，就地升级、热补丁升级三种升级方式。
         * 就地升级：
         * 就地升级需要停止业务进行，会一次性升级集群中所有节点。就地升级需要暂停业务30分钟来升级。
         * 灰度升级：
         * 升级自动提交：所有节点进程一起升级，在升级过程中有大概10秒的业务中断，不阻塞其他业务操作。
         * 升级待观察：升级待观察，将数据库升级过程细分为升级，提交两个阶段。升级阶段可以根据部署方式细分为按分片或者按az的滚动升级，提交阶段可以对升级完成后的实例进行业务测试，根据需要可以选择提交升级，或者升级回退。每个主dn或者cn组件升级就有一次10秒业务中断。升级过程均是先管理面，再数据面，由备到主的升级方式。 分布式实例：根据分片数滚动升级，每次滚动升级可以根据选择的分片数进行指定分片数量的节点进行升级。 主备版实例：根据AZ数进行滚动升级，每次滚动升级可以根据选择的AZ进行1个分区或者多个分区进行升级。
         * 热补丁升级：
         * 升级自动提交：热补丁自动升级并提交，中间无业务中断，仅修复产品bug。
         * 提交升级：提交升级。在升级完成，进入提交阶段时。业务测试正常后提交升级，完成本次升级流程。
         * 升级回退：升级回退，在升级完成，进入提交阶段时。可以根据需要回退本次升级，回退到升级前的版本。
         * 批量实例可升级版本大于当前所有实例的引擎版本，且选择的所有实例，其升级方式和操作方式要保持一致。
         * 若批量实例升级方式是灰度升级，默认升级所有az和分片。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        upgradeInstancesVersion(upgradeInstancesVersionRequest?: UpgradeInstancesVersionRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/instances/db-upgrade",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xLanguage;

            if (upgradeInstancesVersionRequest !== null && upgradeInstancesVersionRequest !== undefined) {
                if (upgradeInstancesVersionRequest instanceof UpgradeInstancesVersionRequest) {
                    body = upgradeInstancesVersionRequest.body
                    xLanguage = upgradeInstancesVersionRequest.xLanguage;
                } else {
                    body = upgradeInstancesVersionRequest['body'];
                    xLanguage = upgradeInstancesVersionRequest['X-Language'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
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
         * 校验参数组名称是否存在。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        validateParaGroupName(validateParaGroupNameRequest?: ValidateParaGroupNameRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/configurations/name-validation",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let name;
            
            let xLanguage;

            if (validateParaGroupNameRequest !== null && validateParaGroupNameRequest !== undefined) {
                if (validateParaGroupNameRequest instanceof ValidateParaGroupNameRequest) {
                    name = validateParaGroupNameRequest.name;
                    xLanguage = validateParaGroupNameRequest.xLanguage;
                } else {
                    name = validateParaGroupNameRequest['name'];
                    xLanguage = validateParaGroupNameRequest['X-Language'];
                }
            }

        
            if (name === null || name === undefined) {
                throw new RequiredError('name','Required parameter name was null or undefined when calling validateParaGroupName.');
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 校验数据库root用户密码的安全性。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        validateWeakPassword(validateWeakPasswordRequest?: ValidateWeakPasswordRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/weak-password-verification",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xLanguage;

            if (validateWeakPasswordRequest !== null && validateWeakPasswordRequest !== undefined) {
                if (validateWeakPasswordRequest instanceof ValidateWeakPasswordRequest) {
                    body = validateWeakPasswordRequest.body
                    xLanguage = validateWeakPasswordRequest.xLanguage;
                } else {
                    body = validateWeakPasswordRequest['body'];
                    xLanguage = validateWeakPasswordRequest['X-Language'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
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
         * 根据具体范围和类型，进行限流任务的创建
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createLimitTask(createLimitTaskRequest?: CreateLimitTaskRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/{instance_id}/limit-task",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (createLimitTaskRequest !== null && createLimitTaskRequest !== undefined) {
                if (createLimitTaskRequest instanceof CreateLimitTaskRequest) {
                    instanceId = createLimitTaskRequest.instanceId;
                    body = createLimitTaskRequest.body
                } else {
                    instanceId = createLimitTaskRequest['instance_id'];
                    body = createLimitTaskRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling createLimitTask.');
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
         * 根据task_id进行限流任务的删除
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteLimitTask(deleteLimitTaskRequest?: DeleteLimitTaskRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{project_id}/instances/{instance_id}/limit-task/{task_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let taskId;
            
            let instanceId;

            if (deleteLimitTaskRequest !== null && deleteLimitTaskRequest !== undefined) {
                if (deleteLimitTaskRequest instanceof DeleteLimitTaskRequest) {
                    taskId = deleteLimitTaskRequest.taskId;
                    instanceId = deleteLimitTaskRequest.instanceId;
                } else {
                    taskId = deleteLimitTaskRequest['task_id'];
                    instanceId = deleteLimitTaskRequest['instance_id'];
                }
            }

        
            if (taskId === null || taskId === undefined) {
            throw new RequiredError('taskId','Required parameter taskId was null or undefined when calling deleteLimitTask.');
            }
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling deleteLimitTask.');
            }

            options.pathParams = { 'task_id': taskId,'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据指定条件查询限流任务列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listLimitTask(listLimitTaskRequest?: ListLimitTaskRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/{instance_id}/limit-task-list",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let taskScope;
            
            let limitType;
            
            let limitTypeValue;
            
            let taskName;
            
            let sqlModel;
            
            let ruleName;
            
            let startTime;
            
            let endTime;
            
            let offset;
            
            let limit;

            if (listLimitTaskRequest !== null && listLimitTaskRequest !== undefined) {
                if (listLimitTaskRequest instanceof ListLimitTaskRequest) {
                    instanceId = listLimitTaskRequest.instanceId;
                    taskScope = listLimitTaskRequest.taskScope;
                    limitType = listLimitTaskRequest.limitType;
                    limitTypeValue = listLimitTaskRequest.limitTypeValue;
                    taskName = listLimitTaskRequest.taskName;
                    sqlModel = listLimitTaskRequest.sqlModel;
                    ruleName = listLimitTaskRequest.ruleName;
                    startTime = listLimitTaskRequest.startTime;
                    endTime = listLimitTaskRequest.endTime;
                    offset = listLimitTaskRequest.offset;
                    limit = listLimitTaskRequest.limit;
                } else {
                    instanceId = listLimitTaskRequest['instance_id'];
                    taskScope = listLimitTaskRequest['task_scope'];
                    limitType = listLimitTaskRequest['limit_type'];
                    limitTypeValue = listLimitTaskRequest['limit_type_value'];
                    taskName = listLimitTaskRequest['task_name'];
                    sqlModel = listLimitTaskRequest['sql_model'];
                    ruleName = listLimitTaskRequest['rule_name'];
                    startTime = listLimitTaskRequest['start_time'];
                    endTime = listLimitTaskRequest['end_time'];
                    offset = listLimitTaskRequest['offset'];
                    limit = listLimitTaskRequest['limit'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listLimitTask.');
            }
            if (taskScope !== null && taskScope !== undefined) {
                localVarQueryParameter['task_scope'] = taskScope;
            }
            if (limitType !== null && limitType !== undefined) {
                localVarQueryParameter['limit_type'] = limitType;
            }
            if (limitTypeValue !== null && limitTypeValue !== undefined) {
                localVarQueryParameter['limit_type_value'] = limitTypeValue;
            }
            if (taskName !== null && taskName !== undefined) {
                localVarQueryParameter['task_name'] = taskName;
            }
            if (sqlModel !== null && sqlModel !== undefined) {
                localVarQueryParameter['sql_model'] = sqlModel;
            }
            if (ruleName !== null && ruleName !== undefined) {
                localVarQueryParameter['rule_name'] = ruleName;
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

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询节点的sql模板列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listNodeLimitSqlModel(listNodeLimitSqlModelRequest?: ListNodeLimitSqlModelRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/{instance_id}/list-node-limit-sql-model",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let nodeId;
            
            let sqlModel;
            
            let offset;
            
            let limit;

            if (listNodeLimitSqlModelRequest !== null && listNodeLimitSqlModelRequest !== undefined) {
                if (listNodeLimitSqlModelRequest instanceof ListNodeLimitSqlModelRequest) {
                    instanceId = listNodeLimitSqlModelRequest.instanceId;
                    nodeId = listNodeLimitSqlModelRequest.nodeId;
                    sqlModel = listNodeLimitSqlModelRequest.sqlModel;
                    offset = listNodeLimitSqlModelRequest.offset;
                    limit = listNodeLimitSqlModelRequest.limit;
                } else {
                    instanceId = listNodeLimitSqlModelRequest['instance_id'];
                    nodeId = listNodeLimitSqlModelRequest['node_id'];
                    sqlModel = listNodeLimitSqlModelRequest['sql_model'];
                    offset = listNodeLimitSqlModelRequest['offset'];
                    limit = listNodeLimitSqlModelRequest['limit'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listNodeLimitSqlModel.');
            }
            if (nodeId === null || nodeId === undefined) {
                throw new RequiredError('nodeId','Required parameter nodeId was null or undefined when calling listNodeLimitSqlModel.');
            }
            if (nodeId !== null && nodeId !== undefined) {
                localVarQueryParameter['node_id'] = nodeId;
            }
            if (sqlModel !== null && sqlModel !== undefined) {
                localVarQueryParameter['sql_model'] = sqlModel;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询限流任务详情
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showLimitTask(showLimitTaskRequest?: ShowLimitTaskRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/{instance_id}/limit-task/{task_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let taskId;
            
            let instanceId;

            if (showLimitTaskRequest !== null && showLimitTaskRequest !== undefined) {
                if (showLimitTaskRequest instanceof ShowLimitTaskRequest) {
                    taskId = showLimitTaskRequest.taskId;
                    instanceId = showLimitTaskRequest.instanceId;
                } else {
                    taskId = showLimitTaskRequest['task_id'];
                    instanceId = showLimitTaskRequest['instance_id'];
                }
            }

        
            if (taskId === null || taskId === undefined) {
            throw new RequiredError('taskId','Required parameter taskId was null or undefined when calling showLimitTask.');
            }
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showLimitTask.');
            }

            options.pathParams = { 'task_id': taskId,'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 同步内核侧sql限流数据至管控侧
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        syncLimitData(syncLimitDataRequest?: SyncLimitDataRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/{instance_id}/sync-limit-task",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;

            if (syncLimitDataRequest !== null && syncLimitDataRequest !== undefined) {
                if (syncLimitDataRequest instanceof SyncLimitDataRequest) {
                    instanceId = syncLimitDataRequest.instanceId;
                } else {
                    instanceId = syncLimitDataRequest['instance_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling syncLimitData.');
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据新的条件进行限流任务的更新
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateLimitTask(updateLimitTaskRequest?: UpdateLimitTaskRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/instances/{instance_id}/limit-task/{task_id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let taskId;
            
            let instanceId;

            if (updateLimitTaskRequest !== null && updateLimitTaskRequest !== undefined) {
                if (updateLimitTaskRequest instanceof UpdateLimitTaskRequest) {
                    taskId = updateLimitTaskRequest.taskId;
                    instanceId = updateLimitTaskRequest.instanceId;
                    body = updateLimitTaskRequest.body
                } else {
                    taskId = updateLimitTaskRequest['task_id'];
                    instanceId = updateLimitTaskRequest['instance_id'];
                    body = updateLimitTaskRequest['body'];
                }
            }

        
            if (taskId === null || taskId === undefined) {
            throw new RequiredError('taskId','Required parameter taskId was null or undefined when calling updateLimitTask.');
            }
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updateLimitTask.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'task_id': taskId,'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
    }
};

function newClient(client: HcClient): GaussDBforopenGaussClient {
    return new GaussDBforopenGaussClient(client);
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