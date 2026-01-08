import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";
import FormData from 'form-data';

import { APIVersionDetail } from './model/APIVersionDetail';
import { APIVersionLink } from './model/APIVersionLink';
import { AccessPolicy } from './model/AccessPolicy';
import { AccessPolicyResp } from './model/AccessPolicyResp';
import { AccessScope } from './model/AccessScope';
import { AddNode } from './model/AddNode';
import { AddNodeList } from './model/AddNodeList';
import { AddNodeRequest } from './model/AddNodeRequest';
import { AddNodeResponse } from './model/AddNodeResponse';
import { AddNodesToNodePool } from './model/AddNodesToNodePool';
import { AddNodesToNodePoolList } from './model/AddNodesToNodePoolList';
import { AddNodesToNodePoolRequest } from './model/AddNodesToNodePoolRequest';
import { AddNodesToNodePoolResponse } from './model/AddNodesToNodePoolResponse';
import { AddonCheckRequest } from './model/AddonCheckRequest';
import { AddonCheckSpec } from './model/AddonCheckSpec';
import { AddonCheckStatus } from './model/AddonCheckStatus';
import { AddonCheckTask } from './model/AddonCheckTask';
import { AddonInfo } from './model/AddonInfo';
import { AddonInstance } from './model/AddonInstance';
import { AddonInstanceRollbackRequest } from './model/AddonInstanceRollbackRequest';
import { AddonInstanceStatus } from './model/AddonInstanceStatus';
import { AddonMetadata } from './model/AddonMetadata';
import { AddonRisks } from './model/AddonRisks';
import { AddonTemplate } from './model/AddonTemplate';
import { AlarmInfo } from './model/AlarmInfo';
import { AuthenticatingProxy } from './model/AuthenticatingProxy';
import { Authentication } from './model/Authentication';
import { AutoGenerateSecurityGroupHardeningConfigSpec } from './model/AutoGenerateSecurityGroupHardeningConfigSpec';
import { AutopilotAuthentication } from './model/AutopilotAuthentication';
import { AutopilotCluster } from './model/AutopilotCluster';
import { AutopilotClusterEndpoints } from './model/AutopilotClusterEndpoints';
import { AutopilotClusterExtendParam } from './model/AutopilotClusterExtendParam';
import { AutopilotClusterInformation } from './model/AutopilotClusterInformation';
import { AutopilotClusterInformationSpec } from './model/AutopilotClusterInformationSpec';
import { AutopilotClusterLogConfigLogConfigs } from './model/AutopilotClusterLogConfigLogConfigs';
import { AutopilotClusterMetadata } from './model/AutopilotClusterMetadata';
import { AutopilotClusterMetadataForUpdate } from './model/AutopilotClusterMetadataForUpdate';
import { AutopilotClusterSpec } from './model/AutopilotClusterSpec';
import { AutopilotClusterStatus } from './model/AutopilotClusterStatus';
import { AutopilotConfigurationItem } from './model/AutopilotConfigurationItem';
import { AutopilotContainerNetwork } from './model/AutopilotContainerNetwork';
import { AutopilotEniNetwork } from './model/AutopilotEniNetwork';
import { AutopilotEniNetworkUpdate } from './model/AutopilotEniNetworkUpdate';
import { AutopilotHostNetwork } from './model/AutopilotHostNetwork';
import { AutopilotNetworkSubnet } from './model/AutopilotNetworkSubnet';
import { AutopilotPackageConfiguration } from './model/AutopilotPackageConfiguration';
import { AutopilotResourceTag } from './model/AutopilotResourceTag';
import { AutopilotServiceNetwork } from './model/AutopilotServiceNetwork';
import { AwakeClusterRequest } from './model/AwakeClusterRequest';
import { AwakeClusterResponse } from './model/AwakeClusterResponse';
import { BatchCreateAddonPrecheckRequest } from './model/BatchCreateAddonPrecheckRequest';
import { BatchCreateAddonPrecheckResponse } from './model/BatchCreateAddonPrecheckResponse';
import { BatchCreateAutopilotClusterTagsRequest } from './model/BatchCreateAutopilotClusterTagsRequest';
import { BatchCreateAutopilotClusterTagsResponse } from './model/BatchCreateAutopilotClusterTagsResponse';
import { BatchCreateClusterTagsRequest } from './model/BatchCreateClusterTagsRequest';
import { BatchCreateClusterTagsRequestBody } from './model/BatchCreateClusterTagsRequestBody';
import { BatchCreateClusterTagsResponse } from './model/BatchCreateClusterTagsResponse';
import { BatchDeleteAutopilotClusterTagsRequest } from './model/BatchDeleteAutopilotClusterTagsRequest';
import { BatchDeleteAutopilotClusterTagsResponse } from './model/BatchDeleteAutopilotClusterTagsResponse';
import { BatchDeleteClusterTagsRequest } from './model/BatchDeleteClusterTagsRequest';
import { BatchDeleteClusterTagsRequestBody } from './model/BatchDeleteClusterTagsRequestBody';
import { BatchDeleteClusterTagsResponse } from './model/BatchDeleteClusterTagsResponse';
import { BatchSyncNodesRequest } from './model/BatchSyncNodesRequest';
import { BatchSyncNodesResponse } from './model/BatchSyncNodesResponse';
import { CapacityReservationSpecification } from './model/CapacityReservationSpecification';
import { CertDuration } from './model/CertDuration';
import { CertRevokeConfigRequestBody } from './model/CertRevokeConfigRequestBody';
import { ChartResp } from './model/ChartResp';
import { ChartValueValues } from './model/ChartValueValues';
import { CheckTaskMetadata } from './model/CheckTaskMetadata';
import { CheckTaskRisk } from './model/CheckTaskRisk';
import { CheckTaskSpec } from './model/CheckTaskSpec';
import { CheckTaskStatus } from './model/CheckTaskStatus';
import { Cluster } from './model/Cluster';
import { ClusterCert } from './model/ClusterCert';
import { ClusterCertDuration } from './model/ClusterCertDuration';
import { ClusterCheckStatus } from './model/ClusterCheckStatus';
import { ClusterConfigurationsSpec } from './model/ClusterConfigurationsSpec';
import { ClusterConfigurationsSpecPackages } from './model/ClusterConfigurationsSpecPackages';
import { ClusterEndpoints } from './model/ClusterEndpoints';
import { ClusterExtendParam } from './model/ClusterExtendParam';
import { ClusterFlavorSpecification } from './model/ClusterFlavorSpecification';
import { ClusterInformation } from './model/ClusterInformation';
import { ClusterInformationSpec } from './model/ClusterInformationSpec';
import { ClusterInformationSpecHostNetwork } from './model/ClusterInformationSpecHostNetwork';
import { ClusterLogConfig } from './model/ClusterLogConfig';
import { ClusterLogConfigLogConfigs } from './model/ClusterLogConfigLogConfigs';
import { ClusterMetadata } from './model/ClusterMetadata';
import { ClusterMetadataForUpdate } from './model/ClusterMetadataForUpdate';
import { ClusterNodeInformation } from './model/ClusterNodeInformation';
import { ClusterNodeInformationMetadata } from './model/ClusterNodeInformationMetadata';
import { ClusterOps } from './model/ClusterOps';
import { ClusterQuotaResource } from './model/ClusterQuotaResource';
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
import { CreateAccessPolicyRequest } from './model/CreateAccessPolicyRequest';
import { CreateAccessPolicyResponse } from './model/CreateAccessPolicyResponse';
import { CreateAddonInstanceRequest } from './model/CreateAddonInstanceRequest';
import { CreateAddonInstanceResponse } from './model/CreateAddonInstanceResponse';
import { CreateAutopilotAddonInstanceRequest } from './model/CreateAutopilotAddonInstanceRequest';
import { CreateAutopilotAddonInstanceResponse } from './model/CreateAutopilotAddonInstanceResponse';
import { CreateAutopilotClusterMasterSnapshotRequest } from './model/CreateAutopilotClusterMasterSnapshotRequest';
import { CreateAutopilotClusterMasterSnapshotResponse } from './model/CreateAutopilotClusterMasterSnapshotResponse';
import { CreateAutopilotClusterRequest } from './model/CreateAutopilotClusterRequest';
import { CreateAutopilotClusterResponse } from './model/CreateAutopilotClusterResponse';
import { CreateAutopilotKubernetesClusterCertRequest } from './model/CreateAutopilotKubernetesClusterCertRequest';
import { CreateAutopilotKubernetesClusterCertResponse } from './model/CreateAutopilotKubernetesClusterCertResponse';
import { CreateAutopilotMaintenanceWindowRequest } from './model/CreateAutopilotMaintenanceWindowRequest';
import { CreateAutopilotMaintenanceWindowResponse } from './model/CreateAutopilotMaintenanceWindowResponse';
import { CreateAutopilotPostCheckRequest } from './model/CreateAutopilotPostCheckRequest';
import { CreateAutopilotPostCheckResponse } from './model/CreateAutopilotPostCheckResponse';
import { CreateAutopilotPreCheckRequest } from './model/CreateAutopilotPreCheckRequest';
import { CreateAutopilotPreCheckResponse } from './model/CreateAutopilotPreCheckResponse';
import { CreateAutopilotReleaseRequest } from './model/CreateAutopilotReleaseRequest';
import { CreateAutopilotReleaseResponse } from './model/CreateAutopilotReleaseResponse';
import { CreateAutopilotUpgradeWorkFlowRequest } from './model/CreateAutopilotUpgradeWorkFlowRequest';
import { CreateAutopilotUpgradeWorkFlowResponse } from './model/CreateAutopilotUpgradeWorkFlowResponse';
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
import { CustomizeResourceTag } from './model/CustomizeResourceTag';
import { DelayUpgradePlanRequestBody } from './model/DelayUpgradePlanRequestBody';
import { DeleteAccessPolicyRequest } from './model/DeleteAccessPolicyRequest';
import { DeleteAccessPolicyResponse } from './model/DeleteAccessPolicyResponse';
import { DeleteAddonInstanceRequest } from './model/DeleteAddonInstanceRequest';
import { DeleteAddonInstanceResponse } from './model/DeleteAddonInstanceResponse';
import { DeleteAutopilotAddonInstanceRequest } from './model/DeleteAutopilotAddonInstanceRequest';
import { DeleteAutopilotAddonInstanceResponse } from './model/DeleteAutopilotAddonInstanceResponse';
import { DeleteAutopilotChartRequest } from './model/DeleteAutopilotChartRequest';
import { DeleteAutopilotChartResponse } from './model/DeleteAutopilotChartResponse';
import { DeleteAutopilotClusterRequest } from './model/DeleteAutopilotClusterRequest';
import { DeleteAutopilotClusterResponse } from './model/DeleteAutopilotClusterResponse';
import { DeleteAutopilotJobRequest } from './model/DeleteAutopilotJobRequest';
import { DeleteAutopilotJobResponse } from './model/DeleteAutopilotJobResponse';
import { DeleteAutopilotMaintenanceWindowRequest } from './model/DeleteAutopilotMaintenanceWindowRequest';
import { DeleteAutopilotMaintenanceWindowResponse } from './model/DeleteAutopilotMaintenanceWindowResponse';
import { DeleteAutopilotReleaseRequest } from './model/DeleteAutopilotReleaseRequest';
import { DeleteAutopilotReleaseResponse } from './model/DeleteAutopilotReleaseResponse';
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
import { DownloadAutopilotChartRequest } from './model/DownloadAutopilotChartRequest';
import { DownloadAutopilotChartResponse } from './model/DownloadAutopilotChartResponse';
import { DownloadChartRequest } from './model/DownloadChartRequest';
import { DownloadChartResponse } from './model/DownloadChartResponse';
import { EipSpec } from './model/EipSpec';
import { EipSpecBandwidth } from './model/EipSpecBandwidth';
import { EncryptionConfig } from './model/EncryptionConfig';
import { EniNetwork } from './model/EniNetwork';
import { EniNetworkUpdate } from './model/EniNetworkUpdate';
import { ExtensionScaleGroup } from './model/ExtensionScaleGroup';
import { ExtensionScaleGroupMetadata } from './model/ExtensionScaleGroupMetadata';
import { ExtensionScaleGroupSpec } from './model/ExtensionScaleGroupSpec';
import { GetAccessPolicyRequest } from './model/GetAccessPolicyRequest';
import { GetAccessPolicyResponse } from './model/GetAccessPolicyResponse';
import { GetAutopilotOneJobRequest } from './model/GetAutopilotOneJobRequest';
import { GetAutopilotOneJobResponse } from './model/GetAutopilotOneJobResponse';
import { GetAvailableZoneResponseBody } from './model/GetAvailableZoneResponseBody';
import { GetAvaliableZoneRequest } from './model/GetAvaliableZoneRequest';
import { GetAvaliableZoneResponse } from './model/GetAvaliableZoneResponse';
import { GetClusterFlavorSpecsRequest } from './model/GetClusterFlavorSpecsRequest';
import { GetClusterFlavorSpecsResponse } from './model/GetClusterFlavorSpecsResponse';
import { GetClusterLongAkskConfigRequest } from './model/GetClusterLongAkskConfigRequest';
import { GetClusterLongAkskConfigResponse } from './model/GetClusterLongAkskConfigResponse';
import { GetClusterQuotaBodyQuotas } from './model/GetClusterQuotaBodyQuotas';
import { GetClusterQuotaRequest } from './model/GetClusterQuotaRequest';
import { GetClusterQuotaResponse } from './model/GetClusterQuotaResponse';
import { GetCustomizeTagsRequest } from './model/GetCustomizeTagsRequest';
import { GetCustomizeTagsResponse } from './model/GetCustomizeTagsResponse';
import { GetLabelsRequest } from './model/GetLabelsRequest';
import { GetLabelsResponse } from './model/GetLabelsResponse';
import { GetLongAkskConfigRequest } from './model/GetLongAkskConfigRequest';
import { GetLongAkskConfigResponse } from './model/GetLongAkskConfigResponse';
import { GetResourceTagsRequest } from './model/GetResourceTagsRequest';
import { GetResourceTagsResponse } from './model/GetResourceTagsResponse';
import { HibernateClusterRequest } from './model/HibernateClusterRequest';
import { HibernateClusterResponse } from './model/HibernateClusterResponse';
import { HostNetwork } from './model/HostNetwork';
import { HostnameConfig } from './model/HostnameConfig';
import { HyperNode } from './model/HyperNode';
import { HyperNodeMetadata } from './model/HyperNodeMetadata';
import { HyperNodeMetadataOwnerReference } from './model/HyperNodeMetadataOwnerReference';
import { HyperNodeSpec } from './model/HyperNodeSpec';
import { HyperNodeStatus } from './model/HyperNodeStatus';
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
import { ListAccessPolicyRequest } from './model/ListAccessPolicyRequest';
import { ListAccessPolicyResponse } from './model/ListAccessPolicyResponse';
import { ListAddonInstancesRequest } from './model/ListAddonInstancesRequest';
import { ListAddonInstancesResponse } from './model/ListAddonInstancesResponse';
import { ListAddonPrecheckTasksRequest } from './model/ListAddonPrecheckTasksRequest';
import { ListAddonPrecheckTasksResponse } from './model/ListAddonPrecheckTasksResponse';
import { ListAddonTemplatesRequest } from './model/ListAddonTemplatesRequest';
import { ListAddonTemplatesResponse } from './model/ListAddonTemplatesResponse';
import { ListAutopilotAddonInstancesRequest } from './model/ListAutopilotAddonInstancesRequest';
import { ListAutopilotAddonInstancesResponse } from './model/ListAutopilotAddonInstancesResponse';
import { ListAutopilotAddonTemplatesRequest } from './model/ListAutopilotAddonTemplatesRequest';
import { ListAutopilotAddonTemplatesResponse } from './model/ListAutopilotAddonTemplatesResponse';
import { ListAutopilotChartsRequest } from './model/ListAutopilotChartsRequest';
import { ListAutopilotChartsResponse } from './model/ListAutopilotChartsResponse';
import { ListAutopilotClusterMasterSnapshotTasksRequest } from './model/ListAutopilotClusterMasterSnapshotTasksRequest';
import { ListAutopilotClusterMasterSnapshotTasksResponse } from './model/ListAutopilotClusterMasterSnapshotTasksResponse';
import { ListAutopilotClusterUpgradeFeatureGatesRequest } from './model/ListAutopilotClusterUpgradeFeatureGatesRequest';
import { ListAutopilotClusterUpgradeFeatureGatesResponse } from './model/ListAutopilotClusterUpgradeFeatureGatesResponse';
import { ListAutopilotClusterUpgradePathsRequest } from './model/ListAutopilotClusterUpgradePathsRequest';
import { ListAutopilotClusterUpgradePathsResponse } from './model/ListAutopilotClusterUpgradePathsResponse';
import { ListAutopilotClustersRequest } from './model/ListAutopilotClustersRequest';
import { ListAutopilotClustersResponse } from './model/ListAutopilotClustersResponse';
import { ListAutopilotJobsRequest } from './model/ListAutopilotJobsRequest';
import { ListAutopilotJobsResponse } from './model/ListAutopilotJobsResponse';
import { ListAutopilotPreCheckTasksRequest } from './model/ListAutopilotPreCheckTasksRequest';
import { ListAutopilotPreCheckTasksResponse } from './model/ListAutopilotPreCheckTasksResponse';
import { ListAutopilotReleasesRequest } from './model/ListAutopilotReleasesRequest';
import { ListAutopilotReleasesResponse } from './model/ListAutopilotReleasesResponse';
import { ListAutopilotUpgradeClusterTasksRequest } from './model/ListAutopilotUpgradeClusterTasksRequest';
import { ListAutopilotUpgradeClusterTasksResponse } from './model/ListAutopilotUpgradeClusterTasksResponse';
import { ListAutopilotUpgradePlansRequest } from './model/ListAutopilotUpgradePlansRequest';
import { ListAutopilotUpgradePlansResponse } from './model/ListAutopilotUpgradePlansResponse';
import { ListAutopilotUpgradeWorkFlowsRequest } from './model/ListAutopilotUpgradeWorkFlowsRequest';
import { ListAutopilotUpgradeWorkFlowsResponse } from './model/ListAutopilotUpgradeWorkFlowsResponse';
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
import { ListHyperNodesRequest } from './model/ListHyperNodesRequest';
import { ListHyperNodesResponse } from './model/ListHyperNodesResponse';
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
import { LockNodeScaledownRequestBody } from './model/LockNodeScaledownRequestBody';
import { LockNodepoolNodeScaleDownRequest } from './model/LockNodepoolNodeScaleDownRequest';
import { LockNodepoolNodeScaleDownResponse } from './model/LockNodepoolNodeScaleDownResponse';
import { Login } from './model/Login';
import { MaintenanceWindow } from './model/MaintenanceWindow';
import { MasterEIPRequest } from './model/MasterEIPRequest';
import { MasterEIPRequestSpec } from './model/MasterEIPRequestSpec';
import { MasterEIPRequestSpecSpec } from './model/MasterEIPRequestSpecSpec';
import { MasterEIPResponseSpec } from './model/MasterEIPResponseSpec';
import { MasterEIPResponseSpecSpec } from './model/MasterEIPResponseSpecSpec';
import { MasterEIPResponseStatus } from './model/MasterEIPResponseStatus';
import { MasterFlavorSpec } from './model/MasterFlavorSpec';
import { MasterSpec } from './model/MasterSpec';
import { Metadata } from './model/Metadata';
import { MigrateNodeExtendParam } from './model/MigrateNodeExtendParam';
import { MigrateNodeRequest } from './model/MigrateNodeRequest';
import { MigrateNodeResponse } from './model/MigrateNodeResponse';
import { MigrateNodesSpec } from './model/MigrateNodesSpec';
import { MigrateNodesTask } from './model/MigrateNodesTask';
import { MigrateNodesToNodePool } from './model/MigrateNodesToNodePool';
import { MigrateNodesToNodePoolList } from './model/MigrateNodesToNodePoolList';
import { MigrateServerConfig } from './model/MigrateServerConfig';
import { MigrateToNodePoolRequest } from './model/MigrateToNodePoolRequest';
import { MigrateToNodePoolResponse } from './model/MigrateToNodePoolResponse';
import { MigrateVolumeSpec } from './model/MigrateVolumeSpec';
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
import { NodeMetadataOwnerReferences } from './model/NodeMetadataOwnerReferences';
import { NodeNicSpec } from './model/NodeNicSpec';
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
import { NodePoolUpdateExtendParam } from './model/NodePoolUpdateExtendParam';
import { NodePoolUpgradeSpec } from './model/NodePoolUpgradeSpec';
import { NodePriority } from './model/NodePriority';
import { NodePublicIP } from './model/NodePublicIP';
import { NodeRisks } from './model/NodeRisks';
import { NodeSelector } from './model/NodeSelector';
import { NodeSpec } from './model/NodeSpec';
import { NodeSpecNodeNameTemplate } from './model/NodeSpecNodeNameTemplate';
import { NodeSpecUpdate } from './model/NodeSpecUpdate';
import { NodeSpecUpdateNodeNameTemplate } from './model/NodeSpecUpdateNodeNameTemplate';
import { NodeSpecUpdateNodeNicSpecUpdate } from './model/NodeSpecUpdateNodeNicSpecUpdate';
import { NodeSpecUpdateNodeNicSpecUpdatePrimaryNic } from './model/NodeSpecUpdateNodeNicSpecUpdatePrimaryNic';
import { NodeStageStatus } from './model/NodeStageStatus';
import { NodeStatus } from './model/NodeStatus';
import { NodeTemplate } from './model/NodeTemplate';
import { NodeTemplateInHyperNode } from './model/NodeTemplateInHyperNode';
import { OpenAPIResponseStatus } from './model/OpenAPIResponseStatus';
import { OpenAPISpec } from './model/OpenAPISpec';
import { OpenAPISpecSpec } from './model/OpenAPISpecSpec';
import { PackageConfiguration } from './model/PackageConfiguration';
import { PackageOptions } from './model/PackageOptions';
import { PageInfo } from './model/PageInfo';
import { Partition } from './model/Partition';
import { PartitionMetadata } from './model/PartitionMetadata';
import { PartitionReqBody } from './model/PartitionReqBody';
import { PartitionReqBodyMetadata } from './model/PartitionReqBodyMetadata';
import { PartitionReqBodySpec } from './model/PartitionReqBodySpec';
import { PartitionReqBodySpecContainerNetwork } from './model/PartitionReqBodySpecContainerNetwork';
import { PartitionReqBodySpecHostNetwork } from './model/PartitionReqBodySpecHostNetwork';
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
import { Principal } from './model/Principal';
import { PublicAccess } from './model/PublicAccess';
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
import { RetryAutopilotUpgradeClusterTaskRequest } from './model/RetryAutopilotUpgradeClusterTaskRequest';
import { RetryAutopilotUpgradeClusterTaskResponse } from './model/RetryAutopilotUpgradeClusterTaskResponse';
import { RetryUpgradeClusterTaskRequest } from './model/RetryUpgradeClusterTaskRequest';
import { RetryUpgradeClusterTaskResponse } from './model/RetryUpgradeClusterTaskResponse';
import { RevokeKubernetesClusterCertRequest } from './model/RevokeKubernetesClusterCertRequest';
import { RevokeKubernetesClusterCertResponse } from './model/RevokeKubernetesClusterCertResponse';
import { RiskSource } from './model/RiskSource';
import { RollbackAddonInstanceRequest } from './model/RollbackAddonInstanceRequest';
import { RollbackAddonInstanceResponse } from './model/RollbackAddonInstanceResponse';
import { RollbackAutopilotAddonInstanceRequest } from './model/RollbackAutopilotAddonInstanceRequest';
import { RollbackAutopilotAddonInstanceResponse } from './model/RollbackAutopilotAddonInstanceResponse';
import { Runtime } from './model/Runtime';
import { RuntimeConfig } from './model/RuntimeConfig';
import { ScaleGroupAutoscaling } from './model/ScaleGroupAutoscaling';
import { ScaleGroupStatus } from './model/ScaleGroupStatus';
import { ScaleGroupStatusExistingNodeCount } from './model/ScaleGroupStatusExistingNodeCount';
import { ScaleGroupStatusUpcomingNodeCount } from './model/ScaleGroupStatusUpcomingNodeCount';
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
import { ShowAutopilotAddonInstanceRequest } from './model/ShowAutopilotAddonInstanceRequest';
import { ShowAutopilotAddonInstanceResponse } from './model/ShowAutopilotAddonInstanceResponse';
import { ShowAutopilotChartRequest } from './model/ShowAutopilotChartRequest';
import { ShowAutopilotChartResponse } from './model/ShowAutopilotChartResponse';
import { ShowAutopilotChartValuesRequest } from './model/ShowAutopilotChartValuesRequest';
import { ShowAutopilotChartValuesResponse } from './model/ShowAutopilotChartValuesResponse';
import { ShowAutopilotClusterConfigRequest } from './model/ShowAutopilotClusterConfigRequest';
import { ShowAutopilotClusterConfigResponse } from './model/ShowAutopilotClusterConfigResponse';
import { ShowAutopilotClusterEndpointsRequest } from './model/ShowAutopilotClusterEndpointsRequest';
import { ShowAutopilotClusterEndpointsResponse } from './model/ShowAutopilotClusterEndpointsResponse';
import { ShowAutopilotClusterRequest } from './model/ShowAutopilotClusterRequest';
import { ShowAutopilotClusterResponse } from './model/ShowAutopilotClusterResponse';
import { ShowAutopilotClusterUpgradeInfoRequest } from './model/ShowAutopilotClusterUpgradeInfoRequest';
import { ShowAutopilotClusterUpgradeInfoResponse } from './model/ShowAutopilotClusterUpgradeInfoResponse';
import { ShowAutopilotFeatureGatesRequest } from './model/ShowAutopilotFeatureGatesRequest';
import { ShowAutopilotFeatureGatesResponse } from './model/ShowAutopilotFeatureGatesResponse';
import { ShowAutopilotJobRequest } from './model/ShowAutopilotJobRequest';
import { ShowAutopilotJobResponse } from './model/ShowAutopilotJobResponse';
import { ShowAutopilotMaintenanceWindowRequest } from './model/ShowAutopilotMaintenanceWindowRequest';
import { ShowAutopilotMaintenanceWindowResponse } from './model/ShowAutopilotMaintenanceWindowResponse';
import { ShowAutopilotPreCheckRequest } from './model/ShowAutopilotPreCheckRequest';
import { ShowAutopilotPreCheckResponse } from './model/ShowAutopilotPreCheckResponse';
import { ShowAutopilotQuotasRequest } from './model/ShowAutopilotQuotasRequest';
import { ShowAutopilotQuotasResponse } from './model/ShowAutopilotQuotasResponse';
import { ShowAutopilotReleaseHistoryRequest } from './model/ShowAutopilotReleaseHistoryRequest';
import { ShowAutopilotReleaseHistoryResponse } from './model/ShowAutopilotReleaseHistoryResponse';
import { ShowAutopilotReleaseRequest } from './model/ShowAutopilotReleaseRequest';
import { ShowAutopilotReleaseResponse } from './model/ShowAutopilotReleaseResponse';
import { ShowAutopilotUpgradeClusterTaskRequest } from './model/ShowAutopilotUpgradeClusterTaskRequest';
import { ShowAutopilotUpgradeClusterTaskResponse } from './model/ShowAutopilotUpgradeClusterTaskResponse';
import { ShowAutopilotUpgradeWorkFlowRequest } from './model/ShowAutopilotUpgradeWorkFlowRequest';
import { ShowAutopilotUpgradeWorkFlowResponse } from './model/ShowAutopilotUpgradeWorkFlowResponse';
import { ShowAutopilotUserChartsQuotasRequest } from './model/ShowAutopilotUserChartsQuotasRequest';
import { ShowAutopilotUserChartsQuotasResponse } from './model/ShowAutopilotUserChartsQuotasResponse';
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
import { ShowClusterSupportConfigurationRequest } from './model/ShowClusterSupportConfigurationRequest';
import { ShowClusterSupportConfigurationResponse } from './model/ShowClusterSupportConfigurationResponse';
import { ShowClusterUpgradeInfoRequest } from './model/ShowClusterUpgradeInfoRequest';
import { ShowClusterUpgradeInfoResponse } from './model/ShowClusterUpgradeInfoResponse';
import { ShowFeatureGatesRequest } from './model/ShowFeatureGatesRequest';
import { ShowFeatureGatesResponse } from './model/ShowFeatureGatesResponse';
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
import { SyncNodeRequest } from './model/SyncNodeRequest';
import { SyncNodeResp } from './model/SyncNodeResp';
import { SyncNodeResponse } from './model/SyncNodeResponse';
import { SyncNodesResp } from './model/SyncNodesResp';
import { Taint } from './model/Taint';
import { TaskStatus } from './model/TaskStatus';
import { TaskType } from './model/TaskType';
import { Templatespec } from './model/Templatespec';
import { UnlockNodeScaledownRequestBody } from './model/UnlockNodeScaledownRequestBody';
import { UnlockNodepoolNodeScaleDownRequest } from './model/UnlockNodepoolNodeScaleDownRequest';
import { UnlockNodepoolNodeScaleDownResponse } from './model/UnlockNodepoolNodeScaleDownResponse';
import { UpdateAccessPolicyRequest } from './model/UpdateAccessPolicyRequest';
import { UpdateAccessPolicyResponse } from './model/UpdateAccessPolicyResponse';
import { UpdateAddonInstanceRequest } from './model/UpdateAddonInstanceRequest';
import { UpdateAddonInstanceResponse } from './model/UpdateAddonInstanceResponse';
import { UpdateAutopilotAddonInstanceRequest } from './model/UpdateAutopilotAddonInstanceRequest';
import { UpdateAutopilotAddonInstanceResponse } from './model/UpdateAutopilotAddonInstanceResponse';
import { UpdateAutopilotChartRequest } from './model/UpdateAutopilotChartRequest';
import { UpdateAutopilotChartRequestBody } from './model/UpdateAutopilotChartRequestBody';
import { UpdateAutopilotChartResponse } from './model/UpdateAutopilotChartResponse';
import { UpdateAutopilotClusterEipRequest } from './model/UpdateAutopilotClusterEipRequest';
import { UpdateAutopilotClusterEipResponse } from './model/UpdateAutopilotClusterEipResponse';
import { UpdateAutopilotClusterRequest } from './model/UpdateAutopilotClusterRequest';
import { UpdateAutopilotClusterResponse } from './model/UpdateAutopilotClusterResponse';
import { UpdateAutopilotMaintenanceWindowRequest } from './model/UpdateAutopilotMaintenanceWindowRequest';
import { UpdateAutopilotMaintenanceWindowResponse } from './model/UpdateAutopilotMaintenanceWindowResponse';
import { UpdateAutopilotReleaseRequest } from './model/UpdateAutopilotReleaseRequest';
import { UpdateAutopilotReleaseResponse } from './model/UpdateAutopilotReleaseResponse';
import { UpdateAutopilotUpgradePlanRequest } from './model/UpdateAutopilotUpgradePlanRequest';
import { UpdateAutopilotUpgradePlanResponse } from './model/UpdateAutopilotUpgradePlanResponse';
import { UpdateChartRequest } from './model/UpdateChartRequest';
import { UpdateChartRequestBody } from './model/UpdateChartRequestBody';
import { UpdateChartResponse } from './model/UpdateChartResponse';
import { UpdateClusterConfigurationsBody } from './model/UpdateClusterConfigurationsBody';
import { UpdateClusterEipRequest } from './model/UpdateClusterEipRequest';
import { UpdateClusterEipResponse } from './model/UpdateClusterEipResponse';
import { UpdateClusterLogConfigRequest } from './model/UpdateClusterLogConfigRequest';
import { UpdateClusterLogConfigResponse } from './model/UpdateClusterLogConfigResponse';
import { UpdateClusterLongAKSKConfigRequestBody } from './model/UpdateClusterLongAKSKConfigRequestBody';
import { UpdateClusterLongAkskConfigRequest } from './model/UpdateClusterLongAkskConfigRequest';
import { UpdateClusterLongAkskConfigResponse } from './model/UpdateClusterLongAkskConfigResponse';
import { UpdateClusterRequest } from './model/UpdateClusterRequest';
import { UpdateClusterResponse } from './model/UpdateClusterResponse';
import { UpdateLongAKSKConfigRequestBody } from './model/UpdateLongAKSKConfigRequestBody';
import { UpdateLongAkskConfigRequest } from './model/UpdateLongAkskConfigRequest';
import { UpdateLongAkskConfigResponse } from './model/UpdateLongAkskConfigResponse';
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
import { UpgradeAutopilotClusterRequest } from './model/UpgradeAutopilotClusterRequest';
import { UpgradeAutopilotClusterResponse } from './model/UpgradeAutopilotClusterResponse';
import { UpgradeAutopilotWorkFlowUpdateRequest } from './model/UpgradeAutopilotWorkFlowUpdateRequest';
import { UpgradeAutopilotWorkFlowUpdateResponse } from './model/UpgradeAutopilotWorkFlowUpdateResponse';
import { UpgradeCluserResponseMetadata } from './model/UpgradeCluserResponseMetadata';
import { UpgradeClusterRequest } from './model/UpgradeClusterRequest';
import { UpgradeClusterRequestBody } from './model/UpgradeClusterRequestBody';
import { UpgradeClusterRequestMetadata } from './model/UpgradeClusterRequestMetadata';
import { UpgradeClusterResponse } from './model/UpgradeClusterResponse';
import { UpgradeFeatureGates } from './model/UpgradeFeatureGates';
import { UpgradeInfoSpec } from './model/UpgradeInfoSpec';
import { UpgradeInfoStatus } from './model/UpgradeInfoStatus';
import { UpgradeNodePool } from './model/UpgradeNodePool';
import { UpgradeNodePoolRequest } from './model/UpgradeNodePoolRequest';
import { UpgradeNodePoolResponse } from './model/UpgradeNodePoolResponse';
import { UpgradePath } from './model/UpgradePath';
import { UpgradePlan } from './model/UpgradePlan';
import { UpgradePlanSpec } from './model/UpgradePlanSpec';
import { UpgradePlanStatus } from './model/UpgradePlanStatus';
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
import { UploadAutopilotChartRequest } from './model/UploadAutopilotChartRequest';
import { UploadAutopilotChartRequestBody } from './model/UploadAutopilotChartRequestBody';
import { UploadAutopilotChartResponse } from './model/UploadAutopilotChartResponse';
import { UploadChartRequest } from './model/UploadChartRequest';
import { UploadChartRequestBody } from './model/UploadChartRequestBody';
import { UploadChartResponse } from './model/UploadChartResponse';
import { User } from './model/User';
import { UserPassword } from './model/UserPassword';
import { UserTag } from './model/UserTag';
import { Users } from './model/Users';
import { V2Job } from './model/V2Job';
import { V2JobSpec } from './model/V2JobSpec';
import { V2JobStatus } from './model/V2JobStatus';
import { V2JobTypeObject } from './model/V2JobTypeObject';
import { Versions } from './model/Versions';
import { VirtualSpace } from './model/VirtualSpace';
import { Volume } from './model/Volume';
import { VolumeMetadata } from './model/VolumeMetadata';
import { WorkFlowPhase } from './model/WorkFlowPhase';
import { WorkFlowSpec } from './model/WorkFlowSpec';
import { WorkFlowStatus } from './model/WorkFlowStatus';

