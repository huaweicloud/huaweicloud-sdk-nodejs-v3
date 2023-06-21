import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { AddWorkloadQueueRequest } from './model/AddWorkloadQueueRequest';
import { AddWorkloadQueueResponse } from './model/AddWorkloadQueueResponse';
import { AlarmConfigResponse } from './model/AlarmConfigResponse';
import { AlarmDetailResponse } from './model/AlarmDetailResponse';
import { AlarmStatisticResponse } from './model/AlarmStatisticResponse';
import { AlarmSubRequest } from './model/AlarmSubRequest';
import { AlarmSubUpdateRequest } from './model/AlarmSubUpdateRequest';
import { AlarmSubscriptionResponse } from './model/AlarmSubscriptionResponse';
import { AssociateEipRequest } from './model/AssociateEipRequest';
import { AssociateEipResponse } from './model/AssociateEipResponse';
import { AssociateElbRequest } from './model/AssociateElbRequest';
import { AssociateElbResponse } from './model/AssociateElbResponse';
import { AuditDumpRecord } from './model/AuditDumpRecord';
import { AvailabilityZone } from './model/AvailabilityZone';
import { BackupPolicy } from './model/BackupPolicy';
import { BackupStrategyDetail } from './model/BackupStrategyDetail';
import { BatchCreateClusterCnRequest } from './model/BatchCreateClusterCnRequest';
import { BatchCreateClusterCnResponse } from './model/BatchCreateClusterCnResponse';
import { BatchCreateCn } from './model/BatchCreateCn';
import { BatchCreateResourceTag } from './model/BatchCreateResourceTag';
import { BatchCreateResourceTagRequest } from './model/BatchCreateResourceTagRequest';
import { BatchCreateResourceTagResponse } from './model/BatchCreateResourceTagResponse';
import { BatchCreateResourceTags } from './model/BatchCreateResourceTags';
import { BatchDeleteClusterCnRequest } from './model/BatchDeleteClusterCnRequest';
import { BatchDeleteClusterCnResponse } from './model/BatchDeleteClusterCnResponse';
import { BatchDeleteCn } from './model/BatchDeleteCn';
import { BatchDeleteResourceTag } from './model/BatchDeleteResourceTag';
import { BatchDeleteResourceTagRequest } from './model/BatchDeleteResourceTagRequest';
import { BatchDeleteResourceTagResponse } from './model/BatchDeleteResourceTagResponse';
import { BatchDeleteResourceTags } from './model/BatchDeleteResourceTags';
import { CancelReadonlyClusterRequest } from './model/CancelReadonlyClusterRequest';
import { CancelReadonlyClusterResponse } from './model/CancelReadonlyClusterResponse';
import { CheckClusterRequest } from './model/CheckClusterRequest';
import { CheckClusterResponse } from './model/CheckClusterResponse';
import { CheckDisasterNameRequest } from './model/CheckDisasterNameRequest';
import { CheckDisasterNameResponse } from './model/CheckDisasterNameResponse';
import { Cluster } from './model/Cluster';
import { ClusterCheckBody } from './model/ClusterCheckBody';
import { ClusterCheckRequestBody } from './model/ClusterCheckRequestBody';
import { ClusterConfiguration } from './model/ClusterConfiguration';
import { ClusterDetail } from './model/ClusterDetail';
import { ClusterDisasterRecovery } from './model/ClusterDisasterRecovery';
import { ClusterElbInfo } from './model/ClusterElbInfo';
import { ClusterInfo } from './model/ClusterInfo';
import { ClusterRecoveryProgress } from './model/ClusterRecoveryProgress';
import { ClusterShrinkReq } from './model/ClusterShrinkReq';
import { ClusterSnapshots } from './model/ClusterSnapshots';
import { ConfigurationParameter } from './model/ConfigurationParameter';
import { ConfigurationParameterUnit } from './model/ConfigurationParameterUnit';
import { ConfigurationParameterValue } from './model/ConfigurationParameterValue';
import { ConfigurationParameterValues } from './model/ConfigurationParameterValues';
import { CoordinatorNode } from './model/CoordinatorNode';
import { CopySnapshotRequest } from './model/CopySnapshotRequest';
import { CopySnapshotResponse } from './model/CopySnapshotResponse';
import { CreateAlarmSubRequest } from './model/CreateAlarmSubRequest';
import { CreateAlarmSubResponse } from './model/CreateAlarmSubResponse';
import { CreateClusterDns } from './model/CreateClusterDns';
import { CreateClusterDnsRequest } from './model/CreateClusterDnsRequest';
import { CreateClusterDnsResponse } from './model/CreateClusterDnsResponse';
import { CreateClusterInfo } from './model/CreateClusterInfo';
import { CreateClusterRequest } from './model/CreateClusterRequest';
import { CreateClusterRequestBody } from './model/CreateClusterRequestBody';
import { CreateClusterResponse } from './model/CreateClusterResponse';
import { CreateClusterV2Request } from './model/CreateClusterV2Request';
import { CreateClusterV2Response } from './model/CreateClusterV2Response';
import { CreateClusterWorkloadRequest } from './model/CreateClusterWorkloadRequest';
import { CreateClusterWorkloadResponse } from './model/CreateClusterWorkloadResponse';
import { CreateDataSourceRequest } from './model/CreateDataSourceRequest';
import { CreateDataSourceResponse } from './model/CreateDataSourceResponse';
import { CreateDisasterRecovery } from './model/CreateDisasterRecovery';
import { CreateDisasterRecoveryReq } from './model/CreateDisasterRecoveryReq';
import { CreateDisasterRecoveryRequest } from './model/CreateDisasterRecoveryRequest';
import { CreateDisasterRecoveryResponse } from './model/CreateDisasterRecoveryResponse';
import { CreateEventSubRequest } from './model/CreateEventSubRequest';
import { CreateEventSubResponse } from './model/CreateEventSubResponse';
import { CreateSnapshotPolicyRequest } from './model/CreateSnapshotPolicyRequest';
import { CreateSnapshotPolicyResponse } from './model/CreateSnapshotPolicyResponse';
import { CreateSnapshotRequest } from './model/CreateSnapshotRequest';
import { CreateSnapshotRequestBody } from './model/CreateSnapshotRequestBody';
import { CreateSnapshotResponse } from './model/CreateSnapshotResponse';
import { CreateWorkloadPlanRequest } from './model/CreateWorkloadPlanRequest';
import { CreateWorkloadPlanResponse } from './model/CreateWorkloadPlanResponse';
import { DatabasePermissionReq } from './model/DatabasePermissionReq';
import { DatabaseUser } from './model/DatabaseUser';
import { DatabaseUserInfoReq } from './model/DatabaseUserInfoReq';
import { Datastore } from './model/Datastore';
import { DeleteAlarmSubRequest } from './model/DeleteAlarmSubRequest';
import { DeleteAlarmSubResponse } from './model/DeleteAlarmSubResponse';
import { DeleteClusterDnsRequest } from './model/DeleteClusterDnsRequest';
import { DeleteClusterDnsResponse } from './model/DeleteClusterDnsResponse';
import { DeleteClusterRequest } from './model/DeleteClusterRequest';
import { DeleteClusterRequestBody } from './model/DeleteClusterRequestBody';
import { DeleteClusterResponse } from './model/DeleteClusterResponse';
import { DeleteDataSourceRequest } from './model/DeleteDataSourceRequest';
import { DeleteDataSourceResponse } from './model/DeleteDataSourceResponse';
import { DeleteDisasterRecoveryRequest } from './model/DeleteDisasterRecoveryRequest';
import { DeleteDisasterRecoveryResponse } from './model/DeleteDisasterRecoveryResponse';
import { DeleteEventSubRequest } from './model/DeleteEventSubRequest';
import { DeleteEventSubResponse } from './model/DeleteEventSubResponse';
import { DeleteSnapshotPolicyRequest } from './model/DeleteSnapshotPolicyRequest';
import { DeleteSnapshotPolicyResponse } from './model/DeleteSnapshotPolicyResponse';
import { DeleteSnapshotRequest } from './model/DeleteSnapshotRequest';
import { DeleteSnapshotResponse } from './model/DeleteSnapshotResponse';
import { DeleteWorkloadQueueRequest } from './model/DeleteWorkloadQueueRequest';
import { DeleteWorkloadQueueResponse } from './model/DeleteWorkloadQueueResponse';
import { Detail } from './model/Detail';
import { DisassociateEipRequest } from './model/DisassociateEipRequest';
import { DisassociateEipResponse } from './model/DisassociateEipResponse';
import { DisassociateElbRequest } from './model/DisassociateElbRequest';
import { DisassociateElbResponse } from './model/DisassociateElbResponse';
import { DisasterRecovery } from './model/DisasterRecovery';
import { DisasterRecoveryCluster } from './model/DisasterRecoveryCluster';
import { DisasterRecoveryClusterVo } from './model/DisasterRecoveryClusterVo';
import { DisasterRecoveryId } from './model/DisasterRecoveryId';
import { DisasterRecoveryQueryResp } from './model/DisasterRecoveryQueryResp';
import { DiskResp } from './model/DiskResp';
import { DssPool } from './model/DssPool';
import { ElbResp } from './model/ElbResp';
import { Endpoints } from './model/Endpoints';
import { EventResponse } from './model/EventResponse';
import { EventSpecResponse } from './model/EventSpecResponse';
import { EventSubRequest } from './model/EventSubRequest';
import { EventSubUpdateRequest } from './model/EventSubUpdateRequest';
import { EventSubscriptionResponse } from './model/EventSubscriptionResponse';
import { ExecuteRedistributionClusterRequest } from './model/ExecuteRedistributionClusterRequest';
import { ExecuteRedistributionClusterResponse } from './model/ExecuteRedistributionClusterResponse';
import { ExpandInstanceStorage } from './model/ExpandInstanceStorage';
import { ExpandInstanceStorageRequest } from './model/ExpandInstanceStorageRequest';
import { ExpandInstanceStorageResponse } from './model/ExpandInstanceStorageResponse';
import { ExtDataSource } from './model/ExtDataSource';
import { ExtDataSourceReq } from './model/ExtDataSourceReq';
import { FailedReason } from './model/FailedReason';
import { FineGrainedSnapshotDetail } from './model/FineGrainedSnapshotDetail';
import { Grant } from './model/Grant';
import { HostOverviewResponse } from './model/HostOverviewResponse';
import { IndicatorInfo } from './model/IndicatorInfo';
import { LinkCopyReq } from './model/LinkCopyReq';
import { ListAlarmConfigsRequest } from './model/ListAlarmConfigsRequest';
import { ListAlarmConfigsResponse } from './model/ListAlarmConfigsResponse';
import { ListAlarmDetailRequest } from './model/ListAlarmDetailRequest';
import { ListAlarmDetailResponse } from './model/ListAlarmDetailResponse';
import { ListAlarmStatisticRequest } from './model/ListAlarmStatisticRequest';
import { ListAlarmStatisticResponse } from './model/ListAlarmStatisticResponse';
import { ListAlarmSubsRequest } from './model/ListAlarmSubsRequest';
import { ListAlarmSubsResponse } from './model/ListAlarmSubsResponse';
import { ListAuditLogRequest } from './model/ListAuditLogRequest';
import { ListAuditLogResponse } from './model/ListAuditLogResponse';
import { ListAvailabilityZonesRequest } from './model/ListAvailabilityZonesRequest';
import { ListAvailabilityZonesResponse } from './model/ListAvailabilityZonesResponse';
import { ListAvailableDisasterClustersRequest } from './model/ListAvailableDisasterClustersRequest';
import { ListAvailableDisasterClustersResponse } from './model/ListAvailableDisasterClustersResponse';
import { ListClusterCnRequest } from './model/ListClusterCnRequest';
import { ListClusterCnResponse } from './model/ListClusterCnResponse';
import { ListClusterConfigurationsParameterRequest } from './model/ListClusterConfigurationsParameterRequest';
import { ListClusterConfigurationsParameterResponse } from './model/ListClusterConfigurationsParameterResponse';
import { ListClusterConfigurationsRequest } from './model/ListClusterConfigurationsRequest';
import { ListClusterConfigurationsResponse } from './model/ListClusterConfigurationsResponse';
import { ListClusterDetailsRequest } from './model/ListClusterDetailsRequest';
import { ListClusterDetailsResponse } from './model/ListClusterDetailsResponse';
import { ListClusterScaleInNumbersRequest } from './model/ListClusterScaleInNumbersRequest';
import { ListClusterScaleInNumbersResponse } from './model/ListClusterScaleInNumbersResponse';
import { ListClusterSnapshotsRequest } from './model/ListClusterSnapshotsRequest';
import { ListClusterSnapshotsResponse } from './model/ListClusterSnapshotsResponse';
import { ListClusterTagsRequest } from './model/ListClusterTagsRequest';
import { ListClusterTagsResponse } from './model/ListClusterTagsResponse';
import { ListClusterWorkloadRequest } from './model/ListClusterWorkloadRequest';
import { ListClusterWorkloadResponse } from './model/ListClusterWorkloadResponse';
import { ListClustersRequest } from './model/ListClustersRequest';
import { ListClustersResponse } from './model/ListClustersResponse';
import { ListDataSourceRequest } from './model/ListDataSourceRequest';
import { ListDataSourceResponse } from './model/ListDataSourceResponse';
import { ListDatabaseUsersRequest } from './model/ListDatabaseUsersRequest';
import { ListDatabaseUsersResponse } from './model/ListDatabaseUsersResponse';
import { ListDisasterRecoverRequest } from './model/ListDisasterRecoverRequest';
import { ListDisasterRecoverResponse } from './model/ListDisasterRecoverResponse';
import { ListDssPoolsRequest } from './model/ListDssPoolsRequest';
import { ListDssPoolsResponse } from './model/ListDssPoolsResponse';
import { ListElbsRequest } from './model/ListElbsRequest';
import { ListElbsResponse } from './model/ListElbsResponse';
import { ListEventSpecsRequest } from './model/ListEventSpecsRequest';
import { ListEventSpecsResponse } from './model/ListEventSpecsResponse';
import { ListEventSubsRequest } from './model/ListEventSubsRequest';
import { ListEventSubsResponse } from './model/ListEventSubsResponse';
import { ListEventsRequest } from './model/ListEventsRequest';
import { ListEventsResponse } from './model/ListEventsResponse';
import { ListHostDiskRequest } from './model/ListHostDiskRequest';
import { ListHostDiskResponse } from './model/ListHostDiskResponse';
import { ListHostNetRequest } from './model/ListHostNetRequest';
import { ListHostNetResponse } from './model/ListHostNetResponse';
import { ListHostOverviewRequest } from './model/ListHostOverviewRequest';
import { ListHostOverviewResponse } from './model/ListHostOverviewResponse';
import { ListJobDetailsRequest } from './model/ListJobDetailsRequest';
import { ListJobDetailsResponse } from './model/ListJobDetailsResponse';
import { ListMonitorIndicatorDataRequest } from './model/ListMonitorIndicatorDataRequest';
import { ListMonitorIndicatorDataResponse } from './model/ListMonitorIndicatorDataResponse';
import { ListMonitorIndicatorsRequest } from './model/ListMonitorIndicatorsRequest';
import { ListMonitorIndicatorsResponse } from './model/ListMonitorIndicatorsResponse';
import { ListNodeTypesRequest } from './model/ListNodeTypesRequest';
import { ListNodeTypesResponse } from './model/ListNodeTypesResponse';
import { ListQuotasRequest } from './model/ListQuotasRequest';
import { ListQuotasResponse } from './model/ListQuotasResponse';
import { ListSnapshotDetailsRequest } from './model/ListSnapshotDetailsRequest';
import { ListSnapshotDetailsResponse } from './model/ListSnapshotDetailsResponse';
import { ListSnapshotPolicyRequest } from './model/ListSnapshotPolicyRequest';
import { ListSnapshotPolicyResponse } from './model/ListSnapshotPolicyResponse';
import { ListSnapshotStatisticsRequest } from './model/ListSnapshotStatisticsRequest';
import { ListSnapshotStatisticsResponse } from './model/ListSnapshotStatisticsResponse';
import { ListSnapshotsRequest } from './model/ListSnapshotsRequest';
import { ListSnapshotsResponse } from './model/ListSnapshotsResponse';
import { ListStatisticsRequest } from './model/ListStatisticsRequest';
import { ListStatisticsResponse } from './model/ListStatisticsResponse';
import { ListTagsRequest } from './model/ListTagsRequest';
import { ListTagsResponse } from './model/ListTagsResponse';
import { ListWorkloadQueueRequest } from './model/ListWorkloadQueueRequest';
import { ListWorkloadQueueResponse } from './model/ListWorkloadQueueResponse';
import { MaintainWindow } from './model/MaintainWindow';
import { MaintenanceWindow } from './model/MaintenanceWindow';
import { ModifyClusterDns } from './model/ModifyClusterDns';
import { NetResp } from './model/NetResp';
import { NodeTypeAvailableZones } from './model/NodeTypeAvailableZones';
import { NodeTypeDatastores } from './model/NodeTypeDatastores';
import { NodeTypeDatastoresAttachments } from './model/NodeTypeDatastoresAttachments';
import { NodeTypeElasticVolumeSpecs } from './model/NodeTypeElasticVolumeSpecs';
import { NodeTypes } from './model/NodeTypes';
import { Nodes } from './model/Nodes';
import { ObjectAuthority } from './model/ObjectAuthority';
import { OpenPublicIp } from './model/OpenPublicIp';
import { ParameterGroup } from './model/ParameterGroup';
import { PauseDisasterRecoveryRequest } from './model/PauseDisasterRecoveryRequest';
import { PauseDisasterRecoveryResponse } from './model/PauseDisasterRecoveryResponse';
import { ProjectTag } from './model/ProjectTag';
import { PublicEndpoints } from './model/PublicEndpoints';
import { PublicIp } from './model/PublicIp';
import { QuotasQuotas } from './model/QuotasQuotas';
import { QuotasResource } from './model/QuotasResource';
import { ReconfigureExtDataSourceAction } from './model/ReconfigureExtDataSourceAction';
import { ReconfigureExtDataSourceActionReq } from './model/ReconfigureExtDataSourceActionReq';
import { RedistributionReq } from './model/RedistributionReq';
import { ResetPasswordRequest } from './model/ResetPasswordRequest';
import { ResetPasswordRequestBody } from './model/ResetPasswordRequestBody';
import { ResetPasswordResponse } from './model/ResetPasswordResponse';
import { ResizeClusterRequest } from './model/ResizeClusterRequest';
import { ResizeClusterRequestBody } from './model/ResizeClusterRequestBody';
import { ResizeClusterResponse } from './model/ResizeClusterResponse';
import { ResizeInfo } from './model/ResizeInfo';
import { ResourceTag } from './model/ResourceTag';
import { RestartClusterRequest } from './model/RestartClusterRequest';
import { RestartClusterRequestBody } from './model/RestartClusterRequestBody';
import { RestartClusterResponse } from './model/RestartClusterResponse';
import { Restore } from './model/Restore';
import { RestoreClusterRequest } from './model/RestoreClusterRequest';
import { RestoreClusterRequestBody } from './model/RestoreClusterRequestBody';
import { RestoreClusterResponse } from './model/RestoreClusterResponse';
import { RestoreDisasterRequest } from './model/RestoreDisasterRequest';
import { RestoreDisasterResponse } from './model/RestoreDisasterResponse';
import { RestorePoint } from './model/RestorePoint';
import { Revoke } from './model/Revoke';
import { RoleAuthority } from './model/RoleAuthority';
import { ScaleOut } from './model/ScaleOut';
import { ShowDatabaseAuthorityRequest } from './model/ShowDatabaseAuthorityRequest';
import { ShowDatabaseAuthorityResponse } from './model/ShowDatabaseAuthorityResponse';
import { ShowDatabaseUserRequest } from './model/ShowDatabaseUserRequest';
import { ShowDatabaseUserResponse } from './model/ShowDatabaseUserResponse';
import { ShowDisasterDetailRequest } from './model/ShowDisasterDetailRequest';
import { ShowDisasterDetailResponse } from './model/ShowDisasterDetailResponse';
import { ShowDisasterProgressRequest } from './model/ShowDisasterProgressRequest';
import { ShowDisasterProgressResponse } from './model/ShowDisasterProgressResponse';
import { ShrinkClusterRequest } from './model/ShrinkClusterRequest';
import { ShrinkClusterResponse } from './model/ShrinkClusterResponse';
import { Snapshot } from './model/Snapshot';
import { SnapshotDetail } from './model/SnapshotDetail';
import { SnapshotResp } from './model/SnapshotResp';
import { Snapshots } from './model/Snapshots';
import { SnapshotsStatistic } from './model/SnapshotsStatistic';
import { StartDisasterRecoveryRequest } from './model/StartDisasterRecoveryRequest';
import { StartDisasterRecoveryResponse } from './model/StartDisasterRecoveryResponse';
import { Statistic } from './model/Statistic';
import { SwitchFailoverDisasterRequest } from './model/SwitchFailoverDisasterRequest';
import { SwitchFailoverDisasterResponse } from './model/SwitchFailoverDisasterResponse';
import { SwitchOverClusterRequest } from './model/SwitchOverClusterRequest';
import { SwitchOverClusterResponse } from './model/SwitchOverClusterResponse';
import { SwitchoverDisasterRecoveryRequest } from './model/SwitchoverDisasterRecoveryRequest';
import { SwitchoverDisasterRecoveryResponse } from './model/SwitchoverDisasterRecoveryResponse';
import { SyncIamUsersRequest } from './model/SyncIamUsersRequest';
import { SyncIamUsersResponse } from './model/SyncIamUsersResponse';
import { Tag } from './model/Tag';
import { Tags } from './model/Tags';
import { TrendQueryData } from './model/TrendQueryData';
import { TrendQueryDataResp } from './model/TrendQueryDataResp';
import { UpdateAlarmSubRequest } from './model/UpdateAlarmSubRequest';
import { UpdateAlarmSubResponse } from './model/UpdateAlarmSubResponse';
import { UpdateClusterDnsRequest } from './model/UpdateClusterDnsRequest';
import { UpdateClusterDnsResponse } from './model/UpdateClusterDnsResponse';
import { UpdateConfigurationRequest } from './model/UpdateConfigurationRequest';
import { UpdateConfigurationResponse } from './model/UpdateConfigurationResponse';
import { UpdateDataSourceRequest } from './model/UpdateDataSourceRequest';
import { UpdateDataSourceResponse } from './model/UpdateDataSourceResponse';
import { UpdateDatabaseAuthorityRequest } from './model/UpdateDatabaseAuthorityRequest';
import { UpdateDatabaseAuthorityResponse } from './model/UpdateDatabaseAuthorityResponse';
import { UpdateDatabaseUserInfoRequest } from './model/UpdateDatabaseUserInfoRequest';
import { UpdateDatabaseUserInfoResponse } from './model/UpdateDatabaseUserInfoResponse';
import { UpdateDisasterInfoRequest } from './model/UpdateDisasterInfoRequest';
import { UpdateDisasterInfoResponse } from './model/UpdateDisasterInfoResponse';
import { UpdateDisasterRecoveryReq } from './model/UpdateDisasterRecoveryReq';
import { UpdateDisasterRecoveryRequest } from './model/UpdateDisasterRecoveryRequest';
import { UpdateEventSubRequest } from './model/UpdateEventSubRequest';
import { UpdateEventSubResponse } from './model/UpdateEventSubResponse';
import { UpdateMaintenanceWindowRequest } from './model/UpdateMaintenanceWindowRequest';
import { UpdateMaintenanceWindowResponse } from './model/UpdateMaintenanceWindowResponse';
import { V2CreateCluster } from './model/V2CreateCluster';
import { V2CreateClusterReq } from './model/V2CreateClusterReq';
import { Volume } from './model/Volume';
import { VolumeResp } from './model/VolumeResp';
import { WorkloadPlanReq } from './model/WorkloadPlanReq';
import { WorkloadQueue } from './model/WorkloadQueue';
import { WorkloadQueueReq } from './model/WorkloadQueueReq';
import { WorkloadResource } from './model/WorkloadResource';
import { WorkloadStatus } from './model/WorkloadStatus';
import { WorkloadStatusReq } from './model/WorkloadStatusReq';

