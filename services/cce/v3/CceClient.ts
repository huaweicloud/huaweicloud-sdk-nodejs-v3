import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";
import FormData from 'form-data';

import { APIVersionDetail } from './model/APIVersionDetail';
import { APIVersionLink } from './model/APIVersionLink';
import { AddNode } from './model/AddNode';
import { AddNodeList } from './model/AddNodeList';
import { AddNodeRequest } from './model/AddNodeRequest';
import { AddNodeResponse } from './model/AddNodeResponse';
import { AddonCheckStatus } from './model/AddonCheckStatus';
import { AddonInstance } from './model/AddonInstance';
import { AddonInstanceRollbackRequest } from './model/AddonInstanceRollbackRequest';
import { AddonInstanceStatus } from './model/AddonInstanceStatus';
import { AddonMetadata } from './model/AddonMetadata';
import { AddonRisks } from './model/AddonRisks';
import { AddonTemplate } from './model/AddonTemplate';
import { AuthenticatingProxy } from './model/AuthenticatingProxy';
import { Authentication } from './model/Authentication';
import { AwakeClusterRequest } from './model/AwakeClusterRequest';
import { AwakeClusterResponse } from './model/AwakeClusterResponse';
import { BatchCreateClusterTagsRequest } from './model/BatchCreateClusterTagsRequest';
import { BatchCreateClusterTagsRequestBody } from './model/BatchCreateClusterTagsRequestBody';
import { BatchCreateClusterTagsResponse } from './model/BatchCreateClusterTagsResponse';
import { BatchDeleteClusterTagsRequest } from './model/BatchDeleteClusterTagsRequest';
import { BatchDeleteClusterTagsRequestBody } from './model/BatchDeleteClusterTagsRequestBody';
import { BatchDeleteClusterTagsResponse } from './model/BatchDeleteClusterTagsResponse';
import { CapacityReservationSpecification } from './model/CapacityReservationSpecification';
import { CertDuration } from './model/CertDuration';
import { ChartResp } from './model/ChartResp';
import { ChartValueValues } from './model/ChartValueValues';
import { Cluster } from './model/Cluster';
import { ClusterCert } from './model/ClusterCert';
import { ClusterCheckStatus } from './model/ClusterCheckStatus';
import { ClusterConfigurationsSpec } from './model/ClusterConfigurationsSpec';
import { ClusterConfigurationsSpecPackages } from './model/ClusterConfigurationsSpecPackages';
import { ClusterEndpoints } from './model/ClusterEndpoints';
import { ClusterExtendParam } from './model/ClusterExtendParam';
import { ClusterInformation } from './model/ClusterInformation';
import { ClusterInformationSpec } from './model/ClusterInformationSpec';
import { ClusterInformationSpecHostNetwork } from './model/ClusterInformationSpecHostNetwork';
import { ClusterLogConfig } from './model/ClusterLogConfig';
import { ClusterLogConfigLogConfigs } from './model/ClusterLogConfigLogConfigs';
import { ClusterMetadata } from './model/ClusterMetadata';
import { ClusterMetadataForUpdate } from './model/ClusterMetadataForUpdate';
import { ClusterNodeInformation } from './model/ClusterNodeInformation';
import { ClusterNodeInformationMetadata } from './model/ClusterNodeInformationMetadata';
import { ClusterSpec } from './model/ClusterSpec';
import { ClusterStatus } from './model/ClusterStatus';
import { ClusterUpgradeAction } from './model/ClusterUpgradeAction';
import { ClusterUpgradeResponseAction } from './model/ClusterUpgradeResponseAction';
import { Clusters } from './model/Clusters';
import { ConfigurationItem } from './model/ConfigurationItem';
import { ConfigurationMetadata } from './model/ConfigurationMetadata';
import { ConfigurationRisks } from './model/ConfigurationRisks';
import { ContainerCIDR } from './model/ContainerCIDR';
import { ContainerNetwork } from './model/ContainerNetwork';
import { ContainerNetworkUpdate } from './model/ContainerNetworkUpdate';
import { Context } from './model/Context';
import { Contexts } from './model/Contexts';
import { ContinueUpgradeClusterTaskRequest } from './model/ContinueUpgradeClusterTaskRequest';
import { ContinueUpgradeClusterTaskResponse } from './model/ContinueUpgradeClusterTaskResponse';
import { CreateAddonInstanceRequest } from './model/CreateAddonInstanceRequest';
import { CreateAddonInstanceResponse } from './model/CreateAddonInstanceResponse';
import { CreateCloudPersistentVolumeClaimsRequest } from './model/CreateCloudPersistentVolumeClaimsRequest';
import { CreateCloudPersistentVolumeClaimsResponse } from './model/CreateCloudPersistentVolumeClaimsResponse';
import { CreateClusterMasterSnapshotRequest } from './model/CreateClusterMasterSnapshotRequest';
import { CreateClusterMasterSnapshotResponse } from './model/CreateClusterMasterSnapshotResponse';
import { CreateClusterRequest } from './model/CreateClusterRequest';
import { CreateClusterResponse } from './model/CreateClusterResponse';
import { CreateKubernetesClusterCertRequest } from './model/CreateKubernetesClusterCertRequest';
import { CreateKubernetesClusterCertResponse } from './model/CreateKubernetesClusterCertResponse';
import { CreateNodePoolRequest } from './model/CreateNodePoolRequest';
import { CreateNodePoolResponse } from './model/CreateNodePoolResponse';
import { CreateNodePoolStatus } from './model/CreateNodePoolStatus';
import { CreateNodeRequest } from './model/CreateNodeRequest';
import { CreateNodeResponse } from './model/CreateNodeResponse';
import { CreatePartitionRequest } from './model/CreatePartitionRequest';
import { CreatePartitionResponse } from './model/CreatePartitionResponse';
import { CreatePostCheckRequest } from './model/CreatePostCheckRequest';
import { CreatePostCheckResponse } from './model/CreatePostCheckResponse';
import { CreatePreCheckRequest } from './model/CreatePreCheckRequest';
import { CreatePreCheckResponse } from './model/CreatePreCheckResponse';
import { CreateReleaseReqBody } from './model/CreateReleaseReqBody';
import { CreateReleaseReqBodyValues } from './model/CreateReleaseReqBodyValues';
import { CreateReleaseRequest } from './model/CreateReleaseRequest';
import { CreateReleaseResponse } from './model/CreateReleaseResponse';
import { CreateUpgradeWorkFlowRequest } from './model/CreateUpgradeWorkFlowRequest';
import { CreateUpgradeWorkFlowRequestBody } from './model/CreateUpgradeWorkFlowRequestBody';
import { CreateUpgradeWorkFlowResponse } from './model/CreateUpgradeWorkFlowResponse';
import { DeleteAddonInstanceRequest } from './model/DeleteAddonInstanceRequest';
import { DeleteAddonInstanceResponse } from './model/DeleteAddonInstanceResponse';
import { DeleteChartRequest } from './model/DeleteChartRequest';
import { DeleteChartResponse } from './model/DeleteChartResponse';
import { DeleteCloudPersistentVolumeClaimsRequest } from './model/DeleteCloudPersistentVolumeClaimsRequest';
import { DeleteCloudPersistentVolumeClaimsResponse } from './model/DeleteCloudPersistentVolumeClaimsResponse';
import { DeleteClusterRequest } from './model/DeleteClusterRequest';
import { DeleteClusterResponse } from './model/DeleteClusterResponse';
import { DeleteNodePoolRequest } from './model/DeleteNodePoolRequest';
import { DeleteNodePoolResponse } from './model/DeleteNodePoolResponse';
import { DeleteNodePoolStatus } from './model/DeleteNodePoolStatus';
import { DeleteNodeRequest } from './model/DeleteNodeRequest';
import { DeleteNodeResponse } from './model/DeleteNodeResponse';
import { DeleteReleaseRequest } from './model/DeleteReleaseRequest';
import { DeleteReleaseResponse } from './model/DeleteReleaseResponse';
import { DeleteStatus } from './model/DeleteStatus';
import { DeprecatedAPIRisks } from './model/DeprecatedAPIRisks';
import { DownloadChartRequest } from './model/DownloadChartRequest';
import { DownloadChartResponse } from './model/DownloadChartResponse';
import { EipSpec } from './model/EipSpec';
import { EipSpecBandwidth } from './model/EipSpecBandwidth';
import { EniNetwork } from './model/EniNetwork';
import { EniNetworkUpdate } from './model/EniNetworkUpdate';
import { ExtensionScaleGroup } from './model/ExtensionScaleGroup';
import { ExtensionScaleGroupMetadata } from './model/ExtensionScaleGroupMetadata';
import { ExtensionScaleGroupSpec } from './model/ExtensionScaleGroupSpec';
import { HibernateClusterRequest } from './model/HibernateClusterRequest';
import { HibernateClusterResponse } from './model/HibernateClusterResponse';
import { HostNetwork } from './model/HostNetwork';
import { HostnameConfig } from './model/HostnameConfig';
import { InPlaceRollingUpdate } from './model/InPlaceRollingUpdate';
import { InstanceRequest } from './model/InstanceRequest';
import { InstanceRequestSpec } from './model/InstanceRequestSpec';
import { InstanceSpec } from './model/InstanceSpec';
import { Job } from './model/Job';
import { JobMetadata } from './model/JobMetadata';
import { JobSpec } from './model/JobSpec';
import { JobStatus } from './model/JobStatus';
import { LVMConfig } from './model/LVMConfig';
import { LineStatus } from './model/LineStatus';
import { ListAddonInstancesRequest } from './model/ListAddonInstancesRequest';
import { ListAddonInstancesResponse } from './model/ListAddonInstancesResponse';
import { ListAddonTemplatesRequest } from './model/ListAddonTemplatesRequest';
import { ListAddonTemplatesResponse } from './model/ListAddonTemplatesResponse';
import { ListChartsRequest } from './model/ListChartsRequest';
import { ListChartsResponse } from './model/ListChartsResponse';
import { ListClusterMasterSnapshotTasksRequest } from './model/ListClusterMasterSnapshotTasksRequest';
import { ListClusterMasterSnapshotTasksResponse } from './model/ListClusterMasterSnapshotTasksResponse';
import { ListClusterUpgradeFeatureGatesRequest } from './model/ListClusterUpgradeFeatureGatesRequest';
import { ListClusterUpgradeFeatureGatesResponse } from './model/ListClusterUpgradeFeatureGatesResponse';
import { ListClusterUpgradePathsRequest } from './model/ListClusterUpgradePathsRequest';
import { ListClusterUpgradePathsResponse } from './model/ListClusterUpgradePathsResponse';
import { ListClustersRequest } from './model/ListClustersRequest';
import { ListClustersResponse } from './model/ListClustersResponse';
import { ListNodePoolsRequest } from './model/ListNodePoolsRequest';
import { ListNodePoolsResponse } from './model/ListNodePoolsResponse';
import { ListNodesRequest } from './model/ListNodesRequest';
import { ListNodesResponse } from './model/ListNodesResponse';
import { ListPartitionsRequest } from './model/ListPartitionsRequest';
import { ListPartitionsResponse } from './model/ListPartitionsResponse';
import { ListPreCheckTasksRequest } from './model/ListPreCheckTasksRequest';
import { ListPreCheckTasksResponse } from './model/ListPreCheckTasksResponse';
import { ListReleasesRequest } from './model/ListReleasesRequest';
import { ListReleasesResponse } from './model/ListReleasesResponse';
import { ListUpgradeClusterTasksRequest } from './model/ListUpgradeClusterTasksRequest';
import { ListUpgradeClusterTasksResponse } from './model/ListUpgradeClusterTasksResponse';
import { ListUpgradeWorkFlowsRequest } from './model/ListUpgradeWorkFlowsRequest';
import { ListUpgradeWorkFlowsResponse } from './model/ListUpgradeWorkFlowsResponse';
import { Login } from './model/Login';
import { MasterEIPRequest } from './model/MasterEIPRequest';
import { MasterEIPRequestSpec } from './model/MasterEIPRequestSpec';
import { MasterEIPRequestSpecSpec } from './model/MasterEIPRequestSpecSpec';
import { MasterEIPResponseSpec } from './model/MasterEIPResponseSpec';
import { MasterEIPResponseSpecSpec } from './model/MasterEIPResponseSpecSpec';
import { MasterEIPResponseStatus } from './model/MasterEIPResponseStatus';
import { MasterSpec } from './model/MasterSpec';
import { Metadata } from './model/Metadata';
import { MigrateNodeExtendParam } from './model/MigrateNodeExtendParam';
import { MigrateNodeRequest } from './model/MigrateNodeRequest';
import { MigrateNodeResponse } from './model/MigrateNodeResponse';
import { MigrateNodesSpec } from './model/MigrateNodesSpec';
import { MigrateNodesTask } from './model/MigrateNodesTask';
import { NetworkSubnet } from './model/NetworkSubnet';
import { NicSpec } from './model/NicSpec';
import { Node } from './model/Node';
import { NodeBandwidth } from './model/NodeBandwidth';
import { NodeCheckStatus } from './model/NodeCheckStatus';
import { NodeCreateRequest } from './model/NodeCreateRequest';
import { NodeEIPSpec } from './model/NodeEIPSpec';
import { NodeExtendParam } from './model/NodeExtendParam';
import { NodeInfo } from './model/NodeInfo';
import { NodeItem } from './model/NodeItem';
import { NodeLifecycleConfig } from './model/NodeLifecycleConfig';
import { NodeManagement } from './model/NodeManagement';
import { NodeMetadata } from './model/NodeMetadata';
import { NodeNicSpec } from './model/NodeNicSpec';
import { NodeOwnerReference } from './model/NodeOwnerReference';
import { NodePool } from './model/NodePool';
import { NodePoolCondition } from './model/NodePoolCondition';
import { NodePoolMetadata } from './model/NodePoolMetadata';
import { NodePoolMetadataUpdate } from './model/NodePoolMetadataUpdate';
import { NodePoolNodeAutoscaling } from './model/NodePoolNodeAutoscaling';
import { NodePoolResp } from './model/NodePoolResp';
import { NodePoolSpec } from './model/NodePoolSpec';
import { NodePoolSpecUpdate } from './model/NodePoolSpecUpdate';
import { NodePoolStatus } from './model/NodePoolStatus';
import { NodePoolUpdate } from './model/NodePoolUpdate';
import { NodePriority } from './model/NodePriority';
import { NodePublicIP } from './model/NodePublicIP';
import { NodeRisks } from './model/NodeRisks';
import { NodeSelector } from './model/NodeSelector';
import { NodeSpec } from './model/NodeSpec';
import { NodeSpecUpdate } from './model/NodeSpecUpdate';
import { NodeStageStatus } from './model/NodeStageStatus';
import { NodeStatus } from './model/NodeStatus';
import { OpenAPISpec } from './model/OpenAPISpec';
import { OpenAPISpecSpec } from './model/OpenAPISpecSpec';
import { PackageConfiguration } from './model/PackageConfiguration';
import { PackageOptions } from './model/PackageOptions';
import { Partition } from './model/Partition';
import { PartitionMetadata } from './model/PartitionMetadata';
import { PartitionReqBody } from './model/PartitionReqBody';
import { PartitionReqBodyMetadata } from './model/PartitionReqBodyMetadata';
import { PartitionSpec } from './model/PartitionSpec';
import { PartitionSpecContainerNetwork } from './model/PartitionSpecContainerNetwork';
import { PartitionSpecHostNetwork } from './model/PartitionSpecHostNetwork';
import { PauseUpgradeClusterTaskRequest } from './model/PauseUpgradeClusterTaskRequest';
import { PauseUpgradeClusterTaskResponse } from './model/PauseUpgradeClusterTaskResponse';
import { PersistentVolumeClaim } from './model/PersistentVolumeClaim';
import { PersistentVolumeClaimMetadata } from './model/PersistentVolumeClaimMetadata';
import { PersistentVolumeClaimSpec } from './model/PersistentVolumeClaimSpec';
import { PersistentVolumeClaimStatus } from './model/PersistentVolumeClaimStatus';
import { Point } from './model/Point';
import { PointStatus } from './model/PointStatus';
import { PostcheckCluserResponseMetadata } from './model/PostcheckCluserResponseMetadata';
import { PostcheckClusterRequestBody } from './model/PostcheckClusterRequestBody';
import { PostcheckClusterResponseBodyStatus } from './model/PostcheckClusterResponseBodyStatus';
import { PostcheckSpec } from './model/PostcheckSpec';
import { PreCheckItemStatus } from './model/PreCheckItemStatus';
import { PrecheckCluserResponseMetadata } from './model/PrecheckCluserResponseMetadata';
import { PrecheckClusterRequestBody } from './model/PrecheckClusterRequestBody';
import { PrecheckClusterTask } from './model/PrecheckClusterTask';
import { PrecheckSpec } from './model/PrecheckSpec';
import { PrecheckStatus } from './model/PrecheckStatus';
import { PrecheckTaskMetadata } from './model/PrecheckTaskMetadata';
import { QuotaResource } from './model/QuotaResource';
import { QuotaRespQuotas } from './model/QuotaRespQuotas';
import { QuotaRespQuotasResources } from './model/QuotaRespQuotasResources';
import { ReinstallExtendParam } from './model/ReinstallExtendParam';
import { ReinstallK8sOptionsConfig } from './model/ReinstallK8sOptionsConfig';
import { ReinstallNodeSpec } from './model/ReinstallNodeSpec';
import { ReinstallRuntimeConfig } from './model/ReinstallRuntimeConfig';
import { ReinstallServerConfig } from './model/ReinstallServerConfig';
import { ReinstallVolumeConfig } from './model/ReinstallVolumeConfig';
import { ReinstallVolumeSpec } from './model/ReinstallVolumeSpec';
import { ReleaseReqBodyParams } from './model/ReleaseReqBodyParams';
import { ReleaseResp } from './model/ReleaseResp';
import { RemoveNodeRequest } from './model/RemoveNodeRequest';
import { RemoveNodeResponse } from './model/RemoveNodeResponse';
import { RemoveNodesSpec } from './model/RemoveNodesSpec';
import { RemoveNodesTask } from './model/RemoveNodesTask';
import { ResetNode } from './model/ResetNode';
import { ResetNodeList } from './model/ResetNodeList';
import { ResetNodeRequest } from './model/ResetNodeRequest';
import { ResetNodeResponse } from './model/ResetNodeResponse';
import { ResizeClusterRequest } from './model/ResizeClusterRequest';
import { ResizeClusterRequestBody } from './model/ResizeClusterRequestBody';
import { ResizeClusterRequestBodyExtendParam } from './model/ResizeClusterRequestBodyExtendParam';
import { ResizeClusterResponse } from './model/ResizeClusterResponse';
import { ResourceDeleteTag } from './model/ResourceDeleteTag';
import { ResourceRequirements } from './model/ResourceRequirements';
import { ResourceSelector } from './model/ResourceSelector';
import { ResourceTag } from './model/ResourceTag';
import { RetryUpgradeClusterTaskRequest } from './model/RetryUpgradeClusterTaskRequest';
import { RetryUpgradeClusterTaskResponse } from './model/RetryUpgradeClusterTaskResponse';
import { RiskSource } from './model/RiskSource';
import { RollbackAddonInstanceRequest } from './model/RollbackAddonInstanceRequest';
import { RollbackAddonInstanceResponse } from './model/RollbackAddonInstanceResponse';
import { Runtime } from './model/Runtime';
import { RuntimeConfig } from './model/RuntimeConfig';
import { ScaleGroupAutoscaling } from './model/ScaleGroupAutoscaling';
import { ScaleNodePoolOptions } from './model/ScaleNodePoolOptions';
import { ScaleNodePoolRequest } from './model/ScaleNodePoolRequest';
import { ScaleNodePoolRequestBody } from './model/ScaleNodePoolRequestBody';
import { ScaleNodePoolResponse } from './model/ScaleNodePoolResponse';
import { ScaleNodePoolSpec } from './model/ScaleNodePoolSpec';
import { ScaleUpBillingConfigOverride } from './model/ScaleUpBillingConfigOverride';
import { ScaleUpExtendParam } from './model/ScaleUpExtendParam';
import { SecurityID } from './model/SecurityID';
import { ServiceNetwork } from './model/ServiceNetwork';
import { ShowAddonInstanceRequest } from './model/ShowAddonInstanceRequest';
import { ShowAddonInstanceResponse } from './model/ShowAddonInstanceResponse';
import { ShowChartRequest } from './model/ShowChartRequest';
import { ShowChartResponse } from './model/ShowChartResponse';
import { ShowChartValuesRequest } from './model/ShowChartValuesRequest';
import { ShowChartValuesResponse } from './model/ShowChartValuesResponse';
import { ShowClusterConfigRequest } from './model/ShowClusterConfigRequest';
import { ShowClusterConfigResponse } from './model/ShowClusterConfigResponse';
import { ShowClusterConfigurationDetailsRequest } from './model/ShowClusterConfigurationDetailsRequest';
import { ShowClusterConfigurationDetailsResponse } from './model/ShowClusterConfigurationDetailsResponse';
import { ShowClusterEndpointsRequest } from './model/ShowClusterEndpointsRequest';
import { ShowClusterEndpointsResponse } from './model/ShowClusterEndpointsResponse';
import { ShowClusterRequest } from './model/ShowClusterRequest';
import { ShowClusterResponse } from './model/ShowClusterResponse';
import { ShowClusterUpgradeInfoRequest } from './model/ShowClusterUpgradeInfoRequest';
import { ShowClusterUpgradeInfoResponse } from './model/ShowClusterUpgradeInfoResponse';
import { ShowJobRequest } from './model/ShowJobRequest';
import { ShowJobResponse } from './model/ShowJobResponse';
import { ShowNodePoolConfigurationDetailsRequest } from './model/ShowNodePoolConfigurationDetailsRequest';
import { ShowNodePoolConfigurationDetailsResponse } from './model/ShowNodePoolConfigurationDetailsResponse';
import { ShowNodePoolConfigurationsRequest } from './model/ShowNodePoolConfigurationsRequest';
import { ShowNodePoolConfigurationsResponse } from './model/ShowNodePoolConfigurationsResponse';
import { ShowNodePoolRequest } from './model/ShowNodePoolRequest';
import { ShowNodePoolResponse } from './model/ShowNodePoolResponse';
import { ShowNodeRequest } from './model/ShowNodeRequest';
import { ShowNodeResponse } from './model/ShowNodeResponse';
import { ShowPartitionRequest } from './model/ShowPartitionRequest';
import { ShowPartitionResponse } from './model/ShowPartitionResponse';
import { ShowPreCheckRequest } from './model/ShowPreCheckRequest';
import { ShowPreCheckResponse } from './model/ShowPreCheckResponse';
import { ShowQuotasRequest } from './model/ShowQuotasRequest';
import { ShowQuotasResponse } from './model/ShowQuotasResponse';
import { ShowReleaseHistoryRequest } from './model/ShowReleaseHistoryRequest';
import { ShowReleaseHistoryResponse } from './model/ShowReleaseHistoryResponse';
import { ShowReleaseRequest } from './model/ShowReleaseRequest';
import { ShowReleaseResponse } from './model/ShowReleaseResponse';
import { ShowUpgradeClusterTaskRequest } from './model/ShowUpgradeClusterTaskRequest';
import { ShowUpgradeClusterTaskResponse } from './model/ShowUpgradeClusterTaskResponse';
import { ShowUpgradeWorkFlowRequest } from './model/ShowUpgradeWorkFlowRequest';
import { ShowUpgradeWorkFlowResponse } from './model/ShowUpgradeWorkFlowResponse';
import { ShowUserChartsQuotasRequest } from './model/ShowUserChartsQuotasRequest';
import { ShowUserChartsQuotasResponse } from './model/ShowUserChartsQuotasResponse';
import { ShowVersionRequest } from './model/ShowVersionRequest';
import { ShowVersionResponse } from './model/ShowVersionResponse';
import { SkippedCheckItemList } from './model/SkippedCheckItemList';
import { SnapshotCluserResponseMetadata } from './model/SnapshotCluserResponseMetadata';
import { SnapshotSpec } from './model/SnapshotSpec';
import { SnapshotSpecItems } from './model/SnapshotSpecItems';
import { SnapshotStatus } from './model/SnapshotStatus';
import { SnapshotTask } from './model/SnapshotTask';
import { SnapshotTaskMetadata } from './model/SnapshotTaskMetadata';
import { SnapshotTaskStatus } from './model/SnapshotTaskStatus';
import { Storage } from './model/Storage';
import { StorageGroups } from './model/StorageGroups';
import { StorageSelectors } from './model/StorageSelectors';
import { StorageSelectorsMatchLabels } from './model/StorageSelectorsMatchLabels';
import { SupportVersions } from './model/SupportVersions';
import { Taint } from './model/Taint';
import { TaskStatus } from './model/TaskStatus';
import { TaskType } from './model/TaskType';
import { Templatespec } from './model/Templatespec';
import { UpdateAddonInstanceRequest } from './model/UpdateAddonInstanceRequest';
import { UpdateAddonInstanceResponse } from './model/UpdateAddonInstanceResponse';
import { UpdateChartRequest } from './model/UpdateChartRequest';
import { UpdateChartRequestBody } from './model/UpdateChartRequestBody';
import { UpdateChartResponse } from './model/UpdateChartResponse';
import { UpdateClusterConfigurationsBody } from './model/UpdateClusterConfigurationsBody';
import { UpdateClusterEipRequest } from './model/UpdateClusterEipRequest';
import { UpdateClusterEipResponse } from './model/UpdateClusterEipResponse';
import { UpdateClusterLogConfigRequest } from './model/UpdateClusterLogConfigRequest';
import { UpdateClusterLogConfigResponse } from './model/UpdateClusterLogConfigResponse';
import { UpdateClusterRequest } from './model/UpdateClusterRequest';
import { UpdateClusterResponse } from './model/UpdateClusterResponse';
import { UpdateNodePoolConfigurationRequest } from './model/UpdateNodePoolConfigurationRequest';
import { UpdateNodePoolConfigurationResponse } from './model/UpdateNodePoolConfigurationResponse';
import { UpdateNodePoolRequest } from './model/UpdateNodePoolRequest';
import { UpdateNodePoolResponse } from './model/UpdateNodePoolResponse';
import { UpdateNodePoolStatus } from './model/UpdateNodePoolStatus';
import { UpdateNodeRequest } from './model/UpdateNodeRequest';
import { UpdateNodeResponse } from './model/UpdateNodeResponse';
import { UpdatePartitionRequest } from './model/UpdatePartitionRequest';
import { UpdatePartitionResponse } from './model/UpdatePartitionResponse';
import { UpdateReleaseReqBody } from './model/UpdateReleaseReqBody';
import { UpdateReleaseRequest } from './model/UpdateReleaseRequest';
import { UpdateReleaseResponse } from './model/UpdateReleaseResponse';
import { UpgradeAddonConfig } from './model/UpgradeAddonConfig';
import { UpgradeCluserResponseMetadata } from './model/UpgradeCluserResponseMetadata';
import { UpgradeClusterRequest } from './model/UpgradeClusterRequest';
import { UpgradeClusterRequestBody } from './model/UpgradeClusterRequestBody';
import { UpgradeClusterRequestMetadata } from './model/UpgradeClusterRequestMetadata';
import { UpgradeClusterResponse } from './model/UpgradeClusterResponse';
import { UpgradeFeatureGates } from './model/UpgradeFeatureGates';
import { UpgradeInfoSpec } from './model/UpgradeInfoSpec';
import { UpgradeInfoStatus } from './model/UpgradeInfoStatus';
import { UpgradePath } from './model/UpgradePath';
import { UpgradeResponseSpec } from './model/UpgradeResponseSpec';
import { UpgradeSpec } from './model/UpgradeSpec';
import { UpgradeStrategy } from './model/UpgradeStrategy';
import { UpgradeTaskMetadata } from './model/UpgradeTaskMetadata';
import { UpgradeTaskResponseBody } from './model/UpgradeTaskResponseBody';
import { UpgradeTaskSpec } from './model/UpgradeTaskSpec';
import { UpgradeTaskStatus } from './model/UpgradeTaskStatus';
import { UpgradeVersionInfo } from './model/UpgradeVersionInfo';
import { UpgradeWorkFlow } from './model/UpgradeWorkFlow';
import { UpgradeWorkFlowUpdateRequest } from './model/UpgradeWorkFlowUpdateRequest';
import { UpgradeWorkFlowUpdateRequestBody } from './model/UpgradeWorkFlowUpdateRequestBody';
import { UpgradeWorkFlowUpdateRequestBodyStatus } from './model/UpgradeWorkFlowUpdateRequestBodyStatus';
import { UpgradeWorkFlowUpdateResponse } from './model/UpgradeWorkFlowUpdateResponse';
import { UpgradeWorkflowTaskStatus } from './model/UpgradeWorkflowTaskStatus';
import { UploadChartRequest } from './model/UploadChartRequest';
import { UploadChartRequestBody } from './model/UploadChartRequestBody';
import { UploadChartResponse } from './model/UploadChartResponse';
import { User } from './model/User';
import { UserPassword } from './model/UserPassword';
import { UserTag } from './model/UserTag';
import { Users } from './model/Users';
import { Versions } from './model/Versions';
import { VirtualSpace } from './model/VirtualSpace';
import { Volume } from './model/Volume';
import { VolumeMetadata } from './model/VolumeMetadata';
import { WorkFlowPhase } from './model/WorkFlowPhase';
import { WorkFlowSpec } from './model/WorkFlowSpec';
import { WorkFlowStatus } from './model/WorkFlowStatus';

