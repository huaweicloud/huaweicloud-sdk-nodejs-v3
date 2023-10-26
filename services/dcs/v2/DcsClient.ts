import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { AclAccountModifyPasswordBody } from './model/AclAccountModifyPasswordBody';
import { AclAccountResetPasswordBody } from './model/AclAccountResetPasswordBody';
import { AclAccountResp } from './model/AclAccountResp';
import { AclAccountRoleModifyBody } from './model/AclAccountRoleModifyBody';
import { AdditionalBackupRequest } from './model/AdditionalBackupRequest';
import { AttrsObject } from './model/AttrsObject';
import { AutoscanConfigRequest } from './model/AutoscanConfigRequest';
import { AvailableZones } from './model/AvailableZones';
import { BackupFilesBody } from './model/BackupFilesBody';
import { BackupInstanceBody } from './model/BackupInstanceBody';
import { BackupPlan } from './model/BackupPlan';
import { BackupPolicy } from './model/BackupPolicy';
import { BackupRecordResponse } from './model/BackupRecordResponse';
import { BandwidthInfo } from './model/BandwidthInfo';
import { BatchCreateOrDeleteTagsRequest } from './model/BatchCreateOrDeleteTagsRequest';
import { BatchCreateOrDeleteTagsResponse } from './model/BatchCreateOrDeleteTagsResponse';
import { BatchDeleteBody } from './model/BatchDeleteBody';
import { BatchDeleteInstancesRequest } from './model/BatchDeleteInstancesRequest';
import { BatchDeleteInstancesResponse } from './model/BatchDeleteInstancesResponse';
import { BatchOpsResult } from './model/BatchOpsResult';
import { BatchShowNodesInformationRequest } from './model/BatchShowNodesInformationRequest';
import { BatchShowNodesInformationResponse } from './model/BatchShowNodesInformationResponse';
import { BatchStopMigrationTasksBody } from './model/BatchStopMigrationTasksBody';
import { BatchStopMigrationTasksRequest } from './model/BatchStopMigrationTasksRequest';
import { BatchStopMigrationTasksResponse } from './model/BatchStopMigrationTasksResponse';
import { BigkeysBody } from './model/BigkeysBody';
import { BssParam } from './model/BssParam';
import { BssParamEntity } from './model/BssParamEntity';
import { ChangeInstanceStatusBody } from './model/ChangeInstanceStatusBody';
import { ChangeMasterStandbyRequest } from './model/ChangeMasterStandbyRequest';
import { ChangeMasterStandbyResponse } from './model/ChangeMasterStandbyResponse';
import { CheckMigrationConnectivityRequest } from './model/CheckMigrationConnectivityRequest';
import { CheckMigrationConnectivityResponse } from './model/CheckMigrationConnectivityResponse';
import { ClusterRedisNodeMonitoredObject } from './model/ClusterRedisNodeMonitoredObject';
import { CommandTimeTaken } from './model/CommandTimeTaken';
import { CommandTimeTakenList } from './model/CommandTimeTakenList';
import { ConclusionItem } from './model/ConclusionItem';
import { ConfigMigrationInstanceBody } from './model/ConfigMigrationInstanceBody';
import { ConfigTemplatesListInfo } from './model/ConfigTemplatesListInfo';
import { CopyInstanceRequest } from './model/CopyInstanceRequest';
import { CopyInstanceResponse } from './model/CopyInstanceResponse';
import { CreateAclAccountRequest } from './model/CreateAclAccountRequest';
import { CreateAclAccountRequestBody } from './model/CreateAclAccountRequestBody';
import { CreateAclAccountResponse } from './model/CreateAclAccountResponse';
import { CreateAutoExpireScanTaskRequest } from './model/CreateAutoExpireScanTaskRequest';
import { CreateAutoExpireScanTaskResponse } from './model/CreateAutoExpireScanTaskResponse';
import { CreateBigkeyScanTaskRequest } from './model/CreateBigkeyScanTaskRequest';
import { CreateBigkeyScanTaskResponse } from './model/CreateBigkeyScanTaskResponse';
import { CreateConnectivityTestRequest } from './model/CreateConnectivityTestRequest';
import { CreateConnectivityTestRequestBody } from './model/CreateConnectivityTestRequestBody';
import { CreateConnectivityTestResponse } from './model/CreateConnectivityTestResponse';
import { CreateCustomTemplateBody } from './model/CreateCustomTemplateBody';
import { CreateCustomTemplateRequest } from './model/CreateCustomTemplateRequest';
import { CreateCustomTemplateResponse } from './model/CreateCustomTemplateResponse';
import { CreateDiagnosisTaskBody } from './model/CreateDiagnosisTaskBody';
import { CreateDiagnosisTaskRequest } from './model/CreateDiagnosisTaskRequest';
import { CreateDiagnosisTaskResponse } from './model/CreateDiagnosisTaskResponse';
import { CreateHotkeyScanTaskRequest } from './model/CreateHotkeyScanTaskRequest';
import { CreateHotkeyScanTaskResponse } from './model/CreateHotkeyScanTaskResponse';
import { CreateInstanceBody } from './model/CreateInstanceBody';
import { CreateInstanceRequest } from './model/CreateInstanceRequest';
import { CreateInstanceResponse } from './model/CreateInstanceResponse';
import { CreateMigrationTaskBody } from './model/CreateMigrationTaskBody';
import { CreateMigrationTaskRequest } from './model/CreateMigrationTaskRequest';
import { CreateMigrationTaskResponse } from './model/CreateMigrationTaskResponse';
import { CreateOnlineMigrationTaskBody } from './model/CreateOnlineMigrationTaskBody';
import { CreateOnlineMigrationTaskRequest } from './model/CreateOnlineMigrationTaskRequest';
import { CreateOnlineMigrationTaskResponse } from './model/CreateOnlineMigrationTaskResponse';
import { CreateOrDeleteInstanceTags } from './model/CreateOrDeleteInstanceTags';
import { CreateOrUpdateBackUpInfoRequest } from './model/CreateOrUpdateBackUpInfoRequest';
import { CreateOrUpdateBackUpInfoResponse } from './model/CreateOrUpdateBackUpInfoResponse';
import { CreateRedislogDownloadLinkRequest } from './model/CreateRedislogDownloadLinkRequest';
import { CreateRedislogDownloadLinkResponse } from './model/CreateRedislogDownloadLinkResponse';
import { CreateRedislogRequest } from './model/CreateRedislogRequest';
import { CreateRedislogResponse } from './model/CreateRedislogResponse';
import { DeleteAclAccountRequest } from './model/DeleteAclAccountRequest';
import { DeleteAclAccountResponse } from './model/DeleteAclAccountResponse';
import { DeleteBackgroundTaskRequest } from './model/DeleteBackgroundTaskRequest';
import { DeleteBackgroundTaskResponse } from './model/DeleteBackgroundTaskResponse';
import { DeleteBackupFileRequest } from './model/DeleteBackupFileRequest';
import { DeleteBackupFileResponse } from './model/DeleteBackupFileResponse';
import { DeleteBigkeyScanTaskRequest } from './model/DeleteBigkeyScanTaskRequest';
import { DeleteBigkeyScanTaskResponse } from './model/DeleteBigkeyScanTaskResponse';
import { DeleteConfigTemplateRequest } from './model/DeleteConfigTemplateRequest';
import { DeleteConfigTemplateResponse } from './model/DeleteConfigTemplateResponse';
import { DeleteHotkeyScanTaskRequest } from './model/DeleteHotkeyScanTaskRequest';
import { DeleteHotkeyScanTaskResponse } from './model/DeleteHotkeyScanTaskResponse';
import { DeleteIpFromDomainNameRequest } from './model/DeleteIpFromDomainNameRequest';
import { DeleteIpFromDomainNameResponse } from './model/DeleteIpFromDomainNameResponse';
import { DeleteMigrateTaskRequest } from './model/DeleteMigrateTaskRequest';
import { DeleteMigrationTaskRequest } from './model/DeleteMigrationTaskRequest';
import { DeleteMigrationTaskResponse } from './model/DeleteMigrationTaskResponse';
import { DeleteSingleInstanceRequest } from './model/DeleteSingleInstanceRequest';
import { DeleteSingleInstanceResponse } from './model/DeleteSingleInstanceResponse';
import { DetailsBody } from './model/DetailsBody';
import { DiagnosisDimension } from './model/DiagnosisDimension';
import { DiagnosisItem } from './model/DiagnosisItem';
import { DiagnosisNodeReport } from './model/DiagnosisNodeReport';
import { DiagnosisReportInfo } from './model/DiagnosisReportInfo';
import { DimChild } from './model/DimChild';
import { DomainNameEntity } from './model/DomainNameEntity';
import { DomainNameInfo } from './model/DomainNameInfo';
import { DownloadBackupFilesReq } from './model/DownloadBackupFilesReq';
import { ExchangeInstanceIpRequest } from './model/ExchangeInstanceIpRequest';
import { ExchangeInstanceIpResponse } from './model/ExchangeInstanceIpResponse';
import { ExecuteClusterSwitchoverRequest } from './model/ExecuteClusterSwitchoverRequest';
import { ExecuteClusterSwitchoverResponse } from './model/ExecuteClusterSwitchoverResponse';
import { ExecuteCommandMobilizationRequest } from './model/ExecuteCommandMobilizationRequest';
import { ExecuteCommandMobilizationResponse } from './model/ExecuteCommandMobilizationResponse';
import { ExecuteCommandRequestBody } from './model/ExecuteCommandRequestBody';
import { Features } from './model/Features';
import { Files } from './model/Files';
import { FlavorAzObject } from './model/FlavorAzObject';
import { FlavorsItems } from './model/FlavorsItems';
import { HistoryInfo } from './model/HistoryInfo';
import { HotkeysBody } from './model/HotkeysBody';
import { InstanceBackupPolicy } from './model/InstanceBackupPolicy';
import { InstanceGroupListInfo } from './model/InstanceGroupListInfo';
import { InstanceListInfo } from './model/InstanceListInfo';
import { InstanceNodesInfoResp } from './model/InstanceNodesInfoResp';
import { InstanceReplicationDimensionsInfo } from './model/InstanceReplicationDimensionsInfo';
import { InstanceReplicationListInfo } from './model/InstanceReplicationListInfo';
import { InstanceRestoreInfo } from './model/InstanceRestoreInfo';
import { InstanceStatistic } from './model/InstanceStatistic';
import { Instances } from './model/Instances';
import { InstancesMonitoredObject } from './model/InstancesMonitoredObject';
import { IpExchangeRequest } from './model/IpExchangeRequest';
import { LinksItem } from './model/LinksItem';
import { ListAclAccountsRequest } from './model/ListAclAccountsRequest';
import { ListAclAccountsResponse } from './model/ListAclAccountsResponse';
import { ListAvailableZonesRequest } from './model/ListAvailableZonesRequest';
import { ListAvailableZonesResponse } from './model/ListAvailableZonesResponse';
import { ListBackgroundTaskRequest } from './model/ListBackgroundTaskRequest';
import { ListBackgroundTaskResponse } from './model/ListBackgroundTaskResponse';
import { ListBackupFileLinksRequest } from './model/ListBackupFileLinksRequest';
import { ListBackupFileLinksResponse } from './model/ListBackupFileLinksResponse';
import { ListBackupRecordsRequest } from './model/ListBackupRecordsRequest';
import { ListBackupRecordsResponse } from './model/ListBackupRecordsResponse';
import { ListBigkeyScanTasksRequest } from './model/ListBigkeyScanTasksRequest';
import { ListBigkeyScanTasksResponse } from './model/ListBigkeyScanTasksResponse';
import { ListCenterTaskRequest } from './model/ListCenterTaskRequest';
import { ListCenterTaskResponse } from './model/ListCenterTaskResponse';
import { ListCenterTasksResp } from './model/ListCenterTasksResp';
import { ListConfigHistoriesRequest } from './model/ListConfigHistoriesRequest';
import { ListConfigHistoriesResponse } from './model/ListConfigHistoriesResponse';
import { ListConfigTemplatesRequest } from './model/ListConfigTemplatesRequest';
import { ListConfigTemplatesResponse } from './model/ListConfigTemplatesResponse';
import { ListConfigurationsRequest } from './model/ListConfigurationsRequest';
import { ListConfigurationsResponse } from './model/ListConfigurationsResponse';
import { ListDiagnosisTasksRequest } from './model/ListDiagnosisTasksRequest';
import { ListDiagnosisTasksResponse } from './model/ListDiagnosisTasksResponse';
import { ListFlavorsRequest } from './model/ListFlavorsRequest';
import { ListFlavorsResponse } from './model/ListFlavorsResponse';
import { ListGroupReplicationInfoRequest } from './model/ListGroupReplicationInfoRequest';
import { ListGroupReplicationInfoResponse } from './model/ListGroupReplicationInfoResponse';
import { ListHotKeyScanTasksRequest } from './model/ListHotKeyScanTasksRequest';
import { ListHotKeyScanTasksResponse } from './model/ListHotKeyScanTasksResponse';
import { ListInstancesRequest } from './model/ListInstancesRequest';
import { ListInstancesResponse } from './model/ListInstancesResponse';
import { ListMaintenanceWindowsRequest } from './model/ListMaintenanceWindowsRequest';
import { ListMaintenanceWindowsResponse } from './model/ListMaintenanceWindowsResponse';
import { ListMigrationTaskLogsRequest } from './model/ListMigrationTaskLogsRequest';
import { ListMigrationTaskLogsResponse } from './model/ListMigrationTaskLogsResponse';
import { ListMigrationTaskRequest } from './model/ListMigrationTaskRequest';
import { ListMigrationTaskResponse } from './model/ListMigrationTaskResponse';
import { ListMonitoredObjectsOfInstanceRequest } from './model/ListMonitoredObjectsOfInstanceRequest';
import { ListMonitoredObjectsOfInstanceResponse } from './model/ListMonitoredObjectsOfInstanceResponse';
import { ListMonitoredObjectsRequest } from './model/ListMonitoredObjectsRequest';
import { ListMonitoredObjectsResponse } from './model/ListMonitoredObjectsResponse';
import { ListNumberOfInstancesInDifferentStatusRequest } from './model/ListNumberOfInstancesInDifferentStatusRequest';
import { ListNumberOfInstancesInDifferentStatusResponse } from './model/ListNumberOfInstancesInDifferentStatusResponse';
import { ListRedislogRequest } from './model/ListRedislogRequest';
import { ListRedislogResponse } from './model/ListRedislogResponse';
import { ListRestoreRecordsRequest } from './model/ListRestoreRecordsRequest';
import { ListRestoreRecordsResponse } from './model/ListRestoreRecordsResponse';
import { ListSlowlogRequest } from './model/ListSlowlogRequest';
import { ListSlowlogResponse } from './model/ListSlowlogResponse';
import { ListStatisticsOfRunningInstancesRequest } from './model/ListStatisticsOfRunningInstancesRequest';
import { ListStatisticsOfRunningInstancesResponse } from './model/ListStatisticsOfRunningInstancesResponse';
import { ListTagsOfTenantRequest } from './model/ListTagsOfTenantRequest';
import { ListTagsOfTenantResponse } from './model/ListTagsOfTenantResponse';
import { LoginWebCliBody } from './model/LoginWebCliBody';
import { LoginWebCliRequest } from './model/LoginWebCliRequest';
import { LoginWebCliResponse } from './model/LoginWebCliResponse';
import { MaintainWindowsEntity } from './model/MaintainWindowsEntity';
import { MigrationLog } from './model/MigrationLog';
import { MigrationTaskList } from './model/MigrationTaskList';
import { MigrationUpdateRequestEntity } from './model/MigrationUpdateRequestEntity';
import { ModifyInstanceBody } from './model/ModifyInstanceBody';
import { ModifyInstancePasswordBody } from './model/ModifyInstancePasswordBody';
import { ModifyIpWhitelistBody } from './model/ModifyIpWhitelistBody';
import { ModifyRedisConfigBody } from './model/ModifyRedisConfigBody';
import { NodesInfoResp } from './model/NodesInfoResp';
import { PriorityBody } from './model/PriorityBody';
import { Proxy2NodeMonitoredObject } from './model/Proxy2NodeMonitoredObject';
import { ProxyNodeMonitoredObject } from './model/ProxyNodeMonitoredObject';
import { QueryRedisConfig } from './model/QueryRedisConfig';
import { QueryTenantQuotaRespQuotas } from './model/QueryTenantQuotaRespQuotas';
import { RecordsResponse } from './model/RecordsResponse';
import { RedisConfig } from './model/RedisConfig';
import { RedisConnectionParam } from './model/RedisConnectionParam';
import { RenameCommandResp } from './model/RenameCommandResp';
import { ResetAclAccountPassWordRequest } from './model/ResetAclAccountPassWordRequest';
import { ResetAclAccountPassWordResponse } from './model/ResetAclAccountPassWordResponse';
import { ResetInstancePasswordBody } from './model/ResetInstancePasswordBody';
import { ResetPasswordRequest } from './model/ResetPasswordRequest';
import { ResetPasswordResponse } from './model/ResetPasswordResponse';
import { ResizeInstanceBody } from './model/ResizeInstanceBody';
import { ResizeInstanceRequest } from './model/ResizeInstanceRequest';
import { ResizeInstanceResponse } from './model/ResizeInstanceResponse';
import { ResourceTag } from './model/ResourceTag';
import { Resources } from './model/Resources';
import { RestartOrFlushInstancesRequest } from './model/RestartOrFlushInstancesRequest';
import { RestartOrFlushInstancesResponse } from './model/RestartOrFlushInstancesResponse';
import { RestoreInstanceBody } from './model/RestoreInstanceBody';
import { RestoreInstanceRequest } from './model/RestoreInstanceRequest';
import { RestoreInstanceResponse } from './model/RestoreInstanceResponse';
import { RunlogItem } from './model/RunlogItem';
import { ScanExpireKeyRequest } from './model/ScanExpireKeyRequest';
import { ScanExpireKeyResponse } from './model/ScanExpireKeyResponse';
import { SetOnlineMigrationTaskBody } from './model/SetOnlineMigrationTaskBody';
import { SetOnlineMigrationTaskRequest } from './model/SetOnlineMigrationTaskRequest';
import { SetOnlineMigrationTaskResponse } from './model/SetOnlineMigrationTaskResponse';
import { ShowBackUpInfoRequest } from './model/ShowBackUpInfoRequest';
import { ShowBackUpInfoResponse } from './model/ShowBackUpInfoResponse';
import { ShowBackgroundTaskProgressRequest } from './model/ShowBackgroundTaskProgressRequest';
import { ShowBackgroundTaskProgressResponse } from './model/ShowBackgroundTaskProgressResponse';
import { ShowBigkeyAutoscanConfigRequest } from './model/ShowBigkeyAutoscanConfigRequest';
import { ShowBigkeyAutoscanConfigResponse } from './model/ShowBigkeyAutoscanConfigResponse';
import { ShowBigkeyScanTaskDetailsRequest } from './model/ShowBigkeyScanTaskDetailsRequest';
import { ShowBigkeyScanTaskDetailsResponse } from './model/ShowBigkeyScanTaskDetailsResponse';
import { ShowConfigTemplateRequest } from './model/ShowConfigTemplateRequest';
import { ShowConfigTemplateResponse } from './model/ShowConfigTemplateResponse';
import { ShowDiagnosisTaskDetailsRequest } from './model/ShowDiagnosisTaskDetailsRequest';
import { ShowDiagnosisTaskDetailsResponse } from './model/ShowDiagnosisTaskDetailsResponse';
import { ShowExpireKeyScanInfoRequest } from './model/ShowExpireKeyScanInfoRequest';
import { ShowExpireKeyScanInfoResponse } from './model/ShowExpireKeyScanInfoResponse';
import { ShowHotkeyAutoscanConfigRequest } from './model/ShowHotkeyAutoscanConfigRequest';
import { ShowHotkeyAutoscanConfigResponse } from './model/ShowHotkeyAutoscanConfigResponse';
import { ShowHotkeyTaskDetailsRequest } from './model/ShowHotkeyTaskDetailsRequest';
import { ShowHotkeyTaskDetailsResponse } from './model/ShowHotkeyTaskDetailsResponse';
import { ShowInstanceRequest } from './model/ShowInstanceRequest';
import { ShowInstanceResponse } from './model/ShowInstanceResponse';
import { ShowIpWhitelistRequest } from './model/ShowIpWhitelistRequest';
import { ShowIpWhitelistResponse } from './model/ShowIpWhitelistResponse';
import { ShowJobInfoRequest } from './model/ShowJobInfoRequest';
import { ShowJobInfoResponse } from './model/ShowJobInfoResponse';
import { ShowMigrationTaskRequest } from './model/ShowMigrationTaskRequest';
import { ShowMigrationTaskResponse } from './model/ShowMigrationTaskResponse';
import { ShowMigrationTaskStatsRequest } from './model/ShowMigrationTaskStatsRequest';
import { ShowMigrationTaskStatsResponse } from './model/ShowMigrationTaskStatsResponse';
import { ShowNodesInformationRequest } from './model/ShowNodesInformationRequest';
import { ShowNodesInformationResponse } from './model/ShowNodesInformationResponse';
import { ShowQuotaOfTenantRequest } from './model/ShowQuotaOfTenantRequest';
import { ShowQuotaOfTenantResponse } from './model/ShowQuotaOfTenantResponse';
import { ShowReplicationStatesRequest } from './model/ShowReplicationStatesRequest';
import { ShowReplicationStatesResponse } from './model/ShowReplicationStatesResponse';
import { ShowTagsRequest } from './model/ShowTagsRequest';
import { ShowTagsResponse } from './model/ShowTagsResponse';
import { SimpleKeyScanRecord } from './model/SimpleKeyScanRecord';
import { SingleBackgroundTask } from './model/SingleBackgroundTask';
import { SlowlogItem } from './model/SlowlogItem';
import { SourceInstanceBody } from './model/SourceInstanceBody';
import { StartInstanceResizeCheckJobRequest } from './model/StartInstanceResizeCheckJobRequest';
import { StartInstanceResizeCheckJobResponse } from './model/StartInstanceResizeCheckJobResponse';
import { StatusStatistic } from './model/StatusStatistic';
import { StepDetail } from './model/StepDetail';
import { StopMigrationTaskRequest } from './model/StopMigrationTaskRequest';
import { StopMigrationTaskResponse } from './model/StopMigrationTaskResponse';
import { StopMigrationTaskResult } from './model/StopMigrationTaskResult';
import { StopMigrationTaskSyncRequest } from './model/StopMigrationTaskSyncRequest';
import { StopMigrationTaskSyncResponse } from './model/StopMigrationTaskSyncResponse';
import { SubStepDetail } from './model/SubStepDetail';
import { Tag } from './model/Tag';
import { TargetInstanceBody } from './model/TargetInstanceBody';
import { UpdateAclAccountPassWordRequest } from './model/UpdateAclAccountPassWordRequest';
import { UpdateAclAccountPassWordResponse } from './model/UpdateAclAccountPassWordResponse';
import { UpdateAclAccountRemarkRequest } from './model/UpdateAclAccountRemarkRequest';
import { UpdateAclAccountRemarkRequestBody } from './model/UpdateAclAccountRemarkRequestBody';
import { UpdateAclAccountRemarkResponse } from './model/UpdateAclAccountRemarkResponse';
import { UpdateAclAccountRoleRequest } from './model/UpdateAclAccountRoleRequest';
import { UpdateAclAccountRoleResponse } from './model/UpdateAclAccountRoleResponse';
import { UpdateBigkeyAutoscanConfigRequest } from './model/UpdateBigkeyAutoscanConfigRequest';
import { UpdateBigkeyAutoscanConfigResponse } from './model/UpdateBigkeyAutoscanConfigResponse';
import { UpdateConfigTemplateRequest } from './model/UpdateConfigTemplateRequest';
import { UpdateConfigTemplateResponse } from './model/UpdateConfigTemplateResponse';
import { UpdateConfigurationsRequest } from './model/UpdateConfigurationsRequest';
import { UpdateConfigurationsResponse } from './model/UpdateConfigurationsResponse';
import { UpdateCustomTemplateBody } from './model/UpdateCustomTemplateBody';
import { UpdateHotkeyAutoScanConfigRequest } from './model/UpdateHotkeyAutoScanConfigRequest';
import { UpdateHotkeyAutoScanConfigResponse } from './model/UpdateHotkeyAutoScanConfigResponse';
import { UpdateInstanceBandwidthRequest } from './model/UpdateInstanceBandwidthRequest';
import { UpdateInstanceBandwidthResponse } from './model/UpdateInstanceBandwidthResponse';
import { UpdateInstanceRequest } from './model/UpdateInstanceRequest';
import { UpdateInstanceResponse } from './model/UpdateInstanceResponse';
import { UpdateIpWhitelistRequest } from './model/UpdateIpWhitelistRequest';
import { UpdateIpWhitelistResponse } from './model/UpdateIpWhitelistResponse';
import { UpdateMigrationTaskRequest } from './model/UpdateMigrationTaskRequest';
import { UpdateMigrationTaskResponse } from './model/UpdateMigrationTaskResponse';
import { UpdatePasswordRequest } from './model/UpdatePasswordRequest';
import { UpdatePasswordResponse } from './model/UpdatePasswordResponse';
import { UpdateSlavePriorityRequest } from './model/UpdateSlavePriorityRequest';
import { UpdateSlavePriorityResponse } from './model/UpdateSlavePriorityResponse';
import { Whitelist } from './model/Whitelist';

