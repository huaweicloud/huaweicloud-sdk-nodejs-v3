import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { ActionBody } from './model/ActionBody';
import { ApiVersionResponse } from './model/ApiVersionResponse';
import { ApplicableInstanceRsp } from './model/ApplicableInstanceRsp';
import { ApplyConfigurationRequest } from './model/ApplyConfigurationRequest';
import { ApplyConfigurationRequestBody } from './model/ApplyConfigurationRequestBody';
import { ApplyConfigurationResponse } from './model/ApplyConfigurationResponse';
import { ApplyConfigurationToInstancesRequest } from './model/ApplyConfigurationToInstancesRequest';
import { ApplyConfigurationToInstancesRequestBody } from './model/ApplyConfigurationToInstancesRequestBody';
import { ApplyConfigurationToInstancesResponse } from './model/ApplyConfigurationToInstancesResponse';
import { ApplyHistoryRsp } from './model/ApplyHistoryRsp';
import { AvailabilityZoneDetail } from './model/AvailabilityZoneDetail';
import { Backup } from './model/Backup';
import { BackupPolicy } from './model/BackupPolicy';
import { BackupStrategyOption } from './model/BackupStrategyOption';
import { BackupStrategyResult } from './model/BackupStrategyResult';
import { BatchDeleteManualBackupRequest } from './model/BatchDeleteManualBackupRequest';
import { BatchDeleteManualBackupRequestBody } from './model/BatchDeleteManualBackupRequestBody';
import { BatchDeleteManualBackupResponse } from './model/BatchDeleteManualBackupResponse';
import { BatchTagActionRequest } from './model/BatchTagActionRequest';
import { BatchTagActionRequestBody } from './model/BatchTagActionRequestBody';
import { BatchTagActionResponse } from './model/BatchTagActionResponse';
import { BatchTagActionTagOption } from './model/BatchTagActionTagOption';
import { BatchUpgradeDatabaseVersionRequest } from './model/BatchUpgradeDatabaseVersionRequest';
import { BatchUpgradeDatabaseVersionRequestBody } from './model/BatchUpgradeDatabaseVersionRequestBody';
import { BatchUpgradeDatabaseVersionResponse } from './model/BatchUpgradeDatabaseVersionResponse';
import { BigKeysInfoResponseBody } from './model/BigKeysInfoResponseBody';
import { CancelInstanceScheduleWindowRequest } from './model/CancelInstanceScheduleWindowRequest';
import { CancelInstanceScheduleWindowResponse } from './model/CancelInstanceScheduleWindowResponse';
import { CassandraSlowLogDetail } from './model/CassandraSlowLogDetail';
import { ChargeInfoOption } from './model/ChargeInfoOption';
import { ChargeInfoResult } from './model/ChargeInfoResult';
import { CheckDisasterRecoveryOperationRequest } from './model/CheckDisasterRecoveryOperationRequest';
import { CheckDisasterRecoveryOperationResponse } from './model/CheckDisasterRecoveryOperationResponse';
import { CheckWeekPasswordRequest } from './model/CheckWeekPasswordRequest';
import { CheckWeekPasswordRequestBody } from './model/CheckWeekPasswordRequestBody';
import { CheckWeekPasswordResponse } from './model/CheckWeekPasswordResponse';
import { ClearInstanceSessionsRequest } from './model/ClearInstanceSessionsRequest';
import { ClearInstanceSessionsResponse } from './model/ClearInstanceSessionsResponse';
import { CommandInfo } from './model/CommandInfo';
import { CompareConfigurationRequest } from './model/CompareConfigurationRequest';
import { CompareConfigurationRequestBody } from './model/CompareConfigurationRequestBody';
import { CompareConfigurationResponse } from './model/CompareConfigurationResponse';
import { ComputeFlavor } from './model/ComputeFlavor';
import { ConfigurationHistoryRsp } from './model/ConfigurationHistoryRsp';
import { ConfigurationParameterResult } from './model/ConfigurationParameterResult';
import { ConstructDisasterRecoveryBody } from './model/ConstructDisasterRecoveryBody';
import { ConstructDisasterRecoveryInstance } from './model/ConstructDisasterRecoveryInstance';
import { CopyConfigurationRequest } from './model/CopyConfigurationRequest';
import { CopyConfigurationRequestBody } from './model/CopyConfigurationRequestBody';
import { CopyConfigurationResponse } from './model/CopyConfigurationResponse';
import { CreateBackRequest } from './model/CreateBackRequest';
import { CreateBackResponse } from './model/CreateBackResponse';
import { CreateColdVolumeRequest } from './model/CreateColdVolumeRequest';
import { CreateColdVolumeRequestBody } from './model/CreateColdVolumeRequestBody';
import { CreateColdVolumeResponse } from './model/CreateColdVolumeResponse';
import { CreateConfigurationDatastoreOption } from './model/CreateConfigurationDatastoreOption';
import { CreateConfigurationRequest } from './model/CreateConfigurationRequest';
import { CreateConfigurationRequestBody } from './model/CreateConfigurationRequestBody';
import { CreateConfigurationResponse } from './model/CreateConfigurationResponse';
import { CreateConfigurationResult } from './model/CreateConfigurationResult';
import { CreateDbCacheMappingRequest } from './model/CreateDbCacheMappingRequest';
import { CreateDbCacheMappingRequestBody } from './model/CreateDbCacheMappingRequestBody';
import { CreateDbCacheMappingResponse } from './model/CreateDbCacheMappingResponse';
import { CreateDbCacheRuleRequest } from './model/CreateDbCacheRuleRequest';
import { CreateDbCacheRuleRequestBody } from './model/CreateDbCacheRuleRequestBody';
import { CreateDbCacheRuleResponse } from './model/CreateDbCacheRuleResponse';
import { CreateDbUserRequest } from './model/CreateDbUserRequest';
import { CreateDbUserResponse } from './model/CreateDbUserResponse';
import { CreateDisasterRecoveryRequest } from './model/CreateDisasterRecoveryRequest';
import { CreateDisasterRecoveryResponse } from './model/CreateDisasterRecoveryResponse';
import { CreateInstanceFlavorOption } from './model/CreateInstanceFlavorOption';
import { CreateInstanceFlavorResult } from './model/CreateInstanceFlavorResult';
import { CreateInstanceRequest } from './model/CreateInstanceRequest';
import { CreateInstanceRequestBody } from './model/CreateInstanceRequestBody';
import { CreateInstanceResponse } from './model/CreateInstanceResponse';
import { DataStoreList } from './model/DataStoreList';
import { Datastore } from './model/Datastore';
import { DatastoreOption } from './model/DatastoreOption';
import { DatastoreResult } from './model/DatastoreResult';
import { DedicatedResourceCapacity } from './model/DedicatedResourceCapacity';
import { DeleteBackupRequest } from './model/DeleteBackupRequest';
import { DeleteBackupResponse } from './model/DeleteBackupResponse';
import { DeleteConfigurationRequest } from './model/DeleteConfigurationRequest';
import { DeleteConfigurationResponse } from './model/DeleteConfigurationResponse';
import { DeleteDbCacheMappingRequest } from './model/DeleteDbCacheMappingRequest';
import { DeleteDbCacheMappingRequestBody } from './model/DeleteDbCacheMappingRequestBody';
import { DeleteDbCacheMappingResponse } from './model/DeleteDbCacheMappingResponse';
import { DeleteDbCacheRuleRequest } from './model/DeleteDbCacheRuleRequest';
import { DeleteDbCacheRuleRequestBody } from './model/DeleteDbCacheRuleRequestBody';
import { DeleteDbCacheRuleResponse } from './model/DeleteDbCacheRuleResponse';
import { DeleteDbUserRequest } from './model/DeleteDbUserRequest';
import { DeleteDbUserResponse } from './model/DeleteDbUserResponse';
import { DeleteDisasterRecoveryRequest } from './model/DeleteDisasterRecoveryRequest';
import { DeleteDisasterRecoveryResponse } from './model/DeleteDisasterRecoveryResponse';
import { DeleteEnlargeFailNodeRequest } from './model/DeleteEnlargeFailNodeRequest';
import { DeleteEnlargeFailNodeRequestBody } from './model/DeleteEnlargeFailNodeRequestBody';
import { DeleteEnlargeFailNodeResponse } from './model/DeleteEnlargeFailNodeResponse';
import { DeleteInstanceRequest } from './model/DeleteInstanceRequest';
import { DeleteInstanceResponse } from './model/DeleteInstanceResponse';
import { DeleteInstancesSessionRequest } from './model/DeleteInstancesSessionRequest';
import { DeleteInstancesSessionRequestBody } from './model/DeleteInstancesSessionRequestBody';
import { DeleteInstancesSessionResponse } from './model/DeleteInstancesSessionResponse';
import { DeleteLtsConfigsRequest } from './model/DeleteLtsConfigsRequest';
import { DeleteLtsConfigsRequestBody } from './model/DeleteLtsConfigsRequestBody';
import { DeleteLtsConfigsResponse } from './model/DeleteLtsConfigsResponse';
import { DeleteRedisDisabledCommandsRequest } from './model/DeleteRedisDisabledCommandsRequest';
import { DeleteRedisDisabledCommandsRequestBody } from './model/DeleteRedisDisabledCommandsRequestBody';
import { DeleteRedisDisabledCommandsResponse } from './model/DeleteRedisDisabledCommandsResponse';
import { DifferentDetails } from './model/DifferentDetails';
import { DiskAutoExpansionPolicy } from './model/DiskAutoExpansionPolicy';
import { ErrorLogList } from './model/ErrorLogList';
import { ErrorResponseBody } from './model/ErrorResponseBody';
import { ExpandInstanceNodeRequest } from './model/ExpandInstanceNodeRequest';
import { ExpandInstanceNodeRequestBody } from './model/ExpandInstanceNodeRequestBody';
import { ExpandInstanceNodeResponse } from './model/ExpandInstanceNodeResponse';
import { HotKeysInfoResponseBody } from './model/HotKeysInfoResponseBody';
import { InfluxdbSlowLogDetail } from './model/InfluxdbSlowLogDetail';
import { InstanceLogConfig } from './model/InstanceLogConfig';
import { InstanceLogConfigDetail } from './model/InstanceLogConfigDetail';
import { InstanceResult } from './model/InstanceResult';
import { InstanceTagResult } from './model/InstanceTagResult';
import { InstancesDatastoreResult } from './model/InstancesDatastoreResult';
import { JobDetail } from './model/JobDetail';
import { JobInstanceInfo } from './model/JobInstanceInfo';
import { Links } from './model/Links';
import { ListApiVersionRequest } from './model/ListApiVersionRequest';
import { ListApiVersionResponse } from './model/ListApiVersionResponse';
import { ListAvailableFlavorInfosRequest } from './model/ListAvailableFlavorInfosRequest';
import { ListAvailableFlavorInfosResponse } from './model/ListAvailableFlavorInfosResponse';
import { ListCassandraSlowLogsRequest } from './model/ListCassandraSlowLogsRequest';
import { ListCassandraSlowLogsRequestBody } from './model/ListCassandraSlowLogsRequestBody';
import { ListCassandraSlowLogsResponse } from './model/ListCassandraSlowLogsResponse';
import { ListConfigurationDatastoresRequest } from './model/ListConfigurationDatastoresRequest';
import { ListConfigurationDatastoresResponse } from './model/ListConfigurationDatastoresResponse';
import { ListConfigurationTemplatesRequest } from './model/ListConfigurationTemplatesRequest';
import { ListConfigurationTemplatesResponse } from './model/ListConfigurationTemplatesResponse';
import { ListConfigurationsRequest } from './model/ListConfigurationsRequest';
import { ListConfigurationsResponse } from './model/ListConfigurationsResponse';
import { ListConfigurationsResult } from './model/ListConfigurationsResult';
import { ListDatastoresRequest } from './model/ListDatastoresRequest';
import { ListDatastoresResponse } from './model/ListDatastoresResponse';
import { ListDbCacheMappingsRequest } from './model/ListDbCacheMappingsRequest';
import { ListDbCacheMappingsResponse } from './model/ListDbCacheMappingsResponse';
import { ListDbCacheRulesRequest } from './model/ListDbCacheRulesRequest';
import { ListDbCacheRulesResponse } from './model/ListDbCacheRulesResponse';
import { ListDbUsersRequest } from './model/ListDbUsersRequest';
import { ListDbUsersResponse } from './model/ListDbUsersResponse';
import { ListDedicatedResourceResult } from './model/ListDedicatedResourceResult';
import { ListDedicatedResourcesRequest } from './model/ListDedicatedResourcesRequest';
import { ListDedicatedResourcesResponse } from './model/ListDedicatedResourcesResponse';
import { ListEpsQuotasRequest } from './model/ListEpsQuotasRequest';
import { ListEpsQuotasResponse } from './model/ListEpsQuotasResponse';
import { ListFlavorInfosRequest } from './model/ListFlavorInfosRequest';
import { ListFlavorInfosResponse } from './model/ListFlavorInfosResponse';
import { ListFlavorsRequest } from './model/ListFlavorsRequest';
import { ListFlavorsResponse } from './model/ListFlavorsResponse';
import { ListFlavorsResult } from './model/ListFlavorsResult';
import { ListInfluxdbSlowLogsRequest } from './model/ListInfluxdbSlowLogsRequest';
import { ListInfluxdbSlowLogsRequestBody } from './model/ListInfluxdbSlowLogsRequestBody';
import { ListInfluxdbSlowLogsResponse } from './model/ListInfluxdbSlowLogsResponse';
import { ListInstanceDatabasesRequest } from './model/ListInstanceDatabasesRequest';
import { ListInstanceDatabasesResponse } from './model/ListInstanceDatabasesResponse';
import { ListInstanceMaintenanceWindowRequest } from './model/ListInstanceMaintenanceWindowRequest';
import { ListInstanceMaintenanceWindowResponse } from './model/ListInstanceMaintenanceWindowResponse';
import { ListInstanceSessionsRequest } from './model/ListInstanceSessionsRequest';
import { ListInstanceSessionsResponse } from './model/ListInstanceSessionsResponse';
import { ListInstanceTagsRequest } from './model/ListInstanceTagsRequest';
import { ListInstanceTagsResponse } from './model/ListInstanceTagsResponse';
import { ListInstanceTagsResult } from './model/ListInstanceTagsResult';
import { ListInstancesBackupStrategyResult } from './model/ListInstancesBackupStrategyResult';
import { ListInstancesByResourceTagsRequest } from './model/ListInstancesByResourceTagsRequest';
import { ListInstancesByResourceTagsResponse } from './model/ListInstancesByResourceTagsResponse';
import { ListInstancesByTagsRequest } from './model/ListInstancesByTagsRequest';
import { ListInstancesByTagsRequestBody } from './model/ListInstancesByTagsRequestBody';
import { ListInstancesByTagsResponse } from './model/ListInstancesByTagsResponse';
import { ListInstancesDatastoreResult } from './model/ListInstancesDatastoreResult';
import { ListInstancesGroupResult } from './model/ListInstancesGroupResult';
import { ListInstancesNodeResult } from './model/ListInstancesNodeResult';
import { ListInstancesRequest } from './model/ListInstancesRequest';
import { ListInstancesResponse } from './model/ListInstancesResponse';
import { ListInstancesResult } from './model/ListInstancesResult';
import { ListInstancesSessionRequest } from './model/ListInstancesSessionRequest';
import { ListInstancesSessionRespondBodySessions } from './model/ListInstancesSessionRespondBodySessions';
import { ListInstancesSessionResponse } from './model/ListInstancesSessionResponse';
import { ListInstancesSessionStatisticsRequest } from './model/ListInstancesSessionStatisticsRequest';
import { ListInstancesSessionStatisticsRespondBodyTopSourceIps } from './model/ListInstancesSessionStatisticsRespondBodyTopSourceIps';
import { ListInstancesSessionStatisticsResponse } from './model/ListInstancesSessionStatisticsResponse';
import { ListJobsRequest } from './model/ListJobsRequest';
import { ListJobsResponse } from './model/ListJobsResponse';
import { ListLtsConfigsRequest } from './model/ListLtsConfigsRequest';
import { ListLtsConfigsResponse } from './model/ListLtsConfigsResponse';
import { ListMongodbErrorLogsRequest } from './model/ListMongodbErrorLogsRequest';
import { ListMongodbErrorLogsRequestBody } from './model/ListMongodbErrorLogsRequestBody';
import { ListMongodbErrorLogsResponse } from './model/ListMongodbErrorLogsResponse';
import { ListMongodbSlowLogsRequest } from './model/ListMongodbSlowLogsRequest';
import { ListMongodbSlowLogsRequestBody } from './model/ListMongodbSlowLogsRequestBody';
import { ListMongodbSlowLogsResponse } from './model/ListMongodbSlowLogsResponse';
import { ListNodeSessionsResult } from './model/ListNodeSessionsResult';
import { ListNodeSessionsResultSessions } from './model/ListNodeSessionsResultSessions';
import { ListNosqlTaskListRequest } from './model/ListNosqlTaskListRequest';
import { ListNosqlTaskListResponse } from './model/ListNosqlTaskListResponse';
import { ListProjectTagsRequest } from './model/ListProjectTagsRequest';
import { ListProjectTagsResponse } from './model/ListProjectTagsResponse';
import { ListRecycleInstancesRequest } from './model/ListRecycleInstancesRequest';
import { ListRecycleInstancesResponse } from './model/ListRecycleInstancesResponse';
import { ListRedisPitrRestoreTimeRequest } from './model/ListRedisPitrRestoreTimeRequest';
import { ListRedisPitrRestoreTimeResponse } from './model/ListRedisPitrRestoreTimeResponse';
import { ListRedisSlowLogsRequest } from './model/ListRedisSlowLogsRequest';
import { ListRedisSlowLogsRequestBody } from './model/ListRedisSlowLogsRequestBody';
import { ListRedisSlowLogsResponse } from './model/ListRedisSlowLogsResponse';
import { ListRestoreDatabasesRequest } from './model/ListRestoreDatabasesRequest';
import { ListRestoreDatabasesResponse } from './model/ListRestoreDatabasesResponse';
import { ListRestoreTablesRequest } from './model/ListRestoreTablesRequest';
import { ListRestoreTablesResponse } from './model/ListRestoreTablesResponse';
import { ListRestoreTimeRequest } from './model/ListRestoreTimeRequest';
import { ListRestoreTimeResponse } from './model/ListRestoreTimeResponse';
import { ListSlowLogsRequest } from './model/ListSlowLogsRequest';
import { ListSlowLogsResponse } from './model/ListSlowLogsResponse';
import { LogInstanceInfo } from './model/LogInstanceInfo';
import { MatchOption } from './model/MatchOption';
import { ModifyDbUserPrivilegeRequest } from './model/ModifyDbUserPrivilegeRequest';
import { ModifyDbUserPrivilegeResponse } from './model/ModifyDbUserPrivilegeResponse';
import { ModifyEpsQuotasRequest } from './model/ModifyEpsQuotasRequest';
import { ModifyEpsQuotasResponse } from './model/ModifyEpsQuotasResponse';
import { ModifyInstanceMaintenanceWindowRequest } from './model/ModifyInstanceMaintenanceWindowRequest';
import { ModifyInstanceMaintenanceWindowResponse } from './model/ModifyInstanceMaintenanceWindowResponse';
import { ModifyInstanceOpsWindowV3Req } from './model/ModifyInstanceOpsWindowV3Req';
import { ModifyPortRequest } from './model/ModifyPortRequest';
import { ModifyPortRequestBody } from './model/ModifyPortRequestBody';
import { ModifyPortResponse } from './model/ModifyPortResponse';
import { ModifyPublicIpRequest } from './model/ModifyPublicIpRequest';
import { ModifyPublicIpRequestBody } from './model/ModifyPublicIpRequestBody';
import { ModifyPublicIpResponse } from './model/ModifyPublicIpResponse';
import { ModifyVolumeRequest } from './model/ModifyVolumeRequest';
import { ModifyVolumeRequestBody } from './model/ModifyVolumeRequestBody';
import { ModifyVolumeResponse } from './model/ModifyVolumeResponse';
import { MongodbErrorLogDetail } from './model/MongodbErrorLogDetail';
import { MongodbSlowLogDetail } from './model/MongodbSlowLogDetail';
import { NoSQLDrDateSyncIndicators } from './model/NoSQLDrDateSyncIndicators';
import { NoSQLDrRpoAndRto } from './model/NoSQLDrRpoAndRto';
import { NoSqlCreateBackupRequestBody } from './model/NoSqlCreateBackupRequestBody';
import { NoSqlEpsQuotaRequestInfo } from './model/NoSqlEpsQuotaRequestInfo';
import { NoSqlEpsQuotaTotal } from './model/NoSqlEpsQuotaTotal';
import { NoSqlEpsQuotaUsed } from './model/NoSqlEpsQuotaUsed';
import { NoSqlModiflyEpsQuotasRequestBody } from './model/NoSqlModiflyEpsQuotasRequestBody';
import { NoSqlQueryEpsQuotaInfo } from './model/NoSqlQueryEpsQuotaInfo';
import { NoSqlRequestEpsQuota } from './model/NoSqlRequestEpsQuota';
import { OfflineNodesRequest } from './model/OfflineNodesRequest';
import { OfflineNodesRequestBody } from './model/OfflineNodesRequestBody';
import { OfflineNodesResponse } from './model/OfflineNodesResponse';
import { OptionalFlavorsInfo } from './model/OptionalFlavorsInfo';
import { PauseResumeDataSynchronizationRequest } from './model/PauseResumeDataSynchronizationRequest';
import { PauseResumeDataSynchronizationResponse } from './model/PauseResumeDataSynchronizationResponse';
import { PrecheckDisasterRecoveryInstance } from './model/PrecheckDisasterRecoveryInstance';
import { PrecheckDisasterRecoveryOperationBody } from './model/PrecheckDisasterRecoveryOperationBody';
import { QueryDBCacheMappingResponse } from './model/QueryDBCacheMappingResponse';
import { QueryDBCacheRuleResponse } from './model/QueryDBCacheRuleResponse';
import { QueryDatabaseTableInfo } from './model/QueryDatabaseTableInfo';
import { QueryInstanceBackupResponseBodyBackups } from './model/QueryInstanceBackupResponseBodyBackups';
import { QueryInstanceBackupResponseBodyDatastore } from './model/QueryInstanceBackupResponseBodyDatastore';
import { QueryRestoreList } from './model/QueryRestoreList';
import { RecycleDatastore } from './model/RecycleDatastore';
import { RecycleInstance } from './model/RecycleInstance';
import { RecyclePolicy } from './model/RecyclePolicy';
import { RecyclePolicyRequestBody } from './model/RecyclePolicyRequestBody';
import { RedisCreateDbUserRequest } from './model/RedisCreateDbUserRequest';
import { RedisDbUserInfo } from './model/RedisDbUserInfo';
import { RedisDeleteDbUserRequest } from './model/RedisDeleteDbUserRequest';
import { RedisDisabledCommandsDetail } from './model/RedisDisabledCommandsDetail';
import { RedisModifyDBUserPrivilegeRequest } from './model/RedisModifyDBUserPrivilegeRequest';
import { RedisModifyDbUserPrivilegeRequestBody } from './model/RedisModifyDbUserPrivilegeRequestBody';
import { RedisResetDbUserPasswordRequestBody } from './model/RedisResetDbUserPasswordRequestBody';
import { RedisSlowLogDetail } from './model/RedisSlowLogDetail';
import { RedisUserForCreation } from './model/RedisUserForCreation';
import { RenameHighRiskCommandsRequest } from './model/RenameHighRiskCommandsRequest';
import { ResetDbUserPasswordRequest } from './model/ResetDbUserPasswordRequest';
import { ResetDbUserPasswordResponse } from './model/ResetDbUserPasswordResponse';
import { ResetParamGroupTemplateRequest } from './model/ResetParamGroupTemplateRequest';
import { ResetParamGroupTemplateResponse } from './model/ResetParamGroupTemplateResponse';
import { ResetPasswordRequest } from './model/ResetPasswordRequest';
import { ResetPasswordRequestBody } from './model/ResetPasswordRequestBody';
import { ResetPasswordResponse } from './model/ResetPasswordResponse';
import { ResizeColdVolumeRequest } from './model/ResizeColdVolumeRequest';
import { ResizeColdVolumeRequestBody } from './model/ResizeColdVolumeRequestBody';
import { ResizeColdVolumeResponse } from './model/ResizeColdVolumeResponse';
import { ResizeInstanceOption } from './model/ResizeInstanceOption';
import { ResizeInstanceRequest } from './model/ResizeInstanceRequest';
import { ResizeInstanceRequestBody } from './model/ResizeInstanceRequestBody';
import { ResizeInstanceResponse } from './model/ResizeInstanceResponse';
import { ResizeInstanceVolumeRequest } from './model/ResizeInstanceVolumeRequest';
import { ResizeInstanceVolumeRequestBody } from './model/ResizeInstanceVolumeRequestBody';
import { ResizeInstanceVolumeResponse } from './model/ResizeInstanceVolumeResponse';
import { RestartInstanceRequest } from './model/RestartInstanceRequest';
import { RestartInstanceResponse } from './model/RestartInstanceResponse';
import { RestorableTime } from './model/RestorableTime';
import { RestoreExistingInstanceRequest } from './model/RestoreExistingInstanceRequest';
import { RestoreExistingInstanceResponse } from './model/RestoreExistingInstanceResponse';
import { RestoreInfo } from './model/RestoreInfo';
import { RestoreRedisPitrRequest } from './model/RestoreRedisPitrRequest';
import { RestoreRedisPitrRequestBody } from './model/RestoreRedisPitrRequestBody';
import { RestoreRedisPitrResponse } from './model/RestoreRedisPitrResponse';
import { RestoreRequestBody } from './model/RestoreRequestBody';
import { SaveLtsConfigsRequest } from './model/SaveLtsConfigsRequest';
import { SaveLtsConfigsRequestBody } from './model/SaveLtsConfigsRequestBody';
import { SaveLtsConfigsResponse } from './model/SaveLtsConfigsResponse';
import { SaveRedisDisabledCommandsRequest } from './model/SaveRedisDisabledCommandsRequest';
import { SaveRedisDisabledCommandsRequestBody } from './model/SaveRedisDisabledCommandsRequestBody';
import { SaveRedisDisabledCommandsResponse } from './model/SaveRedisDisabledCommandsResponse';
import { ScheduleDetailInfo } from './model/ScheduleDetailInfo';
import { SetAutoEnlargePolicyRequest } from './model/SetAutoEnlargePolicyRequest';
import { SetAutoEnlargePolicyResponse } from './model/SetAutoEnlargePolicyResponse';
import { SetAutoPolicyRequestBody } from './model/SetAutoPolicyRequestBody';
import { SetBackupPolicyRequest } from './model/SetBackupPolicyRequest';
import { SetBackupPolicyRequestBody } from './model/SetBackupPolicyRequestBody';
import { SetBackupPolicyResponse } from './model/SetBackupPolicyResponse';
import { SetDisasterRecoverySettingsRequest } from './model/SetDisasterRecoverySettingsRequest';
import { SetDisasterRecoverySettingsRequestBody } from './model/SetDisasterRecoverySettingsRequestBody';
import { SetDisasterRecoverySettingsResponse } from './model/SetDisasterRecoverySettingsResponse';
import { SetInstanceDataDumpRequest } from './model/SetInstanceDataDumpRequest';
import { SetInstanceDataDumpRequestBody } from './model/SetInstanceDataDumpRequestBody';
import { SetInstanceDataDumpResponse } from './model/SetInstanceDataDumpResponse';
import { SetRecyclePolicyRequest } from './model/SetRecyclePolicyRequest';
import { SetRecyclePolicyResponse } from './model/SetRecyclePolicyResponse';
import { SetRedisPitrPolicyRequest } from './model/SetRedisPitrPolicyRequest';
import { SetRedisPitrPolicyRequestBody } from './model/SetRedisPitrPolicyRequestBody';
import { SetRedisPitrPolicyResponse } from './model/SetRedisPitrPolicyResponse';
import { ShowAllInstancesBackupsNewRequest } from './model/ShowAllInstancesBackupsNewRequest';
import { ShowAllInstancesBackupsNewResponse } from './model/ShowAllInstancesBackupsNewResponse';
import { ShowAllInstancesBackupsRequest } from './model/ShowAllInstancesBackupsRequest';
import { ShowAllInstancesBackupsResponse } from './model/ShowAllInstancesBackupsResponse';
import { ShowApiVersionRequest } from './model/ShowApiVersionRequest';
import { ShowApiVersionResponse } from './model/ShowApiVersionResponse';
import { ShowApplicableInstancesRequest } from './model/ShowApplicableInstancesRequest';
import { ShowApplicableInstancesResponse } from './model/ShowApplicableInstancesResponse';
import { ShowApplyHistoryRequest } from './model/ShowApplyHistoryRequest';
import { ShowApplyHistoryResponse } from './model/ShowApplyHistoryResponse';
import { ShowAutoEnlargePolicyRequest } from './model/ShowAutoEnlargePolicyRequest';
import { ShowAutoEnlargePolicyResponse } from './model/ShowAutoEnlargePolicyResponse';
import { ShowBackupPoliciesRequest } from './model/ShowBackupPoliciesRequest';
import { ShowBackupPoliciesResponse } from './model/ShowBackupPoliciesResponse';
import { ShowBackupPolicyRequest } from './model/ShowBackupPolicyRequest';
import { ShowBackupPolicyResponse } from './model/ShowBackupPolicyResponse';
import { ShowBackupPolicyResult } from './model/ShowBackupPolicyResult';
import { ShowConfigurationDetailRequest } from './model/ShowConfigurationDetailRequest';
import { ShowConfigurationDetailResponse } from './model/ShowConfigurationDetailResponse';
import { ShowDisasterRecoverySettingsRequest } from './model/ShowDisasterRecoverySettingsRequest';
import { ShowDisasterRecoverySettingsResponse } from './model/ShowDisasterRecoverySettingsResponse';
import { ShowElbIpGroupRequest } from './model/ShowElbIpGroupRequest';
import { ShowElbIpGroupResponse } from './model/ShowElbIpGroupResponse';
import { ShowErrorLogRequest } from './model/ShowErrorLogRequest';
import { ShowErrorLogResponse } from './model/ShowErrorLogResponse';
import { ShowHighRiskCommandsRequest } from './model/ShowHighRiskCommandsRequest';
import { ShowHighRiskCommandsResponse } from './model/ShowHighRiskCommandsResponse';
import { ShowInstanceBiactiveRegionsRequest } from './model/ShowInstanceBiactiveRegionsRequest';
import { ShowInstanceBiactiveRegionsResponse } from './model/ShowInstanceBiactiveRegionsResponse';
import { ShowInstanceConfigurationRequest } from './model/ShowInstanceConfigurationRequest';
import { ShowInstanceConfigurationResponse } from './model/ShowInstanceConfigurationResponse';
import { ShowInstanceRoleRequest } from './model/ShowInstanceRoleRequest';
import { ShowInstanceRoleResponse } from './model/ShowInstanceRoleResponse';
import { ShowIpNumRequirementRequest } from './model/ShowIpNumRequirementRequest';
import { ShowIpNumRequirementResponse } from './model/ShowIpNumRequirementResponse';
import { ShowModifyHistoryRequest } from './model/ShowModifyHistoryRequest';
import { ShowModifyHistoryResponse } from './model/ShowModifyHistoryResponse';
import { ShowPasswordlessConfigRequest } from './model/ShowPasswordlessConfigRequest';
import { ShowPasswordlessConfigResponse } from './model/ShowPasswordlessConfigResponse';
import { ShowPauseResumeStutusRequest } from './model/ShowPauseResumeStutusRequest';
import { ShowPauseResumeStutusResponse } from './model/ShowPauseResumeStutusResponse';
import { ShowQuotasRequest } from './model/ShowQuotasRequest';
import { ShowQuotasResponse } from './model/ShowQuotasResponse';
import { ShowRecyclePolicyRequest } from './model/ShowRecyclePolicyRequest';
import { ShowRecyclePolicyResponse } from './model/ShowRecyclePolicyResponse';
import { ShowRedisBigKeysRequest } from './model/ShowRedisBigKeysRequest';
import { ShowRedisBigKeysRequestBody } from './model/ShowRedisBigKeysRequestBody';
import { ShowRedisBigKeysResponse } from './model/ShowRedisBigKeysResponse';
import { ShowRedisDisabledCommandsRequest } from './model/ShowRedisDisabledCommandsRequest';
import { ShowRedisDisabledCommandsResponse } from './model/ShowRedisDisabledCommandsResponse';
import { ShowRedisHotKeysRequest } from './model/ShowRedisHotKeysRequest';
import { ShowRedisHotKeysResponse } from './model/ShowRedisHotKeysResponse';
import { ShowRedisPitrInfoRequest } from './model/ShowRedisPitrInfoRequest';
import { ShowRedisPitrInfoResponse } from './model/ShowRedisPitrInfoResponse';
import { ShowRedisPitrPolicyRequest } from './model/ShowRedisPitrPolicyRequest';
import { ShowRedisPitrPolicyResponse } from './model/ShowRedisPitrPolicyResponse';
import { ShowResourcesDetailResponseBody } from './model/ShowResourcesDetailResponseBody';
import { ShowResourcesListResponseBody } from './model/ShowResourcesListResponseBody';
import { ShowRestorableListRequest } from './model/ShowRestorableListRequest';
import { ShowRestorableListResponse } from './model/ShowRestorableListResponse';
import { ShowSecondLevelMonitoringStatusRequest } from './model/ShowSecondLevelMonitoringStatusRequest';
import { ShowSecondLevelMonitoringStatusResponse } from './model/ShowSecondLevelMonitoringStatusResponse';
import { ShowSlowLogDesensitizationRequest } from './model/ShowSlowLogDesensitizationRequest';
import { ShowSlowLogDesensitizationResponse } from './model/ShowSlowLogDesensitizationResponse';
import { ShrinkInstanceNodeRequest } from './model/ShrinkInstanceNodeRequest';
import { ShrinkInstanceNodeRequestBody } from './model/ShrinkInstanceNodeRequestBody';
import { ShrinkInstanceNodeResponse } from './model/ShrinkInstanceNodeResponse';
import { SlowlogResult } from './model/SlowlogResult';
import { StopBackupRequest } from './model/StopBackupRequest';
import { StopBackupRequestBody } from './model/StopBackupRequestBody';
import { StopBackupResponse } from './model/StopBackupResponse';
import { SwitchIpGroupRequest } from './model/SwitchIpGroupRequest';
import { SwitchIpGroupRequestBody } from './model/SwitchIpGroupRequestBody';
import { SwitchIpGroupRequestBodyIpGroups } from './model/SwitchIpGroupRequestBodyIpGroups';
import { SwitchIpGroupResponse } from './model/SwitchIpGroupResponse';
import { SwitchOverRequest } from './model/SwitchOverRequest';
import { SwitchOverResponse } from './model/SwitchOverResponse';
import { SwitchSecondLevelMonitoringRequest } from './model/SwitchSecondLevelMonitoringRequest';
import { SwitchSecondLevelMonitoringRequestBody } from './model/SwitchSecondLevelMonitoringRequestBody';
import { SwitchSecondLevelMonitoringResponse } from './model/SwitchSecondLevelMonitoringResponse';
import { SwitchSlowlogDesensitizationRequest } from './model/SwitchSlowlogDesensitizationRequest';
import { SwitchSlowlogDesensitizationRequestBody } from './model/SwitchSlowlogDesensitizationRequestBody';
import { SwitchSlowlogDesensitizationResponse } from './model/SwitchSlowlogDesensitizationResponse';
import { SwitchSslRequest } from './model/SwitchSslRequest';
import { SwitchSslRequestBody } from './model/SwitchSslRequestBody';
import { SwitchSslResponse } from './model/SwitchSslResponse';
import { SwitchToMasterDisasterRecoveryBody } from './model/SwitchToMasterDisasterRecoveryBody';
import { SwitchToMasterRequest } from './model/SwitchToMasterRequest';
import { SwitchToMasterResponse } from './model/SwitchToMasterResponse';
import { SwitchToSlaveRequest } from './model/SwitchToSlaveRequest';
import { SwitchToSlaveResponse } from './model/SwitchToSlaveResponse';
import { SwitchoverRatioInfo } from './model/SwitchoverRatioInfo';
import { Tag } from './model/Tag';
import { TagOption } from './model/TagOption';
import { UpdateClientNetworkRequest } from './model/UpdateClientNetworkRequest';
import { UpdateClientNetworkRequestBody } from './model/UpdateClientNetworkRequestBody';
import { UpdateClientNetworkResponse } from './model/UpdateClientNetworkResponse';
import { UpdateConfigurationRequest } from './model/UpdateConfigurationRequest';
import { UpdateConfigurationRequestBody } from './model/UpdateConfigurationRequestBody';
import { UpdateConfigurationResponse } from './model/UpdateConfigurationResponse';
import { UpdateDatabasesRequest } from './model/UpdateDatabasesRequest';
import { UpdateDatabasesRequestBody } from './model/UpdateDatabasesRequestBody';
import { UpdateDatabasesResponse } from './model/UpdateDatabasesResponse';
import { UpdateDbCacheRuleRequest } from './model/UpdateDbCacheRuleRequest';
import { UpdateDbCacheRuleRequestBody } from './model/UpdateDbCacheRuleRequestBody';
import { UpdateDbCacheRuleResponse } from './model/UpdateDbCacheRuleResponse';
import { UpdateHighRiskCommandsRequest } from './model/UpdateHighRiskCommandsRequest';
import { UpdateHighRiskCommandsResponse } from './model/UpdateHighRiskCommandsResponse';
import { UpdateInstanceConfigurationRequest } from './model/UpdateInstanceConfigurationRequest';
import { UpdateInstanceConfigurationRequestBody } from './model/UpdateInstanceConfigurationRequestBody';
import { UpdateInstanceConfigurationResponse } from './model/UpdateInstanceConfigurationResponse';
import { UpdateInstanceConfigurationsRequest } from './model/UpdateInstanceConfigurationsRequest';
import { UpdateInstanceConfigurationsRequestBody } from './model/UpdateInstanceConfigurationsRequestBody';
import { UpdateInstanceConfigurationsResponse } from './model/UpdateInstanceConfigurationsResponse';
import { UpdateInstanceNameRequest } from './model/UpdateInstanceNameRequest';
import { UpdateInstanceNameRequestBody } from './model/UpdateInstanceNameRequestBody';
import { UpdateInstanceNameResponse } from './model/UpdateInstanceNameResponse';
import { UpdatePasswordlessConfigRequest } from './model/UpdatePasswordlessConfigRequest';
import { UpdatePasswordlessConfigRequestBody } from './model/UpdatePasswordlessConfigRequestBody';
import { UpdatePasswordlessConfigResponse } from './model/UpdatePasswordlessConfigResponse';
import { UpdateSecurityGroupRequest } from './model/UpdateSecurityGroupRequest';
import { UpdateSecurityGroupRequestBody } from './model/UpdateSecurityGroupRequestBody';
import { UpdateSecurityGroupResponse } from './model/UpdateSecurityGroupResponse';
import { UpgradeDbVersionRequest } from './model/UpgradeDbVersionRequest';
import { UpgradeDbVersionResponse } from './model/UpgradeDbVersionResponse';
import { UpgradeResult } from './model/UpgradeResult';
import { Volume } from './model/Volume';