export class DwsClient {
    public static newBuilder(): ClientBuilder<DwsClient> {
            return new ClientBuilder<DwsClient>(newClient);
    }

    private hcClient: HcClient;
    public constructor(client: HcClient) {
        this.hcClient = client;
    }

    public getPath() {
        return __dirname;
    }


    /**
     * 添加工作负载队列
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 添加工作负载队列
     * @param {string} clusterId 集群ID
     * @param {WorkloadQueueReq} [workloadQueue] 工作负载队列
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public addWorkloadQueue(addWorkloadQueueRequest?: AddWorkloadQueueRequest): Promise<AddWorkloadQueueResponse> {
        const options = ParamCreater().addWorkloadQueue(addWorkloadQueueRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 集群绑定Eip
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 集群绑定EIP
     * @param {string} clusterId 集群ID
     * @param {string} eipId 未绑定的弹性IP的ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public associateEip(associateEipRequest?: AssociateEipRequest): Promise<AssociateEipResponse> {
        const options = ParamCreater().associateEip(associateEipRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 集群绑定Elb接口
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 集群绑定ELB
     * @param {string} clusterId 集群ID
     * @param {string} elbId 未绑定的弹性负载均衡ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public associateElb(associateElbRequest?: AssociateElbRequest): Promise<AssociateElbResponse> {
        const options = ParamCreater().associateElb(associateElbRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 当用户集群创建后，实际需要的CN数量会随着业务需求而发生变化，因此管理CN节点功能的实现使用户可以根据实际需求动态调整集群CN数量。
     * - 增删CN节点过程中不允许执行其他运维操作。
     * - 增删CN节点过程中需要停止业务操作，建议在业务低峰期或业务中断情况下进行操作。
     * - 增删CN节点时发生故障且回滚失败，需要用户登录后台进行处理，处理方案请参见《故障排除》中的“集群使用&gt;增删CN回滚失败”章节。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量增加CN节点
     * @param {string} clusterId 集群的ID。
     * @param {BatchCreateCn} payload 增加CN节点任务完成，集群总CN数量。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchCreateClusterCn(batchCreateClusterCnRequest?: BatchCreateClusterCnRequest): Promise<BatchCreateClusterCnResponse> {
        const options = ParamCreater().batchCreateClusterCn(batchCreateClusterCnRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 为指定集群批量添加标签。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量添加标签
     * @param {string} clusterId 集群的ID
     * @param {BatchCreateResourceTags} tags 标签列表。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchCreateResourceTag(batchCreateResourceTagRequest?: BatchCreateResourceTagRequest): Promise<BatchCreateResourceTagResponse> {
        const options = ParamCreater().batchCreateResourceTag(batchCreateResourceTagRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 当用户集群创建后，实际需要的CN数量会随着业务需求而发生变化，因此管理CN节点功能的实现使用户可以根据实际需求动态调整集群CN数量。
     * - 增删CN节点过程中不允许执行其他运维操作。
     * - 增删CN节点过程中需要停止业务操作，建议在业务低峰期或业务中断情况下进行操作。
     * - 增删CN节点时发生故障且回滚失败，需要用户登录后台进行处理，处理方案请参见《故障排除》中的“集群使用&gt;增删CN回滚失败”章节。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量删除CN节点
     * @param {string} clusterId 集群的ID。
     * @param {BatchDeleteCn} instances 批量删除CN节点列表。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchDeleteClusterCn(batchDeleteClusterCnRequest?: BatchDeleteClusterCnRequest): Promise<BatchDeleteClusterCnResponse> {
        const options = ParamCreater().batchDeleteClusterCn(batchDeleteClusterCnRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 为指定集群批量删除标签。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量删除标签
     * @param {string} clusterId 集群的ID。
     * @param {BatchDeleteResourceTags} tags 标签列表。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchDeleteResourceTag(batchDeleteResourceTagRequest?: BatchDeleteResourceTagRequest): Promise<BatchDeleteResourceTagResponse> {
        const options = ParamCreater().batchDeleteResourceTag(batchDeleteResourceTagRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 当集群进入只读状态时，无法进行数据库相关操作，用户可以在管理控制台解除集群的只读状态。触发只读状态可能是由于磁盘使用率过高，因此需要对集群数据进行清理或扩容。
     * - 解除只读支持1.7.2及以上版本。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 解除只读
     * @param {string} clusterId 集群的ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public cancelReadonlyCluster(cancelReadonlyClusterRequest?: CancelReadonlyClusterRequest): Promise<CancelReadonlyClusterResponse> {
        const options = ParamCreater().cancelReadonlyCluster(cancelReadonlyClusterRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建集群前预检查
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建集群前检查
     * @param {ClusterCheckRequestBody} cluster 创建集群校验请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public checkCluster(checkClusterRequest?: CheckClusterRequest): Promise<CheckClusterResponse> {
        const options = ParamCreater().checkCluster(checkClusterRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 检查容灾名称
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 检查容灾名称
     * @param {string} drName 容灾名称
     * @param {string} [type] 容灾类型
     * @param {string} [standbyRegion] 备集群所在region
     * @param {string} [standbyProjectId] 备集群所在项目ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public checkDisasterName(checkDisasterNameRequest?: CheckDisasterNameRequest): Promise<CheckDisasterNameResponse> {
        const options = ParamCreater().checkDisasterName(checkDisasterNameRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于复制一个自动快照。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 复制快照
     * @param {string} snapshotId 快照ID
     * @param {LinkCopyReq} linkCopyReq 快照复制请求
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public copySnapshot(copySnapshotRequest?: CopySnapshotRequest): Promise<CopySnapshotResponse> {
        const options = ParamCreater().copySnapshot(copySnapshotRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建告警订阅
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建告警订阅
     * @param {AlarmSubRequest} alarmSubReq 创建订阅告警请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createAlarmSub(createAlarmSubRequest?: CreateAlarmSubRequest): Promise<CreateAlarmSubResponse> {
        const options = ParamCreater().createAlarmSub(createAlarmSubRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于创建集群。
     * 集群必须要运行在VPC之内，创建集群前，您需要先创建VPC，并获取VPC和子网的id。
     * 该接口为异步接口，创建集群需要10～15分钟。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建集群
     * @param {CreateClusterRequestBody} createClusterRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createCluster(createClusterRequest?: CreateClusterRequest): Promise<CreateClusterResponse> {
        const options = ParamCreater().createCluster(createClusterRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 为指定集群申请域名。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 申请域名
     * @param {string} clusterId 集群的ID
     * @param {CreateClusterDns} dns 申请域名参数详情。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createClusterDns(createClusterDnsRequest?: CreateClusterDnsRequest): Promise<CreateClusterDnsResponse> {
        const options = ParamCreater().createClusterDns(createClusterDnsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于创建集群。
     * 集群必须要运行在VPC之内，创建集群前，您需要先创建VPC，并获取VPC和子网的id。
     * 该接口为异步接口，创建集群需要10～15分钟。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary V2创建集群
     * @param {V2CreateClusterReq} v2CreateClusterReqBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createClusterV2(createClusterV2Request?: CreateClusterV2Request): Promise<CreateClusterV2Response> {
        const options = ParamCreater().createClusterV2(createClusterV2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 设置资源管理。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 设置资源管理
     * @param {string} clusterId 集群ID
     * @param {WorkloadStatusReq} [workloadStatus] 资源管理状态
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createClusterWorkload(createClusterWorkloadRequest?: CreateClusterWorkloadRequest): Promise<CreateClusterWorkloadResponse> {
        const options = ParamCreater().createClusterWorkload(createClusterWorkloadRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于创建一个数据源。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建数据源
     * @param {string} clusterId 集群ID
     * @param {ExtDataSourceReq} extDataSourceReq 数据源请求
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createDataSource(createDataSourceRequest?: CreateDataSourceRequest): Promise<CreateDataSourceResponse> {
        const options = ParamCreater().createDataSource(createDataSourceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建容灾
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建容灾
     * @param {CreateDisasterRecoveryReq} disasterRecovery 容灾信息
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
     * 添加订阅的事件
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建订阅事件
     * @param {EventSubRequest} eventSubReq 创建事件请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createEventSub(createEventSubRequest?: CreateEventSubRequest): Promise<CreateEventSubResponse> {
        const options = ParamCreater().createEventSub(createEventSubRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于为指定集群创建快照。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建快照
     * @param {CreateSnapshotRequestBody} createSnapshotRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createSnapshot(createSnapshotRequest?: CreateSnapshotRequest): Promise<CreateSnapshotResponse> {
        const options = ParamCreater().createSnapshot(createSnapshotRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于设置快照策略。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 添加快照策略
     * @param {string} clusterId 集群ID
     * @param {BackupPolicy} [req] 备份策略
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createSnapshotPolicy(createSnapshotPolicyRequest?: CreateSnapshotPolicyRequest): Promise<CreateSnapshotPolicyResponse> {
        const options = ParamCreater().createSnapshotPolicy(createSnapshotPolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 添加工作负载计划
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 添加工作负载计划
     * @param {string} clusterId 集群ID
     * @param {WorkloadPlanReq} workloadPlan 资源管理计划
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createWorkloadPlan(createWorkloadPlanRequest?: CreateWorkloadPlanRequest): Promise<CreateWorkloadPlanResponse> {
        const options = ParamCreater().createWorkloadPlan(createWorkloadPlanRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除订阅的告警
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除告警订阅
     * @param {string} alarmSubId 告警订阅ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteAlarmSub(deleteAlarmSubRequest?: DeleteAlarmSubRequest): Promise<DeleteAlarmSubResponse> {
        const options = ParamCreater().deleteAlarmSub(deleteAlarmSubRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 此接口用于删除集群。集群删除后将释放此集群的所有资源，包括客户数据。为了安全起见，请在删除集群前为这个集群创建快照。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除集群
     * @param {string} clusterId 指定待删除集群的ID
     * @param {DeleteClusterRequestBody} deleteClusterRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteCluster(deleteClusterRequest?: DeleteClusterRequest): Promise<DeleteClusterResponse> {
        const options = ParamCreater().deleteCluster(deleteClusterRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除指定集群域名。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除集群域名
     * @param {string} clusterId 集群的ID
     * @param {string} type 域名类型，支持删除公网域名。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteClusterDns(deleteClusterDnsRequest?: DeleteClusterDnsRequest): Promise<DeleteClusterDnsResponse> {
        const options = ParamCreater().deleteClusterDns(deleteClusterDnsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于删除一个数据源。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除数据源
     * @param {string} clusterId 集群ID
     * @param {string} extDataSourceId 数据源id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteDataSource(deleteDataSourceRequest?: DeleteDataSourceRequest): Promise<DeleteDataSourceResponse> {
        const options = ParamCreater().deleteDataSource(deleteDataSourceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除容灾。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除容灾
     * @param {string} disasterRecoveryId 集群的ID
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
     * 删除订阅的事件
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除订阅事件
     * @param {string} eventSubId 事件订阅ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteEventSub(deleteEventSubRequest?: DeleteEventSubRequest): Promise<DeleteEventSubResponse> {
        const options = ParamCreater().deleteEventSub(deleteEventSubRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于删除一个指定手动快照。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除快照
     * @param {string} snapshotId 快照ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteSnapshot(deleteSnapshotRequest?: DeleteSnapshotRequest): Promise<DeleteSnapshotResponse> {
        const options = ParamCreater().deleteSnapshot(deleteSnapshotRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于删除一个快照策略。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除快照策略
     * @param {string} clusterId 集群ID。
     * @param {string} id 快照策略ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteSnapshotPolicy(deleteSnapshotPolicyRequest?: DeleteSnapshotPolicyRequest): Promise<DeleteSnapshotPolicyResponse> {
        const options = ParamCreater().deleteSnapshotPolicy(deleteSnapshotPolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于删除工作负载队列。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除工作负载队列
     * @param {string} clusterId 集群ID。
     * @param {string} workloadQueueName 工作负载队列名称。
     * @param {string} [logicalClusterName] 逻辑集群名称。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteWorkloadQueue(deleteWorkloadQueueRequest?: DeleteWorkloadQueueRequest): Promise<DeleteWorkloadQueueResponse> {
        const options = ParamCreater().deleteWorkloadQueue(deleteWorkloadQueueRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 集群解绑Eip
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 集群解绑EIP
     * @param {string} clusterId 集群ID
     * @param {string} eipId 集群绑定的弹性IP
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public disassociateEip(disassociateEipRequest?: DisassociateEipRequest): Promise<DisassociateEipResponse> {
        const options = ParamCreater().disassociateEip(disassociateEipRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 集群解绑Elb接口
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 集群解绑ELB
     * @param {string} clusterId 集群ID
     * @param {string} elbId 集群已绑定的弹性负载均衡ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public disassociateElb(disassociateElbRequest?: DisassociateElbRequest): Promise<DisassociateElbResponse> {
        const options = ParamCreater().disassociateElb(disassociateElbRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 下发重分布
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 下发重分布
     * @param {string} clusterId 集群ID
     * @param {RedistributionReq} redistributionReq 重分布请求
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public executeRedistributionCluster(executeRedistributionClusterRequest?: ExecuteRedistributionClusterRequest): Promise<ExecuteRedistributionClusterResponse> {
        const options = ParamCreater().executeRedistributionCluster(executeRedistributionClusterRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 随着客户业务的发展，磁盘空间往往最先出现资源瓶颈，在其他资源尚且充足的情况下，通过磁盘扩容可快速缓解存储资源瓶颈现象，操作过程中无需暂停业务，并且不会造成CPU、内存等资源浪费。
     * - 磁盘扩容功能仅8.1.1.203及以上版本支持，并且创建集群规格需要为云数仓SSD云盘或实时数仓类型。
     * - 按需+折扣套餐包消费模式下，存储扩容后超出折扣套餐包部分将按需收费。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 磁盘扩容
     * @param {string} clusterId 集群的ID。
     * @param {ExpandInstanceStorage} payload 磁盘扩容后单节点有效存储容量（GB / 节点）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public expandInstanceStorage(expandInstanceStorageRequest?: ExpandInstanceStorageRequest): Promise<ExpandInstanceStorageResponse> {
        const options = ParamCreater().expandInstanceStorage(expandInstanceStorageRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询告警配置
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询告警配置
     * @param {string} [offset] 偏移量
     * @param {string} [limit] 限制条目数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAlarmConfigs(listAlarmConfigsRequest?: ListAlarmConfigsRequest): Promise<ListAlarmConfigsResponse> {
        const options = ParamCreater().listAlarmConfigs(listAlarmConfigsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询告警详情列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询告警详情列表
     * @param {string} timeZone 时区
     * @param {string} [offset] 当前页
     * @param {string} [limit] 总页数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAlarmDetail(listAlarmDetailRequest?: ListAlarmDetailRequest): Promise<ListAlarmDetailResponse> {
        const options = ParamCreater().listAlarmDetail(listAlarmDetailRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询告警统计
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询告警统计列表
     * @param {string} timeZone 时区
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAlarmStatistic(listAlarmStatisticRequest?: ListAlarmStatisticRequest): Promise<ListAlarmStatisticResponse> {
        const options = ParamCreater().listAlarmStatistic(listAlarmStatisticRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询订阅告警
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询告警订阅列表
     * @param {string} [offset] 偏移量
     * @param {string} [limit] 限制条目数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAlarmSubs(listAlarmSubsRequest?: ListAlarmSubsRequest): Promise<ListAlarmSubsResponse> {
        const options = ParamCreater().listAlarmSubs(listAlarmSubsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询审计日志记录。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询日志记录
     * @param {string} clusterId 集群ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAuditLog(listAuditLogRequest?: ListAuditLogRequest): Promise<ListAuditLogResponse> {
        const options = ParamCreater().listAuditLog(listAuditLogRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 在创建实例时，需要配置实例所在的可用区ID，可通过该接口查询可用区的ID。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询可用区列表
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAvailabilityZones(): Promise<ListAvailabilityZonesResponse> {
        const options = ParamCreater().listAvailabilityZones();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询可用容灾集群列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询可用容灾集群列表
     * @param {string} primaryClusterId 主集群ID
     * @param {string} standbyAzCode 备集群所在AZ
     * @param {string} [primarySpecId] 主集群规格ID
     * @param {string} [primaryClusterDnNum] 主集群DN数量
     * @param {string} [standbyRegion] 备集群所在region
     * @param {string} [standbyProjectId] 备集群项目ID
     * @param {string} [drType] 容灾类型
     * @param {string} [datastoreType] 数仓类型
     * @param {string} [datastoreVersion] 数仓版本
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAvailableDisasterClusters(listAvailableDisasterClustersRequest?: ListAvailableDisasterClustersRequest): Promise<ListAvailableDisasterClustersResponse> {
        const options = ParamCreater().listAvailableDisasterClusters(listAvailableDisasterClustersRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询集群的CN节点列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询集群CN节点
     * @param {string} clusterId 集群的ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listClusterCn(listClusterCnRequest?: ListClusterCnRequest): Promise<ListClusterCnResponse> {
        const options = ParamCreater().listClusterCn(listClusterCnRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询集群所关联的参数组。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询集群参数组
     * @param {string} clusterId 集群的ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listClusterConfigurations(listClusterConfigurationsRequest?: ListClusterConfigurationsRequest): Promise<ListClusterConfigurationsResponse> {
        const options = ParamCreater().listClusterConfigurations(listClusterConfigurationsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询集群所关联的参数组。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询集群参数配置
     * @param {string} clusterId 集群的ID。
     * @param {string} configurationId 参数组ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listClusterConfigurationsParameter(listClusterConfigurationsParameterRequest?: ListClusterConfigurationsParameterRequest): Promise<ListClusterConfigurationsParameterResponse> {
        const options = ParamCreater().listClusterConfigurationsParameter(listClusterConfigurationsParameterRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于查询集群详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询集群详情
     * @param {string} clusterId 集群ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listClusterDetails(listClusterDetailsRequest?: ListClusterDetailsRequest): Promise<ListClusterDetailsResponse> {
        const options = ParamCreater().listClusterDetails(listClusterDetailsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询合适的缩容数
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询合适的缩容数
     * @param {string} clusterId 集群ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listClusterScaleInNumbers(listClusterScaleInNumbersRequest?: ListClusterScaleInNumbersRequest): Promise<ListClusterScaleInNumbersResponse> {
        const options = ParamCreater().listClusterScaleInNumbers(listClusterScaleInNumbersRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于查询集群快照列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询集群快照列表
     * @param {string} clusterId 集群ID
     * @param {number} [limit] 查询条数
     * @param {number} [offset] 偏移量
     * @param {string} [sortKey] 排序字段
     * @param {string} [sortDir] 排序规则
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listClusterSnapshots(listClusterSnapshotsRequest?: ListClusterSnapshotsRequest): Promise<ListClusterSnapshotsResponse> {
        const options = ParamCreater().listClusterSnapshots(listClusterSnapshotsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定集群的标签信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询集群标签
     * @param {string} clusterId 集群的ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listClusterTags(listClusterTagsRequest?: ListClusterTagsRequest): Promise<ListClusterTagsResponse> {
        const options = ParamCreater().listClusterTags(listClusterTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询资管管理开关。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询资源管理
     * @param {string} clusterId 集群ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listClusterWorkload(listClusterWorkloadRequest?: ListClusterWorkloadRequest): Promise<ListClusterWorkloadResponse> {
        const options = ParamCreater().listClusterWorkload(listClusterWorkloadRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于查询并显示集群列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询集群列表
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listClusters(): Promise<ListClustersResponse> {
        const options = ParamCreater().listClusters();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于查询数据源。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询数据源
     * @param {string} clusterId 集群ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listDataSource(listDataSourceRequest?: ListDataSourceRequest): Promise<ListDataSourceResponse> {
        const options = ParamCreater().listDataSource(listDataSourceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询所有数据库用户/角色
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询所有数据库用户/角色
     * @param {string} clusterId cluster_id
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
     * 查询容灾列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询容灾列表
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listDisasterRecover(): Promise<ListDisasterRecoverResponse> {
        const options = ParamCreater().listDisasterRecover();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取专属分布式存储池列表，只包括用户开通的SSD专属资源池信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询专属分布式存储池列表
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listDssPools(): Promise<ListDssPoolsResponse> {
        const options = ParamCreater().listDssPools();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询集群可以关联的Elb列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取集群可绑定的ELB列表
     * @param {string} clusterId 集群ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listElbs(listElbsRequest?: ListElbsRequest): Promise<ListElbsResponse> {
        const options = ParamCreater().listElbs(listElbsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询事件配置
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询事件配置
     * @param {string} [specName] 事件配置名称
     * @param {string} [category] 事件类别
     * @param {string} [severity] 事件级别
     * @param {string} [sourceType] 事件源类别
     * @param {string} [tag] 事件标签
     * @param {string} [offset] 偏移量
     * @param {string} [limit] 限制条目数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listEventSpecs(listEventSpecsRequest?: ListEventSpecsRequest): Promise<ListEventSpecsResponse> {
        const options = ParamCreater().listEventSpecs(listEventSpecsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询订阅的事件
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询订阅事件
     * @param {string} [offset] 偏移量
     * @param {string} [limit] 限制条目数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listEventSubs(listEventSubsRequest?: ListEventSubsRequest): Promise<ListEventSubsResponse> {
        const options = ParamCreater().listEventSubs(listEventSubsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询事件列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询事件列表
     * @param {string} [offset] 偏移量
     * @param {string} [limit] 限制条目数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listEvents(listEventsRequest?: ListEventsRequest): Promise<ListEventsResponse> {
        const options = ParamCreater().listEvents(listEventsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * openApi查询磁盘信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary openApi查询磁盘信息
     * @param {number} limit 数据条目数。
     * @param {number} offset 数据偏移量。
     * @param {string} [clusterId] 集群ID。获取方法，请参见9.6-获取集群ID。
     * @param {string} [instanceName] 实例名称。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listHostDisk(listHostDiskRequest?: ListHostDiskRequest): Promise<ListHostDiskResponse> {
        const options = ParamCreater().listHostDisk(listHostDiskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * openapi获取网卡状态
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary openapi获取网卡状态
     * @param {number} limit 数据条目数。
     * @param {number} offset 数据偏移量。
     * @param {string} [clusterId] 集群ID。获取方法，请参见9.6-获取集群ID。
     * @param {string} [instanceName] 实例名称。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listHostNet(listHostNetRequest?: ListHostNetRequest): Promise<ListHostNetResponse> {
        const options = ParamCreater().listHostNet(listHostNetRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * openApi查询主机概览
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary openApi查询主机概览
     * @param {number} limit 数据条目数。
     * @param {number} offset 数据偏移量。
     * @param {string} [clusterId] 集群ID。获取方法，请参见9.6-获取集群ID。
     * @param {string} [instanceName] 实例名称。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listHostOverview(listHostOverviewRequest?: ListHostOverviewRequest): Promise<ListHostOverviewResponse> {
        const options = ParamCreater().listHostOverview(listHostOverviewRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询job进度信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询job进度
     * @param {string} jobId 任务ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listJobDetails(listJobDetailsRequest?: ListJobDetailsRequest): Promise<ListJobDetailsResponse> {
        const options = ParamCreater().listJobDetails(listJobDetailsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * openApi查询历史监控数据
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary openApi查询历史监控数据
     * @param {string} from 开始时间。
     * @param {string} to 结束时间。
     * @param {string} indicatorName 指标名称。
     * @param {string} dim0 第一层级。
     * @param {string} [_function] 取值方法。
     * @param {string} [period] 取值周期。
     * @param {string} [dim1] 第二层级。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listMonitorIndicatorData(listMonitorIndicatorDataRequest?: ListMonitorIndicatorDataRequest): Promise<ListMonitorIndicatorDataResponse> {
        const options = ParamCreater().listMonitorIndicatorData(listMonitorIndicatorDataRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * openApi查询性能监控指标
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary openApi查询性能监控指标
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listMonitorIndicators(): Promise<ListMonitorIndicatorsResponse> {
        const options = ParamCreater().listMonitorIndicators();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于查询所有GaussDB(DWS)服务支持的节点类型。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询节点类型
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listNodeTypes(): Promise<ListNodeTypesResponse> {
        const options = ParamCreater().listNodeTypes();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询单租户在GaussDB(DWS)服务下的配额信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询配额
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listQuotas(): Promise<ListQuotasResponse> {
        const options = ParamCreater().listQuotas();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于使用快照ID查询快照详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询快照详情
     * @param {string} snapshotId 快照ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listSnapshotDetails(listSnapshotDetailsRequest?: ListSnapshotDetailsRequest): Promise<ListSnapshotDetailsResponse> {
        const options = ParamCreater().listSnapshotDetails(listSnapshotDetailsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询快照策略。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询快照策略
     * @param {string} clusterId 集群ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listSnapshotPolicy(listSnapshotPolicyRequest?: ListSnapshotPolicyRequest): Promise<ListSnapshotPolicyResponse> {
        const options = ParamCreater().listSnapshotPolicy(listSnapshotPolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 快照统计信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 快照统计信息
     * @param {string} clusterId 集群的ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listSnapshotStatistics(listSnapshotStatisticsRequest?: ListSnapshotStatisticsRequest): Promise<ListSnapshotStatisticsResponse> {
        const options = ParamCreater().listSnapshotStatistics(listSnapshotStatisticsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于查询快照列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询快照列表
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listSnapshots(): Promise<ListSnapshotsResponse> {
        const options = ParamCreater().listSnapshots();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询当前可用资源数量，其中包括“可用集群和总集群（个）”、“可用节点和总节点（个）”、“总容量（GB）”。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询资源统计信息列表
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listStatistics(): Promise<ListStatisticsResponse> {
        const options = ParamCreater().listStatistics();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询项目标签列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询项目标签
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listTags(): Promise<ListTagsResponse> {
        const options = ParamCreater().listTags();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询工作负载队列
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询工作负载队列
     * @param {string} clusterId 集群ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listWorkloadQueue(listWorkloadQueueRequest?: ListWorkloadQueueRequest): Promise<ListWorkloadQueueResponse> {
        const options = ParamCreater().listWorkloadQueue(listWorkloadQueueRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 停止容灾
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 停止容灾
     * @param {string} disasterRecoveryId 容灾ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public pauseDisasterRecovery(pauseDisasterRecoveryRequest?: PauseDisasterRecoveryRequest): Promise<PauseDisasterRecoveryResponse> {
        const options = ParamCreater().pauseDisasterRecovery(pauseDisasterRecoveryRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 此接口用于重置集群管理员密码。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 重置密码
     * @param {string} clusterId 指定待重置密码集群的ID
     * @param {ResetPasswordRequestBody} resetPasswordRequestBody This is a auto create Body Object
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
     * 此接口用于扩容集群。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 扩容集群调整集群大小
     * @param {string} clusterId 待调整大小的集群ID
     * @param {ResizeClusterRequestBody} [resizeClusterRequestBody] This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public resizeCluster(resizeClusterRequest?: ResizeClusterRequest): Promise<ResizeClusterResponse> {
        const options = ParamCreater().resizeCluster(resizeClusterRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 此接口用于重启集群。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 重启集群
     * @param {string} clusterId 指定待重启集群的ID
     * @param {RestartClusterRequestBody} restartClusterRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public restartCluster(restartClusterRequest?: RestartClusterRequest): Promise<RestartClusterResponse> {
        const options = ParamCreater().restartCluster(restartClusterRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于使用快照恢复集群。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 恢复集群
     * @param {string} snapshotId 待恢复的快照ID。
     * @param {RestoreClusterRequestBody} restoreClusterRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public restoreCluster(restoreClusterRequest?: RestoreClusterRequest): Promise<RestoreClusterResponse> {
        const options = ParamCreater().restoreCluster(restoreClusterRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 恢复容灾
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 恢复容灾
     * @param {string} disasterRecoveryId 容灾ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public restoreDisaster(restoreDisasterRequest?: RestoreDisasterRequest): Promise<RestoreDisasterResponse> {
        const options = ParamCreater().restoreDisaster(restoreDisasterRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询数据库对象权限
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询数据库对象权限
     * @param {string} clusterId cluster_id
     * @param {string} type 对象类型 [DATABASE | SCHEMA | TABLE | VIEW | COLUMN| FUNCTION|| SEQUENCE| NODEGROUP]
     * @param {Array<string>} name 对象名称
     * @param {string} database 数据库名
     * @param {string} [schema] 模式名，对象类型为TABLE、VIEW、COLUMN、FUNCTION、SEQUENCE时必选
     * @param {string} [table] 表名，对象类型为COLUMN时必选
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showDatabaseAuthority(showDatabaseAuthorityRequest?: ShowDatabaseAuthorityRequest): Promise<ShowDatabaseAuthorityResponse> {
        const options = ParamCreater().showDatabaseAuthority(showDatabaseAuthorityRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定用户信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询指定用户信息
     * @param {string} clusterId cluster_id
     * @param {string} name name
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showDatabaseUser(showDatabaseUserRequest?: ShowDatabaseUserRequest): Promise<ShowDatabaseUserResponse> {
        const options = ParamCreater().showDatabaseUser(showDatabaseUserRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询容灾详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询容灾详情
     * @param {string} disasterRecoveryId 容灾ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showDisasterDetail(showDisasterDetailRequest?: ShowDisasterDetailRequest): Promise<ShowDisasterDetailResponse> {
        const options = ParamCreater().showDisasterDetail(showDisasterDetailRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 容灾-查询容灾进度详情
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 容灾-查询容灾进度详情
     * @param {string} disasterRecoveryId disaster_recovery_id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showDisasterProgress(showDisasterProgressRequest?: ShowDisasterProgressRequest): Promise<ShowDisasterProgressResponse> {
        const options = ParamCreater().showDisasterProgress(showDisasterProgressRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于缩容集群。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 集群缩容
     * @param {string} clusterId 集群ID
     * @param {ClusterShrinkReq} clusterShrinkReq 集群缩容请求
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public shrinkCluster(shrinkClusterRequest?: ShrinkClusterRequest): Promise<ShrinkClusterResponse> {
        const options = ParamCreater().shrinkCluster(shrinkClusterRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 启动容灾
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 启动容灾
     * @param {string} disasterRecoveryId 容灾ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public startDisasterRecovery(startDisasterRecoveryRequest?: StartDisasterRecoveryRequest): Promise<StartDisasterRecoveryResponse> {
        const options = ParamCreater().startDisasterRecovery(startDisasterRecoveryRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 容灾-异常切换
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 容灾异常切换
     * @param {string} disasterRecoveryId 容灾ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public switchFailoverDisaster(switchFailoverDisasterRequest?: SwitchFailoverDisasterRequest): Promise<SwitchFailoverDisasterResponse> {
        const options = ParamCreater().switchFailoverDisaster(switchFailoverDisasterRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 当集群状态为“非均衡”时会出现某些节点主实例增多，从而负载压力较大。这种情况下集群状态是正常的，但整体性能要低于均衡状态。可进行集群主备恢复操作将集群状态切换为“可用“状态。
     * - 集群主备恢复仅8.1.1.202及以上版本支持。
     * - 集群主备恢复将会短暂中断业务，中断时间根据用户自身业务量所决定，建议用户在业务低峰期执行此操作。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 主备恢复
     * @param {string} clusterId 集群的ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public switchOverCluster(switchOverClusterRequest?: SwitchOverClusterRequest): Promise<SwitchOverClusterResponse> {
        const options = ParamCreater().switchOverCluster(switchOverClusterRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 容灾-灾备切换
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 灾备切换
     * @param {string} disasterRecoveryId 容灾ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public switchoverDisasterRecovery(switchoverDisasterRecoveryRequest?: SwitchoverDisasterRecoveryRequest): Promise<SwitchoverDisasterRecoveryResponse> {
        const options = ParamCreater().switchoverDisasterRecovery(switchoverDisasterRecoveryRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 同步IAM用户到数据库
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 同步IAM用户到数据库
     * @param {string} clusterId cluster_id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public syncIamUsers(syncIamUsersRequest?: SyncIamUsersRequest): Promise<SyncIamUsersResponse> {
        const options = ParamCreater().syncIamUsers(syncIamUsersRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新订阅的告警
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新告警订阅
     * @param {string} alarmSubId 告警订阅ID
     * @param {AlarmSubUpdateRequest} [alarmSubUpdateReq] 更新告警订阅请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateAlarmSub(updateAlarmSubRequest?: UpdateAlarmSubRequest): Promise<UpdateAlarmSubResponse> {
        const options = ParamCreater().updateAlarmSub(updateAlarmSubRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 为指定集群修改域名。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改集群域名
     * @param {string} clusterId 集群的ID
     * @param {ModifyClusterDns} dns 修改域名参数类型。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateClusterDns(updateClusterDnsRequest?: UpdateClusterDnsRequest): Promise<UpdateClusterDnsResponse> {
        const options = ParamCreater().updateClusterDns(updateClusterDnsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改集群使用的参数配置信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改集群参数配置
     * @param {string} clusterId 集群的ID。
     * @param {string} configurationId 参数组ID。
     * @param {ConfigurationParameterValues} dns 修改集群参数配置。
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
     * 该接口用于更新一个数据源。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新数据源
     * @param {string} clusterId 集群ID
     * @param {string} extDataSourceId 数据源id
     * @param {ReconfigureExtDataSourceActionReq} reconfigure 更新数据源配置
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateDataSource(updateDataSourceRequest?: UpdateDataSourceRequest): Promise<UpdateDataSourceResponse> {
        const options = ParamCreater().updateDataSource(updateDataSourceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改数据库对象权限
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改数据库对象权限
     * @param {string} clusterId cluster_id
     * @param {DatabasePermissionReq} updateDatabaseAuthorityRequestBody 修改数据库对象权限请求
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateDatabaseAuthority(updateDatabaseAuthorityRequest?: UpdateDatabaseAuthorityRequest): Promise<UpdateDatabaseAuthorityResponse> {
        const options = ParamCreater().updateDatabaseAuthority(updateDatabaseAuthorityRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改指定用户信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改指定用户信息
     * @param {string} clusterId cluster_id
     * @param {string} name name
     * @param {DatabaseUserInfoReq} updateDatabaseUserInfoRequestBody 修改用户权限请求
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateDatabaseUserInfo(updateDatabaseUserInfoRequest?: UpdateDatabaseUserInfoRequest): Promise<UpdateDatabaseUserInfoResponse> {
        const options = ParamCreater().updateDatabaseUserInfo(updateDatabaseUserInfoRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新容灾配置
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新容灾配置
     * @param {string} disasterRecoveryId 容灾ID
     * @param {UpdateDisasterRecoveryRequest} [updateDisasterInfoRequestBody] 更新容灾配置请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateDisasterInfo(updateDisasterInfoRequest?: UpdateDisasterInfoRequest): Promise<UpdateDisasterInfoResponse> {
        const options = ParamCreater().updateDisasterInfo(updateDisasterInfoRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新订阅事件
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新订阅事件
     * @param {string} eventSubId 事件订阅ID
     * @param {EventSubUpdateRequest} eventSubUpdateReq 更新订阅事件请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateEventSub(updateEventSubRequest?: UpdateEventSubRequest): Promise<UpdateEventSubResponse> {
        const options = ParamCreater().updateEventSub(updateEventSubRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 您可以根据业务需求，设置可维护时间段。建议将可维护时间段设置在业务低峰期，避免业务在维护过程中异常中断。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改运维时间窗
     * @param {string} clusterId 集群的ID。
     * @param {MaintenanceWindow} payload 设置可维护时间段。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateMaintenanceWindow(updateMaintenanceWindowRequest?: UpdateMaintenanceWindowRequest): Promise<UpdateMaintenanceWindowResponse> {
        const options = ParamCreater().updateMaintenanceWindow(updateMaintenanceWindowRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * 添加工作负载队列
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        addWorkloadQueue(addWorkloadQueueRequest?: AddWorkloadQueueRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/clusters/{cluster_id}/workload/queues",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;

            if (addWorkloadQueueRequest !== null && addWorkloadQueueRequest !== undefined) {
                if (addWorkloadQueueRequest instanceof AddWorkloadQueueRequest) {
                    clusterId = addWorkloadQueueRequest.clusterId;
                    body = addWorkloadQueueRequest.body
                } else {
                    clusterId = addWorkloadQueueRequest['cluster_id'];
                    body = addWorkloadQueueRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling addWorkloadQueue.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 集群绑定Eip
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        associateEip(associateEipRequest?: AssociateEipRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/clusters/{cluster_id}/eips/{eip_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clusterId;
            
            let eipId;

            if (associateEipRequest !== null && associateEipRequest !== undefined) {
                if (associateEipRequest instanceof AssociateEipRequest) {
                    clusterId = associateEipRequest.clusterId;
                    eipId = associateEipRequest.eipId;
                } else {
                    clusterId = associateEipRequest['cluster_id'];
                    eipId = associateEipRequest['eip_id'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling associateEip.');
            }
            if (eipId === null || eipId === undefined) {
            throw new RequiredError('eipId','Required parameter eipId was null or undefined when calling associateEip.');
            }

            options.pathParams = { 'cluster_id': clusterId,'eip_id': eipId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 集群绑定Elb接口
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        associateElb(associateElbRequest?: AssociateElbRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/clusters/{cluster_id}/elbs/{elb_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clusterId;
            
            let elbId;

            if (associateElbRequest !== null && associateElbRequest !== undefined) {
                if (associateElbRequest instanceof AssociateElbRequest) {
                    clusterId = associateElbRequest.clusterId;
                    elbId = associateElbRequest.elbId;
                } else {
                    clusterId = associateElbRequest['cluster_id'];
                    elbId = associateElbRequest['elb_id'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling associateElb.');
            }
            if (elbId === null || elbId === undefined) {
            throw new RequiredError('elbId','Required parameter elbId was null or undefined when calling associateElb.');
            }

            options.pathParams = { 'cluster_id': clusterId,'elb_id': elbId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 当用户集群创建后，实际需要的CN数量会随着业务需求而发生变化，因此管理CN节点功能的实现使用户可以根据实际需求动态调整集群CN数量。
         * - 增删CN节点过程中不允许执行其他运维操作。
         * - 增删CN节点过程中需要停止业务操作，建议在业务低峰期或业务中断情况下进行操作。
         * - 增删CN节点时发生故障且回滚失败，需要用户登录后台进行处理，处理方案请参见《故障排除》中的“集群使用&gt;增删CN回滚失败”章节。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchCreateClusterCn(batchCreateClusterCnRequest?: BatchCreateClusterCnRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/{project_id}/clusters/{cluster_id}/cns/batch-create",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;

            if (batchCreateClusterCnRequest !== null && batchCreateClusterCnRequest !== undefined) {
                if (batchCreateClusterCnRequest instanceof BatchCreateClusterCnRequest) {
                    clusterId = batchCreateClusterCnRequest.clusterId;
                    body = batchCreateClusterCnRequest.body
                } else {
                    clusterId = batchCreateClusterCnRequest['cluster_id'];
                    body = batchCreateClusterCnRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling batchCreateClusterCn.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 为指定集群批量添加标签。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchCreateResourceTag(batchCreateResourceTagRequest?: BatchCreateResourceTagRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/{project_id}/clusters/{cluster_id}/tags/batch-create",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;

            if (batchCreateResourceTagRequest !== null && batchCreateResourceTagRequest !== undefined) {
                if (batchCreateResourceTagRequest instanceof BatchCreateResourceTagRequest) {
                    clusterId = batchCreateResourceTagRequest.clusterId;
                    body = batchCreateResourceTagRequest.body
                } else {
                    clusterId = batchCreateResourceTagRequest['cluster_id'];
                    body = batchCreateResourceTagRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling batchCreateResourceTag.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 当用户集群创建后，实际需要的CN数量会随着业务需求而发生变化，因此管理CN节点功能的实现使用户可以根据实际需求动态调整集群CN数量。
         * - 增删CN节点过程中不允许执行其他运维操作。
         * - 增删CN节点过程中需要停止业务操作，建议在业务低峰期或业务中断情况下进行操作。
         * - 增删CN节点时发生故障且回滚失败，需要用户登录后台进行处理，处理方案请参见《故障排除》中的“集群使用&gt;增删CN回滚失败”章节。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchDeleteClusterCn(batchDeleteClusterCnRequest?: BatchDeleteClusterCnRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/{project_id}/clusters/{cluster_id}/cns/batch-delete",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;

            if (batchDeleteClusterCnRequest !== null && batchDeleteClusterCnRequest !== undefined) {
                if (batchDeleteClusterCnRequest instanceof BatchDeleteClusterCnRequest) {
                    clusterId = batchDeleteClusterCnRequest.clusterId;
                    body = batchDeleteClusterCnRequest.body
                } else {
                    clusterId = batchDeleteClusterCnRequest['cluster_id'];
                    body = batchDeleteClusterCnRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling batchDeleteClusterCn.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 为指定集群批量删除标签。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchDeleteResourceTag(batchDeleteResourceTagRequest?: BatchDeleteResourceTagRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/{project_id}/clusters/{cluster_id}/tags/batch-delete",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;

            if (batchDeleteResourceTagRequest !== null && batchDeleteResourceTagRequest !== undefined) {
                if (batchDeleteResourceTagRequest instanceof BatchDeleteResourceTagRequest) {
                    clusterId = batchDeleteResourceTagRequest.clusterId;
                    body = batchDeleteResourceTagRequest.body
                } else {
                    clusterId = batchDeleteResourceTagRequest['cluster_id'];
                    body = batchDeleteResourceTagRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling batchDeleteResourceTag.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 当集群进入只读状态时，无法进行数据库相关操作，用户可以在管理控制台解除集群的只读状态。触发只读状态可能是由于磁盘使用率过高，因此需要对集群数据进行清理或扩容。
         * - 解除只读支持1.7.2及以上版本。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        cancelReadonlyCluster(cancelReadonlyClusterRequest?: CancelReadonlyClusterRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/{project_id}/clusters/{cluster_id}/cancel-readonly",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clusterId;

            if (cancelReadonlyClusterRequest !== null && cancelReadonlyClusterRequest !== undefined) {
                if (cancelReadonlyClusterRequest instanceof CancelReadonlyClusterRequest) {
                    clusterId = cancelReadonlyClusterRequest.clusterId;
                } else {
                    clusterId = cancelReadonlyClusterRequest['cluster_id'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling cancelReadonlyCluster.');
            }

            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建集群前预检查
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        checkCluster(checkClusterRequest?: CheckClusterRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/cluster-precheck",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (checkClusterRequest !== null && checkClusterRequest !== undefined) {
                if (checkClusterRequest instanceof CheckClusterRequest) {
                    body = checkClusterRequest.body
                } else {
                    body = checkClusterRequest['body'];
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
         * 检查容灾名称
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        checkDisasterName(checkDisasterNameRequest?: CheckDisasterNameRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/disaster-recovery/check-name",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let drName;
            
            let type;
            
            let standbyRegion;
            
            let standbyProjectId;

            if (checkDisasterNameRequest !== null && checkDisasterNameRequest !== undefined) {
                if (checkDisasterNameRequest instanceof CheckDisasterNameRequest) {
                    drName = checkDisasterNameRequest.drName;
                    type = checkDisasterNameRequest.type;
                    standbyRegion = checkDisasterNameRequest.standbyRegion;
                    standbyProjectId = checkDisasterNameRequest.standbyProjectId;
                } else {
                    drName = checkDisasterNameRequest['dr_name'];
                    type = checkDisasterNameRequest['type'];
                    standbyRegion = checkDisasterNameRequest['standby_region'];
                    standbyProjectId = checkDisasterNameRequest['standby_project_id'];
                }
            }

        
            if (drName === null || drName === undefined) {
                throw new RequiredError('drName','Required parameter drName was null or undefined when calling checkDisasterName.');
            }
            if (drName !== null && drName !== undefined) {
                localVarQueryParameter['dr_name'] = drName;
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }
            if (standbyRegion !== null && standbyRegion !== undefined) {
                localVarQueryParameter['standby_region'] = standbyRegion;
            }
            if (standbyProjectId !== null && standbyProjectId !== undefined) {
                localVarQueryParameter['standby_project_id'] = standbyProjectId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于复制一个自动快照。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        copySnapshot(copySnapshotRequest?: CopySnapshotRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/{project_id}/snapshots/{snapshot_id}/linked-copy",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let snapshotId;

            if (copySnapshotRequest !== null && copySnapshotRequest !== undefined) {
                if (copySnapshotRequest instanceof CopySnapshotRequest) {
                    snapshotId = copySnapshotRequest.snapshotId;
                    body = copySnapshotRequest.body
                } else {
                    snapshotId = copySnapshotRequest['snapshot_id'];
                    body = copySnapshotRequest['body'];
                }
            }

        
            if (snapshotId === null || snapshotId === undefined) {
            throw new RequiredError('snapshotId','Required parameter snapshotId was null or undefined when calling copySnapshot.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'snapshot_id': snapshotId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建告警订阅
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createAlarmSub(createAlarmSubRequest?: CreateAlarmSubRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/alarm-subs",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createAlarmSubRequest !== null && createAlarmSubRequest !== undefined) {
                if (createAlarmSubRequest instanceof CreateAlarmSubRequest) {
                    body = createAlarmSubRequest.body
                } else {
                    body = createAlarmSubRequest['body'];
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
         * 该接口用于创建集群。
         * 集群必须要运行在VPC之内，创建集群前，您需要先创建VPC，并获取VPC和子网的id。
         * 该接口为异步接口，创建集群需要10～15分钟。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createCluster(createClusterRequest?: CreateClusterRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/{project_id}/clusters",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createClusterRequest !== null && createClusterRequest !== undefined) {
                if (createClusterRequest instanceof CreateClusterRequest) {
                    body = createClusterRequest.body
                } else {
                    body = createClusterRequest['body'];
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
         * 为指定集群申请域名。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createClusterDns(createClusterDnsRequest?: CreateClusterDnsRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/{project_id}/clusters/{cluster_id}/dns",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;

            if (createClusterDnsRequest !== null && createClusterDnsRequest !== undefined) {
                if (createClusterDnsRequest instanceof CreateClusterDnsRequest) {
                    clusterId = createClusterDnsRequest.clusterId;
                    body = createClusterDnsRequest.body
                } else {
                    clusterId = createClusterDnsRequest['cluster_id'];
                    body = createClusterDnsRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling createClusterDns.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于创建集群。
         * 集群必须要运行在VPC之内，创建集群前，您需要先创建VPC，并获取VPC和子网的id。
         * 该接口为异步接口，创建集群需要10～15分钟。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createClusterV2(createClusterV2Request?: CreateClusterV2Request) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/clusters",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createClusterV2Request !== null && createClusterV2Request !== undefined) {
                if (createClusterV2Request instanceof CreateClusterV2Request) {
                    body = createClusterV2Request.body
                } else {
                    body = createClusterV2Request['body'];
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
         * 设置资源管理。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createClusterWorkload(createClusterWorkloadRequest?: CreateClusterWorkloadRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/clusters/{cluster_id}/workload",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;

            if (createClusterWorkloadRequest !== null && createClusterWorkloadRequest !== undefined) {
                if (createClusterWorkloadRequest instanceof CreateClusterWorkloadRequest) {
                    clusterId = createClusterWorkloadRequest.clusterId;
                    body = createClusterWorkloadRequest.body
                } else {
                    clusterId = createClusterWorkloadRequest['cluster_id'];
                    body = createClusterWorkloadRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling createClusterWorkload.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于创建一个数据源。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createDataSource(createDataSourceRequest?: CreateDataSourceRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/{project_id}/clusters/{cluster_id}/ext-data-sources",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;

            if (createDataSourceRequest !== null && createDataSourceRequest !== undefined) {
                if (createDataSourceRequest instanceof CreateDataSourceRequest) {
                    clusterId = createDataSourceRequest.clusterId;
                    body = createDataSourceRequest.body
                } else {
                    clusterId = createDataSourceRequest['cluster_id'];
                    body = createDataSourceRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling createDataSource.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建容灾
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createDisasterRecovery(createDisasterRecoveryRequest?: CreateDisasterRecoveryRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/disaster-recoveries",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createDisasterRecoveryRequest !== null && createDisasterRecoveryRequest !== undefined) {
                if (createDisasterRecoveryRequest instanceof CreateDisasterRecoveryRequest) {
                    body = createDisasterRecoveryRequest.body
                } else {
                    body = createDisasterRecoveryRequest['body'];
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
         * 添加订阅的事件
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createEventSub(createEventSubRequest?: CreateEventSubRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/event-subs",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createEventSubRequest !== null && createEventSubRequest !== undefined) {
                if (createEventSubRequest instanceof CreateEventSubRequest) {
                    body = createEventSubRequest.body
                } else {
                    body = createEventSubRequest['body'];
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
         * 该接口用于为指定集群创建快照。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createSnapshot(createSnapshotRequest?: CreateSnapshotRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/{project_id}/snapshots",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createSnapshotRequest !== null && createSnapshotRequest !== undefined) {
                if (createSnapshotRequest instanceof CreateSnapshotRequest) {
                    body = createSnapshotRequest.body
                } else {
                    body = createSnapshotRequest['body'];
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
         * 该接口用于设置快照策略。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createSnapshotPolicy(createSnapshotPolicyRequest?: CreateSnapshotPolicyRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/clusters/{cluster_id}/snapshot-policies",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;

            if (createSnapshotPolicyRequest !== null && createSnapshotPolicyRequest !== undefined) {
                if (createSnapshotPolicyRequest instanceof CreateSnapshotPolicyRequest) {
                    clusterId = createSnapshotPolicyRequest.clusterId;
                    body = createSnapshotPolicyRequest.body
                } else {
                    clusterId = createSnapshotPolicyRequest['cluster_id'];
                    body = createSnapshotPolicyRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling createSnapshotPolicy.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 添加工作负载计划
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createWorkloadPlan(createWorkloadPlanRequest?: CreateWorkloadPlanRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/clusters/{cluster_id}/workload/plans",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;

            if (createWorkloadPlanRequest !== null && createWorkloadPlanRequest !== undefined) {
                if (createWorkloadPlanRequest instanceof CreateWorkloadPlanRequest) {
                    clusterId = createWorkloadPlanRequest.clusterId;
                    body = createWorkloadPlanRequest.body
                } else {
                    clusterId = createWorkloadPlanRequest['cluster_id'];
                    body = createWorkloadPlanRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling createWorkloadPlan.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除订阅的告警
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteAlarmSub(deleteAlarmSubRequest?: DeleteAlarmSubRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/alarm-subs/{alarm_sub_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let alarmSubId;

            if (deleteAlarmSubRequest !== null && deleteAlarmSubRequest !== undefined) {
                if (deleteAlarmSubRequest instanceof DeleteAlarmSubRequest) {
                    alarmSubId = deleteAlarmSubRequest.alarmSubId;
                } else {
                    alarmSubId = deleteAlarmSubRequest['alarm_sub_id'];
                }
            }

        
            if (alarmSubId === null || alarmSubId === undefined) {
            throw new RequiredError('alarmSubId','Required parameter alarmSubId was null or undefined when calling deleteAlarmSub.');
            }

            options.pathParams = { 'alarm_sub_id': alarmSubId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 此接口用于删除集群。集群删除后将释放此集群的所有资源，包括客户数据。为了安全起见，请在删除集群前为这个集群创建快照。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteCluster(deleteClusterRequest?: DeleteClusterRequest) {
            const options = {
                method: "DELETE",
                url: "/v1.0/{project_id}/clusters/{cluster_id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;

            if (deleteClusterRequest !== null && deleteClusterRequest !== undefined) {
                if (deleteClusterRequest instanceof DeleteClusterRequest) {
                    clusterId = deleteClusterRequest.clusterId;
                    body = deleteClusterRequest.body
                } else {
                    clusterId = deleteClusterRequest['cluster_id'];
                    body = deleteClusterRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling deleteCluster.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除指定集群域名。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteClusterDns(deleteClusterDnsRequest?: DeleteClusterDnsRequest) {
            const options = {
                method: "DELETE",
                url: "/v1.0/{project_id}/clusters/{cluster_id}/dns",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let clusterId;
            
            let type;

            if (deleteClusterDnsRequest !== null && deleteClusterDnsRequest !== undefined) {
                if (deleteClusterDnsRequest instanceof DeleteClusterDnsRequest) {
                    clusterId = deleteClusterDnsRequest.clusterId;
                    type = deleteClusterDnsRequest.type;
                } else {
                    clusterId = deleteClusterDnsRequest['cluster_id'];
                    type = deleteClusterDnsRequest['type'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling deleteClusterDns.');
            }
            if (type === null || type === undefined) {
                throw new RequiredError('type','Required parameter type was null or undefined when calling deleteClusterDns.');
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于删除一个数据源。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteDataSource(deleteDataSourceRequest?: DeleteDataSourceRequest) {
            const options = {
                method: "DELETE",
                url: "/v1.0/{project_id}/clusters/{cluster_id}/ext-data-sources/{ext_data_source_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clusterId;
            
            let extDataSourceId;

            if (deleteDataSourceRequest !== null && deleteDataSourceRequest !== undefined) {
                if (deleteDataSourceRequest instanceof DeleteDataSourceRequest) {
                    clusterId = deleteDataSourceRequest.clusterId;
                    extDataSourceId = deleteDataSourceRequest.extDataSourceId;
                } else {
                    clusterId = deleteDataSourceRequest['cluster_id'];
                    extDataSourceId = deleteDataSourceRequest['ext_data_source_id'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling deleteDataSource.');
            }
            if (extDataSourceId === null || extDataSourceId === undefined) {
            throw new RequiredError('extDataSourceId','Required parameter extDataSourceId was null or undefined when calling deleteDataSource.');
            }

            options.pathParams = { 'cluster_id': clusterId,'ext_data_source_id': extDataSourceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除容灾。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteDisasterRecovery(deleteDisasterRecoveryRequest?: DeleteDisasterRecoveryRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/disaster-recovery/{disaster_recovery_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let disasterRecoveryId;

            if (deleteDisasterRecoveryRequest !== null && deleteDisasterRecoveryRequest !== undefined) {
                if (deleteDisasterRecoveryRequest instanceof DeleteDisasterRecoveryRequest) {
                    disasterRecoveryId = deleteDisasterRecoveryRequest.disasterRecoveryId;
                } else {
                    disasterRecoveryId = deleteDisasterRecoveryRequest['disaster_recovery_id'];
                }
            }

        
            if (disasterRecoveryId === null || disasterRecoveryId === undefined) {
            throw new RequiredError('disasterRecoveryId','Required parameter disasterRecoveryId was null or undefined when calling deleteDisasterRecovery.');
            }

            options.pathParams = { 'disaster_recovery_id': disasterRecoveryId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除订阅的事件
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteEventSub(deleteEventSubRequest?: DeleteEventSubRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/event-subs/{event_sub_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let eventSubId;

            if (deleteEventSubRequest !== null && deleteEventSubRequest !== undefined) {
                if (deleteEventSubRequest instanceof DeleteEventSubRequest) {
                    eventSubId = deleteEventSubRequest.eventSubId;
                } else {
                    eventSubId = deleteEventSubRequest['event_sub_id'];
                }
            }

        
            if (eventSubId === null || eventSubId === undefined) {
            throw new RequiredError('eventSubId','Required parameter eventSubId was null or undefined when calling deleteEventSub.');
            }

            options.pathParams = { 'event_sub_id': eventSubId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于删除一个指定手动快照。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteSnapshot(deleteSnapshotRequest?: DeleteSnapshotRequest) {
            const options = {
                method: "DELETE",
                url: "/v1.0/{project_id}/snapshots/{snapshot_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let snapshotId;

            if (deleteSnapshotRequest !== null && deleteSnapshotRequest !== undefined) {
                if (deleteSnapshotRequest instanceof DeleteSnapshotRequest) {
                    snapshotId = deleteSnapshotRequest.snapshotId;
                } else {
                    snapshotId = deleteSnapshotRequest['snapshot_id'];
                }
            }

        
            if (snapshotId === null || snapshotId === undefined) {
            throw new RequiredError('snapshotId','Required parameter snapshotId was null or undefined when calling deleteSnapshot.');
            }

            options.pathParams = { 'snapshot_id': snapshotId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于删除一个快照策略。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteSnapshotPolicy(deleteSnapshotPolicyRequest?: DeleteSnapshotPolicyRequest) {
            const options = {
                method: "DELETE",
                url: "/v1.0/{project_id}/clusters/{cluster_id}/snapshot-policies/{id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clusterId;
            
            let id;

            if (deleteSnapshotPolicyRequest !== null && deleteSnapshotPolicyRequest !== undefined) {
                if (deleteSnapshotPolicyRequest instanceof DeleteSnapshotPolicyRequest) {
                    clusterId = deleteSnapshotPolicyRequest.clusterId;
                    id = deleteSnapshotPolicyRequest.id;
                } else {
                    clusterId = deleteSnapshotPolicyRequest['cluster_id'];
                    id = deleteSnapshotPolicyRequest['id'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling deleteSnapshotPolicy.');
            }
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling deleteSnapshotPolicy.');
            }

            options.pathParams = { 'cluster_id': clusterId,'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于删除工作负载队列。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteWorkloadQueue(deleteWorkloadQueueRequest?: DeleteWorkloadQueueRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/clusters/{cluster_id}/workload/queues",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let clusterId;
            
            let workloadQueueName;
            
            let logicalClusterName;

            if (deleteWorkloadQueueRequest !== null && deleteWorkloadQueueRequest !== undefined) {
                if (deleteWorkloadQueueRequest instanceof DeleteWorkloadQueueRequest) {
                    clusterId = deleteWorkloadQueueRequest.clusterId;
                    workloadQueueName = deleteWorkloadQueueRequest.workloadQueueName;
                    logicalClusterName = deleteWorkloadQueueRequest.logicalClusterName;
                } else {
                    clusterId = deleteWorkloadQueueRequest['cluster_id'];
                    workloadQueueName = deleteWorkloadQueueRequest['workload_queue_name'];
                    logicalClusterName = deleteWorkloadQueueRequest['logical_cluster_name'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling deleteWorkloadQueue.');
            }
            if (workloadQueueName === null || workloadQueueName === undefined) {
                throw new RequiredError('workloadQueueName','Required parameter workloadQueueName was null or undefined when calling deleteWorkloadQueue.');
            }
            if (workloadQueueName !== null && workloadQueueName !== undefined) {
                localVarQueryParameter['workload_queue_name'] = workloadQueueName;
            }
            if (logicalClusterName !== null && logicalClusterName !== undefined) {
                localVarQueryParameter['logical_cluster_name'] = logicalClusterName;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 集群解绑Eip
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        disassociateEip(disassociateEipRequest?: DisassociateEipRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/clusters/{cluster_id}/eips/{eip_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clusterId;
            
            let eipId;

            if (disassociateEipRequest !== null && disassociateEipRequest !== undefined) {
                if (disassociateEipRequest instanceof DisassociateEipRequest) {
                    clusterId = disassociateEipRequest.clusterId;
                    eipId = disassociateEipRequest.eipId;
                } else {
                    clusterId = disassociateEipRequest['cluster_id'];
                    eipId = disassociateEipRequest['eip_id'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling disassociateEip.');
            }
            if (eipId === null || eipId === undefined) {
            throw new RequiredError('eipId','Required parameter eipId was null or undefined when calling disassociateEip.');
            }

            options.pathParams = { 'cluster_id': clusterId,'eip_id': eipId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 集群解绑Elb接口
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        disassociateElb(disassociateElbRequest?: DisassociateElbRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/clusters/{cluster_id}/elbs/{elb_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clusterId;
            
            let elbId;

            if (disassociateElbRequest !== null && disassociateElbRequest !== undefined) {
                if (disassociateElbRequest instanceof DisassociateElbRequest) {
                    clusterId = disassociateElbRequest.clusterId;
                    elbId = disassociateElbRequest.elbId;
                } else {
                    clusterId = disassociateElbRequest['cluster_id'];
                    elbId = disassociateElbRequest['elb_id'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling disassociateElb.');
            }
            if (elbId === null || elbId === undefined) {
            throw new RequiredError('elbId','Required parameter elbId was null or undefined when calling disassociateElb.');
            }

            options.pathParams = { 'cluster_id': clusterId,'elb_id': elbId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 下发重分布
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        executeRedistributionCluster(executeRedistributionClusterRequest?: ExecuteRedistributionClusterRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/clusters/{cluster_id}/redistribution",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;

            if (executeRedistributionClusterRequest !== null && executeRedistributionClusterRequest !== undefined) {
                if (executeRedistributionClusterRequest instanceof ExecuteRedistributionClusterRequest) {
                    clusterId = executeRedistributionClusterRequest.clusterId;
                    body = executeRedistributionClusterRequest.body
                } else {
                    clusterId = executeRedistributionClusterRequest['cluster_id'];
                    body = executeRedistributionClusterRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling executeRedistributionCluster.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 随着客户业务的发展，磁盘空间往往最先出现资源瓶颈，在其他资源尚且充足的情况下，通过磁盘扩容可快速缓解存储资源瓶颈现象，操作过程中无需暂停业务，并且不会造成CPU、内存等资源浪费。
         * - 磁盘扩容功能仅8.1.1.203及以上版本支持，并且创建集群规格需要为云数仓SSD云盘或实时数仓类型。
         * - 按需+折扣套餐包消费模式下，存储扩容后超出折扣套餐包部分将按需收费。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        expandInstanceStorage(expandInstanceStorageRequest?: ExpandInstanceStorageRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/{project_id}/clusters/{cluster_id}/expand-instance-storage",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;

            if (expandInstanceStorageRequest !== null && expandInstanceStorageRequest !== undefined) {
                if (expandInstanceStorageRequest instanceof ExpandInstanceStorageRequest) {
                    clusterId = expandInstanceStorageRequest.clusterId;
                    body = expandInstanceStorageRequest.body
                } else {
                    clusterId = expandInstanceStorageRequest['cluster_id'];
                    body = expandInstanceStorageRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling expandInstanceStorage.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询告警配置
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAlarmConfigs(listAlarmConfigsRequest?: ListAlarmConfigsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/alarm-configs",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let offset;
            
            let limit;

            if (listAlarmConfigsRequest !== null && listAlarmConfigsRequest !== undefined) {
                if (listAlarmConfigsRequest instanceof ListAlarmConfigsRequest) {
                    offset = listAlarmConfigsRequest.offset;
                    limit = listAlarmConfigsRequest.limit;
                } else {
                    offset = listAlarmConfigsRequest['offset'];
                    limit = listAlarmConfigsRequest['limit'];
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
         * 查询告警详情列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAlarmDetail(listAlarmDetailRequest?: ListAlarmDetailRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/alarms",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let timeZone;
            
            let offset;
            
            let limit;

            if (listAlarmDetailRequest !== null && listAlarmDetailRequest !== undefined) {
                if (listAlarmDetailRequest instanceof ListAlarmDetailRequest) {
                    timeZone = listAlarmDetailRequest.timeZone;
                    offset = listAlarmDetailRequest.offset;
                    limit = listAlarmDetailRequest.limit;
                } else {
                    timeZone = listAlarmDetailRequest['time_zone'];
                    offset = listAlarmDetailRequest['offset'];
                    limit = listAlarmDetailRequest['limit'];
                }
            }

        
            if (timeZone === null || timeZone === undefined) {
                throw new RequiredError('timeZone','Required parameter timeZone was null or undefined when calling listAlarmDetail.');
            }
            if (timeZone !== null && timeZone !== undefined) {
                localVarQueryParameter['time_zone'] = timeZone;
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
         * 查询告警统计
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAlarmStatistic(listAlarmStatisticRequest?: ListAlarmStatisticRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/alarm-statistic",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let timeZone;

            if (listAlarmStatisticRequest !== null && listAlarmStatisticRequest !== undefined) {
                if (listAlarmStatisticRequest instanceof ListAlarmStatisticRequest) {
                    timeZone = listAlarmStatisticRequest.timeZone;
                } else {
                    timeZone = listAlarmStatisticRequest['time_zone'];
                }
            }

        
            if (timeZone === null || timeZone === undefined) {
                throw new RequiredError('timeZone','Required parameter timeZone was null or undefined when calling listAlarmStatistic.');
            }
            if (timeZone !== null && timeZone !== undefined) {
                localVarQueryParameter['time_zone'] = timeZone;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询订阅告警
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAlarmSubs(listAlarmSubsRequest?: ListAlarmSubsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/alarm-subs",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let offset;
            
            let limit;

            if (listAlarmSubsRequest !== null && listAlarmSubsRequest !== undefined) {
                if (listAlarmSubsRequest instanceof ListAlarmSubsRequest) {
                    offset = listAlarmSubsRequest.offset;
                    limit = listAlarmSubsRequest.limit;
                } else {
                    offset = listAlarmSubsRequest['offset'];
                    limit = listAlarmSubsRequest['limit'];
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
         * 查询审计日志记录。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAuditLog(listAuditLogRequest?: ListAuditLogRequest) {
            const options = {
                method: "GET",
                url: "/v1.0/{project_id}/clusters/{cluster_id}/audit-log-records",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clusterId;

            if (listAuditLogRequest !== null && listAuditLogRequest !== undefined) {
                if (listAuditLogRequest instanceof ListAuditLogRequest) {
                    clusterId = listAuditLogRequest.clusterId;
                } else {
                    clusterId = listAuditLogRequest['cluster_id'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling listAuditLog.');
            }

            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 在创建实例时，需要配置实例所在的可用区ID，可通过该接口查询可用区的ID。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAvailabilityZones() {
            const options = {
                method: "GET",
                url: "/v1.0/{project_id}/availability-zones",
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
         * 查询可用容灾集群列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAvailableDisasterClusters(listAvailableDisasterClustersRequest?: ListAvailableDisasterClustersRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/disaster-recovery-clusters",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let primaryClusterId;
            
            let standbyAzCode;
            
            let primarySpecId;
            
            let primaryClusterDnNum;
            
            let standbyRegion;
            
            let standbyProjectId;
            
            let drType;
            
            let datastoreType;
            
            let datastoreVersion;

            if (listAvailableDisasterClustersRequest !== null && listAvailableDisasterClustersRequest !== undefined) {
                if (listAvailableDisasterClustersRequest instanceof ListAvailableDisasterClustersRequest) {
                    primaryClusterId = listAvailableDisasterClustersRequest.primaryClusterId;
                    standbyAzCode = listAvailableDisasterClustersRequest.standbyAzCode;
                    primarySpecId = listAvailableDisasterClustersRequest.primarySpecId;
                    primaryClusterDnNum = listAvailableDisasterClustersRequest.primaryClusterDnNum;
                    standbyRegion = listAvailableDisasterClustersRequest.standbyRegion;
                    standbyProjectId = listAvailableDisasterClustersRequest.standbyProjectId;
                    drType = listAvailableDisasterClustersRequest.drType;
                    datastoreType = listAvailableDisasterClustersRequest.datastoreType;
                    datastoreVersion = listAvailableDisasterClustersRequest.datastoreVersion;
                } else {
                    primaryClusterId = listAvailableDisasterClustersRequest['primary_cluster_id'];
                    standbyAzCode = listAvailableDisasterClustersRequest['standby_az_code'];
                    primarySpecId = listAvailableDisasterClustersRequest['primary_spec_id'];
                    primaryClusterDnNum = listAvailableDisasterClustersRequest['primary_cluster_dn_num'];
                    standbyRegion = listAvailableDisasterClustersRequest['standby_region'];
                    standbyProjectId = listAvailableDisasterClustersRequest['standby_project_id'];
                    drType = listAvailableDisasterClustersRequest['dr_type'];
                    datastoreType = listAvailableDisasterClustersRequest['datastore_type'];
                    datastoreVersion = listAvailableDisasterClustersRequest['datastore_version'];
                }
            }

        
            if (primaryClusterId === null || primaryClusterId === undefined) {
                throw new RequiredError('primaryClusterId','Required parameter primaryClusterId was null or undefined when calling listAvailableDisasterClusters.');
            }
            if (primaryClusterId !== null && primaryClusterId !== undefined) {
                localVarQueryParameter['primary_cluster_id'] = primaryClusterId;
            }
            if (standbyAzCode === null || standbyAzCode === undefined) {
                throw new RequiredError('standbyAzCode','Required parameter standbyAzCode was null or undefined when calling listAvailableDisasterClusters.');
            }
            if (standbyAzCode !== null && standbyAzCode !== undefined) {
                localVarQueryParameter['standby_az_code'] = standbyAzCode;
            }
            if (primarySpecId !== null && primarySpecId !== undefined) {
                localVarQueryParameter['primary_spec_id'] = primarySpecId;
            }
            if (primaryClusterDnNum !== null && primaryClusterDnNum !== undefined) {
                localVarQueryParameter['primary_cluster_dn_num'] = primaryClusterDnNum;
            }
            if (standbyRegion !== null && standbyRegion !== undefined) {
                localVarQueryParameter['standby_region'] = standbyRegion;
            }
            if (standbyProjectId !== null && standbyProjectId !== undefined) {
                localVarQueryParameter['standby_project_id'] = standbyProjectId;
            }
            if (drType !== null && drType !== undefined) {
                localVarQueryParameter['dr_type'] = drType;
            }
            if (datastoreType !== null && datastoreType !== undefined) {
                localVarQueryParameter['datastore_type'] = datastoreType;
            }
            if (datastoreVersion !== null && datastoreVersion !== undefined) {
                localVarQueryParameter['datastore_version'] = datastoreVersion;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询集群的CN节点列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listClusterCn(listClusterCnRequest?: ListClusterCnRequest) {
            const options = {
                method: "GET",
                url: "/v1.0/{project_id}/clusters/{cluster_id}/cns",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clusterId;

            if (listClusterCnRequest !== null && listClusterCnRequest !== undefined) {
                if (listClusterCnRequest instanceof ListClusterCnRequest) {
                    clusterId = listClusterCnRequest.clusterId;
                } else {
                    clusterId = listClusterCnRequest['cluster_id'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling listClusterCn.');
            }

            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询集群所关联的参数组。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listClusterConfigurations(listClusterConfigurationsRequest?: ListClusterConfigurationsRequest) {
            const options = {
                method: "GET",
                url: "/v1.0/{project_id}/clusters/{cluster_id}/configurations",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clusterId;

            if (listClusterConfigurationsRequest !== null && listClusterConfigurationsRequest !== undefined) {
                if (listClusterConfigurationsRequest instanceof ListClusterConfigurationsRequest) {
                    clusterId = listClusterConfigurationsRequest.clusterId;
                } else {
                    clusterId = listClusterConfigurationsRequest['cluster_id'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling listClusterConfigurations.');
            }

            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询集群所关联的参数组。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listClusterConfigurationsParameter(listClusterConfigurationsParameterRequest?: ListClusterConfigurationsParameterRequest) {
            const options = {
                method: "GET",
                url: "/v1.0/{project_id}/clusters/{cluster_id}/configurations/{configuration_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clusterId;
            
            let configurationId;

            if (listClusterConfigurationsParameterRequest !== null && listClusterConfigurationsParameterRequest !== undefined) {
                if (listClusterConfigurationsParameterRequest instanceof ListClusterConfigurationsParameterRequest) {
                    clusterId = listClusterConfigurationsParameterRequest.clusterId;
                    configurationId = listClusterConfigurationsParameterRequest.configurationId;
                } else {
                    clusterId = listClusterConfigurationsParameterRequest['cluster_id'];
                    configurationId = listClusterConfigurationsParameterRequest['configuration_id'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling listClusterConfigurationsParameter.');
            }
            if (configurationId === null || configurationId === undefined) {
            throw new RequiredError('configurationId','Required parameter configurationId was null or undefined when calling listClusterConfigurationsParameter.');
            }

            options.pathParams = { 'cluster_id': clusterId,'configuration_id': configurationId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于查询集群详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listClusterDetails(listClusterDetailsRequest?: ListClusterDetailsRequest) {
            const options = {
                method: "GET",
                url: "/v1.0/{project_id}/clusters/{cluster_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clusterId;

            if (listClusterDetailsRequest !== null && listClusterDetailsRequest !== undefined) {
                if (listClusterDetailsRequest instanceof ListClusterDetailsRequest) {
                    clusterId = listClusterDetailsRequest.clusterId;
                } else {
                    clusterId = listClusterDetailsRequest['cluster_id'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling listClusterDetails.');
            }

            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询合适的缩容数
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listClusterScaleInNumbers(listClusterScaleInNumbersRequest?: ListClusterScaleInNumbersRequest) {
            const options = {
                method: "GET",
                url: "/v1.0/{project_id}/clusters/{cluster_id}/shrink-numbers",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clusterId;

            if (listClusterScaleInNumbersRequest !== null && listClusterScaleInNumbersRequest !== undefined) {
                if (listClusterScaleInNumbersRequest instanceof ListClusterScaleInNumbersRequest) {
                    clusterId = listClusterScaleInNumbersRequest.clusterId;
                } else {
                    clusterId = listClusterScaleInNumbersRequest['cluster_id'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling listClusterScaleInNumbers.');
            }

            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于查询集群快照列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listClusterSnapshots(listClusterSnapshotsRequest?: ListClusterSnapshotsRequest) {
            const options = {
                method: "GET",
                url: "/v1.0/{project_id}/clusters/{cluster_id}/snapshots",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let clusterId;
            
            let limit;
            
            let offset;
            
            let sortKey;
            
            let sortDir;

            if (listClusterSnapshotsRequest !== null && listClusterSnapshotsRequest !== undefined) {
                if (listClusterSnapshotsRequest instanceof ListClusterSnapshotsRequest) {
                    clusterId = listClusterSnapshotsRequest.clusterId;
                    limit = listClusterSnapshotsRequest.limit;
                    offset = listClusterSnapshotsRequest.offset;
                    sortKey = listClusterSnapshotsRequest.sortKey;
                    sortDir = listClusterSnapshotsRequest.sortDir;
                } else {
                    clusterId = listClusterSnapshotsRequest['cluster_id'];
                    limit = listClusterSnapshotsRequest['limit'];
                    offset = listClusterSnapshotsRequest['offset'];
                    sortKey = listClusterSnapshotsRequest['sort_key'];
                    sortDir = listClusterSnapshotsRequest['sort_dir'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling listClusterSnapshots.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (sortKey !== null && sortKey !== undefined) {
                localVarQueryParameter['sort_key'] = sortKey;
            }
            if (sortDir !== null && sortDir !== undefined) {
                localVarQueryParameter['sort_dir'] = sortDir;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询指定集群的标签信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listClusterTags(listClusterTagsRequest?: ListClusterTagsRequest) {
            const options = {
                method: "GET",
                url: "/v1.0/{project_id}/clusters/{cluster_id}/tags",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clusterId;

            if (listClusterTagsRequest !== null && listClusterTagsRequest !== undefined) {
                if (listClusterTagsRequest instanceof ListClusterTagsRequest) {
                    clusterId = listClusterTagsRequest.clusterId;
                } else {
                    clusterId = listClusterTagsRequest['cluster_id'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling listClusterTags.');
            }

            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询资管管理开关。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listClusterWorkload(listClusterWorkloadRequest?: ListClusterWorkloadRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/clusters/{cluster_id}/workload",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clusterId;

            if (listClusterWorkloadRequest !== null && listClusterWorkloadRequest !== undefined) {
                if (listClusterWorkloadRequest instanceof ListClusterWorkloadRequest) {
                    clusterId = listClusterWorkloadRequest.clusterId;
                } else {
                    clusterId = listClusterWorkloadRequest['cluster_id'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling listClusterWorkload.');
            }

            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于查询并显示集群列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listClusters() {
            const options = {
                method: "GET",
                url: "/v1.0/{project_id}/clusters",
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
         * 该接口用于查询数据源。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listDataSource(listDataSourceRequest?: ListDataSourceRequest) {
            const options = {
                method: "GET",
                url: "/v1.0/{project_id}/clusters/{cluster_id}/ext-data-sources",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clusterId;

            if (listDataSourceRequest !== null && listDataSourceRequest !== undefined) {
                if (listDataSourceRequest instanceof ListDataSourceRequest) {
                    clusterId = listDataSourceRequest.clusterId;
                } else {
                    clusterId = listDataSourceRequest['cluster_id'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling listDataSource.');
            }

            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询所有数据库用户/角色
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listDatabaseUsers(listDatabaseUsersRequest?: ListDatabaseUsersRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/clusters/{cluster_id}/db-manager/users",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clusterId;

            if (listDatabaseUsersRequest !== null && listDatabaseUsersRequest !== undefined) {
                if (listDatabaseUsersRequest instanceof ListDatabaseUsersRequest) {
                    clusterId = listDatabaseUsersRequest.clusterId;
                } else {
                    clusterId = listDatabaseUsersRequest['cluster_id'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling listDatabaseUsers.');
            }

            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询容灾列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listDisasterRecover() {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/disaster-recoveries",
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
         * 获取专属分布式存储池列表，只包括用户开通的SSD专属资源池信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listDssPools() {
            const options = {
                method: "GET",
                url: "/v1.0/{project_id}/dss-pools",
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
         * 查询集群可以关联的Elb列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listElbs(listElbsRequest?: ListElbsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/clusters/{cluster_id}/elbs",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clusterId;

            if (listElbsRequest !== null && listElbsRequest !== undefined) {
                if (listElbsRequest instanceof ListElbsRequest) {
                    clusterId = listElbsRequest.clusterId;
                } else {
                    clusterId = listElbsRequest['cluster_id'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling listElbs.');
            }

            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询事件配置
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listEventSpecs(listEventSpecsRequest?: ListEventSpecsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/event-specs",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let specName;
            
            let category;
            
            let severity;
            
            let sourceType;
            
            let tag;
            
            let offset;
            
            let limit;

            if (listEventSpecsRequest !== null && listEventSpecsRequest !== undefined) {
                if (listEventSpecsRequest instanceof ListEventSpecsRequest) {
                    specName = listEventSpecsRequest.specName;
                    category = listEventSpecsRequest.category;
                    severity = listEventSpecsRequest.severity;
                    sourceType = listEventSpecsRequest.sourceType;
                    tag = listEventSpecsRequest.tag;
                    offset = listEventSpecsRequest.offset;
                    limit = listEventSpecsRequest.limit;
                } else {
                    specName = listEventSpecsRequest['spec_name'];
                    category = listEventSpecsRequest['category'];
                    severity = listEventSpecsRequest['severity'];
                    sourceType = listEventSpecsRequest['source_type'];
                    tag = listEventSpecsRequest['tag'];
                    offset = listEventSpecsRequest['offset'];
                    limit = listEventSpecsRequest['limit'];
                }
            }

        
            if (specName !== null && specName !== undefined) {
                localVarQueryParameter['spec_name'] = specName;
            }
            if (category !== null && category !== undefined) {
                localVarQueryParameter['category'] = category;
            }
            if (severity !== null && severity !== undefined) {
                localVarQueryParameter['severity'] = severity;
            }
            if (sourceType !== null && sourceType !== undefined) {
                localVarQueryParameter['source_type'] = sourceType;
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

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询订阅的事件
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listEventSubs(listEventSubsRequest?: ListEventSubsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/event-subs",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let offset;
            
            let limit;

            if (listEventSubsRequest !== null && listEventSubsRequest !== undefined) {
                if (listEventSubsRequest instanceof ListEventSubsRequest) {
                    offset = listEventSubsRequest.offset;
                    limit = listEventSubsRequest.limit;
                } else {
                    offset = listEventSubsRequest['offset'];
                    limit = listEventSubsRequest['limit'];
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
         * 查询事件列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listEvents(listEventsRequest?: ListEventsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/events",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let offset;
            
            let limit;

            if (listEventsRequest !== null && listEventsRequest !== undefined) {
                if (listEventsRequest instanceof ListEventsRequest) {
                    offset = listEventsRequest.offset;
                    limit = listEventsRequest.limit;
                } else {
                    offset = listEventsRequest['offset'];
                    limit = listEventsRequest['limit'];
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
         * openApi查询磁盘信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listHostDisk(listHostDiskRequest?: ListHostDiskRequest) {
            const options = {
                method: "GET",
                url: "/v1.0/{project_id}/dms/disk",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let limit;
            
            let offset;
            
            let clusterId;
            
            let instanceName;

            if (listHostDiskRequest !== null && listHostDiskRequest !== undefined) {
                if (listHostDiskRequest instanceof ListHostDiskRequest) {
                    limit = listHostDiskRequest.limit;
                    offset = listHostDiskRequest.offset;
                    clusterId = listHostDiskRequest.clusterId;
                    instanceName = listHostDiskRequest.instanceName;
                } else {
                    limit = listHostDiskRequest['limit'];
                    offset = listHostDiskRequest['offset'];
                    clusterId = listHostDiskRequest['cluster_id'];
                    instanceName = listHostDiskRequest['instance_name'];
                }
            }

        
            if (limit === null || limit === undefined) {
                throw new RequiredError('limit','Required parameter limit was null or undefined when calling listHostDisk.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset === null || offset === undefined) {
                throw new RequiredError('offset','Required parameter offset was null or undefined when calling listHostDisk.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (clusterId !== null && clusterId !== undefined) {
                localVarQueryParameter['cluster_id'] = clusterId;
            }
            if (instanceName !== null && instanceName !== undefined) {
                localVarQueryParameter['instance_name'] = instanceName;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * openapi获取网卡状态
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listHostNet(listHostNetRequest?: ListHostNetRequest) {
            const options = {
                method: "GET",
                url: "/v1.0/{project_id}/dms/net",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let limit;
            
            let offset;
            
            let clusterId;
            
            let instanceName;

            if (listHostNetRequest !== null && listHostNetRequest !== undefined) {
                if (listHostNetRequest instanceof ListHostNetRequest) {
                    limit = listHostNetRequest.limit;
                    offset = listHostNetRequest.offset;
                    clusterId = listHostNetRequest.clusterId;
                    instanceName = listHostNetRequest.instanceName;
                } else {
                    limit = listHostNetRequest['limit'];
                    offset = listHostNetRequest['offset'];
                    clusterId = listHostNetRequest['cluster_id'];
                    instanceName = listHostNetRequest['instance_name'];
                }
            }

        
            if (limit === null || limit === undefined) {
                throw new RequiredError('limit','Required parameter limit was null or undefined when calling listHostNet.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset === null || offset === undefined) {
                throw new RequiredError('offset','Required parameter offset was null or undefined when calling listHostNet.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (clusterId !== null && clusterId !== undefined) {
                localVarQueryParameter['cluster_id'] = clusterId;
            }
            if (instanceName !== null && instanceName !== undefined) {
                localVarQueryParameter['instance_name'] = instanceName;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * openApi查询主机概览
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listHostOverview(listHostOverviewRequest?: ListHostOverviewRequest) {
            const options = {
                method: "GET",
                url: "/v1.0/{project_id}/dms/host-overview",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let limit;
            
            let offset;
            
            let clusterId;
            
            let instanceName;

            if (listHostOverviewRequest !== null && listHostOverviewRequest !== undefined) {
                if (listHostOverviewRequest instanceof ListHostOverviewRequest) {
                    limit = listHostOverviewRequest.limit;
                    offset = listHostOverviewRequest.offset;
                    clusterId = listHostOverviewRequest.clusterId;
                    instanceName = listHostOverviewRequest.instanceName;
                } else {
                    limit = listHostOverviewRequest['limit'];
                    offset = listHostOverviewRequest['offset'];
                    clusterId = listHostOverviewRequest['cluster_id'];
                    instanceName = listHostOverviewRequest['instance_name'];
                }
            }

        
            if (limit === null || limit === undefined) {
                throw new RequiredError('limit','Required parameter limit was null or undefined when calling listHostOverview.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset === null || offset === undefined) {
                throw new RequiredError('offset','Required parameter offset was null or undefined when calling listHostOverview.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (clusterId !== null && clusterId !== undefined) {
                localVarQueryParameter['cluster_id'] = clusterId;
            }
            if (instanceName !== null && instanceName !== undefined) {
                localVarQueryParameter['instance_name'] = instanceName;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询job进度信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listJobDetails(listJobDetailsRequest?: ListJobDetailsRequest) {
            const options = {
                method: "GET",
                url: "/v1.0/{project_id}/job/{job_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let jobId;

            if (listJobDetailsRequest !== null && listJobDetailsRequest !== undefined) {
                if (listJobDetailsRequest instanceof ListJobDetailsRequest) {
                    jobId = listJobDetailsRequest.jobId;
                } else {
                    jobId = listJobDetailsRequest['job_id'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling listJobDetails.');
            }

            options.pathParams = { 'job_id': jobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * openApi查询历史监控数据
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listMonitorIndicatorData(listMonitorIndicatorDataRequest?: ListMonitorIndicatorDataRequest) {
            const options = {
                method: "GET",
                url: "/v1.0/{project_id}/dms/metric-data",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let from;
            
            let to;
            
            let indicatorName;
            
            let dim0;
            
            let _function;
            
            let period;
            
            let dim1;

            if (listMonitorIndicatorDataRequest !== null && listMonitorIndicatorDataRequest !== undefined) {
                if (listMonitorIndicatorDataRequest instanceof ListMonitorIndicatorDataRequest) {
                    from = listMonitorIndicatorDataRequest.from;
                    to = listMonitorIndicatorDataRequest.to;
                    indicatorName = listMonitorIndicatorDataRequest.indicatorName;
                    dim0 = listMonitorIndicatorDataRequest.dim0;
                    _function = listMonitorIndicatorDataRequest._function;
                    period = listMonitorIndicatorDataRequest.period;
                    dim1 = listMonitorIndicatorDataRequest.dim1;
                } else {
                    from = listMonitorIndicatorDataRequest['from'];
                    to = listMonitorIndicatorDataRequest['to'];
                    indicatorName = listMonitorIndicatorDataRequest['indicator_name'];
                    dim0 = listMonitorIndicatorDataRequest['dim0'];
                    _function = listMonitorIndicatorDataRequest['function'];
                    period = listMonitorIndicatorDataRequest['period'];
                    dim1 = listMonitorIndicatorDataRequest['dim1'];
                }
            }

        
            if (from === null || from === undefined) {
                throw new RequiredError('from','Required parameter from was null or undefined when calling listMonitorIndicatorData.');
            }
            if (from !== null && from !== undefined) {
                localVarQueryParameter['from'] = from;
            }
            if (to === null || to === undefined) {
                throw new RequiredError('to','Required parameter to was null or undefined when calling listMonitorIndicatorData.');
            }
            if (to !== null && to !== undefined) {
                localVarQueryParameter['to'] = to;
            }
            if (indicatorName === null || indicatorName === undefined) {
                throw new RequiredError('indicatorName','Required parameter indicatorName was null or undefined when calling listMonitorIndicatorData.');
            }
            if (indicatorName !== null && indicatorName !== undefined) {
                localVarQueryParameter['indicator_name'] = indicatorName;
            }
            if (dim0 === null || dim0 === undefined) {
                throw new RequiredError('dim0','Required parameter dim0 was null or undefined when calling listMonitorIndicatorData.');
            }
            if (dim0 !== null && dim0 !== undefined) {
                localVarQueryParameter['dim0'] = dim0;
            }
            if (_function !== null && _function !== undefined) {
                localVarQueryParameter['function'] = _function;
            }
            if (period !== null && period !== undefined) {
                localVarQueryParameter['period'] = period;
            }
            if (dim1 !== null && dim1 !== undefined) {
                localVarQueryParameter['dim1'] = dim1;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * openApi查询性能监控指标
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listMonitorIndicators() {
            const options = {
                method: "GET",
                url: "/v1.0/{project_id}/dms/metric-data/indicators",
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
         * 该接口用于查询所有GaussDB(DWS)服务支持的节点类型。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listNodeTypes() {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/node-types",
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
         * 查询单租户在GaussDB(DWS)服务下的配额信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listQuotas() {
            const options = {
                method: "GET",
                url: "/v1.0/{project_id}/quotas",
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
         * 该接口用于使用快照ID查询快照详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listSnapshotDetails(listSnapshotDetailsRequest?: ListSnapshotDetailsRequest) {
            const options = {
                method: "GET",
                url: "/v1.0/{project_id}/snapshots/{snapshot_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let snapshotId;

            if (listSnapshotDetailsRequest !== null && listSnapshotDetailsRequest !== undefined) {
                if (listSnapshotDetailsRequest instanceof ListSnapshotDetailsRequest) {
                    snapshotId = listSnapshotDetailsRequest.snapshotId;
                } else {
                    snapshotId = listSnapshotDetailsRequest['snapshot_id'];
                }
            }

        
            if (snapshotId === null || snapshotId === undefined) {
            throw new RequiredError('snapshotId','Required parameter snapshotId was null or undefined when calling listSnapshotDetails.');
            }

            options.pathParams = { 'snapshot_id': snapshotId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询快照策略。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listSnapshotPolicy(listSnapshotPolicyRequest?: ListSnapshotPolicyRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/clusters/{cluster_id}/snapshot-policies",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clusterId;

            if (listSnapshotPolicyRequest !== null && listSnapshotPolicyRequest !== undefined) {
                if (listSnapshotPolicyRequest instanceof ListSnapshotPolicyRequest) {
                    clusterId = listSnapshotPolicyRequest.clusterId;
                } else {
                    clusterId = listSnapshotPolicyRequest['cluster_id'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling listSnapshotPolicy.');
            }

            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 快照统计信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listSnapshotStatistics(listSnapshotStatisticsRequest?: ListSnapshotStatisticsRequest) {
            const options = {
                method: "GET",
                url: "/v1.0/{project_id}/clusters/{cluster_id}/snapshots/statistics",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clusterId;

            if (listSnapshotStatisticsRequest !== null && listSnapshotStatisticsRequest !== undefined) {
                if (listSnapshotStatisticsRequest instanceof ListSnapshotStatisticsRequest) {
                    clusterId = listSnapshotStatisticsRequest.clusterId;
                } else {
                    clusterId = listSnapshotStatisticsRequest['cluster_id'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling listSnapshotStatistics.');
            }

            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于查询快照列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listSnapshots() {
            const options = {
                method: "GET",
                url: "/v1.0/{project_id}/snapshots",
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
         * 查询当前可用资源数量，其中包括“可用集群和总集群（个）”、“可用节点和总节点（个）”、“总容量（GB）”。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listStatistics() {
            const options = {
                method: "GET",
                url: "/v1.0/{project_id}/statistics",
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
         * 查询项目标签列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listTags() {
            const options = {
                method: "GET",
                url: "/v1.0/{project_id}/tags",
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
         * 查询工作负载队列
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listWorkloadQueue(listWorkloadQueueRequest?: ListWorkloadQueueRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/clusters/{cluster_id}/workload/queues",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clusterId;

            if (listWorkloadQueueRequest !== null && listWorkloadQueueRequest !== undefined) {
                if (listWorkloadQueueRequest instanceof ListWorkloadQueueRequest) {
                    clusterId = listWorkloadQueueRequest.clusterId;
                } else {
                    clusterId = listWorkloadQueueRequest['cluster_id'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling listWorkloadQueue.');
            }

            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 停止容灾
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        pauseDisasterRecovery(pauseDisasterRecoveryRequest?: PauseDisasterRecoveryRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/disaster-recovery/{disaster_recovery_id}/pause",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let disasterRecoveryId;

            if (pauseDisasterRecoveryRequest !== null && pauseDisasterRecoveryRequest !== undefined) {
                if (pauseDisasterRecoveryRequest instanceof PauseDisasterRecoveryRequest) {
                    disasterRecoveryId = pauseDisasterRecoveryRequest.disasterRecoveryId;
                } else {
                    disasterRecoveryId = pauseDisasterRecoveryRequest['disaster_recovery_id'];
                }
            }

        
            if (disasterRecoveryId === null || disasterRecoveryId === undefined) {
            throw new RequiredError('disasterRecoveryId','Required parameter disasterRecoveryId was null or undefined when calling pauseDisasterRecovery.');
            }

            options.pathParams = { 'disaster_recovery_id': disasterRecoveryId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 此接口用于重置集群管理员密码。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        resetPassword(resetPasswordRequest?: ResetPasswordRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/{project_id}/clusters/{cluster_id}/reset-password",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;

            if (resetPasswordRequest !== null && resetPasswordRequest !== undefined) {
                if (resetPasswordRequest instanceof ResetPasswordRequest) {
                    clusterId = resetPasswordRequest.clusterId;
                    body = resetPasswordRequest.body
                } else {
                    clusterId = resetPasswordRequest['cluster_id'];
                    body = resetPasswordRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling resetPassword.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 此接口用于扩容集群。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        resizeCluster(resizeClusterRequest?: ResizeClusterRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/{project_id}/clusters/{cluster_id}/resize",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;

            if (resizeClusterRequest !== null && resizeClusterRequest !== undefined) {
                if (resizeClusterRequest instanceof ResizeClusterRequest) {
                    clusterId = resizeClusterRequest.clusterId;
                    body = resizeClusterRequest.body
                } else {
                    clusterId = resizeClusterRequest['cluster_id'];
                    body = resizeClusterRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling resizeCluster.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 此接口用于重启集群。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        restartCluster(restartClusterRequest?: RestartClusterRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/{project_id}/clusters/{cluster_id}/restart",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;

            if (restartClusterRequest !== null && restartClusterRequest !== undefined) {
                if (restartClusterRequest instanceof RestartClusterRequest) {
                    clusterId = restartClusterRequest.clusterId;
                    body = restartClusterRequest.body
                } else {
                    clusterId = restartClusterRequest['cluster_id'];
                    body = restartClusterRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling restartCluster.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于使用快照恢复集群。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        restoreCluster(restoreClusterRequest?: RestoreClusterRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/{project_id}/snapshots/{snapshot_id}/actions",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let snapshotId;

            if (restoreClusterRequest !== null && restoreClusterRequest !== undefined) {
                if (restoreClusterRequest instanceof RestoreClusterRequest) {
                    snapshotId = restoreClusterRequest.snapshotId;
                    body = restoreClusterRequest.body
                } else {
                    snapshotId = restoreClusterRequest['snapshot_id'];
                    body = restoreClusterRequest['body'];
                }
            }

        
            if (snapshotId === null || snapshotId === undefined) {
            throw new RequiredError('snapshotId','Required parameter snapshotId was null or undefined when calling restoreCluster.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'snapshot_id': snapshotId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 恢复容灾
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        restoreDisaster(restoreDisasterRequest?: RestoreDisasterRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/disaster-recovery/{disaster_recovery_id}/recovery",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let disasterRecoveryId;

            if (restoreDisasterRequest !== null && restoreDisasterRequest !== undefined) {
                if (restoreDisasterRequest instanceof RestoreDisasterRequest) {
                    disasterRecoveryId = restoreDisasterRequest.disasterRecoveryId;
                } else {
                    disasterRecoveryId = restoreDisasterRequest['disaster_recovery_id'];
                }
            }

        
            if (disasterRecoveryId === null || disasterRecoveryId === undefined) {
            throw new RequiredError('disasterRecoveryId','Required parameter disasterRecoveryId was null or undefined when calling restoreDisaster.');
            }

            options.pathParams = { 'disaster_recovery_id': disasterRecoveryId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询数据库对象权限
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showDatabaseAuthority(showDatabaseAuthorityRequest?: ShowDatabaseAuthorityRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/clusters/{cluster_id}/db-manager/authority",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let clusterId;
            
            let type;
            
            let name;
            
            let database;
            
            let schema;
            
            let table;

            if (showDatabaseAuthorityRequest !== null && showDatabaseAuthorityRequest !== undefined) {
                if (showDatabaseAuthorityRequest instanceof ShowDatabaseAuthorityRequest) {
                    clusterId = showDatabaseAuthorityRequest.clusterId;
                    type = showDatabaseAuthorityRequest.type;
                    name = showDatabaseAuthorityRequest.name;
                    database = showDatabaseAuthorityRequest.database;
                    schema = showDatabaseAuthorityRequest.schema;
                    table = showDatabaseAuthorityRequest.table;
                } else {
                    clusterId = showDatabaseAuthorityRequest['cluster_id'];
                    type = showDatabaseAuthorityRequest['type'];
                    name = showDatabaseAuthorityRequest['name'];
                    database = showDatabaseAuthorityRequest['database'];
                    schema = showDatabaseAuthorityRequest['schema'];
                    table = showDatabaseAuthorityRequest['table'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling showDatabaseAuthority.');
            }
            if (type === null || type === undefined) {
                throw new RequiredError('type','Required parameter type was null or undefined when calling showDatabaseAuthority.');
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }
            if (name === null || name === undefined) {
                throw new RequiredError('name','Required parameter name was null or undefined when calling showDatabaseAuthority.');
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (database === null || database === undefined) {
                throw new RequiredError('database','Required parameter database was null or undefined when calling showDatabaseAuthority.');
            }
            if (database !== null && database !== undefined) {
                localVarQueryParameter['database'] = database;
            }
            if (schema !== null && schema !== undefined) {
                localVarQueryParameter['schema'] = schema;
            }
            if (table !== null && table !== undefined) {
                localVarQueryParameter['table'] = table;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询指定用户信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showDatabaseUser(showDatabaseUserRequest?: ShowDatabaseUserRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/clusters/{cluster_id}/db-manager/users/{name}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clusterId;
            
            let name;

            if (showDatabaseUserRequest !== null && showDatabaseUserRequest !== undefined) {
                if (showDatabaseUserRequest instanceof ShowDatabaseUserRequest) {
                    clusterId = showDatabaseUserRequest.clusterId;
                    name = showDatabaseUserRequest.name;
                } else {
                    clusterId = showDatabaseUserRequest['cluster_id'];
                    name = showDatabaseUserRequest['name'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling showDatabaseUser.');
            }
            if (name === null || name === undefined) {
            throw new RequiredError('name','Required parameter name was null or undefined when calling showDatabaseUser.');
            }

            options.pathParams = { 'cluster_id': clusterId,'name': name, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询容灾详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showDisasterDetail(showDisasterDetailRequest?: ShowDisasterDetailRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/disaster-recovery/{disaster_recovery_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let disasterRecoveryId;

            if (showDisasterDetailRequest !== null && showDisasterDetailRequest !== undefined) {
                if (showDisasterDetailRequest instanceof ShowDisasterDetailRequest) {
                    disasterRecoveryId = showDisasterDetailRequest.disasterRecoveryId;
                } else {
                    disasterRecoveryId = showDisasterDetailRequest['disaster_recovery_id'];
                }
            }

        
            if (disasterRecoveryId === null || disasterRecoveryId === undefined) {
            throw new RequiredError('disasterRecoveryId','Required parameter disasterRecoveryId was null or undefined when calling showDisasterDetail.');
            }

            options.pathParams = { 'disaster_recovery_id': disasterRecoveryId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 容灾-查询容灾进度详情
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showDisasterProgress(showDisasterProgressRequest?: ShowDisasterProgressRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/disaster-recovery/{disaster_recovery_id}/show-progress",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let disasterRecoveryId;

            if (showDisasterProgressRequest !== null && showDisasterProgressRequest !== undefined) {
                if (showDisasterProgressRequest instanceof ShowDisasterProgressRequest) {
                    disasterRecoveryId = showDisasterProgressRequest.disasterRecoveryId;
                } else {
                    disasterRecoveryId = showDisasterProgressRequest['disaster_recovery_id'];
                }
            }

        
            if (disasterRecoveryId === null || disasterRecoveryId === undefined) {
            throw new RequiredError('disasterRecoveryId','Required parameter disasterRecoveryId was null or undefined when calling showDisasterProgress.');
            }

            options.pathParams = { 'disaster_recovery_id': disasterRecoveryId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于缩容集群。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        shrinkCluster(shrinkClusterRequest?: ShrinkClusterRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/{project_id}/clusters/{cluster_id}/cluster-shrink",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;

            if (shrinkClusterRequest !== null && shrinkClusterRequest !== undefined) {
                if (shrinkClusterRequest instanceof ShrinkClusterRequest) {
                    clusterId = shrinkClusterRequest.clusterId;
                    body = shrinkClusterRequest.body
                } else {
                    clusterId = shrinkClusterRequest['cluster_id'];
                    body = shrinkClusterRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling shrinkCluster.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 启动容灾
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        startDisasterRecovery(startDisasterRecoveryRequest?: StartDisasterRecoveryRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/disaster-recovery/{disaster_recovery_id}/start",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let disasterRecoveryId;

            if (startDisasterRecoveryRequest !== null && startDisasterRecoveryRequest !== undefined) {
                if (startDisasterRecoveryRequest instanceof StartDisasterRecoveryRequest) {
                    disasterRecoveryId = startDisasterRecoveryRequest.disasterRecoveryId;
                } else {
                    disasterRecoveryId = startDisasterRecoveryRequest['disaster_recovery_id'];
                }
            }

        
            if (disasterRecoveryId === null || disasterRecoveryId === undefined) {
            throw new RequiredError('disasterRecoveryId','Required parameter disasterRecoveryId was null or undefined when calling startDisasterRecovery.');
            }

            options.pathParams = { 'disaster_recovery_id': disasterRecoveryId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 容灾-异常切换
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        switchFailoverDisaster(switchFailoverDisasterRequest?: SwitchFailoverDisasterRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/disaster-recovery/{disaster_recovery_id}/failover",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let disasterRecoveryId;

            if (switchFailoverDisasterRequest !== null && switchFailoverDisasterRequest !== undefined) {
                if (switchFailoverDisasterRequest instanceof SwitchFailoverDisasterRequest) {
                    disasterRecoveryId = switchFailoverDisasterRequest.disasterRecoveryId;
                } else {
                    disasterRecoveryId = switchFailoverDisasterRequest['disaster_recovery_id'];
                }
            }

        
            if (disasterRecoveryId === null || disasterRecoveryId === undefined) {
            throw new RequiredError('disasterRecoveryId','Required parameter disasterRecoveryId was null or undefined when calling switchFailoverDisaster.');
            }

            options.pathParams = { 'disaster_recovery_id': disasterRecoveryId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 当集群状态为“非均衡”时会出现某些节点主实例增多，从而负载压力较大。这种情况下集群状态是正常的，但整体性能要低于均衡状态。可进行集群主备恢复操作将集群状态切换为“可用“状态。
         * - 集群主备恢复仅8.1.1.202及以上版本支持。
         * - 集群主备恢复将会短暂中断业务，中断时间根据用户自身业务量所决定，建议用户在业务低峰期执行此操作。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        switchOverCluster(switchOverClusterRequest?: SwitchOverClusterRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/{project_id}/clusters/{cluster_id}/switchover",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clusterId;

            if (switchOverClusterRequest !== null && switchOverClusterRequest !== undefined) {
                if (switchOverClusterRequest instanceof SwitchOverClusterRequest) {
                    clusterId = switchOverClusterRequest.clusterId;
                } else {
                    clusterId = switchOverClusterRequest['cluster_id'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling switchOverCluster.');
            }

            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 容灾-灾备切换
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        switchoverDisasterRecovery(switchoverDisasterRecoveryRequest?: SwitchoverDisasterRecoveryRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/disaster-recovery/{disaster_recovery_id}/switchover",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let disasterRecoveryId;

            if (switchoverDisasterRecoveryRequest !== null && switchoverDisasterRecoveryRequest !== undefined) {
                if (switchoverDisasterRecoveryRequest instanceof SwitchoverDisasterRecoveryRequest) {
                    disasterRecoveryId = switchoverDisasterRecoveryRequest.disasterRecoveryId;
                } else {
                    disasterRecoveryId = switchoverDisasterRecoveryRequest['disaster_recovery_id'];
                }
            }

        
            if (disasterRecoveryId === null || disasterRecoveryId === undefined) {
            throw new RequiredError('disasterRecoveryId','Required parameter disasterRecoveryId was null or undefined when calling switchoverDisasterRecovery.');
            }

            options.pathParams = { 'disaster_recovery_id': disasterRecoveryId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 同步IAM用户到数据库
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        syncIamUsers(syncIamUsersRequest?: SyncIamUsersRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/clusters/{cluster_id}/db-manager/sync-iam-user",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clusterId;

            if (syncIamUsersRequest !== null && syncIamUsersRequest !== undefined) {
                if (syncIamUsersRequest instanceof SyncIamUsersRequest) {
                    clusterId = syncIamUsersRequest.clusterId;
                } else {
                    clusterId = syncIamUsersRequest['cluster_id'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling syncIamUsers.');
            }

            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新订阅的告警
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateAlarmSub(updateAlarmSubRequest?: UpdateAlarmSubRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/alarm-subs/{alarm_sub_id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let alarmSubId;

            if (updateAlarmSubRequest !== null && updateAlarmSubRequest !== undefined) {
                if (updateAlarmSubRequest instanceof UpdateAlarmSubRequest) {
                    alarmSubId = updateAlarmSubRequest.alarmSubId;
                    body = updateAlarmSubRequest.body
                } else {
                    alarmSubId = updateAlarmSubRequest['alarm_sub_id'];
                    body = updateAlarmSubRequest['body'];
                }
            }

        
            if (alarmSubId === null || alarmSubId === undefined) {
            throw new RequiredError('alarmSubId','Required parameter alarmSubId was null or undefined when calling updateAlarmSub.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'alarm_sub_id': alarmSubId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 为指定集群修改域名。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateClusterDns(updateClusterDnsRequest?: UpdateClusterDnsRequest) {
            const options = {
                method: "PUT",
                url: "/v1.0/{project_id}/clusters/{cluster_id}/dns",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;

            if (updateClusterDnsRequest !== null && updateClusterDnsRequest !== undefined) {
                if (updateClusterDnsRequest instanceof UpdateClusterDnsRequest) {
                    clusterId = updateClusterDnsRequest.clusterId;
                    body = updateClusterDnsRequest.body
                } else {
                    clusterId = updateClusterDnsRequest['cluster_id'];
                    body = updateClusterDnsRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling updateClusterDns.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改集群使用的参数配置信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateConfiguration(updateConfigurationRequest?: UpdateConfigurationRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/clusters/{cluster_id}/configurations/{configuration_id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;
            
            let configurationId;

            if (updateConfigurationRequest !== null && updateConfigurationRequest !== undefined) {
                if (updateConfigurationRequest instanceof UpdateConfigurationRequest) {
                    clusterId = updateConfigurationRequest.clusterId;
                    configurationId = updateConfigurationRequest.configurationId;
                    body = updateConfigurationRequest.body
                } else {
                    clusterId = updateConfigurationRequest['cluster_id'];
                    configurationId = updateConfigurationRequest['configuration_id'];
                    body = updateConfigurationRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling updateConfiguration.');
            }
            if (configurationId === null || configurationId === undefined) {
            throw new RequiredError('configurationId','Required parameter configurationId was null or undefined when calling updateConfiguration.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'cluster_id': clusterId,'configuration_id': configurationId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于更新一个数据源。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateDataSource(updateDataSourceRequest?: UpdateDataSourceRequest) {
            const options = {
                method: "PUT",
                url: "/v1.0/{project_id}/clusters/{cluster_id}/ext-data-sources/{ext_data_source_id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;
            
            let extDataSourceId;

            if (updateDataSourceRequest !== null && updateDataSourceRequest !== undefined) {
                if (updateDataSourceRequest instanceof UpdateDataSourceRequest) {
                    clusterId = updateDataSourceRequest.clusterId;
                    extDataSourceId = updateDataSourceRequest.extDataSourceId;
                    body = updateDataSourceRequest.body
                } else {
                    clusterId = updateDataSourceRequest['cluster_id'];
                    extDataSourceId = updateDataSourceRequest['ext_data_source_id'];
                    body = updateDataSourceRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling updateDataSource.');
            }
            if (extDataSourceId === null || extDataSourceId === undefined) {
            throw new RequiredError('extDataSourceId','Required parameter extDataSourceId was null or undefined when calling updateDataSource.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'cluster_id': clusterId,'ext_data_source_id': extDataSourceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改数据库对象权限
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateDatabaseAuthority(updateDatabaseAuthorityRequest?: UpdateDatabaseAuthorityRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/clusters/{cluster_id}/db-manager/authority",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;

            if (updateDatabaseAuthorityRequest !== null && updateDatabaseAuthorityRequest !== undefined) {
                if (updateDatabaseAuthorityRequest instanceof UpdateDatabaseAuthorityRequest) {
                    clusterId = updateDatabaseAuthorityRequest.clusterId;
                    body = updateDatabaseAuthorityRequest.body
                } else {
                    clusterId = updateDatabaseAuthorityRequest['cluster_id'];
                    body = updateDatabaseAuthorityRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling updateDatabaseAuthority.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改指定用户信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateDatabaseUserInfo(updateDatabaseUserInfoRequest?: UpdateDatabaseUserInfoRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/clusters/{cluster_id}/db-manager/users/{name}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;
            
            let name;

            if (updateDatabaseUserInfoRequest !== null && updateDatabaseUserInfoRequest !== undefined) {
                if (updateDatabaseUserInfoRequest instanceof UpdateDatabaseUserInfoRequest) {
                    clusterId = updateDatabaseUserInfoRequest.clusterId;
                    name = updateDatabaseUserInfoRequest.name;
                    body = updateDatabaseUserInfoRequest.body
                } else {
                    clusterId = updateDatabaseUserInfoRequest['cluster_id'];
                    name = updateDatabaseUserInfoRequest['name'];
                    body = updateDatabaseUserInfoRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling updateDatabaseUserInfo.');
            }
            if (name === null || name === undefined) {
            throw new RequiredError('name','Required parameter name was null or undefined when calling updateDatabaseUserInfo.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'cluster_id': clusterId,'name': name, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新容灾配置
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateDisasterInfo(updateDisasterInfoRequest?: UpdateDisasterInfoRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/disaster-recovery/{disaster_recovery_id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let disasterRecoveryId;

            if (updateDisasterInfoRequest !== null && updateDisasterInfoRequest !== undefined) {
                if (updateDisasterInfoRequest instanceof UpdateDisasterInfoRequest) {
                    disasterRecoveryId = updateDisasterInfoRequest.disasterRecoveryId;
                    body = updateDisasterInfoRequest.body
                } else {
                    disasterRecoveryId = updateDisasterInfoRequest['disaster_recovery_id'];
                    body = updateDisasterInfoRequest['body'];
                }
            }

        
            if (disasterRecoveryId === null || disasterRecoveryId === undefined) {
            throw new RequiredError('disasterRecoveryId','Required parameter disasterRecoveryId was null or undefined when calling updateDisasterInfo.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'disaster_recovery_id': disasterRecoveryId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新订阅事件
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateEventSub(updateEventSubRequest?: UpdateEventSubRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/event-subs/{event_sub_id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let eventSubId;

            if (updateEventSubRequest !== null && updateEventSubRequest !== undefined) {
                if (updateEventSubRequest instanceof UpdateEventSubRequest) {
                    eventSubId = updateEventSubRequest.eventSubId;
                    body = updateEventSubRequest.body
                } else {
                    eventSubId = updateEventSubRequest['event_sub_id'];
                    body = updateEventSubRequest['body'];
                }
            }

        
            if (eventSubId === null || eventSubId === undefined) {
            throw new RequiredError('eventSubId','Required parameter eventSubId was null or undefined when calling updateEventSub.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'event_sub_id': eventSubId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 您可以根据业务需求，设置可维护时间段。建议将可维护时间段设置在业务低峰期，避免业务在维护过程中异常中断。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateMaintenanceWindow(updateMaintenanceWindowRequest?: UpdateMaintenanceWindowRequest) {
            const options = {
                method: "PUT",
                url: "/v1.0/{project_id}/clusters/{cluster_id}/maintenance-window",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;

            if (updateMaintenanceWindowRequest !== null && updateMaintenanceWindowRequest !== undefined) {
                if (updateMaintenanceWindowRequest instanceof UpdateMaintenanceWindowRequest) {
                    clusterId = updateMaintenanceWindowRequest.clusterId;
                    body = updateMaintenanceWindowRequest.body
                } else {
                    clusterId = updateMaintenanceWindowRequest['cluster_id'];
                    body = updateMaintenanceWindowRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling updateMaintenanceWindow.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
    }
};

function newClient(client: HcClient): DwsClient {
    return new DwsClient(client);
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