export class DcsClient {
    public static newBuilder(): ClientBuilder<DcsClient> {
            return new ClientBuilder<DcsClient>(newClient);
    }

    private hcClient: HcClient;
    public constructor(client: HcClient) {
        this.hcClient = client;
    }

    public getPath() {
        return __dirname;
    }


    /**
     * 为指定实例批量添加标签，或批量删除标签。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量添加或删除标签
     * @param {string} instanceId 实例ID。
     * @param {CreateOrDeleteInstanceTags} batchCreateOrDeleteTagsRequestBody This is a auto create BodyParameter
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchCreateOrDeleteTags(batchCreateOrDeleteTagsRequest?: BatchCreateOrDeleteTagsRequest): Promise<BatchCreateOrDeleteTagsResponse> {
        const options = ParamCreater().batchCreateOrDeleteTags(batchCreateOrDeleteTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量删除多个缓存实例。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量删除实例
     * @param {boolean} [allFailure] 是否批量删除创建失败的缓存实例。取值如下： - true，表示删除租户所有创建失败的缓存实例，此时请求参数instances可为空； - false或者其他值，表示删除instances参数数组中指定的缓存实例。 
     * @param {BatchDeleteBody} [batchDeleteInstancesRequestBody] This is a auto create BodyParameter
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchDeleteInstances(batchDeleteInstancesRequest?: BatchDeleteInstancesRequest): Promise<BatchDeleteInstancesResponse> {
        const options = ParamCreater().batchDeleteInstances(batchDeleteInstancesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量查询指定项目所有实例的节点信息、有效实例个数及节点个数。
     * 创建中实例不返回节点信息。
     * 仅支持Redis4.0和Redis5.0实例查询
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量查询实例节点信息
     * @param {number} [offset] 偏移量，表示从此偏移量开始查询，offset大于等于0。
     * @param {number} [limit] 每页显示的条目数量，当前最大值为100。若不设置该参数，则为10。 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchShowNodesInformation(batchShowNodesInformationRequest?: BatchShowNodesInformationRequest): Promise<BatchShowNodesInformationResponse> {
        const options = ParamCreater().batchShowNodesInformation(batchShowNodesInformationRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量停止数据迁移任务，接口响应成功，仅表示下发任务成功。查询到迁移任务状态为TERMINATED时，即停止成功。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量停止数据迁移任务
     * @param {BatchStopMigrationTasksBody} batchStopMigrationTasksRequestBody 批量停止数据迁移任务请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchStopMigrationTasks(batchStopMigrationTasksRequest?: BatchStopMigrationTasksRequest): Promise<BatchStopMigrationTasksResponse> {
        const options = ParamCreater().batchStopMigrationTasks(batchStopMigrationTasksRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 切换实例主备节点，只有主备实例支持该操作。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 主备切换
     * @param {string} instanceId 实例ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public changeMasterStandby(changeMasterStandbyRequest?: ChangeMasterStandbyRequest): Promise<ChangeMasterStandbyResponse> {
        const options = ParamCreater().changeMasterStandby(changeMasterStandbyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 数据迁移配置页实例连接测试
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 数据迁移配置页实例连接测试
     * @param {string} taskId 任务ID
     * @param {RedisConnectionParam} checkMigrationConnectivityRequestBody 连接测试请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public checkMigrationConnectivity(checkMigrationConnectivityRequest?: CheckMigrationConnectivityRequest): Promise<CheckMigrationConnectivityResponse> {
        const options = ParamCreater().checkMigrationConnectivity(checkMigrationConnectivityRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 备份指定的缓存实例。
     * &gt; 只有主备和集群类型的缓存实例支持备份恢复操作，单机实例不支持备份恢复操作。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 备份指定实例
     * @param {string} instanceId 实例ID。
     * @param {BackupInstanceBody} [copyInstanceRequestBody] This is a auto create BodyParameter
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public copyInstance(copyInstanceRequest?: CopyInstanceRequest): Promise<CopyInstanceResponse> {
        const options = ParamCreater().copyInstance(copyInstanceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * \&quot;为redis4.0/5.0实例（Cluster集群实例除外）创建权限访问账号，包含读写和只读权限。
     * 如果实例默认账号已开启免密访问，您创建的普通账号不能使用，如需使用普通账号请先关闭默认账号的免密访问。
     * 单机、主备实例默认账号的密码不能带有冒号(:)，否则无法创建普通账号。\&quot;
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建ACL账号
     * @param {string} instanceId 实例ID。
     * @param {CreateAclAccountRequestBody} createAclAccountRequestBody This is a auto create BodyParameter
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createAclAccount(createAclAccountRequest?: CreateAclAccountRequest): Promise<CreateAclAccountResponse> {
        const options = ParamCreater().createAclAccount(createAclAccountRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建过期key扫描任务（Redis 3.0 不支持过期key扫描）。
     * 过期key扫描会对键空间进行Redis的scan扫描，释放内存中已过期但是由于惰性删除机制而没有释放的内存空间。
     * 过期key扫描在主节点上执行，会对实例性能有一定的影响，建议不要在业务高峰期进行。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建过期key扫描任务
     * @param {string} instanceId 实例ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createAutoExpireScanTask(createAutoExpireScanTaskRequest?: CreateAutoExpireScanTaskRequest): Promise<CreateAutoExpireScanTaskResponse> {
        const options = ParamCreater().createAutoExpireScanTask(createAutoExpireScanTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 为Redis实例创建大key分析任务。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建大key分析任务
     * @param {string} instanceId 实例ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createBigkeyScanTask(createBigkeyScanTaskRequest?: CreateBigkeyScanTaskRequest): Promise<CreateBigkeyScanTaskResponse> {
        const options = ParamCreater().createBigkeyScanTask(createBigkeyScanTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建备份导入页面实例连接测试
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建备份导入页面实例连接测试
     * @param {string} instanceId 实例ID
     * @param {CreateConnectivityTestRequestBody} [createConnectivityTestRequestBody] 备份导入页面实例连接测试请求
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createConnectivityTest(createConnectivityTestRequest?: CreateConnectivityTestRequest): Promise<CreateConnectivityTestResponse> {
        const options = ParamCreater().createConnectivityTest(createConnectivityTestRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建自定义模板
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建自定义模板
     * @param {CreateCustomTemplateBody} createCustomTemplateRequestBody This is a auto create BodyParameter
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createCustomTemplate(createCustomTemplateRequest?: CreateCustomTemplateRequest): Promise<CreateCustomTemplateResponse> {
        const options = ParamCreater().createCustomTemplate(createCustomTemplateRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 诊断指定的缓存实例。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建实例诊断任务
     * @param {string} instanceId 实例ID
     * @param {CreateDiagnosisTaskBody} createDiagnosisTaskRequestBody This is a auto create BodyParameter
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
     * 创建热key分析任务，Redis 3.0 不支持热key分析。
     * 
     * 热key分析需要将缓存实例配置参数maxmemory-policy设置为allkeys-lfu或volatile-lfu。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建热key分析任务
     * @param {string} instanceId 实例ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createHotkeyScanTask(createHotkeyScanTaskRequest?: CreateHotkeyScanTaskRequest): Promise<CreateHotkeyScanTaskResponse> {
        const options = ParamCreater().createHotkeyScanTask(createHotkeyScanTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建缓存实例，该接口创建的缓存实例支持按需计费和包周期两种方式。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建缓存实例
     * @param {CreateInstanceBody} createInstanceRequestBody This is a auto create BodyParameter
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
     * 创建数据迁移任务。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建数据迁移任务
     * @param {CreateMigrationTaskBody} createMigrationTaskRequestBody This is a auto create BodyParameter
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createMigrationTask(createMigrationTaskRequest?: CreateMigrationTaskRequest): Promise<CreateMigrationTaskResponse> {
        const options = ParamCreater().createMigrationTask(createMigrationTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建在线数据迁移任务。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建在线数据迁移任务
     * @param {CreateOnlineMigrationTaskBody} createOnlineMigrationTaskRequestBody 创建在线数据迁移任务请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createOnlineMigrationTask(createOnlineMigrationTaskRequest?: CreateOnlineMigrationTaskRequest): Promise<CreateOnlineMigrationTaskResponse> {
        const options = ParamCreater().createOnlineMigrationTask(createOnlineMigrationTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 新增/修改高级备份信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 新增/修改高级备份信息
     * @param {string} instanceId 实例ID
     * @param {AdditionalBackupRequest} [createOrUpdateBackUpInfoRequestBody] 请求实体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createOrUpdateBackUpInfo(createOrUpdateBackUpInfoRequest?: CreateOrUpdateBackUpInfoRequest): Promise<CreateOrUpdateBackUpInfoResponse> {
        const options = ParamCreater().createOrUpdateBackUpInfo(createOrUpdateBackUpInfoRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 采集Redis运行日志。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 采集Redis运行日志
     * @param {string} instanceId 实例ID。
     * @param {string} logType 返回日志的类型，当前仅支持Redis运行日志，类型为run
     * @param {0 | 1 | 3 | 7} [queryTime] 日期偏移量，表示从过去的n天开始查询，例如：传入0则表示查询今天的日志，传入7则表示查询过去7天的日志。当前支持0，1，3，7。
     * @param {string} [replicationId] 副本ID，可以从分片与副本中查询对应节点的副本ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createRedislog(createRedislogRequest?: CreateRedislogRequest): Promise<CreateRedislogResponse> {
        const options = ParamCreater().createRedislog(createRedislogRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取日志下载链接。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取日志下载链接
     * @param {string} instanceId 实例ID。
     * @param {string} id 日志的唯一ID，来自于查询运行日志查询接口
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createRedislogDownloadLink(createRedislogDownloadLinkRequest?: CreateRedislogDownloadLinkRequest): Promise<CreateRedislogDownloadLinkResponse> {
        const options = ParamCreater().createRedislogDownloadLink(createRedislogDownloadLinkRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除所创建的ACL普通账号
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除ACL账号
     * @param {string} instanceId 实例ID。
     * @param {string} accountId ACL账号ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteAclAccount(deleteAclAccountRequest?: DeleteAclAccountRequest): Promise<DeleteAclAccountResponse> {
        const options = ParamCreater().deleteAclAccount(deleteAclAccountRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除后台任务
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除后台任务
     * @param {string} instanceId 实例ID。
     * @param {string} taskId 后台任务ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteBackgroundTask(deleteBackgroundTaskRequest?: DeleteBackgroundTaskRequest): Promise<DeleteBackgroundTaskResponse> {
        const options = ParamCreater().deleteBackgroundTask(deleteBackgroundTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除缓存实例已备份的文件。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除备份文件
     * @param {string} backupId 备份记录ID。
     * @param {string} instanceId 实例ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteBackupFile(deleteBackupFileRequest?: DeleteBackupFileRequest): Promise<DeleteBackupFileResponse> {
        const options = ParamCreater().deleteBackupFile(deleteBackupFileRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除大key分析记录。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除大key分析记录
     * @param {string} instanceId 实例ID。
     * @param {string} bigkeyId 大key分析任务ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteBigkeyScanTask(deleteBigkeyScanTaskRequest?: DeleteBigkeyScanTaskRequest): Promise<DeleteBigkeyScanTaskResponse> {
        const options = ParamCreater().deleteBigkeyScanTask(deleteBigkeyScanTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除自定义模板
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除自定义模板
     * @param {string} templateId 模板ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteConfigTemplate(deleteConfigTemplateRequest?: DeleteConfigTemplateRequest): Promise<DeleteConfigTemplateResponse> {
        const options = ParamCreater().deleteConfigTemplate(deleteConfigTemplateRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除热key分析任务。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除热key分析任务
     * @param {string} instanceId 实例ID。
     * @param {string} hotkeyId 热key分析任务ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteHotkeyScanTask(deleteHotkeyScanTaskRequest?: DeleteHotkeyScanTaskRequest): Promise<DeleteHotkeyScanTaskResponse> {
        const options = ParamCreater().deleteHotkeyScanTask(deleteHotkeyScanTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 将只读副本的IP从域名中摘除，摘除成功后，只读域名不会再解析到该副本IP。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 域名摘除IP
     * @param {string} instanceId 实例ID。
     * @param {string} groupId 分片ID。
     * @param {string} nodeId 节点ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteIpFromDomainName(deleteIpFromDomainNameRequest?: DeleteIpFromDomainNameRequest): Promise<DeleteIpFromDomainNameResponse> {
        const options = ParamCreater().deleteIpFromDomainName(deleteIpFromDomainNameRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除数据迁移任务。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除数据迁移任务
     * @param {DeleteMigrateTaskRequest} deleteMigrationTaskRequestBody 删除数据迁移任务请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteMigrationTask(deleteMigrationTaskRequest?: DeleteMigrationTaskRequest): Promise<DeleteMigrationTaskResponse> {
        const options = ParamCreater().deleteMigrationTask(deleteMigrationTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除指定的缓存实例，释放该实例的所有资源。
     * 
     * &gt; 如果是删除按需资源，请按照本章节执行；如果是删除包周期资源，即退订，请参考[退订包周期资源](https://support.huaweicloud.com/api-oce/zh-cn_topic_0082522030.html#section2)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除实例
     * @param {string} instanceId 实例ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteSingleInstance(deleteSingleInstanceRequest?: DeleteSingleInstanceRequest): Promise<DeleteSingleInstanceResponse> {
        const options = ParamCreater().deleteSingleInstance(deleteSingleInstanceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 进行IP交换
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 进行IP交换
     * @param {string} taskId 任务ID
     * @param {IpExchangeRequest} [exchangeInstanceIpRequestBody] 进行IP交换请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public exchangeInstanceIp(exchangeInstanceIpRequest?: ExchangeInstanceIpRequest): Promise<ExchangeInstanceIpResponse> {
        const options = ParamCreater().exchangeInstanceIp(exchangeInstanceIpRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 集群分片倒换，适用于proxy和cluster实例
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 集群分片倒换
     * @param {string} instanceId 实例ID
     * @param {string} groupId 分片ID
     * @param {string} nodeId 升级为主节点的节点ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public executeClusterSwitchover(executeClusterSwitchoverRequest?: ExecuteClusterSwitchoverRequest): Promise<ExecuteClusterSwitchoverResponse> {
        const options = ParamCreater().executeClusterSwitchover(executeClusterSwitchoverRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 登入web-cli，执行redis命令
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 执行web-cli命令V2接口
     * @param {string} instanceId 实例ID
     * @param {ExecuteCommandRequestBody} [executeCommandMobilizationRequestBody] 执行命令请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public executeCommandMobilization(executeCommandMobilizationRequest?: ExecuteCommandMobilizationRequest): Promise<ExecuteCommandMobilizationResponse> {
        const options = ParamCreater().executeCommandMobilization(executeCommandMobilizationRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询ACL账户列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询ACL账户列表
     * @param {string} instanceId 实例ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAclAccounts(listAclAccountsRequest?: ListAclAccountsRequest): Promise<ListAclAccountsResponse> {
        const options = ParamCreater().listAclAccounts(listAclAccountsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询所在局点的可用区信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询可用区信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAvailableZones(listAvailableZonesRequest?: ListAvailableZonesRequest): Promise<ListAvailableZonesResponse> {
        const options = ParamCreater().listAvailableZones();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询后台任务列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询后台任务列表
     * @param {string} instanceId 实例ID。
     * @param {number} [offset] 偏移量，表示从此偏移量开始查询， offset大于等于0
     * @param {number} [limit] 每页显示的条目数量。
     * @param {string} [startTime] 查询开始时间，时间为UTC时间。格式：yyyyMMddHHmmss，如：20200609160000。
     * @param {string} [endTime] 查询结束时间，时间为UTC时间。格式：yyyyMMddHHmmss，如：20200617155959。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listBackgroundTask(listBackgroundTaskRequest?: ListBackgroundTaskRequest): Promise<ListBackgroundTaskResponse> {
        const options = ParamCreater().listBackgroundTask(listBackgroundTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取指定实例的备份文件下载链接，下载备份文件。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取备份文件下载链接
     * @param {string} instanceId 实例ID。
     * @param {string} backupId 备份记录ID。
     * @param {DownloadBackupFilesReq} listBackupFileLinksRequestBody 获取备份文件下载链接请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listBackupFileLinks(listBackupFileLinksRequest?: ListBackupFileLinksRequest): Promise<ListBackupFileLinksResponse> {
        const options = ParamCreater().listBackupFileLinks(listBackupFileLinksRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定缓存实例的备份信息列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询实例备份信息
     * @param {string} instanceId 实例ID。
     * @param {string} [beginTime] 查询开始时间，时间为UTC时间。格式：yyyyMMddHHmmss，如：20170718235959。
     * @param {string} [endTime] 查询结束时间，时间为UTC时间。格式：yyyyMMddHHmmss，如：20170718235959。
     * @param {number} [limit] 每页显示的条目数量。
     * @param {number} [offset] 偏移量，表示从此偏移量开始查询， offset大于等于0。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listBackupRecords(listBackupRecordsRequest?: ListBackupRecordsRequest): Promise<ListBackupRecordsResponse> {
        const options = ParamCreater().listBackupRecords(listBackupRecordsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询大key分析任务列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询大key分析任务列表
     * @param {string} instanceId 实例ID。
     * @param {number} [offset] 偏移量，表示从此偏移量开始查询， offset大于等于0
     * @param {number} [limit] 每页显示的条目数量。
     * @param {'waiting' | 'running' | 'success' | 'failed'} [status] 分析任务状态
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listBigkeyScanTasks(listBigkeyScanTasksRequest?: ListBigkeyScanTasksRequest): Promise<ListBigkeyScanTasksResponse> {
        const options = ParamCreater().listBigkeyScanTasks(listBigkeyScanTasksRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询任务中心任务列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询任务中心任务列表
     * @param {number} [offset] 偏移量，表示从此偏移量开始查询， offset大于等于0
     * @param {number} [limit] 每页显示条数，最小值为1，最大值为1000，若不设置该参数，则为10。
     * @param {string} [startTime] 查询开始时间，时间为UTC时间。格式：yyyyMMddHHmmss，如：20200609160000。
     * @param {string} [endTime] 查询结束时间，时间为UTC时间。格式：yyyyMMddHHmmss，如：20230612155959。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listCenterTask(listCenterTaskRequest?: ListCenterTaskRequest): Promise<ListCenterTaskResponse> {
        const options = ParamCreater().listCenterTask(listCenterTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询实例的参数修改记录列表，支持按照关键字查询
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询实例参数修改记录列表
     * @param {string} instanceId 实例ID
     * @param {number} [offset] 偏移量，表示从此偏移量开始查询， offset大于等于0
     * @param {number} [limit] 每页显示条数，最小值为1，最大值为1000，若不设置该参数，则为10。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listConfigHistories(listConfigHistoriesRequest?: ListConfigHistoriesRequest): Promise<ListConfigHistoriesResponse> {
        const options = ParamCreater().listConfigHistories(listConfigHistoriesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询租户的参数模板列表，支持按照条件查询
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询参数模板列表
     * @param {'sys' | 'user'} type 模板类型
     * @param {string} [name] 参数模板名称，支持模糊查找
     * @param {string} [templateId] 模板ID
     * @param {string} [engine] 缓存引擎：Redis[和Memcached](tag:hws,hws_hk,ocb,sbc,tm,ctc,cmcc)。
     * @param {string} [engineVersion] 缓存版本。  当缓存引擎为Redis时，取值为[3.0/4.0/5.0](tag:ctc,cmc)[3.0/4.0/5.0/6.0](tag:ocb,otc,sbc,g42,tm)[4.0/5.0/6.0](tag:hws,hws_hk)。  [当缓存引擎为Memcached时，该字段为可选，取值为空。](tag:hws,hws_hk,ocb,sbc,tm,ctc,cmcc) 
     * @param {string} [cacheMode] 缓存实例类型。取值范围如下： - single：表示单机实例 - ha：表示主备实例 - cluster：表示cluster集群实例 - proxy：表示Proxy集群实例 [- ha_rw_split：表示读写分离实例](tag:hws) 
     * @param {string} [description] 模板的描述信息
     * @param {number} [offset] 偏移量，表示从此偏移量开始查询， offset大于等于0
     * @param {number} [limit] 每页显示条数，最小值为1，最大值为1000，若不设置该参数，则为10。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listConfigTemplates(listConfigTemplatesRequest?: ListConfigTemplatesRequest): Promise<ListConfigTemplatesResponse> {
        const options = ParamCreater().listConfigTemplates(listConfigTemplatesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定实例的配置参数信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询实例配置参数
     * @param {string} instanceId 实例ID。
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
     * 查询指定缓存实例诊断任务列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询实例诊断任务列表
     * @param {string} instanceId 实例ID
     * @param {number} [limit] 每页显示条数，最小值为1，最大值为1000，若不设置该参数，则为10。
     * @param {number} [offset] 偏移量，表示从此偏移量开始查询， offset大于等于0。
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
     * 在创建缓存实例时，需要配置订购的产品规格编码（spec_code），可通过该接口查询产品规格，查询条件不选时默认查询全部。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询产品规格
     * @param {string} [instanceId] 缓存实例ID，根据该字段可查询出实例可变更的规格
     * @param {string} [specCode] 产品规格编码。
     * @param {string} [cacheMode] 缓存实例类型。取值范围如下： - single：表示单机实例 - ha：表示主备实例 - cluster：表示cluster集群实例 - proxy：表示Proxy集群实例 - ha_rw_split： 表示读写分离实例 
     * @param {string} [engine] 缓存引擎类型。取值范围如下： - Redis - Memcached 
     * @param {string} [engineVersion] 缓存版本，当缓存引擎为Redis时，取值范围如下： - 3.0 - 4.0 - 5.0 
     * @param {'x86_64' | 'aarch64'} [cpuType] CPU架构类型。取值范围如下： - x86_64：X86架构 - aarch64：ARM架构 
     * @param {string} [capacity] 缓存容量（G Byte）。 - Redis3.0：单机和主备类型实例取值：2、4、8、16、32、64。Proxy集群实例规格支持64、128、256、512和1024。 - Redis4.0和Redis5.0：单机和主备类型实例取值：0.125、0.25、0.5、1、2、4、8、16、32、64。Cluster集群实例规格支持24、32、48、64、96、128、192、256、384、512、768、1024。 - Memcached：单机和主备类型实例取值：2、4、8、16、32、64。 
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
     * 查询读写分离实例和集群实例的分片和副本信息，其中，读写分离实例仅Redis4.0和Redis5.0的主备实例支持。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询分片信息
     * @param {string} instanceId 实例ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listGroupReplicationInfo(listGroupReplicationInfoRequest?: ListGroupReplicationInfoRequest): Promise<ListGroupReplicationInfoResponse> {
        const options = ParamCreater().listGroupReplicationInfo(listGroupReplicationInfoRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询热key分析历史记录。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询热key分析任务列表
     * @param {string} instanceId 实例ID。
     * @param {number} [offset] 偏移量，表示从此偏移量开始查询， offset大于等于0
     * @param {number} [limit] 每页显示的条目数量。
     * @param {'waiting' | 'running' | 'success' | 'failed'} [status] 分析任务状态
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listHotKeyScanTasks(listHotKeyScanTasksRequest?: ListHotKeyScanTasksRequest): Promise<ListHotKeyScanTasksResponse> {
        const options = ParamCreater().listHotKeyScanTasks(listHotKeyScanTasksRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询租户的缓存实例列表，支持按照条件查询。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询所有实例列表
     * @param {string} [instanceId] 实例ID。
     * @param {string} [includeFailure] 是否返回创建失败的实例数。 当参数值为“true”时，返回创建失败的实例数。参数值为“false”或者其他值，不返回创建失败的实例数。
     * @param {string} [includeDelete] 是否返回已删除的实例数。 当参数值为“true”时，返回已删除的实例数。参数值为“false”或者其他值，不返回已删除的实例数。
     * @param {string} [name] 实例名称。
     * @param {number} [offset] 偏移量，表示从此偏移量开始查询， offset大于等于0
     * @param {number} [limit] 每页显示条数，最小值为1，最大值为1000，若不设置该参数，则为10。
     * @param {string} [status] 实例状态。详细状态说明见[缓存实例状态说明](https://support.huaweicloud.com/api-dcs/dcs-api-0312047.html)
     * @param {string} [nameEqual] 是否按照实例名称进行精确匹配查询。  和name字段对应，name字段为模糊匹配的用例名，name_equal是精确匹配的用例名。
     * @param {string} [tags] 根据实例标签键值对进行查询。{key}表示标签键，{value}表示标签值。  如果同时使用多个标签键值对进行查询，中间使用逗号分隔开，表示查询同时包含指定标签键值对的实例。 
     * @param {string} [ip] 连接缓存实例的IP地址。
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
     * 查询维护时间窗开始时间和结束时间。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询维护时间窗时间段
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listMaintenanceWindows(listMaintenanceWindowsRequest?: ListMaintenanceWindowsRequest): Promise<ListMaintenanceWindowsResponse> {
        const options = ParamCreater().listMaintenanceWindows();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询迁移任务列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询迁移任务列表
     * @param {number} [offset] 偏移量，表示从此偏移量开始查询， offset大于等于0。
     * @param {number} [limit] 每页显示的条目数量。
     * @param {string} [name] 迁移任务名称。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listMigrationTask(listMigrationTaskRequest?: ListMigrationTaskRequest): Promise<ListMigrationTaskResponse> {
        const options = ParamCreater().listMigrationTask(listMigrationTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询迁移日志列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询迁移日志列表
     * @param {string} taskId 任务ID
     * @param {number} [offset] 偏移量，表示从此偏移量开始查询， offset大于等于0。
     * @param {number} [limit] 每页显示的条目数量。
     * @param {string} [logLevel] 日志级别
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listMigrationTaskLogs(listMigrationTaskLogsRequest?: ListMigrationTaskLogsRequest): Promise<ListMigrationTaskLogsResponse> {
        const options = ParamCreater().listMigrationTaskLogs(listMigrationTaskLogsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询主维度对象列表，主维度ID当前支持dcs_instance_id，dcs_memcached_instance_id。
     * &gt; 该接口当前仅在中国华南区开放。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询主维度信息列表
     * @param {string} dimName 主维度ID，当前支持dcs_instance_id，dcs_memcached_instance_id。
     * @param {number} [offset] 偏移量，表示从此偏移量开始查询，offset大于等于0
     * @param {number} [limit] 每页显示的条目数量
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listMonitoredObjects(listMonitoredObjectsRequest?: ListMonitoredObjectsRequest): Promise<ListMonitoredObjectsResponse> {
        const options = ParamCreater().listMonitoredObjects(listMonitoredObjectsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询主维度下子维度监控对象列表，当前支持子维度的主维度ID的有 dcs_instance_id
     * &gt; 该接口当前仅在中国华南区开放。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询单个主维度下子维度监控对象列表
     * @param {string} instanceId 主维度对象ID，与DCS实例列表中实例ID相同。
     * @param {string} dimName 主维度ID，当前支持子维度的主维度ID的有dcs_instance_id。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listMonitoredObjectsOfInstance(listMonitoredObjectsOfInstanceRequest?: ListMonitoredObjectsOfInstanceRequest): Promise<ListMonitoredObjectsOfInstanceResponse> {
        const options = ParamCreater().listMonitoredObjectsOfInstance(listMonitoredObjectsOfInstanceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询该租户在当前区域下不同状态的实例数。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询实例状态
     * @param {string} [includeFailure] 是否返回创建失败的实例数。   - 当参数值为“true”时，返回的统计包括创建失败的实例数。   - 参数值为“false”或者其他值，返回的统计不包括创建失败的实例数。 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listNumberOfInstancesInDifferentStatus(listNumberOfInstancesInDifferentStatusRequest?: ListNumberOfInstancesInDifferentStatusRequest): Promise<ListNumberOfInstancesInDifferentStatusResponse> {
        const options = ParamCreater().listNumberOfInstancesInDifferentStatus(listNumberOfInstancesInDifferentStatusRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询Redis运行日志列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询Redis运行日志列表
     * @param {string} instanceId 实例ID。
     * @param {string} logType 返回日志的类型，当前仅支持Redis运行日志，类型为run
     * @param {number} [offset] 偏移量，表示从此偏移量开始查询， offset大于等于0
     * @param {number} [limit] 每页显示的条目数量。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listRedislog(listRedislogRequest?: ListRedislogRequest): Promise<ListRedislogResponse> {
        const options = ParamCreater().listRedislog(listRedislogRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定缓存实例的恢复记录列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询实例恢复记录
     * @param {string} instanceId 实例ID。
     * @param {string} [beginTime] 查询开始时间。格式：yyyyMMddHHmmss，如：20170718235959。
     * @param {string} [endTime] 查询结束时间。格式：yyyyMMddHHmmss，如：20170718235959。
     * @param {number} [limit] 每页显示的条目数量。
     * @param {number} [offset] 偏移量，表示从此偏移量开始查询， offset大于等于0。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listRestoreRecords(listRestoreRecordsRequest?: ListRestoreRecordsRequest): Promise<ListRestoreRecordsResponse> {
        const options = ParamCreater().listRestoreRecords(listRestoreRecordsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询慢日志。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询慢日志
     * @param {string} instanceId 实例ID。
     * @param {string} startTime 查询开始时间，时间为UTC时间的Unix时间戳。如：1598803200000。
     * @param {string} endTime 查询结束时间，时间为UTC时间的Unix时间戳。如：1599494399000。
     * @param {number} [offset] 偏移量，表示从此偏移量开始查询， offset大于等于0
     * @param {number} [limit] 每页显示的条目数量。
     * @param {'start_time' | 'duration'} [sortKey] 返回结果按该关键字排序，支持start_time，duration，默认为“start_time”
     * @param {'desc' | 'asc'} [sortDir] 降序或升序（分别对应desc和asc，默认为“desc”）
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listSlowlog(listSlowlogRequest?: ListSlowlogRequest): Promise<ListSlowlogResponse> {
        const options = ParamCreater().listSlowlog(listSlowlogRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询当前租户下处于“运行中”状态的缓存实例的统计信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询运行中实例的统计信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listStatisticsOfRunningInstances(listStatisticsOfRunningInstancesRequest?: ListStatisticsOfRunningInstancesRequest): Promise<ListStatisticsOfRunningInstancesResponse> {
        const options = ParamCreater().listStatisticsOfRunningInstances();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询租户在指定Project中实例类型的所有资源标签集合。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询租户所有标签
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listTagsOfTenant(listTagsOfTenantRequest?: ListTagsOfTenantRequest): Promise<ListTagsOfTenantResponse> {
        const options = ParamCreater().listTagsOfTenant();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 登录webCli
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 登录webCli
     * @param {string} instanceId 实例ID。
     * @param {LoginWebCliBody} loginWebCliRequestBody This is a auto create BodyParameter
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public loginWebCli(loginWebCliRequest?: LoginWebCliRequest): Promise<LoginWebCliResponse> {
        const options = ParamCreater().loginWebCli(loginWebCliRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 重置ACL账号密码。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 重置ACL账号密码
     * @param {string} instanceId 实例ID。
     * @param {string} accountId ACL账号ID。
     * @param {AclAccountResetPasswordBody} resetAclAccountPasswordRequestBody This is a auto create BodyParameter
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public resetAclAccountPassWord(resetAclAccountPassWordRequest?: ResetAclAccountPassWordRequest): Promise<ResetAclAccountPassWordResponse> {
        const options = ParamCreater().resetAclAccountPassWord(resetAclAccountPassWordRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 重置缓存实例的密码。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 重置密码
     * @param {string} instanceId 实例ID。
     * @param {ResetInstancePasswordBody} [resetPasswordRequestBody] This is a auto create BodyParameter
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
     * 用户可以为状态为“运行中”的DCS缓存实例进行规格变更，当前仅能支持按需实例的同副本或分片数量的实例规格变更。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 变更实例规格
     * @param {string} instanceId 实例ID。
     * @param {ResizeInstanceBody} resizeInstanceRequestBody 实例规格变更Body
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
     * 重启运行中的DCS缓存实例。
     * 
     * 清空Redis4.0/Redis5.0的实例数据，数据清空后，无法撤销，且无法恢复，请谨慎操作。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 重启实例或清空数据
     * @param {ChangeInstanceStatusBody} restartOrFlushInstancesRequestBody This is a auto create BodyParameter
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public restartOrFlushInstances(restartOrFlushInstancesRequest?: RestartOrFlushInstancesRequest): Promise<RestartOrFlushInstancesResponse> {
        const options = ParamCreater().restartOrFlushInstances(restartOrFlushInstancesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 恢复指定的缓存实例。
     * &gt; 只有主备和集群类型的缓存实例支持备份恢复操作，单机实例不支持备份恢复操作。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 恢复指定实例
     * @param {string} instanceId 实例ID。
     * @param {RestoreInstanceBody} [restoreInstanceRequestBody] 恢复缓存实例成功。
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
     * 立刻扫描过期Key
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 立刻扫描过期Key
     * @param {string} instanceId 实例ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public scanExpireKey(scanExpireKeyRequest?: ScanExpireKeyRequest): Promise<ScanExpireKeyResponse> {
        const options = ParamCreater().scanExpireKey(scanExpireKeyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 配置在线数据迁移任务。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 配置在线数据迁移任务
     * @param {string} taskId 在线迁移任务ID。
     * @param {SetOnlineMigrationTaskBody} setOnlineMigrationTaskRequestBody 配置在线数据迁移任务请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public setOnlineMigrationTask(setOnlineMigrationTaskRequest?: SetOnlineMigrationTaskRequest): Promise<SetOnlineMigrationTaskResponse> {
        const options = ParamCreater().setOnlineMigrationTask(setOnlineMigrationTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询高级备份信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询高级备份信息
     * @param {string} instanceId 实例ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showBackUpInfo(showBackUpInfoRequest?: ShowBackUpInfoRequest): Promise<ShowBackUpInfoResponse> {
        const options = ParamCreater().showBackUpInfo(showBackUpInfoRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询后台任务详细信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询后台任务详细信息
     * @param {string} instanceId 实例ID。
     * @param {string} taskId 任务ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showBackgroundTaskProgress(showBackgroundTaskProgressRequest?: ShowBackgroundTaskProgressRequest): Promise<ShowBackgroundTaskProgressResponse> {
        const options = ParamCreater().showBackgroundTaskProgress(showBackgroundTaskProgressRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询大key自动分析配置。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询大key自动分析配置
     * @param {string} instanceId 实例ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showBigkeyAutoscanConfig(showBigkeyAutoscanConfigRequest?: ShowBigkeyAutoscanConfigRequest): Promise<ShowBigkeyAutoscanConfigResponse> {
        const options = ParamCreater().showBigkeyAutoscanConfig(showBigkeyAutoscanConfigRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询大key分析详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询大key分析详情
     * @param {string} instanceId 实例ID。
     * @param {string} bigkeyId 大key分析任务ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showBigkeyScanTaskDetails(showBigkeyScanTaskDetailsRequest?: ShowBigkeyScanTaskDetailsRequest): Promise<ShowBigkeyScanTaskDetailsResponse> {
        const options = ParamCreater().showBigkeyScanTaskDetails(showBigkeyScanTaskDetailsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询参数模板详情
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询参数模板详情
     * @param {string} templateId 模板ID
     * @param {'sys' | 'user'} type 模板类型
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showConfigTemplate(showConfigTemplateRequest?: ShowConfigTemplateRequest): Promise<ShowConfigTemplateResponse> {
        const options = ParamCreater().showConfigTemplate(showConfigTemplateRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 通过报告ID查询诊断报告的详细信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询指定诊断报告
     * @param {string} reportId 诊断报告ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showDiagnosisTaskDetails(showDiagnosisTaskDetailsRequest?: ShowDiagnosisTaskDetailsRequest): Promise<ShowDiagnosisTaskDetailsResponse> {
        const options = ParamCreater().showDiagnosisTaskDetails(showDiagnosisTaskDetailsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询过期Key扫描记录
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询过期Key扫描记录
     * @param {string} instanceId 实例ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showExpireKeyScanInfo(showExpireKeyScanInfoRequest?: ShowExpireKeyScanInfoRequest): Promise<ShowExpireKeyScanInfoResponse> {
        const options = ParamCreater().showExpireKeyScanInfo(showExpireKeyScanInfoRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询热key自动分析配置。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询热key自动分析配置
     * @param {string} instanceId 实例ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showHotkeyAutoscanConfig(showHotkeyAutoscanConfigRequest?: ShowHotkeyAutoscanConfigRequest): Promise<ShowHotkeyAutoscanConfigResponse> {
        const options = ParamCreater().showHotkeyAutoscanConfig(showHotkeyAutoscanConfigRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询热key分析详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询热key分析详情
     * @param {string} instanceId 实例ID。
     * @param {string} hotkeyId 热key分析任务ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showHotkeyTaskDetails(showHotkeyTaskDetailsRequest?: ShowHotkeyTaskDetailsRequest): Promise<ShowHotkeyTaskDetailsResponse> {
        const options = ParamCreater().showHotkeyTaskDetails(showHotkeyTaskDetailsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 通过实例ID查询实例的详细信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询指定实例
     * @param {string} instanceId 实例ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showInstance(showInstanceRequest?: ShowInstanceRequest): Promise<ShowInstanceResponse> {
        const options = ParamCreater().showInstance(showInstanceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询租户Job执行结果
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询租户Job执行结果
     * @param {string} jobId Job任务ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showJobInfo(showJobInfoRequest?: ShowJobInfoRequest): Promise<ShowJobInfoResponse> {
        const options = ParamCreater().showJobInfo(showJobInfoRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询迁移任务详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询迁移任务详情
     * @param {string} taskId 任务ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showMigrationTask(showMigrationTaskRequest?: ShowMigrationTaskRequest): Promise<ShowMigrationTaskResponse> {
        const options = ParamCreater().showMigrationTask(showMigrationTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询在线迁移进度明细。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询在线迁移进度明细
     * @param {string} taskId 任务ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showMigrationTaskStats(showMigrationTaskStatsRequest?: ShowMigrationTaskStatsRequest): Promise<ShowMigrationTaskStatsResponse> {
        const options = ParamCreater().showMigrationTaskStats(showMigrationTaskStatsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定实例的节点信息。
     * 仅支持Redis4.0和Redis5.0实例查询。
     * 创建中实例不返回节点信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询实例节点信息
     * @param {string} instanceId 实例ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showNodesInformation(showNodesInformationRequest?: ShowNodesInformationRequest): Promise<ShowNodesInformationResponse> {
        const options = ParamCreater().showNodesInformation(showNodesInformationRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询租户默认可以创建的实例数和总内存的配额限制，以及可以申请配额的最大值和最小值。不同的租户在不同的区域配额可能不同。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询租户配额
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showQuotaOfTenant(showQuotaOfTenantRequest?: ShowQuotaOfTenantRequest): Promise<ShowQuotaOfTenantResponse> {
        const options = ParamCreater().showQuotaOfTenant();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取副本状态
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取副本状态
     * @param {string} instanceId 实例ID。
     * @param {string} groupId 分片ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showReplicationStates(showReplicationStatesRequest?: ShowReplicationStatesRequest): Promise<ShowReplicationStatesResponse> {
        const options = ParamCreater().showReplicationStates(showReplicationStatesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 通过实例ID查询标签。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询单个实例标签
     * @param {string} instanceId 实例ID。
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
     * 提交前置检查任务
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 提交前置检查任务
     * @param {string} instanceId 实例ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public startInstanceResizeCheckJob(startInstanceResizeCheckJobRequest?: StartInstanceResizeCheckJobRequest): Promise<StartInstanceResizeCheckJobResponse> {
        const options = ParamCreater().startInstanceResizeCheckJob(startInstanceResizeCheckJobRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 停止数据迁移任务。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 停止数据迁移任务
     * @param {string} taskId 任务ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public stopMigrationTask(stopMigrationTaskRequest?: StopMigrationTaskRequest): Promise<StopMigrationTaskResponse> {
        const options = ParamCreater().stopMigrationTask(stopMigrationTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 同步停止数据迁移任务。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 同步停止数据迁移任务
     * @param {string} taskId 任务ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public stopMigrationTaskSync(stopMigrationTaskSyncRequest?: StopMigrationTaskSyncRequest): Promise<StopMigrationTaskSyncResponse> {
        const options = ParamCreater().stopMigrationTaskSync(stopMigrationTaskSyncRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改ACL账号密码。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改ACL账号密码
     * @param {string} instanceId 实例ID。
     * @param {string} accountId ACL账号ID。
     * @param {AclAccountModifyPasswordBody} updateAclAccountPasswordRequestBody This is a auto create BodyParameter
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateAclAccountPassWord(updateAclAccountPassWordRequest?: UpdateAclAccountPassWordRequest): Promise<UpdateAclAccountPassWordResponse> {
        const options = ParamCreater().updateAclAccountPassWord(updateAclAccountPassWordRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * ACL账号修改备注
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary ACL账号修改备注
     * @param {string} instanceId 实例ID。
     * @param {string} accountId ACL账号ID。
     * @param {UpdateAclAccountRemarkRequestBody} [updateAclAccountRemarkRequestBody] 更新ACL账号备注请求
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateAclAccountRemark(updateAclAccountRemarkRequest?: UpdateAclAccountRemarkRequest): Promise<UpdateAclAccountRemarkResponse> {
        const options = ParamCreater().updateAclAccountRemark(updateAclAccountRemarkRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改用户的类型。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改ACL角色
     * @param {string} instanceId 实例ID。
     * @param {string} accountId ACL账号ID。
     * @param {AclAccountRoleModifyBody} updateAclAccountRoleRequestBody This is a auto create BodyParameter
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateAclAccountRole(updateAclAccountRoleRequest?: UpdateAclAccountRoleRequest): Promise<UpdateAclAccountRoleResponse> {
        const options = ParamCreater().updateAclAccountRole(updateAclAccountRoleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 设置大key自动分析配置。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 设置大key自动分析配置
     * @param {string} instanceId 实例ID。
     * @param {AutoscanConfigRequest} updateBigkeyAutoscanConfigRequestBody This is a auto create BodyParameter
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateBigkeyAutoscanConfig(updateBigkeyAutoscanConfigRequest?: UpdateBigkeyAutoscanConfigRequest): Promise<UpdateBigkeyAutoscanConfigResponse> {
        const options = ParamCreater().updateBigkeyAutoscanConfig(updateBigkeyAutoscanConfigRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改自定义模板
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改自定义模板
     * @param {string} templateId 模板ID
     * @param {UpdateCustomTemplateBody} updateConfigTemplateRequestBody This is a auto update BodyParameter
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateConfigTemplate(updateConfigTemplateRequest?: UpdateConfigTemplateRequest): Promise<UpdateConfigTemplateResponse> {
        const options = ParamCreater().updateConfigTemplate(updateConfigTemplateRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 为了确保分布式缓存服务发挥出最优性能，您可以根据自己的业务情况对DCS缓存实例的运行参数进行调整。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改实例配置参数
     * @param {string} instanceId 实例ID
     * @param {ModifyRedisConfigBody} updateConfigurationsRequestBody This is a auto create BodyParameter
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateConfigurations(updateConfigurationsRequest?: UpdateConfigurationsRequest): Promise<UpdateConfigurationsResponse> {
        const options = ParamCreater().updateConfigurations(updateConfigurationsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 设置热key自动分析配置。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 设置热key自动分析配置
     * @param {string} instanceId 实例ID。
     * @param {AutoscanConfigRequest} updateHotkeyAutoscanConfigRequestBody This is a auto create BodyParameter
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateHotkeyAutoScanConfig(updateHotkeyAutoScanConfigRequest?: UpdateHotkeyAutoScanConfigRequest): Promise<UpdateHotkeyAutoScanConfigResponse> {
        const options = ParamCreater().updateHotkeyAutoScanConfig(updateHotkeyAutoScanConfigRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改缓存实例的信息，可修改信息包括实例名称、描述、备份策略、维护时间窗开始和结束时间以及安全组。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改实例信息
     * @param {string} instanceId 实例ID。
     * @param {ModifyInstanceBody} [updateInstanceRequestBody] This is a auto create BodyParameter
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateInstance(updateInstanceRequest?: UpdateInstanceRequest): Promise<UpdateInstanceResponse> {
        const options = ParamCreater().updateInstance(updateInstanceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 变更指定实例的带宽
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 变更指定实例的带宽
     * @param {string} instanceId 实例ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateInstanceBandwidth(updateInstanceBandwidthRequest?: UpdateInstanceBandwidthRequest): Promise<UpdateInstanceBandwidthResponse> {
        const options = ParamCreater().updateInstanceBandwidth(updateInstanceBandwidthRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 设置迁移任务自动重连
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 设置迁移任务自动重连
     * @param {string} taskId 任务ID
     * @param {MigrationUpdateRequestEntity} updateMigrationTaskRequestBody 设置迁移任务自动重连请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateMigrationTask(updateMigrationTaskRequest?: UpdateMigrationTaskRequest): Promise<UpdateMigrationTaskResponse> {
        const options = ParamCreater().updateMigrationTask(updateMigrationTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改缓存实例的密码。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改密码
     * @param {string} instanceId 实例ID。
     * @param {ModifyInstancePasswordBody} [updatePasswordRequestBody] This is a auto create BodyParameter
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updatePassword(updatePasswordRequest?: UpdatePasswordRequest): Promise<UpdatePasswordResponse> {
        const options = ParamCreater().updatePassword(updatePasswordRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 设置副本优先级，主节点故障时，权重越小的备节点切换为主节点的优先级越高。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 设置备节点优先级
     * @param {string} instanceId 实例ID。
     * @param {string} groupId 分片ID。
     * @param {string} nodeId 节点ID。
     * @param {PriorityBody} updateSlavePriorityRequestBody 设置副本优先级Body体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateSlavePriority(updateSlavePriorityRequest?: UpdateSlavePriorityRequest): Promise<UpdateSlavePriorityResponse> {
        const options = ParamCreater().updateSlavePriority(updateSlavePriorityRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定实例的IP白名单。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询指定实例的IP白名单
     * @param {string} instanceId 实例ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showIpWhitelist(showIpWhitelistRequest?: ShowIpWhitelistRequest): Promise<ShowIpWhitelistResponse> {
        const options = ParamCreater().showIpWhitelist(showIpWhitelistRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 为指定实例设置IP白名单分组，包含创建、停用、编辑、删除白名单四个功能
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 设置IP白名单分组
     * @param {string} instanceId 实例ID。
     * @param {ModifyIpWhitelistBody} updateIpWhitelistRequestBody This is a auto create BodyParameter
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateIpWhitelist(updateIpWhitelistRequest?: UpdateIpWhitelistRequest): Promise<UpdateIpWhitelistResponse> {
        const options = ParamCreater().updateIpWhitelist(updateIpWhitelistRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * 为指定实例批量添加标签，或批量删除标签。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchCreateOrDeleteTags(batchCreateOrDeleteTagsRequest?: BatchCreateOrDeleteTagsRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/dcs/{instance_id}/tags/action",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (batchCreateOrDeleteTagsRequest !== null && batchCreateOrDeleteTagsRequest !== undefined) {
                if (batchCreateOrDeleteTagsRequest instanceof BatchCreateOrDeleteTagsRequest) {
                    instanceId = batchCreateOrDeleteTagsRequest.instanceId;
                    body = batchCreateOrDeleteTagsRequest.body
                } else {
                    instanceId = batchCreateOrDeleteTagsRequest['instance_id'];
                    body = batchCreateOrDeleteTagsRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling batchCreateOrDeleteTags.');
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
         * 批量删除多个缓存实例。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchDeleteInstances(batchDeleteInstancesRequest?: BatchDeleteInstancesRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/instances",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let allFailure;

            if (batchDeleteInstancesRequest !== null && batchDeleteInstancesRequest !== undefined) {
                if (batchDeleteInstancesRequest instanceof BatchDeleteInstancesRequest) {
                    allFailure = batchDeleteInstancesRequest.allFailure;
                    body = batchDeleteInstancesRequest.body
                } else {
                    allFailure = batchDeleteInstancesRequest['all_failure'];
                    body = batchDeleteInstancesRequest['body'];
                }
            }

        
            if (allFailure !== null && allFailure !== undefined) {
                localVarQueryParameter['all_failure'] = allFailure;
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 批量查询指定项目所有实例的节点信息、有效实例个数及节点个数。
         * 创建中实例不返回节点信息。
         * 仅支持Redis4.0和Redis5.0实例查询
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchShowNodesInformation(batchShowNodesInformationRequest?: BatchShowNodesInformationRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/instances-logical-nodes",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let offset;
            
            let limit;

            if (batchShowNodesInformationRequest !== null && batchShowNodesInformationRequest !== undefined) {
                if (batchShowNodesInformationRequest instanceof BatchShowNodesInformationRequest) {
                    offset = batchShowNodesInformationRequest.offset;
                    limit = batchShowNodesInformationRequest.limit;
                } else {
                    offset = batchShowNodesInformationRequest['offset'];
                    limit = batchShowNodesInformationRequest['limit'];
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
         * 批量停止数据迁移任务，接口响应成功，仅表示下发任务成功。查询到迁移任务状态为TERMINATED时，即停止成功。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchStopMigrationTasks(batchStopMigrationTasksRequest?: BatchStopMigrationTasksRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/migration-task/batch-stop",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (batchStopMigrationTasksRequest !== null && batchStopMigrationTasksRequest !== undefined) {
                if (batchStopMigrationTasksRequest instanceof BatchStopMigrationTasksRequest) {
                    body = batchStopMigrationTasksRequest.body
                } else {
                    body = batchStopMigrationTasksRequest['body'];
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
         * 切换实例主备节点，只有主备实例支持该操作。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        changeMasterStandby(changeMasterStandbyRequest?: ChangeMasterStandbyRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/instances/{instance_id}/swap",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;

            if (changeMasterStandbyRequest !== null && changeMasterStandbyRequest !== undefined) {
                if (changeMasterStandbyRequest instanceof ChangeMasterStandbyRequest) {
                    instanceId = changeMasterStandbyRequest.instanceId;
                } else {
                    instanceId = changeMasterStandbyRequest['instance_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling changeMasterStandby.');
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 数据迁移配置页实例连接测试
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        checkMigrationConnectivity(checkMigrationConnectivityRequest?: CheckMigrationConnectivityRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/migration/{task_id}/connectivity",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let taskId;

            if (checkMigrationConnectivityRequest !== null && checkMigrationConnectivityRequest !== undefined) {
                if (checkMigrationConnectivityRequest instanceof CheckMigrationConnectivityRequest) {
                    taskId = checkMigrationConnectivityRequest.taskId;
                    body = checkMigrationConnectivityRequest.body
                } else {
                    taskId = checkMigrationConnectivityRequest['task_id'];
                    body = checkMigrationConnectivityRequest['body'];
                }
            }

        
            if (taskId === null || taskId === undefined) {
            throw new RequiredError('taskId','Required parameter taskId was null or undefined when calling checkMigrationConnectivity.');
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
         * 备份指定的缓存实例。
         * &gt; 只有主备和集群类型的缓存实例支持备份恢复操作，单机实例不支持备份恢复操作。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        copyInstance(copyInstanceRequest?: CopyInstanceRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/instances/{instance_id}/backups",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (copyInstanceRequest !== null && copyInstanceRequest !== undefined) {
                if (copyInstanceRequest instanceof CopyInstanceRequest) {
                    instanceId = copyInstanceRequest.instanceId;
                    body = copyInstanceRequest.body
                } else {
                    instanceId = copyInstanceRequest['instance_id'];
                    body = copyInstanceRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling copyInstance.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * \&quot;为redis4.0/5.0实例（Cluster集群实例除外）创建权限访问账号，包含读写和只读权限。
         * 如果实例默认账号已开启免密访问，您创建的普通账号不能使用，如需使用普通账号请先关闭默认账号的免密访问。
         * 单机、主备实例默认账号的密码不能带有冒号(:)，否则无法创建普通账号。\&quot;
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createAclAccount(createAclAccountRequest?: CreateAclAccountRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/instances/{instance_id}/accounts",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (createAclAccountRequest !== null && createAclAccountRequest !== undefined) {
                if (createAclAccountRequest instanceof CreateAclAccountRequest) {
                    instanceId = createAclAccountRequest.instanceId;
                    body = createAclAccountRequest.body
                } else {
                    instanceId = createAclAccountRequest['instance_id'];
                    body = createAclAccountRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling createAclAccount.');
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
         * 创建过期key扫描任务（Redis 3.0 不支持过期key扫描）。
         * 过期key扫描会对键空间进行Redis的scan扫描，释放内存中已过期但是由于惰性删除机制而没有释放的内存空间。
         * 过期key扫描在主节点上执行，会对实例性能有一定的影响，建议不要在业务高峰期进行。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createAutoExpireScanTask(createAutoExpireScanTaskRequest?: CreateAutoExpireScanTaskRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/instances/{instance_id}/scan-expire-keys-task",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;

            if (createAutoExpireScanTaskRequest !== null && createAutoExpireScanTaskRequest !== undefined) {
                if (createAutoExpireScanTaskRequest instanceof CreateAutoExpireScanTaskRequest) {
                    instanceId = createAutoExpireScanTaskRequest.instanceId;
                } else {
                    instanceId = createAutoExpireScanTaskRequest['instance_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling createAutoExpireScanTask.');
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 为Redis实例创建大key分析任务。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createBigkeyScanTask(createBigkeyScanTaskRequest?: CreateBigkeyScanTaskRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/instances/{instance_id}/bigkey-task",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;

            if (createBigkeyScanTaskRequest !== null && createBigkeyScanTaskRequest !== undefined) {
                if (createBigkeyScanTaskRequest instanceof CreateBigkeyScanTaskRequest) {
                    instanceId = createBigkeyScanTaskRequest.instanceId;
                } else {
                    instanceId = createBigkeyScanTaskRequest['instance_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling createBigkeyScanTask.');
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建备份导入页面实例连接测试
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createConnectivityTest(createConnectivityTestRequest?: CreateConnectivityTestRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/instance/{instance_id}/connectivity-test",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (createConnectivityTestRequest !== null && createConnectivityTestRequest !== undefined) {
                if (createConnectivityTestRequest instanceof CreateConnectivityTestRequest) {
                    instanceId = createConnectivityTestRequest.instanceId;
                    body = createConnectivityTestRequest.body
                } else {
                    instanceId = createConnectivityTestRequest['instance_id'];
                    body = createConnectivityTestRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling createConnectivityTest.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建自定义模板
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createCustomTemplate(createCustomTemplateRequest?: CreateCustomTemplateRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/config-templates",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createCustomTemplateRequest !== null && createCustomTemplateRequest !== undefined) {
                if (createCustomTemplateRequest instanceof CreateCustomTemplateRequest) {
                    body = createCustomTemplateRequest.body
                } else {
                    body = createCustomTemplateRequest['body'];
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
         * 诊断指定的缓存实例。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createDiagnosisTask(createDiagnosisTaskRequest?: CreateDiagnosisTaskRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/instances/{instance_id}/diagnosis",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (createDiagnosisTaskRequest !== null && createDiagnosisTaskRequest !== undefined) {
                if (createDiagnosisTaskRequest instanceof CreateDiagnosisTaskRequest) {
                    instanceId = createDiagnosisTaskRequest.instanceId;
                    body = createDiagnosisTaskRequest.body
                } else {
                    instanceId = createDiagnosisTaskRequest['instance_id'];
                    body = createDiagnosisTaskRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling createDiagnosisTask.');
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
         * 创建热key分析任务，Redis 3.0 不支持热key分析。
         * 
         * 热key分析需要将缓存实例配置参数maxmemory-policy设置为allkeys-lfu或volatile-lfu。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createHotkeyScanTask(createHotkeyScanTaskRequest?: CreateHotkeyScanTaskRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/instances/{instance_id}/hotkey-task",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;

            if (createHotkeyScanTaskRequest !== null && createHotkeyScanTaskRequest !== undefined) {
                if (createHotkeyScanTaskRequest instanceof CreateHotkeyScanTaskRequest) {
                    instanceId = createHotkeyScanTaskRequest.instanceId;
                } else {
                    instanceId = createHotkeyScanTaskRequest['instance_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling createHotkeyScanTask.');
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建缓存实例，该接口创建的缓存实例支持按需计费和包周期两种方式。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createInstance(createInstanceRequest?: CreateInstanceRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/instances",
                contentType: "application/json;charset=UTF-8",
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
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建数据迁移任务。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createMigrationTask(createMigrationTaskRequest?: CreateMigrationTaskRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/migration-task",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createMigrationTaskRequest !== null && createMigrationTaskRequest !== undefined) {
                if (createMigrationTaskRequest instanceof CreateMigrationTaskRequest) {
                    body = createMigrationTaskRequest.body
                } else {
                    body = createMigrationTaskRequest['body'];
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
         * 创建在线数据迁移任务。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createOnlineMigrationTask(createOnlineMigrationTaskRequest?: CreateOnlineMigrationTaskRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/migration/instance",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createOnlineMigrationTaskRequest !== null && createOnlineMigrationTaskRequest !== undefined) {
                if (createOnlineMigrationTaskRequest instanceof CreateOnlineMigrationTaskRequest) {
                    body = createOnlineMigrationTaskRequest.body
                } else {
                    body = createOnlineMigrationTaskRequest['body'];
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
         * 新增/修改高级备份信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createOrUpdateBackUpInfo(createOrUpdateBackUpInfoRequest?: CreateOrUpdateBackUpInfoRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/instances/{instance_id}/additional-backups",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (createOrUpdateBackUpInfoRequest !== null && createOrUpdateBackUpInfoRequest !== undefined) {
                if (createOrUpdateBackUpInfoRequest instanceof CreateOrUpdateBackUpInfoRequest) {
                    instanceId = createOrUpdateBackUpInfoRequest.instanceId;
                    body = createOrUpdateBackUpInfoRequest.body
                } else {
                    instanceId = createOrUpdateBackUpInfoRequest['instance_id'];
                    body = createOrUpdateBackUpInfoRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling createOrUpdateBackUpInfo.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 采集Redis运行日志。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createRedislog(createRedislogRequest?: CreateRedislogRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/instances/{instance_id}/redislog",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let logType;
            
            let queryTime;
            
            let replicationId;

            if (createRedislogRequest !== null && createRedislogRequest !== undefined) {
                if (createRedislogRequest instanceof CreateRedislogRequest) {
                    instanceId = createRedislogRequest.instanceId;
                    logType = createRedislogRequest.logType;
                    queryTime = createRedislogRequest.queryTime;
                    replicationId = createRedislogRequest.replicationId;
                } else {
                    instanceId = createRedislogRequest['instance_id'];
                    logType = createRedislogRequest['log_type'];
                    queryTime = createRedislogRequest['query_time'];
                    replicationId = createRedislogRequest['replication_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling createRedislog.');
            }
            if (logType === null || logType === undefined) {
                throw new RequiredError('logType','Required parameter logType was null or undefined when calling createRedislog.');
            }
            if (logType !== null && logType !== undefined) {
                localVarQueryParameter['log_type'] = logType;
            }
            if (queryTime !== null && queryTime !== undefined) {
                localVarQueryParameter['query_time'] = queryTime;
            }
            if (replicationId !== null && replicationId !== undefined) {
                localVarQueryParameter['replication_id'] = replicationId;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取日志下载链接。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createRedislogDownloadLink(createRedislogDownloadLinkRequest?: CreateRedislogDownloadLinkRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/instances/{instance_id}/redislog/{id}/links",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let id;

            if (createRedislogDownloadLinkRequest !== null && createRedislogDownloadLinkRequest !== undefined) {
                if (createRedislogDownloadLinkRequest instanceof CreateRedislogDownloadLinkRequest) {
                    instanceId = createRedislogDownloadLinkRequest.instanceId;
                    id = createRedislogDownloadLinkRequest.id;
                } else {
                    instanceId = createRedislogDownloadLinkRequest['instance_id'];
                    id = createRedislogDownloadLinkRequest['id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling createRedislogDownloadLink.');
            }
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling createRedislogDownloadLink.');
            }

            options.pathParams = { 'instance_id': instanceId,'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除所创建的ACL普通账号
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteAclAccount(deleteAclAccountRequest?: DeleteAclAccountRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/instances/{instance_id}/accounts/{account_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let accountId;

            if (deleteAclAccountRequest !== null && deleteAclAccountRequest !== undefined) {
                if (deleteAclAccountRequest instanceof DeleteAclAccountRequest) {
                    instanceId = deleteAclAccountRequest.instanceId;
                    accountId = deleteAclAccountRequest.accountId;
                } else {
                    instanceId = deleteAclAccountRequest['instance_id'];
                    accountId = deleteAclAccountRequest['account_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling deleteAclAccount.');
            }
            if (accountId === null || accountId === undefined) {
            throw new RequiredError('accountId','Required parameter accountId was null or undefined when calling deleteAclAccount.');
            }

            options.pathParams = { 'instance_id': instanceId,'account_id': accountId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除后台任务
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteBackgroundTask(deleteBackgroundTaskRequest?: DeleteBackgroundTaskRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/instances/{instance_id}/tasks/{task_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let taskId;

            if (deleteBackgroundTaskRequest !== null && deleteBackgroundTaskRequest !== undefined) {
                if (deleteBackgroundTaskRequest instanceof DeleteBackgroundTaskRequest) {
                    instanceId = deleteBackgroundTaskRequest.instanceId;
                    taskId = deleteBackgroundTaskRequest.taskId;
                } else {
                    instanceId = deleteBackgroundTaskRequest['instance_id'];
                    taskId = deleteBackgroundTaskRequest['task_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling deleteBackgroundTask.');
            }
            if (taskId === null || taskId === undefined) {
            throw new RequiredError('taskId','Required parameter taskId was null or undefined when calling deleteBackgroundTask.');
            }

            options.pathParams = { 'instance_id': instanceId,'task_id': taskId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除缓存实例已备份的文件。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteBackupFile(deleteBackupFileRequest?: DeleteBackupFileRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/instances/{instance_id}/backups/{backup_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let backupId;
            
            let instanceId;

            if (deleteBackupFileRequest !== null && deleteBackupFileRequest !== undefined) {
                if (deleteBackupFileRequest instanceof DeleteBackupFileRequest) {
                    backupId = deleteBackupFileRequest.backupId;
                    instanceId = deleteBackupFileRequest.instanceId;
                } else {
                    backupId = deleteBackupFileRequest['backup_id'];
                    instanceId = deleteBackupFileRequest['instance_id'];
                }
            }

        
            if (backupId === null || backupId === undefined) {
            throw new RequiredError('backupId','Required parameter backupId was null or undefined when calling deleteBackupFile.');
            }
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling deleteBackupFile.');
            }

            options.pathParams = { 'backup_id': backupId,'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除大key分析记录。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteBigkeyScanTask(deleteBigkeyScanTaskRequest?: DeleteBigkeyScanTaskRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/instances/{instance_id}/bigkey-task/{bigkey_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let bigkeyId;

            if (deleteBigkeyScanTaskRequest !== null && deleteBigkeyScanTaskRequest !== undefined) {
                if (deleteBigkeyScanTaskRequest instanceof DeleteBigkeyScanTaskRequest) {
                    instanceId = deleteBigkeyScanTaskRequest.instanceId;
                    bigkeyId = deleteBigkeyScanTaskRequest.bigkeyId;
                } else {
                    instanceId = deleteBigkeyScanTaskRequest['instance_id'];
                    bigkeyId = deleteBigkeyScanTaskRequest['bigkey_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling deleteBigkeyScanTask.');
            }
            if (bigkeyId === null || bigkeyId === undefined) {
            throw new RequiredError('bigkeyId','Required parameter bigkeyId was null or undefined when calling deleteBigkeyScanTask.');
            }

            options.pathParams = { 'instance_id': instanceId,'bigkey_id': bigkeyId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除自定义模板
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteConfigTemplate(deleteConfigTemplateRequest?: DeleteConfigTemplateRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/config-templates/{template_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let templateId;

            if (deleteConfigTemplateRequest !== null && deleteConfigTemplateRequest !== undefined) {
                if (deleteConfigTemplateRequest instanceof DeleteConfigTemplateRequest) {
                    templateId = deleteConfigTemplateRequest.templateId;
                } else {
                    templateId = deleteConfigTemplateRequest['template_id'];
                }
            }

        
            if (templateId === null || templateId === undefined) {
            throw new RequiredError('templateId','Required parameter templateId was null or undefined when calling deleteConfigTemplate.');
            }

            options.pathParams = { 'template_id': templateId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除热key分析任务。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteHotkeyScanTask(deleteHotkeyScanTaskRequest?: DeleteHotkeyScanTaskRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/instances/{instance_id}/hotkey-task/{hotkey_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let hotkeyId;

            if (deleteHotkeyScanTaskRequest !== null && deleteHotkeyScanTaskRequest !== undefined) {
                if (deleteHotkeyScanTaskRequest instanceof DeleteHotkeyScanTaskRequest) {
                    instanceId = deleteHotkeyScanTaskRequest.instanceId;
                    hotkeyId = deleteHotkeyScanTaskRequest.hotkeyId;
                } else {
                    instanceId = deleteHotkeyScanTaskRequest['instance_id'];
                    hotkeyId = deleteHotkeyScanTaskRequest['hotkey_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling deleteHotkeyScanTask.');
            }
            if (hotkeyId === null || hotkeyId === undefined) {
            throw new RequiredError('hotkeyId','Required parameter hotkeyId was null or undefined when calling deleteHotkeyScanTask.');
            }

            options.pathParams = { 'instance_id': instanceId,'hotkey_id': hotkeyId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 将只读副本的IP从域名中摘除，摘除成功后，只读域名不会再解析到该副本IP。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteIpFromDomainName(deleteIpFromDomainNameRequest?: DeleteIpFromDomainNameRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/instances/{instance_id}/groups/{group_id}/replications/{node_id}/remove-ip",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let groupId;
            
            let nodeId;

            if (deleteIpFromDomainNameRequest !== null && deleteIpFromDomainNameRequest !== undefined) {
                if (deleteIpFromDomainNameRequest instanceof DeleteIpFromDomainNameRequest) {
                    instanceId = deleteIpFromDomainNameRequest.instanceId;
                    groupId = deleteIpFromDomainNameRequest.groupId;
                    nodeId = deleteIpFromDomainNameRequest.nodeId;
                } else {
                    instanceId = deleteIpFromDomainNameRequest['instance_id'];
                    groupId = deleteIpFromDomainNameRequest['group_id'];
                    nodeId = deleteIpFromDomainNameRequest['node_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling deleteIpFromDomainName.');
            }
            if (groupId === null || groupId === undefined) {
            throw new RequiredError('groupId','Required parameter groupId was null or undefined when calling deleteIpFromDomainName.');
            }
            if (nodeId === null || nodeId === undefined) {
            throw new RequiredError('nodeId','Required parameter nodeId was null or undefined when calling deleteIpFromDomainName.');
            }

            options.pathParams = { 'instance_id': instanceId,'group_id': groupId,'node_id': nodeId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除数据迁移任务。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteMigrationTask(deleteMigrationTaskRequest?: DeleteMigrationTaskRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/migration-tasks/delete",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (deleteMigrationTaskRequest !== null && deleteMigrationTaskRequest !== undefined) {
                if (deleteMigrationTaskRequest instanceof DeleteMigrationTaskRequest) {
                    body = deleteMigrationTaskRequest.body
                } else {
                    body = deleteMigrationTaskRequest['body'];
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
         * 删除指定的缓存实例，释放该实例的所有资源。
         * 
         * &gt; 如果是删除按需资源，请按照本章节执行；如果是删除包周期资源，即退订，请参考[退订包周期资源](https://support.huaweicloud.com/api-oce/zh-cn_topic_0082522030.html#section2)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteSingleInstance(deleteSingleInstanceRequest?: DeleteSingleInstanceRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/instances/{instance_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;

            if (deleteSingleInstanceRequest !== null && deleteSingleInstanceRequest !== undefined) {
                if (deleteSingleInstanceRequest instanceof DeleteSingleInstanceRequest) {
                    instanceId = deleteSingleInstanceRequest.instanceId;
                } else {
                    instanceId = deleteSingleInstanceRequest['instance_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling deleteSingleInstance.');
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 进行IP交换
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        exchangeInstanceIp(exchangeInstanceIpRequest?: ExchangeInstanceIpRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/migration-task/{task_id}/exchange-ip",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let taskId;

            if (exchangeInstanceIpRequest !== null && exchangeInstanceIpRequest !== undefined) {
                if (exchangeInstanceIpRequest instanceof ExchangeInstanceIpRequest) {
                    taskId = exchangeInstanceIpRequest.taskId;
                    body = exchangeInstanceIpRequest.body
                } else {
                    taskId = exchangeInstanceIpRequest['task_id'];
                    body = exchangeInstanceIpRequest['body'];
                }
            }

        
            if (taskId === null || taskId === undefined) {
            throw new RequiredError('taskId','Required parameter taskId was null or undefined when calling exchangeInstanceIp.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'task_id': taskId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 集群分片倒换，适用于proxy和cluster实例
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        executeClusterSwitchover(executeClusterSwitchoverRequest?: ExecuteClusterSwitchoverRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/instance/{instance_id}/groups/{group_id}/replications/{node_id}/async-switchover",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let groupId;
            
            let nodeId;

            if (executeClusterSwitchoverRequest !== null && executeClusterSwitchoverRequest !== undefined) {
                if (executeClusterSwitchoverRequest instanceof ExecuteClusterSwitchoverRequest) {
                    instanceId = executeClusterSwitchoverRequest.instanceId;
                    groupId = executeClusterSwitchoverRequest.groupId;
                    nodeId = executeClusterSwitchoverRequest.nodeId;
                } else {
                    instanceId = executeClusterSwitchoverRequest['instance_id'];
                    groupId = executeClusterSwitchoverRequest['group_id'];
                    nodeId = executeClusterSwitchoverRequest['node_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling executeClusterSwitchover.');
            }
            if (groupId === null || groupId === undefined) {
            throw new RequiredError('groupId','Required parameter groupId was null or undefined when calling executeClusterSwitchover.');
            }
            if (nodeId === null || nodeId === undefined) {
            throw new RequiredError('nodeId','Required parameter nodeId was null or undefined when calling executeClusterSwitchover.');
            }

            options.pathParams = { 'instance_id': instanceId,'group_id': groupId,'node_id': nodeId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 登入web-cli，执行redis命令
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        executeCommandMobilization(executeCommandMobilizationRequest?: ExecuteCommandMobilizationRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/instances/{instance_id}/webcli/command",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (executeCommandMobilizationRequest !== null && executeCommandMobilizationRequest !== undefined) {
                if (executeCommandMobilizationRequest instanceof ExecuteCommandMobilizationRequest) {
                    instanceId = executeCommandMobilizationRequest.instanceId;
                    body = executeCommandMobilizationRequest.body
                } else {
                    instanceId = executeCommandMobilizationRequest['instance_id'];
                    body = executeCommandMobilizationRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling executeCommandMobilization.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询ACL账户列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAclAccounts(listAclAccountsRequest?: ListAclAccountsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/instances/{instance_id}/accounts",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;

            if (listAclAccountsRequest !== null && listAclAccountsRequest !== undefined) {
                if (listAclAccountsRequest instanceof ListAclAccountsRequest) {
                    instanceId = listAclAccountsRequest.instanceId;
                } else {
                    instanceId = listAclAccountsRequest['instance_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listAclAccounts.');
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询所在局点的可用区信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAvailableZones() {
            const options = {
                method: "GET",
                url: "/v2/available-zones",
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
         * 查询后台任务列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listBackgroundTask(listBackgroundTaskRequest?: ListBackgroundTaskRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/instances/{instance_id}/tasks",
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

            if (listBackgroundTaskRequest !== null && listBackgroundTaskRequest !== undefined) {
                if (listBackgroundTaskRequest instanceof ListBackgroundTaskRequest) {
                    instanceId = listBackgroundTaskRequest.instanceId;
                    offset = listBackgroundTaskRequest.offset;
                    limit = listBackgroundTaskRequest.limit;
                    startTime = listBackgroundTaskRequest.startTime;
                    endTime = listBackgroundTaskRequest.endTime;
                } else {
                    instanceId = listBackgroundTaskRequest['instance_id'];
                    offset = listBackgroundTaskRequest['offset'];
                    limit = listBackgroundTaskRequest['limit'];
                    startTime = listBackgroundTaskRequest['start_time'];
                    endTime = listBackgroundTaskRequest['end_time'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listBackgroundTask.');
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

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取指定实例的备份文件下载链接，下载备份文件。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listBackupFileLinks(listBackupFileLinksRequest?: ListBackupFileLinksRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/instances/{instance_id}/backups/{backup_id}/links",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let backupId;

            if (listBackupFileLinksRequest !== null && listBackupFileLinksRequest !== undefined) {
                if (listBackupFileLinksRequest instanceof ListBackupFileLinksRequest) {
                    instanceId = listBackupFileLinksRequest.instanceId;
                    backupId = listBackupFileLinksRequest.backupId;
                    body = listBackupFileLinksRequest.body
                } else {
                    instanceId = listBackupFileLinksRequest['instance_id'];
                    backupId = listBackupFileLinksRequest['backup_id'];
                    body = listBackupFileLinksRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listBackupFileLinks.');
            }
            if (backupId === null || backupId === undefined) {
            throw new RequiredError('backupId','Required parameter backupId was null or undefined when calling listBackupFileLinks.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId,'backup_id': backupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询指定缓存实例的备份信息列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listBackupRecords(listBackupRecordsRequest?: ListBackupRecordsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/instances/{instance_id}/backups",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let beginTime;
            
            let endTime;
            
            let limit;
            
            let offset;

            if (listBackupRecordsRequest !== null && listBackupRecordsRequest !== undefined) {
                if (listBackupRecordsRequest instanceof ListBackupRecordsRequest) {
                    instanceId = listBackupRecordsRequest.instanceId;
                    beginTime = listBackupRecordsRequest.beginTime;
                    endTime = listBackupRecordsRequest.endTime;
                    limit = listBackupRecordsRequest.limit;
                    offset = listBackupRecordsRequest.offset;
                } else {
                    instanceId = listBackupRecordsRequest['instance_id'];
                    beginTime = listBackupRecordsRequest['begin_time'];
                    endTime = listBackupRecordsRequest['end_time'];
                    limit = listBackupRecordsRequest['limit'];
                    offset = listBackupRecordsRequest['offset'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listBackupRecords.');
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

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询大key分析任务列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listBigkeyScanTasks(listBigkeyScanTasksRequest?: ListBigkeyScanTasksRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/instances/{instance_id}/bigkey-tasks",
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
            
            let status;

            if (listBigkeyScanTasksRequest !== null && listBigkeyScanTasksRequest !== undefined) {
                if (listBigkeyScanTasksRequest instanceof ListBigkeyScanTasksRequest) {
                    instanceId = listBigkeyScanTasksRequest.instanceId;
                    offset = listBigkeyScanTasksRequest.offset;
                    limit = listBigkeyScanTasksRequest.limit;
                    status = listBigkeyScanTasksRequest.status;
                } else {
                    instanceId = listBigkeyScanTasksRequest['instance_id'];
                    offset = listBigkeyScanTasksRequest['offset'];
                    limit = listBigkeyScanTasksRequest['limit'];
                    status = listBigkeyScanTasksRequest['status'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listBigkeyScanTasks.');
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

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询任务中心任务列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listCenterTask(listCenterTaskRequest?: ListCenterTaskRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/tasks",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let offset;
            
            let limit;
            
            let startTime;
            
            let endTime;

            if (listCenterTaskRequest !== null && listCenterTaskRequest !== undefined) {
                if (listCenterTaskRequest instanceof ListCenterTaskRequest) {
                    offset = listCenterTaskRequest.offset;
                    limit = listCenterTaskRequest.limit;
                    startTime = listCenterTaskRequest.startTime;
                    endTime = listCenterTaskRequest.endTime;
                } else {
                    offset = listCenterTaskRequest['offset'];
                    limit = listCenterTaskRequest['limit'];
                    startTime = listCenterTaskRequest['start_time'];
                    endTime = listCenterTaskRequest['end_time'];
                }
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

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询实例的参数修改记录列表，支持按照关键字查询
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listConfigHistories(listConfigHistoriesRequest?: ListConfigHistoriesRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/instances/{instance_id}/config-histories",
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

            if (listConfigHistoriesRequest !== null && listConfigHistoriesRequest !== undefined) {
                if (listConfigHistoriesRequest instanceof ListConfigHistoriesRequest) {
                    instanceId = listConfigHistoriesRequest.instanceId;
                    offset = listConfigHistoriesRequest.offset;
                    limit = listConfigHistoriesRequest.limit;
                } else {
                    instanceId = listConfigHistoriesRequest['instance_id'];
                    offset = listConfigHistoriesRequest['offset'];
                    limit = listConfigHistoriesRequest['limit'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listConfigHistories.');
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
         * 查询租户的参数模板列表，支持按照条件查询
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listConfigTemplates(listConfigTemplatesRequest?: ListConfigTemplatesRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/config-templates",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let type;
            
            let name;
            
            let templateId;
            
            let engine;
            
            let engineVersion;
            
            let cacheMode;
            
            let description;
            
            let offset;
            
            let limit;

            if (listConfigTemplatesRequest !== null && listConfigTemplatesRequest !== undefined) {
                if (listConfigTemplatesRequest instanceof ListConfigTemplatesRequest) {
                    type = listConfigTemplatesRequest.type;
                    name = listConfigTemplatesRequest.name;
                    templateId = listConfigTemplatesRequest.templateId;
                    engine = listConfigTemplatesRequest.engine;
                    engineVersion = listConfigTemplatesRequest.engineVersion;
                    cacheMode = listConfigTemplatesRequest.cacheMode;
                    description = listConfigTemplatesRequest.description;
                    offset = listConfigTemplatesRequest.offset;
                    limit = listConfigTemplatesRequest.limit;
                } else {
                    type = listConfigTemplatesRequest['type'];
                    name = listConfigTemplatesRequest['name'];
                    templateId = listConfigTemplatesRequest['template_id'];
                    engine = listConfigTemplatesRequest['engine'];
                    engineVersion = listConfigTemplatesRequest['engine_version'];
                    cacheMode = listConfigTemplatesRequest['cache_mode'];
                    description = listConfigTemplatesRequest['description'];
                    offset = listConfigTemplatesRequest['offset'];
                    limit = listConfigTemplatesRequest['limit'];
                }
            }

        
            if (type === null || type === undefined) {
                throw new RequiredError('type','Required parameter type was null or undefined when calling listConfigTemplates.');
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (templateId !== null && templateId !== undefined) {
                localVarQueryParameter['template_id'] = templateId;
            }
            if (engine !== null && engine !== undefined) {
                localVarQueryParameter['engine'] = engine;
            }
            if (engineVersion !== null && engineVersion !== undefined) {
                localVarQueryParameter['engine_version'] = engineVersion;
            }
            if (cacheMode !== null && cacheMode !== undefined) {
                localVarQueryParameter['cache_mode'] = cacheMode;
            }
            if (description !== null && description !== undefined) {
                localVarQueryParameter['description'] = description;
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
         * 查询指定实例的配置参数信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listConfigurations(listConfigurationsRequest?: ListConfigurationsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/instances/{instance_id}/configs",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;

            if (listConfigurationsRequest !== null && listConfigurationsRequest !== undefined) {
                if (listConfigurationsRequest instanceof ListConfigurationsRequest) {
                    instanceId = listConfigurationsRequest.instanceId;
                } else {
                    instanceId = listConfigurationsRequest['instance_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listConfigurations.');
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询指定缓存实例诊断任务列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listDiagnosisTasks(listDiagnosisTasksRequest?: ListDiagnosisTasksRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/instances/{instance_id}/diagnosis",
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

            if (listDiagnosisTasksRequest !== null && listDiagnosisTasksRequest !== undefined) {
                if (listDiagnosisTasksRequest instanceof ListDiagnosisTasksRequest) {
                    instanceId = listDiagnosisTasksRequest.instanceId;
                    limit = listDiagnosisTasksRequest.limit;
                    offset = listDiagnosisTasksRequest.offset;
                } else {
                    instanceId = listDiagnosisTasksRequest['instance_id'];
                    limit = listDiagnosisTasksRequest['limit'];
                    offset = listDiagnosisTasksRequest['offset'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listDiagnosisTasks.');
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
         * 在创建缓存实例时，需要配置订购的产品规格编码（spec_code），可通过该接口查询产品规格，查询条件不选时默认查询全部。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listFlavors(listFlavorsRequest?: ListFlavorsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/flavors",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let specCode;
            
            let cacheMode;
            
            let engine;
            
            let engineVersion;
            
            let cpuType;
            
            let capacity;

            if (listFlavorsRequest !== null && listFlavorsRequest !== undefined) {
                if (listFlavorsRequest instanceof ListFlavorsRequest) {
                    instanceId = listFlavorsRequest.instanceId;
                    specCode = listFlavorsRequest.specCode;
                    cacheMode = listFlavorsRequest.cacheMode;
                    engine = listFlavorsRequest.engine;
                    engineVersion = listFlavorsRequest.engineVersion;
                    cpuType = listFlavorsRequest.cpuType;
                    capacity = listFlavorsRequest.capacity;
                } else {
                    instanceId = listFlavorsRequest['instance_id'];
                    specCode = listFlavorsRequest['spec_code'];
                    cacheMode = listFlavorsRequest['cache_mode'];
                    engine = listFlavorsRequest['engine'];
                    engineVersion = listFlavorsRequest['engine_version'];
                    cpuType = listFlavorsRequest['cpu_type'];
                    capacity = listFlavorsRequest['capacity'];
                }
            }

        
            if (instanceId !== null && instanceId !== undefined) {
                localVarQueryParameter['instance_id'] = instanceId;
            }
            if (specCode !== null && specCode !== undefined) {
                localVarQueryParameter['spec_code'] = specCode;
            }
            if (cacheMode !== null && cacheMode !== undefined) {
                localVarQueryParameter['cache_mode'] = cacheMode;
            }
            if (engine !== null && engine !== undefined) {
                localVarQueryParameter['engine'] = engine;
            }
            if (engineVersion !== null && engineVersion !== undefined) {
                localVarQueryParameter['engine_version'] = engineVersion;
            }
            if (cpuType !== null && cpuType !== undefined) {
                localVarQueryParameter['cpu_type'] = cpuType;
            }
            if (capacity !== null && capacity !== undefined) {
                localVarQueryParameter['capacity'] = capacity;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询读写分离实例和集群实例的分片和副本信息，其中，读写分离实例仅Redis4.0和Redis5.0的主备实例支持。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listGroupReplicationInfo(listGroupReplicationInfoRequest?: ListGroupReplicationInfoRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/instance/{instance_id}/groups",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;

            if (listGroupReplicationInfoRequest !== null && listGroupReplicationInfoRequest !== undefined) {
                if (listGroupReplicationInfoRequest instanceof ListGroupReplicationInfoRequest) {
                    instanceId = listGroupReplicationInfoRequest.instanceId;
                } else {
                    instanceId = listGroupReplicationInfoRequest['instance_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listGroupReplicationInfo.');
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询热key分析历史记录。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listHotKeyScanTasks(listHotKeyScanTasksRequest?: ListHotKeyScanTasksRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/instances/{instance_id}/hotkey-tasks",
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
            
            let status;

            if (listHotKeyScanTasksRequest !== null && listHotKeyScanTasksRequest !== undefined) {
                if (listHotKeyScanTasksRequest instanceof ListHotKeyScanTasksRequest) {
                    instanceId = listHotKeyScanTasksRequest.instanceId;
                    offset = listHotKeyScanTasksRequest.offset;
                    limit = listHotKeyScanTasksRequest.limit;
                    status = listHotKeyScanTasksRequest.status;
                } else {
                    instanceId = listHotKeyScanTasksRequest['instance_id'];
                    offset = listHotKeyScanTasksRequest['offset'];
                    limit = listHotKeyScanTasksRequest['limit'];
                    status = listHotKeyScanTasksRequest['status'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listHotKeyScanTasks.');
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

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询租户的缓存实例列表，支持按照条件查询。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listInstances(listInstancesRequest?: ListInstancesRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/instances",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let includeFailure;
            
            let includeDelete;
            
            let name;
            
            let offset;
            
            let limit;
            
            let status;
            
            let nameEqual;
            
            let tags;
            
            let ip;

            if (listInstancesRequest !== null && listInstancesRequest !== undefined) {
                if (listInstancesRequest instanceof ListInstancesRequest) {
                    instanceId = listInstancesRequest.instanceId;
                    includeFailure = listInstancesRequest.includeFailure;
                    includeDelete = listInstancesRequest.includeDelete;
                    name = listInstancesRequest.name;
                    offset = listInstancesRequest.offset;
                    limit = listInstancesRequest.limit;
                    status = listInstancesRequest.status;
                    nameEqual = listInstancesRequest.nameEqual;
                    tags = listInstancesRequest.tags;
                    ip = listInstancesRequest.ip;
                } else {
                    instanceId = listInstancesRequest['instance_id'];
                    includeFailure = listInstancesRequest['include_failure'];
                    includeDelete = listInstancesRequest['include_delete'];
                    name = listInstancesRequest['name'];
                    offset = listInstancesRequest['offset'];
                    limit = listInstancesRequest['limit'];
                    status = listInstancesRequest['status'];
                    nameEqual = listInstancesRequest['name_equal'];
                    tags = listInstancesRequest['tags'];
                    ip = listInstancesRequest['ip'];
                }
            }

        
            if (instanceId !== null && instanceId !== undefined) {
                localVarQueryParameter['instance_id'] = instanceId;
            }
            if (includeFailure !== null && includeFailure !== undefined) {
                localVarQueryParameter['include_failure'] = includeFailure;
            }
            if (includeDelete !== null && includeDelete !== undefined) {
                localVarQueryParameter['include_delete'] = includeDelete;
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
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (nameEqual !== null && nameEqual !== undefined) {
                localVarQueryParameter['name_equal'] = nameEqual;
            }
            if (tags !== null && tags !== undefined) {
                localVarQueryParameter['tags'] = tags;
            }
            if (ip !== null && ip !== undefined) {
                localVarQueryParameter['ip'] = ip;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询维护时间窗开始时间和结束时间。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listMaintenanceWindows() {
            const options = {
                method: "GET",
                url: "/v2/instances/maintain-windows",
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
         * 查询迁移任务列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listMigrationTask(listMigrationTaskRequest?: ListMigrationTaskRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/migration-tasks",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let offset;
            
            let limit;
            
            let name;

            if (listMigrationTaskRequest !== null && listMigrationTaskRequest !== undefined) {
                if (listMigrationTaskRequest instanceof ListMigrationTaskRequest) {
                    offset = listMigrationTaskRequest.offset;
                    limit = listMigrationTaskRequest.limit;
                    name = listMigrationTaskRequest.name;
                } else {
                    offset = listMigrationTaskRequest['offset'];
                    limit = listMigrationTaskRequest['limit'];
                    name = listMigrationTaskRequest['name'];
                }
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

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询迁移日志列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listMigrationTaskLogs(listMigrationTaskLogsRequest?: ListMigrationTaskLogsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/migration-task/{task_id}/logs",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let taskId;
            
            let offset;
            
            let limit;
            
            let logLevel;

            if (listMigrationTaskLogsRequest !== null && listMigrationTaskLogsRequest !== undefined) {
                if (listMigrationTaskLogsRequest instanceof ListMigrationTaskLogsRequest) {
                    taskId = listMigrationTaskLogsRequest.taskId;
                    offset = listMigrationTaskLogsRequest.offset;
                    limit = listMigrationTaskLogsRequest.limit;
                    logLevel = listMigrationTaskLogsRequest.logLevel;
                } else {
                    taskId = listMigrationTaskLogsRequest['task_id'];
                    offset = listMigrationTaskLogsRequest['offset'];
                    limit = listMigrationTaskLogsRequest['limit'];
                    logLevel = listMigrationTaskLogsRequest['log_level'];
                }
            }

        
            if (taskId === null || taskId === undefined) {
            throw new RequiredError('taskId','Required parameter taskId was null or undefined when calling listMigrationTaskLogs.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (logLevel !== null && logLevel !== undefined) {
                localVarQueryParameter['log_level'] = logLevel;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'task_id': taskId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询主维度对象列表，主维度ID当前支持dcs_instance_id，dcs_memcached_instance_id。
         * &gt; 该接口当前仅在中国华南区开放。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listMonitoredObjects(listMonitoredObjectsRequest?: ListMonitoredObjectsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/dims/monitored-objects",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let dimName;
            
            let offset;
            
            let limit;

            if (listMonitoredObjectsRequest !== null && listMonitoredObjectsRequest !== undefined) {
                if (listMonitoredObjectsRequest instanceof ListMonitoredObjectsRequest) {
                    dimName = listMonitoredObjectsRequest.dimName;
                    offset = listMonitoredObjectsRequest.offset;
                    limit = listMonitoredObjectsRequest.limit;
                } else {
                    dimName = listMonitoredObjectsRequest['dim_name'];
                    offset = listMonitoredObjectsRequest['offset'];
                    limit = listMonitoredObjectsRequest['limit'];
                }
            }

        
            if (dimName === null || dimName === undefined) {
                throw new RequiredError('dimName','Required parameter dimName was null or undefined when calling listMonitoredObjects.');
            }
            if (dimName !== null && dimName !== undefined) {
                localVarQueryParameter['dim_name'] = dimName;
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
         * 查询主维度下子维度监控对象列表，当前支持子维度的主维度ID的有 dcs_instance_id
         * &gt; 该接口当前仅在中国华南区开放。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listMonitoredObjectsOfInstance(listMonitoredObjectsOfInstanceRequest?: ListMonitoredObjectsOfInstanceRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/dims/monitored-objects/{instance_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let dimName;

            if (listMonitoredObjectsOfInstanceRequest !== null && listMonitoredObjectsOfInstanceRequest !== undefined) {
                if (listMonitoredObjectsOfInstanceRequest instanceof ListMonitoredObjectsOfInstanceRequest) {
                    instanceId = listMonitoredObjectsOfInstanceRequest.instanceId;
                    dimName = listMonitoredObjectsOfInstanceRequest.dimName;
                } else {
                    instanceId = listMonitoredObjectsOfInstanceRequest['instance_id'];
                    dimName = listMonitoredObjectsOfInstanceRequest['dim_name'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listMonitoredObjectsOfInstance.');
            }
            if (dimName === null || dimName === undefined) {
                throw new RequiredError('dimName','Required parameter dimName was null or undefined when calling listMonitoredObjectsOfInstance.');
            }
            if (dimName !== null && dimName !== undefined) {
                localVarQueryParameter['dim_name'] = dimName;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询该租户在当前区域下不同状态的实例数。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listNumberOfInstancesInDifferentStatus(listNumberOfInstancesInDifferentStatusRequest?: ListNumberOfInstancesInDifferentStatusRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/instances/status",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let includeFailure;

            if (listNumberOfInstancesInDifferentStatusRequest !== null && listNumberOfInstancesInDifferentStatusRequest !== undefined) {
                if (listNumberOfInstancesInDifferentStatusRequest instanceof ListNumberOfInstancesInDifferentStatusRequest) {
                    includeFailure = listNumberOfInstancesInDifferentStatusRequest.includeFailure;
                } else {
                    includeFailure = listNumberOfInstancesInDifferentStatusRequest['include_failure'];
                }
            }

        
            if (includeFailure !== null && includeFailure !== undefined) {
                localVarQueryParameter['include_failure'] = includeFailure;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询Redis运行日志列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listRedislog(listRedislogRequest?: ListRedislogRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/instances/{instance_id}/redislog",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let logType;
            
            let offset;
            
            let limit;

            if (listRedislogRequest !== null && listRedislogRequest !== undefined) {
                if (listRedislogRequest instanceof ListRedislogRequest) {
                    instanceId = listRedislogRequest.instanceId;
                    logType = listRedislogRequest.logType;
                    offset = listRedislogRequest.offset;
                    limit = listRedislogRequest.limit;
                } else {
                    instanceId = listRedislogRequest['instance_id'];
                    logType = listRedislogRequest['log_type'];
                    offset = listRedislogRequest['offset'];
                    limit = listRedislogRequest['limit'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listRedislog.');
            }
            if (logType === null || logType === undefined) {
                throw new RequiredError('logType','Required parameter logType was null or undefined when calling listRedislog.');
            }
            if (logType !== null && logType !== undefined) {
                localVarQueryParameter['log_type'] = logType;
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
         * 查询指定缓存实例的恢复记录列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listRestoreRecords(listRestoreRecordsRequest?: ListRestoreRecordsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/instances/{instance_id}/restores",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let beginTime;
            
            let endTime;
            
            let limit;
            
            let offset;

            if (listRestoreRecordsRequest !== null && listRestoreRecordsRequest !== undefined) {
                if (listRestoreRecordsRequest instanceof ListRestoreRecordsRequest) {
                    instanceId = listRestoreRecordsRequest.instanceId;
                    beginTime = listRestoreRecordsRequest.beginTime;
                    endTime = listRestoreRecordsRequest.endTime;
                    limit = listRestoreRecordsRequest.limit;
                    offset = listRestoreRecordsRequest.offset;
                } else {
                    instanceId = listRestoreRecordsRequest['instance_id'];
                    beginTime = listRestoreRecordsRequest['begin_time'];
                    endTime = listRestoreRecordsRequest['end_time'];
                    limit = listRestoreRecordsRequest['limit'];
                    offset = listRestoreRecordsRequest['offset'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listRestoreRecords.');
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

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询慢日志。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listSlowlog(listSlowlogRequest?: ListSlowlogRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/instances/{instance_id}/slowlog",
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
            
            let sortKey;
            
            let sortDir;

            if (listSlowlogRequest !== null && listSlowlogRequest !== undefined) {
                if (listSlowlogRequest instanceof ListSlowlogRequest) {
                    instanceId = listSlowlogRequest.instanceId;
                    startTime = listSlowlogRequest.startTime;
                    endTime = listSlowlogRequest.endTime;
                    offset = listSlowlogRequest.offset;
                    limit = listSlowlogRequest.limit;
                    sortKey = listSlowlogRequest.sortKey;
                    sortDir = listSlowlogRequest.sortDir;
                } else {
                    instanceId = listSlowlogRequest['instance_id'];
                    startTime = listSlowlogRequest['start_time'];
                    endTime = listSlowlogRequest['end_time'];
                    offset = listSlowlogRequest['offset'];
                    limit = listSlowlogRequest['limit'];
                    sortKey = listSlowlogRequest['sort_key'];
                    sortDir = listSlowlogRequest['sort_dir'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listSlowlog.');
            }
            if (startTime === null || startTime === undefined) {
                throw new RequiredError('startTime','Required parameter startTime was null or undefined when calling listSlowlog.');
            }
            if (startTime !== null && startTime !== undefined) {
                localVarQueryParameter['start_time'] = startTime;
            }
            if (endTime === null || endTime === undefined) {
                throw new RequiredError('endTime','Required parameter endTime was null or undefined when calling listSlowlog.');
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
            if (sortKey !== null && sortKey !== undefined) {
                localVarQueryParameter['sort_key'] = sortKey;
            }
            if (sortDir !== null && sortDir !== undefined) {
                localVarQueryParameter['sort_dir'] = sortDir;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询当前租户下处于“运行中”状态的缓存实例的统计信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listStatisticsOfRunningInstances() {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/instances/statistic",
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
         * 查询租户在指定Project中实例类型的所有资源标签集合。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listTagsOfTenant() {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/dcs/tags",
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
         * 登录webCli
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        loginWebCli(loginWebCliRequest?: LoginWebCliRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/instances/{instance_id}/webcli/auth",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (loginWebCliRequest !== null && loginWebCliRequest !== undefined) {
                if (loginWebCliRequest instanceof LoginWebCliRequest) {
                    instanceId = loginWebCliRequest.instanceId;
                    body = loginWebCliRequest.body
                } else {
                    instanceId = loginWebCliRequest['instance_id'];
                    body = loginWebCliRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling loginWebCli.');
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
         * 重置ACL账号密码。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        resetAclAccountPassWord(resetAclAccountPassWordRequest?: ResetAclAccountPassWordRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/instances/{instance_id}/accounts/{account_id}/password/reset",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let accountId;

            if (resetAclAccountPassWordRequest !== null && resetAclAccountPassWordRequest !== undefined) {
                if (resetAclAccountPassWordRequest instanceof ResetAclAccountPassWordRequest) {
                    instanceId = resetAclAccountPassWordRequest.instanceId;
                    accountId = resetAclAccountPassWordRequest.accountId;
                    body = resetAclAccountPassWordRequest.body
                } else {
                    instanceId = resetAclAccountPassWordRequest['instance_id'];
                    accountId = resetAclAccountPassWordRequest['account_id'];
                    body = resetAclAccountPassWordRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling resetAclAccountPassWord.');
            }
            if (accountId === null || accountId === undefined) {
            throw new RequiredError('accountId','Required parameter accountId was null or undefined when calling resetAclAccountPassWord.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId,'account_id': accountId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 重置缓存实例的密码。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        resetPassword(resetPasswordRequest?: ResetPasswordRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/instances/{instance_id}/password/reset",
                contentType: "application/json;charset=UTF-8",
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
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 用户可以为状态为“运行中”的DCS缓存实例进行规格变更，当前仅能支持按需实例的同副本或分片数量的实例规格变更。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        resizeInstance(resizeInstanceRequest?: ResizeInstanceRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/instances/{instance_id}/resize",
                contentType: "application/json;charset=UTF-8",
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
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 重启运行中的DCS缓存实例。
         * 
         * 清空Redis4.0/Redis5.0的实例数据，数据清空后，无法撤销，且无法恢复，请谨慎操作。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        restartOrFlushInstances(restartOrFlushInstancesRequest?: RestartOrFlushInstancesRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/instances/status",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (restartOrFlushInstancesRequest !== null && restartOrFlushInstancesRequest !== undefined) {
                if (restartOrFlushInstancesRequest instanceof RestartOrFlushInstancesRequest) {
                    body = restartOrFlushInstancesRequest.body
                } else {
                    body = restartOrFlushInstancesRequest['body'];
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
         * 恢复指定的缓存实例。
         * &gt; 只有主备和集群类型的缓存实例支持备份恢复操作，单机实例不支持备份恢复操作。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        restoreInstance(restoreInstanceRequest?: RestoreInstanceRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/instances/{instance_id}/restores",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (restoreInstanceRequest !== null && restoreInstanceRequest !== undefined) {
                if (restoreInstanceRequest instanceof RestoreInstanceRequest) {
                    instanceId = restoreInstanceRequest.instanceId;
                    body = restoreInstanceRequest.body
                } else {
                    instanceId = restoreInstanceRequest['instance_id'];
                    body = restoreInstanceRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling restoreInstance.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 立刻扫描过期Key
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        scanExpireKey(scanExpireKeyRequest?: ScanExpireKeyRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/instances/{instance_id}/auto-expire/scan",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;

            if (scanExpireKeyRequest !== null && scanExpireKeyRequest !== undefined) {
                if (scanExpireKeyRequest instanceof ScanExpireKeyRequest) {
                    instanceId = scanExpireKeyRequest.instanceId;
                } else {
                    instanceId = scanExpireKeyRequest['instance_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling scanExpireKey.');
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 配置在线数据迁移任务。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        setOnlineMigrationTask(setOnlineMigrationTaskRequest?: SetOnlineMigrationTaskRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/migration/{task_id}/task",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let taskId;

            if (setOnlineMigrationTaskRequest !== null && setOnlineMigrationTaskRequest !== undefined) {
                if (setOnlineMigrationTaskRequest instanceof SetOnlineMigrationTaskRequest) {
                    taskId = setOnlineMigrationTaskRequest.taskId;
                    body = setOnlineMigrationTaskRequest.body
                } else {
                    taskId = setOnlineMigrationTaskRequest['task_id'];
                    body = setOnlineMigrationTaskRequest['body'];
                }
            }

        
            if (taskId === null || taskId === undefined) {
            throw new RequiredError('taskId','Required parameter taskId was null or undefined when calling setOnlineMigrationTask.');
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
         * 查询高级备份信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showBackUpInfo(showBackUpInfoRequest?: ShowBackUpInfoRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/instances/{instance_id}/additional-backups",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;

            if (showBackUpInfoRequest !== null && showBackUpInfoRequest !== undefined) {
                if (showBackUpInfoRequest instanceof ShowBackUpInfoRequest) {
                    instanceId = showBackUpInfoRequest.instanceId;
                } else {
                    instanceId = showBackUpInfoRequest['instance_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showBackUpInfo.');
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询后台任务详细信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showBackgroundTaskProgress(showBackgroundTaskProgressRequest?: ShowBackgroundTaskProgressRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/instances/{instance_id}/tasks/{task_id}/progress",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let taskId;

            if (showBackgroundTaskProgressRequest !== null && showBackgroundTaskProgressRequest !== undefined) {
                if (showBackgroundTaskProgressRequest instanceof ShowBackgroundTaskProgressRequest) {
                    instanceId = showBackgroundTaskProgressRequest.instanceId;
                    taskId = showBackgroundTaskProgressRequest.taskId;
                } else {
                    instanceId = showBackgroundTaskProgressRequest['instance_id'];
                    taskId = showBackgroundTaskProgressRequest['task_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showBackgroundTaskProgress.');
            }
            if (taskId === null || taskId === undefined) {
            throw new RequiredError('taskId','Required parameter taskId was null or undefined when calling showBackgroundTaskProgress.');
            }

            options.pathParams = { 'instance_id': instanceId,'task_id': taskId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询大key自动分析配置。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showBigkeyAutoscanConfig(showBigkeyAutoscanConfigRequest?: ShowBigkeyAutoscanConfigRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/instances/{instance_id}/bigkey/autoscan",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;

            if (showBigkeyAutoscanConfigRequest !== null && showBigkeyAutoscanConfigRequest !== undefined) {
                if (showBigkeyAutoscanConfigRequest instanceof ShowBigkeyAutoscanConfigRequest) {
                    instanceId = showBigkeyAutoscanConfigRequest.instanceId;
                } else {
                    instanceId = showBigkeyAutoscanConfigRequest['instance_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showBigkeyAutoscanConfig.');
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询大key分析详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showBigkeyScanTaskDetails(showBigkeyScanTaskDetailsRequest?: ShowBigkeyScanTaskDetailsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/instances/{instance_id}/bigkey-task/{bigkey_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let bigkeyId;

            if (showBigkeyScanTaskDetailsRequest !== null && showBigkeyScanTaskDetailsRequest !== undefined) {
                if (showBigkeyScanTaskDetailsRequest instanceof ShowBigkeyScanTaskDetailsRequest) {
                    instanceId = showBigkeyScanTaskDetailsRequest.instanceId;
                    bigkeyId = showBigkeyScanTaskDetailsRequest.bigkeyId;
                } else {
                    instanceId = showBigkeyScanTaskDetailsRequest['instance_id'];
                    bigkeyId = showBigkeyScanTaskDetailsRequest['bigkey_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showBigkeyScanTaskDetails.');
            }
            if (bigkeyId === null || bigkeyId === undefined) {
            throw new RequiredError('bigkeyId','Required parameter bigkeyId was null or undefined when calling showBigkeyScanTaskDetails.');
            }

            options.pathParams = { 'instance_id': instanceId,'bigkey_id': bigkeyId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询参数模板详情
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showConfigTemplate(showConfigTemplateRequest?: ShowConfigTemplateRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/config-templates/{template_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let templateId;
            
            let type;

            if (showConfigTemplateRequest !== null && showConfigTemplateRequest !== undefined) {
                if (showConfigTemplateRequest instanceof ShowConfigTemplateRequest) {
                    templateId = showConfigTemplateRequest.templateId;
                    type = showConfigTemplateRequest.type;
                } else {
                    templateId = showConfigTemplateRequest['template_id'];
                    type = showConfigTemplateRequest['type'];
                }
            }

        
            if (templateId === null || templateId === undefined) {
            throw new RequiredError('templateId','Required parameter templateId was null or undefined when calling showConfigTemplate.');
            }
            if (type === null || type === undefined) {
                throw new RequiredError('type','Required parameter type was null or undefined when calling showConfigTemplate.');
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'template_id': templateId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 通过报告ID查询诊断报告的详细信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showDiagnosisTaskDetails(showDiagnosisTaskDetailsRequest?: ShowDiagnosisTaskDetailsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/diagnosis/{report_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let reportId;

            if (showDiagnosisTaskDetailsRequest !== null && showDiagnosisTaskDetailsRequest !== undefined) {
                if (showDiagnosisTaskDetailsRequest instanceof ShowDiagnosisTaskDetailsRequest) {
                    reportId = showDiagnosisTaskDetailsRequest.reportId;
                } else {
                    reportId = showDiagnosisTaskDetailsRequest['report_id'];
                }
            }

        
            if (reportId === null || reportId === undefined) {
            throw new RequiredError('reportId','Required parameter reportId was null or undefined when calling showDiagnosisTaskDetails.');
            }

            options.pathParams = { 'report_id': reportId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询过期Key扫描记录
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showExpireKeyScanInfo(showExpireKeyScanInfoRequest?: ShowExpireKeyScanInfoRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/instances/{instance_id}/auto-expire/histories",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;

            if (showExpireKeyScanInfoRequest !== null && showExpireKeyScanInfoRequest !== undefined) {
                if (showExpireKeyScanInfoRequest instanceof ShowExpireKeyScanInfoRequest) {
                    instanceId = showExpireKeyScanInfoRequest.instanceId;
                } else {
                    instanceId = showExpireKeyScanInfoRequest['instance_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showExpireKeyScanInfo.');
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询热key自动分析配置。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showHotkeyAutoscanConfig(showHotkeyAutoscanConfigRequest?: ShowHotkeyAutoscanConfigRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/instances/{instance_id}/hotkey/autoscan",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;

            if (showHotkeyAutoscanConfigRequest !== null && showHotkeyAutoscanConfigRequest !== undefined) {
                if (showHotkeyAutoscanConfigRequest instanceof ShowHotkeyAutoscanConfigRequest) {
                    instanceId = showHotkeyAutoscanConfigRequest.instanceId;
                } else {
                    instanceId = showHotkeyAutoscanConfigRequest['instance_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showHotkeyAutoscanConfig.');
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询热key分析详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showHotkeyTaskDetails(showHotkeyTaskDetailsRequest?: ShowHotkeyTaskDetailsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/instances/{instance_id}/hotkey-task/{hotkey_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let hotkeyId;

            if (showHotkeyTaskDetailsRequest !== null && showHotkeyTaskDetailsRequest !== undefined) {
                if (showHotkeyTaskDetailsRequest instanceof ShowHotkeyTaskDetailsRequest) {
                    instanceId = showHotkeyTaskDetailsRequest.instanceId;
                    hotkeyId = showHotkeyTaskDetailsRequest.hotkeyId;
                } else {
                    instanceId = showHotkeyTaskDetailsRequest['instance_id'];
                    hotkeyId = showHotkeyTaskDetailsRequest['hotkey_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showHotkeyTaskDetails.');
            }
            if (hotkeyId === null || hotkeyId === undefined) {
            throw new RequiredError('hotkeyId','Required parameter hotkeyId was null or undefined when calling showHotkeyTaskDetails.');
            }

            options.pathParams = { 'instance_id': instanceId,'hotkey_id': hotkeyId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 通过实例ID查询实例的详细信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showInstance(showInstanceRequest?: ShowInstanceRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/instances/{instance_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;

            if (showInstanceRequest !== null && showInstanceRequest !== undefined) {
                if (showInstanceRequest instanceof ShowInstanceRequest) {
                    instanceId = showInstanceRequest.instanceId;
                } else {
                    instanceId = showInstanceRequest['instance_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showInstance.');
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询租户Job执行结果
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showJobInfo(showJobInfoRequest?: ShowJobInfoRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/jobs/{job_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let jobId;

            if (showJobInfoRequest !== null && showJobInfoRequest !== undefined) {
                if (showJobInfoRequest instanceof ShowJobInfoRequest) {
                    jobId = showJobInfoRequest.jobId;
                } else {
                    jobId = showJobInfoRequest['job_id'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling showJobInfo.');
            }

            options.pathParams = { 'job_id': jobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询迁移任务详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showMigrationTask(showMigrationTaskRequest?: ShowMigrationTaskRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/migration-task/{task_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let taskId;

            if (showMigrationTaskRequest !== null && showMigrationTaskRequest !== undefined) {
                if (showMigrationTaskRequest instanceof ShowMigrationTaskRequest) {
                    taskId = showMigrationTaskRequest.taskId;
                } else {
                    taskId = showMigrationTaskRequest['task_id'];
                }
            }

        
            if (taskId === null || taskId === undefined) {
            throw new RequiredError('taskId','Required parameter taskId was null or undefined when calling showMigrationTask.');
            }

            options.pathParams = { 'task_id': taskId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询在线迁移进度明细。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showMigrationTaskStats(showMigrationTaskStatsRequest?: ShowMigrationTaskStatsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/migration-task/{task_id}/stats",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let taskId;

            if (showMigrationTaskStatsRequest !== null && showMigrationTaskStatsRequest !== undefined) {
                if (showMigrationTaskStatsRequest instanceof ShowMigrationTaskStatsRequest) {
                    taskId = showMigrationTaskStatsRequest.taskId;
                } else {
                    taskId = showMigrationTaskStatsRequest['task_id'];
                }
            }

        
            if (taskId === null || taskId === undefined) {
            throw new RequiredError('taskId','Required parameter taskId was null or undefined when calling showMigrationTaskStats.');
            }

            options.pathParams = { 'task_id': taskId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询指定实例的节点信息。
         * 仅支持Redis4.0和Redis5.0实例查询。
         * 创建中实例不返回节点信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showNodesInformation(showNodesInformationRequest?: ShowNodesInformationRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/instances/{instance_id}/logical-nodes",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;

            if (showNodesInformationRequest !== null && showNodesInformationRequest !== undefined) {
                if (showNodesInformationRequest instanceof ShowNodesInformationRequest) {
                    instanceId = showNodesInformationRequest.instanceId;
                } else {
                    instanceId = showNodesInformationRequest['instance_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showNodesInformation.');
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询租户默认可以创建的实例数和总内存的配额限制，以及可以申请配额的最大值和最小值。不同的租户在不同的区域配额可能不同。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showQuotaOfTenant() {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/quota",
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
         * 获取副本状态
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showReplicationStates(showReplicationStatesRequest?: ShowReplicationStatesRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/instance/{instance_id}/groups/{group_id}/group-nodes-state",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let groupId;

            if (showReplicationStatesRequest !== null && showReplicationStatesRequest !== undefined) {
                if (showReplicationStatesRequest instanceof ShowReplicationStatesRequest) {
                    instanceId = showReplicationStatesRequest.instanceId;
                    groupId = showReplicationStatesRequest.groupId;
                } else {
                    instanceId = showReplicationStatesRequest['instance_id'];
                    groupId = showReplicationStatesRequest['group_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showReplicationStates.');
            }
            if (groupId === null || groupId === undefined) {
            throw new RequiredError('groupId','Required parameter groupId was null or undefined when calling showReplicationStates.');
            }

            options.pathParams = { 'instance_id': instanceId,'group_id': groupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 通过实例ID查询标签。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showTags(showTagsRequest?: ShowTagsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/instances/{instance_id}/tags",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;

            if (showTagsRequest !== null && showTagsRequest !== undefined) {
                if (showTagsRequest instanceof ShowTagsRequest) {
                    instanceId = showTagsRequest.instanceId;
                } else {
                    instanceId = showTagsRequest['instance_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showTags.');
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 提交前置检查任务
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        startInstanceResizeCheckJob(startInstanceResizeCheckJobRequest?: StartInstanceResizeCheckJobRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/instances/{instance_id}/resize/check-job",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;

            if (startInstanceResizeCheckJobRequest !== null && startInstanceResizeCheckJobRequest !== undefined) {
                if (startInstanceResizeCheckJobRequest instanceof StartInstanceResizeCheckJobRequest) {
                    instanceId = startInstanceResizeCheckJobRequest.instanceId;
                } else {
                    instanceId = startInstanceResizeCheckJobRequest['instance_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling startInstanceResizeCheckJob.');
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 停止数据迁移任务。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        stopMigrationTask(stopMigrationTaskRequest?: StopMigrationTaskRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/migration-task/{task_id}/stop",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let taskId;

            if (stopMigrationTaskRequest !== null && stopMigrationTaskRequest !== undefined) {
                if (stopMigrationTaskRequest instanceof StopMigrationTaskRequest) {
                    taskId = stopMigrationTaskRequest.taskId;
                } else {
                    taskId = stopMigrationTaskRequest['task_id'];
                }
            }

        
            if (taskId === null || taskId === undefined) {
            throw new RequiredError('taskId','Required parameter taskId was null or undefined when calling stopMigrationTask.');
            }

            options.pathParams = { 'task_id': taskId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 同步停止数据迁移任务。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        stopMigrationTaskSync(stopMigrationTaskSyncRequest?: StopMigrationTaskSyncRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/migration-task/{task_id}/sync-stop",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let taskId;

            if (stopMigrationTaskSyncRequest !== null && stopMigrationTaskSyncRequest !== undefined) {
                if (stopMigrationTaskSyncRequest instanceof StopMigrationTaskSyncRequest) {
                    taskId = stopMigrationTaskSyncRequest.taskId;
                } else {
                    taskId = stopMigrationTaskSyncRequest['task_id'];
                }
            }

        
            if (taskId === null || taskId === undefined) {
            throw new RequiredError('taskId','Required parameter taskId was null or undefined when calling stopMigrationTaskSync.');
            }

            options.pathParams = { 'task_id': taskId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改ACL账号密码。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateAclAccountPassWord(updateAclAccountPassWordRequest?: UpdateAclAccountPassWordRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/instances/{instance_id}/accounts/{account_id}/password/modify",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let accountId;

            if (updateAclAccountPassWordRequest !== null && updateAclAccountPassWordRequest !== undefined) {
                if (updateAclAccountPassWordRequest instanceof UpdateAclAccountPassWordRequest) {
                    instanceId = updateAclAccountPassWordRequest.instanceId;
                    accountId = updateAclAccountPassWordRequest.accountId;
                    body = updateAclAccountPassWordRequest.body
                } else {
                    instanceId = updateAclAccountPassWordRequest['instance_id'];
                    accountId = updateAclAccountPassWordRequest['account_id'];
                    body = updateAclAccountPassWordRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updateAclAccountPassWord.');
            }
            if (accountId === null || accountId === undefined) {
            throw new RequiredError('accountId','Required parameter accountId was null or undefined when calling updateAclAccountPassWord.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId,'account_id': accountId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * ACL账号修改备注
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateAclAccountRemark(updateAclAccountRemarkRequest?: UpdateAclAccountRemarkRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/instances/{instance_id}/accounts/{account_id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let accountId;

            if (updateAclAccountRemarkRequest !== null && updateAclAccountRemarkRequest !== undefined) {
                if (updateAclAccountRemarkRequest instanceof UpdateAclAccountRemarkRequest) {
                    instanceId = updateAclAccountRemarkRequest.instanceId;
                    accountId = updateAclAccountRemarkRequest.accountId;
                    body = updateAclAccountRemarkRequest.body
                } else {
                    instanceId = updateAclAccountRemarkRequest['instance_id'];
                    accountId = updateAclAccountRemarkRequest['account_id'];
                    body = updateAclAccountRemarkRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updateAclAccountRemark.');
            }
            if (accountId === null || accountId === undefined) {
            throw new RequiredError('accountId','Required parameter accountId was null or undefined when calling updateAclAccountRemark.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId,'account_id': accountId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改用户的类型。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateAclAccountRole(updateAclAccountRoleRequest?: UpdateAclAccountRoleRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/instances/{instance_id}/accounts/{account_id}/role",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let accountId;

            if (updateAclAccountRoleRequest !== null && updateAclAccountRoleRequest !== undefined) {
                if (updateAclAccountRoleRequest instanceof UpdateAclAccountRoleRequest) {
                    instanceId = updateAclAccountRoleRequest.instanceId;
                    accountId = updateAclAccountRoleRequest.accountId;
                    body = updateAclAccountRoleRequest.body
                } else {
                    instanceId = updateAclAccountRoleRequest['instance_id'];
                    accountId = updateAclAccountRoleRequest['account_id'];
                    body = updateAclAccountRoleRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updateAclAccountRole.');
            }
            if (accountId === null || accountId === undefined) {
            throw new RequiredError('accountId','Required parameter accountId was null or undefined when calling updateAclAccountRole.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId,'account_id': accountId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 设置大key自动分析配置。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateBigkeyAutoscanConfig(updateBigkeyAutoscanConfigRequest?: UpdateBigkeyAutoscanConfigRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/instances/{instance_id}/bigkey/autoscan",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (updateBigkeyAutoscanConfigRequest !== null && updateBigkeyAutoscanConfigRequest !== undefined) {
                if (updateBigkeyAutoscanConfigRequest instanceof UpdateBigkeyAutoscanConfigRequest) {
                    instanceId = updateBigkeyAutoscanConfigRequest.instanceId;
                    body = updateBigkeyAutoscanConfigRequest.body
                } else {
                    instanceId = updateBigkeyAutoscanConfigRequest['instance_id'];
                    body = updateBigkeyAutoscanConfigRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updateBigkeyAutoscanConfig.');
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
         * 修改自定义模板
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateConfigTemplate(updateConfigTemplateRequest?: UpdateConfigTemplateRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/config-templates/{template_id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let templateId;

            if (updateConfigTemplateRequest !== null && updateConfigTemplateRequest !== undefined) {
                if (updateConfigTemplateRequest instanceof UpdateConfigTemplateRequest) {
                    templateId = updateConfigTemplateRequest.templateId;
                    body = updateConfigTemplateRequest.body
                } else {
                    templateId = updateConfigTemplateRequest['template_id'];
                    body = updateConfigTemplateRequest['body'];
                }
            }

        
            if (templateId === null || templateId === undefined) {
            throw new RequiredError('templateId','Required parameter templateId was null or undefined when calling updateConfigTemplate.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'template_id': templateId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 为了确保分布式缓存服务发挥出最优性能，您可以根据自己的业务情况对DCS缓存实例的运行参数进行调整。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateConfigurations(updateConfigurationsRequest?: UpdateConfigurationsRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/instances/{instance_id}/configs",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (updateConfigurationsRequest !== null && updateConfigurationsRequest !== undefined) {
                if (updateConfigurationsRequest instanceof UpdateConfigurationsRequest) {
                    instanceId = updateConfigurationsRequest.instanceId;
                    body = updateConfigurationsRequest.body
                } else {
                    instanceId = updateConfigurationsRequest['instance_id'];
                    body = updateConfigurationsRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updateConfigurations.');
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
         * 设置热key自动分析配置。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateHotkeyAutoScanConfig(updateHotkeyAutoScanConfigRequest?: UpdateHotkeyAutoScanConfigRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/instances/{instance_id}/hotkey/autoscan",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (updateHotkeyAutoScanConfigRequest !== null && updateHotkeyAutoScanConfigRequest !== undefined) {
                if (updateHotkeyAutoScanConfigRequest instanceof UpdateHotkeyAutoScanConfigRequest) {
                    instanceId = updateHotkeyAutoScanConfigRequest.instanceId;
                    body = updateHotkeyAutoScanConfigRequest.body
                } else {
                    instanceId = updateHotkeyAutoScanConfigRequest['instance_id'];
                    body = updateHotkeyAutoScanConfigRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updateHotkeyAutoScanConfig.');
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
         * 修改缓存实例的信息，可修改信息包括实例名称、描述、备份策略、维护时间窗开始和结束时间以及安全组。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateInstance(updateInstanceRequest?: UpdateInstanceRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/instances/{instance_id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (updateInstanceRequest !== null && updateInstanceRequest !== undefined) {
                if (updateInstanceRequest instanceof UpdateInstanceRequest) {
                    instanceId = updateInstanceRequest.instanceId;
                    body = updateInstanceRequest.body
                } else {
                    instanceId = updateInstanceRequest['instance_id'];
                    body = updateInstanceRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updateInstance.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 变更指定实例的带宽
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateInstanceBandwidth(updateInstanceBandwidthRequest?: UpdateInstanceBandwidthRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/instances/{instance_id}/bandwidth",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;

            if (updateInstanceBandwidthRequest !== null && updateInstanceBandwidthRequest !== undefined) {
                if (updateInstanceBandwidthRequest instanceof UpdateInstanceBandwidthRequest) {
                    instanceId = updateInstanceBandwidthRequest.instanceId;
                } else {
                    instanceId = updateInstanceBandwidthRequest['instance_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updateInstanceBandwidth.');
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 设置迁移任务自动重连
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateMigrationTask(updateMigrationTaskRequest?: UpdateMigrationTaskRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/migration-task/{task_id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let taskId;

            if (updateMigrationTaskRequest !== null && updateMigrationTaskRequest !== undefined) {
                if (updateMigrationTaskRequest instanceof UpdateMigrationTaskRequest) {
                    taskId = updateMigrationTaskRequest.taskId;
                    body = updateMigrationTaskRequest.body
                } else {
                    taskId = updateMigrationTaskRequest['task_id'];
                    body = updateMigrationTaskRequest['body'];
                }
            }

        
            if (taskId === null || taskId === undefined) {
            throw new RequiredError('taskId','Required parameter taskId was null or undefined when calling updateMigrationTask.');
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
         * 修改缓存实例的密码。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updatePassword(updatePasswordRequest?: UpdatePasswordRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/instances/{instance_id}/password",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (updatePasswordRequest !== null && updatePasswordRequest !== undefined) {
                if (updatePasswordRequest instanceof UpdatePasswordRequest) {
                    instanceId = updatePasswordRequest.instanceId;
                    body = updatePasswordRequest.body
                } else {
                    instanceId = updatePasswordRequest['instance_id'];
                    body = updatePasswordRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updatePassword.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 设置副本优先级，主节点故障时，权重越小的备节点切换为主节点的优先级越高。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateSlavePriority(updateSlavePriorityRequest?: UpdateSlavePriorityRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/instances/{instance_id}/groups/{group_id}/replications/{node_id}/slave-priority",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let groupId;
            
            let nodeId;

            if (updateSlavePriorityRequest !== null && updateSlavePriorityRequest !== undefined) {
                if (updateSlavePriorityRequest instanceof UpdateSlavePriorityRequest) {
                    instanceId = updateSlavePriorityRequest.instanceId;
                    groupId = updateSlavePriorityRequest.groupId;
                    nodeId = updateSlavePriorityRequest.nodeId;
                    body = updateSlavePriorityRequest.body
                } else {
                    instanceId = updateSlavePriorityRequest['instance_id'];
                    groupId = updateSlavePriorityRequest['group_id'];
                    nodeId = updateSlavePriorityRequest['node_id'];
                    body = updateSlavePriorityRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updateSlavePriority.');
            }
            if (groupId === null || groupId === undefined) {
            throw new RequiredError('groupId','Required parameter groupId was null or undefined when calling updateSlavePriority.');
            }
            if (nodeId === null || nodeId === undefined) {
            throw new RequiredError('nodeId','Required parameter nodeId was null or undefined when calling updateSlavePriority.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId,'group_id': groupId,'node_id': nodeId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询指定实例的IP白名单。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showIpWhitelist(showIpWhitelistRequest?: ShowIpWhitelistRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/instance/{instance_id}/whitelist",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;

            if (showIpWhitelistRequest !== null && showIpWhitelistRequest !== undefined) {
                if (showIpWhitelistRequest instanceof ShowIpWhitelistRequest) {
                    instanceId = showIpWhitelistRequest.instanceId;
                } else {
                    instanceId = showIpWhitelistRequest['instance_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showIpWhitelist.');
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 为指定实例设置IP白名单分组，包含创建、停用、编辑、删除白名单四个功能
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateIpWhitelist(updateIpWhitelistRequest?: UpdateIpWhitelistRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/instance/{instance_id}/whitelist",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (updateIpWhitelistRequest !== null && updateIpWhitelistRequest !== undefined) {
                if (updateIpWhitelistRequest instanceof UpdateIpWhitelistRequest) {
                    instanceId = updateIpWhitelistRequest.instanceId;
                    body = updateIpWhitelistRequest.body
                } else {
                    instanceId = updateIpWhitelistRequest['instance_id'];
                    body = updateIpWhitelistRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updateIpWhitelist.');
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
    
    }
};

function newClient(client: HcClient): DcsClient {
    return new DcsClient(client);
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