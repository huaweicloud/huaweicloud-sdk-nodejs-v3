import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { AddDatabasePermissionRequest } from './model/AddDatabasePermissionRequest';
import { AddDatabasePermissionResponse } from './model/AddDatabasePermissionResponse';
import { ApplyConfigurationRequestBody } from './model/ApplyConfigurationRequestBody';
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
import { ChangeGaussMySqlInstanceSpecificationRequest } from './model/ChangeGaussMySqlInstanceSpecificationRequest';
import { ChangeGaussMySqlInstanceSpecificationResponse } from './model/ChangeGaussMySqlInstanceSpecificationResponse';
import { ChangeGaussMySqlProxySpecificationRequest } from './model/ChangeGaussMySqlProxySpecificationRequest';
import { ChangeGaussMySqlProxySpecificationResponse } from './model/ChangeGaussMySqlProxySpecificationResponse';
import { CloseMysqlProxyRequestBody } from './model/CloseMysqlProxyRequestBody';
import { ConfigurationSummary } from './model/ConfigurationSummary';
import { ConfigurationSummary2 } from './model/ConfigurationSummary2';
import { CreateConfigurationRequestBody } from './model/CreateConfigurationRequestBody';
import { CreateDatabaseList } from './model/CreateDatabaseList';
import { CreateDatabaseUserList } from './model/CreateDatabaseUserList';
import { CreateDatabaseUserRequest } from './model/CreateDatabaseUserRequest';
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
import { DatabasePermission } from './model/DatabasePermission';
import { DatastoreResult } from './model/DatastoreResult';
import { DedicatedComputeInfo } from './model/DedicatedComputeInfo';
import { DedicatedResource } from './model/DedicatedResource';
import { DedicatedResourceCapacity } from './model/DedicatedResourceCapacity';
import { DedicatedStorageInfo } from './model/DedicatedStorageInfo';
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
import { DeleteNodeSqlFilterRule } from './model/DeleteNodeSqlFilterRule';
import { DeleteNodeSqlFilterRuleInfo } from './model/DeleteNodeSqlFilterRuleInfo';
import { DeleteSqlFilterRuleReq } from './model/DeleteSqlFilterRuleReq';
import { DeleteSqlFilterRuleRequest } from './model/DeleteSqlFilterRuleRequest';
import { DeleteSqlFilterRuleResponse } from './model/DeleteSqlFilterRuleResponse';
import { DeleteTaskRecordRequest } from './model/DeleteTaskRecordRequest';
import { DeleteTaskRecordResponse } from './model/DeleteTaskRecordResponse';
import { DescribeBackupEncryptStatusRequest } from './model/DescribeBackupEncryptStatusRequest';
import { DescribeBackupEncryptStatusResponse } from './model/DescribeBackupEncryptStatusResponse';
import { EnlargeProxyRequest } from './model/EnlargeProxyRequest';
import { ExpandGaussMySqlInstanceVolumeRequest } from './model/ExpandGaussMySqlInstanceVolumeRequest';
import { ExpandGaussMySqlInstanceVolumeResponse } from './model/ExpandGaussMySqlInstanceVolumeResponse';
import { ExpandGaussMySqlProxyRequest } from './model/ExpandGaussMySqlProxyRequest';
import { ExpandGaussMySqlProxyResponse } from './model/ExpandGaussMySqlProxyResponse';
import { GaussMySqlDatabaseInfo } from './model/GaussMySqlDatabaseInfo';
import { GaussMySqlDatabaseUser } from './model/GaussMySqlDatabaseUser';
import { GetJobEntitiesInfoDetail } from './model/GetJobEntitiesInfoDetail';
import { GetJobInfoDetail } from './model/GetJobInfoDetail';
import { GetJobInstanceInfoDetail } from './model/GetJobInstanceInfoDetail';
import { GrantDatabasePermission } from './model/GrantDatabasePermission';
import { GrantDatabasePermissionRequestBody } from './model/GrantDatabasePermissionRequestBody';
import { InstanceTagItem } from './model/InstanceTagItem';
import { InvokeGaussMySqlInstanceSwitchOverRequest } from './model/InvokeGaussMySqlInstanceSwitchOverRequest';
import { InvokeGaussMySqlInstanceSwitchOverResponse } from './model/InvokeGaussMySqlInstanceSwitchOverResponse';
import { ListDeleteDatabaseUserRequest } from './model/ListDeleteDatabaseUserRequest';
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
import { ListGaussMySqlInstancesRequest } from './model/ListGaussMySqlInstancesRequest';
import { ListGaussMySqlInstancesResponse } from './model/ListGaussMySqlInstancesResponse';
import { ListGaussMysqlDatabaseInfo } from './model/ListGaussMysqlDatabaseInfo';
import { ListImmediateJobsRequest } from './model/ListImmediateJobsRequest';
import { ListImmediateJobsResponse } from './model/ListImmediateJobsResponse';
import { ListInstanceTagsRequest } from './model/ListInstanceTagsRequest';
import { ListInstanceTagsResponse } from './model/ListInstanceTagsResponse';
import { ListLtsErrorLogDetailsRequest } from './model/ListLtsErrorLogDetailsRequest';
import { ListLtsErrorLogDetailsResponse } from './model/ListLtsErrorLogDetailsResponse';
import { ListLtsSlowlogDetailsRequest } from './model/ListLtsSlowlogDetailsRequest';
import { ListLtsSlowlogDetailsResponse } from './model/ListLtsSlowlogDetailsResponse';
import { ListProjectTagsRequest } from './model/ListProjectTagsRequest';
import { ListProjectTagsResponse } from './model/ListProjectTagsResponse';
import { ListScheduleJobsRequest } from './model/ListScheduleJobsRequest';
import { ListScheduleJobsResponse } from './model/ListScheduleJobsResponse';
import { LtsLogErrorDetail } from './model/LtsLogErrorDetail';
import { LtsLogErrorQueryRequest } from './model/LtsLogErrorQueryRequest';
import { LtsLogSlowDetail } from './model/LtsLogSlowDetail';
import { LtsLogSlowQueryRequest } from './model/LtsLogSlowQueryRequest';
import { ModifyAliasRequest } from './model/ModifyAliasRequest';
import { ModifyBackupEncryptStatusRequest } from './model/ModifyBackupEncryptStatusRequest';
import { ModifyBackupEncryptStatusResponse } from './model/ModifyBackupEncryptStatusResponse';
import { ModifyBindEipRequest } from './model/ModifyBindEipRequest';
import { ModifyGaussMySqlProxyRouteModeRequest } from './model/ModifyGaussMySqlProxyRouteModeRequest';
import { ModifyGaussMySqlProxyRouteModeRequestBody } from './model/ModifyGaussMySqlProxyRouteModeRequestBody';
import { ModifyGaussMySqlProxyRouteModeResponse } from './model/ModifyGaussMySqlProxyRouteModeResponse';
import { ModifyInternalIpRequest } from './model/ModifyInternalIpRequest';
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
import { MysqlInstanceListInfo } from './model/MysqlInstanceListInfo';
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
import { MysqlUpdateBackupPolicyRequest } from './model/MysqlUpdateBackupPolicyRequest';
import { MysqlUpdateInstanceNameRequest } from './model/MysqlUpdateInstanceNameRequest';
import { MysqlVolume } from './model/MysqlVolume';
import { MysqlVolumeInfo } from './model/MysqlVolumeInfo';
import { NodeSqlFilterRule } from './model/NodeSqlFilterRule';
import { NodeSqlFilterRuleInfo } from './model/NodeSqlFilterRuleInfo';
import { NodeSqlFilterRulePattern } from './model/NodeSqlFilterRulePattern';
import { NodesWeight } from './model/NodesWeight';
import { OpenMysqlProxyRequestBody } from './model/OpenMysqlProxyRequestBody';
import { OperateAuditLogRequestV3Body } from './model/OperateAuditLogRequestV3Body';
import { OperateSqlFilterControlReq } from './model/OperateSqlFilterControlReq';
import { OperateSqlFilterRuleReq } from './model/OperateSqlFilterRuleReq';
import { ProjectQuotas } from './model/ProjectQuotas';
import { ProjectTagItem } from './model/ProjectTagItem';
import { ProxyTransactionSplitRequest } from './model/ProxyTransactionSplitRequest';
import { ProxyUpdateProxyConnectionPoolTypeRequest } from './model/ProxyUpdateProxyConnectionPoolTypeRequest';
import { Quota } from './model/Quota';
import { ResetDatabasePassword } from './model/ResetDatabasePassword';
import { ResetDatabasePasswordRequest } from './model/ResetDatabasePasswordRequest';
import { ResetGaussMySqlDatabasePasswordRequest } from './model/ResetGaussMySqlDatabasePasswordRequest';
import { ResetGaussMySqlDatabasePasswordResponse } from './model/ResetGaussMySqlDatabasePasswordResponse';
import { ResetGaussMySqlPasswordRequest } from './model/ResetGaussMySqlPasswordRequest';
import { ResetGaussMySqlPasswordResponse } from './model/ResetGaussMySqlPasswordResponse';
import { Resource } from './model/Resource';
import { ResourceTagItem } from './model/ResourceTagItem';
import { RestartGaussMySqlInstanceRequest } from './model/RestartGaussMySqlInstanceRequest';
import { RestartGaussMySqlInstanceResponse } from './model/RestartGaussMySqlInstanceResponse';
import { RestartGaussMySqlNodeRequest } from './model/RestartGaussMySqlNodeRequest';
import { RestartGaussMySqlNodeResponse } from './model/RestartGaussMySqlNodeResponse';
import { RestartNodeRequest } from './model/RestartNodeRequest';
import { RestoreOldInstanceRequest } from './model/RestoreOldInstanceRequest';
import { RestoreOldInstanceResponse } from './model/RestoreOldInstanceResponse';
import { RestoreRequest } from './model/RestoreRequest';
import { RestoreTimeInfo } from './model/RestoreTimeInfo';
import { ScheduleTask } from './model/ScheduleTask';
import { SetGaussMySqlProxyWeightRequest } from './model/SetGaussMySqlProxyWeightRequest';
import { SetGaussMySqlProxyWeightResponse } from './model/SetGaussMySqlProxyWeightResponse';
import { SetGaussMySqlQuotasRequest } from './model/SetGaussMySqlQuotasRequest';
import { SetGaussMySqlQuotasResponse } from './model/SetGaussMySqlQuotasResponse';
import { SetQuota } from './model/SetQuota';
import { SetQuotasRequestBody } from './model/SetQuotasRequestBody';
import { SetSqlFilterRuleRequest } from './model/SetSqlFilterRuleRequest';
import { SetSqlFilterRuleResponse } from './model/SetSqlFilterRuleResponse';
import { ShowAuditLogRequest } from './model/ShowAuditLogRequest';
import { ShowAuditLogResponse } from './model/ShowAuditLogResponse';
import { ShowBackupRestoreTimeRequest } from './model/ShowBackupRestoreTimeRequest';
import { ShowBackupRestoreTimeResponse } from './model/ShowBackupRestoreTimeResponse';
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
import { ShowGaussMySqlInstanceInfoRequest } from './model/ShowGaussMySqlInstanceInfoRequest';
import { ShowGaussMySqlInstanceInfoResponse } from './model/ShowGaussMySqlInstanceInfoResponse';
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
import { ShowInstanceMonitorExtendRequest } from './model/ShowInstanceMonitorExtendRequest';
import { ShowInstanceMonitorExtendResponse } from './model/ShowInstanceMonitorExtendResponse';
import { ShowSqlFilterControlRequest } from './model/ShowSqlFilterControlRequest';
import { ShowSqlFilterControlResponse } from './model/ShowSqlFilterControlResponse';
import { ShowSqlFilterRuleRequest } from './model/ShowSqlFilterRuleRequest';
import { ShowSqlFilterRuleResponse } from './model/ShowSqlFilterRuleResponse';
import { SqlFilterRule } from './model/SqlFilterRule';
import { SqlFilterRulePattern } from './model/SqlFilterRulePattern';
import { SwitchGaussMySqlConfigurationRequest } from './model/SwitchGaussMySqlConfigurationRequest';
import { SwitchGaussMySqlConfigurationResponse } from './model/SwitchGaussMySqlConfigurationResponse';
import { SwitchGaussMySqlInstanceSslRequest } from './model/SwitchGaussMySqlInstanceSslRequest';
import { SwitchGaussMySqlInstanceSslResponse } from './model/SwitchGaussMySqlInstanceSslResponse';
import { SwitchSSLRequest } from './model/SwitchSSLRequest';
import { TagItem } from './model/TagItem';
import { TaskDetailInfo } from './model/TaskDetailInfo';
import { TaurusModifyInstanceMonitorRequestBody } from './model/TaurusModifyInstanceMonitorRequestBody';
import { TaurusModifyProxyWeightRequest } from './model/TaurusModifyProxyWeightRequest';
import { TaurusProxyScaleRequest } from './model/TaurusProxyScaleRequest';
import { TaurusRestartInstanceRequest } from './model/TaurusRestartInstanceRequest';
import { TaurusSwitchoverRequest } from './model/TaurusSwitchoverRequest';
import { UpdateAuditLogRequest } from './model/UpdateAuditLogRequest';
import { UpdateAuditLogResponse } from './model/UpdateAuditLogResponse';
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
import { UpdateInstanceMonitorRequest } from './model/UpdateInstanceMonitorRequest';
import { UpdateInstanceMonitorResponse } from './model/UpdateInstanceMonitorResponse';
import { UpdateProxyConnectionPoolTypeRequest } from './model/UpdateProxyConnectionPoolTypeRequest';
import { UpdateProxyConnectionPoolTypeResponse } from './model/UpdateProxyConnectionPoolTypeResponse';
import { UpdateProxyPortRequest } from './model/UpdateProxyPortRequest';
import { UpdateProxyPortRequestBody } from './model/UpdateProxyPortRequestBody';
import { UpdateProxyPortResponse } from './model/UpdateProxyPortResponse';
import { UpdateProxySessionConsistenceRequest } from './model/UpdateProxySessionConsistenceRequest';
import { UpdateProxySessionConsistenceResponse } from './model/UpdateProxySessionConsistenceResponse';
import { UpdateSqlFilterControlRequest } from './model/UpdateSqlFilterControlRequest';
import { UpdateSqlFilterControlResponse } from './model/UpdateSqlFilterControlResponse';
import { UpdateTransactionSplitStatusRequest } from './model/UpdateTransactionSplitStatusRequest';
import { UpdateTransactionSplitStatusResponse } from './model/UpdateTransactionSplitStatusResponse';
import { UpgradeDatabaseRequest } from './model/UpgradeDatabaseRequest';
import { UpgradeGaussMySqlInstanceDatabaseRequest } from './model/UpgradeGaussMySqlInstanceDatabaseRequest';
import { UpgradeGaussMySqlInstanceDatabaseResponse } from './model/UpgradeGaussMySqlInstanceDatabaseResponse';

