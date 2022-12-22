import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

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
import { ClusterRedisNodeMonitoredObject } from './model/ClusterRedisNodeMonitoredObject';
import { CommandTimeTaken } from './model/CommandTimeTaken';
import { CommandTimeTakenList } from './model/CommandTimeTakenList';
import { ConclusionItem } from './model/ConclusionItem';
import { ConfigMigrationInstanceBody } from './model/ConfigMigrationInstanceBody';
import { CopyInstanceRequest } from './model/CopyInstanceRequest';
import { CopyInstanceResponse } from './model/CopyInstanceResponse';
import { CreateBigkeyScanTaskRequest } from './model/CreateBigkeyScanTaskRequest';
import { CreateBigkeyScanTaskResponse } from './model/CreateBigkeyScanTaskResponse';
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
import { CreateRedislogDownloadLinkRequest } from './model/CreateRedislogDownloadLinkRequest';
import { CreateRedislogDownloadLinkResponse } from './model/CreateRedislogDownloadLinkResponse';
import { CreateRedislogRequest } from './model/CreateRedislogRequest';
import { CreateRedislogResponse } from './model/CreateRedislogResponse';
import { DeleteBackgroundTaskRequest } from './model/DeleteBackgroundTaskRequest';
import { DeleteBackgroundTaskResponse } from './model/DeleteBackgroundTaskResponse';
import { DeleteBackupFileRequest } from './model/DeleteBackupFileRequest';
import { DeleteBackupFileResponse } from './model/DeleteBackupFileResponse';
import { DeleteBigkeyScanTaskRequest } from './model/DeleteBigkeyScanTaskRequest';
import { DeleteBigkeyScanTaskResponse } from './model/DeleteBigkeyScanTaskResponse';
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
import { Features } from './model/Features';
import { Files } from './model/Files';
import { FlavorAzObject } from './model/FlavorAzObject';
import { FlavorsItems } from './model/FlavorsItems';
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
import { LinksItem } from './model/LinksItem';
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
import { MaintainWindowsEntity } from './model/MaintainWindowsEntity';
import { MigrationTaskList } from './model/MigrationTaskList';
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
import { RenameCommandResp } from './model/RenameCommandResp';
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
import { SetOnlineMigrationTaskBody } from './model/SetOnlineMigrationTaskBody';
import { SetOnlineMigrationTaskRequest } from './model/SetOnlineMigrationTaskRequest';
import { SetOnlineMigrationTaskResponse } from './model/SetOnlineMigrationTaskResponse';
import { ShowBigkeyAutoscanConfigRequest } from './model/ShowBigkeyAutoscanConfigRequest';
import { ShowBigkeyAutoscanConfigResponse } from './model/ShowBigkeyAutoscanConfigResponse';
import { ShowBigkeyScanTaskDetailsRequest } from './model/ShowBigkeyScanTaskDetailsRequest';
import { ShowBigkeyScanTaskDetailsResponse } from './model/ShowBigkeyScanTaskDetailsResponse';
import { ShowDiagnosisTaskDetailsRequest } from './model/ShowDiagnosisTaskDetailsRequest';
import { ShowDiagnosisTaskDetailsResponse } from './model/ShowDiagnosisTaskDetailsResponse';
import { ShowHotkeyAutoscanConfigRequest } from './model/ShowHotkeyAutoscanConfigRequest';
import { ShowHotkeyAutoscanConfigResponse } from './model/ShowHotkeyAutoscanConfigResponse';
import { ShowHotkeyTaskDetailsRequest } from './model/ShowHotkeyTaskDetailsRequest';
import { ShowHotkeyTaskDetailsResponse } from './model/ShowHotkeyTaskDetailsResponse';
import { ShowInstanceRequest } from './model/ShowInstanceRequest';
import { ShowInstanceResponse } from './model/ShowInstanceResponse';
import { ShowIpWhitelistRequest } from './model/ShowIpWhitelistRequest';
import { ShowIpWhitelistResponse } from './model/ShowIpWhitelistResponse';
import { ShowMigrationTaskRequest } from './model/ShowMigrationTaskRequest';
import { ShowMigrationTaskResponse } from './model/ShowMigrationTaskResponse';
import { ShowMigrationTaskStatsRequest } from './model/ShowMigrationTaskStatsRequest';
import { ShowMigrationTaskStatsResponse } from './model/ShowMigrationTaskStatsResponse';
import { ShowQuotaOfTenantRequest } from './model/ShowQuotaOfTenantRequest';
import { ShowQuotaOfTenantResponse } from './model/ShowQuotaOfTenantResponse';
import { ShowTagsRequest } from './model/ShowTagsRequest';
import { ShowTagsResponse } from './model/ShowTagsResponse';
import { SingleBackgroundTask } from './model/SingleBackgroundTask';
import { SlowlogItem } from './model/SlowlogItem';
import { SourceInstanceBody } from './model/SourceInstanceBody';
import { StatusStatistic } from './model/StatusStatistic';
import { StopMigrationTaskRequest } from './model/StopMigrationTaskRequest';
import { StopMigrationTaskResponse } from './model/StopMigrationTaskResponse';
import { StopMigrationTaskResult } from './model/StopMigrationTaskResult';
import { StopMigrationTaskSyncRequest } from './model/StopMigrationTaskSyncRequest';
import { StopMigrationTaskSyncResponse } from './model/StopMigrationTaskSyncResponse';
import { Tag } from './model/Tag';
import { TargetInstanceBody } from './model/TargetInstanceBody';
import { UpdateBigkeyAutoscanConfigRequest } from './model/UpdateBigkeyAutoscanConfigRequest';
import { UpdateBigkeyAutoscanConfigResponse } from './model/UpdateBigkeyAutoscanConfigResponse';
import { UpdateConfigurationsRequest } from './model/UpdateConfigurationsRequest';
import { UpdateConfigurationsResponse } from './model/UpdateConfigurationsResponse';
import { UpdateHotkeyAutoScanConfigRequest } from './model/UpdateHotkeyAutoScanConfigRequest';
import { UpdateHotkeyAutoScanConfigResponse } from './model/UpdateHotkeyAutoScanConfigResponse';
import { UpdateInstanceRequest } from './model/UpdateInstanceRequest';
import { UpdateInstanceResponse } from './model/UpdateInstanceResponse';
import { UpdateIpWhitelistRequest } from './model/UpdateIpWhitelistRequest';
import { UpdateIpWhitelistResponse } from './model/UpdateIpWhitelistResponse';
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
    public batchCreateOrDeleteTags(batchCreateOrDeleteTagsRequest?: BatchCreateOrDeleteTagsRequest): Promise<void> {
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
    public changeMasterStandby(changeMasterStandbyRequest?: ChangeMasterStandbyRequest): Promise<void> {
        const options = ParamCreater().changeMasterStandby(changeMasterStandbyRequest);

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
     * 采集Redis运行日志。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 采集Redis运行日志
     * @param {string} instanceId 实例ID。
     * @param {string} logType 返回日志的类型，当前仅支持Redis运行日志，类型为run
     * @param {number} [queryTime] 日期偏移量，表示从过去的n天开始查询，例如：传入0则表示查询今天的日志，传入7则表示查询过去7天的日志。最大支持0-7。
     * @param {string} [replicationId] 副本ID，可以从分片与副本中查询对应节点的副本ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createRedislog(createRedislogRequest?: CreateRedislogRequest): Promise<void> {
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
    public deleteBackgroundTask(deleteBackgroundTaskRequest?: DeleteBackgroundTaskRequest): Promise<void> {
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
    public deleteBackupFile(deleteBackupFileRequest?: DeleteBackupFileRequest): Promise<void> {
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
    public deleteBigkeyScanTask(deleteBigkeyScanTaskRequest?: DeleteBigkeyScanTaskRequest): Promise<void> {
        const options = ParamCreater().deleteBigkeyScanTask(deleteBigkeyScanTaskRequest);

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
    public deleteHotkeyScanTask(deleteHotkeyScanTaskRequest?: DeleteHotkeyScanTaskRequest): Promise<void> {
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
    public deleteSingleInstance(deleteSingleInstanceRequest?: DeleteSingleInstanceRequest): Promise<void> {
        const options = ParamCreater().deleteSingleInstance(deleteSingleInstanceRequest);

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
    public listAvailableZones(): Promise<ListAvailableZonesResponse> {
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
     * @param {string} [nameEqual] 是否按照实例名称进行精确匹配查询。  默认为“false”，表示模糊匹配实例名称查询。若参数值为“true”表示按照实例名称进行精确匹配查询。
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
    public listMaintenanceWindows(): Promise<ListMaintenanceWindowsResponse> {
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
    public listStatisticsOfRunningInstances(): Promise<ListStatisticsOfRunningInstancesResponse> {
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
    public listTagsOfTenant(): Promise<ListTagsOfTenantResponse> {
        const options = ParamCreater().listTagsOfTenant();

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
    public resizeInstance(resizeInstanceRequest?: ResizeInstanceRequest): Promise<void> {
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
     * 查询租户默认可以创建的实例数和总内存的配额限制，以及可以申请配额的最大值和最小值。不同的租户在不同的区域配额可能不同。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询租户配额
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showQuotaOfTenant(): Promise<ShowQuotaOfTenantResponse> {
        const options = ParamCreater().showQuotaOfTenant();

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
    public stopMigrationTaskSync(stopMigrationTaskSyncRequest?: StopMigrationTaskSyncRequest): Promise<void> {
        const options = ParamCreater().stopMigrationTaskSync(stopMigrationTaskSyncRequest);

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
    public updateConfigurations(updateConfigurationsRequest?: UpdateConfigurationsRequest): Promise<void> {
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
    public updateInstance(updateInstanceRequest?: UpdateInstanceRequest): Promise<void> {
        const options = ParamCreater().updateInstance(updateInstanceRequest);

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
    public updateSlavePriority(updateSlavePriorityRequest?: UpdateSlavePriorityRequest): Promise<void> {
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
    public updateIpWhitelist(updateIpWhitelistRequest?: UpdateIpWhitelistRequest): Promise<void> {
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

            var body: any;
            
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
            var body: any;
            
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
                headers: {},
                data: {}
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

            var body: any;

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
                headers: {},
                data: {}
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

            var body: any;
            
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
                headers: {},
                data: {}
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

            var body: any;
            
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
                headers: {},
                data: {}
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

            var body: any;

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

            var body: any;

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

            var body: any;

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
                headers: {},
                data: {}
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
                headers: {},
                data: {}
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
                headers: {},
                data: {}
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
                headers: {},
                data: {}
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
                headers: {},
                data: {}
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
                headers: {},
                data: {}
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
                headers: {},
                data: {}
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

            var body: any;

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
                headers: {},
                data: {}
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
                headers: {},
                data: {}
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
                headers: {},
                data: {}
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

            var body: any;
            
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
                headers: {},
                data: {}
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
                headers: {},
                data: {}
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
                headers: {},
                data: {}
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
                headers: {},
                data: {}
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
                headers: {},
                data: {}
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
                headers: {},
                data: {}
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
                headers: {},
                data: {}
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
                headers: {},
                data: {}
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
                headers: {},
                data: {}
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
                headers: {},
                data: {}
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
                headers: {},
                data: {}
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
                headers: {},
                data: {}
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
                headers: {},
                data: {}
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
                headers: {},
                data: {}
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
                headers: {},
                data: {}
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
                headers: {},
                data: {}
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
                headers: {},
                data: {}
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
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;


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

            var body: any;
            
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

            var body: any;

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

            var body: any;
            
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

            var body: any;
            
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
                headers: {},
                data: {}
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
                headers: {},
                data: {}
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
                headers: {},
                data: {}
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
                headers: {},
                data: {}
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
                headers: {},
                data: {}
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
                headers: {},
                data: {}
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
                headers: {},
                data: {}
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
                headers: {},
                data: {}
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
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;


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
                headers: {},
                data: {}
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
                headers: {},
                data: {}
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
                headers: {},
                data: {}
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

            var body: any;
            
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

            var body: any;
            
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

            var body: any;
            
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

            var body: any;
            
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

            var body: any;
            
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

            var body: any;
            
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
                headers: {},
                data: {}
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

            var body: any;
            
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