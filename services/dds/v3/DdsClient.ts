import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { AddReadonlyNodeRequest } from './model/AddReadonlyNodeRequest';
import { AddReadonlyNodeRequestBody } from './model/AddReadonlyNodeRequestBody';
import { AddReadonlyNodeResponse } from './model/AddReadonlyNodeResponse';
import { AddShardingNodeRequest } from './model/AddShardingNodeRequest';
import { AddShardingNodeResponse } from './model/AddShardingNodeResponse';
import { AddShardingNodeVolumeOption } from './model/AddShardingNodeVolumeOption';
import { ApiVersion } from './model/ApiVersion';
import { ApplicableInstancesInfo } from './model/ApplicableInstancesInfo';
import { ApplyConfigurationRequestBody } from './model/ApplyConfigurationRequestBody';
import { ApplyHistoryInfo } from './model/ApplyHistoryInfo';
import { AttachEipRequest } from './model/AttachEipRequest';
import { AttachEipRequestBody } from './model/AttachEipRequestBody';
import { AttachEipResponse } from './model/AttachEipResponse';
import { AttachInternalIpRequest } from './model/AttachInternalIpRequest';
import { AttachInternalIpRequestBody } from './model/AttachInternalIpRequestBody';
import { AttachInternalIpResponse } from './model/AttachInternalIpResponse';
import { Az2Migrate } from './model/Az2Migrate';
import { BackupDatabase } from './model/BackupDatabase';
import { BackupForList } from './model/BackupForList';
import { BackupPolicy } from './model/BackupPolicy';
import { BackupPolicyItem } from './model/BackupPolicyItem';
import { BackupStrategy } from './model/BackupStrategy';
import { BackupStrategyForItemResponse } from './model/BackupStrategyForItemResponse';
import { BalancerActiveWindow } from './model/BalancerActiveWindow';
import { BatchDeleteBackupRequest } from './model/BatchDeleteBackupRequest';
import { BatchDeleteBackupRequestBody } from './model/BatchDeleteBackupRequestBody';
import { BatchDeleteBackupResponse } from './model/BatchDeleteBackupResponse';
import { BatchOperateInstanceTagRequestBody } from './model/BatchOperateInstanceTagRequestBody';
import { BatchTagActionRequest } from './model/BatchTagActionRequest';
import { BatchTagActionResponse } from './model/BatchTagActionResponse';
import { BatchUpgradeDatabaseVersionRequest } from './model/BatchUpgradeDatabaseVersionRequest';
import { BatchUpgradeDatabaseVersionRequestBody } from './model/BatchUpgradeDatabaseVersionRequestBody';
import { BatchUpgradeDatabaseVersionResponse } from './model/BatchUpgradeDatabaseVersionResponse';
import { CancelEipRequest } from './model/CancelEipRequest';
import { CancelEipResponse } from './model/CancelEipResponse';
import { CancelScheduledTaskRequest } from './model/CancelScheduledTaskRequest';
import { CancelScheduledTaskResponse } from './model/CancelScheduledTaskResponse';
import { CertInfo } from './model/CertInfo';
import { ChangeOpsWindowRequest } from './model/ChangeOpsWindowRequest';
import { ChangeOpsWindowResponse } from './model/ChangeOpsWindowResponse';
import { ChargeInfoOption } from './model/ChargeInfoOption';
import { ChargeInfoResult } from './model/ChargeInfoResult';
import { CheckPasswordRequest } from './model/CheckPasswordRequest';
import { CheckPasswordRequestBody } from './model/CheckPasswordRequestBody';
import { CheckPasswordResponse } from './model/CheckPasswordResponse';
import { CheckWeakPasswordRequest } from './model/CheckWeakPasswordRequest';
import { CheckWeakPasswordResponse } from './model/CheckWeakPasswordResponse';
import { ClientNetworkRequestBody } from './model/ClientNetworkRequestBody';
import { CompareConfigurationRequest } from './model/CompareConfigurationRequest';
import { CompareConfigurationResponse } from './model/CompareConfigurationResponse';
import { ConfigurationModifyHistoryInfo } from './model/ConfigurationModifyHistoryInfo';
import { ConfigurationParametersResult } from './model/ConfigurationParametersResult';
import { CopyConfigurationRequest } from './model/CopyConfigurationRequest';
import { CopyConfigurationRequestBody } from './model/CopyConfigurationRequestBody';
import { CopyConfigurationResponse } from './model/CopyConfigurationResponse';
import { CreateConfigurationRequest } from './model/CreateConfigurationRequest';
import { CreateConfigurationRequestBody } from './model/CreateConfigurationRequestBody';
import { CreateConfigurationResponse } from './model/CreateConfigurationResponse';
import { CreateDatabaseRoleRequest } from './model/CreateDatabaseRoleRequest';
import { CreateDatabaseRoleRequestBody } from './model/CreateDatabaseRoleRequestBody';
import { CreateDatabaseRoleResponse } from './model/CreateDatabaseRoleResponse';
import { CreateDatabaseUserRequest } from './model/CreateDatabaseUserRequest';
import { CreateDatabaseUserRequestBody } from './model/CreateDatabaseUserRequestBody';
import { CreateDatabaseUserResponse } from './model/CreateDatabaseUserResponse';
import { CreateInstanceConfigurationsOption } from './model/CreateInstanceConfigurationsOption';
import { CreateInstanceFlavorOption } from './model/CreateInstanceFlavorOption';
import { CreateInstanceRequest } from './model/CreateInstanceRequest';
import { CreateInstanceRequestBody } from './model/CreateInstanceRequestBody';
import { CreateInstanceResponse } from './model/CreateInstanceResponse';
import { CreateIpRequest } from './model/CreateIpRequest';
import { CreateIpRequestBody } from './model/CreateIpRequestBody';
import { CreateIpResponse } from './model/CreateIpResponse';
import { CreateKillOpRuleRequest } from './model/CreateKillOpRuleRequest';
import { CreateKillOpRuleRequestBody } from './model/CreateKillOpRuleRequestBody';
import { CreateKillOpRuleResponse } from './model/CreateKillOpRuleResponse';
import { CreateManualBackupOption } from './model/CreateManualBackupOption';
import { CreateManualBackupRequest } from './model/CreateManualBackupRequest';
import { CreateManualBackupRequestBody } from './model/CreateManualBackupRequestBody';
import { CreateManualBackupResponse } from './model/CreateManualBackupResponse';
import { DatabaseInfoItem } from './model/DatabaseInfoItem';
import { Datastore } from './model/Datastore';
import { DatastoreItem } from './model/DatastoreItem';
import { DatastoreResult } from './model/DatastoreResult';
import { DeleteAuditLogRequest } from './model/DeleteAuditLogRequest';
import { DeleteAuditLogRequestBody } from './model/DeleteAuditLogRequestBody';
import { DeleteAuditLogResponse } from './model/DeleteAuditLogResponse';
import { DeleteConfigurationRequest } from './model/DeleteConfigurationRequest';
import { DeleteConfigurationResponse } from './model/DeleteConfigurationResponse';
import { DeleteDatabaseRoleRequest } from './model/DeleteDatabaseRoleRequest';
import { DeleteDatabaseRoleRequestBody } from './model/DeleteDatabaseRoleRequestBody';
import { DeleteDatabaseRoleResponse } from './model/DeleteDatabaseRoleResponse';
import { DeleteDatabaseUserRequest } from './model/DeleteDatabaseUserRequest';
import { DeleteDatabaseUserRequestBody } from './model/DeleteDatabaseUserRequestBody';
import { DeleteDatabaseUserResponse } from './model/DeleteDatabaseUserResponse';
import { DeleteInstanceRequest } from './model/DeleteInstanceRequest';
import { DeleteInstanceResponse } from './model/DeleteInstanceResponse';
import { DeleteKillOpRuleListRequest } from './model/DeleteKillOpRuleListRequest';
import { DeleteKillOpRuleListRequestBody } from './model/DeleteKillOpRuleListRequestBody';
import { DeleteKillOpRuleListResponse } from './model/DeleteKillOpRuleListResponse';
import { DeleteLtsConfigRequest } from './model/DeleteLtsConfigRequest';
import { DeleteLtsConfigRequestBody } from './model/DeleteLtsConfigRequestBody';
import { DeleteLtsConfigRequestBodyLtsConfigs } from './model/DeleteLtsConfigRequestBodyLtsConfigs';
import { DeleteLtsConfigResponse } from './model/DeleteLtsConfigResponse';
import { DeleteManualBackupRequest } from './model/DeleteManualBackupRequest';
import { DeleteManualBackupResponse } from './model/DeleteManualBackupResponse';
import { DeleteMongosNodeRequest } from './model/DeleteMongosNodeRequest';
import { DeleteMongosNodeRequestBody } from './model/DeleteMongosNodeRequestBody';
import { DeleteMongosNodeResponse } from './model/DeleteMongosNodeResponse';
import { DeleteReadonlyNodeRequest } from './model/DeleteReadonlyNodeRequest';
import { DeleteReadonlyNodeRequestBody } from './model/DeleteReadonlyNodeRequestBody';
import { DeleteReadonlyNodeResponse } from './model/DeleteReadonlyNodeResponse';
import { DeleteSessionRequest } from './model/DeleteSessionRequest';
import { DeleteSessionRequestBody } from './model/DeleteSessionRequestBody';
import { DeleteSessionResponse } from './model/DeleteSessionResponse';
import { DiffConfigurationRequest } from './model/DiffConfigurationRequest';
import { DiffDetails } from './model/DiffDetails';
import { DiskAutoExpansionPolicy } from './model/DiskAutoExpansionPolicy';
import { DiskVolumes } from './model/DiskVolumes';
import { DownloadErrorlogRequest } from './model/DownloadErrorlogRequest';
import { DownloadErrorlogRequestBody } from './model/DownloadErrorlogRequestBody';
import { DownloadErrorlogResponse } from './model/DownloadErrorlogResponse';
import { DownloadSlowlogRequest } from './model/DownloadSlowlogRequest';
import { DownloadSlowlogRequestBody } from './model/DownloadSlowlogRequestBody';
import { DownloadSlowlogResponse } from './model/DownloadSlowlogResponse';
import { DownloadSlowlogResult } from './model/DownloadSlowlogResult';
import { DssPoolInfo } from './model/DssPoolInfo';
import { DurationStrategies } from './model/DurationStrategies';
import { EnlargeInstanceRequestBody } from './model/EnlargeInstanceRequestBody';
import { EnlargeReplicasetNodeRequestBody } from './model/EnlargeReplicasetNodeRequestBody';
import { EntityConfigurationParametersResult } from './model/EntityConfigurationParametersResult';
import { EntityInfo } from './model/EntityInfo';
import { ErrorLogDetail } from './model/ErrorLogDetail';
import { ErrorResponse } from './model/ErrorResponse';
import { ErrorlogResult } from './model/ErrorlogResult';
import { ExpandReplicasetNodeRequest } from './model/ExpandReplicasetNodeRequest';
import { ExpandReplicasetNodeResponse } from './model/ExpandReplicasetNodeResponse';
import { Flavor } from './model/Flavor';
import { FlavorInfo } from './model/FlavorInfo';
import { GetBackupDownloadLinkResponseBodyFiles } from './model/GetBackupDownloadLinkResponseBodyFiles';
import { GroupResponseItem } from './model/GroupResponseItem';
import { HistoryInfo } from './model/HistoryInfo';
import { InstanceItem } from './model/InstanceItem';
import { InstanceItemTagItem } from './model/InstanceItemTagItem';
import { JobDetail } from './model/JobDetail';
import { JobInfo } from './model/JobInfo';
import { JobInstanceInfo } from './model/JobInstanceInfo';
import { KillOpRule } from './model/KillOpRule';
import { Links } from './model/Links';
import { ListApiVersionRequest } from './model/ListApiVersionRequest';
import { ListApiVersionResponse } from './model/ListApiVersionResponse';
import { ListAppliedInstancesRequest } from './model/ListAppliedInstancesRequest';
import { ListAppliedInstancesResponse } from './model/ListAppliedInstancesResponse';
import { ListAuditlogLinksRequest } from './model/ListAuditlogLinksRequest';
import { ListAuditlogLinksResponse } from './model/ListAuditlogLinksResponse';
import { ListAuditlogsRequest } from './model/ListAuditlogsRequest';
import { ListAuditlogsResponse } from './model/ListAuditlogsResponse';
import { ListAuditlogsResult } from './model/ListAuditlogsResult';
import { ListAz2MigrateRequest } from './model/ListAz2MigrateRequest';
import { ListAz2MigrateResponse } from './model/ListAz2MigrateResponse';
import { ListBackupsRequest } from './model/ListBackupsRequest';
import { ListBackupsResponse } from './model/ListBackupsResponse';
import { ListConfigurationsRequest } from './model/ListConfigurationsRequest';
import { ListConfigurationsResponse } from './model/ListConfigurationsResponse';
import { ListConfigurationsResult } from './model/ListConfigurationsResult';
import { ListDatabaseRolesRequest } from './model/ListDatabaseRolesRequest';
import { ListDatabaseRolesResponse } from './model/ListDatabaseRolesResponse';
import { ListDatabaseUsersRequest } from './model/ListDatabaseUsersRequest';
import { ListDatabaseUsersResponse } from './model/ListDatabaseUsersResponse';
import { ListDatabasesRequest } from './model/ListDatabasesRequest';
import { ListDatabasesResponse } from './model/ListDatabasesResponse';
import { ListDatastoreVersionsRequest } from './model/ListDatastoreVersionsRequest';
import { ListDatastoreVersionsResponse } from './model/ListDatastoreVersionsResponse';
import { ListErrorLogsRequest } from './model/ListErrorLogsRequest';
import { ListErrorLogsResponse } from './model/ListErrorLogsResponse';
import { ListFlavorInfosRequest } from './model/ListFlavorInfosRequest';
import { ListFlavorInfosResponse } from './model/ListFlavorInfosResponse';
import { ListFlavorsRequest } from './model/ListFlavorsRequest';
import { ListFlavorsResponse } from './model/ListFlavorsResponse';
import { ListInstanceTagsRequest } from './model/ListInstanceTagsRequest';
import { ListInstanceTagsResponse } from './model/ListInstanceTagsResponse';
import { ListInstancesByTagsRequest } from './model/ListInstancesByTagsRequest';
import { ListInstancesByTagsRequestBody } from './model/ListInstancesByTagsRequestBody';
import { ListInstancesByTagsResponse } from './model/ListInstancesByTagsResponse';
import { ListInstancesRequest } from './model/ListInstancesRequest';
import { ListInstancesResponse } from './model/ListInstancesResponse';
import { ListLtsConfigsRequest } from './model/ListLtsConfigsRequest';
import { ListLtsConfigsResponse } from './model/ListLtsConfigsResponse';
import { ListLtsErrorLogsRequest } from './model/ListLtsErrorLogsRequest';
import { ListLtsErrorLogsRequestBody } from './model/ListLtsErrorLogsRequestBody';
import { ListLtsErrorLogsResponse } from './model/ListLtsErrorLogsResponse';
import { ListLtsLogPolicyRespondBodyInstance } from './model/ListLtsLogPolicyRespondBodyInstance';
import { ListLtsLogPolicyRespondBodyInstanceDatastore } from './model/ListLtsLogPolicyRespondBodyInstanceDatastore';
import { ListLtsLogPolicyRespondBodyInstanceLtsConfigs } from './model/ListLtsLogPolicyRespondBodyInstanceLtsConfigs';
import { ListLtsLogPolicyRespondBodyLtsConfigs } from './model/ListLtsLogPolicyRespondBodyLtsConfigs';
import { ListLtsSlowLogsRequest } from './model/ListLtsSlowLogsRequest';
import { ListLtsSlowLogsRequestBody } from './model/ListLtsSlowLogsRequestBody';
import { ListLtsSlowLogsResponse } from './model/ListLtsSlowLogsResponse';
import { ListProjectTagsRequest } from './model/ListProjectTagsRequest';
import { ListProjectTagsResponse } from './model/ListProjectTagsResponse';
import { ListRecycleInstancesRequest } from './model/ListRecycleInstancesRequest';
import { ListRecycleInstancesResponse } from './model/ListRecycleInstancesResponse';
import { ListRestoreCollectionsRequest } from './model/ListRestoreCollectionsRequest';
import { ListRestoreCollectionsResponse } from './model/ListRestoreCollectionsResponse';
import { ListRestoreDatabasesRequest } from './model/ListRestoreDatabasesRequest';
import { ListRestoreDatabasesResponse } from './model/ListRestoreDatabasesResponse';
import { ListRestoreTimesRequest } from './model/ListRestoreTimesRequest';
import { ListRestoreTimesResponse } from './model/ListRestoreTimesResponse';
import { ListRestoreTimesResponseBodyRestoreTime } from './model/ListRestoreTimesResponseBodyRestoreTime';
import { ListScheduledTasksRequest } from './model/ListScheduledTasksRequest';
import { ListScheduledTasksResponse } from './model/ListScheduledTasksResponse';
import { ListSessionsRequest } from './model/ListSessionsRequest';
import { ListSessionsResponse } from './model/ListSessionsResponse';
import { ListSlowLogsRequest } from './model/ListSlowLogsRequest';
import { ListSlowLogsResponse } from './model/ListSlowLogsResponse';
import { ListSslCertDownloadAddressRequest } from './model/ListSslCertDownloadAddressRequest';
import { ListSslCertDownloadAddressResponse } from './model/ListSslCertDownloadAddressResponse';
import { ListStorageTypeRequest } from './model/ListStorageTypeRequest';
import { ListStorageTypeResponse } from './model/ListStorageTypeResponse';
import { ListTasksRequest } from './model/ListTasksRequest';
import { ListTasksResponse } from './model/ListTasksResponse';
import { LtsLogType } from './model/LtsLogType';
import { MigrateAzRequest } from './model/MigrateAzRequest';
import { MigrateAzRequestBody } from './model/MigrateAzRequestBody';
import { MigrateAzResponse } from './model/MigrateAzResponse';
import { MongoUpdateReplSetV3RequestBody } from './model/MongoUpdateReplSetV3RequestBody';
import { NodeItem } from './model/NodeItem';
import { OpsWindowRequestBody } from './model/OpsWindowRequestBody';
import { ParamGroupInfoResult } from './model/ParamGroupInfoResult';
import { ProduceAuditlogLinksRequestBody } from './model/ProduceAuditlogLinksRequestBody';
import { QueryConnectionsResponse } from './model/QueryConnectionsResponse';
import { QueryInstanceResponse } from './model/QueryInstanceResponse';
import { QueryMatchItem } from './model/QueryMatchItem';
import { QueryProjectTagItem } from './model/QueryProjectTagItem';
import { QueryResourceTagItem } from './model/QueryResourceTagItem';
import { QuerySessionResponse } from './model/QuerySessionResponse';
import { QueryTagItem } from './model/QueryTagItem';
import { RecycleDatastore } from './model/RecycleDatastore';
import { RecycleInstance } from './model/RecycleInstance';
import { RecyclePolicy } from './model/RecyclePolicy';
import { RecyclePolicyRequestBody } from './model/RecyclePolicyRequestBody';
import { ReduceInstanceNodeRequestBody } from './model/ReduceInstanceNodeRequestBody';
import { ResetConfigurationRequest } from './model/ResetConfigurationRequest';
import { ResetConfigurationResponse } from './model/ResetConfigurationResponse';
import { ResetPasswordRequest } from './model/ResetPasswordRequest';
import { ResetPasswordRequestBody } from './model/ResetPasswordRequestBody';
import { ResetPasswordResponse } from './model/ResetPasswordResponse';
import { ResizeInstanceOption } from './model/ResizeInstanceOption';
import { ResizeInstanceRequest } from './model/ResizeInstanceRequest';
import { ResizeInstanceRequestBody } from './model/ResizeInstanceRequestBody';
import { ResizeInstanceResponse } from './model/ResizeInstanceResponse';
import { ResizeInstanceVolumeOption } from './model/ResizeInstanceVolumeOption';
import { ResizeInstanceVolumeRequest } from './model/ResizeInstanceVolumeRequest';
import { ResizeInstanceVolumeRequestBody } from './model/ResizeInstanceVolumeRequestBody';
import { ResizeInstanceVolumeResponse } from './model/ResizeInstanceVolumeResponse';
import { RestartInstanceRequest } from './model/RestartInstanceRequest';
import { RestartInstanceRequestBody } from './model/RestartInstanceRequestBody';
import { RestartInstanceResponse } from './model/RestartInstanceResponse';
import { RestoreInstanceFromCollectionRequest } from './model/RestoreInstanceFromCollectionRequest';
import { RestoreInstanceFromCollectionRequestBody } from './model/RestoreInstanceFromCollectionRequestBody';
import { RestoreInstanceFromCollectionRequestBodyCollections } from './model/RestoreInstanceFromCollectionRequestBodyCollections';
import { RestoreInstanceFromCollectionRequestBodyRestoreCollections } from './model/RestoreInstanceFromCollectionRequestBodyRestoreCollections';
import { RestoreInstanceFromCollectionResponse } from './model/RestoreInstanceFromCollectionResponse';
import { RestoreInstanceRequest } from './model/RestoreInstanceRequest';
import { RestoreInstanceRequestBody } from './model/RestoreInstanceRequestBody';
import { RestoreInstanceResponse } from './model/RestoreInstanceResponse';
import { RestoreNewInstanceConfigurationsOption } from './model/RestoreNewInstanceConfigurationsOption';
import { RestoreNewInstanceFlavorOption } from './model/RestoreNewInstanceFlavorOption';
import { RestoreNewInstanceRequest } from './model/RestoreNewInstanceRequest';
import { RestoreNewInstanceRequestBody } from './model/RestoreNewInstanceRequestBody';
import { RestoreNewInstanceResponse } from './model/RestoreNewInstanceResponse';
import { RestorePoint } from './model/RestorePoint';
import { RolesOption } from './model/RolesOption';
import { ScheduledTasksRspSchedules } from './model/ScheduledTasksRspSchedules';
import { SetAuditlogPolicyRequest } from './model/SetAuditlogPolicyRequest';
import { SetAuditlogPolicyRequestBody } from './model/SetAuditlogPolicyRequestBody';
import { SetAuditlogPolicyResponse } from './model/SetAuditlogPolicyResponse';
import { SetAutoEnlargePoliciesRequest } from './model/SetAutoEnlargePoliciesRequest';
import { SetAutoEnlargePoliciesRequestBody } from './model/SetAutoEnlargePoliciesRequestBody';
import { SetAutoEnlargePoliciesResponse } from './model/SetAutoEnlargePoliciesResponse';
import { SetBackupPolicyRequest } from './model/SetBackupPolicyRequest';
import { SetBackupPolicyRequestBody } from './model/SetBackupPolicyRequestBody';
import { SetBackupPolicyResponse } from './model/SetBackupPolicyResponse';
import { SetBalancerSwitchRequest } from './model/SetBalancerSwitchRequest';
import { SetBalancerSwitchResponse } from './model/SetBalancerSwitchResponse';
import { SetBalancerWindowRequest } from './model/SetBalancerWindowRequest';
import { SetBalancerWindowResponse } from './model/SetBalancerWindowResponse';
import { SetRecyclePolicyRequest } from './model/SetRecyclePolicyRequest';
import { SetRecyclePolicyResponse } from './model/SetRecyclePolicyResponse';
import { ShowApiVersionRequest } from './model/ShowApiVersionRequest';
import { ShowApiVersionResponse } from './model/ShowApiVersionResponse';
import { ShowAuditlogPolicyRequest } from './model/ShowAuditlogPolicyRequest';
import { ShowAuditlogPolicyResponse } from './model/ShowAuditlogPolicyResponse';
import { ShowAutoEnlargePolicyRequest } from './model/ShowAutoEnlargePolicyRequest';
import { ShowAutoEnlargePolicyResponse } from './model/ShowAutoEnlargePolicyResponse';
import { ShowBackupDownloadLinkRequest } from './model/ShowBackupDownloadLinkRequest';
import { ShowBackupDownloadLinkResponse } from './model/ShowBackupDownloadLinkResponse';
import { ShowBackupPolicyRequest } from './model/ShowBackupPolicyRequest';
import { ShowBackupPolicyResponse } from './model/ShowBackupPolicyResponse';
import { ShowClientNetworkRequest } from './model/ShowClientNetworkRequest';
import { ShowClientNetworkResponse } from './model/ShowClientNetworkResponse';
import { ShowConfigurationAppliedHistoryRequest } from './model/ShowConfigurationAppliedHistoryRequest';
import { ShowConfigurationAppliedHistoryResponse } from './model/ShowConfigurationAppliedHistoryResponse';
import { ShowConfigurationModifyHistoryRequest } from './model/ShowConfigurationModifyHistoryRequest';
import { ShowConfigurationModifyHistoryResponse } from './model/ShowConfigurationModifyHistoryResponse';
import { ShowConfigurationParameterRequest } from './model/ShowConfigurationParameterRequest';
import { ShowConfigurationParameterResponse } from './model/ShowConfigurationParameterResponse';
import { ShowConnectionStatisticsRequest } from './model/ShowConnectionStatisticsRequest';
import { ShowConnectionStatisticsResponse } from './model/ShowConnectionStatisticsResponse';
import { ShowDiskUsageRequest } from './model/ShowDiskUsageRequest';
import { ShowDiskUsageResponse } from './model/ShowDiskUsageResponse';
import { ShowEntityConfigurationRequest } from './model/ShowEntityConfigurationRequest';
import { ShowEntityConfigurationResponse } from './model/ShowEntityConfigurationResponse';
import { ShowInstanceConfigurationModifyHistoryRequest } from './model/ShowInstanceConfigurationModifyHistoryRequest';
import { ShowInstanceConfigurationModifyHistoryResponse } from './model/ShowInstanceConfigurationModifyHistoryResponse';
import { ShowJobDetailRequest } from './model/ShowJobDetailRequest';
import { ShowJobDetailResponse } from './model/ShowJobDetailResponse';
import { ShowKillOpRuleRuleListRequest } from './model/ShowKillOpRuleRuleListRequest';
import { ShowKillOpRuleRuleListResponse } from './model/ShowKillOpRuleRuleListResponse';
import { ShowQuotasRequest } from './model/ShowQuotasRequest';
import { ShowQuotasResponse } from './model/ShowQuotasResponse';
import { ShowRecyclePolicyRequest } from './model/ShowRecyclePolicyRequest';
import { ShowRecyclePolicyResponse } from './model/ShowRecyclePolicyResponse';
import { ShowReplSetNameRequest } from './model/ShowReplSetNameRequest';
import { ShowReplSetNameResponse } from './model/ShowReplSetNameResponse';
import { ShowResourcesDetailResponseBody } from './model/ShowResourcesDetailResponseBody';
import { ShowResourcesListResponseBody } from './model/ShowResourcesListResponseBody';
import { ShowSecondLevelMonitoringStatusRequest } from './model/ShowSecondLevelMonitoringStatusRequest';
import { ShowSecondLevelMonitoringStatusResponse } from './model/ShowSecondLevelMonitoringStatusResponse';
import { ShowShardingBalancerRequest } from './model/ShowShardingBalancerRequest';
import { ShowShardingBalancerResponse } from './model/ShowShardingBalancerResponse';
import { ShowSlowlogDesensitizationSwitchRequest } from './model/ShowSlowlogDesensitizationSwitchRequest';
import { ShowSlowlogDesensitizationSwitchResponse } from './model/ShowSlowlogDesensitizationSwitchResponse';
import { ShowUpgradeDurationRequest } from './model/ShowUpgradeDurationRequest';
import { ShowUpgradeDurationResponse } from './model/ShowUpgradeDurationResponse';
import { ShrinkInstanceNodesRequest } from './model/ShrinkInstanceNodesRequest';
import { ShrinkInstanceNodesResponse } from './model/ShrinkInstanceNodesResponse';
import { SlowLogDetail } from './model/SlowLogDetail';
import { SlowlogResult } from './model/SlowlogResult';
import { Source } from './model/Source';
import { StopBackupRequest } from './model/StopBackupRequest';
import { StopBackupRequestBody } from './model/StopBackupRequestBody';
import { StopBackupResponse } from './model/StopBackupResponse';
import { Storage } from './model/Storage';
import { SwitchConfigurationRequest } from './model/SwitchConfigurationRequest';
import { SwitchConfigurationResponse } from './model/SwitchConfigurationResponse';
import { SwitchInstancePrimaryRequest } from './model/SwitchInstancePrimaryRequest';
import { SwitchInstancePrimaryResponse } from './model/SwitchInstancePrimaryResponse';
import { SwitchSecondLevelMonitoringRequest } from './model/SwitchSecondLevelMonitoringRequest';
import { SwitchSecondLevelMonitoringRequestBody } from './model/SwitchSecondLevelMonitoringRequestBody';
import { SwitchSecondLevelMonitoringResponse } from './model/SwitchSecondLevelMonitoringResponse';
import { SwitchSlowlogDesensitizationRequest } from './model/SwitchSlowlogDesensitizationRequest';
import { SwitchSlowlogDesensitizationResponse } from './model/SwitchSlowlogDesensitizationResponse';
import { SwitchSslRequest } from './model/SwitchSslRequest';
import { SwitchSslRequestBody } from './model/SwitchSslRequestBody';
import { SwitchSslResponse } from './model/SwitchSslResponse';
import { SwitchoverReplicaSetRequest } from './model/SwitchoverReplicaSetRequest';
import { SwitchoverReplicaSetResponse } from './model/SwitchoverReplicaSetResponse';
import { TagItem } from './model/TagItem';
import { TagResponse } from './model/TagResponse';
import { TagWithKeyValue } from './model/TagWithKeyValue';
import { Target } from './model/Target';
import { UpdateClientNetworkRequest } from './model/UpdateClientNetworkRequest';
import { UpdateClientNetworkResponse } from './model/UpdateClientNetworkResponse';
import { UpdateConfigurationParameterRequest } from './model/UpdateConfigurationParameterRequest';
import { UpdateConfigurationParameterRequestBody } from './model/UpdateConfigurationParameterRequestBody';
import { UpdateConfigurationParameterResponse } from './model/UpdateConfigurationParameterResponse';
import { UpdateConfigurationParameterResult } from './model/UpdateConfigurationParameterResult';
import { UpdateEntityConfigurationRequest } from './model/UpdateEntityConfigurationRequest';
import { UpdateEntityConfigurationResponse } from './model/UpdateEntityConfigurationResponse';
import { UpdateInstanceNameRequest } from './model/UpdateInstanceNameRequest';
import { UpdateInstanceNameResponse } from './model/UpdateInstanceNameResponse';
import { UpdateInstancePortRequest } from './model/UpdateInstancePortRequest';
import { UpdateInstancePortResponse } from './model/UpdateInstancePortResponse';
import { UpdateInstanceRemarkRequest } from './model/UpdateInstanceRemarkRequest';
import { UpdateInstanceRemarkRequestBody } from './model/UpdateInstanceRemarkRequestBody';
import { UpdateInstanceRemarkResponse } from './model/UpdateInstanceRemarkResponse';
import { UpdateKillOpRuleRequest } from './model/UpdateKillOpRuleRequest';
import { UpdateKillOpRuleRequestBody } from './model/UpdateKillOpRuleRequestBody';
import { UpdateKillOpRuleResponse } from './model/UpdateKillOpRuleResponse';
import { UpdateLtsConfigRequest } from './model/UpdateLtsConfigRequest';
import { UpdateLtsConfigRequestBody } from './model/UpdateLtsConfigRequestBody';
import { UpdateLtsConfigRequestBodyLtsConfigs } from './model/UpdateLtsConfigRequestBodyLtsConfigs';
import { UpdateLtsConfigResponse } from './model/UpdateLtsConfigResponse';
import { UpdateNameRequestBody } from './model/UpdateNameRequestBody';
import { UpdatePortRequestBody } from './model/UpdatePortRequestBody';
import { UpdateReplSetNameRequest } from './model/UpdateReplSetNameRequest';
import { UpdateReplSetNameResponse } from './model/UpdateReplSetNameResponse';
import { UpdateSecurityGroupRequest } from './model/UpdateSecurityGroupRequest';
import { UpdateSecurityGroupRequestBody } from './model/UpdateSecurityGroupRequestBody';
import { UpdateSecurityGroupResponse } from './model/UpdateSecurityGroupResponse';
import { UpgradeDatabaseVersionRequest } from './model/UpgradeDatabaseVersionRequest';
import { UpgradeDatabaseVersionRequestBody } from './model/UpgradeDatabaseVersionRequestBody';
import { UpgradeDatabaseVersionResponse } from './model/UpgradeDatabaseVersionResponse';
import { UpgradeResult } from './model/UpgradeResult';
import { ValidateConfigurationNameRequest } from './model/ValidateConfigurationNameRequest';
import { ValidateConfigurationNameResponse } from './model/ValidateConfigurationNameResponse';
import { Volume } from './model/Volume';
import { WeakPasswordCheckRequestBody } from './model/WeakPasswordCheckRequestBody';

