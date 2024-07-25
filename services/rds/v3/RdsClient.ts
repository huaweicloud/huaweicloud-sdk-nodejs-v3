import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { ADDomainInfo } from './model/ADDomainInfo';
import { AddLogConfigResponseBody } from './model/AddLogConfigResponseBody';
import { AddLogConfigs } from './model/AddLogConfigs';
import { AddMsdtcRequestBody } from './model/AddMsdtcRequestBody';
import { AddPostgresqlHbaConfRequest } from './model/AddPostgresqlHbaConfRequest';
import { AddPostgresqlHbaConfResponse } from './model/AddPostgresqlHbaConfResponse';
import { AllowDbPrivilegeRequest } from './model/AllowDbPrivilegeRequest';
import { AllowDbPrivilegeResponse } from './model/AllowDbPrivilegeResponse';
import { AllowDbUserPrivilegeRequest } from './model/AllowDbUserPrivilegeRequest';
import { AllowDbUserPrivilegeResponse } from './model/AllowDbUserPrivilegeResponse';
import { AllowSqlserverDbUserPrivilegeRequest } from './model/AllowSqlserverDbUserPrivilegeRequest';
import { AllowSqlserverDbUserPrivilegeResponse } from './model/AllowSqlserverDbUserPrivilegeResponse';
import { ApiVersion } from './model/ApiVersion';
import { ApplyConfigurationAsyncRequest } from './model/ApplyConfigurationAsyncRequest';
import { ApplyConfigurationAsyncResponse } from './model/ApplyConfigurationAsyncResponse';
import { ApplyConfigurationRequest } from './model/ApplyConfigurationRequest';
import { ApplyConfigurationResponseApplyResults } from './model/ApplyConfigurationResponseApplyResults';
import { AttachEipRequest } from './model/AttachEipRequest';
import { AttachEipResponse } from './model/AttachEipResponse';
import { Auditlog } from './model/Auditlog';
import { AvailableZone } from './model/AvailableZone';
import { BackupDatabase } from './model/BackupDatabase';
import { BackupDatastore } from './model/BackupDatastore';
import { BackupForList } from './model/BackupForList';
import { BackupInfo } from './model/BackupInfo';
import { BackupPolicy } from './model/BackupPolicy';
import { BackupStrategy } from './model/BackupStrategy';
import { BackupStrategyForResponse } from './model/BackupStrategyForResponse';
import { BatchAddMsdtcsRequest } from './model/BatchAddMsdtcsRequest';
import { BatchAddMsdtcsResponse } from './model/BatchAddMsdtcsResponse';
import { BatchDeleteBackupRequestBody } from './model/BatchDeleteBackupRequestBody';
import { BatchDeleteManualBackupRequest } from './model/BatchDeleteManualBackupRequest';
import { BatchDeleteManualBackupResponse } from './model/BatchDeleteManualBackupResponse';
import { BatchRestoreDatabaseRequest } from './model/BatchRestoreDatabaseRequest';
import { BatchRestoreDatabaseResponse } from './model/BatchRestoreDatabaseResponse';
import { BatchRestorePostgreSqlTablesRequest } from './model/BatchRestorePostgreSqlTablesRequest';
import { BatchRestorePostgreSqlTablesResponse } from './model/BatchRestorePostgreSqlTablesResponse';
import { BatchShutdownInsReq } from './model/BatchShutdownInsReq';
import { BatchStopInstanceRequest } from './model/BatchStopInstanceRequest';
import { BatchStopInstanceResponse } from './model/BatchStopInstanceResponse';
import { BatchTagActionAddRequestBody } from './model/BatchTagActionAddRequestBody';
import { BatchTagActionDelRequestBody } from './model/BatchTagActionDelRequestBody';
import { BatchTagAddActionRequest } from './model/BatchTagAddActionRequest';
import { BatchTagAddActionResponse } from './model/BatchTagAddActionResponse';
import { BatchTagDelActionRequest } from './model/BatchTagDelActionRequest';
import { BatchTagDelActionResponse } from './model/BatchTagDelActionResponse';
import { BindEipRequest } from './model/BindEipRequest';
import { BinlogClearPolicyRequestBody } from './model/BinlogClearPolicyRequestBody';
import { ChangeFailoverModeRequest } from './model/ChangeFailoverModeRequest';
import { ChangeFailoverModeResponse } from './model/ChangeFailoverModeResponse';
import { ChangeFailoverStrategyRequest } from './model/ChangeFailoverStrategyRequest';
import { ChangeFailoverStrategyResponse } from './model/ChangeFailoverStrategyResponse';
import { ChangeOpsWindowRequest } from './model/ChangeOpsWindowRequest';
import { ChangeOpsWindowResponse } from './model/ChangeOpsWindowResponse';
import { ChangeProxyScaleRequest } from './model/ChangeProxyScaleRequest';
import { ChangeProxyScaleResponse } from './model/ChangeProxyScaleResponse';
import { ChangeTheDelayThresholdRequest } from './model/ChangeTheDelayThresholdRequest';
import { ChangeTheDelayThresholdResponse } from './model/ChangeTheDelayThresholdResponse';
import { ChangingTheDelayThresholdRequestBody } from './model/ChangingTheDelayThresholdRequestBody';
import { ChargeInfo } from './model/ChargeInfo';
import { ChargeInfoResponse } from './model/ChargeInfoResponse';
import { ComputeFlavor } from './model/ComputeFlavor';
import { ComputeFlavorGroup } from './model/ComputeFlavorGroup';
import { Computes } from './model/Computes';
import { ConfigurationCopyRequestBody } from './model/ConfigurationCopyRequestBody';
import { ConfigurationForCreation } from './model/ConfigurationForCreation';
import { ConfigurationForUpdate } from './model/ConfigurationForUpdate';
import { ConfigurationParameter } from './model/ConfigurationParameter';
import { ConfigurationSummary } from './model/ConfigurationSummary';
import { ConfigurationSummaryForCreate } from './model/ConfigurationSummaryForCreate';
import { CopyConfigurationRequest } from './model/CopyConfigurationRequest';
import { CopyConfigurationResponse } from './model/CopyConfigurationResponse';
import { CreateConfigurationRequest } from './model/CreateConfigurationRequest';
import { CreateConfigurationResponse } from './model/CreateConfigurationResponse';
import { CreateDatabaseRequest } from './model/CreateDatabaseRequest';
import { CreateDatabaseResponse } from './model/CreateDatabaseResponse';
import { CreateDbUserRequest } from './model/CreateDbUserRequest';
import { CreateDbUserResponse } from './model/CreateDbUserResponse';
import { CreateDnsNameRequest } from './model/CreateDnsNameRequest';
import { CreateDnsNameRequestBody } from './model/CreateDnsNameRequestBody';
import { CreateDnsNameResponse } from './model/CreateDnsNameResponse';
import { CreateInstanceIam5Request } from './model/CreateInstanceIam5Request';
import { CreateInstanceIam5Response } from './model/CreateInstanceIam5Response';
import { CreateInstanceRequest } from './model/CreateInstanceRequest';
import { CreateInstanceRespItem } from './model/CreateInstanceRespItem';
import { CreateInstanceResponse } from './model/CreateInstanceResponse';
import { CreateManualBackupRequest } from './model/CreateManualBackupRequest';
import { CreateManualBackupRequestBody } from './model/CreateManualBackupRequestBody';
import { CreateManualBackupResponse } from './model/CreateManualBackupResponse';
import { CreateMysqlMultiProxyRequest } from './model/CreateMysqlMultiProxyRequest';
import { CreatePostgresqlDatabaseRequest } from './model/CreatePostgresqlDatabaseRequest';
import { CreatePostgresqlDatabaseResponse } from './model/CreatePostgresqlDatabaseResponse';
import { CreatePostgresqlDatabaseSchemaRequest } from './model/CreatePostgresqlDatabaseSchemaRequest';
import { CreatePostgresqlDatabaseSchemaResponse } from './model/CreatePostgresqlDatabaseSchemaResponse';
import { CreatePostgresqlDbUserRequest } from './model/CreatePostgresqlDbUserRequest';
import { CreatePostgresqlDbUserResponse } from './model/CreatePostgresqlDbUserResponse';
import { CreatePostgresqlExtensionRequest } from './model/CreatePostgresqlExtensionRequest';
import { CreatePostgresqlExtensionResponse } from './model/CreatePostgresqlExtensionResponse';
import { CreateRdSforMySqlProxyRequest } from './model/CreateRdSforMySqlProxyRequest';
import { CreateRdSforMySqlProxyResponse } from './model/CreateRdSforMySqlProxyResponse';
import { CreateRestoreInstanceRequest } from './model/CreateRestoreInstanceRequest';
import { CreateRestoreInstanceRequestBody } from './model/CreateRestoreInstanceRequestBody';
import { CreateRestoreInstanceResponse } from './model/CreateRestoreInstanceResponse';
import { CreateSqlLimitRequest } from './model/CreateSqlLimitRequest';
import { CreateSqlLimitResponse } from './model/CreateSqlLimitResponse';
import { CreateSqlLimitRuleReqV3 } from './model/CreateSqlLimitRuleReqV3';
import { CreateSqlserverDatabaseRequest } from './model/CreateSqlserverDatabaseRequest';
import { CreateSqlserverDatabaseResponse } from './model/CreateSqlserverDatabaseResponse';
import { CreateSqlserverDbUserRequest } from './model/CreateSqlserverDbUserRequest';
import { CreateSqlserverDbUserResponse } from './model/CreateSqlserverDbUserResponse';
import { CreateXelLogDownloadRequest } from './model/CreateXelLogDownloadRequest';
import { CreateXelLogDownloadRequestBody } from './model/CreateXelLogDownloadRequestBody';
import { CreateXelLogDownloadResponse } from './model/CreateXelLogDownloadResponse';
import { CreateXelLogDownloadResult } from './model/CreateXelLogDownloadResult';
import { CustomerCreateInstanceReq } from './model/CustomerCreateInstanceReq';
import { CustomerModifyAutoEnlargePolicyReq } from './model/CustomerModifyAutoEnlargePolicyReq';
import { CustomerUpgradeDatabaseVersionReq } from './model/CustomerUpgradeDatabaseVersionReq';
import { CustomerUpgradeDatabaseVersionReqNew } from './model/CustomerUpgradeDatabaseVersionReqNew';
import { DBSInstanceHostInfoResult } from './model/DBSInstanceHostInfoResult';
import { DataIpRequest } from './model/DataIpRequest';
import { DatabaseForCreation } from './model/DatabaseForCreation';
import { DatabaseUserRoleRequest } from './model/DatabaseUserRoleRequest';
import { DatabaseWithPrivilege } from './model/DatabaseWithPrivilege';
import { DatabaseWithPrivilegeObject } from './model/DatabaseWithPrivilegeObject';
import { Datastore } from './model/Datastore';
import { DbUserPrivilegeRequest } from './model/DbUserPrivilegeRequest';
import { DbUserPwdRequest } from './model/DbUserPwdRequest';
import { DeleteBackupResult } from './model/DeleteBackupResult';
import { DeleteConfigurationRequest } from './model/DeleteConfigurationRequest';
import { DeleteConfigurationResponse } from './model/DeleteConfigurationResponse';
import { DeleteDatabaseRequest } from './model/DeleteDatabaseRequest';
import { DeleteDatabaseResponse } from './model/DeleteDatabaseResponse';
import { DeleteDbUserRequest } from './model/DeleteDbUserRequest';
import { DeleteDbUserResponse } from './model/DeleteDbUserResponse';
import { DeleteDisasterRecoveryRequest } from './model/DeleteDisasterRecoveryRequest';
import { DeleteDisasterRecoveryRequestBody } from './model/DeleteDisasterRecoveryRequestBody';
import { DeleteDisasterRecoveryResponse } from './model/DeleteDisasterRecoveryResponse';
import { DeleteInstanceRequest } from './model/DeleteInstanceRequest';
import { DeleteInstanceResponse } from './model/DeleteInstanceResponse';
import { DeleteJobRequest } from './model/DeleteJobRequest';
import { DeleteJobResponse } from './model/DeleteJobResponse';
import { DeleteLogConfigResponseBody } from './model/DeleteLogConfigResponseBody';
import { DeleteLogConfigs } from './model/DeleteLogConfigs';
import { DeleteLogLtsConfigsRequest } from './model/DeleteLogLtsConfigsRequest';
import { DeleteLogLtsConfigsResponse } from './model/DeleteLogLtsConfigsResponse';
import { DeleteManualBackupRequest } from './model/DeleteManualBackupRequest';
import { DeleteManualBackupResponse } from './model/DeleteManualBackupResponse';
import { DeletePostgresqlDatabaseRequest } from './model/DeletePostgresqlDatabaseRequest';
import { DeletePostgresqlDatabaseResponse } from './model/DeletePostgresqlDatabaseResponse';
import { DeletePostgresqlDbUserRequest } from './model/DeletePostgresqlDbUserRequest';
import { DeletePostgresqlDbUserResponse } from './model/DeletePostgresqlDbUserResponse';
import { DeletePostgresqlExtensionRequest } from './model/DeletePostgresqlExtensionRequest';
import { DeletePostgresqlExtensionResponse } from './model/DeletePostgresqlExtensionResponse';
import { DeletePostgresqlHbaConfRequest } from './model/DeletePostgresqlHbaConfRequest';
import { DeletePostgresqlHbaConfResponse } from './model/DeletePostgresqlHbaConfResponse';
import { DeleteRdSforMySqlProxyRequest } from './model/DeleteRdSforMySqlProxyRequest';
import { DeleteRdSforMySqlProxyResponse } from './model/DeleteRdSforMySqlProxyResponse';
import { DeleteSqlLimitRequest } from './model/DeleteSqlLimitRequest';
import { DeleteSqlLimitResponse } from './model/DeleteSqlLimitResponse';
import { DeleteSqlLimitRuleReqV3 } from './model/DeleteSqlLimitRuleReqV3';
import { DeleteSqlserverDatabaseExRequest } from './model/DeleteSqlserverDatabaseExRequest';
import { DeleteSqlserverDatabaseExResponse } from './model/DeleteSqlserverDatabaseExResponse';
import { DeleteSqlserverDatabaseRequest } from './model/DeleteSqlserverDatabaseRequest';
import { DeleteSqlserverDatabaseResponse } from './model/DeleteSqlserverDatabaseResponse';
import { DeleteSqlserverDbUserRequest } from './model/DeleteSqlserverDbUserRequest';
import { DeleteSqlserverDbUserResponse } from './model/DeleteSqlserverDbUserResponse';
import { DiagnosisInstancesInfoResult } from './model/DiagnosisInstancesInfoResult';
import { DiagnosisItemResult } from './model/DiagnosisItemResult';
import { DownloadErrorlogRequest } from './model/DownloadErrorlogRequest';
import { DownloadErrorlogResponse } from './model/DownloadErrorlogResponse';
import { DownloadInfoRsp } from './model/DownloadInfoRsp';
import { DownloadSlowlogRequest } from './model/DownloadSlowlogRequest';
import { DownloadSlowlogResponse } from './model/DownloadSlowlogResponse';
import { DropDatabaseV3Req } from './model/DropDatabaseV3Req';
import { DssPoolInfo } from './model/DssPoolInfo';
import { EnableConfigurationRequest } from './model/EnableConfigurationRequest';
import { EnableConfigurationResponse } from './model/EnableConfigurationResponse';
import { EngineFlavorData } from './model/EngineFlavorData';
import { EnlargeVolumeObject } from './model/EnlargeVolumeObject';
import { EnlargeVolumeRequestBody } from './model/EnlargeVolumeRequestBody';
import { ErrorLog } from './model/ErrorLog';
import { ErrorLogItem } from './model/ErrorLogItem';
import { ErrorResponse } from './model/ErrorResponse';
import { ErrorRsp } from './model/ErrorRsp';
import { ErrorlogDownloadInfo } from './model/ErrorlogDownloadInfo';
import { ErrorlogForLtsRequest } from './model/ErrorlogForLtsRequest';
import { ExecutePrivilegeDatabaseUserRoleRequest } from './model/ExecutePrivilegeDatabaseUserRoleRequest';
import { ExecutePrivilegeDatabaseUserRoleResponse } from './model/ExecutePrivilegeDatabaseUserRoleResponse';
import { ExecuteRevokeDatabaseUserRoleRequest } from './model/ExecuteRevokeDatabaseUserRoleRequest';
import { ExecuteRevokeDatabaseUserRoleResponse } from './model/ExecuteRevokeDatabaseUserRoleResponse';
import { ExtensionRequest } from './model/ExtensionRequest';
import { ExtensionsResponse } from './model/ExtensionsResponse';
import { FailoverModeRequest } from './model/FailoverModeRequest';
import { FailoverRequest } from './model/FailoverRequest';
import { FailoverStrategyRequest } from './model/FailoverStrategyRequest';
import { Flavor } from './model/Flavor';
import { FollowerMigrateRequest } from './model/FollowerMigrateRequest';
import { GenerateAuditlogDownloadLinkRequest } from './model/GenerateAuditlogDownloadLinkRequest';
import { GetBackupDownloadLinkFiles } from './model/GetBackupDownloadLinkFiles';
import { GetJobInfoResponseBodyJob } from './model/GetJobInfoResponseBodyJob';
import { GetOffSiteBackupPolicy } from './model/GetOffSiteBackupPolicy';
import { GetRestoreTimeResponseRestoreTime } from './model/GetRestoreTimeResponseRestoreTime';
import { GetTaskDetailListRspJobs } from './model/GetTaskDetailListRspJobs';
import { GetTaskDetailListRspJobsInstance } from './model/GetTaskDetailListRspJobsInstance';
import { GrantRequest } from './model/GrantRequest';
import { Ha } from './model/Ha';
import { HaResponse } from './model/HaResponse';
import { HistoryDatabaseInfo } from './model/HistoryDatabaseInfo';
import { HistoryDatabaseInstance } from './model/HistoryDatabaseInstance';
import { InspectionReports } from './model/InspectionReports';
import { InstanceDrRelation } from './model/InstanceDrRelation';
import { InstanceInfo } from './model/InstanceInfo';
import { InstanceLtsBasicInfoResp } from './model/InstanceLtsBasicInfoResp';
import { InstanceLtsConfigDetailResp } from './model/InstanceLtsConfigDetailResp';
import { InstanceLtsConfigResp } from './model/InstanceLtsConfigResp';
import { InstanceRequest } from './model/InstanceRequest';
import { InstanceResponse } from './model/InstanceResponse';
import { InstanceRestartRequsetBody } from './model/InstanceRestartRequsetBody';
import { InstancesWeight } from './model/InstancesWeight';
import { LDatastore } from './model/LDatastore';
import { LinksInfoResponse } from './model/LinksInfoResponse';
import { ListApiVersionNewRequest } from './model/ListApiVersionNewRequest';
import { ListApiVersionNewResponse } from './model/ListApiVersionNewResponse';
import { ListApiVersionRequest } from './model/ListApiVersionRequest';
import { ListApiVersionResponse } from './model/ListApiVersionResponse';
import { ListAuditlogsRequest } from './model/ListAuditlogsRequest';
import { ListAuditlogsResponse } from './model/ListAuditlogsResponse';
import { ListAuthorizedDatabasesRequest } from './model/ListAuthorizedDatabasesRequest';
import { ListAuthorizedDatabasesResponse } from './model/ListAuthorizedDatabasesResponse';
import { ListAuthorizedDbUsersRequest } from './model/ListAuthorizedDbUsersRequest';
import { ListAuthorizedDbUsersResponse } from './model/ListAuthorizedDbUsersResponse';
import { ListAuthorizedSqlserverDbUsersRequest } from './model/ListAuthorizedSqlserverDbUsersRequest';
import { ListAuthorizedSqlserverDbUsersResponse } from './model/ListAuthorizedSqlserverDbUsersResponse';
import { ListBackupsRequest } from './model/ListBackupsRequest';
import { ListBackupsResponse } from './model/ListBackupsResponse';
import { ListCollationsRequest } from './model/ListCollationsRequest';
import { ListCollationsResponse } from './model/ListCollationsResponse';
import { ListConfigurationsRequest } from './model/ListConfigurationsRequest';
import { ListConfigurationsResponse } from './model/ListConfigurationsResponse';
import { ListDatabaseUserRoleRequest } from './model/ListDatabaseUserRoleRequest';
import { ListDatabaseUserRoleResponse } from './model/ListDatabaseUserRoleResponse';
import { ListDatabasesRequest } from './model/ListDatabasesRequest';
import { ListDatabasesResponse } from './model/ListDatabasesResponse';
import { ListDatastoresRequest } from './model/ListDatastoresRequest';
import { ListDatastoresResponse } from './model/ListDatastoresResponse';
import { ListDbUsersRequest } from './model/ListDbUsersRequest';
import { ListDbUsersResponse } from './model/ListDbUsersResponse';
import { ListDrRelationsRequest } from './model/ListDrRelationsRequest';
import { ListDrRelationsResponse } from './model/ListDrRelationsResponse';
import { ListEngineFlavorsRequest } from './model/ListEngineFlavorsRequest';
import { ListEngineFlavorsResponse } from './model/ListEngineFlavorsResponse';
import { ListErrorLogsNewRequest } from './model/ListErrorLogsNewRequest';
import { ListErrorLogsNewResponse } from './model/ListErrorLogsNewResponse';
import { ListErrorLogsRequest } from './model/ListErrorLogsRequest';
import { ListErrorLogsResponse } from './model/ListErrorLogsResponse';
import { ListErrorlogForLtsRequest } from './model/ListErrorlogForLtsRequest';
import { ListErrorlogForLtsResponse } from './model/ListErrorlogForLtsResponse';
import { ListFlavorsRequest } from './model/ListFlavorsRequest';
import { ListFlavorsResizeRequest } from './model/ListFlavorsResizeRequest';
import { ListFlavorsResizeResponse } from './model/ListFlavorsResizeResponse';
import { ListFlavorsResponse } from './model/ListFlavorsResponse';
import { ListHistoryDatabaseRequest } from './model/ListHistoryDatabaseRequest';
import { ListHistoryDatabaseResponse } from './model/ListHistoryDatabaseResponse';
import { ListInspectionHistoriesRequest } from './model/ListInspectionHistoriesRequest';
import { ListInspectionHistoriesResponse } from './model/ListInspectionHistoriesResponse';
import { ListInstanceDiagnosisRequest } from './model/ListInstanceDiagnosisRequest';
import { ListInstanceDiagnosisResponse } from './model/ListInstanceDiagnosisResponse';
import { ListInstanceParamHistoriesRequest } from './model/ListInstanceParamHistoriesRequest';
import { ListInstanceParamHistoriesResponse } from './model/ListInstanceParamHistoriesResponse';
import { ListInstanceTagsRequest } from './model/ListInstanceTagsRequest';
import { ListInstanceTagsResponse } from './model/ListInstanceTagsResponse';
import { ListInstancesInfoDiagnosisRequest } from './model/ListInstancesInfoDiagnosisRequest';
import { ListInstancesInfoDiagnosisResponse } from './model/ListInstancesInfoDiagnosisResponse';
import { ListInstancesRequest } from './model/ListInstancesRequest';
import { ListInstancesResponse } from './model/ListInstancesResponse';
import { ListInstancesSupportFastRestoreRequest } from './model/ListInstancesSupportFastRestoreRequest';
import { ListInstancesSupportFastRestoreRequestBody } from './model/ListInstancesSupportFastRestoreRequestBody';
import { ListInstancesSupportFastRestoreResponse } from './model/ListInstancesSupportFastRestoreResponse';
import { ListJobInfoDetailRequest } from './model/ListJobInfoDetailRequest';
import { ListJobInfoDetailResponse } from './model/ListJobInfoDetailResponse';
import { ListJobInfoRequest } from './model/ListJobInfoRequest';
import { ListJobInfoResponse } from './model/ListJobInfoResponse';
import { ListLogLtsConfigsRequest } from './model/ListLogLtsConfigsRequest';
import { ListLogLtsConfigsResponse } from './model/ListLogLtsConfigsResponse';
import { ListMsdtcHostsRequest } from './model/ListMsdtcHostsRequest';
import { ListMsdtcHostsResponse } from './model/ListMsdtcHostsResponse';
import { ListOffSiteBackupsRequest } from './model/ListOffSiteBackupsRequest';
import { ListOffSiteBackupsResponse } from './model/ListOffSiteBackupsResponse';
import { ListOffSiteInstancesRequest } from './model/ListOffSiteInstancesRequest';
import { ListOffSiteInstancesResponse } from './model/ListOffSiteInstancesResponse';
import { ListOffSiteRestoreTimesRequest } from './model/ListOffSiteRestoreTimesRequest';
import { ListOffSiteRestoreTimesResponse } from './model/ListOffSiteRestoreTimesResponse';
import { ListPostgresqlDatabaseSchemasRequest } from './model/ListPostgresqlDatabaseSchemasRequest';
import { ListPostgresqlDatabaseSchemasResponse } from './model/ListPostgresqlDatabaseSchemasResponse';
import { ListPostgresqlDatabasesRequest } from './model/ListPostgresqlDatabasesRequest';
import { ListPostgresqlDatabasesResponse } from './model/ListPostgresqlDatabasesResponse';
import { ListPostgresqlDbUserPaginatedRequest } from './model/ListPostgresqlDbUserPaginatedRequest';
import { ListPostgresqlDbUserPaginatedResponse } from './model/ListPostgresqlDbUserPaginatedResponse';
import { ListPostgresqlExtensionRequest } from './model/ListPostgresqlExtensionRequest';
import { ListPostgresqlExtensionResponse } from './model/ListPostgresqlExtensionResponse';
import { ListPostgresqlHbaInfoHistoryRequest } from './model/ListPostgresqlHbaInfoHistoryRequest';
import { ListPostgresqlHbaInfoHistoryResponse } from './model/ListPostgresqlHbaInfoHistoryResponse';
import { ListPostgresqlHbaInfoRequest } from './model/ListPostgresqlHbaInfoRequest';
import { ListPostgresqlHbaInfoResponse } from './model/ListPostgresqlHbaInfoResponse';
import { ListPostgresqlListHistoryTablesRequest } from './model/ListPostgresqlListHistoryTablesRequest';
import { ListPostgresqlListHistoryTablesResponse } from './model/ListPostgresqlListHistoryTablesResponse';
import { ListPredefinedTagRequest } from './model/ListPredefinedTagRequest';
import { ListPredefinedTagResponse } from './model/ListPredefinedTagResponse';
import { ListProjectTagsRequest } from './model/ListProjectTagsRequest';
import { ListProjectTagsResponse } from './model/ListProjectTagsResponse';
import { ListRdSforMySqlProxyRequest } from './model/ListRdSforMySqlProxyRequest';
import { ListRdSforMySqlProxyResponse } from './model/ListRdSforMySqlProxyResponse';
import { ListRdSforMysqlProxyFlavorsRequest } from './model/ListRdSforMysqlProxyFlavorsRequest';
import { ListRdSforMysqlProxyFlavorsResponse } from './model/ListRdSforMysqlProxyFlavorsResponse';
import { ListRecycleInstancesRequest } from './model/ListRecycleInstancesRequest';
import { ListRecycleInstancesResponse } from './model/ListRecycleInstancesResponse';
import { ListRestoreTimesRequest } from './model/ListRestoreTimesRequest';
import { ListRestoreTimesResponse } from './model/ListRestoreTimesResponse';
import { ListShareBackupsRequest } from './model/ListShareBackupsRequest';
import { ListShareBackupsResponse } from './model/ListShareBackupsResponse';
import { ListSimplifiedInstancesRequest } from './model/ListSimplifiedInstancesRequest';
import { ListSimplifiedInstancesResponse } from './model/ListSimplifiedInstancesResponse';
import { ListSlowLogFileRequest } from './model/ListSlowLogFileRequest';
import { ListSlowLogFileResponse } from './model/ListSlowLogFileResponse';
import { ListSlowLogStatisticsForLtsRequest } from './model/ListSlowLogStatisticsForLtsRequest';
import { ListSlowLogStatisticsForLtsResponse } from './model/ListSlowLogStatisticsForLtsResponse';
import { ListSlowLogsNewRequest } from './model/ListSlowLogsNewRequest';
import { ListSlowLogsNewResponse } from './model/ListSlowLogsNewResponse';
import { ListSlowLogsRequest } from './model/ListSlowLogsRequest';
import { ListSlowLogsResponse } from './model/ListSlowLogsResponse';
import { ListSlowlogForLtsRequest } from './model/ListSlowlogForLtsRequest';
import { ListSlowlogForLtsResponse } from './model/ListSlowlogForLtsResponse';
import { ListSlowlogStatisticsRequest } from './model/ListSlowlogStatisticsRequest';
import { ListSlowlogStatisticsResponse } from './model/ListSlowlogStatisticsResponse';
import { ListSqlLimitRequest } from './model/ListSqlLimitRequest';
import { ListSqlLimitResponse } from './model/ListSqlLimitResponse';
import { ListSqlserverDatabasesRequest } from './model/ListSqlserverDatabasesRequest';
import { ListSqlserverDatabasesResponse } from './model/ListSqlserverDatabasesResponse';
import { ListSqlserverDbUsersRequest } from './model/ListSqlserverDbUsersRequest';
import { ListSqlserverDbUsersResponse } from './model/ListSqlserverDbUsersResponse';
import { ListSslCertDownloadLinkRequest } from './model/ListSslCertDownloadLinkRequest';
import { ListSslCertDownloadLinkResponse } from './model/ListSslCertDownloadLinkResponse';
import { ListStorageTypesRequest } from './model/ListStorageTypesRequest';
import { ListStorageTypesResponse } from './model/ListStorageTypesResponse';
import { ListUpgradeHistoriesRequest } from './model/ListUpgradeHistoriesRequest';
import { ListUpgradeHistoriesResponse } from './model/ListUpgradeHistoriesResponse';
import { ListXelLogResponseResult } from './model/ListXelLogResponseResult';
import { ListXellogFilesRequest } from './model/ListXellogFilesRequest';
import { ListXellogFilesResponse } from './model/ListXellogFilesResponse';
import { MasterInstance } from './model/MasterInstance';
import { MigrateFollowerRequest } from './model/MigrateFollowerRequest';
import { MigrateFollowerResponse } from './model/MigrateFollowerResponse';
import { ModifiyInstanceNameRequest } from './model/ModifiyInstanceNameRequest';
import { ModifyCollationRequest } from './model/ModifyCollationRequest';
import { ModifyCollationRequestBody } from './model/ModifyCollationRequestBody';
import { ModifyCollationResponse } from './model/ModifyCollationResponse';
import { ModifyDnsNameRequestBody } from './model/ModifyDnsNameRequestBody';
import { ModifyMySqlProxyRouteModeRequest } from './model/ModifyMySqlProxyRouteModeRequest';
import { ModifyParamRequest } from './model/ModifyParamRequest';
import { ModifyPostgresqlHbaConfRequest } from './model/ModifyPostgresqlHbaConfRequest';
import { ModifyPostgresqlHbaConfResponse } from './model/ModifyPostgresqlHbaConfResponse';
import { ModifyProxyWeightRequest } from './model/ModifyProxyWeightRequest';
import { ModifyRdSforMySqlProxyRouteModeRequest } from './model/ModifyRdSforMySqlProxyRouteModeRequest';
import { ModifyRdSforMySqlProxyRouteModeResponse } from './model/ModifyRdSforMySqlProxyRouteModeResponse';
import { MsdtcHostOption } from './model/MsdtcHostOption';
import { MysqlAvailableZoneInfo } from './model/MysqlAvailableZoneInfo';
import { MysqlProxyFlavorsResponseComputeFlavorGroups } from './model/MysqlProxyFlavorsResponseComputeFlavorGroups';
import { MysqlProxyFlavorsResponseComputeFlavors } from './model/MysqlProxyFlavorsResponseComputeFlavors';
import { MysqlReadOnlySwitch } from './model/MysqlReadOnlySwitch';
import { MysqlSlowLogDetailsItem } from './model/MysqlSlowLogDetailsItem';
import { MysqlSlowLogStatisticsItem } from './model/MysqlSlowLogStatisticsItem';
import { NodeResponse } from './model/NodeResponse';
import { OffSiteBackupForList } from './model/OffSiteBackupForList';
import { OffSiteBackupPolicy } from './model/OffSiteBackupPolicy';
import { OffsiteBackupInstance } from './model/OffsiteBackupInstance';
import { OpenProxyRequest } from './model/OpenProxyRequest';
import { OpsWindowRequest } from './model/OpsWindowRequest';
import { ParaGroupDatastore } from './model/ParaGroupDatastore';
import { ParamGroupHistoryResult } from './model/ParamGroupHistoryResult';
import { PostgreSQLHistoryDatabase } from './model/PostgreSQLHistoryDatabase';
import { PostgreSQLHistoryDatabaseRequest } from './model/PostgreSQLHistoryDatabaseRequest';
import { PostgreSQLHistorySchema } from './model/PostgreSQLHistorySchema';
import { PostgreSQLHistoryTable } from './model/PostgreSQLHistoryTable';
import { PostgreSQLHistoryTableInstance } from './model/PostgreSQLHistoryTableInstance';
import { PostgreSQLHistoryTableRequest } from './model/PostgreSQLHistoryTableRequest';
import { PostgreSQLRestoreDatabase } from './model/PostgreSQLRestoreDatabase';
import { PostgreSQLRestoreDatabaseRequest } from './model/PostgreSQLRestoreDatabaseRequest';
import { PostgreSQLRestoreSchema } from './model/PostgreSQLRestoreSchema';
import { PostgreSQLRestoreTable } from './model/PostgreSQLRestoreTable';
import { PostgreSQLRestoreTableInstance } from './model/PostgreSQLRestoreTableInstance';
import { PostgreSQLRestoreTableRequest } from './model/PostgreSQLRestoreTableRequest';
import { PostgresqlCreateSchemaReq } from './model/PostgresqlCreateSchemaReq';
import { PostgresqlDatabaseForCreation } from './model/PostgresqlDatabaseForCreation';
import { PostgresqlDatabaseForListSchema } from './model/PostgresqlDatabaseForListSchema';
import { PostgresqlDatabaseSchemaReq } from './model/PostgresqlDatabaseSchemaReq';
import { PostgresqlGrantRequest } from './model/PostgresqlGrantRequest';
import { PostgresqlHbaConf } from './model/PostgresqlHbaConf';
import { PostgresqlHbaHistory } from './model/PostgresqlHbaHistory';
import { PostgresqlListDatabase } from './model/PostgresqlListDatabase';
import { PostgresqlPreCheckUpgradeMajorVersionReq } from './model/PostgresqlPreCheckUpgradeMajorVersionReq';
import { PostgresqlUserForCreation } from './model/PostgresqlUserForCreation';
import { PostgresqlUserForList } from './model/PostgresqlUserForList';
import { PostgresqlUserWithPrivilege } from './model/PostgresqlUserWithPrivilege';
import { ProjectTagInfoResponse } from './model/ProjectTagInfoResponse';
import { Proxy } from './model/Proxy';
import { ProxyInfo } from './model/ProxyInfo';
import { ProxyInfoFlavorInfo } from './model/ProxyInfoFlavorInfo';
import { ProxyInfoNodes } from './model/ProxyInfoNodes';
import { ProxyNode } from './model/ProxyNode';
import { ProxyReadonlyInstances } from './model/ProxyReadonlyInstances';
import { PwdResetRequest } from './model/PwdResetRequest';
import { QueryProxyResponseV3 } from './model/QueryProxyResponseV3';
import { Quotas } from './model/Quotas';
import { ReadonlyInstances } from './model/ReadonlyInstances';
import { RecycleInstsanceV3 } from './model/RecycleInstsanceV3';
import { RecyclePolicy } from './model/RecyclePolicy';
import { RecyclePolicyRequestBody } from './model/RecyclePolicyRequestBody';
import { ReduceVolumeObject } from './model/ReduceVolumeObject';
import { ReduceVolumeRequestBody } from './model/ReduceVolumeRequestBody';
import { RelatedInstance } from './model/RelatedInstance';
import { ResetPwdRequest } from './model/ResetPwdRequest';
import { ResetPwdResponse } from './model/ResetPwdResponse';
import { ResizeFlavorObject } from './model/ResizeFlavorObject';
import { ResizeFlavorRequest } from './model/ResizeFlavorRequest';
import { ResourceTag } from './model/ResourceTag';
import { Resources } from './model/Resources';
import { RestoreDatabaseInfo } from './model/RestoreDatabaseInfo';
import { RestoreDatabaseInstance } from './model/RestoreDatabaseInstance';
import { RestoreDatabasesInfo } from './model/RestoreDatabasesInfo';
import { RestoreDatabasesInfoNew } from './model/RestoreDatabasesInfoNew';
import { RestoreExistInstanceRequest } from './model/RestoreExistInstanceRequest';
import { RestoreExistInstanceResponse } from './model/RestoreExistInstanceResponse';
import { RestoreExistingInstanceRequestBody } from './model/RestoreExistingInstanceRequestBody';
import { RestoreExistingInstanceRequestBodySource } from './model/RestoreExistingInstanceRequestBodySource';
import { RestorePoint } from './model/RestorePoint';
import { RestoreResult } from './model/RestoreResult';
import { RestoreTableInfo } from './model/RestoreTableInfo';
import { RestoreTableInfoNew } from './model/RestoreTableInfoNew';
import { RestoreTablesNewRequest } from './model/RestoreTablesNewRequest';
import { RestoreTablesNewRequestBody } from './model/RestoreTablesNewRequestBody';
import { RestoreTablesNewResponse } from './model/RestoreTablesNewResponse';
import { RestoreTablesRequest } from './model/RestoreTablesRequest';
import { RestoreTablesRequestBody } from './model/RestoreTablesRequestBody';
import { RestoreTablesResponse } from './model/RestoreTablesResponse';
import { RestoreToExistingInstanceRequest } from './model/RestoreToExistingInstanceRequest';
import { RestoreToExistingInstanceRequestBody } from './model/RestoreToExistingInstanceRequestBody';
import { RestoreToExistingInstanceRequestBodySource } from './model/RestoreToExistingInstanceRequestBodySource';
import { RestoreToExistingInstanceRequestBodyTarget } from './model/RestoreToExistingInstanceRequestBodyTarget';
import { RestoreToExistingInstanceResponse } from './model/RestoreToExistingInstanceResponse';
import { RevokePostgresqlDbPrivilegeRequest } from './model/RevokePostgresqlDbPrivilegeRequest';
import { RevokePostgresqlDbPrivilegeRequestBody } from './model/RevokePostgresqlDbPrivilegeRequestBody';
import { RevokePostgresqlDbPrivilegeResponse } from './model/RevokePostgresqlDbPrivilegeResponse';
import { RevokePostgresqlDbPrivilegeUser } from './model/RevokePostgresqlDbPrivilegeUser';
import { RevokeRequest } from './model/RevokeRequest';
import { RevokeRequestBody } from './model/RevokeRequestBody';
import { RevokeRequestBodyUsers } from './model/RevokeRequestBodyUsers';
import { RevokeResponse } from './model/RevokeResponse';
import { RevokeSqlserverDbUserPrivilegeRequest } from './model/RevokeSqlserverDbUserPrivilegeRequest';
import { RevokeSqlserverDbUserPrivilegeResponse } from './model/RevokeSqlserverDbUserPrivilegeResponse';
import { ScaleFlavors } from './model/ScaleFlavors';
import { ScaleProxyRequestBody } from './model/ScaleProxyRequestBody';
import { SearchQueryScaleComputeFlavorsRequest } from './model/SearchQueryScaleComputeFlavorsRequest';
import { SearchQueryScaleComputeFlavorsResponse } from './model/SearchQueryScaleComputeFlavorsResponse';
import { SearchQueryScaleFlavorsRequest } from './model/SearchQueryScaleFlavorsRequest';
import { SearchQueryScaleFlavorsResponse } from './model/SearchQueryScaleFlavorsResponse';
import { SecondMonitor } from './model/SecondMonitor';
import { SecurityGroupRequest } from './model/SecurityGroupRequest';
import { ServerlessInfo } from './model/ServerlessInfo';
import { ServerlessInfoResponse } from './model/ServerlessInfoResponse';
import { SetAuditlogPolicyRequest } from './model/SetAuditlogPolicyRequest';
import { SetAuditlogPolicyRequestBody } from './model/SetAuditlogPolicyRequestBody';
import { SetAuditlogPolicyResponse } from './model/SetAuditlogPolicyResponse';
import { SetAutoEnlargePolicyRequest } from './model/SetAutoEnlargePolicyRequest';
import { SetAutoEnlargePolicyResponse } from './model/SetAutoEnlargePolicyResponse';
import { SetBackupPolicyRequest } from './model/SetBackupPolicyRequest';
import { SetBackupPolicyRequestBody } from './model/SetBackupPolicyRequestBody';
import { SetBackupPolicyResponse } from './model/SetBackupPolicyResponse';
import { SetBinlogClearPolicyRequest } from './model/SetBinlogClearPolicyRequest';
import { SetBinlogClearPolicyResponse } from './model/SetBinlogClearPolicyResponse';
import { SetDatabaseUserPrivilegeReqV3 } from './model/SetDatabaseUserPrivilegeReqV3';
import { SetDatabaseUserPrivilegeRequest } from './model/SetDatabaseUserPrivilegeRequest';
import { SetDatabaseUserPrivilegeResponse } from './model/SetDatabaseUserPrivilegeResponse';
import { SetDbUserPwdRequest } from './model/SetDbUserPwdRequest';
import { SetDbUserPwdResponse } from './model/SetDbUserPwdResponse';
import { SetHostPrivilegeRequestV3 } from './model/SetHostPrivilegeRequestV3';
import { SetInstancesDbShrinkRequest } from './model/SetInstancesDbShrinkRequest';
import { SetInstancesDbShrinkResponse } from './model/SetInstancesDbShrinkResponse';
import { SetInstancesNewDbShrinkRequest } from './model/SetInstancesNewDbShrinkRequest';
import { SetInstancesNewDbShrinkResponse } from './model/SetInstancesNewDbShrinkResponse';
import { SetInstancesProxyRestartRequest } from './model/SetInstancesProxyRestartRequest';
import { SetInstancesProxyRestartResponse } from './model/SetInstancesProxyRestartResponse';
import { SetLogLtsConfigsRequest } from './model/SetLogLtsConfigsRequest';
import { SetLogLtsConfigsResponse } from './model/SetLogLtsConfigsResponse';
import { SetOffSiteBackupPolicyRequest } from './model/SetOffSiteBackupPolicyRequest';
import { SetOffSiteBackupPolicyRequestBody } from './model/SetOffSiteBackupPolicyRequestBody';
import { SetOffSiteBackupPolicyResponse } from './model/SetOffSiteBackupPolicyResponse';
import { SetPostgresqlDbUserPwdRequest } from './model/SetPostgresqlDbUserPwdRequest';
import { SetPostgresqlDbUserPwdResponse } from './model/SetPostgresqlDbUserPwdResponse';
import { SetReadOnlySwitchRequest } from './model/SetReadOnlySwitchRequest';
import { SetReadOnlySwitchResponse } from './model/SetReadOnlySwitchResponse';
import { SetSecondLevelMonitorRequest } from './model/SetSecondLevelMonitorRequest';
import { SetSecondLevelMonitorResponse } from './model/SetSecondLevelMonitorResponse';
import { SetSecurityGroupRequest } from './model/SetSecurityGroupRequest';
import { SetSecurityGroupResponse } from './model/SetSecurityGroupResponse';
import { SetSensitiveSlowLogRequest } from './model/SetSensitiveSlowLogRequest';
import { SetSensitiveSlowLogResponse } from './model/SetSensitiveSlowLogResponse';
import { ShareBackups } from './model/ShareBackups';
import { ShowApiVersionRequest } from './model/ShowApiVersionRequest';
import { ShowApiVersionResponse } from './model/ShowApiVersionResponse';
import { ShowAuditlogDownloadLinkRequest } from './model/ShowAuditlogDownloadLinkRequest';
import { ShowAuditlogDownloadLinkResponse } from './model/ShowAuditlogDownloadLinkResponse';
import { ShowAuditlogPolicyRequest } from './model/ShowAuditlogPolicyRequest';
import { ShowAuditlogPolicyResponse } from './model/ShowAuditlogPolicyResponse';
import { ShowAutoEnlargePolicyRequest } from './model/ShowAutoEnlargePolicyRequest';
import { ShowAutoEnlargePolicyResponse } from './model/ShowAutoEnlargePolicyResponse';
import { ShowAvailableVersionRequest } from './model/ShowAvailableVersionRequest';
import { ShowAvailableVersionResponse } from './model/ShowAvailableVersionResponse';
import { ShowBackupDownloadLinkRequest } from './model/ShowBackupDownloadLinkRequest';
import { ShowBackupDownloadLinkResponse } from './model/ShowBackupDownloadLinkResponse';
import { ShowBackupPolicyRequest } from './model/ShowBackupPolicyRequest';
import { ShowBackupPolicyResponse } from './model/ShowBackupPolicyResponse';
import { ShowBinlogClearPolicyRequest } from './model/ShowBinlogClearPolicyRequest';
import { ShowBinlogClearPolicyResponse } from './model/ShowBinlogClearPolicyResponse';
import { ShowConfigurationRequest } from './model/ShowConfigurationRequest';
import { ShowConfigurationResponse } from './model/ShowConfigurationResponse';
import { ShowDnsNameRequest } from './model/ShowDnsNameRequest';
import { ShowDnsNameResponse } from './model/ShowDnsNameResponse';
import { ShowDomainNameRequest } from './model/ShowDomainNameRequest';
import { ShowDomainNameResponse } from './model/ShowDomainNameResponse';
import { ShowDrReplicaStatusRequest } from './model/ShowDrReplicaStatusRequest';
import { ShowDrReplicaStatusResponse } from './model/ShowDrReplicaStatusResponse';
import { ShowIncreBackupPolicy1Request } from './model/ShowIncreBackupPolicy1Request';
import { ShowIncreBackupPolicy1Response } from './model/ShowIncreBackupPolicy1Response';
import { ShowIncreBackupPolicyRespBodyIncreBackupPolicy } from './model/ShowIncreBackupPolicyRespBodyIncreBackupPolicy';
import { ShowInformationAboutDatabaseProxyRequest } from './model/ShowInformationAboutDatabaseProxyRequest';
import { ShowInformationAboutDatabaseProxyResponse } from './model/ShowInformationAboutDatabaseProxyResponse';
import { ShowInstanceConfigurationRequest } from './model/ShowInstanceConfigurationRequest';
import { ShowInstanceConfigurationResponse } from './model/ShowInstanceConfigurationResponse';
import { ShowOffSiteBackupPolicyRequest } from './model/ShowOffSiteBackupPolicyRequest';
import { ShowOffSiteBackupPolicyResponse } from './model/ShowOffSiteBackupPolicyResponse';
import { ShowPostgresqlParamValueRequest } from './model/ShowPostgresqlParamValueRequest';
import { ShowPostgresqlParamValueResponse } from './model/ShowPostgresqlParamValueResponse';
import { ShowQuotasRequest } from './model/ShowQuotasRequest';
import { ShowQuotasResponse } from './model/ShowQuotasResponse';
import { ShowRecyclePolicyRequest } from './model/ShowRecyclePolicyRequest';
import { ShowRecyclePolicyResponse } from './model/ShowRecyclePolicyResponse';
import { ShowReplayDelayStatusRequest } from './model/ShowReplayDelayStatusRequest';
import { ShowReplayDelayStatusResponse } from './model/ShowReplayDelayStatusResponse';
import { ShowReplicationStatusRequest } from './model/ShowReplicationStatusRequest';
import { ShowReplicationStatusResponse } from './model/ShowReplicationStatusResponse';
import { ShowSecondLevelMonitoringRequest } from './model/ShowSecondLevelMonitoringRequest';
import { ShowSecondLevelMonitoringResponse } from './model/ShowSecondLevelMonitoringResponse';
import { ShowStorageUsedSpaceRequest } from './model/ShowStorageUsedSpaceRequest';
import { ShowStorageUsedSpaceResponse } from './model/ShowStorageUsedSpaceResponse';
import { ShowTdeStatusRequest } from './model/ShowTdeStatusRequest';
import { ShowTdeStatusResponse } from './model/ShowTdeStatusResponse';
import { ShowUpgradeDbMajorVersionStatusRequest } from './model/ShowUpgradeDbMajorVersionStatusRequest';
import { ShowUpgradeDbMajorVersionStatusResponse } from './model/ShowUpgradeDbMajorVersionStatusResponse';
import { ShutdownInstanceRecord } from './model/ShutdownInstanceRecord';
import { SimplifiedInstanceEntry } from './model/SimplifiedInstanceEntry';
import { SimplifiedInstancesRequest } from './model/SimplifiedInstancesRequest';
import { Single2Ha } from './model/Single2Ha';
import { Single2HaObject } from './model/Single2HaObject';
import { SlaveInstance } from './model/SlaveInstance';
import { SlowLog } from './model/SlowLog';
import { SlowLogFile } from './model/SlowLogFile';
import { SlowLogStatistics } from './model/SlowLogStatistics';
import { SlowLogStatisticsForLtsRequest } from './model/SlowLogStatisticsForLtsRequest';
import { SlowlogDownloadInfo } from './model/SlowlogDownloadInfo';
import { SlowlogDownloadRequest } from './model/SlowlogDownloadRequest';
import { SlowlogForLtsRequest } from './model/SlowlogForLtsRequest';
import { SqlLimitObject } from './model/SqlLimitObject';
import { SqlserverDatabaseForCreation } from './model/SqlserverDatabaseForCreation';
import { SqlserverDatabaseForDetail } from './model/SqlserverDatabaseForDetail';
import { SqlserverGrantRequest } from './model/SqlserverGrantRequest';
import { SqlserverRevokeRequest } from './model/SqlserverRevokeRequest';
import { SqlserverUserForCreation } from './model/SqlserverUserForCreation';
import { SqlserverUserWithPrivilege } from './model/SqlserverUserWithPrivilege';
import { SslOptionRequest } from './model/SslOptionRequest';
import { StartDatabaseProxyRequest } from './model/StartDatabaseProxyRequest';
import { StartDatabaseProxyResponse } from './model/StartDatabaseProxyResponse';
import { StartFailoverRequest } from './model/StartFailoverRequest';
import { StartFailoverResponse } from './model/StartFailoverResponse';
import { StartInstanceEnlargeVolumeActionRequest } from './model/StartInstanceEnlargeVolumeActionRequest';
import { StartInstanceEnlargeVolumeActionResponse } from './model/StartInstanceEnlargeVolumeActionResponse';
import { StartInstanceReduceVolumeActionRequest } from './model/StartInstanceReduceVolumeActionRequest';
import { StartInstanceReduceVolumeActionResponse } from './model/StartInstanceReduceVolumeActionResponse';
import { StartInstanceRestartActionRequest } from './model/StartInstanceRestartActionRequest';
import { StartInstanceRestartActionResponse } from './model/StartInstanceRestartActionResponse';
import { StartInstanceSingleToHaActionRequest } from './model/StartInstanceSingleToHaActionRequest';
import { StartInstanceSingleToHaActionResponse } from './model/StartInstanceSingleToHaActionResponse';
import { StartRecyclePolicyRequest } from './model/StartRecyclePolicyRequest';
import { StartRecyclePolicyResponse } from './model/StartRecyclePolicyResponse';
import { StartResizeFlavorActionRequest } from './model/StartResizeFlavorActionRequest';
import { StartResizeFlavorActionResponse } from './model/StartResizeFlavorActionResponse';
import { StartupInstanceRequest } from './model/StartupInstanceRequest';
import { StartupInstanceResponse } from './model/StartupInstanceResponse';
import { StopBackupRequest } from './model/StopBackupRequest';
import { StopBackupResponse } from './model/StopBackupResponse';
import { StopDatabaseProxyRequest } from './model/StopDatabaseProxyRequest';
import { StopDatabaseProxyResponse } from './model/StopDatabaseProxyResponse';
import { StopInstanceRequest } from './model/StopInstanceRequest';
import { StopInstanceResponse } from './model/StopInstanceResponse';
import { Storage } from './model/Storage';
import { SupportFastRestoreList } from './model/SupportFastRestoreList';
import { SwitchLogReplayRequest } from './model/SwitchLogReplayRequest';
import { SwitchLogReplayRequestBody } from './model/SwitchLogReplayRequestBody';
import { SwitchLogReplayResponse } from './model/SwitchLogReplayResponse';
import { SwitchSqlLimitControlReqV3 } from './model/SwitchSqlLimitControlReqV3';
import { SwitchSqlLimitRequest } from './model/SwitchSqlLimitRequest';
import { SwitchSqlLimitResponse } from './model/SwitchSqlLimitResponse';
import { SwitchSslRequest } from './model/SwitchSslRequest';
import { SwitchSslResponse } from './model/SwitchSslResponse';
import { TagDelWithKeyValue } from './model/TagDelWithKeyValue';
import { TagResp } from './model/TagResp';
import { TagResponse } from './model/TagResponse';
import { TagWithKeyValue } from './model/TagWithKeyValue';
import { TargetInstanceRequest } from './model/TargetInstanceRequest';
import { UnchangeableParam } from './model/UnchangeableParam';
import { UnlockNodeReadonlyStatusRequest } from './model/UnlockNodeReadonlyStatusRequest';
import { UnlockNodeReadonlyStatusRequestBody } from './model/UnlockNodeReadonlyStatusRequestBody';
import { UnlockNodeReadonlyStatusResponse } from './model/UnlockNodeReadonlyStatusResponse';
import { UpdateConfigurationRequest } from './model/UpdateConfigurationRequest';
import { UpdateConfigurationResponse } from './model/UpdateConfigurationResponse';
import { UpdateConfigurationRspConfiguration } from './model/UpdateConfigurationRspConfiguration';
import { UpdateDBShrinkRequestBody } from './model/UpdateDBShrinkRequestBody';
import { UpdateDataIpRequest } from './model/UpdateDataIpRequest';
import { UpdateDataIpResponse } from './model/UpdateDataIpResponse';
import { UpdateDatabaseOwnerRequest } from './model/UpdateDatabaseOwnerRequest';
import { UpdateDatabaseOwnerRequestBody } from './model/UpdateDatabaseOwnerRequestBody';
import { UpdateDatabaseOwnerResponse } from './model/UpdateDatabaseOwnerResponse';
import { UpdateDatabaseReq } from './model/UpdateDatabaseReq';
import { UpdateDatabaseRequest } from './model/UpdateDatabaseRequest';
import { UpdateDatabaseResponse } from './model/UpdateDatabaseResponse';
import { UpdateDbPortRequest } from './model/UpdateDbPortRequest';
import { UpdateDbUserCommentRequest } from './model/UpdateDbUserCommentRequest';
import { UpdateDbUserCommentResponse } from './model/UpdateDbUserCommentResponse';
import { UpdateDbUserPrivilegeRequest } from './model/UpdateDbUserPrivilegeRequest';
import { UpdateDbUserPrivilegeResponse } from './model/UpdateDbUserPrivilegeResponse';
import { UpdateDbUserReq } from './model/UpdateDbUserReq';
import { UpdateDnsNameRequest } from './model/UpdateDnsNameRequest';
import { UpdateDnsNameResponse } from './model/UpdateDnsNameResponse';
import { UpdateHostPrivilegeRequest } from './model/UpdateHostPrivilegeRequest';
import { UpdateHostPrivilegeResponse } from './model/UpdateHostPrivilegeResponse';
import { UpdateIncreBackupPolicy1Request } from './model/UpdateIncreBackupPolicy1Request';
import { UpdateIncreBackupPolicy1RequestBody } from './model/UpdateIncreBackupPolicy1RequestBody';
import { UpdateIncreBackupPolicy1Response } from './model/UpdateIncreBackupPolicy1Response';
import { UpdateInstanceConfigurationAsyncRequest } from './model/UpdateInstanceConfigurationAsyncRequest';
import { UpdateInstanceConfigurationAsyncResponse } from './model/UpdateInstanceConfigurationAsyncResponse';
import { UpdateInstanceConfigurationRequest } from './model/UpdateInstanceConfigurationRequest';
import { UpdateInstanceConfigurationRequestBody } from './model/UpdateInstanceConfigurationRequestBody';
import { UpdateInstanceConfigurationResponse } from './model/UpdateInstanceConfigurationResponse';
import { UpdateInstanceNameRequest } from './model/UpdateInstanceNameRequest';
import { UpdateInstanceNameResponse } from './model/UpdateInstanceNameResponse';
import { UpdatePortRequest } from './model/UpdatePortRequest';
import { UpdatePortResponse } from './model/UpdatePortResponse';
import { UpdatePostgresqlDatabaseRequest } from './model/UpdatePostgresqlDatabaseRequest';
import { UpdatePostgresqlDatabaseResponse } from './model/UpdatePostgresqlDatabaseResponse';
import { UpdatePostgresqlDbUserCommentRequest } from './model/UpdatePostgresqlDbUserCommentRequest';
import { UpdatePostgresqlDbUserCommentResponse } from './model/UpdatePostgresqlDbUserCommentResponse';
import { UpdatePostgresqlExtensionRequest } from './model/UpdatePostgresqlExtensionRequest';
import { UpdatePostgresqlExtensionResponse } from './model/UpdatePostgresqlExtensionResponse';
import { UpdatePostgresqlInstanceAliasRequest } from './model/UpdatePostgresqlInstanceAliasRequest';
import { UpdatePostgresqlInstanceAliasResponse } from './model/UpdatePostgresqlInstanceAliasResponse';
import { UpdatePostgresqlParameterValueRequest } from './model/UpdatePostgresqlParameterValueRequest';
import { UpdatePostgresqlParameterValueResponse } from './model/UpdatePostgresqlParameterValueResponse';
import { UpdateRdsInstanceAliasRequest } from './model/UpdateRdsInstanceAliasRequest';
import { UpdateReadWeightRequest } from './model/UpdateReadWeightRequest';
import { UpdateReadWeightResponse } from './model/UpdateReadWeightResponse';
import { UpdateSqlLimitRequest } from './model/UpdateSqlLimitRequest';
import { UpdateSqlLimitResponse } from './model/UpdateSqlLimitResponse';
import { UpdateSqlLimitRuleReqV3 } from './model/UpdateSqlLimitRuleReqV3';
import { UpdateTdeStatusRequest } from './model/UpdateTdeStatusRequest';
import { UpdateTdeStatusRequestBody } from './model/UpdateTdeStatusRequestBody';
import { UpdateTdeStatusResponse } from './model/UpdateTdeStatusResponse';
import { UpgradeDbMajorVersionPreCheckRequest } from './model/UpgradeDbMajorVersionPreCheckRequest';
import { UpgradeDbMajorVersionPreCheckResponse } from './model/UpgradeDbMajorVersionPreCheckResponse';
import { UpgradeDbMajorVersionRequest } from './model/UpgradeDbMajorVersionRequest';
import { UpgradeDbMajorVersionResponse } from './model/UpgradeDbMajorVersionResponse';
import { UpgradeDbVersionNewRequest } from './model/UpgradeDbVersionNewRequest';
import { UpgradeDbVersionNewResponse } from './model/UpgradeDbVersionNewResponse';
import { UpgradeDbVersionRequest } from './model/UpgradeDbVersionRequest';
import { UpgradeDbVersionResponse } from './model/UpgradeDbVersionResponse';
import { UpgradePgMajorVersion } from './model/UpgradePgMajorVersion';
import { UpgradeReports } from './model/UpgradeReports';
import { UserForCreation } from './model/UserForCreation';
import { UserForList } from './model/UserForList';
import { UserWithPrivilege } from './model/UserWithPrivilege';
import { Volume } from './model/Volume';
import { VolumeForInstanceResponse } from './model/VolumeForInstanceResponse';

export class RdsClient {
    public static newBuilder(): ClientBuilder<RdsClient> {
            return new ClientBuilder<RdsClient>(newClient);
    }

    private hcClient: HcClient;
    public constructor(client: HcClient) {
        this.hcClient = client;
    }

    public getPath() {
        return __dirname;
    }


    /**
     * 以传入配置全量覆盖当前pg_hba.conf文件内容，入参为空时用默认配置覆盖当前文件内容
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 在pg_hba.conf文件最后新增单个或多个配置
     * @param {string} instanceId 实例id
     * @param {Array<PostgresqlHbaConf>} [addPostgresqlHbaConfRequestBody] 修改参数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public addPostgresqlHbaConf(addPostgresqlHbaConfRequest?: AddPostgresqlHbaConfRequest): Promise<AddPostgresqlHbaConfResponse> {
        const options = ParamCreater().addPostgresqlHbaConf(addPostgresqlHbaConfRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 应用参数模板。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 应用参数模板
     * @param {string} configId 参数模板ID。
     * @param {ApplyConfigurationRequest} applyConfigurationRequest 请求体。
     * @param {string} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public applyConfigurationAsync(applyConfigurationAsyncRequest?: ApplyConfigurationAsyncRequest): Promise<ApplyConfigurationAsyncResponse> {
        const options = ParamCreater().applyConfigurationAsync(applyConfigurationAsyncRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 绑定和解绑弹性公网IP。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 绑定和解绑弹性公网IP
     * @param {string} instanceId 实例ID。
     * @param {BindEipRequest} bindEipRequest 请求体。
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
     * 批量删除手动备份。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量删除手动备份
     * @param {BatchDeleteBackupRequestBody} batchDeleteBackupRequestBody 请求体。
     * @param {string} [xLanguage] 语言
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
     * 库级时间点恢复
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 库级时间点恢复
     * @param {PostgreSQLRestoreDatabaseRequest} batchRestorePostgreSQLDatabaseRequestBody 库级时间点恢复请求信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchRestoreDatabase(batchRestoreDatabaseRequest?: BatchRestoreDatabaseRequest): Promise<BatchRestoreDatabaseResponse> {
        const options = ParamCreater().batchRestoreDatabase(batchRestoreDatabaseRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 表级时间点恢复（PostgreSQL）
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 表级时间点恢复（PostgreSQL）
     * @param {PostgreSQLRestoreTableRequest} [batchRestorePostgreSQLTablesRequestBody] 表级时间点恢复请求信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchRestorePostgreSqlTables(batchRestorePostgreSqlTablesRequest?: BatchRestorePostgreSqlTablesRequest): Promise<BatchRestorePostgreSqlTablesResponse> {
        const options = ParamCreater().batchRestorePostgreSqlTables(batchRestorePostgreSqlTablesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量停止实例
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量停止实例
     * @param {BatchShutdownInsReq} batchStopInstanceRequestBody 批量停止实例请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchStopInstance(batchStopInstanceRequest?: BatchStopInstanceRequest): Promise<BatchStopInstanceResponse> {
        const options = ParamCreater().batchStopInstance(batchStopInstanceRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-request-id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量添加标签。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量添加标签
     * @param {string} instanceId 实例ID。
     * @param {BatchTagActionAddRequestBody} batchTagActionRequest 请求体。
     * @param {string} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchTagAddAction(batchTagAddActionRequest?: BatchTagAddActionRequest): Promise<BatchTagAddActionResponse> {
        const options = ParamCreater().batchTagAddAction(batchTagAddActionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量删除标签。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量删除标签
     * @param {string} instanceId 实例ID。
     * @param {BatchTagActionDelRequestBody} batchTagActionRequest 请求体。
     * @param {string} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchTagDelAction(batchTagDelActionRequest?: BatchTagDelActionRequest): Promise<BatchTagDelActionResponse> {
        const options = ParamCreater().batchTagDelAction(batchTagDelActionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更改主备实例的数据同步方式。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更改主备实例的数据同步方式
     * @param {string} instanceId 实例ID。
     * @param {FailoverModeRequest} failoverModeRequestBody 请求体。
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public changeFailoverMode(changeFailoverModeRequest?: ChangeFailoverModeRequest): Promise<ChangeFailoverModeResponse> {
        const options = ParamCreater().changeFailoverMode(changeFailoverModeRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 切换主备实例的倒换策略.
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 切换主备实例的倒换策略
     * @param {string} instanceId 实例ID。
     * @param {FailoverStrategyRequest} failoverStrategyRequestBody 请求体。
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public changeFailoverStrategy(changeFailoverStrategyRequest?: ChangeFailoverStrategyRequest): Promise<ChangeFailoverStrategyResponse> {
        const options = ParamCreater().changeFailoverStrategy(changeFailoverStrategyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 设置可维护时间段
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 设置可维护时间段
     * @param {string} instanceId 实例ID。
     * @param {OpsWindowRequest} opsWindowRequestBody 请求体。
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言
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
     * 复制参数模板
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 复制参数模板
     * @param {string} configId 参数模板ID
     * @param {ConfigurationCopyRequestBody} [configurationCopyRequestBody] 
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
     * @param {ConfigurationForCreation} createConfigurationRequestBody 请求体。
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言
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
     * 申请域名
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 申请域名
     * @param {string} instanceId 实例ID。
     * @param {CreateDnsNameRequestBody} createDnsNameRequestBody 请求体。
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createDnsName(createDnsNameRequest?: CreateDnsNameRequest): Promise<CreateDnsNameResponse> {
        const options = ParamCreater().createDnsName(createDnsNameRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建数据库实例。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建数据库实例
     * @param {InstanceRequest} createInstanceRequestBody 请求体。
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言
     * @param {string} [xClientToken] 保证客户端请求幂等性的标识。 该标识为32位UUID格式，由客户端生成，且需确保72小时内不同请求之间该标识具有唯一性。
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
     * 创建数据库实例V5接口，仅支持IAM5的新平面认证方式（AK/SK认证方式）
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建数据库实例V5接口，仅支持IAM5的新平面认证方式（AK/SK认证方式）
     * @param {CustomerCreateInstanceReq} createInstanceV5RequestBody 请求体。
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言
     * @param {string} [xClientToken] 保证客户端请求幂等性的标识。 该标识为32位UUID格式，由客户端生成，且需确保72小时内不同请求之间该标识具有唯一性。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createInstanceIam5(createInstanceIam5Request?: CreateInstanceIam5Request): Promise<CreateInstanceIam5Response> {
        const options = ParamCreater().createInstanceIam5(createInstanceIam5Request);

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
     * 开启数据库代理。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 开启数据库代理
     * @param {string} instanceId 实例ID，严格匹配UUID规则。
     * @param {CreateMysqlMultiProxyRequest} createRDSforMySqlProxyRequestBody 请求体。
     * @param {string} [contentType] 
     * @param {string} [xLanguage] 语言。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createRdSforMySqlProxy(createRdSforMySqlProxyRequest?: CreateRdSforMySqlProxyRequest): Promise<CreateRdSforMySqlProxyResponse> {
        const options = ParamCreater().createRdSforMySqlProxy(createRdSforMySqlProxyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 恢复到新实例。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 恢复到新实例
     * @param {CreateRestoreInstanceRequestBody} createInstanceRequestBody 请求体。
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
     * 新增SQL限流
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 新增SQL限流
     * @param {string} instanceId 实例ID
     * @param {CreateSqlLimitRuleReqV3} createSqlLimitRequestBody 新增SQL限流请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createSqlLimit(createSqlLimitRequest?: CreateSqlLimitRequest): Promise<CreateSqlLimitResponse> {
        const options = ParamCreater().createSqlLimit(createSqlLimitRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取扩展日志下载信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取扩展日志下载信息
     * @param {string} instanceId 实例ID。
     * @param {CreateXelLogDownloadRequestBody} createXelLogDownloadRequestBody 请求体
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createXelLogDownload(createXelLogDownloadRequest?: CreateXelLogDownloadRequest): Promise<CreateXelLogDownloadResponse> {
        const options = ParamCreater().createXelLogDownload(createXelLogDownloadRequest);

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
     * @param {string} [xLanguage] 语言
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
     * 解除实例容灾关系接口
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 解除实例容灾关系接口
     * @param {string} instanceId 实例id
     * @param {DeleteDisasterRecoveryRequestBody} deleteDisasterRecoveryRequestBody 解除实例容灾关系请求体
     * @param {string} [xLanguage] 语言
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
     * 删除数据库实例。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除数据库实例
     * @param {string} instanceId 实例ID。
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言
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
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除即时任务
     * @param {string} id 
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
     * 解除LTS配置信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @param {'mysql' | 'postgresql' | 'sqlserver'} engine 引擎。
     * @param {DeleteLogConfigResponseBody} logConfigs 待解除Lts配置请求体
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteLogLtsConfigs(deleteLogLtsConfigsRequest?: DeleteLogLtsConfigsRequest): Promise<DeleteLogLtsConfigsResponse> {
        const options = ParamCreater().deleteLogLtsConfigs(deleteLogLtsConfigsRequest);

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
     * @param {string} backupId 备份ID。
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
     * 删除pg_hba.conf文件的单个或多个配置，以priority做唯一标识
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除pg_hba.conf文件的单个或多个配置
     * @param {string} instanceId 实例id
     * @param {Array<PostgresqlHbaConf>} [deletePostgresqlHbaConfRequestBody] 修改参数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deletePostgresqlHbaConf(deletePostgresqlHbaConfRequest?: DeletePostgresqlHbaConfRequest): Promise<DeletePostgresqlHbaConfResponse> {
        const options = ParamCreater().deletePostgresqlHbaConf(deletePostgresqlHbaConfRequest);

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
     * @param {string} instanceId 实例ID，严格匹配UUID规则。
     * @param {string} proxyId 数据库代理ID，严格匹配UUID规则。
     * @param {string} [contentType] 
     * @param {string} [xLanguage] 语言。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteRdSforMySqlProxy(deleteRdSforMySqlProxyRequest?: DeleteRdSforMySqlProxyRequest): Promise<DeleteRdSforMySqlProxyResponse> {
        const options = ParamCreater().deleteRdSforMySqlProxy(deleteRdSforMySqlProxyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除SQL限流
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除SQL限流
     * @param {string} instanceId 实例ID
     * @param {DeleteSqlLimitRuleReqV3} deleteSqlLimitRequestBody 删除Sql限流请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteSqlLimit(deleteSqlLimitRequest?: DeleteSqlLimitRequest): Promise<DeleteSqlLimitResponse> {
        const options = ParamCreater().deleteSqlLimit(deleteSqlLimitRequest);

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
     * @param {string} instanceId 实例ID。
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言
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
     * @param {string} instanceId 实例ID。
     * @param {SlowlogDownloadRequest} slowlogDownloadRequestBody 请求体。
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言
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
     * 应用参数模板。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 应用参数模板
     * @param {string} configId 参数模板ID。
     * @param {ApplyConfigurationRequest} applyConfigurationRequest 请求体。
     * @param {string} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public enableConfiguration(enableConfigurationRequest?: EnableConfigurationRequest): Promise<EnableConfigurationResponse> {
        const options = ParamCreater().enableConfiguration(enableConfigurationRequest);

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
     * @param {string} instanceId 实例ID。
     * @param {string} startTime 查询开始时间，格式为“yyyy-mm-ddThh:mm:ssZ”。  其中，T指某个时间的开始；Z指时区偏移量，例如北京时间偏移显示为+0800。
     * @param {string} endTime 查询结束时间，格式为“yyyy-mm-ddThh:mm:ssZ”，且大于查询开始时间，时间跨度不超过30天。  其中，T指某个时间的开始，Z指时区偏移量，例如北京时间偏移显示为+0800。
     * @param {number} offset 索引位置，偏移量。  从第一条数据偏移offset条数据后开始查询，默认为0（偏移0条数据，表示从第一条数据开始查询），必须为数字，不能为负数。
     * @param {number} limit 查询记录数。取值范围[1, 50]。
     * @param {string} [xLanguage] 语言
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
     * 获取备份列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取备份列表
     * @param {string} instanceId 实例ID。
     * @param {string} [xLanguage] 语言
     * @param {string} [backupId] 备份ID。
     * @param {'auto' | 'manual' | 'fragment' | 'incremental'} [backupType] 备份类型，取值：  - “auto”: 自动全量备份 - “manual”: 手动全量备份 - “fragment”: 差异全量备份 - “incremental”: 自动增量备份
     * @param {'BUILDING' | 'COMPLETED' | 'FAILED'} [status] 备份状态，只支持筛选RDS for SQL Server的全量备份的状态。取值：  - “BUILDING”: 备份中 - “COMPLETED”: 备份完成 - “FAILED”: 备份失败
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
     * 查询SQLServer可用字符集
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询SQLServer可用字符集
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listCollations(listCollationsRequest?: ListCollationsRequest): Promise<ListCollationsResponse> {
        const options = ParamCreater().listCollations(listCollationsRequest);

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
     * 查询数据库引擎的版本。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询数据库引擎的版本
     * @param {'MySQL' | 'PostgreSQL' | 'SQLServer' | 'MariaDB'} databaseName 数据库引擎。支持的引擎如下，不区分大小写： MySQL PostgreSQL SQLServer
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
     * 批量查询容灾实例信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @param {string} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listDrRelations(listDrRelationsRequest?: ListDrRelationsRequest): Promise<ListDrRelationsResponse> {
        const options = ParamCreater().listDrRelations(listDrRelationsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询实例可变更规格
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询实例可变更规格
     * @param {string} instanceId 实例ID
     * @param {string} availabilityZoneIds 可用区，多个用\&quot;,\&quot;分割，如cn-southwest-244a,cn-southwest-244b
     * @param {string} haMode 模式，包括如下类型： ha：主备实例。 replica：只读实例。 single：单实例。
     * @param {string} [specCodeLike] 性能规格,如rds.dec.pg.s1.medium，模糊匹配该规格类型
     * @param {string} [flavorCategoryType] 规格类型，包括如下类型：simple、dec
     * @param {boolean} [isRhaFlavor] 是否显示高可用只读类型
     * @param {number} [offset] 索引位置，偏移量。 从第一条数据偏移offset条数据后开始查询，默认为0。 取值必须为数字，且不能为负数。
     * @param {number} [limit] 查询个数上限值。 取值范围：1~100。 不传该参数时，默认查询前100条信息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listEngineFlavors(listEngineFlavorsRequest?: ListEngineFlavorsRequest): Promise<ListEngineFlavorsResponse> {
        const options = ParamCreater().listEngineFlavors(listEngineFlavorsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询数据库错误日志。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询数据库错误日志
     * @param {string} instanceId 实例ID。
     * @param {string} startDate 开始时间，格式为“yyyy-mm-ddThh:mm:ssZ”。  其中，T指某个时间的开始；Z指时区偏移量，例如北京时间偏移显示为+0800。
     * @param {string} endDate 结束时间，格式为“yyyy-mm-ddThh:mm:ssZ”。  其中，T指某个时间的开始；Z指时区偏移量，例如北京时间偏移显示为+0800。  只能查询当前时间前一个月内的错误日志。
     * @param {string} [xLanguage] 语言
     * @param {number} [offset] 页数偏移量，如1、2、3、4等，不填时默认为1。
     * @param {number} [limit] 每页多少条记录，取值范围是1~100，不填时默认为10。
     * @param {'ALL' | 'INFO' | 'LOG' | 'WARNING' | 'ERROR' | 'FATAL' | 'PANIC' | 'NOTE'} [level] 日志级别，默认为ALL。
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
     * 查询数据库错误日志。(与原v3接口相比修改offset,符合华为云服务开放 API遵从性规范3.0)
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询数据库错误日志
     * @param {string} instanceId 实例ID。
     * @param {string} startDate 开始时间，格式为“yyyy-mm-ddThh:mm:ssZ”。 其中，T指某个时间的开始；Z指时区偏移量，例如北京时间偏移显示为+0800。
     * @param {string} endDate 结束时间，格式为“yyyy-mm-ddThh:mm:ssZ”。 其中，T指某个时间的开始；Z指时区偏移量，例如北京时间偏移显示为+0800。 只能查询当前时间前一个月内的错误日志。
     * @param {string} [xLanguage] 语言
     * @param {number} [offset] 索引位置，偏移量。从第一条数据偏移offset条数据后开始查询，默认为0（偏移0条数据，表示从第一条数据开始查询），必须为数字，不能为负数。
     * @param {number} [limit] 每页多少条记录，取值范围是1~100，不填时默认为10。
     * @param {'ALL' | 'INFO' | 'LOG' | 'WARNING' | 'ERROR' | 'FATAL' | 'PANIC' | 'NOTE'} [level] 日志级别，默认为ALL。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listErrorLogsNew(listErrorLogsNewRequest?: ListErrorLogsNewRequest): Promise<ListErrorLogsNewResponse> {
        const options = ParamCreater().listErrorLogsNew(listErrorLogsNewRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询实例的错误日志数据。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @param {string} instanceId 实例ID。
     * @param {ErrorlogForLtsRequest} request 查询条件。
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言。默认en-us。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listErrorlogForLts(listErrorlogForLtsRequest?: ListErrorlogForLtsRequest): Promise<ListErrorlogForLtsResponse> {
        const options = ParamCreater().listErrorlogForLts(listErrorlogForLtsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询数据库规格。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询数据库规格
     * @param {'MySQL' | 'PostgreSQL' | 'SQLServer' | 'MariaDB'} databaseName 数据库引擎。支持的引擎如下，不区分大小写： MySQL PostgreSQL SQLServer
     * @param {string} [xLanguage] 语言
     * @param {string} [versionName] 数据库版本号，获取方法请参见5.1查询数据库引擎的版本。（可输入小版本号）
     * @param {string} [specCode] 规格编码
     * @param {string} [isServerless] 是否查询serverless规格。取值范围如下，区分大小写： true：查询serverless规格 false：查询非serverless规格 默认值 false。
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
     * 查询数据库可变更规格接口
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询数据库可变更规格接口
     * @param {string} instanceId 实例id
     * @param {string} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listFlavorsResize(listFlavorsResizeRequest?: ListFlavorsResizeRequest): Promise<ListFlavorsResizeResponse> {
        const options = ParamCreater().listFlavorsResize(listFlavorsResizeRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定时间点可恢复的库
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询指定时间点可恢复的库
     * @param {string} engine 数据库引擎。支持的引擎如下，不区分大小写：postgresql,mysql
     * @param {PostgreSQLHistoryDatabaseRequest} listPostgresqlListHistoryDatabaseRequestBody 查询可恢复表的请求信息
     * @param {string} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listHistoryDatabase(listHistoryDatabaseRequest?: ListHistoryDatabaseRequest): Promise<ListHistoryDatabaseResponse> {
        const options = ParamCreater().listHistoryDatabase(listHistoryDatabaseRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询实例大版本升级检查历史。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @param {string} instanceId 实例ID
     * @param {number} [offset] 索引位置，偏移量。从第一条数据偏移offset条数据后开始查询，默认为0（偏移0条数据，表示从第一条数据开始查询），必须为数字，不能为负数。
     * @param {number} [limit] 查询记录数。默认为10，不能为负数，最小值为1，最大值为100。
     * @param {string} [order] 排序方式。 DESC，降序。 ASC，升序。 默认降序。
     * @param {string} [sortField] 排序字段。 check_time 检查时间。 expiration_time 过期时间。 默认检查时间。
     * @param {string} [targetVersion] 目标版本。
     * @param {boolean} [isAvailable] 是否有效。 true 表示有效。 false 表示无效。
     * @param {string} [xLanguage] 语言。默认en-us。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listInspectionHistories(listInspectionHistoriesRequest?: ListInspectionHistoriesRequest): Promise<ListInspectionHistoriesResponse> {
        const options = ParamCreater().listInspectionHistories(listInspectionHistoriesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取诊断后的实例数量
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取诊断后的实例数量
     * @param {'mysql' | 'postgresql' | 'sqlserver'} engine 引擎类型
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listInstanceDiagnosis(listInstanceDiagnosisRequest?: ListInstanceDiagnosisRequest): Promise<ListInstanceDiagnosisResponse> {
        const options = ParamCreater().listInstanceDiagnosis(listInstanceDiagnosisRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 实例参数修改历史。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询实例参数修改历史
     * @param {string} instanceId 实例ID
     * @param {number} [offset] 分页参数
     * @param {number} [limit] 分页参数
     * @param {string} [startTime] 开始时间 默认为当前时间的前7天 格式如 2020-09-01T18:50:20Z
     * @param {string} [endTime] 结束时间 默认为当前时间 格式如 2020-09-01T18:50:20Z
     * @param {string} [paramName] 参数名称
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listInstanceParamHistories(listInstanceParamHistoriesRequest?: ListInstanceParamHistoriesRequest): Promise<ListInstanceParamHistoriesResponse> {
        const options = ParamCreater().listInstanceParamHistories(listInstanceParamHistoriesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询实例标签。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询实例标签
     * @param {string} instanceId 
     * @param {string} [xLanguage] 语言
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
     * 查询数据库实例列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询数据库实例列表
     * @param {string} [contentType] 
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言
     * @param {string} [id] 实例ID。  “\\*”为系统保留字符，如果id是以“\\*”起始，表示按照\\*后面的值模糊匹配，否则，按照id精确匹配查询。不能只传入“\\*”。
     * @param {string} [name] 实例名称。  “\\*”为系统保留字符，如果name是以“\\*”起始，表示按照\\*后面的值模糊匹配，否则，按照name精确匹配查询。不能只传入“\\*”。
     * @param {'Single' | 'Ha' | 'Replica'} [type] 按照实例类型查询。取值Single、Ha、Replica，分别对应于单实例、主备实例和只读实例。
     * @param {'MySQL' | 'PostgreSQL' | 'SQLServer' | 'MariaDB'} [datastoreType] 数据库类型，区分大小写。 - MySQL - PostgreSQL - SQLServer - MariaDB
     * @param {string} [epsId] 企业项目id。
     * @param {string} [vpcId] 虚拟私有云ID。
     * @param {string} [subnetId] 子网ID。
     * @param {number} [offset] 索引位置，偏移量。从第一条数据偏移offset条数据后开始查询，默认为0（偏移0条数据，表示从第一条数据开始查询），必须为数字，不能为负数。
     * @param {number} [limit] 查询记录数。默认为100，不能为负数，最小值为1，最大值为100。
     * @param {string} [tags] 根据实例标签键值对进行查询。 {key}表示标签键，不可以为空或重复。最大长度127个unicode字符。key不能为空或者空字符串，不能为空格，使用之前先trim前后半角空格。不能包含+/?#&amp;&#x3D;,%特殊字符。 {value}表示标签值，可以为空。最大长度255个unicode字符，使用之前先trim 前后半角空格。不能包含+/?#&amp;&#x3D;,%特殊字符。如果value为空，则表示any_value（查询任意value）。 如果同时使用多个标签键值对进行查询，中间使用逗号分隔开，最多包含10组。
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
     * 获取指定诊断项的诊断结果
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取指定诊断项的诊断结果
     * @param {'mysql' | 'postgresql' | 'sqlserver'} engine 引擎类型
     * @param {'high_pressure' | 'lock_wait' | 'insufficient_capacity' | 'slow_sql_frequency' | 'disk_performance_cap' | 'mem_overrun' | 'age_exceed' | 'connections_exceed'} diagnosis 诊断项
     * @param {number} [offset] offset
     * @param {number} [limit] limit
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listInstancesInfoDiagnosis(listInstancesInfoDiagnosisRequest?: ListInstancesInfoDiagnosisRequest): Promise<ListInstancesInfoDiagnosisResponse> {
        const options = ParamCreater().listInstancesInfoDiagnosis(listInstancesInfoDiagnosisRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量获取实例是否能在库表恢复时使用极速恢复。
     * 
     * - 调用接口前，您需要了解API 认证鉴权。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取实例是否能使用极速恢复
     * @param {string} [xLanguage] 语言
     * @param {ListInstancesSupportFastRestoreRequestBody} [listInstancesSupportFastRestoreRequestBody] 请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listInstancesSupportFastRestore(listInstancesSupportFastRestoreRequest?: ListInstancesSupportFastRestoreRequest): Promise<ListInstancesSupportFastRestoreResponse> {
        const options = ParamCreater().listInstancesSupportFastRestore(listInstancesSupportFastRestoreRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取指定ID的任务信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取指定ID的任务信息
     * @param {string} id 任务ID。
     * @param {string} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listJobInfo(listJobInfoRequest?: ListJobInfoRequest): Promise<ListJobInfoResponse> {
        const options = ParamCreater().listJobInfo(listJobInfoRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取指定实例和时间范围的任务信息（SQL Server）。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取指定实例和时间范围的任务信息（SQL Server）
     * @param {string} instanceId 实例ID。
     * @param {string} startTime 开始时间，格式为UTC时间戳。
     * @param {string} [xLanguage] 语言
     * @param {string} [endTime] 结束时间，格式为UTC时间戳。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listJobInfoDetail(listJobInfoDetailRequest?: ListJobInfoDetailRequest): Promise<ListJobInfoDetailResponse> {
        const options = ParamCreater().listJobInfoDetail(listJobInfoDetailRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取LTS配置信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @param {'mysql' | 'postgresql' | 'sqlserver'} engine 引擎。
     * @param {string} [enterpriseProjectId] 企业项目ID。默认为空。
     * @param {string} [instanceId] 实例ID。默认为空。
     * @param {string} [instanceName] 实例名称。默认为空。
     * @param {number} [limit] 查询记录数。默认10。
     * @param {number} [offset] 索引位置，偏移量。默认0。
     * @param {string} [sort] 排序
     * @param {string} [instanceStatus] 实例状态
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listLogLtsConfigs(listLogLtsConfigsRequest?: ListLogLtsConfigsRequest): Promise<ListLogLtsConfigsResponse> {
        const options = ParamCreater().listLogLtsConfigs(listLogLtsConfigsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询跨区域备份列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询跨区域备份列表
     * @param {string} instanceId 实例ID。
     * @param {string} [xLanguage] 语言
     * @param {string} [backupId] 备份ID。
     * @param {'auto' | 'incremental'} [backupType] 备份类型，取值： - “auto”: 自动全量备份。SQL Server仅支持查询备份类型为“auto”的备份列表 - “incremental”: 自动增量备份
     * @param {number} [offset] 索引位置，偏移量。从第一条数据偏移offset条数据后开始查询，默认为0（偏移0条数据，表示从第一条数据开始查询），必须为数字，不能为负数。
     * @param {number} [limit] 查询记录数。默认为100，不能为负数，最小值为1，最大值为100。
     * @param {string} [beginTime] 查询开始时间，格式为“yyyy-mm-ddThh:mm:ssZ”。其中，T指某个时间的开始；Z指时区偏移量，例如北京时间偏移显示为+0800。与end_time必须同时使用。
     * @param {string} [endTime] 查询结束时间，格式为“yyyy-mm-ddThh:mm:ssZ”，且大于查询开始时间。其中，T指某个时间的开始；Z指时区偏移量，例如北京时间偏移显示为+0800。与begin_time必须同时使用。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listOffSiteBackups(listOffSiteBackupsRequest?: ListOffSiteBackupsRequest): Promise<ListOffSiteBackupsResponse> {
        const options = ParamCreater().listOffSiteBackups(listOffSiteBackupsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询跨区域备份实例列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询跨区域备份实例列表
     * @param {string} [contentType] 
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言
     * @param {object} [offset] 索引位置，偏移量。从第一条数据偏移offset条数据后开始查询，默认为0（偏移0条数据，表示从第一条数据开始查询），必须为数字，不能为负数。
     * @param {object} [limit] 查询记录数。默认为100，不能为负数，最小值为1，最大值为100。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listOffSiteInstances(listOffSiteInstancesRequest?: ListOffSiteInstancesRequest): Promise<ListOffSiteInstancesResponse> {
        const options = ParamCreater().listOffSiteInstances(listOffSiteInstancesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询跨区域备份可恢复时间段。
     * 如果您备份策略中的保存天数设置较长，建议您传入查询日期“date”。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询跨区域备份可恢复时间段
     * @param {string} instanceId 实例ID。
     * @param {string} [xLanguage] 语言
     * @param {string} [date] 所需查询的日期，为yyyy-mm-dd字符串格式，时区为UTC。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listOffSiteRestoreTimes(listOffSiteRestoreTimesRequest?: ListOffSiteRestoreTimesRequest): Promise<ListOffSiteRestoreTimesResponse> {
        const options = ParamCreater().listOffSiteRestoreTimes(listOffSiteRestoreTimesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询实例的pg_hba.conf文件配置
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询实例的pg_hba.conf文件配置
     * @param {string} instanceId 实例id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listPostgresqlHbaInfo(listPostgresqlHbaInfoRequest?: ListPostgresqlHbaInfoRequest): Promise<ListPostgresqlHbaInfoResponse> {
        const options = ParamCreater().listPostgresqlHbaInfo(listPostgresqlHbaInfoRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询实例的pg_hba.conf文件修改历史
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询实例的pg_hba.conf文件修改历史
     * @param {string} instanceId 实例id
     * @param {Date} [startTime] 开始时间,不传默认当天0点（UTC时区）
     * @param {Date} [endTime] 结束时间,不传默认当前时间（UTC时区）
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listPostgresqlHbaInfoHistory(listPostgresqlHbaInfoHistoryRequest?: ListPostgresqlHbaInfoHistoryRequest): Promise<ListPostgresqlHbaInfoHistoryResponse> {
        const options = ParamCreater().listPostgresqlHbaInfoHistory(listPostgresqlHbaInfoHistoryRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定时间点可恢复的表(PostgreSQL)
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询指定时间点可恢复的表(PostgreSQL)
     * @param {string} databaseName 数据库引擎。支持的引擎如下，不区分大小写：postgresql
     * @param {PostgreSQLHistoryTableRequest} listPostgresqlListHistoryTablesRequestBody 查询可恢复表的请求信息
     * @param {string} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listPostgresqlListHistoryTables(listPostgresqlListHistoryTablesRequest?: ListPostgresqlListHistoryTablesRequest): Promise<ListPostgresqlListHistoryTablesResponse> {
        const options = ParamCreater().listPostgresqlListHistoryTables(listPostgresqlListHistoryTablesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询预定义标签
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listPredefinedTag(listPredefinedTagRequest?: ListPredefinedTagRequest): Promise<ListPredefinedTagResponse> {
        const options = ParamCreater().listPredefinedTag(listPredefinedTagRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询项目标签。
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
     * 查询数据库代理信息列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询数据库代理信息列表
     * @param {string} instanceId 实例ID，严格匹配UUID规则。
     * @param {string} [contentType] 
     * @param {string} [xLanguage] 语言。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listRdSforMySqlProxy(listRdSforMySqlProxyRequest?: ListRdSforMySqlProxyRequest): Promise<ListRdSforMySqlProxyResponse> {
        const options = ParamCreater().listRdSforMySqlProxy(listRdSforMySqlProxyRequest);

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
     * @param {string} instanceId 实例ID，严格匹配UUID规则。
     * @param {string} [contentType] 
     * @param {string} [xLanguage] 语言。
     * @param {number} [offset] 索引位置，偏移量。从第一条数据偏移offset条数据后开始查询，默认为0（偏移0条数据，表示从第一条数据开始查询），必须为数字，不能为负数。
     * @param {number} [limit] 查询记录数。默认为100，不能为负数，最小值为1，最大值为100。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listRdSforMysqlProxyFlavors(listRdSforMysqlProxyFlavorsRequest?: ListRdSforMysqlProxyFlavorsRequest): Promise<ListRdSforMysqlProxyFlavorsResponse> {
        const options = ParamCreater().listRdSforMysqlProxyFlavors(listRdSforMysqlProxyFlavorsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询回收站实例信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询回收站
     * @param {number} offset 索引位置，偏移量。从第一条数据偏移offset条数据后开始查询，必须为数字，不能为负数。
     * @param {number} limit 每页数据条数。取值范围[1, 50]。
     * @param {string} [xLanguage] 语言
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
     * 查询可恢复时间段。
     * 如果您备份策略中的保存天数设置较长，建议您传入查询日期“date”。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询可恢复时间段
     * @param {string} instanceId 实例ID。
     * @param {string} [xLanguage] 语言
     * @param {string} [date] 所需查询的日期，为yyyy-mm-dd字符串格式，时区为UTC。
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
     * 查询共享备份列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询共享备份列表
     * @param {string} [instanceId] 实例ID。
     * @param {string} [instanceName] 实例名称。
     * @param {string} [backupName] 备份名称。
     * @param {string} [offset] 索引位置，偏移量。从第一条数据偏移offset条数据后开始查询，默认为0（偏移0条数据，表示从第一条数据开始查询），必须为数字，不能为负数。
     * @param {string} [limit] 查询记录数。默认为100，不能为负数，最小值为1，最大值为100。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listShareBackups(listShareBackupsRequest?: ListShareBackupsRequest): Promise<ListShareBackupsResponse> {
        const options = ParamCreater().listShareBackups(listShareBackupsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取指定实例详情
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @param {SimplifiedInstancesRequest} simplifiedInstancesRequest 查询请求体
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listSimplifiedInstances(listSimplifiedInstancesRequest?: ListSimplifiedInstancesRequest): Promise<ListSimplifiedInstancesResponse> {
        const options = ParamCreater().listSimplifiedInstances(listSimplifiedInstancesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询慢日志文件列表。
     * 调用该接口取到慢日志文件名后，可以调用接口/v3/{project_id}/instances/{instance_id}/slowlog-download 获取慢日志文件下载链接
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询慢日志文件列表
     * @param {string} instanceId 实例ID。
     * @param {string} [xLanguage] 语言
     * @param {number} [offset] 索引位置，偏移量。  从第一条数据偏移offset条数据后开始查询，默认为0（偏移0条数据，表示从第一条数据开始查询），必须为数字，不能为负数。
     * @param {number} [limit] 查询记录数。取值范围[1, 100]。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listSlowLogFile(listSlowLogFileRequest?: ListSlowLogFileRequest): Promise<ListSlowLogFileResponse> {
        const options = ParamCreater().listSlowLogFile(listSlowLogFileRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询实例慢日志的统计数据。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @param {string} instanceId 实例ID。
     * @param {SlowLogStatisticsForLtsRequest} request 查询条件。
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言。默认en-us。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listSlowLogStatisticsForLts(listSlowLogStatisticsForLtsRequest?: ListSlowLogStatisticsForLtsRequest): Promise<ListSlowLogStatisticsForLtsResponse> {
        const options = ParamCreater().listSlowLogStatisticsForLts(listSlowLogStatisticsForLtsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询数据库慢日志。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询数据库慢日志
     * @param {string} instanceId 实例ID。
     * @param {string} startDate 开始日期，格式为“yyyy-mm-ddThh:mm:ssZ”。  其中，T指某个时间的开始；Z指时区偏移量，例如北京时间偏移显示为+0800。
     * @param {string} endDate 结束时间，格式为“yyyy-mm-ddThh:mm:ssZ”。  其中，T指某个时间的开始；Z指时区偏移量，例如北京时间偏移显示为+0800。只能查询当前时间前一个月内的慢日志。
     * @param {string} [xLanguage] 语言
     * @param {number} [offset] 页数偏移量，如1、2、3、4等，不填时默认为1。
     * @param {number} [limit] 每页多少条记录，取值范围是1~100，不填时默认为10。
     * @param {'INSERT' | 'UPDATE' | 'SELECT' | 'DELETE' | 'CREATE'} [type] 语句类型，取空值，表示查询所有语句类型。
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
     * 查询数据库慢日志。(与原v3接口相比修改offset,符合华为云服务开放 API遵从性规范3.0)
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询数据库慢日志
     * @param {string} instanceId 实例ID。
     * @param {string} startDate 开始日期，格式为“yyyy-mm-ddThh:mm:ssZ”。 其中，T指某个时间的开始；Z指时区偏移量，例如北京时间偏移显示为+0800。
     * @param {string} endDate 结束时间，格式为“yyyy-mm-ddThh:mm:ssZ”。 其中，T指某个时间的开始；Z指时区偏移量，例如北京时间偏移显示为+0800。只能查询当前时间前一个月内的慢日志。
     * @param {string} [xLanguage] 语言
     * @param {number} [offset] 索引位置，偏移量。从第一条数据偏移offset条数据后开始查询，默认为0（偏移0条数据，表示从第一条数据开始查询），必须为数字，不能为负数。
     * @param {number} [limit] 每页多少条记录，取值范围是1~100，不填时默认为10。
     * @param {'INSERT' | 'UPDATE' | 'SELECT' | 'DELETE' | 'CREATE'} [type] 语句类型，取空值，表示查询所有语句类型。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listSlowLogsNew(listSlowLogsNewRequest?: ListSlowLogsNewRequest): Promise<ListSlowLogsNewResponse> {
        const options = ParamCreater().listSlowLogsNew(listSlowLogsNewRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询实例的慢日志数据。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @param {string} instanceId 实例ID。
     * @param {SlowlogForLtsRequest} request 查询条件。
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言。默认en-us。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listSlowlogForLts(listSlowlogForLtsRequest?: ListSlowlogForLtsRequest): Promise<ListSlowlogForLtsResponse> {
        const options = ParamCreater().listSlowlogForLts(listSlowlogForLtsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取慢日志统计信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取慢日志统计信息
     * @param {string} instanceId 实例ID。
     * @param {number} curPage 当前页号
     * @param {number} perPage 每页多少条记录，取值范围0~100
     * @param {string} startDate 开始时间，格式为“yyyy-mm-ddThh:mm:ssZ”。其中，T指某个时间的开始；Z指时区偏移量，例如北京时间偏移显示为+0800。
     * @param {string} endDate 结束时间，格式为“yyyy-mm-ddThh:mm:ssZ”。其中，T指某个时间的开始；Z指时区偏移量，例如北京时间偏移显示为+0800。
     * @param {'INSERT' | 'UPDATE' | 'SELECT' | 'DELETE' | 'CREATE' | 'ALL'} type 语句类型，ALL表示查询所有语句类型，也可指定日志类型 - INSERT - UPDATE - SELECT - DELETE - CREATE - ALL
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言
     * @param {string} [sort] 取值范围：\&quot;executeTime\&quot;,表示按执行时间降序排序，不传或者传其他表示按执行次数降序排序
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listSlowlogStatistics(listSlowlogStatisticsRequest?: ListSlowlogStatisticsRequest): Promise<ListSlowlogStatisticsResponse> {
        const options = ParamCreater().listSlowlogStatistics(listSlowlogStatisticsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询SQL限流列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询SQL限流列表
     * @param {string} instanceId 实例ID
     * @param {string} dbName 数据库名称
     * @param {number} [offset] 索引位置，偏移量。从第一条数据偏移offset条数据后开始查询，默认为0（偏移0条数据，表示从第一条数据开始查询），必须为数字，不能为负数。
     * @param {number} [limit] 查询记录数。默认为10，不能为负数，最小值为1，最大值为100。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listSqlLimit(listSqlLimitRequest?: ListSqlLimitRequest): Promise<ListSqlLimitResponse> {
        const options = ParamCreater().listSqlLimit(listSqlLimitRequest);

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
     * @param {string} instanceId 
     * @param {string} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listSslCertDownloadLink(listSslCertDownloadLinkRequest?: ListSslCertDownloadLinkRequest): Promise<ListSslCertDownloadLinkResponse> {
        const options = ParamCreater().listSslCertDownloadLink(listSslCertDownloadLinkRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询数据库磁盘类型。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询数据库磁盘类型
     * @param {'MySQL' | 'PostgreSQL' | 'SQLServer' | 'MariaDB'} databaseName 数据库引擎。支持的引擎如下，不区分大小写： MySQL PostgreSQL SQLServer
     * @param {string} versionName 数据库版本号。
     * @param {string} [xLanguage] 语言
     * @param {'ha' | 'single' | 'replica'} [haMode] 主备模式： single：单机模式。 ha：主备模式。 replica：只读模式。
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
     * 查询实例大版本升级历史信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @param {string} instanceId 实例ID
     * @param {number} [offset] 索引位置，偏移量。从第一条数据偏移offset条数据后开始查询，默认为0（偏移0条数据，表示从第一条数据开始查询），必须为数字，不能为负数。
     * @param {number} [limit] 查询记录数。默认为10，不能为负数，最小值为1，最大值为100。
     * @param {string} [order] 排序方式。 DESC，降序。 ASC，升序。 默认降序。
     * @param {string} [sortField] 排序字段。 start_time 开始时间。 end_time 结束时间。 默认开始时间。
     * @param {string} [xLanguage] 语言。默认en-us。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listUpgradeHistories(listUpgradeHistoriesRequest?: ListUpgradeHistoriesRequest): Promise<ListUpgradeHistoriesResponse> {
        const options = ParamCreater().listUpgradeHistories(listUpgradeHistoriesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询扩展日志文件列表。
     * 查询扩展日志文件列表，可以调用接口/v3/{project_id}/instances/{instance_id}/xellog-download 获取扩展日志下载链接
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询扩展日志文件列表
     * @param {string} instanceId 实例ID。
     * @param {string} [xLanguage] 语言
     * @param {number} [offset] 索引位置，偏移量。  从第一条数据偏移offset条数据后开始查询，默认为0（偏移0条数据，表示从第一条数据开始查询），必须为数字，不能为负数。
     * @param {number} [limit] 查询记录数。取值范围[1, 100]。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listXellogFiles(listXellogFilesRequest?: ListXellogFilesRequest): Promise<ListXellogFilesResponse> {
        const options = ParamCreater().listXellogFiles(listXellogFilesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 迁移主备实例的备机
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 迁移主备实例的备机
     * @param {string} instanceId 实例ID。
     * @param {FollowerMigrateRequest} migrateFollowerRequestBody 请求体。
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public migrateFollower(migrateFollowerRequest?: MigrateFollowerRequest): Promise<MigrateFollowerResponse> {
        const options = ParamCreater().migrateFollower(migrateFollowerRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改/新增pg_hba.conf文件的单个或多个配置，以priority做唯一标识，priority不存在的新增，存在的修改
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改pg_hba.conf文件的单个或多个配置
     * @param {string} instanceId 实例id
     * @param {Array<PostgresqlHbaConf>} [modifyPostgresqlHbaConfRequestBody] 修改参数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public modifyPostgresqlHbaConf(modifyPostgresqlHbaConfRequest?: ModifyPostgresqlHbaConfRequest): Promise<ModifyPostgresqlHbaConfResponse> {
        const options = ParamCreater().modifyPostgresqlHbaConf(modifyPostgresqlHbaConfRequest);

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
     * @param {ModifyMySqlProxyRouteModeRequest} modifyRDSforMySqlProxyRouteModeRequestBody 请求体。
     * @param {string} [contentType] 
     * @param {string} [xLanguage] 语言。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public modifyRdSforMySqlProxyRouteMode(modifyRdSforMySqlProxyRouteModeRequest?: ModifyRdSforMySqlProxyRouteModeRequest): Promise<ModifyRdSforMySqlProxyRouteModeResponse> {
        const options = ParamCreater().modifyRdSforMySqlProxyRouteMode(modifyRdSforMySqlProxyRouteModeRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 恢复到已有实例。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 恢复到已有实例
     * @param {RestoreExistingInstanceRequestBody} restoreExistingInstanceRequestBody 请求体。
     * @param {string} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public restoreExistInstance(restoreExistInstanceRequest?: RestoreExistInstanceRequest): Promise<RestoreExistInstanceResponse> {
        const options = ParamCreater().restoreExistInstance(restoreExistInstanceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 表级时间点恢复(MySQL)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 表级时间点恢复(MySQL)
     * @param {string} instanceId 实例ID。
     * @param {RestoreTablesRequestBody} restoreTablesRequest 请求体。
     * @param {string} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public restoreTables(restoreTablesRequest?: RestoreTablesRequest): Promise<RestoreTablesResponse> {
        const options = ParamCreater().restoreTables(restoreTablesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 表级时间点恢复(MySQL)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 表级时间点恢复(MySQL)
     * @param {string} instanceId 实例ID。
     * @param {RestoreTablesNewRequestBody} restoreTablesNewRequestBody 请求体。
     * @param {string} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public restoreTablesNew(restoreTablesNewRequest?: RestoreTablesNewRequest): Promise<RestoreTablesNewResponse> {
        const options = ParamCreater().restoreTablesNew(restoreTablesNewRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 恢复到已有实例。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 恢复到已有实例
     * @param {RestoreToExistingInstanceRequestBody} restoreToExistingInstanceRequest 请求体。
     * @param {string} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public restoreToExistingInstance(restoreToExistingInstanceRequest?: RestoreToExistingInstanceRequest): Promise<RestoreToExistingInstanceResponse> {
        const options = ParamCreater().restoreToExistingInstance(restoreToExistingInstanceRequest);

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
     * @param {string} instanceId 实例ID。
     * @param {SetAuditlogPolicyRequestBody} setAuditlogPolicyRequest 请求体。
     * @param {string} [xLanguage] 语言
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
     * 设置实例存储空间自动扩容策略，按扩容量扣除存储费用。
     * 可用存储空间小于设置值或者10GB时，自动扩容当前存储空间的15%（非10倍数向上取整，账户余额不足，会导致自动扩容失败）。
     * 设置只读实例自动扩容与主实例自动扩容互不影响，对只读实例设置自动扩容时，可选择大于或等于主实例的存储空间。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 设置自动扩容策略
     * @param {string} instanceId 实例ID。
     * @param {CustomerModifyAutoEnlargePolicyReq} customerModifyAutoEnlargePolicyReq 请求体
     * @param {string} [xLanguage] 语言
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
     * @param {SetBackupPolicyRequestBody} setBackupPolicyRequest 请求体。
     * @param {string} [xLanguage] 语言
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
     * 修改指定实例的binlog本地保留时长。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 设置binlog本地保留时长
     * @param {string} instanceId 实例ID。
     * @param {BinlogClearPolicyRequestBody} binlogClearPolicyRequest 请求体。
     * @param {string} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public setBinlogClearPolicy(setBinlogClearPolicyRequest?: SetBinlogClearPolicyRequest): Promise<SetBinlogClearPolicyResponse> {
        const options = ParamCreater().setBinlogClearPolicy(setBinlogClearPolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 重启数据库代理。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 重启数据库代理
     * @param {string} instanceId 实例ID，严格匹配UUID规则。
     * @param {string} proxyId 数据库代理ID，严格匹配UUID规则。
     * @param {string} [contentType] 
     * @param {string} [xLanguage] 语言。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public setInstancesProxyRestart(setInstancesProxyRestartRequest?: SetInstancesProxyRestartRequest): Promise<SetInstancesProxyRestartResponse> {
        const options = ParamCreater().setInstancesProxyRestart(setInstancesProxyRestartRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 关联LTS配置信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @param {'mysql' | 'postgresql' | 'sqlserver'} engine 引擎。
     * @param {AddLogConfigResponseBody} request 关联LTS日志请求体
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public setLogLtsConfigs(setLogLtsConfigsRequest?: SetLogLtsConfigsRequest): Promise<SetLogLtsConfigsResponse> {
        const options = ParamCreater().setLogLtsConfigs(setLogLtsConfigsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 设置跨区域备份策略。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 设置跨区域备份策略
     * @param {string} instanceId 实例ID。
     * @param {SetOffSiteBackupPolicyRequestBody} setOffSiteBackupPolicyRequest 请求体。
     * @param {string} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public setOffSiteBackupPolicy(setOffSiteBackupPolicyRequest?: SetOffSiteBackupPolicyRequest): Promise<SetOffSiteBackupPolicyResponse> {
        const options = ParamCreater().setOffSiteBackupPolicy(setOffSiteBackupPolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 设置实例秒级监控策略，约五分钟后生效，对于1秒监控和5秒监控，计费方式为按需付费（每小时扣费一次）。
     * 设置只读实例秒级监控与主实例互不影响。
     * 规格变更到4U以下的实例，秒级监控功能会自动关闭。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 设置秒级监控策略
     * @param {string} instanceId 实例ID。
     * @param {SecondMonitor} secondMonitorReq 请求体
     * @param {string} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public setSecondLevelMonitor(setSecondLevelMonitorRequest?: SetSecondLevelMonitorRequest): Promise<SetSecondLevelMonitorResponse> {
        const options = ParamCreater().setSecondLevelMonitor(setSecondLevelMonitorRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改安全组
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改安全组
     * @param {string} instanceId 实例ID。
     * @param {SecurityGroupRequest} securityGroupRequestBody 请求体。
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public setSecurityGroup(setSecurityGroupRequest?: SetSecurityGroupRequest): Promise<SetSecurityGroupResponse> {
        const options = ParamCreater().setSecurityGroup(setSecurityGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * V3慢日志敏感信息的开关
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 慢日志敏感信息的开关
     * @param {string} instanceId 实例ID，可以调用“查询实例列表”接口获取。如果未申请实例，可以调用“创建实例”接口创建。
     * @param {string} status 开启或关闭慢日志敏感信息明文，取值为on或off。
     * @param {string} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public setSensitiveSlowLog(setSensitiveSlowLogRequest?: SetSensitiveSlowLogRequest): Promise<SetSensitiveSlowLogResponse> {
        const options = ParamCreater().setSensitiveSlowLog(setSensitiveSlowLogRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 生成审计日志下载链接。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 生成审计日志下载链接
     * @param {string} instanceId 实例ID。
     * @param {GenerateAuditlogDownloadLinkRequest} generateAuditlogDownloadLinkRequest 请求体。
     * @param {string} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showAuditlogDownloadLink(showAuditlogDownloadLinkRequest?: ShowAuditlogDownloadLinkRequest): Promise<ShowAuditlogDownloadLinkResponse> {
        const options = ParamCreater().showAuditlogDownloadLink(showAuditlogDownloadLinkRequest);

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
     * @param {string} instanceId 实例ID。
     * @param {string} [xLanguage] 语言
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
     * 查询实例存储空间自动扩容策略
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询自动扩容策略
     * @param {string} instanceId 实例ID。
     * @param {string} [xLanguage] 语言
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
     * 查询实例可升级的目标版本
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @param {string} instanceId 实例ID
     * @param {string} [xLanguage] 语言。默认en-us。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showAvailableVersion(showAvailableVersionRequest?: ShowAvailableVersionRequest): Promise<ShowAvailableVersionResponse> {
        const options = ParamCreater().showAvailableVersion(showAvailableVersionRequest);

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
     * @param {string} instanceId 实例ID。
     * @param {string} [xLanguage] 语言
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
     * 查寻指定实例的binlog本地保留时长。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取binlog本地保留时长
     * @param {string} instanceId 实例ID。
     * @param {string} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showBinlogClearPolicy(showBinlogClearPolicyRequest?: ShowBinlogClearPolicyRequest): Promise<ShowBinlogClearPolicyResponse> {
        const options = ParamCreater().showBinlogClearPolicy(showBinlogClearPolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取指定参数模板的参数。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取指定参数模板的参数
     * @param {string} configId 参数模板ID。
     * @param {string} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showConfiguration(showConfigurationRequest?: ShowConfigurationRequest): Promise<ShowConfigurationResponse> {
        const options = ParamCreater().showConfiguration(showConfigurationRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询实例ipv6域名。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询实例ipv6域名。
     * @param {string} instanceId 实例ID。
     * @param {string} dnsType 实例域名类型，当前只支持\&quot;private\&quot;。
     * @param {string} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showDnsName(showDnsNameRequest?: ShowDnsNameRequest): Promise<ShowDnsNameResponse> {
        const options = ParamCreater().showDnsName(showDnsNameRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询实例ipv4域名
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @param {string} instanceId 实例ID。
     * @param {string} dnsType 实例域名类型，当前只支持private。
     * @param {string} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showDomainName(showDomainNameRequest?: ShowDomainNameRequest): Promise<ShowDomainNameResponse> {
        const options = ParamCreater().showDomainName(showDomainNameRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 建立跨云容灾关系后，查询主实例和灾备实例间的复制状态及延迟。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询跨云容灾复制状态
     * @param {string} instanceId 实例ID。
     * @param {string} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showDrReplicaStatus(showDrReplicaStatusRequest?: ShowDrReplicaStatusRequest): Promise<ShowDrReplicaStatusResponse> {
        const options = ParamCreater().showDrReplicaStatus(showDrReplicaStatusRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取增备策略
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取增备策略
     * @param {string} instanceId instance id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showIncreBackupPolicy1(showIncreBackupPolicy1Request?: ShowIncreBackupPolicy1Request): Promise<ShowIncreBackupPolicy1Response> {
        const options = ParamCreater().showIncreBackupPolicy1(showIncreBackupPolicy1Request);

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
     * 查询跨区域备份策略。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询跨区域备份策略
     * @param {string} instanceId 实例ID。
     * @param {string} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showOffSiteBackupPolicy(showOffSiteBackupPolicyRequest?: ShowOffSiteBackupPolicyRequest): Promise<ShowOffSiteBackupPolicyResponse> {
        const options = ParamCreater().showOffSiteBackupPolicy(showOffSiteBackupPolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询当前项目下资源配额情况。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询配额
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言
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
     * 查询回收站的回收策略。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询回收站的回收策略。
     * @param {string} [xLanguage] 语言
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
     * 获取实例的复制状态。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取实例的复制状态。
     * @param {string} instanceId 实例ID。
     * @param {string} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showReplicationStatus(showReplicationStatusRequest?: ShowReplicationStatusRequest): Promise<ShowReplicationStatusResponse> {
        const options = ParamCreater().showReplicationStatus(showReplicationStatusRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询实例秒级监控策略
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询秒级监控策略
     * @param {string} instanceId 实例ID。
     * @param {string} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showSecondLevelMonitoring(showSecondLevelMonitoringRequest?: ShowSecondLevelMonitoringRequest): Promise<ShowSecondLevelMonitoringResponse> {
        const options = ParamCreater().showSecondLevelMonitoring(showSecondLevelMonitoringRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询实例磁盘空间使用量。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询实例磁盘空间使用量
     * @param {string} instanceId 实例id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showStorageUsedSpace(showStorageUsedSpaceRequest?: ShowStorageUsedSpaceRequest): Promise<ShowStorageUsedSpaceResponse> {
        const options = ParamCreater().showStorageUsedSpace(showStorageUsedSpaceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据实例id查询sqlserver TDE状态
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 根据实例id查询sqlserver TDE状态
     * @param {string} instanceId 实例ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showTdeStatus(showTdeStatusRequest?: ShowTdeStatusRequest): Promise<ShowTdeStatusResponse> {
        const options = ParamCreater().showTdeStatus(showTdeStatusRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询大版本检查状态或升级状态。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @param {string} instanceId 实例ID
     * @param {string} action 要查询的状态 check：查询升级预检查的状态。 upgrade：查询大板本升级的状态。
     * @param {string} [xLanguage] 语言。默认en-us。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showUpgradeDbMajorVersionStatus(showUpgradeDbMajorVersionStatusRequest?: ShowUpgradeDbMajorVersionStatusRequest): Promise<ShowUpgradeDbMajorVersionStatusResponse> {
        const options = ParamCreater().showUpgradeDbMajorVersionStatus(showUpgradeDbMajorVersionStatusRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 手动倒换主备.
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 手动倒换主备
     * @param {string} instanceId 实例ID。
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言
     * @param {FailoverRequest} [failoverRequestBody] 默认为空不强制
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public startFailover(startFailoverRequest?: StartFailoverRequest): Promise<StartFailoverResponse> {
        const options = ParamCreater().startFailover(startFailoverRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 扩容数据库实例的磁盘空间。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 扩容数据库实例的磁盘空间
     * @param {string} instanceId 实例ID。
     * @param {EnlargeVolumeRequestBody} enlargeVolumeRequestBody 请求体。
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public startInstanceEnlargeVolumeAction(startInstanceEnlargeVolumeActionRequest?: StartInstanceEnlargeVolumeActionRequest): Promise<StartInstanceEnlargeVolumeActionResponse> {
        const options = ParamCreater().startInstanceEnlargeVolumeAction(startInstanceEnlargeVolumeActionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 数据库实例的磁盘空间缩容。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 数据库实例的磁盘空间缩容
     * @param {string} instanceId 实例ID。
     * @param {ReduceVolumeRequestBody} reduceVolumeRequestBody 请求体。
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public startInstanceReduceVolumeAction(startInstanceReduceVolumeActionRequest?: StartInstanceReduceVolumeActionRequest): Promise<StartInstanceReduceVolumeActionResponse> {
        const options = ParamCreater().startInstanceReduceVolumeAction(startInstanceReduceVolumeActionRequest);

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
     * @param {InstanceRestartRequsetBody} instanceRestartRequsetBody 请求体。
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public startInstanceRestartAction(startInstanceRestartActionRequest?: StartInstanceRestartActionRequest): Promise<StartInstanceRestartActionResponse> {
        const options = ParamCreater().startInstanceRestartAction(startInstanceRestartActionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 单机转主备实例。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 单机转主备实例
     * @param {string} instanceId 实例ID。
     * @param {Single2Ha} instanceSingleToHaRequestBody 请求体。
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public startInstanceSingleToHaAction(startInstanceSingleToHaActionRequest?: StartInstanceSingleToHaActionRequest): Promise<StartInstanceSingleToHaActionResponse> {
        const options = ParamCreater().startInstanceSingleToHaAction(startInstanceSingleToHaActionRequest);

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
     * @param {RecyclePolicyRequestBody} recyclePolicyRequest 请求体。
     * @param {string} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public startRecyclePolicy(startRecyclePolicyRequest?: StartRecyclePolicyRequest): Promise<StartRecyclePolicyResponse> {
        const options = ParamCreater().startRecyclePolicy(startRecyclePolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 变更数据库实例的规格。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 变更数据库实例的规格
     * @param {string} instanceId 实例ID。
     * @param {ResizeFlavorRequest} resizeFlavorRequestBody 请求体。
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public startResizeFlavorAction(startResizeFlavorActionRequest?: StartResizeFlavorActionRequest): Promise<StartResizeFlavorActionResponse> {
        const options = ParamCreater().startResizeFlavorAction(startResizeFlavorActionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 停止实例以节省费用，在停止数据库实例后，支持手动重新开启实例。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 开启实例
     * @param {string} instanceId 实例ID。
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public startupInstance(startupInstanceRequest?: StartupInstanceRequest): Promise<StartupInstanceResponse> {
        const options = ParamCreater().startupInstance(startupInstanceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 停止创建备份
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 停止备份
     * @param {string} instanceId 实例id
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
     * 实例进行关机，通过暂时停止按需实例以节省费用，实例默认停止七天。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 停止实例
     * @param {string} instanceId 实例ID。
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言
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
     * 开启/关闭/禁用所有SQL限流
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 开启/关闭/禁用所有SQL限流
     * @param {string} instanceId 实例ID
     * @param {SwitchSqlLimitControlReqV3} switchSqlLimitRequestBody 开启/关闭/禁用所有SQL限流请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public switchSqlLimit(switchSqlLimitRequest?: SwitchSqlLimitRequest): Promise<SwitchSqlLimitResponse> {
        const options = ParamCreater().switchSqlLimit(switchSqlLimitRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 设置SSL数据加密。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 设置SSL数据加密
     * @param {string} instanceId 实例ID。
     * @param {SslOptionRequest} sslOptionRequestBody 请求体。
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言
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
     * 解除节点只读状态接口
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 解除节点只读状态接口
     * @param {string} instanceId 实例id
     * @param {UnlockNodeReadonlyStatusRequestBody} unlockNodeReadonlyStatusRequestBody 解除只读请求体
     * @param {string} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public unlockNodeReadonlyStatus(unlockNodeReadonlyStatusRequest?: UnlockNodeReadonlyStatusRequest): Promise<UnlockNodeReadonlyStatusResponse> {
        const options = ParamCreater().unlockNodeReadonlyStatus(unlockNodeReadonlyStatusRequest);

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
     * @param {ConfigurationForUpdate} updateConfigurationRequestBody 请求体。
     * @param {string} [xLanguage] 语言
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
     * 修改内网地址
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改内网地址
     * @param {string} instanceId 实例ID。
     * @param {DataIpRequest} dataIpRequestBody 请求体。
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateDataIp(updateDataIpRequest?: UpdateDataIpRequest): Promise<UpdateDataIpResponse> {
        const options = ParamCreater().updateDataIp(updateDataIpRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改域名
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改域名
     * @param {string} instanceId 实例ID。
     * @param {ModifyDnsNameRequestBody} modifyDnsNameRequestBody 请求体。
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateDnsName(updateDnsNameRequest?: UpdateDnsNameRequest): Promise<UpdateDnsNameResponse> {
        const options = ParamCreater().updateDnsName(updateDnsNameRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改增备策略
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改增备策略
     * @param {string} instanceId instance id
     * @param {UpdateIncreBackupPolicy1RequestBody} updateIncreBackupPolicyRequestBody UpdateIncreBackupPolicyRequestBody
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateIncreBackupPolicy1(updateIncreBackupPolicy1Request?: UpdateIncreBackupPolicy1Request): Promise<UpdateIncreBackupPolicy1Response> {
        const options = ParamCreater().updateIncreBackupPolicy1(updateIncreBackupPolicy1Request);

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
     * 修改指定实例的参数。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改指定实例的参数
     * @param {string} instanceId 实例ID。
     * @param {UpdateInstanceConfigurationRequestBody} updateInstanceConfigurationRequestBody 请求体。
     * @param {string} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateInstanceConfigurationAsync(updateInstanceConfigurationAsyncRequest?: UpdateInstanceConfigurationAsyncRequest): Promise<UpdateInstanceConfigurationAsyncResponse> {
        const options = ParamCreater().updateInstanceConfigurationAsync(updateInstanceConfigurationAsyncRequest);

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
     * @param {string} instanceId 实例ID。
     * @param {ModifiyInstanceNameRequest} modifyInstanceNameRequestBody 请求体。
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言
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
     * 修改数据库端口
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改数据库端口
     * @param {string} instanceId 实例ID。
     * @param {UpdateDbPortRequest} updateDbPortRequestBody 请求体。
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updatePort(updatePortRequest?: UpdatePortRequest): Promise<UpdatePortResponse> {
        const options = ParamCreater().updatePort(updatePortRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改指定数据库实例的备注信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改实例备注信息
     * @param {string} instanceId 实例ID。
     * @param {UpdateRdsInstanceAliasRequest} updateRdsInstanceAliasRequest 请求体。
     * @param {string} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updatePostgresqlInstanceAlias(updatePostgresqlInstanceAliasRequest?: UpdatePostgresqlInstanceAliasRequest): Promise<UpdatePostgresqlInstanceAliasResponse> {
        const options = ParamCreater().updatePostgresqlInstanceAlias(updatePostgresqlInstanceAliasRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改SQL限流
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改SQL限流
     * @param {string} instanceId 实例ID
     * @param {UpdateSqlLimitRuleReqV3} updateSqlLimitRequestBody 修改Sql限流请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateSqlLimit(updateSqlLimitRequest?: UpdateSqlLimitRequest): Promise<UpdateSqlLimitResponse> {
        const options = ParamCreater().updateSqlLimit(updateSqlLimitRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * sqlserverTDE开关。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary sqlserverTDE开关
     * @param {string} instanceId 实例ID。
     * @param {UpdateTdeStatusRequestBody} [updateTdeStatusRequestBody] sqlserverTDE开关信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateTdeStatus(updateTdeStatusRequest?: UpdateTdeStatusRequest): Promise<UpdateTdeStatusResponse> {
        const options = ParamCreater().updateTdeStatus(updateTdeStatusRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * PostgreSQL数据库升级大版本。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @param {string} instanceId 实例ID
     * @param {UpgradePgMajorVersion} upgradePgMajorVersion 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public upgradeDbMajorVersion(upgradeDbMajorVersionRequest?: UpgradeDbMajorVersionRequest): Promise<UpgradeDbMajorVersionResponse> {
        const options = ParamCreater().upgradeDbMajorVersion(upgradeDbMajorVersionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 大版本升级前进行升级检查。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @param {string} instanceId 实例ID
     * @param {PostgresqlPreCheckUpgradeMajorVersionReq} targetVersion 
     * @param {string} [xLanguage] 语言。默认en-us。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public upgradeDbMajorVersionPreCheck(upgradeDbMajorVersionPreCheckRequest?: UpgradeDbMajorVersionPreCheckRequest): Promise<UpgradeDbMajorVersionPreCheckResponse> {
        const options = ParamCreater().upgradeDbMajorVersionPreCheck(upgradeDbMajorVersionPreCheckRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 对实例进行小版本升级。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 升级内核小版本
     * @param {string} instanceId 实例ID。
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言
     * @param {CustomerUpgradeDatabaseVersionReq} [customerUpgradeDatabaseVersionReqBody] 请求体。
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
     * 对实例进行小版本升级。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 升级内核小版本
     * @param {string} instanceId 实例ID。
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言
     * @param {CustomerUpgradeDatabaseVersionReqNew} [upgradeDbVersionNewRequestBody] 请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public upgradeDbVersionNew(upgradeDbVersionNewRequest?: UpgradeDbVersionNewRequest): Promise<UpgradeDbVersionNewResponse> {
        const options = ParamCreater().upgradeDbVersionNew(upgradeDbVersionNewRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询API版本列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询API版本列表
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
     * 查询API版本列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询API版本列表
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listApiVersionNew(listApiVersionNewRequest?: ListApiVersionNewRequest): Promise<ListApiVersionNewResponse> {
        const options = ParamCreater().listApiVersionNew();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定的API版本信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询指定的API版本信息
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

    /**
     * 授权数据库帐号。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 授权数据库帐号
     * @param {string} instanceId 实例ID。
     * @param {GrantRequest} grantRequest 请求体。
     * @param {string} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public allowDbUserPrivilege(allowDbUserPrivilegeRequest?: AllowDbUserPrivilegeRequest): Promise<AllowDbUserPrivilegeResponse> {
        const options = ParamCreater().allowDbUserPrivilege(allowDbUserPrivilegeRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建数据库。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建数据库
     * @param {string} instanceId 实例ID。
     * @param {DatabaseForCreation} createDatabaseRequest 请求体。
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
     * 在指定实例中创建数据库帐号。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建数据库用户
     * @param {string} instanceId 实例ID。
     * @param {UserForCreation} createDbUserRequest 请求体。
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
     * 删除数据库。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除数据库
     * @param {string} instanceId 实例ID。
     * @param {string} dbName 需要删除的数据库名。
     * @param {string} [xLanguage] 语言
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
     * 删除数据库用户。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除数据库用户
     * @param {string} instanceId 实例ID。
     * @param {string} userName 需要删除的帐号名。
     * @param {string} [xLanguage] 语言
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
     * 查询指定用户的已授权数据库。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询指定用户的已授权数据库
     * @param {string} instanceId 实例ID。
     * @param {string} userName 数据库用户名。
     * @param {number} page 分页页码，从1开始。
     * @param {number} limit 每页数据条数。取值范围[1, 100]。
     * @param {string} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAuthorizedDatabases(listAuthorizedDatabasesRequest?: ListAuthorizedDatabasesRequest): Promise<ListAuthorizedDatabasesResponse> {
        const options = ParamCreater().listAuthorizedDatabases(listAuthorizedDatabasesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定数据库的已授权用户。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询指定数据库的已授权用户
     * @param {string} instanceId 实例ID。
     * @param {string} dbName 数据库名。
     * @param {number} page 分页页码，从1开始。
     * @param {number} limit 每页数据条数。取值范围[1, 100]。
     * @param {string} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAuthorizedDbUsers(listAuthorizedDbUsersRequest?: ListAuthorizedDbUsersRequest): Promise<ListAuthorizedDbUsersResponse> {
        const options = ParamCreater().listAuthorizedDbUsers(listAuthorizedDbUsersRequest);

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
     * @param {string} instanceId 实例ID。
     * @param {number} page 分页页码，从1开始。
     * @param {number} limit 每页数据条数。取值范围[1, 100]。
     * @param {string} [xLanguage] 语言
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
     * 查询数据库用户列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询数据库用户列表
     * @param {string} instanceId 实例ID。
     * @param {number} page 分页页码，从1开始。
     * @param {number} limit 每页数据条数。取值范围[1, 100]。
     * @param {string} [xLanguage] 语言
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
     * 重置数据库密码.
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 重置数据库密码
     * @param {string} instanceId 实例ID。
     * @param {PwdResetRequest} pwdResetRequestBody 请求体。
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言
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
     * 解除数据库帐号权限。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 解除数据库帐号权限
     * @param {string} instanceId 实例ID。
     * @param {RevokeRequestBody} revokeRequestBody 请求体。
     * @param {string} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public revoke(revokeRequest?: RevokeRequest): Promise<RevokeResponse> {
        const options = ParamCreater().revoke(revokeRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 设置数据库账号密码
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 设置数据库账号密码
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
     * 根据业务需求，设置数据库用户只读
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 设置数据库用户只读参数
     * @param {string} instanceId 实例ID。
     * @param {MysqlReadOnlySwitch} mysqlReadOnlySwitch 请求体。
     * @param {string} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public setReadOnlySwitch(setReadOnlySwitchRequest?: SetReadOnlySwitchRequest): Promise<SetReadOnlySwitchResponse> {
        const options = ParamCreater().setReadOnlySwitch(setReadOnlySwitchRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改指定实例中的数据库备注。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改指定实例的数据库备注
     * @param {string} instanceId 实例ID。
     * @param {UpdateDatabaseReq} updateDatabaseReq 请求体。
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateDatabase(updateDatabaseRequest?: UpdateDatabaseRequest): Promise<UpdateDatabaseResponse> {
        const options = ParamCreater().updateDatabase(updateDatabaseRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改数据库用户名备注
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改数据库用户名备注
     * @param {string} instanceId 实例ID。
     * @param {string} userName 数据库用户名。
     * @param {UpdateDbUserReq} updateDbUserReq 请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateDbUserComment(updateDbUserCommentRequest?: UpdateDbUserCommentRequest): Promise<UpdateDbUserCommentResponse> {
        const options = ParamCreater().updateDbUserComment(updateDbUserCommentRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改实例下用户host信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改实例下用户host信息
     * @param {string} instanceId 实例id
     * @param {SetHostPrivilegeRequestV3} updateHostPrivilegeRequestBody 需要修改的host信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateHostPrivilege(updateHostPrivilegeRequest?: UpdateHostPrivilegeRequest): Promise<UpdateHostPrivilegeResponse> {
        const options = ParamCreater().updateHostPrivilege(updateHostPrivilegeRequest);

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
     * @param {PostgresqlGrantRequest} grantRequest 请求体。
     * @param {string} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public allowDbPrivilege(allowDbPrivilegeRequest?: AllowDbPrivilegeRequest): Promise<AllowDbPrivilegeResponse> {
        const options = ParamCreater().allowDbPrivilege(allowDbPrivilegeRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 数据库代理实例进行规格变更。
     * 
     * - 调用接口前，您需要了解API 认证鉴权。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 数据库代理规格变更
     * @param {string} instanceId 实例ID。
     * @param {ScaleProxyRequestBody} scaleProxyRequestBody 请求体。
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public changeProxyScale(changeProxyScaleRequest?: ChangeProxyScaleRequest): Promise<ChangeProxyScaleResponse> {
        const options = ParamCreater().changeProxyScale(changeProxyScaleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改指定实例的读写分离延时阈值。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改读写分离阈值
     * @param {string} instanceId 实例ID。
     * @param {ChangingTheDelayThresholdRequestBody} changingTheDelayThresholdRequestBody 请求体。
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public changeTheDelayThreshold(changeTheDelayThresholdRequest?: ChangeTheDelayThresholdRequest): Promise<ChangeTheDelayThresholdResponse> {
        const options = ParamCreater().changeTheDelayThreshold(changeTheDelayThresholdRequest);

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
     * @param {PostgresqlDatabaseForCreation} createDatabaseRequest 请求体。
     * @param {string} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createPostgresqlDatabase(createPostgresqlDatabaseRequest?: CreatePostgresqlDatabaseRequest): Promise<CreatePostgresqlDatabaseResponse> {
        const options = ParamCreater().createPostgresqlDatabase(createPostgresqlDatabaseRequest);

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
     * @param {PostgresqlDatabaseSchemaReq} dbSchemaReq 请求体。
     * @param {string} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createPostgresqlDatabaseSchema(createPostgresqlDatabaseSchemaRequest?: CreatePostgresqlDatabaseSchemaRequest): Promise<CreatePostgresqlDatabaseSchemaResponse> {
        const options = ParamCreater().createPostgresqlDatabaseSchema(createPostgresqlDatabaseSchemaRequest);

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
     * @param {PostgresqlUserForCreation} createDbUserRequest 请求体。
     * @param {string} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createPostgresqlDbUser(createPostgresqlDbUserRequest?: CreatePostgresqlDbUserRequest): Promise<CreatePostgresqlDbUserResponse> {
        const options = ParamCreater().createPostgresqlDbUser(createPostgresqlDbUserRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 在指定数据库上创建插件。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建插件
     * @param {string} instanceId 实例ID。
     * @param {ExtensionRequest} dropExtensionRequest 
     * @param {string} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createPostgresqlExtension(createPostgresqlExtensionRequest?: CreatePostgresqlExtensionRequest): Promise<CreatePostgresqlExtensionResponse> {
        const options = ParamCreater().createPostgresqlExtension(createPostgresqlExtensionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除数据库。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除数据库
     * @param {string} instanceId 实例ID。
     * @param {string} dbName 需要删除的数据库名。
     * @param {string} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deletePostgresqlDatabase(deletePostgresqlDatabaseRequest?: DeletePostgresqlDatabaseRequest): Promise<DeletePostgresqlDatabaseResponse> {
        const options = ParamCreater().deletePostgresqlDatabase(deletePostgresqlDatabaseRequest);

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
     * @param {string} instanceId 实例ID。
     * @param {string} userName 需要删除的帐号名。
     * @param {string} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deletePostgresqlDbUser(deletePostgresqlDbUserRequest?: DeletePostgresqlDbUserRequest): Promise<DeletePostgresqlDbUserResponse> {
        const options = ParamCreater().deletePostgresqlDbUser(deletePostgresqlDbUserRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 在指定数据库上删除插件。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除插件
     * @param {string} instanceId 实例ID。
     * @param {ExtensionRequest} createExtensionRequest 
     * @param {string} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deletePostgresqlExtension(deletePostgresqlExtensionRequest?: DeletePostgresqlExtensionRequest): Promise<DeletePostgresqlExtensionResponse> {
        const options = ParamCreater().deletePostgresqlExtension(deletePostgresqlExtensionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 授予用户角色
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 授予用户角色
     * @param {string} instanceId 实例ID
     * @param {DatabaseUserRoleRequest} [executePrivilegeDatabaseUserRoleRequestBody] 请求信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public executePrivilegeDatabaseUserRole(executePrivilegeDatabaseUserRoleRequest?: ExecutePrivilegeDatabaseUserRoleRequest): Promise<ExecutePrivilegeDatabaseUserRoleResponse> {
        const options = ParamCreater().executePrivilegeDatabaseUserRole(executePrivilegeDatabaseUserRoleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 撤回用户角色
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 撤回用户角色
     * @param {string} instanceId 实例ID
     * @param {DatabaseUserRoleRequest} [executeRevokeDatabaseUserRoleRequestBody] 请求信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public executeRevokeDatabaseUserRole(executeRevokeDatabaseUserRoleRequest?: ExecuteRevokeDatabaseUserRoleRequest): Promise<ExecuteRevokeDatabaseUserRoleResponse> {
        const options = ParamCreater().executeRevokeDatabaseUserRole(executeRevokeDatabaseUserRoleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询数据库角色信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询数据库角色信息
     * @param {string} instanceId 实例ID
     * @param {string} [userName] 用户名，有值时返回该账号可以授权的角色集合
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listDatabaseUserRole(listDatabaseUserRoleRequest?: ListDatabaseUserRoleRequest): Promise<ListDatabaseUserRoleResponse> {
        const options = ParamCreater().listDatabaseUserRole(listDatabaseUserRoleRequest);

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
     * @param {number} page 分页页码，从1开始。
     * @param {number} limit 每页数据条数。取值范围[1, 100]。
     * @param {string} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listPostgresqlDatabaseSchemas(listPostgresqlDatabaseSchemasRequest?: ListPostgresqlDatabaseSchemasRequest): Promise<ListPostgresqlDatabaseSchemasResponse> {
        const options = ParamCreater().listPostgresqlDatabaseSchemas(listPostgresqlDatabaseSchemasRequest);

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
     * @param {number} page 分页页码，从1开始。
     * @param {number} limit 每页数据条数。取值范围[1, 100]。
     * @param {string} [xLanguage] 语言
     * @param {string} [db] 数据库名称；忽略大小写模糊查询。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listPostgresqlDatabases(listPostgresqlDatabasesRequest?: ListPostgresqlDatabasesRequest): Promise<ListPostgresqlDatabasesResponse> {
        const options = ParamCreater().listPostgresqlDatabases(listPostgresqlDatabasesRequest);

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
     * @param {number} page 分页页码，从1开始。
     * @param {number} limit 每页数据条数。取值范围[1, 100]。
     * @param {string} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listPostgresqlDbUserPaginated(listPostgresqlDbUserPaginatedRequest?: ListPostgresqlDbUserPaginatedRequest): Promise<ListPostgresqlDbUserPaginatedResponse> {
        const options = ParamCreater().listPostgresqlDbUserPaginated(listPostgresqlDbUserPaginatedRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取指定数据库的插件信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询插件
     * @param {string} instanceId 实例ID。
     * @param {string} databaseName 数据库名称。
     * @param {string} [xLanguage] 语言
     * @param {number} [offset] 索引位置，偏移量。从第一条数据偏移offset条数据后开始查询，默认为0（偏移0条数据，表示从第一条数据开始查询），必须为数字，不能为负数。
     * @param {number} [limit] 查询记录数。默认为100，不能为负数，最小值为1，最大值为100。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listPostgresqlExtension(listPostgresqlExtensionRequest?: ListPostgresqlExtensionRequest): Promise<ListPostgresqlExtensionResponse> {
        const options = ParamCreater().listPostgresqlExtension(listPostgresqlExtensionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 解除数据库帐号权限
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 解除数据库帐号权限
     * @param {string} instanceId 实例ID
     * @param {RevokePostgresqlDbPrivilegeRequestBody} revokePostgresqlDbPrivilegeRequest 请求信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public revokePostgresqlDbPrivilege(revokePostgresqlDbPrivilegeRequest?: RevokePostgresqlDbPrivilegeRequest): Promise<RevokePostgresqlDbPrivilegeResponse> {
        const options = ParamCreater().revokePostgresqlDbPrivilege(revokePostgresqlDbPrivilegeRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询数据库代理可变更的规格信息。
     * 
     * - 调用接口前，您需要了解API 认证鉴权。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询数据库代理可变更的规格
     * @param {string} instanceId 实例ID。
     * @param {string} [xLanguage] 语言
     * @param {number} [offset] 索引位置，偏移量。从第一条数据偏移offset条数据后开始查询，默认为0（偏移0条数据，表示从第一条数据开始查询），必须为数字，不能为负数。
     * @param {number} [limit] 查询记录数。默认为100，不能为负数，最小值为1，最大值为100。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public searchQueryScaleComputeFlavors(searchQueryScaleComputeFlavorsRequest?: SearchQueryScaleComputeFlavorsRequest): Promise<SearchQueryScaleComputeFlavorsResponse> {
        const options = ParamCreater().searchQueryScaleComputeFlavors(searchQueryScaleComputeFlavorsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询数据库代理可变更的规格信息。
     * 
     * - 调用接口前，您需要了解API 认证鉴权。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询数据库代理可变更的规格
     * @param {string} instanceId 实例ID。
     * @param {string} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public searchQueryScaleFlavors(searchQueryScaleFlavorsRequest?: SearchQueryScaleFlavorsRequest): Promise<SearchQueryScaleFlavorsResponse> {
        const options = ParamCreater().searchQueryScaleFlavors(searchQueryScaleFlavorsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 设置数据库用户权限：只读或可读写。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 设置数据库用户权限
     * @param {string} instanceId 实例ID
     * @param {SetDatabaseUserPrivilegeReqV3} setDatabaseUserPrivilegeReqV3 
     * @param {string} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public setDatabaseUserPrivilege(setDatabaseUserPrivilegeRequest?: SetDatabaseUserPrivilegeRequest): Promise<SetDatabaseUserPrivilegeResponse> {
        const options = ParamCreater().setDatabaseUserPrivilege(setDatabaseUserPrivilegeRequest);

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
    public setPostgresqlDbUserPwd(setPostgresqlDbUserPwdRequest?: SetPostgresqlDbUserPwdRequest): Promise<SetPostgresqlDbUserPwdResponse> {
        const options = ParamCreater().setPostgresqlDbUserPwd(setPostgresqlDbUserPwdRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定实例的数据库代理详细信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询数据库代理信息
     * @param {string} instanceId 实例ID。
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showInformationAboutDatabaseProxy(showInformationAboutDatabaseProxyRequest?: ShowInformationAboutDatabaseProxyRequest): Promise<ShowInformationAboutDatabaseProxyResponse> {
        const options = ParamCreater().showInformationAboutDatabaseProxy(showInformationAboutDatabaseProxyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取实例指定参数的值。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取实例指定参数的值
     * @param {string} instanceId 实例ID。
     * @param {string} name 参数名称。
     * @param {string} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showPostgresqlParamValue(showPostgresqlParamValueRequest?: ShowPostgresqlParamValueRequest): Promise<ShowPostgresqlParamValueResponse> {
        const options = ParamCreater().showPostgresqlParamValue(showPostgresqlParamValueRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取wal日志延迟回放状态
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取wal日志延迟回放状态
     * @param {string} instanceId 实例id
     * @param {string} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showReplayDelayStatus(showReplayDelayStatusRequest?: ShowReplayDelayStatusRequest): Promise<ShowReplayDelayStatusResponse> {
        const options = ParamCreater().showReplayDelayStatus(showReplayDelayStatusRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 为指定实例开启数据库代理。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 开启数据库代理
     * @param {string} instanceId 实例ID。
     * @param {OpenProxyRequest} openProxyRequest 请求体。
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public startDatabaseProxy(startDatabaseProxyRequest?: StartDatabaseProxyRequest): Promise<StartDatabaseProxyResponse> {
        const options = ParamCreater().startDatabaseProxy(startDatabaseProxyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 为指定实例关闭数据库代理。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 关闭数据库代理
     * @param {string} instanceId 实例ID。
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public stopDatabaseProxy(stopDatabaseProxyRequest?: StopDatabaseProxyRequest): Promise<StopDatabaseProxyResponse> {
        const options = ParamCreater().stopDatabaseProxy(stopDatabaseProxyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 中止/恢复wal日志回放
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 中止/恢复wal日志回放
     * @param {string} instanceId 实例id
     * @param {string} xLanguage 语言
     * @param {SwitchLogReplayRequestBody} switchLogReplayRequestBody 中止/恢复wal日志回放请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public switchLogReplay(switchLogReplayRequest?: SwitchLogReplayRequest): Promise<SwitchLogReplayResponse> {
        const options = ParamCreater().switchLogReplay(switchLogReplayRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改数据库owner
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改数据库owner
     * @param {string} instanceId 实例ID
     * @param {UpdateDatabaseOwnerRequestBody} [updateDatabaseOwnerRequestBody] 请求参数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateDatabaseOwner(updateDatabaseOwnerRequest?: UpdateDatabaseOwnerRequest): Promise<UpdateDatabaseOwnerResponse> {
        const options = ParamCreater().updateDatabaseOwner(updateDatabaseOwnerRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 数据库帐号授权。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @param {string} instanceId 实例ID。
     * @param {DbUserPrivilegeRequest} dbUserPrivilegeRequest 授权请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateDbUserPrivilege(updateDbUserPrivilegeRequest?: UpdateDbUserPrivilegeRequest): Promise<UpdateDbUserPrivilegeResponse> {
        const options = ParamCreater().updateDbUserPrivilege(updateDbUserPrivilegeRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改指定实例中的数据库备注。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改指定实例的数据库备注
     * @param {string} instanceId 实例ID。
     * @param {UpdateDatabaseReq} updateDatabaseReq 请求体。
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updatePostgresqlDatabase(updatePostgresqlDatabaseRequest?: UpdatePostgresqlDatabaseRequest): Promise<UpdatePostgresqlDatabaseResponse> {
        const options = ParamCreater().updatePostgresqlDatabase(updatePostgresqlDatabaseRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改数据库用户名备注
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改数据库用户名备注
     * @param {string} instanceId 实例ID。
     * @param {string} userName 数据库用户名。
     * @param {UpdateDbUserReq} updateDbUserReq 请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updatePostgresqlDbUserComment(updatePostgresqlDbUserCommentRequest?: UpdatePostgresqlDbUserCommentRequest): Promise<UpdatePostgresqlDbUserCommentResponse> {
        const options = ParamCreater().updatePostgresqlDbUserComment(updatePostgresqlDbUserCommentRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 在指定数据库上更新插件。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新插件
     * @param {string} instanceId 实例ID。
     * @param {ExtensionRequest} updatePostgresqlExtensionRequestBody 更新插件入参
     * @param {string} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updatePostgresqlExtension(updatePostgresqlExtensionRequest?: UpdatePostgresqlExtensionRequest): Promise<UpdatePostgresqlExtensionResponse> {
        const options = ParamCreater().updatePostgresqlExtension(updatePostgresqlExtensionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改实例指定参数的值。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改实例指定参数的值
     * @param {string} instanceId 实例ID。
     * @param {string} name 参数名称。
     * @param {ModifyParamRequest} modifyParamRequest 
     * @param {string} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updatePostgresqlParameterValue(updatePostgresqlParameterValueRequest?: UpdatePostgresqlParameterValueRequest): Promise<UpdatePostgresqlParameterValueResponse> {
        const options = ParamCreater().updatePostgresqlParameterValue(updatePostgresqlParameterValueRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改指定实例的读写分离权重。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改读写分离权重
     * @param {string} instanceId 实例ID。
     * @param {ModifyProxyWeightRequest} modifyProxyWeightRequest 请求体。
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateReadWeight(updateReadWeightRequest?: UpdateReadWeightRequest): Promise<UpdateReadWeightResponse> {
        const options = ParamCreater().updateReadWeight(updateReadWeightRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 授权数据库帐号。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 授权数据库帐号
     * @param {string} instanceId 实例ID。
     * @param {SqlserverGrantRequest} grantRequest 请求体。
     * @param {string} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public allowSqlserverDbUserPrivilege(allowSqlserverDbUserPrivilegeRequest?: AllowSqlserverDbUserPrivilegeRequest): Promise<AllowSqlserverDbUserPrivilegeResponse> {
        const options = ParamCreater().allowSqlserverDbUserPrivilege(allowSqlserverDbUserPrivilegeRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 添加MSDTC相关主机host地址
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 添加MSDTC
     * @param {string} instanceId 实例ID
     * @param {AddMsdtcRequestBody} addMsdtc 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchAddMsdtcs(batchAddMsdtcsRequest?: BatchAddMsdtcsRequest): Promise<BatchAddMsdtcsResponse> {
        const options = ParamCreater().batchAddMsdtcs(batchAddMsdtcsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建数据库。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建数据库
     * @param {string} instanceId 实例ID。
     * @param {SqlserverDatabaseForCreation} createDatabaseRequest 请求体。
     * @param {string} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createSqlserverDatabase(createSqlserverDatabaseRequest?: CreateSqlserverDatabaseRequest): Promise<CreateSqlserverDatabaseResponse> {
        const options = ParamCreater().createSqlserverDatabase(createSqlserverDatabaseRequest);

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
     * @param {string} instanceId 实例ID。
     * @param {SqlserverUserForCreation} createDbUserRequest 请求体。
     * @param {string} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createSqlserverDbUser(createSqlserverDbUserRequest?: CreateSqlserverDbUserRequest): Promise<CreateSqlserverDbUserResponse> {
        const options = ParamCreater().createSqlserverDbUser(createSqlserverDbUserRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除数据库。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除数据库
     * @param {string} instanceId 实例ID。
     * @param {string} dbName 需要删除的数据库名。
     * @param {string} [xLanguage] 语言
     * @param {DropDatabaseV3Req} [dropDatabaseV3Req] 请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteSqlserverDatabase(deleteSqlserverDatabaseRequest?: DeleteSqlserverDatabaseRequest): Promise<DeleteSqlserverDatabaseResponse> {
        const options = ParamCreater().deleteSqlserverDatabase(deleteSqlserverDatabaseRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除数据库。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除数据库
     * @param {string} instanceId 实例ID。
     * @param {string} dbName 需要删除的数据库名。
     * @param {string} [xLanguage] 语言
     * @param {DropDatabaseV3Req} [dropDatabaseV3Req] 请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteSqlserverDatabaseEx(deleteSqlserverDatabaseExRequest?: DeleteSqlserverDatabaseExRequest): Promise<DeleteSqlserverDatabaseExResponse> {
        const options = ParamCreater().deleteSqlserverDatabaseEx(deleteSqlserverDatabaseExRequest);

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
     * @param {string} instanceId 实例ID。
     * @param {string} userName 需要删除的帐号名。
     * @param {string} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteSqlserverDbUser(deleteSqlserverDbUserRequest?: DeleteSqlserverDbUserRequest): Promise<DeleteSqlserverDbUserResponse> {
        const options = ParamCreater().deleteSqlserverDbUser(deleteSqlserverDbUserRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定数据库的已授权用户。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询指定数据库的已授权用户
     * @param {string} instanceId 实例ID。
     * @param {string} dbName 数据库名。
     * @param {number} page 分页页码，从1开始。
     * @param {number} limit 每页数据条数。取值范围[1, 100]。
     * @param {string} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAuthorizedSqlserverDbUsers(listAuthorizedSqlserverDbUsersRequest?: ListAuthorizedSqlserverDbUsersRequest): Promise<ListAuthorizedSqlserverDbUsersResponse> {
        const options = ParamCreater().listAuthorizedSqlserverDbUsers(listAuthorizedSqlserverDbUsersRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询MSDTC的hosts信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询MSDTC的hosts信息
     * @param {string} instanceId 实例ID
     * @param {number} [offset] 分页参数 最小为0
     * @param {number} [limit] 分页参数  取值范围为 1-100
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listMsdtcHosts(listMsdtcHostsRequest?: ListMsdtcHostsRequest): Promise<ListMsdtcHostsResponse> {
        const options = ParamCreater().listMsdtcHosts(listMsdtcHostsRequest);

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
     * @param {string} instanceId 实例ID。
     * @param {number} page 分页页码，从1开始。
     * @param {number} limit 每页数据条数。取值范围[1, 100]。
     * @param {string} [xLanguage] 语言
     * @param {string} [dbName] 数据库名。当指定该参数时，page和limit参数需要传入但不生效。
     * @param {string} [recoverModel] 数据库恢复健康模式，取值：FULL  ：完整模式，SIMPLE  ：简单模式，BUlK_LOGGED ：大容量日志恢复模式（该参数仅用于SQL server引擎）
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listSqlserverDatabases(listSqlserverDatabasesRequest?: ListSqlserverDatabasesRequest): Promise<ListSqlserverDatabasesResponse> {
        const options = ParamCreater().listSqlserverDatabases(listSqlserverDatabasesRequest);

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
     * @param {string} instanceId 实例ID。
     * @param {number} page 分页页码，从1开始。
     * @param {number} limit 每页数据条数。取值范围[1, 100]。
     * @param {string} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listSqlserverDbUsers(listSqlserverDbUsersRequest?: ListSqlserverDbUsersRequest): Promise<ListSqlserverDbUsersResponse> {
        const options = ParamCreater().listSqlserverDbUsers(listSqlserverDbUsersRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改实例字符集。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改实例字符集
     * @param {string} instanceId 实例ID。
     * @param {ModifyCollationRequestBody} modifyCollationRequestBody 修改实例字符集请求体。
     * @param {string} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public modifyCollation(modifyCollationRequest?: ModifyCollationRequest): Promise<ModifyCollationResponse> {
        const options = ParamCreater().modifyCollation(modifyCollationRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 解除数据库帐号权限。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 解除数据库帐号权限
     * @param {string} instanceId 实例ID。
     * @param {SqlserverRevokeRequest} sqlserverRevokeRequest 请求体。
     * @param {string} [xLanguage] 语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public revokeSqlserverDbUserPrivilege(revokeSqlserverDbUserPrivilegeRequest?: RevokeSqlserverDbUserPrivilegeRequest): Promise<RevokeSqlserverDbUserPrivilegeResponse> {
        const options = ParamCreater().revokeSqlserverDbUserPrivilege(revokeSqlserverDbUserPrivilegeRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 收缩数据库日志
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 收缩数据库日志
     * @param {string} instanceId 实例ID
     * @param {UpdateDBShrinkRequestBody} updateDBShrinkRequestBody 收缩数据库
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public setInstancesDbShrink(setInstancesDbShrinkRequest?: SetInstancesDbShrinkRequest): Promise<SetInstancesDbShrinkResponse> {
        const options = ParamCreater().setInstancesDbShrink(setInstancesDbShrinkRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 收缩数据库日志
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 收缩数据库日志
     * @param {string} instanceId 实例ID
     * @param {UpdateDBShrinkRequestBody} updateDBShrinkRequestBody 收缩数据库
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public setInstancesNewDbShrink(setInstancesNewDbShrinkRequest?: SetInstancesNewDbShrinkRequest): Promise<SetInstancesNewDbShrinkResponse> {
        const options = ParamCreater().setInstancesNewDbShrink(setInstancesNewDbShrinkRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * 以传入配置全量覆盖当前pg_hba.conf文件内容，入参为空时用默认配置覆盖当前文件内容
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        addPostgresqlHbaConf(addPostgresqlHbaConfRequest?: AddPostgresqlHbaConfRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/{instance_id}/hba-info",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (addPostgresqlHbaConfRequest !== null && addPostgresqlHbaConfRequest !== undefined) {
                if (addPostgresqlHbaConfRequest instanceof AddPostgresqlHbaConfRequest) {
                    instanceId = addPostgresqlHbaConfRequest.instanceId;
                    body = addPostgresqlHbaConfRequest.body
                } else {
                    instanceId = addPostgresqlHbaConfRequest['instance_id'];
                    body = addPostgresqlHbaConfRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling addPostgresqlHbaConf.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 应用参数模板。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        applyConfigurationAsync(applyConfigurationAsyncRequest?: ApplyConfigurationAsyncRequest) {
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
            
            let xLanguage;

            if (applyConfigurationAsyncRequest !== null && applyConfigurationAsyncRequest !== undefined) {
                if (applyConfigurationAsyncRequest instanceof ApplyConfigurationAsyncRequest) {
                    configId = applyConfigurationAsyncRequest.configId;
                    body = applyConfigurationAsyncRequest.body
                    xLanguage = applyConfigurationAsyncRequest.xLanguage;
                } else {
                    configId = applyConfigurationAsyncRequest['config_id'];
                    body = applyConfigurationAsyncRequest['body'];
                    xLanguage = applyConfigurationAsyncRequest['X-Language'];
                }
            }

        
            if (configId === null || configId === undefined) {
            throw new RequiredError('configId','Required parameter configId was null or undefined when calling applyConfigurationAsync.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'config_id': configId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 绑定和解绑弹性公网IP。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        attachEip(attachEipRequest?: AttachEipRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/instances/{instance_id}/public-ip",
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

            if (attachEipRequest !== null && attachEipRequest !== undefined) {
                if (attachEipRequest instanceof AttachEipRequest) {
                    instanceId = attachEipRequest.instanceId;
                    body = attachEipRequest.body
                    xLanguage = attachEipRequest.xLanguage;
                } else {
                    instanceId = attachEipRequest['instance_id'];
                    body = attachEipRequest['body'];
                    xLanguage = attachEipRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling attachEip.');
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
         * 批量删除手动备份。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchDeleteManualBackup(batchDeleteManualBackupRequest?: BatchDeleteManualBackupRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/backups/batch-delete",
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
         * 库级时间点恢复
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchRestoreDatabase(batchRestoreDatabaseRequest?: BatchRestoreDatabaseRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/batch/restore/databases",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (batchRestoreDatabaseRequest !== null && batchRestoreDatabaseRequest !== undefined) {
                if (batchRestoreDatabaseRequest instanceof BatchRestoreDatabaseRequest) {
                    body = batchRestoreDatabaseRequest.body
                } else {
                    body = batchRestoreDatabaseRequest['body'];
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
         * 表级时间点恢复（PostgreSQL）
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchRestorePostgreSqlTables(batchRestorePostgreSqlTablesRequest?: BatchRestorePostgreSqlTablesRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/batch/restore/tables",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (batchRestorePostgreSqlTablesRequest !== null && batchRestorePostgreSqlTablesRequest !== undefined) {
                if (batchRestorePostgreSqlTablesRequest instanceof BatchRestorePostgreSqlTablesRequest) {
                    body = batchRestorePostgreSqlTablesRequest.body
                } else {
                    body = batchRestorePostgreSqlTablesRequest['body'];
                }
            }

        
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 批量停止实例
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchStopInstance(batchStopInstanceRequest?: BatchStopInstanceRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/batch/action/shutdown",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (batchStopInstanceRequest !== null && batchStopInstanceRequest !== undefined) {
                if (batchStopInstanceRequest instanceof BatchStopInstanceRequest) {
                    body = batchStopInstanceRequest.body
                } else {
                    body = batchStopInstanceRequest['body'];
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
         * 批量添加标签。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchTagAddAction(batchTagAddActionRequest?: BatchTagAddActionRequest) {
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
            
            let xLanguage;

            if (batchTagAddActionRequest !== null && batchTagAddActionRequest !== undefined) {
                if (batchTagAddActionRequest instanceof BatchTagAddActionRequest) {
                    instanceId = batchTagAddActionRequest.instanceId;
                    body = batchTagAddActionRequest.body
                    xLanguage = batchTagAddActionRequest.xLanguage;
                } else {
                    instanceId = batchTagAddActionRequest['instance_id'];
                    body = batchTagAddActionRequest['body'];
                    xLanguage = batchTagAddActionRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling batchTagAddAction.');
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
         * 批量删除标签。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchTagDelAction(batchTagDelActionRequest?: BatchTagDelActionRequest) {
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
            
            let xLanguage;

            if (batchTagDelActionRequest !== null && batchTagDelActionRequest !== undefined) {
                if (batchTagDelActionRequest instanceof BatchTagDelActionRequest) {
                    instanceId = batchTagDelActionRequest.instanceId;
                    body = batchTagDelActionRequest.body
                    xLanguage = batchTagDelActionRequest.xLanguage;
                } else {
                    instanceId = batchTagDelActionRequest['instance_id'];
                    body = batchTagDelActionRequest['body'];
                    xLanguage = batchTagDelActionRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling batchTagDelAction.');
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
         * 更改主备实例的数据同步方式。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        changeFailoverMode(changeFailoverModeRequest?: ChangeFailoverModeRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/instances/{instance_id}/failover/mode",
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

            if (changeFailoverModeRequest !== null && changeFailoverModeRequest !== undefined) {
                if (changeFailoverModeRequest instanceof ChangeFailoverModeRequest) {
                    instanceId = changeFailoverModeRequest.instanceId;
                    body = changeFailoverModeRequest.body
                    xLanguage = changeFailoverModeRequest.xLanguage;
                } else {
                    instanceId = changeFailoverModeRequest['instance_id'];
                    body = changeFailoverModeRequest['body'];
                    xLanguage = changeFailoverModeRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling changeFailoverMode.');
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
         * 切换主备实例的倒换策略.
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        changeFailoverStrategy(changeFailoverStrategyRequest?: ChangeFailoverStrategyRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/instances/{instance_id}/failover/strategy",
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

            if (changeFailoverStrategyRequest !== null && changeFailoverStrategyRequest !== undefined) {
                if (changeFailoverStrategyRequest instanceof ChangeFailoverStrategyRequest) {
                    instanceId = changeFailoverStrategyRequest.instanceId;
                    body = changeFailoverStrategyRequest.body
                    xLanguage = changeFailoverStrategyRequest.xLanguage;
                } else {
                    instanceId = changeFailoverStrategyRequest['instance_id'];
                    body = changeFailoverStrategyRequest['body'];
                    xLanguage = changeFailoverStrategyRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling changeFailoverStrategy.');
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
         * 设置可维护时间段
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        changeOpsWindow(changeOpsWindowRequest?: ChangeOpsWindowRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/instances/{instance_id}/ops-window",
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

            if (changeOpsWindowRequest !== null && changeOpsWindowRequest !== undefined) {
                if (changeOpsWindowRequest instanceof ChangeOpsWindowRequest) {
                    instanceId = changeOpsWindowRequest.instanceId;
                    body = changeOpsWindowRequest.body
                    xLanguage = changeOpsWindowRequest.xLanguage;
                } else {
                    instanceId = changeOpsWindowRequest['instance_id'];
                    body = changeOpsWindowRequest['body'];
                    xLanguage = changeOpsWindowRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling changeOpsWindow.');
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
            
            let xLanguage;

            if (createConfigurationRequest !== null && createConfigurationRequest !== undefined) {
                if (createConfigurationRequest instanceof CreateConfigurationRequest) {
                    body = createConfigurationRequest.body
                    xLanguage = createConfigurationRequest.xLanguage;
                } else {
                    body = createConfigurationRequest['body'];
                    xLanguage = createConfigurationRequest['X-Language'];
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
         * 申请域名
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createDnsName(createDnsNameRequest?: CreateDnsNameRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/{instance_id}/create-dns",
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

            if (createDnsNameRequest !== null && createDnsNameRequest !== undefined) {
                if (createDnsNameRequest instanceof CreateDnsNameRequest) {
                    instanceId = createDnsNameRequest.instanceId;
                    body = createDnsNameRequest.body
                    xLanguage = createDnsNameRequest.xLanguage;
                } else {
                    instanceId = createDnsNameRequest['instance_id'];
                    body = createDnsNameRequest['body'];
                    xLanguage = createDnsNameRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling createDnsName.');
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
            
            let xLanguage;
            
            let xClientToken;

            if (createInstanceRequest !== null && createInstanceRequest !== undefined) {
                if (createInstanceRequest instanceof CreateInstanceRequest) {
                    body = createInstanceRequest.body
                    xLanguage = createInstanceRequest.xLanguage;
                    xClientToken = createInstanceRequest.xClientToken;
                } else {
                    body = createInstanceRequest['body'];
                    xLanguage = createInstanceRequest['X-Language'];
                    xClientToken = createInstanceRequest['X-Client-Token'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }
            if (xClientToken !== undefined && xClientToken !== null) {
                localVarHeaderParameter['X-Client-Token'] = String(xClientToken);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建数据库实例V5接口，仅支持IAM5的新平面认证方式（AK/SK认证方式）
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createInstanceIam5(createInstanceIam5Request?: CreateInstanceIam5Request) {
            const options = {
                method: "POST",
                url: "/v5/{project_id}/instances",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xLanguage;
            
            let xClientToken;

            if (createInstanceIam5Request !== null && createInstanceIam5Request !== undefined) {
                if (createInstanceIam5Request instanceof CreateInstanceIam5Request) {
                    body = createInstanceIam5Request.body
                    xLanguage = createInstanceIam5Request.xLanguage;
                    xClientToken = createInstanceIam5Request.xClientToken;
                } else {
                    body = createInstanceIam5Request['body'];
                    xLanguage = createInstanceIam5Request['X-Language'];
                    xClientToken = createInstanceIam5Request['X-Client-Token'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }
            if (xClientToken !== undefined && xClientToken !== null) {
                localVarHeaderParameter['X-Client-Token'] = String(xClientToken);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

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
                contentType: "application/json",
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
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 开启数据库代理。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createRdSforMySqlProxy(createRdSforMySqlProxyRequest?: CreateRdSforMySqlProxyRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/{instance_id}/proxy/open",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let contentType;
            
            let xLanguage;

            if (createRdSforMySqlProxyRequest !== null && createRdSforMySqlProxyRequest !== undefined) {
                if (createRdSforMySqlProxyRequest instanceof CreateRdSforMySqlProxyRequest) {
                    instanceId = createRdSforMySqlProxyRequest.instanceId;
                    body = createRdSforMySqlProxyRequest.body
                    contentType = createRdSforMySqlProxyRequest.contentType;
                    xLanguage = createRdSforMySqlProxyRequest.xLanguage;
                } else {
                    instanceId = createRdSforMySqlProxyRequest['instance_id'];
                    body = createRdSforMySqlProxyRequest['body'];
                    contentType = createRdSforMySqlProxyRequest['Content-Type'];
                    xLanguage = createRdSforMySqlProxyRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling createRdSforMySqlProxy.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
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
         * 恢复到新实例。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createRestoreInstance(createRestoreInstanceRequest?: CreateRestoreInstanceRequest) {
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
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 新增SQL限流
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createSqlLimit(createSqlLimitRequest?: CreateSqlLimitRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/{instance_id}/sql-limit",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (createSqlLimitRequest !== null && createSqlLimitRequest !== undefined) {
                if (createSqlLimitRequest instanceof CreateSqlLimitRequest) {
                    instanceId = createSqlLimitRequest.instanceId;
                    body = createSqlLimitRequest.body
                } else {
                    instanceId = createSqlLimitRequest['instance_id'];
                    body = createSqlLimitRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling createSqlLimit.');
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
         * 获取扩展日志下载信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createXelLogDownload(createXelLogDownloadRequest?: CreateXelLogDownloadRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/{instance_id}/xellog-download",
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

            if (createXelLogDownloadRequest !== null && createXelLogDownloadRequest !== undefined) {
                if (createXelLogDownloadRequest instanceof CreateXelLogDownloadRequest) {
                    instanceId = createXelLogDownloadRequest.instanceId;
                    body = createXelLogDownloadRequest.body
                    xLanguage = createXelLogDownloadRequest.xLanguage;
                } else {
                    instanceId = createXelLogDownloadRequest['instance_id'];
                    body = createXelLogDownloadRequest['body'];
                    xLanguage = createXelLogDownloadRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling createXelLogDownload.');
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
         * 解除实例容灾关系接口
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteDisasterRecovery(deleteDisasterRecoveryRequest?: DeleteDisasterRecoveryRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{project_id}/instances/{instance_id}/delete-disaster-recovery",
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

            if (deleteDisasterRecoveryRequest !== null && deleteDisasterRecoveryRequest !== undefined) {
                if (deleteDisasterRecoveryRequest instanceof DeleteDisasterRecoveryRequest) {
                    instanceId = deleteDisasterRecoveryRequest.instanceId;
                    body = deleteDisasterRecoveryRequest.body
                    xLanguage = deleteDisasterRecoveryRequest.xLanguage;
                } else {
                    instanceId = deleteDisasterRecoveryRequest['instance_id'];
                    body = deleteDisasterRecoveryRequest['body'];
                    xLanguage = deleteDisasterRecoveryRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling deleteDisasterRecovery.');
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
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteJob(deleteJobRequest?: DeleteJobRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{project_id}/jobs",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let id;

            if (deleteJobRequest !== null && deleteJobRequest !== undefined) {
                if (deleteJobRequest instanceof DeleteJobRequest) {
                    id = deleteJobRequest.id;
                } else {
                    id = deleteJobRequest['id'];
                }
            }

        
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling deleteJob.');
            }
            if (id !== null && id !== undefined) {
                localVarQueryParameter['id'] = id;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 解除LTS配置信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteLogLtsConfigs(deleteLogLtsConfigsRequest?: DeleteLogLtsConfigsRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{project_id}/{engine}/instances/logs/lts-configs",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let engine;
            
            let xLanguage;

            if (deleteLogLtsConfigsRequest !== null && deleteLogLtsConfigsRequest !== undefined) {
                if (deleteLogLtsConfigsRequest instanceof DeleteLogLtsConfigsRequest) {
                    engine = deleteLogLtsConfigsRequest.engine;
                    body = deleteLogLtsConfigsRequest.body
                    xLanguage = deleteLogLtsConfigsRequest.xLanguage;
                } else {
                    engine = deleteLogLtsConfigsRequest['engine'];
                    body = deleteLogLtsConfigsRequest['body'];
                    xLanguage = deleteLogLtsConfigsRequest['X-Language'];
                }
            }

        
            if (engine === null || engine === undefined) {
            throw new RequiredError('engine','Required parameter engine was null or undefined when calling deleteLogLtsConfigs.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'engine': engine, };
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
         * 删除pg_hba.conf文件的单个或多个配置，以priority做唯一标识
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deletePostgresqlHbaConf(deletePostgresqlHbaConfRequest?: DeletePostgresqlHbaConfRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{project_id}/instances/{instance_id}/hba-info",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (deletePostgresqlHbaConfRequest !== null && deletePostgresqlHbaConfRequest !== undefined) {
                if (deletePostgresqlHbaConfRequest instanceof DeletePostgresqlHbaConfRequest) {
                    instanceId = deletePostgresqlHbaConfRequest.instanceId;
                    body = deletePostgresqlHbaConfRequest.body
                } else {
                    instanceId = deletePostgresqlHbaConfRequest['instance_id'];
                    body = deletePostgresqlHbaConfRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling deletePostgresqlHbaConf.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 关闭数据库代理。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteRdSforMySqlProxy(deleteRdSforMySqlProxyRequest?: DeleteRdSforMySqlProxyRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{project_id}/instances/{instance_id}/proxy/{proxy_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let proxyId;
            
            let contentType;
            
            let xLanguage;

            if (deleteRdSforMySqlProxyRequest !== null && deleteRdSforMySqlProxyRequest !== undefined) {
                if (deleteRdSforMySqlProxyRequest instanceof DeleteRdSforMySqlProxyRequest) {
                    instanceId = deleteRdSforMySqlProxyRequest.instanceId;
                    proxyId = deleteRdSforMySqlProxyRequest.proxyId;
                    contentType = deleteRdSforMySqlProxyRequest.contentType;
                    xLanguage = deleteRdSforMySqlProxyRequest.xLanguage;
                } else {
                    instanceId = deleteRdSforMySqlProxyRequest['instance_id'];
                    proxyId = deleteRdSforMySqlProxyRequest['proxy_id'];
                    contentType = deleteRdSforMySqlProxyRequest['Content-Type'];
                    xLanguage = deleteRdSforMySqlProxyRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling deleteRdSforMySqlProxy.');
            }
            if (proxyId === null || proxyId === undefined) {
            throw new RequiredError('proxyId','Required parameter proxyId was null or undefined when calling deleteRdSforMySqlProxy.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.pathParams = { 'instance_id': instanceId,'proxy_id': proxyId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除SQL限流
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteSqlLimit(deleteSqlLimitRequest?: DeleteSqlLimitRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{project_id}/instances/{instance_id}/sql-limit",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (deleteSqlLimitRequest !== null && deleteSqlLimitRequest !== undefined) {
                if (deleteSqlLimitRequest instanceof DeleteSqlLimitRequest) {
                    instanceId = deleteSqlLimitRequest.instanceId;
                    body = deleteSqlLimitRequest.body
                } else {
                    instanceId = deleteSqlLimitRequest['instance_id'];
                    body = deleteSqlLimitRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling deleteSqlLimit.');
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
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let xLanguage;

            if (downloadErrorlogRequest !== null && downloadErrorlogRequest !== undefined) {
                if (downloadErrorlogRequest instanceof DownloadErrorlogRequest) {
                    instanceId = downloadErrorlogRequest.instanceId;
                    xLanguage = downloadErrorlogRequest.xLanguage;
                } else {
                    instanceId = downloadErrorlogRequest['instance_id'];
                    xLanguage = downloadErrorlogRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling downloadErrorlog.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

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
            
            let xLanguage;

            if (downloadSlowlogRequest !== null && downloadSlowlogRequest !== undefined) {
                if (downloadSlowlogRequest instanceof DownloadSlowlogRequest) {
                    instanceId = downloadSlowlogRequest.instanceId;
                    body = downloadSlowlogRequest.body
                    xLanguage = downloadSlowlogRequest.xLanguage;
                } else {
                    instanceId = downloadSlowlogRequest['instance_id'];
                    body = downloadSlowlogRequest['body'];
                    xLanguage = downloadSlowlogRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling downloadSlowlog.');
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
         * 应用参数模板。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        enableConfiguration(enableConfigurationRequest?: EnableConfigurationRequest) {
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
            
            let xLanguage;

            if (enableConfigurationRequest !== null && enableConfigurationRequest !== undefined) {
                if (enableConfigurationRequest instanceof EnableConfigurationRequest) {
                    configId = enableConfigurationRequest.configId;
                    body = enableConfigurationRequest.body
                    xLanguage = enableConfigurationRequest.xLanguage;
                } else {
                    configId = enableConfigurationRequest['config_id'];
                    body = enableConfigurationRequest['body'];
                    xLanguage = enableConfigurationRequest['X-Language'];
                }
            }

        
            if (configId === null || configId === undefined) {
            throw new RequiredError('configId','Required parameter configId was null or undefined when calling enableConfiguration.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'config_id': configId, };
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
            
            let offset;
            
            let limit;
            
            let xLanguage;

            if (listAuditlogsRequest !== null && listAuditlogsRequest !== undefined) {
                if (listAuditlogsRequest instanceof ListAuditlogsRequest) {
                    instanceId = listAuditlogsRequest.instanceId;
                    startTime = listAuditlogsRequest.startTime;
                    endTime = listAuditlogsRequest.endTime;
                    offset = listAuditlogsRequest.offset;
                    limit = listAuditlogsRequest.limit;
                    xLanguage = listAuditlogsRequest.xLanguage;
                } else {
                    instanceId = listAuditlogsRequest['instance_id'];
                    startTime = listAuditlogsRequest['start_time'];
                    endTime = listAuditlogsRequest['end_time'];
                    offset = listAuditlogsRequest['offset'];
                    limit = listAuditlogsRequest['limit'];
                    xLanguage = listAuditlogsRequest['X-Language'];
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
            if (offset === null || offset === undefined) {
                throw new RequiredError('offset','Required parameter offset was null or undefined when calling listAuditlogs.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit === null || limit === undefined) {
                throw new RequiredError('limit','Required parameter limit was null or undefined when calling listAuditlogs.');
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
            
            let instanceId;
            
            let xLanguage;
            
            let backupId;
            
            let backupType;
            
            let status;
            
            let offset;
            
            let limit;
            
            let beginTime;
            
            let endTime;

            if (listBackupsRequest !== null && listBackupsRequest !== undefined) {
                if (listBackupsRequest instanceof ListBackupsRequest) {
                    instanceId = listBackupsRequest.instanceId;
                    xLanguage = listBackupsRequest.xLanguage;
                    backupId = listBackupsRequest.backupId;
                    backupType = listBackupsRequest.backupType;
                    status = listBackupsRequest.status;
                    offset = listBackupsRequest.offset;
                    limit = listBackupsRequest.limit;
                    beginTime = listBackupsRequest.beginTime;
                    endTime = listBackupsRequest.endTime;
                } else {
                    instanceId = listBackupsRequest['instance_id'];
                    xLanguage = listBackupsRequest['X-Language'];
                    backupId = listBackupsRequest['backup_id'];
                    backupType = listBackupsRequest['backup_type'];
                    status = listBackupsRequest['status'];
                    offset = listBackupsRequest['offset'];
                    limit = listBackupsRequest['limit'];
                    beginTime = listBackupsRequest['begin_time'];
                    endTime = listBackupsRequest['end_time'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
                throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listBackups.');
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
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
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
         * 查询SQLServer可用字符集
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listCollations(listCollationsRequest?: ListCollationsRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/collations",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let xLanguage;

            if (listCollationsRequest !== null && listCollationsRequest !== undefined) {
                if (listCollationsRequest instanceof ListCollationsRequest) {
                    xLanguage = listCollationsRequest.xLanguage;
                } else {
                    xLanguage = listCollationsRequest['X-Language'];
                }
            }

        
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

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

            
            let xLanguage;

            if (listConfigurationsRequest !== null && listConfigurationsRequest !== undefined) {
                if (listConfigurationsRequest instanceof ListConfigurationsRequest) {
                    xLanguage = listConfigurationsRequest.xLanguage;
                } else {
                    xLanguage = listConfigurationsRequest['X-Language'];
                }
            }

        
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询数据库引擎的版本。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listDatastores(listDatastoresRequest?: ListDatastoresRequest) {
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

            if (listDatastoresRequest !== null && listDatastoresRequest !== undefined) {
                if (listDatastoresRequest instanceof ListDatastoresRequest) {
                    databaseName = listDatastoresRequest.databaseName;
                    xLanguage = listDatastoresRequest.xLanguage;
                } else {
                    databaseName = listDatastoresRequest['database_name'];
                    xLanguage = listDatastoresRequest['X-Language'];
                }
            }

        
            if (databaseName === null || databaseName === undefined) {
            throw new RequiredError('databaseName','Required parameter databaseName was null or undefined when calling listDatastores.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.pathParams = { 'database_name': databaseName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 批量查询容灾实例信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listDrRelations(listDrRelationsRequest?: ListDrRelationsRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/disaster-recovery-relation",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let xLanguage;

            if (listDrRelationsRequest !== null && listDrRelationsRequest !== undefined) {
                if (listDrRelationsRequest instanceof ListDrRelationsRequest) {
                    xLanguage = listDrRelationsRequest.xLanguage;
                } else {
                    xLanguage = listDrRelationsRequest['X-Language'];
                }
            }

        
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询实例可变更规格
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listEngineFlavors(listEngineFlavorsRequest?: ListEngineFlavorsRequest) {
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
            
            let availabilityZoneIds;
            
            let haMode;
            
            let specCodeLike;
            
            let flavorCategoryType;
            
            let isRhaFlavor;
            
            let offset;
            
            let limit;

            if (listEngineFlavorsRequest !== null && listEngineFlavorsRequest !== undefined) {
                if (listEngineFlavorsRequest instanceof ListEngineFlavorsRequest) {
                    instanceId = listEngineFlavorsRequest.instanceId;
                    availabilityZoneIds = listEngineFlavorsRequest.availabilityZoneIds;
                    haMode = listEngineFlavorsRequest.haMode;
                    specCodeLike = listEngineFlavorsRequest.specCodeLike;
                    flavorCategoryType = listEngineFlavorsRequest.flavorCategoryType;
                    isRhaFlavor = listEngineFlavorsRequest.isRhaFlavor;
                    offset = listEngineFlavorsRequest.offset;
                    limit = listEngineFlavorsRequest.limit;
                } else {
                    instanceId = listEngineFlavorsRequest['instance_id'];
                    availabilityZoneIds = listEngineFlavorsRequest['availability_zone_ids'];
                    haMode = listEngineFlavorsRequest['ha_mode'];
                    specCodeLike = listEngineFlavorsRequest['spec_code_like'];
                    flavorCategoryType = listEngineFlavorsRequest['flavor_category_type'];
                    isRhaFlavor = listEngineFlavorsRequest['is_rha_flavor'];
                    offset = listEngineFlavorsRequest['offset'];
                    limit = listEngineFlavorsRequest['limit'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listEngineFlavors.');
            }
            if (availabilityZoneIds === null || availabilityZoneIds === undefined) {
                throw new RequiredError('availabilityZoneIds','Required parameter availabilityZoneIds was null or undefined when calling listEngineFlavors.');
            }
            if (availabilityZoneIds !== null && availabilityZoneIds !== undefined) {
                localVarQueryParameter['availability_zone_ids'] = availabilityZoneIds;
            }
            if (haMode === null || haMode === undefined) {
                throw new RequiredError('haMode','Required parameter haMode was null or undefined when calling listEngineFlavors.');
            }
            if (haMode !== null && haMode !== undefined) {
                localVarQueryParameter['ha_mode'] = haMode;
            }
            if (specCodeLike !== null && specCodeLike !== undefined) {
                localVarQueryParameter['spec_code_like'] = specCodeLike;
            }
            if (flavorCategoryType !== null && flavorCategoryType !== undefined) {
                localVarQueryParameter['flavor_category_type'] = flavorCategoryType;
            }
            if (isRhaFlavor !== null && isRhaFlavor !== undefined) {
                localVarQueryParameter['is_rha_flavor'] = isRhaFlavor;
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
         * 查询数据库错误日志。
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
            
            let xLanguage;
            
            let offset;
            
            let limit;
            
            let level;

            if (listErrorLogsRequest !== null && listErrorLogsRequest !== undefined) {
                if (listErrorLogsRequest instanceof ListErrorLogsRequest) {
                    instanceId = listErrorLogsRequest.instanceId;
                    startDate = listErrorLogsRequest.startDate;
                    endDate = listErrorLogsRequest.endDate;
                    xLanguage = listErrorLogsRequest.xLanguage;
                    offset = listErrorLogsRequest.offset;
                    limit = listErrorLogsRequest.limit;
                    level = listErrorLogsRequest.level;
                } else {
                    instanceId = listErrorLogsRequest['instance_id'];
                    startDate = listErrorLogsRequest['start_date'];
                    endDate = listErrorLogsRequest['end_date'];
                    xLanguage = listErrorLogsRequest['X-Language'];
                    offset = listErrorLogsRequest['offset'];
                    limit = listErrorLogsRequest['limit'];
                    level = listErrorLogsRequest['level'];
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
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (level !== null && level !== undefined) {
                localVarQueryParameter['level'] = level;
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
         * 查询数据库错误日志。(与原v3接口相比修改offset,符合华为云服务开放 API遵从性规范3.0)
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listErrorLogsNew(listErrorLogsNewRequest?: ListErrorLogsNewRequest) {
            const options = {
                method: "GET",
                url: "/v3.1/{project_id}/instances/{instance_id}/errorlog",
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
            
            let xLanguage;
            
            let offset;
            
            let limit;
            
            let level;

            if (listErrorLogsNewRequest !== null && listErrorLogsNewRequest !== undefined) {
                if (listErrorLogsNewRequest instanceof ListErrorLogsNewRequest) {
                    instanceId = listErrorLogsNewRequest.instanceId;
                    startDate = listErrorLogsNewRequest.startDate;
                    endDate = listErrorLogsNewRequest.endDate;
                    xLanguage = listErrorLogsNewRequest.xLanguage;
                    offset = listErrorLogsNewRequest.offset;
                    limit = listErrorLogsNewRequest.limit;
                    level = listErrorLogsNewRequest.level;
                } else {
                    instanceId = listErrorLogsNewRequest['instance_id'];
                    startDate = listErrorLogsNewRequest['start_date'];
                    endDate = listErrorLogsNewRequest['end_date'];
                    xLanguage = listErrorLogsNewRequest['X-Language'];
                    offset = listErrorLogsNewRequest['offset'];
                    limit = listErrorLogsNewRequest['limit'];
                    level = listErrorLogsNewRequest['level'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listErrorLogsNew.');
            }
            if (startDate === null || startDate === undefined) {
                throw new RequiredError('startDate','Required parameter startDate was null or undefined when calling listErrorLogsNew.');
            }
            if (startDate !== null && startDate !== undefined) {
                localVarQueryParameter['start_date'] = startDate;
            }
            if (endDate === null || endDate === undefined) {
                throw new RequiredError('endDate','Required parameter endDate was null or undefined when calling listErrorLogsNew.');
            }
            if (endDate !== null && endDate !== undefined) {
                localVarQueryParameter['end_date'] = endDate;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (level !== null && level !== undefined) {
                localVarQueryParameter['level'] = level;
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
         * 查询实例的错误日志数据。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listErrorlogForLts(listErrorlogForLtsRequest?: ListErrorlogForLtsRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/{instance_id}/error-logs",
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

            if (listErrorlogForLtsRequest !== null && listErrorlogForLtsRequest !== undefined) {
                if (listErrorlogForLtsRequest instanceof ListErrorlogForLtsRequest) {
                    instanceId = listErrorlogForLtsRequest.instanceId;
                    body = listErrorlogForLtsRequest.body
                    xLanguage = listErrorlogForLtsRequest.xLanguage;
                } else {
                    instanceId = listErrorlogForLtsRequest['instance_id'];
                    body = listErrorlogForLtsRequest['body'];
                    xLanguage = listErrorlogForLtsRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listErrorlogForLts.');
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
         * 查询数据库规格。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listFlavors(listFlavorsRequest?: ListFlavorsRequest) {
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
            
            let xLanguage;
            
            let versionName;
            
            let specCode;
            
            let isServerless;

            if (listFlavorsRequest !== null && listFlavorsRequest !== undefined) {
                if (listFlavorsRequest instanceof ListFlavorsRequest) {
                    databaseName = listFlavorsRequest.databaseName;
                    xLanguage = listFlavorsRequest.xLanguage;
                    versionName = listFlavorsRequest.versionName;
                    specCode = listFlavorsRequest.specCode;
                    isServerless = listFlavorsRequest.isServerless;
                } else {
                    databaseName = listFlavorsRequest['database_name'];
                    xLanguage = listFlavorsRequest['X-Language'];
                    versionName = listFlavorsRequest['version_name'];
                    specCode = listFlavorsRequest['spec_code'];
                    isServerless = listFlavorsRequest['is_serverless'];
                }
            }

        
            if (databaseName === null || databaseName === undefined) {
            throw new RequiredError('databaseName','Required parameter databaseName was null or undefined when calling listFlavors.');
            }
            if (versionName !== null && versionName !== undefined) {
                localVarQueryParameter['version_name'] = versionName;
            }
            if (specCode !== null && specCode !== undefined) {
                localVarQueryParameter['spec_code'] = specCode;
            }
            if (isServerless !== null && isServerless !== undefined) {
                localVarQueryParameter['is_serverless'] = isServerless;
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
         * 查询数据库可变更规格接口
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listFlavorsResize(listFlavorsResizeRequest?: ListFlavorsResizeRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/{instance_id}/flavors-resize",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let xLanguage;

            if (listFlavorsResizeRequest !== null && listFlavorsResizeRequest !== undefined) {
                if (listFlavorsResizeRequest instanceof ListFlavorsResizeRequest) {
                    instanceId = listFlavorsResizeRequest.instanceId;
                    xLanguage = listFlavorsResizeRequest.xLanguage;
                } else {
                    instanceId = listFlavorsResizeRequest['instance_id'];
                    xLanguage = listFlavorsResizeRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listFlavorsResize.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询指定时间点可恢复的库
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listHistoryDatabase(listHistoryDatabaseRequest?: ListHistoryDatabaseRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/{engine}/instances/history/databases",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let engine;
            
            let xLanguage;

            if (listHistoryDatabaseRequest !== null && listHistoryDatabaseRequest !== undefined) {
                if (listHistoryDatabaseRequest instanceof ListHistoryDatabaseRequest) {
                    engine = listHistoryDatabaseRequest.engine;
                    body = listHistoryDatabaseRequest.body
                    xLanguage = listHistoryDatabaseRequest.xLanguage;
                } else {
                    engine = listHistoryDatabaseRequest['engine'];
                    body = listHistoryDatabaseRequest['body'];
                    xLanguage = listHistoryDatabaseRequest['X-Language'];
                }
            }

        
            if (engine === null || engine === undefined) {
            throw new RequiredError('engine','Required parameter engine was null or undefined when calling listHistoryDatabase.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'engine': engine, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询实例大版本升级检查历史。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listInspectionHistories(listInspectionHistoriesRequest?: ListInspectionHistoriesRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/{instance_id}/major-version/inspection-histories",
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
            
            let order;
            
            let sortField;
            
            let targetVersion;
            
            let isAvailable;
            
            let xLanguage;

            if (listInspectionHistoriesRequest !== null && listInspectionHistoriesRequest !== undefined) {
                if (listInspectionHistoriesRequest instanceof ListInspectionHistoriesRequest) {
                    instanceId = listInspectionHistoriesRequest.instanceId;
                    offset = listInspectionHistoriesRequest.offset;
                    limit = listInspectionHistoriesRequest.limit;
                    order = listInspectionHistoriesRequest.order;
                    sortField = listInspectionHistoriesRequest.sortField;
                    targetVersion = listInspectionHistoriesRequest.targetVersion;
                    isAvailable = listInspectionHistoriesRequest.isAvailable;
                    xLanguage = listInspectionHistoriesRequest.xLanguage;
                } else {
                    instanceId = listInspectionHistoriesRequest['instance_id'];
                    offset = listInspectionHistoriesRequest['offset'];
                    limit = listInspectionHistoriesRequest['limit'];
                    order = listInspectionHistoriesRequest['order'];
                    sortField = listInspectionHistoriesRequest['sort_field'];
                    targetVersion = listInspectionHistoriesRequest['target_version'];
                    isAvailable = listInspectionHistoriesRequest['is_available'];
                    xLanguage = listInspectionHistoriesRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listInspectionHistories.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (order !== null && order !== undefined) {
                localVarQueryParameter['order'] = order;
            }
            if (sortField !== null && sortField !== undefined) {
                localVarQueryParameter['sort_field'] = sortField;
            }
            if (targetVersion !== null && targetVersion !== undefined) {
                localVarQueryParameter['target_version'] = targetVersion;
            }
            if (isAvailable !== null && isAvailable !== undefined) {
                localVarQueryParameter['is_available'] = isAvailable;
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
         * 获取诊断后的实例数量
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listInstanceDiagnosis(listInstanceDiagnosisRequest?: ListInstanceDiagnosisRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/diagnosis",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let engine;

            if (listInstanceDiagnosisRequest !== null && listInstanceDiagnosisRequest !== undefined) {
                if (listInstanceDiagnosisRequest instanceof ListInstanceDiagnosisRequest) {
                    engine = listInstanceDiagnosisRequest.engine;
                } else {
                    engine = listInstanceDiagnosisRequest['engine'];
                }
            }

        
            if (engine === null || engine === undefined) {
                throw new RequiredError('engine','Required parameter engine was null or undefined when calling listInstanceDiagnosis.');
            }
            if (engine !== null && engine !== undefined) {
                localVarQueryParameter['engine'] = engine;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 实例参数修改历史。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listInstanceParamHistories(listInstanceParamHistoriesRequest?: ListInstanceParamHistoriesRequest) {
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
            
            let startTime;
            
            let endTime;
            
            let paramName;

            if (listInstanceParamHistoriesRequest !== null && listInstanceParamHistoriesRequest !== undefined) {
                if (listInstanceParamHistoriesRequest instanceof ListInstanceParamHistoriesRequest) {
                    instanceId = listInstanceParamHistoriesRequest.instanceId;
                    offset = listInstanceParamHistoriesRequest.offset;
                    limit = listInstanceParamHistoriesRequest.limit;
                    startTime = listInstanceParamHistoriesRequest.startTime;
                    endTime = listInstanceParamHistoriesRequest.endTime;
                    paramName = listInstanceParamHistoriesRequest.paramName;
                } else {
                    instanceId = listInstanceParamHistoriesRequest['instance_id'];
                    offset = listInstanceParamHistoriesRequest['offset'];
                    limit = listInstanceParamHistoriesRequest['limit'];
                    startTime = listInstanceParamHistoriesRequest['start_time'];
                    endTime = listInstanceParamHistoriesRequest['end_time'];
                    paramName = listInstanceParamHistoriesRequest['param_name'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listInstanceParamHistories.');
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
            if (paramName !== null && paramName !== undefined) {
                localVarQueryParameter['param_name'] = paramName;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询实例标签。
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
         * 查询数据库实例列表。
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
            
            let contentType;
            
            let xLanguage;
            
            let id;
            
            let name;
            
            let type;
            
            let datastoreType;
            
            let epsId;
            
            let vpcId;
            
            let subnetId;
            
            let offset;
            
            let limit;
            
            let tags;

            if (listInstancesRequest !== null && listInstancesRequest !== undefined) {
                if (listInstancesRequest instanceof ListInstancesRequest) {
                    contentType = listInstancesRequest.contentType;
                    xLanguage = listInstancesRequest.xLanguage;
                    id = listInstancesRequest.id;
                    name = listInstancesRequest.name;
                    type = listInstancesRequest.type;
                    datastoreType = listInstancesRequest.datastoreType;
                    epsId = listInstancesRequest.epsId;
                    vpcId = listInstancesRequest.vpcId;
                    subnetId = listInstancesRequest.subnetId;
                    offset = listInstancesRequest.offset;
                    limit = listInstancesRequest.limit;
                    tags = listInstancesRequest.tags;
                } else {
                    contentType = listInstancesRequest['Content-Type'];
                    xLanguage = listInstancesRequest['X-Language'];
                    id = listInstancesRequest['id'];
                    name = listInstancesRequest['name'];
                    type = listInstancesRequest['type'];
                    datastoreType = listInstancesRequest['datastore_type'];
                    epsId = listInstancesRequest['eps_id'];
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
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }
            if (datastoreType !== null && datastoreType !== undefined) {
                localVarQueryParameter['datastore_type'] = datastoreType;
            }
            if (epsId !== null && epsId !== undefined) {
                localVarQueryParameter['eps_id'] = epsId;
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
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取指定诊断项的诊断结果
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listInstancesInfoDiagnosis(listInstancesInfoDiagnosisRequest?: ListInstancesInfoDiagnosisRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/diagnosis/info",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let engine;
            
            let diagnosis;
            
            let offset;
            
            let limit;

            if (listInstancesInfoDiagnosisRequest !== null && listInstancesInfoDiagnosisRequest !== undefined) {
                if (listInstancesInfoDiagnosisRequest instanceof ListInstancesInfoDiagnosisRequest) {
                    engine = listInstancesInfoDiagnosisRequest.engine;
                    diagnosis = listInstancesInfoDiagnosisRequest.diagnosis;
                    offset = listInstancesInfoDiagnosisRequest.offset;
                    limit = listInstancesInfoDiagnosisRequest.limit;
                } else {
                    engine = listInstancesInfoDiagnosisRequest['engine'];
                    diagnosis = listInstancesInfoDiagnosisRequest['diagnosis'];
                    offset = listInstancesInfoDiagnosisRequest['offset'];
                    limit = listInstancesInfoDiagnosisRequest['limit'];
                }
            }

        
            if (engine === null || engine === undefined) {
                throw new RequiredError('engine','Required parameter engine was null or undefined when calling listInstancesInfoDiagnosis.');
            }
            if (engine !== null && engine !== undefined) {
                localVarQueryParameter['engine'] = engine;
            }
            if (diagnosis === null || diagnosis === undefined) {
                throw new RequiredError('diagnosis','Required parameter diagnosis was null or undefined when calling listInstancesInfoDiagnosis.');
            }
            if (diagnosis !== null && diagnosis !== undefined) {
                localVarQueryParameter['diagnosis'] = diagnosis;
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
         * 批量获取实例是否能在库表恢复时使用极速恢复。
         * 
         * - 调用接口前，您需要了解API 认证鉴权。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listInstancesSupportFastRestore(listInstancesSupportFastRestoreRequest?: ListInstancesSupportFastRestoreRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/fast-restore",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xLanguage;

            if (listInstancesSupportFastRestoreRequest !== null && listInstancesSupportFastRestoreRequest !== undefined) {
                if (listInstancesSupportFastRestoreRequest instanceof ListInstancesSupportFastRestoreRequest) {
                    xLanguage = listInstancesSupportFastRestoreRequest.xLanguage;
                    body = listInstancesSupportFastRestoreRequest.body
                } else {
                    xLanguage = listInstancesSupportFastRestoreRequest['X-Language'];
                    body = listInstancesSupportFastRestoreRequest['body'];
                }
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
         * 获取指定ID的任务信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listJobInfo(listJobInfoRequest?: ListJobInfoRequest) {
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

            if (listJobInfoRequest !== null && listJobInfoRequest !== undefined) {
                if (listJobInfoRequest instanceof ListJobInfoRequest) {
                    id = listJobInfoRequest.id;
                    xLanguage = listJobInfoRequest.xLanguage;
                } else {
                    id = listJobInfoRequest['id'];
                    xLanguage = listJobInfoRequest['X-Language'];
                }
            }

        
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling listJobInfo.');
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
         * 获取指定实例和时间范围的任务信息（SQL Server）。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listJobInfoDetail(listJobInfoDetailRequest?: ListJobInfoDetailRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/{instance_id}/tasklist/detail",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let startTime;
            
            let xLanguage;
            
            let endTime;

            if (listJobInfoDetailRequest !== null && listJobInfoDetailRequest !== undefined) {
                if (listJobInfoDetailRequest instanceof ListJobInfoDetailRequest) {
                    instanceId = listJobInfoDetailRequest.instanceId;
                    startTime = listJobInfoDetailRequest.startTime;
                    xLanguage = listJobInfoDetailRequest.xLanguage;
                    endTime = listJobInfoDetailRequest.endTime;
                } else {
                    instanceId = listJobInfoDetailRequest['instance_id'];
                    startTime = listJobInfoDetailRequest['start_time'];
                    xLanguage = listJobInfoDetailRequest['X-Language'];
                    endTime = listJobInfoDetailRequest['end_time'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listJobInfoDetail.');
            }
            if (startTime === null || startTime === undefined) {
                throw new RequiredError('startTime','Required parameter startTime was null or undefined when calling listJobInfoDetail.');
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
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取LTS配置信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listLogLtsConfigs(listLogLtsConfigsRequest?: ListLogLtsConfigsRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/{engine}/instances/logs/lts-configs",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let engine;
            
            let enterpriseProjectId;
            
            let instanceId;
            
            let instanceName;
            
            let limit;
            
            let offset;
            
            let sort;
            
            let instanceStatus;
            
            let xLanguage;

            if (listLogLtsConfigsRequest !== null && listLogLtsConfigsRequest !== undefined) {
                if (listLogLtsConfigsRequest instanceof ListLogLtsConfigsRequest) {
                    engine = listLogLtsConfigsRequest.engine;
                    enterpriseProjectId = listLogLtsConfigsRequest.enterpriseProjectId;
                    instanceId = listLogLtsConfigsRequest.instanceId;
                    instanceName = listLogLtsConfigsRequest.instanceName;
                    limit = listLogLtsConfigsRequest.limit;
                    offset = listLogLtsConfigsRequest.offset;
                    sort = listLogLtsConfigsRequest.sort;
                    instanceStatus = listLogLtsConfigsRequest.instanceStatus;
                    xLanguage = listLogLtsConfigsRequest.xLanguage;
                } else {
                    engine = listLogLtsConfigsRequest['engine'];
                    enterpriseProjectId = listLogLtsConfigsRequest['enterprise_project_id'];
                    instanceId = listLogLtsConfigsRequest['instance_id'];
                    instanceName = listLogLtsConfigsRequest['instance_name'];
                    limit = listLogLtsConfigsRequest['limit'];
                    offset = listLogLtsConfigsRequest['offset'];
                    sort = listLogLtsConfigsRequest['sort'];
                    instanceStatus = listLogLtsConfigsRequest['instance_status'];
                    xLanguage = listLogLtsConfigsRequest['X-Language'];
                }
            }

        
            if (engine === null || engine === undefined) {
            throw new RequiredError('engine','Required parameter engine was null or undefined when calling listLogLtsConfigs.');
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
            if (sort !== null && sort !== undefined) {
                localVarQueryParameter['sort'] = sort;
            }
            if (instanceStatus !== null && instanceStatus !== undefined) {
                localVarQueryParameter['instance_status'] = instanceStatus;
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'engine': engine, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询跨区域备份列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listOffSiteBackups(listOffSiteBackupsRequest?: ListOffSiteBackupsRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/offsite-backups",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let xLanguage;
            
            let backupId;
            
            let backupType;
            
            let offset;
            
            let limit;
            
            let beginTime;
            
            let endTime;

            if (listOffSiteBackupsRequest !== null && listOffSiteBackupsRequest !== undefined) {
                if (listOffSiteBackupsRequest instanceof ListOffSiteBackupsRequest) {
                    instanceId = listOffSiteBackupsRequest.instanceId;
                    xLanguage = listOffSiteBackupsRequest.xLanguage;
                    backupId = listOffSiteBackupsRequest.backupId;
                    backupType = listOffSiteBackupsRequest.backupType;
                    offset = listOffSiteBackupsRequest.offset;
                    limit = listOffSiteBackupsRequest.limit;
                    beginTime = listOffSiteBackupsRequest.beginTime;
                    endTime = listOffSiteBackupsRequest.endTime;
                } else {
                    instanceId = listOffSiteBackupsRequest['instance_id'];
                    xLanguage = listOffSiteBackupsRequest['X-Language'];
                    backupId = listOffSiteBackupsRequest['backup_id'];
                    backupType = listOffSiteBackupsRequest['backup_type'];
                    offset = listOffSiteBackupsRequest['offset'];
                    limit = listOffSiteBackupsRequest['limit'];
                    beginTime = listOffSiteBackupsRequest['begin_time'];
                    endTime = listOffSiteBackupsRequest['end_time'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
                throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listOffSiteBackups.');
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
         * 查询跨区域备份实例列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listOffSiteInstances(listOffSiteInstancesRequest?: ListOffSiteInstancesRequest) {
            const options = {
                method: "GET",
                url: "/v3/backups/offsite-backup-instance",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let contentType;
            
            let xLanguage;
            
            let offset;
            
            let limit;

            if (listOffSiteInstancesRequest !== null && listOffSiteInstancesRequest !== undefined) {
                if (listOffSiteInstancesRequest instanceof ListOffSiteInstancesRequest) {
                    contentType = listOffSiteInstancesRequest.contentType;
                    xLanguage = listOffSiteInstancesRequest.xLanguage;
                    offset = listOffSiteInstancesRequest.offset;
                    limit = listOffSiteInstancesRequest.limit;
                } else {
                    contentType = listOffSiteInstancesRequest['Content-Type'];
                    xLanguage = listOffSiteInstancesRequest['X-Language'];
                    offset = listOffSiteInstancesRequest['offset'];
                    limit = listOffSiteInstancesRequest['limit'];
                }
            }

        
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询跨区域备份可恢复时间段。
         * 如果您备份策略中的保存天数设置较长，建议您传入查询日期“date”。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listOffSiteRestoreTimes(listOffSiteRestoreTimesRequest?: ListOffSiteRestoreTimesRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/{instance_id}/offsite-restore-time",
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

            if (listOffSiteRestoreTimesRequest !== null && listOffSiteRestoreTimesRequest !== undefined) {
                if (listOffSiteRestoreTimesRequest instanceof ListOffSiteRestoreTimesRequest) {
                    instanceId = listOffSiteRestoreTimesRequest.instanceId;
                    xLanguage = listOffSiteRestoreTimesRequest.xLanguage;
                    date = listOffSiteRestoreTimesRequest.date;
                } else {
                    instanceId = listOffSiteRestoreTimesRequest['instance_id'];
                    xLanguage = listOffSiteRestoreTimesRequest['X-Language'];
                    date = listOffSiteRestoreTimesRequest['date'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listOffSiteRestoreTimes.');
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
         * 查询实例的pg_hba.conf文件配置
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listPostgresqlHbaInfo(listPostgresqlHbaInfoRequest?: ListPostgresqlHbaInfoRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/{instance_id}/hba-info",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;

            if (listPostgresqlHbaInfoRequest !== null && listPostgresqlHbaInfoRequest !== undefined) {
                if (listPostgresqlHbaInfoRequest instanceof ListPostgresqlHbaInfoRequest) {
                    instanceId = listPostgresqlHbaInfoRequest.instanceId;
                } else {
                    instanceId = listPostgresqlHbaInfoRequest['instance_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listPostgresqlHbaInfo.');
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询实例的pg_hba.conf文件修改历史
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listPostgresqlHbaInfoHistory(listPostgresqlHbaInfoHistoryRequest?: ListPostgresqlHbaInfoHistoryRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/{instance_id}/hba-info/history",
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

            if (listPostgresqlHbaInfoHistoryRequest !== null && listPostgresqlHbaInfoHistoryRequest !== undefined) {
                if (listPostgresqlHbaInfoHistoryRequest instanceof ListPostgresqlHbaInfoHistoryRequest) {
                    instanceId = listPostgresqlHbaInfoHistoryRequest.instanceId;
                    startTime = listPostgresqlHbaInfoHistoryRequest.startTime;
                    endTime = listPostgresqlHbaInfoHistoryRequest.endTime;
                } else {
                    instanceId = listPostgresqlHbaInfoHistoryRequest['instance_id'];
                    startTime = listPostgresqlHbaInfoHistoryRequest['start_time'];
                    endTime = listPostgresqlHbaInfoHistoryRequest['end_time'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listPostgresqlHbaInfoHistory.');
            }
            if (startTime !== null && startTime !== undefined) {
                localVarQueryParameter['start_time'] = startTime;
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询指定时间点可恢复的表(PostgreSQL)
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listPostgresqlListHistoryTables(listPostgresqlListHistoryTablesRequest?: ListPostgresqlListHistoryTablesRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/{database_name}/instances/history/tables",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let databaseName;
            
            let xLanguage;

            if (listPostgresqlListHistoryTablesRequest !== null && listPostgresqlListHistoryTablesRequest !== undefined) {
                if (listPostgresqlListHistoryTablesRequest instanceof ListPostgresqlListHistoryTablesRequest) {
                    databaseName = listPostgresqlListHistoryTablesRequest.databaseName;
                    body = listPostgresqlListHistoryTablesRequest.body
                    xLanguage = listPostgresqlListHistoryTablesRequest.xLanguage;
                } else {
                    databaseName = listPostgresqlListHistoryTablesRequest['database_name'];
                    body = listPostgresqlListHistoryTablesRequest['body'];
                    xLanguage = listPostgresqlListHistoryTablesRequest['X-Language'];
                }
            }

        
            if (databaseName === null || databaseName === undefined) {
            throw new RequiredError('databaseName','Required parameter databaseName was null or undefined when calling listPostgresqlListHistoryTables.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'database_name': databaseName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询预定义标签
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listPredefinedTag(listPredefinedTagRequest?: ListPredefinedTagRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/tags/predefined-tag",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let xLanguage;

            if (listPredefinedTagRequest !== null && listPredefinedTagRequest !== undefined) {
                if (listPredefinedTagRequest instanceof ListPredefinedTagRequest) {
                    xLanguage = listPredefinedTagRequest.xLanguage;
                } else {
                    xLanguage = listPredefinedTagRequest['X-Language'];
                }
            }

        
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询项目标签。
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
         * 查询数据库代理信息列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listRdSforMySqlProxy(listRdSforMySqlProxyRequest?: ListRdSforMySqlProxyRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/{instance_id}/proxy-list",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let contentType;
            
            let xLanguage;

            if (listRdSforMySqlProxyRequest !== null && listRdSforMySqlProxyRequest !== undefined) {
                if (listRdSforMySqlProxyRequest instanceof ListRdSforMySqlProxyRequest) {
                    instanceId = listRdSforMySqlProxyRequest.instanceId;
                    contentType = listRdSforMySqlProxyRequest.contentType;
                    xLanguage = listRdSforMySqlProxyRequest.xLanguage;
                } else {
                    instanceId = listRdSforMySqlProxyRequest['instance_id'];
                    contentType = listRdSforMySqlProxyRequest['Content-Type'];
                    xLanguage = listRdSforMySqlProxyRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listRdSforMySqlProxy.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询数据库代理规格信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listRdSforMysqlProxyFlavors(listRdSforMysqlProxyFlavorsRequest?: ListRdSforMysqlProxyFlavorsRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/{instance_id}/proxy/flavors",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let contentType;
            
            let xLanguage;
            
            let offset;
            
            let limit;

            if (listRdSforMysqlProxyFlavorsRequest !== null && listRdSforMysqlProxyFlavorsRequest !== undefined) {
                if (listRdSforMysqlProxyFlavorsRequest instanceof ListRdSforMysqlProxyFlavorsRequest) {
                    instanceId = listRdSforMysqlProxyFlavorsRequest.instanceId;
                    contentType = listRdSforMysqlProxyFlavorsRequest.contentType;
                    xLanguage = listRdSforMysqlProxyFlavorsRequest.xLanguage;
                    offset = listRdSforMysqlProxyFlavorsRequest.offset;
                    limit = listRdSforMysqlProxyFlavorsRequest.limit;
                } else {
                    instanceId = listRdSforMysqlProxyFlavorsRequest['instance_id'];
                    contentType = listRdSforMysqlProxyFlavorsRequest['Content-Type'];
                    xLanguage = listRdSforMysqlProxyFlavorsRequest['X-Language'];
                    offset = listRdSforMysqlProxyFlavorsRequest['offset'];
                    limit = listRdSforMysqlProxyFlavorsRequest['limit'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listRdSforMysqlProxyFlavors.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
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
         * 查询回收站实例信息
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
            
            let offset;
            
            let limit;
            
            let xLanguage;

            if (listRecycleInstancesRequest !== null && listRecycleInstancesRequest !== undefined) {
                if (listRecycleInstancesRequest instanceof ListRecycleInstancesRequest) {
                    offset = listRecycleInstancesRequest.offset;
                    limit = listRecycleInstancesRequest.limit;
                    xLanguage = listRecycleInstancesRequest.xLanguage;
                } else {
                    offset = listRecycleInstancesRequest['offset'];
                    limit = listRecycleInstancesRequest['limit'];
                    xLanguage = listRecycleInstancesRequest['X-Language'];
                }
            }

        
            if (offset === null || offset === undefined) {
                throw new RequiredError('offset','Required parameter offset was null or undefined when calling listRecycleInstances.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit === null || limit === undefined) {
                throw new RequiredError('limit','Required parameter limit was null or undefined when calling listRecycleInstances.');
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
            
            let xLanguage;
            
            let date;

            if (listRestoreTimesRequest !== null && listRestoreTimesRequest !== undefined) {
                if (listRestoreTimesRequest instanceof ListRestoreTimesRequest) {
                    instanceId = listRestoreTimesRequest.instanceId;
                    xLanguage = listRestoreTimesRequest.xLanguage;
                    date = listRestoreTimesRequest.date;
                } else {
                    instanceId = listRestoreTimesRequest['instance_id'];
                    xLanguage = listRestoreTimesRequest['X-Language'];
                    date = listRestoreTimesRequest['date'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listRestoreTimes.');
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
         * 查询共享备份列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listShareBackups(listShareBackupsRequest?: ListShareBackupsRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/share-backups",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let instanceName;
            
            let backupName;
            
            let offset;
            
            let limit;

            if (listShareBackupsRequest !== null && listShareBackupsRequest !== undefined) {
                if (listShareBackupsRequest instanceof ListShareBackupsRequest) {
                    instanceId = listShareBackupsRequest.instanceId;
                    instanceName = listShareBackupsRequest.instanceName;
                    backupName = listShareBackupsRequest.backupName;
                    offset = listShareBackupsRequest.offset;
                    limit = listShareBackupsRequest.limit;
                } else {
                    instanceId = listShareBackupsRequest['instance_id'];
                    instanceName = listShareBackupsRequest['instance_name'];
                    backupName = listShareBackupsRequest['backup_name'];
                    offset = listShareBackupsRequest['offset'];
                    limit = listShareBackupsRequest['limit'];
                }
            }

        
            if (instanceId !== null && instanceId !== undefined) {
                localVarQueryParameter['instance_id'] = instanceId;
            }
            if (instanceName !== null && instanceName !== undefined) {
                localVarQueryParameter['instance_name'] = instanceName;
            }
            if (backupName !== null && backupName !== undefined) {
                localVarQueryParameter['backup_name'] = backupName;
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
         * 获取指定实例详情
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listSimplifiedInstances(listSimplifiedInstancesRequest?: ListSimplifiedInstancesRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/simplified-instances",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xLanguage;

            if (listSimplifiedInstancesRequest !== null && listSimplifiedInstancesRequest !== undefined) {
                if (listSimplifiedInstancesRequest instanceof ListSimplifiedInstancesRequest) {
                    body = listSimplifiedInstancesRequest.body
                    xLanguage = listSimplifiedInstancesRequest.xLanguage;
                } else {
                    body = listSimplifiedInstancesRequest['body'];
                    xLanguage = listSimplifiedInstancesRequest['X-Language'];
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
         * 查询慢日志文件列表。
         * 调用该接口取到慢日志文件名后，可以调用接口/v3/{project_id}/instances/{instance_id}/slowlog-download 获取慢日志文件下载链接
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listSlowLogFile(listSlowLogFileRequest?: ListSlowLogFileRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/{instance_id}/slowlog-files",
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

            if (listSlowLogFileRequest !== null && listSlowLogFileRequest !== undefined) {
                if (listSlowLogFileRequest instanceof ListSlowLogFileRequest) {
                    instanceId = listSlowLogFileRequest.instanceId;
                    xLanguage = listSlowLogFileRequest.xLanguage;
                    offset = listSlowLogFileRequest.offset;
                    limit = listSlowLogFileRequest.limit;
                } else {
                    instanceId = listSlowLogFileRequest['instance_id'];
                    xLanguage = listSlowLogFileRequest['X-Language'];
                    offset = listSlowLogFileRequest['offset'];
                    limit = listSlowLogFileRequest['limit'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listSlowLogFile.');
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
         * 查询实例慢日志的统计数据。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listSlowLogStatisticsForLts(listSlowLogStatisticsForLtsRequest?: ListSlowLogStatisticsForLtsRequest) {
            const options = {
                method: "POST",
                url: "/v3.1/{project_id}/instances/{instance_id}/slow-logs/statistics",
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

            if (listSlowLogStatisticsForLtsRequest !== null && listSlowLogStatisticsForLtsRequest !== undefined) {
                if (listSlowLogStatisticsForLtsRequest instanceof ListSlowLogStatisticsForLtsRequest) {
                    instanceId = listSlowLogStatisticsForLtsRequest.instanceId;
                    body = listSlowLogStatisticsForLtsRequest.body
                    xLanguage = listSlowLogStatisticsForLtsRequest.xLanguage;
                } else {
                    instanceId = listSlowLogStatisticsForLtsRequest['instance_id'];
                    body = listSlowLogStatisticsForLtsRequest['body'];
                    xLanguage = listSlowLogStatisticsForLtsRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listSlowLogStatisticsForLts.');
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
         * 查询数据库慢日志。
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
            
            let xLanguage;
            
            let offset;
            
            let limit;
            
            let type;

            if (listSlowLogsRequest !== null && listSlowLogsRequest !== undefined) {
                if (listSlowLogsRequest instanceof ListSlowLogsRequest) {
                    instanceId = listSlowLogsRequest.instanceId;
                    startDate = listSlowLogsRequest.startDate;
                    endDate = listSlowLogsRequest.endDate;
                    xLanguage = listSlowLogsRequest.xLanguage;
                    offset = listSlowLogsRequest.offset;
                    limit = listSlowLogsRequest.limit;
                    type = listSlowLogsRequest.type;
                } else {
                    instanceId = listSlowLogsRequest['instance_id'];
                    startDate = listSlowLogsRequest['start_date'];
                    endDate = listSlowLogsRequest['end_date'];
                    xLanguage = listSlowLogsRequest['X-Language'];
                    offset = listSlowLogsRequest['offset'];
                    limit = listSlowLogsRequest['limit'];
                    type = listSlowLogsRequest['type'];
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
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
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
         * 查询数据库慢日志。(与原v3接口相比修改offset,符合华为云服务开放 API遵从性规范3.0)
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listSlowLogsNew(listSlowLogsNewRequest?: ListSlowLogsNewRequest) {
            const options = {
                method: "GET",
                url: "/v3.1/{project_id}/instances/{instance_id}/slowlog",
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
            
            let xLanguage;
            
            let offset;
            
            let limit;
            
            let type;

            if (listSlowLogsNewRequest !== null && listSlowLogsNewRequest !== undefined) {
                if (listSlowLogsNewRequest instanceof ListSlowLogsNewRequest) {
                    instanceId = listSlowLogsNewRequest.instanceId;
                    startDate = listSlowLogsNewRequest.startDate;
                    endDate = listSlowLogsNewRequest.endDate;
                    xLanguage = listSlowLogsNewRequest.xLanguage;
                    offset = listSlowLogsNewRequest.offset;
                    limit = listSlowLogsNewRequest.limit;
                    type = listSlowLogsNewRequest.type;
                } else {
                    instanceId = listSlowLogsNewRequest['instance_id'];
                    startDate = listSlowLogsNewRequest['start_date'];
                    endDate = listSlowLogsNewRequest['end_date'];
                    xLanguage = listSlowLogsNewRequest['X-Language'];
                    offset = listSlowLogsNewRequest['offset'];
                    limit = listSlowLogsNewRequest['limit'];
                    type = listSlowLogsNewRequest['type'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listSlowLogsNew.');
            }
            if (startDate === null || startDate === undefined) {
                throw new RequiredError('startDate','Required parameter startDate was null or undefined when calling listSlowLogsNew.');
            }
            if (startDate !== null && startDate !== undefined) {
                localVarQueryParameter['start_date'] = startDate;
            }
            if (endDate === null || endDate === undefined) {
                throw new RequiredError('endDate','Required parameter endDate was null or undefined when calling listSlowLogsNew.');
            }
            if (endDate !== null && endDate !== undefined) {
                localVarQueryParameter['end_date'] = endDate;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
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
         * 查询实例的慢日志数据。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listSlowlogForLts(listSlowlogForLtsRequest?: ListSlowlogForLtsRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/{instance_id}/slow-logs",
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

            if (listSlowlogForLtsRequest !== null && listSlowlogForLtsRequest !== undefined) {
                if (listSlowlogForLtsRequest instanceof ListSlowlogForLtsRequest) {
                    instanceId = listSlowlogForLtsRequest.instanceId;
                    body = listSlowlogForLtsRequest.body
                    xLanguage = listSlowlogForLtsRequest.xLanguage;
                } else {
                    instanceId = listSlowlogForLtsRequest['instance_id'];
                    body = listSlowlogForLtsRequest['body'];
                    xLanguage = listSlowlogForLtsRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listSlowlogForLts.');
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
         * 获取慢日志统计信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listSlowlogStatistics(listSlowlogStatisticsRequest?: ListSlowlogStatisticsRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/{instance_id}/slowlog/statistics",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let curPage;
            
            let perPage;
            
            let startDate;
            
            let endDate;
            
            let type;
            
            let xLanguage;
            
            let sort;

            if (listSlowlogStatisticsRequest !== null && listSlowlogStatisticsRequest !== undefined) {
                if (listSlowlogStatisticsRequest instanceof ListSlowlogStatisticsRequest) {
                    instanceId = listSlowlogStatisticsRequest.instanceId;
                    curPage = listSlowlogStatisticsRequest.curPage;
                    perPage = listSlowlogStatisticsRequest.perPage;
                    startDate = listSlowlogStatisticsRequest.startDate;
                    endDate = listSlowlogStatisticsRequest.endDate;
                    type = listSlowlogStatisticsRequest.type;
                    xLanguage = listSlowlogStatisticsRequest.xLanguage;
                    sort = listSlowlogStatisticsRequest.sort;
                } else {
                    instanceId = listSlowlogStatisticsRequest['instance_id'];
                    curPage = listSlowlogStatisticsRequest['cur_page'];
                    perPage = listSlowlogStatisticsRequest['per_page'];
                    startDate = listSlowlogStatisticsRequest['start_date'];
                    endDate = listSlowlogStatisticsRequest['end_date'];
                    type = listSlowlogStatisticsRequest['type'];
                    xLanguage = listSlowlogStatisticsRequest['X-Language'];
                    sort = listSlowlogStatisticsRequest['sort'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listSlowlogStatistics.');
            }
            if (curPage === null || curPage === undefined) {
                throw new RequiredError('curPage','Required parameter curPage was null or undefined when calling listSlowlogStatistics.');
            }
            if (curPage !== null && curPage !== undefined) {
                localVarQueryParameter['cur_page'] = curPage;
            }
            if (perPage === null || perPage === undefined) {
                throw new RequiredError('perPage','Required parameter perPage was null or undefined when calling listSlowlogStatistics.');
            }
            if (perPage !== null && perPage !== undefined) {
                localVarQueryParameter['per_page'] = perPage;
            }
            if (startDate === null || startDate === undefined) {
                throw new RequiredError('startDate','Required parameter startDate was null or undefined when calling listSlowlogStatistics.');
            }
            if (startDate !== null && startDate !== undefined) {
                localVarQueryParameter['start_date'] = startDate;
            }
            if (endDate === null || endDate === undefined) {
                throw new RequiredError('endDate','Required parameter endDate was null or undefined when calling listSlowlogStatistics.');
            }
            if (endDate !== null && endDate !== undefined) {
                localVarQueryParameter['end_date'] = endDate;
            }
            if (type === null || type === undefined) {
                throw new RequiredError('type','Required parameter type was null or undefined when calling listSlowlogStatistics.');
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }
            if (sort !== null && sort !== undefined) {
                localVarQueryParameter['sort'] = sort;
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
         * 查询SQL限流列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listSqlLimit(listSqlLimitRequest?: ListSqlLimitRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/{instance_id}/sql-limit",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let dbName;
            
            let offset;
            
            let limit;

            if (listSqlLimitRequest !== null && listSqlLimitRequest !== undefined) {
                if (listSqlLimitRequest instanceof ListSqlLimitRequest) {
                    instanceId = listSqlLimitRequest.instanceId;
                    dbName = listSqlLimitRequest.dbName;
                    offset = listSqlLimitRequest.offset;
                    limit = listSqlLimitRequest.limit;
                } else {
                    instanceId = listSqlLimitRequest['instance_id'];
                    dbName = listSqlLimitRequest['db_name'];
                    offset = listSqlLimitRequest['offset'];
                    limit = listSqlLimitRequest['limit'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listSqlLimit.');
            }
            if (dbName === null || dbName === undefined) {
                throw new RequiredError('dbName','Required parameter dbName was null or undefined when calling listSqlLimit.');
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
         * 获取SSL证书下载地址
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listSslCertDownloadLink(listSslCertDownloadLinkRequest?: ListSslCertDownloadLinkRequest) {
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

            if (listSslCertDownloadLinkRequest !== null && listSslCertDownloadLinkRequest !== undefined) {
                if (listSslCertDownloadLinkRequest instanceof ListSslCertDownloadLinkRequest) {
                    instanceId = listSslCertDownloadLinkRequest.instanceId;
                    xLanguage = listSslCertDownloadLinkRequest.xLanguage;
                } else {
                    instanceId = listSslCertDownloadLinkRequest['instance_id'];
                    xLanguage = listSslCertDownloadLinkRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listSslCertDownloadLink.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询数据库磁盘类型。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listStorageTypes(listStorageTypesRequest?: ListStorageTypesRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/storage-type/{database_name}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let databaseName;
            
            let versionName;
            
            let xLanguage;
            
            let haMode;

            if (listStorageTypesRequest !== null && listStorageTypesRequest !== undefined) {
                if (listStorageTypesRequest instanceof ListStorageTypesRequest) {
                    databaseName = listStorageTypesRequest.databaseName;
                    versionName = listStorageTypesRequest.versionName;
                    xLanguage = listStorageTypesRequest.xLanguage;
                    haMode = listStorageTypesRequest.haMode;
                } else {
                    databaseName = listStorageTypesRequest['database_name'];
                    versionName = listStorageTypesRequest['version_name'];
                    xLanguage = listStorageTypesRequest['X-Language'];
                    haMode = listStorageTypesRequest['ha_mode'];
                }
            }

        
            if (databaseName === null || databaseName === undefined) {
            throw new RequiredError('databaseName','Required parameter databaseName was null or undefined when calling listStorageTypes.');
            }
            if (versionName === null || versionName === undefined) {
                throw new RequiredError('versionName','Required parameter versionName was null or undefined when calling listStorageTypes.');
            }
            if (versionName !== null && versionName !== undefined) {
                localVarQueryParameter['version_name'] = versionName;
            }
            if (haMode !== null && haMode !== undefined) {
                localVarQueryParameter['ha_mode'] = haMode;
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
         * 查询实例大版本升级历史信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listUpgradeHistories(listUpgradeHistoriesRequest?: ListUpgradeHistoriesRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/{instance_id}/major-version/upgrade-histories",
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
            
            let order;
            
            let sortField;
            
            let xLanguage;

            if (listUpgradeHistoriesRequest !== null && listUpgradeHistoriesRequest !== undefined) {
                if (listUpgradeHistoriesRequest instanceof ListUpgradeHistoriesRequest) {
                    instanceId = listUpgradeHistoriesRequest.instanceId;
                    offset = listUpgradeHistoriesRequest.offset;
                    limit = listUpgradeHistoriesRequest.limit;
                    order = listUpgradeHistoriesRequest.order;
                    sortField = listUpgradeHistoriesRequest.sortField;
                    xLanguage = listUpgradeHistoriesRequest.xLanguage;
                } else {
                    instanceId = listUpgradeHistoriesRequest['instance_id'];
                    offset = listUpgradeHistoriesRequest['offset'];
                    limit = listUpgradeHistoriesRequest['limit'];
                    order = listUpgradeHistoriesRequest['order'];
                    sortField = listUpgradeHistoriesRequest['sort_field'];
                    xLanguage = listUpgradeHistoriesRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listUpgradeHistories.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (order !== null && order !== undefined) {
                localVarQueryParameter['order'] = order;
            }
            if (sortField !== null && sortField !== undefined) {
                localVarQueryParameter['sort_field'] = sortField;
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
         * 查询扩展日志文件列表。
         * 查询扩展日志文件列表，可以调用接口/v3/{project_id}/instances/{instance_id}/xellog-download 获取扩展日志下载链接
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listXellogFiles(listXellogFilesRequest?: ListXellogFilesRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/{instance_id}/xellog-files",
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

            if (listXellogFilesRequest !== null && listXellogFilesRequest !== undefined) {
                if (listXellogFilesRequest instanceof ListXellogFilesRequest) {
                    instanceId = listXellogFilesRequest.instanceId;
                    xLanguage = listXellogFilesRequest.xLanguage;
                    offset = listXellogFilesRequest.offset;
                    limit = listXellogFilesRequest.limit;
                } else {
                    instanceId = listXellogFilesRequest['instance_id'];
                    xLanguage = listXellogFilesRequest['X-Language'];
                    offset = listXellogFilesRequest['offset'];
                    limit = listXellogFilesRequest['limit'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listXellogFiles.');
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
         * 迁移主备实例的备机
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        migrateFollower(migrateFollowerRequest?: MigrateFollowerRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/{instance_id}/migrateslave",
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

            if (migrateFollowerRequest !== null && migrateFollowerRequest !== undefined) {
                if (migrateFollowerRequest instanceof MigrateFollowerRequest) {
                    instanceId = migrateFollowerRequest.instanceId;
                    body = migrateFollowerRequest.body
                    xLanguage = migrateFollowerRequest.xLanguage;
                } else {
                    instanceId = migrateFollowerRequest['instance_id'];
                    body = migrateFollowerRequest['body'];
                    xLanguage = migrateFollowerRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling migrateFollower.');
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
         * 修改/新增pg_hba.conf文件的单个或多个配置，以priority做唯一标识，priority不存在的新增，存在的修改
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        modifyPostgresqlHbaConf(modifyPostgresqlHbaConfRequest?: ModifyPostgresqlHbaConfRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/instances/{instance_id}/hba-info",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (modifyPostgresqlHbaConfRequest !== null && modifyPostgresqlHbaConfRequest !== undefined) {
                if (modifyPostgresqlHbaConfRequest instanceof ModifyPostgresqlHbaConfRequest) {
                    instanceId = modifyPostgresqlHbaConfRequest.instanceId;
                    body = modifyPostgresqlHbaConfRequest.body
                } else {
                    instanceId = modifyPostgresqlHbaConfRequest['instance_id'];
                    body = modifyPostgresqlHbaConfRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling modifyPostgresqlHbaConf.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

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
        modifyRdSforMySqlProxyRouteMode(modifyRdSforMySqlProxyRouteModeRequest?: ModifyRdSforMySqlProxyRouteModeRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/{instance_id}/proxy/{proxy_id}/route-mode",
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
            
            let contentType;
            
            let xLanguage;

            if (modifyRdSforMySqlProxyRouteModeRequest !== null && modifyRdSforMySqlProxyRouteModeRequest !== undefined) {
                if (modifyRdSforMySqlProxyRouteModeRequest instanceof ModifyRdSforMySqlProxyRouteModeRequest) {
                    instanceId = modifyRdSforMySqlProxyRouteModeRequest.instanceId;
                    proxyId = modifyRdSforMySqlProxyRouteModeRequest.proxyId;
                    body = modifyRdSforMySqlProxyRouteModeRequest.body
                    contentType = modifyRdSforMySqlProxyRouteModeRequest.contentType;
                    xLanguage = modifyRdSforMySqlProxyRouteModeRequest.xLanguage;
                } else {
                    instanceId = modifyRdSforMySqlProxyRouteModeRequest['instance_id'];
                    proxyId = modifyRdSforMySqlProxyRouteModeRequest['proxy_id'];
                    body = modifyRdSforMySqlProxyRouteModeRequest['body'];
                    contentType = modifyRdSforMySqlProxyRouteModeRequest['Content-Type'];
                    xLanguage = modifyRdSforMySqlProxyRouteModeRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling modifyRdSforMySqlProxyRouteMode.');
            }
            if (proxyId === null || proxyId === undefined) {
            throw new RequiredError('proxyId','Required parameter proxyId was null or undefined when calling modifyRdSforMySqlProxyRouteMode.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
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
         * 恢复到已有实例。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        restoreExistInstance(restoreExistInstanceRequest?: RestoreExistInstanceRequest) {
            const options = {
                method: "POST",
                url: "/v3.1/{project_id}/instances/recovery",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xLanguage;

            if (restoreExistInstanceRequest !== null && restoreExistInstanceRequest !== undefined) {
                if (restoreExistInstanceRequest instanceof RestoreExistInstanceRequest) {
                    body = restoreExistInstanceRequest.body
                    xLanguage = restoreExistInstanceRequest.xLanguage;
                } else {
                    body = restoreExistInstanceRequest['body'];
                    xLanguage = restoreExistInstanceRequest['X-Language'];
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
         * 表级时间点恢复(MySQL)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        restoreTables(restoreTablesRequest?: RestoreTablesRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/{instance_id}/restore/tables",
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

            if (restoreTablesRequest !== null && restoreTablesRequest !== undefined) {
                if (restoreTablesRequest instanceof RestoreTablesRequest) {
                    instanceId = restoreTablesRequest.instanceId;
                    body = restoreTablesRequest.body
                    xLanguage = restoreTablesRequest.xLanguage;
                } else {
                    instanceId = restoreTablesRequest['instance_id'];
                    body = restoreTablesRequest['body'];
                    xLanguage = restoreTablesRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling restoreTables.');
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
         * 表级时间点恢复(MySQL)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        restoreTablesNew(restoreTablesNewRequest?: RestoreTablesNewRequest) {
            const options = {
                method: "POST",
                url: "/v3.1/{project_id}/instances/{instance_id}/restore/tables",
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

            if (restoreTablesNewRequest !== null && restoreTablesNewRequest !== undefined) {
                if (restoreTablesNewRequest instanceof RestoreTablesNewRequest) {
                    instanceId = restoreTablesNewRequest.instanceId;
                    body = restoreTablesNewRequest.body
                    xLanguage = restoreTablesNewRequest.xLanguage;
                } else {
                    instanceId = restoreTablesNewRequest['instance_id'];
                    body = restoreTablesNewRequest['body'];
                    xLanguage = restoreTablesNewRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling restoreTablesNew.');
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
         * 恢复到已有实例。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        restoreToExistingInstance(restoreToExistingInstanceRequest?: RestoreToExistingInstanceRequest) {
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

            if (restoreToExistingInstanceRequest !== null && restoreToExistingInstanceRequest !== undefined) {
                if (restoreToExistingInstanceRequest instanceof RestoreToExistingInstanceRequest) {
                    body = restoreToExistingInstanceRequest.body
                    xLanguage = restoreToExistingInstanceRequest.xLanguage;
                } else {
                    body = restoreToExistingInstanceRequest['body'];
                    xLanguage = restoreToExistingInstanceRequest['X-Language'];
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
         * 设置审计日志策略。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        setAuditlogPolicy(setAuditlogPolicyRequest?: SetAuditlogPolicyRequest) {
            const options = {
                method: "PUT",
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
            
            let xLanguage;

            if (setAuditlogPolicyRequest !== null && setAuditlogPolicyRequest !== undefined) {
                if (setAuditlogPolicyRequest instanceof SetAuditlogPolicyRequest) {
                    instanceId = setAuditlogPolicyRequest.instanceId;
                    body = setAuditlogPolicyRequest.body
                    xLanguage = setAuditlogPolicyRequest.xLanguage;
                } else {
                    instanceId = setAuditlogPolicyRequest['instance_id'];
                    body = setAuditlogPolicyRequest['body'];
                    xLanguage = setAuditlogPolicyRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling setAuditlogPolicy.');
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
         * 设置实例存储空间自动扩容策略，按扩容量扣除存储费用。
         * 可用存储空间小于设置值或者10GB时，自动扩容当前存储空间的15%（非10倍数向上取整，账户余额不足，会导致自动扩容失败）。
         * 设置只读实例自动扩容与主实例自动扩容互不影响，对只读实例设置自动扩容时，可选择大于或等于主实例的存储空间。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        setAutoEnlargePolicy(setAutoEnlargePolicyRequest?: SetAutoEnlargePolicyRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/instances/{instance_id}/disk-auto-expansion",
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

            if (setAutoEnlargePolicyRequest !== null && setAutoEnlargePolicyRequest !== undefined) {
                if (setAutoEnlargePolicyRequest instanceof SetAutoEnlargePolicyRequest) {
                    instanceId = setAutoEnlargePolicyRequest.instanceId;
                    body = setAutoEnlargePolicyRequest.body
                    xLanguage = setAutoEnlargePolicyRequest.xLanguage;
                } else {
                    instanceId = setAutoEnlargePolicyRequest['instance_id'];
                    body = setAutoEnlargePolicyRequest['body'];
                    xLanguage = setAutoEnlargePolicyRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling setAutoEnlargePolicy.');
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
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改指定实例的binlog本地保留时长。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        setBinlogClearPolicy(setBinlogClearPolicyRequest?: SetBinlogClearPolicyRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/instances/{instance_id}/binlog/clear-policy",
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

            if (setBinlogClearPolicyRequest !== null && setBinlogClearPolicyRequest !== undefined) {
                if (setBinlogClearPolicyRequest instanceof SetBinlogClearPolicyRequest) {
                    instanceId = setBinlogClearPolicyRequest.instanceId;
                    body = setBinlogClearPolicyRequest.body
                    xLanguage = setBinlogClearPolicyRequest.xLanguage;
                } else {
                    instanceId = setBinlogClearPolicyRequest['instance_id'];
                    body = setBinlogClearPolicyRequest['body'];
                    xLanguage = setBinlogClearPolicyRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling setBinlogClearPolicy.');
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
         * 重启数据库代理。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        setInstancesProxyRestart(setInstancesProxyRestartRequest?: SetInstancesProxyRestartRequest) {
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
            
            let contentType;
            
            let xLanguage;

            if (setInstancesProxyRestartRequest !== null && setInstancesProxyRestartRequest !== undefined) {
                if (setInstancesProxyRestartRequest instanceof SetInstancesProxyRestartRequest) {
                    instanceId = setInstancesProxyRestartRequest.instanceId;
                    proxyId = setInstancesProxyRestartRequest.proxyId;
                    contentType = setInstancesProxyRestartRequest.contentType;
                    xLanguage = setInstancesProxyRestartRequest.xLanguage;
                } else {
                    instanceId = setInstancesProxyRestartRequest['instance_id'];
                    proxyId = setInstancesProxyRestartRequest['proxy_id'];
                    contentType = setInstancesProxyRestartRequest['Content-Type'];
                    xLanguage = setInstancesProxyRestartRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling setInstancesProxyRestart.');
            }
            if (proxyId === null || proxyId === undefined) {
            throw new RequiredError('proxyId','Required parameter proxyId was null or undefined when calling setInstancesProxyRestart.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.pathParams = { 'instance_id': instanceId,'proxy_id': proxyId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 关联LTS配置信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        setLogLtsConfigs(setLogLtsConfigsRequest?: SetLogLtsConfigsRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/{engine}/instances/logs/lts-configs",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let engine;
            
            let xLanguage;

            if (setLogLtsConfigsRequest !== null && setLogLtsConfigsRequest !== undefined) {
                if (setLogLtsConfigsRequest instanceof SetLogLtsConfigsRequest) {
                    engine = setLogLtsConfigsRequest.engine;
                    body = setLogLtsConfigsRequest.body
                    xLanguage = setLogLtsConfigsRequest.xLanguage;
                } else {
                    engine = setLogLtsConfigsRequest['engine'];
                    body = setLogLtsConfigsRequest['body'];
                    xLanguage = setLogLtsConfigsRequest['X-Language'];
                }
            }

        
            if (engine === null || engine === undefined) {
            throw new RequiredError('engine','Required parameter engine was null or undefined when calling setLogLtsConfigs.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'engine': engine, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 设置跨区域备份策略。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        setOffSiteBackupPolicy(setOffSiteBackupPolicyRequest?: SetOffSiteBackupPolicyRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/instances/{instance_id}/backups/offsite-policy",
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

            if (setOffSiteBackupPolicyRequest !== null && setOffSiteBackupPolicyRequest !== undefined) {
                if (setOffSiteBackupPolicyRequest instanceof SetOffSiteBackupPolicyRequest) {
                    instanceId = setOffSiteBackupPolicyRequest.instanceId;
                    body = setOffSiteBackupPolicyRequest.body
                    xLanguage = setOffSiteBackupPolicyRequest.xLanguage;
                } else {
                    instanceId = setOffSiteBackupPolicyRequest['instance_id'];
                    body = setOffSiteBackupPolicyRequest['body'];
                    xLanguage = setOffSiteBackupPolicyRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling setOffSiteBackupPolicy.');
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
         * 设置实例秒级监控策略，约五分钟后生效，对于1秒监控和5秒监控，计费方式为按需付费（每小时扣费一次）。
         * 设置只读实例秒级监控与主实例互不影响。
         * 规格变更到4U以下的实例，秒级监控功能会自动关闭。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        setSecondLevelMonitor(setSecondLevelMonitorRequest?: SetSecondLevelMonitorRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/instances/{instance_id}/second-level-monitor",
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

            if (setSecondLevelMonitorRequest !== null && setSecondLevelMonitorRequest !== undefined) {
                if (setSecondLevelMonitorRequest instanceof SetSecondLevelMonitorRequest) {
                    instanceId = setSecondLevelMonitorRequest.instanceId;
                    body = setSecondLevelMonitorRequest.body
                    xLanguage = setSecondLevelMonitorRequest.xLanguage;
                } else {
                    instanceId = setSecondLevelMonitorRequest['instance_id'];
                    body = setSecondLevelMonitorRequest['body'];
                    xLanguage = setSecondLevelMonitorRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling setSecondLevelMonitor.');
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
         * 修改安全组
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        setSecurityGroup(setSecurityGroupRequest?: SetSecurityGroupRequest) {
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
            
            let xLanguage;

            if (setSecurityGroupRequest !== null && setSecurityGroupRequest !== undefined) {
                if (setSecurityGroupRequest instanceof SetSecurityGroupRequest) {
                    instanceId = setSecurityGroupRequest.instanceId;
                    body = setSecurityGroupRequest.body
                    xLanguage = setSecurityGroupRequest.xLanguage;
                } else {
                    instanceId = setSecurityGroupRequest['instance_id'];
                    body = setSecurityGroupRequest['body'];
                    xLanguage = setSecurityGroupRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling setSecurityGroup.');
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
         * V3慢日志敏感信息的开关
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        setSensitiveSlowLog(setSensitiveSlowLogRequest?: SetSensitiveSlowLogRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/instances/{instance_id}/slowlog-sensitization/{status}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let status;
            
            let xLanguage;

            if (setSensitiveSlowLogRequest !== null && setSensitiveSlowLogRequest !== undefined) {
                if (setSensitiveSlowLogRequest instanceof SetSensitiveSlowLogRequest) {
                    instanceId = setSensitiveSlowLogRequest.instanceId;
                    status = setSensitiveSlowLogRequest.status;
                    xLanguage = setSensitiveSlowLogRequest.xLanguage;
                } else {
                    instanceId = setSensitiveSlowLogRequest['instance_id'];
                    status = setSensitiveSlowLogRequest['status'];
                    xLanguage = setSensitiveSlowLogRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling setSensitiveSlowLog.');
            }
            if (status === null || status === undefined) {
            throw new RequiredError('status','Required parameter status was null or undefined when calling setSensitiveSlowLog.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.pathParams = { 'instance_id': instanceId,'status': status, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 生成审计日志下载链接。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showAuditlogDownloadLink(showAuditlogDownloadLinkRequest?: ShowAuditlogDownloadLinkRequest) {
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
            
            let xLanguage;

            if (showAuditlogDownloadLinkRequest !== null && showAuditlogDownloadLinkRequest !== undefined) {
                if (showAuditlogDownloadLinkRequest instanceof ShowAuditlogDownloadLinkRequest) {
                    instanceId = showAuditlogDownloadLinkRequest.instanceId;
                    body = showAuditlogDownloadLinkRequest.body
                    xLanguage = showAuditlogDownloadLinkRequest.xLanguage;
                } else {
                    instanceId = showAuditlogDownloadLinkRequest['instance_id'];
                    body = showAuditlogDownloadLinkRequest['body'];
                    xLanguage = showAuditlogDownloadLinkRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showAuditlogDownloadLink.');
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
         * 查询实例存储空间自动扩容策略
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
            
            let xLanguage;

            if (showAutoEnlargePolicyRequest !== null && showAutoEnlargePolicyRequest !== undefined) {
                if (showAutoEnlargePolicyRequest instanceof ShowAutoEnlargePolicyRequest) {
                    instanceId = showAutoEnlargePolicyRequest.instanceId;
                    xLanguage = showAutoEnlargePolicyRequest.xLanguage;
                } else {
                    instanceId = showAutoEnlargePolicyRequest['instance_id'];
                    xLanguage = showAutoEnlargePolicyRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showAutoEnlargePolicy.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询实例可升级的目标版本
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showAvailableVersion(showAvailableVersionRequest?: ShowAvailableVersionRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/{instance_id}/major-version/available-version",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let xLanguage;

            if (showAvailableVersionRequest !== null && showAvailableVersionRequest !== undefined) {
                if (showAvailableVersionRequest instanceof ShowAvailableVersionRequest) {
                    instanceId = showAvailableVersionRequest.instanceId;
                    xLanguage = showAvailableVersionRequest.xLanguage;
                } else {
                    instanceId = showAvailableVersionRequest['instance_id'];
                    xLanguage = showAvailableVersionRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showAvailableVersion.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
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

            if (showBackupDownloadLinkRequest !== null && showBackupDownloadLinkRequest !== undefined) {
                if (showBackupDownloadLinkRequest instanceof ShowBackupDownloadLinkRequest) {
                    backupId = showBackupDownloadLinkRequest.backupId;
                    xLanguage = showBackupDownloadLinkRequest.xLanguage;
                } else {
                    backupId = showBackupDownloadLinkRequest['backup_id'];
                    xLanguage = showBackupDownloadLinkRequest['X-Language'];
                }
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
         * 查寻指定实例的binlog本地保留时长。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showBinlogClearPolicy(showBinlogClearPolicyRequest?: ShowBinlogClearPolicyRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/{instance_id}/binlog/clear-policy",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let xLanguage;

            if (showBinlogClearPolicyRequest !== null && showBinlogClearPolicyRequest !== undefined) {
                if (showBinlogClearPolicyRequest instanceof ShowBinlogClearPolicyRequest) {
                    instanceId = showBinlogClearPolicyRequest.instanceId;
                    xLanguage = showBinlogClearPolicyRequest.xLanguage;
                } else {
                    instanceId = showBinlogClearPolicyRequest['instance_id'];
                    xLanguage = showBinlogClearPolicyRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showBinlogClearPolicy.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取指定参数模板的参数。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showConfiguration(showConfigurationRequest?: ShowConfigurationRequest) {
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

            if (showConfigurationRequest !== null && showConfigurationRequest !== undefined) {
                if (showConfigurationRequest instanceof ShowConfigurationRequest) {
                    configId = showConfigurationRequest.configId;
                    xLanguage = showConfigurationRequest.xLanguage;
                } else {
                    configId = showConfigurationRequest['config_id'];
                    xLanguage = showConfigurationRequest['X-Language'];
                }
            }

        
            if (configId === null || configId === undefined) {
            throw new RequiredError('configId','Required parameter configId was null or undefined when calling showConfiguration.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.pathParams = { 'config_id': configId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询实例ipv6域名。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showDnsName(showDnsNameRequest?: ShowDnsNameRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/{instance_id}/dns-ipv6",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let dnsType;
            
            let xLanguage;

            if (showDnsNameRequest !== null && showDnsNameRequest !== undefined) {
                if (showDnsNameRequest instanceof ShowDnsNameRequest) {
                    instanceId = showDnsNameRequest.instanceId;
                    dnsType = showDnsNameRequest.dnsType;
                    xLanguage = showDnsNameRequest.xLanguage;
                } else {
                    instanceId = showDnsNameRequest['instance_id'];
                    dnsType = showDnsNameRequest['dns_type'];
                    xLanguage = showDnsNameRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showDnsName.');
            }
            if (dnsType === null || dnsType === undefined) {
                throw new RequiredError('dnsType','Required parameter dnsType was null or undefined when calling showDnsName.');
            }
            if (dnsType !== null && dnsType !== undefined) {
                localVarQueryParameter['dns_type'] = dnsType;
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
         * 查询实例ipv4域名
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showDomainName(showDomainNameRequest?: ShowDomainNameRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/{instance_id}/dns",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let dnsType;
            
            let xLanguage;

            if (showDomainNameRequest !== null && showDomainNameRequest !== undefined) {
                if (showDomainNameRequest instanceof ShowDomainNameRequest) {
                    instanceId = showDomainNameRequest.instanceId;
                    dnsType = showDomainNameRequest.dnsType;
                    xLanguage = showDomainNameRequest.xLanguage;
                } else {
                    instanceId = showDomainNameRequest['instance_id'];
                    dnsType = showDomainNameRequest['dns_type'];
                    xLanguage = showDomainNameRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showDomainName.');
            }
            if (dnsType === null || dnsType === undefined) {
                throw new RequiredError('dnsType','Required parameter dnsType was null or undefined when calling showDomainName.');
            }
            if (dnsType !== null && dnsType !== undefined) {
                localVarQueryParameter['dns_type'] = dnsType;
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
         * 建立跨云容灾关系后，查询主实例和灾备实例间的复制状态及延迟。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showDrReplicaStatus(showDrReplicaStatusRequest?: ShowDrReplicaStatusRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/{instance_id}/disaster-recovery",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let xLanguage;

            if (showDrReplicaStatusRequest !== null && showDrReplicaStatusRequest !== undefined) {
                if (showDrReplicaStatusRequest instanceof ShowDrReplicaStatusRequest) {
                    instanceId = showDrReplicaStatusRequest.instanceId;
                    xLanguage = showDrReplicaStatusRequest.xLanguage;
                } else {
                    instanceId = showDrReplicaStatusRequest['instance_id'];
                    xLanguage = showDrReplicaStatusRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showDrReplicaStatus.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取增备策略
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showIncreBackupPolicy1(showIncreBackupPolicy1Request?: ShowIncreBackupPolicy1Request) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/{instance_id}/incre-backup/policy",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;

            if (showIncreBackupPolicy1Request !== null && showIncreBackupPolicy1Request !== undefined) {
                if (showIncreBackupPolicy1Request instanceof ShowIncreBackupPolicy1Request) {
                    instanceId = showIncreBackupPolicy1Request.instanceId;
                } else {
                    instanceId = showIncreBackupPolicy1Request['instance_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showIncreBackupPolicy1.');
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
         * 查询跨区域备份策略。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showOffSiteBackupPolicy(showOffSiteBackupPolicyRequest?: ShowOffSiteBackupPolicyRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/{instance_id}/backups/offsite-policy",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let xLanguage;

            if (showOffSiteBackupPolicyRequest !== null && showOffSiteBackupPolicyRequest !== undefined) {
                if (showOffSiteBackupPolicyRequest instanceof ShowOffSiteBackupPolicyRequest) {
                    instanceId = showOffSiteBackupPolicyRequest.instanceId;
                    xLanguage = showOffSiteBackupPolicyRequest.xLanguage;
                } else {
                    instanceId = showOffSiteBackupPolicyRequest['instance_id'];
                    xLanguage = showOffSiteBackupPolicyRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showOffSiteBackupPolicy.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询当前项目下资源配额情况。
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
         * 查询回收站的回收策略。
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
         * 获取实例的复制状态。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showReplicationStatus(showReplicationStatusRequest?: ShowReplicationStatusRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/{instance_id}/replication/status",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let xLanguage;

            if (showReplicationStatusRequest !== null && showReplicationStatusRequest !== undefined) {
                if (showReplicationStatusRequest instanceof ShowReplicationStatusRequest) {
                    instanceId = showReplicationStatusRequest.instanceId;
                    xLanguage = showReplicationStatusRequest.xLanguage;
                } else {
                    instanceId = showReplicationStatusRequest['instance_id'];
                    xLanguage = showReplicationStatusRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showReplicationStatus.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询实例秒级监控策略
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showSecondLevelMonitoring(showSecondLevelMonitoringRequest?: ShowSecondLevelMonitoringRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/{instance_id}/second-level-monitor",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let xLanguage;

            if (showSecondLevelMonitoringRequest !== null && showSecondLevelMonitoringRequest !== undefined) {
                if (showSecondLevelMonitoringRequest instanceof ShowSecondLevelMonitoringRequest) {
                    instanceId = showSecondLevelMonitoringRequest.instanceId;
                    xLanguage = showSecondLevelMonitoringRequest.xLanguage;
                } else {
                    instanceId = showSecondLevelMonitoringRequest['instance_id'];
                    xLanguage = showSecondLevelMonitoringRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showSecondLevelMonitoring.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询实例磁盘空间使用量。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showStorageUsedSpace(showStorageUsedSpaceRequest?: ShowStorageUsedSpaceRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/{instance_id}/storage-used-space",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;

            if (showStorageUsedSpaceRequest !== null && showStorageUsedSpaceRequest !== undefined) {
                if (showStorageUsedSpaceRequest instanceof ShowStorageUsedSpaceRequest) {
                    instanceId = showStorageUsedSpaceRequest.instanceId;
                } else {
                    instanceId = showStorageUsedSpaceRequest['instance_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showStorageUsedSpace.');
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据实例id查询sqlserver TDE状态
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showTdeStatus(showTdeStatusRequest?: ShowTdeStatusRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/{instance_id}/tde-status",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;

            if (showTdeStatusRequest !== null && showTdeStatusRequest !== undefined) {
                if (showTdeStatusRequest instanceof ShowTdeStatusRequest) {
                    instanceId = showTdeStatusRequest.instanceId;
                } else {
                    instanceId = showTdeStatusRequest['instance_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showTdeStatus.');
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询大版本检查状态或升级状态。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showUpgradeDbMajorVersionStatus(showUpgradeDbMajorVersionStatusRequest?: ShowUpgradeDbMajorVersionStatusRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/{instance_id}/major-version/status",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let action;
            
            let xLanguage;

            if (showUpgradeDbMajorVersionStatusRequest !== null && showUpgradeDbMajorVersionStatusRequest !== undefined) {
                if (showUpgradeDbMajorVersionStatusRequest instanceof ShowUpgradeDbMajorVersionStatusRequest) {
                    instanceId = showUpgradeDbMajorVersionStatusRequest.instanceId;
                    action = showUpgradeDbMajorVersionStatusRequest.action;
                    xLanguage = showUpgradeDbMajorVersionStatusRequest.xLanguage;
                } else {
                    instanceId = showUpgradeDbMajorVersionStatusRequest['instance_id'];
                    action = showUpgradeDbMajorVersionStatusRequest['action'];
                    xLanguage = showUpgradeDbMajorVersionStatusRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showUpgradeDbMajorVersionStatus.');
            }
            if (action === null || action === undefined) {
                throw new RequiredError('action','Required parameter action was null or undefined when calling showUpgradeDbMajorVersionStatus.');
            }
            if (action !== null && action !== undefined) {
                localVarQueryParameter['action'] = action;
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
         * 手动倒换主备.
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        startFailover(startFailoverRequest?: StartFailoverRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/instances/{instance_id}/failover",
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

            if (startFailoverRequest !== null && startFailoverRequest !== undefined) {
                if (startFailoverRequest instanceof StartFailoverRequest) {
                    instanceId = startFailoverRequest.instanceId;
                    xLanguage = startFailoverRequest.xLanguage;
                    body = startFailoverRequest.body
                } else {
                    instanceId = startFailoverRequest['instance_id'];
                    xLanguage = startFailoverRequest['X-Language'];
                    body = startFailoverRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling startFailover.');
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
         * 扩容数据库实例的磁盘空间。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        startInstanceEnlargeVolumeAction(startInstanceEnlargeVolumeActionRequest?: StartInstanceEnlargeVolumeActionRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/{instance_id}/action",
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

            if (startInstanceEnlargeVolumeActionRequest !== null && startInstanceEnlargeVolumeActionRequest !== undefined) {
                if (startInstanceEnlargeVolumeActionRequest instanceof StartInstanceEnlargeVolumeActionRequest) {
                    instanceId = startInstanceEnlargeVolumeActionRequest.instanceId;
                    body = startInstanceEnlargeVolumeActionRequest.body
                    xLanguage = startInstanceEnlargeVolumeActionRequest.xLanguage;
                } else {
                    instanceId = startInstanceEnlargeVolumeActionRequest['instance_id'];
                    body = startInstanceEnlargeVolumeActionRequest['body'];
                    xLanguage = startInstanceEnlargeVolumeActionRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling startInstanceEnlargeVolumeAction.');
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
         * 数据库实例的磁盘空间缩容。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        startInstanceReduceVolumeAction(startInstanceReduceVolumeActionRequest?: StartInstanceReduceVolumeActionRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/{instance_id}/action",
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

            if (startInstanceReduceVolumeActionRequest !== null && startInstanceReduceVolumeActionRequest !== undefined) {
                if (startInstanceReduceVolumeActionRequest instanceof StartInstanceReduceVolumeActionRequest) {
                    instanceId = startInstanceReduceVolumeActionRequest.instanceId;
                    body = startInstanceReduceVolumeActionRequest.body
                    xLanguage = startInstanceReduceVolumeActionRequest.xLanguage;
                } else {
                    instanceId = startInstanceReduceVolumeActionRequest['instance_id'];
                    body = startInstanceReduceVolumeActionRequest['body'];
                    xLanguage = startInstanceReduceVolumeActionRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling startInstanceReduceVolumeAction.');
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
         * 重启数据库实例。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        startInstanceRestartAction(startInstanceRestartActionRequest?: StartInstanceRestartActionRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/{instance_id}/action",
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

            if (startInstanceRestartActionRequest !== null && startInstanceRestartActionRequest !== undefined) {
                if (startInstanceRestartActionRequest instanceof StartInstanceRestartActionRequest) {
                    instanceId = startInstanceRestartActionRequest.instanceId;
                    body = startInstanceRestartActionRequest.body
                    xLanguage = startInstanceRestartActionRequest.xLanguage;
                } else {
                    instanceId = startInstanceRestartActionRequest['instance_id'];
                    body = startInstanceRestartActionRequest['body'];
                    xLanguage = startInstanceRestartActionRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling startInstanceRestartAction.');
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
         * 单机转主备实例。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        startInstanceSingleToHaAction(startInstanceSingleToHaActionRequest?: StartInstanceSingleToHaActionRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/{instance_id}/action",
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

            if (startInstanceSingleToHaActionRequest !== null && startInstanceSingleToHaActionRequest !== undefined) {
                if (startInstanceSingleToHaActionRequest instanceof StartInstanceSingleToHaActionRequest) {
                    instanceId = startInstanceSingleToHaActionRequest.instanceId;
                    body = startInstanceSingleToHaActionRequest.body
                    xLanguage = startInstanceSingleToHaActionRequest.xLanguage;
                } else {
                    instanceId = startInstanceSingleToHaActionRequest['instance_id'];
                    body = startInstanceSingleToHaActionRequest['body'];
                    xLanguage = startInstanceSingleToHaActionRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling startInstanceSingleToHaAction.');
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
         * 设置回收站策略。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        startRecyclePolicy(startRecyclePolicyRequest?: StartRecyclePolicyRequest) {
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
            
            let xLanguage;

            if (startRecyclePolicyRequest !== null && startRecyclePolicyRequest !== undefined) {
                if (startRecyclePolicyRequest instanceof StartRecyclePolicyRequest) {
                    body = startRecyclePolicyRequest.body
                    xLanguage = startRecyclePolicyRequest.xLanguage;
                } else {
                    body = startRecyclePolicyRequest['body'];
                    xLanguage = startRecyclePolicyRequest['X-Language'];
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
         * 变更数据库实例的规格。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        startResizeFlavorAction(startResizeFlavorActionRequest?: StartResizeFlavorActionRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/{instance_id}/action",
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

            if (startResizeFlavorActionRequest !== null && startResizeFlavorActionRequest !== undefined) {
                if (startResizeFlavorActionRequest instanceof StartResizeFlavorActionRequest) {
                    instanceId = startResizeFlavorActionRequest.instanceId;
                    body = startResizeFlavorActionRequest.body
                    xLanguage = startResizeFlavorActionRequest.xLanguage;
                } else {
                    instanceId = startResizeFlavorActionRequest['instance_id'];
                    body = startResizeFlavorActionRequest['body'];
                    xLanguage = startResizeFlavorActionRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling startResizeFlavorAction.');
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
         * 停止实例以节省费用，在停止数据库实例后，支持手动重新开启实例。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        startupInstance(startupInstanceRequest?: StartupInstanceRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/{instance_id}/action/startup",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let xLanguage;

            if (startupInstanceRequest !== null && startupInstanceRequest !== undefined) {
                if (startupInstanceRequest instanceof StartupInstanceRequest) {
                    instanceId = startupInstanceRequest.instanceId;
                    xLanguage = startupInstanceRequest.xLanguage;
                } else {
                    instanceId = startupInstanceRequest['instance_id'];
                    xLanguage = startupInstanceRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling startupInstance.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 停止创建备份
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
         * 实例进行关机，通过暂时停止按需实例以节省费用，实例默认停止七天。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        stopInstance(stopInstanceRequest?: StopInstanceRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/{instance_id}/action/shutdown",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let xLanguage;

            if (stopInstanceRequest !== null && stopInstanceRequest !== undefined) {
                if (stopInstanceRequest instanceof StopInstanceRequest) {
                    instanceId = stopInstanceRequest.instanceId;
                    xLanguage = stopInstanceRequest.xLanguage;
                } else {
                    instanceId = stopInstanceRequest['instance_id'];
                    xLanguage = stopInstanceRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling stopInstance.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 开启/关闭/禁用所有SQL限流
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        switchSqlLimit(switchSqlLimitRequest?: SwitchSqlLimitRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/instances/{instance_id}/sql-limit/switch",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (switchSqlLimitRequest !== null && switchSqlLimitRequest !== undefined) {
                if (switchSqlLimitRequest instanceof SwitchSqlLimitRequest) {
                    instanceId = switchSqlLimitRequest.instanceId;
                    body = switchSqlLimitRequest.body
                } else {
                    instanceId = switchSqlLimitRequest['instance_id'];
                    body = switchSqlLimitRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling switchSqlLimit.');
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
         * 设置SSL数据加密。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        switchSsl(switchSslRequest?: SwitchSslRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/instances/{instance_id}/ssl",
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

            if (switchSslRequest !== null && switchSslRequest !== undefined) {
                if (switchSslRequest instanceof SwitchSslRequest) {
                    instanceId = switchSslRequest.instanceId;
                    body = switchSslRequest.body
                    xLanguage = switchSslRequest.xLanguage;
                } else {
                    instanceId = switchSslRequest['instance_id'];
                    body = switchSslRequest['body'];
                    xLanguage = switchSslRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling switchSsl.');
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
         * 解除节点只读状态接口
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        unlockNodeReadonlyStatus(unlockNodeReadonlyStatusRequest?: UnlockNodeReadonlyStatusRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/instances/{instance_id}/unlock-node-readonly-status",
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

            if (unlockNodeReadonlyStatusRequest !== null && unlockNodeReadonlyStatusRequest !== undefined) {
                if (unlockNodeReadonlyStatusRequest instanceof UnlockNodeReadonlyStatusRequest) {
                    instanceId = unlockNodeReadonlyStatusRequest.instanceId;
                    body = unlockNodeReadonlyStatusRequest.body
                    xLanguage = unlockNodeReadonlyStatusRequest.xLanguage;
                } else {
                    instanceId = unlockNodeReadonlyStatusRequest['instance_id'];
                    body = unlockNodeReadonlyStatusRequest['body'];
                    xLanguage = unlockNodeReadonlyStatusRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling unlockNodeReadonlyStatus.');
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
            
            let xLanguage;

            if (updateConfigurationRequest !== null && updateConfigurationRequest !== undefined) {
                if (updateConfigurationRequest instanceof UpdateConfigurationRequest) {
                    configId = updateConfigurationRequest.configId;
                    body = updateConfigurationRequest.body
                    xLanguage = updateConfigurationRequest.xLanguage;
                } else {
                    configId = updateConfigurationRequest['config_id'];
                    body = updateConfigurationRequest['body'];
                    xLanguage = updateConfigurationRequest['X-Language'];
                }
            }

        
            if (configId === null || configId === undefined) {
            throw new RequiredError('configId','Required parameter configId was null or undefined when calling updateConfiguration.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'config_id': configId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改内网地址
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateDataIp(updateDataIpRequest?: UpdateDataIpRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/instances/{instance_id}/ip",
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

            if (updateDataIpRequest !== null && updateDataIpRequest !== undefined) {
                if (updateDataIpRequest instanceof UpdateDataIpRequest) {
                    instanceId = updateDataIpRequest.instanceId;
                    body = updateDataIpRequest.body
                    xLanguage = updateDataIpRequest.xLanguage;
                } else {
                    instanceId = updateDataIpRequest['instance_id'];
                    body = updateDataIpRequest['body'];
                    xLanguage = updateDataIpRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updateDataIp.');
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
         * 修改域名
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateDnsName(updateDnsNameRequest?: UpdateDnsNameRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/instances/{instance_id}/modify-dns",
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

            if (updateDnsNameRequest !== null && updateDnsNameRequest !== undefined) {
                if (updateDnsNameRequest instanceof UpdateDnsNameRequest) {
                    instanceId = updateDnsNameRequest.instanceId;
                    body = updateDnsNameRequest.body
                    xLanguage = updateDnsNameRequest.xLanguage;
                } else {
                    instanceId = updateDnsNameRequest['instance_id'];
                    body = updateDnsNameRequest['body'];
                    xLanguage = updateDnsNameRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updateDnsName.');
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
         * 修改增备策略
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateIncreBackupPolicy1(updateIncreBackupPolicy1Request?: UpdateIncreBackupPolicy1Request) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/instances/{instance_id}/incre-backup/policy",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (updateIncreBackupPolicy1Request !== null && updateIncreBackupPolicy1Request !== undefined) {
                if (updateIncreBackupPolicy1Request instanceof UpdateIncreBackupPolicy1Request) {
                    instanceId = updateIncreBackupPolicy1Request.instanceId;
                    body = updateIncreBackupPolicy1Request.body
                } else {
                    instanceId = updateIncreBackupPolicy1Request['instance_id'];
                    body = updateIncreBackupPolicy1Request['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updateIncreBackupPolicy1.');
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
        updateInstanceConfigurationAsync(updateInstanceConfigurationAsyncRequest?: UpdateInstanceConfigurationAsyncRequest) {
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
            
            let xLanguage;

            if (updateInstanceConfigurationAsyncRequest !== null && updateInstanceConfigurationAsyncRequest !== undefined) {
                if (updateInstanceConfigurationAsyncRequest instanceof UpdateInstanceConfigurationAsyncRequest) {
                    instanceId = updateInstanceConfigurationAsyncRequest.instanceId;
                    body = updateInstanceConfigurationAsyncRequest.body
                    xLanguage = updateInstanceConfigurationAsyncRequest.xLanguage;
                } else {
                    instanceId = updateInstanceConfigurationAsyncRequest['instance_id'];
                    body = updateInstanceConfigurationAsyncRequest['body'];
                    xLanguage = updateInstanceConfigurationAsyncRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updateInstanceConfigurationAsync.');
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
         * 修改实例名称。
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
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改数据库端口
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updatePort(updatePortRequest?: UpdatePortRequest) {
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
            
            let xLanguage;

            if (updatePortRequest !== null && updatePortRequest !== undefined) {
                if (updatePortRequest instanceof UpdatePortRequest) {
                    instanceId = updatePortRequest.instanceId;
                    body = updatePortRequest.body
                    xLanguage = updatePortRequest.xLanguage;
                } else {
                    instanceId = updatePortRequest['instance_id'];
                    body = updatePortRequest['body'];
                    xLanguage = updatePortRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updatePort.');
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
         * 修改指定数据库实例的备注信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updatePostgresqlInstanceAlias(updatePostgresqlInstanceAliasRequest?: UpdatePostgresqlInstanceAliasRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/instances/{instance_id}/alias",
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

            if (updatePostgresqlInstanceAliasRequest !== null && updatePostgresqlInstanceAliasRequest !== undefined) {
                if (updatePostgresqlInstanceAliasRequest instanceof UpdatePostgresqlInstanceAliasRequest) {
                    instanceId = updatePostgresqlInstanceAliasRequest.instanceId;
                    body = updatePostgresqlInstanceAliasRequest.body
                    xLanguage = updatePostgresqlInstanceAliasRequest.xLanguage;
                } else {
                    instanceId = updatePostgresqlInstanceAliasRequest['instance_id'];
                    body = updatePostgresqlInstanceAliasRequest['body'];
                    xLanguage = updatePostgresqlInstanceAliasRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updatePostgresqlInstanceAlias.');
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
         * 修改SQL限流
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateSqlLimit(updateSqlLimitRequest?: UpdateSqlLimitRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/instances/{instance_id}/sql-limit/update",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (updateSqlLimitRequest !== null && updateSqlLimitRequest !== undefined) {
                if (updateSqlLimitRequest instanceof UpdateSqlLimitRequest) {
                    instanceId = updateSqlLimitRequest.instanceId;
                    body = updateSqlLimitRequest.body
                } else {
                    instanceId = updateSqlLimitRequest['instance_id'];
                    body = updateSqlLimitRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updateSqlLimit.');
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
         * sqlserverTDE开关。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateTdeStatus(updateTdeStatusRequest?: UpdateTdeStatusRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/instances/{instance_id}/tde",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (updateTdeStatusRequest !== null && updateTdeStatusRequest !== undefined) {
                if (updateTdeStatusRequest instanceof UpdateTdeStatusRequest) {
                    instanceId = updateTdeStatusRequest.instanceId;
                    body = updateTdeStatusRequest.body
                } else {
                    instanceId = updateTdeStatusRequest['instance_id'];
                    body = updateTdeStatusRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updateTdeStatus.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * PostgreSQL数据库升级大版本。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        upgradeDbMajorVersion(upgradeDbMajorVersionRequest?: UpgradeDbMajorVersionRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/{instance_id}/major-version/upgrade",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (upgradeDbMajorVersionRequest !== null && upgradeDbMajorVersionRequest !== undefined) {
                if (upgradeDbMajorVersionRequest instanceof UpgradeDbMajorVersionRequest) {
                    instanceId = upgradeDbMajorVersionRequest.instanceId;
                    body = upgradeDbMajorVersionRequest.body
                } else {
                    instanceId = upgradeDbMajorVersionRequest['instance_id'];
                    body = upgradeDbMajorVersionRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling upgradeDbMajorVersion.');
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
         * 大版本升级前进行升级检查。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        upgradeDbMajorVersionPreCheck(upgradeDbMajorVersionPreCheckRequest?: UpgradeDbMajorVersionPreCheckRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/{instance_id}/major-version/inspection",
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

            if (upgradeDbMajorVersionPreCheckRequest !== null && upgradeDbMajorVersionPreCheckRequest !== undefined) {
                if (upgradeDbMajorVersionPreCheckRequest instanceof UpgradeDbMajorVersionPreCheckRequest) {
                    instanceId = upgradeDbMajorVersionPreCheckRequest.instanceId;
                    body = upgradeDbMajorVersionPreCheckRequest.body
                    xLanguage = upgradeDbMajorVersionPreCheckRequest.xLanguage;
                } else {
                    instanceId = upgradeDbMajorVersionPreCheckRequest['instance_id'];
                    body = upgradeDbMajorVersionPreCheckRequest['body'];
                    xLanguage = upgradeDbMajorVersionPreCheckRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling upgradeDbMajorVersionPreCheck.');
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
         * 对实例进行小版本升级。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        upgradeDbVersion(upgradeDbVersionRequest?: UpgradeDbVersionRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/{instance_id}/action/db-upgrade",
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

            if (upgradeDbVersionRequest !== null && upgradeDbVersionRequest !== undefined) {
                if (upgradeDbVersionRequest instanceof UpgradeDbVersionRequest) {
                    instanceId = upgradeDbVersionRequest.instanceId;
                    xLanguage = upgradeDbVersionRequest.xLanguage;
                    body = upgradeDbVersionRequest.body
                } else {
                    instanceId = upgradeDbVersionRequest['instance_id'];
                    xLanguage = upgradeDbVersionRequest['X-Language'];
                    body = upgradeDbVersionRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling upgradeDbVersion.');
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
         * 对实例进行小版本升级。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        upgradeDbVersionNew(upgradeDbVersionNewRequest?: UpgradeDbVersionNewRequest) {
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
            
            let xLanguage;

            if (upgradeDbVersionNewRequest !== null && upgradeDbVersionNewRequest !== undefined) {
                if (upgradeDbVersionNewRequest instanceof UpgradeDbVersionNewRequest) {
                    instanceId = upgradeDbVersionNewRequest.instanceId;
                    xLanguage = upgradeDbVersionNewRequest.xLanguage;
                    body = upgradeDbVersionNewRequest.body
                } else {
                    instanceId = upgradeDbVersionNewRequest['instance_id'];
                    xLanguage = upgradeDbVersionNewRequest['X-Language'];
                    body = upgradeDbVersionNewRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling upgradeDbVersionNew.');
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
         * 查询API版本列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listApiVersion() {
            const options = {
                method: "GET",
                url: "/rds",
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
         * 查询API版本列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listApiVersionNew() {
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
         * 查询指定的API版本信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showApiVersion(showApiVersionRequest?: ShowApiVersionRequest) {
            const options = {
                method: "GET",
                url: "/rds/{version}",
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
    
        /**
         * 授权数据库帐号。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        allowDbUserPrivilege(allowDbUserPrivilegeRequest?: AllowDbUserPrivilegeRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/{instance_id}/db_privilege",
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

            if (allowDbUserPrivilegeRequest !== null && allowDbUserPrivilegeRequest !== undefined) {
                if (allowDbUserPrivilegeRequest instanceof AllowDbUserPrivilegeRequest) {
                    instanceId = allowDbUserPrivilegeRequest.instanceId;
                    body = allowDbUserPrivilegeRequest.body
                    xLanguage = allowDbUserPrivilegeRequest.xLanguage;
                } else {
                    instanceId = allowDbUserPrivilegeRequest['instance_id'];
                    body = allowDbUserPrivilegeRequest['body'];
                    xLanguage = allowDbUserPrivilegeRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling allowDbUserPrivilege.');
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
         * 创建数据库。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createDatabase(createDatabaseRequest?: CreateDatabaseRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/{instance_id}/database",
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
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 在指定实例中创建数据库帐号。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createDbUser(createDbUserRequest?: CreateDbUserRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/{instance_id}/db_user",
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
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除数据库。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteDatabase(deleteDatabaseRequest?: DeleteDatabaseRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{project_id}/instances/{instance_id}/database/{db_name}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let dbName;
            
            let xLanguage;

            if (deleteDatabaseRequest !== null && deleteDatabaseRequest !== undefined) {
                if (deleteDatabaseRequest instanceof DeleteDatabaseRequest) {
                    instanceId = deleteDatabaseRequest.instanceId;
                    dbName = deleteDatabaseRequest.dbName;
                    xLanguage = deleteDatabaseRequest.xLanguage;
                } else {
                    instanceId = deleteDatabaseRequest['instance_id'];
                    dbName = deleteDatabaseRequest['db_name'];
                    xLanguage = deleteDatabaseRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling deleteDatabase.');
            }
            if (dbName === null || dbName === undefined) {
            throw new RequiredError('dbName','Required parameter dbName was null or undefined when calling deleteDatabase.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.pathParams = { 'instance_id': instanceId,'db_name': dbName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除数据库用户。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteDbUser(deleteDbUserRequest?: DeleteDbUserRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{project_id}/instances/{instance_id}/db_user/{user_name}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let userName;
            
            let xLanguage;

            if (deleteDbUserRequest !== null && deleteDbUserRequest !== undefined) {
                if (deleteDbUserRequest instanceof DeleteDbUserRequest) {
                    instanceId = deleteDbUserRequest.instanceId;
                    userName = deleteDbUserRequest.userName;
                    xLanguage = deleteDbUserRequest.xLanguage;
                } else {
                    instanceId = deleteDbUserRequest['instance_id'];
                    userName = deleteDbUserRequest['user_name'];
                    xLanguage = deleteDbUserRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling deleteDbUser.');
            }
            if (userName === null || userName === undefined) {
            throw new RequiredError('userName','Required parameter userName was null or undefined when calling deleteDbUser.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.pathParams = { 'instance_id': instanceId,'user_name': userName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询指定用户的已授权数据库。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAuthorizedDatabases(listAuthorizedDatabasesRequest?: ListAuthorizedDatabasesRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/{instance_id}/db_user/database",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let userName;
            
            let page;
            
            let limit;
            
            let xLanguage;

            if (listAuthorizedDatabasesRequest !== null && listAuthorizedDatabasesRequest !== undefined) {
                if (listAuthorizedDatabasesRequest instanceof ListAuthorizedDatabasesRequest) {
                    instanceId = listAuthorizedDatabasesRequest.instanceId;
                    userName = listAuthorizedDatabasesRequest.userName;
                    page = listAuthorizedDatabasesRequest.page;
                    limit = listAuthorizedDatabasesRequest.limit;
                    xLanguage = listAuthorizedDatabasesRequest.xLanguage;
                } else {
                    instanceId = listAuthorizedDatabasesRequest['instance_id'];
                    userName = listAuthorizedDatabasesRequest['user-name'];
                    page = listAuthorizedDatabasesRequest['page'];
                    limit = listAuthorizedDatabasesRequest['limit'];
                    xLanguage = listAuthorizedDatabasesRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listAuthorizedDatabases.');
            }
            if (userName === null || userName === undefined) {
                throw new RequiredError('userName','Required parameter userName was null or undefined when calling listAuthorizedDatabases.');
            }
            if (userName !== null && userName !== undefined) {
                localVarQueryParameter['user-name'] = userName;
            }
            if (page === null || page === undefined) {
                throw new RequiredError('page','Required parameter page was null or undefined when calling listAuthorizedDatabases.');
            }
            if (page !== null && page !== undefined) {
                localVarQueryParameter['page'] = page;
            }
            if (limit === null || limit === undefined) {
                throw new RequiredError('limit','Required parameter limit was null or undefined when calling listAuthorizedDatabases.');
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
         * 查询指定数据库的已授权用户。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAuthorizedDbUsers(listAuthorizedDbUsersRequest?: ListAuthorizedDbUsersRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/{instance_id}/database/db_user",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let dbName;
            
            let page;
            
            let limit;
            
            let xLanguage;

            if (listAuthorizedDbUsersRequest !== null && listAuthorizedDbUsersRequest !== undefined) {
                if (listAuthorizedDbUsersRequest instanceof ListAuthorizedDbUsersRequest) {
                    instanceId = listAuthorizedDbUsersRequest.instanceId;
                    dbName = listAuthorizedDbUsersRequest.dbName;
                    page = listAuthorizedDbUsersRequest.page;
                    limit = listAuthorizedDbUsersRequest.limit;
                    xLanguage = listAuthorizedDbUsersRequest.xLanguage;
                } else {
                    instanceId = listAuthorizedDbUsersRequest['instance_id'];
                    dbName = listAuthorizedDbUsersRequest['db-name'];
                    page = listAuthorizedDbUsersRequest['page'];
                    limit = listAuthorizedDbUsersRequest['limit'];
                    xLanguage = listAuthorizedDbUsersRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listAuthorizedDbUsers.');
            }
            if (dbName === null || dbName === undefined) {
                throw new RequiredError('dbName','Required parameter dbName was null or undefined when calling listAuthorizedDbUsers.');
            }
            if (dbName !== null && dbName !== undefined) {
                localVarQueryParameter['db-name'] = dbName;
            }
            if (page === null || page === undefined) {
                throw new RequiredError('page','Required parameter page was null or undefined when calling listAuthorizedDbUsers.');
            }
            if (page !== null && page !== undefined) {
                localVarQueryParameter['page'] = page;
            }
            if (limit === null || limit === undefined) {
                throw new RequiredError('limit','Required parameter limit was null or undefined when calling listAuthorizedDbUsers.');
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
         * 查询数据库列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listDatabases(listDatabasesRequest?: ListDatabasesRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/{instance_id}/database/detail",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let page;
            
            let limit;
            
            let xLanguage;

            if (listDatabasesRequest !== null && listDatabasesRequest !== undefined) {
                if (listDatabasesRequest instanceof ListDatabasesRequest) {
                    instanceId = listDatabasesRequest.instanceId;
                    page = listDatabasesRequest.page;
                    limit = listDatabasesRequest.limit;
                    xLanguage = listDatabasesRequest.xLanguage;
                } else {
                    instanceId = listDatabasesRequest['instance_id'];
                    page = listDatabasesRequest['page'];
                    limit = listDatabasesRequest['limit'];
                    xLanguage = listDatabasesRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listDatabases.');
            }
            if (page === null || page === undefined) {
                throw new RequiredError('page','Required parameter page was null or undefined when calling listDatabases.');
            }
            if (page !== null && page !== undefined) {
                localVarQueryParameter['page'] = page;
            }
            if (limit === null || limit === undefined) {
                throw new RequiredError('limit','Required parameter limit was null or undefined when calling listDatabases.');
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
         * 查询数据库用户列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listDbUsers(listDbUsersRequest?: ListDbUsersRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/{instance_id}/db_user/detail",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let page;
            
            let limit;
            
            let xLanguage;

            if (listDbUsersRequest !== null && listDbUsersRequest !== undefined) {
                if (listDbUsersRequest instanceof ListDbUsersRequest) {
                    instanceId = listDbUsersRequest.instanceId;
                    page = listDbUsersRequest.page;
                    limit = listDbUsersRequest.limit;
                    xLanguage = listDbUsersRequest.xLanguage;
                } else {
                    instanceId = listDbUsersRequest['instance_id'];
                    page = listDbUsersRequest['page'];
                    limit = listDbUsersRequest['limit'];
                    xLanguage = listDbUsersRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listDbUsers.');
            }
            if (page === null || page === undefined) {
                throw new RequiredError('page','Required parameter page was null or undefined when calling listDbUsers.');
            }
            if (page !== null && page !== undefined) {
                localVarQueryParameter['page'] = page;
            }
            if (limit === null || limit === undefined) {
                throw new RequiredError('limit','Required parameter limit was null or undefined when calling listDbUsers.');
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
         * 重置数据库密码.
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        resetPwd(resetPwdRequest?: ResetPwdRequest) {
            const options = {
                method: "POST",
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
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 解除数据库帐号权限。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        revoke(revokeRequest?: RevokeRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{project_id}/instances/{instance_id}/db_privilege",
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

            if (revokeRequest !== null && revokeRequest !== undefined) {
                if (revokeRequest instanceof RevokeRequest) {
                    instanceId = revokeRequest.instanceId;
                    body = revokeRequest.body
                    xLanguage = revokeRequest.xLanguage;
                } else {
                    instanceId = revokeRequest['instance_id'];
                    body = revokeRequest['body'];
                    xLanguage = revokeRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling revoke.');
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
         * 设置数据库账号密码
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        setDbUserPwd(setDbUserPwdRequest?: SetDbUserPwdRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/{instance_id}/db_user/resetpwd",
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
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据业务需求，设置数据库用户只读
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        setReadOnlySwitch(setReadOnlySwitchRequest?: SetReadOnlySwitchRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/instances/{instance_id}/readonly-status",
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

            if (setReadOnlySwitchRequest !== null && setReadOnlySwitchRequest !== undefined) {
                if (setReadOnlySwitchRequest instanceof SetReadOnlySwitchRequest) {
                    instanceId = setReadOnlySwitchRequest.instanceId;
                    body = setReadOnlySwitchRequest.body
                    xLanguage = setReadOnlySwitchRequest.xLanguage;
                } else {
                    instanceId = setReadOnlySwitchRequest['instance_id'];
                    body = setReadOnlySwitchRequest['body'];
                    xLanguage = setReadOnlySwitchRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling setReadOnlySwitch.');
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
         * 修改指定实例中的数据库备注。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateDatabase(updateDatabaseRequest?: UpdateDatabaseRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/{instance_id}/database/update",
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

            if (updateDatabaseRequest !== null && updateDatabaseRequest !== undefined) {
                if (updateDatabaseRequest instanceof UpdateDatabaseRequest) {
                    instanceId = updateDatabaseRequest.instanceId;
                    body = updateDatabaseRequest.body
                    xLanguage = updateDatabaseRequest.xLanguage;
                } else {
                    instanceId = updateDatabaseRequest['instance_id'];
                    body = updateDatabaseRequest['body'];
                    xLanguage = updateDatabaseRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updateDatabase.');
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
         * 修改数据库用户名备注
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateDbUserComment(updateDbUserCommentRequest?: UpdateDbUserCommentRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/instances/{instance_id}/db-users/{user_name}/comment",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let userName;

            if (updateDbUserCommentRequest !== null && updateDbUserCommentRequest !== undefined) {
                if (updateDbUserCommentRequest instanceof UpdateDbUserCommentRequest) {
                    instanceId = updateDbUserCommentRequest.instanceId;
                    userName = updateDbUserCommentRequest.userName;
                    body = updateDbUserCommentRequest.body
                } else {
                    instanceId = updateDbUserCommentRequest['instance_id'];
                    userName = updateDbUserCommentRequest['user_name'];
                    body = updateDbUserCommentRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updateDbUserComment.');
            }
            if (userName === null || userName === undefined) {
            throw new RequiredError('userName','Required parameter userName was null or undefined when calling updateDbUserComment.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId,'user_name': userName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改实例下用户host信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateHostPrivilege(updateHostPrivilegeRequest?: UpdateHostPrivilegeRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/instances/{instance_id}/host-privilege",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (updateHostPrivilegeRequest !== null && updateHostPrivilegeRequest !== undefined) {
                if (updateHostPrivilegeRequest instanceof UpdateHostPrivilegeRequest) {
                    instanceId = updateHostPrivilegeRequest.instanceId;
                    body = updateHostPrivilegeRequest.body
                } else {
                    instanceId = updateHostPrivilegeRequest['instance_id'];
                    body = updateHostPrivilegeRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updateHostPrivilege.');
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
         * 在指定实例的数据库中, 设置帐号的权限。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        allowDbPrivilege(allowDbPrivilegeRequest?: AllowDbPrivilegeRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/{instance_id}/db_privilege",
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

            if (allowDbPrivilegeRequest !== null && allowDbPrivilegeRequest !== undefined) {
                if (allowDbPrivilegeRequest instanceof AllowDbPrivilegeRequest) {
                    instanceId = allowDbPrivilegeRequest.instanceId;
                    body = allowDbPrivilegeRequest.body
                    xLanguage = allowDbPrivilegeRequest.xLanguage;
                } else {
                    instanceId = allowDbPrivilegeRequest['instance_id'];
                    body = allowDbPrivilegeRequest['body'];
                    xLanguage = allowDbPrivilegeRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling allowDbPrivilege.');
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
         * 数据库代理实例进行规格变更。
         * 
         * - 调用接口前，您需要了解API 认证鉴权。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        changeProxyScale(changeProxyScaleRequest?: ChangeProxyScaleRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/{instance_id}/proxy/scale",
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

            if (changeProxyScaleRequest !== null && changeProxyScaleRequest !== undefined) {
                if (changeProxyScaleRequest instanceof ChangeProxyScaleRequest) {
                    instanceId = changeProxyScaleRequest.instanceId;
                    body = changeProxyScaleRequest.body
                    xLanguage = changeProxyScaleRequest.xLanguage;
                } else {
                    instanceId = changeProxyScaleRequest['instance_id'];
                    body = changeProxyScaleRequest['body'];
                    xLanguage = changeProxyScaleRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling changeProxyScale.');
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
         * 修改指定实例的读写分离延时阈值。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        changeTheDelayThreshold(changeTheDelayThresholdRequest?: ChangeTheDelayThresholdRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/instances/{instance_id}/proxy/delay-threshold",
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

            if (changeTheDelayThresholdRequest !== null && changeTheDelayThresholdRequest !== undefined) {
                if (changeTheDelayThresholdRequest instanceof ChangeTheDelayThresholdRequest) {
                    instanceId = changeTheDelayThresholdRequest.instanceId;
                    body = changeTheDelayThresholdRequest.body
                    xLanguage = changeTheDelayThresholdRequest.xLanguage;
                } else {
                    instanceId = changeTheDelayThresholdRequest['instance_id'];
                    body = changeTheDelayThresholdRequest['body'];
                    xLanguage = changeTheDelayThresholdRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling changeTheDelayThreshold.');
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
         * 在指定实例中创建数据库。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createPostgresqlDatabase(createPostgresqlDatabaseRequest?: CreatePostgresqlDatabaseRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/{instance_id}/database",
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

            if (createPostgresqlDatabaseRequest !== null && createPostgresqlDatabaseRequest !== undefined) {
                if (createPostgresqlDatabaseRequest instanceof CreatePostgresqlDatabaseRequest) {
                    instanceId = createPostgresqlDatabaseRequest.instanceId;
                    body = createPostgresqlDatabaseRequest.body
                    xLanguage = createPostgresqlDatabaseRequest.xLanguage;
                } else {
                    instanceId = createPostgresqlDatabaseRequest['instance_id'];
                    body = createPostgresqlDatabaseRequest['body'];
                    xLanguage = createPostgresqlDatabaseRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling createPostgresqlDatabase.');
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
         * 在指定实例的数据库中, 创建数据库schema。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createPostgresqlDatabaseSchema(createPostgresqlDatabaseSchemaRequest?: CreatePostgresqlDatabaseSchemaRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/{instance_id}/schema",
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

            if (createPostgresqlDatabaseSchemaRequest !== null && createPostgresqlDatabaseSchemaRequest !== undefined) {
                if (createPostgresqlDatabaseSchemaRequest instanceof CreatePostgresqlDatabaseSchemaRequest) {
                    instanceId = createPostgresqlDatabaseSchemaRequest.instanceId;
                    body = createPostgresqlDatabaseSchemaRequest.body
                    xLanguage = createPostgresqlDatabaseSchemaRequest.xLanguage;
                } else {
                    instanceId = createPostgresqlDatabaseSchemaRequest['instance_id'];
                    body = createPostgresqlDatabaseSchemaRequest['body'];
                    xLanguage = createPostgresqlDatabaseSchemaRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling createPostgresqlDatabaseSchema.');
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
         * 在指定实例中创建数据库用户。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createPostgresqlDbUser(createPostgresqlDbUserRequest?: CreatePostgresqlDbUserRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/{instance_id}/db_user",
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

            if (createPostgresqlDbUserRequest !== null && createPostgresqlDbUserRequest !== undefined) {
                if (createPostgresqlDbUserRequest instanceof CreatePostgresqlDbUserRequest) {
                    instanceId = createPostgresqlDbUserRequest.instanceId;
                    body = createPostgresqlDbUserRequest.body
                    xLanguage = createPostgresqlDbUserRequest.xLanguage;
                } else {
                    instanceId = createPostgresqlDbUserRequest['instance_id'];
                    body = createPostgresqlDbUserRequest['body'];
                    xLanguage = createPostgresqlDbUserRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling createPostgresqlDbUser.');
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
         * 在指定数据库上创建插件。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createPostgresqlExtension(createPostgresqlExtensionRequest?: CreatePostgresqlExtensionRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/{instance_id}/extensions",
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

            if (createPostgresqlExtensionRequest !== null && createPostgresqlExtensionRequest !== undefined) {
                if (createPostgresqlExtensionRequest instanceof CreatePostgresqlExtensionRequest) {
                    instanceId = createPostgresqlExtensionRequest.instanceId;
                    body = createPostgresqlExtensionRequest.body
                    xLanguage = createPostgresqlExtensionRequest.xLanguage;
                } else {
                    instanceId = createPostgresqlExtensionRequest['instance_id'];
                    body = createPostgresqlExtensionRequest['body'];
                    xLanguage = createPostgresqlExtensionRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling createPostgresqlExtension.');
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
         * 删除数据库。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deletePostgresqlDatabase(deletePostgresqlDatabaseRequest?: DeletePostgresqlDatabaseRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{project_id}/instances/{instance_id}/database/{db_name}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let dbName;
            
            let xLanguage;

            if (deletePostgresqlDatabaseRequest !== null && deletePostgresqlDatabaseRequest !== undefined) {
                if (deletePostgresqlDatabaseRequest instanceof DeletePostgresqlDatabaseRequest) {
                    instanceId = deletePostgresqlDatabaseRequest.instanceId;
                    dbName = deletePostgresqlDatabaseRequest.dbName;
                    xLanguage = deletePostgresqlDatabaseRequest.xLanguage;
                } else {
                    instanceId = deletePostgresqlDatabaseRequest['instance_id'];
                    dbName = deletePostgresqlDatabaseRequest['db_name'];
                    xLanguage = deletePostgresqlDatabaseRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling deletePostgresqlDatabase.');
            }
            if (dbName === null || dbName === undefined) {
            throw new RequiredError('dbName','Required parameter dbName was null or undefined when calling deletePostgresqlDatabase.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.pathParams = { 'instance_id': instanceId,'db_name': dbName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除数据库用户。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deletePostgresqlDbUser(deletePostgresqlDbUserRequest?: DeletePostgresqlDbUserRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{project_id}/instances/{instance_id}/db_user/{user_name}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let userName;
            
            let xLanguage;

            if (deletePostgresqlDbUserRequest !== null && deletePostgresqlDbUserRequest !== undefined) {
                if (deletePostgresqlDbUserRequest instanceof DeletePostgresqlDbUserRequest) {
                    instanceId = deletePostgresqlDbUserRequest.instanceId;
                    userName = deletePostgresqlDbUserRequest.userName;
                    xLanguage = deletePostgresqlDbUserRequest.xLanguage;
                } else {
                    instanceId = deletePostgresqlDbUserRequest['instance_id'];
                    userName = deletePostgresqlDbUserRequest['user_name'];
                    xLanguage = deletePostgresqlDbUserRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling deletePostgresqlDbUser.');
            }
            if (userName === null || userName === undefined) {
            throw new RequiredError('userName','Required parameter userName was null or undefined when calling deletePostgresqlDbUser.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.pathParams = { 'instance_id': instanceId,'user_name': userName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 在指定数据库上删除插件。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deletePostgresqlExtension(deletePostgresqlExtensionRequest?: DeletePostgresqlExtensionRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{project_id}/instances/{instance_id}/extensions",
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

            if (deletePostgresqlExtensionRequest !== null && deletePostgresqlExtensionRequest !== undefined) {
                if (deletePostgresqlExtensionRequest instanceof DeletePostgresqlExtensionRequest) {
                    instanceId = deletePostgresqlExtensionRequest.instanceId;
                    body = deletePostgresqlExtensionRequest.body
                    xLanguage = deletePostgresqlExtensionRequest.xLanguage;
                } else {
                    instanceId = deletePostgresqlExtensionRequest['instance_id'];
                    body = deletePostgresqlExtensionRequest['body'];
                    xLanguage = deletePostgresqlExtensionRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling deletePostgresqlExtension.');
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
         * 授予用户角色
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        executePrivilegeDatabaseUserRole(executePrivilegeDatabaseUserRoleRequest?: ExecutePrivilegeDatabaseUserRoleRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/{instance_id}/db-user-role",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (executePrivilegeDatabaseUserRoleRequest !== null && executePrivilegeDatabaseUserRoleRequest !== undefined) {
                if (executePrivilegeDatabaseUserRoleRequest instanceof ExecutePrivilegeDatabaseUserRoleRequest) {
                    instanceId = executePrivilegeDatabaseUserRoleRequest.instanceId;
                    body = executePrivilegeDatabaseUserRoleRequest.body
                } else {
                    instanceId = executePrivilegeDatabaseUserRoleRequest['instance_id'];
                    body = executePrivilegeDatabaseUserRoleRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling executePrivilegeDatabaseUserRole.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 撤回用户角色
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        executeRevokeDatabaseUserRole(executeRevokeDatabaseUserRoleRequest?: ExecuteRevokeDatabaseUserRoleRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{project_id}/instances/{instance_id}/db-user-role",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (executeRevokeDatabaseUserRoleRequest !== null && executeRevokeDatabaseUserRoleRequest !== undefined) {
                if (executeRevokeDatabaseUserRoleRequest instanceof ExecuteRevokeDatabaseUserRoleRequest) {
                    instanceId = executeRevokeDatabaseUserRoleRequest.instanceId;
                    body = executeRevokeDatabaseUserRoleRequest.body
                } else {
                    instanceId = executeRevokeDatabaseUserRoleRequest['instance_id'];
                    body = executeRevokeDatabaseUserRoleRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling executeRevokeDatabaseUserRole.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询数据库角色信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listDatabaseUserRole(listDatabaseUserRoleRequest?: ListDatabaseUserRoleRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/{instance_id}/roles",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let userName;

            if (listDatabaseUserRoleRequest !== null && listDatabaseUserRoleRequest !== undefined) {
                if (listDatabaseUserRoleRequest instanceof ListDatabaseUserRoleRequest) {
                    instanceId = listDatabaseUserRoleRequest.instanceId;
                    userName = listDatabaseUserRoleRequest.userName;
                } else {
                    instanceId = listDatabaseUserRoleRequest['instance_id'];
                    userName = listDatabaseUserRoleRequest['user_name'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listDatabaseUserRole.');
            }
            if (userName !== null && userName !== undefined) {
                localVarQueryParameter['user_name'] = userName;
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
        listPostgresqlDatabaseSchemas(listPostgresqlDatabaseSchemasRequest?: ListPostgresqlDatabaseSchemasRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/{instance_id}/schema/detail",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let dbName;
            
            let page;
            
            let limit;
            
            let xLanguage;

            if (listPostgresqlDatabaseSchemasRequest !== null && listPostgresqlDatabaseSchemasRequest !== undefined) {
                if (listPostgresqlDatabaseSchemasRequest instanceof ListPostgresqlDatabaseSchemasRequest) {
                    instanceId = listPostgresqlDatabaseSchemasRequest.instanceId;
                    dbName = listPostgresqlDatabaseSchemasRequest.dbName;
                    page = listPostgresqlDatabaseSchemasRequest.page;
                    limit = listPostgresqlDatabaseSchemasRequest.limit;
                    xLanguage = listPostgresqlDatabaseSchemasRequest.xLanguage;
                } else {
                    instanceId = listPostgresqlDatabaseSchemasRequest['instance_id'];
                    dbName = listPostgresqlDatabaseSchemasRequest['db_name'];
                    page = listPostgresqlDatabaseSchemasRequest['page'];
                    limit = listPostgresqlDatabaseSchemasRequest['limit'];
                    xLanguage = listPostgresqlDatabaseSchemasRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listPostgresqlDatabaseSchemas.');
            }
            if (dbName === null || dbName === undefined) {
                throw new RequiredError('dbName','Required parameter dbName was null or undefined when calling listPostgresqlDatabaseSchemas.');
            }
            if (dbName !== null && dbName !== undefined) {
                localVarQueryParameter['db_name'] = dbName;
            }
            if (page === null || page === undefined) {
                throw new RequiredError('page','Required parameter page was null or undefined when calling listPostgresqlDatabaseSchemas.');
            }
            if (page !== null && page !== undefined) {
                localVarQueryParameter['page'] = page;
            }
            if (limit === null || limit === undefined) {
                throw new RequiredError('limit','Required parameter limit was null or undefined when calling listPostgresqlDatabaseSchemas.');
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
        listPostgresqlDatabases(listPostgresqlDatabasesRequest?: ListPostgresqlDatabasesRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/{instance_id}/database/detail",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let page;
            
            let limit;
            
            let xLanguage;
            
            let db;

            if (listPostgresqlDatabasesRequest !== null && listPostgresqlDatabasesRequest !== undefined) {
                if (listPostgresqlDatabasesRequest instanceof ListPostgresqlDatabasesRequest) {
                    instanceId = listPostgresqlDatabasesRequest.instanceId;
                    page = listPostgresqlDatabasesRequest.page;
                    limit = listPostgresqlDatabasesRequest.limit;
                    xLanguage = listPostgresqlDatabasesRequest.xLanguage;
                    db = listPostgresqlDatabasesRequest.db;
                } else {
                    instanceId = listPostgresqlDatabasesRequest['instance_id'];
                    page = listPostgresqlDatabasesRequest['page'];
                    limit = listPostgresqlDatabasesRequest['limit'];
                    xLanguage = listPostgresqlDatabasesRequest['X-Language'];
                    db = listPostgresqlDatabasesRequest['db'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listPostgresqlDatabases.');
            }
            if (page === null || page === undefined) {
                throw new RequiredError('page','Required parameter page was null or undefined when calling listPostgresqlDatabases.');
            }
            if (page !== null && page !== undefined) {
                localVarQueryParameter['page'] = page;
            }
            if (limit === null || limit === undefined) {
                throw new RequiredError('limit','Required parameter limit was null or undefined when calling listPostgresqlDatabases.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (db !== null && db !== undefined) {
                localVarQueryParameter['db'] = db;
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
         * 在指定实例中查询数据库用户列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listPostgresqlDbUserPaginated(listPostgresqlDbUserPaginatedRequest?: ListPostgresqlDbUserPaginatedRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/{instance_id}/db_user/detail",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let page;
            
            let limit;
            
            let xLanguage;

            if (listPostgresqlDbUserPaginatedRequest !== null && listPostgresqlDbUserPaginatedRequest !== undefined) {
                if (listPostgresqlDbUserPaginatedRequest instanceof ListPostgresqlDbUserPaginatedRequest) {
                    instanceId = listPostgresqlDbUserPaginatedRequest.instanceId;
                    page = listPostgresqlDbUserPaginatedRequest.page;
                    limit = listPostgresqlDbUserPaginatedRequest.limit;
                    xLanguage = listPostgresqlDbUserPaginatedRequest.xLanguage;
                } else {
                    instanceId = listPostgresqlDbUserPaginatedRequest['instance_id'];
                    page = listPostgresqlDbUserPaginatedRequest['page'];
                    limit = listPostgresqlDbUserPaginatedRequest['limit'];
                    xLanguage = listPostgresqlDbUserPaginatedRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listPostgresqlDbUserPaginated.');
            }
            if (page === null || page === undefined) {
                throw new RequiredError('page','Required parameter page was null or undefined when calling listPostgresqlDbUserPaginated.');
            }
            if (page !== null && page !== undefined) {
                localVarQueryParameter['page'] = page;
            }
            if (limit === null || limit === undefined) {
                throw new RequiredError('limit','Required parameter limit was null or undefined when calling listPostgresqlDbUserPaginated.');
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
         * 获取指定数据库的插件信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listPostgresqlExtension(listPostgresqlExtensionRequest?: ListPostgresqlExtensionRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/{instance_id}/extensions",
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
            
            let offset;
            
            let limit;

            if (listPostgresqlExtensionRequest !== null && listPostgresqlExtensionRequest !== undefined) {
                if (listPostgresqlExtensionRequest instanceof ListPostgresqlExtensionRequest) {
                    instanceId = listPostgresqlExtensionRequest.instanceId;
                    databaseName = listPostgresqlExtensionRequest.databaseName;
                    xLanguage = listPostgresqlExtensionRequest.xLanguage;
                    offset = listPostgresqlExtensionRequest.offset;
                    limit = listPostgresqlExtensionRequest.limit;
                } else {
                    instanceId = listPostgresqlExtensionRequest['instance_id'];
                    databaseName = listPostgresqlExtensionRequest['database_name'];
                    xLanguage = listPostgresqlExtensionRequest['X-Language'];
                    offset = listPostgresqlExtensionRequest['offset'];
                    limit = listPostgresqlExtensionRequest['limit'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listPostgresqlExtension.');
            }
            if (databaseName === null || databaseName === undefined) {
                throw new RequiredError('databaseName','Required parameter databaseName was null or undefined when calling listPostgresqlExtension.');
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
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 解除数据库帐号权限
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        revokePostgresqlDbPrivilege(revokePostgresqlDbPrivilegeRequest?: RevokePostgresqlDbPrivilegeRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{project_id}/instances/{instance_id}/db_privilege",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (revokePostgresqlDbPrivilegeRequest !== null && revokePostgresqlDbPrivilegeRequest !== undefined) {
                if (revokePostgresqlDbPrivilegeRequest instanceof RevokePostgresqlDbPrivilegeRequest) {
                    instanceId = revokePostgresqlDbPrivilegeRequest.instanceId;
                    body = revokePostgresqlDbPrivilegeRequest.body
                } else {
                    instanceId = revokePostgresqlDbPrivilegeRequest['instance_id'];
                    body = revokePostgresqlDbPrivilegeRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling revokePostgresqlDbPrivilege.');
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
         * 查询数据库代理可变更的规格信息。
         * 
         * - 调用接口前，您需要了解API 认证鉴权。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        searchQueryScaleComputeFlavors(searchQueryScaleComputeFlavorsRequest?: SearchQueryScaleComputeFlavorsRequest) {
            const options = {
                method: "GET",
                url: "/v3.1/{project_id}/instances/{instance_id}/proxy/scale/flavors",
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

            if (searchQueryScaleComputeFlavorsRequest !== null && searchQueryScaleComputeFlavorsRequest !== undefined) {
                if (searchQueryScaleComputeFlavorsRequest instanceof SearchQueryScaleComputeFlavorsRequest) {
                    instanceId = searchQueryScaleComputeFlavorsRequest.instanceId;
                    xLanguage = searchQueryScaleComputeFlavorsRequest.xLanguage;
                    offset = searchQueryScaleComputeFlavorsRequest.offset;
                    limit = searchQueryScaleComputeFlavorsRequest.limit;
                } else {
                    instanceId = searchQueryScaleComputeFlavorsRequest['instance_id'];
                    xLanguage = searchQueryScaleComputeFlavorsRequest['X-Language'];
                    offset = searchQueryScaleComputeFlavorsRequest['offset'];
                    limit = searchQueryScaleComputeFlavorsRequest['limit'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling searchQueryScaleComputeFlavors.');
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
         * 查询数据库代理可变更的规格信息。
         * 
         * - 调用接口前，您需要了解API 认证鉴权。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        searchQueryScaleFlavors(searchQueryScaleFlavorsRequest?: SearchQueryScaleFlavorsRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/{instance_id}/proxy/scale/flavors",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let xLanguage;

            if (searchQueryScaleFlavorsRequest !== null && searchQueryScaleFlavorsRequest !== undefined) {
                if (searchQueryScaleFlavorsRequest instanceof SearchQueryScaleFlavorsRequest) {
                    instanceId = searchQueryScaleFlavorsRequest.instanceId;
                    xLanguage = searchQueryScaleFlavorsRequest.xLanguage;
                } else {
                    instanceId = searchQueryScaleFlavorsRequest['instance_id'];
                    xLanguage = searchQueryScaleFlavorsRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling searchQueryScaleFlavors.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 设置数据库用户权限：只读或可读写。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        setDatabaseUserPrivilege(setDatabaseUserPrivilegeRequest?: SetDatabaseUserPrivilegeRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/{instance_id}/user-privilege",
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

            if (setDatabaseUserPrivilegeRequest !== null && setDatabaseUserPrivilegeRequest !== undefined) {
                if (setDatabaseUserPrivilegeRequest instanceof SetDatabaseUserPrivilegeRequest) {
                    instanceId = setDatabaseUserPrivilegeRequest.instanceId;
                    body = setDatabaseUserPrivilegeRequest.body
                    xLanguage = setDatabaseUserPrivilegeRequest.xLanguage;
                } else {
                    instanceId = setDatabaseUserPrivilegeRequest['instance_id'];
                    body = setDatabaseUserPrivilegeRequest['body'];
                    xLanguage = setDatabaseUserPrivilegeRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling setDatabaseUserPrivilege.');
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
         * 重置指定数据库帐号的密码。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        setPostgresqlDbUserPwd(setPostgresqlDbUserPwdRequest?: SetPostgresqlDbUserPwdRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/{instance_id}/db_user/resetpwd",
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

            if (setPostgresqlDbUserPwdRequest !== null && setPostgresqlDbUserPwdRequest !== undefined) {
                if (setPostgresqlDbUserPwdRequest instanceof SetPostgresqlDbUserPwdRequest) {
                    instanceId = setPostgresqlDbUserPwdRequest.instanceId;
                    body = setPostgresqlDbUserPwdRequest.body
                    xLanguage = setPostgresqlDbUserPwdRequest.xLanguage;
                } else {
                    instanceId = setPostgresqlDbUserPwdRequest['instance_id'];
                    body = setPostgresqlDbUserPwdRequest['body'];
                    xLanguage = setPostgresqlDbUserPwdRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling setPostgresqlDbUserPwd.');
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
         * 查询指定实例的数据库代理详细信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showInformationAboutDatabaseProxy(showInformationAboutDatabaseProxyRequest?: ShowInformationAboutDatabaseProxyRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/{instance_id}/proxy",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let xLanguage;

            if (showInformationAboutDatabaseProxyRequest !== null && showInformationAboutDatabaseProxyRequest !== undefined) {
                if (showInformationAboutDatabaseProxyRequest instanceof ShowInformationAboutDatabaseProxyRequest) {
                    instanceId = showInformationAboutDatabaseProxyRequest.instanceId;
                    xLanguage = showInformationAboutDatabaseProxyRequest.xLanguage;
                } else {
                    instanceId = showInformationAboutDatabaseProxyRequest['instance_id'];
                    xLanguage = showInformationAboutDatabaseProxyRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showInformationAboutDatabaseProxy.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取实例指定参数的值。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showPostgresqlParamValue(showPostgresqlParamValueRequest?: ShowPostgresqlParamValueRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/{instance_id}/parameter/{name}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let name;
            
            let xLanguage;

            if (showPostgresqlParamValueRequest !== null && showPostgresqlParamValueRequest !== undefined) {
                if (showPostgresqlParamValueRequest instanceof ShowPostgresqlParamValueRequest) {
                    instanceId = showPostgresqlParamValueRequest.instanceId;
                    name = showPostgresqlParamValueRequest.name;
                    xLanguage = showPostgresqlParamValueRequest.xLanguage;
                } else {
                    instanceId = showPostgresqlParamValueRequest['instance_id'];
                    name = showPostgresqlParamValueRequest['name'];
                    xLanguage = showPostgresqlParamValueRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showPostgresqlParamValue.');
            }
            if (name === null || name === undefined) {
            throw new RequiredError('name','Required parameter name was null or undefined when calling showPostgresqlParamValue.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.pathParams = { 'instance_id': instanceId,'name': name, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取wal日志延迟回放状态
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showReplayDelayStatus(showReplayDelayStatusRequest?: ShowReplayDelayStatusRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/{instance_id}/replay-delay/show",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let xLanguage;

            if (showReplayDelayStatusRequest !== null && showReplayDelayStatusRequest !== undefined) {
                if (showReplayDelayStatusRequest instanceof ShowReplayDelayStatusRequest) {
                    instanceId = showReplayDelayStatusRequest.instanceId;
                    xLanguage = showReplayDelayStatusRequest.xLanguage;
                } else {
                    instanceId = showReplayDelayStatusRequest['instance_id'];
                    xLanguage = showReplayDelayStatusRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showReplayDelayStatus.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 为指定实例开启数据库代理。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        startDatabaseProxy(startDatabaseProxyRequest?: StartDatabaseProxyRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/{instance_id}/proxy",
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

            if (startDatabaseProxyRequest !== null && startDatabaseProxyRequest !== undefined) {
                if (startDatabaseProxyRequest instanceof StartDatabaseProxyRequest) {
                    instanceId = startDatabaseProxyRequest.instanceId;
                    body = startDatabaseProxyRequest.body
                    xLanguage = startDatabaseProxyRequest.xLanguage;
                } else {
                    instanceId = startDatabaseProxyRequest['instance_id'];
                    body = startDatabaseProxyRequest['body'];
                    xLanguage = startDatabaseProxyRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling startDatabaseProxy.');
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
         * 为指定实例关闭数据库代理。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        stopDatabaseProxy(stopDatabaseProxyRequest?: StopDatabaseProxyRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{project_id}/instances/{instance_id}/proxy",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let xLanguage;

            if (stopDatabaseProxyRequest !== null && stopDatabaseProxyRequest !== undefined) {
                if (stopDatabaseProxyRequest instanceof StopDatabaseProxyRequest) {
                    instanceId = stopDatabaseProxyRequest.instanceId;
                    xLanguage = stopDatabaseProxyRequest.xLanguage;
                } else {
                    instanceId = stopDatabaseProxyRequest['instance_id'];
                    xLanguage = stopDatabaseProxyRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling stopDatabaseProxy.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 中止/恢复wal日志回放
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        switchLogReplay(switchLogReplayRequest?: SwitchLogReplayRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/instances/{instance_id}/log-replay/update",
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

            if (switchLogReplayRequest !== null && switchLogReplayRequest !== undefined) {
                if (switchLogReplayRequest instanceof SwitchLogReplayRequest) {
                    instanceId = switchLogReplayRequest.instanceId;
                    xLanguage = switchLogReplayRequest.xLanguage;
                    body = switchLogReplayRequest.body
                } else {
                    instanceId = switchLogReplayRequest['instance_id'];
                    xLanguage = switchLogReplayRequest['X-Language'];
                    body = switchLogReplayRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling switchLogReplay.');
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
         * 修改数据库owner
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateDatabaseOwner(updateDatabaseOwnerRequest?: UpdateDatabaseOwnerRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/{instance_id}/database/owner",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (updateDatabaseOwnerRequest !== null && updateDatabaseOwnerRequest !== undefined) {
                if (updateDatabaseOwnerRequest instanceof UpdateDatabaseOwnerRequest) {
                    instanceId = updateDatabaseOwnerRequest.instanceId;
                    body = updateDatabaseOwnerRequest.body
                } else {
                    instanceId = updateDatabaseOwnerRequest['instance_id'];
                    body = updateDatabaseOwnerRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updateDatabaseOwner.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 数据库帐号授权。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateDbUserPrivilege(updateDbUserPrivilegeRequest?: UpdateDbUserPrivilegeRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/{instance_id}/db-user-privilege",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (updateDbUserPrivilegeRequest !== null && updateDbUserPrivilegeRequest !== undefined) {
                if (updateDbUserPrivilegeRequest instanceof UpdateDbUserPrivilegeRequest) {
                    instanceId = updateDbUserPrivilegeRequest.instanceId;
                    body = updateDbUserPrivilegeRequest.body
                } else {
                    instanceId = updateDbUserPrivilegeRequest['instance_id'];
                    body = updateDbUserPrivilegeRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updateDbUserPrivilege.');
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
         * 修改指定实例中的数据库备注。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updatePostgresqlDatabase(updatePostgresqlDatabaseRequest?: UpdatePostgresqlDatabaseRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/{instance_id}/database/update",
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

            if (updatePostgresqlDatabaseRequest !== null && updatePostgresqlDatabaseRequest !== undefined) {
                if (updatePostgresqlDatabaseRequest instanceof UpdatePostgresqlDatabaseRequest) {
                    instanceId = updatePostgresqlDatabaseRequest.instanceId;
                    body = updatePostgresqlDatabaseRequest.body
                    xLanguage = updatePostgresqlDatabaseRequest.xLanguage;
                } else {
                    instanceId = updatePostgresqlDatabaseRequest['instance_id'];
                    body = updatePostgresqlDatabaseRequest['body'];
                    xLanguage = updatePostgresqlDatabaseRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updatePostgresqlDatabase.');
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
         * 修改数据库用户名备注
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updatePostgresqlDbUserComment(updatePostgresqlDbUserCommentRequest?: UpdatePostgresqlDbUserCommentRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/instances/{instance_id}/db-users/{user_name}/comment",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let userName;

            if (updatePostgresqlDbUserCommentRequest !== null && updatePostgresqlDbUserCommentRequest !== undefined) {
                if (updatePostgresqlDbUserCommentRequest instanceof UpdatePostgresqlDbUserCommentRequest) {
                    instanceId = updatePostgresqlDbUserCommentRequest.instanceId;
                    userName = updatePostgresqlDbUserCommentRequest.userName;
                    body = updatePostgresqlDbUserCommentRequest.body
                } else {
                    instanceId = updatePostgresqlDbUserCommentRequest['instance_id'];
                    userName = updatePostgresqlDbUserCommentRequest['user_name'];
                    body = updatePostgresqlDbUserCommentRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updatePostgresqlDbUserComment.');
            }
            if (userName === null || userName === undefined) {
            throw new RequiredError('userName','Required parameter userName was null or undefined when calling updatePostgresqlDbUserComment.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId,'user_name': userName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 在指定数据库上更新插件。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updatePostgresqlExtension(updatePostgresqlExtensionRequest?: UpdatePostgresqlExtensionRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/instances/{instance_id}/extensions",
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

            if (updatePostgresqlExtensionRequest !== null && updatePostgresqlExtensionRequest !== undefined) {
                if (updatePostgresqlExtensionRequest instanceof UpdatePostgresqlExtensionRequest) {
                    instanceId = updatePostgresqlExtensionRequest.instanceId;
                    body = updatePostgresqlExtensionRequest.body
                    xLanguage = updatePostgresqlExtensionRequest.xLanguage;
                } else {
                    instanceId = updatePostgresqlExtensionRequest['instance_id'];
                    body = updatePostgresqlExtensionRequest['body'];
                    xLanguage = updatePostgresqlExtensionRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updatePostgresqlExtension.');
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
         * 修改实例指定参数的值。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updatePostgresqlParameterValue(updatePostgresqlParameterValueRequest?: UpdatePostgresqlParameterValueRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/instances/{instance_id}/parameter/{name}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let name;
            
            let xLanguage;

            if (updatePostgresqlParameterValueRequest !== null && updatePostgresqlParameterValueRequest !== undefined) {
                if (updatePostgresqlParameterValueRequest instanceof UpdatePostgresqlParameterValueRequest) {
                    instanceId = updatePostgresqlParameterValueRequest.instanceId;
                    name = updatePostgresqlParameterValueRequest.name;
                    body = updatePostgresqlParameterValueRequest.body
                    xLanguage = updatePostgresqlParameterValueRequest.xLanguage;
                } else {
                    instanceId = updatePostgresqlParameterValueRequest['instance_id'];
                    name = updatePostgresqlParameterValueRequest['name'];
                    body = updatePostgresqlParameterValueRequest['body'];
                    xLanguage = updatePostgresqlParameterValueRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updatePostgresqlParameterValue.');
            }
            if (name === null || name === undefined) {
            throw new RequiredError('name','Required parameter name was null or undefined when calling updatePostgresqlParameterValue.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId,'name': name, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改指定实例的读写分离权重。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateReadWeight(updateReadWeightRequest?: UpdateReadWeightRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/instances/{instance_id}/proxy/weight",
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

            if (updateReadWeightRequest !== null && updateReadWeightRequest !== undefined) {
                if (updateReadWeightRequest instanceof UpdateReadWeightRequest) {
                    instanceId = updateReadWeightRequest.instanceId;
                    body = updateReadWeightRequest.body
                    xLanguage = updateReadWeightRequest.xLanguage;
                } else {
                    instanceId = updateReadWeightRequest['instance_id'];
                    body = updateReadWeightRequest['body'];
                    xLanguage = updateReadWeightRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updateReadWeight.');
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
         * 授权数据库帐号。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        allowSqlserverDbUserPrivilege(allowSqlserverDbUserPrivilegeRequest?: AllowSqlserverDbUserPrivilegeRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/{instance_id}/db_privilege",
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

            if (allowSqlserverDbUserPrivilegeRequest !== null && allowSqlserverDbUserPrivilegeRequest !== undefined) {
                if (allowSqlserverDbUserPrivilegeRequest instanceof AllowSqlserverDbUserPrivilegeRequest) {
                    instanceId = allowSqlserverDbUserPrivilegeRequest.instanceId;
                    body = allowSqlserverDbUserPrivilegeRequest.body
                    xLanguage = allowSqlserverDbUserPrivilegeRequest.xLanguage;
                } else {
                    instanceId = allowSqlserverDbUserPrivilegeRequest['instance_id'];
                    body = allowSqlserverDbUserPrivilegeRequest['body'];
                    xLanguage = allowSqlserverDbUserPrivilegeRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling allowSqlserverDbUserPrivilege.');
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
         * 添加MSDTC相关主机host地址
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchAddMsdtcs(batchAddMsdtcsRequest?: BatchAddMsdtcsRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/{instance_id}/msdtc/host",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (batchAddMsdtcsRequest !== null && batchAddMsdtcsRequest !== undefined) {
                if (batchAddMsdtcsRequest instanceof BatchAddMsdtcsRequest) {
                    instanceId = batchAddMsdtcsRequest.instanceId;
                    body = batchAddMsdtcsRequest.body
                } else {
                    instanceId = batchAddMsdtcsRequest['instance_id'];
                    body = batchAddMsdtcsRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling batchAddMsdtcs.');
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
         * 创建数据库。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createSqlserverDatabase(createSqlserverDatabaseRequest?: CreateSqlserverDatabaseRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/{instance_id}/database",
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

            if (createSqlserverDatabaseRequest !== null && createSqlserverDatabaseRequest !== undefined) {
                if (createSqlserverDatabaseRequest instanceof CreateSqlserverDatabaseRequest) {
                    instanceId = createSqlserverDatabaseRequest.instanceId;
                    body = createSqlserverDatabaseRequest.body
                    xLanguage = createSqlserverDatabaseRequest.xLanguage;
                } else {
                    instanceId = createSqlserverDatabaseRequest['instance_id'];
                    body = createSqlserverDatabaseRequest['body'];
                    xLanguage = createSqlserverDatabaseRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling createSqlserverDatabase.');
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
         * 创建数据库用户。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createSqlserverDbUser(createSqlserverDbUserRequest?: CreateSqlserverDbUserRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/{instance_id}/db_user",
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

            if (createSqlserverDbUserRequest !== null && createSqlserverDbUserRequest !== undefined) {
                if (createSqlserverDbUserRequest instanceof CreateSqlserverDbUserRequest) {
                    instanceId = createSqlserverDbUserRequest.instanceId;
                    body = createSqlserverDbUserRequest.body
                    xLanguage = createSqlserverDbUserRequest.xLanguage;
                } else {
                    instanceId = createSqlserverDbUserRequest['instance_id'];
                    body = createSqlserverDbUserRequest['body'];
                    xLanguage = createSqlserverDbUserRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling createSqlserverDbUser.');
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
         * 删除数据库。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteSqlserverDatabase(deleteSqlserverDatabaseRequest?: DeleteSqlserverDatabaseRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{project_id}/instances/{instance_id}/database/{db_name}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let dbName;
            
            let xLanguage;

            if (deleteSqlserverDatabaseRequest !== null && deleteSqlserverDatabaseRequest !== undefined) {
                if (deleteSqlserverDatabaseRequest instanceof DeleteSqlserverDatabaseRequest) {
                    instanceId = deleteSqlserverDatabaseRequest.instanceId;
                    dbName = deleteSqlserverDatabaseRequest.dbName;
                    xLanguage = deleteSqlserverDatabaseRequest.xLanguage;
                    body = deleteSqlserverDatabaseRequest.body
                } else {
                    instanceId = deleteSqlserverDatabaseRequest['instance_id'];
                    dbName = deleteSqlserverDatabaseRequest['db_name'];
                    xLanguage = deleteSqlserverDatabaseRequest['X-Language'];
                    body = deleteSqlserverDatabaseRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling deleteSqlserverDatabase.');
            }
            if (dbName === null || dbName === undefined) {
            throw new RequiredError('dbName','Required parameter dbName was null or undefined when calling deleteSqlserverDatabase.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId,'db_name': dbName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除数据库。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteSqlserverDatabaseEx(deleteSqlserverDatabaseExRequest?: DeleteSqlserverDatabaseExRequest) {
            const options = {
                method: "DELETE",
                url: "/v3.1/{project_id}/instances/{instance_id}/database/{db_name}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let dbName;
            
            let xLanguage;

            if (deleteSqlserverDatabaseExRequest !== null && deleteSqlserverDatabaseExRequest !== undefined) {
                if (deleteSqlserverDatabaseExRequest instanceof DeleteSqlserverDatabaseExRequest) {
                    instanceId = deleteSqlserverDatabaseExRequest.instanceId;
                    dbName = deleteSqlserverDatabaseExRequest.dbName;
                    xLanguage = deleteSqlserverDatabaseExRequest.xLanguage;
                    body = deleteSqlserverDatabaseExRequest.body
                } else {
                    instanceId = deleteSqlserverDatabaseExRequest['instance_id'];
                    dbName = deleteSqlserverDatabaseExRequest['db_name'];
                    xLanguage = deleteSqlserverDatabaseExRequest['X-Language'];
                    body = deleteSqlserverDatabaseExRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling deleteSqlserverDatabaseEx.');
            }
            if (dbName === null || dbName === undefined) {
            throw new RequiredError('dbName','Required parameter dbName was null or undefined when calling deleteSqlserverDatabaseEx.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId,'db_name': dbName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除数据库用户。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteSqlserverDbUser(deleteSqlserverDbUserRequest?: DeleteSqlserverDbUserRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{project_id}/instances/{instance_id}/db_user/{user_name}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let userName;
            
            let xLanguage;

            if (deleteSqlserverDbUserRequest !== null && deleteSqlserverDbUserRequest !== undefined) {
                if (deleteSqlserverDbUserRequest instanceof DeleteSqlserverDbUserRequest) {
                    instanceId = deleteSqlserverDbUserRequest.instanceId;
                    userName = deleteSqlserverDbUserRequest.userName;
                    xLanguage = deleteSqlserverDbUserRequest.xLanguage;
                } else {
                    instanceId = deleteSqlserverDbUserRequest['instance_id'];
                    userName = deleteSqlserverDbUserRequest['user_name'];
                    xLanguage = deleteSqlserverDbUserRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling deleteSqlserverDbUser.');
            }
            if (userName === null || userName === undefined) {
            throw new RequiredError('userName','Required parameter userName was null or undefined when calling deleteSqlserverDbUser.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.pathParams = { 'instance_id': instanceId,'user_name': userName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询指定数据库的已授权用户。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAuthorizedSqlserverDbUsers(listAuthorizedSqlserverDbUsersRequest?: ListAuthorizedSqlserverDbUsersRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/{instance_id}/database/db_user",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let dbName;
            
            let page;
            
            let limit;
            
            let xLanguage;

            if (listAuthorizedSqlserverDbUsersRequest !== null && listAuthorizedSqlserverDbUsersRequest !== undefined) {
                if (listAuthorizedSqlserverDbUsersRequest instanceof ListAuthorizedSqlserverDbUsersRequest) {
                    instanceId = listAuthorizedSqlserverDbUsersRequest.instanceId;
                    dbName = listAuthorizedSqlserverDbUsersRequest.dbName;
                    page = listAuthorizedSqlserverDbUsersRequest.page;
                    limit = listAuthorizedSqlserverDbUsersRequest.limit;
                    xLanguage = listAuthorizedSqlserverDbUsersRequest.xLanguage;
                } else {
                    instanceId = listAuthorizedSqlserverDbUsersRequest['instance_id'];
                    dbName = listAuthorizedSqlserverDbUsersRequest['db-name'];
                    page = listAuthorizedSqlserverDbUsersRequest['page'];
                    limit = listAuthorizedSqlserverDbUsersRequest['limit'];
                    xLanguage = listAuthorizedSqlserverDbUsersRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listAuthorizedSqlserverDbUsers.');
            }
            if (dbName === null || dbName === undefined) {
                throw new RequiredError('dbName','Required parameter dbName was null or undefined when calling listAuthorizedSqlserverDbUsers.');
            }
            if (dbName !== null && dbName !== undefined) {
                localVarQueryParameter['db-name'] = dbName;
            }
            if (page === null || page === undefined) {
                throw new RequiredError('page','Required parameter page was null or undefined when calling listAuthorizedSqlserverDbUsers.');
            }
            if (page !== null && page !== undefined) {
                localVarQueryParameter['page'] = page;
            }
            if (limit === null || limit === undefined) {
                throw new RequiredError('limit','Required parameter limit was null or undefined when calling listAuthorizedSqlserverDbUsers.');
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
         * 查询MSDTC的hosts信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listMsdtcHosts(listMsdtcHostsRequest?: ListMsdtcHostsRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/{instance_id}/msdtc/hosts",
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

            if (listMsdtcHostsRequest !== null && listMsdtcHostsRequest !== undefined) {
                if (listMsdtcHostsRequest instanceof ListMsdtcHostsRequest) {
                    instanceId = listMsdtcHostsRequest.instanceId;
                    offset = listMsdtcHostsRequest.offset;
                    limit = listMsdtcHostsRequest.limit;
                } else {
                    instanceId = listMsdtcHostsRequest['instance_id'];
                    offset = listMsdtcHostsRequest['offset'];
                    limit = listMsdtcHostsRequest['limit'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listMsdtcHosts.');
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
        listSqlserverDatabases(listSqlserverDatabasesRequest?: ListSqlserverDatabasesRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/{instance_id}/database/detail",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let page;
            
            let limit;
            
            let xLanguage;
            
            let dbName;
            
            let recoverModel;

            if (listSqlserverDatabasesRequest !== null && listSqlserverDatabasesRequest !== undefined) {
                if (listSqlserverDatabasesRequest instanceof ListSqlserverDatabasesRequest) {
                    instanceId = listSqlserverDatabasesRequest.instanceId;
                    page = listSqlserverDatabasesRequest.page;
                    limit = listSqlserverDatabasesRequest.limit;
                    xLanguage = listSqlserverDatabasesRequest.xLanguage;
                    dbName = listSqlserverDatabasesRequest.dbName;
                    recoverModel = listSqlserverDatabasesRequest.recoverModel;
                } else {
                    instanceId = listSqlserverDatabasesRequest['instance_id'];
                    page = listSqlserverDatabasesRequest['page'];
                    limit = listSqlserverDatabasesRequest['limit'];
                    xLanguage = listSqlserverDatabasesRequest['X-Language'];
                    dbName = listSqlserverDatabasesRequest['db-name'];
                    recoverModel = listSqlserverDatabasesRequest['recover_model'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listSqlserverDatabases.');
            }
            if (page === null || page === undefined) {
                throw new RequiredError('page','Required parameter page was null or undefined when calling listSqlserverDatabases.');
            }
            if (page !== null && page !== undefined) {
                localVarQueryParameter['page'] = page;
            }
            if (limit === null || limit === undefined) {
                throw new RequiredError('limit','Required parameter limit was null or undefined when calling listSqlserverDatabases.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (dbName !== null && dbName !== undefined) {
                localVarQueryParameter['db-name'] = dbName;
            }
            if (recoverModel !== null && recoverModel !== undefined) {
                localVarQueryParameter['recover_model'] = recoverModel;
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
         * 查询数据库用户列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listSqlserverDbUsers(listSqlserverDbUsersRequest?: ListSqlserverDbUsersRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/{instance_id}/db_user/detail",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let page;
            
            let limit;
            
            let xLanguage;

            if (listSqlserverDbUsersRequest !== null && listSqlserverDbUsersRequest !== undefined) {
                if (listSqlserverDbUsersRequest instanceof ListSqlserverDbUsersRequest) {
                    instanceId = listSqlserverDbUsersRequest.instanceId;
                    page = listSqlserverDbUsersRequest.page;
                    limit = listSqlserverDbUsersRequest.limit;
                    xLanguage = listSqlserverDbUsersRequest.xLanguage;
                } else {
                    instanceId = listSqlserverDbUsersRequest['instance_id'];
                    page = listSqlserverDbUsersRequest['page'];
                    limit = listSqlserverDbUsersRequest['limit'];
                    xLanguage = listSqlserverDbUsersRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listSqlserverDbUsers.');
            }
            if (page === null || page === undefined) {
                throw new RequiredError('page','Required parameter page was null or undefined when calling listSqlserverDbUsers.');
            }
            if (page !== null && page !== undefined) {
                localVarQueryParameter['page'] = page;
            }
            if (limit === null || limit === undefined) {
                throw new RequiredError('limit','Required parameter limit was null or undefined when calling listSqlserverDbUsers.');
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
         * 修改实例字符集。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        modifyCollation(modifyCollationRequest?: ModifyCollationRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/instances/{instance_id}/collations",
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

            if (modifyCollationRequest !== null && modifyCollationRequest !== undefined) {
                if (modifyCollationRequest instanceof ModifyCollationRequest) {
                    instanceId = modifyCollationRequest.instanceId;
                    body = modifyCollationRequest.body
                    xLanguage = modifyCollationRequest.xLanguage;
                } else {
                    instanceId = modifyCollationRequest['instance_id'];
                    body = modifyCollationRequest['body'];
                    xLanguage = modifyCollationRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling modifyCollation.');
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
         * 解除数据库帐号权限。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        revokeSqlserverDbUserPrivilege(revokeSqlserverDbUserPrivilegeRequest?: RevokeSqlserverDbUserPrivilegeRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{project_id}/instances/{instance_id}/db_privilege",
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

            if (revokeSqlserverDbUserPrivilegeRequest !== null && revokeSqlserverDbUserPrivilegeRequest !== undefined) {
                if (revokeSqlserverDbUserPrivilegeRequest instanceof RevokeSqlserverDbUserPrivilegeRequest) {
                    instanceId = revokeSqlserverDbUserPrivilegeRequest.instanceId;
                    body = revokeSqlserverDbUserPrivilegeRequest.body
                    xLanguage = revokeSqlserverDbUserPrivilegeRequest.xLanguage;
                } else {
                    instanceId = revokeSqlserverDbUserPrivilegeRequest['instance_id'];
                    body = revokeSqlserverDbUserPrivilegeRequest['body'];
                    xLanguage = revokeSqlserverDbUserPrivilegeRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling revokeSqlserverDbUserPrivilege.');
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
         * 收缩数据库日志
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        setInstancesDbShrink(setInstancesDbShrinkRequest?: SetInstancesDbShrinkRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/{instance_id}/db_shrink",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (setInstancesDbShrinkRequest !== null && setInstancesDbShrinkRequest !== undefined) {
                if (setInstancesDbShrinkRequest instanceof SetInstancesDbShrinkRequest) {
                    instanceId = setInstancesDbShrinkRequest.instanceId;
                    body = setInstancesDbShrinkRequest.body
                } else {
                    instanceId = setInstancesDbShrinkRequest['instance_id'];
                    body = setInstancesDbShrinkRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling setInstancesDbShrink.');
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
         * 收缩数据库日志
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        setInstancesNewDbShrink(setInstancesNewDbShrinkRequest?: SetInstancesNewDbShrinkRequest) {
            const options = {
                method: "POST",
                url: "/v3.1/{project_id}/instances/{instance_id}/db-shrink",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (setInstancesNewDbShrinkRequest !== null && setInstancesNewDbShrinkRequest !== undefined) {
                if (setInstancesNewDbShrinkRequest instanceof SetInstancesNewDbShrinkRequest) {
                    instanceId = setInstancesNewDbShrinkRequest.instanceId;
                    body = setInstancesNewDbShrinkRequest.body
                } else {
                    instanceId = setInstancesNewDbShrinkRequest['instance_id'];
                    body = setInstancesNewDbShrinkRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling setInstancesNewDbShrink.');
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
    
    }
};

function newClient(client: HcClient): RdsClient {
    return new RdsClient(client);
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