export class CceClient {
    public static newBuilder(): ClientBuilder<CceClient> {
            return new ClientBuilder<CceClient>(newClient);
    }

    private hcClient: HcClient;
    public constructor(client: HcClient) {
        this.hcClient = client;
    }

    public getPath() {
        return __dirname;
    }


    /**
     * 该API用于在指定集群下纳管节点。
     * &gt;集群管理的URL格式为：https://Endpoint/uri。其中uri为资源路径，也即API访问的路径。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 纳管节点
     * @param {string} clusterId 集群ID，获取方式请参见[如何获取接口URI中参数](cce_02_0271.xml)。
     * @param {string} contentType 消息体的类型（格式）
     * @param {AddNodeList} addNodeList 纳管节点的请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public addNode(addNodeRequest?: AddNodeRequest): Promise<AddNodeResponse> {
        const options = ParamCreater().addNode(addNodeRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 集群唤醒用于唤醒已休眠的集群，唤醒后，将继续收取控制节点资源费用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 集群唤醒
     * @param {string} clusterId 集群ID，获取方式请参见[如何获取接口URI中参数](cce_02_0271.xml)。
     * @param {string} contentType 消息体的类型（格式）
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public awakeCluster(awakeClusterRequest?: AwakeClusterRequest): Promise<AwakeClusterResponse> {
        const options = ParamCreater().awakeCluster(awakeClusterRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该API用于批量添加指定集群的资源标签。
     * &gt; - 每个集群支持最多20个资源标签。
     * &gt; - 此接口为幂等接口：创建时，如果创建的标签已经存在（key/value均相同视为重复），默认处理成功；key相同，value不同时会覆盖原有标签。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量添加指定集群的资源标签
     * @param {string} clusterId 集群ID，获取方式请参见[如何获取接口URI中参数](cce_02_0271.xml)。
     * @param {string} contentType 消息体的类型（格式）
     * @param {BatchCreateClusterTagsRequestBody} batchCreateClusterTagsRequestBody 批量添加指定集群资源标签的请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchCreateClusterTags(batchCreateClusterTagsRequest?: BatchCreateClusterTagsRequest): Promise<BatchCreateClusterTagsResponse> {
        const options = ParamCreater().batchCreateClusterTags(batchCreateClusterTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该API用于批量删除指定集群的资源标签。
     * &gt; - 此接口为幂等接口：删除时，如果删除的标签key不存在，默认处理成功。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量删除指定集群的资源标签
     * @param {string} clusterId 集群ID，获取方式请参见[如何获取接口URI中参数](cce_02_0271.xml)。
     * @param {string} contentType 消息体的类型（格式）
     * @param {BatchDeleteClusterTagsRequestBody} batchDeleteClusterTagsRequestBody 批量删除指定集群资源标签的请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchDeleteClusterTags(batchDeleteClusterTagsRequest?: BatchDeleteClusterTagsRequest): Promise<BatchDeleteClusterTagsResponse> {
        const options = ParamCreater().batchDeleteClusterTags(batchDeleteClusterTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 继续执行被暂停的集群升级任务。
     * &gt; - 集群升级涉及多维度的组件升级操作，强烈建议统一通过CCE控制台执行交互式升级，降低集群升级过程的业务意外受损风险；
     * &gt; - 当前集群升级相关接口受限开放。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 继续执行集群升级任务
     * @param {string} clusterId 集群ID，获取方式请参见[如何获取接口URI中参数](cce_02_0271.xml)。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public continueUpgradeClusterTask(continueUpgradeClusterTaskRequest?: ContinueUpgradeClusterTaskRequest): Promise<ContinueUpgradeClusterTaskResponse> {
        const options = ParamCreater().continueUpgradeClusterTask(continueUpgradeClusterTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据提供的插件模板，安装插件实例。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建AddonInstance
     * @param {string} contentType 消息体的类型（格式）
     * @param {InstanceRequest} createAddonInstanceRequestBody 请求body体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createAddonInstance(createAddonInstanceRequest?: CreateAddonInstanceRequest): Promise<CreateAddonInstanceResponse> {
        const options = ParamCreater().createAddonInstance(createAddonInstanceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该API用于在指定的Namespace下通过云存储服务中的云存储（EVS、SFS、OBS）去创建PVC（PersistentVolumeClaim）。该API待废弃，请使用Kubernetes PVC相关接口。
     * 
     * 
     * &gt;存储管理的URL格式为：https://{clusterid}.Endpoint/uri。其中{clusterid}为集群ID，uri为资源路径，也即API访问的路径。如果使用https://Endpoint/uri，则必须指定请求header中的X-Cluster-ID参数。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建PVC（待废弃）
     * @param {string} namespace 指定PersistentVolumeClaim所在的命名空间。  使用namespace有如下约束：  - 用户自定义的namespace，使用前必须先在集群中创建namespace  - 系统自带的namespace：default  - 不能使用kube-system与kube-public 
     * @param {string} contentType 消息体的类型（格式）
     * @param {PersistentVolumeClaim} createCloudPersistentVolumeClaimsRequestBody 请求body参数说明；非单个参数名称
     * @param {string} [xClusterID] 集群ID，使用**https://Endpoint/uri**这种URL格式时必须指定此参数。获取方式请参见[如何获取接口URI中参数](cce_02_0271.xml)。 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createCloudPersistentVolumeClaims(createCloudPersistentVolumeClaimsRequest?: CreateCloudPersistentVolumeClaimsRequest): Promise<CreateCloudPersistentVolumeClaimsResponse> {
        const options = ParamCreater().createCloudPersistentVolumeClaims(createCloudPersistentVolumeClaimsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该API用于创建一个空集群（即只有控制节点Master，没有工作节点Node）。请在调用本接口完成集群创建之后，通过[创建节点](cce_02_0242.xml)添加节点。
     * 
     * 
     * &gt;   - 集群管理的URL格式为：https://Endpoint/uri。其中uri为资源路径，也即API访问的路径。
     * &gt;   - 调用该接口创建集群时，默认不安装ICAgent，若需安装ICAgent，可在请求Body参数的annotations中加入\&quot;cluster.install.addons.external/install\&quot;:\&quot;[{\&quot;addonTemplateName\&quot;:\&quot;icagent\&quot;}]\&quot;的集群注解，将在创建集群时自动安装ICAgent。ICAgent是应用性能管理APM的采集代理，运行在应用所在的服务器上，用于实时采集探针所获取的数据，安装ICAgent是使用应用性能管理APM的前提。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建集群
     * @param {string} contentType 消息体的类型（格式）
     * @param {Cluster} createClusterRequestBody 集群规格信息请求体
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
     * 集群备份
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 集群备份
     * @param {string} clusterId 集群ID，获取方式请参见[如何获取接口URI中参数](cce_02_0271.xml)。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createClusterMasterSnapshot(createClusterMasterSnapshotRequest?: CreateClusterMasterSnapshotRequest): Promise<CreateClusterMasterSnapshotResponse> {
        const options = ParamCreater().createClusterMasterSnapshot(createClusterMasterSnapshotRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该API用于获取指定集群的证书信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取集群证书
     * @param {string} clusterId 集群ID，获取方式请参见[如何获取接口URI中参数](cce_02_0271.xml)。
     * @param {string} contentType 消息体的类型（格式）
     * @param {CertDuration} createKubernetesClusterCertRequestBody 创建集群证书的请求Body。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createKubernetesClusterCert(createKubernetesClusterCertRequest?: CreateKubernetesClusterCertRequest): Promise<CreateKubernetesClusterCertResponse> {
        const options = ParamCreater().createKubernetesClusterCert(createKubernetesClusterCertRequest);

         // @ts-ignore
        options['responseHeaders'] = ['Port-ID'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该API用于在指定集群下创建节点。
     * &gt; - 若无集群，请先[创建集群](cce_02_0236.xml)。
     * &gt; - 集群管理的URL格式为：https://Endpoint/uri。其中uri为资源路径，也即API访问的路径。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建节点
     * @param {string} clusterId 集群ID，获取方式请参见[如何获取接口URI中参数](cce_02_0271.xml)。
     * @param {string} contentType 消息体的类型（格式）
     * @param {NodeCreateRequest} createNodeRequestBody 创建节点的请求体
     * @param {'NodepoolScaleUp'} [nodepoolScaleUp] 标明是否为nodepool下发的请求。若不为“NodepoolScaleUp”将自动更新对应节点池的实例数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createNode(createNodeRequest?: CreateNodeRequest): Promise<CreateNodeResponse> {
        const options = ParamCreater().createNode(createNodeRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该API用于在指定集群下创建节点池。仅支持集群在处于可用、扩容、缩容状态时调用。
     * 
     * 1.21版本的集群创建节点池时支持绑定安全组，每个节点池最多绑定五个安全组。
     * 
     * 更新节点池的安全组后，只针对新创的pod生效，建议驱逐节点上原有的pod。
     * 
     * &gt; 若无集群，请先[创建集群](cce_02_0236.xml)。
     * &gt; 集群管理的URL格式为：https://Endpoint/uri。其中uri为资源路径，也即API访问的路径
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建节点池
     * @param {string} clusterId 集群ID，获取方式请参见[如何获取接口URI中参数](cce_02_0271.xml)。
     * @param {string} contentType 消息体的类型（格式）
     * @param {NodePool} createNodePoolRequestBody 创建节点池的请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createNodePool(createNodePoolRequest?: CreateNodePoolRequest): Promise<CreateNodePoolResponse> {
        const options = ParamCreater().createNodePool(createNodePoolRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建分区
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建分区
     * @param {string} clusterId 集群ID，获取方式请参见[如何获取接口URI中参数](cce_02_0271.xml)。
     * @param {PartitionReqBody} createPartitionRequestBody 请求body参数说明；非单个参数名称
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createPartition(createPartitionRequest?: CreatePartitionRequest): Promise<CreatePartitionResponse> {
        const options = ParamCreater().createPartition(createPartitionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 集群升级后确认，该接口建议配合Console使用，主要用于升级步骤完成后，客户确认集群状态和业务正常后做反馈。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 集群升级后确认
     * @param {string} clusterId 集群ID，获取方式请参见[如何获取接口URI中参数](cce_02_0271.xml)。
     * @param {PostcheckClusterRequestBody} postcheckClusterRequestBody 集群升级后确认请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createPostCheck(createPostCheckRequest?: CreatePostCheckRequest): Promise<CreatePostCheckResponse> {
        const options = ParamCreater().createPostCheck(createPostCheckRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 集群升级前检查
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 集群升级前检查
     * @param {string} clusterId 集群ID，获取方式请参见[如何获取接口URI中参数](cce_02_0271.xml)。
     * @param {PrecheckClusterRequestBody} precheckClusterRequestBody 集群升级前检查请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createPreCheck(createPreCheckRequest?: CreatePreCheckRequest): Promise<CreatePreCheckResponse> {
        const options = ParamCreater().createPreCheck(createPreCheckRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建模板实例
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建模板实例
     * @param {string} contentType 消息体的类型（格式）
     * @param {string} clusterId 集群ID，获取方式请参见[如何获取接口URI中参数](cce_02_0271.xml)。
     * @param {CreateReleaseReqBody} createReleaseRequestBody 创建release请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createRelease(createReleaseRequest?: CreateReleaseRequest): Promise<CreateReleaseResponse> {
        const options = ParamCreater().createRelease(createReleaseRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该API用于创建一个集群升级流程引导任务。请在调用本接口完成引导任务创建之后，通过集群升级前检查开始检查任务。
     * 升级流程任务用于控制集群升级任务的执行流程，执行流程为 升级前检查 &#x3D;&gt; 集群升级 &#x3D;&gt; 升级后检查。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 开启集群升级流程引导任务
     * @param {string} clusterId 集群ID，获取方式请参见[如何获取接口URI中参数](cce_02_0271.xml)。
     * @param {string} contentType 消息体的类型（格式）
     * @param {CreateUpgradeWorkFlowRequestBody} createUpgradeWorkFlowRequestBody 集群升级流程引导任务请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createUpgradeWorkFlow(createUpgradeWorkFlowRequest?: CreateUpgradeWorkFlowRequest): Promise<CreateUpgradeWorkFlowResponse> {
        const options = ParamCreater().createUpgradeWorkFlow(createUpgradeWorkFlowRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除插件实例的功能。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除AddonInstance
     * @param {string} contentType 消息体的类型（格式）
     * @param {string} id 插件实例id
     * @param {string} [clusterId] 集群 ID，获取方式请参见[如何获取接口URI中参数](cce_02_0271.xml)
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteAddonInstance(deleteAddonInstanceRequest?: DeleteAddonInstanceRequest): Promise<DeleteAddonInstanceResponse> {
        const options = ParamCreater().deleteAddonInstance(deleteAddonInstanceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除模板
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除模板
     * @param {string} chartId 模板的ID
     * @param {string} contentType 消息体的类型（格式）
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteChart(deleteChartRequest?: DeleteChartRequest): Promise<DeleteChartResponse> {
        const options = ParamCreater().deleteChart(deleteChartRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该API用于删除指定Namespace下的PVC（PersistentVolumeClaim）对象，并可以选择保留后端的云存储。该API待废弃，请使用Kubernetes PVC相关接口。
     * &gt;存储管理的URL格式为：https://{clusterid}.Endpoint/uri。其中{clusterid}为集群ID，uri为资源路径，也即API访问的路径。如果使用https://Endpoint/uri，则必须指定请求header中的X-Cluster-ID参数。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除PVC（待废弃）
     * @param {string} name 需要删除的PersistentVolumClaim的名称。 
     * @param {string} namespace 指定PersistentVolumeClaim所在的命名空间。 
     * @param {string} contentType 消息体的类型（格式）
     * @param {string} [deleteVolume] 删除PersistentVolumeClaim后是否保留后端关联的云存储。false表示不删除，true表示删除，默认为false。 
     * @param {string} [storageType] 云存储的类型，和deleteVolume搭配使用。即deleteVolume和storageType必须同时配置。 - bs：EVS云硬盘存储 - nfs：SFS弹性文件存储 - obs：OBS对象存储 - efs：SFS Turbo极速文件存储 
     * @param {string} [xClusterID] 集群ID，使用**https://Endpoint/uri**这种URL格式时必须指定此参数。获取方式请参见[如何获取接口URI中参数](cce_02_0271.xml)。 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteCloudPersistentVolumeClaims(deleteCloudPersistentVolumeClaimsRequest?: DeleteCloudPersistentVolumeClaimsRequest): Promise<DeleteCloudPersistentVolumeClaimsResponse> {
        const options = ParamCreater().deleteCloudPersistentVolumeClaims(deleteCloudPersistentVolumeClaimsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该API用于删除一个指定的集群。
     * &gt;集群管理的URL格式为：https://Endpoint/uri。其中uri为资源路径，也即API访问的路径。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除集群
     * @param {string} clusterId 集群ID，获取方式请参见[如何获取接口URI中参数](cce_02_0271.xml)。
     * @param {string} contentType 消息体的类型（格式）
     * @param {'true' | 'block' | 'try' | 'false' | 'skip'} [deleteEfs] 是否删除SFS Turbo（极速文件存储卷）， 枚举取值： - true或block (执行删除流程，失败则阻塞后续流程) - try (执行删除流程，失败则忽略，并继续执行后续流程) - false或skip (跳过删除流程，默认选项)
     * @param {'true' | 'block' | 'try' | 'false' | 'skip'} [deleteEni] 是否删除eni ports（原生弹性网卡）， 枚举取值： - true或block (执行删除流程，失败则阻塞后续流程，默认选项) - try (执行删除流程，失败则忽略，并继续执行后续流程) - false或skip (跳过删除流程)
     * @param {'true' | 'block' | 'try' | 'false' | 'skip'} [deleteEvs] 是否删除evs（云硬盘）， 枚举取值： - true或block (执行删除流程，失败则阻塞后续流程) - try (执行删除流程，失败则忽略，并继续执行后续流程) - false或skip (跳过删除流程，默认选项)
     * @param {'true' | 'block' | 'try' | 'false' | 'skip'} [deleteNet] 是否删除elb（弹性负载均衡）等集群Service/Ingress相关资源。 枚举取值： - true或block (执行删除流程，失败则阻塞后续流程，默认选项) - try (执行删除流程，失败则忽略，并继续执行后续流程) - false或skip (跳过删除流程)
     * @param {'true' | 'block' | 'try' | 'false' | 'skip'} [deleteObs] 是否删除obs（对象存储卷）， 枚举取值： - true或block (执行删除流程，失败则阻塞后续流程) - try (执行删除流程，失败则忽略，并继续执行后续流程) - false或skip (跳过删除流程，默认选项)
     * @param {'true' | 'block' | 'try' | 'false' | 'skip'} [deleteSfs] 是否删除sfs（文件存储卷）， 枚举取值： - true或block (执行删除流程，失败则阻塞后续流程) - try (执行删除流程，失败则忽略，并继续执行后续流程) - false或skip (跳过删除流程，默认选项)
     * @param {'true' | 'block' | 'try' | 'false' | 'skip'} [deleteSfs30] 是否删除sfs3.0（文件存储卷3.0）， 枚举取值： - true或block (执行删除流程，失败则阻塞后续流程) - try (执行删除流程，失败则忽略，并继续执行后续流程) - false或skip (跳过删除流程，默认选项)
     * @param {'true' | 'block' | 'try' | 'false' | 'skip'} [ltsReclaimPolicy] 是否删除LTS LogStream（日志流）， 枚举取值： - true或block (执行删除流程，失败则阻塞后续流程) - try (执行删除流程，失败则忽略，并继续执行后续流程) - false或skip (跳过删除流程，默认选项)
     * @param {'true'} [tobedeleted] 是否使用包周期集群删除参数预置模式（仅对包周期集群生效）。  需要和其他删除选项参数一起使用，未指定的参数，则使用默认值。  使用该参数，集群不执行真正的删除，仅将本次请求的全部query参数都预置到集群数据库中，用于包周期集群退订时识别用户要删除的资源。  允许重复执行，覆盖预置的删除参数。  枚举取值： - true  (预置模式，仅预置query参数，不执行删除)
     * @param {'delete' | 'reset' | 'retain'} [ondemandNodePolicy] 集群下所有按需节点处理策略， 枚举取值： - delete (删除服务器) - reset (保留服务器并重置服务器，数据不保留) - retain （保留服务器不重置服务器，数据保留）
     * @param {'reset' | 'retain'} [periodicNodePolicy] 集群下所有包周期节点处理策略， 枚举取值： - reset (保留服务器并重置服务器，数据不保留) - retain （保留服务器不重置服务器，数据保留）
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
     * 该API用于删除指定的节点。
     * &gt;集群管理的URL格式为：https://Endpoint/uri。其中uri为资源路径，也即API访问的路径
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除节点
     * @param {string} clusterId 集群ID，获取方式请参见[如何获取接口URI中参数](cce_02_0271.xml)。
     * @param {string} nodeId 节点ID，获取方式请参见[如何获取接口URI中参数](cce_02_0271.xml)。
     * @param {string} contentType 消息体的类型（格式）
     * @param {'NoScaleDown'} [nodepoolScaleDown] 标明是否为nodepool下发的请求。若不为“NoScaleDown”将自动更新对应节点池的实例数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteNode(deleteNodeRequest?: DeleteNodeRequest): Promise<DeleteNodeResponse> {
        const options = ParamCreater().deleteNode(deleteNodeRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该API用于删除指定的节点池。
     * &gt; 集群管理的URL格式为：https://Endpoint/uri。其中uri为资源路径，也即API访问的路径
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除节点池
     * @param {string} clusterId 集群ID，获取方式请参见[如何获取接口URI中参数](cce_02_0271.xml)。
     * @param {string} nodepoolId 节点池ID
     * @param {string} contentType 消息体的类型（格式）
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteNodePool(deleteNodePoolRequest?: DeleteNodePoolRequest): Promise<DeleteNodePoolResponse> {
        const options = ParamCreater().deleteNodePool(deleteNodePoolRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除指定模板实例
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除指定模板实例
     * @param {string} name 模板实例名称
     * @param {string} namespace 模板实例所在的命名空间
     * @param {string} contentType 消息体的类型（格式）
     * @param {string} clusterId 集群ID，获取方式请参见[如何获取接口URI中参数](cce_02_0271.xml)。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteRelease(deleteReleaseRequest?: DeleteReleaseRequest): Promise<DeleteReleaseResponse> {
        const options = ParamCreater().deleteRelease(deleteReleaseRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 下载模板
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 下载模板
     * @param {string} chartId 模板的ID
     * @param {string} contentType 消息体的类型（格式）
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public downloadChart(downloadChartRequest?: DownloadChartRequest): Promise<DownloadChartResponse> {
        const options = ParamCreater().downloadChart(downloadChartRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 集群休眠用于将运行中的集群置于休眠状态，休眠后，将不再收取控制节点资源费用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 集群休眠
     * @param {string} clusterId 集群ID，获取方式请参见[如何获取接口URI中参数](cce_02_0271.xml)。
     * @param {string} contentType 消息体的类型（格式）
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public hibernateCluster(hibernateClusterRequest?: HibernateClusterRequest): Promise<HibernateClusterResponse> {
        const options = ParamCreater().hibernateCluster(hibernateClusterRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取集群所有已安装插件实例
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取AddonInstance列表
     * @param {string} contentType 消息体的类型（格式）
     * @param {string} clusterId 集群 ID，获取方式请参见[如何获取接口URI中参数](cce_02_0271.xml)
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAddonInstances(listAddonInstancesRequest?: ListAddonInstancesRequest): Promise<ListAddonInstancesResponse> {
        const options = ParamCreater().listAddonInstances(listAddonInstancesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 插件模板查询接口，查询插件信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询AddonTemplates列表
     * @param {string} contentType 消息体的类型（格式）
     * @param {string} [addonTemplateName] 指定的插件名称或插件别名，不填写则查询列表。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAddonTemplates(listAddonTemplatesRequest?: ListAddonTemplatesRequest): Promise<ListAddonTemplatesResponse> {
        const options = ParamCreater().listAddonTemplates(listAddonTemplatesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取模板列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取模板列表
     * @param {string} contentType 消息体的类型（格式）
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listCharts(listChartsRequest?: ListChartsRequest): Promise<ListChartsResponse> {
        const options = ParamCreater().listCharts(listChartsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取集群备份任务详情列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取集群备份任务详情列表
     * @param {string} clusterId 集群ID，获取方式请参见[如何获取接口URI中参数](cce_02_0271.xml)。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listClusterMasterSnapshotTasks(listClusterMasterSnapshotTasksRequest?: ListClusterMasterSnapshotTasksRequest): Promise<ListClusterMasterSnapshotTasksResponse> {
        const options = ParamCreater().listClusterMasterSnapshotTasks(listClusterMasterSnapshotTasksRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取集群升级特性开关配置
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取集群升级特性开关配置
     * @param {string} contentType 消息体的类型（格式）
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listClusterUpgradeFeatureGates(listClusterUpgradeFeatureGatesRequest?: ListClusterUpgradeFeatureGatesRequest): Promise<ListClusterUpgradeFeatureGatesResponse> {
        const options = ParamCreater().listClusterUpgradeFeatureGates(listClusterUpgradeFeatureGatesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取集群升级路径
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取集群升级路径
     * @param {string} contentType 消息体的类型（格式）
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listClusterUpgradePaths(listClusterUpgradePathsRequest?: ListClusterUpgradePathsRequest): Promise<ListClusterUpgradePathsResponse> {
        const options = ParamCreater().listClusterUpgradePaths(listClusterUpgradePathsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该API用于获取指定项目下所有集群的详细信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取指定项目下的集群
     * @param {string} contentType 消息体的类型（格式）
     * @param {string} [detail] 查询集群详细信息。  若设置为true，获取集群下节点总数(totalNodesNumber)、正常节点数(activeNodesNumber)、CPU总量(totalNodesCPU)、内存总量(totalNodesMemory)、已安装插件列表(installedAddonInstances)，已安装插件列表中包含名称(addonTemplateName)、版本号(version)、插件的状态信息(status)，放入到annotation中。 
     * @param {'Available' | 'Unavailable' | 'ScalingUp' | 'ScalingDown' | 'Creating' | 'Deleting' | 'Upgrading' | 'Resizing' | 'RollingBack' | 'RollbackFailed' | 'Hibernating' | 'Hibernation' | 'Awaking' | 'Empty'} [status] 集群状态，取值如下 - Available：可用，表示集群处于正常状态。 - Unavailable：不可用，表示集群异常，需手动删除。 - ScalingUp：扩容中，表示集群正处于扩容过程中。 - ScalingDown：缩容中，表示集群正处于缩容过程中。 - Creating：创建中，表示集群正处于创建过程中。 - Deleting：删除中，表示集群正处于删除过程中。 - Upgrading：升级中，表示集群正处于升级过程中。 - Resizing：规格变更中，表示集群正处于变更规格中。 - RollingBack：回滚中，表示集群正处于回滚过程中。 - RollbackFailed：回滚异常，表示集群回滚异常。 - Hibernating：休眠中，表示集群正处于休眠过程中。 - Hibernation：已休眠，表示集群正处于休眠状态。 - Awaking：唤醒中，表示集群正处于从休眠状态唤醒的过程中。 - Empty：集群无任何资源（已废弃）
     * @param {'VirtualMachine' | 'ARM64'} [type] 集群类型： - VirtualMachine：CCE集群 - ARM64：鲲鹏集群
     * @param {string} [version] 集群版本过滤
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listClusters(listClustersRequest?: ListClustersRequest): Promise<ListClustersResponse> {
        const options = ParamCreater().listClusters(listClustersRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该API用于获取集群下所有节点池。
     * &gt; - 集群管理的URL格式为：https://Endpoint/uri。其中uri为资源路径，也即API访问的路径
     * &gt; - nodepool是集群中具有相同配置的节点实例的子集。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取集群下所有节点池
     * @param {string} clusterId 集群ID，获取方式请参见[如何获取接口URI中参数](cce_02_0271.xml)。
     * @param {string} contentType 消息体的类型（格式）
     * @param {string} [showDefaultNodePool] 是否展示默认节点池。默认不展示，指定为“true”时展示默认节点池。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listNodePools(listNodePoolsRequest?: ListNodePoolsRequest): Promise<ListNodePoolsResponse> {
        const options = ParamCreater().listNodePools(listNodePoolsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该API用于通过集群ID获取指定集群下所有节点的详细信息。
     * &gt;集群管理的URL格式为：https://Endpoint/uri。其中uri为资源路径，也即API访问的路径。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取集群下所有节点
     * @param {string} clusterId 集群ID，获取方式请参见[如何获取接口URI中参数](cce_02_0271.xml)。
     * @param {string} contentType 消息体的类型（格式）
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listNodes(listNodesRequest?: ListNodesRequest): Promise<ListNodesResponse> {
        const options = ParamCreater().listNodes(listNodesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取分区列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取分区列表
     * @param {string} clusterId 集群ID，获取方式请参见[如何获取接口URI中参数](cce_02_0271.xml)。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listPartitions(listPartitionsRequest?: ListPartitionsRequest): Promise<ListPartitionsResponse> {
        const options = ParamCreater().listPartitions(listPartitionsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取集群升级前检查任务详情列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取集群升级前检查任务详情列表
     * @param {string} clusterId 集群ID，获取方式请参见[如何获取接口URI中参数](cce_02_0271.xml)。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listPreCheckTasks(listPreCheckTasksRequest?: ListPreCheckTasksRequest): Promise<ListPreCheckTasksResponse> {
        const options = ParamCreater().listPreCheckTasks(listPreCheckTasksRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取模板实例列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取模板实例列表
     * @param {string} contentType 消息体的类型（格式）
     * @param {string} clusterId 集群ID，获取方式请参见[如何获取接口URI中参数](cce_02_0271.xml)。
     * @param {string} [chartId] 模板ID
     * @param {string} [namespace] 模板对应的命名空间
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listReleases(listReleasesRequest?: ListReleasesRequest): Promise<ListReleasesResponse> {
        const options = ParamCreater().listReleases(listReleasesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取集群升级任务详情列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取集群升级任务详情列表
     * @param {string} clusterId 集群ID，获取方式请参见[如何获取接口URI中参数](cce_02_0271.xml)。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listUpgradeClusterTasks(listUpgradeClusterTasksRequest?: ListUpgradeClusterTasksRequest): Promise<ListUpgradeClusterTasksResponse> {
        const options = ParamCreater().listUpgradeClusterTasks(listUpgradeClusterTasksRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取历史集群升级引导任务列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取UpgradeWorkFlows列表
     * @param {string} clusterId 集群ID，获取方式请参见[如何获取接口URI中参数](cce_02_0271.xml)。
     * @param {string} contentType 消息体的类型（格式）
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listUpgradeWorkFlows(listUpgradeWorkFlowsRequest?: ListUpgradeWorkFlowsRequest): Promise<ListUpgradeWorkFlowsResponse> {
        const options = ParamCreater().listUpgradeWorkFlows(listUpgradeWorkFlowsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该API用于在指定集群下迁移节点到另一集群。
     * 
     * &gt;集群管理的URL格式为：https://Endpoint/uri。其中uri为资源路径，也即API访问的路径。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 节点迁移
     * @param {string} clusterId 集群ID，获取方式请参见[如何获取接口URI中参数](cce_02_0271.xml)。
     * @param {string} targetClusterId 集群ID，获取方式请参见[如何获取接口URI中参数](cce_02_0271.xml)。
     * @param {string} contentType 消息体的类型（格式）
     * @param {MigrateNodesTask} migrateNodesTask 迁移节点的请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public migrateNode(migrateNodeRequest?: MigrateNodeRequest): Promise<MigrateNodeResponse> {
        const options = ParamCreater().migrateNode(migrateNodeRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 暂停集群升级任务。
     * &gt; - 集群升级涉及多维度的组件升级操作，强烈建议统一通过CCE控制台执行交互式升级，降低集群升级过程的业务意外受损风险；
     * &gt; - 当前集群升级相关接口受限开放。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 暂停集群升级任务
     * @param {string} clusterId 集群ID，获取方式请参见[如何获取接口URI中参数](cce_02_0271.xml)。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public pauseUpgradeClusterTask(pauseUpgradeClusterTaskRequest?: PauseUpgradeClusterTaskRequest): Promise<PauseUpgradeClusterTaskResponse> {
        const options = ParamCreater().pauseUpgradeClusterTask(pauseUpgradeClusterTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该API用于在指定集群下移除节点。
     * &gt;集群管理的URL格式为：https://Endpoint/uri。其中uri为资源路径，也即API访问的路径。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 节点移除
     * @param {string} clusterId 集群ID，获取方式请参见[如何获取接口URI中参数](cce_02_0271.xml)。
     * @param {string} contentType 消息体的类型（格式）
     * @param {RemoveNodesTask} removeNodesTask 移除节点的请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public removeNode(removeNodeRequest?: RemoveNodeRequest): Promise<RemoveNodeResponse> {
        const options = ParamCreater().removeNode(removeNodeRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该API用于在指定集群下重置节点。
     * &gt;集群管理的URL格式为：https://Endpoint/uri。其中uri为资源路径，也即API访问的路径。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 重置节点
     * @param {string} clusterId 集群ID，获取方式请参见[如何获取接口URI中参数](cce_02_0271.xml)。
     * @param {string} contentType 消息体的类型（格式）
     * @param {ResetNodeList} resetNodeList 重置节点的请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public resetNode(resetNodeRequest?: ResetNodeRequest): Promise<ResetNodeResponse> {
        const options = ParamCreater().resetNode(resetNodeRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该API用于变更一个指定集群的规格。
     * 
     * &gt;   - 集群管理的URL格式为：https://Endpoint/uri。其中uri为资源路径，也即API访问的路径。
     * &gt;   [- 使用限制请参考[变更集群规格](https://support.huaweicloud.com/usermanual-cce/cce_10_0403.html)。](tag:hws)
     * &gt;   [- 使用限制请参考[变更集群规格](https://support.huaweicloud.com/intl/zh-cn/usermanual-cce/cce_10_0403.html)](tag:hws_hk)
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 变更集群规格
     * @param {string} clusterId 集群ID，获取方式请参见[如何获取接口URI中参数](cce_02_0271.xml)。
     * @param {string} contentType 消息体的类型（格式）
     * @param {ResizeClusterRequestBody} resizeClusterRequestBody 变更集群规格的结构体。
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
     * 重新执行失败的集群升级任务。
     * &gt; - 集群升级涉及多维度的组件升级操作，强烈建议统一通过CCE控制台执行交互式升级，降低集群升级过程的业务意外受损风险；
     * &gt; - 当前集群升级相关接口受限开放。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 重试集群升级任务
     * @param {string} clusterId 集群ID，获取方式请参见[如何获取接口URI中参数](cce_02_0271.xml)。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public retryUpgradeClusterTask(retryUpgradeClusterTaskRequest?: RetryUpgradeClusterTaskRequest): Promise<RetryUpgradeClusterTaskResponse> {
        const options = ParamCreater().retryUpgradeClusterTask(retryUpgradeClusterTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 将插件实例回滚到升级前的版本。只有在当前插件实例版本支持回滚到升级前的版本（status.isRollbackable为true），且插件实例状态为running（运行中）、available（可用）、abnormal（不可用）、upgradeFailed（升级失败）、rollbackFailed（回滚失败）时支持回滚。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 回滚AddonInstance
     * @param {string} id 插件实例ID
     * @param {AddonInstanceRollbackRequest} addonInstanceRollbackRequestBody 请求body体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public rollbackAddonInstance(rollbackAddonInstanceRequest?: RollbackAddonInstanceRequest): Promise<RollbackAddonInstanceResponse> {
        const options = ParamCreater().rollbackAddonInstance(rollbackAddonInstanceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该API用于伸缩指定的节点池
     * &gt; 集群管理的URL格式为：https://Endpoint/uri。其中uri为资源路径，也即API访问的路径
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 伸缩节点池
     * @param {string} clusterId 集群ID，获取方式请参见[如何获取接口URI中参数](cce_02_0271.xml)。
     * @param {string} nodepoolId 节点池ID
     * @param {string} contentType 消息体的类型（格式）
     * @param {ScaleNodePoolRequestBody} scaleNodePoolRequestBody 伸缩节点池的请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public scaleNodePool(scaleNodePoolRequest?: ScaleNodePoolRequest): Promise<ScaleNodePoolResponse> {
        const options = ParamCreater().scaleNodePool(scaleNodePoolRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取插件实例详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取AddonInstance详情
     * @param {string} contentType 消息体的类型（格式）
     * @param {string} id 插件实例id
     * @param {string} [clusterId] 集群 ID，获取方式请参见[如何获取接口URI中参数](cce_02_0271.xml)
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showAddonInstance(showAddonInstanceRequest?: ShowAddonInstanceRequest): Promise<ShowAddonInstanceResponse> {
        const options = ParamCreater().showAddonInstance(showAddonInstanceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取模板
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取模板
     * @param {string} chartId 模板的ID
     * @param {string} contentType 消息体的类型（格式）
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showChart(showChartRequest?: ShowChartRequest): Promise<ShowChartResponse> {
        const options = ParamCreater().showChart(showChartRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取模板Values
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取模板Values
     * @param {string} chartId 模板的ID
     * @param {string} contentType 消息体的类型（格式）
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showChartValues(showChartValuesRequest?: ShowChartValuesRequest): Promise<ShowChartValuesResponse> {
        const options = ParamCreater().showChartValues(showChartValuesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该API用于获取指定集群的详细信息。
     * &gt;集群管理的URL格式为：https://Endpoint/uri。其中uri为资源路径，也即API访问的路径。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取指定的集群
     * @param {string} clusterId 集群ID，获取方式请参见[如何获取接口URI中参数](cce_02_0271.xml)。
     * @param {string} contentType 消息体的类型（格式）
     * @param {string} [detail] 查询集群详细信息。  若设置为true，获取集群下节点总数(totalNodesNumber)、正常节点数(activeNodesNumber)、CPU总量(totalNodesCPU)、内存总量(totalNodesMemory)和已安装插件列表(installedAddonInstances)，已安装插件列表中包含名称(addonTemplateName)、版本号(version)、插件的状态信息(status)，放入到annotation中。 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showCluster(showClusterRequest?: ShowClusterRequest): Promise<ShowClusterResponse> {
        const options = ParamCreater().showCluster(showClusterRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取集群组件上报的LTS的配置信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询集群日志配置信息
     * @param {string} clusterId 集群ID，获取方式请参见[如何获取接口URI中参数](cce_02_0271.xml)。
     * @param {string} contentType 消息体的类型（格式）
     * @param {'control' | 'audit' | 'system-addon'} [type] 组件类型 , 合法取值为control，audit，system-addon。不填写则查询全部类型。 - control 控制面组件日志。 - audit 控制面审计日志。 - system-addon 系统插件日志。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showClusterConfig(showClusterConfigRequest?: ShowClusterConfigRequest): Promise<ShowClusterConfigResponse> {
        const options = ParamCreater().showClusterConfig(showClusterConfigRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该API用于查询CCE服务下指定集群支持配置的参数列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询指定集群支持配置的参数列表
     * @param {string} clusterId 集群ID，获取方式请参见[如何获取接口URI中参数](cce_02_0271.xml)。
     * @param {string} contentType 消息体的类型（格式）
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showClusterConfigurationDetails(showClusterConfigurationDetailsRequest?: ShowClusterConfigurationDetailsRequest): Promise<ShowClusterConfigurationDetailsResponse> {
        const options = ParamCreater().showClusterConfigurationDetails(showClusterConfigurationDetailsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该API用于通过集群ID获取集群访问的地址，包括PrivateIP(HA集群返回VIP)与PublicIP
     * &gt;集群管理的URL格式为：https://Endpoint/uri。其中uri为资源路径，也即API访问的路径。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取集群访问的地址
     * @param {string} clusterId 集群ID，获取方式请参见[如何获取接口URI中参数](cce_02_0271.xml)。
     * @param {string} contentType 消息体的类型（格式）
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showClusterEndpoints(showClusterEndpointsRequest?: ShowClusterEndpointsRequest): Promise<ShowClusterEndpointsResponse> {
        const options = ParamCreater().showClusterEndpoints(showClusterEndpointsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取集群升级相关信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取集群升级相关信息
     * @param {string} clusterId 集群ID，获取方式请参见[如何获取接口URI中参数](cce_02_0271.xml)。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showClusterUpgradeInfo(showClusterUpgradeInfoRequest?: ShowClusterUpgradeInfoRequest): Promise<ShowClusterUpgradeInfoResponse> {
        const options = ParamCreater().showClusterUpgradeInfo(showClusterUpgradeInfoRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该API用于获取任务信息。通过某一任务请求下发后返回的jobID来查询指定任务的进度。
     * &gt; - 集群管理的URL格式为：https://Endpoint/uri。其中uri为资源路径，也即API访问的路径
     * &gt; - 该接口通常使用场景为：
     * &gt;   - 创建、删除集群时，查询相应任务的进度。
     * &gt;   - 创建、删除节点时，查询相应任务的进度。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取任务信息
     * @param {string} jobId 任务ID，获取方式请参见[如何获取接口URI中参数](cce_02_0271.xml)。
     * @param {string} contentType 消息体的类型（格式）
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showJob(showJobRequest?: ShowJobRequest): Promise<ShowJobResponse> {
        const options = ParamCreater().showJob(showJobRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该API用于通过节点ID获取指定节点的详细信息。
     * &gt;集群管理的URL格式为：https://Endpoint/uri。其中uri为资源路径，也即API访问的路径。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取指定的节点
     * @param {string} clusterId 集群ID，获取方式请参见[如何获取接口URI中参数](cce_02_0271.xml)。
     * @param {string} nodeId 节点ID，获取方式请参见[如何获取接口URI中参数](cce_02_0271.xml)。
     * @param {string} contentType 消息体的类型（格式）
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showNode(showNodeRequest?: ShowNodeRequest): Promise<ShowNodeResponse> {
        const options = ParamCreater().showNode(showNodeRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该API用于获取指定节点池的详细信息。
     * &gt; 集群管理的URL格式为：https://Endpoint/uri。其中uri为资源路径，也即API访问的路径
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取指定的节点池
     * @param {string} clusterId 集群ID，获取方式请参见[如何获取接口URI中参数](cce_02_0271.xml)。
     * @param {string} nodepoolId 节点池ID
     * @param {string} contentType 消息体的类型（格式）
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showNodePool(showNodePoolRequest?: ShowNodePoolRequest): Promise<ShowNodePoolResponse> {
        const options = ParamCreater().showNodePool(showNodePoolRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该API用于查询CCE服务下指定节点池支持配置的参数列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询指定节点池支持配置的参数列表
     * @param {string} clusterId 集群ID，获取方式请参见[如何获取接口URI中参数](cce_02_0271.xml)。
     * @param {string} nodepoolId 节点池ID
     * @param {string} contentType 消息体的类型（格式）
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showNodePoolConfigurationDetails(showNodePoolConfigurationDetailsRequest?: ShowNodePoolConfigurationDetailsRequest): Promise<ShowNodePoolConfigurationDetailsResponse> {
        const options = ParamCreater().showNodePoolConfigurationDetails(showNodePoolConfigurationDetailsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该API用于查询指定节点池支持配置的参数内容。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询指定节点池支持配置的参数内容
     * @param {string} clusterId 集群ID，获取方式请参见[如何获取接口URI中参数](cce_02_0271.xml)。
     * @param {string} nodepoolId 节点池ID
     * @param {string} contentType 消息体的类型（格式）
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showNodePoolConfigurations(showNodePoolConfigurationsRequest?: ShowNodePoolConfigurationsRequest): Promise<ShowNodePoolConfigurationsResponse> {
        const options = ParamCreater().showNodePoolConfigurations(showNodePoolConfigurationsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取分区详情
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取分区详情
     * @param {string} clusterId 集群ID，获取方式请参见[如何获取接口URI中参数](cce_02_0271.xml)。
     * @param {string} partitionName 分区名称
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showPartition(showPartitionRequest?: ShowPartitionRequest): Promise<ShowPartitionResponse> {
        const options = ParamCreater().showPartition(showPartitionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取集群升级前检查任务详情，任务ID由调用集群检查API后从响应体中uid字段获取。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取集群升级前检查任务详情
     * @param {string} clusterId 集群ID，获取方式请参见[如何获取接口URI中参数](cce_02_0271.xml)。
     * @param {string} taskId 升级任务ID，调用集群升级API后从响应体中uid字段获取。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showPreCheck(showPreCheckRequest?: ShowPreCheckRequest): Promise<ShowPreCheckResponse> {
        const options = ParamCreater().showPreCheck(showPreCheckRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该API用于查询CCE服务下的资源配额。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询CCE服务下的资源配额
     * @param {string} contentType 消息体的类型（格式）
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
     * 获取指定模板实例
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取指定模板实例
     * @param {string} name 模板实例名称
     * @param {string} namespace 模板实例所在的命名空间
     * @param {string} contentType 消息体的类型（格式）
     * @param {string} clusterId 集群ID，获取方式请参见[如何获取接口URI中参数](cce_02_0271.xml)。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showRelease(showReleaseRequest?: ShowReleaseRequest): Promise<ShowReleaseResponse> {
        const options = ParamCreater().showRelease(showReleaseRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定模板实例历史记录
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询指定模板实例历史记录
     * @param {string} name 模板实例名称
     * @param {string} namespace 模板实例所在的命名空间
     * @param {string} contentType 消息体的类型（格式）
     * @param {string} clusterId 集群ID，获取方式请参见[如何获取接口URI中参数](cce_02_0271.xml)。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showReleaseHistory(showReleaseHistoryRequest?: ShowReleaseHistoryRequest): Promise<ShowReleaseHistoryResponse> {
        const options = ParamCreater().showReleaseHistory(showReleaseHistoryRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取集群升级任务详情，任务ID由调用集群升级API后从响应体中uid字段获取。
     * &gt; - 集群升级涉及多维度的组件升级操作，强烈建议统一通过CCE控制台执行交互式升级，降低集群升级过程的业务意外受损风险；
     * &gt; - 当前集群升级相关接口受限开放。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取集群升级任务详情
     * @param {string} clusterId 集群ID，获取方式请参见[如何获取接口URI中参数](cce_02_0271.xml)。
     * @param {string} taskId 升级任务ID，调用集群升级API后从响应体中uid字段获取。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showUpgradeClusterTask(showUpgradeClusterTaskRequest?: ShowUpgradeClusterTaskRequest): Promise<ShowUpgradeClusterTaskResponse> {
        const options = ParamCreater().showUpgradeClusterTask(showUpgradeClusterTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该API用于通过升级引导任务ID获取任务的详细信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取指定集群升级引导任务详情
     * @param {string} clusterId 集群ID，获取方式请参见[如何获取接口URI中参数](cce_02_0271.xml)。
     * @param {string} upgradeWorkflowId 集群升级任务引导流程ID，获取方式请参见[如何获取接口URI中参数](cce_02_0271.xml)。
     * @param {string} contentType 消息体的类型（格式）
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showUpgradeWorkFlow(showUpgradeWorkFlowRequest?: ShowUpgradeWorkFlowRequest): Promise<ShowUpgradeWorkFlowResponse> {
        const options = ParamCreater().showUpgradeWorkFlow(showUpgradeWorkFlowRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取用户模板配额
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取用户模板配额
     * @param {string} contentType 消息体的类型（格式）
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showUserChartsQuotas(showUserChartsQuotasRequest?: ShowUserChartsQuotasRequest): Promise<ShowUserChartsQuotasResponse> {
        const options = ParamCreater().showUserChartsQuotas(showUserChartsQuotasRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新插件实例的功能。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新AddonInstance
     * @param {string} id 插件实例id
     * @param {string} contentType 消息体的类型（格式）
     * @param {InstanceRequest} updateAddonInstanceRequestBody 请求body体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateAddonInstance(updateAddonInstanceRequest?: UpdateAddonInstanceRequest): Promise<UpdateAddonInstanceResponse> {
        const options = ParamCreater().updateAddonInstance(updateAddonInstanceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新模板
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新模板
     * @param {string} chartId 模板的ID
     * @param {string} contentType 消息体的类型（格式）
     * @param {any} content 模板包文件
     * @param {string} [parameters] 上传模板的配置参数，示例如下：\\\&quot;{\\\\\\\&quot;override\\\\\\\&quot;:true,\\\\\\\&quot;skip_lint\\\\\\\&quot;:true,\\\\\\\&quot;source\\\\\\\&quot;:\\\\\\\&quot;package\\\\\\\&quot;}\\\&quot; - skip_lint: whether lint uploaded chart - override: whether override existed chart - visible: update chart visible
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateChart(updateChartRequest?: UpdateChartRequest): Promise<UpdateChartResponse> {
        const options = ParamCreater().updateChart(updateChartRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该API用于更新指定的集群。
     * &gt;集群管理的URL格式为：https://Endpoint/uri。其中uri为资源路径，也即API访问的路径。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新指定的集群
     * @param {string} clusterId 集群ID，获取方式请参见[如何获取接口URI中参数](cce_02_0271.xml)。
     * @param {string} contentType 消息体的类型（格式）
     * @param {ClusterInformation} updateClusterRequestBody spec是集合类的元素类型，用户对需要管理的集群对象进行详细描述的主体部分都在spec中给出。系统通过spec的描述来创建或更新对象。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateCluster(updateClusterRequest?: UpdateClusterRequest): Promise<UpdateClusterResponse> {
        const options = ParamCreater().updateCluster(updateClusterRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该API用于通过集群ID绑定、解绑集群公网apiserver地址
     * &gt;集群管理的URL格式为：https://Endpoint/uri。其中uri为资源路径，也即API访问的路径。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 绑定、解绑集群公网apiserver地址
     * @param {string} clusterId 集群ID，获取方式请参见[如何获取接口URI中参数](cce_02_0271.xml)。
     * @param {string} contentType 消息体的类型（格式）
     * @param {MasterEIPRequest} masterEIPBody 绑定或解绑集群公网apiserver地址的请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateClusterEip(updateClusterEipRequest?: UpdateClusterEipRequest): Promise<UpdateClusterEipResponse> {
        const options = ParamCreater().updateClusterEip(updateClusterEipRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 用户可以选择集群管理节点上哪些组件的日志上报LTS
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 配置集群日志
     * @param {string} clusterId 集群ID，获取方式请参见[如何获取接口URI中参数](cce_02_0271.xml)。
     * @param {string} contentType 消息体的类型（格式）
     * @param {ClusterLogConfig} updateClusterLogConfigRequestBody 集群日志上报配的置信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateClusterLogConfig(updateClusterLogConfigRequest?: UpdateClusterLogConfigRequest): Promise<UpdateClusterLogConfigResponse> {
        const options = ParamCreater().updateClusterLogConfig(updateClusterLogConfigRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该API用于更新指定的节点。
     * &gt; - 当前仅支持更新metadata下的name字段，即节点的名字。
     * &gt; - 集群管理的URL格式为：https://Endpoint/uri。其中uri为资源路径，也即API访问的路径。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新指定的节点
     * @param {string} clusterId 集群ID，获取方式请参见[如何获取接口URI中参数](cce_02_0271.xml)。
     * @param {string} nodeId 节点ID，获取方式请参见[如何获取接口URI中参数](cce_02_0271.xml)。
     * @param {string} contentType 消息体的类型（格式）
     * @param {ClusterNodeInformation} updateNodeRequestBody metadata是节点对象的元数据定义，是集合类的元素类型，包含一组由不同名称定义的属性。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateNode(updateNodeRequest?: UpdateNodeRequest): Promise<UpdateNodeResponse> {
        const options = ParamCreater().updateNode(updateNodeRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该API用于更新指定的节点池。仅支持集群在处于可用、扩容、缩容状态时调用。
     * 
     * 
     * &gt; - 集群管理的URL格式为：https://Endpoint/uri。其中uri为资源路径，也即API访问的路径
     * 
     * &gt; - 当前仅支持更新节点池名称，spec下的initialNodeCount，k8sTags，taints，login，userTags与节点池的扩缩容配置相关字段。若此次更新未设置相关值，默认更新为初始值。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新指定节点池
     * @param {string} clusterId 集群ID，获取方式请参见[如何获取接口URI中参数](cce_02_0271.xml)。
     * @param {string} nodepoolId 节点池ID
     * @param {string} contentType 消息体的类型（格式）
     * @param {NodePoolUpdate} updateNodePoolRequestBody 更新节点池的请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateNodePool(updateNodePoolRequest?: UpdateNodePoolRequest): Promise<UpdateNodePoolResponse> {
        const options = ParamCreater().updateNodePool(updateNodePoolRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该API用于修改CCE服务下指定节点池配置参数的值。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改指定节点池配置参数的值
     * @param {string} clusterId 集群ID，获取方式请参见[如何获取接口URI中参数](cce_02_0271.xml)。
     * @param {string} nodepoolId 节点池ID
     * @param {string} contentType 消息体的类型（格式）
     * @param {UpdateClusterConfigurationsBody} updateNodePoolConfigurationRequestBody 批量更新指定节点池配置参数的请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateNodePoolConfiguration(updateNodePoolConfigurationRequest?: UpdateNodePoolConfigurationRequest): Promise<UpdateNodePoolConfigurationResponse> {
        const options = ParamCreater().updateNodePoolConfiguration(updateNodePoolConfigurationRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新分区
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新分区
     * @param {string} clusterId 集群ID，获取方式请参见[如何获取接口URI中参数](cce_02_0271.xml)。
     * @param {string} partitionName 分区名称
     * @param {PartitionReqBody} updatePartitionRequestBody 请求body参数说明；非单个参数名称
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updatePartition(updatePartitionRequest?: UpdatePartitionRequest): Promise<UpdatePartitionResponse> {
        const options = ParamCreater().updatePartition(updatePartitionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新指定模板实例
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新指定模板实例
     * @param {string} name 模板实例名称
     * @param {string} namespace 模板实例所在的命名空间
     * @param {string} contentType 消息体的类型（格式）
     * @param {string} clusterId 集群ID，获取方式请参见[如何获取接口URI中参数](cce_02_0271.xml)。
     * @param {UpdateReleaseReqBody} updateReleaseRequestBody 更新release的请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateRelease(updateReleaseRequest?: UpdateReleaseRequest): Promise<UpdateReleaseResponse> {
        const options = ParamCreater().updateRelease(updateReleaseRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 集群升级。
     * &gt; - 集群升级涉及多维度的组件升级操作，强烈建议统一通过CCE控制台执行交互式升级，降低集群升级过程的业务意外受损风险；
     * &gt; - 当前集群升级相关接口受限开放。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 集群升级
     * @param {string} clusterId 集群ID，获取方式请参见[如何获取接口URI中参数](cce_02_0271.xml)。
     * @param {UpgradeClusterRequestBody} upgradeClusterRequestBody 集群升级请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public upgradeCluster(upgradeClusterRequest?: UpgradeClusterRequest): Promise<UpgradeClusterResponse> {
        const options = ParamCreater().upgradeCluster(upgradeClusterRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该API用于更新指定集群升级引导任务状态，当前仅适用于取消升级流程
     * 调用该API时升级流程引导任务状态不能为进行中(running) 已完成(success) 已取消(cancel),升级子任务状态不能为running(进行中) init(已初始化) pause(任务被暂停) queue(队列中)
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新指定集群升级引导任务状态
     * @param {string} clusterId 集群ID，获取方式请参见[如何获取接口URI中参数](cce_02_0271.xml)。
     * @param {string} upgradeWorkflowId 集群升级任务引导流程ID，获取方式请参见[如何获取接口URI中参数](cce_02_0271.xml)。
     * @param {string} contentType 消息体的类型（格式）
     * @param {UpgradeWorkFlowUpdateRequestBody} upgradeWorkFlowUpdateRequestBody 更新集群升级流程引导任务请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public upgradeWorkFlowUpdate(upgradeWorkFlowUpdateRequest?: UpgradeWorkFlowUpdateRequest): Promise<UpgradeWorkFlowUpdateResponse> {
        const options = ParamCreater().upgradeWorkFlowUpdate(upgradeWorkFlowUpdateRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 上传模板
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 上传模板
     * @param {string} contentType 消息体的类型（格式）
     * @param {any} content 模板包文件
     * @param {string} [parameters] 上传模板的配置参数，示例如下：\\\&quot;{\\\\\\\&quot;override\\\\\\\&quot;:true,\\\\\\\&quot;skip_lint\\\\\\\&quot;:true,\\\\\\\&quot;source\\\\\\\&quot;:\\\\\\\&quot;package\\\\\\\&quot;}\\\&quot;  - skip_lint: 是否验证上传的模板 - override: 是否覆盖已存在的模板 - visible: 模板是否可见 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public uploadChart(uploadChartRequest?: UploadChartRequest): Promise<UploadChartResponse> {
        const options = ParamCreater().uploadChart(uploadChartRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该API用于查询CCE服务当前支持的API版本信息列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询API版本信息列表
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showVersion(showVersionRequest?: ShowVersionRequest): Promise<ShowVersionResponse> {
        const options = ParamCreater().showVersion();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * 该API用于在指定集群下纳管节点。
         * &gt;集群管理的URL格式为：https://Endpoint/uri。其中uri为资源路径，也即API访问的路径。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        addNode(addNodeRequest?: AddNodeRequest) {
            const options = {
                method: "POST",
                url: "/api/v3/projects/{project_id}/clusters/{cluster_id}/nodes/add",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;
            
            let contentType;

            if (addNodeRequest !== null && addNodeRequest !== undefined) {
                if (addNodeRequest instanceof AddNodeRequest) {
                    clusterId = addNodeRequest.clusterId;
                    contentType = addNodeRequest.contentType;
                    body = addNodeRequest.body
                } else {
                    clusterId = addNodeRequest['cluster_id'];
                    contentType = addNodeRequest['Content-Type'];
                    body = addNodeRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling addNode.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 集群唤醒用于唤醒已休眠的集群，唤醒后，将继续收取控制节点资源费用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        awakeCluster(awakeClusterRequest?: AwakeClusterRequest) {
            const options = {
                method: "POST",
                url: "/api/v3/projects/{project_id}/clusters/{cluster_id}/operation/awake",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clusterId;
            
            let contentType;

            if (awakeClusterRequest !== null && awakeClusterRequest !== undefined) {
                if (awakeClusterRequest instanceof AwakeClusterRequest) {
                    clusterId = awakeClusterRequest.clusterId;
                    contentType = awakeClusterRequest.contentType;
                } else {
                    clusterId = awakeClusterRequest['cluster_id'];
                    contentType = awakeClusterRequest['Content-Type'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling awakeCluster.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该API用于批量添加指定集群的资源标签。
         * &gt; - 每个集群支持最多20个资源标签。
         * &gt; - 此接口为幂等接口：创建时，如果创建的标签已经存在（key/value均相同视为重复），默认处理成功；key相同，value不同时会覆盖原有标签。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchCreateClusterTags(batchCreateClusterTagsRequest?: BatchCreateClusterTagsRequest) {
            const options = {
                method: "POST",
                url: "/api/v3/projects/{project_id}/clusters/{cluster_id}/tags/create",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;
            
            let contentType;

            if (batchCreateClusterTagsRequest !== null && batchCreateClusterTagsRequest !== undefined) {
                if (batchCreateClusterTagsRequest instanceof BatchCreateClusterTagsRequest) {
                    clusterId = batchCreateClusterTagsRequest.clusterId;
                    contentType = batchCreateClusterTagsRequest.contentType;
                    body = batchCreateClusterTagsRequest.body
                } else {
                    clusterId = batchCreateClusterTagsRequest['cluster_id'];
                    contentType = batchCreateClusterTagsRequest['Content-Type'];
                    body = batchCreateClusterTagsRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling batchCreateClusterTags.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该API用于批量删除指定集群的资源标签。
         * &gt; - 此接口为幂等接口：删除时，如果删除的标签key不存在，默认处理成功。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchDeleteClusterTags(batchDeleteClusterTagsRequest?: BatchDeleteClusterTagsRequest) {
            const options = {
                method: "POST",
                url: "/api/v3/projects/{project_id}/clusters/{cluster_id}/tags/delete",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;
            
            let contentType;

            if (batchDeleteClusterTagsRequest !== null && batchDeleteClusterTagsRequest !== undefined) {
                if (batchDeleteClusterTagsRequest instanceof BatchDeleteClusterTagsRequest) {
                    clusterId = batchDeleteClusterTagsRequest.clusterId;
                    contentType = batchDeleteClusterTagsRequest.contentType;
                    body = batchDeleteClusterTagsRequest.body
                } else {
                    clusterId = batchDeleteClusterTagsRequest['cluster_id'];
                    contentType = batchDeleteClusterTagsRequest['Content-Type'];
                    body = batchDeleteClusterTagsRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling batchDeleteClusterTags.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 继续执行被暂停的集群升级任务。
         * &gt; - 集群升级涉及多维度的组件升级操作，强烈建议统一通过CCE控制台执行交互式升级，降低集群升级过程的业务意外受损风险；
         * &gt; - 当前集群升级相关接口受限开放。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        continueUpgradeClusterTask(continueUpgradeClusterTaskRequest?: ContinueUpgradeClusterTaskRequest) {
            const options = {
                method: "POST",
                url: "/api/v3/projects/{project_id}/clusters/{cluster_id}/operation/upgrade/continue",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clusterId;

            if (continueUpgradeClusterTaskRequest !== null && continueUpgradeClusterTaskRequest !== undefined) {
                if (continueUpgradeClusterTaskRequest instanceof ContinueUpgradeClusterTaskRequest) {
                    clusterId = continueUpgradeClusterTaskRequest.clusterId;
                } else {
                    clusterId = continueUpgradeClusterTaskRequest['cluster_id'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling continueUpgradeClusterTask.');
            }

            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据提供的插件模板，安装插件实例。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createAddonInstance(createAddonInstanceRequest?: CreateAddonInstanceRequest) {
            const options = {
                method: "POST",
                url: "/api/v3/addons",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let contentType;

            if (createAddonInstanceRequest !== null && createAddonInstanceRequest !== undefined) {
                if (createAddonInstanceRequest instanceof CreateAddonInstanceRequest) {
                    contentType = createAddonInstanceRequest.contentType;
                    body = createAddonInstanceRequest.body
                } else {
                    contentType = createAddonInstanceRequest['Content-Type'];
                    body = createAddonInstanceRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
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
         * 该API用于在指定的Namespace下通过云存储服务中的云存储（EVS、SFS、OBS）去创建PVC（PersistentVolumeClaim）。该API待废弃，请使用Kubernetes PVC相关接口。
         * 
         * 
         * &gt;存储管理的URL格式为：https://{clusterid}.Endpoint/uri。其中{clusterid}为集群ID，uri为资源路径，也即API访问的路径。如果使用https://Endpoint/uri，则必须指定请求header中的X-Cluster-ID参数。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createCloudPersistentVolumeClaims(createCloudPersistentVolumeClaimsRequest?: CreateCloudPersistentVolumeClaimsRequest) {
            const options = {
                method: "POST",
                url: "/api/v1/namespaces/{namespace}/cloudpersistentvolumeclaims",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let namespace;
            
            let contentType;
            
            let xClusterID;

            if (createCloudPersistentVolumeClaimsRequest !== null && createCloudPersistentVolumeClaimsRequest !== undefined) {
                if (createCloudPersistentVolumeClaimsRequest instanceof CreateCloudPersistentVolumeClaimsRequest) {
                    namespace = createCloudPersistentVolumeClaimsRequest.namespace;
                    contentType = createCloudPersistentVolumeClaimsRequest.contentType;
                    body = createCloudPersistentVolumeClaimsRequest.body
                    xClusterID = createCloudPersistentVolumeClaimsRequest.xClusterID;
                } else {
                    namespace = createCloudPersistentVolumeClaimsRequest['namespace'];
                    contentType = createCloudPersistentVolumeClaimsRequest['Content-Type'];
                    body = createCloudPersistentVolumeClaimsRequest['body'];
                    xClusterID = createCloudPersistentVolumeClaimsRequest['X-Cluster-ID'];
                }
            }

        
            if (namespace === null || namespace === undefined) {
            throw new RequiredError('namespace','Required parameter namespace was null or undefined when calling createCloudPersistentVolumeClaims.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            if (xClusterID !== undefined && xClusterID !== null) {
                localVarHeaderParameter['X-Cluster-ID'] = String(xClusterID);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'namespace': namespace, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该API用于创建一个空集群（即只有控制节点Master，没有工作节点Node）。请在调用本接口完成集群创建之后，通过[创建节点](cce_02_0242.xml)添加节点。
         * 
         * 
         * &gt;   - 集群管理的URL格式为：https://Endpoint/uri。其中uri为资源路径，也即API访问的路径。
         * &gt;   - 调用该接口创建集群时，默认不安装ICAgent，若需安装ICAgent，可在请求Body参数的annotations中加入\&quot;cluster.install.addons.external/install\&quot;:\&quot;[{\&quot;addonTemplateName\&quot;:\&quot;icagent\&quot;}]\&quot;的集群注解，将在创建集群时自动安装ICAgent。ICAgent是应用性能管理APM的采集代理，运行在应用所在的服务器上，用于实时采集探针所获取的数据，安装ICAgent是使用应用性能管理APM的前提。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createCluster(createClusterRequest?: CreateClusterRequest) {
            const options = {
                method: "POST",
                url: "/api/v3/projects/{project_id}/clusters",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let contentType;

            if (createClusterRequest !== null && createClusterRequest !== undefined) {
                if (createClusterRequest instanceof CreateClusterRequest) {
                    contentType = createClusterRequest.contentType;
                    body = createClusterRequest.body
                } else {
                    contentType = createClusterRequest['Content-Type'];
                    body = createClusterRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
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
         * 集群备份
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createClusterMasterSnapshot(createClusterMasterSnapshotRequest?: CreateClusterMasterSnapshotRequest) {
            const options = {
                method: "POST",
                url: "/api/v3.1/projects/{project_id}/clusters/{cluster_id}/operation/snapshot",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clusterId;

            if (createClusterMasterSnapshotRequest !== null && createClusterMasterSnapshotRequest !== undefined) {
                if (createClusterMasterSnapshotRequest instanceof CreateClusterMasterSnapshotRequest) {
                    clusterId = createClusterMasterSnapshotRequest.clusterId;
                } else {
                    clusterId = createClusterMasterSnapshotRequest['cluster_id'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling createClusterMasterSnapshot.');
            }

            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该API用于获取指定集群的证书信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createKubernetesClusterCert(createKubernetesClusterCertRequest?: CreateKubernetesClusterCertRequest) {
            const options = {
                method: "POST",
                url: "/api/v3/projects/{project_id}/clusters/{cluster_id}/clustercert",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;
            
            let contentType;

            if (createKubernetesClusterCertRequest !== null && createKubernetesClusterCertRequest !== undefined) {
                if (createKubernetesClusterCertRequest instanceof CreateKubernetesClusterCertRequest) {
                    clusterId = createKubernetesClusterCertRequest.clusterId;
                    contentType = createKubernetesClusterCertRequest.contentType;
                    body = createKubernetesClusterCertRequest.body
                } else {
                    clusterId = createKubernetesClusterCertRequest['cluster_id'];
                    contentType = createKubernetesClusterCertRequest['Content-Type'];
                    body = createKubernetesClusterCertRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling createKubernetesClusterCert.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该API用于在指定集群下创建节点。
         * &gt; - 若无集群，请先[创建集群](cce_02_0236.xml)。
         * &gt; - 集群管理的URL格式为：https://Endpoint/uri。其中uri为资源路径，也即API访问的路径。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createNode(createNodeRequest?: CreateNodeRequest) {
            const options = {
                method: "POST",
                url: "/api/v3/projects/{project_id}/clusters/{cluster_id}/nodes",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let clusterId;
            
            let contentType;
            
            let nodepoolScaleUp;

            if (createNodeRequest !== null && createNodeRequest !== undefined) {
                if (createNodeRequest instanceof CreateNodeRequest) {
                    clusterId = createNodeRequest.clusterId;
                    contentType = createNodeRequest.contentType;
                    body = createNodeRequest.body
                    nodepoolScaleUp = createNodeRequest.nodepoolScaleUp;
                } else {
                    clusterId = createNodeRequest['cluster_id'];
                    contentType = createNodeRequest['Content-Type'];
                    body = createNodeRequest['body'];
                    nodepoolScaleUp = createNodeRequest['nodepoolScaleUp'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling createNode.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (nodepoolScaleUp !== null && nodepoolScaleUp !== undefined) {
                localVarQueryParameter['nodepoolScaleUp'] = nodepoolScaleUp;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该API用于在指定集群下创建节点池。仅支持集群在处于可用、扩容、缩容状态时调用。
         * 
         * 1.21版本的集群创建节点池时支持绑定安全组，每个节点池最多绑定五个安全组。
         * 
         * 更新节点池的安全组后，只针对新创的pod生效，建议驱逐节点上原有的pod。
         * 
         * &gt; 若无集群，请先[创建集群](cce_02_0236.xml)。
         * &gt; 集群管理的URL格式为：https://Endpoint/uri。其中uri为资源路径，也即API访问的路径
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createNodePool(createNodePoolRequest?: CreateNodePoolRequest) {
            const options = {
                method: "POST",
                url: "/api/v3/projects/{project_id}/clusters/{cluster_id}/nodepools",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;
            
            let contentType;

            if (createNodePoolRequest !== null && createNodePoolRequest !== undefined) {
                if (createNodePoolRequest instanceof CreateNodePoolRequest) {
                    clusterId = createNodePoolRequest.clusterId;
                    contentType = createNodePoolRequest.contentType;
                    body = createNodePoolRequest.body
                } else {
                    clusterId = createNodePoolRequest['cluster_id'];
                    contentType = createNodePoolRequest['Content-Type'];
                    body = createNodePoolRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling createNodePool.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建分区
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createPartition(createPartitionRequest?: CreatePartitionRequest) {
            const options = {
                method: "POST",
                url: "/api/v3/projects/{project_id}/clusters/{cluster_id}/partitions",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;

            if (createPartitionRequest !== null && createPartitionRequest !== undefined) {
                if (createPartitionRequest instanceof CreatePartitionRequest) {
                    clusterId = createPartitionRequest.clusterId;
                    body = createPartitionRequest.body
                } else {
                    clusterId = createPartitionRequest['cluster_id'];
                    body = createPartitionRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling createPartition.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 集群升级后确认，该接口建议配合Console使用，主要用于升级步骤完成后，客户确认集群状态和业务正常后做反馈。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createPostCheck(createPostCheckRequest?: CreatePostCheckRequest) {
            const options = {
                method: "POST",
                url: "/api/v3/projects/{project_id}/clusters/{cluster_id}/operation/postcheck",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;

            if (createPostCheckRequest !== null && createPostCheckRequest !== undefined) {
                if (createPostCheckRequest instanceof CreatePostCheckRequest) {
                    clusterId = createPostCheckRequest.clusterId;
                    body = createPostCheckRequest.body
                } else {
                    clusterId = createPostCheckRequest['cluster_id'];
                    body = createPostCheckRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling createPostCheck.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 集群升级前检查
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createPreCheck(createPreCheckRequest?: CreatePreCheckRequest) {
            const options = {
                method: "POST",
                url: "/api/v3/projects/{project_id}/clusters/{cluster_id}/operation/precheck",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;

            if (createPreCheckRequest !== null && createPreCheckRequest !== undefined) {
                if (createPreCheckRequest instanceof CreatePreCheckRequest) {
                    clusterId = createPreCheckRequest.clusterId;
                    body = createPreCheckRequest.body
                } else {
                    clusterId = createPreCheckRequest['cluster_id'];
                    body = createPreCheckRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling createPreCheck.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建模板实例
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createRelease(createReleaseRequest?: CreateReleaseRequest) {
            const options = {
                method: "POST",
                url: "/cce/cam/v3/clusters/{cluster_id}/releases",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let contentType;
            
            let clusterId;

            if (createReleaseRequest !== null && createReleaseRequest !== undefined) {
                if (createReleaseRequest instanceof CreateReleaseRequest) {
                    contentType = createReleaseRequest.contentType;
                    clusterId = createReleaseRequest.clusterId;
                    body = createReleaseRequest.body
                } else {
                    contentType = createReleaseRequest['Content-Type'];
                    clusterId = createReleaseRequest['cluster_id'];
                    body = createReleaseRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling createRelease.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该API用于创建一个集群升级流程引导任务。请在调用本接口完成引导任务创建之后，通过集群升级前检查开始检查任务。
         * 升级流程任务用于控制集群升级任务的执行流程，执行流程为 升级前检查 &#x3D;&gt; 集群升级 &#x3D;&gt; 升级后检查。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createUpgradeWorkFlow(createUpgradeWorkFlowRequest?: CreateUpgradeWorkFlowRequest) {
            const options = {
                method: "POST",
                url: "/api/v3/projects/{project_id}/clusters/{cluster_id}/operation/upgradeworkflows",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;
            
            let contentType;

            if (createUpgradeWorkFlowRequest !== null && createUpgradeWorkFlowRequest !== undefined) {
                if (createUpgradeWorkFlowRequest instanceof CreateUpgradeWorkFlowRequest) {
                    clusterId = createUpgradeWorkFlowRequest.clusterId;
                    contentType = createUpgradeWorkFlowRequest.contentType;
                    body = createUpgradeWorkFlowRequest.body
                } else {
                    clusterId = createUpgradeWorkFlowRequest['cluster_id'];
                    contentType = createUpgradeWorkFlowRequest['Content-Type'];
                    body = createUpgradeWorkFlowRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling createUpgradeWorkFlow.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除插件实例的功能。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteAddonInstance(deleteAddonInstanceRequest?: DeleteAddonInstanceRequest) {
            const options = {
                method: "DELETE",
                url: "/api/v3/addons/{id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let contentType;
            
            let id;
            
            let clusterId;

            if (deleteAddonInstanceRequest !== null && deleteAddonInstanceRequest !== undefined) {
                if (deleteAddonInstanceRequest instanceof DeleteAddonInstanceRequest) {
                    contentType = deleteAddonInstanceRequest.contentType;
                    id = deleteAddonInstanceRequest.id;
                    clusterId = deleteAddonInstanceRequest.clusterId;
                } else {
                    contentType = deleteAddonInstanceRequest['Content-Type'];
                    id = deleteAddonInstanceRequest['id'];
                    clusterId = deleteAddonInstanceRequest['cluster_id'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling deleteAddonInstance.');
            }
            if (clusterId !== null && clusterId !== undefined) {
                localVarQueryParameter['cluster_id'] = clusterId;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除模板
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteChart(deleteChartRequest?: DeleteChartRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/charts/{chart_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let chartId;
            
            let contentType;

            if (deleteChartRequest !== null && deleteChartRequest !== undefined) {
                if (deleteChartRequest instanceof DeleteChartRequest) {
                    chartId = deleteChartRequest.chartId;
                    contentType = deleteChartRequest.contentType;
                } else {
                    chartId = deleteChartRequest['chart_id'];
                    contentType = deleteChartRequest['Content-Type'];
                }
            }

        
            if (chartId === null || chartId === undefined) {
            throw new RequiredError('chartId','Required parameter chartId was null or undefined when calling deleteChart.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.pathParams = { 'chart_id': chartId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该API用于删除指定Namespace下的PVC（PersistentVolumeClaim）对象，并可以选择保留后端的云存储。该API待废弃，请使用Kubernetes PVC相关接口。
         * &gt;存储管理的URL格式为：https://{clusterid}.Endpoint/uri。其中{clusterid}为集群ID，uri为资源路径，也即API访问的路径。如果使用https://Endpoint/uri，则必须指定请求header中的X-Cluster-ID参数。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteCloudPersistentVolumeClaims(deleteCloudPersistentVolumeClaimsRequest?: DeleteCloudPersistentVolumeClaimsRequest) {
            const options = {
                method: "DELETE",
                url: "/api/v1/namespaces/{namespace}/cloudpersistentvolumeclaims/{name}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let name;
            
            let namespace;
            
            let contentType;
            
            let deleteVolume;
            
            let storageType;
            
            let xClusterID;

            if (deleteCloudPersistentVolumeClaimsRequest !== null && deleteCloudPersistentVolumeClaimsRequest !== undefined) {
                if (deleteCloudPersistentVolumeClaimsRequest instanceof DeleteCloudPersistentVolumeClaimsRequest) {
                    name = deleteCloudPersistentVolumeClaimsRequest.name;
                    namespace = deleteCloudPersistentVolumeClaimsRequest.namespace;
                    contentType = deleteCloudPersistentVolumeClaimsRequest.contentType;
                    deleteVolume = deleteCloudPersistentVolumeClaimsRequest.deleteVolume;
                    storageType = deleteCloudPersistentVolumeClaimsRequest.storageType;
                    xClusterID = deleteCloudPersistentVolumeClaimsRequest.xClusterID;
                } else {
                    name = deleteCloudPersistentVolumeClaimsRequest['name'];
                    namespace = deleteCloudPersistentVolumeClaimsRequest['namespace'];
                    contentType = deleteCloudPersistentVolumeClaimsRequest['Content-Type'];
                    deleteVolume = deleteCloudPersistentVolumeClaimsRequest['deleteVolume'];
                    storageType = deleteCloudPersistentVolumeClaimsRequest['storageType'];
                    xClusterID = deleteCloudPersistentVolumeClaimsRequest['X-Cluster-ID'];
                }
            }

        
            if (name === null || name === undefined) {
            throw new RequiredError('name','Required parameter name was null or undefined when calling deleteCloudPersistentVolumeClaims.');
            }
            if (namespace === null || namespace === undefined) {
            throw new RequiredError('namespace','Required parameter namespace was null or undefined when calling deleteCloudPersistentVolumeClaims.');
            }
            if (deleteVolume !== null && deleteVolume !== undefined) {
                localVarQueryParameter['deleteVolume'] = deleteVolume;
            }
            if (storageType !== null && storageType !== undefined) {
                localVarQueryParameter['storageType'] = storageType;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            if (xClusterID !== undefined && xClusterID !== null) {
                localVarHeaderParameter['X-Cluster-ID'] = String(xClusterID);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'name': name,'namespace': namespace, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该API用于删除一个指定的集群。
         * &gt;集群管理的URL格式为：https://Endpoint/uri。其中uri为资源路径，也即API访问的路径。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteCluster(deleteClusterRequest?: DeleteClusterRequest) {
            const options = {
                method: "DELETE",
                url: "/api/v3/projects/{project_id}/clusters/{cluster_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let clusterId;
            
            let contentType;
            
            let deleteEfs;
            
            let deleteEni;
            
            let deleteEvs;
            
            let deleteNet;
            
            let deleteObs;
            
            let deleteSfs;
            
            let deleteSfs30;
            
            let ltsReclaimPolicy;
            
            let tobedeleted;
            
            let ondemandNodePolicy;
            
            let periodicNodePolicy;

            if (deleteClusterRequest !== null && deleteClusterRequest !== undefined) {
                if (deleteClusterRequest instanceof DeleteClusterRequest) {
                    clusterId = deleteClusterRequest.clusterId;
                    contentType = deleteClusterRequest.contentType;
                    deleteEfs = deleteClusterRequest.deleteEfs;
                    deleteEni = deleteClusterRequest.deleteEni;
                    deleteEvs = deleteClusterRequest.deleteEvs;
                    deleteNet = deleteClusterRequest.deleteNet;
                    deleteObs = deleteClusterRequest.deleteObs;
                    deleteSfs = deleteClusterRequest.deleteSfs;
                    deleteSfs30 = deleteClusterRequest.deleteSfs30;
                    ltsReclaimPolicy = deleteClusterRequest.ltsReclaimPolicy;
                    tobedeleted = deleteClusterRequest.tobedeleted;
                    ondemandNodePolicy = deleteClusterRequest.ondemandNodePolicy;
                    periodicNodePolicy = deleteClusterRequest.periodicNodePolicy;
                } else {
                    clusterId = deleteClusterRequest['cluster_id'];
                    contentType = deleteClusterRequest['Content-Type'];
                    deleteEfs = deleteClusterRequest['delete_efs'];
                    deleteEni = deleteClusterRequest['delete_eni'];
                    deleteEvs = deleteClusterRequest['delete_evs'];
                    deleteNet = deleteClusterRequest['delete_net'];
                    deleteObs = deleteClusterRequest['delete_obs'];
                    deleteSfs = deleteClusterRequest['delete_sfs'];
                    deleteSfs30 = deleteClusterRequest['delete_sfs30'];
                    ltsReclaimPolicy = deleteClusterRequest['lts_reclaim_policy'];
                    tobedeleted = deleteClusterRequest['tobedeleted'];
                    ondemandNodePolicy = deleteClusterRequest['ondemand_node_policy'];
                    periodicNodePolicy = deleteClusterRequest['periodic_node_policy'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling deleteCluster.');
            }
            if (deleteEfs !== null && deleteEfs !== undefined) {
                localVarQueryParameter['delete_efs'] = deleteEfs;
            }
            if (deleteEni !== null && deleteEni !== undefined) {
                localVarQueryParameter['delete_eni'] = deleteEni;
            }
            if (deleteEvs !== null && deleteEvs !== undefined) {
                localVarQueryParameter['delete_evs'] = deleteEvs;
            }
            if (deleteNet !== null && deleteNet !== undefined) {
                localVarQueryParameter['delete_net'] = deleteNet;
            }
            if (deleteObs !== null && deleteObs !== undefined) {
                localVarQueryParameter['delete_obs'] = deleteObs;
            }
            if (deleteSfs !== null && deleteSfs !== undefined) {
                localVarQueryParameter['delete_sfs'] = deleteSfs;
            }
            if (deleteSfs30 !== null && deleteSfs30 !== undefined) {
                localVarQueryParameter['delete_sfs30'] = deleteSfs30;
            }
            if (ltsReclaimPolicy !== null && ltsReclaimPolicy !== undefined) {
                localVarQueryParameter['lts_reclaim_policy'] = ltsReclaimPolicy;
            }
            if (tobedeleted !== null && tobedeleted !== undefined) {
                localVarQueryParameter['tobedeleted'] = tobedeleted;
            }
            if (ondemandNodePolicy !== null && ondemandNodePolicy !== undefined) {
                localVarQueryParameter['ondemand_node_policy'] = ondemandNodePolicy;
            }
            if (periodicNodePolicy !== null && periodicNodePolicy !== undefined) {
                localVarQueryParameter['periodic_node_policy'] = periodicNodePolicy;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该API用于删除指定的节点。
         * &gt;集群管理的URL格式为：https://Endpoint/uri。其中uri为资源路径，也即API访问的路径
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteNode(deleteNodeRequest?: DeleteNodeRequest) {
            const options = {
                method: "DELETE",
                url: "/api/v3/projects/{project_id}/clusters/{cluster_id}/nodes/{node_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let clusterId;
            
            let nodeId;
            
            let contentType;
            
            let nodepoolScaleDown;

            if (deleteNodeRequest !== null && deleteNodeRequest !== undefined) {
                if (deleteNodeRequest instanceof DeleteNodeRequest) {
                    clusterId = deleteNodeRequest.clusterId;
                    nodeId = deleteNodeRequest.nodeId;
                    contentType = deleteNodeRequest.contentType;
                    nodepoolScaleDown = deleteNodeRequest.nodepoolScaleDown;
                } else {
                    clusterId = deleteNodeRequest['cluster_id'];
                    nodeId = deleteNodeRequest['node_id'];
                    contentType = deleteNodeRequest['Content-Type'];
                    nodepoolScaleDown = deleteNodeRequest['nodepoolScaleDown'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling deleteNode.');
            }
            if (nodeId === null || nodeId === undefined) {
            throw new RequiredError('nodeId','Required parameter nodeId was null or undefined when calling deleteNode.');
            }
            if (nodepoolScaleDown !== null && nodepoolScaleDown !== undefined) {
                localVarQueryParameter['nodepoolScaleDown'] = nodepoolScaleDown;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'cluster_id': clusterId,'node_id': nodeId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该API用于删除指定的节点池。
         * &gt; 集群管理的URL格式为：https://Endpoint/uri。其中uri为资源路径，也即API访问的路径
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteNodePool(deleteNodePoolRequest?: DeleteNodePoolRequest) {
            const options = {
                method: "DELETE",
                url: "/api/v3/projects/{project_id}/clusters/{cluster_id}/nodepools/{nodepool_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clusterId;
            
            let nodepoolId;
            
            let contentType;

            if (deleteNodePoolRequest !== null && deleteNodePoolRequest !== undefined) {
                if (deleteNodePoolRequest instanceof DeleteNodePoolRequest) {
                    clusterId = deleteNodePoolRequest.clusterId;
                    nodepoolId = deleteNodePoolRequest.nodepoolId;
                    contentType = deleteNodePoolRequest.contentType;
                } else {
                    clusterId = deleteNodePoolRequest['cluster_id'];
                    nodepoolId = deleteNodePoolRequest['nodepool_id'];
                    contentType = deleteNodePoolRequest['Content-Type'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling deleteNodePool.');
            }
            if (nodepoolId === null || nodepoolId === undefined) {
            throw new RequiredError('nodepoolId','Required parameter nodepoolId was null or undefined when calling deleteNodePool.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.pathParams = { 'cluster_id': clusterId,'nodepool_id': nodepoolId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除指定模板实例
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteRelease(deleteReleaseRequest?: DeleteReleaseRequest) {
            const options = {
                method: "DELETE",
                url: "/cce/cam/v3/clusters/{cluster_id}/namespace/{namespace}/releases/{name}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let name;
            
            let namespace;
            
            let contentType;
            
            let clusterId;

            if (deleteReleaseRequest !== null && deleteReleaseRequest !== undefined) {
                if (deleteReleaseRequest instanceof DeleteReleaseRequest) {
                    name = deleteReleaseRequest.name;
                    namespace = deleteReleaseRequest.namespace;
                    contentType = deleteReleaseRequest.contentType;
                    clusterId = deleteReleaseRequest.clusterId;
                } else {
                    name = deleteReleaseRequest['name'];
                    namespace = deleteReleaseRequest['namespace'];
                    contentType = deleteReleaseRequest['Content-Type'];
                    clusterId = deleteReleaseRequest['cluster_id'];
                }
            }

        
            if (name === null || name === undefined) {
            throw new RequiredError('name','Required parameter name was null or undefined when calling deleteRelease.');
            }
            if (namespace === null || namespace === undefined) {
            throw new RequiredError('namespace','Required parameter namespace was null or undefined when calling deleteRelease.');
            }
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling deleteRelease.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.pathParams = { 'name': name,'namespace': namespace,'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 下载模板
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        downloadChart(downloadChartRequest?: DownloadChartRequest) {
            const options = {
                method: "GET",
                url: "/v2/charts/{chart_id}/archive",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let chartId;
            
            let contentType;

            if (downloadChartRequest !== null && downloadChartRequest !== undefined) {
                if (downloadChartRequest instanceof DownloadChartRequest) {
                    chartId = downloadChartRequest.chartId;
                    contentType = downloadChartRequest.contentType;
                } else {
                    chartId = downloadChartRequest['chart_id'];
                    contentType = downloadChartRequest['Content-Type'];
                }
            }

        
            if (chartId === null || chartId === undefined) {
            throw new RequiredError('chartId','Required parameter chartId was null or undefined when calling downloadChart.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.pathParams = { 'chart_id': chartId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 集群休眠用于将运行中的集群置于休眠状态，休眠后，将不再收取控制节点资源费用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        hibernateCluster(hibernateClusterRequest?: HibernateClusterRequest) {
            const options = {
                method: "POST",
                url: "/api/v3/projects/{project_id}/clusters/{cluster_id}/operation/hibernate",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clusterId;
            
            let contentType;

            if (hibernateClusterRequest !== null && hibernateClusterRequest !== undefined) {
                if (hibernateClusterRequest instanceof HibernateClusterRequest) {
                    clusterId = hibernateClusterRequest.clusterId;
                    contentType = hibernateClusterRequest.contentType;
                } else {
                    clusterId = hibernateClusterRequest['cluster_id'];
                    contentType = hibernateClusterRequest['Content-Type'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling hibernateCluster.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取集群所有已安装插件实例
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAddonInstances(listAddonInstancesRequest?: ListAddonInstancesRequest) {
            const options = {
                method: "GET",
                url: "/api/v3/addons",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let contentType;
            
            let clusterId;

            if (listAddonInstancesRequest !== null && listAddonInstancesRequest !== undefined) {
                if (listAddonInstancesRequest instanceof ListAddonInstancesRequest) {
                    contentType = listAddonInstancesRequest.contentType;
                    clusterId = listAddonInstancesRequest.clusterId;
                } else {
                    contentType = listAddonInstancesRequest['Content-Type'];
                    clusterId = listAddonInstancesRequest['cluster_id'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
                throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling listAddonInstances.');
            }
            if (clusterId !== null && clusterId !== undefined) {
                localVarQueryParameter['cluster_id'] = clusterId;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 插件模板查询接口，查询插件信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAddonTemplates(listAddonTemplatesRequest?: ListAddonTemplatesRequest) {
            const options = {
                method: "GET",
                url: "/api/v3/addontemplates",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let contentType;
            
            let addonTemplateName;

            if (listAddonTemplatesRequest !== null && listAddonTemplatesRequest !== undefined) {
                if (listAddonTemplatesRequest instanceof ListAddonTemplatesRequest) {
                    contentType = listAddonTemplatesRequest.contentType;
                    addonTemplateName = listAddonTemplatesRequest.addonTemplateName;
                } else {
                    contentType = listAddonTemplatesRequest['Content-Type'];
                    addonTemplateName = listAddonTemplatesRequest['addon_template_name'];
                }
            }

        
            if (addonTemplateName !== null && addonTemplateName !== undefined) {
                localVarQueryParameter['addon_template_name'] = addonTemplateName;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取模板列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listCharts(listChartsRequest?: ListChartsRequest) {
            const options = {
                method: "GET",
                url: "/v2/charts",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let contentType;

            if (listChartsRequest !== null && listChartsRequest !== undefined) {
                if (listChartsRequest instanceof ListChartsRequest) {
                    contentType = listChartsRequest.contentType;
                } else {
                    contentType = listChartsRequest['Content-Type'];
                }
            }

        
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取集群备份任务详情列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listClusterMasterSnapshotTasks(listClusterMasterSnapshotTasksRequest?: ListClusterMasterSnapshotTasksRequest) {
            const options = {
                method: "GET",
                url: "/api/v3.1/projects/{project_id}/clusters/{cluster_id}/operation/snapshot/tasks",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clusterId;

            if (listClusterMasterSnapshotTasksRequest !== null && listClusterMasterSnapshotTasksRequest !== undefined) {
                if (listClusterMasterSnapshotTasksRequest instanceof ListClusterMasterSnapshotTasksRequest) {
                    clusterId = listClusterMasterSnapshotTasksRequest.clusterId;
                } else {
                    clusterId = listClusterMasterSnapshotTasksRequest['cluster_id'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling listClusterMasterSnapshotTasks.');
            }

            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取集群升级特性开关配置
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listClusterUpgradeFeatureGates(listClusterUpgradeFeatureGatesRequest?: ListClusterUpgradeFeatureGatesRequest) {
            const options = {
                method: "GET",
                url: "/api/v3/clusterupgradefeaturegates",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let contentType;

            if (listClusterUpgradeFeatureGatesRequest !== null && listClusterUpgradeFeatureGatesRequest !== undefined) {
                if (listClusterUpgradeFeatureGatesRequest instanceof ListClusterUpgradeFeatureGatesRequest) {
                    contentType = listClusterUpgradeFeatureGatesRequest.contentType;
                } else {
                    contentType = listClusterUpgradeFeatureGatesRequest['Content-Type'];
                }
            }

        
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取集群升级路径
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listClusterUpgradePaths(listClusterUpgradePathsRequest?: ListClusterUpgradePathsRequest) {
            const options = {
                method: "GET",
                url: "/api/v3/clusterupgradepaths",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let contentType;

            if (listClusterUpgradePathsRequest !== null && listClusterUpgradePathsRequest !== undefined) {
                if (listClusterUpgradePathsRequest instanceof ListClusterUpgradePathsRequest) {
                    contentType = listClusterUpgradePathsRequest.contentType;
                } else {
                    contentType = listClusterUpgradePathsRequest['Content-Type'];
                }
            }

        
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该API用于获取指定项目下所有集群的详细信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listClusters(listClustersRequest?: ListClustersRequest) {
            const options = {
                method: "GET",
                url: "/api/v3/projects/{project_id}/clusters",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let contentType;
            
            let detail;
            
            let status;
            
            let type;
            
            let version;

            if (listClustersRequest !== null && listClustersRequest !== undefined) {
                if (listClustersRequest instanceof ListClustersRequest) {
                    contentType = listClustersRequest.contentType;
                    detail = listClustersRequest.detail;
                    status = listClustersRequest.status;
                    type = listClustersRequest.type;
                    version = listClustersRequest.version;
                } else {
                    contentType = listClustersRequest['Content-Type'];
                    detail = listClustersRequest['detail'];
                    status = listClustersRequest['status'];
                    type = listClustersRequest['type'];
                    version = listClustersRequest['version'];
                }
            }

        
            if (detail !== null && detail !== undefined) {
                localVarQueryParameter['detail'] = detail;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }
            if (version !== null && version !== undefined) {
                localVarQueryParameter['version'] = version;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该API用于获取集群下所有节点池。
         * &gt; - 集群管理的URL格式为：https://Endpoint/uri。其中uri为资源路径，也即API访问的路径
         * &gt; - nodepool是集群中具有相同配置的节点实例的子集。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listNodePools(listNodePoolsRequest?: ListNodePoolsRequest) {
            const options = {
                method: "GET",
                url: "/api/v3/projects/{project_id}/clusters/{cluster_id}/nodepools",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let clusterId;
            
            let contentType;
            
            let showDefaultNodePool;

            if (listNodePoolsRequest !== null && listNodePoolsRequest !== undefined) {
                if (listNodePoolsRequest instanceof ListNodePoolsRequest) {
                    clusterId = listNodePoolsRequest.clusterId;
                    contentType = listNodePoolsRequest.contentType;
                    showDefaultNodePool = listNodePoolsRequest.showDefaultNodePool;
                } else {
                    clusterId = listNodePoolsRequest['cluster_id'];
                    contentType = listNodePoolsRequest['Content-Type'];
                    showDefaultNodePool = listNodePoolsRequest['showDefaultNodePool'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling listNodePools.');
            }
            if (showDefaultNodePool !== null && showDefaultNodePool !== undefined) {
                localVarQueryParameter['showDefaultNodePool'] = showDefaultNodePool;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该API用于通过集群ID获取指定集群下所有节点的详细信息。
         * &gt;集群管理的URL格式为：https://Endpoint/uri。其中uri为资源路径，也即API访问的路径。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listNodes(listNodesRequest?: ListNodesRequest) {
            const options = {
                method: "GET",
                url: "/api/v3/projects/{project_id}/clusters/{cluster_id}/nodes",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clusterId;
            
            let contentType;

            if (listNodesRequest !== null && listNodesRequest !== undefined) {
                if (listNodesRequest instanceof ListNodesRequest) {
                    clusterId = listNodesRequest.clusterId;
                    contentType = listNodesRequest.contentType;
                } else {
                    clusterId = listNodesRequest['cluster_id'];
                    contentType = listNodesRequest['Content-Type'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling listNodes.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取分区列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listPartitions(listPartitionsRequest?: ListPartitionsRequest) {
            const options = {
                method: "GET",
                url: "/api/v3/projects/{project_id}/clusters/{cluster_id}/partitions",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clusterId;

            if (listPartitionsRequest !== null && listPartitionsRequest !== undefined) {
                if (listPartitionsRequest instanceof ListPartitionsRequest) {
                    clusterId = listPartitionsRequest.clusterId;
                } else {
                    clusterId = listPartitionsRequest['cluster_id'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling listPartitions.');
            }

            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取集群升级前检查任务详情列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listPreCheckTasks(listPreCheckTasksRequest?: ListPreCheckTasksRequest) {
            const options = {
                method: "GET",
                url: "/api/v3/projects/{project_id}/clusters/{cluster_id}/operation/precheck/tasks",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clusterId;

            if (listPreCheckTasksRequest !== null && listPreCheckTasksRequest !== undefined) {
                if (listPreCheckTasksRequest instanceof ListPreCheckTasksRequest) {
                    clusterId = listPreCheckTasksRequest.clusterId;
                } else {
                    clusterId = listPreCheckTasksRequest['cluster_id'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling listPreCheckTasks.');
            }

            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取模板实例列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listReleases(listReleasesRequest?: ListReleasesRequest) {
            const options = {
                method: "GET",
                url: "/cce/cam/v3/clusters/{cluster_id}/releases",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let contentType;
            
            let clusterId;
            
            let chartId;
            
            let namespace;

            if (listReleasesRequest !== null && listReleasesRequest !== undefined) {
                if (listReleasesRequest instanceof ListReleasesRequest) {
                    contentType = listReleasesRequest.contentType;
                    clusterId = listReleasesRequest.clusterId;
                    chartId = listReleasesRequest.chartId;
                    namespace = listReleasesRequest.namespace;
                } else {
                    contentType = listReleasesRequest['Content-Type'];
                    clusterId = listReleasesRequest['cluster_id'];
                    chartId = listReleasesRequest['chart_id'];
                    namespace = listReleasesRequest['namespace'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling listReleases.');
            }
            if (chartId !== null && chartId !== undefined) {
                localVarQueryParameter['chart_id'] = chartId;
            }
            if (namespace !== null && namespace !== undefined) {
                localVarQueryParameter['namespace'] = namespace;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取集群升级任务详情列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listUpgradeClusterTasks(listUpgradeClusterTasksRequest?: ListUpgradeClusterTasksRequest) {
            const options = {
                method: "GET",
                url: "/api/v3/projects/{project_id}/clusters/{cluster_id}/operation/upgrade/tasks",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clusterId;

            if (listUpgradeClusterTasksRequest !== null && listUpgradeClusterTasksRequest !== undefined) {
                if (listUpgradeClusterTasksRequest instanceof ListUpgradeClusterTasksRequest) {
                    clusterId = listUpgradeClusterTasksRequest.clusterId;
                } else {
                    clusterId = listUpgradeClusterTasksRequest['cluster_id'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling listUpgradeClusterTasks.');
            }

            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取历史集群升级引导任务列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listUpgradeWorkFlows(listUpgradeWorkFlowsRequest?: ListUpgradeWorkFlowsRequest) {
            const options = {
                method: "GET",
                url: "/api/v3/projects/{project_id}/clusters/{cluster_id}/operation/upgradeworkflows",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clusterId;
            
            let contentType;

            if (listUpgradeWorkFlowsRequest !== null && listUpgradeWorkFlowsRequest !== undefined) {
                if (listUpgradeWorkFlowsRequest instanceof ListUpgradeWorkFlowsRequest) {
                    clusterId = listUpgradeWorkFlowsRequest.clusterId;
                    contentType = listUpgradeWorkFlowsRequest.contentType;
                } else {
                    clusterId = listUpgradeWorkFlowsRequest['cluster_id'];
                    contentType = listUpgradeWorkFlowsRequest['Content-Type'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling listUpgradeWorkFlows.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该API用于在指定集群下迁移节点到另一集群。
         * 
         * &gt;集群管理的URL格式为：https://Endpoint/uri。其中uri为资源路径，也即API访问的路径。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        migrateNode(migrateNodeRequest?: MigrateNodeRequest) {
            const options = {
                method: "PUT",
                url: "/api/v3/projects/{project_id}/clusters/{cluster_id}/nodes/operation/migrateto/{target_cluster_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;
            
            let targetClusterId;
            
            let contentType;

            if (migrateNodeRequest !== null && migrateNodeRequest !== undefined) {
                if (migrateNodeRequest instanceof MigrateNodeRequest) {
                    clusterId = migrateNodeRequest.clusterId;
                    targetClusterId = migrateNodeRequest.targetClusterId;
                    contentType = migrateNodeRequest.contentType;
                    body = migrateNodeRequest.body
                } else {
                    clusterId = migrateNodeRequest['cluster_id'];
                    targetClusterId = migrateNodeRequest['target_cluster_id'];
                    contentType = migrateNodeRequest['Content-Type'];
                    body = migrateNodeRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling migrateNode.');
            }
            if (targetClusterId === null || targetClusterId === undefined) {
            throw new RequiredError('targetClusterId','Required parameter targetClusterId was null or undefined when calling migrateNode.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'cluster_id': clusterId,'target_cluster_id': targetClusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 暂停集群升级任务。
         * &gt; - 集群升级涉及多维度的组件升级操作，强烈建议统一通过CCE控制台执行交互式升级，降低集群升级过程的业务意外受损风险；
         * &gt; - 当前集群升级相关接口受限开放。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        pauseUpgradeClusterTask(pauseUpgradeClusterTaskRequest?: PauseUpgradeClusterTaskRequest) {
            const options = {
                method: "POST",
                url: "/api/v3/projects/{project_id}/clusters/{cluster_id}/operation/upgrade/pause",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clusterId;

            if (pauseUpgradeClusterTaskRequest !== null && pauseUpgradeClusterTaskRequest !== undefined) {
                if (pauseUpgradeClusterTaskRequest instanceof PauseUpgradeClusterTaskRequest) {
                    clusterId = pauseUpgradeClusterTaskRequest.clusterId;
                } else {
                    clusterId = pauseUpgradeClusterTaskRequest['cluster_id'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling pauseUpgradeClusterTask.');
            }

            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该API用于在指定集群下移除节点。
         * &gt;集群管理的URL格式为：https://Endpoint/uri。其中uri为资源路径，也即API访问的路径。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        removeNode(removeNodeRequest?: RemoveNodeRequest) {
            const options = {
                method: "PUT",
                url: "/api/v3/projects/{project_id}/clusters/{cluster_id}/nodes/operation/remove",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;
            
            let contentType;

            if (removeNodeRequest !== null && removeNodeRequest !== undefined) {
                if (removeNodeRequest instanceof RemoveNodeRequest) {
                    clusterId = removeNodeRequest.clusterId;
                    contentType = removeNodeRequest.contentType;
                    body = removeNodeRequest.body
                } else {
                    clusterId = removeNodeRequest['cluster_id'];
                    contentType = removeNodeRequest['Content-Type'];
                    body = removeNodeRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling removeNode.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该API用于在指定集群下重置节点。
         * &gt;集群管理的URL格式为：https://Endpoint/uri。其中uri为资源路径，也即API访问的路径。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        resetNode(resetNodeRequest?: ResetNodeRequest) {
            const options = {
                method: "POST",
                url: "/api/v3/projects/{project_id}/clusters/{cluster_id}/nodes/reset",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;
            
            let contentType;

            if (resetNodeRequest !== null && resetNodeRequest !== undefined) {
                if (resetNodeRequest instanceof ResetNodeRequest) {
                    clusterId = resetNodeRequest.clusterId;
                    contentType = resetNodeRequest.contentType;
                    body = resetNodeRequest.body
                } else {
                    clusterId = resetNodeRequest['cluster_id'];
                    contentType = resetNodeRequest['Content-Type'];
                    body = resetNodeRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling resetNode.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该API用于变更一个指定集群的规格。
         * 
         * &gt;   - 集群管理的URL格式为：https://Endpoint/uri。其中uri为资源路径，也即API访问的路径。
         * &gt;   [- 使用限制请参考[变更集群规格](https://support.huaweicloud.com/usermanual-cce/cce_10_0403.html)。](tag:hws)
         * &gt;   [- 使用限制请参考[变更集群规格](https://support.huaweicloud.com/intl/zh-cn/usermanual-cce/cce_10_0403.html)](tag:hws_hk)
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        resizeCluster(resizeClusterRequest?: ResizeClusterRequest) {
            const options = {
                method: "POST",
                url: "/api/v3/projects/{project_id}/clusters/{cluster_id}/operation/resize",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;
            
            let contentType;

            if (resizeClusterRequest !== null && resizeClusterRequest !== undefined) {
                if (resizeClusterRequest instanceof ResizeClusterRequest) {
                    clusterId = resizeClusterRequest.clusterId;
                    contentType = resizeClusterRequest.contentType;
                    body = resizeClusterRequest.body
                } else {
                    clusterId = resizeClusterRequest['cluster_id'];
                    contentType = resizeClusterRequest['Content-Type'];
                    body = resizeClusterRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling resizeCluster.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 重新执行失败的集群升级任务。
         * &gt; - 集群升级涉及多维度的组件升级操作，强烈建议统一通过CCE控制台执行交互式升级，降低集群升级过程的业务意外受损风险；
         * &gt; - 当前集群升级相关接口受限开放。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        retryUpgradeClusterTask(retryUpgradeClusterTaskRequest?: RetryUpgradeClusterTaskRequest) {
            const options = {
                method: "POST",
                url: "/api/v3/projects/{project_id}/clusters/{cluster_id}/operation/upgrade/retry",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clusterId;

            if (retryUpgradeClusterTaskRequest !== null && retryUpgradeClusterTaskRequest !== undefined) {
                if (retryUpgradeClusterTaskRequest instanceof RetryUpgradeClusterTaskRequest) {
                    clusterId = retryUpgradeClusterTaskRequest.clusterId;
                } else {
                    clusterId = retryUpgradeClusterTaskRequest['cluster_id'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling retryUpgradeClusterTask.');
            }

            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 将插件实例回滚到升级前的版本。只有在当前插件实例版本支持回滚到升级前的版本（status.isRollbackable为true），且插件实例状态为running（运行中）、available（可用）、abnormal（不可用）、upgradeFailed（升级失败）、rollbackFailed（回滚失败）时支持回滚。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        rollbackAddonInstance(rollbackAddonInstanceRequest?: RollbackAddonInstanceRequest) {
            const options = {
                method: "POST",
                url: "/api/v3/addons/{id}/operation/rollback",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let id;

            if (rollbackAddonInstanceRequest !== null && rollbackAddonInstanceRequest !== undefined) {
                if (rollbackAddonInstanceRequest instanceof RollbackAddonInstanceRequest) {
                    id = rollbackAddonInstanceRequest.id;
                    body = rollbackAddonInstanceRequest.body
                } else {
                    id = rollbackAddonInstanceRequest['id'];
                    body = rollbackAddonInstanceRequest['body'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling rollbackAddonInstance.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该API用于伸缩指定的节点池
         * &gt; 集群管理的URL格式为：https://Endpoint/uri。其中uri为资源路径，也即API访问的路径
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        scaleNodePool(scaleNodePoolRequest?: ScaleNodePoolRequest) {
            const options = {
                method: "POST",
                url: "/api/v3/projects/{project_id}/clusters/{cluster_id}/nodepools/{nodepool_id}/operation/scale",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;
            
            let nodepoolId;
            
            let contentType;

            if (scaleNodePoolRequest !== null && scaleNodePoolRequest !== undefined) {
                if (scaleNodePoolRequest instanceof ScaleNodePoolRequest) {
                    clusterId = scaleNodePoolRequest.clusterId;
                    nodepoolId = scaleNodePoolRequest.nodepoolId;
                    contentType = scaleNodePoolRequest.contentType;
                    body = scaleNodePoolRequest.body
                } else {
                    clusterId = scaleNodePoolRequest['cluster_id'];
                    nodepoolId = scaleNodePoolRequest['nodepool_id'];
                    contentType = scaleNodePoolRequest['Content-Type'];
                    body = scaleNodePoolRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling scaleNodePool.');
            }
            if (nodepoolId === null || nodepoolId === undefined) {
            throw new RequiredError('nodepoolId','Required parameter nodepoolId was null or undefined when calling scaleNodePool.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'cluster_id': clusterId,'nodepool_id': nodepoolId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取插件实例详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showAddonInstance(showAddonInstanceRequest?: ShowAddonInstanceRequest) {
            const options = {
                method: "GET",
                url: "/api/v3/addons/{id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let contentType;
            
            let id;
            
            let clusterId;

            if (showAddonInstanceRequest !== null && showAddonInstanceRequest !== undefined) {
                if (showAddonInstanceRequest instanceof ShowAddonInstanceRequest) {
                    contentType = showAddonInstanceRequest.contentType;
                    id = showAddonInstanceRequest.id;
                    clusterId = showAddonInstanceRequest.clusterId;
                } else {
                    contentType = showAddonInstanceRequest['Content-Type'];
                    id = showAddonInstanceRequest['id'];
                    clusterId = showAddonInstanceRequest['cluster_id'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling showAddonInstance.');
            }
            if (clusterId !== null && clusterId !== undefined) {
                localVarQueryParameter['cluster_id'] = clusterId;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取模板
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showChart(showChartRequest?: ShowChartRequest) {
            const options = {
                method: "GET",
                url: "/v2/charts/{chart_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let chartId;
            
            let contentType;

            if (showChartRequest !== null && showChartRequest !== undefined) {
                if (showChartRequest instanceof ShowChartRequest) {
                    chartId = showChartRequest.chartId;
                    contentType = showChartRequest.contentType;
                } else {
                    chartId = showChartRequest['chart_id'];
                    contentType = showChartRequest['Content-Type'];
                }
            }

        
            if (chartId === null || chartId === undefined) {
            throw new RequiredError('chartId','Required parameter chartId was null or undefined when calling showChart.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.pathParams = { 'chart_id': chartId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取模板Values
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showChartValues(showChartValuesRequest?: ShowChartValuesRequest) {
            const options = {
                method: "GET",
                url: "/v2/charts/{chart_id}/values",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let chartId;
            
            let contentType;

            if (showChartValuesRequest !== null && showChartValuesRequest !== undefined) {
                if (showChartValuesRequest instanceof ShowChartValuesRequest) {
                    chartId = showChartValuesRequest.chartId;
                    contentType = showChartValuesRequest.contentType;
                } else {
                    chartId = showChartValuesRequest['chart_id'];
                    contentType = showChartValuesRequest['Content-Type'];
                }
            }

        
            if (chartId === null || chartId === undefined) {
            throw new RequiredError('chartId','Required parameter chartId was null or undefined when calling showChartValues.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.pathParams = { 'chart_id': chartId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该API用于获取指定集群的详细信息。
         * &gt;集群管理的URL格式为：https://Endpoint/uri。其中uri为资源路径，也即API访问的路径。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showCluster(showClusterRequest?: ShowClusterRequest) {
            const options = {
                method: "GET",
                url: "/api/v3/projects/{project_id}/clusters/{cluster_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let clusterId;
            
            let contentType;
            
            let detail;

            if (showClusterRequest !== null && showClusterRequest !== undefined) {
                if (showClusterRequest instanceof ShowClusterRequest) {
                    clusterId = showClusterRequest.clusterId;
                    contentType = showClusterRequest.contentType;
                    detail = showClusterRequest.detail;
                } else {
                    clusterId = showClusterRequest['cluster_id'];
                    contentType = showClusterRequest['Content-Type'];
                    detail = showClusterRequest['detail'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling showCluster.');
            }
            if (detail !== null && detail !== undefined) {
                localVarQueryParameter['detail'] = detail;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取集群组件上报的LTS的配置信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showClusterConfig(showClusterConfigRequest?: ShowClusterConfigRequest) {
            const options = {
                method: "GET",
                url: "/api/v3/projects/{project_id}/cluster/{cluster_id}/log-configs",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let clusterId;
            
            let contentType;
            
            let type;

            if (showClusterConfigRequest !== null && showClusterConfigRequest !== undefined) {
                if (showClusterConfigRequest instanceof ShowClusterConfigRequest) {
                    clusterId = showClusterConfigRequest.clusterId;
                    contentType = showClusterConfigRequest.contentType;
                    type = showClusterConfigRequest.type;
                } else {
                    clusterId = showClusterConfigRequest['cluster_id'];
                    contentType = showClusterConfigRequest['Content-Type'];
                    type = showClusterConfigRequest['type'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling showClusterConfig.');
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该API用于查询CCE服务下指定集群支持配置的参数列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showClusterConfigurationDetails(showClusterConfigurationDetailsRequest?: ShowClusterConfigurationDetailsRequest) {
            const options = {
                method: "GET",
                url: "/api/v3/projects/{project_id}/clusters/{cluster_id}/configuration/detail",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clusterId;
            
            let contentType;

            if (showClusterConfigurationDetailsRequest !== null && showClusterConfigurationDetailsRequest !== undefined) {
                if (showClusterConfigurationDetailsRequest instanceof ShowClusterConfigurationDetailsRequest) {
                    clusterId = showClusterConfigurationDetailsRequest.clusterId;
                    contentType = showClusterConfigurationDetailsRequest.contentType;
                } else {
                    clusterId = showClusterConfigurationDetailsRequest['cluster_id'];
                    contentType = showClusterConfigurationDetailsRequest['Content-Type'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling showClusterConfigurationDetails.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该API用于通过集群ID获取集群访问的地址，包括PrivateIP(HA集群返回VIP)与PublicIP
         * &gt;集群管理的URL格式为：https://Endpoint/uri。其中uri为资源路径，也即API访问的路径。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showClusterEndpoints(showClusterEndpointsRequest?: ShowClusterEndpointsRequest) {
            const options = {
                method: "GET",
                url: "/api/v3/projects/{project_id}/clusters/{cluster_id}/openapi",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clusterId;
            
            let contentType;

            if (showClusterEndpointsRequest !== null && showClusterEndpointsRequest !== undefined) {
                if (showClusterEndpointsRequest instanceof ShowClusterEndpointsRequest) {
                    clusterId = showClusterEndpointsRequest.clusterId;
                    contentType = showClusterEndpointsRequest.contentType;
                } else {
                    clusterId = showClusterEndpointsRequest['cluster_id'];
                    contentType = showClusterEndpointsRequest['Content-Type'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling showClusterEndpoints.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取集群升级相关信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showClusterUpgradeInfo(showClusterUpgradeInfoRequest?: ShowClusterUpgradeInfoRequest) {
            const options = {
                method: "GET",
                url: "/api/v3/projects/{project_id}/clusters/{cluster_id}/upgradeinfo",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clusterId;

            if (showClusterUpgradeInfoRequest !== null && showClusterUpgradeInfoRequest !== undefined) {
                if (showClusterUpgradeInfoRequest instanceof ShowClusterUpgradeInfoRequest) {
                    clusterId = showClusterUpgradeInfoRequest.clusterId;
                } else {
                    clusterId = showClusterUpgradeInfoRequest['cluster_id'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling showClusterUpgradeInfo.');
            }

            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该API用于获取任务信息。通过某一任务请求下发后返回的jobID来查询指定任务的进度。
         * &gt; - 集群管理的URL格式为：https://Endpoint/uri。其中uri为资源路径，也即API访问的路径
         * &gt; - 该接口通常使用场景为：
         * &gt;   - 创建、删除集群时，查询相应任务的进度。
         * &gt;   - 创建、删除节点时，查询相应任务的进度。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showJob(showJobRequest?: ShowJobRequest) {
            const options = {
                method: "GET",
                url: "/api/v3/projects/{project_id}/jobs/{job_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let jobId;
            
            let contentType;

            if (showJobRequest !== null && showJobRequest !== undefined) {
                if (showJobRequest instanceof ShowJobRequest) {
                    jobId = showJobRequest.jobId;
                    contentType = showJobRequest.contentType;
                } else {
                    jobId = showJobRequest['job_id'];
                    contentType = showJobRequest['Content-Type'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling showJob.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.pathParams = { 'job_id': jobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该API用于通过节点ID获取指定节点的详细信息。
         * &gt;集群管理的URL格式为：https://Endpoint/uri。其中uri为资源路径，也即API访问的路径。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showNode(showNodeRequest?: ShowNodeRequest) {
            const options = {
                method: "GET",
                url: "/api/v3/projects/{project_id}/clusters/{cluster_id}/nodes/{node_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clusterId;
            
            let nodeId;
            
            let contentType;

            if (showNodeRequest !== null && showNodeRequest !== undefined) {
                if (showNodeRequest instanceof ShowNodeRequest) {
                    clusterId = showNodeRequest.clusterId;
                    nodeId = showNodeRequest.nodeId;
                    contentType = showNodeRequest.contentType;
                } else {
                    clusterId = showNodeRequest['cluster_id'];
                    nodeId = showNodeRequest['node_id'];
                    contentType = showNodeRequest['Content-Type'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling showNode.');
            }
            if (nodeId === null || nodeId === undefined) {
            throw new RequiredError('nodeId','Required parameter nodeId was null or undefined when calling showNode.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.pathParams = { 'cluster_id': clusterId,'node_id': nodeId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该API用于获取指定节点池的详细信息。
         * &gt; 集群管理的URL格式为：https://Endpoint/uri。其中uri为资源路径，也即API访问的路径
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showNodePool(showNodePoolRequest?: ShowNodePoolRequest) {
            const options = {
                method: "GET",
                url: "/api/v3/projects/{project_id}/clusters/{cluster_id}/nodepools/{nodepool_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clusterId;
            
            let nodepoolId;
            
            let contentType;

            if (showNodePoolRequest !== null && showNodePoolRequest !== undefined) {
                if (showNodePoolRequest instanceof ShowNodePoolRequest) {
                    clusterId = showNodePoolRequest.clusterId;
                    nodepoolId = showNodePoolRequest.nodepoolId;
                    contentType = showNodePoolRequest.contentType;
                } else {
                    clusterId = showNodePoolRequest['cluster_id'];
                    nodepoolId = showNodePoolRequest['nodepool_id'];
                    contentType = showNodePoolRequest['Content-Type'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling showNodePool.');
            }
            if (nodepoolId === null || nodepoolId === undefined) {
            throw new RequiredError('nodepoolId','Required parameter nodepoolId was null or undefined when calling showNodePool.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.pathParams = { 'cluster_id': clusterId,'nodepool_id': nodepoolId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该API用于查询CCE服务下指定节点池支持配置的参数列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showNodePoolConfigurationDetails(showNodePoolConfigurationDetailsRequest?: ShowNodePoolConfigurationDetailsRequest) {
            const options = {
                method: "GET",
                url: "/api/v3/projects/{project_id}/clusters/{cluster_id}/nodepools/{nodepool_id}/configuration/detail",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clusterId;
            
            let nodepoolId;
            
            let contentType;

            if (showNodePoolConfigurationDetailsRequest !== null && showNodePoolConfigurationDetailsRequest !== undefined) {
                if (showNodePoolConfigurationDetailsRequest instanceof ShowNodePoolConfigurationDetailsRequest) {
                    clusterId = showNodePoolConfigurationDetailsRequest.clusterId;
                    nodepoolId = showNodePoolConfigurationDetailsRequest.nodepoolId;
                    contentType = showNodePoolConfigurationDetailsRequest.contentType;
                } else {
                    clusterId = showNodePoolConfigurationDetailsRequest['cluster_id'];
                    nodepoolId = showNodePoolConfigurationDetailsRequest['nodepool_id'];
                    contentType = showNodePoolConfigurationDetailsRequest['Content-Type'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling showNodePoolConfigurationDetails.');
            }
            if (nodepoolId === null || nodepoolId === undefined) {
            throw new RequiredError('nodepoolId','Required parameter nodepoolId was null or undefined when calling showNodePoolConfigurationDetails.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.pathParams = { 'cluster_id': clusterId,'nodepool_id': nodepoolId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该API用于查询指定节点池支持配置的参数内容。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showNodePoolConfigurations(showNodePoolConfigurationsRequest?: ShowNodePoolConfigurationsRequest) {
            const options = {
                method: "GET",
                url: "/api/v3/projects/{project_id}/clusters/{cluster_id}/nodepools/{nodepool_id}/configuration",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clusterId;
            
            let nodepoolId;
            
            let contentType;

            if (showNodePoolConfigurationsRequest !== null && showNodePoolConfigurationsRequest !== undefined) {
                if (showNodePoolConfigurationsRequest instanceof ShowNodePoolConfigurationsRequest) {
                    clusterId = showNodePoolConfigurationsRequest.clusterId;
                    nodepoolId = showNodePoolConfigurationsRequest.nodepoolId;
                    contentType = showNodePoolConfigurationsRequest.contentType;
                } else {
                    clusterId = showNodePoolConfigurationsRequest['cluster_id'];
                    nodepoolId = showNodePoolConfigurationsRequest['nodepool_id'];
                    contentType = showNodePoolConfigurationsRequest['Content-Type'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling showNodePoolConfigurations.');
            }
            if (nodepoolId === null || nodepoolId === undefined) {
            throw new RequiredError('nodepoolId','Required parameter nodepoolId was null or undefined when calling showNodePoolConfigurations.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.pathParams = { 'cluster_id': clusterId,'nodepool_id': nodepoolId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取分区详情
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showPartition(showPartitionRequest?: ShowPartitionRequest) {
            const options = {
                method: "GET",
                url: "/api/v3/projects/{project_id}/clusters/{cluster_id}/partitions/{partition_name}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clusterId;
            
            let partitionName;

            if (showPartitionRequest !== null && showPartitionRequest !== undefined) {
                if (showPartitionRequest instanceof ShowPartitionRequest) {
                    clusterId = showPartitionRequest.clusterId;
                    partitionName = showPartitionRequest.partitionName;
                } else {
                    clusterId = showPartitionRequest['cluster_id'];
                    partitionName = showPartitionRequest['partition_name'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling showPartition.');
            }
            if (partitionName === null || partitionName === undefined) {
            throw new RequiredError('partitionName','Required parameter partitionName was null or undefined when calling showPartition.');
            }

            options.pathParams = { 'cluster_id': clusterId,'partition_name': partitionName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取集群升级前检查任务详情，任务ID由调用集群检查API后从响应体中uid字段获取。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showPreCheck(showPreCheckRequest?: ShowPreCheckRequest) {
            const options = {
                method: "GET",
                url: "/api/v3/projects/{project_id}/clusters/{cluster_id}/operation/precheck/tasks/{task_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clusterId;
            
            let taskId;

            if (showPreCheckRequest !== null && showPreCheckRequest !== undefined) {
                if (showPreCheckRequest instanceof ShowPreCheckRequest) {
                    clusterId = showPreCheckRequest.clusterId;
                    taskId = showPreCheckRequest.taskId;
                } else {
                    clusterId = showPreCheckRequest['cluster_id'];
                    taskId = showPreCheckRequest['task_id'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling showPreCheck.');
            }
            if (taskId === null || taskId === undefined) {
            throw new RequiredError('taskId','Required parameter taskId was null or undefined when calling showPreCheck.');
            }

            options.pathParams = { 'cluster_id': clusterId,'task_id': taskId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该API用于查询CCE服务下的资源配额。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showQuotas(showQuotasRequest?: ShowQuotasRequest) {
            const options = {
                method: "GET",
                url: "/api/v3/projects/{project_id}/quotas",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let contentType;

            if (showQuotasRequest !== null && showQuotasRequest !== undefined) {
                if (showQuotasRequest instanceof ShowQuotasRequest) {
                    contentType = showQuotasRequest.contentType;
                } else {
                    contentType = showQuotasRequest['Content-Type'];
                }
            }

        
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取指定模板实例
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showRelease(showReleaseRequest?: ShowReleaseRequest) {
            const options = {
                method: "GET",
                url: "/cce/cam/v3/clusters/{cluster_id}/namespace/{namespace}/releases/{name}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let name;
            
            let namespace;
            
            let contentType;
            
            let clusterId;

            if (showReleaseRequest !== null && showReleaseRequest !== undefined) {
                if (showReleaseRequest instanceof ShowReleaseRequest) {
                    name = showReleaseRequest.name;
                    namespace = showReleaseRequest.namespace;
                    contentType = showReleaseRequest.contentType;
                    clusterId = showReleaseRequest.clusterId;
                } else {
                    name = showReleaseRequest['name'];
                    namespace = showReleaseRequest['namespace'];
                    contentType = showReleaseRequest['Content-Type'];
                    clusterId = showReleaseRequest['cluster_id'];
                }
            }

        
            if (name === null || name === undefined) {
            throw new RequiredError('name','Required parameter name was null or undefined when calling showRelease.');
            }
            if (namespace === null || namespace === undefined) {
            throw new RequiredError('namespace','Required parameter namespace was null or undefined when calling showRelease.');
            }
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling showRelease.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.pathParams = { 'name': name,'namespace': namespace,'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询指定模板实例历史记录
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showReleaseHistory(showReleaseHistoryRequest?: ShowReleaseHistoryRequest) {
            const options = {
                method: "GET",
                url: "/cce/cam/v3/clusters/{cluster_id}/namespace/{namespace}/releases/{name}/history",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let name;
            
            let namespace;
            
            let contentType;
            
            let clusterId;

            if (showReleaseHistoryRequest !== null && showReleaseHistoryRequest !== undefined) {
                if (showReleaseHistoryRequest instanceof ShowReleaseHistoryRequest) {
                    name = showReleaseHistoryRequest.name;
                    namespace = showReleaseHistoryRequest.namespace;
                    contentType = showReleaseHistoryRequest.contentType;
                    clusterId = showReleaseHistoryRequest.clusterId;
                } else {
                    name = showReleaseHistoryRequest['name'];
                    namespace = showReleaseHistoryRequest['namespace'];
                    contentType = showReleaseHistoryRequest['Content-Type'];
                    clusterId = showReleaseHistoryRequest['cluster_id'];
                }
            }

        
            if (name === null || name === undefined) {
            throw new RequiredError('name','Required parameter name was null or undefined when calling showReleaseHistory.');
            }
            if (namespace === null || namespace === undefined) {
            throw new RequiredError('namespace','Required parameter namespace was null or undefined when calling showReleaseHistory.');
            }
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling showReleaseHistory.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.pathParams = { 'name': name,'namespace': namespace,'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取集群升级任务详情，任务ID由调用集群升级API后从响应体中uid字段获取。
         * &gt; - 集群升级涉及多维度的组件升级操作，强烈建议统一通过CCE控制台执行交互式升级，降低集群升级过程的业务意外受损风险；
         * &gt; - 当前集群升级相关接口受限开放。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showUpgradeClusterTask(showUpgradeClusterTaskRequest?: ShowUpgradeClusterTaskRequest) {
            const options = {
                method: "GET",
                url: "/api/v3/projects/{project_id}/clusters/{cluster_id}/operation/upgrade/tasks/{task_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clusterId;
            
            let taskId;

            if (showUpgradeClusterTaskRequest !== null && showUpgradeClusterTaskRequest !== undefined) {
                if (showUpgradeClusterTaskRequest instanceof ShowUpgradeClusterTaskRequest) {
                    clusterId = showUpgradeClusterTaskRequest.clusterId;
                    taskId = showUpgradeClusterTaskRequest.taskId;
                } else {
                    clusterId = showUpgradeClusterTaskRequest['cluster_id'];
                    taskId = showUpgradeClusterTaskRequest['task_id'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling showUpgradeClusterTask.');
            }
            if (taskId === null || taskId === undefined) {
            throw new RequiredError('taskId','Required parameter taskId was null or undefined when calling showUpgradeClusterTask.');
            }

            options.pathParams = { 'cluster_id': clusterId,'task_id': taskId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该API用于通过升级引导任务ID获取任务的详细信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showUpgradeWorkFlow(showUpgradeWorkFlowRequest?: ShowUpgradeWorkFlowRequest) {
            const options = {
                method: "GET",
                url: "/api/v3/projects/{project_id}/clusters/{cluster_id}/operation/upgradeworkflows/{upgrade_workflow_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clusterId;
            
            let upgradeWorkflowId;
            
            let contentType;

            if (showUpgradeWorkFlowRequest !== null && showUpgradeWorkFlowRequest !== undefined) {
                if (showUpgradeWorkFlowRequest instanceof ShowUpgradeWorkFlowRequest) {
                    clusterId = showUpgradeWorkFlowRequest.clusterId;
                    upgradeWorkflowId = showUpgradeWorkFlowRequest.upgradeWorkflowId;
                    contentType = showUpgradeWorkFlowRequest.contentType;
                } else {
                    clusterId = showUpgradeWorkFlowRequest['cluster_id'];
                    upgradeWorkflowId = showUpgradeWorkFlowRequest['upgrade_workflow_id'];
                    contentType = showUpgradeWorkFlowRequest['Content-Type'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling showUpgradeWorkFlow.');
            }
            if (upgradeWorkflowId === null || upgradeWorkflowId === undefined) {
            throw new RequiredError('upgradeWorkflowId','Required parameter upgradeWorkflowId was null or undefined when calling showUpgradeWorkFlow.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.pathParams = { 'cluster_id': clusterId,'upgrade_workflow_id': upgradeWorkflowId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取用户模板配额
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showUserChartsQuotas(showUserChartsQuotasRequest?: ShowUserChartsQuotasRequest) {
            const options = {
                method: "GET",
                url: "/v2/charts/{project_id}/quotas",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let contentType;

            if (showUserChartsQuotasRequest !== null && showUserChartsQuotasRequest !== undefined) {
                if (showUserChartsQuotasRequest instanceof ShowUserChartsQuotasRequest) {
                    contentType = showUserChartsQuotasRequest.contentType;
                } else {
                    contentType = showUserChartsQuotasRequest['Content-Type'];
                }
            }

        
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新插件实例的功能。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateAddonInstance(updateAddonInstanceRequest?: UpdateAddonInstanceRequest) {
            const options = {
                method: "PUT",
                url: "/api/v3/addons/{id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let id;
            
            let contentType;

            if (updateAddonInstanceRequest !== null && updateAddonInstanceRequest !== undefined) {
                if (updateAddonInstanceRequest instanceof UpdateAddonInstanceRequest) {
                    id = updateAddonInstanceRequest.id;
                    contentType = updateAddonInstanceRequest.contentType;
                    body = updateAddonInstanceRequest.body
                } else {
                    id = updateAddonInstanceRequest['id'];
                    contentType = updateAddonInstanceRequest['Content-Type'];
                    body = updateAddonInstanceRequest['body'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling updateAddonInstance.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新模板
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateChart(updateChartRequest?: UpdateChartRequest) {
            const options = {
                method: "PUT",
                url: "/v2/charts/{chart_id}",
                contentType: "multipart/form-data",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            const localVarFormParams = new FormData();
            
            let chartId;
            
            let contentType;
            let content;
            
            let parameters;
            

            if (updateChartRequest !== null && updateChartRequest !== undefined) {
                if (updateChartRequest instanceof UpdateChartRequest) {
                    chartId = updateChartRequest.chartId;
                    contentType = updateChartRequest.contentType;
                    content = updateChartRequest.body?.content;
                    parameters = updateChartRequest.body?.parameters;
                } else {
                    chartId = updateChartRequest['chart_id'];
                    contentType = updateChartRequest['Content-Type'];
                    content = updateChartRequest['body']['content'];
                    parameters = updateChartRequest['body']['parameters'];
                }
            }

        
            if (chartId === null || chartId === undefined) {
            throw new RequiredError('chartId','Required parameter chartId was null or undefined when calling updateChart.');
            }
            if (content === null || content === undefined) {
            throw new RequiredError('content','Required parameter content was null or undefined when calling updateChart.');
            }
            if (parameters !== undefined) { 
                localVarFormParams.append('parameters', parameters as any);
            }
            if (content !== undefined) { 
                localVarFormParams.append('content', content as any);
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/x-www-form-urlencoded';
            localVarHeaderParameter['Content-Type'] = 'multipart/form-data';
            options.data = localVarFormParams;
            options.pathParams = { 'chart_id': chartId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该API用于更新指定的集群。
         * &gt;集群管理的URL格式为：https://Endpoint/uri。其中uri为资源路径，也即API访问的路径。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateCluster(updateClusterRequest?: UpdateClusterRequest) {
            const options = {
                method: "PUT",
                url: "/api/v3/projects/{project_id}/clusters/{cluster_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;
            
            let contentType;

            if (updateClusterRequest !== null && updateClusterRequest !== undefined) {
                if (updateClusterRequest instanceof UpdateClusterRequest) {
                    clusterId = updateClusterRequest.clusterId;
                    contentType = updateClusterRequest.contentType;
                    body = updateClusterRequest.body
                } else {
                    clusterId = updateClusterRequest['cluster_id'];
                    contentType = updateClusterRequest['Content-Type'];
                    body = updateClusterRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling updateCluster.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该API用于通过集群ID绑定、解绑集群公网apiserver地址
         * &gt;集群管理的URL格式为：https://Endpoint/uri。其中uri为资源路径，也即API访问的路径。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateClusterEip(updateClusterEipRequest?: UpdateClusterEipRequest) {
            const options = {
                method: "PUT",
                url: "/api/v3/projects/{project_id}/clusters/{cluster_id}/mastereip",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;
            
            let contentType;

            if (updateClusterEipRequest !== null && updateClusterEipRequest !== undefined) {
                if (updateClusterEipRequest instanceof UpdateClusterEipRequest) {
                    clusterId = updateClusterEipRequest.clusterId;
                    contentType = updateClusterEipRequest.contentType;
                    body = updateClusterEipRequest.body
                } else {
                    clusterId = updateClusterEipRequest['cluster_id'];
                    contentType = updateClusterEipRequest['Content-Type'];
                    body = updateClusterEipRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling updateClusterEip.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 用户可以选择集群管理节点上哪些组件的日志上报LTS
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateClusterLogConfig(updateClusterLogConfigRequest?: UpdateClusterLogConfigRequest) {
            const options = {
                method: "PUT",
                url: "/api/v3/projects/{project_id}/cluster/{cluster_id}/log-configs",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;
            
            let contentType;

            if (updateClusterLogConfigRequest !== null && updateClusterLogConfigRequest !== undefined) {
                if (updateClusterLogConfigRequest instanceof UpdateClusterLogConfigRequest) {
                    clusterId = updateClusterLogConfigRequest.clusterId;
                    contentType = updateClusterLogConfigRequest.contentType;
                    body = updateClusterLogConfigRequest.body
                } else {
                    clusterId = updateClusterLogConfigRequest['cluster_id'];
                    contentType = updateClusterLogConfigRequest['Content-Type'];
                    body = updateClusterLogConfigRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling updateClusterLogConfig.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该API用于更新指定的节点。
         * &gt; - 当前仅支持更新metadata下的name字段，即节点的名字。
         * &gt; - 集群管理的URL格式为：https://Endpoint/uri。其中uri为资源路径，也即API访问的路径。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateNode(updateNodeRequest?: UpdateNodeRequest) {
            const options = {
                method: "PUT",
                url: "/api/v3/projects/{project_id}/clusters/{cluster_id}/nodes/{node_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;
            
            let nodeId;
            
            let contentType;

            if (updateNodeRequest !== null && updateNodeRequest !== undefined) {
                if (updateNodeRequest instanceof UpdateNodeRequest) {
                    clusterId = updateNodeRequest.clusterId;
                    nodeId = updateNodeRequest.nodeId;
                    contentType = updateNodeRequest.contentType;
                    body = updateNodeRequest.body
                } else {
                    clusterId = updateNodeRequest['cluster_id'];
                    nodeId = updateNodeRequest['node_id'];
                    contentType = updateNodeRequest['Content-Type'];
                    body = updateNodeRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling updateNode.');
            }
            if (nodeId === null || nodeId === undefined) {
            throw new RequiredError('nodeId','Required parameter nodeId was null or undefined when calling updateNode.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'cluster_id': clusterId,'node_id': nodeId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该API用于更新指定的节点池。仅支持集群在处于可用、扩容、缩容状态时调用。
         * 
         * 
         * &gt; - 集群管理的URL格式为：https://Endpoint/uri。其中uri为资源路径，也即API访问的路径
         * 
         * &gt; - 当前仅支持更新节点池名称，spec下的initialNodeCount，k8sTags，taints，login，userTags与节点池的扩缩容配置相关字段。若此次更新未设置相关值，默认更新为初始值。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateNodePool(updateNodePoolRequest?: UpdateNodePoolRequest) {
            const options = {
                method: "PUT",
                url: "/api/v3/projects/{project_id}/clusters/{cluster_id}/nodepools/{nodepool_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;
            
            let nodepoolId;
            
            let contentType;

            if (updateNodePoolRequest !== null && updateNodePoolRequest !== undefined) {
                if (updateNodePoolRequest instanceof UpdateNodePoolRequest) {
                    clusterId = updateNodePoolRequest.clusterId;
                    nodepoolId = updateNodePoolRequest.nodepoolId;
                    contentType = updateNodePoolRequest.contentType;
                    body = updateNodePoolRequest.body
                } else {
                    clusterId = updateNodePoolRequest['cluster_id'];
                    nodepoolId = updateNodePoolRequest['nodepool_id'];
                    contentType = updateNodePoolRequest['Content-Type'];
                    body = updateNodePoolRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling updateNodePool.');
            }
            if (nodepoolId === null || nodepoolId === undefined) {
            throw new RequiredError('nodepoolId','Required parameter nodepoolId was null or undefined when calling updateNodePool.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'cluster_id': clusterId,'nodepool_id': nodepoolId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该API用于修改CCE服务下指定节点池配置参数的值。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateNodePoolConfiguration(updateNodePoolConfigurationRequest?: UpdateNodePoolConfigurationRequest) {
            const options = {
                method: "PUT",
                url: "/api/v3/projects/{project_id}/clusters/{cluster_id}/nodepools/{nodepool_id}/configuration",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;
            
            let nodepoolId;
            
            let contentType;

            if (updateNodePoolConfigurationRequest !== null && updateNodePoolConfigurationRequest !== undefined) {
                if (updateNodePoolConfigurationRequest instanceof UpdateNodePoolConfigurationRequest) {
                    clusterId = updateNodePoolConfigurationRequest.clusterId;
                    nodepoolId = updateNodePoolConfigurationRequest.nodepoolId;
                    contentType = updateNodePoolConfigurationRequest.contentType;
                    body = updateNodePoolConfigurationRequest.body
                } else {
                    clusterId = updateNodePoolConfigurationRequest['cluster_id'];
                    nodepoolId = updateNodePoolConfigurationRequest['nodepool_id'];
                    contentType = updateNodePoolConfigurationRequest['Content-Type'];
                    body = updateNodePoolConfigurationRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling updateNodePoolConfiguration.');
            }
            if (nodepoolId === null || nodepoolId === undefined) {
            throw new RequiredError('nodepoolId','Required parameter nodepoolId was null or undefined when calling updateNodePoolConfiguration.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'cluster_id': clusterId,'nodepool_id': nodepoolId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新分区
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updatePartition(updatePartitionRequest?: UpdatePartitionRequest) {
            const options = {
                method: "PUT",
                url: "/api/v3/projects/{project_id}/clusters/{cluster_id}/partitions/{partition_name}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;
            
            let partitionName;

            if (updatePartitionRequest !== null && updatePartitionRequest !== undefined) {
                if (updatePartitionRequest instanceof UpdatePartitionRequest) {
                    clusterId = updatePartitionRequest.clusterId;
                    partitionName = updatePartitionRequest.partitionName;
                    body = updatePartitionRequest.body
                } else {
                    clusterId = updatePartitionRequest['cluster_id'];
                    partitionName = updatePartitionRequest['partition_name'];
                    body = updatePartitionRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling updatePartition.');
            }
            if (partitionName === null || partitionName === undefined) {
            throw new RequiredError('partitionName','Required parameter partitionName was null or undefined when calling updatePartition.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'cluster_id': clusterId,'partition_name': partitionName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新指定模板实例
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateRelease(updateReleaseRequest?: UpdateReleaseRequest) {
            const options = {
                method: "PUT",
                url: "/cce/cam/v3/clusters/{cluster_id}/namespace/{namespace}/releases/{name}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let name;
            
            let namespace;
            
            let contentType;
            
            let clusterId;

            if (updateReleaseRequest !== null && updateReleaseRequest !== undefined) {
                if (updateReleaseRequest instanceof UpdateReleaseRequest) {
                    name = updateReleaseRequest.name;
                    namespace = updateReleaseRequest.namespace;
                    contentType = updateReleaseRequest.contentType;
                    clusterId = updateReleaseRequest.clusterId;
                    body = updateReleaseRequest.body
                } else {
                    name = updateReleaseRequest['name'];
                    namespace = updateReleaseRequest['namespace'];
                    contentType = updateReleaseRequest['Content-Type'];
                    clusterId = updateReleaseRequest['cluster_id'];
                    body = updateReleaseRequest['body'];
                }
            }

        
            if (name === null || name === undefined) {
            throw new RequiredError('name','Required parameter name was null or undefined when calling updateRelease.');
            }
            if (namespace === null || namespace === undefined) {
            throw new RequiredError('namespace','Required parameter namespace was null or undefined when calling updateRelease.');
            }
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling updateRelease.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'name': name,'namespace': namespace,'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 集群升级。
         * &gt; - 集群升级涉及多维度的组件升级操作，强烈建议统一通过CCE控制台执行交互式升级，降低集群升级过程的业务意外受损风险；
         * &gt; - 当前集群升级相关接口受限开放。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        upgradeCluster(upgradeClusterRequest?: UpgradeClusterRequest) {
            const options = {
                method: "POST",
                url: "/api/v3/projects/{project_id}/clusters/{cluster_id}/operation/upgrade",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;

            if (upgradeClusterRequest !== null && upgradeClusterRequest !== undefined) {
                if (upgradeClusterRequest instanceof UpgradeClusterRequest) {
                    clusterId = upgradeClusterRequest.clusterId;
                    body = upgradeClusterRequest.body
                } else {
                    clusterId = upgradeClusterRequest['cluster_id'];
                    body = upgradeClusterRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling upgradeCluster.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该API用于更新指定集群升级引导任务状态，当前仅适用于取消升级流程
         * 调用该API时升级流程引导任务状态不能为进行中(running) 已完成(success) 已取消(cancel),升级子任务状态不能为running(进行中) init(已初始化) pause(任务被暂停) queue(队列中)
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        upgradeWorkFlowUpdate(upgradeWorkFlowUpdateRequest?: UpgradeWorkFlowUpdateRequest) {
            const options = {
                method: "PATCH",
                url: "/api/v3/projects/{project_id}/clusters/{cluster_id}/operation/upgradeworkflows/{upgrade_workflow_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;
            
            let upgradeWorkflowId;
            
            let contentType;

            if (upgradeWorkFlowUpdateRequest !== null && upgradeWorkFlowUpdateRequest !== undefined) {
                if (upgradeWorkFlowUpdateRequest instanceof UpgradeWorkFlowUpdateRequest) {
                    clusterId = upgradeWorkFlowUpdateRequest.clusterId;
                    upgradeWorkflowId = upgradeWorkFlowUpdateRequest.upgradeWorkflowId;
                    contentType = upgradeWorkFlowUpdateRequest.contentType;
                    body = upgradeWorkFlowUpdateRequest.body
                } else {
                    clusterId = upgradeWorkFlowUpdateRequest['cluster_id'];
                    upgradeWorkflowId = upgradeWorkFlowUpdateRequest['upgrade_workflow_id'];
                    contentType = upgradeWorkFlowUpdateRequest['Content-Type'];
                    body = upgradeWorkFlowUpdateRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling upgradeWorkFlowUpdate.');
            }
            if (upgradeWorkflowId === null || upgradeWorkflowId === undefined) {
            throw new RequiredError('upgradeWorkflowId','Required parameter upgradeWorkflowId was null or undefined when calling upgradeWorkFlowUpdate.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'cluster_id': clusterId,'upgrade_workflow_id': upgradeWorkflowId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 上传模板
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        uploadChart(uploadChartRequest?: UploadChartRequest) {
            const options = {
                method: "POST",
                url: "/v2/charts",
                contentType: "multipart/form-data",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            const localVarFormParams = new FormData();
            
            let contentType;
            let content;
            
            let parameters;
            

            if (uploadChartRequest !== null && uploadChartRequest !== undefined) {
                if (uploadChartRequest instanceof UploadChartRequest) {
                    contentType = uploadChartRequest.contentType;
                    content = uploadChartRequest.body?.content;
                    parameters = uploadChartRequest.body?.parameters;
                } else {
                    contentType = uploadChartRequest['Content-Type'];
                    content = uploadChartRequest['body']['content'];
                    parameters = uploadChartRequest['body']['parameters'];
                }
            }

        
            if (content === null || content === undefined) {
            throw new RequiredError('content','Required parameter content was null or undefined when calling uploadChart.');
            }
            if (parameters !== undefined) { 
                localVarFormParams.append('parameters', parameters as any);
            }
            if (content !== undefined) { 
                localVarFormParams.append('content', content as any);
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/x-www-form-urlencoded';
            localVarHeaderParameter['Content-Type'] = 'multipart/form-data';
            options.data = localVarFormParams;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该API用于查询CCE服务当前支持的API版本信息列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showVersion() {
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
    
    }
};

function newClient(client: HcClient): CceClient {
    return new CceClient(client);
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