export class GaussDBClient {
    public static newBuilder(): ClientBuilder<GaussDBClient> {
            return new ClientBuilder<GaussDBClient>(newClient);
    }

    private hcClient: HcClient;
    public constructor(client: HcClient) {
        this.hcClient = client;
    }

    public getPath() {
        return __dirname;
    }


    /**
     * 授予云数据库 GaussDB(for MySQL)实例数据库用户数据库权限。
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
     * 创建云数据库 GaussDB(for MySQL)实例数据库。
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
     * 创建云数据库GaussDB(for MySQL)实例数据库用户。
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
     * 创建云数据库GaussDB(for MySQL)实例。
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
     * 删除云数据库 GaussDB(for MySQL)实例数据库用户的数据库权限。
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
     * @param {string} backupId 备份文件ID。
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
     * 删除云数据库 GaussDB(for MySQL)实例数据库。
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
     * 删除云数据库 GaussDB(for MySQL)实例数据库用户。
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
     * 查询 GaussDB(for MySQL)实例数据库。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询数据库列表
     * @param {string} instanceId 实例ID。
     * @param {string} [xLanguage] 语言。
     * @param {number} [offset] 索引位置，偏移量。从第一条数据偏移offset条数据后开始查询，默认为0（偏移0条数据，表示从第一条数据开始查询），必须为数字，不能为负数。
     * @param {number} [limit] 查询记录数。默认为100，不能为负数，最小值为1，最大值为100。
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
     * 查询云数据库 GaussDB(for MySQL)实例数据库可用字符集。
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
     * 查询云数据库 GaussDB(for MySQL)实例数据库用户。
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
     * 修改云数据库 GaussDB(for MySQL)实例数据库用户密码。
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
     * 查询备份列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询备份列表
     * @param {string} [xLanguage] 语言。
     * @param {string} [instanceId] 实例ID。
     * @param {string} [backupId] 备份ID。
     * @param {string} [backupType] 备份类型，取值：  - \&quot;auto\&quot;：自动全量备份。 - \&quot;manual\&quot;：手动全量备份。
     * @param {string} [offset] 索引位置，偏移量。从第一条数据偏移offset条数据后开始查询，默认为0（偏移0条数据，表示从第一条数据开始查询），必须为数字，不能为负数。
     * @param {string} [limit] 查询记录数。默认为100，不能为负数，最小值为1，最大值为100。
     * @param {string} [beginTime] 查询开始时间，格式为“yyyy-mm-ddThh:mm:ssZ”。  其中，T指某个时间的开始；Z指时区偏移量，例如偏移1个小时显示为+0100。
     * @param {string} [endTime] 查询结束时间，格式为“yyyy-mm-ddThh:mm:ssZ”，且大于查询开始时间。  其中，T指某个时间的开始；Z指时区偏移量，例如偏移1个小时显示为+0100。
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
     * 获取GaussDB(for MySQL)任务中心指定ID的任务信息。
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
     * 修改云数据库 GaussDB(for MySQL)实例数据库备注。
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
     * 修改云数据库 GaussDB(for MySQL)实例数据库用户备注。
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
}

export const ParamCreater = function () {
    return {
    
        /**
         * 授予云数据库 GaussDB(for MySQL)实例数据库用户数据库权限。
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
         * 创建云数据库 GaussDB(for MySQL)实例数据库。
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
         * 创建云数据库GaussDB(for MySQL)实例数据库用户。
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
         * 创建云数据库GaussDB(for MySQL)实例。
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
         * 删除云数据库 GaussDB(for MySQL)实例数据库用户的数据库权限。
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
         * 删除云数据库 GaussDB(for MySQL)实例数据库。
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
         * 删除云数据库 GaussDB(for MySQL)实例数据库用户。
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
         * 查询 GaussDB(for MySQL)实例数据库。
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

            if (listGaussMySqlDatabaseRequest !== null && listGaussMySqlDatabaseRequest !== undefined) {
                if (listGaussMySqlDatabaseRequest instanceof ListGaussMySqlDatabaseRequest) {
                    instanceId = listGaussMySqlDatabaseRequest.instanceId;
                    xLanguage = listGaussMySqlDatabaseRequest.xLanguage;
                    offset = listGaussMySqlDatabaseRequest.offset;
                    limit = listGaussMySqlDatabaseRequest.limit;
                } else {
                    instanceId = listGaussMySqlDatabaseRequest['instance_id'];
                    xLanguage = listGaussMySqlDatabaseRequest['X-Language'];
                    offset = listGaussMySqlDatabaseRequest['offset'];
                    limit = listGaussMySqlDatabaseRequest['limit'];
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
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询云数据库 GaussDB(for MySQL)实例数据库可用字符集。
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
         * 查询云数据库 GaussDB(for MySQL)实例数据库用户。
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
         * 修改云数据库 GaussDB(for MySQL)实例数据库用户密码。
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
         * 查询备份列表。
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
                } else {
                    xLanguage = showGaussMySqlBackupListRequest['X-Language'];
                    instanceId = showGaussMySqlBackupListRequest['instance_id'];
                    backupId = showGaussMySqlBackupListRequest['backup_id'];
                    backupType = showGaussMySqlBackupListRequest['backup_type'];
                    offset = showGaussMySqlBackupListRequest['offset'];
                    limit = showGaussMySqlBackupListRequest['limit'];
                    beginTime = showGaussMySqlBackupListRequest['begin_time'];
                    endTime = showGaussMySqlBackupListRequest['end_time'];
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
         * 获取GaussDB(for MySQL)任务中心指定ID的任务信息。
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
         * 修改云数据库 GaussDB(for MySQL)实例数据库备注。
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
         * 修改云数据库 GaussDB(for MySQL)实例数据库用户备注。
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