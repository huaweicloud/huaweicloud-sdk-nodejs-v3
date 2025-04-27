import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { AccessControlRule } from './model/AccessControlRule';
import { AddDatabasePermissionRequest } from './model/AddDatabasePermissionRequest';
import { AddDatabasePermissionResponse } from './model/AddDatabasePermissionResponse';
import { ApplicableInstances } from './model/ApplicableInstances';
import { ApplyConfigurationRequestBody } from './model/ApplyConfigurationRequestBody';
import { AutoScalingRecordInfo } from './model/AutoScalingRecordInfo';
import { AutoScalingSwitchStatus } from './model/AutoScalingSwitchStatus';
import { Backup } from './model/Backup';
import { BackupEncryptRequest } from './model/BackupEncryptRequest';
import { BackupPolicy } from './model/BackupPolicy';
import { Backups } from './model/Backups';
import { BatchOperateInstanceTagRequestBody } from './model/BatchOperateInstanceTagRequestBody';
import { BatchTagActionRequest } from './model/BatchTagActionRequest';
import { BatchTagActionResponse } from './model/BatchTagActionResponse';
import { CancelGaussMySqlInstanceEipRequest } from './model/CancelGaussMySqlInstanceEipRequest';
import { CancelGaussMySqlInstanceEipResponse } from './model/CancelGaussMySqlInstanceEipResponse';
import { CancelScheduleTask } from './model/CancelScheduleTask';
import { CancelScheduleTaskRequest } from './model/CancelScheduleTaskRequest';
import { CancelScheduleTaskResponse } from './model/CancelScheduleTaskResponse';
import { ChDatabaseConfigCheckResult } from './model/ChDatabaseConfigCheckResult';
import { ChDatabaseConfigResponse } from './model/ChDatabaseConfigResponse';
import { ChDatabaseConfigsInfo } from './model/ChDatabaseConfigsInfo';
import { ChDatabaseParameterInfo } from './model/ChDatabaseParameterInfo';
import { ChDatabaseReplicationInfo } from './model/ChDatabaseReplicationInfo';
import { ChDatabaseTableConfigCheckResult } from './model/ChDatabaseTableConfigCheckResult';
import { ChDatabaseTableReplConfigInfo } from './model/ChDatabaseTableReplConfigInfo';
import { ChDatabaseTablesConfigsInfo } from './model/ChDatabaseTablesConfigsInfo';
import { ChEnlargeVolumeRequestBody } from './model/ChEnlargeVolumeRequestBody';
import { ChInstanceLtsConfigs } from './model/ChInstanceLtsConfigs';
import { ChInstanceLtsConfigsInstance } from './model/ChInstanceLtsConfigsInstance';
import { ChInstancesInfoRsponseInstance } from './model/ChInstancesInfoRsponseInstance';
import { ChInstancesInfoRsponseInstanceGroups } from './model/ChInstancesInfoRsponseInstanceGroups';
import { ChInstancesInfoRsponseInstanceOpsWindow } from './model/ChInstancesInfoRsponseInstanceOpsWindow';
import { ChInstancesInfoRsponseInstanceParamGroup } from './model/ChInstancesInfoRsponseInstanceParamGroup';
import { ChInstancesInfoRsponseInstancePortInfo } from './model/ChInstancesInfoRsponseInstancePortInfo';
import { ChLtsConfigs } from './model/ChLtsConfigs';
import { ChQueryActionInfo } from './model/ChQueryActionInfo';
import { ChSlowLogDetailResponseSlowLogList } from './model/ChSlowLogDetailResponseSlowLogList';
import { ChSlowLogQueryRequestBody } from './model/ChSlowLogQueryRequestBody';
import { ChSlowlogSensitiveResponse } from './model/ChSlowlogSensitiveResponse';
import { ChangeGaussMySqlInstanceSpecificationRequest } from './model/ChangeGaussMySqlInstanceSpecificationRequest';
import { ChangeGaussMySqlInstanceSpecificationResponse } from './model/ChangeGaussMySqlInstanceSpecificationResponse';
import { ChangeGaussMySqlProxySpecificationRequest } from './model/ChangeGaussMySqlProxySpecificationRequest';
import { ChangeGaussMySqlProxySpecificationResponse } from './model/ChangeGaussMySqlProxySpecificationResponse';
import { CheckChDatabaseConfigRequestBody } from './model/CheckChDatabaseConfigRequestBody';
import { CheckChDatabaseTableConfigRequestBody } from './model/CheckChDatabaseTableConfigRequestBody';
import { CheckClickHouseDataBaseConfigRequest } from './model/CheckClickHouseDataBaseConfigRequest';
import { CheckClickHouseDataBaseConfigResponse } from './model/CheckClickHouseDataBaseConfigResponse';
import { CheckClickHouseTableConfigRequest } from './model/CheckClickHouseTableConfigRequest';
import { CheckClickHouseTableConfigResponse } from './model/CheckClickHouseTableConfigResponse';
import { CheckDataBaseConfigRequest } from './model/CheckDataBaseConfigRequest';
import { CheckDataBaseConfigResponse } from './model/CheckDataBaseConfigResponse';
import { CheckResourceInfo } from './model/CheckResourceInfo';
import { CheckResourceRequest } from './model/CheckResourceRequest';
import { CheckResourceRequestBody } from './model/CheckResourceRequestBody';
import { CheckResourceResponse } from './model/CheckResourceResponse';
import { CheckStarRocksResourceRequest } from './model/CheckStarRocksResourceRequest';
import { CheckStarRocksResourceResponse } from './model/CheckStarRocksResourceResponse';
import { CheckStarrocksParamsRequest } from './model/CheckStarrocksParamsRequest';
import { CheckStarrocksParamsRequestBody } from './model/CheckStarrocksParamsRequestBody';
import { CheckStarrocksParamsResponse } from './model/CheckStarrocksParamsResponse';
import { CheckTableConfigRequest } from './model/CheckTableConfigRequest';
import { CheckTableConfigResponse } from './model/CheckTableConfigResponse';
import { ClickHouseDatabaseUserInfo } from './model/ClickHouseDatabaseUserInfo';
import { ClickHouseDatabaseUserPSinfo } from './model/ClickHouseDatabaseUserPSinfo';
import { ClickHouseDatabaseUserPWinfo } from './model/ClickHouseDatabaseUserPWinfo';
import { ClickHouseEngineInfo } from './model/ClickHouseEngineInfo';
import { ClickHouseNodeInfo } from './model/ClickHouseNodeInfo';
import { ClickHouseNodeInfoDatastore } from './model/ClickHouseNodeInfoDatastore';
import { ClickHouseNodeInfoResponseBodyNodeList } from './model/ClickHouseNodeInfoResponseBodyNodeList';
import { ClickHouseNodeInfoVolume } from './model/ClickHouseNodeInfoVolume';
import { ClickHouseResizeFlavorRequestBody } from './model/ClickHouseResizeFlavorRequestBody';
import { CloseMysqlProxyRequestBody } from './model/CloseMysqlProxyRequestBody';
import { ConfigurationSummary } from './model/ConfigurationSummary';
import { ConfigurationSummary2 } from './model/ConfigurationSummary2';
import { CopyConfigurationsRequest } from './model/CopyConfigurationsRequest';
import { CopyConfigurationsRequestBody } from './model/CopyConfigurationsRequestBody';
import { CopyConfigurationsResponse } from './model/CopyConfigurationsResponse';
import { CopyInstanceConfigurationsRequest } from './model/CopyInstanceConfigurationsRequest';
import { CopyInstanceConfigurationsRequestBody } from './model/CopyInstanceConfigurationsRequestBody';
import { CopyInstanceConfigurationsResponse } from './model/CopyInstanceConfigurationsResponse';
import { CreateAccessControlRequest } from './model/CreateAccessControlRequest';
import { CreateAccessControlRequestBody } from './model/CreateAccessControlRequestBody';
import { CreateAccessControlResponse } from './model/CreateAccessControlResponse';
import { CreateChDatabaseReplicationRequestBody } from './model/CreateChDatabaseReplicationRequestBody';
import { CreateChInstanceInfo } from './model/CreateChInstanceInfo';
import { CreateChInstanceInfoPayInfo } from './model/CreateChInstanceInfoPayInfo';
import { CreateChInstanceInfoTagsInfo } from './model/CreateChInstanceInfoTagsInfo';
import { CreateChInstanceInfoTagsInfoTags } from './model/CreateChInstanceInfoTagsInfoTags';
import { CreateChInstanceRequestBody } from './model/CreateChInstanceRequestBody';
import { CreateChInstanceRequestBodyHa } from './model/CreateChInstanceRequestBodyHa';
import { CreateChInstanceRequestBodyPayInfo } from './model/CreateChInstanceRequestBodyPayInfo';
import { CreateChInstanceRequestBodyTagsInfo } from './model/CreateChInstanceRequestBodyTagsInfo';
import { CreateChInstanceRequestBodyTagsInfoSysTags } from './model/CreateChInstanceRequestBodyTagsInfoSysTags';
import { CreateChInstanceRequestBodyVolume } from './model/CreateChInstanceRequestBodyVolume';
import { CreateChLtsConfigRequestBody } from './model/CreateChLtsConfigRequestBody';
import { CreateChLtsConfigRequestBodyLogConfigs } from './model/CreateChLtsConfigRequestBodyLogConfigs';
import { CreateClickHouseDataBaseReplicationRequest } from './model/CreateClickHouseDataBaseReplicationRequest';
import { CreateClickHouseDataBaseReplicationResponse } from './model/CreateClickHouseDataBaseReplicationResponse';
import { CreateClickHouseDatabaseUserRequest } from './model/CreateClickHouseDatabaseUserRequest';
import { CreateClickHouseDatabaseUserResponse } from './model/CreateClickHouseDatabaseUserResponse';
import { CreateClickHouseInstanceRequest } from './model/CreateClickHouseInstanceRequest';
import { CreateClickHouseInstanceResponse } from './model/CreateClickHouseInstanceResponse';
import { CreateConfigurationRequestBody } from './model/CreateConfigurationRequestBody';
import { CreateDatabaseList } from './model/CreateDatabaseList';
import { CreateDatabaseUserList } from './model/CreateDatabaseUserList';
import { CreateDatabaseUserRequest } from './model/CreateDatabaseUserRequest';
import { CreateDnsNameReq } from './model/CreateDnsNameReq';
import { CreateGaussMySqlBackupRequest } from './model/CreateGaussMySqlBackupRequest';
import { CreateGaussMySqlBackupResponse } from './model/CreateGaussMySqlBackupResponse';
import { CreateGaussMySqlConfigurationRequest } from './model/CreateGaussMySqlConfigurationRequest';
import { CreateGaussMySqlConfigurationResponse } from './model/CreateGaussMySqlConfigurationResponse';
import { CreateGaussMySqlDatabase } from './model/CreateGaussMySqlDatabase';
import { CreateGaussMySqlDatabaseRequest } from './model/CreateGaussMySqlDatabaseRequest';
import { CreateGaussMySqlDatabaseRequestBody } from './model/CreateGaussMySqlDatabaseRequestBody';
import { CreateGaussMySqlDatabaseResponse } from './model/CreateGaussMySqlDatabaseResponse';
import { CreateGaussMySqlDatabaseUserRequest } from './model/CreateGaussMySqlDatabaseUserRequest';
import { CreateGaussMySqlDatabaseUserResponse } from './model/CreateGaussMySqlDatabaseUserResponse';
import { CreateGaussMySqlInstanceRequest } from './model/CreateGaussMySqlInstanceRequest';
import { CreateGaussMySqlInstanceResponse } from './model/CreateGaussMySqlInstanceResponse';
import { CreateGaussMySqlProxyRequest } from './model/CreateGaussMySqlProxyRequest';
import { CreateGaussMySqlProxyResponse } from './model/CreateGaussMySqlProxyResponse';
import { CreateGaussMySqlReadonlyNodeRequest } from './model/CreateGaussMySqlReadonlyNodeRequest';
import { CreateGaussMySqlReadonlyNodeResponse } from './model/CreateGaussMySqlReadonlyNodeResponse';
import { CreateGaussMysqlDnsRequest } from './model/CreateGaussMysqlDnsRequest';
import { CreateGaussMysqlDnsResponse } from './model/CreateGaussMysqlDnsResponse';
import { CreateLtsConfigs } from './model/CreateLtsConfigs';
import { CreateLtsConfigsRequest } from './model/CreateLtsConfigsRequest';
import { CreateLtsConfigsResponse } from './model/CreateLtsConfigsResponse';
import { CreateRestoreDatabaseTableInfo } from './model/CreateRestoreDatabaseTableInfo';
import { CreateRestoreTableInfo } from './model/CreateRestoreTableInfo';
import { CreateRestoreTablesRequest } from './model/CreateRestoreTablesRequest';
import { CreateRestoreTablesRequestBody } from './model/CreateRestoreTablesRequestBody';
import { CreateRestoreTablesResponse } from './model/CreateRestoreTablesResponse';
import { CreateStarRocksDataReplication } from './model/CreateStarRocksDataReplication';
import { CreateStarRocksDataReplicationRequest } from './model/CreateStarRocksDataReplicationRequest';
import { CreateStarRocksDataReplicationResponse } from './model/CreateStarRocksDataReplicationResponse';
import { CreateStarRocksDatabaseUserRequest } from './model/CreateStarRocksDatabaseUserRequest';
import { CreateStarRocksDatabaseUserResponse } from './model/CreateStarRocksDatabaseUserResponse';
import { CreateStarrocksInstanceRequest } from './model/CreateStarrocksInstanceRequest';
import { CreateStarrocksInstanceResponse } from './model/CreateStarrocksInstanceResponse';
import { DataBaseInfo } from './model/DataBaseInfo';
import { DatabasePermission } from './model/DatabasePermission';
import { DatastoreResult } from './model/DatastoreResult';
import { DbConfig } from './model/DbConfig';
import { DbConfigCheckRequestV3 } from './model/DbConfigCheckRequestV3';
import { DbConfigCheckResult } from './model/DbConfigCheckResult';
import { DbParameter } from './model/DbParameter';
import { DedicatedComputeInfo } from './model/DedicatedComputeInfo';
import { DedicatedResource } from './model/DedicatedResource';
import { DedicatedResourceCapacity } from './model/DedicatedResourceCapacity';
import { DedicatedStorageInfo } from './model/DedicatedStorageInfo';
import { DeleteChLtsConfigRequestBody } from './model/DeleteChLtsConfigRequestBody';
import { DeleteChLtsConfigRequestBodyLogConfigs } from './model/DeleteChLtsConfigRequestBodyLogConfigs';
import { DeleteClickHouseDataBaseConfigRequest } from './model/DeleteClickHouseDataBaseConfigRequest';
import { DeleteClickHouseDataBaseConfigResponse } from './model/DeleteClickHouseDataBaseConfigResponse';
import { DeleteClickHouseDataBaseReplicationRequest } from './model/DeleteClickHouseDataBaseReplicationRequest';
import { DeleteClickHouseDataBaseReplicationResponse } from './model/DeleteClickHouseDataBaseReplicationResponse';
import { DeleteClickHouseDatabaseUserRequest } from './model/DeleteClickHouseDatabaseUserRequest';
import { DeleteClickHouseDatabaseUserResponse } from './model/DeleteClickHouseDatabaseUserResponse';
import { DeleteClickHouseInstanceRequest } from './model/DeleteClickHouseInstanceRequest';
import { DeleteClickHouseInstanceResponse } from './model/DeleteClickHouseInstanceResponse';
import { DeleteClickHouseLtsConfigRequest } from './model/DeleteClickHouseLtsConfigRequest';
import { DeleteClickHouseLtsConfigResponse } from './model/DeleteClickHouseLtsConfigResponse';
import { DeleteDatabasePermission } from './model/DeleteDatabasePermission';
import { DeleteDatabasePermissionRequest } from './model/DeleteDatabasePermissionRequest';
import { DeleteDatabasePermissionRequestBody } from './model/DeleteDatabasePermissionRequestBody';
import { DeleteDatabasePermissionResponse } from './model/DeleteDatabasePermissionResponse';
import { DeleteDatabaseUserRequest } from './model/DeleteDatabaseUserRequest';
import { DeleteGaussMySqlBackupRequest } from './model/DeleteGaussMySqlBackupRequest';
import { DeleteGaussMySqlBackupResponse } from './model/DeleteGaussMySqlBackupResponse';
import { DeleteGaussMySqlConfigurationRequest } from './model/DeleteGaussMySqlConfigurationRequest';
import { DeleteGaussMySqlConfigurationResponse } from './model/DeleteGaussMySqlConfigurationResponse';
import { DeleteGaussMySqlDatabaseRequest } from './model/DeleteGaussMySqlDatabaseRequest';
import { DeleteGaussMySqlDatabaseRequestBody } from './model/DeleteGaussMySqlDatabaseRequestBody';
import { DeleteGaussMySqlDatabaseResponse } from './model/DeleteGaussMySqlDatabaseResponse';
import { DeleteGaussMySqlDatabaseUserRequest } from './model/DeleteGaussMySqlDatabaseUserRequest';
import { DeleteGaussMySqlDatabaseUserResponse } from './model/DeleteGaussMySqlDatabaseUserResponse';
import { DeleteGaussMySqlInstanceRequest } from './model/DeleteGaussMySqlInstanceRequest';
import { DeleteGaussMySqlInstanceResponse } from './model/DeleteGaussMySqlInstanceResponse';
import { DeleteGaussMySqlProxyRequest } from './model/DeleteGaussMySqlProxyRequest';
import { DeleteGaussMySqlProxyResponse } from './model/DeleteGaussMySqlProxyResponse';
import { DeleteGaussMySqlReadonlyNodeRequest } from './model/DeleteGaussMySqlReadonlyNodeRequest';
import { DeleteGaussMySqlReadonlyNodeResponse } from './model/DeleteGaussMySqlReadonlyNodeResponse';
import { DeleteLtsConfigsRequest } from './model/DeleteLtsConfigsRequest';
import { DeleteLtsConfigsRequestBody } from './model/DeleteLtsConfigsRequestBody';
import { DeleteLtsConfigsResponse } from './model/DeleteLtsConfigsResponse';
import { DeleteNodeSqlFilterRule } from './model/DeleteNodeSqlFilterRule';
import { DeleteNodeSqlFilterRuleInfo } from './model/DeleteNodeSqlFilterRuleInfo';
import { DeleteScheduleTasKRequest } from './model/DeleteScheduleTasKRequest';
import { DeleteScheduleTasKRequestBody } from './model/DeleteScheduleTasKRequestBody';
import { DeleteScheduleTasKResponse } from './model/DeleteScheduleTasKResponse';
import { DeleteSqlFilterRuleReq } from './model/DeleteSqlFilterRuleReq';
import { DeleteSqlFilterRuleRequest } from './model/DeleteSqlFilterRuleRequest';
import { DeleteSqlFilterRuleResponse } from './model/DeleteSqlFilterRuleResponse';
import { DeleteStarRocksDataReplication } from './model/DeleteStarRocksDataReplication';
import { DeleteStarRocksDataReplicationRequest } from './model/DeleteStarRocksDataReplicationRequest';
import { DeleteStarRocksDataReplicationResponse } from './model/DeleteStarRocksDataReplicationResponse';
import { DeleteStarRocksDatabaseUserRequest } from './model/DeleteStarRocksDatabaseUserRequest';
import { DeleteStarRocksDatabaseUserResponse } from './model/DeleteStarRocksDatabaseUserResponse';
import { DeleteStarrocksInstanceRequest } from './model/DeleteStarrocksInstanceRequest';
import { DeleteStarrocksInstanceResponse } from './model/DeleteStarrocksInstanceResponse';
import { DeleteTaskRecordRequest } from './model/DeleteTaskRecordRequest';
import { DeleteTaskRecordResponse } from './model/DeleteTaskRecordResponse';
import { DeleteTaurusDbNodeProcessesRequest } from './model/DeleteTaurusDbNodeProcessesRequest';
import { DeleteTaurusDbNodeProcessesRequestBody } from './model/DeleteTaurusDbNodeProcessesRequestBody';
import { DeleteTaurusDbNodeProcessesResponse } from './model/DeleteTaurusDbNodeProcessesResponse';
import { DescribeBackupEncryptStatusRequest } from './model/DescribeBackupEncryptStatusRequest';
import { DescribeBackupEncryptStatusResponse } from './model/DescribeBackupEncryptStatusResponse';
import { DiagnosisInfo } from './model/DiagnosisInfo';
import { DownloadSlowLogFileItem } from './model/DownloadSlowLogFileItem';
import { DownloadSlowLogFileRequest } from './model/DownloadSlowLogFileRequest';
import { DownloadSlowLogFileResponse } from './model/DownloadSlowLogFileResponse';
import { EnlargeProxyRequest } from './model/EnlargeProxyRequest';
import { EnterpriseProjectItem } from './model/EnterpriseProjectItem';
import { ExpandGaussMySqlInstanceVolumeRequest } from './model/ExpandGaussMySqlInstanceVolumeRequest';
import { ExpandGaussMySqlInstanceVolumeResponse } from './model/ExpandGaussMySqlInstanceVolumeResponse';
import { ExpandGaussMySqlProxyRequest } from './model/ExpandGaussMySqlProxyRequest';
import { ExpandGaussMySqlProxyResponse } from './model/ExpandGaussMySqlProxyResponse';
import { FileInfo } from './model/FileInfo';
import { GaussMySqlDatabaseInfo } from './model/GaussMySqlDatabaseInfo';
import { GaussMySqlDatabaseUser } from './model/GaussMySqlDatabaseUser';
import { GetJobEntitiesInfoDetail } from './model/GetJobEntitiesInfoDetail';
import { GetJobInfoDetail } from './model/GetJobInfoDetail';
import { GetJobInstanceInfoDetail } from './model/GetJobInstanceInfoDetail';
import { GrantDatabasePermission } from './model/GrantDatabasePermission';
import { GrantDatabasePermissionRequestBody } from './model/GrantDatabasePermissionRequestBody';
import { HtapFlavorInfoFlavors } from './model/HtapFlavorInfoFlavors';
import { HtapInstanceListAvailableZones } from './model/HtapInstanceListAvailableZones';
import { HtapInstanceListInstanceState } from './model/HtapInstanceListInstanceState';
import { HtapInstanceListInstances } from './model/HtapInstanceListInstances';
import { HtapInstanceListNetwork } from './model/HtapInstanceListNetwork';
import { HtapStorageTypeStorageType } from './model/HtapStorageTypeStorageType';
import { IncrementalBackups } from './model/IncrementalBackups';
import { InstanceDatabaseVersionInfo } from './model/InstanceDatabaseVersionInfo';
import { InstanceDeleteLtsConfig } from './model/InstanceDeleteLtsConfig';
import { InstanceInfoForDiagnosis } from './model/InstanceInfoForDiagnosis';
import { InstanceLtsBasicInfo } from './model/InstanceLtsBasicInfo';
import { InstanceSaveLtsConfig } from './model/InstanceSaveLtsConfig';
import { InstanceTagItem } from './model/InstanceTagItem';
import { InvokeGaussMySqlInstanceSwitchOverRequest } from './model/InvokeGaussMySqlInstanceSwitchOverRequest';
import { InvokeGaussMySqlInstanceSwitchOverResponse } from './model/InvokeGaussMySqlInstanceSwitchOverResponse';
import { IpGroupItem } from './model/IpGroupItem';
import { ListAuditLogDownloadLinkRequest } from './model/ListAuditLogDownloadLinkRequest';
import { ListAuditLogDownloadLinkResponse } from './model/ListAuditLogDownloadLinkResponse';
import { ListClickHouseDataBaseParameterRequest } from './model/ListClickHouseDataBaseParameterRequest';
import { ListClickHouseDataBaseParameterResponse } from './model/ListClickHouseDataBaseParameterResponse';
import { ListClickHouseDataBaseReplicationConfigRequest } from './model/ListClickHouseDataBaseReplicationConfigRequest';
import { ListClickHouseDataBaseReplicationConfigResponse } from './model/ListClickHouseDataBaseReplicationConfigResponse';
import { ListClickHouseDataBaseReplicationRequest } from './model/ListClickHouseDataBaseReplicationRequest';
import { ListClickHouseDataBaseReplicationResponse } from './model/ListClickHouseDataBaseReplicationResponse';
import { ListClickHouseDataBaseRequest } from './model/ListClickHouseDataBaseRequest';
import { ListClickHouseDataBaseResponse } from './model/ListClickHouseDataBaseResponse';
import { ListClickHouseInstanceNodeRequest } from './model/ListClickHouseInstanceNodeRequest';
import { ListClickHouseInstanceNodeResponse } from './model/ListClickHouseInstanceNodeResponse';
import { ListClickHouseInstanceRequest } from './model/ListClickHouseInstanceRequest';
import { ListClickHouseInstanceResponse } from './model/ListClickHouseInstanceResponse';
import { ListConfigurationsDifferencesRequest } from './model/ListConfigurationsDifferencesRequest';
import { ListConfigurationsDifferencesRequestBody } from './model/ListConfigurationsDifferencesRequestBody';
import { ListConfigurationsDifferencesResponse } from './model/ListConfigurationsDifferencesResponse';
import { ListConfigurationsInstancesRequest } from './model/ListConfigurationsInstancesRequest';
import { ListConfigurationsInstancesResponse } from './model/ListConfigurationsInstancesResponse';
import { ListDeleteDatabaseUserRequest } from './model/ListDeleteDatabaseUserRequest';
import { ListEnterpriseProjectsRequest } from './model/ListEnterpriseProjectsRequest';
import { ListEnterpriseProjectsResponse } from './model/ListEnterpriseProjectsResponse';
import { ListGaussMySqlConfigurationsRequest } from './model/ListGaussMySqlConfigurationsRequest';
import { ListGaussMySqlConfigurationsResponse } from './model/ListGaussMySqlConfigurationsResponse';
import { ListGaussMySqlDatabase } from './model/ListGaussMySqlDatabase';
import { ListGaussMySqlDatabaseCharsetsRequest } from './model/ListGaussMySqlDatabaseCharsetsRequest';
import { ListGaussMySqlDatabaseCharsetsResponse } from './model/ListGaussMySqlDatabaseCharsetsResponse';
import { ListGaussMySqlDatabaseRequest } from './model/ListGaussMySqlDatabaseRequest';
import { ListGaussMySqlDatabaseResponse } from './model/ListGaussMySqlDatabaseResponse';
import { ListGaussMySqlDatabaseUser } from './model/ListGaussMySqlDatabaseUser';
import { ListGaussMySqlDatabaseUserRequest } from './model/ListGaussMySqlDatabaseUserRequest';
import { ListGaussMySqlDatabaseUserResponse } from './model/ListGaussMySqlDatabaseUserResponse';
import { ListGaussMySqlDedicatedResourcesRequest } from './model/ListGaussMySqlDedicatedResourcesRequest';
import { ListGaussMySqlDedicatedResourcesResponse } from './model/ListGaussMySqlDedicatedResourcesResponse';
import { ListGaussMySqlInstanceDetailInfoRequest } from './model/ListGaussMySqlInstanceDetailInfoRequest';
import { ListGaussMySqlInstanceDetailInfoResponse } from './model/ListGaussMySqlInstanceDetailInfoResponse';
import { ListGaussMySqlInstanceDetailInfoUnifyStatusRequest } from './model/ListGaussMySqlInstanceDetailInfoUnifyStatusRequest';
import { ListGaussMySqlInstanceDetailInfoUnifyStatusResponse } from './model/ListGaussMySqlInstanceDetailInfoUnifyStatusResponse';
import { ListGaussMySqlInstancesRequest } from './model/ListGaussMySqlInstancesRequest';
import { ListGaussMySqlInstancesResponse } from './model/ListGaussMySqlInstancesResponse';
import { ListGaussMySqlInstancesUnifyStatusRequest } from './model/ListGaussMySqlInstancesUnifyStatusRequest';
import { ListGaussMySqlInstancesUnifyStatusResponse } from './model/ListGaussMySqlInstancesUnifyStatusResponse';
import { ListGaussMysqlDatabaseInfo } from './model/ListGaussMysqlDatabaseInfo';
import { ListHtapDataStoreRequest } from './model/ListHtapDataStoreRequest';
import { ListHtapDataStoreResponse } from './model/ListHtapDataStoreResponse';
import { ListHtapFlavorRequest } from './model/ListHtapFlavorRequest';
import { ListHtapFlavorResponse } from './model/ListHtapFlavorResponse';
import { ListHtapInstanceInfoRequest } from './model/ListHtapInstanceInfoRequest';
import { ListHtapInstanceInfoResponse } from './model/ListHtapInstanceInfoResponse';
import { ListHtapStorageTypeRequest } from './model/ListHtapStorageTypeRequest';
import { ListHtapStorageTypeResponse } from './model/ListHtapStorageTypeResponse';
import { ListImmediateJobsRequest } from './model/ListImmediateJobsRequest';
import { ListImmediateJobsResponse } from './model/ListImmediateJobsResponse';
import { ListInstanceConfigurationsRequest } from './model/ListInstanceConfigurationsRequest';
import { ListInstanceConfigurationsResponse } from './model/ListInstanceConfigurationsResponse';
import { ListInstanceTagsRequest } from './model/ListInstanceTagsRequest';
import { ListInstanceTagsResponse } from './model/ListInstanceTagsResponse';
import { ListLtsErrorLogDetailsRequest } from './model/ListLtsErrorLogDetailsRequest';
import { ListLtsErrorLogDetailsResponse } from './model/ListLtsErrorLogDetailsResponse';
import { ListLtsSlowlogDetailsRequest } from './model/ListLtsSlowlogDetailsRequest';
import { ListLtsSlowlogDetailsResponse } from './model/ListLtsSlowlogDetailsResponse';
import { ListModifyHistoryRequest } from './model/ListModifyHistoryRequest';
import { ListModifyHistoryResponse } from './model/ListModifyHistoryResponse';
import { ListParamsTemplateApplyHistoryRequest } from './model/ListParamsTemplateApplyHistoryRequest';
import { ListParamsTemplateApplyHistoryResponse } from './model/ListParamsTemplateApplyHistoryResponse';
import { ListProjectTagsRequest } from './model/ListProjectTagsRequest';
import { ListProjectTagsResponse } from './model/ListProjectTagsResponse';
import { ListRecycleInstancesRequest } from './model/ListRecycleInstancesRequest';
import { ListRecycleInstancesResponse } from './model/ListRecycleInstancesResponse';
import { ListScheduleJobsRequest } from './model/ListScheduleJobsRequest';
import { ListScheduleJobsResponse } from './model/ListScheduleJobsResponse';
import { ListStarRocksDataBasesRequest } from './model/ListStarRocksDataBasesRequest';
import { ListStarRocksDataBasesResponse } from './model/ListStarRocksDataBasesResponse';
import { ListStarRocksDataReplicationConfigByDataBaseRequest } from './model/ListStarRocksDataReplicationConfigByDataBaseRequest';
import { ListStarRocksDataReplicationConfigByDataBaseResponse } from './model/ListStarRocksDataReplicationConfigByDataBaseResponse';
import { ListStarRocksDataReplicationConfigRequest } from './model/ListStarRocksDataReplicationConfigRequest';
import { ListStarRocksDataReplicationConfigResponse } from './model/ListStarRocksDataReplicationConfigResponse';
import { ListStarRocksDataReplicationsRequest } from './model/ListStarRocksDataReplicationsRequest';
import { ListStarRocksDataReplicationsResponse } from './model/ListStarRocksDataReplicationsResponse';
import { ListStarRocksDbParametersRequest } from './model/ListStarRocksDbParametersRequest';
import { ListStarRocksDbParametersResponse } from './model/ListStarRocksDbParametersResponse';
import { ListStarrocksInstanceInfoRequest } from './model/ListStarrocksInstanceInfoRequest';
import { ListStarrocksInstanceInfoResponse } from './model/ListStarrocksInstanceInfoResponse';
import { ListTaurusDbNodeProcessesRequest } from './model/ListTaurusDbNodeProcessesRequest';
import { ListTaurusDbNodeProcessesResponse } from './model/ListTaurusDbNodeProcessesResponse';
import { LtsConfig } from './model/LtsConfig';
import { LtsConfigsV3 } from './model/LtsConfigsV3';
import { LtsLogErrorDetail } from './model/LtsLogErrorDetail';
import { LtsLogErrorQueryRequest } from './model/LtsLogErrorQueryRequest';
import { LtsLogSlowDetail } from './model/LtsLogSlowDetail';
import { LtsLogSlowQueryRequest } from './model/LtsLogSlowQueryRequest';
import { ModifyAliasRequest } from './model/ModifyAliasRequest';
import { ModifyAutoExpandPolicyReq } from './model/ModifyAutoExpandPolicyReq';
import { ModifyAutoExpandPolicyRequest } from './model/ModifyAutoExpandPolicyRequest';
import { ModifyAutoExpandPolicyResponse } from './model/ModifyAutoExpandPolicyResponse';
import { ModifyBackupEncryptStatusRequest } from './model/ModifyBackupEncryptStatusRequest';
import { ModifyBackupEncryptStatusResponse } from './model/ModifyBackupEncryptStatusResponse';
import { ModifyBindEipRequest } from './model/ModifyBindEipRequest';
import { ModifyDataSyncConfigRequestV3 } from './model/ModifyDataSyncConfigRequestV3';
import { ModifyDataSyncRequest } from './model/ModifyDataSyncRequest';
import { ModifyDataSyncResponse } from './model/ModifyDataSyncResponse';
import { ModifyDnsNameReq } from './model/ModifyDnsNameReq';
import { ModifyGaussMySqlProxyRouteModeRequest } from './model/ModifyGaussMySqlProxyRouteModeRequest';
import { ModifyGaussMySqlProxyRouteModeRequestBody } from './model/ModifyGaussMySqlProxyRouteModeRequestBody';
import { ModifyGaussMySqlProxyRouteModeResponse } from './model/ModifyGaussMySqlProxyRouteModeResponse';
import { ModifyGaussMysqlDnsRequest } from './model/ModifyGaussMysqlDnsRequest';
import { ModifyGaussMysqlDnsResponse } from './model/ModifyGaussMysqlDnsResponse';
import { ModifyInternalIpRequest } from './model/ModifyInternalIpRequest';
import { ModifyNodeDataIpRequest } from './model/ModifyNodeDataIpRequest';
import { ModifyNodePriorityRequest } from './model/ModifyNodePriorityRequest';
import { ModifyNodePriorityRequestBody } from './model/ModifyNodePriorityRequestBody';
import { ModifyNodePriorityResponse } from './model/ModifyNodePriorityResponse';
import { ModifyOpsWindow } from './model/ModifyOpsWindow';
import { ModifyPortRequest } from './model/ModifyPortRequest';
import { ModifyProxyConsistRequest } from './model/ModifyProxyConsistRequest';
import { ModifyProxyRouteWeightReadonlyNode } from './model/ModifyProxyRouteWeightReadonlyNode';
import { ModifyProxyWeightReadonlyNode } from './model/ModifyProxyWeightReadonlyNode';
import { ModifySecurityGroupRequest } from './model/ModifySecurityGroupRequest';
import { MysqlBackupPolicy } from './model/MysqlBackupPolicy';
import { MysqlBackupStrategy } from './model/MysqlBackupStrategy';
import { MysqlChangeSpecificationRequest } from './model/MysqlChangeSpecificationRequest';
import { MysqlChargeInfo } from './model/MysqlChargeInfo';
import { MysqlCreateBackupRequest } from './model/MysqlCreateBackupRequest';
import { MysqlCreateReadonlyNodeRequest } from './model/MysqlCreateReadonlyNodeRequest';
import { MysqlDatastoreInBackup } from './model/MysqlDatastoreInBackup';
import { MysqlDatastoreInReq } from './model/MysqlDatastoreInReq';
import { MysqlDatastoreInRes } from './model/MysqlDatastoreInRes';
import { MysqlDatastoreWithKernelVersion } from './model/MysqlDatastoreWithKernelVersion';
import { MysqlEngineVersionInfo } from './model/MysqlEngineVersionInfo';
import { MysqlExtendInstanceVolumeRequest } from './model/MysqlExtendInstanceVolumeRequest';
import { MysqlFlavorInfo } from './model/MysqlFlavorInfo';
import { MysqlFlavorsInfo } from './model/MysqlFlavorsInfo';
import { MysqlInstanceChargeInfo } from './model/MysqlInstanceChargeInfo';
import { MysqlInstanceInfoDetail } from './model/MysqlInstanceInfoDetail';
import { MysqlInstanceInfoDetailUnifyStatus } from './model/MysqlInstanceInfoDetailUnifyStatus';
import { MysqlInstanceListInfo } from './model/MysqlInstanceListInfo';
import { MysqlInstanceListInfoUnifyStatus } from './model/MysqlInstanceListInfoUnifyStatus';
import { MysqlInstanceNodeInfo } from './model/MysqlInstanceNodeInfo';
import { MysqlInstanceNodeVolumeInfo } from './model/MysqlInstanceNodeVolumeInfo';
import { MysqlInstanceRequest } from './model/MysqlInstanceRequest';
import { MysqlInstanceResponse } from './model/MysqlInstanceResponse';
import { MysqlProxyAvailable } from './model/MysqlProxyAvailable';
import { MysqlProxyComputeFlavor } from './model/MysqlProxyComputeFlavor';
import { MysqlProxyFlavorGroups } from './model/MysqlProxyFlavorGroups';
import { MysqlProxyInfo } from './model/MysqlProxyInfo';
import { MysqlProxyNodeV3 } from './model/MysqlProxyNodeV3';
import { MysqlProxyNodes } from './model/MysqlProxyNodes';
import { MysqlProxyV3 } from './model/MysqlProxyV3';
import { MysqlResetPasswordRequest } from './model/MysqlResetPasswordRequest';
import { MysqlResizeFlavor } from './model/MysqlResizeFlavor';
import { MysqlRestorePoint } from './model/MysqlRestorePoint';
import { MysqlShowProxyResponseV3 } from './model/MysqlShowProxyResponseV3';
import { MysqlTags } from './model/MysqlTags';
import { MysqlTdeInfo } from './model/MysqlTdeInfo';
import { MysqlUpdateBackupPolicyRequest } from './model/MysqlUpdateBackupPolicyRequest';
import { MysqlUpdateInstanceNameRequest } from './model/MysqlUpdateInstanceNameRequest';
import { MysqlVolume } from './model/MysqlVolume';
import { MysqlVolumeInfo } from './model/MysqlVolumeInfo';
import { MysqlVolumeResp } from './model/MysqlVolumeResp';
import { NodeSqlFilterRule } from './model/NodeSqlFilterRule';
import { NodeSqlFilterRuleInfo } from './model/NodeSqlFilterRuleInfo';
import { NodeSqlFilterRulePattern } from './model/NodeSqlFilterRulePattern';
import { NodesWeight } from './model/NodesWeight';
import { OpenMysqlProxyRequestBody } from './model/OpenMysqlProxyRequestBody';
import { OperateAuditLogRequestV3Body } from './model/OperateAuditLogRequestV3Body';
import { OperateMultiTenantReq } from './model/OperateMultiTenantReq';
import { OperateSqlFilterControlReq } from './model/OperateSqlFilterControlReq';
import { OperateSqlFilterRuleReq } from './model/OperateSqlFilterRuleReq';
import { ParamGroup } from './model/ParamGroup';
import { ParamGroupHistoryResponse } from './model/ParamGroupHistoryResponse';
import { ParamGroupParameterDifferences } from './model/ParamGroupParameterDifferences';
import { ParameterConfigurationInfo } from './model/ParameterConfigurationInfo';
import { ParameterValuesInfo } from './model/ParameterValuesInfo';
import { PauseStarRocksDataReplication } from './model/PauseStarRocksDataReplication';
import { PauseStarRocksDataReplicationRequest } from './model/PauseStarRocksDataReplicationRequest';
import { PauseStarRocksDataReplicationResponse } from './model/PauseStarRocksDataReplicationResponse';
import { ProjectQuotas } from './model/ProjectQuotas';
import { ProjectTagItem } from './model/ProjectTagItem';
import { ProxyConfiguration } from './model/ProxyConfiguration';
import { ProxyIpGroupDetail } from './model/ProxyIpGroupDetail';
import { ProxyTransactionSplitRequest } from './model/ProxyTransactionSplitRequest';
import { ProxyUpdateProxyConnectionPoolTypeRequest } from './model/ProxyUpdateProxyConnectionPoolTypeRequest';
import { ProxyUpdateProxyNameRequest } from './model/ProxyUpdateProxyNameRequest';
import { ProxyUpgradeProxyVersionRequest } from './model/ProxyUpgradeProxyVersionRequest';
import { ProxyUpgradeVersionDetail } from './model/ProxyUpgradeVersionDetail';
import { QueryAction } from './model/QueryAction';
import { Quota } from './model/Quota';
import { ReadableNodeInfos } from './model/ReadableNodeInfos';
import { RebootClickHouseInstanceRequest } from './model/RebootClickHouseInstanceRequest';
import { RebootClickHouseInstanceResponse } from './model/RebootClickHouseInstanceResponse';
import { RecycleInstanceV3 } from './model/RecycleInstanceV3';
import { RecyclePolicy } from './model/RecyclePolicy';
import { RenameInstanceNodeRequest } from './model/RenameInstanceNodeRequest';
import { RenameInstanceNodeRequestBody } from './model/RenameInstanceNodeRequestBody';
import { RenameInstanceNodeResponse } from './model/RenameInstanceNodeResponse';
import { ResetDatabasePassword } from './model/ResetDatabasePassword';
import { ResetDatabasePasswordRequest } from './model/ResetDatabasePasswordRequest';
import { ResetGaussMySqlDatabasePasswordRequest } from './model/ResetGaussMySqlDatabasePasswordRequest';
import { ResetGaussMySqlDatabasePasswordResponse } from './model/ResetGaussMySqlDatabasePasswordResponse';
import { ResetGaussMySqlPasswordRequest } from './model/ResetGaussMySqlPasswordRequest';
import { ResetGaussMySqlPasswordResponse } from './model/ResetGaussMySqlPasswordResponse';
import { ResizeClickHouseFlavorRequest } from './model/ResizeClickHouseFlavorRequest';
import { ResizeClickHouseFlavorResponse } from './model/ResizeClickHouseFlavorResponse';
import { ResizeClickHouseInstanceRequest } from './model/ResizeClickHouseInstanceRequest';
import { ResizeClickHouseInstanceResponse } from './model/ResizeClickHouseInstanceResponse';
import { ResizeStarRocksFlavorRequest } from './model/ResizeStarRocksFlavorRequest';
import { ResizeStarRocksFlavorResponse } from './model/ResizeStarRocksFlavorResponse';
import { Resource } from './model/Resource';
import { ResourceCheck } from './model/ResourceCheck';
import { ResourceCheckResource } from './model/ResourceCheckResource';
import { ResourceTagItem } from './model/ResourceTagItem';
import { RestartGaussMySqlInstanceRequest } from './model/RestartGaussMySqlInstanceRequest';
import { RestartGaussMySqlInstanceResponse } from './model/RestartGaussMySqlInstanceResponse';
import { RestartGaussMySqlNodeRequest } from './model/RestartGaussMySqlNodeRequest';
import { RestartGaussMySqlNodeResponse } from './model/RestartGaussMySqlNodeResponse';
import { RestartNodeRequest } from './model/RestartNodeRequest';
import { RestartProxyInstanceRequest } from './model/RestartProxyInstanceRequest';
import { RestartProxyInstanceResponse } from './model/RestartProxyInstanceResponse';
import { RestartStarrocksInstanceRequest } from './model/RestartStarrocksInstanceRequest';
import { RestartStarrocksInstanceResponse } from './model/RestartStarrocksInstanceResponse';
import { RestartStarrocksNodeRequest } from './model/RestartStarrocksNodeRequest';
import { RestartStarrocksNodeResponse } from './model/RestartStarrocksNodeResponse';
import { RestoreDatabaseInfos } from './model/RestoreDatabaseInfos';
import { RestoreDatabaseTableInfo } from './model/RestoreDatabaseTableInfo';
import { RestoreOldInstanceRequest } from './model/RestoreOldInstanceRequest';
import { RestoreOldInstanceResponse } from './model/RestoreOldInstanceResponse';
import { RestoreRequest } from './model/RestoreRequest';
import { RestoreTimeInfo } from './model/RestoreTimeInfo';
import { ResumeStarRocksDataReplication } from './model/ResumeStarRocksDataReplication';
import { ResumeStarRocksDataReplicationRequest } from './model/ResumeStarRocksDataReplicationRequest';
import { ResumeStarRocksDataReplicationResponse } from './model/ResumeStarRocksDataReplicationResponse';
import { ScalingStrategyInfo } from './model/ScalingStrategyInfo';
import { ScalingStrategyReqInfo } from './model/ScalingStrategyReqInfo';
import { ScheduleTask } from './model/ScheduleTask';
import { SetGaussMySqlProxyWeightRequest } from './model/SetGaussMySqlProxyWeightRequest';
import { SetGaussMySqlProxyWeightResponse } from './model/SetGaussMySqlProxyWeightResponse';
import { SetGaussMySqlQuotasRequest } from './model/SetGaussMySqlQuotasRequest';
import { SetGaussMySqlQuotasResponse } from './model/SetGaussMySqlQuotasResponse';
import { SetQuota } from './model/SetQuota';
import { SetQuotasRequestBody } from './model/SetQuotasRequestBody';
import { SetRecyclePolicyRequest } from './model/SetRecyclePolicyRequest';
import { SetRecyclePolicyRequestBody } from './model/SetRecyclePolicyRequestBody';
import { SetRecyclePolicyResponse } from './model/SetRecyclePolicyResponse';
import { SetSqlFilterRuleRequest } from './model/SetSqlFilterRuleRequest';
import { SetSqlFilterRuleResponse } from './model/SetSqlFilterRuleResponse';
import { ShowAuditLogRequest } from './model/ShowAuditLogRequest';
import { ShowAuditLogResponse } from './model/ShowAuditLogResponse';
import { ShowAutoExpandPolicyRequest } from './model/ShowAutoExpandPolicyRequest';
import { ShowAutoExpandPolicyResponse } from './model/ShowAutoExpandPolicyResponse';
import { ShowAutoScalingHistoryRequest } from './model/ShowAutoScalingHistoryRequest';
import { ShowAutoScalingHistoryResponse } from './model/ShowAutoScalingHistoryResponse';
import { ShowAutoScalingPolicyRequest } from './model/ShowAutoScalingPolicyRequest';
import { ShowAutoScalingPolicyResponse } from './model/ShowAutoScalingPolicyResponse';
import { ShowBackupRestoreTimeRequest } from './model/ShowBackupRestoreTimeRequest';
import { ShowBackupRestoreTimeResponse } from './model/ShowBackupRestoreTimeResponse';
import { ShowClickHouseDatabaseUserRequest } from './model/ShowClickHouseDatabaseUserRequest';
import { ShowClickHouseDatabaseUserResponse } from './model/ShowClickHouseDatabaseUserResponse';
import { ShowClickHouseDatabaseUsersUserDetails } from './model/ShowClickHouseDatabaseUsersUserDetails';
import { ShowClickHouseLtsConfigRequest } from './model/ShowClickHouseLtsConfigRequest';
import { ShowClickHouseLtsConfigResponse } from './model/ShowClickHouseLtsConfigResponse';
import { ShowClickHouseSlowLogDetailRequest } from './model/ShowClickHouseSlowLogDetailRequest';
import { ShowClickHouseSlowLogDetailResponse } from './model/ShowClickHouseSlowLogDetailResponse';
import { ShowClickHouseSlowLogSensitiveStatusRequest } from './model/ShowClickHouseSlowLogSensitiveStatusRequest';
import { ShowClickHouseSlowLogSensitiveStatusResponse } from './model/ShowClickHouseSlowLogSensitiveStatusResponse';
import { ShowDedicatedResourceInfoRequest } from './model/ShowDedicatedResourceInfoRequest';
import { ShowDedicatedResourceInfoResponse } from './model/ShowDedicatedResourceInfoResponse';
import { ShowGaussMySqlBackupListRequest } from './model/ShowGaussMySqlBackupListRequest';
import { ShowGaussMySqlBackupListResponse } from './model/ShowGaussMySqlBackupListResponse';
import { ShowGaussMySqlBackupPolicyRequest } from './model/ShowGaussMySqlBackupPolicyRequest';
import { ShowGaussMySqlBackupPolicyResponse } from './model/ShowGaussMySqlBackupPolicyResponse';
import { ShowGaussMySqlConfigurationRequest } from './model/ShowGaussMySqlConfigurationRequest';
import { ShowGaussMySqlConfigurationResponse } from './model/ShowGaussMySqlConfigurationResponse';
import { ShowGaussMySqlEngineVersionRequest } from './model/ShowGaussMySqlEngineVersionRequest';
import { ShowGaussMySqlEngineVersionResponse } from './model/ShowGaussMySqlEngineVersionResponse';
import { ShowGaussMySqlFlavorsRequest } from './model/ShowGaussMySqlFlavorsRequest';
import { ShowGaussMySqlFlavorsResponse } from './model/ShowGaussMySqlFlavorsResponse';
import { ShowGaussMySqlIncrementalBackupListRequest } from './model/ShowGaussMySqlIncrementalBackupListRequest';
import { ShowGaussMySqlIncrementalBackupListResponse } from './model/ShowGaussMySqlIncrementalBackupListResponse';
import { ShowGaussMySqlInstanceInfoRequest } from './model/ShowGaussMySqlInstanceInfoRequest';
import { ShowGaussMySqlInstanceInfoResponse } from './model/ShowGaussMySqlInstanceInfoResponse';
import { ShowGaussMySqlInstanceInfoUnifyStatusRequest } from './model/ShowGaussMySqlInstanceInfoUnifyStatusRequest';
import { ShowGaussMySqlInstanceInfoUnifyStatusResponse } from './model/ShowGaussMySqlInstanceInfoUnifyStatusResponse';
import { ShowGaussMySqlJobInfoRequest } from './model/ShowGaussMySqlJobInfoRequest';
import { ShowGaussMySqlJobInfoResponse } from './model/ShowGaussMySqlJobInfoResponse';
import { ShowGaussMySqlProjectQuotasRequest } from './model/ShowGaussMySqlProjectQuotasRequest';
import { ShowGaussMySqlProjectQuotasResponse } from './model/ShowGaussMySqlProjectQuotasResponse';
import { ShowGaussMySqlProxyFlavorsRequest } from './model/ShowGaussMySqlProxyFlavorsRequest';
import { ShowGaussMySqlProxyFlavorsResponse } from './model/ShowGaussMySqlProxyFlavorsResponse';
import { ShowGaussMySqlProxyListRequest } from './model/ShowGaussMySqlProxyListRequest';
import { ShowGaussMySqlProxyListResponse } from './model/ShowGaussMySqlProxyListResponse';
import { ShowGaussMySqlQuotasRequest } from './model/ShowGaussMySqlQuotasRequest';
import { ShowGaussMySqlQuotasResponse } from './model/ShowGaussMySqlQuotasResponse';
import { ShowInstanceDatabaseVersionRequest } from './model/ShowInstanceDatabaseVersionRequest';
import { ShowInstanceDatabaseVersionResponse } from './model/ShowInstanceDatabaseVersionResponse';
import { ShowInstanceEipRequest } from './model/ShowInstanceEipRequest';
import { ShowInstanceEipResponse } from './model/ShowInstanceEipResponse';
import { ShowInstanceMonitorExtendRequest } from './model/ShowInstanceMonitorExtendRequest';
import { ShowInstanceMonitorExtendResponse } from './model/ShowInstanceMonitorExtendResponse';
import { ShowIntelligentDiagnosisAbnormalCountOfInstancesRequest } from './model/ShowIntelligentDiagnosisAbnormalCountOfInstancesRequest';
import { ShowIntelligentDiagnosisAbnormalCountOfInstancesResponse } from './model/ShowIntelligentDiagnosisAbnormalCountOfInstancesResponse';
import { ShowIntelligentDiagnosisInstanceInfosPerMetricRequest } from './model/ShowIntelligentDiagnosisInstanceInfosPerMetricRequest';
import { ShowIntelligentDiagnosisInstanceInfosPerMetricResponse } from './model/ShowIntelligentDiagnosisInstanceInfosPerMetricResponse';
import { ShowLtsConfigsRequest } from './model/ShowLtsConfigsRequest';
import { ShowLtsConfigsResponse } from './model/ShowLtsConfigsResponse';
import { ShowMultiTenantRequest } from './model/ShowMultiTenantRequest';
import { ShowMultiTenantResponse } from './model/ShowMultiTenantResponse';
import { ShowProxyConfigurationsRequest } from './model/ShowProxyConfigurationsRequest';
import { ShowProxyConfigurationsResponse } from './model/ShowProxyConfigurationsResponse';
import { ShowProxyIpgroupRequest } from './model/ShowProxyIpgroupRequest';
import { ShowProxyIpgroupResponse } from './model/ShowProxyIpgroupResponse';
import { ShowProxyVersionRequest } from './model/ShowProxyVersionRequest';
import { ShowProxyVersionResponse } from './model/ShowProxyVersionResponse';
import { ShowRecyclePolicyRequest } from './model/ShowRecyclePolicyRequest';
import { ShowRecyclePolicyResponse } from './model/ShowRecyclePolicyResponse';
import { ShowRestoreAvailableTablesRequest } from './model/ShowRestoreAvailableTablesRequest';
import { ShowRestoreAvailableTablesResponse } from './model/ShowRestoreAvailableTablesResponse';
import { ShowRestoreTablesRequest } from './model/ShowRestoreTablesRequest';
import { ShowRestoreTablesResponse } from './model/ShowRestoreTablesResponse';
import { ShowSlowLogStatisticsItem } from './model/ShowSlowLogStatisticsItem';
import { ShowSlowLogStatisticsRequest } from './model/ShowSlowLogStatisticsRequest';
import { ShowSlowLogStatisticsRequestBody } from './model/ShowSlowLogStatisticsRequestBody';
import { ShowSlowLogStatisticsResponse } from './model/ShowSlowLogStatisticsResponse';
import { ShowSlowlogSensitiveStatusRequest } from './model/ShowSlowlogSensitiveStatusRequest';
import { ShowSlowlogSensitiveStatusResponse } from './model/ShowSlowlogSensitiveStatusResponse';
import { ShowSqlFilterControlRequest } from './model/ShowSqlFilterControlRequest';
import { ShowSqlFilterControlResponse } from './model/ShowSqlFilterControlResponse';
import { ShowSqlFilterRuleRequest } from './model/ShowSqlFilterRuleRequest';
import { ShowSqlFilterRuleResponse } from './model/ShowSqlFilterRuleResponse';
import { ShowStarRocksDatabaseUserRequest } from './model/ShowStarRocksDatabaseUserRequest';
import { ShowStarRocksDatabaseUserResponse } from './model/ShowStarRocksDatabaseUserResponse';
import { ShowStarRocksDatabaseUsersUserDetails } from './model/ShowStarRocksDatabaseUsersUserDetails';
import { ShowStarrocksParamsRequest } from './model/ShowStarrocksParamsRequest';
import { ShowStarrocksParamsResponse } from './model/ShowStarrocksParamsResponse';
import { ShrinkGaussMySqlProxyRequest } from './model/ShrinkGaussMySqlProxyRequest';
import { ShrinkGaussMySqlProxyRequestBody } from './model/ShrinkGaussMySqlProxyRequestBody';
import { ShrinkGaussMySqlProxyResponse } from './model/ShrinkGaussMySqlProxyResponse';
import { SingleNodeInfo } from './model/SingleNodeInfo';
import { SqlFilterRule } from './model/SqlFilterRule';
import { SqlFilterRulePattern } from './model/SqlFilterRulePattern';
import { SrCreateInstanceRspInstance } from './model/SrCreateInstanceRspInstance';
import { SrCreateInstanceRspInstanceEngine } from './model/SrCreateInstanceRspInstanceEngine';
import { SrCreateInstanceRspInstancePayInfo } from './model/SrCreateInstanceRspInstancePayInfo';
import { SrCreateInstanceRspInstanceTagsInfo } from './model/SrCreateInstanceRspInstanceTagsInfo';
import { SrCreateInstanceRspInstanceTagsInfoSysTags } from './model/SrCreateInstanceRspInstanceTagsInfoSysTags';
import { SrDataStoresDatastores } from './model/SrDataStoresDatastores';
import { SrFlavorResizeReq } from './model/SrFlavorResizeReq';
import { StarRocksCreateRequest } from './model/StarRocksCreateRequest';
import { StarRocksCreateRequestBeVolume } from './model/StarRocksCreateRequestBeVolume';
import { StarRocksCreateRequestEngine } from './model/StarRocksCreateRequestEngine';
import { StarRocksCreateRequestFeVolume } from './model/StarRocksCreateRequestFeVolume';
import { StarRocksCreateRequestHa } from './model/StarRocksCreateRequestHa';
import { StarRocksCreateRequestPayInfo } from './model/StarRocksCreateRequestPayInfo';
import { StarRocksCreateRequestTagsInfo } from './model/StarRocksCreateRequestTagsInfo';
import { StarRocksCreateRequestTagsInfoSysTags } from './model/StarRocksCreateRequestTagsInfoSysTags';
import { StarRocksDatabaseUserInfo } from './model/StarRocksDatabaseUserInfo';
import { StarRocksDatabaseUserPSinfo } from './model/StarRocksDatabaseUserPSinfo';
import { StarRocksDatabaseUserPWinfo } from './model/StarRocksDatabaseUserPWinfo';
import { StarRocksInstanceInfoDatastore } from './model/StarRocksInstanceInfoDatastore';
import { StarRocksInstanceInfoGroups } from './model/StarRocksInstanceInfoGroups';
import { StarRocksInstanceInfoInstances } from './model/StarRocksInstanceInfoInstances';
import { StarRocksInstanceInfoNodes } from './model/StarRocksInstanceInfoNodes';
import { StarRocksInstanceInfoOpsWindow } from './model/StarRocksInstanceInfoOpsWindow';
import { StarRocksInstanceInfoPortInfo } from './model/StarRocksInstanceInfoPortInfo';
import { StarRocksInstanceInfoTagsInfo } from './model/StarRocksInstanceInfoTagsInfo';
import { StarRocksInstanceInfoTagsInfoSysTags } from './model/StarRocksInstanceInfoTagsInfoSysTags';
import { StarRocksInstanceInfoTagsInfoTags } from './model/StarRocksInstanceInfoTagsInfoTags';
import { StarRocksInstanceInfoVolume } from './model/StarRocksInstanceInfoVolume';
import { StarRocksReplicationInfo } from './model/StarRocksReplicationInfo';
import { SwitchAccessControlRequest } from './model/SwitchAccessControlRequest';
import { SwitchAccessControlRequestBody } from './model/SwitchAccessControlRequestBody';
import { SwitchAccessControlResponse } from './model/SwitchAccessControlResponse';
import { SwitchGaussMySqlConfigurationRequest } from './model/SwitchGaussMySqlConfigurationRequest';
import { SwitchGaussMySqlConfigurationResponse } from './model/SwitchGaussMySqlConfigurationResponse';
import { SwitchGaussMySqlInstanceSslRequest } from './model/SwitchGaussMySqlInstanceSslRequest';
import { SwitchGaussMySqlInstanceSslResponse } from './model/SwitchGaussMySqlInstanceSslResponse';
import { SwitchGaussMySqlProxySslRequest } from './model/SwitchGaussMySqlProxySslRequest';
import { SwitchGaussMySqlProxySslResponse } from './model/SwitchGaussMySqlProxySslResponse';
import { SwitchProxySSLRequest } from './model/SwitchProxySSLRequest';
import { SwitchSSLRequest } from './model/SwitchSSLRequest';
import { SyncStarRocksUsersRequest } from './model/SyncStarRocksUsersRequest';
import { SyncStarRocksUsersResponse } from './model/SyncStarRocksUsersResponse';
import { TableConfigCheckRequestV3 } from './model/TableConfigCheckRequestV3';
import { TableConfigCheckResult } from './model/TableConfigCheckResult';
import { TableReplConfig } from './model/TableReplConfig';
import { TablesConfig } from './model/TablesConfig';
import { TagItem } from './model/TagItem';
import { TaskDetailInfo } from './model/TaskDetailInfo';
import { TaurusDbProcessInfo } from './model/TaurusDbProcessInfo';
import { TaurusModifyInstanceMonitorRequestBody } from './model/TaurusModifyInstanceMonitorRequestBody';
import { TaurusModifyProxyWeightRequest } from './model/TaurusModifyProxyWeightRequest';
import { TaurusProxyScaleRequest } from './model/TaurusProxyScaleRequest';
import { TaurusRestartInstanceRequest } from './model/TaurusRestartInstanceRequest';
import { TaurusSwitchoverRequest } from './model/TaurusSwitchoverRequest';
import { TemplateApplyHistory } from './model/TemplateApplyHistory';
import { UpdateAuditLogRequest } from './model/UpdateAuditLogRequest';
import { UpdateAuditLogResponse } from './model/UpdateAuditLogResponse';
import { UpdateAutoScalingPolicyRequest } from './model/UpdateAutoScalingPolicyRequest';
import { UpdateAutoScalingPolicyRequestBody } from './model/UpdateAutoScalingPolicyRequestBody';
import { UpdateAutoScalingPolicyResponse } from './model/UpdateAutoScalingPolicyResponse';
import { UpdateBackupOffsitePolicyInfo } from './model/UpdateBackupOffsitePolicyInfo';
import { UpdateBackupOffsitePolicyRequest } from './model/UpdateBackupOffsitePolicyRequest';
import { UpdateBackupOffsitePolicyRequestBody } from './model/UpdateBackupOffsitePolicyRequestBody';
import { UpdateBackupOffsitePolicyResponse } from './model/UpdateBackupOffsitePolicyResponse';
import { UpdateChDatabaseConfigRequestBody } from './model/UpdateChDatabaseConfigRequestBody';
import { UpdateClickHouseDataBaseConfigRequest } from './model/UpdateClickHouseDataBaseConfigRequest';
import { UpdateClickHouseDataBaseConfigResponse } from './model/UpdateClickHouseDataBaseConfigResponse';
import { UpdateClickHouseDatabaseUserPasswordRequest } from './model/UpdateClickHouseDatabaseUserPasswordRequest';
import { UpdateClickHouseDatabaseUserPasswordResponse } from './model/UpdateClickHouseDatabaseUserPasswordResponse';
import { UpdateClickHouseDatabaseUserPermissionRequest } from './model/UpdateClickHouseDatabaseUserPermissionRequest';
import { UpdateClickHouseDatabaseUserPermissionResponse } from './model/UpdateClickHouseDatabaseUserPermissionResponse';
import { UpdateClickHouseLtsConfigRequest } from './model/UpdateClickHouseLtsConfigRequest';
import { UpdateClickHouseLtsConfigResponse } from './model/UpdateClickHouseLtsConfigResponse';
import { UpdateClickHouseSlowLogSensitiveStatusRequest } from './model/UpdateClickHouseSlowLogSensitiveStatusRequest';
import { UpdateClickHouseSlowLogSensitiveStatusResponse } from './model/UpdateClickHouseSlowLogSensitiveStatusResponse';
import { UpdateConfigurationParameterRequestBody } from './model/UpdateConfigurationParameterRequestBody';
import { UpdateDatabaseComment } from './model/UpdateDatabaseComment';
import { UpdateDatabaseCommentRequest } from './model/UpdateDatabaseCommentRequest';
import { UpdateDatabaseUserComment } from './model/UpdateDatabaseUserComment';
import { UpdateDatabaseUserCommentRequest } from './model/UpdateDatabaseUserCommentRequest';
import { UpdateGaussMySqlBackupPolicyRequest } from './model/UpdateGaussMySqlBackupPolicyRequest';
import { UpdateGaussMySqlBackupPolicyResponse } from './model/UpdateGaussMySqlBackupPolicyResponse';
import { UpdateGaussMySqlConfigurationRequest } from './model/UpdateGaussMySqlConfigurationRequest';
import { UpdateGaussMySqlConfigurationResponse } from './model/UpdateGaussMySqlConfigurationResponse';
import { UpdateGaussMySqlDatabaseCommentRequest } from './model/UpdateGaussMySqlDatabaseCommentRequest';
import { UpdateGaussMySqlDatabaseCommentResponse } from './model/UpdateGaussMySqlDatabaseCommentResponse';
import { UpdateGaussMySqlDatabaseUserCommentRequest } from './model/UpdateGaussMySqlDatabaseUserCommentRequest';
import { UpdateGaussMySqlDatabaseUserCommentResponse } from './model/UpdateGaussMySqlDatabaseUserCommentResponse';
import { UpdateGaussMySqlInstanceAliasRequest } from './model/UpdateGaussMySqlInstanceAliasRequest';
import { UpdateGaussMySqlInstanceAliasResponse } from './model/UpdateGaussMySqlInstanceAliasResponse';
import { UpdateGaussMySqlInstanceEipRequest } from './model/UpdateGaussMySqlInstanceEipRequest';
import { UpdateGaussMySqlInstanceEipResponse } from './model/UpdateGaussMySqlInstanceEipResponse';
import { UpdateGaussMySqlInstanceInternalIpRequest } from './model/UpdateGaussMySqlInstanceInternalIpRequest';
import { UpdateGaussMySqlInstanceInternalIpResponse } from './model/UpdateGaussMySqlInstanceInternalIpResponse';
import { UpdateGaussMySqlInstanceNameRequest } from './model/UpdateGaussMySqlInstanceNameRequest';
import { UpdateGaussMySqlInstanceNameResponse } from './model/UpdateGaussMySqlInstanceNameResponse';
import { UpdateGaussMySqlInstanceOpsWindowRequest } from './model/UpdateGaussMySqlInstanceOpsWindowRequest';
import { UpdateGaussMySqlInstanceOpsWindowResponse } from './model/UpdateGaussMySqlInstanceOpsWindowResponse';
import { UpdateGaussMySqlInstancePortRequest } from './model/UpdateGaussMySqlInstancePortRequest';
import { UpdateGaussMySqlInstancePortResponse } from './model/UpdateGaussMySqlInstancePortResponse';
import { UpdateGaussMySqlInstanceSecurityGroupRequest } from './model/UpdateGaussMySqlInstanceSecurityGroupRequest';
import { UpdateGaussMySqlInstanceSecurityGroupResponse } from './model/UpdateGaussMySqlInstanceSecurityGroupResponse';
import { UpdateGaussMySqlQuotasRequest } from './model/UpdateGaussMySqlQuotasRequest';
import { UpdateGaussMySqlQuotasResponse } from './model/UpdateGaussMySqlQuotasResponse';
import { UpdateInstanceConfigurationsRequest } from './model/UpdateInstanceConfigurationsRequest';
import { UpdateInstanceConfigurationsRequestBody } from './model/UpdateInstanceConfigurationsRequestBody';
import { UpdateInstanceConfigurationsResponse } from './model/UpdateInstanceConfigurationsResponse';
import { UpdateInstanceMonitorRequest } from './model/UpdateInstanceMonitorRequest';
import { UpdateInstanceMonitorResponse } from './model/UpdateInstanceMonitorResponse';
import { UpdateMultiTenantRequest } from './model/UpdateMultiTenantRequest';
import { UpdateMultiTenantResponse } from './model/UpdateMultiTenantResponse';
import { UpdateNewNodeAutoAddSwitchRequest } from './model/UpdateNewNodeAutoAddSwitchRequest';
import { UpdateNewNodeAutoAddSwitchRequestBody } from './model/UpdateNewNodeAutoAddSwitchRequestBody';
import { UpdateNewNodeAutoAddSwitchResponse } from './model/UpdateNewNodeAutoAddSwitchResponse';
import { UpdateParamInfo } from './model/UpdateParamInfo';
import { UpdateProxyConfigurationItem } from './model/UpdateProxyConfigurationItem';
import { UpdateProxyConnectionPoolTypeRequest } from './model/UpdateProxyConnectionPoolTypeRequest';
import { UpdateProxyConnectionPoolTypeResponse } from './model/UpdateProxyConnectionPoolTypeResponse';
import { UpdateProxyNameRequest } from './model/UpdateProxyNameRequest';
import { UpdateProxyNameResponse } from './model/UpdateProxyNameResponse';
import { UpdateProxyNewConfigRequestBody } from './model/UpdateProxyNewConfigRequestBody';
import { UpdateProxyNewConfigurationsRequest } from './model/UpdateProxyNewConfigurationsRequest';
import { UpdateProxyNewConfigurationsResponse } from './model/UpdateProxyNewConfigurationsResponse';
import { UpdateProxyPortRequest } from './model/UpdateProxyPortRequest';
import { UpdateProxyPortRequestBody } from './model/UpdateProxyPortRequestBody';
import { UpdateProxyPortResponse } from './model/UpdateProxyPortResponse';
import { UpdateProxySessionConsistenceRequest } from './model/UpdateProxySessionConsistenceRequest';
import { UpdateProxySessionConsistenceResponse } from './model/UpdateProxySessionConsistenceResponse';
import { UpdateServerlessPolicy } from './model/UpdateServerlessPolicy';
import { UpdateServerlessPolicyRequest } from './model/UpdateServerlessPolicyRequest';
import { UpdateServerlessPolicyResponse } from './model/UpdateServerlessPolicyResponse';
import { UpdateSlowlogSensitiveSwitchRequest } from './model/UpdateSlowlogSensitiveSwitchRequest';
import { UpdateSlowlogSensitiveSwitchRequestBody } from './model/UpdateSlowlogSensitiveSwitchRequestBody';
import { UpdateSlowlogSensitiveSwitchResponse } from './model/UpdateSlowlogSensitiveSwitchResponse';
import { UpdateSqlFilterControlRequest } from './model/UpdateSqlFilterControlRequest';
import { UpdateSqlFilterControlResponse } from './model/UpdateSqlFilterControlResponse';
import { UpdateStarRocksDatabaseUserPasswordRequest } from './model/UpdateStarRocksDatabaseUserPasswordRequest';
import { UpdateStarRocksDatabaseUserPasswordResponse } from './model/UpdateStarRocksDatabaseUserPasswordResponse';
import { UpdateStarRocksDatabaseUserPermissionRequest } from './model/UpdateStarRocksDatabaseUserPermissionRequest';
import { UpdateStarRocksDatabaseUserPermissionResponse } from './model/UpdateStarRocksDatabaseUserPermissionResponse';
import { UpdateStarrocksParamsRequest } from './model/UpdateStarrocksParamsRequest';
import { UpdateStarrocksParamsResponse } from './model/UpdateStarrocksParamsResponse';
import { UpdateTaurusNodeDataIpRequest } from './model/UpdateTaurusNodeDataIpRequest';
import { UpdateTaurusNodeDataIpResponse } from './model/UpdateTaurusNodeDataIpResponse';
import { UpdateTransactionSplitStatusRequest } from './model/UpdateTransactionSplitStatusRequest';
import { UpdateTransactionSplitStatusResponse } from './model/UpdateTransactionSplitStatusResponse';
import { UpgradeDatabaseRequest } from './model/UpgradeDatabaseRequest';
import { UpgradeGaussMySqlInstanceDatabaseRequest } from './model/UpgradeGaussMySqlInstanceDatabaseRequest';
import { UpgradeGaussMySqlInstanceDatabaseResponse } from './model/UpgradeGaussMySqlInstanceDatabaseResponse';
import { UpgradeProxyVersionRequest } from './model/UpgradeProxyVersionRequest';
import { UpgradeProxyVersionResponse } from './model/UpgradeProxyVersionResponse';
import { UpgradeSrKernelVersionRequest } from './model/UpgradeSrKernelVersionRequest';
import { UpgradeSrKernelVersionRequestV3 } from './model/UpgradeSrKernelVersionRequestV3';
import { UpgradeSrKernelVersionResponse } from './model/UpgradeSrKernelVersionResponse';
import { UserSyncReq } from './model/UserSyncReq';

export class GaussDBClient {
    public static newBuilder(): ClientBuilder<GaussDBClient> {
            let client = new ClientBuilder<GaussDBClient>(newClient);
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
     * 授予云数据库 TaurusDB实例数据库用户数据库权限。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 授予数据库用户数据库权限
     * @param {string} instanceId 实例ID。
     * @param {GrantDatabasePermissionRequestBody} grantDatabasePermissionRequestBody 请求体。
     * @param {string} [xLanguage] 语言。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public addDatabasePermission(addDatabasePermissionRequest?: AddDatabasePermissionRequest): Promise<AddDatabasePermissionResponse> {
        const options = ParamCreater().addDatabasePermission(addDatabasePermissionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量添加或删除指定实例的标签。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量添加或删除标签
     * @param {string} instanceId 实例ID。
     * @param {BatchOperateInstanceTagRequestBody} batchOperateInstanceTagRequestBody 请求体
     * @param {string} [xLanguage] 语言。
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
     * 实例解绑弹性公网IP。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 解绑弹性公网IP
     * @param {string} instanceId 租户在某一project下的实例ID。
     * @param {string} [xLanguage] 语言。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public cancelGaussMySqlInstanceEip(cancelGaussMySqlInstanceEipRequest?: CancelGaussMySqlInstanceEipRequest): Promise<CancelGaussMySqlInstanceEipResponse> {
        const options = ParamCreater().cancelGaussMySqlInstanceEip(cancelGaussMySqlInstanceEipRequest);

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
     * @param {CancelScheduleTask} cancelScheduleTask 请求体。
     * @param {string} [xLanguage] 语言。
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
     * 变更数据库实例的规格。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 变更实例规格
     * @param {string} instanceId 实例ID，严格匹配UUID规则。
     * @param {MysqlChangeSpecificationRequest} mysqlChangeSpecificationRequest 请求体
     * @param {string} [xLanguage] 语言。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public changeGaussMySqlInstanceSpecification(changeGaussMySqlInstanceSpecificationRequest?: ChangeGaussMySqlInstanceSpecificationRequest): Promise<ChangeGaussMySqlInstanceSpecificationResponse> {
        const options = ParamCreater().changeGaussMySqlInstanceSpecification(changeGaussMySqlInstanceSpecificationRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 数据库代理规格变更。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 数据库代理规格变更
     * @param {string} instanceId 实例ID，严格匹配UUID规则。
     * @param {string} proxyId 数据库代理ID，严格匹配UUID规则。
     * @param {TaurusProxyScaleRequest} taurusProxyScaleRequest 请求体
     * @param {string} [xLanguage] 语言。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public changeGaussMySqlProxySpecification(changeGaussMySqlProxySpecificationRequest?: ChangeGaussMySqlProxySpecificationRequest): Promise<ChangeGaussMySqlProxySpecificationResponse> {
        const options = ParamCreater().changeGaussMySqlProxySpecification(changeGaussMySqlProxySpecificationRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 资源预校验。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 资源预校验
     * @param {CheckResourceRequestBody} checkResourceRequestBody 请求体。
     * @param {string} [xLanguage] 请求语言类型。默认en-us。 取值范围： - en-us - zh-cn
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public checkResource(checkResourceRequest?: CheckResourceRequest): Promise<CheckResourceResponse> {
        const options = ParamCreater().checkResource(checkResourceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 复制参数组。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 复制参数组
     * @param {string} configurationId 参数组ID。  通过调用[查询参数模板](https://support.huaweicloud.com/api-taurusdb/ListGaussMySqlConfigurations.html)接口获取。  请求响应成功后在响应消息体中包含的“id”的值即为configuration_id值。
     * @param {CopyConfigurationsRequestBody} copyConfigurationsRequestBody 请求体。
     * @param {string} [xLanguage] 请求语言类型。默认en-us。 取值范围： - en-us - zh-cn
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public copyConfigurations(copyConfigurationsRequest?: CopyConfigurationsRequest): Promise<CopyConfigurationsResponse> {
        const options = ParamCreater().copyConfigurations(copyConfigurationsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 复制实例参数组。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 复制实例参数组
     * @param {string} instanceId 实例ID，严格匹配UUID规则。
     * @param {string} configurationId 参数组ID。  通过调用[查询实例详情信息](https://support.huaweicloud.com/api-taurusdb/ShowGaussMySqlInstanceInfo.html)接口获取。  请求响应成功后在响应消息体中包含的“configuration_id”的值即为configuration_id值。
     * @param {CopyInstanceConfigurationsRequestBody} copyInstanceConfigurationsRequestBody 请求体。
     * @param {string} [xLanguage] 请求语言类型。默认en-us。 取值范围： - en-us - zh-cn
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public copyInstanceConfigurations(copyInstanceConfigurationsRequest?: CopyInstanceConfigurationsRequest): Promise<CopyInstanceConfigurationsResponse> {
        const options = ParamCreater().copyInstanceConfigurations(copyInstanceConfigurationsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 设置访问控制规则。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 设置访问控制规则
     * @param {string} instanceId 实例ID，严格匹配UUID规则。
     * @param {string} proxyId 数据库代理ID，严格匹配UUID规则。
     * @param {CreateAccessControlRequestBody} createAccessControlRequestBody 请求体。
     * @param {string} [xLanguage] 请求语言类型。默认en-us。 取值范围： - en-us - zh-cn
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createAccessControl(createAccessControlRequest?: CreateAccessControlRequest): Promise<CreateAccessControlResponse> {
        const options = ParamCreater().createAccessControl(createAccessControlRequest);

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
     * @param {MysqlCreateBackupRequest} mysqlCreateBackupRequest 请求体
     * @param {string} [xLanguage] 语言。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createGaussMySqlBackup(createGaussMySqlBackupRequest?: CreateGaussMySqlBackupRequest): Promise<CreateGaussMySqlBackupResponse> {
        const options = ParamCreater().createGaussMySqlBackup(createGaussMySqlBackupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建参数模板信息，包含参数模板名称、描述、数据库版本信息、参数值。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建参数模板
     * @param {CreateConfigurationRequestBody} createConfigurationRequestBody： 请求体。
     * @param {string} [xLanguage] 语言。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createGaussMySqlConfiguration(createGaussMySqlConfigurationRequest?: CreateGaussMySqlConfigurationRequest): Promise<CreateGaussMySqlConfigurationResponse> {
        const options = ParamCreater().createGaussMySqlConfiguration(createGaussMySqlConfigurationRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建云数据库 TaurusDB实例数据库。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建数据库
     * @param {string} instanceId 实例ID。
     * @param {CreateGaussMySqlDatabaseRequestBody} createGaussMySqlDatabaseRequestBody 请求体。
     * @param {string} [xLanguage] 语言。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createGaussMySqlDatabase(createGaussMySqlDatabaseRequest?: CreateGaussMySqlDatabaseRequest): Promise<CreateGaussMySqlDatabaseResponse> {
        const options = ParamCreater().createGaussMySqlDatabase(createGaussMySqlDatabaseRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建云数据库TaurusDB实例数据库用户。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建数据库用户
     * @param {string} instanceId 实例ID。
     * @param {CreateDatabaseUserRequest} createDatabaseUserRequest 请求体。
     * @param {string} [xLanguage] 语言。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createGaussMySqlDatabaseUser(createGaussMySqlDatabaseUserRequest?: CreateGaussMySqlDatabaseUserRequest): Promise<CreateGaussMySqlDatabaseUserResponse> {
        const options = ParamCreater().createGaussMySqlDatabaseUser(createGaussMySqlDatabaseUserRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建云数据库TaurusDB实例。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建数据库实例
     * @param {MysqlInstanceRequest} createInstanceRequest 请求体。
     * @param {string} [xLanguage] 语言。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createGaussMySqlInstance(createGaussMySqlInstanceRequest?: CreateGaussMySqlInstanceRequest): Promise<CreateGaussMySqlInstanceResponse> {
        const options = ParamCreater().createGaussMySqlInstance(createGaussMySqlInstanceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 开启数据库代理，只支持ELB模式。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 开启数据库代理
     * @param {string} instanceId 实例ID。
     * @param {string} [xLanguage] 语言。
     * @param {OpenMysqlProxyRequestBody} [createMysqlProxyRequest] 请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createGaussMySqlProxy(createGaussMySqlProxyRequest?: CreateGaussMySqlProxyRequest): Promise<CreateGaussMySqlProxyResponse> {
        const options = ParamCreater().createGaussMySqlProxy(createGaussMySqlProxyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建只读节点。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建只读节点
     * @param {string} instanceId 实例ID，严格匹配UUID规则。
     * @param {MysqlCreateReadonlyNodeRequest} mysqlCreateReadonlyNodeRequest 请求体。
     * @param {string} [xLanguage] 语言。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createGaussMySqlReadonlyNode(createGaussMySqlReadonlyNodeRequest?: CreateGaussMySqlReadonlyNodeRequest): Promise<CreateGaussMySqlReadonlyNodeResponse> {
        const options = ParamCreater().createGaussMySqlReadonlyNode(createGaussMySqlReadonlyNodeRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 申请内网域名。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 申请内网域名
     * @param {string} instanceId 实例ID。
     * @param {CreateDnsNameReq} createGaussMysqlDnsRequestBody 请求体。
     * @param {string} [xLanguage] 语言。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createGaussMysqlDns(createGaussMysqlDnsRequest?: CreateGaussMysqlDnsRequest): Promise<CreateGaussMysqlDnsResponse> {
        const options = ParamCreater().createGaussMysqlDns(createGaussMysqlDnsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量创建LTS日志配置
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量创建LTS日志配置
     * @param {CreateLtsConfigs} createLtsConfigsRequestBody 批量创建LTS日志配置请求体。
     * @param {string} [xLanguage] 语言。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createLtsConfigs(createLtsConfigsRequest?: CreateLtsConfigsRequest): Promise<CreateLtsConfigsResponse> {
        const options = ParamCreater().createLtsConfigs(createLtsConfigsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 表级时间点恢复。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 表级时间点恢复
     * @param {string} instanceId 实例ID，严格匹配UUID规则。
     * @param {CreateRestoreTablesRequestBody} createRestoreTablesRequestBody 请求体。
     * @param {string} [xLanguage] 请求语言类型。默认en-us。 取值范围： - en-us - zh-cn
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createRestoreTables(createRestoreTablesRequest?: CreateRestoreTablesRequest): Promise<CreateRestoreTablesResponse> {
        const options = ParamCreater().createRestoreTables(createRestoreTablesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除云数据库 TaurusDB实例数据库用户的数据库权限。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除数据库用户的数据库权限
     * @param {string} instanceId 实例ID。
     * @param {DeleteDatabasePermissionRequestBody} grantDatabasePermissionRequestBody 请求体。
     * @param {string} [xLanguage] 语言。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteDatabasePermission(deleteDatabasePermissionRequest?: DeleteDatabasePermissionRequest): Promise<DeleteDatabasePermissionResponse> {
        const options = ParamCreater().deleteDatabasePermission(deleteDatabasePermissionRequest);

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
     * @param {string} backupId 备份文件ID。  获取方法参见[查询备份列表](https://support.huaweicloud.com/api-taurusdb/ShowGaussMySqlBackupList.html)。
     * @param {string} [xLanguage] 语言。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteGaussMySqlBackup(deleteGaussMySqlBackupRequest?: DeleteGaussMySqlBackupRequest): Promise<DeleteGaussMySqlBackupResponse> {
        const options = ParamCreater().deleteGaussMySqlBackup(deleteGaussMySqlBackupRequest);

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
     * @param {string} configurationId 参数模板ID。
     * @param {string} [xLanguage] 语言。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteGaussMySqlConfiguration(deleteGaussMySqlConfigurationRequest?: DeleteGaussMySqlConfigurationRequest): Promise<DeleteGaussMySqlConfigurationResponse> {
        const options = ParamCreater().deleteGaussMySqlConfiguration(deleteGaussMySqlConfigurationRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除云数据库 TaurusDB实例数据库。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除数据库
     * @param {string} instanceId 实例ID。
     * @param {DeleteGaussMySqlDatabaseRequestBody} deleteGaussMySqlDatabaseRequestBody 请求体。
     * @param {string} [xLanguage] 语言。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteGaussMySqlDatabase(deleteGaussMySqlDatabaseRequest?: DeleteGaussMySqlDatabaseRequest): Promise<DeleteGaussMySqlDatabaseResponse> {
        const options = ParamCreater().deleteGaussMySqlDatabase(deleteGaussMySqlDatabaseRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除云数据库 TaurusDB实例数据库用户。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除数据库用户
     * @param {string} instanceId 实例ID。
     * @param {DeleteDatabaseUserRequest} deleteDatabaseUserRequest 请求体。
     * @param {string} [xLanguage] 语言。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteGaussMySqlDatabaseUser(deleteGaussMySqlDatabaseUserRequest?: DeleteGaussMySqlDatabaseUserRequest): Promise<DeleteGaussMySqlDatabaseUserResponse> {
        const options = ParamCreater().deleteGaussMySqlDatabaseUser(deleteGaussMySqlDatabaseUserRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除/退订数据库实例。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除/退订数据库实例
     * @param {string} instanceId 实例ID，严格匹配UUID规则。
     * @param {string} [xLanguage] 语言。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteGaussMySqlInstance(deleteGaussMySqlInstanceRequest?: DeleteGaussMySqlInstanceRequest): Promise<DeleteGaussMySqlInstanceResponse> {
        const options = ParamCreater().deleteGaussMySqlInstance(deleteGaussMySqlInstanceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 关闭数据库代理。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 关闭数据库代理
     * @param {string} instanceId 实例ID。
     * @param {string} [xLanguage] 语言。
     * @param {CloseMysqlProxyRequestBody} [closeMysqlProxyRequest] 请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteGaussMySqlProxy(deleteGaussMySqlProxyRequest?: DeleteGaussMySqlProxyRequest): Promise<DeleteGaussMySqlProxyResponse> {
        const options = ParamCreater().deleteGaussMySqlProxy(deleteGaussMySqlProxyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除/退订实例的只读节点。多可用区模式删除/退订只读节点时，要保证删除/退订后，剩余的只读节点和主节点在不同的可用区中，否则无法删除/退订该只读节点。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除/退订只读节点
     * @param {string} instanceId 实例ID，严格匹配UUID规则。
     * @param {string} nodeId 节点ID，严格匹配UUID规则。
     * @param {string} [xLanguage] 语言。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteGaussMySqlReadonlyNode(deleteGaussMySqlReadonlyNodeRequest?: DeleteGaussMySqlReadonlyNodeRequest): Promise<DeleteGaussMySqlReadonlyNodeResponse> {
        const options = ParamCreater().deleteGaussMySqlReadonlyNode(deleteGaussMySqlReadonlyNodeRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量删除LTS日志配置
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量删除LTS日志配置
     * @param {DeleteLtsConfigsRequestBody} deleteLtsConfigsRequestBody 批量删除LTS日志配置请求体
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
     * 删除定时任务。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除定时任务
     * @param {string} instanceId 实例ID，严格匹配UUID规则。
     * @param {DeleteScheduleTasKRequestBody} deleteScheduleTasKRequestBody 请求体。
     * @param {string} [xLanguage] 请求语言类型。默认en-us。 取值范围： - en-us - zh-cn
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteScheduleTasK(deleteScheduleTasKRequest?: DeleteScheduleTasKRequest): Promise<DeleteScheduleTasKResponse> {
        const options = ParamCreater().deleteScheduleTasK(deleteScheduleTasKRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除SQL限流规则。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除SQL限流规则
     * @param {string} instanceId 实例ID。
     * @param {DeleteSqlFilterRuleReq} deleteSqlFilterRuleReq 请求体
     * @param {string} [xLanguage] 语言。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteSqlFilterRule(deleteSqlFilterRuleRequest?: DeleteSqlFilterRuleRequest): Promise<DeleteSqlFilterRuleResponse> {
        const options = ParamCreater().deleteSqlFilterRule(deleteSqlFilterRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除指定任务记录。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除指定任务记录
     * @param {string} jobId 任务ID。
     * @param {string} [xLanguage] 语言。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteTaskRecord(deleteTaskRecordRequest?: DeleteTaskRecordRequest): Promise<DeleteTaskRecordResponse> {
        const options = ParamCreater().deleteTaskRecord(deleteTaskRecordRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 终止TaurusDB节点中指定的用户会话线程，执行时将排除传入的内部会话线程。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 终止节点用户会话线程
     * @param {string} instanceId **参数解释**：  实例ID，此参数是实例的唯一标识。  **约束限制**：  不涉及。  **取值范围**：  只能由英文字母、数字组成，后缀为in07，长度为36个字符。  **默认取值**：  不涉及。
     * @param {string} nodeId **参数解释**：  节点ID，此参数是节点的唯一标识。  **约束限制**：  不涉及。  **取值范围**：  只能由英文字母、数字组成，后缀为no07，长度为36个字符。  **默认取值**：  不涉及。
     * @param {DeleteTaurusDbNodeProcessesRequestBody} deleteTaurusDbNodeProcessesRequestBody 请求体。
     * @param {'zh-cn' | 'en-us'} [xLanguage] **参数解释**：  请求语言类型。  **约束限制**：  不涉及。  **取值范围**：  - en-us - zh-cn  **默认值**：  en-us
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteTaurusDbNodeProcesses(deleteTaurusDbNodeProcessesRequest?: DeleteTaurusDbNodeProcessesRequest): Promise<DeleteTaurusDbNodeProcessesResponse> {
        const options = ParamCreater().deleteTaurusDbNodeProcesses(deleteTaurusDbNodeProcessesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询实例是否开启备份加密功能。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询实例是否开启备份加密功能
     * @param {string} instanceId 租户在某一project下的实例ID。
     * @param {string} [xLanguage] 语言。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public describeBackupEncryptStatus(describeBackupEncryptStatusRequest?: DescribeBackupEncryptStatusRequest): Promise<DescribeBackupEncryptStatusResponse> {
        const options = ParamCreater().describeBackupEncryptStatus(describeBackupEncryptStatusRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取慢日志下载链接
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取慢日志下载链接
     * @param {string} instanceId 实例ID，严格匹配UUID规则。
     * @param {string} nodeId 节点ID。
     * @param {string} [xLanguage] 请求语言类型。默认en-us。 取值范围： - en-us - zh-cn
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public downloadSlowLogFile(downloadSlowLogFileRequest?: DownloadSlowLogFileRequest): Promise<DownloadSlowLogFileResponse> {
        const options = ParamCreater().downloadSlowLogFile(downloadSlowLogFileRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 包周期存储扩容。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 包周期存储扩容
     * @param {string} instanceId 实例ID，严格匹配UUID规则。
     * @param {MysqlExtendInstanceVolumeRequest} mysqlExtendInstanceVolumeRequest 请求体
     * @param {string} [xLanguage] 语言。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public expandGaussMySqlInstanceVolume(expandGaussMySqlInstanceVolumeRequest?: ExpandGaussMySqlInstanceVolumeRequest): Promise<ExpandGaussMySqlInstanceVolumeResponse> {
        const options = ParamCreater().expandGaussMySqlInstanceVolume(expandGaussMySqlInstanceVolumeRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 扩容数据库代理节点的数量。
     * DeC专属云账号暂不支持数据库代理。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 扩容数据库代理节点的数量
     * @param {string} instanceId 实例ID，严格匹配UUID规则。
     * @param {EnlargeProxyRequest} enlargeProxyRequest 请求体
     * @param {string} [xLanguage] 语言。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public expandGaussMySqlProxy(expandGaussMySqlProxyRequest?: ExpandGaussMySqlProxyRequest): Promise<ExpandGaussMySqlProxyResponse> {
        const options = ParamCreater().expandGaussMySqlProxy(expandGaussMySqlProxyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 用户手动进行主备倒换。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 手动主备倒换
     * @param {string} instanceId 租户在某一project下的实例ID。
     * @param {TaurusSwitchoverRequest} taurusSwitchoverRequest 请求体。
     * @param {string} [xLanguage] 语言。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public invokeGaussMySqlInstanceSwitchOver(invokeGaussMySqlInstanceSwitchOverRequest?: InvokeGaussMySqlInstanceSwitchOverRequest): Promise<InvokeGaussMySqlInstanceSwitchOverResponse> {
        const options = ParamCreater().invokeGaussMySqlInstanceSwitchOver(invokeGaussMySqlInstanceSwitchOverRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取全量SQL的临时下载链接。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取全量SQL的临时下载链接
     * @param {string} instanceId 实例ID，严格匹配UUID规则。
     * @param {string} startTime 开始时间，不得早于实例创建时间。格式为“yyyy-mm-ddThh:mm:ssZ”。  其中，T指某个时间的开始；Z指时区偏移量，例如偏移1个小时显示为+0100。
     * @param {string} endTime 结束时间，不得晚于当前时间。格式为“yyyy-mm-ddThh:mm:ssZ”。  其中，T指某个时间的开始；Z指时区偏移量，例如偏移1个小时显示为+0100。
     * @param {string} [xLanguage] 请求语言类型。默认en-us。 取值范围： - en-us - zh-cn
     * @param {string} [nodeId] 节点ID。 - 若输入，则只获取该节点的全量SQL下载链接。 - 若不输入，则获取该实例所有节点的全量SQL下载链接。
     * @param {string} [lastFileName] 上次查询的最后一个文件的文件名。 - 若输入，则从该文件名以后按字典顺序开始查询。 - 若不输入，则从第一个文件开始查询。
     * @param {number} [limit] 一次查询返回的文件数量。  默认值为10，取值范围：1~50之间的整数值。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAuditLogDownloadLink(listAuditLogDownloadLinkRequest?: ListAuditLogDownloadLinkRequest): Promise<ListAuditLogDownloadLinkResponse> {
        const options = ParamCreater().listAuditLogDownloadLink(listAuditLogDownloadLinkRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 比较两个参数模板之间的差异。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 对比参数模板
     * @param {ListConfigurationsDifferencesRequestBody} listConfigurationsDifferencesRequestBody 请求体。
     * @param {string} [xLanguage] 请求语言类型。默认en-us。 取值范围： - en-us - zh-cn
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listConfigurationsDifferences(listConfigurationsDifferencesRequest?: ListConfigurationsDifferencesRequest): Promise<ListConfigurationsDifferencesResponse> {
        const options = ParamCreater().listConfigurationsDifferences(listConfigurationsDifferencesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定参数模板可被应用的实例。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询可应用的实例列表
     * @param {string} configurationId 参数模板ID。  通过调用[查询参数模板](https://support.huaweicloud.com/api-taurusdb/ListGaussMySqlConfigurations.html)接口获取。  请求响应成功后在响应消息体中包含的“id”的值即为configuration_id值。
     * @param {string} [xLanguage] 请求语言类型。默认en-us。 取值范围： - en-us - zh-cn
     * @param {number} [offset] 索引位置，偏移量。从第一条数据偏移offset条数据后开始查询，默认为0（偏移0条数据，表示从第一条数据开始查询），必须为数字，不能为负数。
     * @param {number} [limit] 查询记录数。默认为100，不能为负数，最小值为1，最大值为100。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listConfigurationsInstances(listConfigurationsInstancesRequest?: ListConfigurationsInstancesRequest): Promise<ListConfigurationsInstancesResponse> {
        const options = ParamCreater().listConfigurationsInstances(listConfigurationsInstancesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询企业项目。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询企业项目
     * @param {string} [xLanguage] 请求语言类型。默认en-us。 取值范围： - en-us - zh-cn
     * @param {number} [offset] 索引位置，偏移量。从第一条数据偏移offset条数据后开始查询，默认为0（偏移0条数据，表示从第一条数据开始查询），必须为数字，不能为负数。
     * @param {number} [limit] 查询记录数。默认为100，不能为负数，最小值为1，最大值为100。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listEnterpriseProjects(listEnterpriseProjectsRequest?: ListEnterpriseProjectsRequest): Promise<ListEnterpriseProjectsResponse> {
        const options = ParamCreater().listEnterpriseProjects(listEnterpriseProjectsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取参数模板列表，包括所有数据库的默认参数模板和用户创建的参数模板。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询参数模板
     * @param {string} [xLanguage] 语言。
     * @param {number} [offset] 索引位置，偏移量。从第一条数据偏移offset条数据后开始查询，默认为0（偏移0条数据，表示从第一条数据开始查询），必须为数字，不能为负数。
     * @param {number} [limit] 查询记录数。默认为100，不能为负数，最小值为1，最大值为100。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listGaussMySqlConfigurations(listGaussMySqlConfigurationsRequest?: ListGaussMySqlConfigurationsRequest): Promise<ListGaussMySqlConfigurationsResponse> {
        const options = ParamCreater().listGaussMySqlConfigurations(listGaussMySqlConfigurationsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询 TaurusDB实例数据库。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询数据库列表
     * @param {string} instanceId 实例ID。
     * @param {string} [xLanguage] 语言。
     * @param {number} [offset] 索引位置，偏移量。从第一条数据偏移offset条数据后开始查询，默认为0（偏移0条数据，表示从第一条数据开始查询），必须为数字，不能为负数。
     * @param {number} [limit] 查询记录数。默认为100，不能为负数，最小值为1，最大值为100。
     * @param {string} [name] 数据库名称。
     * @param {string} [charset] 数据库使用的字符集，如utf8mb4、gbk等。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listGaussMySqlDatabase(listGaussMySqlDatabaseRequest?: ListGaussMySqlDatabaseRequest): Promise<ListGaussMySqlDatabaseResponse> {
        const options = ParamCreater().listGaussMySqlDatabase(listGaussMySqlDatabaseRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询云数据库 TaurusDB实例数据库可用字符集。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询数据库可用字符集
     * @param {string} instanceId 实例ID。
     * @param {string} [xLanguage] 语言。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listGaussMySqlDatabaseCharsets(listGaussMySqlDatabaseCharsetsRequest?: ListGaussMySqlDatabaseCharsetsRequest): Promise<ListGaussMySqlDatabaseCharsetsResponse> {
        const options = ParamCreater().listGaussMySqlDatabaseCharsets(listGaussMySqlDatabaseCharsetsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询云数据库 TaurusDB实例数据库用户。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询数据库用户
     * @param {string} instanceId 实例ID。
     * @param {string} [xLanguage] 语言。
     * @param {number} [offset] 索引位置，偏移量。从第一条数据偏移offset条数据后开始查询，默认为0（偏移0条数据，表示从第一条数据开始查询），必须为数字，不能为负数。
     * @param {number} [limit] 查询记录数。默认为100，不能为负数，最小值为1，最大值为100。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listGaussMySqlDatabaseUser(listGaussMySqlDatabaseUserRequest?: ListGaussMySqlDatabaseUserRequest): Promise<ListGaussMySqlDatabaseUserResponse> {
        const options = ParamCreater().listGaussMySqlDatabaseUser(listGaussMySqlDatabaseUserRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取专属资源池列表，包括用户开通的所有专属资源池信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询专属资源池列表
     * @param {string} [xLanguage] 语言。
     * @param {number} [offset] 索引位置，偏移量。从第一条数据偏移offset条数据后开始查询，默认为0（偏移0条数据，表示从第一条数据开始查询），必须为数字，不能为负数。
     * @param {number} [limit] 查询记录数。默认为100，不能为负数，最小值为1，最大值为100。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listGaussMySqlDedicatedResources(listGaussMySqlDedicatedResourcesRequest?: ListGaussMySqlDedicatedResourcesRequest): Promise<ListGaussMySqlDedicatedResourcesResponse> {
        const options = ParamCreater().listGaussMySqlDedicatedResources(listGaussMySqlDedicatedResourcesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量查询实例详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量查询实例详情
     * @param {string} instanceIds 实例ID。最多同时输入20个实例ID，用英文逗号分隔。
     * @param {string} [xLanguage] 语言。默认英语。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listGaussMySqlInstanceDetailInfo(listGaussMySqlInstanceDetailInfoRequest?: ListGaussMySqlInstanceDetailInfoRequest): Promise<ListGaussMySqlInstanceDetailInfoResponse> {
        const options = ParamCreater().listGaussMySqlInstanceDetailInfo(listGaussMySqlInstanceDetailInfoRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量查询实例详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量查询实例详情
     * @param {string} instanceIds 实例ID，严格匹配UUID规则。最多同时输入20个实例ID，用英文逗号分隔。
     * @param {string} [xLanguage] 请求语言类型。默认en-us。 取值范围： - en-us - zh-cn
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listGaussMySqlInstanceDetailInfoUnifyStatus(listGaussMySqlInstanceDetailInfoUnifyStatusRequest?: ListGaussMySqlInstanceDetailInfoUnifyStatusRequest): Promise<ListGaussMySqlInstanceDetailInfoUnifyStatusResponse> {
        const options = ParamCreater().listGaussMySqlInstanceDetailInfoUnifyStatus(listGaussMySqlInstanceDetailInfoUnifyStatusRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据指定条件查询实例列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询实例列表
     * @param {string} [xLanguage] 语言。
     * @param {string} [id] 实例ID。 “\\*”为系统保留字符，如果id是以“\\*”起始，表示按照“\\*”后面的值模糊匹配，否则，按照id精确匹配查询。不能只传入“\\*”。
     * @param {string} [name] 实例名称。  “\\*”为系统保留字符，如果name是以“\\*”起始，表示按照“\\*”后面的值模糊匹配，否则，按照name精确匹配查询。不能只传入“\\*”。
     * @param {string} [type] 按照实例类型查询。目前仅支持Cluster。
     * @param {string} [datastoreType] 数据库类型，现在只支持gaussdb-mysql。
     * @param {string} [vpcId] 虚拟私有云ID。
     * @param {string} [subnetId] 子网的网络ID信息。
     * @param {string} [privateIp] 读写内网IP。
     * @param {string} [readonlyPrivateIp] 读内网IP。
     * @param {string} [proxyIp] 读写分离IP。
     * @param {number} [offset] 索引位置，偏移量。从第一条数据偏移offset条数据后开始查询，默认为0（偏移0条数据，表示从第一条数据开始查询），必须为数字，不能为负数。
     * @param {number} [limit] 查询记录数。默认为100，不能为负数，最小值为1，最大值为100。
     * @param {string} [tags] 根据实例标签键值对进行查询。 - {key}表示标签键。 - {value}表示标签值。  如果同时使用多个标签键值对进行查询，中间使用逗号分隔开，表示查询同时包含指定标签键值对的实例。key不能重复，key之间是与的关系。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listGaussMySqlInstances(listGaussMySqlInstancesRequest?: ListGaussMySqlInstancesRequest): Promise<ListGaussMySqlInstancesResponse> {
        const options = ParamCreater().listGaussMySqlInstances(listGaussMySqlInstancesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据指定条件查询实例列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询实例列表
     * @param {string} [xLanguage] 请求语言类型。默认en-us。 取值范围： - en-us - zh-cn
     * @param {string} [id] 实例ID。 “\\*”为系统保留字符，如果id是以“\\*”起始，表示按照“\\*”后面的值模糊匹配，否则，按照id精确匹配查询。不能只传入“\\*”。
     * @param {string} [name] 实例名称。  “\\*”为系统保留字符，如果name是以“\\*”起始，表示按照“\\*”后面的值模糊匹配，否则，按照name精确匹配查询。不能只传入“\\*”。
     * @param {string} [type] 按照实例类型查询。目前仅支持Cluster。
     * @param {string} [datastoreType] 数据库类型，现在只支持gaussdb-mysql。
     * @param {string} [vpcId] 虚拟私有云ID。
     * @param {string} [subnetId] 子网的网络ID信息。
     * @param {string} [privateIp] 读写内网IP地址。
     * @param {string} [readonlyPrivateIp] 读内网IP地址。
     * @param {string} [proxyIp] 读写分离IP地址。
     * @param {number} [offset] 索引位置，偏移量。从第一条数据偏移offset条数据后开始查询，默认为0（偏移0条数据，表示从第一条数据开始查询），必须为数字，不能为负数。
     * @param {number} [limit] 查询记录数。默认为100，不能为负数，最小值为1，最大值为100。
     * @param {string} [tags] 根据实例标签键值对进行查询。 - {key}表示标签键。 - {value}表示标签值。  如果同时使用多个标签键值对进行查询，中间使用逗号分隔开，表示查询同时包含指定标签键值对的实例。key不能重复，key之间是与的关系。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listGaussMySqlInstancesUnifyStatus(listGaussMySqlInstancesUnifyStatusRequest?: ListGaussMySqlInstancesUnifyStatusRequest): Promise<ListGaussMySqlInstancesUnifyStatusResponse> {
        const options = ParamCreater().listGaussMySqlInstancesUnifyStatus(listGaussMySqlInstancesUnifyStatusRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取即时任务列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取即时任务列表
     * @param {string} [xLanguage] 语言。
     * @param {string} [status] 任务执行状态。 取值： - 值为“Running”，表示任务正在执行。 - 值为“Completed”，表示任务执行成功。 - 值为“Failed”，表示任务执行失败。 - 值为“Pending”，表示任务未执行。
     * @param {string} [jobName] 任务名称。取值有：  - \&quot;CreateGaussDBforMySQLInstance\&quot;表示创建实例。  - \&quot;RestoreGaussDBforMySQLNewInstance\&quot;表示恢复新实例。  - \&quot;AddGaussDBforMySQLNodes\&quot;表示添加节点。  - \&quot;DeleteGaussDBforMySQLNode\&quot;表示删除节点。  - \&quot;RebootGaussDBforMySQLInstance\&quot;表示重启实例。  - \&quot;ModifyGaussDBforMySQLPort\&quot;表示修改实例端口。  - \&quot;ModifyGaussDBforMySQLSecurityGroup\&quot;表示修改实例安全组。  - \&quot;ResizeGaussDBforMySQLFlavor\&quot;表示实例规格变更。  - \&quot;SwitchoverGaussDBforMySQLMasterNode\&quot;表示只读升主。  - \&quot;GaussDBforMySQLBindEIP\&quot;表示绑定弹性公网IP。  - \&quot;GaussDBforMySQLUnbindEIP\&quot;表示解绑弹性公网IP。  - \&quot;RenameGaussDBforMySQLInstance\&quot;表示修改实例名称。  - \&quot;DeleteGaussDBforMySQLInstance\&quot;表示删除实例集群。  - \&quot;UpgradeGaussDBforMySQLDatabaseVersion\&quot;表示版本升级。  - \&quot;EnlargeGaussDBforMySQLProxy\&quot;表示实例的数据库代理节点扩容。  - \&quot;OpenGaussDBforMySQLProxy\&quot;表示开启实例的数据库代理。  - \&quot;CloseGaussDBforMySQLProxy\&quot;表示关闭实例的数据库代理。  - \&quot;GaussdbforMySQLModifyProxyIp\&quot;表示修改数据库代理ip。  - \&quot;ScaleGaussDBforMySQLProxy\&quot;表示实例的数据库代理节点规格变更。  - \&quot;GaussDBforMySQLModifyInstanceMetricExtend\&quot;表示实例秒级监控。  - \&quot;GaussDBforMySQLModifyInstanceDataVip\&quot;表示修改实例数据Vip。  - \&quot;GaussDBforMySQLSwitchSSL\&quot;表示切换实例SSL开关。  - \&quot;GaussDBforMySQLModifyProxyConsist\&quot;表示修改代理一致性。  - \&quot;GaussDBforMySQLModifyProxyWeight\&quot;表示修改代理权重。
     * @param {string} [jobId] 任务ID。
     * @param {string} [offset] 索引位置，偏移量。从第一条数据偏移offset条数据后开始查询，默认为1，必须为数字，不能为负数。
     * @param {string} [limit] 查询记录数。默认为10，取值为10、20、50。
     * @param {string} [startTime] 起始时间，格式为\&quot;yyyy-mm-ddThh:mm:ssZ\&quot;。 其中，T指某个时间的开始；Z指时区偏移量，例如偏移1个小时显示为+0100。
     * @param {string} [endTime] 结束时间，格式为\&quot;yyyy-mm-ddThh:mm:ssZ\&quot;。 其中，T指某个时间的开始；Z指时区偏移量，例如偏移1个小时显示为+0100。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listImmediateJobs(listImmediateJobsRequest?: ListImmediateJobsRequest): Promise<ListImmediateJobsResponse> {
        const options = ParamCreater().listImmediateJobs(listImmediateJobsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取指定实例的参数信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取指定实例的参数信息
     * @param {string} instanceId 实例ID，严格匹配UUID规则。
     * @param {string} [xLanguage] 请求语言类型。默认en-us。 取值范围： - en-us - zh-cn
     * @param {number} [offset] 索引位置，偏移量。从第一条数据偏移offset条数据后开始查询，默认为0（偏移0条数据，表示从第一条数据开始查询），必须为数字，不能为负数。
     * @param {number} [limit] 查询记录数。默认为100，不能为负数，最小值为1，最大值为100。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listInstanceConfigurations(listInstanceConfigurationsRequest?: ListInstanceConfigurationsRequest): Promise<ListInstanceConfigurationsResponse> {
        const options = ParamCreater().listInstanceConfigurations(listInstanceConfigurationsRequest);

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
     * @param {string} [xLanguage] 语言。
     * @param {number} [offset] 索引位置，偏移量。从第一条数据偏移offset条数据后开始查询，默认为0（偏移0条数据，表示从第一条数据开始查询），必须为数字，不能为负数。
     * @param {number} [limit] 查询记录数。默认为100，不能为负数，最小值为1，最大值为100。
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
     * 获取指定实例的错误日志详情列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取错误日志详情列表
     * @param {string} instanceId 实例ID。
     * @param {LtsLogErrorQueryRequest} listLtsErrorLogDetailsRequestBody 查询错误日志请求体。
     * @param {string} [xLanguage] 语言。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listLtsErrorLogDetails(listLtsErrorLogDetailsRequest?: ListLtsErrorLogDetailsRequest): Promise<ListLtsErrorLogDetailsResponse> {
        const options = ParamCreater().listLtsErrorLogDetails(listLtsErrorLogDetailsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取指定实例的慢日志详情列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取慢日志详情列表
     * @param {string} instanceId 实例ID。
     * @param {LtsLogSlowQueryRequest} listLtsSlowlogDetailsRequestBody 查询日志请求体。
     * @param {string} [xLanguage] 语言。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listLtsSlowlogDetails(listLtsSlowlogDetailsRequest?: ListLtsSlowlogDetailsRequest): Promise<ListLtsSlowlogDetailsResponse> {
        const options = ParamCreater().listLtsSlowlogDetails(listLtsSlowlogDetailsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询参数修改历史。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询参数修改历史
     * @param {string} configurationId 参数组ID。  通过调用[查询实例详情信息](https://support.huaweicloud.com/api-taurusdb/ShowGaussMySqlInstanceInfo.html)接口获取。  请求响应成功后在响应消息体中包含的“configuration_id”的值即为configuration_id值。
     * @param {string} [xLanguage] 请求语言类型。默认en-us。 取值范围： - en-us - zh-cn
     * @param {number} [offset] 索引位置，偏移量。从第一条数据偏移offset条数据后开始查询，默认为0（偏移0条数据，表示从第一条数据开始查询），必须为数字，不能为负数。
     * @param {number} [limit] 查询记录数。默认为100，不能为负数，最小值为1，最大值为100。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listModifyHistory(listModifyHistoryRequest?: ListModifyHistoryRequest): Promise<ListModifyHistoryResponse> {
        const options = ParamCreater().listModifyHistory(listModifyHistoryRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询参数模板应用记录。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询参数模板应用记录。
     * @param {string} configId 参数组ID。
     * @param {number} [limit] 查询记录数。默认为10，不能为负数，最小值为1，最大值为100。
     * @param {number} [offset] 索引位置，偏移量。从第一条数据偏移offset条数据后开始查询，默认为0（偏移0条数据，表示从第一条数据开始查询），必须为数字，不能为负数。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listParamsTemplateApplyHistory(listParamsTemplateApplyHistoryRequest?: ListParamsTemplateApplyHistoryRequest): Promise<ListParamsTemplateApplyHistoryResponse> {
        const options = ParamCreater().listParamsTemplateApplyHistory(listParamsTemplateApplyHistoryRequest);

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
     * @param {string} [xLanguage] 语言。
     * @param {number} [offset] 索引位置，偏移量。从第一条数据偏移offset条数据后开始查询，默认为0（偏移0条数据，表示从第一条数据开始查询），必须为数字，不能为负数。
     * @param {number} [limit] 查询记录数。默认为100，不能为负数，最小值为1，最大值为100。
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
     * 查询回收站实例信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询回收站实例信息
     * @param {string} [xLanguage] 语言。
     * @param {number} [limit] 查询记录数。默认为10，不能为负数，最小值为1，最大值为100。
     * @param {number} [offset] 索引位置，偏移量。从第一条数据偏移offset条数据后开始查询，默认为0（偏移0条数据，表示从第一条数据开始查询），必须为数字，不能为负数。
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
     * 获取定时任务列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取定时任务列表
     * @param {string} [xLanguage] 语言。
     * @param {string} [offset] 索引位置，偏移量。从第一条数据偏移offset条数据后开始查询，默认为1，必须为数字，不能为负数。
     * @param {string} [limit] 查询记录数。默认为10
     * @param {string} [status] 任务执行状态。 取值： - 值为“Running”，表示任务正在执行。 - 值为“Completed”，表示任务执行成功。 - 值为“Failed”，表示任务执行失败。 - 值为“Pending”，表示任务未执行。
     * @param {string} [startTime] 起始时间，格式为\&quot;yyyy-mm-ddThh:mm:ssZ\&quot;。 其中，T指某个时间的开始；Z指时区偏移量，例如偏移1个小时显示为+0100。 说明：创建时返回值为空，数据库实例创建成功后该值不为空。
     * @param {string} [endTime] 结束时间，格式为\&quot;yyyy-mm-ddThh:mm:ssZ\&quot;。 其中，T指某个时间的开始；Z指时区偏移量，例如偏移1个小时显示为+0100。 说明：创建时返回值为空，数据库实例创建成功后该值不为空。
     * @param {string} [jobId] 任务ID。
     * @param {string} [jobName] 任务调度类型。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listScheduleJobs(listScheduleJobsRequest?: ListScheduleJobsRequest): Promise<ListScheduleJobsResponse> {
        const options = ParamCreater().listScheduleJobs(listScheduleJobsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 分页查询TaurusDB节点中的用户会话线程，对应于show processlist命令，返回结果不含内部会话线程。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询节点用户会话线程
     * @param {string} instanceId **参数解释**：  实例ID，此参数是实例的唯一标识。  **约束限制**：  不涉及。  **取值范围**：  只能由英文字母、数字组成，后缀为in07，长度为36个字符。  **默认取值**：  不涉及。
     * @param {string} nodeId **参数解释**：  节点ID，此参数是节点的唯一标识。  **约束限制**：  不涉及。  **取值范围**：  只能由英文字母、数字组成，后缀为no07，长度为36个字符。  **默认取值**：  不涉及。
     * @param {'zh-cn' | 'en-us'} [xLanguage] **参数解释**：  请求语言类型。  **约束限制**：  不涉及。  **取值范围**：  - en-us - zh-cn  **默认值**：  en-us
     * @param {number} [offset] **参数解释**：  索引位置，偏移量。从第一条数据偏移offset条数据后开始查询。  **约束限制**：  必须为整数，不能为负数。  **取值范围**：  ≥0  **默认取值**：  0
     * @param {number} [limit] **参数解释**：  查询记录数。  **约束限制**：  必须为整数，不能为负数。  **取值范围**：  1-100  **默认取值**：  100
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listTaurusDbNodeProcesses(listTaurusDbNodeProcessesRequest?: ListTaurusDbNodeProcessesRequest): Promise<ListTaurusDbNodeProcessesResponse> {
        const options = ParamCreater().listTaurusDbNodeProcesses(listTaurusDbNodeProcessesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改存储空间自动扩容策略。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改存储空间自动扩容策略。
     * @param {string} instanceId **参数解释**：  实例ID，此参数是实例的唯一标识。  **约束限制**：  不涉及。  **取值范围**：  只能由英文字母、数字组成，后缀为in07，长度为36个字符。  **默认取值**：  不涉及。
     * @param {ModifyAutoExpandPolicyReq} modifyAutoExpandPolicyRequestBody **参数解释**：  自动扩容策略开关。 
     * @param {string} [xLanguage] **参数解释**：              请求语言类型。  **约束限制**：  不涉及。  **取值范围**： - en-us - zh-cn  **默认值**：  en-us。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public modifyAutoExpandPolicy(modifyAutoExpandPolicyRequest?: ModifyAutoExpandPolicyRequest): Promise<ModifyAutoExpandPolicyResponse> {
        const options = ParamCreater().modifyAutoExpandPolicy(modifyAutoExpandPolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 打开或关闭备份加密。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 打开或关闭备份加密
     * @param {string} instanceId 租户在某一project下的实例ID。
     * @param {BackupEncryptRequest} modifyBackupEncryptStatusRequestBody 打开或关闭备份加密的请求体。
     * @param {string} [xLanguage] 语言。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public modifyBackupEncryptStatus(modifyBackupEncryptStatusRequest?: ModifyBackupEncryptStatusRequest): Promise<ModifyBackupEncryptStatusResponse> {
        const options = ParamCreater().modifyBackupEncryptStatus(modifyBackupEncryptStatusRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 设置读写分离路由模式。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 设置读写分离路由模式
     * @param {string} instanceId 实例ID，严格匹配UUID规则。
     * @param {string} proxyId 数据库代理ID，严格匹配UUID规则。
     * @param {ModifyGaussMySqlProxyRouteModeRequestBody} modifyGaussMySqlProxyRouteModeRequestBody 请求体
     * @param {string} [xLanguage] 语言。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public modifyGaussMySqlProxyRouteMode(modifyGaussMySqlProxyRouteModeRequest?: ModifyGaussMySqlProxyRouteModeRequest): Promise<ModifyGaussMySqlProxyRouteModeResponse> {
        const options = ParamCreater().modifyGaussMySqlProxyRouteMode(modifyGaussMySqlProxyRouteModeRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改内网域名。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改内网域名
     * @param {string} instanceId 实例ID。
     * @param {ModifyDnsNameReq} modifyGaussMysqlDnsRequestBody 请求体。
     * @param {string} [xLanguage] 语言。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public modifyGaussMysqlDns(modifyGaussMysqlDnsRequest?: ModifyGaussMysqlDnsRequest): Promise<ModifyGaussMysqlDnsResponse> {
        const options = ParamCreater().modifyGaussMysqlDns(modifyGaussMysqlDnsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改节点故障倒换优先级。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改节点故障倒换优先级。
     * @param {string} instanceId 实例ID。
     * @param {string} nodeId 节点ID。
     * @param {ModifyNodePriorityRequestBody} modifyNodePriorityRequestBody 节点故障倒换优先级
     * @param {string} [xLanguage] 语言。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public modifyNodePriority(modifyNodePriorityRequest?: ModifyNodePriorityRequest): Promise<ModifyNodePriorityResponse> {
        const options = ParamCreater().modifyNodePriority(modifyNodePriorityRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量修改节点名称.
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量修改节点名称.
     * @param {string} instanceId 实例ID。
     * @param {RenameInstanceNodeRequestBody} renameInstanceNodeRequestBody 节点及名称信息。
     * @param {string} [xLanguage] 语言。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public renameInstanceNode(renameInstanceNodeRequest?: RenameInstanceNodeRequest): Promise<RenameInstanceNodeResponse> {
        const options = ParamCreater().renameInstanceNode(renameInstanceNodeRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改云数据库 TaurusDB实例数据库用户密码。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改数据库用户密码
     * @param {string} instanceId 实例ID。
     * @param {ResetDatabasePasswordRequest} resetDatabasePasswordRequest 请求体。
     * @param {string} [xLanguage] 语言。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public resetGaussMySqlDatabasePassword(resetGaussMySqlDatabasePasswordRequest?: ResetGaussMySqlDatabasePasswordRequest): Promise<ResetGaussMySqlDatabasePasswordResponse> {
        const options = ParamCreater().resetGaussMySqlDatabasePassword(resetGaussMySqlDatabasePasswordRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 重置数据库密码。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 重置数据库密码
     * @param {string} instanceId 实例ID，严格匹配UUID规则。
     * @param {MysqlResetPasswordRequest} mysqlResetPasswordRequest 请求体
     * @param {string} [xLanguage] 语言。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public resetGaussMySqlPassword(resetGaussMySqlPasswordRequest?: ResetGaussMySqlPasswordRequest): Promise<ResetGaussMySqlPasswordResponse> {
        const options = ParamCreater().resetGaussMySqlPassword(resetGaussMySqlPasswordRequest);

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
     * @param {string} instanceId 租户在某一project下的实例ID。
     * @param {TaurusRestartInstanceRequest} taurusRestartInstanceRequest 请求体。
     * @param {string} [xLanguage] 语言。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public restartGaussMySqlInstance(restartGaussMySqlInstanceRequest?: RestartGaussMySqlInstanceRequest): Promise<RestartGaussMySqlInstanceResponse> {
        const options = ParamCreater().restartGaussMySqlInstance(restartGaussMySqlInstanceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 节点重启。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 节点重启
     * @param {string} instanceId 实例ID。
     * @param {string} nodeId 节点ID。
     * @param {string} [xLanguage] 语言。
     * @param {RestartNodeRequest} [restartNodeRequest] 请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public restartGaussMySqlNode(restartGaussMySqlNodeRequest?: RestartGaussMySqlNodeRequest): Promise<RestartGaussMySqlNodeResponse> {
        const options = ParamCreater().restartGaussMySqlNode(restartGaussMySqlNodeRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 重启数据库代理.
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 重启数据库代理.
     * @param {string} instanceId 实例ID。
     * @param {string} proxyId 数据库代理ID。
     * @param {string} [xLanguage] 语言。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public restartProxyInstance(restartProxyInstanceRequest?: RestartProxyInstanceRequest): Promise<RestartProxyInstanceResponse> {
        const options = ParamCreater().restartProxyInstance(restartProxyInstanceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 备份恢复到当前实例或已有实例。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 备份恢复到当前实例或已有实例
     * @param {string} [xLanguage] 语言。
     * @param {RestoreRequest} [restoreRequest] 请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public restoreOldInstance(restoreOldInstanceRequest?: RestoreOldInstanceRequest): Promise<RestoreOldInstanceResponse> {
        const options = ParamCreater().restoreOldInstance(restoreOldInstanceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 设置读写分离权重。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 设置读写分离权重
     * @param {string} instanceId 实例ID，严格匹配UUID规则。
     * @param {string} proxyId 数据库代理ID，严格匹配UUID规则。
     * @param {TaurusModifyProxyWeightRequest} taurusModifyProxyWeightRequest 请求体
     * @param {string} [xLanguage] 语言。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public setGaussMySqlProxyWeight(setGaussMySqlProxyWeightRequest?: SetGaussMySqlProxyWeightRequest): Promise<SetGaussMySqlProxyWeightResponse> {
        const options = ParamCreater().setGaussMySqlProxyWeight(setGaussMySqlProxyWeightRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 设置指定企业项目的资源配额。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 设置租户基于企业项目的资源配额
     * @param {string} [xLanguage] 语言。
     * @param {SetQuotasRequestBody} [setQuotasRequest] 请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public setGaussMySqlQuotas(setGaussMySqlQuotasRequest?: SetGaussMySqlQuotasRequest): Promise<SetGaussMySqlQuotasResponse> {
        const options = ParamCreater().setGaussMySqlQuotas(setGaussMySqlQuotasRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 设置回收站策略
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 设置回收站策略
     * @param {SetRecyclePolicyRequestBody} setRecyclePolicyRequestBody 回收站策略
     * @param {string} [xLanguage] 语言。
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
     * 设置SQL限流规则。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 设置SQL限流规则
     * @param {string} instanceId 实例ID。
     * @param {OperateSqlFilterRuleReq} operateSqlFilterRuleReq 请求体
     * @param {string} [xLanguage] 语言。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public setSqlFilterRule(setSqlFilterRuleRequest?: SetSqlFilterRuleRequest): Promise<SetSqlFilterRuleResponse> {
        const options = ParamCreater().setSqlFilterRule(setSqlFilterRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询全量SQL开关状态。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询全量SQL开关状态
     * @param {string} instanceId 实例ID。
     * @param {string} [xLanguage] 语言。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showAuditLog(showAuditLogRequest?: ShowAuditLogRequest): Promise<ShowAuditLogResponse> {
        const options = ParamCreater().showAuditLog(showAuditLogRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询存储空间自动扩容策略。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询存储空间自动扩容策略。
     * @param {string} instanceId **参数解释**：  实例ID，此参数是实例的唯一标识。  **约束限制**：  不涉及。  **取值范围**：  只能由英文字母、数字组成，后缀为in07，长度为36个字符。  **默认取值**：  不涉及。
     * @param {string} [xLanguage] **参数解释**：              请求语言类型。  **约束限制**：  不涉及。  **取值范围**： - en-us - zh-cn  **默认值**：  en-us。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showAutoExpandPolicy(showAutoExpandPolicyRequest?: ShowAutoExpandPolicyRequest): Promise<ShowAutoExpandPolicyResponse> {
        const options = ParamCreater().showAutoExpandPolicy(showAutoExpandPolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询自动变配历史记录.
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询自动变配历史记录.
     * @param {string} instanceId 实例ID。
     * @param {string} [xLanguage] 语言。
     * @param {string} [limit] 查询记录数。默认为20。
     * @param {string} [offset] 索引位置，偏移量。从第一条数据偏移offset条数据后开始查询，默认为0（偏移0条数据，表示从第一条数据开始查询），必须为数字，不能为负数。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showAutoScalingHistory(showAutoScalingHistoryRequest?: ShowAutoScalingHistoryRequest): Promise<ShowAutoScalingHistoryResponse> {
        const options = ParamCreater().showAutoScalingHistory(showAutoScalingHistoryRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询自动变配。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询自动变配
     * @param {string} instanceId 实例ID，严格匹配UUID规则。
     * @param {string} [xLanguage] 请求语言类型。默认en-us。 取值范围： - en-us - zh-cn
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showAutoScalingPolicy(showAutoScalingPolicyRequest?: ShowAutoScalingPolicyRequest): Promise<ShowAutoScalingPolicyResponse> {
        const options = ParamCreater().showAutoScalingPolicy(showAutoScalingPolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询实例的可恢复时间段。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询可恢复时间段
     * @param {string} instanceId 租户在某一project下的实例ID。
     * @param {string} [xLanguage] 语言。
     * @param {string} [date] 所需查询的日志，为yyyy-mm-dd字符串格式，时区为UTC。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showBackupRestoreTime(showBackupRestoreTimeRequest?: ShowBackupRestoreTimeRequest): Promise<ShowBackupRestoreTimeResponse> {
        const options = ParamCreater().showBackupRestoreTime(showBackupRestoreTimeRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询专属资源信息详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询专属资源信息详情
     * @param {string} dedicatedResourceId 专属资源池ID。
     * @param {string} [xLanguage] 语言。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showDedicatedResourceInfo(showDedicatedResourceInfoRequest?: ShowDedicatedResourceInfoRequest): Promise<ShowDedicatedResourceInfoResponse> {
        const options = ParamCreater().showDedicatedResourceInfo(showDedicatedResourceInfoRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询全量备份列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询全量备份列表
     * @param {string} [xLanguage] 请求语言类型。默认en-us。 取值范围： - en-us - zh-cn
     * @param {string} [instanceId] 实例ID，严格匹配UUID规则。
     * @param {string} [backupId] 备份ID。
     * @param {string} [backupType] 备份类型。  取值范围： - auto：自动全量备份。 - manual：手动全量备份。
     * @param {string} [offset] 索引位置，偏移量。从第一条数据偏移offset条数据后开始查询，默认为0（偏移0条数据，表示从第一条数据开始查询），必须为数字，不能为负数。
     * @param {string} [limit] 查询记录数。默认为100，不能为负数，最小值为1，最大值为100。
     * @param {string} [beginTime] 查询开始时间，格式为“yyyy-mm-ddThh:mm:ssZ”。  其中，T指某个时间的开始；Z指时区偏移量，例如偏移1个小时显示为+0100。
     * @param {string} [endTime] 查询结束时间，格式为“yyyy-mm-ddThh:mm:ssZ”，且大于查询开始时间。  其中，T指某个时间的开始；Z指时区偏移量，例如偏移1个小时显示为+0100。
     * @param {string} [name] 备份名称。
     * @param {string} [instanceName] 实例名称。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showGaussMySqlBackupList(showGaussMySqlBackupListRequest?: ShowGaussMySqlBackupListRequest): Promise<ShowGaussMySqlBackupListResponse> {
        const options = ParamCreater().showGaussMySqlBackupList(showGaussMySqlBackupListRequest);

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
     * @param {string} instanceId 实例ID，严格匹配UUID规则。
     * @param {string} [xLanguage] 语言。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showGaussMySqlBackupPolicy(showGaussMySqlBackupPolicyRequest?: ShowGaussMySqlBackupPolicyRequest): Promise<ShowGaussMySqlBackupPolicyResponse> {
        const options = ParamCreater().showGaussMySqlBackupPolicy(showGaussMySqlBackupPolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取指定参数模板的参数信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取参数模板详情
     * @param {string} configurationId 参数模板ID。
     * @param {string} [xLanguage] 语言。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showGaussMySqlConfiguration(showGaussMySqlConfigurationRequest?: ShowGaussMySqlConfigurationRequest): Promise<ShowGaussMySqlConfigurationResponse> {
        const options = ParamCreater().showGaussMySqlConfiguration(showGaussMySqlConfigurationRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取指定数据库引擎对应的数据库版本信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询数据库引擎的版本
     * @param {string} databaseName 数据库引擎。支持的引擎如下，不区分大小写：gaussdb-mysql。
     * @param {string} [xLanguage] 语言。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showGaussMySqlEngineVersion(showGaussMySqlEngineVersionRequest?: ShowGaussMySqlEngineVersionRequest): Promise<ShowGaussMySqlEngineVersionResponse> {
        const options = ParamCreater().showGaussMySqlEngineVersion(showGaussMySqlEngineVersionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取指定数据库引擎版本对应的规格信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询数据库规格
     * @param {string} databaseName 数据库引擎名称。
     * @param {string} availabilityZoneMode 规格的可用区模式，现在仅支持\&quot;single\&quot;、\&quot;multi\&quot;，不区分大小写。
     * @param {string} [xLanguage] 语言。
     * @param {string} [versionName] 数据库版本号，目前仅支持兼容MySQL 8.0。
     * @param {string} [specCode] 规格编码。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showGaussMySqlFlavors(showGaussMySqlFlavorsRequest?: ShowGaussMySqlFlavorsRequest): Promise<ShowGaussMySqlFlavorsResponse> {
        const options = ParamCreater().showGaussMySqlFlavors(showGaussMySqlFlavorsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询增量备份列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询增量备份列表
     * @param {string} instanceId 实例ID，严格匹配UUID规则。
     * @param {string} [xLanguage] 请求语言类型。默认en-us。 取值范围： - en-us - zh-cn
     * @param {string} [offset] 索引位置，偏移量。从第一条数据偏移offset条数据后开始查询，默认为0（偏移0条数据，表示从第一条数据开始查询），必须为数字，不能为负数。
     * @param {string} [limit] 查询记录数。默认为10，可取范围：10、20、50。
     * @param {string} [beginTime] 查询开始时间，格式为“yyyy-mm-ddThh:mm:ssZ”。  其中，T指某个时间的开始；Z指时区偏移量，例如偏移1个小时显示为+0100。  “begin_time”有值时，“end_time”必选。
     * @param {string} [endTime] 查询结束时间，格式为“yyyy-mm-ddThh:mm:ssZ”，且大于查询开始时间。  其中，T指某个时间的开始；Z指时区偏移量，例如偏移1个小时显示为+0100。  “end_time”有值时，“begin_time”必选。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showGaussMySqlIncrementalBackupList(showGaussMySqlIncrementalBackupListRequest?: ShowGaussMySqlIncrementalBackupListRequest): Promise<ShowGaussMySqlIncrementalBackupListResponse> {
        const options = ParamCreater().showGaussMySqlIncrementalBackupList(showGaussMySqlIncrementalBackupListRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询实例详情信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询实例详情信息
     * @param {string} instanceId 实例ID。
     * @param {string} [xLanguage] 语言。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showGaussMySqlInstanceInfo(showGaussMySqlInstanceInfoRequest?: ShowGaussMySqlInstanceInfoRequest): Promise<ShowGaussMySqlInstanceInfoResponse> {
        const options = ParamCreater().showGaussMySqlInstanceInfo(showGaussMySqlInstanceInfoRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询实例详情信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询实例详情信息
     * @param {string} instanceId 实例ID，严格匹配UUID规则。
     * @param {string} [xLanguage] 请求语言类型。默认en-us。 取值范围： - en-us - zh-cn
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showGaussMySqlInstanceInfoUnifyStatus(showGaussMySqlInstanceInfoUnifyStatusRequest?: ShowGaussMySqlInstanceInfoUnifyStatusRequest): Promise<ShowGaussMySqlInstanceInfoUnifyStatusResponse> {
        const options = ParamCreater().showGaussMySqlInstanceInfoUnifyStatus(showGaussMySqlInstanceInfoUnifyStatusRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取TaurusDB任务中心指定ID的任务信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取指定ID的任务信息
     * @param {string} id 任务ID。
     * @param {string} [xLanguage] 语言。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showGaussMySqlJobInfo(showGaussMySqlJobInfoRequest?: ShowGaussMySqlJobInfoRequest): Promise<ShowGaussMySqlJobInfoResponse> {
        const options = ParamCreater().showGaussMySqlJobInfo(showGaussMySqlJobInfoRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取指定租户的资源配额。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询租户的实例配额
     * @param {string} [xLanguage] 语言。
     * @param {'instance'} [type] 功能说明：根据type过滤查询指定类型的配额。  取值范围：instance
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showGaussMySqlProjectQuotas(showGaussMySqlProjectQuotasRequest?: ShowGaussMySqlProjectQuotasRequest): Promise<ShowGaussMySqlProjectQuotasResponse> {
        const options = ParamCreater().showGaussMySqlProjectQuotas(showGaussMySqlProjectQuotasRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询数据库代理规格信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询数据库代理规格信息
     * @param {string} instanceId 实例ID。
     * @param {string} [xLanguage] 语言。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showGaussMySqlProxyFlavors(showGaussMySqlProxyFlavorsRequest?: ShowGaussMySqlProxyFlavorsRequest): Promise<ShowGaussMySqlProxyFlavorsResponse> {
        const options = ParamCreater().showGaussMySqlProxyFlavors(showGaussMySqlProxyFlavorsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询数据库代理信息列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询数据库代理信息列表
     * @param {string} instanceId 实例ID。
     * @param {string} [xLanguage] 语言。
     * @param {number} [offset] 索引位置，偏移量。从第一条数据偏移offset条数据后开始查询，默认为0（偏移0条数据，表示从第一条数据开始查询），必须为数字，不能为负数。
     * @param {number} [limit] 查询记录数。默认为10，不能为负数，最小值为1，最大值为100。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showGaussMySqlProxyList(showGaussMySqlProxyListRequest?: ShowGaussMySqlProxyListRequest): Promise<ShowGaussMySqlProxyListResponse> {
        const options = ParamCreater().showGaussMySqlProxyList(showGaussMySqlProxyListRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取指定企业项目的资源配额。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询租户基于企业项目的资源配额
     * @param {string} [xLanguage] 语言。
     * @param {string} [offset] 索引位置，偏移量。从第一条数据偏移offset条数据后开始查询，默认为0（偏移0条数据，表示从第一条数据开始查询），必须为数字，不能为负数。  取值范围：0 - 10000
     * @param {string} [limit] 查询记录数。默认为10，不能为负数，最小值为1，最大值为100。
     * @param {string} [enterpriseProjectName] 企业项目名称。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showGaussMySqlQuotas(showGaussMySqlQuotasRequest?: ShowGaussMySqlQuotasRequest): Promise<ShowGaussMySqlQuotasResponse> {
        const options = ParamCreater().showGaussMySqlQuotas(showGaussMySqlQuotasRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询内核版本信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询内核版本信息
     * @param {string} instanceId 实例ID，严格匹配UUID规则。
     * @param {string} [xLanguage] 请求语言类型。默认en-us。 取值范围： - en-us - zh-cn
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showInstanceDatabaseVersion(showInstanceDatabaseVersionRequest?: ShowInstanceDatabaseVersionRequest): Promise<ShowInstanceDatabaseVersionResponse> {
        const options = ParamCreater().showInstanceDatabaseVersion(showInstanceDatabaseVersionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询弹性公网IP。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询弹性公网IP。
     * @param {string} instanceId 实例ID。
     * @param {string} [xLanguage] 语言。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showInstanceEip(showInstanceEipRequest?: ShowInstanceEipRequest): Promise<ShowInstanceEipResponse> {
        const options = ParamCreater().showInstanceEip(showInstanceEipRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询实例秒级监控信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询实例秒级监控
     * @param {string} instanceId 实例ID。
     * @param {string} [xLanguage] 语言。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showInstanceMonitorExtend(showInstanceMonitorExtendRequest?: ShowInstanceMonitorExtendRequest): Promise<ShowInstanceMonitorExtendResponse> {
        const options = ParamCreater().showInstanceMonitorExtend(showInstanceMonitorExtendRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取各指标的异常实例数。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取各指标的异常实例数
     * @param {string} [xLanguage] 请求语言类型。默认en-us。 取值范围： - en-us - zh-cn
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showIntelligentDiagnosisAbnormalCountOfInstances(showIntelligentDiagnosisAbnormalCountOfInstancesRequest?: ShowIntelligentDiagnosisAbnormalCountOfInstancesRequest): Promise<ShowIntelligentDiagnosisAbnormalCountOfInstancesResponse> {
        const options = ParamCreater().showIntelligentDiagnosisAbnormalCountOfInstances(showIntelligentDiagnosisAbnormalCountOfInstancesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取某个指标的异常实例信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取某个指标的异常实例信息
     * @param {string} metricName 指标名。
     * @param {number} offset 索引位置，偏移量。从第一条数据偏移offset条数据后开始查询，默认为0（偏移0条数据，表示从第一条数据开始查询），必须为数字，不能为负数。
     * @param {number} limit 查询记录数。默认为100，不能为负数，最小值为1，最大值为100。
     * @param {string} [xLanguage] 请求语言类型。默认en-us。 取值范围： - en-us - zh-cn
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showIntelligentDiagnosisInstanceInfosPerMetric(showIntelligentDiagnosisInstanceInfosPerMetricRequest?: ShowIntelligentDiagnosisInstanceInfosPerMetricRequest): Promise<ShowIntelligentDiagnosisInstanceInfosPerMetricResponse> {
        const options = ParamCreater().showIntelligentDiagnosisInstanceInfosPerMetric(showIntelligentDiagnosisInstanceInfosPerMetricRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询实例LTS日志配置列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询实例LTS日志配置列表
     * @param {string} [xLanguage] 语言。
     * @param {string} [enterpriseProjectId] 企业项目ID。
     * @param {string} [instanceId] 实例ID。
     * @param {string} [instanceName] 实例名称
     * @param {string} [limit] 查询记录数，默认值为10，最小为1，最大为100。
     * @param {string} [offset] 索引位置，偏移量。从第一条数据偏移offset条数据后开始查询，默认为0（偏移0条数据，表示从第一条数据开始查询）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showLtsConfigs(showLtsConfigsRequest?: ShowLtsConfigsRequest): Promise<ShowLtsConfigsResponse> {
        const options = ParamCreater().showLtsConfigs(showLtsConfigsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询多租特性开关状态。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询多租特性开关状态
     * @param {string} instanceId 实例ID，严格匹配UUID规则。
     * @param {string} [xLanguage] 请求语言类型。默认en-us。 取值范围： - en-us - zh-cn
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showMultiTenant(showMultiTenantRequest?: ShowMultiTenantRequest): Promise<ShowMultiTenantResponse> {
        const options = ParamCreater().showMultiTenant(showMultiTenantRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询数据库代理内核参数。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询数据库代理内核参数。
     * @param {string} instanceId 实例ID。
     * @param {string} proxyId 数据库代理ID。
     * @param {string} [xLanguage] 语言。
     * @param {number} [limit] 查询记录数。默认为10，不能为负数，最小值为1，最大值为100。
     * @param {number} [offset] 索引位置，偏移量。从第一条数据偏移offset条数据后开始查询，默认为0（偏移0条数据，表示从第一条数据开始查询），必须为数字，不能为负数。
     * @param {string} [name] 参数名称，为空则全量查询。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showProxyConfigurations(showProxyConfigurationsRequest?: ShowProxyConfigurationsRequest): Promise<ShowProxyConfigurationsResponse> {
        const options = ParamCreater().showProxyConfigurations(showProxyConfigurationsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询代理实例访问控制
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询代理实例访问控制
     * @param {string} instanceId 实例ID，严格匹配UUID规则。
     * @param {string} proxyId 数据库代理ID，严格匹配UUID规则。
     * @param {string} [xLanguage] 语言。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showProxyIpgroup(showProxyIpgroupRequest?: ShowProxyIpgroupRequest): Promise<ShowProxyIpgroupResponse> {
        const options = ParamCreater().showProxyIpgroup(showProxyIpgroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询代理实例小版本
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询代理实例小版本
     * @param {string} instanceId 实例ID，严格匹配UUID规则。
     * @param {string} engineName engine
     * @param {string} proxyId 数据库代理ID，严格匹配UUID规则。
     * @param {string} [xLanguage] 语言。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showProxyVersion(showProxyVersionRequest?: ShowProxyVersionRequest): Promise<ShowProxyVersionResponse> {
        const options = ParamCreater().showProxyVersion(showProxyVersionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询回收站策略
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询回收站策略
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
     * 查询表级时间点恢复可选表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询表级时间点恢复可选表
     * @param {string} instanceId **参数解释**：  实例ID，此参数是实例的唯一标识。  **约束限制**：  不涉及。  **取值范围**：  只能由英文字母、数字组成，后缀为in07，长度为36个字符。  **默认取值**：  不涉及。
     * @param {string} restoreTime **参数解释**：              备份时间点。  **约束限制**：  格式为UNIX时间戳，单位是毫秒，时区为UTC标准时区。传参时需要将对应时区的时间转为标准时区对应的时间戳，比如，北京时区的时间点需要-8h后再转为时间戳。  **取值范围**：              通过[查询可恢复时间段](https://support.huaweicloud.com/api-taurusdb/ShowBackupRestoreTime.html)获取。  **默认取值**：  不涉及。
     * @param {string} lastTableInfo **参数解释**：              是否是最新库表。  **约束限制**：  不涉及。  **取值范围**：  - true：是最新库表。 - false：是恢复时间点库表。  **默认取值**：  不涉及。
     * @param {string} [xLanguage] **参数解释**：              请求语言类型。  **约束限制**：  不涉及。  **取值范围**： - en-us。 - zh-cn。  **默认值**：  en-us。
     * @param {string} [databaseName] **参数解释**：   数据库名称，模糊匹配。  **约束限制**：  不涉及。  **取值范围**：  不涉及。  **默认取值**：  不涉及。
     * @param {string} [tableName] **参数解释**：   表名称，模糊匹配。  **约束限制**：  不涉及。  **取值范围**：  不涉及。  **默认取值**：  不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showRestoreAvailableTables(showRestoreAvailableTablesRequest?: ShowRestoreAvailableTablesRequest): Promise<ShowRestoreAvailableTablesResponse> {
        const options = ParamCreater().showRestoreAvailableTables(showRestoreAvailableTablesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询表级时间点恢复可选表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询表级时间点恢复可选表
     * @param {string} instanceId 实例ID，严格匹配UUID规则。
     * @param {string} restoreTime 备份时间点，时间戳格式。  通过[查询可恢复时间段](https://support.huaweicloud.com/api-taurusdb/ShowBackupRestoreTime.html)获取。
     * @param {string} lastTableInfo 是否是最新库表。 - true：是最新库表。 - false：是恢复时间点库表。
     * @param {string} [xLanguage] 请求语言类型。默认en-us。 取值范围： - en-us - zh-cn
     * @param {string} [databaseName] 数据库名称，模糊匹配。
     * @param {string} [tableName] 表名称，模糊匹配。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showRestoreTables(showRestoreTablesRequest?: ShowRestoreTablesRequest): Promise<ShowRestoreTablesResponse> {
        const options = ParamCreater().showRestoreTables(showRestoreTablesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询慢日志统计信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询慢日志统计信息
     * @param {string} instanceId 实例ID，严格匹配UUID规则。
     * @param {ShowSlowLogStatisticsRequestBody} showSlowLogStatisticsRequestBody 查询慢日志统计信息请求体。
     * @param {string} [xLanguage] 请求语言类型。默认en-us。 取值范围： - en-us - zh-cn
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showSlowLogStatistics(showSlowLogStatisticsRequest?: ShowSlowLogStatisticsRequest): Promise<ShowSlowLogStatisticsResponse> {
        const options = ParamCreater().showSlowLogStatistics(showSlowLogStatisticsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询慢日志脱敏状态
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询慢日志脱敏状态
     * @param {string} instanceId 实例ID。
     * @param {string} [xLanguage] 语言。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showSlowlogSensitiveStatus(showSlowlogSensitiveStatusRequest?: ShowSlowlogSensitiveStatusRequest): Promise<ShowSlowlogSensitiveStatusResponse> {
        const options = ParamCreater().showSlowlogSensitiveStatus(showSlowlogSensitiveStatusRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询SQL限流开关状态。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询SQL限流开关状态
     * @param {string} instanceId 实例ID。
     * @param {string} [xLanguage] 语言。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showSqlFilterControl(showSqlFilterControlRequest?: ShowSqlFilterControlRequest): Promise<ShowSqlFilterControlResponse> {
        const options = ParamCreater().showSqlFilterControl(showSqlFilterControlRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询SQL限流规则。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询SQL限流规则
     * @param {string} instanceId 实例ID。
     * @param {string} nodeId 节点ID。
     * @param {string} [xLanguage] 语言。
     * @param {string} [sqlType] SQL限流类型，取值为SELECT、UPDATE、DELETE，不区分大小写；若不传则默认查询所有类型的限流规则。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showSqlFilterRule(showSqlFilterRuleRequest?: ShowSqlFilterRuleRequest): Promise<ShowSqlFilterRuleResponse> {
        const options = ParamCreater().showSqlFilterRule(showSqlFilterRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 缩容数据库代理节点的数量。
     * DeC专属云账号暂不支持数据库代理。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 减少数据库代理节点的数量
     * @param {string} instanceId 实例ID，严格匹配UUID规则。
     * @param {string} proxyId 数据库代理ID，严格匹配UUID规则。
     * @param {ShrinkGaussMySqlProxyRequestBody} shrinkGaussMySqlProxyRequestBody 请求体
     * @param {string} [xLanguage] 请求语言类型。默认en-us。 取值范围： - en-us - zh-cn
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public shrinkGaussMySqlProxy(shrinkGaussMySqlProxyRequest?: ShrinkGaussMySqlProxyRequest): Promise<ShrinkGaussMySqlProxyResponse> {
        const options = ParamCreater().shrinkGaussMySqlProxy(shrinkGaussMySqlProxyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 开启或关闭访问控制。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 开启或关闭访问控制
     * @param {string} instanceId 实例ID，严格匹配UUID规则。
     * @param {string} proxyId 数据库代理ID，严格匹配UUID规则。
     * @param {SwitchAccessControlRequestBody} switchAccessControlRequestBody 请求体。
     * @param {string} [xLanguage] 请求语言类型。默认en-us。 取值范围： - en-us - zh-cn
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public switchAccessControl(switchAccessControlRequest?: SwitchAccessControlRequest): Promise<SwitchAccessControlResponse> {
        const options = ParamCreater().switchAccessControl(switchAccessControlRequest);

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
     * @param {string} configurationId 参数模板ID。
     * @param {ApplyConfigurationRequestBody} applyConfigurationRequestBody： 请求体。
     * @param {string} [xLanguage] 语言。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public switchGaussMySqlConfiguration(switchGaussMySqlConfigurationRequest?: SwitchGaussMySqlConfigurationRequest): Promise<SwitchGaussMySqlConfigurationResponse> {
        const options = ParamCreater().switchGaussMySqlConfiguration(switchGaussMySqlConfigurationRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 为实例设置SSL数据加密。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 开关SSL
     * @param {string} instanceId 租户在某一project下的实例ID。
     * @param {SwitchSSLRequest} switchSSLRequest 请求体。
     * @param {string} [xLanguage] 语言。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public switchGaussMySqlInstanceSsl(switchGaussMySqlInstanceSslRequest?: SwitchGaussMySqlInstanceSslRequest): Promise<SwitchGaussMySqlInstanceSslResponse> {
        const options = ParamCreater().switchGaussMySqlInstanceSsl(switchGaussMySqlInstanceSslRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 为数据库代理设置SSL数据加密。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 开关数据库代理SSL
     * @param {string} instanceId 租户在某一project下的实例ID。
     * @param {string} proxyId 数据库代理ID。
     * @param {SwitchProxySSLRequest} switchGaussMySqlProxySslRequestBody 开关数据库代理SSL加密请求体。
     * @param {string} [xLanguage] 请求语言类型。默认en-us。 取值范围： - en-us - zh-cn
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public switchGaussMySqlProxySsl(switchGaussMySqlProxySslRequest?: SwitchGaussMySqlProxySslRequest): Promise<SwitchGaussMySqlProxySslResponse> {
        const options = ParamCreater().switchGaussMySqlProxySsl(switchGaussMySqlProxySslRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 开启或者关闭全量SQL。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 开启或者关闭全量SQL
     * @param {string} instanceId 实例ID。
     * @param {OperateAuditLogRequestV3Body} operateAuditLogRequestV3Body 请求体
     * @param {string} [xLanguage] 语言。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateAuditLog(updateAuditLogRequest?: UpdateAuditLogRequest): Promise<UpdateAuditLogResponse> {
        const options = ParamCreater().updateAuditLog(updateAuditLogRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 设置自动变配。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 设置自动变配
     * @param {string} instanceId 实例ID，严格匹配UUID规则。
     * @param {UpdateAutoScalingPolicyRequestBody} updateAutoScalingPolicyRequestBody 请求体。
     * @param {string} [xLanguage] 请求语言类型。默认en-us。 取值范围： - en-us - zh-cn
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateAutoScalingPolicy(updateAutoScalingPolicyRequest?: UpdateAutoScalingPolicyRequest): Promise<UpdateAutoScalingPolicyResponse> {
        const options = ParamCreater().updateAutoScalingPolicy(updateAutoScalingPolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 设置跨区备份策略。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 设置跨区备份策略
     * @param {string} instanceId 实例ID，严格匹配UUID规则。
     * @param {UpdateBackupOffsitePolicyRequestBody} updateBackupOffsitePolicyRequestBody 请求体。
     * @param {string} [xLanguage] 请求语言类型。默认en-us。 取值范围： - en-us - zh-cn
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateBackupOffsitePolicy(updateBackupOffsitePolicyRequest?: UpdateBackupOffsitePolicyRequest): Promise<UpdateBackupOffsitePolicyResponse> {
        const options = ParamCreater().updateBackupOffsitePolicy(updateBackupOffsitePolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 设置自动备份策略。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 设置备份策略
     * @param {string} instanceId 实例ID，严格匹配UUID规则。
     * @param {MysqlUpdateBackupPolicyRequest} mysqlUpdateBackupPolicyRequest 请求体
     * @param {string} [xLanguage] 语言。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateGaussMySqlBackupPolicy(updateGaussMySqlBackupPolicyRequest?: UpdateGaussMySqlBackupPolicyRequest): Promise<UpdateGaussMySqlBackupPolicyResponse> {
        const options = ParamCreater().updateGaussMySqlBackupPolicy(updateGaussMySqlBackupPolicyRequest);

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
     * @param {string} configurationId 参数模板ID。
     * @param {UpdateConfigurationParameterRequestBody} updateConfigurationParameterRequestBody 请求体。
     * @param {string} [xLanguage] 语言。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateGaussMySqlConfiguration(updateGaussMySqlConfigurationRequest?: UpdateGaussMySqlConfigurationRequest): Promise<UpdateGaussMySqlConfigurationResponse> {
        const options = ParamCreater().updateGaussMySqlConfiguration(updateGaussMySqlConfigurationRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改云数据库 TaurusDB实例数据库备注。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改数据库备注
     * @param {string} instanceId 实例ID。
     * @param {UpdateDatabaseCommentRequest} updateGaussMySqlDatabaseCommentRequestBody 请求体。
     * @param {string} [xLanguage] 语言。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateGaussMySqlDatabaseComment(updateGaussMySqlDatabaseCommentRequest?: UpdateGaussMySqlDatabaseCommentRequest): Promise<UpdateGaussMySqlDatabaseCommentResponse> {
        const options = ParamCreater().updateGaussMySqlDatabaseComment(updateGaussMySqlDatabaseCommentRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改云数据库 TaurusDB实例数据库用户备注。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改数据库用户备注
     * @param {string} instanceId 实例ID。
     * @param {UpdateDatabaseUserCommentRequest} updateGaussMySqlDatabaseUserCommentRequestBody 请求体。
     * @param {string} [xLanguage] 语言。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateGaussMySqlDatabaseUserComment(updateGaussMySqlDatabaseUserCommentRequest?: UpdateGaussMySqlDatabaseUserCommentRequest): Promise<UpdateGaussMySqlDatabaseUserCommentResponse> {
        const options = ParamCreater().updateGaussMySqlDatabaseUserComment(updateGaussMySqlDatabaseUserCommentRequest);

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
     * @param {string} instanceId 租户在某一project下的实例ID。
     * @param {ModifyAliasRequest} modifyAliasRequest 请求体。
     * @param {string} [xLanguage] 语言。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateGaussMySqlInstanceAlias(updateGaussMySqlInstanceAliasRequest?: UpdateGaussMySqlInstanceAliasRequest): Promise<UpdateGaussMySqlInstanceAliasResponse> {
        const options = ParamCreater().updateGaussMySqlInstanceAlias(updateGaussMySqlInstanceAliasRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 实例绑定弹性公网IP，供外网连接使用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 绑定弹性公网IP
     * @param {string} instanceId 租户在某一project下的实例ID。
     * @param {ModifyBindEipRequest} modifyBindEipRequest 请求体。
     * @param {string} [xLanguage] 语言。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateGaussMySqlInstanceEip(updateGaussMySqlInstanceEipRequest?: UpdateGaussMySqlInstanceEipRequest): Promise<UpdateGaussMySqlInstanceEipResponse> {
        const options = ParamCreater().updateGaussMySqlInstanceEip(updateGaussMySqlInstanceEipRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改实例内网地址。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改内网地址
     * @param {string} instanceId 租户在某一project下的实例ID。
     * @param {ModifyInternalIpRequest} modifyInternalIpRequest 请求体。
     * @param {string} [xLanguage] 语言。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateGaussMySqlInstanceInternalIp(updateGaussMySqlInstanceInternalIpRequest?: UpdateGaussMySqlInstanceInternalIpRequest): Promise<UpdateGaussMySqlInstanceInternalIpResponse> {
        const options = ParamCreater().updateGaussMySqlInstanceInternalIp(updateGaussMySqlInstanceInternalIpRequest);

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
     * @param {MysqlUpdateInstanceNameRequest} mysqlUpdateInstanceNameRequest 请求体
     * @param {string} [xLanguage] 语言。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateGaussMySqlInstanceName(updateGaussMySqlInstanceNameRequest?: UpdateGaussMySqlInstanceNameRequest): Promise<UpdateGaussMySqlInstanceNameResponse> {
        const options = ParamCreater().updateGaussMySqlInstanceName(updateGaussMySqlInstanceNameRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 设置可维护时间段。建议将可维护时间段设置在业务低峰期，避免业务在维护过程中异常中断。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 设置可维护时间段
     * @param {string} instanceId 租户在某一project下的实例ID。
     * @param {ModifyOpsWindow} modifyOpsWindow 请求体。
     * @param {string} [xLanguage] 语言。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateGaussMySqlInstanceOpsWindow(updateGaussMySqlInstanceOpsWindowRequest?: UpdateGaussMySqlInstanceOpsWindowRequest): Promise<UpdateGaussMySqlInstanceOpsWindowResponse> {
        const options = ParamCreater().updateGaussMySqlInstanceOpsWindow(updateGaussMySqlInstanceOpsWindowRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改实例数据库端口。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改实例端口
     * @param {string} instanceId 租户在某一project下的实例ID。
     * @param {ModifyPortRequest} modifyPortRequest 请求体。
     * @param {string} [xLanguage] 语言。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateGaussMySqlInstancePort(updateGaussMySqlInstancePortRequest?: UpdateGaussMySqlInstancePortRequest): Promise<UpdateGaussMySqlInstancePortResponse> {
        const options = ParamCreater().updateGaussMySqlInstancePort(updateGaussMySqlInstancePortRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改指定实例安全组。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改安全组
     * @param {string} instanceId 租户在某一project下的实例ID。
     * @param {ModifySecurityGroupRequest} modifySecurityGroup 请求体。
     * @param {string} [xLanguage] 语言。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateGaussMySqlInstanceSecurityGroup(updateGaussMySqlInstanceSecurityGroupRequest?: UpdateGaussMySqlInstanceSecurityGroupRequest): Promise<UpdateGaussMySqlInstanceSecurityGroupResponse> {
        const options = ParamCreater().updateGaussMySqlInstanceSecurityGroup(updateGaussMySqlInstanceSecurityGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改指定企业项目的资源配额。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改租户基于企业项目的资源配额
     * @param {string} [xLanguage] 语言。
     * @param {SetQuotasRequestBody} [setQuotasRequest] 请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateGaussMySqlQuotas(updateGaussMySqlQuotasRequest?: UpdateGaussMySqlQuotasRequest): Promise<UpdateGaussMySqlQuotasResponse> {
        const options = ParamCreater().updateGaussMySqlQuotas(updateGaussMySqlQuotasRequest);

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
     * @param {string} instanceId 实例ID，严格匹配UUID规则。
     * @param {UpdateInstanceConfigurationsRequestBody} updateInstanceConfigurationsRequestBody 请求体。
     * @param {string} [xLanguage] 请求语言类型。默认en-us。 取值范围： - en-us - zh-cn
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
     * 设置实例秒级监控，包括1秒监控和5秒监控。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 设置实例秒级监控
     * @param {string} instanceId 实例ID。
     * @param {TaurusModifyInstanceMonitorRequestBody} taurusModifyInstanceMonitorRequestBody 请求体
     * @param {string} [xLanguage] 语言。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateInstanceMonitor(updateInstanceMonitorRequest?: UpdateInstanceMonitorRequest): Promise<UpdateInstanceMonitorResponse> {
        const options = ParamCreater().updateInstanceMonitor(updateInstanceMonitorRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 开启或者关闭多租特性。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 开启或者关闭多租特性
     * @param {string} instanceId 实例ID，严格匹配UUID规则。
     * @param {OperateMultiTenantReq} operateMultiTenantReq 请求体
     * @param {string} [xLanguage] 请求语言类型。默认en-us。 取值范围： - en-us - zh-cn
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateMultiTenant(updateMultiTenantRequest?: UpdateMultiTenantRequest): Promise<UpdateMultiTenantResponse> {
        const options = ParamCreater().updateMultiTenant(updateMultiTenantRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 开启或关闭新增节点自动加入该Proxy。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 开启或关闭新增节点自动加入该Proxy
     * @param {string} instanceId 实例ID，严格匹配UUID规则。
     * @param {string} proxyId 数据库代理ID，严格匹配UUID规则。
     * @param {UpdateNewNodeAutoAddSwitchRequestBody} updateNewNodeAutoAddSwitchRequestBody 请求体。
     * @param {string} [xLanguage] 请求语言类型。默认en-us。 取值范围： - en-us - zh-cn
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateNewNodeAutoAddSwitch(updateNewNodeAutoAddSwitchRequest?: UpdateNewNodeAutoAddSwitchRequest): Promise<UpdateNewNodeAutoAddSwitchResponse> {
        const options = ParamCreater().updateNewNodeAutoAddSwitch(updateNewNodeAutoAddSwitchRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更改数据库代理连接池类型。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更改数据库代理连接池类型
     * @param {string} instanceId 实例ID，严格匹配UUID规则。
     * @param {string} proxyId 数据库代理ID，严格匹配UUID规则。
     * @param {ProxyUpdateProxyConnectionPoolTypeRequest} updateProxyConnectionPoolTypeRequestBody 更改数据库代理连接池类型的请求体。
     * @param {string} [xLanguage] 语言。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateProxyConnectionPoolType(updateProxyConnectionPoolTypeRequest?: UpdateProxyConnectionPoolTypeRequest): Promise<UpdateProxyConnectionPoolTypeResponse> {
        const options = ParamCreater().updateProxyConnectionPoolType(updateProxyConnectionPoolTypeRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改代理实例名称
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改代理实例名称
     * @param {string} instanceId 实例ID，严格匹配UUID规则。
     * @param {string} proxyId 数据库代理ID，严格匹配UUID规则。
     * @param {ProxyUpdateProxyNameRequest} updateProxyNameRequestBody 修改数据库代理名称的请求体。
     * @param {string} [xLanguage] 语言。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateProxyName(updateProxyNameRequest?: UpdateProxyNameRequest): Promise<UpdateProxyNameResponse> {
        const options = ParamCreater().updateProxyName(updateProxyNameRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改数据库代理参数。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改代理实例参数
     * @param {string} instanceId 实例ID，严格匹配UUID规则。
     * @param {string} proxyId 数据库代理ID，严格匹配UUID规则。
     * @param {UpdateProxyNewConfigRequestBody} updateProxyNewConfigurationsRequestBody 请求体。
     * @param {string} [xLanguage] 请求语言类型。默认en-us。 取值范围： - en-us - zh-cn
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateProxyNewConfigurations(updateProxyNewConfigurationsRequest?: UpdateProxyNewConfigurationsRequest): Promise<UpdateProxyNewConfigurationsResponse> {
        const options = ParamCreater().updateProxyNewConfigurations(updateProxyNewConfigurationsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改读写分离端口号。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改读写分离端口号
     * @param {string} instanceId 租户在某一project下的实例ID。
     * @param {string} proxyId 租户在某一实下的数据库代理ID。
     * @param {UpdateProxyPortRequestBody} updateProxyPortRequestBody 请求体。
     * @param {string} [xLanguage] 语言。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateProxyPort(updateProxyPortRequest?: UpdateProxyPortRequest): Promise<UpdateProxyPortResponse> {
        const options = ParamCreater().updateProxyPort(updateProxyPortRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改代理会话一致性。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改代理会话一致性
     * @param {string} instanceId 租户在某一project下的实例ID。
     * @param {string} proxyId 租户在某一instance下的数据库代理ID。
     * @param {ModifyProxyConsistRequest} modifyProxyConsistRequest 请求体。
     * @param {string} [xLanguage] 语言。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateProxySessionConsistence(updateProxySessionConsistenceRequest?: UpdateProxySessionConsistenceRequest): Promise<UpdateProxySessionConsistenceResponse> {
        const options = ParamCreater().updateProxySessionConsistence(updateProxySessionConsistenceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 设置Serverless配置策略。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 设置Serverless配置策略
     * @param {string} instanceId 实例ID。
     * @param {UpdateServerlessPolicy} updateServerlessPolicyRequestBody 设置Serverless配置参数请求体。
     * @param {string} [xLanguage] 语言。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateServerlessPolicy(updateServerlessPolicyRequest?: UpdateServerlessPolicyRequest): Promise<UpdateServerlessPolicyResponse> {
        const options = ParamCreater().updateServerlessPolicy(updateServerlessPolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 开启或关闭慢日志脱敏状态
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 开启或关闭慢日志脱敏状态
     * @param {string} instanceId 实例ID。
     * @param {UpdateSlowlogSensitiveSwitchRequestBody} updateSlowlogSensitiveSwitchRequestBody 开启或关闭慢日志脱敏状态请求体。
     * @param {string} [xLanguage] 语言。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateSlowlogSensitiveSwitch(updateSlowlogSensitiveSwitchRequest?: UpdateSlowlogSensitiveSwitchRequest): Promise<UpdateSlowlogSensitiveSwitchResponse> {
        const options = ParamCreater().updateSlowlogSensitiveSwitch(updateSlowlogSensitiveSwitchRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 开启或者关闭SQL限流。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 开启或者关闭SQL限流
     * @param {string} instanceId 实例ID。
     * @param {OperateSqlFilterControlReq} operateSqlFilterControlReq 请求体
     * @param {string} [xLanguage] 语言。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateSqlFilterControl(updateSqlFilterControlRequest?: UpdateSqlFilterControlRequest): Promise<UpdateSqlFilterControlResponse> {
        const options = ParamCreater().updateSqlFilterControl(updateSqlFilterControlRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改只读节点的读内网地址。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改只读节点的读内网地址
     * @param {string} instanceId **参数解释**：  实例ID，此参数是实例的唯一标识。  **约束限制**：  不涉及。  **取值范围**：  只能由英文字母、数字组成，后缀为in07，长度为36个字符。  **默认取值**：  不涉及。
     * @param {string} nodeId **参数解释**：  节点ID。  **约束限制**：  不涉及。  **取值范围**：  只能由英文字母、数字组成，前面为UUID，后缀为no07，长度为36个字符。  **默认取值**：  不涉及。 
     * @param {ModifyNodeDataIpRequest} updateTaurusNodeDataIpRequestBody **参数解释**：  修改只读节点读内网地址请求体。  **约束限制**：  不涉及。  **取值范围**：  不涉及。  **默认取值**：  不涉及。
     * @param {string} [xLanguage] **参数解释**：               请求语言类型。   **约束限制**：   不涉及。   **取值范围**：  - en-us  - zh-cn   **默认值**：   en-us。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateTaurusNodeDataIp(updateTaurusNodeDataIpRequest?: UpdateTaurusNodeDataIpRequest): Promise<UpdateTaurusNodeDataIpResponse> {
        const options = ParamCreater().updateTaurusNodeDataIp(updateTaurusNodeDataIpRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 设置proxy事务拆分。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 设置proxy事务拆分
     * @param {string} instanceId 实例ID。
     * @param {ProxyTransactionSplitRequest} proxyTransactionSplitRequest 请求体
     * @param {string} [xLanguage] 语言。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateTransactionSplitStatus(updateTransactionSplitStatusRequest?: UpdateTransactionSplitStatusRequest): Promise<UpdateTransactionSplitStatusResponse> {
        const options = ParamCreater().updateTransactionSplitStatus(updateTransactionSplitStatusRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 内核版本升级。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 内核版本升级
     * @param {string} instanceId 租户在某一project下的实例ID。
     * @param {UpgradeDatabaseRequest} upgradeDatabaseRequest 请求体。
     * @param {string} [xLanguage] 语言。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public upgradeGaussMySqlInstanceDatabase(upgradeGaussMySqlInstanceDatabaseRequest?: UpgradeGaussMySqlInstanceDatabaseRequest): Promise<UpgradeGaussMySqlInstanceDatabaseResponse> {
        const options = ParamCreater().upgradeGaussMySqlInstanceDatabase(upgradeGaussMySqlInstanceDatabaseRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 升级数据库代理实例内核版本。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 升级数据库代理实例内核版本
     * @param {string} instanceId 实例ID，严格匹配UUID规则。
     * @param {string} proxyId 数据库代理ID，严格匹配UUID规则。
     * @param {ProxyUpgradeProxyVersionRequest} upgradeProxyVersionRequestBody 升级数据库代理内核版本的请求体。
     * @param {string} [xLanguage] 请求语言类型。默认en-us。 取值范围： - en-us - zh-cn
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public upgradeProxyVersion(upgradeProxyVersionRequest?: UpgradeProxyVersionRequest): Promise<UpgradeProxyVersionResponse> {
        const options = ParamCreater().upgradeProxyVersion(upgradeProxyVersionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 数据同步库配置校验。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 数据同步库配置校验
     * @param {string} instanceId ClickHouse实例ID，严格匹配UUID规则。
     * @param {CheckChDatabaseConfigRequestBody} checkClickHouseDataBaseConfigRequestBody 库配置校验请求体。
     * @param {string} [xLanguage] 请求语言类型。默认en-us。 取值范围： - en-us - zh-cn
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public checkClickHouseDataBaseConfig(checkClickHouseDataBaseConfigRequest?: CheckClickHouseDataBaseConfigRequest): Promise<CheckClickHouseDataBaseConfigResponse> {
        const options = ParamCreater().checkClickHouseDataBaseConfig(checkClickHouseDataBaseConfigRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 数据同步表配置校验。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 数据同步表配置校验
     * @param {string} instanceId ClickHouse实例ID，严格匹配UUID规则。
     * @param {CheckChDatabaseTableConfigRequestBody} checkClickHouseTableConfigRequestBody 表配置校验请求体。
     * @param {string} [xLanguage] 请求语言类型。默认en-us。 取值范围： - en-us - zh-cn
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public checkClickHouseTableConfig(checkClickHouseTableConfigRequest?: CheckClickHouseTableConfigRequest): Promise<CheckClickHouseTableConfigResponse> {
        const options = ParamCreater().checkClickHouseTableConfig(checkClickHouseTableConfigRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * HTAP数据同步库配置校验。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary HTAP数据同步库配置校验
     * @param {string} xLanguage 请求语言类型。默认en-us。 取值范围： - en-us - zh-cn
     * @param {string} instanceId StarRocks实例ID，严格匹配UUID规则。
     * @param {DbConfigCheckRequestV3} checkDataBaseConfigRequestBody 数据同步创建任务请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public checkDataBaseConfig(checkDataBaseConfigRequest?: CheckDataBaseConfigRequest): Promise<CheckDataBaseConfigResponse> {
        const options = ParamCreater().checkDataBaseConfig(checkDataBaseConfigRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * StarRocks资源检查。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary StarRocks资源检查
     * @param {ResourceCheck} checkStarRocksResourceRequestBody 资源检查。
     * @param {string} [xLanguage] 请求语言类型。默认en-us。 取值范围： - en-us - zh-cn
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public checkStarRocksResource(checkStarRocksResourceRequest?: CheckStarRocksResourceRequest): Promise<CheckStarRocksResourceResponse> {
        const options = ParamCreater().checkStarRocksResource(checkStarRocksResourceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 对比实例参数和默认模板的差异
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 参数对比
     * @param {string} [xLanguage] 请求语言类型。默认en-us。 取值范围： - en-us - zh-cn
     * @param {CheckStarrocksParamsRequestBody} [checkStarrocksParamsRequestBody] 需要进行比较的源参数模板ID。通过ListStarrocksInstanceInfo接口获得。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public checkStarrocksParams(checkStarrocksParamsRequest?: CheckStarrocksParamsRequest): Promise<CheckStarrocksParamsResponse> {
        const options = ParamCreater().checkStarrocksParams(checkStarrocksParamsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * HTAP数据同步表配置校验。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary HTAP数据同步表配置校验
     * @param {string} xLanguage 请求语言类型。默认en-us。 取值范围： - en-us - zh-cn
     * @param {string} instanceId StarRocks实例ID，严格匹配UUID规则。
     * @param {TableConfigCheckRequestV3} checkTableConfigRequestBody 表配置校验请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public checkTableConfig(checkTableConfigRequest?: CheckTableConfigRequest): Promise<CheckTableConfigResponse> {
        const options = ParamCreater().checkTableConfig(checkTableConfigRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建数据同步。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建数据同步
     * @param {string} instanceId ClickHouse实例ID，严格匹配UUID规则。
     * @param {CreateChDatabaseReplicationRequestBody} createClickHouseDataBaseReplicationRequestBody 创建ClickHouse数据同步请求体。
     * @param {string} [xLanguage] 请求语言类型。默认en-us。 取值范围： - en-us - zh-cn
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createClickHouseDataBaseReplication(createClickHouseDataBaseReplicationRequest?: CreateClickHouseDataBaseReplicationRequest): Promise<CreateClickHouseDataBaseReplicationResponse> {
        const options = ParamCreater().createClickHouseDataBaseReplication(createClickHouseDataBaseReplicationRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建数据库账号。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建数据库账号
     * @param {string} instanceId ClickHouse实例ID，严格匹配UUID规则。
     * @param {ClickHouseDatabaseUserInfo} createClickHouseDatabaseUserRequestBody 创建数据库账号请求体。
     * @param {string} [xLanguage] 请求语言类型。默认en-us。 取值范围： - en-us - zh-cn
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createClickHouseDatabaseUser(createClickHouseDatabaseUserRequest?: CreateClickHouseDatabaseUserRequest): Promise<CreateClickHouseDatabaseUserResponse> {
        const options = ParamCreater().createClickHouseDatabaseUser(createClickHouseDatabaseUserRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建实例。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建实例
     * @param {string} instanceId TaurusDB实例ID，严格匹配UUID规则。
     * @param {CreateChInstanceRequestBody} createClickHouseInstanceRequestBody 创建实例请求体。
     * @param {string} [xLanguage] 请求语言类型。默认en-us。 取值范围： - en-us - zh-cn
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createClickHouseInstance(createClickHouseInstanceRequest?: CreateClickHouseInstanceRequest): Promise<CreateClickHouseInstanceResponse> {
        const options = ParamCreater().createClickHouseInstance(createClickHouseInstanceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建StarRocks数据同步。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建StarRocks数据同步
     * @param {string} instanceId StarRocks实例ID，严格匹配UUID规则。
     * @param {string} xLanguage 请求语言类型。默认en-us。 取值范围： - en-us - zh-cn
     * @param {CreateStarRocksDataReplication} createStarRocksDataReplicationRequestBody 数据同步创建任务请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createStarRocksDataReplication(createStarRocksDataReplicationRequest?: CreateStarRocksDataReplicationRequest): Promise<CreateStarRocksDataReplicationResponse> {
        const options = ParamCreater().createStarRocksDataReplication(createStarRocksDataReplicationRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建StarRocks数据库账号。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建数据库账号
     * @param {string} instanceId StarRocks实例ID，严格匹配UUID规则。
     * @param {StarRocksDatabaseUserInfo} createStarRocksDatabaseUserRequestBody 创建用户账号请求体。
     * @param {string} [xLanguage] 请求语言类型。默认en-us。 取值范围： - en-us - zh-cn
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createStarRocksDatabaseUser(createStarRocksDatabaseUserRequest?: CreateStarRocksDatabaseUserRequest): Promise<CreateStarRocksDatabaseUserResponse> {
        const options = ParamCreater().createStarRocksDatabaseUser(createStarRocksDatabaseUserRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建StarRocks实例。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建StarRocks实例
     * @param {string} instanceId TaurusDB数据库实例ID，严格匹配UUID规则。
     * @param {StarRocksCreateRequest} createStarrocksInstanceRequestBody 创建实例。
     * @param {string} [xLanguage] 请求语言类型。默认en-us。 取值范围： - en-us - zh-cn
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createStarrocksInstance(createStarrocksInstanceRequest?: CreateStarrocksInstanceRequest): Promise<CreateStarrocksInstanceResponse> {
        const options = ParamCreater().createStarrocksInstance(createStarrocksInstanceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 停止修改数据同步。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 停止修改数据同步
     * @param {string} instanceId ClickHouse实例ID，严格匹配UUID规则。
     * @param {string} database 数据库名。
     * @param {string} [xLanguage] 请求语言类型。默认en-us。 取值范围： - en-us - zh-cn
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteClickHouseDataBaseConfig(deleteClickHouseDataBaseConfigRequest?: DeleteClickHouseDataBaseConfigRequest): Promise<DeleteClickHouseDataBaseConfigResponse> {
        const options = ParamCreater().deleteClickHouseDataBaseConfig(deleteClickHouseDataBaseConfigRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除数据同步。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除数据同步
     * @param {string} instanceId ClickHouse实例ID，严格匹配UUID规则。
     * @param {string} databaseName 数据库名。
     * @param {string} [xLanguage] 请求语言类型。默认en-us。 取值范围： - en-us - zh-cn
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteClickHouseDataBaseReplication(deleteClickHouseDataBaseReplicationRequest?: DeleteClickHouseDataBaseReplicationRequest): Promise<DeleteClickHouseDataBaseReplicationResponse> {
        const options = ParamCreater().deleteClickHouseDataBaseReplication(deleteClickHouseDataBaseReplicationRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除数据库账户。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除数据库账户
     * @param {string} instanceId ClickHouse实例ID，严格匹配UUID规则。
     * @param {string} userName 数据库名称。
     * @param {string} [xLanguage] 请求语言类型。默认en-us。 取值范围： - en-us - zh-cn
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteClickHouseDatabaseUser(deleteClickHouseDatabaseUserRequest?: DeleteClickHouseDatabaseUserRequest): Promise<DeleteClickHouseDatabaseUserResponse> {
        const options = ParamCreater().deleteClickHouseDatabaseUser(deleteClickHouseDatabaseUserRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除实例。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除实例
     * @param {string} instanceId TaurusDB实例ID，严格匹配UUID规则。
     * @param {string} clickhouseInstanceId ClickHouse实例ID，严格匹配UUID规则。
     * @param {string} [xLanguage] 请求语言类型。默认en-us。 取值范围： - en-us - zh-cn
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteClickHouseInstance(deleteClickHouseInstanceRequest?: DeleteClickHouseInstanceRequest): Promise<DeleteClickHouseInstanceResponse> {
        const options = ParamCreater().deleteClickHouseInstance(deleteClickHouseInstanceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量解除LTS日志配置。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量解除LTS日志配置
     * @param {DeleteChLtsConfigRequestBody} deleteClickHouseLtsConfigRequestBody 批量解除LTS日志配置请求体。
     * @param {string} [xLanguage] 请求语言类型。默认en-us。 取值范围： - en-us - zh-cn
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteClickHouseLtsConfig(deleteClickHouseLtsConfigRequest?: DeleteClickHouseLtsConfigRequest): Promise<DeleteClickHouseLtsConfigResponse> {
        const options = ParamCreater().deleteClickHouseLtsConfig(deleteClickHouseLtsConfigRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除StarRocks数据同步。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除StarRocks数据同步
     * @param {string} instanceId StarRocks实例ID，严格匹配UUID规则。
     * @param {string} xLanguage 请求语言类型。默认en-us。 取值范围： - en-us - zh-cn
     * @param {DeleteStarRocksDataReplication} deleteStarRocksDataReplicationRequestBody 数据同步删除任务请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteStarRocksDataReplication(deleteStarRocksDataReplicationRequest?: DeleteStarRocksDataReplicationRequest): Promise<DeleteStarRocksDataReplicationResponse> {
        const options = ParamCreater().deleteStarRocksDataReplication(deleteStarRocksDataReplicationRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除StarRocks数据库账户。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除数据库账户
     * @param {string} instanceId StarRocks实例ID，严格匹配UUID规则。
     * @param {string} userName 数据库账户名。
     * @param {string} [xLanguage] 请求语言类型。默认en-us。 取值范围： - en-us - zh-cn
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteStarRocksDatabaseUser(deleteStarRocksDatabaseUserRequest?: DeleteStarRocksDatabaseUserRequest): Promise<DeleteStarRocksDatabaseUserResponse> {
        const options = ParamCreater().deleteStarRocksDatabaseUser(deleteStarRocksDatabaseUserRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除StarRocks实例。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除StarRocks实例
     * @param {string} instanceId TaurusDB实例ID，严格匹配UUID规则。
     * @param {string} starrocksInstanceId StarRocks实例ID，严格匹配UUID规则。
     * @param {string} [xLanguage] 请求语言类型。默认en-us。 取值范围： - en-us - zh-cn
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteStarrocksInstance(deleteStarrocksInstanceRequest?: DeleteStarrocksInstanceRequest): Promise<DeleteStarrocksInstanceResponse> {
        const options = ParamCreater().deleteStarrocksInstance(deleteStarrocksInstanceRequest);

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
     * @param {string} instanceId ClickHouse实例ID，严格匹配UUID规则。
     * @param {number} [limit] 查询记录数，默认10。不能为负数，最小值为1，最大值为100。
     * @param {number} [offset] 索引位置，偏移量，默认0。从第一条数据偏移offset条数据后开始查询（偏移0条数据，表示从第一条数据开始查询），必须为数字，不能为负数。
     * @param {string} [databaseName] 数据库名。
     * @param {string} [xLanguage] 请求语言类型。默认en-us。 取值范围： - en-us - zh-cn
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listClickHouseDataBase(listClickHouseDataBaseRequest?: ListClickHouseDataBaseRequest): Promise<ListClickHouseDataBaseResponse> {
        const options = ParamCreater().listClickHouseDataBase(listClickHouseDataBaseRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询数据同步的库参数配置。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询数据同步的库参数配置
     * @param {string} instanceId ClickHouse实例ID，严格匹配UUID规则。
     * @param {string} [xLanguage] 请求语言类型。默认en-us。 取值范围： - en-us - zh-cn
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listClickHouseDataBaseParameter(listClickHouseDataBaseParameterRequest?: ListClickHouseDataBaseParameterRequest): Promise<ListClickHouseDataBaseParameterResponse> {
        const options = ParamCreater().listClickHouseDataBaseParameter(listClickHouseDataBaseParameterRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询数据同步信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询数据同步信息
     * @param {string} instanceId ClickHouse实例ID，严格匹配UUID规则。
     * @param {number} [limit] 查询记录数，默认10。不能为负数，最小值为1，最大值为100。
     * @param {number} [offset] 索引位置，偏移量，默认0。从第一条数据偏移offset条数据后开始查询（偏移0条数据，表示从第一条数据开始查询），必须为数字，不能为负数。
     * @param {string} [xLanguage] 请求语言类型。默认en-us。 取值范围： - en-us - zh-cn
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listClickHouseDataBaseReplication(listClickHouseDataBaseReplicationRequest?: ListClickHouseDataBaseReplicationRequest): Promise<ListClickHouseDataBaseReplicationResponse> {
        const options = ParamCreater().listClickHouseDataBaseReplication(listClickHouseDataBaseReplicationRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查看数据同步配置。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查看数据同步配置
     * @param {string} instanceId ClickHouse实例ID，严格匹配UUID规则。
     * @param {string} databaseName 数据库名。
     * @param {string} [xLanguage] 请求语言类型。默认en-us。 取值范围： - en-us - zh-cn
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listClickHouseDataBaseReplicationConfig(listClickHouseDataBaseReplicationConfigRequest?: ListClickHouseDataBaseReplicationConfigRequest): Promise<ListClickHouseDataBaseReplicationConfigResponse> {
        const options = ParamCreater().listClickHouseDataBaseReplicationConfig(listClickHouseDataBaseReplicationConfigRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询实例详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询实例详情
     * @param {string} instanceId TaurusDB实例ID，严格匹配UUID规则。
     * @param {string} clickhouseInstanceId ClickHouse实例ID，严格匹配UUID规则。
     * @param {string} [xLanguage] 请求语言类型。默认en-us。 取值范围： - en-us - zh-cn
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listClickHouseInstance(listClickHouseInstanceRequest?: ListClickHouseInstanceRequest): Promise<ListClickHouseInstanceResponse> {
        const options = ParamCreater().listClickHouseInstance(listClickHouseInstanceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询错误日志、慢日志节点信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询错误日志、慢日志节点信息
     * @param {string} instanceId ClickHouse实例ID，严格匹配UUID规则。
     * @param {string} [xLanguage] 请求语言类型。默认en-us。 取值范围： - en-us - zh-cn
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listClickHouseInstanceNode(listClickHouseInstanceNodeRequest?: ListClickHouseInstanceNodeRequest): Promise<ListClickHouseInstanceNodeResponse> {
        const options = ParamCreater().listClickHouseInstanceNode(listClickHouseInstanceNodeRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * HTAP引擎资源查询。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary HTAP引擎资源查询
     * @param {string} engineName HTAP引擎名。 取值范围： - star-rocks - click-house
     * @param {string} [xLanguage] 请求语言类型。默认en-us。 取值范围： - en-us - zh-cn
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listHtapDataStore(listHtapDataStoreRequest?: ListHtapDataStoreRequest): Promise<ListHtapDataStoreResponse> {
        const options = ParamCreater().listHtapDataStore(listHtapDataStoreRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * HTAP查询规格信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary HTAP查询规格信息
     * @param {string} engineName HTAP引擎名。 取值范围： - star-rocks - click-house
     * @param {string} [availabilityZoneMode] 可用区模式，当前仅支持single。
     * @param {string} [specCode] 规格码，提供后仅查询指定规格码规格信息。
     * @param {string} [xLanguage] 请求语言类型。默认en-us。 取值范围： - en-us - zh-cn
     * @param {string} [versionName] 数据库版本号，不填默认3.1.6.0。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listHtapFlavor(listHtapFlavorRequest?: ListHtapFlavorRequest): Promise<ListHtapFlavorResponse> {
        const options = ParamCreater().listHtapFlavor(listHtapFlavorRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询HTAP实例列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询HTAP实例列表
     * @param {string} instanceId TaurusDB实例ID，严格匹配UUID规则。
     * @param {string} [xLanguage] 请求语言类型。默认en-us。 取值范围： - en-us - zh-cn
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listHtapInstanceInfo(listHtapInstanceInfoRequest?: ListHtapInstanceInfoRequest): Promise<ListHtapInstanceInfoResponse> {
        const options = ParamCreater().listHtapInstanceInfo(listHtapInstanceInfoRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取HTAP实例存储类型。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取HTAP实例存储类型
     * @param {string} database HTAP数据库名。 取值范围： - star-rocks - click-house
     * @param {string} versionName 数据库大版本号
     * @param {string} [xLanguage] 请求语言类型。默认en-us。 取值范围： - en-us - zh-cn
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listHtapStorageType(listHtapStorageTypeRequest?: ListHtapStorageTypeRequest): Promise<ListHtapStorageTypeResponse> {
        const options = ParamCreater().listHtapStorageType(listHtapStorageTypeRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询StarRocks数据库。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询StarRocks数据库
     * @param {string} xLanguage 请求语言类型。默认en-us。 取值范围： - en-us - zh-cn
     * @param {string} instanceId StarRocks实例ID，严格匹配UUID规则。
     * @param {string} [limit] 查询记录数
     * @param {string} [offset] 索引位置，偏移量。从第一条数据偏移offset条数据后开始查询（偏移0条数据，表示从第一条数据开始查询），必须为数字，不能为负数。
     * @param {string} [databaseName] 查询的数据库名称，支持模糊搜索。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listStarRocksDataBases(listStarRocksDataBasesRequest?: ListStarRocksDataBasesRequest): Promise<ListStarRocksDataBasesResponse> {
        const options = ParamCreater().listStarRocksDataBases(listStarRocksDataBasesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询StarRocks数据同步配置信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询StarRocks数据同步配置信息
     * @param {string} instanceId StarRocks实例ID，严格匹配UUID规则。
     * @param {string} xLanguage 请求语言类型。默认en-us。 取值范围： - en-us - zh-cn
     * @param {string} taskName 数据同步任务名。 字符长度限制3~128位，仅支持英文大小写字母、数字以及下划线_。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listStarRocksDataReplicationConfig(listStarRocksDataReplicationConfigRequest?: ListStarRocksDataReplicationConfigRequest): Promise<ListStarRocksDataReplicationConfigResponse> {
        const options = ParamCreater().listStarRocksDataReplicationConfig(listStarRocksDataReplicationConfigRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 按目标库查询StarRocks数据同步配置信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 按目标库查询StarRocks数据同步配置信息
     * @param {string} instanceId **参数解释**：  StarRocks实例ID，严格匹配UUID规则。  **约束限制**：  不涉及。  **取值范围**：  只能由英文字母、数字组成，后缀为in17，且长度为36个字符。  **默认值**：  不涉及。
     * @param {string} xLanguage **参数解释**：  请求语言类型。  **约束限制**：  不涉及。  **取值范围**：  - en-us - zh-cn  **默认值**：  en-us。
     * @param {string} database **参数解释**：  目标数据库名。  **约束限制**：  不涉及。  **取值范围**：  字符长度限制3~128位，仅支持英文大小写字母、数字以及下划线。  **默认值**：  不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listStarRocksDataReplicationConfigByDataBase(listStarRocksDataReplicationConfigByDataBaseRequest?: ListStarRocksDataReplicationConfigByDataBaseRequest): Promise<ListStarRocksDataReplicationConfigByDataBaseResponse> {
        const options = ParamCreater().listStarRocksDataReplicationConfigByDataBase(listStarRocksDataReplicationConfigByDataBaseRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询StarRocks数据同步状态信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询StarRocks数据同步状态信息
     * @param {string} instanceId StarRocks实例ID，严格匹配UUID规则。
     * @param {string} xLanguage 请求语言类型。默认en-us。 取值范围： - en-us - zh-cn
     * @param {string} [limit] 查询记录数。每页查询数据同步任务的数量。
     * @param {string} [offset] 索引位置，偏移量。从第一条数据偏移offset条数据后开始查询，默认为0（偏移0条数据，表示从第一条数据开始查询），必须为数字，不能为负数。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listStarRocksDataReplications(listStarRocksDataReplicationsRequest?: ListStarRocksDataReplicationsRequest): Promise<ListStarRocksDataReplicationsResponse> {
        const options = ParamCreater().listStarRocksDataReplications(listStarRocksDataReplicationsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询StarRocks数据同步的库参数配置。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询StarRocks数据同步的库参数配置
     * @param {string} instanceId StarRocks实例ID，严格匹配UUID规则。
     * @param {string} xLanguage 请求语言类型。默认en-us。 取值范围： - en-us - zh-cn
     * @param {string} [addTaskScenario] **参数解释**：  新增子任务的场景，用于区分库参数是否支持修改。  **约束限制**：  非必填。  **取值范围**：  不涉及。  **默认值**：  不涉及。
     * @param {string} [mainTaskName] **参数解释**：  新增子任务相应的主任务名。  **约束限制**：  非必填。  **取值范围**：  不涉及。  **默认值**：  不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listStarRocksDbParameters(listStarRocksDbParametersRequest?: ListStarRocksDbParametersRequest): Promise<ListStarRocksDbParametersResponse> {
        const options = ParamCreater().listStarRocksDbParameters(listStarRocksDbParametersRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询StarRocks实例。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询StarRocks实例
     * @param {string} instanceId TaurusDB实例ID，严格匹配UUID规则。
     * @param {string} starrocksInstanceId StarRocks实例ID，严格匹配UUID规则。
     * @param {string} [xLanguage] 请求语言类型。默认en-us。 取值范围： - en-us - zh-cn
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listStarrocksInstanceInfo(listStarrocksInstanceInfoRequest?: ListStarrocksInstanceInfoRequest): Promise<ListStarrocksInstanceInfoResponse> {
        const options = ParamCreater().listStarrocksInstanceInfo(listStarrocksInstanceInfoRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改StarRocks数据同步配置。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改StarRocks数据同步配置
     * @param {string} xLanguage **参数解释**：  请求语言类型。  **约束限制**：  不涉及。  **取值范围**：  - en-us - zh-cn  **默认值**：  en-us。
     * @param {string} instanceId **参数解释**：  StarRocks实例ID，严格匹配UUID规则。  **约束限制**：  不涉及。  **取值范围**：  只能由英文字母、数字组成，后缀为in17，且长度为36个字符。  **默认值**：  不涉及。
     * @param {ModifyDataSyncConfigRequestV3} modifyDataSyncRequestBody **参数解释**：  修改StarRocks数据同步配置请求体。  **约束限制**：  不涉及。  **取值范围**：  不涉及。  **默认值**：  不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public modifyDataSync(modifyDataSyncRequest?: ModifyDataSyncRequest): Promise<ModifyDataSyncResponse> {
        const options = ParamCreater().modifyDataSync(modifyDataSyncRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 暂停StarRocks数据同步。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 暂停StarRocks数据同步
     * @param {string} instanceId StarRocks实例ID，严格匹配UUID规则。
     * @param {string} xLanguage 请求语言类型。默认en-us。 取值范围： - en-us - zh-cn
     * @param {PauseStarRocksDataReplication} pauseStarRocksDataReplicationRequestBody 暂停数据同步任务请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public pauseStarRocksDataReplication(pauseStarRocksDataReplicationRequest?: PauseStarRocksDataReplicationRequest): Promise<PauseStarRocksDataReplicationResponse> {
        const options = ParamCreater().pauseStarRocksDataReplication(pauseStarRocksDataReplicationRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 重启实例。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 重启实例
     * @param {string} instanceId ClickHouse实例ID，严格匹配UUID规则。
     * @param {string} [xLanguage] 请求语言类型。默认en-us。 取值范围： - en-us - zh-cn
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public rebootClickHouseInstance(rebootClickHouseInstanceRequest?: RebootClickHouseInstanceRequest): Promise<RebootClickHouseInstanceResponse> {
        const options = ParamCreater().rebootClickHouseInstance(rebootClickHouseInstanceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 实例规格变更。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 实例规格变更
     * @param {string} instanceId ClickHouse实例ID，严格匹配UUID规则。
     * @param {ClickHouseResizeFlavorRequestBody} resizeClickHouseFlavorRequestBody 规格变更请求体。
     * @param {string} [xLanguage] 请求语言类型。默认en-us。 取值范围： - en-us - zh-cn
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public resizeClickHouseFlavor(resizeClickHouseFlavorRequest?: ResizeClickHouseFlavorRequest): Promise<ResizeClickHouseFlavorResponse> {
        const options = ParamCreater().resizeClickHouseFlavor(resizeClickHouseFlavorRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 实例磁盘扩容。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 实例磁盘扩容
     * @param {string} instanceId ClickHouse实例ID，严格匹配UUID规则。
     * @param {ChEnlargeVolumeRequestBody} resizeClickHouseInstanceRequestBody 磁盘扩容请求体。
     * @param {string} [xLanguage] 请求语言类型。默认en-us。 取值范围： - en-us - zh-cn
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public resizeClickHouseInstance(resizeClickHouseInstanceRequest?: ResizeClickHouseInstanceRequest): Promise<ResizeClickHouseInstanceResponse> {
        const options = ParamCreater().resizeClickHouseInstance(resizeClickHouseInstanceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * StarRocks实例规格变更。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary StarRocks实例规格变更
     * @param {string} instanceId TaurusDB实例ID，严格匹配UUID规则。
     * @param {SrFlavorResizeReq} resizeStarRocksFlavorRequestBody 规格变更请求
     * @param {string} [xLanguage] 请求语言类型。默认en-us。 取值范围： - en-us - zh-cn
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public resizeStarRocksFlavor(resizeStarRocksFlavorRequest?: ResizeStarRocksFlavorRequest): Promise<ResizeStarRocksFlavorResponse> {
        const options = ParamCreater().resizeStarRocksFlavor(resizeStarRocksFlavorRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 重启StarRocks实例。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 重启StarRocks实例
     * @param {string} starrocksInstanceId StarRocks实例ID，严格匹配UUID规则。
     * @param {string} [xLanguage] 请求语言类型。默认en-us。 取值范围： - en-us - zh-cn
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public restartStarrocksInstance(restartStarrocksInstanceRequest?: RestartStarrocksInstanceRequest): Promise<RestartStarrocksInstanceResponse> {
        const options = ParamCreater().restartStarrocksInstance(restartStarrocksInstanceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 重启StarRocks节点。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 重启StarRocks节点
     * @param {string} starrocksNodeId StarRocks节点ID
     * @param {string} starrocksInstanceId StarRocks实例ID，严格匹配UUID规则。
     * @param {string} [xLanguage] 请求语言类型。默认en-us。 取值范围： - en-us - zh-cn
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public restartStarrocksNode(restartStarrocksNodeRequest?: RestartStarrocksNodeRequest): Promise<RestartStarrocksNodeResponse> {
        const options = ParamCreater().restartStarrocksNode(restartStarrocksNodeRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 恢复StarRocks数据同步。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 恢复StarRocks数据同步
     * @param {string} instanceId StarRocks实例ID，严格匹配UUID规则。
     * @param {string} xLanguage 请求语言类型。默认en-us。 取值范围： - en-us - zh-cn
     * @param {ResumeStarRocksDataReplication} resumeStarRocksDataReplicationRequestBody 恢复数据同步任务请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public resumeStarRocksDataReplication(resumeStarRocksDataReplicationRequest?: ResumeStarRocksDataReplicationRequest): Promise<ResumeStarRocksDataReplicationResponse> {
        const options = ParamCreater().resumeStarRocksDataReplication(resumeStarRocksDataReplicationRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询数据库账户。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询数据库账户
     * @param {string} instanceId ClickHouse实例ID，严格匹配UUID规则。
     * @param {string} [xLanguage] 请求语言类型。默认en-us。 取值范围： - en-us - zh-cn
     * @param {number} [limit] 查询记录数，默认10。不能为负数，最小值为1，最大值为100。
     * @param {number} [offset] 索引位置，偏移量。默认0。从第一条数据偏移offset条数据后开始查询（偏移0条数据，表示从第一条数据开始查询），必须为数字，不能为负数。
     * @param {string} [userName] 数据库账户。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showClickHouseDatabaseUser(showClickHouseDatabaseUserRequest?: ShowClickHouseDatabaseUserRequest): Promise<ShowClickHouseDatabaseUserResponse> {
        const options = ParamCreater().showClickHouseDatabaseUser(showClickHouseDatabaseUserRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询实例LTS日志配置列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询实例LTS日志配置列表
     * @param {string} [xLanguage] 请求语言类型。默认en-us。 取值范围： - en-us - zh-cn
     * @param {string} [instanceId] ClickHouse实例ID，严格匹配UUID规则。
     * @param {string} [enterpriseProjectId] 企业项目id。
     * @param {string} [instanceName] 实例名称。
     * @param {number} [limit] 查询记录数，默认10。不能为负数，最小值为1，最大值为100。
     * @param {number} [offset] 索引位置，偏移量，默认0。从第一条数据偏移offset条数据后开始查询（偏移0条数据，表示从第一条数据开始查询），必须为数字，不能为负数。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showClickHouseLtsConfig(showClickHouseLtsConfigRequest?: ShowClickHouseLtsConfigRequest): Promise<ShowClickHouseLtsConfigResponse> {
        const options = ParamCreater().showClickHouseLtsConfig(showClickHouseLtsConfigRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取内核慢日志信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询慢日志
     * @param {string} instanceId ClickHouse实例ID，严格匹配UUID规则。
     * @param {ChSlowLogQueryRequestBody} showClickHouseSlowLogDetailRequestBody 获取慢日志请求体。
     * @param {string} [xLanguage] 请求语言类型。默认en-us。 取值范围： - en-us - zh-cn
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showClickHouseSlowLogDetail(showClickHouseSlowLogDetailRequest?: ShowClickHouseSlowLogDetailRequest): Promise<ShowClickHouseSlowLogDetailResponse> {
        const options = ParamCreater().showClickHouseSlowLogDetail(showClickHouseSlowLogDetailRequest);

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
     * @param {string} instanceId ClickHouse实例ID，严格匹配UUID规则。
     * @param {string} [xLanguage] 请求语言类型。默认en-us。 取值范围： - en-us - zh-cn
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showClickHouseSlowLogSensitiveStatus(showClickHouseSlowLogSensitiveStatusRequest?: ShowClickHouseSlowLogSensitiveStatusRequest): Promise<ShowClickHouseSlowLogSensitiveStatusResponse> {
        const options = ParamCreater().showClickHouseSlowLogSensitiveStatus(showClickHouseSlowLogSensitiveStatusRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询StarRocks数据库账户。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询数据库账户
     * @param {string} instanceId StarRocks实例ID，严格匹配UUID规则。
     * @param {number} limit 查询记录数，不能为负数，最小值为1，最大值为100。
     * @param {number} offset 索引位置，偏移量。从第一条数据偏移offset条数据后开始查询（偏移0条数据，表示从第一条数据开始查询），必须为数字，不能为负数。
     * @param {string} [userName] 数据库账户。
     * @param {string} [xLanguage] 请求语言类型。默认en-us。 取值范围： - en-us - zh-cn
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showStarRocksDatabaseUser(showStarRocksDatabaseUserRequest?: ShowStarRocksDatabaseUserRequest): Promise<ShowStarRocksDatabaseUserResponse> {
        const options = ParamCreater().showStarRocksDatabaseUser(showStarRocksDatabaseUserRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 按节点类型查询参数
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询参数
     * @param {string} instanceId 实例ID，严格匹配UUID规则。
     * @param {string} nodeType 节点类型。取值范围: - be - fe
     * @param {number} [offset] 索引位置，偏移量。从第一条数据偏移offset条数据后开始查询，默认为0（偏移0条数据，表示从第一条数据开始查询），必须为数字，不能为负数。索引位置，偏移量。从第一条数据偏移offset条数据后开始查询，默认为0（偏移0条数据，表示从第一条数据开始查询），必须为数字，不能为负数。
     * @param {number} [limit] 查询记录数。默认为100，不能为负数，最小值为1，最大值为100。
     * @param {string} [xLanguage] 请求语言类型。默认en-us。 取值范围： - en-us - zh-cn
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showStarrocksParams(showStarrocksParamsRequest?: ShowStarrocksParamsRequest): Promise<ShowStarrocksParamsResponse> {
        const options = ParamCreater().showStarrocksParams(showStarrocksParamsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * StarRocks实例开启行列分流。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary StarRocks实例开启行列分流
     * @param {string} instanceId StarRocks实例ID。
     * @param {UserSyncReq} syncStarRocksUsersRequestBody 规格变更请求。
     * @param {string} [xLanguage] 请求语言类型。默认en-us。 取值范围： - en-us - zh-cn
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public syncStarRocksUsers(syncStarRocksUsersRequest?: SyncStarRocksUsersRequest): Promise<SyncStarRocksUsersResponse> {
        const options = ParamCreater().syncStarRocksUsers(syncStarRocksUsersRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改数据同步。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改数据同步
     * @param {string} instanceId ClickHouse实例ID，严格匹配UUID规则。
     * @param {UpdateChDatabaseConfigRequestBody} updateClickHouseDataBaseConfigRequestBody 修改数据同步请求体。
     * @param {string} [xLanguage] 请求语言类型。默认en-us。 取值范围： - en-us - zh-cn
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateClickHouseDataBaseConfig(updateClickHouseDataBaseConfigRequest?: UpdateClickHouseDataBaseConfigRequest): Promise<UpdateClickHouseDataBaseConfigResponse> {
        const options = ParamCreater().updateClickHouseDataBaseConfig(updateClickHouseDataBaseConfigRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改数据库账号密码。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改数据库账号密码
     * @param {string} instanceId ClickHouse实例ID，严格匹配UUID规则。
     * @param {ClickHouseDatabaseUserPWinfo} updateClickHouseDatabaseUserPasswordRequestBody 修改数据库账号密码请求体。
     * @param {string} [xLanguage] 请求语言类型。默认en-us。 取值范围： - en-us - zh-cn
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateClickHouseDatabaseUserPassword(updateClickHouseDatabaseUserPasswordRequest?: UpdateClickHouseDatabaseUserPasswordRequest): Promise<UpdateClickHouseDatabaseUserPasswordResponse> {
        const options = ParamCreater().updateClickHouseDatabaseUserPassword(updateClickHouseDatabaseUserPasswordRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改数据库账号权限。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改数据库账号权限
     * @param {string} instanceId ClickHouse实例ID，严格匹配UUID规则。
     * @param {ClickHouseDatabaseUserPSinfo} updateClickHouseDatabaseUserPermissionRequestBody 修改数据库账号权限请求体。
     * @param {string} [xLanguage] 请求语言类型。默认en-us。 取值范围： - en-us - zh-cn
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateClickHouseDatabaseUserPermission(updateClickHouseDatabaseUserPermissionRequest?: UpdateClickHouseDatabaseUserPermissionRequest): Promise<UpdateClickHouseDatabaseUserPermissionResponse> {
        const options = ParamCreater().updateClickHouseDatabaseUserPermission(updateClickHouseDatabaseUserPermissionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量创建LTS日志配置。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量创建LTS日志配置
     * @param {CreateChLtsConfigRequestBody} updateClickHouseLtsConfigRequestBody 批量创建LTS日志配置请求体。
     * @param {string} [xLanguage] 请求语言类型。默认en-us。 取值范围： - en-us - zh-cn
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateClickHouseLtsConfig(updateClickHouseLtsConfigRequest?: UpdateClickHouseLtsConfigRequest): Promise<UpdateClickHouseLtsConfigResponse> {
        const options = ParamCreater().updateClickHouseLtsConfig(updateClickHouseLtsConfigRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改慢日志脱敏状态。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改慢日志脱敏状态
     * @param {string} instanceId ClickHouse实例ID，严格匹配UUID规则。
     * @param {ChSlowlogSensitiveResponse} updateClickHouseSlowLogSensitiveStatusRequestBody 修改慢日志脱敏状态请求体。
     * @param {string} [xLanguage] 请求语言类型。默认en-us。 取值范围： - en-us - zh-cn
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateClickHouseSlowLogSensitiveStatus(updateClickHouseSlowLogSensitiveStatusRequest?: UpdateClickHouseSlowLogSensitiveStatusRequest): Promise<UpdateClickHouseSlowLogSensitiveStatusResponse> {
        const options = ParamCreater().updateClickHouseSlowLogSensitiveStatus(updateClickHouseSlowLogSensitiveStatusRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改StarRocks数据库账号密码。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改数据库账号密码
     * @param {string} instanceId StarRocks实例ID，严格匹配UUID规则。
     * @param {StarRocksDatabaseUserPWinfo} updateStarRocksDatabaseUserPasswordRequestBody 修改数据库账号密码请求体。
     * @param {string} [xLanguage] 请求语言类型。默认en-us。 取值范围： - en-us - zh-cn
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateStarRocksDatabaseUserPassword(updateStarRocksDatabaseUserPasswordRequest?: UpdateStarRocksDatabaseUserPasswordRequest): Promise<UpdateStarRocksDatabaseUserPasswordResponse> {
        const options = ParamCreater().updateStarRocksDatabaseUserPassword(updateStarRocksDatabaseUserPasswordRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改StarRocks数据库账号权限。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改数据库账号权限
     * @param {string} instanceId StarRocks实例ID，严格匹配UUID规则。
     * @param {StarRocksDatabaseUserPSinfo} updateStarRocksDatabaseUserPermissionRequestBody 修改数据库账号权限。
     * @param {string} [xLanguage] 请求语言类型。默认en-us。 取值范围： - en-us - zh-cn
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateStarRocksDatabaseUserPermission(updateStarRocksDatabaseUserPermissionRequest?: UpdateStarRocksDatabaseUserPermissionRequest): Promise<UpdateStarRocksDatabaseUserPermissionResponse> {
        const options = ParamCreater().updateStarRocksDatabaseUserPermission(updateStarRocksDatabaseUserPermissionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 按节点类型修改节点参数
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改参数
     * @param {string} instanceId 实例ID，严格匹配UUID规则。
     * @param {UpdateParamInfo} updateStarrocksParamsRequestBody 参数修改信息
     * @param {string} [xLanguage] 请求语言类型。默认en-us。 取值范围： - en-us - zh-cn
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateStarrocksParams(updateStarrocksParamsRequest?: UpdateStarrocksParamsRequest): Promise<UpdateStarrocksParamsResponse> {
        const options = ParamCreater().updateStarrocksParams(updateStarrocksParamsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * StarRocks内核版本升级。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary StarRocks内核版本升级
     * @param {string} xLanguage **参数解释**：  请求语言类型。  **约束限制**：  不涉及。  **取值范围**：  - en-us - zh-cn  **默认值**：  en-us。
     * @param {string} instanceId **参数解释**：  StarRocks实例ID，严格匹配UUID规则。  **约束限制**：  不涉及。  **取值范围**：  只能由英文字母、数字组成，后缀为in17，且长度为36个字符。  **默认值**：  不涉及。
     * @param {UpgradeSrKernelVersionRequestV3} upgradeSrKernelVersionRequestBody **参数解释**：  StarRocks内核版本升级请求体。  **约束限制**：  不涉及。  **取值范围**：  不涉及。  **默认值**：  不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public upgradeSrKernelVersion(upgradeSrKernelVersionRequest?: UpgradeSrKernelVersionRequest): Promise<UpgradeSrKernelVersionResponse> {
        const options = ParamCreater().upgradeSrKernelVersion(upgradeSrKernelVersionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * 授予云数据库 TaurusDB实例数据库用户数据库权限。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        addDatabasePermission(addDatabasePermissionRequest?: AddDatabasePermissionRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/{instance_id}/db-users/privilege",
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

            if (addDatabasePermissionRequest !== null && addDatabasePermissionRequest !== undefined) {
                if (addDatabasePermissionRequest instanceof AddDatabasePermissionRequest) {
                    instanceId = addDatabasePermissionRequest.instanceId;
                    body = addDatabasePermissionRequest.body
                    xLanguage = addDatabasePermissionRequest.xLanguage;
                } else {
                    instanceId = addDatabasePermissionRequest['instance_id'];
                    body = addDatabasePermissionRequest['body'];
                    xLanguage = addDatabasePermissionRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling addDatabasePermission.');
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
         * 批量添加或删除指定实例的标签。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchTagAction(batchTagActionRequest?: BatchTagActionRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/{instance_id}/tags/action",
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

            if (batchTagActionRequest !== null && batchTagActionRequest !== undefined) {
                if (batchTagActionRequest instanceof BatchTagActionRequest) {
                    instanceId = batchTagActionRequest.instanceId;
                    body = batchTagActionRequest.body
                    xLanguage = batchTagActionRequest.xLanguage;
                } else {
                    instanceId = batchTagActionRequest['instance_id'];
                    body = batchTagActionRequest['body'];
                    xLanguage = batchTagActionRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling batchTagAction.');
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
         * 实例解绑弹性公网IP。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        cancelGaussMySqlInstanceEip(cancelGaussMySqlInstanceEipRequest?: CancelGaussMySqlInstanceEipRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/instances/{instance_id}/public-ips/unbind",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let xLanguage;

            if (cancelGaussMySqlInstanceEipRequest !== null && cancelGaussMySqlInstanceEipRequest !== undefined) {
                if (cancelGaussMySqlInstanceEipRequest instanceof CancelGaussMySqlInstanceEipRequest) {
                    instanceId = cancelGaussMySqlInstanceEipRequest.instanceId;
                    xLanguage = cancelGaussMySqlInstanceEipRequest.xLanguage;
                } else {
                    instanceId = cancelGaussMySqlInstanceEipRequest['instance_id'];
                    xLanguage = cancelGaussMySqlInstanceEipRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling cancelGaussMySqlInstanceEip.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.pathParams = { 'instance_id': instanceId, };
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
                method: "DELETE",
                url: "/v3/{project_id}/scheduled-jobs",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xLanguage;

            if (cancelScheduleTaskRequest !== null && cancelScheduleTaskRequest !== undefined) {
                if (cancelScheduleTaskRequest instanceof CancelScheduleTaskRequest) {
                    body = cancelScheduleTaskRequest.body
                    xLanguage = cancelScheduleTaskRequest.xLanguage;
                } else {
                    body = cancelScheduleTaskRequest['body'];
                    xLanguage = cancelScheduleTaskRequest['X-Language'];
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
         * 变更数据库实例的规格。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        changeGaussMySqlInstanceSpecification(changeGaussMySqlInstanceSpecificationRequest?: ChangeGaussMySqlInstanceSpecificationRequest) {
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

            if (changeGaussMySqlInstanceSpecificationRequest !== null && changeGaussMySqlInstanceSpecificationRequest !== undefined) {
                if (changeGaussMySqlInstanceSpecificationRequest instanceof ChangeGaussMySqlInstanceSpecificationRequest) {
                    instanceId = changeGaussMySqlInstanceSpecificationRequest.instanceId;
                    body = changeGaussMySqlInstanceSpecificationRequest.body
                    xLanguage = changeGaussMySqlInstanceSpecificationRequest.xLanguage;
                } else {
                    instanceId = changeGaussMySqlInstanceSpecificationRequest['instance_id'];
                    body = changeGaussMySqlInstanceSpecificationRequest['body'];
                    xLanguage = changeGaussMySqlInstanceSpecificationRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling changeGaussMySqlInstanceSpecification.');
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
         * 数据库代理规格变更。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        changeGaussMySqlProxySpecification(changeGaussMySqlProxySpecificationRequest?: ChangeGaussMySqlProxySpecificationRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/instances/{instance_id}/proxy/{proxy_id}/flavor",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let proxyId;
            
            let xLanguage;

            if (changeGaussMySqlProxySpecificationRequest !== null && changeGaussMySqlProxySpecificationRequest !== undefined) {
                if (changeGaussMySqlProxySpecificationRequest instanceof ChangeGaussMySqlProxySpecificationRequest) {
                    instanceId = changeGaussMySqlProxySpecificationRequest.instanceId;
                    proxyId = changeGaussMySqlProxySpecificationRequest.proxyId;
                    body = changeGaussMySqlProxySpecificationRequest.body
                    xLanguage = changeGaussMySqlProxySpecificationRequest.xLanguage;
                } else {
                    instanceId = changeGaussMySqlProxySpecificationRequest['instance_id'];
                    proxyId = changeGaussMySqlProxySpecificationRequest['proxy_id'];
                    body = changeGaussMySqlProxySpecificationRequest['body'];
                    xLanguage = changeGaussMySqlProxySpecificationRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling changeGaussMySqlProxySpecification.');
            }
            if (proxyId === null || proxyId === undefined) {
            throw new RequiredError('proxyId','Required parameter proxyId was null or undefined when calling changeGaussMySqlProxySpecification.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId,'proxy_id': proxyId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 资源预校验。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        checkResource(checkResourceRequest?: CheckResourceRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/resource-check",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xLanguage;

            if (checkResourceRequest !== null && checkResourceRequest !== undefined) {
                if (checkResourceRequest instanceof CheckResourceRequest) {
                    body = checkResourceRequest.body
                    xLanguage = checkResourceRequest.xLanguage;
                } else {
                    body = checkResourceRequest['body'];
                    xLanguage = checkResourceRequest['X-Language'];
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
         * 复制参数组。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        copyConfigurations(copyConfigurationsRequest?: CopyConfigurationsRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/configurations/{configuration_id}/copy",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let configurationId;
            
            let xLanguage;

            if (copyConfigurationsRequest !== null && copyConfigurationsRequest !== undefined) {
                if (copyConfigurationsRequest instanceof CopyConfigurationsRequest) {
                    configurationId = copyConfigurationsRequest.configurationId;
                    body = copyConfigurationsRequest.body
                    xLanguage = copyConfigurationsRequest.xLanguage;
                } else {
                    configurationId = copyConfigurationsRequest['configuration_id'];
                    body = copyConfigurationsRequest['body'];
                    xLanguage = copyConfigurationsRequest['X-Language'];
                }
            }

        
            if (configurationId === null || configurationId === undefined) {
            throw new RequiredError('configurationId','Required parameter configurationId was null or undefined when calling copyConfigurations.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'configuration_id': configurationId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 复制实例参数组。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        copyInstanceConfigurations(copyInstanceConfigurationsRequest?: CopyInstanceConfigurationsRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/{instance_id}/configurations/{configuration_id}/copy",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let configurationId;
            
            let xLanguage;

            if (copyInstanceConfigurationsRequest !== null && copyInstanceConfigurationsRequest !== undefined) {
                if (copyInstanceConfigurationsRequest instanceof CopyInstanceConfigurationsRequest) {
                    instanceId = copyInstanceConfigurationsRequest.instanceId;
                    configurationId = copyInstanceConfigurationsRequest.configurationId;
                    body = copyInstanceConfigurationsRequest.body
                    xLanguage = copyInstanceConfigurationsRequest.xLanguage;
                } else {
                    instanceId = copyInstanceConfigurationsRequest['instance_id'];
                    configurationId = copyInstanceConfigurationsRequest['configuration_id'];
                    body = copyInstanceConfigurationsRequest['body'];
                    xLanguage = copyInstanceConfigurationsRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling copyInstanceConfigurations.');
            }
            if (configurationId === null || configurationId === undefined) {
            throw new RequiredError('configurationId','Required parameter configurationId was null or undefined when calling copyInstanceConfigurations.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId,'configuration_id': configurationId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 设置访问控制规则。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createAccessControl(createAccessControlRequest?: CreateAccessControlRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/{instance_id}/proxy/{proxy_id}/access-control",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let proxyId;
            
            let xLanguage;

            if (createAccessControlRequest !== null && createAccessControlRequest !== undefined) {
                if (createAccessControlRequest instanceof CreateAccessControlRequest) {
                    instanceId = createAccessControlRequest.instanceId;
                    proxyId = createAccessControlRequest.proxyId;
                    body = createAccessControlRequest.body
                    xLanguage = createAccessControlRequest.xLanguage;
                } else {
                    instanceId = createAccessControlRequest['instance_id'];
                    proxyId = createAccessControlRequest['proxy_id'];
                    body = createAccessControlRequest['body'];
                    xLanguage = createAccessControlRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling createAccessControl.');
            }
            if (proxyId === null || proxyId === undefined) {
            throw new RequiredError('proxyId','Required parameter proxyId was null or undefined when calling createAccessControl.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId,'proxy_id': proxyId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建手动备份。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createGaussMySqlBackup(createGaussMySqlBackupRequest?: CreateGaussMySqlBackupRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/backups/create",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xLanguage;

            if (createGaussMySqlBackupRequest !== null && createGaussMySqlBackupRequest !== undefined) {
                if (createGaussMySqlBackupRequest instanceof CreateGaussMySqlBackupRequest) {
                    body = createGaussMySqlBackupRequest.body
                    xLanguage = createGaussMySqlBackupRequest.xLanguage;
                } else {
                    body = createGaussMySqlBackupRequest['body'];
                    xLanguage = createGaussMySqlBackupRequest['X-Language'];
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
         * 创建参数模板信息，包含参数模板名称、描述、数据库版本信息、参数值。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createGaussMySqlConfiguration(createGaussMySqlConfigurationRequest?: CreateGaussMySqlConfigurationRequest) {
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

            if (createGaussMySqlConfigurationRequest !== null && createGaussMySqlConfigurationRequest !== undefined) {
                if (createGaussMySqlConfigurationRequest instanceof CreateGaussMySqlConfigurationRequest) {
                    body = createGaussMySqlConfigurationRequest.body
                    xLanguage = createGaussMySqlConfigurationRequest.xLanguage;
                } else {
                    body = createGaussMySqlConfigurationRequest['body'];
                    xLanguage = createGaussMySqlConfigurationRequest['X-Language'];
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
         * 创建云数据库 TaurusDB实例数据库。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createGaussMySqlDatabase(createGaussMySqlDatabaseRequest?: CreateGaussMySqlDatabaseRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/{instance_id}/databases",
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

            if (createGaussMySqlDatabaseRequest !== null && createGaussMySqlDatabaseRequest !== undefined) {
                if (createGaussMySqlDatabaseRequest instanceof CreateGaussMySqlDatabaseRequest) {
                    instanceId = createGaussMySqlDatabaseRequest.instanceId;
                    body = createGaussMySqlDatabaseRequest.body
                    xLanguage = createGaussMySqlDatabaseRequest.xLanguage;
                } else {
                    instanceId = createGaussMySqlDatabaseRequest['instance_id'];
                    body = createGaussMySqlDatabaseRequest['body'];
                    xLanguage = createGaussMySqlDatabaseRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling createGaussMySqlDatabase.');
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
         * 创建云数据库TaurusDB实例数据库用户。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createGaussMySqlDatabaseUser(createGaussMySqlDatabaseUserRequest?: CreateGaussMySqlDatabaseUserRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/{instance_id}/db-users",
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

            if (createGaussMySqlDatabaseUserRequest !== null && createGaussMySqlDatabaseUserRequest !== undefined) {
                if (createGaussMySqlDatabaseUserRequest instanceof CreateGaussMySqlDatabaseUserRequest) {
                    instanceId = createGaussMySqlDatabaseUserRequest.instanceId;
                    body = createGaussMySqlDatabaseUserRequest.body
                    xLanguage = createGaussMySqlDatabaseUserRequest.xLanguage;
                } else {
                    instanceId = createGaussMySqlDatabaseUserRequest['instance_id'];
                    body = createGaussMySqlDatabaseUserRequest['body'];
                    xLanguage = createGaussMySqlDatabaseUserRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling createGaussMySqlDatabaseUser.');
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
         * 创建云数据库TaurusDB实例。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createGaussMySqlInstance(createGaussMySqlInstanceRequest?: CreateGaussMySqlInstanceRequest) {
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

            if (createGaussMySqlInstanceRequest !== null && createGaussMySqlInstanceRequest !== undefined) {
                if (createGaussMySqlInstanceRequest instanceof CreateGaussMySqlInstanceRequest) {
                    body = createGaussMySqlInstanceRequest.body
                    xLanguage = createGaussMySqlInstanceRequest.xLanguage;
                } else {
                    body = createGaussMySqlInstanceRequest['body'];
                    xLanguage = createGaussMySqlInstanceRequest['X-Language'];
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
         * 开启数据库代理，只支持ELB模式。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createGaussMySqlProxy(createGaussMySqlProxyRequest?: CreateGaussMySqlProxyRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/{instance_id}/proxy",
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

            if (createGaussMySqlProxyRequest !== null && createGaussMySqlProxyRequest !== undefined) {
                if (createGaussMySqlProxyRequest instanceof CreateGaussMySqlProxyRequest) {
                    instanceId = createGaussMySqlProxyRequest.instanceId;
                    xLanguage = createGaussMySqlProxyRequest.xLanguage;
                    body = createGaussMySqlProxyRequest.body
                } else {
                    instanceId = createGaussMySqlProxyRequest['instance_id'];
                    xLanguage = createGaussMySqlProxyRequest['X-Language'];
                    body = createGaussMySqlProxyRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling createGaussMySqlProxy.');
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
         * 创建只读节点。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createGaussMySqlReadonlyNode(createGaussMySqlReadonlyNodeRequest?: CreateGaussMySqlReadonlyNodeRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/{instance_id}/nodes/enlarge",
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

            if (createGaussMySqlReadonlyNodeRequest !== null && createGaussMySqlReadonlyNodeRequest !== undefined) {
                if (createGaussMySqlReadonlyNodeRequest instanceof CreateGaussMySqlReadonlyNodeRequest) {
                    instanceId = createGaussMySqlReadonlyNodeRequest.instanceId;
                    body = createGaussMySqlReadonlyNodeRequest.body
                    xLanguage = createGaussMySqlReadonlyNodeRequest.xLanguage;
                } else {
                    instanceId = createGaussMySqlReadonlyNodeRequest['instance_id'];
                    body = createGaussMySqlReadonlyNodeRequest['body'];
                    xLanguage = createGaussMySqlReadonlyNodeRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling createGaussMySqlReadonlyNode.');
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
         * 申请内网域名。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createGaussMysqlDns(createGaussMysqlDnsRequest?: CreateGaussMysqlDnsRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/{instance_id}/dns",
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

            if (createGaussMysqlDnsRequest !== null && createGaussMysqlDnsRequest !== undefined) {
                if (createGaussMysqlDnsRequest instanceof CreateGaussMysqlDnsRequest) {
                    instanceId = createGaussMysqlDnsRequest.instanceId;
                    body = createGaussMysqlDnsRequest.body
                    xLanguage = createGaussMysqlDnsRequest.xLanguage;
                } else {
                    instanceId = createGaussMysqlDnsRequest['instance_id'];
                    body = createGaussMysqlDnsRequest['body'];
                    xLanguage = createGaussMysqlDnsRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling createGaussMysqlDns.');
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
         * 批量创建LTS日志配置
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createLtsConfigs(createLtsConfigsRequest?: CreateLtsConfigsRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/logs/lts-configs",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xLanguage;

            if (createLtsConfigsRequest !== null && createLtsConfigsRequest !== undefined) {
                if (createLtsConfigsRequest instanceof CreateLtsConfigsRequest) {
                    body = createLtsConfigsRequest.body
                    xLanguage = createLtsConfigsRequest.xLanguage;
                } else {
                    body = createLtsConfigsRequest['body'];
                    xLanguage = createLtsConfigsRequest['X-Language'];
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
         * 表级时间点恢复。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createRestoreTables(createRestoreTablesRequest?: CreateRestoreTablesRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/{instance_id}/backups/restore/tables",
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

            if (createRestoreTablesRequest !== null && createRestoreTablesRequest !== undefined) {
                if (createRestoreTablesRequest instanceof CreateRestoreTablesRequest) {
                    instanceId = createRestoreTablesRequest.instanceId;
                    body = createRestoreTablesRequest.body
                    xLanguage = createRestoreTablesRequest.xLanguage;
                } else {
                    instanceId = createRestoreTablesRequest['instance_id'];
                    body = createRestoreTablesRequest['body'];
                    xLanguage = createRestoreTablesRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling createRestoreTables.');
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
         * 删除云数据库 TaurusDB实例数据库用户的数据库权限。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteDatabasePermission(deleteDatabasePermissionRequest?: DeleteDatabasePermissionRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{project_id}/instances/{instance_id}/db-users/privilege",
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

            if (deleteDatabasePermissionRequest !== null && deleteDatabasePermissionRequest !== undefined) {
                if (deleteDatabasePermissionRequest instanceof DeleteDatabasePermissionRequest) {
                    instanceId = deleteDatabasePermissionRequest.instanceId;
                    body = deleteDatabasePermissionRequest.body
                    xLanguage = deleteDatabasePermissionRequest.xLanguage;
                } else {
                    instanceId = deleteDatabasePermissionRequest['instance_id'];
                    body = deleteDatabasePermissionRequest['body'];
                    xLanguage = deleteDatabasePermissionRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling deleteDatabasePermission.');
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
         * 删除手动备份。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteGaussMySqlBackup(deleteGaussMySqlBackupRequest?: DeleteGaussMySqlBackupRequest) {
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

            if (deleteGaussMySqlBackupRequest !== null && deleteGaussMySqlBackupRequest !== undefined) {
                if (deleteGaussMySqlBackupRequest instanceof DeleteGaussMySqlBackupRequest) {
                    backupId = deleteGaussMySqlBackupRequest.backupId;
                    xLanguage = deleteGaussMySqlBackupRequest.xLanguage;
                } else {
                    backupId = deleteGaussMySqlBackupRequest['backup_id'];
                    xLanguage = deleteGaussMySqlBackupRequest['X-Language'];
                }
            }

        
            if (backupId === null || backupId === undefined) {
            throw new RequiredError('backupId','Required parameter backupId was null or undefined when calling deleteGaussMySqlBackup.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
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
        deleteGaussMySqlConfiguration(deleteGaussMySqlConfigurationRequest?: DeleteGaussMySqlConfigurationRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{project_id}/configurations/{configuration_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let configurationId;
            
            let xLanguage;

            if (deleteGaussMySqlConfigurationRequest !== null && deleteGaussMySqlConfigurationRequest !== undefined) {
                if (deleteGaussMySqlConfigurationRequest instanceof DeleteGaussMySqlConfigurationRequest) {
                    configurationId = deleteGaussMySqlConfigurationRequest.configurationId;
                    xLanguage = deleteGaussMySqlConfigurationRequest.xLanguage;
                } else {
                    configurationId = deleteGaussMySqlConfigurationRequest['configuration_id'];
                    xLanguage = deleteGaussMySqlConfigurationRequest['X-Language'];
                }
            }

        
            if (configurationId === null || configurationId === undefined) {
            throw new RequiredError('configurationId','Required parameter configurationId was null or undefined when calling deleteGaussMySqlConfiguration.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.pathParams = { 'configuration_id': configurationId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除云数据库 TaurusDB实例数据库。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteGaussMySqlDatabase(deleteGaussMySqlDatabaseRequest?: DeleteGaussMySqlDatabaseRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{project_id}/instances/{instance_id}/databases",
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

            if (deleteGaussMySqlDatabaseRequest !== null && deleteGaussMySqlDatabaseRequest !== undefined) {
                if (deleteGaussMySqlDatabaseRequest instanceof DeleteGaussMySqlDatabaseRequest) {
                    instanceId = deleteGaussMySqlDatabaseRequest.instanceId;
                    body = deleteGaussMySqlDatabaseRequest.body
                    xLanguage = deleteGaussMySqlDatabaseRequest.xLanguage;
                } else {
                    instanceId = deleteGaussMySqlDatabaseRequest['instance_id'];
                    body = deleteGaussMySqlDatabaseRequest['body'];
                    xLanguage = deleteGaussMySqlDatabaseRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling deleteGaussMySqlDatabase.');
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
         * 删除云数据库 TaurusDB实例数据库用户。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteGaussMySqlDatabaseUser(deleteGaussMySqlDatabaseUserRequest?: DeleteGaussMySqlDatabaseUserRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{project_id}/instances/{instance_id}/db-users",
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

            if (deleteGaussMySqlDatabaseUserRequest !== null && deleteGaussMySqlDatabaseUserRequest !== undefined) {
                if (deleteGaussMySqlDatabaseUserRequest instanceof DeleteGaussMySqlDatabaseUserRequest) {
                    instanceId = deleteGaussMySqlDatabaseUserRequest.instanceId;
                    body = deleteGaussMySqlDatabaseUserRequest.body
                    xLanguage = deleteGaussMySqlDatabaseUserRequest.xLanguage;
                } else {
                    instanceId = deleteGaussMySqlDatabaseUserRequest['instance_id'];
                    body = deleteGaussMySqlDatabaseUserRequest['body'];
                    xLanguage = deleteGaussMySqlDatabaseUserRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling deleteGaussMySqlDatabaseUser.');
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
         * 删除/退订数据库实例。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteGaussMySqlInstance(deleteGaussMySqlInstanceRequest?: DeleteGaussMySqlInstanceRequest) {
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

            if (deleteGaussMySqlInstanceRequest !== null && deleteGaussMySqlInstanceRequest !== undefined) {
                if (deleteGaussMySqlInstanceRequest instanceof DeleteGaussMySqlInstanceRequest) {
                    instanceId = deleteGaussMySqlInstanceRequest.instanceId;
                    xLanguage = deleteGaussMySqlInstanceRequest.xLanguage;
                } else {
                    instanceId = deleteGaussMySqlInstanceRequest['instance_id'];
                    xLanguage = deleteGaussMySqlInstanceRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling deleteGaussMySqlInstance.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 关闭数据库代理。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteGaussMySqlProxy(deleteGaussMySqlProxyRequest?: DeleteGaussMySqlProxyRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{project_id}/instances/{instance_id}/proxy",
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

            if (deleteGaussMySqlProxyRequest !== null && deleteGaussMySqlProxyRequest !== undefined) {
                if (deleteGaussMySqlProxyRequest instanceof DeleteGaussMySqlProxyRequest) {
                    instanceId = deleteGaussMySqlProxyRequest.instanceId;
                    xLanguage = deleteGaussMySqlProxyRequest.xLanguage;
                    body = deleteGaussMySqlProxyRequest.body
                } else {
                    instanceId = deleteGaussMySqlProxyRequest['instance_id'];
                    xLanguage = deleteGaussMySqlProxyRequest['X-Language'];
                    body = deleteGaussMySqlProxyRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling deleteGaussMySqlProxy.');
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
         * 删除/退订实例的只读节点。多可用区模式删除/退订只读节点时，要保证删除/退订后，剩余的只读节点和主节点在不同的可用区中，否则无法删除/退订该只读节点。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteGaussMySqlReadonlyNode(deleteGaussMySqlReadonlyNodeRequest?: DeleteGaussMySqlReadonlyNodeRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{project_id}/instances/{instance_id}/nodes/{node_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let nodeId;
            
            let xLanguage;

            if (deleteGaussMySqlReadonlyNodeRequest !== null && deleteGaussMySqlReadonlyNodeRequest !== undefined) {
                if (deleteGaussMySqlReadonlyNodeRequest instanceof DeleteGaussMySqlReadonlyNodeRequest) {
                    instanceId = deleteGaussMySqlReadonlyNodeRequest.instanceId;
                    nodeId = deleteGaussMySqlReadonlyNodeRequest.nodeId;
                    xLanguage = deleteGaussMySqlReadonlyNodeRequest.xLanguage;
                } else {
                    instanceId = deleteGaussMySqlReadonlyNodeRequest['instance_id'];
                    nodeId = deleteGaussMySqlReadonlyNodeRequest['node_id'];
                    xLanguage = deleteGaussMySqlReadonlyNodeRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling deleteGaussMySqlReadonlyNode.');
            }
            if (nodeId === null || nodeId === undefined) {
            throw new RequiredError('nodeId','Required parameter nodeId was null or undefined when calling deleteGaussMySqlReadonlyNode.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.pathParams = { 'instance_id': instanceId,'node_id': nodeId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 批量删除LTS日志配置
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteLtsConfigs(deleteLtsConfigsRequest?: DeleteLtsConfigsRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{project_id}/logs/lts-configs",
                contentType: "application/json;charset=UTF-8",
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
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除定时任务。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteScheduleTasK(deleteScheduleTasKRequest?: DeleteScheduleTasKRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{project_id}/instance/{instance_id}/scheduled-jobs",
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

            if (deleteScheduleTasKRequest !== null && deleteScheduleTasKRequest !== undefined) {
                if (deleteScheduleTasKRequest instanceof DeleteScheduleTasKRequest) {
                    instanceId = deleteScheduleTasKRequest.instanceId;
                    body = deleteScheduleTasKRequest.body
                    xLanguage = deleteScheduleTasKRequest.xLanguage;
                } else {
                    instanceId = deleteScheduleTasKRequest['instance_id'];
                    body = deleteScheduleTasKRequest['body'];
                    xLanguage = deleteScheduleTasKRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling deleteScheduleTasK.');
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
         * 删除SQL限流规则。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteSqlFilterRule(deleteSqlFilterRuleRequest?: DeleteSqlFilterRuleRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{project_id}/instances/{instance_id}/sql-filter/rules",
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

            if (deleteSqlFilterRuleRequest !== null && deleteSqlFilterRuleRequest !== undefined) {
                if (deleteSqlFilterRuleRequest instanceof DeleteSqlFilterRuleRequest) {
                    instanceId = deleteSqlFilterRuleRequest.instanceId;
                    body = deleteSqlFilterRuleRequest.body
                    xLanguage = deleteSqlFilterRuleRequest.xLanguage;
                } else {
                    instanceId = deleteSqlFilterRuleRequest['instance_id'];
                    body = deleteSqlFilterRuleRequest['body'];
                    xLanguage = deleteSqlFilterRuleRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling deleteSqlFilterRule.');
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
         * 删除指定任务记录。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteTaskRecord(deleteTaskRecordRequest?: DeleteTaskRecordRequest) {
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

            if (deleteTaskRecordRequest !== null && deleteTaskRecordRequest !== undefined) {
                if (deleteTaskRecordRequest instanceof DeleteTaskRecordRequest) {
                    jobId = deleteTaskRecordRequest.jobId;
                    xLanguage = deleteTaskRecordRequest.xLanguage;
                } else {
                    jobId = deleteTaskRecordRequest['job_id'];
                    xLanguage = deleteTaskRecordRequest['X-Language'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling deleteTaskRecord.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.pathParams = { 'job_id': jobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 终止TaurusDB节点中指定的用户会话线程，执行时将排除传入的内部会话线程。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteTaurusDbNodeProcesses(deleteTaurusDbNodeProcessesRequest?: DeleteTaurusDbNodeProcessesRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{project_id}/instances/{instance_id}/nodes/{node_id}/processes",
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

            if (deleteTaurusDbNodeProcessesRequest !== null && deleteTaurusDbNodeProcessesRequest !== undefined) {
                if (deleteTaurusDbNodeProcessesRequest instanceof DeleteTaurusDbNodeProcessesRequest) {
                    instanceId = deleteTaurusDbNodeProcessesRequest.instanceId;
                    nodeId = deleteTaurusDbNodeProcessesRequest.nodeId;
                    body = deleteTaurusDbNodeProcessesRequest.body
                    xLanguage = deleteTaurusDbNodeProcessesRequest.xLanguage;
                } else {
                    instanceId = deleteTaurusDbNodeProcessesRequest['instance_id'];
                    nodeId = deleteTaurusDbNodeProcessesRequest['node_id'];
                    body = deleteTaurusDbNodeProcessesRequest['body'];
                    xLanguage = deleteTaurusDbNodeProcessesRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling deleteTaurusDbNodeProcesses.');
            }
            if (nodeId === null || nodeId === undefined) {
            throw new RequiredError('nodeId','Required parameter nodeId was null or undefined when calling deleteTaurusDbNodeProcesses.');
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
         * 查询实例是否开启备份加密功能。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        describeBackupEncryptStatus(describeBackupEncryptStatusRequest?: DescribeBackupEncryptStatusRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/{instance_id}/backups/encryption",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let xLanguage;

            if (describeBackupEncryptStatusRequest !== null && describeBackupEncryptStatusRequest !== undefined) {
                if (describeBackupEncryptStatusRequest instanceof DescribeBackupEncryptStatusRequest) {
                    instanceId = describeBackupEncryptStatusRequest.instanceId;
                    xLanguage = describeBackupEncryptStatusRequest.xLanguage;
                } else {
                    instanceId = describeBackupEncryptStatusRequest['instance_id'];
                    xLanguage = describeBackupEncryptStatusRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling describeBackupEncryptStatus.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取慢日志下载链接
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        downloadSlowLogFile(downloadSlowLogFileRequest?: DownloadSlowLogFileRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/{instance_id}/{node_id}/slowlog-download",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let nodeId;
            
            let xLanguage;

            if (downloadSlowLogFileRequest !== null && downloadSlowLogFileRequest !== undefined) {
                if (downloadSlowLogFileRequest instanceof DownloadSlowLogFileRequest) {
                    instanceId = downloadSlowLogFileRequest.instanceId;
                    nodeId = downloadSlowLogFileRequest.nodeId;
                    xLanguage = downloadSlowLogFileRequest.xLanguage;
                } else {
                    instanceId = downloadSlowLogFileRequest['instance_id'];
                    nodeId = downloadSlowLogFileRequest['node_id'];
                    xLanguage = downloadSlowLogFileRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling downloadSlowLogFile.');
            }
            if (nodeId === null || nodeId === undefined) {
            throw new RequiredError('nodeId','Required parameter nodeId was null or undefined when calling downloadSlowLogFile.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.pathParams = { 'instance_id': instanceId,'node_id': nodeId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 包周期存储扩容。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        expandGaussMySqlInstanceVolume(expandGaussMySqlInstanceVolumeRequest?: ExpandGaussMySqlInstanceVolumeRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/{instance_id}/volume/extend",
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

            if (expandGaussMySqlInstanceVolumeRequest !== null && expandGaussMySqlInstanceVolumeRequest !== undefined) {
                if (expandGaussMySqlInstanceVolumeRequest instanceof ExpandGaussMySqlInstanceVolumeRequest) {
                    instanceId = expandGaussMySqlInstanceVolumeRequest.instanceId;
                    body = expandGaussMySqlInstanceVolumeRequest.body
                    xLanguage = expandGaussMySqlInstanceVolumeRequest.xLanguage;
                } else {
                    instanceId = expandGaussMySqlInstanceVolumeRequest['instance_id'];
                    body = expandGaussMySqlInstanceVolumeRequest['body'];
                    xLanguage = expandGaussMySqlInstanceVolumeRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling expandGaussMySqlInstanceVolume.');
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
         * 扩容数据库代理节点的数量。
         * DeC专属云账号暂不支持数据库代理。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        expandGaussMySqlProxy(expandGaussMySqlProxyRequest?: ExpandGaussMySqlProxyRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/{instance_id}/proxy/enlarge",
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

            if (expandGaussMySqlProxyRequest !== null && expandGaussMySqlProxyRequest !== undefined) {
                if (expandGaussMySqlProxyRequest instanceof ExpandGaussMySqlProxyRequest) {
                    instanceId = expandGaussMySqlProxyRequest.instanceId;
                    body = expandGaussMySqlProxyRequest.body
                    xLanguage = expandGaussMySqlProxyRequest.xLanguage;
                } else {
                    instanceId = expandGaussMySqlProxyRequest['instance_id'];
                    body = expandGaussMySqlProxyRequest['body'];
                    xLanguage = expandGaussMySqlProxyRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling expandGaussMySqlProxy.');
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
         * 用户手动进行主备倒换。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        invokeGaussMySqlInstanceSwitchOver(invokeGaussMySqlInstanceSwitchOverRequest?: InvokeGaussMySqlInstanceSwitchOverRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/instances/{instance_id}/switchover",
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

            if (invokeGaussMySqlInstanceSwitchOverRequest !== null && invokeGaussMySqlInstanceSwitchOverRequest !== undefined) {
                if (invokeGaussMySqlInstanceSwitchOverRequest instanceof InvokeGaussMySqlInstanceSwitchOverRequest) {
                    instanceId = invokeGaussMySqlInstanceSwitchOverRequest.instanceId;
                    body = invokeGaussMySqlInstanceSwitchOverRequest.body
                    xLanguage = invokeGaussMySqlInstanceSwitchOverRequest.xLanguage;
                } else {
                    instanceId = invokeGaussMySqlInstanceSwitchOverRequest['instance_id'];
                    body = invokeGaussMySqlInstanceSwitchOverRequest['body'];
                    xLanguage = invokeGaussMySqlInstanceSwitchOverRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling invokeGaussMySqlInstanceSwitchOver.');
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
         * 获取全量SQL的临时下载链接。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAuditLogDownloadLink(listAuditLogDownloadLinkRequest?: ListAuditLogDownloadLinkRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instance/{instance_id}/auditlog/download-link",
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
            
            let lastFileName;
            
            let limit;

            if (listAuditLogDownloadLinkRequest !== null && listAuditLogDownloadLinkRequest !== undefined) {
                if (listAuditLogDownloadLinkRequest instanceof ListAuditLogDownloadLinkRequest) {
                    instanceId = listAuditLogDownloadLinkRequest.instanceId;
                    startTime = listAuditLogDownloadLinkRequest.startTime;
                    endTime = listAuditLogDownloadLinkRequest.endTime;
                    xLanguage = listAuditLogDownloadLinkRequest.xLanguage;
                    nodeId = listAuditLogDownloadLinkRequest.nodeId;
                    lastFileName = listAuditLogDownloadLinkRequest.lastFileName;
                    limit = listAuditLogDownloadLinkRequest.limit;
                } else {
                    instanceId = listAuditLogDownloadLinkRequest['instance_id'];
                    startTime = listAuditLogDownloadLinkRequest['start_time'];
                    endTime = listAuditLogDownloadLinkRequest['end_time'];
                    xLanguage = listAuditLogDownloadLinkRequest['X-Language'];
                    nodeId = listAuditLogDownloadLinkRequest['node_id'];
                    lastFileName = listAuditLogDownloadLinkRequest['last_file_name'];
                    limit = listAuditLogDownloadLinkRequest['limit'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listAuditLogDownloadLink.');
            }
            if (startTime === null || startTime === undefined) {
                throw new RequiredError('startTime','Required parameter startTime was null or undefined when calling listAuditLogDownloadLink.');
            }
            if (startTime !== null && startTime !== undefined) {
                localVarQueryParameter['start_time'] = startTime;
            }
            if (endTime === null || endTime === undefined) {
                throw new RequiredError('endTime','Required parameter endTime was null or undefined when calling listAuditLogDownloadLink.');
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }
            if (nodeId !== null && nodeId !== undefined) {
                localVarQueryParameter['node_id'] = nodeId;
            }
            if (lastFileName !== null && lastFileName !== undefined) {
                localVarQueryParameter['last_file_name'] = lastFileName;
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
         * 比较两个参数模板之间的差异。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listConfigurationsDifferences(listConfigurationsDifferencesRequest?: ListConfigurationsDifferencesRequest) {
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

            if (listConfigurationsDifferencesRequest !== null && listConfigurationsDifferencesRequest !== undefined) {
                if (listConfigurationsDifferencesRequest instanceof ListConfigurationsDifferencesRequest) {
                    body = listConfigurationsDifferencesRequest.body
                    xLanguage = listConfigurationsDifferencesRequest.xLanguage;
                } else {
                    body = listConfigurationsDifferencesRequest['body'];
                    xLanguage = listConfigurationsDifferencesRequest['X-Language'];
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
         * 查询指定参数模板可被应用的实例。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listConfigurationsInstances(listConfigurationsInstancesRequest?: ListConfigurationsInstancesRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/configurations/{configuration_id}/applicable-instances",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let configurationId;
            
            let xLanguage;
            
            let offset;
            
            let limit;

            if (listConfigurationsInstancesRequest !== null && listConfigurationsInstancesRequest !== undefined) {
                if (listConfigurationsInstancesRequest instanceof ListConfigurationsInstancesRequest) {
                    configurationId = listConfigurationsInstancesRequest.configurationId;
                    xLanguage = listConfigurationsInstancesRequest.xLanguage;
                    offset = listConfigurationsInstancesRequest.offset;
                    limit = listConfigurationsInstancesRequest.limit;
                } else {
                    configurationId = listConfigurationsInstancesRequest['configuration_id'];
                    xLanguage = listConfigurationsInstancesRequest['X-Language'];
                    offset = listConfigurationsInstancesRequest['offset'];
                    limit = listConfigurationsInstancesRequest['limit'];
                }
            }

        
            if (configurationId === null || configurationId === undefined) {
            throw new RequiredError('configurationId','Required parameter configurationId was null or undefined when calling listConfigurationsInstances.');
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
            options.pathParams = { 'configuration_id': configurationId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询企业项目。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listEnterpriseProjects(listEnterpriseProjectsRequest?: ListEnterpriseProjectsRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/enterprise-projects",
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

            if (listEnterpriseProjectsRequest !== null && listEnterpriseProjectsRequest !== undefined) {
                if (listEnterpriseProjectsRequest instanceof ListEnterpriseProjectsRequest) {
                    xLanguage = listEnterpriseProjectsRequest.xLanguage;
                    offset = listEnterpriseProjectsRequest.offset;
                    limit = listEnterpriseProjectsRequest.limit;
                } else {
                    xLanguage = listEnterpriseProjectsRequest['X-Language'];
                    offset = listEnterpriseProjectsRequest['offset'];
                    limit = listEnterpriseProjectsRequest['limit'];
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
        listGaussMySqlConfigurations(listGaussMySqlConfigurationsRequest?: ListGaussMySqlConfigurationsRequest) {
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

            if (listGaussMySqlConfigurationsRequest !== null && listGaussMySqlConfigurationsRequest !== undefined) {
                if (listGaussMySqlConfigurationsRequest instanceof ListGaussMySqlConfigurationsRequest) {
                    xLanguage = listGaussMySqlConfigurationsRequest.xLanguage;
                    offset = listGaussMySqlConfigurationsRequest.offset;
                    limit = listGaussMySqlConfigurationsRequest.limit;
                } else {
                    xLanguage = listGaussMySqlConfigurationsRequest['X-Language'];
                    offset = listGaussMySqlConfigurationsRequest['offset'];
                    limit = listGaussMySqlConfigurationsRequest['limit'];
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
         * 查询 TaurusDB实例数据库。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listGaussMySqlDatabase(listGaussMySqlDatabaseRequest?: ListGaussMySqlDatabaseRequest) {
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
            
            let name;
            
            let charset;

            if (listGaussMySqlDatabaseRequest !== null && listGaussMySqlDatabaseRequest !== undefined) {
                if (listGaussMySqlDatabaseRequest instanceof ListGaussMySqlDatabaseRequest) {
                    instanceId = listGaussMySqlDatabaseRequest.instanceId;
                    xLanguage = listGaussMySqlDatabaseRequest.xLanguage;
                    offset = listGaussMySqlDatabaseRequest.offset;
                    limit = listGaussMySqlDatabaseRequest.limit;
                    name = listGaussMySqlDatabaseRequest.name;
                    charset = listGaussMySqlDatabaseRequest.charset;
                } else {
                    instanceId = listGaussMySqlDatabaseRequest['instance_id'];
                    xLanguage = listGaussMySqlDatabaseRequest['X-Language'];
                    offset = listGaussMySqlDatabaseRequest['offset'];
                    limit = listGaussMySqlDatabaseRequest['limit'];
                    name = listGaussMySqlDatabaseRequest['name'];
                    charset = listGaussMySqlDatabaseRequest['charset'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listGaussMySqlDatabase.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (charset !== null && charset !== undefined) {
                localVarQueryParameter['charset'] = charset;
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
         * 查询云数据库 TaurusDB实例数据库可用字符集。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listGaussMySqlDatabaseCharsets(listGaussMySqlDatabaseCharsetsRequest?: ListGaussMySqlDatabaseCharsetsRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/{instance_id}/databases/charsets",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let xLanguage;

            if (listGaussMySqlDatabaseCharsetsRequest !== null && listGaussMySqlDatabaseCharsetsRequest !== undefined) {
                if (listGaussMySqlDatabaseCharsetsRequest instanceof ListGaussMySqlDatabaseCharsetsRequest) {
                    instanceId = listGaussMySqlDatabaseCharsetsRequest.instanceId;
                    xLanguage = listGaussMySqlDatabaseCharsetsRequest.xLanguage;
                } else {
                    instanceId = listGaussMySqlDatabaseCharsetsRequest['instance_id'];
                    xLanguage = listGaussMySqlDatabaseCharsetsRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listGaussMySqlDatabaseCharsets.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询云数据库 TaurusDB实例数据库用户。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listGaussMySqlDatabaseUser(listGaussMySqlDatabaseUserRequest?: ListGaussMySqlDatabaseUserRequest) {
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

            if (listGaussMySqlDatabaseUserRequest !== null && listGaussMySqlDatabaseUserRequest !== undefined) {
                if (listGaussMySqlDatabaseUserRequest instanceof ListGaussMySqlDatabaseUserRequest) {
                    instanceId = listGaussMySqlDatabaseUserRequest.instanceId;
                    xLanguage = listGaussMySqlDatabaseUserRequest.xLanguage;
                    offset = listGaussMySqlDatabaseUserRequest.offset;
                    limit = listGaussMySqlDatabaseUserRequest.limit;
                } else {
                    instanceId = listGaussMySqlDatabaseUserRequest['instance_id'];
                    xLanguage = listGaussMySqlDatabaseUserRequest['X-Language'];
                    offset = listGaussMySqlDatabaseUserRequest['offset'];
                    limit = listGaussMySqlDatabaseUserRequest['limit'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listGaussMySqlDatabaseUser.');
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
         * 获取专属资源池列表，包括用户开通的所有专属资源池信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listGaussMySqlDedicatedResources(listGaussMySqlDedicatedResourcesRequest?: ListGaussMySqlDedicatedResourcesRequest) {
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
            
            let xLanguage;
            
            let offset;
            
            let limit;

            if (listGaussMySqlDedicatedResourcesRequest !== null && listGaussMySqlDedicatedResourcesRequest !== undefined) {
                if (listGaussMySqlDedicatedResourcesRequest instanceof ListGaussMySqlDedicatedResourcesRequest) {
                    xLanguage = listGaussMySqlDedicatedResourcesRequest.xLanguage;
                    offset = listGaussMySqlDedicatedResourcesRequest.offset;
                    limit = listGaussMySqlDedicatedResourcesRequest.limit;
                } else {
                    xLanguage = listGaussMySqlDedicatedResourcesRequest['X-Language'];
                    offset = listGaussMySqlDedicatedResourcesRequest['offset'];
                    limit = listGaussMySqlDedicatedResourcesRequest['limit'];
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
         * 批量查询实例详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listGaussMySqlInstanceDetailInfo(listGaussMySqlInstanceDetailInfoRequest?: ListGaussMySqlInstanceDetailInfoRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/details",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceIds;
            
            let xLanguage;

            if (listGaussMySqlInstanceDetailInfoRequest !== null && listGaussMySqlInstanceDetailInfoRequest !== undefined) {
                if (listGaussMySqlInstanceDetailInfoRequest instanceof ListGaussMySqlInstanceDetailInfoRequest) {
                    instanceIds = listGaussMySqlInstanceDetailInfoRequest.instanceIds;
                    xLanguage = listGaussMySqlInstanceDetailInfoRequest.xLanguage;
                } else {
                    instanceIds = listGaussMySqlInstanceDetailInfoRequest['instance_ids'];
                    xLanguage = listGaussMySqlInstanceDetailInfoRequest['X-Language'];
                }
            }

        
            if (instanceIds === null || instanceIds === undefined) {
                throw new RequiredError('instanceIds','Required parameter instanceIds was null or undefined when calling listGaussMySqlInstanceDetailInfo.');
            }
            if (instanceIds !== null && instanceIds !== undefined) {
                localVarQueryParameter['instance_ids'] = instanceIds;
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 批量查询实例详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listGaussMySqlInstanceDetailInfoUnifyStatus(listGaussMySqlInstanceDetailInfoUnifyStatusRequest?: ListGaussMySqlInstanceDetailInfoUnifyStatusRequest) {
            const options = {
                method: "GET",
                url: "/v3.1/{project_id}/instances/details",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceIds;
            
            let xLanguage;

            if (listGaussMySqlInstanceDetailInfoUnifyStatusRequest !== null && listGaussMySqlInstanceDetailInfoUnifyStatusRequest !== undefined) {
                if (listGaussMySqlInstanceDetailInfoUnifyStatusRequest instanceof ListGaussMySqlInstanceDetailInfoUnifyStatusRequest) {
                    instanceIds = listGaussMySqlInstanceDetailInfoUnifyStatusRequest.instanceIds;
                    xLanguage = listGaussMySqlInstanceDetailInfoUnifyStatusRequest.xLanguage;
                } else {
                    instanceIds = listGaussMySqlInstanceDetailInfoUnifyStatusRequest['instance_ids'];
                    xLanguage = listGaussMySqlInstanceDetailInfoUnifyStatusRequest['X-Language'];
                }
            }

        
            if (instanceIds === null || instanceIds === undefined) {
                throw new RequiredError('instanceIds','Required parameter instanceIds was null or undefined when calling listGaussMySqlInstanceDetailInfoUnifyStatus.');
            }
            if (instanceIds !== null && instanceIds !== undefined) {
                localVarQueryParameter['instance_ids'] = instanceIds;
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据指定条件查询实例列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listGaussMySqlInstances(listGaussMySqlInstancesRequest?: ListGaussMySqlInstancesRequest) {
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
            
            let privateIp;
            
            let readonlyPrivateIp;
            
            let proxyIp;
            
            let offset;
            
            let limit;
            
            let tags;

            if (listGaussMySqlInstancesRequest !== null && listGaussMySqlInstancesRequest !== undefined) {
                if (listGaussMySqlInstancesRequest instanceof ListGaussMySqlInstancesRequest) {
                    xLanguage = listGaussMySqlInstancesRequest.xLanguage;
                    id = listGaussMySqlInstancesRequest.id;
                    name = listGaussMySqlInstancesRequest.name;
                    type = listGaussMySqlInstancesRequest.type;
                    datastoreType = listGaussMySqlInstancesRequest.datastoreType;
                    vpcId = listGaussMySqlInstancesRequest.vpcId;
                    subnetId = listGaussMySqlInstancesRequest.subnetId;
                    privateIp = listGaussMySqlInstancesRequest.privateIp;
                    readonlyPrivateIp = listGaussMySqlInstancesRequest.readonlyPrivateIp;
                    proxyIp = listGaussMySqlInstancesRequest.proxyIp;
                    offset = listGaussMySqlInstancesRequest.offset;
                    limit = listGaussMySqlInstancesRequest.limit;
                    tags = listGaussMySqlInstancesRequest.tags;
                } else {
                    xLanguage = listGaussMySqlInstancesRequest['X-Language'];
                    id = listGaussMySqlInstancesRequest['id'];
                    name = listGaussMySqlInstancesRequest['name'];
                    type = listGaussMySqlInstancesRequest['type'];
                    datastoreType = listGaussMySqlInstancesRequest['datastore_type'];
                    vpcId = listGaussMySqlInstancesRequest['vpc_id'];
                    subnetId = listGaussMySqlInstancesRequest['subnet_id'];
                    privateIp = listGaussMySqlInstancesRequest['private_ip'];
                    readonlyPrivateIp = listGaussMySqlInstancesRequest['readonly_private_ip'];
                    proxyIp = listGaussMySqlInstancesRequest['proxy_ip'];
                    offset = listGaussMySqlInstancesRequest['offset'];
                    limit = listGaussMySqlInstancesRequest['limit'];
                    tags = listGaussMySqlInstancesRequest['tags'];
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
            if (privateIp !== null && privateIp !== undefined) {
                localVarQueryParameter['private_ip'] = privateIp;
            }
            if (readonlyPrivateIp !== null && readonlyPrivateIp !== undefined) {
                localVarQueryParameter['readonly_private_ip'] = readonlyPrivateIp;
            }
            if (proxyIp !== null && proxyIp !== undefined) {
                localVarQueryParameter['proxy_ip'] = proxyIp;
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
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据指定条件查询实例列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listGaussMySqlInstancesUnifyStatus(listGaussMySqlInstancesUnifyStatusRequest?: ListGaussMySqlInstancesUnifyStatusRequest) {
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
            
            let privateIp;
            
            let readonlyPrivateIp;
            
            let proxyIp;
            
            let offset;
            
            let limit;
            
            let tags;

            if (listGaussMySqlInstancesUnifyStatusRequest !== null && listGaussMySqlInstancesUnifyStatusRequest !== undefined) {
                if (listGaussMySqlInstancesUnifyStatusRequest instanceof ListGaussMySqlInstancesUnifyStatusRequest) {
                    xLanguage = listGaussMySqlInstancesUnifyStatusRequest.xLanguage;
                    id = listGaussMySqlInstancesUnifyStatusRequest.id;
                    name = listGaussMySqlInstancesUnifyStatusRequest.name;
                    type = listGaussMySqlInstancesUnifyStatusRequest.type;
                    datastoreType = listGaussMySqlInstancesUnifyStatusRequest.datastoreType;
                    vpcId = listGaussMySqlInstancesUnifyStatusRequest.vpcId;
                    subnetId = listGaussMySqlInstancesUnifyStatusRequest.subnetId;
                    privateIp = listGaussMySqlInstancesUnifyStatusRequest.privateIp;
                    readonlyPrivateIp = listGaussMySqlInstancesUnifyStatusRequest.readonlyPrivateIp;
                    proxyIp = listGaussMySqlInstancesUnifyStatusRequest.proxyIp;
                    offset = listGaussMySqlInstancesUnifyStatusRequest.offset;
                    limit = listGaussMySqlInstancesUnifyStatusRequest.limit;
                    tags = listGaussMySqlInstancesUnifyStatusRequest.tags;
                } else {
                    xLanguage = listGaussMySqlInstancesUnifyStatusRequest['X-Language'];
                    id = listGaussMySqlInstancesUnifyStatusRequest['id'];
                    name = listGaussMySqlInstancesUnifyStatusRequest['name'];
                    type = listGaussMySqlInstancesUnifyStatusRequest['type'];
                    datastoreType = listGaussMySqlInstancesUnifyStatusRequest['datastore_type'];
                    vpcId = listGaussMySqlInstancesUnifyStatusRequest['vpc_id'];
                    subnetId = listGaussMySqlInstancesUnifyStatusRequest['subnet_id'];
                    privateIp = listGaussMySqlInstancesUnifyStatusRequest['private_ip'];
                    readonlyPrivateIp = listGaussMySqlInstancesUnifyStatusRequest['readonly_private_ip'];
                    proxyIp = listGaussMySqlInstancesUnifyStatusRequest['proxy_ip'];
                    offset = listGaussMySqlInstancesUnifyStatusRequest['offset'];
                    limit = listGaussMySqlInstancesUnifyStatusRequest['limit'];
                    tags = listGaussMySqlInstancesUnifyStatusRequest['tags'];
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
            if (privateIp !== null && privateIp !== undefined) {
                localVarQueryParameter['private_ip'] = privateIp;
            }
            if (readonlyPrivateIp !== null && readonlyPrivateIp !== undefined) {
                localVarQueryParameter['readonly_private_ip'] = readonlyPrivateIp;
            }
            if (proxyIp !== null && proxyIp !== undefined) {
                localVarQueryParameter['proxy_ip'] = proxyIp;
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
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取即时任务列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listImmediateJobs(listImmediateJobsRequest?: ListImmediateJobsRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/immediate-jobs",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let xLanguage;
            
            let status;
            
            let jobName;
            
            let jobId;
            
            let offset;
            
            let limit;
            
            let startTime;
            
            let endTime;

            if (listImmediateJobsRequest !== null && listImmediateJobsRequest !== undefined) {
                if (listImmediateJobsRequest instanceof ListImmediateJobsRequest) {
                    xLanguage = listImmediateJobsRequest.xLanguage;
                    status = listImmediateJobsRequest.status;
                    jobName = listImmediateJobsRequest.jobName;
                    jobId = listImmediateJobsRequest.jobId;
                    offset = listImmediateJobsRequest.offset;
                    limit = listImmediateJobsRequest.limit;
                    startTime = listImmediateJobsRequest.startTime;
                    endTime = listImmediateJobsRequest.endTime;
                } else {
                    xLanguage = listImmediateJobsRequest['X-Language'];
                    status = listImmediateJobsRequest['status'];
                    jobName = listImmediateJobsRequest['job_name'];
                    jobId = listImmediateJobsRequest['job_id'];
                    offset = listImmediateJobsRequest['offset'];
                    limit = listImmediateJobsRequest['limit'];
                    startTime = listImmediateJobsRequest['start_time'];
                    endTime = listImmediateJobsRequest['end_time'];
                }
            }

        
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (jobName !== null && jobName !== undefined) {
                localVarQueryParameter['job_name'] = jobName;
            }
            if (jobId !== null && jobId !== undefined) {
                localVarQueryParameter['job_id'] = jobId;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (startTime !== null && startTime !== undefined) {
                localVarQueryParameter['start_time'] = startTime;
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
         * 获取指定实例的参数信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listInstanceConfigurations(listInstanceConfigurationsRequest?: ListInstanceConfigurationsRequest) {
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
            
            let xLanguage;
            
            let offset;
            
            let limit;

            if (listInstanceConfigurationsRequest !== null && listInstanceConfigurationsRequest !== undefined) {
                if (listInstanceConfigurationsRequest instanceof ListInstanceConfigurationsRequest) {
                    instanceId = listInstanceConfigurationsRequest.instanceId;
                    xLanguage = listInstanceConfigurationsRequest.xLanguage;
                    offset = listInstanceConfigurationsRequest.offset;
                    limit = listInstanceConfigurationsRequest.limit;
                } else {
                    instanceId = listInstanceConfigurationsRequest['instance_id'];
                    xLanguage = listInstanceConfigurationsRequest['X-Language'];
                    offset = listInstanceConfigurationsRequest['offset'];
                    limit = listInstanceConfigurationsRequest['limit'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listInstanceConfigurations.');
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
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let xLanguage;
            
            let offset;
            
            let limit;

            if (listInstanceTagsRequest !== null && listInstanceTagsRequest !== undefined) {
                if (listInstanceTagsRequest instanceof ListInstanceTagsRequest) {
                    instanceId = listInstanceTagsRequest.instanceId;
                    xLanguage = listInstanceTagsRequest.xLanguage;
                    offset = listInstanceTagsRequest.offset;
                    limit = listInstanceTagsRequest.limit;
                } else {
                    instanceId = listInstanceTagsRequest['instance_id'];
                    xLanguage = listInstanceTagsRequest['X-Language'];
                    offset = listInstanceTagsRequest['offset'];
                    limit = listInstanceTagsRequest['limit'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listInstanceTags.');
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
         * 获取指定实例的错误日志详情列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listLtsErrorLogDetails(listLtsErrorLogDetailsRequest?: ListLtsErrorLogDetailsRequest) {
            const options = {
                method: "POST",
                url: "/v3.1/{project_id}/instances/{instance_id}/error-logs",
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

            if (listLtsErrorLogDetailsRequest !== null && listLtsErrorLogDetailsRequest !== undefined) {
                if (listLtsErrorLogDetailsRequest instanceof ListLtsErrorLogDetailsRequest) {
                    instanceId = listLtsErrorLogDetailsRequest.instanceId;
                    body = listLtsErrorLogDetailsRequest.body
                    xLanguage = listLtsErrorLogDetailsRequest.xLanguage;
                } else {
                    instanceId = listLtsErrorLogDetailsRequest['instance_id'];
                    body = listLtsErrorLogDetailsRequest['body'];
                    xLanguage = listLtsErrorLogDetailsRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listLtsErrorLogDetails.');
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
         * 获取指定实例的慢日志详情列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listLtsSlowlogDetails(listLtsSlowlogDetailsRequest?: ListLtsSlowlogDetailsRequest) {
            const options = {
                method: "POST",
                url: "/v3.1/{project_id}/instances/{instance_id}/slow-logs",
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

            if (listLtsSlowlogDetailsRequest !== null && listLtsSlowlogDetailsRequest !== undefined) {
                if (listLtsSlowlogDetailsRequest instanceof ListLtsSlowlogDetailsRequest) {
                    instanceId = listLtsSlowlogDetailsRequest.instanceId;
                    body = listLtsSlowlogDetailsRequest.body
                    xLanguage = listLtsSlowlogDetailsRequest.xLanguage;
                } else {
                    instanceId = listLtsSlowlogDetailsRequest['instance_id'];
                    body = listLtsSlowlogDetailsRequest['body'];
                    xLanguage = listLtsSlowlogDetailsRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listLtsSlowlogDetails.');
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
         * 查询参数修改历史。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listModifyHistory(listModifyHistoryRequest?: ListModifyHistoryRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/configurations/{configuration_id}/modify-history",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let configurationId;
            
            let xLanguage;
            
            let offset;
            
            let limit;

            if (listModifyHistoryRequest !== null && listModifyHistoryRequest !== undefined) {
                if (listModifyHistoryRequest instanceof ListModifyHistoryRequest) {
                    configurationId = listModifyHistoryRequest.configurationId;
                    xLanguage = listModifyHistoryRequest.xLanguage;
                    offset = listModifyHistoryRequest.offset;
                    limit = listModifyHistoryRequest.limit;
                } else {
                    configurationId = listModifyHistoryRequest['configuration_id'];
                    xLanguage = listModifyHistoryRequest['X-Language'];
                    offset = listModifyHistoryRequest['offset'];
                    limit = listModifyHistoryRequest['limit'];
                }
            }

        
            if (configurationId === null || configurationId === undefined) {
            throw new RequiredError('configurationId','Required parameter configurationId was null or undefined when calling listModifyHistory.');
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
            options.pathParams = { 'configuration_id': configurationId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询参数模板应用记录。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listParamsTemplateApplyHistory(listParamsTemplateApplyHistoryRequest?: ListParamsTemplateApplyHistoryRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/configurations/{config_id}/apply-history",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let configId;
            
            let limit;
            
            let offset;

            if (listParamsTemplateApplyHistoryRequest !== null && listParamsTemplateApplyHistoryRequest !== undefined) {
                if (listParamsTemplateApplyHistoryRequest instanceof ListParamsTemplateApplyHistoryRequest) {
                    configId = listParamsTemplateApplyHistoryRequest.configId;
                    limit = listParamsTemplateApplyHistoryRequest.limit;
                    offset = listParamsTemplateApplyHistoryRequest.offset;
                } else {
                    configId = listParamsTemplateApplyHistoryRequest['config_id'];
                    limit = listParamsTemplateApplyHistoryRequest['limit'];
                    offset = listParamsTemplateApplyHistoryRequest['offset'];
                }
            }

        
            if (configId === null || configId === undefined) {
            throw new RequiredError('configId','Required parameter configId was null or undefined when calling listParamsTemplateApplyHistory.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'config_id': configId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询指定project ID下实例的所有标签集合。
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
            
            let xLanguage;
            
            let offset;
            
            let limit;

            if (listProjectTagsRequest !== null && listProjectTagsRequest !== undefined) {
                if (listProjectTagsRequest instanceof ListProjectTagsRequest) {
                    xLanguage = listProjectTagsRequest.xLanguage;
                    offset = listProjectTagsRequest.offset;
                    limit = listProjectTagsRequest.limit;
                } else {
                    xLanguage = listProjectTagsRequest['X-Language'];
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
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询回收站实例信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listRecycleInstances(listRecycleInstancesRequest?: ListRecycleInstancesRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/recycle-info",
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

            if (listRecycleInstancesRequest !== null && listRecycleInstancesRequest !== undefined) {
                if (listRecycleInstancesRequest instanceof ListRecycleInstancesRequest) {
                    xLanguage = listRecycleInstancesRequest.xLanguage;
                    limit = listRecycleInstancesRequest.limit;
                    offset = listRecycleInstancesRequest.offset;
                } else {
                    xLanguage = listRecycleInstancesRequest['X-Language'];
                    limit = listRecycleInstancesRequest['limit'];
                    offset = listRecycleInstancesRequest['offset'];
                }
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
         * 获取定时任务列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listScheduleJobs(listScheduleJobsRequest?: ListScheduleJobsRequest) {
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
            
            let xLanguage;
            
            let offset;
            
            let limit;
            
            let status;
            
            let startTime;
            
            let endTime;
            
            let jobId;
            
            let jobName;

            if (listScheduleJobsRequest !== null && listScheduleJobsRequest !== undefined) {
                if (listScheduleJobsRequest instanceof ListScheduleJobsRequest) {
                    xLanguage = listScheduleJobsRequest.xLanguage;
                    offset = listScheduleJobsRequest.offset;
                    limit = listScheduleJobsRequest.limit;
                    status = listScheduleJobsRequest.status;
                    startTime = listScheduleJobsRequest.startTime;
                    endTime = listScheduleJobsRequest.endTime;
                    jobId = listScheduleJobsRequest.jobId;
                    jobName = listScheduleJobsRequest.jobName;
                } else {
                    xLanguage = listScheduleJobsRequest['X-Language'];
                    offset = listScheduleJobsRequest['offset'];
                    limit = listScheduleJobsRequest['limit'];
                    status = listScheduleJobsRequest['status'];
                    startTime = listScheduleJobsRequest['start_time'];
                    endTime = listScheduleJobsRequest['end_time'];
                    jobId = listScheduleJobsRequest['job_id'];
                    jobName = listScheduleJobsRequest['job_name'];
                }
            }

        
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (startTime !== null && startTime !== undefined) {
                localVarQueryParameter['start_time'] = startTime;
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }
            if (jobId !== null && jobId !== undefined) {
                localVarQueryParameter['job_id'] = jobId;
            }
            if (jobName !== null && jobName !== undefined) {
                localVarQueryParameter['job_name'] = jobName;
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 分页查询TaurusDB节点中的用户会话线程，对应于show processlist命令，返回结果不含内部会话线程。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listTaurusDbNodeProcesses(listTaurusDbNodeProcessesRequest?: ListTaurusDbNodeProcessesRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/{instance_id}/nodes/{node_id}/processes",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let nodeId;
            
            let xLanguage;
            
            let offset;
            
            let limit;

            if (listTaurusDbNodeProcessesRequest !== null && listTaurusDbNodeProcessesRequest !== undefined) {
                if (listTaurusDbNodeProcessesRequest instanceof ListTaurusDbNodeProcessesRequest) {
                    instanceId = listTaurusDbNodeProcessesRequest.instanceId;
                    nodeId = listTaurusDbNodeProcessesRequest.nodeId;
                    xLanguage = listTaurusDbNodeProcessesRequest.xLanguage;
                    offset = listTaurusDbNodeProcessesRequest.offset;
                    limit = listTaurusDbNodeProcessesRequest.limit;
                } else {
                    instanceId = listTaurusDbNodeProcessesRequest['instance_id'];
                    nodeId = listTaurusDbNodeProcessesRequest['node_id'];
                    xLanguage = listTaurusDbNodeProcessesRequest['X-Language'];
                    offset = listTaurusDbNodeProcessesRequest['offset'];
                    limit = listTaurusDbNodeProcessesRequest['limit'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listTaurusDbNodeProcesses.');
            }
            if (nodeId === null || nodeId === undefined) {
            throw new RequiredError('nodeId','Required parameter nodeId was null or undefined when calling listTaurusDbNodeProcesses.');
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
            options.pathParams = { 'instance_id': instanceId,'node_id': nodeId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改存储空间自动扩容策略。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        modifyAutoExpandPolicy(modifyAutoExpandPolicyRequest?: ModifyAutoExpandPolicyRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/instances/{instance_id}/storage/auto-expand-policy",
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

            if (modifyAutoExpandPolicyRequest !== null && modifyAutoExpandPolicyRequest !== undefined) {
                if (modifyAutoExpandPolicyRequest instanceof ModifyAutoExpandPolicyRequest) {
                    instanceId = modifyAutoExpandPolicyRequest.instanceId;
                    body = modifyAutoExpandPolicyRequest.body
                    xLanguage = modifyAutoExpandPolicyRequest.xLanguage;
                } else {
                    instanceId = modifyAutoExpandPolicyRequest['instance_id'];
                    body = modifyAutoExpandPolicyRequest['body'];
                    xLanguage = modifyAutoExpandPolicyRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling modifyAutoExpandPolicy.');
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
         * 打开或关闭备份加密。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        modifyBackupEncryptStatus(modifyBackupEncryptStatusRequest?: ModifyBackupEncryptStatusRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/{instance_id}/backups/encryption",
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

            if (modifyBackupEncryptStatusRequest !== null && modifyBackupEncryptStatusRequest !== undefined) {
                if (modifyBackupEncryptStatusRequest instanceof ModifyBackupEncryptStatusRequest) {
                    instanceId = modifyBackupEncryptStatusRequest.instanceId;
                    body = modifyBackupEncryptStatusRequest.body
                    xLanguage = modifyBackupEncryptStatusRequest.xLanguage;
                } else {
                    instanceId = modifyBackupEncryptStatusRequest['instance_id'];
                    body = modifyBackupEncryptStatusRequest['body'];
                    xLanguage = modifyBackupEncryptStatusRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling modifyBackupEncryptStatus.');
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
         * 设置读写分离路由模式。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        modifyGaussMySqlProxyRouteMode(modifyGaussMySqlProxyRouteModeRequest?: ModifyGaussMySqlProxyRouteModeRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/instances/{instance_id}/proxy/{proxy_id}/route-mode",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let proxyId;
            
            let xLanguage;

            if (modifyGaussMySqlProxyRouteModeRequest !== null && modifyGaussMySqlProxyRouteModeRequest !== undefined) {
                if (modifyGaussMySqlProxyRouteModeRequest instanceof ModifyGaussMySqlProxyRouteModeRequest) {
                    instanceId = modifyGaussMySqlProxyRouteModeRequest.instanceId;
                    proxyId = modifyGaussMySqlProxyRouteModeRequest.proxyId;
                    body = modifyGaussMySqlProxyRouteModeRequest.body
                    xLanguage = modifyGaussMySqlProxyRouteModeRequest.xLanguage;
                } else {
                    instanceId = modifyGaussMySqlProxyRouteModeRequest['instance_id'];
                    proxyId = modifyGaussMySqlProxyRouteModeRequest['proxy_id'];
                    body = modifyGaussMySqlProxyRouteModeRequest['body'];
                    xLanguage = modifyGaussMySqlProxyRouteModeRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling modifyGaussMySqlProxyRouteMode.');
            }
            if (proxyId === null || proxyId === undefined) {
            throw new RequiredError('proxyId','Required parameter proxyId was null or undefined when calling modifyGaussMySqlProxyRouteMode.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId,'proxy_id': proxyId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改内网域名。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        modifyGaussMysqlDns(modifyGaussMysqlDnsRequest?: ModifyGaussMysqlDnsRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/instances/{instance_id}/dns",
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

            if (modifyGaussMysqlDnsRequest !== null && modifyGaussMysqlDnsRequest !== undefined) {
                if (modifyGaussMysqlDnsRequest instanceof ModifyGaussMysqlDnsRequest) {
                    instanceId = modifyGaussMysqlDnsRequest.instanceId;
                    body = modifyGaussMysqlDnsRequest.body
                    xLanguage = modifyGaussMysqlDnsRequest.xLanguage;
                } else {
                    instanceId = modifyGaussMysqlDnsRequest['instance_id'];
                    body = modifyGaussMysqlDnsRequest['body'];
                    xLanguage = modifyGaussMysqlDnsRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling modifyGaussMysqlDns.');
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
         * 修改节点故障倒换优先级。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        modifyNodePriority(modifyNodePriorityRequest?: ModifyNodePriorityRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/instances/{instance_id}/nodes/{node_id}/priority",
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

            if (modifyNodePriorityRequest !== null && modifyNodePriorityRequest !== undefined) {
                if (modifyNodePriorityRequest instanceof ModifyNodePriorityRequest) {
                    instanceId = modifyNodePriorityRequest.instanceId;
                    nodeId = modifyNodePriorityRequest.nodeId;
                    body = modifyNodePriorityRequest.body
                    xLanguage = modifyNodePriorityRequest.xLanguage;
                } else {
                    instanceId = modifyNodePriorityRequest['instance_id'];
                    nodeId = modifyNodePriorityRequest['node_id'];
                    body = modifyNodePriorityRequest['body'];
                    xLanguage = modifyNodePriorityRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling modifyNodePriority.');
            }
            if (nodeId === null || nodeId === undefined) {
            throw new RequiredError('nodeId','Required parameter nodeId was null or undefined when calling modifyNodePriority.');
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
         * 批量修改节点名称.
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        renameInstanceNode(renameInstanceNodeRequest?: RenameInstanceNodeRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/instances/{instance_id}/nodes/name",
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

            if (renameInstanceNodeRequest !== null && renameInstanceNodeRequest !== undefined) {
                if (renameInstanceNodeRequest instanceof RenameInstanceNodeRequest) {
                    instanceId = renameInstanceNodeRequest.instanceId;
                    body = renameInstanceNodeRequest.body
                    xLanguage = renameInstanceNodeRequest.xLanguage;
                } else {
                    instanceId = renameInstanceNodeRequest['instance_id'];
                    body = renameInstanceNodeRequest['body'];
                    xLanguage = renameInstanceNodeRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling renameInstanceNode.');
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
         * 修改云数据库 TaurusDB实例数据库用户密码。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        resetGaussMySqlDatabasePassword(resetGaussMySqlDatabasePasswordRequest?: ResetGaussMySqlDatabasePasswordRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/instances/{instance_id}/db-users/password",
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

            if (resetGaussMySqlDatabasePasswordRequest !== null && resetGaussMySqlDatabasePasswordRequest !== undefined) {
                if (resetGaussMySqlDatabasePasswordRequest instanceof ResetGaussMySqlDatabasePasswordRequest) {
                    instanceId = resetGaussMySqlDatabasePasswordRequest.instanceId;
                    body = resetGaussMySqlDatabasePasswordRequest.body
                    xLanguage = resetGaussMySqlDatabasePasswordRequest.xLanguage;
                } else {
                    instanceId = resetGaussMySqlDatabasePasswordRequest['instance_id'];
                    body = resetGaussMySqlDatabasePasswordRequest['body'];
                    xLanguage = resetGaussMySqlDatabasePasswordRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling resetGaussMySqlDatabasePassword.');
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
         * 重置数据库密码。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        resetGaussMySqlPassword(resetGaussMySqlPasswordRequest?: ResetGaussMySqlPasswordRequest) {
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

            if (resetGaussMySqlPasswordRequest !== null && resetGaussMySqlPasswordRequest !== undefined) {
                if (resetGaussMySqlPasswordRequest instanceof ResetGaussMySqlPasswordRequest) {
                    instanceId = resetGaussMySqlPasswordRequest.instanceId;
                    body = resetGaussMySqlPasswordRequest.body
                    xLanguage = resetGaussMySqlPasswordRequest.xLanguage;
                } else {
                    instanceId = resetGaussMySqlPasswordRequest['instance_id'];
                    body = resetGaussMySqlPasswordRequest['body'];
                    xLanguage = resetGaussMySqlPasswordRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling resetGaussMySqlPassword.');
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
        restartGaussMySqlInstance(restartGaussMySqlInstanceRequest?: RestartGaussMySqlInstanceRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/{instance_id}/restart",
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

            if (restartGaussMySqlInstanceRequest !== null && restartGaussMySqlInstanceRequest !== undefined) {
                if (restartGaussMySqlInstanceRequest instanceof RestartGaussMySqlInstanceRequest) {
                    instanceId = restartGaussMySqlInstanceRequest.instanceId;
                    body = restartGaussMySqlInstanceRequest.body
                    xLanguage = restartGaussMySqlInstanceRequest.xLanguage;
                } else {
                    instanceId = restartGaussMySqlInstanceRequest['instance_id'];
                    body = restartGaussMySqlInstanceRequest['body'];
                    xLanguage = restartGaussMySqlInstanceRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling restartGaussMySqlInstance.');
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
         * 节点重启。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        restartGaussMySqlNode(restartGaussMySqlNodeRequest?: RestartGaussMySqlNodeRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/{instance_id}/nodes/{node_id}/restart",
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

            if (restartGaussMySqlNodeRequest !== null && restartGaussMySqlNodeRequest !== undefined) {
                if (restartGaussMySqlNodeRequest instanceof RestartGaussMySqlNodeRequest) {
                    instanceId = restartGaussMySqlNodeRequest.instanceId;
                    nodeId = restartGaussMySqlNodeRequest.nodeId;
                    xLanguage = restartGaussMySqlNodeRequest.xLanguage;
                    body = restartGaussMySqlNodeRequest.body
                } else {
                    instanceId = restartGaussMySqlNodeRequest['instance_id'];
                    nodeId = restartGaussMySqlNodeRequest['node_id'];
                    xLanguage = restartGaussMySqlNodeRequest['X-Language'];
                    body = restartGaussMySqlNodeRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling restartGaussMySqlNode.');
            }
            if (nodeId === null || nodeId === undefined) {
            throw new RequiredError('nodeId','Required parameter nodeId was null or undefined when calling restartGaussMySqlNode.');
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
         * 重启数据库代理.
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        restartProxyInstance(restartProxyInstanceRequest?: RestartProxyInstanceRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/{instance_id}/proxy/{proxy_id}/restart",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let proxyId;
            
            let xLanguage;

            if (restartProxyInstanceRequest !== null && restartProxyInstanceRequest !== undefined) {
                if (restartProxyInstanceRequest instanceof RestartProxyInstanceRequest) {
                    instanceId = restartProxyInstanceRequest.instanceId;
                    proxyId = restartProxyInstanceRequest.proxyId;
                    xLanguage = restartProxyInstanceRequest.xLanguage;
                } else {
                    instanceId = restartProxyInstanceRequest['instance_id'];
                    proxyId = restartProxyInstanceRequest['proxy_id'];
                    xLanguage = restartProxyInstanceRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling restartProxyInstance.');
            }
            if (proxyId === null || proxyId === undefined) {
            throw new RequiredError('proxyId','Required parameter proxyId was null or undefined when calling restartProxyInstance.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.pathParams = { 'instance_id': instanceId,'proxy_id': proxyId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 备份恢复到当前实例或已有实例。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        restoreOldInstance(restoreOldInstanceRequest?: RestoreOldInstanceRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/restore",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xLanguage;

            if (restoreOldInstanceRequest !== null && restoreOldInstanceRequest !== undefined) {
                if (restoreOldInstanceRequest instanceof RestoreOldInstanceRequest) {
                    xLanguage = restoreOldInstanceRequest.xLanguage;
                    body = restoreOldInstanceRequest.body
                } else {
                    xLanguage = restoreOldInstanceRequest['X-Language'];
                    body = restoreOldInstanceRequest['body'];
                }
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
         * 设置读写分离权重。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        setGaussMySqlProxyWeight(setGaussMySqlProxyWeightRequest?: SetGaussMySqlProxyWeightRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/instances/{instance_id}/proxy/{proxy_id}/weight",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let proxyId;
            
            let xLanguage;

            if (setGaussMySqlProxyWeightRequest !== null && setGaussMySqlProxyWeightRequest !== undefined) {
                if (setGaussMySqlProxyWeightRequest instanceof SetGaussMySqlProxyWeightRequest) {
                    instanceId = setGaussMySqlProxyWeightRequest.instanceId;
                    proxyId = setGaussMySqlProxyWeightRequest.proxyId;
                    body = setGaussMySqlProxyWeightRequest.body
                    xLanguage = setGaussMySqlProxyWeightRequest.xLanguage;
                } else {
                    instanceId = setGaussMySqlProxyWeightRequest['instance_id'];
                    proxyId = setGaussMySqlProxyWeightRequest['proxy_id'];
                    body = setGaussMySqlProxyWeightRequest['body'];
                    xLanguage = setGaussMySqlProxyWeightRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling setGaussMySqlProxyWeight.');
            }
            if (proxyId === null || proxyId === undefined) {
            throw new RequiredError('proxyId','Required parameter proxyId was null or undefined when calling setGaussMySqlProxyWeight.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId,'proxy_id': proxyId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 设置指定企业项目的资源配额。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        setGaussMySqlQuotas(setGaussMySqlQuotasRequest?: SetGaussMySqlQuotasRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/quotas",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xLanguage;

            if (setGaussMySqlQuotasRequest !== null && setGaussMySqlQuotasRequest !== undefined) {
                if (setGaussMySqlQuotasRequest instanceof SetGaussMySqlQuotasRequest) {
                    xLanguage = setGaussMySqlQuotasRequest.xLanguage;
                    body = setGaussMySqlQuotasRequest.body
                } else {
                    xLanguage = setGaussMySqlQuotasRequest['X-Language'];
                    body = setGaussMySqlQuotasRequest['body'];
                }
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
         * 设置回收站策略
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        setRecyclePolicy(setRecyclePolicyRequest?: SetRecyclePolicyRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/instances/recycle-policy",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xLanguage;

            if (setRecyclePolicyRequest !== null && setRecyclePolicyRequest !== undefined) {
                if (setRecyclePolicyRequest instanceof SetRecyclePolicyRequest) {
                    body = setRecyclePolicyRequest.body
                    xLanguage = setRecyclePolicyRequest.xLanguage;
                } else {
                    body = setRecyclePolicyRequest['body'];
                    xLanguage = setRecyclePolicyRequest['X-Language'];
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
         * 设置SQL限流规则。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        setSqlFilterRule(setSqlFilterRuleRequest?: SetSqlFilterRuleRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/instances/{instance_id}/sql-filter/rules",
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

            if (setSqlFilterRuleRequest !== null && setSqlFilterRuleRequest !== undefined) {
                if (setSqlFilterRuleRequest instanceof SetSqlFilterRuleRequest) {
                    instanceId = setSqlFilterRuleRequest.instanceId;
                    body = setSqlFilterRuleRequest.body
                    xLanguage = setSqlFilterRuleRequest.xLanguage;
                } else {
                    instanceId = setSqlFilterRuleRequest['instance_id'];
                    body = setSqlFilterRuleRequest['body'];
                    xLanguage = setSqlFilterRuleRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling setSqlFilterRule.');
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
         * 查询全量SQL开关状态。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showAuditLog(showAuditLogRequest?: ShowAuditLogRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instance/{instance_id}/audit-log/switch-status",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let xLanguage;

            if (showAuditLogRequest !== null && showAuditLogRequest !== undefined) {
                if (showAuditLogRequest instanceof ShowAuditLogRequest) {
                    instanceId = showAuditLogRequest.instanceId;
                    xLanguage = showAuditLogRequest.xLanguage;
                } else {
                    instanceId = showAuditLogRequest['instance_id'];
                    xLanguage = showAuditLogRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showAuditLog.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询存储空间自动扩容策略。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showAutoExpandPolicy(showAutoExpandPolicyRequest?: ShowAutoExpandPolicyRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/{instance_id}/storage/auto-expand-policy",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let xLanguage;

            if (showAutoExpandPolicyRequest !== null && showAutoExpandPolicyRequest !== undefined) {
                if (showAutoExpandPolicyRequest instanceof ShowAutoExpandPolicyRequest) {
                    instanceId = showAutoExpandPolicyRequest.instanceId;
                    xLanguage = showAutoExpandPolicyRequest.xLanguage;
                } else {
                    instanceId = showAutoExpandPolicyRequest['instance_id'];
                    xLanguage = showAutoExpandPolicyRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showAutoExpandPolicy.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询自动变配历史记录.
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showAutoScalingHistory(showAutoScalingHistoryRequest?: ShowAutoScalingHistoryRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/{instance_id}/auto-scaling/history",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let xLanguage;
            
            let limit;
            
            let offset;

            if (showAutoScalingHistoryRequest !== null && showAutoScalingHistoryRequest !== undefined) {
                if (showAutoScalingHistoryRequest instanceof ShowAutoScalingHistoryRequest) {
                    instanceId = showAutoScalingHistoryRequest.instanceId;
                    xLanguage = showAutoScalingHistoryRequest.xLanguage;
                    limit = showAutoScalingHistoryRequest.limit;
                    offset = showAutoScalingHistoryRequest.offset;
                } else {
                    instanceId = showAutoScalingHistoryRequest['instance_id'];
                    xLanguage = showAutoScalingHistoryRequest['X-Language'];
                    limit = showAutoScalingHistoryRequest['limit'];
                    offset = showAutoScalingHistoryRequest['offset'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showAutoScalingHistory.');
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
         * 查询自动变配。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showAutoScalingPolicy(showAutoScalingPolicyRequest?: ShowAutoScalingPolicyRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/{instance_id}/auto-scaling/policy",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let xLanguage;

            if (showAutoScalingPolicyRequest !== null && showAutoScalingPolicyRequest !== undefined) {
                if (showAutoScalingPolicyRequest instanceof ShowAutoScalingPolicyRequest) {
                    instanceId = showAutoScalingPolicyRequest.instanceId;
                    xLanguage = showAutoScalingPolicyRequest.xLanguage;
                } else {
                    instanceId = showAutoScalingPolicyRequest['instance_id'];
                    xLanguage = showAutoScalingPolicyRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showAutoScalingPolicy.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询实例的可恢复时间段。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showBackupRestoreTime(showBackupRestoreTimeRequest?: ShowBackupRestoreTimeRequest) {
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
            
            let xLanguage;
            
            let date;

            if (showBackupRestoreTimeRequest !== null && showBackupRestoreTimeRequest !== undefined) {
                if (showBackupRestoreTimeRequest instanceof ShowBackupRestoreTimeRequest) {
                    instanceId = showBackupRestoreTimeRequest.instanceId;
                    xLanguage = showBackupRestoreTimeRequest.xLanguage;
                    date = showBackupRestoreTimeRequest.date;
                } else {
                    instanceId = showBackupRestoreTimeRequest['instance_id'];
                    xLanguage = showBackupRestoreTimeRequest['X-Language'];
                    date = showBackupRestoreTimeRequest['date'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showBackupRestoreTime.');
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
         * 查询专属资源信息详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showDedicatedResourceInfo(showDedicatedResourceInfoRequest?: ShowDedicatedResourceInfoRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/dedicated-resource/{dedicated_resource_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let dedicatedResourceId;
            
            let xLanguage;

            if (showDedicatedResourceInfoRequest !== null && showDedicatedResourceInfoRequest !== undefined) {
                if (showDedicatedResourceInfoRequest instanceof ShowDedicatedResourceInfoRequest) {
                    dedicatedResourceId = showDedicatedResourceInfoRequest.dedicatedResourceId;
                    xLanguage = showDedicatedResourceInfoRequest.xLanguage;
                } else {
                    dedicatedResourceId = showDedicatedResourceInfoRequest['dedicated_resource_id'];
                    xLanguage = showDedicatedResourceInfoRequest['X-Language'];
                }
            }

        
            if (dedicatedResourceId === null || dedicatedResourceId === undefined) {
            throw new RequiredError('dedicatedResourceId','Required parameter dedicatedResourceId was null or undefined when calling showDedicatedResourceInfo.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.pathParams = { 'dedicated_resource_id': dedicatedResourceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询全量备份列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showGaussMySqlBackupList(showGaussMySqlBackupListRequest?: ShowGaussMySqlBackupListRequest) {
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
            
            let name;
            
            let instanceName;

            if (showGaussMySqlBackupListRequest !== null && showGaussMySqlBackupListRequest !== undefined) {
                if (showGaussMySqlBackupListRequest instanceof ShowGaussMySqlBackupListRequest) {
                    xLanguage = showGaussMySqlBackupListRequest.xLanguage;
                    instanceId = showGaussMySqlBackupListRequest.instanceId;
                    backupId = showGaussMySqlBackupListRequest.backupId;
                    backupType = showGaussMySqlBackupListRequest.backupType;
                    offset = showGaussMySqlBackupListRequest.offset;
                    limit = showGaussMySqlBackupListRequest.limit;
                    beginTime = showGaussMySqlBackupListRequest.beginTime;
                    endTime = showGaussMySqlBackupListRequest.endTime;
                    name = showGaussMySqlBackupListRequest.name;
                    instanceName = showGaussMySqlBackupListRequest.instanceName;
                } else {
                    xLanguage = showGaussMySqlBackupListRequest['X-Language'];
                    instanceId = showGaussMySqlBackupListRequest['instance_id'];
                    backupId = showGaussMySqlBackupListRequest['backup_id'];
                    backupType = showGaussMySqlBackupListRequest['backup_type'];
                    offset = showGaussMySqlBackupListRequest['offset'];
                    limit = showGaussMySqlBackupListRequest['limit'];
                    beginTime = showGaussMySqlBackupListRequest['begin_time'];
                    endTime = showGaussMySqlBackupListRequest['end_time'];
                    name = showGaussMySqlBackupListRequest['name'];
                    instanceName = showGaussMySqlBackupListRequest['instance_name'];
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
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (instanceName !== null && instanceName !== undefined) {
                localVarQueryParameter['instance_name'] = instanceName;
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
        showGaussMySqlBackupPolicy(showGaussMySqlBackupPolicyRequest?: ShowGaussMySqlBackupPolicyRequest) {
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

            if (showGaussMySqlBackupPolicyRequest !== null && showGaussMySqlBackupPolicyRequest !== undefined) {
                if (showGaussMySqlBackupPolicyRequest instanceof ShowGaussMySqlBackupPolicyRequest) {
                    instanceId = showGaussMySqlBackupPolicyRequest.instanceId;
                    xLanguage = showGaussMySqlBackupPolicyRequest.xLanguage;
                } else {
                    instanceId = showGaussMySqlBackupPolicyRequest['instance_id'];
                    xLanguage = showGaussMySqlBackupPolicyRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showGaussMySqlBackupPolicy.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取指定参数模板的参数信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showGaussMySqlConfiguration(showGaussMySqlConfigurationRequest?: ShowGaussMySqlConfigurationRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/configurations/{configuration_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let configurationId;
            
            let xLanguage;

            if (showGaussMySqlConfigurationRequest !== null && showGaussMySqlConfigurationRequest !== undefined) {
                if (showGaussMySqlConfigurationRequest instanceof ShowGaussMySqlConfigurationRequest) {
                    configurationId = showGaussMySqlConfigurationRequest.configurationId;
                    xLanguage = showGaussMySqlConfigurationRequest.xLanguage;
                } else {
                    configurationId = showGaussMySqlConfigurationRequest['configuration_id'];
                    xLanguage = showGaussMySqlConfigurationRequest['X-Language'];
                }
            }

        
            if (configurationId === null || configurationId === undefined) {
            throw new RequiredError('configurationId','Required parameter configurationId was null or undefined when calling showGaussMySqlConfiguration.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.pathParams = { 'configuration_id': configurationId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取指定数据库引擎对应的数据库版本信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showGaussMySqlEngineVersion(showGaussMySqlEngineVersionRequest?: ShowGaussMySqlEngineVersionRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/datastores/{database_name}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let databaseName;
            
            let xLanguage;

            if (showGaussMySqlEngineVersionRequest !== null && showGaussMySqlEngineVersionRequest !== undefined) {
                if (showGaussMySqlEngineVersionRequest instanceof ShowGaussMySqlEngineVersionRequest) {
                    databaseName = showGaussMySqlEngineVersionRequest.databaseName;
                    xLanguage = showGaussMySqlEngineVersionRequest.xLanguage;
                } else {
                    databaseName = showGaussMySqlEngineVersionRequest['database_name'];
                    xLanguage = showGaussMySqlEngineVersionRequest['X-Language'];
                }
            }

        
            if (databaseName === null || databaseName === undefined) {
            throw new RequiredError('databaseName','Required parameter databaseName was null or undefined when calling showGaussMySqlEngineVersion.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.pathParams = { 'database_name': databaseName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取指定数据库引擎版本对应的规格信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showGaussMySqlFlavors(showGaussMySqlFlavorsRequest?: ShowGaussMySqlFlavorsRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/flavors/{database_name}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let databaseName;
            
            let availabilityZoneMode;
            
            let xLanguage;
            
            let versionName;
            
            let specCode;

            if (showGaussMySqlFlavorsRequest !== null && showGaussMySqlFlavorsRequest !== undefined) {
                if (showGaussMySqlFlavorsRequest instanceof ShowGaussMySqlFlavorsRequest) {
                    databaseName = showGaussMySqlFlavorsRequest.databaseName;
                    availabilityZoneMode = showGaussMySqlFlavorsRequest.availabilityZoneMode;
                    xLanguage = showGaussMySqlFlavorsRequest.xLanguage;
                    versionName = showGaussMySqlFlavorsRequest.versionName;
                    specCode = showGaussMySqlFlavorsRequest.specCode;
                } else {
                    databaseName = showGaussMySqlFlavorsRequest['database_name'];
                    availabilityZoneMode = showGaussMySqlFlavorsRequest['availability_zone_mode'];
                    xLanguage = showGaussMySqlFlavorsRequest['X-Language'];
                    versionName = showGaussMySqlFlavorsRequest['version_name'];
                    specCode = showGaussMySqlFlavorsRequest['spec_code'];
                }
            }

        
            if (databaseName === null || databaseName === undefined) {
            throw new RequiredError('databaseName','Required parameter databaseName was null or undefined when calling showGaussMySqlFlavors.');
            }
            if (availabilityZoneMode === null || availabilityZoneMode === undefined) {
                throw new RequiredError('availabilityZoneMode','Required parameter availabilityZoneMode was null or undefined when calling showGaussMySqlFlavors.');
            }
            if (availabilityZoneMode !== null && availabilityZoneMode !== undefined) {
                localVarQueryParameter['availability_zone_mode'] = availabilityZoneMode;
            }
            if (versionName !== null && versionName !== undefined) {
                localVarQueryParameter['version_name'] = versionName;
            }
            if (specCode !== null && specCode !== undefined) {
                localVarQueryParameter['spec_code'] = specCode;
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'database_name': databaseName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询增量备份列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showGaussMySqlIncrementalBackupList(showGaussMySqlIncrementalBackupListRequest?: ShowGaussMySqlIncrementalBackupListRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/{instance_id}/incremental-backups",
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
            
            let beginTime;
            
            let endTime;

            if (showGaussMySqlIncrementalBackupListRequest !== null && showGaussMySqlIncrementalBackupListRequest !== undefined) {
                if (showGaussMySqlIncrementalBackupListRequest instanceof ShowGaussMySqlIncrementalBackupListRequest) {
                    instanceId = showGaussMySqlIncrementalBackupListRequest.instanceId;
                    xLanguage = showGaussMySqlIncrementalBackupListRequest.xLanguage;
                    offset = showGaussMySqlIncrementalBackupListRequest.offset;
                    limit = showGaussMySqlIncrementalBackupListRequest.limit;
                    beginTime = showGaussMySqlIncrementalBackupListRequest.beginTime;
                    endTime = showGaussMySqlIncrementalBackupListRequest.endTime;
                } else {
                    instanceId = showGaussMySqlIncrementalBackupListRequest['instance_id'];
                    xLanguage = showGaussMySqlIncrementalBackupListRequest['X-Language'];
                    offset = showGaussMySqlIncrementalBackupListRequest['offset'];
                    limit = showGaussMySqlIncrementalBackupListRequest['limit'];
                    beginTime = showGaussMySqlIncrementalBackupListRequest['begin_time'];
                    endTime = showGaussMySqlIncrementalBackupListRequest['end_time'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showGaussMySqlIncrementalBackupList.');
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
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询实例详情信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showGaussMySqlInstanceInfo(showGaussMySqlInstanceInfoRequest?: ShowGaussMySqlInstanceInfoRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/{instance_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let xLanguage;

            if (showGaussMySqlInstanceInfoRequest !== null && showGaussMySqlInstanceInfoRequest !== undefined) {
                if (showGaussMySqlInstanceInfoRequest instanceof ShowGaussMySqlInstanceInfoRequest) {
                    instanceId = showGaussMySqlInstanceInfoRequest.instanceId;
                    xLanguage = showGaussMySqlInstanceInfoRequest.xLanguage;
                } else {
                    instanceId = showGaussMySqlInstanceInfoRequest['instance_id'];
                    xLanguage = showGaussMySqlInstanceInfoRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showGaussMySqlInstanceInfo.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询实例详情信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showGaussMySqlInstanceInfoUnifyStatus(showGaussMySqlInstanceInfoUnifyStatusRequest?: ShowGaussMySqlInstanceInfoUnifyStatusRequest) {
            const options = {
                method: "GET",
                url: "/v3.1/{project_id}/instances/{instance_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let xLanguage;

            if (showGaussMySqlInstanceInfoUnifyStatusRequest !== null && showGaussMySqlInstanceInfoUnifyStatusRequest !== undefined) {
                if (showGaussMySqlInstanceInfoUnifyStatusRequest instanceof ShowGaussMySqlInstanceInfoUnifyStatusRequest) {
                    instanceId = showGaussMySqlInstanceInfoUnifyStatusRequest.instanceId;
                    xLanguage = showGaussMySqlInstanceInfoUnifyStatusRequest.xLanguage;
                } else {
                    instanceId = showGaussMySqlInstanceInfoUnifyStatusRequest['instance_id'];
                    xLanguage = showGaussMySqlInstanceInfoUnifyStatusRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showGaussMySqlInstanceInfoUnifyStatus.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取TaurusDB任务中心指定ID的任务信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showGaussMySqlJobInfo(showGaussMySqlJobInfoRequest?: ShowGaussMySqlJobInfoRequest) {
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
            
            let xLanguage;

            if (showGaussMySqlJobInfoRequest !== null && showGaussMySqlJobInfoRequest !== undefined) {
                if (showGaussMySqlJobInfoRequest instanceof ShowGaussMySqlJobInfoRequest) {
                    id = showGaussMySqlJobInfoRequest.id;
                    xLanguage = showGaussMySqlJobInfoRequest.xLanguage;
                } else {
                    id = showGaussMySqlJobInfoRequest['id'];
                    xLanguage = showGaussMySqlJobInfoRequest['X-Language'];
                }
            }

        
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling showGaussMySqlJobInfo.');
            }
            if (id !== null && id !== undefined) {
                localVarQueryParameter['id'] = id;
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取指定租户的资源配额。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showGaussMySqlProjectQuotas(showGaussMySqlProjectQuotasRequest?: ShowGaussMySqlProjectQuotasRequest) {
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

            if (showGaussMySqlProjectQuotasRequest !== null && showGaussMySqlProjectQuotasRequest !== undefined) {
                if (showGaussMySqlProjectQuotasRequest instanceof ShowGaussMySqlProjectQuotasRequest) {
                    xLanguage = showGaussMySqlProjectQuotasRequest.xLanguage;
                    type = showGaussMySqlProjectQuotasRequest.type;
                } else {
                    xLanguage = showGaussMySqlProjectQuotasRequest['X-Language'];
                    type = showGaussMySqlProjectQuotasRequest['type'];
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
         * 查询数据库代理规格信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showGaussMySqlProxyFlavors(showGaussMySqlProxyFlavorsRequest?: ShowGaussMySqlProxyFlavorsRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/{instance_id}/proxy/flavors",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let xLanguage;

            if (showGaussMySqlProxyFlavorsRequest !== null && showGaussMySqlProxyFlavorsRequest !== undefined) {
                if (showGaussMySqlProxyFlavorsRequest instanceof ShowGaussMySqlProxyFlavorsRequest) {
                    instanceId = showGaussMySqlProxyFlavorsRequest.instanceId;
                    xLanguage = showGaussMySqlProxyFlavorsRequest.xLanguage;
                } else {
                    instanceId = showGaussMySqlProxyFlavorsRequest['instance_id'];
                    xLanguage = showGaussMySqlProxyFlavorsRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showGaussMySqlProxyFlavors.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询数据库代理信息列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showGaussMySqlProxyList(showGaussMySqlProxyListRequest?: ShowGaussMySqlProxyListRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/{instance_id}/proxies",
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

            if (showGaussMySqlProxyListRequest !== null && showGaussMySqlProxyListRequest !== undefined) {
                if (showGaussMySqlProxyListRequest instanceof ShowGaussMySqlProxyListRequest) {
                    instanceId = showGaussMySqlProxyListRequest.instanceId;
                    xLanguage = showGaussMySqlProxyListRequest.xLanguage;
                    offset = showGaussMySqlProxyListRequest.offset;
                    limit = showGaussMySqlProxyListRequest.limit;
                } else {
                    instanceId = showGaussMySqlProxyListRequest['instance_id'];
                    xLanguage = showGaussMySqlProxyListRequest['X-Language'];
                    offset = showGaussMySqlProxyListRequest['offset'];
                    limit = showGaussMySqlProxyListRequest['limit'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showGaussMySqlProxyList.');
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
         * 获取指定企业项目的资源配额。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showGaussMySqlQuotas(showGaussMySqlQuotasRequest?: ShowGaussMySqlQuotasRequest) {
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
            
            let xLanguage;
            
            let offset;
            
            let limit;
            
            let enterpriseProjectName;

            if (showGaussMySqlQuotasRequest !== null && showGaussMySqlQuotasRequest !== undefined) {
                if (showGaussMySqlQuotasRequest instanceof ShowGaussMySqlQuotasRequest) {
                    xLanguage = showGaussMySqlQuotasRequest.xLanguage;
                    offset = showGaussMySqlQuotasRequest.offset;
                    limit = showGaussMySqlQuotasRequest.limit;
                    enterpriseProjectName = showGaussMySqlQuotasRequest.enterpriseProjectName;
                } else {
                    xLanguage = showGaussMySqlQuotasRequest['X-Language'];
                    offset = showGaussMySqlQuotasRequest['offset'];
                    limit = showGaussMySqlQuotasRequest['limit'];
                    enterpriseProjectName = showGaussMySqlQuotasRequest['enterprise_project_name'];
                }
            }

        
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (enterpriseProjectName !== null && enterpriseProjectName !== undefined) {
                localVarQueryParameter['enterprise_project_name'] = enterpriseProjectName;
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询内核版本信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showInstanceDatabaseVersion(showInstanceDatabaseVersionRequest?: ShowInstanceDatabaseVersionRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/{instance_id}/database-version",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let xLanguage;

            if (showInstanceDatabaseVersionRequest !== null && showInstanceDatabaseVersionRequest !== undefined) {
                if (showInstanceDatabaseVersionRequest instanceof ShowInstanceDatabaseVersionRequest) {
                    instanceId = showInstanceDatabaseVersionRequest.instanceId;
                    xLanguage = showInstanceDatabaseVersionRequest.xLanguage;
                } else {
                    instanceId = showInstanceDatabaseVersionRequest['instance_id'];
                    xLanguage = showInstanceDatabaseVersionRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showInstanceDatabaseVersion.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询弹性公网IP。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showInstanceEip(showInstanceEipRequest?: ShowInstanceEipRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/{instance_id}/eip",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let xLanguage;

            if (showInstanceEipRequest !== null && showInstanceEipRequest !== undefined) {
                if (showInstanceEipRequest instanceof ShowInstanceEipRequest) {
                    instanceId = showInstanceEipRequest.instanceId;
                    xLanguage = showInstanceEipRequest.xLanguage;
                } else {
                    instanceId = showInstanceEipRequest['instance_id'];
                    xLanguage = showInstanceEipRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showInstanceEip.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询实例秒级监控信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showInstanceMonitorExtend(showInstanceMonitorExtendRequest?: ShowInstanceMonitorExtendRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/{instance_id}/monitor-policy",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let xLanguage;

            if (showInstanceMonitorExtendRequest !== null && showInstanceMonitorExtendRequest !== undefined) {
                if (showInstanceMonitorExtendRequest instanceof ShowInstanceMonitorExtendRequest) {
                    instanceId = showInstanceMonitorExtendRequest.instanceId;
                    xLanguage = showInstanceMonitorExtendRequest.xLanguage;
                } else {
                    instanceId = showInstanceMonitorExtendRequest['instance_id'];
                    xLanguage = showInstanceMonitorExtendRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showInstanceMonitorExtend.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取各指标的异常实例数。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showIntelligentDiagnosisAbnormalCountOfInstances(showIntelligentDiagnosisAbnormalCountOfInstancesRequest?: ShowIntelligentDiagnosisAbnormalCountOfInstancesRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/diagnosis-instance-count",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let xLanguage;

            if (showIntelligentDiagnosisAbnormalCountOfInstancesRequest !== null && showIntelligentDiagnosisAbnormalCountOfInstancesRequest !== undefined) {
                if (showIntelligentDiagnosisAbnormalCountOfInstancesRequest instanceof ShowIntelligentDiagnosisAbnormalCountOfInstancesRequest) {
                    xLanguage = showIntelligentDiagnosisAbnormalCountOfInstancesRequest.xLanguage;
                } else {
                    xLanguage = showIntelligentDiagnosisAbnormalCountOfInstancesRequest['X-Language'];
                }
            }

        
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取某个指标的异常实例信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showIntelligentDiagnosisInstanceInfosPerMetric(showIntelligentDiagnosisInstanceInfosPerMetricRequest?: ShowIntelligentDiagnosisInstanceInfosPerMetricRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/diagnosis-instance-infos",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let metricName;
            
            let offset;
            
            let limit;
            
            let xLanguage;

            if (showIntelligentDiagnosisInstanceInfosPerMetricRequest !== null && showIntelligentDiagnosisInstanceInfosPerMetricRequest !== undefined) {
                if (showIntelligentDiagnosisInstanceInfosPerMetricRequest instanceof ShowIntelligentDiagnosisInstanceInfosPerMetricRequest) {
                    metricName = showIntelligentDiagnosisInstanceInfosPerMetricRequest.metricName;
                    offset = showIntelligentDiagnosisInstanceInfosPerMetricRequest.offset;
                    limit = showIntelligentDiagnosisInstanceInfosPerMetricRequest.limit;
                    xLanguage = showIntelligentDiagnosisInstanceInfosPerMetricRequest.xLanguage;
                } else {
                    metricName = showIntelligentDiagnosisInstanceInfosPerMetricRequest['metric_name'];
                    offset = showIntelligentDiagnosisInstanceInfosPerMetricRequest['offset'];
                    limit = showIntelligentDiagnosisInstanceInfosPerMetricRequest['limit'];
                    xLanguage = showIntelligentDiagnosisInstanceInfosPerMetricRequest['X-Language'];
                }
            }

        
            if (metricName === null || metricName === undefined) {
                throw new RequiredError('metricName','Required parameter metricName was null or undefined when calling showIntelligentDiagnosisInstanceInfosPerMetric.');
            }
            if (metricName !== null && metricName !== undefined) {
                localVarQueryParameter['metric_name'] = metricName;
            }
            if (offset === null || offset === undefined) {
                throw new RequiredError('offset','Required parameter offset was null or undefined when calling showIntelligentDiagnosisInstanceInfosPerMetric.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit === null || limit === undefined) {
                throw new RequiredError('limit','Required parameter limit was null or undefined when calling showIntelligentDiagnosisInstanceInfosPerMetric.');
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
         * 查询实例LTS日志配置列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showLtsConfigs(showLtsConfigsRequest?: ShowLtsConfigsRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/logs/lts-configs",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let xLanguage;
            
            let enterpriseProjectId;
            
            let instanceId;
            
            let instanceName;
            
            let limit;
            
            let offset;

            if (showLtsConfigsRequest !== null && showLtsConfigsRequest !== undefined) {
                if (showLtsConfigsRequest instanceof ShowLtsConfigsRequest) {
                    xLanguage = showLtsConfigsRequest.xLanguage;
                    enterpriseProjectId = showLtsConfigsRequest.enterpriseProjectId;
                    instanceId = showLtsConfigsRequest.instanceId;
                    instanceName = showLtsConfigsRequest.instanceName;
                    limit = showLtsConfigsRequest.limit;
                    offset = showLtsConfigsRequest.offset;
                } else {
                    xLanguage = showLtsConfigsRequest['X-Language'];
                    enterpriseProjectId = showLtsConfigsRequest['enterprise_project_id'];
                    instanceId = showLtsConfigsRequest['instance_id'];
                    instanceName = showLtsConfigsRequest['instance_name'];
                    limit = showLtsConfigsRequest['limit'];
                    offset = showLtsConfigsRequest['offset'];
                }
            }

        
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (instanceId !== null && instanceId !== undefined) {
                localVarQueryParameter['instance_id'] = instanceId;
            }
            if (instanceName !== null && instanceName !== undefined) {
                localVarQueryParameter['instance_name'] = instanceName;
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
         * 查询多租特性开关状态。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showMultiTenant(showMultiTenantRequest?: ShowMultiTenantRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/{instance_id}/multi-tenant",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let xLanguage;

            if (showMultiTenantRequest !== null && showMultiTenantRequest !== undefined) {
                if (showMultiTenantRequest instanceof ShowMultiTenantRequest) {
                    instanceId = showMultiTenantRequest.instanceId;
                    xLanguage = showMultiTenantRequest.xLanguage;
                } else {
                    instanceId = showMultiTenantRequest['instance_id'];
                    xLanguage = showMultiTenantRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showMultiTenant.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询数据库代理内核参数。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showProxyConfigurations(showProxyConfigurationsRequest?: ShowProxyConfigurationsRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/{instance_id}/proxy/{proxy_id}/configurations",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let proxyId;
            
            let xLanguage;
            
            let limit;
            
            let offset;
            
            let name;

            if (showProxyConfigurationsRequest !== null && showProxyConfigurationsRequest !== undefined) {
                if (showProxyConfigurationsRequest instanceof ShowProxyConfigurationsRequest) {
                    instanceId = showProxyConfigurationsRequest.instanceId;
                    proxyId = showProxyConfigurationsRequest.proxyId;
                    xLanguage = showProxyConfigurationsRequest.xLanguage;
                    limit = showProxyConfigurationsRequest.limit;
                    offset = showProxyConfigurationsRequest.offset;
                    name = showProxyConfigurationsRequest.name;
                } else {
                    instanceId = showProxyConfigurationsRequest['instance_id'];
                    proxyId = showProxyConfigurationsRequest['proxy_id'];
                    xLanguage = showProxyConfigurationsRequest['X-Language'];
                    limit = showProxyConfigurationsRequest['limit'];
                    offset = showProxyConfigurationsRequest['offset'];
                    name = showProxyConfigurationsRequest['name'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showProxyConfigurations.');
            }
            if (proxyId === null || proxyId === undefined) {
            throw new RequiredError('proxyId','Required parameter proxyId was null or undefined when calling showProxyConfigurations.');
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
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId,'proxy_id': proxyId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询代理实例访问控制
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showProxyIpgroup(showProxyIpgroupRequest?: ShowProxyIpgroupRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/{instance_id}/proxy/{proxy_id}/ipgroup",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let proxyId;
            
            let xLanguage;

            if (showProxyIpgroupRequest !== null && showProxyIpgroupRequest !== undefined) {
                if (showProxyIpgroupRequest instanceof ShowProxyIpgroupRequest) {
                    instanceId = showProxyIpgroupRequest.instanceId;
                    proxyId = showProxyIpgroupRequest.proxyId;
                    xLanguage = showProxyIpgroupRequest.xLanguage;
                } else {
                    instanceId = showProxyIpgroupRequest['instance_id'];
                    proxyId = showProxyIpgroupRequest['proxy_id'];
                    xLanguage = showProxyIpgroupRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showProxyIpgroup.');
            }
            if (proxyId === null || proxyId === undefined) {
            throw new RequiredError('proxyId','Required parameter proxyId was null or undefined when calling showProxyIpgroup.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.pathParams = { 'instance_id': instanceId,'proxy_id': proxyId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询代理实例小版本
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showProxyVersion(showProxyVersionRequest?: ShowProxyVersionRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/{instance_id}/proxy/{proxy_id}/{engine_name}/proxy-version",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let engineName;
            
            let proxyId;
            
            let xLanguage;

            if (showProxyVersionRequest !== null && showProxyVersionRequest !== undefined) {
                if (showProxyVersionRequest instanceof ShowProxyVersionRequest) {
                    instanceId = showProxyVersionRequest.instanceId;
                    engineName = showProxyVersionRequest.engineName;
                    proxyId = showProxyVersionRequest.proxyId;
                    xLanguage = showProxyVersionRequest.xLanguage;
                } else {
                    instanceId = showProxyVersionRequest['instance_id'];
                    engineName = showProxyVersionRequest['engine_name'];
                    proxyId = showProxyVersionRequest['proxy_id'];
                    xLanguage = showProxyVersionRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showProxyVersion.');
            }
            if (engineName === null || engineName === undefined) {
            throw new RequiredError('engineName','Required parameter engineName was null or undefined when calling showProxyVersion.');
            }
            if (proxyId === null || proxyId === undefined) {
            throw new RequiredError('proxyId','Required parameter proxyId was null or undefined when calling showProxyVersion.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.pathParams = { 'instance_id': instanceId,'engine_name': engineName,'proxy_id': proxyId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询回收站策略
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
         * 查询表级时间点恢复可选表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showRestoreAvailableTables(showRestoreAvailableTablesRequest?: ShowRestoreAvailableTablesRequest) {
            const options = {
                method: "GET",
                url: "/v3.1/{project_id}/instances/{instance_id}/backups/restore/tables",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let restoreTime;
            
            let lastTableInfo;
            
            let xLanguage;
            
            let databaseName;
            
            let tableName;

            if (showRestoreAvailableTablesRequest !== null && showRestoreAvailableTablesRequest !== undefined) {
                if (showRestoreAvailableTablesRequest instanceof ShowRestoreAvailableTablesRequest) {
                    instanceId = showRestoreAvailableTablesRequest.instanceId;
                    restoreTime = showRestoreAvailableTablesRequest.restoreTime;
                    lastTableInfo = showRestoreAvailableTablesRequest.lastTableInfo;
                    xLanguage = showRestoreAvailableTablesRequest.xLanguage;
                    databaseName = showRestoreAvailableTablesRequest.databaseName;
                    tableName = showRestoreAvailableTablesRequest.tableName;
                } else {
                    instanceId = showRestoreAvailableTablesRequest['instance_id'];
                    restoreTime = showRestoreAvailableTablesRequest['restore_time'];
                    lastTableInfo = showRestoreAvailableTablesRequest['last_table_info'];
                    xLanguage = showRestoreAvailableTablesRequest['X-Language'];
                    databaseName = showRestoreAvailableTablesRequest['database_name'];
                    tableName = showRestoreAvailableTablesRequest['table_name'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showRestoreAvailableTables.');
            }
            if (restoreTime === null || restoreTime === undefined) {
                throw new RequiredError('restoreTime','Required parameter restoreTime was null or undefined when calling showRestoreAvailableTables.');
            }
            if (restoreTime !== null && restoreTime !== undefined) {
                localVarQueryParameter['restore_time'] = restoreTime;
            }
            if (lastTableInfo === null || lastTableInfo === undefined) {
                throw new RequiredError('lastTableInfo','Required parameter lastTableInfo was null or undefined when calling showRestoreAvailableTables.');
            }
            if (lastTableInfo !== null && lastTableInfo !== undefined) {
                localVarQueryParameter['last_table_info'] = lastTableInfo;
            }
            if (databaseName !== null && databaseName !== undefined) {
                localVarQueryParameter['database_name'] = databaseName;
            }
            if (tableName !== null && tableName !== undefined) {
                localVarQueryParameter['table_name'] = tableName;
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
         * 查询表级时间点恢复可选表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showRestoreTables(showRestoreTablesRequest?: ShowRestoreTablesRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/{instance_id}/backups/restore/tables",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let restoreTime;
            
            let lastTableInfo;
            
            let xLanguage;
            
            let databaseName;
            
            let tableName;

            if (showRestoreTablesRequest !== null && showRestoreTablesRequest !== undefined) {
                if (showRestoreTablesRequest instanceof ShowRestoreTablesRequest) {
                    instanceId = showRestoreTablesRequest.instanceId;
                    restoreTime = showRestoreTablesRequest.restoreTime;
                    lastTableInfo = showRestoreTablesRequest.lastTableInfo;
                    xLanguage = showRestoreTablesRequest.xLanguage;
                    databaseName = showRestoreTablesRequest.databaseName;
                    tableName = showRestoreTablesRequest.tableName;
                } else {
                    instanceId = showRestoreTablesRequest['instance_id'];
                    restoreTime = showRestoreTablesRequest['restore_time'];
                    lastTableInfo = showRestoreTablesRequest['last_table_info'];
                    xLanguage = showRestoreTablesRequest['X-Language'];
                    databaseName = showRestoreTablesRequest['database_name'];
                    tableName = showRestoreTablesRequest['table_name'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showRestoreTables.');
            }
            if (restoreTime === null || restoreTime === undefined) {
                throw new RequiredError('restoreTime','Required parameter restoreTime was null or undefined when calling showRestoreTables.');
            }
            if (restoreTime !== null && restoreTime !== undefined) {
                localVarQueryParameter['restore_time'] = restoreTime;
            }
            if (lastTableInfo === null || lastTableInfo === undefined) {
                throw new RequiredError('lastTableInfo','Required parameter lastTableInfo was null or undefined when calling showRestoreTables.');
            }
            if (lastTableInfo !== null && lastTableInfo !== undefined) {
                localVarQueryParameter['last_table_info'] = lastTableInfo;
            }
            if (databaseName !== null && databaseName !== undefined) {
                localVarQueryParameter['database_name'] = databaseName;
            }
            if (tableName !== null && tableName !== undefined) {
                localVarQueryParameter['table_name'] = tableName;
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
         * 查询慢日志统计信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showSlowLogStatistics(showSlowLogStatisticsRequest?: ShowSlowLogStatisticsRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/{instance_id}/slow-logs/statistics",
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

            if (showSlowLogStatisticsRequest !== null && showSlowLogStatisticsRequest !== undefined) {
                if (showSlowLogStatisticsRequest instanceof ShowSlowLogStatisticsRequest) {
                    instanceId = showSlowLogStatisticsRequest.instanceId;
                    body = showSlowLogStatisticsRequest.body
                    xLanguage = showSlowLogStatisticsRequest.xLanguage;
                } else {
                    instanceId = showSlowLogStatisticsRequest['instance_id'];
                    body = showSlowLogStatisticsRequest['body'];
                    xLanguage = showSlowLogStatisticsRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showSlowLogStatistics.');
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
         * 查询慢日志脱敏状态
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showSlowlogSensitiveStatus(showSlowlogSensitiveStatusRequest?: ShowSlowlogSensitiveStatusRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/{instance_id}/slowlog/query",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let xLanguage;

            if (showSlowlogSensitiveStatusRequest !== null && showSlowlogSensitiveStatusRequest !== undefined) {
                if (showSlowlogSensitiveStatusRequest instanceof ShowSlowlogSensitiveStatusRequest) {
                    instanceId = showSlowlogSensitiveStatusRequest.instanceId;
                    xLanguage = showSlowlogSensitiveStatusRequest.xLanguage;
                } else {
                    instanceId = showSlowlogSensitiveStatusRequest['instance_id'];
                    xLanguage = showSlowlogSensitiveStatusRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showSlowlogSensitiveStatus.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询SQL限流开关状态。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showSqlFilterControl(showSqlFilterControlRequest?: ShowSqlFilterControlRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/{instance_id}/sql-filter/switch",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let xLanguage;

            if (showSqlFilterControlRequest !== null && showSqlFilterControlRequest !== undefined) {
                if (showSqlFilterControlRequest instanceof ShowSqlFilterControlRequest) {
                    instanceId = showSqlFilterControlRequest.instanceId;
                    xLanguage = showSqlFilterControlRequest.xLanguage;
                } else {
                    instanceId = showSqlFilterControlRequest['instance_id'];
                    xLanguage = showSqlFilterControlRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showSqlFilterControl.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询SQL限流规则。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showSqlFilterRule(showSqlFilterRuleRequest?: ShowSqlFilterRuleRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/{instance_id}/sql-filter/rules",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let nodeId;
            
            let xLanguage;
            
            let sqlType;

            if (showSqlFilterRuleRequest !== null && showSqlFilterRuleRequest !== undefined) {
                if (showSqlFilterRuleRequest instanceof ShowSqlFilterRuleRequest) {
                    instanceId = showSqlFilterRuleRequest.instanceId;
                    nodeId = showSqlFilterRuleRequest.nodeId;
                    xLanguage = showSqlFilterRuleRequest.xLanguage;
                    sqlType = showSqlFilterRuleRequest.sqlType;
                } else {
                    instanceId = showSqlFilterRuleRequest['instance_id'];
                    nodeId = showSqlFilterRuleRequest['node_id'];
                    xLanguage = showSqlFilterRuleRequest['X-Language'];
                    sqlType = showSqlFilterRuleRequest['sql_type'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showSqlFilterRule.');
            }
            if (nodeId === null || nodeId === undefined) {
                throw new RequiredError('nodeId','Required parameter nodeId was null or undefined when calling showSqlFilterRule.');
            }
            if (nodeId !== null && nodeId !== undefined) {
                localVarQueryParameter['node_id'] = nodeId;
            }
            if (sqlType !== null && sqlType !== undefined) {
                localVarQueryParameter['sql_type'] = sqlType;
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
         * 缩容数据库代理节点的数量。
         * DeC专属云账号暂不支持数据库代理。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        shrinkGaussMySqlProxy(shrinkGaussMySqlProxyRequest?: ShrinkGaussMySqlProxyRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/instances/{instance_id}/proxy/{proxy_id}/reduce",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let proxyId;
            
            let xLanguage;

            if (shrinkGaussMySqlProxyRequest !== null && shrinkGaussMySqlProxyRequest !== undefined) {
                if (shrinkGaussMySqlProxyRequest instanceof ShrinkGaussMySqlProxyRequest) {
                    instanceId = shrinkGaussMySqlProxyRequest.instanceId;
                    proxyId = shrinkGaussMySqlProxyRequest.proxyId;
                    body = shrinkGaussMySqlProxyRequest.body
                    xLanguage = shrinkGaussMySqlProxyRequest.xLanguage;
                } else {
                    instanceId = shrinkGaussMySqlProxyRequest['instance_id'];
                    proxyId = shrinkGaussMySqlProxyRequest['proxy_id'];
                    body = shrinkGaussMySqlProxyRequest['body'];
                    xLanguage = shrinkGaussMySqlProxyRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling shrinkGaussMySqlProxy.');
            }
            if (proxyId === null || proxyId === undefined) {
            throw new RequiredError('proxyId','Required parameter proxyId was null or undefined when calling shrinkGaussMySqlProxy.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId,'proxy_id': proxyId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 开启或关闭访问控制。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        switchAccessControl(switchAccessControlRequest?: SwitchAccessControlRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/{instance_id}/proxy/{proxy_id}/access-control-switch",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let proxyId;
            
            let xLanguage;

            if (switchAccessControlRequest !== null && switchAccessControlRequest !== undefined) {
                if (switchAccessControlRequest instanceof SwitchAccessControlRequest) {
                    instanceId = switchAccessControlRequest.instanceId;
                    proxyId = switchAccessControlRequest.proxyId;
                    body = switchAccessControlRequest.body
                    xLanguage = switchAccessControlRequest.xLanguage;
                } else {
                    instanceId = switchAccessControlRequest['instance_id'];
                    proxyId = switchAccessControlRequest['proxy_id'];
                    body = switchAccessControlRequest['body'];
                    xLanguage = switchAccessControlRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling switchAccessControl.');
            }
            if (proxyId === null || proxyId === undefined) {
            throw new RequiredError('proxyId','Required parameter proxyId was null or undefined when calling switchAccessControl.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId,'proxy_id': proxyId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 指定实例变更参数模板。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        switchGaussMySqlConfiguration(switchGaussMySqlConfigurationRequest?: SwitchGaussMySqlConfigurationRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/configurations/{configuration_id}/apply",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let configurationId;
            
            let xLanguage;

            if (switchGaussMySqlConfigurationRequest !== null && switchGaussMySqlConfigurationRequest !== undefined) {
                if (switchGaussMySqlConfigurationRequest instanceof SwitchGaussMySqlConfigurationRequest) {
                    configurationId = switchGaussMySqlConfigurationRequest.configurationId;
                    body = switchGaussMySqlConfigurationRequest.body
                    xLanguage = switchGaussMySqlConfigurationRequest.xLanguage;
                } else {
                    configurationId = switchGaussMySqlConfigurationRequest['configuration_id'];
                    body = switchGaussMySqlConfigurationRequest['body'];
                    xLanguage = switchGaussMySqlConfigurationRequest['X-Language'];
                }
            }

        
            if (configurationId === null || configurationId === undefined) {
            throw new RequiredError('configurationId','Required parameter configurationId was null or undefined when calling switchGaussMySqlConfiguration.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'configuration_id': configurationId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 为实例设置SSL数据加密。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        switchGaussMySqlInstanceSsl(switchGaussMySqlInstanceSslRequest?: SwitchGaussMySqlInstanceSslRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/instances/{instance_id}/ssl-option",
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

            if (switchGaussMySqlInstanceSslRequest !== null && switchGaussMySqlInstanceSslRequest !== undefined) {
                if (switchGaussMySqlInstanceSslRequest instanceof SwitchGaussMySqlInstanceSslRequest) {
                    instanceId = switchGaussMySqlInstanceSslRequest.instanceId;
                    body = switchGaussMySqlInstanceSslRequest.body
                    xLanguage = switchGaussMySqlInstanceSslRequest.xLanguage;
                } else {
                    instanceId = switchGaussMySqlInstanceSslRequest['instance_id'];
                    body = switchGaussMySqlInstanceSslRequest['body'];
                    xLanguage = switchGaussMySqlInstanceSslRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling switchGaussMySqlInstanceSsl.');
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
         * 为数据库代理设置SSL数据加密。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        switchGaussMySqlProxySsl(switchGaussMySqlProxySslRequest?: SwitchGaussMySqlProxySslRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/instances/{instance_id}/proxy/{proxy_id}/ssl",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let proxyId;
            
            let xLanguage;

            if (switchGaussMySqlProxySslRequest !== null && switchGaussMySqlProxySslRequest !== undefined) {
                if (switchGaussMySqlProxySslRequest instanceof SwitchGaussMySqlProxySslRequest) {
                    instanceId = switchGaussMySqlProxySslRequest.instanceId;
                    proxyId = switchGaussMySqlProxySslRequest.proxyId;
                    body = switchGaussMySqlProxySslRequest.body
                    xLanguage = switchGaussMySqlProxySslRequest.xLanguage;
                } else {
                    instanceId = switchGaussMySqlProxySslRequest['instance_id'];
                    proxyId = switchGaussMySqlProxySslRequest['proxy_id'];
                    body = switchGaussMySqlProxySslRequest['body'];
                    xLanguage = switchGaussMySqlProxySslRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling switchGaussMySqlProxySsl.');
            }
            if (proxyId === null || proxyId === undefined) {
            throw new RequiredError('proxyId','Required parameter proxyId was null or undefined when calling switchGaussMySqlProxySsl.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId,'proxy_id': proxyId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 开启或者关闭全量SQL。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateAuditLog(updateAuditLogRequest?: UpdateAuditLogRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instance/{instance_id}/audit-log/switch",
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

            if (updateAuditLogRequest !== null && updateAuditLogRequest !== undefined) {
                if (updateAuditLogRequest instanceof UpdateAuditLogRequest) {
                    instanceId = updateAuditLogRequest.instanceId;
                    body = updateAuditLogRequest.body
                    xLanguage = updateAuditLogRequest.xLanguage;
                } else {
                    instanceId = updateAuditLogRequest['instance_id'];
                    body = updateAuditLogRequest['body'];
                    xLanguage = updateAuditLogRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updateAuditLog.');
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
         * 设置自动变配。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateAutoScalingPolicy(updateAutoScalingPolicyRequest?: UpdateAutoScalingPolicyRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/instances/{instance_id}/auto-scaling/policy",
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

            if (updateAutoScalingPolicyRequest !== null && updateAutoScalingPolicyRequest !== undefined) {
                if (updateAutoScalingPolicyRequest instanceof UpdateAutoScalingPolicyRequest) {
                    instanceId = updateAutoScalingPolicyRequest.instanceId;
                    body = updateAutoScalingPolicyRequest.body
                    xLanguage = updateAutoScalingPolicyRequest.xLanguage;
                } else {
                    instanceId = updateAutoScalingPolicyRequest['instance_id'];
                    body = updateAutoScalingPolicyRequest['body'];
                    xLanguage = updateAutoScalingPolicyRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updateAutoScalingPolicy.');
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
         * 设置跨区备份策略。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateBackupOffsitePolicy(updateBackupOffsitePolicyRequest?: UpdateBackupOffsitePolicyRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/instances/{instance_id}/backups/offsite-policy",
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

            if (updateBackupOffsitePolicyRequest !== null && updateBackupOffsitePolicyRequest !== undefined) {
                if (updateBackupOffsitePolicyRequest instanceof UpdateBackupOffsitePolicyRequest) {
                    instanceId = updateBackupOffsitePolicyRequest.instanceId;
                    body = updateBackupOffsitePolicyRequest.body
                    xLanguage = updateBackupOffsitePolicyRequest.xLanguage;
                } else {
                    instanceId = updateBackupOffsitePolicyRequest['instance_id'];
                    body = updateBackupOffsitePolicyRequest['body'];
                    xLanguage = updateBackupOffsitePolicyRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updateBackupOffsitePolicy.');
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
         * 设置自动备份策略。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateGaussMySqlBackupPolicy(updateGaussMySqlBackupPolicyRequest?: UpdateGaussMySqlBackupPolicyRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/instances/{instance_id}/backups/policy/update",
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

            if (updateGaussMySqlBackupPolicyRequest !== null && updateGaussMySqlBackupPolicyRequest !== undefined) {
                if (updateGaussMySqlBackupPolicyRequest instanceof UpdateGaussMySqlBackupPolicyRequest) {
                    instanceId = updateGaussMySqlBackupPolicyRequest.instanceId;
                    body = updateGaussMySqlBackupPolicyRequest.body
                    xLanguage = updateGaussMySqlBackupPolicyRequest.xLanguage;
                } else {
                    instanceId = updateGaussMySqlBackupPolicyRequest['instance_id'];
                    body = updateGaussMySqlBackupPolicyRequest['body'];
                    xLanguage = updateGaussMySqlBackupPolicyRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updateGaussMySqlBackupPolicy.');
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
         * 修改指定参数模板的参数信息，包括名称、描述、指定参数的值。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateGaussMySqlConfiguration(updateGaussMySqlConfigurationRequest?: UpdateGaussMySqlConfigurationRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/configurations/{configuration_id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let configurationId;
            
            let xLanguage;

            if (updateGaussMySqlConfigurationRequest !== null && updateGaussMySqlConfigurationRequest !== undefined) {
                if (updateGaussMySqlConfigurationRequest instanceof UpdateGaussMySqlConfigurationRequest) {
                    configurationId = updateGaussMySqlConfigurationRequest.configurationId;
                    body = updateGaussMySqlConfigurationRequest.body
                    xLanguage = updateGaussMySqlConfigurationRequest.xLanguage;
                } else {
                    configurationId = updateGaussMySqlConfigurationRequest['configuration_id'];
                    body = updateGaussMySqlConfigurationRequest['body'];
                    xLanguage = updateGaussMySqlConfigurationRequest['X-Language'];
                }
            }

        
            if (configurationId === null || configurationId === undefined) {
            throw new RequiredError('configurationId','Required parameter configurationId was null or undefined when calling updateGaussMySqlConfiguration.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'configuration_id': configurationId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改云数据库 TaurusDB实例数据库备注。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateGaussMySqlDatabaseComment(updateGaussMySqlDatabaseCommentRequest?: UpdateGaussMySqlDatabaseCommentRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/instances/{instance_id}/databases/comment",
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

            if (updateGaussMySqlDatabaseCommentRequest !== null && updateGaussMySqlDatabaseCommentRequest !== undefined) {
                if (updateGaussMySqlDatabaseCommentRequest instanceof UpdateGaussMySqlDatabaseCommentRequest) {
                    instanceId = updateGaussMySqlDatabaseCommentRequest.instanceId;
                    body = updateGaussMySqlDatabaseCommentRequest.body
                    xLanguage = updateGaussMySqlDatabaseCommentRequest.xLanguage;
                } else {
                    instanceId = updateGaussMySqlDatabaseCommentRequest['instance_id'];
                    body = updateGaussMySqlDatabaseCommentRequest['body'];
                    xLanguage = updateGaussMySqlDatabaseCommentRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updateGaussMySqlDatabaseComment.');
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
         * 修改云数据库 TaurusDB实例数据库用户备注。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateGaussMySqlDatabaseUserComment(updateGaussMySqlDatabaseUserCommentRequest?: UpdateGaussMySqlDatabaseUserCommentRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/instances/{instance_id}/db-users/comment",
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

            if (updateGaussMySqlDatabaseUserCommentRequest !== null && updateGaussMySqlDatabaseUserCommentRequest !== undefined) {
                if (updateGaussMySqlDatabaseUserCommentRequest instanceof UpdateGaussMySqlDatabaseUserCommentRequest) {
                    instanceId = updateGaussMySqlDatabaseUserCommentRequest.instanceId;
                    body = updateGaussMySqlDatabaseUserCommentRequest.body
                    xLanguage = updateGaussMySqlDatabaseUserCommentRequest.xLanguage;
                } else {
                    instanceId = updateGaussMySqlDatabaseUserCommentRequest['instance_id'];
                    body = updateGaussMySqlDatabaseUserCommentRequest['body'];
                    xLanguage = updateGaussMySqlDatabaseUserCommentRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updateGaussMySqlDatabaseUserComment.');
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
         * 修改实例备注。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateGaussMySqlInstanceAlias(updateGaussMySqlInstanceAliasRequest?: UpdateGaussMySqlInstanceAliasRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/instances/{instance_id}/alias",
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

            if (updateGaussMySqlInstanceAliasRequest !== null && updateGaussMySqlInstanceAliasRequest !== undefined) {
                if (updateGaussMySqlInstanceAliasRequest instanceof UpdateGaussMySqlInstanceAliasRequest) {
                    instanceId = updateGaussMySqlInstanceAliasRequest.instanceId;
                    body = updateGaussMySqlInstanceAliasRequest.body
                    xLanguage = updateGaussMySqlInstanceAliasRequest.xLanguage;
                } else {
                    instanceId = updateGaussMySqlInstanceAliasRequest['instance_id'];
                    body = updateGaussMySqlInstanceAliasRequest['body'];
                    xLanguage = updateGaussMySqlInstanceAliasRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updateGaussMySqlInstanceAlias.');
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
         * 实例绑定弹性公网IP，供外网连接使用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateGaussMySqlInstanceEip(updateGaussMySqlInstanceEipRequest?: UpdateGaussMySqlInstanceEipRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/instances/{instance_id}/public-ips/bind",
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

            if (updateGaussMySqlInstanceEipRequest !== null && updateGaussMySqlInstanceEipRequest !== undefined) {
                if (updateGaussMySqlInstanceEipRequest instanceof UpdateGaussMySqlInstanceEipRequest) {
                    instanceId = updateGaussMySqlInstanceEipRequest.instanceId;
                    body = updateGaussMySqlInstanceEipRequest.body
                    xLanguage = updateGaussMySqlInstanceEipRequest.xLanguage;
                } else {
                    instanceId = updateGaussMySqlInstanceEipRequest['instance_id'];
                    body = updateGaussMySqlInstanceEipRequest['body'];
                    xLanguage = updateGaussMySqlInstanceEipRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updateGaussMySqlInstanceEip.');
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
         * 修改实例内网地址。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateGaussMySqlInstanceInternalIp(updateGaussMySqlInstanceInternalIpRequest?: UpdateGaussMySqlInstanceInternalIpRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/instances/{instance_id}/internal-ip",
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

            if (updateGaussMySqlInstanceInternalIpRequest !== null && updateGaussMySqlInstanceInternalIpRequest !== undefined) {
                if (updateGaussMySqlInstanceInternalIpRequest instanceof UpdateGaussMySqlInstanceInternalIpRequest) {
                    instanceId = updateGaussMySqlInstanceInternalIpRequest.instanceId;
                    body = updateGaussMySqlInstanceInternalIpRequest.body
                    xLanguage = updateGaussMySqlInstanceInternalIpRequest.xLanguage;
                } else {
                    instanceId = updateGaussMySqlInstanceInternalIpRequest['instance_id'];
                    body = updateGaussMySqlInstanceInternalIpRequest['body'];
                    xLanguage = updateGaussMySqlInstanceInternalIpRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updateGaussMySqlInstanceInternalIp.');
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
        updateGaussMySqlInstanceName(updateGaussMySqlInstanceNameRequest?: UpdateGaussMySqlInstanceNameRequest) {
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

            if (updateGaussMySqlInstanceNameRequest !== null && updateGaussMySqlInstanceNameRequest !== undefined) {
                if (updateGaussMySqlInstanceNameRequest instanceof UpdateGaussMySqlInstanceNameRequest) {
                    instanceId = updateGaussMySqlInstanceNameRequest.instanceId;
                    body = updateGaussMySqlInstanceNameRequest.body
                    xLanguage = updateGaussMySqlInstanceNameRequest.xLanguage;
                } else {
                    instanceId = updateGaussMySqlInstanceNameRequest['instance_id'];
                    body = updateGaussMySqlInstanceNameRequest['body'];
                    xLanguage = updateGaussMySqlInstanceNameRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updateGaussMySqlInstanceName.');
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
         * 设置可维护时间段。建议将可维护时间段设置在业务低峰期，避免业务在维护过程中异常中断。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateGaussMySqlInstanceOpsWindow(updateGaussMySqlInstanceOpsWindowRequest?: UpdateGaussMySqlInstanceOpsWindowRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/instances/{instance_id}/ops-window",
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

            if (updateGaussMySqlInstanceOpsWindowRequest !== null && updateGaussMySqlInstanceOpsWindowRequest !== undefined) {
                if (updateGaussMySqlInstanceOpsWindowRequest instanceof UpdateGaussMySqlInstanceOpsWindowRequest) {
                    instanceId = updateGaussMySqlInstanceOpsWindowRequest.instanceId;
                    body = updateGaussMySqlInstanceOpsWindowRequest.body
                    xLanguage = updateGaussMySqlInstanceOpsWindowRequest.xLanguage;
                } else {
                    instanceId = updateGaussMySqlInstanceOpsWindowRequest['instance_id'];
                    body = updateGaussMySqlInstanceOpsWindowRequest['body'];
                    xLanguage = updateGaussMySqlInstanceOpsWindowRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updateGaussMySqlInstanceOpsWindow.');
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
         * 修改实例数据库端口。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateGaussMySqlInstancePort(updateGaussMySqlInstancePortRequest?: UpdateGaussMySqlInstancePortRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/instances/{instance_id}/port",
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

            if (updateGaussMySqlInstancePortRequest !== null && updateGaussMySqlInstancePortRequest !== undefined) {
                if (updateGaussMySqlInstancePortRequest instanceof UpdateGaussMySqlInstancePortRequest) {
                    instanceId = updateGaussMySqlInstancePortRequest.instanceId;
                    body = updateGaussMySqlInstancePortRequest.body
                    xLanguage = updateGaussMySqlInstancePortRequest.xLanguage;
                } else {
                    instanceId = updateGaussMySqlInstancePortRequest['instance_id'];
                    body = updateGaussMySqlInstancePortRequest['body'];
                    xLanguage = updateGaussMySqlInstancePortRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updateGaussMySqlInstancePort.');
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
         * 修改指定实例安全组。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateGaussMySqlInstanceSecurityGroup(updateGaussMySqlInstanceSecurityGroupRequest?: UpdateGaussMySqlInstanceSecurityGroupRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/instances/{instance_id}/security-group",
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

            if (updateGaussMySqlInstanceSecurityGroupRequest !== null && updateGaussMySqlInstanceSecurityGroupRequest !== undefined) {
                if (updateGaussMySqlInstanceSecurityGroupRequest instanceof UpdateGaussMySqlInstanceSecurityGroupRequest) {
                    instanceId = updateGaussMySqlInstanceSecurityGroupRequest.instanceId;
                    body = updateGaussMySqlInstanceSecurityGroupRequest.body
                    xLanguage = updateGaussMySqlInstanceSecurityGroupRequest.xLanguage;
                } else {
                    instanceId = updateGaussMySqlInstanceSecurityGroupRequest['instance_id'];
                    body = updateGaussMySqlInstanceSecurityGroupRequest['body'];
                    xLanguage = updateGaussMySqlInstanceSecurityGroupRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updateGaussMySqlInstanceSecurityGroup.');
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
         * 修改指定企业项目的资源配额。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateGaussMySqlQuotas(updateGaussMySqlQuotasRequest?: UpdateGaussMySqlQuotasRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/quotas",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xLanguage;

            if (updateGaussMySqlQuotasRequest !== null && updateGaussMySqlQuotasRequest !== undefined) {
                if (updateGaussMySqlQuotasRequest instanceof UpdateGaussMySqlQuotasRequest) {
                    xLanguage = updateGaussMySqlQuotasRequest.xLanguage;
                    body = updateGaussMySqlQuotasRequest.body
                } else {
                    xLanguage = updateGaussMySqlQuotasRequest['X-Language'];
                    body = updateGaussMySqlQuotasRequest['body'];
                }
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
         * 修改指定实例的参数。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateInstanceConfigurations(updateInstanceConfigurationsRequest?: UpdateInstanceConfigurationsRequest) {
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

            if (updateInstanceConfigurationsRequest !== null && updateInstanceConfigurationsRequest !== undefined) {
                if (updateInstanceConfigurationsRequest instanceof UpdateInstanceConfigurationsRequest) {
                    instanceId = updateInstanceConfigurationsRequest.instanceId;
                    body = updateInstanceConfigurationsRequest.body
                    xLanguage = updateInstanceConfigurationsRequest.xLanguage;
                } else {
                    instanceId = updateInstanceConfigurationsRequest['instance_id'];
                    body = updateInstanceConfigurationsRequest['body'];
                    xLanguage = updateInstanceConfigurationsRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updateInstanceConfigurations.');
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
         * 设置实例秒级监控，包括1秒监控和5秒监控。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateInstanceMonitor(updateInstanceMonitorRequest?: UpdateInstanceMonitorRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/instances/{instance_id}/monitor-policy",
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

            if (updateInstanceMonitorRequest !== null && updateInstanceMonitorRequest !== undefined) {
                if (updateInstanceMonitorRequest instanceof UpdateInstanceMonitorRequest) {
                    instanceId = updateInstanceMonitorRequest.instanceId;
                    body = updateInstanceMonitorRequest.body
                    xLanguage = updateInstanceMonitorRequest.xLanguage;
                } else {
                    instanceId = updateInstanceMonitorRequest['instance_id'];
                    body = updateInstanceMonitorRequest['body'];
                    xLanguage = updateInstanceMonitorRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updateInstanceMonitor.');
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
         * 开启或者关闭多租特性。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateMultiTenant(updateMultiTenantRequest?: UpdateMultiTenantRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/instances/{instance_id}/multi-tenant",
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

            if (updateMultiTenantRequest !== null && updateMultiTenantRequest !== undefined) {
                if (updateMultiTenantRequest instanceof UpdateMultiTenantRequest) {
                    instanceId = updateMultiTenantRequest.instanceId;
                    body = updateMultiTenantRequest.body
                    xLanguage = updateMultiTenantRequest.xLanguage;
                } else {
                    instanceId = updateMultiTenantRequest['instance_id'];
                    body = updateMultiTenantRequest['body'];
                    xLanguage = updateMultiTenantRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updateMultiTenant.');
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
         * 开启或关闭新增节点自动加入该Proxy。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateNewNodeAutoAddSwitch(updateNewNodeAutoAddSwitchRequest?: UpdateNewNodeAutoAddSwitchRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/{instance_id}/proxy/{proxy_id}/new-node-auto-add",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let proxyId;
            
            let xLanguage;

            if (updateNewNodeAutoAddSwitchRequest !== null && updateNewNodeAutoAddSwitchRequest !== undefined) {
                if (updateNewNodeAutoAddSwitchRequest instanceof UpdateNewNodeAutoAddSwitchRequest) {
                    instanceId = updateNewNodeAutoAddSwitchRequest.instanceId;
                    proxyId = updateNewNodeAutoAddSwitchRequest.proxyId;
                    body = updateNewNodeAutoAddSwitchRequest.body
                    xLanguage = updateNewNodeAutoAddSwitchRequest.xLanguage;
                } else {
                    instanceId = updateNewNodeAutoAddSwitchRequest['instance_id'];
                    proxyId = updateNewNodeAutoAddSwitchRequest['proxy_id'];
                    body = updateNewNodeAutoAddSwitchRequest['body'];
                    xLanguage = updateNewNodeAutoAddSwitchRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updateNewNodeAutoAddSwitch.');
            }
            if (proxyId === null || proxyId === undefined) {
            throw new RequiredError('proxyId','Required parameter proxyId was null or undefined when calling updateNewNodeAutoAddSwitch.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId,'proxy_id': proxyId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更改数据库代理连接池类型。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateProxyConnectionPoolType(updateProxyConnectionPoolTypeRequest?: UpdateProxyConnectionPoolTypeRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/instances/{instance_id}/proxy/{proxy_id}/connection-pool-type",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let proxyId;
            
            let xLanguage;

            if (updateProxyConnectionPoolTypeRequest !== null && updateProxyConnectionPoolTypeRequest !== undefined) {
                if (updateProxyConnectionPoolTypeRequest instanceof UpdateProxyConnectionPoolTypeRequest) {
                    instanceId = updateProxyConnectionPoolTypeRequest.instanceId;
                    proxyId = updateProxyConnectionPoolTypeRequest.proxyId;
                    body = updateProxyConnectionPoolTypeRequest.body
                    xLanguage = updateProxyConnectionPoolTypeRequest.xLanguage;
                } else {
                    instanceId = updateProxyConnectionPoolTypeRequest['instance_id'];
                    proxyId = updateProxyConnectionPoolTypeRequest['proxy_id'];
                    body = updateProxyConnectionPoolTypeRequest['body'];
                    xLanguage = updateProxyConnectionPoolTypeRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updateProxyConnectionPoolType.');
            }
            if (proxyId === null || proxyId === undefined) {
            throw new RequiredError('proxyId','Required parameter proxyId was null or undefined when calling updateProxyConnectionPoolType.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId,'proxy_id': proxyId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改代理实例名称
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateProxyName(updateProxyNameRequest?: UpdateProxyNameRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/instances/{instance_id}/proxy/{proxy_id}/rename",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let proxyId;
            
            let xLanguage;

            if (updateProxyNameRequest !== null && updateProxyNameRequest !== undefined) {
                if (updateProxyNameRequest instanceof UpdateProxyNameRequest) {
                    instanceId = updateProxyNameRequest.instanceId;
                    proxyId = updateProxyNameRequest.proxyId;
                    body = updateProxyNameRequest.body
                    xLanguage = updateProxyNameRequest.xLanguage;
                } else {
                    instanceId = updateProxyNameRequest['instance_id'];
                    proxyId = updateProxyNameRequest['proxy_id'];
                    body = updateProxyNameRequest['body'];
                    xLanguage = updateProxyNameRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updateProxyName.');
            }
            if (proxyId === null || proxyId === undefined) {
            throw new RequiredError('proxyId','Required parameter proxyId was null or undefined when calling updateProxyName.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId,'proxy_id': proxyId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改数据库代理参数。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateProxyNewConfigurations(updateProxyNewConfigurationsRequest?: UpdateProxyNewConfigurationsRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/instances/{instance_id}/proxy/{proxy_id}/configurations",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let proxyId;
            
            let xLanguage;

            if (updateProxyNewConfigurationsRequest !== null && updateProxyNewConfigurationsRequest !== undefined) {
                if (updateProxyNewConfigurationsRequest instanceof UpdateProxyNewConfigurationsRequest) {
                    instanceId = updateProxyNewConfigurationsRequest.instanceId;
                    proxyId = updateProxyNewConfigurationsRequest.proxyId;
                    body = updateProxyNewConfigurationsRequest.body
                    xLanguage = updateProxyNewConfigurationsRequest.xLanguage;
                } else {
                    instanceId = updateProxyNewConfigurationsRequest['instance_id'];
                    proxyId = updateProxyNewConfigurationsRequest['proxy_id'];
                    body = updateProxyNewConfigurationsRequest['body'];
                    xLanguage = updateProxyNewConfigurationsRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updateProxyNewConfigurations.');
            }
            if (proxyId === null || proxyId === undefined) {
            throw new RequiredError('proxyId','Required parameter proxyId was null or undefined when calling updateProxyNewConfigurations.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId,'proxy_id': proxyId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改读写分离端口号。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateProxyPort(updateProxyPortRequest?: UpdateProxyPortRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/instances/{instance_id}/proxy/{proxy_id}/port",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let proxyId;
            
            let xLanguage;

            if (updateProxyPortRequest !== null && updateProxyPortRequest !== undefined) {
                if (updateProxyPortRequest instanceof UpdateProxyPortRequest) {
                    instanceId = updateProxyPortRequest.instanceId;
                    proxyId = updateProxyPortRequest.proxyId;
                    body = updateProxyPortRequest.body
                    xLanguage = updateProxyPortRequest.xLanguage;
                } else {
                    instanceId = updateProxyPortRequest['instance_id'];
                    proxyId = updateProxyPortRequest['proxy_id'];
                    body = updateProxyPortRequest['body'];
                    xLanguage = updateProxyPortRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updateProxyPort.');
            }
            if (proxyId === null || proxyId === undefined) {
            throw new RequiredError('proxyId','Required parameter proxyId was null or undefined when calling updateProxyPort.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId,'proxy_id': proxyId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改代理会话一致性。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateProxySessionConsistence(updateProxySessionConsistenceRequest?: UpdateProxySessionConsistenceRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/instances/{instance_id}/proxy/{proxy_id}/session-consistence",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let proxyId;
            
            let xLanguage;

            if (updateProxySessionConsistenceRequest !== null && updateProxySessionConsistenceRequest !== undefined) {
                if (updateProxySessionConsistenceRequest instanceof UpdateProxySessionConsistenceRequest) {
                    instanceId = updateProxySessionConsistenceRequest.instanceId;
                    proxyId = updateProxySessionConsistenceRequest.proxyId;
                    body = updateProxySessionConsistenceRequest.body
                    xLanguage = updateProxySessionConsistenceRequest.xLanguage;
                } else {
                    instanceId = updateProxySessionConsistenceRequest['instance_id'];
                    proxyId = updateProxySessionConsistenceRequest['proxy_id'];
                    body = updateProxySessionConsistenceRequest['body'];
                    xLanguage = updateProxySessionConsistenceRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updateProxySessionConsistence.');
            }
            if (proxyId === null || proxyId === undefined) {
            throw new RequiredError('proxyId','Required parameter proxyId was null or undefined when calling updateProxySessionConsistence.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId,'proxy_id': proxyId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 设置Serverless配置策略。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateServerlessPolicy(updateServerlessPolicyRequest?: UpdateServerlessPolicyRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/instances/{instance_id}/serverless/policy",
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

            if (updateServerlessPolicyRequest !== null && updateServerlessPolicyRequest !== undefined) {
                if (updateServerlessPolicyRequest instanceof UpdateServerlessPolicyRequest) {
                    instanceId = updateServerlessPolicyRequest.instanceId;
                    body = updateServerlessPolicyRequest.body
                    xLanguage = updateServerlessPolicyRequest.xLanguage;
                } else {
                    instanceId = updateServerlessPolicyRequest['instance_id'];
                    body = updateServerlessPolicyRequest['body'];
                    xLanguage = updateServerlessPolicyRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updateServerlessPolicy.');
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
         * 开启或关闭慢日志脱敏状态
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateSlowlogSensitiveSwitch(updateSlowlogSensitiveSwitchRequest?: UpdateSlowlogSensitiveSwitchRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/{instance_id}/slowlog/modify",
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

            if (updateSlowlogSensitiveSwitchRequest !== null && updateSlowlogSensitiveSwitchRequest !== undefined) {
                if (updateSlowlogSensitiveSwitchRequest instanceof UpdateSlowlogSensitiveSwitchRequest) {
                    instanceId = updateSlowlogSensitiveSwitchRequest.instanceId;
                    body = updateSlowlogSensitiveSwitchRequest.body
                    xLanguage = updateSlowlogSensitiveSwitchRequest.xLanguage;
                } else {
                    instanceId = updateSlowlogSensitiveSwitchRequest['instance_id'];
                    body = updateSlowlogSensitiveSwitchRequest['body'];
                    xLanguage = updateSlowlogSensitiveSwitchRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updateSlowlogSensitiveSwitch.');
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
         * 开启或者关闭SQL限流。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateSqlFilterControl(updateSqlFilterControlRequest?: UpdateSqlFilterControlRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/{instance_id}/sql-filter/switch",
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

            if (updateSqlFilterControlRequest !== null && updateSqlFilterControlRequest !== undefined) {
                if (updateSqlFilterControlRequest instanceof UpdateSqlFilterControlRequest) {
                    instanceId = updateSqlFilterControlRequest.instanceId;
                    body = updateSqlFilterControlRequest.body
                    xLanguage = updateSqlFilterControlRequest.xLanguage;
                } else {
                    instanceId = updateSqlFilterControlRequest['instance_id'];
                    body = updateSqlFilterControlRequest['body'];
                    xLanguage = updateSqlFilterControlRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updateSqlFilterControl.');
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
         * 修改只读节点的读内网地址。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateTaurusNodeDataIp(updateTaurusNodeDataIpRequest?: UpdateTaurusNodeDataIpRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/instances/{instance_id}/{node_id}/internal-ip",
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

            if (updateTaurusNodeDataIpRequest !== null && updateTaurusNodeDataIpRequest !== undefined) {
                if (updateTaurusNodeDataIpRequest instanceof UpdateTaurusNodeDataIpRequest) {
                    instanceId = updateTaurusNodeDataIpRequest.instanceId;
                    nodeId = updateTaurusNodeDataIpRequest.nodeId;
                    body = updateTaurusNodeDataIpRequest.body
                    xLanguage = updateTaurusNodeDataIpRequest.xLanguage;
                } else {
                    instanceId = updateTaurusNodeDataIpRequest['instance_id'];
                    nodeId = updateTaurusNodeDataIpRequest['node_id'];
                    body = updateTaurusNodeDataIpRequest['body'];
                    xLanguage = updateTaurusNodeDataIpRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updateTaurusNodeDataIp.');
            }
            if (nodeId === null || nodeId === undefined) {
            throw new RequiredError('nodeId','Required parameter nodeId was null or undefined when calling updateTaurusNodeDataIp.');
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
         * 设置proxy事务拆分。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateTransactionSplitStatus(updateTransactionSplitStatusRequest?: UpdateTransactionSplitStatusRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/{instance_id}/proxy/transaction-split",
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

            if (updateTransactionSplitStatusRequest !== null && updateTransactionSplitStatusRequest !== undefined) {
                if (updateTransactionSplitStatusRequest instanceof UpdateTransactionSplitStatusRequest) {
                    instanceId = updateTransactionSplitStatusRequest.instanceId;
                    body = updateTransactionSplitStatusRequest.body
                    xLanguage = updateTransactionSplitStatusRequest.xLanguage;
                } else {
                    instanceId = updateTransactionSplitStatusRequest['instance_id'];
                    body = updateTransactionSplitStatusRequest['body'];
                    xLanguage = updateTransactionSplitStatusRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updateTransactionSplitStatus.');
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
         * 内核版本升级。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        upgradeGaussMySqlInstanceDatabase(upgradeGaussMySqlInstanceDatabaseRequest?: UpgradeGaussMySqlInstanceDatabaseRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/{instance_id}/db-upgrade",
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

            if (upgradeGaussMySqlInstanceDatabaseRequest !== null && upgradeGaussMySqlInstanceDatabaseRequest !== undefined) {
                if (upgradeGaussMySqlInstanceDatabaseRequest instanceof UpgradeGaussMySqlInstanceDatabaseRequest) {
                    instanceId = upgradeGaussMySqlInstanceDatabaseRequest.instanceId;
                    body = upgradeGaussMySqlInstanceDatabaseRequest.body
                    xLanguage = upgradeGaussMySqlInstanceDatabaseRequest.xLanguage;
                } else {
                    instanceId = upgradeGaussMySqlInstanceDatabaseRequest['instance_id'];
                    body = upgradeGaussMySqlInstanceDatabaseRequest['body'];
                    xLanguage = upgradeGaussMySqlInstanceDatabaseRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling upgradeGaussMySqlInstanceDatabase.');
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
         * 升级数据库代理实例内核版本。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        upgradeProxyVersion(upgradeProxyVersionRequest?: UpgradeProxyVersionRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/{instance_id}/proxy/{proxy_id}/upgrade-version",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let proxyId;
            
            let xLanguage;

            if (upgradeProxyVersionRequest !== null && upgradeProxyVersionRequest !== undefined) {
                if (upgradeProxyVersionRequest instanceof UpgradeProxyVersionRequest) {
                    instanceId = upgradeProxyVersionRequest.instanceId;
                    proxyId = upgradeProxyVersionRequest.proxyId;
                    body = upgradeProxyVersionRequest.body
                    xLanguage = upgradeProxyVersionRequest.xLanguage;
                } else {
                    instanceId = upgradeProxyVersionRequest['instance_id'];
                    proxyId = upgradeProxyVersionRequest['proxy_id'];
                    body = upgradeProxyVersionRequest['body'];
                    xLanguage = upgradeProxyVersionRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling upgradeProxyVersion.');
            }
            if (proxyId === null || proxyId === undefined) {
            throw new RequiredError('proxyId','Required parameter proxyId was null or undefined when calling upgradeProxyVersion.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId,'proxy_id': proxyId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 数据同步库配置校验。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        checkClickHouseDataBaseConfig(checkClickHouseDataBaseConfigRequest?: CheckClickHouseDataBaseConfigRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/{instance_id}/clickhouse/replication/database-check",
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

            if (checkClickHouseDataBaseConfigRequest !== null && checkClickHouseDataBaseConfigRequest !== undefined) {
                if (checkClickHouseDataBaseConfigRequest instanceof CheckClickHouseDataBaseConfigRequest) {
                    instanceId = checkClickHouseDataBaseConfigRequest.instanceId;
                    body = checkClickHouseDataBaseConfigRequest.body
                    xLanguage = checkClickHouseDataBaseConfigRequest.xLanguage;
                } else {
                    instanceId = checkClickHouseDataBaseConfigRequest['instance_id'];
                    body = checkClickHouseDataBaseConfigRequest['body'];
                    xLanguage = checkClickHouseDataBaseConfigRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling checkClickHouseDataBaseConfig.');
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
         * 数据同步表配置校验。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        checkClickHouseTableConfig(checkClickHouseTableConfigRequest?: CheckClickHouseTableConfigRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/{instance_id}/clickhouse/replication/table-check",
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

            if (checkClickHouseTableConfigRequest !== null && checkClickHouseTableConfigRequest !== undefined) {
                if (checkClickHouseTableConfigRequest instanceof CheckClickHouseTableConfigRequest) {
                    instanceId = checkClickHouseTableConfigRequest.instanceId;
                    body = checkClickHouseTableConfigRequest.body
                    xLanguage = checkClickHouseTableConfigRequest.xLanguage;
                } else {
                    instanceId = checkClickHouseTableConfigRequest['instance_id'];
                    body = checkClickHouseTableConfigRequest['body'];
                    xLanguage = checkClickHouseTableConfigRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling checkClickHouseTableConfig.');
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
         * HTAP数据同步库配置校验。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        checkDataBaseConfig(checkDataBaseConfigRequest?: CheckDataBaseConfigRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/{instance_id}/starrocks/databases/replication/database-config-check",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xLanguage;
            
            let instanceId;

            if (checkDataBaseConfigRequest !== null && checkDataBaseConfigRequest !== undefined) {
                if (checkDataBaseConfigRequest instanceof CheckDataBaseConfigRequest) {
                    xLanguage = checkDataBaseConfigRequest.xLanguage;
                    instanceId = checkDataBaseConfigRequest.instanceId;
                    body = checkDataBaseConfigRequest.body
                } else {
                    xLanguage = checkDataBaseConfigRequest['X-Language'];
                    instanceId = checkDataBaseConfigRequest['instance_id'];
                    body = checkDataBaseConfigRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling checkDataBaseConfig.');
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
         * StarRocks资源检查。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        checkStarRocksResource(checkStarRocksResourceRequest?: CheckStarRocksResourceRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/starrocks/resource-check",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xLanguage;

            if (checkStarRocksResourceRequest !== null && checkStarRocksResourceRequest !== undefined) {
                if (checkStarRocksResourceRequest instanceof CheckStarRocksResourceRequest) {
                    body = checkStarRocksResourceRequest.body
                    xLanguage = checkStarRocksResourceRequest.xLanguage;
                } else {
                    body = checkStarRocksResourceRequest['body'];
                    xLanguage = checkStarRocksResourceRequest['X-Language'];
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
         * 对比实例参数和默认模板的差异
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        checkStarrocksParams(checkStarrocksParamsRequest?: CheckStarrocksParamsRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/configurations/starrocks/comparison",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xLanguage;

            if (checkStarrocksParamsRequest !== null && checkStarrocksParamsRequest !== undefined) {
                if (checkStarrocksParamsRequest instanceof CheckStarrocksParamsRequest) {
                    xLanguage = checkStarrocksParamsRequest.xLanguage;
                    body = checkStarrocksParamsRequest.body
                } else {
                    xLanguage = checkStarrocksParamsRequest['X-Language'];
                    body = checkStarrocksParamsRequest['body'];
                }
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
         * HTAP数据同步表配置校验。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        checkTableConfig(checkTableConfigRequest?: CheckTableConfigRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/{instance_id}/starrocks/databases/replication/table-config-check",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xLanguage;
            
            let instanceId;

            if (checkTableConfigRequest !== null && checkTableConfigRequest !== undefined) {
                if (checkTableConfigRequest instanceof CheckTableConfigRequest) {
                    xLanguage = checkTableConfigRequest.xLanguage;
                    instanceId = checkTableConfigRequest.instanceId;
                    body = checkTableConfigRequest.body
                } else {
                    xLanguage = checkTableConfigRequest['X-Language'];
                    instanceId = checkTableConfigRequest['instance_id'];
                    body = checkTableConfigRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling checkTableConfig.');
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
         * 创建数据同步。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createClickHouseDataBaseReplication(createClickHouseDataBaseReplicationRequest?: CreateClickHouseDataBaseReplicationRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/{instance_id}/clickhouse/replication",
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

            if (createClickHouseDataBaseReplicationRequest !== null && createClickHouseDataBaseReplicationRequest !== undefined) {
                if (createClickHouseDataBaseReplicationRequest instanceof CreateClickHouseDataBaseReplicationRequest) {
                    instanceId = createClickHouseDataBaseReplicationRequest.instanceId;
                    body = createClickHouseDataBaseReplicationRequest.body
                    xLanguage = createClickHouseDataBaseReplicationRequest.xLanguage;
                } else {
                    instanceId = createClickHouseDataBaseReplicationRequest['instance_id'];
                    body = createClickHouseDataBaseReplicationRequest['body'];
                    xLanguage = createClickHouseDataBaseReplicationRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling createClickHouseDataBaseReplication.');
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
         * 创建数据库账号。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createClickHouseDatabaseUser(createClickHouseDatabaseUserRequest?: CreateClickHouseDatabaseUserRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/{instance_id}/clickhouse/users",
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

            if (createClickHouseDatabaseUserRequest !== null && createClickHouseDatabaseUserRequest !== undefined) {
                if (createClickHouseDatabaseUserRequest instanceof CreateClickHouseDatabaseUserRequest) {
                    instanceId = createClickHouseDatabaseUserRequest.instanceId;
                    body = createClickHouseDatabaseUserRequest.body
                    xLanguage = createClickHouseDatabaseUserRequest.xLanguage;
                } else {
                    instanceId = createClickHouseDatabaseUserRequest['instance_id'];
                    body = createClickHouseDatabaseUserRequest['body'];
                    xLanguage = createClickHouseDatabaseUserRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling createClickHouseDatabaseUser.');
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
         * 创建实例。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createClickHouseInstance(createClickHouseInstanceRequest?: CreateClickHouseInstanceRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/{instance_id}/clickhouse",
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

            if (createClickHouseInstanceRequest !== null && createClickHouseInstanceRequest !== undefined) {
                if (createClickHouseInstanceRequest instanceof CreateClickHouseInstanceRequest) {
                    instanceId = createClickHouseInstanceRequest.instanceId;
                    body = createClickHouseInstanceRequest.body
                    xLanguage = createClickHouseInstanceRequest.xLanguage;
                } else {
                    instanceId = createClickHouseInstanceRequest['instance_id'];
                    body = createClickHouseInstanceRequest['body'];
                    xLanguage = createClickHouseInstanceRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling createClickHouseInstance.');
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
         * 创建StarRocks数据同步。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createStarRocksDataReplication(createStarRocksDataReplicationRequest?: CreateStarRocksDataReplicationRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/{instance_id}/starrocks/databases/replication",
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

            if (createStarRocksDataReplicationRequest !== null && createStarRocksDataReplicationRequest !== undefined) {
                if (createStarRocksDataReplicationRequest instanceof CreateStarRocksDataReplicationRequest) {
                    instanceId = createStarRocksDataReplicationRequest.instanceId;
                    xLanguage = createStarRocksDataReplicationRequest.xLanguage;
                    body = createStarRocksDataReplicationRequest.body
                } else {
                    instanceId = createStarRocksDataReplicationRequest['instance_id'];
                    xLanguage = createStarRocksDataReplicationRequest['X-Language'];
                    body = createStarRocksDataReplicationRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling createStarRocksDataReplication.');
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
         * 创建StarRocks数据库账号。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createStarRocksDatabaseUser(createStarRocksDatabaseUserRequest?: CreateStarRocksDatabaseUserRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/{instance_id}/starrocks/users",
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

            if (createStarRocksDatabaseUserRequest !== null && createStarRocksDatabaseUserRequest !== undefined) {
                if (createStarRocksDatabaseUserRequest instanceof CreateStarRocksDatabaseUserRequest) {
                    instanceId = createStarRocksDatabaseUserRequest.instanceId;
                    body = createStarRocksDatabaseUserRequest.body
                    xLanguage = createStarRocksDatabaseUserRequest.xLanguage;
                } else {
                    instanceId = createStarRocksDatabaseUserRequest['instance_id'];
                    body = createStarRocksDatabaseUserRequest['body'];
                    xLanguage = createStarRocksDatabaseUserRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling createStarRocksDatabaseUser.');
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
         * 创建StarRocks实例。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createStarrocksInstance(createStarrocksInstanceRequest?: CreateStarrocksInstanceRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/{instance_id}/starrocks",
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

            if (createStarrocksInstanceRequest !== null && createStarrocksInstanceRequest !== undefined) {
                if (createStarrocksInstanceRequest instanceof CreateStarrocksInstanceRequest) {
                    instanceId = createStarrocksInstanceRequest.instanceId;
                    body = createStarrocksInstanceRequest.body
                    xLanguage = createStarrocksInstanceRequest.xLanguage;
                } else {
                    instanceId = createStarrocksInstanceRequest['instance_id'];
                    body = createStarrocksInstanceRequest['body'];
                    xLanguage = createStarrocksInstanceRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling createStarrocksInstance.');
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
         * 停止修改数据同步。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteClickHouseDataBaseConfig(deleteClickHouseDataBaseConfigRequest?: DeleteClickHouseDataBaseConfigRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{project_id}/instances/{instance_id}/clickhouse/databases/replication/config",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let database;
            
            let xLanguage;

            if (deleteClickHouseDataBaseConfigRequest !== null && deleteClickHouseDataBaseConfigRequest !== undefined) {
                if (deleteClickHouseDataBaseConfigRequest instanceof DeleteClickHouseDataBaseConfigRequest) {
                    instanceId = deleteClickHouseDataBaseConfigRequest.instanceId;
                    database = deleteClickHouseDataBaseConfigRequest.database;
                    xLanguage = deleteClickHouseDataBaseConfigRequest.xLanguage;
                } else {
                    instanceId = deleteClickHouseDataBaseConfigRequest['instance_id'];
                    database = deleteClickHouseDataBaseConfigRequest['database'];
                    xLanguage = deleteClickHouseDataBaseConfigRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling deleteClickHouseDataBaseConfig.');
            }
            if (database === null || database === undefined) {
                throw new RequiredError('database','Required parameter database was null or undefined when calling deleteClickHouseDataBaseConfig.');
            }
            if (database !== null && database !== undefined) {
                localVarQueryParameter['database'] = database;
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
         * 删除数据同步。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteClickHouseDataBaseReplication(deleteClickHouseDataBaseReplicationRequest?: DeleteClickHouseDataBaseReplicationRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{project_id}/instances/{instance_id}/clickhouse/replication/{database_name}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let databaseName;
            
            let xLanguage;

            if (deleteClickHouseDataBaseReplicationRequest !== null && deleteClickHouseDataBaseReplicationRequest !== undefined) {
                if (deleteClickHouseDataBaseReplicationRequest instanceof DeleteClickHouseDataBaseReplicationRequest) {
                    instanceId = deleteClickHouseDataBaseReplicationRequest.instanceId;
                    databaseName = deleteClickHouseDataBaseReplicationRequest.databaseName;
                    xLanguage = deleteClickHouseDataBaseReplicationRequest.xLanguage;
                } else {
                    instanceId = deleteClickHouseDataBaseReplicationRequest['instance_id'];
                    databaseName = deleteClickHouseDataBaseReplicationRequest['database_name'];
                    xLanguage = deleteClickHouseDataBaseReplicationRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling deleteClickHouseDataBaseReplication.');
            }
            if (databaseName === null || databaseName === undefined) {
            throw new RequiredError('databaseName','Required parameter databaseName was null or undefined when calling deleteClickHouseDataBaseReplication.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.pathParams = { 'instance_id': instanceId,'database_name': databaseName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除数据库账户。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteClickHouseDatabaseUser(deleteClickHouseDatabaseUserRequest?: DeleteClickHouseDatabaseUserRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{project_id}/instances/{instance_id}/clickhouse/users/{user_name}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let userName;
            
            let xLanguage;

            if (deleteClickHouseDatabaseUserRequest !== null && deleteClickHouseDatabaseUserRequest !== undefined) {
                if (deleteClickHouseDatabaseUserRequest instanceof DeleteClickHouseDatabaseUserRequest) {
                    instanceId = deleteClickHouseDatabaseUserRequest.instanceId;
                    userName = deleteClickHouseDatabaseUserRequest.userName;
                    xLanguage = deleteClickHouseDatabaseUserRequest.xLanguage;
                } else {
                    instanceId = deleteClickHouseDatabaseUserRequest['instance_id'];
                    userName = deleteClickHouseDatabaseUserRequest['user_name'];
                    xLanguage = deleteClickHouseDatabaseUserRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling deleteClickHouseDatabaseUser.');
            }
            if (userName === null || userName === undefined) {
            throw new RequiredError('userName','Required parameter userName was null or undefined when calling deleteClickHouseDatabaseUser.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.pathParams = { 'instance_id': instanceId,'user_name': userName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除实例。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteClickHouseInstance(deleteClickHouseInstanceRequest?: DeleteClickHouseInstanceRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{project_id}/instances/{instance_id}/clickhouse/{clickhouse_instance_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let clickhouseInstanceId;
            
            let xLanguage;

            if (deleteClickHouseInstanceRequest !== null && deleteClickHouseInstanceRequest !== undefined) {
                if (deleteClickHouseInstanceRequest instanceof DeleteClickHouseInstanceRequest) {
                    instanceId = deleteClickHouseInstanceRequest.instanceId;
                    clickhouseInstanceId = deleteClickHouseInstanceRequest.clickhouseInstanceId;
                    xLanguage = deleteClickHouseInstanceRequest.xLanguage;
                } else {
                    instanceId = deleteClickHouseInstanceRequest['instance_id'];
                    clickhouseInstanceId = deleteClickHouseInstanceRequest['clickhouse_instance_id'];
                    xLanguage = deleteClickHouseInstanceRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling deleteClickHouseInstance.');
            }
            if (clickhouseInstanceId === null || clickhouseInstanceId === undefined) {
            throw new RequiredError('clickhouseInstanceId','Required parameter clickhouseInstanceId was null or undefined when calling deleteClickHouseInstance.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.pathParams = { 'instance_id': instanceId,'clickhouse_instance_id': clickhouseInstanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 批量解除LTS日志配置。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteClickHouseLtsConfig(deleteClickHouseLtsConfigRequest?: DeleteClickHouseLtsConfigRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{project_id}/clickhouse/instances/logs/lts-configs",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xLanguage;

            if (deleteClickHouseLtsConfigRequest !== null && deleteClickHouseLtsConfigRequest !== undefined) {
                if (deleteClickHouseLtsConfigRequest instanceof DeleteClickHouseLtsConfigRequest) {
                    body = deleteClickHouseLtsConfigRequest.body
                    xLanguage = deleteClickHouseLtsConfigRequest.xLanguage;
                } else {
                    body = deleteClickHouseLtsConfigRequest['body'];
                    xLanguage = deleteClickHouseLtsConfigRequest['X-Language'];
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
         * 删除StarRocks数据同步。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteStarRocksDataReplication(deleteStarRocksDataReplicationRequest?: DeleteStarRocksDataReplicationRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{project_id}/instances/{instance_id}/starrocks/databases/replication",
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

            if (deleteStarRocksDataReplicationRequest !== null && deleteStarRocksDataReplicationRequest !== undefined) {
                if (deleteStarRocksDataReplicationRequest instanceof DeleteStarRocksDataReplicationRequest) {
                    instanceId = deleteStarRocksDataReplicationRequest.instanceId;
                    xLanguage = deleteStarRocksDataReplicationRequest.xLanguage;
                    body = deleteStarRocksDataReplicationRequest.body
                } else {
                    instanceId = deleteStarRocksDataReplicationRequest['instance_id'];
                    xLanguage = deleteStarRocksDataReplicationRequest['X-Language'];
                    body = deleteStarRocksDataReplicationRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling deleteStarRocksDataReplication.');
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
         * 删除StarRocks数据库账户。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteStarRocksDatabaseUser(deleteStarRocksDatabaseUserRequest?: DeleteStarRocksDatabaseUserRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{project_id}/instances/{instance_id}/starrocks/users",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let userName;
            
            let xLanguage;

            if (deleteStarRocksDatabaseUserRequest !== null && deleteStarRocksDatabaseUserRequest !== undefined) {
                if (deleteStarRocksDatabaseUserRequest instanceof DeleteStarRocksDatabaseUserRequest) {
                    instanceId = deleteStarRocksDatabaseUserRequest.instanceId;
                    userName = deleteStarRocksDatabaseUserRequest.userName;
                    xLanguage = deleteStarRocksDatabaseUserRequest.xLanguage;
                } else {
                    instanceId = deleteStarRocksDatabaseUserRequest['instance_id'];
                    userName = deleteStarRocksDatabaseUserRequest['user_name'];
                    xLanguage = deleteStarRocksDatabaseUserRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling deleteStarRocksDatabaseUser.');
            }
            if (userName === null || userName === undefined) {
                throw new RequiredError('userName','Required parameter userName was null or undefined when calling deleteStarRocksDatabaseUser.');
            }
            if (userName !== null && userName !== undefined) {
                localVarQueryParameter['user_name'] = userName;
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
         * 删除StarRocks实例。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteStarrocksInstance(deleteStarrocksInstanceRequest?: DeleteStarrocksInstanceRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{project_id}/instances/{instance_id}/starrocks/{starrocks_instance_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let starrocksInstanceId;
            
            let xLanguage;

            if (deleteStarrocksInstanceRequest !== null && deleteStarrocksInstanceRequest !== undefined) {
                if (deleteStarrocksInstanceRequest instanceof DeleteStarrocksInstanceRequest) {
                    instanceId = deleteStarrocksInstanceRequest.instanceId;
                    starrocksInstanceId = deleteStarrocksInstanceRequest.starrocksInstanceId;
                    xLanguage = deleteStarrocksInstanceRequest.xLanguage;
                } else {
                    instanceId = deleteStarrocksInstanceRequest['instance_id'];
                    starrocksInstanceId = deleteStarrocksInstanceRequest['starrocks_instance_id'];
                    xLanguage = deleteStarrocksInstanceRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling deleteStarrocksInstance.');
            }
            if (starrocksInstanceId === null || starrocksInstanceId === undefined) {
            throw new RequiredError('starrocksInstanceId','Required parameter starrocksInstanceId was null or undefined when calling deleteStarrocksInstance.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.pathParams = { 'instance_id': instanceId,'starrocks_instance_id': starrocksInstanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询数据库列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listClickHouseDataBase(listClickHouseDataBaseRequest?: ListClickHouseDataBaseRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/{instance_id}/clickhouse/databases",
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
            
            let databaseName;
            
            let xLanguage;

            if (listClickHouseDataBaseRequest !== null && listClickHouseDataBaseRequest !== undefined) {
                if (listClickHouseDataBaseRequest instanceof ListClickHouseDataBaseRequest) {
                    instanceId = listClickHouseDataBaseRequest.instanceId;
                    limit = listClickHouseDataBaseRequest.limit;
                    offset = listClickHouseDataBaseRequest.offset;
                    databaseName = listClickHouseDataBaseRequest.databaseName;
                    xLanguage = listClickHouseDataBaseRequest.xLanguage;
                } else {
                    instanceId = listClickHouseDataBaseRequest['instance_id'];
                    limit = listClickHouseDataBaseRequest['limit'];
                    offset = listClickHouseDataBaseRequest['offset'];
                    databaseName = listClickHouseDataBaseRequest['database_name'];
                    xLanguage = listClickHouseDataBaseRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listClickHouseDataBase.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
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
         * 查询数据同步的库参数配置。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listClickHouseDataBaseParameter(listClickHouseDataBaseParameterRequest?: ListClickHouseDataBaseParameterRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/{instance_id}/clickhouse/replication/database-parameter",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let xLanguage;

            if (listClickHouseDataBaseParameterRequest !== null && listClickHouseDataBaseParameterRequest !== undefined) {
                if (listClickHouseDataBaseParameterRequest instanceof ListClickHouseDataBaseParameterRequest) {
                    instanceId = listClickHouseDataBaseParameterRequest.instanceId;
                    xLanguage = listClickHouseDataBaseParameterRequest.xLanguage;
                } else {
                    instanceId = listClickHouseDataBaseParameterRequest['instance_id'];
                    xLanguage = listClickHouseDataBaseParameterRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listClickHouseDataBaseParameter.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询数据同步信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listClickHouseDataBaseReplication(listClickHouseDataBaseReplicationRequest?: ListClickHouseDataBaseReplicationRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/{instance_id}/clickhouse/replication",
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
            
            let xLanguage;

            if (listClickHouseDataBaseReplicationRequest !== null && listClickHouseDataBaseReplicationRequest !== undefined) {
                if (listClickHouseDataBaseReplicationRequest instanceof ListClickHouseDataBaseReplicationRequest) {
                    instanceId = listClickHouseDataBaseReplicationRequest.instanceId;
                    limit = listClickHouseDataBaseReplicationRequest.limit;
                    offset = listClickHouseDataBaseReplicationRequest.offset;
                    xLanguage = listClickHouseDataBaseReplicationRequest.xLanguage;
                } else {
                    instanceId = listClickHouseDataBaseReplicationRequest['instance_id'];
                    limit = listClickHouseDataBaseReplicationRequest['limit'];
                    offset = listClickHouseDataBaseReplicationRequest['offset'];
                    xLanguage = listClickHouseDataBaseReplicationRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listClickHouseDataBaseReplication.');
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
         * 查看数据同步配置。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listClickHouseDataBaseReplicationConfig(listClickHouseDataBaseReplicationConfigRequest?: ListClickHouseDataBaseReplicationConfigRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/{instance_id}/clickhouse/replication/config",
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

            if (listClickHouseDataBaseReplicationConfigRequest !== null && listClickHouseDataBaseReplicationConfigRequest !== undefined) {
                if (listClickHouseDataBaseReplicationConfigRequest instanceof ListClickHouseDataBaseReplicationConfigRequest) {
                    instanceId = listClickHouseDataBaseReplicationConfigRequest.instanceId;
                    databaseName = listClickHouseDataBaseReplicationConfigRequest.databaseName;
                    xLanguage = listClickHouseDataBaseReplicationConfigRequest.xLanguage;
                } else {
                    instanceId = listClickHouseDataBaseReplicationConfigRequest['instance_id'];
                    databaseName = listClickHouseDataBaseReplicationConfigRequest['database_name'];
                    xLanguage = listClickHouseDataBaseReplicationConfigRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listClickHouseDataBaseReplicationConfig.');
            }
            if (databaseName === null || databaseName === undefined) {
                throw new RequiredError('databaseName','Required parameter databaseName was null or undefined when calling listClickHouseDataBaseReplicationConfig.');
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
         * 查询实例详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listClickHouseInstance(listClickHouseInstanceRequest?: ListClickHouseInstanceRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/{instance_id}/clickhouse/{clickhouse_instance_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let clickhouseInstanceId;
            
            let xLanguage;

            if (listClickHouseInstanceRequest !== null && listClickHouseInstanceRequest !== undefined) {
                if (listClickHouseInstanceRequest instanceof ListClickHouseInstanceRequest) {
                    instanceId = listClickHouseInstanceRequest.instanceId;
                    clickhouseInstanceId = listClickHouseInstanceRequest.clickhouseInstanceId;
                    xLanguage = listClickHouseInstanceRequest.xLanguage;
                } else {
                    instanceId = listClickHouseInstanceRequest['instance_id'];
                    clickhouseInstanceId = listClickHouseInstanceRequest['clickhouse_instance_id'];
                    xLanguage = listClickHouseInstanceRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listClickHouseInstance.');
            }
            if (clickhouseInstanceId === null || clickhouseInstanceId === undefined) {
            throw new RequiredError('clickhouseInstanceId','Required parameter clickhouseInstanceId was null or undefined when calling listClickHouseInstance.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.pathParams = { 'instance_id': instanceId,'clickhouse_instance_id': clickhouseInstanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询错误日志、慢日志节点信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listClickHouseInstanceNode(listClickHouseInstanceNodeRequest?: ListClickHouseInstanceNodeRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/{instance_id}/clickhouse/nodes",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let xLanguage;

            if (listClickHouseInstanceNodeRequest !== null && listClickHouseInstanceNodeRequest !== undefined) {
                if (listClickHouseInstanceNodeRequest instanceof ListClickHouseInstanceNodeRequest) {
                    instanceId = listClickHouseInstanceNodeRequest.instanceId;
                    xLanguage = listClickHouseInstanceNodeRequest.xLanguage;
                } else {
                    instanceId = listClickHouseInstanceNodeRequest['instance_id'];
                    xLanguage = listClickHouseInstanceNodeRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listClickHouseInstanceNode.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * HTAP引擎资源查询。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listHtapDataStore(listHtapDataStoreRequest?: ListHtapDataStoreRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/htap/datastores/{engine_name}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let engineName;
            
            let xLanguage;

            if (listHtapDataStoreRequest !== null && listHtapDataStoreRequest !== undefined) {
                if (listHtapDataStoreRequest instanceof ListHtapDataStoreRequest) {
                    engineName = listHtapDataStoreRequest.engineName;
                    xLanguage = listHtapDataStoreRequest.xLanguage;
                } else {
                    engineName = listHtapDataStoreRequest['engine_name'];
                    xLanguage = listHtapDataStoreRequest['X-Language'];
                }
            }

        
            if (engineName === null || engineName === undefined) {
            throw new RequiredError('engineName','Required parameter engineName was null or undefined when calling listHtapDataStore.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.pathParams = { 'engine_name': engineName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * HTAP查询规格信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listHtapFlavor(listHtapFlavorRequest?: ListHtapFlavorRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/htap/flavors/{engine_name}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let engineName;
            
            let availabilityZoneMode;
            
            let specCode;
            
            let xLanguage;
            
            let versionName;

            if (listHtapFlavorRequest !== null && listHtapFlavorRequest !== undefined) {
                if (listHtapFlavorRequest instanceof ListHtapFlavorRequest) {
                    engineName = listHtapFlavorRequest.engineName;
                    availabilityZoneMode = listHtapFlavorRequest.availabilityZoneMode;
                    specCode = listHtapFlavorRequest.specCode;
                    xLanguage = listHtapFlavorRequest.xLanguage;
                    versionName = listHtapFlavorRequest.versionName;
                } else {
                    engineName = listHtapFlavorRequest['engine_name'];
                    availabilityZoneMode = listHtapFlavorRequest['availability_zone_mode'];
                    specCode = listHtapFlavorRequest['spec_code'];
                    xLanguage = listHtapFlavorRequest['X-Language'];
                    versionName = listHtapFlavorRequest['version_name'];
                }
            }

        
            if (engineName === null || engineName === undefined) {
            throw new RequiredError('engineName','Required parameter engineName was null or undefined when calling listHtapFlavor.');
            }
            if (availabilityZoneMode !== null && availabilityZoneMode !== undefined) {
                localVarQueryParameter['availability_zone_mode'] = availabilityZoneMode;
            }
            if (specCode !== null && specCode !== undefined) {
                localVarQueryParameter['spec_code'] = specCode;
            }
            if (versionName !== null && versionName !== undefined) {
                localVarQueryParameter['version_name'] = versionName;
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'engine_name': engineName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询HTAP实例列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listHtapInstanceInfo(listHtapInstanceInfoRequest?: ListHtapInstanceInfoRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/{instance_id}/htap",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let xLanguage;

            if (listHtapInstanceInfoRequest !== null && listHtapInstanceInfoRequest !== undefined) {
                if (listHtapInstanceInfoRequest instanceof ListHtapInstanceInfoRequest) {
                    instanceId = listHtapInstanceInfoRequest.instanceId;
                    xLanguage = listHtapInstanceInfoRequest.xLanguage;
                } else {
                    instanceId = listHtapInstanceInfoRequest['instance_id'];
                    xLanguage = listHtapInstanceInfoRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listHtapInstanceInfo.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取HTAP实例存储类型。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listHtapStorageType(listHtapStorageTypeRequest?: ListHtapStorageTypeRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/htap/storage-type/{database}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let database;
            
            let versionName;
            
            let xLanguage;

            if (listHtapStorageTypeRequest !== null && listHtapStorageTypeRequest !== undefined) {
                if (listHtapStorageTypeRequest instanceof ListHtapStorageTypeRequest) {
                    database = listHtapStorageTypeRequest.database;
                    versionName = listHtapStorageTypeRequest.versionName;
                    xLanguage = listHtapStorageTypeRequest.xLanguage;
                } else {
                    database = listHtapStorageTypeRequest['database'];
                    versionName = listHtapStorageTypeRequest['version_name'];
                    xLanguage = listHtapStorageTypeRequest['X-Language'];
                }
            }

        
            if (database === null || database === undefined) {
            throw new RequiredError('database','Required parameter database was null or undefined when calling listHtapStorageType.');
            }
            if (versionName === null || versionName === undefined) {
                throw new RequiredError('versionName','Required parameter versionName was null or undefined when calling listHtapStorageType.');
            }
            if (versionName !== null && versionName !== undefined) {
                localVarQueryParameter['version_name'] = versionName;
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'database': database, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询StarRocks数据库。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listStarRocksDataBases(listStarRocksDataBasesRequest?: ListStarRocksDataBasesRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/{instance_id}/starrocks/databases",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let xLanguage;
            
            let instanceId;
            
            let limit;
            
            let offset;
            
            let databaseName;

            if (listStarRocksDataBasesRequest !== null && listStarRocksDataBasesRequest !== undefined) {
                if (listStarRocksDataBasesRequest instanceof ListStarRocksDataBasesRequest) {
                    xLanguage = listStarRocksDataBasesRequest.xLanguage;
                    instanceId = listStarRocksDataBasesRequest.instanceId;
                    limit = listStarRocksDataBasesRequest.limit;
                    offset = listStarRocksDataBasesRequest.offset;
                    databaseName = listStarRocksDataBasesRequest.databaseName;
                } else {
                    xLanguage = listStarRocksDataBasesRequest['X-Language'];
                    instanceId = listStarRocksDataBasesRequest['instance_id'];
                    limit = listStarRocksDataBasesRequest['limit'];
                    offset = listStarRocksDataBasesRequest['offset'];
                    databaseName = listStarRocksDataBasesRequest['database_name'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listStarRocksDataBases.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
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
         * 查询StarRocks数据同步配置信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listStarRocksDataReplicationConfig(listStarRocksDataReplicationConfigRequest?: ListStarRocksDataReplicationConfigRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/{instance_id}/starrocks/databases/replication/configuration",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let xLanguage;
            
            let taskName;

            if (listStarRocksDataReplicationConfigRequest !== null && listStarRocksDataReplicationConfigRequest !== undefined) {
                if (listStarRocksDataReplicationConfigRequest instanceof ListStarRocksDataReplicationConfigRequest) {
                    instanceId = listStarRocksDataReplicationConfigRequest.instanceId;
                    xLanguage = listStarRocksDataReplicationConfigRequest.xLanguage;
                    taskName = listStarRocksDataReplicationConfigRequest.taskName;
                } else {
                    instanceId = listStarRocksDataReplicationConfigRequest['instance_id'];
                    xLanguage = listStarRocksDataReplicationConfigRequest['X-Language'];
                    taskName = listStarRocksDataReplicationConfigRequest['task_name'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listStarRocksDataReplicationConfig.');
            }
            if (taskName === null || taskName === undefined) {
                throw new RequiredError('taskName','Required parameter taskName was null or undefined when calling listStarRocksDataReplicationConfig.');
            }
            if (taskName !== null && taskName !== undefined) {
                localVarQueryParameter['task_name'] = taskName;
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
         * 按目标库查询StarRocks数据同步配置信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listStarRocksDataReplicationConfigByDataBase(listStarRocksDataReplicationConfigByDataBaseRequest?: ListStarRocksDataReplicationConfigByDataBaseRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/{instance_id}/starrocks/databases/replication/configuration/{database}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let xLanguage;
            
            let database;

            if (listStarRocksDataReplicationConfigByDataBaseRequest !== null && listStarRocksDataReplicationConfigByDataBaseRequest !== undefined) {
                if (listStarRocksDataReplicationConfigByDataBaseRequest instanceof ListStarRocksDataReplicationConfigByDataBaseRequest) {
                    instanceId = listStarRocksDataReplicationConfigByDataBaseRequest.instanceId;
                    xLanguage = listStarRocksDataReplicationConfigByDataBaseRequest.xLanguage;
                    database = listStarRocksDataReplicationConfigByDataBaseRequest.database;
                } else {
                    instanceId = listStarRocksDataReplicationConfigByDataBaseRequest['instance_id'];
                    xLanguage = listStarRocksDataReplicationConfigByDataBaseRequest['X-Language'];
                    database = listStarRocksDataReplicationConfigByDataBaseRequest['database'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listStarRocksDataReplicationConfigByDataBase.');
            }
            if (database === null || database === undefined) {
            throw new RequiredError('database','Required parameter database was null or undefined when calling listStarRocksDataReplicationConfigByDataBase.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.pathParams = { 'instance_id': instanceId,'database': database, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询StarRocks数据同步状态信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listStarRocksDataReplications(listStarRocksDataReplicationsRequest?: ListStarRocksDataReplicationsRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/{instance_id}/starrocks/databases/replication",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let xLanguage;
            
            let limit;
            
            let offset;

            if (listStarRocksDataReplicationsRequest !== null && listStarRocksDataReplicationsRequest !== undefined) {
                if (listStarRocksDataReplicationsRequest instanceof ListStarRocksDataReplicationsRequest) {
                    instanceId = listStarRocksDataReplicationsRequest.instanceId;
                    xLanguage = listStarRocksDataReplicationsRequest.xLanguage;
                    limit = listStarRocksDataReplicationsRequest.limit;
                    offset = listStarRocksDataReplicationsRequest.offset;
                } else {
                    instanceId = listStarRocksDataReplicationsRequest['instance_id'];
                    xLanguage = listStarRocksDataReplicationsRequest['X-Language'];
                    limit = listStarRocksDataReplicationsRequest['limit'];
                    offset = listStarRocksDataReplicationsRequest['offset'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listStarRocksDataReplications.');
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
         * 查询StarRocks数据同步的库参数配置。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listStarRocksDbParameters(listStarRocksDbParametersRequest?: ListStarRocksDbParametersRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/{instance_id}/starrocks/databases/replication/database-parameters",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let xLanguage;
            
            let addTaskScenario;
            
            let mainTaskName;

            if (listStarRocksDbParametersRequest !== null && listStarRocksDbParametersRequest !== undefined) {
                if (listStarRocksDbParametersRequest instanceof ListStarRocksDbParametersRequest) {
                    instanceId = listStarRocksDbParametersRequest.instanceId;
                    xLanguage = listStarRocksDbParametersRequest.xLanguage;
                    addTaskScenario = listStarRocksDbParametersRequest.addTaskScenario;
                    mainTaskName = listStarRocksDbParametersRequest.mainTaskName;
                } else {
                    instanceId = listStarRocksDbParametersRequest['instance_id'];
                    xLanguage = listStarRocksDbParametersRequest['X-Language'];
                    addTaskScenario = listStarRocksDbParametersRequest['add_task_scenario'];
                    mainTaskName = listStarRocksDbParametersRequest['main_task_name'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listStarRocksDbParameters.');
            }
            if (addTaskScenario !== null && addTaskScenario !== undefined) {
                localVarQueryParameter['add_task_scenario'] = addTaskScenario;
            }
            if (mainTaskName !== null && mainTaskName !== undefined) {
                localVarQueryParameter['main_task_name'] = mainTaskName;
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
         * 查询StarRocks实例。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listStarrocksInstanceInfo(listStarrocksInstanceInfoRequest?: ListStarrocksInstanceInfoRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/{instance_id}/starrocks/{starrocks_instance_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let starrocksInstanceId;
            
            let xLanguage;

            if (listStarrocksInstanceInfoRequest !== null && listStarrocksInstanceInfoRequest !== undefined) {
                if (listStarrocksInstanceInfoRequest instanceof ListStarrocksInstanceInfoRequest) {
                    instanceId = listStarrocksInstanceInfoRequest.instanceId;
                    starrocksInstanceId = listStarrocksInstanceInfoRequest.starrocksInstanceId;
                    xLanguage = listStarrocksInstanceInfoRequest.xLanguage;
                } else {
                    instanceId = listStarrocksInstanceInfoRequest['instance_id'];
                    starrocksInstanceId = listStarrocksInstanceInfoRequest['starrocks_instance_id'];
                    xLanguage = listStarrocksInstanceInfoRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listStarrocksInstanceInfo.');
            }
            if (starrocksInstanceId === null || starrocksInstanceId === undefined) {
            throw new RequiredError('starrocksInstanceId','Required parameter starrocksInstanceId was null or undefined when calling listStarrocksInstanceInfo.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.pathParams = { 'instance_id': instanceId,'starrocks_instance_id': starrocksInstanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改StarRocks数据同步配置。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        modifyDataSync(modifyDataSyncRequest?: ModifyDataSyncRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/instances/{instance_id}/starrocks/databases/replication",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xLanguage;
            
            let instanceId;

            if (modifyDataSyncRequest !== null && modifyDataSyncRequest !== undefined) {
                if (modifyDataSyncRequest instanceof ModifyDataSyncRequest) {
                    xLanguage = modifyDataSyncRequest.xLanguage;
                    instanceId = modifyDataSyncRequest.instanceId;
                    body = modifyDataSyncRequest.body
                } else {
                    xLanguage = modifyDataSyncRequest['X-Language'];
                    instanceId = modifyDataSyncRequest['instance_id'];
                    body = modifyDataSyncRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling modifyDataSync.');
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
         * 暂停StarRocks数据同步。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        pauseStarRocksDataReplication(pauseStarRocksDataReplicationRequest?: PauseStarRocksDataReplicationRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/{instance_id}/starrocks/databases/replication/pause",
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

            if (pauseStarRocksDataReplicationRequest !== null && pauseStarRocksDataReplicationRequest !== undefined) {
                if (pauseStarRocksDataReplicationRequest instanceof PauseStarRocksDataReplicationRequest) {
                    instanceId = pauseStarRocksDataReplicationRequest.instanceId;
                    xLanguage = pauseStarRocksDataReplicationRequest.xLanguage;
                    body = pauseStarRocksDataReplicationRequest.body
                } else {
                    instanceId = pauseStarRocksDataReplicationRequest['instance_id'];
                    xLanguage = pauseStarRocksDataReplicationRequest['X-Language'];
                    body = pauseStarRocksDataReplicationRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling pauseStarRocksDataReplication.');
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
         * 重启实例。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        rebootClickHouseInstance(rebootClickHouseInstanceRequest?: RebootClickHouseInstanceRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/instances/{instance_id}/clickhouse/restart",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let xLanguage;

            if (rebootClickHouseInstanceRequest !== null && rebootClickHouseInstanceRequest !== undefined) {
                if (rebootClickHouseInstanceRequest instanceof RebootClickHouseInstanceRequest) {
                    instanceId = rebootClickHouseInstanceRequest.instanceId;
                    xLanguage = rebootClickHouseInstanceRequest.xLanguage;
                } else {
                    instanceId = rebootClickHouseInstanceRequest['instance_id'];
                    xLanguage = rebootClickHouseInstanceRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling rebootClickHouseInstance.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 实例规格变更。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        resizeClickHouseFlavor(resizeClickHouseFlavorRequest?: ResizeClickHouseFlavorRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/{instance_id}/clickhouse/resize-flavor",
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

            if (resizeClickHouseFlavorRequest !== null && resizeClickHouseFlavorRequest !== undefined) {
                if (resizeClickHouseFlavorRequest instanceof ResizeClickHouseFlavorRequest) {
                    instanceId = resizeClickHouseFlavorRequest.instanceId;
                    body = resizeClickHouseFlavorRequest.body
                    xLanguage = resizeClickHouseFlavorRequest.xLanguage;
                } else {
                    instanceId = resizeClickHouseFlavorRequest['instance_id'];
                    body = resizeClickHouseFlavorRequest['body'];
                    xLanguage = resizeClickHouseFlavorRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling resizeClickHouseFlavor.');
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
         * 实例磁盘扩容。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        resizeClickHouseInstance(resizeClickHouseInstanceRequest?: ResizeClickHouseInstanceRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/instances/{instance_id}/clickhouse/resize",
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

            if (resizeClickHouseInstanceRequest !== null && resizeClickHouseInstanceRequest !== undefined) {
                if (resizeClickHouseInstanceRequest instanceof ResizeClickHouseInstanceRequest) {
                    instanceId = resizeClickHouseInstanceRequest.instanceId;
                    body = resizeClickHouseInstanceRequest.body
                    xLanguage = resizeClickHouseInstanceRequest.xLanguage;
                } else {
                    instanceId = resizeClickHouseInstanceRequest['instance_id'];
                    body = resizeClickHouseInstanceRequest['body'];
                    xLanguage = resizeClickHouseInstanceRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling resizeClickHouseInstance.');
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
         * StarRocks实例规格变更。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        resizeStarRocksFlavor(resizeStarRocksFlavorRequest?: ResizeStarRocksFlavorRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/{instance_id}/starrocks/resize-flavor",
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

            if (resizeStarRocksFlavorRequest !== null && resizeStarRocksFlavorRequest !== undefined) {
                if (resizeStarRocksFlavorRequest instanceof ResizeStarRocksFlavorRequest) {
                    instanceId = resizeStarRocksFlavorRequest.instanceId;
                    body = resizeStarRocksFlavorRequest.body
                    xLanguage = resizeStarRocksFlavorRequest.xLanguage;
                } else {
                    instanceId = resizeStarRocksFlavorRequest['instance_id'];
                    body = resizeStarRocksFlavorRequest['body'];
                    xLanguage = resizeStarRocksFlavorRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling resizeStarRocksFlavor.');
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
         * 重启StarRocks实例。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        restartStarrocksInstance(restartStarrocksInstanceRequest?: RestartStarrocksInstanceRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/instances/{starrocks_instance_id}/starrocks/restart",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let starrocksInstanceId;
            
            let xLanguage;

            if (restartStarrocksInstanceRequest !== null && restartStarrocksInstanceRequest !== undefined) {
                if (restartStarrocksInstanceRequest instanceof RestartStarrocksInstanceRequest) {
                    starrocksInstanceId = restartStarrocksInstanceRequest.starrocksInstanceId;
                    xLanguage = restartStarrocksInstanceRequest.xLanguage;
                } else {
                    starrocksInstanceId = restartStarrocksInstanceRequest['starrocks_instance_id'];
                    xLanguage = restartStarrocksInstanceRequest['X-Language'];
                }
            }

        
            if (starrocksInstanceId === null || starrocksInstanceId === undefined) {
            throw new RequiredError('starrocksInstanceId','Required parameter starrocksInstanceId was null or undefined when calling restartStarrocksInstance.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.pathParams = { 'starrocks_instance_id': starrocksInstanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 重启StarRocks节点。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        restartStarrocksNode(restartStarrocksNodeRequest?: RestartStarrocksNodeRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/instances/{starrocks_instance_id}/starrocks/{starrocks_node_id}/restart",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let starrocksNodeId;
            
            let starrocksInstanceId;
            
            let xLanguage;

            if (restartStarrocksNodeRequest !== null && restartStarrocksNodeRequest !== undefined) {
                if (restartStarrocksNodeRequest instanceof RestartStarrocksNodeRequest) {
                    starrocksNodeId = restartStarrocksNodeRequest.starrocksNodeId;
                    starrocksInstanceId = restartStarrocksNodeRequest.starrocksInstanceId;
                    xLanguage = restartStarrocksNodeRequest.xLanguage;
                } else {
                    starrocksNodeId = restartStarrocksNodeRequest['starrocks_node_id'];
                    starrocksInstanceId = restartStarrocksNodeRequest['starrocks_instance_id'];
                    xLanguage = restartStarrocksNodeRequest['X-Language'];
                }
            }

        
            if (starrocksNodeId === null || starrocksNodeId === undefined) {
            throw new RequiredError('starrocksNodeId','Required parameter starrocksNodeId was null or undefined when calling restartStarrocksNode.');
            }
            if (starrocksInstanceId === null || starrocksInstanceId === undefined) {
            throw new RequiredError('starrocksInstanceId','Required parameter starrocksInstanceId was null or undefined when calling restartStarrocksNode.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.pathParams = { 'starrocks_node_id': starrocksNodeId,'starrocks_instance_id': starrocksInstanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 恢复StarRocks数据同步。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        resumeStarRocksDataReplication(resumeStarRocksDataReplicationRequest?: ResumeStarRocksDataReplicationRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/{instance_id}/starrocks/databases/replication/resume",
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

            if (resumeStarRocksDataReplicationRequest !== null && resumeStarRocksDataReplicationRequest !== undefined) {
                if (resumeStarRocksDataReplicationRequest instanceof ResumeStarRocksDataReplicationRequest) {
                    instanceId = resumeStarRocksDataReplicationRequest.instanceId;
                    xLanguage = resumeStarRocksDataReplicationRequest.xLanguage;
                    body = resumeStarRocksDataReplicationRequest.body
                } else {
                    instanceId = resumeStarRocksDataReplicationRequest['instance_id'];
                    xLanguage = resumeStarRocksDataReplicationRequest['X-Language'];
                    body = resumeStarRocksDataReplicationRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling resumeStarRocksDataReplication.');
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
         * 查询数据库账户。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showClickHouseDatabaseUser(showClickHouseDatabaseUserRequest?: ShowClickHouseDatabaseUserRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/{instance_id}/clickhouse/users",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let xLanguage;
            
            let limit;
            
            let offset;
            
            let userName;

            if (showClickHouseDatabaseUserRequest !== null && showClickHouseDatabaseUserRequest !== undefined) {
                if (showClickHouseDatabaseUserRequest instanceof ShowClickHouseDatabaseUserRequest) {
                    instanceId = showClickHouseDatabaseUserRequest.instanceId;
                    xLanguage = showClickHouseDatabaseUserRequest.xLanguage;
                    limit = showClickHouseDatabaseUserRequest.limit;
                    offset = showClickHouseDatabaseUserRequest.offset;
                    userName = showClickHouseDatabaseUserRequest.userName;
                } else {
                    instanceId = showClickHouseDatabaseUserRequest['instance_id'];
                    xLanguage = showClickHouseDatabaseUserRequest['X-Language'];
                    limit = showClickHouseDatabaseUserRequest['limit'];
                    offset = showClickHouseDatabaseUserRequest['offset'];
                    userName = showClickHouseDatabaseUserRequest['user_name'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showClickHouseDatabaseUser.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (userName !== null && userName !== undefined) {
                localVarQueryParameter['user_name'] = userName;
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
         * 查询实例LTS日志配置列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showClickHouseLtsConfig(showClickHouseLtsConfigRequest?: ShowClickHouseLtsConfigRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/clickhouse/instances/logs/lts-configs",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let xLanguage;
            
            let instanceId;
            
            let enterpriseProjectId;
            
            let instanceName;
            
            let limit;
            
            let offset;

            if (showClickHouseLtsConfigRequest !== null && showClickHouseLtsConfigRequest !== undefined) {
                if (showClickHouseLtsConfigRequest instanceof ShowClickHouseLtsConfigRequest) {
                    xLanguage = showClickHouseLtsConfigRequest.xLanguage;
                    instanceId = showClickHouseLtsConfigRequest.instanceId;
                    enterpriseProjectId = showClickHouseLtsConfigRequest.enterpriseProjectId;
                    instanceName = showClickHouseLtsConfigRequest.instanceName;
                    limit = showClickHouseLtsConfigRequest.limit;
                    offset = showClickHouseLtsConfigRequest.offset;
                } else {
                    xLanguage = showClickHouseLtsConfigRequest['X-Language'];
                    instanceId = showClickHouseLtsConfigRequest['instance_id'];
                    enterpriseProjectId = showClickHouseLtsConfigRequest['enterprise_project_id'];
                    instanceName = showClickHouseLtsConfigRequest['instance_name'];
                    limit = showClickHouseLtsConfigRequest['limit'];
                    offset = showClickHouseLtsConfigRequest['offset'];
                }
            }

        
            if (instanceId !== null && instanceId !== undefined) {
                localVarQueryParameter['instance_id'] = instanceId;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (instanceName !== null && instanceName !== undefined) {
                localVarQueryParameter['instance_name'] = instanceName;
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
         * 获取内核慢日志信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showClickHouseSlowLogDetail(showClickHouseSlowLogDetailRequest?: ShowClickHouseSlowLogDetailRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/{instance_id}/clickhouse/slow-logs",
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

            if (showClickHouseSlowLogDetailRequest !== null && showClickHouseSlowLogDetailRequest !== undefined) {
                if (showClickHouseSlowLogDetailRequest instanceof ShowClickHouseSlowLogDetailRequest) {
                    instanceId = showClickHouseSlowLogDetailRequest.instanceId;
                    body = showClickHouseSlowLogDetailRequest.body
                    xLanguage = showClickHouseSlowLogDetailRequest.xLanguage;
                } else {
                    instanceId = showClickHouseSlowLogDetailRequest['instance_id'];
                    body = showClickHouseSlowLogDetailRequest['body'];
                    xLanguage = showClickHouseSlowLogDetailRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showClickHouseSlowLogDetail.');
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
         * 查询慢日志脱敏状态。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showClickHouseSlowLogSensitiveStatus(showClickHouseSlowLogSensitiveStatusRequest?: ShowClickHouseSlowLogSensitiveStatusRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/{instance_id}/clickhouse/slowlog-sensitive",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let xLanguage;

            if (showClickHouseSlowLogSensitiveStatusRequest !== null && showClickHouseSlowLogSensitiveStatusRequest !== undefined) {
                if (showClickHouseSlowLogSensitiveStatusRequest instanceof ShowClickHouseSlowLogSensitiveStatusRequest) {
                    instanceId = showClickHouseSlowLogSensitiveStatusRequest.instanceId;
                    xLanguage = showClickHouseSlowLogSensitiveStatusRequest.xLanguage;
                } else {
                    instanceId = showClickHouseSlowLogSensitiveStatusRequest['instance_id'];
                    xLanguage = showClickHouseSlowLogSensitiveStatusRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showClickHouseSlowLogSensitiveStatus.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询StarRocks数据库账户。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showStarRocksDatabaseUser(showStarRocksDatabaseUserRequest?: ShowStarRocksDatabaseUserRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/{instance_id}/starrocks/users",
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
            
            let userName;
            
            let xLanguage;

            if (showStarRocksDatabaseUserRequest !== null && showStarRocksDatabaseUserRequest !== undefined) {
                if (showStarRocksDatabaseUserRequest instanceof ShowStarRocksDatabaseUserRequest) {
                    instanceId = showStarRocksDatabaseUserRequest.instanceId;
                    limit = showStarRocksDatabaseUserRequest.limit;
                    offset = showStarRocksDatabaseUserRequest.offset;
                    userName = showStarRocksDatabaseUserRequest.userName;
                    xLanguage = showStarRocksDatabaseUserRequest.xLanguage;
                } else {
                    instanceId = showStarRocksDatabaseUserRequest['instance_id'];
                    limit = showStarRocksDatabaseUserRequest['limit'];
                    offset = showStarRocksDatabaseUserRequest['offset'];
                    userName = showStarRocksDatabaseUserRequest['user_name'];
                    xLanguage = showStarRocksDatabaseUserRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showStarRocksDatabaseUser.');
            }
            if (limit === null || limit === undefined) {
                throw new RequiredError('limit','Required parameter limit was null or undefined when calling showStarRocksDatabaseUser.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset === null || offset === undefined) {
                throw new RequiredError('offset','Required parameter offset was null or undefined when calling showStarRocksDatabaseUser.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (userName !== null && userName !== undefined) {
                localVarQueryParameter['user_name'] = userName;
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
         * 按节点类型查询参数
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showStarrocksParams(showStarrocksParamsRequest?: ShowStarrocksParamsRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/{instance_id}/starrocks/configurations",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let nodeType;
            
            let offset;
            
            let limit;
            
            let xLanguage;

            if (showStarrocksParamsRequest !== null && showStarrocksParamsRequest !== undefined) {
                if (showStarrocksParamsRequest instanceof ShowStarrocksParamsRequest) {
                    instanceId = showStarrocksParamsRequest.instanceId;
                    nodeType = showStarrocksParamsRequest.nodeType;
                    offset = showStarrocksParamsRequest.offset;
                    limit = showStarrocksParamsRequest.limit;
                    xLanguage = showStarrocksParamsRequest.xLanguage;
                } else {
                    instanceId = showStarrocksParamsRequest['instance_id'];
                    nodeType = showStarrocksParamsRequest['node_type'];
                    offset = showStarrocksParamsRequest['offset'];
                    limit = showStarrocksParamsRequest['limit'];
                    xLanguage = showStarrocksParamsRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showStarrocksParams.');
            }
            if (nodeType === null || nodeType === undefined) {
                throw new RequiredError('nodeType','Required parameter nodeType was null or undefined when calling showStarrocksParams.');
            }
            if (nodeType !== null && nodeType !== undefined) {
                localVarQueryParameter['node_type'] = nodeType;
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
         * StarRocks实例开启行列分流。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        syncStarRocksUsers(syncStarRocksUsersRequest?: SyncStarRocksUsersRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/{instance_id}/starrocks/users/sync",
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

            if (syncStarRocksUsersRequest !== null && syncStarRocksUsersRequest !== undefined) {
                if (syncStarRocksUsersRequest instanceof SyncStarRocksUsersRequest) {
                    instanceId = syncStarRocksUsersRequest.instanceId;
                    body = syncStarRocksUsersRequest.body
                    xLanguage = syncStarRocksUsersRequest.xLanguage;
                } else {
                    instanceId = syncStarRocksUsersRequest['instance_id'];
                    body = syncStarRocksUsersRequest['body'];
                    xLanguage = syncStarRocksUsersRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling syncStarRocksUsers.');
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
         * 修改数据同步。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateClickHouseDataBaseConfig(updateClickHouseDataBaseConfigRequest?: UpdateClickHouseDataBaseConfigRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/instances/{instance_id}/clickhouse/databases/replication/config",
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

            if (updateClickHouseDataBaseConfigRequest !== null && updateClickHouseDataBaseConfigRequest !== undefined) {
                if (updateClickHouseDataBaseConfigRequest instanceof UpdateClickHouseDataBaseConfigRequest) {
                    instanceId = updateClickHouseDataBaseConfigRequest.instanceId;
                    body = updateClickHouseDataBaseConfigRequest.body
                    xLanguage = updateClickHouseDataBaseConfigRequest.xLanguage;
                } else {
                    instanceId = updateClickHouseDataBaseConfigRequest['instance_id'];
                    body = updateClickHouseDataBaseConfigRequest['body'];
                    xLanguage = updateClickHouseDataBaseConfigRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updateClickHouseDataBaseConfig.');
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
         * 修改数据库账号密码。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateClickHouseDatabaseUserPassword(updateClickHouseDatabaseUserPasswordRequest?: UpdateClickHouseDatabaseUserPasswordRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/instances/{instance_id}/clickhouse/users/password",
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

            if (updateClickHouseDatabaseUserPasswordRequest !== null && updateClickHouseDatabaseUserPasswordRequest !== undefined) {
                if (updateClickHouseDatabaseUserPasswordRequest instanceof UpdateClickHouseDatabaseUserPasswordRequest) {
                    instanceId = updateClickHouseDatabaseUserPasswordRequest.instanceId;
                    body = updateClickHouseDatabaseUserPasswordRequest.body
                    xLanguage = updateClickHouseDatabaseUserPasswordRequest.xLanguage;
                } else {
                    instanceId = updateClickHouseDatabaseUserPasswordRequest['instance_id'];
                    body = updateClickHouseDatabaseUserPasswordRequest['body'];
                    xLanguage = updateClickHouseDatabaseUserPasswordRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updateClickHouseDatabaseUserPassword.');
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
         * 修改数据库账号权限。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateClickHouseDatabaseUserPermission(updateClickHouseDatabaseUserPermissionRequest?: UpdateClickHouseDatabaseUserPermissionRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/instances/{instance_id}/clickhouse/users/permission",
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

            if (updateClickHouseDatabaseUserPermissionRequest !== null && updateClickHouseDatabaseUserPermissionRequest !== undefined) {
                if (updateClickHouseDatabaseUserPermissionRequest instanceof UpdateClickHouseDatabaseUserPermissionRequest) {
                    instanceId = updateClickHouseDatabaseUserPermissionRequest.instanceId;
                    body = updateClickHouseDatabaseUserPermissionRequest.body
                    xLanguage = updateClickHouseDatabaseUserPermissionRequest.xLanguage;
                } else {
                    instanceId = updateClickHouseDatabaseUserPermissionRequest['instance_id'];
                    body = updateClickHouseDatabaseUserPermissionRequest['body'];
                    xLanguage = updateClickHouseDatabaseUserPermissionRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updateClickHouseDatabaseUserPermission.');
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
         * 批量创建LTS日志配置。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateClickHouseLtsConfig(updateClickHouseLtsConfigRequest?: UpdateClickHouseLtsConfigRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/clickhouse/instances/logs/lts-configs",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xLanguage;

            if (updateClickHouseLtsConfigRequest !== null && updateClickHouseLtsConfigRequest !== undefined) {
                if (updateClickHouseLtsConfigRequest instanceof UpdateClickHouseLtsConfigRequest) {
                    body = updateClickHouseLtsConfigRequest.body
                    xLanguage = updateClickHouseLtsConfigRequest.xLanguage;
                } else {
                    body = updateClickHouseLtsConfigRequest['body'];
                    xLanguage = updateClickHouseLtsConfigRequest['X-Language'];
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
         * 修改慢日志脱敏状态。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateClickHouseSlowLogSensitiveStatus(updateClickHouseSlowLogSensitiveStatusRequest?: UpdateClickHouseSlowLogSensitiveStatusRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/instances/{instance_id}/clickhouse/slowlog-sensitive",
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

            if (updateClickHouseSlowLogSensitiveStatusRequest !== null && updateClickHouseSlowLogSensitiveStatusRequest !== undefined) {
                if (updateClickHouseSlowLogSensitiveStatusRequest instanceof UpdateClickHouseSlowLogSensitiveStatusRequest) {
                    instanceId = updateClickHouseSlowLogSensitiveStatusRequest.instanceId;
                    body = updateClickHouseSlowLogSensitiveStatusRequest.body
                    xLanguage = updateClickHouseSlowLogSensitiveStatusRequest.xLanguage;
                } else {
                    instanceId = updateClickHouseSlowLogSensitiveStatusRequest['instance_id'];
                    body = updateClickHouseSlowLogSensitiveStatusRequest['body'];
                    xLanguage = updateClickHouseSlowLogSensitiveStatusRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updateClickHouseSlowLogSensitiveStatus.');
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
         * 修改StarRocks数据库账号密码。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateStarRocksDatabaseUserPassword(updateStarRocksDatabaseUserPasswordRequest?: UpdateStarRocksDatabaseUserPasswordRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/instances/{instance_id}/starrocks/users/password",
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

            if (updateStarRocksDatabaseUserPasswordRequest !== null && updateStarRocksDatabaseUserPasswordRequest !== undefined) {
                if (updateStarRocksDatabaseUserPasswordRequest instanceof UpdateStarRocksDatabaseUserPasswordRequest) {
                    instanceId = updateStarRocksDatabaseUserPasswordRequest.instanceId;
                    body = updateStarRocksDatabaseUserPasswordRequest.body
                    xLanguage = updateStarRocksDatabaseUserPasswordRequest.xLanguage;
                } else {
                    instanceId = updateStarRocksDatabaseUserPasswordRequest['instance_id'];
                    body = updateStarRocksDatabaseUserPasswordRequest['body'];
                    xLanguage = updateStarRocksDatabaseUserPasswordRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updateStarRocksDatabaseUserPassword.');
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
         * 修改StarRocks数据库账号权限。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateStarRocksDatabaseUserPermission(updateStarRocksDatabaseUserPermissionRequest?: UpdateStarRocksDatabaseUserPermissionRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/instances/{instance_id}/starrocks/users/permission",
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

            if (updateStarRocksDatabaseUserPermissionRequest !== null && updateStarRocksDatabaseUserPermissionRequest !== undefined) {
                if (updateStarRocksDatabaseUserPermissionRequest instanceof UpdateStarRocksDatabaseUserPermissionRequest) {
                    instanceId = updateStarRocksDatabaseUserPermissionRequest.instanceId;
                    body = updateStarRocksDatabaseUserPermissionRequest.body
                    xLanguage = updateStarRocksDatabaseUserPermissionRequest.xLanguage;
                } else {
                    instanceId = updateStarRocksDatabaseUserPermissionRequest['instance_id'];
                    body = updateStarRocksDatabaseUserPermissionRequest['body'];
                    xLanguage = updateStarRocksDatabaseUserPermissionRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updateStarRocksDatabaseUserPermission.');
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
         * 按节点类型修改节点参数
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateStarrocksParams(updateStarrocksParamsRequest?: UpdateStarrocksParamsRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/instances/{instance_id}/starrocks/configurations",
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

            if (updateStarrocksParamsRequest !== null && updateStarrocksParamsRequest !== undefined) {
                if (updateStarrocksParamsRequest instanceof UpdateStarrocksParamsRequest) {
                    instanceId = updateStarrocksParamsRequest.instanceId;
                    body = updateStarrocksParamsRequest.body
                    xLanguage = updateStarrocksParamsRequest.xLanguage;
                } else {
                    instanceId = updateStarrocksParamsRequest['instance_id'];
                    body = updateStarrocksParamsRequest['body'];
                    xLanguage = updateStarrocksParamsRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updateStarrocksParams.');
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
         * StarRocks内核版本升级。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        upgradeSrKernelVersion(upgradeSrKernelVersionRequest?: UpgradeSrKernelVersionRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/{instance_id}/starrocks/db-upgrade",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xLanguage;
            
            let instanceId;

            if (upgradeSrKernelVersionRequest !== null && upgradeSrKernelVersionRequest !== undefined) {
                if (upgradeSrKernelVersionRequest instanceof UpgradeSrKernelVersionRequest) {
                    xLanguage = upgradeSrKernelVersionRequest.xLanguage;
                    instanceId = upgradeSrKernelVersionRequest.instanceId;
                    body = upgradeSrKernelVersionRequest.body
                } else {
                    xLanguage = upgradeSrKernelVersionRequest['X-Language'];
                    instanceId = upgradeSrKernelVersionRequest['instance_id'];
                    body = upgradeSrKernelVersionRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling upgradeSrKernelVersion.');
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
    
    }
};

function newClient(client: HcClient): GaussDBClient {
    return new GaussDBClient(client);
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