export class CceClient {
    public static newBuilder(): ClientBuilder<CceClient> {
            let client = new ClientBuilder<CceClient>(newClient);
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
     * 该API用于在指定集群自定义节点池下纳管节点。竞价实例不支持纳管。
     * &gt;集群管理的URL格式为：https://Endpoint/uri。其中uri为资源路径，也即API访问的路径。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 自定义节点池纳管节点
     * @param {string} clusterId 集群ID，获取方式请参见[如何获取接口URI中参数](cce_02_0271.xml)。
     * @param {string} nodepoolId 节点池ID
     * @param {string} contentType 消息体的类型（格式）
     * @param {AddNodesToNodePoolList} addNodesToNodePoolList 纳管节点的请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public addNodesToNodePool(addNodesToNodePoolRequest?: AddNodesToNodePoolRequest): Promise<AddNodesToNodePoolResponse> {
        const options = ParamCreater().addNodesToNodePool(addNodesToNodePoolRequest);

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
     * 该API用于在指定集群下批量创建插件检查任务。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量创建插件检查任务
     * @param {string} clusterId 集群ID，获取方式请参见[如何获取接口URI中参数](cce_02_0271.xml)。
     * @param {string} contentType 消息体的类型（格式）
     * @param {AddonCheckRequest} batchCreateAddonCheckRequestBody 批量创建插件检查任务的请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchCreateAddonPrecheck(batchCreateAddonPrecheckRequest?: BatchCreateAddonPrecheckRequest): Promise<BatchCreateAddonPrecheckResponse> {
        const options = ParamCreater().batchCreateAddonPrecheck(batchCreateAddonPrecheckRequest);

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
     * 该API用于批量同步节点。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量同步节点
     * @param {string} clusterId 集群ID，获取方式请参见[如何获取接口URI中参数](cce_02_0271.xml)。
     * @param {string} contentType 消息体的类型（格式）
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchSyncNodes(batchSyncNodesRequest?: BatchSyncNodesRequest): Promise<BatchSyncNodesResponse> {
        const options = ParamCreater().batchSyncNodes(batchSyncNodesRequest);

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
     * 该API用于创建访问策略。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建访问策略
     * @param {AccessPolicy} [createAccessPolicy] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createAccessPolicy(createAccessPolicyRequest?: CreateAccessPolicyRequest): Promise<CreateAccessPolicyResponse> {
        const options = ParamCreater().createAccessPolicy(createAccessPolicyRequest);

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
     * @param {ClusterCertDuration} createKubernetesClusterCertRequestBody 创建集群证书的请求Body。
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
     * @param {'NodepoolScaleUp'} [nodepoolScaleUp] **参数解释**： 标明是否为nodepool扩容下发的创建节点请求。若为“NodepoolScaleUp”将根据当前集群子网实际能支持的用户节点数自动更新本次创建节点的个数，比如集群子网仅能支持的用户节点个数为1，当请求创建节点的个数大于1时，将自动调整为创建1个节点。若不为“NodepoolScaleUp”将自动更新对应节点池的实例数。 **约束限制**： 不涉及 **取值范围**： - NodepoolScaleUp：表示节点池扩容创建节点  **默认取值**： 无
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
     * 该API用于删除单个访问策略
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除访问策略
     * @param {string} policyId **参数解释：** 访问策略ID。获取方式请参见[获取访问策略列表](ListAccessPolicy.xml)。 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** 不涉及
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteAccessPolicy(deleteAccessPolicyRequest?: DeleteAccessPolicyRequest): Promise<DeleteAccessPolicyResponse> {
        const options = ParamCreater().deleteAccessPolicy(deleteAccessPolicyRequest);

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
     * @param {string} [storageType] 云存储的类型，和deleteVolume搭配使用。即deleteVolume和storageType必须同时配置。 - bs：EVS云硬盘存储 - nfs：SFS1.0弹性文件存储 - obs：OBS对象存储 - efs：SFS Turbo极速文件存储 
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
     * @param {string} nodeId **参数解释**： 节点ID，获取方式请参见[如何获取接口URI中参数](cce_02_0271.xml)。 **约束限制**： 不涉及 **取值范围**： 不涉及 **默认取值**： 不涉及 
     * @param {string} contentType 消息体的类型（格式）
     * @param {'NoScaleDown'} [nodepoolScaleDown] **参数解释**： 标明是否为nodepool下发的请求。若不为“NoScaleDown”将自动更新对应节点池的实例数 **约束限制**： 不涉及 **取值范围**： 不涉及 **默认取值**： 不涉及 
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
     * @param {string} [showResources] **参数解释：** 是否展示模板实例的资源信息。 **约束限制：** 不涉及 **取值范围：** 指定为“true”时展示模板实例的资源信息，不指定该参数时默认不展示。 **默认取值：** 无
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
     * 该API用于获取单个访问策略。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取访问策略详情
     * @param {string} policyId **参数解释：** 访问策略ID。获取方式请参见[获取访问策略列表](ListAccessPolicy.xml)。 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** 不涉及
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public getAccessPolicy(getAccessPolicyRequest?: GetAccessPolicyRequest): Promise<GetAccessPolicyResponse> {
        const options = ParamCreater().getAccessPolicy(getAccessPolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该API用于查询可用区列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询可用区列表
     * @param {string} contentType 消息体的类型（格式）
     * @param {'zh-cn' | 'en-us'} [locale] **参数解释**： 该参数用于按所在区域显示可用区名称 **取值范围**： - zh-cn: 显示中文名称，例如：“可用区1” - en-us: 显示英文名称，例如：“AZ1”
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public getAvaliableZone(getAvaliableZoneRequest?: GetAvaliableZoneRequest): Promise<GetAvaliableZoneResponse> {
        const options = ParamCreater().getAvaliableZone(getAvaliableZoneRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该API用于查询集群可售卖规格
     * &gt; 集群管理的URL格式为：https://Endpoint/uri。其中uri为资源路径，也即API访问的路径。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询集群可售卖规格
     * @param {string} contentType 消息体的类型（格式）
     * @param {'VirtualMachine' | 'ARM64'} clusterType **参数解释**： 该参数用于按集群架构查询可售卖规格 **取值范围**： - VirtualMachine: CCE集群 - ARM64: 鲲鹏集群
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public getClusterFlavorSpecs(getClusterFlavorSpecsRequest?: GetClusterFlavorSpecsRequest): Promise<GetClusterFlavorSpecsResponse> {
        const options = ParamCreater().getClusterFlavorSpecs(getClusterFlavorSpecsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该API用于获取集群longaksk的配置。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取集群LongAKSK配置
     * @param {string} clusterId 集群ID，获取方式请参见[如何获取接口URI中参数](cce_02_0271.xml)。
     * @param {string} contentType 消息体的类型（格式）
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public getClusterLongAkskConfig(getClusterLongAkskConfigRequest?: GetClusterLongAkskConfigRequest): Promise<GetClusterLongAkskConfigResponse> {
        const options = ParamCreater().getClusterLongAkskConfig(getClusterLongAkskConfigRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该API用于获取集群配额
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取集群配额
     * @param {string} contentType 消息体的类型（格式）
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public getClusterQuota(getClusterQuotaRequest?: GetClusterQuotaRequest): Promise<GetClusterQuotaResponse> {
        const options = ParamCreater().getClusterQuota(getClusterQuotaRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该API用于查询自定义标签
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询自定义标签
     * @param {string} contentType 消息体的类型（格式）
     * @param {'cce-cluster'} resourceType **参数解释**： 资源类型 **约束限制：** 不涉及 **取值范围：** - cce-cluster：集群  **默认取值：** 不涉及
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public getCustomizeTags(getCustomizeTagsRequest?: GetCustomizeTagsRequest): Promise<GetCustomizeTagsResponse> {
        const options = ParamCreater().getCustomizeTags(getCustomizeTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该API用于获取集群所有节点的标签
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取节点标签
     * @param {string} contentType 消息体的类型（格式）
     * @param {string} clusterId 集群ID，获取方式请参见[如何获取接口URI中参数](cce_02_0271.xml)。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public getLabels(getLabelsRequest?: GetLabelsRequest): Promise<GetLabelsResponse> {
        const options = ParamCreater().getLabels(getLabelsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该API用于获取项目LongAKSK的配置。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取项目LongAKSK配置
     * @param {string} contentType 消息体的类型（格式）
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public getLongAkskConfig(getLongAkskConfigRequest?: GetLongAkskConfigRequest): Promise<GetLongAkskConfigResponse> {
        const options = ParamCreater().getLongAkskConfig(getLongAkskConfigRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该API用于查询资源标签
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询资源标签
     * @param {string} contentType 消息体的类型（格式）
     * @param {'cce-cluster'} resourceType **参数解释**： 资源类型 **约束限制：** 不涉及 **取值范围：** - cce-cluster：集群  **默认取值：** 不涉及
     * @param {string} resourceId **参数解释**： 资源id。例：集群id，获取方式请参见[如何获取接口URI中参数](cce_02_0271.xml)。 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** 不涉及 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public getResourceTags(getResourceTagsRequest?: GetResourceTagsRequest): Promise<GetResourceTagsResponse> {
        const options = ParamCreater().getResourceTags(getResourceTagsRequest);

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
     * 该API用于获取访问策略列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取访问策略列表
     * @param {string} [clusterId] **参数解释：** 集群ID，仅返回与该集群相关的授权项。获取方式请参见[如何获取接口URI中参数](cce_02_0271.xml)。 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** 不涉及
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAccessPolicy(listAccessPolicyRequest?: ListAccessPolicyRequest): Promise<ListAccessPolicyResponse> {
        const options = ParamCreater().listAccessPolicy(listAccessPolicyRequest);

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
     * 获取集群下插件检查任务结果列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取插件检查任务结果列表
     * @param {string} clusterId 集群ID，获取方式请参见[如何获取接口URI中参数](cce_02_0271.xml)。
     * @param {string} contentType 消息体的类型（格式）
     * @param {'addonStatic' | 'addonUpgrade'} [type] **参数解释：** 根据插件检查类型筛选结果 **约束限制：** 不涉及 **取值范围：** - addonStatic: 运行中插件巡检 - addonUpgrade: 插件升级前检查  **默认取值：** 不涉及 
     * @param {string} [taskId] **参数解释：** 根据插件检查任务ID筛选结果，插件检查任务ID可以通过[批量创建插件检查任务](BatchCreateAddonPrecheck.xml)中的status.items[].metadata.taskID字段获取 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** 不涉及 
     * @param {string} [addonInstanceId] **参数解释：** 根据插件实例ID筛选结果，实例ID可以通过[获取AddonInstance列表](cce_02_0326.xml)中的items[].metadata.uid字段获取 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** 不涉及 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAddonPrecheckTasks(listAddonPrecheckTasksRequest?: ListAddonPrecheckTasksRequest): Promise<ListAddonPrecheckTasksResponse> {
        const options = ParamCreater().listAddonPrecheckTasks(listAddonPrecheckTasksRequest);

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
     * 该API用于获取指定集群下所有超节点的详细信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询集群中超节点列表
     * @param {string} clusterId 集群ID，获取方式请参见[如何获取接口URI中参数](cce_02_0271.xml)。
     * @param {number} [limit] **参数解释**： 设置每页显示的数据条数 **约束限制**： 不涉及 **取值范围**： 1到1000之间（含1和1000）的整数 **默认取值**： 100
     * @param {number} [offset] **参数解释**： 设置从第几条数据开始显示（用于翻页），比如输入0表示从第一条数据开始，输入10表示跳过前10条，从第11条开始显示，不填时默认从第一条开始显示（即默认为0）。 **约束限制**： 不涉及 **取值范围**： 32 位非负整数 **默认取值**： 0
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listHyperNodes(listHyperNodesRequest?: ListHyperNodesRequest): Promise<ListHyperNodesResponse> {
        const options = ParamCreater().listHyperNodes(listHyperNodesRequest);

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
     * 该API用于节点开启缩容保护，开启缩容保护的节点无法通过修改节点池个数的方式被缩容。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 节点开启缩容保护。
     * @param {string} clusterId 集群ID，获取方式请参见[如何获取接口URI中参数](cce_02_0271.xml)。
     * @param {string} contentType 消息体的类型（格式）
     * @param {LockNodeScaledownRequestBody} lockNodeScaledownRequestBody 节点开启缩容保护的请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public lockNodepoolNodeScaleDown(lockNodepoolNodeScaleDownRequest?: LockNodepoolNodeScaleDownRequest): Promise<LockNodepoolNodeScaleDownResponse> {
        const options = ParamCreater().lockNodepoolNodeScaleDown(lockNodepoolNodeScaleDownRequest);

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
     * @param {string} targetClusterId **参数解释**： 集群ID，获取方式请参见[如何获取接口URI中参数](cce_02_0271.xml)。 **约束限制**： 不涉及 **取值范围**： 不涉及 **默认取值**： 不涉及 
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
     * 该API用于将节点迁移到自定义节点池，仅default节点池下节点支持迁移。迁移过程节点无重置无重启，原节点密码将保留。
     * &gt;集群管理的URL格式为：https://Endpoint/uri。其中uri为资源路径，也即API访问的路径。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 节点迁移到自定义节点池。
     * @param {string} clusterId 集群ID，获取方式请参见[如何获取接口URI中参数](cce_02_0271.xml)。
     * @param {string} nodepoolId 节点池ID
     * @param {string} contentType 消息体的类型（格式）
     * @param {MigrateNodesToNodePoolList} migrateNodesToNodePoolList 迁移节点的请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public migrateToNodePool(migrateToNodePoolRequest?: MigrateToNodePoolRequest): Promise<MigrateToNodePoolResponse> {
        const options = ParamCreater().migrateToNodePool(migrateToNodePoolRequest);

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
     * 该API用于吊销指定集群的用户证书
     * 
     * &gt; 吊销操作完成后，此证书申请人之前下载的证书和 kubectl 配置文件无法再用于连接集群。此证书申请人可以重新下载证书或 kubectl 配置文件，并使用新下载的文件连接集群
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 吊销用户的集群证书
     * @param {string} clusterId 集群ID，获取方式请参见[如何获取接口URI中参数](cce_02_0271.xml)。
     * @param {string} contentType 消息体的类型（格式）
     * @param {CertRevokeConfigRequestBody} certRevokeConfigRequestBody 吊销用户证书的请求Body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public revokeKubernetesClusterCert(revokeKubernetesClusterCertRequest?: RevokeKubernetesClusterCertRequest): Promise<RevokeKubernetesClusterCertResponse> {
        const options = ParamCreater().revokeKubernetesClusterCert(revokeKubernetesClusterCertRequest);

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
     * @param {'control' | 'audit' | 'system-addon'} [type] **参数解释**： 组件类型，不填写则查询全部类型。  **约束限制**： 合法取值为control，audit，system-addon  **取值范围**： - control: 控制面组件日志。 - audit: 控制面审计日志。 - system-addon: 系统插件日志。  **默认取值**： 无
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
     * 该API用于根据集群版本类型等查询集群支持的详细配置项，用于集群创建时指定。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取集群支持的可配置参数列表
     * @param {string} contentType 消息体的类型（格式）
     * @param {string} [clusterType] **参数解释**： 该参数用于过滤集群架构 **约束限制**： 不涉及 **取值范围**： - ARM64: 仅获取鲲鹏集群支持的配置项  **默认取值**： 不涉及
     * @param {string} [clusterVersion] **参数解释**： 该参数用于获取指定集群版本支持的配置项 **约束限制**： 不涉及 **取值范围**： 不涉及 **默认取值**： 不涉及
     * @param {string} [clusterID] **参数解释**： 该参数用于获取指定集群支持的配置项 **约束限制**： 不涉及 **取值范围**： 不涉及 **默认取值**： 不涉及
     * @param {string} [networkMode] **参数解释**： 该参数用于过滤掉集群网络模型相关配置项 **约束限制**： 不涉及 **取值范围**： - eni: 过滤掉云原生网络2.0模型相关配置  **默认取值**： 不涉及
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showClusterSupportConfiguration(showClusterSupportConfigurationRequest?: ShowClusterSupportConfigurationRequest): Promise<ShowClusterSupportConfigurationResponse> {
        const options = ParamCreater().showClusterSupportConfiguration(showClusterSupportConfigurationRequest);

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
     * 该API用于查询特性开关状态
     * &gt; 集群管理的URL格式为：https://Endpoint/uri。其中uri为资源路径，也即API访问的路径。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询特性开关状态
     * @param {string} contentType 消息体的类型（格式）
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showFeatureGates(showFeatureGatesRequest?: ShowFeatureGatesRequest): Promise<ShowFeatureGatesResponse> {
        const options = ParamCreater().showFeatureGates(showFeatureGatesRequest);

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
     * @param {string} jobId **参数解释**： 任务ID，获取方式请参见[如何获取接口URI中参数](cce_02_0271.xml)。 **约束限制**： 不涉及 **取值范围**： 不涉及 **默认取值**： 不涉及 
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
     * @param {string} nodeId **参数解释**： 节点ID，获取方式请参见[如何获取接口URI中参数](cce_02_0271.xml)。 **约束限制**： 不涉及 **取值范围**： 不涉及 **默认取值**： 不涉及 
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
     * @param {string} nodepoolId **参数解释：** 节点池ID，获取方式请参见[如何获取接口URI中参数](cce_02_0271.xml)。 **约束限制：** 不涉及 **取值范围：** - 节点池ID：修改指定节点池配置管理参数 - master：修改集群配置中心的配置管理参数  **默认取值：** 不涉及
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
     * @param {string} partitionName **参数解释**： 分区名称 **约束限制**： 不涉及 **取值范围**： 不涉及 **默认取值**： 不涉及 
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
     * @param {string} [showResources] **参数解释：** 是否展示模板实例的资源信息。 **约束限制：** 不涉及 **取值范围：** 指定为“true”时展示模板实例的资源信息，不指定该参数时默认不展示。 **默认取值：** 无
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
     * 该API用于同步节点。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 同步节点
     * @param {string} clusterId 集群ID，获取方式请参见[如何获取接口URI中参数](cce_02_0271.xml)。
     * @param {string} nodeId **参数解释**： 节点ID，获取方式请参见[如何获取接口URI中参数](cce_02_0271.xml)。 **约束限制**： 不涉及 **取值范围**： 不涉及 **默认取值**： 不涉及 
     * @param {string} contentType 消息体的类型（格式）
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public syncNode(syncNodeRequest?: SyncNodeRequest): Promise<SyncNodeResponse> {
        const options = ParamCreater().syncNode(syncNodeRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该API用于节点关闭缩容保护，关闭缩容保护的节点可以通过修改节点池个数的方式被缩容，只允许按需节点关闭缩容保护。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 节点关闭缩容保护。
     * @param {string} clusterId 集群ID，获取方式请参见[如何获取接口URI中参数](cce_02_0271.xml)。
     * @param {string} contentType 消息体的类型（格式）
     * @param {UnlockNodeScaledownRequestBody} unlockNodeScaledownRequestBody 节点关闭缩容保护的请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public unlockNodepoolNodeScaleDown(unlockNodepoolNodeScaleDownRequest?: UnlockNodepoolNodeScaleDownRequest): Promise<UnlockNodepoolNodeScaleDownResponse> {
        const options = ParamCreater().unlockNodepoolNodeScaleDown(unlockNodepoolNodeScaleDownRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该API用于更新单个访问策略。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新访问策略
     * @param {string} policyId **参数解释：** 访问策略ID。获取方式请参见[获取访问策略列表](ListAccessPolicy.xml)。 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** 不涉及
     * @param {AccessPolicy} [accessPolicy] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateAccessPolicy(updateAccessPolicyRequest?: UpdateAccessPolicyRequest): Promise<UpdateAccessPolicyResponse> {
        const options = ParamCreater().updateAccessPolicy(updateAccessPolicyRequest);

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
     * 该API用于更新集群LongAKSK的配置。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新集群LongAKSK配置
     * @param {string} clusterId 集群ID，获取方式请参见[如何获取接口URI中参数](cce_02_0271.xml)。
     * @param {string} contentType 消息体的类型（格式）
     * @param {UpdateClusterLongAKSKConfigRequestBody} updateClusterLongAKSKConfigRequestBody 更新集群Longaksk配置请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateClusterLongAkskConfig(updateClusterLongAkskConfigRequest?: UpdateClusterLongAkskConfigRequest): Promise<UpdateClusterLongAkskConfigResponse> {
        const options = ParamCreater().updateClusterLongAkskConfig(updateClusterLongAkskConfigRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该API用于更新项目longaksk的配置。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新项目LongAKSK配置
     * @param {string} contentType 消息体的类型（格式）
     * @param {UpdateLongAKSKConfigRequestBody} updateLongAKSKConfigRequestBody LongAKSK配置请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateLongAkskConfig(updateLongAkskConfigRequest?: UpdateLongAkskConfigRequest): Promise<UpdateLongAkskConfigResponse> {
        const options = ParamCreater().updateLongAkskConfig(updateLongAkskConfigRequest);

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
     * @param {string} nodeId **参数解释**： 节点ID，获取方式请参见[如何获取接口URI中参数](cce_02_0271.xml)。 **约束限制**： 不涉及 **取值范围**： 不涉及 **默认取值**： 不涉及 
     * @param {string} contentType 消息体的类型（格式）
     * @param {ClusterNodeInformation} updateNodeRequestBody **参数解释**： metadata是节点对象的元数据定义，是集合类的元素类型，包含一组由不同名称定义的属性。 **约束限制**： 不涉及 
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
     * &gt; - 当前仅支持更新节点池名称，spec下的initialNodeCount，k8sTags，taints，login，userTags与节点池的扩缩容配置相关字段。
     * &gt; - 若此次更新节点池未设置initialNodeCount的相关值，节点池期望节点个数将默认更新为初始值0，如果此时节点池节点个数大于0将导致节点池缩容。若用户期望不填该参数，请在此次更新设置spec下的ignoreInitialNodeCount为true，用于忽略spec.initialNodeCount参数。特殊场景说明：若节点池当前节点数等于0时，可忽略initialNodeCount和ignoreInitialNodeCount参数配置。
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
     * @param {string} nodepoolId **参数解释：** 节点池ID，获取方式请参见[如何获取接口URI中参数](cce_02_0271.xml)。 **约束限制：** 不涉及 **取值范围：** - 节点池ID：修改指定节点池配置管理参数 - master：修改集群配置中心的配置管理参数  **默认取值：** 不涉及
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
     * @param {string} partitionName **参数解释**： 分区名称 **约束限制**： 不涉及 **取值范围**： 不涉及 **默认取值**： 不涉及 
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
     * @param {string} [showResources] **参数解释：** 是否展示模板实例的资源信息。 **约束限制：** 不涉及 **取值范围：** 指定为“true”时展示模板实例的资源信息，不指定该参数时默认不展示。 **默认取值：** 无
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
     * 该API用于同步节点池中已有节点的配置
     * &gt; 集群管理的URL格式为：https://Endpoint/uri。其中uri为资源路径，也即API访问的路径
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 同步节点池
     * @param {string} clusterId 集群ID，获取方式请参见[如何获取接口URI中参数](cce_02_0271.xml)。
     * @param {string} nodepoolId 节点池ID
     * @param {string} contentType 消息体的类型（格式）
     * @param {UpgradeNodePool} upgradeNodePoolRequestBody 同步节点池的请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public upgradeNodePool(upgradeNodePoolRequest?: UpgradeNodePoolRequest): Promise<UpgradeNodePoolResponse> {
        const options = ParamCreater().upgradeNodePool(upgradeNodePoolRequest);

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
    public batchCreateAutopilotClusterTags(batchCreateAutopilotClusterTagsRequest?: BatchCreateAutopilotClusterTagsRequest): Promise<BatchCreateAutopilotClusterTagsResponse> {
        const options = ParamCreater().batchCreateAutopilotClusterTags(batchCreateAutopilotClusterTagsRequest);

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
    public batchDeleteAutopilotClusterTags(batchDeleteAutopilotClusterTagsRequest?: BatchDeleteAutopilotClusterTagsRequest): Promise<BatchDeleteAutopilotClusterTagsResponse> {
        const options = ParamCreater().batchDeleteAutopilotClusterTags(batchDeleteAutopilotClusterTagsRequest);

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
    public createAutopilotAddonInstance(createAutopilotAddonInstanceRequest?: CreateAutopilotAddonInstanceRequest): Promise<CreateAutopilotAddonInstanceResponse> {
        const options = ParamCreater().createAutopilotAddonInstance(createAutopilotAddonInstanceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该API用于创建一个空集群（即只有控制节点Master，没有工作节点Node）。
     * 
     * 
     * &gt;   - 集群管理的URL格式为：https://Endpoint/uri。其中uri为资源路径，也即API访问的路径。
     * &gt;   - 调用该接口创建集群时，默认不安装ICAgent，若需安装ICAgent，可在请求Body参数的annotations中加入\&quot;cluster.install.addons.external/install\&quot;:\&quot;[{\&quot;addonTemplateName\&quot;:\&quot;icagent\&quot;}]\&quot;的集群注解，将在创建集群时自动安装ICAgent。ICAgent是应用性能管理APM的采集代理，运行在应用所在的服务器上，用于实时采集探针所获取的数据，安装ICAgent是使用应用性能管理APM的前提。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建集群
     * @param {string} contentType 消息体的类型（格式）
     * @param {AutopilotCluster} createClusterRequestBody 集群规格信息请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createAutopilotCluster(createAutopilotClusterRequest?: CreateAutopilotClusterRequest): Promise<CreateAutopilotClusterResponse> {
        const options = ParamCreater().createAutopilotCluster(createAutopilotClusterRequest);

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
    public createAutopilotClusterMasterSnapshot(createAutopilotClusterMasterSnapshotRequest?: CreateAutopilotClusterMasterSnapshotRequest): Promise<CreateAutopilotClusterMasterSnapshotResponse> {
        const options = ParamCreater().createAutopilotClusterMasterSnapshot(createAutopilotClusterMasterSnapshotRequest);

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
    public createAutopilotKubernetesClusterCert(createAutopilotKubernetesClusterCertRequest?: CreateAutopilotKubernetesClusterCertRequest): Promise<CreateAutopilotKubernetesClusterCertResponse> {
        const options = ParamCreater().createAutopilotKubernetesClusterCert(createAutopilotKubernetesClusterCertRequest);

         // @ts-ignore
        options['responseHeaders'] = ['Port-ID'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该API用于创建集群维护窗口。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建集群维护窗口
     * @param {string} clusterId 集群ID，获取方式请参见[如何获取接口URI中参数](cce_02_0271.xml)。
     * @param {string} contentType 消息体的类型（格式）
     * @param {MaintenanceWindow} createAutopilotMaintenanceWindowRequestBody 请求body体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createAutopilotMaintenanceWindow(createAutopilotMaintenanceWindowRequest?: CreateAutopilotMaintenanceWindowRequest): Promise<CreateAutopilotMaintenanceWindowResponse> {
        const options = ParamCreater().createAutopilotMaintenanceWindow(createAutopilotMaintenanceWindowRequest);

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
    public createAutopilotPostCheck(createAutopilotPostCheckRequest?: CreateAutopilotPostCheckRequest): Promise<CreateAutopilotPostCheckResponse> {
        const options = ParamCreater().createAutopilotPostCheck(createAutopilotPostCheckRequest);

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
    public createAutopilotPreCheck(createAutopilotPreCheckRequest?: CreateAutopilotPreCheckRequest): Promise<CreateAutopilotPreCheckResponse> {
        const options = ParamCreater().createAutopilotPreCheck(createAutopilotPreCheckRequest);

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
    public createAutopilotRelease(createAutopilotReleaseRequest?: CreateAutopilotReleaseRequest): Promise<CreateAutopilotReleaseResponse> {
        const options = ParamCreater().createAutopilotRelease(createAutopilotReleaseRequest);

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
    public createAutopilotUpgradeWorkFlow(createAutopilotUpgradeWorkFlowRequest?: CreateAutopilotUpgradeWorkFlowRequest): Promise<CreateAutopilotUpgradeWorkFlowResponse> {
        const options = ParamCreater().createAutopilotUpgradeWorkFlow(createAutopilotUpgradeWorkFlowRequest);

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
    public deleteAutopilotAddonInstance(deleteAutopilotAddonInstanceRequest?: DeleteAutopilotAddonInstanceRequest): Promise<DeleteAutopilotAddonInstanceResponse> {
        const options = ParamCreater().deleteAutopilotAddonInstance(deleteAutopilotAddonInstanceRequest);

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
    public deleteAutopilotChart(deleteAutopilotChartRequest?: DeleteAutopilotChartRequest): Promise<DeleteAutopilotChartResponse> {
        const options = ParamCreater().deleteAutopilotChart(deleteAutopilotChartRequest);

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
     * @param {'true' | 'block' | 'try' | 'false' | 'skip'} [deleteNet] 是否删除elb（弹性负载均衡）等集群Service/Ingress相关资源。 枚举取值： - true或block (执行删除流程，失败则阻塞后续流程，默认选项) - try (执行删除流程，失败则忽略，并继续执行后续流程) - false或skip (跳过删除流程)
     * @param {'true' | 'block' | 'try' | 'false' | 'skip'} [deleteObs] 是否删除obs（对象存储卷）， 枚举取值： - true或block (执行删除流程，失败则阻塞后续流程) - try (执行删除流程，失败则忽略，并继续执行后续流程) - false或skip (跳过删除流程，默认选项)
     * @param {'true' | 'block' | 'try' | 'false' | 'skip'} [deleteSfs30] 是否删除sfs3.0（文件存储卷3.0）， 枚举取值： - true或block (执行删除流程，失败则阻塞后续流程) - try (执行删除流程，失败则忽略，并继续执行后续流程) - false或skip (跳过删除流程，默认选项)
     * @param {'Delete_Log_Group' | 'Delete_Master_Log_Stream' | 'Retain'} [ltsReclaimPolicy] 是否删除LTS资源（日志组/日志流）。 枚举取值： - Delete_Log_Group：删除日志组，失败则忽略，并继续执行后续流程。 - Delete_Master_Log_Stream：删除Master接入日志流，失败则忽略，并继续执行后续流程，默认选项。 - Retain：跳过删除流程。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteAutopilotCluster(deleteAutopilotClusterRequest?: DeleteAutopilotClusterRequest): Promise<DeleteAutopilotClusterResponse> {
        const options = ParamCreater().deleteAutopilotCluster(deleteAutopilotClusterRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该API用于删除集群维护窗口。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除集群维护窗口
     * @param {string} clusterId 集群ID，获取方式请参见[如何获取接口URI中参数](cce_02_0271.xml)。
     * @param {string} contentType 消息体的类型（格式）
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteAutopilotMaintenanceWindow(deleteAutopilotMaintenanceWindowRequest?: DeleteAutopilotMaintenanceWindowRequest): Promise<DeleteAutopilotMaintenanceWindowResponse> {
        const options = ParamCreater().deleteAutopilotMaintenanceWindow(deleteAutopilotMaintenanceWindowRequest);

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
    public deleteAutopilotRelease(deleteAutopilotReleaseRequest?: DeleteAutopilotReleaseRequest): Promise<DeleteAutopilotReleaseResponse> {
        const options = ParamCreater().deleteAutopilotRelease(deleteAutopilotReleaseRequest);

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
    public downloadAutopilotChart(downloadAutopilotChartRequest?: DownloadAutopilotChartRequest): Promise<DownloadAutopilotChartResponse> {
        const options = ParamCreater().downloadAutopilotChart(downloadAutopilotChartRequest);

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
    public listAutopilotAddonInstances(listAutopilotAddonInstancesRequest?: ListAutopilotAddonInstancesRequest): Promise<ListAutopilotAddonInstancesResponse> {
        const options = ParamCreater().listAutopilotAddonInstances(listAutopilotAddonInstancesRequest);

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
    public listAutopilotAddonTemplates(listAutopilotAddonTemplatesRequest?: ListAutopilotAddonTemplatesRequest): Promise<ListAutopilotAddonTemplatesResponse> {
        const options = ParamCreater().listAutopilotAddonTemplates(listAutopilotAddonTemplatesRequest);

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
    public listAutopilotCharts(listAutopilotChartsRequest?: ListAutopilotChartsRequest): Promise<ListAutopilotChartsResponse> {
        const options = ParamCreater().listAutopilotCharts(listAutopilotChartsRequest);

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
    public listAutopilotClusterMasterSnapshotTasks(listAutopilotClusterMasterSnapshotTasksRequest?: ListAutopilotClusterMasterSnapshotTasksRequest): Promise<ListAutopilotClusterMasterSnapshotTasksResponse> {
        const options = ParamCreater().listAutopilotClusterMasterSnapshotTasks(listAutopilotClusterMasterSnapshotTasksRequest);

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
    public listAutopilotClusterUpgradeFeatureGates(listAutopilotClusterUpgradeFeatureGatesRequest?: ListAutopilotClusterUpgradeFeatureGatesRequest): Promise<ListAutopilotClusterUpgradeFeatureGatesResponse> {
        const options = ParamCreater().listAutopilotClusterUpgradeFeatureGates(listAutopilotClusterUpgradeFeatureGatesRequest);

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
    public listAutopilotClusterUpgradePaths(listAutopilotClusterUpgradePathsRequest?: ListAutopilotClusterUpgradePathsRequest): Promise<ListAutopilotClusterUpgradePathsResponse> {
        const options = ParamCreater().listAutopilotClusterUpgradePaths(listAutopilotClusterUpgradePathsRequest);

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
     * @param {'Available' | 'Unavailable' | 'Creating' | 'Deleting' | 'Upgrading' | 'RollingBack' | 'RollbackFailed' | 'Error'} [status] 集群状态，取值如下 - Available：可用，表示集群处于正常状态。 - Unavailable：不可用，表示集群异常，需手动删除。 - Creating：创建中，表示集群正处于创建过程中。 - Deleting：删除中，表示集群正处于删除过程中。 - Upgrading：升级中，表示集群正处于升级过程中。 - RollingBack：回滚中，表示集群正处于回滚过程中。 - RollbackFailed：回滚异常，表示集群回滚异常。 - Error：错误，表示集群资源异常，可尝试手动删除。
     * @param {'VirtualMachine'} [type] 集群类型： - VirtualMachine：CCE集群
     * @param {string} [version] 集群版本过滤
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAutopilotClusters(listAutopilotClustersRequest?: ListAutopilotClustersRequest): Promise<ListAutopilotClustersResponse> {
        const options = ParamCreater().listAutopilotClusters(listAutopilotClustersRequest);

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
    public listAutopilotPreCheckTasks(listAutopilotPreCheckTasksRequest?: ListAutopilotPreCheckTasksRequest): Promise<ListAutopilotPreCheckTasksResponse> {
        const options = ParamCreater().listAutopilotPreCheckTasks(listAutopilotPreCheckTasksRequest);

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
    public listAutopilotReleases(listAutopilotReleasesRequest?: ListAutopilotReleasesRequest): Promise<ListAutopilotReleasesResponse> {
        const options = ParamCreater().listAutopilotReleases(listAutopilotReleasesRequest);

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
    public listAutopilotUpgradeClusterTasks(listAutopilotUpgradeClusterTasksRequest?: ListAutopilotUpgradeClusterTasksRequest): Promise<ListAutopilotUpgradeClusterTasksResponse> {
        const options = ParamCreater().listAutopilotUpgradeClusterTasks(listAutopilotUpgradeClusterTasksRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该API用于获取集群自动升级计划。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取自动升级计划
     * @param {string} clusterId 集群ID，获取方式请参见[如何获取接口URI中参数](cce_02_0271.xml)。
     * @param {string} contentType 消息体的类型（格式）
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAutopilotUpgradePlans(listAutopilotUpgradePlansRequest?: ListAutopilotUpgradePlansRequest): Promise<ListAutopilotUpgradePlansResponse> {
        const options = ParamCreater().listAutopilotUpgradePlans(listAutopilotUpgradePlansRequest);

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
    public listAutopilotUpgradeWorkFlows(listAutopilotUpgradeWorkFlowsRequest?: ListAutopilotUpgradeWorkFlowsRequest): Promise<ListAutopilotUpgradeWorkFlowsResponse> {
        const options = ParamCreater().listAutopilotUpgradeWorkFlows(listAutopilotUpgradeWorkFlowsRequest);

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
    public retryAutopilotUpgradeClusterTask(retryAutopilotUpgradeClusterTaskRequest?: RetryAutopilotUpgradeClusterTaskRequest): Promise<RetryAutopilotUpgradeClusterTaskResponse> {
        const options = ParamCreater().retryAutopilotUpgradeClusterTask(retryAutopilotUpgradeClusterTaskRequest);

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
    public rollbackAutopilotAddonInstance(rollbackAutopilotAddonInstanceRequest?: RollbackAutopilotAddonInstanceRequest): Promise<RollbackAutopilotAddonInstanceResponse> {
        const options = ParamCreater().rollbackAutopilotAddonInstance(rollbackAutopilotAddonInstanceRequest);

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
    public showAutopilotAddonInstance(showAutopilotAddonInstanceRequest?: ShowAutopilotAddonInstanceRequest): Promise<ShowAutopilotAddonInstanceResponse> {
        const options = ParamCreater().showAutopilotAddonInstance(showAutopilotAddonInstanceRequest);

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
    public showAutopilotChart(showAutopilotChartRequest?: ShowAutopilotChartRequest): Promise<ShowAutopilotChartResponse> {
        const options = ParamCreater().showAutopilotChart(showAutopilotChartRequest);

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
    public showAutopilotChartValues(showAutopilotChartValuesRequest?: ShowAutopilotChartValuesRequest): Promise<ShowAutopilotChartValuesResponse> {
        const options = ParamCreater().showAutopilotChartValues(showAutopilotChartValuesRequest);

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
    public showAutopilotCluster(showAutopilotClusterRequest?: ShowAutopilotClusterRequest): Promise<ShowAutopilotClusterResponse> {
        const options = ParamCreater().showAutopilotCluster(showAutopilotClusterRequest);

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
     * @param {'control' | 'audit' | 'system-addon'} [type] **参数解释**： 组件类型，不填写则查询全部类型。  **约束限制**： 合法取值为control，audit，system-addon  **取值范围**： - control: 控制面组件日志。 - audit: 控制面审计日志。 - system-addon: 系统插件日志。  **默认取值**： 无
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showAutopilotClusterConfig(showAutopilotClusterConfigRequest?: ShowAutopilotClusterConfigRequest): Promise<ShowAutopilotClusterConfigResponse> {
        const options = ParamCreater().showAutopilotClusterConfig(showAutopilotClusterConfigRequest);

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
    public showAutopilotClusterEndpoints(showAutopilotClusterEndpointsRequest?: ShowAutopilotClusterEndpointsRequest): Promise<ShowAutopilotClusterEndpointsResponse> {
        const options = ParamCreater().showAutopilotClusterEndpoints(showAutopilotClusterEndpointsRequest);

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
    public showAutopilotClusterUpgradeInfo(showAutopilotClusterUpgradeInfoRequest?: ShowAutopilotClusterUpgradeInfoRequest): Promise<ShowAutopilotClusterUpgradeInfoResponse> {
        const options = ParamCreater().showAutopilotClusterUpgradeInfo(showAutopilotClusterUpgradeInfoRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该API用于查询特性开关状态
     * &gt; 集群管理的URL格式为：https://Endpoint/uri。其中uri为资源路径，也即API访问的路径。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询特性开关状态
     * @param {string} contentType 消息体的类型（格式）
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showAutopilotFeatureGates(showAutopilotFeatureGatesRequest?: ShowAutopilotFeatureGatesRequest): Promise<ShowAutopilotFeatureGatesResponse> {
        const options = ParamCreater().showAutopilotFeatureGates(showAutopilotFeatureGatesRequest);

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
     * @param {string} jobId **参数解释**： 任务ID，获取方式请参见[如何获取接口URI中参数](cce_02_0271.xml)。 **约束限制**： 不涉及 **取值范围**： 不涉及 **默认取值**： 不涉及 
     * @param {string} contentType 消息体的类型（格式）
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showAutopilotJob(showAutopilotJobRequest?: ShowAutopilotJobRequest): Promise<ShowAutopilotJobResponse> {
        const options = ParamCreater().showAutopilotJob(showAutopilotJobRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该API用于获取集群维护窗口。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取集群维护窗口
     * @param {string} clusterId 集群ID，获取方式请参见[如何获取接口URI中参数](cce_02_0271.xml)。
     * @param {string} contentType 消息体的类型（格式）
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showAutopilotMaintenanceWindow(showAutopilotMaintenanceWindowRequest?: ShowAutopilotMaintenanceWindowRequest): Promise<ShowAutopilotMaintenanceWindowResponse> {
        const options = ParamCreater().showAutopilotMaintenanceWindow(showAutopilotMaintenanceWindowRequest);

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
    public showAutopilotPreCheck(showAutopilotPreCheckRequest?: ShowAutopilotPreCheckRequest): Promise<ShowAutopilotPreCheckResponse> {
        const options = ParamCreater().showAutopilotPreCheck(showAutopilotPreCheckRequest);

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
    public showAutopilotQuotas(showAutopilotQuotasRequest?: ShowAutopilotQuotasRequest): Promise<ShowAutopilotQuotasResponse> {
        const options = ParamCreater().showAutopilotQuotas(showAutopilotQuotasRequest);

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
    public showAutopilotRelease(showAutopilotReleaseRequest?: ShowAutopilotReleaseRequest): Promise<ShowAutopilotReleaseResponse> {
        const options = ParamCreater().showAutopilotRelease(showAutopilotReleaseRequest);

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
    public showAutopilotReleaseHistory(showAutopilotReleaseHistoryRequest?: ShowAutopilotReleaseHistoryRequest): Promise<ShowAutopilotReleaseHistoryResponse> {
        const options = ParamCreater().showAutopilotReleaseHistory(showAutopilotReleaseHistoryRequest);

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
    public showAutopilotUpgradeClusterTask(showAutopilotUpgradeClusterTaskRequest?: ShowAutopilotUpgradeClusterTaskRequest): Promise<ShowAutopilotUpgradeClusterTaskResponse> {
        const options = ParamCreater().showAutopilotUpgradeClusterTask(showAutopilotUpgradeClusterTaskRequest);

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
    public showAutopilotUpgradeWorkFlow(showAutopilotUpgradeWorkFlowRequest?: ShowAutopilotUpgradeWorkFlowRequest): Promise<ShowAutopilotUpgradeWorkFlowResponse> {
        const options = ParamCreater().showAutopilotUpgradeWorkFlow(showAutopilotUpgradeWorkFlowRequest);

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
    public showAutopilotUserChartsQuotas(showAutopilotUserChartsQuotasRequest?: ShowAutopilotUserChartsQuotasRequest): Promise<ShowAutopilotUserChartsQuotasResponse> {
        const options = ParamCreater().showAutopilotUserChartsQuotas(showAutopilotUserChartsQuotasRequest);

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
    public updateAutopilotAddonInstance(updateAutopilotAddonInstanceRequest?: UpdateAutopilotAddonInstanceRequest): Promise<UpdateAutopilotAddonInstanceResponse> {
        const options = ParamCreater().updateAutopilotAddonInstance(updateAutopilotAddonInstanceRequest);

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
    public updateAutopilotChart(updateAutopilotChartRequest?: UpdateAutopilotChartRequest): Promise<UpdateAutopilotChartResponse> {
        const options = ParamCreater().updateAutopilotChart(updateAutopilotChartRequest);

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
     * @param {AutopilotClusterInformation} updateClusterRequestBody spec是集合类的元素类型，用户对需要管理的集群对象进行详细描述的主体部分都在spec中给出。系统通过spec的描述来创建或更新对象。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateAutopilotCluster(updateAutopilotClusterRequest?: UpdateAutopilotClusterRequest): Promise<UpdateAutopilotClusterResponse> {
        const options = ParamCreater().updateAutopilotCluster(updateAutopilotClusterRequest);

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
    public updateAutopilotClusterEip(updateAutopilotClusterEipRequest?: UpdateAutopilotClusterEipRequest): Promise<UpdateAutopilotClusterEipResponse> {
        const options = ParamCreater().updateAutopilotClusterEip(updateAutopilotClusterEipRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该API用于更新集群维护窗口。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新集群维护窗口
     * @param {string} clusterId 集群ID，获取方式请参见[如何获取接口URI中参数](cce_02_0271.xml)。
     * @param {string} contentType 消息体的类型（格式）
     * @param {MaintenanceWindow} updateAutopilotMaintenanceWindowRequestBody 请求body体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateAutopilotMaintenanceWindow(updateAutopilotMaintenanceWindowRequest?: UpdateAutopilotMaintenanceWindowRequest): Promise<UpdateAutopilotMaintenanceWindowResponse> {
        const options = ParamCreater().updateAutopilotMaintenanceWindow(updateAutopilotMaintenanceWindowRequest);

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
    public updateAutopilotRelease(updateAutopilotReleaseRequest?: UpdateAutopilotReleaseRequest): Promise<UpdateAutopilotReleaseResponse> {
        const options = ParamCreater().updateAutopilotRelease(updateAutopilotReleaseRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该API用于延期集群自动升级计划。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 延期自动升级计划
     * @param {string} clusterId 集群ID，获取方式请参见[如何获取接口URI中参数](cce_02_0271.xml)。
     * @param {string} upgradePlanId 集群自动升级计划ID
     * @param {string} contentType 消息体的类型（格式）
     * @param {DelayUpgradePlanRequestBody} delayUpgradePlanRequestBody 延期自动升级计划请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateAutopilotUpgradePlan(updateAutopilotUpgradePlanRequest?: UpdateAutopilotUpgradePlanRequest): Promise<UpdateAutopilotUpgradePlanResponse> {
        const options = ParamCreater().updateAutopilotUpgradePlan(updateAutopilotUpgradePlanRequest);

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
    public upgradeAutopilotCluster(upgradeAutopilotClusterRequest?: UpgradeAutopilotClusterRequest): Promise<UpgradeAutopilotClusterResponse> {
        const options = ParamCreater().upgradeAutopilotCluster(upgradeAutopilotClusterRequest);

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
    public upgradeAutopilotWorkFlowUpdate(upgradeAutopilotWorkFlowUpdateRequest?: UpgradeAutopilotWorkFlowUpdateRequest): Promise<UpgradeAutopilotWorkFlowUpdateResponse> {
        const options = ParamCreater().upgradeAutopilotWorkFlowUpdate(upgradeAutopilotWorkFlowUpdateRequest);

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
    public uploadAutopilotChart(uploadAutopilotChartRequest?: UploadAutopilotChartRequest): Promise<UploadAutopilotChartResponse> {
        const options = ParamCreater().uploadAutopilotChart(uploadAutopilotChartRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该API用于删除指定项目下的Job。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除Job
     * @param {string} jobId **参数解释**： 任务ID，获取方式请参见[如何获取接口URI中参数](cce_02_0271.xml)。 **约束限制**： 不涉及 **取值范围**： 不涉及 **默认取值**： 不涉及 
     * @param {string} contentType 消息体的类型（格式）
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteAutopilotJob(deleteAutopilotJobRequest?: DeleteAutopilotJobRequest): Promise<DeleteAutopilotJobResponse> {
        const options = ParamCreater().deleteAutopilotJob(deleteAutopilotJobRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该API用于获取指定项目下的Job详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取Job详情
     * @param {string} jobId **参数解释**： 任务ID，获取方式请参见[如何获取接口URI中参数](cce_02_0271.xml)。 **约束限制**： 不涉及 **取值范围**： 不涉及 **默认取值**： 不涉及 
     * @param {string} contentType 消息体的类型（格式）
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public getAutopilotOneJob(getAutopilotOneJobRequest?: GetAutopilotOneJobRequest): Promise<GetAutopilotOneJobResponse> {
        const options = ParamCreater().getAutopilotOneJob(getAutopilotOneJobRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该API用于获取指定项目下的所有jobs。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取Job列表
     * @param {string} contentType 消息体的类型（格式）
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAutopilotJobs(listAutopilotJobsRequest?: ListAutopilotJobsRequest): Promise<ListAutopilotJobsResponse> {
        const options = ParamCreater().listAutopilotJobs(listAutopilotJobsRequest);

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
         * 该API用于在指定集群自定义节点池下纳管节点。竞价实例不支持纳管。
         * &gt;集群管理的URL格式为：https://Endpoint/uri。其中uri为资源路径，也即API访问的路径。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        addNodesToNodePool(addNodesToNodePoolRequest?: AddNodesToNodePoolRequest) {
            const options = {
                method: "POST",
                url: "/api/v3/projects/{project_id}/clusters/{cluster_id}/nodepools/{nodepool_id}/nodes/add",
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

            if (addNodesToNodePoolRequest !== null && addNodesToNodePoolRequest !== undefined) {
                if (addNodesToNodePoolRequest instanceof AddNodesToNodePoolRequest) {
                    clusterId = addNodesToNodePoolRequest.clusterId;
                    nodepoolId = addNodesToNodePoolRequest.nodepoolId;
                    contentType = addNodesToNodePoolRequest.contentType;
                    body = addNodesToNodePoolRequest.body
                } else {
                    clusterId = addNodesToNodePoolRequest['cluster_id'];
                    nodepoolId = addNodesToNodePoolRequest['nodepool_id'];
                    contentType = addNodesToNodePoolRequest['Content-Type'];
                    body = addNodesToNodePoolRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling addNodesToNodePool.');
            }
            if (nodepoolId === null || nodepoolId === undefined) {
            throw new RequiredError('nodepoolId','Required parameter nodepoolId was null or undefined when calling addNodesToNodePool.');
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
         * 该API用于在指定集群下批量创建插件检查任务。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchCreateAddonPrecheck(batchCreateAddonPrecheckRequest?: BatchCreateAddonPrecheckRequest) {
            const options = {
                method: "POST",
                url: "/api/v3/projects/{project_id}/clusters/{cluster_id}/addons/precheck",
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

            if (batchCreateAddonPrecheckRequest !== null && batchCreateAddonPrecheckRequest !== undefined) {
                if (batchCreateAddonPrecheckRequest instanceof BatchCreateAddonPrecheckRequest) {
                    clusterId = batchCreateAddonPrecheckRequest.clusterId;
                    contentType = batchCreateAddonPrecheckRequest.contentType;
                    body = batchCreateAddonPrecheckRequest.body
                } else {
                    clusterId = batchCreateAddonPrecheckRequest['cluster_id'];
                    contentType = batchCreateAddonPrecheckRequest['Content-Type'];
                    body = batchCreateAddonPrecheckRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling batchCreateAddonPrecheck.');
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
         * 该API用于批量同步节点。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchSyncNodes(batchSyncNodesRequest?: BatchSyncNodesRequest) {
            const options = {
                method: "POST",
                url: "/api/v3/projects/{project_id}/clusters/{cluster_id}/nodes/sync",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clusterId;
            
            let contentType;

            if (batchSyncNodesRequest !== null && batchSyncNodesRequest !== undefined) {
                if (batchSyncNodesRequest instanceof BatchSyncNodesRequest) {
                    clusterId = batchSyncNodesRequest.clusterId;
                    contentType = batchSyncNodesRequest.contentType;
                } else {
                    clusterId = batchSyncNodesRequest['cluster_id'];
                    contentType = batchSyncNodesRequest['Content-Type'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling batchSyncNodes.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

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
         * 该API用于创建访问策略。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createAccessPolicy(createAccessPolicyRequest?: CreateAccessPolicyRequest) {
            const options = {
                method: "POST",
                url: "/api/v3/access-policies",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createAccessPolicyRequest !== null && createAccessPolicyRequest !== undefined) {
                if (createAccessPolicyRequest instanceof CreateAccessPolicyRequest) {
                    body = createAccessPolicyRequest.body
                } else {
                    body = createAccessPolicyRequest['body'];
                }
            }

        
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
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
         * 该API用于删除单个访问策略
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteAccessPolicy(deleteAccessPolicyRequest?: DeleteAccessPolicyRequest) {
            const options = {
                method: "DELETE",
                url: "/api/v3/access-policies/{policy_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let policyId;

            if (deleteAccessPolicyRequest !== null && deleteAccessPolicyRequest !== undefined) {
                if (deleteAccessPolicyRequest instanceof DeleteAccessPolicyRequest) {
                    policyId = deleteAccessPolicyRequest.policyId;
                } else {
                    policyId = deleteAccessPolicyRequest['policy_id'];
                }
            }

        
            if (policyId === null || policyId === undefined) {
            throw new RequiredError('policyId','Required parameter policyId was null or undefined when calling deleteAccessPolicy.');
            }

            options.pathParams = { 'policy_id': policyId, };
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
            const localVarQueryParameter = {} as any;
            
            let name;
            
            let namespace;
            
            let contentType;
            
            let clusterId;
            
            let showResources;

            if (deleteReleaseRequest !== null && deleteReleaseRequest !== undefined) {
                if (deleteReleaseRequest instanceof DeleteReleaseRequest) {
                    name = deleteReleaseRequest.name;
                    namespace = deleteReleaseRequest.namespace;
                    contentType = deleteReleaseRequest.contentType;
                    clusterId = deleteReleaseRequest.clusterId;
                    showResources = deleteReleaseRequest.showResources;
                } else {
                    name = deleteReleaseRequest['name'];
                    namespace = deleteReleaseRequest['namespace'];
                    contentType = deleteReleaseRequest['Content-Type'];
                    clusterId = deleteReleaseRequest['cluster_id'];
                    showResources = deleteReleaseRequest['show_resources'];
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
            if (showResources !== null && showResources !== undefined) {
                localVarQueryParameter['show_resources'] = showResources;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
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
         * 该API用于获取单个访问策略。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        getAccessPolicy(getAccessPolicyRequest?: GetAccessPolicyRequest) {
            const options = {
                method: "GET",
                url: "/api/v3/access-policies/{policy_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let policyId;

            if (getAccessPolicyRequest !== null && getAccessPolicyRequest !== undefined) {
                if (getAccessPolicyRequest instanceof GetAccessPolicyRequest) {
                    policyId = getAccessPolicyRequest.policyId;
                } else {
                    policyId = getAccessPolicyRequest['policy_id'];
                }
            }

        
            if (policyId === null || policyId === undefined) {
            throw new RequiredError('policyId','Required parameter policyId was null or undefined when calling getAccessPolicy.');
            }

            options.pathParams = { 'policy_id': policyId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该API用于查询可用区列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        getAvaliableZone(getAvaliableZoneRequest?: GetAvaliableZoneRequest) {
            const options = {
                method: "GET",
                url: "/api/v2/availabilityZones",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let contentType;
            
            let locale;

            if (getAvaliableZoneRequest !== null && getAvaliableZoneRequest !== undefined) {
                if (getAvaliableZoneRequest instanceof GetAvaliableZoneRequest) {
                    contentType = getAvaliableZoneRequest.contentType;
                    locale = getAvaliableZoneRequest.locale;
                } else {
                    contentType = getAvaliableZoneRequest['Content-Type'];
                    locale = getAvaliableZoneRequest['locale'];
                }
            }

        
            if (locale !== null && locale !== undefined) {
                localVarQueryParameter['locale'] = locale;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该API用于查询集群可售卖规格
         * &gt; 集群管理的URL格式为：https://Endpoint/uri。其中uri为资源路径，也即API访问的路径。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        getClusterFlavorSpecs(getClusterFlavorSpecsRequest?: GetClusterFlavorSpecsRequest) {
            const options = {
                method: "GET",
                url: "/api/v2/flavor/specifications",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let contentType;
            
            let clusterType;

            if (getClusterFlavorSpecsRequest !== null && getClusterFlavorSpecsRequest !== undefined) {
                if (getClusterFlavorSpecsRequest instanceof GetClusterFlavorSpecsRequest) {
                    contentType = getClusterFlavorSpecsRequest.contentType;
                    clusterType = getClusterFlavorSpecsRequest.clusterType;
                } else {
                    contentType = getClusterFlavorSpecsRequest['Content-Type'];
                    clusterType = getClusterFlavorSpecsRequest['clusterType'];
                }
            }

        
            if (clusterType === null || clusterType === undefined) {
                throw new RequiredError('clusterType','Required parameter clusterType was null or undefined when calling getClusterFlavorSpecs.');
            }
            if (clusterType !== null && clusterType !== undefined) {
                localVarQueryParameter['clusterType'] = clusterType;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该API用于获取集群longaksk的配置。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        getClusterLongAkskConfig(getClusterLongAkskConfigRequest?: GetClusterLongAkskConfigRequest) {
            const options = {
                method: "GET",
                url: "/api/v3/projects/{project_id}/clusters/{cluster_id}/longaksk/config",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clusterId;
            
            let contentType;

            if (getClusterLongAkskConfigRequest !== null && getClusterLongAkskConfigRequest !== undefined) {
                if (getClusterLongAkskConfigRequest instanceof GetClusterLongAkskConfigRequest) {
                    clusterId = getClusterLongAkskConfigRequest.clusterId;
                    contentType = getClusterLongAkskConfigRequest.contentType;
                } else {
                    clusterId = getClusterLongAkskConfigRequest['cluster_id'];
                    contentType = getClusterLongAkskConfigRequest['Content-Type'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling getClusterLongAkskConfig.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该API用于获取集群配额
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        getClusterQuota(getClusterQuotaRequest?: GetClusterQuotaRequest) {
            const options = {
                method: "GET",
                url: "/cce/v1/projects/{project_id}/quota",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let contentType;

            if (getClusterQuotaRequest !== null && getClusterQuotaRequest !== undefined) {
                if (getClusterQuotaRequest instanceof GetClusterQuotaRequest) {
                    contentType = getClusterQuotaRequest.contentType;
                } else {
                    contentType = getClusterQuotaRequest['Content-Type'];
                }
            }

        
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该API用于查询自定义标签
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        getCustomizeTags(getCustomizeTagsRequest?: GetCustomizeTagsRequest) {
            const options = {
                method: "GET",
                url: "/cce/v1/{project_id}/{resource_type}/tags",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let contentType;
            
            let resourceType;

            if (getCustomizeTagsRequest !== null && getCustomizeTagsRequest !== undefined) {
                if (getCustomizeTagsRequest instanceof GetCustomizeTagsRequest) {
                    contentType = getCustomizeTagsRequest.contentType;
                    resourceType = getCustomizeTagsRequest.resourceType;
                } else {
                    contentType = getCustomizeTagsRequest['Content-Type'];
                    resourceType = getCustomizeTagsRequest['resource_type'];
                }
            }

        
            if (resourceType === null || resourceType === undefined) {
            throw new RequiredError('resourceType','Required parameter resourceType was null or undefined when calling getCustomizeTags.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.pathParams = { 'resource_type': resourceType, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该API用于获取集群所有节点的标签
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        getLabels(getLabelsRequest?: GetLabelsRequest) {
            const options = {
                method: "GET",
                url: "/api/v3/projects/{project_id}/clusters/{cluster_id}/labels",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let contentType;
            
            let clusterId;

            if (getLabelsRequest !== null && getLabelsRequest !== undefined) {
                if (getLabelsRequest instanceof GetLabelsRequest) {
                    contentType = getLabelsRequest.contentType;
                    clusterId = getLabelsRequest.clusterId;
                } else {
                    contentType = getLabelsRequest['Content-Type'];
                    clusterId = getLabelsRequest['cluster_id'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling getLabels.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该API用于获取项目LongAKSK的配置。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        getLongAkskConfig(getLongAkskConfigRequest?: GetLongAkskConfigRequest) {
            const options = {
                method: "GET",
                url: "/api/v3/projects/{project_id}/longaksk/config",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let contentType;

            if (getLongAkskConfigRequest !== null && getLongAkskConfigRequest !== undefined) {
                if (getLongAkskConfigRequest instanceof GetLongAkskConfigRequest) {
                    contentType = getLongAkskConfigRequest.contentType;
                } else {
                    contentType = getLongAkskConfigRequest['Content-Type'];
                }
            }

        
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该API用于查询资源标签
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        getResourceTags(getResourceTagsRequest?: GetResourceTagsRequest) {
            const options = {
                method: "GET",
                url: "/cce/v1/{project_id}/{resource_type}/{resource_id}/tags",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let contentType;
            
            let resourceType;
            
            let resourceId;

            if (getResourceTagsRequest !== null && getResourceTagsRequest !== undefined) {
                if (getResourceTagsRequest instanceof GetResourceTagsRequest) {
                    contentType = getResourceTagsRequest.contentType;
                    resourceType = getResourceTagsRequest.resourceType;
                    resourceId = getResourceTagsRequest.resourceId;
                } else {
                    contentType = getResourceTagsRequest['Content-Type'];
                    resourceType = getResourceTagsRequest['resource_type'];
                    resourceId = getResourceTagsRequest['resource_id'];
                }
            }

        
            if (resourceType === null || resourceType === undefined) {
            throw new RequiredError('resourceType','Required parameter resourceType was null or undefined when calling getResourceTags.');
            }
            if (resourceId === null || resourceId === undefined) {
            throw new RequiredError('resourceId','Required parameter resourceId was null or undefined when calling getResourceTags.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.pathParams = { 'resource_type': resourceType,'resource_id': resourceId, };
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
         * 该API用于获取访问策略列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAccessPolicy(listAccessPolicyRequest?: ListAccessPolicyRequest) {
            const options = {
                method: "GET",
                url: "/api/v3/access-policies",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let clusterId;

            if (listAccessPolicyRequest !== null && listAccessPolicyRequest !== undefined) {
                if (listAccessPolicyRequest instanceof ListAccessPolicyRequest) {
                    clusterId = listAccessPolicyRequest.clusterId;
                } else {
                    clusterId = listAccessPolicyRequest['cluster_id'];
                }
            }

        
            if (clusterId !== null && clusterId !== undefined) {
                localVarQueryParameter['cluster_id'] = clusterId;
            }

            options.queryParams = localVarQueryParameter;
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
         * 获取集群下插件检查任务结果列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAddonPrecheckTasks(listAddonPrecheckTasksRequest?: ListAddonPrecheckTasksRequest) {
            const options = {
                method: "GET",
                url: "/api/v3/projects/{project_id}/clusters/{cluster_id}/addons/precheck/tasks",
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
            
            let taskId;
            
            let addonInstanceId;

            if (listAddonPrecheckTasksRequest !== null && listAddonPrecheckTasksRequest !== undefined) {
                if (listAddonPrecheckTasksRequest instanceof ListAddonPrecheckTasksRequest) {
                    clusterId = listAddonPrecheckTasksRequest.clusterId;
                    contentType = listAddonPrecheckTasksRequest.contentType;
                    type = listAddonPrecheckTasksRequest.type;
                    taskId = listAddonPrecheckTasksRequest.taskId;
                    addonInstanceId = listAddonPrecheckTasksRequest.addonInstanceId;
                } else {
                    clusterId = listAddonPrecheckTasksRequest['cluster_id'];
                    contentType = listAddonPrecheckTasksRequest['Content-Type'];
                    type = listAddonPrecheckTasksRequest['type'];
                    taskId = listAddonPrecheckTasksRequest['task_id'];
                    addonInstanceId = listAddonPrecheckTasksRequest['addon_instance_id'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling listAddonPrecheckTasks.');
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }
            if (taskId !== null && taskId !== undefined) {
                localVarQueryParameter['task_id'] = taskId;
            }
            if (addonInstanceId !== null && addonInstanceId !== undefined) {
                localVarQueryParameter['addon_instance_id'] = addonInstanceId;
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
         * 该API用于获取指定集群下所有超节点的详细信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listHyperNodes(listHyperNodesRequest?: ListHyperNodesRequest) {
            const options = {
                method: "GET",
                url: "/api/v3/projects/{project_id}/clusters/{cluster_id}/hypernodes",
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

            if (listHyperNodesRequest !== null && listHyperNodesRequest !== undefined) {
                if (listHyperNodesRequest instanceof ListHyperNodesRequest) {
                    clusterId = listHyperNodesRequest.clusterId;
                    limit = listHyperNodesRequest.limit;
                    offset = listHyperNodesRequest.offset;
                } else {
                    clusterId = listHyperNodesRequest['cluster_id'];
                    limit = listHyperNodesRequest['limit'];
                    offset = listHyperNodesRequest['offset'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling listHyperNodes.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'cluster_id': clusterId, };
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
         * 该API用于节点开启缩容保护，开启缩容保护的节点无法通过修改节点池个数的方式被缩容。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        lockNodepoolNodeScaleDown(lockNodepoolNodeScaleDownRequest?: LockNodepoolNodeScaleDownRequest) {
            const options = {
                method: "POST",
                url: "/api/v3/projects/{project_id}/clusters/{cluster_id}/nodes/locknodescaledown",
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

            if (lockNodepoolNodeScaleDownRequest !== null && lockNodepoolNodeScaleDownRequest !== undefined) {
                if (lockNodepoolNodeScaleDownRequest instanceof LockNodepoolNodeScaleDownRequest) {
                    clusterId = lockNodepoolNodeScaleDownRequest.clusterId;
                    contentType = lockNodepoolNodeScaleDownRequest.contentType;
                    body = lockNodepoolNodeScaleDownRequest.body
                } else {
                    clusterId = lockNodepoolNodeScaleDownRequest['cluster_id'];
                    contentType = lockNodepoolNodeScaleDownRequest['Content-Type'];
                    body = lockNodepoolNodeScaleDownRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling lockNodepoolNodeScaleDown.');
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
         * 该API用于将节点迁移到自定义节点池，仅default节点池下节点支持迁移。迁移过程节点无重置无重启，原节点密码将保留。
         * &gt;集群管理的URL格式为：https://Endpoint/uri。其中uri为资源路径，也即API访问的路径。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        migrateToNodePool(migrateToNodePoolRequest?: MigrateToNodePoolRequest) {
            const options = {
                method: "PUT",
                url: "/api/v3/projects/{project_id}/clusters/{cluster_id}/nodepools/{nodepool_id}/nodes/migrate",
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

            if (migrateToNodePoolRequest !== null && migrateToNodePoolRequest !== undefined) {
                if (migrateToNodePoolRequest instanceof MigrateToNodePoolRequest) {
                    clusterId = migrateToNodePoolRequest.clusterId;
                    nodepoolId = migrateToNodePoolRequest.nodepoolId;
                    contentType = migrateToNodePoolRequest.contentType;
                    body = migrateToNodePoolRequest.body
                } else {
                    clusterId = migrateToNodePoolRequest['cluster_id'];
                    nodepoolId = migrateToNodePoolRequest['nodepool_id'];
                    contentType = migrateToNodePoolRequest['Content-Type'];
                    body = migrateToNodePoolRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling migrateToNodePool.');
            }
            if (nodepoolId === null || nodepoolId === undefined) {
            throw new RequiredError('nodepoolId','Required parameter nodepoolId was null or undefined when calling migrateToNodePool.');
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
         * 该API用于吊销指定集群的用户证书
         * 
         * &gt; 吊销操作完成后，此证书申请人之前下载的证书和 kubectl 配置文件无法再用于连接集群。此证书申请人可以重新下载证书或 kubectl 配置文件，并使用新下载的文件连接集群
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        revokeKubernetesClusterCert(revokeKubernetesClusterCertRequest?: RevokeKubernetesClusterCertRequest) {
            const options = {
                method: "POST",
                url: "/api/v3/projects/{project_id}/clusters/{cluster_id}/clustercertrevoke",
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

            if (revokeKubernetesClusterCertRequest !== null && revokeKubernetesClusterCertRequest !== undefined) {
                if (revokeKubernetesClusterCertRequest instanceof RevokeKubernetesClusterCertRequest) {
                    clusterId = revokeKubernetesClusterCertRequest.clusterId;
                    contentType = revokeKubernetesClusterCertRequest.contentType;
                    body = revokeKubernetesClusterCertRequest.body
                } else {
                    clusterId = revokeKubernetesClusterCertRequest['cluster_id'];
                    contentType = revokeKubernetesClusterCertRequest['Content-Type'];
                    body = revokeKubernetesClusterCertRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling revokeKubernetesClusterCert.');
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
         * 该API用于根据集群版本类型等查询集群支持的详细配置项，用于集群创建时指定。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showClusterSupportConfiguration(showClusterSupportConfigurationRequest?: ShowClusterSupportConfigurationRequest) {
            const options = {
                method: "GET",
                url: "/api/v3/clusters/configuration/detail",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let contentType;
            
            let clusterType;
            
            let clusterVersion;
            
            let clusterID;
            
            let networkMode;

            if (showClusterSupportConfigurationRequest !== null && showClusterSupportConfigurationRequest !== undefined) {
                if (showClusterSupportConfigurationRequest instanceof ShowClusterSupportConfigurationRequest) {
                    contentType = showClusterSupportConfigurationRequest.contentType;
                    clusterType = showClusterSupportConfigurationRequest.clusterType;
                    clusterVersion = showClusterSupportConfigurationRequest.clusterVersion;
                    clusterID = showClusterSupportConfigurationRequest.clusterID;
                    networkMode = showClusterSupportConfigurationRequest.networkMode;
                } else {
                    contentType = showClusterSupportConfigurationRequest['Content-Type'];
                    clusterType = showClusterSupportConfigurationRequest['clusterType'];
                    clusterVersion = showClusterSupportConfigurationRequest['clusterVersion'];
                    clusterID = showClusterSupportConfigurationRequest['clusterID'];
                    networkMode = showClusterSupportConfigurationRequest['networkMode'];
                }
            }

        
            if (clusterType !== null && clusterType !== undefined) {
                localVarQueryParameter['clusterType'] = clusterType;
            }
            if (clusterVersion !== null && clusterVersion !== undefined) {
                localVarQueryParameter['clusterVersion'] = clusterVersion;
            }
            if (clusterID !== null && clusterID !== undefined) {
                localVarQueryParameter['clusterID'] = clusterID;
            }
            if (networkMode !== null && networkMode !== undefined) {
                localVarQueryParameter['networkMode'] = networkMode;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
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
         * 该API用于查询特性开关状态
         * &gt; 集群管理的URL格式为：https://Endpoint/uri。其中uri为资源路径，也即API访问的路径。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showFeatureGates(showFeatureGatesRequest?: ShowFeatureGatesRequest) {
            const options = {
                method: "GET",
                url: "/api/v3.1/feature-gates",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let contentType;

            if (showFeatureGatesRequest !== null && showFeatureGatesRequest !== undefined) {
                if (showFeatureGatesRequest instanceof ShowFeatureGatesRequest) {
                    contentType = showFeatureGatesRequest.contentType;
                } else {
                    contentType = showFeatureGatesRequest['Content-Type'];
                }
            }

        
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

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
            const localVarQueryParameter = {} as any;
            
            let name;
            
            let namespace;
            
            let contentType;
            
            let clusterId;
            
            let showResources;

            if (showReleaseRequest !== null && showReleaseRequest !== undefined) {
                if (showReleaseRequest instanceof ShowReleaseRequest) {
                    name = showReleaseRequest.name;
                    namespace = showReleaseRequest.namespace;
                    contentType = showReleaseRequest.contentType;
                    clusterId = showReleaseRequest.clusterId;
                    showResources = showReleaseRequest.showResources;
                } else {
                    name = showReleaseRequest['name'];
                    namespace = showReleaseRequest['namespace'];
                    contentType = showReleaseRequest['Content-Type'];
                    clusterId = showReleaseRequest['cluster_id'];
                    showResources = showReleaseRequest['show_resources'];
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
            if (showResources !== null && showResources !== undefined) {
                localVarQueryParameter['show_resources'] = showResources;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
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
         * 该API用于同步节点。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        syncNode(syncNodeRequest?: SyncNodeRequest) {
            const options = {
                method: "GET",
                url: "/api/v2/projects/{project_id}/clusters/{cluster_id}/nodes/{node_id}/sync",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clusterId;
            
            let nodeId;
            
            let contentType;

            if (syncNodeRequest !== null && syncNodeRequest !== undefined) {
                if (syncNodeRequest instanceof SyncNodeRequest) {
                    clusterId = syncNodeRequest.clusterId;
                    nodeId = syncNodeRequest.nodeId;
                    contentType = syncNodeRequest.contentType;
                } else {
                    clusterId = syncNodeRequest['cluster_id'];
                    nodeId = syncNodeRequest['node_id'];
                    contentType = syncNodeRequest['Content-Type'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling syncNode.');
            }
            if (nodeId === null || nodeId === undefined) {
            throw new RequiredError('nodeId','Required parameter nodeId was null or undefined when calling syncNode.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.pathParams = { 'cluster_id': clusterId,'node_id': nodeId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该API用于节点关闭缩容保护，关闭缩容保护的节点可以通过修改节点池个数的方式被缩容，只允许按需节点关闭缩容保护。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        unlockNodepoolNodeScaleDown(unlockNodepoolNodeScaleDownRequest?: UnlockNodepoolNodeScaleDownRequest) {
            const options = {
                method: "POST",
                url: "/api/v3/projects/{project_id}/clusters/{cluster_id}/nodes/unlocknodescaledown",
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

            if (unlockNodepoolNodeScaleDownRequest !== null && unlockNodepoolNodeScaleDownRequest !== undefined) {
                if (unlockNodepoolNodeScaleDownRequest instanceof UnlockNodepoolNodeScaleDownRequest) {
                    clusterId = unlockNodepoolNodeScaleDownRequest.clusterId;
                    contentType = unlockNodepoolNodeScaleDownRequest.contentType;
                    body = unlockNodepoolNodeScaleDownRequest.body
                } else {
                    clusterId = unlockNodepoolNodeScaleDownRequest['cluster_id'];
                    contentType = unlockNodepoolNodeScaleDownRequest['Content-Type'];
                    body = unlockNodepoolNodeScaleDownRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling unlockNodepoolNodeScaleDown.');
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
         * 该API用于更新单个访问策略。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateAccessPolicy(updateAccessPolicyRequest?: UpdateAccessPolicyRequest) {
            const options = {
                method: "PUT",
                url: "/api/v3/access-policies/{policy_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let policyId;

            if (updateAccessPolicyRequest !== null && updateAccessPolicyRequest !== undefined) {
                if (updateAccessPolicyRequest instanceof UpdateAccessPolicyRequest) {
                    policyId = updateAccessPolicyRequest.policyId;
                    body = updateAccessPolicyRequest.body
                } else {
                    policyId = updateAccessPolicyRequest['policy_id'];
                    body = updateAccessPolicyRequest['body'];
                }
            }

        
            if (policyId === null || policyId === undefined) {
            throw new RequiredError('policyId','Required parameter policyId was null or undefined when calling updateAccessPolicy.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'policy_id': policyId, };
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
         * 该API用于更新集群LongAKSK的配置。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateClusterLongAkskConfig(updateClusterLongAkskConfigRequest?: UpdateClusterLongAkskConfigRequest) {
            const options = {
                method: "PUT",
                url: "/api/v3/projects/{project_id}/clusters/{cluster_id}/longaksk/config",
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

            if (updateClusterLongAkskConfigRequest !== null && updateClusterLongAkskConfigRequest !== undefined) {
                if (updateClusterLongAkskConfigRequest instanceof UpdateClusterLongAkskConfigRequest) {
                    clusterId = updateClusterLongAkskConfigRequest.clusterId;
                    contentType = updateClusterLongAkskConfigRequest.contentType;
                    body = updateClusterLongAkskConfigRequest.body
                } else {
                    clusterId = updateClusterLongAkskConfigRequest['cluster_id'];
                    contentType = updateClusterLongAkskConfigRequest['Content-Type'];
                    body = updateClusterLongAkskConfigRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling updateClusterLongAkskConfig.');
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
         * 该API用于更新项目longaksk的配置。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateLongAkskConfig(updateLongAkskConfigRequest?: UpdateLongAkskConfigRequest) {
            const options = {
                method: "PUT",
                url: "/api/v3/projects/{project_id}/longaksk/config",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let contentType;

            if (updateLongAkskConfigRequest !== null && updateLongAkskConfigRequest !== undefined) {
                if (updateLongAkskConfigRequest instanceof UpdateLongAkskConfigRequest) {
                    contentType = updateLongAkskConfigRequest.contentType;
                    body = updateLongAkskConfigRequest.body
                } else {
                    contentType = updateLongAkskConfigRequest['Content-Type'];
                    body = updateLongAkskConfigRequest['body'];
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
         * &gt; - 当前仅支持更新节点池名称，spec下的initialNodeCount，k8sTags，taints，login，userTags与节点池的扩缩容配置相关字段。
         * &gt; - 若此次更新节点池未设置initialNodeCount的相关值，节点池期望节点个数将默认更新为初始值0，如果此时节点池节点个数大于0将导致节点池缩容。若用户期望不填该参数，请在此次更新设置spec下的ignoreInitialNodeCount为true，用于忽略spec.initialNodeCount参数。特殊场景说明：若节点池当前节点数等于0时，可忽略initialNodeCount和ignoreInitialNodeCount参数配置。
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
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let name;
            
            let namespace;
            
            let contentType;
            
            let clusterId;
            
            let showResources;

            if (updateReleaseRequest !== null && updateReleaseRequest !== undefined) {
                if (updateReleaseRequest instanceof UpdateReleaseRequest) {
                    name = updateReleaseRequest.name;
                    namespace = updateReleaseRequest.namespace;
                    contentType = updateReleaseRequest.contentType;
                    clusterId = updateReleaseRequest.clusterId;
                    body = updateReleaseRequest.body
                    showResources = updateReleaseRequest.showResources;
                } else {
                    name = updateReleaseRequest['name'];
                    namespace = updateReleaseRequest['namespace'];
                    contentType = updateReleaseRequest['Content-Type'];
                    clusterId = updateReleaseRequest['cluster_id'];
                    body = updateReleaseRequest['body'];
                    showResources = updateReleaseRequest['show_resources'];
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
            if (showResources !== null && showResources !== undefined) {
                localVarQueryParameter['show_resources'] = showResources;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
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
         * 该API用于同步节点池中已有节点的配置
         * &gt; 集群管理的URL格式为：https://Endpoint/uri。其中uri为资源路径，也即API访问的路径
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        upgradeNodePool(upgradeNodePoolRequest?: UpgradeNodePoolRequest) {
            const options = {
                method: "POST",
                url: "/api/v3/projects/{project_id}/clusters/{cluster_id}/nodepools/{nodepool_id}/operation/upgrade",
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

            if (upgradeNodePoolRequest !== null && upgradeNodePoolRequest !== undefined) {
                if (upgradeNodePoolRequest instanceof UpgradeNodePoolRequest) {
                    clusterId = upgradeNodePoolRequest.clusterId;
                    nodepoolId = upgradeNodePoolRequest.nodepoolId;
                    contentType = upgradeNodePoolRequest.contentType;
                    body = upgradeNodePoolRequest.body
                } else {
                    clusterId = upgradeNodePoolRequest['cluster_id'];
                    nodepoolId = upgradeNodePoolRequest['nodepool_id'];
                    contentType = upgradeNodePoolRequest['Content-Type'];
                    body = upgradeNodePoolRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling upgradeNodePool.');
            }
            if (nodepoolId === null || nodepoolId === undefined) {
            throw new RequiredError('nodepoolId','Required parameter nodepoolId was null or undefined when calling upgradeNodePool.');
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
    
        /**
         * 该API用于批量添加指定集群的资源标签。
         * &gt; - 每个集群支持最多20个资源标签。
         * &gt; - 此接口为幂等接口：创建时，如果创建的标签已经存在（key/value均相同视为重复），默认处理成功；key相同，value不同时会覆盖原有标签。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchCreateAutopilotClusterTags(batchCreateAutopilotClusterTagsRequest?: BatchCreateAutopilotClusterTagsRequest) {
            const options = {
                method: "POST",
                url: "/autopilot/v3/projects/{project_id}/clusters/{cluster_id}/tags/create",
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

            if (batchCreateAutopilotClusterTagsRequest !== null && batchCreateAutopilotClusterTagsRequest !== undefined) {
                if (batchCreateAutopilotClusterTagsRequest instanceof BatchCreateAutopilotClusterTagsRequest) {
                    clusterId = batchCreateAutopilotClusterTagsRequest.clusterId;
                    contentType = batchCreateAutopilotClusterTagsRequest.contentType;
                    body = batchCreateAutopilotClusterTagsRequest.body
                } else {
                    clusterId = batchCreateAutopilotClusterTagsRequest['cluster_id'];
                    contentType = batchCreateAutopilotClusterTagsRequest['Content-Type'];
                    body = batchCreateAutopilotClusterTagsRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling batchCreateAutopilotClusterTags.');
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
        batchDeleteAutopilotClusterTags(batchDeleteAutopilotClusterTagsRequest?: BatchDeleteAutopilotClusterTagsRequest) {
            const options = {
                method: "POST",
                url: "/autopilot/v3/projects/{project_id}/clusters/{cluster_id}/tags/delete",
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

            if (batchDeleteAutopilotClusterTagsRequest !== null && batchDeleteAutopilotClusterTagsRequest !== undefined) {
                if (batchDeleteAutopilotClusterTagsRequest instanceof BatchDeleteAutopilotClusterTagsRequest) {
                    clusterId = batchDeleteAutopilotClusterTagsRequest.clusterId;
                    contentType = batchDeleteAutopilotClusterTagsRequest.contentType;
                    body = batchDeleteAutopilotClusterTagsRequest.body
                } else {
                    clusterId = batchDeleteAutopilotClusterTagsRequest['cluster_id'];
                    contentType = batchDeleteAutopilotClusterTagsRequest['Content-Type'];
                    body = batchDeleteAutopilotClusterTagsRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling batchDeleteAutopilotClusterTags.');
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
         * 根据提供的插件模板，安装插件实例。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createAutopilotAddonInstance(createAutopilotAddonInstanceRequest?: CreateAutopilotAddonInstanceRequest) {
            const options = {
                method: "POST",
                url: "/autopilot/v3/addons",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let contentType;

            if (createAutopilotAddonInstanceRequest !== null && createAutopilotAddonInstanceRequest !== undefined) {
                if (createAutopilotAddonInstanceRequest instanceof CreateAutopilotAddonInstanceRequest) {
                    contentType = createAutopilotAddonInstanceRequest.contentType;
                    body = createAutopilotAddonInstanceRequest.body
                } else {
                    contentType = createAutopilotAddonInstanceRequest['Content-Type'];
                    body = createAutopilotAddonInstanceRequest['body'];
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
         * 该API用于创建一个空集群（即只有控制节点Master，没有工作节点Node）。
         * 
         * 
         * &gt;   - 集群管理的URL格式为：https://Endpoint/uri。其中uri为资源路径，也即API访问的路径。
         * &gt;   - 调用该接口创建集群时，默认不安装ICAgent，若需安装ICAgent，可在请求Body参数的annotations中加入\&quot;cluster.install.addons.external/install\&quot;:\&quot;[{\&quot;addonTemplateName\&quot;:\&quot;icagent\&quot;}]\&quot;的集群注解，将在创建集群时自动安装ICAgent。ICAgent是应用性能管理APM的采集代理，运行在应用所在的服务器上，用于实时采集探针所获取的数据，安装ICAgent是使用应用性能管理APM的前提。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createAutopilotCluster(createAutopilotClusterRequest?: CreateAutopilotClusterRequest) {
            const options = {
                method: "POST",
                url: "/autopilot/v3/projects/{project_id}/clusters",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let contentType;

            if (createAutopilotClusterRequest !== null && createAutopilotClusterRequest !== undefined) {
                if (createAutopilotClusterRequest instanceof CreateAutopilotClusterRequest) {
                    contentType = createAutopilotClusterRequest.contentType;
                    body = createAutopilotClusterRequest.body
                } else {
                    contentType = createAutopilotClusterRequest['Content-Type'];
                    body = createAutopilotClusterRequest['body'];
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
        createAutopilotClusterMasterSnapshot(createAutopilotClusterMasterSnapshotRequest?: CreateAutopilotClusterMasterSnapshotRequest) {
            const options = {
                method: "POST",
                url: "/autopilot/v3.1/projects/{project_id}/clusters/{cluster_id}/operation/snapshot",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clusterId;

            if (createAutopilotClusterMasterSnapshotRequest !== null && createAutopilotClusterMasterSnapshotRequest !== undefined) {
                if (createAutopilotClusterMasterSnapshotRequest instanceof CreateAutopilotClusterMasterSnapshotRequest) {
                    clusterId = createAutopilotClusterMasterSnapshotRequest.clusterId;
                } else {
                    clusterId = createAutopilotClusterMasterSnapshotRequest['cluster_id'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling createAutopilotClusterMasterSnapshot.');
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
        createAutopilotKubernetesClusterCert(createAutopilotKubernetesClusterCertRequest?: CreateAutopilotKubernetesClusterCertRequest) {
            const options = {
                method: "POST",
                url: "/autopilot/v3/projects/{project_id}/clusters/{cluster_id}/clustercert",
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

            if (createAutopilotKubernetesClusterCertRequest !== null && createAutopilotKubernetesClusterCertRequest !== undefined) {
                if (createAutopilotKubernetesClusterCertRequest instanceof CreateAutopilotKubernetesClusterCertRequest) {
                    clusterId = createAutopilotKubernetesClusterCertRequest.clusterId;
                    contentType = createAutopilotKubernetesClusterCertRequest.contentType;
                    body = createAutopilotKubernetesClusterCertRequest.body
                } else {
                    clusterId = createAutopilotKubernetesClusterCertRequest['cluster_id'];
                    contentType = createAutopilotKubernetesClusterCertRequest['Content-Type'];
                    body = createAutopilotKubernetesClusterCertRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling createAutopilotKubernetesClusterCert.');
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
         * 该API用于创建集群维护窗口。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createAutopilotMaintenanceWindow(createAutopilotMaintenanceWindowRequest?: CreateAutopilotMaintenanceWindowRequest) {
            const options = {
                method: "POST",
                url: "/autopilot/v3/projects/{project_id}/clusters/{cluster_id}/maintenancewindows",
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

            if (createAutopilotMaintenanceWindowRequest !== null && createAutopilotMaintenanceWindowRequest !== undefined) {
                if (createAutopilotMaintenanceWindowRequest instanceof CreateAutopilotMaintenanceWindowRequest) {
                    clusterId = createAutopilotMaintenanceWindowRequest.clusterId;
                    contentType = createAutopilotMaintenanceWindowRequest.contentType;
                    body = createAutopilotMaintenanceWindowRequest.body
                } else {
                    clusterId = createAutopilotMaintenanceWindowRequest['cluster_id'];
                    contentType = createAutopilotMaintenanceWindowRequest['Content-Type'];
                    body = createAutopilotMaintenanceWindowRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling createAutopilotMaintenanceWindow.');
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
         * 集群升级后确认，该接口建议配合Console使用，主要用于升级步骤完成后，客户确认集群状态和业务正常后做反馈。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createAutopilotPostCheck(createAutopilotPostCheckRequest?: CreateAutopilotPostCheckRequest) {
            const options = {
                method: "POST",
                url: "/autopilot/v3/projects/{project_id}/clusters/{cluster_id}/operation/postcheck",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;

            if (createAutopilotPostCheckRequest !== null && createAutopilotPostCheckRequest !== undefined) {
                if (createAutopilotPostCheckRequest instanceof CreateAutopilotPostCheckRequest) {
                    clusterId = createAutopilotPostCheckRequest.clusterId;
                    body = createAutopilotPostCheckRequest.body
                } else {
                    clusterId = createAutopilotPostCheckRequest['cluster_id'];
                    body = createAutopilotPostCheckRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling createAutopilotPostCheck.');
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
        createAutopilotPreCheck(createAutopilotPreCheckRequest?: CreateAutopilotPreCheckRequest) {
            const options = {
                method: "POST",
                url: "/autopilot/v3/projects/{project_id}/clusters/{cluster_id}/operation/precheck",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;

            if (createAutopilotPreCheckRequest !== null && createAutopilotPreCheckRequest !== undefined) {
                if (createAutopilotPreCheckRequest instanceof CreateAutopilotPreCheckRequest) {
                    clusterId = createAutopilotPreCheckRequest.clusterId;
                    body = createAutopilotPreCheckRequest.body
                } else {
                    clusterId = createAutopilotPreCheckRequest['cluster_id'];
                    body = createAutopilotPreCheckRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling createAutopilotPreCheck.');
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
        createAutopilotRelease(createAutopilotReleaseRequest?: CreateAutopilotReleaseRequest) {
            const options = {
                method: "POST",
                url: "/autopilot/cam/v3/clusters/{cluster_id}/releases",
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

            if (createAutopilotReleaseRequest !== null && createAutopilotReleaseRequest !== undefined) {
                if (createAutopilotReleaseRequest instanceof CreateAutopilotReleaseRequest) {
                    contentType = createAutopilotReleaseRequest.contentType;
                    clusterId = createAutopilotReleaseRequest.clusterId;
                    body = createAutopilotReleaseRequest.body
                } else {
                    contentType = createAutopilotReleaseRequest['Content-Type'];
                    clusterId = createAutopilotReleaseRequest['cluster_id'];
                    body = createAutopilotReleaseRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling createAutopilotRelease.');
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
        createAutopilotUpgradeWorkFlow(createAutopilotUpgradeWorkFlowRequest?: CreateAutopilotUpgradeWorkFlowRequest) {
            const options = {
                method: "POST",
                url: "/autopilot/v3/projects/{project_id}/clusters/{cluster_id}/operation/upgradeworkflows",
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

            if (createAutopilotUpgradeWorkFlowRequest !== null && createAutopilotUpgradeWorkFlowRequest !== undefined) {
                if (createAutopilotUpgradeWorkFlowRequest instanceof CreateAutopilotUpgradeWorkFlowRequest) {
                    clusterId = createAutopilotUpgradeWorkFlowRequest.clusterId;
                    contentType = createAutopilotUpgradeWorkFlowRequest.contentType;
                    body = createAutopilotUpgradeWorkFlowRequest.body
                } else {
                    clusterId = createAutopilotUpgradeWorkFlowRequest['cluster_id'];
                    contentType = createAutopilotUpgradeWorkFlowRequest['Content-Type'];
                    body = createAutopilotUpgradeWorkFlowRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling createAutopilotUpgradeWorkFlow.');
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
        deleteAutopilotAddonInstance(deleteAutopilotAddonInstanceRequest?: DeleteAutopilotAddonInstanceRequest) {
            const options = {
                method: "DELETE",
                url: "/autopilot/v3/addons/{id}",
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

            if (deleteAutopilotAddonInstanceRequest !== null && deleteAutopilotAddonInstanceRequest !== undefined) {
                if (deleteAutopilotAddonInstanceRequest instanceof DeleteAutopilotAddonInstanceRequest) {
                    contentType = deleteAutopilotAddonInstanceRequest.contentType;
                    id = deleteAutopilotAddonInstanceRequest.id;
                    clusterId = deleteAutopilotAddonInstanceRequest.clusterId;
                } else {
                    contentType = deleteAutopilotAddonInstanceRequest['Content-Type'];
                    id = deleteAutopilotAddonInstanceRequest['id'];
                    clusterId = deleteAutopilotAddonInstanceRequest['cluster_id'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling deleteAutopilotAddonInstance.');
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
        deleteAutopilotChart(deleteAutopilotChartRequest?: DeleteAutopilotChartRequest) {
            const options = {
                method: "DELETE",
                url: "/autopilot/v2/charts/{chart_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let chartId;
            
            let contentType;

            if (deleteAutopilotChartRequest !== null && deleteAutopilotChartRequest !== undefined) {
                if (deleteAutopilotChartRequest instanceof DeleteAutopilotChartRequest) {
                    chartId = deleteAutopilotChartRequest.chartId;
                    contentType = deleteAutopilotChartRequest.contentType;
                } else {
                    chartId = deleteAutopilotChartRequest['chart_id'];
                    contentType = deleteAutopilotChartRequest['Content-Type'];
                }
            }

        
            if (chartId === null || chartId === undefined) {
            throw new RequiredError('chartId','Required parameter chartId was null or undefined when calling deleteAutopilotChart.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.pathParams = { 'chart_id': chartId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该API用于删除一个指定的集群。
         * &gt;集群管理的URL格式为：https://Endpoint/uri。其中uri为资源路径，也即API访问的路径。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteAutopilotCluster(deleteAutopilotClusterRequest?: DeleteAutopilotClusterRequest) {
            const options = {
                method: "DELETE",
                url: "/autopilot/v3/projects/{project_id}/clusters/{cluster_id}",
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
            
            let deleteNet;
            
            let deleteObs;
            
            let deleteSfs30;
            
            let ltsReclaimPolicy;

            if (deleteAutopilotClusterRequest !== null && deleteAutopilotClusterRequest !== undefined) {
                if (deleteAutopilotClusterRequest instanceof DeleteAutopilotClusterRequest) {
                    clusterId = deleteAutopilotClusterRequest.clusterId;
                    contentType = deleteAutopilotClusterRequest.contentType;
                    deleteEfs = deleteAutopilotClusterRequest.deleteEfs;
                    deleteEni = deleteAutopilotClusterRequest.deleteEni;
                    deleteNet = deleteAutopilotClusterRequest.deleteNet;
                    deleteObs = deleteAutopilotClusterRequest.deleteObs;
                    deleteSfs30 = deleteAutopilotClusterRequest.deleteSfs30;
                    ltsReclaimPolicy = deleteAutopilotClusterRequest.ltsReclaimPolicy;
                } else {
                    clusterId = deleteAutopilotClusterRequest['cluster_id'];
                    contentType = deleteAutopilotClusterRequest['Content-Type'];
                    deleteEfs = deleteAutopilotClusterRequest['delete_efs'];
                    deleteEni = deleteAutopilotClusterRequest['delete_eni'];
                    deleteNet = deleteAutopilotClusterRequest['delete_net'];
                    deleteObs = deleteAutopilotClusterRequest['delete_obs'];
                    deleteSfs30 = deleteAutopilotClusterRequest['delete_sfs30'];
                    ltsReclaimPolicy = deleteAutopilotClusterRequest['lts_reclaim_policy'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling deleteAutopilotCluster.');
            }
            if (deleteEfs !== null && deleteEfs !== undefined) {
                localVarQueryParameter['delete_efs'] = deleteEfs;
            }
            if (deleteEni !== null && deleteEni !== undefined) {
                localVarQueryParameter['delete_eni'] = deleteEni;
            }
            if (deleteNet !== null && deleteNet !== undefined) {
                localVarQueryParameter['delete_net'] = deleteNet;
            }
            if (deleteObs !== null && deleteObs !== undefined) {
                localVarQueryParameter['delete_obs'] = deleteObs;
            }
            if (deleteSfs30 !== null && deleteSfs30 !== undefined) {
                localVarQueryParameter['delete_sfs30'] = deleteSfs30;
            }
            if (ltsReclaimPolicy !== null && ltsReclaimPolicy !== undefined) {
                localVarQueryParameter['lts_reclaim_policy'] = ltsReclaimPolicy;
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
         * 该API用于删除集群维护窗口。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteAutopilotMaintenanceWindow(deleteAutopilotMaintenanceWindowRequest?: DeleteAutopilotMaintenanceWindowRequest) {
            const options = {
                method: "DELETE",
                url: "/autopilot/v3/projects/{project_id}/clusters/{cluster_id}/maintenancewindows",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clusterId;
            
            let contentType;

            if (deleteAutopilotMaintenanceWindowRequest !== null && deleteAutopilotMaintenanceWindowRequest !== undefined) {
                if (deleteAutopilotMaintenanceWindowRequest instanceof DeleteAutopilotMaintenanceWindowRequest) {
                    clusterId = deleteAutopilotMaintenanceWindowRequest.clusterId;
                    contentType = deleteAutopilotMaintenanceWindowRequest.contentType;
                } else {
                    clusterId = deleteAutopilotMaintenanceWindowRequest['cluster_id'];
                    contentType = deleteAutopilotMaintenanceWindowRequest['Content-Type'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling deleteAutopilotMaintenanceWindow.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除指定模板实例
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteAutopilotRelease(deleteAutopilotReleaseRequest?: DeleteAutopilotReleaseRequest) {
            const options = {
                method: "DELETE",
                url: "/autopilot/cam/v3/clusters/{cluster_id}/namespace/{namespace}/releases/{name}",
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

            if (deleteAutopilotReleaseRequest !== null && deleteAutopilotReleaseRequest !== undefined) {
                if (deleteAutopilotReleaseRequest instanceof DeleteAutopilotReleaseRequest) {
                    name = deleteAutopilotReleaseRequest.name;
                    namespace = deleteAutopilotReleaseRequest.namespace;
                    contentType = deleteAutopilotReleaseRequest.contentType;
                    clusterId = deleteAutopilotReleaseRequest.clusterId;
                } else {
                    name = deleteAutopilotReleaseRequest['name'];
                    namespace = deleteAutopilotReleaseRequest['namespace'];
                    contentType = deleteAutopilotReleaseRequest['Content-Type'];
                    clusterId = deleteAutopilotReleaseRequest['cluster_id'];
                }
            }

        
            if (name === null || name === undefined) {
            throw new RequiredError('name','Required parameter name was null or undefined when calling deleteAutopilotRelease.');
            }
            if (namespace === null || namespace === undefined) {
            throw new RequiredError('namespace','Required parameter namespace was null or undefined when calling deleteAutopilotRelease.');
            }
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling deleteAutopilotRelease.');
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
        downloadAutopilotChart(downloadAutopilotChartRequest?: DownloadAutopilotChartRequest) {
            const options = {
                method: "GET",
                url: "/autopilot/v2/charts/{chart_id}/archive",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let chartId;
            
            let contentType;

            if (downloadAutopilotChartRequest !== null && downloadAutopilotChartRequest !== undefined) {
                if (downloadAutopilotChartRequest instanceof DownloadAutopilotChartRequest) {
                    chartId = downloadAutopilotChartRequest.chartId;
                    contentType = downloadAutopilotChartRequest.contentType;
                } else {
                    chartId = downloadAutopilotChartRequest['chart_id'];
                    contentType = downloadAutopilotChartRequest['Content-Type'];
                }
            }

        
            if (chartId === null || chartId === undefined) {
            throw new RequiredError('chartId','Required parameter chartId was null or undefined when calling downloadAutopilotChart.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.pathParams = { 'chart_id': chartId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取集群所有已安装插件实例
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAutopilotAddonInstances(listAutopilotAddonInstancesRequest?: ListAutopilotAddonInstancesRequest) {
            const options = {
                method: "GET",
                url: "/autopilot/v3/addons",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let contentType;
            
            let clusterId;

            if (listAutopilotAddonInstancesRequest !== null && listAutopilotAddonInstancesRequest !== undefined) {
                if (listAutopilotAddonInstancesRequest instanceof ListAutopilotAddonInstancesRequest) {
                    contentType = listAutopilotAddonInstancesRequest.contentType;
                    clusterId = listAutopilotAddonInstancesRequest.clusterId;
                } else {
                    contentType = listAutopilotAddonInstancesRequest['Content-Type'];
                    clusterId = listAutopilotAddonInstancesRequest['cluster_id'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
                throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling listAutopilotAddonInstances.');
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
        listAutopilotAddonTemplates(listAutopilotAddonTemplatesRequest?: ListAutopilotAddonTemplatesRequest) {
            const options = {
                method: "GET",
                url: "/autopilot/v3/addontemplates",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let contentType;
            
            let addonTemplateName;

            if (listAutopilotAddonTemplatesRequest !== null && listAutopilotAddonTemplatesRequest !== undefined) {
                if (listAutopilotAddonTemplatesRequest instanceof ListAutopilotAddonTemplatesRequest) {
                    contentType = listAutopilotAddonTemplatesRequest.contentType;
                    addonTemplateName = listAutopilotAddonTemplatesRequest.addonTemplateName;
                } else {
                    contentType = listAutopilotAddonTemplatesRequest['Content-Type'];
                    addonTemplateName = listAutopilotAddonTemplatesRequest['addon_template_name'];
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
        listAutopilotCharts(listAutopilotChartsRequest?: ListAutopilotChartsRequest) {
            const options = {
                method: "GET",
                url: "/autopilot/v2/charts",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let contentType;

            if (listAutopilotChartsRequest !== null && listAutopilotChartsRequest !== undefined) {
                if (listAutopilotChartsRequest instanceof ListAutopilotChartsRequest) {
                    contentType = listAutopilotChartsRequest.contentType;
                } else {
                    contentType = listAutopilotChartsRequest['Content-Type'];
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
        listAutopilotClusterMasterSnapshotTasks(listAutopilotClusterMasterSnapshotTasksRequest?: ListAutopilotClusterMasterSnapshotTasksRequest) {
            const options = {
                method: "GET",
                url: "/autopilot/v3.1/projects/{project_id}/clusters/{cluster_id}/operation/snapshot/tasks",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clusterId;

            if (listAutopilotClusterMasterSnapshotTasksRequest !== null && listAutopilotClusterMasterSnapshotTasksRequest !== undefined) {
                if (listAutopilotClusterMasterSnapshotTasksRequest instanceof ListAutopilotClusterMasterSnapshotTasksRequest) {
                    clusterId = listAutopilotClusterMasterSnapshotTasksRequest.clusterId;
                } else {
                    clusterId = listAutopilotClusterMasterSnapshotTasksRequest['cluster_id'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling listAutopilotClusterMasterSnapshotTasks.');
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
        listAutopilotClusterUpgradeFeatureGates(listAutopilotClusterUpgradeFeatureGatesRequest?: ListAutopilotClusterUpgradeFeatureGatesRequest) {
            const options = {
                method: "GET",
                url: "/autopilot/v3/clusterupgradefeaturegates",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let contentType;

            if (listAutopilotClusterUpgradeFeatureGatesRequest !== null && listAutopilotClusterUpgradeFeatureGatesRequest !== undefined) {
                if (listAutopilotClusterUpgradeFeatureGatesRequest instanceof ListAutopilotClusterUpgradeFeatureGatesRequest) {
                    contentType = listAutopilotClusterUpgradeFeatureGatesRequest.contentType;
                } else {
                    contentType = listAutopilotClusterUpgradeFeatureGatesRequest['Content-Type'];
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
        listAutopilotClusterUpgradePaths(listAutopilotClusterUpgradePathsRequest?: ListAutopilotClusterUpgradePathsRequest) {
            const options = {
                method: "GET",
                url: "/autopilot/v3/clusterupgradepaths",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let contentType;

            if (listAutopilotClusterUpgradePathsRequest !== null && listAutopilotClusterUpgradePathsRequest !== undefined) {
                if (listAutopilotClusterUpgradePathsRequest instanceof ListAutopilotClusterUpgradePathsRequest) {
                    contentType = listAutopilotClusterUpgradePathsRequest.contentType;
                } else {
                    contentType = listAutopilotClusterUpgradePathsRequest['Content-Type'];
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
        listAutopilotClusters(listAutopilotClustersRequest?: ListAutopilotClustersRequest) {
            const options = {
                method: "GET",
                url: "/autopilot/v3/projects/{project_id}/clusters",
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

            if (listAutopilotClustersRequest !== null && listAutopilotClustersRequest !== undefined) {
                if (listAutopilotClustersRequest instanceof ListAutopilotClustersRequest) {
                    contentType = listAutopilotClustersRequest.contentType;
                    detail = listAutopilotClustersRequest.detail;
                    status = listAutopilotClustersRequest.status;
                    type = listAutopilotClustersRequest.type;
                    version = listAutopilotClustersRequest.version;
                } else {
                    contentType = listAutopilotClustersRequest['Content-Type'];
                    detail = listAutopilotClustersRequest['detail'];
                    status = listAutopilotClustersRequest['status'];
                    type = listAutopilotClustersRequest['type'];
                    version = listAutopilotClustersRequest['version'];
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
         * 获取集群升级前检查任务详情列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAutopilotPreCheckTasks(listAutopilotPreCheckTasksRequest?: ListAutopilotPreCheckTasksRequest) {
            const options = {
                method: "GET",
                url: "/autopilot/v3/projects/{project_id}/clusters/{cluster_id}/operation/precheck/tasks",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clusterId;

            if (listAutopilotPreCheckTasksRequest !== null && listAutopilotPreCheckTasksRequest !== undefined) {
                if (listAutopilotPreCheckTasksRequest instanceof ListAutopilotPreCheckTasksRequest) {
                    clusterId = listAutopilotPreCheckTasksRequest.clusterId;
                } else {
                    clusterId = listAutopilotPreCheckTasksRequest['cluster_id'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling listAutopilotPreCheckTasks.');
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
        listAutopilotReleases(listAutopilotReleasesRequest?: ListAutopilotReleasesRequest) {
            const options = {
                method: "GET",
                url: "/autopilot/cam/v3/clusters/{cluster_id}/releases",
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

            if (listAutopilotReleasesRequest !== null && listAutopilotReleasesRequest !== undefined) {
                if (listAutopilotReleasesRequest instanceof ListAutopilotReleasesRequest) {
                    contentType = listAutopilotReleasesRequest.contentType;
                    clusterId = listAutopilotReleasesRequest.clusterId;
                    chartId = listAutopilotReleasesRequest.chartId;
                    namespace = listAutopilotReleasesRequest.namespace;
                } else {
                    contentType = listAutopilotReleasesRequest['Content-Type'];
                    clusterId = listAutopilotReleasesRequest['cluster_id'];
                    chartId = listAutopilotReleasesRequest['chart_id'];
                    namespace = listAutopilotReleasesRequest['namespace'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling listAutopilotReleases.');
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
        listAutopilotUpgradeClusterTasks(listAutopilotUpgradeClusterTasksRequest?: ListAutopilotUpgradeClusterTasksRequest) {
            const options = {
                method: "GET",
                url: "/autopilot/v3/projects/{project_id}/clusters/{cluster_id}/operation/upgrade/tasks",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clusterId;

            if (listAutopilotUpgradeClusterTasksRequest !== null && listAutopilotUpgradeClusterTasksRequest !== undefined) {
                if (listAutopilotUpgradeClusterTasksRequest instanceof ListAutopilotUpgradeClusterTasksRequest) {
                    clusterId = listAutopilotUpgradeClusterTasksRequest.clusterId;
                } else {
                    clusterId = listAutopilotUpgradeClusterTasksRequest['cluster_id'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling listAutopilotUpgradeClusterTasks.');
            }

            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该API用于获取集群自动升级计划。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAutopilotUpgradePlans(listAutopilotUpgradePlansRequest?: ListAutopilotUpgradePlansRequest) {
            const options = {
                method: "GET",
                url: "/autopilot/v3/projects/{project_id}/clusters/{cluster_id}/upgradeplans",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clusterId;
            
            let contentType;

            if (listAutopilotUpgradePlansRequest !== null && listAutopilotUpgradePlansRequest !== undefined) {
                if (listAutopilotUpgradePlansRequest instanceof ListAutopilotUpgradePlansRequest) {
                    clusterId = listAutopilotUpgradePlansRequest.clusterId;
                    contentType = listAutopilotUpgradePlansRequest.contentType;
                } else {
                    clusterId = listAutopilotUpgradePlansRequest['cluster_id'];
                    contentType = listAutopilotUpgradePlansRequest['Content-Type'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling listAutopilotUpgradePlans.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
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
        listAutopilotUpgradeWorkFlows(listAutopilotUpgradeWorkFlowsRequest?: ListAutopilotUpgradeWorkFlowsRequest) {
            const options = {
                method: "GET",
                url: "/autopilot/v3/projects/{project_id}/clusters/{cluster_id}/operation/upgradeworkflows",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clusterId;
            
            let contentType;

            if (listAutopilotUpgradeWorkFlowsRequest !== null && listAutopilotUpgradeWorkFlowsRequest !== undefined) {
                if (listAutopilotUpgradeWorkFlowsRequest instanceof ListAutopilotUpgradeWorkFlowsRequest) {
                    clusterId = listAutopilotUpgradeWorkFlowsRequest.clusterId;
                    contentType = listAutopilotUpgradeWorkFlowsRequest.contentType;
                } else {
                    clusterId = listAutopilotUpgradeWorkFlowsRequest['cluster_id'];
                    contentType = listAutopilotUpgradeWorkFlowsRequest['Content-Type'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling listAutopilotUpgradeWorkFlows.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

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
        retryAutopilotUpgradeClusterTask(retryAutopilotUpgradeClusterTaskRequest?: RetryAutopilotUpgradeClusterTaskRequest) {
            const options = {
                method: "POST",
                url: "/autopilot/v3/projects/{project_id}/clusters/{cluster_id}/operation/upgrade/retry",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clusterId;

            if (retryAutopilotUpgradeClusterTaskRequest !== null && retryAutopilotUpgradeClusterTaskRequest !== undefined) {
                if (retryAutopilotUpgradeClusterTaskRequest instanceof RetryAutopilotUpgradeClusterTaskRequest) {
                    clusterId = retryAutopilotUpgradeClusterTaskRequest.clusterId;
                } else {
                    clusterId = retryAutopilotUpgradeClusterTaskRequest['cluster_id'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling retryAutopilotUpgradeClusterTask.');
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
        rollbackAutopilotAddonInstance(rollbackAutopilotAddonInstanceRequest?: RollbackAutopilotAddonInstanceRequest) {
            const options = {
                method: "POST",
                url: "/autopilot/v3/addons/{id}/operation/rollback",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let id;

            if (rollbackAutopilotAddonInstanceRequest !== null && rollbackAutopilotAddonInstanceRequest !== undefined) {
                if (rollbackAutopilotAddonInstanceRequest instanceof RollbackAutopilotAddonInstanceRequest) {
                    id = rollbackAutopilotAddonInstanceRequest.id;
                    body = rollbackAutopilotAddonInstanceRequest.body
                } else {
                    id = rollbackAutopilotAddonInstanceRequest['id'];
                    body = rollbackAutopilotAddonInstanceRequest['body'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling rollbackAutopilotAddonInstance.');
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
         * 获取插件实例详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showAutopilotAddonInstance(showAutopilotAddonInstanceRequest?: ShowAutopilotAddonInstanceRequest) {
            const options = {
                method: "GET",
                url: "/autopilot/v3/addons/{id}",
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

            if (showAutopilotAddonInstanceRequest !== null && showAutopilotAddonInstanceRequest !== undefined) {
                if (showAutopilotAddonInstanceRequest instanceof ShowAutopilotAddonInstanceRequest) {
                    contentType = showAutopilotAddonInstanceRequest.contentType;
                    id = showAutopilotAddonInstanceRequest.id;
                    clusterId = showAutopilotAddonInstanceRequest.clusterId;
                } else {
                    contentType = showAutopilotAddonInstanceRequest['Content-Type'];
                    id = showAutopilotAddonInstanceRequest['id'];
                    clusterId = showAutopilotAddonInstanceRequest['cluster_id'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling showAutopilotAddonInstance.');
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
        showAutopilotChart(showAutopilotChartRequest?: ShowAutopilotChartRequest) {
            const options = {
                method: "GET",
                url: "/autopilot/v2/charts/{chart_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let chartId;
            
            let contentType;

            if (showAutopilotChartRequest !== null && showAutopilotChartRequest !== undefined) {
                if (showAutopilotChartRequest instanceof ShowAutopilotChartRequest) {
                    chartId = showAutopilotChartRequest.chartId;
                    contentType = showAutopilotChartRequest.contentType;
                } else {
                    chartId = showAutopilotChartRequest['chart_id'];
                    contentType = showAutopilotChartRequest['Content-Type'];
                }
            }

        
            if (chartId === null || chartId === undefined) {
            throw new RequiredError('chartId','Required parameter chartId was null or undefined when calling showAutopilotChart.');
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
        showAutopilotChartValues(showAutopilotChartValuesRequest?: ShowAutopilotChartValuesRequest) {
            const options = {
                method: "GET",
                url: "/autopilot/v2/charts/{chart_id}/values",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let chartId;
            
            let contentType;

            if (showAutopilotChartValuesRequest !== null && showAutopilotChartValuesRequest !== undefined) {
                if (showAutopilotChartValuesRequest instanceof ShowAutopilotChartValuesRequest) {
                    chartId = showAutopilotChartValuesRequest.chartId;
                    contentType = showAutopilotChartValuesRequest.contentType;
                } else {
                    chartId = showAutopilotChartValuesRequest['chart_id'];
                    contentType = showAutopilotChartValuesRequest['Content-Type'];
                }
            }

        
            if (chartId === null || chartId === undefined) {
            throw new RequiredError('chartId','Required parameter chartId was null or undefined when calling showAutopilotChartValues.');
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
        showAutopilotCluster(showAutopilotClusterRequest?: ShowAutopilotClusterRequest) {
            const options = {
                method: "GET",
                url: "/autopilot/v3/projects/{project_id}/clusters/{cluster_id}",
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

            if (showAutopilotClusterRequest !== null && showAutopilotClusterRequest !== undefined) {
                if (showAutopilotClusterRequest instanceof ShowAutopilotClusterRequest) {
                    clusterId = showAutopilotClusterRequest.clusterId;
                    contentType = showAutopilotClusterRequest.contentType;
                    detail = showAutopilotClusterRequest.detail;
                } else {
                    clusterId = showAutopilotClusterRequest['cluster_id'];
                    contentType = showAutopilotClusterRequest['Content-Type'];
                    detail = showAutopilotClusterRequest['detail'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling showAutopilotCluster.');
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
        showAutopilotClusterConfig(showAutopilotClusterConfigRequest?: ShowAutopilotClusterConfigRequest) {
            const options = {
                method: "GET",
                url: "/autopilot/v3/projects/{project_id}/cluster/{cluster_id}/log-configs",
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

            if (showAutopilotClusterConfigRequest !== null && showAutopilotClusterConfigRequest !== undefined) {
                if (showAutopilotClusterConfigRequest instanceof ShowAutopilotClusterConfigRequest) {
                    clusterId = showAutopilotClusterConfigRequest.clusterId;
                    contentType = showAutopilotClusterConfigRequest.contentType;
                    type = showAutopilotClusterConfigRequest.type;
                } else {
                    clusterId = showAutopilotClusterConfigRequest['cluster_id'];
                    contentType = showAutopilotClusterConfigRequest['Content-Type'];
                    type = showAutopilotClusterConfigRequest['type'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling showAutopilotClusterConfig.');
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
         * 该API用于通过集群ID获取集群访问的地址，包括PrivateIP(HA集群返回VIP)与PublicIP
         * &gt;集群管理的URL格式为：https://Endpoint/uri。其中uri为资源路径，也即API访问的路径。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showAutopilotClusterEndpoints(showAutopilotClusterEndpointsRequest?: ShowAutopilotClusterEndpointsRequest) {
            const options = {
                method: "GET",
                url: "/autopilot/v3/projects/{project_id}/clusters/{cluster_id}/openapi",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clusterId;
            
            let contentType;

            if (showAutopilotClusterEndpointsRequest !== null && showAutopilotClusterEndpointsRequest !== undefined) {
                if (showAutopilotClusterEndpointsRequest instanceof ShowAutopilotClusterEndpointsRequest) {
                    clusterId = showAutopilotClusterEndpointsRequest.clusterId;
                    contentType = showAutopilotClusterEndpointsRequest.contentType;
                } else {
                    clusterId = showAutopilotClusterEndpointsRequest['cluster_id'];
                    contentType = showAutopilotClusterEndpointsRequest['Content-Type'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling showAutopilotClusterEndpoints.');
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
        showAutopilotClusterUpgradeInfo(showAutopilotClusterUpgradeInfoRequest?: ShowAutopilotClusterUpgradeInfoRequest) {
            const options = {
                method: "GET",
                url: "/autopilot/v3/projects/{project_id}/clusters/{cluster_id}/upgradeinfo",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clusterId;

            if (showAutopilotClusterUpgradeInfoRequest !== null && showAutopilotClusterUpgradeInfoRequest !== undefined) {
                if (showAutopilotClusterUpgradeInfoRequest instanceof ShowAutopilotClusterUpgradeInfoRequest) {
                    clusterId = showAutopilotClusterUpgradeInfoRequest.clusterId;
                } else {
                    clusterId = showAutopilotClusterUpgradeInfoRequest['cluster_id'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling showAutopilotClusterUpgradeInfo.');
            }

            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该API用于查询特性开关状态
         * &gt; 集群管理的URL格式为：https://Endpoint/uri。其中uri为资源路径，也即API访问的路径。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showAutopilotFeatureGates(showAutopilotFeatureGatesRequest?: ShowAutopilotFeatureGatesRequest) {
            const options = {
                method: "GET",
                url: "/autopilot/v3.1/feature-gates",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let contentType;

            if (showAutopilotFeatureGatesRequest !== null && showAutopilotFeatureGatesRequest !== undefined) {
                if (showAutopilotFeatureGatesRequest instanceof ShowAutopilotFeatureGatesRequest) {
                    contentType = showAutopilotFeatureGatesRequest.contentType;
                } else {
                    contentType = showAutopilotFeatureGatesRequest['Content-Type'];
                }
            }

        
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

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
        showAutopilotJob(showAutopilotJobRequest?: ShowAutopilotJobRequest) {
            const options = {
                method: "GET",
                url: "/autopilot/v3/projects/{project_id}/jobs/{job_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let jobId;
            
            let contentType;

            if (showAutopilotJobRequest !== null && showAutopilotJobRequest !== undefined) {
                if (showAutopilotJobRequest instanceof ShowAutopilotJobRequest) {
                    jobId = showAutopilotJobRequest.jobId;
                    contentType = showAutopilotJobRequest.contentType;
                } else {
                    jobId = showAutopilotJobRequest['job_id'];
                    contentType = showAutopilotJobRequest['Content-Type'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling showAutopilotJob.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.pathParams = { 'job_id': jobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该API用于获取集群维护窗口。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showAutopilotMaintenanceWindow(showAutopilotMaintenanceWindowRequest?: ShowAutopilotMaintenanceWindowRequest) {
            const options = {
                method: "GET",
                url: "/autopilot/v3/projects/{project_id}/clusters/{cluster_id}/maintenancewindows",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clusterId;
            
            let contentType;

            if (showAutopilotMaintenanceWindowRequest !== null && showAutopilotMaintenanceWindowRequest !== undefined) {
                if (showAutopilotMaintenanceWindowRequest instanceof ShowAutopilotMaintenanceWindowRequest) {
                    clusterId = showAutopilotMaintenanceWindowRequest.clusterId;
                    contentType = showAutopilotMaintenanceWindowRequest.contentType;
                } else {
                    clusterId = showAutopilotMaintenanceWindowRequest['cluster_id'];
                    contentType = showAutopilotMaintenanceWindowRequest['Content-Type'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling showAutopilotMaintenanceWindow.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取集群升级前检查任务详情，任务ID由调用集群检查API后从响应体中uid字段获取。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showAutopilotPreCheck(showAutopilotPreCheckRequest?: ShowAutopilotPreCheckRequest) {
            const options = {
                method: "GET",
                url: "/autopilot/v3/projects/{project_id}/clusters/{cluster_id}/operation/precheck/tasks/{task_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clusterId;
            
            let taskId;

            if (showAutopilotPreCheckRequest !== null && showAutopilotPreCheckRequest !== undefined) {
                if (showAutopilotPreCheckRequest instanceof ShowAutopilotPreCheckRequest) {
                    clusterId = showAutopilotPreCheckRequest.clusterId;
                    taskId = showAutopilotPreCheckRequest.taskId;
                } else {
                    clusterId = showAutopilotPreCheckRequest['cluster_id'];
                    taskId = showAutopilotPreCheckRequest['task_id'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling showAutopilotPreCheck.');
            }
            if (taskId === null || taskId === undefined) {
            throw new RequiredError('taskId','Required parameter taskId was null or undefined when calling showAutopilotPreCheck.');
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
        showAutopilotQuotas(showAutopilotQuotasRequest?: ShowAutopilotQuotasRequest) {
            const options = {
                method: "GET",
                url: "/autopilot/v3/projects/{project_id}/quotas",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let contentType;

            if (showAutopilotQuotasRequest !== null && showAutopilotQuotasRequest !== undefined) {
                if (showAutopilotQuotasRequest instanceof ShowAutopilotQuotasRequest) {
                    contentType = showAutopilotQuotasRequest.contentType;
                } else {
                    contentType = showAutopilotQuotasRequest['Content-Type'];
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
        showAutopilotRelease(showAutopilotReleaseRequest?: ShowAutopilotReleaseRequest) {
            const options = {
                method: "GET",
                url: "/autopilot/cam/v3/clusters/{cluster_id}/namespace/{namespace}/releases/{name}",
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

            if (showAutopilotReleaseRequest !== null && showAutopilotReleaseRequest !== undefined) {
                if (showAutopilotReleaseRequest instanceof ShowAutopilotReleaseRequest) {
                    name = showAutopilotReleaseRequest.name;
                    namespace = showAutopilotReleaseRequest.namespace;
                    contentType = showAutopilotReleaseRequest.contentType;
                    clusterId = showAutopilotReleaseRequest.clusterId;
                } else {
                    name = showAutopilotReleaseRequest['name'];
                    namespace = showAutopilotReleaseRequest['namespace'];
                    contentType = showAutopilotReleaseRequest['Content-Type'];
                    clusterId = showAutopilotReleaseRequest['cluster_id'];
                }
            }

        
            if (name === null || name === undefined) {
            throw new RequiredError('name','Required parameter name was null or undefined when calling showAutopilotRelease.');
            }
            if (namespace === null || namespace === undefined) {
            throw new RequiredError('namespace','Required parameter namespace was null or undefined when calling showAutopilotRelease.');
            }
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling showAutopilotRelease.');
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
        showAutopilotReleaseHistory(showAutopilotReleaseHistoryRequest?: ShowAutopilotReleaseHistoryRequest) {
            const options = {
                method: "GET",
                url: "/autopilot/cam/v3/clusters/{cluster_id}/namespace/{namespace}/releases/{name}/history",
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

            if (showAutopilotReleaseHistoryRequest !== null && showAutopilotReleaseHistoryRequest !== undefined) {
                if (showAutopilotReleaseHistoryRequest instanceof ShowAutopilotReleaseHistoryRequest) {
                    name = showAutopilotReleaseHistoryRequest.name;
                    namespace = showAutopilotReleaseHistoryRequest.namespace;
                    contentType = showAutopilotReleaseHistoryRequest.contentType;
                    clusterId = showAutopilotReleaseHistoryRequest.clusterId;
                } else {
                    name = showAutopilotReleaseHistoryRequest['name'];
                    namespace = showAutopilotReleaseHistoryRequest['namespace'];
                    contentType = showAutopilotReleaseHistoryRequest['Content-Type'];
                    clusterId = showAutopilotReleaseHistoryRequest['cluster_id'];
                }
            }

        
            if (name === null || name === undefined) {
            throw new RequiredError('name','Required parameter name was null or undefined when calling showAutopilotReleaseHistory.');
            }
            if (namespace === null || namespace === undefined) {
            throw new RequiredError('namespace','Required parameter namespace was null or undefined when calling showAutopilotReleaseHistory.');
            }
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling showAutopilotReleaseHistory.');
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
        showAutopilotUpgradeClusterTask(showAutopilotUpgradeClusterTaskRequest?: ShowAutopilotUpgradeClusterTaskRequest) {
            const options = {
                method: "GET",
                url: "/autopilot/v3/projects/{project_id}/clusters/{cluster_id}/operation/upgrade/tasks/{task_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clusterId;
            
            let taskId;

            if (showAutopilotUpgradeClusterTaskRequest !== null && showAutopilotUpgradeClusterTaskRequest !== undefined) {
                if (showAutopilotUpgradeClusterTaskRequest instanceof ShowAutopilotUpgradeClusterTaskRequest) {
                    clusterId = showAutopilotUpgradeClusterTaskRequest.clusterId;
                    taskId = showAutopilotUpgradeClusterTaskRequest.taskId;
                } else {
                    clusterId = showAutopilotUpgradeClusterTaskRequest['cluster_id'];
                    taskId = showAutopilotUpgradeClusterTaskRequest['task_id'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling showAutopilotUpgradeClusterTask.');
            }
            if (taskId === null || taskId === undefined) {
            throw new RequiredError('taskId','Required parameter taskId was null or undefined when calling showAutopilotUpgradeClusterTask.');
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
        showAutopilotUpgradeWorkFlow(showAutopilotUpgradeWorkFlowRequest?: ShowAutopilotUpgradeWorkFlowRequest) {
            const options = {
                method: "GET",
                url: "/autopilot/v3/projects/{project_id}/clusters/{cluster_id}/operation/upgradeworkflows/{upgrade_workflow_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clusterId;
            
            let upgradeWorkflowId;
            
            let contentType;

            if (showAutopilotUpgradeWorkFlowRequest !== null && showAutopilotUpgradeWorkFlowRequest !== undefined) {
                if (showAutopilotUpgradeWorkFlowRequest instanceof ShowAutopilotUpgradeWorkFlowRequest) {
                    clusterId = showAutopilotUpgradeWorkFlowRequest.clusterId;
                    upgradeWorkflowId = showAutopilotUpgradeWorkFlowRequest.upgradeWorkflowId;
                    contentType = showAutopilotUpgradeWorkFlowRequest.contentType;
                } else {
                    clusterId = showAutopilotUpgradeWorkFlowRequest['cluster_id'];
                    upgradeWorkflowId = showAutopilotUpgradeWorkFlowRequest['upgrade_workflow_id'];
                    contentType = showAutopilotUpgradeWorkFlowRequest['Content-Type'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling showAutopilotUpgradeWorkFlow.');
            }
            if (upgradeWorkflowId === null || upgradeWorkflowId === undefined) {
            throw new RequiredError('upgradeWorkflowId','Required parameter upgradeWorkflowId was null or undefined when calling showAutopilotUpgradeWorkFlow.');
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
        showAutopilotUserChartsQuotas(showAutopilotUserChartsQuotasRequest?: ShowAutopilotUserChartsQuotasRequest) {
            const options = {
                method: "GET",
                url: "/autopilot/v2/charts/{project_id}/quotas",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let contentType;

            if (showAutopilotUserChartsQuotasRequest !== null && showAutopilotUserChartsQuotasRequest !== undefined) {
                if (showAutopilotUserChartsQuotasRequest instanceof ShowAutopilotUserChartsQuotasRequest) {
                    contentType = showAutopilotUserChartsQuotasRequest.contentType;
                } else {
                    contentType = showAutopilotUserChartsQuotasRequest['Content-Type'];
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
        updateAutopilotAddonInstance(updateAutopilotAddonInstanceRequest?: UpdateAutopilotAddonInstanceRequest) {
            const options = {
                method: "PUT",
                url: "/autopilot/v3/addons/{id}",
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

            if (updateAutopilotAddonInstanceRequest !== null && updateAutopilotAddonInstanceRequest !== undefined) {
                if (updateAutopilotAddonInstanceRequest instanceof UpdateAutopilotAddonInstanceRequest) {
                    id = updateAutopilotAddonInstanceRequest.id;
                    contentType = updateAutopilotAddonInstanceRequest.contentType;
                    body = updateAutopilotAddonInstanceRequest.body
                } else {
                    id = updateAutopilotAddonInstanceRequest['id'];
                    contentType = updateAutopilotAddonInstanceRequest['Content-Type'];
                    body = updateAutopilotAddonInstanceRequest['body'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling updateAutopilotAddonInstance.');
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
        updateAutopilotChart(updateAutopilotChartRequest?: UpdateAutopilotChartRequest) {
            const options = {
                method: "PUT",
                url: "/autopilot/v2/charts/{chart_id}",
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
            

            if (updateAutopilotChartRequest !== null && updateAutopilotChartRequest !== undefined) {
                if (updateAutopilotChartRequest instanceof UpdateAutopilotChartRequest) {
                    chartId = updateAutopilotChartRequest.chartId;
                    contentType = updateAutopilotChartRequest.contentType;
                    content = updateAutopilotChartRequest.body?.content;
                    parameters = updateAutopilotChartRequest.body?.parameters;
                } else {
                    chartId = updateAutopilotChartRequest['chart_id'];
                    contentType = updateAutopilotChartRequest['Content-Type'];
                    content = updateAutopilotChartRequest['body']['content'];
                    parameters = updateAutopilotChartRequest['body']['parameters'];
                }
            }

        
            if (chartId === null || chartId === undefined) {
            throw new RequiredError('chartId','Required parameter chartId was null or undefined when calling updateAutopilotChart.');
            }
            if (content === null || content === undefined) {
            throw new RequiredError('content','Required parameter content was null or undefined when calling updateAutopilotChart.');
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
        updateAutopilotCluster(updateAutopilotClusterRequest?: UpdateAutopilotClusterRequest) {
            const options = {
                method: "PUT",
                url: "/autopilot/v3/projects/{project_id}/clusters/{cluster_id}",
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

            if (updateAutopilotClusterRequest !== null && updateAutopilotClusterRequest !== undefined) {
                if (updateAutopilotClusterRequest instanceof UpdateAutopilotClusterRequest) {
                    clusterId = updateAutopilotClusterRequest.clusterId;
                    contentType = updateAutopilotClusterRequest.contentType;
                    body = updateAutopilotClusterRequest.body
                } else {
                    clusterId = updateAutopilotClusterRequest['cluster_id'];
                    contentType = updateAutopilotClusterRequest['Content-Type'];
                    body = updateAutopilotClusterRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling updateAutopilotCluster.');
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
        updateAutopilotClusterEip(updateAutopilotClusterEipRequest?: UpdateAutopilotClusterEipRequest) {
            const options = {
                method: "PUT",
                url: "/autopilot/v3/projects/{project_id}/clusters/{cluster_id}/mastereip",
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

            if (updateAutopilotClusterEipRequest !== null && updateAutopilotClusterEipRequest !== undefined) {
                if (updateAutopilotClusterEipRequest instanceof UpdateAutopilotClusterEipRequest) {
                    clusterId = updateAutopilotClusterEipRequest.clusterId;
                    contentType = updateAutopilotClusterEipRequest.contentType;
                    body = updateAutopilotClusterEipRequest.body
                } else {
                    clusterId = updateAutopilotClusterEipRequest['cluster_id'];
                    contentType = updateAutopilotClusterEipRequest['Content-Type'];
                    body = updateAutopilotClusterEipRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling updateAutopilotClusterEip.');
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
         * 该API用于更新集群维护窗口。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateAutopilotMaintenanceWindow(updateAutopilotMaintenanceWindowRequest?: UpdateAutopilotMaintenanceWindowRequest) {
            const options = {
                method: "PUT",
                url: "/autopilot/v3/projects/{project_id}/clusters/{cluster_id}/maintenancewindows",
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

            if (updateAutopilotMaintenanceWindowRequest !== null && updateAutopilotMaintenanceWindowRequest !== undefined) {
                if (updateAutopilotMaintenanceWindowRequest instanceof UpdateAutopilotMaintenanceWindowRequest) {
                    clusterId = updateAutopilotMaintenanceWindowRequest.clusterId;
                    contentType = updateAutopilotMaintenanceWindowRequest.contentType;
                    body = updateAutopilotMaintenanceWindowRequest.body
                } else {
                    clusterId = updateAutopilotMaintenanceWindowRequest['cluster_id'];
                    contentType = updateAutopilotMaintenanceWindowRequest['Content-Type'];
                    body = updateAutopilotMaintenanceWindowRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling updateAutopilotMaintenanceWindow.');
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
         * 更新指定模板实例
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateAutopilotRelease(updateAutopilotReleaseRequest?: UpdateAutopilotReleaseRequest) {
            const options = {
                method: "PUT",
                url: "/autopilot/cam/v3/clusters/{cluster_id}/namespace/{namespace}/releases/{name}",
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

            if (updateAutopilotReleaseRequest !== null && updateAutopilotReleaseRequest !== undefined) {
                if (updateAutopilotReleaseRequest instanceof UpdateAutopilotReleaseRequest) {
                    name = updateAutopilotReleaseRequest.name;
                    namespace = updateAutopilotReleaseRequest.namespace;
                    contentType = updateAutopilotReleaseRequest.contentType;
                    clusterId = updateAutopilotReleaseRequest.clusterId;
                    body = updateAutopilotReleaseRequest.body
                } else {
                    name = updateAutopilotReleaseRequest['name'];
                    namespace = updateAutopilotReleaseRequest['namespace'];
                    contentType = updateAutopilotReleaseRequest['Content-Type'];
                    clusterId = updateAutopilotReleaseRequest['cluster_id'];
                    body = updateAutopilotReleaseRequest['body'];
                }
            }

        
            if (name === null || name === undefined) {
            throw new RequiredError('name','Required parameter name was null or undefined when calling updateAutopilotRelease.');
            }
            if (namespace === null || namespace === undefined) {
            throw new RequiredError('namespace','Required parameter namespace was null or undefined when calling updateAutopilotRelease.');
            }
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling updateAutopilotRelease.');
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
         * 该API用于延期集群自动升级计划。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateAutopilotUpgradePlan(updateAutopilotUpgradePlanRequest?: UpdateAutopilotUpgradePlanRequest) {
            const options = {
                method: "PUT",
                url: "/autopilot/v3/projects/{project_id}/clusters/{cluster_id}/upgradeplans/{upgrade_plan_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;
            
            let upgradePlanId;
            
            let contentType;

            if (updateAutopilotUpgradePlanRequest !== null && updateAutopilotUpgradePlanRequest !== undefined) {
                if (updateAutopilotUpgradePlanRequest instanceof UpdateAutopilotUpgradePlanRequest) {
                    clusterId = updateAutopilotUpgradePlanRequest.clusterId;
                    upgradePlanId = updateAutopilotUpgradePlanRequest.upgradePlanId;
                    contentType = updateAutopilotUpgradePlanRequest.contentType;
                    body = updateAutopilotUpgradePlanRequest.body
                } else {
                    clusterId = updateAutopilotUpgradePlanRequest['cluster_id'];
                    upgradePlanId = updateAutopilotUpgradePlanRequest['upgrade_plan_id'];
                    contentType = updateAutopilotUpgradePlanRequest['Content-Type'];
                    body = updateAutopilotUpgradePlanRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling updateAutopilotUpgradePlan.');
            }
            if (upgradePlanId === null || upgradePlanId === undefined) {
            throw new RequiredError('upgradePlanId','Required parameter upgradePlanId was null or undefined when calling updateAutopilotUpgradePlan.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'cluster_id': clusterId,'upgrade_plan_id': upgradePlanId, };
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
        upgradeAutopilotCluster(upgradeAutopilotClusterRequest?: UpgradeAutopilotClusterRequest) {
            const options = {
                method: "POST",
                url: "/autopilot/v3/projects/{project_id}/clusters/{cluster_id}/operation/upgrade",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;

            if (upgradeAutopilotClusterRequest !== null && upgradeAutopilotClusterRequest !== undefined) {
                if (upgradeAutopilotClusterRequest instanceof UpgradeAutopilotClusterRequest) {
                    clusterId = upgradeAutopilotClusterRequest.clusterId;
                    body = upgradeAutopilotClusterRequest.body
                } else {
                    clusterId = upgradeAutopilotClusterRequest['cluster_id'];
                    body = upgradeAutopilotClusterRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling upgradeAutopilotCluster.');
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
        upgradeAutopilotWorkFlowUpdate(upgradeAutopilotWorkFlowUpdateRequest?: UpgradeAutopilotWorkFlowUpdateRequest) {
            const options = {
                method: "PATCH",
                url: "/autopilot/v3/projects/{project_id}/clusters/{cluster_id}/operation/upgradeworkflows/{upgrade_workflow_id}",
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

            if (upgradeAutopilotWorkFlowUpdateRequest !== null && upgradeAutopilotWorkFlowUpdateRequest !== undefined) {
                if (upgradeAutopilotWorkFlowUpdateRequest instanceof UpgradeAutopilotWorkFlowUpdateRequest) {
                    clusterId = upgradeAutopilotWorkFlowUpdateRequest.clusterId;
                    upgradeWorkflowId = upgradeAutopilotWorkFlowUpdateRequest.upgradeWorkflowId;
                    contentType = upgradeAutopilotWorkFlowUpdateRequest.contentType;
                    body = upgradeAutopilotWorkFlowUpdateRequest.body
                } else {
                    clusterId = upgradeAutopilotWorkFlowUpdateRequest['cluster_id'];
                    upgradeWorkflowId = upgradeAutopilotWorkFlowUpdateRequest['upgrade_workflow_id'];
                    contentType = upgradeAutopilotWorkFlowUpdateRequest['Content-Type'];
                    body = upgradeAutopilotWorkFlowUpdateRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling upgradeAutopilotWorkFlowUpdate.');
            }
            if (upgradeWorkflowId === null || upgradeWorkflowId === undefined) {
            throw new RequiredError('upgradeWorkflowId','Required parameter upgradeWorkflowId was null or undefined when calling upgradeAutopilotWorkFlowUpdate.');
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
        uploadAutopilotChart(uploadAutopilotChartRequest?: UploadAutopilotChartRequest) {
            const options = {
                method: "POST",
                url: "/autopilot/v2/charts",
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
            

            if (uploadAutopilotChartRequest !== null && uploadAutopilotChartRequest !== undefined) {
                if (uploadAutopilotChartRequest instanceof UploadAutopilotChartRequest) {
                    contentType = uploadAutopilotChartRequest.contentType;
                    content = uploadAutopilotChartRequest.body?.content;
                    parameters = uploadAutopilotChartRequest.body?.parameters;
                } else {
                    contentType = uploadAutopilotChartRequest['Content-Type'];
                    content = uploadAutopilotChartRequest['body']['content'];
                    parameters = uploadAutopilotChartRequest['body']['parameters'];
                }
            }

        
            if (content === null || content === undefined) {
            throw new RequiredError('content','Required parameter content was null or undefined when calling uploadAutopilotChart.');
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
         * 该API用于删除指定项目下的Job。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteAutopilotJob(deleteAutopilotJobRequest?: DeleteAutopilotJobRequest) {
            const options = {
                method: "DELETE",
                url: "/autopilot/v2/projects/{project_id}/jobs/{job_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let jobId;
            
            let contentType;

            if (deleteAutopilotJobRequest !== null && deleteAutopilotJobRequest !== undefined) {
                if (deleteAutopilotJobRequest instanceof DeleteAutopilotJobRequest) {
                    jobId = deleteAutopilotJobRequest.jobId;
                    contentType = deleteAutopilotJobRequest.contentType;
                } else {
                    jobId = deleteAutopilotJobRequest['job_id'];
                    contentType = deleteAutopilotJobRequest['Content-Type'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling deleteAutopilotJob.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.pathParams = { 'job_id': jobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该API用于获取指定项目下的Job详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        getAutopilotOneJob(getAutopilotOneJobRequest?: GetAutopilotOneJobRequest) {
            const options = {
                method: "GET",
                url: "/autopilot/v2/projects/{project_id}/jobs/{job_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let jobId;
            
            let contentType;

            if (getAutopilotOneJobRequest !== null && getAutopilotOneJobRequest !== undefined) {
                if (getAutopilotOneJobRequest instanceof GetAutopilotOneJobRequest) {
                    jobId = getAutopilotOneJobRequest.jobId;
                    contentType = getAutopilotOneJobRequest.contentType;
                } else {
                    jobId = getAutopilotOneJobRequest['job_id'];
                    contentType = getAutopilotOneJobRequest['Content-Type'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling getAutopilotOneJob.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.pathParams = { 'job_id': jobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该API用于获取指定项目下的所有jobs。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAutopilotJobs(listAutopilotJobsRequest?: ListAutopilotJobsRequest) {
            const options = {
                method: "GET",
                url: "/autopilot/v2/projects/{project_id}/jobs",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let contentType;

            if (listAutopilotJobsRequest !== null && listAutopilotJobsRequest !== undefined) {
                if (listAutopilotJobsRequest instanceof ListAutopilotJobsRequest) {
                    contentType = listAutopilotJobsRequest.contentType;
                } else {
                    contentType = listAutopilotJobsRequest['Content-Type'];
                }
            }

        
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

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