export class DdsClient {
    public static newBuilder(): ClientBuilder<DdsClient> {
            let client = new ClientBuilder<DdsClient>(newClient);
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
     * DDS副本集实例新增只读节点。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 实例新增只读节点
     * @param {string} instanceId 实例ID。
     * @param {AddReadonlyNodeRequestBody} addReadonlyNodeRequestBody 请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public addReadonlyNode(addReadonlyNodeRequest?: AddReadonlyNodeRequest): Promise<AddReadonlyNodeResponse> {
        const options = ParamCreater().addReadonlyNode(addReadonlyNodeRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 扩容指定集群实例的节点数量。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 扩容集群实例的节点数量
     * @param {string} instanceId 实例ID，可以调用“查询实例列表和详情”接口获取。如果未申请实例，可以调用“创建实例”接口创建。
     * @param {EnlargeInstanceRequestBody} enlargeInstanceRequestBody 请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public addShardingNode(addShardingNodeRequest?: AddShardingNodeRequest): Promise<AddShardingNodeResponse> {
        const options = ParamCreater().addShardingNode(addShardingNodeRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 为实例下的节点绑定弹性公网IP。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 绑定弹性公网IP
     * @param {string} nodeId 需要绑定公网IP的节点ID。集群实例选择mongos节点，副本集实例选择primary或者secondary节点。
     * @param {AttachEipRequestBody} attachEipRequestBody 请求体。
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
     * 修改实例的内网地址
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改实例内网地址
     * @param {string} instanceId 实例ID，可以调用“查询实例列表和详情”接口获取。如果未申请实例，可以调用“创建实例”接口创建。
     * @param {AttachInternalIpRequestBody} attachInternalIpRequestBody 请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public attachInternalIp(attachInternalIpRequest?: AttachInternalIpRequest): Promise<AttachInternalIpResponse> {
        const options = ParamCreater().attachInternalIp(attachInternalIpRequest);

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
     * @param {BatchDeleteBackupRequestBody} batchDeleteBackupRequestBody 请求体。
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchDeleteBackup(batchDeleteBackupRequest?: BatchDeleteBackupRequest): Promise<BatchDeleteBackupResponse> {
        const options = ParamCreater().batchDeleteBackup(batchDeleteBackupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量添加或删除指定实例的标签。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量添加或删除资源标签
     * @param {string} instanceId 实例ID，可以调用“查询实例列表和详情”接口获取。如果未申请实例，可以调用“创建实例”接口创建。
     * @param {BatchOperateInstanceTagRequestBody} batchOperateInstanceTagRequestBody 请求体。
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
     * 解绑实例下节点已经绑定的弹性公网IP。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 解绑弹性公网IP
     * @param {string} nodeId 节点ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public cancelEip(cancelEipRequest?: CancelEipRequest): Promise<CancelEipResponse> {
        const options = ParamCreater().cancelEip(cancelEipRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据任务ID取消定时任务。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 取消定时任务
     * @param {string} jobId 任务ID，取值为定时任务列表。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public cancelScheduledTask(cancelScheduledTaskRequest?: CancelScheduledTaskRequest): Promise<CancelScheduledTaskResponse> {
        const options = ParamCreater().cancelScheduledTask(cancelScheduledTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改用户允许启动某项对数据库实例运行有影响的任务的时间范围，例如操作系统升级和数据库软件版本升级的时间窗。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 设置可维护时间段
     * @param {string} instanceId 实例ID。
     * @param {OpsWindowRequestBody} opsWindowRequestBody 请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public changeOpsWindow(changeOpsWindowRequest?: ChangeOpsWindowRequest): Promise<ChangeOpsWindowResponse> {
        const options = ParamCreater().changeOpsWindow(changeOpsWindowRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 检查数据库密码。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 检查数据库密码
     * @param {string} instanceId 实例ID，可以调用“查询实例列表和详情”接口获取。如果未申请实例，可以调用“创建实例”接口创建。
     * @param {CheckPasswordRequestBody} checkPasswordRequestBody 请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public checkPassword(checkPasswordRequest?: CheckPasswordRequest): Promise<CheckPasswordResponse> {
        const options = ParamCreater().checkPassword(checkPasswordRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 检查弱密码
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 检查弱密码
     * @param {WeakPasswordCheckRequestBody} weakPasswordCheckRequestBody 请求体。
     * @param {string} [xLanguage] 语言。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public checkWeakPassword(checkWeakPasswordRequest?: CheckWeakPasswordRequest): Promise<CheckWeakPasswordResponse> {
        const options = ParamCreater().checkWeakPassword(checkWeakPasswordRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 比较两个参数模板之间的差异。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 参数模板比较
     * @param {DiffConfigurationRequest} diffConfigurationRequest 参数模板比较请求。
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
     * 复制参数模板。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 复制参数模板
     * @param {string} configId 被复制的参数模板ID。
     * @param {CopyConfigurationRequestBody} copyConfigurationRequestBody 复制参数模板请求。
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
     * @param {CreateConfigurationRequestBody} createConfigurationRequestBody： 请求体。
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
     * 创建数据库角色。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建数据库角色
     * @param {string} instanceId 实例ID，可以调用“查询实例列表和详情”接口获取。如果未申请实例，可以调用“创建实例”接口创建。
     * @param {CreateDatabaseRoleRequestBody} createDatabaseRoleRequestBody 请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createDatabaseRole(createDatabaseRoleRequest?: CreateDatabaseRoleRequest): Promise<CreateDatabaseRoleResponse> {
        const options = ParamCreater().createDatabaseRole(createDatabaseRoleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建数据库用户。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建数据库用户
     * @param {string} instanceId 实例ID，可以调用“查询实例列表和详情”接口获取。如果未申请实例，可以调用“创建实例”接口创建。
     * @param {CreateDatabaseUserRequestBody} createDatabaseUserRequestBody： 请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createDatabaseUser(createDatabaseUserRequest?: CreateDatabaseUserRequest): Promise<CreateDatabaseUserResponse> {
        const options = ParamCreater().createDatabaseUser(createDatabaseUserRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建文档数据库实例，包括集群实例、副本集实例、以及单节点实例。
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
     * 创建集群的Shard/Config IP
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建集群的Shard/Config IP
     * @param {string} instanceId 实例ID，可以调用“查询实例列表和详情”接口获取。如果未申请实例，可以调用“创建实例”接口创建。
     * @param {CreateIpRequestBody} createIpRequestBody 请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createIp(createIpRequest?: CreateIpRequest): Promise<CreateIpResponse> {
        const options = ParamCreater().createIp(createIpRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建killOp规则。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建killOp规则
     * @param {string} instanceId 实例ID，可以调用“[查询实例列表和详情](x-wc://file&#x3D;zh-cn_topic_0000001369935045.xml)”接口获取。如果未申请实例，可以调用“[创建实例](x-wc://file&#x3D;zh-cn_topic_0000001369734929.xml)”接口创建。
     * @param {CreateKillOpRuleRequestBody} createKillOpRuleRequestBody killOp规则参数。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createKillOpRule(createKillOpRuleRequest?: CreateKillOpRuleRequest): Promise<CreateKillOpRuleResponse> {
        const options = ParamCreater().createKillOpRule(createKillOpRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建数据库实例的手动备份。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建手动备份
     * @param {CreateManualBackupRequestBody} createManualBackupRequestBody 请求体。
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
     * 删除审计日志
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除审计日志
     * @param {string} instanceId 实例ID，可以调用“查询实例列表和详情”接口获取。如果未申请实例，可以调用“创建实例”接口创建
     * @param {DeleteAuditLogRequestBody} deleteAuditLogRequestBody 请求体。
     * @param {string} [xLanguage] 语言。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteAuditLog(deleteAuditLogRequest?: DeleteAuditLogRequest): Promise<DeleteAuditLogResponse> {
        const options = ParamCreater().deleteAuditLog(deleteAuditLogRequest);

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
     * 删除数据库角色。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除数据库角色
     * @param {string} instanceId 实例ID，可以调用“查询实例列表和详情”接口获取。如果未申请实例，可以调用“创建实例”接口创建。
     * @param {DeleteDatabaseRoleRequestBody} deleteDatabaseRoleRequestBody 请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteDatabaseRole(deleteDatabaseRoleRequest?: DeleteDatabaseRoleRequest): Promise<DeleteDatabaseRoleResponse> {
        const options = ParamCreater().deleteDatabaseRole(deleteDatabaseRoleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除数据库用户。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除数据库用户
     * @param {string} instanceId 实例ID，可以调用“查询实例列表和详情”接口获取。如果未申请实例，可以调用“创建实例”接口创建。
     * @param {DeleteDatabaseUserRequestBody} deleteDatabaseUserRequestBody： 请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteDatabaseUser(deleteDatabaseUserRequest?: DeleteDatabaseUserRequest): Promise<DeleteDatabaseUserResponse> {
        const options = ParamCreater().deleteDatabaseUser(deleteDatabaseUserRequest);

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
     * @param {string} instanceId 实例ID，可以调用“查询实例列表和详情”接口获取。如果未申请实例，可以调用“创建实例”接口创建。
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
     * 删除killOp规则。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除killOp规则
     * @param {string} instanceId 实例ID，可以调用“[查询实例列表和详情](x-wc://file&#x3D;zh-cn_topic_0000001369935045.xml)”接口获取。如果未申请实例，可以调用“[创建实例](x-wc://file&#x3D;zh-cn_topic_0000001369734929.xml)”接口创建。
     * @param {DeleteKillOpRuleListRequestBody} deleteKillOpRuleListRequestBody killOp规则ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteKillOpRuleList(deleteKillOpRuleListRequest?: DeleteKillOpRuleListRequest): Promise<DeleteKillOpRuleListResponse> {
        const options = ParamCreater().deleteKillOpRuleList(deleteKillOpRuleListRequest);

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
     * @param {DeleteLtsConfigRequestBody} deleteLtsConfigRequestBody 请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteLtsConfig(deleteLtsConfigRequest?: DeleteLtsConfigRequest): Promise<DeleteLtsConfigResponse> {
        const options = ParamCreater().deleteLtsConfig(deleteLtsConfigRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除数据库实例的手动备份。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除手动备份
     * @param {string} backupId 备份ID。
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
     * 当集群实例需要缩减mongos节点时，需要调用此API。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除mongos节点
     * @param {string} instanceId 实例ID。
     * @param {DeleteMongosNodeRequestBody} [deleteMongosNodeRequestBody] 准备删除的mongos节点。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteMongosNode(deleteMongosNodeRequest?: DeleteMongosNodeRequest): Promise<DeleteMongosNodeResponse> {
        const options = ParamCreater().deleteMongosNode(deleteMongosNodeRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 当副本集添加了只读节点后，需要删除对应的只读节点需要调用此API。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除只读节点
     * @param {string} instanceId 实例ID。
     * @param {DeleteReadonlyNodeRequestBody} [deleteReadonlyNodeRequestBody] 准备删除的只读节点。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteReadonlyNode(deleteReadonlyNodeRequest?: DeleteReadonlyNodeRequest): Promise<DeleteReadonlyNodeResponse> {
        const options = ParamCreater().deleteReadonlyNode(deleteReadonlyNodeRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 终结实例节点会话。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 终结实例节点会话
     * @param {string} nodeId 节点ID。允许查询的节点如下： 集群下面的 mongos节点以及 副本集、单节点实例下面的所有节点。
     * @param {DeleteSessionRequestBody} deleteSessionRequestBody 请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteSession(deleteSessionRequest?: DeleteSessionRequest): Promise<DeleteSessionResponse> {
        const options = ParamCreater().deleteSession(deleteSessionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取错误日志下载链接。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取错误日志下载链接
     * @param {string} instanceId 实例ID，可以调用“查询实例列表和详情”接口获取。如果未申请实例，可以调用“创建实例”接口创建。
     * @param {DownloadErrorlogRequestBody} downloadErrorlogRequestBody： 请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public downloadErrorlog(downloadErrorlogRequest?: DownloadErrorlogRequest): Promise<DownloadErrorlogResponse> {
        const options = ParamCreater().downloadErrorlog(downloadErrorlogRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取慢日志下载链接。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取慢日志下载链接
     * @param {string} instanceId 实例ID，可以调用“查询实例列表和详情”接口获取。如果未申请实例，可以调用“创建实例”接口创建。
     * @param {DownloadSlowlogRequestBody} downloadSlowlogRequestBody： 请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public downloadSlowlog(downloadSlowlogRequest?: DownloadSlowlogRequest): Promise<DownloadSlowlogResponse> {
        const options = ParamCreater().downloadSlowlog(downloadSlowlogRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 扩容指定副本集实例的节点数量
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 扩容副本集实例的节点数量
     * @param {string} instanceId 实例ID，可以调用“查询实例列表和详情”接口获取。如果未申请实例，可以调用“创建实例”接口创建。
     * @param {EnlargeReplicasetNodeRequestBody} enlargeReplicasetNodeRequestBody 请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public expandReplicasetNode(expandReplicasetNodeRequest?: ExpandReplicasetNodeRequest): Promise<ExpandReplicasetNodeResponse> {
        const options = ParamCreater().expandReplicasetNode(expandReplicasetNodeRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定参数模板可被应用的实例。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询可应用的实例
     * @param {string} configId 参数模板ID。
     * @param {number} [offset] 索引位置，偏移量。从第一条数据偏移offset条数据后开始查询，默认为0（偏移0条数据，表示从第一条数据开始查询），必须为数字，不能为负数。
     * @param {number} [limit] 查询记录数。默认为100，不能为负数，最小值为1，最大值为100。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAppliedInstances(listAppliedInstancesRequest?: ListAppliedInstancesRequest): Promise<ListAppliedInstancesResponse> {
        const options = ParamCreater().listAppliedInstances(listAppliedInstancesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取审计日志下载链接。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取审计日志下载链接
     * @param {string} instanceId 实例ID，可以调用“查询实例列表和详情”接口获取。如果未申请实例，可以调用“创建实例”接口创建。
     * @param {ProduceAuditlogLinksRequestBody} produceAuditlogLinksRequestBody 请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAuditlogLinks(listAuditlogLinksRequest?: ListAuditlogLinksRequest): Promise<ListAuditlogLinksResponse> {
        const options = ParamCreater().listAuditlogLinks(listAuditlogLinksRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取审计日志列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取审计日志列表
     * @param {string} instanceId 实例ID，可以调用“查询实例列表和详情”接口获取。如果未申请实例，可以调用“创建实例”接口创建。
     * @param {string} startTime 查询开始时间，格式为“yyyy-mm-ddThh:mm:ssZ”。其中，T指某个时间的开始；Z指时区偏移量，例如北京时间偏移显示为+0800。
     * @param {string} endTime 查询结束时间，格式为“yyyy-mm-ddThh:mm:ssZ”，且大于查询开始时间，时间跨度不超过30天。其中，T指某个时间的开始，Z指时区偏移量，例如北京时间偏移显示为+0800。
     * @param {string} [xLanguage] 语言。
     * @param {string} [nodeId] 查询审计日志的节点ID。不传值，默认查询所有的节点,集群实例审计日志分布在mongos节点上。
     * @param {number} [offset] 索引位置，偏移量。从第一条数据偏移offset条数据后开始查询，默认为0（偏移0条数据，表示从第一条数据开始查询），必须为数字，不能为负数。
     * @param {number} [limit] 查询记录数。取值范围：1~100。不传该参数时，默认查询前100条实例信息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAuditlogs(listAuditlogsRequest?: ListAuditlogsRequest): Promise<ListAuditlogsResponse> {
        const options = ParamCreater().listAuditlogs(listAuditlogsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询实例可迁移到的可用区。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询实例可迁移到的可用区
     * @param {string} instanceId 实例ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAz2Migrate(listAz2MigrateRequest?: ListAz2MigrateRequest): Promise<ListAz2MigrateResponse> {
        const options = ParamCreater().listAz2Migrate(listAz2MigrateRequest);

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
     * @param {string} [instanceId] 实例ID，可以调用“查询实例列表和详情”接口获取。如果未申请实例，可以调用“创建实例”接口创建。
     * @param {string} [backupId] 备份ID。 - 当该字段传入的备份ID归属为自动增量备份时，实例ID必传。
     * @param {'Auto' | 'Manual' | 'Incremental'} [backupType] 备份类型。 - 取值为“Auto”，表示自动全量备份。 - 取值为“Manual”，表示手动全量备份。 - 取值为“Incremental”，表示自动增量备份。 - 当该字段未传入值时，默认只查询所有的全量备份，包括自动全备备份和手动全量备份。当该字段取值为“Incremental”时，实例ID必传。
     * @param {number} [offset] 索引位置偏移量，表示从指定project ID下最新的实例创建时间开始，按时间的先后顺序偏移offset条数据后查询对应的实例信息。 取值大于或等于0。不传该参数时，查询偏移量默认为0，表示从最新的实例创建时间对应的实例开始查询。
     * @param {number} [limit] 查询备份个数上限值。 取值范围：1~100。不传该参数时，默认查询前100条实例信息。
     * @param {string} [beginTime] 查询开始时间，格式为“yyyy-mm-dd hh:mm:ss”。该时间为UTC时间。 “end_time”有值时，“begin_time”必选。
     * @param {string} [endTime] 查询结束时间，格式为“yyyy-mm-ddThh:mm:ssZ”，且大于查询开始时间。其中，T指某个时间的开始；Z指时区偏移量，例如北京时间偏移显示为+0800。 “begin_time”有值时，“end_time”必选。
     * @param {'Sharding' | 'ReplicaSet' | 'Single'} [mode] 实例模式。 取值： - Sharding - ReplicaSet - Single
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
     * 获取参数模板列表，包括DDS数据库的所有默认参数模板和用户创建的参数模板。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取参数模板列表
     * @param {number} [offset] 索引位置，偏移量。从第一条数据偏移offset条数据后开始查询，默认为0（偏移0条数据，表示从第一条数据开始查询），必须为数字，不能为负数。
     * @param {number} [limit] 每页显示的数量，默认是100。
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
     * 查询数据库角色列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询数据库角色列表
     * @param {string} instanceId 实例ID，可以调用“查询实例列表和详情”接口获取。如果未申请实例，可以调用“创建实例”接口创建。
     * @param {string} [roleName] 角色名称。 - 长度为1~64位，可以包含大写字母（A~Z）、小写字母（a~z）、数字（0~9）、中划线、下划线和点。
     * @param {string} [dbName] 数据库名称，默认为admin。 - 长度为1~64位，可以包含大写字母（A~Z）、小写字母（a~z）、数字（0~9）、下划线。
     * @param {number} [offset] 索引位置偏移量。 取值大于或等于0。不传该参数时，查询偏移量默认为0。
     * @param {number} [limit] 查询实例个数上限值。 取值范围：1~100。不传该参数时，默认查询前100条实例信息。
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
     * 查询数据库用户列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询数据库用户列表
     * @param {string} instanceId 实例ID，可以调用“查询实例列表和详情”接口获取。如果未申请实例，可以调用“创建实例”接口创建。
     * @param {string} [userName] 用户名称。 - 长度为1~64位，可以包含大写字母（A~Z）、小写字母（a~z）、数字（0~9）、中划线、下划线和点。
     * @param {string} [dbName] 数据库名称，默认为admin。 - 长度为1~64位，可以包含大写字母（A~Z）、小写字母（a~z）、数字（0~9）、下划线。
     * @param {number} [offset] 索引位置偏移量。 取值大于或等于0。不传该参数时，查询偏移量默认为0。
     * @param {number} [limit] 查询实例个数上限值。 取值范围：1~100。不传该参数时，默认查询前100条实例信息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listDatabaseUsers(listDatabaseUsersRequest?: ListDatabaseUsersRequest): Promise<ListDatabaseUsersResponse> {
        const options = ParamCreater().listDatabaseUsers(listDatabaseUsersRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询数据库列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询数据库列表
     * @param {string} instanceId 实例ID，可以调用“查询实例列表和详情”接口获取。如果未申请实例，可以调用“创建实例”接口创建。
     * @param {number} [offset] 索引位置偏移量。 取值大于或等于0。不传该参数时，查询偏移量默认为0。
     * @param {number} [limit] 查询实例个数上限值。 取值范围：1~100。不传该参数时，默认查询前100条实例信息。
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
     * 查询指定实例类型的数据库版本信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询数据库版本信息
     * @param {'DDS-Community' | 'DDS-Enhanced'} datastoreName 数据库版本类型。取值为“DDS-Community”。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listDatastoreVersions(listDatastoreVersionsRequest?: ListDatastoreVersionsRequest): Promise<ListDatastoreVersionsResponse> {
        const options = ParamCreater().listDatastoreVersions(listDatastoreVersionsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询数据库错误信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询数据库错误日志
     * @param {string} instanceId 实例ID，可以调用“查询实例列表和详情”接口获取。如果未申请实例，可以调用“创建实例”接口创建。
     * @param {string} startDate 开始时间，格式为“yyyy-mm-ddThh:mm:ssZ”。 其中，T指某个时间的开始；Z指时区偏移量，例如北京时间偏移显示为+0800。
     * @param {string} endDate 结束时间，格式为“yyyy-mm-ddThh:mm:ssZ”。 其中，T指某个时间的开始；Z指时区偏移量，例如北京时间偏移显示为+0800。只能查询当前时间前一个月内的慢日志。注：结束时间不能晚于当前时间。
     * @param {string} [nodeId] 节点ID，取空值，表示查询实例下所有允许查询的节点。 使用请参考《DDS API参考》的“查询实例列表和详情”响应消息表“nodes 数据结构说明”的“id”。允许查询的节点如下： - 集群实例下面的 mongos、shard、config节点 - 副本集、单节点实例下面的所有节点
     * @param {'WARNING' | 'ERROR'} [type] 语句类型，取空值，表示查询所有语句类型，也可指定如下日志类型： - WARNING - ERROR
     * @param {number} [offset] 索引位置，偏移量。取值范围为 [0, 1999]。 从第一条数据偏移offset条数据后开始查询，默认为0（偏移0条数据，表示从第一条数据开始查询），必须为数字，不能为负数。
     * @param {number} [limit] 查询记录数。取值范围[1, 100]，默认10 （表示默认返回10条数据）。 注意： limit 与 offset 的和需要满足 &lt;&#x3D; 2000的条件。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listErrorLogs(listErrorLogsRequest?: ListErrorLogsRequest): Promise<ListErrorLogsResponse> {
        const options = ParamCreater().listErrorLogs(listErrorLogsRequest);

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
     * @param {'DDS-Community' | 'DDS-Enhanced'} [engineName] 数据库版本类型。取值为“DDS-Community”。
     * @param {string} [engineVersion] 数据库版本号。
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
     * @summary 查询所有实例规格信息
     * @param {string} [region] 实例所在区域。
     * @param {'DDS-Community' | 'DDS-Enhanced'} [engineName] 数据库版本类型。取值为“DDS-Community”。
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
     * 查询指定实例的标签信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询资源标签
     * @param {string} instanceId 实例ID，可以调用“查询实例列表和详情”接口获取。如果未申请实例，可以调用“创建实例”接口创建。
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
     * 根据指定条件查询实例列表和详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询实例列表和详情
     * @param {string} [id] 实例ID，可以调用“查询实例列表和详情”接口获取。如果未申请实例，可以调用“创建实例”接口创建。
     * @param {string} [name] 实例名称。 如果name以“*”起始，表示按照“*”后面的值模糊匹配，否则，按照实际填写的name精确匹配查询。 - “*”为系统保留字符，不能只传入该字符。
     * @param {'Sharding' | 'ReplicaSet' | 'Single'} [mode] 实例类型。 - 取值为“Sharding”，表示集群实例。 - 取值为“ReplicaSet”，表示副本集实例。 - 取值为“Single”，表示单节点实例。
     * @param {'DDS-Community' | 'DDS-Enhanced'} [datastoreType] 数据库版本类型。取值为“DDS-Community”。
     * @param {string} [vpcId] 虚拟私有云ID。可登录虚拟私有云控制台界面，获取DDS实例所在虚拟私有云的ID。
     * @param {string} [subnetId] 子网的网络ID。可登录虚拟私有云控制台界面，获取DDS实例所在虚拟私有云下子网的网络ID。
     * @param {number} [offset] 索引位置偏移量，表示从指定project ID下最新的实例创建时间开始，按时间的先后顺序偏移offset条数据后查询对应的实例信息。 取值大于或等于0。不传该参数时，查询偏移量默认为0，表示从最新的实例创建时间对应的实例开始查询。
     * @param {number} [limit] 查询实例个数上限值。 取值范围：1~100。不传该参数时，默认查询前100条实例信息。
     * @param {string} [tags] 根据实例标签键值对进行查询。{key}表示标签键，{value}表示标签值，最多包含20组。key不可以为空或重复，value可以为空。如果同时使用多个标签键值对进行查询，中间使用逗号分隔开，表示查询同时包含指定标签键值对的实例。
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
    public listInstancesByTags(listInstancesByTagsRequest?: ListInstancesByTagsRequest): Promise<ListInstancesByTagsResponse> {
        const options = ParamCreater().listInstancesByTags(listInstancesByTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询LTS日志配置信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询LTS日志配置信息
     * @param {number} [offset] 索引位置，偏移量。从第一条数据偏移offset条数据后开始查询，默认为0（偏移0条数据，表示从第一条数据开始查询），必须为数字，不能为负数。
     * @param {number} [limit] 查询记录数。取值范围：0~50。不传该参数时，默认查询前50条实例的云服务日志配置信息。
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
     * 查询数据库错误日志信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询数据库错误日志
     * @param {string} instanceId 实例ID，可以调用“[查询实例列表和详情](x-wc://file&#x3D;zh-cn_topic_0000001369935045.xml)”接口获取。如果未申请实例，可以调用“[创建实例](x-wc://file&#x3D;zh-cn_topic_0000001369734929.xml)”接口创建。
     * @param {ListLtsErrorLogsRequestBody} listLtsErrorLogsRequestBody 请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listLtsErrorLogs(listLtsErrorLogsRequest?: ListLtsErrorLogsRequest): Promise<ListLtsErrorLogsResponse> {
        const options = ParamCreater().listLtsErrorLogs(listLtsErrorLogsRequest);

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
     * @param {string} instanceId 实例ID，可以调用“查询实例列表和详情”接口获取。如果未申请实例，可以调用“创建实例”接口创建。
     * @param {ListLtsSlowLogsRequestBody} listLtsSlowLogsRequestBody： 请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listLtsSlowLogs(listLtsSlowLogsRequest?: ListLtsSlowLogsRequest): Promise<ListLtsSlowLogsResponse> {
        const options = ParamCreater().listLtsSlowLogs(listLtsSlowLogsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定project ID下实例的所有标签集合。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询项目标签
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listProjectTags(listProjectTagsRequest?: ListProjectTagsRequest): Promise<ListProjectTagsResponse> {
        const options = ParamCreater().listProjectTags();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询回收站实例列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询回收站实例列表
     * @param {string} [xLanguage] 语言。
     * @param {number} [offset] 索引位置，偏移量。从第一条数据偏移offset条数据后开始查询，默认为0（偏移0条数据，表示从第一条数据开始查询），必须为数字，不能为负数。
     * @param {number} [limit] 每页显示的数量，默认是100。
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
     * 获取可恢复的数据库集合列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取可恢复的数据库集合列表
     * @param {string} instanceId 实例ID，可以调用“查询实例列表和详情”接口获取。如果未申请实例，可以调用“创建实例”接口创建。
     * @param {string} dbName 数据库名称。
     * @param {string} restoreTime 恢复时间点。UNIX时间戳格式，单位是毫秒，时区是UTC。
     * @param {string} [xLanguage] 语言。
     * @param {number} [offset] 索引位置偏移量。取值大于或等于0。不传该参数时，查询偏移量默认为0。
     * @param {number} [limit] 查询个数上限值。取值范围：1~100。不传该参数时，默认查询前100条信息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listRestoreCollections(listRestoreCollectionsRequest?: ListRestoreCollectionsRequest): Promise<ListRestoreCollectionsResponse> {
        const options = ParamCreater().listRestoreCollections(listRestoreCollectionsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取可恢复的数据库列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取可恢复的数据库列表
     * @param {string} instanceId 实例ID，可以调用“查询实例列表和详情”接口获取。如果未申请实例，可以调用“创建实例”接口创建。
     * @param {string} restoreTime 恢复时间点。UNIX时间戳格式，单位是毫秒，时区是UTC。
     * @param {string} [xLanguage] 语言。
     * @param {number} [offset] 索引位置偏移量。取值大于或等于0。不传该参数时，查询偏移量默认为0。
     * @param {number} [limit] 查询个数上限值。取值范围：1~100。不传该参数时，默认查询前100条信息。
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
     * 查询实例的可恢复时间段。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询可恢复的时间段
     * @param {string} instanceId 实例ID，可以调用“查询实例列表和详情”接口获取。如果未申请实例，可以调用“创建实例”接口创建。
     * @param {string} date 所需查询的日期，为yyyy-mm-dd字符串格式，时区为UTC。
     * @param {string} [xLanguage] 语言。
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
     * 根据指定条件查询定时任务列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询定时任务
     * @param {string} [jobName] 任务名称，默认为空。对应取值如下：  \&quot;RESIZE_FLAVOR\&quot;：变更实例的CPU和内存规格
     * @param {string} [jobStatus] 任务执行状态，默认为空。 取值：  值为\&quot;Pending\&quot;，表示任务未执行。  值为\&quot;Running\&quot;，表示任务正在执行。  值为\&quot;Completed\&quot;，表示任务执行成功。  值为\&quot;Failed\&quot;，表示任务执行失败。  值为\&quot;Canceled\&quot;，表示任务取消执行。
     * @param {string} [instanceId] 实例ID，不传该值默认查所有符合条件的实例。
     * @param {string} [startTime] 任务创建起始时间，格式为\&quot;yyyy-mm-ddThh:mm:ssZ\&quot;。 其中，T指某个时间的开始；Z指时区偏移量，例如偏移1个小时显示为+0100，不传默认为当前时间前七天。
     * @param {string} [endTime] 任务创建结束时间，格式为\&quot;yyyy-mm-ddThh:mm:ssZ\&quot;。 其中，T指某个时间的开始；Z指时区偏移量，例如偏移1个小时显示为+0100，不传默认为当前时间。
     * @param {number} [offset] 索引位置，偏移量。从第一条数据偏移offset条数据后开始查询，默认为0。
     * @param {number} [limit] 查询记录数。不传该参数时，默认为10,取值范围1-100。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listScheduledTasks(listScheduledTasksRequest?: ListScheduledTasksRequest): Promise<ListScheduledTasksResponse> {
        const options = ParamCreater().listScheduledTasks(listScheduledTasksRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询实例节点会话。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询实例节点会话
     * @param {string} nodeId 节点ID。允许查询的节点如下： 集群下面的 mongos节点以及 副本集、单节点实例下面的所有节点。
     * @param {number} [offset] 索引位置，偏移量。 从第一条数据偏移offset条数据后开始查询，默认为0（偏移0条数据，表示从第一条数据开始查询），必须为数字，不能为负数。
     * @param {number} [limit] 查询记录数。取值范围[1, 20]，默认10 （表示返回10条数据）。
     * @param {string} [planSummary] 执行计划描述。取空值表示查询所有语句类型，也可指定执行计划，例如： COLLSCAN IXSCAN FETCH SORT LIMIT SKIP COUNT COUNT_SCAN TEXT PROJECTION 等
     * @param {string} [type] 操作类型。取空值表示查询所有操作类型。也可指定操作类型，例如： none update insert query command getmore remove killcursors等
     * @param {string} [namespace] 命名空间。取空值表示查询所有命名空间。也可根据当前业务进行指定。
     * @param {number} [costTime] 运行时间，单位为 us。取空值表示查询所有的运行时间。也可根据当前业务需要进行配置，表示查询超出 cost_time 的会话。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listSessions(listSessionsRequest?: ListSessionsRequest): Promise<ListSessionsResponse> {
        const options = ParamCreater().listSessions(listSessionsRequest);

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
     * @param {string} instanceId 实例ID，可以调用“查询实例列表和详情”接口获取。如果未申请实例，可以调用“创建实例”接口创建。
     * @param {string} startDate 开始时间，格式为“yyyy-mm-ddThh:mm:ssZ”。 其中，T指某个时间的开始；Z指时区偏移量，例如北京时间偏移显示为+0800。
     * @param {string} endDate 结束时间，格式为“yyyy-mm-ddThh:mm:ssZ”。 其中，T指某个时间的开始；Z指时区偏移量，例如北京时间偏移显示为+0800。只能查询当前时间前一个月内的慢日志。注：结束时间不能晚于当前时间。
     * @param {string} [nodeId] 节点ID，取空值，表示查询实例下所有允许查询的节点。 使用请参考《DDS API参考》的“查询实例列表和详情”响应消息表“nodes 数据结构说明”的“id”。允许查询的节点如下： - 集群实例下面的 shard节点 - 副本集、单节点实例下面的所有节点
     * @param {'INSERT' | 'QUERY' | 'UPDATE' | 'REMOVE' | 'GETMORE' | 'COMMAND' | 'KILLCURSORS'} [type] 语句类型，取空值，表示查询所有语句类型，也可指定如下日志类型： - INSERT - QUERY - UPDATE - REMOVE - GETMORE - COMMAND - KILLCURSORS
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
     * 获取SSL证书下载地址
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取SSL证书下载地址
     * @param {string} instanceId 实例ID，可以调用“查询实例列表和详情”接口获取。如果未申请实例，可以调用“创建实例”接口创建。
     * @param {string} [xLanguage] 语言。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listSslCertDownloadAddress(listSslCertDownloadAddressRequest?: ListSslCertDownloadAddressRequest): Promise<ListSslCertDownloadAddressResponse> {
        const options = ParamCreater().listSslCertDownloadAddress(listSslCertDownloadAddressRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询当前区域下的数据库磁盘类型。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询数据库磁盘类型
     * @param {'DDS-Community' | 'DDS-Enhanced'} [engineName] 数据库版本类型： - 取值为“DDS-Community”。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listStorageType(listStorageTypeRequest?: ListStorageTypeRequest): Promise<ListStorageTypeResponse> {
        const options = ParamCreater().listStorageType(listStorageTypeRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据指定条件查询任务中心中的任务列表和详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询任务列表和详情
     * @param {string} startTime 查询开始时间，格式为“yyyy-mm-ddThh:mm:ssZ”。 其中，T指某个时间的开始，Z指时区偏移量
     * @param {string} endTime 查询结束时间，格式为“yyyy-mm-ddThh:mm:ssZ”，且大于查询开始时间，时间跨度不超过30天。 其中，T指某个时间的开始，Z指时区偏移量。
     * @param {string} [status] 任务状态： 取值为“Running”为执行中； 取值为“Completed”为完成； 取值为“Failed” 为失败。
     * @param {string} [name] 任务名称。对应取值如下： - \&quot;CreateMongoDB\&quot;：创建集群实例 - \&quot;CreateMongoDBReplica\&quot;：创建副本集实例 - \&quot;CreateMongoDBReplicaSingle\&quot;：创建单节点实例 - \&quot;EnlargeMongoDBVolume\&quot;：磁盘扩容 - \&quot;ResizeMongoDBInstance\&quot;：社区版实例规格变更 - \&quot;ResizeDfvMongoDBInstance\&quot;：社区增强版实例规格变更 - \&quot;EnlargeMongoDBGroup\&quot;：添加节点 - \&quot;ReplicaSetEnlargeNode\&quot;：副本集添加备节点 - \&quot;AddReadonlyNode\&quot;：添加只读节点 - \&quot;RestartInstance\&quot;：重启集群实例 - \&quot;RestartGroup\&quot;：重启集群节点组 - \&quot;RestartNode\&quot;：重启集群节点 - \&quot;RestartReplicaSetInstance\&quot;：重启副本集实例 - \&quot;RestartReplicaSingleInstance\&quot;：重启单节点实例 - \&quot;SwitchPrimary\&quot;：主备切换 - \&quot;ModifyIp\&quot;：修改内网地址 - \&quot;ModifySecurityGroup\&quot;：修改安全组 - \&quot;ModifyPort\&quot;：修改数据库端口 - \&quot;BindPublicIP\&quot;：绑定弹性IP - \&quot;UnbindPublicIP\&quot;：解绑弹性IP - \&quot;SwitchInstanceSSL\&quot;：切换SSL - \&quot;AzMigrate\&quot;：迁移可用区 - \&quot;CreateIp\&quot;：显示shard/config IP - \&quot;ModifyOpLogSize\&quot;：修改oplog大小 - \&quot;RestoreMongoDB\&quot;：集群恢复到新实例 - \&quot;RestoreMongoDB_Replica\&quot;：副本集恢复到新实例 - \&quot;RestoreMongoDB_Replica_Single\&quot;：单节点恢复到新实例 - \&quot;RestoreMongoDB_Replica_PITR\&quot;：副本集恢复到指定时间点 - \&quot;MongodbSnapshotBackup\&quot;：创建物理备份 - \&quot;MongodbSnapshotEBackup\&quot;：创建快照备份 - \&quot;MongodbRestoreData2CurrentInstance\&quot;：备份恢复到当前实例 - \&quot;MongodbRestoreData2NewInstance\&quot;：备份恢复到新实例 - \&quot;MongodbPitr2CurrentInstance\&quot;：备份恢复到当前实例指定时间点 - \&quot;MongodbPitr2NewInstance\&quot;：备份恢复到新实例指定时间点 - \&quot;MongodbRecycleBackup\&quot;：备份回收 - \&quot;MongodbRestoreTable\&quot;：库表级时间点恢复 - \&quot;UpgradeDatabaseVersion\&quot;：升级数据库补丁
     * @param {number} [offset] 索引位置，偏移量。从第一条数据偏移offset条数据后开始查询，默认为0（偏移0条数据，表示从第一条数据开始查询），必须为数字，不能为负数。
     * @param {number} [limit] 查询记录数。默认为100，不能为负数，最小值为1，最大值为100。
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
     * 实例可用区迁移。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 实例可用区迁移
     * @param {string} instanceId 实例ID。
     * @param {MigrateAzRequestBody} migrateAzRequestBody 请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public migrateAz(migrateAzRequest?: MigrateAzRequest): Promise<MigrateAzResponse> {
        const options = ParamCreater().migrateAz(migrateAzRequest);

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
     * 修改数据库用户密码。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改数据库用户密码
     * @param {string} instanceId 实例ID，可以调用“查询实例列表和详情”接口获取。如果未申请实例，可以调用“创建实例”接口创建。
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
     * 变更实例的规格。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 变更实例规格
     * @param {string} instanceId 实例ID，可以调用“查询实例列表和详情”接口获取。如果未申请实例，可以调用“创建实例”接口创建。
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
     * 扩容实例相关的存储容量大小。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 扩容实例存储容量
     * @param {string} instanceId 实例ID，可以调用“查询实例列表和详情”接口获取。如果未申请实例，可以调用“创建实例”接口创建。
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
     * @summary 重启实例
     * @param {string} instanceId 实例ID，可以调用“查询实例列表和详情”接口获取。如果未申请实例，可以调用“创建实例”接口创建。
     * @param {RestartInstanceRequestBody} restartInstanceRequestBody 请求体。
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
     * 恢复到当前实例。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 恢复到当前实例
     * @param {RestoreInstanceRequestBody} restoreInstanceRequestBody 请求体。
     * @param {string} [xLanguage] 语言。
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
     * 库表级时间点恢复。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 库表级时间点恢复
     * @param {string} instanceId 实例ID，可以调用“查询实例列表和详情”接口获取。如果未申请实例，可以调用“创建实例”接口创建。
     * @param {RestoreInstanceFromCollectionRequestBody} restoreInstanceFromCollectionRequestBody 请求体。
     * @param {string} [xLanguage] 语言。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public restoreInstanceFromCollection(restoreInstanceFromCollectionRequest?: RestoreInstanceFromCollectionRequest): Promise<RestoreInstanceFromCollectionResponse> {
        const options = ParamCreater().restoreInstanceFromCollection(restoreInstanceFromCollectionRequest);

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
     * @param {RestoreNewInstanceRequestBody} restoreNewInstanceRequestBody 请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public restoreNewInstance(restoreNewInstanceRequest?: RestoreNewInstanceRequest): Promise<RestoreNewInstanceResponse> {
        const options = ParamCreater().restoreNewInstance(restoreNewInstanceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 设置审计日志策略。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 设置审计日志策略
     * @param {string} instanceId 实例ID，可以调用“查询实例列表和详情”接口获取。如果未申请实例，可以调用“创建实例”接口创建。
     * @param {SetAuditlogPolicyRequestBody} setAuditlogPolicyRequestBody 请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public setAuditlogPolicy(setAuditlogPolicyRequest?: SetAuditlogPolicyRequest): Promise<SetAuditlogPolicyResponse> {
        const options = ParamCreater().setAuditlogPolicy(setAuditlogPolicyRequest);

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
     * @param {SetAutoEnlargePoliciesRequestBody} setAutoEnlargePoliciesRequestBody 请求body。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public setAutoEnlargePolicies(setAutoEnlargePoliciesRequest?: SetAutoEnlargePoliciesRequest): Promise<SetAutoEnlargePoliciesResponse> {
        const options = ParamCreater().setAutoEnlargePolicies(setAutoEnlargePoliciesRequest);

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
     * @param {string} instanceId 实例ID，可以调用“查询实例列表和详情”接口获取。如果未申请实例，可以调用“创建实例”接口创建。
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
     * 设置集群均衡开关。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 设置集群均衡开关
     * @param {string} instanceId 实例ID，可以调用“查询实例列表和详情”接口获取。如果未申请实例，可以调用“创建实例”接口创建。
     * @param {'start' | 'stop'} action 开启或关闭集群均衡。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public setBalancerSwitch(setBalancerSwitchRequest?: SetBalancerSwitchRequest): Promise<SetBalancerSwitchResponse> {
        const options = ParamCreater().setBalancerSwitch(setBalancerSwitchRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 设置集群均衡活动时间窗。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 设置集群均衡活动时间窗
     * @param {string} instanceId 实例ID，可以调用“查询实例列表和详情”接口获取。如果未申请实例，可以调用“创建实例”接口创建。
     * @param {BalancerActiveWindow} balancerActiveWindow 设置均衡活动时间窗请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public setBalancerWindow(setBalancerWindowRequest?: SetBalancerWindowRequest): Promise<SetBalancerWindowResponse> {
        const options = ParamCreater().setBalancerWindow(setBalancerWindowRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 设置实例回收站策略
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 设置实例回收站策略
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
     * 查询审计日志策略。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询审计日志策略
     * @param {string} instanceId 实例ID，可以调用“查询实例列表和详情”接口获取。如果未申请实例，可以调用“创建实例”接口创建。
     * @param {string} [xLanguage] 语言。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showAuditlogPolicy(showAuditlogPolicyRequest?: ShowAuditlogPolicyRequest): Promise<ShowAuditlogPolicyResponse> {
        const options = ParamCreater().showAuditlogPolicy(showAuditlogPolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询磁盘自动扩容策略。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询磁盘自动扩容策略
     * @param {string} instanceId 实例ID。
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
     * 获取备份下载链接。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取备份下载链接
     * @param {string} instanceId 实例ID，可以调用“查询实例列表和详情”接口获取。如果未申请实例，可以调用“创建实例”接口创建。
     * @param {string} backupId 备份ID。
     * @param {string} [xLanguage] 语言。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showBackupDownloadLink(showBackupDownloadLinkRequest?: ShowBackupDownloadLinkRequest): Promise<ShowBackupDownloadLinkResponse> {
        const options = ParamCreater().showBackupDownloadLink(showBackupDownloadLinkRequest);

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
     * @param {string} instanceId 实例ID，可以调用“查询实例列表和详情”接口获取。如果未申请实例，可以调用“创建实例”接口创建。
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
     * 查询副本集跨网段访问配置
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询副本集跨网段访问配置
     * @param {string} instanceId 实例ID，可以调用“[查询实例列表和详情](x-wc://file&#x3D;zh-cn_topic_0000001369935045.xml)”接口获取。如果未申请实例，可以调用“[创建实例](x-wc://file&#x3D;zh-cn_topic_0000001369734929.xml)”接口创建。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showClientNetwork(showClientNetworkRequest?: ShowClientNetworkRequest): Promise<ShowClientNetworkResponse> {
        const options = ParamCreater().showClientNetwork(showClientNetworkRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询参数模板应用历史
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询参数模板被应用历史
     * @param {string} configId 参数模板ID。
     * @param {number} [offset] 索引位置，偏移量。  从第一条数据偏移offset条数据后开始查询，默认为0（偏移0条数据，表示从第一条数据开始查询）。 取值必须为数字，不能为负数。
     * @param {number} [limit] 查询记录数。默认为100，不能为负数，最小值为1，最大值为100。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showConfigurationAppliedHistory(showConfigurationAppliedHistoryRequest?: ShowConfigurationAppliedHistoryRequest): Promise<ShowConfigurationAppliedHistoryResponse> {
        const options = ParamCreater().showConfigurationAppliedHistory(showConfigurationAppliedHistoryRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询参数模板修改历史。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询参数模板修改历史
     * @param {string} configId 参数模板ID。
     * @param {number} [offset] 索引位置，偏移量。  从第一条数据偏移offset条数据后开始查询，默认为0（偏移0条数据，表示从第一条数据开始查询）。 取值必须为数字，不能为负数。
     * @param {number} [limit] 查询个数上限值。 - 取值范围: 1~100。 - 不传该参数时，默认查询前100条信息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showConfigurationModifyHistory(showConfigurationModifyHistoryRequest?: ShowConfigurationModifyHistoryRequest): Promise<ShowConfigurationModifyHistoryResponse> {
        const options = ParamCreater().showConfigurationModifyHistory(showConfigurationModifyHistoryRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取参数模板的详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取参数模板的详情
     * @param {string} configId 参数模板ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showConfigurationParameter(showConfigurationParameterRequest?: ShowConfigurationParameterRequest): Promise<ShowConfigurationParameterResponse> {
        const options = ParamCreater().showConfigurationParameter(showConfigurationParameterRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询客户端IP访问至DDS数据库实例的连接数统计信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询实例连接数统计信息
     * @param {string} instanceId 实例ID，可以调用“查询实例列表和详情”接口获取。如果未申请实例，可以调用“创建实例”接口创建。
     * @param {string} [nodeId] 节点ID。 - 如取空值，则默认查询实例下所有允许连接的节点的连接数信息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showConnectionStatistics(showConnectionStatisticsRequest?: ShowConnectionStatisticsRequest): Promise<ShowConnectionStatisticsResponse> {
        const options = ParamCreater().showConnectionStatistics(showConnectionStatisticsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询实例磁盘信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询实例磁盘信息
     * @param {string} instanceId 实例ID，可以调用“查询实例列表和详情”接口获取。如果未申请实例，可以调用“创建实例”接口创建。
     * @param {string} [xLanguage] 语言。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showDiskUsage(showDiskUsageRequest?: ShowDiskUsageRequest): Promise<ShowDiskUsageResponse> {
        const options = ParamCreater().showDiskUsage(showDiskUsageRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取指定实例的参数，可以是实例，组，节点的参数模板。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取指定实例的参数信息
     * @param {string} instanceId 实例ID。
     * @param {string} entityId - 实例ID或组ID或节点ID。可以调用“查询实例列表和详情”接口获取。如果未申请实例，可以调用“创建实例”接口创建。 - 当获取的实例类型是集群，如果获取的是shard组或者config组的参数模板，传值为组ID。如果获取的是mongos节点的参数模板，传值为节点ID。 - 当获取的实例类型是副本集或单节点，传值为实例ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showEntityConfiguration(showEntityConfigurationRequest?: ShowEntityConfigurationRequest): Promise<ShowEntityConfigurationResponse> {
        const options = ParamCreater().showEntityConfiguration(showEntityConfigurationRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询实例参数的修改历史。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询实例参数的修改历史
     * @param {string} instanceId 实例ID。
     * @param {string} entityId 实例ID或组ID或节点ID。可以调用“查询实例列表和详情”接口获取。如果未申请实例，可以调用“创建实例”接口创建。
     * @param {number} [offset] 索引位置，偏移量。  从第一条数据偏移offset条数据后开始查询，默认为0（偏移0条数据，表示从第一条数据开始查询）。 取值必须为数字，不能为负数。
     * @param {number} [limit] 查询个数上限值。 - 取值范围: 1~100。 - 不传该参数时，默认查询前100条信息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showInstanceConfigurationModifyHistory(showInstanceConfigurationModifyHistoryRequest?: ShowInstanceConfigurationModifyHistoryRequest): Promise<ShowInstanceConfigurationModifyHistoryResponse> {
        const options = ParamCreater().showInstanceConfigurationModifyHistory(showInstanceConfigurationModifyHistoryRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取DDS任务中心指定ID的任务信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取DDS任务中心指定ID的任务信息。
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
     * 获取killOp规则列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取killOp规则列表
     * @param {string} instanceId 实例ID，可以调用“[查询实例列表和详情](x-wc://file&#x3D;zh-cn_topic_0000001369935045.xml)”接口获取。如果未申请实例，可以调用“[创建实例](x-wc://file&#x3D;zh-cn_topic_0000001369734929.xml)”接口创建。
     * @param {string} [operationTypes] Sql语句操作类型。  - insert，表示插入语句。  - update，表示更新语句。  - query，表示查询语句。  - command，表示命令语句。  - remove，表示删除语句。  - getmore，表示获取更多数据语句。
     * @param {string} [namespaces] 表命名空间。取值格式：库名.表名。 - 可为空，表示不做限制。 - 单独库名，表示对某个库下的所有集合生效。 - 库名.表名，表示对具体库下的具体的集合生效。
     * @param {string} [status] killOp规则状态。  - ENABLED，规则生效中。 - DISABLED，规则禁用中。
     * @param {string} [planSummary] 执行计划。 默认值空，表示不做限制。  - COLLSCAN。 - SORT_KEY_GENERATOR。 - SKIP。 - LIMIT。 - GEO_NEAR_2DSPHERE。 - GEO_NEAR_2D。 - AGGREGATE。 - OR。
     * @param {number} [offset] 索引位置，偏移量。  从第一条数据偏移offset条数据后开始查询，默认为0（偏移0条数据，表示从第一条数据开始查询）。 取值必须为数字，不能为负数。
     * @param {number} [limit] 查询个数上限值。 - 取值范围: 1~100。 - 不传该参数时，默认查询前100条信息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showKillOpRuleRuleList(showKillOpRuleRuleListRequest?: ShowKillOpRuleRuleListRequest): Promise<ShowKillOpRuleRuleListResponse> {
        const options = ParamCreater().showKillOpRuleRuleList(showKillOpRuleRuleListRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询单租户在DDS服务下的资源配额，包括单节点实例配额、副本集实例配额、集群实例配额等。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询配额
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showQuotas(showQuotasRequest?: ShowQuotasRequest): Promise<ShowQuotasResponse> {
        const options = ParamCreater().showQuotas();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询实例回收站策略
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询实例回收站策略
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
     * 查询数据库复制集名称
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询数据库复制集名称
     * @param {string} instanceId 实例ID，可以调用“[查询实例列表和详情](x-wc://file&#x3D;zh-cn_topic_0000001369935045.xml)”接口获取。如果未申请实例，可以调用“[创建实例](x-wc://file&#x3D;zh-cn_topic_0000001369734929.xml)”接口创建。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showReplSetName(showReplSetNameRequest?: ShowReplSetNameRequest): Promise<ShowReplSetNameResponse> {
        const options = ParamCreater().showReplSetName(showReplSetNameRequest);

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
     * 查询集群均衡设置。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询集群均衡设置
     * @param {string} instanceId 实例ID，可以调用“查询实例列表和详情”接口获取。如果未申请实例，可以调用“创建实例”接口创建。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showShardingBalancer(showShardingBalancerRequest?: ShowShardingBalancerRequest): Promise<ShowShardingBalancerResponse> {
        const options = ParamCreater().showShardingBalancer(showShardingBalancerRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询慢日志明文开关
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询慢日志明文开关
     * @param {string} instanceId 实例ID，可以调用“查询实例列表和详情”接口获取。如果未申请实例，可以调用“创建实例”接口创建
     * @param {string} [xLanguage] 语言。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showSlowlogDesensitizationSwitch(showSlowlogDesensitizationSwitchRequest?: ShowSlowlogDesensitizationSwitchRequest): Promise<ShowSlowlogDesensitizationSwitchResponse> {
        const options = ParamCreater().showSlowlogDesensitizationSwitch(showSlowlogDesensitizationSwitchRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询数据库补丁升级预估时长
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询数据库补丁升级预估时长
     * @param {string} instanceId 实例ID，可以调用“查询实例列表和详情”接口获取。如果未申请实例，可以调用“创建实例”接口创建。
     * @param {string} [xLanguage] 语言。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showUpgradeDuration(showUpgradeDurationRequest?: ShowUpgradeDurationRequest): Promise<ShowUpgradeDurationResponse> {
        const options = ParamCreater().showUpgradeDuration(showUpgradeDurationRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除实例的节点。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除实例的节点
     * @param {string} instanceId 实例ID，可以调用“[查询实例列表和详情](x-wc://file&#x3D;zh-cn_topic_0000001369935045.xml)”接口获取。如果未申请实例，可以调用“[创建实例](x-wc://file&#x3D;zh-cn_topic_0000001369734929.xml)”接口创建。
     * @param {ReduceInstanceNodeRequestBody} reduceReplicasetNodeRequestBody 请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public shrinkInstanceNodes(shrinkInstanceNodesRequest?: ShrinkInstanceNodesRequest): Promise<ShrinkInstanceNodesResponse> {
        const options = ParamCreater().shrinkInstanceNodes(shrinkInstanceNodesRequest);

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
     * 指定实例变更参数模板。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 应用参数模板
     * @param {string} configId 参数模板ID。
     * @param {ApplyConfigurationRequestBody} applyConfigurationRequestBody： 请求体。
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
     * 支持副本集、shard和config备节点强制升主。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 强制备节点升主
     * @param {string} instanceId 实例ID，可以调用“[查询实例列表和详情](x-wc://file&#x3D;zh-cn_topic_0000001369935045.xml)”接口获取。如果未申请实例，可以调用“[创建实例](x-wc://file&#x3D;zh-cn_topic_0000001369734929.xml)”接口创建。
     * @param {string} nodeId 备节点ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public switchInstancePrimary(switchInstancePrimaryRequest?: SwitchInstancePrimaryRequest): Promise<SwitchInstancePrimaryResponse> {
        const options = ParamCreater().switchInstancePrimary(switchInstancePrimaryRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 开启或关闭指定实例的秒级监控。
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
     * 设置实例的慢日志明文开关。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 设置慢日志明文开关
     * @param {string} instanceId 实例ID，可以调用“查询实例列表和详情”接口获取。如果未申请实例，可以调用“创建实例”接口创建。
     * @param {string} status 开启或关闭慢日志脱敏，取值为on或off。
     * @param {string} [xLanguage] 语言。
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
     * 切换实例的SSL开关
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 切换SSL开关
     * @param {string} instanceId 实例ID，可以调用“查询实例列表和详情”接口获取。如果未申请实例，可以调用“创建实例”接口创建。
     * @param {SwitchSslRequestBody} switchSslRequestBody 请求体。
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
     * 切换副本集实例下的主备节点
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 切换副本集实例的主备节点
     * @param {string} instanceId 实例ID，可以调用“查询实例列表和详情”接口获取。如果未申请实例，可以调用“创建实例”接口创建。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public switchoverReplicaSet(switchoverReplicaSetRequest?: SwitchoverReplicaSetRequest): Promise<SwitchoverReplicaSetResponse> {
        const options = ParamCreater().switchoverReplicaSet(switchoverReplicaSetRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 副本集跨网段访问配置。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 副本集跨网段访问配置。
     * @param {string} instanceId 实例ID。
     * @param {ClientNetworkRequestBody} clientNetworkRequestBody 请求体。
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
     * 修改指定参数模板的参数信息，包括名称、描述、指定参数的值。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改参数模板
     * @param {string} configId 参数模板ID。
     * @param {UpdateConfigurationParameterRequestBody} updateConfigurationParameterRequestBody 请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateConfigurationParameter(updateConfigurationParameterRequest?: UpdateConfigurationParameterRequest): Promise<UpdateConfigurationParameterResponse> {
        const options = ParamCreater().updateConfigurationParameter(updateConfigurationParameterRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改指定实例的参数，可以是实例，组，节点的参数模板。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改指定实例的参数
     * @param {string} instanceId 实例ID。
     * @param {UpdateConfigurationParameterResult} updateConfigurationParameterResult 请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateEntityConfiguration(updateEntityConfigurationRequest?: UpdateEntityConfigurationRequest): Promise<UpdateEntityConfigurationResponse> {
        const options = ParamCreater().updateEntityConfiguration(updateEntityConfigurationRequest);

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
     * @param {string} instanceId 实例ID，可以调用“查询实例列表和详情”接口获取。如果未申请实例，可以调用“创建实例”接口创建。
     * @param {UpdateNameRequestBody} updateNameRequestBody 请求体。
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
     * 修改数据库实例的端口。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改数据库端口
     * @param {string} instanceId 实例ID，可以调用“查询实例列表和详情”接口获取。如果未申请实例，可以调用“创建实例”接口创建。
     * @param {UpdatePortRequestBody} updatePortRequestBody 请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateInstancePort(updateInstancePortRequest?: UpdateInstancePortRequest): Promise<UpdateInstancePortResponse> {
        const options = ParamCreater().updateInstancePort(updateInstancePortRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改实例备注。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改实例备注
     * @param {string} instanceId 实例ID，可以调用“查询实例列表和详情”接口获取。如果未申请实例，可以调用“创建实例”接口创建。
     * @param {UpdateInstanceRemarkRequestBody} updateInstanceRemarkRequestBody 请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateInstanceRemark(updateInstanceRemarkRequest?: UpdateInstanceRemarkRequest): Promise<UpdateInstanceRemarkResponse> {
        const options = ParamCreater().updateInstanceRemark(updateInstanceRemarkRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 启用/禁用killOp规则。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 启用/禁用killOp规则
     * @param {string} instanceId 实例ID，可以调用“[查询实例列表和详情](x-wc://file&#x3D;zh-cn_topic_0000001369935045.xml)”接口获取。如果未申请实例，可以调用“[创建实例](x-wc://file&#x3D;zh-cn_topic_0000001369734929.xml)”接口创建。
     * @param {UpdateKillOpRuleRequestBody} updateKillOpRuleRequestBody killOp规则参数。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateKillOpRule(updateKillOpRuleRequest?: UpdateKillOpRuleRequest): Promise<UpdateKillOpRuleResponse> {
        const options = ParamCreater().updateKillOpRule(updateKillOpRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 将实例日志与LTS日志流关联，后台将自动上传实例日志到关联的LTS日志流里。
     * 关联成功后，会产生一定费用，具体计费可参考云日志服务（LTS）的定价详情。
     * 系统会为当前选择的日志流创建对应日志类型的结构化配置。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 关联LTS日志流
     * @param {UpdateLtsConfigRequestBody} updateLtsConfigRequestBody 请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateLtsConfig(updateLtsConfigRequest?: UpdateLtsConfigRequest): Promise<UpdateLtsConfigResponse> {
        const options = ParamCreater().updateLtsConfig(updateLtsConfigRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改数据库复制集名称
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改数据库复制集名称
     * @param {string} instanceId 实例ID，可以调用“[查询实例列表和详情](x-wc://file&#x3D;zh-cn_topic_0000001369935045.xml)”接口获取。如果未申请实例，可以调用“[创建实例](x-wc://file&#x3D;zh-cn_topic_0000001369734929.xml)”接口创建。
     * @param {MongoUpdateReplSetV3RequestBody} mongoUpdateReplSetV3RequestBody 连接地址复制集名称：实例高可用连接地址的唯一标识。该参数可以将读请求发送到副本集实例的所有节点。副本集中的所有主机必须具有相同的集名称。字符限制：大小写字母，数字，下划线组合，字母为首，长度限制在3-128
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateReplSetName(updateReplSetNameRequest?: UpdateReplSetNameRequest): Promise<UpdateReplSetNameResponse> {
        const options = ParamCreater().updateReplSetName(updateReplSetNameRequest);

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
     * @param {string} instanceId 实例ID，可以调用“查询实例列表和详情”接口获取。如果未申请实例，可以调用“创建实例”接口创建。
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
     * 升级数据库补丁版本。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 数据库补丁升级
     * @param {string} instanceId 实例ID。
     * @param {UpgradeDatabaseVersionRequestBody} upgradeDatabaseVersionRequestBody 请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public upgradeDatabaseVersion(upgradeDatabaseVersionRequest?: UpgradeDatabaseVersionRequest): Promise<UpgradeDatabaseVersionResponse> {
        const options = ParamCreater().upgradeDatabaseVersion(upgradeDatabaseVersionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 校验参数模板名称是否存在。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 校验参数模板名称是否存在
     * @param {string} name 参数模板名称。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public validateConfigurationName(validateConfigurationNameRequest?: ValidateConfigurationNameRequest): Promise<ValidateConfigurationNameResponse> {
        const options = ParamCreater().validateConfigurationName(validateConfigurationNameRequest);

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
         * DDS副本集实例新增只读节点。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        addReadonlyNode(addReadonlyNodeRequest?: AddReadonlyNodeRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/{instance_id}/readonly-node",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (addReadonlyNodeRequest !== null && addReadonlyNodeRequest !== undefined) {
                if (addReadonlyNodeRequest instanceof AddReadonlyNodeRequest) {
                    instanceId = addReadonlyNodeRequest.instanceId;
                    body = addReadonlyNodeRequest.body
                } else {
                    instanceId = addReadonlyNodeRequest['instance_id'];
                    body = addReadonlyNodeRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling addReadonlyNode.');
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
        addShardingNode(addShardingNodeRequest?: AddShardingNodeRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/{instance_id}/enlarge",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (addShardingNodeRequest !== null && addShardingNodeRequest !== undefined) {
                if (addShardingNodeRequest instanceof AddShardingNodeRequest) {
                    instanceId = addShardingNodeRequest.instanceId;
                    body = addShardingNodeRequest.body
                } else {
                    instanceId = addShardingNodeRequest['instance_id'];
                    body = addShardingNodeRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling addShardingNode.');
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
         * 为实例下的节点绑定弹性公网IP。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        attachEip(attachEipRequest?: AttachEipRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/nodes/{node_id}/bind-eip",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let nodeId;

            if (attachEipRequest !== null && attachEipRequest !== undefined) {
                if (attachEipRequest instanceof AttachEipRequest) {
                    nodeId = attachEipRequest.nodeId;
                    body = attachEipRequest.body
                } else {
                    nodeId = attachEipRequest['node_id'];
                    body = attachEipRequest['body'];
                }
            }

        
            if (nodeId === null || nodeId === undefined) {
            throw new RequiredError('nodeId','Required parameter nodeId was null or undefined when calling attachEip.');
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
         * 修改实例的内网地址
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        attachInternalIp(attachInternalIpRequest?: AttachInternalIpRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/{instance_id}/modify-internal-ip",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (attachInternalIpRequest !== null && attachInternalIpRequest !== undefined) {
                if (attachInternalIpRequest instanceof AttachInternalIpRequest) {
                    instanceId = attachInternalIpRequest.instanceId;
                    body = attachInternalIpRequest.body
                } else {
                    instanceId = attachInternalIpRequest['instance_id'];
                    body = attachInternalIpRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling attachInternalIp.');
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
         * 批量删除数据库实例的手动备份。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchDeleteBackup(batchDeleteBackupRequest?: BatchDeleteBackupRequest) {
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

            if (batchDeleteBackupRequest !== null && batchDeleteBackupRequest !== undefined) {
                if (batchDeleteBackupRequest instanceof BatchDeleteBackupRequest) {
                    body = batchDeleteBackupRequest.body
                    xLanguage = batchDeleteBackupRequest.xLanguage;
                } else {
                    body = batchDeleteBackupRequest['body'];
                    xLanguage = batchDeleteBackupRequest['X-Language'];
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
         * 批量添加或删除指定实例的标签。
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
         * 解绑实例下节点已经绑定的弹性公网IP。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        cancelEip(cancelEipRequest?: CancelEipRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/nodes/{node_id}/unbind-eip",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let nodeId;

            if (cancelEipRequest !== null && cancelEipRequest !== undefined) {
                if (cancelEipRequest instanceof CancelEipRequest) {
                    nodeId = cancelEipRequest.nodeId;
                } else {
                    nodeId = cancelEipRequest['node_id'];
                }
            }

        
            if (nodeId === null || nodeId === undefined) {
            throw new RequiredError('nodeId','Required parameter nodeId was null or undefined when calling cancelEip.');
            }

            options.pathParams = { 'node_id': nodeId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据任务ID取消定时任务。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        cancelScheduledTask(cancelScheduledTaskRequest?: CancelScheduledTaskRequest) {
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

            if (cancelScheduledTaskRequest !== null && cancelScheduledTaskRequest !== undefined) {
                if (cancelScheduledTaskRequest instanceof CancelScheduledTaskRequest) {
                    jobId = cancelScheduledTaskRequest.jobId;
                } else {
                    jobId = cancelScheduledTaskRequest['job_id'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling cancelScheduledTask.');
            }

            options.pathParams = { 'job_id': jobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改用户允许启动某项对数据库实例运行有影响的任务的时间范围，例如操作系统升级和数据库软件版本升级的时间窗。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        changeOpsWindow(changeOpsWindowRequest?: ChangeOpsWindowRequest) {
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

            if (changeOpsWindowRequest !== null && changeOpsWindowRequest !== undefined) {
                if (changeOpsWindowRequest instanceof ChangeOpsWindowRequest) {
                    instanceId = changeOpsWindowRequest.instanceId;
                    body = changeOpsWindowRequest.body
                } else {
                    instanceId = changeOpsWindowRequest['instance_id'];
                    body = changeOpsWindowRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling changeOpsWindow.');
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
         * 检查数据库密码。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        checkPassword(checkPasswordRequest?: CheckPasswordRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/{instance_id}/check-password",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (checkPasswordRequest !== null && checkPasswordRequest !== undefined) {
                if (checkPasswordRequest instanceof CheckPasswordRequest) {
                    instanceId = checkPasswordRequest.instanceId;
                    body = checkPasswordRequest.body
                } else {
                    instanceId = checkPasswordRequest['instance_id'];
                    body = checkPasswordRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling checkPassword.');
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
         * 检查弱密码
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        checkWeakPassword(checkWeakPasswordRequest?: CheckWeakPasswordRequest) {
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
            
            let xLanguage;

            if (checkWeakPasswordRequest !== null && checkWeakPasswordRequest !== undefined) {
                if (checkWeakPasswordRequest instanceof CheckWeakPasswordRequest) {
                    body = checkWeakPasswordRequest.body
                    xLanguage = checkWeakPasswordRequest.xLanguage;
                } else {
                    body = checkWeakPasswordRequest['body'];
                    xLanguage = checkWeakPasswordRequest['X-Language'];
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
         * 比较两个参数模板之间的差异。
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
         * 复制参数模板。
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
         * 创建数据库角色。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createDatabaseRole(createDatabaseRoleRequest?: CreateDatabaseRoleRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/{instance_id}/db-role",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (createDatabaseRoleRequest !== null && createDatabaseRoleRequest !== undefined) {
                if (createDatabaseRoleRequest instanceof CreateDatabaseRoleRequest) {
                    instanceId = createDatabaseRoleRequest.instanceId;
                    body = createDatabaseRoleRequest.body
                } else {
                    instanceId = createDatabaseRoleRequest['instance_id'];
                    body = createDatabaseRoleRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling createDatabaseRole.');
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
         * 创建数据库用户。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createDatabaseUser(createDatabaseUserRequest?: CreateDatabaseUserRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/{instance_id}/db-user",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (createDatabaseUserRequest !== null && createDatabaseUserRequest !== undefined) {
                if (createDatabaseUserRequest instanceof CreateDatabaseUserRequest) {
                    instanceId = createDatabaseUserRequest.instanceId;
                    body = createDatabaseUserRequest.body
                } else {
                    instanceId = createDatabaseUserRequest['instance_id'];
                    body = createDatabaseUserRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling createDatabaseUser.');
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
         * 创建文档数据库实例，包括集群实例、副本集实例、以及单节点实例。
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
         * 创建集群的Shard/Config IP
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createIp(createIpRequest?: CreateIpRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/{instance_id}/create-ip",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (createIpRequest !== null && createIpRequest !== undefined) {
                if (createIpRequest instanceof CreateIpRequest) {
                    instanceId = createIpRequest.instanceId;
                    body = createIpRequest.body
                } else {
                    instanceId = createIpRequest['instance_id'];
                    body = createIpRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling createIp.');
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
         * 创建killOp规则。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createKillOpRule(createKillOpRuleRequest?: CreateKillOpRuleRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/{instance_id}/kill-op-rule",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (createKillOpRuleRequest !== null && createKillOpRuleRequest !== undefined) {
                if (createKillOpRuleRequest instanceof CreateKillOpRuleRequest) {
                    instanceId = createKillOpRuleRequest.instanceId;
                    body = createKillOpRuleRequest.body
                } else {
                    instanceId = createKillOpRuleRequest['instance_id'];
                    body = createKillOpRuleRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling createKillOpRule.');
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
         * 创建数据库实例的手动备份。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createManualBackup(createManualBackupRequest?: CreateManualBackupRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/backups",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createManualBackupRequest !== null && createManualBackupRequest !== undefined) {
                if (createManualBackupRequest instanceof CreateManualBackupRequest) {
                    body = createManualBackupRequest.body
                } else {
                    body = createManualBackupRequest['body'];
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
         * 删除审计日志
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteAuditLog(deleteAuditLogRequest?: DeleteAuditLogRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{project_id}/instances/{instance_id}/auditlog",
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

            if (deleteAuditLogRequest !== null && deleteAuditLogRequest !== undefined) {
                if (deleteAuditLogRequest instanceof DeleteAuditLogRequest) {
                    instanceId = deleteAuditLogRequest.instanceId;
                    body = deleteAuditLogRequest.body
                    xLanguage = deleteAuditLogRequest.xLanguage;
                } else {
                    instanceId = deleteAuditLogRequest['instance_id'];
                    body = deleteAuditLogRequest['body'];
                    xLanguage = deleteAuditLogRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling deleteAuditLog.');
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
         * 删除数据库角色。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteDatabaseRole(deleteDatabaseRoleRequest?: DeleteDatabaseRoleRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{project_id}/instances/{instance_id}/db-role",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (deleteDatabaseRoleRequest !== null && deleteDatabaseRoleRequest !== undefined) {
                if (deleteDatabaseRoleRequest instanceof DeleteDatabaseRoleRequest) {
                    instanceId = deleteDatabaseRoleRequest.instanceId;
                    body = deleteDatabaseRoleRequest.body
                } else {
                    instanceId = deleteDatabaseRoleRequest['instance_id'];
                    body = deleteDatabaseRoleRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling deleteDatabaseRole.');
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
         * 删除数据库用户。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteDatabaseUser(deleteDatabaseUserRequest?: DeleteDatabaseUserRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{project_id}/instances/{instance_id}/db-user",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (deleteDatabaseUserRequest !== null && deleteDatabaseUserRequest !== undefined) {
                if (deleteDatabaseUserRequest instanceof DeleteDatabaseUserRequest) {
                    instanceId = deleteDatabaseUserRequest.instanceId;
                    body = deleteDatabaseUserRequest.body
                } else {
                    instanceId = deleteDatabaseUserRequest['instance_id'];
                    body = deleteDatabaseUserRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling deleteDatabaseUser.');
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
         * 删除killOp规则。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteKillOpRuleList(deleteKillOpRuleListRequest?: DeleteKillOpRuleListRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{project_id}/instances/{instance_id}/kill-op-rule",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (deleteKillOpRuleListRequest !== null && deleteKillOpRuleListRequest !== undefined) {
                if (deleteKillOpRuleListRequest instanceof DeleteKillOpRuleListRequest) {
                    instanceId = deleteKillOpRuleListRequest.instanceId;
                    body = deleteKillOpRuleListRequest.body
                } else {
                    instanceId = deleteKillOpRuleListRequest['instance_id'];
                    body = deleteKillOpRuleListRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling deleteKillOpRuleList.');
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
         * 将实例日志与LTS日志流解除关联，后台将取消上传实例日志到的LTS日志流里。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteLtsConfig(deleteLtsConfigRequest?: DeleteLtsConfigRequest) {
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

            if (deleteLtsConfigRequest !== null && deleteLtsConfigRequest !== undefined) {
                if (deleteLtsConfigRequest instanceof DeleteLtsConfigRequest) {
                    body = deleteLtsConfigRequest.body
                } else {
                    body = deleteLtsConfigRequest['body'];
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
         * 删除数据库实例的手动备份。
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

            if (deleteManualBackupRequest !== null && deleteManualBackupRequest !== undefined) {
                if (deleteManualBackupRequest instanceof DeleteManualBackupRequest) {
                    backupId = deleteManualBackupRequest.backupId;
                } else {
                    backupId = deleteManualBackupRequest['backup_id'];
                }
            }

        
            if (backupId === null || backupId === undefined) {
            throw new RequiredError('backupId','Required parameter backupId was null or undefined when calling deleteManualBackup.');
            }

            options.pathParams = { 'backup_id': backupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 当集群实例需要缩减mongos节点时，需要调用此API。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteMongosNode(deleteMongosNodeRequest?: DeleteMongosNodeRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{project_id}/instances/{instance_id}/mongos-node",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (deleteMongosNodeRequest !== null && deleteMongosNodeRequest !== undefined) {
                if (deleteMongosNodeRequest instanceof DeleteMongosNodeRequest) {
                    instanceId = deleteMongosNodeRequest.instanceId;
                    body = deleteMongosNodeRequest.body
                } else {
                    instanceId = deleteMongosNodeRequest['instance_id'];
                    body = deleteMongosNodeRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling deleteMongosNode.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 当副本集添加了只读节点后，需要删除对应的只读节点需要调用此API。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteReadonlyNode(deleteReadonlyNodeRequest?: DeleteReadonlyNodeRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{project_id}/instances/{instance_id}/readonly-node",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (deleteReadonlyNodeRequest !== null && deleteReadonlyNodeRequest !== undefined) {
                if (deleteReadonlyNodeRequest instanceof DeleteReadonlyNodeRequest) {
                    instanceId = deleteReadonlyNodeRequest.instanceId;
                    body = deleteReadonlyNodeRequest.body
                } else {
                    instanceId = deleteReadonlyNodeRequest['instance_id'];
                    body = deleteReadonlyNodeRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling deleteReadonlyNode.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 终结实例节点会话。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteSession(deleteSessionRequest?: DeleteSessionRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/nodes/{node_id}/session",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let nodeId;

            if (deleteSessionRequest !== null && deleteSessionRequest !== undefined) {
                if (deleteSessionRequest instanceof DeleteSessionRequest) {
                    nodeId = deleteSessionRequest.nodeId;
                    body = deleteSessionRequest.body
                } else {
                    nodeId = deleteSessionRequest['node_id'];
                    body = deleteSessionRequest['body'];
                }
            }

        
            if (nodeId === null || nodeId === undefined) {
            throw new RequiredError('nodeId','Required parameter nodeId was null or undefined when calling deleteSession.');
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
         * 获取错误日志下载链接。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        downloadErrorlog(downloadErrorlogRequest?: DownloadErrorlogRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/{instance_id}/errorlog-download",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (downloadErrorlogRequest !== null && downloadErrorlogRequest !== undefined) {
                if (downloadErrorlogRequest instanceof DownloadErrorlogRequest) {
                    instanceId = downloadErrorlogRequest.instanceId;
                    body = downloadErrorlogRequest.body
                } else {
                    instanceId = downloadErrorlogRequest['instance_id'];
                    body = downloadErrorlogRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling downloadErrorlog.');
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
         * 获取慢日志下载链接。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        downloadSlowlog(downloadSlowlogRequest?: DownloadSlowlogRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/{instance_id}/slowlog-download",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (downloadSlowlogRequest !== null && downloadSlowlogRequest !== undefined) {
                if (downloadSlowlogRequest instanceof DownloadSlowlogRequest) {
                    instanceId = downloadSlowlogRequest.instanceId;
                    body = downloadSlowlogRequest.body
                } else {
                    instanceId = downloadSlowlogRequest['instance_id'];
                    body = downloadSlowlogRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling downloadSlowlog.');
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
         * 扩容指定副本集实例的节点数量
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        expandReplicasetNode(expandReplicasetNodeRequest?: ExpandReplicasetNodeRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/{instance_id}/replicaset-node",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (expandReplicasetNodeRequest !== null && expandReplicasetNodeRequest !== undefined) {
                if (expandReplicasetNodeRequest instanceof ExpandReplicasetNodeRequest) {
                    instanceId = expandReplicasetNodeRequest.instanceId;
                    body = expandReplicasetNodeRequest.body
                } else {
                    instanceId = expandReplicasetNodeRequest['instance_id'];
                    body = expandReplicasetNodeRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling expandReplicasetNode.');
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
         * 查询指定参数模板可被应用的实例。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAppliedInstances(listAppliedInstancesRequest?: ListAppliedInstancesRequest) {
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

            if (listAppliedInstancesRequest !== null && listAppliedInstancesRequest !== undefined) {
                if (listAppliedInstancesRequest instanceof ListAppliedInstancesRequest) {
                    configId = listAppliedInstancesRequest.configId;
                    offset = listAppliedInstancesRequest.offset;
                    limit = listAppliedInstancesRequest.limit;
                } else {
                    configId = listAppliedInstancesRequest['config_id'];
                    offset = listAppliedInstancesRequest['offset'];
                    limit = listAppliedInstancesRequest['limit'];
                }
            }

        
            if (configId === null || configId === undefined) {
            throw new RequiredError('configId','Required parameter configId was null or undefined when calling listAppliedInstances.');
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
         * 获取审计日志下载链接。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAuditlogLinks(listAuditlogLinksRequest?: ListAuditlogLinksRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/{instance_id}/auditlog-links",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (listAuditlogLinksRequest !== null && listAuditlogLinksRequest !== undefined) {
                if (listAuditlogLinksRequest instanceof ListAuditlogLinksRequest) {
                    instanceId = listAuditlogLinksRequest.instanceId;
                    body = listAuditlogLinksRequest.body
                } else {
                    instanceId = listAuditlogLinksRequest['instance_id'];
                    body = listAuditlogLinksRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listAuditlogLinks.');
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
         * 获取审计日志列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAuditlogs(listAuditlogsRequest?: ListAuditlogsRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/{instance_id}/auditlog",
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
            
            let nodeId;
            
            let offset;
            
            let limit;

            if (listAuditlogsRequest !== null && listAuditlogsRequest !== undefined) {
                if (listAuditlogsRequest instanceof ListAuditlogsRequest) {
                    instanceId = listAuditlogsRequest.instanceId;
                    startTime = listAuditlogsRequest.startTime;
                    endTime = listAuditlogsRequest.endTime;
                    xLanguage = listAuditlogsRequest.xLanguage;
                    nodeId = listAuditlogsRequest.nodeId;
                    offset = listAuditlogsRequest.offset;
                    limit = listAuditlogsRequest.limit;
                } else {
                    instanceId = listAuditlogsRequest['instance_id'];
                    startTime = listAuditlogsRequest['start_time'];
                    endTime = listAuditlogsRequest['end_time'];
                    xLanguage = listAuditlogsRequest['X-Language'];
                    nodeId = listAuditlogsRequest['node_id'];
                    offset = listAuditlogsRequest['offset'];
                    limit = listAuditlogsRequest['limit'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listAuditlogs.');
            }
            if (startTime === null || startTime === undefined) {
                throw new RequiredError('startTime','Required parameter startTime was null or undefined when calling listAuditlogs.');
            }
            if (startTime !== null && startTime !== undefined) {
                localVarQueryParameter['start_time'] = startTime;
            }
            if (endTime === null || endTime === undefined) {
                throw new RequiredError('endTime','Required parameter endTime was null or undefined when calling listAuditlogs.');
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
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
         * 查询实例可迁移到的可用区。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAz2Migrate(listAz2MigrateRequest?: ListAz2MigrateRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/{instance_id}/migrate/az",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;

            if (listAz2MigrateRequest !== null && listAz2MigrateRequest !== undefined) {
                if (listAz2MigrateRequest instanceof ListAz2MigrateRequest) {
                    instanceId = listAz2MigrateRequest.instanceId;
                } else {
                    instanceId = listAz2MigrateRequest['instance_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listAz2Migrate.');
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据指定条件查询备份列表。
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
            
            let instanceId;
            
            let backupId;
            
            let backupType;
            
            let offset;
            
            let limit;
            
            let beginTime;
            
            let endTime;
            
            let mode;

            if (listBackupsRequest !== null && listBackupsRequest !== undefined) {
                if (listBackupsRequest instanceof ListBackupsRequest) {
                    instanceId = listBackupsRequest.instanceId;
                    backupId = listBackupsRequest.backupId;
                    backupType = listBackupsRequest.backupType;
                    offset = listBackupsRequest.offset;
                    limit = listBackupsRequest.limit;
                    beginTime = listBackupsRequest.beginTime;
                    endTime = listBackupsRequest.endTime;
                    mode = listBackupsRequest.mode;
                } else {
                    instanceId = listBackupsRequest['instance_id'];
                    backupId = listBackupsRequest['backup_id'];
                    backupType = listBackupsRequest['backup_type'];
                    offset = listBackupsRequest['offset'];
                    limit = listBackupsRequest['limit'];
                    beginTime = listBackupsRequest['begin_time'];
                    endTime = listBackupsRequest['end_time'];
                    mode = listBackupsRequest['mode'];
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
            if (mode !== null && mode !== undefined) {
                localVarQueryParameter['mode'] = mode;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取参数模板列表，包括DDS数据库的所有默认参数模板和用户创建的参数模板。
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
            
            let offset;
            
            let limit;

            if (listConfigurationsRequest !== null && listConfigurationsRequest !== undefined) {
                if (listConfigurationsRequest instanceof ListConfigurationsRequest) {
                    offset = listConfigurationsRequest.offset;
                    limit = listConfigurationsRequest.limit;
                } else {
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
                url: "/v3/{project_id}/instances/{instance_id}/db-roles",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let roleName;
            
            let dbName;
            
            let offset;
            
            let limit;

            if (listDatabaseRolesRequest !== null && listDatabaseRolesRequest !== undefined) {
                if (listDatabaseRolesRequest instanceof ListDatabaseRolesRequest) {
                    instanceId = listDatabaseRolesRequest.instanceId;
                    roleName = listDatabaseRolesRequest.roleName;
                    dbName = listDatabaseRolesRequest.dbName;
                    offset = listDatabaseRolesRequest.offset;
                    limit = listDatabaseRolesRequest.limit;
                } else {
                    instanceId = listDatabaseRolesRequest['instance_id'];
                    roleName = listDatabaseRolesRequest['role_name'];
                    dbName = listDatabaseRolesRequest['db_name'];
                    offset = listDatabaseRolesRequest['offset'];
                    limit = listDatabaseRolesRequest['limit'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listDatabaseRoles.');
            }
            if (roleName !== null && roleName !== undefined) {
                localVarQueryParameter['role_name'] = roleName;
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

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询数据库用户列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listDatabaseUsers(listDatabaseUsersRequest?: ListDatabaseUsersRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/{instance_id}/db-user/detail",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let userName;
            
            let dbName;
            
            let offset;
            
            let limit;

            if (listDatabaseUsersRequest !== null && listDatabaseUsersRequest !== undefined) {
                if (listDatabaseUsersRequest instanceof ListDatabaseUsersRequest) {
                    instanceId = listDatabaseUsersRequest.instanceId;
                    userName = listDatabaseUsersRequest.userName;
                    dbName = listDatabaseUsersRequest.dbName;
                    offset = listDatabaseUsersRequest.offset;
                    limit = listDatabaseUsersRequest.limit;
                } else {
                    instanceId = listDatabaseUsersRequest['instance_id'];
                    userName = listDatabaseUsersRequest['user_name'];
                    dbName = listDatabaseUsersRequest['db_name'];
                    offset = listDatabaseUsersRequest['offset'];
                    limit = listDatabaseUsersRequest['limit'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listDatabaseUsers.');
            }
            if (userName !== null && userName !== undefined) {
                localVarQueryParameter['user_name'] = userName;
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

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询数据库列表。
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
            
            let offset;
            
            let limit;

            if (listDatabasesRequest !== null && listDatabasesRequest !== undefined) {
                if (listDatabasesRequest instanceof ListDatabasesRequest) {
                    instanceId = listDatabasesRequest.instanceId;
                    offset = listDatabasesRequest.offset;
                    limit = listDatabasesRequest.limit;
                } else {
                    instanceId = listDatabasesRequest['instance_id'];
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

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询指定实例类型的数据库版本信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listDatastoreVersions(listDatastoreVersionsRequest?: ListDatastoreVersionsRequest) {
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

            if (listDatastoreVersionsRequest !== null && listDatastoreVersionsRequest !== undefined) {
                if (listDatastoreVersionsRequest instanceof ListDatastoreVersionsRequest) {
                    datastoreName = listDatastoreVersionsRequest.datastoreName;
                } else {
                    datastoreName = listDatastoreVersionsRequest['datastore_name'];
                }
            }

        
            if (datastoreName === null || datastoreName === undefined) {
            throw new RequiredError('datastoreName','Required parameter datastoreName was null or undefined when calling listDatastoreVersions.');
            }

            options.pathParams = { 'datastore_name': datastoreName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询数据库错误信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listErrorLogs(listErrorLogsRequest?: ListErrorLogsRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/{instance_id}/errorlog",
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

            if (listErrorLogsRequest !== null && listErrorLogsRequest !== undefined) {
                if (listErrorLogsRequest instanceof ListErrorLogsRequest) {
                    instanceId = listErrorLogsRequest.instanceId;
                    startDate = listErrorLogsRequest.startDate;
                    endDate = listErrorLogsRequest.endDate;
                    nodeId = listErrorLogsRequest.nodeId;
                    type = listErrorLogsRequest.type;
                    offset = listErrorLogsRequest.offset;
                    limit = listErrorLogsRequest.limit;
                } else {
                    instanceId = listErrorLogsRequest['instance_id'];
                    startDate = listErrorLogsRequest['start_date'];
                    endDate = listErrorLogsRequest['end_date'];
                    nodeId = listErrorLogsRequest['node_id'];
                    type = listErrorLogsRequest['type'];
                    offset = listErrorLogsRequest['offset'];
                    limit = listErrorLogsRequest['limit'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listErrorLogs.');
            }
            if (startDate === null || startDate === undefined) {
                throw new RequiredError('startDate','Required parameter startDate was null or undefined when calling listErrorLogs.');
            }
            if (startDate !== null && startDate !== undefined) {
                localVarQueryParameter['start_date'] = startDate;
            }
            if (endDate === null || endDate === undefined) {
                throw new RequiredError('endDate','Required parameter endDate was null or undefined when calling listErrorLogs.');
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
            
            let engineVersion;
            
            let offset;
            
            let limit;

            if (listFlavorInfosRequest !== null && listFlavorInfosRequest !== undefined) {
                if (listFlavorInfosRequest instanceof ListFlavorInfosRequest) {
                    engineName = listFlavorInfosRequest.engineName;
                    engineVersion = listFlavorInfosRequest.engineVersion;
                    offset = listFlavorInfosRequest.offset;
                    limit = listFlavorInfosRequest.limit;
                } else {
                    engineName = listFlavorInfosRequest['engine_name'];
                    engineVersion = listFlavorInfosRequest['engine_version'];
                    offset = listFlavorInfosRequest['offset'];
                    limit = listFlavorInfosRequest['limit'];
                }
            }

        
            if (engineName !== null && engineName !== undefined) {
                localVarQueryParameter['engine_name'] = engineName;
            }
            if (engineVersion !== null && engineVersion !== undefined) {
                localVarQueryParameter['engine_version'] = engineVersion;
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
         * 根据指定条件查询实例列表和详情。
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
            
            let tags;

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
                    tags = listInstancesRequest.tags;
                } else {
                    id = listInstancesRequest['id'];
                    name = listInstancesRequest['name'];
                    mode = listInstancesRequest['mode'];
                    datastoreType = listInstancesRequest['datastore_type'];
                    vpcId = listInstancesRequest['vpc_id'];
                    subnetId = listInstancesRequest['subnet_id'];
                    offset = listInstancesRequest['offset'];
                    limit = listInstancesRequest['limit'];
                    tags = listInstancesRequest['tags'];
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
            if (tags !== null && tags !== undefined) {
                localVarQueryParameter['tags'] = tags;
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
        listInstancesByTags(listInstancesByTagsRequest?: ListInstancesByTagsRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/action",
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
         * 查询LTS日志配置信息。
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
            
            let offset;
            
            let limit;

            if (listLtsConfigsRequest !== null && listLtsConfigsRequest !== undefined) {
                if (listLtsConfigsRequest instanceof ListLtsConfigsRequest) {
                    offset = listLtsConfigsRequest.offset;
                    limit = listLtsConfigsRequest.limit;
                } else {
                    offset = listLtsConfigsRequest['offset'];
                    limit = listLtsConfigsRequest['limit'];
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
         * 查询数据库错误日志信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listLtsErrorLogs(listLtsErrorLogsRequest?: ListLtsErrorLogsRequest) {
            const options = {
                method: "POST",
                url: "/v3.1/{project_id}/instances/{instance_id}/error-logs",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (listLtsErrorLogsRequest !== null && listLtsErrorLogsRequest !== undefined) {
                if (listLtsErrorLogsRequest instanceof ListLtsErrorLogsRequest) {
                    instanceId = listLtsErrorLogsRequest.instanceId;
                    body = listLtsErrorLogsRequest.body
                } else {
                    instanceId = listLtsErrorLogsRequest['instance_id'];
                    body = listLtsErrorLogsRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listLtsErrorLogs.');
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
         * 查询数据库慢日志信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listLtsSlowLogs(listLtsSlowLogsRequest?: ListLtsSlowLogsRequest) {
            const options = {
                method: "POST",
                url: "/v3.1/{project_id}/instances/{instance_id}/slow-logs",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (listLtsSlowLogsRequest !== null && listLtsSlowLogsRequest !== undefined) {
                if (listLtsSlowLogsRequest instanceof ListLtsSlowLogsRequest) {
                    instanceId = listLtsSlowLogsRequest.instanceId;
                    body = listLtsSlowLogsRequest.body
                } else {
                    instanceId = listLtsSlowLogsRequest['instance_id'];
                    body = listLtsSlowLogsRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listLtsSlowLogs.');
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
         * 查询指定project ID下实例的所有标签集合。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listProjectTags() {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/tags",
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
         * 查询回收站实例列表
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
         * 获取可恢复的数据库集合列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listRestoreCollections(listRestoreCollectionsRequest?: ListRestoreCollectionsRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/{instance_id}/restore-collection",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let dbName;
            
            let restoreTime;
            
            let xLanguage;
            
            let offset;
            
            let limit;

            if (listRestoreCollectionsRequest !== null && listRestoreCollectionsRequest !== undefined) {
                if (listRestoreCollectionsRequest instanceof ListRestoreCollectionsRequest) {
                    instanceId = listRestoreCollectionsRequest.instanceId;
                    dbName = listRestoreCollectionsRequest.dbName;
                    restoreTime = listRestoreCollectionsRequest.restoreTime;
                    xLanguage = listRestoreCollectionsRequest.xLanguage;
                    offset = listRestoreCollectionsRequest.offset;
                    limit = listRestoreCollectionsRequest.limit;
                } else {
                    instanceId = listRestoreCollectionsRequest['instance_id'];
                    dbName = listRestoreCollectionsRequest['db_name'];
                    restoreTime = listRestoreCollectionsRequest['restore_time'];
                    xLanguage = listRestoreCollectionsRequest['X-Language'];
                    offset = listRestoreCollectionsRequest['offset'];
                    limit = listRestoreCollectionsRequest['limit'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listRestoreCollections.');
            }
            if (dbName === null || dbName === undefined) {
                throw new RequiredError('dbName','Required parameter dbName was null or undefined when calling listRestoreCollections.');
            }
            if (dbName !== null && dbName !== undefined) {
                localVarQueryParameter['db_name'] = dbName;
            }
            if (restoreTime === null || restoreTime === undefined) {
                throw new RequiredError('restoreTime','Required parameter restoreTime was null or undefined when calling listRestoreCollections.');
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
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取可恢复的数据库列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listRestoreDatabases(listRestoreDatabasesRequest?: ListRestoreDatabasesRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/{instance_id}/restore-database",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let restoreTime;
            
            let xLanguage;
            
            let offset;
            
            let limit;

            if (listRestoreDatabasesRequest !== null && listRestoreDatabasesRequest !== undefined) {
                if (listRestoreDatabasesRequest instanceof ListRestoreDatabasesRequest) {
                    instanceId = listRestoreDatabasesRequest.instanceId;
                    restoreTime = listRestoreDatabasesRequest.restoreTime;
                    xLanguage = listRestoreDatabasesRequest.xLanguage;
                    offset = listRestoreDatabasesRequest.offset;
                    limit = listRestoreDatabasesRequest.limit;
                } else {
                    instanceId = listRestoreDatabasesRequest['instance_id'];
                    restoreTime = listRestoreDatabasesRequest['restore_time'];
                    xLanguage = listRestoreDatabasesRequest['X-Language'];
                    offset = listRestoreDatabasesRequest['offset'];
                    limit = listRestoreDatabasesRequest['limit'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listRestoreDatabases.');
            }
            if (restoreTime === null || restoreTime === undefined) {
                throw new RequiredError('restoreTime','Required parameter restoreTime was null or undefined when calling listRestoreDatabases.');
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
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询实例的可恢复时间段。
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
         * 根据指定条件查询定时任务列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listScheduledTasks(listScheduledTasksRequest?: ListScheduledTasksRequest) {
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

            if (listScheduledTasksRequest !== null && listScheduledTasksRequest !== undefined) {
                if (listScheduledTasksRequest instanceof ListScheduledTasksRequest) {
                    jobName = listScheduledTasksRequest.jobName;
                    jobStatus = listScheduledTasksRequest.jobStatus;
                    instanceId = listScheduledTasksRequest.instanceId;
                    startTime = listScheduledTasksRequest.startTime;
                    endTime = listScheduledTasksRequest.endTime;
                    offset = listScheduledTasksRequest.offset;
                    limit = listScheduledTasksRequest.limit;
                } else {
                    jobName = listScheduledTasksRequest['job_name'];
                    jobStatus = listScheduledTasksRequest['job_status'];
                    instanceId = listScheduledTasksRequest['instance_id'];
                    startTime = listScheduledTasksRequest['start_time'];
                    endTime = listScheduledTasksRequest['end_time'];
                    offset = listScheduledTasksRequest['offset'];
                    limit = listScheduledTasksRequest['limit'];
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
         * 查询实例节点会话。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listSessions(listSessionsRequest?: ListSessionsRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/nodes/{node_id}/sessions",
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
            
            let planSummary;
            
            let type;
            
            let namespace;
            
            let costTime;

            if (listSessionsRequest !== null && listSessionsRequest !== undefined) {
                if (listSessionsRequest instanceof ListSessionsRequest) {
                    nodeId = listSessionsRequest.nodeId;
                    offset = listSessionsRequest.offset;
                    limit = listSessionsRequest.limit;
                    planSummary = listSessionsRequest.planSummary;
                    type = listSessionsRequest.type;
                    namespace = listSessionsRequest.namespace;
                    costTime = listSessionsRequest.costTime;
                } else {
                    nodeId = listSessionsRequest['node_id'];
                    offset = listSessionsRequest['offset'];
                    limit = listSessionsRequest['limit'];
                    planSummary = listSessionsRequest['plan_summary'];
                    type = listSessionsRequest['type'];
                    namespace = listSessionsRequest['namespace'];
                    costTime = listSessionsRequest['cost_time'];
                }
            }

        
            if (nodeId === null || nodeId === undefined) {
            throw new RequiredError('nodeId','Required parameter nodeId was null or undefined when calling listSessions.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (planSummary !== null && planSummary !== undefined) {
                localVarQueryParameter['plan_summary'] = planSummary;
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }
            if (namespace !== null && namespace !== undefined) {
                localVarQueryParameter['namespace'] = namespace;
            }
            if (costTime !== null && costTime !== undefined) {
                localVarQueryParameter['cost_time'] = costTime;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'node_id': nodeId, };
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
         * 获取SSL证书下载地址
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listSslCertDownloadAddress(listSslCertDownloadAddressRequest?: ListSslCertDownloadAddressRequest) {
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

            if (listSslCertDownloadAddressRequest !== null && listSslCertDownloadAddressRequest !== undefined) {
                if (listSslCertDownloadAddressRequest instanceof ListSslCertDownloadAddressRequest) {
                    instanceId = listSslCertDownloadAddressRequest.instanceId;
                    xLanguage = listSslCertDownloadAddressRequest.xLanguage;
                } else {
                    instanceId = listSslCertDownloadAddressRequest['instance_id'];
                    xLanguage = listSslCertDownloadAddressRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listSslCertDownloadAddress.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询当前区域下的数据库磁盘类型。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listStorageType(listStorageTypeRequest?: ListStorageTypeRequest) {
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
            
            let engineName;

            if (listStorageTypeRequest !== null && listStorageTypeRequest !== undefined) {
                if (listStorageTypeRequest instanceof ListStorageTypeRequest) {
                    engineName = listStorageTypeRequest.engineName;
                } else {
                    engineName = listStorageTypeRequest['engine_name'];
                }
            }

        
            if (engineName !== null && engineName !== undefined) {
                localVarQueryParameter['engine_name'] = engineName;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据指定条件查询任务中心中的任务列表和详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listTasks(listTasksRequest?: ListTasksRequest) {
            const options = {
                method: "GET",
                url: "/v3.1/{project_id}/jobs",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let startTime;
            
            let endTime;
            
            let status;
            
            let name;
            
            let offset;
            
            let limit;

            if (listTasksRequest !== null && listTasksRequest !== undefined) {
                if (listTasksRequest instanceof ListTasksRequest) {
                    startTime = listTasksRequest.startTime;
                    endTime = listTasksRequest.endTime;
                    status = listTasksRequest.status;
                    name = listTasksRequest.name;
                    offset = listTasksRequest.offset;
                    limit = listTasksRequest.limit;
                } else {
                    startTime = listTasksRequest['start_time'];
                    endTime = listTasksRequest['end_time'];
                    status = listTasksRequest['status'];
                    name = listTasksRequest['name'];
                    offset = listTasksRequest['offset'];
                    limit = listTasksRequest['limit'];
                }
            }

        
            if (startTime === null || startTime === undefined) {
                throw new RequiredError('startTime','Required parameter startTime was null or undefined when calling listTasks.');
            }
            if (startTime !== null && startTime !== undefined) {
                localVarQueryParameter['start_time'] = startTime;
            }
            if (endTime === null || endTime === undefined) {
                throw new RequiredError('endTime','Required parameter endTime was null or undefined when calling listTasks.');
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
         * 实例可用区迁移。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        migrateAz(migrateAzRequest?: MigrateAzRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/{instance_id}/migrate",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (migrateAzRequest !== null && migrateAzRequest !== undefined) {
                if (migrateAzRequest instanceof MigrateAzRequest) {
                    instanceId = migrateAzRequest.instanceId;
                    body = migrateAzRequest.body
                } else {
                    instanceId = migrateAzRequest['instance_id'];
                    body = migrateAzRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling migrateAz.');
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

            if (resetConfigurationRequest !== null && resetConfigurationRequest !== undefined) {
                if (resetConfigurationRequest instanceof ResetConfigurationRequest) {
                    configId = resetConfigurationRequest.configId;
                } else {
                    configId = resetConfigurationRequest['config_id'];
                }
            }

        
            if (configId === null || configId === undefined) {
            throw new RequiredError('configId','Required parameter configId was null or undefined when calling resetConfiguration.');
            }

            options.pathParams = { 'config_id': configId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改数据库用户密码。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        resetPassword(resetPasswordRequest?: ResetPasswordRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/instances/{instance_id}/reset-password",
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
         * 变更实例的规格。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        resizeInstance(resizeInstanceRequest?: ResizeInstanceRequest) {
            const options = {
                method: "POST",
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
         * 扩容实例相关的存储容量大小。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        resizeInstanceVolume(resizeInstanceVolumeRequest?: ResizeInstanceVolumeRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/{instance_id}/enlarge-volume",
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
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (restartInstanceRequest !== null && restartInstanceRequest !== undefined) {
                if (restartInstanceRequest instanceof RestartInstanceRequest) {
                    instanceId = restartInstanceRequest.instanceId;
                    body = restartInstanceRequest.body
                } else {
                    instanceId = restartInstanceRequest['instance_id'];
                    body = restartInstanceRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling restartInstance.');
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
         * 恢复到当前实例。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        restoreInstance(restoreInstanceRequest?: RestoreInstanceRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/recovery",
                contentType: "application/json",
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
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 库表级时间点恢复。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        restoreInstanceFromCollection(restoreInstanceFromCollectionRequest?: RestoreInstanceFromCollectionRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/{instance_id}/restore/collections",
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

            if (restoreInstanceFromCollectionRequest !== null && restoreInstanceFromCollectionRequest !== undefined) {
                if (restoreInstanceFromCollectionRequest instanceof RestoreInstanceFromCollectionRequest) {
                    instanceId = restoreInstanceFromCollectionRequest.instanceId;
                    body = restoreInstanceFromCollectionRequest.body
                    xLanguage = restoreInstanceFromCollectionRequest.xLanguage;
                } else {
                    instanceId = restoreInstanceFromCollectionRequest['instance_id'];
                    body = restoreInstanceFromCollectionRequest['body'];
                    xLanguage = restoreInstanceFromCollectionRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling restoreInstanceFromCollection.');
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
         * 根据备份恢复新实例。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        restoreNewInstance(restoreNewInstanceRequest?: RestoreNewInstanceRequest) {
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

            if (restoreNewInstanceRequest !== null && restoreNewInstanceRequest !== undefined) {
                if (restoreNewInstanceRequest instanceof RestoreNewInstanceRequest) {
                    body = restoreNewInstanceRequest.body
                } else {
                    body = restoreNewInstanceRequest['body'];
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
         * 设置审计日志策略。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        setAuditlogPolicy(setAuditlogPolicyRequest?: SetAuditlogPolicyRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/{instance_id}/auditlog-policy",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (setAuditlogPolicyRequest !== null && setAuditlogPolicyRequest !== undefined) {
                if (setAuditlogPolicyRequest instanceof SetAuditlogPolicyRequest) {
                    instanceId = setAuditlogPolicyRequest.instanceId;
                    body = setAuditlogPolicyRequest.body
                } else {
                    instanceId = setAuditlogPolicyRequest['instance_id'];
                    body = setAuditlogPolicyRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling setAuditlogPolicy.');
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
        setAutoEnlargePolicies(setAutoEnlargePoliciesRequest?: SetAutoEnlargePoliciesRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/instances/auto-enlarge-volume-policies",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (setAutoEnlargePoliciesRequest !== null && setAutoEnlargePoliciesRequest !== undefined) {
                if (setAutoEnlargePoliciesRequest instanceof SetAutoEnlargePoliciesRequest) {
                    body = setAutoEnlargePoliciesRequest.body
                } else {
                    body = setAutoEnlargePoliciesRequest['body'];
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
         * 设置集群均衡开关。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        setBalancerSwitch(setBalancerSwitchRequest?: SetBalancerSwitchRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/instances/{instance_id}/balancer/{action}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let action;

            if (setBalancerSwitchRequest !== null && setBalancerSwitchRequest !== undefined) {
                if (setBalancerSwitchRequest instanceof SetBalancerSwitchRequest) {
                    instanceId = setBalancerSwitchRequest.instanceId;
                    action = setBalancerSwitchRequest.action;
                } else {
                    instanceId = setBalancerSwitchRequest['instance_id'];
                    action = setBalancerSwitchRequest['action'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling setBalancerSwitch.');
            }
            if (action === null || action === undefined) {
            throw new RequiredError('action','Required parameter action was null or undefined when calling setBalancerSwitch.');
            }

            options.pathParams = { 'instance_id': instanceId,'action': action, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 设置集群均衡活动时间窗。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        setBalancerWindow(setBalancerWindowRequest?: SetBalancerWindowRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/instances/{instance_id}/balancer/active-window",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (setBalancerWindowRequest !== null && setBalancerWindowRequest !== undefined) {
                if (setBalancerWindowRequest instanceof SetBalancerWindowRequest) {
                    instanceId = setBalancerWindowRequest.instanceId;
                    body = setBalancerWindowRequest.body
                } else {
                    instanceId = setBalancerWindowRequest['instance_id'];
                    body = setBalancerWindowRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling setBalancerWindow.');
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
         * 设置实例回收站策略
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
         * 查询审计日志策略。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showAuditlogPolicy(showAuditlogPolicyRequest?: ShowAuditlogPolicyRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/{instance_id}/auditlog-policy",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let xLanguage;

            if (showAuditlogPolicyRequest !== null && showAuditlogPolicyRequest !== undefined) {
                if (showAuditlogPolicyRequest instanceof ShowAuditlogPolicyRequest) {
                    instanceId = showAuditlogPolicyRequest.instanceId;
                    xLanguage = showAuditlogPolicyRequest.xLanguage;
                } else {
                    instanceId = showAuditlogPolicyRequest['instance_id'];
                    xLanguage = showAuditlogPolicyRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showAuditlogPolicy.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询磁盘自动扩容策略。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showAutoEnlargePolicy(showAutoEnlargePolicyRequest?: ShowAutoEnlargePolicyRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/{instance_id}/auto-enlarge-volume-policy",
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
         * 获取备份下载链接。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showBackupDownloadLink(showBackupDownloadLinkRequest?: ShowBackupDownloadLinkRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/backups/download-file",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let backupId;
            
            let xLanguage;

            if (showBackupDownloadLinkRequest !== null && showBackupDownloadLinkRequest !== undefined) {
                if (showBackupDownloadLinkRequest instanceof ShowBackupDownloadLinkRequest) {
                    instanceId = showBackupDownloadLinkRequest.instanceId;
                    backupId = showBackupDownloadLinkRequest.backupId;
                    xLanguage = showBackupDownloadLinkRequest.xLanguage;
                } else {
                    instanceId = showBackupDownloadLinkRequest['instance_id'];
                    backupId = showBackupDownloadLinkRequest['backup_id'];
                    xLanguage = showBackupDownloadLinkRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
                throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showBackupDownloadLink.');
            }
            if (instanceId !== null && instanceId !== undefined) {
                localVarQueryParameter['instance_id'] = instanceId;
            }
            if (backupId === null || backupId === undefined) {
                throw new RequiredError('backupId','Required parameter backupId was null or undefined when calling showBackupDownloadLink.');
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
         * 查询副本集跨网段访问配置
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showClientNetwork(showClientNetworkRequest?: ShowClientNetworkRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/{instance_id}/client-network",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;

            if (showClientNetworkRequest !== null && showClientNetworkRequest !== undefined) {
                if (showClientNetworkRequest instanceof ShowClientNetworkRequest) {
                    instanceId = showClientNetworkRequest.instanceId;
                } else {
                    instanceId = showClientNetworkRequest['instance_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showClientNetwork.');
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询参数模板应用历史
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showConfigurationAppliedHistory(showConfigurationAppliedHistoryRequest?: ShowConfigurationAppliedHistoryRequest) {
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

            if (showConfigurationAppliedHistoryRequest !== null && showConfigurationAppliedHistoryRequest !== undefined) {
                if (showConfigurationAppliedHistoryRequest instanceof ShowConfigurationAppliedHistoryRequest) {
                    configId = showConfigurationAppliedHistoryRequest.configId;
                    offset = showConfigurationAppliedHistoryRequest.offset;
                    limit = showConfigurationAppliedHistoryRequest.limit;
                } else {
                    configId = showConfigurationAppliedHistoryRequest['config_id'];
                    offset = showConfigurationAppliedHistoryRequest['offset'];
                    limit = showConfigurationAppliedHistoryRequest['limit'];
                }
            }

        
            if (configId === null || configId === undefined) {
            throw new RequiredError('configId','Required parameter configId was null or undefined when calling showConfigurationAppliedHistory.');
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
         * 查询参数模板修改历史。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showConfigurationModifyHistory(showConfigurationModifyHistoryRequest?: ShowConfigurationModifyHistoryRequest) {
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
            
            let offset;
            
            let limit;

            if (showConfigurationModifyHistoryRequest !== null && showConfigurationModifyHistoryRequest !== undefined) {
                if (showConfigurationModifyHistoryRequest instanceof ShowConfigurationModifyHistoryRequest) {
                    configId = showConfigurationModifyHistoryRequest.configId;
                    offset = showConfigurationModifyHistoryRequest.offset;
                    limit = showConfigurationModifyHistoryRequest.limit;
                } else {
                    configId = showConfigurationModifyHistoryRequest['config_id'];
                    offset = showConfigurationModifyHistoryRequest['offset'];
                    limit = showConfigurationModifyHistoryRequest['limit'];
                }
            }

        
            if (configId === null || configId === undefined) {
            throw new RequiredError('configId','Required parameter configId was null or undefined when calling showConfigurationModifyHistory.');
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
         * 获取参数模板的详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showConfigurationParameter(showConfigurationParameterRequest?: ShowConfigurationParameterRequest) {
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

            if (showConfigurationParameterRequest !== null && showConfigurationParameterRequest !== undefined) {
                if (showConfigurationParameterRequest instanceof ShowConfigurationParameterRequest) {
                    configId = showConfigurationParameterRequest.configId;
                } else {
                    configId = showConfigurationParameterRequest['config_id'];
                }
            }

        
            if (configId === null || configId === undefined) {
            throw new RequiredError('configId','Required parameter configId was null or undefined when calling showConfigurationParameter.');
            }

            options.pathParams = { 'config_id': configId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询客户端IP访问至DDS数据库实例的连接数统计信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showConnectionStatistics(showConnectionStatisticsRequest?: ShowConnectionStatisticsRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/{instance_id}/conn-statistics",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let nodeId;

            if (showConnectionStatisticsRequest !== null && showConnectionStatisticsRequest !== undefined) {
                if (showConnectionStatisticsRequest instanceof ShowConnectionStatisticsRequest) {
                    instanceId = showConnectionStatisticsRequest.instanceId;
                    nodeId = showConnectionStatisticsRequest.nodeId;
                } else {
                    instanceId = showConnectionStatisticsRequest['instance_id'];
                    nodeId = showConnectionStatisticsRequest['node_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showConnectionStatistics.');
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
         * 查询实例磁盘信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showDiskUsage(showDiskUsageRequest?: ShowDiskUsageRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/{instance_id}/disk-usage",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let xLanguage;

            if (showDiskUsageRequest !== null && showDiskUsageRequest !== undefined) {
                if (showDiskUsageRequest instanceof ShowDiskUsageRequest) {
                    instanceId = showDiskUsageRequest.instanceId;
                    xLanguage = showDiskUsageRequest.xLanguage;
                } else {
                    instanceId = showDiskUsageRequest['instance_id'];
                    xLanguage = showDiskUsageRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showDiskUsage.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取指定实例的参数，可以是实例，组，节点的参数模板。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showEntityConfiguration(showEntityConfigurationRequest?: ShowEntityConfigurationRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/{instance_id}/configurations",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let entityId;

            if (showEntityConfigurationRequest !== null && showEntityConfigurationRequest !== undefined) {
                if (showEntityConfigurationRequest instanceof ShowEntityConfigurationRequest) {
                    instanceId = showEntityConfigurationRequest.instanceId;
                    entityId = showEntityConfigurationRequest.entityId;
                } else {
                    instanceId = showEntityConfigurationRequest['instance_id'];
                    entityId = showEntityConfigurationRequest['entity_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showEntityConfiguration.');
            }
            if (entityId === null || entityId === undefined) {
                throw new RequiredError('entityId','Required parameter entityId was null or undefined when calling showEntityConfiguration.');
            }
            if (entityId !== null && entityId !== undefined) {
                localVarQueryParameter['entity_id'] = entityId;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询实例参数的修改历史。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showInstanceConfigurationModifyHistory(showInstanceConfigurationModifyHistoryRequest?: ShowInstanceConfigurationModifyHistoryRequest) {
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
            
            let entityId;
            
            let offset;
            
            let limit;

            if (showInstanceConfigurationModifyHistoryRequest !== null && showInstanceConfigurationModifyHistoryRequest !== undefined) {
                if (showInstanceConfigurationModifyHistoryRequest instanceof ShowInstanceConfigurationModifyHistoryRequest) {
                    instanceId = showInstanceConfigurationModifyHistoryRequest.instanceId;
                    entityId = showInstanceConfigurationModifyHistoryRequest.entityId;
                    offset = showInstanceConfigurationModifyHistoryRequest.offset;
                    limit = showInstanceConfigurationModifyHistoryRequest.limit;
                } else {
                    instanceId = showInstanceConfigurationModifyHistoryRequest['instance_id'];
                    entityId = showInstanceConfigurationModifyHistoryRequest['entity_id'];
                    offset = showInstanceConfigurationModifyHistoryRequest['offset'];
                    limit = showInstanceConfigurationModifyHistoryRequest['limit'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showInstanceConfigurationModifyHistory.');
            }
            if (entityId === null || entityId === undefined) {
                throw new RequiredError('entityId','Required parameter entityId was null or undefined when calling showInstanceConfigurationModifyHistory.');
            }
            if (entityId !== null && entityId !== undefined) {
                localVarQueryParameter['entity_id'] = entityId;
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
         * 获取DDS任务中心指定ID的任务信息。
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
         * 获取killOp规则列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showKillOpRuleRuleList(showKillOpRuleRuleListRequest?: ShowKillOpRuleRuleListRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/{instance_id}/kill-op-rule",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let operationTypes;
            
            let namespaces;
            
            let status;
            
            let planSummary;
            
            let offset;
            
            let limit;

            if (showKillOpRuleRuleListRequest !== null && showKillOpRuleRuleListRequest !== undefined) {
                if (showKillOpRuleRuleListRequest instanceof ShowKillOpRuleRuleListRequest) {
                    instanceId = showKillOpRuleRuleListRequest.instanceId;
                    operationTypes = showKillOpRuleRuleListRequest.operationTypes;
                    namespaces = showKillOpRuleRuleListRequest.namespaces;
                    status = showKillOpRuleRuleListRequest.status;
                    planSummary = showKillOpRuleRuleListRequest.planSummary;
                    offset = showKillOpRuleRuleListRequest.offset;
                    limit = showKillOpRuleRuleListRequest.limit;
                } else {
                    instanceId = showKillOpRuleRuleListRequest['instance_id'];
                    operationTypes = showKillOpRuleRuleListRequest['operation_types'];
                    namespaces = showKillOpRuleRuleListRequest['namespaces'];
                    status = showKillOpRuleRuleListRequest['status'];
                    planSummary = showKillOpRuleRuleListRequest['plan_summary'];
                    offset = showKillOpRuleRuleListRequest['offset'];
                    limit = showKillOpRuleRuleListRequest['limit'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showKillOpRuleRuleList.');
            }
            if (operationTypes !== null && operationTypes !== undefined) {
                localVarQueryParameter['operation_types'] = operationTypes;
            }
            if (namespaces !== null && namespaces !== undefined) {
                localVarQueryParameter['namespaces'] = namespaces;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (planSummary !== null && planSummary !== undefined) {
                localVarQueryParameter['plan_summary'] = planSummary;
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
         * 查询单租户在DDS服务下的资源配额，包括单节点实例配额、副本集实例配额、集群实例配额等。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showQuotas() {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/quotas",
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
         * 查询实例回收站策略
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
         * 查询数据库复制集名称
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showReplSetName(showReplSetNameRequest?: ShowReplSetNameRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/{instance_id}/replica-set/name",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;

            if (showReplSetNameRequest !== null && showReplSetNameRequest !== undefined) {
                if (showReplSetNameRequest instanceof ShowReplSetNameRequest) {
                    instanceId = showReplSetNameRequest.instanceId;
                } else {
                    instanceId = showReplSetNameRequest['instance_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showReplSetName.');
            }

            options.pathParams = { 'instance_id': instanceId, };
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
         * 查询集群均衡设置。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showShardingBalancer(showShardingBalancerRequest?: ShowShardingBalancerRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/{instance_id}/balancer",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;

            if (showShardingBalancerRequest !== null && showShardingBalancerRequest !== undefined) {
                if (showShardingBalancerRequest instanceof ShowShardingBalancerRequest) {
                    instanceId = showShardingBalancerRequest.instanceId;
                } else {
                    instanceId = showShardingBalancerRequest['instance_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showShardingBalancer.');
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询慢日志明文开关
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showSlowlogDesensitizationSwitch(showSlowlogDesensitizationSwitchRequest?: ShowSlowlogDesensitizationSwitchRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/{instance_id}/slowlog-desensitization/status",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let xLanguage;

            if (showSlowlogDesensitizationSwitchRequest !== null && showSlowlogDesensitizationSwitchRequest !== undefined) {
                if (showSlowlogDesensitizationSwitchRequest instanceof ShowSlowlogDesensitizationSwitchRequest) {
                    instanceId = showSlowlogDesensitizationSwitchRequest.instanceId;
                    xLanguage = showSlowlogDesensitizationSwitchRequest.xLanguage;
                } else {
                    instanceId = showSlowlogDesensitizationSwitchRequest['instance_id'];
                    xLanguage = showSlowlogDesensitizationSwitchRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showSlowlogDesensitizationSwitch.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询数据库补丁升级预估时长
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showUpgradeDuration(showUpgradeDurationRequest?: ShowUpgradeDurationRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/{instance_id}/db-upgrade-duration",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let xLanguage;

            if (showUpgradeDurationRequest !== null && showUpgradeDurationRequest !== undefined) {
                if (showUpgradeDurationRequest instanceof ShowUpgradeDurationRequest) {
                    instanceId = showUpgradeDurationRequest.instanceId;
                    xLanguage = showUpgradeDurationRequest.xLanguage;
                } else {
                    instanceId = showUpgradeDurationRequest['instance_id'];
                    xLanguage = showUpgradeDurationRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showUpgradeDuration.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除实例的节点。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        shrinkInstanceNodes(shrinkInstanceNodesRequest?: ShrinkInstanceNodesRequest) {
            const options = {
                method: "DELETE",
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

            if (shrinkInstanceNodesRequest !== null && shrinkInstanceNodesRequest !== undefined) {
                if (shrinkInstanceNodesRequest instanceof ShrinkInstanceNodesRequest) {
                    instanceId = shrinkInstanceNodesRequest.instanceId;
                    body = shrinkInstanceNodesRequest.body
                } else {
                    instanceId = shrinkInstanceNodesRequest['instance_id'];
                    body = shrinkInstanceNodesRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling shrinkInstanceNodes.');
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
         * 指定实例变更参数模板。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        switchConfiguration(switchConfigurationRequest?: SwitchConfigurationRequest) {
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

            if (switchConfigurationRequest !== null && switchConfigurationRequest !== undefined) {
                if (switchConfigurationRequest instanceof SwitchConfigurationRequest) {
                    configId = switchConfigurationRequest.configId;
                    body = switchConfigurationRequest.body
                } else {
                    configId = switchConfigurationRequest['config_id'];
                    body = switchConfigurationRequest['body'];
                }
            }

        
            if (configId === null || configId === undefined) {
            throw new RequiredError('configId','Required parameter configId was null or undefined when calling switchConfiguration.');
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
         * 支持副本集、shard和config备节点强制升主。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        switchInstancePrimary(switchInstancePrimaryRequest?: SwitchInstancePrimaryRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/{instance_id}/nodes/{node_id}/primary",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let nodeId;

            if (switchInstancePrimaryRequest !== null && switchInstancePrimaryRequest !== undefined) {
                if (switchInstancePrimaryRequest instanceof SwitchInstancePrimaryRequest) {
                    instanceId = switchInstancePrimaryRequest.instanceId;
                    nodeId = switchInstancePrimaryRequest.nodeId;
                } else {
                    instanceId = switchInstancePrimaryRequest['instance_id'];
                    nodeId = switchInstancePrimaryRequest['node_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling switchInstancePrimary.');
            }
            if (nodeId === null || nodeId === undefined) {
            throw new RequiredError('nodeId','Required parameter nodeId was null or undefined when calling switchInstancePrimary.');
            }

            options.pathParams = { 'instance_id': instanceId,'node_id': nodeId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 开启或关闭指定实例的秒级监控。
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
         * 设置实例的慢日志明文开关。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        switchSlowlogDesensitization(switchSlowlogDesensitizationRequest?: SwitchSlowlogDesensitizationRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/instances/{instance_id}/slowlog-desensitization/{status}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let status;
            
            let xLanguage;

            if (switchSlowlogDesensitizationRequest !== null && switchSlowlogDesensitizationRequest !== undefined) {
                if (switchSlowlogDesensitizationRequest instanceof SwitchSlowlogDesensitizationRequest) {
                    instanceId = switchSlowlogDesensitizationRequest.instanceId;
                    status = switchSlowlogDesensitizationRequest.status;
                    xLanguage = switchSlowlogDesensitizationRequest.xLanguage;
                } else {
                    instanceId = switchSlowlogDesensitizationRequest['instance_id'];
                    status = switchSlowlogDesensitizationRequest['status'];
                    xLanguage = switchSlowlogDesensitizationRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling switchSlowlogDesensitization.');
            }
            if (status === null || status === undefined) {
            throw new RequiredError('status','Required parameter status was null or undefined when calling switchSlowlogDesensitization.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.pathParams = { 'instance_id': instanceId,'status': status, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 切换实例的SSL开关
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        switchSsl(switchSslRequest?: SwitchSslRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/{instance_id}/switch-ssl",
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
         * 切换副本集实例下的主备节点
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        switchoverReplicaSet(switchoverReplicaSetRequest?: SwitchoverReplicaSetRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/{instance_id}/switchover",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;

            if (switchoverReplicaSetRequest !== null && switchoverReplicaSetRequest !== undefined) {
                if (switchoverReplicaSetRequest instanceof SwitchoverReplicaSetRequest) {
                    instanceId = switchoverReplicaSetRequest.instanceId;
                } else {
                    instanceId = switchoverReplicaSetRequest['instance_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling switchoverReplicaSet.');
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 副本集跨网段访问配置。
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
         * 修改指定参数模板的参数信息，包括名称、描述、指定参数的值。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateConfigurationParameter(updateConfigurationParameterRequest?: UpdateConfigurationParameterRequest) {
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

            if (updateConfigurationParameterRequest !== null && updateConfigurationParameterRequest !== undefined) {
                if (updateConfigurationParameterRequest instanceof UpdateConfigurationParameterRequest) {
                    configId = updateConfigurationParameterRequest.configId;
                    body = updateConfigurationParameterRequest.body
                } else {
                    configId = updateConfigurationParameterRequest['config_id'];
                    body = updateConfigurationParameterRequest['body'];
                }
            }

        
            if (configId === null || configId === undefined) {
            throw new RequiredError('configId','Required parameter configId was null or undefined when calling updateConfigurationParameter.');
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
         * 修改指定实例的参数，可以是实例，组，节点的参数模板。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateEntityConfiguration(updateEntityConfigurationRequest?: UpdateEntityConfigurationRequest) {
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

            if (updateEntityConfigurationRequest !== null && updateEntityConfigurationRequest !== undefined) {
                if (updateEntityConfigurationRequest instanceof UpdateEntityConfigurationRequest) {
                    instanceId = updateEntityConfigurationRequest.instanceId;
                    body = updateEntityConfigurationRequest.body
                } else {
                    instanceId = updateEntityConfigurationRequest['instance_id'];
                    body = updateEntityConfigurationRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updateEntityConfiguration.');
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
                url: "/v3/{project_id}/instances/{instance_id}/modify-name",
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
         * 修改数据库实例的端口。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateInstancePort(updateInstancePortRequest?: UpdateInstancePortRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/{instance_id}/modify-port",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (updateInstancePortRequest !== null && updateInstancePortRequest !== undefined) {
                if (updateInstancePortRequest instanceof UpdateInstancePortRequest) {
                    instanceId = updateInstancePortRequest.instanceId;
                    body = updateInstancePortRequest.body
                } else {
                    instanceId = updateInstancePortRequest['instance_id'];
                    body = updateInstancePortRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updateInstancePort.');
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
         * 修改实例备注。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateInstanceRemark(updateInstanceRemarkRequest?: UpdateInstanceRemarkRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/instances/{instance_id}/remark",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (updateInstanceRemarkRequest !== null && updateInstanceRemarkRequest !== undefined) {
                if (updateInstanceRemarkRequest instanceof UpdateInstanceRemarkRequest) {
                    instanceId = updateInstanceRemarkRequest.instanceId;
                    body = updateInstanceRemarkRequest.body
                } else {
                    instanceId = updateInstanceRemarkRequest['instance_id'];
                    body = updateInstanceRemarkRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updateInstanceRemark.');
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
         * 启用/禁用killOp规则。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateKillOpRule(updateKillOpRuleRequest?: UpdateKillOpRuleRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/instances/{instance_id}/kill-op-rule",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (updateKillOpRuleRequest !== null && updateKillOpRuleRequest !== undefined) {
                if (updateKillOpRuleRequest instanceof UpdateKillOpRuleRequest) {
                    instanceId = updateKillOpRuleRequest.instanceId;
                    body = updateKillOpRuleRequest.body
                } else {
                    instanceId = updateKillOpRuleRequest['instance_id'];
                    body = updateKillOpRuleRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updateKillOpRule.');
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
         * 将实例日志与LTS日志流关联，后台将自动上传实例日志到关联的LTS日志流里。
         * 关联成功后，会产生一定费用，具体计费可参考云日志服务（LTS）的定价详情。
         * 系统会为当前选择的日志流创建对应日志类型的结构化配置。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateLtsConfig(updateLtsConfigRequest?: UpdateLtsConfigRequest) {
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

            if (updateLtsConfigRequest !== null && updateLtsConfigRequest !== undefined) {
                if (updateLtsConfigRequest instanceof UpdateLtsConfigRequest) {
                    body = updateLtsConfigRequest.body
                } else {
                    body = updateLtsConfigRequest['body'];
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
         * 修改数据库复制集名称
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateReplSetName(updateReplSetNameRequest?: UpdateReplSetNameRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/instances/{instance_id}/replica-set/name",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (updateReplSetNameRequest !== null && updateReplSetNameRequest !== undefined) {
                if (updateReplSetNameRequest instanceof UpdateReplSetNameRequest) {
                    instanceId = updateReplSetNameRequest.instanceId;
                    body = updateReplSetNameRequest.body
                } else {
                    instanceId = updateReplSetNameRequest['instance_id'];
                    body = updateReplSetNameRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updateReplSetName.');
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
         * 变更实例关联的安全组
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateSecurityGroup(updateSecurityGroupRequest?: UpdateSecurityGroupRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/{instance_id}/modify-security-group",
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
         * 升级数据库补丁版本。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        upgradeDatabaseVersion(upgradeDatabaseVersionRequest?: UpgradeDatabaseVersionRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/{instance_id}/db-upgrade",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (upgradeDatabaseVersionRequest !== null && upgradeDatabaseVersionRequest !== undefined) {
                if (upgradeDatabaseVersionRequest instanceof UpgradeDatabaseVersionRequest) {
                    instanceId = upgradeDatabaseVersionRequest.instanceId;
                    body = upgradeDatabaseVersionRequest.body
                } else {
                    instanceId = upgradeDatabaseVersionRequest['instance_id'];
                    body = upgradeDatabaseVersionRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling upgradeDatabaseVersion.');
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
         * 校验参数模板名称是否存在。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        validateConfigurationName(validateConfigurationNameRequest?: ValidateConfigurationNameRequest) {
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

            if (validateConfigurationNameRequest !== null && validateConfigurationNameRequest !== undefined) {
                if (validateConfigurationNameRequest instanceof ValidateConfigurationNameRequest) {
                    name = validateConfigurationNameRequest.name;
                } else {
                    name = validateConfigurationNameRequest['name'];
                }
            }

        
            if (name === null || name === undefined) {
                throw new RequiredError('name','Required parameter name was null or undefined when calling validateConfigurationName.');
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }

            options.queryParams = localVarQueryParameter;
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

function newClient(client: HcClient): DdsClient {
    return new DdsClient(client);
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