export class GaussDBforNoSQLClient {
    public static newBuilder(): ClientBuilder<GaussDBforNoSQLClient> {
            let client = new ClientBuilder<GaussDBforNoSQLClient>(newClient);
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
     * 将参数模板应用到实例，可以指定一个或多个实例。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 应用参数模板
     * @param {string} configId 参数模板ID。
     * @param {ApplyConfigurationRequestBody} applyConfigurationRequestBody 请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public applyConfiguration(applyConfigurationRequest?: ApplyConfigurationRequest): Promise<ApplyConfigurationResponse> {
        const options = ParamCreater().applyConfiguration(applyConfigurationRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 将参数模板应用到实例，可以指定一个或多个实例。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 应用参数模板
     * @param {string} configId 参数模板ID。
     * @param {ApplyConfigurationToInstancesRequestBody} applyConfigurationToInstancesRequestBody 请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public applyConfigurationToInstances(applyConfigurationToInstancesRequest?: ApplyConfigurationToInstancesRequest): Promise<ApplyConfigurationToInstancesResponse> {
        const options = ParamCreater().applyConfigurationToInstances(applyConfigurationToInstancesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量删除数据库实例的手动备份。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量删除手动备份
     * @param {BatchDeleteManualBackupRequestBody} batchDeleteManualBackupRequestBody 请求体。
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchDeleteManualBackup(batchDeleteManualBackupRequest?: BatchDeleteManualBackupRequest): Promise<BatchDeleteManualBackupResponse> {
        const options = ParamCreater().batchDeleteManualBackup(batchDeleteManualBackupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量添加或删除指定数据库实例的标签。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量添加或删除资源标签
     * @param {string} instanceId 实例ID。
     * @param {BatchTagActionRequestBody} batchTagActionRequestBody 请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchTagAction(batchTagActionRequest?: BatchTagActionRequest): Promise<BatchTagActionResponse> {
        const options = ParamCreater().batchTagAction(batchTagActionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量升级数据库补丁版本。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量数据库补丁升级
     * @param {BatchUpgradeDatabaseVersionRequestBody} batchUpgradeDatabaseVersionRequestBody 请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchUpgradeDatabaseVersion(batchUpgradeDatabaseVersionRequest?: BatchUpgradeDatabaseVersionRequest): Promise<BatchUpgradeDatabaseVersionResponse> {
        const options = ParamCreater().batchUpgradeDatabaseVersion(batchUpgradeDatabaseVersionRequest);

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
     * @param {string} jobId 任务ID，取值为定时任务列表返回job_id字段。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public cancelInstanceScheduleWindow(cancelInstanceScheduleWindowRequest?: CancelInstanceScheduleWindowRequest): Promise<CancelInstanceScheduleWindowResponse> {
        const options = ParamCreater().cancelInstanceScheduleWindow(cancelInstanceScheduleWindowRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 校验实例是否可以与指定实例建立/解除容灾关系。若接口返回成功，表示可以与指定实例建立/解除容灾关系。
     * 该接口需要对建立/解除容灾关系的两个实例各调用一次，2次调用都响应成功才能进行容灾关系的搭建/解除。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 校验实例是否可以与指定实例建立/解除容灾关系
     * @param {string} instanceId 实例ID。
     * @param {PrecheckDisasterRecoveryOperationBody} precheckDisasterRecoveryOperationBody 请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public checkDisasterRecoveryOperation(checkDisasterRecoveryOperationRequest?: CheckDisasterRecoveryOperationRequest): Promise<CheckDisasterRecoveryOperationResponse> {
        const options = ParamCreater().checkDisasterRecoveryOperation(checkDisasterRecoveryOperationRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 判断弱密码。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 判断弱密码
     * @param {CheckWeekPasswordRequestBody} checkWeekPasswordRequest 请求body体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public checkWeekPassword(checkWeekPasswordRequest?: CheckWeekPasswordRequest): Promise<CheckWeekPasswordResponse> {
        const options = ParamCreater().checkWeekPassword(checkWeekPasswordRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 关闭实例所有节点会话。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 关闭实例所有节点会话
     * @param {string} instanceId 实例ID。
     * @param {string} [nodeId] 节点ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public clearInstanceSessions(clearInstanceSessionsRequest?: ClearInstanceSessionsRequest): Promise<ClearInstanceSessionsResponse> {
        const options = ParamCreater().clearInstanceSessions(clearInstanceSessionsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 比较两个参数模板之间的差异
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 参数模板比较
     * @param {CompareConfigurationRequestBody} showParamGroupDifferenceRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public compareConfiguration(compareConfigurationRequest?: CompareConfigurationRequest): Promise<CompareConfigurationResponse> {
        const options = ParamCreater().compareConfiguration(compareConfigurationRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 复制参数模板
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 复制参数模板
     * @param {string} configId 参数模板ID。
     * @param {CopyConfigurationRequestBody} copyTmplRequest 
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
     * 创建手动备份。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建手动备份
     * @param {string} instanceId 实例ID。
     * @param {NoSqlCreateBackupRequestBody} createBackup 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createBack(createBackRequest?: CreateBackRequest): Promise<CreateBackResponse> {
        const options = ParamCreater().createBack(createBackRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * ‘创建冷数据存储’
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary ‘创建冷数据存储’
     * @param {string} instanceId 实例ID。
     * @param {CreateColdVolumeRequestBody} createColdVolumeRequest 请求body体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createColdVolume(createColdVolumeRequest?: CreateColdVolumeRequest): Promise<CreateColdVolumeResponse> {
        const options = ParamCreater().createColdVolume(createColdVolumeRequest);

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
     * @param {CreateConfigurationRequestBody} createConfigurationRequestBody 请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createConfiguration(createConfigurationRequest?: CreateConfigurationRequest): Promise<CreateConfigurationResponse> {
        const options = ParamCreater().createConfiguration(createConfigurationRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建内存加速映射。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建内存加速映射
     * @param {CreateDbCacheMappingRequestBody} createDbCacheMappingRequestBody 创建内存加速映射请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createDbCacheMapping(createDbCacheMappingRequest?: CreateDbCacheMappingRequest): Promise<CreateDbCacheMappingResponse> {
        const options = ParamCreater().createDbCacheMapping(createDbCacheMappingRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建内存加速规则。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建内存加速规则
     * @param {CreateDbCacheRuleRequestBody} [createDbCacheRuleRequestBody] 创建内存加速规则请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createDbCacheRule(createDbCacheRuleRequest?: CreateDbCacheRuleRequest): Promise<CreateDbCacheRuleResponse> {
        const options = ParamCreater().createDbCacheRule(createDbCacheRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 在Redis实例中创建数据库帐号。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建Redis数据库账号
     * @param {string} instanceId 实例ID。
     * @param {RedisCreateDbUserRequest} redisCreateDbUserRequest 创建账号请求体。
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
     * 搭建实例与特定实例的容灾关系。 该接口需要对搭建容灾关系的两个实例分别各调用一次，2次接口都调用成功才能成功搭建容灾关系。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 搭建实例与特定实例的容灾关系
     * @param {string} instanceId 实例ID。
     * @param {ConstructDisasterRecoveryBody} constructDisasterRecoveryBody 请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createDisasterRecovery(createDisasterRecoveryRequest?: CreateDisasterRecoveryRequest): Promise<CreateDisasterRecoveryResponse> {
        const options = ParamCreater().createDisasterRecovery(createDisasterRecoveryRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建数据库实例。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建实例
     * @param {CreateInstanceRequestBody} createInstanceRequestBody 请求体。
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
     * 删除手动备份
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除手动备份
     * @param {string} backupId 备份文件ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteBackup(deleteBackupRequest?: DeleteBackupRequest): Promise<DeleteBackupResponse> {
        const options = ParamCreater().deleteBackup(deleteBackupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除指定参数模板。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除参数模板
     * @param {string} configId 参数模板ID。
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
     * 解除指定内存加速映射。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 解除内存加速映射
     * @param {DeleteDbCacheMappingRequestBody} deleteDbCacheMappingRequestBody 删除内存加速映射请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteDbCacheMapping(deleteDbCacheMappingRequest?: DeleteDbCacheMappingRequest): Promise<DeleteDbCacheMappingResponse> {
        const options = ParamCreater().deleteDbCacheMapping(deleteDbCacheMappingRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除内存加速规则。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除内存加速规则
     * @param {DeleteDbCacheRuleRequestBody} [deleteDbCacheRuleRequestBody] 删除内存加速规则请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteDbCacheRule(deleteDbCacheRuleRequest?: DeleteDbCacheRuleRequest): Promise<DeleteDbCacheRuleResponse> {
        const options = ParamCreater().deleteDbCacheRule(deleteDbCacheRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除Redis实例的数据库账号。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除Redis数据库账号
     * @param {string} instanceId 实例ID。
     * @param {RedisDeleteDbUserRequest} redisDeleteDbUserRequestBody 删除账号请求体
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
     * 解除实例与特定实例的容灾关系。 该接口需要对搭建容灾关系的两个实例分别各调用一次，2次接口都调用成功才能成功解除容灾关系。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 解除实例与特定实例的容灾关系
     * @param {string} instanceId 实例ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteDisasterRecovery(deleteDisasterRecoveryRequest?: DeleteDisasterRecoveryRequest): Promise<DeleteDisasterRecoveryResponse> {
        const options = ParamCreater().deleteDisasterRecovery(deleteDisasterRecoveryRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除扩容失败的节点
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除扩容失败的节点
     * @param {string} instanceId 实例ID，可以调用[5.3.3 查询实例列表和详情](x-wc://file&#x3D;zh-cn_topic_0000001397299481.xml)接口获取。如果未申请实例，可以调用[5.3.1 创建实例](x-wc://file&#x3D;zh-cn_topic_0000001397139461.xml)接口创建。
     * @param {DeleteEnlargeFailNodeRequestBody} [deleteEnlargeFailNodeRequestBody] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteEnlargeFailNode(deleteEnlargeFailNodeRequest?: DeleteEnlargeFailNodeRequest): Promise<DeleteEnlargeFailNodeResponse> {
        const options = ParamCreater().deleteEnlargeFailNode(deleteEnlargeFailNodeRequest);

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
     * @param {string} instanceId 实例ID。
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
     * 关闭实例节点会话。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 关闭实例节点会话
     * @param {string} nodeId 节点ID。
     * @param {DeleteInstancesSessionRequestBody} deleteInstancesSessionRequestBody 关闭实例节点会话请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteInstancesSession(deleteInstancesSessionRequest?: DeleteInstancesSessionRequest): Promise<DeleteInstancesSessionResponse> {
        const options = ParamCreater().deleteInstancesSession(deleteInstancesSessionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 将实例日志与LTS日志流解除关联，后台将取消上传实例日志到的LTS日志流里。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 解除关联LTS日志流
     * @param {DeleteLtsConfigsRequestBody} deleteLtsConfigsRequestBody 请求体。
     * @param {string} [xLanguage] 语言。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteLtsConfigs(deleteLtsConfigsRequest?: DeleteLtsConfigsRequest): Promise<DeleteLtsConfigsResponse> {
        const options = ParamCreater().deleteLtsConfigs(deleteLtsConfigsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除Redis禁用命令。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除Redis禁用命令
     * @param {string} instanceId 实例ID。
     * @param {DeleteRedisDisabledCommandsRequestBody} deleteRedisDisabledCommandsRequestBody 请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteRedisDisabledCommands(deleteRedisDisabledCommandsRequest?: DeleteRedisDisabledCommandsRequest): Promise<DeleteRedisDisabledCommandsResponse> {
        const options = ParamCreater().deleteRedisDisabledCommands(deleteRedisDisabledCommandsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 扩容指定集群实例的节点数量。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 扩容指定集群实例的节点数量
     * @param {string} instanceId 实例ID。
     * @param {ExpandInstanceNodeRequestBody} enlargeInstanceRequestBody 请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public expandInstanceNode(expandInstanceNodeRequest?: ExpandInstanceNodeRequest): Promise<ExpandInstanceNodeResponse> {
        const options = ParamCreater().expandInstanceNode(expandInstanceNodeRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询实例可变更规格。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询实例可变更规格
     * @param {string} instanceId 实例ID。
     * @param {number} [offset] 索引位置，偏移量。    - 从第一条数据偏移offset条数据后开始查询，默认为0。   - 取值必须为数字，且不能为负数。
     * @param {number} [limit] 查询个数上限值。  - 取值范围：1~100。 - 不传该参数时，默认查询前100条信息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAvailableFlavorInfos(listAvailableFlavorInfosRequest?: ListAvailableFlavorInfosRequest): Promise<ListAvailableFlavorInfosResponse> {
        const options = ParamCreater().listAvailableFlavorInfos(listAvailableFlavorInfosRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询GeminiDB(for Cassandra)数据库慢日志信息，支持日志关键字搜索。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询GeminiDB(for Cassandra)数据库慢日志
     * @param {string} instanceId 实例ID，可以调用“查询实例列表和详情”接口获取。如果未申请实例，可以调用“创建实例”接口创建。
     * @param {ListCassandraSlowLogsRequestBody} listCassandraSlowLogsRequestBody 请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listCassandraSlowLogs(listCassandraSlowLogsRequest?: ListCassandraSlowLogsRequest): Promise<ListCassandraSlowLogsResponse> {
        const options = ParamCreater().listCassandraSlowLogs(listCassandraSlowLogsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询支持参数模板的引擎信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询支持参数模板的引擎信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listConfigurationDatastores(listConfigurationDatastoresRequest?: ListConfigurationDatastoresRequest): Promise<ListConfigurationDatastoresResponse> {
        const options = ParamCreater().listConfigurationDatastores();

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
     * @param {number} [offset] 索引位置，偏移量。   - 从第一条数据偏移offset条数据后开始查询，默认为0（偏移0条数据，表示从第一条数据开始查询）。   - 取值必须为数字，不能为负数。
     * @param {number} [limit] 查询个数上限值。 - 取值范围: 1~100。 - 不传该参数时，默认查询前100条信息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listConfigurationTemplates(listConfigurationTemplatesRequest?: ListConfigurationTemplatesRequest): Promise<ListConfigurationTemplatesResponse> {
        const options = ParamCreater().listConfigurationTemplates(listConfigurationTemplatesRequest);

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
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listConfigurations(listConfigurationsRequest?: ListConfigurationsRequest): Promise<ListConfigurationsResponse> {
        const options = ParamCreater().listConfigurations();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定实例类型的数据库版本信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询指定实例类型的数据库版本信息
     * @param {string} datastoreName 数据库类型。   - GeminiDB Cassandra数据库实例，取值为“cassandra”。   - GeminiDB Mongo数据库实例，取值为“mongodb”。   - GeminiDB Influx数据库实例，取值为“influxdb”。   - GeminiDB Redis数据库实例，取值为“redis”。
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
     * 根据指定条件查询内存加速映射关系列表和详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询内存加速映射列表和详情
     * @param {string} [id] 映射ID，可以调用“查询内存加速映射列表和详情”接口获取。
     * @param {string} [name] 映射名称。名称以“*”起始，表示按照“*”后面的值模糊匹配，否则，按照实际填写的名称精确匹配查询。
     * @param {string} [sourceInstanceId] 源实例ID。
     * @param {string} [sourceInstanceName] 源实例名称。名称以“*”起始，表示按照“*”后面的值模糊匹配，否则，按照实际填写的名称精确匹配查询。
     * @param {string} [targetInstanceId] 目标实例ID。
     * @param {string} [targetInstanceName] 目标实例名称。名称以“*”起始，表示按照“*”后面的值模糊匹配，否则，按照实际填写的名称精确匹配查询。
     * @param {number} [offset] 索引位置，偏移量。 从第一条数据偏移offset条数据后开始查询，默认为0（偏移0条数据，表示从第一条数据开始查询）。 取值必须为数字，不能为负数。
     * @param {number} [limit] 查询个数上限值。取值范围：1~100。不传该参数时，默认查询前100条信息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listDbCacheMappings(listDbCacheMappingsRequest?: ListDbCacheMappingsRequest): Promise<ListDbCacheMappingsResponse> {
        const options = ParamCreater().listDbCacheMappings(listDbCacheMappingsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询内存加速规则列表和详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询内存加速规则列表和详情
     * @param {string} dbcacheMappingId 内存加速映射ID。
     * @param {string} [ruleId] 内存加速规则ID。
     * @param {string} [ruleName] 内存加速规则名称。名称以“*”起始，表示按照“*”后面的值模糊匹配，否则，按照实际填写的名称精确匹配查询。
     * @param {string} [sourceDbSchema] 源端数据库名。名称以“*”起始，表示按照“*”后面的值模糊匹配，否则，按照实际填写的名称精确匹配查询。
     * @param {string} [sourceDbTable] 源端数据表名。名称以“*”起始，表示按照“*”后面的值模糊匹配，否则，按照实际填写的名称精确匹配查询。
     * @param {string} [offset] 索引位置，偏移量。 从第一条数据偏移offset条数据后开始查询，默认为0（偏移0条数据，表示从第一条数据开始查询）。 取值必须为数字，不能为负数。
     * @param {string} [limit] 查询个数上限值。取值范围：1~100。不传该参数时，默认查询前100条信息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listDbCacheRules(listDbCacheRulesRequest?: ListDbCacheRulesRequest): Promise<ListDbCacheRulesResponse> {
        const options = ParamCreater().listDbCacheRules(listDbCacheRulesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取Redis数据库账号列表和详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取Redis数据库账号列表和详情
     * @param {string} instanceId 实例ID。
     * @param {string} [name] 数据库账号名。若传此参数，则查询指定账号的信息，否则返回所有数据库账号信息。
     * @param {number} [offset] 索引位置，偏移量。    - 从第一条数据偏移offset条数据后开始查询，默认为0。   - 取值必须为数字，且不能为负数。
     * @param {number} [limit] 查询个数上限值。  - 取值范围：1~100。 - 不传该参数时，默认查询前100条信息。
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
     * 查询专属资源列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询专属资源列表
     * @param {number} [offset] 索引位置偏移量。   - 索引位置偏移量，表示从指定project ID下最新的专属资源创建时间开始，按时间的先后顺序偏移offset条数据后查询对应的专属资源信息。   - 取值大于或等于0。   - 不传该参数时，查询偏移量默认为0，表示从最新的创建时间对应的专属资源开始查询。
     * @param {number} [limit] 查询专属资源个数上限值。   - 取值范围：1~100。不传该参数时，默认查询前100条实例信息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listDedicatedResources(listDedicatedResourcesRequest?: ListDedicatedResourcesRequest): Promise<ListDedicatedResourcesResponse> {
        const options = ParamCreater().listDedicatedResources(listDedicatedResourcesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询企业项目配额。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询企业项目配额
     * @param {string} [enterpriseProjectName] 企业项目名称。支持模糊搜索，若不指定则返回所有企业项目配额。
     * @param {number} [offset] 索引位置，偏移量。    - 从第一条数据偏移offset条数据后开始查询，默认为0。   - 取值必须为数字，且不能为负数。
     * @param {number} [limit] 查询个数上限值。  - 取值范围：1~100。 - 不传该参数时，默认查询前100条信息。
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
     * 查询指定条件下的实例规格信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询数据库规格
     * @param {string} [engineName] 数据库类型。   - 取值为“cassandra”，表示查询GeminiDB Cassandra数据库实例支持的规格。   - 取值为“mongodb”，表示查询GeminiDB Mongo数据库实例支持的规格。   - 取值为“influxdb”，表示查询GeminiDB Influx数据库实例支持的规格。   - 取值为“redis”，表示查询GeminiDB Redis数据库实例支持的规格。   - 如果不传该参数，默认为“cassandra”。
     * @param {number} [offset] 索引位置，偏移量。   - 从第一条数据偏移offset条数据后开始查询，默认为0（偏移0条数据，表示从第一条数据开始查询）。   - 取值必须为数字，不能为负数。
     * @param {number} [limit] 查询规格信息上限值。   - 取值范围: 1~100。   - 不传该参数时，默认查询前100条规格信息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listFlavorInfos(listFlavorInfosRequest?: ListFlavorInfosRequest): Promise<ListFlavorInfosResponse> {
        const options = ParamCreater().listFlavorInfos(listFlavorInfosRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定条件下的所有实例规格信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询指定条件下的所有实例规格信息
     * @param {string} [region] 实例所在区域。
     * @param {string} [engineName] 数据库类型。   - 取值为“cassandra”，表示查询GeminiDB Cassandra数据库实例支持的规格。   - 取值为“mongodb”，表示查询GeminiDB Mongo数据库实例支持的规格。   - 取值为“influxdb”，表示查询GeminiDB Influx数据库实例支持的规格。   - 取值为“redis”，表示查询GeminiDB Redis数据库实例支持的规格。   - 如果不传该参数，默认为“cassandra”。
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
     * 查询GeminiDB(for influxdb)数据库慢日志信息，支持日志关键字搜索。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询GeminiDB(for influxdb)数据库慢日志
     * @param {string} instanceId 实例ID，可以调用“查询实例列表和详情”接口获取。如果未申请实例，可以调用“创建实例”接口创建。
     * @param {ListInfluxdbSlowLogsRequestBody} listInfluxdbSlowLogsRequestBody 请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listInfluxdbSlowLogs(listInfluxdbSlowLogsRequest?: ListInfluxdbSlowLogsRequest): Promise<ListInfluxdbSlowLogsResponse> {
        const options = ParamCreater().listInfluxdbSlowLogs(listInfluxdbSlowLogsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取Redis实例数据库列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取Redis实例数据库列表
     * @param {string} instanceId 实例ID。
     * @param {number} [offset] 索引位置，偏移量。    - 从第一条数据偏移offset条数据后开始查询，默认为0。   - 取值必须为数字，且不能为负数。
     * @param {number} [limit] 查询个数上限值。  - 取值范围：1~100。 - 不传该参数时，默认查询前100条信息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listInstanceDatabases(listInstanceDatabasesRequest?: ListInstanceDatabasesRequest): Promise<ListInstanceDatabasesResponse> {
        const options = ParamCreater().listInstanceDatabases(listInstanceDatabasesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询实例可维护时间段。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询实例可维护时间段
     * @param {string} instanceId 实例ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listInstanceMaintenanceWindow(listInstanceMaintenanceWindowRequest?: ListInstanceMaintenanceWindowRequest): Promise<ListInstanceMaintenanceWindowResponse> {
        const options = ParamCreater().listInstanceMaintenanceWindow(listInstanceMaintenanceWindowRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取实例的会话。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取实例的会话
     * @param {string} instanceId 实例ID。
     * @param {string} [nodeId] 节点ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listInstanceSessions(listInstanceSessionsRequest?: ListInstanceSessionsRequest): Promise<ListInstanceSessionsResponse> {
        const options = ParamCreater().listInstanceSessions(listInstanceSessionsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定实例的标签信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询资源标签
     * @param {string} instanceId 实例ID。
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
     * 根据指定条件查询数据库实例列表和详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询实例列表和详情
     * @param {string} [id] 实例ID。 如果id以“*”起始，表示按照“*”后面的值模糊匹配，否则，按照实际填写的id精确匹配查询。
     * @param {string} [name] 实例名称。 如果name以“*”起始，表示按照“*”后面的值模糊匹配，否则，按照实际填写的name精确匹配查询。
     * @param {string} [mode] 实例类型。   - 取值为“Cluster”，表示GeminiDB Cassandra、GeminiDB Influx、GeminiDB Redis集群实例类型。   - 取值为“Sharding”，表示GeminiDB Mongo集群实例类型。   - 取值为“ReplicaSet”，表示GeminiDB Mongo副本集实例类型。   - 取值为“InfluxdbCluster”，表示GeminiDB Influx集群实例类型。   - 取值为“InfluxdbSingle”，表示GeminiDB Influx单节点实例类型。   - 取值为“RedisReplica”，表示GeminiDB Redis性能版实例类型。   - 取值为“Replication”，表示GeminiDB Redis主备版实例类型。
     * @param {string} [datastoreType] 数据库类型。   - 取值为“cassandra”，表示查询GeminiDB Cassandra数据库实例。   - 取值为“mongodb”，表示查询GeminiDB Mongo数据库实例。   - 取值为“influxdb”，表示查询GeminiDB Influx数据库实例。   - 取值为“redis”，表示查询GeminiDB Redis数据库实例。   - 如果不传该参数，表示查询所有数据库实例。
     * @param {string} [vpcId] 虚拟私有云ID，获取方法如下：   - 方法1：登录虚拟私有云服务的控制台界面，在虚拟私有云的详情页面查找VPC ID。   - 方法2：通过虚拟私有云服务的API接口查询，具体操作可参考查询VPC列表。
     * @param {string} [subnetId] 子网的网络ID，获取方法如下：   - 方法1：登录虚拟私有云服务的控制台界面，单击VPC下的子网，进入子网详情页面，查找网络ID。   - 方法2：通过虚拟私有云服务的API接口查询，具体操作可参考查询子网列表。
     * @param {number} [offset] 索引位置偏移量，表示从指定project ID下最新的实例创建时间开始，按时间的先后顺序偏移offset条数据后查询对应的实例信息。 取值大于或等于0。不传该参数时，查询偏移量默认为0，表示从最新的实例创建时间对应的实例开始查询。
     * @param {number} [limit] 查询实例个数上限值。 取值范围：1~100。不传该参数时，默认查询前100条实例信息。
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
     * 根据标签查询指定的数据库实例。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询资源实例
     * @param {ListInstancesByTagsRequestBody} listInstancesByTagsRequestBody 请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listInstancesByResourceTags(listInstancesByResourceTagsRequest?: ListInstancesByResourceTagsRequest): Promise<ListInstancesByResourceTagsResponse> {
        const options = ParamCreater().listInstancesByResourceTags(listInstancesByResourceTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据标签查询指定的数据库实例。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询资源实例
     * @param {ListInstancesByTagsRequestBody} listInstancesByTagsRequestBody 请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listInstancesByTags(listInstancesByTagsRequest?: ListInstancesByTagsRequest): Promise<ListInstancesByTagsResponse> {
        const options = ParamCreater().listInstancesByTags(listInstancesByTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取节点会话列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取节点会话列表
     * @param {string} nodeId 节点ID。
     * @param {number} [offset] 索引位置，偏移量。取值大于或等于0。不传该参数时，查询偏移量默认为0，表示从最新创建的实例节点连接开始查询。
     * @param {number} [limit] 分页查询页数。不传该参数时，默认每页50条实例节点连接信息，最大100条。
     * @param {string} [addrPrefix] 用户端地址前缀匹配字符串。完整的地址由ip和端口号组成。不传默认查询所有。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listInstancesSession(listInstancesSessionRequest?: ListInstancesSessionRequest): Promise<ListInstancesSessionResponse> {
        const options = ParamCreater().listInstancesSession(listInstancesSessionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询实例节点会话统计信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询实例节点会话统计信息
     * @param {string} nodeId 节点ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listInstancesSessionStatistics(listInstancesSessionStatisticsRequest?: ListInstancesSessionStatisticsRequest): Promise<ListInstancesSessionStatisticsResponse> {
        const options = ParamCreater().listInstancesSessionStatistics(listInstancesSessionStatisticsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询任务列表和详情，默认查询任务列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询任务列表和详情
     * @param {string} [id] 任务ID。
     * @param {string} [startTime] 查询开始时间，默认当前时间往前30天，格式为“yyyy-mm-ddThh:mm:ssZ”。 其中，T指某个时间的开始，Z指时区偏移量
     * @param {string} [endTime] 查询结束时间，默认当前时间，格式为“yyyy-mm-ddThh:mm:ssZ”，且大于查询开始时间，时间跨度不超过30天。 其中，T指某个时间的开始，Z指时区偏移量。
     * @param {string} [status] 任务状态： 取值为“Running”为执行中； 取值为“Completed”为完成； 取值为“Failed” 为失败。
     * @param {string} [name] 任务名称。对应取值如下： - \&quot;CreateInstance\&quot;：创建实例 - \&quot;RestoreNewInstance\&quot;：恢复到新实例 - \&quot;EnlargeInstance\&quot;：扩容实例 - \&quot;ReduceInstance\&quot;：缩容实例 - \&quot;RestartInstance\&quot;：重启实例 - \&quot;RestartNode\&quot;：重启节点 - \&quot;EnlargeInstanceVolume\&quot;：扩容实例磁盘 - \&quot;ReduceInstanceVolume\&quot;：缩容实例磁盘 - \&quot;ResizeInstance\&quot;：规格变更实例 - \&quot;UpgradeDbVersion\&quot;：升级数据库版本 - \&quot;BindPublicIP\&quot;：绑定公网IP - \&quot;UnbindPublicIP\&quot;：解绑公网IP - \&quot;DeleteInstance\&quot;：删除实例 - \&quot;EnlargeInstanceColdVolume\&quot;：扩容实例冷存储 - \&quot;AddInstanceColdVolume\&quot;：增加实例冷存储 - \&quot;ModifySecurityGroup\&quot;：修改安全组 - \&quot;ModifyCcmCert\&quot;：修改CCM证书 - \&quot;ModifyPort\&quot;：修改端口 - \&quot;ConstructDisasterRecovery\&quot;：构造容灾关系 - \&quot;DeConstructDisasterRecovery\&quot;：解除容灾关系 - \&quot;SwitchOverDisasterRecovery\&quot;：切换容灾关系 - \&quot;BuildBiActiveInstance\&quot;：构建双活实例 - \&quot;ReleaseBiActiveInstance\&quot;：解除双活实例关系 - \&quot;BackupInstance\&quot;：备份实例
     * @param {number} [offset] 索引位置，偏移量。从第一条数据偏移offset条数据后开始查询，默认为0（偏移0条数据，表示从第一条数据开始查询），必须为数字，不能为负数。
     * @param {number} [limit] 查询记录数。取值 10 20 50 ，默认为50。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listJobs(listJobsRequest?: ListJobsRequest): Promise<ListJobsResponse> {
        const options = ParamCreater().listJobs(listJobsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 分页查询实例关联的LTS日志配置信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询LTS日志配置信息
     * @param {string} [xLanguage] 语言。
     * @param {number} [offset] 索引位置偏移量，表示从第一条数据偏移offset条数据后开始查询。取值必须为数字，不能为负数。默认取0值，表示从第一条数据开始查询。
     * @param {number} [limit] 查询记录数。取值范围：1~100，必须为数字。不传该参数时，默认查询前100条实例信息。
     * @param {string} [instanceId] 根据实例ID精确搜索。
     * @param {string} [instanceName] 根据实例名称模糊搜索。
     * @param {string} [enterpriseProjectId] 根据企业项目ID精确搜索。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listLtsConfigs(listLtsConfigsRequest?: ListLtsConfigsRequest): Promise<ListLtsConfigsResponse> {
        const options = ParamCreater().listLtsConfigs(listLtsConfigsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询GeminiDB(for Mongo)数据库错误日志信息，支持日志关键字搜索。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询GeminiDB(for Mongo)数据库错误日志
     * @param {string} instanceId 实例ID，可以调用“查询实例列表和详情”接口获取。如果未申请实例，可以调用“创建实例”接口创建。
     * @param {ListMongodbErrorLogsRequestBody} listMongodbErrorLogsRequestBody 请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listMongodbErrorLogs(listMongodbErrorLogsRequest?: ListMongodbErrorLogsRequest): Promise<ListMongodbErrorLogsResponse> {
        const options = ParamCreater().listMongodbErrorLogs(listMongodbErrorLogsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询GeminiDB(for Mongo)数据库慢日志信息，支持日志关键字搜索。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询GeminiDB(for Mongo)数据库慢日志
     * @param {string} instanceId 实例ID，可以调用“查询实例列表和详情”接口获取。如果未申请实例，可以调用“创建实例”接口创建。
     * @param {ListMongodbSlowLogsRequestBody} listMongodbSlowLogsRequestBody 请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listMongodbSlowLogs(listMongodbSlowLogsRequest?: ListMongodbSlowLogsRequest): Promise<ListMongodbSlowLogsResponse> {
        const options = ParamCreater().listMongodbSlowLogs(listMongodbSlowLogsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据指定条件查询定时任务列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询定时任务列表
     * @param {string} [jobName] 任务名称，默认为空。对应取值如下：  \&quot;REBOOT\&quot;：重启实例  \&quot;RESIZE_FLAVOR\&quot;：变更实例的CPU和内存规格  \&quot;UPGRADE_DATABASE\&quot;：补丁升级
     * @param {string} [jobStatus] 任务执行状态，默认为空。 取值：  值为\&quot;Pending\&quot;，表示任务未执行。  值为\&quot;Running\&quot;，表示任务正在执行。  值为\&quot;Completed\&quot;，表示任务执行成功。  值为\&quot;Failed\&quot;，表示任务执行失败。  值为\&quot;Canceled\&quot;，表示任务取消执行。
     * @param {string} [instanceId] 实例ID，不传该值默认查所有符合条件的实例。
     * @param {string} [startTime] 任务创建起始时间，格式为\&quot;yyyy-mm-ddThh:mm:ssZ\&quot;。 其中，T指某个时间的开始；Z指时区偏移量，例如偏移1个小时显示为+0100，不传默认为当前时间前七天。
     * @param {string} [endTime] 任务创建结束时间，格式为\&quot;yyyy-mm-ddThh:mm:ssZ\&quot;。 其中，T指某个时间的开始；Z指时区偏移量，例如偏移1个小时显示为+0100，不传默认为当前时间。
     * @param {string} [offset] 索引位置，偏移量。从第一条数据偏移offset条数据后开始查询，默认为0。
     * @param {string} [limit] 查询记录数。不传该参数时，默认为10,取值范围1-100。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listNosqlTaskList(listNosqlTaskListRequest?: ListNosqlTaskListRequest): Promise<ListNosqlTaskListResponse> {
        const options = ParamCreater().listNosqlTaskList(listNosqlTaskListRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定项目的标签信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询项目标签
     * @param {number} [offset] 索引位置，偏移量。    - 从第一条数据偏移offset条数据后开始查询，默认为0。   - 取值必须为数字，且不能为负数。
     * @param {number} [limit] 查询个数上限值。    - 取值范围：1~100。   - 不传该参数时，默认查询前100条信息。
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
     * 查询回收站所有引擎的实例列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询回收站实例列表
     * @param {string} [xLanguage] 语言。
     * @param {number} [offset] 索引位置，偏移量。从第一条数据偏移offset条数据后开始查询，默认为0（偏移0条数据，表示从第一条数据开始查询），必须为数字，不能为负数。
     * @param {number} [limit] 查询个数上限值。取值范围：1~100。不传该参数时，默认查询前100条信息。
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
     * 查询Redis可恢复时间点。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询Redis可恢复时间点
     * @param {string} instanceId 实例ID。
     * @param {string} startTime 查询可恢复时间点的开始时间，为yyyy-mm-ddThh:mm:ssZ字符串格式，T指某个时间的开始，Z指时区偏移量。
     * @param {string} endTime 查询可恢复时间点的结束时间，为yyyy-mm-ddThh:mm:ssZ字符串格式，T指某个时间的开始，Z指时区偏移量。
     * @param {number} [offset] 偏移量，表示查询该偏移量后面的记录，默认值为0。
     * @param {number} [limit] 查询返回记录的数量上限值，取值范围为1~100，默认值为100。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listRedisPitrRestoreTime(listRedisPitrRestoreTimeRequest?: ListRedisPitrRestoreTimeRequest): Promise<ListRedisPitrRestoreTimeResponse> {
        const options = ParamCreater().listRedisPitrRestoreTime(listRedisPitrRestoreTimeRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询GeminiDB(for Redis)数据库慢日志信息，支持日志关键字搜索。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询GeminiDB(for Redis)数据库慢日志
     * @param {string} instanceId 实例ID，可以调用“查询实例列表和详情”接口获取。如果未申请实例，可以调用“创建实例”接口创建。
     * @param {ListRedisSlowLogsRequestBody} listRedisSlowLogsRequestBody 请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listRedisSlowLogs(listRedisSlowLogsRequest?: ListRedisSlowLogsRequest): Promise<ListRedisSlowLogsResponse> {
        const options = ParamCreater().listRedisSlowLogs(listRedisSlowLogsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取GeminiDB(for Cassandra)实例表级恢复的数据库信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取GeminiDB(for Cassandra)实例表级恢复的数据库信息
     * @param {string} instanceId 实例ID，可以调用“查询实例列表和详情”接口获取。如果未申请实例，可以调用“创建实例”接口创建。
     * @param {number} [offset] 索引位置偏移量。   - 索引位置偏移量，表示从指定project ID下最新的专属资源创建时间开始，按时间的先后顺序偏移offset条数据后查询对应的专属资源信息。   - 取值大于或等于0。   - 不传该参数时，查询偏移量默认为0，表示从最新的创建时间对应的专属资源开始查询。
     * @param {number} [limit] 查询专属资源个数上限值。   - 取值范围：1~100。不传该参数时，默认查询前100条实例信息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listRestoreDatabases(listRestoreDatabasesRequest?: ListRestoreDatabasesRequest): Promise<ListRestoreDatabasesResponse> {
        const options = ParamCreater().listRestoreDatabases(listRestoreDatabasesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取GeminiDB(for Cassandra)实例表级恢复的表信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取GeminiDB(for Cassandra)实例表级恢复的表信息
     * @param {string} instanceId 实例ID，可以调用“查询实例列表和详情”接口获取。如果未申请实例，可以调用“创建实例”接口创建。
     * @param {string} databaseName 数据库名。
     * @param {number} [offset] 索引位置偏移量。   - 索引位置偏移量，表示从指定project ID下最新的专属资源创建时间开始，按时间的先后顺序偏移offset条数据后查询对应的专属资源信息。   - 取值大于或等于0。   - 不传该参数时，查询偏移量默认为0，表示从最新的创建时间对应的专属资源开始查询。
     * @param {number} [limit] 查询专属资源个数上限值。   - 取值范围：1~100。不传该参数时，默认查询前100条实例信息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listRestoreTables(listRestoreTablesRequest?: ListRestoreTablesRequest): Promise<ListRestoreTablesResponse> {
        const options = ParamCreater().listRestoreTables(listRestoreTablesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询实例可恢复的时间段
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询实例可恢复的时间段
     * @param {string} instanceId 实例Id，可以调用[5.3.3 查询实例列表和详情](x-wc://file&#x3D;zh-cn_topic_0000001397299481.xml)接口获取。如果未申请实例，可以调用[5.3.1 创建实例](x-wc://file&#x3D;zh-cn_topic_0000001397139461.xml)接口创建。
     * @param {string} [startTime] 查询的可恢复时间段的开始时间点，为yyyy-mm-ddThh:mm:ssZ字符串格式，T指某个时间的开始，Z指时区偏移量。  [例如北京时间偏移显示为+0800。默认值为当前查询时间的前一天。]
     * @param {string} [endTime] 查询的可恢复时间段的结束时间点，为yyyy-mm-ddThh:mm:ssZ字符串格式，T指某个时间的开始，Z指时区偏移量。  [例如北京时间偏移显示为+0800。默认值为当前查询时间。]
     * @param {number} [offset] 偏移量，表示查询该偏移量后面的记录，默认值为0。
     * @param {number} [limit] 查询返回记录的数量上限值，取值范围为0~1000，默认值为1000。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listRestoreTime(listRestoreTimeRequest?: ListRestoreTimeRequest): Promise<ListRestoreTimeResponse> {
        const options = ParamCreater().listRestoreTime(listRestoreTimeRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询数据库慢日志信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询数据库慢日志
     * @param {string} instanceId 实例ID。
     * @param {string} startDate 开始时间，格式为“yyyy-mm-ddThh:mm:ssZ”。 其中，T指某个时间的开始；Z指时区偏移量，例如北京时间偏移显示为+0800。
     * @param {string} endDate 结束时间，格式为“yyyy-mm-ddThh:mm:ssZ”。 其中，T指某个时间的开始；Z指时区偏移量，例如北京时间偏移显示为+0800。只能查询当前时间前一个月内的慢日志。注：结束时间不能晚于当前时间。
     * @param {string} [nodeId] 节点ID，取空值，表示查询实例下所有允许查询的节点。 具体取值请参考查询实例列表和详情接口\&quot;ListInstances\&quot;中nodes字段数据结构说明的“id”。
     * @param {string} [type] 语句类型，取空值，表示查询所有语句类型，也可指定如下日志类型： - SELECT
     * @param {number} [offset] 索引位置，偏移量。取值范围为 [0, 1999]。 从第一条数据偏移offset条数据后开始查询，默认为0（偏移0条数据，表示从第一条数据开始查询），必须为数字，不能为负数。
     * @param {number} [limit] 查询记录数。取值范围[1, 100]，默认10 （表示默认返回10条数据）。 注意： limit 与 offset 的和需要满足 &lt;&#x3D; 2000的条件。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listSlowLogs(listSlowLogsRequest?: ListSlowLogsRequest): Promise<ListSlowLogsResponse> {
        const options = ParamCreater().listSlowLogs(listSlowLogsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改Redis数据库帐号权限。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改Redis数据库帐号权限
     * @param {string} instanceId 实例ID。
     * @param {RedisModifyDBUserPrivilegeRequest} redisModifyDbUserPrivilegeRequest 修改账号权限请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public modifyDbUserPrivilege(modifyDbUserPrivilegeRequest?: ModifyDbUserPrivilegeRequest): Promise<ModifyDbUserPrivilegeResponse> {
        const options = ParamCreater().modifyDbUserPrivilege(modifyDbUserPrivilegeRequest);

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
     * @param {NoSqlModiflyEpsQuotasRequestBody} quotas 项目配额修改信息请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public modifyEpsQuotas(modifyEpsQuotasRequest?: ModifyEpsQuotasRequest): Promise<ModifyEpsQuotasResponse> {
        const options = ParamCreater().modifyEpsQuotas(modifyEpsQuotasRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 设置指定实例可维护时间段。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 设置实例可维护时间段
     * @param {string} instanceId 实例ID。
     * @param {ModifyInstanceOpsWindowV3Req} modifyInstanceOpsWindowV3Req 请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public modifyInstanceMaintenanceWindow(modifyInstanceMaintenanceWindowRequest?: ModifyInstanceMaintenanceWindowRequest): Promise<ModifyInstanceMaintenanceWindowResponse> {
        const options = ParamCreater().modifyInstanceMaintenanceWindow(modifyInstanceMaintenanceWindowRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改数据库实例的端口。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改数据库端口
     * @param {string} instanceId 实例Id，可以调用[5.3.3 查询实例列表和详情](x-wc://file&#x3D;zh-cn_topic_0000001397299481.xml)接口获取。如果未申请实例，可以调用[5.3.1 创建实例](x-wc://file&#x3D;zh-cn_topic_0000001397139461.xml)接口创建。
     * @param {ModifyPortRequestBody} modifyPortRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public modifyPort(modifyPortRequest?: ModifyPortRequest): Promise<ModifyPortResponse> {
        const options = ParamCreater().modifyPort(modifyPortRequest);

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
     * @param {string} instanceId 实例ID。
     * @param {string} nodeId 实例节点ID。
     * @param {ModifyPublicIpRequestBody} bindEipRequest 请求body。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public modifyPublicIp(modifyPublicIpRequest?: ModifyPublicIpRequest): Promise<ModifyPublicIpResponse> {
        const options = ParamCreater().modifyPublicIp(modifyPublicIpRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 变更实例的存储容量大小
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 变更实例存储容量
     * @param {string} instanceId 实例ID。
     * @param {ModifyVolumeRequestBody} adjustVolumeRequestBody 请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public modifyVolume(modifyVolumeRequest?: ModifyVolumeRequest): Promise<ModifyVolumeResponse> {
        const options = ParamCreater().modifyVolume(modifyVolumeRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 当底层故障导致节点无法正常工作时，可以对该节点执行关机操作，关机后会由其他节点接管业务。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 支持节点的开关机
     * @param {string} instanceId 实例ID。
     * @param {OfflineNodesRequestBody} offlineNodesRequestBody 隔离节点的请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public offlineNodes(offlineNodesRequest?: OfflineNodesRequest): Promise<OfflineNodesResponse> {
        const options = ParamCreater().offlineNodes(offlineNodesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于暂停/恢复具备容灾关系的实例数据同步。
     * 
     * 该接口需要对具备容灾关系的两个实例分别各调用一次，2次接口都调用成功才能成功暂停/恢复容灾实例数据同步。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 暂停/恢复具备容灾关系的实例数据同步
     * @param {string} instanceId 实例ID。
     * @param {ActionBody} actionBody 指定容灾实例数据同步操作。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public pauseResumeDataSynchronization(pauseResumeDataSynchronizationRequest?: PauseResumeDataSynchronizationRequest): Promise<PauseResumeDataSynchronizationResponse> {
        const options = ParamCreater().pauseResumeDataSynchronization(pauseResumeDataSynchronizationRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 重置Redis数据库账号密码。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 重置Redis数据库账号密码
     * @param {string} instanceId 实例ID。
     * @param {RedisResetDbUserPasswordRequestBody} redisResetDbUserPasswordRequest 重置Redis数据库账号密码请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public resetDbUserPassword(resetDbUserPasswordRequest?: ResetDbUserPasswordRequest): Promise<ResetDbUserPasswordResponse> {
        const options = ParamCreater().resetDbUserPassword(resetDbUserPasswordRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 重置自定义参数模板
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 重置自定义参数模板
     * @param {string} configId 参数模板ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public resetParamGroupTemplate(resetParamGroupTemplateRequest?: ResetParamGroupTemplateRequest): Promise<ResetParamGroupTemplateResponse> {
        const options = ParamCreater().resetParamGroupTemplate(resetParamGroupTemplateRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改实例的管理员密码。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改实例的管理员密码
     * @param {string} instanceId 实例ID。
     * @param {ResetPasswordRequestBody} resetPasswordRequestBody 请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public resetPassword(resetPasswordRequest?: ResetPasswordRequest): Promise<ResetPasswordResponse> {
        const options = ParamCreater().resetPassword(resetPasswordRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 扩容冷数据存储。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 扩容冷数据存储
     * @param {string} instanceId 实例ID。
     * @param {ResizeColdVolumeRequestBody} resizeColdVolumeRequest 请求body体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public resizeColdVolume(resizeColdVolumeRequest?: ResizeColdVolumeRequest): Promise<ResizeColdVolumeResponse> {
        const options = ParamCreater().resizeColdVolume(resizeColdVolumeRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 变更实例的规格。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 变更实例规格
     * @param {string} instanceId 实例ID。
     * @param {ResizeInstanceRequestBody} resizeInstanceRequestBody 请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public resizeInstance(resizeInstanceRequest?: ResizeInstanceRequest): Promise<ResizeInstanceResponse> {
        const options = ParamCreater().resizeInstance(resizeInstanceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 扩容实例的存储容量大小。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 扩容实例存储容量
     * @param {string} instanceId 实例ID。
     * @param {ResizeInstanceVolumeRequestBody} resizeInstanceVolumeRequestBody 请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public resizeInstanceVolume(resizeInstanceVolumeRequest?: ResizeInstanceVolumeRequest): Promise<ResizeInstanceVolumeResponse> {
        const options = ParamCreater().resizeInstanceVolume(resizeInstanceVolumeRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 重启实例的数据库服务。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 重启实例的数据库服务
     * @param {string} instanceId 实例ID。
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
     * 恢复到已有实例
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 恢复到已有实例
     * @param {string} instanceId 实例Id，可以调用[5.3.3 查询实例列表和详情](x-wc://file&#x3D;zh-cn_topic_0000001397299481.xml)接口获取。如果未申请实例，可以调用[5.3.1 创建实例](x-wc://file&#x3D;zh-cn_topic_0000001397139461.xml)接口创建。
     * @param {RestoreRequestBody} restoreRequest 请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public restoreExistingInstance(restoreExistingInstanceRequest?: RestoreExistingInstanceRequest): Promise<RestoreExistingInstanceResponse> {
        const options = ParamCreater().restoreExistingInstance(restoreExistingInstanceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 恢复当前Redis实例到指定时间点。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 恢复当前Redis实例到指定时间点
     * @param {string} instanceId 实例ID。
     * @param {RestoreRedisPitrRequestBody} restoreRedisPitrRequestBody 请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public restoreRedisPitr(restoreRedisPitrRequest?: RestoreRedisPitrRequest): Promise<RestoreRedisPitrResponse> {
        const options = ParamCreater().restoreRedisPitr(restoreRedisPitrRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * - 将实例日志与LTS日志流关联，后台将自动上传实例日志到关联的LTS日志流里。
     * - 关联成功后，会产生一定费用，具体计费可参考云日志服务（LTS）的定价详情。
     * - 系统会为当前选择的日志流创建对应日志类型的结构化配置，若该日志流已存在其他日志类型的结构化配置，系统会进行覆盖。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 关联LTS日志流
     * @param {SaveLtsConfigsRequestBody} saveLtsConfigsRequestBody 请求体。
     * @param {string} [xLanguage] 语言。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public saveLtsConfigs(saveLtsConfigsRequest?: SaveLtsConfigsRequest): Promise<SaveLtsConfigsResponse> {
        const options = ParamCreater().saveLtsConfigs(saveLtsConfigsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 设置Redis禁用命令。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 设置Redis禁用命令
     * @param {string} instanceId 实例ID。
     * @param {SaveRedisDisabledCommandsRequestBody} saveRedisDisabledCommandsRequestBody 请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public saveRedisDisabledCommands(saveRedisDisabledCommandsRequest?: SaveRedisDisabledCommandsRequest): Promise<SaveRedisDisabledCommandsResponse> {
        const options = ParamCreater().saveRedisDisabledCommands(saveRedisDisabledCommandsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 设置磁盘自动扩容策略。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 设置磁盘自动扩容策略
     * @param {SetAutoPolicyRequestBody} setAutoEnlargePolicyRequest 请求ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public setAutoEnlargePolicy(setAutoEnlargePolicyRequest?: SetAutoEnlargePolicyRequest): Promise<SetAutoEnlargePolicyResponse> {
        const options = ParamCreater().setAutoEnlargePolicy(setAutoEnlargePolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 设置自动备份策略。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 设置自动备份策略
     * @param {string} instanceId 实例ID。
     * @param {SetBackupPolicyRequestBody} setBackupPolicyRequestBody 请求体。
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
     * 设置实例容灾切换的故障节点比例。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 设置实例容灾切换的故障节点比例
     * @param {SetDisasterRecoverySettingsRequestBody} setDisasterRecoverySettingsRequestBody 请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public setDisasterRecoverySettings(setDisasterRecoverySettingsRequest?: SetDisasterRecoverySettingsRequest): Promise<SetDisasterRecoverySettingsResponse> {
        const options = ParamCreater().setDisasterRecoverySettings(setDisasterRecoverySettingsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 开启/关闭实例数据导出。
     * 当前支持将InfluxDB数据转为parquet格式文件然后上传到指定的OBS桶中。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 开启/关闭实例数据导出
     * @param {string} instanceId 实例ID。
     * @param {SetInstanceDataDumpRequestBody} setInstanceDataDumpRequestBody 请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public setInstanceDataDump(setInstanceDataDumpRequest?: SetInstanceDataDumpRequest): Promise<SetInstanceDataDumpResponse> {
        const options = ParamCreater().setInstanceDataDump(setInstanceDataDumpRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 设置已删除实例保留天数，修改保留天数后删除的实例按照新的天数保留，修改之前已在回收站的实例保留天数不变。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 设置回收策略
     * @param {RecyclePolicyRequestBody} setRecyclePolicyRequestBody 请求体。
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
     * 设置Redis恢复到指定时间点策略。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 设置Redis恢复到指定时间点策略
     * @param {string} instanceId 实例ID。
     * @param {SetRedisPitrPolicyRequestBody} setRedisPitrPolicyRequestBody 请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public setRedisPitrPolicy(setRedisPitrPolicyRequest?: SetRedisPitrPolicyRequest): Promise<SetRedisPitrPolicyResponse> {
        const options = ParamCreater().setRedisPitrPolicy(setRedisPitrPolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据指定条件查询备份列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询备份列表
     * @param {number} offset 分页页码。
     * @param {number} limit 每页条数。
     * @param {'cassandra' | 'mongodb' | 'redis' | 'influxdb'} [datastoreType] 引擎类型 不传该参数则查询所有的引擎。
     * @param {string} [instanceId] 实例ID 不传该参数则查询所有备份列表。
     * @param {string} [backupId] 备份ID。
     * @param {'Auto 自动全量备份' | 'Manual 手动全量备份。'} [backupType] 备份类型。
     * @param {string} [beginTime] 查询备份开始的时间，格式为“yyyy-mm-dd hh:mm:ss”。该时间为UTC时间。
     * @param {string} [endTime] 查询备份开始的结束时间，格式为“yyyy-mm-dd hh:mm:ss”。该时间为UTC时间。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showAllInstancesBackups(showAllInstancesBackupsRequest?: ShowAllInstancesBackupsRequest): Promise<ShowAllInstancesBackupsResponse> {
        const options = ParamCreater().showAllInstancesBackups(showAllInstancesBackupsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据指定条件查询备份列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询备份列表（推荐）
     * @param {string} [instanceId] 实例ID，可以调用“查询实例列表”接口获取。如果未申请实例，可以调用“创建实例”接口创建。
     * @param {string} [datastoreType] 数据库类型。 - cassandra - redis - mongodb - influxdb
     * @param {string} [backupId] 备份ID。
     * @param {string} [backupType] 备份类型，大小写敏感。 - 取值为“Auto”，表示自动全量备份。 - 取值为“Manual”，表示手动全量备份。 - 当该字段未传入值时，默认只查询所有的全量备份(包含库表级)，包括自动全备备份和手动全量备份。
     * @param {string} [type] 备份策略类型。可取值: - Instance 表示查询实例级备份 - DatabaseTable 表示查询库表级备份 - 默认取值 Instance
     * @param {number} [limit] 查询备份个数上限值。取值范围：1~100。不传该参数时，默认查询前100条实例信息。
     * @param {number} [offset] 索引位置偏移量，表示从指定project ID下最新的备份创建时间开始，按时间的先后顺序偏移offset条数据后查询对应的备份信息。取值大于或等于0。不传该参数时，查询偏移量默认为0，表示从最新的备份创建时间对应的备份开始查询。
     * @param {string} [beginTime] 查询备份开始的时间，为yyyy-mm-ddThh:mm:ssZ字符串格式，T指某个时间的开始，Z指时区偏移量，默认为空。 - “end_time”有值时，“begin_time”必选。
     * @param {string} [endTime] 查询备份开始的结束时间，为yyyy-mm-ddThh:mm:ssZ字符串格式，T指某个时间的开始，Z指时区偏移量，默认为空。 - “begin_time”有值时，“end_time”必选。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showAllInstancesBackupsNew(showAllInstancesBackupsNewRequest?: ShowAllInstancesBackupsNewRequest): Promise<ShowAllInstancesBackupsNewResponse> {
        const options = ParamCreater().showAllInstancesBackupsNew(showAllInstancesBackupsNewRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询参数模板可应用的实例列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询参数模板可应用的实例列表
     * @param {string} configId 参数模板id
     * @param {number} [offset] 索引位置，偏移量。  从第一条数据偏移offset条数据后开始查询，默认为0（偏移0条数据，表示从第一条数据开始查询）。  取值必须为数字，不能为负数。
     * @param {number} [limit] 查询个数上限值。   - 取值范围: 1~100。   - 不传该参数时，默认查询前100条信息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showApplicableInstances(showApplicableInstancesRequest?: ShowApplicableInstancesRequest): Promise<ShowApplicableInstancesResponse> {
        const options = ParamCreater().showApplicableInstances(showApplicableInstancesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询参数模板应用历史
     * @param {string} configId 参数组id
     * @param {number} [offset] 索引位置，偏移量。  从第一条数据偏移offset条数据后开始查询，默认为0（偏移0条数据，表示从第一条数据开始查询）。  取值必须为数字，不能为负数。
     * @param {number} [limit] 查询个数上限值。   - 取值范围: 1~100。   - 不传该参数时，默认查询前100条信息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showApplyHistory(showApplyHistoryRequest?: ShowApplyHistoryRequest): Promise<ShowApplyHistoryResponse> {
        const options = ParamCreater().showApplyHistory(showApplyHistoryRequest);

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
     * @param {string} instanceId 实例Id，可以调用5.3.3 查询实例列表和详情接口获取。如果未申请实例，可以调用5.3.1 创建实例接口创建。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showAutoEnlargePolicy(showAutoEnlargePolicyRequest?: ShowAutoEnlargePolicyRequest): Promise<ShowAutoEnlargePolicyResponse> {
        const options = ParamCreater().showAutoEnlargePolicy(showAutoEnlargePolicyRequest);

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
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showBackupPolicies(showBackupPoliciesRequest?: ShowBackupPoliciesRequest): Promise<ShowBackupPoliciesResponse> {
        const options = ParamCreater().showBackupPolicies(showBackupPoliciesRequest);

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
     * 获取指定参数模板的详细信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取指定参数模板的参数
     * @param {string} configId 参数模板ID。
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
     * 查询实例容灾切换的故障节点比例。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询实例容灾切换的故障节点比例
     * @param {string} [instanceId] 实例ID。
     * @param {number} [offset] 索引位置偏移量，表示从指定offset条数据后查询对应的实例信息。 取值大于或等于0。不传该参数时，查询偏移量默认为0。
     * @param {number} [limit] 查询实例个数上限值。 取值范围：1~50。不传该参数时，默认查询前50条实例信息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showDisasterRecoverySettings(showDisasterRecoverySettingsRequest?: ShowDisasterRecoverySettingsRequest): Promise<ShowDisasterRecoverySettingsResponse> {
        const options = ParamCreater().showDisasterRecoverySettings(showDisasterRecoverySettingsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询实例负载均衡的IP访问黑白名单。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询实例负载均衡的IP访问黑白名单
     * @param {string} instanceId 实例id。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showElbIpGroup(showElbIpGroupRequest?: ShowElbIpGroupRequest): Promise<ShowElbIpGroupResponse> {
        const options = ParamCreater().showElbIpGroup(showElbIpGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询数据库错误日志
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询数据库错误日志信息
     * @param {string} instanceId 实例ID，可以调用“查询实例列表”接口获取。如果未申请实例，可以调用“创建实例”接口创建。
     * @param {string} startTime 开始时间，格式为“yyyy-mm-ddThh:mm:ssZ”。其中，T指某个时间的开始，Z指时区偏移量，例如北京时间偏移显示为+0800。开始时间不得早于当前时间31天。
     * @param {string} endTime 结束时间，格式为“yyyy-mm-ddThh:mm:ssZ”。其中，T指某个时间的开始；Z指时区偏移量，例如北京时间偏移显示为+0800。 只能查询当前时间前一个月内的错误日志。结束时间不能晚于当前时间。
     * @param {string} [nodeId] 节点ID，取空值，表示查询实例下所有允许查询的节点。
     * @param {string} [type] 语句类型，取空值，表示查询所有语句类型，也可指定如下日志类型： - Warning - Error
     * @param {number} [offset] 索引位置，偏移量。取值范围为 [0, 1999]。 从第一条数据偏移offset条数据后开始查询，默认为0（偏移0条数据，表示从第一条数据开始查询） - 必须为数字，不能为负数。
     * @param {number} [limit] 查询记录数。取值范围[1, 100]，默认10 （表示默认返回10条数据）。 - limit 与 offset的和需要满足小于等于2000的条件。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showErrorLog(showErrorLogRequest?: ShowErrorLogRequest): Promise<ShowErrorLogResponse> {
        const options = ParamCreater().showErrorLog(showErrorLogRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询Redis的高危命令
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询高危命令
     * @param {string} instanceId 实例ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showHighRiskCommands(showHighRiskCommandsRequest?: ShowHighRiskCommandsRequest): Promise<ShowHighRiskCommandsResponse> {
        const options = ParamCreater().showHighRiskCommands(showHighRiskCommandsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询实例可搭建双活关系的Region。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询实例可搭建双活关系的Region
     * @param {string} instanceId 实例ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showInstanceBiactiveRegions(showInstanceBiactiveRegionsRequest?: ShowInstanceBiactiveRegionsRequest): Promise<ShowInstanceBiactiveRegionsResponse> {
        const options = ParamCreater().showInstanceBiactiveRegions(showInstanceBiactiveRegionsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取指定实例的参数信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取指定实例的参数
     * @param {string} instanceId 实例ID。
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
     * 该接口用于获取容灾实例主/备角色信息，以便后续容灾实例备升主和容灾实例主降备接口调用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取容灾实例主/备角色信息
     * @param {string} instanceId 实例ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showInstanceRole(showInstanceRoleRequest?: ShowInstanceRoleRequest): Promise<ShowInstanceRoleResponse> {
        const options = ParamCreater().showInstanceRole(showInstanceRoleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询创建实例或扩容节点时需要的IP数量
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询创建实例或扩容节点时需要的IP数量
     * @param {number} nodeNum 创建实例或扩容节点的个数。最大支持输入200。
     * @param {string} [engineName] 数据库引擎名称。没有传入实例ID的时候该字段为必传。 - 取值为“cassandra”，表示GeminiDB Cassandra数据库引擎。 - 取值为“mongodb”，表示GeminiDB Mongo数据库引擎。 - 取值为“influxdb”，表示GeminiDB Influx数据库引擎。 - 取值为“redis”，表示GeminiDB Redis数据库引擎。
     * @param {string} [instanceMode] 实例类型。没有传入实例ID的时候该字段为必传。 - 取值为“Cluster”，表示GeminiDB Cassandra、GeminiDB Influx、GeminiDB Redis集群实例类型。 - 取值为“ReplicaSet”，表示GeminiDB Mongo副本集实例类型。
     * @param {string} [instanceId] 实例Id，可以调用5.3.3 查询实例列表和详情接口获取。如果未申请实例，可以调用5.3.1 创建实例接口创建。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showIpNumRequirement(showIpNumRequirementRequest?: ShowIpNumRequirementRequest): Promise<ShowIpNumRequirementResponse> {
        const options = ParamCreater().showIpNumRequirement(showIpNumRequirementRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询实例参数的修改历史
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询实例参数的修改历史
     * @param {string} instanceId 实例id
     * @param {number} [offset] 索引位置，偏移量。  从第一条数据偏移offset条数据后开始查询，默认为0（偏移0条数据，表示从第一条数据开始查询）。  取值必须为数字，不能为负数。
     * @param {number} [limit] 查询个数上限值。   - 取值范围: 1~100。   - 不传该参数时，默认查询前100条信息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showModifyHistory(showModifyHistoryRequest?: ShowModifyHistoryRequest): Promise<ShowModifyHistoryResponse> {
        const options = ParamCreater().showModifyHistory(showModifyHistoryRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取GeminiDB Redis的免密配置。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取GeminiDB Redis的免密配置
     * @param {string} instanceId 实例ID。
     * @param {number} [offset] 索引位置偏移量，表示从查询到的免密配置列表偏移offset条数据后查询对应的免密配置。 取值大于或等于0。不传该参数时，查询偏移量默认为0，表示从第一条记录开始查询。
     * @param {number} [limit] 查询个数上限值。 取值范围：1~100。不传该参数时，默认查询前100条记录。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showPasswordlessConfig(showPasswordlessConfigRequest?: ShowPasswordlessConfigRequest): Promise<ShowPasswordlessConfigResponse> {
        const options = ParamCreater().showPasswordlessConfig(showPasswordlessConfigRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取容灾实例数据同步状态，主备实例id，数据同步指标值，以及倒换和切换场景下的RPO，RTO指标值。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取容灾实例数据同步状态
     * @param {string} instanceId 实例ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showPauseResumeStutus(showPauseResumeStutusRequest?: ShowPauseResumeStutusRequest): Promise<ShowPauseResumeStutusResponse> {
        const options = ParamCreater().showPauseResumeStutus(showPauseResumeStutusRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询单租户在GeminiDB服务下的资源配额。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询配额
     * @param {string} [datastoreType] 数据库类型。 取值为“cassandra”，表示查询GeminiDB Cassandra数据库实例配额。 取值为“mongodb”，表示GeminiDB Mongo查询数据库实例配额。 取值为“influxdb”，表示查询GeminiDB Influx数据库实例配额。 取值为“redis”，表示查询GeminiDB Redis数据库实例配额。 如果不传该参数，表示查询所有数据库实例配额。
     * @param {string} [mode] 实例类型。 取值为“Cluster”，表示GeminiDB Cassandra、GeminiDB Influx、GeminiDB Redis集群实例类型。 取值为“InfluxdbSingle”，表示GeminiDB Influx单节点实例类型。 取值为“ReplicaSet”，表示GeminiDB Mongo副本集实例类型。 如果不传datastore_type参数，自动忽略该参数设置，传入datastore_type时，该参数必填。
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
     * 查询回收策略。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询回收策略
     * @param {string} [xLanguage] 语言。
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
     * 支持查询Redis实例的大key。value长度大于bigkeys-string-threshold参数的string类型的key或者元素数大于bigkeys-composite-threshold参数的hash/list/zset/set/stream类型key，会被判断为大key。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询Redis实例的大key
     * @param {string} instanceId 实例ID。
     * @param {ShowRedisBigKeysRequestBody} [showRedisBigKeysRequestBody] 查询Redis大key的请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showRedisBigKeys(showRedisBigKeysRequest?: ShowRedisBigKeysRequest): Promise<ShowRedisBigKeysResponse> {
        const options = ParamCreater().showRedisBigKeys(showRedisBigKeysRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询Redis禁用命令。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询Redis禁用命令
     * @param {string} instanceId 实例ID。
     * @param {'command' | 'key'} type 指令类型
     * @param {number} [offset] 索引位置偏移量，表示从指定offset条数据后查询对应的实例信息。 取值大于或等于0。不传该参数时，查询偏移量默认为0。
     * @param {number} [limit] 查询专属资源个数上限值。   - 取值范围：1~50。不传该参数时，默认查询前50条实例信息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showRedisDisabledCommands(showRedisDisabledCommandsRequest?: ShowRedisDisabledCommandsRequest): Promise<ShowRedisDisabledCommandsResponse> {
        const options = ParamCreater().showRedisDisabledCommands(showRedisDisabledCommandsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 支持查询Redis实例的热key。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询Redis实例的热key
     * @param {string} instanceId 实例ID。
     * @param {number} [offset] 索引位置偏移量，表示从指定offset条数据后查询对应的实例信息。 取值大于或等于0。不传该参数时，查询偏移量默认为0。
     * @param {number} [limit] 查询数据的上限值。   - 取值范围：1~50。不传该参数时，默认查询前50条实例信息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showRedisHotKeys(showRedisHotKeysRequest?: ShowRedisHotKeysRequest): Promise<ShowRedisHotKeysResponse> {
        const options = ParamCreater().showRedisHotKeys(showRedisHotKeysRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询Redis实例指定时间点恢复所占用的存储空间。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询Redis实例指定时间点恢复所占用的存储空间
     * @param {string} instanceId 实例ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showRedisPitrInfo(showRedisPitrInfoRequest?: ShowRedisPitrInfoRequest): Promise<ShowRedisPitrInfoResponse> {
        const options = ParamCreater().showRedisPitrInfo(showRedisPitrInfoRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询Redis恢复到指定时间点策略。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询Redis恢复到指定时间点策略
     * @param {string} instanceId 实例ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showRedisPitrPolicy(showRedisPitrPolicyRequest?: ShowRedisPitrPolicyRequest): Promise<ShowRedisPitrPolicyResponse> {
        const options = ParamCreater().showRedisPitrPolicy(showRedisPitrPolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询用户可恢复的实例列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询可恢复的实例列表
     * @param {string} backupId 备份文件ID
     * @param {number} [offset] 索引位置偏移量。取值大于或等于0。不传该参数时，查询偏移量默认为0。
     * @param {number} [limit] 查询个数上限值。取值范围：1~100。不传该参数时，默认查询前100条信息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showRestorableList(showRestorableListRequest?: ShowRestorableListRequest): Promise<ShowRestorableListResponse> {
        const options = ParamCreater().showRestorableList(showRestorableListRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询秒级监控配置。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询秒级监控配置
     * @param {string} instanceId 实例ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showSecondLevelMonitoringStatus(showSecondLevelMonitoringStatusRequest?: ShowSecondLevelMonitoringStatusRequest): Promise<ShowSecondLevelMonitoringStatusResponse> {
        const options = ParamCreater().showSecondLevelMonitoringStatus(showSecondLevelMonitoringStatusRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询慢日志脱敏状态。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询慢日志脱敏状态
     * @param {string} instanceId 实例ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showSlowLogDesensitization(showSlowLogDesensitizationRequest?: ShowSlowLogDesensitizationRequest): Promise<ShowSlowLogDesensitizationResponse> {
        const options = ParamCreater().showSlowLogDesensitization(showSlowLogDesensitizationRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 缩容指定集群实例的节点数量。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 缩容指定集群实例的节点数量
     * @param {string} instanceId 实例ID。
     * @param {ShrinkInstanceNodeRequestBody} enlargeInstanceRequestBody 请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public shrinkInstanceNode(shrinkInstanceNodeRequest?: ShrinkInstanceNodeRequest): Promise<ShrinkInstanceNodeResponse> {
        const options = ParamCreater().shrinkInstanceNode(shrinkInstanceNodeRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 支持紧急情况下停止备份功能。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 停止备份
     * @param {string} backupId 备份ID。
     * @param {StopBackupRequestBody} stopBackupRequestBody 停止备份请求体。
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
     * 设置实例负载均衡的IP访问黑白名单，黑名单、白名单只能选一种，每次调用此接口覆盖之前的设置。关闭后不限制连接的源IP地址。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 设置实例负载均衡的IP访问黑白名单
     * @param {string} instanceId 实例ID。
     * @param {SwitchIpGroupRequestBody} switchIpGroupRequestBody 设置实例负载均衡的IP访问黑白名单请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public switchIpGroup(switchIpGroupRequest?: SwitchIpGroupRequest): Promise<SwitchIpGroupResponse> {
        const options = ParamCreater().switchIpGroup(switchIpGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 切换实例下的主备节点
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary Redis主备切换
     * @param {string} instanceId 实例ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public switchOver(switchOverRequest?: SwitchOverRequest): Promise<SwitchOverResponse> {
        const options = ParamCreater().switchOver(switchOverRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 开启或关闭指定实例的5秒级监控。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 开启/关闭秒级监控
     * @param {string} instanceId 实例ID。
     * @param {SwitchSecondLevelMonitoringRequestBody} switchSecondLevelMonitoringRequestBody 请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public switchSecondLevelMonitoring(switchSecondLevelMonitoringRequest?: SwitchSecondLevelMonitoringRequest): Promise<SwitchSecondLevelMonitoringResponse> {
        const options = ParamCreater().switchSecondLevelMonitoring(switchSecondLevelMonitoringRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 设置慢日志脱敏状态
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 设置慢日志脱敏状态
     * @param {string} instanceId 实例ID，可以调用5.3.3 查询实例列表和详情接口获取。如果未申请实例，可以调用5.3.1 创建实例接口创建。
     * @param {SwitchSlowlogDesensitizationRequestBody} setSlowLogPlaintextSwitchRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public switchSlowlogDesensitization(switchSlowlogDesensitizationRequest?: SwitchSlowlogDesensitizationRequest): Promise<SwitchSlowlogDesensitizationResponse> {
        const options = ParamCreater().switchSlowlogDesensitization(switchSlowlogDesensitizationRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 切换实例SSL开关。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 切换实例SSL开关
     * @param {string} instanceId 实例ID。
     * @param {SwitchSslRequestBody} switchSslRequest 请求body体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public switchSsl(switchSslRequest?: SwitchSslRequest): Promise<SwitchSslResponse> {
        const options = ParamCreater().switchSsl(switchSslRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于对已经搭建容灾关系的实例，将备实例升级为主实例。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 容灾实例备升主
     * @param {string} instanceId 实例ID。
     * @param {SwitchToMasterDisasterRecoveryBody} [switchToMasterDisasterRecoveryBody] 请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public switchToMaster(switchToMasterRequest?: SwitchToMasterRequest): Promise<SwitchToMasterResponse> {
        const options = ParamCreater().switchToMaster(switchToMasterRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于对已经搭建容灾关系的实例，将主实例降级为备实例。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 容灾实例主降备
     * @param {string} instanceId 实例ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public switchToSlave(switchToSlaveRequest?: SwitchToSlaveRequest): Promise<SwitchToSlaveResponse> {
        const options = ParamCreater().switchToSlave(switchToSlaveRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改副本集跨网段访问配置
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改副本集跨网段访问配置
     * @param {string} instanceId 实例Id，可以调用[5.3.3 查询实例列表和详情](x-wc://file&#x3D;zh-cn_topic_0000001397299481.xml)接口获取。如果未申请实例，可以调用[5.3.1 创建实例](x-wc://file&#x3D;zh-cn_topic_0000001397139461.xml)接口创建。
     * @param {UpdateClientNetworkRequestBody} updateClientNetworkRequest 请求body体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateClientNetwork(updateClientNetworkRequest?: UpdateClientNetworkRequest): Promise<UpdateClientNetworkResponse> {
        const options = ParamCreater().updateClientNetwork(updateClientNetworkRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改参数模板参数。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改参数模板参数
     * @param {string} configId 参数模板ID。
     * @param {UpdateConfigurationRequestBody} updateConfigurationRequestBody 请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateConfiguration(updateConfigurationRequest?: UpdateConfigurationRequest): Promise<UpdateConfigurationResponse> {
        const options = ParamCreater().updateConfiguration(updateConfigurationRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 操作GeminDB实例数据库
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 操作GeminDB实例数据库
     * @param {string} instanceId 实例ID。
     * @param {UpdateDatabasesRequestBody} updateDatabasesRequestBody 请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateDatabases(updateDatabasesRequest?: UpdateDatabasesRequest): Promise<UpdateDatabasesResponse> {
        const options = ParamCreater().updateDatabases(updateDatabasesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改指定内存加速规则。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改内存加速规则
     * @param {UpdateDbCacheRuleRequestBody} [updateDbCacheRuleRequestBody] 更新内存加速规则请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateDbCacheRule(updateDbCacheRuleRequest?: UpdateDbCacheRuleRequest): Promise<UpdateDbCacheRuleResponse> {
        const options = ParamCreater().updateDbCacheRule(updateDbCacheRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量修改高危命令
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改高危命令
     * @param {string} instanceId 实例ID。
     * @param {RenameHighRiskCommandsRequest} renameCommandsRequestBody 请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateHighRiskCommands(updateHighRiskCommandsRequest?: UpdateHighRiskCommandsRequest): Promise<UpdateHighRiskCommandsResponse> {
        const options = ParamCreater().updateHighRiskCommands(updateHighRiskCommandsRequest);

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
     * @param {UpdateInstanceConfigurationRequestBody} updateInstanceConfigurationRequestBody 请求体。
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
     * 修改指定实例的参数。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改指定实例的参数
     * @param {string} instanceId 实例ID。
     * @param {UpdateInstanceConfigurationsRequestBody} updateInstanceConfigurationsRequestBody 请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateInstanceConfigurations(updateInstanceConfigurationsRequest?: UpdateInstanceConfigurationsRequest): Promise<UpdateInstanceConfigurationsResponse> {
        const options = ParamCreater().updateInstanceConfigurations(updateInstanceConfigurationsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改实例名称
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改实例名称
     * @param {string} instanceId 实例ID。
     * @param {UpdateInstanceNameRequestBody} updateInstanceNameRequestBody 请求体。
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
     * 支持修改GeminiDB Redis的免密配置。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 支持修改GeminiDB Redis的免密配置
     * @param {string} instanceId 实例ID。
     * @param {UpdatePasswordlessConfigRequestBody} [updatePasswordlessConfigRequestBody] 要设置的免密配置,ip与网段的列表。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updatePasswordlessConfig(updatePasswordlessConfigRequest?: UpdatePasswordlessConfigRequest): Promise<UpdatePasswordlessConfigResponse> {
        const options = ParamCreater().updatePasswordlessConfig(updatePasswordlessConfigRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 变更实例关联的安全组
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 变更实例安全组
     * @param {string} instanceId 实例ID。
     * @param {UpdateSecurityGroupRequestBody} updateSecurityGroupRequestBody 请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateSecurityGroup(updateSecurityGroupRequest?: UpdateSecurityGroupRequest): Promise<UpdateSecurityGroupResponse> {
        const options = ParamCreater().updateSecurityGroup(updateSecurityGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 升级数据库补丁版本
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 数据库补丁升级
     * @param {string} instanceId 实例ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public upgradeDbVersion(upgradeDbVersionRequest?: UpgradeDbVersionRequest): Promise<UpgradeDbVersionResponse> {
        const options = ParamCreater().upgradeDbVersion(upgradeDbVersionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询当前支持的API版本信息列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询当前支持的API版本信息列表
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listApiVersion(listApiVersionRequest?: ListApiVersionRequest): Promise<ListApiVersionResponse> {
        const options = ParamCreater().listApiVersion();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定API版本信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询指定API版本信息
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
}

export const ParamCreater = function () {
    return {
    
        /**
         * 将参数模板应用到实例，可以指定一个或多个实例。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        applyConfiguration(applyConfigurationRequest?: ApplyConfigurationRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/configurations/{config_id}/apply",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let configId;

            if (applyConfigurationRequest !== null && applyConfigurationRequest !== undefined) {
                if (applyConfigurationRequest instanceof ApplyConfigurationRequest) {
                    configId = applyConfigurationRequest.configId;
                    body = applyConfigurationRequest.body
                } else {
                    configId = applyConfigurationRequest['config_id'];
                    body = applyConfigurationRequest['body'];
                }
            }

        
            if (configId === null || configId === undefined) {
            throw new RequiredError('configId','Required parameter configId was null or undefined when calling applyConfiguration.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'config_id': configId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 将参数模板应用到实例，可以指定一个或多个实例。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        applyConfigurationToInstances(applyConfigurationToInstancesRequest?: ApplyConfigurationToInstancesRequest) {
            const options = {
                method: "PUT",
                url: "/v3.1/{project_id}/configurations/{config_id}/apply",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let configId;

            if (applyConfigurationToInstancesRequest !== null && applyConfigurationToInstancesRequest !== undefined) {
                if (applyConfigurationToInstancesRequest instanceof ApplyConfigurationToInstancesRequest) {
                    configId = applyConfigurationToInstancesRequest.configId;
                    body = applyConfigurationToInstancesRequest.body
                } else {
                    configId = applyConfigurationToInstancesRequest['config_id'];
                    body = applyConfigurationToInstancesRequest['body'];
                }
            }

        
            if (configId === null || configId === undefined) {
            throw new RequiredError('configId','Required parameter configId was null or undefined when calling applyConfigurationToInstances.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'config_id': configId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 批量删除数据库实例的手动备份。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchDeleteManualBackup(batchDeleteManualBackupRequest?: BatchDeleteManualBackupRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{project_id}/instances/backups",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xLanguage;

            if (batchDeleteManualBackupRequest !== null && batchDeleteManualBackupRequest !== undefined) {
                if (batchDeleteManualBackupRequest instanceof BatchDeleteManualBackupRequest) {
                    body = batchDeleteManualBackupRequest.body
                    xLanguage = batchDeleteManualBackupRequest.xLanguage;
                } else {
                    body = batchDeleteManualBackupRequest['body'];
                    xLanguage = batchDeleteManualBackupRequest['X-Language'];
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
         * 批量添加或删除指定数据库实例的标签。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchTagAction(batchTagActionRequest?: BatchTagActionRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/{instance_id}/tags/action",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (batchTagActionRequest !== null && batchTagActionRequest !== undefined) {
                if (batchTagActionRequest instanceof BatchTagActionRequest) {
                    instanceId = batchTagActionRequest.instanceId;
                    body = batchTagActionRequest.body
                } else {
                    instanceId = batchTagActionRequest['instance_id'];
                    body = batchTagActionRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling batchTagAction.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 批量升级数据库补丁版本。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchUpgradeDatabaseVersion(batchUpgradeDatabaseVersionRequest?: BatchUpgradeDatabaseVersionRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/db-upgrade",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (batchUpgradeDatabaseVersionRequest !== null && batchUpgradeDatabaseVersionRequest !== undefined) {
                if (batchUpgradeDatabaseVersionRequest instanceof BatchUpgradeDatabaseVersionRequest) {
                    body = batchUpgradeDatabaseVersionRequest.body
                } else {
                    body = batchUpgradeDatabaseVersionRequest['body'];
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
         * 取消定时任务
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        cancelInstanceScheduleWindow(cancelInstanceScheduleWindowRequest?: CancelInstanceScheduleWindowRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{project_id}/scheduled-jobs/{job_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let jobId;

            if (cancelInstanceScheduleWindowRequest !== null && cancelInstanceScheduleWindowRequest !== undefined) {
                if (cancelInstanceScheduleWindowRequest instanceof CancelInstanceScheduleWindowRequest) {
                    jobId = cancelInstanceScheduleWindowRequest.jobId;
                } else {
                    jobId = cancelInstanceScheduleWindowRequest['job_id'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling cancelInstanceScheduleWindow.');
            }

            options.pathParams = { 'job_id': jobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 校验实例是否可以与指定实例建立/解除容灾关系。若接口返回成功，表示可以与指定实例建立/解除容灾关系。
         * 该接口需要对建立/解除容灾关系的两个实例各调用一次，2次调用都响应成功才能进行容灾关系的搭建/解除。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        checkDisasterRecoveryOperation(checkDisasterRecoveryOperationRequest?: CheckDisasterRecoveryOperationRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/{instance_id}/disaster-recovery/precheck",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (checkDisasterRecoveryOperationRequest !== null && checkDisasterRecoveryOperationRequest !== undefined) {
                if (checkDisasterRecoveryOperationRequest instanceof CheckDisasterRecoveryOperationRequest) {
                    instanceId = checkDisasterRecoveryOperationRequest.instanceId;
                    body = checkDisasterRecoveryOperationRequest.body
                } else {
                    instanceId = checkDisasterRecoveryOperationRequest['instance_id'];
                    body = checkDisasterRecoveryOperationRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling checkDisasterRecoveryOperation.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 判断弱密码。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        checkWeekPassword(checkWeekPasswordRequest?: CheckWeekPasswordRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/weak-password-verification",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (checkWeekPasswordRequest !== null && checkWeekPasswordRequest !== undefined) {
                if (checkWeekPasswordRequest instanceof CheckWeekPasswordRequest) {
                    body = checkWeekPasswordRequest.body
                } else {
                    body = checkWeekPasswordRequest['body'];
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
         * 关闭实例所有节点会话。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        clearInstanceSessions(clearInstanceSessionsRequest?: ClearInstanceSessionsRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{project_id}/instances/{instance_id}/sessions",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let nodeId;

            if (clearInstanceSessionsRequest !== null && clearInstanceSessionsRequest !== undefined) {
                if (clearInstanceSessionsRequest instanceof ClearInstanceSessionsRequest) {
                    instanceId = clearInstanceSessionsRequest.instanceId;
                    nodeId = clearInstanceSessionsRequest.nodeId;
                } else {
                    instanceId = clearInstanceSessionsRequest['instance_id'];
                    nodeId = clearInstanceSessionsRequest['node_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling clearInstanceSessions.');
            }
            if (nodeId !== null && nodeId !== undefined) {
                localVarQueryParameter['node_id'] = nodeId;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 比较两个参数模板之间的差异
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        compareConfiguration(compareConfigurationRequest?: CompareConfigurationRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/configurations/comparison",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (compareConfigurationRequest !== null && compareConfigurationRequest !== undefined) {
                if (compareConfigurationRequest instanceof CompareConfigurationRequest) {
                    body = compareConfigurationRequest.body
                } else {
                    body = compareConfigurationRequest['body'];
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
         * 复制参数模板
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        copyConfiguration(copyConfigurationRequest?: CopyConfigurationRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/configurations/{config_id}/copy",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let configId;

            if (copyConfigurationRequest !== null && copyConfigurationRequest !== undefined) {
                if (copyConfigurationRequest instanceof CopyConfigurationRequest) {
                    configId = copyConfigurationRequest.configId;
                    body = copyConfigurationRequest.body
                } else {
                    configId = copyConfigurationRequest['config_id'];
                    body = copyConfigurationRequest['body'];
                }
            }

        
            if (configId === null || configId === undefined) {
            throw new RequiredError('configId','Required parameter configId was null or undefined when calling copyConfiguration.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'config_id': configId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建手动备份。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createBack(createBackRequest?: CreateBackRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/{instance_id}/backups",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (createBackRequest !== null && createBackRequest !== undefined) {
                if (createBackRequest instanceof CreateBackRequest) {
                    instanceId = createBackRequest.instanceId;
                    body = createBackRequest.body
                } else {
                    instanceId = createBackRequest['instance_id'];
                    body = createBackRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling createBack.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * ‘创建冷数据存储’
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createColdVolume(createColdVolumeRequest?: CreateColdVolumeRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/{instance_id}/cold-volume",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (createColdVolumeRequest !== null && createColdVolumeRequest !== undefined) {
                if (createColdVolumeRequest instanceof CreateColdVolumeRequest) {
                    instanceId = createColdVolumeRequest.instanceId;
                    body = createColdVolumeRequest.body
                } else {
                    instanceId = createColdVolumeRequest['instance_id'];
                    body = createColdVolumeRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling createColdVolume.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建参数模板。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createConfiguration(createConfigurationRequest?: CreateConfigurationRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/configurations",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createConfigurationRequest !== null && createConfigurationRequest !== undefined) {
                if (createConfigurationRequest instanceof CreateConfigurationRequest) {
                    body = createConfigurationRequest.body
                } else {
                    body = createConfigurationRequest['body'];
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
         * 创建内存加速映射。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createDbCacheMapping(createDbCacheMappingRequest?: CreateDbCacheMappingRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/dbcache/mapping",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createDbCacheMappingRequest !== null && createDbCacheMappingRequest !== undefined) {
                if (createDbCacheMappingRequest instanceof CreateDbCacheMappingRequest) {
                    body = createDbCacheMappingRequest.body
                } else {
                    body = createDbCacheMappingRequest['body'];
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
         * 创建内存加速规则。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createDbCacheRule(createDbCacheRuleRequest?: CreateDbCacheRuleRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/dbcache/rule",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createDbCacheRuleRequest !== null && createDbCacheRuleRequest !== undefined) {
                if (createDbCacheRuleRequest instanceof CreateDbCacheRuleRequest) {
                    body = createDbCacheRuleRequest.body
                } else {
                    body = createDbCacheRuleRequest['body'];
                }
            }

        
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 在Redis实例中创建数据库帐号。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createDbUser(createDbUserRequest?: CreateDbUserRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/redis/instances/{instance_id}/db-users",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (createDbUserRequest !== null && createDbUserRequest !== undefined) {
                if (createDbUserRequest instanceof CreateDbUserRequest) {
                    instanceId = createDbUserRequest.instanceId;
                    body = createDbUserRequest.body
                } else {
                    instanceId = createDbUserRequest['instance_id'];
                    body = createDbUserRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling createDbUser.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 搭建实例与特定实例的容灾关系。 该接口需要对搭建容灾关系的两个实例分别各调用一次，2次接口都调用成功才能成功搭建容灾关系。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createDisasterRecovery(createDisasterRecoveryRequest?: CreateDisasterRecoveryRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/{instance_id}/disaster-recovery/construction",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (createDisasterRecoveryRequest !== null && createDisasterRecoveryRequest !== undefined) {
                if (createDisasterRecoveryRequest instanceof CreateDisasterRecoveryRequest) {
                    instanceId = createDisasterRecoveryRequest.instanceId;
                    body = createDisasterRecoveryRequest.body
                } else {
                    instanceId = createDisasterRecoveryRequest['instance_id'];
                    body = createDisasterRecoveryRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling createDisasterRecovery.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建数据库实例。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createInstance(createInstanceRequest?: CreateInstanceRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createInstanceRequest !== null && createInstanceRequest !== undefined) {
                if (createInstanceRequest instanceof CreateInstanceRequest) {
                    body = createInstanceRequest.body
                } else {
                    body = createInstanceRequest['body'];
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
         * 删除手动备份
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteBackup(deleteBackupRequest?: DeleteBackupRequest) {
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

            if (deleteBackupRequest !== null && deleteBackupRequest !== undefined) {
                if (deleteBackupRequest instanceof DeleteBackupRequest) {
                    backupId = deleteBackupRequest.backupId;
                } else {
                    backupId = deleteBackupRequest['backup_id'];
                }
            }

        
            if (backupId === null || backupId === undefined) {
            throw new RequiredError('backupId','Required parameter backupId was null or undefined when calling deleteBackup.');
            }

            options.pathParams = { 'backup_id': backupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除指定参数模板。
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

            if (deleteConfigurationRequest !== null && deleteConfigurationRequest !== undefined) {
                if (deleteConfigurationRequest instanceof DeleteConfigurationRequest) {
                    configId = deleteConfigurationRequest.configId;
                } else {
                    configId = deleteConfigurationRequest['config_id'];
                }
            }

        
            if (configId === null || configId === undefined) {
            throw new RequiredError('configId','Required parameter configId was null or undefined when calling deleteConfiguration.');
            }

            options.pathParams = { 'config_id': configId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 解除指定内存加速映射。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteDbCacheMapping(deleteDbCacheMappingRequest?: DeleteDbCacheMappingRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{project_id}/dbcache/mapping",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (deleteDbCacheMappingRequest !== null && deleteDbCacheMappingRequest !== undefined) {
                if (deleteDbCacheMappingRequest instanceof DeleteDbCacheMappingRequest) {
                    body = deleteDbCacheMappingRequest.body
                } else {
                    body = deleteDbCacheMappingRequest['body'];
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
         * 删除内存加速规则。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteDbCacheRule(deleteDbCacheRuleRequest?: DeleteDbCacheRuleRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{project_id}/dbcache/rule",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (deleteDbCacheRuleRequest !== null && deleteDbCacheRuleRequest !== undefined) {
                if (deleteDbCacheRuleRequest instanceof DeleteDbCacheRuleRequest) {
                    body = deleteDbCacheRuleRequest.body
                } else {
                    body = deleteDbCacheRuleRequest['body'];
                }
            }

        
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除Redis实例的数据库账号。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteDbUser(deleteDbUserRequest?: DeleteDbUserRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{project_id}/redis/instances/{instance_id}/db-users",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (deleteDbUserRequest !== null && deleteDbUserRequest !== undefined) {
                if (deleteDbUserRequest instanceof DeleteDbUserRequest) {
                    instanceId = deleteDbUserRequest.instanceId;
                    body = deleteDbUserRequest.body
                } else {
                    instanceId = deleteDbUserRequest['instance_id'];
                    body = deleteDbUserRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling deleteDbUser.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 解除实例与特定实例的容灾关系。 该接口需要对搭建容灾关系的两个实例分别各调用一次，2次接口都调用成功才能成功解除容灾关系。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteDisasterRecovery(deleteDisasterRecoveryRequest?: DeleteDisasterRecoveryRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/{instance_id}/disaster-recovery/deconstruction",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;

            if (deleteDisasterRecoveryRequest !== null && deleteDisasterRecoveryRequest !== undefined) {
                if (deleteDisasterRecoveryRequest instanceof DeleteDisasterRecoveryRequest) {
                    instanceId = deleteDisasterRecoveryRequest.instanceId;
                } else {
                    instanceId = deleteDisasterRecoveryRequest['instance_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling deleteDisasterRecovery.');
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除扩容失败的节点
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteEnlargeFailNode(deleteEnlargeFailNodeRequest?: DeleteEnlargeFailNodeRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{project_id}/instances/{instance_id}/enlarge-failed-nodes",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (deleteEnlargeFailNodeRequest !== null && deleteEnlargeFailNodeRequest !== undefined) {
                if (deleteEnlargeFailNodeRequest instanceof DeleteEnlargeFailNodeRequest) {
                    instanceId = deleteEnlargeFailNodeRequest.instanceId;
                    body = deleteEnlargeFailNodeRequest.body
                } else {
                    instanceId = deleteEnlargeFailNodeRequest['instance_id'];
                    body = deleteEnlargeFailNodeRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling deleteEnlargeFailNode.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

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

            if (deleteInstanceRequest !== null && deleteInstanceRequest !== undefined) {
                if (deleteInstanceRequest instanceof DeleteInstanceRequest) {
                    instanceId = deleteInstanceRequest.instanceId;
                } else {
                    instanceId = deleteInstanceRequest['instance_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling deleteInstance.');
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 关闭实例节点会话。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteInstancesSession(deleteInstancesSessionRequest?: DeleteInstancesSessionRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{project_id}/redis/nodes/{node_id}/sessions",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let nodeId;

            if (deleteInstancesSessionRequest !== null && deleteInstancesSessionRequest !== undefined) {
                if (deleteInstancesSessionRequest instanceof DeleteInstancesSessionRequest) {
                    nodeId = deleteInstancesSessionRequest.nodeId;
                    body = deleteInstancesSessionRequest.body
                } else {
                    nodeId = deleteInstancesSessionRequest['node_id'];
                    body = deleteInstancesSessionRequest['body'];
                }
            }

        
            if (nodeId === null || nodeId === undefined) {
            throw new RequiredError('nodeId','Required parameter nodeId was null or undefined when calling deleteInstancesSession.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'node_id': nodeId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 将实例日志与LTS日志流解除关联，后台将取消上传实例日志到的LTS日志流里。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteLtsConfigs(deleteLtsConfigsRequest?: DeleteLtsConfigsRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{project_id}/instances/logs/lts-configs",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xLanguage;

            if (deleteLtsConfigsRequest !== null && deleteLtsConfigsRequest !== undefined) {
                if (deleteLtsConfigsRequest instanceof DeleteLtsConfigsRequest) {
                    body = deleteLtsConfigsRequest.body
                    xLanguage = deleteLtsConfigsRequest.xLanguage;
                } else {
                    body = deleteLtsConfigsRequest['body'];
                    xLanguage = deleteLtsConfigsRequest['X-Language'];
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
         * 删除Redis禁用命令。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteRedisDisabledCommands(deleteRedisDisabledCommandsRequest?: DeleteRedisDisabledCommandsRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{project_id}/redis/instances/{instance_id}/disabled-commands",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (deleteRedisDisabledCommandsRequest !== null && deleteRedisDisabledCommandsRequest !== undefined) {
                if (deleteRedisDisabledCommandsRequest instanceof DeleteRedisDisabledCommandsRequest) {
                    instanceId = deleteRedisDisabledCommandsRequest.instanceId;
                    body = deleteRedisDisabledCommandsRequest.body
                } else {
                    instanceId = deleteRedisDisabledCommandsRequest['instance_id'];
                    body = deleteRedisDisabledCommandsRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling deleteRedisDisabledCommands.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 扩容指定集群实例的节点数量。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        expandInstanceNode(expandInstanceNodeRequest?: ExpandInstanceNodeRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/{instance_id}/enlarge-node",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (expandInstanceNodeRequest !== null && expandInstanceNodeRequest !== undefined) {
                if (expandInstanceNodeRequest instanceof ExpandInstanceNodeRequest) {
                    instanceId = expandInstanceNodeRequest.instanceId;
                    body = expandInstanceNodeRequest.body
                } else {
                    instanceId = expandInstanceNodeRequest['instance_id'];
                    body = expandInstanceNodeRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling expandInstanceNode.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询实例可变更规格。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAvailableFlavorInfos(listAvailableFlavorInfosRequest?: ListAvailableFlavorInfosRequest) {
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
            
            let offset;
            
            let limit;

            if (listAvailableFlavorInfosRequest !== null && listAvailableFlavorInfosRequest !== undefined) {
                if (listAvailableFlavorInfosRequest instanceof ListAvailableFlavorInfosRequest) {
                    instanceId = listAvailableFlavorInfosRequest.instanceId;
                    offset = listAvailableFlavorInfosRequest.offset;
                    limit = listAvailableFlavorInfosRequest.limit;
                } else {
                    instanceId = listAvailableFlavorInfosRequest['instance_id'];
                    offset = listAvailableFlavorInfosRequest['offset'];
                    limit = listAvailableFlavorInfosRequest['limit'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listAvailableFlavorInfos.');
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
         * 查询GeminiDB(for Cassandra)数据库慢日志信息，支持日志关键字搜索。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listCassandraSlowLogs(listCassandraSlowLogsRequest?: ListCassandraSlowLogsRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/cassandra/instances/{instance_id}/slow-logs",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (listCassandraSlowLogsRequest !== null && listCassandraSlowLogsRequest !== undefined) {
                if (listCassandraSlowLogsRequest instanceof ListCassandraSlowLogsRequest) {
                    instanceId = listCassandraSlowLogsRequest.instanceId;
                    body = listCassandraSlowLogsRequest.body
                } else {
                    instanceId = listCassandraSlowLogsRequest['instance_id'];
                    body = listCassandraSlowLogsRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listCassandraSlowLogs.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询支持参数模板的引擎信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listConfigurationDatastores() {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/configurations/datastores",
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
         * 获取参数模板列表，包括所有数据库的默认参数模板和用户创建的参数模板。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listConfigurationTemplates(listConfigurationTemplatesRequest?: ListConfigurationTemplatesRequest) {
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
            
            let offset;
            
            let limit;

            if (listConfigurationTemplatesRequest !== null && listConfigurationTemplatesRequest !== undefined) {
                if (listConfigurationTemplatesRequest instanceof ListConfigurationTemplatesRequest) {
                    offset = listConfigurationTemplatesRequest.offset;
                    limit = listConfigurationTemplatesRequest.limit;
                } else {
                    offset = listConfigurationTemplatesRequest['offset'];
                    limit = listConfigurationTemplatesRequest['limit'];
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
         * 获取参数模板列表，包括所有数据库的默认参数模板和用户创建的参数模板。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listConfigurations() {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/configurations",
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
         * 查询指定实例类型的数据库版本信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listDatastores(listDatastoresRequest?: ListDatastoresRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/datastores/{datastore_name}/versions",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let datastoreName;

            if (listDatastoresRequest !== null && listDatastoresRequest !== undefined) {
                if (listDatastoresRequest instanceof ListDatastoresRequest) {
                    datastoreName = listDatastoresRequest.datastoreName;
                } else {
                    datastoreName = listDatastoresRequest['datastore_name'];
                }
            }

        
            if (datastoreName === null || datastoreName === undefined) {
            throw new RequiredError('datastoreName','Required parameter datastoreName was null or undefined when calling listDatastores.');
            }

            options.pathParams = { 'datastore_name': datastoreName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据指定条件查询内存加速映射关系列表和详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listDbCacheMappings(listDbCacheMappingsRequest?: ListDbCacheMappingsRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/dbcache/mappings",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let id;
            
            let name;
            
            let sourceInstanceId;
            
            let sourceInstanceName;
            
            let targetInstanceId;
            
            let targetInstanceName;
            
            let offset;
            
            let limit;

            if (listDbCacheMappingsRequest !== null && listDbCacheMappingsRequest !== undefined) {
                if (listDbCacheMappingsRequest instanceof ListDbCacheMappingsRequest) {
                    id = listDbCacheMappingsRequest.id;
                    name = listDbCacheMappingsRequest.name;
                    sourceInstanceId = listDbCacheMappingsRequest.sourceInstanceId;
                    sourceInstanceName = listDbCacheMappingsRequest.sourceInstanceName;
                    targetInstanceId = listDbCacheMappingsRequest.targetInstanceId;
                    targetInstanceName = listDbCacheMappingsRequest.targetInstanceName;
                    offset = listDbCacheMappingsRequest.offset;
                    limit = listDbCacheMappingsRequest.limit;
                } else {
                    id = listDbCacheMappingsRequest['id'];
                    name = listDbCacheMappingsRequest['name'];
                    sourceInstanceId = listDbCacheMappingsRequest['source_instance_id'];
                    sourceInstanceName = listDbCacheMappingsRequest['source_instance_name'];
                    targetInstanceId = listDbCacheMappingsRequest['target_instance_id'];
                    targetInstanceName = listDbCacheMappingsRequest['target_instance_name'];
                    offset = listDbCacheMappingsRequest['offset'];
                    limit = listDbCacheMappingsRequest['limit'];
                }
            }

        
            if (id !== null && id !== undefined) {
                localVarQueryParameter['id'] = id;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (sourceInstanceId !== null && sourceInstanceId !== undefined) {
                localVarQueryParameter['source_instance_id'] = sourceInstanceId;
            }
            if (sourceInstanceName !== null && sourceInstanceName !== undefined) {
                localVarQueryParameter['source_instance_name'] = sourceInstanceName;
            }
            if (targetInstanceId !== null && targetInstanceId !== undefined) {
                localVarQueryParameter['target_instance_id'] = targetInstanceId;
            }
            if (targetInstanceName !== null && targetInstanceName !== undefined) {
                localVarQueryParameter['target_instance_name'] = targetInstanceName;
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
         * 查询内存加速规则列表和详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listDbCacheRules(listDbCacheRulesRequest?: ListDbCacheRulesRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/dbcache/rules",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let dbcacheMappingId;
            
            let ruleId;
            
            let ruleName;
            
            let sourceDbSchema;
            
            let sourceDbTable;
            
            let offset;
            
            let limit;

            if (listDbCacheRulesRequest !== null && listDbCacheRulesRequest !== undefined) {
                if (listDbCacheRulesRequest instanceof ListDbCacheRulesRequest) {
                    dbcacheMappingId = listDbCacheRulesRequest.dbcacheMappingId;
                    ruleId = listDbCacheRulesRequest.ruleId;
                    ruleName = listDbCacheRulesRequest.ruleName;
                    sourceDbSchema = listDbCacheRulesRequest.sourceDbSchema;
                    sourceDbTable = listDbCacheRulesRequest.sourceDbTable;
                    offset = listDbCacheRulesRequest.offset;
                    limit = listDbCacheRulesRequest.limit;
                } else {
                    dbcacheMappingId = listDbCacheRulesRequest['dbcache_mapping_id'];
                    ruleId = listDbCacheRulesRequest['rule_id'];
                    ruleName = listDbCacheRulesRequest['rule_name'];
                    sourceDbSchema = listDbCacheRulesRequest['source_db_schema'];
                    sourceDbTable = listDbCacheRulesRequest['source_db_table'];
                    offset = listDbCacheRulesRequest['offset'];
                    limit = listDbCacheRulesRequest['limit'];
                }
            }

        
            if (dbcacheMappingId === null || dbcacheMappingId === undefined) {
                throw new RequiredError('dbcacheMappingId','Required parameter dbcacheMappingId was null or undefined when calling listDbCacheRules.');
            }
            if (dbcacheMappingId !== null && dbcacheMappingId !== undefined) {
                localVarQueryParameter['dbcache_mapping_id'] = dbcacheMappingId;
            }
            if (ruleId !== null && ruleId !== undefined) {
                localVarQueryParameter['rule_id'] = ruleId;
            }
            if (ruleName !== null && ruleName !== undefined) {
                localVarQueryParameter['rule_name'] = ruleName;
            }
            if (sourceDbSchema !== null && sourceDbSchema !== undefined) {
                localVarQueryParameter['source_db_schema'] = sourceDbSchema;
            }
            if (sourceDbTable !== null && sourceDbTable !== undefined) {
                localVarQueryParameter['source_db_table'] = sourceDbTable;
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
         * 获取Redis数据库账号列表和详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listDbUsers(listDbUsersRequest?: ListDbUsersRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/redis/instances/{instance_id}/db-users",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let name;
            
            let offset;
            
            let limit;

            if (listDbUsersRequest !== null && listDbUsersRequest !== undefined) {
                if (listDbUsersRequest instanceof ListDbUsersRequest) {
                    instanceId = listDbUsersRequest.instanceId;
                    name = listDbUsersRequest.name;
                    offset = listDbUsersRequest.offset;
                    limit = listDbUsersRequest.limit;
                } else {
                    instanceId = listDbUsersRequest['instance_id'];
                    name = listDbUsersRequest['name'];
                    offset = listDbUsersRequest['offset'];
                    limit = listDbUsersRequest['limit'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listDbUsers.');
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
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
         * 查询专属资源列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listDedicatedResources(listDedicatedResourcesRequest?: ListDedicatedResourcesRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/dedicated-resources",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let offset;
            
            let limit;

            if (listDedicatedResourcesRequest !== null && listDedicatedResourcesRequest !== undefined) {
                if (listDedicatedResourcesRequest instanceof ListDedicatedResourcesRequest) {
                    offset = listDedicatedResourcesRequest.offset;
                    limit = listDedicatedResourcesRequest.limit;
                } else {
                    offset = listDedicatedResourcesRequest['offset'];
                    limit = listDedicatedResourcesRequest['limit'];
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
         * 查询企业项目配额。
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
            
            let enterpriseProjectName;
            
            let offset;
            
            let limit;

            if (listEpsQuotasRequest !== null && listEpsQuotasRequest !== undefined) {
                if (listEpsQuotasRequest instanceof ListEpsQuotasRequest) {
                    enterpriseProjectName = listEpsQuotasRequest.enterpriseProjectName;
                    offset = listEpsQuotasRequest.offset;
                    limit = listEpsQuotasRequest.limit;
                } else {
                    enterpriseProjectName = listEpsQuotasRequest['enterprise_project_name'];
                    offset = listEpsQuotasRequest['offset'];
                    limit = listEpsQuotasRequest['limit'];
                }
            }

        
            if (enterpriseProjectName !== null && enterpriseProjectName !== undefined) {
                localVarQueryParameter['enterprise_project_name'] = enterpriseProjectName;
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
         * 查询指定条件下的实例规格信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listFlavorInfos(listFlavorInfosRequest?: ListFlavorInfosRequest) {
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
            
            let engineName;
            
            let offset;
            
            let limit;

            if (listFlavorInfosRequest !== null && listFlavorInfosRequest !== undefined) {
                if (listFlavorInfosRequest instanceof ListFlavorInfosRequest) {
                    engineName = listFlavorInfosRequest.engineName;
                    offset = listFlavorInfosRequest.offset;
                    limit = listFlavorInfosRequest.limit;
                } else {
                    engineName = listFlavorInfosRequest['engine_name'];
                    offset = listFlavorInfosRequest['offset'];
                    limit = listFlavorInfosRequest['limit'];
                }
            }

        
            if (engineName !== null && engineName !== undefined) {
                localVarQueryParameter['engine_name'] = engineName;
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
         * 查询指定条件下的所有实例规格信息。
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
            
            let region;
            
            let engineName;

            if (listFlavorsRequest !== null && listFlavorsRequest !== undefined) {
                if (listFlavorsRequest instanceof ListFlavorsRequest) {
                    region = listFlavorsRequest.region;
                    engineName = listFlavorsRequest.engineName;
                } else {
                    region = listFlavorsRequest['region'];
                    engineName = listFlavorsRequest['engine_name'];
                }
            }

        
            if (region !== null && region !== undefined) {
                localVarQueryParameter['region'] = region;
            }
            if (engineName !== null && engineName !== undefined) {
                localVarQueryParameter['engine_name'] = engineName;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询GeminiDB(for influxdb)数据库慢日志信息，支持日志关键字搜索。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listInfluxdbSlowLogs(listInfluxdbSlowLogsRequest?: ListInfluxdbSlowLogsRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/influxdb/instances/{instance_id}/slow-logs",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (listInfluxdbSlowLogsRequest !== null && listInfluxdbSlowLogsRequest !== undefined) {
                if (listInfluxdbSlowLogsRequest instanceof ListInfluxdbSlowLogsRequest) {
                    instanceId = listInfluxdbSlowLogsRequest.instanceId;
                    body = listInfluxdbSlowLogsRequest.body
                } else {
                    instanceId = listInfluxdbSlowLogsRequest['instance_id'];
                    body = listInfluxdbSlowLogsRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listInfluxdbSlowLogs.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取Redis实例数据库列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listInstanceDatabases(listInstanceDatabasesRequest?: ListInstanceDatabasesRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/redis/instances/{instance_id}/databases",
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

            if (listInstanceDatabasesRequest !== null && listInstanceDatabasesRequest !== undefined) {
                if (listInstanceDatabasesRequest instanceof ListInstanceDatabasesRequest) {
                    instanceId = listInstanceDatabasesRequest.instanceId;
                    offset = listInstanceDatabasesRequest.offset;
                    limit = listInstanceDatabasesRequest.limit;
                } else {
                    instanceId = listInstanceDatabasesRequest['instance_id'];
                    offset = listInstanceDatabasesRequest['offset'];
                    limit = listInstanceDatabasesRequest['limit'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listInstanceDatabases.');
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
         * 查询实例可维护时间段。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listInstanceMaintenanceWindow(listInstanceMaintenanceWindowRequest?: ListInstanceMaintenanceWindowRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/{instance_id}/ops-window",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;

            if (listInstanceMaintenanceWindowRequest !== null && listInstanceMaintenanceWindowRequest !== undefined) {
                if (listInstanceMaintenanceWindowRequest instanceof ListInstanceMaintenanceWindowRequest) {
                    instanceId = listInstanceMaintenanceWindowRequest.instanceId;
                } else {
                    instanceId = listInstanceMaintenanceWindowRequest['instance_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listInstanceMaintenanceWindow.');
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取实例的会话。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listInstanceSessions(listInstanceSessionsRequest?: ListInstanceSessionsRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/{instance_id}/sessions",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let nodeId;

            if (listInstanceSessionsRequest !== null && listInstanceSessionsRequest !== undefined) {
                if (listInstanceSessionsRequest instanceof ListInstanceSessionsRequest) {
                    instanceId = listInstanceSessionsRequest.instanceId;
                    nodeId = listInstanceSessionsRequest.nodeId;
                } else {
                    instanceId = listInstanceSessionsRequest['instance_id'];
                    nodeId = listInstanceSessionsRequest['node_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listInstanceSessions.');
            }
            if (nodeId !== null && nodeId !== undefined) {
                localVarQueryParameter['node_id'] = nodeId;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询指定实例的标签信息。
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

            if (listInstanceTagsRequest !== null && listInstanceTagsRequest !== undefined) {
                if (listInstanceTagsRequest instanceof ListInstanceTagsRequest) {
                    instanceId = listInstanceTagsRequest.instanceId;
                } else {
                    instanceId = listInstanceTagsRequest['instance_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listInstanceTags.');
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据指定条件查询数据库实例列表和详情。
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
            
            let id;
            
            let name;
            
            let mode;
            
            let datastoreType;
            
            let vpcId;
            
            let subnetId;
            
            let offset;
            
            let limit;

            if (listInstancesRequest !== null && listInstancesRequest !== undefined) {
                if (listInstancesRequest instanceof ListInstancesRequest) {
                    id = listInstancesRequest.id;
                    name = listInstancesRequest.name;
                    mode = listInstancesRequest.mode;
                    datastoreType = listInstancesRequest.datastoreType;
                    vpcId = listInstancesRequest.vpcId;
                    subnetId = listInstancesRequest.subnetId;
                    offset = listInstancesRequest.offset;
                    limit = listInstancesRequest.limit;
                } else {
                    id = listInstancesRequest['id'];
                    name = listInstancesRequest['name'];
                    mode = listInstancesRequest['mode'];
                    datastoreType = listInstancesRequest['datastore_type'];
                    vpcId = listInstancesRequest['vpc_id'];
                    subnetId = listInstancesRequest['subnet_id'];
                    offset = listInstancesRequest['offset'];
                    limit = listInstancesRequest['limit'];
                }
            }

        
            if (id !== null && id !== undefined) {
                localVarQueryParameter['id'] = id;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (mode !== null && mode !== undefined) {
                localVarQueryParameter['mode'] = mode;
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

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据标签查询指定的数据库实例。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listInstancesByResourceTags(listInstancesByResourceTagsRequest?: ListInstancesByResourceTagsRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/resource-instances/action",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (listInstancesByResourceTagsRequest !== null && listInstancesByResourceTagsRequest !== undefined) {
                if (listInstancesByResourceTagsRequest instanceof ListInstancesByResourceTagsRequest) {
                    body = listInstancesByResourceTagsRequest.body
                } else {
                    body = listInstancesByResourceTagsRequest['body'];
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
         * 根据标签查询指定的数据库实例。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listInstancesByTags(listInstancesByTagsRequest?: ListInstancesByTagsRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/resource_instances/action",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (listInstancesByTagsRequest !== null && listInstancesByTagsRequest !== undefined) {
                if (listInstancesByTagsRequest instanceof ListInstancesByTagsRequest) {
                    body = listInstancesByTagsRequest.body
                } else {
                    body = listInstancesByTagsRequest['body'];
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
         * 获取节点会话列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listInstancesSession(listInstancesSessionRequest?: ListInstancesSessionRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/redis/nodes/{node_id}/sessions",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let nodeId;
            
            let offset;
            
            let limit;
            
            let addrPrefix;

            if (listInstancesSessionRequest !== null && listInstancesSessionRequest !== undefined) {
                if (listInstancesSessionRequest instanceof ListInstancesSessionRequest) {
                    nodeId = listInstancesSessionRequest.nodeId;
                    offset = listInstancesSessionRequest.offset;
                    limit = listInstancesSessionRequest.limit;
                    addrPrefix = listInstancesSessionRequest.addrPrefix;
                } else {
                    nodeId = listInstancesSessionRequest['node_id'];
                    offset = listInstancesSessionRequest['offset'];
                    limit = listInstancesSessionRequest['limit'];
                    addrPrefix = listInstancesSessionRequest['addr_prefix'];
                }
            }

        
            if (nodeId === null || nodeId === undefined) {
            throw new RequiredError('nodeId','Required parameter nodeId was null or undefined when calling listInstancesSession.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (addrPrefix !== null && addrPrefix !== undefined) {
                localVarQueryParameter['addr_prefix'] = addrPrefix;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'node_id': nodeId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询实例节点会话统计信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listInstancesSessionStatistics(listInstancesSessionStatisticsRequest?: ListInstancesSessionStatisticsRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/redis/nodes/{node_id}/session-statistics",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let nodeId;

            if (listInstancesSessionStatisticsRequest !== null && listInstancesSessionStatisticsRequest !== undefined) {
                if (listInstancesSessionStatisticsRequest instanceof ListInstancesSessionStatisticsRequest) {
                    nodeId = listInstancesSessionStatisticsRequest.nodeId;
                } else {
                    nodeId = listInstancesSessionStatisticsRequest['node_id'];
                }
            }

        
            if (nodeId === null || nodeId === undefined) {
            throw new RequiredError('nodeId','Required parameter nodeId was null or undefined when calling listInstancesSessionStatistics.');
            }

            options.pathParams = { 'node_id': nodeId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询任务列表和详情，默认查询任务列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listJobs(listJobsRequest?: ListJobsRequest) {
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
            
            let startTime;
            
            let endTime;
            
            let status;
            
            let name;
            
            let offset;
            
            let limit;

            if (listJobsRequest !== null && listJobsRequest !== undefined) {
                if (listJobsRequest instanceof ListJobsRequest) {
                    id = listJobsRequest.id;
                    startTime = listJobsRequest.startTime;
                    endTime = listJobsRequest.endTime;
                    status = listJobsRequest.status;
                    name = listJobsRequest.name;
                    offset = listJobsRequest.offset;
                    limit = listJobsRequest.limit;
                } else {
                    id = listJobsRequest['id'];
                    startTime = listJobsRequest['start_time'];
                    endTime = listJobsRequest['end_time'];
                    status = listJobsRequest['status'];
                    name = listJobsRequest['name'];
                    offset = listJobsRequest['offset'];
                    limit = listJobsRequest['limit'];
                }
            }

        
            if (id !== null && id !== undefined) {
                localVarQueryParameter['id'] = id;
            }
            if (startTime !== null && startTime !== undefined) {
                localVarQueryParameter['start_time'] = startTime;
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
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
         * 分页查询实例关联的LTS日志配置信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listLtsConfigs(listLtsConfigsRequest?: ListLtsConfigsRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/logs/lts-configs",
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
            
            let instanceId;
            
            let instanceName;
            
            let enterpriseProjectId;

            if (listLtsConfigsRequest !== null && listLtsConfigsRequest !== undefined) {
                if (listLtsConfigsRequest instanceof ListLtsConfigsRequest) {
                    xLanguage = listLtsConfigsRequest.xLanguage;
                    offset = listLtsConfigsRequest.offset;
                    limit = listLtsConfigsRequest.limit;
                    instanceId = listLtsConfigsRequest.instanceId;
                    instanceName = listLtsConfigsRequest.instanceName;
                    enterpriseProjectId = listLtsConfigsRequest.enterpriseProjectId;
                } else {
                    xLanguage = listLtsConfigsRequest['X-Language'];
                    offset = listLtsConfigsRequest['offset'];
                    limit = listLtsConfigsRequest['limit'];
                    instanceId = listLtsConfigsRequest['instance_id'];
                    instanceName = listLtsConfigsRequest['instance_name'];
                    enterpriseProjectId = listLtsConfigsRequest['enterprise_project_id'];
                }
            }

        
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (instanceId !== null && instanceId !== undefined) {
                localVarQueryParameter['instance_id'] = instanceId;
            }
            if (instanceName !== null && instanceName !== undefined) {
                localVarQueryParameter['instance_name'] = instanceName;
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
         * 查询GeminiDB(for Mongo)数据库错误日志信息，支持日志关键字搜索。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listMongodbErrorLogs(listMongodbErrorLogsRequest?: ListMongodbErrorLogsRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/mongodb/instances/{instance_id}/error-logs",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (listMongodbErrorLogsRequest !== null && listMongodbErrorLogsRequest !== undefined) {
                if (listMongodbErrorLogsRequest instanceof ListMongodbErrorLogsRequest) {
                    instanceId = listMongodbErrorLogsRequest.instanceId;
                    body = listMongodbErrorLogsRequest.body
                } else {
                    instanceId = listMongodbErrorLogsRequest['instance_id'];
                    body = listMongodbErrorLogsRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listMongodbErrorLogs.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询GeminiDB(for Mongo)数据库慢日志信息，支持日志关键字搜索。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listMongodbSlowLogs(listMongodbSlowLogsRequest?: ListMongodbSlowLogsRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/mongodb/instances/{instance_id}/slow-logs",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (listMongodbSlowLogsRequest !== null && listMongodbSlowLogsRequest !== undefined) {
                if (listMongodbSlowLogsRequest instanceof ListMongodbSlowLogsRequest) {
                    instanceId = listMongodbSlowLogsRequest.instanceId;
                    body = listMongodbSlowLogsRequest.body
                } else {
                    instanceId = listMongodbSlowLogsRequest['instance_id'];
                    body = listMongodbSlowLogsRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listMongodbSlowLogs.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据指定条件查询定时任务列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listNosqlTaskList(listNosqlTaskListRequest?: ListNosqlTaskListRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/scheduled-jobs",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let jobName;
            
            let jobStatus;
            
            let instanceId;
            
            let startTime;
            
            let endTime;
            
            let offset;
            
            let limit;

            if (listNosqlTaskListRequest !== null && listNosqlTaskListRequest !== undefined) {
                if (listNosqlTaskListRequest instanceof ListNosqlTaskListRequest) {
                    jobName = listNosqlTaskListRequest.jobName;
                    jobStatus = listNosqlTaskListRequest.jobStatus;
                    instanceId = listNosqlTaskListRequest.instanceId;
                    startTime = listNosqlTaskListRequest.startTime;
                    endTime = listNosqlTaskListRequest.endTime;
                    offset = listNosqlTaskListRequest.offset;
                    limit = listNosqlTaskListRequest.limit;
                } else {
                    jobName = listNosqlTaskListRequest['job_name'];
                    jobStatus = listNosqlTaskListRequest['job_status'];
                    instanceId = listNosqlTaskListRequest['instance_id'];
                    startTime = listNosqlTaskListRequest['start_time'];
                    endTime = listNosqlTaskListRequest['end_time'];
                    offset = listNosqlTaskListRequest['offset'];
                    limit = listNosqlTaskListRequest['limit'];
                }
            }

        
            if (jobName !== null && jobName !== undefined) {
                localVarQueryParameter['job_name'] = jobName;
            }
            if (jobStatus !== null && jobStatus !== undefined) {
                localVarQueryParameter['job_status'] = jobStatus;
            }
            if (instanceId !== null && instanceId !== undefined) {
                localVarQueryParameter['instance_id'] = instanceId;
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
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询指定项目的标签信息。
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
            const localVarQueryParameter = {} as any;
            
            let offset;
            
            let limit;

            if (listProjectTagsRequest !== null && listProjectTagsRequest !== undefined) {
                if (listProjectTagsRequest instanceof ListProjectTagsRequest) {
                    offset = listProjectTagsRequest.offset;
                    limit = listProjectTagsRequest.limit;
                } else {
                    offset = listProjectTagsRequest['offset'];
                    limit = listProjectTagsRequest['limit'];
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
         * 查询回收站所有引擎的实例列表。
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
            
            let offset;
            
            let limit;

            if (listRecycleInstancesRequest !== null && listRecycleInstancesRequest !== undefined) {
                if (listRecycleInstancesRequest instanceof ListRecycleInstancesRequest) {
                    xLanguage = listRecycleInstancesRequest.xLanguage;
                    offset = listRecycleInstancesRequest.offset;
                    limit = listRecycleInstancesRequest.limit;
                } else {
                    xLanguage = listRecycleInstancesRequest['X-Language'];
                    offset = listRecycleInstancesRequest['offset'];
                    limit = listRecycleInstancesRequest['limit'];
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
         * 查询Redis可恢复时间点。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listRedisPitrRestoreTime(listRedisPitrRestoreTimeRequest?: ListRedisPitrRestoreTimeRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/redis/instances/{instance_id}/pitr/restorable-time-periods",
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
            
            let offset;
            
            let limit;

            if (listRedisPitrRestoreTimeRequest !== null && listRedisPitrRestoreTimeRequest !== undefined) {
                if (listRedisPitrRestoreTimeRequest instanceof ListRedisPitrRestoreTimeRequest) {
                    instanceId = listRedisPitrRestoreTimeRequest.instanceId;
                    startTime = listRedisPitrRestoreTimeRequest.startTime;
                    endTime = listRedisPitrRestoreTimeRequest.endTime;
                    offset = listRedisPitrRestoreTimeRequest.offset;
                    limit = listRedisPitrRestoreTimeRequest.limit;
                } else {
                    instanceId = listRedisPitrRestoreTimeRequest['instance_id'];
                    startTime = listRedisPitrRestoreTimeRequest['start_time'];
                    endTime = listRedisPitrRestoreTimeRequest['end_time'];
                    offset = listRedisPitrRestoreTimeRequest['offset'];
                    limit = listRedisPitrRestoreTimeRequest['limit'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listRedisPitrRestoreTime.');
            }
            if (startTime === null || startTime === undefined) {
                throw new RequiredError('startTime','Required parameter startTime was null or undefined when calling listRedisPitrRestoreTime.');
            }
            if (startTime !== null && startTime !== undefined) {
                localVarQueryParameter['start_time'] = startTime;
            }
            if (endTime === null || endTime === undefined) {
                throw new RequiredError('endTime','Required parameter endTime was null or undefined when calling listRedisPitrRestoreTime.');
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
         * 查询GeminiDB(for Redis)数据库慢日志信息，支持日志关键字搜索。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listRedisSlowLogs(listRedisSlowLogsRequest?: ListRedisSlowLogsRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/redis/instances/{instance_id}/slow-logs",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (listRedisSlowLogsRequest !== null && listRedisSlowLogsRequest !== undefined) {
                if (listRedisSlowLogsRequest instanceof ListRedisSlowLogsRequest) {
                    instanceId = listRedisSlowLogsRequest.instanceId;
                    body = listRedisSlowLogsRequest.body
                } else {
                    instanceId = listRedisSlowLogsRequest['instance_id'];
                    body = listRedisSlowLogsRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listRedisSlowLogs.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取GeminiDB(for Cassandra)实例表级恢复的数据库信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listRestoreDatabases(listRestoreDatabasesRequest?: ListRestoreDatabasesRequest) {
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
            
            let offset;
            
            let limit;

            if (listRestoreDatabasesRequest !== null && listRestoreDatabasesRequest !== undefined) {
                if (listRestoreDatabasesRequest instanceof ListRestoreDatabasesRequest) {
                    instanceId = listRestoreDatabasesRequest.instanceId;
                    offset = listRestoreDatabasesRequest.offset;
                    limit = listRestoreDatabasesRequest.limit;
                } else {
                    instanceId = listRestoreDatabasesRequest['instance_id'];
                    offset = listRestoreDatabasesRequest['offset'];
                    limit = listRestoreDatabasesRequest['limit'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listRestoreDatabases.');
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
         * 获取GeminiDB(for Cassandra)实例表级恢复的表信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listRestoreTables(listRestoreTablesRequest?: ListRestoreTablesRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/{instance_id}/tables",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let databaseName;
            
            let offset;
            
            let limit;

            if (listRestoreTablesRequest !== null && listRestoreTablesRequest !== undefined) {
                if (listRestoreTablesRequest instanceof ListRestoreTablesRequest) {
                    instanceId = listRestoreTablesRequest.instanceId;
                    databaseName = listRestoreTablesRequest.databaseName;
                    offset = listRestoreTablesRequest.offset;
                    limit = listRestoreTablesRequest.limit;
                } else {
                    instanceId = listRestoreTablesRequest['instance_id'];
                    databaseName = listRestoreTablesRequest['database_name'];
                    offset = listRestoreTablesRequest['offset'];
                    limit = listRestoreTablesRequest['limit'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listRestoreTables.');
            }
            if (databaseName === null || databaseName === undefined) {
                throw new RequiredError('databaseName','Required parameter databaseName was null or undefined when calling listRestoreTables.');
            }
            if (databaseName !== null && databaseName !== undefined) {
                localVarQueryParameter['database_name'] = databaseName;
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
         * 查询实例可恢复的时间段
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listRestoreTime(listRestoreTimeRequest?: ListRestoreTimeRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/{instance_id}/backups/restorable-time-periods",
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
            
            let offset;
            
            let limit;

            if (listRestoreTimeRequest !== null && listRestoreTimeRequest !== undefined) {
                if (listRestoreTimeRequest instanceof ListRestoreTimeRequest) {
                    instanceId = listRestoreTimeRequest.instanceId;
                    startTime = listRestoreTimeRequest.startTime;
                    endTime = listRestoreTimeRequest.endTime;
                    offset = listRestoreTimeRequest.offset;
                    limit = listRestoreTimeRequest.limit;
                } else {
                    instanceId = listRestoreTimeRequest['instance_id'];
                    startTime = listRestoreTimeRequest['start_time'];
                    endTime = listRestoreTimeRequest['end_time'];
                    offset = listRestoreTimeRequest['offset'];
                    limit = listRestoreTimeRequest['limit'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listRestoreTime.');
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
         * 查询数据库慢日志信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listSlowLogs(listSlowLogsRequest?: ListSlowLogsRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/{instance_id}/slowlog",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let startDate;
            
            let endDate;
            
            let nodeId;
            
            let type;
            
            let offset;
            
            let limit;

            if (listSlowLogsRequest !== null && listSlowLogsRequest !== undefined) {
                if (listSlowLogsRequest instanceof ListSlowLogsRequest) {
                    instanceId = listSlowLogsRequest.instanceId;
                    startDate = listSlowLogsRequest.startDate;
                    endDate = listSlowLogsRequest.endDate;
                    nodeId = listSlowLogsRequest.nodeId;
                    type = listSlowLogsRequest.type;
                    offset = listSlowLogsRequest.offset;
                    limit = listSlowLogsRequest.limit;
                } else {
                    instanceId = listSlowLogsRequest['instance_id'];
                    startDate = listSlowLogsRequest['start_date'];
                    endDate = listSlowLogsRequest['end_date'];
                    nodeId = listSlowLogsRequest['node_id'];
                    type = listSlowLogsRequest['type'];
                    offset = listSlowLogsRequest['offset'];
                    limit = listSlowLogsRequest['limit'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listSlowLogs.');
            }
            if (startDate === null || startDate === undefined) {
                throw new RequiredError('startDate','Required parameter startDate was null or undefined when calling listSlowLogs.');
            }
            if (startDate !== null && startDate !== undefined) {
                localVarQueryParameter['start_date'] = startDate;
            }
            if (endDate === null || endDate === undefined) {
                throw new RequiredError('endDate','Required parameter endDate was null or undefined when calling listSlowLogs.');
            }
            if (endDate !== null && endDate !== undefined) {
                localVarQueryParameter['end_date'] = endDate;
            }
            if (nodeId !== null && nodeId !== undefined) {
                localVarQueryParameter['node_id'] = nodeId;
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
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
         * 修改Redis数据库帐号权限。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        modifyDbUserPrivilege(modifyDbUserPrivilegeRequest?: ModifyDbUserPrivilegeRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/redis/instances/{instance_id}/db-users/privilege",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (modifyDbUserPrivilegeRequest !== null && modifyDbUserPrivilegeRequest !== undefined) {
                if (modifyDbUserPrivilegeRequest instanceof ModifyDbUserPrivilegeRequest) {
                    instanceId = modifyDbUserPrivilegeRequest.instanceId;
                    body = modifyDbUserPrivilegeRequest.body
                } else {
                    instanceId = modifyDbUserPrivilegeRequest['instance_id'];
                    body = modifyDbUserPrivilegeRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling modifyDbUserPrivilege.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改企业项目配额。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        modifyEpsQuotas(modifyEpsQuotasRequest?: ModifyEpsQuotasRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/enterprise-projects/quotas",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (modifyEpsQuotasRequest !== null && modifyEpsQuotasRequest !== undefined) {
                if (modifyEpsQuotasRequest instanceof ModifyEpsQuotasRequest) {
                    body = modifyEpsQuotasRequest.body
                } else {
                    body = modifyEpsQuotasRequest['body'];
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
         * 设置指定实例可维护时间段。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        modifyInstanceMaintenanceWindow(modifyInstanceMaintenanceWindowRequest?: ModifyInstanceMaintenanceWindowRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/instances/{instance_id}/maintenance-window",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (modifyInstanceMaintenanceWindowRequest !== null && modifyInstanceMaintenanceWindowRequest !== undefined) {
                if (modifyInstanceMaintenanceWindowRequest instanceof ModifyInstanceMaintenanceWindowRequest) {
                    instanceId = modifyInstanceMaintenanceWindowRequest.instanceId;
                    body = modifyInstanceMaintenanceWindowRequest.body
                } else {
                    instanceId = modifyInstanceMaintenanceWindowRequest['instance_id'];
                    body = modifyInstanceMaintenanceWindowRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling modifyInstanceMaintenanceWindow.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改数据库实例的端口。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        modifyPort(modifyPortRequest?: ModifyPortRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/instances/{instance_id}/port",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (modifyPortRequest !== null && modifyPortRequest !== undefined) {
                if (modifyPortRequest instanceof ModifyPortRequest) {
                    instanceId = modifyPortRequest.instanceId;
                    body = modifyPortRequest.body
                } else {
                    instanceId = modifyPortRequest['instance_id'];
                    body = modifyPortRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling modifyPort.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

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
        modifyPublicIp(modifyPublicIpRequest?: ModifyPublicIpRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/{instance_id}/nodes/{node_id}/public-ip",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let nodeId;

            if (modifyPublicIpRequest !== null && modifyPublicIpRequest !== undefined) {
                if (modifyPublicIpRequest instanceof ModifyPublicIpRequest) {
                    instanceId = modifyPublicIpRequest.instanceId;
                    nodeId = modifyPublicIpRequest.nodeId;
                    body = modifyPublicIpRequest.body
                } else {
                    instanceId = modifyPublicIpRequest['instance_id'];
                    nodeId = modifyPublicIpRequest['node_id'];
                    body = modifyPublicIpRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling modifyPublicIp.');
            }
            if (nodeId === null || nodeId === undefined) {
            throw new RequiredError('nodeId','Required parameter nodeId was null or undefined when calling modifyPublicIp.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId,'node_id': nodeId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 变更实例的存储容量大小
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        modifyVolume(modifyVolumeRequest?: ModifyVolumeRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/instances/{instance_id}/volume",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (modifyVolumeRequest !== null && modifyVolumeRequest !== undefined) {
                if (modifyVolumeRequest instanceof ModifyVolumeRequest) {
                    instanceId = modifyVolumeRequest.instanceId;
                    body = modifyVolumeRequest.body
                } else {
                    instanceId = modifyVolumeRequest['instance_id'];
                    body = modifyVolumeRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling modifyVolume.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 当底层故障导致节点无法正常工作时，可以对该节点执行关机操作，关机后会由其他节点接管业务。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        offlineNodes(offlineNodesRequest?: OfflineNodesRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/instances/{instance_id}/nodes",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (offlineNodesRequest !== null && offlineNodesRequest !== undefined) {
                if (offlineNodesRequest instanceof OfflineNodesRequest) {
                    instanceId = offlineNodesRequest.instanceId;
                    body = offlineNodesRequest.body
                } else {
                    instanceId = offlineNodesRequest['instance_id'];
                    body = offlineNodesRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling offlineNodes.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于暂停/恢复具备容灾关系的实例数据同步。
         * 
         * 该接口需要对具备容灾关系的两个实例分别各调用一次，2次接口都调用成功才能成功暂停/恢复容灾实例数据同步。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        pauseResumeDataSynchronization(pauseResumeDataSynchronizationRequest?: PauseResumeDataSynchronizationRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/{instance_id}/disaster-recovery/data-synchronization",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (pauseResumeDataSynchronizationRequest !== null && pauseResumeDataSynchronizationRequest !== undefined) {
                if (pauseResumeDataSynchronizationRequest instanceof PauseResumeDataSynchronizationRequest) {
                    instanceId = pauseResumeDataSynchronizationRequest.instanceId;
                    body = pauseResumeDataSynchronizationRequest.body
                } else {
                    instanceId = pauseResumeDataSynchronizationRequest['instance_id'];
                    body = pauseResumeDataSynchronizationRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling pauseResumeDataSynchronization.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 重置Redis数据库账号密码。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        resetDbUserPassword(resetDbUserPasswordRequest?: ResetDbUserPasswordRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/redis/instances/{instance_id}/db-users/password",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (resetDbUserPasswordRequest !== null && resetDbUserPasswordRequest !== undefined) {
                if (resetDbUserPasswordRequest instanceof ResetDbUserPasswordRequest) {
                    instanceId = resetDbUserPasswordRequest.instanceId;
                    body = resetDbUserPasswordRequest.body
                } else {
                    instanceId = resetDbUserPasswordRequest['instance_id'];
                    body = resetDbUserPasswordRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling resetDbUserPassword.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 重置自定义参数模板
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        resetParamGroupTemplate(resetParamGroupTemplateRequest?: ResetParamGroupTemplateRequest) {
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

            if (resetParamGroupTemplateRequest !== null && resetParamGroupTemplateRequest !== undefined) {
                if (resetParamGroupTemplateRequest instanceof ResetParamGroupTemplateRequest) {
                    configId = resetParamGroupTemplateRequest.configId;
                } else {
                    configId = resetParamGroupTemplateRequest['config_id'];
                }
            }

        
            if (configId === null || configId === undefined) {
            throw new RequiredError('configId','Required parameter configId was null or undefined when calling resetParamGroupTemplate.');
            }

            options.pathParams = { 'config_id': configId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改实例的管理员密码。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        resetPassword(resetPasswordRequest?: ResetPasswordRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/instances/{instance_id}/password",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (resetPasswordRequest !== null && resetPasswordRequest !== undefined) {
                if (resetPasswordRequest instanceof ResetPasswordRequest) {
                    instanceId = resetPasswordRequest.instanceId;
                    body = resetPasswordRequest.body
                } else {
                    instanceId = resetPasswordRequest['instance_id'];
                    body = resetPasswordRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling resetPassword.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 扩容冷数据存储。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        resizeColdVolume(resizeColdVolumeRequest?: ResizeColdVolumeRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/instances/{instance_id}/cold-volume",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (resizeColdVolumeRequest !== null && resizeColdVolumeRequest !== undefined) {
                if (resizeColdVolumeRequest instanceof ResizeColdVolumeRequest) {
                    instanceId = resizeColdVolumeRequest.instanceId;
                    body = resizeColdVolumeRequest.body
                } else {
                    instanceId = resizeColdVolumeRequest['instance_id'];
                    body = resizeColdVolumeRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling resizeColdVolume.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 变更实例的规格。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        resizeInstance(resizeInstanceRequest?: ResizeInstanceRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/instances/{instance_id}/resize",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (resizeInstanceRequest !== null && resizeInstanceRequest !== undefined) {
                if (resizeInstanceRequest instanceof ResizeInstanceRequest) {
                    instanceId = resizeInstanceRequest.instanceId;
                    body = resizeInstanceRequest.body
                } else {
                    instanceId = resizeInstanceRequest['instance_id'];
                    body = resizeInstanceRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling resizeInstance.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 扩容实例的存储容量大小。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        resizeInstanceVolume(resizeInstanceVolumeRequest?: ResizeInstanceVolumeRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/{instance_id}/extend-volume",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (resizeInstanceVolumeRequest !== null && resizeInstanceVolumeRequest !== undefined) {
                if (resizeInstanceVolumeRequest instanceof ResizeInstanceVolumeRequest) {
                    instanceId = resizeInstanceVolumeRequest.instanceId;
                    body = resizeInstanceVolumeRequest.body
                } else {
                    instanceId = resizeInstanceVolumeRequest['instance_id'];
                    body = resizeInstanceVolumeRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling resizeInstanceVolume.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 重启实例的数据库服务。
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

            if (restartInstanceRequest !== null && restartInstanceRequest !== undefined) {
                if (restartInstanceRequest instanceof RestartInstanceRequest) {
                    instanceId = restartInstanceRequest.instanceId;
                } else {
                    instanceId = restartInstanceRequest['instance_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling restartInstance.');
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 恢复到已有实例
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        restoreExistingInstance(restoreExistingInstanceRequest?: RestoreExistingInstanceRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/{instance_id}/recovery",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (restoreExistingInstanceRequest !== null && restoreExistingInstanceRequest !== undefined) {
                if (restoreExistingInstanceRequest instanceof RestoreExistingInstanceRequest) {
                    instanceId = restoreExistingInstanceRequest.instanceId;
                    body = restoreExistingInstanceRequest.body
                } else {
                    instanceId = restoreExistingInstanceRequest['instance_id'];
                    body = restoreExistingInstanceRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling restoreExistingInstance.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 恢复当前Redis实例到指定时间点。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        restoreRedisPitr(restoreRedisPitrRequest?: RestoreRedisPitrRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/redis/instances/{instance_id}/pitr",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (restoreRedisPitrRequest !== null && restoreRedisPitrRequest !== undefined) {
                if (restoreRedisPitrRequest instanceof RestoreRedisPitrRequest) {
                    instanceId = restoreRedisPitrRequest.instanceId;
                    body = restoreRedisPitrRequest.body
                } else {
                    instanceId = restoreRedisPitrRequest['instance_id'];
                    body = restoreRedisPitrRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling restoreRedisPitr.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * - 将实例日志与LTS日志流关联，后台将自动上传实例日志到关联的LTS日志流里。
         * - 关联成功后，会产生一定费用，具体计费可参考云日志服务（LTS）的定价详情。
         * - 系统会为当前选择的日志流创建对应日志类型的结构化配置，若该日志流已存在其他日志类型的结构化配置，系统会进行覆盖。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        saveLtsConfigs(saveLtsConfigsRequest?: SaveLtsConfigsRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/logs/lts-configs",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xLanguage;

            if (saveLtsConfigsRequest !== null && saveLtsConfigsRequest !== undefined) {
                if (saveLtsConfigsRequest instanceof SaveLtsConfigsRequest) {
                    body = saveLtsConfigsRequest.body
                    xLanguage = saveLtsConfigsRequest.xLanguage;
                } else {
                    body = saveLtsConfigsRequest['body'];
                    xLanguage = saveLtsConfigsRequest['X-Language'];
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
         * 设置Redis禁用命令。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        saveRedisDisabledCommands(saveRedisDisabledCommandsRequest?: SaveRedisDisabledCommandsRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/redis/instances/{instance_id}/disabled-commands",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (saveRedisDisabledCommandsRequest !== null && saveRedisDisabledCommandsRequest !== undefined) {
                if (saveRedisDisabledCommandsRequest instanceof SaveRedisDisabledCommandsRequest) {
                    instanceId = saveRedisDisabledCommandsRequest.instanceId;
                    body = saveRedisDisabledCommandsRequest.body
                } else {
                    instanceId = saveRedisDisabledCommandsRequest['instance_id'];
                    body = saveRedisDisabledCommandsRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling saveRedisDisabledCommands.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 设置磁盘自动扩容策略。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        setAutoEnlargePolicy(setAutoEnlargePolicyRequest?: SetAutoEnlargePolicyRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/instances/disk-auto-expansion",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (setAutoEnlargePolicyRequest !== null && setAutoEnlargePolicyRequest !== undefined) {
                if (setAutoEnlargePolicyRequest instanceof SetAutoEnlargePolicyRequest) {
                    body = setAutoEnlargePolicyRequest.body
                } else {
                    body = setAutoEnlargePolicyRequest['body'];
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
         * 设置自动备份策略。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        setBackupPolicy(setBackupPolicyRequest?: SetBackupPolicyRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/instances/{instance_id}/backups/policy",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (setBackupPolicyRequest !== null && setBackupPolicyRequest !== undefined) {
                if (setBackupPolicyRequest instanceof SetBackupPolicyRequest) {
                    instanceId = setBackupPolicyRequest.instanceId;
                    body = setBackupPolicyRequest.body
                } else {
                    instanceId = setBackupPolicyRequest['instance_id'];
                    body = setBackupPolicyRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling setBackupPolicy.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 设置实例容灾切换的故障节点比例。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        setDisasterRecoverySettings(setDisasterRecoverySettingsRequest?: SetDisasterRecoverySettingsRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/instances/disaster-recovery/settings",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (setDisasterRecoverySettingsRequest !== null && setDisasterRecoverySettingsRequest !== undefined) {
                if (setDisasterRecoverySettingsRequest instanceof SetDisasterRecoverySettingsRequest) {
                    body = setDisasterRecoverySettingsRequest.body
                } else {
                    body = setDisasterRecoverySettingsRequest['body'];
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
         * 开启/关闭实例数据导出。
         * 当前支持将InfluxDB数据转为parquet格式文件然后上传到指定的OBS桶中。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        setInstanceDataDump(setInstanceDataDumpRequest?: SetInstanceDataDumpRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/instances/{instance_id}/data-dump",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (setInstanceDataDumpRequest !== null && setInstanceDataDumpRequest !== undefined) {
                if (setInstanceDataDumpRequest instanceof SetInstanceDataDumpRequest) {
                    instanceId = setInstanceDataDumpRequest.instanceId;
                    body = setInstanceDataDumpRequest.body
                } else {
                    instanceId = setInstanceDataDumpRequest['instance_id'];
                    body = setInstanceDataDumpRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling setInstanceDataDump.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 设置已删除实例保留天数，修改保留天数后删除的实例按照新的天数保留，修改之前已在回收站的实例保留天数不变。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        setRecyclePolicy(setRecyclePolicyRequest?: SetRecyclePolicyRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/instances/recycle-policy",
                contentType: "application/json",
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
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 设置Redis恢复到指定时间点策略。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        setRedisPitrPolicy(setRedisPitrPolicyRequest?: SetRedisPitrPolicyRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/redis/instances/{instance_id}/pitr/policy",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (setRedisPitrPolicyRequest !== null && setRedisPitrPolicyRequest !== undefined) {
                if (setRedisPitrPolicyRequest instanceof SetRedisPitrPolicyRequest) {
                    instanceId = setRedisPitrPolicyRequest.instanceId;
                    body = setRedisPitrPolicyRequest.body
                } else {
                    instanceId = setRedisPitrPolicyRequest['instance_id'];
                    body = setRedisPitrPolicyRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling setRedisPitrPolicy.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据指定条件查询备份列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showAllInstancesBackups(showAllInstancesBackupsRequest?: ShowAllInstancesBackupsRequest) {
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
            
            let offset;
            
            let limit;
            
            let datastoreType;
            
            let instanceId;
            
            let backupId;
            
            let backupType;
            
            let beginTime;
            
            let endTime;

            if (showAllInstancesBackupsRequest !== null && showAllInstancesBackupsRequest !== undefined) {
                if (showAllInstancesBackupsRequest instanceof ShowAllInstancesBackupsRequest) {
                    offset = showAllInstancesBackupsRequest.offset;
                    limit = showAllInstancesBackupsRequest.limit;
                    datastoreType = showAllInstancesBackupsRequest.datastoreType;
                    instanceId = showAllInstancesBackupsRequest.instanceId;
                    backupId = showAllInstancesBackupsRequest.backupId;
                    backupType = showAllInstancesBackupsRequest.backupType;
                    beginTime = showAllInstancesBackupsRequest.beginTime;
                    endTime = showAllInstancesBackupsRequest.endTime;
                } else {
                    offset = showAllInstancesBackupsRequest['offset'];
                    limit = showAllInstancesBackupsRequest['limit'];
                    datastoreType = showAllInstancesBackupsRequest['datastore_type'];
                    instanceId = showAllInstancesBackupsRequest['instance_id'];
                    backupId = showAllInstancesBackupsRequest['backup_id'];
                    backupType = showAllInstancesBackupsRequest['backup_type'];
                    beginTime = showAllInstancesBackupsRequest['begin_time'];
                    endTime = showAllInstancesBackupsRequest['end_time'];
                }
            }

        
            if (offset === null || offset === undefined) {
                throw new RequiredError('offset','Required parameter offset was null or undefined when calling showAllInstancesBackups.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit === null || limit === undefined) {
                throw new RequiredError('limit','Required parameter limit was null or undefined when calling showAllInstancesBackups.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (datastoreType !== null && datastoreType !== undefined) {
                localVarQueryParameter['datastore_type'] = datastoreType;
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
            if (beginTime !== null && beginTime !== undefined) {
                localVarQueryParameter['begin_time'] = beginTime;
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据指定条件查询备份列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showAllInstancesBackupsNew(showAllInstancesBackupsNewRequest?: ShowAllInstancesBackupsNewRequest) {
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
            
            let instanceId;
            
            let datastoreType;
            
            let backupId;
            
            let backupType;
            
            let type;
            
            let limit;
            
            let offset;
            
            let beginTime;
            
            let endTime;

            if (showAllInstancesBackupsNewRequest !== null && showAllInstancesBackupsNewRequest !== undefined) {
                if (showAllInstancesBackupsNewRequest instanceof ShowAllInstancesBackupsNewRequest) {
                    instanceId = showAllInstancesBackupsNewRequest.instanceId;
                    datastoreType = showAllInstancesBackupsNewRequest.datastoreType;
                    backupId = showAllInstancesBackupsNewRequest.backupId;
                    backupType = showAllInstancesBackupsNewRequest.backupType;
                    type = showAllInstancesBackupsNewRequest.type;
                    limit = showAllInstancesBackupsNewRequest.limit;
                    offset = showAllInstancesBackupsNewRequest.offset;
                    beginTime = showAllInstancesBackupsNewRequest.beginTime;
                    endTime = showAllInstancesBackupsNewRequest.endTime;
                } else {
                    instanceId = showAllInstancesBackupsNewRequest['instance_id'];
                    datastoreType = showAllInstancesBackupsNewRequest['datastore_type'];
                    backupId = showAllInstancesBackupsNewRequest['backup_id'];
                    backupType = showAllInstancesBackupsNewRequest['backup_type'];
                    type = showAllInstancesBackupsNewRequest['type'];
                    limit = showAllInstancesBackupsNewRequest['limit'];
                    offset = showAllInstancesBackupsNewRequest['offset'];
                    beginTime = showAllInstancesBackupsNewRequest['begin_time'];
                    endTime = showAllInstancesBackupsNewRequest['end_time'];
                }
            }

        
            if (instanceId !== null && instanceId !== undefined) {
                localVarQueryParameter['instance_id'] = instanceId;
            }
            if (datastoreType !== null && datastoreType !== undefined) {
                localVarQueryParameter['datastore_type'] = datastoreType;
            }
            if (backupId !== null && backupId !== undefined) {
                localVarQueryParameter['backup_id'] = backupId;
            }
            if (backupType !== null && backupType !== undefined) {
                localVarQueryParameter['backup_type'] = backupType;
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
            if (beginTime !== null && beginTime !== undefined) {
                localVarQueryParameter['begin_time'] = beginTime;
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询参数模板可应用的实例列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showApplicableInstances(showApplicableInstancesRequest?: ShowApplicableInstancesRequest) {
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
            
            let offset;
            
            let limit;

            if (showApplicableInstancesRequest !== null && showApplicableInstancesRequest !== undefined) {
                if (showApplicableInstancesRequest instanceof ShowApplicableInstancesRequest) {
                    configId = showApplicableInstancesRequest.configId;
                    offset = showApplicableInstancesRequest.offset;
                    limit = showApplicableInstancesRequest.limit;
                } else {
                    configId = showApplicableInstancesRequest['config_id'];
                    offset = showApplicableInstancesRequest['offset'];
                    limit = showApplicableInstancesRequest['limit'];
                }
            }

        
            if (configId === null || configId === undefined) {
            throw new RequiredError('configId','Required parameter configId was null or undefined when calling showApplicableInstances.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'config_id': configId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showApplyHistory(showApplyHistoryRequest?: ShowApplyHistoryRequest) {
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
            
            let offset;
            
            let limit;

            if (showApplyHistoryRequest !== null && showApplyHistoryRequest !== undefined) {
                if (showApplyHistoryRequest instanceof ShowApplyHistoryRequest) {
                    configId = showApplyHistoryRequest.configId;
                    offset = showApplyHistoryRequest.offset;
                    limit = showApplyHistoryRequest.limit;
                } else {
                    configId = showApplyHistoryRequest['config_id'];
                    offset = showApplyHistoryRequest['offset'];
                    limit = showApplyHistoryRequest['limit'];
                }
            }

        
            if (configId === null || configId === undefined) {
            throw new RequiredError('configId','Required parameter configId was null or undefined when calling showApplyHistory.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'config_id': configId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询磁盘自动扩容策略
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showAutoEnlargePolicy(showAutoEnlargePolicyRequest?: ShowAutoEnlargePolicyRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/{instance_id}/disk-auto-expansion",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;

            if (showAutoEnlargePolicyRequest !== null && showAutoEnlargePolicyRequest !== undefined) {
                if (showAutoEnlargePolicyRequest instanceof ShowAutoEnlargePolicyRequest) {
                    instanceId = showAutoEnlargePolicyRequest.instanceId;
                } else {
                    instanceId = showAutoEnlargePolicyRequest['instance_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showAutoEnlargePolicy.');
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询自动备份策略。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showBackupPolicies(showBackupPoliciesRequest?: ShowBackupPoliciesRequest) {
            const options = {
                method: "GET",
                url: "/v3.1/{project_id}/instances/{instance_id}/backups/policy",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;

            if (showBackupPoliciesRequest !== null && showBackupPoliciesRequest !== undefined) {
                if (showBackupPoliciesRequest instanceof ShowBackupPoliciesRequest) {
                    instanceId = showBackupPoliciesRequest.instanceId;
                } else {
                    instanceId = showBackupPoliciesRequest['instance_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showBackupPolicies.');
            }

            options.pathParams = { 'instance_id': instanceId, };
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

            if (showBackupPolicyRequest !== null && showBackupPolicyRequest !== undefined) {
                if (showBackupPolicyRequest instanceof ShowBackupPolicyRequest) {
                    instanceId = showBackupPolicyRequest.instanceId;
                } else {
                    instanceId = showBackupPolicyRequest['instance_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showBackupPolicy.');
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取指定参数模板的详细信息。
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

            if (showConfigurationDetailRequest !== null && showConfigurationDetailRequest !== undefined) {
                if (showConfigurationDetailRequest instanceof ShowConfigurationDetailRequest) {
                    configId = showConfigurationDetailRequest.configId;
                } else {
                    configId = showConfigurationDetailRequest['config_id'];
                }
            }

        
            if (configId === null || configId === undefined) {
            throw new RequiredError('configId','Required parameter configId was null or undefined when calling showConfigurationDetail.');
            }

            options.pathParams = { 'config_id': configId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询实例容灾切换的故障节点比例。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showDisasterRecoverySettings(showDisasterRecoverySettingsRequest?: ShowDisasterRecoverySettingsRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/disaster-recovery/settings",
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

            if (showDisasterRecoverySettingsRequest !== null && showDisasterRecoverySettingsRequest !== undefined) {
                if (showDisasterRecoverySettingsRequest instanceof ShowDisasterRecoverySettingsRequest) {
                    instanceId = showDisasterRecoverySettingsRequest.instanceId;
                    offset = showDisasterRecoverySettingsRequest.offset;
                    limit = showDisasterRecoverySettingsRequest.limit;
                } else {
                    instanceId = showDisasterRecoverySettingsRequest['instance_id'];
                    offset = showDisasterRecoverySettingsRequest['offset'];
                    limit = showDisasterRecoverySettingsRequest['limit'];
                }
            }

        
            if (instanceId !== null && instanceId !== undefined) {
                localVarQueryParameter['instance_id'] = instanceId;
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
         * 查询实例负载均衡的IP访问黑白名单。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showElbIpGroup(showElbIpGroupRequest?: ShowElbIpGroupRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/{instance_id}/lb/access-control",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;

            if (showElbIpGroupRequest !== null && showElbIpGroupRequest !== undefined) {
                if (showElbIpGroupRequest instanceof ShowElbIpGroupRequest) {
                    instanceId = showElbIpGroupRequest.instanceId;
                } else {
                    instanceId = showElbIpGroupRequest['instance_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showElbIpGroup.');
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询数据库错误日志
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showErrorLog(showErrorLogRequest?: ShowErrorLogRequest) {
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
            
            let nodeId;
            
            let type;
            
            let offset;
            
            let limit;

            if (showErrorLogRequest !== null && showErrorLogRequest !== undefined) {
                if (showErrorLogRequest instanceof ShowErrorLogRequest) {
                    instanceId = showErrorLogRequest.instanceId;
                    startTime = showErrorLogRequest.startTime;
                    endTime = showErrorLogRequest.endTime;
                    nodeId = showErrorLogRequest.nodeId;
                    type = showErrorLogRequest.type;
                    offset = showErrorLogRequest.offset;
                    limit = showErrorLogRequest.limit;
                } else {
                    instanceId = showErrorLogRequest['instance_id'];
                    startTime = showErrorLogRequest['start_time'];
                    endTime = showErrorLogRequest['end_time'];
                    nodeId = showErrorLogRequest['node_id'];
                    type = showErrorLogRequest['type'];
                    offset = showErrorLogRequest['offset'];
                    limit = showErrorLogRequest['limit'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showErrorLog.');
            }
            if (startTime === null || startTime === undefined) {
                throw new RequiredError('startTime','Required parameter startTime was null or undefined when calling showErrorLog.');
            }
            if (startTime !== null && startTime !== undefined) {
                localVarQueryParameter['start_time'] = startTime;
            }
            if (endTime === null || endTime === undefined) {
                throw new RequiredError('endTime','Required parameter endTime was null or undefined when calling showErrorLog.');
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }
            if (nodeId !== null && nodeId !== undefined) {
                localVarQueryParameter['node_id'] = nodeId;
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
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
         * 查询Redis的高危命令
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showHighRiskCommands(showHighRiskCommandsRequest?: ShowHighRiskCommandsRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/{instance_id}/high-risk-commands",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;

            if (showHighRiskCommandsRequest !== null && showHighRiskCommandsRequest !== undefined) {
                if (showHighRiskCommandsRequest instanceof ShowHighRiskCommandsRequest) {
                    instanceId = showHighRiskCommandsRequest.instanceId;
                } else {
                    instanceId = showHighRiskCommandsRequest['instance_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showHighRiskCommands.');
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询实例可搭建双活关系的Region。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showInstanceBiactiveRegions(showInstanceBiactiveRegionsRequest?: ShowInstanceBiactiveRegionsRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/{instance_id}/disaster-recovery/regions",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;

            if (showInstanceBiactiveRegionsRequest !== null && showInstanceBiactiveRegionsRequest !== undefined) {
                if (showInstanceBiactiveRegionsRequest instanceof ShowInstanceBiactiveRegionsRequest) {
                    instanceId = showInstanceBiactiveRegionsRequest.instanceId;
                } else {
                    instanceId = showInstanceBiactiveRegionsRequest['instance_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showInstanceBiactiveRegions.');
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取指定实例的参数信息。
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

            if (showInstanceConfigurationRequest !== null && showInstanceConfigurationRequest !== undefined) {
                if (showInstanceConfigurationRequest instanceof ShowInstanceConfigurationRequest) {
                    instanceId = showInstanceConfigurationRequest.instanceId;
                } else {
                    instanceId = showInstanceConfigurationRequest['instance_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showInstanceConfiguration.');
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于获取容灾实例主/备角色信息，以便后续容灾实例备升主和容灾实例主降备接口调用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showInstanceRole(showInstanceRoleRequest?: ShowInstanceRoleRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/{instance_id}/instance-role",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;

            if (showInstanceRoleRequest !== null && showInstanceRoleRequest !== undefined) {
                if (showInstanceRoleRequest instanceof ShowInstanceRoleRequest) {
                    instanceId = showInstanceRoleRequest.instanceId;
                } else {
                    instanceId = showInstanceRoleRequest['instance_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showInstanceRole.');
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询创建实例或扩容节点时需要的IP数量
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showIpNumRequirement(showIpNumRequirementRequest?: ShowIpNumRequirementRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/ip-num-requirement",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let nodeNum;
            
            let engineName;
            
            let instanceMode;
            
            let instanceId;

            if (showIpNumRequirementRequest !== null && showIpNumRequirementRequest !== undefined) {
                if (showIpNumRequirementRequest instanceof ShowIpNumRequirementRequest) {
                    nodeNum = showIpNumRequirementRequest.nodeNum;
                    engineName = showIpNumRequirementRequest.engineName;
                    instanceMode = showIpNumRequirementRequest.instanceMode;
                    instanceId = showIpNumRequirementRequest.instanceId;
                } else {
                    nodeNum = showIpNumRequirementRequest['node_num'];
                    engineName = showIpNumRequirementRequest['engine_name'];
                    instanceMode = showIpNumRequirementRequest['instance_mode'];
                    instanceId = showIpNumRequirementRequest['instance_id'];
                }
            }

        
            if (nodeNum === null || nodeNum === undefined) {
                throw new RequiredError('nodeNum','Required parameter nodeNum was null or undefined when calling showIpNumRequirement.');
            }
            if (nodeNum !== null && nodeNum !== undefined) {
                localVarQueryParameter['node_num'] = nodeNum;
            }
            if (engineName !== null && engineName !== undefined) {
                localVarQueryParameter['engine_name'] = engineName;
            }
            if (instanceMode !== null && instanceMode !== undefined) {
                localVarQueryParameter['instance_mode'] = instanceMode;
            }
            if (instanceId !== null && instanceId !== undefined) {
                localVarQueryParameter['instance_id'] = instanceId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询实例参数的修改历史
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showModifyHistory(showModifyHistoryRequest?: ShowModifyHistoryRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/{instance_id}/configuration-histories",
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

            if (showModifyHistoryRequest !== null && showModifyHistoryRequest !== undefined) {
                if (showModifyHistoryRequest instanceof ShowModifyHistoryRequest) {
                    instanceId = showModifyHistoryRequest.instanceId;
                    offset = showModifyHistoryRequest.offset;
                    limit = showModifyHistoryRequest.limit;
                } else {
                    instanceId = showModifyHistoryRequest['instance_id'];
                    offset = showModifyHistoryRequest['offset'];
                    limit = showModifyHistoryRequest['limit'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showModifyHistory.');
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
         * 获取GeminiDB Redis的免密配置。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showPasswordlessConfig(showPasswordlessConfigRequest?: ShowPasswordlessConfigRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/{instance_id}/passwordless-config",
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

            if (showPasswordlessConfigRequest !== null && showPasswordlessConfigRequest !== undefined) {
                if (showPasswordlessConfigRequest instanceof ShowPasswordlessConfigRequest) {
                    instanceId = showPasswordlessConfigRequest.instanceId;
                    offset = showPasswordlessConfigRequest.offset;
                    limit = showPasswordlessConfigRequest.limit;
                } else {
                    instanceId = showPasswordlessConfigRequest['instance_id'];
                    offset = showPasswordlessConfigRequest['offset'];
                    limit = showPasswordlessConfigRequest['limit'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showPasswordlessConfig.');
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
         * 获取容灾实例数据同步状态，主备实例id，数据同步指标值，以及倒换和切换场景下的RPO，RTO指标值。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showPauseResumeStutus(showPauseResumeStutusRequest?: ShowPauseResumeStutusRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/{instance_id}/disaster-recovery/data-synchronization",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;

            if (showPauseResumeStutusRequest !== null && showPauseResumeStutusRequest !== undefined) {
                if (showPauseResumeStutusRequest instanceof ShowPauseResumeStutusRequest) {
                    instanceId = showPauseResumeStutusRequest.instanceId;
                } else {
                    instanceId = showPauseResumeStutusRequest['instance_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showPauseResumeStutus.');
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询单租户在GeminiDB服务下的资源配额。
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
            const localVarQueryParameter = {} as any;
            
            let datastoreType;
            
            let mode;

            if (showQuotasRequest !== null && showQuotasRequest !== undefined) {
                if (showQuotasRequest instanceof ShowQuotasRequest) {
                    datastoreType = showQuotasRequest.datastoreType;
                    mode = showQuotasRequest.mode;
                } else {
                    datastoreType = showQuotasRequest['datastore_type'];
                    mode = showQuotasRequest['mode'];
                }
            }

        
            if (datastoreType !== null && datastoreType !== undefined) {
                localVarQueryParameter['datastore_type'] = datastoreType;
            }
            if (mode !== null && mode !== undefined) {
                localVarQueryParameter['mode'] = mode;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询回收策略。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showRecyclePolicy(showRecyclePolicyRequest?: ShowRecyclePolicyRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/recycle-policy",
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
         * 支持查询Redis实例的大key。value长度大于bigkeys-string-threshold参数的string类型的key或者元素数大于bigkeys-composite-threshold参数的hash/list/zset/set/stream类型key，会被判断为大key。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showRedisBigKeys(showRedisBigKeysRequest?: ShowRedisBigKeysRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/{instance_id}/big-keys",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (showRedisBigKeysRequest !== null && showRedisBigKeysRequest !== undefined) {
                if (showRedisBigKeysRequest instanceof ShowRedisBigKeysRequest) {
                    instanceId = showRedisBigKeysRequest.instanceId;
                    body = showRedisBigKeysRequest.body
                } else {
                    instanceId = showRedisBigKeysRequest['instance_id'];
                    body = showRedisBigKeysRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showRedisBigKeys.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询Redis禁用命令。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showRedisDisabledCommands(showRedisDisabledCommandsRequest?: ShowRedisDisabledCommandsRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/redis/instances/{instance_id}/disabled-commands",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let type;
            
            let offset;
            
            let limit;

            if (showRedisDisabledCommandsRequest !== null && showRedisDisabledCommandsRequest !== undefined) {
                if (showRedisDisabledCommandsRequest instanceof ShowRedisDisabledCommandsRequest) {
                    instanceId = showRedisDisabledCommandsRequest.instanceId;
                    type = showRedisDisabledCommandsRequest.type;
                    offset = showRedisDisabledCommandsRequest.offset;
                    limit = showRedisDisabledCommandsRequest.limit;
                } else {
                    instanceId = showRedisDisabledCommandsRequest['instance_id'];
                    type = showRedisDisabledCommandsRequest['type'];
                    offset = showRedisDisabledCommandsRequest['offset'];
                    limit = showRedisDisabledCommandsRequest['limit'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showRedisDisabledCommands.');
            }
            if (type === null || type === undefined) {
                throw new RequiredError('type','Required parameter type was null or undefined when calling showRedisDisabledCommands.');
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
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
         * 支持查询Redis实例的热key。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showRedisHotKeys(showRedisHotKeysRequest?: ShowRedisHotKeysRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/{instance_id}/hot-keys",
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

            if (showRedisHotKeysRequest !== null && showRedisHotKeysRequest !== undefined) {
                if (showRedisHotKeysRequest instanceof ShowRedisHotKeysRequest) {
                    instanceId = showRedisHotKeysRequest.instanceId;
                    offset = showRedisHotKeysRequest.offset;
                    limit = showRedisHotKeysRequest.limit;
                } else {
                    instanceId = showRedisHotKeysRequest['instance_id'];
                    offset = showRedisHotKeysRequest['offset'];
                    limit = showRedisHotKeysRequest['limit'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showRedisHotKeys.');
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
         * 查询Redis实例指定时间点恢复所占用的存储空间。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showRedisPitrInfo(showRedisPitrInfoRequest?: ShowRedisPitrInfoRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/redis/instances/{instance_id}/pitr",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;

            if (showRedisPitrInfoRequest !== null && showRedisPitrInfoRequest !== undefined) {
                if (showRedisPitrInfoRequest instanceof ShowRedisPitrInfoRequest) {
                    instanceId = showRedisPitrInfoRequest.instanceId;
                } else {
                    instanceId = showRedisPitrInfoRequest['instance_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showRedisPitrInfo.');
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询Redis恢复到指定时间点策略。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showRedisPitrPolicy(showRedisPitrPolicyRequest?: ShowRedisPitrPolicyRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/redis/instances/{instance_id}/pitr/policy",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;

            if (showRedisPitrPolicyRequest !== null && showRedisPitrPolicyRequest !== undefined) {
                if (showRedisPitrPolicyRequest instanceof ShowRedisPitrPolicyRequest) {
                    instanceId = showRedisPitrPolicyRequest.instanceId;
                } else {
                    instanceId = showRedisPitrPolicyRequest['instance_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showRedisPitrPolicy.');
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询用户可恢复的实例列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showRestorableList(showRestorableListRequest?: ShowRestorableListRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/backups/{backup_id}/restorable-instances",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let backupId;
            
            let offset;
            
            let limit;

            if (showRestorableListRequest !== null && showRestorableListRequest !== undefined) {
                if (showRestorableListRequest instanceof ShowRestorableListRequest) {
                    backupId = showRestorableListRequest.backupId;
                    offset = showRestorableListRequest.offset;
                    limit = showRestorableListRequest.limit;
                } else {
                    backupId = showRestorableListRequest['backup_id'];
                    offset = showRestorableListRequest['offset'];
                    limit = showRestorableListRequest['limit'];
                }
            }

        
            if (backupId === null || backupId === undefined) {
            throw new RequiredError('backupId','Required parameter backupId was null or undefined when calling showRestorableList.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'backup_id': backupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询秒级监控配置。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showSecondLevelMonitoringStatus(showSecondLevelMonitoringStatusRequest?: ShowSecondLevelMonitoringStatusRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/{instance_id}/monitoring-by-seconds/switch",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;

            if (showSecondLevelMonitoringStatusRequest !== null && showSecondLevelMonitoringStatusRequest !== undefined) {
                if (showSecondLevelMonitoringStatusRequest instanceof ShowSecondLevelMonitoringStatusRequest) {
                    instanceId = showSecondLevelMonitoringStatusRequest.instanceId;
                } else {
                    instanceId = showSecondLevelMonitoringStatusRequest['instance_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showSecondLevelMonitoringStatus.');
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询慢日志脱敏状态。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showSlowLogDesensitization(showSlowLogDesensitizationRequest?: ShowSlowLogDesensitizationRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/{instance_id}/slowlog-desensitization",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;

            if (showSlowLogDesensitizationRequest !== null && showSlowLogDesensitizationRequest !== undefined) {
                if (showSlowLogDesensitizationRequest instanceof ShowSlowLogDesensitizationRequest) {
                    instanceId = showSlowLogDesensitizationRequest.instanceId;
                } else {
                    instanceId = showSlowLogDesensitizationRequest['instance_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showSlowLogDesensitization.');
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 缩容指定集群实例的节点数量。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        shrinkInstanceNode(shrinkInstanceNodeRequest?: ShrinkInstanceNodeRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/{instance_id}/reduce-node",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (shrinkInstanceNodeRequest !== null && shrinkInstanceNodeRequest !== undefined) {
                if (shrinkInstanceNodeRequest instanceof ShrinkInstanceNodeRequest) {
                    instanceId = shrinkInstanceNodeRequest.instanceId;
                    body = shrinkInstanceNodeRequest.body
                } else {
                    instanceId = shrinkInstanceNodeRequest['instance_id'];
                    body = shrinkInstanceNodeRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling shrinkInstanceNode.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 支持紧急情况下停止备份功能。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        stopBackup(stopBackupRequest?: StopBackupRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/backups/{backup_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let backupId;

            if (stopBackupRequest !== null && stopBackupRequest !== undefined) {
                if (stopBackupRequest instanceof StopBackupRequest) {
                    backupId = stopBackupRequest.backupId;
                    body = stopBackupRequest.body
                } else {
                    backupId = stopBackupRequest['backup_id'];
                    body = stopBackupRequest['body'];
                }
            }

        
            if (backupId === null || backupId === undefined) {
            throw new RequiredError('backupId','Required parameter backupId was null or undefined when calling stopBackup.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'backup_id': backupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 设置实例负载均衡的IP访问黑白名单，黑名单、白名单只能选一种，每次调用此接口覆盖之前的设置。关闭后不限制连接的源IP地址。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        switchIpGroup(switchIpGroupRequest?: SwitchIpGroupRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/instances/{instance_id}/lb/access-control",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (switchIpGroupRequest !== null && switchIpGroupRequest !== undefined) {
                if (switchIpGroupRequest instanceof SwitchIpGroupRequest) {
                    instanceId = switchIpGroupRequest.instanceId;
                    body = switchIpGroupRequest.body
                } else {
                    instanceId = switchIpGroupRequest['instance_id'];
                    body = switchIpGroupRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling switchIpGroup.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 切换实例下的主备节点
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        switchOver(switchOverRequest?: SwitchOverRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/instance/{instance_id}/switchover",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;

            if (switchOverRequest !== null && switchOverRequest !== undefined) {
                if (switchOverRequest instanceof SwitchOverRequest) {
                    instanceId = switchOverRequest.instanceId;
                } else {
                    instanceId = switchOverRequest['instance_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling switchOver.');
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 开启或关闭指定实例的5秒级监控。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        switchSecondLevelMonitoring(switchSecondLevelMonitoringRequest?: SwitchSecondLevelMonitoringRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/instances/{instance_id}/monitoring-by-seconds/switch",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (switchSecondLevelMonitoringRequest !== null && switchSecondLevelMonitoringRequest !== undefined) {
                if (switchSecondLevelMonitoringRequest instanceof SwitchSecondLevelMonitoringRequest) {
                    instanceId = switchSecondLevelMonitoringRequest.instanceId;
                    body = switchSecondLevelMonitoringRequest.body
                } else {
                    instanceId = switchSecondLevelMonitoringRequest['instance_id'];
                    body = switchSecondLevelMonitoringRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling switchSecondLevelMonitoring.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 设置慢日志脱敏状态
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        switchSlowlogDesensitization(switchSlowlogDesensitizationRequest?: SwitchSlowlogDesensitizationRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/instances/{instance_id}/slowlog-desensitization",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (switchSlowlogDesensitizationRequest !== null && switchSlowlogDesensitizationRequest !== undefined) {
                if (switchSlowlogDesensitizationRequest instanceof SwitchSlowlogDesensitizationRequest) {
                    instanceId = switchSlowlogDesensitizationRequest.instanceId;
                    body = switchSlowlogDesensitizationRequest.body
                } else {
                    instanceId = switchSlowlogDesensitizationRequest['instance_id'];
                    body = switchSlowlogDesensitizationRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling switchSlowlogDesensitization.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 切换实例SSL开关。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        switchSsl(switchSslRequest?: SwitchSslRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/{instance_id}/ssl-option",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (switchSslRequest !== null && switchSslRequest !== undefined) {
                if (switchSslRequest instanceof SwitchSslRequest) {
                    instanceId = switchSslRequest.instanceId;
                    body = switchSslRequest.body
                } else {
                    instanceId = switchSslRequest['instance_id'];
                    body = switchSslRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling switchSsl.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于对已经搭建容灾关系的实例，将备实例升级为主实例。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        switchToMaster(switchToMasterRequest?: SwitchToMasterRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/{instance_id}/switchover-master",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (switchToMasterRequest !== null && switchToMasterRequest !== undefined) {
                if (switchToMasterRequest instanceof SwitchToMasterRequest) {
                    instanceId = switchToMasterRequest.instanceId;
                    body = switchToMasterRequest.body
                } else {
                    instanceId = switchToMasterRequest['instance_id'];
                    body = switchToMasterRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling switchToMaster.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于对已经搭建容灾关系的实例，将主实例降级为备实例。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        switchToSlave(switchToSlaveRequest?: SwitchToSlaveRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/{instance_id}/switchover-slave",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;

            if (switchToSlaveRequest !== null && switchToSlaveRequest !== undefined) {
                if (switchToSlaveRequest instanceof SwitchToSlaveRequest) {
                    instanceId = switchToSlaveRequest.instanceId;
                } else {
                    instanceId = switchToSlaveRequest['instance_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling switchToSlave.');
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改副本集跨网段访问配置
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateClientNetwork(updateClientNetworkRequest?: UpdateClientNetworkRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/{instance_id}/client-network",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (updateClientNetworkRequest !== null && updateClientNetworkRequest !== undefined) {
                if (updateClientNetworkRequest instanceof UpdateClientNetworkRequest) {
                    instanceId = updateClientNetworkRequest.instanceId;
                    body = updateClientNetworkRequest.body
                } else {
                    instanceId = updateClientNetworkRequest['instance_id'];
                    body = updateClientNetworkRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updateClientNetwork.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改参数模板参数。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateConfiguration(updateConfigurationRequest?: UpdateConfigurationRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/configurations/{config_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let configId;

            if (updateConfigurationRequest !== null && updateConfigurationRequest !== undefined) {
                if (updateConfigurationRequest instanceof UpdateConfigurationRequest) {
                    configId = updateConfigurationRequest.configId;
                    body = updateConfigurationRequest.body
                } else {
                    configId = updateConfigurationRequest['config_id'];
                    body = updateConfigurationRequest['body'];
                }
            }

        
            if (configId === null || configId === undefined) {
            throw new RequiredError('configId','Required parameter configId was null or undefined when calling updateConfiguration.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'config_id': configId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 操作GeminDB实例数据库
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateDatabases(updateDatabasesRequest?: UpdateDatabasesRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/instances/{instance_id}/databases",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (updateDatabasesRequest !== null && updateDatabasesRequest !== undefined) {
                if (updateDatabasesRequest instanceof UpdateDatabasesRequest) {
                    instanceId = updateDatabasesRequest.instanceId;
                    body = updateDatabasesRequest.body
                } else {
                    instanceId = updateDatabasesRequest['instance_id'];
                    body = updateDatabasesRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updateDatabases.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改指定内存加速规则。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateDbCacheRule(updateDbCacheRuleRequest?: UpdateDbCacheRuleRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/dbcache/rule",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (updateDbCacheRuleRequest !== null && updateDbCacheRuleRequest !== undefined) {
                if (updateDbCacheRuleRequest instanceof UpdateDbCacheRuleRequest) {
                    body = updateDbCacheRuleRequest.body
                } else {
                    body = updateDbCacheRuleRequest['body'];
                }
            }

        
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 批量修改高危命令
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateHighRiskCommands(updateHighRiskCommandsRequest?: UpdateHighRiskCommandsRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/instances/{instance_id}/high-risk-commands",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (updateHighRiskCommandsRequest !== null && updateHighRiskCommandsRequest !== undefined) {
                if (updateHighRiskCommandsRequest instanceof UpdateHighRiskCommandsRequest) {
                    instanceId = updateHighRiskCommandsRequest.instanceId;
                    body = updateHighRiskCommandsRequest.body
                } else {
                    instanceId = updateHighRiskCommandsRequest['instance_id'];
                    body = updateHighRiskCommandsRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updateHighRiskCommands.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

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
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (updateInstanceConfigurationRequest !== null && updateInstanceConfigurationRequest !== undefined) {
                if (updateInstanceConfigurationRequest instanceof UpdateInstanceConfigurationRequest) {
                    instanceId = updateInstanceConfigurationRequest.instanceId;
                    body = updateInstanceConfigurationRequest.body
                } else {
                    instanceId = updateInstanceConfigurationRequest['instance_id'];
                    body = updateInstanceConfigurationRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updateInstanceConfiguration.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

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
        updateInstanceConfigurations(updateInstanceConfigurationsRequest?: UpdateInstanceConfigurationsRequest) {
            const options = {
                method: "PUT",
                url: "/v3.1/{project_id}/instances/{instance_id}/configurations",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (updateInstanceConfigurationsRequest !== null && updateInstanceConfigurationsRequest !== undefined) {
                if (updateInstanceConfigurationsRequest instanceof UpdateInstanceConfigurationsRequest) {
                    instanceId = updateInstanceConfigurationsRequest.instanceId;
                    body = updateInstanceConfigurationsRequest.body
                } else {
                    instanceId = updateInstanceConfigurationsRequest['instance_id'];
                    body = updateInstanceConfigurationsRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updateInstanceConfigurations.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改实例名称
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateInstanceName(updateInstanceNameRequest?: UpdateInstanceNameRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/instances/{instance_id}/name",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (updateInstanceNameRequest !== null && updateInstanceNameRequest !== undefined) {
                if (updateInstanceNameRequest instanceof UpdateInstanceNameRequest) {
                    instanceId = updateInstanceNameRequest.instanceId;
                    body = updateInstanceNameRequest.body
                } else {
                    instanceId = updateInstanceNameRequest['instance_id'];
                    body = updateInstanceNameRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updateInstanceName.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 支持修改GeminiDB Redis的免密配置。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updatePasswordlessConfig(updatePasswordlessConfigRequest?: UpdatePasswordlessConfigRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/instances/{instance_id}/passwordless-config",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (updatePasswordlessConfigRequest !== null && updatePasswordlessConfigRequest !== undefined) {
                if (updatePasswordlessConfigRequest instanceof UpdatePasswordlessConfigRequest) {
                    instanceId = updatePasswordlessConfigRequest.instanceId;
                    body = updatePasswordlessConfigRequest.body
                } else {
                    instanceId = updatePasswordlessConfigRequest['instance_id'];
                    body = updatePasswordlessConfigRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updatePasswordlessConfig.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 变更实例关联的安全组
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateSecurityGroup(updateSecurityGroupRequest?: UpdateSecurityGroupRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/instances/{instance_id}/security-group",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (updateSecurityGroupRequest !== null && updateSecurityGroupRequest !== undefined) {
                if (updateSecurityGroupRequest instanceof UpdateSecurityGroupRequest) {
                    instanceId = updateSecurityGroupRequest.instanceId;
                    body = updateSecurityGroupRequest.body
                } else {
                    instanceId = updateSecurityGroupRequest['instance_id'];
                    body = updateSecurityGroupRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updateSecurityGroup.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 升级数据库补丁版本
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        upgradeDbVersion(upgradeDbVersionRequest?: UpgradeDbVersionRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/{instance_id}/db-upgrade",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;

            if (upgradeDbVersionRequest !== null && upgradeDbVersionRequest !== undefined) {
                if (upgradeDbVersionRequest instanceof UpgradeDbVersionRequest) {
                    instanceId = upgradeDbVersionRequest.instanceId;
                } else {
                    instanceId = upgradeDbVersionRequest['instance_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling upgradeDbVersion.');
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询当前支持的API版本信息列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listApiVersion() {
            const options = {
                method: "GET",
                url: "/",
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
         * 查询指定API版本信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showApiVersion(showApiVersionRequest?: ShowApiVersionRequest) {
            const options = {
                method: "GET",
                url: "/{version}",
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
    
    }
};

function newClient(client: HcClient): GaussDBforNoSQLClient {
    return new GaussDBforNoSQLClient(client);
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